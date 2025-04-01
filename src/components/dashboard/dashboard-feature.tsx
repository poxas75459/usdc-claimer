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
    "4sMAqfsy63ZJAHwAfAy7phAJncS1DJxbY4oeZ7RL2QFe9iYD7GJBEjdzxYE2cK4WybxNEAinDsmXwkMuuV2Yij8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i89Kw28ksmZSALfMsRSJwc78ZtCvbpHH1NaTGBuhzE7RDqe2cpnhg3syJwNLmXrQ9nQPE9TRsVx4SAHxFKKzjRm",
  "key1": "456arPwio542WjB7NzS5T5tp2W6Qy3XnVbKena28dJ3jD4oEyrSFbsZ1ufUdvCyEGQcE4H57iikSendpqEmBn7Nf",
  "key2": "5duw7y8oHcNXHj1SF5v217MHAzpCMdUhTUbr5vccsNn44myRdx4KYfTzexMoFFKSmpZyQ9cWgtmQUMx2MNVtAowt",
  "key3": "4vri2xvU85UASphSHgxXy2A9wfDHeLeirMqUP9rJqpVEB94nvfWKMf37aJj9ECmjQQMw8s7z1iq7XybeBH2WGm9R",
  "key4": "4eDBnA536DNEf4rVBWCVYfjdGDwUrRk2b65Mh1ziTnygbkMrEZc4rf5Z4m6bKQ485DQSe2qQTs4wnd7NKo5G7YQX",
  "key5": "48vkdC12KRNAQRhnofcRvVGT8aGV6UGn1Rhsd4Xn4oquz2kJXEFazTTuHt6C4TPLgGQRY5wDyXDX6HoH9CR46kpF",
  "key6": "3Eueq91XvUDvC7sGAgdehw8uPEfbQVrxeJEvxjpCfYZaTkeToJpk478PWtJqme9ZKqtJQSqAkYeEto6zRmrserGs",
  "key7": "iBjatKKKT4zvGhrukQqG84nSaM7pSi6S7n8jfd69DBGAQxMpzz1UsGaeLWZ4Z8S6wQFXvwh2SceEBARxFZNT9SL",
  "key8": "QBKferea1yg1xCsFkgfLXu2if2kZz1ra4d3F8WebGuo9seq8Q1KPQ97BQbQLRWstwy7G1VZ9UEaDdSEgWrMaAVC",
  "key9": "5qzz7tp1JpjsH4preJcYVRGt4HZ7XJCeMbxF5HeTHY7yzpg7kwRTHbrf9bc1z9qHDp2uy4VjY9byQRJUM67655BV",
  "key10": "5ggcALiQUN9b6bictgihHqvUM73VfvKAMhaEAH1LGG1DdrRqYJgQSz8KrBTUmBGN9XtgRTwji88L1eYsWyDKXBgR",
  "key11": "BNzXGtrJKyh237MeFkvu8FDBBWD2jrxvCWEt4iPi2yW4CAjqCYQSYQDBmJUh64cvuYyuiWL7ArK58GFkbnn7feS",
  "key12": "3q9GnhayZb1MfopGKHZodAZy65M1Mo6zgnFk2EpvjEg7HntQEbbMXubjxCJQe1MueT2y1THZAbcB2mzkDJL3pkjo",
  "key13": "2gz56RWNKBynqAaoFPioaipCsnnDHRmwFXSci5CbLQjYWZy46xXBKbLVFNPsvLT4zJzwnsZr6Ri5M2E5QVndEYXF",
  "key14": "3r9r9DAcsW1gZMxmc9Kdy4ogS5zYVMRSc4cAFBemf55UQbdqnqHZnLPAPZokWcXAvYaPNTtCLi8drSCp9eCa4RH1",
  "key15": "5T9fFhtiALAHwaqpBPnVktvT5egYVBpVBM71KF55ja1sbm4XBDTYR8LRLVSGDtuymVYwAFdj1Hx88meefff41DjU",
  "key16": "55NJfMHtWc2jYTqZQqEXNgvTDzX1RBogwDpw6vmmyKRHXQuZTHmv2ujxcuZyeWDuUnNkYUtwkSJRkAfua4XrHg7L",
  "key17": "3KyftZCZXWarKw9okoRs6xukG4SYCsLDVcPBpu1kDcuVCE4tMutQnHDPKzTDk2GLHAzK6fezocAgV7kUoqsw9VHx",
  "key18": "nGdx5TYtK9PN83oCWaseHFYxqvqNJ7p3GF6UTT1ZE3iXH8J44uehmaBVT1feuCrcr8BNwegUHsdnVoWGdhqVpGD",
  "key19": "3rxd4FLHAP7dQjazs5w7n5yLSxTTDJFZchFdyEeVhmfie94nYH3zbu7JABxGrUeeUycmSYfohq5a3ti5xHWFSdWS",
  "key20": "Jk2GPzQdbUQr4Wc7YnDEDDZojAsW4fvomCwpxKJSw4Y47u79YZtcM1XRRWJP72ZSVfo9sF44fxc1PLUicghR7Ri",
  "key21": "38x1rB4ihvuJZUz36M9djbtrQj9GRPaxSN61ALvZ93nUi85UnoGjLJdw3sXm63GJkiTJNBfBTu3RDhfxHAjC9et7",
  "key22": "3X1Ugjsg14tSztL8srVmfT1ekjYnpXYy2sKJ4mNsHm9ZKz9BUK74Ynvq4XdG1aP6Y9sBjx2a7qZRPPfU3LtrWURm",
  "key23": "5SyhMjcE8P9xmhQ62yf4EhYNPtdSeTdBWat2KJPf5CrNghyax4r8uaTSZjeXhGf8uCPFyPzH2pboUtjnMRgvLF5L",
  "key24": "2NM6kqBCiNhs2bP71bHdMvEyU9vLUunPz3n93FvS4Uwc7f6GxwGh7r2buCKRrnhrG1r2U9yZ95udnuPhghQV4bdp",
  "key25": "v7eLPVvf54rvjSGyfHz3f6vKgYotuN4yzskrQF2U1y9SuEr9Hvxt3iRTUJGpFcvK9JL7JDfweqMuTm22vy6quta",
  "key26": "4bHMcvVBxGehMZDDnHzdvj5Mss3n4YN8gXgGxnBhSq8Y3jd9y8pHW5j23edekgsqpJ3hKRJeDCSBfNxEn46j8mkP",
  "key27": "5HTNTUD2QK2nWaieHUvYuKywgER738YqixMohdRoUTSvUVbH4agWTq9UFvHU2ZMg5MW5M85CeKtnBwCFRhWTTL5V",
  "key28": "26EiRxbo3A6h2QJCRfHDTExPgo6JVoA22KH5wSqsigMAUGqTsmzVxPQdhipDuzGMBAR1MvPozq5NziwePVn9rQeA",
  "key29": "3szgzuuzCXiwF5TKEVoZsGkLfWtSjZx4Tr2KuVdbcpvBsuckDyG8kfFnNZDYwHhvQ27Er86uiWfn9a1Ans527ibc",
  "key30": "gYYBXHteRf1eZMQNbXoSqGt7pYZ43RZPk1fXMQv1MsZPtJh1wwPQdpdC6UdMEenQzWGr5GESvzyvaTeRjW3dQxU",
  "key31": "4dgRKPCsajR5YGR8Rw53NjJwdkPbYi87cWMNvNqVYdjgz6bCY2Af8tTBhz9BkMaP2VUsD7waor5pwMGrzbnHpNu8",
  "key32": "2N8kfpxxmP4AiFV8GhtcJbfhp8WXPEUWZpha5wtBpWQWMgwTvSne3jN6ESryC7Zs9jP16AehXMqdegdy318TcV2C",
  "key33": "3dVGGYnRX9BrirXUqNN1qyXMrsem1jykR3PXmAixsnn7s7ukJkqwVBBvnQSaH4Tdm2RhMyspbpKMwE8Y3gVcSDZF",
  "key34": "2pQjhxdKZD9ty6SNqTxJ77FhPmhYLPinejwnYgBDPe1gMZLrDhE4To4gth9RXsULVCm4BWBecSweRK1wGuoFVvtn",
  "key35": "2Q3Ju7D7D2puZHoscPuBZeTjfoWapVEDTv74oSHBDuXBFnMMy6ojgQyETMbG1e1UgiPeyH1JPysud7kGmry8yBLM",
  "key36": "DihLU7Y266chtbWPbobbS45vEE4NEcL7jZww7A3g5XYwRWhUm74oGvbdJKBcaZcMTnv2Bny5mtwJcKzNeptnZG7",
  "key37": "k9UtKr7ViS64FpXvVCiXyzjmJXKyawT4H1gB2ZGThmbGubQMj1LrLUeQFHe62p5LnuwiUcL4tMvdgBmEQoS3yz5",
  "key38": "5n2GMQxDe1kWhgrp8VsboM5yXNpwCovercKX7y2tp13Jy54rDvdP6vxjzkB3yWTinqzAHndyAvGQRMwM9PBT46ca",
  "key39": "Km44fH9F1h63HyATRWqr9jjthpwAamE88YG98c76oTjYXSC4XJRYHBW3LRUo1J1vU4325SnQydTThy7m3kE99w9",
  "key40": "9kmV2241bwsGKJBxtt5gLS4scHWjDzPknpcWX2GJEE1TiA2icNPizMAHjZsBRz4bkAtGR2WvYdpwa7fJA2aWiEA",
  "key41": "kiPdBfK5Db2iRALt54L5kFBayQwWLEUJ88mhe664neS6peTAS6Teg8SPCQ3ZnpoaH6GXwuLmKcJjvFfPX4JuxH5",
  "key42": "tGCRPWyoCxxknkTFqSiKiz9ztugg3MejSNHW1j2WnEwnJqAkyB4u5Y4D87GQk32g2NgJNVHcF2SoJswRmPBYaDC"
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
