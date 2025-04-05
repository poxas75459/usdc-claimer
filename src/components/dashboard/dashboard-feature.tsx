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
    "3mDSXW6GRpER1nGrqDrJkrVYCLju54paoLrUURegkT7HK6Zi1ABSTewbixaXEKEb5LdkV4222MsborgCdjVtD6Du"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DY2Y4XQqQ2nNdw73RoQp4myehWuTMHffL1GeyhEWR1Ky5JAQhzToZktP8W9bXKrNoXKpLYff7dCCRx8mLHuB1PP",
  "key1": "3dexDbh4wyyFmpssFoFsSprkVsLwEqfDQRyL73s2EnL6DeXzk31te6jm4TR3cNhxzmUkS4RTfuR9UEEhg22NnDnr",
  "key2": "5qKnQof14m1PZ9wCwA5vDe3jQiW8pHTDcMNLJmexCudKjUAkHaLVBLk5jDcc15RJJ4nm9UdKyy2hFcqBK59V8JF1",
  "key3": "xvyQ7dhhaMpCR46rc8b6wdMreQhycRQjVYU1TYZ31DCVMguQUz45evtKFqAswBoJWjjCGmsjfFoDwF1iPjwHjBd",
  "key4": "grg4rkuRBfxoz7WB67dxGsur2fyXDVyxVimzEnXywtvw6bVJ3unxtsp3inunQQp34nmSdMtMSaVE3iKVDXKdeFF",
  "key5": "bvyBWTCVma4L2RXZGhfwmECJ6MRE2gfQwHWJjE3dEVo1iwuVYSCBKMPTmWmAU8LoAkkaS26ywuSwLrchRNQDDSe",
  "key6": "39RARiQ7XRPvfcRqLxBmbtrAgaHyiBHbeoxgB9KmXizEk8dwF3RqhSUSDUJPgEyUZf9FR7gfoNZNbHGvfjXAcM2h",
  "key7": "5uVq6yhJKXPT82eyLrsXsNwz2bHbiWKTW1CZGYMhHK3TM8PBHwxj5Gt17xmQmcmEPGmBXq2GLq54QG1d9sBtpaGG",
  "key8": "5ZVhTEPp8LmTQCLtc5Mrakw7RbxSF8yRaGYRAGnx2BNyQo8htphXqqN87zKJ8VakkYaGMqWcWwQFVKwRNe3HsKYY",
  "key9": "2XfuXPqKruG9StbWRsUAhwQ9gButSSFaGHxGZRECWyXZKC6NHNfFfekBgWagrNRTGK7UsUWULbjGjpyWayMM6Ady",
  "key10": "5vPSgqr85BJbYpkxF9CEoq9LCHaLMDEeAnK6XMqEE1ipCAoCY9zkbH41VesSGBcbDf4SRZEPsU8xvX5LZY7k32Dm",
  "key11": "2xovLuAnwLwZ3e2aDYfMcJWZnhgaSdN3DvFFSzMVD4mqAfnejRdRzJfMA1fLG88hGkpXGza8KYbNsEwRL8BeEMN3",
  "key12": "2QScB5iS1gsA3SoK91azPY3dF5oJeCRXtsbgh1Apd3LXdntW78ZnddDoi3YuTHLdao5z7UKYDb7MqbJkUZGj4Mzi",
  "key13": "3ATmo4ReTH7mVgAoRMHvchDzWPu1bX4dDEymJniD9QZQsmufVR5wuNSbFoPVH2okkLNjX1WNtB3kj4E2DNnWr4Sh",
  "key14": "2uJfxMdqkigZfBwzqTyfbNu4wKTugYA6JJCLeXVsEP4Gm6rrZCSHUPVfhRA8EedPwgofafJPnVmBRjYMciUxkACU",
  "key15": "pzfLhBt7LGZLF2EiSq3Zgsphb4tTxCQFBqUfozgVEcVtPK3RH1C9rdBZpGP25uAQmK2CPJnky67zaamfF1jxTQr",
  "key16": "5cBN7itfgqdFoEk921qvgAjvGQ4PfKRw9fNdeyMd1DDqJ2v1XAZ6npebu7mMGRm7hQUPdnZc9rcYEgqb2tZVyWXd",
  "key17": "3dvCXFbdDD2gBUqW5T2SUh9PF7XFA6DsPuivp5BMdNDAwcGjGkwyd2vfGqdNRLrbqwYjdNCmAejjndsWMaXat9Gw",
  "key18": "5yhJXur1HqCUd8CmxcPWb1v9imNAhc1GqbMFtnx7pr4HNspJUNFwmtEo6ATFGfveDVR3kHvK2KmR9m6tRgAEpFFG",
  "key19": "66xX7bBAPnxckVDRcV8XtXGTp47TEon9r6ZeJVb8WybLiAwhrTva1bNDSdRsrVkHC9epcTQEhm4TmLKxCd2n72cp",
  "key20": "2MvF6yJboN8oNFx1Khymd6kF4HaLbQYEbYsFkszCTGtDs7t5KpiooX5uDBZvKDdKRjqAKCXa9KLj9AHxWWHoKwmS",
  "key21": "612SqgXA2vNDFNLcm2nrakP7TjdBYizEFfZtFifFe2SuCkeKZJUDE58n8Z2S3cC4e5MhDwKQyntpYyLZLSrJsLJh",
  "key22": "2b6SY65TuG4ouAUfr4ycMLYTb3ztwBrEWxgMDhoHULwsdNjGPwZZGF3DS3euT6XRwfEvqcAQZZYMNXLtr2wHNXVn",
  "key23": "5pmBV3ZV33WgvJzFgWywK4kJTFwz8KLdiT8fHQ9BeLZXiJSYe4ZMJa6YAj7xYw8gM6vnbXVXFRZin9SnTmD6kEdv",
  "key24": "3XRTg1ezQKRdr77rca9FvvkGphLREMHgogvUredFgnQq13ag4Ri9NMaGoF3cVxCikFuY36iK23pKJ8EC2ubiWzoW",
  "key25": "24ksfE2kDF8tRVCQYAS4LV1K78BKJgZLDAFJqZeDL8Tj4pXo2BmGXTQzSVrPQWpuoQnsXp14AGbaDR2ATgSxVr3p",
  "key26": "4X8iE2jKYFQd1AEPNTx3eLJC64E1pxSaZGomorjWyZVaor4ibCrEz9thoPHAsGAfRPA9a6cHsxSN9uztkgPCJTr1",
  "key27": "4PgcuSKuQfkAh1y6rcGCxqAPwh54yzTWojS3mgtMceVGqqtRHogKRaHptUZ6pW66YHvzUHJyJAX9n12aAoNhAW6x",
  "key28": "4bRojSKdQMpSQwmy8xkSC5Hx2NS2De97fC8h3ee3TBVNhgimHvafHHsSEXMK65QCf9bakPhzLumZRKgGn5xVry9E",
  "key29": "2qME8L2odo8b2BoA1aFeNtA3chsqwdvskyRZXmFAhPyypP4F2oYExdDjE7wNBsCSdMvjNbu61GzpmbRFE6eb4i1z",
  "key30": "3DQdJEo6KgDVZ3TupViiMo5VSp8pH2ifieRLhvJ9rTkoGrVsgEBazHVfCFLSsg4acA72cZkRpjRwfcJXi4K8ivRD",
  "key31": "65dENksa7PkTUYUp4VzCDWXNtKnv7rvJFR94KiUB2MnqTnLsDgnnKPBC22N4Qv4GLB5aKEueSj6eV2HUmvAoZRi7",
  "key32": "4aTRvjZTdyiWanBsaNXQxvbpxVGdvZgiyB92DtvcU66Y1AmR8K65rf3DuYupE7cMrgZTXkZ4JcxramirC1HmDxVe",
  "key33": "3BZ9aMtaDiFLw7YkCwydLZ2Lv6EoXWGL1WBXTDqUd6xRYmCAyxJ8umhYrEH1FvzNTJpeBvUQknp4e1JV7Miai7P5",
  "key34": "5QAWSUDKKGu51WHka7MZFXEAWcxbKaot5wQNE1g9eyF9ZTDTCmqmjGdQLjiboTRd7wfu3DcsHwLVVKx2MvXEPtCR",
  "key35": "63WTMBr6dZk2x6HYSsMjyZF7evVwrUcPa8FqUuG4hyd6vKY71KSG7tAyZ5BWAjSc3kihd3aYHoThomtvBAhNXdWv",
  "key36": "4Ziv3Fkb7kn6MVdEGSzMyFCm3YbFsu8RgomXU3HU1Bd5UzvC4uDANuYdihJRoxyePcV1y28sPWNXdSa5keDCUHRK",
  "key37": "46u2YfQcJmmSMC6mEtfgU5XxtZ2PFRnuvdFtt97RSa3V1WQTfUfpUpv9me4xMpwPkWxzP4HGjKwt5uyWqCuPbmiU",
  "key38": "2Hcadrz6VQTzxMsyxQ25Ch7cuRwFaFwQycxzseRwZxaXDFRWqm3qGqNCiVZ2awUeHD1oQVxJyHqCKJ7stTM79ZaX",
  "key39": "2yiTxG77W1gq1yhX3Ujcp6xxvRCDypkizqvMms1YBG9NewJt7t1keX3SyUC1QsRo3ntR8QS4vv87Qz2gkAJmeKNE",
  "key40": "jgS8Q9h25X86hhodJ8bk4LbhPWWpCPy6N591tF16ke5S3zcDd9Kq13nzJUN2rU8CdrjLtEWAKWUx9QJSq2PwyqB"
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
