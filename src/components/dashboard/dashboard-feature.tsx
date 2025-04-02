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
    "4yAxdkXG5s7QufzPjzKRwshdYFq5gNbrW9918ZhpWAgwYsctuZTLkUzKz54gncutbj8DpSTsRapHVuUKg8E3AZcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EXosEB6PX1VSd3oRqZgGMNBUDcUHbxMAD4odaFuU8cs9wb2e2Xb9XiCCAXykYouFrSgsuomvATP4DV2JTJXuooe",
  "key1": "UFejGcFvkyfUqNb9RbRbza4W1xHdDUjUFJFyjZNsczp4ZTxypjT164nqfuvRqBAsMBBvMzDwCbFCvGQkzLDfD5B",
  "key2": "4iGpGWbcLsePgS9kS9C5jce4oBzP5oFqwTEhXMxNGnwAQM79oELfMjoQqQqMF7E2nY86HRkV1FGFtcaKiigiFHHc",
  "key3": "56Rr9DJ9u3wEQUowP4P3HdoH85gJ7LSXVwAGfqu3ER5T3RW7nh6fRVD1pnonQqmDEx8xGBX5WiqgzYJC2FftBuN7",
  "key4": "GujT3NaGGGQtsX3qQo39LYBFm5V9wPMc5qVL8vUv5MqpJtUtz6dHHYyG2kz8ksR1T9nnUQ7hzRKMVQqxFiBwwmN",
  "key5": "aGSJrkqQSFNDUdNbEkd4rqsewi8Pu6uUbYKuUqquhJeYgsVV1fYPeUqcnSjdKugUt8FyQKhjLqp7sY5UEFz8d5v",
  "key6": "4rYmF7wxJqtPBWuxYdUDXVy1isg9BVdgJfF2Y6LuXZ1DRSRUgFPE76dkJTeicfxB78qinLV3AtBs5TMPkvZkBw99",
  "key7": "Bjdznu4StBHoyM3VcXRMzrkzmU7GR3eDTThQS5s7D1VquDAiyD26YWtv8ykTTSpqgNXsYi7hUUYXGXvwASq2QdP",
  "key8": "5EYCLNZNFZ4xmcJpQkBr7VPZThjmo7EXsKuA1UaPqo2R89Sbz7ZfExELwjsnALxKfm8SXQfgjNFptRfSyfEKSLWW",
  "key9": "4C1D3Fxk8kVR12uwZDGG7QcToEnNghm2yjNdsWqoGeAMH4iT6UytaoFRUJXukrFfqPP4kHjnYAAJA7Gt7oWU3Ghi",
  "key10": "5VxNMZAseXNUiEGoVW1JHgus25TXE3rK53Z1EcxQKsWmjGxRVQCdsQCim3kr6MMjnB5aQ1tW86JE9pBRQs44XznZ",
  "key11": "61npkASmcN9oiWJgoEcWrV9P2KWk6NcJKnMVKQZ6s2aA91mFnrmdPPxdD9z9382F4QfsC8KUmXKLXKWJBUod8soC",
  "key12": "3cf1rgaV6zi1GqMvnWSNQwkCtQjLdS8QCqoB9htJ7pTPpQer4fQRXr8oyCnRiZNLhYrD3DMqriZzyCvgXabo5N8z",
  "key13": "1gGm48ix3BpiBUbHyodANAL6TSQKDWV9yzCGyLSCkWNkRNz2uC1PwwMN68TRQJy3GBoYjZhiiREJFTTXJXfCKft",
  "key14": "2g954i3eCx5JjTYeovGXe5VmRhL3KEgaqXAqogMvoNpU27mn1fgWEbHoKxCeJfByudQeybxcGRCAYwVB3UMAnpzr",
  "key15": "3tDDBVw1CoDQUPG6xGJsZewctDMpSDTdER68TFS1XVoNPGzorbLg1FxzJgmXmkNh97U6HwEapkVXLsb5xcLGz733",
  "key16": "2QFR8uRzVpn3TZH8NsGTpwGVPkMLyFU5DvnRw4k4kyCEtNNbV6nbrPehYSYdHayR56wftkjenhVR7qNbUQjZpXTg",
  "key17": "3FMFR9TjqP9FaCpi4A7aWsD9nBLZuMP8qS8LMS1ys7XgqbYRsYyi1B8Ua5WqbVLUzwcdAws5dCZStj7NSzGUpX4D",
  "key18": "5NbdfcYtKi1h9bv4LjQ3mSKVak5a58x7ynueMF4ox9Sh54ccHcrCN41CszD5GTn5A1vHsG9rhpGQqQ66v28VoSiQ",
  "key19": "3vKqBEEUGSKPgYgZsvVg3Wxx55v5LRqVwe3ex5hYZ4KcYFhF7kLfyNrpQtuEJMT4gRQGxPyegVmJMQx5g5JDqWyp",
  "key20": "3954DyGWiLTgfkH79mEsw2wrLFDFNB1WYWwctTnHyPDNPB9d3DkNzCaSd8oQH44sie5NEkYcbXTSQy9SKVNVhPnS",
  "key21": "xvAiSzjXZYkYM1z2PsvMAinKAdcBT6FJgw4Lt6oxuKEci5JNiXSETpj5Gz9AsVZQR4rMBADzL9uufFZkbUZRd2F",
  "key22": "3fNCjJNSAEFb1egYf7SgdkWdo49X2MdiPDTNyJXjifvcUtAHHdrjbfQrk4AKEyteebzKvZxG12ZDfo1f2qbN7Cd1",
  "key23": "5xkojGvueLhUcrMzco9eqPxeZLEnVDt5J8bsnC9YEBw78xVaBMxfsGjBRUUa51hWvGd678yXk7Ub878CRGdWRfMJ",
  "key24": "2kDSYewts3ZcDtZxWVCypi1SQ6ohtSjgzaEwcnPStdJKTz7sivcfVzF7RATHXVzqcBNCkZyTVsTbUVdB72aiCQww"
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
