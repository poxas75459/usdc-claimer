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
    "Dn2Bb6Voe3Qq8Hd9bth1AyrsQKd7MsQU6WJ13HJqbdExMkN7gTXVPuP1VYMPCWnXdzKJ9duPG7DTqZZTDoS6p3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QJXt9MMe7CV2BFQuo7iDtHQJqj2dqagLxSVUygCAaCXVDnjYtGycUPouDhVmAdKnrjSfHhAaitrhQW3HxoTpCRx",
  "key1": "5CDKD1wbpw6Zg4uMYQwj8X3TrcAFh8VegW2tDWaQjQuqwFx4PxzgGnfAtJRxciuEJtjruBXedRjDkQeob9Sbf9Ry",
  "key2": "bZHuo5NwsbAkchc8rUbJfreXCFc2Mi5hToBDtfjXNJWmfrZAn5rYGfPfmAD5ZiEJpiY4x9toryApGXtMnMcd4bd",
  "key3": "34vMZ7mSWU7snpk8n3WmEz8MaooM1EmSKgCTSDZWiF49AwcqoccpwyH2hLN4Bx9a2XCfW8j9jSHfFQ39z3cMiQ45",
  "key4": "mLhHyDc5Uqd38RY7m7gvTi9qr4KEbVQCUkvpoJRJyKG5HCoD1bsu1odiqfkyEpMuQR2GH937MiX5ZJMFekX4BNu",
  "key5": "3VWNaooSwWNSy5ic8v2SdyB8ehghWpSZJbECGyEni63rPcfj82K15VT8MatuAJ7ifrhgqXNVBjZjDcsitoRXam8b",
  "key6": "r1Ua6qZfLikLLYb9GFHoJD9SMLxz3PSrKrrkaWWvkT1DGqQMY5CfgWRU6fN1eBmth7fiTQNLEmM7Ds8k64Sjdea",
  "key7": "56oB3voegoYvs6KzyWU8AMzhth2XjBamrN9pf1XKTMVNHBmZ9TiTscc6PneBuzxkLca62hkMJt5U3Xf4dK1jpuTT",
  "key8": "5wVgeced8GQasyxGwP8US7BPzuUTiCz4fexqgVyrczhkipzxjxkt5pwrwNH7yCfFYGrPqfq5t9vHrvF435QFnUkm",
  "key9": "459QgnoeVTicurwMdWr47qfukoqsM5N2mY8wL4SmzM2CgNAq4XiEa5bx7rpuQ8NMGN2k1MmduU7SLwNJ1N8bgtYR",
  "key10": "KySkvJNVyLftCHuaMHq1paYqns9PyHX4jrxMNUpGDhAsYjxxE94i3wgVUgM95ry2gxgZDbPQdMzuRsNeNRUGyAZ",
  "key11": "5y9TPGAXp1mUfE1hyvyYsSgvs9DHArw6crtpLCQxzTZN66xugrTK6DPGWTWm7U3SwovdR8boEs1FttqFHSKFjtm6",
  "key12": "3MFQpkYueUDUkNRB3PCzPpJSYXVxVNZPWVYGub5u1iPn54MhSdn6edV3oziP8tMwP7t3NdDRPfd4z7d7CnEugiYf",
  "key13": "2zXZxgDT8VqcS7qGRyHAJjK6JTnR79ntoqEyCCbzN5JnihevAatKTdWGXzb8Upb5fjS8sW4f3tukuKwBpeRc6hJJ",
  "key14": "5zbb4yRSeNL41NQ6JzG8Mduk1ieWUZK2GhG8edJPs4x4QvVwZZCJAjuxR7knPrA1u5VDFhW1uk8ugeLYQtjo2wx8",
  "key15": "67bmySX69MRzPt1Y72E9d964ChdgFtd94v2AR6Fbsd8TFZufUrgD6BPSZTzvsNcnNigW2scUAbbJofTvebYGhqx5",
  "key16": "5ebbfpZWeQn86vjuLVPKo8cupSxNCYCinfwGvGxN2iRUapFpTZuRdoQYUpe8GDVVHVWM8vyZEX6Dgqbf8maKUFon",
  "key17": "x27eaaFGAVbiZm2Y4qPfHfTGoaVjLuPeGi6fgiHs4ZZLJmPNnLDukwDRjhWy5ahippYa9PsifSaNQXSPsRPCh2U",
  "key18": "kwFjXDZbcPF1ygt64XqzGgk4vUn1Ts7jucjP8N2Wm95HTN7vVEjGDDCgvwJknjd25aSFZrEtEuGVimiVkeEyVri",
  "key19": "n9wYKwvPMYxwZww8ckKUGWz4iDHzpfZVdTMgmUmVGBg76L7XqeyJ93Zgyvh7nj2jf5KRJbNMo633Zmg9GD4jHKg",
  "key20": "frxZgitV7XBcYU7qZUZALxerJT4wsTXSGFJDLyMC1aBBNt9J9UdZKnQAEJxm1T9jxrncTcpL4vHG5NLLUNeY7Qu",
  "key21": "26avr5DpbDEq5vRmkZ2cn9v1XrfBDLJdTkm8Tt7NvQg3rG2UzbQ3xTU3W5m3mmu3vf9H9HoLxKGMRE1d56xqqWL6",
  "key22": "5RKdR8T5qMa7R4B6FtRapu1gqBWqcWuuRk3ThwrHZCf33MeABrdhhfZDFjjmT7zGenHnRcunXVQXtLfheDLy8LPP",
  "key23": "4XA2Dp9Q8AYFNcLs9qUCSDTNh55vBvLaWkEX6eiWwWqjjms8FJxk1RBuUhrAqZiiFacTZeyi53NMnVBYVhMe2ori",
  "key24": "4PCcHfD3kdMk53pPm5anugskHvRT6UXsNQJnPJVfnq6i6MsagfTNGnDzQk7XogoRcQqqzC1H1eQgD2Fo8koQRtgr",
  "key25": "2zq4GvXFLLpzkTjv2DsxbtagzJPoLaW9WMGsgB9GqEBmnWqzFLTVBBegvuQgmZfwqZoZiyojmCvak6hBny3dXdXL",
  "key26": "2yUgewx3ksVGHvcyYpmvqmPsjpCk4oXQ3PRhHPRUtNNDGqfSx8LZXJ6DBC4fkNjwom7GnMfovrnTz1RhDEyGL2U7",
  "key27": "jFVzvpjRdSBpRJSGVfmyJZ1TnwBD7AeomG5kr91XoQ8pRyyENVCxnkapBsgHLvsXfy6sj66Yktg9hEKa2rK5Qck",
  "key28": "4EEK2c9TRqfkWznjUgcw52JdJvRbzzjtnn71HMBuzYHPXfhavukd7RzsK6V5K5xZQ8nBr8GfdfF47LGpFowUNmQ2",
  "key29": "4VnxKjRDqkCJ78F9xuXm9V5ThGDszxMeAPyFkBWxpSG7vbLUf3EapFqeMWoFwSUFXZMKmZPC9p4psNsZ75yjVsEY",
  "key30": "2mmBn2R9Bh13c67Z2poNgfCUZjKDW8sjy73VcPXxMhuffZuDNSCT5eTXkvnrNG8B2DaqoEQBah2onTHAyxFi2qyw",
  "key31": "34P15ThQ3CfreTQAnkZ2pM1oQxqXTR7ikyvG1pNGLDB9MbBKYHqBqnoR9GuHsKyFH3fiH8S7pjvFHrzULyqdxK9t",
  "key32": "pus5wQqsFvUqWpKxULdumH2kMzFwMEjaWLfcEvkgqewRek9evwWYe5u42X5HaCvvuySBmja3qrXRkZNitmQEdYu",
  "key33": "2L68pgFV8Woa3bFrjAirrxBde7opbe1ivE6DotRY5wn4Ed22sBAZ8fgPnkiQrXHPGA4LAwgmYs1DJbn5o5hY7qW9",
  "key34": "w5BzAZVAckc6Xa4XM7FQ5vYDHtmdDknRp2mtZ8e4c75xsyBA25S8Sg5aJ3ELfCB2VHunT9dJUCGM5YGssHZ4RD4",
  "key35": "2ecqDq11hkxHFwnwJLPtKsQ2hzWHCCumkxiHrXskSLzepbFTaascVZPUrMqKftFs64CcMEMdfw2Zv7MXLW2tZwZC",
  "key36": "5bHHD3rNHDjCY59PSiyQbEWsMeHkkZB7sMWhZH9mTPu3FjSXo8MoEmyo1V2ReRxQhwJxcFwvNkW6Vi7bbT2ubLTk",
  "key37": "3FVgTAvqRLMWkYQYqPfDsYnsXeFzXVXbqCZ1rStUcvFdSnSV6EU7QekQTk1dq1LkJRoMHZvFg1dZKRNQWWFEt64d",
  "key38": "xxRQYNHnppMggQwBPZX2tugexPtn4pMsByguhjbnyvie3i8kd6ZinYBB53LW2jfCsSJ4BsYYC1AcFZ4NQkQmwXX"
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
