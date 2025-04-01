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
    "ySKoBbhBEKns6XBxsxjVpNV7Q3kYf6Tx45RQKR7dEoduDWid9TGuepwkAGFW7TcvSPQqHwds91r8kdoMh5ZjsMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qeFjJsRz9xXHwxmnMaNXSPqtKpgTD2HRR7NGPsG2fPCEiHQifvqiTjQtRHJYGef5UYTS8cdVkqevFKrdacESxMz",
  "key1": "2Ef4TvuNfgtm3sCJKfyHuTRW9EkfPBhcdoHFDFVzU6LTqRc1M1VNnWYDUtysJPiQgFr6LVcC76uPGsHFUBa7weE9",
  "key2": "5W9VQUxrSLJut9f1566W9FBaprGVwquR7Z8MPyYE1Ba3eF46s24ECpr6bZ746Hf4caiarFzBYHoi3VbtFaxMMjNn",
  "key3": "5LqBvzNTTArRoLTwpjREukysnvKdqipM8bGWyM56QjKhMbNXgUykBfAjtd8iyPvJHUUcevWcjt4haGKRy1zcLonJ",
  "key4": "4rmB9mbzMcrpFGrHiFcpqYNbhtU4RWJZJf27zNBRRjwWocBpZxmmcFLib9JbjSroDyBdJgLUY7VZnDgXgnDPRmmS",
  "key5": "66qTBJ6b2jiXrZ9LHRGqLEHXbnvvsyLmhxgazy7NBuNKvwhzMASnqPnjXb5ZLdFJNAAgYrYPZDZ5vzLQPGrpR4TZ",
  "key6": "65eD7rGB36KDoeu8fXGfPchgfdbZjZqi2TSUMHMmAvS2Luggadz8XTconYc1J96ExQirsek2GkRofzkfo56RGhns",
  "key7": "2ErWPZH6MU2wCZkVepKPUiSTgXxQRNPRCuDTg7mNtUk674wjQQMw9jmJjPXGWRKjuFpkpGbUae4FVHUHAM1Dd5bG",
  "key8": "5RV6E3Z8uTru3tuKUdH9KfMEbL5LL7nhRezH5T3ioCcgsHwNowqyqcQi8cUZz3NwrSDyDi8UtebDo35r4RxUEKXh",
  "key9": "5c3VBySWFGotu3sSW5wFFcxMV36zZRaNN3y83Kov5mDE5gD5oAWQwL2PbJpToyEUWUKVzdAs4aGKbdHa7M1Tj63V",
  "key10": "5f16r1KDSzHRYwTRvPqkDQzFrM1sPLggRsDDUhTxQuCUoPvY8Pb5MUM46oDPQZfVEudyW4ezZ2UaNKBBFt6H1iBR",
  "key11": "4p4jTFgofxQZCRe85GzbCwsXMdvKZnBSUXn9KUg7JZSEUNNDXn2ebnHM4xus65MWNbbhCF43dfKWSGYt6sMU4kjZ",
  "key12": "2MdEgfQ71QEqmx36wodyc3BKPg1j1PWPC5DgJHw1wyYcTidoSgzD3A9SAyuQPojzLJ1C4VuhaFDPbY1YEvBQpL1f",
  "key13": "3ohRKh32xYVxoSMrBGVtyBLvWwoG3iX6977PvDDarwF4UBySXeQWn3q4C57ere7HBD66oH32bjdyQVWg4xs92pbj",
  "key14": "3WvBe3EV5cuPdQyFpc616nRPuLMmNeX9cbS3wnHpqiuLHHJYrnx1q1s9QkZBuCvJJk4MwkuwaVYApEEAtSYbrBLk",
  "key15": "5bnsZ4roMt63PHXN4eLaQrxX6NFRa7yZPemcx4Rib1R4CDtpReT41qHcp9XEXmP7UCVqdjPJcW6E4Gjqg6tMWM6w",
  "key16": "5Jz1cfETb9Fou66tYKw5wcxFSFLanebvSocjuGFJrspUoSmP3zzmN4rN7sTvESGF5pFcuNEwjgMWgRn29GgR1gLc",
  "key17": "4au75TpRZnwKnN8ryEjZxp6vEVMXiCXq1rhKMwsQ5aDz2tAUV1apRRZQ4WzYajAxgUxQAC34hvZfWvuSH4JxND4P",
  "key18": "3NeC2uwUJC2LBkJMk3D2enAF2uwdDHyQiHUqJZ4koyAS3wjPeUQQ6znYY2RJqhiuToiYgE686kMU2dKXug7f83jE",
  "key19": "61mH8svZFxfc9dGBLYAFV4SyJyhMmot7wKu5kBhpSGM2kj91dQxCHywnCdCweWfRFFHEuUrKaYipxDpxN1NP1Ar4",
  "key20": "2CQHTsniGwZz5P9VJXd7ieAafyysENgic2sdn57i2jsKu61RjyExkSnUDkQoKcPqJff6fJDrb39S9rDNTZxy98s1",
  "key21": "5JZ2cZaDSx8SVDPUhd1JrzgHcjeLzTB5Pd5GNmJxYHvXeebNQD1yAsPv5DrPaGdj2dTwrYQfyMeUXhjE59fYzsor",
  "key22": "5GZHQSta4kfhMfbFMFtYssgjfQnz9o6DhCraDPAUDM2j7oxeUwKWqS71iaTGanGE2mJtM3vxyWn3CsQQRbKXkrBZ",
  "key23": "4Ji3A2jf63hFbHUsSfgRkf8pWyDZaEJbL5Nexb4tZ72NQo86LjsXeGQZUKHfWxwzJmF7tNeiqbAfr94EfPxPxMuk",
  "key24": "4rKYtdCWmreK4wmAXN7u1jma5cSnc67L1XGmcoEYznDkTawibkW7zWmDfCKfTXT4q4XQpZsimK7S7hTF8GrNJGHx",
  "key25": "XjuEGsEWfvnCnppzUPd8cwUyNFgqD9e5vkrb6sWVWKRDzhwV8WA2cxYhLjKFcwk8nJqa6ERZMHdWFzjWeGqWHMm",
  "key26": "4YqWAHB9vPYh3sbUnjadwfV6kCugEsvZtKF2B8cRJaxq3sAcPgRfHXdJSgVKiGcmeaM28smKYTswuhuxxMnHfVoi",
  "key27": "4iktzJxqcJsKhLZKHfnm8LQRVhY6x3wjHvGrddyceukW6rPtWyJnHqYXrRWWaqFD4VBctvMd6meuNLPCvo5bPZXg",
  "key28": "5FWZyPHTCFFhWeNGnXySzciRGkwCAgHZy24kMmakVeKfPToFzXLQcXQMDimE99MoVbqfxpw3hLetpWgr7NrcPimf",
  "key29": "2PmiMP26JqqH3P1XeoSUpNPZnqrdA62CuZ9XRe7jDGRk2gNvu4YDxtZArH5JxiX3NqT7M64QALkB9aQoKTiTTmD7",
  "key30": "RyK2Q3nezKQtzU34v4ZGqpg24tfDMZQW6tgWB5x1Ccskgi68nCUt8yrzL5zYTvh7egmgnXJ7P5wkkjVZ4XgPAg7",
  "key31": "2Qxkr7tiitajhdXWMhg6aXEAgS4DMCbLsNEJFBsvcktMR6dCY9KzmCqGDJmVq1PR1CyaSJSWLwkA5LBV2CE98JUS",
  "key32": "ivb748aYNV6sDevUZfH57emFcn4gqpkQEUMMC4r38E6qbXhaqydoLSGcHG8sdPQDa3odJyLHEuPmDs16qR5qRGR",
  "key33": "5D2BKdtY67kQxvJnASRoypcA97VzLGzyCLQcMz5s3AmyUBxPrhtoDu8zhciFCeb1gSt9ZtyzPkVFqJkDP4m9MyUH",
  "key34": "5PjUgmZ3gpKQXtWX4FAsigoxsmbvR7wo3Un3gRKoy6NyHwNEE9ekRPfUcPtYCZVgA9ZXcQD9fDVJiFXK2ZFYnQqd"
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
