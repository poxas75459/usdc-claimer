/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4SLkm669kzG9uijoXeNHVPJCR5C3NCcnPxeyrmo6WTymxBRGmRuVhNTnpFQHN8z6K4viAsvRakmeFnZfna6iEDYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J4Mu9P7vgccyhb3NFXGW5tz9CGJ8jMkspvRWEQBX7eeTJUNYHAucRxsAG2kVFmFcTeuBpkWetV66T1Mr8Wgvd72",
  "key1": "LkFkPxshZ5cs7hzdksXcK5JyD3VHyroJCuA3g4MAtss7gUJ38k66Pdxkng4MTtKLRZF2rRRsPb7z4gA2jbS1uWM",
  "key2": "Aq9nzFXN1SkBwr1EkHRtAhnZ2EBp1JNAthx383J7ykiECaZyPLXSnkSqHjifsPziCXSYWQw1NitRb7BZkA6Ti9W",
  "key3": "4Zj86HkoJqi3HX2tN2uetu9TbiHEaCkcb8WMzYAXK8GjZ7miPgHoTqBMtS4EBgbxisaqCvFAsDJEgnu6QTvzYoRg",
  "key4": "27d5idCY3ghomGHszPY2r3Lh4MLfwk1LizvvK243q6s8oMjuCDZhvXqJvPoveycV2JTNjMPExokURtPYUEBiGUAU",
  "key5": "467rLUhZEnSJAKwASeNrhEAKQjT5nLUE3YCFTYJNcyji6RjF9j5pASUB2rZTgwmoJRnqqkS3MwXsZJuGoUkJLcT6",
  "key6": "3n8EJEnkvEUK9HPXM5pkkwXB6f1kLD9GyXS2GxustQEj3FQjm9sRchEPcsuDqaHQQH1ywGpuzfT5HA4uWZG7jPci",
  "key7": "4bdXD8JLCxHemAiK7gCBWbiyKmStEFM7dJMh1kcttEPPxLibkozqsRYKDE8ZPjvp95DH3Zb7Gg6S2NnBtsTF1V63",
  "key8": "5WqZTdtNJgseHQGPfstPUGmJinXRJJn5W5at4MXa43mUxBUCkSSqknKRrY1hNgsfoBtqNyfpciUYjRZxHvQNNy4k",
  "key9": "vnaP4tbTBiXhTpAPK7PQCT47Ga8ZQ2NNghVe2ZfW89kYNHky74MjvAt1vemDRjrWHJoBMZwcUGYnaBNSNFsZDBv",
  "key10": "3UWfafeqVbjjaameKRMBuVqSXca5NUbhXwUiVSsjCmWc11PRABw1vxqaJduZYF8dbLYPnApzUzLECfGfa1hQto27",
  "key11": "2iizosT35WqVX5YQCyQvKuP4mC8hxZsnUzJ93ixMd61MHUWFV6tdgbaWTS8wGcWuvKCYFU4CpLrzhyfHhbw41aCm",
  "key12": "3w1y8J5utHAQESacN8bcW6g61Eo8nbakjU95jC9zMs1C2dFBbfKcmxuAAKkSBuJXtt7MTdCC5kywUEm9f9Zh7zst",
  "key13": "2vZMgVExt4wA44nQ8MWNfbfZgGGo8UsdNRR5iqspxMUWnF3hM3i8eMRc1c9k2cvR9bsoJpSsYWU5oUTd6GmMb4Hs",
  "key14": "46Yeve4xysEj57Wk3Kq1qUjq8Ez624y8h2xXhzP1XzW4brqcFHT8t5U15kX7oDrdCedCDarmwW2aFux9Jxoxc8dK",
  "key15": "5b74BmAJTX8g4oDTpAiUZYB768Nvzuus7MJ5BUtHCyWk8vgDKdxqh1aLLxTATcax65oZ1GqQg3tyvwttgWhP23FY",
  "key16": "5p8JvJycX8aArZBpJVtMM5ANB41hqL9MdoBdTCS8hWVK2i18gMLCBKuxEpdwMEtn1n73AV3TisV8Sstmsa5V5ZCY",
  "key17": "3RSDPDcLzPYYN8yg16UqSE2NuGguPAqNsJxpRU5kWYFi4XLFcrGn66a8oFrteBfYKjGREYCdn3fbxSjvbkcFWDJY",
  "key18": "3TEvJsiomiojANzz2pSq7uYq4KX86wSkP2KSPcFWHrT5imGjXFDvQy4C3HuWEZX8LQgYitsAQsgZgrJSjjRiM9Sj",
  "key19": "zsM9dhRobgjqueRChrxp4z9dfJjMpnck367VMwCxCwxDMhNiSZFdsd6iWujpLJSMNX1h3UvW2iBDaPLfady9xof",
  "key20": "5uqjarFkXPSjt8C7SPiLufALpTf8sbAJ4tDYQDTCCApLMeQJFqvgnq7fPQSkJFtfuqgVoJZA1MR7yxFtyd6FiZgW",
  "key21": "26XDJD6C8F9rYo192epjjnPB9SafDrn9m3hZpm4sLDmJRZZJwSfHmK4SdHMmigq8bgjxHi8VdgBmNKnvgMaswpY7",
  "key22": "5Eey3KBtwTWaMc8CwYeubgTgn36SygUnrPUhnCEoRyCjUdz65gNYURt5STFMwVnyNdjYdjdpwrn5qWDAsBcF2dZ",
  "key23": "XNesKEZui58DoPxMH3F4FnoxJoM6CjggEbogRCZS7SrW2XJuE7D9KNxurfE9V6t5m1cmKP5H9fHmS2epvtxadkX",
  "key24": "361CSSXdaCr49DnQTCME8n9hDp8uBzqt4tuG2N8qfTtD7MSAYAQr5Y34K7uRFWbjJa5E6t2rK5JbVVxhWGfzwmjU",
  "key25": "3GuF3emowaGsN4EAxTh9V29zNAjLnueUyX5YLfgEo1Ag8Tneasw62mDVV344RyeXUFPo5ABEdH48GxcgJYHqZqRj",
  "key26": "5tJMpBWaeaT5pzZxJH5yn6eFgd5hxsVEdU9NxaktRsnAwv4tf6Zt64fyqYukJgaLvvoMU5dZLwVdaQutJhr6Rw9j",
  "key27": "3PURjDfHfkADFaXJe72aEcxHxYcB9mUd1s4QTroUAucANz5UdhERQQp5Ybz543iaPAv2SCn2n1BqF2DM7vKEDpAD",
  "key28": "2SEj2NSngkbesDjSNBjBuz1uKQT4Ng2HhqmEYubNxMNynBfZVtDFQDDo5YjXfWhpnvoL4VciovzDuWSrV7j4Nm9X",
  "key29": "5PkxAMbvFe7hr6c9eeeNAs48WJnpcmwawCCE5J2mJovVRW33yR3oFnhyKEF9vtvregTnBW4jYmhm1t57KS2bqeyf",
  "key30": "3tZdRtvpqph7pn9BhsftscY8vv9VvQtqk32wRYu9BUczwcDuh2qYHoehkVhjtpM9cUYQzvwxAagyuricdez54poE",
  "key31": "2DX5yQ66caw3m9MfPQNQpn9sN2o2JphVJK6EgwCfPWoNz8sgRUBe5B8Dt5dgrGLppFznefoeexmjD97JDbGFtS91",
  "key32": "3eAJt7CnYNLqk8qmK2rASjEcQj6sZT13yyuSSrbQ9vv2QG82Hi9e6k9iUqvUFFibHkURNTkKNLW9i4YnD4jcRLkC",
  "key33": "4TRfW9P3LeqAMKmrv5EkeVSPwbiHN11Ddc52kWJqggsAge6ACdCxwFvnK2jWvy4HyV4miJdP2sb9QHBGP5BCkLfC",
  "key34": "2vJ5wFS1njo2i9uSBcd4GFVw8rxeKtBti4vrq3wG1wAGaiNN4wfdDRL5SYePM1LJksTeqpbJabpv2kkjG9Mz2bnB",
  "key35": "tmbibEhTZqua4Z9Cx3Wm14Q1o5jrQU7CuXbMtq3Xp1BzZsfZgTmf6zop8yGXXNcjZCo9GtazWVWqTL3aMFL7k3e",
  "key36": "4sdAXkLWuDwEpTxinyDQz33tVPHchQ5VVx1u2szsgHGrgByLXAwvqCyL9DhzhipREaFwhpcDAQQf4fNSAnGTiNC1",
  "key37": "2G8RWiyUzVcxCrGbg21pKZ55QpFjgMEkzXBPWKDCRw3d28GvY2okrizwyL8qRHkFa7riqaCtTHgZx3R762dPR8db",
  "key38": "2vcZpojgG12n1fAy97L77ju6itT9kXPGQCZfT8a9uaMjbqtBARnd5Su3umb5aseaGTQGLFF5xUxsDBY91M7TZtMQ",
  "key39": "5YhDhz36oKnrWZvvEu286jHXZXazkMUT5cGku6foDQmaSNx2x9CPe1jr11eSyLjH668bwMPsw7j1jBRbEfSFMMRb",
  "key40": "7FFB3CJpGVXE3SqF1mZcF1h2PEnfm88yieJ3P8n58NJCXmnR2WiMWdQ6XHi7uCu7YYTvrphxJz1X9wxFVZvkTs1",
  "key41": "2jV2X9GQMSefKNEB7HaMtJd8NLFhaGUty5zrzQDMdSyxEtncCK1sMziCAEmD113ZVjrTyDtrQjpH9LMDsubsSEV2",
  "key42": "vomxbW71i9A4er5qZDKLRo5BejvFaauNouHueWEheAnmNW3yDKGHrQMqkrBR7ncL8y365D5DbnrxUV53punQmoj",
  "key43": "33F9uuXFznA7WuUDtFuUePAZepY1SPJckAnNSqLQxGajGJ3EU83Z6uhuQHGqbXGuLyYu8ja3ayHBhPeErFkb5XwB",
  "key44": "2M4cKk2RBez9r7pdcHREbTvHeeNFAJ2R8XHsTfUsTVT8qPktWxHsxN4BvfJg3ZBddFQ6ssKK7WDwwxT5d6Parz8Z",
  "key45": "2GsKTrqWoBYx78PykuzqKaSmSnwcy7rU8MW1roeDHoSqWa1PuwxB66NuvSyRAQJCri2WFpEQx3NgKJ59yZW8geN6"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
