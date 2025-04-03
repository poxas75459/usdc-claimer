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
    "2xYAc2fbcHjhQUQSMZ1karr6h4DJeja8LPniQ53R8s3yc3nZwMWUiKtUbByEANEebBRGASN2cJfj9gNDbxR3JZ3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kyytf7cnrQXEB1gc8hecjn9n2zAA82GuNX7gYcuVQfCKYL48qZZNeiMgcBrJXKsqTbqAF8jc1ncHKyYBx5WDoyK",
  "key1": "2k594TAexfXqxN7dBb9Cq6uWE5iQbMvqKMQmyh4u9dXHuGKsXBvQoaquXqWEMxNRhZQNnXoopyMjbwdwz86bnFDL",
  "key2": "2HMSMCGg6TSAagNWmcW7sWfdC5hFnjjpzeth2EzdJKQx8HQ1CA3zQbzvsznJNeCEMAhvtXShZ9sp6khiTnH45cEW",
  "key3": "4gp2uvy2Z3PxcvuuVdBVHv14w4oQXh6sG79BkEbZWEY3oRCsKuJmjAYANbncg8MZSVeZc4NHkGNyByfQXESnemJx",
  "key4": "4YemxHR58mc1ykHahQszc44E2pPX7PiPcgDYWrr1MVNKKZxqAttKRuTLzDXFfPV3rb6Mrs8gKZpRwboHp2Eyg2kY",
  "key5": "47zYfnQHLvxH79a9WvbmmVmd4mBkyMxcsvHeAWLFqv4ZDSncPfgjLrhqVNjtZHTsaB4QLpn4C4XnwexEJVCcmapU",
  "key6": "3TMbrz4XsWDNSkZGUrDHi1KmrWjeAyd5opLQEgqYxKSiBHPNS96y16ciuTweEreVjboJEmpxnhyn6Ug2gnUcjupV",
  "key7": "4SmrGtpBFms7npHz7LquLJZw3egqEtX3NdyXc5PBACKqxMk4LbYY6mNGw8JDgNCWCnyCaJJpb8DGdeGMpz7WcbNv",
  "key8": "tm7QCZxkp5Ujyp83ePvphqso2LJCHzHXxnNADRGnTrtiriAMcqkkxywemJTbohnrreXfp1MUMzfiiT5L3XSVikS",
  "key9": "2GANkugXHLAKR5qZZqjWmN8xU1u5qDWUzHoQ4naU95hStjtSXKyEAeRwdeSQensizeZLUgZ87W8M5zaz5JXMc7b4",
  "key10": "3fNptaoKGCyb23fPuKwh637Q9ZGK5tNDEkVtW1hrDiBWJH3CHgXmq17HvQqB6pbrPHPy5noVNh3JGrgxu696gAy7",
  "key11": "3q4iBbrrZiooP5vGBb8gv5GZAjWTXQRGxHWeoGo8gCZosCYiYdG5sDMa2zUNfHULxR53DX8n2dftPN9LdARFtckH",
  "key12": "5HDobMijVBvxsjVqSpcyJNLccKnGQtEDagRhaL3JWTWVRaphTNA2gRkcA7LG4SGHvMrKAA1ak125WCEZNJYisxSa",
  "key13": "5t8Zt5AtRDXMxftreSWfRGJo3mfcREJ4PvpWL2aJDdZZye9Ls3pAoS9aWc53EqmFRcfe29D74tjTmy5SDEHYjpiz",
  "key14": "4CK1hKFoAtQfe3isTQAAJkywxKF1pG1moeScYaQoQqjJWSTWxxj7WiiZgQmXoqqVebtmssG3FyxgnZvKe8YvxG6P",
  "key15": "3YTMRuJjSVM4Brt1ymmxKZatS4EtRKeNiMUBVR3jhzWqaCd26QrXDn435v7y4f5geVh5XJ9ZzdeNZBbApa29pLhc",
  "key16": "3Qk16frfyMZNaKdGo9CSFxkPtv2niPtTku4tKaeNuzmqJtXWzfAKSmutpPhx2X83HyEU9er6zZXnJ7jJ4fanbLYV",
  "key17": "4pB9Kxn8ZKABWP7URZy7iPnFgNDPnmZ2Qu9vg21qtuBt7pj9tXTyPVC4jSqYk8ehrDBa9MVg95478SAh2ZcNeLyq",
  "key18": "5ssvaxkbv1i2Fo1nooVsctBUZJEXA5vfwJq7RNMxq1hBArKHSUMX731tLLEVut5kGUt9vPDHtbGhaaCZXbivaEUR",
  "key19": "RQQckiCmWigV6wM4LJJ7WGHfcuARsfYDWtv5SUu2P3okjgqGgVBGeS26N8bH9f1LoRcN5thk7GbJBCBS6D9uuZ3",
  "key20": "xvZZJSvYiHweREDqVveP2p8hsfvsKzVTA2BTvqpocCCGoUan7ffv3jUarKWE2Ceqp1GxYQeHdbnuhGivRQptVyF",
  "key21": "2tknKbcHbmh9w8KdYvh3YEooLuXDUeZYxhhTobd2wWQDK7RxkXadS1ghxwVn5DFWsrUEX66TZTj6fL7s7Kspe99A",
  "key22": "PTMtnZ8GmtydpBdnpAgofhTyabEzqgbVsHBwNNrKZy6F6VigrKdNNmaX2CCccevNgnjkda6nRy6WSAdue7skEQm",
  "key23": "3uDEPuH6fndPVSCcezG8wJvhEBdMu363CPDjLqGesA5LwzgbJ2gcLb9T6Y6W22kVHBWoUevW3XLSJgQARqyipwEG",
  "key24": "2utB47Kgzb5taVE96qAAZEYqQ4yJycRwjVkVTUmBvydVmesS2KVYvVoaVgGWxWy5vX3YZzvTLTJLojCPxcLnwy54",
  "key25": "j1KEBbdzn93HLdvNXNUJkJdwWRDVVyErm6YtahhemVVJ6xvcZmbdiwQDgw7Ps79qNjcgEvt7wYzEaeeUcJDZeCZ",
  "key26": "5dLJnJhdVC36jnuqYTruKm5dfawWxXoandtWHzzEydaHWuqhLJk6BLUAS28SUsQR6XccrLQwJV5t1UcZuDcpquRj",
  "key27": "2Kmr9wPcb7tSYfRKJGFRVWcbE1KXuG4feDQu14ef9ccryVDFrSRr7JpXKw5ofRKvFzYDBofiCz5ndjHM7YV6LmxX",
  "key28": "4RaHDS4jwCGedaoqNvzozJJLdAkeB9dxeXnhJaSkrY9aT6981kxddui4LG8qNcGYLXV1aTou3Ks69LeUiTSdfkXp",
  "key29": "2i4i1ZUtxP1DDcPQZpoFKUa6MhBzZqaUQKPtiBcPckzyK7baXtMisn8QGckFC88fapMzf5CCeSBhQkRkcBBtV2YR",
  "key30": "5dFKoCoaMBdNSsFgqzTB3bsAuVK4wgBTLSYXimfawY3g3Z3EzhXbAaMHMYLBdXCyPkV22rhgAtUjW1f946WkjrZo",
  "key31": "gRcEWDn9sqAkmmwK6PwVNQXUfdqWQtuJG7G1a7yi4tAKfPsS1GfQjQRLK4win6HHCrJB2s6SG8tuYugQP8tWfDs",
  "key32": "3mEYNt8GvsxpNvMgiYFZo4TkSMZgYFGjvuNYgieoxJR6SPNz9JPzGXj7bFaJtqA7ru46a4fnz3XmLPkntd22emvj",
  "key33": "ehLjQ9UqMgEd9X77ZiN6j48iaJsU29yxxC6M7d4jLK9PAD9ysTs43pYNMb2uqrwoe2iJ5EhQKkpmSM3ze17mBWp",
  "key34": "ayDmm3eafLZmogcyM6zLgzWxUhPhyhtuZJAxki237C12CoKwC6f4CqAWdgrVL4k8FaVP8kiUfuMV2CsBkZ7aDYe",
  "key35": "369hv4M1mq28P7GrGBAfbXKub8nPuxDpAXD1j36KWdZRwL5sAGNa8FmUzrdqszAc6ns5AezyyfFTAXtFdLRbQP4j",
  "key36": "2oTp7Ung6BoEC9myif8xdDHa4azyXBgbsTaQgNTv46KGgPh9pvGak5i7AxKv3ESFaX3yKDrPmxdTxJKwTT62CK6o",
  "key37": "38iTbCopWvhbvJdCuyECghtsYKut9oGiAeA61iK9zVwQS7cwJsjEHnZdhZ7rNNAjmbayFmkkdWfGk8xCQijHHUxD",
  "key38": "qdYzUP1RnpKAkbSjYQBhYFph9tiqUsbX5D5mHB16PAqdFiW37jrjcRin3uUVXkLPRVCdap95QyogbLKBAUsBEku",
  "key39": "ded3P1fiUPZUb2Nvr2bDvz5qSKNTx7LSHn2wC2MDVNtp6ASLJFfR21ejJsjbrASNZFFspqYJGZzQvEXnSNpCTb3"
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
