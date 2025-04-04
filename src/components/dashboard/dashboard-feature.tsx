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
    "4A9goVaaGf2L5t5mrMAAd57MVuT4DDXN6eRKXEnG3QoyFk7WPX62L75eLeE2f8TaQ7mvXtdcnnAx5NSwoFGesjh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MgHHSFtuQ29uYkE2SZaF32P93emoQbzVV4xJ6juYPTXtVgd7DRC5ahntKfPX9w1KHbTwRfeZyexuaVVkVXcZcpv",
  "key1": "3nmqk7R6NUDs77pkHykTM17mi6N8h7vHk3Tm8XH2A1SJrT2ESA4aTjEHjhZd95SgQPoSkbC3nsWNozMsU6w2pFyn",
  "key2": "3UkbuhAJAWhHY7ez7ntV5ZkR1BQDmNVZNaAfVMLpBVVagsWhv4SUf4HHGeyJSwxRnEXTEGWmhwSvbidmaA8NAVvG",
  "key3": "4H9DMYgPEfU4jmtfZUmHKUu1rvJJuRZuH9Sx6szVh6PEVpYfJc8kBRYaC9cNMr1c3K4wGGC4mALfQE3XDCJQHH12",
  "key4": "3ReEnV8fKBMNXYkUVE4sQsrcejFaxuwUo9czLgiycL7TybfwSSjRaU1SBwz1xwAtv8DB1dPJG5KZLGgfmbvVrWJB",
  "key5": "f25Bp2aeet59VXRfyWd2Kejy9hfpAeYnu569XPQ3xLstqCU8wWATyge6Xiv21Mk6XM7NMVvze8HdZ3Uh4f5yuKH",
  "key6": "3ZBZX9gJvfA2bZjZPW9hvhAXhN6tbhnnuCRaWtZx5bvuWYyLG3vhNX6ahFos4JqJkB9mEAPCTWgehgpgiwN7DBBi",
  "key7": "2mpGvaz12FhtX264tYuJXMP1EfnwEpwqCeQ4b882TsYg5B38wfpQyseQAg3i52nLHQZ9NDGqKvu78MLmAbHccG5X",
  "key8": "eFJeoiNMiyj7uXB2RG2owF61cAVhfjCpMC8yj9hAGWRy19TzJg5muwGvps2BoAkWvqszkM75tiQnc4dDYdF2E39",
  "key9": "57mtR6ax6dexEBWFYzb6qmAp5j2UpB9aD1fPLjZ6umHb4jqEQWBhPihB2vV1FswqzN2TnuM6KBdUyUV54khKZTa2",
  "key10": "2Qu14qCr7fHoJz8D3eng2PVfJiUMiB54ZnLPFFfEARGCsP3rcutmhVo3pfHLv7E2KkLdCTZX73WMnAmPZqvebrj1",
  "key11": "3CMbSmi3RQqHALH5K2ENjGwJmdWvEgDAmaCzvbhx5mbwfJoJPPPatyRh2rZ8r3LbVoVTbhR1jSqBrihmSXGJGDxo",
  "key12": "4LXk4UvZPNBk2gaNZjtmK5Yf3BwcyR6LTKqQWVuqDx18YuovW5DR9rJsRbDfNKwSPFiLfL3jwJJHWaMC82kNsmjd",
  "key13": "3rTh1UvcdnDUq7ZLb1WV1JyWqU65NxQLZkqxfErDDSfQc37GRM9w9sqP3vSJSjVdsiqMu91iZheexZnq2Ek5VELh",
  "key14": "4mWzuoc6z2gbFMvbrwHSj3jjkuJ5Gd5AeP6UunJZvr5dXxfGMaNV7PaAcTMYf8aC5kLhTzexhS4ufH3Hf562dnJ",
  "key15": "56yrSXDRxEo6h6gH4hneM72MMHEk5XAL3LVqBtkLrcKtjF68XpePzfg7KKP3hgfniNmQr1azd6cw5HBu4CjvaXE7",
  "key16": "5ujnocGRKyYSFUnC6c5EBeiVFfvLA8jXebC2WQPNFkwPgq3MgAZpp55sEQqDigGANZirGA1krhQMmw7L8tbKe4ZL",
  "key17": "5xpUYzb9guUTa8uaFNdPqvBzTgjkxkKZsa2Who4SbEVmHUps2oQ2eFek7b47YzgqYzmfD7Pmwi3bT9Yw7Z9j8mgX",
  "key18": "65JXkPG635VQwbv8B7Yet4d5gpxsGnGmHXT8oj2qSLpfPD1YXAoZeAMMF6Ndim5tdwordSbDrSxdDYVS9yQgB18w",
  "key19": "59T6TeXC3ru8ECoy2BUpd5xQrZEkqHaujBCvRUPeAmBEc3LL1ynBVhsKfZo8DZStZNyzLEZRWjbTpMpiKoMTYB2R",
  "key20": "B8Gvu2MFK2aSpQWJApA6VbjY4M6Sf4WL27SnTVCsVCg9UkLzLbWr8b3LMRyWmycRroXSG7LgMTAqkFmJMnf3gKM",
  "key21": "4guvi925EisNDf3qxGMmHSzmrpjA7i5JKBqHqT8W1Zoqaz4XfQocVJFqSgi4G3SdYpyPjuf1gmrCFpCESnRAG9it",
  "key22": "3kyEXzw63cUWhDuSTUWkA2Fg3FX2MTHnkZVzQtbEBrWBGjigsKdwdv3ezSZH6N4qbqwTKeoyewNpE3X5rUuwc7Le",
  "key23": "5SfAfTZA22V6j8yv2EpdAwHucVRSnC3Y36PeG2Py9eVx6tHy71n4nursnvqEa3ohPB56D1NcwsFMvRAxGjXzZCLt",
  "key24": "4DNTnz6xnAq3tUTyYDSWbcoANJNZhsHCTrdUbzFKqCM3jmQ9dJgBbjAnyFUTyfvFVftQa82HtnDbKcHNuN2vnSFi",
  "key25": "4PWrrsd9Hb6uEUjLrAdsAP1xy2YNgcUtsZgHKSvwmui6MLeEa5Qhb6vZwf3SmwTaZsR3RHRLkBgMapu6tqpSoT6",
  "key26": "2WWQNaN9mWEneAHU4WdNSsYBz2HVAjcfndpV6zYfudCHgtNnRLSezSgMJUhUDaUC7EsQ7GzTq4ezZxdDhaWdaUqv",
  "key27": "2Q3rNKPAgNSCyF4h5vFBSrGPxbumDDRrMH1VTjLgE1sRpKrjTfnWS4NWurhGXRWtcfrKJQSH6wwKnthWxro59Bzb",
  "key28": "3wxoUmtSncEDtaEUZpZDKnpDuKQjqaGGkKabdKUfdLZ3tugL3Mhgvadv3PyDcFz9hTLkHTxXXvVb6uw5ktuBFGeE",
  "key29": "38ZvLTpDszpeYVm6AZgqZ4w2WSg3JG7bfS13hjQ4MCgzXYN6ssYx6mRmGWE3eVvEWRjoDGu9H5cKavhhz6PPsRhj",
  "key30": "LZ7pFiPCZPzs9dvn6gABEWgGpUZh5bQcp3vJhYwSddREEGs1zoxwuxuLJUvxXfu86dc9iAtztpEXceMFo3jcvVT",
  "key31": "v6J6cTS9gdqf6xKYNpq66nVutKUQpUbfKvkPvNnsnsAsZkkfFNK53SDDcq1KgPH6sJxdD5ZpUNcBsG7ayfBZej4",
  "key32": "5mxfBot3QAYouwQcq42njcVsYp2N96ZRfbmNaoEs2AsrJFLwvmfc2VENtNUdsZ6ii6anHoqVDStCR9cxLeCg3RgL",
  "key33": "s1LFgc9YrsFNQLuZdu3xjeQ1tfbK4mSC8fga69nLuzxgQhEKNARv2nXBDp8t26RpDMkFm8KRZQ9Cwwyok1KvePZ",
  "key34": "3BQaHFD8VF68LRGwHNovsmNGgsqVNbnmTHhxvE9C1W1WpaGxCXZR65mSzNmSzdtmY3Qyir2e4gW6jTA5dEVNjfo6",
  "key35": "2R9U57mBBBqh9vcsuf6uD5cpLWnVDhVzcAn5VnoJfqiDivq1uuCsyvh8YrgWNbcZYGgzGfNJ4ZBAYMbJiQZfwX8Q",
  "key36": "5ydLoJhJNE1NBB16uL3CDx1qWZPqMv3ACuhcDArtzbMgfNxTZ8MieYcPmaRwfopGmeMUFnim9aVnhdW84n68Rbto",
  "key37": "AJz1SVGr9qymxN6Ysya7YUv52oz4EA9M1ZByJA3d9WCdjDYZN5nTKM8WgyuYR4rUo789uAXnrhMriQ5MP8Sw3MH",
  "key38": "ruBTtVDkXr8RwNhrSiG3LVPqDSSF5XeMiEZim3XuzmKtPgt3yRf6mDuisttffVGJjDrj3QPfBaPdkcmuyxmLvAk",
  "key39": "29m5mMuRddfabCX2p4e7k8SYHqRvrDJsGe5zhrTeVou3syiFuzkAq1bv39CqyBjGMM9QMKUu7bbsr3Vv2uxMB1Yd",
  "key40": "5pxUh8NCDzLCXK2DZJbiXXyTQX58iVemGxtZt1W5vsy8oXHpWdENt7tDrvn1j5fGJUtzScHXwHGiwLsCpWm1wC3u",
  "key41": "2m9uMZTYUBi1PKCNWZwKkAr5xzCK4FUi4Z2YeMQvRySeyRsoJNy3joStTNvUPdhhpFQzkY1PNyeVrfapyMyx6K2N",
  "key42": "5gCHu4sS8aYfqTqZqC7hvPoe46AnCCC3qFu9YGvbfXFCBj5et3JZyqqEWiKFE4kS9KuZtPaKYdfDpWf6kCvqhviv",
  "key43": "7nBRmm9Bj8UdbyoLx7wGYzH6n8qHzF3S6LhL8SqCH2SihacHAaeit9NCXgXMRZxJB3yBFo6jtPLPMwAgoMPc3Rk",
  "key44": "2AiBPjh1gjjS1YtRPPr2vk64uPXFYQ5WnacqwzGDhGYMCGy8ykVfzyqQ9wYz6r2B922HxZhUPXKMJpebDvh3herM",
  "key45": "1U2WZ2Qw4HuTdLnbz2UpRWDCj4UBQHs4nki59JS7PXAynt7F3gZHZMLFdpLZXqsmusqBKG95dfJ4K1nb6zuQggT",
  "key46": "5WyDumb7HSsKJkudoL7F4yADcKe7GPk5C8DUtSV4G8MtowuktNzL2279omyQPEuGBF5oe2q1UCgsCqDYrgo3STBc",
  "key47": "57UbEGqDwsDSZYhv6rbpjwRytQYY6yKdRTYyFvDYt1p7Qrupjky2wjzhV4okTH2BDrQV9okoeeVT4dDqCbCM5N2s"
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
