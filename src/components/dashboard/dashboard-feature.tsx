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
    "5UMeLMoq3eziQ79CyXFqTYDrZTtwW3zhVsKAy7WgAFvMAEWUeE7XAGFWW7wpDgwCy4MSzXZ8FK2zeYtFpkKDmaT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sCeBSvSSWrUtzAHwHB4q95SdP6ohHoWfefuUUs3uR4ypchkHaKN5LohuJYtvj4mn8z41MGRQ5sPDdBAgDHZSUvQ",
  "key1": "4WRo3Qv7VBGCbd4gZnkh2cvGsTnVVV1HSPg2iN9oyyjD6VfLc9NBRQquXgGu8mJM9JpoxhXyqz46JU7TZ8xE929Y",
  "key2": "Fjo8z17FdYbDQYFnJPb2w54kzLMXaHVfbKRVkZ14o7rJ7eErYtHuu67EykgKAkYLSwjEFxkdSbj3HYg7A8dh26L",
  "key3": "XN5u2faWeMtbe3gRwLHMQxLQvBCYqBbYb2qRW3hxKXUkCRnFSvhcxcNQoEbRXPhtHWHV5iPmpBhaxGDiPrEXJzE",
  "key4": "3mJdUCMTQfcNG6bY7HgEBqo1zd9wPk2PTTPEjkKuExh748dnVZ8TzMXAk9osHxifvg5ut3utRdqrk94YyTHSquKf",
  "key5": "uSp3bE8PQS9rfj2k4afUhKg11brmJPndUwqvxryHjaAPHDogcZBx5Hm3C1DK8ypeA1Bj3zEJ7YVDwvecr8YRa2W",
  "key6": "65GQLzEfUAbdghossfiSjBc9T5CYx96yvewNqNNEoKPYmqEnVLmz3jefhjQKjH7Au4bUkEaJWhCzx6JJw6GA5aZN",
  "key7": "5tvE5kPR9AkyzaV881K2M26rH4rMpu1L9kAN5FPSPLekF2deQkc1UBAvHbPfFm8wMpF6vURaPWfdn6Enx8vcorqe",
  "key8": "GuyjEYV6Rxj1jEFFCwK9tnbxBWZPiCyzxp9SZGQPh1EFuRAoQZFvEW1cf6cFt1y1kd3BvbRL6vKAm5MLQUhP478",
  "key9": "2mxZCMJhABwybT1CWxeppPyZQQRc2w7Sv6EcG9MRQPSGWVzfkogXFg3x2oUaN39H6zDhdZDf945AUZy1iYK7SpVP",
  "key10": "2BEc6u2R7TEL5WvVJp4TK9pYsq4m7gg9pHD2LLBSvbq2xgx3hXHfGFDQ8pT6XyaKZQHNuZqwnviKRyj42Hv29xXL",
  "key11": "3Xr9tmjPpTdZ3AUspRWBhL6TLAkYv5RH3qSSJi4KXNU7zgpthALZzAWj9xyxJExi2UowavpMEc2N3x6gdVKBXpJt",
  "key12": "61UURRBXSZAMVa5Z7aY5ccvP49MCGXpCvc6oKufhuo8VH45sP6qmtY2qTbvUWSbzAxnsnhzPvscDN1KJE5qNarXE",
  "key13": "4Yx3NeiVWzopcD7bpZsepMNTR2MN1uW3vua8z87HboDJFAdBvNn2AupdCJQgS3HwY2dH9jCHAt4jW5iXH7cppPRV",
  "key14": "2jpnnn7KsoT4tLZCwHbX7BAR1dieV8BwaSuCineP9AT2LEqiMcHq2sAretSeZ2pyfJioV8vtMTmLQJM4PQZi7Ezx",
  "key15": "Zv3h8RgAgZk79KiRyMPf1pBs577C2JMfDufavDQ8GkpbJx67ZGgZ1fqNgDRRCBYV8h8qo2VP6zTKJpyt9MW7GYL",
  "key16": "4Rh5p4LLAR28KYTLX8KEbhrkFcHQAYLi75fGFaWYBWCFnycq6qhGUZfDihJGX5emg5JqJvzQVNYpddzfBMoFNB2w",
  "key17": "36FTSawVU5zCNXE6fts9osP5WdsZTUKhbpCZ7k7qSgBXMwvF3BDc66jU4uPJpBM7gQ8vY7Qv3kjxuCKybYua9pTG",
  "key18": "4nfogXdhMQL2mZ2NKUSrYw5hecVDmnMFQistj2DkyR6JCwibJEjgkGTc4KefyaUr1KVErydZK6jeEeh6HWe6GuxF",
  "key19": "3zmHZdR32nuPKnnkb5u81pZEQn3KoiY72FNYBJ4X6SDdQHVcaF6zH8qRLJJCzW4xyYD6p5N9xVSKmPwAJH9QBcuS",
  "key20": "65Z8PP2d4QCJvYUHsKKkTVpaE1QrDqwdtk7hMZh5yi9aiU8XicmX9msHMj137VrE1dPgYQBV8pb7yTHdHwy9M2av",
  "key21": "2jpnLZ3NRi4ANfQTMAxDMgm1tFDPw76cazwcu9t56Hb53fS3LySQWkST97kdyHZiF3Mf8wxAaKjeHRVrekvqaCxd",
  "key22": "3hRvc95qEr8rdxbVa6nbF8xgqTXQ6f3HB4WPdzteJD7AgDQ4zfGnU5Ckdz9Lb2yWKoYeuFRpyxWUUZy2egchJRPL",
  "key23": "MTJGmDURtWcLymvttGkHtpqcRiSLMDTM7SCfK121cgYA3n9CEziDHmeR7JeEttxyemYHFcBPxjC17fzt1874Rte",
  "key24": "5b26LoVsFgymhPTXV2a1Z4KgNPeJviFeNYSChSeRB9gJfku4dPZfNv4nXVNWdmiVr9EpCvrssX9TmP1nU3wafwjD",
  "key25": "5ThHSYKQeSqxSiDYRDkGrwXH65GmZPf36wS6ba4rR8eFtjSsMQYsgiAwezPmVbhcEva3vSvHQWXXA39YodZ2CnN1",
  "key26": "4qZUcarWe6HSXH1UnwaFADDp9BTAiHEc2TjFXUkCieU7df21X1YAjYRB8N46kpYeG29wAUozUtsDRbKYMUPj6T3c",
  "key27": "4ztGVnjNJqTKoQiMYA1bUMtc2PpB8NTogHXQjQ8U596ECar1xDSH8orScpADoGYWmAsffC3wZA8gb4AKiM8VkrZA",
  "key28": "3V1AQiodacMQgpUr6om7x5goNg21dGAMDVsM3Ry4ezHwpkRooho7WbPYPbKCp43hUovtM3sDWgN3mqYj5vfgvze1",
  "key29": "4nVY4V3KjPH64aKukC9Prg1MFxNHmtmBdTUscJWShnycopqgvF1Wk2Wjv23TvMCmd3A2VjmvNNjhZKPTyMRzTxS8",
  "key30": "Zsea2g7xdYLtbhRzkNG8kQVk3ByzioSEB6HK1DKgdzdpvAdXUM7YewjRokfhZrqAtkHBbtcNgh83dHEzgQXdCHK",
  "key31": "ZtQAXDyBPs6wJ7ocJXRKECMquwtVB53JyaQmUAtQ3iNT59c34ns5cu2YAv2YbzgDt47H1mEURqdPQgyXzVVpyLW"
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
