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
    "59XdH5sCobRNcNDLuPfH7K99uSALGDytb6ZYdhH1RHUTxpoNz16eYSFJnNUZbd16bxFNyJkd7Ure7NymHneU3Edu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z4oL7GTKNwBk8uVu9LV1KPrudP7hLBp91hoZcrsAb97Zrz7KiWHdH6rbLuuafHm1GWgfXQSaNfnttkjg4HHjZMp",
  "key1": "5iZDTHFhZrZKfr6uPuNXKEd5HxgS5wQrSJk6ZhhFKL6TJVv2SzFBNiVQkoAQjDBwVMXiDj8z6PhFiw5gnEw4FtQY",
  "key2": "jVuCiwr8T7ZMGsBNwzfiQE14SinjBG7ATh2ntpicenGMvNH16k6jtLr91m2uBfuMZPhxP7CeSfnzTyD5r7zD91t",
  "key3": "3kSX39d8gRhpVZGBq2qNh8xJaC6v6Ejk6zqHK4kbtZnBuWfLDbrCUBdGh2m8JrN87ssNTiTD1iDUAxXPUL5Vuunf",
  "key4": "5XvCFbC1wiG9MvmHR11YsDBt4zUgkXATFLuXqeJNwFbV72rU6pjbpVE2rCvKv5WWKSkkkVjR3AgTrscBkWpXHjdj",
  "key5": "5yJ78GdZqKYEXNhfugXJBGujU3XNP5Tax876roopfLruA9A6T5MvdK87VhZjpg4VpjYyVkJvwECrJbST18jwfx3z",
  "key6": "64jMw1Jca3p9dpci1NHddd2zd6rRMzzwP1mci6V2MDfbjV21vCnrDhBLh9VH4vA3QesDz8mYNtn2AZA4Q4w7JwqF",
  "key7": "ue66sTfAFc3DLpKWGE1YRXrR9g7e3hV1rNzmETUPWTW6pjkuj43MBXnabLKXQUhv1LVpLq5YrQ9zSzL25dW4CyF",
  "key8": "675mDuzvimZ2sJXK65j3JMEhoyxPfA96UnLtHZKFS6zG9WNCLf8grBsagmGwpCpBJHXhAn5WWpZNwGrtep82NbG8",
  "key9": "51X1ySvXUAsJFJUmbazSt9AnVjDUAkA8TenRk464ydGW8Q7Z2wcyV784FhGMmy1iK41GCrQCBgPbDHeWZbmzJCtb",
  "key10": "3tsFj6hzyyjLa1YvC7wHESazYDnMFD18ntSEdAfXR2cKfWCYMUAN8QAVcm5GZe88XZWFF9A8AqmZoFMcUYzW9PcB",
  "key11": "5WxCt3pjcnswB9B9iRCNPsq3ep9rs7m8FVtUJWWKKHwBETBNSHio6CRQeybCZTLURVHwvbFmsrCsNLne4bb7nor7",
  "key12": "5mF1F8eYCtxg8gNHJoHKWFujS3URvHcZa5jpAGzrM9ieW4Kicwn7Y9GvCsGC4F3scUaqhHRXSLLtGEyNXv1GtJnz",
  "key13": "5ftyGn4RyYxYpV3RWheELYkNVkd6L8UtWzuRURFK6GEsXw5rMEAwqTJmLVHsxgv6LKMvaAYPSLwEXjzJeMkV3iAa",
  "key14": "2pb965SDbw6fVgv5AN75hmkz7aVYBx3SdNeGd2Qqt6Ub7q2CxZDwBPxgHY77nLvDWNufo7gXrePseCSQTUWtMaMY",
  "key15": "28q2tR3ostmtG399y53g8Wp8mNhPvUweKqbVBhfpvjarGCvhLFULPQLmeneUEuLrfCQBV1w6Ve8H5o8paEh7dJcE",
  "key16": "3Sgm1qXybx65c6rzh783k2FKCu1V3SG4d5LScFVEVoHeQrynLiAG93YDk3kbimhrX1kigkVDFEyemCB7E1GUYWs9",
  "key17": "4XMdKXwcZXtYA76auQicMiKds67B4ZLRT9AvjrwN4qnLNoUYpQfzcBzB3uXTigVsNJ3krE4cFCwaTqg8KjE5oYpN",
  "key18": "5kZQp2G25WRwFiuPXMbNDGdqyukG8i1ZRxh2HAZiKXaULQ5Z3BgG8Ze6DfenU57nQGNHtSEmS5PnNGRMrZwUQgc",
  "key19": "4wbnojrApRUDtGUwM7SWyZQD6tvEmh8WaqZBvRc1tAPkLXMKPB1XtvDEkN6Aw6zLed7osJjwv6AVdJGancT5tfWf",
  "key20": "3BnqzD4sVX9nvAcsbmcBVQc1x9A6TNtkjrEN4xS5BHrQRMBz9o8Y6YTsmaJrN1mPhHV8n9XEaFSwPmU9vw81cxSH",
  "key21": "4YVuHAajKjP5dsTn9faWvxbA8g4jux5LgoNrgFj2xqytFTUaew7FkunyVypwMuJWRMkqZyMFPE52FcWQXhdsnBkD",
  "key22": "2netVKxytHRfCqYUMibhU4TFoDQhzTazdYu5u9nrQHVjJnEz6CAjBjdqD6gEVENp1cxD1Z3XrNQP7C7gHzxwXcs4",
  "key23": "6zVZddrqwdXnnRzTzQUmYYpSYSmWCA55Zj8y9LjmnKfY7gJUYhXPeG7ghCYb7uFxUkqBZ86uH3DeBFQz7S56s6B",
  "key24": "5yyTHSRY9eUySvRaeb99VDfsPCwWit3nAjWbV6KZSapLHAKsbWjeSkQ8BYBfmoFDQP7ZtS62Td7GPuofk9YZxg8U",
  "key25": "b3Rx4HwryePBYvvFWoB7ADh9zw6U22gUwoJ4ecA9kxNXmTtg54PAjLxri1WcEpvdJonNQSRBFcCCNkveSwtpP5a",
  "key26": "4dRoNJWwRwCaBEfT1vB6Cjx24FZJee4UfouMLy1s7jrz5X3KwUCpmK7ZcSQ3cYFkUXfqkbMMZcBRtzCLipLj8hBu",
  "key27": "3foB2khwQ2DFpqNBmrRY2PgZUDSkQuZKHzzRJVLQxDotBXhR1afeL8EzUquAjrPy1EyqJ3atEhsP5WhS7kMrRomm",
  "key28": "SbnaCXk58Ge52M7LYU7eq1ati1K1zVGQLL7Ps3a35e1BaZ4ZRcyGkU5rfNS6MmxpoWjWkzVtcN3x7vRUd1h6Rdb",
  "key29": "5Z61uouQtt4swdhkGeZnW9yXb9MpnDYt17Z2NbjQjbggoqMhB9MZLQoqa2EMgAin7vH3YFhgvPKtTD2DKGuPo1wa",
  "key30": "5afTpVjZdMLUE1sCmbaB2HQMb4L8EaSqq1Gy4mVGKMDgmiZAGn55hFPLRLtQeQAF8jgB479m4jLSxY1sCrrYPHit",
  "key31": "4qysxd9X8SmNfwWLhLvXE66ZHK8CJURBjG7jPNL9ViJ7sMH5pcZEH11NjyfbStkcC9bkQfdRmZNuT25Drqp8DTaY",
  "key32": "cv4rdK1mSmzyU7tNbB8suhnn8zBH9SKvt5BEQ3gLjZELXq2PaCvma49KATNhsfZd3SwDR36cbUofuHLRRzudCMh",
  "key33": "3oNRFyFTvMFPpgZKqsKVooP2Ad1sWDChVto41zJND1duLo6vmr28PWmu6eEEvwLzJfmvGrT4VQ4pxYNZNRJLBtR8"
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
