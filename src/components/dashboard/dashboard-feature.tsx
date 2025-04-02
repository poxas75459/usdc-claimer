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
    "1W6q3k2czKDXeMSjx3C2x7yW9a8q4ybq1XRnYjtPGuFVcFsoUoHSPmdxyQzVuS9r6P7m8vyHXLQwaVn8jRzZnfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fJ4fivamwZ1kzzeiQDbRY7RfFE9G2RMNHinf3YKsoBX4QZVGz9uwVYLUcMn2fLJ2tX2kMgQfomAToDVJ1aDHttb",
  "key1": "5YPh83pw7bdaoaFynDf7hfBkYzo8uxaE7sYYHSX4GFmA1kQLHeno4RGRs6snQZYRwkT8iheeLZaNUxfvaNE9hkpV",
  "key2": "wLjU9YsTzcuYygiVoJ4bLXEPBtikhv3SinySeaxoBsuBNGqUxuZqhjX6MWF4NDoHEMJsPVfZueVJtPnCtdwTZeD",
  "key3": "3EK4B3aHenY9BySVxguttdTv5FPMjmLa4ULfAn5my6Hxgy9YzMjA4nvJA2Tt56oqp9U9TLMyQwC3Wv8pMHjQjjeg",
  "key4": "uCvSyioD3BT2jDtWkv8GiPzELkz3gPkerfYLwBhcFmLtVv2VXBdLLBwPQK8c45Hk7ZCuv7mkTiQLNFZ3Q9KuLc6",
  "key5": "5ZD1rNNGufStsNnxFFou2Pr4nXqyGaKce3i9Yw6TAzd7LnhQiBMxgerppKncdGP6QXtdPZaFRaNPBq9zgWJpPWnz",
  "key6": "5pPJr7VyjVEMveVLyPCs2N6Gx7X7C6AvmvF4Psu7eckgz1k5fL66joUVh4xNSDQ6ywLK3Cm6uYaZQaS1fvppFcpt",
  "key7": "3VpYDYU1xt2yGUjtWTw94p5kTHeffDAYhcxJZgPBgMZpg5WGfhG1UzmqBAno8KKq7cQhZTgSTJ1ggWpBMZy3JkGu",
  "key8": "5nuaLzepjQetj2hxDSfJPG54n6k4R2LUgR8RwrnLurYDThY88yAo6eXttTptqkUrbqovbKA8jkuhfqBUQwFVrfFV",
  "key9": "FRBGC2SN4TaFVYT9jqq8QvKBnznpKvmQAyPQPGe87maerQrHLZa3ePrmcux3ZAJhd8juap5zA873Qv7VE7Ls9YV",
  "key10": "5m8LUwiSGsng84h1iHJ8cnZVwtizGTwrSzD8Mzmxu6sNYW1bEunHUW8sH4EPUHEhRc28FGmjiupeTxsA7AvmpkHE",
  "key11": "57iEm953DLKw6TAGNMZz2ostkPk3yukLJvn6gQTR25CgfACBBbAoY8VkaL5L8mFbX177xUQc4NBSWMqcmmrdatRK",
  "key12": "3Gb9wmmW6cRhsEgegdDDT7Xd9jQvYXLTLVND9oTyuz1kTiDEVek6q7G46M9XLWkq8wntxfEebJ15vcGHKx8gGEos",
  "key13": "UgceZgE4U9cBb6y4Nv9BLEAs1wmzSxve3B53tCDNs5YxxcPNMfuk7fjZhSgAsCs2YC14VtCqb9Wpj12dMtnkZq9",
  "key14": "4awk3xBr2TRP5FrQy12GzWNqMG6gGuofmbE3iH3teo23PkgCVPSeibDypP72yp8Hff5AztJP8pGXeT1cBiGNERu7",
  "key15": "vggQtWgtvEHK81wAxy8zHqB4TKyRDU2DPdoWSb8y7z5iz9b6oQwJXqaw5ckXwDHoRAowa3ZmUY25jn9LqX2Cb5A",
  "key16": "66KpNuZEoTt1LCYXRfQW8AgZbUi8ochv3v8XQsjiYHgbDqQehuVyRc3o9WQpnn1Xp8vXzivCUAVJcyrE3uL1peX1",
  "key17": "2CvxVBaXeM4Sg464uNdSdwNmCRkQv3HMiFmzXCw9XeNFzBPvYRJrkcc5G9WAtpLWCXE6FTG1iEWaxQT1RYhn8Jrt",
  "key18": "2hNodi8TDc1XWzEwKdTjudCu1YYUPrB4FZ9aDTztSsPSJ8xaKUaABqd16KPfZLb76rHvFYavKLzjHEt3vB47ufqR",
  "key19": "WdE381ypztSqaqUQUVTrkbNboXyu2KE3XVwaAC3GT9yJAAXwhRpLBYgreAUtss3tF57ZcNQqgmzm3hjA98av18b",
  "key20": "5UcgoU6ZBWA7Y5cmnj63xbtBYEW76yQ4pLSuqQtGX8E1gnn5BuHZKhy3Krkx6or46d2uERHouYXEZvP5E4KSzYus",
  "key21": "3nit3NBWBpLGbwHJaWsDRUaJfsb9J5z4CxeWkwfYL996cnWgYzChLBxAns9bZHoNNR6ri5UJ7F6jxFgsvyaf2KV1",
  "key22": "2miBxGfSYP3g5tNqovPKi6aK9Da3zgHZojTQkwmM7iV27YaiQ9QZgYjLRr8BKxWqYza5Qak6qkLcF4kZwhBoKM2r",
  "key23": "49H5jbr3VsGh1DTncsHiFYTHt8iYrooLrQ6FWQxUjBZ2SBJUc3diKAZeEphpveCvM5AZ1PLy2wsve66e7XrFTqHU",
  "key24": "baNMh86sA4ry8quF15cks1ZftPekYV1QZXeGmeTK76Z6UcwnXPCSsGzYTh3y6GFZ9Bg7uiWdysX9k95QargbcTo",
  "key25": "5fGR8NT9u6gkkzsQQqBF1ofg3UfaP5MAk3dzxNRGXCp9mf29vY7uKcfdNvDUheu2Daf7BjtP4Wa2R6rTgsCiTVEQ",
  "key26": "2DMwKj7nVz2P9RjtzPipmaM1t1vYj1F5i6AUspnPq4krbTXM3yayvBquPc4w9F8nC7vMwLkhWfARwKPXBBGhDMDw",
  "key27": "8AzyvGEDVCJGfSV9M6GsijAhX1QxaEzg25QMdsb5WKjUMBvo4BySxhNYm94xrZhGW55aBYcNejqSkpSMHHDaMdz",
  "key28": "49jtaYUTDa3BJvQ1C53jPVeFssr7UPjaU8APRPgry3NAg8NykAUjMGdgNNMThjXJnxZ8ncps3R7QsNV2qs6ErjNz"
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
