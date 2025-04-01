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
    "25oT8s9ypLT7gxMpzGBaTTgpNuGBcN9HKXrF8Gyc5fLkvDSeMYVHn5cgctqK3Ht8YjZNTZTK46eaEeVEAJN3DmyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wTYyj9DTWCh9HeB33NaPRXsYGYNc5GMBPUdufFXX9UMdHHr7YVvcdZEEvp7UMXvSsSNMWoTmXWKjowVEMHYpNZL",
  "key1": "2QoNCuxLX7YJVRw8udN7P87uQrQQVZmQAr931WSAL5mJApPqpuNeM5r7ZX4vSjt4MHwjhBzSAYNsbg1bjTLacsSp",
  "key2": "3mUEZ4QrUipmoUR2MeU4pU3iVTweA9VXNwKQau9JAm9JiGU9cYnvvWnY5k82Qp1mfMVEExHV9u5Wur4NkgLd75Ex",
  "key3": "4E6xBqB8bC9JHBgQxdCsyqjq38k23UzaauyY3JN4mb54sE44wAEbGak8SoxzrTYwVH83TkWfbzwy8PFZSHQibGYv",
  "key4": "58VFvCcg1Y1WxuyMUNo34RmpFt5h4rYy1tv3MsyiuwQUNpTKppxU25aRCYBamhAUmhySbDdzhvjT6PfA13s9xKGo",
  "key5": "5fAx8yhu651D6S2J2eN4Ek9jqeQbWWMv6d2bJbQKbdWzXzqGteyE2boZDqfsD4zhPpouFJngvNYUJjtHZ3GS83t4",
  "key6": "2WE6TgZmDZ1WzegMm4bjK3RMLWgGLsWPPPS6UHQqxchw1QCMJFMra3bAmS6F5B4J7mCSxLtjxrMfC5HXsvrXyzwU",
  "key7": "2D11jJpEPiVUMBMzpJS32opXdqLawtaPhn7M9aZYu5MpRoYhB9Pne8iR7BEYmQdhuaiywYmmN83ohwYuWhGUEGuS",
  "key8": "3aFy6D6VdsbNB8Xw7CcT4iuoe1CBjJc1eRai7oDaRotkJfLxFacehW9zrtTTyS4fra2ESTshVtgaMSmy7LADqQ8R",
  "key9": "5t3pTYrSuhuQgGpWbvnPMW3acRhRYUBHT1PP8CcbW9CbRxKku6cbP3Lr1zJGc9kHwHgkfdstu9ENsn7fJYtxtB8Y",
  "key10": "3TYmqHkdqRZPFV7qWNFEN3QuyGd4bhMMhBdtVuJaubSvSnxcotDmWeZp4sK1FM1tS8JnTXhYo56RSKJhCp7pEuic",
  "key11": "2nR6yYpqPr8CjNwekYeZKmJjoqRWvm5T4j3tQqhaM9baAM1bq8F8eHY8fbzoEEqEAtv7i5vbRWpy7C76eqmoqkjp",
  "key12": "YUkNcthk3njWWzcYS7eEBa88LP2fGTS3oNKoWoo3CPCGN7YfCZvzbeVYK17SoXnw6nYsZatwTwkGMKKVfFYDQKa",
  "key13": "iuH8H93dCigbJY5bUdVSyhvXjZzUzuGMRWgFVSy78LXB77u4ggGs4Jekfyg7wCnFEaspyFyQDQoDAQdEiqDj3EY",
  "key14": "4cvkPe6Ftj2x222hw6U9BE8MqzK6PaAER3VcAcEfAsv7HCc5ozdGagJVyDFVhgxFodC5bq1RMy8X2gM3xHDCMnW8",
  "key15": "4fwPxMRFw3JStXYkLG9eyjr1e1Z5MemBMQ7jzAzdhdsTbEnmRD1qmx7xDxiNXnBFfRHrNSToFecifDJGzWwmJyvR",
  "key16": "4bgVoq64Y66B7KML2k8bsf98EPwQRrK3TkFgkZ5jANVwFYZTvMjKhBWriU4hatEyWJzgCf359micxHaWjJyWAEfV",
  "key17": "4RWYKAroGPFdEmDuXXuu2wiC5YV9d2ZbTbJcahXU58ddjZrKfK3mrpGvXjLfSFazCc1T4hEydVfVm5FQ4sncyW72",
  "key18": "4x6MBpsxRw5E2B5gPiC8VdEH7mP5opmf1dZRoWPxwtXEKvFZjtyuXtBYTPRhTKypepCRBcskyE9PGJVDsT1vzmwU",
  "key19": "ucoShu3w7nxAg25NLXGBtHQLsUdsF3ag3wDEwKK4m1UdfzZVk5mnhUhAHFVdofD9tErVe5yHgPcRYF3dYgwiXTS",
  "key20": "2roWMaaMtvNWRQTuC2nzU357DfAkrTmxsU8KuZLw26skEFjVtMibGguSqPM8xCoYvQZzVuh6qXPdNhEPJaPybFv",
  "key21": "39vYoLurvykfNFtiqGKFXzsv3vJY3BTwJ9EHnrS7A1mXe1LMQQmmGj3NA5pNXg45iFfSAxHQqjWFz21mHqezx9W6",
  "key22": "3ZdJwBUQy663uLQ49CDtw9tsou1Jz7dBXVJzwC1CVQZrRLm2u7CH5Fju9Wpi2NcvDReEt28KSJJPFFeqhnVJeb1Q",
  "key23": "3rC5e7iAjM8nsJo4XKJDGGitBdmG3R2HZYiGE1AT9rFR6GANGNgibsbHhP44ANMdS4GnRHmQvCkfH1mxbw2G3hNC",
  "key24": "22RvmzStZPb6Btp8u5LmuW4CmAwtw65RtwhwxmTD1yufhZyFLNLivy8yb2jYhxW2GBtKb9eogSjYXksrvvJu41Mj",
  "key25": "3meK1V78SyWXqX94NajacTy7v51bKsCrxLmjws4QwbsqeXzM745KttYw8KMJVgbbqo1Mn1Uk7UkXFYtU93DBD4jC",
  "key26": "36UKpqgtfrTwfNKE8iCrZ4AiT9LDTR5Dkz6BzXw8vsjwqZxwpXCDQhyW7WftBK1sCC5kKAxT6VNrDJAQeenZ4k7e",
  "key27": "5DuUnbVnfEFNVEc7esknVfu1GqrLb1eUN6m2MWW1iApRCxQJEMajgoURNTTqPjYn4CTpVYezkAubnWJyJcG2B3uH",
  "key28": "uyJA5WHGCVAWpNQmwfqRJzaQRx98EYiEjGuBrd65b1AwwL8HgHTgNU5JJwSmLLi2dksR4hiVNwSiuNhAdnEdjJ2",
  "key29": "eZctXW3MBs4CvpojgAeCmeZsWonsx3NoLRRu9GnX33B3VcZvneXvvXhsA2VLnBPsKEvE828efz3zhD1UXe9avrL",
  "key30": "5mHRstVqwoyKvduxzR1RxkWS3MnC6UYVeHH9qiTnn5mvTXjHQYA3E25P2oTNUShqXDLEszRZe271kCkUgkAwbGkx",
  "key31": "3GGL5cB6Eqb9VYg3nvqQCZCyCiVWyz3ZqnuZv5DEMSoW1RGNBaqD2HYuBWMw2xujQWdxmyCRWMgTThve4NxKTwDU",
  "key32": "2jwrd9XLz2pSFNHD3XY3MgiNYMa1v1z7MBKQqdVcqBqu7m2XPhTrLWaRYLZKniTPgwaTa2vV7qa8izLARivxBvPW",
  "key33": "2EsEdczEx4zmNX4YohYiZj5mcepMV6cZSX9QfiVMwwHTSnACDW8fPmgyQVF33VPieidR5q4MysAfnnjFvgFB5szj",
  "key34": "4LozBbPMgWfdPGXbFxpDA9NBqZUb7tEMZ5rwqrnfhRZLM8Ni4WbzRf5Z7S6P9EXJ3ZLJjSurWcFUHwH5r9zP1cKb",
  "key35": "4MbRiTkJ5uD9zz7QL32fjiVjTEWMdJaqpBv8eGEr2SQSen8iRgwn4UAgkMGffYRBYsXJcQHnhkzXYDtL3crA6hef",
  "key36": "4H9rSebvxTVdava8RZgpDDTUjnjkFq84KsiGDjQUQphAXQi86gSsyGccRmH6eT1YnYN6GjoHqGEM6z8NJKwBHKbc",
  "key37": "4DT2tu2vJUZLbNn5tCLwFgcRkDquDXFBkgkHHjzR2vH7rKQX6k7JSCMKhiUUkm9xTGuV8Eq7RhVhHTNNkdd1yWk8",
  "key38": "4GGv5tjFDsfU3R6wuMsgQSYToGSJYdYufGZnNnuCRemApLPgixfCbfxccYxEVezJ6ZSd3H4JEstrCKS1fGhXt1KN",
  "key39": "2HobErq6QsfRN8q4FNrikFDpgRtmbpjZPw2CnskHHMrFjcU5prJZCyb6JVUepJ9WfYmgjsWLvi91ZVhpTKc2QB2m"
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
