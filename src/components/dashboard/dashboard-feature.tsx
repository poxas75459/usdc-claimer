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
    "4cqrufZGM93FF9QAvGuogp7dNMRxJwfUAkWNYYFcerQU3WxYHQtsGPzVGTrthetSAMrkYKLRkQig8R1TN3d5pwMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54e5gEbshPVSWkpsWZiFWZLRn7DT5VFvqk24LcKEsUHmCeZo9BpjGJfh43eKauA5znkRV8hMRoa9fXJFKaTSo8eM",
  "key1": "5JTd6FDjZ7Znk2zpfW67vvA6AC3YeM6xWRUh7xH1uZ3xafKmsRjDwaYP7kLGQ7ZkVoS9XBPoF4Bk1xRYk8yptenn",
  "key2": "2pq6VFECTcGwDTN4gM2PkhS7fHp1ZtytCKWxotutEUZqKxJ5SFnri3PNBJW4dKF2xAh39F1XvLP1UYHzaH2H3mB4",
  "key3": "cN5tVJSoAQ9ZoJfaD6VmzwCSXmeYQnmpchxd65uAN2QYtY7mBJ5VJjNP8arneddvPeYTbntvUTDD9ptHir6Gg71",
  "key4": "3ujo4yzwSbFemnUrnSEkMg1F8bJx1Trt8cY4yz3xg4sASP38D41ham1PeLMtvvzMTjAEaZnxv6aXfu9SJNnhJi35",
  "key5": "3Nd225sfdyHvuoTNj3N1PuMPovew7r95fUNfiAJFKoefi5kMfKdQkqz8EKAFRQiC6pAy72HG6CkigTTCeYr5KqMc",
  "key6": "3fNe841VWiNZp7m3CeoN2uNLC68JQAMsws4pfzVqnArKxMpYHMTmyE71N6BqVicHjnvgBgxR8rrGqAbuoaAiTaN7",
  "key7": "NiE7veqghu8psFvk4wfc8nhUUJ4dXRWJyhS92xDd8e5hXgVmBgGAgYV3sFKK7niVYNY1R11MQq2HrSjfyhrc7FA",
  "key8": "5aXagUfQLmSwLcDQLaADtUjV4Yq7ttBzkjjoznjAPU8VAdUE1kHFC3zdKCUoBydFfy1j7r7eAvS4wwUV6iWTESFe",
  "key9": "65DainB6kFniJYYycBWjXrxVqnYtNM7iZcbQHQ8uy87JYiiMZje2nMjVL79EQGZTWZazA4otFUctkELHmbpAz2Ws",
  "key10": "47pq1MLDuibgPcMCv9WZztkvVW6qwsPaRDHy6B9dLYmhkoDQJzcQQsMHao6HpejkV8529h211BnvcawEeAMRyfM6",
  "key11": "2991JdZtto7oF4HupiVYH27aoYeugZQHYTe828QmALrDsmu7VUEWbJYfGgG5jZCi7Xgf3qEG2mQfPqRPPkW1rpbV",
  "key12": "LCWCxaAJ2cCfgzunBRTiU2zXtdeqN6gxMqX1MczkZK2cUWABAaZEGLSe17mGBXfDucQXTaG8KWPCrkx9TdcjdD8",
  "key13": "cS2ZRpzSvcazDueHexuJ2maKemDbAcePZrjfhD4fEakLAfqgYPHzYi7yCdkP5HkWWuLUKqEAo8Gu8eKWFzbY6gq",
  "key14": "4piUN3BwPaSdCBVdStVF5CzpgrnvZFBJd5T42ZNZfvvtnsWyS6T7qmRUHV7a4CqfnGe45WD3t7Uv9g6qGC9NeKsp",
  "key15": "2P17H5PopkgKirzWYFpcezDGh1K4p1sd2z8XtZgehPY1RADvRFh66GcNmCD4pVz6vfFAQLpgh6iCMgKCZM7jG3HU",
  "key16": "51bkTfNuVT2p5cy8kwHVXpD7qAGe4uaxQkHi6N7pcqWfT9owGiocn8xC3KvBaYqKNaBLYdZw48rWUi73niLLU6vR",
  "key17": "3MAboCgiJAx4BMpXd3iykW7uupKGG3PGkq9ndzcTVz7AS1oW5JCWB1SjwDnXjJYzRQWysciXsgK2YFireXx9Udid",
  "key18": "3jeMfaZj2nK4iCa5sX2eEK47yrGQqVwRb3HnZ7cxvCcEuHdbLxqc4762erodtZJeAnNZWMHdVvPJsiN1zMk9YRSF",
  "key19": "63thnGe4V6EhmvuR9uK36KkF5K4KPb3c4dcenhAscEf5wTuMz8tPWDzUEYAGziswNbfjnVasA9qS2r2PrPu7sWme",
  "key20": "Rs8ZnptPuWQ9YYmPLs7w7qMvC34aHEYtMxVj1j41ADTTKut7JHqUhP7WwePzngWHsFVK65awYZWNNRoMQ5iGmLJ",
  "key21": "523fwDSz5ALDKqYuqrcgzwV3Ab4om8SQrRoHw6VkE6YBr8URawdnUMh77KZcPfVHJtaet9hthK2qEtzPxAugoYbC",
  "key22": "RXrsUmQP7eTxcqttdCyrJ8pHV2eEQ8EjLv6YUFD5frvcvfkAEWzQ3TYLmp8ZQpQ5NmwLMiVMdBNPrtuozgQsY4M",
  "key23": "azX3TWBkGc1WkwcrREPBJrkdpKvUDtV8BEEpDRm2Vqgu9mRQ8z5xGHvxEF2V2p5yPqgKnag8dDvMxTEKWLWGyGG",
  "key24": "JLcDwpWGytdv6ZRMTpCxZ7CCiaVbwjQDW9TDZvCTn7coSscPooc8FjzR9W1h23U6pnpW2NvDs7okDvmCNvQoUKA",
  "key25": "4nNMPxiBBcxj6hzPRW8dSdSLk4SKNUQWcHzwqVjKgsfteMbdNhQP9eZyVMP7LBpkJpZMLVTZULz67WGNHCEKYNpM",
  "key26": "2BhEFXFoBrgwnxBtBq4NSL6qWxBRCY5y9MtEXQuvjqLwdYAiMGxZgZGwHX4SUhBcKPpWoPn6euXHGnP764bDqLYc",
  "key27": "qeoR9KfqCnbZYTfsMShGQPCoWzH9rrtRtYNKxZ3ntCALEhZGw14Xox69t6pMeiSQH8YJ7DvdLybk72zJGAbMZrG",
  "key28": "ebUCGsZVJiiJtqgRwqPd42yFm9toP3iCHPGNshEPLtpbiSWKDVNktArbUza19gUfWs8QUUaBGwrCL4mAgK3u9tQ",
  "key29": "3f9rkk6pXUs2EKYXSmjcMC9e4hQgo7sim7LeRid8QkYFx8Aw5bLWe2iCmNALDCHW3SEAjNtJm5RfBJdDRVq6pBi3",
  "key30": "5AWWKQb3MEte7zxL3YWqNNCktLmDS2EURofi47AFyQJ6TQpZPeofnh2dQn4MigdbgkAcsBqW9CGHSHaXP7Hqzrqf",
  "key31": "2SnioBm3nWWqgXj4SwFs3v5cF48388m5L3gmevqJnPtJLKud9XDWw2hS994ufSzX1hpxLotLejfMar6Vr1bvpXic",
  "key32": "2Ft9tBN6yLJ7SMU3wFSsiWqysiSib1G5DaJhjxwqcuyHWfhB97wGrUVmyjxYbpU4rKyYVNpoWSyfNEsWvQpgELZp",
  "key33": "365asoi4yNqFR2hAUFSGJJLMg9n6ASCdeSu1io97SvQUkNxMG5FdqKtzD9n2ug4kt23CQrArcJjuq2Hjyc3uVDky",
  "key34": "eKH2QDMwo887w3SYSLjUk78RF4CsTmuSTF8GmaTKZkFtpk2sUt9SwGMPE4JZarbBLta3psvVkmFZH98dh67ecVF",
  "key35": "2UtoKuMaSS6muLncz7kqqijPyyGCsRjQkQumKGqe45nuiWCd3hbNSA7rVKwaS3s7MaDRMCMSgjWUBGVEGEb2Nva3",
  "key36": "4pZnPSVXW5zhSjHT8hakUjVcBKLNfq5m2cheegYTPvFmyFFYPYiHoJiYVQ1fkyDsKGkGkjSL8DdC7mtwgxqukcbQ",
  "key37": "3kvEXwAhtEZVFb7eHNpcfqTW3Xj1TmDcnmKpDjPKAg8z2zpvWuudd7k4SKTQG95pwyF9pJJ8kJ8veDAhLjSv5k5C",
  "key38": "3cWxMDaFXu61JGpUo1sRJdPtm67Y5nWPWCTLEeV62H92NChKDNZsHLM1dN7eE4fNL62Y8PssH4u9wCAB5RUUSmzH",
  "key39": "65j14DycCt14qAKU1DFBqSywPrGwKMriTyiuT92kie4hvLDU6oTVnCKM6UKkTQktGof3askxHWWDAWps9g132bYq",
  "key40": "4mXSbBEmoVgMJGgqoUkQNxuvGrWHGk8wQw7LoLEMEh4MaXoEqq4fZrP7PS89BLnqcmQoTdcXTfYZYmU8QTUjt4zf",
  "key41": "2WUi7gWK9zBZcYgLbTMQghVbwuMaMzwdPVMAtJbnQYb9Z5yWZmWPvnMvzhEJRggim4xvxEqJa1yqsKD8J7a3tRf7",
  "key42": "hyUEpgJfoWg6H3V2hZxXG5jsLD2HJ5eQBsrFrzbRk8TsqrLjVU7h59Vgsin3U4vR7AX1CjAX91QEZL3cTQ87yLD",
  "key43": "5raze8CHPR9x52wggsVXfL4pnNGtvJQMidmsK6DFzGx9hhwV9rwHsojkDRckQBF2v8XABbnXKicSk6cftUQMnapK",
  "key44": "4nLmkTSxYDjUQwPRTjN2bNT1WK4oPEc4xBWjZsRx3Sno7WSXHRzAD2Hqs48Q5qENfXZxuHFgrq34eyJEuPiYhDbB",
  "key45": "61fv8iUyeg4dXBFEMo4xK9aEVhghpFqSz52jHMDcCXRY39maYU6EyUtFj2CMTQY8aDdjegWPpvjdXWGbGKjBtHWs"
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
