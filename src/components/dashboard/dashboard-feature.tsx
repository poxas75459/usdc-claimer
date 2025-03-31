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
    "4fVwnp7JYjEhmTy4PByj5aibKnoWX5SbMaNMJ2idAPzex2eKY7UeEuNoxwPvo7iR8CgNGSa46L1kkqCUF1wYmRFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TJpdT9YLGDAUTKS1MJZ8atFM8ptEUYiLaMpcF7rjYrpsE1ZHuFhczwbHqX51Dk46umB7vB75PgNeMCFCfx6WUKU",
  "key1": "EtHZ9rTB8wYfTq3TFXXHFJzi5EmwWQpuSjb6sdKGaWHvnFRk1Nok9bFJAAtYhWBUgmmevwmrEC1Hpv4PMvkS2g2",
  "key2": "3sJju5BzL158W2LW7atm1MkJbJXYRC9eyp8AZ3s79TRCD1pZxtoyMGYWjYyQm24n45fmj4QLMgPxfuhdQwPFuXcR",
  "key3": "2k1szU95mXLYzfP5p96r3eRB3yBxdgMi2wCEyuj3q3QoEnWxhd9gmjFHNhpo8rXGhxkjswN7ikQfhZefQUn2h7yU",
  "key4": "2UM6k9G9hMHmJkvXfoZ3ewx3fgKiUSws7JAp63WFSugBSeppLTyvUmBuvz9SYhPqnQtro8tMj2dYN6cvtmKpZYMr",
  "key5": "2dBJXTDyfJzpoAkwTggqKY2iQvpyxwHbWmhN6bjAM8V1eu6x7EQ33dhsvhguUYZbEc8CxZjJcm25xKR79pUM4U41",
  "key6": "4GL3VSqdrrGdA4GotAGr1TdM6qfL1K2rn1pKoGAhQ6aE9qwtEwFDo7n2HjMNivQrSpqeTaRgmohzNNrc8zp6JBFq",
  "key7": "kpCgoGpnvMB3aVRJvG532UiEPZ8yCwSYpkLxXG929Lxa2cFVRoZtbTRPHMGiok53pr2i4vNb7LXQBne3oDe1mwc",
  "key8": "4sFttU43Le1nEgwGbk8hc4EJkFct4ySnYNqHj8kh2E66aVs1PjPh7FUfAxKy87UBLscZiCpYKz8sKTcAGf7VTMR1",
  "key9": "2y6gcEhXTGgsWdtX26bHAzQgbp8g1ZpjYBAPnJok41AJSBXqC3Y1KH2qiC2XbXxW4Lf4L9Ud7kkC6xFDuuBFUi4u",
  "key10": "2sfmnG7WXPnuaemqLW9ch97BETT3kn68MP1npn2YwSbdhsKuftMotqm1qKrk31iH7HKTjkE1nAKgoQ3VM24pcVaQ",
  "key11": "5WYK3rNxQis3ieiDmbgYtYtne4VyY1UQHM1RdfEzmhGuk5Cri9LXejSVKAd57cLVFTDZmTPpHJBJ48TyPixEXJV5",
  "key12": "5pqSaqTpKoz4b85vh91WVo4VEnoQFUrwkWzzRtkxVDiehRH3VB5VnNzv6YfbVYK361NhwbXDUif5AYPX3BkHa2Ls",
  "key13": "4L8pdhDoiGDq6qSUtwqcnNhqkRK6eD8cyx2wEs2CjGAk8qp9SC9vGYXnwevWh1mxLuMJnwyGqZesx7rs6iok2dSU",
  "key14": "2nCBMa93i2WQJHB9XQV3UXKzER8gSt4MywTwC1TEc7aXYLuBNFq4hqz1DrCJs8vwp85Rrp1Wf5PKr2i5zgAMzDka",
  "key15": "5g3pGWmUsgRcqX5pBRi2QE5GQekNMEbuSXCZ4h5mRUo6Q3c3dyGGQxJmBj7Zg3TV1Ev7dsW2SUMAysg6m8JRfAgs",
  "key16": "54MWXwE4Bw8S29xE5zPYiE17h6HMvNnkpsn2KquDhVykivTE8QVJWrf9wgSHGcB4azeiEAduPe7F9v5G8zedXmGw",
  "key17": "4cHABnwrrHJviKq9GYwQPhXiQ2XgHkdM6un8nr6GPGosQbaHiRyFKVC6G71ehMGgRfLCbn4iPjikNa98Jcw5nA7q",
  "key18": "2KczdGPz5wQW79fVZEFT9kcji8YDu4og9Ks7GN3Qd6XRSpWU8oxoZ57UnXEBmVKM2FBVFdtwummmeAxXkj2zBYcU",
  "key19": "67Ktkobk9zg3orVGYtbWnRT4SdPU7hUpkwmhTqr8zW6Zp3em2b8d6jotn1aXzSVUTcDCcLJLm6MRLAqmMWHPCLQS",
  "key20": "8JpEZXhyhduGRj4N2a1DtP3gaNvQCHgcAkvkgzfRPodi9H8DCT66xML7De2iQ8AuMqUS4SYb6dfvjVKy92q3pzg",
  "key21": "5YwUa8GVdmhEXdCSwyu5DAPaqRH13ms8DzRyimqy5YYkAKtykZPbEF7aA3SEs2XUJNhMtexfeeCv8epkpoNrdZkU",
  "key22": "4dDSduKh8CiBj5aDNa8LDK3VbfZDTWNy9D3RNubS6Ps1KWpELKVzsRhgtVDH3y4n7PEaFh8pmixX6eKD7vUiAmfj",
  "key23": "2phPoXXm8uZkhbCSZuP1ANR3au6NSd74ubK2rZUNJp61WcP8hChqyHPfDXcz6wZDwxkhgRLh15XjKHfADzAKcjDi",
  "key24": "54Aq7pqxFBqqhczaymwyt1R4dCyBpg9TNV1kvcP8eNXLKAvLuMqv8mFK2STz7xJz4bJpVTG6VfCLQrJA2P61umpN",
  "key25": "3VXj198mBm7hqT6N2Rf7iYMcGZhpNBpMtgUDx3QN1WUAT85Euy4tNcKMAxv2qXwtWeHZPhnzPdcbMb2dnDZ5gCjw",
  "key26": "5urTJzcqJvnyFhzaqBF3PTWvFhyDfZ1BifGqWjJpV1TwqWD2MPFd33qBxvBgLCwALfhxTbjAC4nqh8ovFEFgauc2",
  "key27": "4VTvfG6nLtei6vW6FpPb6M86e5qBKZSfFmMfUXVJ8ZhdZVQMuVVFy93aNPDikhWwTYVuQLwrbeBLKJkyyuHZa5H8",
  "key28": "3WvxjxVegsvCWhdK6EiDsipLug74oPCtmMgZ344tzAkzbgYAtz3qzgacPSp3wgjNUTgWWYRCGiJrZj4A6jqRLxQr",
  "key29": "xD7eupFe7g1UMCFSVQvajcDADb5dxyFxsVHfLU6LZuLtnUii8y64fqVkAqJ1FfvDERWzDXr1LHgwqHEsQW48axq"
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
