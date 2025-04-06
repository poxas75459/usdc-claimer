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
    "5AwVugjx8nhEJhnHqgx9u2exxZeiWLwKCGiGsd7nkEUJDPwmkZpncFJfJeHZ1fQ9XBPJkqJxoHLcaeYX8xjP3skk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BR91T8Hffi7z9j9UxdmR51DFy6tjQMQmUzNkvPtvbTpfEX53VQ4AxbZcEkrZELYsqhU4fWUu66VbJCjnhH2Ucx9",
  "key1": "kLMv94md5YFcSSkFQkAbLRXsFF6bhkh7VxtPE29GJspWYEHrJLgVxZdcn49PG42LZZrKjRcXzK6gsY5kdPYcLKY",
  "key2": "5CTJ4Rjr8ohEMQsMXAiZEvsikuFwR85SxNex3GZhmLRBTKyUuJJ6mMW2nFt5WD3vGMs4cwrEFPK486pZWbjgKhwb",
  "key3": "5N5MG77r1XwSJEFuincBBTzTFsjvxcDnipJtDhBJpejBZUuz51rV2pbaBPRjvM5Ygb9vfvGJ54V6EdEC95UJ1nEv",
  "key4": "3rCocbvRoRAKhc8T1N5GJNyUHKgoTKxTwNk3CaAeiKuvC9Btgaz3hbdAP6uiJEaL2cZkNdB92Y4D5BEYwZeQzgb5",
  "key5": "3sQKPPzB6aC3b5CPgR1nPagJadrNt1iooG94PqEyL6D4w4yCCaWp8W6R9MkjUnpwPyHCkp11AYLLYkEDVk9A2KH4",
  "key6": "xFZvAJmb7TGEaLXGvhEdgsriP8bVoTuomd5ETJBmXFs5gVNj4QrS9cbwnXTbs3ar2JTb6iZ65aWKJRzCuKWgU7y",
  "key7": "5hJTvRMsEeBBP2fn2KSWwe6y8gKXV6erCNyrGZAmGjQsYcRGRDEjMgqvq34aYZH8qcLCboi5SN33XjACCAraaQFL",
  "key8": "2gyjD3cazkRCrRfY8yEpjXowMv13dR3FGKDTVTkt4yaNu5TzwtDTcBXSen6PQqDT9XJ7WBQtMW4E2su7bSzTFpKx",
  "key9": "8R4TVaEKMFnRz6Q59iFwXEKbTGHwofetMo9CZep8PBGJPtzy6DE7FFxwrSmWwgJrsVErAZYqkwwnsFnDgWEwtnK",
  "key10": "3kQCHXVW4sHCaRaBodyRcnEjDPcr924S2GmGiCebvj3WKNdxERhSDgUNeVTS7Cfafb6C9PDTHjCB1Pc4zaYP2wZj",
  "key11": "rW3N4XatZb2CHuPKffLRR6J6u5Hnk3ZgRLWY75wVTpmwjh9BQyGygRP179GgAvDHpbWQWXv2fv9HNFZFmdeFDrZ",
  "key12": "2jL3rDJu78QLj7ShvUEkhnDiCgQeSvEDXStiPUtLbcHkoQ8v7365BwAwDP1VuGLvg7EDFK3NdtAayFvcb5qLyFRY",
  "key13": "657p4LHh5VZXgRwgnKKn34pUVeKcVja69f9P6DCgT7ztze3R5Si9wiQrdG5qwYDeoXKrQd9KxevQX8Qt75Zeno6k",
  "key14": "3Fe1NvVMZuyQbrQF4aB5omPacmWbSHXoz3QZ76vznF8SFXwUKHfP3DADzjZrVwEZb4Csif6RmeCGKNEPvAVwNC3P",
  "key15": "3yijMJTJftXhzrh6yqQMMhc7S6Lbf4WV7GB6DsCMHbUNDxrM4maGNBRLHmumURsEMjw48rKZiLpe4iKmayYCPY11",
  "key16": "3g9H4m38RS9hjMYonFPS6G1cttcxFDh8WezG7vN9E1srvh2BtBrHqEzjCLz6b6TLbrQj1yV1DLmtk3XevfqtMKDi",
  "key17": "2v4wh5YvwusJfms1dZtpDcex7z3UgAXke3QWM9jgR1KABkcSQcJgsW9VndvBDDtxhbvSxpqEGbpvWj4orK1G9jBx",
  "key18": "XrTDWhuzZcbTmrbMztRcGTJsAWDyJqnopDKMtFTFMKSn7gm7qqQVrJFYSzmy4ZUdYbT8Dej2B8Y3tRzNFqhWMSW",
  "key19": "5B48X9tGKZgN9jFumzUzWxJ5a7MKwfUWaKYfMsxkgi82oF37KYRnkg3PxBZ5fWoYMkctwztU5BoGJqnQyxGZyJhF",
  "key20": "5Q2wHpa1UvXcRDjchoGGaAW8SLRUbrUsvyJ2n8Yhamn2bTNWaoBc85H7qqVHerjrYN16bkjjcBqhD52ZmBZFMydG",
  "key21": "3KHBmVePbSi3in41EVZ7mM4retV2jqd6vzNRCpkJ2LmXSL5gcfPGjVwfdqKYxV5Yh1xTCaagsLncBRvFoB6rCPRm",
  "key22": "5BTG1NEqHW63t25Wak4Bi31wjDpfy1Av5zaLaX6cDcxob5JQZShCf5UY3T6gkRMR3rFiVDhWfx2ei6fNeBgGw4w5",
  "key23": "3ZMhrMVVoQobZocBG9GhsgNVWZBXggSW8HPGJY4ysKFyxtFF9bChP8AZPv2rPL1QPZsLKLPTrXmesf7ax4frPNzV",
  "key24": "3s7MZZ5uQfShR5Epyx3vW5oGMFAnGNLHmbLbBYZbkER79YGVjGL25KeyrmDXY2BFWTfEoR5LJgywzR8KM5TmHVxk",
  "key25": "4p5SGbKDJgxUuh4KE3W7ALmJjBB6TXx4RhcVqMnMiJdekU7Z5daZ6LE2B7ZsizDwKCE7QjPHxm3zswQg9cJtTEw7",
  "key26": "ZajewaN2JWni28TaE6u4Ww6mpPnvXm5TN6Hes34VznhSNBNk6ENzwBstECMhJ7xv6HWjAgCgTQXdJoE8Wtjene1",
  "key27": "5mzm1J5UNixfmtnWy6TE5g74x5fbXk2nq7ixRDe9zkd56eQgYUMLaaC3yotezPKq4WfQNGwcw2RFvVbVjmjVLQwG",
  "key28": "3M8miZR5UTTacH7tHzSfWNxAJG6HpuEbhkNCKLeqAhEBEqhd4MVVcVgFSTJXaVoYQyqXVG6CbVGJ3iQmNHaqB4S4",
  "key29": "mMwk6Rp2WdPGRNAgznQnvpR4qB1bLdWh1jFJvsueVjYTkWapPGm5nJrY89GfWTcEaWe2eDDg93FNmTWGxrDX2Jo",
  "key30": "2VY7P9h1MMZrGyJoaygKbTkXgfGngx5N8SRgDruPWcrkFgCKkLKs64v93oMzmAHk7MiYQuiprqVJuoHWr46jRnkk",
  "key31": "rvnRzySsWqW1r5W1DZ3cjSNMyBqV4ss1ssgfMPP9wqAEu4JfY9fD7Gbuf62kQN1smiQRHvRtGLto8jdDHYjveoh",
  "key32": "sJSJnHiUsuzhzeRazT4BZHjJaGhY7oBGtAGZwgixxnoXLksqsYzaF2SmkTKv57M4PAE8bh5hPH1Z4QwG58e4dCS"
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
