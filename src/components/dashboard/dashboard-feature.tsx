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
    "34bbK89aPwnBvm9FXnzquUVrsf66apvK5de1owN76sqe61Rnco6qHUDo39YNJ1ascm6bgpkuLbpcohCrR6aSnSyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "249GZ58EzodWhWyzWDpRHSMgRRJTgsxkXVr7si6jzfcbFivDAyGgdG9L3WrG1sHqTyWnqvc3XK85X9XZNa9c77TL",
  "key1": "2Wwg2H5AN5zaidWN54UG1pWZQh3iy9259RbYPSK3VDPrP9r2YAxM6xYefJkXmouK3wsgNi8yDhG8qM2xdFCkw3yv",
  "key2": "3cYyjWAd6Q9EuCPjjQZHoV6ZS9SPT7WMaZT2Q7Pg9SdGCPinNokvPKc2ZvpHXCRcFuoW4VfbwaYQiFN2JeDF1uoe",
  "key3": "3odojwNhRVHxVEiiDVYjVUF5u1bb6ZzCbYNLXED5JdYK2Vg7RWordeexyKVanub1op97ngkAKbdbeLjRpqzMPwiN",
  "key4": "2VznNfamppeZuJQrKveqhyD6LmyTjKSPxt17a1deKtR15paUNS8sULjh6T9KQVsWKRQg7aPZQYo8WHN71PyryB16",
  "key5": "2gifxj3Rej9ihSj4jLbNreh1k3PF5CDKJcSQowkfjzKxG6RZJ96j9QrnL57Ja2A3aW9RmUqucTJsbkh5TjWD3cdk",
  "key6": "416bPLDCgY9n4ehDKsvGX1iLhWqAqkwY9YpRp7HLq4EY1aVBBT8s9ewuZ9nNwr366qWdrt7jJr8qrYJmEQKhBU6m",
  "key7": "3JgcqdkgNhg3u5EEzudGaSGruKoHrsxpBKZTUC5TuwCPQWEyhVxehgBd2QwhW5sjMGScFYring38cFHSnXpMQEXh",
  "key8": "47W8pD6hbNiexJ5txXm5eoy7SWNwBdLnTdcdNqH6GjaVmRYftLmBTXr5BaQzLC1s3qFFLb9gvsxFLPcU3EavwzWp",
  "key9": "5MqHhEqHNC1LitXydEBVr6CLBAq5hYWm7p5Cs2pAjZ7nqC5XdLwTZBJiRWoPz7JHBgFjTvhCKGuiQXoDUj9NgspH",
  "key10": "43WEGKb9UvCBDCnGqEq8zZsATAHz2a8ajsqnNGxLPinoQEFb28RLszPuLj6snGfJRtb8w4SrsrEGjBds3rd3Dnr4",
  "key11": "427s21zRxHe9fLFnB2nHpV9XQVyL7G5JUohGwkGPii9cZVtQgar5eHXk753wr3D81efp8ZMawKWdKzdo5nQtgkRm",
  "key12": "4np7UbTMZ3fnZeX5cHfkzgsHaB2NPigkc9dTSKLZ8voR5179vq6KZF4ySV7FTPPhS9R6a4FSxNasq3b6Kt4xTGUq",
  "key13": "2Za1jADSKz2q3o1iVhDghve8Pr9FxiboEfaYuufYdnfMDusRXfskBWqxSVZvPaazb1Le2guY6XuCyQ31MVsBehMY",
  "key14": "3gtTYjQQr7fCdZSMiaKW7UdkW5a8DBWgygG68nkMqAJnjopRmmTXy8x8RiR13Xj4UoK4eoNjgM9B5j9JhaqYcvAA",
  "key15": "rf5Nc9mjZw5U95Sp3wAjwUb2RAEkk9ahCLFRCfNYrJER2B8SJFfvtELW19hd6GtZAUqRBjtL9QDw1fVDYt4skhZ",
  "key16": "4y3wjsASx2xJunvWMkpDoSfBRmHP8jquSvykneyqNC5xda4mQ9w3jriAKVqK1P63ApQ9FpNg8yGSUVT8HRuDwfJG",
  "key17": "44D6tUftK8wjWCQuGyoZnQwyp7nH2ABCuWWpHYE6j6oufAB1BMv9DUak3azzgAC2bVtymvrRxEJaZW7wcU26XbyN",
  "key18": "4gANYmbqN7dL1EkNKYAnT55ExF4EifRij5UWeBvRyuffkHR4p4VWWPQ2cVRm7h2PP2ViwCnwZs3P8jqXXv5x9ZBW",
  "key19": "54UdaywqtB9JjBoW2TPovpE1KGBLaAnAy6gQNGfyCTgNxshqCBUh3CCTUw8QrzPNdcLkHAeJybBYDJDr6dhfVZnJ",
  "key20": "4bwx3v6Jk2SDGajqpHRmygXScwn7pUi9L59yznCJd3JumQwUWb9op6NggxoRrpFdFkidX2vGWaSn4nS3dz9nov2j",
  "key21": "x747GY3oTs7PWHGQPrZFbXAVamzYCoVZdRrD1qakiiSL6wPi2jGk5Z7MsZceK1c4w4Jgxne5PvYtLDaYmRvVG3U",
  "key22": "51nnTvZ1qdXgwsyr4ak5iSVMPGQczL5XCmjDtP8Jq33kutghcjjmdWwCQSXvjVhfujXktUsZKTKoGonNKaoC9ct1",
  "key23": "gYjF7v8GaNmghF64ttvWe56DXr41dNnUW7VqzFFfhxFEFvbHYXVUP88b8qxv4VGG6raHhiT7zGax9FTsAdksvgs",
  "key24": "5wRk4wjX75KiSALPVJsu81YCRcGBJ1R9YhQFKSKFaHBZADK6NEaKW82LDcScLBQMwvKF5pPZcTm4Ujvnb3hxviHa",
  "key25": "2gQsAoyDWDih76EyosHLVYgiLrXwVcy19nDRB93xqF5EoZSRJQSr8xsvxFLU3CHe94TAmPUN1LMmwySy9rMGbKBo",
  "key26": "V5QmxwHUE95HWi4KqsmRxL4PATnqrXV25ytiT7niE7M1trNz9LN6RoCw6yHCymAWBbUDhJg3RGNY2tyX5GZ9ZWx",
  "key27": "CHffsVRyCS9f8kSc6d2TmwMLT2XR6xqWDNMZazugyJMxYnEKaMcZjYZoWEvqxfRopZ4zQrvZYLDeTHVTC3aadTS",
  "key28": "3M9h5F6SNT7qyXyLdE2ikGbTyoZ5gZiurFGfgBpKyccHBPrkCQhQFjy8UdgEFg65TA5feDKH9T8xmNMz3tbLLxQe",
  "key29": "2ZNoQUzHnzRkpBoNZdLuNw53q5UZMrKPKqe8ESGsSfJDrBunvvPHfaQLsKrbo9GP7aa5qbTqrZre6jX1dTFmAb2A",
  "key30": "z8ZehehSNR17BGpKWKzBM3m43KuoHsWpStTMDMevByUyDt8u8hxb7JSVv4UZSQjQ5Ucjm2ocnggk8qL61T65NAV",
  "key31": "5Mt5cajZBKtk6V6aGq7xExeNZAUXUm4QA6pgiX1rgFnZAjSFQA4kxAxWoMndvjL5sBFQdFqnKfa9buQBiyEHSUyc"
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
