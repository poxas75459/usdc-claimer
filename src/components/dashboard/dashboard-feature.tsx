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
    "nJ9dawzL8A6JnUGa4YkRQTJnwjUxQPsmpxNJae5qfG9sq2RJBMFEuabVTeJLF7RsvkpU4v26xUQnjZxFkPeRcHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tige1b9KGnxpGH5a9ds3DYUoN7g926S9vFvgtJh9q7nSQKwmNpm6wuLEUesHvhp4eAzzBaHonZEokK8S83VwbGe",
  "key1": "4MbFm9ci8MkrFksaxRtrrw4bPSV4EHMfUYUQTBSBd17U3pdWQfb3QUeHkx1xfuDSdp1BhEY1rwkpVb6XPhR8uphs",
  "key2": "2661jfxDRcjfy1cRv8dsWa8N7e6RsHwDi4msMWSY2msxKCnkXLPvmeYtAQr6NonMz3AEjpAoa6YpeT8TEucrVT9M",
  "key3": "2CH2eZBgy2bQm1wrciD3bEU9d11vC6eKyex5efSre2QvUafs6MomArscHHEmK3zoNEa7TFtcSMA3ttSgiFcia1fo",
  "key4": "WDr8D16wf99mCTNZBtVfobHxKKah7NzZjC9FgAsjHkL213srLxYHDM9rKusb4kRKtik4jup83HyxeYP5giWRHGY",
  "key5": "453RqHWmm5cPJzpFtZhwKEfkphNxCgPZnA8ejaNMd5AUE2FspeT4h4CotfW72xTp1qWKfWs5TgTjDmw5pbaJCuGT",
  "key6": "3ijEWN3TY5L9bEU1YnN3pXL7ozxm67xdG4Bfo6yPK2ZTU8WqWYXfBaspqDTNuhJpk97uUurKZTTvnoYpWbtX4E22",
  "key7": "SvqshVYAA5zkCwrQZWgiBfN8kGYzSPPeQcU5AH56scVjXViDpVGWekHNPeyLcfHHYKLQ5zsqNJ3FxG19RQBtm5m",
  "key8": "43GwKem9Z9xqz84tFpSYFN66s2K5dByVBjorV4kjyo4iU8BB8hQL5i9kCjhyWX9FQLN8EFaqSRT8BMme1n6yEDsy",
  "key9": "5NWucnqaJzgPpBNL9qreooouuAbVKnNqkpaWcSKdu91ZeCkCTMhZevFqWMRGWywfaBjPmQ5h6RifL4eQCFiG95Pp",
  "key10": "365WdPXoegiwQWq9xznBY94japHs1KeHz6yZ1LP9fMwzm3oZTwLJ1LUhHZPc2ymUbc8Jwgujy2oJJ69p7Pd8tM1t",
  "key11": "zNr53TAcUeNu4G5L1hSPsAga9YXpEXQ7c2vUrhoJmpUcziNddBkGd6sntTGCGgZscGkPfi5WV57r39TdtN62NJ4",
  "key12": "5PVvkfoeQjajusimhzWffnGsP9UnF3gDtwiwLUknNpZ5ZWdccMXB25GGaREehFzD2ovoWfyXRyJzWC8qiztJdW7Z",
  "key13": "ZpLQMfp9EoSci8F399t56ErnhPHV435DWmoKtK18WNaeeVvPSgq3My6WsCJLxXwxkF3zddKA2zSeJSMtKtmP2CY",
  "key14": "243xxGCCuwhG6wR247cSKCNXh3bjkHmYvQVysYpkHh957Lp71cvXbwKJaeBd24VeJTcipucE6uVnwaPEWC7hejHi",
  "key15": "4ABBY87hegW2rNjfzAsMDtEuk5XBhArFpkrB6ATEvZxeyAYqbZs6Kmjf2PZ4JUJAqPwp4og2zPwPfMVwjBLpK1gA",
  "key16": "nMaPdK2kSq5bEpJsKEzV4PsLiiNVSzjwQkjpu2PnbtPvCE7AqU2WCA6EoF26z84uEYxgn5bV24WEh9SBWb1oBcy",
  "key17": "5dCGFpGc3Co1CJ1BirpUXYKx2QuutAiPDuYZYnGzfXwWVKAsJYvS77FzahD1nD9KMUo4rEUY8qz2FBwdkdfq6SMe",
  "key18": "4y5KZzEA7pfz927CUr85gNGveMD5M8r6c6o3ct6ZGJDHQDbvgKwWTCqr4rmCrUaF51z6uuWXMxHUyYTwbkv2aLwd",
  "key19": "paCSfY9VNABv8s5yKeRV6aZqrUYgXniRSPcU1TD1VnHmXNFYC6yB6ZSuugkqSKL3puaDKMjBk6ukUCS8SkLydbQ",
  "key20": "58xPxxYWHGotJQcx4ac3UYhqRfW79AQgan2wX6K4VfudeCQ46CCwT5eEhWeXkXG9A8EKYLi5d5PJi9CTFh7mtMCe",
  "key21": "upJBD3jkRMfJ8Ni7a7QuDBwoBZSuuNEuSyroUgvnHmN6aJfQLKxhjx4FBkan1647w6MKL7azVQtcJpR9sCvWE7V",
  "key22": "4BYDbKn2xnBegUU3KTg1etMR7EEsWyJbDrmFGfTehsbHPEXvniAUkxFSdDhLt9VB56ARukLigDibZZHGcVxQvdGC",
  "key23": "2xyQurVj8b4xv5QyB9FcfkMec5U2DY3VMzbKCRYRmPT8wrkxiF371KRDdEb3fJocoMYmchA3LzWUZKMEX1Sq8o8T",
  "key24": "54oVfyubAa5YqvNBDcyBYgYVd76wcCts9U2V6iDEuDHLXMvKCoSUkhq2V2yuapEp32M1SJa6maEVayfGr9eHkY7y",
  "key25": "FAKqrXn2fc3YdFfKUvSg6osSYRWUqZAGVhe3jWZLJaqfzn7qCNkSAKdaFEvJgRBMiUYNhfxCUpxESJZaHgQQ19D",
  "key26": "2Tsx6SwVAyRpDUsvnU5zyouaGt31mNjSfLFoX2J9N3Uut1tVwAKLYSBwp91N4ZtNb7LSF5K8meBXxNFb8T7DysMR",
  "key27": "51iMcifDHmkB8fhACzs73hUPFHqcneWUKv2G7iGNUW8CDEGiTno7PdjxAFr6DMmcjhTfjE86st7xfbs6GDjesNJX",
  "key28": "5nEUob1HupsadH2gijTe1DuLJzcUJjMG7tWaq1ZKXBczrnjvMbjKytjzuJKPTEPMArcDaN4iQDFSkqx6p3AZMbXT",
  "key29": "4DHwXiNzyVG6utBD83tR2Bi2nC9hApHjd6wsfHTd7HNvzbqKgXKxaRDXivd3h9UExU2VtXYxPHwPKJ173oX4Rz7e",
  "key30": "dDVZmYgCeypRarMrdAdsaLnMjknRjTEH6o7UTu2NTNFg94QmX4FghnrZGEExuAr5DAwGYqSn2cueeqNyRNWYWgv",
  "key31": "3jPCDPTBim1tcEhakGjPY4h1Ndus9aNpBahpfsZXwC8yDXNse5ZSUjgXhTFXAbkcdExdycwbhVmGv9YgMHPEmyWd",
  "key32": "5MrpBrML1Y8RBaeNq5GqwGMjm3RW8Ff5gTXgSSMv4SMeA6tnRUQeyniiFfbMDJMcEF9wv4Hiiwk2D6S1kT2JMapz",
  "key33": "4m8a6x36n2qiNVDoxkUqh9Xzyteso8MgztaewmXLQPe4WBcaT5WQx8mtadsphSQ9FujbLYEnTSj1yTNKkUEJ8Hp2",
  "key34": "5Y3pYsjhh9jAHgAh7UC5imYEL7Vh7sF7XwxtmeWgnN3mddyXF5UTLkXbSffccntndhse58GyAUNLJ9eKb8C3xsW",
  "key35": "3g5AGu7PUs29e1kdhiyPNLnFeuBmMfmqwuECELLuBwFa6cCRya7uFzgNHfRTCwNPYSrgQbB1CooYXfmgwCurxcdV",
  "key36": "17CLeBBEKK8xtqp8csP5MHrxQtjrvs1rJTsjAWrhXKCSPqzZ2oU5zSoSDh71YHbkdVPWiLRzK8C5Qf83ckaTyRG",
  "key37": "56aASMW95TFcBHicav7tZipmM5sfjNfrXx2FvzbXdrNep5Cu7gMxLh2cbRpDNczdkrT7RvArJ5vFLrvTa921gQT8",
  "key38": "hQtqPX4aEyKyXhbaJNDccfFpdDQGR5jeFUGFkMu3WpXrYQF3NC5vkmAecNGkJRUhAFdxrYSkQ2nQ4Tc5AwTyMJ7",
  "key39": "3iVbbCy1f3CP6ogZx1TWg7jvQLuZujBaMfwRJYKPe9jzmmTUKWf6jZJS7GVeD663mFAdDPwEsZoXBoGJ5btWon1k",
  "key40": "xXwc1bawEBYdghxRC8aij1MgF8uYAnQ3nrvnFS32YALJqYZAJy7eHZJQddJiJgpjAGnQoUkchQi4mSaaULg8PYC"
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
