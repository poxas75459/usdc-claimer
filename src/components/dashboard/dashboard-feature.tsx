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
    "3UyYywCLxohPPiBA3zB4GUUKSApMVQ3a6LVmbwSvbPwGS286T65Dw8cDYGatpHyrkskuY1ei31jrsBPHSNigAFmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nwm3WzWmb7cFiAN3SbKsJYb2x7gQWDtfhXQbRnHSSkzH9ps72UqRGsndsiNQfAUwpjCSvQwBSMZcnq4Bv2btEUC",
  "key1": "49Fk746PnUyVCWmRChFXbmew9qngvyoxf1NkCi7PLJ7eU9k4SwpApgBLFHfyeP7MwXeN5ZgZHH6YuJrz3kSq5Znu",
  "key2": "54aALSxJthinYNm5JhVazvvoo3nJh6XSARoLAiW6ca3QEpKgwqhF71f3oHVH9bxKFjgpaM6r9dq7exq5prqsgBTX",
  "key3": "3hsBzCij8qtMjJkr9EKgSXnJ5EKTq9S95x6U6AeuDtAS7sPRYhE3fbbQteD27XEedikUTzP8AKEswLw9WQ3THxxX",
  "key4": "tf1nfkZKkdeHtmNeCDTzUcYRqXPUvqGv8HmfnUSXFuFfqFSue2PqcpYd3a774J6AuU2FHGXZ5p1JTDhttTqZXfm",
  "key5": "2EBPB52yJG1MfQJnG1chzEnN6T34Aut9cFmrhz3u8dkzLxdyBCzb72gThniyj9yj8x41wP5sjZnFjrK3nd3Sp7RM",
  "key6": "43NiR1NjkSrqMAmC5GpNAfpePXjRuLkSGnrakJpTdmw9i235RerhJWBH3r1Bs8rcMADEA5ZpWKi4S89sS8FuqSC5",
  "key7": "3qB56Zn16JQrXx8TuUpfkqsQP1Fk7PjAUVvwcCDHMkDKTo8oGUosEoVJop1DZmyaFWj8rdZybpcJ2SeU44CkY9Rh",
  "key8": "26oaqRJbodJQjoAFoH1CZ6kt5d8Uj4rmceXVnpHW8U3UuHP8B2pfA3RwMbtSEsYbyCUFrrDbWptpPJrt9LkCETi6",
  "key9": "4QrKQoquqd88pVqVWZn37QBh2QqYPDtUpFmRnX8fuLyMSuoDF1pzfgWUwvnSXr9UVdw97N7VGmk1VPs5puVfWWqj",
  "key10": "5x93LgthksJCc1zkoZUshxZg53rMWxMkengJK2TsbrYDZVjWqAm4aT5fN6XfwZHgS7yYjtsk6uJyfra3Q2cD8Zsh",
  "key11": "265B9mp6fBtemSfQg2HoHwmNZS4nj9Vj8oLePc14JnDLrLLLcdx2hQSiZ8RpQbvKQvuFsFyRyGTh7pkPMbQD5mgZ",
  "key12": "2VLGutu2JhCUX3Gt1z11c7skTZN5vUdbib3D1kuKgjwEeN2cg4mj7f4P6uMWvdwcozwg31w3uJvBzR8qna8URvcu",
  "key13": "4t73zKzHLGSkJKgRyj86tcegB9H2NGsx1TDcZWAbqbPzoyck6mV1fDei5iiiJr51QZNjLVTQVzf3Gg5eM6ZqZ5A5",
  "key14": "4B4adPxT5vkMNRsdrzbDWxLxyNivnzEKLEfXYvKiogqu4sLsTyXV5F2UR5TEeLbzmrUNccmvMGzfFUhmtvo7SFCx",
  "key15": "3HohW2wCcoudAgfBPcTkGh9XGUkQgLXZwV6oMSsvBk4NFs9xdS9MMQQBcpERftZoB6xuEQx82aN9ZvTVNqEVJRxw",
  "key16": "HroUecN65qSHizq4MnxKFtYQMmKPcL6UnwdqedDgWjY9ivvHv4oaTGijwbPAv8UkAJNRZ8PkReuboEcgojJCspu",
  "key17": "23uUnG4xAQoSmnc5C4SEuictdgFc1bhiBiA6sMRaJSk7HrC1LtkBFj7jg7iH4XQ9DC7VwVq3ouTH4GyQGMUjWn9g",
  "key18": "2XSdByAHNHuKUPYkpZHV9g7sTYTAro2p9HrGV6V5YBvW28MoyAn39BnFsFBMo4yakCQ6aChenjkbo1dN736dkK6p",
  "key19": "586FGJNGi9qEoTDBVeufZVCMv4pg2aHvvNmSYUiK4i66muQrXJYjSBqVVSSfR2x6CJ5xoSBZF14V3Awkg2W4KV24",
  "key20": "doDcSS1FxEw97BZiZEe3c1gQ3VY2PmTy6X89kUTHSWfhbibjpjhXGsxuDD79Di5R79tkhgTQdxMQRrPcf5zSwXC",
  "key21": "56fy1eNGQAYsr3vfr5WUJzMCPx8xGDwaJ5xLvyR4kT9sfVS3MJjtqgzQjYWJQr4KgsWEgEuXYxeMpD2uZxEgxTQB",
  "key22": "2wgazQcoNM1wsNaSSSZgUi82sJHC8PrgTHuLbgiZshh66svjK16A3xtANdFphFqHxdsCAjyFbef3q4sJdS1ED4VS",
  "key23": "52kGaLbxzxoifZEkxmnpqdGfqERap1q6gJW5sMa4K2F7YpYSXwmH3EEa7sdLLW4a9YEaDNieBYJWuLmQA9JTk2b6",
  "key24": "4t2F1zBCR2icLCK98zq5HiuWa7EUFULndVBkzUf1fVC4LsFDJxTZNsFCAE86S5xoXwAPQ59pKdnDvubRz7gvNDus",
  "key25": "3cmnHr9rKSBoohFatc5XuyNoa4BCaQai9oiWufJgkTdNY49kckX6XMczRo63NgGKxBjDpmoC5Xn9fizCf42rQcyF",
  "key26": "5DuhRjjzKziMnRsqqq5fZ5dx3Y7gfEMXX2r9gjhD7vLm3CBky6gWPP1RGpWmNGKBAbqpKX69UFc9m67yg5v35kCv",
  "key27": "2vV3SwSzPVmeevvkDpFrkdHG1qMJoEucZ2b6U9NUDs8iRCUcMqMHnRCuLmcqimBnbk46k4eEM4gBiDiU9KJ1JhfT",
  "key28": "tx8TMKhW1uDJ4g86gTPJk2j4vt3qcHNSNRppnWcgLxHMRod93BhueA2EYnTXHGYAPyTo8GN7JEUuYJ943Gehy6C",
  "key29": "4rD1rGsx8R2M9PNykEJbjZDyuHZtbiSMAaNWLejQn4QJQZZvSHGZWYbf7Z9RDDEnMFZ7K89JbmEQoeYzspXv5qbC",
  "key30": "51Amer5frsWtgxmJQ6dxZhk4ADp9iSHGzNdtPY9jPyTWewkWmqLfHNYHMBRdvQJ3yU1zX8LTbm7zMR3YpZZGh99J"
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
