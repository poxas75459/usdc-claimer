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
    "2KhDX3VQUx8MoMv7VkDAzM6aWE8vxDbxQvTx6bBQCzpucT5ZkSssVLC8uBQRTYhpeJSe2muxCowCw27rbB71K4DS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ayoaXNRydFLiofJg86Sigx8JVyxmGWHPfmz2xepTJuzai3qP1akQZvwDdU5ZX4K3kDJvzF2yfBpk6jrtwtGNP3y",
  "key1": "5tMP8QDtBAQGQj1UjXjuQjEkAS66bJ3Vp3SCRrVc6z5SsZ2VSezywW4rwpiB1Ck3QbSnsshb9vQiB55m4NCCHfLq",
  "key2": "3XndwhiXFES2v48dEMKrqfuDLytY59gXidkFD6qn6ieBJWN4577jMRaKxxzCBnMhTNsKoU8HRfnqUi92UBuKPjuQ",
  "key3": "4tLy859sJYaw5xUJPPR6hS1YM58Kgn8vckF4eKpjM99p8XnQJm13cnBhqxW8WM3T9vqZSiWCKMfMtsY8M24FnuRi",
  "key4": "4gDWs4piWNTZxqr37AHJXm9sBMcuT7cb8Hg2THysPPp5ERUH4sFqGTtXKfgQbpkzRDCztLEdBaZssvXuBwyX9mjG",
  "key5": "2RvbSt8gruUJwa6HAuGrownBgTUPgNp6JFeS6F6zcb4g28mbfceEzQgm5fPcmoL51JSVkGqTZL3GUrnGcdLVoHdz",
  "key6": "3LPaQqwKVqBNsnxXTw6hnx4hybatEvUEai5HRAHzMCTQB2ZPp4sDwyWW3SCmoigarGdT8DUwWrmQ13hqyg8MHuJa",
  "key7": "4kbM6cYMt3Drpnb4PYGzCzh3wFNPpJutcAGdr6uHqkCqXg4iRbdCDniJqgfTbJhQ4oKVywJnjCsvwvF7LwcFKnHz",
  "key8": "4JjGvFXJ8f8RmRhBDzG6rJfDVE7Vvzv82up4euniDPB4NeQfTEMVbtMMoyadGkTTCiik94cH6E42q4En84cdFvB1",
  "key9": "4n7VXKpw56Na6RaZ4urKZQmtmYRmhaUojwW8U4Dg6BrWvkt8f4jkACwwuCHZQMeMYmMwvi31ZZDWFb6nHG9gjLad",
  "key10": "2kpmNANwj9Jmc8rxbjv2prGUMBYQiA5RFsxeR47KmCZZbkwPdFZCbnajuTah55wTnB6T1yKPbHXnR6uTSdSs9RB3",
  "key11": "LsGoD63rxHfxUzGYG874kfhnRrG4yoEKH93exfmq3Yn3tR7vM66YiwruzV7DXgJEB7YvEmxP7QdAbgFiEFDML38",
  "key12": "5cC37CMkZ1QJG5bEqixNYu1yPBbBnFkfokSz87vL6yYu4QmpjrBoSv5CyW8TQvReraXgAr8E7SnqeFMRUNsjK1FJ",
  "key13": "23ympqHKyNRxirTAzdTXyJDZG7jDgscEVfk4BE8m6FB1zohQSsoM7CWt4JERch2Yg3R8Cux8YmnE7Fj5VZU1m9qJ",
  "key14": "359JnVzCWQyqvUaJuqXezEJ3VwvrHaxcFUSuv7dEGdXMqjywV98XpHzSsZKWM7AzCH8V65ER9KKUVpp7C5ehNtPn",
  "key15": "5pPGHr75ZhAGLzFkSSJM38bLaa3aK8jM7DQ2HjzUbhrUjQWxf7swaxP5xKEdyUYGGGHmqrfdeA3vRkeTmhPF5kRn",
  "key16": "3KPQXiDF4JXvVm1bisnaj1ginjsttGxbkp9wVYUDArH8Kmi5SJoBJnZSJA3wJCDSpcpuSwrJRkEskfW8rodPv3uB",
  "key17": "4XPUFXdYeokhuSFYgDJW3PSuM5snZK446XuqX4vwenUBfGFhn37cjjCYHg7VuZoVU8MKRPeuDEVxiPXrCtZFcLte",
  "key18": "4iNneLHB3W9gCutuiAYjNhfxANeho8MSM7sMupUU74hisjhhuQ9YA1qm7H4zBM2C5ZKd5q8UCAx1cUPsEAvC6F8m",
  "key19": "5FQSS9KSPq1K5cB8vNeBjkfFtLsz2Go4jBEyVZ9LJKyzmTDFy6wAxwzPyXGuvccxFvWvwAE5uBwcppSmBQoWdB9a",
  "key20": "3HjqhMou4aDq9MnGUqTM7yTk3rD8aMCdxcHDBKNASPLXkPVJyDeqFSrSJTXTKZX26zfHstNMn7ZfcnuwW6ctsg43",
  "key21": "5pcEAeMcuTp3tGL2s58gXUVKhVv9v6TiJBpo4P2da4M8N635RkV4V6sQPgcB9k76YDMMTig3htRbx4pZDZtMUXbo",
  "key22": "5zF8A5M1jJLtHvK4tPmaFkWn74tfnHfsR9ap8mUxezxazj9NekZ65KTN1jM9sHUdMyF25fL1h97uFU3hstQU9vrT",
  "key23": "3YTiB7hcRD4KnBTcuyMtWoDBXJxBc49nbwUXWNvtsDstLSDPEY1qxcUWoB54H8H1wk2KqpmmCxh5e157HupL3UeE",
  "key24": "TXBCgGXoca8q4KkDhxEzwtr6QMHTkYX7thf68uBkXZ7z4bUBm6f7tkdYgGAUrhBxb61gGW39aiAd5ikWcDsyPMa",
  "key25": "6K9ohsrcHoKWr6Fr6mNi9543cecn7kMCLgjZGUZvshabnYsgXJRVozSvnbjWfgWEx7KcF5aHSqR1v5HUQHjvnZG",
  "key26": "4bHaaTmRJTP9rdCQ5VYekNMtjS93rEmPjEMvoFuPXe4tnSpVEja4v9zw7h8yfw2dsLfsBa8G1dabXc1uAVtwJ2Wh"
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
