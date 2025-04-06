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
    "3C3DVS8tqxsd7uXBvAjAi8Bq7ZU8CYnjmEJDErskMYD1mB4pgskBRoRqe3gPGDX4qvcfFxwa5goXbUmXuPArbLus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rSGRgtbBHfPWdUnkXfLhGqMJ9qdmc5CWxZEgAZ5PwfLRUvmrBW1P6HEvCEeoRDs2t9mepu75bzQZiVp3w3b46gq",
  "key1": "3YVZwquiZFLjHduobLWsJ15ZLcwVoCYHRhi8YssF7H3u9udQHQH69jnNwbZ179zXAWNKu1FPcxBMvGpECiBfMiym",
  "key2": "5qFsnKeB4Mu2RA7PVyS2Qg3PnsZjYXTBQcaPTqn7iXSbBPgcV2ZydWG4qGShGF6FvTkWrgjRddmj6nwanM9Ek6D3",
  "key3": "3NvgQ5mMRttNtFWjr124ddK533umwGx9BU1iDCzzfeZ6u7zyVbfrMjPVvsnpqqHMP7WC7gMRnVRpbezhZYjg8sY4",
  "key4": "61jfv4jkTt7wNkv2JDKfe7AvAA35MH7RpwoS9hhVTzoqpyRhc2SxwyTgeZzYjhumfU3m8XyjuReEDzF2tmHXmNoS",
  "key5": "5nmWwFuVaVriyAiqxsBz5xG8r3KB3znGPqxhmxp5HfRWAweuJYNQbhUA1iJgkPPRBzQjKZQazRDv2qdvXNBZV6yf",
  "key6": "5iNPCMs5dmY6UkF5JjfHRhRRXU5pgW6y34ERsawwrREdRXjdf7RTS7qSkL1voA8jS3baDsHDA9txAEoHgYDKkRtE",
  "key7": "fCjZAbHv3g9quSHAKhjdvuG4f6bbQgzyoDD2EXocUCY3txjo8UPFTmo1LUPNT3MSGy7bEgpG9tzrCDP2TP8zacd",
  "key8": "38QQXNEZKse9xT6hRWh7jykP1qLYZXYzda2Cu6v7uiBWfYPQY6ooq1TfCQxtwRrCa4GbGpV2LshVv8dr6D5xrLFh",
  "key9": "5eKpDfZLWayFQvVcrYnhQvzJwT6ZMKSbYX9ToXaXruPJrGTBQaLgbMjdaNUnoD41rjsUm1qx54Fa4HjpREDK4xQo",
  "key10": "42xjEL8yk547Q5rRJwksBmC1pQcthxvDzxQjdSiuLJYpYLtar5BaXwgKEfehBC3j4YEd2pV1Yumr3tqm6MeETYpj",
  "key11": "4DQmz5Dzmt7P2AMQXdYmt3DJKFu3Qb6Y6km6vPgWNLugmFe7xZHjNGmNNaPck7gecZzHUhL9etG2aJjdy4SXnfmA",
  "key12": "3s7RpN5gfzTk465mBGXzJ8NfYrAbaycinCoWZfnJ8B3ShAwL7b2QSUPu6qoNcj5vSvMbmU51pcYmHdCMqhJjHpda",
  "key13": "5YAu9TU6ab1u6EFXeMQhYEHQ8Bu7B6bdvSPPL9uFyahkwoxW8sjtcaNBHQRjjBP8MuwU4ysEa1kyTek7XbMLYuwH",
  "key14": "61twCyCmPAaRRTXVvpiyGrN8Kr54uooDecD8La7Zz9Gs7p6tKYUkzsb4sxDTSASpsdG6vXXkM3gafMkFMhNvw6Et",
  "key15": "3S4efUi1LChAn6hmvAViAQ1ggihr5UuhBcypRgoGf3shgZUhSjdUfs8yjCeutyFEWhbfbF7qo5ByT6VRMebRWmqh",
  "key16": "1MtWBm9PKVyrQX5Vn8cZMFjejY3eFm6qw18iRgR6nbFE6GhFXQ9T6WDZ6XdCk21jiSSG8xA5hRFr8yTCSQ5w4rv",
  "key17": "5SYkE2v42eznR5c2YQgCRqNDicUo8tuKBf2uRYDboZbaTc7NpzTss9V7R67uNyY5UxkUh9gu3vmctQ6y2vSYeqNt",
  "key18": "4FDxnhfRYU9ySc7ogr2YFrtV4Soj5PehQJwqJnz2zTzxHSEeGaPpEKEzNo6W8DezAH8UahbyraFKTxX2ZyQdGr4J",
  "key19": "2SPDd4yZLr3fshyDfqKjamgP4VYkHhCt2cBPwCU7iPF7ERhkHHrJ6kdot1hGDeyguA9hNYiTkWXkLw1idhjH3bba",
  "key20": "5PRQJRERej6mcgzskUCnGVFbt77WupU534qCFSUSXchCg8Gd5KqQqkemKnYJthzopCwwTQHpR1TefxHLy455ppnd",
  "key21": "3KfEeU4XZxiskFB4kj1Zm2itpjVAb5Hqybx4qZtVZ1QfaBj5Fv73SYafARkXWqBxfAzK8Z6htDaeX6sgb6kYGXzz",
  "key22": "3ogPKGWFSS78WNq3qx5G5RcyiQy4MK6xXULNRmvPCNVyry9ftUt8S8WH1YHsXgTeNf9TsAZvCkmUZLxYDbpcojn7",
  "key23": "5AvjgGyVa1yXChsSDTpGpi7cnBuVV5omWHhWmqvX2hp9rWSX74DR4DLDa1XdhjZkv7jFrYbHWKYVL5rnDwoG6aEh",
  "key24": "5X9DfyQhGo8TwVPdG8pSGAE21fYKVZhKvsYi87QVMa9tw4VczhyXGUsmFxGfBL3GphgLoP9NdvjXjfab4EBcTmfV",
  "key25": "3dqvQNG2GP8X5rkUVXxKMTUQrQt6uAXtWYuitrki9kf9fhG2EiVD6dsqhWNV4vx8ovqXFK6kFnqS9CYRLoEta9rX",
  "key26": "8mVmpafMvyvDhPksikxEcoSjU5ygck6Q8vGJNKCSdxqqxwuR93MLkGYhAeCn6h8zoZF7p2kUW3VaV9xjGqotiwg",
  "key27": "5FJ4divAA5cszEawU6BRiR3xcmLqjv6ai6ZCJcFyvBK1gk4AD8ffLYkn2r8hPxHxcA8aAVnxWaza4DoU39W1XztL",
  "key28": "61rCiCXxHPC5ioWe7CLXMNZ1maFn4nX3Xsd78D7n6Agek1iBrUDK9USHTNsP6bcCTFLnWDMfHMLp6kHcbzFNTeG",
  "key29": "24AuFmAMpub17jZ9thsNMhvsscGiwatv2hDeAHLTiDaAnevqgKPsi8p85EbtxcoG9ckMGJmynSmUS4w8hcKrouPp",
  "key30": "4cT4wSyqF92ic7SnLeaZ4LzwxXuaKoaPg15eYEQHU23ZLUCDr5HPiFShV89yMVTRT4xLbsdHWHPVeDWrW2uCnRhD",
  "key31": "5qDcGHdGC6ruromtBLkapYnog2Zx8QbqZBxpNX9AYXE73v1PRpeAK68MfkArU42bXhXxiGKhq6aJydKJ7dh9RZMv",
  "key32": "4WNjftJZb3yzZZosPttb2xZoPvpJqYisNUoqAU6MiTdWbMephGFTMRTSaGp77FXkxpvTmJcmPQDmqgVvM4QG7Dpm",
  "key33": "PMkKy2hfn7sEtzmteYHvL2Rs1omPH4K6TvDya5v2bcAbjn4Q3iFtuK4Wz1qjLQyDJxwRiku8y3rLhfzM1Kx9FbJ",
  "key34": "54S32uL3xJVhqWehxus3jtyAJuwU7hfMsuzayjwmuhN4y4GoKasqbnjqMfBw2Mxy18ZtwsevfULYKTfNNgVffqDg"
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
