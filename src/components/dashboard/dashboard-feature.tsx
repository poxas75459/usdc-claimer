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
    "57GDZdJUiPxReVMqW4apx86P45ee3k4phiherQAUxEPsmkLVznFmfxoDsGCgLXm7dz6gNBGqpkf3ggcYyAhwJXA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ZSvBPmE8z6pydGvZjPPkUyGfVhvFpS342Ghq6NGQQfmExKcJADi6BQg1ouQJ3NW1sct8Mg5uEeqVhXtzHNuQvn",
  "key1": "LrSpbqeSeHvMMChv5y255BdEZezhb9R1hbtwSBpGKhdivCAscWdSXbQTMTJZiPaxSpar9m4g9hMh6YCcxpHzNbS",
  "key2": "471KRqoeBYKVWhpXAroU9Uo7FJPWvJRU9vnt3hXx7h4EAgkKTqymWZzUMByPnaXHnmkRpmZwWNDKXqtCpYWFJ14r",
  "key3": "hHrusQyEUyAc1hBHSN4GuXNu9Ka619otXSiPM1SWBR9LvmToYeAx9JqPeuQZ41SYBuKWSRY9CFMAeGC6SXzrvvb",
  "key4": "4frzubspHCwkFwWd8o5MkGwhsYzmrzCM6XP4JMLqPYKzZ81yEV4SgNKxMLWQMHquv4vzUMm82MXmgaCS6mNMKGoW",
  "key5": "5s32uwfNJHnbRSkNPM8mtFkqSPQZPrhmPV7zrrbwS1Dqs1eNWe3usx8WvYuVGCkUoQqxV8rSMiDh8oEGMwnCcqGJ",
  "key6": "4cT6sk4g3xSMjmbFySS6wydSkDS3KVrpJctzwcv6d8PsFcKD9fHQR8zmi8rKSq1bS2MzD8ZD3w86oVGZrrhEJLqK",
  "key7": "4TdaekkNAa8XRqxC1XtyxLj1oKFhHQZGngFVZLtvnfdtuoXWoMPhVVvuGbWbfxBwrdcdivG2VB1uvHv9DdUKq16n",
  "key8": "4RtD1Z4oUVNBKtqwAzNHLeayfEPW4HtdX7rVzb9U4Fvt5QM4iuomfznh8th1dSGTzza4QwtbN4nVSp8AAzRRP1u8",
  "key9": "5AoPuoWLB6d8JkSvkXBicUjW7TY1UdVUhEVHa1FVxfysaZDHaGHrT3xUT2j549CYJVAWLqMnxcvkcuTpPhe1ivji",
  "key10": "TD3mLcbYNhjLSTAmSw6pEdUamAgAmV4CBm4zW6bfFEa121yZ6Xs9KzeQcwu5SYN62ptDcUGQcgggCbjtjiKMAcx",
  "key11": "5xdpXwPQ4QbBsBXgBoGW6iv5B3BSjSJKJY1TeYKo1fRY7Wr3qvUhRdnX4NP84iutU7SRNGPtd2t3jMDMUTXp1i2n",
  "key12": "56JWhXiKgRZmDCPxHFccrWK4r9UyZkuSLGfUSrqBzp1ZdRTuoaQGXAb4eSZQSXoQcz2AUZ1ywrKos7N3rHQX3fse",
  "key13": "5RowusLr5LyiYd8ukR3EG7R7ArbdzWxcCbDCgzYGbZvh9QU3VXC6amiMw1MyzcYZaxtN3vpT5cv32mFDoxJVj6yu",
  "key14": "3pUoc7QRTJSbvdixChCF2rWpGy9SYA2bi1LcV3qiDxfHHCPjGSUEbH9hvf6phAuTif9sxR2HARZXEj5EK7Pcejec",
  "key15": "5yQPhGDaZfUBsK4qCdfUXXU34Kxtm1fYi6RVPtDLownKAkSsz5EgXtM2t3qdeBe9hPHduxKAy7jgVMxHyLMwmGGh",
  "key16": "3Nd2PAbG3P8VDPaPthijGPTtuhdPtWkzU1eisntxR93gMApY8bjC8GRNWER3eNnAB6cgkaDjr6ELToFQKpp4qy2E",
  "key17": "4GvwJ7tmKuGNVjLU66F5nEiiYVEDZ193YA9rAkJBYzFoshQKSav3MA19ihLZDWfc6QaXVxZC6pWRh1VQgEzd84BG",
  "key18": "5QJtmarjLciZWJyof1fJiFSQC6o8MCo2mq26cSAuqNRr1VUeZf3JNckdn2z2Yn5njzGQ1ks9mHfshisDr1iptGiq",
  "key19": "4UbnrF4EAhi3eQ9xuyGZiMeZfRsyAVX5PqDgykDS9qcp7hBwQNVikJGRcyPSrCukFKT6mJjXgvSzjo3KWByaM4Lc",
  "key20": "65Zkto9PpHmgHthKzTvfXCP4BBkGcpRH67gHsXgtoaVGPWD6NUFYkmkMJFC5dKRxeg84XDGsz1XLdLgH9Qgazuuz",
  "key21": "4Tzq1Kj2DiQYxFtExDCSWTUREw6NGhkPhju7KsTeGg7vQ4fGfMCmLa2eXjHAV8FNvDD5LdjVL7AVFYbT6YfJ2Rct",
  "key22": "3eDKNqUYSB588c3y5AhYSUzVDeFgvREjCcuNZjHubcWAXXqdHTYnbCJxrmiErqFQGxYgNCwr9gBJszZSz7dXBrov",
  "key23": "4rb2Gs4Av8NsBFZevRxE9HyTiTvGFsL8D4EwETAxithgE3FgjXaQurTb5q6e12m94FrpPKckv1cfbeXyqmKVAyYe",
  "key24": "5fWFnYV2zm42WeTvoNr2pnyuuw1tDbmV5rRMUmr6mTNfuoH3DFD2pzs9sDhtUpZmWkhAfN4WWmWWcXRYJkpgd44j",
  "key25": "oZrfqPdCPykKucjM8pXCEmVm6MPBvDuY7BCZeAFngfs25Ubf3G2YCH3bUn8pChkgwS7sYv5fe5rDeVtTtx4yRxx",
  "key26": "HzojzmxU3JJSYHHktrTdCvbD6aCLom1Qfm4b797vuSN6AbM4zHSdMofagrWe3asc7vinR76jExRJV82jrUgPEiw"
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
