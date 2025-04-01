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
    "3rQ7iYkHcJn8tBWSHcM9dwdtNK14h9PvvK8qR7ERzMDAeCtQqfmEiv71DPrVHiLeMdpfovvftvwXz4NPPSW2eFcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cW6FPM17342k2xoByVzRUrhBHtwLtGxNzNXkRGNMzEkFGBMX6ZvykBs9bhoTB5SwMMyHtwJiR5JcdowrpB6a3mr",
  "key1": "57UHVbeefWGPL1igNyxaxQufkwodkoRHQyeYo4USemCUhEpNzxRCgNEjh8EyKKhCaGMGgN568KtKmyvgsnCeicMC",
  "key2": "4UQgE9KnLYoc28ui1HVRMKhY1YvWEwj8LzAvQeW24bN61gjiaPab2945H7cYtw6oBtgaDA6KJvaVuzakNA7emq95",
  "key3": "3C7Jvb7jRorii53yUNB7igGNGLfXTarDM8SBCXCeewf1Z5FCqMfkGcZ4uCjd59BeiazrryoSFwYLeMAstS5Lu1Hm",
  "key4": "5wKjr3BqRbLoR9bEHabcSXoEFFmrHiBbVRmmHWq1Y7URZWAK4cWRwKWzyyQWe82RQQqnM4A3KMJheuST3hUtvQva",
  "key5": "3EHVdgyPZC3BnBJoh9HLQS3s1o494tuy4fqt42mSonPS4AsbBj1a4vfRbFaMWPDkKJXHNLp9t2SkW5FLCzHn17a5",
  "key6": "4ZsNmGsWoPRG9XEQCTdZVuLWq79HTpu2fK2C9NM5Ug5XWBJMUmK27DocS3FJviGxMFpXMqxPN3yrTtGXVQSHpk9E",
  "key7": "3Jixkhac4koDzxsfKhTPWuGs491TXmjzShhS4W2xdEEu1f24JKv2dGBig73XVmRQTDSVKGWNqMMzBRkJkbCRKzy",
  "key8": "euSmfVJVB29EjDFHjz8VUjkxjHuwDP27CnMtzvSsd2rnRzhD3rND8KuEyPv3eqNpJq52AroRF5eTCzrwyK6iU8o",
  "key9": "5oAicQHGevADUhFbrDygVq3TXoQhzjE3aSrfKdbwz6QQkzNPQT89yBYdeLaJA2VW1wbsVjuTBHi4Ym1hjsxn9yNM",
  "key10": "3QzwhADfzgbJck1BJBTt9dWtPGhkxW3mPFyxHmKJEXbtQbMJ9YWJJzL2PJ9wtS9WbhTTsAgZbzPjwSzwSLYd3FA1",
  "key11": "2xXM8kdw6Znio5J2sUzLvNbMHk71ird73N9GXWTXeJEwpvGQeFWYj82FjnSc6cQQGsVUCR6vwg8rWEhBKq3FtgNX",
  "key12": "33fMbdtotfzAoFQfBDWvhgjK4RRq3kvgEWRoCsHooLYKKf6x1vJauruwXevECt2tHQ8D1DNGDBGBbEWkYekVTnKZ",
  "key13": "2NofHkUq6Bp8puEnpZayCohGWBgT1qkmZZupWoEmxF8c7fc4HBv3Hb9EQTRTwu8sNKiDYhUhabUgS7tfeSnHebtK",
  "key14": "5z89VMZbHTvDeHa3taqFVyaBX4U9ciBPtBGd5dGiiGqZybNevfjeu3EyAq4GzpK7mxctKbqxbC81E3At9mmZHko9",
  "key15": "58WuZRgeQcFE6r5mC3bTvUxZMYMJ3yUneNFfVihQ7N2X4NhNXvBwg5vDtD8i9nx1v35WXGsrMQvCCS6KziqmWwqK",
  "key16": "5KgKpq247n7UXpZvEzriRRTmTemyvyxQ1esjiUmLr8KDGMb4zkj36SEEf4qAFCgMp2xNysio9L89nkZ2cJwnxbP3",
  "key17": "2hDeQspddf96GArG8tfiNB7zTJuBywLgCCKN74eF6CEvRYG9jiM8zrbZxMvKB2ubEckfmd6HFuy7HNx79MVR19DY",
  "key18": "3EutSWzoRosS39RhKo28ACbEjYqiEn6V7JDfMfmb9umrKaAkD6whdpn8HY4A5U4cJmT18MAZpwzicXPP5btQCfKf",
  "key19": "5wryH5yMQmJobJ5A6GVojn6JE33muYfQ2LBpLAgx1iUfh9FfzESqqC4ePSDKyQ85KkxitZwgYxXDotS2GpvMRM8p",
  "key20": "5QgE1VGJvQxaGQitqPttbWtqSL6hniSs3MmjiLPEVUBLDTKESLfbuzo5SFiaVrq959oi1jx56Ggwpbk9LwbBGCL3",
  "key21": "1ZpqwekaJaurQbFjuY4jEqvsLtGUtagHTRbrTKj87c2uK6NqvgHJ9rQxXmNTYagFbE8iGqha94sD2T8YSZjoG9X",
  "key22": "2UzBUVCfVvqoPMtkdNYGhVFx21UsSU1ByD6PWbfmRDxsQ66WkL5h1jPWLT7b1rDbPYeL4gY9BhwMb5KEU2G3wXvT",
  "key23": "4aiu1yujXqtWzPVxpeSEp1paVAtuTN7E2ff3RXxenXSEuCvqtX6TR1kQqDfAJS4bGkuE6LHULF4g1iTNhheXRuou",
  "key24": "5bzaaHmk3ps3KhefKFw24MWbAiZKaCoWZBgdKF6ibRHxBqkYrCE2Px1oDpaTUPQ7EaqyfAfBvxQZhCgRwXzXYsU6",
  "key25": "5BRfToN7kf41dDGf5QVPCsHaFhzxCCcadDvJ2WQLQzV1JaC5vN23ihAKG22y3nyciFuF7ikDX2ZqRAspfZBTcdNQ",
  "key26": "2ueAj2VSyZ61kMTxssjFtG7ytpfLXdLA3avtqB4ht5Zn1HbbcwD6q985wrdswLuoDVmYBQqkij1pxeKLLH7jYeK7",
  "key27": "5vY8icjf5EXj6xVTj5CpVGE8F68e8giJPwigAv1a9JYX33pPmbjymzWRMv6wKvFP3h3BGwWTPZmT77YXrtQMTdT1",
  "key28": "7ZqYAcGQqTk9pY8QUSd8KkMDMW65eL5C1gsEN9ArKXxBVja9GnSTBpAp6zRSsbmNBkzGUsksBtpkEdnt7TESAdJ",
  "key29": "4du94S8azEYuzuhVGEBu91ecqeVp2J4CksaZTgp1NYoCg3BA4PRfzMdwcUYTwQGzGFnSwpFH7GFBx5TnjXN1CzNh",
  "key30": "5Lrr56wy8HtQbZxjzEy98rRfDCE3TeD197GthGVM7RkYcuTn1LyrJYQnpKF7BobmAcMKmpczHtzeAPxyHpNgfzRX",
  "key31": "29kREk5kztDin7iZMzDxE94oqkix1fMpYV4LTJVZ4VhX54kivaZ1zN2XYHP59HSCt3pYNgKWY112Au7FMgmhMr69",
  "key32": "5dZNVdbobKw8PkFkhJ5aLUxuCdyJiYTK65gEAFVy895cUtaQK4yX9NbYvf9zRouBfBfMNopjcgZaie1oey7KRkvF",
  "key33": "2yGBNZtFhMHQ1KMG5eaVq6czM5ej6FziWdLXrhm1ubPFGKgt189e1P8fdNJnkCXkaavw3aH8hPnte765JV67zyCT",
  "key34": "4ju95wgQB5vWPohKs64QQPYxU1g7njEnV8cRzcBHHp3S3Jh515ukQL7hWbtR71yxLLrpp3sUnRmSvknxpYCKPzGg"
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
