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
    "2KkNv7gsKxiQHwjvSRwN7njNUUhXrejBdnweL9iG1fvVCuTZaNKhQbJ6MJhHQGqE53FACsyzw97yd5Cq6Lery6Bv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LD9dAyixxD8AVUyyfD8g9cj6fXp84tWvAHoiNeAJod9D951YVC6Ze6Hw1aarYhbxVBxdh8P9h3Gk8C3E4n6CepR",
  "key1": "2ACzB4xDU54YaTJxrygsMwVK1JnKovje561nYu8oecpcMyTRaDU1dZcLMNAnfFAFKo6iV81DUpPocvXL3oX6oz78",
  "key2": "H9peHgoW5gKGV6trtSs8ZP7X1iDoFnsCPhd5NRKzGR71MnmaQWPYdAo5n1EZ9EgEziVNfJiT74yqNPXEFMYssr4",
  "key3": "kBk5bGw5vRCpwc8HEjkvM3g2yCNFiqXUJkTtRD8CW7GJETPQFmoacmwMtdZhD3jukhraX6UVrHH8RUXAD31x1vm",
  "key4": "43B6aY3GNKQ3MpRHTL7SLGkmcLrvUu8j1xKFugdu1YWRHVb7etAUAb6VeKY2zaAH3auAgJBEbzzrBYPRxGsFB92R",
  "key5": "3GKVr3TZhYFy8ecrrMh44tvfWBQjbss4vb1uqz546dnrdxSBFUiWumyzCot6ewP1ahkJJvdWXRksGaH8dCYWwZ32",
  "key6": "5AdLxbuUyQdXB7s4nbKJDhZ9a4G4ooTYd81PzLUBLAhDwHjUxWGXvfTAgxibMtNojbMANnEynPaSKAoga17cXLk8",
  "key7": "VDAn8ebofdx133sSicLY18bTghH8LaTkfap6FYKUmYaMromH29by8U2YF6ngbWrNgggj7rh3LoHWkpUMjJrQ9PV",
  "key8": "2dtjenpcvg5HoSraHhvKJpadUm9fsdWqwZt5QUCH6br7m5oPvPn7QdAyUGGFjVA3NrK81WGuyYVCgo9byiQyeypC",
  "key9": "xZKPN2LuEUUU7BuihTwkNQMrVshw28PQScFWjhMNBBYNvKs4rfk99QVHuBt6WSA7YRMEdN9pWkNyAhBVuhcZEPt",
  "key10": "q1KymtKAxyqD86GvZAPHZqYVbpq7tGUwnvFS5xYVLHGa41iqSyn6EWhKJRGXmftJrAFju9ka8mabL8DqbZAh35t",
  "key11": "1RhL63MogcbTACiGiscdLEn53jMdHT2aebfYJEvXpCEXaZWudQKxfM4hJfF7sRs9taXAtidmEetx4fZksKjdmcs",
  "key12": "433F2dJvovzH9MLsF5fKEvAWRU8SgL2s2TxQo76p19wEbowXGU1cAR3V8ZpsuXUBtKmeznH47QqStBnQzCjC1ZRN",
  "key13": "5WEnpp5jDB6j8SBy6K2hsVzDDNnLMcHj2ey7yJswS6bGAxSjmiSyVyZcdYcihof9hVFaHARrc17YcYG7LkKNRTuh",
  "key14": "557WgrCd8AkwH5AKtXKt8WHGNU6gD8MRFQsGi2HBjx76pqyVpBJERDR89zy5qFi5iLMpjZdQ6cqGnPHXPSphupXq",
  "key15": "4fAepPSkWwEGMXn7cxwU9rhMMh5NZ14REh1MWZ8rUScYfaBZBb42es5FTAJuhiYJwuFPGBUmkqwxgJKTiGL3wBZX",
  "key16": "2sBwV6rgCyiVD5KY2ZV2gpn1thADcwSMs1zeeojDHYZQC8mt2GmYCdCkj6dXjFrwm2h5dT2dYpQArT6gBguQxN4t",
  "key17": "3FMHkETgkK1bgmYVh4htipzxjZx6A47rZq3WWVzW7uHVPiC6GUS5jDNsUsCTxFjsMoQUYwymQmFBU9GKcWM7cdg2",
  "key18": "5vSMyHAzA7UN25hp6gqJ3CUF2tKr7W8cBb8h5yVtgQJZiuftxJ7Jy44Z3DuU5ft9V4rTMJWRvYd6ZcseFF1KVyba",
  "key19": "2Av1DzokhLtcbrrThRWXHgPgPDV7vJmKvarsfMJQ9M9fHf8F4D4EU5bZY6UQEcTcqk4NrCp8FiX6uqBL5cnPS1G",
  "key20": "2QorYuyd7tBFDGGpmb7wCiyo44YRFyet2HuJspsVjfeuAVSh6btTfNBDRULvBDbJ4nKDCfhX2HphUYan6JRGHyfR",
  "key21": "tJQXqMs1zioJJu9RqVmz52zZi3LFihmHRdctmMyeAspFGn84XqPYcV8f4cdg6WAzJftPW3X1rADc3TFjPM3G3mx",
  "key22": "2Mz18e8fc6VrS38FqcHaEHFSqGVzBTxQQbcS4zkEZprQpdYoSBarirrrXePbkQx8rX4tFTT68dtVq6E5zT4So66Y",
  "key23": "4PnvAkafVqdAgTQBwCXNCL9yi4fuvDvweuAGMpgqX9HWm1CuP3E4TK3ufHqSXbLdT6jy8PMutTJ2nUekpdx7hnJe",
  "key24": "4SZszCHuh8uS8JEgj9qgfPkBw9R3PfCAartB9rXq18d1kFAyjFfoxiuzx7yVY4BPSr7frbauy9MsxqBbdhxZNsUK",
  "key25": "ebgBxSUxsPQHq3zNMs5DYTho6gfHW42CUxs8PyX8yr3XXBmdcWkFLCzXf9ebfpeXhHv54YqBCFM6Gc4BnniHjEk",
  "key26": "7q7m2S8rSeFmA86UPNvM82w1S6NoNqzDfu9LapwLHxjv6dMQTWgUaPtQaswPyrai6dCoMJY3vdGEVHGwpoK1eua",
  "key27": "5v8SdyL4Rg12mpWpHMwZ8KCssghYmzZhQe5w44H8nX8jeWZNLrVC9xwSAfoPuqp2AwSdLFs6G9FcKKYAfBZXn9S1",
  "key28": "4hDMEyYXKspnBxxgMjz9rB66AKCTHxhdfRWUrvWw3DqUT5MSTsaqG7uMj7BLpUnZ6pYrHGxEh3K8LsxnuFXqjno5",
  "key29": "66WJ1P4SsUJw4MDYNRnwTuHnrqLiXanuv9ZqQkY8HHD5PSRFTSvmqkMUxQsuTS9c7xxDtn2UERPFpsmyUnkUqVRF",
  "key30": "288HDRK3FfaDsdkGtce12jpGNE4UNK6ugN2BkQiXHytXtDiW4oTDXDEACHHwySHtLSEKYcV9PedisZsa2G6HhZnT",
  "key31": "2F7Bvbr8J8ibYmmTtpCSWYXCPHLrCUDWL2bxQuAD3rS9bXGNJGj3MNUezeqTzjoGYrHpbWQrGY6apJoVbifCoP5i",
  "key32": "62b27vAB86ZGgq8Ajr2stEg5fsBX4GF5FMQswuaFWQ6HbJTKpm7qYMPLbk7nXg4JZmbPip5UDvrznuaxUe6BbL3X",
  "key33": "dyvCrHDVQ5j9uySaUy7ehTwCr5UqFcdAw916HT9wCSCFw6Y8QS1B3PZy79Mo2LV5sRcVFabF5qrwBj6248GkVcm"
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
