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
    "2MPAeYRcqUFpGaooPRnTyYPFH68zHqHC5bEj6ExqaeXc51VMQ2q8Xqpr1rhU1kyy3rdAPJ3RfXmBhadK8tcEoULM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DeZ8Fr7yAoqR3yzjeUmGsJ2NcSJQSdkbmir4SKDwmriorxicjjX9TTrGWj88EdmjhCn395xJB6eDoSo5QyEBGkT",
  "key1": "3LDsXrmnt15uRcA8cp9NnipytHjWCuHmDfdbs8qxwGke7a7Cp7mdKMvDA527RmjoFide3Wx7DqTCuFM9bcsjAYSh",
  "key2": "kkzrneXvHr9v7JGAQy9HH4HerZu5YZKY3H8eJngsNN9ujVjvtZLKZeQFnxxLJFFVbu9tHPxPfZEwHsxDLTGCKNU",
  "key3": "55MXvxhzqaq7SC8VXW6xMx4HzuLsVYjDLDSG8N8NcuvCCYin8HACTE2CDK39WGjffdCEEKfPWNHiYCPW1qMnx1dH",
  "key4": "2TQcbhdXD79b6RBRu3jvPJ8e3m9ojWTCesx4UpVhShueK8qyotxJCjN8AtAmNdohMFZaMtb8Pq7B8zEvcdsUMNQb",
  "key5": "3C9acKA4Xhb23RDNqAamxR7sVaYBL53rq5GzsDz3uLKuNE7jmScswV7fRK1GDNNNCz4dELLG38ra6rpBhGSsuSAe",
  "key6": "3DsFmuFAv9aAUmSu2tEU8UrGioMays9uXxH6WXdkDC3SxYuM4sLCuWcfvVrZpUrTzwmr3JWbUc5xMU9fz7LCy5jp",
  "key7": "2WXbxeapD2AgP66wbbTPiAoZXUPm5czSBnAScBdyrZpsco3yEniGeVvaQnv9mBgzkZ6SPfw67AmzAA1WZTSieq4H",
  "key8": "4x6wnofJFwuv6zTof5L1wjiHQeuxWvX966vZuZf2usN61JDzRaVnS9uLhq6EvRHYr2Uwo23kGU5i7pEKkHgC3rFG",
  "key9": "5BdhWGqfRPNHfFcRUrw2okuhBAF4mDNN8uSUfEaDTiVZ3Kiu3fzNmy6PAcMTG7JhoxthGPCjzv6tQzx3qyEDuDmE",
  "key10": "5kaSprzL9xZUSLriDdEWBZf6hFsP5eTD7oh94geiTx4cSkQJR2jYkxqBQEhVTRXmcoKDGoksQiLj7euFDt6NjBYG",
  "key11": "fuDVJcpj9pF8wtWesAYK5NXLhWtDaqqLcCL899jb4ABhNtQ5i27edVZmFzNnt1zVnst6CcbtiwXmqksW6L1EQCw",
  "key12": "5e5zCDTghMQZrWa5bZLPEsDahF5Toma8pFjNbc4vvqtTsHSB2MaLzks82PM2vW4rdrRbCPEBEBmWRr8UynnDSYPy",
  "key13": "31CTAsHVhipdKiMAMS7qVX7GPWPRAE74uq1penjbMwnKtPRxQwHJckjQkhquUP5j3L4LHFDF3RSVyQLt6VknDmGj",
  "key14": "NZ9cACpC6N14JWEr3UJ7WjbMs43QGzQsVHa1TSmFGhHvGJDFWKBNq9RJTP67B37C72dr7KaX7ag9frSFheNZxfp",
  "key15": "3RswEiX9CUVq4bsXHBKvEAfJ2ZrYfPuFLtiv3enMNBttHTadLTNkD9FMpTVmzTo8rkQJSuMs2X1D7Zkvs2tLSm2v",
  "key16": "5RocLPmc2eA4wz1GJeZy6GL9pjzQCvW5Jo2wbQFST8keELobUvwNp5q34vY8wiS26nQXdqQC9E3ZCjt1C3dcY9qZ",
  "key17": "639fZfWVRXsKuFG2xsg74LmAVkZEz3mucmT3FRGNG2tbSrzJLhKZM3QkjpENAZC4tP4tmVRgKd5cVxDs2wmLWHQM",
  "key18": "3ZA8RptSBA4vSxtFJtsFekqq7hK1ZjAZtg9LEbzZd8E9DXaoXPrurTEcCPLxrDZQM7mV3QTez1RRj1hvyiAGp9hY",
  "key19": "4BfbY9mbvKcq6hQc17gyccs9HS6Xkdn3NuwWJMWk8YsfrKCUdwQ2iCY2GGrQoSWjmEQgG5VmLzDi9mQkz6ADSWJM",
  "key20": "99ukb1Y39n9Xo18Zb9tVpmkrs2FZyJyXtWq1WqCRv6oEYTEbzMTkRu6j5DKxJLXhp2RJrPEu42ae9BwpcYueZap",
  "key21": "4xNd3qYsJaScgxfQgZdRZAPMttUFFintjEz79kxgXG1WoL5uhUJacg95RSh8xcjoWovYXpD5hTkbawTD2KMqXw5V",
  "key22": "5nEcNWhkb9fy5osVKD6dtu5ZZnwML52arecSp88wEMu5CXiPawFUec8UNy5xC2b6VbwE8r2eXN5c86GzVyDuR7B2",
  "key23": "41tswSbGPExGwn2mP5wRq2bcrxrpc2YnaAP6611729yAs9fRqBtmXzPVRvYMhpiVwZUAvQpeKWP73FiHf1u7royd",
  "key24": "3ZebY9siJEpUyojaCQr7BVk39EVBm1CQbKTLK8Qxrw28ct6HzzgC8ec5hPzDjS2mFFZ2t1QT7rD3PKXNTnXABxBE",
  "key25": "2AjCmUmPdrzjeAToyam3fvnrr4ACbAw7Cvj1esoMAGfSq4yH6V86M5M5AxNqdPjpV9GT7gwWeo2EfDzyA9C2kV5r",
  "key26": "3wYoPah9Nszih2XPfM3oE8GnBdMSWthbetVDb15SoDuQBoNFFtHnzaG4FBuaYGqWndHJnjzVuDFoFoZbSHo8GLH4",
  "key27": "2LRTeB4p98mgsXerjqQT9hhow4c7pS2HP1wrGEe2q4zKP9VR4j4GEpNV3Qgqh6CWuYFsJLyP55ighfVGfpDgCoE4",
  "key28": "2nAA7nXedUXjzYQaJv3eHA3fZzVb1QnwKQ6dmqWp42GnAfFBY9LoUf5MHJLrpMRxwHtrGq8LZY26XEmagxfpReGy",
  "key29": "2YS4YSjoMsxDgc1SzSSndohwfxZkLP4fkirhMYsWaUqcVc4nxoPPRBxW2fR5x3tThRrNHh5aTRQBMXmu6X3g5yZw",
  "key30": "4NgEoEH45pYzMADKmW5VQCkW7Z4sDRH7THiZhatNXtXFiYipBQLGLxorXEZZLPsakN36wqH7BQqPJLxFpbR59DYx",
  "key31": "hcby9qnjM3a5WJWcs5GD8Gt1z9YGSJX9cxAKp8dXN7KinBfZLVfuJQorgugAP6MEz1PsxdM1p7yYtx3YBxcJ9uJ"
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
