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
    "GPQqhV2zkqW4zdi9Kqu6rJKFe4QcXbHrs6eoQp6RV4FHZJcazkba3K73ET6wmZgJ89JbsBEeJmRumTpcjBGuLXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gz8E1RAAgR1qEevwd1cKtrvnm7cFVFafFVq3bUufPEAV761p9z5Qca79NmshxK3tgCxyYZTkP9FF2RrGgc2Xeyr",
  "key1": "4PBE8HbTsbojcEKzbXvrmndv6hxr5REKGG3ubtEf3jb1wkkrA4w731o95uk5fks1EkEy7WhSJDCDhifo3qt4TTeX",
  "key2": "4kv2sidpbjHs2GAAAD6pz7vf3w1kfuzF4aH9H3mE8Grc67g1NCGyZCYVARAaoCFBAYNMBwCQqLocM3e5a4fpPaNb",
  "key3": "4DuKE4TdN1Er57kqUtSYKJH7JUUeQNzahE7UJzQqBhZyjjGbZTt1ibYWrvhAmP4M7PiUP91CFXnVnwiuswi7D2cN",
  "key4": "5UvqEEogirWVFr5y47UH8yA4MPc9w8Rz3yyN5zG5jj3eYf2ALZCX9vy2o2PDruyBPLyQtbwcLpxGL16p1JFDEpEQ",
  "key5": "3ycAEDq9dfBidPBHDu8EDPBVmSjWrEWFkQjc6g97krHTG98wJB7LXuxC2Jwn8g1xskNFyNb5NaEy8eGxfyTgUdHd",
  "key6": "3oxy4Wgf6efCmPseEQwvsxdd9GeKuPgWKFCJpuGpYpqdqr9DdzeF84cuTTjdig75v4vzxD17sFPmmetTP5M8ENTW",
  "key7": "3xgD4hDoNsLH2vqC7FS9GfTUTb3C6btxLCSe8u3UmPNLxAFhFE2hDGhvhDutEC3aoHxXyPsiwJTNUwtPpNiTurJp",
  "key8": "3PYPGGHvf6x2u9urvABLQWo2SdhkHdDJXfWqbtFjMGzkcMmUFJk2jeYL4FZpUMCciRkti5cKujcuzEXnFehKedAK",
  "key9": "24v3HQvu3ABynJHrqXN6vP4nLGBkB6cXvDYy7uxcXAchoyyXPeTUmoAbwcQ3mmv7REvUSdnR6tz5fVpJm2CRHuWa",
  "key10": "5mR1FgALSu46dKVcK7DsjGXkC9Cs1Q6HmEk29STNynNMNPku4gVChB9Mm4W8BDFXcUh9pq3JK5iyoNknG7v58ZbT",
  "key11": "zwXghZFhbdqgh4bbQzRjqfFS9f9mfsLkM3vY7M32HYyJWbh8mTpW1BYV9bgK7ZDieVerQGkYrbaeQjLK81mpuPf",
  "key12": "4hzxPrwuhBcHFz7X9X954cGt5EexckSTnY61iWiCZhMBEXLarYKf8i8yBCYMihfsktJTqQQAaSar4ige8o5nUeC5",
  "key13": "2m6XcGVF2TBuc5Fbd1BhAZXQrFSZxP81eFnJByDnJ7vUKQeyBVWccR8hHQxxQ7y7qxLJv7t5D8qpicNbSV6TuXNf",
  "key14": "2Jz7KvTibJ7BzWjvmEsQ37ErT6VLi84JU6VpYrM1RFH1FUbxEKNWgbQcv3zEGKy56Db4YMkpthLfCRiQNgaHns9v",
  "key15": "36QQ6VZLMoRmQDS4SxeVTAyehRTpQe7eDhMrS8H6i1zbU76MLMaBzsiWFzhd2tXgP6dHMB6yr2oBL6t36zTGtm4m",
  "key16": "53knBgA1yhdxSQwU3j3S1HxpVEGGgxo7WEyiV6Wa7gtWr4iXYkNwG5kBEEkQC4hgeuXNwiJbsNE2475Xo3MLjiqe",
  "key17": "2YjixTPX4H6iWQ6GksZZRjHmgUpFS23Q7GbgjNFMmPCpx5G8WGVKxpUX3scUtbuLL5wFTV1x6T3KMZCUtzomemm",
  "key18": "37Dr8qwa6KXvqzbYqZEDiqKrCDzEMLDGQjKJhp8fy1SZBSeRqgk5qBXGosuruDQf9gAy1dndX93k3f6nn18TSjcB",
  "key19": "2HLLUjHhxYTZmZFpcNmzYSD9MQxcVWWXuth7XKqVXRjunb78z8HFesoEEFiYLQt5rZJh9mKFnF3TFYEuiuRN5ozG",
  "key20": "5L6zJd7bTMzoUupGRWYvpSZdMZnknCfWE4FuqXFiYkHsLNoZH7KZzM8fh1Rn8ZgmAvALX1uHuwavD6ssuBxLuCFs",
  "key21": "p73Dp35xpbWF8wLQNVhJcFRdjX1ZRSwuEfcLRpPUJeNptYRBiR3yTNhQ1Xgfb4EnTEXEMCAusJ2QKx8KmBpxrhv",
  "key22": "5taSi2yk9cRLeuH5BC9NJebYt5vzjc85FurBZxoeSTnHxeEigadfAmddMRjbD5D19x4BPan49d1ydxLWKau17YxL",
  "key23": "bjS3TzVGr1Kq3b5WZFb148hmUu3ijD3JHY8uiBUN2ZV1pPzbHNzEqDKm6FS5QYxRkezn59y79eivpoqq4bqT4nv",
  "key24": "5RMm6P1z1NiEH9Ab1NiK8RsAbpxTqrrMok3XJU9iUp3bxPp4xEym21eMQdeaWHcRQYKHZtQhjS7NTw3MJByFuVKs",
  "key25": "4oZ2p38GrYLGfqrQ2UnFzcpmVA1DvacjxQG6uyhvUy94scDtGn86cYQ7ogJ2wRuRBVS3WSoRYZ1YU9i2Bjex2tyr",
  "key26": "njhRFHE1yJWFXVWDY6fo14GyVCaKQX6JU2pbfuGe68xGroMQctyKTuG5qfTfqF7aNy5koKDVqSEAyX4a5GsXJDB",
  "key27": "2J9cBHCMC6SC9wXFxMWDGgyU9mBrZascW4BaB5e28NPm9AwScH8zyBWPE5tTLfZcYRpeTBAoL34YHGsQ9vyKD4YV",
  "key28": "58kfFcnA2yUStB8FmZfS2qBQg5gJCfDe7UYkfEZi2mFkhBMFqLVzo9BUhhZpPxTGVWnSdxiXCSfRY4JgXcKhZ898",
  "key29": "4PeWDeVJZnJEoAsoUPM2ndBCw93XedNV9LLB6muHLsSVeSuMr3QxwPLYSditRkgv22wuDk9zQGSsfiYcytDL9SjQ",
  "key30": "hHfTTTNLeragHwigrt9udJamRQaXExntN8TpiLEcpztkHEX1foB2grvvu1BNDbmKkUEubniaVLUHto8VmSwnMCp",
  "key31": "3EhotsArqHnwoRqYDFTPJrJUKLd26QwkPCD7UvPM9aHNmFbfw2SoeqrvhdpiBTJkBSihEik4i4NdyyufLbRPSQ12",
  "key32": "rdBHU2SF74LgoTLTDCoatD5Mq9tiSbedmDeu9KbtYMjcz1kgGL96A63b4AYEwghSnxQRwBuaYc26hWggmfWSJ2p",
  "key33": "3BqB7WiK8xnT6nG6xsdrBcXP3GDgsSgKNVwSFXarwvdUJy31KCWPreiXVZsPByGqdjJJhbiRbecwAHeWPA15TgYc",
  "key34": "LfCVPZRgMTYUAdbpctSyoBSmeH6icJHyC29YYQuoiKgzxbf1V9N9yUMRamStSEtdJq2qY2p2KuJyUfjF4tGjbzS",
  "key35": "43i56iwiV4vK8We8K3MzNN4o8YP5MdUMBXoj36WjznSUbJDcMZ6g2jy92QBrVoYuNkcJqHxbX4H9YRpXpfL3aNNP",
  "key36": "2nEpnkeGTnwqfURVYsT3Toitg2SfHdetKbCf7PMTb448PtHiMzZnAG7he9TEbjwMYUb9CAVKuWVr9U6tigne3nFB",
  "key37": "4iNTW8XKQS7DV7AWeWwSdoRiAK55G9hNjy9Cv9wjvxiwaGrSU2z4vuCxwzpSkYnVFaER7htaoww9xDSmaZMmov15"
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
