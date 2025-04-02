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
    "cJxnn3kaLAUYMLnQhQ43gtD5eEwKr8fcnVFDbznNzxgXMNDaG2Z9JAL8gGgAjrgZRmbC63u1Rhxp6kn5bR8fsEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NcDpJnKkaUXLLuq6m9iLYMRfTyWtXEoK95E38nM8EgcePkGfFdMnGVcEjBMnPG9tQMGj6gNDWqP5ZrKax4tyXuu",
  "key1": "5QZfFVSL5NXakk8XikSK1QctGvBhn52eU7D3baqUR2VSVHcLfK89ryKC4KHdyj6XE8s9LmKHQjotvTe5sFzCSsYp",
  "key2": "3zgUMFMdSNbeKw7aAuhbCiTjk7ZHu4U3PVqrkDPq9wPBwrQkWYo7zgVmhZrMPooEYRd2h7N49SSwSHDBR6Kaa8UB",
  "key3": "4mUPhiSmepHz9uKvENN5374MhCw4gvJaGEL2QMWmnkHiBrEpp4DQevBi1zWfBfkdKJ2yQpd89T1u2DXr7GXqw91L",
  "key4": "26Z5C3zq4kBj6iprKHVvDFD88dRwhgrnfRzxrsuBFaEfhU4AZ2D5S3mNCjFA3AVBukpMx7X6ceBhhCNGp88f5dCW",
  "key5": "4DjWqJPKvP2ddtJK8z5B98pAkTfsYcP8u9x5YKhzUix7zQ8DxauyD4iSzhV7mSZEBgYBW3kALayFGhoy19T4Hi7S",
  "key6": "ViXhAri3dFxhYASbLE6jsSP66ap5aX2vFgNc6S49GQigHwrihSAjAKjpJmyuuKB1QEhgFNHGKqQfMcxdaPbrniM",
  "key7": "679s5Wn3PudhSjBTiJGFmpdv6Zfqi7iFshosXXWzn68ihDLNp3fL2SucuAdskuBpcDZCitYigv857BVqzTJwdgR3",
  "key8": "5NnNj43nMLrSK4sC3fYBW7Sjqx4axRnYx5WzqaEsTto2vzoi13sFjNwMgTSG8a7BpMc2y6sJRMRGhYmZTDUu6jNw",
  "key9": "58fbs7VCPj1r9sJM2mPZ8czQw4SmJyFtPsxFet7nxSjNY6uoZ2rEpcqGm8HLgU1fc2rJiR2mtxJwA4KXZbENrvmM",
  "key10": "nPwQndHU4DJ78NKMmVaE5VW2dmT7vkwJskLh7F2uVtaGrQpfGhpTKk2L9mY4VYpLaYNhP4oGEaMrpPX4MKzSWwc",
  "key11": "4FJY6ji8vrZPKTKaLhabxtYwyEeZfvxShjG1iNi11xG7E9NwQTR5fvNhhG9KY6kWb5Jc6fy5R36mhnm2ZhbGs1fc",
  "key12": "5t8crHYaWEigeJLqK49PmmPHyG5XAX5LUDgK2fgBJy9V7bGnd2RjtpbpW53wVA2QZjtVjMWdeXKDuN2RQ4UyroAA",
  "key13": "3Z9gfCNdK8BhsQpx6dg5XxvebFKZpfytYciNJH7XoyHua9YuU7e5TCCmjgyrjGeTFgCq3QuMt3DGi94D1jDSWDX8",
  "key14": "WMJZQe65B9EWqpy15iEwL4VhRFsYYBs8ikJNnKhdX7BA3Gw8RfdjQR2ND7fd7skSUyu8bygBaKCbt8YWRuGyARJ",
  "key15": "4cEFpaH6jX9WmxmHdJ7oiFC1f7UbZpHRmwSDnWUXcfG18UXU6BJ5kTSuqGFQfNbDxkuVATcA4BxBmYX95Mqg3WEB",
  "key16": "2Fj2vE8xHkiS86LpU6pfLUq5BcDttffvsBM878f24wFtBTXqDb4pmpAQhwtbzs3Vuo6FXg9YCif4KZod8V8rzRRd",
  "key17": "KWektuhssb8HGkVrDaCkdByBebtFVjHSG8iUofQXtAY3Eb7LymkhzLJJ5BD4gYiCeAnAU3GzUDHgfcXwVYNVcRM",
  "key18": "44193gttVbsQYCqe2rRdsomsqP6cVqkWA3fUfj858he5DXq3mquCBBamD43wVU33PfmkYyJtBk1WabYzFQj224H1",
  "key19": "2RYNZc7DiHwhMPHpeC5JCSgvnSYpcaLSk5XHmRTdQbbkWvtNoKLxJ4T3p2P8PAigZzoYm76pTmCyHe3qbSimb1bv",
  "key20": "L6dVK8ZjGtQxdHymN3kd9WzohKdNx2iqhz5SHt4agZbxKu3p2HvKbTsqmDL63tmLBxBYrvM7aCfS1Rh9mZHkDKe",
  "key21": "4DsLPzudPNureCDxVfo95XxjG3wdJJQ2t1gz5JU8zd9dSsfM4fh3EJmQNjgtCjqas4dAzra3S8yTXtq1CC5mjSde",
  "key22": "szQH9iyxKCsr9E8CJwjVSJXnbqDzQtYQ9WWuv3A8KcNYnmLXq71ETFFR8kpFGZM7tiC6Cyv8VJ2KVJrc8XhcLoU",
  "key23": "4xK1pnDuDt6bfyWWdpTcYeGpUhuJgETYeYUk6fvJJWDfbjr6jiJtZuKNyh8bSmrVv9Kz2gAurEJ6VcfHwCoAQiMo",
  "key24": "67MgFzNXKuscBrQiZMgDyEhG3iW3C1oETZiaHpB8YRFWPnS2FDN87cLYrXtEJzbydJtixEApQbUd289nETnPHZXR",
  "key25": "33btUDV4er7DXf12FaBvys94o6fwbZ52ZLjsgzHtBaLKpjna7ww2XiXTHEWFJMVea6kHL5sHCY8g843HhfVhQjfU",
  "key26": "4i3STwgQqEmKLEHz3EexoqG2aBxfyskpjtGqEwyPFnJCS2bVjUwVuK94ucuKDy8nFhcb77ZAfavHcptNqrewbsni",
  "key27": "3hQr1nAXcT5zpvuVMf7ZEpebUpQEGtMkdUZp2ZYHFsAFRxSZow9N4tkm4MB7fMwzmztAbVsevK8C5qYTV41KYJkx",
  "key28": "SFfUQKnRXHi16wpRxXoD6JNRkErHgUESoVZ8ZT8cbxtsNd2wzq4TjctdxweB9QgF8XmhmmuYKFhcoKv9mRjLhz8",
  "key29": "2cM7Sk3WP6yPUXVQu7d9zweH4c2rox38obAuE9XstXnjecgFYpXzEMsCrWx36aY5JF1AaVEexcshmdDUaQYUGELD",
  "key30": "dvdJc96Eih9cBF4wY17MuqRxH6qNMJiwqwC8QgmbptGXwH4BBj3btXN5JjWnTwmS5arahvsfxtaGRwmft3zkG7n",
  "key31": "ToZVGLZYug5HpuAkBY6Db4dTyCnizMJ58QSQg3RRymEzBhv1cPMT7k91JSWY6KDNfuvrrKAgACFRbwXJnXZ6F43",
  "key32": "2biMTZSkLFRqanJzMsCs2snVmFxpKPygmNPgELN57kxX1ppfncXuFpJA1JMLbop5S11FSupuv6dnL2B3xvqAa62k",
  "key33": "4nweJu7x7WedUugoteEykhpsEt7vnpHPn5Cy9PmKFskAnw6kHtn9S5TyjXNgExRYTuGfkwowtoBK3UcWHN1AaMfY",
  "key34": "beSot88iCfekrwjookWH5q6gvJ54683KDmVt6vxua5RMwRT4VspPWQbdU4ZLVivvwgH2Mf9FrdH3TnaEu3cpWr1",
  "key35": "2UXuFeYxYqQAJ2DKVgQQfc9PtiNYsZhxpmX2MyKWZ7QC4UKz1D7R65ycWxfsHrN2UDFGPgjVg61ieUWdxUEyw6Z5",
  "key36": "3ZWFFRoiSpo9YsK5VzZzN7zvRrErBBB1HchtNxMsTTt1BcKRKKPN4PYo2Rooc3decukQ99KcmQRaU5CHLRdY2hV1",
  "key37": "4uwgvNHEh8QTVRe9DXVgZuMgHnrWjDRsci89fEXBLqiq9gsUAWhLRdPQEHoBsXaZEsBddwbPuYq4kQsXUAAJbTSn",
  "key38": "624j9vJdY1SP5Tjs2h5z7qaJSei4D3iXj7CvxJkwb3u6g1crWEErvt1NBFeRpD3Wu759DMzE1DLTY8wxk553dqZS",
  "key39": "2w8QGTq1SiLYR9eXLGKg4d9ruLi77rbC7MDyEdS5p9Lce8RuqXNXv7enMeaREjSoMKnQFGSnHJqbKhfgAPS3cemu",
  "key40": "34E1D2J2v3HR9wDBBYErDA5wocbXdMhvvDjjMCnFc4zieA4o5xZ98cMGAowZHyz8CV5ajS8CTv3wFEPsAX5kEErL",
  "key41": "5a8jVzi7k1Lwwt98qRnAuarGD5BvC7yEKeZHQBS7eAeN1LAmUEPbTy5KCH1TgrMEsxn8jZnhUdVQojaGYmuv3eHK",
  "key42": "41ScpTZ9ohxMPFE1HLXHcSzj6Bx8zd8s9YaUuCSfRQEdaTNXx3uKzD9RnLpqcBd88ki8WdzufjzDzG6jXCwicEY",
  "key43": "4kZghE9QpitTvmg2soqhH4hM6FckudnR81Zz7Up1ySSdbX4h6yeDDyW4vi4hKTfAkujdtj2TuvJUQbDAodYYr9pA",
  "key44": "3BibmapZPRbBPnA4gnuJpSx6LHqmx1C56SuvHvZhMw7xG59UvZ5hGrafWavWax6az82XwPmcER1apgEAKVuutK1A",
  "key45": "4NtwLhNqFBAMBTz4hfv7MEVXfknanMZo1T2dTKdN6tuWnuiAv1EN3MJkJrENc8zDAGTnionsK4Ms4yMLumzAbWaR",
  "key46": "2XZs7tN73Tt2LFmxdtxFSKgZ37fSHJMuXzWyjEQRaFpMxhEvoNDcQv6pvmrHrgbtpX7Jvhzea6oQirmcLi9jRhLv",
  "key47": "sAyN4YN9N2C7TCvqpWHspE72qzqq35ZbSJKBiXWJoehPi2FXa8fwReFgpMfEbbwPKH1eBu78ELCDdUTSNfLvRUm",
  "key48": "4XkdvLenXDKxizPwLgAVNSnpDGVQwDUoTkLhVmtofBvGa66sA1GTCXeCaWcC9h1h4aa6qkze9xumpFe7GGp1Esky",
  "key49": "5aDakRxjNageBPnyzqBunBFXsWeFwTGJM56DkyJULk3rbPoMy8uxACNBMLn8sum6VeMgLXBpqyCjtP2eaWRPxcwB"
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
