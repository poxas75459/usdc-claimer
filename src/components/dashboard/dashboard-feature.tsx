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
    "3PuTkvs6eGe28rEmrJEfBkf5UjQ8fogCpV9rhAVsTnNdKhPFukcghqqWHUqjEpLuBRUYG1K4fjvMeYbVE4Gg5L91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D12Y1SGzy2D9GWHdJhJBhsJVFqdRjmQr74RTsBLjfqNfbEsiCsTnDxFJbWBbx1aSEnvPg1ej4cLqBDTWVpkPMQ3",
  "key1": "3wKEKx4viDyiQWUDuKnHLpsREf5aSEswpspZ43gniVstA52tTM65nSzRZEyoLMPJonQmsFgG8CPjDfaiE7qWCGid",
  "key2": "4dcAm4YEmPRnCaqua8HnzXw7fMqN9w7yeDtR7Fy6qvUxCXcscL5XynxF4cUHrTXzVF5hk2gCsTtw5A2F4oXEq531",
  "key3": "4cqU1fPrSKCuVZ8Le9w4E3siRPDXDz3crwyUZQ2y2rQjwiPFRoFpJZb1ZKEeGoopTfbNNJg7sT6wbetm2uZY5XYU",
  "key4": "39aTmRVuWhScaMp4GkTEdWdeP2m3S6A6CYuPQVjEWPcdsZSGN65jd2NgUiW95QHE7KvwkzRzAU49JfoAUFzFyYUt",
  "key5": "Me1zc1hrYyyKmoEztj7iq5F5drrrkjF3LGbZEqpyoyTBSYukKdwg5rWKAc8oraR8RSXf2y9vyrVwvPFFWunVZ2M",
  "key6": "Hn7cc3aPq23yBN8NiWt8ANon4deYVkd5ughzDYVJXKRnJNkHMfzQdAC6M7BWkoDbzMrqXmvKP343YQXZMrmXbuR",
  "key7": "63Mce5bNwCwdcg1iZYTfSBh7NHr6P5nyHFUdGywWocopjV5mzHm9yfwDc1Df7WXCyud5DXSqBVsJjfzHqkTujmzB",
  "key8": "3toz8ssCjXqoeyCmTHGjZkP5YSX8C4qyJmYhkCJ4vDBtMCjzbEXHaGRdXqpHPLBPkrrdCExUbCgVHuqy9LRFpqz2",
  "key9": "DsRRdP5zXxNw6EuzJduhpA73yrGdAAxwWYRQKyi5iDFCSTDYADijSAwZSLMcvmMPrtFs8TCX8WfNhCxqF1Aqcpy",
  "key10": "4QommmoXvyCxigaQvtjpz2drZKtfnMW5FQ96aJZm7CC3o3dNfNE8ZFBg8pnwVtdWMPCLhHyXdRQWYbeJCfgToKri",
  "key11": "3ssGMEvRcRxqhpqjopCVHPtqbMasyHAE3mtAd9Zm8MzrzxyterUZWQqVoFeegxvdMMuv7qvDdhRu2cLqR6UPvrVd",
  "key12": "3CLWWdukzeBHWtnV563DaZYwbG8wwkMCxL6wAn4VgBkgo47ZVToUyXFHh5aoncgXN7AnhSQVuPVDwvXASnvMP2rj",
  "key13": "Z2hxCB85NanF2s8RTa9QYcXmqyVrUkvVmk61zuXBFiN5JVmpXWuoy7paQUVa3FupCbfQZrnmRynbjzsKh79jTNe",
  "key14": "wgpLurUNTY5D4VaZHjuDbyrKu4FFQMLLP9Dqg3NMWtLe3ioWPdQAsVSCA5xqwMqUrCgZV8ecFFvjtUPT7TNx719",
  "key15": "3o7kjF3jcemD41U5WPmfgTKk2rvzpc4mTN5SAsS8a7wKFkxATiCE3dirwn1BypHJWmCcaj6Hfbz537HpwF5qLhQ6",
  "key16": "dqYMuZ1dn2cBuqxxnZwSKK9dXgKMwGcfQdQ9vFjvUcSoEmyXoRVsHoXS1KjizzXNhdv6R3pqosxacHyhCUN4xgj",
  "key17": "33LM3F2YQEeWoDK5ejozTqTpvLqR1vL2d45kReshZSbhPpBqVxPzE6VG3j9JdC5gpscSWHEmtHMpSf7FX3R3Y4XG",
  "key18": "2eA5HmSLZuWcZ6Dj1eSWtTD8Yr3MU3Hw8Go2EgTGUv9Pmf3htFaP8tG3gkiQeJ8zkozn2urxu7kTdTibkaZhVdU3",
  "key19": "4PTgr3MA3uWsTwXZwUvFSL48u3gAte7CV5bx4oKQTJD5T38GrGGYDMFcyCS9FiZ5uwvZMbEqQMoy5fEfK4PArN3s",
  "key20": "63gpSVnQLHHsfnxVeqv31xRR1XQzAETrM2sMSUj3TAiennTuC8iXAT48uQRDGtiKsXvnyJb9DgFpwC3QwF5E73cL",
  "key21": "65stLSsV3UZU6d5XtsC6wJcyAUoGSzSeyjirHLiowajoXbkz3SZwfYL9cTotPwgCrNy6cozMvXpX5cSxrZnMKP1t",
  "key22": "4zL6JMePfNuW4pEDLKny2dQCJixb7BoyjGvY835uditSL3up418Z6enGTSVkfcg8CgmHee892cae6585a9aqgY3K",
  "key23": "2QYy6SmhUxUD6jMyfdVaHDqtQiSwNBWQzxpEpZMotAB3JD7HJSTvss6kvogicQhPXSwFPnTWhZndFafXJJRKz3PZ",
  "key24": "32YVLHoSUpfnkhP3LR22yxwcUnSbPWdY59XTsyvbxoQNd1YFKpnS6thFj3bWD9NL2c1MhPw5dvBRtqRfX7DxMZXp",
  "key25": "5xWaCUzHiJJ8BCzDVa4edqduFCLZhwwiZVaZuGAZVJP516qDhzpbcdfFGHXRTRpQSpDW5xiXWJ6skrjQLMieFnuQ",
  "key26": "5U6Rd8xxZhWCAo1GgX6zb2fmW6R2MPsuM14dy4rcVZAcj2zxx5VhdABbfeXdVsyGYYhXwtctXJUHhU9pap3KGJXd",
  "key27": "2aSRmMooQ4HSh8HksLe5L6NmfSGRscocacuQbjpDVgUEyQcmoXUAUr53fa4UKxs54Cd9pJLQ4mcdYT6EsW1F6vQk",
  "key28": "2ydriv6pYkHstXP6ZNP63zcYRTFzqgU2Ma1CroGgTL2D2GvsE9qNTms2dgFGVyHqv2d1W8onGpFVrr7McjwPFBbp",
  "key29": "TvQhR1pqhoxX4nkv8DQMFmxtYsMcY2EJ6NUGWkfn47qgXquVB29FVGoY7EBTWAZjuo7Nto6yhTPT43ixBYh4GZs",
  "key30": "3n1of23YMerYTn5Np6JaMFqFjGp555HCt1b5EkuCiEVeLGDNuXjXzaka6bmkzM6xmSyjbVFJ3xsnc5PrTFxGbdvm",
  "key31": "s54v2SZMfWRdAmhfWkcKtkJ9hJVxuQxspQAwqSzRuzwK32Ah2JLgPDE9tSRv4LTSxhETBsr6AhxTCTU121hdedB",
  "key32": "5nMwkrfN7bZfYANr9SHMvJo2h83TFebV3xqcjngnoTi6y1YnLDYRf1cXxBKGKdunQzptFz1pCduu9AnFJeR93fCq",
  "key33": "4tm4xf451nc3hsrVxN9vcTffwpDyLzjujUXMVndWkW3y7Dv3mygxPx564okqA3XsLfsWKmJfGhNRvh5CnTAZKsY9",
  "key34": "2DBRTsegYZrdbucqfaUxJwZCeTggviGNjq4xts4qSmZee4AK2ZU37CegG4o4QiHiykeqbuqQS3DQb1gZxfbwEXbW"
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
