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
    "3DjBrXhkeFb5EsGUCnVFUAskgnyN5ZrPycQwMKEBEH91w3iwSW9eo5ren7DWGM6AS6nu5edgkAZrpZiHnzqdqw5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22faYrg6XJXRP62qLXa2LHApsBNcuokKobKXvU7b4PDuYyk9wH8qC76PCs5eynFv9F3koo4nNVdv9cSnku72KDgg",
  "key1": "5g3XY8UJsKGdo9JZwyeYp7NvPiGqyukLdunPtAXr5az27z7vTPCJFUPywwc7T689WnQuCYCiPHGKyyzt7hXrQ54p",
  "key2": "32wXYzMTXDf35eXfyXKNHQez5MWbZSVJdW34RV2aMNGb6BaJDtJneKBV61AsyFBcoruLbxE6eNwvj4iKovvG95bi",
  "key3": "2xoJTkn2X8Ef6qNxRwJAcu2mpvv39f9vnmSqAi8NyhejRQqF9j95PgbD2yWwGHdjgFo6mcrAb1RVs1ZrkLKK7UiQ",
  "key4": "27o7Zk8GovSQnamBPrDFReJebMD9p6Yrn5QFxKuojg2jSDhMm2sVAnhGND73u8qzrLMAcM11VzysaxxJH7yAz9Pc",
  "key5": "5x3NBEnAcDZVLcdxAHxjRmooZjTH6MU3FrQHTP59yxLKD6P6Koa5YTUgZYieGvnddeWARGLmLtktjVWgJuwGLHqz",
  "key6": "5GuzdPfuEgFgxfXC7k3QNsRz6kwFRxpiEnQFrRL288GA2EMpAD7vxeW9PWgcSGrWnJ59zVF9D6Bnrja3ck7DQrXQ",
  "key7": "35ZwmvS2mB3APQ95SkyWccQ5896ydJHVUfw5WSVbGv3rah4BqBCx38iXKd81M1HCjgttm6LunhWaPUEiAR7E77az",
  "key8": "229FCmMQSVw1DdJxPupjPg1w53rAR54zFuJ6vjUujeRpnvPspg1pPX5r39buKxUkMRmApbZXmDr7uH2NXwqAMNmz",
  "key9": "3TeXs3r6DQpRHcUAdHmzAT42Z39fk7x8ZR1PBbsi5qvTLFZkVUL3CEhXTZfBjRmKsDCJcHUhNC2g5TK67pVEfyxy",
  "key10": "3RGWfjFJmW4gFcMrDh21vMTjxXJYWP38nA6MLHDCYqyWqF1q9vFysc3jQLNyrDuqmXRJCHqNHmorMx6A9c6DbFP9",
  "key11": "2TYwSaCUhRXErzaXDiRxFdsJxf4hjPipYEirBxkcVMd1LH5uZcZtZg6xvDTNbrKMUSn5gKxq2RQXnWiJsRrkBxip",
  "key12": "3fVBGgBR4pm5KWttAKNTDXt8KRuVRKzLzUocvh4Ddc1RANrMZCv2EbT2BAKjprWQmgoz4wejiiPh5seU8CCEKDQ",
  "key13": "22VS7BbeSNYeGAxsTkb4vZxU3dpzBk6Qfqntn8HBBtcokFPjEQqEygBqkGU5GQRL3Hy3u26tfo7uwEoZofcHDgfK",
  "key14": "2vnDn62qU1hiN9PuBXy9jYwtPjrJRZKCUEwKT3qpwAE4kCr2QHtsapxKizuJhcgq9cBuPp2vPS5qHZkvWQa7E3AV",
  "key15": "2vuw1TEJ9PnPhDdnxmk6eeUS8wkwZLgXJKxd1HijRppVnUsAvUQxcXFGMBK3M7HBFDtHijaXfZ6CPYCGKytg8po7",
  "key16": "ydZj7aaJA2RmZSHUhppqwx7MQtYQ9zgmW7oCTdX2WACZMaobA4qtNDgvvkpPUHCcKSDf6bZHDwUERbsB5wQE1rq",
  "key17": "4xbpWcaDk5C6azP2PTfaZzPmzSfYNe9ZVZBMK5sYGbmKzVtuj9JrVU98saiQWvXob35mhAt6fRyXqqnhTZfW2pip",
  "key18": "WnyXbo8ovBhW1kpJDzwU42ctSwKx4PhdvqUcTuxw3UALEw5HQKj3kv8x32ibmcCc45UYaVW3KYr1Yd9YFu8TzzF",
  "key19": "3bAP6AtqDhpGgSbQy2kAVqSwRwsUocxkvksWBwXuCsoMsbasMbV6111Y2zcGoXvt2ZjxZBpru1AuimCF6ra7SXTk",
  "key20": "RN2wMJ71T62TQhDnmRepJ8QeGidDwihDDTTKLSfTd8X47FiZhwaZYErHNRUFy1w1qedD2NdWq8sZYusDRZ3fpsE",
  "key21": "h8ua7YQmNRcYKWkyxopW66PMrMe4upPxWYTY2HsYqTmdoDR1X5sAvudn3mW7mLXCuB2CL5gzAeXuTAbKvKxyVph",
  "key22": "3YS6w8jBHpmk9aRY1FKLM3cfiuNQzUaCAww7hktCoUCmd3AKgJtw2cMQqj1xAyb1bYoqXz1ouFjgZkFLLPtSRLa3",
  "key23": "2b5ckQ5SYM2pB7X7pu8vMTUAtCmiHvc7zSCFjtnHYosPbLULgHqr2SeWF3n5ZmDspRVaobS9oHD7pxaji8HhJY5P",
  "key24": "5sMbVSvWNTVTMa3drDMKEwDL9TJ49Rad18vHKjhHHd7SZYE69xSesfGEpaBVDsUKSagcb7KbeGgRgxrSYndh1Sw2",
  "key25": "4ABo1H7NMDQYrMywT7WTVEBpkoU3tA7ZgNs9FrXddCzjW8ihPo82Uy8mrnNwYY54Zwbbf1zPZYSss5cV18gwfnSY",
  "key26": "3XB3aep7usjTy8mT3vd2LreXh8xgKX6eRurRZ4xYof4Mhs8Ka392DAug3n6faRMsuzyYAqXuJyuAdyn2RqWZMmvM",
  "key27": "56J45MX8kw8i5aV226JGFTbtaoQCuL6kQpvLHD7QZtqwqQH2zeyDRsDDTqhbowkfijMtmSq52YSeNGV4MoUHywL3",
  "key28": "2qZQxpZH7ZXhrxj5wG5eRpTqQBRjY7Acra4S5TjnPS4LAHn7Ghdfi7gtTG8XTH86L1dXdEhb1oVNHZ3PEjojc9Dd",
  "key29": "5xS3FT7bM6kv2v5mZx1K3sLJZhcm9qvEW6CryKr1HYchMmp7b1JgTQFGUzND3u9zJN1Byin3xFEnr6dX3smD2rs4",
  "key30": "QcejkSawuvkcfQvFBRdNAmGb11QXJUTJH6ReSgwJiu5VmKz9JopdkHY9o9ttARdtaWSyrLtyABPVvbFFpLaqPSg",
  "key31": "oj3KKH1xVFTVdrC4pF6EnRJhJaJwHGL9NS2NabQvRUPdqQTiYLKnmdE2ynBbRGcSFsCuUpSCaJEbqnHEpcWPuj5",
  "key32": "2dtpTzMk3rWtH53hNr9u36HujjuAwGijvrrLiAdJrtN7FSJWZdohbe3e9dEQPELTrL1q8VweshA16eFCW9XHk6E3",
  "key33": "w79JDk2WX3GibWjoccYDjW4LsCE3ssAiAoFkhLnhSrgBURaPptW9Jk2W8VPYBfWJbvueTPAakt3ZLxmbZiyChDt",
  "key34": "31nM93F7K2rqePyL9ENtRriQsKhCs5x4WfxN6uazHnaHFKiyVucY5wKD7PHZzrHvqs5cpbsRSgz5A2oXSZpzC9FP",
  "key35": "3LzCZPFVdGJbaKbWcyUvrvwiAn5WfHbMJocgz41EyM2tdWprbsU6uWWR99WD5nMQR4sxdXYZLHwAx9EECPAgGgFo",
  "key36": "Aav1NXjhAzC5cJ2wwULJsEUTjaJJhj87xzZdJngbscBhLdbXXaX62mqNfEYDDBBBUsz3QptAo4zWRV4Fw24SRaw"
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
