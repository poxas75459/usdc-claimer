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
    "3aYgCgBhdwz1prGL6xjASo5DSyZUqTY6jvp9V3hBg92vEYF3z3SrSudFa8fHbh8NQRTBCitae1FDcoDjxPPWTvkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EmR1mqV5koAC1ig57hv7qNWpa3idY3Ys663F2xp2vWs46xuUw7zHD4yL2D2FicVtCcc72mPaga12HozUNnzVVNH",
  "key1": "21dk9v1CABqEvWZv7ArUbsvgmeBi32jGsAWvCs8mn8M5K714S22nzCD7AxZtuwkBTwCXu3C4YV6kty2bV2xf4372",
  "key2": "4wDFKdfKSuVxKZtp3Arh9NqoyLTHZyGnmAzCrwSPWSvkJzJnZqagzNrxbCHEHaJZJ6BUoSXgvsj7NJdszHHKEYCR",
  "key3": "6449BhHL4uMK6ViwesTGqJ6Xtxum48cTkxE7RNgkuELBMta2s3N4iZKg3jJktFd9KshRBcCbfC1WN9AWUhgt6D1J",
  "key4": "5bDRywQqGqihzGPTtgK4N3UpY3H2LgkEBGuNpQGKf8TyGSdkc1eQPcBqhJSuHMRDprJpDwGj1GdjZvQbDKhSNrV1",
  "key5": "h4TyLS8UcPgyKEp3YpFyvJhg7mHsXqeuaxBHot6ibWCxKQhWciJWEXRR78QcdpYvU3bbUU2XYh2ehJrTqhEV7p1",
  "key6": "1s6x2V8AXVLSQek13FHojeG6hK7WpdG8a2agVKgBBvTMQSJh2c7oNmrxwk99SSQvcKH3wX36jWWWxQhSSdsU5WT",
  "key7": "SBbQewNdBXpiM5A2qngTzyikpMwVaAuBEnX98JdDKXaEobESNJ5ATfJFseaqy7FS8ysX4H1MWQcy4itq6HguzWv",
  "key8": "5DtvephYFuY5zJSHRfFUN6PW2dswuAfJLf5XLxRwxjFr7nZynCzZ3r3fuXLSmQcPLQV6Xt13gBsNxRLgA4nWsxLh",
  "key9": "5HT8jYdVuyFZea4voyMVpp89jQprdW2cFfjqxnakNh45R6QFe3oECxVRdbJ7GyMGWqJSW7bmSXLbG5JJudeHY2wo",
  "key10": "4Li2ZijYDcpTWKuUWNqfSMRWiaMjG2fJEtEFRYUQpw1uQzg6YEkQRWx1QrabQAgkbCHWimUKoMZ63dszmA7hDa6X",
  "key11": "4SVTdqXxP3eGAK4xujdzEoqFKNryTPXhrmtmSPjff3y1uanCJTjCjG4J3e3ERsKXsmcReitYPy9mUbYoZ13qq5a8",
  "key12": "9Ki8yoHQL3cd88xE52TAZeFusu8W54oUcrh7rbes9dsQ8Lec8hdV7jgpG46sekWftrCsfQNfJDxWTjZsRCj46nU",
  "key13": "4peT6JhviboERfKY8AFqxMNzZHHfK46pzBtohSGrGQQFEeUgQjvLbvzHrfprVHAQ2wYD3oDjjrNpDNcpSPxvQmki",
  "key14": "3kMYQqvvKwGrxo6PHdiNKdEjBJvXzFpRjHoLAfFGcFFj43agkZjqp8NaJD7sVMZAAFTNpeEqifZKWgq5vPeyR2uJ",
  "key15": "2Ss4MKGjkivvXvvkNV7VwksACSSEdJHwiLiuXXn4R7HmLMeVWN8YmBo6gkiWqwSjLG5q4HEAACDQHgwTzantmQnd",
  "key16": "2aK6dopUzE7bNkTNZqnQHbWxoQpWAb2c8ve7LPgNcVW7n4msjGPVg8wSwHD5iA6z5iQPC2vmHRVZynxgsw5SUnp9",
  "key17": "3kdaa4BUUxZAXFqjr7NLFiXG8hAx8z7WWjL4Sas9gdPC8evYo8A4qkD1sihv7Yw5APPk9tdPAn39tL3fnwRaM2gG",
  "key18": "51ALCBXXfxg77VBLdrY1Rt2shzgAD4UQXhAu6o3SUZ8JUeouyFbmHW3rT3qaPm53seFm8q8BTgm5fQXTz8823YRP",
  "key19": "2jBdmipJZRXv9vdNFp96NP54YDfbCBQUC8nYkpLrcs6kTCR5J7mwRCS1YVyMrLKehFjKKdgY1YctkHPyhHqriDUv",
  "key20": "5fcHX6PMUkSTFxMobHZ4pHNkHzNGFfZUsQQgEnwwEBZYdXUTH84rTrAcuXG6jHSbeuM9Yj9xPnZajDLaUWdR3CXL",
  "key21": "3FYoqpb92JpE6WhmbErKJPbtUnSEpHBMeV27hNHA9tA2RDPYHpxSm2ynCKgxJb3cKvMbjRqpRe1tzJ4aWWmRcgWS",
  "key22": "4A3LLuHmnV6nXZgShfQaYGNszNKJw15npVWCQ4YoKVVTa2i6MpjhmZB7yATgcCuWgwVpJGdjkAPCuS3QzsGLa7NZ",
  "key23": "JCANcyqBnCEjijfJciTU82Rw9pqiVMkLahC7zACoQBA2LX8QHDvP1o1sBU9bfXPdNjir1H2hsfeniBfcrbKipRr",
  "key24": "3Lq8FEBMzZEo1A8uDb6Y354omBVrvRPjT72mUj3qyZNH2vsB6FFyw5eEbputDT5kmTRjgCsv9mjEvQRgApCrQTSx",
  "key25": "2DtQUZ4BsTxKDA9778un1ZVqRAg3SJimjsTw8UwHg7eauaDH3ZUN1MW8Tit62yW493iGh8ahYF7ZzwWGKJD5w69u",
  "key26": "5Wfbc7GBjse6AtHJ5Dq1SNCtFTPffqKpNbBt2ecn1aGmR2FR8h2fuDzB5XH3vNTWK1F7AaBQig8tbdPiyPz7b5TY",
  "key27": "293kAmRPeFgKGr8n2HPqN8DxujyBv5UcGGzTtdYJXeMyQaXh4iRqwegydb96cS4B1aYtzYNYqZ1MMbScEuYGyPis",
  "key28": "664PsodQ5h1SPDCneTJGN1EDpuiYgS2LYCoHLaFXtLtW2VM2rqSc7HPzcCVCUhrvgoPKFm2typeL9oLWYXDCjxiG",
  "key29": "5NuDT58hB6QLKCqgQFT9xtW2Yow4nFjZZATEFhqX8G98CwGyQb1R6nYh9Jxyw2zCMuKQjEMVtcYrBZdXAny7NiB8",
  "key30": "24wQ4jfhMF92ZRK2o3HxvZ2vjaiigULJffrs38tAzkaDZYFahhygWYnke6qp3eEBBrTUkGij5nVbn91sS8ZNpXtG",
  "key31": "5zxLQhwmTqNNRR9dYb3nQxe5nfoKxV94jtEkxoZEHWXcUX4bthpAYsh5aS3eu8E444UAMWGcrzv2Q9Yrx3HnVAoK",
  "key32": "5zYdwUF4d83HeKBvMBFA1VYbUgDDUU4tvWENL5CJ6PqX3j7RZtTQQR1fVZtpRy94fbC7JDQpvBEj4gz7qtCBiGto"
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
