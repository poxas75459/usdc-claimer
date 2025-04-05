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
    "49ouiNAyDeChEjDmY6f8taz6gefmYVUztCeS2xNGhnnVKcSLjGQR5J7GrNWW8uu5FRyesJG3Tvy8fSJwBN8J6TV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KHTbqvwEesSHNqSSTFZdvh9Kjsnc6NiPyqeQB33u7EN2yZPHQKoRDos2eG48s4AHLK2uybF3xKZgjwFtjMggqaV",
  "key1": "5Gyc3qEjxxrrj2HDVen6yzYnVeXWq7WSF2NdJD4z2wVb72WAnTp3ZN8NT8V2umVoA3BQ3SAWH4VNFVLVFBVYbpbR",
  "key2": "4nN2oJAgyRwr3gxzCaJJar8QkGRQy5h2oNvfPkmWFsmM6RsbgS9RfjkEP2hcLgWNxkq3pqGabYKm7MykEwWAGgEU",
  "key3": "5Domqz9DbCGUBxDhJHhBHuSiHVurrUKsLG96Y33Zap2ZtHriVXTTT9Ay2E4Bx8ruD3fk6CpHiete2nqC9xJyf6pj",
  "key4": "3uMfRxeErpyqbJQtt1FMngZMJ3sDF4L3oQoVn7Zepg63kUEoVSbuUppUgMzwzH5U3i83KDuxdBa3KpMGT4X67h2A",
  "key5": "3nfQmjb8Qab8EaKW4H8SaUHCtq2d8BcJ4nqwMZmYqdoVx4W51hUHRrqiNJHCHFQyNWkvYDUDGmepZHb1Er4e3pBD",
  "key6": "4g9d6UhtTMrUbEAjbePaKLwDLNUL72bgfqc9KqGwofDGyTHaBgecG8SvdwXHWWB53dYp6PkSKYcDa16K9Q3QbjHs",
  "key7": "4HR14kDfYxjc9pDdnzMw2J6Xg6oRpZmRtKFYPUi1wuNNaXhvELFHXUj2SEMjupySUE2q1DiqvWWAuYGyGrvnFBBx",
  "key8": "29f74ewBP53rYFL8jBfmi7toRwByiEd1ZgUNSH7jPYwXRx3BTfYNQQUsJx8nZDg9rS5e4oGJqJi8niaKe2AexdXs",
  "key9": "4c5BTMe2NJdBpc1doYsXdYTtW2BYh7AjDqrCa2dfTaorig2aZx4sTtcyUKjzcqjsaUvQEC8bXs1rptaQAF5QzD19",
  "key10": "4hBW99FDuHr7PV9e1aBsSvgW7Yxq79XeqvmzyvTqGkwwZiZKYGG79rboqG66bMTyA2y2Ya1x9uNStohg7CZ4Qbbi",
  "key11": "52sAgDdtBkz81Miiab4VPwmaWkogzUo2oXyj9cTwgu6KrTw9PzZV7ozcMf7Qjux6sCbxi7hb4g3n4pwj6fbQwTsc",
  "key12": "e6ZrUA3HwBFfk1FnA7Yz56F2mZQr54UmBqGgBff3RK8dHj1cPEsGBCKs5gB3vwa7dgnvfPK6i4MCCQoqsgVTvcj",
  "key13": "3EasUTdaKVE6i5MJ22DXksmSSQYqEKSe2gq8ARPvdJNzHT1h3nw7QrywnJRBBPGV18EFRtYBvNMNFPwggmovNDTE",
  "key14": "3tGZufAmDRm4NQMBwTNjoSfri2559AFZHdEtFjY4gBeyAm2sbTFNsDDSeixf3rLbxKkxYa7daWmVyeSBhLXTPqLr",
  "key15": "58KjK1PDZUFiqV2NFXgRsQoXDGzSM1yMkbcafoptdFF1867QUN5eVyUTWrNJudn8WqZQbhmpEZ2iBMhJRzqWgBYV",
  "key16": "giqj7PsiZfop7pQJGsnxSwNqfQ2FNnYUEW9FQ46PsKa14ZbuyfkShqr852PV3CoEpFGtmcsefSZzoi6LeEXUEoj",
  "key17": "FESB8nU4Qre4khEtWv86Antr548vtrhHdU4uToxWQAheZc7CJ1yqCUdgfCYNNwZELv3MaQTghbpsdBgFueUPajr",
  "key18": "3mbgdiW3Ur23oKhTVugyTt1X8kDHKF7in6ii6HcNnyi21BmZgA2AFCkoNVZ6SK6Z58gj9EJkHRQvnxgnXhbL4m5x",
  "key19": "35AeQ2i1WLsp3GBTxyYZCbywpCLU8H9y7wm4wbm5dF2sP5WYVxTKiPRnwMwB4GoFoaNL886guAP3fDrU7K68jY9Q",
  "key20": "4odvkHHcVQnpKbLFna3QRDuTjHkqNuMz75652gpTJec7EpZNwmGDnKv6hUXd3WwxuDeyd4SQsYk3zUvBLWuCqtAa",
  "key21": "bMDbKiSDqV4xgyEqyAaZ6jpxEdKtbhRLPbqXHWkrWnrJJdTHdrJRDVJv5MGS3TQTqrMLh3qPH42BnUuXUaLYAwe",
  "key22": "26knsfAaZ1WRfctYyMP428238hX6UtDd2tDZDGpRC6XbYtmMs5V7UUm1LRqLErm1gZNSqwmJJUxmQdeTkLZ5tCJM",
  "key23": "4D2aiMKb16yQKs584hWqmJWntZ4PU3CJhp5DyfDjk9L3SKXj2Uc4p7waD5hzBLzk19FvLiMqHvA8YzKBsepyHrDP",
  "key24": "5uy4MpxidyvPT3ChDkySctYWmVNwaZhBe1NZGxWTZgPRcLhzELgd9n44GoTDyUd67MeQ5RHzYQQPYRJv7ZEGdWi2",
  "key25": "smRSBNq8fZR84yworptWH1FsozGCTGUc7N4a7Ek1sdmSz69kJmdLUZAp37959pMbTLpst9CceiqNGGQ3a8vrVnS"
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
