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
    "38iQYkPsXKUTCTfv6dxgUvyrwMCmUvMHuAE4ZGh6soS4CAmUPGKBHKrxEgUbyDyQ8MAWpcYoSnAmtoLxZJ1DYVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BufupZyqY8CMZZwX5EvyJ5di5xiXvbJfvCtdv7gLjQ7dfE1MuFKEwsc2LTGWNS2d6UDNz7uYYv1btq9zhXrof2A",
  "key1": "4rAAo1EfvkZVmCJ88CftdqBdzTngCmCJeBbd3pQJ2irAvs42ii7q1FmbjHYwoYcVjaZHKP88ws82cQbbg4dhncJJ",
  "key2": "CRNi48xaJDJiBYG7Rvr3mjTHxkM2phJVNaXGb1xEwKg8HgBhgXEqe4yBW3Zo4P39KUi6YvGRwFxpWU5xuoTpA5q",
  "key3": "61HhLAumGbHkk11Ve4kBJWYPERvN1SbzMYjuhCu1j78Ggtsgz3YVMzAbyMyzxaz5WsVEeb8C7Wk3MYCLowzmvfZf",
  "key4": "3XoTrjBcBnr67mhdz7woED5feJrHUmZaRpMxbKi6bmHJaDDqEErNefRXcE8AujQWFVovGwizGRdih6QmGfA8ecGW",
  "key5": "63sDFjuH23pZmDFkVvo87ZVftoesuFGFG8QRf92eAZHmZWhoX85oYD3PtzPXXK6NPQQrBjXD5yEqPYuJkAbGBFid",
  "key6": "5jigQ4Yy3vsdhaX7S3pVC6G9VktCReGBohChVmzLjTL6BLmX7WtKLEzXYkx1RtUS5fAYNT8gjW4UkQDPmMbDKffo",
  "key7": "3EyxxZYK5P6uemkQSS3xAK1t22AmnSu3SUCaLMepMVXSFBLMrTWEuX9mNgjNBcG6StrCHgx4Hn2KzHoxwRghYrha",
  "key8": "3bXuJb2qcu2QWpiGrJoxaMuxMBHMeF5ar48k6YTV2VWfUx3aFL5XtYhGr3sWXVMwHVkfrjvTQwuFQJc3yiK9CVbM",
  "key9": "4ZtYGGrrvJ5y6XhsmFZSH6gGRViiGq785e497fKDom3ohq9sVLY3dT7Zd4xiJZDDjGodD8w964ZQQ85ZRKLXps54",
  "key10": "3LdankrJfAAZcCeGvf6kfXTWh8WeYJZz1cfV6gpDrVgMnCmw5BXLiMYDRkmPjvmQ6rvyQYf9JHXCL79zNLwVDqPA",
  "key11": "2aPBoMZ5ow2jfkbWUtjVCEuZExPiF1mTPoyPitDgeTzBeWLmxBUxXndbD1hqMGYczWtF69cVLR9hS55F2P3cu8p5",
  "key12": "5pJYwsNd2qVY2bBSUCN3xX9yy9Wvv9DmxcTR8TQjihGXLvWj3nAMFNQzyhPQkAuXskQhtcHtRb2kY64EgpwUwmh9",
  "key13": "4hqCZkXTAd9xZzDJJKH8gBdfpD9Q35WWqCZyapbXmPHyEDMDYL4gTAU4S2v3DcgUn9fGkR5ZZSBRnkm1qWKMvRVM",
  "key14": "3Mvd6FYwwK4kj6Y2JMNoaV811wUa3kT81gUhie5berf1aW4Qb9AbwtLfHurNky7HwRRBpMyre8UnwgDhnWHLK7Bq",
  "key15": "5duBfytRgg6ZiqjaoCU9A5Q7PEYeJhV2je3TE6QUKs8c6KfsqPKoaw9FrAFn5H2TGLq5RDoWtRwA8LyeFD7HpCs1",
  "key16": "21BZL7ZYVCGYuMEQfon7Yr5TJPcBw39qdvLcTJ4LSqmoUkLRWMCSVojqR72hETg6xPnytpCBKvPdVTCFDoQYthWx",
  "key17": "3VceqvP1rXxq4jqaHj7YcyAfop6ASZxUf5vtXTa78Ynk5HG6j1ah6zMmXGejZPkc2z5DJVsXtFPxZmtNH9DbeCbC",
  "key18": "5noLk6gb1Su5Di9hBGKC3shNSMQiHjqS8x4RbFyNm9nPvuAoodXXDYwN9CEkEQD8ciMVLdZYYhUEZidfVnKyPgeq",
  "key19": "5ZeMbGoexTaYGbrZDV9XMkHksS7VhgBBDjWexXoSLeD4v8R3oAAgX7Gsq84QsepKyKHdZjK4qDPiFq8y8AFUSxsr",
  "key20": "3HTGXqaEfei1Xj44kuEV3PBJFM8yj8cX75JiCxrPBhuHDwEB9K9P87wZNEbmyn8npozcA8b7KmPLL1oQthrQiLZ3",
  "key21": "2Jgs7Ubdg3VXchfLZrwAYsRDy5KkjQvknUpR26H7FprN1pfQhMbJNzq5d1M3ZaAV3o4GpyvcWeEysu8JFJLLP7ES",
  "key22": "65PrXyLGMTyrD92uCQq1PCLtHEKerTLcZVTXEbcSxM9TMCeg23fiRpQ38uFAXAQCHP7qFqnJctRFxJdKqeaYYw2z",
  "key23": "4xfEaUtTxAfmQ6uEB5D5iUBd7uPEdAr3Px1p4WDrqE76Hh4AztucUwLwfTbBfTpmmusj4ScHnKTt1mkozTg4Vgqm",
  "key24": "5DJGTXBpepfunHorHGVbaw8ckm9gBU5j92ydS8uncHdhuDJfYaaRNPr17KJw74KpSMD7QFn9heySbhhQMemvjmbs"
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
