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
    "LUYnDvLNEhPMfHNNkdb67Kdx4qBKGVJnzwoKqzzoMKFAH2MBR94KJX4Cejri7XoL5ECM5PmkiZN5T2hVsv3xbyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iLkX8gh4BhVTXWrT52ENk8eYqoiYg4JUofCF1VPXkCZo1wCr4sNLq5EMYRqPLKnemUrgLszJ5oRmEF3JepTP2Dm",
  "key1": "3XqkfsQvMopH49HAxefjuuBAkxZWDoF8NHdvNqTLKdLiXesayrCCLRrDbNRqLnxa2ciP3wcdnQPUpyw7pW6WMnKX",
  "key2": "5gvfc92A9V7n5LaMhqkJrtE2vMNwFbhmsZ478v2QCqCq3Gr9NCtJaKGRGi98CYrQKVs5MxY9t3JYrLCKudEtBE5m",
  "key3": "3dJHXkydZ6d53QSHXGQzumpEq6bCgoDuViMFzyjqpHvN2DKHwosAsgkywzTiEwxY1nzXEuF26uffUPjgRoys1Xcv",
  "key4": "5j3vWWfMxMAKY8CwNgJkZTRTVSsQtrfmuzdRGRzSaC9S5GhADvdXNvTjuB29zGWvsfuBxS5RjKdbTeBQtHGSaA9b",
  "key5": "3iRpCTjeyQRBC9dozGHZQcHt3xftKnTsbFoYpLNFMnRnvKgnpHxGbirdgCSypv5WaHasooDDF4viUJovwXGcBktA",
  "key6": "2W5LNKdMJbDnvLRMd7z1nXqfWiXvyVvPzgG7D55N1vctNtRnFtScPjeX1wVrmqGnFJnNyQNpD8CX2PjWcTWS6W89",
  "key7": "55XhZJNNQZirFgjqmZcSeVtKABz3fnf4kHrFew6nRrtbsrt6JmGzEtTYNM2mjsUVCtZ2bKh9mohpocWDvitNR96Q",
  "key8": "5MiYRwHnqfWDvwCgjN5yZ8SQUTFpNQjkL318yB5ZTeYwQAP8tSECgWfJJMHQ35wrA3HBCYSAThHZFXn4PfPux1eh",
  "key9": "g9xLS2guprv6mXTVS9Tevwv588asiFunioopMtwL261fbPeQgfCLmpmChpggCkhSTDczmerLLfXFK5szEtbLJqW",
  "key10": "5pgJ1PZvYSdh9PeXUvLXa9jycru63XnK22JLRStfbFsAifUCM1vin3FxH1y8Gy11FaBveLALo9VCYZd4P6oV4Lbr",
  "key11": "9ft3rXqfvmeNxCHdoFL3ve5EKtAFWKNFNHKJh529AE4PET48bCk2NCNqQJe18jnFX8hhzMEtLiyG1LCXNXFhvbt",
  "key12": "5YXiZbg9MnuCJr2QZ9PjokgdXzvtMQd4893deV7p44AWpsEzjaV2QjK7bEsPMtQNEVAVeHxkLcaMoD1DmJo2sSaW",
  "key13": "2YH2532R832oSd6w5rzaL84az4kSw1E4BB4HFPayNwbqddh2jpitLuvaG6271qYocqbuW2LzSBisxHehcQNGfWZC",
  "key14": "4yCP2sbqNBf5Z3VyzfKFnyU4fFFBCBMEzdJCA92WqSj9yt58Panza4ty97xi1a4Z7CQnxazxr36FNhgt1UoACAMU",
  "key15": "3uu2EvvWBoN8LdAKJdGRhF8b79Bng2VP3XfN58oNXyyqidwz9sp87Rn4x6RwfsDsTkDxjKyEHc3PZfbZ3FAWwFg9",
  "key16": "2Tvc6hdC81AKBFSHzcG9Xtu5bCFQj69tqtzPphgpBL6TGaEoH4yZ7CEVpAphSFpjczfmqfBF3Ze6pppVQr2wyCPQ",
  "key17": "rR1j6mqBkuvouk8qNL8H2tGhned7kcpwrTuvdk8kMqqS6yKSgjDft9zEGgvSmCwqr1EdWrCjA8NsKC1MjdH4usS",
  "key18": "5Ejq2kwr3qaCvwSXDWgZMxjmDxJfHkchMFr5AqPb9xnodN6WknCn61pdb5wVz815cPPofRK55tUAi54p4cNqrwuA",
  "key19": "4aNyzsC47HwxuWyvz5sjRzfThQXYTLEPb6S4a81USRb7GmfUfoYMKGPyb1fPCqNJpc3YEsBGKz9M15LBmByNVYsc",
  "key20": "4REWuZzSzdePWWnYV469Qhd9sAfLuftuCyjKxN1jsb7xWBcwBHMH9sUZ9AZ89gd1g5Msg3vag9jBzbwS3cFr6ZnH",
  "key21": "3eGvyAe2PMq7LyZ3Y8EA8ZjvAm6t3WoZENrH4uQpgFpDbYY49ax8KwKpsMJ5UZwXHwdjS3oHwFXEGSt84ji1v4SU",
  "key22": "4J875Zixqr32qihcXLR5fHrP5HaAmLYNY7BCRxbaG18zNg7zp7D9nDWH9iV2pi1yxGuZGU6NQqgsfG5zsdpYxMFk",
  "key23": "4zQKtWycLWvKPDdzq3mpxUr8V1EDo8hLwX2k1AYY1rXq4adngD4ixrbQuPc69F2MNqrzyZDCvp6Hs3Pn7zG4bm4q",
  "key24": "2oqjvRDF8SbRw8Jv8qkzPefCmDbBhWhfohSQEULYzNGGeJ1dG5fr1f4HkZy665BU66YetJP94ZuZNhKCyenAUopN"
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
