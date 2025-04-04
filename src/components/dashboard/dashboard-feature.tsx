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
    "jaA5RxtChmk6hGqD2BndJkssPAivtsDYQndHntgnkRtLQgJSnUojfsDtnxpxT6bbJyQ9CbNv6GMpPweM6ffzj7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RerzddXRuVthtnMm3jx2H2WzRuTbypVSwwD2yaVQ4hwzNxHsYZXmeDpjJYZpXirmpUG9Nr9tXDmqMh2gQKPwoH1",
  "key1": "3XVQuaayxjjA4oVRPXCwpavADspQqzxezFAHN58WQJxNoZ5TCQtTvyi2jFVjrhCdQV82nAy3VABvP8coXgNPYdGM",
  "key2": "3b7qkkHHjAYE38D2LzApf4D9yCgPwnGo1UAL23oU6fpq3a763AG5r7JfNyEsryw6gd2WZENZhEqFmBgfvvsQobgx",
  "key3": "3vFT2c4nkghDPtA4ADQnJdhcWCYvX56mrvxJ3y8ik1NGwk9ETtbpnvFjTFWVfnHsno5xmvySBSmdkPWEjRLCoLWr",
  "key4": "4GXW4Zs6n5mmLrSuiFSYgCNnd4pPM6t8q7yngc5W3V7PahhLjDRAD2gXX6W8HHAu6QAF4nrFq6qKyq3LV6A4CwoF",
  "key5": "3N9RC6zu4YDyMcoDqEyFqKJZVJwe8nYtaFkEiGAkbxDB7VZchLJmTZiTeBboaM2V7PpQRY2m2f6EfMzq7QKRctP8",
  "key6": "2EjLZHmnZ2DMGACTxfixWwNJgqkLHp6Mpc33173jhXBiskjr9zgZkLV8SLvXjQMkEHSrM1ob4suVEsbAvX5KQHsH",
  "key7": "2xq92a8MRBbMFaKvFEUBHiNpCqfptdWp4jCRWX8qrrc1oABCi5i1uEPrGGzQzF6CKQD9b1Wpg3z9t787Ljs53VWd",
  "key8": "CrNekrQXeshRAq6iwxuWKqHZPCjqMo5uTyhrLMhcx2KnuQy9Df9c5y8dSYmGp6MLR1oXLQ9ryXCdgkHqdfB93oe",
  "key9": "31wGYTZR6vGXQzNkCq2kGabERGNAkLtkwaNa8Xz1EYDbra51d6ADNQj66f7JZPqUwL4AuPuevFuSyDDFXLtWr2wc",
  "key10": "2metjx4YEh7nQPKLuFKVQtM9krhGLkByTm3FEon3tSbdUiqKKv4p3XjV8xZRX1ZS1rAvrLL34zY9h3uWExvP3HoU",
  "key11": "279tCma8G4bmwnpuvdGzfns9RjTSgQM1k2r52AAGP7QfGLZXMh2LAQJhP514Q5z7ScSq4X16ZUzrskjecN8MMiQQ",
  "key12": "2WWZrzWLNX7dZcvfE5SX3hMYf2rgffW3xwnDnd1raSQkPRvSdnkvmzQ5oUdV77eXJcYL7ToEYoupq5rJbY5LZa9P",
  "key13": "34fVPnb44cp5xn7UKSCn8r3WRSm8nqfd4supos7zaFDimd7sxaDZdw2Bm8BTpFmEGeCvMFazHFiUgdx8eDnKqFzD",
  "key14": "4B1ujxrS4MBpAzNqB32XPVtEBu3pQzmkFPDVWSMHQQNhKr9uCim6segm5gg2E9oAUuP7Z9BJwqSQYpxYBwXhdrkk",
  "key15": "5TJVsshGnL2hW17GCemFT2ibyGF4rTUukA51xb6UWhBDJ8P3tSq4sxhw8RwDemtDFYEcq3ftXqQfREu8U4Hrqi3Y",
  "key16": "5ebQZjjLp873V7TbPUE7GzjHBDDP1JAfkirGRjBBEc87NczsDmevAuzWkLMfK3Bbpb5B7HFh925tSNTmdcLohVpG",
  "key17": "5qHNgkU1FwrrfSjyy3548ez3YsSsYuN8QiCZctFQqREfS9b3BvTC76oQbjktJQDyZhPXocYYK5JDALraNhyiVNpM",
  "key18": "T8TRMm2GBZjgTwyAcBsmuy9dYNVpoaNruF54rznnXNArNAqaszFtvMEWfastszWG94fv9ysHE2XdpYC8c7zB3wC",
  "key19": "5uDp6WQyykDeTXD1U8zgpEdB3JVhkwMcSq1eFRiTZkfVoE6YotThzHTaU7LZm3DjBPyJxuAS197DKmKYvMVvWKau",
  "key20": "giKJRwAPfhWaT5qJaTzCjhFSVvYaQh4TAoYicC82E8xgmMuUXcWsRMNS8SVJuWXFQQUkViy65LZCzDZjfbXkr1i",
  "key21": "5jkYFs96SmQo3abkUyMGY2zHjnJZsYJEwdefH6TXCAnHovUGGzA8Y5aJ6w1hDRWJQC7yGWciTZimS76cYE76Pv4H",
  "key22": "9wKxYEK4Zr8Q7uu4XkSj1iaDpnBXvT35ipM1bEL6BiF7w8Q74Ck7B2yHkVpbKSSnBSmBNmw8KKfU57otgT5uHZ4",
  "key23": "fxsT4dYaepp3qbH4gBxWLg8G53jkvA61HApW2zxqekqJMYurzULgQ1cFmmR8MACbZmAwnvcBrxLpDt9twYkcmMx",
  "key24": "2XcYuh7i5fTZhgxZDWNkgz26kAoxUoeRdeeybKDP5GY4oaY25GPZ7NJf95EU1f2qsbwFfatB9r97co5KrUiTgsC6",
  "key25": "5mjQq54bpAnuo85d9w6WENDqU84XFwRtLP8BCmbnxpyzVh6ATkcSzmb6ZQheuAigF1wAsiq8NXFZuFQEnvNJcYnP",
  "key26": "2HEh1Pot94KaRN2QTnUQv1LotrG27tx2m278ry7h1XhbRA7aahTHX6fbxvCAd8keYjFevTJaQShfH3Qxq8oGQ7i2",
  "key27": "5mTX61mpE3BDuuMxFLxnJABwXydKch5tRR8Aojp8faS7ERJJEiMF866WrR65qWoiBC4Gu7kUFMyhZE6C5vi5mbpo",
  "key28": "LjMb9spmDfwnBwfRz1UG3W1BBBV37vAF2BsBxxaqRMsm7UQxDcbKaVEJYy6WY8EsSTkQGv4e2yGRWbojbFwdGxL",
  "key29": "4zk6B4BRku53xauTQQCDUkgPdf4Mg7A9tjUALRzd5xCZeK6SYeX8yL7NtvtGByyczBSUHiGVmYqcunczVqp4RxxM",
  "key30": "3TBfd7T9JP677WsuEgfr3PapYAD1JNP8sEKcTiqeDPfoZYA2kwHDxSYLmxe8LoWunptB1LCVA8hWyH9cL35UQac",
  "key31": "2JXZYXzLavwqt5JTWNyN2fuJY45ixPSxS97oP5KwNX8Wi44AbjcudKmqaSLkRVSK7eF448XNJqQgj2EotwwPZ26D",
  "key32": "4pCrKeHHKvvWC5do4wokTjX8YeTyY1CL9oqnNTKzhu4ko3oHydFeVGu7DVimfcVmD4qzoFxa47NpsthnqFqWPd6K",
  "key33": "31vz8YSzXQLB81jVWxsirbZwe4FLdKhYxMyBXhXJhtWA7JvwzVqu99ZpmJ8ryV1DEo6uYamTgdFph3QspWs16a9V",
  "key34": "2bcaLXrMN8h8YTHM3DV8bxks8ZFmNRkqwrayGzJf9USz9SduL5ov1apZVM8TJKCQANqucpm671qN4zgotkY3xTk4",
  "key35": "5QGxkEWeExJqaUMNwyR462w6nW8up6U9J2CMEvfogjHCuPsjWLfvV4mAbisV8wGazYdBxpd1epNkBCqXaGDSEr2J",
  "key36": "2WcRQcxacFf6o8JinvjPoJE7ExDgPDJpqvkt22oXUegt8Vmeep7bDKyjRYUXh58kZFWmE2PqcSrf4PFznLfJHJcS",
  "key37": "38DLa8urLCLRPfGsJcHSBvDuDkpa7ynWaHerqTXoNRrUWTmZs8QqCkAGwR1uaJAMMnPuyY2iMJrrcx5y3HKB38hq",
  "key38": "43v3nKnPyW4FXhbSuzhZNkD67JBc6nrojEUsv4DXKgQVhrgAYJi4GipQ7ZDAxwLCKaFpLVH2DfNqiPvS7RGRo54o",
  "key39": "3Qo4XPq9j7tP2TzHwVsHTkBPGyM75YToQiG43kUdak1bSsxz6tKZYZBCokNt35Mabg7CQnj8PQ9vXfz9jxXCutjg",
  "key40": "447nVFLMBjwJEMq4XSpkk5ziTYBYrWkbb5RZEh5raiXe319o7jEooQPuKoUiixGDPTDTDJUe5zFPS6dTYgddGrQQ",
  "key41": "5aYHWtihg1xqKuWL6r4ixTUfvZpWJTDYbwyLsFrrAv9W8sam54AuXEyLa1BkuaMc1ufgiUUCdK5s7CcPevMpgZx7",
  "key42": "5ua4Wx7sjYpwZhdL8vEr9R9bdLS68grcyMLjXiMRSCqg4eBVybXzSCZVcAGqWWarprPG9sZe5U1yDLzRpXyZd3HC",
  "key43": "3UUpUYMniyB2kG6M418QH2ghL1pRfUJzw1L38pHBu9yWijWWuSEz28wqEGQJS2fGjBaZHH4sfAeL8ZoogdnosoPw",
  "key44": "5JWkgHyYMLgaE25iEGCtpW9Xj7BhPsuqkAUCDv5ebA8pdSMDW4eqivMVaGsVHjTA7yYzq3RyV1WJpoFQfXzrrQFb",
  "key45": "66sC8c4qUbCQ71DFfQBEdHQhWcYXKSehdbGWrzjQzJe1AX9tPgBbUXnXTYxZj6qx97a69pxWEdU6Q8QnwiHrYE9u",
  "key46": "5pobDvthWvE5LKWVXvHkYnrkvKqsjfE3NZNggkykybLtGAb2Y283bMqz8UBGJ3PhHfZJrS59faHGqRHzf8qrb4d",
  "key47": "F8eEeJdXXxs8v8McXRvJb2UcMa962A8oJm9y2rJxTrJ5e4nBMmQYVaQ1afD6f39MTfpa2Yr4D5UJNPrxH2wPuDL",
  "key48": "2yotT9FhSmuN2iQPR5dkpJ8yqq3suNJypCF3guWzwMLu8iCmivnWzaiKqSoawip7AKN7a8Xo4CtnEUPmWdvnnBbE"
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
