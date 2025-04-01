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
    "3MuW6X9zNb26YZq4L26UPtgyDUXLrT3AyFRpkfjTTU1dFTjSWYiP1T7ivvKohYtYGrwRiGDxMJiB27UJuNNitFPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vG7j3ZqjPYgKvKB7qggZo2kbmf6jNhNmQRrmRxmxoDH9GWxRGNmTkztFKtQzCjSrTXLrzGVdkDiUJw2hYEuzbVT",
  "key1": "FVApKjvZrqs7h8DK319WofergGPXYa3KrPekpM1Mc8p3Y4xaXTGQN2kLHFiXPKhy3UCsHDssVBm87oJKEfSCC1j",
  "key2": "3EwUVNQaAxo9KtYohJ2xk8eNz8zSWzTChwsZHhv5vfk7sJhu6zg9oMU2tUTyYfn5WZVsPqp8J3qZrGAHgeTqErNn",
  "key3": "4NWgCzn5gCZAxmYsxRKZ57LvVAksGpDHLkCFbyPQNeLwU1VeZq9dhSWf8QVkubkEwoGeivBiiAvvha8MVh3s2X9Q",
  "key4": "36PEtytgTmWsFWYAP5DV8nu6wtN42PswDvz8H4Uc9EDraWEKYToaxwCiQTJHGVADJkiRw1Cfazxw1KY6hBuncCjv",
  "key5": "5ynAsapaka6vYGoC7vNzEK9aNdS36vGmZoQzFtDmjkwr5rWbAWdXhrA7LBToPjKqG7cMW33p2SXyLUQ18bYaHz9n",
  "key6": "2XzLFstNeWBTiFrBav6mzTZrKCERvtUiDFGRy94YHQS8qciDnrkfcpegdNGG6AD5YPW4gKw4TDqvqWhBKW9nSXQD",
  "key7": "44kqHaLU25hpX5s5yRu27Vo2pFdhW2CdB2sT2XvyhDaBi2ahGsWEZt6NjyYxmYcQaZoonTSffVEb5dehBSAWYuHr",
  "key8": "5aNKJUApvF3Vz5HzBRzy7mUtYbaTMThXdMCT5X6ymwpJNsvD9j4Xjj9WKcJV5C2mgeCqoYDB2gGe9UQTe3wHzQz8",
  "key9": "4AsNXsdZj8hNUKAGKi9hV9napiAwK8EsJcfjs8Y1KUqRWGqfPJQrqDDbaxrN1MkM8yUwjZMLhcsaPt5vnSgtA7Vh",
  "key10": "2ULS5oB1if8N1VgcxBAiCJGcbHC98McZpvCD26V3eeSeAY5dU3WGNtLe1NTWG1SFUz4DDeyGP1DLr87QDSX5r7Hy",
  "key11": "3sNNG7RBJm7BpLuTFEPrQL9Sr3LGSR8JopctNSS5B2SH3rY4KFc5KwVrcgHptjzCPVNkFkB5kwHvV1ZSBCfYGegR",
  "key12": "3mbqU9CDcQPHd75gJE5KabzPb757DDA4fRTVqdJrs1Yctbe74uEvutjFwXuqp6BAqddDKM5HeDnkiDUtrpqmW7UW",
  "key13": "3czvHFJS7PDvDB67PixxNxBAQgXcsaK6AJkVgRNnit6rMk1Ko9CYyF5hS1wntGBdM36FvLFBnQQeB2VGGbgwPLAt",
  "key14": "5TtAeMV2W1hSeWB1ipR7GFm4JtBG2YL34eazQzyfLVbKxVoTXM38PF75srJY8wnwQ6RCV8ESboBRJpbRy2zKSgBj",
  "key15": "5pVYcXAUtLXc1Up5z3T2Te9cNXd1z7MArcNBaVVEfPzC11H2C9zsWVUWbnSeoR9G9e38qHtpyVB21og32rovBgB1",
  "key16": "1qft81CR8jTc8DTFGhPSnscLEoBZXWcB5XVgLXrjYDdUoP1Z8cppxYF1sYYsSqYi39s6hPy6msuhh621et4h3w",
  "key17": "23xGPXjjHqt4TExEErZsC8kxERARXnSkKacmjTT6GMsbxnPfTHfyUAbNjnJsKneYhgF68oDGdmRZRM2rHACu4SZW",
  "key18": "5fK7gw3GdNWJrqjkpjN1N6kRsDKiL53oRDzqgYHBhCsXhuEfxyT6t6evpn63d3TKEjQyPp5uNiLqSZTYBAfNakRg",
  "key19": "4cguR5c1wSyHrERBsabbCKT8z3TxtVZszCbiZNqYKXcbrf4teHvdvAwuZMerLZeGSteG2dtrYWVDG1qzt7X9AHoC",
  "key20": "4upGt8FxamjK9dt4MoviJkd4dEXzXCUaof1Q1GVhj483VXTcdg355M9wTQ77N1in43mpo1BfcRYkMEY8tbbUTnmT",
  "key21": "4973YcnFzZkpMANcx1JgaqFa73zFLvWPgYDoLXU6LSbgKXNLCRNL3n7Y16y3kFnGCRMikjPoEx8xEkYVJhSFWoLX",
  "key22": "46KDjweCEdY2Uen8itDzb6jb16idKDoMa4u43ZY6cXWwWKrR344HaDErLdU69gTbmV8WBJKH75NrnDAiK6nyH3K5",
  "key23": "3xZFkjbd9Xm5XpMweJ334obnnkSZYuYxBerrmov9N7PjYFozkwhcg9KUPXT95pNvq7Sh41f1cXrVnhCxo8LcyQGA",
  "key24": "4JEYs5sf12uUHDyYDSLbNCaAqoi82TPSnG7SuD18j7tUPRzrt9St9acPnPWD7FVDr6Zfy4pkXxjx4b4n8ihrW4Ev",
  "key25": "uTps13Ts3xrXUsGEKFMwASoYWNxY8DfhGcgynP4iXrTp6b3BZL14BWcc5iG2s4wFCadWPRAGwssSQ39kPwZkGYp",
  "key26": "44uqieB9J73fGMrnu2L3JeLnSsuMRRrVN6X9LZoVQJ4o3KvAcborjfnjSp8r7o1CfCeqiJDT9TFsp9e9aWmmWVbs",
  "key27": "45CdiHryRsckC9ZoCpawoeQazzoe6aPB4Rtk6mamJGkzznLtS2hEzLetcASxL1iQP78sJWNYrgjpwgTcTxpqNoW",
  "key28": "2pcUBmetnNXkdMCvCT21Cf1gJDxKcTy7stLPuAxizoqjoSpUorWSUEVnNZdbxQgrZuTLjb6oLUCjVj7YPRbvP9Wk",
  "key29": "rmdA1GKRTv8RsDXkEnLiPaXtXynxbNrPANVDBHFqwSb2vpQD3i2hRC9ZkkjWhqotfqZ4LHhbYFrT3nqzBXErabE",
  "key30": "4SykFBQPUtRKBuHs5DW3u8BW8NdL34x3N3EFD753mdmUH4qvSEZrBg8rszzaL2zcajyLdazEooAAxmnZKWypQzs",
  "key31": "4rucpUeviKeXYUNWNi4inXkfdiAvshQqdvW85VHrgAHv5hLRkMdvbzE6ucmM2bypyCxW3X9VfKpcWUxt9nDijRD"
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
