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
    "4p8ksV7R6DBHwSTDhVte8tu492W4enKPUGLGkydw9U381QpmKz2venNnRE2htVaEimyiEBaNeCXfpqBpeYxrhqHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46AtKX5hW4AQzZ6a5mMbXDUnt21RjQQpa8XnQcFqQqLA4TFWmSFZ75ngt3PhkfgdSPK3C1yyU7aDgHf8vPGGs3G3",
  "key1": "5cWtyM6ZKojLWPkwN39mNnMjxANamogHqnW4ippwTVi4WWqb3ZpB7LeoecH6eic6Ddradfu6J1ZH8VNaHoqcZDw5",
  "key2": "4QrMu1Ug7ykpxCnDVrceXNjTXE8q397ks63FbAj1JJbzoicmKKB5N65unKS1vV5CQHGn7x7jLF3ygWvDJMXB5wFi",
  "key3": "3NSWSzoJFHhbgaxtfSMYcYG7mB1R6LaEDHKtTcfj625AxV4R1tETYsrBbx3YnWeujQsJGxTg7m4SPiTBC9Mx5Ds5",
  "key4": "yeYH4qvr87kDmDtDgrVWKfhuuS467sUBCbMW9dp5nj8sf3oCZANg71WDDj69GhckqCeSWC7Nt4dS7MqDT7vxTX9",
  "key5": "27mGeaet2wksUNFGmH7vHngMedWoTf4sd1yZYGMCNEEMuZS8uNNozx9piD5L7ArwPsyAfJGyWmya9A1ZqJ8p61GZ",
  "key6": "3iyrouAjAULbD9RGf528HDwu813rDS1q5GgHuUcaFUfwBCJAdJRGq2PUkxQoDEVWbmGAaUVkiGPjdqxVMiruNpGB",
  "key7": "2jQuuGZRb6FsaDPMg4PXL7oS9zzTp4LWz1ys5YDMPrmiCX8n1uSvCaN2oMK7hRkMzQLHLLb1Mp37W7PobjRCkyYL",
  "key8": "5V5JZ9U461GSefprq35WRCniVNM8wsU715GUqecehps69wEMzZ3DePe1i2PSa9UZSXYq4DZPk4vACSdLRDthJg9e",
  "key9": "KoNs1H57br74dtRmcWyRDtdiJr6thTBWK9rsZzjrt8oZAvo815dmRs2m7Yjrmgtf2iw5kXPLTgnZrM9qLztExzu",
  "key10": "57VEsgMv1emf5CRgXdQNXTFfZBHFNkxVMD9mhpyJ12PhzqtPN1yGPdDTMzajytZztX7Nzy9BvoxdXxZzXc8Lk4LY",
  "key11": "2VPhUhzFft2y1SUmEDwrMMH6SG8EuSHCr7QYYQA2wEB6ARxZoV4Q2ypEJUfv1JKsHRPEDqCDrRCVH8AuRkWr2fK",
  "key12": "4zhh2gn8kGEHR3FuF5VH667HLaLvRwdHotUX9vpzpMUBVCNsg1K3vPprDQFyi1UNXgYJEmb6jRtYSWfSbRVoCsMx",
  "key13": "44UzHeZQxeMA4vfbKUQpVZYwCmtprp169Y76CD4A65vTfi1NHXBfMV16VqEbQ2t3qUSvF1ysJxxk7aTWmzAXnMCD",
  "key14": "3GerLt1DG7jJJi4GrDNKQyCdTNYA5o8RPBhPPPut7PmkEyLF7jocEP5gb1Fm8Sv9Kb2CrkLKLmdSp17EQnBLsK8f",
  "key15": "5trwg6ZRupW62534CdrA3XGcBLzvGibSLppHCqSXhSQSbDUc7PotrV8hcDTKGD5UrJXmGgE9Gkv7tbmrjMBTSi2W",
  "key16": "5Ppavtc6hkmfpoRow6neJPBVX4so3KRfEvFgfZpqy2UdXB153kBHM1SKbo6DbgLexmXEWjzNhzUW4DBY1JrS9vis",
  "key17": "3KMdZWaSze25S65KZ88qC85wLP5YU7WmLfCdxPbUnFxxSpVKsmS3HcA46znzoJ3gMWdbpgBFcK8hKE6Ub8YcPEHK",
  "key18": "4u8ZiWW7xiQ59edu2hRzL8gA33fWrKdHmAAtCdJgELjt3Yqe4NEFUVqZih7GkTo6iANDf7J8tEaWpEscw4bqHC4z",
  "key19": "27eLX97hszuoxSDK7L4EbU3pepWg5RWgcX2evA24XodxvhY3eLCY1cAzwnNUCdFqRcXpjRk9b6RvFsYuWBMgq5R7",
  "key20": "4Ly34rjeEXtaw4FkeUPUYA6AHA6viBfymJx2scPeUzWCrG2PePFF9VTqmArwPNTLLhKCDyYmkNT6ZRPQcxFjFST",
  "key21": "5BqdYa47C6ZA7w8TJvC936jwsnMHP8wZXh2WnFvV96zU867SN2S88wiw7dDKZffduvEhGoqHAwe2RUW6bFVTvP7",
  "key22": "2FAYuAgGdTNsZzqbaiYVt2vNymTjneWJsENVx9xLyWRuBGdrM3GpC25g3rZuRwypwrKJTCqauba9rQS5uXEkZ9bK",
  "key23": "5NYAgxXXtusjqoBhqL7Hpi87ZWA7sLxo644HhYe1DimfaZuQjutLQbdbbL7gjykMwiirCQ1cPaNBq8bu6pRy6PSk",
  "key24": "4s1qeLb4g72qPJCsg4zUcu4uF3oi8EDDcP3tiykVFPXchD6tA83wijm6fhgWhHFLTyuksVxSuTGfZADxSkwNEayQ",
  "key25": "YuTrsYstFcxDjoZVj23QSvxj5YidGyfr61Ddj647dAXK1p4CmndjCgkyxVr7Gvxay3wu5zLA5CDiFmuGhhYJJBA",
  "key26": "5BKSUgT1gsjXdxyZu6ppFFJLqX2Ga6AzXX25mL9ZmvTq8xzuGWAXMN4DCaUE1tsQzVkZg9bADyQa8uj2cvsvbivT",
  "key27": "2Mw2YSAJbP4a38EPY5q84xXpBC4qcN2qZgaVcDQZvhqEqJV4TSLQbPsKgK1dzZjZ4gC4o8PLhT5AvHRXBUDMKiat",
  "key28": "5tnfFRKUXRELMGG5jGnY199eWJGzSTmJMTdei8KuxyRBMpufg2Ev5M6Yy6VQ831EU4XH9TtefnkfBRz8GrZte93W",
  "key29": "3mENDKBoh37nZy3XEzLw3bPLKzMzWgEJGaSkPuV8Hntus4QZcPWVkkev2BvvTCycWEsdcSUfxzbyFhXh2aV44ASN",
  "key30": "3QM2DB49gkoM25gBAyW38VoW7iS8G3LSjod558McZtJYjnZjSAXiaXJuFizux4H2DazuPbrh4kbRwh3pJbdjrFzx",
  "key31": "4YePwWpqtJyHXYcpyUmrYp5RPUpefaVTLfDJfrZSGzzAodydDfUVBt77eRhKnx6zTiA3UFHnPaVvS57jVwedQqEb",
  "key32": "2aCQCF537PzUysVZVJfmEKejnh3aGhDuXzkrYwxoyS1sUBRac2ptKJsZaRMqkCUoBpYbwTRdxbBYSXBfawg5qn4c",
  "key33": "4P39QowyRnyCMuEsF9vtZGtzEGcE1x7z7pvAJX5YyMgkjpV76bVKA2Kb8BuWvAmJKZ178H8fAeCgtMUeLSYWhPpb",
  "key34": "2ugCUDEAp89LLPYptgoWaj7zJsjg9PyDwRLzMxfbrwV7eMNZsHYWZczXmgv3GA6y74E1fmZfN8ksUzeLsTx6UaNn",
  "key35": "4WVWUxUfwD2m6hdeQwFdaQPi2FeqKBQrpYCqy2pq222ju6ZAb4YD6uQ7diDAa8EhnGirfHZyWA786y9V7mHqVFpF",
  "key36": "4of7j3g6W45pamdyLnvM953JaehA4GqLKixEb3tpLfRGWP2vVVrEPzXTz7HYapVeUAx5uaLwUaFRahhrg5tirFRz",
  "key37": "3s8uinF4M8m5nCHK3efsiYQLjUrFTmYFwHqv48ZCbZDvThWi7GDLiWrNsqfuCd64kycQe8hXAVn6Jz9W16bUD619",
  "key38": "4MCbZva8dHR6nd45rcaRdJCiw4G9eY6cYBWue2V7Wvr442PPxWRCUFoQx1ayZnevKT8jLwQnfvtovfugX4HJrB9u",
  "key39": "ZZ14cXJk1tuLYtHe4CR7Vb7DygSJ63bnVYZpmkPkNLSAHN5tNkHdiQ8CV48xzvybr5NTagtXax5buK4w6JEKVrJ",
  "key40": "5iyExYTJLXcixbhLeMhhv88semtYP8EE72y5aWuKbRqBzT3rKjvTCvFyUaZdocKfN1MkmUcoR2ZdyeU336sozafN",
  "key41": "5MqBNE92sWjRNSq5v8MT4vbcGDFA6kd4vqbbui3BVLNErps2UvqpuoKmMJiLBHrEbTBgAXJHaZmZxA9VFzUHcSea",
  "key42": "khNAZqPA2uuLKaMf6QexcX6CjQRtb7NwRJ3Ee4EBBBo2q69XGaECAymQJmnt9sNjHv4jm4sb52t25U9RRZdkMMm",
  "key43": "3xj6t1xBUth9UEc3HRwbut7sKruFWuzQYkV8aHn8XS1KBTA3H2eTDarXgeHz9nM3Ro9yRzQkQRXFGwaMaeke6uhQ",
  "key44": "33zinxCo8GaawJYi6xJ4z4e35kF7t6ggzurB2i9UwS9rnvZyC6cbNghgdAr4RhVkATRjatkCumpaMXEmPsxVT5fT",
  "key45": "3C98PVuC3j7VZmrnmvmWFHTQN2hSrEZ3bhZniMU1iXZ1ys7hmARCfKjw1fkoHuuK8NGaFS4BfThWmXUMbHMaxD1Z",
  "key46": "2RPJWW4Xfbkzzf2xNbUkL49fnHyTrJ46YYhEKLxpeq4AmUBNkkEW2xKhXoLwSjn8M6WVpAr1o8JHkXAv7w15N5nV",
  "key47": "J19mYVCRRG1q1Wnzxemf4q6er8rZYMnFF8QFARSDawmJAVrKSShi4QL2m1dwfi6MriedbDLszzzQ1bnLLQUfdPG",
  "key48": "5u5yWZ23FxUt9rDHLMg9etU4CWQfw2Xf7ktWb1igtV257UkYPgzFJjvfcNXXJHzGVnYTETp1mLZQSWqzGg2UJecU"
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
