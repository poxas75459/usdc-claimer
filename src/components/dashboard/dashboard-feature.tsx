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
    "2q7aW32QfMdVEkNBSAMAs7nEqZ9gxPcYHU5125npq3t2g1xSdCFr8Bj3MzVPNfZTctoakmwbPQxqKih2uVDse9bB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kMTRuLfWjSj1sQELSFf42qLDbnDnVQpjc3yt4WM1MtTmRfdEPSJ6A99EKdvnqZqLKx2G8wgFmEkwKQ3nmtWpv6N",
  "key1": "5x15FQRX6SaZ7DDcqZ8L6ZicGZyj2E78MBDx7HAWkxLBHs39eYK7vMYznWTub6YAS2VqFkPYASfY4GQi3P1vUdqX",
  "key2": "Hq7RPLdjj9UVXSsZbYHgXgEzVqStJyVjaVqq9E9aJti9srHCtWJ2zGe3D4YJAuDMamwiBDTyZ4hvXKJ8TJV1EBc",
  "key3": "2b2ABkwf1VgMKDMSPKFwWHN8u2GRphRNriErHN5XUAXjXEuoWE9PHqqNAD6GhfsmBw7RAfBqta2kEkNdkYAuSMWc",
  "key4": "4ReoLpcR5uvfAVsA56NQJUibPMe9aiBiabMYhhqfGbUQATPrKmRJo5aj8zMiARbuqFb8bKBNtd2hPe4Ti18XmDxu",
  "key5": "479kpAgaW4eCs21RQ2BhL6P2uP6Rs5VtVGnPN9fWmwZET9Sf2zzBTYZiv7Mkg5hyDkWGTrfBijZgXsC5xPrGeC9v",
  "key6": "4JDeuDgN3JaVNvGeGPpH5QNDrB2WmqNRK1pzkDYmeYXBUjF8X6A2Fimp9zMA76j7u37A6ii6cP4BYZUUfEmWWS93",
  "key7": "5ULz3ctcWsUuCobQMpMsdyeJ4o58Mn3mVskgTtUD2hgKbW5qvm8L74wZwVwDTV4CtVJgsd5zJ7bzP7AGWbYSfzu",
  "key8": "H6vFm5LsUGWHmgg2waNQbZDDcabUYoYbWQXBtZcHQCwN4Axum4N3rnajc1njssC9WUpHhJsCotdntghntEVzJKo",
  "key9": "5FoaEFRVacqVTVWagx4XsCaZ3Thg6CNZaJHaDodHXX9c1ZBk6QP615wpbTH6H6K7ZJRqVJUCoj27NQEYX9z9dnU6",
  "key10": "2XkKgs7S9yMRGLhGzy7VR2HQH8YE6BNXZkYv2pG5KHcrMFUvcS9PvgfLKkg29vEe65pAP8sFAJ4G9r26Dmu669XZ",
  "key11": "2UnSvGCeH1hKhyoWCiyB2vynJLFjFPm8WVyp8GdFRGj23MhoULfEL4HBKNAHwdhqh2e4ynfJ6dinJy3AYzw1EQKM",
  "key12": "2y566LfSNyUoNb17z2FoV4JE5GDB8W37XNgTK9BrLeKPj1Pa2Zzeq48yokeC2hVxGpd24bw7i8T3MJDNrqNzxGaG",
  "key13": "4SahbfuziEcj9GKmEMtXcKCt8EywCgxdRPTXydNEBqnERB3gVriQLiiiNWJysSPNSJMbw2rmpVdaANzNFXEMHuhY",
  "key14": "2mfForfCJ9SpE9G8wfnm8EuTmYWQHcSEsAT8kSY2W8hdBvnySz4VYZGizRhuhNbE24TUNEvmkyB5PYZLMt1pvyRe",
  "key15": "28GwRYMavpXoMhFCoHeFV3b9G6qZqn81ctVKMJBN1igAdHTFs8qBoHWrjcZYuZ9ic3x6xPGPMA9Q2yGXbrAfCd9f",
  "key16": "xqQgB4uzHEgeNJiXNuEtyCo7CYsJmjEx6qNUYG2MmnANRjMTwybU7V6SKsaT5LhdmRky4wVQcFLehHwi7vaHvdk",
  "key17": "5V5Bh5s1gvqTVe3fRFsZeiJnXGLbGSif8wKFDzHiMVgHxtXX96cFSS6NitHmfXyyin8u83DBBxwyHn5Ws6XU9RbS",
  "key18": "2yCQrDev53iLqLi1SrMQZ3WmuR4VgQYPAjdzT1SyL8jWLZTRG5XZpysVin5G2AYwy3rjkpinBBXJT4t9muyYL3X",
  "key19": "5hdhXNriEpomyfnCp9noxFBfouQW3xgUPPp7TBWxSTqRk3kYQxY1JzEXs43u8pcavgJBve6781JGDfJcNALfJy9Y",
  "key20": "3wPhZUbMtny9Hx4CMoQvLMLzQhH7C6aaGQ9p4YFYrrTsksJtk6WYWMZAhJ488wPA7caEDiUHhwU2YhpF78NGqf7M",
  "key21": "5eTba3BcwSyBkiijgpZCG6U2VRiuWNXnBZxYEMRtqpv5XNWPP5UDUzFR2CGwRYhHHysrREmV38L48XBi6JRbA1xF",
  "key22": "3gTmvc73uCCKkQ93zhfcx3AwuiwiVhQ3Y2dxmZZNz65Dpd759jyyCy7nCNqeshFckodsgpz2EDgJ3mZd7QwTNtRt",
  "key23": "kbdcgUt3r71Cxx2uRDuL6n5FKxbJXpr2rv4LCwk5MA9rhDs9EQzXxxUoXouLfhB83RN2XoQmqBqXALqcGBzMCEe",
  "key24": "28nBNiuqGujVCn14g1NR6ye97ySSjk7M9SZPHvina94FTMP4zaYStNamgQ9dv3NJeLTCuQrBgTh4u28KvCGevFE3",
  "key25": "fQgTTxp3ji4XDziXbb9SS2oHZM5R3719A1xsc7FV9LYrFGwFYZtcLj8y7FZUpBBFkngCTpAeBueopHbLzWr7MYg",
  "key26": "AAFcJ9u8Z7x74xdeKjUmEaHLUHM6dwcnLUfDmoaXVznVoB3oDj9H8HNXT95mFosL7Eir9qMckvp13ytQPxRSM6f",
  "key27": "3ci1yPMdx2anShh5mBGzMNg8gNd4nR2Bc3bR8v1bVsvDmJYrZcfseGSDX3dsQKfCG76pC6kkxU7kvX15NwPJmQB9",
  "key28": "473jnhXduXH4b6EzEtYkEJTQsTPMdArhAPyySAd83DrY6Prqc1V5QMch3fKkhLc27oLdfJx5KF6cKfBVp9odveY1",
  "key29": "24Z3R7rgZjz6RF3Pd1XNGcRV4jkvcjqLFRDeTZTqhmubj6jhdg91F46xn83H3iimihDDZcLgwqHX99DY5pVxZipj",
  "key30": "3Zi1kKJBFm7sBjFm2i1fmwrVGfkdP4aGNav57q5cyyzrBWHQXZuMwh1hL39Yyep1CWjAhYBHQNDd7Dvu24vfQ4vF",
  "key31": "2ghNe7yHktJXjppFMvT9opuPQH4FVwrd2ikgHWhLpBD6NKLXzGJ36oqWtXRN15LNBNPMpaKRagN7SPZc8S4S1JNF",
  "key32": "4cayQNzz1Hv4bGnMLbHwxRHjNesVYzc6FEjNJ6tvbscdnS4wk6NqsHGpxc6mSbppQKTqShVwrN1jCuWSjfhs7qHv"
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
