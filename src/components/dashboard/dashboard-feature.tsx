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
    "3SNHTagt9sB7nWJW8VnNVZri4MFqPW1oD1e9h2SMiRCuUWFJj4oeZkUDYo1kgD41hy7ady6PhiwHNA8K9bsESQSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p3XBCZZm1GNoLNftWamtvGNGyYz978uwfVEQWsmzZZWEAR6g5YtDcB8thEKgGYMNFvRn9kUzQw1swTcDrm6UFBs",
  "key1": "29KUuC86e9WTyGS11GWbsxp66NT2uHXkZ18kbkGrX5iniqWGhY1rfjKku5mtkMaWZmXhsqJpnYd6MpWvpWjAnV7y",
  "key2": "4UCM2SLLef6sNRZnZU3jEZPXoMzQNZPje2Lwneraghddgu4kwvixBHPjEY7ww61UABR2xf5fvHvndhjrLipWAJ9q",
  "key3": "5inim6EK6YsAuGcqCpE7ehELb7J8uqC5yYYL4T4puJstHErbFqdHGhhWiwnxS7i8CG4fBUXKZBc24XQeML8pxCvZ",
  "key4": "4unqUUX5j67NrG331Rj7z9zYB1e2dfjMjpyjtneuC6Cvp5hsWeMNZNHA5yUBSg7qKhp4dSESSKWMmpYBGzy5F67v",
  "key5": "3vzLJz4cWgcvab146eycX9zZ4JmdzPRKmfaqY42viFYXBkkQ3k9p3BwgddfWwY1ZT6KbRivMnq7GZAYmnnfhAiNQ",
  "key6": "46PB4x1MbPUjoRS7tqW6pCUnLBMKnxHRtKZmaaAbFYmEBswtokWpRG1gDwSi38rw7hHuzNvjUp1jJCtTj27XNR9r",
  "key7": "2eUqFsKNu2H52PAyi6nxsLjCCGCbgFiCoff2FH95MW7wUnywfb81MSaHZewfTq6r5pJTJ5eRShiS7v8pgCUG6Ghj",
  "key8": "4zpvJ6GMmuLLP84R1fRS76GxXNiT2Kr3rFdDL7JV6B5f1wHFq2xtt9mkXDW5SMY8KXKJy5Ry5KJFCUMFEkEwcqwH",
  "key9": "G8nZ5gSkYVCmC4RfMevoEakQvg1T3hkkTY98nMBdcnSZzkcjx757AH9ezJ4nh1WfbqNizx6f9yNak885ejsWmjM",
  "key10": "37Udayz9fMwhwH1Sn9SsECTLkrh64cVXRiLcppXSCBojwBBudu8U2fh9VXXGPbJ2hSafxrpzNqJbvQMBB4Tixyms",
  "key11": "5mJrm3idLkv3Wu1w6AuGtC8hxHy2acerXAsq1g3XJXZWG4mmrdWM4NTxcV9NCLG1CjjZFL9ogLoK5GLaAyEsN5kH",
  "key12": "313vjoVhz6EMiPa8ay8MErMjYSPaoNoKDZRQ264n5t8Qdj6JDnUyt84QiNvXBWMBGmrxDcyzRR6UBWmDJTz4G8Yj",
  "key13": "2E6xhhQyjwNy3eXgK6NtCeYFwjyEktB6Fy7rAjHMkAJgqGYpHFpgU6F83F4EQjtxFg5MoDCw683M9w4WkE4gztyP",
  "key14": "4CGPCxaXYoScmyDCctM9o51ospTYTNs2aVKu6nJrKYZkUszFG7M1nLZvqAaPWBhsFnkpxw2XAcTeo89PTbx6ch9S",
  "key15": "Tepbk9puf8BRRwZ1xrL24axT67wjpFSUaqcTbbSvzQLkncoHfQHvS5N1GYGCB6NrdmYaktiYfzZP1iFyxj9CNLa",
  "key16": "64kRMFwoz2iQwRhazZYmTVSZsyQRT9ZAncTy5ZFvYQbXUXuHVZsbutfynv71jX1NyuhFDjSMBwTpTrQFzKxirXxY",
  "key17": "DayQEXrmANcohRQzLPV2VqxAd7puzbDUC4z3bBdK7ZUC5tgARDCkUG241bEStThnYkS29EYy6tgwau4T5rVLNwF",
  "key18": "2zAqDVhnmjcgSeMpR336k8wYjEY6evsaioZdptrF5xFpxCj1rJbFYE6s3gfA1pEBz69mC438ZekhkjbZsiQCC6Y3",
  "key19": "5RCAn2iYza8KPhxorQW9LcJ4tJNrkqqTsU7wWVaEveAaHUj2fzFR7LP1rWPH3cjmzHE6HbVx6xDXyp657sqWCARQ",
  "key20": "23DYUcbDi9pwzpMLpBFCezb8RZMyV2Eur3jY4BS6R3xxp2Cpw1tNZDPbvWMDV8fB54DsxMRQCwVVtnN75Hwe5jm2",
  "key21": "5rmbESWTo9dUprQ4zxXYwMd9TJ3SjDVb7yDtYLg2hQEWNpJBF8QBNJTDpELyZnPKpqzmqYMi4X2jeoiUnNtTvT1d",
  "key22": "5pjpgabUWtBTy9ZpjGy8mYiBLDaUBdzbmh56ow5Bda3mRGrr8BYf5ASMPJWQ7wx1LbzPgSPCBq9fMRTZzQMKMbns",
  "key23": "2RmBxyK8PZu9SKpKmtYhY1fANHT5NtRFFK7MZG9uxQie1awZ2aZXpGTLs7xGa5GSE74cjVduD2DJ6KjteUaSnxVW",
  "key24": "4oAMo6c2r1HCPmTQ92zbpDR5pgQzCC56RiTGJnjA7e3xAmVXTmfv7vsWFBXPTVeTNLxbYuMs3TTmeJ7Tyg1iUS29"
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
