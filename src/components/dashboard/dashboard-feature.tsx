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
    "514jXemPmYt94KE5z1NjteAJZWX66uTdtUaZbbavEDdQ86qkDnV19tieUSspbrCpm7V5sp1i5kLDrnowQpumMv1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QQYSkDQX91Bid4WFkffiMgy8tn5DAphvH3vs3iwMnRUC8ajEcCb8c1XFEC2ct7ghukdRV3qkCUAjAcWsRyhkvnA",
  "key1": "21JArai1ufoVc5qbHNjk6J6tLWtvwteFdg1ugGpmWeZxyq4GS2rhFvv3yB2aUjXwa8AB5yZpfebSDXK5wAb9jzpY",
  "key2": "2TjnBVoyaVarU3xeYof38gD8GcGDdxHVwpdduiJpUaEiprmNni2kyA54xrM6VCA3uxBSAzL4o6cjV83D9odnHEim",
  "key3": "2g1wPzvgAzkYMJahZupe4xSKXLRSGMGu2SS1Q48k79nBeAAX9yWPbBjboAojRnzjvzYQjkubVaEKcT8mFpD21Djj",
  "key4": "5nnqvZ7EmDpoWu74vTB54nJjggi5HDMwRiSsFfkSUWLFdeFoCqiq8A81anKmSnD8dVoCvjbpsK7esxbH69qV7JFw",
  "key5": "3oFMDvMLeyZFX4UVthgm2rpdPUnj2R9Y3cNyJc773peHoyVV1RMkL9pC5XZ1dLNEcpzhTo8JxSYx28U2ewrHtKov",
  "key6": "2M77UCDiFg5V7ddhneogw1xcA9QfcWen27iNH5f1U6sh58kXeuGMHVBY7ckS9hzYAPef6RPnp2PEGJ7iyjAuFtWd",
  "key7": "63SqMkzAsLP35xMj3VpXETF4BwUnWF1GL2r4qGF3iKibAEtMdQEPUdt3AQ7DLWQg2hQ2sH5xQSLmF3gEbt4BHEBY",
  "key8": "325FYJMCkDJ3dWP7WLJBFvM32Px7R1B6bYshwUUJHqqCwRsoxYHiwWCVHvrXhvNqW6RahE95bjp83QBsVdDb2MyK",
  "key9": "vP5aAgA1fRjzqNZWu5EwBuU5rxiynYfixwstRS5PDDMZksstGJvqgv2eG35XzR3RuioSdSRvrZwmqs9rAzpRZai",
  "key10": "2zWTw7kAXkTL3qaHp9Yk7WD25dto6pfVjCLAC3t2X2nHUX1VAKBSRQJJwzJPmjwKFu91hjP8VV8zgz7CTs2BJThe",
  "key11": "DGwLEupSyfxKiCnXhdL562zS3kJKDq1z8ebnXGRFHHDgjhbLCqchuAQmnQVwWW3TFeFUMuTCD4d2CSYMZoQs7uo",
  "key12": "3kR2BFPdJGXg7QUsiwb2pL4FNC68MJy8FejjKATK4pMnB2Kok7BwpRFdYUbcbyXXSEMx7CwgLJCEf8XS5FC6XA4X",
  "key13": "5ZSG8uvyhu8VnuqPztytqbi388kDApamMRbfCyscUXAd9DN3X2kdiEArM2Y7w1UQmqHaeUH367TEjHYdrDJomCwe",
  "key14": "5A3DFtAM5VTmAWnVAsWqzrNAGUPnGxAsq3Ta6JfX8NqqGUeGyYNbdLcfHjzFqUuB56A1991ndDkadfTUFXANfXYf",
  "key15": "3e1diehJiRNAzqZfwsbAjv71MARMyhsQhwugnMJJxnM5JRq1GZa4NLGqwRpxRW93N1Jfnhr8x9izWnz29AFHCWVU",
  "key16": "2oiKUsyUkmauUubgvKt3SaSaWgvWMZ14EgatXvdaWQ7i5CbhFmTahjgPHgXkKxpBuxA1mnkPmpheR7RdSBRZZvRb",
  "key17": "27qSF3pBr15T5iRs7MRUpWjxy39L7cVyoKvPZsNqCHc41Hz56vPrHED79exCWUWDQGGQoVgnYqk1TVEwL5Gtjfsc",
  "key18": "2UZzHQhGrZi3HrRCkxeZgETB9HCChM1WMeLi5i247T2bGZkmLRhMCVrLrRmj72rxRPzQZGSL3n1wF2mJ6kpWiY58",
  "key19": "23ZPVHk4zGpxJxD8Va62JDDvEyCYujWPCkuVvsELphvyaa1RZoVF4aZKsULGXSpRgLbetWujmpST2dWtHMu4jBhu",
  "key20": "4P27FnwUzch5yNiN1coGP3PibfAJ4amfvnoMx1UFrgegc33Mh563rpaZiUxaxGQ1BzJjB25KG6SxTk95rh3qDVZk",
  "key21": "4DR3AEGXHon7KNtNwxAqbgN1xJ8Bh51EzZz4TDGgq935qcYHaBWx6Pkoo4KtrdDSAeVPBzQtvEmP5YYvJjErnYdL",
  "key22": "4bfj8DHputEj78XMxgiR5qdfmDJ4AiSQBDHduDVPrjZVYEoRcRsQxv2hN5FT4wPL8N7BUFN4Fi9nudVTvfppPm6H",
  "key23": "KULg7mYSJLqKJp2B2xxEg6r8eTUnL5wCcDkZLD26Yj6kXREbzHaaBnFXbNKzjDFcxFv948TwDbn4YRSPSee38w5",
  "key24": "qKwy15y7p7EBH8WvCDVJFvSUzoQzxPRRxdKUC1vNfpKa7BgEVtskSRV18tyruWiGhx7oM48CGLkBuR2z3VVhhc7",
  "key25": "4RySMJfhLjW9x2QdhhpdUxTRcm4SgRnQvPLJXome9X4Ne7LJpmXBGbUoSdYce9cgnq32kDAxAaX2XtKHZaUyTJtm",
  "key26": "yodjp3hqdxT6zJ17B9hdfky3egharQscuWsYJDARn5FeYfFJGKG4bnTzzMM2UUeBGsxexpcH8pZAtzA6yHTjyqm"
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
