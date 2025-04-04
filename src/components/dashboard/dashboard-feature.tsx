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
    "47ouvdKeDMHBNxycSC4235M2oZCpao8GbJEncdBGeNLhnRVKHrMmg1F8hay436xUTPKvYBzTLzV39WQTgwqkDWWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yhT2i6YZ7PyLfzzf3tvm9kCfkpnhmn6ELPwNn7x22LBCZZWNd4XcRPtYKbh1RP3Kw9AH4HXRBA1Jg2yquuCjRvt",
  "key1": "4wXb8Ntyz8uJPdpQYBMfkU4pLpEJiFYZxYUTCoxpi9A4ZUzUrNLeEZTkWtExjGrYGqokE9EFodQRGiztjEP3BTVA",
  "key2": "2qmUa8jLM4TJSLm295g6yezTZe3HNn9kRVMaPb9kmrpzh3bA5qJSodNQzBgVFQB7TvrH6xsa3zHD2fhthWKk6exp",
  "key3": "58J7WGKKbzURUCFJXxP5pqWJJuXWQLNeu9ybqyRMhrxnruAgac97FPBiuZpMycdLemwcAgDq4pJCHp3LYHroBwzt",
  "key4": "1NnXH5C3YEUgLqt3LQRkeE1ZbAdfJ6xLaetZCvfFZ8tY7voKptwm7ZCvZXdvPxkKvrSD4r37Uakg69ia5zMWiQu",
  "key5": "5oSrdcXXHCqmxoAQp6svDC1Bh7QkvrAiFcYzdxNUXuiqV8aerHQMAjYKogS89jPQLUdLivkrHWZZHXmZZHQUYFva",
  "key6": "5KfB8wtKLigKgdz7EQzCYj8Fry63NmGiioHwrguEbVnHKDRwAzBpHF8jEczJBybUu24sfPjQgnYDrMWrBd6sLFsk",
  "key7": "41Zi7PZnx54BKjh8jUFLXKZAyc4naDz2wgFPbjtjpNQMSfWQ7ky9ofPbEo3RmQHZoP4MuMhxZu9gFS6PD94dikoL",
  "key8": "3F5CCAkm5JnDWMX6BvP3pjFFyUaGT4LCCr5wrybQxWmwP4UCMAb47kAB99MRNPSAVFBkGP532Vc9YbypBtcdpyZh",
  "key9": "4gmqKCbhn4LNgj6XBkYyABcx4oLnjBsP8WYAErXTABng6QJwpGiGV9Ci2XG1A46s32nSjMUAMVck3n2TZzqQZmp8",
  "key10": "4dAtE3jmhfitkXEXV2Q4EhyyqCCEq7c3s2zvM6VhrGabWSjZuzPmgtQrjwxFvAkGCZeosxQZJCmaCUuR5eW14fv",
  "key11": "2xbosgcv3ceDCvycu4R5w3XW5iXiRDQLr58eW65cJEeiLt2VTz14pPwrwKaXHQh2Gy8PWRoFdZmfGFTaHbvCTLSE",
  "key12": "5S7u5PEHbjUueCY67LQ1uXFvMsXqzxDXpMFFBAq6SdwHLbJT2W5krvJ4ArKSYDuKXVfrffpfLpiQgwQbnKHqJmD9",
  "key13": "66EbaEXEKDsVWhZ9BGpVK4wBWsg3ESG2LGSsDH8rR7jzhmXoA3S9PRWU1WE3KyMMMCzeGy4mCPsENhgJkVrv5eFL",
  "key14": "63jsTMMdGGVibPvWT56ksWddU7nvLwNm25Yngt3p59BVtBu8unyP7mWzAYDMUEj6WHY3iAs9Z7ScYsBfFyGFvhqT",
  "key15": "Tegi8RijQgSwyisJt7zdQm4CECVCP7nVNJ9pcomCGzu7xkZQtgRzJjqLw2LUyRRrSEkCr4wCax1WVPNmmY1HRPi",
  "key16": "3WYsACSUUFESVRT1QMxc2iQFQ982dY6CaLRZS5ug7NjAnKXPiGTUj7dZ6sdG7D94F1Zf3mgAAvX1JWdv8L1RrKR",
  "key17": "668Cn7E3tg7X2u8ALKG5U6h5WGXuniYTUjUexheZoL7CUwboPDxuAyU6xLyPgD28e6gdFkoEPecshdWf9Y8HWiTd",
  "key18": "27WA9HdBxGCggcrwSn2SZnU5WwScGkP3jdMoSLiM1EVbokTYMMb57frdhvDr6hFZUiAmVDLXsJr5CfDsum5FGcjK",
  "key19": "3vyhWiKkmkPgs9ymk6X7JN9YA7EJP8tCTXozRHih87KCphBtnGU5Q4o1f8bZ8W6w8mpJZd6FtY6W1XPCooFjw1y3",
  "key20": "4AWoZVNnZUCTdjWWtwXVLgzgZoWnnpuLw1TUgCfXycGH4GCGQLh1de89m9rzcQwYQFGGG6L8ALbvJYdW6GK2wFyu",
  "key21": "39ooD4cHqW9mJbQeteCo86fvLSkYKiEJepR5S5WP7hpVpDs4YLPDmBBisVPiitwtDBLjEpH7q9nHgueagQDuZXma",
  "key22": "3f6p61cse87t7HvVoxYRGy2h6758BgqZfX1ssjGstacqnzJ1iuUTSX1P3E1yoGir9R7Y4NSfVc5neko2GY5s1Vbp",
  "key23": "33ViP6XYVEqsXxYfJgkQGiVWVtMavM2EKJVgQ2TGVbp8YgisQoaR1MrTHyupqpF4s3BWfCHMDBwuzmCEP3w6Q8RE",
  "key24": "3TS3Qk8UxjwRDRVfPnFHGn8tF1z5wVNoGzxLXNmRN2wdstt1oZMXABSDuKXm2mSJdPLKTvSFLWZcBXC2tVLtX62v",
  "key25": "g4Kk22TWszS5NQgYeoyuL7bCzdTzYMrbdL8ZJjxt29tUo7FFd5uDgAfFtQPJqF4qvRb7Scv1t6BWSFz3dBSghPd",
  "key26": "2mCk73sTw9s3u1DjEmoD4gaqK7b9Ft1a5R5FNr8qmobz2ZiTDJbnfEni4YMDfeKU3ToA3LVtMMS9vFZ7icJ1SHNj",
  "key27": "66AijqzCGAcN4Ri7QgTPX1XWpAUfbbnWqpkPg92w1sJaDYqxS5i5VbojVG6RKY6nuG5vXiF3Jf7eSdS6uYUNSr9z",
  "key28": "KH8ZBxD6xULpqb1ZjJZby1qGtrabPcWyRPzrWdzmNkoYrCBcP4Db4UVC2BaWpcDi7vbd6yugGEiAbfkpUAjLtoP",
  "key29": "GHy1xEqLvpuYfcCHaNBBQ3uDtjCvHuiRCjmuX3yVPxwt1PZ8MsFPquCqUu79nFWcBSiQ14DJkAJKSub16KF59WU",
  "key30": "2RhtDgagcCmU76h3pfScc4nr8StwwsTs5ypLAkT8QQFbKNgC3XSTKQ4mS4SBPqeJJS1px6FxE9YRPVggCEzjwGQz",
  "key31": "vPVGi8MqGFtSBL85R54wX5bG5AB5x2E6f24QP964D465GMX6MnkbR7bUrfmjF541kAqTEpo8dqoHUrBPfMRgSPZ",
  "key32": "5yYJGAzx95SzL1P3vrEbo1dkY73AYmtr5Vihmt1ogF4vS7KJ7bDnNcoiJWWcnEHJ4i1jLqZKCgXNUS3jREfZeJRN",
  "key33": "2stESFTzJVhsg5mNxDLcRVaDBjiWUxSetjEg1vEYdoLR5kHW5F9yvn2mSxJhJy1bmfzeog2YUyqU2xHsqnzTodLU",
  "key34": "TSL7G7vk2jLrtbcNkj8xbf25d6XMV9CNdmKXrgi1PfmX8s5az8d2isNw8KZtCb31ToFZBiuV1MeyoeyjthFXUmE",
  "key35": "4ojJxaepoit7FSgzs5WMTvJzJwQG6b3SJKMvhXy5mm8b4Bjx5N8yJv7rjM7MJXYfzG92esGLtfmdxUkbXVV6h6d2",
  "key36": "2Xh4K1p9Ctm98tpkmScyVevGPpdSxP4K7YEcS1VwS1pDL4apjt3MTM2YTyBQuHznfMXHCRCtCG2bGXbJCoS4hcok",
  "key37": "wxqghEioD3urxufBeYMUDbjXtmZzJCv89jiSbyDddzfJvaVdUkrcafqtUZgNQywYANcp4HJmUXAzFMTEdQnhFVN",
  "key38": "wr2y7r6MwgjEV7e58WnzTKACgQVjmKAfowTodBHntv6dfsM4WpmDHUZWPqpCPmhk8bfZHHrxjxifcARPwM6Koa1",
  "key39": "3cam7T9ttaJaGTCjaVwBngRXbrDdv6Vewy3BVSFSQg88t7dQk6tbK1114GXfexbsKi6eFdeegZvfgeTEGytDnhzw",
  "key40": "27MQXh3pBpbqURNEyqgEmbBgAFFzPJ36iWazWPDcTRWWw2MroZGD6yNx5GxDGw7i5c1igc6hv8ECY78C72LaNt1m",
  "key41": "57788qsa64G611crepvKsPPjMBnZZyWv5WiskqdCZTS9JkTioFxiyENpZJzu8F5QD241UNG9myK83FRVZH5vqhLR",
  "key42": "27qLyd3VnBeCEUqsB8bipG5iLejXYLZ6QcFiyJtZZtoNMExtNXodvybn7hUkiXUAWsqho7Yj3F425Tz3i4A8JK9n",
  "key43": "4XX1Lb9VFueMG9LQb7tBgFq2ZhgwtdhVm8Zf64N9Z5DUaj7MnZLG6fJV45bpXs8PVs56XyyxYQ9Z2tosKAG5rsLb",
  "key44": "4kfT6Fo9UsdkajZV5vQcfxQqQnaE5kfUvvGWpRbagT1vu8hDYqeuC9cRLUoZkFz9vFYsPwp1MGdU7aiJv5HRRPQD",
  "key45": "5b9ACzQGM9BQfGGhanSKhe1Rn57zqV6qPb5rf7VzSKaM4HDftdhK9KL8Axme43ptwi7fcMd5K8s5Mc5uAxf4Mhmz",
  "key46": "2qamFvMazof47LCqaYvzYfJqh9dmvtDqArzNH1oDHhv3Shb3Q3MX1cCyoUXUxjZ1YGgyNPSvL774MS6WKSraDwsn",
  "key47": "5QgQoW1Z34RjViKf55iarctZqC48G8Hfio4BDTEhc4E3uanM8PmszWQWiCB6tsuqPwcjcYiNzJGM5kVfUery6VAz",
  "key48": "5KHjDSb6Mq5ajW4Q3hYG3ceCTWrRs2QRfoBHKm86VqYj9ZjxkTEkXVJREGLSZuUz4bjb9uDnSx8RJNztLs3Pa6kD",
  "key49": "2DQxiVvnWQJseZnzQvaZ44YhxLWDnWQryKAQetRyZZ9Jiz5PAgKfR76C3D68wYUoQXqdKFa58iafwNQdsuKbtZts"
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
