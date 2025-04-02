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
    "4AjDGPU2srxV1SUtrGjnDA5spMzQC5FUDftRqfRyAsL4qkGCMrMH9JgRHBka8jk1Fm2aQ9qY3rsFyB2anPP1SzPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ihDwzJwaeQhrTSUC3LaRNtiBmk8UjkmJc3xNMtcdcpXU8Jn9WG7qf4kQjvom5HrHBPKwae6LLPHbsVx5KKTcYj8",
  "key1": "59BZB26Zm5sHbqi7B8Y2hZ7LfarX5seu4cEkh7x7fPWWx6sfZYkVSgSiU9MRaPS5wmyhLvAZkvPsZxwE8znaWdHv",
  "key2": "2fkyF4ZQXzhXMyT3jzkWNAX6QxrrkX23dwnuqCPJc99YMKGSBbRqV732SHAXmBTVzdXNYKYuJmagnBK74RW1WLEd",
  "key3": "5X5seP8iAmqCBNnAK4uYUbA5QtCwpZm6mZCPK5hVRWBL454SGqp3tQjjneLELHNhWsf9h5UtRAMf7F5d7esNPoBq",
  "key4": "4w6D3g8Q7iWWgkX8KMAzj7CyJdBrUiqDELJ7YBNWvX9xqmk5UM3odnxZMDRPjPg63ubmwqQEL69JtgLrMLExJMEi",
  "key5": "54hU6tBX7rstiQvg4xQwYQYsKAq8oCtRatf5xb6RHpa4Vv29QoLYurnaCtTFwUd8cQfdwX8uqgTDAafYgYMukQKR",
  "key6": "4DWL8rkpMFgVDCJU6YA17qqrJTkVfFN4xcowXMDsbvoZNQypxo336Qqc3eFvPa3ghBADqeyEz1xZmMpk6gj1kcRm",
  "key7": "3sPZhRuc9JJFqodcrP5E1Q65UgxCWaHnXGPGg1n6cUc11dV9wfBr3XtcaFGjvLmYjSJDcFiimPFE6XAoAXyQPLMb",
  "key8": "279c3TvvjZQVpXwx6FF3TNb4AvEt7tgbDLjy2z1LCeEjXCmF2rQcekLU2dP7tBK2F2iavy8j3BRRFc3164i6X57H",
  "key9": "31ARQEs1nY1bUxUhVCDpbWSKGGV2bpbwhtLhfhtzXiKwzjsaw7jKot5xUuwXJEydZKtQn6xG9g5MEmwavVEk41ia",
  "key10": "2pUVitTz63x1k9y9J4V5CHFAcHBqY8rCuqgQVcNhKtcAt9SCFCRnu9dmkTCnjnnhX4carH5t1rB8bg1emJev6RdP",
  "key11": "gu86UE8D62ae3NKQAdG8XUpf2SjXe3LNR8bMxsgErtMYBwC6bRTV3fiicXhvmgWiZ7Ls1bUYXmnCe9Kyu9jh9XM",
  "key12": "46ag3YwU2sVbxVxrbqgjKJzsH5btuiQ5SAinyFzbQSpbA5LBMPa1gDBv1BTB2pqUP3AjJFKFv7GraKXYHphW5tdB",
  "key13": "2uriek8k6RrFYWmsmLDzAxf8pYQTRTrQQbm8ZuyDLxTLtomunW1ZhURi1ntKWLu11U9Mw8v96V2oVVcw6upnyS75",
  "key14": "2m5EVYTSw8t14jb1KhcDvDPcC7S5sEE1YVhAXmy87YxwqJDFTrzPw9ohdrTGHkYZDEHnSrc3qbh1k5JQVnVpa7HC",
  "key15": "42WmjjVKxKqEY6QeapY322buqV9CVmcxiu2kuc9gL7jHAkEApAAdKznEUUnhUC7rGNN2eRudDAETUGSJaPVTzv3d",
  "key16": "ZT1cUGEBgtm7yBm2zN5oMDNczyoACcy2fpHTkK8K13otrX4wurkS3fdqtJw9GXLhKxeqKCowpgUpiMzXwHrNjQT",
  "key17": "jMFvtHmGPSCy6THH3PAtumkVwVd5CoWms7Rdpi8tf6P9WdogTfNakZoExR6MfnVwjZabHjZtB5wFU3zqSXkapTt",
  "key18": "2mKQ2h3YPemDaij1wRhkqRBAK5DF8aF6fnRwgfnSv8czAsNVyTpJu51YiG1X7eu5ntygtSZUyj2XJFCp2wDGKdXF",
  "key19": "3s6c4LAwyZ1yVHgpJe4hLsmf9KQFV3eM5YZ3fECUXchSbpioLTu9EAH3QsCwMXcb2G1bktViG31wb8gThHz2PuYw",
  "key20": "4FZmQou6YwFy9AA5HmepQ3bSbh5ZDiR8Mbzb5GeUYpxneF7fJQxbruHarzLwREgw4AcoBHsPaCBWAGm4U7Z3sDPM",
  "key21": "4eh4Pj6WfiN3ncZc8Ct12pvepNdTSkdBATeoNBbLvBT5QjRZK1vZcTc458cuGqrVBjdjuhcXgMmnUCgYtPgswRty",
  "key22": "hvxPvcqk7bYZhjLRveTAgjg5pSz9uoRpLXnyNLXcv79nwLeaX3B7ciD4D7HX4jPK3Mq6jU9ijWVykZPM6d7xtt4",
  "key23": "RAsBfZJfbcX278mRkaXxJ8vQWxTQ18decVfBy6z2rVTrrLjuuqwqRS5MJQkkbzkZyFQARNeB2HfNR68kfFPiKL8",
  "key24": "5PMSJm9oU5dKak4SBVTwGqLWjv8Qbs7xgTqvXkbJakgMuisVUeucwzAxJLwPu4q64LjvSLZhXgk2CDtWf3w6dqCt",
  "key25": "5gxr9PRdyicMnpwGZao1J4xQcXGmMW7nHCCXmCRHH32ynBrdCcJt3pbC5yBbwVAAkGLsd73BdMYNicUWpdwsAfNQ",
  "key26": "zAeqHGpbzkTCFkK2YF8D8y6xPFH2doQZFkqRTCH4ViYyF9yag1Yt9DVRWVRdyBPEthirrcuGvdZJBEV9n7whdpH",
  "key27": "4MsX2TEsz6MZnprJmTtP7p3t8jux59fay5LHL4gwqxbebBDixNPL6B9fvgLx8QTJPfgfme9ZJYphRB2HxPyUsAcq",
  "key28": "3CjJA7HvWKvF24kxypgMxvBKoBN7DvoMRpdZZLmUM3pk5XgFwzFqs7jQ3CxPKpwPkkqbmd6LzF4TTmG3kA5F8kfq",
  "key29": "NayD9Vp4tCaAmpNQDob4d6fJLwXJyBAvrjZeHy91zzshZrU2yNaQZFLJYQYrfjE7LFeYXm5TdMLFUrjEAXtFRTM",
  "key30": "5SUACnMH1jRgWkxbFQ4Fx4Q6PScHc7cnAEUw24aMvjtCEwc89xDzeaMDe1S9YqRzsKRpEo4Vm3tpokss3PLQtFKz",
  "key31": "2AYN1x3sQidPjVSCZ6rfefvMMNrcDWyxJ6MFhYucwCy2R1jxqkJ3MFjufgDuvaXXpaJRvaSJ9K6F4RipPBhV2zob",
  "key32": "3RWdNThiZXxyMq9sBfzp6Yfhv791KsLQtp8jF48RaGgiRYLLumvrw67XiSPvHNWjpFtZTZzifAtRXUrL9PGxEq96",
  "key33": "RoNPMFwrWTHNJQ6qh4gHCrbzWBbFD8XtAUzauXMoufjW8hm66HnguMbiVASV1XSDLoa9iEHgfQyszbwfUhrrEyU",
  "key34": "399WSVhWnUaSugd3SLpikWY4dgm7C9dUK9DHQg7fkCigHz8F1WViXn5HTTgTU69N23NbphSrtG5y3ba54GZuC4RH",
  "key35": "2SKx5MLD3MwwJcPQRGFGqFqyiTyRLVyUtWgsHEQZd4ZdAL2LuUC2BEjTi7tecLxJEoSPQektTBzx9pTenHA6ZMoi",
  "key36": "RrRVsGDmjAAZhRNMeW3J7ERPge5Wam2VqaDnGuk8kyosaZU8HcWwWHxFoLkB2HLr8WLPBqwmpmNAQkhc3qKZumk",
  "key37": "ovSD4fpgWT4asi7zZxyjJmov3o5tAFERbVfizgNqkQrNYd2cYfymxtahju8sFqLbuWBhjqvqvPEaDgv1d88QPtD",
  "key38": "5GQA9p3RDnPz891HeFhyhCNuCKcsWaqewUGkacoz9HUhVG5oP8QNQ2Zy3cJzDreMUGGkzZZwSAGqJ3Fqi4QWV6u5",
  "key39": "5ALnwjG67GC1FGXTpP3nSisKABUyAHHR12enMkznU33QdXjPgafyKmENZqB2YBavy25ktDipVAnbMMH5X3jS999v",
  "key40": "2x2tCMBrRTVRQg9ERhhFZoLTFYGbeWmarQuGjBcNi67MYkDrxtY1fjPP4SvHV2G483gYVooCngu2RLHzVXGjhU4T",
  "key41": "37cPECXAwM7b2cC7EMzd2omkUMFbddZYJfxgrwEuUnkYjktmVm7JwmiPCrveAeunkhdGLpN9KnAgThaNi5iHdD9P"
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
