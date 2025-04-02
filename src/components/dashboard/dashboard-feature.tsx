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
    "5wbPN5KbhpXrXNwokvCZ8uXws73AZ8MmeSJbJHsc847E7Uo4xpwVqgykdJcLPXyF7hTZwcM7hZiqdqSbxcqwE5yx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DBoDAeL6LqU5X3h9XrqLX1RBeaB12EjgjbVw4R6iPy1kiTeg1u8sNBZKneUXkstVtLnw8baVPudctwz2MHotq4u",
  "key1": "63duVXYGBBxZwi6byU9dZc1s2yd4FazKghebdDhePGsmQtaK3VhNxr579G1XzSSu94XzQofdamz5zLR3Denr3NxK",
  "key2": "4SDMRiFbUHJFKLP9YuzNhbHVDxsVqCtDgf9VcGHpKCY6WKnaLQc5Z4yNjqM3x5i2HyihveWz7ouxWXDm9sf7rTaB",
  "key3": "59GajKgtPgLKu6dH9Mm11f8BZRcwFfybh7HzrRxqmQ9k7YMq4gcMLwdeXRRQiyFhgJhQdA9WEKhcoCrLqLyBpJiF",
  "key4": "5NWTeY61nKJWymBwxn4R4ZwTdX9PDT7zdzaW9DY2GCh7iM122jBALXERdLKvZuUhLkGHomYBKgJbqm5sqZ8oEEs5",
  "key5": "38rGZioU3bhmTsRQaA4qk39fv29r9GAzVLbjx4V1Ev2xvQBi5UbiXH1At9HvnqR9DZWP2yU5ivWdfYjxCTwgXbwd",
  "key6": "3X3WCNTSra5onP7ZKp2qaPuNQCwJiZ8o1ZK6Knsmupqw6nb3y681QGY9Uzy1qnVwfM8uac2mvTfo5AR4R9bvGXKr",
  "key7": "g6DrhMcbor9KtpUu4fo7DxsKdrByNfMCaABfZrecN7FyRWPGT74wQJbgHP9icrPch6wyyBd97xgs1L7rTJRJ4Bb",
  "key8": "3YiDH1pLoopW7fPJteiDDMhM4EsnBs9YHyJRfGDEE3wSRUsAMcxdekJSA5FYvZCsCzZYBtSMzfMBXVyWPk7tXxnA",
  "key9": "2nTqUJhSBQC96sfwpykBtfkjsedV3ESGsihhki4FgTDwtpXt62ZuwZ22zW2vhVPvGXSYDC8uMpm77MLssCy9fg5A",
  "key10": "TMxaLbcbVJr7WJWxbQXRCxJmjQShbANQiNKe12NJdMmoYAR11Muf2b7oDJkxoPWqs2BBWJsnRVxHwRZTstcS3GK",
  "key11": "dDQKvJGr7Ju4oa9KQrnLwRpsy8wPwwe5fpe9wkdHJANhuk2CdxE5XSJRZNtX1cLafy4kPfRtDGCyZybqDZKSt23",
  "key12": "686QghC6vPBxtnUapPLZoDLL6xYJhfULkW69jVUGEBK9raDS9KEfCQiRLjrYbKBKQMma8fJfTgyErNGTq8UUdHy",
  "key13": "PKCaVN2YyAT8pHtuDNr8Xze8nXD93w1k4peizQDHVHmnxDHeF9cpSxgE2f8QKTBNXz7kzR6aXfjAXd2SuZ72e73",
  "key14": "5sMDxJoBaN5a3mCeBhCk2tdN687YUvn3h3gXM4DbRJAP3M8f5kFVq17ovxzaoPJJnjH3sKKxNPDWyBmxs43YPjDZ",
  "key15": "3CX9w8RTC5Azw4jQ3RFnqbTPyMjjMv34JCqLTezsEsVrnTRz6uvFUtHzvYVoKUJzZKkEhtnX5pT8vH7jxLetywcL",
  "key16": "5vbwRGrKoHMgqf62yTEJoBdQumAne5KbDqc6MopH7Hdb4s5mhjUZnzHZ1d2M7jhA3ENKMr2RJCGhr3DPtYuYBTZF",
  "key17": "g7ZWzfPGz9pTkdAGCrJUaznH65ejL2yvdE4n3h4mxdd7ESyPiAY9UmRtmRe6ab647UHTJig7dGAX2tMgkvCFRZz",
  "key18": "3rKpLNnjaZbmK3oR689tbidf1gRuLecyCpUbN8PhaY7Dw86xyXxkwmCJLXBKVVmn7bhRabwUCXnUhLHkVH5SqJwV",
  "key19": "4dDn4uUm58H9EuhyopTPHgAdehWEwwrdX7BVyBoosYYxqydFknnn9rBBG7PYbsE7r7hhrFyaTHE1NBGdVAGRJ7CN",
  "key20": "3NWeTrLhpnkWyHN9echKvQYp7RZMxa9URhpCyPsbpVtravjhRcHJJtCsbSzUwGNjmgQ5S6zNoet7wSV4DPECP9Up",
  "key21": "xUwS9BDGUTm5hGgBXhveZFM2mE6pk5jgykHzzcUGA95g8WuZ2NqDBJbNMT7phgPfJT3YsRvwUAQgRBxxHScP131",
  "key22": "3J2jJ15Y9QhnVHWpsmFLBLmhQ4ofrqFnXfLMcwd7LWce43gjU5KQjpKCR5arxwriUrnJPe5yvYjJYFXy2zyoDHkr",
  "key23": "NuAXmd8rbi2LEJXiLsK1MmPjFwY1vWpfLK9SvBq6STeuTbFQT6iBz3tKEoTgzrgiyN48gqVmC8LizSMvLv6RX4w",
  "key24": "24ojnaiWbk6J3aL3dav8f4JupK6zU4GwB1rFptmXNLbLuGAMWeWsVb31c2sCpTDEnkqMsTp7QjCgdhGnjaVkzaK9",
  "key25": "3jfNoPzr9S9Kt7GMcAHtRrTpeN9ARGVhKmZW3mDMoRmyARjZe67LfeUHrSth74HXdYzyarHSzWdTasV5pg9bg3Go",
  "key26": "3UqMUraR92px8pUKPPQCFMUYwn29WQ2J6Exbe4AtUzeTbqja4E6Hmvootnpt98b62razmFwyhPB6WWywcebxW93q",
  "key27": "5jgB6YuJ9AVBSEcnJ6Yx3xGoWRpJkKP6P71jSefemP6eMK5eLYKd6P6TyBaznZHRm68z7dKajeNYLUwZzAYE7Lfy",
  "key28": "4K9TxxCTbM3WUhszzsiCc7dkYkxjT58R1rsijebp1ApaxzWVDnG8muBrkR4XrbjfXQm5WuuGPEgr3fWhG4NKef5L",
  "key29": "uX72EujykTL36VeQGMhM81kWZm2RiwnvzeSYnfpN8iXnuXbTsayyRFcMKNwGuyC5NMFdzSsosjbAcTAodeESB5Q",
  "key30": "3Rm2vsbP6pj7j3L1yJycF3SendfsvTE26H8nZYV3Jk9ghmYxiva2fynbEoTxTZhNPRVPVkgMGZEL6CHbzcXscary",
  "key31": "2qWkh2YCJo5FxcFohLmvwftScvsPpV4SUTtj6GYdBX2EFX9QWq65RNR4GMjaAYMT9UzTfKDd5dzwBKyCqB7H8oAA",
  "key32": "3QVPmDbg8DCkzhRhptbWEf5m5sTpwbSGoi7LZRh4k5n1dxyZfkqyiN7W9ocdtrj3pTC7VKtasdq3c5yTgCMHY1eh",
  "key33": "5Lzo6SmKu8qakSahMf4PbLs8QPFEWDKm2idpVUAPH3GUY99UU7Yd1Xz9ukzVJ6vpSuB2xLZj64S8Qjw8t4NvcGXQ",
  "key34": "3pf65aAiBBNfKf3rv9uibhX4BpEYkiaPP3kdNsFeYBqUUUdxpRVTwvgQtpgU4FNQPb1enRUc1QSUeZWveQgUMCNp",
  "key35": "5R6iZbXPf96can9SEnTDiGdxzNJGBAAeFZnHUQx9zm5KrRqK7VNNyUpeDsqa7hwhYnoyZncj8fRDGqgkAidn3qZj",
  "key36": "BpHdz8a1hQkZYiKLxXRMSWPb1rRLUJ1pu96iiu7MDbUGHhuZ3iSWz8JpqJzNhgnVGaCtEALYP717dPfKi92p4TD",
  "key37": "3eoH8RfbNxmUDbHPYtfEyGZ1bdmR2uxTMyhD1dBoqFZveTeSLWk715tuPDJ6wXZ6U5acMroXchcbMvhRiHHDye62",
  "key38": "2fLP6Y6bM2G9FzNo1kjsE47ine4cRKS5LzGCLj8xs99Y9pT3S8WgRNXfTdSDuhLEZiv1cQTJWLKvURAvboaiZ6jx",
  "key39": "24uKgY8Wy5PSwaTZU7M4jMHxhHrcUiYUmuwN6j4ZtnLwTkUgGsNes4nPgsNyXkqDUhumGB7cNbVJm4oRrZ2dQd1Y",
  "key40": "2csowuRUtwHBGss9y5sDkt5hxBzAuKqdqs7br44w7eXCDfYodXGiXW3r8BKCQrkh1Lcr3J4uT8M4Hcedec5a1j6W",
  "key41": "4AqyA1UGiSVgnDUgNy9MBxrPnFKk2tCqCPUt9pSHPCJDEmNKznbERoxhaNxKBpWGw1t9qGzEvMZ7PBHZgA4u6udd",
  "key42": "5rsURCweBSM1buXqW8YxSbmDY5c39BbWS9hsZ5CcDU2ZXqP4zPQeqtRyvVwod36csg4jwRb3nTpaU1auRSW2Ju84"
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
