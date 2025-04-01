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
    "679xERtJJdmqTaCPmJopykLxnnruG1qnk1bZYFkdxBKnGpAHsEsvM7v7M4Ey8RuD2Ec1xqYvhhdqdbFM3a3eiJi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23RXvnHVy4p6irumduAYAEratd591q8MuVbCY2CRgKKLUrZLj7FyUozWfcvd6XbqU5VQE3EBfbMG3eoBVxC6opRk",
  "key1": "3yCHyCWJgDhidbhTHdKTFqMkTMJCnD9J8mNwCNJPL2sKMADGE3ULuu4TU5JUy3sSB3w6rhCEyLQe7SWMkAqRUKik",
  "key2": "5CvcXY7GcgvaXk8MjycKeD93Ji7cAdaMznbdf6Cg51zbVwh22U9p2XFt1AkTjSRSUfet3zGKm34skefmfJxdyMY9",
  "key3": "inBDT7gN91nHdE4qgGhLyRxizgTtD32vAFnqWYdh2ftjaW2aZgh3T8LZy4kdS8XdKLZwVoboGA2KSXDCzPMrbZV",
  "key4": "iXgNhnm3FEuQKMfEyBxqsqMCKKp9fyV2esukAXoyxARxKTc39KTYBSSf86dXRvkhzchSdjokGU3asFa4SfC9C83",
  "key5": "4GXuxUDxuceeB125R1e5rCuitxLVAWnSbCWfwCWZGhGMva1ayZEFYZi3rmqWiGqJNCus6BhSD2HDaxuGhf9BJg1X",
  "key6": "2dBMzo83CpyekBJSSsHWxLtijuqoSbqZjPFcLyZuvawYM8Cfmi7WdFhfnYbJ5WCmqTTWi5H3txDrwwmu4UREbC2J",
  "key7": "4swRyz4kcquvdtgx7biToSwwVuEoYd9eYnhc2t8ZvB7c7Ghw7nQsn6SqLVhChLz2asPWHBbUN5wZ8eugVKY7M1ZZ",
  "key8": "4h5QQnYtekx6HSiWHCvVF1WBgDvRzVNJAoZCLjW9MjCYeHnrieZbxTDTwFR3mqjU9uCRtfwiwRgGMyQrDZMrkZEU",
  "key9": "auNa9bFuw6kDpzLTSAteeWV8zJbd4Bnmq9Yoti87yaSLm2fC8BLDsDD7QztRR8e1BBoYYd28t7Uh1yp9WWfSrnR",
  "key10": "2RVjW62Az7GWx2rZvq3oVLxq3x1HXiDppiZtQ9Vdo9CMPkV6mmYLWw2mhJgc7XnjzAMn8VCks4ndwnugZrWVZBXx",
  "key11": "53vZrc6QBC2SQonS1UH8jrxb3SnGjjsKHKFv4xNniDS46WdiCiqxTrFZ9o8ku4YVmjTPKaKkPBjh6C3K5avjxW86",
  "key12": "ASfbwYrsrq6Ne137yvfZhwSrTii6TB2fJauvV61j2DXdWpTnVxhNGk2cENLifp7JoqyVBtbLbJESho125DHuDpW",
  "key13": "23YSf1FhF53qeYtMzpeVeXDiJq59vK4tkazpJeD3MizJE8Ni4YUiDfWruCfe8mTn76Fc5NgRktBg2s8Krm5vrkit",
  "key14": "2zoUoZzTTpcYzHNvMthmDkDSqr3fzNqUPpYRN6mWZPmwbFsDArXvcgtJCcsjjaN4Ethja4NYyocrABC13qpQxzQj",
  "key15": "5hhMLmj7xrBh3AkNPw9aJVeWQ2kNoBHqZjS3GQw55vxvFPFGAawW7zqVSD4iHYx3MvUsEifddSH69Z4nradqetd5",
  "key16": "4P777sW2xpkR92srKBybj2YmDSdkoiAaMwYm5DcoHwmMtVqmE7sAyFNc4NTKy1ZWcdP5q7RqnmVr859hjD7y5B7g",
  "key17": "5Xjrm4NUdCr6ChPBA3koezaFvLkPF442xmSHJNm7i3PbLffjoJQtjMERcTFZTr7TUdtsBTqALVW7Tt2GQu7vbo7p",
  "key18": "3pN9jBwAcWKw4dzKqngo3kMKFtJAFdxsPJMFTWUKfGNtAdjcK6Ykn9ubit3W3eV5CdkqfCqNPSA6yj9t4zEnKTMZ",
  "key19": "5a3LLW4oCzHDi5tEZY7kNFAHBnuCb3PfyzKkyqRHMTctgtwZC9ncZ5d9vXbt2kV6qSC6wqFmbWGZyWfDjj45N2Zq",
  "key20": "DGtnm4xLUBVat1KrA5Tbxq1X944VfBBrXo8mQwZ34NwyoZ7A8DRNcS7QYNcrk4H1Xed5Sd6ttDi3ySD5xzCxxhr",
  "key21": "5W3vn7sX9hKgMfc4f4619scZi25jFJzNerQ31AqtU1m5MAM16GEnr98fw7ASv9Ma6QTM1QtCeNTvYGT5BWDLCr2k",
  "key22": "65TB85jPvZPXvDU9aVJ963Y4QmCWkuq5xtG5RuAREAocyzvRPpfNc2DDPNHuQ58JkFcocko3fvNS6mudg9EsxdMr",
  "key23": "3aVkbyZVJWT3hUpsyiKWEmEVwuF6UdXCXCD36rnihCAA9hprD3mS4AwenwUQX1CHauzdTbu43ZEDvbjCfNh2w6Wf",
  "key24": "4T1U6ZtzxZHXbe7BdwrN3NbqczsT7BepE3ezN41s5YKdz1JXMJ39mXCSChMSG8jixDkKVgqSXA6Mvx21uNZczqeP",
  "key25": "4FgT9AssbZVfx3cazGfrnbTitietNkDsqoFjhd5zq2cUfZnVgcADWMJ68caS3EgmH6yzK6AouSLrMHBD572RxH8B",
  "key26": "5xg5Sbxp4ffz6crYMbiDpPFuF9hf8dniwuKFS2ifwWDRM8vdFNcC1jTDyApM4f4foVKNqKstxsKDBMQRB3kJgWF",
  "key27": "5ywSVedfazzC1DCLkrZodxk1xbcR7MS5s9tLERbfCq2pSUSSuHXN1Esqo8nhtkEyr4sXuLNHwWAU5qQHUUqfXHrb",
  "key28": "2EsYUS6eoRovNwx99Qjusq6aLtLUNkYHkRxs3yiirEteu5FACGdf1dxCD2eUfVwfik64xAAo7pVjJpq4TKDRDFms",
  "key29": "5Vz3nWboJXVBEPzpjfRDokN4QmXtiAawSuAFixaVZRQCEXbKxP53wyfMwMVWSZXEuRrN36zYxzgN9eQLYfGRamwh",
  "key30": "62i7tX8rdYYuVxNfH1yZcQJ6yrs7AH2Jxu3KLvistDXyyY1sRTCZnV3W1DLgmxmwTDkvMWnRQjvRxc3r9PE7ka5i",
  "key31": "2jjmU3hgX4gNpncM5Dt4dbYGoLwh2HMHMkkH8rcS9TM5SULm3s1HYwLP5A78v5LMBf4dXZ1957PmoffaqbaVWLYu",
  "key32": "35pXL8ZGJhPUfcoFevfVyAgaDYTsCc6VWT2zAHHNZiDrKUkp7r15261LtyKRBBJDndnRMUQyQpWy4EqjVU5wRW4z",
  "key33": "22NH7hChfLFbqrCREnXD368fWgJxp45iPCvew3JTK2t4sGVe5wAgqaP9pN6kcX6HeY3TWDrvyBZ9cRRRzZqMJXX9",
  "key34": "ANHtUDLvb98uUmBfUpoJ1iftbcn8JKQE9uBK4GKPQC4JK9S1gk9JDhqHkXS35w7ci9FhMfKVbpm3MbVLvG6QyYp",
  "key35": "327aLQ6ixS5PRVSk8SjyeMUhgsWzVdq9cQ94UopT79VpskoyKHyuR3zon8Xwj4BixZbZavgTXiZJeiB8efpKPyFu",
  "key36": "EMJsWHpYr5fFgcedMsSpnEBNaW4UgKEc8PSMPD4FiyVefU3Ha9mHNqZhEo4k1iRxLv7krKEWKw6Wz47kffrE3rx",
  "key37": "whK15Q2zJRqPsfP6zkP8dHuxraRnjb8Sni5phM2HksDqEU5pQRJn9ynw6oju3aARzak9K5XbqJzrjDbToqnJ6oD",
  "key38": "4AjpRYCr8kkeyWTvY9BxXvCH9MXvi5N6ZbtEywZ9dSxFrawLnqoTxzfiy1mMfE2qLBbJjr9PyK85D2xtdKG5RBqL",
  "key39": "5r288DfJjj4itKsmbKkB3jZJop9Bm1YAhvmVByWzP4UhTW4QeErsaLdxueiVovXx7mbLDo6KwMrMYvHVtX5a64u3",
  "key40": "3bi9sZKdYcM4vBJEVcsR5mY2zbcVxhgSycPym4wPK85yxN79LLT65AHaCZTXd8j2y8hxTz6Fc8d5C7WnB9Bv6pxf",
  "key41": "2apjHdPURm9cm1Xk8PsErDEUUDfm9Qu78oTRgaG9VggEp1gThzkpmj4S5MjPsxjgy94KpWnbNxQ4AoAzPQbqePap",
  "key42": "52MzXFu3QVr1VZZ6vJzAcSnJW5QeMfN9Uh7AoRqLvXfhBqtrs1U8ieH1a2ZWj7AGUW1FoDL9S4Xrc3f3idgiKYLK",
  "key43": "44DWw4CEZfDY1GzHLHyLicLAcnUNVSEcdXUqpHQG2PwqPJwmAw1fFxp4rzy4acpes21BEZcop4KGmr9uRDDAbXzT",
  "key44": "4sT5U4bJAh8WRUEsoMTND1QpgpeRUrXTfapwQ2nyewd2oFZgVZCXGVf1icq9LwuyZ7PAzcYUY84R22ANQxqja36U",
  "key45": "44y4WGjKd25qB1krvvqShBp3f9qNk5KSwaKMo7CKWU82W87AHUGUKm8A6LTsRqzLduTx3ZrxrH8Q5TCmZe7nYpf7",
  "key46": "54ubD6jx2FMCeXZFBcskAdLLQKxTNom17Kkmf6cQwLbozFZ9PihJa6cUtDa1rLHQbtAetUY8nmVB1dQZ314jKzKS",
  "key47": "58bPDQSEK86vaDuXWTJgJxZ7KWG191c8sZDuCAZnFCgLTDoTZR2w2HCpQuzZXgdbik6917fLLvZfWHuDVJ1DwyPF"
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
