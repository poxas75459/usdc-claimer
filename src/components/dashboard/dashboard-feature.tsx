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
    "2pCCEtzQjXheXmKrLMjQ8k1aExfrpc7oDM5WJZzAgozYLUkemFpzjrXsS2GAM4aKrzqhZA5WLFQbodpvGDsEqDEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gRHx5fZjnn7nekghFfTWHYEp8AuVBENzDoq75pC8gFFdHX93tbEmNDnGVfHc655AQgUBncozHGnqqxrj8JjpsEP",
  "key1": "4u8wMvKbUbjWjFwvsCZP1vQ7AEaU4UtQLz2bmWqtk8NKFS1ueSpxjVbnfAFLrz5dFV3VNDju72ozJRGkeXThSfBQ",
  "key2": "4PuN6yYHXp9F7wJhhWbGkGjNn56NwdSh83HfGLd2nmjNUY5yXs1tF9dcZXKr9TYsmJbpD1eaW4ea4MPqwMEXHXnT",
  "key3": "4Mt5KHTKZWpt77VvBLeJLxDLwE1nBrx7RXnPdacYkcetFA6C3PYbCX4TshMwEU5u4RMMyTkpQ1QoPbskuCVwbAh9",
  "key4": "5U3fNDQ9HsFTB7EYDMYkemXhq6jXoboUbAKkbpfkzE9KfDftHDkQ9pGY9LqA4G7KLSDbbLhHFJhUPuynVy7XXjkR",
  "key5": "4Kfc5eg87PA626jE3TDJZUPu5SYVrcRvMxfJLn1NKFJbBeZZfJVKsSHppu3N2DXnPrFnYM1z6LAa3eZeQY9Kw6ge",
  "key6": "2mmBpb3Aj1zS11WnJbdfjDu7ZdJ1LaSkCZMSUzwEpLqMHGo7cq4AjfKAkVNfzVeEVKCD2kfuRPbY7SLZrZ1C6yXn",
  "key7": "44sVxMh6DXJhyKfZkGxSkZVmfaQsk3BE941tcPjvDhAEUXcAqGswRLvUs7nDX7T7Nf87wgFfpGouXNxH4H7TvmXQ",
  "key8": "3aA1ZKR7iMmF83Q7wuVXSoXZvTJ6yUrzN6QnSh1WXbuKrB84LnTyHFgmojbTEEpdGSKHzNJmKqZizMzMqzApt4wh",
  "key9": "3yEEBnhwaurqQdRygqrMpPEh2jL2WVGEwHUs5SEjY2bLLtY41soGM6X3RiYNz2MD36z2WZn8mE3DeKhAWdBwJp4u",
  "key10": "5iLk5oYD7qsZpQnXhS14afWK8t8WEYQEGUsU47WsreKwifoJmD3rT6fKxBKt3L4FukZT1swytqfHFDK1HC6AqAvV",
  "key11": "3j1UUDZ6kQbFXEh37tYXJ6KsrJqAmUyRV4CepNumGrXbuZ2dRSXhUVrcd26YjkuVb9nvcj3TCDnDq6eZ6rpNonWu",
  "key12": "3wxo8nef1hnQVzyhev8L18c8uqEPUFyBGN45WhuaLKw7j2ufDiVtcVNeRX8wRygMa22trupcu4BDZQyz4SMQ4CmY",
  "key13": "411jntk4MpMp4TYBVUgBarP22R2jKMqAmGQzQ8f3z6Cgpayga6rLsiiemqVn1QePrfwDvZdH6z1toUmSviCztME",
  "key14": "4wz8nVMhhHdm6UuEgCUw3uEMMsSfcSQs5kSxPs9GspkQDGcu8kDW1rXKgbTuhufwjfUYzdy1nkFeu2E3ubXvy5wZ",
  "key15": "xF6Q9w3a5KQ31xMFjhw4noYN9i3SMf22AE79uyPYJaZw4U8da332uf3QMFsgQ3v16sj8orXa3Kv1EScfhpZzj4m",
  "key16": "3WnEBhpjPjmUyGBjEpk7Yx58amYHfTJMi43ywEh9J1Q6QxoAB9EwsfNUNtbJJcTdBECknxCSwH3PmGtVscUiPJ3e",
  "key17": "3nL338DHoQd1Qpw9eEbHGFNiitT2CWGg9eoDQ5gjFa4wa7zNsM3ad5WEqXB9ThUJBV6mjuw4hJm7dPqkgo6iYbVm",
  "key18": "3c9vgBqM6PVgVpHno1C94i19CHK92Ywj6WQdnA8R5iM8xWReM4wFL7qxM95dEB8oW4FCGnvjDm3WV49zgxwU833W",
  "key19": "3JB1cLmyUy9F6cuYkNPUFpJKA8osVvUXooQbrjp7Nu13EFnkGccuWUBtZnQPhotDEdcscPUu95iyHKUM93BqDWKC",
  "key20": "3KCLv7nMkvUi6zxT3ymL79Fzq5Rfgh5Y32W5Wum5kAVKetq52hNkutJuNE5Atf5uKciCuW4Eu91wQLKBc98XsFyL",
  "key21": "5t5E8nJW7ZJqBbyPnsspVe7zEh53MYhWwJgWD9QL78RKLH9SqwrE5csnjLhqpYeBZLxd5PV5keg8kGcgcjzbBbNj",
  "key22": "5BfSxyhop3q8eE52kytH6THPEYQSzXQzzopXhqXCYJ6ASFLDj7cnfX8toaqWYbHMFo4APYaxukcCjekunHWbwAy2",
  "key23": "32XJkNCzwDTvk2M2KfxqXHJBk4Qmtd8tms2pdQCdmJMy6CD7ZEbEtZA94PAoRzN8ndgWKnjANk15GN7TYVmn6Jg5",
  "key24": "38Q513Rm5K4QQ7uspr1zkMBgEPtVmDff4AtwjRCdKdqHD1aTX9yz4xF65KXnzizpz7KLDurwYcoC7tfNkxCApytt",
  "key25": "5rfW5KPcQcCBcLqMzejXFuRJZbiNFhF8VgtTANhddx6AXbu6FGLSx3m6hi3c12MpVRxRwrbneWDQjuiKc5qAhiv5",
  "key26": "4yKUjXpGNZT9LmzM8q6kngwRDh6gyDbsPnLt8eTL9tmRdUuS4RfM6TRkrm8BTf3yo9DjPEruJuSaeNLKkNaLf4pD",
  "key27": "355mWFscZgt9RDAuzDWpYWDGHhtT3RfU4okDAVaMTTJKUX8JrxXaYRTFF8kbqjaj4mYpWcQprnwtBDuRsuw5uZYv",
  "key28": "fKPDbycGCkCDzRCEvbJRSrKiXeW5RBWcQgrPqrND78x9Dkncuih6mgJwFPkK3HrFz8iQcBjTDDSLrJwDGkTLfah",
  "key29": "5vKdmrwo25Mh5E34pY2vwbikHpeDXcgJrwrrATDapSAmKkvh92cx2bATmHWozAqzdbXkx6UK8vG1vGs7bR7SmVtn",
  "key30": "5ZBzVkrJWRw6KZt8Je1W9Hwoh954ubNYXRsSxoSD7hZ7Son5NBrxZQWhypBDVKa3eK7Vo8b5r8rfu8DdqUaeXZdy",
  "key31": "5YkSBBxhbB9erUUPBX7Ymf9GMiAcHDA5jrAvCkvJRkSYCUFww4infZCmE7SwZBRXgVJ9iFyLyMbspAKYVhdcjB9",
  "key32": "BNiB43HZsgRHGCxA75s21LCgXeK32mWJSUWtF8g6rvpgxMTjhTSur9NDLkKwxHHTWbskJo12xczRY5aZ9vnnfqF",
  "key33": "5asHVCa4yXigXAVY2byk6jZJYDS7LWwQme8PAn9mGuYQa74w1mxFK1BB4CVQ2gXFrg8A8WTHTUW6urYuAMtvx8oQ",
  "key34": "37xwvYSVCM9EHBeTubtGR5xBvEURiDA52HAjXy9j8Wvsvbfp3TF3DF8pn6PS5sA3Q58549MPEHLQgqc2WWwsxS89",
  "key35": "5wForht7hGFnLkX6FtYKMH3KuMfbWxKwo9U6A7hauhLUPsvRuVo2bqg2XdFfqu3pZa1dP2yVbeoj111CVA7XWkJF"
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
