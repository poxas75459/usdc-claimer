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
    "3CyLpVCZHTVgmkMwZ94qAL2L24s4N2BxjhiMHoWm2VnVnjLvw3CSFj6nQvGvvMs1GMuXEx7QpczLXrzys7KhVKcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j3naN6Smd8RB1CY1Vkd9ATCpzNeJvKvJ6UjjGstP48zfDJNXiYFeY6zee5C5tu6C2WmFpJiGJL2scTtsS2pXipc",
  "key1": "2bb63S4qjSk1EmCfEarVZLU4fanEjgFhQeqvepvbZaaVFWxkD9mrSkkCeN1u3nVqrhkagqxUPLByWNrhgp6q3aVH",
  "key2": "69pgpcZ9tQsuKnAd3w7Xmfe4fXkuBBfsfchU4eqGzkWznZTVCwHpc8V629vSUToMN5FKwvv9at8yk6i7NLmcjuy",
  "key3": "5znnNLGbAoh3VMo7YUr26eJSb2FRGNvaBpZBK75bKZQKr9GbXTf8h8YYBTRKLZHimSDDhy7XKU4wrCWoPdKKwJgV",
  "key4": "4Ee7JCue2duuvG2B4KxEk3jDHKcpueUYBX49qf7jDwUsJSmXnS3uEeQctd5d6Exqx6sv3bucXZTUBDCpdFMSef4K",
  "key5": "5qXgRZDJ8aVzdjjSgZ6oSa6wuJ54y42EhEMBgvEtvCqasQn4t2RBDNNVrYd6Yabyt7BFtnEuX8LdpJvTzsGaaxh6",
  "key6": "5voaCfJgRBTCJMAZXseEmsNZhR2pYfBqZyfw86BsxiWtdAYtoXUNzw9Rh5DrkhmWTaqeGYoiEhH8mvxnY4SK1TAg",
  "key7": "fbzwQa6MyywaTXqWFhjs2JmHcVpxHhWpvKc5zgz6cj9xkr9smx37QZFvVTeACpw2XNYvhdR3bNBpcPArJzNhU2C",
  "key8": "2Uhzpw1a1kVjZneaUmq8XTS6DosY91TNA5zWmxphHaaWfMYK13niZKVC7QpJFfRs5vDQUFARqctEaHJ7epmHoGpm",
  "key9": "3ohAyziDLghKpwF5VGYre9sF4vaKmywRXMZSoQ63TNrNxfHKjQjEnB4XKcfrJxnZbU3zztoopYPotEeuzbWGBigd",
  "key10": "5rDnzR58ZkqT3CYUVaoj9vGSwcWHoTTDnyunSsaDQYvgc9eUkvYomaAjU9nBQBGrMsWNFh4MN3tsUbyk8o4mxb6X",
  "key11": "5SDrQ8pP7Qno5e6YZj2khV1tAETtH7ennuD2JYyUdnFsNRud8cyRBz91f17YbiAWdqymZRUQWhVsH53e72KkWHh1",
  "key12": "3kiUKY1dirfXFcyggbGB54tv5RpFACumygys24ScG3xKD8yhGTp8sqL5HEBUXEzXEVtapJz4KH9A52CjpuZESwAF",
  "key13": "4CZDecd8bALRkmVUuBoQp6JdDnTmz7x5mzhosozUaQEANxHBSUgzZbNmnaihqaG4hrhNT6WKQ7iFZFdSzrTscwmL",
  "key14": "5B5XN133xHseLCJaTPqecVh6ikuhNu3H5SaBFjcxcbSHGjgrvscZmZQehzgpDpLAM3LSEmg6hX5mxST98Y6kKEyD",
  "key15": "3JqFR6P5SstEwvtCx9B1L4gYnDTSzzzvs9Ctspgkoo9sdrqgXnBw7ZoSRGFqL24XJyTNjN8tu52SwVSSFZnZyd8N",
  "key16": "5UmkRRCkUNHAFiqvB1dKxAYAmHn8Znn77J6Ucc4cRhkYfXbCJy9L8D48txwg8AEhkxg4NMEW1MnCanSUcycjjUbU",
  "key17": "4mDDHisiy37MLNdm4UXuZ8mSdXgQK5rUbktSQWdfgsWkQGKdRae6Hc4xP6USnYqyrZuffzErGYc7cTaKVj3ndUBg",
  "key18": "39K7q3bFF44USzwxB8ruBMkmmG5XM3zcgiUCfD5EYdYotEsRGgRpDVBbDReJcxWqwsGdqTpJcxgdd1V8uEWtKSA6",
  "key19": "3N2239C9WuboMvDUQeyhGVtdkwrgjZuQ4g7H6eXrsjKt73ofqd5gNmEWE6xJ2n8hwH5nLF3WW32uLAxv8Qk9d3HN",
  "key20": "tJZzXUGMaHYFEZgosmsXTpBWQNLqurUUWL8fKShqou1XB2GxLjSsbjp6eq84Q7naoJ4Ck3JJTAGYFccu1FVKcy3",
  "key21": "HAjf6K26PtNi32QFsQNiMfhtJjJVVxCtoSckmQRFyUMcWFfDe7a85RvVZZJ5r49L6ZnBAfyEKfScQ6zo7VTTPzQ",
  "key22": "2WDc24zrFonmLdhCMC4V8MyYJrA4N6LkdQEGD4gg66TCKmiM5GjyqY9KRaAGJ5tjNr8uwCP9Q7B3bp6ofoQEkcgE",
  "key23": "27URuUJgxw8Ck2gVTkSivkkfAPrEU9Q5LMve81XN5bhnQNZtzxQxFB2D9vv9XsFQGgxioZDticsB1NQSAEkkmBWH",
  "key24": "2GbjLFQ1Ytd6Y3dN1PEMkusR2LCjHs3vjRTPYZJmuEQZaziKXKNx6KhthuUJCmzW2Xn6fgu6wJDLpxyEAFxFw7DB",
  "key25": "5W3ybTHEe6RCfD2wVNDXPsRCHYw5Zxkzn5p9D6FVBxNAp3eArukvx5VowhfR1PqN9tQWufGHeJG8arxcMiVsSB1X",
  "key26": "gm1oWEm7aBc6BHpfShn81suJuYetr1DJRFHxw627kJzkyjmmGyRcawuWPjjfAFmCVjuozDhXHpLHEZ1kCo8veTZ",
  "key27": "48CnRACi8UzyEx4dxyPw57EwREbUiZrG7EtiqHtbN6bBca1Px6R96gGcZ8RhxvnkAosebS7zCf2dPJ8u882N4oEc",
  "key28": "2uRqr8hp8u3jebAQ2Snp4bnNchma3VVVbtfwhDCVYkikejn2pTWPx87eEFyXQJX79fcPKikbjoVMmLShpLFwhPUo",
  "key29": "JjuwJV7CsTvXs2LrXWoriTrReD3aFknbE5Lgx7tdQ8pqdUo5cuHcau7HaGyXSchn2EQFeqyTsoP5SJzCLFKqwUR",
  "key30": "nVNrRne4zCx7a2XJQB4TdWA7TWrfr4cWpeTKePAfAothnnZMo75ntdueme2jgzWcat9XFAzLP89GaB8vsSth88f",
  "key31": "4HQ2wLzVM3kpq1JREcNoJyw7qRkTrYi6CJAk7RBbuka1WYJ6eFF8Fi7vhmBbA2pQexdMkJmcjpEnGdbvWYBccnwK",
  "key32": "2z2YLF591Ys5MJCeuDdinawyFhfJtmWyDcSDkzsqwZ4noWbd8DfPK9q7J2kHeXBwoJzPzBzngNkioxNVnLtAZpko",
  "key33": "56wnAsY8snW2tr9qE58YkoqB1LMNNTdkHRo7FCNdYC3L9zDaSvGvZbLDSdmc6EKiVk2wrF8BiTe9oendVffFRd3g",
  "key34": "4oDnAReLcBhf3rbZGJh6GRZ96ZAtpUXEjtcFXob8hjUtci6NCuMqQL5bEaeA4wcsYtNJWsoQ9de5UjhiPDvkeRL8",
  "key35": "ayHU5RR7ykDeDehVVjJ2GUEpDkK6vFHRqMHgD99xZsJcbWshYmCDV3WaBt4v6QrjLd6i2f1DXoxc7HbUh1MHusw",
  "key36": "4FYS2d7LJFkcP39wMjR2E1tMpRNU2VFVNhALHXERSYjjhqHVTMjD1qdWtamKuCsXt3qW5mSjpifyzwFs99p41ZW5",
  "key37": "5SScaXuLRcr8SvwUhwUefUsZuQkYCqczMisawFwjs5bYMH8LNUxHc5mVsmSLu1uda1nsMkukijYGSCMZ91379sZG",
  "key38": "541DGrLLn4UwsSnvLvwF9RW6VPYqbwCwQ6ivJprtXFWhMirETid2nyDbgbKAzVDsSxvG6UpoDoScR2WCTsy4cTs8",
  "key39": "jCP33WJPU3WHCJUDG9wvGdf14KLr5iT8yjGdwMy4kbxxs2G61koo5RXz35GudaBViYReSohF52pfKboLGZiiwUW",
  "key40": "3kui7Jy1AndbmzeWF8upYEEEdjAPxN7i87Bnc213wSNBKS2n2c5VJumgap7mUCYVywmYDYcRJSX3yPUMM5UcooFT",
  "key41": "5aG5wgaGx6Hk3ocNj6btWDYVHUVTGRZTh6kr1KyXQWGJsSzHSZgWC5BpusvqBrbnYCxNHWaogZiyfLQJDmGxuCAA",
  "key42": "N5YT8yXHnXWz6XACA6s9Fi5c4W6YLrBtRPtRTMLa8vjvGbLgtPMuzQo4BSaFe47rYw6gXGZYWsyKApZZbySTXyA",
  "key43": "4L23GTKeRfQ7RbZyCxV8R8c8oeJ6nvnhzLcxki23eY4Tn9QJFHPQbhSoJoKur3jPZGAfDFtNbuchYMnTkY3ySs7C",
  "key44": "3GZunHjcP5mAqfGCWsHcJPrdqhEd3wMivvkwWkwQuwLRPbiHYabgNKiL6M1CMKe1CzCHqRVWWd5j2tTgDUL8s5MP",
  "key45": "21Zp2emQjam2advroshcqGkrBfbRS8fnMbG9hyVjbTu7sXZJ3XtfXQwMnLgxYDM4ZMtRwFZn2V7mSZbGgrH7tDHA",
  "key46": "4i3pcFPGv9aq8jeJxWTQZs1Q9wXrJnXQFhdv592c5sHGBY7ikYpwFGEAANwV51cWKcNtV9SkCLe7MX4ujkZ1qeyt",
  "key47": "5Hcuq9oJFBF5ghn81VuZDpHT1vWy26MnuXoQRpwvvoxcMKWiArV4bXgZxsWsnCBgULCxVfC7261RXsA3rszkVhGW",
  "key48": "4Z7Zg1frP1pYrA4xF6hn7D8RdDZAWVYWTFGM3145tubyF3B2rGRY8dzqzLDz5XtWvQdZeQJ6edXbZbngBFeTnHHR",
  "key49": "2ExXxVk1uUeVjKGZiBgUhkk39uf7RK6FdV1WR1NnJoRjcfXDB3hAw9zBH8UmRrjdPgn5b7ftBewaDkqTjnoZRdRN"
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
