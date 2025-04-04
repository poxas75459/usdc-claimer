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
    "4AKLAuS3PYUtRXJ4ENZGbP8tUBrp3ZqbR8oQaukpcnx8Xti4b9REJQdxisRmfGyUNsNyrXtqP2W7tbA1GZL1wvZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eH7Joe9XYf7Lae9MPZ8y9wvcmarSuMkuYDJXQ6gGmAWkdv7iqEam2t1Qw3xXRUewTJv4QVK8tfwgeCMziuNDY5Y",
  "key1": "2Y8RX2td4tsahYtab2jh3jWUsGBUw57H7Dtaha6r7DwPmKcdimUBqNfYJhuThbkVBLgv4JUKrMW7STXC3Gvm58CN",
  "key2": "x8VAZt5jgeGuzQ65qrdaFFJVuMqWxt4eccrCdoiydyedkLg9qtLb9v6Ms4txud1p3m9r5xcU5CjYYw4GyQttXto",
  "key3": "yekVzmJmXGKDx28cT1mEma3qVcmmBbScwJiahcq2FbCXzr2LKziC3J34B62rNwdA6CgVhyM8phF5UNMxXE7Ly5W",
  "key4": "65ePHVigYQPzWNGfYDGFzYvK5VRSo3nhqrg7kHggG3Krq2MRNGHHGVTqJUsLQrRKyaUcEPFvBy6GdxbjNE2Y1Q9C",
  "key5": "4gTTJu7TLpAJHVSEVzmm2BWWqwH1wf1QKz49wnzFUiNHnjXddtZzrdf5Wvs8TcLAw42DaRcaQYxebHZsLySwK6sy",
  "key6": "3Fu6wYJrShzcdojUbExAonoQZ9TSmEwt7G2CwDUczuzXBkC3sax7qYXcYCGmQ81FhpNWZjSS98X5urymdeARhK5y",
  "key7": "5Kt9EXSzgTfYxWoHwuWjz4hngABXJxvhKgsBGMiPEza7k5uiVYHCDzSHC5cM3kJAp4jCdsWFo1Vz4yu3qxveK9Wt",
  "key8": "3PmpVn6rPpPbNaDq4p1wbRxmFgnYZvKQhhu1hTjUPmS3CTiZdqoBcU5kEzPnYzuxUokH8qM31Q5PXLNr474fQyrb",
  "key9": "4gmDeKagj7TBKHKvGavQDAC7sXPYpWDF1rBD3YnJY9pqtMC4EvSM8wj1gjJNDBShDBwp62t5NVH8aqBVbtj2GEjF",
  "key10": "4WJyeq5T45PaeGLwFo62Z6xxykBvTgAqkMNGM8GVzQbL5CJ2hS2SMCK1ZCPWKFaHa7NFVTKunCuY4MyzQ7d8HLAS",
  "key11": "2n5gGoUdJj9guTHbPXPnRUUjUAi6nZXeNUJ8yjR7yFGcxkBVRkxGZfRSaZSHrfcvpMJSm5kS31E4T5LgnBAzLUc7",
  "key12": "oRVVXQXBk9qyFMZRDV6F8UrsSPETAvx63B7XsqrUAY3aMaZpfMEp3EXiQNMoM4Rjp6ocGFnd19rv1VREzWCxSsP",
  "key13": "2wcSuX8S4fEFWj5wHhrnp81LuVa1G3eZtzDyS3jiBJW9Zu257FdHugwTix77baBhyPvnamcS4e2oVCBVpzq2z3Ut",
  "key14": "2oBj1Uu5kciixddFXJdkJCPx5bL4DRQ5U9yBq3f4WhRsvjyThfHRbnT8ymYo6xaJVWXY5jUicom5BCSuWZji7AQM",
  "key15": "4YAsiWQbgH4JMXQQtp4QmMC2mJigrznssbWJ41bTkumyHsT38xUQRmamu46FdMMRKkdNhj5kTVxcQ3h5tmLfPeyM",
  "key16": "4xEAfH6x1hK5BVotLFtt6FYrig14LgaLLJernABhqrmn5BRz3mz1n98KdF1P3dgAE9nGyb7QcYcFeZoFymkezX4V",
  "key17": "4N989oVwQnhnJgMA21AVGrwTc3nUrPDSUNVWq9tV1rXocaeKJpvqWFynHMNUHymgGuqB5WpxJsbLj3WCBcLqH1sm",
  "key18": "4K7wRbHPGoi26LCni8RSyB3ybhjmME6pgRQpWvRJdPWm8WaS8jPzkj5iL9U1KyZEUMUdwESNuvDow3X5tiAThaVS",
  "key19": "2iqZXqsDGR9hSuZcPwVJ3Zg2eWE6q1ncGBHbJBmTxS9MuUaH5A9Shc1YKDWprQiTRdzH6EHRwcwGXaR2JrWKKYyh",
  "key20": "2ScV3PKDcWVSUczwztX8ESQdA2f1WbjbdiXaG686vgSLLqyZesMK5F74XExQRxRZXvr7Mg2qMP8WYEYqgP4wXEnH",
  "key21": "2Aqkqm7mQnLoQkCVyBV8fFNSVGnqKUDQtfMpfpLBDzSeggxHZHpThEqrZ5GQHfX4wAtGDL8a8CvYFZXuH9iGZtWG",
  "key22": "48cwU5nYGBFpiRaxtk9erdaS1YGCZTyJUPXp1cUDBbJk6fF5QKKideVXj1m9obMvzEnYqofDKcBpMwXjJStq5dt3",
  "key23": "4Va6MuvL2eUYHvjMBevPPGLf9P3G15rJcpRsY3oT3wzhc8hLzfGGUyo9vA4aRhGJHFBDj6ACLzLN6rFY8PKvHAd9",
  "key24": "5X1rKv9d3PQe6LihtAoWc3uE91oBT9W5yNG1ySd52GgsQTk4Aad57aCejTYwBHzQS15V7yAFHuNTmEVC6HrQjgRc",
  "key25": "5cK6LwtTMtVUh8WTN4RjCmtfdjxQZWU3yk872DfpcGq4tZ6q7P6ABUbFPXtNDQXf69qwvqLX6dFwdQ1VUSSEtQ2X",
  "key26": "8kbFoAbU17HTwLck6r8kdgJAJmhRS6SgBGLwKZ6YCnVakZ7ibUcmTA36ensf5tFneaLXemwgKBGv6Ru1SJyeq2R"
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
