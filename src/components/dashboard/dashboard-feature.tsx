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
    "4wxythMEgSPr4uXHMGKHtFPKT7YfQpVHxPER6dPkZ5VJVbgaBaM8MCsoDbdLDeTKN1ECBkXjtx3LX1cWhLHqPbNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p8b9czXJLESodGahqMo9qoywTwJjLHKB5pB6NXmT611HuEUm65Cp37gRnVi8SNjVLM1jo6tRZctAzoLzrTz9WLv",
  "key1": "oZtQniNL3b5uaAdac1uyPQ6vKsVXQaVHeqNAQEiQnba1A9ca7vPcmRYRCMWc3TfehPSVbbvnkBrQJKE6Xbh49rN",
  "key2": "6SNE9T7YpwufCqU6wmSs7aGTuyvwdgspPmzRvSvequyPgbv2rdunk3jPpbAgM6wRTAuzWmDGchKNCtesuqwvVz8",
  "key3": "4m2MydrNqfEcfZzS8S2dQDGJxETEELoPBNpcJhN8L7M5uw5Qf84pzpHqLnExZEdzd2JgJowSXBYb8q6HHgNUixSg",
  "key4": "2fY8Ay9J3UnVi8yaX37UEGuS3nZuyHvMhnSVgWAQh87oHRzADUx9o92tkpcHjGGgZ2h4RHiMkitMCzaAuuygP8Ar",
  "key5": "3DnQkgELsDEBTUHnWzumhtrKPhXiE75BppwiehcSn5RUeJGd3skg11PW66DfRKM1b8GjkZMmW9i8sjwhWFE3Pq43",
  "key6": "3n2VAiuihxdtKvcLduUkCxMDM95XGq1tXdMmeBN5jxphiWu4j5w3q2n4NKMwAujSi1ohtK6qN14icTfe5okLZ2Ub",
  "key7": "5rvQWAowUmzRjCoB6KeTAL4Pr8J62dd1Nu6Jm4bV32nh8rFCLRyHDAsNVgxu1H5aa2XeqJV7p1Yt6GUQMgdXtzYZ",
  "key8": "2UKPPA8ZdtqbkJD9E8XWGz2mMvjLQZ4X3rVFjYrr5NDEpCXXCHyNYWVfzBDwq9BUCAQ3S4V66vedQZA82Dfdhmpo",
  "key9": "3RDUNP1qTNcGUbDppyuEQxp7bzk4v876pr29kSN2Y5ZtXuodEZk7BD4yg9HaUKQ3qnfXpt7ig8RwaQtpAF4otCKy",
  "key10": "4XaGUqywbwvsDwrnm36bGv2zJVGNBaMArrcyGCP7hMJ9PU3qDT1NSXGnJPL43SLSPvimKfkoRgS8XjzFN8VdnUxJ",
  "key11": "DkJnfYAuDstJFG2CLDfqB8tTwAyEMzHFc9pBKYeLnpy2sGsJAuuvSjQWP6jL2NQBCR1pfJkSe8vb2GzrMaQumsM",
  "key12": "ZATADJUQj8zLFeaXntCCAFEBUcU29ApdhSGn2Umud9zkyVe6vQbTd6zJdeKinGeQCGgAdUH3W2iLvdU13v5r7ux",
  "key13": "5fWdHG9jmeofjgr4Q99e5pSGUpcjsrCyxtp81ffUMJLs4ehQmq6BNMay77CG6YRKn6anHSYyT7T21kVVyb1z9nqo",
  "key14": "evoSYNNzVgPBXT5AMerhsrN9b354FLDhG7KgjJeyPLafh5mpk5DgD4ZN9tJdw5im2WbBE13ZHTQvZfgzv4iwG8k",
  "key15": "NWRBBQuW6Bwu7L3RpzP9pNnv8D4F87EJSzefGqn6GC8JyGdRaaxno88pEekQanKUQxukT87ScrEPXHJcTBstbo4",
  "key16": "5T8seHHUKG5EGUXGjYSoJYAhp1ji6nUjEREX77xFroqUo87tXcjbkmaoYtcBChK1d7JhCZJjE8TrY4wetJhZusUv",
  "key17": "64biwjHAQpeqNyFXtB68qnZ3bDh9PEqMADyLXgPJjGGK8bWqC67zj5nUHMVF5jKQHR5gfCokgjFaV3DWGi87f7Nw",
  "key18": "4joD2srJarc1JauNGRuMBVdT2fh53YqtuxMTHuo42fhPkpYePRSmxYCUjNDfWs2tnTQEhcfFMEceHLdocEhZsfqJ",
  "key19": "UbW2iFAY7tCjrheTwiwGhbjrRXAdHCkJLHf9WeYzqjdWT8hTM4z5dtzGMKY3Uciz6P9iFfyNwNZW2135oGrUq1P",
  "key20": "4ppH9HSy8VUAkk8AwpYw4zxqtewViaJmhYM7Vg2pdCJ3hvxzuzK5cSSVHApiAQyGddwQDHGxNzkYE1Qn8pMt6tNZ",
  "key21": "5eRwa8Sr2n9BAdBPL6GgCBh9eS5Wufim3W53S4mSjaQuKip87uqNUksqrQx5uz79CUsNu4MLZ8GNFbFHA9LK9yih",
  "key22": "2eatHWsEcMC6AdxdeY8Cp9ppuRzLnavnvGcgbCXgNS2aM8HpXLQ3bXyb3YSyjqHEgfQd4s37qSmzwqLkXW4S7Rkm",
  "key23": "2BWn8E3KddRWT4gEEkYT5NhHBqzXrP2oK4hEzXRCwyMnZ4iaKQGUK5Dx5buRSHf2vpMZ39w3pkhGLTVaVJtdcFcF",
  "key24": "63hqFjNWJRaTCJbKoMB8C54fdGkFBUqFzoe8X2UknKNks5PxJGxwpEC3yRvUzkCMSf2zYq3oSe4c3hYhiEEq2URk",
  "key25": "3a5apYzcaUcz9Gh7aspY7YaXtQSuMYhiffjdEEmEFZ8U5vCyEctaLZtBDNxucPHzBuoRGHArTQa6m7JKxpDJTnKF",
  "key26": "5iU5MCj5z3QrJ7HmhoggrW2FUtB1adgKEbbbqUtgBjCYXyqx1iScffZDSh49VAbcSyPFDhPMCGi35zEgszE3ZDp5"
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
