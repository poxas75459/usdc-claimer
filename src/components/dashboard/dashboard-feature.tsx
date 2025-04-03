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
    "2LrE71uq6vAXQ36L5tMgZj6SdaUnYejuomWfeZqUTfDa7TaYzVvBYxy5USRe7jirU6QG23aj552M85LrTmgpJuMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s35t4BQrYRApGURodXFgeMhxZ1WyjkbWBU7bAZXd1Y3UbcUuDZjLbsU2Eur16rinEGNaqbQonSNUhP2bAQAyUQu",
  "key1": "2JNFEfqZdKxEqxVeBFbERqe3kMdqhsDiWzidSYmhSBqJo7o3oUxw6S6nHjW1dtX5QPepeGKcP5AHFTM6pecTxZc6",
  "key2": "536vRqjPP5vSs6jt4owa1ArmqU9sf6L1gf3oZmNG8zS1CdvjsQ7zLg7CYettZtHUgQbgES4zAnmm4ABV7YdGcJLi",
  "key3": "8R8uUiJ5rEhpzNc8BqweTR2tSwFG244EafBRVrS81M4RdyaGsVpZzeKrbRQNLjCH1b9EQPftk5nZb91heZ7SVQR",
  "key4": "5cZw4KDkVRh37MnPPC3tQ8WNx5BsobFmgK8odxE5xa6QMs2TVYUN5gTErUyqHXz8wps8k2eCykAzncc2x6Fb3eKC",
  "key5": "2TwogmCZhjXwRUhZS2trcXaNipYbuQxMXSHRqQq8dRXTsp8mQzBbTLF4ArY5iwDADDVGfhz6S8GHZ13NdxgZtFY1",
  "key6": "3cPV8JuzJTUGrJWbJCy67A2D9pzbBQCiVFHQYYXzLnko4Ji41LDZV5oi6Aii2EVL8z3x14GB6gjzyuJxE5U2zjwi",
  "key7": "5GTUtat78a1jdirzTCCyW2wk1BuRjdbH6Ng3D2maxY2fiMkrC5wJRPrDV2QDcn8nUTQNSgwsUjGPAp7xkNoonVFB",
  "key8": "4hxLDiiuTA59UzKgxXMb6MHj7HKiDZ29mDrAErxhaxEdgFXdyXFUbE5LysNz2mErty4VKVinXsVh6yVHTWkzXcR6",
  "key9": "2z2i82yDFY8pDJZDJ3WqMxrvMNTJeMq4ozNun7TEi43hhx5sZ3VpU2mFCU83RhMj9sHec84vGdAuanKdHp8CMizs",
  "key10": "wks87Qkz91skr4s3kFNQyZecunakcjQ9G1gyQ3RMzJHp5iHtaiDetvcKgvV6Q1ehiEp5nGavQd3yns1i6QPfqP6",
  "key11": "2bKSkz6D2CwjwMGwaJR5nKcfD5yw5w393fBYWA9xoDeuxKCys5TQR8prXsBCW8t5V8Fmsq4ALWurhtNMgEGMEm3b",
  "key12": "4vtrajR6qFVaNWXFmRZrY9StEe8UzojmGCYoGpphcAZ1hwEim6vermiJ3wE4e4eK9uudxVGiVjWpyZL3NXPR1ttY",
  "key13": "2UMq3HHAvhcRXa5DevWTYJZ2hQxPgCoK4hPCwYv4CyAMyzkFWaT2rQKfGKwZBJzDnoy4EcHeCndMv41WcurdNJFy",
  "key14": "44DjNqsN7qSCThzRxc5F9xDytBMiPgJQmepyrwKVx1VjGdn2AJDshnLLT2cVLzpA1CAanvPYWjvrXonxwCVigtoT",
  "key15": "47foLkSPRNfP8WPpYw2ExwGLmWZUciSF3wgpMgKiVB1yZPawGbRNAhi6UW2BQtiACCp8EbJw1EgqRCCLgvJwobw5",
  "key16": "3Jat64wcGht2aEJXdZs3V6gywkqk8CzQKH7dfAonHujj2JL86peQXAouAVjgZopSUX3uWeiDhJ1o5RrtkQqepUwM",
  "key17": "4W4fjPoZS6Rwep3Y58vpg82gaQtg4G3wi3LwdaiLzDiVddaPhNn2wc3Nt53FP5TUaCTEh364PPSBqa85NuvTJKs6",
  "key18": "42fxsjY7bdLfkpdTLeod3fr3UeGf6PD1ye8kCdRh8JkY82e4QUtUvTL5DHM5nBjgZ5eciAMde4bGz56HQLY5ZQK8",
  "key19": "3tuX5BUmPHBvsjosrbWCjoig4FoXgfu9aDycE8k7MUYYviGD8xKCmTsvNjBhZNuDBCxnEVrycc776E4YCRRceC3Q",
  "key20": "2nC35mXn3efw31Df1jiFVN2dBz6MkSBNseTJrQub2UjZ3KKJevPKqFHqZWSmD2U9Q6xukufmXR5MPwbWBZkgcxGG",
  "key21": "EfEyj3Zs7k38C4VTSZgWWL47tixjxANis5gJADnEhT3hxLh5PqBTUZc7xqq1m5mjqtua8jc895MnK4y5CQv7iWw",
  "key22": "4agsfPB4q5x5u8s1k7a5UkGm2xSYjTg6i2hAL3sFcjf6ZCQLspwWTJ3NDXGZQMazaE2iqVBi5KKj3GpYkaUbZ4P",
  "key23": "47tPYtaM2YDLEvNocnJWiHW4eejYedhJFbUzP5baD6HECp9wHGEvy2Mvrj5Mxk8U2s9MRbBhXLuT7EybTsqbxgoU",
  "key24": "KwmmCsxWtNxZgrsvcHrnEFzq61P7cCd8dPaaSGu67qbNfPiLCvibgmdnKQHdgohk6Sgzog1V9Y4Xv9VXVV2GxBS",
  "key25": "2gv99GzBNup34cdBaRj5ThF5CXuHRtwp7byeT42avJnm9eZYFbXktC9cuGdUHNa5q5gUU9vSxyzSLv3ugbAw4y1n",
  "key26": "3Bzn7suJqLgWZkDS946HEzZdA2RWpcRwHiMEJyhVN857wBiL6esxZ85sRpLLaeSQ8FxWYcRPqTZDgkiDo28CHbwX",
  "key27": "QPttEGUcbWmnb5PjAXXvGESzdTacqJGM34YsAiC8jn5vEVpS2DyU8rYyPdxpDKf8bA5paTsX8CXT5pKekHPKWhr",
  "key28": "4QW8huy9MWGEKUoS6DTDTMinkDZB7senooU4Ra9BZsv6GALK9nD13ddFwNqfidHofMKv4GvPppzf1BVqRpM6kHhF"
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
