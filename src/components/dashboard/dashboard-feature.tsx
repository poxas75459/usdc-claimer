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
    "3v4LsuEjBJ8ANYzfbDAe3y3B2AHy8pmpSebpJJAvnpH24ydjCF4RmGegkwrnuF4YgxjU7sJ6TESgXB7jWxW8J9B8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wEXJNxsKD2sY3HCxViHv5sSmct4ujoSyNSEhXEPFffhN2dohpNbk8CK9dthW114bWddYho4wK2GS9JKEAFGGRPz",
  "key1": "yxqxzFgoQ5VzETzCtHJq3C4fB46uzQzkAoXqrSBgAKu7g3udpsZ7jRj9yb1QRa1HeCimFb3UzRD7GKmXLi1Rhau",
  "key2": "2qnjEfbBVjXkEgtbqYUb7SoUbEifhKAtuTRZutxdwQbuubUCm5RCJjRReLspDGc62PWSvgt5b5EVKYP6um8tSVqr",
  "key3": "4Ms8UucJoCpQxu9MKtN5xX5gLAxHiFbpcsyihnBDcUBYTyfyaPHz5QBQzc223Sz4dwuZeS7eeHsQDCyaCqimeSeH",
  "key4": "3MWvwgr8hzgC4Bqh4GdjordhRsJZvUSaidin9gZmRJoasxq7FjZjbwxseCAxjeht3xknoawCSqsJ4MowhYQmiGj1",
  "key5": "2HMYDscL1JBda6iUXBv59uhpE2ZFSJKYzUfyoKoFeCAFd9iEQAx8PhYfSGEemC4dC1i3K7PTEeWGr7FM1qajcHAd",
  "key6": "HGJGWV6MHMZS9kt42o5yAjFYCuX5aQwPQPvhBYXpbag8ujgifFhAbJUAorLDFcyeFCKefC1E9icqjqBVtHnXF7h",
  "key7": "4m9bH1w43yX5XY5wMyK4dfwtsAo4KCfCsuMvs7KFgRDxYqd918wRhsq3WwDgEMD1Kqcq4uRwSryHQXnaEjHac2Uu",
  "key8": "5NvdgrhKPoLpxv4Tsjnwv7k47JxpfhpGTm9KwFtBrKARJujwUgWTDsxfqMWH69HSKJG2MvwYq6TNewbGtFkytT38",
  "key9": "BvnfLVPXkBDrZGo4oeTFE3i9ydCPtVPiNByBvKj2FDZ27Msfue5KQGZqFs66c1iURmDJk8iQFAcCJpkics1hPUG",
  "key10": "wT4rkwsZH87Wbi8jwncLU1NP9U2sLG8VS59NL5RBnU9DT6G1UqiZX7rwAd6R6W1nwkr91kdW3qW5rnC35gboK66",
  "key11": "2Q2MnW7m9CxbgjWrVne3T9cHo3D2LuiWgCw9MENYNKofCthKL9b3KFFRdKR4qsWMmKtu2UUeQgTTswkK4EQcRH1V",
  "key12": "5RCYytjWEjEjhu6WfGnBa3Yj68mqxfH3hkV97w6u7mR83GV6x4VaWq2uQps8oYPGupBLmCkViwLepBxckbuvbvMP",
  "key13": "4gVn3bC2tkkvz7mGVJBtHR6PFVCy26eK2sV36pmyETgmRfHwxxDN978CPnb7FX82u4xpKgxPXdr3CrxGuUoXcAVi",
  "key14": "5mVYsaNu9ospmvTuZH3ybjowdsmu6b4NXyLKh2MiY3ndxJxxdYQkqTeHQopZnGc9ojQYyrwnggULkvuSWYQLqwVn",
  "key15": "125YEXMGNdQybVG6zZTYsZRHvUWFHKrtZmMSnRtg2Tjc8RX5VgC2HnX59dKiGZrcdvazNX2jM7rqpv7hdrzNKtVp",
  "key16": "2TJFsUQ8Vztg5V2V5i5vws7s3JwCcQEoC5CtMDzudKwdoTWivTx7n1YJjPBXFYeXBpwx9qyBDrGusbdFYcD6xVRm",
  "key17": "3sPv2AABFMopkKb51t8LNBwUM7xxyNV9gsrw4y9USyDnwEiAfo6T6cQHTfun6J2dzVuuHJGZCaGdmGgrECtMXPRp",
  "key18": "65Mk5Q3FpFNtKfy1obuDywhCY6ahBQ6nD6tigSiLJvB8pL3BLSLwthBxzVqePZERt2yE3YqLVVTy7JRgZ3hCTitv",
  "key19": "5v6Dg7PFfPeKrbv9xmR4BvJ64HcQyT3FExGUTUHpAwtb1GRHj4cW57kAR2krszQEi7jjAHyyjbLi8ckBpBTT8YKK",
  "key20": "5RjAiuFDuwHE53vfxxcyyV3q19YUTPkDozeGHYLbfd2UEeCWHuwygxyocT6rrK1sj9XD3JpBntH1R3sykSvWMc1",
  "key21": "2dc7GJQRm97Lu883UWTQnNoQ7uRxmsCaYBHkRHzQDWB4VaJKEqeyzAhNoUp2oz2nq4nDbA4vQLYGuHNiLwNw2pvs",
  "key22": "KWMCTbCoKkKsiHEhkvYWDUT5mqvSwXT37Rr2MngGbRv1cVcnyuyXf8B6SGRoia5mPEn7NWR1PnKTaCmCRR3crin",
  "key23": "5Dx9Ajy7YPAQZtQWoxKwUP769EZ9kwSYRaK4Q6GBrDHZ7Mg5TSQARuF1RjByC7gHdxF5xrzowgZHCSMNPDiZPcvE",
  "key24": "5dgQFBConUGTkmvHpsLZzU9D5Gzw1w8JhUZyDn6shSXk74Mss9awqE6FPa6MqdfFWJT4AqfuHjM5V1YMw14Kg7BX",
  "key25": "3VbrUDaCEUqboFVygpajUrXobUCzjcZJadULKHBq9rQynKN54h9tVekVZpf4bkBNH1meUkeS2mfhecTK5GEQ2AcK",
  "key26": "uRb4FSknNMy2nTGA3TxUegdk48CL2QAHCHRET5DbYpjr7rMFB22YZKJqSuRo63BQLvk5vpirfvby5M99Gs9FzFV",
  "key27": "3kuexZ78GDDWn3uQAESoHpJqHqpfBk5VxwaDkPBk6UrjWgqcMbEbBR56YNGknwk56xcmJZJnyB1FHLMgy54c8Fsw",
  "key28": "G7rUUTAuaE3nJBWeJFanGyPsgWhipLuR3iGqRv4BZeJwsvHqRW5Ay2yusFujb8gfzNyYYj7fGsuyRXnCLzuUaNn",
  "key29": "4QU1gbZve11ecj38SikpeK3nAU1ZkcaQYXM5AoJH3g81hsJjwTxN26okNvV52yyRFsFMNZ3pQKRsX5Ua4V3a8GUQ",
  "key30": "51rJacwNW2RdG8Rq6DpM3weRKBmhGkU8VCNKji8SN6NZLWFE5ZVVwjhhEdTbgCvS8tgsvcxLj2S35wANx7CS9emc",
  "key31": "3t3612dTZw7p2s8ZjngnCmXL28ZTK9Vgd8GfzgZYNrSw4btW5TFb4jEtQ8RdLXxU3GSvj3Wt7mwa7G152ZdPWtSn",
  "key32": "3WqEvcWmqWUrQhfCVnXBvTve6QsgwGRrnL3yQFyZ7QqVX6G4TRx8f1Xnw8PodH4q5LFhJEsFmXfPmwcBGeXuKfo9",
  "key33": "124WW3uayrMRaGpsxymG4ATLvR1KNaTsjL5aNG8W3mBWo2sgEs6XmLFFLdCo9fQAMC1x1pt6vvLG6eSUQF2JD27W",
  "key34": "63vXrdsfWo2VDNHJUCUY2B4qo1KUq8L1kgLFbKbPAMS4vBE2KpXdP7kzsmTCwrXwZgY3MYX4evuWpCqa3Ke56Eve",
  "key35": "4AGLYDa4f2gDwsiyi3RqXqpkK7webvmctdkrZjJi7ydqBAhr7CeeEeN44Fy27y8zrDvgF7QwGPYoTzYMKosmgMJt",
  "key36": "2erChgkxjTQWptL7nXANeVaUD55rBmirns7v4h8DLJt7KnzsHBgGkmJupA3jQB4yRp6D1nxQ2mPhcCqbvrRgkYss",
  "key37": "4APMm13egxvpqGRVSWnKmhaEzi1REdBYmPr8aLsA6n3JLaPvkJQN7Sk6ukSfeCLQ8C9St1irmyntxB1LznWVXbzV",
  "key38": "2Tn8YEq8QcWeC5MJPWWqG5LpmJuqUAWZRNYxgqNd9yPJuD5zF1qVRtyWLtWHLodHWC7yiSz6wxQr4XUDQgod11Y5",
  "key39": "2QChUoSMAij6269vbWxxXdUkWT51TEKTYKpJi4oZ7hZsiD7sG4Ge7XHy36261KmDQtUBCfwGTh8YHA7LLEUdkDcB",
  "key40": "4eHapG6R3SNFv1tX2uGEBDJLj3Zs4edLosWDVaSGqBFVghviYC7LXckayz3FPqd7w9CzGUiFyqDHdiyXfY6fxhy1",
  "key41": "KLD4Fk7oCkpKkXEv1h2WVNAR3sTc9cgRaXKSkAGCXAPtZ5cVVjuiKaFTXAwZMuBSZDCCzLfm81uwYBUn5y3hYQY",
  "key42": "3SkmAHtGAqRcWStczViQt8vNEiNYS1fvf4WcP7PdyviA5tH9PQw4Gs5YgSYSRdAJ9NKw8ykFbF8hUTWi3Ck2scsC",
  "key43": "2GjNzZhSvnpmuigms4e4r3V1SX4kqDCus5iZcSqQ12Eby1fwxtrqbDQLZa1xMRbnYum8zECuAnvB1WGFwxBEcvXK"
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
