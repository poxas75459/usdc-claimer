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
    "3BxUfxfG5aAbaYSGFoGK76PDCYkwLk8Gyth1FWkdnbqnePhew5D6g3JsvXdPGZtdtsbNxaRMiQCHUMt3kN1KczpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QCkUdQBfaWzpCjfwKA3ik1GgmTs9PewPvvqm8XT591RjPZmMqRa3WUc2oXmKHVZGcd9GQUzZshRLiQhGg9emQDn",
  "key1": "3exesvVedrADw42rPhgNdFUf4wr3U9vYR7xkQFfsEyzoJaTZg73fsA9eWMvvBnbgdRVjLve4y59XAyUUXMQ4BSaG",
  "key2": "49KmKraXFvL5LFBvcx3Z6MBsdTdmwiBsFqFao2kcQYkEk5FG6DUoV97V3WaoWSK1kcS7ENwQTQhQJCadkZkQdNKH",
  "key3": "27fW88m5HatSL7QBQsvQ36bd1ApV7v58HyiHXE8crvvy66M2HTRjxBskgu4P9UBA1Gy4DswSWrVrQu9yZDFbbkMc",
  "key4": "5Tfb29pai2HYxLbDAKEYYBhhohGFBEg5xfx4aKFcna2sZGMECZRBeKSkuCrgKi5CT8ySnW8DpBfFCWAh2nn1Sh2J",
  "key5": "3ZJJ229K92FmUPaDsBzDdeaJ33exoTtN9WGsT4eCaWVBZJYu4NZp7M4Y9fUCYAff1QzjJwDjDh719R9D6xpqFLtn",
  "key6": "JeMVzL4D8fXaizcEkrPticCpMpHoZH9cYp276ErKnfSootQstE25R9UcDgXFgfVngTr5jdCXX3bRkQYQV9x1LXr",
  "key7": "HjxZ3qNeH8srwoyaaJwrgGb6uRxPo6S3e5Hb9EEhmZVcPkUM5AZPorH4V2kAPittrtzZfMATdSpc6NoBT3zJpNj",
  "key8": "3Tu77cBM6eDJe1BtbKi4c1Ck2vDvu6qCJjVRGm3MJRrS4PfxFUYcwDRMyrhPQHp7A4C7zxNE996bgEnErL2C3Niz",
  "key9": "2zS3aX4B4uW9npnZnfckE1nsEphwQ8cFxrXeSTcgPz5ragCYzqAZTSP2A6E99keX3mihVF4fQcxMbhvGCXyKdizM",
  "key10": "3z1qyeDPSRLYwwyv7dt12eVJxZKwpEjMXDBAcAhWHnu5irQPnsvJ5QhJ1asjwZKhXqoeLNeadMEFg5qoh5zHJvwv",
  "key11": "4tf1vEfrhc9iaz2MXeFdPE993T8gotaB2dtAtC1ALyoQGrBaY8iKPS4qhP3YziwNbHeeBz3JvMtyJtw56Tkq3cSz",
  "key12": "5oftk7QpLSF6atDU6rkubcQCdEsXVmM9N9ApCzcoaRDqsrcVBXMLhZnzm5pE6mew5hDGhVS2LnqJapRmifWZohZE",
  "key13": "3j4T3AstYRDfiu3CHTZE6iZDiaQ7kXWz93rJ4hN2saueT4aC1DcubF7xZXF5ghzK7w4zRWcUk1oVh9J4FbzDAMtS",
  "key14": "5njYNx6eRkXx1uDDn36UkRqoSXikQ46kEVkuvTZWpC32xdzRnuw6Zb1zuURjpjRToEd4WfZQYnbnwFfBBRGeJogc",
  "key15": "3Ca5YVpP8ZiSCTAtTm6WoRUhZFF4XeFaYggZ9FUvgZ1wmvdX1T8B6bf5btgHCP6BL944HUFVjceHPu3hqSz9ijTN",
  "key16": "3UHRnHYUq29Tbzr2vehspeeRKVh1MoxUijJ3LZrqfroMQVBvgygNtxpnGefWyGocyqvbdE6oHGrWz176ztVbWtWt",
  "key17": "2LazPx4cLLa2gHmEwFf5HNsQpYRZw8MWTscLJPghcm3zgqoyLT1dHaYQ1XMkWvhU9bDSoqSojqmEyiyTxjGTZmR9",
  "key18": "3opeBnLECqEhTSPF6dJptdWiEAJ1cRry2hA9J8bACc6v5CXNRmkfMpZDhgMbD7vRKoPACE1FNkQ62t9d78EiP9yK",
  "key19": "2Z186D121wnepUAvivEbgXsekyWySQyHdGe4RhbM9R2gboMRohBgWYsZ2SUKF9U456EELY22w86MzjXDQczs3J1t",
  "key20": "2wbnSTvgKtrbW9ueg5xFsufnNcjWyNisMcx8zM8CF9T7aXQDm3KoHQGbjzvvZVgHxeeqRcsbjKGGYy1YQkeB5TVs",
  "key21": "5QWYPXDKbGq8zibdizaxHZjgugbU5QjdjCzMFwh2wS5JrTQFQgmzVH6aFFwBjtkWdvUxuBFD6qE7iiszux7xzFBP",
  "key22": "5UZWDpuRVqNjJuuiQhPC2PnszHW4fgJ6RASV2zyrsejxnK75o7rkKMBhehGvMhC2mtpRQTiZGk4s91H7bUXtKPnV",
  "key23": "3GdcNFya9NDty3qEpqSJsZbk6LELnvv8vTAsL651hyCazaTLpXVqeCBe9kBZXKFyBCtGpWR8etBBXKAgoWa9aQkQ",
  "key24": "TgtvV7hWneSb7YueTVcqCddd44BM8SmUyV83rr1fA8AhZE99DKgekeGqMJUPSiHUsGpiegJyu45FFcxnyYuaxXk",
  "key25": "5qdgDXbN427LKbGkMuaJSZhMnnbi2zrriu4XbomkqcyH5bjSLn5FA5k5fVPBqcyxeNpMXPgtkvzdCTfUct2kmQbA",
  "key26": "39peDiV1vBJk2TAWbxFfnCvgRijAKprPnNmRLqsh7S95hoE2eX9hW9qXQ15mynoJTPC38wGyGichHeR217bfSCey"
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
