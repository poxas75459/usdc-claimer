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
    "3GXBN9MuoiYpf2a2CBu93HrvvxwXhBwyZj83Sj6n3wawP8q5Y4Z44Nt4VASWjitfDbHnCvsUyGKxc1C86voVA5Nt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wCHpgLsXQ1jf5JapHLuviWpFJEhzG8aSkG1rRDKanBWm1BUvLiJYxGLfS6bjFsvGsE9JtidH5Tx125XPoK2TTdB",
  "key1": "624teeqPb5ApS9mQhisrE1AaKtJ6mHMu228K41sAfeqBmHBqY5Wes37fvnPSn1ZGSjH3dK1U3rBwzEg7KD2B5E6K",
  "key2": "D1PMZvNroj3nSzrviZwsMYKb15moDcVeJtj3rEDqjpXMxyXmSeZuTKuFSVGa2dAC5Yiue2uVxx41FSEGmcuy9vF",
  "key3": "44eJpptuj794fQXcvRbKiHNmvsXEuz9QHtjjyasL62uqcPpcC1GRUTn57o7cLPQU9Qa4x7HRcAzXf5CZS9rTaSy1",
  "key4": "41vBb4861Hv6MtrhH9mNwZymygBiX7kLEb4aFchPhttuuNB7avaKxZNMfSJTdf1nJxQheYfTiVxsa4Cb27KZKtQN",
  "key5": "4BNcuwDrfn6mYVKBi2iS5V9xASKvNf8nHeKDUaicNis9h6W8JSyd8Ev64knRiwTosdyAu7DDHgKhMu2b6wgQLgML",
  "key6": "4zSEtxWGqhTLvfSypTWoMRgPLqKrZ6sbGt6fqDRLXgmQExSrU1dBfkFtRnx69aA32JWFQmwETHk7fRn5cw7qPgXQ",
  "key7": "5omM6T6cFdrQoo5CxDRHhBj86j8YKcMdCdJyXzDVP2m7MQJaQg6d1z8yw5Dfoh5aJGumvVyxZEBHUG5v8DnZjkkz",
  "key8": "4BLkCZrWxqNGvHmhkKuFvizhmb9RtpDSAy1ZCJhM2z9RKGX3L4CoSvvyf56UP3eobUKaqCSiAGPwspVpv6hyphRi",
  "key9": "5XuTjxhbpBUcswfWZpRKKkMDMTAtigK2mSBAqRw1FiSfWxbJoRcXvfFT2iBSy421ukvRiud5k6MtuvNE5ryzACAo",
  "key10": "7KGwtaHAhKiUfegd9KbLBY9kSpe2Y94AwzszcoU8NsTqUCpoLpFYsdkhscKhhYiWYDPm9pedzkfg1Zz9Ge67z4x",
  "key11": "2nH21EuXbz5mwf2wrU5NxPTQEkkumNae6FnutrU9Recsm62meW1uLwrbY7WVry2t5Jx7t6M5cUV45CdENGoozM5q",
  "key12": "64pGjFBsqvpgv8SgNrpLRQBEdZQ3MZURNZK67jfh46gutabPSEyXE6zgUmr4UpZtjc9rN9kYgJAGUHsMyeY5NR8b",
  "key13": "63b1HnH4cVJGa9sLksRfH6NcTKCP5AAP4K58ATa3nFWUSizBTKHzgvHhWnSYmzS5eBSjTpDnifSJtCvxFWvPNFgm",
  "key14": "4CHch33NcD6ETdpXP5zAxYiGLQRH9RuwT7WNYVVEvHm88QujzvZvwZSQVchWAaSxCUnKBPPYUBnwHmS1kgARdKt6",
  "key15": "4PNeSp4hCDXXF46cJ8Kvqh7CFezxorvXRMGGxGFTR68uhDY3aEZratpkuAEmwC8Nu3663hwcntkNj9vjaMNUHoyN",
  "key16": "5YVJnQcrTQHYBWg4u1EZRvzByg3euLVrjWdA9M5uY5nfVtagFmuGY4RxhaQaVaCibnia9fBywJTfHsTgeK2jN45a",
  "key17": "43ziYdErKv1qSxF9uFzL9eqVwLUTktmxKhouWbWHF5ct8VRSd7YYXXwqSTf6gUCeyb1imysGpLGTnRkwUyToQcm5",
  "key18": "3NyibiBxpJDhJ9QbP27KWP8qafaYn75HR7AWKx4tpK9Xd9ZWsqSqwSoYrv8GjP4ZMh4FZQG7Htgj6Xix9AjrCBHg",
  "key19": "KKGWj86XdonVhN2NVUagBXmpnm4sj8QDWRW9SyB3BzhV6PiMhiDr8SepYgur8xnacosLdqiQLAQhsZosU37PsUH",
  "key20": "hVkHWMbMRSZsncN1rwfb416RB6EmMTACCZxLxzf7xKAVHRK2zDD6Np31KzxtHwxY8ccmwfSTbNTF8FkMmmiJf31",
  "key21": "5jhrnq56TiCojSoDTpP8h7jo6obqUa7uWTFRT3cPkMtt4uF9ZgXZvvy7NWjwRud5mZJFcDLjRfmEpGmmDXRTu7rj",
  "key22": "2o3JC5TmrAWrtv52FuJDZv1uFzYkVXKg7DVHDNFYAXG7ZQAKfu5SmkYJWwXsaa2ejJ4sHMeDYqQxRw477sirc48s",
  "key23": "9qFsr2EJS5PfGV1jpp31heQqUa4sDWbYCWPDa7WNqDuMXPEybZgyxibqCDTWw16QuGcX89wJnp7Vj32yRkZmDBo",
  "key24": "jfusPMHTia7Qe6b9KfyFjneQDW7FKvHV9HnXSJ8nZRWJV76JhtF6CxCoqGCUnLm7ub5YkJeSucciZDT2vmPnXnW",
  "key25": "4B1j6JBVr6XePwC7dycQJdGCZNB8pRiA8NGMcS5hktPvgYoMc6Wj38h1ay1f1nPKwWNkXLeSvWBGH3K9v7hw9WsW",
  "key26": "3kTjCcfSgRMFwfvXDqQbe68pbxh54dfNMwFs6hgLUJvTEtmTNe8viTRgddpqwCYw5g8LjDcoo5y6FGL9vPvYx2rR",
  "key27": "22fUhLvZ3yWMkwz1yazW16U28CzGE5U9UCMJznXsugjV7ndfsShxeG3AbhoTBHNFMJeLh557mtauNrpL38cM4zNW",
  "key28": "46NnkmNqAfyTNGh8fxaZ8deTq5oHG9CaUHeJZoqyxhXTKJpHtH54PjRg4Fgt6iPqRzSQGXYmng9yeQftggZ9QZTY",
  "key29": "3WQBNHMTrbwcHgFyK3L9m3vLVNptM2ZvasM2jouHUikWXqKUZ4C5RkBzDf9TCb6Gsd8oGmxJjwHR3RQt1v5e2zuT",
  "key30": "3N989WwBbnCfJAZmvXzd3X3swFovcrWLkcnHZnstWicBEU8zPgdg3cad6VCAmuUu42C9P5QREAJukZ2yKYUG91ZW",
  "key31": "5Ndwt2NEPzJuR7GixoFdfdHw7HSsJZ19PCkNqAmZ6rRJCDFpX7LHz8dYkGdcMbXHKgD1gSvm8nBCrLNAxCBWMpTu",
  "key32": "dY9yoDPg81SdnGfLmhWnzUNmA9eRzKWU11Y7SS6sy9Z2uUfZyKELswJiLdiCPD5jpV6gqNEZr9CCU6NZ8kmzxuX",
  "key33": "2KojAxeS6o8cYW8qNxLJoNDxS769HHZXPjskFi2Tk3WRwBqxqBzGU1g89xkYC1UWYV1bU4PDLdprwc11xG8anT3q"
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
