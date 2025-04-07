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
    "o9HQG3LBnfzU1n62aGG7NCXQXfCZXupfnmzBwVqV5Lzo7GmN5HKkY23cBZjuxEcCuazZKRtqGGdNpZY3kEZHfSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5thMV5y6dzHV7Y1c4uGqTT5spKPsQJJciP2WgBerzWwkqApUetdaE4GEWqTTwLdkmv5HmHXGijWh4wRB4xzJmT6Y",
  "key1": "4g3QB6PvRdJFYhBFGjLTMf5ZGdHsm1E2rr6PV5TcwYcD8wYiSJ8TVUnusuTV8GjWg9w1VvctmnmyQfDxhwT5HsKV",
  "key2": "5dCfYTdHSRtYExZ9eFmfz7nFFHABnLzMiFaZ3f6xMpRp4L2LBnExKyDCDod9fo9kaixCHpzAzFJDYjB7pdmVjTNS",
  "key3": "5NZ1dXZriprgCrVe8yfEygUyCPEHiTzn8ERFY3vmoGyyo5U4dMY9YGbPG5c1ekTWVYB4XLBhQmyMH1mk8TQJjAHe",
  "key4": "5ezp8WKhtn3r6SaivZEMX9ttxrxhXcGBMmwTRk4zwTXGJxM6nF4UsNx836odnvB9ShUCm1QTiNNHrECMws2qs5Qo",
  "key5": "4SWU6v4UiryWWgK7rg8mnt741F86A62V8a6sjYJg5PcW9Z861VKJtZi24JLjLacRcQpYU3vKRQXVfnvoju6CzvVH",
  "key6": "2hkTwFfMBU7FccGTCk9sTBvsEhJhmxY1vtQTcqahbL3VxRDu7BTS5P3687duPcVjZwHenVpg8w2RXHtUeRkVxs76",
  "key7": "4wRCLMRtFgFMRVxiYQvthLbqMh9i3zQjszpCFcoUL9BtvW8QPMPwUGhrcS2XXCNiosE29tZKoEDBXQsU62qhJYt",
  "key8": "2TmzBMcZkzAUtJdybppEvP3nEVUUo3eKSU4Z4E6qKqbfQBxPUPzVsD1FAXArcUJbCLtxG5FVLqSK92Ut1V1BQ1TC",
  "key9": "3iaYBSjWt6NYSkPjnKUEGdMW4bN8JeE1GDgpoyTB77BrtLvwtsPA2oZqrQ1hKZomb1BsB9ZbbnsCCML84NCNtgVX",
  "key10": "CUWWKCxJ2TgjUxMwsHDeRSbhEDDVPJPezh5fCNjYCBd8Y8ZXixhMAW1kH9CJi7aTBK9XrX4DNQRtUExaUBcJVSp",
  "key11": "3Zj6nsGsXdJ7yu2oapTgdPU7heV9oGNMnLqD9zSaJPP1Wq5LXcVNzamejsfSthVw4gY1sB7hngYCNEaiSUEa2CB5",
  "key12": "2iZv8AerzaiB1CuHopGRUckmojDQoKtDoHgrKUPyWVtpZJkBg4kpP8NYUfpxkDgDbeAibZgFrH7NQxk4Q7G3g191",
  "key13": "4iG8JfLDPSs8c517QypqSNsJ4f3xcf3UdsNHsnVVpnNX2iit6Bu5Vr7rpRk52tFrvLs9wJNrwpYfd44Ge3a34qZe",
  "key14": "2vkdsyWn53QAJv19GtF9EUgryy27FgKCLxnPoYPMvGPRWTiky5J5BVLH6QAAXTBKZGD43Bg9EujEqQLSKtWjhF4g",
  "key15": "Pw2hgeuXU7EuUnA4NfUYYhXUJbB7n8KiLm4muxv7Awe6zwVEL2eZDmfVdicA613tLaj1DRYHtaUUHnY68kEnSsb",
  "key16": "32JwG1bgAJtbxwbvk7oomhYMMQoJGd57NoH3VgrAjwMj2EJsqinY3s4yDiPkLAX7xjvi72P3LnKvxgdqRMsc8vp4",
  "key17": "5Hntfh3C9tK6pS69m6Bdh8UAbaL4iabUikiwBURDaKdMaYgpEKjVFJ67LpJq51RTtGvWLTphKFMhBQuvpiYHABkp",
  "key18": "4GkoAqH5v7JNUP5x5xFDAgUTuDYpqm5kJda16WF4YAPLA2HDfwrSGz7RpPMLQmcdkQPmt7W83BVg6qVCDtxYjMqG",
  "key19": "2ef1nJPAwcNMgMepc9zgFrVB5rz7YVdSSncBhyDQiSM5yf7t1FcPri1p3BThZw8spfpQtrR6kw8zbcguubUR5Wm9",
  "key20": "3qvJo426J2w4urYRrbShWxqkd6wbuzQKDfxMEyi7vApqzmDvLbxL5S4MTrkbu7zqTPyTQ3QLEe3UvYkE7xeTTsd6",
  "key21": "5tk6ixsaVze4iBH3rT2Xes51Z7RoPekQ13g4CeEXYHHpgKqEzkJL5M9kd5Y7qz9MAZEDkVEhT3Db896MX75nsN5h",
  "key22": "5rfXjSE6XTKRKtCwQj1LLqWf4uiN4ejao3Fj7XsQo8KEAgfhqwL4v2bYNKhj8Nh6ef8g5cfAvSgFMUh3a5vgfiTF",
  "key23": "2jLXNCAymEQEdxG9btExysn7vt1Ra8ogBEX8opsGjALCrmiXC79RsPtmbzdi7Ks1HXVPRiXojUg97dRJPiuUspEj",
  "key24": "ECjPzyji8ocDn9VCwMtH8YHZDMfeTTAphDJPgbNEoMUcEbwSPNYG3cxw3JZEjqrxGJZ4nDTFZw1tBotXKSGkj1Y",
  "key25": "3nL8XKGiFXX5DLUa9wfSdXZyS55MqdhqJ7fiWo58ftTNo76fL2CxbV9iJqFq7wZfNY2NJnQTNz587eF8YseepmbL",
  "key26": "47sEPk25ELRiBjgdgA7remW8iB2Ytc6bWzYi3wbGVXqPCTWGHMD7qgg6FM8zdQoVorWmBxTKryQ9kbhLpdHHt376",
  "key27": "eHYxTLKam8Dram8wAQEz1hRw2WHj89zUaMCjoRSyGpYVEsgm6WPeegcE9QGP5emiRvhTfbN5hceJruy2TqTSDWL",
  "key28": "2dfbHwbQy2MbLdH6Z9hqiR2yzA2qztU4781i7Y4LwV9dkRKkWv22WZwGm6UKGUemg9EoSK35LryzZTctVPfneStE",
  "key29": "3qNvfXycSP4zynu5Xh1gFMCaAsvFaZJkEBXymg7gVAK4ftAH4CbkGXHMwbMS2tiNEX4ssEhVU6eibaXm8H6dDALu",
  "key30": "2cMbDB6iLComwFmSAw2sLNX23Ywcxknv52v7A8tM3w18vVhr7hioxLkjLzrJLQxx6gee5zmKyMrJKUKaDK5hjzw9",
  "key31": "3DDXNs54z6Jr5ywFPjVc3zr41jKQgYPSqX7ZMDiw1FRXEdzccmHc4wjC8JjmHcg67APsiTqR5YM1bQVBR4CBQpQq",
  "key32": "jchqfkfFyC485UzfgaKNVn5ZJR79ufsCV5ZQA5VHbbJzLQx81cnqsZbE7AgAsyBPRGoBmx12mpkz42nYWF7aBzm",
  "key33": "63JfVaxXhXM1X9YY2Nq3EUCqjmgczMZ38SJY4PDC3ozakSig8JnoE473VuNSpjhmC4ggRRrYiJkFv5z8NzpU6dwq",
  "key34": "8keRk2jbx7WuY3NyhZovGXJXdjvykcUUqLvRrieu22EtHFF6X7hAf3vVes6Hq1yaUiP3dwHYjrc9uwTqUvQTRni",
  "key35": "3mvJFRhMZsL8ao5i6296WNJKqsvacYx7PftZGqTdAB4cXNstUWzGrzV4GZZNBzSXjP9NsfaBSK22FGpE5APGBB9u",
  "key36": "5Ghau3TZ4wvzPrmZrBVQeasXkSHPwbV7KPgUDY5s3Su7smGmkoMpohNwKj7QrvMjW81CqMxKXwDwpgrgBDrS9sqF"
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
