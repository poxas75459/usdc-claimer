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
    "4PGD9J4GkCAxqxze78GQEGDGPSfoEXB2X5YaFpjN7DefucFZwmkbMnBtBiH3ubHMPo88B5bAfsxtS7NtSiomz5GZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sjRpeME7Zg7bj7TJ3YdefjKrwVE57FbEM2Z8F6XUk5DhFWKtPeKwNG5jBULdyUcesqvPKfD7PkahU7yX9AHwshd",
  "key1": "5h4FmfidtHbGpYtVSRkAy94D5mvzNe6M7oWZ5iLp35gGo7DjgsXz3mzdbiitPvry33VtLXSMy124ADm7HyhNCDZ8",
  "key2": "4SAaaG5cEhew5RZxmUhPG6tKc3LVpWiYi5sxooEj6V6v2vQjR3Cp49AZbaFiAkNzhDSjTqJedVxZYVacERPZPxJo",
  "key3": "4GszecspMYK5sKsi1QmmkqXNRBhQEGRiFF95qX8dgDNm1tEkUZ9L4Uc7V5Wu6ZdniRDDLCBT76bTtMovWsaQey5",
  "key4": "3h6hxXqU3tdfwzaQCQEcQPorUUx4CtaY38TkMQDux5uWRbzSFxhyC7wgMAnoWKF1VUkKQF4AgbjiUhobgqBCwu9b",
  "key5": "Jrx2ARmkv38muVXqup39UPdSPumjzbXGjnaZMZV4ho2cHY7wiGCnBsQ7wFVPEmqQLJWSUnoRXMwcAgAFUhtGXSR",
  "key6": "5iSyB5njHsn3nubd7ygvkQ7mTDBKbMLngNaq8MauqS63wJpKaygJusd9keZqUQGHc85WzBjoeqpB7iA3K1j899b1",
  "key7": "34WKU7c6pMnuowdyXMTqhTBoq3rZD3A276Vj2LQZNpGyF6GAekvKusZuZ9BpeBLERjwwMdgodTpa726B7CV6wv5J",
  "key8": "2UxC1s3zSsiA8umCJcB24nRnJA6gnXQaGWGib68QuTWrVXcQH9N6dHGVPvzpgiBNepTTZD78XFGQ2awyRAcZ9ao6",
  "key9": "5q5ibHdY5uGtWsrVQ8SjDR1Gf4D8gV3gqErEeSQWEFj7Arv7SweWRf4DY3dtXBN3NFWqSAfFN1xqH6cn4vGBcH8T",
  "key10": "5csNwgjKbn9ka4xUqFYci6saoSWsm3aCQxj3Gv88fVeYHqeQzP3MjsAkZKxLtJZP1qKFWPuMsYiTZUeLa5ANftci",
  "key11": "4pjJdZ4C2LqqJghSkGy8CVXsEyC7HMTuNbwTk8pX5dZuM5SaXb3j8f75beFqWDVSzMq8sfq5qCkPDqA9jXepay4e",
  "key12": "5hJXjGhDihYJ3DTGDmzhkGukXbz18F14Z6q1pXTqki47Uyk1yGHPzSeRCekt9mq59Thv8mCGTWbnoYJsw6XyP72T",
  "key13": "5jwMmpdQKb69ed6jh9F8gVcp9BDQt7vskoSFnNz3FJVPApKys57JLzxM6pfxRVu1RUb5bZnH1N2drwcqxrY5mY9Z",
  "key14": "5DFESKFpvt5jvXivJWobUStpW3hauAGkonPLfzTTcz4RWmk24gTonrpHtm59PcWTaNSM8NzZGAKGW9KnUPbHdGiF",
  "key15": "3JG871iU4sXihgjXm8Z8z357yjMrkSBkGXvYXV3aH88mDyzuNpTUfozjybMV2fbhcSJCZXgVyixym1EEv8qptGpF",
  "key16": "2PkX7saaztWd8xEe9oxiApN4eDWNd5PQAmXfhmbuJpGJbprcm4NjUsEvKwqgwktqdFwWy39eVmqRPY3FWC7gha3d",
  "key17": "53KJpHVmym6xQYQYqrysAWDX1sMrLRHtf3GPFcMVjEt72WqJ5Dy286JjgQxxR2X9M13QXENx7Yic2yL5zX1A2iez",
  "key18": "5GvhPx4ehr6mnZp1DP7Pyxo49nzPVtJxTTHBZXbPw9yFpzGhe15cJh31KQtfU2nbD7u2aojmypFaHH4KawjUfvpD",
  "key19": "49M2GFytLPnvR8GAFK3YmA9qKL2fqczZWPz7bhMCWUcrS61UP6nqVN79ocqXFk6o7XzfikwMRvsWSevwCouAqvkT",
  "key20": "hUtCmXDzCVjsGSYnrwqKKpUBKQcKo3gxp7aZE2JGDoyx92qVw9WSDctDnU9uVUAQJHSpBHZ6BAgArjSurrKpcFr",
  "key21": "KZGBJWCRirXbcerD9BbFStsRiw59zQfHdZNgzKNo2vsBEZH3r45uJBeoZof6eVFXizWNDJPwc6rNT9BnxoU7GEg",
  "key22": "3fGQmupvy3Z4pv9cT1kbhNEyW5wtsrSeqoor5Cq1oPMTjiWmFUfHHx72vDRvxPubPZnHMAwMyY7mY8HMf8j6JQRZ",
  "key23": "44nk2aN9AJ4TLXcW5Uv3J2aJKp8Ua15GCUKCJsniN1nV6fpaQa3a9X5WJpEGi5MLMdhwL8gdDZyjYdd7ZvmhGBCc",
  "key24": "4Rig1ZzpPC1ikp5Fx8baaERuCrtWihCPDz9XG8QWEokfFDhjrEpgaQmfDihhivGHXiMsM8eLBrnZwBFYt1ZuoeTs",
  "key25": "2dd8LnDQYsZBzLvqSjHDmu6GdQdrXMifJMDqGTgXAJwHbDxeG4V6kFLqK5SV8yZApDqJAkUFmVR9vPG2vheg21DM",
  "key26": "4FoH2XTA9zEdrRQaRBHhSabhhVDMdQWts9XDSDL8uLvoAL6k7LiiGuTdJbcYz2VhvapodQaNpbEpfUD7xQHvvt5e",
  "key27": "NPypuiQAQz8gWUnd7ymTVrzet4xzz9hfLSvTTaguN6PVZHv6BbNT3V4AqPHPFFkipHrnDwPXRJvC7AZEx7AYVzr",
  "key28": "396gq7QiAQqsk6q8Hx1Lrf6kJkPCfcQw9ZiYYzYqa9nK8RZddbnwUC4Bcy7S9NU9FVTQGoyKa3uaUNU4RoTT2gh1",
  "key29": "3n27729sCUTcQKvq22Xo3YM3vQrQ4MVunqnfrtZwswaH2sVaGx5AXMna7ANn6HVdddQKg3aG2DujJpuJhu2KoQ4d",
  "key30": "47rnKwuSHKcGn9VcZFJn3KZRJxCihwN7ayFAQqDjsi1skU7P6o8pGyGhWmL1uycMxVydKE5fC5uKJhzXuc5ZsBp4",
  "key31": "2xEqC7NsoKR1QsSi9DDpWwXQRCVYjoANBq4JBfgAZTRRxoZmUFVL9NYsiz1fXFuxnppkacVKKr8vkyxGDTCZHuqr",
  "key32": "FgH9iXKzZ15sTJrLcGXR2fn3U7ZZpdbPofMUvxMHkdntdanVdykQpka4ZoJzsXcpo5XL35BcJuvC8XVeXba6qbw",
  "key33": "cXushwvGuWsKcvMvXnb4s2xk8826Nj9j8wE77E5tbj7bqh9v3tszqCFeN46iiKvpxYDx6uKXpm1CdUTJZH4952P",
  "key34": "3dnpSZfuL3og8rDYTjeFnRPr6zcAnbwpWzQUgN5L31ugh5FDjWqSexfhW42bA27NZm48S4kdw51AroU2SjoSFQWa",
  "key35": "3MeyCGFguXeg56qfaUYRgBSEPc8vvFDACoCuqB6h8mHtemzXSsJYNHj2BioeD4NaEp1ZvX4JDrhPcKMYh9esaPvT",
  "key36": "4JGjRKSFy2uHYM98HcEA6ZQ5h3FR2FMFEeTs62tL6CcDw6Jxhc9PH2SoPsKWmGDve4LgSDc698ZfvKyRs9uAbhab",
  "key37": "41hZF8XhdtxTtD7oFbXrUyTVAgxAVoMEbFCThAgQCswzNMtczphfFS6fK21gX8jNcoSD1RbnzkTDKMEVSo9nAxC6",
  "key38": "2A9cMncJvPbkjuwVBNrH1s1UhmLMdirav3fTRLrkfKdURiDEyZkz28GQCz7d7TFkQevKdzapqvVamQMajRDSvg1w"
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
