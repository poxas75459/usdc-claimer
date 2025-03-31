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
    "4QXGqA7YZNAoBFYqAbMArx91BzuwFvTEVnxCuerHFCFWjFBDEonEYq8v5zrzNgzpjRMunyEJvyPqByeP4ibTWVgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uusLojqf7KiH1tRLgRXHjRpE9xciJkD8LwgXpQ2w6Scr1M7wACagyY7FkbAqTF28LfdtFBcZY9nr94kWM3ovLgE",
  "key1": "3b91MVTTw5qumRBUJmxoUpRLkuNtikoywKbqiHjwnXvnEfp5H7C9SLeGAwjcU5ZzjEm7eQamN3XhwPt6Gp7KcC8F",
  "key2": "vhzxHg1n1fK695oyYZgyD5Af3GV3QPdkiVeSvevvfviebpqjLDoAmpiotvmhLx19WH3qX6fAs2cvHMJqbGwUT2L",
  "key3": "3hieAyW3fjcvMNeJwxerDeQaCD91uC6nW9uYbQ628d9HaQ5M8F93rmWMmZeHHxg99EXbpK49Qon6dDxJFy5mNXCV",
  "key4": "4XZZmeY5KKPaZcwCpRAGdacccrFbqkymv6DBpzFgiHQsRJE1dwNYy4NibyWgjEAARZ1z68m5MV2ZtX4k2cKtNPWt",
  "key5": "2XrxwBmWznSi5y8mrm4SCVtqJTEbLG5bPmUsUKFTzmtHhZKzoBPbtR8X1pKXpNVq9ca96W1MwwbdQR39Ctamvc7f",
  "key6": "55jFpHJ2kHQ4Fa5eq2vz7Rm3KCAyZ5ZxWKtK65CFekpotgad93pE8W2DApo2rPi7HU3w5H2bmC2cmN6EjGWsmbrZ",
  "key7": "2KWodoSqpchN826gaD1d3d3653xzcpZHL3kB4iyRDELekAkNXNHyfMXsgnT6mDsVtmg1ht2At3dBNZhbjWxNmDZQ",
  "key8": "4mEhUBhbUNv1CWTQtF6rw51YkP7sDrVjLMg7qycrrCCPvxUgJD9AvPSeUNYu3gsia9bzcTuRASfPbNbLEpiuxQDY",
  "key9": "4yiZeVoPoBxnuKYQUu6GWWEgVVNLkYFunYnxvoCVoNdTR2oLspEGFkoD9kuegVdkuFsu1aJjT529f1YuN38mzwyy",
  "key10": "3WSGkPc26rr1yzmV4HeqCpR8K2Ze1GBpzNFm1rh7ZigVBQRJzvhinnBrQBVamRzxSUGya53XKTCP4YEvdEavtxTe",
  "key11": "5rU66VScRRGUTKWeAcoRtFBGvbjvLT68s4UKg75tdi3hmvSArXwWRD7QMyTdNRiCbmRUfdvSkEPThtyGQ9rGWbzi",
  "key12": "3oQhhLapNTHJJDujku165zgnvpKBw1STRSmTdqSe8hYKJV5CxHFADX2au5rdsdPCNoj8uqnZStXfakMYMaH8EUrQ",
  "key13": "3FHredBw1BwzqooBVc4ZX4xedQA52bsSCj2gvNVUUHgp9scYKfNm2AUHEfVrVTSdBekbAHmfmYPKrNsCNobdETRj",
  "key14": "4Dy1Mo5AvdQSiuPfDpXeFvBH978MW8ERVMFe6Nma8B7YL61d3n2z334FxEbxDofH1kNci2HTawMupTfZYxXXJDvL",
  "key15": "39QvU38xCidLYApEP3cskYkzWQSQ2RKK6yjcJm9s2UxfE6v2Xu7EjLrrXqy4sZjWtRS2ykWhyCBdehrMwdJRjRBD",
  "key16": "xLNYZ4m1NYvdPXARy7ERzrcUtsnHTuRQTkENB6FAefZDc2qpzXty7uLpAr8RQv3hFXRwNa4curNCDzABjmNp8Eh",
  "key17": "3v7mtvn27An7wPHxk4wNabeCobpaL5LSBapCg819saVfQv8JGcLePPogRYQ1VDBABYjJhtHGaLyw3oibNxhPoYs2",
  "key18": "3uvt5vtw7BAzo17eF1v8qdJVJPTN6VrbLmQGnV2WZdjuA5by6hF9TghQcR4LT8ehNSUn4qv5Pughi4J4QJTLJtbD",
  "key19": "26KpphRGDnXsaceiMgMKFuEp4Fvffwt1dYr8pPEq9ffEziGYWZLVfs9TDr6VS42XGFzz5cEYpuqMG6vFQMshBLbL",
  "key20": "qF1whE18iNjMpxkKZ4rWLQ4c2ejtGfcyECMmrTxfFTPCeHrNmVZCHy4zj3z9tYCgo6jMbbt5c5JfTS5Cgqyx5zM",
  "key21": "4PcsfwBFNLoACodtuy49Q4EjkPj7qvbjyhJeHQck7B4goDn6wnekomey88NJWi2yyCAQNst5wYCo8YWdkvSttKFB",
  "key22": "3DkHCKM5k782uUdQf6VVGpCAgXuSenA4LKv6AwV4AC5sHE4YC6ngEjuLhj9MrKaGbjzZ6cU79FDQ9U3mL28h94QR",
  "key23": "41VZmkwmSr4fLVTcnkC1oDMn3TGq12PJpV63S69tXzkoKw76WzLy5wVS1nT5d1Pv4thedwJsWYvy3RC4HymtstRh",
  "key24": "RDeE9uq3hCPh84yc9NseFf1bFcxVvdcwyERAgwGRZ4VGKUCTQCwjTMGzteBZvQCQTazkB3mxVUbtW9SsxmWfE6j",
  "key25": "4TVSNsfbkyiVeH1UtbjX8ECoA8Ph9vLQxb5Tu8pi85NW9XxJz5rupzmmhwCm7nrrF9DwBLhheGc2jkMWZwrwywo9",
  "key26": "32XXBUxPXK7rziREQgezcgUmLBcQoeTgmvJf9rVs6iv8Ma7MtsDqxo18HBGgZWMF57NtzSyLvT7mUGvRgSPEvXdf",
  "key27": "4d71Hbdx8gcyhTyciXZppkqZzneooQLvhQyUQzq1ewQysut8GdudegFFm6NbXwB5qkFyW1Hub1DMsgxUfYnemipx",
  "key28": "4ufXXzwEAFDyDZheVmsDzFj5XKsZdwhPcvtMWF6tESyfKZBCqokdocXPGBxGqUd1MZYyYLeonVERckHLTKgfcXHp",
  "key29": "5vtD86NfzE7fPY1gm8TEh7L8kjAX1qyhTrkKkNX65yGvDKWNFkx6P1PDZYmuw5mb8NSon5m9CjWXRuh7SYmeTwZL"
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
