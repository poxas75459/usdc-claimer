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
    "4x2mio3fKsChaQTVUt5ee48UFyGhVP2TcvhpAZewUkwGhbTNsRNcr4GhAWd4cZGknXjPaRQEb93n5RqVWkgPywFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xuuPbM1CVa4SWztxfv63K9VXURpUBGJD9ukp2wQuo9b1jY5yLAc15sa74RmuMTM15fJ2vhFu6g9ALYYFKKfRupV",
  "key1": "kfdG7DuY6B9UZfZ8BkMtjxt1qAV5VN9JM7kYnduZTVEb48PQqj3sec2zRqZu5KwcjhoCJLjP5ngX3f1x1myYzyy",
  "key2": "4V4Qqm5HQSYobP9pdc6c6qTv1md2Y3QoS9WrPtcQ6obcLbn6vsY4YyfDA1GRKH2L7ppfKiECD6WRGxyqCu3gPmWS",
  "key3": "5NCHQLHeAHuegvRUX77otgtq18jqNYignt7nW6eJSMYnvmRdXxbcuxuopPHDrf4xRAJhWZGHD7pKNQHcXU4hwZ9N",
  "key4": "L7i9REhCETD5kMW3PyPbW5Pjh2YWPX21C9h1uB93xJKJY473Z3qcy3U3jWvEiL5sBGBkgAVNDMrMQWBfZMq2NEX",
  "key5": "PFoc1RgSTF9nTasuShQsGDpC11p1REnDkiy6q9UkP1eWnXLesCtjT3uvLAPxBWYTofAzbfan7TnMHH1qqazHyrM",
  "key6": "TnExZ3SYfZEdw9JHhMXcg9GsqGYUXNHtFbbMCzPf4vJqZWkav1RjTRHVCarbKiCro6ioqzQPvxYbUgzLmgCmzR3",
  "key7": "1QMxPA87gnPofqK5tALdbYb4eQT9XR8a2ktTwuvD9Qt4mLymh3wGLy54fr8mHDx5bdYHfXnL55aJfqWxpuFTsx1",
  "key8": "2RGSEQMpjV3QGT7XQxMfkSyxTNuarkL8hziLbJSG6b9wFYKvFzTiuwicbniUPW9UK42rZVzR4ngL3ZVFWoZGc78X",
  "key9": "5cpbvc2dtRrcZRHC9fhKwokuTdhBDgRs4QWCbfZ9JcvDAYUAu8FTbxoir3iyG4THd6hB56bpgABHGVSgkMmVKE8m",
  "key10": "2Tq6BEcB7HWsgbMhhAbsPJtaRWiaZNvSYTHzCejKv6pv7VwLTc6BToPuR6UWQZ86VY4mDzfhgL6DCWqeeXnnrbJN",
  "key11": "38Mj4eBtFgWPNcRhBR3xWwrofNQbn1cyWeqyWtvHtukSjhcyvKVY5wXwNpRcuay3Zu1DnnyxUAbreDiZqkXr9EqY",
  "key12": "4JYhrYQ7AXoJjUesCyxa5Txy9R64P2b1aYi2cmPRKubJighFSzrRak7jQE15xugbVWsbDaz1JRmkiEk9RCUD51cp",
  "key13": "2BGpgjJXGvEYvD7A1rD1E7qE59v36wRPx7J71ugNGK3U5bVQUNkeTqrLjnrM17hFGSmQUL5YnhUz82TsfdRHrqP7",
  "key14": "8vuEX3MbD3UQmpxRc8VBGt8yXMEbmd3uuBmYkm9fPJbJR9wgok9rzEoDbf8QCYfKtSPLqeCBYQ5Q72GPMVwKoDC",
  "key15": "4Fsu2dJFL3KPmUUSpSKKSudcHHxgutSvjt2eqtj6GLihnwqqjXErwPS9bTe7XQf7pMKryDquc5GpLR5Yy1qFeiSv",
  "key16": "2bUwvneHZy2zUt4mfqQ8iqgF4Q3vs8n2wJYtw49Z4SYkXTc7eUNkRrfMVJjh3DQ42gonmU8kXxvCoU7zZfoNdBDs",
  "key17": "5BpfDxxWAkuxWotWxQ9mBZQSZinETsFM7mP3qBcmcuyEhhCZMvV46REfyxSKhceEr8KCHmUZvQEX25Yx7vwEXYY8",
  "key18": "4jy3h47SoRpWMnshp1pkyrJMxguRvQifbKYaTMEovZeiSKFtakAMSz4jiwLo64hDj6NyVEHJZSN2UakNtQnsV2Ro",
  "key19": "35bN3dKW8b5bKe7e53uNdM1bA9m3AgrEfv5GdpG185m62DiAZnGQN2E8LfP8YMrkiXPAaXGu2pswW2MdHMkLzzGd",
  "key20": "4iqvzB4wB79hZiAd4AbJNBsju12dqYEis4PQxscXoXicw2mrTeBZNJiHRWBWxYazn3G3HixP4MuwLUQAjDGCyGZa",
  "key21": "5UHVaVDqvQTAWCt3Yd1D6JxWRZ3Ypi86KVfN3cs5zhHFutQCnx2xpWiNUvoq1GkAYgpskVd453AVW3UN2R22meSC",
  "key22": "4oFdNzxg7qtk69HLKEnKBxfMAiPMK6DERau491pcJENBMBtL7YmJw7aHCfZzKUkuzVSi2zU628gVyqSLQ74L9yA5",
  "key23": "5tVb7WiP49YGtWuL9WBQBssdEfWJxjMMfCtDCSRvBDxYDSPRuZBoStXvcYbw1RrdJdc8xSnDdiwrHhfu9KyyxHsP",
  "key24": "3EizzsKqaz3kSSQ5nWGfqTCioRCRBeJDVvumxWjtKKCNGaKBZ6RP1iZmx2kKfoF7fX5gpHPYHn6Pcfjspr1i3T1g",
  "key25": "9vcwgx3vwsBV2HxmSFwfPZz3Tj9qzM41PmxZhw3griihg3DYuAtHr19YLKsARJrggZptMLgKycKm2BfsxkjLUfD",
  "key26": "5r7MfgjTFqNZrt8CPoPPCEeNXvayyZXK3Jhjmz3LhB1Jd4MmPopz1vfWnMmMMxXcMrEN28GLvL1hMkbepdXK6SV9",
  "key27": "3PchHiQqJF2L2sqsciTmt4b3G9z1HPyxQiQmi3np9NQT3GDFREThzn9YAHVRXNTSefrVUxHGDjfDWzy61kTCjxYi",
  "key28": "WKddkTUHpnge78P6avNjWwp9DR3q2Up2sDoFdWSQ3LKPKbZmykKtYYHH6RBi6utnAGh2iX61eYn7gtbx6KQBi8k",
  "key29": "4PU18Rh4WS9xYwFBTKm1yqxrpHWkhnvdvKfk3SQ2gsdu44s3AmKUNpZh4eFZ6QPGATGQh72dyV2FPJSBk9sLrLvf",
  "key30": "5qXUkJCRPYxh6m9tNWWkMppjhHEw8amZ6TEXL4PmdwdAPyL5mKyvhrPFPruBRz41tDCwbLjvQbZZKvjZmXXgGgWL",
  "key31": "5YVr7v7rnUoGeHN85h9KDL3FBNFNX6Dgu7dceZggW6kj8xQo8VsYfCw1VYuxyuDDWtu855sMehrnRjqdfQnEpLeA",
  "key32": "M96pTprKWxNv5v8npDo22YhJGutcE2qSzpnWN5hHDNCd6PGzXjk6KdTPiKiUSXFB3LawJ72Fe48Z27sM4SUoD7a",
  "key33": "YbBquMg9pkRgNhKkPYQpHmEDePzcYzwvCDfJwNCSrfyc2b5vY8ccdswxyxbEU1wbPfBinPP6P96zssi2yMsNx6b",
  "key34": "4N8f7Zypar6NwVkE6dABoNKgfXxJX7YykNYQbxPzeyyENMzQDQzbM378AG9KTj8SHHZ8BkhJzrhzyqWcSvQUnwHj",
  "key35": "57AwVy6asXkXcaQ8mZQFbjKX4UrVNtA9xZ64PbFe7Y8DU91vn6XYbhpoR3xAqWffjL4U838tYrhVakJVHvEERFWw",
  "key36": "4UaZHUd49tHtRUvG52rxyHBQjfC2j8ZsdRdbGqn3oKZRZJVJqoXQE9oGTikRmJaEYqTP4v4s3p7qnL4bKvKnHvqF",
  "key37": "5hcNh4qKdnB6EaxuQLN6vESMgUq7KkHP5iixZUN4fq1KmDBFiep9Q4oXoKGavSDgp7RuH2HMjYZoLbiNHwStx7UX",
  "key38": "3zAJaq1aGezGWPbCdPEW1ZF6B6qyzThsadKGGq8KjZzuRRQhrPUcfudMVjk6xkSFttxbvBZHMwoNnoyFKTKappoS"
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
