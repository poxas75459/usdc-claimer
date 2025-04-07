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
    "3k8XNEu7Bfer1TZ8KS7edmoVyHekFfsaPbiSq2Pyoe7CJrb8uanSwYVdyHWG6hH2Mwe467zyze2Qhi91zbWHZCuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hUNouxmpq67CZYVVX2JPzbW95t9RvzWqi6GkKCzXZ4qitivTokbwfCjV8bZLZtfj93AcHh45Nf7YRoNYaAQ1Er5",
  "key1": "127VnpFaHLTXPykqY5UPBf9A7HzfG5zjetNmtC2ybSeRPWAxbTzWQ3gukG35nhh91qKsMbes4jyuj4epFAryMAyu",
  "key2": "5gXfHdTrFcRcMmD8nDjbqvv57c1uVKnFuPX64fe6RifBQ2HTPg871bsnZ7KMNkMdjd1X9EvKCDv784JqWwM5xn6P",
  "key3": "4zLLRzTC1GRzKEe23XowRMXN6qdevQ1F8Cd83cutpjya34EEnaFaQRbxHcNWFhAaMqaQVzJJGagTZULbSPugANS2",
  "key4": "2dLLpj2b12WcmVwNVnc8johFDBdUg3sKkWzzCwWdNnqXP7ZcnWD2rN3ewteNuQ8msKKer49tPdfxMEmrGYBsJhj4",
  "key5": "TcJ9Rmkd9oemAh2gEjHMqjShf7sd1m6FMkPHVp9zu9UppSnrESkw5iUu1PZytScucFXVPcQDEXXjRXm1cF3CpmJ",
  "key6": "yuM7HMDBfj74nVvnoPXeyLzdDvt84aJ6Cs3Ysp17jutxHWfMNfH5cxypvUZK9yoKnH4E5bkqBh8zkHjxGwLRFCm",
  "key7": "4wwimDBmZKtLhbvuYqP4Ni2now9bWaSxW3FkyNoAu2kYGHyj9SqPC2HjgbrdSSbnyiszmryhFnbQbLWDykuVNdeo",
  "key8": "ZBiZTu8Z6867htQePeGk37gRxKtgTGtfiHRaBqGcJoXEwh49XdyNUfLfdDTiff8RAnWXM5cMrHmaU2NesadDbJH",
  "key9": "ziU3ckZnTBp6FBT45fjqobXsAzkeLh7gMf95vNCCJXmrYLZcDfxEj8b59fHr3Mc98VBvu8ce42gWvkfiL4rg7jR",
  "key10": "5hStW3rfrx5arGB3sUMzMdjHk4seFH6uNfZdqDNtLWCBkkMf7yiWrsajgHgV4yLyzEw2xfCQENWj3XGPFLx6ugH7",
  "key11": "3YjVbG5vNVob68FzccNKyKZdudkjfZvEQ7VYYMvNKjX8WV41bmfj8KSNx97cPxgWYKMm5sV7LWK2fFMnKzbDcHaJ",
  "key12": "2Yy6QwQSB8WS9e27EWwBhxL6tpACKoBWtSpQQqrdQjukPBTJJppNRxpdd47Zv8GMdx9pbFYonRmBhE26w7D1HpNx",
  "key13": "2bbU8AmBbKKXEGHAxUBTYmFaEdHD8NBhG8Kgr3oCK5CBLPgULp56KS638LErgDzhvs6WbATNbZBc7MhtdtMhfNKT",
  "key14": "4hwz847HN57uMuvqX4qDx9BrvxGp1z5BHCL1fw8QFGMSGif76UR5WH599oh8mJF3qA9SMZdNMKss9Qzo2c44EBB5",
  "key15": "3kqcNKhzJT1keYXmHTkPydxK7FnZapWCKUDh3RWFTcxVPw3XrbZPLzsXrcXKRssCrTPfTuzb3usaTa9E3dJYmyxz",
  "key16": "2Yk7axkeS6PUDavyeLqagqgJSX24XmbNqJadL1uPE13rxk7UDAjah7sqapfdtwZzZR1VbyizPaUXrU6tmygruCqo",
  "key17": "2pww38SAy3CfL6qJr3MBPTLA4GUMvNVrrggkJrNPA57gRfbWz6gvFZCmFTxD41XjPBmKh4Shn74SZTZugFR3vnv7",
  "key18": "5Kz1i1XyWRTLyRNNHvbkBLbbGuEdjG6jZJBTmMweGVQ5XV8ejCnQajYwe2vMSrnMrrim9bNou4268Vwuiy1x1emb",
  "key19": "3vcHh8mbFkwSrVq5gNiNYXJsEg8GU5PsSQYfuCmhqEnh6CTCqUNR4oKms6eXeVfjcT7iQYUW1hvWcSBbSkremce9",
  "key20": "37nQuaeYv7A7MfomcbNyv9ikfokQ2vFnS1kJTJ2U1axFMJxx1dFsk7aUNfhLmcGrP42kWWnkv97uhPbTSQHawXh8",
  "key21": "5CU3T8tvW7jimJyzcRt9pt69qkKxFAgNyXeYX8x3EfMZ4n7EoejecyiMcH9B5iRK4YfXcPqKAyWAcivWzAxjBQNL",
  "key22": "Ee3hH9QpDQ9bgMRYXhf2DfESsBrsXSumKGeAVu837WXtqW45zHDyF7hU1PPjUW5BN2F7fVYA3fp1CXU8FksVBeb",
  "key23": "4S3FAtmrid8sT1tcnwCAyUz7s9wTZiBDzVGkgtxjN67jKKNJq9eshguc4wboAcuujyYPvookrena2eK93M4ovwzt",
  "key24": "28zhxzL8vmuKNUvmJU5usiBtGksmFuh1NNHF5BAYeELhzaThnsuTw2CC9U3RBKLtyfhF9uSRt5JTrjU7F5bbUMTB",
  "key25": "2nMZDWt42WGiNDib5z7t3iLB59nQgonqaeJp93TNCn63cxaRy7bWe1wzfQK1wJoDN5jbABWAF3bozEBRaJmTzATP",
  "key26": "23nwZstXPtvVMVGUkHkLvL8UzsGhX5Xxy7mEjanhwmvJBwWw6WpyAoH5FpRNQsALJ3aEBLC7DqzaUEuUVDN7ajVd",
  "key27": "TCqCWM6cCqAEvB1zFso2R9d3VuxamPLEfyuMcJ5thMEeCXSZsfft2g6vAu4Kq9eDCBBwsuAggrSVoi4aGN4bh56",
  "key28": "4psEDDPPfXEShemsRAFbTqBV2nFWnQG6ihEVi5YrL5bbqM2ZJJBZsKwuXLdozzznYen7Jq8dyxNWQRej8ehoiinK",
  "key29": "38rijWjQLNtQjmWhipZzHL9yozfXSezHBhieKp5VuMZzV5Wrf1msDZ5UMjNA233vaJxaqThnEsokjw8CN5Wc8fKf",
  "key30": "2uhnRV2xgoQpbGgWKxxMDMNoPwgc1mKum31LTS64cVr9YBfKoGMrWsuDqy1SDAzUZDMFydo7kT6s2WZPHwqccjei",
  "key31": "4rmrarHtb4TQWCLBNXX6Wj8hcAHQ3vNCPjBjqUnfgGHdYfW7XRJ2wCYVGPjmYPuKy6GjKzg1oSaajjNyMm7jC6wZ",
  "key32": "ZzQU8JxiDj7kQxk7roEjqj6qfdWCw4q1vAU9TGzRvPgPyTh2NQQmjNV5r8nPtxeeXBPjNDjeZeb98NReRFKUand",
  "key33": "5mxLuvrr4ntHG3FfPRSuhWuNHHuMdPqDtVZGPqRy6zeeU1Cz7nkhUM1vXf8Z55N3BxYBpqntQZJbuJgGj9Hk2XtE",
  "key34": "3jYkSW5ZTQXge4B4ma6UezjoA5pUEunkEzEkcLxSjj5gqKqGhfYA1yXyonnFLQdnK2A7Qdec9ht9T9FZLTzN7wAS",
  "key35": "cKSjPCo6X8x171rCxevfzZtzgKvipYMWGLNwvY1LC2fTC7QcjHLSLUATJ4Dxz3s7yS9XxXKJFbuF8gaXSBy2Shx",
  "key36": "5UjDMHmLGiwDHR9XwQ2mFvE3EM7s2moM96PcNem91GfjsegTcdGjUjThRZbzfJqBM4CN1CQGL3kYoE5163xri2ov",
  "key37": "5VFobBMvj4bZg3asTJznPtKSc4QDYKdqk85eJgcbd1r4aPFfcooFe6VMz61HHibNdLRxCQG38GEYSfxHcR3Jmeet",
  "key38": "tV4mZcDzQ6Y86DMkYFbC9VHxGRKjiZmfkexkRXH9pwyg4ZU8WGBmbvaQEvgrYSXSMwqsci4JrKLZkJmDdwrBa4A",
  "key39": "29Ryqp2fBAB9zZGBDWpJGgdF6XtsLT1u6S4TMNJvnvKZj8N9peCq2WjbyrmRGZ7iZGCSe1sXWcBMALEkUANRcNdH",
  "key40": "5Wp3hN3QHdyGe4iLKZRQqvG2QVufNzUT81JBySX6sSBmJyN7gpG77C37g6525PvdcRpioqeURZJJKUz7UmrUFc3k",
  "key41": "trDdrTF9fCP5ZYth55ZHZVW6RFZtvnf715qdYyG7Ek3HmnGhxWCetnqaugWyuBMiRXkMEr8NRYr7vz9LDqnp4jY",
  "key42": "3EyS3v1LVHQsaLYRMDsJsSNvYYrCEYnJWm9zmPGWHBWgLxLMU6FTihZqVbHysgAvH5DoDWsTGHgb2icWfbga8GA6",
  "key43": "iG6q2sMvXESoxd1pRiZNPAeX4GPpjW9HPHeC8guDtJeBsxrCPcJ76oUK9yVYNBzE66GVBMujNWKfrzBnnaBbapN",
  "key44": "EgCQdTaBjuYCLY5hv8TFMjUUHv6hrXZHj4M4ZzmYupA91oSUmhsHidGwYNM2L2znamkNs1fs8Gu7AttJpazxycr",
  "key45": "5VHfiUnMZBMhGS2NxwgLeLSsRFrfJgsLLGRzxo8yCSm3ef3bwAHStmZEvAZUjA2oKXT7gTTEFFTjbPNQmiXWN3EJ",
  "key46": "4GJiP9oXU8LjZhtob85N33oHuiCNzYwkAcg1iMnqakf61MZzyrcZkC65khkZi3g55JyMBKKaoNPvuAazbckLcR18",
  "key47": "29xA4ZuY8BLwY1eRSyDdK71ksTk6mcwg2GHLdN6ppupm7tGca16xizq3pC6aAuLFpzZJJjKZQEG8kgLX9JsRnQr3"
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
