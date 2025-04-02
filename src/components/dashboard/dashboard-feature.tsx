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
    "2dqx9PT6WZK3K3q78ynyG5eTfapVREspDGgf6rXgKb3YcP4TmtrPvCCYgJ1pJ2HDpfVGr8Dq9prtuVuzQT8BPaWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Ard4jX9HJkHJS3JUt83FRezHKwChrRz2ZZGzBxcW1ey7dTTJhhbwYhhQQ6ZbT6vhkRiJxGWQ7q2A8dfa2u1Fvs",
  "key1": "MWKgrGj2kvbKewAe7ALetMg5Eskj7KaA3HPYnG74TmwrQrxYzde3567zQEGZx3CRsrvpNdefqQPNYayFXyWScRU",
  "key2": "4xgggVYeD7CL5TdpEZLnyMWRZFAhnCQA24nDWYESSTkGh4zaBe6SfAWv2UyCP4aF1rLEhwR3xPNAwDsfGJV1gXuf",
  "key3": "55oQxu4yRAn9C68QR4iRdUTYXJaYHVfrxZJuwb11zDixskJhREgi5V3g7dbPdRYv3cGdGH6YfL5CDu1qPtq9y2pW",
  "key4": "3ApwVfmWLExhRo5JxyvtpVHM4YXXC8XMFonnHthiuL9b9e7h5an1BgjVRr5AYRqjnVd19BoeNw65ARTs1ZdZSGmw",
  "key5": "3LP4ciE9VDBVorDxDiF5yVdJXLaDrPNpr5DpvtXJ7dC5KKo2GzvZt4V7pwfTsyyN6JcXfYu8uQXhMspjG48kuxso",
  "key6": "4qw5DaopaYBMfo4CMR2g1LD7aH5qSY28ATYX2mjP1sejzuPebkWVBisUT1xeebz9rRabVXxA8pZH1dzR1NVCzHS4",
  "key7": "vCgMxY31fyWKZQkeqtt3deWfWAAdGkoNpzKsAakvTDcMp2wWh8tnc64MGFZXDAZ1Joh8C1fNMCWUZekqrgmdCTe",
  "key8": "2GvCWi7yKc5tLNxFqMVuMkNZ4TdwQ55zd5kYvLFbEq4nt16GjPtkReeWs4LQW2oFiBYntUXNSNq3ME5C51aw4yV1",
  "key9": "5YBAZkaJ22upSNQxzJeZGmvdfeJdt7jaPvt9rb88YMz8AwhAgs717VgCAB3fHZM5EATZYc2TNc4U2K5M6ToH9Hth",
  "key10": "3mdyQnVSSQ8NXUDz8aDEnm1aeQxdgGpz59JQAbNte9xjv8wNPxRrk3QXp9h7UQNJv7jCgDEgU5dcmYiNpwm12FWB",
  "key11": "35ygNHjmzG64tbPdvLXujjKCMZbENLRCqhA7RG4BzzVTWh6xL6A2nT9kNUkgTpSPx1PJJmGeLpRQ4RwSxAFUKpUU",
  "key12": "61raf2fd7gEsYmWhjvzxu6qkun2stPtT1H4F1vYeNi51xa5x2oBNhwq9HdB8uP21vJHdy9FUgJQorxRxacpYvuL5",
  "key13": "28WZ9wnbWhPCCgvjzQPsm7sAhCgUjrUwYQ8cJXrAuKZ2Lj8NkpxYMGMNwEBJXv4EpT7gZQpQ5k74pohMvX1ESLiU",
  "key14": "24dGghWB9wTTtBJkBAHJ4W2HHNkLw2EaShf6NYxgVSdK9rPs1Jh3TxdkJrqgre5aQjniaYm1PaaouPwYWwovdDLw",
  "key15": "4LnfPjAkTuN5bdWpaLAXoEcsUDqTRMgEh9VmiBJhwZq8XiViXaS82f55ywGDJDc6rg7pFrqHJQ9TyWKXXH7mVPLj",
  "key16": "5pae5bdy9V7tvX9Vnn5t4vqkN1H33oFSW2w8LTW56UPbBgiXcxNVoe8oCvG3yywcp1gAhN99brMAXdeP9Wuz7stf",
  "key17": "iGJf9rSdA3cjRhB2oag73ytr2aCmGcikkQPoQjXXpkjVpdvj9pdjScUxKdHJjmWrfDZUFXPQgMcqfQnUdM6a93V",
  "key18": "juKitLGRznzVU8Vjorz8xmBmXD7KnkBZmC7fiWyTuB16hDo9Dc6MqKoRbjWEg4px33zgPSoDWEBaWa4rP8tX2QQ",
  "key19": "4Vvc1FprDor1y5KX8C4dRXwhLnn7nvuNh2peoG6uPPcyt6gtTao2kZdb3Gnu8AWEPBuXBgVM3RT2QDp47sHZm6gD",
  "key20": "62yVbRTkoudKk1Gc1GCLWuZ2vmbTq7ND9S8BeHoiTjsxQho7yB7NGJR79Ek7zSSPNcsBBKhYHZkP249GnD75k9dV",
  "key21": "3DW86aAqVvED9eZUT3vg75sVZnskemiRBthR3ynERycAEVKDysFByETf28acTCU9w18iqxTD7PE2rkbaAXDtvpNe",
  "key22": "61hTtrFBuebj29GN977hvVmcmJMiJsZhAATdhgjpbtVMYHfuMNQtTtZBNYv59r4oAvymjPEdTwjj67aU2T7m8SDK",
  "key23": "5obwGbZLtSa8soRDHxjr5dvw44AM4Hamie4oycP8mYFhMLXoE99TqysRLMiNbQYRSStxj6e1DkaaxqLW2KQLuF4b",
  "key24": "4reMEWz9niNkkgRuRbhYgsrAwsisr5kQreXEYoHo4D9j8R4KV8BPY4fyA8YUWoQ9dR1f1H3uv66CCKWSW8Hq9Bwx",
  "key25": "26G9ffD3wJUaGKhqhdp4gXgjUykPWQjyfZWf3SQq86XFkQCsUbHchTEb92PEmWux4G86E4CQDrthNJJcFABFfmA9",
  "key26": "2VQrrNwsDDxMNBkwTRcpg9UnEhha1VamWpX6BAhbg1V2KbHqwZp1EJgrfTqMub235rvvBpkf2mQNQdv76sbt3yYz",
  "key27": "bizSfN8yYZoc1pDGjvVzgoMBi7sBtw5uhmBA9u85p1gCkiB3kgbRN5dUYtzYDmL2kbgZXf4SfFD9J7PWpd95nhJ",
  "key28": "4s5QeUxsVjApoaVYU5Zj2gsX9er4c4bTZaTLuZxAHxQypjc8q2iFsZwfP44q2GtF26nontQRhJ3vG5fSPgwAVDkM",
  "key29": "4ADDqD58fPazqQh6935EQ7iHJd234HXE332hUM3H4wMJawaCDdSRoxLR2VFdJNRDxduxbbP4HBgbhYF62iRSmDuX",
  "key30": "2EQY3Uv2ys1om9UqfZEA6NbRcZ7w9hSAGjpHbN8gj9ZXK1PCkhC8ECQBSENkL2NJrUjcZjmdzDtin3BLaLKBCRUX",
  "key31": "3uG9YqjZ1D6XcFQ6XjaX5BgHnNxYhFsYiwN1uvuWkyJdmmgUCu9L845EHPkWtXg6HCsSQENBF4yPdSyPsUDxAvbd",
  "key32": "2Z6SuqUvHGvcQvDNb18dyEnoUALiG3ZwRCXEwQgxeQJkvieZiascRied4nmEJHSXymTme3uBHLcvWP2QP6vMSd8X",
  "key33": "2f939pmXUVSNGeAeKBvMcESh99JjPesjxhv2WUdeAmthVvyNLUFAQehr8imC6vUEr9thAv9Qi6RikxEo7SMs3qw1",
  "key34": "5kBJQEmNNgcMFKedZW2w2Kr84tDV8J5kAaNAqGSzApK8ha91yS8LAUdZy5qbVRUERUeHW5iqpE9yTkpYqmohuuXz",
  "key35": "56fJeQe9zz8BQaef5z7AYJ6SYUT6CiZvQXcpo91mDANJwc9enuiXnXeShizNTAmcz6JHTtjd2ACCqXJsUes5i8gX",
  "key36": "5Aa1XUtNHdXBFHWhVMbdFv3JxrbF53toXcKrS9PrHGo4YpTuWb9GYdUWqNdywvH1AGkucLsq9fCYB6MACa5VJwk7",
  "key37": "3p8ad4Mhb5otWF4sRhfT7cFfbXKLoBvyxTHc7E5vJjXGC1vXuoHj3dQgwFSiNxN9sa43SKJdgZrFBcdgQvqYyFse",
  "key38": "44FTjZtsdfwUGuK3Dgw6cxoX3BX4vmTdiksVupT55GPqjYDy7xnXzYehQivD7FNnbmJgmmav2BQ6s9KcptZcZd4c",
  "key39": "Zp9FNrospzEeCGtQpqGA5neteJRs3ET63DN4TxGvTEsHEAXyCDUeDdUuR6BSwsZCxWbMfHkVyt6gjBgAG5pVgaD",
  "key40": "4cDaUMMVhZ4yoiLW4rpWQEMe6PASjEUPDGradzR2hH7NhcRfPDcRrSMkWfaQjsnxyWTa3QMNJVdQmAuSddVNfJcN"
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
