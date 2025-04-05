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
    "mquLfmaMUQWyVDqE8H8aAk76XndMX4edkqUNZxTQuahhoLAJ9vLq345DAsmiPFHLwLgBxr46ATKy1kaWgGjjU6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XBeWyh4dskciunGjntkgdz9XayHb6mzAn2J8kYdhUPerps8Kum4EspBZ9u3pFhy8drrUAxhTmtgK2Q8wEWrk54y",
  "key1": "wW8XP8vySDQYACjgALDvU7SZvtqEFhHNzTvPu4oUjeY1RgGoThq21Supm7XywAb3fwdKLxS4vT9xNpejG2x2ZTW",
  "key2": "4MrVZXyjH7zdnErra4zNZuQDC5VnFbi5hFJMpdWGnyeyQrqf2vwZe8dBiRyNfN6ACghBp8YgiiSRedqQ8JGJsDg",
  "key3": "2ryyhuZRLKfsRGrKp5NhoE4t1WwLdyLui4GojcTnyzmRittnVkmgCF5xFDKXAydx6f8zSxhqXttqZXfJWUngkJJs",
  "key4": "3LAK5vZnmgL3YpfHHoPNgK44YbAdi7ctZpLgiueuGHcYgnbfBTAXyVFi4up93zkKDNLDXWP9qgJNcddEGGe9Zwiu",
  "key5": "3TcXFVoL99VE3hkeQqKS9N3gj6TXqDi2tERPN8x9Gwh8hFSJBYfgRtuHMeHWVd9V6EFWYU1h4qubHcwf5anmq3mf",
  "key6": "2dB8CNCLBNyb4hzRVEtPNYLp5e6VCVat1HAjpbQLZYYQAMbCuhtgZPYnUDZZ5xCVte6e6YUCb6HYHx3zGENcxxmA",
  "key7": "2CvfyiCpAnpwD8Z7f35Yi9EwvzewEgZeyfCsWJqnVPMVRZJEpAKN97WuiswhtoDqQbzE1CrfnbkwrV4TXoqZ9AcD",
  "key8": "3JyZ7yWLqkWTLYTvsWLD9UZULq9WujvNac43zbqU5rZiWp9eDDScGCQFSoWXuUh8qYqoaANskM2W4og2Y4WyKVhj",
  "key9": "55VBkWi4yw91u5zMChqnBL7DVgXE5aem8WGJnzCkPjpqXG1YsTN6qWjyFsfon2WfdTM9ni3YTV9kepgGu87hFJJZ",
  "key10": "5RZJ8jPdjxxahHKnaDrWznatjCmypBGvQyJuy4MDF8SGHZnw8sBPFHFBrrfyjjcVrEqhcyfVv2ogbaQ5ZgUk7kAc",
  "key11": "2PPnSYoU7XBzpyu81d6nvUaKt2LDVNBWxN54BXuMz841UP1hKRZapytjxhN9fWtzPcPRVaKKT7hk6eAT2NzbeSJN",
  "key12": "42pqykcUNGgX9oHwn7R7N13VbCdeSUiFUWG3fTZECy65BDG1cuaCpqo9gfpT3ydKa8a69pQ1zi5XrkFash5wx68",
  "key13": "dhUEiiFXpuisBS5gt5wX4LVAMP9BsZ49s8RS5wNvNPZxNQ7x827yRg6MZNe1BJ7uMtZ3ft3W59rV1CwVu3JQ83Y",
  "key14": "4JBajyB57NbiumKgSydo6bM6e2BGDcDvsn6aVH2RZe6F8BE8ckMUBLsAHo2ujtMac7yB28dpAvVSx1edSFePMYra",
  "key15": "5UC9NbzAwHRbjTm6XanwFQNymqhydxv7p9pc4GCqXU5XJJ5xncWqajwAkik1AZ2My5zjC1rLxR1PLCjzHW167fvb",
  "key16": "4L8gHX4VVdhqzvbZuRiDCbTvidRCxxK3ypB4hrMt2TjgBw3bW2WBzrzcWXgyiVYF9sG37yQFpWTG5MsukhQB1KRN",
  "key17": "4ehS2HtHeh45pAWtAH6PqGx2uC8j3FvAofYPxiQhtCNrPqpMjEwSsZY1J6RQnGZbw1TG5ZEJKawcRLJe9HorE76T",
  "key18": "2EFxwWGXXWZF8EBEDw93euhGVJF4qWQZkaXfsQ8Bw9NkXYg2uXsZDSMXjW5ZGMWkaEPC9eBmz4FfW1QTDFnnfgWU",
  "key19": "3WpJcfUZLBfY1rPcKUMQ8TYUGAdaTv48cX7dfJpYT35tJmqxB5KXciFmdCGSgdce6P9wyEM3AG1nYns6a2iBeXvB",
  "key20": "4jcBQJQWjBUVGp4YroQfZTw7u4YLbSRFAus8srL18HxQYJE9CQz1DeokGY2VFhAfHBZuZquvWiPh61kQKgxj85A",
  "key21": "3wFSE17Jsvd9h8XcFWrNCfZ9VZFAC7DkDwAroinF8vdumFBTCVyp8YC1BTqSH8yQ2trJviahXMXQJSANES9gxj1U",
  "key22": "2LPidaVRgdbJjDk1nFt51cHF8froYqXEz5pmUJwXvBH7jYZXMhdJ5d8C49CjEWMfukEaSGK41saCjHWV8nYfdR4K",
  "key23": "5XmLWrYYjPwrCYT1dS1EUVqiDPG5oCDUVeDpSWTVf8GL1gbZfhJGN38LCkNS6XHbZgWoQTFDCSPPhPFwpG77gPxc",
  "key24": "42oNauwDmueuZxVKNrMKJRLFszursDxTzUF48qM7JbppGpeNtN1jED5p7p41qZuCXfLd8mmpT87vTkQSvkpKuu5T",
  "key25": "52Zu4W86uXVVGCvyYMAYCUQ6yxWeujhcEF48yFgb73vi4M2Qr1PUbjxMGr15cK3GYrdpwD7axy9nRur2XaCpUavS",
  "key26": "5nrs45MY2LpM7CEtfVxgAwVgitqvmGoxaVrWcdKNcxCjgV8osYKWyNozb3FeWm6ajnyVdvitRADqdXUGupLchavu",
  "key27": "2ULUKJ9yUkFm2ds5Xf4sDD4g7WwdyjBCgAbs8rtiV3KP96XVmcvZJddNzybVcyGWzH696PDmBiXQcz6hi9PHHDSC",
  "key28": "4ULTicYJbsWtzzNCjFN5rZ7coXBpUCqYdDZhFxH1btdWR22RaHX5skQfwLviPFZMMCErZSAf9dAhjHtH72K7ygXm",
  "key29": "3tcfJaktgQrUfx5M7JyFwXuucgJXz8m5wJxRg2D5Mh2CDTegVaAMfurmyrGp9qmMymNRjGEBveSAs18dYtWVnLks",
  "key30": "3Z5Zw7qAZTbWMLbvDR16WmyLoVYmTFzoRsGTws1ewFwG99McAi7y3sHUxpWdhw49nmEyPfgPZUa8EKPUnGG5Z1to",
  "key31": "5j8WxWSvf4K3LdHWSZutUQzumrKcZLuJumNYtFFerFUZdCCJfiNjVaQ44dGW4gzHX6NfJiGuQfbgC3camYyh2tGN"
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
