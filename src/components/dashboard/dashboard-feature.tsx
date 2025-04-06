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
    "2zd83JaPRc9wUZorhwAoHbC1XTfWT8o81B8BvbFzti7ykZnbZDsXV21gVJCT6ft6hELpSMfjjxkvjuKsTqnrayk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yvQKUez4XxphfWNcT44x96kqKEg8D9xCFjDDfoDDbxK9hJ8uxe1p9yHwaYc7gXQBJPhcNYU4A21A6hKKyuX3Jqb",
  "key1": "4RNXheqr7vhBrZbT4Y572Fg34JX24Q7vhSLgDLUx2ywhj3VQxo1croDhnwMBNkRJhrqtcVkY1BwfKicH9LZDTFHU",
  "key2": "5aYqDr1MKRer1cC8oDmMawccFY7QdG4W6o1DXDjJ3X82xvSTxVsNzs61r2U3qT5o6gBHsyqmeGMtymrtS6Wszqe9",
  "key3": "3FrRYs3AxLi5m75FojeQ4tJLqCRwdAg1nCTH3GjDKGLiVUM5vRDVLfMYkbLq8RvcH6GYnY6QhwdTUtXFUXrHgtie",
  "key4": "5gLksegfWbCDuHS16eoZW21U52hCy6CJnd91KPqhGD6QkXiiaLPaRvgNCqBaTJBYvhcgRaNPg2zXodRjK3zHud2J",
  "key5": "4yCBPYK3xCvoEYKXCcv1C3FpjDuYr9HWv2v95a24MWdtJpRPeNvLuwSQE6FYz7h5KAEGHfaQRaZXiXtk6nmF4q9D",
  "key6": "4Zz2TvnG5fzT248yCdXmHytD7AzQEfTNFJm1XEWh6rmPSUeBwda922cWS861EvH66tCaE7sHhGvHzN1okwgKZSJY",
  "key7": "jtJFhuASBwQCfwmFKEard3HJ1VTSSZs2naoXy5xsaGB9nDys6zR8dbbLBRdugpSztdVe68o9Kitvr5tid1ZPJEn",
  "key8": "4m65jTHa1bRhnWxwfocbBV7JdcNauQ9rpk3XHx4bXX6oAqw1rWqZJtzCCXLk3nY6uoEUHex6mVzZj4DNuGu1na5U",
  "key9": "grSARm8ktd6zFvn1E4GJSa6eS5KhGBbDgD73hUnQNw3nrDhnJG6WBy83EPTvbCRy9thizBgYdbqMCZiP9Er4JSP",
  "key10": "3bStNgEgbyggcZkN3btVRYhK51RxskAcXSvqSsSxeEP7YRDgLRWJbbiRKpKn3cJGUJfEw2KNhtgJoGrJ22PcP35X",
  "key11": "3LsbnTaKHJtd1qEeShVviBA4GwZVfAi8zSpDGyf31wcAErdfNtRYqvx4TpaWWVKzdjJH4HMKU4aMMw24iVA7GCdY",
  "key12": "4k2TZPweMViroK4pJyCYxuTeByxKLSaLNwBPS71mug8tAX62rAk8LCSd3BRGJDgWDEeRyqQQNvG4yNbQouZBvbhV",
  "key13": "2nVbaF6k8LLuSFnq8bY8vGi6ut5mQzTP1HFbPWyGpnhbNdZqXjFRiPyhxn8QQhYYxDY29UPmdpzED55tCyryWcmu",
  "key14": "5drWkRQgQT59rPTuy8W6AktwrvKoc4Q1ipizrdn6sxdA5m7YKKW6ZM2fV1wuCZ56PfoDFc63zvQKqCgEd6HYAhQZ",
  "key15": "4Lyrr27ieyyiW8GymYGQ8gW1yEoRkZZ9eKUHL5fRhXCqZ8r4DPhSAoZLd14Cso42xmArNiHe8boDtmi9Jy8Kejjp",
  "key16": "3jQRbvWe2XjBJTJtHgCVwJXPZQYUaYt3iToEXh8mhPWJBzY64j4i4fAubaS8QzdaWwiL1Nz1eR2BaXTQ5rt5nexo",
  "key17": "usxDyjANoYy825pSEhgyfGWjqiFz6gSLdHX4mavpX4DiYtrNwt2RbjJDuUPYH4bbn419oPCkLM7DCtPYqv4fU4J",
  "key18": "2Xu1R985btU3pqjFLoH7RddkqtKgD3EKTRpxAawrLZkS8CEm6Ad9MvcFVih1Jnd3DHX3y7ttjCRQP885xn2nd8KP",
  "key19": "3GHwD3h9oNGidpCpoiQan9dAo7Wtec4z34bV5W7DATxyqvGV5yE1JaFSJSSEGK9NeE5AAo98QadJcxJ9vhDvuUzc",
  "key20": "5DyfCGHPUu6V8rbi34hmKMV4u1xkhtrRU6xAuoTf4frHaqZ3QE4UrDZPdUJ5v436rUb4NXtNuAFNdRcVXRRtHUsH",
  "key21": "5dquRcZxaFBUcj5CbLw2jExvBbqwduSckvQJ9kXVgWxu146ZVM1QqGFe8VByqxWu3v6JkfuSoC4WFynQLCvRwpMK",
  "key22": "ZE5U2yAyVQVUBvFUp9ySCaBToadjQ7waqdWjs7H8NebfksptHazkdE6rHThsntodRZYLjSLte64A8KoF9JTapTF",
  "key23": "2wQEa7iiCRpJFh8FkY4kzLiDriEQCMTBXQWMGsCi8g5gAfqKm1eAix1W9VKQocKWncJq9nAJ5ZStFr4zHuLa2ifc",
  "key24": "VZpMKphm3bNQQ8mCCrzrNLZdJcFd52bNvryEeMNbnhwxk1az26UbTdNGqryvPg2xGxRdBBtQ1KZypao8KuBX2w8",
  "key25": "2DcVcSdoyWsRt5t44g3wC946aoQVsSxDdYPk7f835VU4uM4Fg2PpgXUxweXrA5i9cjHcwFz61P9bDLoGagSZtmDm",
  "key26": "5pQfjhcwZB3xrCDfVuTxXnkER9PLYYc8xpdmDrvJAc6cxWrjPbX8MvCCGfLCFLthdH4FaysMLDEe9x2Uv99QsPzc",
  "key27": "57HbqGF6UKvvFTjSnxWUzDsmAQmrxXisQP3nXPWYsbz8Qa6STCwp5LMu2C6Jw7JhRTvTqTjpfoBJUyUztXVmd8sm",
  "key28": "362ChMU1cqJaRLnRWTM9dHvXPziPG3Zzv4TXV8UERdV4wx5zbL6q9bDBg5baJCZoSLYXfrhLAk7UM5a7gbi6JvTy",
  "key29": "4ZE1J4JRTt6MDSzMakWWxevfPpx8B4TRJ5jWFH1moPEUprc5kr6C4REftYgoShLvkxuJ8aHk1SVHbzEpH9n9LQut",
  "key30": "3YJLpo8YX8wYtiZ4NyWQzDRPeTQ7aqT29iC6KSoUvhFTC7cdmTmDWyB8Ljv1jD5FhbsNShxAWTELnhUx1RJf1fvD",
  "key31": "p1gQ4rGtaxeeFkH6KvbJp4HPdvcA6Z1ZJ4nBqmRWfLHbzRePT6ci8mBst8L2JM4i72riC3MxNpXfmQAzhnxViHZ",
  "key32": "GYZNcHpuPjcHf6X9XkN94uwG8C7k5Q8sqAvswaHUoTQacP6vbrAnWZtrrZjD9mqZah6KwHRY5Tc3DuSPJuysL6J",
  "key33": "3QRiG6QVzbKDc9MjHJq5wQiZq3mbgL6uMUPchovKNjkf3jxn4W3ixZyUzmw1KQN9vTSjJ6soHUcqAcNXFvcJkrry",
  "key34": "wpZyieuVGtdUe9p97wtCd9bNdhjKWssYxFTGqsBQbzcwvVSjBWecuVKTEvEuNU6yhMXokp4WVjGnFeuzSVSe4nn",
  "key35": "4hLyBw5BVaxg4XmWt42zpFM6s8GTjMqX3uoxhmCoF3H1i7nLKB2GX5BoNxVNwkQad2TKwbUGP11qSiENXvg1CsaP",
  "key36": "65mMzcLXDnxoVDaN7VZSB2yHVwrU6pWQCwjY7pHmJJQXX34TkfWg4pVV7jnhrUdzeZYgzZiZ5W2u1zvudB231jCs",
  "key37": "2pQi22UHNnUdDzyhCLtQsmyw8aKkxuY8EnHeyEyF2dhfsr1ueMPKENaE5cXGjV48yqLdNmTafzA38s9pYzy2DTKb",
  "key38": "2L3tG8DZCX5SAVQajKRreqzLvxC1jgcKiG1udT68pUvkxH7rWzv3enHSNHTk4Geyx5tk8nq9jUdB4DtYKSugbe9Y",
  "key39": "qhQAsgfMve5EmNCmSuchg2CrxDAY6WRdxDJ6Ji5x7cfYExzHPg3zMQYF8x3vjA7vPKrC3QwQFTom2yutVbtbSzK",
  "key40": "5Bv3prgn2iX7iwkS69yJR9UeGw7nNUet2pQVF6BwYVMWkip9jgdMjTm2ttqLqsBw37UgMACPscwyn84GiRkr53zZ",
  "key41": "e2PMQah39DeJRkDtw7PQwhdXECkY2Xhg9g2LTWuxnHxtwwUyRQYeRnA2587c2kTKLcTNDHe4YiXm5dJyV7Bm4C6",
  "key42": "3qNoxbcpwVxeBdSrDTgj4FqgUc9FpJGhBbwK1RXFHh9kUFiC17PduUnQqvRuGWAft9LAv1Z7frCbmUeegG8kVBEK",
  "key43": "3dqVWwS6CTeozyt5esb5NDjHpnfyHw8mDVdQtcngDWyDgyTyBSzgvztuMLjjt7mJ3eUH8eksK3mXJ47XjMYtir7q",
  "key44": "523SHtd7gAyQVTtuQdCxF1qkKF95behEn7yfBVMXVvEMVQwnnrTpLrtmtY4cPnXYUDWjT8SCAC3niNYuDpvg8XAZ",
  "key45": "2YiNZVPDJiM4FyUN8jvufNjEPUf9sKQzGLo6m7XczVeFBQrBHd4sfN1Xyg9r2EwMdZTUSG6734YRjSzDtciiFkfY",
  "key46": "2b1zvyqD63cKA1aK2rt7buZTTzGA43ZcFYWcVNCnzCpmvg7vfkNbMgZfh5r7GXfEweyhFQuLBMAY4M9ho5UyVv5w",
  "key47": "5Jh9WKhRqGEaUnTq3PW7hWEZrtKC6Ko9MF4Tt72wrZUegXGkHHBYqNjetcbzrgjzYhXJ5H3hs292Rbbp3YtfAHj1",
  "key48": "5HvpAxUG1sqgpmuPMkzP3nG81Emv6NbTJ4U55R6sqD5T92qvshZneF6aiBeGo8nH16mqABnSqNt4r5wBCrYsizYn"
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
