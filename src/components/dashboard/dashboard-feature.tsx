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
    "3DNcJryJ1fv2Jfjon3GvUZYPHYydD2EopVA1npBfHzGfkwDS6VjuYAZHDNQrXTv3dncnGscBq4jrhYCw9ztG7895"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZZREyQTYP7qb6bJiT7zfca2cGjwj1G4XCFTtgCgNXSTJQdJZ1VsM1keH3g8JnGRTJuQrKHm8jGMFMa7TFnoQvoC",
  "key1": "2HuxYXrzmeYq6d7VvrKg4QfK9QJUSwyspJgsgBYDPe8cQfbncpxL2ZYfDAVApzjzE17cK59f8Xvu9MeorzZf6pgR",
  "key2": "37FRCP1KmTWbg6BGNf8dH6ZPuPG9oHA6VarXFhsQqHTAXkttEoEdQn4LoQ7SeRdb7rfQMJ6kAV5WewfxA8maYEj7",
  "key3": "2b4hptvokfVhtJsvd9aXPxReSi8eeMmdogFDqpS7aF7fc3Z3SWEKtxtGavCvFEpE7BdkvYevHuwLZf3A6u6sCCLa",
  "key4": "25Y3iJVEmMc7Mqe1ecE95tVzQWTukXsssMsVfwZmatSVzvuyK36oY94Vw9gPuCUkLStBakwxo3gYhmtAm6wy46tS",
  "key5": "4fkfc3SrNKtiE2TZVsYKQeVQTjic3XYfSytYtXHxGUA5RyTAvA7He77rqdxViLLshtRCPzBhzcBj8epJVbPKYEMQ",
  "key6": "3ETcwTgXF8nqgSohMFLszXF3jxi8XQ9MyQ4YfiiWCcNNLtpj38QsDBvGfx442xD4u1up48PuPcT5nLteFUK57TFS",
  "key7": "3Hg2iwvQiqJ1M4PvUi9S24TexHMZ2GZGbZNDN8sWc58GPB23h4kceZBXx8waiNQ4eKn9TDzVYcP83c3M54ikFHek",
  "key8": "4evYZkpFimGua4YKs8tKmdU45trkDvBYhiUehu9LqqSTHj76aSwYfNtR9tyxsVsbG1ey5C3Yd52t2eJ14KX2uFL9",
  "key9": "54EuBdLv9F3o5Fm1nQn3ucrt15F3AuREzN2EQrtNhKdRSxvgskTBbq2mwQkDqqDkHw7jujn1XufRSFNLSp1UzuWw",
  "key10": "YLqMZ5sgePc1c7q1LmTZA44HEmHdMTLqkvsNXNEmfcW7UZUTX6YxKS7Gw7hRNMAydw18ddhJYTjqiMSShYVP6JA",
  "key11": "2J3t5KkyAKGrSgTyjEHaRovcMomkAuq5WUQmLWyvQCqHEcunnDYQAboPWwZx3WNqyioc5aHySmbNNmUwXR6LsNAe",
  "key12": "uCtmwr8yvusNTVycW6jqNuqf5481tmuwQwm9WtV8C8ATatYmpfKtT8ubFWBYM4hUUmm5hm9H4ycV5ZNdyUuB69s",
  "key13": "2zK3cUZp7ENnrrWSKw2rs2SBMvhbbRQnkt1zgYXgAvJzwZtAnz7maBqGGNWxUzFspAGNpkas4Ray7NtUayEPrJiB",
  "key14": "dFGPKtJJ9MfqGDyb94KvCmPvfxGDfeWx74NdVpJkrXMcrdcbjhRn6s2docwpzTpwN9dCcLmFFDLqfBs5889gBzS",
  "key15": "amPTSvjSZ4s2CQcVRDPBJ7hytVaraVnok9Hy9jCtuWp221KinweXwTeNoz2S1yLS3mikrg7VxcENYq4eksBX58y",
  "key16": "4QcvDMCNQh593moULCDz7PY5G3zc41Uh5L4nhj2yR1Pu5Ac5jtXd5PrtdKYaXoRYhw8dXLz9DK3BEfmYEn7A4Pea",
  "key17": "4Hs1tCf2qGUrMPhrDY2r9abKEMNdk1tGjG4eGG9vpyLRSvETeSqvxCsDoNPue75k8H8F4vLNrAxBZFyF4jgg7Gdb",
  "key18": "5qRi3N5Nvnz9z1f2TE4gT9ovXGsZEuptpQ45DSAYLUz2QS7AjF1TDPNhTtzZFdpytCNvZCQczS8wojWjugikNvsv",
  "key19": "5YXSuqNXB4CywtEKGThQERDjBqQrfrxEwiyZRsm9PwyhoLQrunf5qgBVMNaHFgCLg2Jx62RcEMLjqA9oHo6ffEoN",
  "key20": "4x1zYw7itcNofMnWXkU3j73i4Ra2LTTq5XACBDfYgEfNYduq121qhG1nxincVvWhzYGG8Bqj3VKWhEmThDHBCugq",
  "key21": "5L1A7QiVFmRwK8uKdF4kBHSXvfnr1mSnYSSrbWYsEK9sf4cjAQKr4cvGzgcDChUtWyk44jA9VJNWFd7ChLPxtpA6",
  "key22": "jq5PhodT7obBYakJEKZ6TJQT9LbdvGp13DYYxhWhR7bvvT8Kdg4RBnDcHXvaJN5M8gFKR6PpETbh2gqsdKuCwDe",
  "key23": "3GPQk7VRq1DwmPWgW4BYATDSkJf7q9xTzMwE4N33TfiNhphd2c9h5NJ8cBhS7HBiqvf1GK423Ga4BHA39sY27Aqg",
  "key24": "4AUmm2VM5pifhYWtaK4cFStMzB1JasNyz8NNz7qMk1FgPhywe9RLgG2XC6x9isGhQoWvUFVW5Pm9hbuQZ35GLg48",
  "key25": "4dhJ37xi11J2gb8ndjkTmxu1kCuU6PuEE7bQ1sDfkvuSx167BZLLwPBDHCAdp9mcyxTo4fccGLha7PSryWwzdCbS",
  "key26": "RiQ367b2doMNeSi18kZf26K4qbgvvRNszESQEHagQ2HBWgwZy7VQbSWG43e6VzhEBRatsTTKJsVM4qj1phpR63v",
  "key27": "3ufy7fqH2SpmASRbKhPFYEDuPZPSUYe5HCGWqsV1u3RXtsJbwwKbByTLV8tqcDFXrDLiQ9M8iutmfhTGpNoMyarA",
  "key28": "64h8MRbsqxEkAzhsk4VnMsnFLWkFJBPnwuRD9ovM63iysGuytkfJzVQX6Y3smHTdTBStRxyZSE3nPabgigkZVtTT",
  "key29": "ZdMLySfomWqgBDGUgkLFm69Bgque7Hw7gnQze7DqhMhmysGYo5NtszA2cyQ2ddMWS7z2xmw2KwCAG96wLJYcDaX"
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
