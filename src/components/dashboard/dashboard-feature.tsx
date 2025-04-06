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
    "3Ebid2cS177wAyrKonMcTRqK1gqiGveZbkgXcb4Eo8w3gcMmWrm7ijxGDxTARapXCpBA3o4n84oUhexUdv3a1qrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C4UXHHMP7mn6rCRJQMKHZ6nK1xuy2q7GL8Us3LnDYLiJcYGinGEyNeLMopw9tHLYHofBKh1DQCGUrGt1d8PAEjg",
  "key1": "4skhUeLnBGCnayCdqcL2fk4njn2yqse4PGDbt31RbNWCuji4mfe9FsH1cJDVk3VJkiqsFkzMMpfycfJ5ADWgFhfU",
  "key2": "3B5SahAiEtgw7pgvACb7QUakqMuceMocJ1XjmvggQFvxyDV6ya8bTXF4922fPzy2Zxt2QfBoRLtuAnrrz551kEev",
  "key3": "2LkZgYjb1J1EidJqnMJ1dBWqu1zpkVfyCV7t37GPgtyT1DMCr8JvnHfG9jdc7otpHBTzgCicoc9PnrSiEHStm2fy",
  "key4": "3rjEP2SzkYGeTEtd8GBMbcM6mLFVikZtmz9VgvpTqKsDL7VbqmBDoTLkpt5wrxnmoYtaedJo6jgr7ZantaSPbydN",
  "key5": "5oQhGG19q6SDXtQmjqGX18MmX13e3PX357x9petLbRsQvoqZ1E2qC4kWC2NiNQL8wEGv4vzzsADUQ5cmcdfaJhGz",
  "key6": "5BYauKBrmWhk3WsCbM7P2dAVYUZj17f4XZC3KE3sWCskCy7HgxcwC4Zn8kTs2ykXWM8vak3Rr44hSFnAt7fCyDss",
  "key7": "2BZeKrtpB747MYEBCTarcHSJUJStQ3mfygXshPn2eHk6s3tYjCxeqQsPwmvWMmTAWdrN4kHHuUTa18LXTrZbxJCW",
  "key8": "3gHYD1Ragz9zfXjzohKPbuY6aGbgYAZZk9QsqN15x4w281ha76UaRzMV2XwzpfQH42hPJLgCTYGj9qq7WfX3MrUQ",
  "key9": "5wVtuhWgwo1zEmsSce7LVFSdDSgHb4mWFYzTds7XKq4zfcfgirr1zZRvJSAMLLFohLjYYYZCBnaieXyBtnA3RFB9",
  "key10": "3zpXmhGd4RPD1as4euhnJrmztNXiqqvCBJPWxH2hu6a7YniaHc44eS4tLXTJfLu5o6QAewwZXDSPZAZLZt3ge4A4",
  "key11": "fqcVqgUa2jf3EM51HdWuxoVJk4vKfL18CK237hveKh5jZiCmdDCLt2S5rx6wanA7Y6iTJvV2HJn4o6NmV9WCkbu",
  "key12": "M314fq1hTXUB1ocxtQNsd7oPQFtfmqNWrvM7MYHZgGgV2RR6LHdDvkpPc7JF8PGAPQZr5Z3TiBsaARswUBkGGfc",
  "key13": "4F5mCZsnTPyJMy6R4fvwijZmET7vVwLfk7vx7B24Kd5zLoij7yDkrNAqs4K5TftyFLpwG4YZ6RQ6atTF4PXRdkiq",
  "key14": "2BWrGisKRSv7WgCzbCRwoMkiQr8W2ToH49YVf5ExDPfhCckyNGYVyyNeuoSMBEkwTxRVExzKSYCLKL5fnrfvS8NK",
  "key15": "423ZCtFQiLfQGeFN3Dx2Xb5iGMfej5eUpmaWKq5jJdfADH5k16JYomGPKkuY5LJTr5mXaanXdkneoEMxnsHBNrRc",
  "key16": "3ADsQ3LchR5ueX53Vu5s4j6cUBYG55sGBBhC4seMvKzTwfiDEr7SkJBamqSWa9U1sdrhLBqTY8NEFSBcEn5shseJ",
  "key17": "L1b8suoErDLwyZ1eA9cW91wgY2jhAN2x8P5Ut3D3115moU3UEiD82a6e4n6WbgPXqc9gG8dXaD3iPQzFdyRzfyC",
  "key18": "2x5zKBz1pVG4fQiXjszHp794dsknWow1dApUxMCVjx2mNAQuUp2YwwyYLjgTF1nNqF3rQdGyc8P9Qx2boNV6afxn",
  "key19": "b9Resikp7J4wq4cexDTksmSddBYPC35NAkfj4fQ31HTA9D4cHJcMajhNTAoMUiX2PP7SwMdGW42WsxPM8zVXqZk",
  "key20": "yzC2X6HkZXWACutbrYoGLkfVr8LfWDfYK3m18jB8wDzBniqDDygv2Zkz3JArbe6ZSBs8jnGUiwxVQX5VKwfqwfR",
  "key21": "631qsj291VXPy2oXZJFzHDYcU9zGV433wYKCoT9qDBW5AZ4LWAFPU7yaCC1udrHnHnwfCjcMq4wETnFwFYjzPnZN",
  "key22": "3fuH2bNKAspup2b7HgtZixoeQN8K1v9PfsKJbn17xHEAc3ZszKyKanmAjZ9wqbDzMHUts5Zgpqhdn8SXdPr7Zoon",
  "key23": "4cCRziYJrPXcmntQu4tuVR9fqgmFeypye5Dy9iub61qh2nJaewyyVsZywpoAzK1GyuswD99ZAKRWAjiReGSPsn9n",
  "key24": "21EhAbbLHsywnPQ92xPjVg2jaCskiootEW7eMNRM39DTAvJHmG2UACJgkA7iQTej8ed4yDzMQzpUwuRq5GX1Xq72",
  "key25": "4d9rFkEPm4QNXTUdt4iJjSqb25U5MxK3hJr9am3KKXmcfjn5zibQL1sMuqE73auk892VbkafvhAB9HbhmG6XkXCn",
  "key26": "MRscfa6qApbcuxnVCDVTbX9jg56fhTmcZ8aMVkiEQ2Z46BfBXJkq7hNjTcrnavGR7SUQEHnedKhjC8EHhhsGRAs",
  "key27": "4xhNTSjLuLDANvWrB34nPxrb2u4iH67h9YqzVNmz1DVs7coPoh99j5Jtc9oB3pLrm5C2E8L8J71gJQje6ZAoTHXo",
  "key28": "42WHjjtQpyp6s6SeuPqYAK22DdtnWvJKSF5e171k4xaGxPhLQPYFtek16qYQTes7P3gGxmmS7ELUx5FBVQWbhy6A",
  "key29": "g49P8fQ11u2q1heNXyHBVyoqjTgtWnAnuQR1tVip693BVR3HrSVye6CFBwHdZ5SZXoysTMDKFk3ziQaFVNdgsFP",
  "key30": "4eTthGNy5mQ2FR1wHgXGSY7cpD6p94z5QTfCY1fgwyZMxAgzcDr3x6cd5GTUnrLneA9MzXgMfPgNjHJzmbBhh1Eh",
  "key31": "4gh4kS8q5SkRp1MBxM234sLg7AMyyfEHNCTGg7TpUKSyjZjgHSY6nshdgVSkCnwaW4HcrgNVgNsm4Xs5XB9GgByH",
  "key32": "4R2o83t3MDC3TGRmfR7Z5UcaxXLy4MZgpsb9kfP72msGJH1ACKEzzqpgTmePJwZtYB24Xd9RS8oXS5eAzc14JkcW",
  "key33": "cQkQ58scTqeKVxMjfQFUWtJpB88nNu6c6KQtcYuGgyVLZc7rS9VXK65TzCZX5pZkJ4BzpyV4n2mqm7gy8u8Juyp"
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
