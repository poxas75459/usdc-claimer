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
    "4ZqNEL3T1UNDX629vew9zxcuARspqpAfoWtKw8o3g6vkPmwoQkMtbz7TctWgARyqq1bfKMCTqrFRsRzNURNuyfh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nifM27i1Mn4jJqKYiSCDGtABApMKFh1ocfuAsWtCnumHGByDcMJPdqWEe7AQKqEniMSVB7Xu9nL9Yf4tQDrpaDE",
  "key1": "2gUKpoR8xbTJSyVHG6CY59HCgPGfTfJKHxZ9Ju7MRAcNAquGkweGrYj3cbfedNSzi6tGMAcii3K5rchd8HuM6EPL",
  "key2": "3NnmdmkUG9iSC8zNzEKnu2gmSPRvmRin5hsPhBPbiEWHnLJb2qC448BSZ8TmLNCcq4PkYUbGXGHoMMQ8tiyr2F2t",
  "key3": "5mHcXdN1mSrp4JEVB1KhpFBJippa6hW9eDvh6ozoUkL3cT2mSCqN32dYQoJJBToZyp3n1jf9uczQutSJEEUfsFjC",
  "key4": "3E3PPjKus1nwzKmkr5EorWjYHR7KmmpHu6jxn5NA3Z9wopGSyRpXMVfcyXhQ19ozezmioLWHVaJXiqygBY3jJgo7",
  "key5": "5QQQLEaMmjAA64qxTbGLNomdUdqsE1KZSkeP4gtdE1Z8ffMEhoE7Kmtcdd1dRzagJNcB8b3nKzGgBkLzJjzJFGcz",
  "key6": "3k1M1SvTzSsCcdhzaDqKZZLtGUXgMpUmeqabcZxhM12t3Yd9EJjDP1Tm2WbKjCDJj2Jyr32MENJ6Jq83WL7MRuu7",
  "key7": "4WXcMyWCoN4aoxcEgv4e14wmPLy6tsUJasCnr17gRVFynsUs5zEBFaL6hcFynme8aYvq1jd6hfDUsM64DFjhr9ks",
  "key8": "4MX6sgyu9vLSbKjAJUnW6x1rKaSoi4fkT4L4XwGNgZoGN3cjnX1yebSXf4EnwRk4cNZGbgroWTyVN4rTzNqJhyE",
  "key9": "EoNuXtdiVZ4SPEqFTdMTYSfMQoS7NaGMCGGWhL2oP1Q4FDB3hqdXsvjBvQEAvbrB4c38mq8HzojC3x5HFwskRBH",
  "key10": "4CAHpb5zMG6jG5Xm4q2NfkVrR7ccGbHRVasVG2wiezzVF5xMeYmqY8AvqfxLLLCP3HQxyFn6PwadFRYEteAzntkT",
  "key11": "21wKk21Vv2QNzQdoAHyhLHuWVCtsm6RDsVJHaRoRoeQJQBj3ACYQvTnmg2odQMxQyPyj2NsVdEMnBLToqRkGMXtt",
  "key12": "31vLiR3KQxffRmDtpwH7rJQTSRSbUHG4gNEHbxpoYHobn1QJGgKNFmfZdpUcKMBFbfS1tWPqaYrE6rzS9VqkYxLa",
  "key13": "2xHyL5edxBuHLaQKR9nNzJ8zZZW8ABSDn5dw96GRWxzEbS4RAgck8XY2NLax6EaBa1qefMzeNZSXWTWyP2KeWZ2h",
  "key14": "2GzqXA6PoPt3jhY27kq7kynuJHsQSAinRpSp5c9xGFmyZC5w6xJTCzJU3BR49f1TdtLzGRWYqDAf8eDwiWgNHsT3",
  "key15": "TXYPwq3932iSU9XVaouxbMhhifm1NWhhC76GcNuYtrjZetatyhfsN1hGj9MUEsjSv3C5sBAwGd497y2wbcfRKZr",
  "key16": "2vkd1ZQuCkJJfGt6UdZmvUY6jqmCVdeK3ZhoKURiJpiuPZfKT4WEbSVRJ9SZE2GLV68GbFua8iKUbNDrQg5TFHMp",
  "key17": "5sDxcNYzMtv8jqtgTpz1XjXS8Too27U9xbxLfez6c44PyjhDah6ww2JftShgWc1RsrKcfHMhXsVVpjHPHbksZfGa",
  "key18": "4hHfYo3YxJYd26BRuZjdryVLhYa9TvEBGiSqmg5mxThffSgth4iJGdxU3Tcaau2atzQZT52rYWxi6vYinY35FwoV",
  "key19": "QBYHose9CktYUiqpETn6296PetTx1pqgPwgXobiheginRv3vqUuf7x6WVBa3c3pVqh4vNb2EJAgC5PNY5j6wugC",
  "key20": "5ZzPLTJwLFrJ38HmenvgmZqedv6mLqWCJAorYDUCbCyumU3PNMgWRdi5VwqFoMqF76gNUShQNeKNnX4j1P6TsTJp",
  "key21": "M2NXy7Qym4b2EeLQkpUj5f41xBLZosagBED74A9hsfU5AMgtvXTw8AfEvFTAMLFshgpSzLYMw36BH5pJ8fZEDC9",
  "key22": "3j5QcStEPXZ3Nkpc3dDAVicncy4BuTUGkaBJhfmQy8AjM4324QRd99SxHURhVzoTaWCzMf7A4DsK15RsZwA8c6Jd",
  "key23": "4QsyQjEVZ1XXTKP4PjKhEioG8jm7GfBCVg6U8N48oCaMwj7YU4bdqtUdi5tfuxaiADuLryNVfRBiztpkRZLNsDoL",
  "key24": "5uoCk3KVnxJ78QqTwMUwPkJBp2jX3rnrN8jCGGa8ARwE3ysVp4Ns95sDtZAAkJeZPK1UpVGsBW5ZYr4x8RGbL4gg",
  "key25": "2uqzRxpWCBq33hTpVb2CKrPZHsqPqMKWyEiA7DfPWkL7EFnyGbNc3nYc9sY9B1L6QVTSQDpb6QYTB8hhGSAHn9cU",
  "key26": "2YFXmNR6Frup2h9tyWSxQCPfkfrKkWoCcEHErrcHy8JBt4q4dvYZTxm6ayyMszFrmkAz3Lb6x314kekJUTekWxD7",
  "key27": "5QDtkocvG7fzdSygbs34EaH5hwfMLbvTFztF7EJ8BsxdE4zUb6uDgydi633NsLDncVpYZpD1FuBkmPjE31bbG1yW",
  "key28": "PoRCFXhhaWa7ums44wEg18hS78AgXM72qfneuYW2hW8PLQ4wTnP7w1CDk7UD4NkzbVEzD3ChZH3kJ58mDoLPhNx",
  "key29": "3cbNMsiExtWW3iBxZw3ZZ7Xbdr7yy5zMi69cQKMSFtxsVmnYp8UgGop14dZGuZrCuHR3Xmbwpv8oz7cd8GYFeEkE",
  "key30": "5sM2iBch8j4wAFsikNewMxyyyF1W3BRiBGYyXkJHXQhhxXyW1hPnGzkBWAv8NYMhvhxsrUKJyEtLz4AzpA8kd74E",
  "key31": "3Akzd6S9SDdhwzPZJjBiHabiBhwRHhV6kWzekGYsxnHDf9LBGXWpXZR45L7BxQzsBGvkE6nfm3J5RA8hmJfDNeZD",
  "key32": "66xu5Q2RB4LP7iz3orFKG1txoDdUJaV8Fib7YbyYzr2YVKFnNg4H9xVRVjpoDGeoQRtv69xsSNVJAcqb725bc81W",
  "key33": "4YGcdLWfWdSyVFXcF5ct4wYqnfQHEno1pjMukx3dCNMmBfBiXQfC8U3GJGXb6TEnCKPqxCL9u23rao6zzcf7Qc2C",
  "key34": "2v7RE5wQSoEdv9ch88V6rbwZ9ZzHHrwkbVN8Z9ddoUDYUDRLCcR1Q1NXPtXCU4cDibfW4Z7UF4v9MtJBWGYxKik7",
  "key35": "3JE844XTe2kAmahxYnNG2QhVagrZFyfvkRzevgN1E4rrT2KmFQPusT6eqQX3Wh5XwQXczfezMbXcka13XpCNfK3d",
  "key36": "3u33ArZuxpQWDPCRqDMHHeiR9XyeMcbYgFDm2eNgHsJfyM2x4camZi5env4s5C4WRjNLBtTjtYGEkfwhvHbmFz9D",
  "key37": "66wVoEDUSaNH6TXBr32kP1Fg3zrcVpcykQYzuRz6TqgJAub66ZGLKrByVed78Cg6oUopHAEBjcydaUBivUL7fMBY",
  "key38": "4ZaaBghRkKXuL4vtVxF3rgtaypK3HoUgBFJhRUTP1w9SXVHafMf4pRXeCnQNPJgDimHxauLSWRQdStfWe5jhJYxv",
  "key39": "4zSaP2uKDWdUqFqFLMdbsdAf21rL8pyVvghoAZAeu15KQhRfi3k8ErMrnyKutuNcWN82t9QzaiHnLrfpUhwp5oYA",
  "key40": "aFTQFDRCaqc1fswrQdvPW5fdnSamiaEgE9CS3So6ETu4s2CCgb6uS6aXAmK7rCzSRLiwzHjvRSf6QRWKNCabE2N",
  "key41": "612ygobHgJTbH3kTYrC8SuCgvGvsLT5GHXbEiAXdkDnRkXnhamMgWhypnYg2JE9pEak532mxmJKXFEJiJwUta1P8",
  "key42": "2riVqBKs1ZHq3usYsJYnVDqeAxvyHdviX3mDCXQzhCK3ruytccfoiPBZxxzSZ7LE8rFVQf9ErudB3VJi6kg6W4uV",
  "key43": "4ebZXEaxxBqaZij2F2JKnJxcwxYo7xUyS96azjUz3tQfeBsHa5n9824z9N4FdhjPZyKcwtytTv5rmpgGnnQLj4zv",
  "key44": "33yFNrJrLhuhkSqFkRGQJuJrLbprHjxnSbDfxSiSSb8FPixNqLGs54uEzYkGvh2LadkXh5nKrV9eEXYiYeywYBki"
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
