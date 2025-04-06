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
    "5JA5b24cecADZmijpNf5vW2gRk91SpeH5yQVeDN3wjjY1CpUhjSWRf2t6DPUvQFVmuSPcP1ehWj5Vu73icgkkyR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ge8gtA7vd1bNQ38eiB1U2yrdsskHTgtJWHmvKgQkCydwk9TwBRGo38zPCUNbrMjjcHPtfsYzgouSn6UY2L6dj49",
  "key1": "4Kn6CLsEatTkveKkwkkfBGuNthHFGxRe3deXg6FQgYa1ZkoU3ZTTkeESedWyy4p3Zyz1UEeyrpCDfjwLttLtQET4",
  "key2": "Kkq7aR6vzJ3MFBqGzKqfcqf38Jb364dRJ64eKanzpzqWLEhCvFhf6Hcs9BHYcj4ea2rwrfixBJ65ATUzDngD3P3",
  "key3": "411bgg5QTMfAtGpR1ZPXGxFSRwf2sonfT7hCjGxTrqU4u7Fm1bz17q4FiJf1fwnwzLvFLrWsx8qdX2QfKeXgJmFT",
  "key4": "2xmtz3qGhTTvTqBQ7m4eAjnPzvdEVcV9NdVkFuTarbvUS3RpRi9w2wTBMLzMqU6yRnVUuqUjRUzjQmqMP3wR2NpK",
  "key5": "mq7RVFFxS61CJqkbYuKotMNmfjKxiyrdU8SFkfRfzEeU7EEQLaFcH79nnaZRBRR5uKeZUthWrMhbGzrTiGbSUFu",
  "key6": "41QFK4E5t6SZk84ydKixTKBHXYa62wzBbnRks9D263Aibg4Lh7ESmZN1xvo8RxT62bZSdRYDa1TScHPV42oeAShP",
  "key7": "3Wb32FQJDWpEc6QuZ2HaAWKomCxY755sKH6iJB8KiVFyuq46qpE57fZwrWnQGdkLruCaa6mtim12dVRtbViwF52f",
  "key8": "2fG61PzVf8Lzf1BpQ93hgobhNwmuuuwHQqcWZpdtJLw4RR3DkqJHVUngJJNtjGfKLQpgAyRrb8TU1gKGFQHu331p",
  "key9": "2i21op5Eec9DzYqQ8ohrEssJSGd9qh1rUnwH4PsFUaJ5ZmxzMkCWfmX1a5qdT9oe7C8F8667wfnBsvFvNKbJhK6J",
  "key10": "2U122CycAXgfomTxwxPF62HqKQ7X2cwRuesfJL6Trjr5qzxyRwp9mS4dJtAGWfvEyvpWQRzhpfv3DPw9CJmcvNev",
  "key11": "uJCtjQxiFbWwFomW9m1J3HiUfav1qX1qsJDBDy2782mv99SsYRZNmjjEpTVWSzH6FhdpCBKn1cG9dfsY7HUBs6K",
  "key12": "5QD4PVevut5rQAkkKFDnmceceFwSLM6RbqGfA2eGRyRHvQPfhbNPKYe8ex5s8C4dHHcifMDUyeDQvSrfeNGxgTKx",
  "key13": "4WsTdYpznLjri6dEb8CXgFmd7PD2FfWC2L6Do1CfSDvd4KRQn2GMsR4ZAdZNaqABuyMSpmxhReTKM5fhuah4UPZQ",
  "key14": "2dGyJ2e3X5isFXYdLAHE8eavcP3jXcdjFMT4HZB3MTsxRCXssAMoXMMwrMHWZMqJRfigYShHvGCRFyAzfMFF4rXm",
  "key15": "4XhytCavdbAhE7tj7vhhgPq3LSgXz8wVKv4EjSDGVttGJXXN6N7wNKDPh9okoDVFb1DFX6ZExuwAKia5ztfmN2JX",
  "key16": "4bC8nuSg5Q7WocDxXNENkGdtutrLqzNdct9LGpbMtLYLX51cwnhqP4Qnfnx7h9mYxKyVnDjiBTyeZQngumWRFw13",
  "key17": "3H5TTz6AXCy9QtAkSzpRxkX3ZABp8AYd9Yei58xzzMneD6YChkub5gzeLk48xumLUf9GnQYZE1eXb1BvQFMxjjmA",
  "key18": "3prSnpssY26KfD9SpGdeF6JSnZnBb7kgAA8QibSJ8ySD9JUbT7pVw3mLcKdu3KVc2xgQ9gv8nqydRXy1u4V8YrfW",
  "key19": "2EpVFpNdJrH9a7yiz4bYz7LSZqYtZY4LH5fTpEHnK4aVSst9B5ZB2CNWGpmNWhzBBmBHM2KfgqSGaEb73aXWZYcm",
  "key20": "3KPrpFt4RRjpZCWM3ewnyfEt4rMtJAZX2MLDJLxcCBZUePSekLWnLxUy8dVcKgg7EtHnsccgCT7c4J6UBHuKnA12",
  "key21": "4L4YRGfZapQiYqYPbq8ogGnyX742i1LYUbYYBiorHse6hzHUgQ4xnUVbyPResft8Nq8Kcz3hPLbr25cWAsEK73gK",
  "key22": "5Sf6qj7HGGAxHbP5MEuUE1dWeMLVD2uozKr1ionJAGTHQFEdDDxJAEBoJrT6DtF7wP7bs9GsTrx3SQuAhCCUusG4",
  "key23": "4kKHWANucVyJoVPdycBSviNyeW9SS1tJHioqMEDpNsyS8S2X7aBCcR3hsR3e7Z4PEEBA3iKmbddvMDBqQ8nkjQgK",
  "key24": "3Ty7dAcSRGxf2sowtwv1B3g1hsRk6EJqestaXbkuwjivnNV8ZQRdZfgKQwDUCbsEsZXXCi7yZPTjGMJJV1hv7JmK",
  "key25": "22SGdeBTp3CRT1MYJpQYhRGLHfaB1wxZtYVWJ6rEnJ2rFv2Ae3REWcSsPCRbyDU8UixQwWNwXWtyWEerQMoNoRGf",
  "key26": "2DAGL1XaFkBsvkyEj3b8kvAJmAUQKKrDaLpHK4vsbW4SDM6p8Y3EFffQx3nrUr7G9DViXrEqbhYrMSdKn3XNYyC2",
  "key27": "2se5dP8SfaQ6auo6tCz7uSpbnv4VSNpgDiPrF3dMbKsPwa6uXYuWSH2MXYsTfVLomUpE5vy4ewwuvwMmgPkJXtD4",
  "key28": "2eF5ow4B9WtMAxU8CnAKEEhk8amQbcyfua7sp7tHJukXCYQ7NBPw8oVahaB2zLR4nf42eZ3TsqYVWx3ZEn2XB7ST",
  "key29": "49aTjV5JfF7RhQkPnxr8aUzQDUXgJXFnoLGrgRUTJAXUrhgZSQCK2WdLeoFv8K8Srx3LW8kQLwE4yCNiHcoV5R95",
  "key30": "3zoeJQQPj1c7Bb9UMvts579fmxRmzf12nN7c132aHjWCt4nxM5yCMWnpmiEwvtvsgHfr8KhqnY2PZ1pmg34Aysvo",
  "key31": "2PGBgArTbwjgJSibEegCAUQ95MCq5gWytJsdSSqjTpmHK1p5Td3TLXw4meyL1BBLHJTmLjFBLMEN1nsooTCLhcF5"
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
