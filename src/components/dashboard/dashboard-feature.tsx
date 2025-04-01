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
    "5AhW97UbNaZNC66SJ1TbBV3ed5qrcRaL8sWU7YBdLt1BaMRSta91raPohCbk4hWLLamxSHiYMv95WJAADj6HXjLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cUgUZvkFQs54PohtQ6dk34hCgpe8onJoj4NyiFQRxC3SRkJBdrkX5umzyLV986ZwLZ2Hgm7Gh4bj8bXKm2a6HGo",
  "key1": "5JP32frTq3T4rKZDfEoV33u2jA8AgPmGbtvj6whySBsrovWWA7pR8dmDeZKg64w2YNAKMzNR68iHy3cJGYhAkpNd",
  "key2": "5mDYU73WuynvdRWtt3WFHNeyxmvh7GnnApoWGB8KDCkr5eoZ4G8yQ1kqm3x3BnyNMemCLUrTTZnC6iiM9sRAr85h",
  "key3": "q5Zj4CX1H25MjdkV7JKhKXtEDLhfJ7ii5LGbhrSkhoeKoxxmd6TwwTV247w14WbhbzSX5Hbyqgfryyun7bgBoQx",
  "key4": "2AVGUtqJAwfp17EsGRJLemRGnB6qDy4v1ZgxvoJuv75B6FeHeZXYrd49Rskt6ZoWPuZRjijXUyKAXhCSi4fnTvi3",
  "key5": "65GgBq2XRh2z1nkYB9dUL98DKdNt6aJQbbJ3GHZHcZpNBNTDENWamkwkmnqay9NUq3Qqm3NisSxNi7hzGGnd6C53",
  "key6": "3k3ga6GSPReT3V1fENVQokdmq3tCWkYHZMUUMGLMgwBWdTF5KpMbNyEbgdbtEeGBpe2rTwJTxKNzguzzdxCCKrZ8",
  "key7": "4iA3iLtAcr6c3rAB269FKNNXnh136omoLCygQrVeARRFF8VbLSWemgy9Jg6rekJQaTEx1yA8yQaX32bMUKuY3gcG",
  "key8": "4V8didSWwjT9jH8KFZpqmRNeA7PmZLZpWXNrH4n1fRCJa7Qk4p2HaitYDsRPwNZEVLssCf7QkVu6KSf9FsnMMjAv",
  "key9": "4x1xUyq6HAfSmG81diKpPZnFGjs4SqmXvVqHhaLjbKufvCV71vZ4N4CWiy8h6QgVHUp9hYPWh1usRpDyjHo5SaxX",
  "key10": "4EhXTyoT3oYcHSycd2cvXxA4NfdWkdKSSnhPTorWR7EiSSNjBpZ5Jhama8NrfeaySYjMAm6XHakxruu7zYFdiRTD",
  "key11": "eQZFGinRnHWCSjzMNGXBqyFdjLo5e9J8sbY3dUgfCM3HZ8uWqXqhsqtxtd145uuVd4Z779rywYjRoMoFYPnYzNG",
  "key12": "3fta35aLWGc16VJB4mZD8igYXmCU7VmqEMpCh3siRxqZyMr9hpKFcmebf3pFxE4TXBxbNwgwq4yLZjieuAFmNcsK",
  "key13": "3sbyc5xastvD7WKR7zz7tg831VuX1q8MFRYo6GjGDgAE7uwGzbSAWseELRrYtUDBGMZNX3fmTWVxL91vxUM4RDXr",
  "key14": "Pu7X4QNiCBF6HmKU2YTX2J7SYtipiQ6jTCR6eY52K1hjBMPkWwCBK6HpK32FgcJaEsbfTjYWH6MgpcikbrMZiB5",
  "key15": "5PzGjWxnGCkkgRiN5YFWHrzqwmcEFGBAppp664yFTZimrG5qptjx2nMDYUDwVNeKSTt6kJLzkrKuwMf7vWbj2Z3n",
  "key16": "5VJq7MhRBgiNwMrY1dsyHx9bXJ8RvfiHNZmHD6feoUMW1RF1U5nExDxhG94HjMRRVbVBaH3B7ReWByhSmx7eE7Sr",
  "key17": "4XrZkq1wp88kdRWzPX3VB8xRD7FUq2Kvx3FZYkcDmcrvsUXcQxrGAkjL9F6PLq2wUqu4EMz9HwNKW83TajbXM7EH",
  "key18": "4eMHex3EHYqyy1NWDoZ2WswBAWDDGqkKAeiDmvJJ7aabbE7ZyAgCYB3NSHtLKZuVR5SU7vf32HvbFp8KWQAc7FAd",
  "key19": "jFUG812aKvKNBaeRVqjhGuBDUgL67ZFBsYtvRuPTbjWZ4BvrQo8EETeBpQ9ogVazYgYe31QcrU13aQF6ZJysVaE",
  "key20": "BHxmoMD5g1DQN8Q2Jjz5rJv7hg3FnuaJiKcYbqfZFCyfBwrP5KAzVThRXxGRencQsds6RMooiFdTP1Q7aueY9e5",
  "key21": "3SMv4cHhJfveHubtQ8TUXjGrwBUHcVgZrtvs6D32fM7Msscwbqh5U53ZWp5J1aBGN2n2iMBGtzBnZvhPWz5CqhjE",
  "key22": "5r3EaDcfC5PJEMUD6wpMVRpiag89jkNbkfk6gacTJyCGMMqPxv9ig5GB9Kn4GTJK67wU5zoVxV2Fykwr3xAH2ewR",
  "key23": "61EDSnA1UXphVLLnVmBLCAL2KbeskAm6DJjaFt4HmgJdsYhhMPY3zB7pMJSR7WfBpaWvEpZTpoczrexip5zJe29V",
  "key24": "4LL6KM7yJx49gMCubQWpLzGjVVY7LqvskfGhAi9gNwGx5ywym4z6HzQD4s81qTNhkQQ9YCU5ZAQB14UhgnWYU1h4",
  "key25": "2ZpSLh4mkXAm9etfzaDmxU86gHph6ZeU3DffssNdaQcghC9BQ1B412sZ1x5HRVmM2vmV82se771BBjGQvxyhWVfn"
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
