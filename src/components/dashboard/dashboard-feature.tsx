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
    "2fZjRiRLY51JBQW9Q2GdBr7kJwDt5HEwSnf3kceHt3uTbgTDTjo4jiP6EwfshK2uX3MuyA382p1wZ5LvBeeNuWKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LNeG7JRoD3yUo3Hy6MCkdRogazReKvF7bQZCrV9MsMNqo17MjfXQVrXUBbMsJnjEZQLtnaRZJf4bwtZXpf3JRzf",
  "key1": "Mqjrj8G3PhwTGACvo9PkipuN4iqi7gi6amcQpsQMC4NMFv4L5HRYd3n7HvWcBhUV7cjRB7CFZ2VkL9aP75NbzMt",
  "key2": "wPFPvsrBeykR7njdGhZm44NHWgjUYjdiBhFTFUYMPLSdnx63ojXzmpQc3ZsrdgzRV9F7Z2UfG61XpWkFWBcMh98",
  "key3": "DhJFSMYi1aojRUVv5ZULzuJqWVHdWD5kRzujSjK27mM7XTA3ttk7Szd3pjjzDr5NV8hsSgUZwk5GvUcVLZLjXyh",
  "key4": "uUyYfY7csvzm3nniZf3vwKdw32869zcijYJTP49nwqcPYm94nmNm3VGgVigtj8xCeGmdNaSkbE5RSMeqarjrLrP",
  "key5": "28u6c3ZtAKZTeQPSXg6HNwVrhEeVLgk6AyBvhfzddGrcBarUQBxfYx3WDa34n7sXvrfYZz8SAh3sBy6cu1MyyhuM",
  "key6": "5WCznTmDyvSUv5qHPLCKxpSP1XLAstF8YTpXRwWDpVCnT3hKgpaLvCKeJYeBg2y9nM5doUDsQEusVpPuCvvv2km7",
  "key7": "NYujYawUbWPsXs92g3acJs1SAt5tjQSKNENL3nLi1LByKH4XXTdsu5hKQVS6sLtQtna2YgK598JgPaHChDHdSvr",
  "key8": "3gkgpLa4MY6c8YfFjAV7vj1EKBkBY46V8QtNuXJMkHCMSGPnTJgbUUzr4gApkP38ghCMDFYUV5odt5NcBcfkTaRe",
  "key9": "2CJCHjKZ5FGLdXwLmaiL1st1UUS1b4PWf7xRQWND2aiGzEi3xwMEYkD4vVT3RVF8WEc2w5xEk5P7fnjQ2sH2z1Dg",
  "key10": "ixCLaVYWcFW6k3XAaHnoTu9QnAGS5WpXEJYpg87soU9PYVQJ5sN3rzTuqptkXh7KcuWZMepQv5dK56dHTaH4xnc",
  "key11": "2oeuSpTXFAUGH1QmGmXAgACdE3m6Gw2PqZ8a2ZmhWLJJJsTjFYvNNeUhSZWwbNWMGgrCbCHkDK76mnvXmTmHW71J",
  "key12": "2CFRGYvuEA2nFgF2z7hD8CzeME4PPkELfVoVnA4BXUy29aCZyD9ndVEBQjhhRxnyiLrNsXmsNsuH28K3Lor2K6Vu",
  "key13": "4XQN4Xh7sB8fC5sUUL4xawv4ab6ExRp6wX91ci24uCUnSwgLG4cZ1HXsoDovn5H9rBM8HaGFDKQ47eD3iUoUZQD",
  "key14": "28zFaTeS6pY7yb8Sd9FNshoD91EnU6MAfj4ecALHPisds71uGELhcWVtzJQ3JLrzrqxZpqujfp7ropFx2GqXdUL1",
  "key15": "5wXM2QKEt2QxtVWQNZd2BeswX86wGWi9dLz8UUscHYtS45o2RkVkNDVbi7yHcSwXqidau2dAERA67HKx4iDyVMCx",
  "key16": "4en2Qtk6nLPHoSMRYiv2x1ioJhAxoBTyZ7vHAPx3gnT6eymWhS7qsebtqHKy3itpyriQD6SnQcnj61wDV9YZ5wWL",
  "key17": "So1GnyAYnWntZLnq1n4wnTbd25iMyEzErntL4Hixpy96F9SYLceBTLcuontFpakGjWupcKxYCLmXXc2EjCGJwkU",
  "key18": "2cx2MihKqQEDvqMp6XshHVnFJiCUF9LRufjsVsdnM2fMuv2JUSF84MtEKVanykedDzHu7ZaBisfA3qxo7ti9hr63",
  "key19": "5rUewdvvKgayc94nyJma3HS5SweQMcCofNYvhPySEv4S1YBnCtfY43gT6r3Xm5MAuyHQpmG7AAgsjAXhhnVDKQF2",
  "key20": "3Z1Tv7ttZPQAejrm8EHAZHZkAkyBUQGugA9Ay3QQbHu6S1dLpGRsJSj1YX6JcZNxUVKnuD7YHeugjxwStsfe5LAc",
  "key21": "48BLr7K41VYHwEKiLgswGWYnpSLvTxUFJ1iKhaYX9sq2vAxxWVAajp3cq5h8SVfRqFBDNVUJuTfZ9Uha1xm7Dv6Z",
  "key22": "4LouozgTbC2dm3cw3DZGB3dRS5kXe1j9BruCVckm52UMjkFtQhyKVyepDdNsmZLZ3rQCkABSbHCDYFxNKgNJ9wS6",
  "key23": "4ALk1v9DjCHDQRDYVea2wxHTucEKPCM7CbiWTTEBQnw83PJpTaa3V3UyoovMCJfi5GZrgKvPcni48Jq1VrAeknYj",
  "key24": "5fajCijYG26ATBoWDtGBQncLykhTvwUviK27kb1sxmPYgNPjQYLnjUmTNKVNEM6XaHP5GNYBxJx5BpEYvfPL9Afh",
  "key25": "26jY9M6C4N8q5QDePXLE2ngdSFZpt44HHhR4tetSTxKhXNXfs8CD7wkk2DUwAL35SMh8TnyyzG7At9G6K3trSriy",
  "key26": "4FMxu8TzMTh8aGvNHqJYnJV46uEjambNHFs5Hs4kUHo8ivNHg3AQof1iTZBTPY5kXBmA7jPweKeQxzhxgVqAupEw",
  "key27": "4fJ3z8xP7Q4k12xDz2aJCdNT8K72k2KjZwTrQwp934RVqipKMuiVPvrqJxptw1y1yng5BdRNjc9MUCNBgnxk353E",
  "key28": "dcVVgEMyCFtxWy24LEsug192rbcTiXVwtt1fukdeN5LmDxcAK3GmZxKBmsceLTzRZYkkAt5WAuix9fWgT6dB84c",
  "key29": "57xiKsKCLKXe5wbCkqZay6m4PCt1ZPEqa115Rg1w55GDrop8Emnx7wf2eTTDe6VGE1WN7c3GiKdacrVXSjTrjsWM",
  "key30": "5kAPzRgA5M4YM8TgtNHcov4yMdmaKN3oLxRXB6eZQ6msfpmwakMWioVjC3cJbxtdsqD34uSeFwPqnRuJ8eVXGKzJ",
  "key31": "36EUyFU7Jg94RUimdBayiyBMVpppzYV2yBAAioVjC1JAdWsdMKy6jy28QeJrWGMRkWsUQpyF9dmH7VnJyCWx9vH",
  "key32": "2QC3BnuXrpphjGny2tFhGSiPstxEvMw6W3hEQJpVeEc9X1L75ZjoQa2AfEgs13eMty7aQX3uM5py85raWHgauwWC",
  "key33": "4KSWnnvaVMUatrGzxY4H7ANxd21tzz7KEFrHPXdk7C4uFSu9ULgLKnwiN9dKB4afWehonRvBFzgVNLKe7yAhrWc4",
  "key34": "4jZfzV9Pv86LawAoN8ua7Mey9tLTvB9qrnk8m86xNJx7R8T8X85UbPZVJK4aX2NcH5cagEC2eM4PQdBNeHudYfYM",
  "key35": "5PZBhhS8PdkqCmKQvmi4UdQPrYaUzX19DJYwFDSiQwQbSdTsQtVDVUmEJyDEuaU4rUkN9hr5gg8qXye2wCdukkhK",
  "key36": "BydbfobLCzn4yQnCsBx4zSVrn6q9J2WY9XR9xh9zsJdDeGJB4jW49aqffkG2NGL2mPPSHt5zcmX4HRPxobJHskc",
  "key37": "2a94tSHDhxmD1Ww1SWp4YTu3vW4p5A1RckQ9uPEf7DATBhFM9oYpibzPhZ6GLavwiGqCsXe1FRcNaCgR1TukxNdu",
  "key38": "mJ2nU7iBSkqAT8t8NL4YAQUEqSNovXywBYHiWF7cJUgXPYQXXN7iCsc6Z7CZsVHfrR334dAiztsrXuEbekGFtnZ",
  "key39": "5ipympdb8us81dYr8jTHt224eaHrTHdpKXi8DzGWrS2DU5xJDPvnDc1pJKGeinW7fm4etuvmn19XKWzDdRjKq72r",
  "key40": "21znpcAu4YCNerS5QMdmXsRRyJYrK8K6ZPwvzYJNKmwCuUR29SdKAnxDY2QKCzBKZoX5zszGrsp77eQh8kaFpJdW",
  "key41": "3h8MWLrexRrQQqD4opqVzapr4Xn4oMpsnHyzRjC8gig3HHdtLGhk3k74TNhxm7bfgbDAQLLnFACWQGrKbLs5df2h",
  "key42": "3G93SwAkZ1hCA6bp7qeQaECSZuKFyyoB3AHVhjBEnsgG3EWNCWAZkh2bFhZxcXEs1K9qvdvYy5HWpW75YitWL61s",
  "key43": "5cqAfVdyCfviQzppLyjqqZUn3dh9HcWkncJUnXV6XMr6xZZ1DwShvZVaYWza18zUXvPQzD2DEQ1vXcpp9bTn3wGe",
  "key44": "58feHrqR1yjxkJykwdnXq4gkpW9HFvLyBq636QbtbbUfJS5wV54c97ScZsLwQLkajZnVgVMHozEDCG9CDwUhHZBk",
  "key45": "4YdNeuQSX45jCwULPE9rWLDAV5KPdGhqtLMaTf79RM2WbvsDtiKqj1wm9xvM7ctooBwEparbhnfYG73cYddWrgfm",
  "key46": "4n8gbT6QcH5wLxhj8zBiaCpf55kTNpwFhknVpemoDMCtPDnkDiYaJs9G94yYnFpztBJNTpLKv3DegEEimParJE8Y",
  "key47": "obj7FU7mSs9zXWjnW8w25dHo1b55Kt4SVjnPsjbvSXqKqoDW7kc6QkFXQckmfkTL9zpVGZaNWJ6MJbYHmdyU4iJ",
  "key48": "2Yt5XHumwLKzYUbtBUEhPfg8jvySQPMT4fS8kKK328iGb7n5uSMkcCw3r4S2P5S3gPiReNTre3DPszG8nGGe4bhb",
  "key49": "BjnSypVhf2z4qDb11keyRLdSK79rPjoGFFSKqQgaSdQGYFbHjKvjmPnNMRJsnuHWDZvrjSWFQr28nmDVEMuJfJA"
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
