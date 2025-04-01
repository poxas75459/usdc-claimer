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
    "627gbQVfUsx3wj92rzz3Edq432dyE5V9TEg44oV3PiV9EzVHNg8qHmVuAwiLdBtmYaHihT35JVZxM5onRB4pLzbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rew38xXXyz5ckurovDYWsMG9DNoiLnkDy5gQbyx4Gy5X9soy5ycA4mePiabcsJqDCq2L9KjrZyMdorZx7rGVCF6",
  "key1": "2pLFTEcYG2dAd4HuJpjr9Lb7gk1w5hf7CqzJFM7e2VHVGCjXyo8qeDz4hdgpfTQBXKQN5hjccLu59Y4J54APPHPr",
  "key2": "5szg37drN55xA15BdoMgQjjkB9x5dkhrtV4uPf2ysE1ScABxqYpVSbs72XQEakmtquWrZMNCKfTDYxKpervXCcCZ",
  "key3": "2oFfQVbsYqauRBanDEg187BFQ2FJAszVMzwPCdutrJbxLMdyq4eXMGnseYgfaLiAG9WJ68wsAXHgpCFs2GCCsxFx",
  "key4": "3B3NwUcEHNV1vWNjXLEbKySWL6FLHkztSUQaPpBqHbdmG7tsDDDpH4mfotFtpX6TjA6JsESw3wiSKes1vm2LZDJn",
  "key5": "5kBXZE6fZQKVUee1nKyLjzLcPrNJrsxceEioZSpKu9aZxQ8AKX4C53stkRFokPQK3mT9XjbBQ6N6rAZa8c6ZeiKB",
  "key6": "5Eyr4w1nDa7sGeWhRo54mL3tcz2QrpWS5Ny5cosajcMX2jtK566MfcUDwpMckrTggcSqnRtLYzuMRJqFhALp9KSv",
  "key7": "2v4H8WkEJiEgc9mT4jTJrAK3sWmdbrSQQiEcZm7zfE4bHmGmkSTP14n4NZGoKzDkt7kxHiuq8deNMfGwLcGeeXBz",
  "key8": "5aLeLX1ipZQHjLKG3hPizaCf2JjFfXLsuaWUVgA1RNaiG3pn5hVrUXWtDGf2hwi93GLzHsohveVGPB6UduWz98N5",
  "key9": "VmuGMsm9KfZBRpFhS76NtRfFs7N8urqrEcgXVMYDm2xzi5Xy6CbqxBdGGfPGq3Fad6Rk4bc8ofEKqpueiw1K6wM",
  "key10": "4Kwvzds8XgHjNPhMTSaP5TdJPivHYhRkhEsp6pWxpCNgCXscSVVnHm4hz61TJpyGnqrdDTTtqwevofrZL1TbPyTG",
  "key11": "2uyHFFe78uhLFMTipjX6Wn6ihBX5CCmxg3zkxhWYaTKco4ciaSGvF8Ueq8eZKvLXQvFupET7FDnBUPKuZHn978Ga",
  "key12": "x8S2akV1gVnscLYxZBBk6Bw5gPGF6kiUDPRUqnHN2bm93kZv39vbK2rn1xp1vr3Wye1RS52CzRaiCp1PVxkMLWs",
  "key13": "4Y3P8j62pVzSqirCPfMGZxVSrK8tbM2ciRVpHiRTKJ3ka4kXgxH7dtucR2jyV3XnL5GKqCS996WJ4X5DiuUJdiGx",
  "key14": "3FAxiQzJu4pQ5m4Y2UC6Yog6rsCK9WHs8RvFeqquHUxUtGbJZPAxsETdMBLnJMHx7J5Rmm25PZs1sn5reajmKuT7",
  "key15": "4kgFQtfijWoaWWvxqruop82DMoxzS2hnBn5U1Ym2Ae55vVT45erS84Fzo5rYcWdGfyeF2JsopXSkK7wVhZ14674F",
  "key16": "3jqEt5sLgL9rKm58sGRzmWaBMwsi3BNW7HMrwbWKZRZKHSXaE9rmhJDgjt2vyhr2ufTiusTHLNz7FPo1fuXc2upY",
  "key17": "3LQkxxqxUpN5nGTRyj4rFNdiPvKign8rrCDPdtwZHtqNStQthcKuVs7K4zoXyggeU2jCB4UmeXsaz6GKr8s9Jis5",
  "key18": "4o5kR565W1UybcAnVuhBefna4FNeRYbfmZ6hEbzLBtfypqVjD8BBVNQGQstaxYCgHN8ufcsH6QKz3z5v6PA19L7u",
  "key19": "3Fj8ZdEb5kgmGzpShzeT87iP3Vjrqkod7ACKGeHuD2U6UsMSnocJjHvdckiNsrmyfSJmAaobqEAjTEXgYye9omQB",
  "key20": "42fKvs8T2VBWhsL14bM46gQA1mTqWHHZaBmp9um2DApTw8g1ZgqfHL2r9ypYWvjr4SvSNYdJjqw1XRpS8s5y1hW8",
  "key21": "5YdT6dYVY3bW5bDsRLDnZ7ftYvncvR2mAEMtnFYQDRtVDRc129ig9ec98TPZ5fArCagHsAx4QoAie6BBS8xmyCcK",
  "key22": "4HmcaDCFqy7U3diXWgop1DAqKjKs19mvXuCFptA39tyJXNpEKbC7v5kMATxCxPWPE6iY2W1XbRf4FnDbq3Sri944",
  "key23": "4J5pNjdsN45ZD7NEZWFkYNvaHnADesMZYjB6nj5iiNxi6ZT9UGfPNw6ew9ZVkBvbByYeoYSJU3GKiDWMEY1gQ3sW",
  "key24": "5u9U8cDGfFXNmnntK8M5cfKj4FN6trURL5VzAhcuTkFd5F4T1XCLUPJfrYN8VXHsAkh2eKA2osXFnTyo5JWpsBY",
  "key25": "63TiwWzD6QpYzdkDDBkg9tBmGjVHmBc5WXMGGQHdsf63BoFPGbz14piZQMHqeGG8PPpURSb3986Zk8r7GYJuGhKk",
  "key26": "5hkUMW8r5axnq5DUuLNGBdF6x65CF96Q9RzyVhMVXcs2A4HKkd6f6Crvme3rGgJMyimxP6U2j2LLS3dW22rTwJUu",
  "key27": "gfq3rBPHuSqYRqtkrTnfEqt8x5q3RaLPmfkS3JSBK1BnhQmz4YeLXJro62pQFVRGBrCWSvaDMdcPp91aWpEX5sd",
  "key28": "5byMr7htiG8xpMPkm32NQNu4XTaonCeSH8j5oQctn1eKy4Z9xuJb2fbXoeA6NHahB1zjuhJQfczRqWuf42agYvT9",
  "key29": "312jMhoYS71Wko2KARfVaPRSJ6CAKWijxkgFQccH8pv83nj37DCJvK15QaAnRYr3hAwRESo6VfgQryGD91qMswrg",
  "key30": "HEQ9oyLo4d92FgaZQ7Sc46eYj5Khi1KD7scvDppVoYuBMEBJy56dkuzQQu4XGXJnVJNdM8RvKYTTitEk3USibwi",
  "key31": "Jktk9Md81pkphivf7vUzUSGhd5DHF49dzTU67GCuZJv9tK27sBUdWeNK2oyTbr8Y2PYgVyxdm7rrptFgRM2aioz",
  "key32": "5BtS1JYkhnvUsv9pn8ZhNZ5GiTjJ1HzB5sXosofPK3AM1nKv2Fs9vRGR1hH3BrX3EUpKL4Q7LwMW3fUgCmwiVYLU",
  "key33": "3NbwzXtGjbYK8KwDauZMmQ2XUXh9utD2SoJjA4P3AvaZNNwktjSJjvYuke7jE5XYDgsoGpDkbfoBSbVPWZvsGG9d",
  "key34": "41A2QSYNvkAXG7SYtB5yn2Z1bn7K4147TGoejzAdt6EeneeEEJynzpWi47NcKbbM6bgQDZGAQZbsDcjLUwatSTES",
  "key35": "2PebaCwK8nSNx1hJ3asbhYKhfR1ALGuQYM9FWTivL3jfFea9HeseTuzxnGjPhCdZ7rFhg9cus9JQMQhrLhpjixSY"
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
