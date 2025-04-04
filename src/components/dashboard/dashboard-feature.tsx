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
    "3X9M1ERk9n6eoQoAiueHN9MgdqQtfr41EfQBSBKYQR3sJMW3sQMahnawjeHCgPf8dy2zGSTGTHWZsgtKtN3at1Tt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YpETU7BAKmDvRz2aeHsxPJePu8tYk82tzbbjVzpn6aocJpSPFHnbScSD7cFHhCXnPeFXiZ46jZwJs7SJaCHNcZd",
  "key1": "4d8FZF2PENRYFq2Yt4Wa5qcsU7gq9mFFAGQJRgn5W6Qbwi8bvtQinbcLuxpdLd9cpQVabbFQqshMBMdncKE4HEQp",
  "key2": "3VXT35wtwCmk8S7z6S39JoAZbxkBv7nHHEwqtdBG2SWc3rswjCUfP4QKTHjJk3xEKhatykkFXiCmqwohVA2ZwMs1",
  "key3": "Tk9gmQ4KYxtuRVsqPLWWTeEpQUaTBxeusHQu3Ur2BQ33itpV1DBri4hTrTy4cebuxJcGTczhwK8PXvBgvAtyW44",
  "key4": "4qRXbU5Frtnv3nq7kX9hCrSkvQg8SrdY3e5k3hytvJQZ151B2wMWZSUPo97j5yvxv3L6edZ3AQBq5r9cs3cqmeG5",
  "key5": "4BWv9aXfkeNSDKq18siq7cvHsqTb8wzKdAZBwdoG6hhe2Qak41F7dMdrakPL6Y7BHwmB4cyDs9iZQEbyfniP4z6a",
  "key6": "qU7vsTxaDt72XbNLGUpt1YmpyrjTR17mRbAiaTyEjjQdpNTho5U39Rqmk37XkNsWbjUJToNu8A9fRf7K9T8fB5g",
  "key7": "4Vbk3ygbiyfcgvwm4dFp3ZzAMi13ZRGwuqm45erdsdw8YxC41akwW7teSVWvgT24qPYvy41eAw19z13D5aVv8SEe",
  "key8": "4e5HKEA2eeup389Ppcf3ZaoozD8Ns2BhMg345QHyjRPAWJzr6NDoVuoKdQZTX939acMsqjiy37Zb32xhn7oRW5No",
  "key9": "m2GVSDV1Eu6L2Ef5etAQuvTi6pCbhVfvd3mUvehvFD8tDUQkkHHtQVHSsKJdjyQk3NBbtzxfbZxsAZVj12EiTQ2",
  "key10": "jVxj9hvAUhkNDUwPKzXeeZbu1rmcesjJb93JFopzDQxySeMoqUuUnXxamJXUNtnynqJPQdjGY19WDyPviP8camF",
  "key11": "KNkck8ZyDnuNyWT3dQc9hChmcCEbMD9miUCk8d1EMit1ULWsvDhM7gN2ZcN9mKY8SkF35F7CuQj4TfwVVxrs7HC",
  "key12": "5WyyG79ww21H4ESuaFuMNJqrBLoTriYYg5FsCfidmJfaCpRimjc5g4TsGABs5DzuqVZqQVahD3d91qaGodyqFsZB",
  "key13": "7fGKXnnAJw3L9GVy77rroFSU9pDH2QqVTovXfmM1mjh2Fp2LgVaYVstS9BuPSMpt399xYtdLxcpMqcSzYbbZuta",
  "key14": "4k7gNitbg3DXmN8BA7watVmnSkxMpBfhhs5e2fgjrB1KFYjC79Ez5j9UWS2g1VVNooQdW2E7qZNNw7rSPmL5yWnA",
  "key15": "38LFdYqTKgxfmp1wb4GuHpHrmLzeAEsq2tYkjhg2Vme8UuEPJAoJdC3qQqrNh4X75rLBX6Paw7piWYCv34Pibzje",
  "key16": "2mG6eC3SLdheXWDWqA6bjekhrWwtZr64LvaPycpq2y5ufRQWdq9uk9h5aSZfCSDf4NSSbVBjaQ4GKVe4wo4nWJc6",
  "key17": "xZr2vJBExBPkSiw7BoTcBDh45XLPgPmma3cL3XyjziZZy7wcrnJQbLGKDgzD7DVM1Bo54q29CFjtfBQ76RB7jpV",
  "key18": "63EV8y7rKUxmheipEFcZnRYoFZoNaNbjs1a5kaLzvjDtjEL9RMMvwhivY3kqHJV46qCJiaKLTpeb7a2Atm99dggk",
  "key19": "f8HRwHNESVZDxwR9qhipbp1pKcnLZmARoG6gvPU3hFuSbhJXihF8bjkh1tZP6fPC6T99wsCPzxJge5dSFgsfizU",
  "key20": "4DAkaqmcur83B683kDc8ck8jwBCQQL3omRpFqzgNxrxyCEVkrj5FxXXgfa8bhknguuaWNKRcjyTqDaNQ817ETcri",
  "key21": "3ra7esfUdeVXRhLZQu1HVCdKcJsC9jZxtkf6pkm1bGsig7yWBwo31Ye19Ushrpu2cq17zdbW1fGepD5h4QCDrJSu",
  "key22": "3GzmHqBb3yBPmmfXThevLXEcA8TmiGnytkMbaqrFnipyBJR5kmsyRCCBSsByNmTTWEqzcgApaMyJors2tiTRhkKp",
  "key23": "5NSTq6UN5faSbM2sY17QnTL7c3mHPNJLwD1bWrnxBmMfVRnyuCtFMcLd6HtwNEDCdbeX33g8DAYssD4HFWVEiysx",
  "key24": "LpRZMeMGY9Ftgr4HfCxpCjqV37LTasFYPP5iKnqH1y3YxPBxmrYQFQYxZndYM3aAAixRFcvDnraX2jkqxAwsYgf",
  "key25": "5eVw5qjXY9tKDJ1w3rdXocW3c6eMmWcr9NkdJhiGwy4tchyeqM8eKmE1boVBUQpoC5EtGMWUvZ3AafZT3S6yWMzQ"
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
