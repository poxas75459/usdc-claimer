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
    "2LvWeE3vbHST5DEJMSfXKxFjFjzudJBoqsUYcsBPzkWopAqfenYCvHdABmJr9iNbFC77Jzmrg4yW4VRgU7RGLbhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fMaymSZg8czNWiewSzkzBnkQEKdCYQrjGyPpwrVYa5pLqgMZNHeCPKJXABwwZNVsT2L83QTw3Cgo7aA9aS3XndA",
  "key1": "5nhW33Gn2Q1KKAw5z1KCytUuugmuhXJm1AsUQB5NzEmDcLtoTxUrKPqjAyt2zZNS45XFRN99if761jDb5GNBcd9y",
  "key2": "4jnCP9QQd8BJgY9qet2rhxGCr1DoVet51ujwX1ihxvgQutaqH6TZSQaNLgCG93Gfxf7wBwG7e8hrMX8qpcSH5VQX",
  "key3": "3raTZxtou3r3TYTHy8qLeTG7kfjH8SchWS1wpwNL11zNNPwok6qGw7xRjiZtmrUtALvdzb62DjMg58aEv1RjEuUS",
  "key4": "5yXy9unV6QYqXMjgq5NhPkCVqJundMC1MhL13KBbpPX8YGvhSbQN1gHRBh58zHwd58BuPYp4f3GJjxnMBoZqxK1Z",
  "key5": "5VJPWvuSZN1FsJuyDj9FqXfcSdKP1SftHksUDiHx52SXjVfRL39GpxtvUBZ5RxxQcaGVwa823fS8CcNuMuYT8P71",
  "key6": "2BLYnCjAZhKbw7NoP8pdcFdjpBh5cp56FVTSvjRM5LDukbwuffLAU89wNHMkXTnYkbRmzPBsRStBZDSXJfHJ5K8V",
  "key7": "5HGWX9FdVaKRcYiJeMxZZgF5yWgY8fMJ9YSxTk5ziQA5jic3cSA9cXFy6zg7zc83WLaADx6mXG5Y6NJ1A14hWnMs",
  "key8": "5QXKbxr8UyKxcCek4U9Rbb1f1f2yB5H5fMDwhZd5V97U42uEjLCH2J7Bs6p9oseESjfKuvNgXYCyJkn2qPm4fvmC",
  "key9": "5uZkz51jYLBUTJqhMpVk8dMM4yC6LuofkPYYUxhkKcnWD3QhFLkUHGDwuX9LdV1XVaTWMXJJEYh1qMYCvWDFBodn",
  "key10": "ymFE4wUXdxXqiGNVxNR8nJQC5F4aY9hzF6wYJ8tVvuZmcFkBTZWmGyxtuWGKKAY29KbXCebn8xvQMDGm3LKKcu5",
  "key11": "bRc6FYDKK5ixHeaBn7r71si4aMMTYVLHuuMS2BpJ7Z4jySNZrpu9BJnji4vEA8qeSVMNJd2SE7dCxcyNAG3Fa9H",
  "key12": "2CDQEQBx27MBewnRzcFGFxPnbpCLJvvsrDNjW7HNUWu15LGJghWGZBnSmYo7JVgjw5QJ8aQTNBh8wix3rci4hPh",
  "key13": "2cboFpFDAw2PXuseJGgbCZC4Wu75Eg9aAHAXhJmVtgSNGd39nNBwNDVsFz2cRgcxD7zaKs6jJ1iTTLsK3ZPDYd4s",
  "key14": "vfGHds4xShjck488WP9wJNuRs4NbqJvkbiqRwJbtBUDTxAW2T6Mybu3MnrgLoG9ozLZAeWumioJrQptufPMXpHQ",
  "key15": "3fpbVekgHXuMehNivgns5fQjQ2DqE1Bk6yQFwoxroW8H9GsT8wLTKC2WfpYSND5PFW6yPXt5NGuSVnd4ttCUpDmT",
  "key16": "ZjBw7fpdjtTkCWxSNv2QGDYbkACQxX8S2rt5Zie6TuvZ9ZEVmzFY1GGYhXFvNwmZ9iqi5jWq1X6rrBGXqsA6WfF",
  "key17": "5Keqh9DdrRMct7aoLN9TBsJqyKJ7WcBPCgLT4rLcM3ru39joq41LQ2cLXFDchR95Dt4gdSTJygU4mVc4bAYxd5bm",
  "key18": "4mGBEG94VuD1YJ1JhBs5HEQ8e3iQEewuXX2kW2GovjKzA9n1tskR3Lb4TyLBS5ZaBsQ84rkKvq1gqL9hWzSQo2LD",
  "key19": "5REggUbvbSB1672sCWcnnJqgSsWPX1QGbocjx4tPdKrKXSA4PLibERNy1BWsC31RryBcWLJxKvqGXAwAath2jJSR",
  "key20": "5e9tY7cfeAJrTMwKKkcCvTFLxNDtpaRR1853PX7SxePELqWAWqPgm8crbX4rk6AvcLyPFVQUNmUSQ6u2Gh6HKDuS",
  "key21": "5gYwRcSi8u6akJ214q9ktn7JVEXqQ7MKVLnkjERg1u9CTczw6tyuCrcHtv4xovmGgoLVM51WYcQHq1dP9LfhbhMP",
  "key22": "2FoSZR8ydhdW2hpNgF9ooryE1SVqjBmyJUbvQBQ6AYj7jJ8hha1Z8F2sJjadbM7ycHu4D1CVEfivrEKAH7G6qSzp",
  "key23": "5W5W7w9Bsmz6ASowxRXWfpwPe3ZJb4LisBdGU5oq8Xd2p7zxfDWMy1djRAkrhwp6stpbNaBEavYzYvSqTL6ArD4s",
  "key24": "3M5E6B8grHiUq5JfrSiwsB3wHyS2ycr5qJRsj6Y4YX5PnED52bBsaKnxefvd4HV7PoXSTjWtMueHAEJo7SxcrxHR",
  "key25": "3bUUAAgQQPxzRC9MEs7ogVPXbgvG3YVenFmmWvoVGy1BHQ37gWHt4HhB6GdXojusoW5JtVmxvkoFXhHBPvvXawU5",
  "key26": "3YpYTedRKjnueq8hF9thCFnGMzZPfTuKGnhPeXcANPb1sUXCWSsRXT7x3z9rYqZFScVWQoY62RwtXmpe55i55UKQ",
  "key27": "4rbLY9j9miod9g47mkRB6nF4es3EewtH4gEX44iX7EvkEg9Q2zeazwzXxcbXDwn3TH2w2SeNPqq7KKybeK3udPYs",
  "key28": "3YcP9Qcrr4dPKjcCnASM8QDRHyAQ3HFdUC6AFhVRy2ZSSgcPWCi8shHLcfamTAYvJx73dVedujc5ZWAsXP1N7owr",
  "key29": "2bvQcTmaMhJWVNPLCFDCQvJz8JpV9gVwm6uMdiC6ktLmaR6ugDdjxSBJL8FdidZHv61BS5ecGr8aeripEiAWaRL2",
  "key30": "5tLP5JCfCH6wSq6MJdqATX3fzJAXdJPdV4Rrwemc7eSchEGGi8TE9FjACpni25gGHxNrwQdeG6Wb3Ro3g9RuwEsU",
  "key31": "Z4gCKRiC8pAyLHpJYzTvfUYnCtBdSDmcAj9HLym7k8ASDrp434vS8FfUUQPthnGH3gGVQ3Mtv7Qkxax3maFsSyW",
  "key32": "3yGELc56Q1wzXNaqCYkD2CgxnwBhxAMTwuAxTRYtCSvRp5yoaTb4rz7zjdm5nHTRPbYao78ACr1iDgrwi7kbSCUq",
  "key33": "m64xKLB5qMX5LGvmQMz6x6drpStEyxoApAmpBVs3iVdywMpG2x4kwuDPQgcTwuQnPtmR3T9agjbivBQ11c6Q5A6",
  "key34": "v4FPaVg3Nj5GmkXmohsQMmDhS6So6R1dmDBxZKx2iQAd25Y3VU6tRdPzDQCUiYwJMeYnAX6YF2bDmeR9J9b1vZ3",
  "key35": "J8ELjLTrzq8fUneMXvc1YtaW6RRxDGoZawer8VUFtVBpus62suYsZqEnxjg6J5jhX5eN5Dn2442RywECcyBYPBd",
  "key36": "4WiLd2dDcdcm1P75wcQA2Wm67sF9HFGHt7G3BLowgrACzc7ZgLjLuVQifp9ojb3Aqo74eYomc63yRyhrkJKzHsfF",
  "key37": "3sUasuLTDDdRM9TAbAuJdu3WA3u8vuDfJAKZoUgfkvVvrEWn7erkH75XTM618WMawNq3Edu123idFbvLdfnGJRnh"
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
