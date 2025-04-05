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
    "u2ffDgYgJZX6oHQEtWvYHkbTPzfgjH4FeYZ8qQYfhoKZ8QvRSx7kLd2jRL7gEuoTZicHnnpwqdsJuS5Tjz1idf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9UvSeaoAHqJNBCUhw65WaLFfzfFNcMuXyee17gEWCyrbKMEqw6hp3XDkMMmQaZ1UZC77iYZJ7SektM5etGhb89W",
  "key1": "2v6mjeBjZUFmJJRkHyeTs3eWccPP36z5g81z1iCrhHuUCcmP4dxuJXWU4ttoUX4Fd7m5jkXYmUQXZJZhPLSxoH4x",
  "key2": "3EF5gfaPZ1LbL122qUw2EidW63AwHsVyiW5sTPKUrBBYiRJpuKnKLbAzK66jePuC2w7sjdb6Sw6NEW53jT3kdXEq",
  "key3": "4vY8Bn4AWSPnQZomYu37hy78pSG7GvWNA6P8knDjyQ77nBHE9bmwGkuVmGkCNcYqnbYUMgmCP4QU68yHFq8nytuV",
  "key4": "4hxvPYwzFrqfKdEAcbh3AEEspHzgm6zaBUAhH1cxAYtQEXbNnWK7HLUY7ajfcAutm4UzVLWdPvUkAqqqzomDMyCt",
  "key5": "4WktSyEcvikLhkqeGmj61bRsWxBsRr2MPDwhj1EsNbWTwzGy946BkTaTba5RSYPVYpSZmYXVw3q4pExkkbZoBSxA",
  "key6": "3qv1eBa7gVJQZZ4MnRZJ59S8NvXBu5nKWURBtN3GBhtKpqvi4cdLBvthrGzHnjgRAgFHoMmSCuLLmY6mvTFmaNK3",
  "key7": "4qtg3k9kwBVtXf8MiRcQf9M3yMXEPodT7DhYgtkCGyK2CiFiqzhqdBwunRiQa7ZpCDfak24yCUxYx9WS2YDCnfJL",
  "key8": "35aNXHaFHAMUKdu5PCQK1BWtKCFmszCBcCiTzrcY7zui6wQK3ufmxPk5n2naSzHVLnYdvw6ZZ7NyfjZnqS7tinFR",
  "key9": "4LcY3PEsPR99yZWmvydpYr8StMUkgGyURmR5bnoZ9cq8ukGzUe4wkCYsKEGey4rDLJ2obLjw2mXN5P7jwSPqy5LC",
  "key10": "256yNWhjQvX2sB87hTYTw1qo76qDzKKWkSAxL4nNXKhVvJdm2sjH9LMtCTDWwzzyw5nNDGMxYv8GedZ8c71J34Yf",
  "key11": "44EmCXbjV6gACGaAkMfnPBF8rfNRZYYXVjxUQZ5DK7UkSA6ckxzuFiLvJn2MWLFXre7JyRQe8XndkfvoqoXrpZoV",
  "key12": "2ogRKeLkYQcCpk8LNyXMwH1mXJaPvoKSY5iycyXVdzDGksjRpYgGaKt82zZxPCCAjw9z7aYQZAzjvx22yAxr1pSX",
  "key13": "5LZdyZA9qy6weJtEa58tS7qbySTarTYPV47k9kJZGxbBb4JRGZFTwW3eZcXnNCXYAAP12hXwTo4ZHKxKxhoRhXde",
  "key14": "3sR2Cyv7YRNenzS2heeMo6Dc8f74QuPqkssBGjeuxTFYF842PZETo2HPHN46M7ek9VMMwid3vDSLmxE7F1u352kk",
  "key15": "2vixybVR9LMLFfip56qQxDhX6vFVCby6xnmHKNpKpJoPAzBVsXSfvCcYDMgB5BQivS6BkQLc4NnQN6C5cF7vTJ5F",
  "key16": "v9LvKbeGEnqBBqQ3pVLbMYbuSvkyGwfVaFafWRfTRFt2ZHD8QQszejpS7xw1bXh8uh4u4nU3ho9LpCCgmoffkF8",
  "key17": "5hDtiwxiKz3ThfHjMb5uA3dkMu61GziASU4jn9CFwQeUdF41jFvW92fRdZNmBEy2h4DQS2cZoLF1x9VF9n4MrnZH",
  "key18": "JWarUBL247bymaeYysgx8BuojZjXVw2fLhpaMSPrk3TuGoV5CuWsuZKZDn118nx7u2wYhfd4MiV5ouCUx79vWFs",
  "key19": "5KM2BP5sBKjpX69GNWSAxiaubt4naPLwvtwtJM1QTvsPTrzLHFUPMfksYoRMPaxGoWxe5nD4Kt6pTxAHs4erjuyM",
  "key20": "2HhFQvoVasuhFadzSNybNNUGb6zgZHWM2ySdnUGsz9L9FMyhfd5XQa9PKhwqktzahUwC57zRrwhdDGx8GrDNHFDX",
  "key21": "Vh26A17h52dUjyY1fg2bywRXvzohrp78qEu4uVCk1Bdk9R4CByJ1Su1k56AyRbhbFiSjzdKYigaqUV2Y4fc81SC",
  "key22": "4GUXu2k7cC2bZhNEavtVvX48ANpuckwLqkPTGfQcw4VmEZv7Mrm75A7AzMdJd55TMRGtCfSNj77Hv5dU2YGpqnP1",
  "key23": "5E5U18CkfMsjnUydvnc764UaAu6StDNPMxGngPBzsazXMBvFRQDoD8FkBSEQdatZ5pab2EFv25gfp4s3MTaKDjHt",
  "key24": "ojz3WJpgUTUHwg52K5BhwqqZCKJfPccdCpKPC1vt6JCxxxCKZQFFJgN32xidNjJmp9c46rK5gyYQLR1RCXLf6s5",
  "key25": "2qY2F2kdjT6r97j1RbMHjfnJSr5qihRWMoPdNJmfgc6cJKtede2EQK8QJ83UkQfYXLGG4Qy2zLyDWzePXeK4FQRw",
  "key26": "2zoyd3BCWeyFgkSZKfnNEYpJ57q5v3TWqS2DnB4qdDeiKf9L6iiuwps4yvRrRyxbETPja6kC8AU17TNygW5GRyJG",
  "key27": "PWbAuNbUjiom9njHSCZs17U5PVXas9sS3dBwD5UeNXxB5FcWKjfffknwrCzdPdSdSYj1LU8P9FY6G8vRheVER1Y",
  "key28": "mfWNgGQCDKFE6gTqn9XPfzreNt8DE3LThQeoBEn7yHzdsLSZz639JLv8DEsmFtFaf6Q1KWtSfGwSKWLzbUtBxNj",
  "key29": "2RU1pLn6PjDoFGaLFEd2oTGcwh4P12JwKi54byFEgXL1CxPzs2Xve7hroSa25dxt26QiXExLHxKCfkYXXJYuhVN"
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
