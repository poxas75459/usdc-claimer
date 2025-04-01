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
    "4r7rmKFu7QE1WA7y6HWr27KvnTMaxK7dET9MShae16koCPxoYK4vFtqcypnWc1hLmrRotaUKuVfGzqZryv8JHMuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dWJZCyFey2vqMeeiXLU1TFU5WBpQyyWKacwzP8czyokSU8vZTie2rquHGycuAG7eqxyUhQzDMhcnvpMpThJPYf7",
  "key1": "4tonRkHBP6Snu9xXDzzVWXQjK3pug4n36mKXT41BY6f2xGDZUGpxQYHcWySAPXpzJbtKfFp8nvZmQ6i5oAxs4nUc",
  "key2": "i7acUiy4hAPeSxWgaLFUv9WADVbVbPfjzoUgeE8hYFbiThtjp75Ka8Z4tsbAbSu2XhxeCzLRBFJXMRyUWpwBwVz",
  "key3": "41p72hpqSsVf4DNkZEAEuFkU3c7yjVpBU2CoyepusyUavqK2FU12Ss43aep2ku7rGNQS5ZxCwWWTxCSuyxrVzGqK",
  "key4": "L73yq2qxCWMkhPwJ9d8hip9kzCpTjHRNFk9hbbbvem2WY1RDjdP67rVzarugQNkLTqtZKTGfU5RpKLMHnJV7vRB",
  "key5": "4D55iyxmHjmjPDz2BfL9iQTAcEBYPWhjRr8Dui69wg7gJLrt2V5FP32baUwE5qKS3dBc1a7fCXgdYsofFUftAJ4J",
  "key6": "5vDfkeH9cqfpjaVFVfifsMrmoPbJg1KB6fZfMbjtw7JczLakZ6FtUWFUmjGUDYLHGksWHVeBp3KW9FX9G3ThaFp6",
  "key7": "2JNNviiDwUJ9k96YyGbm5AxMjKcPEPLLuZi9PBgC354pqiob7GSmYUs4iUJt8PGfKdcBDZocfpdQnFf8nhDzPMQM",
  "key8": "3idPZDAcT4jun2C8jNZM8Dxg1DTqETCjDjZWQnH86ewC8nisjYVHzyN7mZsccDJKzWF2QkPbqvxvVLvbRW8GKn3q",
  "key9": "4GLErcsxiavhwXi4pE1EZ4xW9WzVrw7qoHi7iR82mgsJQHqsg7TUii4TaFA7bBG4pY31757krjujXq3GLfaunLYC",
  "key10": "4bWLSSSCQqrcPLpKhRhsHL19WAXVQRereQy5GsEkGKyQxkJmytUEu1NWN4zgyD9vKQq9yZWK4yYMd9FJKGShKEta",
  "key11": "oVpdXCpLA1A448xB3JdGoSJsHii4psLrNpJPHoNFppoq66voVNbZRTtjeU3f9RtwSANyF2QxJXKYmRvCejjXXLU",
  "key12": "67kmj7SLj7vr6ZFyBqwKNDEgL6nkM5Dt4HVDUgq4Mqh2pEGLSBiV4ntThhZNFYsS5taWCmnmV9WZv1v6k1fStKPP",
  "key13": "5LF2aV1jy9oXBzp6dXkHUiMdecmYVbZy7JpbV5zVA9zXErcLgANhM7KLRKVyJCYdPBrAMiWu6kU67XNmcZMhjnBH",
  "key14": "2isp4HQBW7K167DdPM3jrkR1pLC9aiV1CL3zTcoSNWuzvwoHMqR4Xw14dKinYYrsjj834qgYbS7safAq14bjWW2x",
  "key15": "22XLoB71z6qyQgZyXkKBv9v9kveM6nnSeRHQsXxf6w5FJDCJqXcCc9YePeAQ6va7NsqJARCbferAD19dN8Zdh5WF",
  "key16": "2kP19jxwqPurbxyBe2fomaUbwUaAV73VZ3gediurjynGbdhzxxmC7G6hjsu5wd72d9ryzGgzPrAp4Rt8GbFqKKCZ",
  "key17": "3k8DgULKKk3jeUySfwdXBiv1LRAtMzLzrxugMvm4eCy2qnwk3bQMzUb4DCejprtGAXroZwXSQXWdrDb5Cq6BfyMt",
  "key18": "4svuKNSGicBieRwYhL8ZuMmguWz3a3pSNsf7E8p7sbzvZpRaM5XfYNdnCtPijZNXFew4gSc4mNXmPCUBgK6pYYha",
  "key19": "2VXH5jG9cnbgfA9AvZE4PK3AuoN3xS1k3BUNVguc6UbwPaU8dzjs5fe8eLbKrchvUHFHeYwqVXkYe6MVAZndoA9U",
  "key20": "xM4wTviCdRqVwerChgU41gX1TMqFuBp5iu8sR6Uiz4ZEW6gsGmNc2KLmMyYqmBj44nGr85ZVAtfxAXYxpVcVgzq",
  "key21": "3xXQRhMXxEorvB74uQZ5KNdCSoe1KqcPMxYZVxuvoSGimXMfPu6VkBprSU5feywQzBPKTnBsn3UQFsDLrBDRpTNt",
  "key22": "VVSNZ1VLWwwNEEDqTdBfHgdkKuWNMNqVTWDozG7RdYtCj7pBpKASQMUR2K4HDYqjoVxndqyQcqaKQgKBTtL9Siu",
  "key23": "2tTRK9Mkw9bP8WsMSh3gBrdwKVFEJmAGKE6MKwrj19ZqA3eWnycNAz2E5HzMYrQVcWqDbFyGjffrKL7QMVMmEPKG",
  "key24": "42mVErAa7Asxxx7RjvN5LeNXVTKxoLEkHwy9q7ChHwQGFW73dN4YQnwRvBha9BbVFRVBgz7KyqDKVH3nKgK894bJ",
  "key25": "5asLm6ymMfwShwBaia6833ujg9xYGGsyk8ay2m4uTbsLAZEDnQdyBSapFewwSYsHGog2UTPPV2ruPD1ffhddDJPn",
  "key26": "48MWhh5vLkGEhf6jWFX1vnkk1Rpkc6VT4h3sPwBy2bn8iY5R5n6vabRLMQM373L8DQDUVvThYVMfVRxHB1FAuBic",
  "key27": "2WaakC2svfLNT9MKzL7WJbTyp5iMwNtBVHWNt145iB913s3NGa9Wf3wrcGKRaJbvFU5jznBRkDbyB46PopiUMYDC",
  "key28": "5dkHyQLwSZUsf3Gs8A8XgW1GcKciHHS73WLj26x8mwCSqPWBbXoqWCAZwBQUWGbskNUnot6yd7Pm4vwFNULqXbW3"
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
