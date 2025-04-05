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
    "1DZV5oXDud1F9HtKXoC8ZWYwANUuNEYvsg7xLGqSfBSNML78jEvfAeZhgVF3fpaEGtEvszz4D1oBjtjAwaXqyky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rMLVwT8Vyokq59L43UzyXtXJRV7sBR9SMqT3arvLduRYXWh3aQdcGwZKu1yTq9nG6eruuzhBqXn3Qv2YfwK5qi7",
  "key1": "5eS9q3BSSXxkuF4ACxv2o3VukZJNgSX6RspR3CRZgWkch13MHeUpnyzTJSUCtUZ4BzYPao2EXydqEsKvbmtbNEqT",
  "key2": "qPMJtHeTgUPVjMisRDVjjWWZVyQ4ayEgJhjjampKzAu9kQakfMHKJBC1AxCWSrZTdVk5rgeRcMqVJzDtuEHg9Xj",
  "key3": "X3jCjcDFhFjPDf8kQUhwq8RxUWLCmvFtyV6qxvF6MW7MQbJ1tTM6ytpV9n6SSU8b5dKcVZwjN3Enoa64y4Rbdxb",
  "key4": "61aHmpyPFg6s4xhsnxt1YwYh38WoqzGWmXKWULKpzUdpBwfFJUYT9YaHVawNXUgyfoQFL7NMfJdsJXLYk9fucDtz",
  "key5": "a4MXmMyaN99anNuMAXp7LexovboFCaz6rshc4KQYSxdWTxYji1fJpakHKE1DuAKUEGu6xXbECse83LYqNQa5xFK",
  "key6": "4WfCyx5JT4JsaY79ucnhshA5MAHMvHQ5TrBeRnXnLpJYaaSLhwNBXrGHoeeJ9Mf4f8S1rYHmVPPk1AW3bkwhehEa",
  "key7": "4HZhJB3uTQyVrUyjySpVAwQCt8sMahHLC8iov41XbCwvBDtFKx9uoWtnYUFiBBrfRtYZukiJt9Tm1HQUr6VN6gj7",
  "key8": "5P8E6sQFQzSTkvwFbwXKjNkJpB5PDFGPjfaxxnvinCsyHwQ8wZxEsmk15vxwUymsHSaiDkgxdujxVAkP6xuUDWUZ",
  "key9": "hszTeK8rMK14BH5U8Gbza8T7GJJuRfRhRxHBBzSJ7hQxXoKjASrqhqeFshgtN6Ko5CVac8dWbvrTnZgjuMUg7KK",
  "key10": "27HANkfNUehvTzFCHECmzdF6cTK6PGqs6GxaSnkV6BtCwRDkDov9BQx6qSn3vHo4i1VHZqcBDhZrRTAV1BByUiHB",
  "key11": "5r1A2yXpY6RSgCGkpJcEer5dvP6M2j4ZNYS1UF2VmSjTyjSdKzBt2tp5woa4dU77oSq8tYUogAEigXLu1WZj15xs",
  "key12": "2LtAMehsMuWaLWKZSVwtJaKK3nsGY3mujyTKsZhD2d2FH7Vb6B6rMQ1qwHsicSqL5kmn8QBaFNpPMbyr1WKWvYuY",
  "key13": "33DP1y12Rwhp4enL9vWqT19bVZigezuSF827CugNwZ3ndnUnMzduDFzwN4rx1hm1xRRDaA2Eo9yoAvgfYkNCTvzd",
  "key14": "4yB3MLDDXevcqMohNdaXTLBxoUEcDPaNUuew1E4866GDngs2t9wZmuLbd8G43Rq1PQrDNfiBhQeuPSJL3B75AcvT",
  "key15": "25cz7QAXS3744C3MpqkMf2UFXUGsNmKcP1HRTYepXhseHWhxeYqX4b6GL6KcuSdLpmkzq7wbjp2PC7ugY1rA18ZB",
  "key16": "48trc3bpfYp2T2G9D2KT5UTPDEbwucwqfFfQLunGAEa5PRjy1nGCrZZdpoNifgwNzWbSmem8chvF2ABHbDnkMwYB",
  "key17": "3PG3abE6qeZU2onpETW5VJwfvT9BPaMQTerL9oyUqrPER11BsNjRRnDdNB8bxRmjjpsEJUvqax1sWxiwAzKWcHKt",
  "key18": "5bePndm9BgmGS89Bn7EVNooMK3TL2Ewp8qp6xxxKcezPdWPwEacUdqR8KpnGU4Lupas86rfk4y9o6QJv2GnBNuup",
  "key19": "3FVCLYKTY2iPDY7sLvLqcJS5Ycz2hcK2FpTbo2vUusycRR2M9u6XTdvthcRsmy58CGGmU6mveh3CPQc2f5RG3zf4",
  "key20": "a6ZgcsrntUSd744JG3xXXemjSSKY6cTJytPdPx9HHqsBW4nHwaZbkx1gfHqhYLHeU6CLE8Gcug35LxaKr6o3KnA",
  "key21": "2Trnd9XvjoVfxuZScdbbGWecxgEc2E1Mys3LCB5R1P4eWSveTroNNm4yUA3mAvChosokRySKFPX1gbMr3DVwjm8v",
  "key22": "2RnwSQvj9KJ4Ehho81x1ndYQyZ7kLyePf6dnDFp55HqPXvUnGf3eCxG2UAf2zfWDipxWWKVMga8L4q8o98rj92oG",
  "key23": "27N1pyAyFUriZWVbCMuzST9TzJT5SdmQHTA9aQBhVqBgMFE4Dz8JPphY1SGjXQVYmemqjmwTCe5RX6dBBHiiyhiN",
  "key24": "2deio43zMGuspzujXMwUYs2XLyBkWWSXaSVABEkrEQPVifiPRH6fbsUgvhCgQzegeqmLyy8MaQmoWCasKLd6nK5U",
  "key25": "2LF1a8T8wqP5DTTNG6bZwDpjQF7EbfkNVkTsrDZK8ZEm762ru2EZXfyNyQMfjujxu5VLjYDZmgEPrYwUSQ5mKXgr",
  "key26": "5WvpeXBoGgiqYq5NWcTjzX2hEXz5hSh2i1EywnFncFyeMz1AyE2XJRSiHCaVETQppFLbbcuew8m8DL7oYhNPSJtL",
  "key27": "ehoqzBshH5E2kxZJAV5Li4dih9r5HnKFC4zX93PDV5dk6sQhLYid13dXLGWKf5DUhevDmTr9aAtH3umQHFsmAgW",
  "key28": "3LYovRDvwD1E5ypSWigsqyndbA29Dz63aSG4ZBZmRCuxf8iUY4E7sS5tBWqgq2AdrKBr3PWV55FdNmhPR3zvqNVJ"
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
