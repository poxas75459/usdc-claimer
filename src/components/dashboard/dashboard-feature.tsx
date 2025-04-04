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
    "SmgnuDh5JJitRLsNeF1Fetx7jeEx7Gyxw2YqZR3gvCkT1wKsk5bi3CZ8zVgqGPp33nYzGJAK1DcEJ3sAYLKX5hP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cJmqH9YutsumvThYiZanETu5k84SCEfgcpY4eot8cURmygQBbkFoKGM7JrqV48JHnT1d6pJsdZkVmi15H9NcwZf",
  "key1": "5XCsUm59ZrQ5Vwk95vvCVDcTCektMyfqsauNcjFj41LNZ1YWK7KpaqWpBbngPjZbM5T559nntzZKZo9JGT11pRNa",
  "key2": "3ago3bbg5r3j6jGzvJjBBiD2AxZ6HRiZUBtRzYNBs2zGNB8oPWJJ17htBpYVZ1ApxxxzkRLfNfZTW4SQ25NqZr27",
  "key3": "2Yg3Dp7tCb99FyhcdmeJUuFW2nRk5BJpEXaCkfGVpUYTsxR6VhP278g7nE2Fg6XMjJjK8vvA9ij572ZuN2jhxPnK",
  "key4": "uw5QrBic6zZuTagkn7nXV4gaEWzkx5r1suGq1hV7zq4EvnJYgYKD1evvbA98vTzkGr1p73NzgMHLS2o5i32gVzw",
  "key5": "5SGktDirh6g1nUE9FqZ4HGPMzHo6z116hg1YWARcxWWtKvF2obuKw1Zf2MX1cFqaXGr1hXj7Fv8hjVfjoQK4vCRW",
  "key6": "27TQgJfEQ7WnCsbPzhoPN9Usy5ntHhT3ahSns9TanzvgDNLQK8bjADkGCKk7b3zCRCA6m6816EjyuSjJdmwuNkHz",
  "key7": "5itVEt4UrzZ4gB7fQPxQh3ro54QYZx9UHpy3T6WoFMY52jPA9Xb6cfUjB7JWUx4hTtsu1mpuguP1bWWCEmLLhqLc",
  "key8": "WmrFVs9r5S6cKyG9RufwZoPs7xD3ihGSz9dHv4hQspuhtY7xz46iDrfDVKexY9ypJ8R7jpB5f4S1zeq9qbBWSUe",
  "key9": "3Fwd5W46pP2iMCeXYHrPwSDmm7EtaLtSNVByCwMBAqPGLLRonpU9spyEXP1az7SVj9MyjHe5sGSReTW4fU1hudBb",
  "key10": "27VjDofzWeH4V9j5MUNbxg8mWcnEqCdXWKzNEEKRvu1Y43PeseXmF6feYAT2eeq6zN5iBB8DPCF9Qt1oTVry89rT",
  "key11": "Cm9Xf8wy6ibSKZqAG4WMocvNt9BWfdeEzWTfzRP6bcu5bxCKJ8qzEEwkxxpBbWuuSdbCFNR4UN8qN1sV4NtEYxG",
  "key12": "5fqW2hc6QGNGu7tfo5Dvsry8JBeMYdLrEtq5TRCXAy6sSVetcJsKKm4AVomCuuMAASLq3z3yihV9ooFKAE9TTEME",
  "key13": "4m3evjxGtZaCQd9xEJiBvhdxVqmsaGyTgCz4xkuTQ4xSiQRU28svdApBBBQ4ayXTLSdjmbWtU154UB5b45HxJ7k9",
  "key14": "ckcUVe2FcrgRWvgJAQuY9WdgtvqikyKqDpstvbGxbrLqDZ6bKgA2bJhAS8T75SjfFW1cnecoofwd17v7euJGsfA",
  "key15": "y936MFwGsFVRDBAjrPwNYMGmPNaYkNTWDLjwubEWhe9HeL6CZFZpMFS9Qcz3xJsMVxo5q9MN97hAHZp71HPh8Mo",
  "key16": "FApuoTVmg2Rqi4ZMeanVN7rg8wN2MfKFfZ4HgRjmZkvDeVqnZ3ZVqH2isqQyCdVx5GDCaNQZ8ofevA3HyGnJ2AS",
  "key17": "5cbsizEQxnF4QxwTQqJdpo5m5Qn3n6nuzs9L7tRPtknsepj7oRMV4p5JbkBzjBS8gzSYvFAWF5XAmRWr7FXdpeXt",
  "key18": "2dPRyVK2fPvF1wHSoku268k6uvjpbP3y8No4nArE9cPrmdBjF58hAS6wwnPDoUGL3LQZhGCrQrnxumsFWumhZbrr",
  "key19": "3LBcy8t2q7zrqavztGkns1FqE3dRURfxw2rK5Tgskm7ebD2ZRet156UKYNWBz9NMGb1bTxScs4yD3ueU8V7wdRB6",
  "key20": "3HZftbCfc2F8TKdshMPEFYYtcZJQyKCPRW6tBYTDHsPZoWcEttrnck2KzTEEMuHv2zfvov2AnMYdahdeNgs72qHo",
  "key21": "374Rgo3JpD3QrY7jAiRpCDhXJoKnq69sWYPQmVqZzugYMoZKQNM6QXRRMiJVXXnaBwWT4AkpbCW65sWoMVeRxqt6",
  "key22": "4bWMcWp38Ku3EkDRpMLZ9gxU1xPycfg2Dj2YS495sAVL6raHXiTkx6JZu8uyTZkyDAJ78fqZeWn3U7CYDiGMVJ4L",
  "key23": "2ApAsJVFqNL5ahmiiBnjRwVzQjjd5Szxva2poUqqydgfTwnuqeiL3eXzi3PGhkh5r5TxcJGNXgfaCAg9CFrkD9vh",
  "key24": "cLECh4HDuWtk7WEEHBHo3mQizfTR6szEGagMQDB74er5C9t6ZuUeBLt9GRSfobSZbSFzRZfWwMt5mYZG8Jdz93c",
  "key25": "2r3Rk8BXdgEUirpFwQHn4ZhZYrnnLtihDQtAg2zqWqDVNbP639eHShcjXT3vY3qYRZ9EYKNkEYzTnccGdYpSHDV9"
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
