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
    "3j6a9VHdwuZBNS7yChomYd6ubUKu4d8pBmYQuy3t2uL2VM4w4GLVKJC82W5LNqr9QGnoNEPkpvBP1FJW9sXSKEpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EpkgbtkeCA48sUsfyUtpa4zDtYBqbFUcekjkCRsqt5bLxuADM2ty8RV7BbUbRcCFPcX5fdsPhHfb9PQvPpUzhcu",
  "key1": "wXUmieViDnjvJQdLNiVZr64wAfkYbEcDzF269auuBcZAgRJTDL55jjFb6NX8nXaJ81LQVUxchoFcanzPNZbue1B",
  "key2": "4M6JLPCqZ6NSbXenf9cx8PnSYf4N7XhEmkRHVtY1te3esczyyy1yd4fuLTfq5ZkFWkWSf61TNmkk6tFe3y5ghAQz",
  "key3": "2Uu8wNr71NJqgZqVETgC3n9BrYk6dE2UnczioaTPkfa1jerBpNckaPNLKyjR569oenNwkNeaArRn2tv1rLCsyanL",
  "key4": "5BnzXZkFL2ayPG7hAQC2YCq4ywZgXju7oWE7mBhdhwrMn7C8yGzc1R14hxMGBNqDHJmG9vS5gkCkx1S6jMxsCFNA",
  "key5": "5XqPzX33uf82m9GNqZY2BwpT2ApPCSoQAuUVQ4TGJcyw5oQTiM6v6kTQrhYCgvDzo2hB8GDirMrzvvyCaE1D6AF2",
  "key6": "2eKZfaebH9Eo8fhyNjfjzJRPvEmRLhCgxddCeKbWA7Hvh23rMEMN2Yzefd8RwvmRHK6EBRhuMh8UtEjt34F5Dpv2",
  "key7": "5WQk5bg7gWbHDP9CJJ7bDajDNW61fFQ7fmiUzEHzYLd8QD9Sj2VXZz3aD43T18JPAjUEm5JQANyJfGjhqqbtjVmK",
  "key8": "2SSjNbPE44eko55BVTdoNdPau8YgEBLdYDjonno2P4j9wJyHRPGYBJkfsQzDEgK6iyTENWKAgi5pZq5kD7QZXX5T",
  "key9": "2eRR3HykEGXUJ5Lur5YFp6GCQn1xMFMQiVnYzLoGXEUfoxQMVyRVuC3kPjWf3RR1B2f1VBXxkY88nhsJ9wQBSNh5",
  "key10": "525PeL2911ArS8qDgSsmKGg9HZ6XutUuzm3WWbCL3hwYYWnZKcRUdSkHBpWrVBBg2uF5v6QsKvqp2kXaSBokysL6",
  "key11": "5DEbjpncxSxuPT4ahitXkPyToQHn9mg3UqkoTmbTmuGH62RcKduRQJsEDS1jgnD7NkdmAZFTj5x1sZEqaSWqx4oW",
  "key12": "6679VLBW3KKHvUBfwqi8bHCvXJ3MwEK8MBcvmzckikHoW7NP3oTqimEXCcuWAaNgPD3MLVpxAMtKQg9yd4KuwaYo",
  "key13": "32vFGRyipapb1N2SeGmX6pqLMs8ZWCEKX3tMn7Mee9MhRCFNZcSPmEmaWiNdWNv6Mt21Y26NB7uwYR5644Dc1DEQ",
  "key14": "5hS8hAFoALoHJTbLHmpaqbcnw615X2ijNB3HyaWAsf7xa6YzVCiE89FxexBZ4hZyUh2Uh4XBw62QeqDLGQK1syr6",
  "key15": "5aR1EypFfQXdDpELw3nspzwKpBQrd2c38BiusboJ9wP4qmGYrehFMUdzniAFrZT8jUJKRMPRsMnAKxFd9CeNwYyM",
  "key16": "611ecTz4vkK3Z2vzxCBTQpi3SdW5hWpUVdhytYmcXBJcXGMxJeNEgcidnPeAi8XSVaL1wF3bxQEcnVeeMtysDykY",
  "key17": "3SjMawEsVqxVa3LwAwSKqNkn1MmLQBdkKec4TFUBxoRdF5kHkedr1YEVdmJqWJYJWcKm1tBQF8HDN49xLzE9tZSt",
  "key18": "4mvj7jHR6ENVNHCoRp5AMdWJaNqAgxAbhWMao252MjQkPxtY2sYF6E2kBZVMquATyU5v8VA2v7wFVWp7tCFEJzzr",
  "key19": "3mciQCD9qD95Gx52jikZpLqybDeWwU2WC445hLhPqzmqRbzpiuWUDbM7LZpwfzejkioB3BNwwLtDYdex7uv2wd3z",
  "key20": "4bCSSJSx3tyKegHRuEsVUj9skaQwA51fDfzTfgki1f3mpq8hUccpdhwHaUTExZmQ3qyHwBhT2Hr7n3DqWiZ3HvHW",
  "key21": "4JFcBwtwEAx1VcsXUrcsapoy8Fhduafg8XMgXgERc7wqF5AVRs7VyyKXoaFZqDMrnh9v1XzBw1GHeECcK9GMhfRe",
  "key22": "2Ciwqimo35J3vpzikx3DKoowm3PZQPmvCiAYZEPqiSrvFrharZara2hwxNEGa8c38ibqVNqqVgyh8HdfJzPKbkZN",
  "key23": "4oZEQ8gEbU1P4giLAbpVftz3e1TdL1VmrTKYsqvfdgJWDWtGuGKur2SLMPY6ezTCjj9NzN9fQnCVyopddQKWsaF5",
  "key24": "4SnaZkj7bCYSiEEJbw37aios7ezeGbDbAt5K7z2goJy2T4nxFKPH3jhzoF6Kd9ns2znbaDGUaeLBuEcKVa62TzZW",
  "key25": "2cajPKird6tGz8KUD6XDKkYrbdqCWgNR3idykH77riqW3gPHBjF26eeMAVQ2ekeQRZH6aB2BZ7oXpaGfrT7WRwb5",
  "key26": "cpTJCGu8m8pEsqDiaUMJ3buDLTsR28sM7piM8Z3kWNR6qgkmQPz3sUT7s84xYYJnHV6W7eN3AUf62N2evRJ7NRa",
  "key27": "K3Qr6kx1ef7JgHG262boW8fL5PJDwRCXb6CanYcFJ2Vs1KbGQQRsQQtFrcaUuvSriKY6L45RKXQpS875fzWTbvn",
  "key28": "3eL2tjpczu8KMpCy2d5sUxGGcm8h2FEDToHL2fsBLyaN3A2TWdUmCKLbQpGharB3zCUAoGpXFbJnRBThLUhzDoDK",
  "key29": "rCn2oeBDjgB2Dy97fweZ8YEN8qoWMbGdaQWXYHr4YLswqfeXTHyGxTVcY9gu1WLy6gCejFhyNVsFTxT8dq5RLxL",
  "key30": "5Y71rCs1g4BpFPVGXh5iyNJCZcdpMcPAkEh1Pi4XReXMPto4yDfQhS3ALAuAGmSVcsBhhPzrBFbGmjW3BmNcYjtx",
  "key31": "4mE3zFUuW3UCCCLR6uU1cKnhpURKLdbtDCh8no5i5kYiYw4EnPgph4jhUXoWLPnk9raGP2px3VWQiLNfGuSJAnFB",
  "key32": "2EhKx8Lbwfp3SSP5rPMZvamnevdNeQuBHCzjwXnLGyxt8jWfig1mh3TJqEMtA4tSMLonJhGd3h6RubuiMVJM7MjJ",
  "key33": "2owSqdUX51D9bGsMWKfMN8RsPPTrycnrMqXe8XfAEJ4JZ2AZhJLA53HKPhXLnLLfcjMHQLcurrT3HfsfX5a6QpKa",
  "key34": "4pCqRjoTB9C6BQ378iydq5DtCfpgHANb5i22u2go42RMYMZrXJABZitPZq1yGng4UWTVGaFteJYNavshpvDP3v1D",
  "key35": "4nGJykPbn4wrMbSoBtcdWwif9YxW9zxcAoneKzUVXUNM2BK9PvcNmXhXC2KYPnHyTQP49y8wGmND1LRJvHwpHFbd",
  "key36": "5eR76nJmpenZ64XYAC7EfsaNdBKQUPRgUEqBBdBtw9K5XC29YE2R9wjHwWWwCbX82kxEWuPo8tTA6hGkjs671A28",
  "key37": "5S8WE52A2VB67rPSUq5uKaroU931ZKh2XirNVbVMDS3MEtEozQfCUYhTCctV34r3znDWEMimFTaGpuEvT3RLAbwv",
  "key38": "5r1U4Mu4Wbk1WSpmrc4zXUyMJXmTreV9veMBt6dMnHnWVUMCGVzKXNc6tmyJC9QgtAsmw1asErcYbiMEKTto66NF",
  "key39": "3XZVXMpYbJqu1jiXPTRQ5WRnYBXUrzuPkBr3QXWsKNEFdzqDHDmRrQPZHYs7ZrAUnqRtvpD5jdX4oTcGM8PCsvo8",
  "key40": "2VxhY3XmmXWYn7iNeBXhboYTvf7vuwLp72KJfnRtiVLBijsG6HGeoCZHCFMPAMhypDwM9JCrfjEXxRvHkr1YSLvG",
  "key41": "wcvZepN4MPRj1BP2a6qe2zifQQnBgo8ADBcxmAUjpeVXKQWxU4JueQaCA9GP5vPuGzFPTkGco7g7c2E8zafPw7S",
  "key42": "VBCra9fzLSzgknifeUAHDa2QXo9QB6k8rz5eZndfvniBSX9S1KcWKCxxrXCqg6CK5P7kKCzBgFSMyF7pwdW3YdP",
  "key43": "2jqz12zaJX7GniDoqM7gkuq3xqkmMpmb9Y7cBSWUfcDW89Dc83VwPMC3ackc4aUod9tvqJSQHBman7nmyD4dmazd",
  "key44": "264HFAhJNmVNZqNbxU1bCJ7CkC1W3BxC289ZykNgBaLWNfpoTh8ng56bXw7J1nZuSJfzZabnAee2L49ASekWttZV"
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
