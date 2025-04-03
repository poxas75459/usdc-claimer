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
    "3BP75mj56PSMePAtMKj6b8mzkc4AND3V8e2fsUxomiPkLyxExKDbviX9RxS2oisjDFvFV6cVxgJwtTbqBRXKaX8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YvYsRn9dLcqVRuSkwmHau6cSU4TjaFzWsi1kz2VGTQH4D4wr2QcMy5iaVQnkFWgc9ioMSWATFvLeigjnLbHmQ9n",
  "key1": "4rtUetRStrGkpiaRVBxEb3vArqWfHPA7DJ4e7tvwS99gAg8DkarpjVv4LBSPmsxbKKBfYdBH724CuKvs66ovP6HE",
  "key2": "4cComDTV72mJsZzVbTuHvrZipuDGPgvKp2To57yNbpPoUshk819E37KLE4JDgvtda5129XGyGs2MRM6t1q1zEBsk",
  "key3": "hr66KoPFCU7bXr7NUbJGpMbzuGBVqiQ5gP263TfTEW1YxLP359fVchM5ASia9dxwP3cqRfsHXDuFTNaUYPvRHwS",
  "key4": "3ErasvwTHHt94CBzyKmdctT2NaHmDtfTe6itzKLf17bKX97foivaNjzCQceYkcjvPRT8re7e9rF3JXK2gFWgx4QV",
  "key5": "4s7ALA1BT9NAiAmpUHFcteXBZNABmPuvQ6pzKGEy3xbbdPZgcxdcHpMysg4QfDdidsoN9aiAWM7YmTzAG5cr2Pjz",
  "key6": "4mwTPxxkNjdjjdbfSNxZitN3cE1tcfuctyZS3XER53xmGckvS32Skh464SoVuwccXFfqnNNGBm9AUKbvDgLL6c8z",
  "key7": "2aaMvrJv1jnDRseGocErA4gPDR5wfc41cxZXnHJFs1V7b9xFnKpX7NYzwkRkTp7d5qREG7BBrEqCHraM7wXjtJGg",
  "key8": "2xRbaMFpMSuRxA1y8NgNCFMjejrmGoG6bVhFXC22HLVYcrhAqXMiWtYV91C56v5Kjjkai7hveX4MMG8vjDga5QHa",
  "key9": "8HZLYHPEXcA9FYn76pJE4bU7Lia6SiFVMXFkyCpSReCsjCez5G1XhuSy7SydPU7ipa1RWqo8KE1aPwd9wDa9Awg",
  "key10": "2k3kaMVPCC8rippetZae5XUTJyjMvqkaQUyBWxqyV6P7ZnBuivtHb2oWvYe6GwRxQuXwzec9YiBiJ5inLzdXnBUJ",
  "key11": "4hykkfVHCRpPnXhyvXqQ9CCsNbUkAhwpjhUqP5VoLADxiD6SLgff1phGejEJBNqx5SNE9mML79T22cUEGffVLbas",
  "key12": "2mAd9dVnBD2AxP8uQGCY2TpXMyMHWSakGPbbQa7DimUn6R3ukwGjQgU1ax35ZbBAB1SwBtFqhKFPqR7fZP1ygyjF",
  "key13": "3oYf77MTSGvNiFqo1rTpWXQx5qDCSu48AHpYp4LoVCm3jqNT6zKAw8ny7imRXCnYTT93xKNGeChumFhC7mUnh42A",
  "key14": "24i1DTf7ipKNiTKcs6FLpxVSThk6kqPRx9rMVCznSUAPP76q8asunGfKHSN4QMMioAL1KZRpi91jDpxtKDb39AMP",
  "key15": "4xVVpaYo2TkFCV5EkxWEL4iPfhTRbSGGBGn9sJsSNuYEnuYrGmJBibUmEuHTunbDKdBwJRQYdNrNdfUwnTxBBx1B",
  "key16": "2YDuE9VBHZWPGnS2iLrHkHofB5UuU9BKufrNU6jcUo5eMNDtzPFhzCWTaMrYUvvsJUfBfFsTPff7cDVsbNCfCjKk",
  "key17": "3MYayzk3YNmiStrSAeaKUrpUg34UbGv8NLjKGvUV4ucuinq1YcyvjtBrNauQFDzTqevwjPAdgBdfjPkY6WyVdFEm",
  "key18": "34rREtQihHAgd9DjGCQMKKfsa8HeTi7W2QqGCRo8opKoTutJjVzZpDC93gaU4WPzA647ZTdSG9PQSNvzeUhoXfxU",
  "key19": "CKcHuqu399ine9sC8aFH3JPk1vjx8pqzckoCwHnfDKMdA3jwYB2KGXHTDMvEUaE635jEfZQKzPfasj5ifVhFPbD",
  "key20": "2WTdJdWSw36jjKsLsqutRnzZdY1fgkrx1VDim2oaVMcgHZXgEaNuyjdTFvHw1DaWdEHnHe2ziD1F5e5nQy4Q4BAF",
  "key21": "SU7SKRCw2xXPHQwuTbHmo7jjpQzHnDB3ucs8dRvHxTzjvCrzhuBUq36j2mt2gBYBs2uftLYeQpwSW9etZ5FtyDD",
  "key22": "5xhvwE1aSs3TAt6XSiRJNQ4zsmYjhL2qSSbZ4mxWC9j4FPVAnC6u13mNtsh6HLpxRUEP4FzqSJ8BFuQyDLDeDD8R",
  "key23": "4ExMiygPhpLUjN2h5HrFKAc9gbBuQ7fqHAgbhxhb6Jzj6sgKW3Amv2siFAm83Vw1DPoQNnN6HHiTr8ZF7xN1yYJG",
  "key24": "gamksKVDkeSXUXvZkk13nrWQiSDwxFqP5FMPHnjNKzcqxWHkUkrW4eWuLB1JkM4AXxE4bBq3enGqnoYyxV83Tr8",
  "key25": "5wVVMAckm3HCkVvKNjuyYdW3TSZHbWnY2yW2KPSkGTQ21P8k6Bb7S9kZfBYPHKYqz3hzZTfo3gCWnF7NpmsPVrc7",
  "key26": "2QjjkcW9HTLZ1N6s6U7DYdkSkL3D3JpQQvQGP2SZXLoTFhiZZtBmKXyt78cYS8d73ainptDrvAK3FZP86QErvvuj",
  "key27": "2DrNLxgqji5RWGokCjRsv1AnhigZ5VwHh7KZZCoTAhqdioghd9mPwuLXCxzy9odDc6LXNs7ryPaVAuVGXaWNwjk4",
  "key28": "2hewnv5rSEA3iDZQkKoZcop4Yb8jgKQBt7Kf9sZb76VYJdy8YybmFDZqfZLMZbBoYzkeLSBjBJMpxBNvAsJTfWaG",
  "key29": "D1PAsskKrpiVtaf58Dbto9WJkyt7P4UHJ4EcyCwbqsAUeQ1o9wGptvK4TG8usWZ5j1VWua3eZLYAGQmMEkvYK1K",
  "key30": "x48Wr2TJ1n8ZKJ5nAZgQr9HoxCvtCQuPacs1AcRe3TXuiZTKjsic2YzmYfPSEvpNJu1R7D4eV9WKsWfBU9AWtTW"
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
