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
    "4BVgrxkLvnxnyEkGjf4wAbtKqPHjwMxAtoo2jUvdKRNZYrBDvuhY7jbYkxb5PWvoFFQfAR3u6rPTS2aPveR8ZpPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zLdk2GB5WGTXY4QxUSMZopoct6rjYvCzGWChCiD68fMgepurw2ioVsuEBDD7hRxharz1CMZfMo7xAXfk5yPNjia",
  "key1": "4UjhZqCtrzYvD5nA5eVwi5YwhXvFoMmpcic2fou3ze1AqrcTJthdxMWd7XejnEdcDKLkFJkLbaa6jxPQkjweyw12",
  "key2": "459WpjaiGV8U4nej6rQczb53W3VPrtDV3qnek8KYY9zZrvMnKcukr3VkXMcBc4czXkprYS814zNPSVusuhoEcwct",
  "key3": "4ZBkn2t2qeeJesznXgUHGsTqtN7krx6XF896ed3pC3Cd4TYxtPSt5WsVWLhJfjM8vmJPbwkog4PyGxQD4L36YNnW",
  "key4": "5Dqvq1vA2T9AYFQ7NfNcLfL3pAx3egHvsXRBSGk5YKgdYyrajjjdsVRGWio54NJPMfKVhLLHBH5rkCVdz8tHTEwg",
  "key5": "3JbdxpGoudbDFwijcMM6hv5n1DLWDAahancgGxKrCpLeozbdSXZ1T7q6uJLk2eFTLy5YvAXwH5ehFp8YpJmWsCPG",
  "key6": "3sdRpsbuECenqasnvRH55Vc4Pcn5JujHgchz4NoCxHZs1Hx3x8ZuVadzDVT4o9WR419NbRoaqBLqQhyj3F6Y1aVz",
  "key7": "5sA7an8FH3X3Fhc79NhiTTQLCdD35EvQsJd4ZLLwageJouTGiPJjH6v2bpUwsd5gp5xS3r3J9Q9rtUY7Qnmd3kDT",
  "key8": "5rniz4cKhbUVCpM6jMSnehz2P9BXVZKPxzwJfu4KcoVz3NJk3U8GeaMfkBZPzXZqUibcTVUomfW765QFW458AgCk",
  "key9": "2N1Xy6Bbr9nPimtEm1Z4WRv9NUN7eruyHd2bBDeCZWLwzTeYzjYHafn4jiNAjxMCqPZqeFz4ohC9nzDraee1PJey",
  "key10": "53UbnsnA2iDkbRYunT2xEHFZEM55E3LBdA3fQD6bXcUjF1bFKqMeHmjWUNTRxrNP13Q3gYBZny4MGwzHCddP8Hr9",
  "key11": "EEYQc7EC4N34pCL4wYnHDXWmu13cPUtzdF5Dp1p9jpaX3Ay1aXUqEjroFJgr76JtFiPZGTyspE3UbmBE741y7QA",
  "key12": "66yMzxjRPpYRBeh2fn6NT7DETNbZoGpN96h9a8ZQTEhmuL2Br11HTdtdH8UWNadHqzq9VqWYYULwrioPCFCgg3Sa",
  "key13": "4GcwAvCkJtYSvbqTcDisUYEXw4DhCAZaGUbUGw4BAky5sXCUAwsyg4wiwAjbhVfogBkoDdQLgeDdzNRnULEkni4P",
  "key14": "2TF5QkZw1DdAKVeuSBhNWf5pzNsRBrmjfKLxNXSdFkNfH2jja7AGjSE1vTAqF9RJ7NwTKJ6tZuDQWVCv3dRLassb",
  "key15": "5ceck1ZyuMQV87n9a7YEHJ11XytAvCGwRVAC5PHCgUWT7SxpN1vpn9nziTaQ5TwLvvmTDdJ2BceMWb2b1xuwZwpa",
  "key16": "5GD5vBD38oq6bDyZxwEKQAqZncZtqPe2GZzcujNr3cPuNZyPPW9bLqUwXXnpRizFEyKUwaKrRKBj21bAQuxMqoNo",
  "key17": "GS5yzfGNaRHm8UntvRSFUS5CYSDqPq8xBqSTBAM8KxBxE97DfNq4YwKKXYQbEg6jHNqw8BZaEBPkow1eAyJPatQ",
  "key18": "4o3RVauCiyrXBAGQEw2NDbYaMEEDSMxXYsHscGdxHpSwX4m9QyGW44Uea7w88stFXzFRmUmfMqjXgPNnVXjnqRSw",
  "key19": "58tcu7FodBg2yfvqEmQpTSuUs1dDG83HLa9bUxtMhNhLyobixULpfUZFLkcr7VfBHEEhiKHgi8mwGZZCPU9js7fg",
  "key20": "5CYwPSEx79HeDG6Z6q83Fv7kqip1Kg2WwmGdNPqLdQTHgKLSJKFdGuxEYL7DAbqFuz9g6dyAx2xyB8cNVQJ68DWL",
  "key21": "3BeAeoQTHf9KyhiCVLuyoHdXCnXpTD4cpouMuoqotxron6XKByFhiX1QTAsJXwtJErkGb5Ls8FwTHVDMjcyTftfi",
  "key22": "3zJXHc9F1FJg4MYFzoLxkGt97TZjhuMnF5E7oq49L2sefQFjVKEsoyKwkzRdj9cNDh6M6cm3QWgD41z8XmPPmWwM",
  "key23": "4x1LyXSKpNTrC4MxGpkkQ44V9FQuW3TJddMfyoCMHaJzVC6JFNptTEXU25Lbyk7EvUztQLPZKCkoBByeLvtW39RB",
  "key24": "5g51jdQF2RSi4Nr6H8PK1kY13t8PW5C4u9PS177VC2pJAxNXHHpnEf1VBKfsBbXBiQ1v2HmtEbxKZw6KbHQVF5bQ",
  "key25": "4kj15wXBCJR5G4aGiAdysGEBNW8FHrPRsu42Y1T8ARDwZL1H62wLr1x3VMmtyurDEiHcJX5XmyTz2fme7MW4NDer",
  "key26": "516b7f4S8mV6YUTiGvkgCigvthTa1PG5Mr3Ft5u3Cxbdkr8F2VB6eXkBUAEuHZjGFiXEs9eeeQBtwJgw7oeeqQEv",
  "key27": "BazaVdKk7rscyHDQTMvTrw7t76GBq9eW5PB93yXyzNcoAW7RDfo9bsa1wD84xBAfQZ9g9uHhf4TEYfTgahvs7Sa",
  "key28": "qscd11Qen4AqqPqVd2qMFFJbzRD1CJyhR32DjckYhrd8FE6n45KYVN61ccC1kzJyBAF7doiPYZj6cS7F7kAq9wn",
  "key29": "3uZwasBhQqzVzUtBZmFhcEcWnFPjWHnveWNKXYpJBqVyo1re7j6B1KbWq1YQHDERiTA49qQPppkacj5eMJqvhSYj",
  "key30": "2jFo6QsKq9eC3352K2p9a3Z9NsQqVKRuqimjt6Z4pZB8nrZVFozDTsrjfpH9fCjYsj5XXqC4Lo2P7bNt87EqczK7",
  "key31": "67Vf7TdvpXasu68hGEXkVmhbDrAXaKqQ3sfQLosiiVuGuBW3SSXfayJET8J6fcZjCHDnp9aJ7tsqQizKGiXTt3oP",
  "key32": "3URww47PqSiH4jRXZuDFcCZvZcxaGGDpPhLZTi6qXxUcVi48Lc8hMq2vagct7mTfFSEYPjD51TJJzHnaC2cA4FEg",
  "key33": "r8apbLqNqzxwNZcrdrjwfQSJy1v1uwL2rY3Qcyh4ow3EjU9Sejvuaun8MLSTPTwfdk3b58qgnNMzkFQpXYHVFCZ",
  "key34": "3GA5bkYSYpFCnF67YPfWrRCTYjsrrArbaDBdcqcRUw6E8y3amHyrFGaMNcC8Gbj8pik8Lxifg6g3VW3f5vAtK3i5",
  "key35": "41fNjaPeENAV8bwWwPV2vo5C7n3X7oPbDnMrHHAwW7zbvUxtzAikjjK3NqH1YWrGBdX8BCjeeXUScBs4twAqzzhm",
  "key36": "d9GDkxr9Y43qvhnQvZu8DpnxnCwtaRVumwiTGUDvVa7EXoHgsTyur2U95g7eDWxi9Hxfuud9wZ3PhitLCtBCP8o",
  "key37": "66sxLoq8oafYfeAcVhxNUbcjxVWx9Boce3TthN45W5WTampwcLBHUK7XnwiHRvaWnzgp8XKxuk1rAdxWu1h9S3x3"
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
