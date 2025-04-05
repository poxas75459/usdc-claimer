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
    "2FXRj9aAdmAnyB7PkjTLb65tvzBRX51rTdFKZvmSBhoj5bV1FURLRc7UPCJFuUVTExv1jJo9iCHiig6jNgnrQdtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Ju9ptVjoCd7Q4qe5g52Vv8rPAfbQbkJ8DmHPyXornGS8v2BuwRFn6NazGgGcSHRbcs3zDp8VFSgreCZnZFhSt5",
  "key1": "5ZEqecJCBGxrfTFWADy2vbW9PTffsrDR5FcrmNLkPFcySra697E283VrvWQ81QZ5peLmHVLmBFb7iHSCrE1qWxp1",
  "key2": "5pnMQjUQz6cNoQcFNBbwA15bseqAUzWcEpZ7M9NiKpXRTutf1261hmcmuBCcbbgeVWaGyoRLDpMqdUbdGxW2wfYx",
  "key3": "nt3J71btDGDYDziXj4tTybdRkt6t9qsyEtfgrA2JQ23Fu9Cx3uxkYSLPzSTw1QGf1GJnNY9pj4CDhR2KzdGHodG",
  "key4": "2SbZwxhYfrJV8tBrQH4yKHNEDGHDH9KH47wNLw5UJTLBvdHKDFXXXCqcCD99HzHLmofh5omwwSrSEaiEpoLnKF6X",
  "key5": "3z9MJghZyLbvDpPvPsthhJ3TVd8ownZMCP9mhDk9qDVxTg8mmasCsRCAPVpoENgKheTyfmxfK4HJeh7UyGvbkzZ1",
  "key6": "3w3AxwLwiNTvuXsaHxCHA7hmR3NJTBZdJV4KUoftjTCRofuWfq8CtFaFZAomLXJViSdudM59Cxb3oUrqH7Y2iAxV",
  "key7": "3umWkRfNAKpGRFD3UevTDq7fe4H5sHVXJpNceHD9y7Dq62SPkcW3qCAax28FYrkhQe5Q8ffpJHHQQgw2C6ZhU5Gc",
  "key8": "4s75PifWwAmws533MLy3DUvqfS6d3vAVjM84SyyrNTSA8vafVikoBvh7VEriw8ZBDLB6aNNGYkuW6a2ZbGUZkfzW",
  "key9": "3h1FFCgGLYLBMweZWPcrZsC1vCcyiz4M8NSuV5kVvNewzUAJbzo1KcaMv26ena2M2ZSFmn2vX21r9nA3UvQHRTza",
  "key10": "5Efs71fGAg6omXaZo8DBhAHGrhsSgj22DdBwLgkSk56rCmt6zKrBhUceC3CcRSgjX8zdCDaQnX5LUCYcJVonp9C1",
  "key11": "EnzY2mm23mjHxHHCxrEYGJwFwkQ11FLNmNzHGEKPhdYX6Edi92uLTLZKEJerBCeFD53nB2AqfqeQTzw1uEVR37J",
  "key12": "3bXSwTNACxSt34khuMYuyPA9c4TRp2S3xvoxXc6C5cYtnWePgrXhD1HsBEJELRWYvbGxXChF2yR9Lap7ZUmh8A5f",
  "key13": "XgYXCnEZeQ1E2pHyXAHV9QnPsLkbS7hciCw15HzNwG9pBFvfddHknCduRE7bg1ZowVgoZ3dgCcqmv7e56HZjUCF",
  "key14": "3CPuUaaeAwRpEEMvdHLVL7qAbHgukW5dhWP7z7KoU2fZ4F7CxgnjtSrEhG3g7YyYVqXrqFuZJ83vrRApTeiVtgLe",
  "key15": "SNZYNaTqwrLD7xZdW7ndQz1Yf3qp2uoUYeKvXhzpLTjDT2TNLrHLhs2MK66B6F3ALhKaqqgGe5pfTzXRuoT4DTU",
  "key16": "5WiS5MWYhjWus1N1mpfoP9AHUuD1ZFAvg1ASEp3zixNveWCJ9ogdAYh6Ugg7ZAzNtogGsnt5Pc6fFQMome8qZGC9",
  "key17": "4nd4s3QhB4WbLFWBY8NUmuDNMJzPqsMZjzP8Tki7GF93RwrFtCR1NTAy3tpXp1A6x2GjwnqH4NXBuD1VbeQfUbDE",
  "key18": "5D4ujeDYwRHt5bXyZdU3csUkaWQzs3VwWR1iZBZJVsy22Gz7QvrNeFtNf7hZ7WJkrVWECiQeuDCxAVZmVCYFoNne",
  "key19": "3xyAdG6pCwZjo8ByEDt8hY8dx1m7b3Nasp5JBR6rk3DT9G2cKm2uhas3KZioZEwKshwv4JUKyCjBLv2Lq6GSM9S",
  "key20": "36sBxrreMgw8YPE2r2eJSj5QvKA7yQD1zRJ9dgwc8ViQjhAtXzfpcjRCxRaLfRxArumeYbV7W2NRpBkr7mNHwSm9",
  "key21": "5DT9tQ6cLduPy5nxh7S1ceCViseGHiUzSGc5ukJwzmw2SqgqgMFUtNo2bjTa99fMrFfShGgHGMmUhLkaKEfttAQS",
  "key22": "HjvkXumRB6ARwEGm88BnwJ1yLUkxJg8jhuy5GEkxMbCarxyeHtKEvUHSSdRUATnoiYGmxQAN7miffbSPUHDdBDx",
  "key23": "4b4DHAkxEyGK1vDABoKsZzP2pg9YULtzJa9rWz3nNRiMQ5Mfd7ZzfujPFNbd8fgssBuX1Ab81H94cQ5cBKqP8hRG",
  "key24": "gC5eaKS7aUKWHRoTTuQZsjUv5N7khrHpZMi4XN8EcteVyxKZgSBHaQYZQWg53EVvVFmBhtCp3oPQSfgWZmPGGB3"
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
