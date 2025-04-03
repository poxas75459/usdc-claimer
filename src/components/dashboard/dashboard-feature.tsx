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
    "3fRBFmgDyXwP4PESguYRD47HXss4Q2fFSLEW3NHsErU3pxDdmcHEv5sswConXjB4GMW6gZxAatqfiowDV2Zn3kHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YkWa8MXSDRzF7D4xh96VP4rWz6191yNmxnJcnK3vmfW29XGKPmAKbinYWoLTtLBATURC1WSdaSzJ5u5jUBbK5Jg",
  "key1": "5CzQ2zQcewhgwUEBYKRXgmcw1UyNcwonW1AQS83wvHpeusLCJsaNAozAELBj3o3zSuT4cttNyRUcYJocGiWna15y",
  "key2": "VwFUAtF1JfnJeevar2hFYyRUXaRPgKFsUseVwyXrpVU8VezevY9XedgiutMe57h2tAvZf5J626GyZyRxd9LKHAK",
  "key3": "QExQEP3DUPGVm4mG3XD5yppc3YXJqoHFXMDpBtLsdaHo5QFF22WQMFzWzUzwyZ3HL9Y6DPf8zZCz3dpvCHUKDDr",
  "key4": "22wFPCGdUgT3iPEsPKibuq37fgB7ex69SjC9LcnqYRaAhp9eMRH4YoAvhtQjMZtYDdPk3JKTbsiyXHwLRXyDkCBq",
  "key5": "3RHLxsjmUtXb8CBNj5GSeUFtUeBBgi29h5x4enFKNTt11tTnn3JDUpDyKtfrgTdVpCqvQSycFXKG36XFEqg6vcLd",
  "key6": "58mTGcHTB5biCfm97cDpiU7qZCT7srwNKbGRzqeQvyAo4krVtxMii2bwHwwhYoTcKCRtzFzWYRYjFrHLTAAnk1vu",
  "key7": "4xMYwfvRD6scD5ptEwYdywy5qhFX9AeEeB5uPiyo8vGUF9jw8JYm5num4g55PuMKQkxZRvhqVJkZsn9QpGs87Urd",
  "key8": "3r5GGUgygz7SKmcAnyrbQyTUvC4TvzJj9s9RsAQvDX7hGURcvAyt3CMGac3mSRNc47AvBG7tDLvrmABvtP5GMrLx",
  "key9": "2FSbzopajj3h91oTB6KqKSk86VVABcqt7tqnwEf95SLtxXH8bJrv5yCRzPPiHakjhZUKQvMdiHzcc19pSkZkcumN",
  "key10": "58mg5VXqU1qmosBHtYwSDpYaWqceBfXgDvgDkF1PLkpJqyzyAqGjbK1gjqZsGufZN18L2DyGJ5UxeGEGY3gytHn9",
  "key11": "4CcB8cUtQtVzpNz1BeH64K7g5Vri9KL5NAzvyNnKQj1WdEZjGfDaKXExwSSSJjNGBsQC7krruuSZRY83Qc394jmq",
  "key12": "41JAswEwba6WmMab1YTkzj5cHmCBPhgwMzuTUYiU9cv5nZLtTfduNjEL848uxVnjxjhTMNy28k7Qw5mFnPF9eY9F",
  "key13": "3gkF45k3BLLMzRVSkbGkSsEcpQpyHzXq4ycDAwhNKAy2o7BhRfXJ7VuKyGgZyffbykVpBUhHiF86AsyJjpZUAbnZ",
  "key14": "5w4q9RWvVgQkiDJ8EuQvYwtdGyBNtxiGsqfT4pVVQZUQcBTmoZhL2cN19hq8DeRLMn7Cda8cWFY8zCaHPbLzRveE",
  "key15": "41LpesAyuN6AYBBskqBhRbhycJMsNQYXwtCZ6En7Zj94GU1YirUcoXvDEaLxEM5UWoeWy4FjRR47brEpay8qfY74",
  "key16": "3CqzXCmwLreZ88ahYy2ehGAdPm3mmPXLV5EEe2TkH6pzxYLbhmrp4KXwEKBHJ1rrCiLn97aqa8QcT1Tk2qyoiM7E",
  "key17": "sFtjWN17bWCSDUogPDhBVt6HkUSQxVJT2nB7cLnAuVtMbRbVj5H4R6UTmUmLBWo8nJmQx6bu3PCd2TGBQcVutXN",
  "key18": "5pg2aUzsqMcn7SG3qJFTkaRLYE9Nmixm1ztmk4bpAx9rJsKBgssktud5sYonupX6rxC6HK2Sm5zoCN4ghNoPziVq",
  "key19": "44fjtcDkrV8XJQRvhULzNMtQ24tUpsoGHTaGkmze632PZF7CMpu8QyRkpqLx9jd7xSGQfTtFBFYzgwqQiGhcphUF",
  "key20": "eNW7uJPrRVAnV2t9Z4coZ8bTP9d9C77q9AWWAdqee2nyNqABJzPPDSiportGJAjViekUg8Rey9RD1mZF4PSvw7z",
  "key21": "2GSZEWV2t7eUaXdnaycYVJitCKSgUbZ9g5U8vLhdHufExQE8BFcuMrSE7oEcuUM9U1fNzbSEjvgH5Stk5Pv5hiM7",
  "key22": "4kaGWu5vKZCAHpB5x7d6Kjkd5jdrjAdqqZ1Nxqg7GDy9BVMguF5U5LNG54d3g9tarvW257ghBAsQX4bgYbiFMEfA",
  "key23": "3cU6UrLVZ9wKnGtnzMX2uSMi9quWwbiXyM3dkxdGNdjynu9uTxB54NAtbTcBbbYDwFxyQbZERbLnh4JA4D9gYoBj",
  "key24": "EGuduGPsSBH6YtUYzLutaTN5FRn2iQyeqBiFKDHkuCpD7PYDTpA94voYzcnWR3VX2FQZAgCUGbNuL4LYoKwsbab",
  "key25": "5pmkoaD8cmmehCKdQqTR4AmDzpxWYyeyDVgdgYxX372L7BjU6UP8ADbZC6cXubTrLYbWkYpeL459XWMkbWZm43wR",
  "key26": "5zK7XYUbUwhZfKAR5guiCZhHmSCDuVJKz1uh5Cho2xLLepqfAAndKfxCom7fLRKrC3pDMHZYckHrp49WL3WaHDzV",
  "key27": "3bZcaNDCyPa3RvybGza9driTXrHb2RcCS75vLEg7xYPXihaYpx22LBDNgttrbtNmCG8JkVAn3RMaQJeQqDw6oiGT",
  "key28": "5rdtscnjWTYpweUKaEV6BzGFZ3Mnn6xsKiycSSv81baCet5JBzXYSLAG5Qfwn1SG1qs2gA15Thi19ubU6nKGXXGR",
  "key29": "3vAibAzBzGsz91VaZMg7v7XsuzbUDF9YcPNHjMErnYHk7fQBAtfc5evUYDDdc53P1eQiuuM8sshWnDNLAr8buFic",
  "key30": "4G7nJ3ryem6g3bwKC4T4Tq49vJw2v1fNr5P9tAJxpYCqFwcV6Jn6ZQFzSoCBmSKhgJeUVXczABHoArAKcZWVCt1f",
  "key31": "5qrutsgBttEhkY1tE8w56d5ppKM5ddJmTNzZw615iJYtVUF5vLFes7yVRtqnrgmgsm4XaifSr4CdRXh6nra9QKeb",
  "key32": "5LP4baKbWYYPLE5gcQQ54KT9qex8eVwiV6z18ajuNFXBHC6b4TVzgERwmqbFN2NG3dy6QDqiLPRxmLbfct9J9cXW",
  "key33": "52H5LpnxATrvLa324sUByqLsC32ZdG3c8tbMbqz6qaB9SuU9rBBMp44tdhuak1nXt7mS8qFYAef8akdUmr1gcFrB",
  "key34": "4G8rZe5LaLeXyZKxZzKFzaY7Et8PSLKhJht89THAadoQTLMTaQKmvUs5iz4YPgHkmvgFcL11uLdMAfstqMFXCzR2",
  "key35": "HZAmshvesX6SiKgnosrGVc2u4hJspBJngaNXTmU4bDTFSuMPd7uCjzg6r6sHgeYju52z1DEDYJbu9h1gHjPmJNp",
  "key36": "5ujwyFNybKWeP5BCh2BfoGiRcdFdMv7gg434HSfA2wn4jcB1iufi1euhhrGuSpcrvzrsz5nhLXbEHVqE46wsJCrR",
  "key37": "4CuCkxkFVeipLgcpF3HmeRbewwoT1kL3kPEkvaderbu6RNkS2deEde7bQ2Z2J628e95nZnN2VfiWzshWMMkset2x",
  "key38": "CK82XeWK7nxaGe3zaGdBJSMzsMxYnpe9GYDr2m4FNTLzMW7M145wbsRDbG6FqNqC6QTkB81CSZvLjPJgZLdoMNg",
  "key39": "21LJTRajL9TwGTzrzW9X3tfxRURgq4byVz6tiaUATjKa7LaD36LobDi5VFh8MxHCrF8a4JUjVwkbeB4NrkDim45k",
  "key40": "3tStVDaQt7a4a9LjHzH8xFyzfcDsgFZ8xLFZWrvdnfQYQKfMbfmLzKJ3KVUvrdtYB73U7GJ2Ga3Jp3KbF5yjqZ1q",
  "key41": "2u4f9TphuAj3bSU9EP9gi54JbTmaP5S9bGDhB9LTwZWQheoGtYnvSanq2mBpvc13pRECAHWNXp7htbS3htE6p8iN",
  "key42": "Uw8UfDUjQp8K8nBmypDUxGgsCEW4pMFn7U5qg75EpieYfQ8B5R69JDQwjy4uVnkZdEpZpDWTNDQaWb2saYzVJLY",
  "key43": "3VKzd5x7PGczwJzcNpqq2dpuAvJzXtDZ7A1yW4YuaiVqdRCHkrVYpnbigmSXANtBEhtkBpz8uaunEV7LR4uHLWkR",
  "key44": "4tAJmdUBRiXVrY3xkCY2cuo2G4YPiXcr3zdFV6bwzLh14Rfrbw6q8tVKY7puGE9Mj6hkrfeMEdtVNTGrLhc72qGt",
  "key45": "2GJ3jsCYt3jb7xC27Wd5UvAPvvrJtesmP8jAHrDkn2aivPgCaqStSBgZjSycqUtiemRL8Rvy3SWj3M92No41Mq7E",
  "key46": "54HVgPAhmb9zNG4n1rFeNi46sJDJF5nhrTj6rkqPFKYfZgNRpwmZeEgwTconsWqfySa5SymheLgdCJScsPgrmvc3"
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
