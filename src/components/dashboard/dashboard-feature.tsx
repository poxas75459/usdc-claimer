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
    "3Lfx1Yx7TfBA4TxDGQP6XiDZGWcSELPGpZTZCct24UnDXpjfg9xmjzdDDNcjyM3B1MR3YEgtsXSVwbSduXmxmamc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cT2B8qEDVqMN89RLYmKRwYXc4bSGhygEppHXzyjy1uGaEEc7CmXw5JUAGvvbLynciJzHbg3Z6tRjytcpdNHyeDg",
  "key1": "47jApjcM2jPP147GPF7xwnFNF6Qq7UsYYcTzodnStX1HNgbLHHhHEuKdnewa3jzVF3a3K9Ymeug5hESwYY7uP26i",
  "key2": "zZY3akvUQe6Vc8vp3GBdMaxBJV5ow9ddTYPanVwwnyN9SZnKHWWNnfHDxBhJi6rEgQLYqNMKhLiViVxwmN2iq7c",
  "key3": "zQHghpgCHSb3ejNM6tiMWE8aVepKuw1ujgu6h2NkA1mM3KagJUd2T6qkwJbC8gg1iWYSsb1uWWvLjBK3Uqjuiao",
  "key4": "5K9HTLEEgUaYYsWizin6qh5YrwYe8ELq6M3y51id2khALVuvArHYWh1KAFVRn8KXhE46V6prwu3Jtk8vSFoyt8jp",
  "key5": "4iKpsAM7hfVtf6i7c5cRHyGe294FX7UG6fBB3quyrotFYPWukobJU7ckEqPWrB2NQYtyp28EL3xat12J3kEsYZQb",
  "key6": "UPLGcGTaGThuRG88d4w9ocKaic6jParZnzbaYvA63ZJe6av8WganjAa5HxDEjs5epRvkoSBB7HE3j4kyrmVTUsZ",
  "key7": "qHi3S9rFfYR3WNEYBYmUFqzqYdCzaq3dwLfcjdMBoB5kYAj1VEZyHwt36fbxV9dNHrNYZTnsAJCJ6CNhE5diFyM",
  "key8": "3brK5LLJ9f5if1oBUaES59TUfBpREFC3wAMgeCKSTWfqM5fNXf6pQ5QpsY789EYiidZo7q6naJ2RKjXPtBCi4VMM",
  "key9": "5QTnz6DDvLqWmH7uAca8i1fK6f7jmnRdcp1qkoE1kfGjtBAeAhM25gBcHzr49fFwRBHVYTeEuVJqjD9VvdGSLyZa",
  "key10": "tbTYyLnAb1Xj1ZBufzVfzsqnJ6fDz9SkKMQFtQj5nEGTY6DRrgPTmoyJ8YBkUQzX6MjV8txFT9uEqCc61a3s3uM",
  "key11": "5r7rzeUeSMJU6Yt5t4upk5qi6JEgyyYEVaGZB1oqrHGYC5hJVxzvdgx9qzFQSRSo7U6mMsDAoz1VSxv725UjTHna",
  "key12": "5FEdSdqLTEfsLKEQ5e7rNaJiG1KhTCDgpxLVXB8ZvRjtyqLdzyeExBmF5mqvkZCtyJ3JmYCXrAh4yysGbRvUCEVc",
  "key13": "3ZpnviwUQBgpud6Mv67sFgMNCoBUzJ2h481Kq9g69szqEwEqefKBBMGsiaJuq8CWWq8zrAmKhqtnR9tQ7FGtmfjD",
  "key14": "Vhc8xrvA4utvyJ8j6g2Yq6sg2czgBEs1njZEZxYZL1cjMdSjQa3CZRshkmyPsjSKASWHQa1wB8sXq5ZYW4jD5Fy",
  "key15": "3WPfV6XzQwGpouiJwhPWsixXqWD3wx1TmGc2nKBYHXSPkct4aHT7ByNoHpBPDKmJbmAquxGHVoMwE5WUXwk5xGzk",
  "key16": "22vJXEw8oqxybCB16kdStucpJvsDCMMb3JBvy95rPomJnbY94YVYcEgt3rxatokNf1HnKo6nh5cFFcBPpWxwR3rZ",
  "key17": "2qSaFMhLPZYUakYHdV3WByQXV572UjSFUdbkJRop4jdhd9LnGntw1jBnN6gzjkKXinYCHbUrCTzLdwnNHmszV9XX",
  "key18": "3pCqmkHF3T7rRJabYQDBejryJnX6gsa8UnnXgf4msDgS4Vd6MHGEvHR4YmizAYv3KXb3MxNBg7KkGpxCxa1pimv9",
  "key19": "5qWakLPbp7mv8rKUQnvsnbjjmQhYkiWCuoUXVWbDzUzBGomZpawN1FJ5XViaSp8ySJ2FaYNjhGB8t65VWPXMsh9J",
  "key20": "5e4fiNcC3yX72ysvHXJYc4DLgCFDqhGfHDAhqugbZLC2zMFXUiD3h3qzLo2aaewpNVHRG4apz7DSfFAJqzQv9hQs",
  "key21": "3otyCs6iu5mLEwL98KwbTgxPv4th984ywyS28SfaBnPdG9dJU2ryNZYh68BwCrgLNNJP6gHTAzzLUvhPfyKruFkw",
  "key22": "4iDca86V9WxSgWg5VCGeHyyRS688F8GWAb3e3t1xuB8sdxGknPkxoh61ASMTozwSu4J8ZLoTDYz6gmLJeAvkD6o",
  "key23": "2in58RtTX7Ny3xjcWhR9GuzMjogjjazG6etcJ1qc8SJWuw3LF8pUeEQc3oZ2MiXncp2CEKUG8Y9mnkbgDwW2bRFj",
  "key24": "3xsrAT47YwkZoC5DQ1WMLAEgRVLkBQ7g1m1MqVp5nTSeqjV3VDvvrQBvC2NQVbBfrMz1pgMgsB4hBJDaeCg36dXj",
  "key25": "3MeZXC3qTM2DtiAt52ZBqMxS9DD9NPKFjmchECyJbqFvMxBn55WaYcVFXfLEr2u7tWCZPwSvNd4VEjRotihv3M7K"
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
