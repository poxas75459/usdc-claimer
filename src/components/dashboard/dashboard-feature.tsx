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
    "4XLMyk2VCuDUiyxc4xci25YgquaQdcvombF5hAUkSqcsb6hHHhVMAA2RufB8Ckt3Wxjns8DeLLkJuNPzSZF4bCdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zpRPZU4vaYq1RHsJzciMNYfbGQSS4gyehPHAAzV9jQZuf9zewfHe9g6odZmMvJJ6ffP4AS4ztvWGFZuASGFxFPa",
  "key1": "2de57UTQJViG9v7c9EDLK9oKrF97LPSqGgRdr8puGoFWVfhPy5dYX4gLyM8iFwDZo8M11hdWX3kULj2YRHCkXyZV",
  "key2": "fo1RHwq1HPsmR9xj17LPm5GXW4Kzv5aAMZR4JAwHvxQvM9gefetBxULJG76p76SEC665EqSkZFqKtScm4cDFMf2",
  "key3": "2HYLjmArS7zgKBAmGALoaL9W4TsYniPFgmWD4YZXQSHoQa4MoaTvGhiUYV6bTyFqdtTmQzVDKGrkeSq33vrKas47",
  "key4": "4tWmKGN58tBqrY6KeanwWs5xRZN5ZSbKpb2TKRBkkP2vvJbV1eF3oFPGxm7vSpcmtK5vWj3p5s1zFY61bpaq3oNf",
  "key5": "3pDX3MYG9qAdQGpeNGTXt2ZR6zfeGZaUf4j4xXgq83tTpvZcrYMCuwaTydBgEBbnAB9Yp6JW6V1MwB6zSocFbHzz",
  "key6": "5KLU9EzrjJN2U14yEWjHDKWByGc725DvPKke9TsV7oiT1f53SdfDoeTMYFsVrvd9n3uTm6Ky71GnWkgmjpgHDgye",
  "key7": "2ihDwgvYxZNo1b5LTzvAKW4LDiKV7y3CYZ3xK4dTJwc6Nz8EsrNurEgFBHEPdoWESPe8ixtQKbHAhMPB4fAJ9QRT",
  "key8": "3Pz2NemQdcHnJ3euhAartvKoGPsEznyibetXrgQxwFxe4XuoDLvWHrKJxvnJMf5LVXrHR1feB6ihzcQX3zm1BVeX",
  "key9": "35spfmuVbHYDhTuh1JMCzJegFyxi8MrqmYcTaw6Tan3bvRnusoBUjcLdWmY1gZn3tFSCuuZDDJ2zsm5roKGDMhbv",
  "key10": "1XdEy8j4xkSzbkSz6aA9c7oVfRh64SXd9n5hBPL5hp4RujN67dBMVumY1RjwUTv1vD5E8RwYrBUcee2Vz6t8Jto",
  "key11": "ThkkqWfpeKfLR7eUfC1N8mweXMXiWd73ejsERSUCYLphoGR51FrXL7VmNTADQEcnvpjpUP6av6qwG8JwHVQ8H3S",
  "key12": "23LnE8iB7LTcW6oWh6CZyUBUzXcRNq1LCmjVi1qQf2g2Gn7CNcuzopeLwBggnnLthW4k5pdKzbPFMjwDffaCHTxR",
  "key13": "3oqrYQkQJHMh65X7n3i77wDR14PdBcKUopAjRpXNtz3bXbffnthX4gTVKLAh9Ve1i69JnheMa3fH9xEzgZNXLekS",
  "key14": "3sqqPWPMtVcB8FQof1CaDZdrESiPJhMskyeuR6jUc3rUHGGMNBYxhZUL1gUaMUjUP6vYkbNvLJuZEj272TvRTrdA",
  "key15": "4pey6ZtaNBqEnQ443wgCJq3r6bgSkg63yWyXKK8VRi4D5gTRtUmXy8Vfs1q28weNd9zTSPThGusBhvxSox5iknz6",
  "key16": "42tjsYFgpeTv3HaALX3tALLt1Qeo9MoMjcm4Cnp2fUaLqtv72WBPHCUawCqJ5S6ThdYcXU9psLT75NbuDdL1Yqvv",
  "key17": "3fukFc61Qp9APVdtnadpLw6EbVbbwHiGAFr92BoD5N6QzN8JQxAfmT8upcJDvk9fkuP3GWFPdhJQM5SKWVgFysPN",
  "key18": "p4Ur4ZnsmzDpBAHusd8HGAyjnAoJRLwD61Bwm4fXaobUVPybnTaH189FFkL3ejnx8NrvoA1u3yrxE5X7vvdPG1g",
  "key19": "3mgqCY3Eho4Qs8MvTsamoCjsjkzX23cCvHerjymn7374FHxfFJmeUZFqgDi7hV5Vt7cf9Z6jEGeddC2NaowKdFd3",
  "key20": "4KpCbbWhaYkVdqicUvV7nvXpd8LXL49VmMMKNxGd3tuxY5BUjyyFufBGFgtk2R8YjYesf2svUS7FyEGWu3HXnxcL",
  "key21": "3SwVSoSowDmino82ERqG4fiw2XtFGFHSi4pixamPy4ZeqNFrkaYSPeDUtJvL6ZucB6gLA2R3sUjmmYNJNU8QZKg",
  "key22": "4uMNETXPCipWy6rSr7k25edytTwfBYL5Jbh6Y51WcmVr9BDDwy8dXzeSfjXvS5N3UTsnxYv3ncKLe73dBU3Fbt8A",
  "key23": "4RBQnGbv84CqMJMHpX21G38vqd5AgKS7G7Ec6y49KQGUMRRs3kAxLRNGr7NQoTJs62h6AvFG89MqAfFojkaLvr8d",
  "key24": "5U9H33Zjg3MCV6DmbQW8apxDopgA1oSNoQxSaFvBQGpi4HXiYXJdmvb3GQHH4bciv4yyLfCUsPXkWfyyE5H9GL9x",
  "key25": "x7BbRpmHR7quBbvpdzndNVBtM8Q7E9FuKFB9qnqYtKDk6gZh9xy5eEd3qNuXm3eXPc6VFBYvfH4TUChpLaTzysc",
  "key26": "4U8YF7YNCMr58DijeA1x9tGPSTo2KPHJWbVxy9bfdWRKCrT2vu9g8VqGmShWyi4tczhUYUouneo6A8ZAx1yb1qz9",
  "key27": "5vXttAeoTJfa5ysdiuZW3nJhCaWe4YNDpSVNyxU1nnJfkBNLq7b7hKvjgt4TKK2J6ENQhai6rTivSzoBDeBJSgH7",
  "key28": "38G5Aeq3zGB4ZTftAHChaHMT7g6pUwqUqQcwdviYznZ9ZjewX2iqBvbAC6vF6dASaz6HGtoqdMBubKQErYxk4jSP"
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
