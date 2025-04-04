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
    "5MVYbDVDRfzfMTpHVkoQh3MpHd5jo2YVLSDS5dbwC2hEuyRuyt3MQA5xUvLH6wqJ4SP5x8oFEgiCHEyauCsBQbaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GNhKgnUXcyNsGRBT72WtVsc5FMh7XyNkHUADfYZekB5Po9baqCB6afj42tf4oHUKCVK2cCBH7cGuasEo5jQ1Hno",
  "key1": "J4NunYuHj8qomP5pY4P1EH1ZcYZkkxcRyYpVUydmFS6cmxjPwXyV42wgNtLSHUW6jvk2KYkTQiDxw9vNdVS8tqq",
  "key2": "293CrEMxaoTqTCUApAoYjcKjbZc4u2D3n9xo8TJMeCx8dojArK1E2VVXzeDgoiheyi25aXK1xRYN2ccX1mJ4sdwL",
  "key3": "r6sF8Na8NExsYsPbqJM49dKcHcE1cYhyeyuf8zPKSVq2hkWYtaqY7cHkmskGmNNVP6m8NtXLUTy2pSaVCLq4q8D",
  "key4": "5axzJXncAp2USEyiQS2b629sCYFRoJAyxx9cWeT9PUVqaFiRugP6wQJBLCTghVcupbEfUYdSdn9uVmGd1jAoRqaQ",
  "key5": "qEHinfA8R4EcBbH5UHxKHAns78Lb5buBBMTbvd72EH4hHYVueo6ExPpMbqTjg3GvkZAnVwsnWJvCX2xv9UVHvub",
  "key6": "2acc1SsRw1w8CW96c2RA8RCPQHi8rykReEPKEwvCyc7DzkzG2dW9igzFWwoe4PWTve6CBfkYeVD4xXD7S9LtGDBG",
  "key7": "64KP9svgw5C4GsZjuqpFp1BWLj34vqE52xniMHWuAPezqszD75j34QNTWHwEUJTRcj2LFH1252Bb6dd5D7qpFZvU",
  "key8": "4vfQT9Diz6V9Joeu5vuqNGSJgdNBy3tLwhSpGumRCD7wei2N6hsxZKPocNVm9MuGVF74G4UoYh9TxguUiAzpescC",
  "key9": "39nXfVV33jzvL7RcDjcP9Du6YF27e96rTpKfNBsJx7uowyDf4L8ZsupyUZ7k5e4bLtueZKpaB9ffZnrkBNdMbGjk",
  "key10": "2DofNEwrNFx7xuKnq4KqHJ7KF2KTtZCJLpH62bXf3mP8m1HJv84GQS7ZBTP54WXMTVDbkZypg9zCE4om2eX2dFQR",
  "key11": "4PXNqLmLsad9KS2JtiE8F2AhPtncnxhCrGEwhMcEB8jV2SDhkED3FsExdWdv1cerfD97QYMKUBWuyHuiZVgVLA42",
  "key12": "2iHLE2a8mUF9Ug7u3zqvjaAs9teYcEcw3594ydWf9CmEegzRbG9hz8Lgpn6SiTuH4UkCpjwQNEiWdUgkahwLUiDe",
  "key13": "31kWZ2Up9W5csJDKR6dvxA6wgVxw13LjC4TRn2iu4obtjaemjCQXZWd2HAuYTh9fRTjzkvRbJdfYHHqbJVAJT29u",
  "key14": "4ZtuKvUbqz1nNZio9t6mVvuJhYUdTZ6nvBpN3rsJMiXPS6ahouFYqgd1h4Aa94afMfq9t33E2jug3AU5s2whzLHE",
  "key15": "2gFRoePxzoXQEMwgpe5fSGSw77ZgjypMp7sEEXPNzkgCZBq2BwkEyP9MDm1nuXNocjVq1sTk7dYJbB5HHeH5AahV",
  "key16": "puqpQzhHNW86hDPrTC5TJ8dVSvPQFPBLbvg8egEskAN6zX1a3aBLQizWeZnxyV1vjuVdescL6xEY5i4B2Qe7XeB",
  "key17": "5Aok1m38t1SXiBxiKdZauePW8howLpmaEi1VhACCUp2J83MFVuJj7tCJZrNxAYH3A8BguLGinWrBm14SJXdyo2Dv",
  "key18": "2DQY59mgUVr1xCS4WKh1Ri53BdUHQc6NYAmhX4nVzbUMavF4i2jtXHndWajChUQmh2SUumSEiSYsi7qq7ntdvQm3",
  "key19": "Lq4rgeqxBG4EK7NnZCQixqfGG6SBqoMKLsU8vJrMkMFiu2uHBcpVrZHRZ1fZ3i5DrZpWU1QB7YX6Q2bhAD8syri",
  "key20": "8aeh57yhAHkXnFW612HPoGAkDex8EQFMYYzQnDY8MVPovd7MzoZWhewGfQqSJ3YhFPcha8iPuhrecSnHmkToEeA",
  "key21": "34fh1dH62Su9abtvQsHM512ReokZReUobZrSFA7vXycWVcYa7xNEANBBijZ5ReYKSKKJbqLkWpiYJb6AaBxB4s9G",
  "key22": "4JofHCAaMnJXNRfeNeBFz3Sk6c19E5mDMy1UdbRmZV9TXazRuTz5mFkeaTtAfhvPbjf2cWjAY29YQd723UVrTcdZ",
  "key23": "3UHtknDhJhLhfMhYiMZCD4oyk3zz5sTuF4sKnYouG5YsuHCBFqk46bp7pGY65Grh9da46fNBD8M7MNWRASscQ4Zi",
  "key24": "3JpNPU2ugDiMbaZfHTUfgbwRvzrBKdpfU59ud1iAJ2runnm3qRnS6gh8XwP5v9JgtHRMsuysCJ85FkdXYbCfJuMf",
  "key25": "33cj9TekJ8SsbBEQKgYemCXXmWeSWhT8LRFCZLcepQjknGYpNez6Y8RGghsAihygqVkVgNsgzv2ypBQGnGaqbg9b",
  "key26": "5snumY5dzgz5qE1ywW695JiyPwCXkdGtL6nykdkoceaFyvR7o6kkzBCHVJoH96aXyLay748SiGP1zSyELDGd8CgA",
  "key27": "jcFZSCS4UsPMpQGSCR57Q7WnSVV6YkFoSjcnDdtXCrtepZ7dYupFnU7hcRndGVBwNKyUNsZGpHstqUQhBm8HRB6",
  "key28": "31nVCPehEKGN9mPD34e7wZ1R3MgtzX37tW1FY2NHBYk4AYKLcjY2MBp8xaNBY37avWvuNNseEDMdXjQ8wSYfgpWZ",
  "key29": "36UsQxVTqHECy1x5zVRKQU6DzRcLkcdyoW4ZCciyQY1g7ML2iKWVwoyKteFXTRwboeAxaf5EeiK9ZVqKcVdn6yb6",
  "key30": "4Tg3MQJa5rnjy8mVuyqDWMHBvgDyKzS5NHP9eQZiy5D1LViBxK77PwX95Jg62aM9JP9vV5fkpruznXCqEyRekLjb",
  "key31": "4Cbop8pMPq9zfKPm7AuHWvHNUBND3nP1bAYtSg2V5eDwMy5amhK9iLzBpCG5Dq45cqXwkuT6Yt4YsgzhVaHkNxux",
  "key32": "ws3vrVcCTT2pMpFgD3VytLETarydXfGVGbGooFYvZNPaxCdUWr8zH72V44RiRpqcKCqdSh9EBtiP4f46hGBFGub",
  "key33": "5mJiemWJmyjPEhyTAS6ybVUFhYApbh4sZ464X8f3XUTQcQ1qUzSGjiFAyN9EdsP8QpJwQew8zoqNU5wTF8tVz7Sd",
  "key34": "4h9cpNnTwxveV81QzG6Cy67CuUwnaVUF9LgZMPcA4s9eFZVTbYfcEsWaG5Qs4mzvXXruYembWoKS6wtEB2BrBsm5",
  "key35": "MCkxhmfcabj8jrk8x3rB7jDgbnw3DzNNxkwvfD4EbLU52ZWC3Dc2Y5oqMPx8TRw6swLykvs5XPVjzNqMKEe9wKc",
  "key36": "5hRZmeUGgw9JjhDzy3kkuCNZCHGeaQpA5dX7gk5RD3xa3pwTKCcJ3gAwquwNZ7FsfSWcy2jF4mSykK5k1nFTaggp",
  "key37": "3hwSqEymdSdzn4fT7TpyKSD1FofCk8vWaPBT5VdRTBh3KnjfMAzuxBWkrdeWErs7MLnw9hdz7tbDsRwzqeFiQ25g",
  "key38": "4FCbdkbbX3cmvFteA4xCgHwU2B7ez8ft2u62yAn4xDfT14TWxTzjtTDeK5C1GFU6b1cBmDMRyTRB47X5Tqa6vq48",
  "key39": "37a6rJ1UG48TCRGE2HtQU2Lk4VT8xXF7iYsZka1qHS784zsPuq3xJ7pXjGohDG2xvfuyj6CCSMsmJfe2s1w22Kcn",
  "key40": "3dgWSWxAW5jjEm9sJzkZsJ7Mbs9FpiC6AD6QH9WfCpiRKzTfNB4RLA7gFX5ST3RvHvzvjhRVFMAk9kn9J237Y8Sz",
  "key41": "3DebfejV6HLnveahVWr9zGBga18pXhANTSwqswZfhhi5ykmXqonaYWBhgX2nSkaNopHfrUJih9hHTY81HFGuQ4Sw",
  "key42": "5T7NxkGzMPj25hZkYE72yQcqaosRBmgxTLBKUGFvCJMamy6wmpsTEr51gThZ4HT3cTevxCFaXSYFVKK3oqQnzYub",
  "key43": "3n3EBQsSv5W1Gi4wjK4MN3nTtegZoUGBE7mB3bwZg3XnFxrkiKwtBgmJG8gvrzp5D2nMbKEpQDt7QBwgJXuSt8mH",
  "key44": "5UcqRRU2h2gXQKmknAYThYaYQjnG3ZWu3KussXNfvuo8mmANn6mYyNVwjP1zKqEFkMnpQJayMKz8gFTENhTtwBnS",
  "key45": "FkkeRY7ii8X3y8WcH4o1MA7u4TVoAeyxtqH8G8K9e64MGvLtjxE1f3CBDt6uETS21k9ERHsDXAunyjfnuJdW1Hd"
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
