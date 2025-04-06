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
    "2RMn86BQPiPLxjkBk8hUkJrWoXDc4nNy2eLLWcP924zs7tZ1759eFTkSoAauAA9eFmohEq2usRT4ygkxVz2BVmhR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58QJ65e9tSgooJrnyAajuVXR1J6diF7sLtAe4ijYDjAPZ4W2LYMNg88BoajkF5x2GVtfdL6UZySr38m11siYgbqZ",
  "key1": "3vGCCKJZB9agoMBEu6Zpoy44qns2hnhGYniL8sbn1ZGM34sHdT2Fkd9KZ954aaK4pJ65FvxiJmDVwpdje26ii5mp",
  "key2": "5sWAQKMvk2FNTB5QYgHSXMPETNUqY8wmeKTgvwB4MDX4W4z6S5mWnMBvyt7a7EEtnVYGscP25TYnSqeBJfJNh2c7",
  "key3": "5iqVPggkckj1xAvQvhn3miyi1CZHCsB8QELbPvrfuYWPRaRgQ8snmWDyJprxhF8SYGDxpftYZzwue9Sz3nwdWCBh",
  "key4": "381Ep3SeETGLaH7wjEhQf6JZTcW6t5aLhUDcDJ8fVuNtNpE34uhFHjyJ986TdyW8dyZfSzkYzyAcprjQvCuQuzZj",
  "key5": "3TVnXLsrwXTvkzPL8tgknfov2UwFkALq29frJpBaBXRkKLEvSXZAuxSGkYfFEuwevzEES2o3VCe7cZwC2YzGpNjb",
  "key6": "3gwPg1jT6v2srrte1izvgKNiazPTnPtWSF7DzuJFXqesR26F2hD19h6dbzTw1iUwNkXKhxgZh5g6ukxL5yx9Y1aK",
  "key7": "4xsP8qqjY2yVTQSVKdRrfNmwsjFghHFV6eEMatyWjLcnroxKJrKbT9y1cYPaw4iCqJKng2MFtM3vLtzLQstrdmzt",
  "key8": "54xSWfKMiRNgGrpy1WRE11KDZ5Hz1X9KzNgQXG3vVbMQm1r4bqjW6BuMdAmXJjurhVakiZbFwcGukk8znJdHttXx",
  "key9": "5ZZW32VhgeEnt2BKzaD2mV8VV2Q6bbFxQVkQSLe3cAkR3GdBB71W841rHbYcWVgqouaJQuNZALXa61uoez2KZsMF",
  "key10": "5qBb3oTfMEKnkxVxmaQtJQm5MZ66mvdkh7bsUaE48vVHxPmMEb2Le9KNZUQYDb9LrFy7VgQWfgeMzSEitossGSqx",
  "key11": "fCcA64mGSTVP5PYpdfBtk95UPxBn97EbSoatVtnYXeFrzmEsZPVjuHCCjxTs4TYDRrjwxA6x7TrgWQ94EMX7pmS",
  "key12": "3oSBrxUh4npzzgba8rPSnZbyfht34AdK4eXfVcESV5aaE6uXA8NgiDVZngv8pRti33QiDn1Y6TLRDMxeR1EeBXtX",
  "key13": "3ekqp41hDCKrn1WrgY8i4P6P796vGrgCuGmv4DDMHEnbtoWzvLYvXan4GRFqwecXSHLLWW5bSjmGybCTgqHYMqWW",
  "key14": "5qQD1LhKWSh6j1EGnVqC6wbJaXK18Ay3os1i6GQuNEqzpJHCbA3go5oo4GcDGij5VMJ3KRSA3bWTcYdWcvpgHCmH",
  "key15": "kx3TK5BUiJbwFot9JS7AytTUvKDqCce8D2ae6o85zcsiR9qA9Zv9EZJx1STfAEsAzhNBRiJkS6YJTNfCWeK51uN",
  "key16": "5GmHrYY1gvngwadq9qbR7wzS7pEh8qnqBbo8zw38a7koEqDaik4PtWpgvymQjg1sdYjYmojhJxzz7nspgTvz7e88",
  "key17": "5yuRVqhWT6rnYxaJaZW4ENUJUY5aS9LuXvTj2ywKtBJ8cLrV2uehJjTtKVRP9T9BLUYgcJqs9hAWmQ8m4Xv4mmNV",
  "key18": "VhJYFqTSMFD1AUYyreF4qRHwKpU2dkAcDVfz7c4AUpkRGdTNA1SmfbBNxPzzZKQsiAXhj81JHDK5PaTAX1bRqSu",
  "key19": "U89XSH6ePb9Z7eFN7escZUoofesaxgztoBitaY14iLaVhEjaoqDiyCBnzRwuC77dM5oqvGjtmFi6BCYNq83vDUr",
  "key20": "Xtz5fy6uGa3mLsdAQFV7Ru7w6FvqBU2w51c9JXL19B3uhZ69ZVXkbSR2iCXQNtPnQdp3B8cZ5KyLpXNFBW1rKPR",
  "key21": "4zhLaQyB6nqbqXtYXgDj5odxWWMLxJiY7i7B8NazRCEP6Ksap3Ecvr5p9xqt9dybJFbBCdxf25fgvkNuqj5Wrrb7",
  "key22": "3Q4A8y1QH6N2D4xrmKD3YmFmY2UxtjeJbMQUHGEjrB7j2ax7ATrfzdZP8zwgCnEB43daSy2eZ8dbCva6DDgG5pEq",
  "key23": "SM3GmK8KfQavgc5cmfqz1iuWKTWBNu8Z8kjck7R16hQCJkaDmGivBpXB8xTpMnsRx1qTNhyGfzPYtWF72uWxBzH",
  "key24": "2DViUpK83upAdPJk8kZqmTFzjRk5uu2ZTdjLLTsyg4wAAajqNEdp2jtfoEKWBZvFSwbnFzvZr5xGMcZ5TXwR2U1S",
  "key25": "2kd8bdMrpBaXSSYY2vEfjPxTJGmgwsWq2QugwTyJjGDRjMCJGycWss4jbF7xA8RZBdZku8aLLHk4hbNTxTQj21Ec",
  "key26": "yUjDHt2wkJ1NKyAXHB2266ZCyVQB7fyfTaf78gzVqLyJtv2SbQR7fydbbUHpwQiQdtKnqvgovZysBSQhyDKZ1Zf",
  "key27": "2WVpQJuFp7H3gfsyYYf8EwZkQYkBhX465ZQbpc8gm6tUq3PHhhDTQZ1V4zvLH26SvpeQmWNH2FNHQmXnogJ8gMtV",
  "key28": "2jhoE6xGVQ9xGUm1DQrnz3KMMgUShTnLJaraXwAVUvD9uNXCt5A5Pz4iBVRYft1srj7c7wGv9t14UYUAt76dwoDR",
  "key29": "33AUCLu964TTPJNA2SPSoyV2Bmm1HRVMBYF6kKPRWTZAz4RaAiuMbknwHrmCy4Atu8CUeXJH8gnwvoEe8htAhvnQ",
  "key30": "sAz2PAMAw6vyCKBeedYjsG7pgCsm73DSqQBcbWP7J3YewxH8wRDtCxikeLN1som77gwzD6jeuw7Nq1WwSvg6PsY",
  "key31": "42dR55tUnbuXkFbr8vbQ2ZW19uByyETiRu11xMfYRuVkXqtB5mRYoRYsSAJJKVZw3rFSrf7AX62gCMhDYuLjmhW1",
  "key32": "3BR23fDvqoQvic8Jsc5yephk4Jcxam84P1omfYwnRBjACL2WrKFrfPAJcVZduK7i8gU4rbZuRCjzgHs6421HByJB",
  "key33": "2EgTmQzd4uy3HomE9GkXtbtQ2vHWTQRii5zMdAiAatyFY8HEoUu8cAY3jVJsRMwXpTiEP2MVEWjmnjhn77sisthp",
  "key34": "4wrdgH6uhAyQt3LRq7Y4nwprqfd9L47Q2NAsbkL8CUZedmafovsmoDY3k73bGgCRk4iybfewGPLNe4x5VHQrV4Gn",
  "key35": "2P4PmZu15VLYjoqSzPG3ZZzTN8LcMFDUv3h2q9R8t17A8m6D4hVYSLgqaywhJyFvEdkVSYnyzKFZi42qMSjxBDLT",
  "key36": "4pCqScoZbG8Wa5HqGTL9JQ6EBx1Sd3YUp4RVcTinM6fZSZxwEEckTDxYMNKP7cFLY7Jae1jforFPhzW988E6aKok",
  "key37": "2ML1fGxLuRDta7VPbQmbZyqDfbiKM7Tjokb4TrBkqbAx9qne7YMd1qWvZGtXhZexV3xQayyz6Zy1935xu9UEGMrw",
  "key38": "57xNYQor4RgwyM6sW3XBKVscGuPkfpVSsaCuN6uKZM5jBttE5fDg5Y9B9n79sE7h8K2obhQjBDmDNzmMF3zjLwGH",
  "key39": "bf6NaEWwoqUEReaVexHo4ZVE8UbZYZoteDTjtVxrZE8qS6hEUkFNGANo439wMogx1HvuRZV153fzM8ELEhoXGLv",
  "key40": "3ELXRHTDbsUoMtResMWn33dZZ2QpQGHHe2VGQG6YMNNA95RQtbAJTkfMo4GZAshW5mZ1QCDi2bfwqMn4PoXZNZ7n",
  "key41": "xBLxjZYA3usYJUvdG8P7HDbkQpGW3uK3qNi16ZMs2ohuWYZdjcWGTtXVEzBQGz7r1iLj5SvubpAwnv95qHAwgzs",
  "key42": "63cq8fggekR4G9NaqfEvAqys58BA1AYqmAxNYrmzDf6Z4TCVAyvxmbxtf47KPy5wS2WGJKTALUgkHkgXdg6C6LB4",
  "key43": "5m77uf2JMvkxFjpyy8wb8Y6QnzhEqyyo547wRtGUqggkdsgj9UqYGtrB6ssn5ED4Ws9oy25sUbL3gThHaDFzHmbz",
  "key44": "2yekUWjv8vntkE1svCkKFfPumRNvPNFmG9KYpBJwtFnHCF3yN9MnQWi65cK8YKNRHoo3iQMV8DxTH8BD6Sy1g9tA"
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
