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
    "4J7WFZnp2F25osan88m5UyvLtzHLaLreMvhBRM7CmhmAVR1ogFKpLWgAK2b3RJa7sNr1iWL29tqkbxaVzdG1TQkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jDcBi1awCShZwbnHjAB77V3kDkrvFF1aXuLaHmQPQXFu41i1JakzPmAdEhhuWG76xQNHtau3jh71MxhW6s9rg64",
  "key1": "429uRex6JyacuJ8KECnGrkodTVSY8cRrEann2koEL5YaZV4jeWwRcfb9mt7G7SwX8f9s5fvbp56XSPf89f7AZiq3",
  "key2": "646m6GEEJC2LLsEbLFJNXqDmcbjnQKLTpRES7MT3F2d6sTpasJsajJgrXeG5Y27eBVc1ib5RZy1mSBbVr4T5ANYc",
  "key3": "URDNikjgAi7ZpyynHxRWaQ5ob7qPif5dpALjVq8yk1Z37xpaJkrCgnYNbhRJiWpdCRiKtbtBrEfV6rBvE7b6Umu",
  "key4": "3DiSJVq71DXTU35UpwGTaRYVyGF1frceh1qQMLnFtzrVpJGh1Db18NfpGneX6Jqi7SDek3YGJFxJ7kTLJFfpXeG6",
  "key5": "3ZjR41UDpVmSo8VigDM4sxpAFap7DW3K6xzB7WyTmmuWVmi1h6FYhaQdcJF9LAtHMb2euChRaJm3jD7hKWLBfzkC",
  "key6": "3WgzWWVVu5dFhDLuLXjtuHC23Efto35UQ6rEcN6sqUgEU7QHPiAt6mDfLh9yp7LSyjm2UK7HQX6rVS6ytAdsgdDt",
  "key7": "4UoZmMgnReJFakUhzP2kKvNuKHvefKfKyficaVqs3yRt5yNDoJwPGUw7h6HgwKhRW7X7kY5iviHu1rZUNKXD7E8Q",
  "key8": "61YnH52bNGqT1o5jj61i9Wgbr1wRFe1GTs5AJ2mWsEaVpH38i85n7ExfHSPq62yFMNvj4xbSMxh4AXzxLJk28QH3",
  "key9": "2r6Bw1hB4k4iX8bMMpqUs2Jmhvs5E9atiUrnGJ6yfuK9Jf2Nq4JBQ9Z8BDuGcjUkJWDroiNxMe7VXRYV1gLYJCZc",
  "key10": "44nKVVVCSjyZVYVuxhF4pebJkTixdsQ5KH5mr41ZCP2BJbiRBTKpHKofL1LxBGmJjn2YVLSbS6fXjJxLyH4coFqs",
  "key11": "9rCqghEbJrA9GJwUJznn3My3hJNwLbUukD2ksp2rTVhmRVcGqwGduk2n5T2BANwuWJkmcKhz5yjy3zwbgwdZTMg",
  "key12": "3qVy6xichVdTUASf9Fb9nh2LGxodMrbirjT9q7g3RnHQSGJhH9VkSHmbwhL7MvTdfKxyCScGeVZL3MBM5fn3NNfT",
  "key13": "5BFhp86PFtZqh3X7suhhGEsAmpS1JSJyUvw1umkZBH3JMELQeNziYNpeuzib2PF2ukFpk5TfPtMT3EBbgpFy5p7k",
  "key14": "4ERQKcA1Mk7UqGtoW8xDn4L8W9SsAuVqJnzpvArzuKifQ23dnHLZPHyZ12o6qiUzDMv3vQc81MiAhNGWgTbE4FPW",
  "key15": "Vz4cuJDABxWjDtGAbYhr616zVodgaS19iBZGW1c4CAzszbCGZLHpe7epqEYnxxkuR1inhfrLBw1R9zKptppmEh2",
  "key16": "5Mtt4vXpSFRYyqnotJdoMaYUqPM7KmPTJQ22pWM8Er3yPjnLD6beJKc9DTNvYjtBhTxgEwm3iLFw3nEj7wAgGnPm",
  "key17": "3iWamcrLVJ6XQFFpgFW8HyMshv2j3iCZFXoHWW7D3f9DaQYWLdrP68bNLzMWmE7PssZuET7KHmPfpiHkmumi8XCh",
  "key18": "4Dsu6XejpotDHkNAeg6xmzjFR3sdjJ6kQVkJXy56eAyReas9pMb8tiW3bXQWDjxNkRuZ54CqoNMLCPKyjZbzNjyb",
  "key19": "U4S3r8MomDuyS35WrCHJdLyANEfBtpdWErGPwaUyKYkoUX95eKNNx7LbTaAC1CQiUGKmr3PbDp23jrHsDVxLwLg",
  "key20": "2uDw35Rxw6xYpUNJUkxeENsmPqp27156dht9nCUTRGJJcuyszJMSRmhHq3AMF7oreDg4qgsoPmoFM9gFT7sKCQNF",
  "key21": "5CnRehfNF6tYSzT3rLqnZqiQpvZDEL4T8pLHCU5NhCmh3zRz6itQVbDgj8bGS4pbSFnTzKrrvEMdWiBWgD3Kb75j",
  "key22": "65vX5w6bpUwhTEgzJW5HyDXpU9Qf6yJXHJBSf1D4ixW1t1MDpcByZ5JXedqNBHdWNHCUQZNpoLgfJED2ss5MQXmN",
  "key23": "Ro12PyJ7trkXcpeMXHVdquxcg3X5YUsBBW8LLtxrtRbZdLVGm7Z7Ed97fUR4ce64NqA2N2jiUxFCFVc1Weq9u5V",
  "key24": "iNQvkCZRud3RCoWUgw4oEyTtqtM5XAg1GcU2JeS5uu3iX1vCJB5Y4xUJdNbknNArCY81ZgJPxhRnYnnr1TeAi83",
  "key25": "29Tk7ruPgagtn6LRZ1jXSoznpQ8a6fW7aHSdtQzMcBUv1nV4kdWqXvGHUaNEweNus7UN9ojKsohCDpiSNzZxqnLC",
  "key26": "2WASMJoJMN2ozEpuPFZYmXbrdgPrd8atxFQiwh5fiZ7664a8chGA58YfFrRHsPJCkSzLXNNXDDwqKVXJYw2tEusM",
  "key27": "45Ey7TMccgY3s1orN4sUXs3XYWW7jdAuMRcSPJwqjBBTgdirhdyANWQZcsVkN4udjoF3Qpj6wF7bWoFmYsyKow5m",
  "key28": "2JGSFKLgmk7DXKs1qgsgXUE3P5nfdaQuCX2NEUamcSYH3SeDFJgf5jB3yEXqHPLeHi3K2JqEMf9arVrKuXyf9WYk",
  "key29": "4YLXsvt248JeT39LymMu5MSsrvMHd9czStPvR9USaFHFTKGkpGpTJbSKxF2x1u7KjabwAye2WKFCuVTGX64qZvid",
  "key30": "3XYqw4oq98HfBEdhdu9aUCrNyuX3DP3Y9vF5QbK5tG5sLgrHkyKANKJzAp4vwAP5g4m38dw5t76AXL8ZbSjMnL54",
  "key31": "53XgWVzKwSY37SVWAYDpjZ8n5dS5LtEi9ojpYhwbpBiDk4nS5nVk7jXRszRQkfgaKKh5gy824nkJaiNSWzLqxAir",
  "key32": "5BhN5nKxwW6CiufxF4dVNJP1wMs6e9ieb3Jy4BUn9ZSpEq51hKp5pnmgRrj1vRRaPR1HCc2ssgiARCqFBDSyHscD",
  "key33": "2SvLyU3MbkLGdycwMvJfpGMAsxv9kdrrCUoJiUifPSRkq4fJpbeEPVz2azvfksFcvqQwW1PCGqpq2e51oAaarBh8",
  "key34": "3JuhGgtZ8c3Z2EqYPUkVgwSurkyKcVhRHGb1AA7wf4gFMgzF9GnrY2rn3qnBntJrLbunfqyjtP9HMuDDjVjpsbQD",
  "key35": "2a1v1MRKdjjutFzsVJUZNS1CcdFWo5qPLUGqez16Z74qkSjQ1Fz6KxR6RQmrUsDaWaRfqBS9qLq7mEkzkQ9jME61",
  "key36": "3DiMvPPtZUWfHRRYj63ZJqiX4wQDRzpudbFjTBD6akDAKAcncanWmzWedoFa2rgvtPauJGRkQHiG33CLqZMphnRY",
  "key37": "3x8uFGTbtZqkWQUoJZBfJNfn4mNfpActjExHJiymJf7eqRQFmSChepoxPNNuAiyXBywvoNZzeGuDhQ9iZH1a4Dwj",
  "key38": "3FymhpUjYuQHM7udFUaX6hzEJmKn9zkMggPdG4JvCw8NdF3NJHjDCKAUGDH3sD4skUo846jeXTJeUk67ioPWFQc8"
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
