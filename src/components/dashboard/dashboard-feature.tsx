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
    "57Ajvy6QfjgXtBoEttz4bsj3UfP7hcfu2VMwP6rEjiP8tnum9runP8kGWtyZUgzWTQUVzGCfqQyJPX7LKaAYqt2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N7mxds9dD91Q1kML9MCU44T9DPnxB3fnnLmnAUyuqH9UTTNo7mEmapMxXJX9BA86n7crA73v9Nqq68wZSesGVBC",
  "key1": "uvoEuBfSxs9njU9h3UfBFDrgDVhge3p3eAHDyAsvXMgYw5DVfZGQPfPjUZNyvpAx6mmxCiiT4oJGJ4xAmcbciER",
  "key2": "5C3dFtsugT3iiPiiu7k75JZK4j7xVqNNJG7cw2dbfwSL2Dg8GwZMTVuP7qrH6auHSnHCYTNDU2QvtHwpzm9AYwR5",
  "key3": "2hWRSGv9ER4BZMrxmWpa2UFXKu3ynyVmKU5UjJt2EhpPPS18DxCkX1r7smXEx2wouMw4eRYHCW86CFLX13ruRtes",
  "key4": "341gYLvnV39k7BAf7M4JLwLadVUTgc2i2FjSaAVg31bwtZfVZrDaKAtKbLvMmpHVesjQeicp7G8rsnAdMGvVDZi2",
  "key5": "2ZN6bpzHqkwcbDjWHb3LXfiU8en2NWRqfHTj22eYyUGm4qVPMT9dpXyngso4cNcoTJ6qGb44nvfAyQoAYtzwHDtT",
  "key6": "33crDmyBkRPsrri3pM3HLtbgASTHmu74jyUAgDXhGehk9RjVYpd8R6v9AeAJAX1zLD4qzNvRnDR1UHqrFkF14ukT",
  "key7": "AvyLnXFrzFpxjHDV6xsgUyTk9F57S7JSfti6SAqNw59ATkNy6JbPvAdYYDzHhwaTNCsJr9jpibyqLznTKKZ7dw3",
  "key8": "2SwHLmj6guRxp7DMcg1txxNxGNDf4tB8n4ZjUxELpGJ4o3HYTKo18USPE32RkwineXc9VV4AaYVtJ8wSCSpdixN4",
  "key9": "2gC6gPwN33AT3iA9MagpJUNv1mSXtK9b4e4MSBpYRvoYF4eitXXYB2Y1kNS2sMG3Hz43CrjtR5LV1eJ1c7vnG8hQ",
  "key10": "2ks8gZ3r5uqjksdARbgSk5ambdjw8qtnLxbmVuYeiUYafi2E7S36id1cqPGRVRhfUy51ZADM6MT2mXWzvFfJP84Q",
  "key11": "3V2jyZYkN9Dw1BMXRU7CwwV45y1PYYTr9CjVdAMffgf7cQs7HXgK1T3hRVkjxsMBttF7rMaAbQ5ikdTp1udF3ijD",
  "key12": "5q6e3GTH5yMRKsGLeRJExyEE3qMEe4JVNBQeC9j84Yy4MCpdATFwmgTpoqd9aLhPLGue3TCCxP6Ef4McbMR7Jyfv",
  "key13": "YPvQ89kHegXJnM2L5AVYgNJkoMoY1TMLGp8RotdEUwyTYiEGA1CAYSzxNmMiiNVrUhfMGAZrobSzSX58ekufx4r",
  "key14": "2J67HxTeEwWcPyPhhXtf6G4CATWN4habet3sVwsgyNrti3fwrejuGBmyy1HGT9VKuKzfoBQmpu81JMPvRo1W9jvx",
  "key15": "5zqWE38TnMXeXFGdbZ88LMewo1EM13eR7Tc4MQDidfBKNzV2zGb4LraUxzFSrHApJS5y6tko4HKRCFoqDU4tYu3q",
  "key16": "2BvC2bAeApHrhUFRGxgzC9xLsbvWP7QRSmvUMsUERa59FbySygGXpCLbPCTFzxbKxeMzbSC3GqeUumu13r3dyyWT",
  "key17": "EE2T7AV6yuVdzEwKJcjFUmGJFJy86WxDyq6QVfFjj2YSZu2jaH9emaBtXMufacAN6RPNrpZYjLLjN2WyyxMWjDA",
  "key18": "qGcCWyG3jU6WyhvZnKmVwZHKffV5PVCZCbg8FfPQA25v7YNmmBR6Rq9HAe4YJopckCrNJugzyoAxx8LiHi4a9C7",
  "key19": "579b17ko3PkDmX3huV3bcPNtJvB2F8i9USBr9R5h46rVoAGT1TPkAvvWvtut7XELa9menNcgnXMeW8SX4gbjWk2a",
  "key20": "2bzyKjXmH3XgrfztMKjZ24Ka88MH83UXh1PaEsAkMNmDyfLBWSiJ57GJyXGvfa57NAzNu77msWhmaabKsQfuY3hZ",
  "key21": "5vgxhACtGmD39xgMqNhc8zLMCvdGA7ifdgg2YTyKyZQ2dR2Q6s9rxnsBvZaEB9vHihaxTSpjoCLnrabLkZ9C11tE",
  "key22": "EtoiYQjhSnSFuUU6jomyaumdB9z4n6KYMN8V1Y6PtTtfXCBSio67txhEzS4bQLjeobxtAQti9apPeb8EMTj7AuN",
  "key23": "mNJDqWXTHyiXGm9qPcmMga5Kq9miPRKM38vJGnVY3tAtgDFTJSsWmzfQyRRPG2K43zqvasHcDtYLdyhRLxsrYwp",
  "key24": "5YreWCDcukpqgSEmDUWGeQud2u3MfPF33rA53yRLqbpzEa27ejtLfNPSGy8ezAPL71XBY3NWLVQkDzdopscrMftE",
  "key25": "4YrHgkvS5Hxwjnk9Cy4s6e7Cv11BRtt41hRoGVYCo6afhE18RVVWZTp5egtnXuXCkWZARvkoQMFjuTpGnd2Smqca",
  "key26": "3nXNmXQukKQHdeLySgLyAEuDhUHPoXBVNZu3A4D8TXtaZyGNAFKxYL9HgNWy3b3RhgCVKFTe39q6RWZdCwsboeFq"
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
