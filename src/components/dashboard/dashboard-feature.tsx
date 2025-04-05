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
    "cGDjVV9SpS49uvrZacPeC7FNpqWYEEss82F8yE4UC8VZgVaRxBqPP9FkR3Tsa1kjmALoFR3wsYV5ZUgo5XJs6Zb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qqfYEgWkgEpKah9QTPJegAu4Q9jqCHwvajWkK1pvwdgr1mRJth3XMML6tnLhTt1Hmc12qURia5xq6y2HQbphH9Y",
  "key1": "2mhhp1XPVxvGGwFkFp8AvQewAM9McfocRDDjcNy8yLkFrvTyeEdzLuX3Tx7RDdw77KSAeFEgJgkwsVtG5RrQjNtB",
  "key2": "47QashQUsfhqV98FT9C4fGmconStUwVYtr6VWsY8vkHkfTmuhoph5v85vS9FyixEVBhKp122UZ6NUaYL6S3mLJxe",
  "key3": "59ebsyjVqyx6fwJrWpqNPCpYho48aD53AHsaBe7Km1pWd5FxdXPWnv73Z82evaCcUhjE8CAYR8Kns7PGm7WVswdM",
  "key4": "5cKnZp2onBUTF1uddxtDEjLvNZsgHx8c1Pn67x4AVnpFts4pV6ushdjGno4sUXzUdA6Yjx8HEQPQd7t1moG1x68Y",
  "key5": "5htAsSSwPM3i2kihtEzGoVKkEBCu1A6QJgmhU5yryEPX4Q7HgnugXpsJdrEYoE7h24qvQKStqcmBorhP9wpLpeV8",
  "key6": "5QU87mnUmK9mngFsdazMgKFysEra3sKfrUpaKs5B57QQUsvv5YyXRqR8jND2XMZF2pZsaRn8nvPGyTNtrQSEFkKR",
  "key7": "feZZYFuprsiuRAcoxA1ww9vmzmkjrVgp2roUZV9r1bQfNBWk5Ba2DdVBLHWFSCDxBb7yXA3k32Hu9CDK9iJGPfb",
  "key8": "5mftNeQiP2BjaDtcaFKNdsCBv74GtnHR56ipyFuprvYKtHdUYdHjYGKx4FdRkhzvsfyN4vmwUhzCS5mRjw8WsB7P",
  "key9": "4ygJwzfAiuuKXmpq5ERJ5TzjFcur1rG5u8YqGoYp92m7eraodGFVdBA37n7SXqPPGhpXgPHBFK9FvLKF4f5nBnUb",
  "key10": "3Hucst5DRKYHPdMxx62kQ6toQTskzEXom57FWDKRvxUNsbDtxJ59BRZdgJSV9YtuQ9ztX6x6wMq7FQdhTf9eSaqg",
  "key11": "iyLeXsRTRsLEYFzBgDHEX3Vy3dB1UEUXsebDQbZyqW8sCSQeybHZgJFJFinBxFQuyZcyBJyzBxECb74m9ibQgwF",
  "key12": "4yFuBBzNdFkTZHqTVfzd99SDPxMzmgPoV1ttsbLoJ4xKKQH5k51mcA44WZpz619AagSunLqs737UmJNjDAfvvf1z",
  "key13": "5sMVf2jpVivYXzAUDuKvGSDKPhRkgCjTK8cHHcgMukWg7bqdzW9WhrhV3pCHDFTbgEQrsGv74ttyVuYDPW8igfdZ",
  "key14": "34BQYcUSquBsKksg6SjCqq6ppKKEUHpexg4Pi3uyAPvXsDrfeiB7jRnRPfpHN8XYZLr4TgBqvGrga7CtVoewpHtX",
  "key15": "3cTmchGfVzFj9Hwsjg9Bcpw9hMk2UMGpBFtb2RvsAarMRzo3Ur1p6xWJK2ERFutjVFjaj8NQjkYeN5pVhPSPMSV6",
  "key16": "xmk2RRkSzGmYPv1qmGPhBMT6S17Mz1SfaNgfdrTu6omcNLjvWH4M1MKi5oMGR5H2NvKnc6gp4GD6uCeWDEkgMEM",
  "key17": "3B7ps7y5HJr3hRyuc7UMu4xwimKNYdtfw1Ux84recfbggp6X5vZR1nyphAJfRGiBs8VQGkMvCyH6FfVD8mryCAbM",
  "key18": "5gMgf2ACvyjvFuW4xq4Nn4iVGewXd7J8SkNwPJcobDzTpLSm8i4idf22UwZFvL1eBSWtFnYkigCHWFiKjPuAcc1g",
  "key19": "5Jyfisuue7fqhSQThny4g2PiosQU7V7NrMvqHY4SiBJMq9544K3SzxBAJuvX6UhNgKB8D55Mtw1UypDTxNnPSUYS",
  "key20": "3CqjYyG8yCpFeBXxcWrtpxw4QgDxvPdsZDKMKpuiU7zUhHfztzmfsDex9PNfEBf9ACWLt95PorWRawTvdaxA9PtT",
  "key21": "2NNXJDTqDws4967WMzPadDGXotQtqW7EPPXtYo4Fh44LsBid2FXCDfer7c6hp4F3UKYxiWh4BygEEvK2ZnnNMQsG",
  "key22": "3GfA3Q3VL5uSpDiGVGeNkQK4d1JmSiywVphp9EsgDS4bHjHWLGajLeCRAAdMdgXndpLu69cpFSFA3ppDZy5iwuYw",
  "key23": "5ioUyFQy9w669bRj6xWxTHkkn397fiMt3vEQ3fL1PQwJEvnX4Be8P93LmB7EoeW7r3EJfVjFtCusFCbGzdTFLhwq",
  "key24": "27JWvp6SipNtmWuPSbbfF1eFtooaWVtVJV6Sjt1CFz4HyunyrYWAK5hN9g7tWehbxHWuNYawhtESRq612KAHDoyW",
  "key25": "59wZGXdZ2aJYd3mkTPsyJdfGqrS8BRo359jMpYk98eQNSsjQ6Qd3cQBM5DyKLSeKfcbpHj31rEAt5SvsMWov5kTB",
  "key26": "62zH24DDzJUxe7CpvbwxfFtVi7K6tJdkaR11CNUiU5Er4fYrpG72D2VTijVbZo2sQuwR2jsgyAvNBviQGzqYyFPc",
  "key27": "4LxKVAJegUvqcWppQF8bph5b1k2wQfDeb3Kb4AL9eEyGU1pXgHAMFohhJKdZpbMEWwthk8FoFzY4Rf9BTpvHF34K",
  "key28": "RaYv6C8Q4gfh6wjWJytBnkidhHqeSs889LtznUhq9ktwrdtPntDhzPn6i1i4mTbtgJWJGAvHdgx9CkkttkhsZ4n",
  "key29": "3FnYXY3AgFoq7GXcMB6UmB13jexsPLXV8hnyHsoRdfgiUw6faDbCrMxZrUS5cpehe68Ane9SzfPFJGuTh1cZKvwS",
  "key30": "362bP77GWJPPRyrnqs3mno2eNdv1oRtdKkUrRBicjLz3xShCVagwh79DxA6RM62yKfE2JKqfQrBrM15jcCD48t7y",
  "key31": "48odyiiZzczpYpeHi3Zp8HRBuZRfT9vzYofauEjjkrkdNfjubucKcUSm9C48E2Sh9JdZRJy9h3f7HNV6f7iYcTZU",
  "key32": "SeoTZS51EfHTi5rGUeCLiAFfpMQj2hzE3ngdzGaz3V9C6PuHQNbvEcX4i6gxqXCSKTQWSEL2z1HzotV25tNzs45",
  "key33": "v45bFHyBVAWh82erX2jy5Y9ADmGYuQEa5TdBkqDcFCXeroPJNjZMKxuCC8gmqGoeGTNysMkMt1hmuL6sB3Hrfxv",
  "key34": "25pEvAqDwxgALp6ugZgA3kqbEZYYk1Qsw213Hzpm71q7gZwS3BSDwyVBBfuxg6P6bhNBcBGcUBmsnYvPCqzFCRmv",
  "key35": "2nvLvuK5DAsspQ7d59UQnL99ET9PsZuNuYzeJtwS3G8ce95QyBqPxWNNzFPG54MtCckhM9RfoijdzibudbhZjPLi"
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
