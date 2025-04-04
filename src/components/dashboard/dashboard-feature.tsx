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
    "4NNGcNQRzDs9AmVN1o5mKrkGSt6FGfRH8LFA3rX3LrwNZZNf27VowNJ2q68R1QrD82JCn3RdTmmQPASH8q9NFo5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xpoSuAj2JdaJmiPkdhsrXbKMdVEkiT4ERinKgWBimemWZaqMcf9mc8JsLioijmdV8CCEUxgF8a8XQ7G9rLFSDgz",
  "key1": "2tNRUTwEpaVibePHoA7xk4HqZZST8vxGetZ8pw2EhWYuXVz136qbUmnREuSXDTmbxkNNvLc9vtFUNVTrUptvzx9r",
  "key2": "4ahyBixiu6J2wc5f43XqJoRE8Uz6YjcgK9PSfBzVmau3pjtntEZL2YuoTxuxTyTpvvmufVKkGCr6adKZY4LEsLju",
  "key3": "47eNXit7QB556x9XR96bVAn1dDBkUA1Zf6DmZSa2zXnft5AG8UpzUDtGkP9y6WigDZvX6CbJD38CdPpKaT6rzWgm",
  "key4": "3NodtpYGXADbTgWNMT1PzgP5S9pmpzjiBbieg1DK1P5JMbCef6ykNqXcJL6z7xH8qeJ6mP8unumPBoYxqMogFRbf",
  "key5": "2R1229WBJ1meS8PZrFn2L2C8m8usPLjjdnsfyK1QkNGLt2XvnGoU3h6tWEDfBJNCHWXcjG5nnbTprMDpxZwbeyLX",
  "key6": "5uKXPE9HeP87abEjb5eM4rKqGHNYtci3ruKyrqHZ2Y9NSd6z9i8kcyTHX18KKuGo8GqfRLhGV3crqMi8qVPuPygC",
  "key7": "3tnuvk8Mr5d2iD9wSPwhg2DPhpkTBLP75V4hY3LBopST6QAYw6ZPnTQsrVwh6Qy7Vb9fLRfYGx3heYBpJ7ycndLG",
  "key8": "3XDTB6BQ8dVwgYnuLAzJdV2JRQJA4tAMM79jAF51kATwKNd8cLT5iUHjzMJ3JFZP63QACSnxo62DtLWoGbLPBYBG",
  "key9": "3i55r6qLwz8f7D1S8Je8RAFAtdBGif9tZuNt1sU9aHh91iTwYyB5NtiPMzy4YYFcGAJbzRBjwdZ2CUhAch8eQkJk",
  "key10": "62pfycqPosq4ksHndU9uoem1BVrdCZPV6Y8ZK2zLrUityWYPwtZs5X4QF9URub6EufVe2LDwEor5VbnFGnnkVXjH",
  "key11": "3ds5bCi1K2CmAEWhFAe7S6vfijpKHb7Skq9e6C5W8LBS27zDWbwauH6nBNszmxWYezcxUmVnjgtxZnKREiU3MJLB",
  "key12": "8h9fPgwzj3wqNGFHa8HkBeAhLQWiTxmUZ4RDpMXN14ihz5pEHDWyL4Z55J3F1amuYYvJkGUbNVnai2gQiniXiNT",
  "key13": "5zMqjnkZpp6ef5hSjpo1GM7cpBV6CLAMxeZkmpq8FzxgbF3Px4h1RmPZ51qDB3V8WDVVkMMjsVWVR2UjocoR1Xp3",
  "key14": "cshNhk866iZSjHqTLPhaztPwosxEGSutFkcGRLhh71WSWwuEgamiJU4mnN7xi4BdpBaQqvgQd9NCc6tAYykBjk9",
  "key15": "4Y7v75oQxTQbnKNohPsCTL99DsyvY8bwxpsSd83auLzQuycMqMDsEVZ9h1ku4wRBVYLH92CtingW4FV8RZyZYMP8",
  "key16": "Uak1Sv6BnwAnSW5JGa7wEroy2u7u8Vw8S2FkBtxfjTGkYowRB2jVYky7EHX3FkBbmEddTiSCtgsbV35VpRsSQjF",
  "key17": "5QyCtSPm7r9an1jWghyfx9DP4o3nhGLvVbZ5Kk6YbBrUJjH5TCqGr27oCXho47jMUA8gv8EnXZXHAEGFkRTzvkhJ",
  "key18": "4V1EuggCN6h3TZ6beqVNRKa4ZJHpymQKqR1TTXuWHAvEkkpjr1ktUUyWxKi9WPZguRF5jSBQqWCCrvQJhsTyhiTQ",
  "key19": "3LK8JUmVSC8xmh18kGYS9mKULAtgdPBRqKy5PbtzFYgKw8J8uxmZbaym2T96FwJecRYBxXej9BgXbezo6cu7bPq7",
  "key20": "5BGQziaYiQ3crdqnPwFoxbwjBj9JaR5rGB7f1BF6Z2tBmGde72U5fKFGr2sukZidMYaCzQQTfdjURjaeUYdVwMde",
  "key21": "hdRk4UdxmtiRmRGt63aiqkkQ9exBqd8K6Gqi7ZGZ4s9sMgmFhHEe7v7RUzBD5zWnY2yUBXgdCKZ48fYrYtVSerb",
  "key22": "64KSFgdnkEBQu7CUnDEfFJpyxn3hiLtmkDbAcJxtoWGXFqPNT6JvZQ8tDX6yxgszZEEN3dUy27uFpqKjpVkKadnv",
  "key23": "2oY8Fyx5TuoffCWSAvArQJicj7ZVHuCX8t6w4gJMMV4Yy3QrPJYd5J3xXTRDqt1w2K27RkJYPe1WgiUM7tdPjdoj",
  "key24": "2Jka1WTKAbjrfSGGpCSvna7yWUCMeWk3NnQMNnETHkg1k31hK38wNg5tXbGcULmEgppP5Fzed8oFHGoroVKHLLNQ",
  "key25": "3xZKSHLLHhUxtyNGqYPjQKiuWfTvm2r7YtAS2NM84jzzxs1D1itskwbWDKCGJx9CYat6VALRfrDNgBcAXEpVwBwp",
  "key26": "23TLcGqgHNJLHF75TxpsB5khvcpqJtRJcf4TPbVyexYYMDuMiHEDfZVWKG5DFuMcMKzaEmPRgHfax4jnsh1358Bi",
  "key27": "3H6UZVMCNBhJ8HeQ8Mp14ZKkqSFRAkFNtgaFiWEnpqf2mjXD2iBJvEj75kbo9rPbAqUqoS7ji9ibGgui8Y4oXs9p",
  "key28": "3jbTEzmAaYyAeANia6qXwL3FMc9fKKfJqmnBcTE151YSz2DwmhGgi6kLaUnASwJN9zTiBLTY4ZonoyxqUG58d3BX",
  "key29": "26fkz934w7ifrga2uj28N9B5p6f4XfBSZmf9b11TkwK8tYavZTF22KKiJpVocA5hWD4ogR6zXoqf6P6sD2s1uB5G"
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
