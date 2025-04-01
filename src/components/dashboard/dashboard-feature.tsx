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
    "4XJqKx3Ub3pwhxj3xF5pgLDC17yXrH9uHt3554CCVvhTDjiXYmJrvTGYh7LDRfWsbavjTVFZMpTDTgSEnWaz3y54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h7LY7fzZ5QzAZnGFVCC5e5EgEVe1JqiCiJqhEW2mkxM7jW682Pbq7cFpeSuEKBkcT7QtgMCNpEpYg3yEdXKDDyP",
  "key1": "3o7ostwdepJLkqzusVX7UUE9sQgThg7V6YCgPCwtFPBqyLzaSh8XRyLnzFKiAAcNmtMFLpmjSXrGVDb12J8wByag",
  "key2": "32bFCc24bEuUGwsgXhetrYMfSZnaFoi3Dgpmo7apuySxfEd3FkWNTaRuo4PoedCYjbYFkYZqQaXLgVGTkacDnRQv",
  "key3": "YN7hebaV3BZquPATn8XsB72KvgqApzPAjvp6upRMoHC5dWQnnKxgvAdW5dAcCU2unzdumDwaxEo8SdUrBYXagXi",
  "key4": "3YrUMbviAtZkWHNB2d3mexqTbgKKcuAeQzFSasqqXCcjEhRMpvHCxrwDNacst9BvaTi623D3pQbdrnKPmM8W33CS",
  "key5": "4PAdjGe5kC31vWbMeXexD9YU7RDdtURWe9gzg9yww9kyau5ceZhashymYKT58TiLUq8as59SLeMhy8mUBAHjoLBm",
  "key6": "54xUozEeZBe9BEkK2ZTNd2KfqT8unWMkLKZgfMtVGkXKvcuoPDvJzsYNhrPpJVQXErFfJ6HFhzgxCcTsW2ve4xHP",
  "key7": "5BXdt3ajbiPaSWf5Zmx4SC8kUfE9JiLPji2B8GxzUW3biCBHyXLDvQHEoPntUM5yFwA5kmQB6YeQfuNcvZEiFi6t",
  "key8": "3uKCv6ZZTqfyw4zsAeFqSu2JDApM42zjFUF6ChmRzmjBq7AbJCJ8vDhXX3xzE4yW41HvJASUpFpiLBbFkcjdM57b",
  "key9": "TSDCTycXW51wWX3eK4GVtH8Kegzsfa4LhhdHFTUPVZVgwrbnVZrTuQM7PMqsJ7SMcbj6idQzSqDCVDR7QmUppdz",
  "key10": "2rEo7hsQHeWpLe2n4YVBUkZPY7A8rk2YbFLWp1gxbDAm9XVSKdG4NVLoRXhoDoR4eFCn4wmCj33tw6i8VmpY29Hk",
  "key11": "2yfDYL6YqtWedHvD9VwXmTivZnEiMknwjvTnomiE6NS1nYTskmKsyXEuK1E315wrN8hcKH69keTAqHkeA9DmQwTq",
  "key12": "3mmxKAkJg7RdsGtsr7AvPvjSFWyjqj1AqraNc529s4WajLczYQY7F3Snd4p7M1nQ32UDhBvFchQhjHsqFgFbaaVD",
  "key13": "S2vJkysv4GHwmCFqJmjc6A4tswi6A2io2vYWUcYgkw2gekKKSjuYw9HBoq7Ejzji96NMe8XZbXFtoHeHinDQRhC",
  "key14": "24NuouiHgLVSkAdMhkHijYPyRFuQSeCx2WQFDmQTUuKQpPmRSYqE18ydUTsM6xsS84Jpp9KqRHbYB6DHhUSiLPLM",
  "key15": "5jTWizjqKmUfHrQd3HzHd6okoBNaDf9cKVXFpiT8yywTJp98nn88kD6vhxgeJFSiRwrx66TjQTzpehJeQZMWwfuX",
  "key16": "2SNwXk1TxR3sdq1N1K3EqxMgWFJij59nBjT2hSbJ83Ze7pCwZ3u5fCEgn1xGMf9GoVFYrZH9qU8fLt1VYpK8pSTd",
  "key17": "4bqyQBwndBXWJwhA4UnQNbG4UpbSGPo5TFzR6XGMehniaGh164LbjZ8sFNstG1BfB9cpw29cJZaGqJepLDDgsZv1",
  "key18": "3MhhCa5U9xJ8Us8yALZCkB4aw7ePyHDgRSFqEPJS33hx4USt6eD7GhwyBu1dTenVLek5ZEGQo1iccf3cXiC3F5wj",
  "key19": "2m81GY522UCW5Uc2278TtkkZvmNWVZWifMANZrXigUZTrpQUmPgPCaxMWv7vwqb6KEnLSzyQrAL6RdxbuPrNqQcc",
  "key20": "5FznTjwApJT8SRqyiz4xkEhCJ5Bqs1H1MagyAg3SKWUvMyKYpcjiUdykizVDEM7g3YupocEYAyuN8m2HZBRuisq7",
  "key21": "q5WwJucRSKPRZdC2n793UvcBhKhxjazm8wf2ANCTgvc1i8qn2RH3zFquACEaEPqeuA2qsi9vDsLWjaMH4CWpimd",
  "key22": "4oPu4ZRRezLMcZy7oYPisw2rmd1YAU1TKE5uKKPfjymL7Ng9MgFhKQuQgL6GzdzEutUwvBR9SEvKkYqHeuKUXwiw",
  "key23": "4DiuCaQN9xmEYeWkurcPjbEbGX8D2NEspVJH1NrsRYy8wVp15GsuihcFmEPhPu1RUEbWbZHHMZhtJJmXCmCQUZMq",
  "key24": "5EaEXjaoH5EMxW2UdoediQnUe31LAiHEXa47aj2rksaqKUqgujSfKW6wwHkH8U6k8fW2QERXp7pHyTwh4whWaZ2e",
  "key25": "2hHCmot44ZDVjHdjixE8HKVhRjw3pYz5Wd9nAQeSgbaGAugMzjsSmvVRiUWhnMnScCcsxhL3DKnMS7n1Js1Y2Zsi",
  "key26": "5x6xAcdMedzkDmkz7ywqckaMzx32GrWyUbqA1NCF5Yn6dK7pmqcxKyjTLaBQXg1BsT7kiHKMstjUpYv6QDRWvT7i",
  "key27": "2zXzc9aVNjn9CDQkr2v1kXmPc9P875rEmChmeRUjiceBgWszzamcLCUQvPwQbeYcKBnZ15ngXhMfJcP3siUE8cCF",
  "key28": "3ApE7SfjtbYa7J6Hibn5kQ9TRrcdGDSsmiwost8juEtdPShHEVro55vCVQjPjLwYVAR1whZCf6FxyonB4d1V1dTJ",
  "key29": "3pcPpfs9oT9suFtYB3LLMvXhusZ2h2c3jA8KUrdz3ZgXRtYHjoeSkFpying9TN5TB2BccdNmUsyC4sPpvZKko5Rg",
  "key30": "29gQK7k7HbGAowNuvKSaXeFzcjpsTwfu6kfiEf4Ps6GCC8eZnaakxRraXKGSh43xtK5BSi5taA5nwk4p2L9VDWiX",
  "key31": "4edv9v6pgJw18qF4PopVprPbU1q9ePBcvCSVF1m9G1wcpXxtzuFv7ZHmguSQEc3SujmnP7UEvu6xXpMUybyPHvwR",
  "key32": "3kVpWHbx7u4DWGq38jQZEdM3xj1rc6bkdkpGsz6hvQ9Tmodk1uqQBiLBXqf7e9F824j74aWimQDTvR6dN6GjsYHr",
  "key33": "5DZiuAv91sUZRUknGfA2VS8daDCb1DDU4no1wJWSHQVqTSXSxTdzAK1rMwgvuuCnq3qfgBGv2VbrUjBfRjqJz6z6",
  "key34": "3hddiEw1R9y73oivU9fBwbEzFDHYv9bdqMTTGp56DGEtrRvubWA3iLe2FsC9XxASTquWL462k7mVxnRKiVv7by9K",
  "key35": "36RJuJe3X3zrXeabmQmqGcAF2ievYsVKosq7fbWbND2GJtcioCdgA4YnbynNiKzUmupGUwMhWLhnVXfus27wScVm",
  "key36": "2PsT6rkdJxkdmPGTBpZv3DHk664kgjN2F1tLXsBMiAcoHUYirYdczx2e5TwUFHCdZwQEPq7WXwjbgfXmhP3s96f3",
  "key37": "QhkFrfcsi6d8VLwEJFZGpowDfekMrttMzMdKpcamGvLgTzC4riSVav2PLKyojujsQsGt71eJtRm6DxMjh44uroJ",
  "key38": "gA6WhGSQzgHxMK1hbBcG3edtF8kNHJFgZ4kF4uump9pBZT1NedDvSo5ESZ2uAq7A67yqkNBRhRcbT9woubHUFsF",
  "key39": "4toswKH6hcsouyPw3WCzWq9M8tntdp7X2QLYQ15zANt4F1SE4CtRztGWcbGJ2qDS322NY6gL5wGWtNv3KThxyCFH",
  "key40": "fm7Kr3Buf66aHYaSLquhjbWQKvBAAfF8BRQFDqKXwhqzeTPbHBdyiQ5jajyj2E2eVuQdQqJKignQe2hU8X4UF2w",
  "key41": "2qHi1huf6mQdJrJnv62ZyMo57SA8X6KG6x7Nxw5pp8Fuijs1tV4r1XN8DQorhtCmpyHuqkuyYmsEie8ttsPWrXKd",
  "key42": "gRxeNKBZ32iSprPSKMqKAYUobVpwWKLfVeNWdr5pPcwsUtJBCdNwAZXdds9D5PHgd1fF56xxwy5kwLnatbUcBqQ",
  "key43": "2QDpSznx9MZPrNMDTPs1n2Hv765HnfJS9AEkfRS8B4tHYAm4pu1JYeHHDaqpBz8xajk1JUgtd8R9XTPnUVTya5Ly",
  "key44": "32zbZtkKPzheUQxrEmLWH8fnAq6vPX1Ppwtsv6bzzBEWLuzFGSgUSZxP4KxLvo8VepxBh4ovCtdGASojGZW4DffS",
  "key45": "29RNdRioQpsaMw5xMsBuC8QHrGRBJgsoZPPbxBb4xCtBvacVr2C1JgPTNWpKaL733eq34PsRGtrD5MAjpydWLTuT"
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
