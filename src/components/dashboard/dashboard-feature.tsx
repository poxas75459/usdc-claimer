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
    "5AruxqCd8PDtxwRxMf6x4tqNPaFqJRdVHEpNtdfCory1oZcxPbNWmKqZnn52ZEdmJjA3w6hnxUVCkN37EGeBMTw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U5vd1j2EHFWCyHJrcVaHVNA4F3sTV535iWtiNw7zYRMQCejHY4qZWQE9mPqpy7qMLkBSdHrpCkKiy6kYjRihnyh",
  "key1": "MPiVS3AhmYi1mya4SgrjmnnTZ6BzbLeuZJtbqgKEcQhQf3qvL62JpESZphicptBdgXn98issEb3k9EJoeZmwa75",
  "key2": "2sBeNiTihbasjz2fwoxPLaanvMCnANSrHN9Lm3s9LoGuM1r3HnJJXTr8DqA5j8mAgQgqHajoQ5YanyQeThqeQ5bo",
  "key3": "38SM4dZby8YxqVjeaD7ERjkwMya6sXPSz1VEvai1GLcQaiyob4mvQ8Kd4WojL6cYggTFgaJpcrHWQJWowoWg29Ep",
  "key4": "375gRmmAAC43namNDmN7Een1dkhURtHESSWr6cN9UQ98iV6eg9793WDquXdkFpYkSj2NWy4FWbs7nhU6CsLUUhPy",
  "key5": "BUkGa5q8fAW78fEdL7SLtgDRvg72ocuKz8ypVWdLgQdHPGWneR7kAe85BLsWFfKRBmopPBZHUPcXEpPPzxX1edq",
  "key6": "5PCCEohK5tKeCXQiRpQ2XUhgHQDtYspL6nUTTewiRXAjpEtXiNkJJcXxnhee7MeVTfBWDSsxidJuMGwuPu6qTXx1",
  "key7": "2RBq9fBGiTaf6VwzJxGLJvnz3Do411d2FH2XQuT756PCvcYP5gzETBHK2tRp68Ti39SdbeSbV7BnRq1Y5htBLpzK",
  "key8": "aYx1ULSV3PX6pCFXiqjWTmhJkC5a3XSCJYB1QkXV5LwN64R9fRiVXkbsjEoEsiLA8vmz87gBzcYHupuo52Vf1Y8",
  "key9": "3cKfaHoueAdYCMbURLiBkDwfSCSCYrugGkSJQ1bXYnMmn9DRwZRP89dtKAJS6bDoAdQVSMLSzKxHoMc1b4mh3Zqv",
  "key10": "56JsbDy79W5wdr8dRH1RwpwvVf1YH5zxd5taH72SMqHSdxzDrkFUcX6GfsmWwvn1VjqUGSKpVVtetS2TZmomB61F",
  "key11": "CsA9RGTe77aFjcigKzW495Jo2PktkAAAHbBWwKBp7sY1gdPvM19NaYJi16GFgjXeosFUi6yEYP1334yDnB4euua",
  "key12": "3pxttKxLcVtDJDM4iyJGqgFwofqmArYk42bbkzCpVwbK3WMUzGpMMmyVEPx6bX6bqpc2qfsyRvH98my3C3AMwKnj",
  "key13": "K3xb4ff9RcExAkU7wfmatQAmBAqYiYiKheezVL8TijxUk27Hjc7e1XEtpZ6YLQPaqQ9hukeTCow8dPWkxnkg9zF",
  "key14": "5PLKeH1qHH5aZNAEeUu7ip3VQJ3yJZJYvcy7aEfj8q81iHiJHWDoKd6iSn3x1tnp1TasgBGRZF1ZHY4sfbJ3Shjw",
  "key15": "2Zf9THiatSPU7sBPirCgnjnhSkesRSmvD3A5A5H9nV8mD59ykdE51jV8g7Rv2peHte89Mhq5sE25HXqv8j275kP9",
  "key16": "KDGZ4BfeorSGWWWC57veGA5Eb1qfBNH8NbPbH8B6cbq2gaAhYqxFcGoFXCo4YgxvCmM5xTZs2JKxuRL2LP9c4rm",
  "key17": "Q1oa439HCYVgojaF5Fe8WQ7j7NwhRAewRgUvCqkTpsH9A1xb2J2xdztoWn1Y2DcqyaQzUbhitQvoDH7ds6nn7Ut",
  "key18": "u3Hcf5gCKSjFrhHpHzy3cvxLP49MbcgNL9YrXFoak9of2NNj2UqNEYcR6mekTjXdKfTQPXB1DXZbWqsD4Fve6yQ",
  "key19": "3JRbkcEFQYAVPf36rQnLCK7EYdxegJtuwiwhDiknXVh1fVrWzNQRkmjr112LnBTBs1YxaxCADGc7DWv2jwaSvsyb",
  "key20": "ND393AVHQ16y67L3WL9mxMSwi3iqvcP7QrNVKWzbajcQLoyBXnfTe61euBTCPTxyo4vyRXjqFHijH5pNqhegnx8",
  "key21": "4iXkkoPYr8NfzrxSR7tmFQ3jkU9YDLq8GLiu7LU9FwSAPy8S9xa8G3U9b7k83RSgGaYe9d3GkYLHrJez4VkZMkGe",
  "key22": "5eACjoDp6R9ocAVPPFVQB2NbJYorKRS81oKwYfbV2upkaZiJVD1SB9zU2zDrAryq9QiLQ4u72PxrNwScssNCtFwU",
  "key23": "5jKpe8aYU4GedJVV5Y2YNEHXhEkESCD3Hg4DnNkfPehZFAW2bnpvzo9avk8MqsvjNE6rgoFyqB8HDjAhCjsMmZjS",
  "key24": "5k58aqttsmTBA9RdTnbbbT9MFhvtqevE4r3X31DcGnD5SkTNaAaymk2LygYUxGxBSqcPMDSQwUi59uC3cbMow2W1",
  "key25": "33tnaZMtWZ7vc434wYCPGA1S5Pn27BdmuseeKC1DGTgsKSAhhwjVAcW1CoMdmpAAjbLcRkswkmCK3V8uRm42nVjg",
  "key26": "2ibfu7WNgZvM1A2xPykS7Zrcym7Y9d8HX2z7wVHu1xHC3o1o8JYxeJweSa42EYDT1guumZqJ55rgWzbMhpeUb2vZ",
  "key27": "5HeXc4aCt7qkxksFCSSh1Hf64few6oFHLsraWGiphXi7PgiR6QG1vwdJHHrRK7D3i5sp2q2QEFsC21FwyGjGS6kf",
  "key28": "3HiSJjawhpeFNbdrSYLJ4KhZquD3kFb7irqxvvcW2mQhfXKrPxnhMxULDQMiNF2H9NFpqXiAs4W76WoFYYh4P1Nd",
  "key29": "MxTSNJRooXYEtJRL6sgExbJEtt2v7aZwQUR4a7BCYArbJCFwHpaCrVCdCFcwby7BZacaRityw55haLw1U36A7zQ"
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
