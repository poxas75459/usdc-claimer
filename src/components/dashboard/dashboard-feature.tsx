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
    "4nxxHPBZrfsqHcTZJvvSA7h1bbfcdEb1rnvrgM2UVXvUb9Q1nu4cdyBkCGGWyJtS2gmZTzJqcKukjoGoNXs3fVtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33ieXXF3X1Rf7V6B7xniJ3iQR5fBWwTyaGTuJxchepdL8c22CCY2LrevY6AVZkp3shxKtVheMmZxzXvxbqEuRtcA",
  "key1": "5tadmkPAkDF8wRRmyNxoid7RuVHqCxY6zxa9iDF27KaLFXSDdngHQxtSVbcqwYbyMza8V6vYrp6X1YbxEdsE8qXA",
  "key2": "mnzxox1Dqpc5uGemaD7UBhbt2ZCm9x4hds8KzzAZ2YVaQxF3oDw45JCi8bqjUoaPuR7VNu1dUcNVKkqnSbDPZBz",
  "key3": "TH2ag1KPSMKmyg35Sxx75NHVfrVZ61ehKoEbASRo6t5BpyZNQ9qyr4pfxN1JqtgUKMCb82ydHSWMuHQxhA36v99",
  "key4": "3KKYULC43uNwY7qy4rTHRLGYGMrJMqZ2wCTJcuRpw2VkHkCshV9JmmLMZFMEHyF9ZZJjEiVw7cdGLy2En54or9YB",
  "key5": "c6dDKGzCWk5MxMnSNoDKixy149FFBENRZgK5p9eqQYZ9QUfrM9K9dPuYRccgymCfe5o1avRjztkr474SLtzjerD",
  "key6": "tT4PFpT6F8rDkG6HHK4sQkHG24SzEcG99wpfdhsAuTw6rakZk2mziAuZCyj3mdXVGfqsH3uHyhHqD43Bh5uMo8c",
  "key7": "42SDmfxfPsyZXZCsnoB4DgELLfABGe6xprSNKHADz8Wp3AEng8Ao5zvEHWqc8KeqHJsvys5h3cztwL7hJdiyF2FU",
  "key8": "UZo3bejYnRxNaPHdvfSd7nYseKNJBtVDtHUbuh94AvHVZKmAHWJVuCKnbYuaj1fQ64jwfmG7f9C7imEaTWKunkr",
  "key9": "53EDGa9dUWkLtM7kJFXBodrS15HtQQ198DJor5esaS4PNXh3oo1PsXdupAmZuMSeFYS7dJhapr1kNVhUNQHa8ojz",
  "key10": "22WZKfefKeg7Zx2YSWaJo2Za7m2aKT7UZbAe32cmBWyu8ov4kdFrsGEE6LF3MK3grjnzAwAbUre2Mw765CsLwz2q",
  "key11": "4C7B6AAyR73WBs6WswG21kG8nWWH49vrqbNe1aQyYsMUQ48xyGEzXKdYcd2ke9QspLm6uHVzs82uzwU4UhHaQ4EQ",
  "key12": "RYWUrsE97t1gvHBZAK8mJk2bJWowGmPEyFCXaLJxrLJsLcKBaxMFFhEQgEHY8zupR7rGw5eWrRVzMDqP5aAhXfq",
  "key13": "eRXi8D1odbWP6xN5ugWfge5VEgf54NpW7eKTLbVPxcJfR21unAWicFp63zvVeQUqvxSzJF4ZhvBdQBU3EEoEB6H",
  "key14": "5GweEq1koEwKwUeJ4EYhbvM5Dt32zN4UbquutUAQC1Jhg7QxJVoGapW3unv67AL3vqzjVcw8sfryAbhDpjYtGpU7",
  "key15": "4zmfmDo6fVa9cwrNnMPsbRrKwc73eh3LkRNNnkh9V5tMLfTVqgnENEieeRxFGVwhrqY8HdWQMcgPTow3BBgSLL8V",
  "key16": "xT1wAX6QVygTde3vHLtNXEeTH2DXZB7b7C4C6Rj1ggfGc1SsvmzYXpkNNE4mu9s9hrgboXM8p3RaZsULCwr17a1",
  "key17": "5tmxWyMEfnFAoJadoe3Jym7ib74DmLBfzWBsfMCCiM6wT67REy6RUy4KbjZmMGz1mKovpouAjZdEcBkCByuMzkcD",
  "key18": "57pBSgSAmMCYvzWdDu8Fe6MueviUq7eXYjR2u4UXoihWLXfRadWqVytP714Zd4jYQMx2dd1A3GuZAHkjWkqazjE8",
  "key19": "3t52D6T4QJnaVwLAAB2HCtPoJLNCBo6AEL6QNita6yVyWBix9jb2jmhUJAVhtwe5oeDC9D4Wdij8Sz8b1yNdhG6n",
  "key20": "5Yqdt7mTC1uFgissnN1SAFBtv7pJXda9M4UYVzivFcrTvQcSrUBLCLuwwUG6hriGaxLG2oDfymfyTNJEfcA4R3HV",
  "key21": "RewFTrpqPgjCwAekLeq51qx6Mh5wAJRrTQ1gjLDKNEYqsfms3eVRF7ftTt2XBRUdXFiuc4Uy6mTpKyAxHCAjceg",
  "key22": "bkcjC6soaHpvW61VnU8q2QodskzFute8K4Qm2Ckoe3ReMqTFZUBricxmJjFeRPCQRQ3A1Uai2ye95ZSJFdXdWqa",
  "key23": "59ijVY9Rhf6bE7s4Xv46Z6PkF8p3ipHnzFkb9F34Fh128a9giPCGVTxQiCUME7czWY7SiyjJYnXpqWFpFfzW49YR",
  "key24": "u77hyx2dB7kS318unzqzcHkVMiFoCymExdfDhoSYEgmABj6q3sdKuJFTR2rp7J358BBQw5wUKpmUYcXLLDqCKyp",
  "key25": "2JWpPGZf4vmjZoyE71ZzeTyZvLQUtnQAzHmzWXTJ8VJf4t8mwrYPRmRAksNhf6aXfqTDYufreNrZkYDhTjHPmg36",
  "key26": "3Mh3ELe4sCWHpnRLsUjMbVjQZ1CbGWQtcBbcQ3fQ4bnQcqjvcBdbiHEyCm6afuQDimkhkSxtYNKfPQhAt8sX9iat",
  "key27": "3JmJK6wWZaaNbdBm8r12eRqoLmCHeMRw6uZabzbeqPC52TspsjRUvsxD9HneogFCGWt7iVed9rJrmuU874XaDKq4"
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
