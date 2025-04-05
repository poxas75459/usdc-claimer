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
    "4wHGv4AJBYpXbFTzXL3T5Qpco7NzM5v88bMLuGEe5GyHxfPPfDJ4q6vQ3AQvDLc4KW67yQ3S7ndMTTY1vvohRTej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ih8yr37emWCKRrvK5sRDdRWzwoR5FhyoWJw2yorhvaCQ1Tng5LWZUpRGFAoHDBkLsRLya89WdWr4nfkFS85UF2G",
  "key1": "4g4WFP9VsDH9BDM37HMGhtMyAS5mTzTESHTjGwDGzmZWzefcofqS5rDdSPMqzA7ef9ihvKdqh6SuEfCvLMSAf8h2",
  "key2": "3ixmcJeWtMr1AS295BfaK8wUDchGdeneZX8eaP1ab2oRwd3g9xgpCFxEeZ9wtuaUPaPBfyLScUhk1eEkESbqmts1",
  "key3": "4kTiSmgCgq7Y1yjMaqzhYZ8UMxszuxjtLBZSiteTm1Lc4zJETAf1Wtd76twcuNEegQr3UFjktJGVTgENPtxNwRif",
  "key4": "3DSTQr14JfigNYaFEjPLrdRV1756nh1s7jAswUwY9y72dg2Lu6uDfZMMjyDHKSSH1ETqJjGfvnxFWX9xq8a4i4VQ",
  "key5": "R6xKKJpS3mPzrbv8LJ6ZgtTvZaq5GJcrMuBVNqoza9RNhRXHNUxU7VHihRXeTQJFPmxjwm3VX2cE4ohskamhZMu",
  "key6": "3GJcfH75LCz7zaj146SoYsbHAitoKpisYytddobvnBQWYJECNirv1neHe6j2X7YubBMtAykEfPE7CGHDaUnwj9jk",
  "key7": "3J6hVB45nWGBBaD3jh9AeDUue1PVVkk3oSuG6sK19Ks1ZgnXhwuSW2vKgH9Cjx3Mbadrqaq3CFNtpPUoPZimbWWQ",
  "key8": "2xEVzzsHMgAAz3VKJp9uxtHSPRdPZriWTPAL7gw8oWwyjTrCEq7Pw6wk2T2NSfxDJJyyaEr5hoQ5qfZZuHazD9sD",
  "key9": "4c3yHhAD3aTT1qe1QRWJMWS6QocSxHSZPzACNAt2HGB5Sh5nVcaXSEJYD22w1w4TH2dyUGzpoJk2ApGMrLE28wnA",
  "key10": "3TPmx5E6AiE4YZK3itKpvL6eqE21daoyzppUv4tQbp3AAHfXn2pPBG1cqLy2VNLT2U5VbtUtyUoC741Gk51Jhxwf",
  "key11": "4PFBfn3yNHzDS1AqbWgLH7vte3YmbBfWRAn8yTBDjuChHRTqjpGU7SqsHgfrii6BeWPRa7bd5imYF5K1vsr13mL7",
  "key12": "3A9QdmcXi6MVkb7YtGM1nzeG2dK2nMAvKUZiGPByGEViwcztEPQRDCprrA9sPiE6YcWtfaoLN1Qo4P4t18NMEUb9",
  "key13": "WBVQfxVN67SbeXpCDrCSB868L9wJ63Wh1LsMgX28eszPehN8XF6neJksDV4xQw3Z6A3d4VAQPUMSaa7L1SL4dTP",
  "key14": "3RbyFfWmxucFYqf7X6EEyLuw2rfnVq74wwHw7jBDkMa6UMZ2Yds52EJ6ZN5j8zjeWqCKtdnmqfkUNKcQiW964Sy1",
  "key15": "5kfN2aXY1wg4syHWBcNchWaVaHe4M1wv5mYKptkp1v9dXKgiDonA2Qv4q6iB6vro718ni6DQjdRrX8Bn2nkU6j7T",
  "key16": "3rS4HNbqqjFzJVyrSTP5Tewnexbd3Lfi45DqSpwxvGhMoLxRxqXMTZWvqreGdwD141Dfusfc8gNCVoKN5kjWcVMZ",
  "key17": "3BmW18xfhVkM5MsHfHED2caoynJErT1DWCeaCjHiVfZReruqJUjQevNeJA5GN4DxHCpGAnBwq8BYL9W7Pgds9Yv9",
  "key18": "ogaixZ5ikdzatyPpPqADdVLTC2DirMLco4Pew4SMb4aa524ctg7V3RkiARYsebFkyi53HaJWWJVzuFJ19B3eaDu",
  "key19": "msrZAGa4d5NSzUJwN7XGBEuzVJ9zVxygSojNxWEAboqS2azoHAXehX4bnfiGBLJ8mA1bJ47PFtuTLLARUaN9Lhw",
  "key20": "vjxnQGhrH6SyREnWKeivzjmP9j4iHzNXfdBrCLzpSAepccT7aMKRMny9nef64TG1Z79guSL8gwboTafYAkiXusG",
  "key21": "oj67Hrnz23VMeiiYhvvmrquZ16v817kNeAmnb3oie9TWHHpqxdKY4QYm3pQeGcthopoqeAEP1SMKAAGbFHaxa3V",
  "key22": "3rS1v3Uz2s8GFgRdc34cJPZeGb2e6rJFGwF7vyz7hGn1K4hfNnyoyEriGE5A6nhNVbkTmrSSwvF2kyUpvbqrkscJ",
  "key23": "5AeNTRJSydjxJuoqDyx46wqeAvbxbDBDMMd4aAkDVhvbTmmQXHbbCqYgPy9W2w5HoJok42Dq8rvG4FKJq3zb38bZ",
  "key24": "Xn5QrA5WXowUPZHFCdGJtBL2n1uCVk5mH3nTXWk7RmFfEFGBNvNwrozJQsarPdhgcse2gZF3mrnsyHXCkFRym9A",
  "key25": "54bCVnx2H9g1LNxQPWvi3Sf1fcuF9pxmU26W8KTDMp3wniD8JCK8DwttVhYkojkyTeXmBUwHF29M6PUvBLPRWDd4",
  "key26": "EYzX9gdcYUcoRq3XmG5p8wZi2K8SeMsid1sAXQb8oAZqfPncdmajpnbKvTVCzfg36u25LVtReLGMnwLZ4MoijY2",
  "key27": "677wxbYciY5hs8APUzUonxqPLk4yRJNg5Q1xXAyN5Jn6DUgVeehkj9L86jjPQ1TBprpobViGxTx2JvbcWfYHgC2n",
  "key28": "4u2xNJyHmLw6wp6p3CRyeCLaaYzpBBwVeq8q3m6VGfkQiVyJS8mMShDQfA1WvehQtpKJqruZ8HeU2EZX3iWAN1Z1",
  "key29": "3i1fxvPYrJUK31eHhCu9vtVSuywXgontVGMgQaUiMZpVfZunYgE1H9Mz8r4j5YyFR8ZtmbGSBuj2nQkF96WR1bva",
  "key30": "2xnzHFZJYPxEMkaw63ebXoMze3d9tqJtDZfnWimkuMgPdnWHLAdHbd32F63iitKzRfCEYSbxvGxBVAieppJHz3b6",
  "key31": "5bp3cMaKQxYzss9yCLvMAiL5xNYKipdSniM7xMj2UrZYNEWJMUm4zxLECs4mKUyWgHjLdbJPNftKV4Z1pq8HVTwe",
  "key32": "4e4euZ2cBr2HngB29aGfubRFgQCr7t5gQdQnZRNzB68fcAiz7C3d1t4LDtMQd5iLhN75sPaMLnC54J8yhwMUUVpq",
  "key33": "426evrG4fxGdy5g9tzbk1D4jmTYWwGtVnkn7jWmwzJ1EU9B7SQmo98LxEwyq9F51ZW9awJetmEtKNxtuD3TFPFP3",
  "key34": "2d9JA1Zj6gxSQ9CnCU64hKumQhfPofB5WXqX37vd7T33U13t4m2JowSVGE6fTqmikY1cjhAdRbtVMqN4PVzEbS1P",
  "key35": "2SsTd3k1gkj6A25mcaXRuwpoa7C3jtmAqbiyRjJJSshto59i3CbyL2R1DXwh1E13Y76FGG6jL5R2v8cgQbmFN8XA",
  "key36": "5uUHNyVSrVeG4GsZxnNDGEgvTffGVtDTE77njTk2FrF8C5BUMmhy7NUHoJxnd5Vc2iHFameZABawZejeF1mc94s1"
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
