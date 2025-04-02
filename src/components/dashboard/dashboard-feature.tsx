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
    "4D5t9ntkBiJ257L1zwMXxL2k1Rq1pgicKQp9c4y3gw9jax1HDVweQer1fvoY1qXqSiGTAFfVmbrgAGbNoNsNfN7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V2GFdeW99RsGdDv5kywPun5WWq6AckznVywECethLghdMJekygkZTdANrhqQV5YxaFLEmnnErKwSQdUinnA1xBD",
  "key1": "3Ft4FEu3jxivm4SL5wHqkvmDf4enLdwNmL3rrC4fJQe1VrStyxRBfmHcA6XLU3bmL4Go81MvdphrUdHbMCwXktzg",
  "key2": "3F5XoNLy5mfKyXckQviFN7UZmKDg5CyAVpEBGWajrn8zXNc5yyXwWdbqnccjWsBjVpnUmXiyZE2f1vZVrGSRDtcU",
  "key3": "4XbbkAbv2whXoqdSoT7nigZ5h8e7Zt2u6pDiEoQgf3zZMGKjF6yRGgSgtzeRBcP3KtRbCZEUT3hfdmLusCSKGqtt",
  "key4": "94nUvoHaKVHwzzs5pmUv4hpixjKpm1vNEQWWRr1LiTVPWW2Yb2JGjHyHrpVaVAnNhYR5XiuFHmArHequjWkvSU4",
  "key5": "R1LouUcZx4Z2Gv4pgcuVh3SJGT2zJBrvQWRdQ2rG8fKq335oHi2jBaYUxVHNYFcfME5f3mqpnJrxuzTaDbUoJD4",
  "key6": "2xt4nz9718CvKZ5H4g7TjQ9FPxYmts2Nm4DyeUfHNTSKS2Nfx7if7zjXu53M4k9f8EcSjEmjwSwAMhPv3VTLY3tR",
  "key7": "YAfBBSv9mGC5mVwTSYrmVeymmivvnTBTXHDqRzYbAiJ5Jka5byKqd7K22z88sjXB2xJrP1q8c22zz83z3yN7x7K",
  "key8": "3WfX3yWYyg8vq9jZcvASEVNABkUSjtMJeAVWgfsoozdUFLpKQmSDNHgyccgEeKXjqLStqKXMWeeNTw2PG4Sh9fHi",
  "key9": "5ggCcKV6hniWvu1THDjipSQrzFAPBJ3XD6pkhsRe1Zo4xAMF21v3PtDgKXNr6TKA5Gi8j31m5teSQNdZN9ib3mg2",
  "key10": "2JwxLwfH6CYXA8HmTCEa7SbJUKYDXian7zThn5zvdBVzF8Z7BdQhHjFzhcED3XsxdeNQNrSK6WuGTJcC25CADh9s",
  "key11": "4tUYZ2ak994QiXWtnLoNd9YaaHucxGHzZ2MD5Y9LvzQXajRq9q3CFyuAB3yJ4ADYxNFawnNnN47LVgwjBH9AMZVS",
  "key12": "4k6x4bRk2NvGhKAXDHnF6uCirMacB7BZ9166aTahsYi1QUPnEgZpJBJf8ZYK56EAnLwYS9gCmuRJmNCRpGt7XQJf",
  "key13": "fGxK8UKdWracT5nMxGpH2rF28KRrhnfqrMymExKtGNUhXEXEnhFsziqgzqUk9ufeGqVgf3ABZqgK9UMvKwNPC6U",
  "key14": "5MqGaxUWKqJpQjgPWPheK1uxfon4eTnk7fVWokHLvjGKJj5pgRmXy2xguKdqiYHUSMHknNvHJp3nULkSfH9THkTE",
  "key15": "4i85Tz1tKfCXpkUG6KxddzJvt7h6WYennPXujfmuDthGaJCn4zGyUtLhnJ6CJyKF1rMJfqMUPs3geCHZXq1zMyXK",
  "key16": "4tpN81P3PBfW6neFME8Qf29MLP9y3eKwMzQKr9QrN6gMcVoUb1xyqmJzZQVr5mrW7zusaezJecqjw6cAN35C2M8w",
  "key17": "3ZhZm5BUE6ZKPQmxkek2qqTjwivcgu6XpCFR3UJxbBFnZYicDXasZiqfyrX2GuYnK7SM9RkknT2rYzcx1YNzH76c",
  "key18": "4KwVdtK3PG76CDkKt6uVHLfDVkFptaPHZFFppCJr3gR4RxS2fZgcbgsMUYSArQ2E4wQV2K4xHRuGTiugxApqpnyr",
  "key19": "5JgjFfmovgeimqXMsWqsEm7G3esMAJTsARnJvkLCbC9ZUtmT1j4umbtCTCEjQZ6ysNLGPqRVPx7p3y77j9Js9NW2",
  "key20": "3AtufN4QSv7YYJ2RJZnaoiDGc7Koc6iW9CfydpQ4tHfDx2oDsrUJi8AN1QHwUBgpT2oayWRjKKPbNuTbDmwkAKbd",
  "key21": "5XhZ5N9DnnWfEuXxR2i9zU7rh9bkqPgLLCMgrS96dnEtwHHiqRTVQCPEUNQADLykqksAse8VwkgAEk1d4mWspzax",
  "key22": "3HN8NUZ2ZZ72T3338jNc78QnrVsiXDKMVV9CviXY55DrhCiXZzLrN1V2Tx5nvptNeiahCt2eii1ah3PyAkmunf5k",
  "key23": "nwyfy66AA1o8zyzLD3AFkwPaSHFFFgKcTjbqExoJSo1nuqwL9RNfpukhCMn5LqUeT4q249qReQQB35ixDqPUPxk",
  "key24": "4P7KRgv9bouGzYczhnsodMEasuTD2i66f2GN1vYHmEMX1eqwd8skRuNeYjjTvwuWLDeQUQPAatTUAZnHz41mBZUd",
  "key25": "4bZJV9i1Nzi6Xmcswr1M1EfMD53GnWrfS7fJSxne5pumJd6SMwQ6XopRaQmiWVfBtqVLi3cWiLUeSwE2MAS2opYJ",
  "key26": "5dk7TPVtAAAzVA8fvqiFhGoMfHKpowVn5iWpSHY97vH1bhBvAzZivf9fPp3N6RqgvgswFv4iWNYmcokExrbSa1K4",
  "key27": "4oebGdHrrP4c9KYHP3B57XVjh1pFmLGJGKYMd5iACuwufu7xsQj7gQVHY2LDgib7D75SR2hoYegoiubbCdWcBnwL",
  "key28": "4EPwtD5ENat1SqmiPQNDZ5j4nwXwy85voLoSV6CMdrC5vDbxJMpQj63hhcZgo2iHKPFiPbZQDCPJ5dvF2f1TmKxS"
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
