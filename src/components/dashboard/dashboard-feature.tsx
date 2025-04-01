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
    "dnaXbkkeQSTtMN6URHq9gdX3QE8myTeqDXakarnXEcQ193WLVCjsASbtdntr2Fhm5ycsrM29Kp4Scriq2SjRczS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XwkWKkB9ohX2R6rAdJ8BWFzZmTB2VtSHEZJJjG79Jydx7KbBApcXRUpAJ1f6Bxb3scVg4Pz8Gxu2Nrf64igQTjb",
  "key1": "2SwbFK4cYuhC84iMk1wK81cKfCJk8dnB3fZQexfjWeVaWBDbrd876UkkzK7apqMFFk4mfnEjEiB26h71e4jpQ1ev",
  "key2": "3WTFEMxo2hqy7AyZWnGEz434WxKZknbgxNZedLhRTzHjtkq1U5ErCTjP6FhWH6i5bXpd2BKMiWJMnhC6BDUzKGHX",
  "key3": "5UrxGhgukgRoPytcC6w8i5d3qGJBBT1Ud6cR2mCdZ9iqxigefrBqEX9WszvzgugHR9cknHFYVTnaUuCY9VEM2wFY",
  "key4": "B5vGcjNhqKaBKuQDz8qXF1iuaZsKgmhMpWav7A4BMdfKWvMAFqPGngvrPPwhRvNQ25LxsNFwhnMiauw2Wzbq3ej",
  "key5": "V8nktZAKAT2Liwm6jsZWaCngLNib2r3tMKJwTF4AQpFCdjeF91dtiGLEiTGbAxfSad8VJvetaet4ZLnEST8Yqi3",
  "key6": "4hafS9yrbCHQqE996eaJA82serc9D2bqWSrYxy111bLyC5SoPGzdsYHyJJwDMpDTZEx9MTvBZvwtqbyyTY6ijS1s",
  "key7": "35gCtSHgWiL8PZ8azmtyYkNgq35Z33maWyxqVwD4tsJCPqfMXdZG6beamvbeQa2zivfbSqgcx2FSDqHMkqzFfibd",
  "key8": "4CvSZSZEfGw6ZEeVfZ7qfUiZFUPE7aeSg8trRv84GAT9Am4aKjNXzFsmcB2BFkR51uQFBd9zpd8JEhRtyDTUPjP5",
  "key9": "53rhbavkjPfwAcPkybxMBrnLuUYFBVyTr63qqe4cZCG9BYxGKozRriPuZZ9GFzjpZLtdtG2hJz425AQjj6h8BpcR",
  "key10": "4A5KVg27PVdKU3hxwgyD28nmdQAyh12qDHuZf9rSz6zxoRcsG5gXndkkUd6n3GwFyAW5veVuMwLWMBxMgWwwzhpR",
  "key11": "24LUAS39uQZByspWwc6rJ9McUEmt3p9sYZGDT6R8SMRr4j3K717CHncvfLkWWQjntJ4ZrkrVP9SaGCrgYL5emLQZ",
  "key12": "2bNiXxhJ37pAU8rs6WemSfiBCjXNoCexxP6Y3HtjkemA3BGe12PkcyvEVQD5ngCjv7qxd3jUyMTfeCgnvZBarEYe",
  "key13": "4yfQ7meCsuohUtXvFwCR3ooD8B4WAGFLv5pfMdH5dN4yGzSC5BTbth1QqHNunFueoMi3coeDLHKe3grDKHuaw1je",
  "key14": "54mFLXMsWUn63nPm5d9PCwS4atG41GDjn3PtTtUhSX8do3jmrBxpF5CpkbJDyL9bh86sonYyUvctXwh7DY5eygSF",
  "key15": "y257oT4ystNkzfNj2FhKPRgh7vYK2RycqMRvYzLTYzHqTWnp9WeUV9XLxKMNGvS1zASZMw44cUBesgtmTMmofuu",
  "key16": "47rattynkEHFxE9UafR3we5qLR6vvgm6cTHpZzDbSnj1GXnXwYCesBf6f3beMME4mTfLWrnDE4PGkLj74qW4KfKC",
  "key17": "66aeKsaabXfxQzyppGMj3425NJXaYzSJsDQYhFohDoufptHZ7AEp2pM9Qj2towtUqDekRkSLxj2jFJ3Fybmg363",
  "key18": "51HsJYjwALxmB9yws9YFEyaz792p7K2E7QtffP6Aw8SY2FSq3Yf1HfZXBEqqSzJ1xARxpsaVwfr6U3ewKVmAHNMD",
  "key19": "5waFhXkgaxPo6mgGuH3s4XNG1LTCXxFWKDKUwaMXprEL6Zz238Qzep2JmZHx5zrdXndBqkM5QPodoTpJ6eZHbDvU",
  "key20": "hUPYxLo1gMCE9cFvNb1Sqdj7BKhW7CQ9atMjT3SBHXjFFKGYH75gvtG5JyXkbxy3Qr8pRkJGBFjpYLUgA3m8LjM",
  "key21": "2axSQagLTieHDM8orWSa5myvs95twWJ3dYjXtBL6Vh4GRMTacHiezZonHBt6ra6iPMjFfVh25YVvcZ4uuuPqPeen",
  "key22": "2CrNmy4rC3p9FbA21JU6VFMQCBKpVj8y2q8WnDofZG6frdohJXLe5NCWaCGwBmbaor2yUWsAhALCRAYjuda6U36a",
  "key23": "3iC2xTST9iMQcmnQZtpvj2xYfop8kpNk5Ng4M9RkQUP8wZ3RuPdjsQZYM2jX29vZYEd3sjZZDQD1TiDErtx8ms6Y",
  "key24": "4pPHb23cajVtiQAddSh9TrbfJtRoSsFVALynHjgzY7kiGEDX6Rruqp8tujcvwCJm1RZ6wGEZygRv5eu6Cw2wYGSP",
  "key25": "tJY7wMhVtWrhfGbhik1msMUhceVQgHeFsH7rJhwiXoCV14WfAHpcXsYoyfiPecENzeBjG8g6Fezx9Y9YzcuXpH5",
  "key26": "5NiKWwiZUahgXJv49BuUkqeYwafFARZz4huGhLbc7mkvgbx5Xg4LJ5cZL83evz31Y7kiwiMUiTQ3V7ofmD1se5Eq",
  "key27": "5a57niqr1QTKeLvCpbqsQkUJbDVKahrAtFEQiajCjhNgEwaD1JHqm7gjdGChn4tNv8brzVEwKSV9ArhUBL6GgvCE",
  "key28": "2xKsNuWAhiYAnQXsEjJnREJ3zcAYZZCWKksJ2q6pK3JZmKinynMrZr14qT9dwS9HKEm2Ngdfh9qgiHwqEqiQdyws",
  "key29": "2GPWfZo2rYTAAmR2RbgNNZesr83YSqvNzXTzkNanVPEMkoL7F1KHtu9hjQFkgutac1d94jNPwMvSXD2aNzhBw4PC",
  "key30": "22Ard8Yivy2KbuVjQsnCaqfRZwYT4JvUQbjVvCeKbboNdnpWPHCA72uj4bREDJ7VhtFrXrnyAy2CxozdoJfjKFtC",
  "key31": "3fJrRXnXDyi9ECjbcZoxeqUDSpbvNoCj6Bcx8F52B32TDnMBPDY6yM9rwUBmktTSbqo2oiFDYok77jdG2PnEg6Zc",
  "key32": "48zQzzzNC6DYkGZnVg9VLx1FduX6FxWCpQroPicA5SDacNaQKtfjbGx55tCtt4WR1yUKp2G65r918ht2HfHxPffP",
  "key33": "j5QgN5EFf9DZ15Eiszv4HhTcoiots9wGp3cWQ8LDWxy8PXGrZokfkpPYkdccSGJEggqUwxLR53geMaTmQ34D4dm"
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
