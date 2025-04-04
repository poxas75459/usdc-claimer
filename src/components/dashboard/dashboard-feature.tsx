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
    "4ZRDoKSQrRx8J1oRMv7p8E9an862c1mP9bbbqgaMSfeZL9RsN9mzjtAy4RNVFPN5eym1FdT2RNkidQNFRbcVSeTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tDE7YA9KnX3RAqWLFvqMSHoUDZYpJDrs2Lqa3PSNyZaSaa3toKQPPEMgdGCY1kiSKoJBYRn9WFAmdw8d2arpcnb",
  "key1": "3P9f2jAZM41T1HNGbgf623AeZbjYaMTErjDC6E1djaCHvzhrwnYCHWRC771fEfgkMjcQgHYWKJFpo6ujsuBC7TAZ",
  "key2": "5mGsCZWf8zEnFRh7hK4aH3HH5eRZcy4hPbpa7HkLTchG9KNLbPhcAW9ceEedh7TNcoo3PtMFG9caj9Qh7MUwLPQx",
  "key3": "4n8wp6hwNEE8N7rbMULBUbrtLAUGbN3PvdK7xCuSFDbZE3sb98vCGCLp5dBKsqcCrJzsmY5qQSCGBx4LnidmBLbd",
  "key4": "5mSVEVjCfzGNdvPhkQ6AZidHTHzvN4J4Wx9pvgBpN1zaMp4QrBoXSu6EUU5KEXnzM6TT3SzKf4MLm4TEFSfJjWug",
  "key5": "4JtPhMV43TqRCnXZJ2QnNis2TfgLCBZbEobwkKTXP2bwvHX3QUwn86vY9Cx3ozrN6VTkPmbRkE8oUVEWXWn7vtNv",
  "key6": "GKfQa9fEvH2vRNKginsS8syURkYydDpC6WJY9svNm3KNRGnekCaeKu63E7ij1Lm5SSHUnjLvvDHFBEmJLP3MwcK",
  "key7": "5TY6xDtDvNLuZVtGQYfadBHiWVRWHQhv57AivPBFX16P8H8xJuLiakLAEZLw2jydR8BumSfCJaCaGo6r3A3BTW5P",
  "key8": "3GCcKwJuDheoV129rUM5rNncJMdfHFZqCjb5XsDBnhHMXWDNJJ18r9b9h8x42wCmFiKNNKUGwGz2jbtMGjx27mfA",
  "key9": "P43JAWyfVT6zpqSstdBhwtuL6PgJQKGUbLXNxMB9FYM23hJ82nDAyPj465KtXk2VezBv4NaYBpcB3aJCUvXvusX",
  "key10": "2FPBqEoNFM8fsk1Wrsy6BBwzZUnhVETzV7HRHF1R9b1peGfP2LoqG9RJuP1onB4qEopqtRUKuDWmuKz9cKZ6EuAY",
  "key11": "43vyATYGjrQNA4ATXtLFijfJFXbr4fLhMQWUhVqausyBuFQVn3ySPCfHMnN5eftThQMA7mT3Z9QxacoSCH2dYcHr",
  "key12": "2VxNibufeq2hfJc9qB33mGR8oZSAnUbso8myooqazVLg3avm1aKZnrSoCzdJ1EB7QJsYoeq4AFFs5T4W6D9CEcem",
  "key13": "2oekEPpPE8FGs2wxvzpP5Eb7tiZzZGsneJYNPhrwJVCUMrqaQCAWi8udv9LUxF7z3gq4zKwEj65eYvjM6RgHHt1",
  "key14": "4dWrwbQonqrFTMicwEKPLRasAGpHYF9n1jzSc7Wj7fFMCfHsiMg8Rcb3QuKwfeJ3rjrX3UQCcFBuhP9cxcmJRQyU",
  "key15": "4hRSEEY8sdpRxmirYb68eCHxai2khxQxGYgQ1a9nkjUrRMV8eEKWF9hnvUfEY6regTFmottcPr7ncAFCLvbn7FrA",
  "key16": "3gy5wto6DTfqj7QXnCWFW25tEDmedWCfQDAn3WJnqRBd7NdsAgCgE5QR4TTXbXa8YvYwWk1vhWPKHtY6Eo15HzGN",
  "key17": "39zVHxLztTMvZcNQmS8nJxmsSJkkyWd9XRZMEVe5rKsWzcXAHhQYdWLmGBL6JkSHjpdnMVDTDetQU3by8aajwi8c",
  "key18": "7RWzw8XrTdfCwDpG2UjxwYkRJXiJmhkcZmoxmVhNQ2Q94xVvpnd5WMSC2aLNR8CNzqze2U5WYKBJ22QoxvHZ9uc",
  "key19": "3o8TKgtsnfEbAqS7UHsitwvgYNn3retrvjgtHB6JVcFRUinD9QuTX8bX58Zg3KX1JH397JAAbsJdZ3WPGnXzHjJh",
  "key20": "5UQHeKx8rJBy4weTUkUVpVXvYQxgfG7zaGMy34y6MYZt8by2fTqomcg8YDpbtdYyRGrDGsNdVg3sZwNXg3MN6axu",
  "key21": "7yTkZYRyLdfaFJzto7Deb7XoNdcMRFbXuaVQxww9tXqQzXhLoSsgz1KqfEWwzUY3YcCxvPdJqS2QeyUx5HVUE61",
  "key22": "5ddAzzVHWqcjbdR1u1p7CFAytVryZbmWLwoUC7LRDu6AFrfY5TGfVFwqwts3WjHhQkhmdwtC9tZth9BSQkXKYmDc",
  "key23": "kQ98BrjWxo1pX9gQahQUHYb5KsN1mQq5woRm7ABXUAfhmxgSGWctEjyFB7ErZ83UR7kAZLFoghgqptqpoR9EWij",
  "key24": "oXz6pCgW7FdrzkawXrx3vifk3SxErVjdEdpYs66SdVWqvYU9ooNZsUsfoiQtrTMpg39EMJXMLR2GRjwjrpgDA5h",
  "key25": "3ZPT9K9vTVNfwJbL9XD5wZcGqAVSkGhq6qcErJJCgJEXZeLHf7eFcgxLD863EpNjyrQVc7zhfcB41xzKBZiKRV5n",
  "key26": "EEMCxBEQgQ2PYB88jQr3JYRMbRVBL6xjp65LhUeqzGrEDzeSAptqah51k1pn5Rd5jDNje1WRUTvjdwXkhWyiFtT",
  "key27": "2oD3DXxoNMBoFS6F1L4S51eXcFrWaKs1a122KXaHan9EeMvkH4gjT5co6VSkPT3F7voQmvBZacUEtJF7wHS3jdaZ",
  "key28": "4C9zv1uSHtcC3TdTjUsxRcMREDP4ubGgKvYfjL4mBGqw56E5jCMsJ1SL7gjdyFt5fbooqopodJS8PQofvgh9qi7X",
  "key29": "XfyoiTz8YnTQbqTF5ASeLMYUGymAbhrPviUbafyCxLLKTwKUdqHJm7RNR9rKFbMhYbL49jGiTtZAtKbJAfHsDPn",
  "key30": "m1eG5Lpwtd7Cpdg1YFYgD8P9KtrMSx6MGu1soNx8e45kChY5UygtZsKzMAnDJjzaSAZpGfXsqce53wm9k8YrkkN"
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
