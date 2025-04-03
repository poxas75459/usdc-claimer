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
    "44A4Yt73nLSrsNVC7d8yaojKZ9rcRTHsySA8mFUdy5weX5q3EhErKB2tLt9c4uV1ngtQo5uNeLxUFhZHCxgx2ZYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gbMhbyMiFcubEgwBz6YB8siDcfsrX9w7s6aM5tr7o4WK7H3dK4efzN16Hg7UcoX9nkDp7zSESjDpAvuiELnB5Y2",
  "key1": "51STsNPCH5SMQBpBs8PbgE3gLHuTuXJQWFJ8M82fi2seW1RYeshe9FXHEavfkGeAXAvu3pBuc8J99g5GBbBRx2Fi",
  "key2": "4Pz3vSViKjYGGvt7mSsxBwQMjznNq2NS2VsnAWTDDz3cWAxi4mckavSoz8HwEKNVNTYRUoKVFiEDaL8KZFuPPQFp",
  "key3": "4fGcNpNw4Dijg8KE8uumLdwBXqcCZrxHqRZNjjPjuJwvgVuX3juAjvUYszmZnahJ8m693vj58aqX31KVtokfozjt",
  "key4": "3gmgFUGXSba5gc8vMGds9MSPjiqiJFDxT67pxThiuT91mKE2qGo6PWstsD8t7gWwohQJ8pjncir64usRWsnn8Wpx",
  "key5": "G2g91eajaR1P5ADz5qQBV91kaceAyXRkU7ZoHPVKyZsdbykZtk81DKNyV6B2h4KavJc2praaomRkth1VHDT2xUi",
  "key6": "5yUzBnRtSwisH61vKyxv4h2nsAMAVRv2mRQLwsKJR9R42iR6nf1BSyTzfSRzqLsBcJYfRU8VcBp5dCXCZAAJpZtB",
  "key7": "5XaDkzqNwMukZ2pXJ4fepBHuLdxYTNEj9xfphGi8oxdqdVSLkRB4JFNybbTLuDpejXYWSw9RqwJPPtJUWwjk7SBn",
  "key8": "3UQo9GWprh224rLB9GufpJXUeSPmy2tsbrarTNS8UJCS5qH3rsH1s6BHkAFAiQsiy95owLHURzvS3mB8kNcdaZ4X",
  "key9": "4MZdCBWB3dgPh2gQpvDrghTDoqj9qvuMXZ6AxgUkxHAc47Q7jQ2p1bBrEpBc8yrj8HdctcL2acBpWWjmvrhEMxx2",
  "key10": "AZeUczD8wPqAAVXxqPs2uTv151C2XieqQCE4UNZXaeoFpEwNPyGRBrcSvxuk7hDAkGGvVSoyPMTAiejRJ7WVUwi",
  "key11": "5VsCxnK91rAd7G5Fux9nCZmbTaPkpVP8dQHyG1KxWX1debmZkqodQaCqEEJcvHgdpB5pqi9SaugvWG23eWTqeBqC",
  "key12": "3Y1jLq2pmpASmCgLEum8yfdt9j9Jbmxmpj7MCWVuz9DS9KmiaTLt1L5CbQcpMFBiwH2HiYj6omXvnLSWWC73gGhb",
  "key13": "2TEuQAKzxKa2GoFaNrWyFNY8iJhL8rs87hfSw2Nsrzr9tKZCcNibER3J832bg91pesZMH95MfXkFKBu3rxUSo4Vh",
  "key14": "45zspMWz5yXjPLT8KVwgYnHgcaXo4DUmq2rDGWuLKtF46MhDBTnaoL1uY1G9LGUdMZ36KmbVdyfs7Dgj94DGCU7u",
  "key15": "2MYdM2r5rzgzg5eeaxjv4wVm9LD3jSNtULM4d6jhwqb3N39KJdsdpre5DkrQrtJ4P3UM7hAds9osgoDwqPbmMAua",
  "key16": "42DJWx55KoBFyVvygqzFiRggPeEVnoVxfvdaff1MUsxVxft9NWys8KCgicMJcCBmkRWmrXMZQZ4mhcBxk5WRWYKD",
  "key17": "4ACFL1xyXW8H63CtH7zQ9q8Uf6eYWQDnmKi1Z4dN6EESNj7fUw47c7uW2WCYH7e7xwXfBbjD9PKGcAxbhtLuhPT5",
  "key18": "Pb7G1hDhH4maC4FfMx1Qd2WP3xQCuVmS4HcpxMqsGHRSXGBnpfuaA5NbwiXdyRapAWpvhtPfRvEi2Nza6ea2U45",
  "key19": "3uHT3in5YFRUpwT2gU2kSkaB849MmJUZquQt8cuYzMABYAg5Mwn9v8NebcWF4yaL5waS7xPF6S3mWpEwap5xdqyq",
  "key20": "5HsnLsTehwfSXSKLNSfKgs2X9TgsizMj1F35MWpe5o6ofnAg61AMgEDpYLcPgbWCCD7Z4hQoHAknM9QzdyLcqkpX",
  "key21": "3zsCzZAvZScJP41UcnqGMAKRVAvkvmzW95iFrVCR5d16sK2FDCCqTYE1EnEGz2xNu4bdu5Wj25yxwhLSVKJ7yZfG",
  "key22": "SkMespJYMydEs7hDvCzwKoB15jdeHXVgWNJvL3hDYYRyD7ScLdNaC3H1D6QJGZajfHwPGxcQoUhtofdViq9Jwi9",
  "key23": "39JE4qqv7bm99FjRCPQPbbnZfNGQPo5nzp94Q7Ye4hmKwdTiytzbF5EiiKeeyBwu1iL7cKiG8TrTtrWHhRK6BfCW",
  "key24": "5AuCD87neftuKynGsRLuvpK3SPETmzzFwaZwHbuDNh3ZzP313t8kcGER2eQQseAtEoe7kvxzTmhuK9Jg4kDoQktA",
  "key25": "TUw5ah6niwG2ZB813jN7r7BSW8hggEoRuQVc6E6qdNLLpZf8vXFZGpRSVTrcp5jR4CUNKCDmnYGRanuCBGi9DGN",
  "key26": "5QCnr9vC6bhiweak5wYTt1RTxzSuztzt2zsgcTqe4HWzwVKYa6c3cPogosA4rFVYwJrQuGyBotAEpEoKCBT2DRbN",
  "key27": "3tZhtU9rC3SmeuLTmQWCG6KRjsqTsMtiaphLyRCthBFqutujK7LLH13S2W4NmK9Jvr6b8D2u5U4B98aEzX77ky3T",
  "key28": "5jfE2s1boGgDHrUkV2DTFmVKiwHgZ8Uex9NwYBUjq4Lo8iueRBUUcGvftRkaMij3LrrnXbVdEuWRLiqnwh6eqTKd",
  "key29": "2rZCbJ85LyQ832aupRhzJ2HQjM7taTtuLo5cRZhJTUya4ta5H5L2QGZLCZytdCXeLnv9Eoy8UzxQaouD7NLn98GD",
  "key30": "mMfL27sXA2ppQ7eD73g8xxuramcSSrjhB21v3S69HqeVgZBAdhaTpzkwVdNSmHNMVB4asYJU5fM8WmVD4U6NgUe",
  "key31": "szuWuJz7pR32oDWDN89gM4LbRDT12RhA8Di85n6oeuLRuu3zUBHXo9fzB3uZT2aEcQ3e3zPPAmjLYZ5sRfxhxVS",
  "key32": "46W2SDK9iNBvQ3xZtVQPqrGyzVgMfwsNrT5m2hzwMUmkqRBfR6HhB5wuezyePZdoyc4ZVVJvbiRoKiF3wMdipPG3",
  "key33": "35JKfyAwfRyeeAfM8y85qi38WjcySJuktQDoU3nA2aKC6tKhGuq52BauHf94Jrb5PDmE2MneaF8HkgXXC8UHZ6dF",
  "key34": "4R7hCondGJciNdrqXuKJxBzFCkhBUDd9jJhinST3M4Frp62WUNhy4HurVR2uqTWH3CrBeRCmXmg7ua6H1DDjwASs",
  "key35": "jHNgkainbP2sqiYBk3g6KAEzdN2je7pmEyYesZjkvsVFNNK91x7RKPFbYDoxxZqkrnYc9Y6rMLYudwefe99WSrN",
  "key36": "2gjvNUepqKemNVBooGu5tYcQiLbk744UTPufPxaLL1ARtaDa6TWWFWR2mHeJp8WNpvone5NR3QGaVLxm2SeysGfv",
  "key37": "3nXw8jmArs12zUCcCgLqfJcfzak1BTeoPJ5qkRnxAgbf5Qdd1YaqLs9oNHsXc5CY28t4MSh4bUZKsws8EZ9Cwo6",
  "key38": "3BpgRHSbRjgFhzxVL4hy1Lu2Q6THaTruMf8ZwAxUaMvcBBTZV2dEvkjEFnHrWF9vqhysVzKHoZztWCBCZcKxr7eV",
  "key39": "56gkt4UTPjZvSSTa8uANfTkRu3o2RKZKm3Gz4bFDws5moAqvNDasF22xkmHWZxeN5htseSgs7QKnDmmXHmLqvQKF",
  "key40": "JaSM4q2ns353Ar2UvSqTUhLLe831qHLoFDwf6cpmwTDDPs2QdnAw7bXC7A5uqE1PaiuUftJ319JmLpDm3Q5VVSa",
  "key41": "4D7XhjrNDrxKiG2PwqSKa9Kr7Yf6KeG6pppHtCbag9sox1NGuh2d7ihXGwzJQNE5NJzScY39NHNYueTC7w5fdC1o",
  "key42": "5d8R6mvWq1xF2ssYec7iM3rrSCEhVFdxAPKWNbyf6bwH1XTaTn1gJtw1LU4w2SQrLHiSakriGyqoBPiQ91uUEJS5"
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
