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
    "2Tnrbba8zBAReHJGk8ACku1Nb921tV9z8mtgUZH3kfw7htjuvV4fwPCQZKKapvFtToKfbwE8yAS7deuS41rhuJmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KaMJaDsNc8wm9xqZJ6NEGWcXQBGp32NDw5UtKr72qvQwvykvxi5B9nGjProCb5FcUSC9sZZD1LCB7cAf2Vp5E2Z",
  "key1": "4cdkp3mctcjnPJVigr1FPArHW85FcnrnhtgfiRmXJVPfV7QZZ8pfX5x8wf6jz9NvNxZ4M4EFdyBmqjzNyz6xfPLZ",
  "key2": "3xRyGQdP6QA8XTwKWrmcvXHy2y1xd2mJ19yGmUZB3v7wMeSxfLWYVfAuSMovGTrLth7AeD9K3akkYfPPe3Copszs",
  "key3": "5UxPJDdS4KLK7n8Zd7eyUgTiKCnByGZusbqp7YWPiTThuu6StJ54mM6pPSzUxCBVPpPN9doVZMHCGmn4mh5BvXZb",
  "key4": "2VYETiFjSSeaAZiEznSwL6oScYqgaVUuRZx686MF5JwpvVJaKSJPg1mmn7wFsQNCfLEi7N865NaTvR48XNyhLtSa",
  "key5": "4qJNqvsRu4RMNEHWBEiBvmGP4WS7FeJDNVP4BT7swg3YehLrCk46h87YCpZUuAq6ChuERxifoJ1CXbevWffA9YLz",
  "key6": "3VyqLKkQcqscFeqnnDbdw48Ncnms4ifkQArLbbj2gzBMuroySbA5w8muJRdSV89F1B5thWTHJTXnjTv4VfDhkamK",
  "key7": "TJZfmmZjwXfd9gCbqB1jCXwsbNix33T2UJU2To8dm42yQYUo5pQVHCR1ciyztihRtGukdPbjWd1ubN5MQByoJSM",
  "key8": "63UvWBUP214vPQHbADWP3vXUNjqvyVA23RoMCRRWKV8dMcmJTCPUpPPHfhBMPkFwgYfCxrqHNEV5VXCatmaci8iT",
  "key9": "23W1ExxHodvpbMmM2DMxsZx9S6uESMmajnHsWm8tUkSkDwUoysNVN4nPi2F6g45Kp3ZYsKs36mXwKbJ4XZPdyFck",
  "key10": "3A4NNXRBDvpDHyqiepq1hdugRLBLRZKm6gYVSDiTQyGK5JWxDhtvhpdQGLxxC4XrUAsdecgk2agPRN2pEqiV9zTM",
  "key11": "bAPVHqCSm6VqmuNTy6c3XLabrPf5mx7WwDznuwoekWcVQWy8fnWK3sYzdS2fub1mdgQJm789wfZFGZw9a3QHcZa",
  "key12": "5SBWtmhw7BCJWmtyST5HujeF5SdUbqe9x9berZ7jup4hmG5QeTRcawWum417yFthZrYECbcU19efdqykw2yK2wyS",
  "key13": "2okYbjpntGoEEKhgHwA1KdmmJvY6wVTcHtYrWjLRKsWixYuzXfGL5KDhjiSwtXEXSumLTMkAczmYRssmMLpmqT48",
  "key14": "5ttkqdTcMpkNtuXWYt4zqbyWiuQCBubausztXhbYw23AMpnYSgvJ6DcWohrzzC4zHQZSBQ1krm58wupw8ZrwD4cH",
  "key15": "2jo5DxoskGtgNeW6tyWc1qFkFknGvmEVhc5ZKYqWh1DL6H5LS2QHke6A3qqaaaq3TCxqTkTyYMBr8NLVBBA6UTeb",
  "key16": "42dfADcEBdxp3PTVuJLW2bWxGW3pLTBJ1GG6zmVRcR2P2z2jRtmnKnW9igBg4RxkXTigvxjohGgdCVktFuQpPMQr",
  "key17": "gU7Lvqv3UdWFeNUezkAngoksL1VexrrhyLyAYwkGSnZnfrPSu5Ftbh7BH1tT3o1RnCnhxRvV4eszMashK66DFWy",
  "key18": "2RsZxWC1Q2G6Uu8fQSyPv61VR8vMESgtd4XAYevsvQViukiaTZcx9AocTVHtjWGxBDW4eyi6yKebAsAwzB4pxD6H",
  "key19": "7Y3KigKUHJqBFmHhEg83exnBAZp7DQtV2FCyc8hkVW6WTBYuEMiVfZwepdQtZKowB37jde1S45hs2bHkQPFmWFo",
  "key20": "u8WgYfBWxC9QR295j4AqSaFhUJseURiuosdDN6EFG1rCsAUkEpA2YFF5MDmpGMxzQpwYZL5Q93XLEdzym5FRViH",
  "key21": "jiYSkuPX3vUGDTAbmRjPzYxJqHJkhw1VzL61vTJim2QECygUgrpVRhM4VQQHc9Bsj7fKVa3K2wtQZx5wZZsuFoh",
  "key22": "577pj5LmtxJiDCQp13JsXkKV8te7vigR3wfaKkHcuUJGscbhFoBd8bjqUiRG65enxLPo11t1Gz6WmPfhXscttatX",
  "key23": "3aKQSskiWva1ThUxjHSeF3aag7T88GApqtyvpVbj2ZJYcUu9wwi7qnH5mBJbgFEfhFkHjMh6GMTACgV1SAXeXqAz",
  "key24": "2yn2njq9D3zWPBd1KByoFmn1QPf9dtwJmPyY4PDESBvkkGc7zKKXhPV8zDrow3YAAECUFMVgfr8nZFGBx9C3dHqv",
  "key25": "5EbNnNxwWTkfnCF8XhWBzQSb9P3udwpdkQZQZ38BQaWBYxgui3nmbQJXA4m3raPmYU1sCGHVbUWfgkmoUtRPsdnp",
  "key26": "JXVqdGMj2ZkuvTS9BAzXqkrCfytSoHxpGNFSXh619me6MMEztszgVkxU6xrN6F2XgNFWDacJZMZ28VWpV2C6SQi",
  "key27": "5UBzxbmhPCwkwF7By5z39i9MPKi4Urxg3o8Dteqf4kFxQohbD3yKpXj7Gto9bCCtSnRr2vVwWzMdUS1xcHtnBB6K",
  "key28": "uW2xZg2mVgjGwv3cshzfm5snQ7rjmFjjLEJ9rDL6s2TUBjS5Yds6y9PrPWWG1YHXkqbYNdmPnKQXhpNmwhfBmsn",
  "key29": "34tbnqrMbvyqcjBRE3K7M7QHtovnU8AzykBZ22tE3FiWcZ3ypnuEAQkaiR7SyeL65rcD1ss5sxJBr1ZyE4quJgUC",
  "key30": "418rGGDV1uJL2bcfKLatyvwKfzJ3AfEu7CTMVbTTo2HRdedXjFp6k8iNUqnasnUYY3LS6JXWm8hkB3Xaiy428iUC",
  "key31": "2ycvjJYZpnmX21T42Z7ZSAZjKHRvvtSVyUjTkaeVwP8PQjkyXuFfNfDnL6c2V7Z6U27i8p3Hft7jxFzVnmouQthn",
  "key32": "u8dB4h7ov9NxwqJvxtK5vr7pEhk6LLiCx9RLeM2QtURSNRf783jh1UD4R5ZwMV3qpTxk2ijV1PfxdFVmfNrv5Wr"
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
