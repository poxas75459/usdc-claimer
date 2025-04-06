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
    "4EW7NPD4zRcQ3jvUbY1PN4PGqic1VhPFtyN5nnYnYPwfWL4bwmjB2hEG6UkWNQcy2qfxZNe3BsnbvND43p9DfzY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QUSFKRrapy3Pvhgq2Sj28s1eBFiTh9V4rTJP3BCotAksizvvN2TkRjYwBqsGUPNe1bqY6FDYJ5MbVSDrCmpqLAK",
  "key1": "bQmB7Tg2q8bjE9EMGHUj1wUuSkmtLztwXmYJGisGA1kEqib1pMDH9P5G6hG5JsFonVVdsAiT5fVYMxQDMRt3YVJ",
  "key2": "6797iBxGYToLpidHkr45Ze9QfRMbcuUMmos3HgSGLFoSvWGU1oq5x7mKdPAsgpBwTUv1xRcbG4giBiadvZtaxr67",
  "key3": "3cJViU9HBdUYFKkiBBFxwwGd5frftPqJZ7Vrd33NAqsRFRNY2nyTPMCbeGYWKDphD3P6pKjXHg1eTb4yJAU3jo2U",
  "key4": "5WPCrPUrDdAA5Q5qw9j9jZBL67F8HDAoBAmZ47sd8wx3RhFCCsvkMjs5TesMXjdgM6YTLfKFF8NgBRMbyfWTowr9",
  "key5": "23tAxVKsxrihYH5HuSfyEJNefgYc2Z3KR8hM3d6gckc9uLMXWNC4NAf7D9scy3xCMEUQxX5Qpu1tUAiGR9bzSJfm",
  "key6": "3s4kbTKHmxdJLUyos1pni52VnQtPEKoj4F1fXVREVQENYWrggNk99aXKJUhQBa94B7QqXnNfxFnWdTGjz9Y9W5Kt",
  "key7": "3CPZ2VgRUdJ27RqWSEuYqywoycU3RQmDz66szFC1rGyTKzey3xKVXhgwgnoVUjienwqre9pqMENmQjiZdyimuJDW",
  "key8": "21GBbCAFhTTzTryGr86z7g6VbVxCFpopZLA5TGRXf9BbVWhwm9gtKvEaDmMrpPDG3yxYjA8VXsShxPg6UxYxpW7G",
  "key9": "3vSEyCi831xFYYPXgGwph5rLhSNXB745a7DjpB9W8GKFc373Vd3Jx3dYuu9bb4RPNoiaCdMbBeqkEfwz7ZRk4rwp",
  "key10": "NCapG8s6EgLVQfSmzp1dptUUmbJV7uscWbya4an5A1gpbhgoJxRcMoDBZDmAGW1mzgxLYDZdXfLygg5gYTiMNkK",
  "key11": "5y66KcqvMfxRLKvnBPdgkrLHQdMQhwXWt1xBPUEGfrrakbcmeX5meTupiAdkyNKgdzzbNKK4U2ogBxE3DbrbvaHc",
  "key12": "5azkNnPTXdHgouYZVbks98imbeY3S41CkQxzEbtdpAdDyzZ9cZGE3jncGsFS4pXoMdSCTRAkXUj6TkndG3jQMw7S",
  "key13": "4CPxFcTU4BZY2LbMnYhdJgj8YCvoHLCQebQzbENQnjMYY3Pa2gBGmmHVCKcqsE7N3Wba2EcW9bT5tvPR8roPG59f",
  "key14": "568RvmNXhQW3JMiN583vXqpU3baTHMfL9JPrDtZzbVb4rfqXAfcNW4Yzrw1DwDBTdFrULHprTYu2wAqwinNmxAHZ",
  "key15": "ezrWF4C2RgdNB1oEt7eczF4WpHC9sZVsFCf6grSy91okSkx8oieBXqXsVK2jKnjNhwhbsmRjcHUriwfCb2VLp25",
  "key16": "2Qi43gtDAURNcrZ15JuRsc7zQM2Rq8qA8fVxmJPL3sHo7ReM6rDdyxZub99jhsbQLFzeBEvsD2xmn5Y5P7RLjnKb",
  "key17": "SBNEAEV4BrUT3XSPU4a3jtG8ZEvJSKNi1hqkQmCcJr4ujsDk2ZxQvuWfEQU6ogCxTWhyLf9G2L66Na4b8W4kycn",
  "key18": "nQV7sa9dMHsJo8QLGwbqvKtwaBfpG33zCa2TwT18pkggpj9FkUP29u4oUcvCHSixF1LxN59dWJpYJmFJTva6Hnz",
  "key19": "kcVArLrDFu1d1Gno23sGndADUUTbF323FYhtfUMVuNb4o11ejkd8oGF9APdqT3t94hy5oZQ5rbJUovpom2DQiHF",
  "key20": "2mKkS6M52ZeqtuRER7PYaXAGKy4N4sjReH2wtcdXFWhV9oYgE4xnmZuRx3MSpneTvHYUD8yHJFsphysS3dsNiR9q",
  "key21": "JajYYRfDMueWQS7GcMhnGTzjDNjHUHJpt5rg7XSXVaZvPZsq3zsSZgwGCCEowdvYhT9ZJgXHJ33WYHVBg5zNUqU",
  "key22": "5AKEgFEgpAckBXizzgH2kerr3z3BGc53Ux8cPha8T2ZywWNxZyFgX19bvPaymbnREPLBGJZkEGFrR8SbBYk9ga8j",
  "key23": "2ZkooKEg5carDM4jGe9dcfAzSXJKgm5JZfwsuvTDQwR3c9gfCQ1JRZhY1gzeMXCR72AzQei7BWfMbjCgW6SCSihS",
  "key24": "2U86nXFtcjSRveLt7RqopP2u5RqxtMpyR9KnzaXvdFNyzSPJxD9JYbAfBmDL3ALdxTXGjJRuVded9ZXrFuBVDLPs",
  "key25": "5deo1WsBoi5Uc9URauz8hCz87bL4hRTDwCBNwp49wEwq2Jooy5ooX9SuhWq7qUrbkmYLcUU45mSN8xEW2kp2m833",
  "key26": "2fkEW586pqEZ5HH73ihqJbyoyjw1HH8nPzMJFuwAKmDiXvcWBUwJeU9W2owdhA1k7C6idxsdX2YvygG48vFzKvUk",
  "key27": "4eptD3i8pDMkcCg2nfxiryddpKcPFVbXzF6hJ8vyChBm3HyJi6VWW8CuZWrbZKx75xxzMVVaPBbdTiJX13RUEbVm",
  "key28": "36K87MwNQq3RGiwZF53PokTjFqSUrx9WcWAsLTXs9kjjpxj8z1Eze336QmkJ9jLdMc6cCq6Y5BagpNVJ2yydFSth",
  "key29": "3yPvwfi9NeVtVSzd5oHZbkUQBzFre7pbCmiCYit11M86qkc3bP86Y3uTC9sv97Q6X8YFKkRMdQdycXx3EvrBM9fp",
  "key30": "34To8b4HcN11HGDKZ5sy6qMvPDDWYMk941Pc6o3oZ5wtW3QV3Mi5ZftJZjm98BqCDaeuJHCDWUhbPzohohgNqYyW",
  "key31": "4hrpRmynymMF4GNJjDM1iTY18qmc2poGZKGNFdjhEishNKd7jLtp98P4NtQupKTYXUHuneqB3WiaT4GwTy4GNE49",
  "key32": "3X6GNvpYfq1A8yLQrMv6Hk9a9qKFAYPcviV1L5CEDV7GUqgTqKHmYyz73ayxt2i79ZV1gsjz25DV1gdJwJWtTHnZ",
  "key33": "4T1X5L25ozNchrxpnZwTt7CuemY31zX1yZGVXyeB28quXB1U8USp7FWDCJPhZgm7z9G7GArjihRGFXL62B4ZyURG",
  "key34": "3jUxU3XhshZubZdbGhPe2M66RXmFvZ4ry1f543HtFUVXEJwjPv1G3wTvM519nomQKaf9QbnPE72ueHMcta5eETQg",
  "key35": "46CAsZtaxzyfNk6erwAAtf5Nk32XKrZTveQxvaiR92jCZydyhbTMQLntqJ1UBb5nGBNf2qfLRijL1gx1oSSBvKWm",
  "key36": "3Z7kDoHYADGwwkXRyQ5MFGLBfscQ2jqKJqf6aNXA8w8tHfvsc4FBNrTWggfAXrwUw8kQVDsfXVTRSKiHTP6e5ZNJ",
  "key37": "3WSbLq3PdVfe4mmbw5oUCKsLCwwu3Vox7sxkd8T5gwRWxzPrcEbFeisiJMtDUYfNPB274AeW6d3TJEHVeiqXQ5Kd",
  "key38": "doSz6oP4F1z8eJLGziVuJEDGYTtF3pV7BxPW7HLmdQQNWwJmM8oJPp5tURNUgexSfKn7YExm4N8bcLtkPBPsZXb",
  "key39": "5eAitmb9ftfGox5Aup93sUrwLoQbUxdicFQg1pfZrAq31Yr8b15c9S1J4eiD2nLYLx87Ri9g7HWVoxKUo5adzZ2E",
  "key40": "5AevA1phwCxNNA4bwGAHMkSoYpqxYY93UTHbwpsjtKYRwkwqh7jMqJ2Nwh5g9tAzyNVE1MLFgWDyjDrH9FJzGTgs",
  "key41": "53vojJvArChPahmRHzd4dBLDUXVAJDcvvzfBkyR1qxRUyDwNyNqh8S2Yheev9hBy5c1m45z2QhywP5gXQ7czMdK8",
  "key42": "euTgge2cDErq3EoDSgjBJGo9WBj458Dem4ed87PeUmgEtc8Q3VPbJ3V5KdLgyMyrKfJejEzVoYKHNHP9cFK2P97",
  "key43": "3YG33uM6ULsYWnjeE9aBNnpdubu2tj5LNU1kaYXPR86K1eFE9ukCzsEtvJ3ZZUk4838mamafgKZNwyvf2Nu11H6x",
  "key44": "4q9NjKJVa3nhEMjqshJzUtrt9VSNBLj17jdtjT2CCY1aLCHnFNtuKRfN3jGNmTf5n1VrvnnBLZMcCNnmLUG3c5zo"
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
