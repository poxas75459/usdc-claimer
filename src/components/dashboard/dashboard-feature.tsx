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
    "3FrqDjxysEgFf472Po8GdecD4XjPuHRhiJ23YJMfGoMu3Qu3cpMLaqNB7WvFnUb4qcuPCzMZxpAVkBahYymoEMJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sRfyqBu2N9QQBSnwDqJQvx4TkJVXtCuJ5d9FAAn6fkhF7DdouM5j1UvrLfQxm9sPvyE5aksH2nmDUPfr6EE15sf",
  "key1": "2sYm6pupBywzM1UsTZhCMT2TxFDf7KGSYGzUEQ6LYPTH95NP2KupsyM2YRbb1FPN3e3XJVDbfPUxYY3zhYUN32fD",
  "key2": "5Pu6axy12AqaKycigF19KSnyJXyeUQRVV7jGmmEqUr3KNF7FykDC98A4FRTbRiJCMBhiCCBhVLriCEN4HjT4oY7S",
  "key3": "2jPniXhTbscjaycRzCHrZRRPfGHZvStx3tcN3UjLhf3T7tEg6MEXCvfo4QpqoWmjw8nKN8xXZGkr1PmsKjBC3NFv",
  "key4": "53oWPgN6hmAYnnchWAwQPQWXtTBCkDXEBAVqeLbePy3pPUEKz936gcjKoXeJbcbk9PSyxGxCCqbQN8QAbS5aCHWo",
  "key5": "4ELs4esnd92Yx9iyWHvN8681Ss9ajFp21p2GaGG6RWbZGU7gMd51z7dGu1vXLNxuPm2vQUDhWkF2hZanuxZ3B8Nv",
  "key6": "3hEUZGgstVRkdbpevgfx6JP9t1WPoEGconGFa6W4bKF2UuPhNw3rRioBiMGXwBYuh3rGbLnsYGVSEWQvhrvkwgph",
  "key7": "4DPwANcEXHTiim1H7G3KbdGgasLWQYWNAXdbZebByuyXTrD8YhkP5DFYig5rf5E2pZGKzzmhxxhyyagdkggVwfws",
  "key8": "3bm9RDGE8kFJ5Qx645qbtFHcuXrjVFENaSAMAj14rFub77SYpfxaSqyfzPHfh4tHc9UNeiEcSduBVFwX2FgZQngL",
  "key9": "4bWTZ2k5EiyCbyd7mBnvcZ5FaDycRuTkFWKRdNL2RtBayFb9s26KHuMNrfxMgtcTrpN5GtGSgXyi4WGxnh2rV6Yo",
  "key10": "4yxM3tK4pE17wjzuu54P4Hbg9Suiy19GSgugRQpmzQ33o2t34FRsiYNNm9ZDuJFRsReVk2Xa7mzErWhRTBchYyxu",
  "key11": "33w48J33cDbuG3kJUr9efpJ4fTW1GZUweUKuog5c7ZreiAsQ8S5dEr5wgbdGSWuahq5q1wkAvcsEsWWFtX7JbvXX",
  "key12": "34MmSKhqJC673qAJg5G7nPx9uL7hJeuPyQj9L1NbsHcu986VHfDB6BgYN4jQMSPN3sKa8sKwLmioAw8eQ4WDxKJH",
  "key13": "48XTsgJfgtm9iWhoojVWABB6AMAPGHXUTH3jiQvGwwZJb3bjTZQRgPWKQha1Lg4fs2sbv69LPhwTdg3fBcq3keRe",
  "key14": "2dGUsqr6ND4Wdzw2ani7GdATYNnLYF2dY6NSYhNeabsn2Tph1Qiid6G3Q9vmruAKJMJG8VGXyFvcDG1WkNDcc9w9",
  "key15": "2uQhohCWdgw5XudWy4jRfxv7LrvDHFmMTJhNVuiucp9VqJdvZSgbufy6wyi3Us8FWQ1Z9Raq8kVt8A1LtfCMW1SD",
  "key16": "g5svYHYr466fxka48F7UnFMJ3egvWc6hteaWtPeDpazqnpN9Txtxi6mZKxfFZn6k8ZoPfVAxzVVeAfgBbYWguCi",
  "key17": "2CmEthbf9DYt5te3eFsesVYrMvmwUFmbtQY8PgoNDpsXBkYXKwF13hVHEU2Nhq7fqXyLS1mrN55fh7z61i3YYgYo",
  "key18": "5X328hr3KZD7y9mywEUMNqrAMEGpNKUGdD9Cdm88GvBBis8bZq6MQVZszEBpofQT4QdwZQYFiehmyV16yECf84He",
  "key19": "on8VdFJtvFM5m1uJoYJqwN473BQv37DJW2ZFC54SQw3Yihj2qt865nFjLjDWNFfyJJYPf7exsb3RSE68RfhCGDv",
  "key20": "53aQ8RQQjiLi2d9yY4u1guvhwAVwNhWq31KZertT2k29T5qnHgRXhdCdQSHkWP15sJYztjBJ1BHP8tGauTgxNFQe",
  "key21": "3j3DFujwR4Ma3s5JU1tq2jePgKBUYSd7rmYAvpW6R9v1P6iMvaAX4ZMbKkM4CSrepVh7CLjLkx4B9SthnhdKNfP2",
  "key22": "2Cy3sPBRUTXNZsRWnnr4AEqB6F7DjCrXof3kPVHuyLQSpGH4yNKKHhNp4ZTxxusYU8SDY5wGWzGAt4yXWD44JbAf",
  "key23": "iqgQimt4u1SVxjFBx6QemDHRn9zByLAmhX2vMQnUNPs4xMA3HahLSo7vj4auk13K8YzsirSdwkyuACGsiRCWSNt",
  "key24": "4Ur4DfrSH6e7K4nGFzDXp1Lu5KPaBCQn8RiWtoRDjYhVUV3FTxbrdQXmnfh7EKBpArGEUEAi6EjwH6TbVxtMnWH3",
  "key25": "2pyPPhDAABY5AF2q3zT6gviCd4sVSTXP32afM5ZQkJLqXm4rrTZ4KyJiaVB34V3EyHkYrRNsTQYp4yByQEK7RX7Y",
  "key26": "5Ve4WzPWr2Was6Auz9No62mHTAv29Y57PYxYjVhvSaMpnPV7MTX3yUoN9QFZ8aT6Sr7Cdd1nDj293Fv5jhncJQNc",
  "key27": "n7Nx9fuoJRd6yK3r1LmAdeBC1mw3Lt4b8qcu3P75wwinpFKpeKoaG9Zw2xDGiZhwLk1maJS4DYZoZkKLCTUTgB9",
  "key28": "2rj7F4Rgopidc3gDgpwdvcvwGhy7iDPTEVA6JGuvqSuYrk3Lkg9aeYwU3Ny7qgmo452RPtexcXvWi8KKGKhRGcCi",
  "key29": "264rcpJ25m3NMij2sAFEWZDhYcuemikm5rHM6xg4zpHFPCf4AtoVCUhqZ91DwBNsychtmya5ym6BbdV9kqrnw7QR"
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
