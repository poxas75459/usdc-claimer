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
    "4eAWc2rhSNtvaQuvbv9w3X7T9QmmxkAew5YjjVvGiiujwNEuvV7GAf8DTJTm4fLBA4ZegzmzMVFyqsPbJs9UUTyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C9xVZpitrBaPPn8pGm7EBWVFMV9jowFdXvjBJaYTRZHYFPCUpNPSzHWoejt3F2uSnNimBsjv7iTTL4k8miiS1rX",
  "key1": "atqqKj5xknWuMu4oLoi4UNTKFniQYxrvSM97mRY62W5sZaU6qzJavDC7f9UWnyMKYsY74GbtXXGHfZetaTotSGN",
  "key2": "4hWFQEve7ovB824Ub2YbD1xRyx6gg1dTJnzjZyxiCAyXi9DeU9DKUHRHkJLH8mTX9fZ2vs6sgxLcmPAX7LMKrsQe",
  "key3": "3W4aqQss7SYUVzYNC2b3bpMW6UJPBZGkoM4ZetiUWzkLVYcDpFnEjMPmFsika58Kq7nnzoqNRYv6wPnYdkZ2pgCK",
  "key4": "Hri8d8HxaaPsHHNbCtqtSk7hBU82qou3YfUYHxPPf8sG9iqKBnt8kYpVsp8rnGZ1BJbjt2GAwFytMQ6bBkgR1Uj",
  "key5": "3JeMkPyE92KvbzPcf5duUxZLNTEoMWwzLz8Lk9p3mu9NnJtUWen97jKXjNsr9edwLX7cjM2BcLfiqS772sKpxJKy",
  "key6": "5ofSadpeZhvuP39woQmmGJnjdAN86T2vYAQvAYKni6AxicNzm9qwZETqscRhVNcmeqhcuQskDjJ5owWv3HmhRSY4",
  "key7": "41R6k6a1SHRBWDpyT57mqd1kMGTu447iDri8JP4ZquZPCn6kV9TBLVLfNGWTp1NiFBdFdz1qFBdat4R1batjcu4U",
  "key8": "4C2dHVraPPjP15R987pg2wVLyYZodjPRAMeEH6FyL38RDj792U3kER9xFWkRbMN5DVcuYdatN181QCj9XiznCPJq",
  "key9": "6EcPSJafSi2posuotnmp6pmpXUnz3ARiUraPxhLd6en4P5dKLYCToD5ZSDf2HBWCGBcz8tUYbYLqUzvEAhAj8E9",
  "key10": "4gRzG5Qyx9qyK28SFNJSNNrwcpeLPpVLroe7hU68ZPV2yXMEdy8VQCoSmeethbuwjiYpPtuejsRHsKVCQYjtwhV2",
  "key11": "5uNeyqwbHiJVEfGQksQyHFDXqmWfU8eEnhYJCvkhHXRKTxyQC4K2mQx15toALqM1Ag27i3naaZYAcdsh9LkXJm5f",
  "key12": "3fvRfmFmMBBDnzRfU7JyrbNoTu2vHH545o6h33Xge1MLu4rZQv4cTpTxXpTdkVuMhf5soGYkUyqiswTrEDAizg5w",
  "key13": "4L94t3r2gB3vCFKSgqNR98Bb8x9prrBhzUnhEcmNFwfK5oPhL7EGsJthhqyJYyksh1ZQDcCnZ3UHe1fCJxLbKHLu",
  "key14": "4w514dDrFkn5hkNkFoJWbXqGCpyY4MrXV8quvGKZymLQp4WEDrVVPoP5AvfYHZToaK2uNx8aLFKj3K9es4XNFvtj",
  "key15": "3eTCh1fvPBSeZ7nzTvK3dLZuxpRFSYmcUrFPv13jE9s1DmkUyfJRtG2jtKini6NmLS8dTLcJAnsfmNTytN7Nh5vx",
  "key16": "4fggJJtmE1EZZpEUMLQJrYxC4wYc6gwqieoq5X2psmKBuGVrwScdk7YWMxEuSVG1RX6q6M2z12pxrAZDnAbyZcJ2",
  "key17": "WD1U4c1F1Uwyw14ZWgYVdPGrk2ks5zTRdnsd9Xy24LzWu3HqoQGvTR4K8iAiszXpfVL31RMry98FicFwwSXTsbQ",
  "key18": "564PS3iwmjmrmB8pFd5Urm6xPXZFGXeiXFztkV1DYpYCohH5vEX8mtkCh5fDgCvqRVvtUVUt5tLUeYvD13DTrosD",
  "key19": "4e66ARwDA3jdxTSbWJpDMdLFpsRe9uCkaFi2ypRBcfmGvcfMSGr3py9FhmBG1TNtFTJ4ayEygRk7yLeaaHy8W8Kx",
  "key20": "5oBgYwyYSXfNSmuC3zCZDiv99ncbA7a9xg1oJY676JT9zwnDBhCznBJ2XgzJ1dxj27WDY89HVkHJNeF2ySUuTMGe",
  "key21": "4GEhJdfFnweGvL7FQ6WiDC6XBZiiwFk5fsY61Qc7S4L4xGZ7nk3c3wjCTyTKnMiMzteFk6XcBc7uvkrqv1e81FTC",
  "key22": "25iH8kQa8PsQHV37dJeqveHV7KgQYritZkMBdvpbcpCX7uvmJ1RbaYf6c9NFUDgMjFFsDGXt6grGfBfjhm65C618",
  "key23": "DA3eERBpfSZpTSbmrV7Jajkv5TQXgzgugXmHdv1h8aqYWfGYjMJ37DGzwKNQaN9GRJBwXjFsRqVquWN5ajBS8Z3",
  "key24": "9AhjxJTLjLDTStJDNrx5tCdk9qPDUXs8Ux6nqhhRKZn4QBWYCMvxauhrg12jyzB7Y31SFUBRqvzFVcCinDqhVPb",
  "key25": "615dnxucsZvfPcPEcL4wDg8fGKL7utvt27MyQdUgiKFysGjxJrMuv4nQovZgvTSCYLM5nLsG7JTSNFZ2DELbfSTA",
  "key26": "2EpXRTCEsMyzPcHJvANs8hPX2UU4cEBd19WZdtkc1baHPR98RDZn4XBMCRjqmFRmQ26v9UHLxKnjU1V8Eymz4W9G",
  "key27": "5T5VQ6JATWZJrv55Mj4Y6q9Fm7GCC1xHAqT97ddgB2P1xHyNApvThzSuDvQ3gWtLxM4iEkmtgGwJPcxKBbaCWmaW",
  "key28": "4thuBjxvkiwDZSphU47MjMtnq2ZbVi4kGEvckQC9JYf1RektVZehdbxhua3nFMJ4382fHqZS8Mzt1uoLMDYSQLwM",
  "key29": "mKgpqWFceCNKmpNjPWKyWEXYcGZxnAMjpuzzEH5j9ZjRDHKhV5Ym2ZDScfSgTPmUbgqE8WHzww5krTGFStP7184",
  "key30": "3ToR69cgvUCRWpSZTD13PZk9FsuqhxCz1yni8x5duPw85FFFLWydGDJSJu1XYA3KFBorx9oVzrfMreYJeNp2NneS",
  "key31": "4oAowuBZ36iCHu2e6a1hhftXDbvK7JU2m4C6jCKH9YCFDbCu4uMWARvDpybRKP1PE69RDnLcKm6FxpVvdPHZ3DkR",
  "key32": "2GSwiFfsesmskrD5bhifo2o3x4drWHgE7eJtg7huT3VR788rCjeFuhzVjJmsoXpckzV8tt16RAG2QBxDGm5dkAq4",
  "key33": "5F5BbELe5RXE9n2ZdPreVMYy4Ng3Vep2UZGZ2GTtUSQ4NagmvSAKT1EAMyARaekT8Z95VAje5ebFfQ5LyXWwfUpV",
  "key34": "2o2YAMSHnGLi8npUkTyk8a6jVbeoDoGKvw3guCyPyrFAyah3GzAvvnNTSwYcDLQregZyZBT8wkHRxwWeYV5hiEvf",
  "key35": "232PDNRAxP2JaRtFVNdEGv3WZiTnco1Chw2tLxyECrt57ADRCaebVUd2Z6p8Rt5JjFt4E88reyQrwFEopUUKoyyt",
  "key36": "2RfrjD7wiqN1hdMYeg7gH9RAvi27bQuiTpW5HfSLC4Q5JhhcChp76h1AiVqUJyighaCeVXjhRPrwZ7XKrQE2ZLPG",
  "key37": "3iXZ3rTLYcJWm6DTBs9UYSkhEj31GiRJHCTsWZKrSWubaUw3y1kCWZbXF2SHzTzytvKCnakNiiCXZjxMLAuZbg4H",
  "key38": "4P4NCEUTfVqdtCMDpoEFevNhxipvEzkr7obU5Ta33EM7EodNijmHphw7Q8fh3z4MP9B8yh7KRsMcSWBrf5ssjx5F",
  "key39": "wvuVtcshaeh6JmWRv8ZcxRZ7PMiAvjX5e2ZGbEaf1r3nuQCocUxBxtS3pyLBVxwqXkJbQgjRhHG41cQsc16YJrh",
  "key40": "4cTChNrLNC5seExA9eqt1iXen5dhPSVdAHGxmZxYMKFmSQhN3ZkBx7N4NnzwpzokbWrFuoKR7CBNmK8kw7mRerJi",
  "key41": "4tfj2EUA3akfD7pKwK2DeqKcw4v3nhU7a9APcXS6pppEsG6duPwQ2jiZNhjhzW73FKtErefxcqmAfCiFcyAL52fX",
  "key42": "2NhF3gAjLeA6i9VqrfmpdMg6SEjSAehbZ8mmhZkdYUerfCDUiWz4e4ezt3wvsi6J6ycozn93MisgEttyTD1qdNWG"
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
