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
    "hamxqpqEk9H3JnGEJmGwUw2EdW4VFFgZx28ScSNvkHBvKkGYXyTBZF4Cm1DMvksL2XcLtBS8nJprF1zoi4tfLex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xys8ec7k1QSWVgaiya3npjkrLNmbXk7tn83dt9WwcWZtvaCF5qyN57SLJLN3c7ymBYt3B1bFfZSUojLFxy44MEq",
  "key1": "G33fwWr2Loa3NY4C5i9s6gAraotXrEPipSpHGfsfZ8MpnkQ1QKva9DjLs3NyKUWtLrqjx3fAZRk9krkdKVxivv8",
  "key2": "2RJAMvopTqp7yaayk9k6vmERSQHUKeUoGuxuWCzEiXNzfiEFBLHa3vGh9gcngWYQQQqFCRUCD1JrW8ZtmscdraMQ",
  "key3": "3AuvBAj4h6BHfvuGKgJHxNjAPfNGaPAGKZhpB7uBgpqXmLmPQcSmNW2vTNjh4LDdwqfWAQEH4QGLgYmboiTafDo5",
  "key4": "56tVZLzEWVyrqG8VfFQiQZyjCE8KDozNB6QxBxumHHvioJuNmy2cWxifJ7B7dwHWrKPjzAhByExWPd4coPFZcGqm",
  "key5": "2oqC7YD54jLEnMjXWwD9i64dL8U7ntYaNbkYUJuLT1ow5Jv6sMJDyQ9eFAeXddT9rS8z9bPvKWD5hXMwcM7qoUfB",
  "key6": "3A3junE8MFzJPr7Wc8eZqSX1eXRUMAQnB6btfDdbgpJMfWNHr2ee9yem71wQQgKqQ8j7Meqti2Ep3nYnVYoHxDgH",
  "key7": "3r2A6iySeexLRGdDr3ntNubJPU2XXAV3KWxMYA4h2wZNJo13CiruPwMZsHBcxuvkAxsWuNPmV3giF3KVPJPGuQYY",
  "key8": "34XLqduJUZ73WsXJnuqTYsRAAXhbuGBwjqFRTf9JWNv5J8LZnUQA7R3jTJRTqaCjNztN44Yh9FYFwAPJHbVRqu1H",
  "key9": "3GZ5t1T5xP3QHKKa3YyTLE4LJ1SgV7sPfRdgSw24W4pwyysuWLKDqfPUcjDX8wTUYm1FoAXM4jviDiRfCJFP5r7L",
  "key10": "3dHBjTKpRff6JXgEA3Qe8j6zgrsYfdszyj5KPgerMP4n7BV1WzeUmwMhDzBT9LSzRccHB8EjBtxkvjY65VvXdJN8",
  "key11": "4ffMENxAqcVxove1zeC3sJqw91mgA1vQvux9FwhdNNowdWUsP69rUqBPtUM5DTHH4ijBmphjnckZ5hV3vpqPZPDH",
  "key12": "eLLfEq2LdTBMSE8dxKGR9BdVBX7mThxoeFpadf5aVQPpzEaA2RTXa6281QG4AoqttnT6VuTijebpGYpJmveDm2X",
  "key13": "5unukzeefRmfzY6FvyKUnsn2p1iqHmuKYquLQUiBaTsXomPq67sRKSWtBq5T14GaWH38jHpiD6NuAZgWQVwyj1NZ",
  "key14": "4vXhs32hST4e8Jz4K3MGULhPxvva6QBBk6V3URanrA2ui97b7WoZhtWnAGLeq6LaS57XinnkZY57oTuEC1x6ngoS",
  "key15": "41Rv4E5FeDoHkRz6GS4AF9ZDsvavPFz3FKa3x96sT5SZyBNzYGy62yPThPqTKyHiokaB5z4wMKSdTTGM5hbJLRAb",
  "key16": "2tyJrPNdG43rAdKBKEpjMk8JmqLgsqvFM1yjiDKPe7a4sa1dEUWs1hi3jQeBh2UqBSjfWnsqQHFtaUoZ24s8pUeX",
  "key17": "3cZBmqbuenr2Pf8DwKUAHbkEoo5CDBGgkqWMmB6yeVPgCmiLupbyjffDmbZNmdBWJ6x1eNgGehm9cAQDx7kQp1wx",
  "key18": "axjBPUJ7rYrM6VB4HMfdycRzEjBfBcTFZbP2QZmY4oko47PU3KxGqhthepZETJbJ2WmrdqxMRbdiNLKe5zArKzb",
  "key19": "5XeDdWgjDeps7Mdd6V7dQrWsSekHmNt1hqZhjqavUHAYv5A9dUdpqPNbJ6E6epKkF93GayyBGAqHJF4c1A2kXpDf",
  "key20": "2eHdxhBW73SxpVoXZ4vUPa7rxrzLKWo4nbc2aE4SSGKeKbpKxhuvunLo2EFpeTt88oJvSpYzENhMAPLZHtJebpvF",
  "key21": "3wKFUmS7qG2DKX2euEfMhp4tkt6v8bhqN95fFDQAP5JtBcCh7aZbEG4XQvViJmhTK8xgxFmQK5dBWhHYuZgkMb5N",
  "key22": "2HPTPiSK8Q18y9WqtALGXpmh1MNLZYHeJuWHFJKrJwiKY5hYqLDNf6xb1pH7rjThNKwo87M16q8MATUAbMqgsR4c",
  "key23": "2DEXAnHEr9q86J3Q4zQFZM4Vj2HrfzcejFNp1Msj9vCrebT4S1hpTEeMrzoC6HcJb5DfaQC7EoUBMD172ZdTT9Jr",
  "key24": "3TrYDr6SfhCcebmPM8kCepMLFK8ELo5ZHYUL6xk58W9G3HAfbf7vw4xLijeSGcWsTay3f9h7nvdxCb3mHjHoqa7c",
  "key25": "3yVXYPPRmqSPABmFEiGrZFEdqyyYVjPD3BxdwWWaxSVYKYV56A8LCUtNCNLTWPxY8wzDLhJZsJTdszBA67wjTpfZ",
  "key26": "4Bth1RufEPkdBU2dgDpaaS47pTxEGKq2FrYE2fQ9nKJUsSyjqunuYGznHAP7YAKqR5yC1aXzc59bhyPWTFwfqij6",
  "key27": "6UDAzTz3BNtsnehMAB3Tkia6poq4Jxzk4vDkaf67ZQXnvM55hub9G4YJz5Q1YdTbHVLBquvLEYFPfi1UEcrdrsS",
  "key28": "qGKWg8LshCDEEuBG8Rr7zfmK16ymX1BWZ2ZGK9Qt3t2SfqmWEZ32kwmxoAD8HkUXZRb3XFndzX3dyW59EJBNZzg",
  "key29": "2kTBTbXdAvS9ayhHCw99iRCxhfTBSPyaTfvkJH4TbXAyWQxq9GG7qZBGLpWzqoX3iE21XCZfJYfCqCHLsd6NFXTs",
  "key30": "RBWdmJPiyYGYLoyxPsKJdYRFaqoDbk3sxPNjGTdqJPwHsspPpxWmk83k2XqjXyNX2BNufiJEo19r6rrCL5hJxdP",
  "key31": "5Ue7tLxahzNYJyJpjJbiXVNAaXPSJCYCW4w6qxpcGdNbNPw1cjWYMTGQW1ZGRRZ3zJauS56ugeYrBkfZLD5E5gpT",
  "key32": "2yrNRQE5VtTXR2v16biujje7whDFttKiBYrXLC1cWiv93inxyvi1rzRhg7AxfuapJo94vi7aAJEa1t7nmXJC5L43"
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
