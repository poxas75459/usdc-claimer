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
    "3EMikeMPbF7Dg6Bxq6fKHk1Cj1KwZST4iu75ukKBzHksE2APejtRxGbxUV7XUhPDDfRR23QVtu1JEZdiCdLDZb5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iHtw92mSxFHdyUcTbxx9Tr1FQ7fUin5Vp2v7FHfLkh8MBQ8obgs2CrstDmPRa2FgEck6VgFQgSj4EAEfUiA1bQY",
  "key1": "2S66iD6zgaZbHSeq81m5NM35fFieGzjCFg17sYG3TCDMPDiprgSBf1G7V59bwy2wYykwgsAXrAKynfcavr4UBxRD",
  "key2": "4c2H4Cqk7ysCaZxo7AYPTD9fbW7VGXmPK88oqMhXqMdaoqkgDhrMaqFUqDJrFRYwjAwdMzEF77rXqXWJoiMKarox",
  "key3": "2YjEaXpUgC6yzNWMDvRzwG81nPmHwAB4tbK78mma1YQT5zDAbU2rD1T5tdGCLqm6S4AzTF85LF1WjyuGREbtAyPy",
  "key4": "3NzuiUF8Vp8bdFUByuRBJ6iG3c1rgWdRCiAMJFoKyTyzCG6yoEFVUyhc1p6QJLeUV4s6LKFJXhcRG87Dy2VQXusj",
  "key5": "37dgnHtCiodnLUcX4nTMoEywkqhKNUwojNrk83ZJ5Tsq2GW7xjH8e5rpqbBoTVbViuGdkmVmmWrjH2MkNMN8ysgh",
  "key6": "qbTGVqycWwbM8HECrUWP9nLMHZ522SW9bbggrySjQxa7HugGkhmSt1daG5yqbzyGUHUza6N4qffmM7oHTnZ3pL1",
  "key7": "379LCzYDuNZZoE1bszAiy9yZVxzZ6MYqxS7HLpJMNHupg7ZMhsD5EJ7TfrP1jCj4WsXC1WrfwBbbVcFzj5XFiHPF",
  "key8": "2i5zxZVGWGUmQVgV1MvnGQ7rb1cTg41ZY2hvcrUhgJAgYcV31knJdKES9K1JeFMsBHMFBSQPKWxxPn7VD6zvJiGV",
  "key9": "eJhPFZTMcFifCusZLWP9E1rg9Af1DjGGqaTkixbLEzJMyE8Cb8q3q2n2ij4MMHoSpBfUaoQGTPcBKYwpdXeMDoK",
  "key10": "5hLyphUzw8mpErPQ7znjt7uKMsJsT9B1WXjvR1kvbHNvLmkH8j3i9pavCWhWFJemYn45YjbfRb9JYsBgSaaiZVCv",
  "key11": "2cLfxttY7pq5aE5PoNg9zEp4YvmHPXhkpmHqMPUDQPDJxvxzviFe4pywNDq2f3qHLgnxZdX48QVKetAQs45pTqCx",
  "key12": "uiLLXtCQe2p8dFPFpvs13AkRyT7urc6WNJa7AMzCC7nVqD7bzYUgncfEDQDDYJJ8VFRsAQHpg3iX7mrRtDwuqtp",
  "key13": "3nWYEGYggLoG5fgWuYxjMTNxoHAY8LUYgMvXvYtJ1X3dXopafXZ93JXBWa2DfgYYmczHLbJD2pgztXhi3c5gdju7",
  "key14": "ehSMjgPFzH3MQMrYWnjruGkAwDvj8C69EQ9Q8UNuLWiuiTZhkDxdgF589t5RurbfK9H5La1nPa8k6ShvnDFee8i",
  "key15": "4eUy6pNrMY5QyZwBkGZ3kgd5XsSngRMubfKSZSJRMZbqLQEzg41LxShqcw18GQhAgYQwUJQX8ZRA4zTMT3vu2VF1",
  "key16": "3nDx6uboYuuNMjArZFusqPPbH8Ld2MQk43DbCaWNm4sxTzMUzELE2tcJzjNLxmwEeckiWUzw1MUov9HugxXvpZoB",
  "key17": "5oTuLTq3YSESmUAN3UxaYYJAncWJcECDmrGnj7RSJcdt7Ewf1gmckHHXZGxppXL8Q1dwLnQ1YL3G6r5etPrcQ7Ko",
  "key18": "63Dp4PViWR3NnfG5TPA39BvmN27dHPnVr4gvHG3YtXWrXXRKfF2hy789KiPfeo5HM7wXNBNykBBhWpSrYLL6wDV6",
  "key19": "5QVv1AttXa5FnqxRHBZf4K5dLwFPGcwgM1a9haVUf2FDDZbmx2nNJe4x7m1rBULHN3WbsvNKhH92x7VBm4f5E2i4",
  "key20": "5Xtb82C2waV8vw28GtmgpLSZp6fgQDTNVN751qBcYPpy9i2SfqVEUUFrc429Jvzyop2MU2DKBidiLEVLuqKefsDp",
  "key21": "2GcxdLKaCrfrszfFq2TM2qYag4J1beEs4pqPUbJ1HkxFyKUEYiazeTDbrk71KziPc9YzVfj89YfBtVrwo5Hmcyyu",
  "key22": "3ahjMEsMu4vZHVg1yRZHkJMYudimTm91XAbZvEWM13m5tgCfi3ABASSqdXAsYi3KCBhxAEi467D5VqZwzGvXpRHE",
  "key23": "2K6UPymVuM5NTiM1xUKEsdn64aSRE8S3SCPu17LAfzuiCni2q2DT8r6kNVHKNjuTnuqovQbritfF4pasUKwzuXC5",
  "key24": "3VY5zxCKkwh992kFZbog4K8UCLVdCRm6186BtxDXqGNi2UauXVJAHJiEpDMfbeykBCiuVn8b19oQN2VgheZ9s5X8",
  "key25": "msAYkiCgFvdkhpu43ZiNAfBAbYEgQmxDArJ6jt23mXSxAJGBFjLxxMuyJ3GNRN1PboNSQtzxGV9j4WDi1mHmqJo",
  "key26": "3N58GgjSJhvCemHp2HBx9wv7RJ7LCFdojUVsAhM4pX41ToCM8F2WGshH4SnNTk9FRoTRcovorp8cHcSof3UGVuWY",
  "key27": "3vaAg8gLuKWtKZrUWdyseYTYUFkxTzqF8oXTkf8sSeAL1NWmsdEc9UMEcTWLB7SM6pxENfmaUm21rHvPUqWFGfP3",
  "key28": "5kbATGg2ywZWQ2LKtzxrG5iaAZTsH2NsWNrvC6HYpDzef8ALbRqs3KhPYEVodvHWtkvNCWkGav44DjFwjzdfUqEd",
  "key29": "7qjXoroktaekdjusevXCi8xeZ2LAALzihqDVoKHr9qZRsX5ANNcfb8S36dq88SjRuv3DKb53grpyMbsY1bmTpWo",
  "key30": "k2oHuwe4NJUcvKQmDYSMZP4XhDFXRaQpkku7nxs8fhWjRJT48qpar93PguDprs7B92DpwhckCHz4nVqUxPDdToW",
  "key31": "2kDQwTdWEs4yCfh4mvS9kdejRQrSWmj7MNnALyjKquNDTDTuy3qHNwX5MUXYRyz7YZf3pNbVnbbVbWoPMfwSgH6U",
  "key32": "2VrEDi5sFVaioHYGusvSXnticb22VnH3TtpNfpLmR3KrBNHqWoAF55uFzpjfPi1fmNdj52mGgifeGge63afVixDL",
  "key33": "4dy3AT4cHKMYoAoVMcXMgdP2vXH7JrAnZy6b3s3S7TDzqwoiibt3FqkvEdmJ4NtVroecTDCkcR3kiThMkWq8Fjzf",
  "key34": "3Vs7pSGzK3NLeJcobPBz6y1pAVRYPgREDEcK4xguw662uuVzPFpCAjHFoitiJ66EFD2x6jXeowfaMY1qev4cZhbg"
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
