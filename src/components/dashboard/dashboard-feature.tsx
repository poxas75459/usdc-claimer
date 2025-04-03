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
    "5XmHfig1GYzrjX45uSpfqimirEioVsZCtaBxMbCDUe3uGM5Wa9GbwzwpbpCED24RyuPfv2ypEuXCjSp2DCybeUxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pRK467T3DYQM95UWMzkzdtfjU1kppcZMSEeppZU6WiU9og1t9DJ7gTM5PhUtxoe7U6DohD7VHX8YcoFtzMoz4wH",
  "key1": "5UqqzcmpJBMoDR83DtnxLGhVppYFDU1zpghTMuUDPdduZ8cr9PTUY6cbqNfCWC5DCHeq91gMnsDH6SRUaaLq6p6K",
  "key2": "2smq2z4oBgsQJJdDWnQf6EXWj6VrNrpqWvBXu2SeyCNKHKGYKecsX2mNshe2ChsYzorsVHj7kdysSVARU5Bw5y8Q",
  "key3": "MBib41Uen2ebsVJXs37ZXapqMkFt6vQzoRckthuzSmHreywCAXk3yeedaj3oA7jBg18ViRi7GjC4D7cn3fqt31F",
  "key4": "amnqCELZegSpRVT1uddEyxYj8siRiLRgdw59ZRg6dqGHurMVttKci6aQxoAuaGbT5zCRtj3xtT1Bhc9rd8dSZne",
  "key5": "5py2DYWwXFD5nR9DWizvjSa3X2C3SagVnNj8AkQBH3XWgVwrppqV1ShwC6nwTZJYY6D34mAemBv8ePVtMirnuDWW",
  "key6": "4hD3ab1sw3rjDgUsLDCM4wYBiKYN93V16aJfi3DzDzSfbjnrfZaZ2nKANiDNjEJw9LLz8V3gwvR3Yt9PBHkR9RCg",
  "key7": "2bCbPu16P3zR7vByCCHAkLQFUnwyLcyJM7mqgNNSreUxEJUaas7Ccvb6RAv4hQiDJE3CUySHwP1ELXVPWnYCysZ1",
  "key8": "3NaxBxLUo3fijy7yx96YkNMaEeUQMiXsYJTdLMmLVt5wEH8Bbe6E6b7K2LWRAri8WFnBjdHPBemnrxf28R4PKKSs",
  "key9": "nV9zHABketvBQyHc3UB78y9YQksGX56Ffmroi8CN3WJpQsfFFC1Jwk4S1XhHsTsLjzcCusQ9TcHzyWogc7R2kfc",
  "key10": "4bXK8UVxjCPCJcUF8EMAh1KnrGLTMt9YRm58wxTFAafStUurCgt85Et7CwamqKPUAaAfUNpVdBa8yGMpWqbteGfe",
  "key11": "61jaoE8EannRrEeeebY3vzf3zioGwnZb4T2JbUvYmwwLkZYEBE1UhJuWcWGJsmBEmqYeCoXPSovb429Eg1FS7H6S",
  "key12": "48bHsG8sPWku84XJWDW4P6KHsuc889iXdKBvJK4VSBDejD9U4ag6pMjnHWA4mHz3LQNsVPDEJzab7MWYJ8nnBjUD",
  "key13": "GxhYMYU9XMRT8Zx3QdZ5UELHVQgp6yGyW1f6CenDVGuoeygj6RQwssRjhMrXvsEbCUr6rmnXWmaXY8ahyYwAyno",
  "key14": "3XKogbmrKgUXmM6qRq8YJnFhzpPVbCq8TrGRZm9CZsmTvZZ5Cf5Mvuihvh8ChWJmnhepfFYd6m5DtMWxnp8SAMU4",
  "key15": "4FZB2yZpKR6BBiPw83eENFgYjmQBmgunqFtt3VdeieTtocKyZkGBJgTsg8QXsuv1xnUzh7TgUZZKrwTh922KaNak",
  "key16": "87h7gjcb3HJC9WSUchfumtrAXK8qwiYGvmskcwURxQijdDQYZD5xtuRFCxoNGPswWnyBMTup3C1Z3ZpHGYAo5Nx",
  "key17": "PgURyZpNrCn51jCJqjSTbZhLGvWMNY4Dp8YUberEt7SGpvua6gVXpZSujoCSx34EfR4xcoJGw75HBCSSyZVsmGX",
  "key18": "2Q38kSZ9vtfjhJeRmZi3Fb45SJjVESfHLs3xhgFHADSjyy6Epw12ExTq9rM4yVmjxFU18AeeDpUSdA1EQxiGZPvg",
  "key19": "ppTCmDChV7AvY8g1PE5KYCPTf3dSYn1Qri7rJyFGdnpBR3hbsoM1pqWhv6eCpHiiWi941qYHQfLcJY3ju77Ho2a",
  "key20": "59VpMzhcDLHK47vovMTvwSdgchidPYwqvZwU72nBsSmm7CMzVm74qkrZg9cNha4SSa1nGR1fLcLi5RqW2VzsoA6H",
  "key21": "4YKBsAan2PcAXFmff83Zx5MVNvYRnY1ZYmmawYbYNGwEr23ZGu7Jq9J5WbicpaE4X5TzFsEgZqGwKhuPRJQht6k2",
  "key22": "3kGbdJ67cLvW334utUTSYnK2X6atC7LHwVWf1YF4af4PMLU9ptkZhKTBTBVTtjt6pgJ3LpC696Dv5BiNQdTDbKJB",
  "key23": "4PLH1b3U5w8TBedB46Dd1dSVayLMNB5RVVrXCm1pGFeWYTYvinzNCkpHdFyVHt6fd9KSdHWYSaYrhoamVkEw8iSH",
  "key24": "42J2RGSxE6pthUWyiWLnPvUaaaJqvwC8Wd1ncKisFoYmMNo1uHqCAM1NyNq586zYoibVjrS9kVuWLtMfjjQGq8DD",
  "key25": "5Nrketgf2reFyx5exPErTcDs6XHqZphPspi9QKkZhjpmf8Hoh6AGcfXqUeW6YuComxh1kPDiPcbYEj9CmxS234ZR",
  "key26": "3bVY9ovT5UPEZimvrzAAEHvZfPM9uHtzfXP969W6Pfrt1gtag7iTqBdc3JHkd3p8E4Y5rz6p3r9yKBycFRJTybJm",
  "key27": "3wzAECtBhMwxDDvAY5x52h8spyaLpRgukKwkVK83Ps1JQDCWmbDVMaQoLLErvduFfV8Z4ZZofNYvKRuuwPkBcUbF",
  "key28": "vJdstcNqDKh9on8vUsWHqG2BpPFQKqq5ZhYM6RuSTHttntg51jVjMqsvoRxX8euFses5jLjAWyDrtkjgxWiDw1W",
  "key29": "3Rurgav1R2MwycfnH2TJMKMTE31hfD43TL5hbZD48ACGkaHpUzYSdFBHspXsrKxguazFXVg7CqFpFPohRu12Y9cN",
  "key30": "xeoQAnosRmJDpSkcmNRLn5aMpPtZZNzhRBM6p5mc6WwhTTrwX1L2VAbg6mCX8wGvrDqjbv19PFtr46zCULvv8y4",
  "key31": "5Sa5u8GTyx8AutmQYvgU3Jty8iFcwDxC7J51DEc1muRNNdvVh7qtJvD2pKhSyrJ7GKfqDwKR3yApGyff4WkioPnL",
  "key32": "5zZp6g3aReL3w7JtbE2PMe1T7FJihJXgYbwJC5xVCmBSyrqUqPkuSW742ixZmjrMKr7txoxevQUJQRqbGeWd4WTv",
  "key33": "3kePTUYsysHDhEQm4EfC8oPtgKvCDkyyC98uysuoTcyn9i7MkehQ4MR3qmkHPCiwZT9WUjE5qwdhEPnw27jixGoh",
  "key34": "4FyrhJKqSJjVVwEMthU9RPk7N4U83m6DNAR5hutaD4S2K3pVGWaitg1kpDzVPRomzihQ6PEUwMh39ZYNWUBYaTab",
  "key35": "LwZKBSthnP1BHsMpDYaXDSMcTpDMvchJV9ywhhiDxhXVXuNZrbJgvWEdHYFb5hzxC8NBR68PZYyUNmdSDZN2gkB",
  "key36": "5N4fAPC9tRQh3C9srz9kwd9mwCrh8wTfoThNjswc7yYYBv574weBoSZBL1FQB79AuGevcm5omtipAGuKrX4cqoU",
  "key37": "2Ly8pSNJRCEvBSJHH1PRVx4VAt4P1oynKMDgoMWiUSeyBz4hSx6mu5QqLeeFKEQnLbsx5dxKoHMCKKLsm4i2mUE3",
  "key38": "3jgbEDQwJcBvh7D5PpTFX3dyooNpdguiivCsp4nJAFJgMUG6WU4BLMT5ixhyjceCQ6RrPNSACyPcWhhqSnvdhS1D",
  "key39": "4w7Kd5CyiebnYLRUUoFjiCBARp4nuzHXooKbBu9Dzd8j1wJmtuGGkEaD35emEvo1uEJiu6qsSoyjRuvjRni1CaSa",
  "key40": "2uVE7AwRq2AQdVc4HEVdBW4XnEsNDLXWTvyx1tw64hiyaUyamHHg2KCns6a4xmLzV3DFDqRPXnBAAYYSLagEBjUA",
  "key41": "3SdWH39ohj7j1GtEKTLCbnzEFu7pTpYPteTMcsUNR8s8AM4AEZW3NB6PTwBq3UiB21T8zyQYhTuF8usGJtBXtbf2",
  "key42": "3Nfj6vLEuSa3xs3DzKvBZmijrywhEkWjM64KFvSBDu7QHC2aNJck2ESMC6owfAwo7Ug1Th3RC3qENbF1GA8VSVuT",
  "key43": "5Jcd8fm9TMJhPnxJN6ErsJzaX6G9ht6vmLJHfmGhN7LaRZ8J1QdrVkHf15SjoiZNiTC1BYH6Hff5PLA5gf9zRYzj",
  "key44": "3VxwP6WKqWGdg11UiDyj8xjvA1WE7ZimAX6Tb7XMtjeijvKDwJBb38J97WvF8WLFAZpDGkkZq7VirVtBPMTbSVkd",
  "key45": "21DGjfHiNtmjWkWZA9kB4JHRWYTNi13csPo6E7f39YiZj4mRYGwWpAgtx2zRHoUZPLdDxpME4YkzXHT6EHDtRdon"
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
