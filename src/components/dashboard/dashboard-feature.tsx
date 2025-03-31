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
    "5JumcUAZbMTKFK7cRYWNrixWGXyxDY5vNqTmUwATizoEYdG2sBSzxyxJtzXkdwvZnHnaMYHUvFyWUhfEPvLo24wS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1tDBMfLk3SajzmozfssWHG5K6Azwpo2UNgJRHEVt3WJNpFT7EG3njbgSBJAf91RhA2ZXMNtz5U1ezvHDTazAmMb",
  "key1": "2ytseZpCDUkHHpHcY6gbUvEtnx9tx4erk8BVYzV1HrZnbg4STfgxdRi6US4BuX3mrVenkw7Qyd1pzyZGXvoSwWEa",
  "key2": "VVoA4qyNF6Whhg1M1NYXC3QV6PyKy9aqZTycpCMJk5wzNPoHoyKNwyjbJpLV9aGcTNZhxugWV3ac9GdnVeUBtqV",
  "key3": "5wx5bcs93mFY5NtaoPRWCKsfSctGN79Ma7iL1EFmBJytBbpKnv9Lfv6RxkwoxKG3eW6Q8Wc5yS6mpFjxiniAVqXx",
  "key4": "4797mn5rLXUPPRfC19b9GGyDBB8uoSUPjXkWLJVrSJDm92FBdpupVBNMxzem7arbRMwebRWJVD7kdB3urVsSth9U",
  "key5": "2CTQv3mmwLW1dTzSRUSK22QXAvi2WmAm5ibjF9J5v31LCmHheTLzeDtpPPFYHW7Mwc788aeDtbhpDdjrM7Kc4TCN",
  "key6": "4qSmGkcwfegrvDh2G5fe1Z9YmWZkPjG8gjwJ6pyC7u1LSN9tEh5xXQmQSMK8VZceaF1xm5vb3Pp41TxFVzANTEWZ",
  "key7": "5guQ79HWsYZvJrkwcarUXqESUXzbgoBKejKmTbgGPEzyiCqGjRfJUQY6kG8qtptqEL8Xn85NPromeG4NSDMqTPTo",
  "key8": "3odSdMTzsBmzWyB8HA8yVms8mBMt9LMVYpb1zVPbiAcmzcoAC25GR42p24BjPLZuhdQbmAdBQkuH89abujaFEse4",
  "key9": "rycjhgukrKhdwapsLue3qXz8zvTDJjQvDCAhF8QdP8PcuTRsN53ueDxMN66He5k8KmGsYK16c4PG2ae3iVAEgzS",
  "key10": "5oraC7ZL6QPgLJ8j9DZKmSbcY5Rk6DAuKKHjRJNZZ3tYYBuDPwGYYGftXYc7RmzQ5xUofeYGiKWHSYkeaUDHdYb8",
  "key11": "KrM7yc9GNbWgk1PR12jviheBWzc9st588M447RNUNuLPbVLNPk8oxEJKBKqr64GKUc2juGSSU6KqyawiMnZGCcB",
  "key12": "4AYyxtvn4wiu1XJ1Df6zYonJPngZK3hJiWKdNWaki86tszAowMERf7DdJCusMgQzduUdgFgzw4Fudq6jBFJir3hW",
  "key13": "3dr3Soru9XDn6so4pCZujcMWHMMXCthMgN2b5LVLDepeWBYg4Hwb4X84XRZj5G2feHsA6f5THxoFKkA1nmRCECmg",
  "key14": "fatTDnNSD6GtvgxU4wawfgjzbEvYdchxauNW5LZ7CYsoNa1oqBpYPwXW8dVRfpsRKrJiUqV16KGA78NthcZZBiw",
  "key15": "BVtV8wbQh5JNgZGYQipUG2sHQm8sTmHtGZN4acckoGMPR51hGxPJpfdnq249J2YPUJuc63qbooH2NwqwtUdLBg3",
  "key16": "62y24rgWskGWz2gWqBb7Ts7SRxxttstGt2hvoCG8q6ahWb6EXrVQRRZoHpZwSvEMHZQ7fADztB9ZnkwHLgWu5jF",
  "key17": "MNFfpBuYdWbSidisCcPBo9V99F671Hq5iRbTjdAbCHRy8JCRK4kuAxbNbT4rriq8R6BBmgm3BsuyGzGAAr1NhUi",
  "key18": "4Fk5R65acqUREckee4wTqrwP6APcMfJWi5UvxGLxK9b9cL3FU17UdCDDqNWMHn99TcNZzvKoBzem2NSzifitmNXB",
  "key19": "LN1aEs1A4ugZ3c5ys6urThV4mmrqYkHtEyCashYqtwmUF6BTxfUSmhCHpGrbQXVUJB7sYJf6dNLsujS45vprKrr",
  "key20": "QFb5ENouwAjS7CstmYydkVr84WcPFbkrHDcjP9BjwNf7yMcnpK6tuLMYNpogmBCZYxg8tSaqJNxXco4jHNqZEVM",
  "key21": "5eaQ2WEt8z2TibsXjfNNsnWHiVSLjgiaCN5ScgwdNsQVqPL6hxViyqkcxtBvWbFsUA8hk6oAxF41ACvDesgzbJiJ",
  "key22": "4BcVkFbF1KDPE6EGyb3rMU2nTcDG6rYJM3Et6qRxKzVrYxdtocfzMxG21hRyvk6PgoWqfcsQMSmizQUREJMxscpH",
  "key23": "wRvF56toTRqV76GzUUu6EcPbM1Eihcqfsv36nTNMo66ta2YtwjgJsY9r5cYM77mrvQoQRSbVJ8KCviHYdKBnqWL",
  "key24": "5GiCavYZsJbSawKZaW6PSkpFCUio4pM8unMV6nUUurTjtBr4HS3NnGCr1JfxRohjW8c6HsZbFVUSdukBDJuGQABm",
  "key25": "65bzfC2vGKRf7hSWFkQ7JDYw3WTgnDcykHzCxL4kufynvsqsCDg9c8YdFkeBmtVXwGg6tUh2xuD46offWYh2SAwm",
  "key26": "43kUxJFpR9ifbBwKuw8qDpHgGKH8gy5XHRhrk2aUKohVGRFSJ5zKZ1c8kB7YcVfpx1nD9cosvG41pahBD9D3ALDy",
  "key27": "4ypkSphiBiwx6DwVcqH6pUXwjFo1KuGNTmAHdFFUjQGiAphC174EpeJdQbmBzwT2mLF4MP1GpP8L469jMmzajNAL",
  "key28": "k7u93kyDHyPgjyghUrjNVTfT1hzhohjMGVZFcjJHyFFpANYZERJ5KiSYrKvwGVXvn9t26iXkdwZovtVQKfPDy4W",
  "key29": "34HyPqcr4yzREfthGSd4c9RsvB8ELSPruw2wHaAkbqYGT3AKGfQjF8J3HBno24VgLERmhB61QbYZ2LKtrjcWymr2",
  "key30": "3TsqpFfoq1deuwAo2YCHh2e52LMjv5HLRW5bKQ686z2SU97KCqF1h14fZvSaWJTJPXk5sRYhXRYZ8mwyRzFqF3hc",
  "key31": "2VS8upHLwJggrd9hWrS2dGB85KY3p83p7p9QeB2yKPeCGP5uNDGuadZ29cPBnvFt4t1rjm5JWaXPg58kBgtpLrmE",
  "key32": "2Sh2yQDDwA9XxAjGh81DjybP72GejZJMRQXJLAVBJw68jXUmB3G6VuvHP3MddzMsoSNRiwVXaMueVAGmJfe9KXUE",
  "key33": "5Swks7Wyroq7GwarqBnynXP2zrrkadiH4NMbP1mdc2McfnQGYPJaY3qxLmVPui2FyxQq7tGqzXfJ4xJ7Sy2PsXTz",
  "key34": "4PDDiP5CQtFUfDurdzuZZ8x3ViqkivB9nNdga1DA8GdrN4trZXS7pQif8P8CAxbeRumAc9UoYiZopHQdzozjDD6h",
  "key35": "6o7xnFppgQKABouNcFgvG3vrhmgty8gvWsNcBqYn4cjussJrXsDe5BqZpoVE4ScZi8WK4eqPC5RX6L9UoBW7gjG"
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
