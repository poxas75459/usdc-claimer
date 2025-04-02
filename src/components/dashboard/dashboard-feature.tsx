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
    "51z6hQft6GUsabXA1DiFrUL7RibWwNxD8fBn6ebW4QcT1qnDFYxdmpJea5AXAjneavmxkTgPFXn9LS43Fqy7C6Gi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Utsb6WA9FaDRhQ9qYgd4R7HoLGuBM7itTmg9VF7Z74ins1m8wZL6S5qiR2hy8jNti1R1VtX3Gwg1ac1RJWcyoco",
  "key1": "4YaGPLLyA8g6T65vuDb3qTNNmMznPbYU63qeDxcLf9rB1jR6jwZKRFem9j8swBzfUtZmvpTEs6gfJ8wxz153Hoid",
  "key2": "JJnqBjU7p6ytwScGYJp1XCtkthRtYE9C6ehihu9UU4EeGwwEBUWjDCstTjMbh175PCFpx7kYBvKwMxM6szLtSEw",
  "key3": "4SoHNJ9tbQyHmaoVfHQpd6zD61fb6LJS2c31Cfv1BhHEd7QJBweHHC5BU38n9EYpHntRhxxf24Dvi6jrAf6SF42F",
  "key4": "At4ZUnTaq9AAXhYyJCEB8D3oxngPUsWFXGBvLtiwkFFtYtjFtsJAQjQ2q4PKdvWPimhSQ8J2NXjKUK8zwLzRcDM",
  "key5": "4HWXFHCNpUvaUbzGdRz5hu97A6WuWqNsUuf666ydd88XwqMGXR4yPtTJZDhoVwTTEbN76KZLPsmYweSR13XywXQV",
  "key6": "5WPikGKUNBg2HWZh6nLoGJsCSb2bEnwbKudAA26sVqSmw64N8kqgxUciQ4r7Jkt6CxMf59J6xNFvW6PwrhARJg6V",
  "key7": "5YGJcguugn7qwDWAbFMngvKZvR6XcRXYFhY8JQRjq9WQk2v5iYcTQRHDVUCgfokmdWffhU4no4rmbGURXPgTcijv",
  "key8": "4Mrstxnqv5TUQjBT7Zerr2jiMj1xhDPztmoAaUGkeZLtPWAgoe6tGMsfg7TuxWzdnQsPbxX4buiYZMJrzu2JmHzX",
  "key9": "3ud75g5LKuzG1mzawNr9YB1zsEW5Xj3LYJfV5CmGND6cNLAJTEpn8aavDEGzUoTdWiSnuv5eRcLWFTmi4DHxqvnT",
  "key10": "3CQGWkdLTid6FEMuJpcC3HRrCpmQB7EJuXZFmt9md9K7EYwtPx93AUTnY8y6BG9X2kYDJt9kUxeUPnH9Bg4hED74",
  "key11": "2WVw6NB3GuKX6o45u1MFCGAns1zXKCsjfuGsXH5xhFXgwehAK1X1LewA9KaW3NNRmZMRsjjtYewCYfv5RAZib91Z",
  "key12": "2LnT1JnbvtiZq8h5TtVeq5pkTYBGtxkyYb5QUUTTmVi3PLyKEoyv5cGQWVrymhFHeNaxZN4FkBGwZ1Ew3ff7piBJ",
  "key13": "4KJNvxdJxvhAapSxMHVy1Smcec8zDtSQaxG8XasKgMmMeP3M7rYrSzeCnCL3Nbixskogy7tRxJBtzhL6uVspCckF",
  "key14": "4Ap8BNGSLzgvPHERfVmhSQeFUd1BdeKfnQczodJNFDoxLC7qJGnLSbjHsve8JkpsPymAJxuo3kRNXKoYjTSS27Km",
  "key15": "2X89MJUpBBqJPD8KrKm3ZLXMVFk2NYZY1Sjdc6WRKcADrMJjFwjyhx9wFCEMStsyhpjiaUGtk5mpwkxmQXiKiWDY",
  "key16": "5FSi9AJDsvLyPJ3zWumXKvGr669LetwND6FWCLpenvYvHGssu3N1e5FB7GwUYJZBjvxuWbCdzGrwN2F5SayCmEBT",
  "key17": "5L2rouqnVJpRe7hfHsFPXA6iaCizPBgeLf6JJga5njJpLx5P5dZnKzSNnGkgXHi3jy2cjWrukYLi2yhmR9NCQ2fr",
  "key18": "3rqfaRJmL3NtUaJcbjeCYSE68kwadhRBDXYUriZ5UY37mAw1mDoTxgB1DrBnQupAVFFL8pPPXiWxXQcGjMzi4xCx",
  "key19": "24Xa59WAGhQMgAzxGT93tjaGxsyG3Sq35GK7rY3sV9aGTDueyHziPtgry8eknDdrs2L18fW7LNDHA4aKqfxoSZuA",
  "key20": "2thGKFjjMua5m3Ashner586zA65yZ5XHCFK4BbY6oqVoQe2QVMQtnD7bGPQoDZVCC324psa4iwMReeM242wA4unM",
  "key21": "soAikTKJexg25f1JaVppFRVm3XoFC2XU3cj3X7MoJec7bqtpVtPj4qCMxtRaq8YtjdZbpxgQ64bFDiG86JX8fN2",
  "key22": "3svwwCUYTUxte3gLYrG6K7YuYScMjePzoGVdsmV8CWiYNeVVxLbeh92JmVH9QaACTtgYDLENRPcRrAZY88n1x2kP",
  "key23": "62KWC8TeDen5w3VaxFSpiDUwAguEksjVkchd94sDrZqoNXPnfkdRRAV6oksJv5Fqd2tCrDvGUXh5HL2RA9of4E2S",
  "key24": "4JDXmieTJuJhDxFGS5okqAeRTSeZB4SEqB9q7Xr6KSwPBDz5USpqxn6La7TRD9iyD6hHsd5dzCvEEhG8ybPuu4U2",
  "key25": "4ZEqyc7Nt94ENK9Lhvk92NekHmD1td3FC6goBYmK9Np7qLDW1S2KjE1J2PT2sAZj3EiFMpdsmvMKNdkDhCei287t",
  "key26": "52Zw8KtScNcothpQkcGwpHtZZ3bfFK2kvWN8grcd2Nvqi5jkW3pBq9iK7HwqMZxBwMvL5MDJJJApo8BKPm9wgdBx"
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
