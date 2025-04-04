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
    "5Zip1fFhLDBhCwJfMc6KkEyNKMzczaUQx1YHoqmcfeJUn5ZmUB9xm1Swz7uHobSrGzfGevr6KDjMPNxb5nqU1W45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S7aXQQUCgTFfYFnNiACzb7fiCpcD8Fr9agMsCtfjemmXA2SH5sHTwGjsJ6cSVKp2S4q83J97CVdyRpbZRxFa1qv",
  "key1": "2tkggeCB8SVLBxEQ78NncXomyXdCD2riVfYPRH8FMhnGxe2LBswxgR3j74NNFBas1hSHkcnFwTqNVMcs6yUeK75t",
  "key2": "QZZSQtYxTzjbfd27vUjBuXXMvrmCXJgB5fk27ZK3QmCnxUcK7WashGTYqepFgLCxsbcKmeSL93BfPoRXb7A7YHj",
  "key3": "QftCdfQegXjBEvE1xQrSHJpY6e2MwrWbf5TpPbARqhG7yHtDVU4fBATrRqXr4YGyj3gMT5Miz7HtZ6XraLfjnvv",
  "key4": "x9eHqZa1ivggizhimkd5ekPsHXDyKDXFBfev5xjtofHMegMmAs51aqc3QreRmPQPeWdo76BGwevuf2pJDrW3GtJ",
  "key5": "249Z2xkW2bLU8R17DxZFTZRjk6FcBTzPqTSJ2jpmGg1pMxPmLWQcS7YbnUzxE8RrAYTtiMEwSofC4fRYqUvbTENA",
  "key6": "3bEdw1PSjpXadfzm3cR9MwpMAttRNw5cbf7NrhqadM3cQfXAHMMtt3FYfQiELn6JYmo8fmPq5Q7nx5JYeuY1GK75",
  "key7": "4j86UsgHqakbJvYoKGs3Yzth3mw6prDkt9kfAUpzcVack269sVxGNKTkLcnU6R67LDMqCC1xP3wFsiHdEPE8EegL",
  "key8": "pALgCEjtJVLVMPftXBCyeL8YgS9uRp7jZRUv9c35ab3Umfn6RKwNgX8R3nUNELUbk1pHa1yMdScmnuX9up3Z7iP",
  "key9": "5gsXwZDjfqtPxUJhV6CdaZF2wLnAWkqxrowD7PiLy7d82eMfXZNjJQAKHBrCktEtydNfjBjRMmqZkwKx3nxLLBuY",
  "key10": "2rRpBNojs2ACRxttBeVuoKBjXwpwWbKBJe2sa5mykPwaUbYzvYMjeoGMfHkJZYrP6qmDXhF2rFwfrimwDUhBbe7y",
  "key11": "29oNGqE1HbHGp7e9JuAnscBfiroj1ahuxDEiyv76CaoVf3E59WKJnJz5BT55iFFqYHa1jkUBCmM9U37neU1YSKfY",
  "key12": "ehDGTMsDsuL4936F21ozJ8NtDGrmYg6GzLmbYmR5npgz8GvySPWJYDK6jRSDfm35c41fVSj3u7416E4ierVJfBh",
  "key13": "7qiYftw7kBES22FMoAfpsYX8w8tpRJBKYWUfmSLmTbWKaZi1tWKy9XcBkXkKEigvcLc4sPsRrCxcDUsukcACTrJ",
  "key14": "SE6RbUhYfY1NWj9RsGUJVhm1LPxyW9HyxnNzZM1dL9CBe8redpd2DCA5qUBckoG138u77M43KVTL1vogSYX3kei",
  "key15": "58YXdAFAiE9eFKFLVYkZ1NP2TmbyaKVTcjryzdDCRJ35Az4V5VDapU4w42XjPgS6ejXGrKSsutWcDCYqqkVp47aH",
  "key16": "28W5uENzhtVuasoWqsg8v4PoJbcKx3kDwpRZYaqCBTVHSXspZjWRJWXnLTVNs7rrG2j2PUzHY3X2PyEbh7mZ3uub",
  "key17": "3KXhyY2FZd1X8aaWq3omDFREPuciXUWXYCW9h6KBf3XN8r962hqAurvu5ocSeZEbYUabhiafbC2hzBHB5uYY3Lyb",
  "key18": "iuatVerSGDK1cJq3oyHpCamWMndLSmnKVqx7tTZX1kyDGML1teo1zbZZJbPb8BTr6ZFpCuYtC39e4GTejm87zJX",
  "key19": "vgkVpUzUKYti3BHGAEgdc4P5TsFYJq2Th1HWuzqkVoAGA2TtNK15FHBypwWgE13JhG1t7TnfntawrQ682kCJ71W",
  "key20": "2YmXVEsMPTfsiHuSU4Qr2dErFSpVux4KgfQdtBVNSnkNVFHrM7hsRZwdWqVqEZDKoYKhdF2GcYxrVQ844JSsgMj4",
  "key21": "2p2iSq8T66jzMa8ngZjZ5DkSTExNjd7FPLPxiA2E7DLo78jnCejSA1msDc1p6zLcbdYZafhw5u2ie6efpSkEGcRt",
  "key22": "55Qovtngwo4RwTuJqr6Byb6WckQuKbXv37kk8buimhHFq3tnSM4yBZDY4SKobzf1HcEz52GR9PP8EfzBRi9fVBx9",
  "key23": "4Tnt3JsR8S9ULpg6CsGjzgSWfPRRsfSWm9SkqtLwXgNkFkFuE8uWPsUdnhi7aSMDqpLDaAzBJbjHYai3MVm9K2Sb",
  "key24": "4b4WvCyyhQXXuJi9vUJXTWC4JcmEkkf6PHmQxgqN7ZbkNWkD5VsD2ki1EaWV8ejxKFsMHN5wwtfovyjnN3eqmE4i",
  "key25": "5byDyejfvrc8KAXLMZyUEAz72MtVzj3H1dEjZB1NwwECsetfFPedUfJNh6PJxNKKQexcdYgpV4emkkhckjosWqGy",
  "key26": "3oRw8GgcZLH6sz1iuupSAzhP7VuPbFVtjXjfdmMEc1BEBcVSRNLvUmJUWH9VRNBUy3eBQq6ZGhkkX92yNn8f9v8B",
  "key27": "A7E3aYZpMV9Whegc1fts9CGY6tyzfF3QWowFB7jP9QzwUMwq2BPcWScahzyN57e5xTRhJjS6CNQRhDD6pdmrsai",
  "key28": "2caAXaaTPXxtc6gYTonVpvy6e27E4zYgrVvqfwGthNWS7JPhV1556QR8ANfrdWzPTtcwW7fy2CTK3t4F5LETMduk"
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
