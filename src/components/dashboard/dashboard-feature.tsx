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
    "2LBx77us4UBhW7Bm2dJm8q8RTTLVQdts5vmENnHTLE6yG6dApurKJxwogvz8XzZGTaTJvFUwmzvebHXYL1mMGYrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wpow7oCXvyp7e1seRPoWfP5Zmix4AehRC2YV3pPKrwheNCHBQCd2EriduuWPbNRJebyJVhYkYZRErmtJg8Gakbh",
  "key1": "2tV5JzTtZi8MzEXPtJTEa6cmEfXzFK2nR3ZKm6qaDuUnwWt513QE7kR4vMM9ggKyK39LGPLSqrzzZjVwtmvkgQiG",
  "key2": "7KQKi5Y9auN9jWwU2yFs7NbSeuzm1wzb2P7dovuPVSi8g1y1Qdz3TAnuJGq2HaWX2HDYqFsdBZjS2PKBnPq8sBR",
  "key3": "2yhzyzyGEnsJsJJWMZLYWuG5fXyJVf2YVSJ3k5MfTXE9TfLD826WKHyfJaL6ggZErVRLv1ErdetMGbQqYjP9wALi",
  "key4": "G5RNLuGX5woYTEPXqvsk9BCHeF6GqvGFDDSH9HAwch8iMgBtpknS9CQRHMjrMMNhKciazoomEdihXNg2UjXCfbS",
  "key5": "2KR4FHZAg3Qb3s22r63zkGRELVcs7BfSXuJT27fRZuDEivFiVmM7tb6HtyMFXehso8Ehj29ggekLsH6ZwreeCeVS",
  "key6": "4Htds2eMjVCPzsEjeZmaNThf66nA3VVmGnoDSfJSSfGSQYxxugyJtticohq1Nxhv5rBzBRfmVuWvfY8ajijcjS8e",
  "key7": "CZ8zrCNzX8Vpqo74WRb8uGYVs6fswBhFMeBRuE3Fp1BBVMMjYTcEeb66Z9JyA1cEFmFCsCpTtnhZoaaN1MXR69y",
  "key8": "52Gj1vvYHkmnMEANkQwEkuVYPnKjcgDYSBoxsMidftL3HSGAgwCXyVkq8aJBCquLsnuiGjJXxzU6YqLgmu5THDJQ",
  "key9": "GdsBRJeLoTbQpAqu3m8fdukDc5RzzD9Z74pnm9pKaojK2Tme1VmnT99dL67FC9wkkYukN9RPDz4jDWSxwC6jgaP",
  "key10": "5FCnGB2TMUhzfNfjDNMwR4X7Am62Rr24kqpxEGtDLvM67auGuemDnXfex2nbtSRbRbvtXx2tZZXWH2knauUxHu4A",
  "key11": "39Wn8AdYozZia51kFQtKr9LDhg83rPhHaeRXzp57qE321Qvycj7ZtSxEAG4z6BJWDUCVU58gHp3RS3UzpqhcS5h3",
  "key12": "31NFhw7qPbgF2Yj8Jn3E1p26fzDuSQowcZHHogzzxPTzFaJpYqVXnx4BPhAkpHURtHRg9vSgUj4nXEFNMVZCGKZr",
  "key13": "617BDej1f4upaFgaXM99nQ2cy4SVnaPKyWiVTq1MegpFBtnLxKpe1th9PBRBDuyjChi6hEG51HqUTyxLZXKzuUXK",
  "key14": "2jZ6X9Fiz4mwFyKvCbBreJWkHqvAyr8YCtsQ9frCNonNjQ46S4i87T8U2GrmZaeXaQ1TJTQBd8YKzcJeWBz4oPtJ",
  "key15": "sAHbi8PWQ4HGVcuchsbF9EkmVWhSqyvemtq96TzzhzT2wkgRCJoB5NQRz2YqXDdYqBe3vttKK3Za4s3Ado6HYx8",
  "key16": "2UTXi3jXw8wK1Awv2HDfj5cfLuKa38yA8vFx14tC1JtevZ127wPB62fmxdaSA8Dt2cQxtaBxpAgaYMmaWLdv3v1J",
  "key17": "2n95qxothcn2vt1wb1emSdtig8SSQCSB3f7vFSZNeiWxg838JfQ5Ds3JnFKJ4wjPQC7nZiNMoc9X7amZk8dXyXdu",
  "key18": "3s2N8Re6DMajWLuEweSYDKduei6reRRBtSPycWyGPHQ8PH3LZXfa38r9QBJYQVS7mdchrQG2ra9XEbYnWCj8WzyC",
  "key19": "3vkq44gThxBWCtJvrAqsK5PEB2E2J41LdT8dvRocpVbZRgaWPuyHcwkvQUYzF343evJgUfhCPymZpfGR7vw6ziMn",
  "key20": "4sHqtsng2EkZdNkjMYX8RB2C6nVYcjBytHTqkYXNtyDcxAAMfk7CySaCPm7u19PBz25tCKqkQMk2MR1QGd5e1yUd",
  "key21": "EU8HtJ8gGwGTGbPY52NXWNwBJrxKpmgyAeP52X3HQHHy6WSdF4w8amjwbbxakkzNtUq9PUocmhY1UUa7UcfBb6m",
  "key22": "3u7kDMFs15fJE2Kz77BE3wKNsfCzf4zPRkdTUaHm6zyarvg4htTRmkuvXaXeFNnYwytg8wZeymzw44jxytSbpP3j",
  "key23": "J3jcYEFuX2S7e3riaR7phba5trvYxHyj2Ddp3YUTRSvge58SGAtEPzsKFMvTSN59zja1tNiwhHg9VtyFatDx247",
  "key24": "42faB7Fqdj8FqgZdtpqcwa6eGinNtFn6RzCouWEpto9BLbJhi9vxQFBMy98s54taQYe9srZLRF91tHmXN8Lc15KQ",
  "key25": "5XE3oXzg4XjNea8UzZKfLXhPE8RT25ufMcTxVPskztytyyCh2g2wCdjNmkrsVi7XE4dbZbm6LgVBUEcyroezHNkx",
  "key26": "u9DmBVaDoRvuTWsQJY9bcca3hZBRgzwaRYhWikawfQ5f48YhPy5P6xjVGakjE8W9xivJTKRWbS2YWimiq9gfH6o",
  "key27": "qTy6RFP9vZryqP3AC8McxdY9rB7V3unoLGhvqQxDCxSbUH5iBNmpcFkoFGKp9ErHKDU5j6Bv5eY4GoksjSZfvVt",
  "key28": "BQ6LeiaYWutcPPBMSqHXTnQWjiHZorU4SvzcuDwYzhTeTN9WSc4qUqeNx1NMzWh8cf2PMmPGa4A4BaFpYNwzq8U",
  "key29": "2LArzNvR9gXiWuVUnrPjmFscBkGnoSb1P1QA19jyxjkRhRA3UAheYC8nNRK5smX3JLt223qQor9sTxkuKRbmGQN",
  "key30": "xCYq5zBfL9dyoA1kWWTrgn8KmrRRtWFCfxiU8GbjMAZxn2S5HKbka7AVpVif4M7jWNpxWFX6BYkibch3NNr8GUc",
  "key31": "5kWLJJsWjLMBtEvpTWzuH3Y1TvZGnH9apeVoeV2vDtB1LfubwTALQeSJ4k9UwgZ47bKHRExpSiMbzKRi4M9so9Cj",
  "key32": "3bRPWgxX8qshjWcpmXLuAPEgjsQyCchEP191idSdWYgVgqeWvVpP2mcGoGuH1mxmcGaEBxBhPP2bL445E4JrtJQ4",
  "key33": "2Za9DMWWzUxJXjoJuFKTsBbyHLi3ZfuuwvrSuy6H9vzHp33TP5mdXFai28LNFQMxAakBAf5N9emkfTNYGkSE2j7L",
  "key34": "2n73z1NfSR2fqjYbtPZekHrSSCEkgVTF5bUdkgQozxuCvEB5s2zWibmf1e3WHiecyvRu6kyrvfo9JDHvF3RKyLp3",
  "key35": "3kuDW8vug1DhKoCb8ZHoJdMB1a6pA6LvJBBz2utsfFiT92ZpkZ82R2oSZELuFjRU3WppiWKo8BJqhMqhAm3H4XU5",
  "key36": "2Dj9jsSSDEkZshEzAus81BaUDcx91bkgooPAni51JndmjF2CGfmaNNhFnDorLnjCLRNie8KgEyiG4FT4b42dzXP3",
  "key37": "4gEyQUMifEJZt39SGyuidXXRPeEHEFBZXwknpLyQqgDpduP8ooAmxB7UNcu6mAgwFRrjuKanwYwd5DZaeDNJLnTc",
  "key38": "2TtwrcSNSAJaQjHx65DNeUQENNgyurV1JhVEQLnVa5f7z4rCsuVPYux6NFss9CKsKBCQYxRUeFZZZeiUNF7K1Yje",
  "key39": "2M6W2Hqrg3hKdd9jGk7ND77B8NCL4W22rWXSDSm6zKb5gc2u3139NpjEZiZ3Zhk6FdDSAgiNMf6p13hwreSryia6",
  "key40": "4GzHf1gN7oJUGYY1yLC2EiiDB9gjLEkrfhGzHtrcT7TE8kwPrQsPy6bob7ZU5rTxbdHcb5GGpJFcimuXPNDnG1Fs",
  "key41": "2GsUurxe62NoYBrgxDY6RczBwKCTwKSqY5tc9jnQckf8MYzFnuG5ZXqKcaC7jZpybCCcYKbpSpALZC2BdphY1rim",
  "key42": "Mc5A5mrkyqFqxHm4gfRWSZTzFnYFp9fF6YdbXMRTx4rd9dzzEPVbh5kf1kS51NxeBcvJQLGFz2wgNyqs1VcgPnF",
  "key43": "UdbmQw1Bke5NjEQmYRboymNP6Fcr4qKtVjDrZGWYKk1fs3jTyxg1BbpzpHaTm9i2m9khdwhdDyTbcHCaVmk3gUE",
  "key44": "WVYcRjNVLkhxDosPsdwkSoUJSCG8hZpasN3bH29J7A5qs4rTfSFKbDZjnvfsDZFsXYJkDGS21pn5WL8VAFDyU9j",
  "key45": "k7XSJGryc6CZZCkN96iCpVNi5hN82BgYSr9moZzeB92VdYzW2Fv1yt3vzBMjgS5eGsLJTC81ZbHTZaqqusVsSi1"
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
