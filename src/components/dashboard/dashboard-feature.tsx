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
    "3JNaxYXWx9LmEE5wHGxM4hkiaLUDZvAGeRUtzAe1HJzmbgNsZY3SYsaVSNjk87ZiXJjnVwWR7tcVJjzP3bLu4VvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DA1Yq3X2kVnrkWkgEuqUvrY5wGg74t2hLhrxsr2Q2ek4d2YkDQSMPqASUx6bwyEdMbs9eK9GRfRc3Pff9KsbDjy",
  "key1": "3so8tvLi5RNHJtLxeyNfv8WsVAtv6eMQaNdQXE5bDcQVu4rCV3bZdRnpLFW8kLUxR8Kcw27gcMuFnin5B7gB2Yqg",
  "key2": "4zaB4ZE3efcnRwL4D9xBpvkqdjDCHsmwLyuYpq7WJ4KmpyVsYeaXrp9bpdQRJ2YsfiTh2jtofWZgm2mcMQr34TiX",
  "key3": "4qN16piBc5TgnEab66TWL9SwMzpmPRbt5aqjyGV13XnN55nFG3LBxRhZvbVdHE7JT4jNDVJdzWrk9Y1uQjrzPjSA",
  "key4": "2iikvWrjtM4cofni7f88b6Y5xSJ9Pf8oqwkZ3CSwhHXWXDQTZ7VigdYbQVRosJXYhRgbUwV5CBYz55WkMxq4DcrG",
  "key5": "61skt9FgW9gGH5uSXBMTsyeExzovnMGAHP4ajyNERzLfmRBWp5QAwNxJDyH2qeWA8W8T8NZLL9ryaTPN4A16r4Hq",
  "key6": "4srUn88eZ9qPGcbstDsg5wTKhfosoVNPSqv15AYnCe1vx4ZvHrksptNqcMNgnnJdUXCEjQggLRztVL2zJRdDBJ16",
  "key7": "5SbRyMDedUQhEi6hP51hgvqAcd7GTs1fU8xngYFGYUvJJiZ519AwJHtziQ6DQUv2ks9LkjghHXfkYvyD3SYxyHrH",
  "key8": "5wf3r9E74ooPoYYWpUxCCpsZxyKeYLTRQwD7G5RZUaKiykv9LW5UtGMUZzqWh8tpKH8upizP2bHmY1BkRSfjCAhA",
  "key9": "3WrN9ydHVSPwXGjbsxQmmnqFL7hNgipNBzCQzcGzXMubaTruoea6YTdzkKZXpCUR8EeQ328uxaxt3TXdpunA1Y1Z",
  "key10": "4HcPFh6xqCkjYrEN6MMKeVh6pvaDwNVfYmRCxgCBn6XWVr7eDKpuVZXapPbcQvbpBEayea6wzqSuJaym6FZpC2H1",
  "key11": "2TmNuw7HFNVCg2ReBjKQU8L7ahjm1xErzYB2CE1w2V2epKmfNrL5bToJKah46aqXjPv6erge6E8tezizBQZPqxSK",
  "key12": "4ep3GDGkjZx8W15pqjbARCRPL4Dy99aKYB4fZB49kyxh4XE9UBUgVXfV7JpGLriapEBMFp547iS7yZ9jjXmJ1nS",
  "key13": "fg8seiz3i9bak5jCFWM9Dd1WcWAUsSPGYb21wcCRTh71orBcqKjySTXh3UZTqWKHgzufLwiafuqZzNXRyYNDRxi",
  "key14": "W82hUFZsW15Fr6wknsRvgQ113Nq6tQsG5eHgHZS4UBKCvT2hxzwoXy7ZdRn6or1mak4fYXYUzwoRNN3pFJFi197",
  "key15": "Du8byf4SeM7GYzcWDHKbVbTV9GEvC8nBK4NDyeMU78iRDAvwa8wYDuo3bQv99CabmfrQafx8eS84j5n4bCXBK7g",
  "key16": "4sZkXJ7K3NSXW7GzWy4TdnCCzXKgcG5RMbWNnWpiw3YcHwu6BpgGgNbDd1iEHkCdNSGA6dTL2yqLpmHFhvzYHzcG",
  "key17": "2fAyWy8m1aEoSubqYfJM8ZHGomVuikVwDxRM5sHvMwarYFoD2CvQNKzbkRMSRq2vHzw9AXZwRg9CGJR4xfzPnySd",
  "key18": "4qq4bGzE3ZGMoH3NyNhnHixGj3NT5EFA4yN38qGtaYo1tdurxPTaS9RzjypP69oxhew6sCocPyN8u2czwafyedHr",
  "key19": "2cuMxqu5beCzGTHcj2myRTNiKonRPw8JwUBqCYFXBEbXeSMrXN49PizGCTg6uQeDxJ7PoXYmrtPexnyXRhsq8wSZ",
  "key20": "4d9QCpF5Co2QsXAadfixZ9yMnZRKBqiT15VBr6YhZN39xDoTQiJ88GRjPZquEe4jyZxPRVvUvYBWTZuL9DPFaEBm",
  "key21": "2sGnJeUVuy6jwa27RJm2CjNDCRJxVdCdTkfxx3E1pmqRqpWXRCfRhiwPKocLucwvHByZgU519SSkT5xUCUKJsmnH",
  "key22": "UA52jZLNp2DvLPa4kE2Qw7sFyoyTweDThSTTUjN3f5bpVoUqem1kwME5WZxdcL7CW7yJygBCvB6zw5qZ4KBSMAf",
  "key23": "3YTj5PEazCAZ199jGzfcJ4EV1UDx1UWtcJHGsAw5cJ4hxDPaNKVwLLSYBBZFRguenBaYTsrZFTYQonxFkdTWCgCV",
  "key24": "5bonC4YYEUzwdKMvBxCC4r9B8k9S2SocTyL5vrSXdy9HDXpzfWCehX2eM2KdMphKV1UjZwcW47JrfoRzKPf2XNJJ",
  "key25": "4f46v1oZhZfBYxkMAYuBqwMFB3DbNb2smGcgdouv8NxMaM8Xp78hf8RGaXRhxbLf6BUvAp4LVwAdXTKwehnW4Nbv",
  "key26": "AaxenaLRLPFYMvA4UmQRFrAHwXeKMc9gYsjpNAEGLtKto53XhoM3SM1wURyRxHiBXHKRmvBBRtJkYdf8JsYMigj"
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
