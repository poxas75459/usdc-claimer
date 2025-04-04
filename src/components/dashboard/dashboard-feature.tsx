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
    "2dY8uLAMsVztRR2Um1QhS85t9Mepm1WSg9voEErTdizyARxjCsJyf7gThbkGCFRfEv5YWjJi94mUZtPYx1Uvs3Sd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A7UhsuDo82CwQ4Sgew7wETMDLWr2CQfSkWAvEyhxfZpqX6vVPDo4kzKXjFiQ2hWQdRdo2DyY7WmaqnmqPvw46LR",
  "key1": "2DJoi5WuqEJQzZ9VbSgBy8c7iXjyKnVJLEGFQXPq5JoRTEDYKJhTkXqMCgwLzx9Yy4S2qE7HYePbGYhTRGaxpXJ1",
  "key2": "4SAuDDaUg7LTxhYhw8DcL6HoJ7z85aapuBkHDW6PF4kd8BEKQZcTf7CBJvsqkbvNtf59Jn2LuVsTFMv6heZ8DycF",
  "key3": "4usfsB6B5op6UY8L9PRrTgNDVoLmmuGi4oUau4hdoyqExBdQaWYEGoVi4WQVVL7rsUzKVDfzkep2FW9jvdcetgzz",
  "key4": "4wZ135kgH4gNxyKTYPQxcSSgUndXNc1RSmpV7RsoQPWmEasKMjxQYvFv2S6yv9iLazpSA2YvJcK2LAv9kwAfkTTw",
  "key5": "64qRrLHk4Fnz9PRRFuVZ3gQPXNMyzDcQPYnqbcGh3n2yJWcy2dXpy7YAcPnapWDTVqKDC3AZEN8ug9CpCa7VMbKM",
  "key6": "2W16bbh4KQdZNCvfkeiCZinG9AVuophZq4GwGag9ewFGuq6DHWRkWGP5SjEWEjcKTejLE3mSZTUMDsQyK7FGXkXx",
  "key7": "64UJ3h4to2owUzf9GyCqhHtdu463Tw416nevBquF7UNH6YNzw2oUpKZpcMTLDmXtvZyx2FMLxLE3Z5NDG779foVD",
  "key8": "43ycqW1AKNXiZxnuSw9HqdRmFLZJHtTQ8U6Z8h7esCecYPA8oEPodjS9ter87zBFwADToYnk3S5jetR36cwJKdBK",
  "key9": "4Pn3syextaRz82nv48ge25ZJ34So1v7pJJ8n4YDZuuM33a36E2uBB6vrmQkLtby8vs5Lhzv6YS4gsepzWtg5rAJZ",
  "key10": "3aVH7EC6pC8NqYNWdPHCquuhUrFwzJn7cJFUyZY6if2qyscLmPeZibhPccnDZKE8eNapfT4viEn8mzHvZ6u5kGRL",
  "key11": "3XSqNNPh9Xj341JPMLTSn4LzXtC8CttUAb87U8mVyFLYqiJLsgb8vBLo19pnXkjiDRYDuw6qCVorCsBnA3ywJYUd",
  "key12": "2FfaCz7mHmbNCVgxjBgFkjb7DM33F7Yv8yom38JraqLhzQQamTeJkAJ6RpTeVo9gt559rDhUk52RqZgHFbxmFDMw",
  "key13": "4G6APLjj3MDrUMPinxiM6Uv2jnt5PtBVWm9isrvuwksaNmY3ti6gsmUcsPJtBSLncYgSiDUnnqj75AKbn7ap54n2",
  "key14": "4GjMtzPo663Uw797XJPKBBN547DwhVPAeMAnqMNXLDkaAbuZPLNYPhvamg8qeoQcZKGdCeFrQ8vN6rZvDPPtWjVe",
  "key15": "VUMEBi48bmWZeiTCXvLmjemDR81tKnDJGE7KAiBBcMQFsmjRsmMTTN39SyuyH1ow3HWf7UDBrCfcMiqsnZPje9S",
  "key16": "4tmQWr3UkYbYuhTuCKZGTH24qPbahXFYzcY9PJWC7tMNZVeTMme7yJwc57FHUmh6stiGN2SVt4UnvBSVhs78RfWk",
  "key17": "3xnNb5Cf5BdRyJM5GFGzJbcJnDTkcPjZY44Hb5rWukM4YKXKwkUKpVqFQ5TQqHV54VXoAvoxPsaNaTt5q6bZ4iV",
  "key18": "4vTdKQyD6MMFcSpXeCxrwrqgJiWRSVZoz1UQr31W8hjUeGTwsMEegK6jRqdk9gH1xuJ3iSEMdemXDw8ZndBz4iKf",
  "key19": "LH8EnSjz2JUe3EvFN6yN5JXfMjTPaTmtTh8nE8mnYhyKSo9vmR6nxg58v8AEM5jVF31TQVzYKgSgdgQAXtEV8ew",
  "key20": "2k4bZDoofa67snzgoGBzRSDPKyttm7VQ7wsFXBx6UjSDova8M7oBEUQiSs61prgUR7vqEmbwU5AW6NVZaySH4sPT",
  "key21": "5h5gs9ZqHEkUVoc8xuL8ex9FPWCmszSQW1YNDmpBkUH1eQnQUyKZ9HmZf38HVz8uN8LUMRFAhG44wmJWwxH15iWJ",
  "key22": "2vj7DZtpQmTetRMegB2YF7yyonBVJakeG9guofEkEuXJhedMEvF5mkyUFvxzbgEZ6J8uttUvEygvAhSxqY6vCNmz",
  "key23": "4ziRZQSUj6KgKURyECiX59obHCD16hvALrrZaBzrJHUE8Tq96sARiNKqMceYUWFZ33s8nLUAWd4UQhFfzbShRoyh",
  "key24": "36Ucz3utn7PhHWdQMXx194CcoAzCu6BaYfo3pscbjZPr15Wu9TKJbv6FPSJvVTdjVBzX8AcCK6ZotyZjL1e3mCb8",
  "key25": "33EQBdNd1vuEDhcj6VuprdgVJRyZnXbpWrX5GxRzhDGbM1c8s49fWyhFDevVpJ8cy6pjQHTZJyuKbZHfXyhce7RZ",
  "key26": "5ZWANsnpPoUEv814gz4wo3JYzy6GjycAqG71ptNei6tpPbMWoe6G7pfyUeowZTqtidLcS4331z3Kx2zpPEE9HoN7",
  "key27": "4QEuwdTiNpWHTaVVRbPXNHzSytEyQxuaJby3AnUUpErr7DAHbAxwB6dyBfXY6L3s21MdNVbFYQZ7mVbRWVWsH1Es",
  "key28": "4wSW5GosW9LZaru2cWwVuXj6Q2ic283tSjiuMGbUBmZFZBh2UcvFeixebz8FLR7bJP2prwwv4W2KkX3t2U8xodum"
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
