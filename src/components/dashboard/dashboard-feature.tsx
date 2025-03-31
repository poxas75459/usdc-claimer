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
    "3oQhvEzHQj94BPjsYJk3gSa8HtUCsnJ5dEvW2NENHwrXg12HLsHzk39fdTzwchErUTu1UNvpnvwRnBXgxyE3iyEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iXgxi6iVYCipSea9CShMCdcjRCRBnAAKQuu2VJ8t8MdxvRHMv4CxyNqihHvjYWkWPgQt8kfKxTg8NNftqkXFKT2",
  "key1": "4LWzCkjfURSKCXxbetxGbvEQC5z8FYbLTMKUjEBeLLjECnS9mbjEooubdHAFV985LaPVBc3Rcx6LSMcqrQUsvGj2",
  "key2": "3HAb6wE9tv6gm5i4RpgdS5R5zBfbtHadKJJvsXYNeiEpnaVVLrKpDjQ3EXMQGqDT7GsCfiDWjBPP5NgjVkuSkH6b",
  "key3": "NW8DGMPHcbi91tpt5T6Exsa9LjN4fEuY9BmKVZpVqGtnwkEN2dnc7fVAKiryeMCKQxujEdUhSrk3rKvJe8GGmf2",
  "key4": "26pPrivcxjgGhQgrTEVVy7ufYxhxjAPswQ3vCEW73byzxoqhNEef3U6tKMu7km8mTj9dzugVJZWce8iQeVXZn1Jw",
  "key5": "3dNdGukvp2KPAmpdUHgTQHcMnjLk6TMZH9Gq6f7jq8LpCqYL9e1UxAk9Y3Zug6aQRfhWXinrpt6bD4CM4QgrtCdn",
  "key6": "3FKtKZcwLhfH7ZojXXcrtnqoYTHNY5dzU8v3cECmE5pKCwcU5rWDzUwh2gAAipLXZywZJ9ytKMn8Duh6Bnh4ZDPy",
  "key7": "3qkjWNNWfeJn5YA1PZLTM6zuXgif6uPtQXg9SAHGx2Y6ANmyC7hbcMVAKMB9CdsGLnmqQgASzX1uQy6JieY4Msqp",
  "key8": "2NxJmVyut3tMm81EtAx548j3V8j8vg21QEHstFg3R9wTboQevic3JMiaXupgJVHKchPX2FF59ev5mf6KkBwvhaxy",
  "key9": "3nrVfDSZHzuAPXdYnJz8CScQbYzygSYzKiMyMtUNgFt3FY2QQf4juS6YPCCCzyaUy8BXAo246UjXU6ZYCwTqd4Yt",
  "key10": "2JjeZxjAs1yTDCywbGM3TPupzGeesyVXVnfssQG6TFdQgDWLKhWBGJA5M99nT3oZyJ6zsz8K65CB2D8ZDjkpYZat",
  "key11": "22EVdj6CMQJVYsTEixuUVAv5F4gHSdpzYKmTiheuMmiuQAKUiCJUT266CXkk7RyqmNqRD2TpRpd5xRztArkqaDmT",
  "key12": "66VmcvMok8d99dmWJiBQ4UmdpGKFL5k3dwBrJscbAjbKfEjcsXYRUSa5cb187QC4MfsxDfCUys1TJMPDbWFJNpMA",
  "key13": "ct8Gnwyp5pYnCGPxDoJ4hu34wpKmywAoU4touypfsK2JT592FjvXXjPsQH5or4jrqagFDqoifv226maWNz6epN3",
  "key14": "bCmNu9tCo5g9fMmhKiSZj2TSEPYSquckWMxZNR7vMnUeKtusiRbWZ4zfUj1pg1f61nbvqw3dfS7RAQcr7KdtKKa",
  "key15": "5nGYaGFtq5Lo4uLymdX4qyDTJLk5LZ3ruJdtnze71sFZzNhoq1gGB4xrgCkNL67EsZXiQKpXHCke34H1rECP2PS9",
  "key16": "Qte94ifSSo1bkMp7Zcovb9ZJE4C1JepnqgNKuWkR2T3zgjQU2hfkeHibaLP6CXinu4avhrPKZXphq2w6hWNjSnA",
  "key17": "5XdDW1wRQBsEnehoanQCNWzGy3cukMff3qv8wCUCRPekzHLvWVTYBfNpap7vQofDimwsX87wipmoeHDwaEUmCNgK",
  "key18": "5n6v6p7518NJXDa52oV9KeURLmQped14UpyUGgJYGxC2DLFR4BojYDZbKuWdVBFmstoG5HEDYhArkjkZWwjAeT6J",
  "key19": "h4fss5CwUYRvgBfWL8hsKLc7Pq6NmX4wZPjpuq16HtDpsmt5V7DbrribALx9nEXq8drFkK8gK9o5MT4fM1ZXGnG",
  "key20": "59hJ2nVJNvkQVXtBcKTKvNJavy2ZW8mpuqiTerp46DCpzwvQeo7TBPe9zoExkSNuwzyvRZDWGsKWAfr2rZNhawFw",
  "key21": "4u7UjqWFTcDZ3qkTeGfNCaAeQJX8gnscVDR4btnMXV9jmsKG6mViNwoHen4UtpMutGFxBpCdgjSZd5ELMqURNrMg",
  "key22": "2VYrBmrFSXyaufVLvC1jDGnjfBxQwBURqXwtcrjacGMWiHD7KJxaDdvAowwvXmgjZu2MgcUzrWeok4qU729bu8Wy",
  "key23": "vA69tfcFNKRWwLFodfm1RzVTA7WhhUjcgn3WJAeVj9FHdSaXucPzAL5i1MWrNPDRfXEPvsu6BgCB7q2d8hqeNdG",
  "key24": "46JCDeRFzGW23ZvLSyR4jtiUrSMeGQ2XRNYddAqmz5XDKdVDpKkvhjgzZ7h6VB5FnHmST9JrYSV6cWYgYQRqrmiH",
  "key25": "3jcQn9r6BAFJFYfmNzwzrZXEXwMzMUe7e7YN25RjiqY7P4oaXd8sDh9Jdd3pBDNLSxjjeiydu3aegh8oCsXWvqdw",
  "key26": "pzdYz5qhREgcMPVCQgAZZs7z4AZqY1YXA2j1cKcyU5zHekNg97BdF2TSNFbjfpvvkiMXxAWDrTBwK6caMfZy1EJ",
  "key27": "38eCYAp8dx9R7HqtE2URvhUSJSWewbqZVkQNsELNPb3gCCsfgAZVZNCWKfLiUajpNTBQZWD1z6LJHPDgUuxUQted",
  "key28": "3CS4Hj9ZYSgMp9x1YBa8fNW1AXQmXx4puwygqP15VCP83wBgRsMkxxXmMxW6tw8DKMwKv8XpYPmP6ZCMyS1DQeKc",
  "key29": "4U8qfYM55KY6WLhf8bXp2By3yWf9SDaygeksSPA5qa9WyGsRTv5c1XmNykRowfBpqjVZ9yCYqvk7zF4y43rL6n3g",
  "key30": "mDnaqW4ZoBx3hRsNHicMhBFX8oLbuT6GkNHfxSt2jRnMgAcMSsZ9QeT5eQSfGNztyh6CfYoUzcsgWDNQ63ttLqz",
  "key31": "2Tc9iL7WYx1NSf3oT81cfxFBcQQEAfnRa8miNXCuVPHTkqXNKK71F9Ui18pCMvt8iJU6pu5anBjxx3eLVzw1Azqo",
  "key32": "3roQrRDZowGRDj3YHyqZ47DaLZTtaLp7u365se29mqy5pAqTwsiH19v8KPsf3SexY7ck6KtJtPQmyaz67YrLMSwT",
  "key33": "2bHCUdgNJ7wmmT68T1ofgqAauY95xqZcmugRBqNvSrCF6iTJfi5baQ4UKsEb3UL4A9WmiShHdsuN5BwHavk6QCNy",
  "key34": "5TkThfpQpoYZBqjLLe2pdbfHvqZ6aEqL5NDSwcyFAc5zdBdDWbWDezq2uEZbZvFEREc3DCFUGP8n5cghAidiTWJd",
  "key35": "39vaGY1ZPTGpLZtgkYehqHsoBfZiV5yGzarywei7gYRtxXVkzuevRrYARZGtHVB6Wdnoj5phsWznnDrE4Xta77AP",
  "key36": "46QPQk9UeAX4pW4gUPr5kHXwGs2kbiiR1vZZg2UEiMmmEDvtGvsK16ATsEhxCdz8EKrrsVkEA1uzbhrUyXPqGuHo",
  "key37": "fDPP6waUFbG5y8fnvzfdsn14XmnT1HCNirpLVoQf7KVhhZezvPFANcCyzYfo6Ga27CNzc62jm2covCgf8vdKQaZ",
  "key38": "5pm93JYvQxTBFrQ9CUCGZ55a3WdHDcypoJzEZeaqgUa3BFo6UX7kZC5qad1BELmMnLU3KSVdoiGfhE43CQZ3oMfe",
  "key39": "QKrkvc3zCybwwmZjmYAwRPZtUVcZK85MwpFzK2d1ACWZu41uNa7RH4ZM6XwjvTiNqoqqKmL9TfVHtLagP9vn5iV",
  "key40": "2f6a2P8DzCD4mCupVaDkU6WjERMVNw5Yqo4JqpQ3Df57qF2FrP8Nww25mv39Lyuc3tHEaKHCZvfddTrs9UFfDFd6",
  "key41": "2VGePo22LmZg81gxKeFS7CuSU6qGd354wUATErcaUkAuaMHyGWVpzizRECZ5KiHViqCUWjdykCvLikcwxyNaveUc",
  "key42": "65z88y3Abzw2h84ze5vsNgNooRNcxJs8PaosJkCN5uqy5tkbwJRCUHF5rWixYSLqXU21pkH4HxxS87iTPZsiZoE"
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
