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
    "4VYLzLJeDooZ5DWLif5KAxCrpJ2dWjQNTujMUhUxehCVXWb7qVyUoZvVBxa38YRbXBsyTG7CjEY9RMU8C42JmAoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ucz2TgM8tGhVtgT6hwPYrySFAihqhNdsX2R1QgT374fxNAAkMjXkHiWBFzpkj5szkNA3cLfwahKfh7soeWkA6KK",
  "key1": "QZqXn8P53kw6RYg5NfN7EooxPQ9uzA6zXt8jBZKbxA6dQKd4NS1Jsrqjc7ucoktBhCuCA7A8VHyPpaEovRJjura",
  "key2": "3Uf3mWujdEv9CW6tAQWEAjuhkRsZ1KBeuZNwJSALoYHDERZtbAwATkwuNkSDTR6zxPCV2xaNb4Azs5nytpUVAFzr",
  "key3": "2qhXmhPa1FTF6RdWDWRkSZrcQ65KL1o9QCJxUGwe3Svv9vcRXFVHktR1PzJXCnLGxoZga7sbxeNqbX1S3kf6tQPR",
  "key4": "g3TRuCsTBp7iohPFjfkF6fSR5syHkwYYXdHwtZ5NeZLgR2reKTrsCySy6SP3WSnMnrq6VbXc2YkAEpf8L7vRapm",
  "key5": "2UYwU9kr74zeT2ToRa3DGAme9Fsx3AZrPwcK4siW8EjS4ceU9tE9tNreykvEwf9DFt2WA3N3xrzCBoNugkVu2U23",
  "key6": "3T1NKtrqEMDGeFEqBmwwQAybmFrsC7dwzE7aWJwg6wCDBnWwcjV6merwYdvUwK9Lgu4vXjMgKCQcQsEafYojsNfT",
  "key7": "5XXLh4ZnDQDRWuAjbGrCpuGBPcGYLNbChps5ZeuTTBraQQsXNXxC6QfXMuDBjh9aheTD71q5NFzTRUH9RdGVhMwS",
  "key8": "2eq8bdfXiKwx3N7fA3PunkMyN2VdKRYGBWit9JaNzAGTG69YZZUgHmjUDikoqvSWmZkMubErdDpg4ezHEBkGL81p",
  "key9": "29auwg14U7yHXP8aedhb7mmSVHcsoJpqmMKPDQLRdoUb6Pe9yjWRgPt7VmjurYPMCXDMyH9uEPMQnb6ZTJ9TPnut",
  "key10": "367AyQ55tJwibP4BTjPuNtTEbsWMxVVhBSbF538hCyhsVeKKzq2VUF7xSg99v7NLUgaPGwmNmKrUaQuaQTEZ1vxk",
  "key11": "3g7eqgLRY9z4CVyfYjm6mftH5EB7gyduMdvSW6pnjWZuHMbST2h8q5C3YqM7uhBqK9kGDDpiPnGnecNdn6jeMZtJ",
  "key12": "5146YPJKS9cTSjC18fkxTXRxSepBu2a3asMWiY9YPmTF5oFiDf6u5N2JGVgKADZ3KB2RXFGD4sG54931qr3c3DEq",
  "key13": "UTw7uH6mSYy8QXdMDHDne7WUrQR5D5tHKAerp3pxYCX1oMb7kdTVeLEj6pvTiacG97v3RV5RcpQPGmLuefZuNC6",
  "key14": "5freQKnoh9weboKv2nHxSR3EyaDbmz55szxByL1TSEYsCjafGUJDHf39LCh6beC8rX3HzJFM5V7MmLA9LdEt6jPG",
  "key15": "51qLfQyiQUYFT6bMDxDuGRq3wXkRJoWZ39Sfj5o5M7u5cMfr3DavzwVb3AKLTP5EP88UM7c5n82tN7Jn5hwbhkaA",
  "key16": "5bLTNWeT3NagAihvNj8dmY8J4p4fSd9a5LFVjguenGHs3Sn5vdbwAZsSjf2FfZy9UX4Tm6UbM9yRkAJ4f7cuKwN",
  "key17": "5C2THNdfRXWhifQeNtJaoTHSmbj3GGqVEfmXiMDr5L2Zxqaz8oBYWbp8EQhfsCcApdiw5Ye63X7LunaePiQdivJL",
  "key18": "3oE2FtY2oxvdEBEZ9QGUN6Ra2CbfHTpL5ZNPB6yRn1qG8z1vNDrHnLk9vkT9xAx5iALAMWjH2cUPzoCG8qd1wkZS",
  "key19": "2WodHwc1JnA6aedjmyKhiTReDHkG4XvHqdtz32Jo44e427F5x91H4mBea4nJFhaYewQyv2qtMVUWNT5ecXH7rKP7",
  "key20": "su6wQJQnnpXv1tRSUhpNn3bvcc1aLRk2ZJTRdcVXJ6yYyNZBWsD2Q5TSTSxiVJroTotdWhSuLT7DbGHpfCW7aFL",
  "key21": "mMtJraKQveCNnQ5RPRKEDxc2nxWQTXviGr3ZHeUg1NiCjiqJVpHm1mwnsk8HRACaXT7Givxk6exxW1kUumnqsZb",
  "key22": "3sBvcAr5VGYGKpizVWVJP5ppuGjcubyMXBRoUGFm1EePnqMy4zjHpMnc7Mbz9YMLuvK1Yzp95YuL8QvazCuM5pgo",
  "key23": "3HvACNJBdVrTfpg1au3VnAAGUroUZqk5SKSczZGzeKCcQcAsXePnCkVoFYTocnN6uv467j5hzWJQEjUcBF6rgtGK",
  "key24": "3XQJZDC69iEC9Q5wMeZX6nWGUFUkmGBZ31cbGz2cobB3N8g2cLHKPoJSU4ymkur6rDmSiKZTtkFNG263hpFevo2L"
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
