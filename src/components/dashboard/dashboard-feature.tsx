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
    "4jBrpnS8589ELFViHkvBBKj4Z7YawFBucvqS4obFmF31DrQ2BiLgde6hgUNBdje723cojfMWfqyoJjmR4TLHNYRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nE6J3n8irAWeP3CtK6XU82keMEaMjuLwe8QXPhcpMhgKnZU3ES4g8S9Du15tM5aypYkr4P23SqCNfnvZNfiCPgo",
  "key1": "5Fyrh6fyP4SkLyEa6k3pcg7rdR7CAXsFMQty6DmQu61cV97Yb7poj8G7qHMaRf18uJMTquVxnjBLGkmeh3jth1hv",
  "key2": "5uEjG4Z7PkrERDDESFqRSdmWAnYha6K2L3UtB6Mao3V91zgXuiGRK7MLifL7jU2x4tjrThQqd5e7pFwGYrzwFHGV",
  "key3": "3FKYZEk361hd2NJdPYpoeKu5e6YEZ5M7dUc3wuGEBkHPpPLteUyWkfN85kaUc22rq7Sgpwxygrwj7HrVtPbfG5b1",
  "key4": "2Z17eoMQTJxW5AQ15KHKHK9HyhvvWsyLgr4D9FvPF5RHaNoFq7jcsJhgNcWQPFXoogCwGjMKMfk9JWHfKUmmKXoc",
  "key5": "5QnT1q5Np6i2Hg4iMHKMXbG2iAuUC8yXdAUZ3bG1kC56NnUoAJi53eV49nHwULBNJbnMbCao1fxF3H3d4nMWEMw6",
  "key6": "4FoZVHPPKHk5NY9AuvKTdxd4CSqJrqkKaqNkp84VbHJERtz4AiUwXE5ooDFgj2bNyiDik3kukQYLXFLWgadgpRPX",
  "key7": "4NbS9CB3WhYfu8CidVMRWpCyL5shWHAEjht5tsWNLSsBSm5PbBQwYccM5AbAG37UJye9rLDB93vRR9bmNNw1ekT1",
  "key8": "42r2ZNGbPHMqrNoLjRymyGhafPj5TyQ27UnUoNv6PSas96Cf5CmAD5rEaghsVeeoQQt17MHD5F1j4UzVoWxs59Vk",
  "key9": "4cgYcGR9spi3XQcKbFnwE4GbXW9YgTgVvT8JxB9BcG98FZi6WCMUgAKa4BKL31qTJCUJqpW6qBK7aWXQ7DKg32Bb",
  "key10": "4PmyvqJu1f7sPo8vzAzwsHBWeRsWzfeZVcVrCQGJaEqTg3voh61qDnNT1dHqVFGiipS9yKoNocnnKtvW1JqY8yzf",
  "key11": "5HfRQgfG2uiUmRW2SYwb2jMwduwJTEPDLsRui3aRc6n9PayxCx66XTgnY3ka1HJpS3sncRFqH6D9S41RqGXiRvCe",
  "key12": "gY1iaVUVFkqxzuTz5KF494Q4NNEtFnJLFvhDYUGjFs2sCZfPTsFJjDs98GPQf6uq5V6QwhVgKfEgSxWggdy4pAV",
  "key13": "4hsb3byJaUtiDMvXXBqkCTHcZn1NKbRbWHRjFeHyZdAfadu6gChFkUTMnGSfiA65BGyrnZm4vPmJYX71cPSJMmDV",
  "key14": "3LbNeQSMLF5uSp7RsZ2ZXfZ9PbRRwgDyzjy8Cabkhsa5rbs9T9ZRqiBnSqPwTf58dJwbTQt71cXEYk5xPHUUTswN",
  "key15": "3scPLKK98m1AypFQPDU2FHgfG9y8nLhLXAB3Kk8rumt3o3uLVHxgnvX8JEXbdFh3N7w558bNwhj382B2ck1tt7kt",
  "key16": "41uMKumYYWKFsUrNWoW98QvoTJEZ37EzYnbJcNMhEt1KM7anY2dnfg2f1GchQDC82Gk4Br2vL86knMaYF91gexn6",
  "key17": "Xn9Vnusr14az35X8tG1jCLmgCF8nuxc335KDqqT4vmnCjvde79TzcBcf3gryXysyHjbi4FgVPhBw2vXuPVp5oQQ",
  "key18": "2jDa7DkomaKy4aNhJeWDwznuHSRojCMyvYckrTcq3WCZUVRo57TXqQMDWYEFoUWxM9eHQEMmcZChu63pgoTnqbp8",
  "key19": "2qAuGQdWf4PJDNhreWJ8gLeRtgUKPWGcUrVEvTMSd2yZTV89Fx27E1vLttgvaJTxQprG3Gj4CbjNrn27ycpVAALE",
  "key20": "3ZvFfK9Xp5vdJsqofrzvt3Gj8FtHrGH5d65AaUfPHZjV45RzYW7WK5ohV6AN4dASyXr67KzEe1KdMwikK1qfMuK6",
  "key21": "UmtGGS6Lgx2XNPa9tHf4ovysEqAxnXuiKLekg5zhayAoWftjEPoGcjRQ7Efr52z4LGDkrjcigogmKE3UPU6SGeg",
  "key22": "3YHsaku2cJps3usATfS3jZrU5ATKALfyMFCtMb4Mhc9QXAGG9x8oJsosQEHU7AzxEmXGTho23M9i4bViYoZhVPyU",
  "key23": "4k7PYPFw6hmQ8RYqUxZLcV6Svdne4eLdyfx3oUqAdfBoMvuZYrWgxsmdksSurw85idewZ2uXRVAdUHwpXvnubPYZ",
  "key24": "23wg6hC59tFsQ45cmTdSZJqdmQFWLVzP82TBHEkG6gWP5he9a7a8haUhr48riReJoCpf8TSWFpDHUqN792EwjVqh",
  "key25": "3GxTnm8BegGdCySprKsLpgksH9vVP53rW131dUU2BgC2Sk7mpszDukujYMdHqmXqLhttBitZeyKrehZXLxBL4FsZ",
  "key26": "5jGPjhargaA9SpfMgPXJh3TFeZdqDr48844GPEcioxGmMUJzkwVcGa9ZaF7n3UADvQe2Xn7jvPcpbTsyfXUAFJf5",
  "key27": "4L87B9hLqDkuN1tQe2d6W18CmBkhK9Pz9XVBw4yjfWWBpGdPZ9rwizNjjQVVTUVQZxXVnhv75ZcfhWREHaGny2ix",
  "key28": "5CxD6XrViitMVwNcJgFat8SByo33zw857XqB3pmsAr4nu1N9AzakePq7mWHt5uokLUkrsYNhS4yErh7KortzpASk",
  "key29": "2Fh8HkdM6ysNRr4RW34xovhrsHvWBPdu43Jhp5h2PDQYk93XyQqRdc8agBbQzDac9U2AvvrVx9atzcbjuodBGYiC"
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
