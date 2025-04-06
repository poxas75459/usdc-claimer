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
    "35YjMohaXfDQb4jZVaKnEqKWfE1oYbxBYz4upTc8dMu9ThjsdsELyqGEEnywgqEiW3GLBVxBCVcAnmGq73Dcswrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v9KeAUH83SAwshTZ8fYjiivjREePpZj8qbra8uJBoLJx91DL1izYKvxYSZuDEaTnAgQ6gYYmZiPm9vj1YuYYbXL",
  "key1": "46aKqcXqtYgoMNwmJXya9R3MnCsjVrxUFPbQXGDjh9bFAk3JU11DyTvNEgjPi9xWs2DzU4aArgkd5fTYdRMeaxHt",
  "key2": "ixRUPyx69ige1ETALVckypifK9LUkn3ddzQZsu4fbAY6SfNEVCmEB6NfCTvjjQDkUFCrFij8gjMuq7wCUzfaRQh",
  "key3": "5UEccPnPkVU96orVLguxzxAovKgFKtDWHchHwXSoxp8qCDPUF4JtLQef5iqy16x8w6cqC2MdL5UAR5pgcMNyYYyq",
  "key4": "3ZC7MVLAf171v9BZ9wbwW77P6JjGguUNBgpCWTxvEoHNbmQP37PANH8ZtQMzde33f9d2jMk3Hbb2jefxSdJUzcUA",
  "key5": "2wSWVKBHvCjn3th2kSrSRfBCDrhnXHmTJeiXAHEzkezJQTfVS4gG3hXf6cVELEumpGmVtVBMtHgmQoXtk12SPNrb",
  "key6": "4hVbFfU5M76LTj3LeGeQD5JkPvUYEMPZd2XWkkXfK8QE5BCwntiJ9VbQDQkbQbuM4PC8mkP1quPA74dNuBkee7hN",
  "key7": "vqkgqfWHPfGy6JYcYjWzvuNTVStLp9f41KjV44rpD2rA6ZGKC52TSwV8oSqn3JKbxohUzUJhD5hoHu6QG3y9AW5",
  "key8": "2CigjvFXwp6Ta8SvQKQjXyD1XaSoN1T1xStwxjVoY78HuqGabRWyk54uB3Qy1ifaNe5f1Usgyxr6r5dWHBaCbogK",
  "key9": "5KUkkpdnq2GP5NWYqgSmED4YN3G6KNWy6cagX5LDVitKLHSPQC6HCeBDQgdX9bPSa1tnAgSDdqMDPQsTLtc2EyWv",
  "key10": "56UHp7N7G9nU3DkiGQyc2FCo7F7xGDvoTfXvx5tojcWzEaJ7qq3MqpcMxEJkWUcAE76opwNuS8Mdc3aj2wigp2CY",
  "key11": "3cS8uz6LWyJosiJG9peX9KYSTpWgCtdvo9XRiw2t9nonZgitGZvuZDz22M58mQ7u4BHPvnVUBnh2B8oVSmWSxbWc",
  "key12": "3gJ3MsppFe31zg9qsP1HfcUHYTzvZhsoynUxw36kvYycoxtTs1tYkCfU8ryi2zBXaTe7eLBGzG7j6D15Xqb6drcw",
  "key13": "3xE42y5YEzQoAysPuHb7DRsQn3PRbvF8J7r78upXEdZB3RgYzKaYkvugMPnPeMVm5oy9VDUFyhvq5b9X2zdpEccb",
  "key14": "9HjtGSBKrV7mJTsuHNsZBCheKNRY8BjknvB4kTJ77ygEG59RF4MyHTfi65hLtorR3TRLYyHidTS3V31BFyMwdsz",
  "key15": "576hM7hn2WX1Qg9mqwEmr6Hvna5WXT6nq3hfbppSCsPhAE5kvZdYjdQh6rvXysy5AboSRKZEguQSePXXDTpEtHxj",
  "key16": "5snJRCSxyS9ikneDTrMkDQfnNJyD2aALGuKmdnoH63bnnJdDAnx5Pc3SSdQZk6rqiKY2HQTv56DMyU6JQTjJfdPJ",
  "key17": "667h4fRRPhqb3HNHSTRqyHegxdACzTjLmg9V4rwfTL3F7iP91GzM6DqNA5rHEiH2dvocksdQaYoe52jrrihzZwVA",
  "key18": "2fqMXaBeRDbCtAdDQN1y7Y59CQcQt8wCV8PEEPNkJumoKu8ptuzc6thpj32Dyfo3j3rSM3KF26emxrBduNqUKgNy",
  "key19": "tgu97sqPmUR42SQgq6AJtSxWYfThvR6R9TripoopwWq3aq7RcKhdmzybSAoLA3HuSdDRyYNrfiXHBr4tZCW61Rw",
  "key20": "5WmQeH8dxMdTUZYETF8jkYbHLecrzT4GFNiKK5YoVQP86NuMQJNBTvQtuTZa6pNBnAzoKnAujUfkF2jBwKZQMsPG",
  "key21": "4FCacb1fWam8eZ9xniJs4rbzSoa1C12UEn7qLWFebap6ayZ1DVupwUK4KqmQPPM7KNWgdtrKnFXiNchcKtLCiHXE",
  "key22": "53QfQA6yQMpPuLFud7z3kAgj3toHP1JNDT1xP4dYJJnxuX5dWnEEgAK4So9ueV96amYpboECvqCLUNm592Zf1b3B",
  "key23": "3gwfXyjRVoiMsrR66i2hYii14gia1X6TC1cuN7EhoNUmP44zymiaZfwHitwGuy65HSuyiFgHYEqdxja3VCPxyBJ8",
  "key24": "JYn5VAC2ZgD9QnMw8sxp5NiXCrLerq28gzqAi2ZGraaKaEZLwiUmSLPDRtS558sqxYyAKQjVPPiRp4od1UfCBkj"
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
