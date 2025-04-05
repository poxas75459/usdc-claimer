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
    "4oy22g8YVNbx4HpxnBs3sPAzbv6BSVPWnATX3wqAeabixRTwjCZmQf2JRKT3CUnieSCQvUaVkMdnxHeoLZArJQt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vposGTip9rn84c5pMsA781pVG4WYCMUmFsmtZgZ8zFGG4UptV8TvYC6fLMqHHZgwNJ9HKszb5EtPvExYAP9MSry",
  "key1": "JWKsNgJ5R62GJoZZMaASYkxnQMf3oQZfw938MyRX4Z2RTZ7MwgKkEQxHEXNTmAAcxV2Hx2c21GYhJ8mJrQ1B1Jd",
  "key2": "2Rup9ShLk7uoxzMzXTB1HJmFev4YT7DFetR4KuGVSAndRFUUeYY6R77UnLxF9RenML1TKkBGYLCHJdZ7yJBrbaVM",
  "key3": "NPUiSgGXr3rp8Am1iiAKmf9m6LD58DxRJNP3BeVFNCi4Qz8DNasektfbege5XvgrMNnVneYHTGJvVZUZqgPYdRj",
  "key4": "3vGhZGeUFw2dCoasmK7oKacMNXRMUbdMYzZapufprndQxZve4feyJvM1wjUMPoquikL6nHyGwu1gkuHJgSgaiB9N",
  "key5": "65kiRCT27MEq7HcAb3WNBfNjk36CcaUE9ssLxtgjHHVZqNu7ThHTZ49TQJE1CE8wsN4r6LtpH7A23MsnuPcf2fBV",
  "key6": "24NEFJha8MqvDQzbeDjhxf9nqMs6iUS7GDWwvWBvmEdUa3sg2jEGpNbJKcrxahJoC6T8BqV2yCHvi1JCBDsRVk9J",
  "key7": "5piHjo1579S7bGJXm3yKJu9t7PTPQobop7sJNm8ihdH9PgZJfYnHt7x3TsnGcfTmR1UxT4hV7qUYUBhDjHwmg7Z1",
  "key8": "4DQwjo9igGH4RUKN7bBUpDVYPwPBcFHnWFtmRz5ipkfyTv5r11Y1YizLLP9hFGrEqX5fmiRcuaMcZ7n5Mn3qSPCS",
  "key9": "fS9t8dLFHk6Hws56pFimEZVpFNxEJxEfhYWCWxt74pF8Urh4NSH7nAk9Y1Vcjqxnm7AaZbHc7AAgcRZbsAFQqin",
  "key10": "39Qzp7kADt7rghsTbqKG5DYNR45ErxDJ9iW9JshtxpdtwbJgirTEe1FQftyA5Q5B7yntgFKbk1BBoqE9pAKFRwd6",
  "key11": "5xtSPafASCE7AhwkdAzXKkP6eUvwU36Zx9XP1jBq8LKqBuXxqk6Z5tjgTDDTh8TrtEYxkSKeWPqWKZmaojgN6C9W",
  "key12": "sQgtrUFGoDR47jp2Lx6kFNRB1CaSWri6sqg2xy5d2SGbckxGRv5pLQ4CHtDqDDRxxQidj1GrkvpK23fdoRDzZvV",
  "key13": "3TgYc4yoYU588o8usVgt52WYU6QzVs1PQuo7eFWXo5zSKm8Lr2QVbobfjmDZFn5278PdFRUi3VtzTomUUezcghJN",
  "key14": "4z5UQYWGdxUyGih8N9VuoVmUdQvScu1HdwwmVsVjE2aePgKmudnihtkDwnszF1Ndjb38PqeQMBHVkyaoWgj9PnPP",
  "key15": "3QJvQmYvaGaAwp7Mcty4tfwSVSo9QLVA5Lf1vCRhe1cjVNRFFwxCY79wjXPm6MNyx8YmrUBmBmVYXJpoXsvXfTjN",
  "key16": "65e4gTcU8Ye2JqVbepv9YQHmrTJG5rK5MyEtUhNoW1vveBpt1eUjB6GrLxW7EawNafwvab9M3dqdTWozDvhRNckh",
  "key17": "64cwMUUeGsVt5sqmHR3QK7XpEs7CpQswN68BBetnMufgJcPZYBLLxAe1GYy2DA6X5GfeZQgUB7BgMQW7j7p7oaQu",
  "key18": "3BaBzyecgBTKX2wntTMn1Zq529V6pcuzyT3Ln7oo1M3X3pwNhQkKv2AGJU75wG8t8XkUGfKb8b7SsEQE2DfEj61o",
  "key19": "4jXy5g5UJ6tw2ysAevx6EBTWi8qZ4WN76ZqMfP68gYGpXG7txg48K2cwGTqodFKwSpXkGZ5PwZ6U8SZVXbABnaVW",
  "key20": "2ChEmPHL8YDX6nMNLu5629cxK94UAnjVnyYkw8Vy5eXLAVUVTeUqUMrHyknECtDWWNRiY6ANogFWBwzDpMTdTauJ",
  "key21": "3Y83mSZFmyo1NZqc5Gc6oHmkptMsEeCbdFz76oU7rF4DjwFcf7APwC9x5b2Zig5MaMZZfhjG8EFJPM7ywByfF4q",
  "key22": "3aXFERULV1w8Aw5V7voYzD99qAZkxLz7Cn6jGfX6E56BoeFwnC2DQWvqLiTAZhKzTtXTrUe3NoyEqRW7SjDt6PBi",
  "key23": "62mV3At3gYVxXXj1sFZ13XnQB71k3GsHAKJNBUNwkuUoWBzRPBebGzP95xJC1BzXRMrRP7GRsa6wMf4qKEKxHCXr",
  "key24": "3joqn2qik5Qam8atnwBo9T4dvZZro9haHmdoncocBSotJEqdrEGQyHZPt6YZhqkkKpq8fEALNkNgqxh9iUCLL2pW",
  "key25": "5j3YRCDZDWVw2u36QfaAJanUWBERt5BTtkGtEwS5oJB8dagUwWA49MwLmsVDL7aiFkukLP1NAvXCcNKc5i28YNiX",
  "key26": "4kxMu1TwqJ7F2kd45gRPThrjy4tbtUCoeb6KaVp3YgtByz2GtmgQen9itUKi2uSFUB5L6KpHuL8J43iM2zfrfERs"
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
