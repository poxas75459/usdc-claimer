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
    "2Hqa2ycPHL3ETL6RasKTdo3eNL6LCMt1dLxsptZb4HVi76BCgwzBaJgdr5k7rDUAUWbNkc7wZKm7q7cd1MFxAfFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KsC6rYQEuSAmSjdvkMMchp4hhyWGnj1gCaKTekLYhJVSWyeGC5CxYowAyRsz7PnazcbRj4DvPTx7LsoQor15QGk",
  "key1": "5Yrdu8FXEWLUqGZ4YAfVtvNTMw1VCQLsTBvBnkrG6vhy8cgtfPZJWXiciyiR56xCqe7zohR7jdrh1QM4RicPdAfB",
  "key2": "3FVBSjiRJFUrCXZctE5NqogfGBz5nzrRUc2jKtKHjtqFK8pN785yVxcXTLZYzuN3zwkT5EaUXLTnscHFEN5xnPTB",
  "key3": "2WrWLYezZh6jzWL33QV2u1K1JTvdr63HByjBFZMrYrx3KYvCW1vdcTa8YQDLAhmPKNfDzk31UMRARgPb1a26kPJT",
  "key4": "4R9NUMsxH4y8u4cSZE1ajHyVzG4m8fSqAoAZdMKaVRoErSQm9PQUBeZnnnFg2E11nmnbM1RZCyvNdanBw32MtvP1",
  "key5": "3NE96CR6SdTY9dwvujLyzDkKgzhx3XctDGfBdTauFYi3efvs1c4qo94KgB1XFigt55bioKsNfKWNipaYE9yzEMcL",
  "key6": "62zpHXbmUUkYBPLMRDAbxWxoVoiNxzcz9DbPwVMPXBssh1PHVQSuBeyP7FE4EUcgCLNpoUh7NsmZFx3odDVXNszY",
  "key7": "5vLrniP1KBjVsQhAw8dArR2smq3jcxHB658ninf97kHBZuNnwxMYVNrnSHzEddvh7V4UxYHaawdV3abXJp1RBQQK",
  "key8": "2dmCpfo8Eq9Nu7drqUQ5ABrvhe13fwDE7Cw6cwsAruxbvKit6xLBYbKzNC9Kvb51mpZRoN1mTucCQBTjC1A1V4p1",
  "key9": "2Zho2qMZWSMX2jTSQu3fNn6gugDDgt5o2yZPzAjiExwqgPfDHNueqVQ6LpKjRcFtPBksPjjCyHYjZpK5Vu9YreGL",
  "key10": "5Lu5qEy9AfYbRYnmaDbSGFxZCQgz3CqVP4imjETWYMDC8SYYWAWPca7CyiHTGA9x4mpgjfmHFwftGKZdC2waVnjg",
  "key11": "3LSRUNhFcyfUaTike3xxEqHpPYfpbRQ2uFM3ctgQrsHSpX5Jz858F9zdXewRZxqZJv5FTjW18NeKALFKEEKZb735",
  "key12": "LiW3BUmZj126KgGomMMxcBiTB7CioEygQd1qvwvVqy1Ds6XeZPimgX9hj4fnSmnu3cNScTXzX79ytwiT6q3idA9",
  "key13": "7DNBQUaucqddHkMooJktGzaQvsfUhqmWDmXveMvBk8F8wzvkF2KnucWAb8bkfAZQsbxNjT6GJGj7sNHKTwCjQDh",
  "key14": "4jRPkrLtBZkrexSKmfifXukzXzoxZjD1ufMKkQwF1EMehWf7mZ84i18DALZ7CUD3F6AfvYLbsRpKhMsfrJG4JKow",
  "key15": "rBLg8yJUovRT8jsGP8h7vv4Q2H6tVoCYfozY5VZ7EMCJ2gfjcEGCmo8pmDWPEdGUTu6fSLsTnVYhMz6uPyd63W2",
  "key16": "4g1BwTqKFreQfYUoMMMr1w3NCBbP47gXi8kaEVcxKP2DUxBXPHc7Ag7sLaLPTQznVa9szBYToWgZd1KatzQxxnvn",
  "key17": "CcXbkxwZHCrPVHjjmexH27JkBL23KXWrwBcV1rTLjtgeNpfgfRTWSry6LVBWSbh9sxgCKK5MzMc3tkeovMFrfx3",
  "key18": "5A7HE6cwfyB8zay9Rxg6UiRAgD54RWDKPtbphfn1hVQxUKwryK8HuGnZTPXNRquNbZMEY8sqeNrd9x8bD7Ftrc9u",
  "key19": "5YYZYrwLK8rsna1fwgM1FzFGpJm9aBCrUdAERKb1fjXbRycjfHcy5EJAWL95iZJiLEWFQJtYf378Qx27uwKDbPTc",
  "key20": "2PQ898VmiD5ieAtzq1W7EpoTSCdvpguZh9wzpMqrz7jLr6xbs9cMELM9Ggai21tgF219zsowqbDkLCaoZxmrDRHR",
  "key21": "3wYg4WKvaqS8JDbN79WsBot2XKfnR6fwX2ba3YGsQCqq3KwQ8VkfC46o2o5FntfjDHnDFTnFnxsYRRcxxCMbbbZ6",
  "key22": "3QSg34qkYH3ZUtFFBvqCiNsVgJ6KScrSLM33m9QXFLgkDWgEki5fsemPit5e1YDATCEh8Rx8mmL4NTveptHpjNXC",
  "key23": "KxfBtvqzcd26ZcJu1Ddm6vbpNZbFoG5frL8CX1StVjmjDSHQrkL5soukHAeztAytB8h9jBhWr4L7PFJhjpwhkw9",
  "key24": "3gYzRhK7JDrSW6hrkJpZSFepJrUpwhXJcsqNwsYFSFvXCSCGcFpQKkYZ7AgV3syzQorha6KjGUXYfgFVKr8PoVVV",
  "key25": "UMoNwpmWwszBVLKVk3QrGx6312hRfxzPy33fXBeR7ZgUypieEsLwqswjMV4UZ19zsTiKDYim6nNFEwRN2DmQ19N",
  "key26": "4w7YQJRL7BPWNihNR6fVjp64a6zqf9vFcWjvpM56JM838gnArSnoTpefYwKN6jGvdSTPY5oRZCWV2AHErgQ278Xz",
  "key27": "2S7ads8uihKHu3KKhCfu885AB1PWSoTAFh9tRnt2tdyVvL63xBmaofNVrto3K9TNnKPRBCjF9xG33i8TxF4dtJ1C",
  "key28": "5P4B8Y79YWf7nsNZeN9YJCmzZfgg3ctVLoBzY2ChQhKgQkMvCpSXGHcnf4DNb6YrxVuy3wteybGtd1bBmu17w17v",
  "key29": "3ypWtVRXj91whvmvhU5Yqc6yb5umbzAoyJLxazoMXLWYGKnJcRzNWkZ9Ep1XsQzrj6gnSdMHYh8fFqE9dbddqHAG",
  "key30": "4kZFbdYmYtpGvWDeTv2jWAXMbrRWgbn8mCWLAjCNcAjjVZZqUgEgAJFz6incFKqmS7FGhNMSGow68n7w9Z9ciZ9a",
  "key31": "2EiNxExtKk2nzgdZne8dUDryjJGjWYVSNUbX8d9JXSHVisCSXkL1xYWuEHDKC1496TQY7KMs1jLBCMrDe35kaHgc",
  "key32": "66nK5YBtyvb8EeGpXXkMtFLHLUtmrRE8GDT76SU68RU8mwEKn4Z49VQtx183WwnKDFVsenZv5zm8YZusjnrNoNHk",
  "key33": "5b5zN8NAjVsho3ReFFutmJuiNcZ7dqpmcNCztbxUD5FjcnpiRojGieJXUP9f5ja9WbjqHjoJr16tpUZKg89yKxg4",
  "key34": "3goaJd84VhioXBM1dtBrdFeuPWKJyXnjggmpuTtvE7s25aYj1mCh5URDs5fybwGUfxketQpPA8JM7seSN4rc1E6M",
  "key35": "4815NcnxqG13jYkcm1XQFNN7ssnhuDSNpjgvJ69SWJh982h62Hm7mqLXUMzjxsxDcwh7AjyW9LTZ44D6bBc4Byc4",
  "key36": "4k7nPNPM87VyuHih54Y2aJHFwSAE26Y7SGdrnsJN7UNSs7LQDxFgadMFqzErdmH551kWng9uUPvof7NTX3sypQJB"
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
