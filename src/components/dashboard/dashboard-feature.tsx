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
    "4nCEvDgy1mFZzYuppd8WbSKpunGMSLkpkprhys1uxgfKEL1wSVzjsz8AQQRDLwitWTQvTW3inohqqvFd9jcqY66R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GSY2iaAZRNh4aPhTq5T66EnUGdZFujHWrvzgMvnaasEyXciwf2MaX81aWRPP99mVSFX9afx3fbfvvYBhHs5hAgW",
  "key1": "34LAPpZ5pvoPmdS2o6ufK7Pgv3r7nsvGdBroeEPjiJFS6aKudzxii3m46cXmZ9qLwhufZgs3SAQYcLvty7H44qHt",
  "key2": "27HfpUMcNQBvkov3SohknF3PjdusYYXpXfFnFsLc5ZgjH5xpqZ7q47vPHtQE69J3TJmfzCMvv9xkZT4Ecb2zwEBF",
  "key3": "TRHMmMgymiYv4DvoHyhCraBH9mbqBXdhV55Ratw8yB9zPy2PsvyF2254LMg2P9unSNrHmGF96GgHvWeZ6xVtqXz",
  "key4": "ArdopJXcaQp727DUniP7v6hDkt3keJ3o2m52erTsVYLo54FqcuGLSCrMmNNahVYYStsKqsc911w7b7MHfAAD5Xx",
  "key5": "3Mz92kESWeHyLEAGCD2frLDbUngsbmhTrNgNvFFNDBLUUeHZpFHDMSZzEBD6Vyt38RH2g29E8LQj5n71buRVTWZA",
  "key6": "2Q6j8NcWn9C8D9arBHEerreYyVW6XUMXbkmi5MKrYd2VeZqA55TmFaCisSuCtjZ8VtfGf4AHpivsMZf5JVJ2De1a",
  "key7": "3ZpG3g51DmWxHFeDNJYso7DMdjve7o8oRtuUHtuFk5axipFH65NYjh6SnwMhHuNfEP1cWmfWW51Sk74EqybX7N8k",
  "key8": "N4mbAmty4GMKzbUKqFG13sniEWA7QuU8Je6eVRnoWuaQdmofwec8daRGJUJCx8pQKHauB9YVhMyHLBxVxY7Ahmt",
  "key9": "5dqKWhZDc5DSd29aCT49nLA6VwWA6WJzoBYDZ3fkhy3dmZcG7joXzqLXjhJ8KUSzJxac5JDVAiDAejrEyACZF66i",
  "key10": "3YirWxRmW61et1Lup7opNQPdiBj2pNp27saAXf5fCmbbigXc7QQA8KjKPL1LP5DoWTNKr2yBuPz7P1WUX2y6URno",
  "key11": "2YHuxfoekSMnnyLa2fRMguaQdNvgu6S7XaWWxxStjn33RACZLmsmf51g3wWj3Fv9B58SWEpsqKhYKG1sSpzBYKLD",
  "key12": "thZ2iR8Sf1hnVHB4gkZ8cDpb1EcgEwzQXMvhynt7gVKrVtRqmsxYCEKuK9ZK9N3moZm9R6J5GQj6zhsrfShLcio",
  "key13": "5P6rECejYxuQyHvfHcptRK55x5W5btUnJKth8ZydL24ybqffGURvifFCyusQtSbNnCjNi5SqnPxXjm1SYrRoAtzG",
  "key14": "3J7kEfuJNDLJ4iKssD4wSAsdB9PBquYLjiyxaZpuuApZhXAQEq8ePuTX11CQz1z7viZTXJmEccoy8Y5PTE5fcnwg",
  "key15": "59BHr4CrDEqysm6EGyMzcHkyMSFJ4axfZ5aaZUvGGC2a5dB4U6nbajUh2JyYEQ1UYmAwTsGhmWY6o2PVXcEgSRrb",
  "key16": "3K8nF6Eif6GDAr4rDGUXVahxy2VftmAUkB8oyPhdUcio6Kktdo61LvDZ3fUj9wFDnPcdX272YsVVBot1njpvyfVW",
  "key17": "4gfUk9ThyiKLAs5vwJAMGt8FYW3xM7BkL4pZbDoVZPCrZiYWSVmULhsj5mJbNJMPqidyockYp9rx19cvTbzMJjKC",
  "key18": "5k77wbDaDzXUngEFLER1h63jzqsSK15yVb4mdiKiYVbUXgz93GcWSV9yxdCT4ypW7eCuZQdrftMmkLok5HgBAmK5",
  "key19": "mwGCpFP1jaDcBZ5i5vrtZzQLrkpWaeuaJqajLnsswDS5tvzE1U9uM82NpVHBf1rion22c4fVRKBBXct3Zkrf2g1",
  "key20": "5zvKm9Pf11Lq7j1E1RphDLStuje3p8AjH7gMeLgXoUEK6FnCcLPfTnamD1RPGHQmiu4MTBhuHHknofzwho9aE4oy",
  "key21": "58ULGMqqbnvWJ3WNtka2EXjXjeNjzM2qcHQHNkp7HiZzCtNtNz3YGLPZLFjX7WF4p13kNLBPax6KnxQEdCitzrRP",
  "key22": "4wnxHq2A9WxKu47zwuk2R7goLDbwjv7MuBN4nRfMtSm2JML1J8K8bjXs93JuGijxcM4EfJ3rAaLChEZqCCWAJtgT",
  "key23": "4DVpSrMsQG2g1KzDkznHuSc3PXjHtaoT5a3hceAZzXSpbgd22Noq1QNQAs85Bn7X4DpBdTiZBUtXx23JFTcKe4Bt",
  "key24": "22mmnL7dqt25tZDdFCSm11HtZsaPrFeyaEZByPLsnwGsbJ281364eekJVzdBjr5zs572bsXy8jzjgYp4cKYeg3WC",
  "key25": "443sFrPPefiMX5emA2bwNm6xdd52VRtLFLV4SwmFSS2KLKY13AuXjqw2pm59wpofmFLkh4v5Uz1dj3FxK3314fTg",
  "key26": "2hXjxPKqcJZZE4EzGJTKbsoBbKbJ1qhoVz7y8GTw1uwXZEgdQbGjce9n6o7w9Mib2pjGeppRY22T2J7QnA8W2qB7",
  "key27": "fxUKXgimaPwmK7mcDP2VC4qMyb4vKf91eFLnWHfKaroZnJJq4xHx4gQxmKHWLaWZDrbNDZvpWHy2b8vxixfEQwX",
  "key28": "3y7Xgdj3pbyURXm7hLoy76NRYmadnAQPLzA8wNDPSisSGzTg8PLAuvK5QmKbYbC3PE3AUNERA9ZwMQePdiSSf5XJ",
  "key29": "3kTJfYvz6XtU8pRCg9dREZa8L2oKAfvF9P4bY21qvyhMJY6EwBpd3Pvg2dUGDZxKK47UHmHwEBSUw5LDKL5pXnXG",
  "key30": "2RG3CMFRZGAkD5mdaan6DEWEnKDiCK5TtxwJuQDzqrDPiT114CRADPBRexVcYPexk65YijD8e4Cf2W3ZTucHxejU",
  "key31": "Vi7iYDdep6HfNVAdMcBjJJFpaUBGkHAbiEThzBMhHAqy8Vxxq9AkFS5yNXcEak3smoQWVw8Gd4VokXCHd5optVP",
  "key32": "cRDtFxM7GFWfh9G3SUrBFsF5FzRUDLH7WihkXZQjKEmVn3q43YH8L8q2FeNq5z3Aow8zP9yJT2besvgukicMApL"
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
