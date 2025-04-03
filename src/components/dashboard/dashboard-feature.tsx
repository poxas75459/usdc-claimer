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
    "3htSf5hTVGcMh38fNDBLjGAk63ri4AU5ffow1pU3hi2HHx8CBC88vdFumrdHfdtnLLFkz3Sjb8u8TKoBCcz6G1eF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FnwR33ULveqkoLeZoqJRUShG7zX8W2b86CtSrhwRXwzdQgrraniGYpPRr3JmPQJt7qNAoWxRXNRP7LGNy5cpAsS",
  "key1": "2t9JCfR26xu5fGTm7NjG1LKKzRPuiAaGFubdzwgd1VoL9vJZa2hgcBLdhK7PNYqYV2iFcwNtcwvRSN2Y1uKp73RD",
  "key2": "48RRT6z452y1S3SNchnuqHGbq8N5GJf1Ve6rCjV2dGWhmNZcnVCSBJLf2XKZmr7SS9DPKc9PxvpkGPysB1b9e16T",
  "key3": "rDJkf6ikVWbdU7MATU1MUqm6XUPZHtZHixDUY2xUvr6RfAPrLpNxhTaCZ4dmingWD2SSyFhM8mAyVNnts3EZGn9",
  "key4": "4jXPMTzeLzDmRhSdGvouASnxyAE81yQL8rsXyAayGnoYnB98htgmeao1Hqmc1fZvPzf2Kfgm7yNgxjaLJFb6Nijq",
  "key5": "5YbxBJyC1iYPG2jfpwzQYCA3z9Fn5MTeKnCSf93c88UVp79hDu3x9GwGu3MZXELFqvGqzX6G2QgQpvY5AAXYgNeX",
  "key6": "66pxgu3ip1xpBor8kEw9okJrf3YhxFN1UHpHqS282xaG5zPcc1Tmmm9wyDrSXUUB5j8B1gHnHew2jFXAiBZUBwuo",
  "key7": "5iTNovmmUM7BNDDyqzYc59HN33DHXUH6sUnmnm7JPoDxc9LLbdoWapZWkVostxFofDofUz8SNTrGG1ccHSGtX598",
  "key8": "3FPU1sChTPaEq5V3TrXcRDE9aBLk84FMTEd2GU3ugZHCxmrV6bScDH4aAtyZzi7kjN2J4wn41Rh7F23UJ8hWqhv5",
  "key9": "2mMd9A7zytvRjJHJVDcci3dpCeGC9dv3zpg2m23FD2gdtiDwPrJxUdt8eZjjH85uKyomV5VWeVqfi3PtxHuanzQY",
  "key10": "XcgNt7475dpc35gWVzHDJgTVybNwrujQahkLs1ZCroN4LsYcVxbYwtZY4SUaLXSDyjxdtzBvNSCdnS1ebPSDD1P",
  "key11": "5rCMjEuivEYKw9vr2s9txw3p8PSWGE865Pudgn1Cp63JSWjodKXSKJmL4w1FtYmPcf1kJWbjddBjiUNYGdjvjT6Z",
  "key12": "3uYFCxQD13RsLkKhobMUTRKSuRqCPHQxPf8gveba7sGtjDnLtquzDEymoXAJYvyQAV3E7JcLkd16crUMYTdNYMyM",
  "key13": "4p93fEitQt3kj45i5drct9mCwcqdCaeYKwgpNH5GeVw2TaEDoXqFtHv8geB5oCsSHwKV595ihP2a2mtY3mLmAWop",
  "key14": "5N9AvWTPHvQajqtXZpmrzRkmAbLebqSvjbAuvWMyfdjKycSWcfUhQjjj97pwXzSFt9bRSB1QwU7oMbaYPPtvFW41",
  "key15": "3yj2MugZnWDfsGrv7JDycheULtrzPtpPXwyojZvRPVBLF7rdWjSwM7oiAxXgWA46zMzKaxbcCNdFH39mSYjU98zA",
  "key16": "36A8tiuWSQUNd6gF4LYUen1mMTgF1ZTpxVsw9zNrvGzhW5YXjEDTeLBSCReTy1enVmTjGMnTpxsTut1EHhWjVzZV",
  "key17": "PQiMk5rbonpS3irwqqWhVVHeKr3woqjAkQCegyhtHKqhqyoZVuFFFoKkwL3Nc1DwzEDmPAUyvFMvhFotqdupr7d",
  "key18": "3brKKpB3Ym3ua5PxFnzh46doZ2eJxT8AYrN8Qja9Ebe1U8akRLkpC3teZZA1u8UDvzddP2As2SPs5PGhUaZ8AggW",
  "key19": "KLSKVBzqkNHWfobiZSYAm5BzxAqjkFNWmYUoEizRquGjWXwxp4CFnM8BdNwhTykzFXvvGRbd9LnBheVZfU4hjrX",
  "key20": "yq6RyXEouLS1ekXuQJLzf3sSoLMfivNP1rYoWy82zKqKgxhSaFghkd4gj8joEh34et7GN4G2Pv7S94PzyUewT5z",
  "key21": "2KruQKhzvwvJ1E6Ph1Mh9pQ6UQWvSRZEmprciG88xNBmr5u1kWYMhYjUmfqzkMbWqxEX1zWmLXJd6K5N7xVNk1wQ",
  "key22": "5ZvmQUM2gkumYxSTT3j1VRRtBZEighBR94HRMhbTP8ZqYqgEpYR7oACQAFEQdGxHRujmqeXuKXFS4VMrdTUQk8pJ",
  "key23": "3BaUhPefn1zrigBH7V3Lj3BV8WAf6W9nxv8sH8shBg34mSYfh7FudeHscqHxeWKWWWtXe71NkbA9FkCfYzCa4cWi",
  "key24": "4HbYyXmsLvAZTRW7QR7FpeaAUuyPnX1AXR9ENEB5ESTY5yZYLaES4eqYqsvAFSXTwrhAjiYSKmdgE6u5it5PAS8a",
  "key25": "24QxVezz74KCV5Dxu6ighsYSeyYZSzz48tkVm5uMQEWbczkhGc4A9eJpKf2XmD8CFMsiPtAXexv5uDpxTnGLWuZY",
  "key26": "3NmQcahs47kRY2vJZaXGUNzBXQLofubRTFB4juZZ9c7FH5dR4v2zcNpEkmxwePvgX8aS769UDbdFWkBXknQpi3NP",
  "key27": "3vtoKWnAAi44xsKnxvaRxX3cJw71dh268jWpxgNA1odSVurddKEpQWNCpgGcAH7ex3MVSf1q2GtMVkYyDNobrJLY",
  "key28": "5uqDzhm4DLMcJu99TPizdakuzP93siz64L7xATwPEXM7KiMYK92aCyTszyeNtSjtHkEZdqenyf7SLt1cCTMP5brn",
  "key29": "oWcCU9WrbGkwofqq2SAhM6xTWfNjNubAjZPZn5mux8eQsNeMJf7SwfhPyC6QB1wfCG5XJbcHuVVAGosn8t9nVfZ",
  "key30": "5Yrq8fkBdXom4ti6TM1W4UMSyrx1QfA5ha6hjhU8frpV8mXE6qexkdrRHm5XTRzBz9LZd2ggdhGSvnwPTQ4XN2Vg",
  "key31": "Uw6r6pjsNpAQF36oELuJ5TiTCew2wS5Ktz3naGpvYKFaPrrAmWS4r9qKRntKHG1vPKnSEsPGszE81XFGAfXy9ru",
  "key32": "nJ14hAb7uoUyTeKjcdgBkxHiX3aA74wZnw2a2G2hquzSK1zCJX1tJCphMRmq1KyZPRY6c1wN3HD7M6fcDtRFfk4",
  "key33": "KKyLszJP23QJk9Fm6LfXYMWBLD23FfhLDdR4xwVXFF2LkJkNq1uVWeJ1bKrhAyRE7U12FjDB3VM7RAMygTuaAA1",
  "key34": "4iU9phhW7SXHvrASdDXx8WMKuSAL5FvMftETJDubewdWKvb17x9SffWrxXCWhN8QQNo7vaaKQuFBAXhGeSLF4vnR",
  "key35": "5hDn2v3r1zJu1iaY5TN9C2pMatCP2mE5ZpC4LGAVRHEibDBvREARKwYorLLcX9n7e6QGk3yVUVfrPRGpFewVQeo3",
  "key36": "3GSh3LEd6U4qfwPXEZmvdRZFcAof7gjeBEyyQ1DKwGcD4Cbaae1HdL8aSKSpYV2UVnsKgrq45WaRLRzchbG5cryC",
  "key37": "4ovVYyxczsEo42ddVuJMmq3ZWyDT6k7HJLWS3bkELQTySR4dur4LFqt2uckCoopd3uBxDdU9fhG5H3vNod3sogq6",
  "key38": "3M9wSijFDFQj7fgg9poQQD42pVrRmVndgchPMFqJVjsYXiiGLpydTUoAspRzc7UVotPtnmGk3c5Yo91s8EvQEWRH",
  "key39": "4j1HCWD3GSaXsdawS9iy9vvU825mp2pftTVfeCdvgvZnf5xZVXQR9UyZ1gng5YKHLWoGgGM1Fv8wSEYxhpKa7DJQ",
  "key40": "638mD9rsa8qXNE3YjVz7ss9T924HpzKwKr55YDQRqTRviYnNqwb5WrmCouTnMi6mZiGkPVLjHhmCnMuidbv4VXYb",
  "key41": "31sSqdRv67o5daALB6rp9VqunsrMQVRYTb5kjPjjQKrje5Ytzu8ekjHko4JohgfbjsdB3YF2ezQ5YniwZbEBN91U",
  "key42": "Hjb4BstgrGHSRFBkfrCMVzbsxaSyVp6bwaDY3DnW3deiJaZFcbhDgoCAVLosM1XMDeYd5kCCEtSsW2y1yzyXYUr",
  "key43": "5aV7453Gb2G8bnEYJfHmRjgcDM8rLpVvHUCtcYdqYMuCwm2GQonfoTp5xXDRrKSHdDxUVxCkuq5FHHXXYzQXxKSW",
  "key44": "7zLnEBZhBsqyQsLoBUj1aCb11UuMB8k4N7DjuCeU2egJdMcyoLFzxPoLut9LkXZG23pWSTwY1YhotfRAWnZsn3w",
  "key45": "2qPu2KjbCWuepjHLpcHTkCD4a5uQUcZQnFjHvtkNU2C6ircGGMsd97Y1CoQZQeNLyjL3uHnE9agveyUFvEYNvmaB",
  "key46": "66RNnsAHNdk5ZvEXiPvHnLh367HqgBQYVVHLJ79WTfCKzVGsgLQ47e9rD6JBSLoKq5vKr64GwQcYgfE7VurWPiRg"
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
