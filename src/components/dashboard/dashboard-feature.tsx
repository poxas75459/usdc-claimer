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
    "5kA7Za5QY4DAEqbWVPaAeRiH4KTfnhMYiXAcdF7Wf4YwhreiamxwF65TVDJb3f1EGDeCX1nPuzdUWETc5RLGivry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cF6M4JW3wWqBVumn1wxKQ9nAEeEyGsBnaR6V8ruk2U4No7NMCTomQFKdxUaQxKLJeXDSFu1d6bdFMjVDBoJiPvd",
  "key1": "5E2woSwXSCXaAYnAEFMCAcPBPgJX3wacT8NrgLQavnq5VewE7ZVnYW1ELYqYvxuuoy4qQ42fnMRQZE8BASRsz16f",
  "key2": "qFF43Tj5bK6Yc3k9mZNDtPk9mUNWmN5pfwDUJBYTdyGa7712nJnLg2Y3XrrDmi8b6zvTxwTFCyYK3d9FjChyLk5",
  "key3": "5rppBQ3yoEN9KHgyj6gutfj2uC111WwRFH6ANfeqwYdZ23FSQrw6QbbSEwUygdheH7ymECoZsuqazzi8pKmMo3Hs",
  "key4": "4x8njG5y7dPvaHB9D2mqskwBYNzTa2SEqZ1pmw1fZ1bFcdXeLf1erer26WatFuqp9FD3g5DWtNM8eHmVKao6wESz",
  "key5": "8BEGKowNLKeP5yx54gUrfbZzMJmW4nziXUviGBAef7QGyjDVcFwA2d3vDjPTc7vs83UNssdYka4G5hAb3inuVxt",
  "key6": "2q6F4Pn8QN6B8JUzmvt2hRYBNZqS2FGvUK9SAgjpAcgMMvtcCMpmti4W3Sati1zk87Np6hBwaLfLzisUAofT7nrS",
  "key7": "aaksCX9zuAvjpCBcgvc6zCCR5c4re6f1SLjYmBX7rYV4whYxBRSDWza8WNeiZqBGAnX4CLrckRgEW1BDFbKANJV",
  "key8": "65EvL5oyJTTJWHJ8UUp1Ho7eTTTvdmN9DRY3N8CPLaDuradLFY3rwx2dpxaNcSLVpu7DxSTQ5uFL1YMEJzm49Meu",
  "key9": "5eiJGmDp5f7woPgqP27XMVNP7L6WoUw9qoeBddsnVeAT4AfQ5X8m5nqMtbrs4Ts8A8smW7esemncw8qUKrj8miXK",
  "key10": "2xKc4GHFzAizRxFxL8nLaVAacczQ7HY9Fpb4mkSMrWh1chqBZwZ2bp9bY9oCDdzUbczs79n83fcZtGLUq8Y8omsP",
  "key11": "Ygjhmo1MJzyvRqRjLM3zhga8JHUrUBMbwL3FuoNUrktpaaaRtsfHjo9WxCCp5e7aMrWe3gJqRFcDCtnoZKvKdTb",
  "key12": "kSJYs86kvQLpqp484Npbiiyun5XdVFCpx2fPckaopsq4cH626om5QvWH6UJmrPix2DFDPkTjKQn36kARrNUUtws",
  "key13": "5LSD9wjG32sVHvNC9DY4PQuZH9eBu9TYmYZMQ5H9BdDzLXb9n3HBTqaeZkvtmwvLP6MumZA5gwJH22G7heukwfWe",
  "key14": "46a9itw7Ha3kW7CmzbBGS6Xopr7dWSg4s5mpFokgogSM32thko6RrCyg1b6Y9JkamMH1CHuPEqsKNwzEKj3kQEzG",
  "key15": "3jA9GsCuWmvNfwbeYuyJ1BAtYE8jwN3ChnC2bWpKpRhGXcjjN3g9e1MXpBemGDyGDQLeizr6TwhFZg4EqFBwGGFa",
  "key16": "3ZRkG4aYRC4H6oyFE4CSmYaxd7hMgQSEqCE96pfmiK6NgtRMxs4mbax8aCuccjnEcK8R4dQgjjtZKQT2YtGdS2iD",
  "key17": "25PuRYqHVrtV3rfou1dCxFobjpdAmUtgfrM29smPmyFRxNoDYmWdJ8yVRz7R2Gz9EK7PRonbst5RWhvUhb9CemSg",
  "key18": "3UFDpgkeUEisS6zW1Yyhk7QsB1iGjZVNDFXentpaFNrFkXeYEJRdbzEjpTUoesqA6ubAkNPYya2hMPpessEEQFXX",
  "key19": "4s1zfpFpXmR6QAGaP9fkFp1wZFy7HqUAVVLzMmydpC3r6tu7qAzDdsiXmXA4ZZDiia6Au32Vig2qMA3XvcPrwtPK",
  "key20": "3Fm8evwJJdEgJ9F8eQwazmFqfXjJz3KNAaQvtcGE9SHbdFLQAVxGgpi4QVKJ5veBmXw75DjN48jk4i1W9cHosM9q",
  "key21": "3FFrF2RdVXwvPobhaSJyzEoesX8PWM29xMY5wGGcVHvbtkMuekVNaQvbmJTLbii67BGEZKa4uNzfhcsmcnxzpiAy",
  "key22": "62ahp1tGMTRaEb3KovyqNSzKKmrex3qofWopBUWXnz21NNd7NmzzgQjR1aA6ZpKvYzwgQJGvC4fgLe6yonQLve4f",
  "key23": "3KK6JXy1FpAMXUgkjN3Zf3fnd8qrM7MQJrV6zVyz7pQBpmnZmq1D14ZmZ1Y7BbmbWpXjccrrFCQdGA3vWgD2m7Z6",
  "key24": "4g7Q3gFLxAvzdzRLG4mk1R79z1Y2eLdjw49yKq8G6xjDvUCRVr6CaVxK5sXLtGAtdbcnaKog2wFBPWxcBukE5nQq",
  "key25": "5nwnpZACdK5uW2rJsXYqzCiCRkRCz3dSBES6etpvXAJby5SZAfMiUDexSW9jXhQhtZQrcdiVJDHdeLYF28cUE2dZ",
  "key26": "5dkRq4d2zRjBc77TyM8FjuzGQpjNDhvTTe9cUAY76Jsg72JkP4bAnvzvXh6JhnMX7XYN3xntH1557gCbRKFN1JsP",
  "key27": "3ekhCyKVr5zu9Aqtmobq81Qbp1Q3fgeFW6X3Xyv6Lr8NqKu3wS4UhaUWABz6GspC3yQL3GRJ4Gr8rPxVikPqVai5",
  "key28": "51ZqPVFStA6fFZcWZPi5ySjpCeqia9A76xNNh9WZ3kbwgmPNV4nuZRusT63WuxmsKfhDRvdTwKvugG4Wj7nMGp4U",
  "key29": "4Y31ASuKcKH3yQ18kY1EEdXKQxyX2Yphqr5qdwkGnZWWn32eLNjCDENRUcW5B837DcEXQZ87hFPNdehVkVJ5Jqf6",
  "key30": "548YSxj3u7p5TZ6GFmLr69pE9MVccYxBnMF2WVAvjsJVuvvEPu6jhvazJ5SssVg32duoA2BE8TMRLn3n25FPKXsx",
  "key31": "DMH49g7mNY2JFZssdb8LFQXM63YmX5Qdc9qCphFsd28CDER8RWHHfZGzDbiCZXdGuWfUVuiiVJdEtbeBnk9dNEX",
  "key32": "c2sz7uK2omyPKKU9fFLo1972DzZP4BV97DEkfcWmnK6PHxeZ1W2HYR4KS6SG7ooDYcj2zB7mFvJiRN9SwpLg8u3",
  "key33": "4njA5Kx1yKSooTYtRHvTDa9GPHo9rjXc72LKNTGehk7D4d56QfJAGYC9PPb9nZwbwyuY3VJv38tZ1db5w2KoQ4fo",
  "key34": "3rxNgv7H4VeF1eiCTJBTXnXFhAiFbiXwFuqD7WSdhCjGh84jk89CcLrTCmSM2iA1JUbeRpteYjc7FtCT9GTLtbwN"
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
