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
    "55ooo7ztjeKM3w1U4krkGzZjnG8iDaAmqjC4LvHvQYebfdMTV6W1qu58c3d5ZGczmrirGtjwy1RupKWU3yzusdzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VVYnzoa6mLW6wTPyCoCVKWoRwgRsGnzcyMLx7BtVzRJTVVUGtwRiTycL9BuhfmzW2ZkWqFstAttL29nxraiTYXP",
  "key1": "5z5Cazv7qSCUbGiRB1VQBEV23Y2ZXX6tBfmEvqxjUtJ4tXKm4ZpWd8TMexpnsYctzi1zeQpa4m8nkhkLsL8S3gZf",
  "key2": "3TFqkv5ANgvAPzMRZ3B6Z8f7rqjgaggwHUAeZAdet9BRPYAtoYDmYw2nbZEX2dqAGv6Qw2uMVZmdiTxTD9eMj8MS",
  "key3": "3EmBdGR6sx5U7CYfpi8SGny9SmsgMLjaGdbsJRQnfrVM1Pe5xRycu6LjSbsziGEiApWSBKypidxRHvccLU28PUqj",
  "key4": "3nfjjcDMWhGtpNs6xEMkai2Xyfb5XwybpwmNYLMpWy671ZsWo29T7zB98CPFVPjERe5fj5bve35a9bPRXEZGvE1B",
  "key5": "5Kn6cjnMThHLxtEUhsF9A58CWg5QDdB1dajxJjVU85xSnz7GUsMDRR2ywVeGPhd2GrT9n5DiwSNwyvVj6zFL6v9M",
  "key6": "5ArXYTMJtQt5W3Kft6K7cGkvQBzQoK5wuk52rkYditictYpz1tXosfkJuTxRaw66QgsE7QkzHV8WxgcvBFMn5MiL",
  "key7": "397oRr4jE2ptckk4ySZAinDwMeCtBznnePTtT7wQ89Ra6XWbHxHGsv6xmnW5Cj4WHqM1CMMKpD4G9UiLp3ZEgEXz",
  "key8": "WfLNxkhMjmecGGFRGGCV99hKXfJ59iJgNgpWEE31AZM1rgzL9tAE3RJhiBGcZsbbdwqBrP27B896w4gWChtSkrH",
  "key9": "5aNW73v4Lc1oLnaUBQ3NKGRh24h6kBCPLMqsqCLaHmtBqVkXXWodgfqNBkEpRoYGxsetgWfz7G9xmyuDMe329EYE",
  "key10": "2bkoyJQNGWsCGg1yjcxsLNLYpJNxmAX1RG8NkVepJdisjr2yEJ15fE9tVt9zq8GJ9vuE8HzXzmUWtpVwoHtRMkng",
  "key11": "4KyRwJVL9ZW6bANA36YC2Z293wjfS6myPJ3krHTj3DZd9FoZpAXFoCGfDK1M8cvq2k9M57XEN2ax3qQPBmkhesdB",
  "key12": "4JfXyt8aoQqoYB1iKoTAwupr64FekxNzaDH61unVSxyozTbhkhw5PnqRJSpgCRS7TmqvHHEGetnXE2rGCEi7Sgz4",
  "key13": "GsBmjrDgNijjdyph5hcSCXTcrgEEEu75F5aSFwr6DE4eCeeqzGv4sbFXpZFgvoBvrBS8JnWHqUo2KWihC3mtAiK",
  "key14": "5f2MS989c6gKtRUKWgSgWUHqJ2JfARbsY3kzv4Nuyegb441AFRDrtVk2KFfEbU4PQWEcxo4fteMFDMoZQzNAMGwq",
  "key15": "3W5xrEyGkLt2um6Tpxj8Mb391C33CNziFa3ujsYMYY47CdU8SnEKiBmEviTaToTB79bfca3Fan5k1qpM8tgYa2ov",
  "key16": "4qNoMLN2j6vGGno4XSELiHa5yaMdEJtEZpMfEqF3rd91KJxcDd7MqqDeW1yEPCzRfLj66jGkrd2bc6miHFsTn5JK",
  "key17": "5roGYfd2soHVB2z3fEchMTDm9agxRMZWRZDFSrHVBrYPfjfkzA8Q7GJQcnwva5Bj76rZkBBRuD73EvjtDivsDA95",
  "key18": "2kRgTQ83nexSLoPyqvFgV9Vz4unUEfCr5Zr5xkhcKH6W8q4xWjomXhTpuUdcf8TxPkeWhiJCzA6VhrxLKSETwnqj",
  "key19": "3aEW4QJKtV4SUd2bsGmaWS5GqRKiNf3A684T9g4D3MyzhcpCjpkYNdZy7kYziQhPbz87RQnwksZxPYE2JVHAgWBP",
  "key20": "62vFjXdMCNataoVrdnB6SHSDygTaL1FWn3DvvwA14ek8rJJXYbTPGwMUE5SzgBCd49wPAnf53hUDPBx5ppjBVUd5",
  "key21": "3eDoxmDzGgNLyVsKg1uaPWYN5JnUaob8VoRJ7PHpq2Ct4a3R9r2TEyEVAu9U4wTidnZ1x2uCRsM8KfeeB6kDF8FP",
  "key22": "2B3Rva921xkBdS3nmB3L6bWZexGEW2NBtx7C3dFcpKngGL7Vbrmt1m68Xxti9ywJMM4iaurFKasqMC2uEiCmNzTz",
  "key23": "4HemJWAMa1ATeTKjtxEXk1ZacPvFyURWUrnGiG3reow9ecHXRF2UrqRomTc95miQj8YuCnSbXxukhsgrZRajci2v",
  "key24": "5M6ExCH85WYxphexmHuCrRjomFBP38C3pmpf9umPWSwtUFGvQ6vjmfB1LgudFBK6yhxLQBquMjYqjKNVhihPDVsx",
  "key25": "2edWksNjGm6uGt7C12KNJi4kaN2E7MnZi6waGczz4RkGBJQhbAjjjmGak3Xz9igZG4iKPSWbEBuwsdorwd7yioaQ",
  "key26": "3iq23iY4fk3LNxnCmt7tTGSBDkmgzP4wGpMkutd1tMZadUzPtjGmRpoxDshgiePdDFLar8AgZ8KApn9vX9GCnXg6",
  "key27": "5oJz3L9jyjpx9Ls6W7gjUXwUzDakC8LnR3TGFcUizVNyZoP6tFftL2j6uADKue9qMew5N2KkAoygsJvdKWAG9vXD",
  "key28": "5rCrcUzz2PtLhQ7QfequK1REHbQBHgbFvym69BPaA7jqRiVzbvSMy5RMkYzBuJ4u5T5BrXPUZTXysxD9QMazFbCe",
  "key29": "2LKHVUZSgQNuTowRdfzYxzSEkAimarWy8pj6UUPhZQB1ga4ZfmZfFh74KSxuHQ89UxRbZmeqmz9TNpr15DZedV2h",
  "key30": "dUnb7a6GmHRreLqX1EYYUrCbTNUABMq85VpgtQvio3GWfq9TJ1YYvRFuknHMFViza2JvnvYfeNTWtPMNRvU9Abz",
  "key31": "5GwyuVmFvxoDC7rPWoG4fsSaFt72TgnCTmw42UHadK49HTZam75CtDfDUbH4yDyxq9SQn2GqgbKBa77aSs6iVG6K"
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
