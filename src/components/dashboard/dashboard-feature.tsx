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
    "5kL4AbjH26RExWevw6fJw9bfJNZitLnDNb7BKfJ5hKgvuamk7uxWhwgr1SRzXHHdhKZwUAQC1uEQp1uuZu6jNPMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sNdRLPUAeE6f6mVK9gSoAfkyyhR48sdFxrkJ7v5TAsf1CGDnrigBaMJmBqJQCjAzx91nmzdVoocdzA3CcAntXXp",
  "key1": "21ZUeVSYSAScDhdh4v3cqUQjc3Kk78e47KMxwdQBU8aLPrrQp5Mur1airpbGipatbf7fmoARvSHahTRv14CKcWpB",
  "key2": "4fDL86RCtFzUiYixVNnbxheH5C6dr3hG66YCKKnmqQqBQktd1NksqUy6mHaSbiEm7HSMrcdGmjFQMmq5QLcwWYC2",
  "key3": "3oWAwmtbgnFSNiNESPqpf8TuMDUbt6JXg7N7DYKuxUVc4XUhcDCHzYvx6nrcYQTTWutYhCn36c9jPaW5HH2c2n7M",
  "key4": "VqNDnHzuLmb9T14MRuxRPr1RAvT1h3PnkboNv7zJmktSYAuCuDeuANHrWZnnnC75goLrCbnqAx3VANff1PNPrAp",
  "key5": "4nLco16DGxwgut56rZJVNw14cv2mxwoU57ikJEbNRbtRAkbaBwt27JzoFCiE6UA83J26YQDAzbuo5DskT2TFJ6nT",
  "key6": "4LpyEQ5H6FLcHZvZHBeeq52L27upxLeAUuj1cudwSy7Ea7V5p75hBXsVLJUEvRTd4RrGLUikNPoCbEdnFK42dPMY",
  "key7": "5gUhAGDeKFUTWA2CzD4YRbXj7z1MyqT84PX27tcRncsn2gBuSuotw2EbKvTZyA6L1PDhVdikLZXiRzpvejNXBEha",
  "key8": "4zcr9StSDzfeKirQwU7eZ9UJPD4NcCe3iBrnt4r9pEqihjGX4Tfp2f8FyGSL3CWS1an1qwpxFXgJ8h99sAGbCHJ2",
  "key9": "5ad6Tczb7h5Nnov6W96N27GZqBquDcrvyDH5VD5ibqxqRXL7xKZTMEjzZsnFUh8fKVJ7L4tSnijCGtxogyTPdE22",
  "key10": "3DGDdbMvERZ9PSZAXJu9vLeadwtUTcWYjJz7bKAUyfdFGpef7bvUXbCEAikkUSBfYBge4FY4dhz5pdNEQCgNTSb9",
  "key11": "4wuqg6bznokT8SdEG54Qm4ycbKs7e3gL6zeFG7T59GPWpyCErzJX5uEMs57J6GproLfDQ2vrpWiLqweDkvSqGVsh",
  "key12": "2GA4iGGuxWdx4gMRYmKFgkJfCce5a4z3qKFtcNzNDzq8jRaoDgy34UzPxaqkXMXdMqSAavYWp6ETafWV2M7dUt6V",
  "key13": "3ejKvggoxDt6W92Nd9x4EJrxF9ax45BNk6fjiA85eHzfmBdmkq2zdHnSdeCTLJmL9cPuC1uYZDnhFbFAtHj4YG7A",
  "key14": "4gsydDQRwK1zjBLWVCTtnY9GHuk7s3G3ypNsrhFrKAF4pnVNedZGmQLPBB6RGPrSyxWKCB3N79kAmoKQoCFqgsaH",
  "key15": "4CmGYGDquisP1yY2PY4yrRgisUp8MFS14JGV3FgNp1v949QQSX53FJaM7aYmfhQ7faygyKrjH3U8ZqPaCTcEdyga",
  "key16": "5dWzipVfGrK8wjHARNTUdq9VAMiG4c9Wa8JyfqD6u4tFoXvjyVa9SwMCRzPXsp1oToW6oeqTYAeBbVQHXTzzqYzB",
  "key17": "4ygMk8C2FTDpUWHLAF4shAhRggTcPQcVmAZnz5s9ySypUPSfr267vPdep2o4Eu5wyMDMGsUQC8J94UXVtCwGPkZK",
  "key18": "iLDnyJPBxK74qFybDSQdZKz9SKGh9osDfaTJ2Bb18NSYL3FrSk8C3sG1m5XeBnJ3UPN8MWf6ZT5wjjpHhQLeJ2G",
  "key19": "33SQjqYqSj15q8dyDx6GcDCk7c7Yew974NQEhd7tajdYXwmCcyyRtLUaqwAXzRV4sBEYWKSE8nPTxpzNcRRCJ1WP",
  "key20": "3tXoMwMXFk4BA9YQcr3WVkZC8H1mGvVYPvTZJLq64Evdf73sRALzbC15zSw6peG4vwkuxoiJzM7QJmDk2rKNKbTL",
  "key21": "5yiV8Qj2SHsG6jHVeS3wgaqoKeLZ7Wf4DbHjGv4ANDfVsWLwow9tDUJZb5WeN7xE3iWCPvNrakrj2M1nU5QS1XQg",
  "key22": "2hyfpBWKUdeRGahvdEyHd5DuhpvRD5NEJz6UKSVzxKYZd3SRJXBFFecQo2ejX9EFwANuMV9NNTmvH7NE2RA8aa7U",
  "key23": "24phH5G3s4xPTh4uJwABGQVxKecoFahAdcjrMv6Y5FvrYuyZXfL5qBNxndJQ5KcDtngDmCmUshwHCueBihMHMqGv",
  "key24": "4CJEpVfYHD4r9ySd9dcx9YSRzwA4tjGRrTBy7q8hfU76V9CieEfws7QW1HX5DThBwxSj5pJKuWapq5xczeBMAtju",
  "key25": "2gUb3VJGTK8aR7fZHL1eTgReEa46GmW6WsMUhuXennUmDL8fk6LvAhsygLhcuonyVQY3P9z9TCS9kjnf3i8z1hES",
  "key26": "4EVD5U1Y4hS3VsbfAPji1yyVoU9SuZM8aSKHbkwsuhbJdDoNoeTqc3t19xusWUqv5piY26jza2k5MMLxLtgXvCiX"
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
