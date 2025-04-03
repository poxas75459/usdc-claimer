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
    "4Nj9DtC4RyHmi84S6qPJYjLGQ3T5oTPzheTYAAdkVn2vwxsYrm4A97LyPqAg3RSHQxNciqtVi3xNjEAoR1FZL4eb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x8W9W3DGU1GCfvw2Q1U7cxxctE7Tb7uHS6CZfasygfY7RfaNpZBHiW2d58pHfDPtZynAFwk4qkLJJtTssdm7cZ",
  "key1": "2uVbUieFgxWTu2gPbQfX44c7XcbgZ3sHDVHLjqgJLjLCB9mCCk9dtKjPFVPS2xtM9gMvuGqvzBGGZSntQtd9PvFj",
  "key2": "32MNsb8cFcscLNKmhxXz5LvDq7G9iNmHYp36kbTFWV8jyuSKMHn3H2RzV2a28sFzLDeG7QciZVMyMrepvf5a2bTN",
  "key3": "koa8zM9T1kY4Qm6GbRNrKTQR4CXEqf1LzT5US1m4Uq9nrc7R5sncXhQUZThdKnUfVugRvoDkbcjXepy6g13bYk7",
  "key4": "3ebN8GaknhJ4e3etx1PQf3anLuidu8sq4rZwxdVJmyfWSVZ1jRpxD6TSFAvnpYYmBWLrHdcTbiCdvLJDoSEpt4BA",
  "key5": "3TnakPLzNQaDGaAuJvuyuAeACDpcv3SEcoyBMmn2FTQgz1WKgP3Bu8GSRtz6j7bb3wYWf8zmdLAxpEJUYUb4ydcc",
  "key6": "5gML89tZmD7rTQ8rWRAjBc7E3q1oUXQfSFDjZBmw4nFWeu2M4qobBJq8W5HuVUHRdg9kdDokdarKQmBtkYDhfxBB",
  "key7": "3NZ14PtiDtJK9VHVKYSaUZTTkt1tXDYjtyy9PQ1xnNH3ysVDkeVB4d4tTmupHmRo81CbDCZyBTDxNhoSrDbt8Pwj",
  "key8": "2BGZ8kWF1KDvNCoa583Lpfhdm6TtxMhX4HoopJMvDhNp5B7Ey4yJ9nMf5A1bUHT21ZpWDrWdqN5DSZKenYFRaq1N",
  "key9": "2o3wLK9e3X5ANddnmpS2Duivx89oC9chiEoye45qBKvUYJBrnBMjvwCSZr4xFPJz9gUsfEAJGgHY9Q4MqG947Ht2",
  "key10": "pkKq8fuKA9pPdXouv4esonRQPsZb8JMpVh5uNXZGFKKX1a37zu1AebXm6Qr5zerVcxg2mDqHGifd1GSRhN2TDUD",
  "key11": "26CgFd7sDdsJB7ZbVVxc3UsCChnzF76Yfo1vroKvWxskw334iA3qAM1ma3gdhvFw3y9qvsPPrYaLAsdF1hRknF3V",
  "key12": "4JuksiBEACEvFXafFVjdTuJC3X7Xm9etGN5cxSXN4YKaB2CBuhp16tVHweDJK7EZNR1We9k6CedZJ1zBrJ6rDhSZ",
  "key13": "2mgQMpYrj8ePAWP8Av4RHZw5bpKQa29ZjCnhASCfMPDU69E1Rxznxk8v9b3QcsZjhYB3K4fMVeLTViJgegJUU6K1",
  "key14": "3aW1aXWHsyj3z8uKJFJSqHpc1sY7cLkSWcwz8mi9dgBxidaAhNyt3DjFyopgwTPddDtvpL2EMFxKhkMFK5micsQs",
  "key15": "3JprBR5my1yoVikHB27EC2pkLcGJseENNzc2z6sSqGk2bkssBZfiZqaToiL1m48ccLKAm8Wy1XRhbydt66Tepsp1",
  "key16": "633wZ5Bzrsjq9YbyHnWfcsDSW3omXnUhJZEzzxvGQWr4SzdeEh6tDDJpowcmDxchxHUmQvVgGao1fosEpfwS6QWC",
  "key17": "3ZqXPPMUWV6cah8hicCQkj7bPJem3FHN1EkggrLu7tYHxo79APQsKVeJu1VBANNvGce8apmthWnCGjBXerfe3sDF",
  "key18": "5ob9PgMNiqmEKkq4YYeTVXCCHiGm5cpY2WfRmsGGg49kLiciECzDRqLo6B7EmTDLF756GWaxgYt7g7XFz5jdCy16",
  "key19": "3TpKJ6eP3vXh3PS8BU8YFRQvdrkjsSPQEjqjbTnHJJCL3AnyJD2WVoTyqgqR4cNsie8HHNb5FMWqESHk2DJbNYdf",
  "key20": "4QqCcLS6zCZspz61L8WHHy9xVnWEkfQm8Qy45wLodjYhnSKeAMAGckKppsGqt6rrwUMGjU6Xxs13ouA1sq8xb36Z",
  "key21": "399KsF2W56S8i6856g6i7tMqT3btQfJS2YASBFVKJFw45TdJDnAZKrnomXDkyjd9kAWR2FV1iCW4Pb2kZJwauW25",
  "key22": "5JxZAUDiauMCZp5xgtMSCEBAu55JsR8VtoNgGZC4gvrgYfvyxczQ38oCU2RGRCg3kTuwmjgawd4qq1pSjemfkaxW",
  "key23": "27E5jGXsvgJYpdjQ6WCKSWYBQ2fyarRdABVBehTHLb83HeifDszAMaqb7Ga4MPuQTRzs5KQeNJsFJpPHjSGJpra5",
  "key24": "38t293VoMf1RCcKVMq1E5TpSSuYis6MtAZSvnGvmw7wFtrYGJeErStJ7HqzFnphs1WtZzD5zfYUd9b1QE2HZ1pTe",
  "key25": "3QLy2KoATZhE79QRX2w5TdXBnoGytB6EUU5emnygBb1jGNRWM8CLJvUUBbkZp1fUFd6eV84xev6FdFPBsSYTZfDp",
  "key26": "3JJXQ29fAU4bzLrV6GAsuxmTQJvQ9u7oJnRxQamaDuhdJUjyMirhwSU5wASnrgTdoP59GB4QQXzbS7nwgSGibVP8",
  "key27": "2QVcD1EkQe8ugXziZb7VJaZHgbG5UZFtnEedaSwuZ22QfRtaxTsifB6psAVmtYJc2FK1GiiLL8JoRoLyC6EeA8p1",
  "key28": "4KoJRnCY59U838wgudazwYNHhVwpybcywD24PqEnj3KtnvwrGdddJ9qkqUaFvV196iXM6dhbQ6KZZeDeyb8131QE",
  "key29": "4MtsCA25svUrHDFYMi1KVYLi92cZP3K8McAzv7s1DzPWoaiGcyMcqaNbSLmsGmereq5fvbsVCKs1mQJTtZY4SogS",
  "key30": "5Ck5R76EbosDmm56T6JjyQg7LGKKKcYnrMwD9UQuHAoaFnbzrbB8cUiUdC6gof8GqRCBVwSnunWKQZ6Squkymz2Q",
  "key31": "rnRhMqVuZz7Vusz6VLJf5CgEGiQdSzp7hUEsUuiJRqxh6RZksguYcUasGYJLbW8sKCk1eHuFsha3VnCYLmYVTR1",
  "key32": "4M418iQwpHv2rBUfaUWgkxX3mza6Rmu4J26P2AdVfVH2NfXEb4GY5MN7rESC9WTxKoi5BrTqJN2KbDz55XpMAyh8",
  "key33": "21cmJagqu6xnyDK8xWSKTcGb2JLaho3JwH4g88fsJpFwh9wPuJVGeeGstoJRe1DcexNCH94wzQocf2uawyRYgcwi",
  "key34": "2JQh74zFHNr4iv33bR94yk6fiRq1NC8ScMiSvSWsivK772Xy5R9h1h1MT75Xa8Qyx6HxXCA48vYRzhAYbcGJTNgK",
  "key35": "JuKdi4HomkJjmYXN2xM7qsZt7nAKpacrn8fhvGeZYHTjYiimJQ5AqLoM7PrXvhMYZAJE26SsnkLSewdxXnwfabp",
  "key36": "4WULhZLFVZEPRYaaEiiinwtCXeBieTFwuwfRCHjJvehGrJbeFbNitT2SN4S8TkxhJoWPqrDPYFdtLMmgQbz84AuE",
  "key37": "3mxJ2bmMpcM3oVN5aaUSDJ6T2YTE61SJ3F5RakYNQCtqr9pMJQUnffNVwpFeWfUgt5qa6DASCDFAJ3AXSmRXweZY",
  "key38": "4vD9N3BApoDXtY7cNCdWEuYnrATf8CeG8sXbKWZvQV733qn6L5zdq1ixnKGofxcq6h1sPbCuc3tGksnHNK9Vg8F4",
  "key39": "3PgCRhCwahgFvDKpke4h188WBCBvRgSsk2PHnYMLDHfyRXkbJNZiUQSiiqNWG6WGNn5Eix9HtCK5aiNjyhJLeQTC",
  "key40": "4i8gNR49doEVJKSu3i6uDKQ2iAj3Uzdf9vYm3r4zxkxMMePaeJJGkVpQg11fGHw5hK5uGC56gAPwHThJ4t5DrKu4",
  "key41": "5hn5V9vMY5jU3G2ZddgninEYCeZvdjbp17i2yZpggjAruSFh5sL2eKYSEqcGFepSkGodkt4sXCuuFPXgncysfrDp",
  "key42": "3i1oJLT8cQNU3XJwpqV2vVQZ9YsduiWgFYa7tZRc9iu3znEg1edXWEawAnphFKFpAT5FqcDQbWEVC7zmnHfeuwZg",
  "key43": "dAsG7iMdR7WciG5GaELTWa5WZJW8MCDdh4br1dD3Rkzf6QPbG54s493MTo6653T3sxoDdwrWpVjjQKL61ArqegS",
  "key44": "3vS8Se3c9jKRtVn6XYnqTpmMDhabMaR9unSh7bgrB8TE8LeYxT4Wa7aWXUGyxHhVLQqNtVyRudnNjyJvHhXPNhjm"
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
