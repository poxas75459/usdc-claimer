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
    "5hRb6hSzTVdjqn2TgYcoRUZYc5egLYnsgBhB9wD5aAu3q3euZewA2sg6hxXaUK8LQLggoXoENbTCZWk7JJsc6rRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EgjmiaJ248Wiqf7f8U5WwUX8tH1ZMdCcfvR1THGBiMkUoQNjSRWAqUrbrD9QxJ4z3VppCLTHPaietCB8vXGs5ox",
  "key1": "4FpLKoYhkdXkesfZ6SG1oJMc2JmaP3mtD9kUNTGGyaR7azw4DEMwWTSByZ1d8HT5yn35JUQYPMSkFvdf6ANUijms",
  "key2": "3tyJj9VK89BFcbEof9E1HehXSYaqksJwfJX89kd8Tf3Jvx9x1X1PttvTG1822DNuuTegumFDVFjYDBRCgUAgrB9S",
  "key3": "3AeD68HiiGYMLcsxszvfVDJAL32hMzTUXKeNxvS4KDTizYdEd3P4XRcMgB8FRTgkPgF7m2JCRDY2hpbFak6Xsz2M",
  "key4": "3CMWE37XfznWiTPpvP98rG4t7iXmUifCBdXS5C2wdCKtgwzRxTrENkQZMVWFtoTQGj5rK5HjK3op8HEU6oXsr11K",
  "key5": "4EyHPbRAEqHA5ajsxFz5bufaNP8wiDNFycJ4fParabTMfJ5Pw3DfCHn733WoHFQxwjJKtVLNtQzPWTpEqNtgUexe",
  "key6": "4Resr9bNdakPgJCpH3sfLkiixdpfwwQaRwEgtVB8e1YJUpntCfzNKmBbt5DFDr8aVKKAYZc3XXMQjHJJhD1aZZWM",
  "key7": "2Cwz8DWueQq1R1s74xKGyUcTrcSgAbApoVWi3hdZtgkVH46M9dz2tjYoh1AuqMNznPpSSEhXkJ5ZcfvXEtFLxdu2",
  "key8": "3pSNikJfkGKmH7ifgBqmgXk3MkcjPECQ5cUJbkRpD5RzUXh9Lc4BZvGHY6XYS3rJAFEn3vAhaLxWrdX1bhU4Vc6T",
  "key9": "W7bVgWu4ZYN2afhuxWxFVNDfhXbryxqojABCuPJ8EkfBTpRmkTJcQBresHGH8WPSGXrdN23LnNL4Vc6QDVNfNAs",
  "key10": "59J63twnC8zjqZQWNYth4GTdDKtXPrtwxwskohVUuaJLaRUCm5dFskcW92mqqZXhTQkghWfEi87gvfxekiSAgiwy",
  "key11": "5moEw6Xgtkjdpvf5nkXqBcqvVCmGTaDuDmBV6MTggwpauCaVvhHXiJB6yrzyUjfi1QTUavMdk365xndf1WELUPE2",
  "key12": "2quo7KKuhMY412qRxbCEowgwSFAPF6XKS39qRPZRKUW9PCGkVwHXk1ydxLE4KNEAJ7RuedyhVJ1okMrUp3YLspam",
  "key13": "5yLjY3Pb6DYvfsvmc46XPdusTEtCyz16q1WfJWVGC6Mazj7eJQe1MN9149x575dVwJ8gFdJ786BAWhZGZEdHNVfR",
  "key14": "4HwTiNyVJHXvWfHQ3X5Da6rmeob1imkTEvQswQPnevH7nq6prwM3AZudPW9exbPg82qeSRSFmD7BEiDNtysnfoX4",
  "key15": "4q48yPGPsopTBbT34gLK5S8H4XXEqNA2fSoJAepqtsgMMGqTHqi4RACmjG163N2fRyHRZPEjQXNbE5Xz4GCEJTM6",
  "key16": "39LkJVnQowF4cnQteiuvKW1Kf6wFtqZbFTcGtKnJS81n62ndhbkmkS6TooSxQ29ibNNbznVP23GJbgrw9AHvHB3V",
  "key17": "5iwbNFRsEVpgERq51oHK6YCK98GMa5o3b2AZKF4qu4HEYz39XowCJPQBS1Uhs52n1PnC3L8LQjAXvAJCjWZABemR",
  "key18": "4D39eEbWYq9f1qyQ3ziJy1dyNWv3gdDwkZuHnYpzSrS6syaXkoTn7Qft4gvgjzpeASnL1DoqGc11SMu7BQ7gBumg",
  "key19": "63AwBHZehjnLt11MjvrJAhkWzBYj7Dj86XwHy74zuRpPmYnhW24ifcQ8NbFKdENX5byhoHiTnf4FofVpRKGCYBi1",
  "key20": "eMsgK67bKaiK3FKiGLBr2xJ4bXH9H5exv5pcVSaQdQUWpZK4v64F33pryB48gZSPeKYoo8vzDtkuVbgLBgRFXEh",
  "key21": "p5L2aPkoFVt9Rn56vi7PT5Wu45aqucAXRuuDY3hwoVMfKFnEZFP4GVUHA28FFcL6q9me14kghqSJ3yVkrvC4uoY",
  "key22": "2hSHbLM3NjpWJSFn85wMBrVBTxUftLu3Yan4h9KwDVB4wApNNX7qkL4fLM1Akgp7j9cqni4VtEhLVyRdgPfQxQQp",
  "key23": "3qTEwYbHTzbphBv4BLBnh3mETekNQdtu58RWbTEsfhP9o94C2aDWx33QUgn7WvQhr8hcrdLDi4TGbdNeJ2AQEMTG",
  "key24": "4vMPCwWUPd52ik8uFTDXheoacz51JyLNgguvkVYkd2YtKLUWQEka8tcmR55HWvNs4zpn9KQvU7g5W6JbnisdB4uG",
  "key25": "567g3AF1KMax9Jy9vz9akFT2PCEJHF2NYWYyxzZDZaH8Fg92MU1eEvVGErMeeoDcX47nJitL4EbWEeoVRLxsGiwJ",
  "key26": "vVDTjjxraxq9xD2StgJWpqMV29PtmA1CqZ4pAS6MNUuz74k5WtuyMCND3aVDrXpFVeG64V8P5zJNqWsWSnuS1rM",
  "key27": "hcsg9g4M6Nf4wcjdu3F48hhJFXVRrPFtMUqxqg4iHP5PBExZzSdyFJbDFX9cQjZKerETusZQHUAJ5gFPJPzVyDW"
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
