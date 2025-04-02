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
    "3DFffssSxxwBA1iRq6Y6qUs4QjwwzmcjBw9dq2qVTeNGmDyP8Gbtk3rchM1aw6YZsk34PLnBHYyCRwNSBxr3hNoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HgakPk35VcPkucMs9i2V3Yb4cq91sPURibtNqF8zGesjkNzdD1NEffjgD9yAxyjhk23GVUbvuvD4Pgbk5C5So1W",
  "key1": "CUkfrabKrG73FR5ux6njcq7i9QZdSrnCX1VQ8mziNotK91ERnXHvWQQzFnxpCWKzGUBiVf1YXjmTcuQMVbcYSnX",
  "key2": "3fr8Y6gKkNAfZrhxopMqM9wE79RLrQKoLs7fXeWjZjLUkPiu2rx9h2LcH25t6gNMrBQbsWRnHM1sdZ47dtZpTBC2",
  "key3": "2Q9pHiNAe92wq41HkwFupT9CXkEkZBhtAG36KZi6WJA6t17hnUj4R74yMptGY6Xxq85RWMPWE4JUWcpKKZZdEipV",
  "key4": "5K43e73toFTXLVfsRqNjxczM3UUX79od7N2b5rqna54jQEkNtvCRTSDwqzQng1AgtMfWZ8GAfLnuWf9L5yd89eWb",
  "key5": "2YuN5aZFV6KnGTQ5TM7ivSoDoYZeuDAV3EHvBMYLxLytpruP6t9hB46N5SmCoktvzcGPJ7qin8F7t8SLCtjAHRc3",
  "key6": "5Rh2MHE3cQSWFpnJ8WQhywNZp9KU9CJsB4wADEHrkfJbBfdVn3LgTtL6CRjVp5Fxs12hSd7nXJtSZb81oAVE2i2j",
  "key7": "2V7rDjL8DCe8HW7zcNAoErRrikLfxFM6yCUVpQcQgbztyVq8fh523YnVgGGELsepCX7pD9zn9KLTBGSQjonM2tMK",
  "key8": "4ivBBJ5xeh6YGEue5v8XMo4qAN1im8VVYv5sZqkkRM29BYAD9dmH7s273kVYWM8KqouPFcUXp57sLbUKZfdfgdgz",
  "key9": "3AuS3FAMbnpCwDE5SB8Pjq6sG5jzqzymXMZMoeGhjaNTJZH63tsu2a4ip2SZdUEQWCxeZrDVQZVc2wFhJTCwb5qr",
  "key10": "3EyKA6y3HR59Y43dLFKxzLTfPmzWuFzaaVW2XAGuVJryYBwEfT4wCzN1Ui6pod4vXh6fkqtMXtLG1Fik8CC9nMso",
  "key11": "2VZ6CV7o9MSui67Th1uYLGYSWxF9w7RGDHL88JS1muPfjWbJZt9Fypm4zKPWJRsrEQUMYCgeA3qXR9kkXJeDYU1k",
  "key12": "4uHjycvz44GfGi5xgQCWZs8QjQqrpL1N1gmZapGfdTE5dZjNpcBhtjEwuNiddB5nA2sdqtjBDr5qC5GKHDBuWgYw",
  "key13": "5Q5DzrLc6ydgzpESG8jfwivd7Nvh9PkPrbPQ1ABLtQdoTjhcEwhcn2Vhr6AYJcZdWTgre7nhsmFvTh3oYjZ28T4y",
  "key14": "2SZzwJL8662cbqY9StkaMGvgFPrfkqWDGAFW2RPY9qhDAwRJdbEYAWmD3fRiKy1j1dW1Q6ST4SXfPZMQmHj7KZ1K",
  "key15": "29NecWnnktTV2Y87aYSZ1NN3UAG2VuGC64ky9K12gLBArCFPHTaVXNEWfqYCzjVpdkpe9ZFZvtjCFtGvp73dupC9",
  "key16": "5pZxmQppJ6A2XJEqLeaMSRxSxLC2RuBNYr8FquxiFopisDp8Es84YVQfg7QenzGypzc9HrKg6c2WtAQY6yMJxVBd",
  "key17": "5H9Vsz3MhsomcvHGRiWa9taQLSYdLDmGEcW9ZrhrfccqwSp3WiNkmzvZWa6cGsUaVV4VSDNCsrpszqGHdbbP5BcS",
  "key18": "3477yVoQGU5r65wH2tCXyY9NvRhC9M6RuWgC5zyz6C97SLwNbTsEYJVRoQ4VdRYiggDhHNSsNYMR9C97rARqXaEz",
  "key19": "3YBpMT4m229r6WudCACbCGzmVZ83kh9iaSr4WbF1suXbWs5BDt982551asQxMSnP9gzowiYGWdiHBMLjfMStKJpx",
  "key20": "3LdKCdkQoQN1BUHg2rMqE2YopLTfZv61v72Ln8nCDAKB2iXb83KpDsmfB3iHvpcrW6DTa96vXmJhrGQvm3wesfAD",
  "key21": "CEGDU6YhgqJnred3wSiErSkB2iSSZR7iUdELBv55FEUiqoMnMLGM2FWCK3msnbyUK3b2vx31arC8dvMWn5NbaF8",
  "key22": "3FrNJ5SX9JqeKsgDdzN98KquNQjW16doCdDAaW9usNp6cHwh9kHn7KN2mxwpYydKm7JQy6Te1NjULGSABYbxYLpE",
  "key23": "zrtWdrhPj1nwcFnVGCM7hB8HZhhHrVxdAUbDxiWZDbxGeo7Z91tHxxEzknuWmp6AxEQuSsJoxKpqqoTK1kd4EXq",
  "key24": "35scFYwWHeVwWdiv1qGS5hB1FR3rvWFXy2woJLNhTVeqKtdNk2oDuA6bmQJmZ5Sb1Rm65hhLEJLuckEYZnLkFnMM",
  "key25": "5RjChw2XWDfGYzUjebHjsvBwZScbDbWAMM2TeBjvkUKQhTChc1BwyxVtU7nRViNx1rK5nKCgxFFgrPuUV8eTcrXV",
  "key26": "4hqWPXYqWodatAd4JFa46QjQwGYdVutPtomV5a1PpYnkEWPHkrKcidRZ68h19stBFyJc3Xw6XiVUZSvunncN6Gud",
  "key27": "56yHEaCpKTB3frJHbdZgcXYivXDRU9wP3LrrFeB6gE2zpEbYhgV9ZaLGhmZSuc5peoVbgC3Xodm6EP3CZZ3Gf5T7",
  "key28": "55fcaVpXBfhB4xUhfJJVUQ6rzrSNTCF12AUvayTvzBcLzauJYTWxyYc8qXTb6QVoVEah7eEBME5vrF7xRet1uoc7"
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
