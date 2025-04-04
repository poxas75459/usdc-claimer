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
    "hvPMrwCMagG4bmAkxu1bxFaiLYi12ss5apgVmKK1N1MnyZEG89s3S5X8P98pvepD8ySiHEB23Kk8uQ6sNfJBUyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Son9yvFXc2KF7jwEVDEjN2SzRjAaQQhr8LhTq8XZJMFxVFGMVuw1VwN38BnN9fXCRmeC9XmeQTJohwvxFLsUxEE",
  "key1": "57xPgVtAerxk78BszQceCsVnH5tnVHE6FvcxBX8KRBjc7sLNHAfSQy6d2fE4d4aVLfHL7BxYL3zkmKfR3Z9cx7ua",
  "key2": "3S3SYvx6BDvusxb3M7dbQnVQn57pdvnSfpnEvwjzWbgy8fofKyaBF1JseHzz2ftKXyi3i6AZrF6MAh4zNZS3WboS",
  "key3": "3mSxx3J9WtLZzeMVDzbkh8VgTzBe5vsmbZF5ZWLexuN49Wad9t4Skw5XxYcxrgfwKPU4DgvCfvKwnGZmSBPmgQcY",
  "key4": "wiBLBveFHrrAddycXzExCKZC15AbpZAP1inbm4ZtLAn6dJ3Kqu9DDW6b2qjgjbZe7qiEgWjsmbgP81TBzySRhQd",
  "key5": "31dfagYvk5Wb4e5rr3UKssDNru8vg7rDBG629VjHAdCQzFvAUphdtYMaQw5EMSsm1V21hqfhuKHiq5nAyEMQepi3",
  "key6": "2m99eYF44PP29c1xW7Ro8gsn3swpnMJzjruAbjjyaoAJkzNHqfUh9fNHopV19BnnjG844hCpLxHobzw9fTeVZf58",
  "key7": "4zoZ3Avw7rx8wz5qULvBZbYL7wfhzZveMrY4YrxxuA9HhFCpRS1fS1ZfJA1iXSwoABDrFUhazEEvaJ6tdUWsYG4i",
  "key8": "211MUwVccyRcxgCLoLFjxw5QiksRj8nJcGtJuyfqMggJdoRhPAZPwzU3hVB9HTLfTi3Mw57UVqJtXNHuDN5r9zFZ",
  "key9": "w1rdE5dW7JmzrhDors2vwusuErMHge6T93871Rfaq3rTfx1tL5hcbGufdiUVPWfZ3yp8dw3pyathWQRbaj21EQv",
  "key10": "5SU12Y4NmFXgWa9LYKh1knvtWJQ73xig3pEz6JYakkS6NCQyDci1mvK9z1rp85DWS7BSqoH7PXtYQoFS39jYcH9g",
  "key11": "spuznzm88yaLUT3AEK4REU35MLJHFZPdT9bzHkxKB2yEKnKqHeymcjXijfuvQKMg7KXK4cQn1AQxtZoCmxowmtS",
  "key12": "5jb4k2P5TU511kxy29EhJheWMmNLo8vbaaumcbqKZCTozBWggv8DweM3Rz9vkg2oiV2UJk8JGBdRWf6CKZ1XAYA2",
  "key13": "4jNSLwCZcm8A49ohfMUqkjF45NmNpjHcK3rWN9bB31kUSeViQjA7NCnvLsh2dCoz8JQWJjBwV6ycFCtBwFHsW8gK",
  "key14": "41KsYcS7gLwToNjcagN2wN4utazHtbqwdDjhBmTyGKTvbgVbMV1JvYEAPA4i7G5Lqfiptmc3JP6zHGKM3SywF7Te",
  "key15": "EB3bQ3Vb4dh68iEWaRYiywGeUGX1PLXSLXpa4STip93eW2Qs1M7yLFajYZaWBKDWd4876ATm8o9jGf2iVeANUi4",
  "key16": "2q36QZaws9mzcw4qFvPLhBXhWHvBTxYuFUWgJUPQT5dfDcjQkZLrBgiwnLkSGDJ4yaLaqjqWpKcedQtCZtobrp7",
  "key17": "2xodTSLkzYVCW6ad6kMQeLzZx1WeqAH6mDFx2MUDegAJDCDvsJscTFqb5kypRenvBXD9STp5i9wncwaUGjB32L9g",
  "key18": "5VB6mKbUZGXF96gt77JQoajPxDzqE3Podr5NdznjqMnMnVBKTnAb6893Bcw9bMMoj2TTGuMYSTLJz9L7t4pMrCUg",
  "key19": "52gXQQfFucadtDLKHKLowuoUfgzXWQF1yeyPjGL5vhKFcujSFP9RSRA6wDH8XNCodoEbvcs3MPrgasdZjHSzEEx2",
  "key20": "2jMddPMgDdCPEDR9GSreQCof5ffd97FnZDA6xeNdvNPzvDr88mSeoRS4txkSyxi31iB4j8jtwqf4wwU9ezeGYj6F",
  "key21": "3RhxZWKfkKaRRRpAvoC74ht2SFhmk9SF8jHXrMki6bLr8QhTLpjLNbkW2PUaTK5TQBT68hxcDY2AXJpibVW97BTT",
  "key22": "59JMfQdnKqAqHnidnAp8joNksVVU9KrPcyJarQNh3VfQtqWNcjAC9e3P5oUkQV1gF6bxtpPzAaWpQhjefFbNVBB",
  "key23": "UwhbCKp35UrM5Us5CDxYFye9vpHQBXq8kMvTTZJSAh7HtmjkZYpVSRT2g7czFHKw4Lj7A5k525iEbcweYPJP6Yk",
  "key24": "2MAGddFvYRUrNJZtW54rJu8BkGaatQuW2sotVziY3yTJgeqAqBsBFSjCwLQGKSAbpozvTW9ScoaCKdW5BQZBjD9z",
  "key25": "dhWQLyxqW8ApDZyeheqHWPqj497mmBjNduJc4JsMiiCP6YCC1aydGiZKoxAUKEHZQRk9QH28c74nsKriu5LePXr",
  "key26": "U33qJ9aRDfv8xv71hTPS9LrHPc6okYZ3MVi1jTRQZJRggmqKcqiUzLSCZ497rHUgXBxwsi9Lb3Rvhsnq8fbFc6k",
  "key27": "5gUgLYySXMMfydtVsVnKtjtVshnjQ2MjuF4r84SR5YXEYeX8nT7zMmGJjgsQm1ZyNkiJwvtC5BzZCzXiCWabf4gv",
  "key28": "26uoY1nsUai1MyHhQZbDHDdC85sMvk82XSN1ERM8yrKjtHXvULMwAC2by5fHmR3yuEYvBZhgoLcmUpKMd7FtmXtv"
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
