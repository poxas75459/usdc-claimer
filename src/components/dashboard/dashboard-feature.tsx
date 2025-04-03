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
    "5D3VdnN7WxfM9aGdDxwjkQEqN4DdEvo3LrFmHTvdnBTr5sHWXGurEvKRpKdUP5xSQPBX9BvtYyP96CqjT1T7gTJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cyoiB7d5t59gjB51UhWPfVedGvRRdqAAwGRHB9KSsF9ePKcxsKEG1vBGj1qfyCWBCSfQXz7UCCv56JZq24ySCeB",
  "key1": "2AyfMvQi66rVW4EdpHvLCPgUWgX4ywKziyrjmXTy4EPUnbYXsfgQnaRkAUR9a6HeoWqXjdGE6N5Wh65i64USMpNH",
  "key2": "ohBwVAfWrHXGeQtbwjEsv7iKcivRRgbLgzZNpbGe8L4hdcbA48xWp6ZbPZge6qFpiguXrEqPLuFLEEXeEQWaVt7",
  "key3": "NFovYP9X9843vLuoDDFJXf4oyAq1aZJwu52fUN3raiyC6hHneQmJkRGxhaRFjMzVfpT3YtFzEZ6oReuA5ZFuPbg",
  "key4": "3LxSyqyF1qoK3WbUhBrAAxbAxiknQJ1SZqUZwjpuy4nfvHdyhKJjJHJTuMzTktwbv2uQxmcZjsdrzNKVB2RFYQTP",
  "key5": "5BUZpjYaMRQNeCzQDhjF5rVb2ghvqBpw7Uk9bCYf8PbmNHAY4dDE9AfZfHRKN63qHLkKREYXmkvzMKYHE4jXcTMz",
  "key6": "66yn3vBzLD3PYbZnnj3WycytGbnuctSmHnxDeTws94r99QkuGfpVR21RMAiXMXCrtkuWeYjPzvDqH41GdyH8pkAT",
  "key7": "FzoDcKpJSfL5w3YYo5U3XB3VV1HfpiJYFzwtcgQ5EiWQp68GqmEGE1VPf6V4A6zVmbRkVrkyygmXNN1yS79YAni",
  "key8": "3qXq6W6Yp94ssDU4AwemRwEeAZt9T9nQ32ccEfFwTEzzXWw8JS2QngPiF9kMwBfmVYCpJUJ6wAYLsBU2aChKFvdn",
  "key9": "4PD6xLjhv5GTehrW4ez3UNHs4vW94T7TY47hFc1TX2sbhxTT9S4Hep7QTtuvHJ6LijPZKhKu1zGHoetaeJV1CYrp",
  "key10": "5mS7QQH5Gts6eZ4Zh1HuYN3YwMTQYbdgoKo5QRjqH4AWYAPsaUoKgToj6FCyoJ3CCVAjfULHNonEWK2YomhrNMVj",
  "key11": "2fDNr3jmaaAdibyLT2fSpTWxoECX1swNgKoMwSvwVQYnokSghDK9VxqidyCk2hHSJRVzhzHUE7cJfhbg8QjTvMjr",
  "key12": "4kJFaSjsj8eRcfk7A7A987nBNePGk9wspD4JjyK8WhntAyvqVNmwERhAQekVXyzSq98m7GdcjujBYZbviwCP8MkD",
  "key13": "4ctuJcUiX4CjhcJSGKQAacF4RNe4YssMFPJgePreWdt8hZ4etV9zGFPQgYcXCnMUU9w1Dm7qCEXVWhVDobPRf31",
  "key14": "64kidjgU8vNLj7M9SamBniCjUg75PSPyVLjL1iMDhgySxYwQh38HKLHdQ6GjBkS1YUXzAZkXaA1Q6MbnEsf4pvA4",
  "key15": "3L6VgyXRNgucDFJZ2enF6JvdJTCAq6gTTTXGSobLgDL3aRY7aktQo8G1ASZdvb1gdxvfMDAyxm4whpdwR9988PWK",
  "key16": "4BYrVztuhGAmmt6De1JdyRMoMP3xy38q2FG8ovxCFSUPirQdHb26JAMN9VhTtnFfJey1aajbZCSh2TTE6vGNKq5U",
  "key17": "2tW5NX4QEXwKBqxhHTRjc6qJTDK5Q7ZdB9cJBC24cqwBJfXRik1RRT7wjERJQQgFPtHH4JKmQWU6LQMqAW4GzTCk",
  "key18": "3wuAh8kmw9d7ey6JNDjJsYJJK3Y9DFhGeyhxRuiXZEzQA3UajVu5ma7urpuuhWrhu8LoQJ8Pdy8Ggcr3YHZnS2Aw",
  "key19": "3etynneitHcknecBNN1FDtAS9yaYARRLDaa17TUdvRgLXNgksybmJpT9k4ek9jqaSeSjAeipqbBhBa6NMgrXQudZ",
  "key20": "3NVTpN4qNvrQ8yJmt6np7SaUiajQiDFLcKSrB4mrvMnUMugJ8BNKgqTTa4io6xgvoDnQH49iDRwPLdoaotbPM6A2",
  "key21": "425Dc5FpXysXRCGFDC2BWuPRzdvfcNCjcBcQyQz7CMFsQQ8xjYct7b15Ug9EAni2uAdFV1ntP2cKFyVRjgDyJxUh",
  "key22": "3PFhSE7r1i53AT4eooKXX4LjueMejQzUNMJDWZv2FyaVzBNASh51ANKUMKqhyDY3fSgezD68Q1TZYmXqSYQCr8vt",
  "key23": "59nBxWznC2Z5YnP2ShbdbBdQRCcfYqfrf9Q7bjFNJe9Qo58ErtQmPjpmfbZAgh5AzYFEPmnnWwa4DWEBgf7kt5Nh",
  "key24": "2nuX6SBAefMSh43zTy9nMrNHXzFJeK8zeCpHwNsU2Le5F15sN7QLEfRLqTK2PvB9UVAZ5hu2m6ayadLdECNKAc5q",
  "key25": "56zFSwLVg6S2uGuVisvv4JGBpnGQBWFMsaM7ma5oRhkEETrpHMiyCUfEBgsEZJxF6YbqbfPB3niNZEhvGmkfa4Jx",
  "key26": "q3u2gy5Zk4Zm2nYVp8WHmFUNuZvdLrscRHK8sVyFEUhwACxnQffx9wEvh26fasqz7h2ujWmX1oRMQZrVKp4kpFX",
  "key27": "5KiWVVkntWW9PSfj2mjM6vitBDM3UjhddZiaVMXXMqprwgBuy9jwc7W7CCsLGK8XfiTfXGG2VsnYzJXmUgmvWg3t",
  "key28": "af2og1dqxxm4RQb5LCTW7rMzQVVdJcLHXh8dVXFF5Py2hhhQarcEMizkfn78DKK7SbdfiH6Box2TKJtKxurRzxL",
  "key29": "nkZyKwjt6vzgPP5CwLpzkwERXZWrvvyfprXv8LCq8MnpuPvyZjrAptfDtSxiRVuMug9mohJWh7ZbL7dSyGxBaaN",
  "key30": "5ffZP38wzP3hAWZq7EWMk6GAb9bvSW363acLxw9oC3uRMcvBTvJ7gvP3y2JH7XD2R6paLnzKPnUY54TkJkkTmtpD",
  "key31": "4mpPQAUnEYErtMszbSkc7FN2RCM9U4YYzSF4r3V7i6eJXSFcTqMPhtzapdrTS3t2fcUdd4BCsTsERnRvMRzsAZ9j",
  "key32": "4efFCEdDpJ3FBx1Tks5WEQoaPs2Z94WhchvnsYQG5oEKLo8zCsFKL7npy6ZKHVNrFov1qtfQKZZjzqGS2JVYYvFy"
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
