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
    "27DrTrqy6Uge6yDN2EFnafGSvcsv6i62y1Gn87XWXwmiQtidNhaxpLehpj2BdVr7HMeagCZHHR3pYNPhftQrQnwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BS3PTQPcNAhX3YfA7jFeQMGWSkTnu5JUo8EFzDtAdFUdVX7LBoqYDASYSdpPxWp7cJ1XfQYdQSPEZnHbYk4nLhG",
  "key1": "JFDe45ThRmwAYBQJ1f4EDfGHeEyLZjR2uUKD6pEgJ1ACCK1Kd6LqARvz773ivTvjpfV13bWRodTu6uuHR52tnkE",
  "key2": "3yU4azHiswYqCGv8WjEQWiaGdd92puVtzSCCaekNJFp2Yxr65QPXbJs3tRZQFhYViuQhgstBNCqZH8xe79a7AUQj",
  "key3": "2FzqDnMcY9CthvArnuNTvh67Aoyb8TZ36ZJLPJthdpriQFBTvsXbaFREusD4zr2n53YnDGZHVvpV6AB3pyZk5xV2",
  "key4": "2cj7WwD1VyiHCwCXyUHrJJL2FHLbujS9zrZGYU5KNkVXfFJP9BD5YRjJmRvRM1KDh3oZrePZJaGN5YotCTqoG4Yg",
  "key5": "4tqwzpWNzN4xSanWBKPZ7YgcX4PavftNeSCvhf439nFLFNYQVBWUeHV9Gjh9bqbEzLhZARTxCrEtp848X5PeSYae",
  "key6": "2N7U2wyFa4uX7o97zDx9uLBcDbGQAkaSd6yUvjAuQsKfXfWSYHqPcfZLVGKUCpiQeVgSzQKm9eqv2sPhuK9ciEjj",
  "key7": "3XfDFUzv5d8dXJnzVrfajoR69UGgKK7D5kjhEY7g9ae2fj9i9V4wcTWmfEE7rwphdhbSfDm2hBLHpecJ8cAhb2Tc",
  "key8": "3v5i1TcTMsGGNzm9nbwaoZLVZxn3N8QFVfMeSsAL2NVZkUruYa79RmRAsxEZ5myreLhW5vbiUqY29efvSWio2qyh",
  "key9": "2uT3xFicZ5YLSXmAFkApWM8hzTQk2p89bqu4xy4nwFF8fFwaPmfYPL4Je3ea5JDevuRUo7gRD4uNse39pVQowb5x",
  "key10": "5eLMB8xj7EsLY9u9bHK6rkzYnXALxKuLaWieB6Xt6Z57F7r5meecJG32bbZzSqUJ96iBDMEJeErDQ51s1g7Kxnne",
  "key11": "sUQiPsy5pxKUrWDp9nu5TPb7zyrvX8222STbXip9FP6s4grjWTWNvasA4PRWZovxYFAgMrZtUu2vNXgLkbuR3k4",
  "key12": "3PcpiH2XotgdifCVcnLzLWtqAqaMpP5hVVkkzvsSfwhGSp8N9amSUzCzXTNwUAfoEngADZeV7LEU5tc2LHsLHacT",
  "key13": "3eKHfU24ZpP3AgUimMbsi43i9esNyHzyEveHuJyKc9kaPFD4PcP5vfXFUqx7kfQKLh8CDRfYQg9ybzWh2kLg1Z9J",
  "key14": "45xq4MRmUhzhvjbjgZgET6idyjZm7WAhPCUgvjnVdQ8twmThpAxWTbvNcvcx5aVKqFF7k4a4fChrnBGZz4bG3fNo",
  "key15": "6hLHFr9HnSpPgh56kWFgExrJKrg6UYSS4S7jQPJmQLcSDdLXg5gSAgiaCv9c6NNtPSdTUZ8Wiyvp9Zcb1uugd7S",
  "key16": "2fJnEesQ4bj5UcnzXftTL8bRUNHtzF99D1oxJVtB4gHEkK9EfftkAzGEYGQBdgAbEyULvtotA5hdXGYr7rUy9rA9",
  "key17": "455ysfKZ5S6jKRWgtubD3KkXWTxMZRaCkYo6MUZ9MhWYkkacFajZvu7xfwCcDYi3KRkxcoGLCd3J7E7AGQZymyCN",
  "key18": "3TdFsYZE9GyJzMNXfam2ek1ezj3coDPXi3JDJBkvAcuDN3PStJ8mmQ1NKajHmeVArx4T5e6JnFPRYXMYKiAMAVT1",
  "key19": "yCPY2wv541jaX31x9kkTSbV9reqsX1CYhBdQTNwHpF9SSadqujuPqqFfRW4gY1JeE4v3YAKbu89fhcQmntcH9F1",
  "key20": "2JPRqwkByjZzFdkx62KSnKYZkvi3rpKETvDEtFpoLabhAzU5FuqWqLxtmsE586AmQipDU5Z3Gogg3WrwCi31VZ4R",
  "key21": "2kP8W2gVoybgXS9KdoLArDsce9DLAguXnuZ6SHgpa6ZJTsQ9AxWKPLTnALhd3cJczCYUzhDg8FGEfVG7WQWneFi4",
  "key22": "4av32ZnyhYxqNMESasJ64jzYMkCTXFBkdGLGWLr57noT9zaHwS95cXwEgrcaHV3v63BQpR5u5LCNT5RsYtNF3GQy",
  "key23": "5piHYpzLFRh3QC1BJJ7K1vSbxPgp8FyM9QqJPbjRq8NSNpXdKzToZMQbu1joagRyBXi2ouDS34CazwkrdoppR9Nn",
  "key24": "56KDjU3PTLFteSijLeAKbuawYCvV7ktWatMyaqL3uwu7petYStidvKQF7jKDSxVSU8GZbD6KuR9LogLTS97u4wvP",
  "key25": "D82uX7sDZsfjuGbrzCspnLCEazdYZJDZnbyjdL7rYiPhE2rMgY4iEpEY2jXMAgPZUzEgKE3MZHEfWZ8kqEPfTJ7",
  "key26": "31jtscbk4Diq5epPP5HdT7owtuAdqhSMJH7kTerWVgMDK7nPyj7i7PQotX66Jia4hr9xfxKh7NkzSrauGhQUZp7Q",
  "key27": "2kZhZQysSwX8JPEed9RKU18nAo8vZ8bf4TA81fKMJrNjuq69t1vikYL9EheqEbJW4RM6rw6PvpZW3nmbbimNbgi5",
  "key28": "3BJR5WYrK1jR9VztbZNrDCfMbgxykRMLcFyAHEs79jREuQkHxjVkYytnUzAr1AT3WX6H7pVMzJ1mVCoWcw2PvHjf",
  "key29": "4yBChLta3ew2TMmh7XCyYhSmzpjNco9btvTjkYF6UDEisbp3SMph7dJKYJWeq4Mmq5XaJUL6m3HeeDJgNicusRaC",
  "key30": "5VnPHncxgMqV1akkqCUzfjWqHJcMNAWUW3f4qLxJRmTawAVm4nfcfVFNJKQaPYx4vnmyqDGTk4uUZ2zn62aqCwhb",
  "key31": "4zYKfXNtFr5qVfaUgZg2q6Nc3dgSLrhbWgCLBRxoFkCvr9iicgssvuHDsquFggBKnhUTNgGNC1cht7qCXLSGoEfj",
  "key32": "4ndk1DbL8kPLGvSkWHjZiYdGusG4wonPrUoR8N9QFvTa6hqvY6Y8emvJWLMLyhqZa1yvAuwTQ2ucVaygRR6G1bAa",
  "key33": "51jrDLrDbwoMCwNipGsYP7z964jaV1hKewY9nVvNNGpSPYWA5RAeiEQNWJKK7hb1yTC8ftax29x4uHjFmeMfdnqZ",
  "key34": "KE5UD9GXHF6xJnVCThYz9mJco8ZPgvmqzev4fFUgQqtvsk1nBgyKLmQUf1BYDpTMTgQT7pu3XDtt4Jt5rToaxYK",
  "key35": "4Yzjfk56UEieMH84x26rTvRBmnVrNwj34WhcHRCUPri7V32fMGM8RL2kGvvD1rM592XHZKcLxK2iejNeJ5J18DT4",
  "key36": "49mwPSAQ9cvLwBZPkbzYCWhafSjmmY6ZM2Wj6N9S5caiBh8KbpAhwWkMmvfrUzW9kMQiBnC6vVT3ZYJkdJnLYe7T",
  "key37": "js9ZxaCj2aTo5C6pJdRyhocB4HPZVvEWGyQeMs7QDc4iC36wfkCvVCnK6i9znBYTLFHemEiU14v1B1qZ9ekMe9v",
  "key38": "5V3fGCvmgF5akWzF3QMJgorVcntbWaiTnE8651HSpdw839pY5HBBAdJ2bqzRrCKZGuoAuWJyisZyeATvDik3J483"
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
