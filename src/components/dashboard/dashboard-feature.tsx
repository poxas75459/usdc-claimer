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
    "5n1MMDXoQ9p1SwK4FJ7BE3zGqvUYw4rZyAyndHV5qmZ5XRb2d8Pe1fLavzy9kUXeBMrriwFyGLpDvwKHpAztyGWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ph5r57JSvW64dZv4ZrKDJ8iu9RgvRn1jbatanpqN4qENLxz7sTufADm7ozZXUhbYCcNEgMWzSmTCxPwc1bekkHx",
  "key1": "4EkK99h5wgfms4zVkxqe7rxzCoj7hdJ848qWZvAfaFRuGDwy4wsexLtLsWZ6Z4QTErMD4b3QsgdwM6wU5tivLF9X",
  "key2": "28FM6kwRr5nhCY6WQyPRFZLBmo73UDadrwXHV2bAbcTuBqXUWGHDooHi5FbTuYvD2BMFPs6Ki22BwrWKJ3PKHt3K",
  "key3": "XsLYy9m7C6PcCwrFWLHrf3UpdMyoaSgeHgptvwyEz3XWQDDb3KBFuAssvbFmFAmQvfLWsVyPa4cGi5C7XMygRYG",
  "key4": "59WvMaNRcZvmchULg3XdiVCMMGAHnMwPcdEHqqvEnWLWNguA48pj57wRjNxqZ7iu8XFLKTbVAPYNYnmW4v7iWDbZ",
  "key5": "ZyYdGZxZybATLXFS1KDNQHqc4Wegt7aaQix2fTM5BXQtPjjr58WixrUey3z3Y2xX97TrRYzdLYtNviuibK6xBRq",
  "key6": "2kAViMwCTTcBJcbHFMxQ5NL5dAmWSnxx7FLYEDqnZtQAXiUUSPp5WahQxibLg1S1FmW9CyfqgdurCqLTHAYiKyqf",
  "key7": "5u18tAC93E1caSD4mgdsnVqVa1sziYt5pQbXPD9qdsMKTFm12xiMSTSeva5iWcj3HPDNJFFR8EvCFc7EfR8cZfTU",
  "key8": "1jte3KNosvG38SgoY4bX2GcJchymCJRpKTrDs4iDDUJneqUscmfbNTFZAe2B9dLdszpv6P4Pq9zMQb5XQaGRA2Z",
  "key9": "ct2P1UYQom3775cVFaMnCGo4pQ1Ah2GCMHELc1x1ndVu114Agjt9ZigzdSHs2JSECq4J2nqptMEGHvnhxac1f2G",
  "key10": "jp5r68YfeQV9iqmgf7fpZvJc9UQoLWY3mBM9rnxr2wBHdhNH3kE4kdY86k8kD9tazjtDvAbVJyHaGaW8XvNyGHw",
  "key11": "3a1x6Yrkv8Xi3kvNWHGs5c4SkHtkqzodVKNxVboExdEfbFfZCh6fPCGJz7cE7gcTxxFP99h9EHcoiNPchBqjyZij",
  "key12": "3sagoGJeHDpDrHVvUMZZWtivJYn8JVauSfpMf7rM4z51nA4TidYmpA8GbzktxVHgcCPyd5pHeYK21CSLitvqqCfP",
  "key13": "3vNnFS3DXYLnKNfCDYv6HomoLpFtMcaR6mr9WJMbYxyQXXroWERc2ecb237qZiHCZA86RgPqLE52xH5edgVNhBs7",
  "key14": "5ZKRiHQBfitTCwdGsmF4R7Y6f87mtn6u9dpViaAo41tPq1w9tjkzaMjYfd2fq67xocPTHpq8SgDUFTcjpdoMgxTQ",
  "key15": "2CL8JFUMWyTeiocQqUViimWxYYXWpExHcvEGd3dKZYTSRNf7VTS9PQJKkYRjojRs8c2Jqa1dZQ6CCC2VRY2H6o4J",
  "key16": "omqUyrvi7XyA3W2ZDcpwb8iuiwHp2F2ntxfxEjo2BJDHa8x75ru63RUcxj9ALyLq4NaZPBG112WMRq9RiiBqDoy",
  "key17": "4ry5wq9od8e1T2amjbCHdw6x6fsKTmqhM81EEDdJXxyntvfJayo4jnB12BHLg7bq8zcwK7pZ6mDfbD8HAd1WpZgb",
  "key18": "3hGRXMNTBeDF36QeJMP29k87oHRerPZdpLhCurMBjyLw1j57iKBwc38emom2fk3FPbWo7bHWDTYjxDwi3hWfzf2J",
  "key19": "4GXurqDNyewTaawEHEs4wkWXYaCkddgQzsYQr5WV7R64KKPY4goeoYk9FfUCn8NXKVRZnZtekv94J2Xo7617LSNk",
  "key20": "3gGud14etiM7ztrTPpzuUTASRPXpz8DdnaFjuFuwqJwtT93asn2RWb3DzzeVi5XAnCgyu4LTbPDNykV8bfpo4DbF",
  "key21": "3BNo12nADaZ8ichvUPD834ugJAkHjoGpry3Wp7wvkdQaaHRQ1V7Vim44rPMHC7jtTh9T4Boe5ZcK5A7t4HTu8P4W",
  "key22": "4duW94ZzTqHzgRbcTfLrjsjYyQUqhcweUpweGoboScwQ6Kdf5AqUFCLTbSkBaefHKYm6FeQjm1XWYDWDAz9Nfcdr",
  "key23": "3VWhSzoEcRNa91WFa9jscuL7LeE6xvwcr5p1xeMo2hqfGxwT8eGGJShKRXF6VVfSebgBnwJXxBSe3dcgSLgsUZ89",
  "key24": "33WsDvC2MKjWv3vmVfZ6HzqbnFWQ2yoRPE4tGMiDpDP4wXK27JuhE9LpW8f8kwAtYHZE3XJGtdBizXFpZhCr87qU",
  "key25": "216TeAeyTyhfVExRSmZ7VqtK9VKpAdXJNCHtf2zBMdJMUPLT1XkTxpYtmqELknR5hNrTsAFvYYuFgGLa8VQM3Njr",
  "key26": "2Gi7dWQXFjKH6MDQvGiFLCmEmc4sPSDh4dgP4X3GGdB3Xfdok3UcDMQCQ7Y38FV83fFpAS4GHMqLkKGLL1TGujqg",
  "key27": "3GiapUmtfRKJXRCWkuFSR2Vt7UFk91THGgk8bP5z1s32iVCPDVhLrtk7H6MUUDL5LB6AemG9RwhttVrHgb2bw2Eo",
  "key28": "YgobAvUfqKUbUrXa5n72L1g2HGCbwvJ966wSR1AgWfHwk93tFKWSxXTaUNeRa4fciaM8JR9A2sCNrkZpez9EyhH",
  "key29": "3NJxhHZ7dLBmtRaTErNnmyWNBrvnKfwo3jjmaGqvKXzhwBPs5nvDufeWswvUTqWX5P1bifU52eSe6pKd1DUMQ2T3",
  "key30": "A9HtPtw3sifpK5Er14irYjPcgGGJ4kYmo2oyZJd57mgNQmwDNUTngqmzCQMPsDxJGF7MRJq6f1xhLjd6YqFMuM8",
  "key31": "3smNQoH6Y16BFtcX91nXZvYs9yRqisKdJ7z7JhsyWKgA8rrT1iqVwQKXksAYXU7vVJT1BxVCpLgAxYjF2hYqh3qZ",
  "key32": "3rmUAkZukarxW1ZGbeTXYZetGuFBwyRZBEWWU68XDb8NWH4dTiYX7K1nWqK2Qq2Naju8hNu3pgsHm9uT5r2gGkrW",
  "key33": "3G2pXRKiDh8KJ93iKQeotrgCkUrYpDCmD2CQ9m61b4zvd57KG63Q4drrVbUt6DjeNkE9eW2V9x24QNEJ1bF3UjMu",
  "key34": "2zQzVKyBEK9CL11T2p3TTT1pr7KDpY3PJUTwbg5AwTHnyz6Hn1dAd3qR73SFYy2oZHQa3Uqfynfbu9SpPLMgxXAF",
  "key35": "CQKA8YwWKxZtQPXcyCFNrrsi21YmUpAVqNSVLnPTLMbCkR3TkTrMhXdVdSnBnPoJ4T6dcUesaxvNktdFLCSLk25",
  "key36": "4azvbxYvra9Xaya56BBqkn7zhHiCusxkQtr72rPyeS4Jqdq997w6BDTQy9YVsZiQ31nNBn29LRjfzA1nG2UA4uRp",
  "key37": "62C4p1hsgBtJ7bogzFh2n4LvDSuttwE8Hs4Wnst3vJ8EhNSc7emMwebB3brCXPYpWitFwhpiWiMVMP7rE4E7zuVa"
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
