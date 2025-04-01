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
    "d11EsrdV3612G5XjEYfDXHbBEHsdmsL55PvKDA8vrnfebTw3hCN9oHP3tsMLJ6bdxQVrbJkfyyu4Z6ZTsfo7ogG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P5M8iHySRMz34jhpSXNYP42qwqeaNywH8KeMdwgSkNXjH7S1A3bnpp3a9dS8e5ydHCwsQVfpXFPfyXtsU5rqJHt",
  "key1": "5dAKtojsZMDLCkvJvr5wbBX8Xce1uJKNdiP8NGocAKTTFM4w2BBLwZV8RMG5rmHVriqwoHE5F1PjPB3mNi2pTdF",
  "key2": "5tNzKF3GuKabLDRxtGtvdCC1xPGHfyUtUQGwM3Jm69rnhtGDrVKuaTdyta2sUqX5NMeaVGkqJLXrQCf9N4Q1xgSe",
  "key3": "zBKjXjbraCadj9yVjHHYaZ2Zu1gvwoR2GW2SEsYphysdGG3VpoZVqPHVfEmGAvwoG2uwEBtxhyfYm4u41fnNMKF",
  "key4": "2t33JyCXoqnjhwFfUpsju7Dc8yCZMxauh8G8q8NtLqjRxpBnwnBrSvk2YWmnQ8ZUP2d7dwnQfZ6BiYWdsztjUrSE",
  "key5": "5CNFyzr2bm86obvunTnYyDueSRbbtYcD2dFYxXCDqKQwapXMB3ivG9gNLb4Zew9pcboRWzRPrVmQjapLjMBN1zQ5",
  "key6": "zcniibPoeamU22uQELX6gjuF3qpnAZf9tBqfsTAmz3EZMmG2HkHqmC6xynzFqwCrsbP86KY6FuDZucUnZevdXrb",
  "key7": "3mPV9CELVQyk2V6TLZTVGTF2AXKFn7ji6rAW8QNhDjq754cp7KXPwPvSYEzC5Tgdg2WWDkJULi8eFdYkU1qk246b",
  "key8": "27WWNaX84WQoyBhs6rT7qNXfBD1NmvqGEvTrGkukja7eUbZTmXMPHgoxNprYLPbzSEbxkQv6KhrXuc99awvgzy5A",
  "key9": "5sPgGxF1HdYjQwsn5okSUT1KgDJfWyPyAncQ8BfZRVH459efxfj4r1C1P8788zeZLSLF7YVQ1Y44NzG3fimsPqmw",
  "key10": "2AHXcUEwTCJCJqVnzurBbcsTcpXX579MK2N1E2PdnZffqJ8WPN8DpoW281G2s3xPQmDKe32sHZwwQnkRq8VLtyxk",
  "key11": "uV2WsM2LXUQY8AS7tK39Uen99ZnwfFHHqUpxvWDtDFKF4vFaTWgR11YfzVpj37JDVZNrciBEjzJYHTLqoLY6huW",
  "key12": "5dUYk4pcmuAtP13uqnSgBdHt2vQztC6yoNtSi1UUBK9ej5mYbtwxaETZrewDvzafq1BoZ4RAZsGFpKX4DmYYAhmp",
  "key13": "2uNsY1PhkYoaGZYumtpNvsikQyqT8tBG3aoqANcHkigxyoAtXSEFRX6dJAMgaaKSViCWfNSXtgeUXGutHqQvSNBo",
  "key14": "3D4FBEnFx8v87Gm39vG45oy9sR15q6AkVZZwfbfr8sDN2wtZJ2b3sBuVHY295UJ7VwR6z4UexjaB9zVySb15a9gi",
  "key15": "N8TwugJ7LYeMvLLPvxTtism59aYz4LdigFV1kbUnAtXtfYMRC1xbrA5j3aWaHPH8kh1rrywtpoK61KyaA2PCBe5",
  "key16": "GQrCmLtMmAsDt5JQTFUWvRSokTcVYdggZZjGvrUpN2CQLq8L7ChnECTYPNVCQjz19AQK6hUvvLxweyXqUdYymjD",
  "key17": "ts9VwrpN1fqAGQRWY97voB8fhZj7qeL5qSoUqoP7Ug5Lr3j3FPPti1ERjDwgRW6Ze1rBhgffZxr81Lxr9aCXkyD",
  "key18": "pkCipQdqjPPY4SvPqPVoLKDmctqA39TYztLTV1XcZW3EipyDG4g1sv9YLWTs5wj2KqYN24sT7cPDgMZrMxeL1QR",
  "key19": "3bHXnBKQE2kybELMAg8gTGyXcrFnBnmZWeSPsh91LYE97butwgFnHNjUTw4UwACfk7NweyPPVXJgPn558ja7wMib",
  "key20": "5As8H5onSvbx1Kv25ho21zr61g7HEqER8usVUZhQZH6nHvv8NVNq5P9TyX5mSTpwqhkQpiftoEi3i6FioyUZbJRa",
  "key21": "2VDbqKJu1zbjEiB82dqJv2iAZPbjaC1qkkPS4t5BKsQqv8GFfwkdx33YQVAvZCB4F2byS4zKuFCL7oKJU9c6d2rP",
  "key22": "5Ma1FNS63TnGU3dNNWEURAs3wnBxjC9Siajefn8YphwXaoCKjA9NTUmi5g78QNGPHVfoD31LTENDtHSqT4wx8AJr",
  "key23": "DPCxkocDbVD6BndhLJVokwZ1PqGxogbhhu2nYmwQaTiHyJxgpLY8cXFvPfo8ct3QYVmeKxgoAfV2bt2P1R6DxMr",
  "key24": "2aP7ipXsMre4qLPFzBWhoUMfG6QkLuc2AzCnS8awmzeS5FgCVg97bXwsmgmqEDkBDbXHb62NevGsiw2Y64Fo5T7X",
  "key25": "hwDBJnjQyFotJGakuwpdhVnFaYUHRfvsx2Q2YnUkf9DsMCkkvSGaE1wpYEKyJhdFsNAknxmphAHvus94LNTuKVL",
  "key26": "2kvDcBrj11AK88NHSn6RoQxphMRFohaJS64KysTmWXUYxpLQJzJeUkjbz3BfjXHV9wRiHA3xduQ9AvDaTfe9fZmm",
  "key27": "5gBoTuQVstbQfH9712A3LBVNfJBxKc3xvUAxeSiUTmUHNhfSnDYy7ZbqiN2ZJfeVfZByXxZTt1Ve7Rcen7CprSJc",
  "key28": "5uHeny4rQ82TqLUWpLKq8zqB2LLR4vs7bNiXiNQNG4yTkLcfSNoHdWZCsvTAjHq9oiDxjKW6AdfLUQ1ZSF7zdZBs",
  "key29": "4JxnzYRnjd8vYLtJ2A5omuatipkUgaJEoUTCHPrVxE8rEEicoVwwRWKXfe1k9Baf99Dq2EmqbyY2RTQ2W8tTU7dp",
  "key30": "3Y855CoxYatxYKRa6uhkdjr57cVedn5UPqK2Ta97QzpBkc4qqVUTtiNWESvGwgA79YqzBVvEh1HT2VtxCSa4V67B",
  "key31": "4Lj8vfoQmCPTtZ8MB8e6ekQmrE4iqZGNE77arbkxv6xVofuyqgT7MF4BCy8f5e8vg6z9Yj7D4R9TmYcA7xokiGuD",
  "key32": "3kGrEKKgsTwJYJEg9r84Jm7pV761qEBGTnQHJW3yMiqP66Qhr4MvPmz61SwZ4PnMDFnfdgwDfBo7gYiGidv2PKQa",
  "key33": "3APW5QQT1FPyG9RWLCd4JJH9rvKJRRzD5wh5moyYusCcQExV9X3C7toEbYQWEuQEcYSCPpnjsXR7QaS4rpREiMJE",
  "key34": "3qduGkYhBb2SgzQLhzSZwMZDbvgZktfNxo1wDFK7k53sMwFqnuwcwVVpWNyKwLB2f8PQTdifGgekcCXAmNe14D47",
  "key35": "5rKZPPytHbV5Cb5VaL5rTitUzei8vgmfKfsHQH3sJcQgJ7nUArwTKfYeGTMoZrWiFTecUvEsxzSb8VjFsWc1FfjG"
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
