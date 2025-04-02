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
    "5d3Dz5c29j2g8JrurckvBFqsRwj54qQbbuqrMK5hmCGLTJaNLGpjbZM3jeEXvc3qqfCfZ1vSSAGBspah6tBBeiZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JzknQLcXk6688iBjjQZCrnNz8ALz4qEjqyPJkvU3LwtLn9Neo8ygv1FmBbYaBTrQsRUUBSsWaGGGYK6GHmQL5Md",
  "key1": "2AsbuarniqLw5ZbAPLL4qiqx1VqC85QHn5fnFjAHkRayvMQFj2mUG4QFXa7gGAx24dHPujfbkearsiAngPXStNDm",
  "key2": "4CTTDnuXpESJDYg54RZroiEktpQVphqtmt64QnHJg7SBiL2skHHSRXGppiMTqvynQoVWZeMSa4UGfH4eK9xbutUm",
  "key3": "5hgyygBXLuTwdGeDhYQtviVpketqLAgbZt3cFvVytYRWZWJyRweqSt871kA47ahUSUDsCcWPZjf6bv7XCPfgfmz3",
  "key4": "5edoG3YpsK6vsGaCe8dJ35eNXriYEQRq53uMcPDRNPxwnD29DfX1CpYqc5JkoyTKNeyM63kVfExiNgmmgC3rYTVD",
  "key5": "2KEjTy2peSedxGite7H4dH794KWrMAHTTSPK8faT3HeVoXLQ8rdnrSXDsB9ChDaYMezUkfvQ1fLR1WVmKr5AEZfZ",
  "key6": "5XkUHcSHMbg2GvKm729PH2NdvXPoS9ZyHDehX7T9y9caATPjdqWe8cvySXkSVd1cwK3ynX5Cbh9gzj3kbtH3424j",
  "key7": "3Jg6g8bMzqcCensEPZc14jW56gcrKoGnVjj2oHMvPWn3cgnfhXfoX8aeEAuwPdLuGmJc6htY4GftPUxpXLEXqed2",
  "key8": "5cdVr5Re5ea3HHrEv9T7EhyMkFjQrkRaZSGEQby2jne6yxW5kvKeN7JhLYYbzbCahzUF86P5e6VFUDygZLipPEN8",
  "key9": "3bSCrFJRytUffKiZzLCNCMwTtH6kuM5hASgBW2BGNBitSXnwR61njkE6KqHDfsEzuhghybWq1uqd8Z3YEgesEkXx",
  "key10": "22Y6xLYxvph47bc53mRTqx8SFqa9quZYYeHiQWHxhdPj9fsDU9BiwRMocT2p4bsqERFMuQUEqyYcrZUzbcGx8o3z",
  "key11": "4Wr5h4G3Z45f7aciSexiU717yZ6SUjgP36bmnBLC69PxYZAANj6MLWW3zjGFVfbTWqxgptShadTNMk2BrfQ1EpaU",
  "key12": "2efYq4PX5iv8Eimc11GATEJ5DkDLEmnMCsoVTGX4yqEcWe7fab9ydNy11dCSstB5J62wAzgW6Rd2zmmNfH4nWfgP",
  "key13": "2R6UaDCy8fAEeGZ6ieXCnPM5s7UkjfQLDoroTo4KuT9HC1fZEs6L3t3nZCV1eLhcdrhAXoE2uYAa6MgiYFfR8gXi",
  "key14": "23dEGw3afCdFpDiJ4ABdBRivMfQ1XKXgjpS4qtkaQYvH17NnUi1M1jHwtWa9Z7D7m68yAw4daKJxxrDHj7w1K11x",
  "key15": "3gW2GdxF4qKWej8oiJLo9kD3m4gjTEbow3RuhoW2zFGtNUBEhPmkftiSbFd95Wx34b7BMXdN3gaPBAucKkbvBuDt",
  "key16": "dLnYKVK1J4y3TFaYMVWz3mxqpyVtjjXr23HHLB21aTUAmEH4grVyvqaXY2pRXs8bKrwiXbtN1z5kEB6JpVXMybF",
  "key17": "44V3woAiWGo3Zi4h5A7qMuZCnwVZYHZjAtg5ixpiVHLuGEYuQDevrQ4ew6cRzq8LYNkwzbcreTyB3rjt5ZFoUh3",
  "key18": "4m3dq18uQRGZTgQfbAmi6FZbFpghbBDxXvp8eWZDZNC7nFR97vUSBmTTm7Kmsj9pajnPzW6JZyPDLsCCbpMfzS2r",
  "key19": "5s9sJhWviRY26Dp2hNM85nY2NjKMfNmXoEr3qXk6FC3roAEUWbFFuy6cATiHSuGrVt2ShDQP5LUeedSRcHQisW7X",
  "key20": "MnqKpatTsYniBfdTgUZJHcdiHD1Hq3de1EAGJp3fCHN77y8aTbk1VmJT92d6Ry2j3SD3KVkvr7WXPoknQsNghdm",
  "key21": "2D1nfWebMdNcoKYwdCqr184miJP2uqpWqnPbuepCm6mJnP3VXdBdGqrepiXVENbUwAQU8DqEnepYFhn97qR4HxUV",
  "key22": "2Tb19X2D2L9hXXYkxQt8sfUMVEvBQSpCGcwWwpA6U2MnAtjGsNvn5C97NnqQCa8LxDTW85R832ghv5V7Np5LQe4u",
  "key23": "3Dk2JzzDThCLmyEa26WyzMP3HDrf4DQjencdkvCaV7Hje8rySLwYavNvsoKxVBgADehrJPpfP6oivQTfSDDv7HvU",
  "key24": "3x6PM9tjnZv8Zv3JtYqcFg6YopyGJjj4G4DtGp4YZmzetVACfQeQ6HuG4J3Fiysy8jm7iQnbJUqbyDqTpKtP4EmK",
  "key25": "4gTyAUXiwTf4Bvk9c26GjTjmdHfyNq9QJNH6YtPAn2GpzFV2xfJ9MW7Xm7tZSxVifpPzxmtj5WjiRPtTortuZFy6",
  "key26": "3N9MWZK85Etz4XBswkrX79kw738ekZTu8uU4cu3gLURb34uFP8wN3GGvMHP8fEYMYXV1uTUCTgJnzs9PuuawMnjY",
  "key27": "3VwosB6auqz61C1qT3eYm5vQp2GErMLVimXjnXn8i4aQsas7b4Kkd5bik1kKNsAbtNcWuYDRFZb7K27ifUUNg3My",
  "key28": "5q8DeM9q1nrPGySi1NEC2Lbq52Fzqrm8WU4DcCFmWxQDaL64LQ6Bn6cVVcvvYpp6Ce7jC7zaTUnCyWrzLrXf1qTP",
  "key29": "2R8opF3wPrSF5nBN8V5eLbnk5GRwttjmC65R6PnzeCsHswXhJ7tSBua7BTwrLHrkABuosNJ8Yduv7VdXpDFY4NKy",
  "key30": "2mqUSEVW3wfgAANNc7moLs6VAJB5jkwJU3YoUCmPy8cP3YfSrXCKpJiBwWtUEKAS4pB3Spjv1wvSAHwxRDzMJ8nL",
  "key31": "5rNNdLbwiiEhkHnmUrYQkNnFQ3ALBsHRnDutzN7eqsWgEPk1YM7WVf18igGKanNAX7zpk1QA9x4yBLRFfJqvpUUU",
  "key32": "D913yfcrAni8ftXYTgudQpfK5gfQk6SXysXnLmaVANhiiWZgRSZw6RmRym4RWqe79xqkW4HVSMi1Foupg7zjiW8",
  "key33": "UyzvnmCCg8bb8YyNEzYN9HbbZCtNYJSFj1vdTWJHsiF5B9DKtz7qgQKnkFAMhY5MwDunJKB5D9S9wwUz6pQYkN3"
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
