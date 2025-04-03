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
    "4TM3KW8x7XUD8aTRAn1i2ftjFrv4GWcMJ4d2QDoiURTRRJFgmP2Kjwzi3MqXwaiJ4R6jvQjGQqRiWD2VdrLzvpsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1nKxbNmeNjH2LfcxEYCn3rzdHsmYW5ZrqELRqyQU2DTAt8BrH8TFVEvuH4mRx3gE2d2no4DmcnqfcFFFSkAyKy7",
  "key1": "22K6tmRVgN1zBxXnB3B3bvBJYTzeMhLEPXc1DmHT9BWu4S3uXe1LFd4HjQNVWVF41fi3s6WCbAaqMfDBknUT9tqf",
  "key2": "913mVbfg1bxfaZoRVKbevm16aRMVaQMo1NgB6yomPWbop238MBB4eCiWAbU9B8Su37wvUYUW3Ntd6hxhfZAhfti",
  "key3": "3LVrnngdhUmGKB7snYbRwBNX6pW7g8yrQ2LBKVBERJUvDgNAMDwcGiqwSLptZmTbesQm1Y8hgbXymGQjzRyppXxh",
  "key4": "KWrH7x5TMm3W8kDuoGw3CbGVDsLZFBVsfdHYJtLi6UfNj3GH6ZWy5nhr9Uv4ygFaYaatAJSFoux1X9QPv3TinkZ",
  "key5": "3JSxxiiK2mbzEWG6cJjg1ksFRf1jAktFyH2az494U7Tgj4RQ9AajLJ2BEMvjU2ppyzeCsKj8KygG2tVwZqg9Sq3F",
  "key6": "o13Qev4KDn3GQbEXrtnBmfVsbeazDy5r2re9gCdGw1k1g6McXYKmbsCE2rbBJowehMfCRBQgh79KVaeX4F6RZf4",
  "key7": "625Ep6MB7AmeE325w6b8W5dH1oR1fe3vWfWwGsEje2tBR7tPJdyj3poLrConmbtn8J4Vyq2exvYMKxjYdo2TRgzR",
  "key8": "TpiqgzNPM2VxrfwHrDm2V4sqdRQGgQkd7QxS51Xpu73124gHuKywiS5yY4AgPWu52CKJQmQj3c68znc2pnxcdZR",
  "key9": "3k5ePWuzDYZE7ox7mzVhg9P8fExZwkSrBb1GVfFVGXrYLCuMF3r76qijbM4rfKn6e1cTG455dky4UFWZXypexVmj",
  "key10": "41DfjBzqJ9zFDKXdytQj5w7NrXX39QbWZsLBwTJD6Q5gxqE2iAACphbNCttSBVp584M8MMe8QJ2NHBYRwZXX7XJo",
  "key11": "34cWPyQRWotDYqFgGTWfP4YQfeZBvUUkDZ77SYbrJU6sdMYyDitNX1HcNkZoYQVx2ccwajFUwA535635X5UznpPd",
  "key12": "yJzgGNoArVSd7R8p2yGePoK8NnwgwHw8Nnjc8Qza1vrMR3sHPbufPnuMNXTvkKhNkrCbX264LAaEJGxr3d7Z9wb",
  "key13": "2JqLARapqYuUsViPX3Et2LMjDqGwTuSCcBBwWqiw1GiRGuDHtQZKpb991ofmWVruzUMja7mqDvq3Wmzof7GV5yZb",
  "key14": "4w2mVB5xScgiJMqDiG8j7gb8xELCGD9LXhRGo412MugrjPYtyK8vNzNvjH8xZRd6LQFEnWh1uuzBuLKfHq6FhkEC",
  "key15": "5ZnC26o6d4a66hc9Wh41AdNxUgCvEkQf1RswoHyU92iyEYC9DsmbXUy3SMuqdgCUfg4JhyrxP7XNYGvx5fRYgMHt",
  "key16": "3nfSViZkjrCh4mn9Esqi93huJ8tieZAp5XpqWYFWPgMiPcdaqG96q8SpTboC1a7Hy628AwMZkPoEyALBSDvFdcGK",
  "key17": "51h9G7WWpG4L7VyptVQsuJThgouVKbn9RFZSuBnyjBLUoVB99rSyqqLncKQce4wc6paz2yCymYsRaVdD5r3yiPgt",
  "key18": "5GCVcKq2SaXh6qxuEA3YjSbC9NyRRtZbMUR49XKamcJmKTKabCEjHqVoBMR5ZVYaBGqcCRT9qXaKwADxU5eFye6Y",
  "key19": "2vrmC7q7pWiUr8RZLj66KEorpDU39bWVRurtJCax99AXxG8927cb7ZygUyCDhx5pLYZhYQJDJ25phoJMNms7YUED",
  "key20": "3UQgYaLgG6Mhtk2yqjfb8MzGZGwQENWKdJsT4NLEP5LCvDjUPNMy77t1xmzyHdBJTyCVE3z8xs9s9Q48NQEKPKd3",
  "key21": "BddHK42uNKaBrG7Lb9UiY8JbBupsdd6o5PC5wbvibM23NP1BLS5D2bUZjBcveN1YC8G1ocak6JPZD9m8vtnvPfX",
  "key22": "94hMY3fQsQnPZ4Cq3d6p3wxreUBxodrKsiKceQdQhtdt2h6pGJQxFLDp9WmDSJDS45fiQMhhmvJfwwUPYfMGE6U",
  "key23": "4sx8qoTcjYZLVsdRA7G3wwUsssEw5YbV25B9YUdnBf46kz8yNApCcXKGhTQcynvFCwredbMhbfwzHzX8PxUftwQk",
  "key24": "2UAFcqNNX22JTacYfAxRwa3SFeuSr3JanHDuyjBWa7Qm4gaM4f9ZbyfLG1VGhcNymEyfWPztSTjtCqRRqAVYr1RT",
  "key25": "2kzraQ8atyW6JybYpj92H46CHK8sVsJBar97T7Ni1C1LKC3ETFwiCzku7xXNCPaDu11n7Ae3iPnkEfQbvViLQVoT"
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
