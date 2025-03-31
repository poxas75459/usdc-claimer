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
    "2jsDv8xC9TyTYYbeZeyo2LtYsNJELjePPNq1jxZrMEXtw8NKkfPde7m3wiVAosspxu3cxuuh8ALXkWmMB8Vi3HrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rXzigJaEoTsvBrKjzZ7qGV2r86XLwMAeJEQreism4QN99gzqdwEWxvh9MTRP2DMAwnv18TgyGkAqc8TV7t75H9o",
  "key1": "41vJC4t5cJvkz2Sne5QHRwjfed9KQbcgFLhsKc5EbGqGzzwCTN9vxqmeZZVAoYD5wv7ZwW4DNHXWZhq2r28652Gu",
  "key2": "2VJRTvBYrQEz7baBNNJdjZuikSBGUHWK7zwF4EbE5WaurnBCmVWBEMMY8G17kbYxWsSvy43ZmR7vurhGmxHb1dsY",
  "key3": "4wxK2XYHUwW9uZLyMpuqwECzqww2ceemjgn2WkPTbW6tYJkzhEKhtJTjKCJ86mmmnyXReP7Eg2u2mnSQ4HoUzz5X",
  "key4": "H6nGqZzLZqrz7Lb3Fh4zijBzGc39KGzJYBPen9z3DxETE1847WxepsHctWuVuLjUkjAVpy75h8nVarvGdr26MJV",
  "key5": "2KGzMbNzJQoCke9hVRLXQoTqUpSAz1KBD5fZNybubvitcqfiNnSpFCgCGjm5or4MYnvmp92t1cPQcf8wofCpvVUG",
  "key6": "27Yb6CWxuMPJpaRFNmT4bGAc6FjiuJdPYYRqu6LdkPEf5dfqiZggxcHKzFG1KCRQhuAErgJLCtDMr3rG3dFgD7dU",
  "key7": "3powWyhKqvziLzT1y1b8773odPyupFzZuRrAPnTGTJjse7mVbpJKf6Xt3a69yudRBaJhqWLqFQtCWcgYkQYqGGFM",
  "key8": "5NbQDXTGr8wK4Ff4JKY3AqoM95YNjAfNE9FBkbVvG4fbjG3tqd8nhn4pfxBbu7RUUbDAXj9iy78JuHxkKHm9o4cH",
  "key9": "5gY9tiJdknt5LVVEmBcJfg9pGmfXTZGN3CU2ojECN7cfprZJPfNHK4HQZNpBAYzJYivu2tdZN5THQH3hsFCJoq4Q",
  "key10": "2Y4mXFWk4rj4pJ39FqrDSbWUqaQuzzSff5sZNJqgoi57ScxT3vrP9d9inmeiffB1jY7Hjyrwx4feZ61cYe1BSnG7",
  "key11": "5dx74uWsSEvZ62HspeS9ERjdoMCY2iQKwvoS5XwznfR79baxy21Qn6ca32SZkmXMyEQB6RBZbrhqmbWhFPp5dyVi",
  "key12": "4DiZkMRD7WPPhF4v8g4T83vfhxkUAqwE6TBF7e8cuQv7jKbKSLMXBcDG8VC5kUya8tj8N2rfmxAvGh3g5mZ2B856",
  "key13": "47ndVbPSsZvsJ7C3ankeTefEmWcpoCa7fjD87U2vr4icXkkT7NcNRBFcigktioa9tyRyxBFyuX5iJfMtMbemYXCP",
  "key14": "54boFTxLJehUWPeXAA3xiC6reuNXdEc9ujMs75VhX5sKtYTPuH8jcEN9AVhHaszwcEe5gfvSTB1cFWRKn6jhMHnw",
  "key15": "CiJ37cfQVoL95BzHV7AqiHUgMszFHnKbVDdNvFR9Vj7S16tPGT488yZGtSdx6sFW5M1cdGAyUzoYL2dvUqzcJYW",
  "key16": "5oTFqm6frh1h4awviTY4vjvnV14bC59q5BaW2enZ3CnTM6QixE2nAb3a6PCujq2tJGhyr84GJMJXAbUTivwpvz99",
  "key17": "3TU7t4jJGZ8Q4ar149cotdBSVbFYkiozDYFGkysmopwd1Qxyv182X4SCwogtcPQspzAWxzdrEiE43F3NeGF9FRsi",
  "key18": "deeuumcxofEzTaa83xywXM7rxUJeHsKyBs4bF6xA13vNchMHBuLFPd5emBxhmVjbv4hBa6urokEaEVGMnqgqzfM",
  "key19": "4UmPY9h53NVtzzeKwy1nVJAtJPrqc76rKdH1pnzrGDjxDVKbTE62VkaQv1doeiUpEQBm8yUiM1AbyPz3AJWkDVtB",
  "key20": "4EqQTD4vbWRo29HVRWdAiwsMnobbkSmphwzsdscJzLr6giz7JDUrKk5yzrQW2YA9DqZqMomhyjuezNse1ksJddjA",
  "key21": "4pAd3WpKet7PDUAbduFSfycVQHXS9qxUWbMf26MpN3jeFi8yr7EfNDeAmgCWQKhURHZPgmkUBZcKfPHfNv9hK1bK",
  "key22": "4NCKaGiShmrTjSWNqhYS28yKbxSMTsmNuTPQz9Jcv2mcMoWrPNNkqyLRRjegrQAsMPHZCB3Ppwtw1gVJTsrZeGQH",
  "key23": "5yCfWVBVyM9X1KWagLgXRoWZLLor3cf9CTURXJYPkaq5pkXNSSgFPxH4UbTgheGKUidy7pRotH299BB1QKmanM4R",
  "key24": "5zeba7n8N6iHncRkejn9SmAX3iCdFsABYTwamRhmHKVYsyEHgtmibWpURqR8niqo1LgWpCgybNoFh23e53GbEkk4",
  "key25": "42pWGYp1fxB6YkjhCVoVvwZ5gB8ssHue5ZYYy48Wuksg9daRMyEEPzGLmAxyg9LBP5KiY6jvjc6JjVSC3gy2T1D8",
  "key26": "jwoV6xBBgc72aYWCBbge62v4ygkEzXWo532PdHEDF2tNmRsb1NVPNpHQwgUGBc1ngiLpP7qeLLZm1AtUsersvVN",
  "key27": "4RCYw6ge7FHjJyG6bkWoEbxPtcPAyuSzCzzzchsjmBBw7HmZRBjsv25yBvyfLJ3FaPHRwKjEQGfMYSFnkhuW2Btn",
  "key28": "3PVc4wCRmjPXDJAwyH4Ko4znvH3bJoi8WHdxEzYWo2UBQ73TLZ7scGrbHb4zgH99HVN6bF6qxz5qECpFtcjTWN8a",
  "key29": "2vJm6LRGGbxL2Ttngb5DmkTNVWJBsD8u2VhGroTykALAARtMcScpTvtqeBjhNwN2N3z9612QyVY5FU9Vid5SYXTg",
  "key30": "3f13Qu5BGLhYZpmZwcjb6ZaS1xbcmqwKXjVzcFzVZcCAWpKQaEm2QNpBqksXSP3YG1Pd4jkUjXYc6rcDYpxcTfr8",
  "key31": "2h1XRqHPQVA3aALrWN1sg18aPzcid4JMd5t76Cchcg5VCijpwef6S79qnZPrYWHwzq3d1e6SVbpGXyjhpg9s5o2v",
  "key32": "2AeX3N9ZSeP3UWBX54BVEPHe5rUGLv1ReggL65EWrPgeq3oiNut8gVeJpDWrt6tLHYxUkSpYB1dHbPvHznaqSxMC",
  "key33": "3EpPf3pimxQWzQFpJKAqgp91iwrfArMfc9mjzB9iibF9jfghfvvmWw1dcWcY6UA32x37uwzLAHixFotQjXSbNPq",
  "key34": "4LFpGS43Had8ismTBYVtND9GQ8M4DUdkuxkqLRofXPvm1wWqKioLW8Q2YUVATcWYU3oD4Zic553JAyCzXEUaTt1h",
  "key35": "3PiPEptH4CBFjafqJAf2zVqpSi6VozAEAGBHZUacK9SrGgrWLdCbiw74Gt7mDTQxVGSh5XDNvgik6PPiCNrL2jTu",
  "key36": "3XLMy7MbBSoQMDFgusvLphL47b6ER9316tcD1apyo4sgEAKUuGDYQYzB2xnfkzMgesLk1uCq23KVs1G96bZpWqjg",
  "key37": "4izYuMT3fXc2TgGC9HzFwkeMuVNEyB3T61mBc2G27GhxvvCo99nepMC5Svquke38USuqAyXZpApQpNA5x5w72BH7"
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
