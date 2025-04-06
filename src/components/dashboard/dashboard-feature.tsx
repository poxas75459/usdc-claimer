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
    "vykEWKHDLvxUjumvQDpQ6JzCiUUYQfawPaE1u5AZMY8NPEhpFDYSmgbm1gzMmCXVNtaV18jMLBxVAWKzRaYdrWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HBVAMV2xP4F41XMHZYJD3skCRQmKZrFdZ1jwtNWqisGHP8ZbHhdduf1FaGKhCBVLmcRYGp8EoApuifJewUgtUcm",
  "key1": "4Sgt9Phn118dMH9bi1D1RVDLnyHXub2VAwK8JgximCVJUYXAxjV66LCEAc88eYBeVhLttUJi7QEf69DpCF58d7Ap",
  "key2": "4DCWK9TGoyCHKPXEcjc5RWDiLdpWW7nSECbs1UjAhxqw6F6DSJfWaRAk2qDkeRscPc2KhAScBZdJV3qEfQ4PPXmt",
  "key3": "2LB4629mx6YFGA6nYBYggBvYjPTWJxzNtpATSgniKxjLLZ9EtU8crdjzLjELLUGyNTHjx4yttL71yqBcocg7z6Lx",
  "key4": "4o7AGpMpdB9rWNozuYWht9hGA2cknUTrNXT4zPAyDazss5bgHJ8E2vLYbCyTEocJLQ81dFptuU9dox2epV6WyfUG",
  "key5": "3ujd6rUwyZxD31QdAfHDs7pBBgZF2R8s8wfFbwhfdz73VMoRa7dyATZkdkiFLvKY4f8UVwsKu4djyk3h5EzM5wfT",
  "key6": "2zMXUSWPKAsidwMLFv8NzmbCWSTMfvhVBjsjjVGtgrcCFUjGE6EeAeEaVXeheiRKHQdXKDPa9vEdecoapnmtynEd",
  "key7": "4nJMtbYF6VCW1TiQcdbbS9zoUPS8YpUeFSSe9ZHtehkaUwFThtSdqoExwTRrJgv8v69wpefWpP3MBKDacsgCZTs4",
  "key8": "3tuqutLrnkC1v523eWa8RqPUPPCoZpS2PKADaeJL6VQEoBVMEMsFTWV4zQCDUhF6ZqF68Yg5QBP9wwLJoxbigMkN",
  "key9": "2TRiQwSCUvZNA2Y3Svfv3vLBV8DJXf5Autbp8e4yxwE2cnJFtmNpG2WwzUtMsXTk2ssJK9ekWBRPADvLaubEeDY8",
  "key10": "2ei3xgYJ7wp841zyzruJYWDdtER2zgi4qvM9pCAw3AMtYxMfM1Q68o7zGwgjhTqhoXPR9zeXQjBjb22416Lr3cxT",
  "key11": "2BJ14ZzDjyp7mDmgTWi9H1jivNCVYqZAmeiZHPvrQAxXygapAHud1rcdrDVZ6feLgWNahMmwHeAVp4cZoUPunC5",
  "key12": "3R1xevPsZZ7WStTLAP86VBF6dEWpgiGgJVhPyAPYHeN9q1M9UoyfWCq21eLoR9uHgtSqZDzTUBepAZ2jHE8C95i5",
  "key13": "5P1612pteLSdzkfPBeuyN1u9QEaJadKS7bjatC9BAXF5gsay7op3o9xenuz3DMDyAa9gyqUyi19ua4rfWLSrTqJD",
  "key14": "3R1xFrn4erniQtizTjrT6kwT5v2ThAEiupc1YK6stSRJdF6NQyLjLavHGujfMt9eGTjRZBBQnM47kF5H2RrNUzQP",
  "key15": "5MNu4Y6zEw97Foj2rN4JBBfbNhdkC1ZiM7XizoiMYTqLxPocz6ofSG5hKtgvSbwHWym42tCpkeoWf4QoQPmSzcvQ",
  "key16": "8icM8xEYvaPQqPgtYnNkcUr4CmKkJyrjbVtXeoA7SaZtQjL38LDviP39xPCo3zbS9jHrXZiP8cAC5WHjZJ9n6q7",
  "key17": "3tXKMfVSgW8Zf4pzr5YFD6uU129UiCpXX6k63HAqEJSC8rRP176BrEvdXyUEj4Hy2BMAuxTXkuMWom1WuGVmFugK",
  "key18": "3Wg771uikWQqrWyVbe1GMbtWnPD2WWgP2iBBhme22znWEQjbnZQWqqEkFpEnRXL3Tpqa8Gy5eYTRMkDuTQNFbJ54",
  "key19": "5msztXdoVVVijbKLqUXFXC9fuMr75nXdupm3wxohFSURJ1cpd2LJ3y1yHzJS34TwbPADXgJQ8tMnn3ZGUhm1ZkAs",
  "key20": "2ZKLj8odDg6mEq66d7saocQMRSHhiBT2yLnCng7ogoEgkJQpKDxXJKt3AcUaH4cj7ocyTagwyzKp82o5diAKeD3U",
  "key21": "3tP2b8HCYQW8JVXya2FHDDN7bL44tKnzV8fG5p667GTB7RYzE3v8BWQmWRxrhQFYxxPtjQea9qEpTn8erDBvT2MQ",
  "key22": "3odzVERVWG3pzWrGA7B3roPggXy9a29oKqDzGdx6HCqc4bkzThS2midPh9VB86r4E2npoZhB7vk8G7WJEFFGY5rN",
  "key23": "3TQ7KoHEtvi3LKKMbjNsFAwaGYMqdRfct5HEgJwavjfdkYcs8AGVBZZ1E57X3kz5meFtCHEypdJV57Fumj27DKFn",
  "key24": "G8kcdCWmn8GPRm6q1nkSsY6TN36Jfgc175q9jnGX8QNEE8QqU56GUWPbM2qT9yqHbbVJqhwdxszpo7YU1SaUUof",
  "key25": "3tXNz7G3tr9STiVvGpj5QN51zwv6ezBk4pbh526iu2USK9z2LMNELTDQ89C1MptBZVPrwTuc9WmAtgMGe24RpGjj",
  "key26": "EYM918zTTpzQVgPWKUqayVuRXdebpy7eTzEPQy5fPUmEDLi1AiULdbSb8rUQZNEphJuz6duAyUf55KHmr2pMb2h",
  "key27": "4oSHZkPutdAknkfWhBSd1ageX52fgWwhrHWA9wu7WjCpEe2GjPuNRKRyr2Cq28VpMYecdCBMevbs4gNKWvPqtRAv",
  "key28": "CZx6Vz9hdtBZbv8iPQpeor9J3SdjYrFswLr98zhHpwgNMk8h3xUJ4Rxrty2wDBEeny3FrRWaiBAkMccVxnrPtAb",
  "key29": "2XSkN7sKmf772kHvUEioS8WQBDkrrBQ5TyouXqWLNZkpHavdaog8eYqYxFffEiGB4CrgggFpPR9M4WaUr6c3FSfj",
  "key30": "4Ns3vskgT6x9KrhpXNP3n6AGsW7UVnAfugaVhAEQND3UfAa4rjRDGpBvnNDER2TcZ9oF4sqLG5oVe5hpiQSWj6zJ",
  "key31": "52fpZf6fbLLBodf49Canppc9LyL5ChkfKchJfP77gc6Vyuxm8AZy1LQiCLpZJyC2qbta9UEtDUweZ5cS61juAqQF",
  "key32": "nPPNsRHM85c62NubuLbqDq7MwqjW8xdqa8fGHKMXQHRxSzoBNMZguvd7K49bRvwdrsrLWUpqRM2uADW7VakAETQ",
  "key33": "xBnBfUEA7GSeHspTmKacHrUnJbKDvTjKT5REp3WX399sHZETGqeHDvjifNWEF7z2t3heY8Pt2bubdrxTftqkUWM",
  "key34": "5YSw2Jpnet4fekxuVTP5s9WMFDk46WXhF6qd8x6aPgqnFqd5WVBatmtyE3u1mngBFa5VZ2tkjuBBG5gzb4UeepCD",
  "key35": "3norG9itGCKtNuHmY9bYkWRy7WgfEotUwmeXhRwQmaBbpTFtvFuwYK2sxJtyDzXjYia2AXYFpn999Kx8vmuMXaqP",
  "key36": "3P6rSnPDyHmhgxp7CihidE7y7x2bNuv29teDy34rgetwdtwqgQ5B1S74saHWkUtmwHn8XzRFaYC8bKUzED64zXhR",
  "key37": "55DFoT3TGx4e8QMsZFiBZAYYvnTzWkQp92apCCLomKqQR9Tkk8mmUm36azj4ZQZAkvRo1mEARHsMQ1qX8Twr6vNt",
  "key38": "67gSasEZPCXEPQJZXtJy8QRFL4ZEw9WE5TrR1kE93SAK4XU9pHECE9UpatzwJXSDokJcSQ9Djm7Wk4wimjJchZ4e",
  "key39": "34ApBbexGnRQcgPbQccoTPxbnvDnMmRJ9LVCEmpPYP87gfgkg3JtVvqGsNmLhoMxexENMs2zndNFPLH2gm1hQnsZ",
  "key40": "3XYB8sr8AALZjAQ6hTh4spwCgt6m5ZoHSigZCiEBfU1r5t9gvdvfV3ttKxTLWN6B2rxRANdBTz67uLerSa2Sntfp",
  "key41": "5UNN5HEqgKAAvwGF73xsAjN4cn1U1Hrh7sd8dZhhrQVdCeYzBuWup9KEwmoNzgJSMkAwdYhDiY3KCqpNh3ayFVML",
  "key42": "4h18YPaPk5GD17SMYHE6JV7cGKtEAdmDHyt1ZezwqSbNQ7Cfs5MP8GVtK1E7z4ByjRN2XeZCms11hzixzX2atKxE",
  "key43": "37oQs4swpEY46g36pHUXkWRaUtRMFebSfVfn2dVtjEu8fAGBwFRxHyf1bih1YQfHdgowyVb3gnKTm4p942bWBvfR",
  "key44": "aX1i9YWT6HhrUMBFFSthrFjPw6UxNpdvFbGTpMjEnAm7449XFtqHifToru7xw9Dv2ip34rVoc4Vbmq7u7uLWyWy",
  "key45": "gMQh1t92NYXFGzNUQCdXGcYun4RjRJPH65YPQc2Pi4wqZyywdwk4BSLTcQJaQ56ungXVTBaRNdkL65wLAWwvQM4",
  "key46": "5Cjm1b5EYb6Z7yrM5TqKN7Xw1Ngyr8cRa1o772VQVZ2ZiguJ7bRN7nmnoTUGEtif1Nvef3441XBKMJmLurpieWUv",
  "key47": "qz3kMGSmpUiSDBW5ukM51JXGyhvHPHkN9zPhzxGnkHpqmskDHang5Ve792gTDseUnam4iJUXXXk2vtNAepLnhZG"
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
