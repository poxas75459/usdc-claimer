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
    "zaEDVnhi8rKEYY87pbBHsMBDKcBmCBCkdFSvuvX5yFqGE62KPCbvpPwsn3UqRHcRLkso3aytWnQqkFap9xhokdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S8FJTca4gmdk8NKL723xsgVthpLuuKgktgRa7GcVcGtLD1D6dFHU9g6isyVGdjFsN1EfdxkKL4mo4Y5S4Dze6zr",
  "key1": "2VXfGpr2hV63WiLurEMVkUcAX1zY2Dz1NhweySaLZigUVuvTejLCSLqz6sD9M8agJV7aJV7dXQmRkx5gyHNpvUh7",
  "key2": "4rqqKTnqFApUR9iRtfiqwgGoncqiizYddiuV9E8pQKxeqE97YqGKFfsnLhvUJSXpwEhoMk3qDBg7tk9rZLjeTvpv",
  "key3": "yas7uUZsUxQW5Wo6pKFgZ3xQvrDz7Q2BxKudybRmnDdG5uJzgHsNWkMhCK5fvMTre9vE7VC5RAyFVjqEuui3ALz",
  "key4": "2NxAauHSax6JUTi4jERgfcPdXYAF3S8QPVFYusEZHxJdPTZ3pzySb4sGEyUXKf8iZWQ7qBKT6NfT1XAhteDYeYWn",
  "key5": "5TVo1k74ouaPdpa2qpjfAu9cuNNNBVDi7NDiAXVdSjJCvemKtD3fji7ENND3X8WEi2eQBVYRDpmdeDUeWA5fpV5h",
  "key6": "fiQcTZTdE5WhPnGVr6oBn6XuE31knrXyiQSoSkbZ6sKeoqggqkPC5faGuFmJv75xVKPo159EowGs6g9QCZ3NdGW",
  "key7": "3Cu9PXKndxXfXruNJ1YN7cnhPoom7hrPBPp8iumyd97aYwb53YZpMX9SLKFYs3hhQpZEReLg2icFm3tBCw3fVdxR",
  "key8": "52U1TkqtfJ5hMuXDyxsGf625Sw3A1LzvMht8UmoiqiYeqvKoHeRZ4XyUaig4dB77PXU3mWXyfvwcZoEHhLaxydhx",
  "key9": "3gGtJxJX1D4Kn1KRvVizs73ZqhyWHqFzqjPbv9tw3njbyTMaqVtfCjsdtHht2ukctQcRPfCThDP6RJS8FwTkHuDJ",
  "key10": "3BcZczgUAwobPvHuS71Kpr3UME7WC6D49DHSJjXMTQqUFXZCSQTPBXC9twkcb4nRrhcQwsVhhUL9fTvABRda431f",
  "key11": "4Q9taExN2s2Ahc1u7Kax7HrsyxfYpMbUfT3yFVgftQR3DY1QGyXYkLhQkSfZwBpyofyt2gaqPxyqwarFD5vwzNFb",
  "key12": "4XxPzxkmW2VJiJGyDxq3WEHhRTEwSfyySZdZmHNbVxPKkVE6AdbKbrhNDSBX8BhY1v4xQsduSiiaghThAygPV5sz",
  "key13": "zKHW26GyerFwykSUFBQKjKUbagjTqHCyiZe77kvScYQ1fSgsNcpbHD5JJ4mF2FCsGcBNfDuFeCnvwGSoVtinDRj",
  "key14": "5xAakuSy4M14sKhgDxXM1pdbAmQyZ6w6Xw59mKqd52CT5LCUtcdtRSVgiZMZgYXAMFheNEoiLT2X22CDLmwpGBso",
  "key15": "4JX5whgxJ91GBRMP1tr4Xq7AheSmfNSQUKBWzsYDhJSMtdbUVk2yJXXVBQGwjh527EpBg4y51TZnkeVvAdK152EZ",
  "key16": "54AVGWKz3DjRppfXqATZGqWiHATFQ8AEUTt8ermKz9cga9XEk8bjf2oP7DY32YPwBps4obiTQpCC9sKXzdf3nmCy",
  "key17": "3ASeqCghwmEffciHBCjykuur3dSpzQGcsAEtLBqNP9C5MtW9DzXXUWRASY3U43rauebHPvAA6aBGfpnWSYgZasg5",
  "key18": "3Ezz4fHontoo8YEEND3KXyHXu3zrogoot6t2Xx4RdHgvHi2n4fXMZviMB7DfyxSsRNPptgRmAH9YtS9z7Cb8Fatx",
  "key19": "65CakMuMEv96dnMrAavVtK1cyzyckUJjESUVq4rPMhtof2wQpHW6tZZ9dSsnLxX9vHvb9GLm5SieQ9g9NpjHynFh",
  "key20": "325jCgbpa13W6CYMjStTmfokFyYCJLBHNBPdZZ3wK4CKhPA4TYz8upUgUW8fcqN4fRNn9QCUyDu1ksnfZcDLKQWZ",
  "key21": "5nR1aTxd9hNRfxj6FD7DAEdPJVgks1RWGs4CDT2PoZT6UfUrDU1jT7wNeNHHN4VKd2ATpknjMJtjQW5YdxJAHsM4",
  "key22": "3rzWY36iLKdzdnszE5yUPBeF6QEc2DWgQ5ND8CiXmu56MCmoBqe2tqrJ9whgtFc9p3M7is38qAaCjGurcsxy3Ydr",
  "key23": "46kVkAqziVrxbsr864bTHJt4SwfBYvqrK8Pi3E9xbeUh4Yt7mKJ65AGiekYHtszzR3M7EjmU63RRVkYuxF1HVqP9",
  "key24": "4YuR3EUvHqVB9PyxgCkay4ZFWVW5pSZDYYvaFkNVdjQxvA5fGdc619k4VHXWcFKH1ioKV4DcKoRHwEKmYBoZ8QNM",
  "key25": "4HdWmAqkacjZ36js4wuWqqWSFx8AfDZQJK58wiJyd2ghBEgTzeHpXpC1UWXY9FVfSomikX7J94omqfWMUJiPAVu2",
  "key26": "4pzJdiUvGACU9oWG66raxRdFUiur8Mt4G9vCB6bK4Us54DeZCh6js5PLPdKS3EF8wVT259WEtJBdTryvWf7vUqgm",
  "key27": "4VNHdvqQnrsnd2pst3QQh8RUktUoHgAd2p4WmyAFN3tbHhi2CtV8TcBL2FLMw7HQiQ7am198MbzD4to3LswBmnHd",
  "key28": "5tcqeCrQp65NhPtxVvwyHZh7VbAbuRNy2w1HLbuinhSNvDq2Qtk4L5f7963iiEoALDfqie5FrtuyTcpnkUvwXa4w",
  "key29": "o6j5PqcdaP9fTA6mHVH855yNmMifYmpVGMS8XncrJUfVZ4teqUDGpg3qHjPXS7yB1aQ3SUGnbpbE47PL1FDqjcD",
  "key30": "57decdfJf25B4DyaPL9wSXtm8JdMph9SKETnGZgXLQCBsfMpZx2e63hzrZCNhHfwBLUaUFV4Mzi8GMWF7eP9hKJ3",
  "key31": "2rpxJsrbv7NACuTMYTbxkXojc6nV3ZVSAcYMUsV8Vw7SUDv7pHFNR2S1jWFyAMhtt9AA95RxibzevuUqMWwFRo2T",
  "key32": "29cnR4ohxWyRHEHPVdbUemYTpNeZ611oQF3CLAShcP5LE6UBza98zvESY5k8GDtz3mTEobzmn1S8bGdqrAzLwdx8",
  "key33": "4K2Gpq6BatmVTtG6wQtM1p3CpGc7kaFxN45DVyR2kJK7Jw3RCx8FebRGPnwsdCy5ud2oaVznDTc3WiGBKt8SZWSD",
  "key34": "3QEstoGvJFAJWRt64AkKDznrvV6QoDR2EeLh2FyjQazG66kjYknjfR2oQ4LwL2kkLujBvxxRir1ueCVf3CQ9mGv4",
  "key35": "4GUpCqm7uu8A6CuUZUmPDChHNaeRJgnpPMyJwaqjP4g4EUcukz2m9kyoiFChZ9n27nZcbDypfL2AmpmRwwFJoT5c",
  "key36": "5VFg6zS962t4feX4t7VpD9hZ3PENfsMv73kmcnZfazRZGVACBdRpadHDJwJBUgRq4A43P6Dbz5zuTdYjfJk5WqmV",
  "key37": "3BDaUAm3wGcSqvjG5zvhQPCv4w4FqVY8pCZyGPqtaMMkzgiRxk9Wx1Z53dTcNkyFWKcGrjJ3wqJhKwxzN1dUqiW3",
  "key38": "FQbDSYwY5tajR2yk59iPZ6M13oAKPbHUTK6CzsjRUYqsu35sZ7PpsdbXU3AWgXtm2itsrMMShLLXuDd1hjmzjxV",
  "key39": "Y6NrdqqJG3q7cafBAytA9Q4YfjRM6W8uHyaoTSH1N6XE8u6b8ZZZgfhqDnEdyXQRdo7rBmxyWWR9CpEXAMeo7tY"
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
