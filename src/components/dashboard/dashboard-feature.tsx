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
    "G9oaHgg12eoGafKopyxe7e19pMfRq8dWyBB2hZ6gmwunPvbQ6WVJX3WMSvZBp8ZTiEyGAi617XtncGPcX8pXEaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tZd6qhek4DotTHzNGJbuqcWDD6puHT69kcjQRygNs7LQpRE9g22BU6eJMCjCPYHFBhqLCMExBQ7Tet6KcVsZir1",
  "key1": "3igeQ74QZ3bWpCmxQJVqTfzBuoLQqNaY6MWubhMm7HfrGyic5q7JXA3jXDnu4UcAJd9GDwM2EmXzADirGFzfVNUm",
  "key2": "rxyF9mvLuxhrAJKaKGCUPFADEf3FKHXcr47m9hdLNWMGeaK227xLJdXaob6Rr8YSNPFSQSAEoDi2ViDSJ6aB3cu",
  "key3": "5a3ZYY2JQNDyU2FascQTGXw9mzJ4tw8KX5AhwJHNZEzhsPHJPYbUgLLFcJWTVz5P6GvjaF7iG59L4HMJM6MmE4XZ",
  "key4": "4UhyEzeDEfj4z7TciH957seLEVzL75RL1ucQY8wVdmkKWWWaCHEEK25WZ3D5yQcTwVmFfvP2WT3LnKcLLt7yxMzC",
  "key5": "2apAAS7cwNdkSXix2bcT5mXWgZT7CvWdzBuoJYxzDKBT1s9QoH2yqEYZoX5WbNp4oZm1hpzvdaTiUcGSE9nMtDWK",
  "key6": "4n1ZCfob27rpXTmbZdjtbyCqe1M16e2TyeW9mVbPfXj6e2h6A2CH2LkN2J9rk7LuEgcoLtPFTiV6EQZgWcZnjfZv",
  "key7": "5uUnqVkprypBbQtr3RCPBwdf6NhG2eW9wBdT9cTpVoXfQReXqFXewjWjZxw7BbcgnB3C6f9uVjMYYFffZVh2WXG8",
  "key8": "5JogLoXPj81nAqLMDsvSfmDQcSY5GQA3jWUg1yS1g8MGeaaS7Vdq45oyQ7M1BFM5BBGZCdNFw8D6RqyPZ4diQLyw",
  "key9": "v7cMfHDYacYiy1SF1ZRFXysqUWJJuj71y7PedUeexV5YerSiH6SETs38cPgHDCeqs94n9cDk1p93Frj3NNkmTy6",
  "key10": "4ccEYguggg6yhNoRg6QMkEbtx8F2qwYaAW72jj7LuEZqGR5iUfyg58FAmcpAdoA5WLgGDmbac4ALqDvi9nhQP65H",
  "key11": "5R9ZmTb7jThm1TMDBX49U8Y3Lh4xnAixVWsXJFiLYsnYRhLw7FGMvuk7snZESqF1upbkLqMA2pZbNfuZMHXzqWGj",
  "key12": "4A7WhEomFJimLswER7GzDErZJPvpCCMSMSz3zYmNJ7dQRM9XWsp89WHEYESFoqtamycuNG1JqApkAhrgGZuchfMZ",
  "key13": "5q9QHbdvSqLNS3WBGk5nRMuwoXHTbskMEevuDpxtvF1eM7FbLb2jp17p5zbJLyHxcgmKcrqumk9fzLj9hRGig8m1",
  "key14": "4zWT5TWqKk8rv8USqc9RjwrqqCjBdNEUdRr9ESqNSadD8H7fTHoMqkmc65jbEdgoc6rHwNeGnizJ9KfpynUnf2rB",
  "key15": "2mtF9UoxSuL2dn37JZkKxGjE483yKZeB8kCnAdb858QuhCiWYZkQ9FBpH5BJvhWFDGRpWwWTyfFWU7jvnfdKJ52R",
  "key16": "5pjSHyBMGG3kZAvy4P4GWoVqqS7U8UfjrCMSGt3ZuPFA5VZXNpde2i7qHNJX253fge97sjbC9zUFSkbh8a7Wh7ay",
  "key17": "3avWGZd5PBAC2cYoSrnMemT6mnkxLGFYE3N83sevehVArT1hRtkAHTZ1uycZsunpNxZXpH3Sey2Vtx4GqctQrwBy",
  "key18": "4MgTjtYu8Hbh9xFYyfSLQvwNYNBHfVEGo4mUSZhwhUH6igD1QZ4uTSvhBQo4U9xqLecWzsVc9WdC98o7Ra8FzQ1w",
  "key19": "37yvENQtreo7sAjvu9rMnaZGpneLduS4Sc6DtFoYYC7sxZKrm63kEd5Nm5Rq2eikPNWNvDHppyjV1ggF8nkByzmf",
  "key20": "55xbobzaBdPVkBdJHxytemYr6b1QKHbgXG6Dwshv727FwNDXqynwG1td3NgLvGwL3tQfnmDPTp7sS49wexctppaW",
  "key21": "4CXTeNvEpj7VQbK1ThSAW8zHorbh9YpDLRS6fyNxXrxtxB1s3m1Rsz4CraDHJboj3kzYWR3ib91Q6WdRXcPmstN2",
  "key22": "4jHgjD5oaHQjqaAwmbBKcrnKsRS6SVVt7hXRkGwxkN7kpaNZNnv6W1JjdMQxVsGKFC3AgEyuet64akZWHnjPRsQj",
  "key23": "RtRcGbnMqtSuQHnS8coPwapMeWmkt2V9egXmUavLBa6JpY3bmLW1GTRtwFGsLhTtwd21EwSbC4XweFfRq7V1rW5",
  "key24": "2qmXygNc5bTGC2V9tFU6aFU2pvLksveumvdBRb2Xr1zyfRhDvfaQFEZKzCzzZ2LhJypwSQ8WSj9ioKkbUmpyuzFQ",
  "key25": "mJoREjwXJwfHDBG7TfdFShQVBnedfjGfBNELfZQXMN64mJsNCeivyuNCJw9sQNnNKY2TAJiCSxPCa7i6qj5yjwB"
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
