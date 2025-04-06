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
    "4kRZTSdL3TdWe8gDgyajDYz4JziGZnxZYBa6Xt6aTdgkGq7tEchsxfoXY8R2ovHe2ts3QEuPmGk2jSeSkobyFujR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NEFf6nagfUzWzHAtz53YgfjEfqoL7ie4Ynt3XdvwKmoVJqhwCrLRcBcH1m9P953T5F4XyX7npqiHdzH9Yg8oq7h",
  "key1": "2i8vV4QXzmvrDFhGj6AbAggbjvBvazQMJ4QfQcN6mR2Fvs5obxy1UyfzzVZyWmFaH6sAXzjVGec6JwnfXcYgpD6Z",
  "key2": "2C7yTCne6wDqLPKooatV2KNNJFFtfrMxQrSCDV2h7rreZ3HMQwKoMp76nesmQ9vJNXYF1TgDgULB5SZe4xQr7CMw",
  "key3": "65WmzqrTMrvC4BXzV5MqgZ5q5wuCiPenbqpLh2KQ4ju2iaVVqthYbuUP5kWMHgPqixy3QgWvRPXgLnm8w75Qu1Rv",
  "key4": "3FFDynpdBGTzzyoMX3QU577AWx11ckeaDQ3FSoYLZS5a6ps8BqZ6NvCRqwrDJxyf64BWQMwai32TK8wBD54Yxcrk",
  "key5": "4LKdVLLhS7Pk7LZoUXr4csoSUxzcnLJQyoJsRYRuggRSAdwUEEZCbHJ2YSidXBtsZY2ZN42mnfr9P1FwypHSDnaZ",
  "key6": "3VgC8q5EP9TJsVTBNNXqzp43DfsZ4ixbzaR9eUgLYtBi66Q8GD8zeKG6PpwBPPBqf8sKgyeGqJNsLw3vXBwQULVZ",
  "key7": "3sARLDdmifRihFbKxcv2a6otv3czTc4XaPXKP5BE9hZvBBm15XiXak258txfb6ez6udCk1TicWvH5Ks4j4vBwBFE",
  "key8": "3hC6ELV2i1oGgxYuPeBMj3LvTaMqttvcBnBuEs6XgATNdQ5CC38aBUMo6LZrLJYYHbV8t53yZCwzhMWso9W58Bqy",
  "key9": "496rgUrD5dCajwSdtKGqHkuuz7XDKexRBrjtbHPr4YfAkthSdefafbYdTQmuC72GaLwTvgE2KkytzYzK5hPpaEGY",
  "key10": "hyYmQLTFgvcNpzsx9RAYN2avg7UQGYDAFWaHY4GDpawPSmB9rGVz1Bg4RhFWh2pw78FAffnehYbyLw3BLpGA8Ru",
  "key11": "2hsFagw75gewbERs24sA3EEdsYUt5JTCt8aC1VyrQRBG1ewDT4Bu9UCpi2MxSx147jhRxT2Y2sgFvv1dqDaDVwCE",
  "key12": "2sGk8nhfdsjvhLzA9jzT1CsUDVNd8QQ4V2aP9XmsYYW6tpvozkdJJ5mjqi7wtdqiXV21NZZkWeL9rpVPUe1BDkQC",
  "key13": "3QfSa8nutEQEBPwxf89GM8eWTgSHwvk2owp9TVkz5Uxnk1LKxDmZzskpRy9QpF5WKHamh5yymLPgVpnAYLzcTqk6",
  "key14": "nGcGWWh46h5uva6itkSUiXJYN4Qo3A3aiDcd67jczu1f5Lj1ntLHePVdjoNURUQ4brB5Q2aaxkWXvEMC4zttTBA",
  "key15": "5PUAPSmcgub6hij43rgyLT4L8V5ZPi1taLxpYwQwH7ZXf25FqcUK7jJXqhHqeBQ3LzXiZQJrEfB9KhTxMY5Sfz9P",
  "key16": "42ede6AmVjb1HjqKTY4hYxz8zdjPpVwfhoVweRZ6RieowvCT2mEabmN7F2tqVbkatnxWsKqjsTRYXrbRcHJStr9r",
  "key17": "5CeW8tZiXQFA7P8CdUZqCFcGLAri1rF1EDvEhfGztsPep2iowToSVAMGTcNeBhUxoFthuUuqwPewQwWagytxUaeS",
  "key18": "4cdPPWmiAn3gH1dSkgHnV3eFF4P857mWpvMYhDPA3ne9DweYd8N3epceHkhyNkh3jKaN6hSCwskUHDir6HEZiWuE",
  "key19": "5JDHekaQqMKu4jkovUSA7sgERf8u2hxygBhC9UjFNRd3q3KyCaQ1i5iGZUrK5RGxpKWKqE1jLkR1ujL5nhtYzEW7",
  "key20": "xtXq9khm21eEHuR6sNT8qPmf82dAQXrPoKJPyhHkGMUjmAYj1R6zHmA6937ShG689vsgLcP4FuEuZqapZ8GhFhq",
  "key21": "3J6d7NYbrVYGti3tTJobZK7cnxntEGouoSqZsA8mavQwin45bzBXCeVJUJ9Xki934sKQTCSN7tCiqwY7b2YnEh2A",
  "key22": "3TadyzAWiwvUPtWBah4muD3r6gVXd1X8FA87it9DhsUufAGfRZ9dA6ajD67q5E8UBTTqgUE7c1KECinPSxB3CCy8",
  "key23": "2obqXYAgUvUNHAhxqj96SK1uJURsGAborKpoYTTvXdct1z5bAJz8bt1J1WSbGbNXeZwh7VCmhbn1XHSh7yAj6RLj",
  "key24": "3oiNz1NuRK46wn4AVBr4SBRPmdHxReURN5qSp5f4gPMqcL47v9iNFr3gTdPb84zZZ8UBZr1NFSEXkf74UXpi3vTZ",
  "key25": "5qeoGouiBcCbU6SNKkfckv1mUngvxcmzJ6uusrMr1UVypyiV58GXDu4Qti7PFftodPDbBCM6tJicsWphfDB1NCCH",
  "key26": "2Nhub9CkmVL9SG3w77GjYwWa8yrPW5aj3QGS3E3MM8UJvKNhpHtZoJwbEkiUAEuDMDg7tWH2A6fUG55mmsYCZd53",
  "key27": "RzGyH74s3HjsoiYDXBTdYjqEHTfsVeDbP5W4VQMtv9grfnx2T3CXM5shcUVnvk5VkAA9PN4E3tYqdNDPYtfebYf",
  "key28": "UWTMpurm53HW2p97qFohjvZSFMPx2VwbWbcPyiN6fhzyb74zEZ4xxXSVKhDvjgGt5birzUMGc16g8sFDGamycdh",
  "key29": "38fvZeWTxhzf24S2qZdd7VFf1d8cDrcH5VW8QWfYMmDXw7goCmXCeP5ph9ZoAsy5E9xdEZ32jeVCaKEVuaLwGJTq",
  "key30": "3Nq5enZF91zBx3cWTAJSroFkHpVdjHMWyp4KPpMkznhP8JnCrDvw1hz6vS9pr5Wy45wKnXBwtj9zHBP2HuSJvqBe",
  "key31": "2qjop6JRADCTVLemzQ4aCNk6kd462xPmDrSmYjQ9uPj9icD4df9sGN5s428w434aSgTQNhqQ6zXDSFbxB77fRCtx",
  "key32": "bgy6yX9wh4rBeeLVWkKU3B6yyVHVw9MKT5o5qR5mDN5WJSLrtWyiiqYaTDPvwh9wKDEJMND7n1bCde6FVgQqpBi",
  "key33": "ykTMg34WgvV7QpTvvKKRqbqn4DgmXhc6qvSkK7y5pUU3J63iBTxTxMG33JZWqy346jacGHKuNg4GzxbVGyPXHzk",
  "key34": "4fPZhTwHjKTYYtDFFDf4P9BAK88oH4ft755JWviPeZvp2Jk8w27ySp2kkKX8kK5SzV9DooRA2UrFoV3gMTccGaRA",
  "key35": "5VLkGnm7hqRYwvUcCGkTCqD9nfN4JVJSfn1X473Hg7R8d1yuvimHiUgW6UsMRgQXcYKGXTtE12nwSZAzrhmbNNKe"
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
