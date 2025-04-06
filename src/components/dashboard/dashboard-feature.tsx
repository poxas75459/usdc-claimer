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
    "5JQG7jhFr4KuY5ezrXkA6UmG1p9VYdch7iVzpGt5o999wwr8ZuwifxvA7YUgDtXDR9TV9mgV6rKcwmmx4r89ixA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31aJEcuMjsR8UDhWpQ7Vqip91YYLYYgt8KbHth8vMdxZJRZcfBtNKdCASGV8CPzDXDfWWrGigh9VPj2aQ2u1Me4G",
  "key1": "65VxE4FA8bmsXxmBLyK2PgRFFGJCRcWY5jE1oThigfR3Xn2XRLUwzzwEDMN3vk8Hcs2KuhsEXr95qSD1sJV5WC1E",
  "key2": "3rseNRkFTQifxW7VBRti4rTpUCK9LqQHKNk1p1FnCSv9QtoHJqA5Fvkpija9mJe1AknhqDGtm6MadbnTwRQzZWzk",
  "key3": "4rAobgWH3PdjxcSNn1FNaqLLCHUSgMbZ7hQR4RdSr7CKYc1KCyxfsCLLsBEXFjhvHyEsZp9eXp4oWDcfbwTDmcSz",
  "key4": "4ZjjJkwQg2cmCp4RNMbBgMrXuEoNiYKu8hNheuMkfhH3ckAtMrJtvFoNFabjW5PfY9pYcPkxyY8fSGaa9uG2Vp3y",
  "key5": "45GQHeQ49U3tKhURgUvoUVdA3cwurkB53CNhV8ppQ35jJjTFQymaeVCFEv5sFC4M5vqSpoXqQcMHmJ4DVDiyC2qU",
  "key6": "2nrDPBRtpErhtsjEwmuapQ71RgM3tt9tXPzzN14yezjsmEC3uZtvnqyeDmvdh3aCSpVB2YpNjxpX5dcjMph6A4yW",
  "key7": "5EovjcWGXt35sVUTakt4Z4Ujo9uPw5h7DNJn5xGYqbeEwuK7EGEjDYqpLYiZig3XsVFx5wbQZZi5udtCSMktYQz8",
  "key8": "3uKcYoLeME92nk5FrYU9rouHef6bEQ1kz3emFePgULpDZBtyEExvJe1efsadPtJMpuM1DW17sEHA6SupTCSnH66q",
  "key9": "56YhMPS4tXxq8PPNC24kC8rytr9SWHjsKYNESrPAjFqkr8xjJErdn2YXoJLdnuUjcBwKuJUuUEWKVPz7QBP3pG7N",
  "key10": "3d86iuLhoYgSDWtgakdgynpCZiNZLyjL6BBJdgSZszoi4nwRJtL1HNu1dUam4ADiV2T7uE8jwA1eYcJeJk2XmhYy",
  "key11": "VXniRG57LW6Rs2hPL2yBeNaqFqUwcRTt4VinFhsD77gh7DEJ53GKyUJyfN5MNyV7E4oY49QThyZtGKfAbTam7mb",
  "key12": "4eKgz3AyVDZMn6YxGidDcgxMJHvw9UNs4vcdMuvSGFoTBej4TLSi2M13FpkpDKMUBTLSnWsT747ez4f5K2jahU6f",
  "key13": "5h8cn1hJRFDeFcx1XviFVof2Ne311Wjr3GtjhFqZvenrXZew6b8EP8TvyLth6NCAPjFUeQzdDHaao6x5L9Y11utp",
  "key14": "5XjaWmALi1pTqyPY6ozqspLcotQuRhnXLKi3sRcHEe5FFEmPwNxrVSJQ9B7tfNBAcMrV2s4mP1ZdXDje6ejiJjBB",
  "key15": "53YKqR9oVhgYQJmXLSVYRxzeyuTno8tPk17XB9w12h7YJjXKvUnoT4gb7mUd6w2kwgJo7mnEJZ7KHykQr5DVSA5k",
  "key16": "2ohpomWstuXQX5txdXTtFND784LdXvrvZn8PsUHjj1hspq7LqCv23fvVVAKhi85tV5X4ZDk2wA2ZhabSXQTjYXQZ",
  "key17": "ErEk6ZSUqZ9SSxmV3rJpB4EnSCyFxfncktVDN5X5t5zdhBzZUAiRmzZjdT2PX8UWKxYMYzSH3MbK5EH3zkTUoMi",
  "key18": "5JhgRsWc1DrUvkSWQDqvLufTFNLY93MnB8qP3a55VGwG5vbuGKX1CeFihVE2akz9twci3ignet5fubKsvYNT2ZiZ",
  "key19": "4gJrUgLcCnsExpGR1Ti91AyrVcK7mkzjrJNoum9YyoxA3D6SwkZSv3c7jCJMyJCdHvTA5DJP46bhzMez9UQiy1uu",
  "key20": "e2pojY5eM4b5DDZgWvjKW136GJsn2DbuJzLVjVU4vKdvTUiJZERfU92JTojvuzc3bijSjN1Nrv6AvZZaxPTXvK7",
  "key21": "2dtZFkaM9nef22hHn2FhshkqqpB7VJFDkk376uN3SUiftuKZheyxGQsbvygJRvr9brM2ucnNsgqPsSo7GiGLxSgr",
  "key22": "5rk58pnCMtbAxWxLxu8K6erPduyRvQFZk2J9mzd577jugWurqqkbTxvHAfnqRKYa89ntuRMEN1EiGM9ErBntf71U",
  "key23": "28ZER1uXZjro7kMbpxv4L2e3qyo6RRou94PiBzJP7Zswu8GFKGb5BNicEnNuCnYYDxAgzvKfPciDxtoazcNe2Nh2",
  "key24": "5JpfaK9nyW9682rJHxYcFvH4hq2fFqczSwCdVfWbuGArtMGy94BTSgt7s52doLEMDJLMBjgH57LCU757wXWHp9p7",
  "key25": "sKKiGTjghqFpkzy7KJT5oNu7gnaDx3k1e8B7c1W7LUugRHwRwVkAWoKcdqpnuoTqDoqLpXjxyHgFD5W6kghEBwR",
  "key26": "VynpgAbDdstxRnmkbe1feZRNiUuCvBEfVuyuuWnnaPfEA4a5DidLWApzfnwgjMKKxVknKKmDH5trF2oMdVP42Wk",
  "key27": "4Tgk644g3h4kr9H3BezTGo11t1rHyQ6p7hZmwBMxkSbjzQPcnfdWdJPKaWKfTLPUXXzxBCeMGeUtCHajyVE79y1m",
  "key28": "2VYV92MARqGQnRFHU37sBiQBWrwLMe3apZ9FBScxQVabApRc6h9MSzQ3HGh7zq355Ruud58NBwHnxfRkVnYnEyAW",
  "key29": "5BErQL82tpF4MkYp4g47mj16A6NqkWWVKFbcYdtCfULHM89aapyqgvhM6FjtiJ569UFWQQamojZxsfhNmsv2K8Nn",
  "key30": "2u9qDgJbWVxC2LJ37v393gV1XV45V4JbiJUKTUjmR8ihHcCSjr39ZXWTPZpD2pWDZHu4rp6HvBt99do6aBtjSdYj",
  "key31": "2SdDvWvofUQwPrr5buaTk9WifKANE2Srzrw6q2EWoDS5dnywPLHXH8d2FppE633F8mpMqtWTBajLG7YqjNQ8sore",
  "key32": "pJDjdDteiYQZs2YD9ea4B2r5wkvB6Y4Mahrxb5wJPLC4UXU7Cwa4myC37qTtdkxKYrUAZP1gmFRgKUwTFpkxVam",
  "key33": "52xe1n3EFb89okLwZx4b3rdPpxkE3jyu2TKSdfyoxuAtaKYWokt5xBpL3m45dWkAhSFPARdF5K2huj3RVH7oKDJB",
  "key34": "522UsPaTyoQVScXnTnQjRdv8p4uzsHcpJmNMud78Wr2X24dvEAhzU5CKcJampHRvDBs8pSNPdfT7QHSnx8652ZdJ",
  "key35": "2aY8RrKzyBuAVNyxJNwu2EtAdTqBWPou8fQ3vrC8Qi9Vt7Anwf7DLmWXUwYywjzkA9iMyFs7ZF2gt4CPWbFDcfHW",
  "key36": "pqZV6538wNb1DwCUsRj8fJRTFhwyhJa1ebVz4y4fPhFFsT6kJpwa7nsHMy8SmaGSBiHKQLL66rNvswtUGbsYefz",
  "key37": "4GAmxrQ28ZrPcr9mEqXNwj1GGB4ov8GiTBqR5jcd3HiuPo3VsKK45KHGZkmk2zHwFkaDaYHdHT14XqQF774eFAdV",
  "key38": "4Pq5HeE8Jw4JUs9XCNcTHizSxzNhwRV4buehAPB4F5PtuTpdNaE8Sq3Aqy4ZCZ5urNxsDy3yEzRMTgaT2i82UpUj",
  "key39": "5EFtZJkAED53SkTkMYUAEmZCyi8RYFpxKa7XQAy2rAV8tKXt836g43n4EQjhNNmvfUHaZEMTRuqyLuVeAovzGXVQ",
  "key40": "4jHbNo3KFjE9EXk6aAYMKDdNwfhj99L3Vc2wzteSpxFf39FTGk99LnMLhJ4xZtCYmVMNgsn2GUULJbNk22vBk3Rc",
  "key41": "5iQ5m8X5p4nL8bUFypew6SQY8pBPLn1KUXr2nyS1tywqzhhmEgpg5y7eJE4HRcnugYyALhiCrSL4Lfc3y9FUXndE",
  "key42": "5DbEjgTiK4RNUP3MQvSgyQNgp6QJR2vTDAg3wbZjMiyrYmGDrCqnsEZxyAV5rVX9yH3EPMNLCHrdSap4VQbwk5Fj",
  "key43": "cCr2dD9uN3EdPtiqEo9hDwQXeDQ7BT7cW9aTS4G3bzgKGQeH5HfDFu2gWn8zExP2mTzFbz7j5q1fBw9iZBuCtCa",
  "key44": "2NhVpSJyeNWqBzAeasRvkYMqKwJcyHtCtCfwtugBReDP7zvjZc58DakUSnHCGvkr4EX37eyzHuamgiCnwYxdZKkf",
  "key45": "2uCcfefHhVTQKQaUrzW4pZhrTNtVJ77FEfnTJ5oiFeiiDUcToojRMDjT4CyxKyUMNPzcV8uYHENy8AyWNTCH66oE",
  "key46": "ZKXb47gCETt97FbSpB4Tf8FmbUjhQ4b7fNqQRMywdTeDX7PDKBKFTHredit1NzkkNggL6k59JjhhE3877hgwyiH",
  "key47": "3JWeWwnTza2wTm5Hps3JR5zFDuLy63pf1AhZGh1ZTpEKfJYSzgFGGCJKBn32nE8xBpZgWrnHXZ6tFHNj3P8dfJSp"
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
