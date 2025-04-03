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
    "3o11rCdXiQa4RPXAnZzaNP8PTtG9hNAn2g3M2zwvFHGVukJbARcfLJU1A7NTFJtuUUPwZBtiQ7WJM8apEdcwpugB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xg37XMGtGg2DQqjrfCb6f49b1DBs8S4gKgC5xKAtHV9W4zs48u6PjmKbWP6oEZerxoUZ8gRgct7wM6s19xLF4cv",
  "key1": "2chWpUMjx9yJKEaAZr3XQxx84KP5SusNHC9XeuJd58rWzxGZFJ7J41D1pe4GkdFiiB9bRoV4LC4UcVfuxsFzEXso",
  "key2": "3G14ngXWskHPbNcPtubjfZ83foTTxipNcUL4HkBMos3XKTd3TJTT3VdsodZ8R1LDNAN9osinrNnWFBNQ1NUkmjdq",
  "key3": "42ewujPDQJxMeJGpbSn7PwLnsRTfZD1PrSKDjQawzBEs9QGvysu3BXhianhaGqQYSdRum6ACYsDNw6tQkKBy4Xc8",
  "key4": "34P9GQTJ9KcA6LG2jm9geCsB25nkaBVhEAhyUuU48FaCBWk5Hzp2v8k4bLiLwUzaxypzCdyQrzBW6iB2RGmw1Mpq",
  "key5": "SQd8otKoor4rhtjtr4mbsetzMhwXJze9AGMChC6LcGkrEyCArFVy546gyNQYof93V4L4wGc3HoE6amuumTQzqvA",
  "key6": "3euhS1TvwfWUCm8FiX3h45yVHYonB33ZeUFMf35ndNC8EPGZ2qoVJhq3SFcFHib8jaC4yqyMFJHpg9qaQ1oSybZM",
  "key7": "66Ke7HCcikd1dKbxwMC922k7jUkVrZRA3UVuwLYDgip5iRcb1MxN8tqpkLcNxTNbYGMa1XqGmpoPLXRbmHj8J889",
  "key8": "5fc1ZAsTRBgMspoTwZdbtJpscnb46eMTHDw9HJKbTQhCkuYtLEZfq2UFJVxebd8zQdpkVE5w1q2GmfDSH1rEmvu",
  "key9": "2qWcioGxZUAXoQdCjGPkX65iNBRHqqhxQfLfUoYiUAhSCgw1EQ2v1q7qqj2GZQYqbrtFmf6cXWknxxahAttBVT7G",
  "key10": "4sYob8URR8neoNiZ9Xuh3QqTRxjvuSvmQiXijKbesFXcoyLb9wXfp2pWV26TNSQAwD3PJ2yiEdTPJaQCvYePFYaT",
  "key11": "2pz52FWDkYyw6JJsZBtDojT1rdYJnSMGsgCJAooSKSd3kinm7Q3mLYzQXC1UNfpKmUcvGGybjJtNp9zXGxNjEF8N",
  "key12": "3FxoPECBg6iXqod8Z9xeKephiejx5NWUrWqQioc5MMg7jzgTxZQrwX1SeXCv6jFZK2hBC66r8enGGTkAtfdFqeuf",
  "key13": "3o3cKS2VwV5jtxXCUwHqeYwFyjxPb8ZJuq6KbZxv2TmnUJ4qvhNc3ZNMJBH6MTdhdBjrWa3Syy5pHrXesQstF2nY",
  "key14": "2CqtG3kRaBYdZi6dkSCxovVC8qbMBk3EGf9pkp1Qpr8bAdbbAaKFpEPC1ZgeDUjUeK4A3vjXoSoedjcxzutaj5zj",
  "key15": "3iV4UyivkqwTBJjkHdRM2sCUMxYQ82361Fwb7tnMKVrEtr39JdXS1rpy95679jBYuj4g47mnntptdavQNEB3yvNp",
  "key16": "3GjE7XSCivrG1kJYYS8YwUBSwYgonQ5oFq3qcJgqXpqXE431gcwzusfbRyHh3vqPYxLB4ND8g6xZ5ogTr2NxhheF",
  "key17": "42jLnAocG5C2ftt1yzzMzbPHVUpxd3xahAkpH9TUmPenteokNqihunxeHH3WocVZvcrrWoad9iE9kWHCvBhYq4wp",
  "key18": "5aUDXkWEb5sEiZuM64FqQ4ME8bg8ad8c7nkX55Ku6CEbVfkVaXfqUhzdF1rCLNDDuqFTyS7RbKSsDGrBwzEyxGKy",
  "key19": "4uKhpo2tAMv8RDu7kfJm1zBt9zgaYR5BiFxtHMVkSZSShGN1GqAbyVgQEqXXkqLevJZZQ7a45DaYciACf8oyvteo",
  "key20": "39wfVVcZhAQbFzEC7PmHVLmorRTU57yFuNYUwiwKPDfRes8CELZVLVDhU9wupkJZTGVuXnPgpaW6aWrbCZd3xy9Q",
  "key21": "2wqrGmkkYfCQRu9sjsegMynUj3fcMARyizBvCxVc3fUSLbPcDsy9T5Kn43df5vfz4VUTMSvhPEaM1qwA3TKR1Sd3",
  "key22": "4H8omfE7CbHaB45iY8AGhXitkTF6f9Kj8AjTq7neoAqDJqiFFRYyT6qxzbeMpemVPjZmNiAMfX59AES1MAPdFphY",
  "key23": "3QKjZXFTZmWcmGHKqButaH9PBRKAaVP45Jpr7tJ3SxuEsNpbzU3P4ACUe95aYejKgfhkHxjr8bLBzmu1pyyqAihR",
  "key24": "3nJVgbw3im1Hkbiujd9gUv61aGarLqDzgajSUb9WtzsmKmRUuPkH2jYpBYFz1kDqSG6QvS5HPTBjhGo6esvBWMUo",
  "key25": "HeH8W2R9qNxVdfGyaKtVAomo8ZBkv2L4TiBpCX1ZXuXffoQNqxgy3PjsckLKorKKCT5TtEFUQVwFJbTt7vHuAHF",
  "key26": "3UsQNCEaRNd2NTdCmapiU8Xyh3VE8VswVanZjn4LTaAwKybZdGALMeCFgeCQGsbeuM2qQYHLTL983VKHB22TPWGA",
  "key27": "3BLq1fnMGQxBC1t7ZxEKPm57QQvFSW9WW8hvT43jRRdr24ndWLjVpsxRXXb6fpQXajqw9nxxD6GjHbp32NVnpzAz",
  "key28": "2AcKJGoBNPNQKDuT2b784BTzLG86dMvNALzEnbWkbDx8QG6jRSqaEvFbZfD2JNpg1tn5WrcHTakxZCvCCrfYQet5",
  "key29": "LoTLc3EadpEpKZR2UPbCztbPitgZdn9m7dg9Bq6L5B22rrP63BHWCLf6sZYtJzQ9TqRQciDWtAKDYCeJgoWR6CL",
  "key30": "4xA2LFzaJNTm8YTgDCL95h5QQxa8CW5XZxdbB9NBmPmrMREh9x6EFMmRAdg2sxM93rAjRQeGQfcMUoanBCcfQJqT",
  "key31": "5escGgT6tXVRALGjFkm3zgyc74cT6MrYwf4wxv8k5nKycaoQSZQFLFAKojK4vkHiZbRMmRBZK8yyYkhx1DuRnAh4",
  "key32": "3AF9icLUZxon2xa6Vh8fwGGSTgtwuXqUS4jdiAf5qDrCDusKELQznGP6xcLb4jXC6WA8K4VH5ZknFXu2FbSw9KE9",
  "key33": "3KCc1GqtQwKy9cjud4oVB6PxkxvLnYoShS1u44q5y4DifBpRmF4EGuYfUKF8Bjo2HCQ6bELxQc6WoBiT3bbLCakQ",
  "key34": "2ch69FbRPLnzvmy73bCYCvZb9w1JDNXJ6xhb7uPTuXpZStnjuia3NRMXRfgAKSjEDFBGLQn84eTYhBM9z7eMrrTD",
  "key35": "5Zq1chfGyvQUVYSv54weB2xiWp59xHdaxPN2H7ifJ8KHkGAWuRAKxs3b1vSN8RKjktD6hFrTPTYHk38eR31tfALY"
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
