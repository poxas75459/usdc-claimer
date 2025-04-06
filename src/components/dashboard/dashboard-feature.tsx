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
    "LjoMSTP63MvnLKvmkWGTc4My9UQtbMCpoCZE2gzMfqQFdZJSdDB996Ha3M1aW9Vugm7NwCBrrLcZ4NdfwdYfTvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GF9ZzLBjTnXbXmudPpbN6M7VYou8VhK7nNN9sP3eriUg3SgrGbRFid1kyyWrLMeYKGdR2PC1VTFnhskkVVtffhR",
  "key1": "5eXztK2Nxp2YeRnSFvbnBzQf9KeRvPpoTVSn7VUuGmVxiHYdgfs6r59Zfx2ZK5cedkTjacnT6bXEYJzffnNoeMR5",
  "key2": "4knmXhWoDFS46yDEaKxK5qxbrFu5P56XkAHQWW3JJ8V6hnkh5TFTzAP4duivdzQ4SR4wPkkGY2v8y6nBpm8WZTKt",
  "key3": "35RaCRTSK4sranLs4KYEwJ77bBZbmx6QV3kanEutVP5PL1P4E6LdSjkZFPYpvW2PYyUfrjtDSjprTTqE4iRuSQE8",
  "key4": "5hDzc6vLgbds43pTY35uMmYsKGSnsddqza9gRMt89FZjZ9ju68bc7rAcdWjXgJSPuczSepmUAP4Wmpg3PLF6rFzV",
  "key5": "4TBuec1wrsqQTYF9fmaMWCoXdksRvgXyeTPd3HWhsEZTL2tqrVQQFZBoh1x73PNo6n9FzT88wwuh3e78pAGzVhpY",
  "key6": "2rzqTQBvhPVHyoL4X9g6Bddmd2rXBkSK4sMiBTKWwbLeg1mk14XSFnH2iDcVwMYMz2KVc4BMUwXfZTtCU1kBenQq",
  "key7": "2xf4yt75YuSCZxAka2Zh6WR54Nw3w4vTMye8Sh5QnJWm1JeptshFV3SL3htfiJfHom5AVuK8NZgSTdNnmpELt2Fy",
  "key8": "5EC4MhtyYgbfQh8hb6YhLeuUuLu3UdWP73Fyf2o6UeZPCUiqVb5Ljnon3ZBNykZVVWzYby5HVpq2UM8npQgC2P2D",
  "key9": "4unjkmLv9nrEw3vyvZxPR4AfK43in5zHGG5YHSWapbdFoXBqBTPQxLMJqB5rQdorozXiyc6KUoiUz7NAZUD1v1NK",
  "key10": "3o2rxzdo7TMp4eqLMrzTT5HDXSqF2hRaxGFovyhimgpW9Gv9qdKSgpWogmD5qdmk2vXpYpyoGCVcJ9d2yrjiPt3m",
  "key11": "5zcxrAhvXsZbgcX2JnFVdi2Pz94jRcHCbsTJrREZWYhrsvFtT7iLWHxifcYJPsrR2zJxoXTqvDmeAadPURDd8RhW",
  "key12": "61jMorvznUY6XiDHmyuudnqdup5gbfHGffEvSQwYRVpqwoCajETNcFWmts6EMWgn3VLxhgkpSLSrfAuoytSTvZA1",
  "key13": "67FkRDhnUnDnVTayDrDgft2GqaaBeD7xDpMLTqtvFR9dbDRCySCuG21mMZs6QAExGzoqDnmyrhVWZtMpYKxanQCw",
  "key14": "27eyD2teP1esHAmPa6shKAnRFj7bZL86jiN8dWJLxGpnmfWSCSbmH23QcNddBWRtX7u57xkWNPRreqYufRDvVZrN",
  "key15": "4GkTC69g3SvLfJ1fzGc3C3eQ7h7Wrv1RNY3B9mo3Wka2FFVWYX1jW7pDq44wXJvn1TrCVV3v9CjRqbFHeWXSSF8k",
  "key16": "2WHthdNBTmuQEo13x8rJijC2NY9Cy9h2VXy8hJRLDQmYvmVMw6ipDi6tGKju9wdFtHvabdsZdEht6rfGMsjKf4df",
  "key17": "3nYUT7ML38UVWXNXtWfEX9vRAWpeZfWBE5UmPwBC1B4XZD1hnGTpKzmnkfDXuQ2mEWPdE3531dP243gbY2iAaJvH",
  "key18": "2ngcHjhS4zMoa1cEAhR5Lsub7HR814iqYiAFuXL5khB1Wrv7bbunRNVzqcBpVswDq3CDV5mFAS6xaWYYa9BAGDSg",
  "key19": "4gCk9zomkLq6ZZb9psqmPpou9nCtUSinGKGDwhzSM3o8xJjShExkH7zM7Eka8Xm3qUy84xVisARtxApJESi3tFjW",
  "key20": "3VPamgACEpzscYQUA4XYmxnJ9RuDTPthFUXnaHxybw7GVjfWfji5fbDGfDzZct6eiKUGoNSyeUeKtaFTonkJwJox",
  "key21": "5CDxgjeXCYHvaKrAxQ14tNbcfJpShj2WPdHFuUEuKiFwKJVFqu6XMSz4PdaBeFpprFWShVVsUhKoV7Yywdh4mce6",
  "key22": "3G2gphXcPYk5j5kgvfaEVFDmzqHYxLEQtTH3N4KoPwqKuJHF2jf9QRBDWH9xm7i5VswBWjnvSxSViojuwBsBeH9Q",
  "key23": "5gAiChShYX5eWhJmBoAxuYgiD5BbFY5cARW7nVLN37YPZUsYWn4uQ2pMz58X3zdDtMNoBkomMYNG8PNv7KeuNqdw",
  "key24": "3ahb9xXydYychvFGA8ScazxdiEo8ctApCpvX9BYWi8ApGF7ohmK35GLuom59bT6LgMto5AmveyUzaB5zDQoV8r6B",
  "key25": "KtZixoqgHwntMQt6Kxu5KZjbnMPNRrxaQykUVnuEuB17PbJ5SJczs9unTwU7BsSiGHNRCXpn445DQHFedjtY5cK"
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
