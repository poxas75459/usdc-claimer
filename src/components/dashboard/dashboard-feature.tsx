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
    "4kRhS7f5F9Ay4PwhXxBr2i7qcdSD4QYeCU57aB56G1v9YpwgA4ucjjzcgYwHmVZ5bVCHtWoVdTLraStzZR4HHtZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UH7qpzqbVeLmZCgfm3gWSSVn8C3L5vAcGucpS2RoHnk7M8L2bF1jFFcsC3Q23PGXj2zt98EsysDJp6ZqYYpa1n7",
  "key1": "5XoFQQKZdFrQknRBLoSPJfdJm8ixEUn8DqQetva9PghHh8NPBhfzcWw8jhV76wNSzxbouREmT32CMoVUgTgK6hnm",
  "key2": "53zugVLNxc9YF9DAcmHrjRncAcnUPH68r3wdBkCyGdao1j3ZmJvdx2BKzRWd995rYgaYprH81pE3ZjXjHYzgoASm",
  "key3": "J9G96a19seufNucYJMjoZFXUSubAipMrRauSfKiRGaLWb8byicTVtG6X15ZxuuWHizHgQwJeqP7nxBSNJYxnwNo",
  "key4": "9R52dk8z8bpnjxjyyfiDMn9MHTGXcSPF7iHF1AqKXKfS51KkaaXx6YJCDeDCg2S4iv3KGe5v86H1Uzzkgmyw6UA",
  "key5": "Fx4NcUtwobQvXMW5vQEVUra2LRjTUSpoqgM7pL98Pos7h9ZN5Z8XJUPzk2uobuK8xKRCuhsNQzpG1bDjJAiakxz",
  "key6": "47WwvScqyBeiM2aLJUC99hGcp95dQ8xStKBRtx5EE5D1pgQYDguVgjAbngseRc87xRRZnJvM5hr3hTA6Tpe5wr1W",
  "key7": "34nkRzbvnusPvPeNZwNTqLTFrVUgiJrqRLvNh54kFNSy8HwEoTTwxNRRu75dAavwCRVG6wE9hggmwntod6z45e57",
  "key8": "3obhZEq96Zs4TaXVxGsuLtkdP4G5Q38NJ9QEGWsgKe6FYFpC3UY6heEaYux9yJbDyebqWrfJotVZNgcfHMzCYzxQ",
  "key9": "fXPGvD8zjDJmM48quQngwiHavzTuq3WBgZ4uyBKojJdyXE6HFrsyFLwP7WLmt3wVgkpY6Df5EACshtWUhSmKQuU",
  "key10": "3hPnStW1Pdn28TKEijm4nDu2iLn7LjdHg9kDUJTTjeZ5i3Zj6Rt56F6ZMA9d5TwxBbo3q5NyxhiejJQfHfocFj3n",
  "key11": "4cUtwdvsNfa8sbCyRQPTqxNkP5sbztYQtkg3uBDD5hkeGYBuYbaYjmcEy5FMppZ1CzW8f19UXm39a2gYpZ2fT9NB",
  "key12": "2fXyWVHfAn6VpDJL1dy6bbgb9Z8tVdQBZWdNvXQWjtuPLxGPj8KpfWqShsmTqxJg1PjYthNfpFjix1quaAkHdr3E",
  "key13": "aubVgruhQ8ZKCe65NztELBB9SaFVVRuUwCHtR6yQ7QvNdALqchbd9F4KZV7aRLcCtNbtsS7hMcRdS49dHKrnQJm",
  "key14": "62JQeaQ9KmCkoFnNyGV5zty6EA2SyRdhB9PHfsnRnrd1HyUpu3PfG8JpXQW6VP9CztrU2G3CbxsH1muUitmszves",
  "key15": "UCyU8zKm384TeUkbGCmBggD1JFDCRwgMmmifY3xKXvJ9EEimHHxuAaNE11Tg3GkTGkPwjCPzEGidXC227Ck6NFC",
  "key16": "LctZi7KHyuQtpqR2myt3mHTbVF4mLtFZgazk6uiK1WNBr1ynVVX3CjhgrTW7fF49tb6yBhvhX5Ja9Z6rnpVP5WL",
  "key17": "5ynZuxuoEPtxZBWJTMS99CgTScxFg9mUfMWJdmsWTk64LbCNpLcnGneG8VuEu7pnURB4EVB8Qds8u8ywnm2hEh4T",
  "key18": "zvgc9jD2C2MLNxEABT5vgL1YcDLXdVursmRQY7MAuJpLBQeggCpRuHGvPX3irfJmcDkLX5XXhJn3VZKN4UDn1wg",
  "key19": "3yuKjQAbdStqpMQgRt7VU5Ey5AqmiMjsqJX7RZUVaytCCLbNSmBazSX2Mjb2gWp86eBjxwFKtxpt9e3F5VWMBrgg",
  "key20": "5V2bQdQ3WPniyaXX2LJzyUNetZHaRAwCp5jkxJfFH8VXVe5YBFHhHsFt7jSpsJyNwePX2n89thgPMeQB5iHwTE7Y",
  "key21": "2NVfQi8KeMuPqcZXVSnD2113nnR7bFmQYcyqQ2WoUjHs7BE2pvpKPU3pr2ua3bXxTTh8Zi13ZXeUDGJB4bmTgKkN",
  "key22": "g2uAsRkK29PX1gUoUQnQRN5jTMuCUKT5AZf2KFtD5fusxh42TkKwbgG3ANajdbEdoCzBM4Rs5Yra1cFYDyKtuHt",
  "key23": "NhDnfw6bhUmADb2NdDh5ADhFcoQTMjyyJJ8NGdHV1UpvqZuuaZ9YE12Kb6XgLMCex3926N7K5mQjctHGvXNhZje",
  "key24": "2tZ2pHKXrWiP7eXXEQyGyUvLcrWVQMnLCxETxQsv1FwMh8QKJFrPVJFN7qfEYCsUMZfvX3mcw8RXJ4FcViFnF5fK",
  "key25": "5K5xQjfMPuWez7fmwTgmeVyNFqjdshYMNvHNWJLEG6xbvdZeFEkbh29fUuCiowqUcqqfeQg2f7DjPywrgt5TC91E"
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
