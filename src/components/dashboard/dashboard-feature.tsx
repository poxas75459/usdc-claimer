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
    "3LihsUdg2zeNdZABos4ksTXNSnAi38ASWao7UHpE3o1gvDPQjEiiwqEdZXiWLmfzQrYHhkDNsNHVLYvMrqoREPr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sLwXj3LZJovZE6ggxeQyKX3uoF76Xc7rvc32SZjehfte7XotxpDFPP9sQFWsHLRyqjYk9fottTPVksbyc6N2ar8",
  "key1": "5D3gYvSNgD3jHVX9zNwy9sFxXjRXCxJY93AgDaH9BBzusW3ieRYavmn6qauZbtZ7Xf4vqRqkKQfCwyrbSdjfNxdq",
  "key2": "2nyHPiHhjrZDpYKvCf9NbSCu9axMCM8p1MqhKtFNH3YZ4ok6uvphduBVu9f7gggxYEpihYo4Psu2SrfWPXZb7qeQ",
  "key3": "31Ka5A4RemNBs3iFWaaxhsA9QRXuNwFGDLiJCX2zjcGzC1ujTqf8VsPswatb94bVvJyGGS9Dr17aQzPVgRCs4Qow",
  "key4": "2QMNuX4s9b1bw7Ga1TcSptFL2m1RZ79LU9kxhDUV3dsPHuJBgTzRV4jVECaBNLzfnQarHhdz15dyr7GR6dzHAxJg",
  "key5": "5ZmKn6koKPZt8m2CZuyH94SissjCyRzdnG9dPAUnagj1XCHzHe4NGy1z57r177rQUCtHQBgigPxqS88C86N6igLw",
  "key6": "3kcPR6r71Z13CyAywKFyPGmfD6X8KUGpeWAuvcsRHyvwES6DFDVzmJqHnc3mCtUeWwDPk9XPPFAxwEHmXbNfW3WD",
  "key7": "3Qu4aNrJqdc7JJSMzjE7QXm8pBUccTyXD6CCaBHSnxYuzVEw8CefqeJztf2kkUMZ3zLonMMnjSmRfWDrczeJ3Ynj",
  "key8": "2ctvGqs847qYZD7QSqJXdBm43KsNg2PsJgkLFvmVsXen63iMqgL6tdrGFvQ4jCxrmh2yusGyAXpwgvwDC9Uyqq6e",
  "key9": "3iHo2P8gpoiWT7tMQHh3XBsHHUvw3f5A5JnG5eWFuqS1Uepk4kuT7SJWhCuXp1EwftwZPC4RTe8w77UvLHpespjY",
  "key10": "64gfsxA36MHcvXF5MquBCx2dgZFmzMTHqNrZ6vNL9nHFAZ4VpzWAGGGm7Nm2E2rBZskVh8bJae5bGYDdgXJVGgGw",
  "key11": "4E1X4WvkRPPbvmEjEDhE62Cj6UcQKL2gfvVDQiG7etDBUvmDcCvfStzSYzTa1vowPtqiZWZHYHW2rGmZ2irdkaUs",
  "key12": "RBSJRkEYsZGhC4HG5EJHbPG4rJ1gJdRV7p9hZMHehARNEGB8U7Rf35VtQhYkfgSBagfeFLCgwQksoGMvosKmyL5",
  "key13": "3gQqKZUMfyFUEBScFV73jT7my2VcmoiANHj924n2jbPmSHpK5TzSsGZ27KkK73nCNK3eovRtDKWLpmT7Eyye8RZv",
  "key14": "2DWAfHWqBDXViQkC39d15AT3kHxxzFRXuBAKR7f3BSUYCMWTEbPZDYYoJMqGjrFkQaEUrw3k5RKmqdcjXr2tSxcw",
  "key15": "5phoqxvx4soCTUeTEfx9SinYbmX6qE6PKqbfCAUBPFMNf7QPMvb1voQK8yCzMSYyTwfHuoSGecRwYBKyffVwYCGK",
  "key16": "2LtZJWdQcSk5LKBGNC5FCU2L5iNqANwmpZFqsjMDBxvUe1vvabbGDRSZRxHTiJ55XbGHciQYyebzP18HNb5uNGgj",
  "key17": "rcfQ3KD3bH1F6kzEYXq9F6JNdXjDkFsSC7KcATwFMFGTVd6Y75pxydzVFXvc39wa48EdwxkWrkizQjyUVUjfbf7",
  "key18": "4o5oqUyHjLzrbtAYSwz77wjSvvoodWe2BLVt3gYBPHjBGU7tiRLewJAMynAgcfuyaTybHbjJAhiFN6bPFfnXeWri",
  "key19": "ADf97Q1bZ76JwhLj8DmpnUbBYz6nmgDNrY8qpgRymqPqejPKJD4fvcqvsXiPu2iHDKqR1si6JUhs9hRg6U93jMJ",
  "key20": "4fxNbwmUm7EACUK2Vmt1Avu3ti8VRJ5V231gB1cEN85meFGFHj38a8mXcLEmmDcXDuMqQcb1YnaeScQAFCb4TvVr",
  "key21": "5X7GzfMxAqBpXgaxYAovKf6RZdUgn4XGiC4v6V6VcyUWA7dKHWTEAwipJhtKa7E7P9mtguBs7eYJa1sd7yzMtQsw",
  "key22": "2VjdKobDzg6DpEMANzBGhUWCcZNQ5bbPZ2zi6Qj3RMfJDVkSCx9wpTwnBDXNyFU5749EN3HUJAWnpMpvpHfKVMCj",
  "key23": "SFyxkzNKjrnKNFweQdLroNS8uEibX7aJyfCZbh45Bz8jtV2ZUNLk7ax3rVxDNHvKzN9GBqevCqCPLduXBAtgJXG",
  "key24": "3g444BVCrhCvXAkRNvQQeR56YPyN6NVrg2bd3fJzD37GjEtBdK2SNoQFU68UxEtsnRzmkzuexQdDHGr3DD68Rbep"
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
