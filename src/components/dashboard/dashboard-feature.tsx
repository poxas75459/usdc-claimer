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
    "2TjxSS8h1ptcuyjJeRp1ceb3PeY3U5pVod118FGjBEAg23wHNTDwTye1uFAQTjayryUVk8uJXiUyUUbXySm1LLHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y8mvn3JWfv4AhGEobBZgRk3YV4rvMbXG4yVbFaVMujNQnRedTTo1jtoHbczjugxTfccyYJCqXYoyGEpzPS7F6BG",
  "key1": "WLRRpfJRuNojQCbf1CR51Fi6GmQXuYNUT1kP8sVkjFF7R81wt2ax31i4AvF6FpusPKLJTqgzk65McpDSLNvi3vi",
  "key2": "6336mMF6ZJuCW4RGw8nSA4u94nteHaiCQEpkrpC9NpcsqWLDwwqYUmUhRbqto9w62YxQmgLKnKHR3f11FjTfC9Eq",
  "key3": "2CJixDcUE6m54uFAPMgmtHf96Zmgccv15Q59RcG3KTQXWWneMiEN64ANJF6XZcXtAGiBv1R9JtoBfXJMtv3euyvU",
  "key4": "2sPkAe4c8YANs4TygiQxoTA6fTTQEbZA2J8YGTCbTEz8z8ub4wZBKEE1aUoDTd371b5JB918vQHutMrZsA35K3rZ",
  "key5": "58zCfNszxSdV5qzmsrBvQAgk7tHq4GFcCHq1DHWKu49o7YPF21er4iMGrTBaiFSuuiFp8zuXniF4NECRmQj7T1SV",
  "key6": "5yp8w7oD6Vhim59EKUCwdJNmEjwyRTzUwuWttJEfP55bHLZsRaBg21nc1DwdBWk3WWf843XS1Qdt8Rqd1yyRsFJA",
  "key7": "ZfuRtr2YopFtgHtz73GQz4SNxCfxzrWm8cYribG3vWkAMzg8sCmupFDt182oXRVDTuTLdqxXqAJ9LZA8qyoz1rx",
  "key8": "36GhxJpweGJrm44qyY2ZnihzjQn6YNXLwrJdfXn41JPr1cfPWFCXGTRQb2cNSrc7ycySsUWnvsSdMVb8qW5tTVWX",
  "key9": "49SSa41nrxmhHrjfevTjg7NK36VJGHuwNPQ925cEnWN3KPxM8Qdrr6PNJPRfdnkD1Vv84EY14o376TPpx7SeCKUu",
  "key10": "66dEL4yBYgf2rd3MM4pK8xP1xEjeCharxvbL6b9w2jUUjvMGYuVdbMZrteAuFj5u1QY88rbR6ehdyWXx6GmXdrZQ",
  "key11": "3w8osQFCGqzrSRWuaYo769b4pm7pkpg8vEJCooLHgdWEK24iU4jvkPzXRP3GBgJ4hY6bUTY7P5tzpFn8iHfTCKwz",
  "key12": "bC9LPu33DL7jXvJoQ8szZTiFiPT7qAbJ69DufdBWwcvqw8mYQzqgbr153BMrkFrTbpZPSysNEmVZJfsSRjAwbav",
  "key13": "H4npTLMG7bvnWZQcrHikC9L3NFiEsp1dp9wgzajsjnfbcVtMMthVWgi8sqGQo5282P3s5nVcmEWz4xFBkvKtAAB",
  "key14": "3RsZ3TS6ich6oqCwnLu1EbXUNa9eB4t74dKYZaUhWszRpyKLypmaHKBfzHkWUpxdTi17ivcZDmXmufwqtGi1SjG6",
  "key15": "5qLoqErrhUqp9QsFWyM5sxrAZzwPBKRZxxXyu6hQNXsqMPGS7KL91Kc1ug4QtSJV8HxC6AmfXdpYSqkszioF5gLu",
  "key16": "4CeVxSXKqerQEP6nz9PdqyegKzjznDw9ov3oWBzPCxLFFvsePQeWFu79UCcMiymA7b5dsd9HorQuhCxfvVheQJYN",
  "key17": "2M8yS8Exrcz99QhZYHfSXqicZnokQJSinqEfYsXCqNnkQ6B13RSnsgSB3j9pLHokJaMYJfDz5atHwtjaNa7BrNTz",
  "key18": "2XV4xdHr9VcwbZLBrVxNuhuJfwn3v5tMxgXWxdy6bRuzZ7b2ytmMj2cc7UPZC8JerZxfyAUXdM4HwF5V5DMhCVFM",
  "key19": "dYvEqW8JHY5Xv3HBivwKA1aS4iBZxAwktX311jebwbiVDBm25UQPQzmwbBMo12pkorTVKBDXRn9WjFDokfkTKth",
  "key20": "4HGeTU5Ze5u1JxYESPkbh492U64h784JrSW3sVNc8muAkzmRAbPPDzVLAJJaUzr8sJv4hPatEfE17q3hc6jMWB6v",
  "key21": "aAv7faBHDK4ff7ovm4iCoxe5dRmsobESs8NVPSza9PzvBgfvhbooDvjBeXfrcth2qNHbSYFuB9HMfauU746FrkU",
  "key22": "XNGA2WdpDpcvw3VVaXSz7WBwWLFuKQqkSMgb2v8FWS4pM5c9FE3o9FpjqnR8qfnRYSWbReV8u2WXyo2KS5c4PYM",
  "key23": "3H1A3DtcDGr6AFZNF1r8wG8B2mu4pj2uq5KuuE521fYFLcRbN3e3Wa8e2Xp5aQNonxnYkjrcsfpVevYuQaf4Foe4",
  "key24": "hGu6LZodGpaHvPmte1gu2YMp3xFrMe8BPVnwj6JFANcSp2rZW8KscLjgxsErG9MkmqGytdFEpKJtm2Sek8tgAjP",
  "key25": "4EBic8TYQfcdzFU2JsDN8cLMPbd4MurKySQAJWJgGhjHHC28n2P1J1tnrFmdRfaLVbHEFLnJd8PWoYPnNyRForRa",
  "key26": "f3HAsNDkDWz9F4s3uJgjRBLdSyUzCTK51bqNUitecPjYHVej84Hmxxpu4QvLJkE2ciwEAouMBZnABAXtYEsV3oW",
  "key27": "23Do5nPMdeAphJeV2BEnV1vxZBniqgRhPAxgoh4xPqbK78cVqsD3v3iRBAqJ3UHmj5EqrFokpLnaendHtZp3Muwd",
  "key28": "QGU7EtLDGciaMDxWW5ZaV3EqmcP1VTwXM3zcUgLKTzvnhwu3A5Aao9f2rEnrwTpBTRd2x1DZfswgyBzuNbKpKd3",
  "key29": "25x7DXXP1UdFYrSnkYcwrKAJ9ZNjCx7LDmFkT1mKZZg8LCpCUw2QdPLgkeVxHv2FQyB4Z4GyAGNs4m6Smvu5ZpQb",
  "key30": "5iQUTnWzT1opYaViJkghdQ82tziK5Kq5uAbHBkw6pjTZgRAoX4A1BVfcxZwyVamXJ22Lz4towWxmsk3qDc9ZSr2g",
  "key31": "5NiQjVDY5fbJvWErjAbdpTdh4v5TwfyW7ZVvVARdvHS3KV6E8B8apEspND3qsBH6Y5xuctFAhkumN2WMBYAu4VeD",
  "key32": "3ZvYxRPSh9ntdNZjg2kLcHoZNjwA87E9mDGf6uwsNGoqfPdhZEP8JEKa7u5wYc7DVBGG79scShC2RBjwMhZnZZeE",
  "key33": "3Vvicdj1m38Vs3XJrggxa8BnjMZdQM9xzj4h8NCgeiNCkWusvYF7UHUvk7CEQgPu5yTiwBTk6K4yHLMbDYX8WU8V",
  "key34": "6xQ6J2osu9AxdPfbBL8JaXtAdtp3yVuxYcY3mXbsQcYmaYY2G4mj12T3Z6gjC6BkjBtyq3ed6aaFigqJTRQTLk3",
  "key35": "4f557EJ5iLCsyw3bQSfiGcSXwidUfqKxBkcw8Uj5EBSPyE5x219Li9m2U84z1LhcoZtibamV54Mcs3kjFfkEGJHh",
  "key36": "4zDjJCJqP12q7BCxRxNnpQhEvrL8cQHCyMns1Q4qooU52JFr43VNXTrFkWXmZxcvV29HYT8eiVPsUwfewjiqCKGu",
  "key37": "3uMG9kz8LtgLXbAXH9L1gv6QcinWqUbBGe2k6eKSPXatq6TS5Uwge5n6pnAngEoTJQjrpovK8M8tbuDysuMe5TQ2",
  "key38": "3WivKnFQ29BguauJdYuZo6QeTtWCxjgP4ywhKHgkxot1h2KkSNRFzD8ZgJYpkQakFPx66bUaAwJvskRT3F948ftU",
  "key39": "4CLmrDCU8L3kDQc3EXatkRnnXWkGYGVGEbVafxSjJ4pQB9pvBZDU5LyB23epYp4bQEK9ot5w5TFoY9r1p6oGJhvv",
  "key40": "5p4XneVAC1XH4VSTSjbJ683t64U1XNpn7jDfgu36poq87MzWRLNTHjMVh1tmpZqVfkZcw1HfAwGzvWa3Ft4a2WaJ",
  "key41": "5zJ4GKQqzB4btXSZfeg9yoSfosC7MtVe178uLbZgt7kNRAVB2scf2nXeQZ8sAppxokGMFB5MBASMBv1cyBVN1qd7"
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
