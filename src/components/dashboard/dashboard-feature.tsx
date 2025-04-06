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
    "4BaqZzN6wwHs616TLJ2NDuRXeXqwjQ6oR4DWPKiP1L1TNZHsL6yc2PUYZZZDpaktfJfCQKLYGXDL7DfAdi2qRqo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "324uPSa2H6GfZCjqLVyoXwCJV7WX9DykxzPtGaPLxA9DhPzNGoFQVSke3U9VxkS4rmWSjn7xRPyiTnwjuCu1wCTG",
  "key1": "4gUeRxZoVMqKJ6hjKwyUPgGy5h7byEE9AFiD9kAheyA5toU8Xc6DRViEzpTKaPz76WXe6FH9PX2JKyTHTth9S4J4",
  "key2": "5vwXwEzggYYEqTk5zXrF4JQ7kq33TcJetfx8wwJZUQYVxHNXQYxHWDfsYaaBqbtuXzFivpaaFcYoEJisEmHcTWw4",
  "key3": "5pjtCvg8XADTFkJTVmYLgD3atcbrXGHTn3u5664h6KadCfiZy9nTZCDeqHaJTykG5SDGvUVhTBmfH4NUTV41x8tU",
  "key4": "5Yu5eSypVXpfJqdPCcM9kYUFNLybNJqXkc7Tun5nedm2nNuV4RSWEdDaGhvk7n1Pmg4iL25b2GZSWAzBdEX5mmwY",
  "key5": "2bQgsKedgHm56oUs4W4Q3kCozg24niN2jJKLMe21KeAVfLQVNyDL1ejxsnDEjxZgisd1CCSAYXRz91Jykb83Shps",
  "key6": "2gepub7mu711dwmU3Zry42nAs9Fnnix9f6J8sprX84DoXUfdZDFHnvSdGSLN4YcCuaKawXGDUq5bKggq6q6EdfM",
  "key7": "2iszBw5m5MLqxbtKpqtQ7uyrSq3vUWPNxkN2Axnmseebbt8xr36bsnWinEd13PENPPZ8nzYWNBnJwB1eEx4B4MGe",
  "key8": "2wJMGoAc8tfHfHthT4hmNbrBxCGHNU5bHXCitkuPK7Ewqa6X66N21R65ULkv1R2EP3BphPt2wnpkizmtSi7iyS3u",
  "key9": "4CzksyqqmTcTc1hfV2YwTAWLs96zqj6eANTt3VJTZLQuxh96dftkER77mtAkj2LQRRxQvY12MEYNTWNA8gq5NM2a",
  "key10": "65RMt7SZb1Vt4thkpYwPSw3KXUnRnuraJLKENge4ibrrBc3Kt2319UF4gHB5ww77Gj86btmSoBpKQMZgLR2yYZ9P",
  "key11": "3JSqLiHmokqL1svJvD46tbc8EeeNBN36JvXA1Rxbzcharm7HhjCviuTECLzgipTzFKPnHWfgV91q7wCx3TNQzoEj",
  "key12": "3kHwjLBdMTG2JCsKoVqeAHQRfNa6kMRd3Qa8cYqCyxgyAr8czBKeE7pH4tt49MMByYeT4Z7KooQza8agAmAGgn6N",
  "key13": "2s8a13qNhCzGLSL38u5RnQhSzL5PGf5BGuEZ9f4pc7bPS9W96nfT5gg6SkAUDZ8kvdTnyUMthVwfhPZUj8o1Wtqf",
  "key14": "zweWaGtQhUSWepnrDraj6o89wQj7ZhBrkQssYDJSdHLfZkze4t3mc4Yi9yU7bniFwXX3MMVYtWa3WAhn8GRMaem",
  "key15": "2why5GCjLLVAbsGE4iw1oYXMVie5mzHXvq8fgc3WUY6wK4sSRLzD6auPJ3dQX3eNYRQXbhoPNJ77Q8MRvvYUfnR",
  "key16": "2CD5zyzA5FjUtLiT6zCNHisXtrs1RKQvwpxkaiWxNkyUNwrFf3TeRyHzEDTo1pqM5b1uM71cJyi4iiiWjExP8Wsk",
  "key17": "3RrovfFkr2dydpEbgseFmo9Qm1TvBiWGAN9JqqkoDsgssxMSgQFLv9Xrj1rjQJTUFALsPwJa775rb7Lmc4nWKqbW",
  "key18": "5Wo81B7jEXnSci4xzvpjYJVwoeA2ACT2mNSersPJdAuZWM1RKxwXSWcG1Q8W42raHaM6R3ULTVdkAXRmTzotLKiE",
  "key19": "64FZue7h7wrkauk2QfKRQ1t9aaMMQs23Ad1Dz5Bio7Dmu95B6VeXjZopnjY1UKtMuY7N5kewFmrkn4aR46Gd36Kt",
  "key20": "2Ye6zwydGEPSaNwz1ewr37Z9LupxJLqYVKXiPrSVsjGrQPguXbZpoKbmaYYNAGaqGkNLaphHp9JjX7oNW1W4cAud",
  "key21": "4BwpzNuEJTCoLpY6t4rDRUe8azdgHuDFVh3osgaXMBwgH9q1JUJkSCth62tzBHjWtTYRBbbkyVXQfHdiEBQn5zUW",
  "key22": "34t7sxC7y47vWqEM1y7hQtfn9w52dV69X5wxmbxax2zZ9w5gqXmqTMiQ586235us8ACygvEYeZuMUSTfkWanjCQe",
  "key23": "94ifN2pTwA5p1ZUsrRbUx5gocZpJdASBMTKZo1viMXZb5EBm218dSLKFxQDmnTJ89r7s8BbPaxuLuCDRqDHjQGa",
  "key24": "3ft4GQ8MvHXM3QVHpCF96gdw1kzSfJvFNSDGETHTouiRQr8YrUK1zTAZbgTDuHhfkG897FuUU3njKCwwc6faHdQ6",
  "key25": "4oot16d781iwFD8hXSRW6DQkznPaVMobdViNw6dAPP2aJKahnvGEGrMXRxryfmAP3enTW3bA3B3MtLv49pZfwxQV",
  "key26": "45s4qdXMZqvHAKpydt6q8Biun4EHSXUtHkPMZMHeK3AiwBsCHMoi6trUojJ7uFoZuGdDQKYaqyRamQtf6J1Udw25",
  "key27": "3rxUa71JZ1YbWZbuB9khP6tJjxkp3cHtSLNvQhrt3LZU5UZr6baXBqFirUqJ7smuV3C6yjXPsatLQcNDWSEWeCcv",
  "key28": "3U4rzHkNzD2gjC87nQUGQphPAGPshWhAAzzxpHJcZEvWjnJi6577jpqwon4Jeif4pQV9mmcrpvZcNPHWFgmEAtDo",
  "key29": "5nauSrDKBoBYvAyxsxAN2rg7qiNPi6bQV1qAkMmi41y4kQuJf17m639EaVsJPRiU3F7NAoFzTkA89EzHLhuvt2ma",
  "key30": "3PpDxzqZziv22snVRmouWpqQLkC5LW8WE5C4YBA6Gzeoaz2SHchMCbE6yYF5YF1tsG4NmRsRYZQKtBxYqyTWPaTa",
  "key31": "2qSqiQ986ThpvRk7PufBBRMBisrsjXyxoxRFvrqbG4zYJxLpcfEiZyXuKa3WmXcJ2ki7Ka2mPXYdsrGwnJ3ZbH2k",
  "key32": "5AuAwmS96ZRYWkYUDLXXFCJYoKafM2kxzAtDyxgS4F8RpVUE7koMsitL9BXJoPNy3qckLvitWMJTmoXFfWkyjh2",
  "key33": "628Yht6kj5Y976aNZmrJiZ7nZYaNLsmgQsmEepBUPso3HpC3Do1HoAvKHhohTYg8qESYWYVL9vbDnJpwr9gYEgF6",
  "key34": "5Kq1zYfm5rGiQf6bjotXLPe6ncbX4EpqmFb6ikXXuPDm5THssfoLt72yyk2KCDSGiYxUJ7bZSJn6pfajAXLgmpZR",
  "key35": "jkcJ7hB7tnRjm5hodJtEViCYc6qSmpkSx91W7e5R4w8UbCT9UyaWiYuGvoFGmLTB3XwNRvknJR38nijPdZ3axVo",
  "key36": "4cCNNzQyAVW3Mxw6LpiNJdMEJoTakaBcS1X7ynM5AJg297CW3qLBv1HWs9yfVyaxjJCkXqwRuYpaw8x1CZWd9viM",
  "key37": "4M5Ets9fXB41KXsU51zPWkTfXXjLP1FtwrdF92Sobq2fKkuzDTM6MGKH6nrZRN41QW9js4v7WRvSXqrJeVbjqjAC",
  "key38": "5Z3hutMXU8BqoYu2Ye3iSUVsMhKWwsHskaNZVi2BGBhBQtVKu3rgf6rfAXhERSgikjfuywpYpy84E6f1hLk1G254",
  "key39": "3AULFyT3NUjzyNVHKyANskE2BW8Htun1kUUuMqmCr8QQX266byK4rgcuDeYm922WNTqqLMkY9qpq4Z6ZXZMub7NS",
  "key40": "3pGtXZH8TLi9iS87NUZnUKnR3U4YEyMWNnTP1YYMSeytuUZ31D2sJ7WKAYev49jRRzECAuCNM71W8gD5U6MAczCT",
  "key41": "3kcYc6iUEZYauwcK1iKjS836aUCHdfG4WBCUKB4vbJEbXiDHbxgiRS7YTzY9926vn8Baow6SdGvi1JeuZXWbbeDj",
  "key42": "59qj9dxDSKhofBB9GpUyBuEYxRsj7aP55dzk8WoaYxGCWqSb2WpR6ueFVqGAut6jBfjosCEWzBdmoBWe1cDEgxxU",
  "key43": "2DBoW3LFgmwrzSpLq45ipApULu1UxN73cHWQ9YGDC4RmNWxFgDPQ6emdsnXQhSb8ovcvEtLUfBNEgTkNQuJJ7FKJ",
  "key44": "5714emRaaWo5qjY5g3Tn2i87tEWCUxZB9ftvuhKUyGtpsVvV6dxzko8amduJtuwEHkkXYEAHNHMkzcRgUEEfMy3c",
  "key45": "59fEnStrbisDRuz8bt5EZdykUr91et1M28AnErziG9Sz3yFhEJ7gZyC8xHVPtKSWCPTokyZStSJEYBWBhu8s5Y2w",
  "key46": "4rVPFPSTzqkxN6qSyEkJxEkujPynhEYKHsZv2TFZKXV72ju8o9RwoAkLf5JdJ3yzCWQDZXc9NCwL3tpEKCSrg2KN",
  "key47": "388fC2ZXM5PRmmvSta9d5WxywES3NJqyRY4g5A9MdiWHZaoYSQKb1JpKpdXfxnaYweBv8ouSgPyAjdhhXTRwKi2P"
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
