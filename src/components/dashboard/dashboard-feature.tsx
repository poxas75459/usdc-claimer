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
    "2AaeQNm37V7Q61bwyobWRZEfHMpP2GeAWqkcZCe1YW3y5ES3jcdhNABNRJ7grjTneC52LRLnqXG9XWsNzd8Edhff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vztaWqG7CYgxvSpGK6V4yW455cb64jyUEMXx6g2Eihw52rjtdS5AeVR3kf8i5NYxNd9TaaWGWSTAK3uMtMyv4ca",
  "key1": "66WWu9Jn6vvJi9cnFp3JgXGjPmGSAdWA2Viyaoy7dsk3kzfrhcEku86fEV7rXcUMQKyP4G5txXLh4NYfDuka81ew",
  "key2": "44LCLmZhmBrXtpGAZRpZ2bDrNuLwEXvBg7hyfF255QVp1Y6pRZvLVfpgddu2HBUvqVePszx8gPUPiF7uiWQpBFM4",
  "key3": "2gSDrBxFQo7AznHWYjaGYwLrjUd8ouop7mCXjP7EEZGPcogT46e6v6aG6mMsiWp7UKNcKdoXwxxNqH3XBDi4QzGN",
  "key4": "5aGbTgn9e8znVDUNrfHNj4o873qes7neEnVA5FxaQAaafsXzJzZz9neeXdfK2EWt69u8h9RrgKbNAf3EMEY9noja",
  "key5": "56jN9PuQjFbaepTQyevwv7em24sYm8GCgd1fT5LsVh7Yxfax4RebhbjCQWaQeYDrJ3E1hewT4oZ7iPivXNqjhmT6",
  "key6": "fTst4X6aC46q4LxsBqaAt9qthGSBTSBKhWuKfcQjDSFSLvkPjCdc27EaGbKeqSzWT1zpwyyx8svDgZQGPccp2QA",
  "key7": "5egx6SLP16DgZqJkBSchAmWwWTQ22n3d2KFrdXrtXEgNZSiUtY9iTCyizK2xoq2b34miv4bA6ks2orTkQ9SRJV2u",
  "key8": "4HdYBeNeHQPFMQbfWvc1G3NnQNvTzbVjUon2W79eyv4GmvpetT3atEbrfmy8QoT9iahpwvCfriVQCx66H7Fm6fmw",
  "key9": "327fLZVmwrJHS7WXpxbf64LoD1QjpSZfAAHtkEnjNgYagzZfzPrV6jMgKrWb7GhWZRGjLSYh2JQMTxagk1yzPzpm",
  "key10": "2hm66WGu6CuwxcFEhBfhym3vj6dGh2kijr2KAr2xSaQh6KFpcEiaAdTRHdqFbh6iyUtW9zQdfSafJbk4LDWrP78S",
  "key11": "2ofiJxhkPNSoUcJfWUaprbWyptCU47cvFEGEx47iUkkAovn5sidFcjNP8QUE7NAvHnE5Nc9NRqjXvNSEN7g8BVR9",
  "key12": "hmzaxqvaCkykAVKBWW2zZ27eWevU1ZqvwTfUSk1QaVFZ4Ft9YhkVyd11XWuYFgucXtrtgUxNCruJzsJn3AMFGY2",
  "key13": "3hDoZK7CmHaWPyfJiMwg5qAuB6nccg464JQjJapg7Yj3CnYnX247ptPc4MAMoVrN4Dft3i1f28eGbHbYcFkrUfFg",
  "key14": "F4PDdnN1mKpZbxkLyra1J6tQG5UeXHgwPUvozFiZayEXVX4hGrmsg9Su7ku359jD9skV9i3Ygb1CYRX7c4tPrwJ",
  "key15": "4XaByKLjao5vhmXqiHqkY7GA9xfqzJkcspHqYwjWLL5CCgFYHHpSfa5zftYDTZjEE7XQxcgzzziagcmhy6jhtzwZ",
  "key16": "4abMZPT9QdAqdSAxLTX5v42oKwKYi8FrSng555JUE93vFmGR1gEH1gtBrpN1yrGrpqcGh61iSvm12fRRPPhBRKxT",
  "key17": "5dTyvFpqyPyJqqHA5EALyUY8UtevamF8mAWfGimtZDCwU5qZwQP5ff6jnd6LuhWZ9gYa1FXFEDiCgQAs1k9xpggd",
  "key18": "D1oi1A8Yp8cfz4nmG7TKmLQ6No29VzjxJ6uK6a2gXdRet4pbugyYRtGrqPJnQuTfvQGWPXXTWp9FfDSZL7nBLKd",
  "key19": "3qDBb1wZvFCSPxovYHjemsjAbgMaE3DmEhgREjY4ZtPFrtTqM7djTx3orvyCm3uqFJmcaTxQAmwBC3B94xMAtnGJ",
  "key20": "4yTe6HZYCPa46yztxTaxYrmfB7MRELR4YJw4cQMHQdoqBWfK6kogjKv6mncua3jd9g5G9tjjTCL56NeSZyAY9k6v",
  "key21": "Bv7k4NicGXRus8xPGz3HV69X7YB324Pg1LZqDxeR48F6k3BXLqu3RcNRc3G5tQNvNbaeZPyxMf1WJ7Br3z728M6",
  "key22": "4sqTvLWKcwdwCpqKmL2qpTUuzKPDNvXg1xXsjaLHC5m3SJswqq6qoU9yz8BtSfgkMER7dvoxQuJKBXkGt7KuktFD",
  "key23": "iL1DCSbMMsJpD62w2xw8VABXtiMuvignMMtVVQzgpuAd69FkMSvGgGKkf2UTTwhuvQXwnbjXvJBq4nTfMLSYNgQ",
  "key24": "eyz6kDruovXuKDPfUix5pHs3Cdmd1gSSzta9z9ptBwktEMvHP9q5CHSUxbyJRmYyWZmzp78wVF3NjH65g2u4MzK",
  "key25": "3Zi25vx8neSexuedxnvyzs1qXmrvo71ErqMyDSJnAb9p8WBVm2SnANKqghmriixCLjVVZUv8Gg4U6nG2V5eorGpX",
  "key26": "hHqGMZ5DC7cA3DJp5CR79rnsdo9LfJeHHmG5Sj69EC6rs4jpqeKqv4UVVUnnoQktLn4fC3NiV4kc8WrNMNivJQC",
  "key27": "4wAgsea2MevrA6A9bP74Nv3wKqdAfrEvShqqhHA8PFDfBxWXM1KCqmVTxs9WteGEuj1eN5TML6T9jSKPWNJTkWoy",
  "key28": "eNqEt8ZE9zXahQ464fPPzTviPLbXXNNb4UA8e3Mq77QzpiW3Sh7jWHPxbmqDE8rt4bfAHkLyHesZbgzCKSeRg8P",
  "key29": "4zBAArUG9mxMwnJFRPuDacEPp9BT7XVErybhab5vFacHsaGydAoGGJvh6ZV2jNTbhQ547hqJm7nsNPYPqc9582bp",
  "key30": "2ooTYjH45SpifmmJ9YE54TpnH9KkgGz7Lgn4SCZX3MRYsxQCEZhVdVLbGFS5rXfM17fQD7GXDJRi7okqvjPPa1PE",
  "key31": "2q4tnEJuuxnLqNVAubye958dJkQCySn6z1RGH3m59ABzQcCifCNisFKWVNPTbgTGKxRjrW67AZPx8J7z7A51icuy",
  "key32": "2FPK6BAxFHpWAewqyAtcfSvpjcrJKcxK82CwbCmEBos185bLwF56oGqXiAe6pT5rfkfPwfKU4Kn5iQivbwK3tYiT",
  "key33": "iMMQZh2mFoZ1wTeUqQbSE6QH1UsWCtpyoMCXZSAd4pKBUvGUGhjb7sjCrRxQmtZsWKXQDQzQUqv7UVR3v4TzfZR",
  "key34": "2kvm9BM71T13nfrdiTx4fgwBNSKrUVefaFKwJQPY5J1W7h8RZQsu76MLqYNEYGQXqmxdf8XxCmFHAnujgCgYimkK",
  "key35": "3bAVGVtoEJqj6cvXtchKzRLg9DLdxTGSDjjBZdiLnoXk5WRLrFYG1T5DKX7ncAe6YttMubWZpimM4UGDAjgwYawU",
  "key36": "2EaNJpQq2zNgZ7GiGs3HdqwMBuogVvwyTpiLhR3mydiY1nhM2De9K5ywgTYgsgXmaj6yCzW6nVU76aTzMbMDKyWc",
  "key37": "4V1Z3GZMHDkT6FfcBgWnT6DxCCMxRJgGXmaZXd9RkFyvq6wMmGzRVurGTQSkKfwEzPvwhykkjTf5CwXDS2NWLHj",
  "key38": "4oKaYrRgo7jbsFchbYeBH1icVdUjcWzgktf4xoGH5MY8xqvxmwWsbVnHyW2Ez19hqmB2CVDXQE8BP6hjeGRPguWR",
  "key39": "63ndjDqiSTMg5xPR2uRemboBoKZ8QpreBzAXTLuF8c2LJtk46AF1Bz6i5yfDEehrH9uKEimiSXTCdtUpQSuPEdsa",
  "key40": "41yvbH4U8P9jcqVogCUXJR38zbe95xgLjzYoDiHfgB1EAvUuuv1gGJPmhGiGNV7cocJQWdHdhR2bCRDA4FLwtMin",
  "key41": "2ojvxBCbgzgDCa9Y4JSJteE1EsLKXEYQjNqCvMqerUDwvM3XamUayuXfHV6iupLpsCo96bYnqWPoptnwhUPLahmG",
  "key42": "4yA3RV91bkhErSM8diy9zTbdBFoZxDFZGJG13CvijgP4KFzA2TBjh2psnR6wv4SVpAyHbsKjHXZ32ekdDQYV8n53",
  "key43": "2QeVvx5zGitfZ7m3d8KMFhy7j4GNF7zNkmAXZdLYq9SeSJsi4bb14rpX3M4JR9zhyU8WiXEDnzEjM1ygTBo5jmdL"
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
