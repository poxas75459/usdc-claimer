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
    "3MaYtfTSEq6cK6NDKYgaxJXZGJSKURSkmfhk9L6BMcM192vrR87QwqT3kHSHTtZRJFFkGrJMU8Ts3CcLjKdHrBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5beNUMo5g9GEcB2TBaALUS7ufdY9MRgb4EKphKAmAFf4RwHDsSA3dKdLta5izyour8W2CQtacLwBVqSiEMTHLXhw",
  "key1": "35DpVAHN6wK9tKzkQ42RMdaxY6j2cakHPwCStBHLFyPRxmBrYPSLs1CVhed5hipqdnQ2tEQVCSLALSt4wiMWPGM",
  "key2": "38qcPf9hNyoMGLHv9EzMzku5XBnnbUgFMJdaRHR68ARiGVgG86y8a2dtCFaATzFHF9jWCtPJrX63cqBpgm73qMmm",
  "key3": "38Vm5GWTQ5TUoK4BsHkGxGvc2pQ51GmcCeQMgxR7icpsQr91VNFQL75c2gV4VNP8AnN31ogRQuxnBAeLA86SJTL2",
  "key4": "3C8nCSyJoNZ991Yw1VSbgwZbrVNzthJEGmpXm3Dr2r1dU2gQvP9BFh1A6YJBnRGTDwtB63TgJkgTEqs4kS48Eoco",
  "key5": "4wq8KR2CoN24Re5iT1RCwMKUcyx472Ho6YWewzxgPdeQ3BszMp1SLNSKraC9LixiVaC2JKkDRmT9nnUfbN1wLuzz",
  "key6": "2NE5xc7SHAr8NknFDv2ZWK5fqSbnczjCzcxZo2SZNFdShVsEt7yZiNRbfyNN9RjCnByYKBWWVGf1EDpuNRvBVQXT",
  "key7": "3gR2mFR7CdxrbyGVcruoKan6tb5S3je1csHmdT3MqPfYraGbXJ1WVXniSG5JLw89HvbWdAor84tCgvqdWkcKTG19",
  "key8": "4uECzaSVUQWdgjNXqcs1yyRCHdRon3RVfVzcUBfCkmkpzxQwNkKpsywjZ64dzysohoHezXvHVFBGDsYeATjrPwvA",
  "key9": "1256QHCXDu6Pmv3u3vG6hq7Pf7nWd9jc7kovKGiDGsWygYaFAsCgnXzaADs9pAdMHeh5Gzs58bn7HFqgR5hnjT74",
  "key10": "arkF98Ygc97diAiDJfb2yrfc4HD3LA5bXHbaLEpoBZva8Y3B8NZd3C5TtJYxYBVvWRnfKCPtL83GcqSV7dycyY7",
  "key11": "QKo9bs1NbbdTvHb7dgk45iGtQfS5U8pT9195oNSa8HwPbpEmzxnqTKStTDKnRHUaJhXghCoS83awGqonneqePgd",
  "key12": "3f2YrCgQzA4Xjyed4jrWPjiNt51Sbv1GsdcjUarUtsCwb1UsS8bQeQN66JXKLH8mMbQfa12hHMtERDaVTQPsUoVM",
  "key13": "5KGSDeM8FpALsKrzoSvfPLueufQaQKvYkwjkqzyqKNqH9B6HuDBYmrE7Nt3zS1G4nZRUn9GcQSEDAAoMBncGZBvR",
  "key14": "1gDL4Lt46csmHdDyLXBrk9oT5drn58UQssPM2SCkzwDnp9FL6zz8i6L8MBHzdrCsD4ZwPs5YLD1aux9TAMdDgQ8",
  "key15": "5PoBo5D6YbH79wj8kHYwh9Tb7PZKeLaGXNjAnerkD1255Fck3u7HVNF47Y3FCT3XRXEWYs264qz8NdRggWT49yxY",
  "key16": "3xHWbJGtYHJdvPH5YsRfbTQWRAYeDrH7ftSJgRf57vjg9tm5iYLcbYJtvkFkKgiX94RqpM4Vt4d14ZpMSxhYVjq5",
  "key17": "54NJSA8Jar7UsuaWGhYzecGdDeejceZBcmXaahUsTHY3M4JM1Hx9EG5wMzHhGTdWhBf5EXPvk78YrsU8ZxnRmpw7",
  "key18": "3LUDcZ1dyrmeiEYnJwnomTqpfV2MMzq1AsXsB51ho4GY4bHm1VEXDjtsCzVvuJiBd6xuKnWodgGrvPYLvEGK3SHS",
  "key19": "pwCQS2LtaR6jXsREdVYHBWxbqZqfVxQ47K75rrDDNQvZZhQ4Dajf5fgQSXumFyGSspoJbr4XZZwGXbccD5jurMZ",
  "key20": "5LrxfWVD2ym2tTwLbHPWQ1ZjCTzo6SDN7oK1jfFwL4AThWxivspKKBbvy6fYSUrvdhV7NVJ9ZLHhjieeJ1iMDEBT",
  "key21": "eejejS6Z7XtcQKeVUKrW5YTZ7fRt7sE2QM6dSjBMfvgBE66Uww8dN43x55jhQnpNqvcErGjTFEDaQ86QnU7V4rE",
  "key22": "36khinQ2Gzx1JhUVfwHQth3PfpDEYmyFkDmmA8ZpPpX7aWrL7hizfbV7iFiW4rwhRUzY7d6ofaRwUmSjaQijqucx",
  "key23": "7R9CHbSaUxjcDWaDahgj3DnQVL2X3XBg9XroS1pB8qF1p1WBuR4NP19wiy8rUnXk1t9MmTza4EfMgnznK6ctEZz",
  "key24": "GizPf7tSJw6fQVnXnUnXW77v9BN3yAei6q6GtyEK8esJfPbSQ1CwZbSRY9KvAfEtxFSN4F2pmdv4vQcqJJwznrg",
  "key25": "4wAcJqRoCAi6cxsb7Qo6JPDwzzRjLmnmkVqs736JEznzuugatFF8GM8sGDJ883yg1HtAG5EJF7XyEMnbYG7Tweb7",
  "key26": "5TmcSP5TbNsci4ZzMYc5Rc6cADzAsLCHBsHkhhAq85g1AqSe4o5dTKn5mE3TJvTuvVuYnnKH2mA6DZqTpNVE6z1G",
  "key27": "369Ecw8nQHuBQ2uL9PcK5uzb9tAT7ykYNUPvZh8gyyWxay3gQ2cY8t5gmQkNQ997jKHxKwrTfrn1hbR3cLCGT1A7",
  "key28": "22CbvvDVNg3EBwWA1DT662u5YXvRjZyicNtVStfhFq39Jq5PcxjfM6Tabk5G1N4T58MBmKQ4mrxiYhgNv33sDFyW",
  "key29": "7WnSWjNsdQKC9X8qmJmVtxRyfaVaNSbkNv8nERarYudVYjbcY3sEoMsLQ5os7PXXAhX9fFbdTSY1di6fGZUkBN3",
  "key30": "4GyAzjZYUrzWcC2LVLpBKNSueNKM7JyWxHECE9vjX6osmgPj3NjR5weVnYL3rBLMfJVsHxotPKo8vNVRscmrn9s7",
  "key31": "2ehqRYkKBHfZZ8BY4HziyWgqc3aRSmTnJMtfuTCsczCpssSjsL7cPeaNUGLdnPQkRkAxtCZ13FiuyEWjiK8yyZpo",
  "key32": "621wxmig6cwz7K4rFgjHYcNrQc9zcBFQNwqD5SsqzB9JVbRkjjcAnboAMYzFno7EWjWyAvk5rQiqMku8cemF3zt1",
  "key33": "2QwWd92QTzAEuoi1qPb7qmMPYhCXLp6YSfetS4Mpu5zTSVQKuWEevFyKGRQAWtBG3gvsG5tLAhQUXgVJp3PqikNz",
  "key34": "4aSm1CV222PKGANKWyR4e9PiHDbRtd3xfZ3MvFZKghb7HnCLsYDmMCBzqTtpdergaUxhRXtynG1mFdTzqE2MthZF",
  "key35": "2zLg3Q8WhzsdRg4XmMHVHq7zg8kbYJMJBVkduH8sVwni9Q6mQc85ZdmAYJqDUJk6Rq9nStNKZrYSQuqTXHPxYgbt",
  "key36": "5BiTtRqcwsaF6iYsymCrLAJTBu5SDHTn4rpjEUak7svdoQBhpcdSGsxHtksZKvJdpRGWqgotysrhRx2HdZAm8t7c",
  "key37": "3fvxgm3kP28hnGfTob1bBSc8NFqKG9Dp4T9t7rJwyYGzpJWH9acUZdy5kA7D45ZJrHWqsFQSCdnZhLPYTWAoM3xc",
  "key38": "3YdQCqHW9HZLX6L3KUSmuvimbvjsFXkYgnSNnWPnW932C7LcESmpLtaMFRwBvLQ3GMZs4CXzt18v5Qsfr42nGcgV",
  "key39": "3iUUUo2k9Lm2ksGXMdjkvKfwBNmtY7faKJDJtdHBEPMC2P1JA24wBAgmNidNg9957cGZF19ansAYve29M9UpuAz3",
  "key40": "3Axuymj4Gv7h9DupwajzC5YBpGMbnLWDhSuv3zAd6C8K1yUZxvkYh2FUAAiXUKDmi1rR6MV1RLzbRqPm5c1V5qeD",
  "key41": "x3p4fQNnB4ykGMFXeLi8fZw5aVzgxo7V2wgrffwUekgFyvua6TVa5TAdMEY8Az9xV3TV6UAeSHokh3ERGrtajPr",
  "key42": "2vB9dwtkVBeFztyKyuPGGQjAvAh9R5LdS5rhQP4YywfeS3jyf3aoH1frT3ZiaLQUp1xkYYRoVs3C9qbMrTcHomg3"
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
