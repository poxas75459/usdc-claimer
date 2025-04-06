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
    "4pMJWataFdvsGBZjg64mjV1zokkeDeMQhXU5bs9CviGxogneU5AXYdzbLnHe3xgexEDmDP4NX8t7wo1nkGBswDti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mr3njTWaZwVVYrcuLHDfyT3sAoQBK5o8Gne5hMwnouGzZRHnK1iZKn1oyHihJiDe1nfYhRDjgwbahBNfw54mBKy",
  "key1": "4iRb7G3R3cWc5V5Kg46bo9yP48uh8jiipN3X4JjptUE5MK8vYYogxqZvBq3bgCc6MCaQUL4X4owcf9H7MTzTBue3",
  "key2": "5GHcPkM1B5Rkfho2PoPtuV22bRK37NDyhFz3QR5PGRWBve6PUKAWmVkW8uvjQ3Tgt4dNRnfmbbTxkdrxmZrxUeYc",
  "key3": "4po9E4MTac6tu5gESfTjd2pqzK9DLY4hWrqujYFL8WTQouzqqnHi6CGKEb3ZbRxbpcMmWNjwHvHXtUoi8RZxQW7E",
  "key4": "35jgxZrbRA4jeJgcyCWtzBg3RUaXt9tnekSUJKiNozfXwWowSPDR5B5g2mAjnRSZ1xP7TMPgNZ9unXWXXTtHPyH9",
  "key5": "4SwzCa2cdNLXtX8KLRFMHit9P1dZTxs365UhudKujGTQ6bfUzVvS1zxmuofypZSLyapTb6scZjhmfE3n9XDhNJ2D",
  "key6": "4CDxhFFRup51AEJaRQ3t7kYuN3awJgEaJC6NaRU7zNtoEYAik8jP8ZpdQaUtrJaF26DBMdruKsDMbCn7P8qaJmXB",
  "key7": "kY6JLiYBXVwyavDat2WprFCGNUdTWYe3WmqTs7HavixJCsoX4qE6hfYTSvTCFzovLNKfNDJm5mk1BRQge89UNJy",
  "key8": "35Z9jX5E8kYZUvyMz9nNpnriiwaUDbtYk15RjykAdEV3ySPfA1tNRCppGZr8Yo4gvnxSFPpcs9oZXmqjxd8Rn968",
  "key9": "5hDSjhBHnHj9yiu7EucwZSwbKbyqqTe7DmPaZgwzk6tp6rSRK9YmmUV8U4fK41BmVUM8YX9zWLcJciQixKdiTi6V",
  "key10": "3M54u3Z6mdLvLcoDdnVECpT2BWPZMLmQyMrsa7Cfoaaotp79nDdUmtXdmWYUfEuLea8znUxBcqCRJwmaGkZX7xzU",
  "key11": "znQ5QA2aD9CwDtEoUn7zE3kVZ1r6Kjan27aEzzM7m6rDpCYcKkD56GbWux4A6Tcsu6apymJTAsDie38Y2LB21Ka",
  "key12": "3TxyAQumywMMGk86jMdSt5fVvVwNC3MFiPSe3eEm6kUKiUAFrggXQGzajT2VQqgio3C9Fr429jVfca3sAhhEjoR9",
  "key13": "22kRyAraGGM1YpjfWXnnm9KPoixT4K8WbaYXdwyHw2yEWEZEaCaYBzn1Sh6CjEwvMffdQ4roFveFichqnoBtbfNY",
  "key14": "3ixjhr1Xt1Cxogra9HU9d57yx9SHyDXqTTCBeebhnwUwdVn3Ufdtc8oyRasDZvRpfbZdoLMHgNcpMZjQFVikjBmj",
  "key15": "4FGb8EyBD3hqYS6F28fdyK8ohpyqy7RQdaofSWsQ2hUKPURTaynqbwxoZR9AC9b4wphHFEayKAJz7xwmZxFkWRzK",
  "key16": "d5bD48dSkpnnv3ZyKZZX1Muzo1m93iD9bqE1AATY16HApZXeM5SVeMNfjtnguYTvrgggzSpctqbbtXTFGArN8x5",
  "key17": "5q7LLDegVEAkoB5aEvXNzz7ghzSkifn5F44GWYMaK5w3aK2mQH1xoKZrFUuyYWBBfcFZSa9FPgrCQDCwmh4pvFw6",
  "key18": "3DKG855gVj6dR4Q7oJRsCFbkXntoKgDkgAF8U9NxEyfWBdo3QEVkxCSXEfi7PNyUbYgSsYuJw1TbKsutMc5xK8xc",
  "key19": "2nzV7DwCypvyW9cTyzhcwmuC6CZrmZFxBjDtQXChJwfaXS9L8pXsGXco5uwL1gv5K39xvm7zggWEU4BVHQAFxdHP",
  "key20": "5Q2TuBrw6VNGgxXch99oSwrqfb8Aa21M74qhdQSxt47z86wdsSCb58EdCzVjn3nZsQpxCsZfGkL4eR5RXvu7A8ph",
  "key21": "3yCjCBkC3bJ2fFhdXUJVHDkVoZnXojcLEbG5zEUk4FB6w4JR2PfAaR4JSchuKBFsNStbsnaJhNQDP2BxbN9sNTgY",
  "key22": "xYQvpgj4TDpaz4cmLJrhqHHYKuR4Qt7M7b6spMecmKuiHL1wt23mjntFfmEbx3SbcfGnGjceCcWutK8iP6v82tk",
  "key23": "fLhfEWxC1C7mS4sHSaiCN9QQ28kqY5QwyKGSBw44m8oy5Vi97WgYp9EtTF4ucuQsaJhmgpV7A8Ra143VMcre4ap",
  "key24": "44gJuo489wRJTfuBzfTn1oq9sgkChWdRQmtkbm3RkS9iR1Snat5tpNWrqWYmDEbyfkzKTXZnZr2jnFPUG9bt7SjW",
  "key25": "2nznJ8v1w1NmP7qexbNKGi16eQXD8Yuyenui2hoskBLY2CUBDAEaeSXCv294xct8FTcen3HWaDuywDUUqTvtbDUG",
  "key26": "UGJKbw2SmPbHHaSXPb1DJjDU2to3wYvfw39BU38JuXBaGPPgkA64pwYFBhZa3oP33uusH6Kam6sP9r3LTUgLKkf",
  "key27": "5mN9vhKRqvkDShTAmgv2ADRdphJhdRd4oLwscgcRcBmR5VjQkkG1bGYr8qSTuEvm8DcdWgXu5rkfKRXrKExLoXdB"
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
