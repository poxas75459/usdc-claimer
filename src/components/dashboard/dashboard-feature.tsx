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
    "4iyWDVyYQ3EwrcspqWRse3yojTDpG4sQQmgUDumB83KUchG9EmoneBVHNd8GMvfCCBVLYVSfVFVWnGKLmS3tgi4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "coQtHf5zCLcqKDZEsERcEFNkUCK1cY7RuFjkMzFFar3S7vvsGzCPfi2MiLKk1m9pTD33iVAkVqbViqHAmdFufNE",
  "key1": "5c4o2nJm5bdDwYNGKuCxoT9udDptFiaCecp1puCnYigYMF5AumyeDKFH9TvzG2me1y3X3N8ZfjjWkj4GXMQJuh1B",
  "key2": "5xmgFLtcjVpfLFTcnnJLmNVBFmxsnb86WtSj6jUYFhjPdrPj3EwCzm5eJ5oD9emv1hQUcqRspkPQiVn4ZT5tnVCB",
  "key3": "WAgyZCPYoF6Loys8ZyYaahgvsMgsKLNPi57nbYdkPX7N8H8xrmEk8iAkd78bpSYRyixDMLN7vQ35EHVJYvyqLP4",
  "key4": "5RiTm4HhfAJ8S16ZdKih7VfUZ8WbmzNZHDD1JLJTYkkAvmNPuVLpXMTANtS5uiXopBvyngSrQhmRPTnTW3rZs4Xn",
  "key5": "3r4PWFq88eQ1SpELnJhYrzjv6nTCLcu532sVYtxhuwg6F81TJ1DfknEBvbTzwrpQCiEq5Xigk4f2PpZPHK1oXAnA",
  "key6": "5dHMnFwKqyHduaC22heX2L2t7guafiN69kfeGAJXGEwZwdjPTevEVhA6sfiBxcmzKAm65QRtTyyaWH5uZkNoLgz5",
  "key7": "2rKQP5vzeHzqwd7wryaEuVotG7wTc7t89ekmBseFsGQiPaPMeSQNQMCDLujoLEvLbPBbnYyYxUmLKdbdeHKGCsus",
  "key8": "2N7TpWrgKoQXPAtBpt2FQBf88uiPwLwkcSGbcAdpdtTvCyZvbfxrhzMa34svAsfLJtk7MJkEVj7PzQXJyqoi9Ttf",
  "key9": "4rnUEgoD23KfTp2eaVxboAdN6qjXoZuPNGxLEK4P77aETEcFTb7cViXTfkP1SvZfZiAMGRU6jZUS8LkPDJ6EsBhJ",
  "key10": "xPu1zCjdYa1LQio1FVHY9o8RtYttuFbmpcdq7qcnsdMDABG1YX7LpPjwhxh9T2CK3uSgpVZfhQJQnJ9MKM2Avqy",
  "key11": "44CWCdR742aXRgcQtX71Ccx9vkt51K9Mdw1PMcWyhjFoXv5MVUHv2GV96CBZCo6SGeEk4pkrZcGFG8hwdrsPcxq2",
  "key12": "4DYE8nSg2obpYbKinXHa9cYvrafcR7mcKfHDwBZxSV5JHMZLfMeti1Qo285CbWKTstMkpZcxBYCdQ2nTFiFeYhi9",
  "key13": "5if3BffGSykHPrf1W61GV2iAuGXBYXxxQiP1VtjVaxPtF2VsayvJsmYDcoLbHFcorGoY9KxCUabGGVk7gQVzMxpN",
  "key14": "4ZuuSm5Np7Q5PbH9Sc2xSZZJcXdEWHRcPXf9ctswQHcnEaxzLTXUtF2PGxV2Vov9akAAV6DEkPRxWfkcGQBXNLb9",
  "key15": "bowdVztJPVSySB5hHhcYPjBNugH8FYCTBApnyogL436HSpokgrhQadqexAz2Xt6pFELArAxutoyQsw39jXzrTi6",
  "key16": "cuDhLVEpZHQonHgxjwxhEYdXmKBT7k7xQqjgB2tGY1237LUaUCQFXXWEU59AaYPJGy9kpa2Z4i6kmk3dQyMb3r4",
  "key17": "3H2xb1VLQR4pzSZfTPQSZqZBo15mtomkfnqNKhgKZaXeu87TMpuCji56nWiNkChTR8RRox6bKK9Q5FK9CGQcaxgu",
  "key18": "67F4rYanBQje9z2UzKGMXF798pSQS7K6XHnTqd4ivv4dQfhX5Qw5S2NBtHBGwst9Bb4fiHJjpBNW88P7rJ53jYM9",
  "key19": "36JkLWHiChPdfZeJJuMnMChvmhpaZxnJPpvqiFDoiBTdVHsh2pmHtfCSo11nXC1b5nxKtAn9znsnp9DCk61CBxrd",
  "key20": "vmK6nukcpws4VWWXY6MkEJN8YZg9d3AJKw4EwZvSB8jwoAW5it2NRK8mF5Sx6M3xM8os3n4K8KzMCAw4erkTgnB",
  "key21": "4AQAdJ4zRLwGqr956agAGqtSmatM7KmVUke5dqGhBPgjQYw7g7ZXDwpsyN3aFKgYSN3RNXa3De5EdfxKBWd28Ti6",
  "key22": "5afDU3hBVVULemhfc65tb4tvs61MA1MKVLVKxHSeuuKhYieeEK8VUuG6q9QiCvXNLkzGQ2DZM8jMNt2aN7EnHsv6",
  "key23": "5o9ddxKuFWBDMeDMGHFgHtP6mDo3295KPvvMaRmqZ9U2datjofv6tGFWwhhDGpdHaCUCEPKKkgiAkDkUhxRh96PU",
  "key24": "3oF6eMQD2D6XX5TY3WAdAiorpppVxqifF8urtGGpiFkPpi978P2EW6sFc6R33mN6TNCQL73Sa111xB9XhQTNGk5",
  "key25": "4BcmjDqoEmCD8aAYeieL41YJhNHiRXbJPP2dYnhf3zQTnVBmGsphQ8AVVXwJYqD1mksx9b6Nx2zsgpbPoHps5XeE",
  "key26": "HoC1pPX8TGJ2XY4tRbfReXQHGs7gDzUpusz3xYHSkNwK9v1cPGipTJgMRG7kF8pq45qSXXrewSCbzghtDi2c9z5",
  "key27": "5gsJeiZzUCRXAnVKm382M96ihN2GHCMUxg752oHVHRzs7adU2RhvrvyiSn4RY91JX9z9HjK6ekCj62JyRTRaoBc",
  "key28": "4FNYEFRicywsKmZgzhs8qoddvZ3XYS5NsHvuJF4Pa4tK6WZ7ZCn8NtkABqy9ng6st8jVeyVC8jfenvTGT8vusrye",
  "key29": "5eMMGSjWPgApjP19jLkytRiu53emwqwvaqHeD5Aw1hY7fVhNShcHYhabL1uGrjqy77FxYy7bgc9uVTyKRyATP8YT",
  "key30": "Np6RvHpgGz9d1qFu8JnfxvKiqXxkCs5rPUBYFFokzT5WABw6njVjoSd87omcmat9nYV85EnmcJpWXCX2W11jUKG",
  "key31": "8iTe7vhwFuDqDLDa1YeETQACkB9iMgKPQU1HNXReHkXch2Vdxqxp6xEUc6jxqy1dBxGzi8VhcRzYwqj6AwYGXuQ",
  "key32": "JtTRZyMidxzQPvq1aYxcFZdUYsUQzJtZG6VMBhgdXDUoBjup7D88pcdEuEHmvWHjrnFYRS8gD5zXJcigH5fUxZf",
  "key33": "PGrUgQyTyRKD9N24MrxPz7Q3qZCmLWwYZZzAvRE9TQtKhd8msDrr7aas7HjadXML6z14BSHSQcBgyho2nxfRSq7",
  "key34": "596Qs6RyfjpPBgbpBSQBYwacrtAYr1gBEwyf1Fef4yAnKEMwMdnZ9ZRu1Lau71T2atWtAPZELJfQ8XL6UgZ96TvM",
  "key35": "54T7AYfYjneexQ8gfoZBE7QZT1ocQat6MokxGqJWuM5mZW556j2iRsdzYNUmXF3R1jLC4LdpDn5dVH2TLW6k7aMP",
  "key36": "55CUjTR3qKevNgU9miyGxBsyJBj5qKrx8ZMjBbzfyjDGpoJ89hqRzDeAw4PXgh5M2DcGCncgeupn1wBEw4EveBM1",
  "key37": "35RibYefCvMabShy1wC6SQtEMWm9t7sDnH9FNcNEJRuh4qjXyVoRYR9Hdn84HNA6Vwvf3YN9wx48Fo2pxZBjHSPY",
  "key38": "2EJFMwQxC1JD1Lfr8kNkeUjsrWQspHRsrstccgUPxrKCPBZFBZSRDfoujxydDFMMn7NCsfXWvRJy6uGex2ykXSvT",
  "key39": "5fj5i2XSPiZXsmUUWVdX7bShCodiXYDmZ4HNbng2xh1HyzQa5xnrCcfYePLZsGToV2b3GrMHdMo34odbT7KsTTk3"
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
