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
    "2ibizf5C2Yc9QY9KmqynwPHyXjAfNPnC9r13MkGFntFNPdfHQXvdv7romJS3ch9gw9kPGbjiF9t78kkdUuXpCfxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F4jNL2ebwx1aZndAWgJjnvuEFWdrwA8SeyvWr8inqjHByXXeV6AYhgzPrkC7EvRhHoe3guiLGMfxA8qxxY3iHn7",
  "key1": "5FR5vR9naryXfMSyASAbK6tRszzztD3cKRBybkV8xWVjgFaS3o4vJSeLfFy61kLP999k5XGHTexVD72hPLj1o7ow",
  "key2": "5T7c9MypsGicG7EJFSUnzd2G6jA2ahycA86YgNeH3hfHziLwVCxT1jh4HKNDCZBWaxopRaZRmeat4zQGHkZ452jJ",
  "key3": "2nbSLKw672JwASQfExxyyTC4A2o5xqe2cTZiRHE1awjQj5JVa3CcnMqCwi1cY9RrFKRVZxy2oXQhVxkz6vyuN5mx",
  "key4": "2BZqZvpHXk42m6xxtrG8Y5MrRH67cu3xXiGbzfNvrjwss3oyjyMJeP5LnZcLB85UbF3cMWJvWHPetNWNmqpqWdtK",
  "key5": "3HaSSZcwfHLptuq687APYLDtJbsmTq2jU27DmBFDrfx8wgBjTWJRiWuBgJn4DxynAyJSbUbaMKKVdbwnY3NxyRKY",
  "key6": "2K9gP16rbxDWN8V4aJm2zsyCNviFpkNu91CaZtJFg2K2c8n88n2FEQvAaZuhHguxsuMj4BSX3ZEPNMPwrhCRRUzq",
  "key7": "W5ttSvHrkxuUcNVuYXyhDXeVaN8J3euML2rRyhraWtqUsF6JnC6ZZfDzvde9B4TmHi4wReMme7UgBVAZw5Hi4mC",
  "key8": "5kGXB2Y5iVNBDTLponCMcDvui18MwVXx9hHtekYzzXPch4dyVUMrBmQgAzN3Zi45BWjz9DgLnb86cuGFa9Hd8ktH",
  "key9": "tSKLd7wJkZp7E1yHzfzs5jwvmUbP7jijcCwTLqvAyr1J4ovYQS7JwZdUoaHiPDsGbpUjfX89gacuHRa6vpAWrrh",
  "key10": "24VN3FE3N6brkc5Cn6Chs2DsPLy1ZutgoWXJZxiDCGg6mRUj7TvegaGzr5z8ZPHP6BvNcAd1QpzFyKFbMTWd9ZrS",
  "key11": "crdk3XpqrRGe1DQrvhFErhsMp1XPXVcGWkixT8pfAoGcPfKDiZyJ8KDWrPXwu1fk8JnDQRrWSGbKsBYNLLTyfcy",
  "key12": "3jWr5JG5ANWVCpSALaNiEeKqwM2yXvvaL6UjDDHTzTpmXS4m4tRXfvhbbyhNmWjQxEaD9VTjc9WD63UxacjmgVEm",
  "key13": "4XoYJYc3Wi57SxB57wk5hbVcBqKSrXKrp6DwyiraX3zxikExSJR9QrDbEr1XE8SHSZ5KfGoYzjYndK6fVsWoByuz",
  "key14": "4HTGBrFbBdma7kjeTF6ngo9TVqu9BtcsMov2X1GtMEPw6WEV8mWYDZ4x1CipGfLRPax8ZtV6nVY2AQeQthUSSnc3",
  "key15": "3iKuGQxeUZgFGtpqH6CtmYdFn5Cv5LGiHSeWtbeiLFM1NAb4WkFKVoKhg2vGYyxhw7ZvKHvZfJcgHfzmBE4HoZcN",
  "key16": "Z3nWa8LmK93yMSWYBRCw6GeH1iLcq5dDqCEivTqxtR4BHsmv1U29MwSq3hqch5KaUNHqUNeMKCqx9YL4sdAgPgF",
  "key17": "cU5jbp55kAcPgcJRGVN7ZQRpb1DfokL2jxcZWdj1CyLv6VKU58e8ZnF2EfVdaJTD5d3ciMgQ1m87A4NBtzh5h7y",
  "key18": "4g3e1hjGySP6Uu7kKJnSJYqQb58woRUmQpa5vhWN8z3qKuajdrkWPVhB6AbYsSucriqikC6GvNXHRmSCLMHR8H28",
  "key19": "2oz9YjnHmU3EQgZ1q8skLy8AqbkhfRDRV5X1YF7pA8apVcBGfvvFypACeNisXaXryMm94o6aGjw5H3AuZJESofad",
  "key20": "344oKWxYpNvUMbqooyRs7rr8L54B1ciweFCYpyYV29sxFT8hKXBYpioPVgXWRKNKG836joGkMpTQ8BSWL7UrymDs",
  "key21": "AUoP21CQRxHexctCHFbkR9hsp3Nmvq1ASrSRixnTayGw9FEouPbyXYKK9X9c9HSTyDssHXs3UQRrdWP6xRKFkJC",
  "key22": "5Mxp7Qp4s3dd9DJYP4uLr3yv2QnfGr9TWSa2CAT6qEuh3A4iiZuoBMD6m21a7qrTEJV54MZMcm9D1aBige2nojCH",
  "key23": "63Qxxh7LjZuVFYXyQMxhE55V9x25tfPtvN1n4M8Ljcg6cN9VJCyTietqLzg9kahx9L11qWxrFzz27fF55LZW4KEU",
  "key24": "4sCWTLMCEtZFQPw1XgyxaoCzxCaDJuqG2BRerkx9VFGC11TcBpzFx4CC7zqvgjSJBzicAQQP6LGYTXeSnAZRQp7m",
  "key25": "5P636d2RxfFoYk1Wu2h1dxy47kZjGmWKUMS1nT9vYy9hwHmLN9NpjGpoT5CGNNPemqJUqbNGYxfMs5oFXgajNaxx",
  "key26": "58hEpdkWHMJbV3gefGvq3SyRVmQF4qD1a3B2GZKwE5hsfvCeKzxWQZUV8KbKcmdXpHQVk7T3fjVGpP6DX41kT6Vu",
  "key27": "fXn19psLQgmPZAdTsnL6ZtGrMauvjwHgLTSuTdm3HgVRSnPuuxCcRZ5VeSqhRfVsv59QqoRUQqC5rafYgLZQ3mz",
  "key28": "SnFew29EJjnGV2AtkcHVGxWjD26QAE1x8Xfzn9ZQzkzu7BJdcG3qnpmo87wsFKUEBRsdDf8ed4DoRF9p2Fwy6ZW",
  "key29": "5kFDPCgwJyQd1ExtGExcpH3kdvnGiK4QNZPotsUQw18po9YZjc2dmovnyVwyN8Fxe6kmHxci9PVyEK2RybGAPv16",
  "key30": "53HDBdNZQRP9842462t5xrhai4TRhZ11JFVWpN4HNbgx7zJncV8tNns7UDKp3GJkBPNRhTAZJWCcmQ915qqejmXD",
  "key31": "4QLMbLiJXtsEsJygXBKGvbNTzsprQB93Dcg4wERXBDRM1fH1uTcC25N1hRirht2bMCtmnfsHbRWiYso9MbRjnjkN",
  "key32": "41dpHZ3SmXVw954HkHCg9WT2MWV4Mj8GKMxKwGkpUn4XZZihbii7KZ9TJAY31e6aVFkMnbcUNzQiSP3tWq1v8W7f",
  "key33": "51T24avkggDJLyuN2pHcesHbPyu7GfhkGDCJMaHhKbgJot8MTX2rSPiWh7fH6itX1BFShZK5HbmQNwkPEHHsHrF",
  "key34": "4rxCEWdA2GrrrZmBUVSESpWghhhX5k1v7fKgkMexu7jTCLDkreLubxdj2zPhqyYZ534RN5fBt7sYpwVfDs6W38jB"
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
