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
    "5J1nriH9TRvopWjXCKRundoUdAv4PuLELkdLaQ4g5tXdBTH7EueKgUHcqZet53FKtqytPTFM9bdDVXgRXpGjm3ro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wRo6NkPo4so9GBz2DPhJSPvyUsmFrPQbpEZfsMZqLvi6wDzZUH8H3eRdFU3CMeRXScaF1NxsYR9bL29aa2RW7ap",
  "key1": "46LhMp56CiiWCFtDakz28XtRWwY44K3kNToiocHKxTNXZJN2PscFs4q8FLzw9RMxkMS3nBKrK5LKiVHKkd6MRqaU",
  "key2": "5gbcbX86DBGbK7MjqrU4muLxr8vYztcAerCGkpqkaVooc1R3Q1kbesYverLY6kHK5mPcw9bjm8nJtVAfjPcJa3Mj",
  "key3": "2o264Zfbqb7fF25q8QSdjQv2hJzAxsqsWthviPvs4uC6JfBSNMr5buZnuL7dJmGrkQC6mGXK4tEFp7bqbSgMv3bW",
  "key4": "82vFosd6SQm9HtcrJwwwaEEE9dYBVVxeqbsi1CFB9PsxW9yqkU4zshqkzUHiGqsJ2oV9nr3WjowrWYbJ5oYgg3J",
  "key5": "2QD8a4SGP4aAnujpWiQ3fxFoZnBG3Tnrnee6YjtJTRVBQinViNLH65SwwJxFYye2FoXS837p6mZJvqw3YiXS2r38",
  "key6": "5yK4FdvsDLcp2pfkvXmF1xKzjD6WtFbd3dnpaBWiDpXRjvYLBQwTUjK5Gz49CkuFbzKuAhZq5f9mMKjYWznuYHWu",
  "key7": "2FZvY4XmFv75eb9AuBAkHT2eDWi37M3PvaFGjdNTof1rEWfQnY7UGW6ZG3fpDut2HYHJLg5HHSf7Ue8XX4FJRQ6S",
  "key8": "2pLbks7jMUM6oemwY1TgKNJkDTnBJPiWNawZnXUC47epTdC1XEaHzGDh3GwKurzERkGt7LEcf2ocT2CC3xoa7Ap3",
  "key9": "2ZDJURBijBNzF4DNvS5shjrk5BKTAbKPri5tfb9Xa6sv7GiXkZt4bAhpuRgpwZiRvcLyLtQr1wktbYBmbM3WbzWo",
  "key10": "RZuiUnChwKwVzCEjY7jDK3Edtdh7gjL5amBNHBFnD9gJ7wQPjEmDvTTwZv5Fn1U1u9yJN6XhdoyPayVueYFDR7n",
  "key11": "oaMcr8FCJFVf9XkSDE9tbELKAycVfvvkBcPnhrmXhVVzstGAMcBdRFy6QBVjPKEN5wWtw1kim5ttCxVksW6o5PA",
  "key12": "4VbCrarEfd7jQfZiGPsEHcVLJ3i6Rim8zhCLYtxWuXV56Mo3tar813gcaBXutMfhCSe5aY5ivvwSospH5k7686kU",
  "key13": "2SQSqmbckNVgiRvMNLcgWmn2ASLcLbs43Zj3KTBVa1oWFEqbCYn35w7MgwZ85kAQbkwjUUEdNJHWtS9uqYLmm5n5",
  "key14": "3Y3neZHa3DVStAZfwXZABFC5Mgzc6XTjcFaKqnH2Edw7iex9Mk3rzf1RYmVSsPg3RRzbep4RibAHEvkSbfTo62ZF",
  "key15": "37hZncJ77rRekn6qNNJfZCo9rWnToDhaoZruVP1fcc5kQDQu5u5WJLcU7WtwujHGwkEgjHP1UkjsH8F1U2LtkoNm",
  "key16": "9ARhLUeY6qDjEu5TZ4SWEK2aWBFyUJE3FJUo1BHufZcwn3psEzTBQpX92WFAgpr9iTQPXZgJpbdeyjaJKiKBEof",
  "key17": "56JEcJHZzFYykfpeMFT5KcNfB5apYCxaqm47qpHmkVc7Tbk4PMnBvqrUVGcVttr6ffrrX4etcPBZ4pwkBAVbDSL2",
  "key18": "5L2h4m4QiMLMiZTpcuNJPGktTv63PLgAksAHewsQ3r96Gh1Q5Z6zTNWKMmFYDhMyJX72i2PS9kkWNcQ5gzLQg99a",
  "key19": "XVJ825tj34DmLF2F9Cus9NPkuigAJ75vJKCg6rg84Vb6GgFL1ih1HSvR9ggYo6UrU6wDQkgP2u7XdopViYiGYCF",
  "key20": "3k8weSjWMaxWw7y8dd1khZgEi1ZGwfPmUm92whgFkPVvXs7HoPuDpX6LECMKpegPeDZRamKFpXjSTjBGA2Szk5BU",
  "key21": "5mKdp9AkTKVHwiFXdcWjoh5SRd8mYxiMAEByKTYhqeQRp8gCYqaKxJHAw8qAcqVMuGNNrvZ1U3qoSepXVF4Fefy7",
  "key22": "4GBVFZXeUQwR42VQjtnVcjN1ZoUPuzsC4F97LiTrgtcD7nPPEDe46ZuitSCLeJjPzUURCrv98N81YzMZbS5Lxt5Q",
  "key23": "xaLoAJZKWUenWgwhxf32uXvoj99pvjEtuwkfPpxCRwWSDzvNrFMnMLXTjgoRraFjH79stVTyUTRZKpeSN3hyfaF",
  "key24": "i2PhXKXiATRGpKMeEHWej9941XSQXMEJ215SpL6UUtyKSjFR2bjD3MhrT2gdDnmZ8YboBzKVtgj8rcBGkqbEus6",
  "key25": "BpCxjJQDneYjvdTvRpZmEUpMkTos8Ym5bdN2BRNQ3BwQWK6tTJNAoWCgxBVyknUsPfkRLyYZ6zVzyuMx4QbUfYr",
  "key26": "2RfA4JEmAapaKhJGstyZiHzPWbd2wucBqHpjtVmeyLoMiDiBgfvqZ37XKZQrdCrKi4Vk3BNwELcCzx6ytd2JVaRg",
  "key27": "5NSqKDEEVVU3EG5Mtso3pgkdF1cSnf7gaa4JY3oKQDqdJMf9bSAr8vvL854xCaxAdT1LuLpLQoB6Mi975p39M7WG",
  "key28": "5rWWpeBUR3xgAu8tdg128GoAdPtZnNTf2UyYMVxWnfHa3YQJmQhJXWJbxWqJvW3uwSrYnawge86cP9tUi6tvD9XE"
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
