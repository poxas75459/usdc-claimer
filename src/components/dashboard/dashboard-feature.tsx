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
    "2RXjAR4geT5ZC717hbntAtJ6SWJPheBNd7BCYqMkwtjvABdUJWRaJFGJjvmYoLBDeHAnygQZJwF6hJcv3LoXULsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nUyU1jzK98o5ixsmd5dbheQfvMgQUBTsj82gm3pyhvspks9ZqpcPPsk9j4j4gdcvT7Prcd78yLLRrYf8mUpCWqT",
  "key1": "3nMZbyCQV4X9Vh587GsdK9zg9ByLisDb8F6JisXh4dvwZXTpZhfb6D3ojYMR9x7xH34SpBhCa6qVKceuhsdAW165",
  "key2": "3ZZkJm8z5Z9KiCqs6kJ6b54WrB2F4JTfGc4iTnGFZPdDUY1U7E7VsasT9YefNE4tCmDZPxgRua3jN6JMF67zvq9k",
  "key3": "3hPuAZpky8eSpRPQA8qLAeQ4GrywnAHzK8rUrQWTfRbaCp5tEBpLv9Gw8nJSgyx3Yno1bAagnR4G3eYAfr1c6AGk",
  "key4": "5xfGzWrRm9pwyZdJ3Ziw4hBDZyHw2RP3QcfrFqi8f9jWx61DVXimt6PdeDhZgQZdP1tTF6aYCcvyCD2XciQEyKaB",
  "key5": "vHT5bbsxpcJNFN5VyiT7sMgp3VmoGFjyWYjhojjxbHEC3dSz91GsJtU4w9c1if2LBAVSSHBUBU7DakYTM8wZyAh",
  "key6": "3X3xXTdGdqkRJPPDoq3f2ZDJBCbyfRuEqE7EvLgLm26FE91wXPvfMjgpaAZetPWocyRcpYYsKdjVHVLZZ7Kb9U6Z",
  "key7": "4HCrHnFf42srofEDGYgS4jBUCba6Wq16EgUTw8hgfSFM6E1Zpi4G299pyceHh7YQAXNsocsU1YhjzQFtjbretbks",
  "key8": "bMb9Cb7ZE9VW8pNW2dyiUZWff9N5xYCmgeqCt6ZbmUi4cGv6T4GUyfbScsSb6AsxmtQGciPJMJcsxojo53XVe9N",
  "key9": "33KxzcYkfTKUiymaoQjwtg9bDWVz64Ahh3k5dMGsh1U1PAuKHi87qKwXGXqk7Fwwir87p7koXZA8Dm5S2AzrKkSu",
  "key10": "3bXEBz9zAq1CLWpMqPWPznxbTSXH5Fh6AaoF2SQ84MvmiRKzNiQQ9FSZNqGQWzTwETYKaSebVGKC4b6eRDHE9CYm",
  "key11": "5RsEnGQrwpfCeaHTfErXqvLTBGB84ajQUhES3DyjsgziFzJK6cPKvZuAoBKUGak1gJMbPGYzrFdRGbYamZJEkoUo",
  "key12": "5s8gGShucDoZeNKLtJBrvA9q8ztqfUbxVHRzHdCxdjqzCPRHgSzvXurByq4ScTunrdeXwA7CmiLwKcjf8RhHTRVc",
  "key13": "VJi1W2fWZnHgmMf12BqVgjwG8pFm2KHPjjPnJxxSDoCfbnC37QAW4vne4enjfSFVJhDPZVAJBt8WifCeq6ikGWY",
  "key14": "LdUCeRYkSyry7iA7TuZGZc9SRuzyN7va1Gb6hjm8FMmezTX1MwiH44tCbPfZFZGQXVVCQDkSPuJDLsACjW91GWP",
  "key15": "5zrWNBSQ1sEnmxYB9YTFvXLRaAu5KyFRMYqjWDeJA3muDQ1cJ1DV3uLAFZb63AzJHZj1UqR1RNkDfgNiWW7KvBhf",
  "key16": "4QJLDUZgkRfzp4mmmLfY1oRwyNLU7qzRttxxbQu6wkwPuBTbXPadPjy6sAHARPCtrWg3B1X4V6wEfPKrxcWzTjD4",
  "key17": "cDZ5T91BpZbLYRD8saWMfuocHLBqUfA6mmWnt24sjpNiBFu3RTSrVKTt2kCaCsdEypSc9BGK13d3XG3Kkz4q6Rg",
  "key18": "4HqE3Q1h5E3QGpKcZhAwcatHZ9gChDHC9H55GZf9uovcQMkDEM8SQeKQ4Mu7Y923S8TgBBjpezHuJntSs3wt7swp",
  "key19": "3CJeeJQNt2uUxu96KcDtezySpLu7RQs4L7vKuQNpag3orEM2FvSDFwNTsWQ8FFKKrKfBQs8iAhWoynQWYhNR7AST",
  "key20": "2FAcqdA76eo8hXNFf3EmZMCdEGHCn9qiycLemxdcL7H1v5a8VYFxCJXpKLZU7QE4a6BMVFrsh1Fmqy4GacdHbkKq",
  "key21": "6153Mn4SiQD1BGq3L2H8URdX7xw9zmssrK4zRr7A8fBSV1JutpS16L8wGmcwm8KzzHx63QDdSDnipbfCquVvC1PR",
  "key22": "5NwudMgYNBfex61SRkM3G4nRxQKU7ZygYBtYHBM6qYg6yeiT6qb9keSGkaqugczqcgRXDT7Ztt2kJ3U4Gk9Qxpp",
  "key23": "5zW8jXvaEZyP3kkZNEoW2ofGs9X82xdJ5PbVcqVSYFaTRiSz3vefw43C6vpznu8zKfbeeamRTxYcZVwdCAqQa1d8",
  "key24": "phAt2qmCypsSzvt95BegbuyYXHq1afWXtxyJrmhKjiysSYMPBRCv12qhZHSZsVu2wHtfSZ7DF1svdMcV8ec8imQ",
  "key25": "5GtBzULrBTmdAhFpFYvHxBQ69T4ZPjyQj6zNUjidEgWMCTrE14iqPUhbJMaNbTHUHp1TbPXLDL6k3Jt18VTGAHnr",
  "key26": "2u9uvW5BHtFYpXZSHRmvM2s8TNu8DNQxWs4fCEeyYQXd1hBTmYwjWEdrjDMxrMd1AvtWCzrK48PKZvTvRfaqzNHm"
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
