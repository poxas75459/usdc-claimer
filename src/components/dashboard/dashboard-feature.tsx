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
    "4Tv3op4PBiPwtD6nD4riqZoueZGKb7KrDgq6Sc2pyhbE8Fbfpza3sJ3EBBxuwuDZbYBMjv8GAkgwQjpMs1mxKiij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yvvwn8aH9fWyZJzXu4fVKKcpzNBa62jrBChNBDEUjceyj3ZpaujbqXsVFZTDUf3iCjYoZiJQQvdcBB4Wma1btZ3",
  "key1": "33BSokVqC9LH7AmAVz7VJGdJkXwEA5MRpwiQ2jp4aPCs6n8jLJhnGo3hJEYf4ApCwdbpQ8aicQ8bQP5iWUAP8SbP",
  "key2": "4ba3r88iYKt5uFMZ2Djg1uUuqbJ64RZhRPJLCV4WK7bZwWqX17KBoiQQAnrYgxB7L3BSK2UyfnN2cJfbDfjRTpo2",
  "key3": "gkbfB44yoozsM74aZ97shWWg3TeQKu3C4gPFMmJp7879FicNMknbDk2552HsqKohHF2TriyTVaqKbfvJa9ztMqf",
  "key4": "336FktZNcE2RDCPV9cisj98XbE1Y2B7SZVGSNbwnxqVop5ccoymoaR26eotRsvShSJFj5rMb4ocrXWmrsVztEWZ3",
  "key5": "5n382nJfFxF6N5FpwEHrhxbX9mxe6nP7nfGCGVNwcXVEkMXWNfL1ZNKvneb1UvNmriX1EYEdxiyMBb7j8TjQpkmR",
  "key6": "5ma4bad3aYpiY5qFHhXeGB2jUu5R7SfiqiqsW9hRmJm5sG3iwFPCAbY83qyb4RkiAGUSikfZLqWoAJjJKvU7u7RR",
  "key7": "2M6D5nmXxhFpH6P2HdiBuc8co3mjN6zvW1Gi8F9YoiFVxCgz5XeeGSMx7Pd9q87eZMw9wm5cuMWtPjvJcHVMXwaR",
  "key8": "4nSR7Jy5p5YvzJTJLTu6ZqoZxEu2DdxPPkKJLGyBvjbD9PbkN5sxJgSQut9ebRLuUjmXDtCkrMeUrt5c17p5Apfe",
  "key9": "4uxuyXouLQqnacWpDepD2yBBQh6wnHY94J5gVqhEh5ocaezZymVqpBHwJ9yUdXFA4pB2mqDS7d34z3B41Cn26CvK",
  "key10": "3Rxqdpm5AStwCah4HMMUgML99ojaj7RsUky2g8AJvs7mef83vtBdu6ysgtkHFP1CMBzXPYx8gSX9RevnLt1QbDrL",
  "key11": "5kUWYBM8EnvjUFkKoqffCYKPSHWvAt5gZk8x4ewRp63MMy2WRvE7Zifd79JPHpzVdkczpz9cD2GJMxEdyGwvhgYe",
  "key12": "5tLyNFWydH6B1EeALAwdXqTNaFbmcb5aqLACTHBXoJ4XSKZETkhzR2G4oJnj6fhohqhHAwWQjE5Mx8RVkhdMDJrk",
  "key13": "4hfGU82rLTeWjyY9jnsc7EozMmk1H8esRH2nX8YUHPXjuY43NG3YdedujkDTTszK6AVy3vpEWAX1gBePTtQbhBNL",
  "key14": "5yNefGwU258P4U9s6cSFgHcpfipsEGe9GszzH3m2KrNJrftk3GbX5LnrgK4RDJSzoZYaHN852JLGWkQwMUcgNHpr",
  "key15": "2NeYAHXCEBVaumTuKfBWMaJmBjK8t39nGYmUJa1dxLHcqogjtje6RAPk2fBcc96X6hyEqorx19GvZXBdaBAAhQ94",
  "key16": "3MP5rsUqcEbtUg3HSvxGrQfuVZAyMceVBxRmBeGJbaHB2iy1vjcxGZUKQVuhwvEy9ZdbhURsJ6q7SWkprrEEMBPF",
  "key17": "2EgJkf4AnnHsEqvwSwnLcYSMuBpAnfGp927sDXKNKT74gqsYvNybJFdbB9kZ1JA5T1hYhT6eQd4dPshkK55Xmds2",
  "key18": "5VF2T39TALn1qNu9MNin1wZPTgzY5rTbnUEszPpxrurBdMa45DNt9H1WDTw8NmkdHXtZr3Ykgg2jKWpgyTcHDGr5",
  "key19": "4EbViXNenZEYM7zXgD4T4pCXpgDZGdCfDqaTARYbtSpAXQdgK7s2dwwkZTfW1GuNGV5uigZRjtdBLBrn7imNPcni",
  "key20": "2jFeruzNE9QjjFQm4VZ8UHGM4R8McKXyvEz21fU2rjSaaDDt1XQJPWi6T7sQrgrvr3t7SUcfKsVb9deYVXfTpb2d",
  "key21": "3YTxaiDmR7uXjH2zuTrQA8V7djv9SDwrLhMCGwaeu8GSFcXKkC51xvoCA3Q5tCvzsWhjxTG1qBLrDkW91ZUP39uY",
  "key22": "5ynrK5ohDUJhb2mHteq9kRkcTKUDuhZTG7ZLqYztUcTrcGa4y5WZR5xAZfh18KcM8JLgBtcFLE8qizTvAZx8jdq4",
  "key23": "5UxgvZzvkqM41XzJPJYXFPR4F9Qno5YcsfnebThAxPg2MJmbnpnjiMUmTx6JyZHDGk1tZ5kjKMTEwp4nKHHmqK7K",
  "key24": "w9Cdt9x34DAowSnc47niBNfKccgqLzTrQgzj5GfuRf82eS2QCcDHhgnetPj5nGqpscrhAxDcEw1HGktThBDg9kX",
  "key25": "23J2zvHeZ2WF4sojNQaYAxC3Hyp2imkiirXkpRZao9q5DLFq2HJ8GFaSnqmGoQZwwnWq3TXDhYt2pcFDaiSy8oLg",
  "key26": "5koTpmXqCK1Qhy2k1UNbK1WJaceqxxwv9uQ5rfbN1VGMSoKJesB2n7hwo5MRfTrFu2X7bz5jSREbMXkudkPc6BTX",
  "key27": "3vt2XU8mzXrt93L7mbFgTD8MNPHLWRvo2xG1aLTvjJfCijgZusEC4bTg5yJ4xzbqz4VUyAKBLHa83854421fck1b",
  "key28": "H7yMYbf1BJNMU4xfNXgEDkwrD6fPeXUXeYUMvz13beQe7XaAgVysHN6PW2uqWuoq6p6MeiXQb84TJmR6xGEmM4x",
  "key29": "4jrodEArK3rarE9HDje7Q5czkV2r2nrL2ReFHgjFmBB4DNsQBLgVJaQh49zyTLAADsTPYwQh7cYZLHJtDsLZuBSi",
  "key30": "2peNt44eo7bT3VwPBqmCH22MnTTDCoUsHgFKWebGMhvb6XKq3LrqXxN4p58QR9TnbDZbGFNiKhfww6i3AyAzQKzJ",
  "key31": "4Wff3AwkBKs7TNV4mEzqYqEEoGVVj57cYGRSAFrtsiQDBnK3QjVJyZH5shAHN96sxSeZJoQ7mV2HYaL7BExnxPRs",
  "key32": "2DzxahUi59tdxYq8jty8FHGA1ehfE9343baoA5Aev467ZkBNnZ7eBqub9RRyTueq5YVmbLWDnvAgtAxBKrrBt9Pz",
  "key33": "NvMr7cypCb14sLeP1LfTmz8mE8JScVQkKfcK6MbUQ7roW43Fp5SbhtriSpJQGmYt8p8iJNYJemD7si9ELBz561i",
  "key34": "57n7wgqBQaLAgtdLXifsbxMLtyiA6qBjnsFfCE4LDjM1VD76bwgzC5ddjmNoUjEhJ1DYcBpkPbmZ4QYp5JgKZscM",
  "key35": "4txxfx7YvYBJRDecthxca5yXYxtDBF2xN99juBFc6t2f48xgTX87pwZYD3WHkMrLg9XYjEHSyVSis8vMtTBU9Cvf",
  "key36": "64rgoykY2keiwMrwuPEVLA965n29jC63CSMbzrSVAms3VekyU6DjrCYyTSrdpuDra3dZcjL2V19whLGZUNrLYpK7"
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
