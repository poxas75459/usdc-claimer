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
    "2cZuMhgyzDBZ2Gye2AHw9g8dTVXBywQ6ivuRUSeJmDay8akup1h5GKV9bs7YT3tLb4TdWCsYgVXguNoGX9rQMLWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5raAF2fb4fL6pifw2DgVQJGynbtHdMeVtSKK6x9ATzX2k3YGuNpUf1ugMs46zAtXSA6mSDY6rxFC2yfPfBrHV9Fx",
  "key1": "5TN4TvuP7QgEGUgejzD9aDTfrtyyU8HnEiq7e7HYHpLWGgCSX4gr9JeyuPaAGu8aQNxcZvaqMnF45tDAsiNMLfFK",
  "key2": "5UhMwFFTsHhpnRGHXFXhsZvfw1eBK2veHzJdWS6XBCn9ehakGnHHwCL8uuQYnkqqwytJycbCqoRGTeBN5rTq4YT3",
  "key3": "43GdfpKz4ZL2MgLMkNLUGoXqtmyBRTbe3nEtTo6fiyWdvhxZGPudpwsJkwRK9PNheT9mU7z5XzXsZBjoAjPLZxxw",
  "key4": "57bBW4ZX45rs7ppVi6UoWPa4MAd7ZFSrLJ8Bgshi1nCNFYksWfD8GDjbHjasy9evQEeCXZ8fAByWv6Z9XaEQSeyC",
  "key5": "3yy3kj1z8oYMfVQCKqXu9TAeSTvRZ28ASid989ruBWLf78RyPJ6vaMLbRAAk9P8AHfoBMCNCbbPTEM5Mh6pG9aHS",
  "key6": "3iZTbTapXzxpZCxgo2Pcid4aQfb75TTrNGKY4dy4bYpCzhH8ziBgStdfjYswLcHG8fp8vU2RoL171oXC4CpKWfj5",
  "key7": "2NqEuLHFkRGo54RRBKxE2KLuYDNf9UBVoq1qNXXSi5P6JeLuEx6WSGKuM3AvbqkoYKto7hRqzqXiPjUuwz7J2YYx",
  "key8": "512gLRih9ZCxp2LRuufduitmDJqEUnTV6qKMc1r9Lxk98WgnpapUbZzLMYjypY1NXTsFmPWsWSzb93kp4cn914yQ",
  "key9": "4kMbGUUkBNZEvXZEvd9pSBb1Ng7ug6LBZtwVPmUFzbWe4QxvP8CvXQx4vedmzRNof8AXzSpTgTxpKob7RDjiGuQ3",
  "key10": "22DgTXJb56ZfUZe5bYFjJphapiTgw2i6ThYmucrT3xR5MB9rNZq3fzJLbt3TKcJ4mbo7uH885P1hqmnnRb7RsBpz",
  "key11": "5GgqPPE1i8dnZJEGGDkKhshn4fADxXSbZN81sintTXYSVjHH6wJvfs2vPBPNNJfh3rpKkoa4mz6FFyFLMoto2Qto",
  "key12": "5dfrDgPTfhCnsidFswR4qnxU628vvmsbcJRythdawo9xuhAVuQ8Ka4a9jvrXeez9gSH2V1zuEHHq6L5zSBinNDC6",
  "key13": "35rTiVrWTSEUP7xjWkFEzAWeSidG69wMEJ1obvmfRZaJTnjZCwvjHfa8wyKBbcQaYU8RFuey2UGTiXmtAHDuBigL",
  "key14": "6ELj4ewj7A1GTsH8oHB5RHzsxAA6circdE1amUo1h7Xjxra2Nr4R5q8dvvTUqRmFrc6Kj7nNYSN2zAMnyhfUMXk",
  "key15": "3pjSumhGEgtLvwSLEnZ581ngPbUosVh1euDvdLMky8yRT1UcvVv3LoVmFxpWvKuasBmLtV623XWREXWrjAuM4Bbn",
  "key16": "5NxTSNWvrxZfMrLvx1HZRzCW1T9DB8Qa33gvTvbpG144aGdPXgKZWM5b3DXnmXFRfLiu2NEB6HDgsj2FomyvRqDh",
  "key17": "5X5qszJRNQWRzQ4ouxjxAJw9Dp3pQkbSD4GD48AqnsMQCDEUKhZ4qu7uwcVK4g65bshHstfXGyQJea3MMpSmGRv7",
  "key18": "2JWW3bGQ6YmjLfJgUMZ6ywJshuhYKp8GfRXZZTy8FK2Vy4QY4gowM7MR88i95TtBsMKozfk8bjzCcvHcFHwgqVbV",
  "key19": "36XGZtGkbNqB6XTiXXZMjHLfdCZhuPR1y6CpdgBHfguRwqKUf9r1PVRrhpjW7JSuNTcXLLtUcmiE9hBhcraszvGe",
  "key20": "5ToQLrPAvKUUCdzqkedeVYWdZZVnQ7EX7E2XhZRW9Eq52fDLYKYddA9rBzFfJ9fc8V3YvEVSYNgu9PcCA1FFHnNM",
  "key21": "4TWxX33JZJww7BeeSZq2fm4M2LyL2fcKUWv1qbCxaCErJQ1N6GdJeuSpakM4mUvWovnrih8m8XVwkfJirNNPNG4M",
  "key22": "4Su3e5Hfxup7cWqXEGMHcFDPT6XfPCHnp7uqK4o6jqXRSiQbMpwd3Z9fd6acTFPGa8aptM1JMkoer7RrXwng9YHh",
  "key23": "3rzsyK5mxsf9R4sKQ3xsErEaNU37Z9yPs8DhDeypP1LKRZgK5kACocwUMrUcLpre34mitTAy6YCrPtkJTrQEBuQw",
  "key24": "5W7DqF8x61MCbBXU8YjNEyimgGwzDkGNu7Fu5R7XBtSmRJUWzFiXZqMaqjq4P37NwAWeAF8WQEef7SQUuFaNAYGm",
  "key25": "3vWkJh1Y421rr23eW2BWggmkxCZeRGkicRVu3Y25inyqkEqWxB5yie1QuMzhazEPTKss8Fymvr99Y2bzCDmm6iKg",
  "key26": "5QvX7tJKUpsfcmNs6ocQY31t47oaCFdVxtnuo5QH7GYF48iCZj7Z5dZQwNYRdREFoBjN5X49bx3ELfGwwRoXZwNN",
  "key27": "8dUxvPUVCwtwh56t76pJ8qxAuARELUvcYALsVFTe2oQgrbUQJgoLV5FZRxFEQwDoe4fTED5ncpXRKCTUBixfWGD",
  "key28": "n6zvkPLSbzFz9owv54nyKwfskVbta9bAWk4prYDkYVXEY1uEpWxCjVrqwDmS98r2svSJfao8e3MbxFu1MbCQ6SG",
  "key29": "3pN7p5SP8rQ4KjDtzx52yDELBvAP2e8NrRo8Wp3zWqFiz6f79W9XQpoN6RhFrXiiY3wrwpGJwsP5aKNaE1HgshHv",
  "key30": "2NvJFHRoRXRiGiPLrZRhutpyhuAvuTKRbYbtBTRa5ZBzU9ZZootvYg1cSG4pP4FVjAAto9sCP1DBZFF1525zGMHC",
  "key31": "3n4F95D8YbKv9rJ6rprNPBDA4hywyP6mkByGAR94z8gMSyHnSaBYGQ4gefe6stTVMrqhNEFhca6vuEh5P2tefJgd"
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
