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
    "MyoMdtiaXvFsT2vCekD9S5kLVotJqMGXwATCNzhmuYD35EoPLf1J9Kfd6dHEZ3znyYZ6BqLgqfvPAAHdFYaR7QG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ceMJNnoqbuM4e6vYd565xBYJKTUamgYD9xwEtiCcvenG2mv2wQdr18TptPot2nSmZtkH8Bjg2D1wdxx7ow9gXPz",
  "key1": "21WbshrerE8S2TVzwPJr8qfHik6MFnsAgG9uzjKxfHxjUa6KnSxVbQkGurh3cXj42ErxSgnBPUYyDqSRD9yrkDv5",
  "key2": "3e3uqqaHWbSsyzVuMttfvzogHHQsTGRdNEX4SMtVVTzLPH6PZ4enxXoE8A4BocgWSvwXs8kdD1QSo9t1s1rPmapQ",
  "key3": "3pwQvErS5KRqRDdLcpt8JUnu933jmi5dbRDBXbP3tc3Djzz5aBNgNd3cgwXkawrcdzdt39zzPxYTBUbavMbsyzWT",
  "key4": "2V7v5Xm8ryb1aqtkejMSYCi2rNnPqo4iT83grZnmNAumFAqaazQrWTX1PncXDWiXWQqbuihuqgtn7tcXQaQHVM4y",
  "key5": "QZ7GYU5HH7jXheqExbW1SCHWCemmCA3MLQoBsN4sCTZHgiDZUhAARTUFmu3jvnsqYXdjNPdR8MtSnewHdrcCefz",
  "key6": "ZXYVJdNnd9Ey9w5hMZqfhRbifA321t3aLwHFPd1wsP9UU9wiweREnxwRpK63pd7V6yd42sFbkVFEKFJBpF5ePEb",
  "key7": "3S7MCHkeQLB6HBBdgwh3g7VtuyX9U4VACbT8frTXNrTSaspz8Aqcbk1h967GcftetZ6x5UsJbrPTe7uDivh7tDtv",
  "key8": "21ggDFPEo1ZTpRBtATzhqDjr6ji7KDFAo7CzyPBkmt2TJNSGJsQYVM3RRTDxxKevxb74bLRDGorytG4WSiFNicFg",
  "key9": "3NPParNnLCxey3KBiU64RMDUBvKWQbcM7mWxxPD6ZpRLa4T9ouLihEB2bcknSiRzsGzVTYy3MaMvRiuMUuezMxv5",
  "key10": "5URkNKLXxgF2t2fkk7nqau7kr2ybPziyiKQx4BXy3rrzDBTpLy79hhCd6SmnwFyT4KxchRCYVERjT4P9bS797TEL",
  "key11": "TC3tfSuVy471siHjP4kswn9YnwfVgdrfSM3xFehf6fK9x7SWhdJmAFSQxPzNny7B5n63k9zPKj4PdWQZYz1wJPB",
  "key12": "67iUvJBJoHViefkbY7QKywbEEuj9a6f1nAT8XSQhziugjEeZ9E2LTFCyA3u73TNsA5HWnoDjapqrsrCasRzeRPf6",
  "key13": "5jxnkU5pYJNFyCDGT2Fa8CiiBTLrFtK62qW5hF29wAQEkXRQRJrNLPm8qWRrdDS1XDY3JKTCRCVKUevqss11sZjF",
  "key14": "65YZHYLvWsbRNUiDY5jNXCzTrQM8bxYwDmuYAdUZEh4PPVMPaV9Drfa6PTjrvKPBjXnKVNEEbLxxCX8iHG2Woq9T",
  "key15": "4ortCHwEt4zQn9nqXZ9Wb4qsmb64L9t4gMiqQEqJZThdmzLtPfypU4jurwLg6JiaVSPS9jx9ABKELmW7HAtzGH77",
  "key16": "3UwPDyfaTFvjEb6GenLHNDfLb56sQJQiPssQtQpaQKsbn5mtNM2d1EnPu7BCgtqC6cRsDmrKEXWYXpj5x5RFrLcT",
  "key17": "5rDXayjPPmC3bTGKKWs6cFAQ3dVamwSeQEuNYQFxSzXCkMGz2aQWy2v5iuuRKLZRatQuo4MPBFnPJF6fQd5XSC7R",
  "key18": "4bkSyvZwfh7EWBPnfrm5h8fBBSNDWH3fPujJTvaXGmeWtqKcSsVNnDvuy6hZrRzmGKqxCVcWULx85fbm1w6G2iw2",
  "key19": "3jRKZWUsWueZqQfwLhNm2DqJKzr4z5mMDQ7yiWKnfuuPkVKDuTbQdpQuAg8yjnSrpn3t3TMaiqLrFYwgmKoXfKia",
  "key20": "5td1mHjT1GAyje5nrKeWjHE1UwwyUjkyCMma2saGGi8hdgVpxSawcbVXa5dwZZGiuojAjgVuTXQyiMm6JbEqSJAd",
  "key21": "5WQCj8sriUQHwfT6vfN2CxKgavaomgCRiBFeE4VVRKWZCBoQRBb5pKcj5d75q8HP5H2kUWLgWdqaKe7M5xonxMev",
  "key22": "5xgPwhtajKjCB76DN5QQCXneDUpsh4kP8Y7CLZ1eFjM5eLntWehBKgEGAKukd4QER7CGrjyBAHY4FxeUGPYBW7SQ",
  "key23": "8CryLjbkuEDfHde4x4q8e1JTPC3moVweXQQv1Jr9ib2MaC7urnjMiKrdx1VeVSFVjpvGitvkJ3QaPhJ4rfG51am",
  "key24": "2ARe6meKNpBX5ESKmVrXDVcj1zqhsvroNZVmf8mZmMQaDDSi78qGTaog3pLSXDYk29aHHqaa7Nx3qQAXJZPnKZ81",
  "key25": "5BXFxH5xMaof7P9h9FzeA4psAib4ehhGrv3W5t7A7NwoaYnfqEwDaXmF6V8dUVC4vve9s8MHGBShFYNwN3RzKYYb",
  "key26": "3p5novvopjzVa8AodP9GiaKqnKrRryGFy8p9USqnMhgez7b34qgpen58pjTWwpqzqrpTbJXv2MHoUBSyPiBuTVTb",
  "key27": "4ZNprgxh7tnKobvgiLpDHVBSZBMtCgNT7qjcnYj8HyN5gYmrsgEWjczFd1Y5U2cpeW4m1mDg1npF5cwyFM2cQGQy",
  "key28": "B8XheqvkxALTQGg21bAPUicWMPghBgUgecxj5Sr2Q45s1AZ7nZzFRpfCUbqiB6gv6xL564RZKQJDMYcgQJmw6U7",
  "key29": "3t6cjx1q99rqEwuXe2AY8cnzsyQz7k8utGAjpA1xawHGcqtuNCvoPaWQ3nf1fP9a5ijTWPZdenBEKQBxQqoj4xee",
  "key30": "4JyBUMoxNX4VwXZkSzWfbKUAP6s37uTfvJraHxdbEp28nmGGyHX4kzksr6AKtz6LBKKutfe6u7ehic3p6sZcmM8r",
  "key31": "5nA1vW6rqcb5Gwcdao8NnQbSUGX2UW673qifE4AagQEB7WyqyY6CD6rq5AVfqiCDhTcPXtjjgEka7BwPjgqCT2EP",
  "key32": "4VyvkvbZu4RMeXZbaDsmjqo628R8CmEqPsW3mKqfFcsMhviADtekzhbsqFJEwm42A4Sm6PhRoZHtip5dPAZWwYjy",
  "key33": "5MWXJdkbYUWGtP7KDfEPXizrbMuA7QvErpbSUJbohznFthJC7iU1QHFJi3WYWiQDg78xr2tKiVjXJRbZmLAhquo6",
  "key34": "4YqJxkdeiMga3sVxBZbUcZfLoNEDgnusENf3g7Xzm7FH1CLStnDSX83rhugUbN6qvqjLpN67nNAVsABgiz265XMS",
  "key35": "2GY7sB16pu8c1VH2zoTHHkKVnbmPwEQrRBQpDWQx3VTaSoMz17YxRbdFFpZNHFTXjYVmrKTjJXXm8byVoaXHb3JE",
  "key36": "4U29Nq2ELVf4VMywxWJwWtwHiUU1wAau6hWkYQNHwG2zW9ZCzH61PKa1WCojpki3iKAdY9HJSVBZL92nX6BTowNq",
  "key37": "5jCdAHDjCKeHkR887n9cRTFSjbdPx9HxTD5Yre6BHjVKeiAKx3Jr7d15TatGtSK4USxEwYkJAHy8zJsVzVE1dbuu",
  "key38": "bHPSBeW6nVtYoBrTLsh2kvBdGfYNYcWtjXStKU1ETJkaQ57scgFSVWS5Sh627y73AzhJZGLsd73W4igejYxPWE7",
  "key39": "5gvQ249cuVKE67r8CoWJGFMaXfvCAkB3Co8bwxxp5S13AZ2ritHgqK8peuGxZv3DGashHjc5n5BAdSX9w3diqBbP",
  "key40": "3Y7bzxVb7erVsn2tZLXQsxjSdjnRQY6bKdjKMdSFFBZdZVVNT5Mjx28YmRXSY7osEMDQXbXhediy9MiJgDp6Lo4w"
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
