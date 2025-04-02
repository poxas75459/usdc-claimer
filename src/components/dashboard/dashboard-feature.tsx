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
    "2rYS6ZoJYsT5ypkped8G8VVSz8oRoQnzWae9XFKESqUJgotbdYiu2GpVfBX85ow6b77Si8Rqqi7iSXdfaW5ZAfTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xJ8U5P42L7wvzozf1Cy38RJeM8QnuxGqgQVbekoyxDmBMx9PeZmtRmoLs82zEyMym8CNpDVkRtFqnvVdbhQcAhH",
  "key1": "4z6rm8q1MU1oDU1J54RchSpUyQ6kTJTvHYfYkbF5twho4ztgeUCywukKAD9Ky7421SBPKgMWG6uZxsUdKaC9PbFy",
  "key2": "2ZW9QB25oYiLCZWkZD8vpuh5Dhk4VATKjRVQkHzp24mK72J7g75Uis4zfNf1rU6ZR2eMEKM5Rs4WLis5kKs8WyDj",
  "key3": "55ymHSyacAZunLG8kmswGeJVAP8J2fMC6KZoF1mrDuyMcTQ8DhVpRghyqzDMYePqtdz7R3Bo3nRaVUC7nzBxiqPL",
  "key4": "58F6BJc2ppuHdFZVejg4uhKdDdxM5DexsgV8PTfUgT9VuZrU8EuPtbWcWgV6Z84jjxuZs5sgyqEQt13CyZYCYhTj",
  "key5": "5wDSs2LsDJ5GuR8b2RLiYSMg5vyJRiDeCi4nHvxRpbE7xq7wXjrwCDygvLCu8m2ejgm8FgVeJMzP3MSwchp14Zpu",
  "key6": "3G9NHntZTThro1Lmw5FKcAoGawEhJW281ytC9Q1PB8tuTQ2oWkGRaSQnZJjo8FMfhaNrkpXfMgB1ntL7zTgK3zVR",
  "key7": "sFWPCC9h9idZuSzbMiUUYeDQUDR1j1QyvJH5FF1AxJiZSiFYB7dF6xafp86k5aWrJk9UbrH7pbT21ptj3fFAo79",
  "key8": "544XewMpc52crv3FuCa9pXJHBEpYWRoBakWaARAtXvjPK5Q5TXWz8gLvsT5z6QH7ycpXJNjz1LTWtZLZT4jdF19H",
  "key9": "63hAkbxANJyPbJahBcm3EYnX4GBFVWyZ9U9ykmN5wxUncUbuGJgqv5UgS6zquzxtTuj8mt53mpkE5WASWemTNjCB",
  "key10": "5QhvuMwZdgt4JWitLiDcpzLTcsdLNxPBoS2NFX1oxRZWwQwikAEczR9jbBsneUHBWqCYfxAKXP3Zq5xCrGsq61HV",
  "key11": "3vvH4EkJyKm2UB2mKs99aJHpvwwPiBcCSfkCfK8Fja53G6EaAVfyH5S75ihRC3ScSeTv57BR3Wz4zyEH62iiPZbQ",
  "key12": "3VtsqRq8zYGLmdeMhmoyzR6VbcRXnzRsL386H7C25ZJmDaTKiqogkD14jn1oZLWXFx8dg4pxca2J6CEpkSuctFcc",
  "key13": "4TcGzjZ2FxEFHjcwbo3mRv1PksZu3r7H11KXwusyiKgd9X95zkHw7QWwyiFo6W1DvX2xGs4PAVBawk4aEaWjhAN",
  "key14": "3U3RvWsy4yTCHQcUmJN625VQYByJJUHqsR2iTSJYXAEysvPwvmkLcV35sRx9aMgqXvx5J1mAHc3vA2Bz8J6ddySw",
  "key15": "4xdF5uPpKDbuds1ZkudSnL7h72tUJ435TkzKEBXNyckV4mNwK49zCLejn6i9sVqHhbcfa7sdHwwFNe1AutPaAQte",
  "key16": "3EgjZRpcLmYzYFqn6QtKzGQZJQK6ohHq2ZujfjYpNQpFGqQhWVuo556RuwEk1XjoeyffGAEoA5FZRKwxkxo9JFgd",
  "key17": "G6QgpPzHyQLEG9NeexXmgbTh6BgGYMb7dzaUEJ4Vt978L4N95QELS4VMMAj4iAUaWwujJuC42xzvRjSc6zHpuNZ",
  "key18": "3ghA7mBK2UJeGc58ZJcEsBLQKUkrnRq3HDmdmybbuDwcQGPurkFGtEHWuLATwEFMVHKfCfnmU7YA1FABQVyRjbjg",
  "key19": "rCs4DmpoAPx2PTcJ4J3iPdhkA87J2DuX8c4wJmPqBbrNHdgM15Q5ffi7Zk2sSNMP2WMSUWgNKL4o697FwbqTVY3",
  "key20": "2wY28NmKLMCbY9DgnQorh4Jmda6AQUghmjgY8L3a6k6e7jQtt5aHXSCXVuaBZ3133HNoQCLxiHQZTzvfXQroUBCp",
  "key21": "2e26kKzkkGQ3KoBsAsgVizbb9pMysJvgpmJqp9rN7kuFN2msd8uFqZxp6XYWMNqpX4zjymHZTTDerK1EWYxBWJoN",
  "key22": "4tXaCnSegtDK2Qw5LR15AiKGH9Q1vjnddessG9uGPyqWrzyoBUW6sMvTwhyYSuKcWFmYbFrWaJmDHXHogqyzbVoJ",
  "key23": "2sqcSxMM3PstUghHivb54CZrSurneExax7V7iY9ZdCXBvrxjV3wCxz6fGJcuf7vWJC9JNgPd8jaCpSUBFsdC5mdW",
  "key24": "44QEX1WfT69AtdWTUSmbyCP61fwpy74v3QsXmcCzMiG9qVyUUubA2aguk33RWrYvh3oihgeQVrfCcHJpkJJ8PtSp"
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
