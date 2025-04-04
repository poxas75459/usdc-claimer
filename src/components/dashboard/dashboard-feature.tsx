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
    "4YwH8Qz3Lc5SKRXvQN7JSM8FhpHK2eXFnCz44nQ4ddzjgBuAH87cvLFTUyouZHz1FCN7FcdRqcTqJ1Wwq3r1sLto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x68Ws1iDKwA68NCBNpG3XzLz5DgT2D2hmQqqy3VTMTYZYbjQp5DqgV5SsxJ9wFW6bgY3mu72c7N7Cjq86KT5S8i",
  "key1": "3w38naZgPBwVhgswR7HWg7hpiAYvVU1qxGakmopMXoCp1MVbcM3rHK4iDeCPsLviPHyUEn3yx8EZCRLmqzyNQ3tJ",
  "key2": "Vzbb1xXxBSfETL9rTi4ScZu9sv2eXuaeBhL4qp14pWwi5DKC7Mtrzk6rco8UBg3iTwzGaRXXsndgLmawy2pp5RS",
  "key3": "2EZiz3N5dkhBqu6Yp7A9ZB1HmQvXX5K1QizNJMmg1cuqy7JgoKwt74nkbFdNpNnZ55Kp1xdbSscwM8VUbEt736YA",
  "key4": "5y7REjXkmnDiHG9d9yxKmzdSE2BoXJwYjAv3jZDdvtcS9UyDCGQT3WECCwV58m4Xw8Gfz2xwGbTYwTc8c8eyTfb5",
  "key5": "3qiH2eruHRTeecUbjt9iZ9QGLa9V9sA1Qbg2cbyWzNNRiNEoteqsmTezisL2uVzYNu5hW69hv6DRBpfhk7RbQpeh",
  "key6": "67JntvbBPwWZTg6DkCULgksFYRJxR5x1U5Qf6dpu7AkrfGY2vJjtPgcAukhzY2CUYtDERczRQwf98BpN9z5xkEpq",
  "key7": "kM6UqmMV5cmcHRX1RdeQ2iD9avHHc9XSgwtLVK5rrHbmAbSx7koqeR2r7k3mmAPfLTAqH43YxtNZDeHmGWy1ktB",
  "key8": "2QzmGzDaTTYountssecCrSPTmpZpwAkkbzgV5WAKhhthj9nDu6Wu4ZUwkmkCU2YFwTCgNTEpp72eU46oVRTkJoUX",
  "key9": "2J1CxPseGt2wXKvKyCWE88KZmzrpBFu5LV32yVEqRPjLAPARQ3L5dWMSUTHcWUNCugvosh9YxrKVjdADYZoiPGUo",
  "key10": "4xSuoVN2Tj3fQjGAtXef6ySaYxhWx8YTCHGwcezH9ktqqi5GPK8oWrWQFe2Q377L6osbJgDKCKvcy4AqT6MTw6GV",
  "key11": "dLfTBmAf2oRmdE4DweyZNXtgSLAFJiDN1BxsUFvrU1U9FpCqPcY1L1v95wbp3AorVvfuxYgbi5kZnjJjLiRaXJ7",
  "key12": "624Zyw1mXUPzYLeJetomNUMjAdr7AbSptdBz8AMv6t6ZPa3FCbJw6WfqQVAwZye8EjmndQbRpzzpY26xdcVLKqSM",
  "key13": "2n3aots8jQmdwe4DXju6J4sBfXz8Qqpjf6ajmdzERFk78VBCGe33sjhPrtXZCPzm7HbYpWjCF536wkbipBjxMARV",
  "key14": "3wjoLVBaw2L955c5xsw82Njs5K54eiML9nEzUx4Sm5Zt4UHRforNDubXW21ZrWrdsKc2xnRNypsXUproYViCzR5",
  "key15": "5fxD4z8ow5Va2jig6QFPgdL9WjUc41MGKDryjmeC9bmWTP4nfEpSiKeJNQHjfU67vCak4F8mQqEWY2CpSEe3rj8W",
  "key16": "3xEN9F9TXyu3SSUXTdYDnnH4tY5gZX6wBt24jkQnWqcJWMf7qrQU9rUikk5wGRGbmmpbbtuSuhEUvj6aiNvLPtCv",
  "key17": "5PoEgtRvjrbZJN1ne1VjvG9qFkVFGt99FRgdRhNM3bZ6JKcFhZrxT1hGw8XdMaxLvQuWwh8uhSGx46mEJ5kUbFAj",
  "key18": "2KWfWusGPwwiKnH9xh2hJKUaHkk33GMfdJToc8DnSMzVAEJ3z6B9Ctt9e6Mx9bKD6m7YRLkj9nYw4u3QnZ3zuNmp",
  "key19": "2ibyNh4uPWB9WptruYXhwD229sQQNwWjjCLdbQD2bQsXwWvnAH1MYNr5EQLGKhkpTm1KUwn9kf6baQv5WbWZaR94",
  "key20": "5fzDNmQ1b4VDg15qEm2mRo4BbkDXNHpfUMHCLxjKqnThe9dXEfCmWAKnApvJyeMmLUCXTEAuYud5KraNwBqJyXae",
  "key21": "NzhnRiz8Cs8JLDaGSyHjNKg7xSLcK5fgYvPmfGL23ksgTPXFywXJ4hsJMQQawxknXnkZGb4rhZ9ve4mjh2TLtvX",
  "key22": "4TozzJrYhQHrAio6AQx3vT26L384bNfA5uBe3jjCdcHiJuCyRk6CHnhss2Sncn8pehfaA5iVGsqiuq53fWvfHm7A",
  "key23": "4Dca53jkXtS5A7EJZKv3hYJb17yzSBHJZWA69n83oSYnmGvfmbVmxpM8RYyECnGUyDRmqNJqHRMNgRccx6yKj5po",
  "key24": "5HAXsiGAsMiCDwM9mnTQ2q4fjvxoXiR4pWQah7hoyvJo1RiPVEh8YziUm9WP4Fsr9JdAKLn3F2CnyCZjv3CxMMkb",
  "key25": "2fu5rCL5AufKG59SZNEZVmoRauVFd6Ns2nSEzwP1PzNXo8VtxLsYjVGpre9NfEjunHhygD7GX1r2HqoTyii8NyvJ",
  "key26": "3zsD5r31rAFFZr7aYTH5tti8T7oMEfAFU78W9Tex1UDc1HxqThur98BfzHR3mmw7Pbup6Wu4QNbdhjhX4nkwufvM",
  "key27": "3g1EovJVDGceHwo9rC8wAsNPG6f6vF1fvPKH2yBMX8gtTX3p2C6WkUGCjh1gEALUb3ttU1pGTp4KCg8Bjo3L9Yzh",
  "key28": "4NpqPJedbLGwDD3fpFjTWfUHAycT2W1cCYepJG79461Lkfghfe8MTDLPWrNENJpFAKGiCCEz16Nx6KrNFRe1cCB4",
  "key29": "59gjcBfQtGWq4zU5FZEtGjFAoKzRRcsZptHC2E1SY1c6QVoPm94zN8daJWZKgz2mivK1GEyaVCvwT7jUt4WZ9XFY",
  "key30": "4oumTGSPpgrsqouMSbqk5uzUGtZ8j9zMEXM3tccgcrAWaJCJSkM4y2RRsqrUvfPHimowTXwqZkT1QxnwcixcRbzL",
  "key31": "39EXRqbXr27ALQ7L8eXMayHPgma661LouRAg3vJ6PYU76GKjytfBY8K34Y8BZS6AfCXhWc3iU65daUxYTrfDN9ca",
  "key32": "5kbu2h2ganRV3Wun66PuvKXZ3GfWptGWQegx7o7Y6gZUSYa7jEvNuChuN9wBDU1qQ3YQTZu2KeQuwbMQDYdL7Gtr",
  "key33": "35TMmyB6g9iosX8im5NQ9bJsARqAVaukYPBQKqWKGrBHAZH4awgiecwLp7Pp9tof7rrK8z5GRvGvRQBvH5JUeh67",
  "key34": "36xFYcA2Fqa5nrLFpvYMdUYYpMw5XuDDReVVApCDnXKox7qrCYvC42fmHpNn1qeFESY4mWFRJjTkCiQL5skdAHU1",
  "key35": "3SR16G19vbXTt2JTqBmUgCm8u1UA1jDUGzNoMMtPfUop1ap5gTo1zmiqHc8Uyj4UJrGqvuKHQo8zDAJzFqTau6EY",
  "key36": "5BxGpcSXf1ehujAJ68Cnu7gvQDhWHf7248UxpmE4rNH46mrh52uTbDDVu6AmPaPMLCUHkb5SZN8PasWi8x2pnAko",
  "key37": "2ueRDGpLEd2Pgqd3C97JonTt394b2EEdSzEBffGheV4mVUoTTH1RjzQtthnp6UmPUMRBye1VtZaaWcoCspo7GSpb",
  "key38": "33q3QNBTAZNbrTayCyjhXUmYM177FXXXrj3YtB7AHkV1emAJNfo3q7BvezRv7w6vqTzPJKyGQZQi1uE6QdZRTMZX"
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
