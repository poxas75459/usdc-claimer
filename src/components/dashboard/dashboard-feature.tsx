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
    "3QjeU13ApxhGtqAQnz4UZgVHSTRDCUCsMRuz1LWNF3ypEEbsQiN5wukx2pKSgHLWMrMo6yL1A8Pesn9L3PXpBC3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KmtPQP9Xb82ayJjJzyfxJx5z6R26SNZMgzE9NtVLfz1byXTnYtwtxGewNPQbJdcJUNqU5xdN9fuXSrYPgSeMLxe",
  "key1": "3iTQvASa7uvvDbGhyEabrjmMveGHuQVQbMpKK5cozPy9Tmz53oGd8YhhceZWgAdm73pGSusuZtg7ShG6ieJR5HnD",
  "key2": "52JENt7sRkuWCzqHGB1Qm9ZJfb9Mhd7mALmzzvo1yhoMkZpPE5SFBNENyEBdfkGbEJQPN7PaiM4g2fhXFeU9pEv",
  "key3": "2M3rBDq2W4orQZFHNscTctHYqcYfDwinxjfPnXRtc1dafjdwoYNF5DTiXBfxZtawzrBMjhhaNqqBzQfwEincQbwh",
  "key4": "1VSHv5okyCSTWzfKgtg4nVDoCbot9LzfVm7YsVqbV3AWT37WVzTcLrf8V2fuUp819pbcwXbXJHKbc8atVURY2i2",
  "key5": "4tmLCrLDKPwVCQ63w1WTF8F6fXT9f87JnvJbbtCtS8vfJ7NMBUveGVCG5C52AjJ6vGp8frB2BumYzijmHzfza5qv",
  "key6": "2nmPdNZ1RSgWPWxAsVFVy9CvJRdenC1x1dWycD2BcPJPv4J2r1iimav3PqC3QEmLcbGWncLgxeJsSrSReFHam8Xj",
  "key7": "3S3NeboCfXGHpUBqS68GXMxmP91ck5TQbZdFMjJCg5N2ph5HBMTSMDdHHMhsf7RsTXe3nseTRFVxcD2oyH3V6PFv",
  "key8": "5Yv7zrUjjapx59JxYLsfePK9cfS6SSREdQV7kpfkzvLLvGdTLBT9HE8rUCcJg2UtdmE9d9v1XuGyd8B1pLmr3WZd",
  "key9": "5Uu7nKbYfwjFQxqqYoLrTKYHe4kSnyrABhwfhXSbbf81TRjbxNHwfPEVUvGDB6JTc83LsXsYt4v7nPMBANXkpNhb",
  "key10": "2Jm1rW1SJgw6ZKfhzjXs1BUA4npjYSu3s3rQ6y5TTvAkEaMy9fh16WcaJrWov9sBdao3AKrwce6s4GZdA5mPXAcG",
  "key11": "5MGdwgghXPMx4jDFn8tNR1Co4ZjSjHR66XXCqbopXedTcQaQWZAtGpe81rAsJPPLjDR7ikdTri8NUSK9ambV4d5A",
  "key12": "5uT6qmkcMaYL8Uaxbo641qq8HDFfKVYJaEhnivYCrdJhXBPsxsLwV4zcbRDnry9JWHKQ5xxJBWjPG2Z2aWZssHWQ",
  "key13": "28sqhi4mxQGTdfu7GzFpkFQ7qhTTLg88cC2rN3WmaMdzCcnVMs91s6cA58DCD9X1QHd8cpybn2nEFWb2fDnBM4YR",
  "key14": "4avgEAGFkPrpakjXgWxo3BuCvpQhXTJN22CtGqKbQ7BCrLM8ymF4UyVfrjd4YwpRXBnPRayk4yVbJQ214EGmKjn",
  "key15": "eTo33jdULigCgthdpKjsuKzrD855G7pUM3S9v35iKLNhveYBJqcG1aUU8sQNSv7edWkDs3nvyVrHRj4ydhKx2oB",
  "key16": "3EkUArxwoauoEQUdrPMN8Qn3KQP1ZLHoG4mUZstCSsPY9SrBbJwpM6joHu45DkCtUT3HBRXZVhyMhsu7PB6TUrKD",
  "key17": "5vHFpDrCxxPLwuPcJD9xJC3X4FbEQXTfq6fBLRZ6vHrrSc9VJtK4WQ1pys5gxSY33TfQKcSDZfZWmiCbJhwEsWBg",
  "key18": "3Q7qNvQmJGTQQ4eS3sK4bYTXW76sRGEVAZbseEPLhRprQKWC9vtw4V7J7PF2djUYBG3UmnwXrN92pmDbvgYG3o1w",
  "key19": "5C5tWEJLCDNKt1W4yYxFhMwsogBFrXBfVHAtGZRUS7V2GpbV8DrfUvAzwwd6Eu27CouyXZ2BWHCXhSgECKrriotH",
  "key20": "xaR1Yk9qt5z77A2c1DvbkrjmLzpPquoifDrWGB94guQAxpa9pM4XSCApjRHtxR8tc7ZJJNa8fsATXnirqTe5ZTf",
  "key21": "4H6XrfWpkEcbNAo4pgqi2q4sqWGYvLqgTnxsm4dMgc3xvCJWb2GYoTeEtGsqs8er6fAqgB6ibNf3zkpXPraD4imS",
  "key22": "2iMQ7mqCFr3pjaSypEAKnV3XBQCv1di7JZ5Vuxbz1usm1Ak6pveTeC7Zo1mU1WnMyGuFXpdFNLT2ASPYZyxCQVkv",
  "key23": "38yAbSe2knxarPFGLBgmQA96akjmSuyWcau4SqbJP4JeWgsuNtixrXGE8vxxnnZVJcvsgAsN6Hy88Rt1i6LV8Sni",
  "key24": "2Ap3pMs1JSwYUxGDzMcfd7HMutbHgCwBraqKaSbwMkd115vEGU2TreBphKgXPvT9SL7TtG1FGF4JujT9UHnmwApW",
  "key25": "3y2qVFYJMqGJg5RkAyxpwHuaaQKQ4TPNPkfiEaRpFS33gpqJeru15sJZX1bRCBnnX9FE4kNZMtn42XajhzFKasdu"
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
