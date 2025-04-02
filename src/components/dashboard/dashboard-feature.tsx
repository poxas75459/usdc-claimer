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
    "2FGVVnbTEtjyBnGc9qZofUeYMU9btnfzPy4dUvRjr6ThFd24bCiQPwHmtsJSEw3Xmnq9sfrWnjvudvnN8a9cvnCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47vxK9ZTKeKARmcsp2SJowEAfjL5QW74nzLvVPa3wRr6QWK3k31Cwc8vYcNZQrkRYK6LHiYXUEYEdHg1uFDGsea9",
  "key1": "416H7nQAnFrUa5HW2iFkzDv49odMfnpERR4HzTshaCmLuy24w3oZ8WgqmSj9XXXpzQYY6LPrigC9L1GV2DZrrBZP",
  "key2": "26suAWkw5BkBMJA3gFQUj3LY7YQaaPEoLXe7xCCJWTwPHGR6tbBcw1HXS2MhjQMtWHo6NiVcbfXqy9BwZ8A1tZ24",
  "key3": "32Aki3yYAZkeZXLM9yDUF6USuYnDYriVELzmU2BQjaS5QFTnfcaaCPmb634bwPafbyDdRWARA8PTCdcQ6fsfrqpJ",
  "key4": "XAzGVZYUag5697yprMKeYvNYkZU2tQ6BzgU7EGZVtraw2Gezo6EMzP87o6JB2TPCkBtUP8Uen87itTYrMchqu8K",
  "key5": "5vAWA4U9hWNDZaMYZck7XoENeG5ztVNAa93c789MXP77BaKDhz4cCzbb3wEmBhGshwmDquLP8pWJcSknHqXBHtF1",
  "key6": "hJTTXB4vC3FRf1fAB4EfNxBoaTfVLoEJAXtneAvhL2orhfngWEJGdfUiXugRXt5H8e5Rm4g8KqBCwwCajmyx6Fh",
  "key7": "3EH1dWYRiGoFtnucqe17cX7N32E61QcBJMNua8aQFs41UneAfwED8nAsNPYiT5zEigb4MUZLTZNEmqkoUXQCThjB",
  "key8": "489zUkwPMoapi2aYsqwouxoYqTjGDPDKhDpyWNnZU9tEpMfJEZcnSK12nDUoehSpkWCaiu8MkdWUwaHjdePQi4Dm",
  "key9": "8XxrQ3zU9JuZgzZv1Kvp57zWjfEamcNhP6fDtUTcVm3UuACH88HHyoomNK7PZJdt12Prk3cyGLjwJAWmrJaB3UD",
  "key10": "2wnY4rRqjYrrSxhqRSbJpWmVTiR7mVKaJBxKJXCN7CHcG7KzJ8x7AZJkcaz12ZC2NPHfe9pFKfPUEtgEgGAzp5dU",
  "key11": "4MGuzHBvFHHi1KXqRWB5v58Cb7QfguWmPpRVHiwqE1gQWTkbe2GHAwJ8WfFB1QWrkWFNi5p6t5c77g8T8vi7QohP",
  "key12": "5ovQ8TUEtnbjrZj8S3RuQo8STrdMSvGGmXbovwxqDXCzjvXBAw9zymNMmhJopqJ2vogQDoKwjB6C4ZNHrLpNNrXg",
  "key13": "4ekfegc9apYmZ6DMWu6FuvWHnVxW8BxDbBVsPLcuUZq2gC1tJoKxyUB8cyYZpCFABNjCnovEBoVzbA8cEa3RrWEH",
  "key14": "gLBCGnwzqk4SjaYwB69L86oe9LoqTbRoeyYeQ47tCjyc8CVNGiQCZ832eydNaa4EAtV5uGQrLJZbxSHPQXnefku",
  "key15": "5udKhRcVD4XoLQrsWM11b2RAM7qgkoSwp7uHG8akB4NefZTPiztELuR6iYegw3fJYBPXU8RwV8cFHPYsML9EfGmF",
  "key16": "2ebAh5Pxu9y1ajNZoxJskq6dByJLB4oFCXKB9G5fUMMfjbjLtmU5V7GtxGVDsrafwh4cHn8fa4Cvto7hXPGqUuHz",
  "key17": "3fRLgk91nzeb4WcfcDYGXsTCRiT6xkDSad4RE8ZFkrtQUppMpe2ke7ZmnBZUFrw8VsmUyTZwQ6EUpEwYN1LWBm7P",
  "key18": "5CS6i3Vm9TegGHruwvcNHtjYMt4JdsA42L81SyB9nK5jihAHUg2DWiWfgbDvJE5shkjQFX52Vdxwwg44yf9KsAe",
  "key19": "hDbb1EF2qnKapiibZwC1cjTuy1n2dTTDwY98mYQrQtCwXZoCZCRPJ96cEmKJqEuHTUmD7pa8TZfZkhrqy4DrHia",
  "key20": "2MGKZBvApxm6rfumCQshspbiv6g11BJTTKBcohwTUzFPFpPSdSAtMi5RD5Pk2Md8AvvYPdbLgZQTPUQFPxTzLTjA",
  "key21": "3ydE6cszRyjrDvsEbxAKJ7KQQX26K6Kx5hx8k3Md9U5YnJ2m4fJ7a3B97DxqZZkBjb99JGuVx2wSp28KM724VxHo",
  "key22": "32xzDP9UgjnZUBvXhwokKCXnhyyLJDm1obzK9VCLX2SFfu18dVMBbo92ne4bjVVdwk9Vp1xNDFXuv4u7pkjizXjk",
  "key23": "3Sx753Tgqrc24gtjiBu6RLnFkHSNoA8ZaghsuSD2PH9udG1xvDS4FMWHaZBZk2vx97mPFbtPCbFNTbkbFbAjsawW",
  "key24": "59nFzQKYgUpsrCJMRNH99WXm269r4WziJcezhRSTX4tnbgUAGvPhoAZqgemapGFAMYx42x3zDwEzw8BCPYgNGfRT",
  "key25": "337ARKi8ANcULKE5nMXHz9JBS1dFZRy9LQJuGmcRrK4xm5gHtWb4tgUbcCxuSiZ2P51zrTMLXpKYh4feq2QKQC8r",
  "key26": "3uB7v1FXNt1dEXSTGYPCuPGG5hLE5h8qa3fWNTJ1mWZJHGunHweeM6U9ER8xy45soGiVdtp2kuxipGAg3EAqmGER",
  "key27": "5WENsqKbSnJT4XsP3v12hPKkVSenTRBswKiV4g2fp35NcFmCTzFnghkrWQ9rCChcJeji8zSaDhAARTJhfGdKu4rE",
  "key28": "5Qzu23q2bnXBie6HLiGR94DTeGAcT397DWdcgCRrdTyvbQ9eMgfH1LDf16RbXFjSbDKafQXqUw8RvPmbYL1gqL8X",
  "key29": "2LA6WRXAGUTW19CHsVtczid6zg1HatDsB3c5WEWEdXayWD9APgzsDVkwqmLpT2YzSWL1WtMBkQVJCsmAyBsaxgZB",
  "key30": "fcf3H3AXuCXenNiacPJM5kg6RURVWFMWHNqhfYsC4816KjrUrrALBV4Eiw7Vvwxk7rkRLnjGZJy4VbagExWh2kS",
  "key31": "56ezk9xgmpAup6akiyVm2eE5Pt9tk3P2Jgrddivu15LoTeznyMiYQ3oehEofQ1UwEKrRujDkVyHbJQ1QePoAoezx",
  "key32": "556mLamV67nEPXD4sd5ubvH57YZW9f1ZiZSSufVsRur1PNUGi5j4HPoMTnTpwdjgw2AqH2LRddNcH79DEthGnbKh",
  "key33": "49uakorD84NrtVs549KQjbLSvLKZu5mttWmkjEvo7KGKG48m4r9Qq3mKdx6JBwLgNtJq7LYiJHnomFjPY7V6jiiD",
  "key34": "5JsikbUqEMpwwouAd5FKGG2go9i5dAhBY5wHhnTWY6VHBviuCvgCJqquDb6Q2DfgNUKwQeUef7vriEE1b7h5vcV4",
  "key35": "4528as43pvw5W9KBYBzisepaBiXRex5yzz4HNFTUj2BY6xcw1kreX2e1wWwUJjYcno1EHWGoUzKEcGBGdiu575Aa",
  "key36": "2cfNjsNUnXAnBR9qfif6FVfaHWDqm7PX5RYdJM7SA6jE27kJo491gbkyLjSE3zhKfrMjuutKaDciEUHTmStcj56R",
  "key37": "3BnEbS3zKdRtPPxKybM5G8NoAS4NasTC8eGigpm42YAV4D2TrLbsb92HYjVJPUbSy5FkEvW16vJaLgr6hUr9MeEP"
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
