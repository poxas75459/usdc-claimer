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
    "5nxfFftzzFPWZsCEGLPXUKzhUYvEGthJp5EANfya1FWgHmU4MuycZrKPhiAZdaND7h59KTH7vxd2D5PC3AEPKHk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59tRmMKA6np5ZZhyDiSZW5KXjoArEBkWry5ZFYJpxTm3hihGvV2KLW38Lx4CAFy29n8WxeWzuTigyWCuQBmbWrpu",
  "key1": "5vzAESzsYhqWHUiTcKSUA7QJpQV6QzoVH1vz658KSWPrgywvtRdqm3WNC99dtJwwkKcsTogDGW6WiK7QHXA8DNYV",
  "key2": "2rKQkMuDCkrVk3Vdu3y7tsb4pixyf4kAJA6sbLmwJRaZCsu2zHPmpP7jveCqJA62w7w4Qa5w8Dxbu8fh9iDT6WW2",
  "key3": "5PmUoJazDcgNig1iZVVbbt8AV7zjoTjMQbryBLPswoHBKByw3ZH1yPqbukPG9tuskN6vGnttBRBCryF8RT7PvhUJ",
  "key4": "5dCNvS5SHmwT3ukUfoimXVnhFvh6GiVXktCYo2FMNBkNNbjYtGbRu6LFgWkUoE4VCegZzx5HMkdEZ7AJ4WPPoBQG",
  "key5": "VKMC73DARinnNiTtkBcGoynNxWfxz7JRu8cqj4AVcayNvzKoANEkZUEToWxnbaYiAmQA2NFHZ6N2WiF9D2LMUK8",
  "key6": "3D1bxdxDgViqFpPwwRmPiR5RWekHWgZzRdsCEe5DAfyZ9LRrhpXefKgGvgqeqF3YTGBFHwAiEU5UMoEXoJ3X7FPN",
  "key7": "3o87vnNhKgjRQochjf4tcim7KySWmHyMBTezFQQBNyEEkxpT1ctMyczwWa1MJNg84UUKvnx4A7qnW7R5q29URpUH",
  "key8": "3bima3JHiQwmv4Twy297vx4CVf1SgE9bpp85erb2i5HvcofzNon7pefTw6LC9N2L2zdfdiAABnRTaB7deoVxPBf6",
  "key9": "2RmCQdegN7E1RATaPGt6hBk9d13g9Sef5EwJ36Hhsqv9y54tRG44yLw3hvYvMyRRSD2Y5oFsCskPesYR3UUH4Ukk",
  "key10": "5uTuVfBodCbtuDmXzHPukeASstSubqVtdm2ybqSxFWGPeQfMr1dKiR4A9TPSGcX7jM754sYEoTw6dBpDWxcxPG4U",
  "key11": "YM5AAaWif5jqLMsHo26WRh26KDrUZw7nkcPpHMacVx2AmCzTAuA56SJndp6XGMhrW97xVoPLJac1MXMC23SQChh",
  "key12": "4RC9Nc4j3m7h3RHL8r4kGqNNnqe4iRTXfkjtQ3zJRqX819fV9g2mq771f1YunhGE6zSQBrNxgnHuDjtYySqgKktd",
  "key13": "3ZMYAEW6PTp8fc511DRiXdhgDh8NWXjSUF7cr3L2mXm9XmugNZWC87LAj7rqDVmzYZWXrJmzRjTFHUEu3YWKwktA",
  "key14": "4Nw7q4RZ2nRADJoHpbiiPkHbvGZE6YGefgp9u5GqticZzx2kuzu7AcfDV8n2ADKxAufAvjgWSTqzQniyEBmfgeg9",
  "key15": "3X2ojGDqkiiQVTDUDEr3neQ55P7Xp3skP2YL1fe4NjGPDSKh9TMxny65WPkRh2Z79JK4hmWKjBHuTSBstGcWaiUn",
  "key16": "VC3iENeC4PmZ3KwLCindmqrJH7wLEZW5g3jKA9tWPKxHLHaqXAVAicXqgfqNW3qKu2q6njY9BgkCpq9tkuzXQni",
  "key17": "RngJ1akVay6QRRHD19PGohuoyn8PCZyao9n22ziicq5gdYVfRyhtAMLXCyqj2DzSZhzGkPyvdbg5XG14A1MveRw",
  "key18": "4F3zhCJR28nx8y64tWkLHyyaHctYWA2asfdUaFSnnos8wnQR14Z5zMQn8KVVmBwyE76xtihKawy8B5TPgm6xsFVc",
  "key19": "5GD1wz1c8d9yHeSLSQe6RsFVxwihgmMzDLjgW9yoofcjmTpkZmXxJeFrJ5Ygig1uBNSDPWFs7GBPtEeC8khnesfj",
  "key20": "axvoZLj9AMG8mXPjgS9Ux5QN3kLZxqtbRyppZ2Qx7TpJFd3byXXsDUewgLjPxUEqAtE8wfpeDNKyx7jb2mZCUNn",
  "key21": "BrxBTcBr1tLDkv9uMthVCTxmbR81SMnhLXMArJGqS8u8trxrc2WtPta9vdaQJ94umUT4FXw97dWUCPrEBdvH912",
  "key22": "q2huCsyGzwxzNz2tbPKfevksYddQC25ShNV15gGnwwBDcGUywrXQ22ahxRGAStnHugzFYj2jD6BsgnCHC9CsuXw",
  "key23": "4U11wDYoRjkHe9gXJmtqZ6YvywR9TwXWid23HZkgEuQanM4veLvKtUAAJkWqKDDs5DwE92FZyNzD4LZMpYKWvyt8",
  "key24": "2y4cFGwY75a2duqFKPatB2Ta5Jed2RM37uneF5TRFcM8mhDg8gz8fes9UNyHtWTNinjK9GcDLhxzXxHhNLvgeogn",
  "key25": "4cGkhfREiM1GRoL8wWV5WwUuJrBWgUdTKmzbT6S2HEoMSKksq5Xj7ZcLMXj4dnGwRXTyspagAa6ReNxCpk3qSdmp",
  "key26": "3SCfYchQVNZXGuRH4pb2q7AUNRcJkypJ4BjtW9EekEAgqvUoqy7BLkwkhjhUJ8rWJCbmtceFjfke796kg2BjyqAa",
  "key27": "7j1U5DWiFhczxMNgbk6U6sKAKi4zqHMAxZDJMkCwQq9WnoRDX8x7gTuzLL2W57HkzRhoCGUMEqtCJJRLP8PUpja",
  "key28": "4ReMQHHpTq1aNoSGSSM5Pc5cExQUok76WxA5m44uw8389YouTTS1xJtQoTFprh52r9ZT8rjpcSsEYiSsfSMCVzzV",
  "key29": "3XCZUPnVbzcRPgqKZK14Qo6qJYppXkD9yo5XRmt7xSwe9MvtNfis1EbV4i8bzjq3qkF9stLbguipeqaCCgcigs8J",
  "key30": "3QRX3z64pCQZHt1HhmcZUruSQRZw6fhsp58LXCyEEdLJmsbErBLSFqdVKKo5f8VVHGPqFE2V8CS3aUEB3VcAf3Aq",
  "key31": "5876F9sYqt8BW7m4e7r5rWqi9D9pCP2Z9HmYvU2paudcygE8L7SSWvEv8o29vk3eQmjGVkhPcg6yqYKqYZq5yo6V"
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
