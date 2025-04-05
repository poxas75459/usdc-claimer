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
    "3RQzmUUbDutaw1dS8gcXMTpYEjUwCMkPao4knTynoGVX78CfoypccerE6rAAFtDRi39XvE8NwrpchBsL5G8Y1XRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tZUxgK1rCVm8NePJjrGvF78CfrEZeaFh6oWRZafWMBbLzNGSGHsvYWCCJ9JMbNXNa3GNt948nCuvTMc5WHoq7Cx",
  "key1": "5vyv81hiLQM29gdtAt4knsNwDWhfrUXyhLcwUq4e8dKugKJqmiULNCCLv9dasYRwuWESozq9BtEVJtSGMd73tYRN",
  "key2": "zssWipiF3fqAZ3fAt3kWZ3aFiK2sY32RnJnvygQddaGKebgKdFbNPcx3NsmvroMVYaCP6C39aw48SEMGBKeyZQh",
  "key3": "3d94DUJqMkKQpuABXLULSZUqFmsLHzwGJk25hMJJfQBn19vwvn86qoeWamXovXNZQtnx8Rdk1jFjURZkoj3fbAMH",
  "key4": "51WqYUn9cgKgg2oWfe1d5rwGLGriUtuKxcmFde642rQuXytoKCMDTKhb6WA9CgsosH6Erst4kGWEsKHvWk36kFZK",
  "key5": "3wkNv9as5zqUthixjDuT1X87hARck4eFo3PaULeFZBE3s3WSSEbrgaoati8qjAqQrL1UYsYPiXP8rz9UmBdfGZCR",
  "key6": "3Xma4VFJgxpycScytk49wwezxUaQPb8mSs5LQ4eZopsF5e8ZLC9fCvy1kKwYK5Jhihdx6WPuzYy4bHWAcpqrr7vU",
  "key7": "5LBpexpbfNDj6nZt879m2mLhGpP4yafQoceAgbeiXVzJve6P4bDMZ1F9vawSQKoXMHzWPAycsSka9XhTaXLekAvT",
  "key8": "24EyFwbbeszrBbb56SMTiVZbGde4gkX4xTYZM2votMiKueJQU8JNvNLECQXwfjHE3q3psEkUQGpfxm667p9ShWw2",
  "key9": "3xPQbPiWgD6xNJKKFwvsvDzVg2XGJWCWjWpo3YCDgGpmmbivkkMwVEZ5FqooEWsvoduC1RZPW9gxLsmV3XRgVoVt",
  "key10": "61KwuXEtaWSKUfD8G5FK4ihtFJD39b8HJZANwZFRe7E9n6K7pYs2cqNp8GRWa96zWzhUg7eVZqjXrggzo8v7Ch8E",
  "key11": "pBuNWNzfPhix6zRdbtTAZyGcVYMYMD5iAqrKbwAsfBs3YduLZBziyBCpp1eLCJmzxbRevfz8xmakXRVGQiYUvT5",
  "key12": "2m5yVCYWRRLp3Ce7A5J4gCabptj8q8s4E3iKMB3rNfUDM14rANKTkcifWFAMn51gsEL2vegbgSqx3d3uHM7bDt5Z",
  "key13": "Ew4VB2uZZunk9ebLWDP9jV1FP5G8Dj7gjBQKvKDFRynXrct4Y1xoETYkWPBrB52FecpK1MC4ScyVidJx5QMHVy2",
  "key14": "22oRmS5Z3jACHWh2t7NqPM6kyBuzRB3PAPEUj691KAM69oPABniHRm2EyBkr1jJz3cgPMyhrMm1GqvsS2YcWeXch",
  "key15": "2dDWwqWDjsw6jgFm7FozRRUHok63cX76fXcmm4NBLz4fWoqiMMzYh1k1QTE6YNRDZWsJWyNeKQ5bb5T1PiHj5mGi",
  "key16": "2CTaEkQo7Bipk2SNDYzBGcrorVFMuhetCEZ9uDKxAJA2ftJjYYNT5JmqPqfx4iv34Neow4fjdXeC3aUUP9FJjfjd",
  "key17": "46LVvw1VU3QezTwq1CZBmBDaXKsUFNTLq7nN29ZL7onXTMyX7C6Hcxc7pKsPGmPBD4RtZZY7BrLrq58kMXLaQKan",
  "key18": "2xvmcJKEFBn1Qv3cjWDT1wFY3Aw77xYUFCaaPKQKTrAnmoVjKV694wMc2bkj5ks5JKGz1qnE5yPDhnU9FPoXfv5z",
  "key19": "RqAWFr9mbuyMJDcHSP9w5aWEF3LoR4xjF1n6rgYue8pBiZiL6Y2SSnGr3egLQAARNi8mp2Z6vc2BhoLHeGPkbN5",
  "key20": "2JFxZoUAxj6K27K38yGBW9VwhPJ3PhpLUUuyHgkFPpLugXaTZ9RLs4vHJTfjjNcEPhW7oXqWj3z7zDFNzUd9a1V2",
  "key21": "2bDv63D5fKjTuYjrLMdqB78Yva9rHauXZb4kchfkhThRFqoFCDk2XSFFyJfwXo8sw3xVwUhV9NtvY8hKM4EhyPRn",
  "key22": "2ANpV3UQ2kdqM3EAwpqMSCNGwbvrj94EdfdhJkYgBwLDEyTBNZM5DS2TDths2RpV81iqa7wSzuLeknn4cnfN6hjF",
  "key23": "46WPFzzqcM41M8a1JFbPaEu1AJgxwySKRS1cRkgHqTqxYCGp7S56zkmtVvvqurmSKiosgZVJBLssF7VUhsSnsjhF",
  "key24": "4Q7c8FL1oA1xdW5onT4vRMakJDWgMvreeQezgL9bTufhDy9cn74QAG6nXtUL6NPWozfvZJe2GrFX7U6uwN6Jw4p5",
  "key25": "4tVa9P6SSknYSRnpybnbZa53xq4fwHptySSdqpTQnb3NQihios49vNpu24S2U7Bm4EoJR2W62TLfav8VW5JKw9Fc",
  "key26": "Hw9bmFpGcCwsyUcRqq1iVvAEv3Z59udMBhdWMGivNJ9MXUbbyprgmSXjpb4pn44SZ3KTjMwQjJYeStPmLKKcGhf",
  "key27": "5HvLud8Lfc9ehiFE7CgULt4Lz7A94wUdUvQzsEF1WXfkf3co3y79ZTBq5DHPeHwVRJMuVAz4E16jeJJWhrGD5sNA",
  "key28": "4EaBY4Uq9eLnhGxnZuiVYsyuaUZUcMiDrhgwoLFAdEkdvFzDYA3VaEQzErvAD61LFvAGr6RvhsTFZRJEhQq1mUjB",
  "key29": "2c4UNsomTRaz4tjYHHRWe8pcGJ5ZNgFccDvHix926Er2Qj25AWrsxyqCa1XZ6UzCwrQizrp7CBCQDVZdhfWtZydF",
  "key30": "4JEQpMXfF3i3U3jLWz7qSYzu1GztVhGWE4wfPHsJLcntav5Ka6xAjnGryCxSBp9r7TNcWV25Gnc4vbxig5d6UPJa",
  "key31": "2z9XZGo5DJajFNnCcdVCEH7PhRaAQed9aHvRHzZCdKBu1VP82VbpD7FijwjePdGaAntrjeBdnpXC94BKjWWEgwJf",
  "key32": "57NfNaVgSjBsoWm3VxCaZLtRCB9keMe7bxdNRm9mxoUqg4kTLtuHRkQEgsYnogkZJLEL2rRN5ZKHCBPLhincWV4A",
  "key33": "4ZoBDF598cHzvE89fckNugcBhBAL8AH4nqZ8LnKMDcZKGMgfCXRnGjBvYWgjzjLG1XDiKmGPa4Ha1V6AaPYUf32R",
  "key34": "2DyL3YcgnfYNYjGhs6ZhzkQKwPsDnzBdwFuDXqmMoWZC6ehxFYy1AoywdpAqVkKDufFWJVFZCWrS1mE1SDUYMSaG",
  "key35": "3CF2U7o3FmRHSybGZn81i9HvfPsLNp98ijKubqTdwtMYkHGzrXagzuafXtkDMoJYDxWbXF8rYcVVQTuuZQQGvqVS",
  "key36": "3rteAJSmN1Vqj31E7cxcWntF4vswVi2jih998KGSGZLbrnyxp6cMEKoa27V1Q8YMe9AV9LUZ8PDHmRTRDLKKiop2",
  "key37": "34GuCCh5G2w5wyk35PphEPf8geupQ1waTt6divNohcEJKweJqfShQ2UDBaVq4Y3MTBP82jeEUm6z9Wj4E67CaD7P",
  "key38": "4qLDVRvVADsFEWrUaz6h5haUZjNXd4rCmq1dd1TjVwLHXMWyKvjtuA2LmUJZkJdqRxup5qMRBRGU57WgGidNtbi9",
  "key39": "27m8ozDj6ZHLr562ox4CQ8AhLX12XmNeaqEAwboXKUWsBPKyAYaJCV5ruSrKgKVJL1XJCAVZfmTKQuTvwq7ebDQD",
  "key40": "3QWkkNdTb2t55Zf5jC81Y2ycRS9RKGBjHfro11iqLonVfo1sJBTCA8jgBgavjfFp8zDo4cqVKtiPA48pWPkqX5aL",
  "key41": "349yA5nECV3FsrGUbMCsi9Xy3GQ2wQTyopPYETcW8ABjKXoyaqZzdaYZkP3CaWL2hgFQbMmRyjLjk4zaGKpntSZv",
  "key42": "5tpt4SHbjN5m5j121teYQwGGccUpjoDUk3Nt4N5eLA8HfPXEK5weWsUY1fk98bW7aXoHHzD2zGQTywS5NHu5S6Bv",
  "key43": "uKRgwvqDmq78wCVMQiyGV7ynZxQSe8wYbmtUYdg1LzjjCvvGNcDeGDFuHkPe4XEfCqBrN2kBwvRERhdX9UKGGZL",
  "key44": "4Fwcm2GZqXyzwPv42JFjoofXhSjPeu9PJipVsizEurXNnS1RK75LKjMaogXo5bPJRmBiqu9QL4HKUp6HWQJXPojK",
  "key45": "4uACAXRvUNhNBbXVqemGHJfyaS2maNsb7x9nd6La3zCZpNHkhJGXgt3L1pHf4V6LACGrAKt3La3LBexW1b4tSyAj",
  "key46": "5Mvb1sZMz85q6K8CGZkp4wXj4F1JG5G8wmqqGRvqfZcSWJ2JCJzSMrs4NZSuk4qmphHDV7GvpMQxTowZ5EXFNPPZ",
  "key47": "8X7FVHWyCSfroiVmX4ZYq3pQQgdE4GMGoGG2eEC9XBSKdk3g5x91LZvvTSGLEifKiwC4d3GEjYn8zQ94uSEtyce",
  "key48": "51ENXr84o6D6F6ctPukdhHbgMwiLWudMW2cLc6Pw86QmgjZTEqgyn3qL3F161KAxTuwfaXSnSFNzXPdtR8q1yQss",
  "key49": "2NyJZwqhiJjcsqUvxfTGgoLTXKf849hLuKmTZMndvmiG4F6uSJtdqbKYt1EBMUzAN5VAMPTk623MukXBiQzfZxdW"
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
