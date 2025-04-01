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
    "5PeHqxVKvNMtvBsW9bgVtYdUdGr586WAeuqWLVhNHobshpxrf9cMMWYJarsGpWpSPEnCsTR7rVELtMF1MXMnvaBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LnQZs11Ahb2T7vyeeTtXQgLvKmDox2eQfaJxgNG3jnpVrCiCmpxZ8A3sutJuETeKwMgoB79ec4163u2q2gWqr6q",
  "key1": "4F4D9vWu423hnL9iHCeN9NBvqFz737inCzYrquHAwETUXGF5Gy9kPj8ELdhnL3kyQG4sAhjrtJDtrnjySaQ7NTWi",
  "key2": "59gEneDMrsVxZgtchxcLajJ3DRsQiSfS65FaUUkbtD4DzCTXMSD9xZ4CmSHo6VHCYUw75N8fwvBLRsVznniGL7qY",
  "key3": "219m9zLNZVLSPskCsS4mvoZJh4rzx3tb23SDt1nN76grkQSqHPmurfAJgu8psSxcTjbL3QVQhZd18MHAUutpP4k4",
  "key4": "57pNVNrwDUsWfY9gPggfgSjF5cduZaYVAGE5x7Z4fK3P6Q3kjTeUDbB9AqwBMGREHJTpVYmJ2TAaAVhWqkUayHZe",
  "key5": "tvuanUF5VxyeJ5H4p9E6zqd7E4KSRtANz2JNm51avay8KZ15hUHy93oVakw4VNRni9aKgzPqpMpBXCVP2M1q8zr",
  "key6": "3mypnTK3TwAJex1nE4zykDU8UWnSmNskCwQgPbxRA6hVdUSNrG4pPVSVgneiYiF2wMWMSky5P8VqX52urCbqmi3t",
  "key7": "3uwQc4b2NBbBUz49s9X8tYaUTYpXUYpFV73o3EWRRSnjSPCgz5i1xsyJd1fxgjsueF1U5cVBCFBU5kMsQww8HEFi",
  "key8": "4GRqTMefmF5Zh3oP1Snm9nYhwpB6ZcGGA5KFEiWp2LVbJUaQAysqzA3cRrbENEexATPWvzbCzjRQFnbJZyk268eV",
  "key9": "25JgRdzwwaqTZBR5jPR2GgvoJPKzAohiaGqpRpCG8nhzVtwqUzWcAv3E7cr2wfpmfD4Y4pRRMGGjaVZUNhK6wDFq",
  "key10": "5NmyXaPuXrYxTfDQdYivVubL47yQVVeu7Yu1EU3icRXoPD2ejUpaeUnE3hySLjovGT8uVVKBQMYCaa8wumpg8Mzv",
  "key11": "2APmXdatP6YTEFunKCNNmXtbDjPYRUcvAqFRt1KeDgwHutA3zo7Aja1mrjrtJiP4X9SgzqsqN63DWwv3NSJvCozo",
  "key12": "L4CUpEWN5ntvEAaQNPviDJX9F8vh7fFwRyc9akrtbQX9PyY7xSXmJpbDcyNa7RpNpcap4G8dE4ZpJxJbwP9kcDs",
  "key13": "2ByB3wLgaK691sUzfJt4cd4f9g7EMPFGdtLQa3mVCLGvEVxEunfS1ua8TLcFHhEkP44xGLaAL8NggDcc5Gt2rCb1",
  "key14": "E76ejebeEQVdcSvJnL6SVwvPybs52rgbeWegPfz2ctCbkHXZvArsqg8dqkKzMfK2WbtDxmDH6fL8xzGtyQL7Z77",
  "key15": "tAtTtyQcWRrHAXcBw2DsKumDQHWE6c1bRqVAHvbkxfrswryP8MqrfzpEasmnWuKNH6foqBh2S2cYmDngmYoZPzb",
  "key16": "rHqp5DKsfAbnJWCQLu5YsmZ5PYWVyUHk816DVDMvQahW4Gu7Avax5ovg5z3pgGXGLbH9MHgUYZN5G8v6UknJ6D8",
  "key17": "hABeQyzSN4BYgGcN4NjR9G4eXvoJnKLHU3dJeyFYBjMA9wiSJ4Lkc1j4G5LXUn2zYwDjDmqtPXdDrv3rJx9MNDd",
  "key18": "3nF2SdXMowD8nahuCMYEcCACVyECbR7EH39j5QVWzDjzSbxB8crKdpX3cCAdNroMspyHr4jnp6XqkWkqKGWpkG2M",
  "key19": "3meBBUU2aCNkbufjgDjPNULWvvdH5LrqUfUFKtmrAZzBi6vA4GKcHHsMLSfLmqJ33hrLxwZqmty3s7dfpBmyLHo6",
  "key20": "2r7CJrdMHBvkP6hboHeAFGHSHyQE3FL1D5ZPp7NUd8BrXtTwYMzbiREynaGJBPrEvAktKVPWWB2uJHN8Z13Q1RH8",
  "key21": "61fsg74N5w91iApPMRhttpa57gepQBQ916H6Gv7teqsxuyTcPHsXGABeSvZdHrgxaAhUskgUYfChqg4qAYbpjMJn",
  "key22": "4zMjtdvUcWsk6miJMg4BFHqtXYLkbtcQSGMeZxDkiLi36DZZYo9DZ5FRUGBcMA7ymL79vsRJfarapmiGiaFvhhKA",
  "key23": "4Z4WpSU2iWD79W5pg3P6bLR4j1g7i6vsGLs6e42W84rVeBg3HDrNkZDUWPckBb6ESnW3i5tnPD2igiwLzXm4FcRb",
  "key24": "4fX72HusVRHe2pNC1fponJGvszkRx7GsUxc53kUcm7ydqefcc7ZbNLfKAeXDW2RKedeYeRVyrawTGV7KeJJiYjkm",
  "key25": "3yytoC7ZwkwsPFpvaajHoHpY6puBGskUqtUuVvrv7YjvcdLzxgVNH35zuyPkc1aFUSX8QcKwA3QR5i9jceEzMf2u",
  "key26": "4iJHVUywjRPGgrsbCT3SoZKJFyNBPf76G6gNqKXv9PdMgQzDAfAfiCGtFmkspYzrinXU7SDas2JUNcoWSCgmni7W",
  "key27": "72mJc45C9MQNbxHiUFW1PJeEs7PNbYLHyvXqCT8eQPv4BxKNHrasKdAzsdyj5FQ6Y93QEUPFhuBMhiisyt99QUV",
  "key28": "4h7NF5EKWPJBhkEbtMb4KP7yU4jF29r7r1y2eNHixrCGSFwRTeUNm4PcXMp5T42RMFjo2ynvwiKmDeibJnfshZSH",
  "key29": "2kXHoR1M2NwBiPLux8eFuNwGZotddExh1J6M7XVh1tKaN4YRJ8LBYBTUnWMVKKhdWtWKMCugTwiB4ymev3byptRh",
  "key30": "3cvV3gcrHDsVWihypDTCByeumAC7fcaNqntp9nWf4umUBiuE1PLHhDyEnp3Ph7BmB8X2eF6pbc22hBBhUnN71EoP",
  "key31": "51SXznEpxvW9ovygvfgVZKKnXuo9jHTGrbc919mNhLXeoGxLYBFnSFDztAFdetWsaaAmwWCo7kjjzEbb38iqiA8",
  "key32": "KX3DHcJP1i2f9tK2ukq2ouGXsem22szp12iYYszyRFtUCSeKBVYjnfkTjeZcxjNjnjBqWchgGZMzTkas5MX6YYb",
  "key33": "2vguo5shtKuc8gKqHt88nkv9dyTKVrP2VU2kWjjTwZ3fw7fFKoGzJBPEDBjkhC6C2d1KCuQGGqppemvEpSb22RGL",
  "key34": "5cH8LHMywo4L2Ww5KHrSNGKBk3nSasXYiag7USTYfXs8AU55ASQDQ6yK3oRggnjMGi6Lwojc5uAYYiwDh9QFJ5LV",
  "key35": "VWAWsfz8UFr44izRX7VMChziKDT3dQ4naoWJU6Qaehffw3fRQGvCJbvHniQFdukdjngFPMvvNkkW3TEmE7Lr373",
  "key36": "5treNTCTkwaNCS9jA9G9qtTpyC5s5pxqe5h3M4RBnqMWHrWtrBNdjE49knL2W9GD8zXQxraWYMM4GLC9AS2jn3QH"
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
