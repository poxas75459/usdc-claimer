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
    "58a1gDVzHADSqLb2Vmhe7n31mqFG1vnQh29sNk4rRXQrqpaamMXbUp8cUpeGV1dV3JnSoGV2KkQde7L8n4SLcr3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cBWeGbLgq4RQsNUWYroNy7WumYG1gehwSP4GMCWLWT8HkxE2s3JHf7bv29fPEg1UbDD5s19V1pwMLEX9RvBJGxP",
  "key1": "3Mr9fKeNnX45BpumZWJj1YEnpfQFUYKRT9zy4CznCbU3uPmdb7vii8aWVRZsUfAmxpJ1bC859yUi6Up4LKR4YZNT",
  "key2": "45eCYEqhiZ91Gwyfw1Qjk7zmEFD953nR3iyg2RprFzfMmG95oyWLM8ueMLRaWq15QToW9wMdm8W5eJExbeHkkwey",
  "key3": "5gmWpDyrTuwYzEZGMpdnarRMdtSGyrzyUwZYn9pJryQmTr4DCBLXTPnQ13mr3XoYh6HJJdXW1Qg2dhV47FuJDyr3",
  "key4": "5mGFo719hEKRHTernUL937Y9inSc8QEeYHwbcxz16U6zq7vQ7CcxVYSWNPevMW8rssRJnau8jZT1iHGtjipTwxwu",
  "key5": "3Sa633gPMNCKmufEjS3pm1Kk6eBzgs42PJD7vNHqZd6fMrme7PHEaoaGW5zN54HuHRXHByYP5eBzr52PzbTQhTo9",
  "key6": "5dHFBBddYjaqqTA38yuCd24peipN9XeJdNxd8seotXTJq3nadstZsvdCnggMqH5TP7zLLw46K5vz3J8945YSaicw",
  "key7": "2aba2rDq15dTEJXFN7FgGM31UrXxvRpuJZ1YNoETtuvJCtVvuTL3vWhhMgw1599tR6XGHRydE5oQ3M4ettZ93rBq",
  "key8": "3kpF9dyut4129G2Jzpt94xyW7Rid2hE8CocChrci1moUcYJVBn7MxUHBLN86pjFYBwMsJz9gseUnuNyobATSv7bf",
  "key9": "27ysXy2e1YykSL5qii4e7kAryjKhijpf35P2kGmWvDA89jyq9Fh1n7UMdFWwwJQ7wZez1JWkmAu4bZbiPgki4FEn",
  "key10": "5FD33gsMq7VjXm2DHphLS5Kw8Vv48Fjr4oe527ThehXDCJNedfwfoffkNuP6oddguVwKA2PMqfmiBWoR51FgpqoZ",
  "key11": "58TcYmEfrMW5SGe1ZVAXmqgrddFUs9SGipyNPaMERg5siPAp1bt7JuVuuEbTmaeQdbb7wFmUdHKX5GFvj8ubJ2mc",
  "key12": "4vYoAbD97JX9wzsJKNgThPE6eW4JYozgPVDNu2Rzdbexw2maLwL6QpkQ5hujdDLRfLSkPT8byNxARq6ZEQwvHYy3",
  "key13": "4TLFBA4Y3jikdv7zTF8bm9tTukkaW88za1DqNNgRb781kw4nzUePUGBsGFo5BHMnqpxEagyceSsLdykLQXLtRkr4",
  "key14": "8yY2QPdp1Zc14K7Ad4PXWsvsqKgD7KG3CLt2MTzMKcWqEQVU7ZVT3fxzdzeHUyeRDwUiY11Ucg6KaHQ2Q3czgnp",
  "key15": "2jfnHRjQmSmVBdM5wpyMBfzrJFaZPN6jiyVcKcZQ1X6NDW7npyXiNh5D4eyj2i6pLqZbGELMWt3qAVJR9V1gqJP3",
  "key16": "46ti9W8sxXTMbyEtf6rPJPExQsLKTSdWvyrrcU4rgu6RUu9rKLyqcDDd63cyTLN3Pzvpf1MLS4buSYVZqk3FMMB",
  "key17": "4jGwFK25ym2dcxuE7fEUG85gJEzHWHkawsthAA64ESbL5uGWrSkuWnLxmPvJeYbznGXo65St6qgJBw8SFBeHsHBV",
  "key18": "52N56F6g7nB7fsg5GFRXDHvvuZ2mer8RiAvnMj1zevBULV3KNmQqusCK8bacKJCEmpofD3UQnwyMVxLVhzsmAUpG",
  "key19": "Ar6jfK1QydxxAGLQrgD151bxbECs6JJag9KkCrbRzW2u6CZCoHdBwsy2Db1y1eoKwDyu3ZejrAhgX1fKuRMFn3k",
  "key20": "23J7mse915MBT1wQ73tRqs3W7qkcxsC3RyX3nHsdhkTyPNzo4BsWbY7ewKZDqut3Xy5M3H2YYTyZYqzZoo9bEjVh",
  "key21": "QpnjXQ9ukUhnm4ZJvvpZsBZgZixkVvoTVg38YaCYYMcuiJzUToiWXLqQmfxWeBYccqMWQVxhoKaUQiaSSo6J22M",
  "key22": "49bE6z32kJz2QeP9gf3msBjgNa54EibmvCpdwXZwFp2jhh3aTzLHrvEK6QMjzpbnWLmR9EpE7f5d3ceGhjjCsoKq",
  "key23": "5ntBbmqJgJi4u41dJrAwkX3simaERq6xzWjfR1oHCssLu4qbknpzE9SqUtYMNRDjZQT815af5Bcp9MmfnbvrDSdf",
  "key24": "fqp9qb6r3grQg2Zp6vzh4xnRpgum5PzYx41394HfSCX2X5Bin3vu4BEJwhuAu7fkGZ9mQDbz7VidPt6r5fwkHw2",
  "key25": "2PuoGyHFphHZEZPHsCU7zJshb2i4GeSdjQY43DxPfEjWQLfZgo7cBdvWwkZtgXXHYYrSuMgFYz4dffDYvkVJX1h2",
  "key26": "5bVb4azLTs5g8pxZcNJSpX41bowPCr8TjBLiuA7Kfq39uqiQBLpfqJFm8eqQc8tBGRXESaacS8HNbA2V36JGJtYz",
  "key27": "2aBgMqBpAU7QtwwPb79BPvCNEqS4v2Sy7Ekw6o4HTuNH8zRXVHbrJvUuvKs1mXvwMVirTF95UsejzE5CL2oibhBL",
  "key28": "4378EwHKvftrLhQ6KupRzqeJxudHwVCaDoYcZw5qZEJrmB73qDxduiqG55mDkV5U7EtFUZnRJvHjBNSYNimoZKqP",
  "key29": "hQv4YrvGcxwHDjbbX5MFrkvRPTjMXEX5unmsz1Cb4ArrZL9isoUbkTGigQ6BbZCvQeBCdkhvCMuuFAtcYW9MKSj",
  "key30": "51gW7c6DC5zHxUm3f8yJDQnTgfZUxXvuBYFQfDYjqA6s2LtYmCduGQ9axv5pLRaCbbxduiNMiPu4iMAQ5ZeZoJwg",
  "key31": "3qtHFypCwMig7sCTMw5CmiS5eQCtroyXhquzfnD1wGc41Zd4YTrTV5UwejEwoWWGnVw7dtFHua9v6AQsepkegf5b",
  "key32": "62VSCicFYgERgTAexqCfvMEXTR4bHANjmfWrXNPwXEFDcfkLKYi51Ar1MCZK7QzE6A8tT7bziBmg9hUVEnTPyC84"
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
