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
    "mLvaYcBtWrnhpoGQBifSqn1BaNAcpzxdZuBrHRRJ9hMSGUJU4M3iAmgy4HgoVCHCjiiEhPfeNLCscAjUAGy7Pfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55wxeoeiEjrsLwfCZ8kJFgMrGPiuakvy2w1bDXQaGp6KCNJ1cARa9nwWNawKmH67gJDPkjXdGJ6gUBpzEmVvBKdG",
  "key1": "5khii8FVyzHskKeTFwdAvyvaq4Qm5Z5nah9RcPqYQbEv1X7pMumgdx7NLemAvTrVne5cLdyT54T5CrALFqJWsFhS",
  "key2": "CNPqiC413gdRtz2eTPE35u8ZCvPmR6vC3B6JF5p9dseHU9GvvJE7CABwLgs26C2ZskJch1qwkgAHvAv8CtavQiy",
  "key3": "3XiFpZcut52YqhtzWQ3TdTs19ERTCG3jBBctA7W5DKuPYiwiT9xn8bJUe1zzeiha5VaKUANDM2ay17Xj7764i9Gy",
  "key4": "5aB1GvZyihuF5ahNiU8ik3wwrLws4dxgcB69vvX9BdRn3Com97Mrja68v8ABqujkK7Ummt3td3nUCP7vJy1yRBt6",
  "key5": "BtPrr26GBeG2DbyiWePSHr7nDKZA8ihdybqHtwkJoUTwZiCT7LWqeVTRF6BpaFspXuHTNrud6KqLVPyJTqng7zF",
  "key6": "24Rng7pPyiiEX1W3f1nzHn1WQoDExjscYYn48pjFn99NV6fbj2E7XKYL2BCEkYd6yvXYKUnGWRQNcNkTy6fPDdk5",
  "key7": "3QT8bkHLBqUQMUKtveTaDB9DUMETBBe7kU3xarbFaacKZjrMFW1Tt6eBsKW5nuWucYRAiEND9tTB4sjTxxT7QtMp",
  "key8": "53SufaEiZNnMPEH58Jz3YmdJPzJeHkvxcYgoQdWnTwXMBgrKGpWwX7kEo5vZ2od8kqPCY28kTKdF1TKEMkSyrSTN",
  "key9": "4b1MvHZc53w1CiR83kKRg7CtxMEbZbwczRq83D12qAg4rKH5Vd6aXX71x2EWiEdN6zzcisJ4HsbkA7CQisW9DcXG",
  "key10": "DvUQ6stKvnvUvQHY1CWPfJczXzoYoLxuVRT9whjz6A6SPjnpn9YHNwBB1pSvfZ62AH1boHMDMxqQwFvSTZZV2F1",
  "key11": "4Ess7oqe8NGyq2yhBSnsDyuEJzKoPPr45B3m1dCeiMxvzLzAjktAfrPLYGk6HuWWyyuxFoQvHJwcYkpxHNTHBtga",
  "key12": "41acc3iNLbJB6UEjmS4aUGUhSH3Tv8BTaX44uWJ3ecvT4Gr75eMyndnm8TARHkp5h9XeaFkNW474uKiZaPbTXfBd",
  "key13": "5kogT59ZZP1ehHGBnHiWexPJaAN4M2VVRY1VSQmnvtoY39wewxeLApz8VCS1R7hhA5V5sWiG88FVynJsjDjpMKmC",
  "key14": "o9Juy4Mm5bFZAJxBfQibG9Fx89rK83KCnGSdCY3hXjKCtFVqkW2GhBK9my9o4c3ramgFXeMuHKeznb3uioHwZ8i",
  "key15": "63Dzk1z1Y37bfu84f2kJbo9ry8HMg6qZGUEHHicqTt4k3pQwLsLNCZjHt769BKu3ZgBMV15YTZWtAba24qxKKiDY",
  "key16": "4yLZY2WNxZBGMzkPjnkP5C28XGpWxxhVa6NBCvYQRi7xvMRbJEAGPokZWXTPXqQPj6VhMNoSa3H6yYwkRyh21Hr1",
  "key17": "jpaH2aSkYqWKm7GgS9KNG8QF2GpwwhDztTgb1ZY9bqmjvUx8LfXqKMvBStyMB2GH22uSjXrJEPRg2h9VzYEdjk5",
  "key18": "2DuT42DzAeA7VNFbdRLyMyiFgxEuzvUUvmBYjrFroQ623G5KzyYLUnSMTXKCs8NFU97aZvfbEXrNbUYkRZNqmZk3",
  "key19": "ZkqpPxFpfUKFCgK2aEyvAteBpF627XEsPpX17c9BCDz2tYgNiBFG8mMpJYPg6WMRLXHHriZ3mkh6sFUSxScrk4K",
  "key20": "nFRQLa9NHA4WYyG5CvSW1pRhA6iqitniHpBMiJ1Rd3iUhkPuKJHjTAJnxKSz91GznDMfrkmGXM6oy8BNmBtr7vG",
  "key21": "3gBcK7s8saJ6UeQSidwWgHGHzB4HqrWqhTHtppbCxBFAW81CQddWFyWZbUye6hduxwoT7GXAGQwkxoZvfPTF2FKd",
  "key22": "46ZYAxfXmzuQJGekLyej2m2wKjjFvuCdvX9NoojqaGXec5suCkYeX7KbxGQwu2R6hbYbjxon67dKv59JoxtZUTV1",
  "key23": "5d7yyWZ91KGbeSU6kNw7bofntZZ91Rf85DHAxUJMqWZ6c2sxbqD1bsHF4hWn1dyBNaURf3TNG2ui9A4fA3D9bkNv",
  "key24": "3RRo53n6gmpG29rgR3kdzHNJWgPo8KdRgSyBr9utmsrcUxxPmECzgRJqypLebha4NNypRbxNTkjHfZyGnaRdA6w4",
  "key25": "4tXvBqktVc1NA1VjkLRAzbBYc3Wnc313A7ZKG5s9eUvr3QFJTbx618k5e2NJBNM74rmKTjoYVjjTmogrcwQ3FP6v",
  "key26": "4EbPUMfJnrDeNyAP6MvVnosbbagYsyc1MK9vD834M6ngquh1hd7BkVGY7sgqotm1jWRxsiF9uyiYZCSGfiBxAjUe",
  "key27": "2SBR1Gyysyv9AWpFeBMfQwuvodFikKWvY3W4kDqmGbxxMsLHC5qkeruvczxGbWzH7RFAE3okf9t9ZW8ttTqBjSBB",
  "key28": "2jj7psrRaQEHKavjrpAM4xeGDkC8sRaUY4QsKEtN9SDL5P7BJMomV27xMF4rPHSPCoUnHWVL7wUH5tQtxXtjHGPT",
  "key29": "3skonw6nK2FMHTueUEAA8sEsPpgGRCyJ1KnjH3h5AvadeAcWA9Qr4dnKspBdLMVbNghkSNqkHPUJKoyUbhvEd5Ej",
  "key30": "3re7a8WVwqCvBSYwB8sH2uH9X3KqhMTD38KjUKCtMRAxqnx3E4efeBthjWBXkbC5sm6e9pySvtDsYPidP1VL2ztZ",
  "key31": "eLkEyZmRRrf2tsSVZM8DxKTerZ3KDsXtGvtZ9843wW7a2KVQRHDCbAjoJtLCiAgn8g3ghqzPAHdaiXG43yfPtPp",
  "key32": "3b9JqEaXPVcTRSBXE5JahtN2sBboWqmXN1cwrw3MrxWF9hGCEVc3ftm8mB5Vsr2JQMUQaLP6TorXnGFYpT9cTVxj",
  "key33": "tkepqZotKcdQRcf2LbTcXCeyqScNWHs6F91nn71s5obih34YctXch9x7n9NR3qMQD9WKuRmvczuCJSFAiN9VTSr"
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
