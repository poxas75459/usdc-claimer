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
    "3Za7RteyM7uEbxcgvntJLYE2w8qxbEnEsas3BhTQa6B4Z7aiXfb76VQ98v8KnLPtuEAZAaRhLHEaTHBahmqF41iq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cSJbgr6BG2kacygrohMxQuurj2fnM1cuJZY1LrGNJSSvNMuU6EdrBpbXFcVgFTcwjvYcJBR8i89m3hmfqhUWiAB",
  "key1": "4qtJBqdbxGTHoSErpsjgkPhynHHNvPtwiCvrzcW878vkAeUwXdosm1iy85wkepzXLhLY9kKdvioHGBga8bqfSSuh",
  "key2": "P2iPEd6oPWjWxSyC38TyQUwPbYu8ZnH7sQZkNQn7z8zJm82sYMJnBtMT2Sw66tG5UWhhPB12MM9ytxv5mgdnJnG",
  "key3": "7hRTSnFU7HZtfDGXw8cXUEtp8SvCZV4GeoMyGDi8bUFFExTbZn1JSFvyoqNvs4NhJTWL4pfp9pPo6LkZ7XtMohb",
  "key4": "3uN9x4LDSrxfpXDaB9kUjj4jN5swukHmH4KHDb8nbP5kcnYkEWW54Tdc7cmxzFfYEev1uoTZHUcWZ4fJMgmwYPFj",
  "key5": "5JNitV5nxCJKVCtkgu4kGhdKA7gnDUEtxLTiH5HXEbRVK4BFpfbtLKrBiH4SfXGDm5kssgREYgB4rvFREFfkdn7d",
  "key6": "3dsEumr4QgKeq5M69Xau8cgKpBmYxTBiprJsCZaJjpdQ7L1KmDpkZY4MeUQLr1y5mVBmrJ9LwosBFxNsVJ1Sjobq",
  "key7": "2jyCs4VZhkPw86kDK7TxRp3n6zRU3ssTogLhcuPR2HWYQUjyceuq2VpPrP1HyX3b2mq7zYFSGbbTdXZNNVjNqp9m",
  "key8": "2RWzc8sq8XwGfVyuVsiyLKh4i2jCpEtHTigct2DJ2Z36f47yVNjiur5W3iKDK2GFS7eTwyY1CYqwgLV6cJtAjkLo",
  "key9": "iXqt5R7qZhWDuUE4WxUbzPfTeuKb56BhY4xtgd67gWmVVLcFWTQFhcdb8TgyW7XBxShk8bG5e7P4BnUhj5QwjWB",
  "key10": "bd2K5JxHyUgAttLUVE1CYZoJNpCk1MURHmnrFZCPcWdz3MLLvUCYGx913H54QxP1DEkGnMUG22sTNZBAYRsmyjD",
  "key11": "5U7zRynaXDcwJHQ73jnKqaxyKEkMXjGpFbacnfnPthpt4tdMHKCHgCJiQrwZqZf3xfXPqYd3rBmev7tcHqJ5TsJk",
  "key12": "39NDvKonzSfHzFez5JstNEu65dj8RoN8edUYXqevx6gkEovropFeic95jZqPXSe8gEokG35v4r1rSX7KZaxBvXmd",
  "key13": "24TPuWZu5P7TkVc7Hbe8fHPcNe6fHvqMq4TGmGT2h5Larm6sots5o9w2BMRbSKQwUbDjGbXRE5nHvs14YfafoAc8",
  "key14": "4Ay3NVKZZTAr8pBSyHMPUkcrBPVsDpPcSUyAYuUcKLx9zEUmFi12eDiHnDv7aD6xZ3J2spcrgxqogf6h8XH5ntDL",
  "key15": "kfsnV5bWuS2fAxBfZjLxekVVbThhE7xyU3DjpfnaAM7uvFFnh2dtMs9Wn7LEimFmr4RRaP3wSwKrxUgsQ5qm1W3",
  "key16": "2TzcH4isy2oVW4TSdaGr639Frrp3WmJutf6gKpbgX6m6R2yNqnieEnPUYqnWHnSPtc2gX399SPjRq4GzUNW3UXL1",
  "key17": "5vBtsmNWbfuF3N2LeysKTVwc6iegaN4DJgYbySjXbKf1Mqj4Bf2K5GbMCe6oVp3CsMScpBDm15As8GnmxMBemAoo",
  "key18": "rXmN9CS6s2aUj8qBjLdnnLqFhzpbwQqHAxcAPTJ3pW4mLRuMDNAK37zAaeFaQkEGnaevtmA1qgieTjHdidkPCKp",
  "key19": "5ew9MswJYbuFcQoA5d4MGKwiKgCWXEn3919sqEL4BuFtT5uTs3di1ZiSEtHtqZdhWHEfeLFG6w27NXAtRSLJDHRZ",
  "key20": "31tQrzMEo1c8t4QkLvWUQ2YdkEHCSGPWqwzdCgYBR9VJxsu6BfkVgpQBVFhGpZVUQeBouZTwMdokwKnwpci5PxSa",
  "key21": "33byZA3aAoiqAaXUW1Dbz2Pt7HNbgmwY2VcJigbfcZCMqZG5DdkCNywDpwQ88o4m2c8DkwAbfaht9Xh1fUzHE81A",
  "key22": "ksQBoWrtsxAe4F3Df4Bfj3vyBXzqcWaQaz3zPbHYGRuGT4e4AqJLufineK5SDJTcuxDH4pyUj1DnoBbsgSzyhzv",
  "key23": "2siT1kFDSi3hJiED6of9Z75kNHo82rnGX8fcQHsjGNXbLbCBEzRw5NRwWfpTAi7S122bSbVFeXZAT9xuEr1fxn6p",
  "key24": "5GaMN7gdFwemqCUpQ7VJpnQTu2a7rsrrpmizTvWv85QdM5vDX3GXWRyWM6B7g7gAR7uxcsuZJSQ4o7ruufw2Nq99",
  "key25": "5pdghKuJq4HSsh1oK4dWHNMsYbvzBgTJofM7s3C13LSwJV8MNmFnZgqcvsDT4Xsf1Q9FvuJEvAE77jvXgxWuM2Le",
  "key26": "x2ce3LxFNf6jAtCc8kt8EEHa9vXDdfCq8sroYuKj69iLcY8N8CHmRN35kJt633vsu42CgUSVWuywaPxDCgWwSyw",
  "key27": "619hzEpR44sB7xqNJkW6VsnAvjaaKTQmD2MypyEZ8oEKmHesnGsZ3Wx1AktER5nFg6Hk4HYq8ZdJAHeymXbowcq8",
  "key28": "vAy2htAPRn2BtCx7KhpQ9DTPKUA8LUi677cUqV7NsZ4uZmVYjWDGcM5YzmFquhSQ3n32jUsUueipDkZvE3g2hzx",
  "key29": "4BUts2WTAjGDnbdF6AMbHi3cJcyLPwajFvsZ47aWoupsm4dejXmtC7nAiUnbcNpNeRApJ7yQgP7rQguZRUAtKdRj",
  "key30": "5UjiUwxRJSK57dmqaJNBXT65ZLvp2YntSUFoY4qc4Z6AEf6dtVbYcbT7hTT5zfugKFi92jDN35SQftBYE1hC7eCX",
  "key31": "43zk82792SFiRdb9rb5AtXUZ211u921d39Yn9aBfFTP3P4ZtxBQsDttgBzs7uXs1G4H4awnimRR52YfrnFyfF2mE",
  "key32": "5d89z9aBtpYLXDbjrhA7aZQ6CZukVyHL8gWYa7Wf9rHQdQzeP5MVF1mr7QGMF8e8hV6c8yMWAEWfw2siz5sNVRXK",
  "key33": "5cW4WPpGneiCQyUDu3CvXoFQTaAV7nHDo4VP2NJ7xTwSQ2H5ZiMZN4XBVvgxdF2gy3ia735FDJs6ZV9zpZkGBPtW",
  "key34": "2k1N3YVquzavdt1wvCob9T5VsxV8QpNaGi9aUF4ro2i3Z9Z6kJyfBbzYpFGWVv4zDe29TQmtQ8qYnVkqb7P9aTTT",
  "key35": "2ATddHhoptBYXtnmu39QDSoeqVPFj3tVKJej34JV6HdXTkc94KMDgKWUVGGoostCPzeGGCmbyNCmNbtTK3L4dZrG",
  "key36": "619KMgCvnVHg6H3BiqReJSZLKK8Lf1sVckH21ifNvteDFxGium4rwT2ADrbZQzdVnmuTPFSKpP2zzNRFvFNFbhJR",
  "key37": "4TZvKH4bMsQQfXdv5hkHt1Jc4Hq8ythPXVbAEBekRT2n5cdP2jEYe3VwtsC5q5cLNjsM9a6CWiAVsWSoVrZP4vVE",
  "key38": "4b63EdfLbFNYAUJqyfGVUdF5vLEpq1c4AqZiH8Xgs7UuUiWARZwFrTDEq37KdrgF6Cn9khpxkSWMV7YSnhp7fxVJ",
  "key39": "3T9EfPei8fv1scsVZM7FkaByGW5MJcLyonUKMxdsJg3c6uTZ5QrRgk64TuNgsmBjbMfeTX8eLBThwsujLS5bYrBd"
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
