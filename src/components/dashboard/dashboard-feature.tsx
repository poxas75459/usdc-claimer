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
    "4Wtg37KKo51SLMxGaJ1usfbNNaLDyQ6eF1rd1Qa8PEBGRLM1ZUP9qR5rvAS7JfySUjEQbFoUcSJszGZxqzSfeyaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F3yzqXmacmbymmKM5XJAdgsWc18dEq3WdfP1GuW2eBTvBJq7VLgt6baJ8xvJYxfZMGfSrpvhs9Pewu13TQQCSyH",
  "key1": "5sTbZJUDsTDj95kd8DTyFJFw6AM8RC1TkTpSsGZ3a11htiuGGwyEZgzfnTHFLBn39WTkFMTodVdrZXHNZ5QzaBVe",
  "key2": "5kx6e2NBBdWvAHqjnyYVyiPyKjMHWpLoRN43u1sNWJKTbVcXUnoJb3uZJqqzV7r23mku1gUSFJ7FQvutndNmE2bB",
  "key3": "tAQ5mjt52PcEFSQTFL55Zu3RS4h4iXNm4y3zx7RPaTpSMmY7RoURQrHXngexaVJaQsnc7YgTJKH3eegTshzAYnv",
  "key4": "2ie4SK17qz8pTD5KjtgmXUtTiTp8i3jtcBvevw59xXbWN3Xs2qi2En84PA9TfBQNgLn2GprrLLGfqN619d8A7f2t",
  "key5": "39U5TURLSTZwHR3Vn8Lpo5i8o68Qjaa1WRdAsjCBETGoWkgDneMWZNq9va1XyH5eUsdxZRy4KPWBRsjHjPTth11C",
  "key6": "2QAjDKojidZvGr1Vhfa7g56meRqpFXbjSEDoLteFScb843aC7ii7264KySmEmVRMTff5duqwTSDeUBbib2CQ698d",
  "key7": "3JAE3b9JVrcfD4p5w7z4hPBh8D4H2ADEmyiSo1DD3iPZ8xfafgKQSHJ9aurtFHUgzX9vZ7fYTczKvqsQyHzLR3DM",
  "key8": "CgVmrRh7Vx8GqFuKxhe1GxFCytirjLtBWJcv8xpneJDyip89jx6w1f86vgAwmBZ5pva9uLZzYjLjHwhgQzgCwAi",
  "key9": "23G6iMEAfjWkzPgHQs1i3zWSLenJLTpEMZTTu4Ydh92UuXdKPCrNymkdNbU4mmEe5gGQLHzGTAcyBLVHsRDQZ1NN",
  "key10": "mWqVV58NVdpzqxxBNwHdfYtLoYXB98Qyp9JPy42vzu9ND7vDnRQrieegTwnWiyeKa4wFU9zoB5XhX8rzr5wDwp6",
  "key11": "4LNDTDUY62swSpzDqJTVRymbvcMQabCNuUfbidoqTSU1fbxaxDqAZXWTi4nUy9h33ySoqAxn2SNXVv58qCpuRkzA",
  "key12": "27E3J9ghrhQ454wP7z9hw6ymamKh5ncwnbuT7JqFgj37MAdqtW4FwoPJYjxnY8zGTMCqsCXJDuGuT4RcL2xWLMkb",
  "key13": "4svUHA62hvHWrum6nsSF6hU8PSx6CrYpwmhsNWySJ1NsVJX4RbdEfrsKuKDGVSs8Z3CYXnqq9nsnKWbwd18LrWdf",
  "key14": "3KTTi2SRjgtkzGvwqQvuCrFKpue3L1hgdjpZNityisd8sVx6hdZ23U29aehRPvgKPY1RrZhE9mruEVqx67PDneqD",
  "key15": "65otaLgjaLBE7h3j5kbnuoo49At7Zq8zmojyZzmgAS3AuqJQoaehCQSW5GNrnDKK5bQ2zUkuxwNQB8CWJsSZfbT9",
  "key16": "2pZHEqkvciQSL2QdTrpumcmou3Go4Bc3eR3AW24ZFHp1xgQmkUtEp4gBJEeFCRb79nbyonQ8Q7XUJ1hZDvbXqMg7",
  "key17": "E2ziPWL6vNhqFF9kFpQD5NxkE2cRnxLwkwapYnfZniUV22xfNgBGzpbCh7WSvhZTVDKi9rJVQbKJMj8ezcU8n18",
  "key18": "m7hmEajoTTHMfzYkYo67UKT9g7YAYmink91b3hD99SfbLQbGVNMYjpKg8bZwgS8FtL8FZDYQmLEj3zVbpSagXit",
  "key19": "5Koj9RUN2npUA1DZFb9KnX8ihzAG8gUjvwjCMCe5APyL7mqgajH6LKkp67QSL3XPWtmwy1dgvCqUwzPDAtSLZ3sG",
  "key20": "5GjXEBtpDrakD6NbgNHH37K7MnV4WjGxsc1RgnCf1H7BqzMk7fcBnF6dXDvoCBJ24KYFSRWXKxRKTryqQftjXGw",
  "key21": "5oyCgfrxLEPCJiXV5T8mfRWYGnWA7HX1DaUnhdcYeNDiM7CPWyEQWpfYTZ7MpvHJsWXhAzi9eLuoZcSCJS9WRUgY",
  "key22": "2j3sHPqLfF1nUkQPDzx6mbmadzaArFn9trvi3YFFjFbAfeib2sEuwuU4ZF5MgsKr769zwh1Em8jiHLRyhQcgMSQW",
  "key23": "3cksocetqXYxCK7xBFiqnYunocwXoNKNPrRqwDt87WdSjcmM23Yd4buELws3GiRH4gBduzZezLdGari4pWeEimRa",
  "key24": "29DH4w7vMbq2EmqDsmj63NmGVhhtsBBD6SrAtBkcUMHxrrxPnkmzQbxdFNh2xL493YzefbHvBSY3tiM1oDkRbpHU",
  "key25": "4BGHd127Uj6Ny9kn8DBjTSzGdnW3CphS3MaCs6rXtNJvwrX8iywURRkNNW7xsdeqjVn2MGTVzF3RKfKPKVTTuP3i",
  "key26": "4d11YdpbASnGmpeUt4kcw253RbrYbm1yNd3RnSkVjYMDjpoMgWKeQp36nSUoRKthG64aL1nJKZu2Wooqtnz4i2Cj",
  "key27": "qFcK2iRRRmY8nTeSE51HW5BMvkVAUJFKuJQ9YUypEvMYkduoLmfgP9cHxwMyuFqHhYiWzwTqBcBjJ5TkT8cKT8Y",
  "key28": "3sLdD8S2fSoZbkYeKp43LrZTE34NPfrkHzLyKBaaqbovadJouuhwTKL86cYVHghWRnHic2QKe18PQJMsqudW9K6n",
  "key29": "4eDYp3D2YP3pokinfR3XYaieGCDWeifsgArfpCVAvRTmefve2SKuggfJQz1rNaqs8gt2yjjVMhP3yRJGofkpFGN7"
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
