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
    "4cA3ELPVstQaoHgajHRQPLGbd7215cVwpRzjaFoKisFy11RuW4LbAqaByhUCVXJMzfcBUKa4rhASvYF7MxgQ1Gis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ri3uhZbd6apXDWMukbEdCejpGKGvdoz9exGirhScwPr1Ni7VAxX76D6YXdWrfmuneqSK9YdUgf2Z6AAwG4dfTyG",
  "key1": "w4SShLmWihpineq7sLGQNae6mWnYG3RXhuUSsvBWRQ6xXxDdD31s3hD7tQLWcqeC1SmNfzBNmUVEK8tMxRYxgYW",
  "key2": "2Tdo2h7kWdtiMNLF7aQkptYYBAA8xPNz9kvCubyHgKyosQSyb1ehFruw6A6LXgqbYRpAp2PJ6BX8Sg1GyUFcJiA6",
  "key3": "25U3wRRsY7Lfgy8yvzqT446fg3LBSpy6rQrtpVJRBQxofo1nRYZYH28GB8rzS2YYvWuNvUFXCwGAxFwTifdzhwWj",
  "key4": "4hjA8PwiTg2eABWwaPXGZNZxH5raC6oQqpxQs9R5GhjwJJA5A2AKU7ZjuroH56pEUCeR5ys8npx7GWDSxbQodXCX",
  "key5": "29kuHxYaV8s9NseKZwzVCajFqe9SVhskVwgud6WNn4g8Nt6b8R47BeXPKvk3ndj9k7EWuBu6hyxiVz9jme2xzEdf",
  "key6": "4By9aQkxHJf81N2odeywAvEUFmQQsFTbZkCqfahcjRUQrMeHJK62L2b5nhUDZqkZptsXNwJgsmcqgvVd7kojqf89",
  "key7": "4B1oiRds9jtTRj3wZx6q6Bagmh28TgKeRMoDZmai4xn6XCEpRQnVnQrNJyRvcWvd4ESjazTGkN84kgGSaRSxuxQx",
  "key8": "qRRM4YRzmo8Kdgc9oWBXfadWfSkZWG849Prd73FcKK1ytMX6GSwUgoCXkwyqs5YQvocjkaWvvys2bKSE9Ct3X69",
  "key9": "4PyhQc6ikGNmcHzLax1r6ynQvQaTTF9vhv4TYPt8vuwgswt9tZTn5nwQGGuNRJC1nkeAJEAe5tkiXQtbRyJ8tJqN",
  "key10": "tbKGyYhcE9TkLu2ajTAmMmnwsvfoEsfxxoTZUY58USPgNFWt1uecHrosmQfBu6yzUZEURUFVQ9RrTVVgwAGSm73",
  "key11": "5dEB5mTHkYKyZkEgU4Qaa1suEG64qDkrUYkrrxkDjLJprfr1Mmqphw22nm6F2xDQKXLFgQLJWRVRLmoNwJDifpmA",
  "key12": "5Cj6Jude56DH7RzfctPCvNwjKkm9q7mtjjvDh8mj2K2N4pD9ak5aeVBGjwESqfkHcf8eCkWa9TYF2nAp9Z6pjX87",
  "key13": "4GoBJAgGoGZLHbzGXeS8TRM4MzyMbDXbjB4E39dQAePVCqysX9L28oE6mcgntAEYaNH657ZrmXAu87caTAkfxt6k",
  "key14": "2A2FYKZ1mKr324YWeMJbzWWJc8mXLzyrmk158zGspy64iZr8wpTmqWtNqestfNsQzAkzLwdThPi93kNzV9eg6Aip",
  "key15": "5YKHUN2X9ReyMLoVmknTQgTW8ywUaYPFHyx4Tps7mBsQ5LNDjppUZ9QNvUM6hxGc2SkqeZ6U5mfj2qRQMwjsq5ot",
  "key16": "5cGCsvNno546GwaYDdmfoQQ1X9Wh5MEtG47cskJrA7WSSR9snq5acWki9bSVEXWfKJPii6LGzxRGXNWzCPcxKEMS",
  "key17": "5xJCXetTc2UMwiQJAggD5FMXnEEUxyk4fpsHqzxa6o7GZHaTbpwRQZh4LGre398CZ5toF6CFdMYopPhaUtXJ7u11",
  "key18": "nvQETGEQXepwybKAHhviF1dvNP1csrXWQ7wnHiP7W6yMZjvaiWMujv9W768zbYc9ER3KdXe2bdr6hQ8BpbKpkrh",
  "key19": "2oaqEADfjei8SBWRxann8QzEtAw2YPXJUHvwee1QZijhJy9TPAsk2SsWxSt9da5TdwXDsT9fXrwsyh8NQFtqueVR",
  "key20": "5CBShcKiLksc9KvFe44DUbPnGgS7K9C8WoAE6BcCYnGVdy9cXF9vUzRyJXe66bJG3oDTqvJtubRKS6k9fFURTcu3",
  "key21": "3JQkgT3pVXUW9TMddufdNpPaZ6t19Kme2rDXPaKrineHSUxj7X4YThvX17qs1VwLnC7PZXG6q49rGbJz7X9XZ73c",
  "key22": "2v1yRDPGxF1NW3Ng2dkiP6wykNLuvQBxKnFUZF2DavrJV86SCN2WC7LMbEKiSRDBnnVzPVoCz1mHco9yk3rsBHCf",
  "key23": "3VFEBztb6HZFCMpC8tNuSL4UDrR37JL6qk9deSeG3yWaMgTpKy1qD5pJypcQNZGSktPGhvGECw6WKEMkKmx6qyj8",
  "key24": "5LZ2DRVKafuBurqVqxsmeT9QHeruMJfcskJ9a53UhEnH1dDRYWWP84CzHirrrSdVfpZtrESuAByFmzxPvbTxSCbG",
  "key25": "NXBLKoUvv5ba9N2daCQrdBtbgNTyc2BdqKf4wKRhCrGzqVf77y5iQYTrp2uvFbMCidiLLjnbBNYDaJSfhejFxvP",
  "key26": "mBc2Deq8nv83cviK3UHhfBK12mwCrNNPih3JSScjGC5Q3u6Qgqb2245TchzpAjvqzLjkqYdAovvCUBb8yiku7j2",
  "key27": "4peyaJoZGUshJshw6c2nG2RuxBWp69Dg9B9rCHyt6xJLcJNdx7C5Aw2ygxmnrTdmVtanbdmFu9UxRy8Y3p6Vfa47",
  "key28": "arjRhGrbnE5593oUUaR8FDTcDz7RWWbzLE7NPGsgfWoY7o99aCqbXXPfF9Yaz3TQgGgpZTdsrmR5pRYZiCnuXCq",
  "key29": "5n1HGHWRqn3obbhPqDkWexuPPrdszBydLBuw13eYaaP51mHCtdaiQK6EzJ4GnJSZJaWMJeuEv2x1YKeK7oxQcVA8",
  "key30": "3VRNixicAdA23uELnwJ6t3ks9xx1mp8ehCQnN1YzrEYbP3Zefaj5K27XS4ePgqPEJpHoFpwK26ky23gZ3WWqZAQa",
  "key31": "gEyBA8XWUfzDLrvdDah1XuxguCNKeMJd48x5nmjCVMg4UheyVYPLruMWqgwTEEQ8kjtEoRerEB1anLYc9jiMXKD",
  "key32": "5ZBJGwRTkgXgwXtBAq9e3FSGY1nJKrbr5n79qsysaTaRmTAjma5XKt1xepJnbvBDXYonig8sPQ27mD9vvQe3UpsU",
  "key33": "2WQsMFC1WTyDWZzYKRL8Hqe8JqRmSLfMXPe77BnwTm4m7i7tH2G15tVaoLBSzqpzQcWpkpL3j1XSW2DxXHhZ6Bqh",
  "key34": "5dy3ABDcUCMZMbga6KWVm9jiZtcuZvLhXTi2PnccjtV3zqA9YrCQHBPjyp2BQthY3282qzuVnYXffH211QqVxMbQ",
  "key35": "27PRKu6g5t3ddVxEMCCUh4UckfgPjiARxFDxdNeKaqgF7oW2sdKwRdiVwG4d4b1MLTaAPv6erkyovZuZyU4jGAaE"
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
