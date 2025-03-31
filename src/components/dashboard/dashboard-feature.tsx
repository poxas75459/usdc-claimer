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
    "2nTo17dzEWaMLPsRdMTFLtNZzoCXNj4tmFLfpAufb5mtLWzC9YqkwLfAQ4ZhMsqNrpzYZVLN3gfodaugp9qbPc2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38695HYKuKtMsK2wVdHW4ccbfqV1LLNiim3yYUouqzcLEv7rAhpkME4ePgHSCPWoiymDYYdx52xnAoHzFXUVrb6W",
  "key1": "4hBqsVUjdcJZBaj4jVxvHqPCB5CizEdP4xCQKxo4RJMLZ3KBkuvXsiZfHvv4Po86baY1Pm4bKJmV4XzL9mduQXJH",
  "key2": "5eMx78JpbGnjnX79TVAzrT1tuRQUkiP6hWCXxKGkDo4REhBstBaKGoUfus4Tbi5WiH2fqZsxLmkjiTmQbf9VfbW1",
  "key3": "4embMWJhNYEzMMTqAKjm6ed3sVVwNdXHq7r8RejNKLYoMexxs1Cyd7U67JZhLhN8ABxe7J8PF8FqaN1UMJttc5Cs",
  "key4": "3Psze8stKHYeredq1istcigPz8dFJy4kxW2Pk2igQD68y3ZehyrsGbPESEoHJ2puSsWonXVZBsKDgNQ9RutvTQ4Q",
  "key5": "5SK63SzfAKX636ZsgmXEizcJ5HMooF4M7uQKEbPNWBZcwsH3XTaFv1dp8h3kDNwZZtT3HKgv3uPC8nxgmJk6uwPw",
  "key6": "41iQSsk5dsPxR4fd3jVDyMY1WqDUSMRV3GKfbAHjrF3s1RYinHt1KZFNNQi5PWj8Ey4uwwLzgtSFLYFZdnDrdY7R",
  "key7": "28oHS351QDEruo9pthhwoQc4vkxQRRQatS4E98jpNtprvqduo8MPVKWUhKuKFhZo9VG23MqEJE8j35a1jyA8EyqL",
  "key8": "wSV5Vm8K5ob9ALqcvEZEea9Rqd4j8h7G78JXik3qBgPXC4nLnxNoHF6K3FimNJr4DiNwhjaxf1fm2EFTmD2xrQL",
  "key9": "UGSdphisorMzXZvaA1Z4J1L8w9LvjNet6AVqYEYkoErfXEQW7e396sgRbesoDRwknVZb7LuPRYe1AFJyNtznqWE",
  "key10": "3yvbWo2B5jc4DoGBdKnqGnqZQgrKXmJaz879wkwc8tMRho6vhCDKZ3a5E2hwvh5wQpT9QRSvnPStPWXVHtVyuF56",
  "key11": "5CB5Kgs2WZHPAqdJE15f7SWFTjX8PVQoBymmqVqgNR8PoxgwzA6pRYahYf7BRAmmwxqN3njbKXP5ahSwAz8pf37N",
  "key12": "4grMJD4kkX26UihViG54khiit9NiRi4qWnz4v21McHL4kGzDPyvpWcYsYcVaDyPiudpYTBzmcRo3cTxx23ijNcvx",
  "key13": "5amBFXycmJMoSxM4NTka5uSmeDpJJVXX3DwaKLjEdNywsRSvnFzEFvHP3WW2cosuzsar3kKyvkEzBCqh4Hs7kvVq",
  "key14": "2C1YUwKUM5Mr9Wn9hqBU1jU5G3HHEWYcYXZ3rjgK6Ve3HzC8s329X9XmeHRL2RmKqQFuBr9J2aL27bgSn7dGC1mz",
  "key15": "3KPfL7UW1MZRHPHp3Z3LBoUQodasPXyHM5YGt9Njy2sZWujVco41gsDout6ppNtVN1NxRvZKtioFcg7fFBKJXPZ2",
  "key16": "wxT4DiciWVg17a6sfd54ZxC8tcb66L3Zwx26jp1b9dyEabpEHpCwPjqeZghkddE9qZnmVoNZE1owLbnVC1uccgL",
  "key17": "67YQJaat1V7AGincdKMotdMWiyS833DtT7MxKUeaAwPf7bvEHhaZ9yLAiCf4xzjpoYP8craeUodtiLfP6NZ71txf",
  "key18": "5p848pqjCY8M3oVcq9TWeh7YerAFanXtAg4CXKxTrky2gk7rWB6GUKx6LkqX6Vxq5dkQKNX7iYbkuMoW7Bf2KDy7",
  "key19": "32kVTYSZTf8i8e5gyMBkQySFUW8qGqjqEU7oVVAkyW8gC33eVLQ1mickNX8pAXWRGDwDwaK1G3pUobZqisyGDb5c",
  "key20": "3MPdX7jyvP4AzHvHGaW8eoz5KPEbNhui52Q3gaggFoR6zGsWTLHD9UaXvq6cQV6qjNigucV7LXhoJWp5XadVpvje",
  "key21": "4uMp2TeerPFGLSc8HGY3sZeyhaPa69JMqtRRc1hNrbExxiBvd9HvqQv1hFeHrF7dc7m6aQ3zFNQyG1g8SyKUqext",
  "key22": "5HnUPbCaNmLQ6Rr6x3aqzbFUz9csQ3zGLBH21cYGqDwfj8EQKrPqqJ7BzgVT5PYVPnb5V9hBBQYF9jyfkichoTzW",
  "key23": "5sRn1cVWC6fXgxNb2wDM9uvFfu3GBKYEHtiGL8bnXG3fGekHGPXLs9oJmXUeD3rfuoSxXe7R9mukTXBZQg2cLYF3",
  "key24": "2u8AVnjV3vXaiCH9x6HqnmzTbY8hmraHGUHSC5cuj7jEcfc2YNDi23dNenZt9kkJn5qVvFJhFfCnWV2swKJujG24",
  "key25": "f3XYkW3ipNtbK7bpfN22MPzNjbzuw8oG8NWRgacTs9dqjhXyySNVHuTkL89sqNgXBHsWEZjFSfwgxusaniuLiq3"
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
