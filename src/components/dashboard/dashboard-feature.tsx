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
    "2VwJwr7PLhSzFsXBvDVha36P7mv8P4UEWJsDD2UkoNe2coTBktTUTJP7yoMWZ1ptNodoGDoUFVykbP2PnFpZejZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h8nXPDe2wBb4r1YvNoeAAtGoGpyfQHwMTKhKBvn25ztchCVyuMdkesuAHkf7nntoetLvrRfCH8SQAD9oCsi5At",
  "key1": "2TC44BSrTo9QgN16rDRmKoc9UrvjHM5yWe8iGdMKdCnTTxUzoQkjV8wGJbP8GQLPQZYdobHjsSKnrRqYiXU1Jf8v",
  "key2": "G6JPMASnYHSrP82qLTxyVub88Tct6K1VvTVW9t2kE1PK9ikLjDSJoTPDXur9gsA8SZui7XPSWcmHKRg6cEzo4kC",
  "key3": "3k4pvYiwyU9gKUroDNzJh6aPYAeDPtAybdfAE3arQiHX4vaLoiVJ96RjAq1oXtypd3ahMrC1aKc4X7LxZypERFv6",
  "key4": "5JCcNznGVmF1xcFAvy9NQcUZvgybnHtC3PFeAse3us5Z5ndFRhoLreJRHN34eQNNyRPeJg4cmBFvJMHJnaDB83Lg",
  "key5": "2ZimqcJaGbaYcEPxKQAMW3B7YkeqjVXFbBk5m6XNqMNVbE1EaCz8d6Hp859ouqChXqzKiJHAFF7J5CttpZezgqQ3",
  "key6": "5QGM13k7HswhFF8PJTMeyRcWeWpZUFm5UnquaQbNu9YhoP938ELTzsssDZFWD5LB76fmvGsGaAU3MJshNHTivffy",
  "key7": "67PehYd4axoAELhPgWRrcaTDbhKuAfw86icY68cAX5JszCkcbyrRoenDzckJWcLAZHGr8bVqfi5md4fKw7g9D2rT",
  "key8": "26tJD52mj2ZbjQveaChfzyM56WBNEtiYfcgDWDqgTLqjR2u9obUJmKNb8z3tQZz19iY4SG4kk5uwjygg6j4NW5wv",
  "key9": "2qJpUnaE8vFPEZ7z83LRhD8cvjwtzSKVdJG7wVSEkmNfoJ3SUSkZxMQvoy4Dzpr4r5Mk33BXSDGF2cDWjUfPBsdq",
  "key10": "3i7CGoFJM1qJJmhx5dzL1H5zATk2StFcixj7HbwA2SGAVQotHqiNFSEhfQF2xdZKyyWBhUpcSP5awRQpBt2U7pEE",
  "key11": "biGE8fkbb5KB45zAmdxhau7WUgGzpn3iiWrG8vUkjrq57zPMKWMyA9Yq3nW7CpGVxBLoW2eGhuhSDBtXFTdsks8",
  "key12": "34ZFYLFku3rUBTL5YVef5dQoyg7rCr8QM9ZoNu9Nx2L41sCypwg1M1bvSEmQcerV7o7834q1CLuRSCJEYdrLvP7Q",
  "key13": "4E4Xn6DstNgMJDLKY9EXidEkThfavj28a85UAZED1BoURaNq2JyWNy7798rGrUYoQqEDwQxdLX6F62j6NjZdZxuX",
  "key14": "3nypJCezs7JLtqTAsBc3N2j4GHJnxfmjpgpHtMqLVTbfHb57q3XnbsLRo64bWcn9fnw9EocTgAFkkt1GQH1NVHv1",
  "key15": "37s1Mocst1dWFGcTiQwm1oUttod15oHPSqYHV27WdesquQ9cDC7kHJnhEBCee7TSNRZNyTxqfUPrAeNYRUeHwNYu",
  "key16": "skgsE2HR1Ld5j7Y4JiFuwg3FRoow16BERkTfFhTebiPeyiY33PUcXKQ8HvTodQY7QLapSZTb1Rt8M3kg12xJ2rW",
  "key17": "5WN4jSW9f78DQm8xCmXpz8wwrVXiQcHRkL7i7Aqfo5q7rBZc8k6J6SpGzRfYuSWGwRuieqgVA2pTRP95Gf2yScfX",
  "key18": "2P41pAuUSbvu7JMmZ1E52GrheuXPTcZyaLLPDr5ejXongRs5QKDi7NdH3cssg1TGmK5SubB293KR7JxzCXPkDPV1",
  "key19": "7QNTFMzVzCAeoTBpBshyL59Xxq5t7BHPEezjFw35KBybsHYLDpHJzWMmy458km9pahiRJcWKieCtKEHQZyxEZMS",
  "key20": "2Fa3jekUAeHmhdZtvPdA2cDzstoBX5oaVLaT9qSonUDFbfb9ACqaRABCM1jsUhooWZorx3W6wT6ycCbua59tyQDm",
  "key21": "3n3pgGG2CutanomkM5VLbryZE9P8MaP8a9LLsi1g9zmvvTHdDZfK8N26yuJKQkkxJA7aSy7abnjXhS76mHYHFE1",
  "key22": "3gajpiqrUWtKxsfz85B4UT3sT56crMyN1tXowFGuLst5ySiNFRyvZLmk34AjgBXKMQaDg94oDvPjDzWknAD5xo7Z",
  "key23": "2X7vJ1GNiNgGJ3CCKNMsZvq9taL6z6riH6xEjD7fNqwwvCSPEZVjKd4D6JavuRBPJqAT837fGVeC5WSRuiKB4Ae6",
  "key24": "5Conu6jqghqoTxFpXmAMbutuVZo1pSaDNDjuMUgh2uSQGKBBPJ6Xhmdz2c1DjUrKFL8ngs1rsdHbU8zzzdYft5ss",
  "key25": "38bzhzfmDrJf16zrvNDD3WSRyVfnMTZq8dAjnX1f2vY1HG9H26SaMyeuycAiFoxdCkY9ZPbqda9oSnNAy2UzkpSy",
  "key26": "3JA38X7dtNCM6UyXCDnabSQZNEsQjyAYK6JGn4wupfA6CUVSbj7QRSD2ZJyPbLLkB77SYBzUQBTdoKesKpCD5KDo",
  "key27": "4xZqa2SbBm5eKroKsWUapjD8P7ZR2oBBYKaqJ74ogBzkGoME8P9EkZJM556khLJb3hCPsTBLB8gR9jtMPHmeRr5o",
  "key28": "uzXa8weLBH9sMvq1XHgZe7WbEdHWzc2hRcznykSbybQpXUZE4VsisX4nXkXCUe4DvmrWWhr981Dh21zKTa3HiTs",
  "key29": "3EVky29qw3Pd2RVsJiqQ91FrPUPSnX29Yqa3FHgVKJavtPh9i7zRZKf2DBFAnRQ3g4pS5wbup5TYgWog2TLU7HYH",
  "key30": "3xuKu1CrjRYnxXoBCCtPcj94eH7wKgTGHcjxprzPxZt2WM9zysUL7goivnbfMFBWPi7SobyjaBSs9k9xvqGFskVK",
  "key31": "4gpq4UC3omEEjkQfEQjT7JDGWitqMUkDn3eNBC8ShpzJWZp7aG5EaQugpsSMvyLxidANSrZLXbMULovCE8XS9BiZ",
  "key32": "vsdCGEmHo4LipknNYS1a6oe76LcX8DrxndB7LgGKa1ARwS89x4aWbwzZQvugpZxCLPRh3ynwQye3pQN6rk2P5ka",
  "key33": "4kF31PCvrpSCMzZYNHovhJdaMxVVXhBFPnEq6aHBM2aisNYdrmatQ9TyyBT1SoudAesJtgZvuR9FHuCY1Sx4FQhu",
  "key34": "4aPg6eNYP8brtYv5BJaEsGc7ipzHpjH3c65FWB5aiYwZdG2BGkwCoBVUJzPgZ3yKLziioCVvrp4TVXn43LDsUKNQ",
  "key35": "4PpANgEF7d6R54SJ5a3pAPLkf6dsVyVD9D5bhwWuAPBhMiXkLvfeyBYH9hF7mJdbdACGJ7uj3HwUnc6mmy1CrLCp",
  "key36": "3Eh8Mr3JVUV2y4v4ma3TdcftXVf6eaGB37izVQzVFRb2r4zprkkFKXXrTB1z35i7U6ArXEpvr76ShES2MuAxdq85",
  "key37": "2tcDhaZbsMeJtd92u1Gtso43ut4XmHxQFyAcvXChrrTr9fB75rv6MWKYrrDuTFMXM1EPhjyYRxqvcLoUCLtGcZPo"
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
