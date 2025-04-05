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
    "4q3ef4oStSGK9DQL2rmbssLRyfEMB53aosCVFk2FuuKxhg57zwqX23JbHexEnzqWu4WUK2mK8KQXg4Ce6W36APdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r4Nhf2Z3CPmi6BgTH8xbTLBpR4rRchAgUXTYw14EZChTCNT4Z6UY3kGj5yKRJtQBiEnm5D2QY1dBidWhh8P8GxW",
  "key1": "4NcVB6q4Hv3Tb29dJuirMpLWNTy3QaVhbSFd6BVPzmnKmpHbMgdJGgCVuo87xVdTDgiEaCBxsgzowMmnyYw2jVKU",
  "key2": "3LGb9sZdCiMX7MKxF3dpxrVYMHcC7igXRZ19U6dWboS9Httv5BDRgjs9EbwaBoKQ1scsw4EPTWWTbg6zDidnzY1U",
  "key3": "rxkm6KaDoKB4LRM7JEHuNsXs7H77zAUDY8ZQAdYzmTj1rxaQjSyJTgEGwQrRXqzb7JcBQJbs7YrdfT2kC42uyN9",
  "key4": "j4Qve7NyKnuy5Awdr5ovYeJSzbWjhv81vzNusyitSvApLQBE7a8JZrnDw7c53tnKv7QVNZaTP8EQ2rWndVYFAkF",
  "key5": "3JZWmUdatTnLfdVBmbzffz3T7W5wHhH7YNwAAcQCe72qkgyExQVKZJcfKn1T1JTEBCkiq6G9dcUwE4rKMtsbDnkf",
  "key6": "31eyE7KKho4oAorCWgBvGPDrewWASPtdKfuUKYNULXBYaiyrsWX6GsJAYpch21RborSEzvoG6cDuZqB3pRWHKRx8",
  "key7": "5uu1WXxZ3EeB5AfVueeh5bVVa1yJxKba8PG3Dj9coebuns5oZpeDhmESwDuNqSm4cLSXisR1bDcADViHPb2Ur9HG",
  "key8": "4o9ZTnoUpaQU5h9S6GEZbB7zQPxqhULbiy8PxbBHgCjR2mhBj43yUtJBW1V3QYiPQTtyLT76DP17XCd2hscuB4Zg",
  "key9": "3JBmpG3m3R6G3YAXZvtrXcP8hQzpLncocKS4QQnPo9JW8zwdzkZuhWSGndBBuxjDDKcQbeQjJhHbxybwRNDtq6Kt",
  "key10": "2hDv67YK3ZiZJ2uV4MVBsfAqdq6VtCUQkabAR2ko72WjTiELyYfnTpyUpuHdnUrkZi9aFV5GN9y3b5fY5koxJ8po",
  "key11": "5ovPJCMvqRYuhXCeeDVxmpZBSKE8Yt1epWbwtu1KNXJ6JKKsbsGtYAXxpgJWWBAjTvHzvvbLZDXqPZ7uxj2MHnCS",
  "key12": "5PFU5LGx6NC4W33W3xnEGx5XSxKUfteFNk4DANGSfXEbahjsj63gVDt5Eu2uBJN7T3Lr7ahJ45AnEanYE7sJ434y",
  "key13": "4TR1ZT2QUYngGdgxJu2uD4RsdZQBrTauKAATC6Np2fsXqhHcYJvWM9sru5kH4Hcb5yDuByA55DYmL1P5wZpVWBAL",
  "key14": "33i519AF7aYtzq6rpQMyYziXpYfEFS9Hq3DhhpRdjjnKNLQ1K38YJYStmbCCA2xmwddePXMpKFsdWSWiHeg9k94z",
  "key15": "4qWadnE93DwdbssTJSPxCHKksHQJKys2qkBKPtcK189Rg99pUQ9gDAoT6j66SxaZh5jFchi2T7R4SBfhEWymzYPb",
  "key16": "AJySRBrMvS51Lji6i7PFsufhyBiVahDgWdgFvd5scy5YQMb87GikYKQj52RFuTFE5dyhoujT1DkiLL94TQh84kf",
  "key17": "4yj12FeEYGcSz9DETLWtBiTMKenfoaZBuFeqZijNRgZSxpDwZfqwKuNircHt1eAz5de1a7y4wfzgXBMVL6PBC7Fk",
  "key18": "3vZ2hXq7AfeXBF1vUgQ71QX63WjTMzhRVYXh66dp5EVPqtk8M8oRGVELvbX29ZnSepQ45c8VYgZmn6f2naUchTi8",
  "key19": "4DEHToCRviieWmX44sGBXwvctMH9VQVn9h5yAn4wM8LeEdRETAbK3xJFyVXeS4cAGGNWJsSvtaTuxH26HbbWeyRT",
  "key20": "3QdgaxXYQxpqwbkWDk3rkv1mWisM2F6rhbiJc1c9PRLgeYJzNaxBjDXX7DjBZ5xf1kNzq4DmiJm8fqPdLR2spcYb",
  "key21": "2vfNivhPXAYFwbHnjGYVGVPeYL65iNUUo3m5yR3L7pvQpVd1NkmLmpWf5a9Y3Qmwzie1MZqSpvQEJNzVFgtqcWEP",
  "key22": "41neJsnRto1ktq2bps6dQ2EFqavTZ5HrjbvSmtbCt7uxHCr1ZqCvezPbkzmekP2Cr1CqAUnLPsCjaneeon15tUnK",
  "key23": "5PMF3jaqX8QDFTbA7QHUa42xZm5QTAMrRgrBEfTmRRztqUvnxEPZmADAd5bCQn1y1ygL9sp6H9eHhDUW9aahc8gx",
  "key24": "2ii6zg9HSokwaRw4zyZV7ejbwczWD4snLUyxhBcexcwyaPXYZ4qxdkjr6xiXYfr5THXSfzBZWVZU6bGSxsCcX9cm",
  "key25": "3nXKH1mtWkdmrtHzQQxW5oYYCemjQukP2g8EHZKVj22FvAoi7pAmYoBtDPvjsaXnQVEJXGxERh9WJmTGYCZY39PQ",
  "key26": "5e5nbsdbton3heUdhbo6NcMM82nMiqX1PbpoCrsQMYpYsv4QVND7WvGixqNqJhqByrJpAi9L3GRbA6QBxyjrvehC",
  "key27": "9WC6a6spzb292BTfURkmEPKMWobRYQ6F9wTzo6heJRbfUkZJY3A5fNqQHurbKPnfCnaMcbBjUcvoMZokJGSjNvG",
  "key28": "37wgjzYW68yZmXgWyrQp1cFQCKgWdS2vT6QJESjmjYBb1SLJqYmGByYHfiAkPMU4ii7moHMEwu4LkBi8LwG9xneQ",
  "key29": "48aMyAX6wzhFPSmMRXkXx6hv7g9rL3LeyE5nhpssdDwsp2QxVs5neguqk16ZyW52ts6J7xRjK8mLyLwbgnncoxC5",
  "key30": "SG38QJpLoitAYUNK8aS1FmP5VhtcyqETMFRLQdyzB5RCVDdRfaUTL7kckxs2YLcdxWWGpw5LWjWhCy3ik1sceRk",
  "key31": "4BvAPGfnjvRbuTZsvNYV5WmK2BuiRnhbsnKG1R6HXRBXqHpLk1MYP7aiT3uybr7c5UKbXzg7izxSxJ3PNBiJMGJs",
  "key32": "4Gm6PWudcCXSA5qQAuLX7d5RgePm3rXnnGFYfq5GhVs6MoXDffEzito7ZZPqB8e5cXLQ1gRegKV6CmLxGX28ceG6",
  "key33": "4WHCmeWHJ7U4ZWTRpSEzox4GLgge4caBwMUQP4advzRVkzGYQZrhP7ZeqzLEUAxcKrTCAmD35Ey1f58wCZhm8MFa",
  "key34": "4KAtvtSW2wJ1a24PvP55Sg9v7McLm68DnxTapYd635nbgzfYNXmmusL9EtJdKdxqa8KVkwYfNp5ywwj7XWXcYseR",
  "key35": "4VHuyffu6z4Thb7aHzRAHWkohu9hQ2M12h9hnVG9ABUszBW8GvgUNPawr74KfojR3oervmYVNaJXbxXqVDmMWPFu"
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
