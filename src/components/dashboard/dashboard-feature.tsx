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
    "3w7W2RPoDmL7LeWqfQxQkgFqWbPiuQ2vbYt1xgRHgWU41JbHtipTUyr5Fe3ZDdTSD6EsFHfuEGqLLnHEnuVKFwpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iPPdnoSz3jnMibZaiHT4LZSmwpmHEDTs8YnBnxfodxxxYnpPuSuNrxETwBXCXQhiMMwe1ESLnS8gwqG7gyY4mmD",
  "key1": "3r6dhbMx8Q6xhYwpXFVnd8qwbC9Ke9jb3VS36HcdbGGdUDCgiEoygn7RwDxNLXETjqWWAEu8M5akAnMfnDDciaHR",
  "key2": "5uiXjTw2S1w1ae4Y6DiR5FLa8s268WkoBsDvw2AUvRkvywvww6v2Y1RVvqi5qG85YRHQiBzWAop5YzYVNrbEqbsa",
  "key3": "2Y6f9Ra146z45wDXpbCf7aA2iufPpxPhEJ58MmCyJcXJTuS4hs8AehuzdVVnveb4uroeeVRhVepwQXAUFG8hVpn2",
  "key4": "2yoS4GTycad3oNDbLS1YUbEtAv1yJi9e7i2zyMqYXZZoD3nzkqZU2ohEzzoRMq7phq7i73QywrAQHXhqA5wFUwiW",
  "key5": "2SEJTjEZEj9P4YMRh9RkGnzHT9Lc7RiqgEsPtLCBCwk2YjUXB3eqtYZRkRRdd73Ass2v817MMXEiBrYJ7qpYP6dU",
  "key6": "3y6ZuzXF7sksz66XgWvsQqfDNXBZTTAqp8ES5JaGoCokUX2hw3SjskZWRBVhigni6Xsw7nGcomvL85Lz9VcSMitJ",
  "key7": "44QGwWkWXp4udcie4Fnr296mVJJ9UycFSr3Pia9TUEwACRrpXZYu5yk7zw5mPkjRq74G9WpVMDYULsB2KnGQLp5e",
  "key8": "5vjhYGrwxEjiUYgg1BPPE3yecgcHXxFsKgiPvQBfqKYAvcpfsGFigPj4HcXEJ87sy9WpqNpCu15LxbD7YSdJvw63",
  "key9": "5MeknttqXvpbFL4R4AEuF5ktbudzy2ZGxJrwcgrkbXV1vxP9sHzPaXGLSDjSbR29wVcayZm1jgiGsDEuGGMSw72n",
  "key10": "2NJwqoss9FcZQ9Q1Z8BV29thbbvbW2e28YqeuZTbVQFmk6ygsapg1f4wEfGiNdoEW1W67yj5va9hVKnvPSdD7a6S",
  "key11": "5wAeCQCfkB7G2uXyUXkbHRZxjiudw75Qx5owMUXFx1TbVXGYe6BWwZjhoSX1PvgAW5CzMCsPAuLbH1XTCdrFtGPj",
  "key12": "5sXE3xskQFHp7LSapPk4PeL6Kee7Gxqi1U5Nf8A1xLC5dEwvZAqcvmzeoHMFfjPXFNFSJAnbSdA4NhGNkp1ktMHU",
  "key13": "2QZXapAJzyzdsyZDo5yo2UMgqHRJ6Rz183tR1rsBhKDbQckdr2fAfGiHWPV2MTCX1LmrHcmQQSdzGxuNtVVC7ZuW",
  "key14": "Cgd8XzzTd6wuZStvudeeHHisF6uBRCYLMnqMBK1vp6ksjr2m4hUc5GbHA9G3NKtCWycS8KjwbrYmr79SPb7FCG8",
  "key15": "XyBbSVumSWuXj5C25FtK7CpzKyvz6BTbm2qzf5KZ9PG6e2kL3tdRwTEpDuZckUDp5q1aH51iSSXuCUg3ZEiRidX",
  "key16": "5GnrbUBguk139fVtfNvu4KSp5VbQCtvkdeznMT2sDLiiSQfnDU8QhxaRMHEPU185rHC9comQgbepYqUEs61BLxPg",
  "key17": "RdNUibvuDZGmae23D8q6jWdqfPPWTrCaZ5FZAaJ18sEfSc3LFmDqUG89geEfQex5JiUo2U9JzP6SppxwkpArDMi",
  "key18": "4eCagkH3i5ttoS6UjzXzGiv8RTfeNVSUQ1iUXvWXNWizb5WeAh2CwrzFZYa76tPgKNSwuk2LL8knk7iwDhUC3FRs",
  "key19": "4diyXybjrDPpjbHUDatAf3berHmEYHbVsAnqrk1eUbcFuRmDxrLG7o9cAv7H6kR2D5JJEk66U6YgfUr3nziH63rj",
  "key20": "5JUvnxZ14UdcxEcEtQzKUTiWvAb8QEHWCBmpVSGyr6Jb97NokpAU6x5TCyaQBvfhZy37KbkwZRAWiPcbuukBZoJZ",
  "key21": "zyFyMQER6CJZk3icsVtENup6UMWT5RTGdixjPzwFCZ9P1CPfVJv4DYHaDKFkr6fySGTdqibGjbxkXhyex1g9oob",
  "key22": "5ao1k37etaX9k5JbEPQDJyS82V2VH1pgCPB7bXMAozEyX4k2WYCmVSENPKoBgZ6aE86vtXovbZvGAUX18GCrJvhb",
  "key23": "3XgWURv1Uq4LGPP88XvEdyEUCpJmFp5YoDeNXy7HK4MnEEXzLe183bYh13HxXyCQU9m3U6W5fFEVbDM2YWuwQPTP",
  "key24": "2tSPB5jVbfmwi48j8tAus75eXYydpUCGzA3zD8TVHJgf1Dd88hx3oPp8g2MnG8rRHTyS9YAZaS7csn14ACC4tSMw",
  "key25": "4EA16Y5nYodHSp9Be3imGEcfk7HiiXPNTwGpmeyHsfBUV44M1hqmZ33NWNvGzTEARS8MEcEqqj8ULFZUo5LdfVo4",
  "key26": "36Uj4Z1tf5JSt1YV9nVeQNjEvHgy8dgM1EEeF42t1gTE5FjGQbwYpFtAY2CnucKDzEotaBm2964coidGAmYDpxfM",
  "key27": "4u2BsGEqEbbphtm5yzX8mKUZTckV6oJQrFhtVjRmY5NQHWYftKJXUMoDr8Ycn5rtMARtKLAgUDevkdHBMdFA72oY",
  "key28": "5rYVuiFZsD8KZr88ReFgFNHnN9LVaGGnHWKSPgZrZpFkjd9HW7ki12AFo3RYyngqGAKqck3VkJdntemvEiphxJMS",
  "key29": "3xfqEE2t3NNJZYdTfZrEJwZ3YxwNhfUBkFaCWaQ1VhUzgAgxazS56CPa9EPgvmqzKJL6VoZHj5mhgxybEBwULSpw",
  "key30": "3kVMoGrzcyprc9aoNFqX5shpmsPsJfwxDbzPQ1o2qkCjNKcd7rHE8evDHta9KUAHyUQNrhYode5HFLJsQm2L1q9z",
  "key31": "qC9SyoRrV3MyBXF3jQoCnxH3JL1JFkN7mroDjU73MauJLG745Rjz136nTCTNrn82P1hrxUcpHzQ3J5fLUcUwA5j"
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
