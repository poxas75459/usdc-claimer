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
    "Kq2PuZVxR8ZdWHkMq8BjpR5dJPifjnEyPgeeUba1a62PdMowxv98uPsgqjBNkzcdrhJem9QCW7R1cn3BDjXcFia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fCEHXgP6F5oLJcNfCZW6DynYCDyhnuxMxyH62UAgSCatYRLkznda4wHyzQm1BprWvu49J1SyWVbNH2HXPBUbEH",
  "key1": "3BJ6VbNGUXWDxRbKmeonn4Wn6BLAG5PKkbX9FAhJRjsdUHwkWkASDGXJc4GxzvARhKKKTQiVsdQefAUJqL81Bme4",
  "key2": "5K5EcBSj3ffpy8nsz9XaBse8ww8Fon5PXXwNLkfTqN391HaRqospk9cJHyMqWXqbR9g98NAjmSn7YoRw6qdYFWLn",
  "key3": "2EGKPKpTrEgc66BgyoGNjVxdGyJ58YmHnxcuSrYH4zjjsM2abDTjNrQbZhLtv3sPo4zgXSJr9xPXkFxpw6iinTqG",
  "key4": "4MmqL2tBEZuLV4PDBSA1vwc1Z9bH7xfmVXbkZWrfRT2vpCvx3j52XxUgkRvRGDwDsLCMV9zGm67K9rRKMWjooBnW",
  "key5": "4G1wX2WyVRSmdCoz11pHhVGji4qyh3pkUke6JiNNqegTdh9XnHcU1QfqSfGbUoyrpVHUMHL4HCyEMbMA7wRNDUvC",
  "key6": "2peiQYY7nURye4DKcWHQCdo7tN65QSn8s6N9YSab4GYmy8gQrqNvm7chK4f1sMjJszZSYWwDsEUram4yBTmCrEWM",
  "key7": "4hior2NJ8sYr122LEvapgCYGy18tg7UCwW9PEdD61UH2W5cHLxgSStjXVddWhjfxRHi3SCNJknV9zf4b5XfxNdoS",
  "key8": "4qS5w7WsshLWuqrZk1bDVUKfvXfdKvZjMfzUfJ82SqQ3EYQsk3UEcVCyVmdJRRc5NnUKvtpbYG5RfeiutetThB4Z",
  "key9": "4UM4qbsEbrjpwcgeLPfZSa3B1XTatnKjeJ2jSjTMAq7JKcWB1TejgidcLHJVbUTmqpjKsaW4oeZTrnnHReCdTwtV",
  "key10": "4zz8v8j9rvK8PSiaLQ73vPFugnb3uYhcXLRnfQ83bz1zCqsUZWQTqpnb2Hd8c7Pd2xijLSJn4pUZmF8anCKoXBEm",
  "key11": "u4yzWHHeBjB1Ut7W3bbEZ71pLL2PjHTKQC1jLug5Tj9DYNoQWSuibYRsJw9asy2dBpQZQrgvRCNPbhHw4fXRrwq",
  "key12": "4Lewc3gZdch7JSM6wfoaZ1SQ8AvmxiyFERHJdBmAx5VfySyqmP3SFknHWu9FQzJB9bwVkdgHfGiKFyo54y5ar2LY",
  "key13": "3dFMAqK8qvqwmp6iS1PVk6DRndz2FQpdfERsgmSWLMMYGfhEv6DuRM2sLkHibZEoDLpGHUzpK6tqBQtMa5CrP4BM",
  "key14": "3f2nGjcPFJXtS1GeTUZgKiAtvYKek8gJ1fDWmvtafGdg6uMabZxDAfk3mDPhsksfapXE77vvNpxrAGWBq22hYiJe",
  "key15": "4pcNeGaavw5f6gdSW9A8ZDAvG7SGCrDtBSoZrpiwGeTEB2ZqLkMqcR5qV6vRJkzCjGEABKGpJrien6eii1ZeXiTp",
  "key16": "5Uimeo7T4yTuovBxSows3LWcX1upHss5ybFKWfLfYrcpoaTkdU12z5TTEPQPfXKiJ9iTGasFB5y8tWanyY9zpzso",
  "key17": "2DNntgD68J6S4zwYYyYSMPnAAvCo9jKLGbtctJS5cSPhCKK4rqPnVK2KZzFrwsrPjwtX4jPUsH5GdBuKyEjarQ7a",
  "key18": "5kSQ9SCHf1VJarTDFaqh25mHJCb3DMfLEzcVVgNUhYeQWFm1m5md7BXT8y7eg1FBaZj9xT881vaqirDu4Mm6g6Nu",
  "key19": "4yvDSAw623wia4pyawNksgau5Ha9Tqgj3u1JLvh9nxRimyswK45ekr1qxmDA4J6vUMWgXDRU2ebVXAPRRjLrHBGf",
  "key20": "4qdFfCfxigjvhfWmH16iiop2rJ3Bam7mYtHsDBPecEFBAUWL5T6QRSDcseoqHYEhUyDMsE557oV54B9cfFqded8S",
  "key21": "49yx3PJq1HxCDhHp5cRLhqzHWcmkPUpXdzgvdCjmd21MpUqWDdWjdS16WygKQ23pPF2zjSJnDKNytCFjcm6gEr45",
  "key22": "4uFhM3QCWLatrsNeicfGkpLPC19cv3pm8L1hjrGfMxteeY6ZDuzy8Zq42u1agmnwfDvZipnvWXXKP6CCkK2eihsh",
  "key23": "2nToFdmVhw3ZsBbVt3zHwngCZrPSVasq3PCHxcj6iJRz3sfUUfj4dAkE1yseQUfPHSJgmM5mDYTEczxQk25UkaBG",
  "key24": "ZK4i8D1N3zRwuonhDGwF5eRoDbjJdjLJ5uV6TKPViY91LL6vUvu5vosve1CQ24FFUvpE27wbNF53LUzaZDJwGk9",
  "key25": "3BHRLZJyEwFvEHAmxSftWY87Dv2mzxjDcXC6fAKdpjJ99R42g4Dr5wyGHqxsNs64GA9KMfqTbtxqVV1VPa59HSFo",
  "key26": "21wKQowdSUSmFGjqcZqtZKJfryoxXzUsi9XrxvwaGCwPWEDTknbSSqou1H7SGM6ZNm4nnc8vNV5kw1JSfA4yQwMf",
  "key27": "3Xo9sr18k3d1qfVei41igBANJzwNgNKab1HYmNz8EFSr6y7gHgJowZH82oRi6GUqbLYTy2DtM8uXwwLKhF6AxLju",
  "key28": "28bGoFmvzmeW2jYLDcKi9N8RRRZp8tHFsTLT8okxtCkjVuEwg9kQPvn8bQc1a2sQALGko1JV264DBD3Ux5S3XUkH",
  "key29": "4rHCAQ4gCHXJJmZxH9of1BDozwaWM8BEneNvJ6uD128JKqq4nTxJL6ULDHhBEVWWerM8YeG1n8LBgaxmeQUsMsfS",
  "key30": "3q7aLQw161C7xkXfqgrbUbk8jFmc6bv5xfrDJjWbDS9ejieWvcM5ry8cLX1eYPGP6XVaxzjaaRY4saH7t3FxxytE",
  "key31": "5NxN2nZiuArvyGQgzEwGpJu6bmpgYHb4fJ7GHjVziZ9uxAGnvKiF2S3ccxDzv74Q35BCGUiu8GV1pz8Zs6GvL81r"
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
