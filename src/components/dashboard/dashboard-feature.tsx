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
    "3A7QiimFHq8E6SVsdjo4WqyPrxAtE4pxAf5h5DKEfH6An1UjfBniEv4vPH7HrKD91hbQzKNdwjtZkoZDmtp3XCTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SNqH1m4C7NtNjrGhHndBvdCuNyNDU31GQTPb1nGig9Dx2ns6fWBXrhuScoiz6R2MFGjVz843ht7fPNxF6nTxJjF",
  "key1": "3o21wJSbPCtagDh8rp83ZcmxBTSpo8MdYaY649NJRHiQfj7EGYJqJd4DXeQGuUSWsmpoRXerooEFE3BQwpSGiThw",
  "key2": "9FPmDmxxcWsaWDBTqiG5V8eJzaDq9k9CGrcTVemwRjYMCPFVdrDWg2AVdCBwmDDR8UFJpeueaAiaQwX3CvCPLAB",
  "key3": "4bsjWvXgLkESvjRvAKcmHTxpaFaU6a6BKNgFAWe9e4n6w5CtiFwADWp3GjmaQZCmzzaGVkDRbQ6XTp44YiyShTDL",
  "key4": "3MKt9FvhTZuPFybjyuMxDciupfQBpeaBrjaWEku1yY91pZXeXRvwbsW6pxgPwL4fzmiYvuKPcdNdGUEk4UoM5J3T",
  "key5": "jviBE3ZEL45tPmnwYs3me7NwJXR3S7pYpfoDhxxDDH98XMa7NDH95E93zuAb3wph8huGvfQQZ7V74Bh5kMxJKSC",
  "key6": "25cpDLhC9VLATyJijLXBUqRucwSq5Qrr6GaPNeS5fsAaBZAczDxZPXCGaz9Kmse7s9xrkmqVLRVYnBoGxyCU8suk",
  "key7": "2z8MSKea7jd7AZP5o1wz8xhCjGY3FKsdDNviM622d2BLMsLkTKi3EWC3ZDSxjhdxeUifqeiBADyvDiKEQERYZ51p",
  "key8": "592FjGNw4RakLZVFfYsfTxqJyVRiJ5DdH61AJ52TehtY7E4UekvFzm5QtJZC39U96WqrMJMPzUSLo4d4wvgSa31x",
  "key9": "rAGqPnrkDvHBc5pdzNqNYTAFxfsjKAUfvGmnM5asHZJTmtaUNXhvJ68tLyULsNJ1zuXkG6h53hgySoaKuUjXKUn",
  "key10": "4a7Y2UQbBppo7mJ7d3EkzW8PvMiLTut2DjX8SzdgR8vSJ3uQpm1kY53ieuUoKKN3K4YA31e1bEaWwnozW7iM3XR1",
  "key11": "2e1ycktvNNX7a44GvjAu7XwC46Xz5yLYnjU16rU4GE66nq41awUM3zk5XnzZsmYCyDafHm8TC16eMpqW7QCaZP6K",
  "key12": "2L5rhAErJuFk6GdZVmBwSnKSKAxKm8fubcbtikCSbARKK6XaVvB5jCLtWqai5qBTqckX3CEbzsgULLskTNtKqGBw",
  "key13": "3NdP9pfYSNqB39tEbKwEbPc46dmxKGe4jScamHBYEtTYf3Mf9zVkqQ2wArqtPbWrnTosJdqvmrCDCgm3WvTE7WJT",
  "key14": "67WrYkvvY5XB34PY9ctkpEN8tjQLnfQ6CPicEkKNd1hCAPdq2Y8mw2PyAanBRLjPChp2AF8ViGHSX32YRi7tV9b8",
  "key15": "U39e7v2Pa6kESGHWzzMkhyEYmWxkyeEVBz7nNAztLUfGUw7LQghpVPZLbJFD385xZCrSj67snXomobN5VbMb38N",
  "key16": "iaA52dzenwgxMJBw5xe2GsK4qVNDhX4Fw8iwHmrf551t5UMwNLp6h5ehUuQDdCRB9EtxyuDWzg2mn1YD2ZVri7T",
  "key17": "4Q3goZbS58rkwEhysF5VHrynovSZpoLZQoFyBjam2WL93t8qMdqaeZt3skaNXmHXc7roJsQaNo2VKxMsz2KLWufy",
  "key18": "5izTaKcNzC6vefgXSwughnX7qvQFmiz29L83EMNYtivUuqNRYZwbxgBUZzqXveNuT4bKUKRhuKrtvaDPmVcKcsJm",
  "key19": "4CPeUZPz4PTytuzgsT97Yko13AYkr9MEvAjKf1TyMqbSZ3KgXUoDz81PNvoKh8ij8w2VYYPGMqKrVWzXBearBPvG",
  "key20": "2EjmtMHGPbnNZrsentt9KCPBM6KscaDg4ddQLjrUWVQKEtRZ5xFVSYg2YpEQR58G7zjxPiwAYx8SjiDco4N286cu",
  "key21": "4BQ8DprMAi5XNuaAopLJ7nJ7Em7Gdi9dDpLJcGd7ByniGN81mCaN3swghfd5xJi1ud8ZQBCsYpkHRKq6jBBSYtfi",
  "key22": "3AV5MYJPm7X7Y4pcjJRG2f8BkXuNxj9ZpDiD7W9dnLmNeAoXS6Dsd7XjKV8vQK9kofakeRacy7mqyh56UFDpNL8R",
  "key23": "3r7Yx4BAyvT9saCYYwHJaPVobECVDJZ68Esh2MjP8wpaJio75SBW6b5QHUWAvQp9dHfxtvhodRgwQQSp1oZEdYi3",
  "key24": "3mNwaVFQejErZ4nazN2vGV3v82SuMpCEmnJwbHjRS3v5TcrEgHmSwFCNNGvBFMJS6p46dY8mf7SeTwv25zSQvYh2",
  "key25": "2oLDqHmPEQAWBmmAiduVSckppDuMqFg7tQF9wjr2gPJ9hLDHsdjbbN1i9pugX7YdhRvCrdsHmCLJXXcvBE2JtbY2",
  "key26": "53p1SomBZzrp3haFJ1WDZsdoAAPR3attKftSNVL2G53x7azYAuiezpbt5FpwVy84sgAsE4qiVLDaiDnsUnBcRne1",
  "key27": "5ALbNMq6QaEVCFzh6RwnDs8H7qYhjt6jEmxqLuxhCtF7SM75gnVwHbLYcVixriPwHpDhfGKHYQzGUkPbZBLbB5U1",
  "key28": "3Jqd9sgxawrvEQ3dSaWqSKGEG64TLspmMupfHemw8Zc4x2X3gD4kTi58XZg2TXvhm5QYFtyMpnEMgq993BHVgfjC",
  "key29": "bQji7H3uSwCesJweMViHqpkXHUQqStWUVAWZJEJU9JeiZBCGozkGmrQMtqStLLoW5WaZCfdEJFi9HNQeJunNiYR"
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
