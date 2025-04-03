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
    "5LpaeB2qZjRhqQCrFAeEGrYyzwTpS5QjoogX1E4WchtA8nWVGfH1TcQFJH1CCThpPyJJG1xW6oceEwFXUKo7yuV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PBL2ZRqSncEt6fJjtvtD4HhU7BVBkL1sEQaMjXLUeHRdg5Z97rFh4wE4XEBiZNvoQaTyhthaGbqeg4jHkc9j9y2",
  "key1": "5K939Fks8fHVYCmLcD74H1K1okMfKjWttpCf7HQKnk9yjo6TagDj7v5oabwzhtyDjwNuPFsV3m9CMnqnva1YNyCJ",
  "key2": "5WS5v1ufUFnwdY4sD3xri4hpFyptXheWjJ9LbTzXrcTbFng8oVPa3aMBWPBzahXHg1Eg5TDF75iye22DQDc6zWUJ",
  "key3": "4uyDh4WRJiGgM27UX6ytCoVz1pUPUiJQCrvwFVT9NPaivvWDBm3Upw8qut3zAFECvGSfNeeNgj43AjVVTWW3Acws",
  "key4": "6GFXi1sPpgcszL6Yd7WXf6CX9W8e1C2q2EP2BvFSU9igDXNfWDFqzD6KrKLcAu9zckXCf76ix3hAjQrV6cUGjM2",
  "key5": "HgayDzQMBvrVyNm8ADRfJtbJT67t8FSwqVBE99N5CL4amuEGzWGb7NnSLnamwoyW5Arvyr6kQw85EGVxPdvx34U",
  "key6": "4nVQft4B4WKh8jx2FGBf4uce1PFcKbajBBH9cgMop33YDuuX3NepgR7TsPELEXgBgRQdabAizBRBw8Nj7Ak4st4R",
  "key7": "4D4wHnVxDobUvmkcWX1pYt7chQ7v2pYf3wgDvfWNf7m8mp3dPugnd4UrzQdCtE9hVmBfX2AuHzJ1BUQHiutSmhEz",
  "key8": "DivBKqH9tLhVyqpNNKmwZvmLh8dbQG8gDYz1AqctPYWB7EcQTGS6mNEz6c2cYryxm3v3GeeGBG7xHifoSz8yEaW",
  "key9": "2WVLoWkVbpJmwBEYRcRqpWRwUqFewGjeUPGBSSfC3YdPAKX6nxeQe4KtgmA2qTBFRye2p8Xs9cUzPedUk24QGGJb",
  "key10": "4YMHk3FwTxnt7wJaUYEUYUniNAZoWmhV7EHMMT6g7dt2L4DsttmxxYqnyBPpvwskzxxm7Xv7X4neoDt11oPhokZt",
  "key11": "5JVbx1XjEzyHcaUmuXtKqr2cHfsZkmaiQYYPZdRd3YDpWGEsNmmG3UvsymJR8zAXZ8Dm3RLaT8rSsQKmqFff5csU",
  "key12": "4gHHn1hdhAhKdTRz69iR1mvMurXgdbdjEf9p7ZvbWaKFVXkA7FbUENUKYnNArY8R4885p4H7Jf7UChq6WSfhPfWp",
  "key13": "zTabHxts2Pqovd9YFD7aDRfXf1fWyenhqRD7knDQLMJFVJgoeGDE4oc4dXhPGzfGSUbTh2eaHi5LMuLhrgFFBsQ",
  "key14": "36GMxqcqB6o7SAi7b1wqTjTqMnfynASNBL3MuNdWUrTTk2ujuCQyzCdavo2Zfkm8WHK1g5tBiDhTGq6qTiVf8QqH",
  "key15": "4x9gD9nyJcf6NwXHUWrpnnFFL3bJTwqNGbFGU5B53BeCohFF8SnVHdxnKuGFcBkQiTuAKXh9YPt7Pb32k8d6SRRC",
  "key16": "2dgU7UwgnztpdJJv3mPPTGtSYupFuhMnWgwAPwC9iv6eEXteAyirEEE8zf3gL6hL961VgwtZkhmbGLYHMfoEibaT",
  "key17": "5tLKQ6Ecm2zRFN8nV5TVdFXPB5hcVeJsCG5pLArFTezdpboyfK7dqcoASetmngJnAGgksDkAxRnPPwyGTNx3aadr",
  "key18": "47RcKA7bWeePg3TU7WRj1iaqhdRqfejD3FJXd2NmHt5VPzLKqZyJBRCJp6oLnsHzSUYX415QJaHUhY1Ym3ZtWae9",
  "key19": "5UBhTsxi2W7htLAHW3Gk3E1cWYprVbj8GTrxiJwfJC8ZU8asjSndY7TbDbDipgp5EfeoTTV5MNpBWi3ERX3AeVze",
  "key20": "22wQ6eWhkfFSQ9sZjWJkFMAGssd1cyxkU12Nbi3dgDMqaM61Q8U8qPyc5wmg3xauPtGD2K8DGypruhPm3PrFvwXL",
  "key21": "5ypfjh8tfXkLZyqSgHZ1PcjwwMBjqXSnQKzco6MZ9q9fg2g383cKrhGstSMxK7hF37FaoVo74Pn2TeTac6KjJWwC",
  "key22": "x7N2ec5cgN5JjF4j8PFKPvVXZ8PziqvmUv7ZGvGGDc9mdfFXfLEpSZFku146xPWz3sEBW5dVnT3NQSugiwnULav",
  "key23": "1Fav9FrtQDr1KEPcqAJ7KuEKQx3eEkQYvKGnetRyRw1r87qTbUY7yrDr7LSVoLM8n5Syk3PDpEpcKbvSXeD2jbB",
  "key24": "5aqFEgjHLzPjoZPsoA8LyKSBSH85Dzibs3gLHWdcxjkyF4QgTc4itti2cBLjEz8GtPafoLxHuFJbvXhwd1QgjmD1",
  "key25": "5iJJLihLphUa6U8mhihsfBLhm6rYV5HaupuFLc2FvtPc81QN1yVARkNLX3o2moU7AuWWnNAA5C2h4Rpga3XuQJTP",
  "key26": "4V7mJRacnnnpZNFNSB1aLVMaHTSawCzpG8SeEBy4Hm6KsaC7XA7zzcqM1eYPfotGLFAFqXpjYLXhwsZpNyD9qLLM",
  "key27": "VU5kXSJfNWaEm4iDZeMSpniUpJxLSzh3LL94VE6CeLEPqmjwyj5x6WSBQEaKhG7r15JPspuwAfHRVGmUAWiLr1s",
  "key28": "2xLoH92ZoQd5ud57q8fifCjfQePjf7mqSJnzJSdpt7aPdixc1j8QdyYAfpSbpMTfxY9WNE1157o6MgjubphiNvmD",
  "key29": "K43tGKMdDHdf9egFkGKsDKfX9Cbi4sc7miff5btQNtEa2xD17hnpgV47rVxNijTHmsssnhSD3LrK6ThssXVtzPL",
  "key30": "4oZ7MD9LcVJr9NqMesvmwCcEcqaWCQPGvTrD6FwCVCf4aLyhTBxW4ctgxtSxM8WFkSEkwJkKPwFBCThp63EwsQrZ",
  "key31": "2QfMxGaMr1R4qYh4NFqGzDweww2uTDYL3JYNzv8SsseG7ycfssCADA5KiTSe25569rQJK3DUZV6ufyXmWtnrjUPL",
  "key32": "2xN8tJ2cWthmnMBLejtsCr51jmtRFb4fgkwafvGc2W4ss2pJjiZ3mRQa24j6iXsyXAe4B5huec1f18R4812y4fXu",
  "key33": "4rtCc7DknRM7ah1cjFQmcGRqbppZho6QKqFd7nLxBpfzjk5iG5bJoW1kXpg4pfzayirV4frVH3FtuofKnGZSCjcQ",
  "key34": "2MHtLqkAXmUtrPxLUni6zSL2XeSbzRiyZvv5VpP5xkeGTxJhwjb5NyXyghw5nLrHvGfh4ojmAxJDCW7zrrRxjagX",
  "key35": "W2PN1X1rMZXm7LdFWD5aWznyGotdBx1MF7vmFtLad5Cnbc4m7PAXyGUq2E83SBXzviRqo7svA5ikhbAkg4CCS2p",
  "key36": "2y28HjC5NRhspW7pFXpzEgGWu6r5o6afGF7ofjxRA7Ws5gpR8UDxuhtynAJc6nCwbyzxJTmwWwrUfnq1rgSEgVXT",
  "key37": "5KXtWqf31YftvHLQLtsxBs83SEJXreLCZ3Td8v5zUswCeuGM2W1hTRfZdEQ1wc3dLGjSMGDeU4WoctJbxPWoBrTz",
  "key38": "4Lx4mKkfDECHWc7CKihtdMYDGTznW9VS8zyhJJnoWFgWN7zJQNR1ruqYzHhsHD7N3mg4Z1XYcstxQCarBkNRgfXF",
  "key39": "2a5nSsgpkj4K8BgyTbn3RbkX5ccgcMptVbMQYsaqXLhzgJjQZemaybQwJk1tfrcuYPrxSVLipdrxNuEqjMzTQMbs",
  "key40": "4fT4nUFWCuFjU3WDD7cPz8aMVV9w1ndaZVGo1Jwi1RGYWHzHj6Za7Hu4ZCpB9E1BD8BACc7Lx2UUEu7RCQ9qckXs",
  "key41": "4v5oDCnAxj7cPMTCt8zTCcZvFHoKg1zc6kzm8TBzWk8Btmf1e8Ab4vyzonyUGhmZdZUkaD6piDxyTi6RYDgYW3Vq",
  "key42": "3RD9EZWpAybscSbwZwrPLTka2AYNMpTXk7CyQKsxU8HtGLSFcboSbpxV4ccVML416d2o9xjqf9gkQXZBVPovphYQ",
  "key43": "2FsYjpiJZnuEskqwqtDSQ9gAkdnQoLKNSWyHoBdAgkKZ2DMmT9L1GAKTPaHNT4sJ9ESUc3BXtGG4gwtAvhfFjerm",
  "key44": "5pCCCcabWosQvBBpYA2NbWXfxXdMGagz6Kt4Y2d6XnhkVrfBsh6tFM7i9pdKmratvFxoFQAqD8N3Efs9nm35k46A",
  "key45": "3sEDC2eHCUmEW6Q6KGKw1s3yruFqrHBkwMfbXhit35uFbuhMEhoqubaqMw2kAGWreKUuG8BTSqe23LmVdnL5nai2",
  "key46": "6DEx21aVHmjcB3czSXA2x6UimkaJojRZbGFv5x2bYnLHLxxR2Sn6iQzwki1jSqHqYWNKm98Nct6bJhYJ8PiYeq2",
  "key47": "4BTCe35SrV45NWR9pruZ734RRPyXRRMpma2B6YQerp5gTXJhu347xhU4vsdm7gSbTKnTC68bFbE7zoT7KT84nwZ",
  "key48": "4aLA8CzYiMcW56Cf4PFhWyidyzwYmiGXFPumJfpEQetCrhnBqEkShvUwz1mPXFz87FVE5M6hvPZrBiv8yefQxoXG",
  "key49": "4rqkY7dGVKem5uSpuzkaYDS7r6cPNovJ4q7fSpbiKbjg8VRxsJNbw5aTpDekbxrn4B7ggeupLDuWZ1SWgDygthk6"
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
