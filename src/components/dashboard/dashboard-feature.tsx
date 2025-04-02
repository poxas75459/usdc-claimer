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
    "5o9bZm4GYPsHZG1sUBb8JCfSXZStRzdAETL1CRWgL6DyNbyyK5m79fjXK9p8ZUu8Kwr8Y17YWUvgKnwmy1pKCBx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4syKN7d8uG7hRhzec2FxiStQKp6oNKo7r3acBdbed2A73NQ7sZ5K58mdyqZ8Zpg9vGjeVxpfxHf618fKgA9xunzH",
  "key1": "3czhWVzGVtuXeSC7br41pJQ1DzFywr3g2fjQMggHUkkzqqQvoB5oTkUb6sakiom3w2BzQrqDDeoyoxcbguUpVqTr",
  "key2": "2zLWrQ7T1tQ77Uz7aeMxtDygGz3Jx7pwPgUvqgtePeggf4h9bWRcHuviGBgkSSPA7pEUGjP7hd7BF19g2eGQJorG",
  "key3": "iFCSx6NMaw1pUpV7sermk8GC9YG8UwxqRS39LTwX3qTi9R5guC6Nmzfv3T5ZCFuENRzQMMejXy1HhuLZqbaRfRK",
  "key4": "4DL1TQtV4umT5Wzo5q4tygimzo9KzF3tjukSJxeZ8wWKWm4uApVAJWCkmjVYS6x2rFt7NyNatH822R5J47TjetKv",
  "key5": "4SayhDbyayqCf2kd7i9SXwaNCWZko7gmU4kWYnuVzJNhiV63TBgsNLduU1LH9HYG9ijzp3UQe2jAquQb4RRdScfN",
  "key6": "3ctpCBPT8ySwqJTBEtMMKBMuSr911VyTZPMAuFGbJCX4PXphZMZS7B3jN4EoB16jYLbn4JdmktwCfpQ81MqRziH4",
  "key7": "arPa1XjGCvtunrbgJdQF2aBHYGcLtYyYYdA4tAfyhDC8ZXHvyZobnyBji9tBfQtuyzxWo9Dc285RXu3KD7gG9HG",
  "key8": "4XZrJaXAcgPGohVu1XGDaZ7XGCtHfRJ3vUaGxuzcCBE5M4X8Y4a8L6LSqQqTAzZwJHAG7YbmN3ptYRGBiZqbqo9a",
  "key9": "3G8aVRLptMxUR9wwdvUhsywcSx8NMTk7kXuVaPmM1viftiqq2C9Hjv87CWVBGxDyh8Ud9Dxb8PYtNeqCqJFybC18",
  "key10": "uuSud8UmeHLTSo1FjErNfu5s8k8D2hrPrviPN44UgfVtnFhFoVTuo1aAbHuS3QWeES6BFcAjSVhNS4r7277H3ck",
  "key11": "mocxkXALNXMiqpTJouqwFsQeEPFJ6pyKVwio2UpPN7oD9XS1DQiY68kPJ24d6ZQZZLjM84AQkUnjCV8FTCLrqvz",
  "key12": "3HZ8hUMyPyBGgv7PiFRUbVbWVSkxpaQF7NL7WG2YGHiK4rc5TV4Nmi8trNLGsAX9HsLxrjB9gwXU8LZVNjEZWNsv",
  "key13": "62VGyFyAKCHVYP9b5pGAcBvVnzYJSfW5RDY7LMXMPZbd5ms4tHPPE5Uxr4UH7VwNuB3L4Mr1VnssfaVX3sqnqkmi",
  "key14": "4unerNErj5vTDNuoTiJXnS34N8jvaaLAJ9i5889KyYHr2R9PPFggmGRAcv9RLGpveXxQY2xJ4NcMFvN4dmTywnUQ",
  "key15": "51f48PLLdSwHeN2zsYTkBkmkf3chbNK1kjSRNmHN8sYiWGEkWkHtWhn7wxAjDH9N1YQwekHJ1GMgHF7bi6BNNwB8",
  "key16": "5EyTXbJBujzFBiHeGmBRddVQ2vGaZa1ZQFdBXLyvdWAqabFo8uERbA6qQGycRPVbxF6TBqtTDum6ome6uv7RRjna",
  "key17": "7ofM41sZUCuX41gfKQYyDh4kQhYya6GjUaacDt7mEfTpVxejNCj8tykitWr6osz2g7o1mtqszJJDpd16qnuaT3c",
  "key18": "Am1bje5E8WKcCVxTMPt38sgc1SDKqBzTB7AXAZXYWYYDk4RcU7pjpkY4aRPAtfQ2AxDo2BV46zRbgYu7DuFQ4kg",
  "key19": "3wFuM8RFFm1wTjJQWDm7jhwUkPfgQmWucso6wn5pGrBdzRZ72myZoP7rZo2GxdwunyNJnDUdDtad9nMa8y4oFNX1",
  "key20": "4WUSCi42cWQeMQUrz9xX6GaizrZ1GZqkwGZueKcQtUUGHJeZjJLkLSFsrS2QmHiujL4FHDA6mFG7KxVPAfusbEXh",
  "key21": "3ZgnKb8fCFt1bGsEXMfm1ywckZPSYt2MjKqayHBxAka1WyKmHVPg3k33FkhGRug3ZfCVAqg7jPJA6A411Dj1Xtuf",
  "key22": "37oSzRRyUJZtAnFJEVXivKyQtsidZ5w1PQJ3ZHR36rodwFNDVAgg6mCz8VhAzXWd769XyTJn6WhZZqmijJTp2wNi",
  "key23": "tU4Pvh6L2NDxtBhcv7oD7uuqxuqUow3PhhoKNwrakX8ocPP1TYnL8oaGAio6UbGUWpN3NszyVBZ1AML6AXtFAR2",
  "key24": "5Fkmd6pvJG1wzd3R6sjgZeygxCJ6ufiB42xQqeevNHek57p7bvLUECNEKdpMJyP5ZE8scXp7udsWbneEzyXDRbij",
  "key25": "5E61GDjNHDUg7Qz5Y3sojMuxmAJc6CC9DUKBQqQ8uWRk2qCJiyk1EXuKdvThK21AtUrsNTiubLJxUFZvBUvLpkoJ",
  "key26": "4vSiFinMKrERSphpcW9U4apNuSZoWGybSzkQoaojgyZpqo3Wzd9oxDPdzGvgV5hcJ1iYXhEKXbVt7j5du4jBeS8Z",
  "key27": "3pPhk6Yrx4XE7BLfFBQndboMuQPqNmg2uqSRAcr1jGsJQcxyepqbnRmCXHCWrP9T7e2RU5CYciFb6hjMXQf1pqpS",
  "key28": "4A4QfAAVwW6eJYsPTUDX5wh2bF379gBRH2U9i26yGxiuSEAi2iAtJgWQa1icvquh8EW45zt7QWJB5eQXRdZJHYpJ",
  "key29": "4zk7nGjMkdynSeW991EFfwyG6cizqm4Y53j2PWKxApQRBcSEjNaeDeSu71LXchkgM7wvgDHDV3zp2KKqVdvgCrp7",
  "key30": "4TkDbi2PJUsBTqh9AkQnfa7JwYJbJmfNVC5xaDwBW3Tjf1wfeBbSE6biJCCEpyWAfGkWsoiVKHWVFZEt9zbyTm76",
  "key31": "372F4hqDtnKQsaQasggw966jxjrXYVZ6NZKNksv6mDmgE8Jg659kN6F29DDxWkruEeDZRhwVtcf4E52HLdRwv6Nw",
  "key32": "MjhX9jeVqfzUZnYZoGRnU4mZwcwZYEfPieRyin8vMWNkqSXpXP6u9XBBF7W6unZZ14rgviHE3SWHFF1uKQzckRz",
  "key33": "21roVD6DviKV9hYvK9P3yWh2mEW3kekP6gmfy9iZZNLoUAGaBM7fVo4y6a3uYTWMbabouG9SzstTVPkSPrj3pgU9",
  "key34": "54cNTg1UbHNtsrpdv8Xs9b8zCWuvLNZtTZQcNYR5BdZYznJ2QPEwkUS2M8Qg1XSGM84HoCiQWQHr2tSnaEHxxbYF",
  "key35": "2ADHswXL1BYiay6cNTqJ5m7JxZFfMUXrPQLFnBu8ZLSXfG154BXurnXy8bHjx3mBYXV1e1tsENT6EExJiGF7epiQ",
  "key36": "As58u1rgCn7EwwP5qCKqD8fqUxLznw39WRDfkhTzACyhvKNGxh3k9vjnoomenokWbXmbok4U73cEMn3xniBbMrE",
  "key37": "2ZBmg22qmnPDaKdjFCbtXypyeQvrJa3qGLktXHgNhZ4RPuVN7Bc8HCqFyW8nCsnihwYXgdWdAA61yxo1Ao6ji6PR",
  "key38": "3rcVeoAmaWz6XZirRK49oTkVmXLQo1iAmdQp54L4g2as5DyrTBdowcYZbZoNBavFAQBWrmVih6QDenptpgbQ1d7R",
  "key39": "KnyJzWNWtXYKhiNHGrb7TCWG77qbBNorkKmZZjwedop4cykGgPjF4S5rSzPSbFrrY6tb7vBkzbsZYTBPr2ft8fq",
  "key40": "NbzWLXSyCVy3QczpRoAdorXvTCLNXakiqrfSCd3rendkcWuyyAAybuXy9R7EpKsydFvtSGSPjZt1vKVKmA52eY1",
  "key41": "J2e3Ua3modCRd2Qg5kVWKn37qUaMH7u1poCf2Tiy99VAAxTDi3DDTFwFgLyjtB9BRqJTyh2XVKKnwTsWMdCYvyj",
  "key42": "2KFxzwVEdEyXw58Qz7YBw7t3qirtTNWfcNgmdivAXibFBrCMNyGB1yZm6ygnzGY7GkjhnpPjek5XVPPebCH23kvx",
  "key43": "58U9nbmNGqFgh7fAU7HgiRoVZeMnXhb2b9hHJkcaBtQfWFPfK4rne51mNFUvMGj3w3URSNK3sox81yxQQnDg5Hkx",
  "key44": "5DX9Y6zy5fKHMwNnFUUVUrgkmSZJF6FcJ9fiBHK7MZDcyjzqa8ePoXvSnkbnzAbRGkeqMqWKoPKrvbHZFjZSC3N2",
  "key45": "55VZHVraG6ysjiaMiWv6DzxdiUZsmJfsodjAhbZMnFwEAHXPSAn6niuo1bgmTTYWv9a7bNWKCdtXChZ2Lajdx7Cs",
  "key46": "5pRmkABuzBDAw6E8MzET6z8u6sV6e7bn18cj9VQ47ttJ6c9gbegW2o4CRARKgmQWWzGAGzvLxRWKpjpH8tHKRYED",
  "key47": "4CiCu52VDQ4UEWsAGv7m1eXXgToV8CzxbAReYtZJEgekopvyCNmPoYqb7gPiVNc1kAW4Jy42M3K4FVUPhRHM9Yat",
  "key48": "3BeawHW5haekKDEND312n6u84o4DvUtHt7VjDMZF9iMCh5WCBfosUWTNtUFs2Triyk17TM5DhFrArsJd1z6GSWqg"
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
