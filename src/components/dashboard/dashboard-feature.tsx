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
    "3aGsLpHQLyTAfU1XDd9hfL26KQtqZwcF4ot4sFf125G2zDzJ5X4wSZBzvSYtbHyrwMrh6piXw4Y6mXd782G6VcBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fsMDy5f1EumfTRM8qWSoNsfZnvZcnfGMTuSZJUvz2YAw48j6igE7dBf4aL2vG5JmrXz55T8QmMxpB5Sgf8rYh3v",
  "key1": "qrGS56ncaDJxTDCUBkMSv154RwqWm59y84YKdQVRLHzZU3o1GVULUiJ7y6G2EJKQ5ddJEe6DHRvrJ3CMbgPvfKc",
  "key2": "2Q2QhhtBPvE6gQm7jwW8PGajou2Eh2qLhnPrLHPCMnwREj4htveEF5yFGAA4Fi28jXFpH7XB6jLYummDpznLZGBs",
  "key3": "3EPqAomNL5EjhK5yQ8pWeMGTbgHSZZ4n43YWLFRsv3WHJ93zPii7kT8v3hw79FkfRnfkYu2oVAWu5xrTp7VZSzKL",
  "key4": "3VXLoc9Zm71iG9kWSLv6fjLqBMsnRaUcG3QGdq1V3kd8FNYgP2Na8LPEYAruWRyAterWwgQjKVxrUfxSd5ahcrj5",
  "key5": "2kWVzV8CicYN3ANyNxxHvc2NAuzVgwrsc4ryorrGdvYAzkRiF3BcB5iTu3vq97aWvQVAwYrc7nK1M3ghMzFb2qmh",
  "key6": "3rroQ7jBRij9siiVSFwcSGN62XJwPXmX19JpsmGFEBnd7ZRxSFykmuGzuhoXGmtGdQrts2w156Ex2UjLvNJFRx3k",
  "key7": "3tv8ZSkqPEaQbiVVpoYzBnq1oEgFgJ5nwovQTfyHFNDvUjDF5thYgm6EadxNHucQD3nfDgxDoKqx9xq972yeYbpM",
  "key8": "4mvrM3KniWGeco4EcoX8tx1vwrYoy7Cvn7BEtmBjq33s625zdi7yToXmnBosCyNhfexR3Vb4pNuioLZ2urULfxB7",
  "key9": "4To6ixKmbFH1uUrRfUz4v8MRxHvnFK7Dz7jP36QV3UADT8kzqpH5doTrCW3tWDPFAemtqDSnkHh8Za12hRYrab31",
  "key10": "neqqDDGtdyEcVpDpHyavqivswJPno31vPtWAR1q8BdCHqUy7ybKc1d6WELw2dGBmKzDLUafYsFMywZ9HFZ75aN5",
  "key11": "5W3LGCmszBT9ziDWsaCruH6Yc6iDiHP713Yf98CLJzCMNm61NTwqpgKjmqeeYo67ZCVuuXrM9d8KgJ2FK5MXog8F",
  "key12": "Lc2mCoGugACAHV9Kkot2RKkWZDJzYn8PokdsaLBvhXGqacQa5fDcpSJjj9F5zXpF3DhbkVJypgzZN6TxDDoNfuf",
  "key13": "5kL8w9D2hLsWSG3Xe1cjBGRnrqN2J3nif2H1HsyXwyFuYd2UZGP3nMfJVzn9qLJRrk1hvUCXL2bRiQW651HPFtps",
  "key14": "4VTRMLctz7WmFkDic6YspZoy4cJ4DgAPF7N7CX7YacWa33JkdydaH319n4dDGzeTckPAiXT33ioKK2oxMrNVhDvf",
  "key15": "33wWZwVpzKBWNQ3ZnBaPj9bD7vwzYMR1wHnsSYaGXPHmwj9Nhj2hy3Q5WXW97doZsiULF88Ry8nsQoP2AAcNqLT8",
  "key16": "5DMBHi6TdhE9MqVhpnNRAXeDDKtpN2EvnbpGzZwD95RbwMf8wrAyKjYxecCYUjMVC9VC3qjb9h2tR1jJdQwPHJvy",
  "key17": "i63rXkasBp7LBrwKtcduRMAWtW13VTAQFPgRhSonhD4Vz8tmKVRKvU6V3K8pKkd2etJGtqsAmP5BahCueUDnFVX",
  "key18": "3dJ7YpvY9rof4MudP7MG57BH7g5Gpex6qAJpyeZv1aB3Hq4EgMQfoL4X1KK81e1rn5FhFnB11b76FLxgWjEbC9EF",
  "key19": "27gyK4mEh26YB9PNUS5uD5gMXw9LuoDNh5G1Y6qXcHcfMbbMABXZRRF1h7zBrFpqAPxKxwzuoPeDZZTXgugs6nMq",
  "key20": "qNjr9BNdtSMwtE6FEuJ8mYS821hxEZVH5AgE38pBVBD3fWNdLq8u1Ci9VQTkZhUXHTKCKcuFiHnywDycfgypD12",
  "key21": "2Qf3ao2sLUVogKt522GXsK8so979xmNSnaQtNg8N8ay5a9GhQV3JivZf9XZ93YhDykbRLcNB18M9iRgZhPPDiM99",
  "key22": "29DBt7tpQ7rBusddLRtk2ofExKerVuG5HB47ewAvEE2qZF4ugS4tz6iNnu6ook8KSWY5wkSm7baALVvoCtQjJ9P2",
  "key23": "9X1WcZUCQkuNGyiMXf39XdDZwMZ82VjqF6axwHRisc8L7bmBhfnh6Vkr6P191R52sBT6PEhpDjDZ7tV43khpfkQ",
  "key24": "2U7MiicJvzYjf4hD6SUUmMcFsXWzUvaBvBMv5ihuE9LmGPBLQ4QSDQ8cpMoqdhYcPHh1o1F6sJfo4xVCSxGBgqFB",
  "key25": "3D4Xwqeri8pjVBvrr2EBnb9hZcMntyCeaJ2SoPHTYBXYtWxYBZFewWtqH8WT842SRrGoSH1XUPmiF8jgReMDks49",
  "key26": "4grHY8GhjXsKwTr38zN81uwXch1iwUYTCXd15KWbBnqE85dkm4kTqjes8jiJfo2h545MudqvwxnBhyKAVxKKCLz8",
  "key27": "HoGhP7y5xMHUvmCFxH1K4yDU2t8WyF9rjjQVEha6hu5XrgZCP4ceGsmDZNegJN1aVAA7LhGp8wzM9fGfSZwiNjE",
  "key28": "iFyfURaMZk9tSFSDV1jBJfDX4NFvobAgck25EjFh6Js9Hswx9ZBpHvnkR4XLPSqYAu7MM82QWkzyPhFxT47vR7W",
  "key29": "3hDWQjwGsMCXihUzjBRm2xvSVMb5bYBfwhXUWTwTGHxASjLipWn1z4UcDfpGpZwXZuEfKW6BV9WAMmLC2pFjF2tk",
  "key30": "2aumAiygnrdNnBZyPxa6ppCvwTKY8rAJx8qHx2E9CSBP4CzQceNRFTkLBQeHU1QN5GXwHxGm9gbhLvowg7Znp5bU",
  "key31": "4Jku7J4YpWfNEUSyCKs4qTVSYjE1QMraZmvKZG7Qom4EUZpsomngAWpHea4bSLSor3kdGcGdVjGoVfzZ9wPhdE3r"
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
