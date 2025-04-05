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
    "5WTaWn5Goq8T2GFtjwwyiPn2bvfr95V8hUzHn7ZB6VNLe7AEDAwpm8AQKMDQKVGqTQWSQpD32suQUGtXvyEZQVPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bUowoLDUSfXhxgUkfUsvGYMt1X6rBF1mw5uRkXy2ya6jP9Lvx1a8LjuVQNUsKzz73zpHPJTm1hbhJy5Y3mKY5tF",
  "key1": "36JALKm7sLhfbTpcoAN7twCMHuy1ui7ebd83g1mRLs1UCL4LupqG72Hoo7ypvWfx56vhYJqpRWTSQE1wmoF7K1Kc",
  "key2": "9beUAdKf81Qhwhggd6PAm4Jj8PePwxpV34wVDXqEHgtpY6yDJu2Vci1Wm3VERv8nX6maS6o8SVXPY85sgKN67St",
  "key3": "4AMuJ4WUhSj3uCLC7v6q8HaW2KtgGskAFC3mLvJEpN2CVrkuJfiqUxe7TBBm3Kqw2cTSK6TtGQnAqPkPcCZErone",
  "key4": "2N2DLDq5o9xAAWhhcm3JoaYnhRYyMSo5YCNMZYxDA9oghD83eXZVZC6chSvCzWTqQPKJY5aJCHZFYkDW416JczRk",
  "key5": "3e1i9SuRzpF7RdxeKTLCKAhqxs7cqreRLeixUSRxbtQYGbGZcAt7C6FzwVudF7RWL1mYp8Bktm7KKNZiwiPbXe9Z",
  "key6": "2Sb9uchGh7UXcwJpoqza7Jc328HDnDKjGTBATPq2e9BhF9LtFrJeT8HwHorCNriQdFz4gTQyqpxRFzaVne2k57pw",
  "key7": "23q6zfVrvy9iTB4YXYsBcE4zU6gzADHKBH58C6m5XvXhXgnEQbEEkmhkpJYH7NEeJvz64QoGkNxnGoutFaniL66x",
  "key8": "2uKtSfZodTeHmoc7nrdddS7stQJyAsdkDymeP2DTSFqGZZyVcxFwiN5gqQtH2ikrGyNCDfHJBHCBFsVTNBHhNXUY",
  "key9": "5Rs9BokrvtWNZAewguQiTfhmJc7DwtKmvdix8gfJA4ZhTRnei8LkMWVhLo16Rr5fZf8qBjNetDFRWhih2rCGFxjr",
  "key10": "3TgNGPBMLoQPRMEMPVR5GWV6kfasDMMsqX3dQCCJGEj3xHovPrxZW91Lj3RSVgymZ8KVLqG5YhguDJarxb4fPSW1",
  "key11": "kr6Af6GbnHxQSwGMcBPpsZfcgDHZ35ircBTLAdqBBvFEKw3VVFqL9Uipbvys6r91d8W7DMR9fhrY1u3qG1MdrHH",
  "key12": "5WX4DQvJCCo852NZkZj8pXcZYz3ohfkVjq54fJ92k2wh9bXqtWuDFioAbyHKvDHpqvTxnA9mL8z8m2kbsucUuq9G",
  "key13": "26kd24gzwJmhiEDHt6E1VhrbamThhKq2j46DsgUxEtgWdGPhvTUniMhGrUUBUbU9zw8FT3oWJgS7iekza3MMAXNb",
  "key14": "4DairUTxce5qnVETHxak4nDUxuoyn9mTEF93SSWiwFbtfv8FEuDLz4hvuphuNc3miQ5jrd8zMbvKpiuTu1L5EFei",
  "key15": "4FLkidNhGFkZrgXTUZp5qRCqWbDTHT88dAjYY9id2uHC3qerornEM1PDAK1BZULmVg1oC1T3Dg6kzawpJZtXS98C",
  "key16": "3sWieENBm6KPaL83Su2zpVdUYR6GLC8WcJQtYNZ1wpyQGH8LWkYAV1KbVsjRR7CkqPt8FyxBaTMW9fNgAU1iVQtT",
  "key17": "5n6gm9VmMNp9A5oCW9nqZ8e6ibpswJgU5m2D3QHrStNtBkxY3HsvnZV7zsNuNj3xgkwPEhZ8ZwWx9huRMKfYnso1",
  "key18": "381sVWXcAEEXaSnkCgDhaptmV7gfnPLXegdtMzJUznbJfRS3GQMkS4WrXqWqnUh36bCTjpWZq2t2ZJBfXm23HuoB",
  "key19": "5TjuqsFJKA9kBm3dNRykNH1XpobTeDYgY73ZENiG2D3PJfoG61CadgCUoFhHQyATqjwJZm13jydQXnE9njdojsiA",
  "key20": "4SeoaTEWT8PsTNncmLbmsX7xgZqvsmZMAbGWWCDgPz9VgXkbak6NZR3iAZAeKpDtDBa9X2QbwaPHXbZD8UezjqFq",
  "key21": "5Mz64k3XWWp9brZ3iDKdgdzHD6Y2zStjSqSVAFLzj84uBkTyrKLiyCZWGfaDTJVPSvqbpusCsZXNerUSDCjJzyK9",
  "key22": "5tSJP4kTjBGZpauVfczz2TV7j27andz4zQiiPgBYgSwugT3i6CQAZio3CwyuYYuapBf3thYEqwoBaa3w3aCgAGHM",
  "key23": "oHk9khnkbH3fhqJKXfJS3opHDA749yGWHceqv48h2WcEuN9oBqYRuQcBzVcQbzvwsgDHcZhHcSykFzyo9fUBGaR",
  "key24": "2aYiNN7TM2xJ7FsaUatQumxcPWQiUfQBsoNAuyb7HVLj8xktozCKq9UdLW2vvM2rvBCQ61jVtR6FspBN6mThWoi",
  "key25": "3Gd2kXDTRs6jXwEbHMw7krvBBKqvMWSVk1nogZnUKhVD7Kb1SBmb37TbdbttduYGyh1BeeoWHW3p7AmHFZG9EYbD",
  "key26": "3m2c3yaexKH1mG27pqnXNXbNX69ctgA5BGp7kZPLqQoJHSs3pjsbjFDfZ71t29BqJoUch5BCa37DUk7QjK1Cjumt",
  "key27": "3Fj4qXkwaJ8kEPmquh2mZEUCmQ9ovLYbz7ahgPd3cjzu1vu7LCwbHMCdPoHpkbtZuaEKTfEaJtwVosHgX8T7HSbc",
  "key28": "55fWP1jYKX9bDiTxhtrxHE6ao7FxPPdTpEDwfrP9eWwHwwPYQsBdvQwgZfkxoXbT5S84jdKEi4EPzsJWNyH4vQUK",
  "key29": "4dJhGYuRJ5XpCnMSL1VdwDJ49wHH4bfciJt14ARb1mx11RNp98Q5xyZhUNspxgWFXvdVuKKp6Fca8yhNAvNUMwE3",
  "key30": "bdQGQfot3dx4D3L6nezHUGJmrENnFbivNun62Amz8CvVnq6dSUP8y6kTPimY7YpGKM29Vhe2rgs3vBECXQmiXKz",
  "key31": "5uHBp5sVhcN8o5fet7tvhyYiZuY5ucAzLECgAX6xdmxt2vvtG1crue3JHVXXsuyJ1jbZkyQAmf79DLnAvknADp6D",
  "key32": "4h7dWhbdt4eD3tdRbrjZCw3qGbiXoKDdF1rWNmMZwuc1N4Td2DDU7xUFoDj4syBKMfxoCZZ2Boiimtc4jpGgcVdv",
  "key33": "3bmedMVRqt4fuN3X8gJazV4Zy7g8TVJ9NAesJyYZFuSEjcQr847cBJBnGLZTZ6RUxo8fGCpwA39cadd4DniZsTGJ",
  "key34": "5GK5wLPB3iWd9n9FZPcs61ZzRgTqLWYszNn8Ah2MooyyTW3eDCsqPUFxtFesSsSJiVaPz9htkEWmtCp3BMSWGQiR",
  "key35": "3xVtdjsTCQparSuEcZVPFmgLs6oP5KxsPRFPJecoyVNduZCa4nGgTfuJTcR4yZC1VqxF1mmz1smyA2BZGDbAfWdk",
  "key36": "22WBzVuDeaKbLjDXohVyD29Hdv9D2SB4VbSn6ph3dpz2dWYxzpngP6UQHBuCJRJBJ3FPzj9sfE31Btf9ynApG7uB",
  "key37": "e6SC26JMxFbatjL4tu9HfW5zieiibya4tkqe2CEV55x3dqXePbmQ98srHuEWoYJN9fQqJt6q92j7SV1bsSrcQ5H",
  "key38": "4JkarSbQKKAsYWdS4exLsjoCTBdLNX7rUWwurypuThNjcPXKrsN1Pd5j8LoneiNzyyRWAUVtNtARm9hBQ3WWGPdn",
  "key39": "2rxsUhpHKMaQhRYtMezpbLdnqx9xo75hMnj1TpSmeresVoNoNuYPPhPrKW3tAjj84aPt7DKcBqtxepG3vGyh3JNi",
  "key40": "5g871NBYWP7E9MkuVdBAhSKZ7axRMcChi2RAM9sNfsac4Pubq9Vhd8xgi27avWVhHM8ZRgYSuGDy8X76KkyGaX37",
  "key41": "2udepZWbkbWcUn2Vz7eDRdT6PjUhNYuKD9Q6E4DKwUas3H3yUtVougxmC1hrzdNPq4jYRfUsAUGRq4rFMMC7ouBp"
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
