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
    "3ixATeU9UZzptyCAFNpL54MQ9DZ8Lp1i9tev2mTdMqSgUzEd7E8LYkhDAS8Pw84KMhyLtiR13bMfqPdBYT2d19Rc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YPjsZbnw5rKiXRF8FAxgfpY7dg7FdUqhubjqUbnAHdGwupeSgEsSnWMfke2vLvwmWR13SbC9qBNyqCDWmveQjms",
  "key1": "2f3RMYy8cdqGdrYkAJqY4XZzqb1k2HDPAuQYEFPjprrjTHKUV9tPPskeMiUAyiPMHV8mnRm6VbScJ9qnGPiwFZLS",
  "key2": "6K6y33NAATfASBgJHkQ25PTNgjwXQt4jAnBbLyUmvJy1AV3BQkpkom4QckYUo1DfWZoqt8y5jtSz9Fwy9KQuXk5",
  "key3": "4DKRGmggLRzvJhMaT8UcHQBnWn1MxN6aZHwDTWeFfe3EokeBMvdupN9Lwwk8fV4nYLfSJQRXz1L7kMpwbfkDq7iL",
  "key4": "WoRrCpx1Ehxpeu1vKktEdcbyFYu17WmHoLbfBtKB6RECnR63iSLe158g39paUkFamrkRzVZGJegy3nwwvhzCq7R",
  "key5": "34ZeoWZqMXA1PiEgF63SWdQXkJqeZbP4TM4ozcegsyiXQSFbQRqFhwJjLVss6AGvK3P8nyeviL3XcHZtVidyr9sm",
  "key6": "REnyXAAgqEMgaW4QW8CU3pm4C7BP9iZ8SzGMkZdgQyChi2RL6yFopUPDQKWMg8Zw1eVwehPjmUbY5U6ermbP17P",
  "key7": "nTb9s7Hi6BwZ3Ay2Uid1jJCsxozUaqxM7SARcAwD5pGpskrAYpTkiWBM7AUxu13jgKTzqJYC3fCo2m4ZWFTbiKu",
  "key8": "3doYode3ZaHAJdangpu3brP3noHbn2aAK4ssYkiLSQnfcLXed4BDMhDZkHLcx4vMXQPPW2vZ8X5oMV3GXpMksA1r",
  "key9": "3CrUCNDjQuQk4q13Np6JNrY1R1BMpeJUzMpEKQ1hQVSKQsvF9BynQmsP5teCtvRFS3kqQeP7FDxz9V6dujPDTjZQ",
  "key10": "59cyuTz8SJALztQt93ykn4494U1xCW8RbgmHJKLcXRv1Edgwn4pCmbTwBJKvf8wJL4zbAybyGZHt87oNSArf1hxU",
  "key11": "5atiFBH5UBpU8Q9zEKDbsLzSpZP9zw5GzFBFeoHTKS63N21beC4JWZtuAH97q62iUGkdwhqTKLYDqFqRSNMYaCma",
  "key12": "3hPkH9sXYjh47yhiqkNYnde2TY7cEFLkaD5gLwMSGSWZXmk8caV7ZUWDTtLLiBy6tHZYNLNm1wdEvkKaDVjgihVu",
  "key13": "2eSRVNVNYQjPqXcSmdRTWUQrWi6pkR8y3jMTeMhfTyW1onArCBf3RanJWXx477UU6w6RHvdjZoi2wJQ9mQAVHWDc",
  "key14": "3y5vR2gNd5ovFw3EEeqzSgSwBKHbSk9MjkfebrimkCobpxQUv3xz7Nyiz1NsbAoT5jRWLQJSepvn1pd5JwDxb2jw",
  "key15": "66Mp9RtMbQcmueCQ7vMEfPcf3fnEjNnjnjsrJtGUFFK2Vfn4PLuF8Ppf9NNKmzUnyVmWmTa2ymh8LkdSTJJWk8VZ",
  "key16": "5fsGbbuRaZgvserTNBvhHp1yaGTACD4XS3PUZ5KhZEsMQaUJvd4kwTqpCRZaKq6bn5N3DjkqF4sfRQHNJzXiH3sc",
  "key17": "2PxXFHP5oTiGLwEvD5p7tB6iZsWfVidUJAWJkJ3ZZKcjVsJqCY4DsPkoCVaCcnrc7RzsvrYnWoMVSDt7Dk7Gomih",
  "key18": "4wXeMU8nUuXFYEbVPEif2hRJDL6bZ7uNHVUmjdYkioJLKqwRmB9kXPSjc4LejLBj3qEDwYhzoZY5CcVpFHs6cHLZ",
  "key19": "2dgzE4hu8kMvDDULoGLPfrFWA2jLCZxJo47BEC35TSquJtTUoNR8eWLCNvthgPy29jFDPSqAjc6twwrCVhnE2RSt",
  "key20": "sz8q1ECD6wQumKe7WjFddhhv95bhdwcpQwJXuFiyL4ZUVMxkU8m7nZoc59xPQRSYJvSZmj6CXCcF3vitWPzk1g5",
  "key21": "271CFoMesS3XyjvKgadAUU9ENaiByBpJiuq74Mn8nBNyyFEzCC5gFUazF16NMR2UkDBiAp7SEx1V51sqnYTBucmR",
  "key22": "3vWCmMDoyCKfkDBg2XXn3yKP6YAYwyWwTNFMEDqVWRDZ1Lyn4yy3pbEYH2QjRFKhKKJ4QCHemu5XERUZLW65PVJk",
  "key23": "5gB3yc5LanmtsFS6C9urMZGPJdCZNhXSfYzs74q9iMiWQVG4mKceeoZUNdkSBfsXiKpVch3pNvXKCHtb6xCGq7Ts",
  "key24": "4wQNZYvZ1kqGT1CZbBdT4jRxfP911Crsh7jpcDjdQsyXDG3P24HQcbH981Cp5nDtNoBV5cRBEtVZ7EgogyKZXvUJ"
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
