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
    "5gGpQop9XA6MYkU7nPPTdCUqKVV4q6qD5DKPE6z6WyQFtM1t6ZMnwgTEf4LrDg4gQB5eqoaSJ4SmgP11XK8DFNto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "biUh2b7NR7nPAfBX6hPaJ7HwW5pnxd74ZQdmt3V2SjusRwB648YUebo2YKkHYkRyaceroRu7YGXrLztubuTpcYM",
  "key1": "5npVo5k8RM4daYHn78fh59pTseZnYL2CncBYeVUg9K7B2iqK9rvTeajfZpdQFyq437Gkxs8PxxSFMyjqzv3gGo9V",
  "key2": "4vkgh4oLfHEq1mn2HvWqC4HYwCJbQUT7fd7wQ8iPvx3ut3gLRtG2g3FuTXAWodjwRf2DFYuG73hKp6GoxyuUZriK",
  "key3": "5cn1RnHVci72488unwqFU1TSkRUBBKT4Ja1p9cFFWSXLhBiaWa24e4rWKgqH7Lz96aVJ8XYjyV4SK9QsVNum99sZ",
  "key4": "5zSQFJmETC9snFPXMkGGYmuZ5mHJiqmmGqAHtQdVCU4tGV33oV7D7L532H1tw11wXEsV6WkFLd2oUNibsu2MuYRQ",
  "key5": "4xo7mApWD2c6EEZBaRpRc6SX4aVhX8Jwczno4wAgspUZqoVkGB9LmrsgYaVS7ksRz3WACJzQtKeDy1S5DE5wQezA",
  "key6": "4wJ4eNQaKhkKD1NxUxHdEjwRMuwsqWnfTS6ej5zbwHh66oYb9RogBe3KUcFNqJVjsvM7ZZhBUPPusxNig5vs5sWQ",
  "key7": "F5Ay1eq93PtCNPBu64U9tbGfQFXbbk4xgeSFb4DcXeTjUTXrE9V69CPsrMf13Z1KecPb87z1fYwh3FftUoFbUEc",
  "key8": "3Ex4oA7gw4wdmzncTsLa36Wovjd7ZD8PHhWBJMd4ims6vg1dW4SpAi223vwGxnY6fkfUv4GXEVt4NDf4LrETndKB",
  "key9": "42KckLHywZG5LS6rh66M4pnyCcPf9tnYX3RKGhTZzLLoo9hLXPsMQ98tJe64jcFBn13awsjfkJM3Bp96QmQTxHu4",
  "key10": "58CkKFBPkD8vYL1epeh7BQNfL5mLnGG3HTwZFTRYxQYFSuqDU3PPLPEY6UHDYGm4DEkoixNNe7nrzq5Qg1w82MTL",
  "key11": "3nVJBPYe3jBhE5W7tcFVqEcpdFCvmBNiwkJ9UhfmyEmhvFSbXKPFJB7tBFrnVeLqqtgLc5NPyYfnDuHYwRvRN1qf",
  "key12": "5jYt14xtWUaEKPgJCB2YvY361b12dGtUCwy86dMYBTqX62xGCRapxFQDnoSxtScZzAXDVX7SyEcbTgpDcGQ2tzvm",
  "key13": "4Coex36MrDrgecuXckLbEARAYEuPS5E79aJ78snXADUgKRAe6e7GazJVJ1Ue7BqLuRp67zQ4sPXzML6FPMEYQC1s",
  "key14": "M3FRHt5VYDcyDXgLLdp8NYW4huWY8iXNojXk1sDvhGD3znK2GSBjtmqMhXzCBhwtxUz47WSCN3JVFVZaXsEyXrb",
  "key15": "5kEmu5CvthieKPsxuX59pkg92peTTe7ZxoV5uBhz6vKzGG8cJXuSMSRWHCFLNE79DE4fV9rd9Q6ENAYkQnyenWfT",
  "key16": "39CVTJn6C5KVL3F1BZdywMYe9TSZpD2ZHDtyEFjyd85icUekQk1G8Sro6bnqgNHBiCnWtTSjPjqhFf62rKWxiSr4",
  "key17": "3eZXw5XnfeeemQ9pGWoMi8S69CwUsAub6Lrx2dbBd4JFbqrZxJaWLJxi1hXnJt4iGTsGiami8oTq7r7LJEjCCbKC",
  "key18": "5zq93X2pk3cFJm3kuWbtxLs4iQnt6dnLzqtYMW5rYq1sAd69URhMPTxEA5hx8SBNeFhhyDbK1y11qy7GiAhr9wxf",
  "key19": "5y9FEq3HfNxZdtUa93ZAd82VRavkqLKG2CWwCoQtnXES45YfxU7sT4PFPGaAMpKxKUQCmzJZ5yVgdKjRmJyB2tdL",
  "key20": "48ii4vCorh1atuxwMReK9sJZ2mHBxXyX1N8GYBY3KJYmrpFeebxLyp81XxCen3vig9t5ERDFDzwFq7x7FHPTgt37",
  "key21": "3RBmKRgMK6ZE35HjSpwp2AFiEUsgpwy8hoPr3owLQ5mhs9T6XtxvdtiiyZpc5Hmoa3FwSEhx1qJDqCWWVDDtaZqS",
  "key22": "6uaonn3E6GpVgPSfFFiCz4Crrzo7CmEqD6HG69UWFvB7uupCq25pNzQN2AJHe3HsgdTz2Gu82r7uxzBkE5CArTJ",
  "key23": "5sYNxTGoqGfwsQngZC1NfBnssjw5dgBA4XsdwAPQLoAfRKXUeCPkKMKp16mnnaikfrTjZ3y1nTJcXA12sCtRtfRb",
  "key24": "5oehdeRyczwrxJpjR79Fmo1XR4e9qrgMFiNJrmT3dkyQJdgVUpP7WFHNTJ7QFkRfAcnTvZXemQix4GwSunzZMTT3",
  "key25": "44SBENbZAHbkc2yqf97QFfAAqzyHsrGqWd9Qpmgi5aLKdYNEJQJZp8YBiUYY1BLoWbDn6s7J1TnRUchFA9nyK7pe",
  "key26": "28iKRqGDGrtfRKs3As9WKqMvBG8oJmvKjm8PXdJ43ANBUYq2trK9Ptx39ZcSWNW4kBRXWreaApsvzq2bp91Q5aPb",
  "key27": "MvUU9ELF9pYi9qzCUFA41XGb6RyPBCNbazPMTzfGUJWjjY7ekMoxgDV2a5YV9ijeetUSuHEKnr3rXRKuMufCQ5N",
  "key28": "4EjVpu3EzYa4E88eHQ9jkczF8frnuULjipr9GSYRWjqpv1HrR11ntaAKsWSBghorsDiNwVLA8sjJKWZgkehurnGq",
  "key29": "3U5HVz1mWP1HvVgXfidSJXsg2xBR9EJKnJbhLFRTXQHiiZfFQS5kEyZ8VFJ3qtiJAGY8FUyFqReag1NGxvJjjoXq",
  "key30": "5F7MyNRpNrgafEzVb3csWRxR8JjTxeKnQfY1G78RdwjF53YyC7xqvCqyrDRK9GS3Wfi7q7GnDY7S9idx49SXGWDh",
  "key31": "VckqMmf7GmryKYY557WXA58XtqypuNG61dX3TKggi1LShqvsqQotvJYccu1AfhmhZUSdQFPCyos8AhCXzNjPFW8",
  "key32": "5mbTHTDhZCJywNNWRVGJreUZb6vqLJFm7h3mEvzsvwNJ756Nxk4hS4koHdQdPa313vcp5cgzZZrMckAPVxZGJy6N"
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
