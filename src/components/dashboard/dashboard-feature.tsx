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
    "4ydKZpretqptLXjeZpGqckn6BgedVjaYictZEzjq5BdGpM9Y2vDqDjvjeV51uiAEgjTxnGRzxx4FkzC3PpsU9ZyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nzdkZDPNdLpyCaqK5bA6JZphMQK2VzEMTidL3dBWT2GXtVc1VtGCcsbcFvQfZzf4qX6mm8anfx1idKAjsfwEJk4",
  "key1": "2S9Prc6x8X4TgjxscjFqH6z91eSe7biCENUmHW992PRy4kyLCcUXWWJSB4pPAq47rpZE4tGa2ejA94jXuFALp9cv",
  "key2": "5kU8esHAARJh2uKqD8LcLRXrxbmgjpLGguayM6TqttKP8yBVhr5NDY8yMXitoQxVqwuSQNm4ERoVCmCknpbhLcjG",
  "key3": "VpomGGzSPGYm7wKBgG73HWeJfd6HnYQwbwk4Y8GE4FCYFNURhpVojhF18MWXn5A5MfF1rNH3UKmVkjM9D9DWhkt",
  "key4": "3BvXZc2ZWEcUzT1k9fFp7NQL1cm3TRTBQuy8ZNjf474hrk4d7Zt1iQmm1DBMXyZwf8e3gHvXHETh821H3pjRoi2b",
  "key5": "4igNVNAPEnNWr7tYhbCmyNHGxuTK6X5azNYqS4CJNkYPthKJC89YtRs5ogPEiiQ4ARt6E1NkPDRKxzcmR4x9hvG",
  "key6": "4p55gsUwiQworrBSXDZDqtEqtXVFi6CDPorXa23XBohnbVZM2cgfz3Do1hV6xS4wEnL2r6wwsr84yGGQxy7DeGZV",
  "key7": "4B4zJgrVGNuCnYVFjTZBmgHqyX1E8UgNRKs2TuXR9DheZMxhQMJegswFwkzLmV7pjZo8Xv8tyF1ysADzCZppYcM6",
  "key8": "5X67cSSSzk3WZj84jpVGpvHK9DrzyuLAiakFgUzcb8JLzQei7UQ1eTP1YVMY9oTDN9uxXznhwxLTNyUaU5E7Fa1f",
  "key9": "4a6XnwBjCZ3zNnkiZrtagbq6WZTkoomr7NZ1xugCa1Xcgr9vDA3hhd2JL1yijAYKbFNGSGCQMUfTsxK2irn6cbzF",
  "key10": "3Ae5KQX9wE5oRAUqtMbbirRUsP93rrFV2LhLSYBbohcAbVkRMuQLDJRkdxszUe6x6aGZziB4Q2g5a91cN1HpRiMo",
  "key11": "493vd3924KfaJrDzAUVGJSdtaQcDAuSR43pX2Jpx8uQ4wzH9XwvQWrF3yZ4MrG8bxmdAybZHT2MHGDw7yk17efXw",
  "key12": "3MuQwrBjimPZSxQxw8LiXdCqwZ7QV76RkgnnPAoqQLMguMeCdsvTdvUmKv9WU4FBzRMya96NTomJ6DFT1aNtagus",
  "key13": "2BFLHZf5hLg6LsNWhLD8e9zDF3G53fCY3uQ4h6wLgxjHU4k16JNrnVgpNwnbAugN3kxSgo8uurbSVskaiTLspCfv",
  "key14": "2aGwE2hH37z9QL3msxAcYAtJs9r2GAwjM9qDBYQ8qiUXt1WWYsmna8GgsX9HtQAnSipjinpxtN8xG5F92Ex7C9sy",
  "key15": "3qqpnS48SRxtW9bJpMu3T1ftUJ1BXQPfsN7CJiMjxrLY64yH8s96fVtFb5HqSUi6HHNgwEjnmYhGuy87sRH1sZ9T",
  "key16": "hEaBQo1e3ZLtojDJJGV9zZhuGe1bw86wKaAFEU8ecmcMj5WrtLRGFrhro2zT2GtbTepu7t3pie6fnnyer8QciRF",
  "key17": "655XnmgBNgzrURHNdWNogw9rh5EgmeqDYcDq1fRZUqB6ZtU6H6mB542c1XP92k5uFNhk9iazL3rhtYG2nQtGa3Vd",
  "key18": "36N8sujcAKce9HW6JzEwmoLxkuZQTsPyuqrHxFieSMp9WuNH1DgtPEF7PFD2zvUmP54tWRr8TiKjoLf7FJiE7wiX",
  "key19": "4QnsNJ9jUHT4BXTXmGWaGad7rDRJMYcrARQoqXt7RuzjuenjAWHyXqfudE2WmHydBGNu4U8kWKPfuuzg73Sd9kRc",
  "key20": "4R5N8WNnJC2J51JUQX7us8g4MRw8QGVPEjm4oPpGe38AFM9FBA5dZBfPrDDrtwQx91HFMTpQD1Tsr75J2zpABnj3",
  "key21": "2RBzvqkYXqkK6CHR6qMT3LMJTbReuM6NCWnbbo2QUKRHTwSaR8q9YpQFU4PjTWLq2wqyXt4TgjF3URqrsTbsYBMB",
  "key22": "3hGA6uodm1zQLUXp6wkTGpKwrJycMCF2YfstzDocSE5Wdgqx3j55Q8zVgRiETYvKxvB4Yk7r6PWLQfHSDxxXGnyK",
  "key23": "uTwmHREaHxUHnB9emAFoUzj44k755hjhUDcgk5N1J5HFU4BTg3cwrpPemMxZT3m8QsmoMZiGwUGFZ2EhnwcAUt2",
  "key24": "5DKi3UpdJcdjVKcFZbwzpaB18T96NWBxL2sJsuNgA2Ba8WWyvej8AGKSh4k6zwiFgmeAogksgcVT2YsGEtwfWM6e",
  "key25": "62v2S3EscV1EU4dcywbh9BA7ZBgY4wRsP6t6mkUkMKcf2B1TCCJ4P9i3XvhtAqF1cvaLmdaS3s4iXGx7KUYcoR36",
  "key26": "4mcPS1mfnfMuyqKXRdRNgbrNaizqfv36VcC5iS73ALSojAwxJc2n73SoY9RCdHf7mcCTuosbd2N9Nj8e7oi37zp8",
  "key27": "657Nc3CGTka59VqdpNA9Rf9avQPkiMLarUsun1mP3vA6axFj27p7oQCdNjeNYHoAubUMJEAfsM1V3D7sUvrm7t7k",
  "key28": "nK88dA9r1WW435e2EWEjd1niDi6tCw4jbVhbbUhkKgjzopJ45MUYebcMbNUr9kaYZVsisN3F3mXNNi66ncbmZfJ",
  "key29": "4jNh6HZrSfVMkF2Ku7UPJnAcLCNpDNdUNXbSbur7TX743dHTXmytKf5tHZmhmQbMeQWWNk7ND6WRCKKs4DpBL47Q",
  "key30": "2yymwh5R8zfapMcMqy6dQ2APxNra9xgRBuHhCKzXNv3GN6F828ZSsWZoKaFTGaYLvwMNdsLFUjaZEf1fvJ5wiK7f",
  "key31": "3fNxZnSi7oc8Ra3ghg7DxRTbzh2e59T4LsZSKEwMSLB3PSxkjyNTFXGd1fw8Aro8FdCWokS9MwHvYfH74nThZ1dS",
  "key32": "L9HjPkDScyWv5XeSzvpTGtTXQgb1M2Qw9kMJcu5z2adFty8ES6PCp82uAxq3edVmCtpDKenxTyR1CiQcHewaBst",
  "key33": "4Hk8QVZXbPAit72FDUUZEPheSEqmpxUu1taW4kTs9eh3oPbM4T8EUfbXz3E27xoe3iksryoxoSsTKrvDDdH7Jr9P",
  "key34": "U4Cp11RtGYdcWUF3TuwG9KG6Nsu2SXh5SY68FPFZ3gqRbNoVHMQvjVdeu1dqfDnagUg6sEh4V3jphkwnLfwkVnz",
  "key35": "HQCHoRzyHwjjPbKLBGhKwRMxth4gWuWqwaQivVXbBTLiYimVNvfa2unLZDG9mLmj7HYeTpvw6MZVe2BQz4NePyq",
  "key36": "4TTY3c8pzMVyoWrwdKtUgUWMaTxqwpPLrp6z94ZGHDFvmRWhD5fciEy3vfcpmBEKYUVL2M4BEURcQN1nGRDAGBvG",
  "key37": "54tNypAFpdzFT2BTgDG4kvP91mshQz97sSPeaXQkenLrym7bkuKKjD6qMgjwTbaLgR2svtzQbQcWnjBcTGjBS8vj",
  "key38": "2HuDREf32EFYYYv5e2Rg5aM4mxZCNe7vzj5rrpp7mGyECeWMzSnBq22HRc7vLpqai3qXAAEXZ7avjjB2nmVKvN8u",
  "key39": "EApQQW2bv4bio8RrGhbw5PYEpeE1q1EWckdts3BY5b6DyND6hHYMmQbn4ADJxSdTSH1iJmQq3ag4zWcL1j2gwj6"
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
