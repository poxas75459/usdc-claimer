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
    "4d6AUfC5V8ZkgTcb69JvQCdPHzCbbdkw4fetqpVyice9qpTBJBr7txZsL93rmvT5okDPA4W9Gy7koFL4DQoRCBVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3juuNqUPAM5ihAWW421Vob5Eczy6WDc3WwVF1QYHDCuuR5GMwomdixTjdJ3pxEwy2ggMhTFSm1M27qPEap8Z7fpj",
  "key1": "4iKnamMyn2zymFQ38AWb8EUcbwJGNk5rgCRA5jF34X3tZTQD75ZLJ6AX4QVbGhSN5iEkWvRaTHoj8pT238SX989a",
  "key2": "2SsTjYABhiqakUbKBTUhQXfoRaY4xSwMonjxCCGax3kkvy3ioMhyasJuKZWnScXwK1fx7X5bAz6Rq4jx53zr7Cqs",
  "key3": "2fyhoDhwsUf4jthTMYSQGAtETaFno28f7WtTSgxpvX7DFhezvbwkFrBCYuZ66rciQS5TMjXgrpxX437pf2bhegEJ",
  "key4": "stzpoM63draHfJuRqm3PrY6inxLCQVSY798FVJnZRnf28pJioTTeYLeQqhosdWxkANwTFCcxZWWowXt6u5koLTK",
  "key5": "2ueba9Hv9BPHJDBnhW8Cd1DaF1GiTmn8Nt1pfVNgLDzjSnnSq6MQAkwftLEhDw2obN3A5JryaBhKn1Buud7Wr7EX",
  "key6": "55wr1uPBMSjvcMTyLt7624nQ2mFi8Rvt7sUbm4eBE7Gm9KuHTkgjj6iofJjg8Z8x9rpvU2xRCqokHosz4mrmwTqV",
  "key7": "3GswH5ptDKHFjof53bku7CXAuQepQTTMU2dM133v72HKvSeuu4eHrXkwbYbEt1EYGrUJwpN67moGuZ6ZNNbBkPrZ",
  "key8": "2QsWpaY54bBPrCWz3v7aWr8yvY4M2P8prkXrLHG6QvGJkS7D1YHffgmFgcxSxviFgpvNidN5tp4aCNteVVrvkTSe",
  "key9": "3am6QSQaZ5pipA8TmH7dRDfhv19vnfENXXgYALjfwq3KzaeLzjm4RCudgRdfLrMJusphhkKi4m4i6pfqGY3x5xGj",
  "key10": "5e4A77gzrBA3tG5xcZCP8P3UjNKiTAgWnb3xsv4WkoLVMrQYCZT7sCjRwFxDFb3i819kKFtFJz7vHC8xrD15p3nY",
  "key11": "4EpXBoFSV8LP7csj7g5F1fKZZb5oxkyTnQCgURGx2MbQyBdfJ5rJcBwEEWG5XNdue8LAH8EpUb3CFeET2k7cV7Rd",
  "key12": "3BvUHamyd4rphShYyiVT8XFaJaycexRh6sdWBKNuPMCLSifxtuZ6jGKE83eUk5A5TwUunzCfgxBF5ctGmXnevmoW",
  "key13": "3NsenpernfTvGV6EQMdh8NspMSa3MkmBUppC7RbmqrqsZxYa6viHRrjpUHUCCmbiGaFDrsrHn4K3Axts5rDLZDL7",
  "key14": "4Yqn1AoAwCKMwNNc8ideruz4nu3SsjrcCwpF9czqkbnNaQPM1PeBDHugbCKEmTGeYAUBbPm1bSNms9qaEEbujFNM",
  "key15": "2AfHY2TRPXcVWDvuSH3bs4tqBGtUr37frCGGMPadTKGf5TEkmfZuAttk5UqEvy2UJ9nu5w8Z8n1RYy4TScUuHYrd",
  "key16": "2KH54FWniFLbTdaZwtqsMmMxCyWWPmsnhhndwiPSKuYDU57VdSHuT6TVXsgScgiScpY5UjpuuCvLhoCh7twMa4gA",
  "key17": "4KommQihLdGu8vCFkhWdg9paEdWwsEBNwVkAdovCydm7knJF6rTSACBGJWbkFXXkhZ8hmhYRFkwyDKjZC8uJ4wC2",
  "key18": "qBZBs3JVhY5KohCXfmgwrRfjepyNVfpbXgaG8FrvXorWcnrXe14CcdhNdXVEwg9TaCGvfudqM5yeTXt3wqwW6nc",
  "key19": "4hD5pt7PThDoYcQBbWanHYQ6wPGqEdG5aXo89oxfu6reEoo77PgXrYSMQsEFfzRkNc1VZH6y1CZwqoirB9WGD4DS",
  "key20": "4aYpqPjFMZTDAkSri8SkyGNrp56u2BZgrxBbPS2zvSuXPZ2Wr95YgXCCnksfcyhdgW57U86YwPoYgC6XGHWYSd5q",
  "key21": "2wN81Qf8kDwM3iTfez4FErstpjcZzAnfktN8ruxRz4E2LpM5rEPqiifasGNcdf5GpcpbyZGCtBEDxdouVLXAn6hJ",
  "key22": "w4BYXNWDKSwRDYvtioRGnrD5o2eoKyWwXYWDGLnQnWtFvMthtQK3V8pFKCJ4RQCx7GJ7874Rupd67j2sYTCsGJw",
  "key23": "3pHjLDZvJDXXpPta7jPHj9fD4tesJkshqE8jZdvA9PB86mY5VwwH4S8srfhAdqjdbVK2KyAoVdHS9ttRxSrWkh5U",
  "key24": "4zL9JV9seg53rThHwEWnJ9MdJEm7Vr8H6Yff3mAAcPuM68C1w5ypiHLPeJiNHhc2QAeafEEW9uxn8HS9uDRfuxoJ",
  "key25": "5L4VJ7sJrKxEcTGZ13kzkc2LiiJKwn3b9VYM7ewXWZnVXfQjpKNJocfR9wGuV2y5EGWna1d9hBZD8MkTmgg9xhzw",
  "key26": "63v5gzCFGPaJ6jYsR26tg4r8HMGT3GMnN3NKERiXMUMaVD96NC9o35uNerjxF4fP935Zpb89nNQFHVQA2XzH2YLs",
  "key27": "WrACi4CEn4ANqKKwiWeVcQKTK5xvuJbweTAEdo8VzLdoBVboxBz8BiL4givhpP6iTn6osFh1xPz8dmN44doGmno",
  "key28": "3MAWiPjZE4qH2nmEEy8HPpX3aYzJ9ThhjMkvhNKaUvEfL8KvGqftqDY6cA4JiPXecq9ohgLAvzqfvbya1pwyciFp",
  "key29": "2dqghCMQXPHwnRHbHxJjgpgTL4gU9zD7xmfobCCsPz1aMku7DaTMfw6uFHm9xrCczTkb8sRYYPMGcdNE8fXwwtBA",
  "key30": "6e6DCLP7b7BZUZ8Ja4A36F3GwWmDU8S3dhanTzBv8WobRGoBLkq2qjrdwmaWQ3kqLGML9mf91qruuSeyHEkQJcv",
  "key31": "1pBxjkECk7fmAcHr5KrLBiHceerZYMBAJvPtJRJ5UJErt1nBUPEPwrUQRwvagveVdC4Amy3Lahv27gWotYBj43p",
  "key32": "fowGHqfqKvGGj7wxz9rUxtnhZZP83hmcRcMb9Tf2er6RzcZw4FPqwwSGdpXAUr1WaN2HCCK7o8vn377Y1F1jqNJ",
  "key33": "2MVKxxYiDj5Ssf4KdoVbxRzF47f3HPEAXA1YvvUVvQNoHbQ5ab5wjgCuAfEWEiWJ63FgP5QT5wMD8SY9FGBGu79P"
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
