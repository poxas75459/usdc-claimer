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
    "3DgTh9nDnAHwCh8crAGn5HD8HLj1QYpC81oUVh4jnZ825hAWLquct7wL8Nm9Wx7GZYA58HbuUnhseR5yMVp4eK3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m9Kch7uEhyCqDJD5dVrfrrcGb885tKvVDChhUN9fxceL3eoytmfv21rf55LYhPRScZpkC1kZyrL1g7XszeqrFAL",
  "key1": "49R1uTrRhBnD4eZpYkvKsknm128AxF47dy6HDrsKxgLX5fT6hnQ4bkx6ZVQtZX8vGoekYX7LjpnGbgQKQhyggGUP",
  "key2": "1xkCCJicLFBzomB2p6LSgRMS7ngkN24UVB6BGZKt8SR3oZWUwEFZZLxvpgv1YE4tKoL2oxryGFZhAPB1WHcEhLy",
  "key3": "4xR3Z8hmEZvRs6FKZpWiijwfayQMhydaySGg6pd51kQU2frZWBTwoMDNNzrS4Pa99bwPXzskWMR8xQ93NCzvMiTf",
  "key4": "3oA8rxXG4tMm7CFA3r2m1grmBxVo5NXNg6tea3iXs6PZGBXtc1fNgJXEbTNXxxqBEmoRrMZTGjn1xhdsE4vqddQz",
  "key5": "3BfiZ38B2T8jrYsbbYxDxpvm4AadVFKFdxV3sqREYwQUVKrg4SabA8GZHqxKWYkJAXew3TdGsk43Y7chJhdqKDvX",
  "key6": "5dCrBveBzwLb83CYKZ9KUQfKMndfRhjYe5X2kLxB1Qb14okSQLeDmY5jAetC5XKVfg4rVXxQdBUWfKzsEh9Q9eQX",
  "key7": "2XeQQD5PExq77un9EQQoLZWfy7wyAfWjUq2KjSUNuaUnovcPvf3awgDUkiSeB2unabkLSDxkR2BNbgCreyPU3Gwx",
  "key8": "485F4xbgATVoHWoNf4rCixqG5uMSFjJgr67rTx3VYjoQvnLckCi3xGQ6RJQQiXDVRcsihMGMHJCCW9MEC7pAPQUS",
  "key9": "223fGT7kVVCfAJHghdYnnjuURf9s31vNYeFJXP73U57rrfzWbcBcmsAW7W6Go635K8RhrArVkhZw6jMjLw7QLhrM",
  "key10": "2rnPVxNc2NJ14EjRmKcbxLmUWZCgDxD6uLELMp15FwqTDzMicn6oqLiKDcsqjAYAeJR88k1p3AmBe7UxWyqRM69Y",
  "key11": "3BnD3ziSDpcHyMVvB2abQdrKto9ntnYxE4PAKuSJKcK8j9cHgzAEFPMvwqJjXQ6dmVWNyFbx5uQ3zF7YJAhzMMAQ",
  "key12": "2fcGjBTDuBjNk28qtoSBwvbzSNSP6HS8hnEHLA8VibdahdRwNx8LDBtkDAxeTtznWMQpR1tAEd7VUDpo3N3ejPjG",
  "key13": "58ok6wqac52rWocHDZo5HUhUso5cvKkWx8CfBCEJJ6dw57XAbWQyNzmexwzFPUwjaiRrxzCaAiCJpgHBTLTXWTB",
  "key14": "4wSoiKFLAEyiPkWCovYgFqvaxKZ1fKus9tACHUqVK3bXihkJe7HLvSdgSFNGogrvAvx3g9GMZ1vpGZmVsDugRHcu",
  "key15": "3LwbthoacxXVvUhbt7e1hQ6P8WQzZrVYVKTytc36S2wfU6KhRYMNmgUxvcpGUZibPFNDZ9ENTksPMvgH6w3w7SPV",
  "key16": "5fe4cHs2V6dLtFFM2jeZcnjmX5CFPyi4hP6kBVrqKTCuFruRnfz2Rudi13JgRXThV9TjcacFMyUQKjXJwjwE7WkF",
  "key17": "9Zv71CtyYVgJn7PqJoqDPnyGn3jm19XuY4sFXXDB5WSwF7rvfGmZhzPYs1HPbpmenzsa2NwgYMJhTFnU9z5onf4",
  "key18": "5HmfCgngChvUHzk1uZFbepDHA4bEc9XKZmjuAH1ScMXC5YS9rivefy5EmgyB7S1HPbqAAtLK49wFToiiL9PiNiVN",
  "key19": "21NMdw94zDi5SmSXE43ybbnjDRA1WzDiwReLgWryshA2hAhLcDSPPtSqxyUzCbQUG4feu75SkDzAyYuVhbguzTEJ",
  "key20": "38WC4DM2QzdMeBozrCevG4HbkzcKyrEo2PgBN7xowYqGYWn83u5osXw9M4Zg3dwzqjuyE9wPkYeSZztrwr1P7UMc",
  "key21": "JAKpofR4BXYNHZNkdtLAuixZTKhUA8EVMVwK8EtGUHPbgP6eVL1QmcxRnQ2rR8m2yFLatmfe5A6aYsqctmTYBDT",
  "key22": "gxMpQDqRcPNKecmSKVCH1QKsBZ5jBj8UAVtr49CFPvmSubnxFkf8wpJDALDc53W5gdf7bJoSrGqA5ENPmmQMSnt",
  "key23": "2K5anpzwpGkZYkawGCHZei9rGJXBj6Dm8EiyyU1RbDFjWc817thE5ebBurxn5PRWVFXGo5tmkGZDMam7782YPREH",
  "key24": "2qvtRYiPGBdGr3Scx4HVXwdWky1RMMzQwG6jYUTBiEczUj5aorE8y6pdwbM476xZWtsXci8xPw7a76kzUCVDnZQ5",
  "key25": "4U54mXJP28QWJn78TdVrnTyns35szJS9TW8rq1JpRJBAhiUKz3ssAUDaqtMczp1KyeMVY5iM9JpZcNeMFmERzvGK",
  "key26": "UN5HczeDyMRRUHT9m2tkzvVTq3W4RsT4wwsnnDcfYMAGkAnCFhhxjRXFHFSNpShWGSVSi4v25dmUL8ZCf5juGyz"
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
