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
    "4T378B9ziRdG7qChY2BUFRfzJ1eA8QNNssMcx9DXxWmezfrfromNgyEKRfqnKBXm4LCn1fXJ8BhtTx9pJF862rLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51EaWi2NgK35enpW9h8V8jHKJ3VbAU8xkGj3q7jzbfwJoe8ZRfQik9ThdMEK9QySwz1wdSrsstAVc1C8zLUbfs63",
  "key1": "47h7w2fiEZXE3Lm3UNzRwCqZjmmYjzVz7ovTmhjCRVvHddHDWku8wqswTTizDxG441ytAYkSHwk89gDSvMjsEmVw",
  "key2": "3uphoP28SPoexupKokNJE861syPGQ6uzeGx2PQhmMKQRP9iCxZrMn2daLgF9vqJqToUEgrrRcDn5LXZRAYykzEhk",
  "key3": "2f7rzRXFBy8MAcUyE7jfov16NKTLUwqfEJoiPTxgNAwLfXaHQKjjLULJfdNECyLvd1aqMgqxtufEaBYa6cEfREx7",
  "key4": "4Po4F8HSJ2huMQ9GPytwfirus4wbfheW9kdetChCuaZ8czCg92fXAYx5kA7YHntz6jCWMQ9KNC3AxXbpNfVJKFsK",
  "key5": "mSBEXnAQGDsTzMBbsgWR37XrPgPBwswi1aGYpYiRspHyaLmHYmUTMRoVHEftWjrUNFkoc9Rax3R2pxtXtBPD6a1",
  "key6": "53M8FhXL68gw4GWZpEYRUZsQUB9JNujycGAVdidPsGMtVSaW2q1LBr5nSZiuHKUoY3MoNwpsWg8YDxzCkHdK3C7d",
  "key7": "sKqGGUtiUVGiQvmRat3vJ7aAa51NjeNP2zXM3hzr3QwbfJYMGbtVJzYLHMsiffTVXTeTjg6m5iAjWAEJmPdYpD5",
  "key8": "124G3a2dDC8zzb3oMMPEToU4Fhk2wTZvXenAzYp46hheLtL6tQtLsjajQpCu4k4zYy2LoFMZ5HjZAnkCnMMfHQwb",
  "key9": "3obT8EuE6DEWHr1YE7UZiNQ51QmomMvkYZm7peXbBaXKzv4QFE6RDYSBHBDa1wgEgE1kwkFm4c1efBSP2CSyN5yE",
  "key10": "kjukJmH2yvbP4n1wSFE2SDAypX5ZtrExXRxKgRhXmZqzTz2FxMNT7NHmbcsVG9H2W7CPsUw9BBUxHgwgMAUhzdW",
  "key11": "5h55ma5fHz3Bm9xjwxUSri2CrMGiTdEgiaC6XkeEK3GPCv5uZRfbpA4YdPUuAW9C1mCH4y9yVSCCcpQtVSQBm5Zb",
  "key12": "4WQPoMDTp2q6ACEgjraNA5yp23XnjjX5HGjTxCQ74GVRnP71vJVHZT8oDXCeXkV35FZxHVs6obKZ2kPj8D99NfY6",
  "key13": "4jDR5U8xCoNKShCWAH9SjBBt6iESXZYvEFvcFTN6tSV6u9zphjUs6esP6TQgfycEK3RPS86HM2juSwJtGqLTehGS",
  "key14": "4ehnvj6kHhxdmFVW8w1aMgAc11KPq2UcG1wJJ6NceU4LKSvUMKrkYinC4MFf9RU8AxSSnnb1UC65Ju4x1CvFbfGz",
  "key15": "kLp738bSvFwXs6mT5X9naTTCwNXxFZii56UM7JfgGWP4D8EJRP9VynECjWokKfPn4gqzBj3bz3Au64AkFqH51Y6",
  "key16": "5ABr2aLKXhRZotDjH2uayRCQ8Ej28u9itjfH3giRhoHr27DPBhNnBi9WswYAWQGCxeG9vpyu8KPKpnBULFq7h72w",
  "key17": "EoAp6mb4Y67pzdT6zvki3cbhy3zRZ9Ehafan9fzS6xLo5EA6rMN4XrRUxJowx1Qx81eRBEqk6ECRDbr4AZGYeR2",
  "key18": "2pYeX6AfsKvMpPLJQNP2e38mMByDbCzhUKF61QdZHzVJuvm28uWV73KE6LphpwM7eSSEpUZYH1jkxq2CQ9M4Zr8a",
  "key19": "Dx2NsP5oXfnLMSsU1EuXoZEvxiSEmaqswwSM91fvNUdjjj6R4jUj9AFBjEpjYFPd8infzbFX1zSouCvCxPZee7e",
  "key20": "5D3zfZHWXERpnkoi2ouqBF6CKDkZCPbN1MFP4dbpmttHGGPKZEEfvHHG8vz8BqMDf9U9sdnF6zpWhA86b6Ko3muN",
  "key21": "4fq33WRmTN2ZNxSsL6Jvwg3o2EjWmnLQQ4vTBVeJVKJWUKxaqjSW6Q1NCbj4F8deB1GPrsEJLtPrWumueB6yTwga",
  "key22": "4hTPe3YcPM3FQWN3vHaaf2aJs5QJ6XzNCF6MQcKVdGAJLjZwLHXjVRKn41jSLkpL5MCJEqQh6p66aYfqP1cnS4ku",
  "key23": "3xsXmQwcdpQfiKFKvqxGbJGN8mj51uNyMvTmUQdVQXbcb5EzY4GU2DQgEL23dm7m7vNaFo82xnBCSfGpHTpwkCaV",
  "key24": "3VmPJDp8PbXxigiN7rAP7zWscEiJaPTfhrexCG8CPduvQxvcVdJw46ULD1FChKTzjn1zvedzGSKBgsYcJDzNBHqM",
  "key25": "2j3Y8FtjN3PkNgJLouTB6xzxj3U9KCNNETf674crWwPreBqS8JzpD5PBykobeExvJcK15nFDQxt9WrFVri8AGd6a",
  "key26": "PMF3tjLtqcmXPzVhD2Fddnkt3fmbupuGd7CHwbcPX9hNjpWDVvzQXpT1SSxZT6Q1V4YCrTKXsn2GbFiNgeoUsik",
  "key27": "48WQbGTj7okjQmoYtPhPZ1Tue48HiAC2R9vZjQWy4Xh6BVxXwjCZ41CEaRETERSJ7r9SdY9AhEhwT6KCbSsYkjsq"
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
