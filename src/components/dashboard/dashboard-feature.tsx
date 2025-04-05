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
    "48yJLJKpmBGSLc2HkMhVfDthHDrt3vdw9HzVzU5CsG5JXN919gZr8AYYeEkQED4KPq27ENnvs2jRcmp81yed6N8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mKuzpT7WcJPDpQhS137UHDVGtijawFVmBDZNNxbJEvBf2euQt5zdR5AeEBq9eZ42ure2jeA287dZiJPsmkeXiF2",
  "key1": "4Fd1v18K8ZT2CwQp5cc7AxzkNyFSiQZUUwNK7bjxfoBtUCyrzZjmHgZeThVWNE7xAnrMVDJZQ5Z8FwLdF3k5WHVX",
  "key2": "3ywfLU1Gtg6kwtWjvLjvMKe69GhXVm8H2CnMY2gpdSxnFGpeREfNVuaSHBVZmDcxfQwzLhfSsiW1hoBXV5bF1qcZ",
  "key3": "38fSHAGzdQnbmK3brQCxxVeHJ496qyLCRLJJjEvhAP1i5v8TMy49XRfbfRB3qfdFPiW3SbkvuZXgujj1N2M1Jefk",
  "key4": "5KBurToX2sn3kXgUrCWF1ujNqfMrtngKb4pzAWUVtvQpacYyytKN6SEWjhuPAtJu8YHj3hHcpXPmHotq8L5XrrKY",
  "key5": "2vWRcLp2VJqUBYNpqnBVnh9C8TbibpagGWGWWJw8P6XUg7Wa3154fZRHbsWxT46zVoTWkrgiDD2EqFrBW1WaSkfP",
  "key6": "3Moau1tUae4G2CqnWGt7w3ZgkXLnhfzkvPSVpYhGKFALL213FizBpcVFhd4j7UsNFDvDysdNZ9c9jDX7r3ozChxF",
  "key7": "4LVd5C8P1TWpVHmhPbVJQHqmdvdWgPc7zLDjzWKbsAzrQv3EtXDMixsGkWh4zQMSo5xDaFb4Unu6DkaCVk2iMdwS",
  "key8": "4unTTppv75RrepScHSiEufVfHhneBNhvqkGpngY9NT8Phgcz25hvpMS4gxHP3wRxCpxzxZQV1wn1WBpZsxHydkeE",
  "key9": "4UH4awqoJaHY3sfiGZLq2TbgFoUG1LKX2koTz7myjqNoUP9Rzkt3XJCz7JwDt2PzMCYqrghzgoidtZJokPQ9Ywtw",
  "key10": "2ZSLYP2D1opbq5VAasC5ydTULwAk5poMKBFwEH2dbctVJHsSpn9fYb2MmgdeVHgwNYYpHhwNWP2rxthCJqxxkAyD",
  "key11": "66o1f8m88TYQ2AgBdv4H3whPDg9KZsjQkpZSgj6V8oKaHNYn79AMGnfCKLsFAfqJTrrWvrs5YX5Ag26PHbz6F8kW",
  "key12": "4JDvih2QBZ9VCRyJKZbesnm7PexvrF9y6g13znSC975A9LzTDr5ZGS4cz56F4tyYtwDiENoCGiczUqBAsRkpQW6m",
  "key13": "4YSFjggr4rABr4ine84JCDKrQaHGvdAd5BH8zKaJRbscuDXsgeC6kgmvVHRmwK1qepvTBUsjmBkS9LhcaAqJm7W4",
  "key14": "3Yw5Vd2QYdweg36zos49AyMHXA43uwG4ak5CNBUZGPZZGCeE1ruHrtDr7Fsfis6iydoDPbegsenUvsCMW8k8rzcp",
  "key15": "5NZS7XBotBXjRE9Som2jaoi6TXA7TQzifrHbZJehgvxaHFNKhecehJaRThLpi4QMv6EmgAhGBbu1rVFFER3pXfQ6",
  "key16": "2vEu4ftAoeSi5tAzNSS4TKtsap7HazcNhgAsFhCfJm7gfpGiQF5ASTQ6HnKfZCx2zkiHpEf3amaybiKvgYjt8sCY",
  "key17": "2GnCvshTgUiRjcsaaQ1SaXkW8p5oXCmcxtPk1G5VDaApMCm9qdMjSHQYBpMzyN217UtXRKrXBewwnCEPyg4T9yoi",
  "key18": "2hgdV9h1znUDE4yKvk9biw1Tk55KA67v1phW2X6AikLEpb52LmoWtN1fXRWRGAcWKE5p5L7qQug12SJ5epSoFkAb",
  "key19": "4QtcyGivTQ5rwouvQBJkuXB6HxUuPgpzHFtcrpWxWza3nxYWTDnGrHhEg497Y8yUPqr4pht92nokByW3wMNXBGvx",
  "key20": "55ZSYGhGf7CrWxg1jNJi6Pf5CAYyW71J1myAiwV4meqwrdRUqg6Jm6xsfE59XrgTKduu78zAsApWXauvaz559jSx",
  "key21": "3X1r7zMRiUUBky6btzPsif5peqNUne2DsaLaK9Hj57N2PAxTAx36UNj1EC2xZs5wPZDE2FdKf5rXssbzb9oEpiir",
  "key22": "61mHXTFE9i69Q16qGHe2bSKoCDjGcu7WvjMvKVsiSWHe2pi92adLrkVFuEmYWtxdLiqySmNGPzFN3YcrPb2XQY85",
  "key23": "276385WSUVaHmt6X8vtgsHggrqfiSZnoX5KW7Zgxn6B7fXEJcFCSPP8GsoBcGw9NptG3yT3z9AXzEzJ1qiJ3fozp",
  "key24": "M8s8TARFkgL2xVjS2WaEHYMzrkTPZuQbZ7nPaHqgLtkYYvM5kMqvi9JRMB487LwJHYZk34xEnWgyyGHqcD2Di8D",
  "key25": "4M1gwgA71Xtn53kjC3mrZobHSVdEs5i7GCR6Du7EvDoHtJB1noTGhzqc5zCtB5yTzogx4WkydzNLeTJCTeeyjEpP",
  "key26": "4XDHBy23bvAjR6jBm9mkL7RxKjp3QPVeJKSS8aZUBac7ZZJCfWgFMLDCSuws3JrSYdYVMwPFJqVGDuAn5mNs38SA",
  "key27": "2d7YLz7QrHLS3RtirRxQZd8ueX4ejoYyPpQovKrmhFcPbP2yPVMR35tdou3GHEPw5dV5TtmMjx68thraFe4mkbS1",
  "key28": "2CvEhVj3hXyRoqzran4nr9XbyATHxw5sY2mErJ3dZLR5bj4A6VPaNHYdkRLMVTES4pKsQsTT3thkdYX5QYzuhkzi",
  "key29": "5XrkKyYkRy4uYMrsXrEfvLXo8QqUC1oz2S9JbGrn9dDcmsS6bo8ecHHYF5ZKEm7F1pgJZo7heS17yoWaU1MPcSdB",
  "key30": "4WaKYMBCXFh5fC4cDp8eZ3q2K9N69P25orVppM7yQaPZASRY8CGmY2bWeGrMPGC7uMiRAetqQ3ak539KQMrsPb2h",
  "key31": "2eBebk1cr2ZihxckYiH71Pw5nG5uwJuzb7DeALraSGk1ocURWbJhkHdb1pHVH7N36NcsLDH8GTw5dakMKH1dZMv9",
  "key32": "3m2fGHgTshzzQ9MRJe3Pt1Z3pjXT65tfd2vvc5tdJpGL8WmcSRKV55NTzjUDqYr1VXaWazSxVtfc51UFxamw9JJY",
  "key33": "nEtpKcANHjDXwmmFb5wgQoQymkkBSfKG5CKrgEtpWTJzoBN18x696wDrXzBTgRBB919cSLzfKRYJLWWE8ZBtkG6",
  "key34": "5YdLzVmcjFU4aBzqrYYFijmC9JULsFoiiE2gizkWk5q1H9kPuZh8jQFdsUw2o1tTEfnm94b4TrcQtdWihWcsJc2V",
  "key35": "3TEW8DowkQJ1LQn95zntSerw7ZxjBXehsmL36BbzJ5RodiWdVqooGewj3ayE2Bcsa9811pyZohBi6DjKNzgGANyW",
  "key36": "QwHzneeYgq4RUskoTYVw3ndsNCfwdUEZ1rCCn8nVLpBTM88niRqGrczs6ywFgexXathXzSBQYFAiWorfHWxViHE",
  "key37": "4CroRSd2qrchhgagxipDPvTt6oLLeC2NeitiqEdN9pmKeUSuV2P6sser3ujNu74qVgDwChk81oXrnKcv2Hq3BeXZ",
  "key38": "2aR8vxegvZukJENuj6UMprGzsqSnPtVk3F2H3eZsPwtdHV8VFzXfagBsL7bSq2Yj7HJmG9WdUqxTwfipj4Bp9Mya",
  "key39": "35R8DKnpMCaCpgVxT5tY1orJy1NnMHzdTEQjWySVbSmKUUgzRvYLkAx2nTtKCfaK5caiKc9kPeA5pyLq5YVc6qKK",
  "key40": "3nMRjdmzqEtkzbeaCbw4MS18GJCGjuTP5jD9BwXVFo4iwr1gQYeAGTZd5qXmTXVZjBzZemeBArVhA8o9odG3RKN",
  "key41": "5Ey8DoQYVojKaCMsTdQLeUaGdNimzWCpYrMRpbL6EwaFaxxsmmx5jd2hRt3625G3HeRqZ3PtnVjuF3crp1SnVZQS",
  "key42": "3XdfV3bzxxqzopmLWxFRS3ceWsTUn9FmK22WCMsHXqRc8zTpdYNi8uuBG5fo3AfvNeJVRxehYVXUNx4pqeZV7GyR",
  "key43": "5nsV4iHK8xf16uTqnjkQfKFyiPbijhWMtJST8hRRrYPj3JS7Y6Pn3fMUcQmAcCQGvrcgaw3TXgsikDVoMyVWH8dS",
  "key44": "LyMWuJNyWLv9PjeNGbPJn5Q4VP1eSj4pwmhxfkN5viBrXnqNVZAreHgABMNwZfoeFGynZh2bvQmDQvyDNAewY6N",
  "key45": "65Qc4GKLuuotLapGjfMfrCpWyTvT2nNe38pWqrXg9FLGaJGET2D586VYvWhV8JyuBXTt4SkLKeSU1APrNKX1AKJF"
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
