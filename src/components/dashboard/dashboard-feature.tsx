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
    "2sVHiUh48yDADtqybXxUW1VP2v1kYqx5ueRDDREDkQHmqujWR2E1YTshb3oKoaSDzuAsMHxqHfqefDJ6GUeCtAL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UtYyY1JrpgxoKmJ7ZpFJmmoKs2QgDtmaFoL9nTXyyHWc5rYVvh34b3qkXYTbudqZtmrwZDYJRWjgsPSFDbQvpRm",
  "key1": "2iGtPPkXEMzuWgM2rug6MJoRpVfvGqsiHDLdgeDfv4rLXLk4r7JdChWfQVAZpJ9zwX7ZCySNu8k2FC2bKFoEBfCa",
  "key2": "5htka3t3tU3CAR7ve4AVw5cJWCNg9k5vfGQFNTyo4MEwjiCWa2Tjh1a9jr41tnLGVXgRzNrVZjaiFA22j7XWGrgc",
  "key3": "64Mdc32i9HdcgZxz9ZnvmQseaJsL3sxb3NM1JSj6bXfqvVWcDrEr3jDFPDU8ooAP63wAv931Nr4NMi9XQwRswQso",
  "key4": "48uWx6qxXxe4VKMgh6zJJh4msfo36M6gCi1qi7LUitvttDcVGrY9MonCLKTeAZLhkCSEr2GP5yX2PWjHQqyQYGfj",
  "key5": "5E35UF66hBFaVW2uv94uHdiBrjQcvKzfAzn7qUamfgcBcdDX3q7Nas5JqQUWwmVkY1sB5JzHNqaEpYFQNmgLVc65",
  "key6": "2o3sZFytPpsqnnyKqffw8iX12NA2zAdxaCo6o674WtpZ6L9wjYTcjKdpP77mUhzkmonxvqpVmnFJ9RS5D2fyj8LK",
  "key7": "55mj8eH3M24gzRnffCCv3JuhfhYuv2Hxit8zg4U8hFnCjSZsad4rs8jsa7FhYsZ6r9YtmQ6PSrYLda3PpcCRUXkM",
  "key8": "2HoyB4RcznJ5TvF8v32mauozzJdtBWSgBQcS8T6XhvXTFtYXynmyTqEuT6rWpRkMkardJFEURN872w1B1UKrCAZe",
  "key9": "DVEDrJGEufumZA6jj723DGXNJVzDZ5HKkZgpHKJzNQCYW9nfYn2QPe7sUHET85dHCUETJ4SUZzpJNSuvn7tVV2F",
  "key10": "4X5MGkUzydurDurgZ8aiwmKuPNfRRtfSNmWHyc4M8uCPiWYWQPQRb7wRXkMbrPXdvymdWqoCxXjkpV4x9LxcERAq",
  "key11": "4UmBVJHU4wVbCbB5MjSmMRpcXGBu25e8F6EKWoWcWqbBGeS9nntuqf9Z65hGkxRHzRgvMKzYZberzm3W7Puc6vt7",
  "key12": "5wANJE3bJJQbEX5E2BH3gk5bRZ5juA6mF8hXikXH8NH3L6RGzmE6RNdBYwogMXXNN11JL95gujMkdUjMuuT533LS",
  "key13": "PUS1XXKWQFcf9zxkjrkzF67mJwNArZqTXJ4LbsV7aLDzxaUWYNeBB57mrCohFs8g8XNcFQmntEeSkdZ9pBTnALH",
  "key14": "5DwNvAKt9ghQJwsoZPgDArE2N9viY6jnsaNzR95erMMGgE4egjFBuM2u8CuXknxSYjcTaJ3h81EtzEAzuydmZewE",
  "key15": "2kUgFMU3eq2fMEFHfYo3QRkWT2NfFASr1wLT6jdVd6ANj35VxSqJ4k33R7qhxjg9fwEn3v86kTuPuYp5WMKy822g",
  "key16": "52ycwtseMCvGmhWUCyrnVyo4me4avwCc8S9E58JRyZYySyVABgVm479ehd7LgigHusxzgzzHu92gwVoy3H3t9iWt",
  "key17": "3xsgcyche3RcyZwZFz729YTVEZ9cNd2KrRJJ6LmE7DrZFqoBf2EhoBouMJRha84kEaZAMXofML3bfMeEw58YSwXP",
  "key18": "4RKyhaW5WqVqPr1WfLZHwsfT1UBXxY535TwzLXezNzhEbkLiL1SHkBcLryWpG1SamgdGk56fXQKZvfivXmXJeWqy",
  "key19": "4azL1gsztaKHkpFwzJRjjgvh84yMtCpkRMF1jspo6xSF7kYny7sQEwtyCNbiko8xJDFWkqLp2zQhQo31E5NxR7vK",
  "key20": "4mLMajn7TYKHnCAjs1f69zm2hdBUGDoL1bd2az7emAVNb9LSwqizzd8GJzb6hytrWG8ZoAwQMdbTtpVAphSYvRLV",
  "key21": "5Zvz2ojNAHy729nGWaCJrB9Qox2zMPTGzetFGHCAyv8uBLXiSzXffNe2Rp6Z7C61qgYCgpgW8rEivbz6h3gjzUiw",
  "key22": "5T2ULtP9GYrP69u3hA7suRFcQc6VbZqLnNzMRd46NjJkdWQhKYLfJrJ32aTMvoHBFVQDjvgRpTnCzBPWeTaTtxdw",
  "key23": "4LzDsRHkXV1RcdVePi4ZhUvUa9mjLmBwo2LgVQAgPxu52bf9Mx2hkutmwac1c1REXoEwpaqZjUJ8EP7QAPaQeDJ2",
  "key24": "4ukuwtoan7EArC1dYnbRcJ7N37DF15xfUR4yPQncXZBosHBE3C8f5NQEN8V9514QBdTBnwP4adyNMqJZz3pMG44G",
  "key25": "v2Vnr598EzCU8yBpsF2QCpYtBAsqsEnWsQQS75zgifUdkQ3C5J3zpBNKV9pqnmbRkY8j3USCTbGacJfaMo5r1Sp",
  "key26": "X9nVFnPmg18LwGgSw8BW6NrJZf6fXjbb7cJi2AB7wBf51jChdxfUZHbFkoWGQd3efU95XH8mmGSpMe2TcgBRePs",
  "key27": "3kmSbWT2R3dmR4f1q7ZekJmhcVcRAnAUh4mJGBC66yCZAMmMUbVqLkp6RaVv5x7C9PoeAkPoSRMxBpzPPwmBfeeL",
  "key28": "3BNzDL6Uap4xsc4xv4dpvi5gHJX6nNS1enTVWxxnZwe4dKiARbna9wBgT2LtoDWHBELZicCbQxJLBga7Kok1DjRM",
  "key29": "5QFqy6j15mpUQZvTmsKw5eixQcuR9M9VNBHci4ny2ADi87M8LDK1hHmPpPMWtj25Ua53rxw65An2bUGGSfd1mVGy",
  "key30": "4G6wgx9c4waNtVWfFhFCNBBgq8NbUjifynjg3GWJMJs36uxBVcyzByKFPftJ1FcPw2BAN6TzoVcL8DEf5PCRqaaG",
  "key31": "HWL1sBcoaFhcRMb6y7wfSKcMsgsHXKN8mQnpvswZWQK67p9ftLaPLTtCQzduNUkZ8cL4ZJaJhgiKFiUBs4r1ygp"
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
