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
    "3GBYDqEU34YZ9GEMXYzFasC3mvzi8uwRSZ9FBtsStR59pGnHnJTPFTNDSMb25o3wAkxeNMZ1sUjXS59iWmmwzWt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66qExe4TRKgYV4drAC2CHgtWCwQT5n9C6ufBNXYZTGfeuQMaam5cnkBY2bAFwgyoxXELRSa8kPUvwqh8r5vpqfk",
  "key1": "t9LFLeaAzbMwPfxZDoPWi95xu3BgRSuCDPvnLiTr3t5Rd8NFibsSjGgrDSaqbnpV8ZgQnfdSZbnnxcX5wjgjJ1B",
  "key2": "2RAJd37YeA2Bpgjw3VXxUXgH8PkU8rxX1phLMv9jxGN55Xq38pPT8bbghvMeksQnPDkQYN5DDRYVVhEjewdx7coK",
  "key3": "U2J6fogazQNDDd4E8GsQfcLFLXHAjrvraR7nfWFG5dJSBcSS2QjwxQZcR2s2kxkQSawC72VeCN7HyjM4cwSddiC",
  "key4": "3RXenbdtKwfLy1NUBBfuFLTNQNMGsvCWtdnxgJxMRu77GYsKFp3ew1dkZ1dxwVbwMrJ3DrVyiEoauJtHXcNGDPFi",
  "key5": "YpjA1Nvq2Qoijjm74fdHN5jUPcvrVnJ4bZStyBwyFR61C5ZLNEXTRK2hzFrarzxNJbFRixTjRFUcaVoVtyxPmEY",
  "key6": "3ubXgDSdqCJKa9EKLx9FPMYKd8AexrPr2QEj2DLYbhN5133rFXac1j5WoyQWdKRNBB243FFmRDxJZztg97Fyrbt2",
  "key7": "2CHVnVVHUJAMBN2D8A3RSQ8y166YzsVq31aJvzfR27ZkGTH6Pihyr4YePwEXUJhJ45MVy3VWdmjvyZUz1KtDJ9kS",
  "key8": "2YpK5PeNTeL8n8xJJ6XjzgiuaRPJKELGzRpCW1emqGBZwD2JbLssixSrbafN8KsTL6iEanJQpHgEB3G3taLXXCXF",
  "key9": "25D5MkuLZxn7evVrjj3mAyJgiseerVFWGqX1aAfZz3FnuhfWBMGKgSH7M3PWUZgtD2kBJexpwgTPX1pQMVPbLTG9",
  "key10": "54Ne1pFKXajGMt4E8pBP1H7kHczRdhTfehVTmRTb4DHjWUoSsTvamAUHo6VjPe3Y7UUZAzECsbMkQKBSc2nq1xDg",
  "key11": "33HhHnz7WvY1VGGce36W9fd9grHRsG5GWCRTB6MFMS4tsLNAhH9iud2smJkYtGhYqoYU9pSMQZKurjn8Kd8Vh8b",
  "key12": "2yEkdWH4ipRrsbYhX1okibuxZL594JbDAVFqC6t1cH53JLMvo5Na5g6RXMcPik2r3fCxwZ96vKFNJiepVJF8ABhY",
  "key13": "4sKAuj2awrsbLQpB6i51CMeJ4Nb5VEWyW5BQuQFx5uU92DSafspe41WRLGQ6Kbdbn6QgTKuYobqSyzGfpNqKdWLe",
  "key14": "5XdxPTSgkogiy4yqo3n7cshXj6UdKDRdQAowibo5HjM375vXhcFmFpNrTJT1i7VE2bx2o697L7BBbSQrQeW7iMkh",
  "key15": "37VzjN3woQEqT1YzuqSPP5MpmAgnBtgFrLBwXyn8mdbfrKHpbG5XcnKam2HzFj7dgbYvHVBkfwm3sKa2MGoF39tx",
  "key16": "4npd7ELjhzmi2W3Sv9XH6UvkkGvn94UNBhoUC1f854ewrPzNxPGTgwyDfeXrRdRtVyYbV7ojEXZbe4YtToAqKKic",
  "key17": "4yrpXho3QSp1KKd8UWxQAWS4p8f8E5fjV45Pdkt7A4K99cP5hbuhP9fPiNvrBCDiPhFaqbFjCLdr25c78SLP8zNG",
  "key18": "45VYQXzkuCKHL5dKyEfBoPV92ucUz5XMLnYQE2tGNYfWYDF8SihXp18xUmFZdM4BXgAhwGA3QEmxwYJTqQyZiJi",
  "key19": "4iWDptf3DreyrBfYr2ySpQXXMm8zpRjgpqm2zBxw4zAdNnQxFCjP1Q4KgqXmid6bZ3JfhgfsWd5MspQ1rwsuXu2m",
  "key20": "pvh1BvckxDAQw48Zd73VrJPj2ZfKNcBQXxCxZqmhGW4vJCGtWhAjxrZY4xrJd1VeAajcdEdYNQGrLEZo9ZLP1dy",
  "key21": "29GhjNX3Q4KE1pTqyFR7Kjy4nUBZyEXwAcPPT8A8uQyXCZ2HsmFbE49qoDWwgorLUn72Z8VSjXfgvJBKaSAhmk52",
  "key22": "4qRzdrKuvN2sjQtao1D3UuDCY5HSanAbrBZ3jUCdr7TG7Q2mQC99TquCYu56m2usjwxqdLBE7MHCqdp1JCNJATfD",
  "key23": "4ERzunttxtQU7uVcoxVaTsC8yvXoKmdh8SayCRjcR287Q6jQn3SF66bWhWespDHbErNitkfirB6pqnmfbjTBfujG",
  "key24": "nMsbGu6EuunPPS6dv3DjZteosfkT8cCZeNqNMzDNz9r28AzQBPmtbiQcsaRxJ8XFVWWRjQLrpihzKGm1WJEN5mh",
  "key25": "45c6jucqCUWEZ73knqdiiJ888ASPnSrhf7Xp8zgV3Bi7XGo9uFCmRLgEvMFmL2WrtsJ1SMNqxRvToZHvn8z7met5"
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
