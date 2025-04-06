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
    "66tGB4mH3RLuunTB3nK5nzXj7FW4mmtizqt5PswqkySfTbUFdYaUJd7nz6RfWvZvUeGopV9FYodoM1JvQkTcZhEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RxXY9MSBxuZnrGMmuk21a3qU1Ycb2iLcREGmsFf3L3QrtaBUr88DQnUCmQFhiYHptQPxeZ1qk1qqXQYdPN93hAk",
  "key1": "3qRkNvPhXZmJAduW7SDJw4XTKr5Gr3L6JM94v9FgrGdcCd3rg45eJSa9NHQ2ZVdAkYeL2nRWcA7mRumPHqyc5n6s",
  "key2": "4UuFDbuhsTv1yndsePopb6t8mnvs2qq31He6fDywLbQxCzAANFJ1XJFHmB4jA41TpBdLRid9nmKyWDqS49eHnroE",
  "key3": "2vW2BvEYYbuN3t7r2WSNj7V1xgpjSTQqJhdpTHLavE77MW7T1o8dYnvygQ1cik3G9g9oU775R5V1PMDk4kFEVWXt",
  "key4": "123THVtS6A1Vq5kmNuhxbJuw7wo8PW7jf1oq3JVAEx2eQHa1L6wayB1P28vhWpQv9HbJH28JyVmem12nRT2fGu3h",
  "key5": "5VWDGtbfHofWiaeFG5v7FvDh9zW8vVeQFWKJumb5pyG2s9fPfzNxNu9RmM2RwNo4yEauLDun5Mur9QHqSu6kJCjC",
  "key6": "4QQojJaajxGFUw2A9C9RUhUSv3j8V9asBDqNSk3KQGALRzPd68JjkZ1i1HRqcCSA3xvgwG4Adg8FEJjqSo3yttUV",
  "key7": "3Fk9D44RGPMkBeweRkYimKTHEMrhrwyiKmvkFmmyLPfdMZRd5TvXkRUoQpASM6iZHpL1qK8FVr9QfSvosC66YuFM",
  "key8": "5GN4r9VVZxBck5s1XtujhFzBRMWpv34zwC71W73urQXZgtKxtEjvursRWY9HibkbTJTEoyJjxd6cK7wR9azCRX4C",
  "key9": "4cjzt9DgVAhjvzQcnDNvcQG3t7HayRMs2nrGbpeqZoE1WPWTvCvqJGuqeXf3WvbqKVEhbPqPi8CTHjgfBGmNeodV",
  "key10": "5QqkFwHstZ7dMt4R4pZUPEu3KcmDFXxavxgkzDXxaxrZDmDnDd8S9oijekxkboshodn6S7FZnCPowYb8crMEfPtc",
  "key11": "2j4XjDwin9y6gccArjoHLD7HMDT3V9xToZacYsYDNwMZ3yT4n6n6bmAjqV6mu7NMVHtFiasbxjSLNH5tPhCpQhtk",
  "key12": "4LjTpCLFydnskaVjtBQv8yik7zXuAokS2YZLVcQCuN35Gd2ijJe2VqZ1DkzCcQPR8DPN728shC5XMBxRhjzhk4EH",
  "key13": "3nNixaDRBtWB85ghevSyErYmFpST7GUp1AUaQwkXHGBB1sW6TCBdwtZSGnWBFsKFKWrrZYY5btWDxJxLQtcBkn4W",
  "key14": "4wVJ76uxePDGKvuhMuKHp8GLWV7k1mxUfrZUk2JjH86U2k5DfT1kEN1Gzx4euFZRHrFzmeaNgrCuMvF7LbxW4p2X",
  "key15": "2b1WwHfm7c3TupcKwtfwMSK6EjAQnTJpccWL6sGgu8BgJePNg1bpmRmdYjaYTuhu4hLAKk32YM1zMXyhoo7L8bQF",
  "key16": "3nw2sp5c6mT7jj5FXS5gndWAUAMMijBm9cHQGB89b1Uocb77W2Z4yXAKhD8wgz4U9MiPwUAWVjuLNcYMqFQQCCnY",
  "key17": "4Q2wR4uxLzjs6wDbPmpK8NZFnniK7M4hyDGJVmGTE74eGTzYUK8rGvCGJmvU1Vz2uVVL2vQwxMGFiT2srhoZN5eE",
  "key18": "4NxHNJzNdyqD6DizKsTd17RQC1yHynBkYsR2a1mHFBZKHXa7snwtXVYyuEGY1RaYSBWKTpdQMdpiQo6YzxREVEGr",
  "key19": "2S97yJvSSEWBppSUd7k1rRRdcuLyM9AywStN4hLrAGBFfevhwU6QtXS63YxwDCh41kdYgqk8B8B9RXASQqCMZh8L",
  "key20": "Ch7qn9V7Tbb4dV4d75MFDoctkMb77Xm8621opkwYyT8sDVHoG7xvyit85BLG7dLadYj4ETToyuKuDUE8D7jjDPk",
  "key21": "4RHDGmtrdvKPGMQA4cS8g4iys98Qkd9XCU1t1UMd93CapKmkiQ2ApDvrfkd5eVJowy9CcZPQC5NcWUoEyH44uxqS",
  "key22": "2Zjxwzxo1Zd9a9gYaV9qELjhZmMT8ww924nkssgZ1AZYWFqCHHHRdXpzJ36Gz8EcQMLG61LvE66yvzTEmD1UWfSv",
  "key23": "3sn4e4CWqh8bQ8ZUpGqQxhbksPPAB1GhraoSwpBkbyADKPpegU5oqjF4kHyMacRGFEqr3fEXRcCJ4ATp1ZRRKAzn",
  "key24": "32NSMRhYA2BH2dKep27KVFjGFmjWX81K3FSyCFFb9Ej8yVHLRv11hWq5TABhaZk4urA8gu32UmADgrXSwoQuXs8f",
  "key25": "36wUBE71pCRmEmdGNMRwAi56nRbRBUW9trQNgTx7AjZRkyTmka7MStyuRycZ16MPpTxcKayKoyiTkwcC2CsAaBdK",
  "key26": "4evXFX9fqvtnSn21yyNgJrok6CCjs4ka5Gfd9ZBvVxY1HT9D7cBpRKhHJFA2bVzPm6hhxb28bqPbY2qoYUf9sqCq",
  "key27": "3G6mmc255mS5K7pJHX2uiCcnGwGzW529wva6JY8ZbEzwXZMixcDSjNNfd352QmGKLuWZazHRd4x7GR4e8GXs3yp2",
  "key28": "59RjjdCjx4T7DoudxoZPU4RkEdQoG5rY4zigRKJjWNweTR98LaeWjDGuRDnB8YVkB45sREvfui7eqP62MZ4BFVFr",
  "key29": "3QgxSN9jsQErkzMmM1mtavEsKDXcDVJ4L68TCVMmbk9Vp3mEMAdhHHVSvwSpVKhGZovFs7Ge4gpEXfbXcKTStzmw",
  "key30": "4FxxyZ4AcMPds3FUXZkXSuuvR8wnc7nBiM2Vrh1CqmA3WFM49HzXdH9EDk3GsM69UWhtotBTBiDxVVRV7pi9KnTq",
  "key31": "5ABD6yo5WXKWhxzsd7Ha1EvXhUFg3ALyaDxxpSafM8uv4Hn4fEZRDzhLes6djP4vC6Uv2Wpxu4iNTixm5YT6bRcA",
  "key32": "MVFMzP4J9MFW9WeSdbXPEqm6CM8VZNhHKBVmq3HyC8LVjmP8VSUVEn7n3rM8d23DsFYACKA8TvGny6SiqS9NxT8",
  "key33": "3F9XVYEiWH4GXg8xofsJ5scHZMc3AVWXh6iNv2EouR27BAxJxt3sdafmzemiS5UUjFwEi43G87JdmR25DTiz4CaJ",
  "key34": "3CrqDV15jkB5eyK1nMWmGXgjQ1B1j8yMWhU5u4evejZsGbGahn8aFzDTBebbqbG1hGxxQ4uDZ6Q5rQKr6JoC9U9s",
  "key35": "5JoSdeotvVtK8YuY9DvRa25GfXAqkuiyGKZB28BL5cGkpRQByVmLr32ATmMS8EgnFMncDuB9jN1FJ8AEjEz447UJ",
  "key36": "4tbCsPKiYAsP2hbxP9Wzx95r4nQrCw9KW3eoLne8HSWnraA5NvSF7ZgBvFXdiHkePPsFDGGqMnqMNfS4qSsdS6K9",
  "key37": "4mPdWwiPPeAikUaFwRHMZLddck9nzxsXrVG3c2vsip4KqLw5okPn3yzpj66J4yZtWZfgxs9d8CaUViJPBU2FcDZL"
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
