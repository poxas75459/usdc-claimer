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
    "3zbf2jn7FAycuj1RvrHFxXkTYNmQUvQn77K6fBxQ27myMmitYvkRfMqMk5bZLggX3booNahai9J3KFc86h5xQif1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UZabJRgSDYeTxrsBa2Ed1zmZLHfwma79AGfCTGVALB76R9cSYkKqjCp9NFXmCn8Mq8qDrP2W7fHuTy3WmviWmi6",
  "key1": "5RNHWLVyrh21gTNmm1UNAfqCKpBDAnJWrCrWPsSHV7coVGYadXZeqFJw2hp38Wsix4gyNd1DBYdFmnopEKnPxf1H",
  "key2": "2x7roCNJkt96THsWJPiu3RWkH7EsiovfF1URAG9ZFwKBW4bte2vqnSYr9mP1cHkfyFdFu9FbxrDKYWhTDzsNkgSx",
  "key3": "5UGHAoeKK77pjPhJLT4rDJNsZ3KLbVgMEQeARG41sNRbJ4QXMuRqvpy9n4exGwjNw8HGur4VvBJXcQS6kShdKVDa",
  "key4": "3F8CKnwm1S5fB4Xg2aZ6nBMXh87QKUuWQh2cRLZesAuansSwfWvDhAkRahFfRhC7m3hKAw43dvJMsfmUgaF1Nz3N",
  "key5": "rqXB8A87Dsrxuj9ScE33wQGSYnoJ5KquMjddbNo1XUFeq5ZajM5eR37z5LgNhBS5gP58AZtDaUpQttFDewiHWvc",
  "key6": "4AcL6UZZpJMiQx9aPLTQvJh3DLj4DDeeR5nJYjivgDz2W1W8xU3AJKrvXHqWtA4ypBVYmtF8JBgZeiUqnF1sz3jc",
  "key7": "4QiZDwz1xEMaUWj1v61GYdZGRKre6cD2B2Pxvhy4RZsFNGKNY4pooctYhHjZdYC3CdrE54vfoBymn2yWnh9v7YW9",
  "key8": "KkbAhPu5jdoav9qnFTdazBMFkR9BeTcBpQMwpJByMj5cETSkYfDscU8LkBRUhfohhgMNGzGkqnm9jxCCKvtwby6",
  "key9": "4YXvPaHETmFtorv4BwrNye6vk5wajTTEZbBD1mAVcS4XLmahXRmLRNiquoUn3oo1wJCbZvyyZFoECqfuL1kbPqAX",
  "key10": "4tQsEQMoH7LotJtSjuiZnYPW2SSVxe6k1kCg6Y9eQ2YWidLiVk4GndK3tHEAqkm6oQLBmS7x7R5HKpUyHeVgbar7",
  "key11": "ihdY6VAeYLVhUYFbcF7xFTCRy8q9kZJ5UUDNBMdFRSnqj3MstC5hqvn5HsJpxQXCko9KjrnnnpYokTcBDr5Q3nZ",
  "key12": "2i5Gadp8gGC5cRs1sdd8mca9pKgN1PBoEQu4TkFwxN3E9xPyD7ftapr9KnxZ9h2w9PAjLc62CiZ3soYXT8cTgLux",
  "key13": "5xkVoCBLBYrQPwiZ4VCnu9A1jMJuRPTpwkoZiQoVZ9LPY2YegvuPrh7DZBVNoQiCZ9dUKFdPHmM5Yuwq4aSYSN46",
  "key14": "54NrW53xyCvoa32gUibLEZprMQCpgB9k48mzPDXVtNMBuqEZVtsYuMnMd1w4yMuKacKhCGiGmo1CwYPxXJw54cdY",
  "key15": "3yysG156W9MAVm9SL7FPtgfmZ5nYctk8JQgM8tXpwNCRj4wRsN3tRarNiuaP2WcfgbWE9Yp4M53yrnxqHwVrEuWc",
  "key16": "5FT9QoDy3iNeRrxjaYNE9hzTzvkPaqcZ4zrRzdxEF8nkhUohDwzsrvCGhygeaQSzFyTGiVit2aCZq6WuWiYd8zkj",
  "key17": "5obqt51Fk3nEbawg5159cvkH9Thr8JKSfz7dds9x6LveePP6SQwRT5JGadPCSh3Kr9pvR6W8kLxs87sDZMteVd9W",
  "key18": "2CKvieATpeH8Bnm6jqYNcPo37S3LnismxqPzGhnjvuZFXhZMQySK2tRunVv7uw13RjrkFxvfudp8aAbqNKzFPX2U",
  "key19": "3jhayStAuypWdX2sxyvBLbNZRvo9FVJfFpYkDAWHLHV1wSM3e6Zfk9Bz5K2fGLAQh1hacukNb1Jur19kmhbrKZn1",
  "key20": "KdBhnVPZkbsBq6hLe41RfdKVhMqo9TCA4yCnSqt6WZDfDo6AnP4VHnvCkVMUcT7BEXvLLviGwpPgaVRTuy4CtwX",
  "key21": "3hb3ANj8RCAvL2Vg2NieSR4XegAEHSRAPvwoB6VBvxavP7JhRnbHWVMkwdFKh8gocBBEcaQv29R3Xye7xVbMny4c",
  "key22": "3RzTvyckN5ZwrKdbwSzdhGmpkE1ZaXBgBWkLpCcWQ5GQps29wRdmC8B3yMvw5CrSwcwJZ468D8ENfGd2VGc3FANY",
  "key23": "5AawHyPNntRYofvt5mzdj4D9x9K6g4bgQeVkRmz5avAX6veJtpiRKG4ortSQ5azz4cvs23zPbdgcorg64hs3sKL9",
  "key24": "5KC8GqQY3eCB8Vq4LSsqThbA5G4eoRHGLptZNz37WcbRbNepi9phDU8zGd2z8q4Pz8fgmDPezkmZJQ6GvVDbeLCK",
  "key25": "k6LMjz5nr8Q5d6WihqQ2SJgzng8PZExhbJxSGz7qS87qXrZ8G63qo3KLv12hDN3EyQPaFU9Hq6qRuPaGvRBrQyL",
  "key26": "4immFm41hRqw2mcCczJvM4vzEUCzBdugwrbmNWfsD4ULuSVXLrRQN3bGV4uN5CWXhPMCgkpe4bBWsiqYHcKtHy2w",
  "key27": "csCvXyZ8jCarhS8JVTUXYMK5o6oCSKF2766kDZN7N5ekG2SegMYePejxUaH358yssWH3AYG4aUxuNR1RVVpxWY4",
  "key28": "5Lg1y77j7H3irTww8wGp2KE2r7RK7xRDsM3Vu2c5YXgP34GFjcszbeKewwiUkjRk4FRncroBUMPTdRRTwK12QbdE",
  "key29": "2pH5ohTAz94Ydxc5AF94PYFyxEb6cV1zLv8b5xXjpR564jk3TrUKtPGJdGAVLEPd6cMMEzVNrvy3bcFUNto432sR",
  "key30": "uk7Acsn4ir6nZEjhdBSqnME2u8VH8rVqv8Des2SKozzEE4zrAeaBEajUKdMQ3qrQFk7bmzGXoYhVQgVeSCwvh7X",
  "key31": "4nKCAdhohrJKxHjvnsZ9jJfTEgzRiHGWPLKbYxxk4h192sUgQ6RwvQhiXjvyRCc1pQJXEzUtGd5XMSzuqmyGgQ8Q",
  "key32": "2MEDmUq9wVbVTjS4phNDbpwCBjc9McjahvxCsEEiKu19eCJSUDQvHKoKwA6Q2XnWZHiW9YLZBYFEhKZL15KhfD6A",
  "key33": "2fvbommco6rvrriNPHwBYpLVyB3P38s7CzFRir1hLFkHAkmpQcZS2TXdeomtC1pmC9tfMRBBMrgtpQ3pRp2fy7F3",
  "key34": "4BNPkBzwA2JQU25mSDM4jHop53J8LHhwuHcdcDp7LiBvyDGUhgmZd8SjvkqbENWWBJpStE53HsQVEjjoMJHR2Z9X",
  "key35": "4QgCLTd3QAVByAKQrCJz7Q476SCz1hHwVLfm6wcwehGXb82h7B9Du85Z6UQt5dq8FvRY7mYRtN2umKcy8D6zb6bc",
  "key36": "4YZxMzczxuXGSq7UhpCLRVNWYeunCETqQU4bvTUH2MVhysVitJyyrhiLHGtk7tUAqJWCWevM8HARoGr47JVB6hxH",
  "key37": "gu2xnifnptHf78Pr18UdC4ovHXHApwbWEpqonyR8Jqv7QMw7hCVr8pQWKH1NiMLrQXvQQV14MTMyUT95Fh33Yay",
  "key38": "5zVHS4vMg45EZgZB4TCi9viPCFfmGpnv1v9gE1UStJmA9PNLPA4hzmMNGHmS83bY6jXXs3LKEp2cx3WrzzryQuVj",
  "key39": "4iDXdwuBE9qh1qWdsKySYgCP7pzW1s5vBV2FdqRnNrFsHXkH1T4eGxkueLeA5FWeCRsRa9FZ75KD9rEnLgvL3Jw2"
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
