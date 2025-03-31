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
    "45MF2J95xvDYY6pb4qkcB2oAPH9URAMeu7HLz3BFaRPKA5bnVkgHD3kbbFhbEg2JD8Nzubc9GWsckVtnHNJ9KfHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29MuPKPN67iJB6JLfZTKUgoy7BvsQvvrJavhj6SuCTXterYQvnYqcrGJffsupUE3p7KniQeEmjjEvCw5qZzQfJZA",
  "key1": "4yN5oyNkjSRtbMwHDvo8zDrE5gbzYxekAtXXv84aukYydFngqNXEkjkBiSLgY2eR8yuuEM8tg2UG6sFH6WHP7iek",
  "key2": "62u87ccYrzyCv4gaYsuqFxYN5VotZ8En1H4M4UQZ2He7wUqQuoKsTw6ipxbYsFGfBCqAV7ZSKCS4HoNANuP4Gj1t",
  "key3": "kzicvDD3cHqcNweW9HdRpBgUnv2xb8aQizEdboVqCJWQqWUecK4RTxykJVK1YBchvL4EexJ1qyo8Rk9HxeSyYAP",
  "key4": "4nPJShoCUHSXMk5G9EpG4Ng5x7chSptupRMPH7Yshw5wt2t1kugL1CLLMS68UpXQVjh6y3Z2CSkSGgwDDwFkfG3d",
  "key5": "3PkDvuWebkXfJmgMcUjnBbGqKBRjzVm5iUcBoqYQoCChQrwWCC4yLU1jQmxjou7hWYCYxrjQ7WWRTdC5UWhU8TBX",
  "key6": "bJ5kgMAfJcmFwJ71NSA9ZjHFCH8uL6yRA3YNix7T79TSJYdoDMcZh9cjL2bAMTjwMmbyLSLYmn5Rc8ZK8Q7Z3T6",
  "key7": "4suQve6dnqxTUbutA75MQa9BuCK3KvuRCvsuuLers7cF3ws4Lmqx6gKKoRn3hHsUc7c9E5TXjAjL9DLXim7X9Vde",
  "key8": "3N2dsMSzgXosBEKP2T41P9tPpFEbpk6YLCeLidEX2g4zeXp8Uy8MKoTaAsLbkQgHUaUVxuybQHaR4XiLBuUu8xQp",
  "key9": "2sfd1RmyTM7WM2CTgQZQ6xHDj2xDinpyV839jhwYXfd8AUcYDEyJry1miMfpZ7xGWuy82i6JFkUg2rbY5RBNdk1g",
  "key10": "D3L125YEeoB2i7fQ1VUM2Sekn7wcj58HBafxhRoiaXhny2kwheAof8QdivRmPH7Nse6ogBs5kaFLKmVR1HaKPCb",
  "key11": "F5464jwRv326vPjSv2Z5oVvRGopeG46v3QCcJWjBWYYqn61DiWTGnE2qHU63Xqozw3XxkPZf6QkN4uPkhSRXt2s",
  "key12": "Pnhre7aihLRyR3B6iBrNd4sB72Zj4Tw51fgAKCQfUsdzAqtQ2rzii9yfxfFeqMdzNB3fiLT5r1M6tRGS6HUMTWA",
  "key13": "5KTNSpNwMJy6DprqgdyAqAEu1pcRcR9JWMyjofdY8UEoHaRrWMJEkVLMHABfu8wMDwrDZP17CAuPmjvxQPt6EaZc",
  "key14": "3gVdo7sPEdGQiGpmwYxGw4EbtzkExKrkPYoxiWYxa7G9mKeKDWUt7J6V6Y5jTchBLzQJ1YLTt7zAW1j2fpw379rp",
  "key15": "siDTDzsYB4XLAucJiNNq4jNUF5iVrtCJM4ppYAqFnFSX1NYEKiZYvxSCn6akfqJEMBz1kyuoARTvRzoNuSqKeTq",
  "key16": "3rShyMzZhhKnGsyAEChuSXQiSKwSQ2Pav5w4XeDcWQtGxnCXjxJwX7gEgSD8ieSphwgQcDmtXy4wXMAqfAFHMYdS",
  "key17": "4YBYYamZH9pHEfkqXRSBD7AokC3T16bGuhsnKGVJhaFQJ58C9Czih3dWnxGt8qKcrkZ6V5L4cTZPucFzDPhKKd4o",
  "key18": "3Z9KpkhBUvKbbtSobtCXX7is56bME8KXYopnkVgVepudQytX4eapG6vUK2xZn8QquxwtimC9dzrRPDtcYP3J1hix",
  "key19": "3FpzdoEnzgEdnChTWftZSN9uwoMurqw8zUekTKc9mWsLm93oiY4hxrSW42gwK1mQxCLDu76dNKSh8SyLU73rM4FM",
  "key20": "3GQSp3sDcEif8T72b3QWsvCWxKRqTkaiLx85rQ2fQXSQ89dp4SC3VvL2GsSLegcLsPkzbwitgwojNBwNuSSJxjQa",
  "key21": "R4Xa9MZSRCYKr3BcXeMj2U54hAgGVD3hXtzfqYei5mQeKQkFG9qjYExXbaXFvub5BwXcyeDSmce6V9dFJTgqVRJ",
  "key22": "2iQwBQZJU8Y8WL6ijemeFcBzZbMSzubmLA3iGdrQL3WVCcPphkAzYYk6ZTuZHLzndH2RzBZ4gZegQJhLxreg9fy7",
  "key23": "nv1b6kBb2oKeLZm7LK4dcE7TLpM54dtueWw6hCHarNKeTQFgDVTwqcjou5A7oiGLaHaNJiFX4pQyYWYbmnMmkHz",
  "key24": "2HwCkDe3zNkQwJwuwCePw2Ky3K5Nr2zHaBQtMV2X9ndnvGmfrWk7fRJc9AjnQunjZeuxc2w116o8icrcitny6c5X",
  "key25": "rgFuYtuj6KrwHnnqvcURRKG6DZyHNTES3CRGiXgiCH1xu39iptukzB6LmSuULaScbxVvgcx1xN5Lb4vsKYsy7kK",
  "key26": "X5AG1gHtQuqjAgscCuMs6s1C7qAGahVRRfjaBMdtznxHqL88YPjdDEaJocNnADBj7AKr1XTbhS2HKcBPVi7BNnu",
  "key27": "3bxjUQcRzUb8omHxuGBWeqMphbBKXJVXaQwccSYJKRTT7fhqqbkHUAx6zauhAGeNYkFfJJYHsP7zXHVHt29z54bP",
  "key28": "213DoRH8ZruHqLankfvRSyhTuy7C4HTEJnLhVLe6TPGZ4AiJR5Macwic33oxvSnqMbr8n2xos85dvbyp2Ermbn39",
  "key29": "4JCqM8wc16Ddb3WoE6oxfoYx3Y3LEMT5G8NCgG9vf89G9c45TzQLYh1VVpr3UWRTkc9XVmH9mZzTMbcz2NmEe8iS",
  "key30": "4yxE5StVGxEo1EYeEGuYrEqULrvx4omiqTzL6mD6uyjnXFuhmae4o5q5h4D9AY56Yve1WtyTurQFBa6B46PiYQSC",
  "key31": "4cR5BukpDDBDBup1LaCquVGg6jtkCSdGxSmBKpcehKg7ugRsBiQx8CXEuEvnAfyKCRyxLJBUbUZMx9LFovdyUHsy",
  "key32": "313u1QrDSFkNEtqXKux53XCrpChJMxoWGSkpR8JMbBXDvZaWNRWH65L4pRUFSdnPpgeDyfbkpnutKKv4B1RNjCfJ",
  "key33": "pmUDVYymyodWPPHQnWbNKBpB62MQfPx7RbXcfoVEia6Pmjcv9HPpFcs3rM6oZs6cU4Yfw9WhLN7TR32DycvSzJa",
  "key34": "4iYYcbPTJPjqQcag4EDiD8XecceeH3khdiNVChycDCFWdw4GdTMQjLLGHzZJqfPCqj7QscE8M4hiNWHwDmS85k9y",
  "key35": "2jGKVtjRNjCDSMDdKBztVSz2SEyHcyHyyxQU4QPmjrn3zAUhFZFYJrzeXn7BK43nuNzAJAHpXaYynKNfXdrp28By",
  "key36": "2SSgR9zumW4jQZkEHh4NwaoCzy9oQp2jbgjKEsvXrEd8gGhLSPd9gqDS1zKzMQW9JcofjQ6hGid2yXYwjYGXJcaG",
  "key37": "sSrziP2tje8gx8AkmXf84wDhiBQ3d5kiHX3hLHPyo34Ltt4RkohVVoyuDFGtJRG6XpuwLQrMNRu5Kncb8cYtC9K"
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
