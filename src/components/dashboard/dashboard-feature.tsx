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
    "pq76Rdnb3QznFvzMUkrNRSTi71N7CDnUswkZT3ezP7Kbq73evi3b6bhhbY3dJVVqAaYYM8KRG4h9fzSB6ougyDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "286PjyXvL6vJpwsqUQ5m3rpMKWGn7G1i9f6BBAijwFyUu6F2MzpkoqZK2J9xDa3CQkJ2Zh8NYF5MPPpn8BAigFWN",
  "key1": "DRqSFSBofed6KKSChMjKBw2NypLgNLiwo2kDejbEpqpDcSWvT6xDeWPtrvd1FdXESdjYYdadCnkeagWUoRdYU6W",
  "key2": "8d32YHj8YcJbTMrgYt42yHYPKZffGtKixKH2vd6QyzCBWUbhGSxZaUQTKDFtSVdnsYtpgZs9VDsZhjCt3qGkKs8",
  "key3": "5AukqFwiNBtQ4U8Kh4Up2b2ETJhdLUcQ2NtFH3ozYuyFoaNQmMnH8AotpBDd5TBRCbwJ8NjwXDoCHgNkqyKG4DU6",
  "key4": "5wscmnNS5KueYqu31VdieBN7D3wqqvDTq67YfHHc9fxyDwrLLatiJ2UqTJx3iT1pcMcjSM4oy2cbVYrzVEczkzsX",
  "key5": "52RTxMUEt9UeiXsWibbq9jxsWxAUNSK4b8Szc8585EU5ngZtGCqvbPPyg6nVgWyeqkXtA8jjecLfJGzQEwAN1fEN",
  "key6": "tkTRBeTa1PgHEsC8ECSAr3WXxXRxAK93rzHW1irZvbqLR1Gb9jECotenimSVx4MQRssw8ECfaHWLLkXn8TkSUPP",
  "key7": "4GcHvN1zsu6jxmMcZiSWBh5i5yYP7K5soo9L8SYtWya5xgjULkCPKAtF7BSVxSWApybf4Pr8UtzBBG766FPKjJT5",
  "key8": "Mcg5dwM3UVji9zW9F8pML1dA6mTSdadjHqt1AmHReyH1a6JWGwhfdR8E3b8LHQ8qVPbmQrJQDi2urqT9DqVxAzG",
  "key9": "488G7bQ8NoKduK3Vkx3LRn1CKk3sAoVMLpobUrhYS5mh84DwHefePKey6WX1SFnnuP8Akb95FhHWyzDUPjpGtPmz",
  "key10": "2MXHyoqukbcEMfTyssmRKN9E72hjJUspSLqb2pbsbb23FYPoGbPGaaDEPAn1zEqncRPzjJQY1XhqYyb9gWTccvaB",
  "key11": "26fLmENnbHkQnxGybA8qN1Uyf2eXhaQ295miNnZCJK9ZxMVc2e53vk5jHXKD639cGnFQudQ2V1c7VnomWVWaqggi",
  "key12": "2agq4MM44kFQLFGrxeG1gCbCWy7cECDXEpwVbufFznXGxwGPbmNa2zwbzSwtkXMGyZXRRY77jDys2AgSYQtZexgC",
  "key13": "3GmxdMVPahhWnHCiGpZxTJJg1ymLDwdTrSfJi7aY1TPLYBU2h5ayMLf6JdmPvRF7dA3PK8VkchCEUZ2UmExCRTMj",
  "key14": "5M6GFWoovNHYTSQeQhFA6ezDyVi2wLHPiKoW73LJQxqLpG7TRL8ZEoeFVMzDjsp3RBoXySps4sT1MpLM8E19isN9",
  "key15": "TkCTaYUhaBdNeCxpixXcoyWgHmiTVewDpHLfVVPXb7315zLmB6hZctYtXwEPvm1zw9kycrUnpYSEbs5rtjLDRAn",
  "key16": "4pkafjEisbDua5mhi7g621aReUH4Z2gMYKuoN6Ti7WqDx3J3GdFmQPeKHEU4GV7HnSip7aEGxAiNpX3btACwpdeE",
  "key17": "BgXAvwdCbvf7t6KGEzACggCVq7BubGJUqk5JuFjW4shVHrAdn7n8TuR6j6xhXJXM2uG3da31MZrboMosjQto3Uo",
  "key18": "48qnV1YiLDf64aMzRX48EBZ2mSfF9CnV9XsUXb3FrgjJrNxgeMwDemD871g3UFVyv1FKRVMYnepawmHdhCksjT9K",
  "key19": "1D9mhFxyLaCojALTtH38VWytGzE1ZxSQTxZArtLkwA5Po6yPyGJnec45JR8xWJFaJArocnt6MFfojbdhz77gjPd",
  "key20": "227ZB3uzX6yvEjnPiCKRy9iKuVjYK8ACRoPgGQcxUkytap2qtwBrb3iE2wMpuPNpqXBem3N1LZgczfKvLdNqYyY2",
  "key21": "62vWLwZquWxwHPQHeSaCDeFGtWbKSKUrDc42HRCUwQj5D8ihDqPw4tm6dspBp8WgE8TyL7HzSk7fmZVFqmbF17LP",
  "key22": "27ntzXn4yfj1sMqvKNgQcyB1ikumWwN3MraqeuAQFPJ76FbWcsN9DZemxaDT8sALoFdJuUWK9DdBUT2ynxyHmmBq",
  "key23": "2nzgVSyFQKsffMRZNhZGx2Kvkap7qyerw38JWRuwqk775HH1QuESiVgFgo3X9extH5hJ6tDzJye3wzUrDfkGczxc",
  "key24": "3p3MFu7hMQqAF85pCWHhEE1TVwTg6N8VkdsZVsLBZDEaKLSehWsPLHNGLC6BofTdCNaYH6hjhpzAkJbJneAtqUCj",
  "key25": "3jAVA4C5ekxUmoACtekASvDVkXkSBXFR4ks1BzsfFsznsod7YapDxXAfSmJRhvbXn7VQ7vY1HTFWo2YU8V4eyKBo",
  "key26": "4X8FCLwiY95tbEPTiVwEset9RN3YyesweCzq8PbZkFgxBbjRmH7U9zjFd8NFqRzJJ3MctaXNzKZFMC8fBgySN1gy",
  "key27": "49L4sJ5jguqwjiR3UCuyrUWLMmwbTziYmWUuszYzaCVPQSi6srKtbD9BpBi5h7NtS11bfVvZNQu6TgdSuyYrVL9U",
  "key28": "2diTi9sJYeKPUHyCccGMmVsTAPCwpxUGaBk3wEwDPXfeuwsXbvtKD122GWEnn3Zf67bdYaGxsNQEcpZD1Rqye5tZ",
  "key29": "4698mjmtpQ2Xv21dcZTx15GMt5szizgE8sh4qF6XU8KcfYyaDBn2ddPqobMgNLuo9xvCh1T8XpmWwy8fKz5SQXmi",
  "key30": "4EuFAnRsGEUZvMp1qf1gwVpYsRKQt7UqAsZHpGtD9rS741mQV6zWF3tLpc7D6e7jfTfu7uYWY6jFDioSfUwUjUHA",
  "key31": "4rfXNxaTjohtg8kE29Z64ZfX7jv7RwTcxoTb9LGadKoS4MobfUsbe4vfAGJGyTsXftHVqo2xXMSCxWuoaVBTH2p3",
  "key32": "2cYpmSQDN2rnn8qtcAr8sfhmd1WmNpPqbhGq9fzJUX1GXwpka38KM2APA6Ae3dtHXGvLJgNENeHSX53gXHY5SEGX",
  "key33": "5PpzNA5LdZKtjfSpPKmpD5SbMsCYCnnyoRYFKhXBQt5rRcc3zADyUkdFx1Rk6QrWetpqrQCiqdGQMT3BmT9X2muJ",
  "key34": "5PbJvvwtP4eRrR4tcaK1pUk7Dpf2mc9mtHeQ8CCdYMqa3EuvrkH4tr2Qts7bmqmk4HnEb5MQSQhdV1kdUroGmqD8",
  "key35": "4S3wc8GnvcS6mSwWBx9ru1oiB5oMf8boE65GLfxzzpiERyoKkjYtuYBLCqam9TVsf5Qb3DyedBW1YHouUSK7Hzum",
  "key36": "4pL2Wzr3s5WJbZZRnh2o9818ap2W2bai2JwbAbrhhKHHEVEiVZWEijvUcaCarrPuADBtLi273n1ebrqra2B9X1Qo",
  "key37": "272CnTUKvAFFkjy4VafubpeLQ4P84C81nrYpfeVQhk4oLtTVqnwcz6VzgkAEQcLwNHZxT9Q3Ct7WLUWA7T1fB5oP",
  "key38": "bXLpfL4VJmDYzdQwvCrFMx3LmBkEj243ztsUvwoVqacCXLn1yLZbekox5PkMG7d4eu5FDYdf3ZzqCr3SZkKq2yd",
  "key39": "T8LThx2HxzTqT1xxas47WmcmjUf7HXjwYvCf9atb3i7vTpqvh2APTMbZ865UmF5oWn6FZZRXvk4otqt68uu79Pw",
  "key40": "2qTszSXBJoPHcfDfqBLLrsjG3YU3dHDctRP4bSUySzYMeZBGRcyQLMyqkAGnrKiPyBhaKvLuRZVLQkNRULeDTV6y",
  "key41": "2z3FcFVsv1EZtEB7ErVW9NKY8YxXDP2FADCttKZQ7CgaNzAu3YRqhnSK6yjwEDFrobBKKv1pTVXyuB51rFUXqppi",
  "key42": "5MEvgWx2BQntYgFvoDZ9B6S9PzLDrDdKTZhD1V5uWyqX8t3NfHdk6Gayr7LzDynCiLDCmVL2ZqEMZXS6CajNreMg",
  "key43": "5KwJtm4VihxCfaRGTVSUGKpc3Tot8TK1KUmzmLyz4fMwAdcEj5VN6ybHf4xDf7tvHtfQ69oCEqEZhsHCfhMSb8ws"
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
