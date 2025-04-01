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
    "5aSahXWRRqiECFTaCq9d1GvVazq1DZMTNte1fepb1bCeP3enhXmG4Jb4TRxUwaWyWzodcv3bfWfQAazoRvifTq8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mjmv5tf63LHXynhabtvrgECE7kTZRVCVDmquBA9dF7YtGv9ZjUZ26sByaHMK3X8qkcTr6Fm9bsho1HrfoYkB5A8",
  "key1": "4rLwiDPepu7iJih7LmTyupagJdcqctnPDucX81m8CJiZogTBLYLPgV3zcuP5EWtN2MDeK5Yudic8Z1ui56DnuWnw",
  "key2": "3kKsFZy8tyy8Ayi53xPVFwL5GXA8e22yXnsgqAFDgZ6mbs5N4wjrGzGN8NsUZpWwmvppKCnYbNRrt3bT6GjFNQS1",
  "key3": "5L4sNmUA4FzfveULZHt6yisyQi2u32CGbKGEiWKvncPhJZNSoCsw1A5oRveR8ZpnR12damvnkcuFxGd3iziqGcuq",
  "key4": "5Xp1H5ZKpqeJC3dx2HbzLzfop3hzKKoSAnkhjfoqDya1NSk33aKK8YLVBmQSBDtswbN7Ee3Kwvkg2x2Hpm8wo18y",
  "key5": "5Nv7hGS93H8kwkS7ow9dLdJ9enLDyfkof4VtAt1zJwAVvCYe4KhazSdACabFWqWTm8TS1HHQLTCySL331JAapawN",
  "key6": "497RgS3uqdnuoy2o5RQnsyh31ctzXfJYMxdi5ifQNMzSFCmgHa7bseFZwrXaehAUyhqSWmin9fcwGm2zdQBXcbUz",
  "key7": "5w4c3hqHEiVYM6kyJpv2KQXm78ASQbKS9uvVMbE2wmm3HcZixArTv7cQbG9yULzpZCFuRPsoXypreMJeL9j7mapw",
  "key8": "5kuBxuRQiL1mXrqHWGo2FdU9AhykMr6eSbde3Syw6ZoWTLJY6hxmMW9D4oAkeFQ4KknsCCRsftwsZSsV5yXzaDdR",
  "key9": "4J1AnYNht7PufgQ6Wptae6zsPAa6iJkMf9FmkZYG51PTLxtQanJtd1Tf4kamnpJe1XZ4jQqJRre3GnnqPvSfqcK4",
  "key10": "4eesusm6DWrAxTB1VFcmHqky5JEfL27WYscgbdATvpDxzsW7KkNUCWFZ5K6gh7LhSKtQd265JbuiXHXf9FidKD37",
  "key11": "2GWjTvdwR8DYCL2Uk6EMhMpWFjBnaicc5Zck12sp4Rnfj5octRYwHDeaf6woNU1NkM5r66HJZTDMCn2CkUQwUHah",
  "key12": "2SJctZ2KTgFCdGYrGv4meEVofTxungMr3N6mbp9LnnChSR1qJSjYS36rytWRiTP3kLQ7Mrtd9KJztXDKksH5352z",
  "key13": "249zxXfrnwmAPEZGsQ6UDeDTiCF6LCRrEi486fKHubaL9f5gQzVNpFVstg5G5GA5zRFJ7C2JsoE7xhi1cZHzTTde",
  "key14": "4Rb5mDobPmCBtiegzK3otSkrth9Q61k5xpaoTUr4vQNdpJ1PXjcmyWP6RAfrkgg9cjfD6hkYopXhk3qdZQEASYU7",
  "key15": "2eGfxLM65xdgs6fgSpmEs8ibXgneeV9B52XGvgVhi6J5TuxoQFahp1kpFnwQkvstNGkD9TN2yhPvkVPoarY8VyCJ",
  "key16": "5tpJy2haYxoNEQqPvQGGK5A7kkAm7gHJbWiTimLEdAKPPFsHQGM32MN7s9Dcq86wVP8tD66CraXhzRQhkQ5tP9Gf",
  "key17": "3M5VggPJbbuAaYcGd5cFihT6mMUHrAdVbCAvaoW3KWQKoBbgRfYgD7FAFCrYygsFbsv6uSiuNkVJ5ieDZAwMSv8E",
  "key18": "5849qVXwsELowii1d9BeJtDc9N8GCzMAzWWvKTacmSWX45RLnJMvrAxKSMykhXfgdy4pC9uHaiqh2JDtXxUumHhq",
  "key19": "deU6cyxAu5AcKdzBhukW2FjeB9JXdxh6v6m5XvjhdeThqBL7By69mW5wH8ikfHzS4cBu4YwWoUnLohqgQRuKYcQ",
  "key20": "yx6iDTcJgwih6FETLzGxrY6GsxhHYwhfENrGZUyobe1M2GuzH8PhnX8oHKePDbTexnMkECfLkf15iXTwzQNkJZ7",
  "key21": "2rE753YUJ4wsXqK89LJJN3tWVvYaNCPU3NEbnBhNS1DhXSkhtuHJ4q2zybcmkUYoRg9NEivyX4y1LXtaXuL2qpgQ",
  "key22": "2Hc98kYTUTmDdWEraMPgbMPqafezNFez1AXoD4xvpspBTVsJRbNWriih3GHy6RnPpiwvZJwBYU5A4HowWDJrRXya",
  "key23": "DChaQnQD4AS8s6yKXUDfd1EHVpqYgW86Fha8eFWBZEhpa4MKc6mTTASvn4QduT3Ko1PGRQ84RJY3uvZWqg4gCeR",
  "key24": "2JqUw2bmj89ezPdLtQGbf8NWnu1zfdQvGnz1ukZR6fXNM5mLb3JtFX1CnWhpuuNg1dnAwUpdFn26e1d4XC8F1HML",
  "key25": "8k7YQNHXViLuW84QpiMriZQewuVJQaXL9EdBhGdJNUQWbrUozXZQWxWzG2XjssPNKcDzisXFUgqiUaZ5epPtKeQ",
  "key26": "5WM6FU4azYeEKuhmjaPnxcc23dv7QoQYS3tY5WqPjcUmag4kw61qtJt2T2MCQwQQrqKcMuJuWred5nJMw5CcBbTN",
  "key27": "3gcFkLqxWq7cHMobUTg1SauTh5bm2KyCo95kaJzn9eD2Cqu6PGVgB6EtwiwsZZdqH6q7o5SRhaoVHWiHUGyeRPvD",
  "key28": "4twyZnF8a3hkUJy7wVFWFqPyBF5rMyHR3HjbVGjSVQoa1fXGP1CxQYcuiC73ENudfMe76ZgnvLMMsbAt7vFc7Wxs",
  "key29": "TQjCVK7v9tdQdLairXDNynZ8WxNCetFq9HzDEdkZsn2uQbr8ang6SphqodWKtjx53NPkGCMHTjALriZfiRjSa52",
  "key30": "ZdXjvXJiWyLLUWJSth3UGifBZd2dYjqn5eDhDG55xE7f27sR4amZz4HCM5WR4aJsKpqD9j74BJ6WmL9VzmNjTQU",
  "key31": "42iNZxsYSYmWfh7124ismBdMjM2necToRssTZtUpzNprZ4Hm76Lz9mdAg37eAu78uMcafr9fipWpYCA5doPGbpzJ",
  "key32": "5MRFiESZ4gVaGzZVGPdFv2hHo3K9Ct1SrV7tfk4J2adyTih8h9pPJ6SPrD47wD8FYrGdFcaaon4i9NoXPVKUPzEZ",
  "key33": "2QyKu8TBuBTJgW5szy7r62hmuZYsywwx8wEbZFpmnhakptwJUPaU3UR5NiKdnZv7ge15T9VTTKHocjNcs9uxRsfs",
  "key34": "22G1MfUFWHDT9VE7Nru6NGSJBPH7M9iNTwS7YXdDKGHA3YXMV4C4PUFrnZZp6EzSBnnBjgbfkJGjegY7oeJacJBn",
  "key35": "vKy24tAuLuyknSDt3UJqdLA9A7siPbKV1soaDmNnPhrnUe3d3xBQjaenvcDb36p7GhY96DimMUzYJiHaY18LCBw",
  "key36": "3tw3aEzrwUih8LypW5jBGaBhR5Y8xc3SfNZTa75LFi4XKsfB8WzLxRuyoRLU4kh4PGErLtx6qtks2hQSMCxDfGRq",
  "key37": "4daBZ7zaQG7kkS42fruga9t8iBkcfRLaYtbthVhFU9dxBfcsip681xPKFYXRbai9jjxPvDHDQ8BJ67ZxspWohGH",
  "key38": "4xLFVwZKGzKHaM3yA8gBRUE84rSuvohqAX4n9nfvqTuyQ9gyUdkrwR6XrvMKChoWpnoGS3movVwsCrQvYM5Cr6FJ",
  "key39": "3rD8CKBopWXZajWDJLzb98zaPs5tJN3z6iis7jQUc39vGwyDfMoPApSKeQYzQwAi6pVnStTjUzza6UwHKhKXz1Ms",
  "key40": "5MZYi84AvL8ihgwtWw7xBeh2UfDhdhh3YyppDC9aV3u5zisGcXML41veDp8Cwfa65QuK8Vo75bykBCH9xXfsnbUu",
  "key41": "4MVGvCuauguokB1K9JUphZaobn6wKjPoAa5JUACjeck5jq518LmQG66wY9Tb5iBGUTqi2kwYd52cJD2Uym39KoLA",
  "key42": "4KEXc5CkujBA1Jtc7bDqLXbgz3UXBziVq9Q8Voz2yjS6Uif8Cx4Frq9ekyA3qxQUtdtagJiwjW4NAWPpydH1b3YG",
  "key43": "5K2sUtcN5DwqDLjT6PT3FSFeuCjZVAFfpZAN5fqZSdCKn8qDybbXd9LCEJJ6uDX25xYEmxseSdRza8rYvmc2rdNo",
  "key44": "2vJhj7ygjnQBmyv8qqo9zvpQP3P96BVvaG3cCjjnT17hSjtyLUt9BfmtSpi9LvcwiwdybDf7jD3qUCSr9KvR27KB",
  "key45": "336QEoANKPWMiVmL8SeKMsKhYdJbdjPrt5zRo3ReNhWRb1jasmkrZVjMzG42Mf1mMa8fTJWJkxHbRGrLvuNXjKpf",
  "key46": "4sCc6ijH38fbAx3173wwGraD2RNjDWc3XWxgJ77mBHdjnRx9NTdLk4t3xvAeVuyyjmwCTikL52KkzzSV5rz8umny",
  "key47": "5xatJa56Qr6RCcXHe38icA3mhCdBCYkXh8KXV1aQimqsfvLTEr6QJa9D2YzKVD4vSfVjDHrHVZ4VmCPDPnduz1im"
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
