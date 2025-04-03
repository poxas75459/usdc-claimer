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
    "2MbSwt97Mvfoj7AFHkrpHcApyBBpydZnnfPonn1Z7buqRTCQBWi9D2eQuym8k7188h9sNnAjoX9LkXRdCG4mKFPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FjYxfiHg4Z2kZwjdRX4veTmxHHcpB42HBex4n9a8DQbWUkR36shbh3ZuSKbvaqx6HcKAwzALD4TR8JvWL5wCsRx",
  "key1": "2QoCGiaHVprzeEParK9mUvFmU9TRyzbedGDw99CBNPrxKK2TWyGEduFex3KEbdnRGUEdAjuvdqMCSTep3AEpGMMw",
  "key2": "if7aZtZ7xh3xwxvf7z9NnCiugFSEznX7UXj3gk3GVNFtBdA5Xp5zMRHr7U9JBcPUaY5d2Nz7fnsYUDA4VLfrQdr",
  "key3": "2kxpdGESwzuXyDUTfe8n5BZAAWFZgNvRzLphFKcGPsKwMe154hosCqTFtU1bG1KJeiBsSVBgmcGoDtv4u4gALMXz",
  "key4": "4yPUNnKQysKxDABUakpha7XLB2A8NY46WQ3fDGwt1jgFE6nerYBYVL8PLdrJT7FRLhH3Kryc4Zh4LQuZNWcTeG4K",
  "key5": "5DVEKMDmWnbzUcyG2fjhDEBKH81yCrWvEquFFbsofWZ9QGYYymEiiAxixrLA4xiZ5SbhbxJQX7EH2L5zZ8gndZaj",
  "key6": "4XxcZ4t5ymWjQFuBZpjQHPEcpmeHnX9JMJ6zvKg9PBH9R6YePovQufDB1U5SEMxRbwPpNgJLHd2qKNg9wxFgfYEt",
  "key7": "Xu4FdUiBeiGXtNGuxQDBrx7yETuf4T7kYFqfsMXT6z6bSen5VDij597PrYZjxP77FEwHWRx7ifP4CTG4H7NvwCg",
  "key8": "5Gvk1TMZC5aTEHUMXQEd9n65tEh7RPN69sAoETDM792rHa35RCqnWnUS8es3aSiXos1Nr7452wno2rmedBZHQSkE",
  "key9": "5nKra6wkdXiuaWDh2tahHDX37oGmtpasuyF2kU99TWNMiD7JH4WKiwYqdiJ57su6eJPd2nKtozNYYSxgkiygvpL7",
  "key10": "53Ejd6cfPrC6pEhHA21PbdstswbjXPYPDvcD4PYtZAyjc9UASNehLmJfdZoabXFJtXq7kKdUHjZywhBuFjLZVyfg",
  "key11": "aH45TjSpW11wAnDYLamwPwd8kH9xyhU57oSWpA8TSPgupgk8YPNbq2Nbpt4NKNuC72npwYBnHWBE4JSPqfN5jQS",
  "key12": "4J2PTMctZr1hj3NF6vLGu7PcEdYGM3f8cHxeZdg4ky6hCiNNBA1oEPZ2LMVfAxRL81YgtvTQiZg2zC8L7eycHhyB",
  "key13": "4xMpQdygaBjmo1RajfxjLswYQgAVNcnFgKt63dNbkcNtSzP1U1qY82v57Q17CQydxo6pVgBSDQB7UMDW898kjyQZ",
  "key14": "4JZ4G9vvuFyUgHS5XhhY5TMsQi5a9M1XrRCJw6Pemzb3JMwyPtnqTDmgrLYTnnciprvWo15oHj74xfwUTFjuiRdh",
  "key15": "5knQ5kg2jvyFsEHduKjr6P9ho6AEEdSm7sbvFjZdi1kebeVXq12j62yP2rShtWRnK8y6DxGKjnSGxzoEdQYicnmd",
  "key16": "3hFanPkpghqixr58qTr25UtaFJ167WVC7NHVgqDZKYQmBKLX4CZ9UMcRrYYiokyRit5hNVcBMHTEQibVsnNapJrv",
  "key17": "4amSBHSy1xsdKRtF87LAqMQLEZAgKPDoGzb8rAkxsNqRJ3LSnE878Xwejjxw7nayGg1J1nRrYrTwptWrAC56Yr9i",
  "key18": "3srJrKY9zzY4UkeWK1FicYjzrNYibYE9uoa7hqsuX3L6uSMT6vFdcLiD8zBSHaeGXyrsEHcyq9nEe8J9vkpm3XXh",
  "key19": "24nxvBTiXrswrnByYEdj418HDTmZrPhR8aWs1SHUyEiwiiVgmtam989Nk23iqiCGuo2efM1CBkbQVMKXTxSazn8R",
  "key20": "uc5aMD4FuAjE1yt4p3nAdnuyq8KNf9p5RP8vAznG7GeebXPhh6aLKo5w7oUPn8kvM5rjT7GKtt8gQQJX4Mnuuta",
  "key21": "4qvUphH3YCt1Za9LqmZj9EnaqayeDXrvhTwTGJSvt4a5zVbmGzaWr1w4YJ1j36K8uQ93qoV1bRtd3tnfVRmjQ6CL",
  "key22": "3rZQAZ23YKdiKZAWnzzYmKNYJi47pfKUUp4VrqKjy2QGFYNgfy8szdH4yGfJfa5aDW5ZyXeHZZsx4SP1FubJNE4v",
  "key23": "43Z4KPV2ARLdRXrCGBvWJE2WPQhMkjDZk9J7YotcpRpGHG6HuFfT8YVn3ogoZy5PYLLw6Kesv8rvgTR6grP9bxVW",
  "key24": "54Y8npPMJEyMJevj3kUK4HF8jLRCrKJeMyyWFzCDVcKTpQtJNC1wCiAZVZddA4wzdpkGvozpk2RaobkznsKAWiNT",
  "key25": "3wspr1JkjgRBBB12gPxcVhpbFoLK1UjKgSKt2rp4bVzeM5MRkKnkAM4DzFUJ7SJ8FYSNoUDs6Mmmv18FVRgdaoHv",
  "key26": "63Wvb4jubnFPEMdQzccjiTEtZQBLMZ7TeGtaZwNqHXAeov16KeG7wB55K6vFUjPZA9Hfir3DTCjUxxhd4uo1bDWS",
  "key27": "4ufqYHT5HJUaXz2G5CbYj6dYDsw4bHXjATSiBDzrLRcjhmF9tu78P2P6sBW5sgYMLxTo3cFPiLvno7KnQy5E6fjk",
  "key28": "4zZgNh9Zv8hRuFEeFJUrcr19aCpcTVPXATFjiYRJGH6T5JZBgxcnW8h5ospFXJcwRtdHpMZKVHbw8ra78HH84Gak",
  "key29": "5kVY6aX99sXrJ6pfFS9NxdxftbXpvPqQoRX1wb45FHT9Vyk6bWjiD4NPDNvKTKHrAcqEcx5WkT2whwzZsPeG1n1d",
  "key30": "2tfBiWkdugLXe4Wxf4tAQG3VrvRvXrxMvyctiXQXm1pM6vwCL9GFQ3Sn5CHKV7A98NHtGax3AHSWgzpPvfJsYUb5",
  "key31": "47qWFvVmxShKurRSrxEe6tmpwgD4XaXjidTk75QAHdSzg42gmxfr1FGVeuifqznwyXyXmgc2wsk5e5m7x3FeQ6ZN",
  "key32": "2pbRJakq1btkhCJeZqq3rNjYP56rcjCCubhzxf3gbUnmFfpaY6t8zR1ur4kcPFQFRa7SmUsKkfB64sYKQjgbfFFU",
  "key33": "2ze5wzP1RPrD6yS6WZDT5kBJ8aAE7Dbxv6YG4ooXASZckBB6dsYRCdCV3oqoETjgN6Fviirhg1sMAuLTYRiKi7RX",
  "key34": "M9zNZ1B9uHwtKNaNsyGcPKDHPQWdLewYSJDZhCto4kLRvg16odqxiHtiw7JBcfJgKMK2dqWfKeAhqPd61PeBpEs",
  "key35": "4ah5uTSSyssWp4b9obywJMwgFHKuCGF9DhEU278tPp4SsV86ieTzWT8hULjVkVPFc5mmjbSsUar6NdMGvzUUzcye",
  "key36": "4a4BH2CFSYbjtCynGA1hqYZ62SaV43SGzNCjN2GXfpPQUZy7Gtvt8FYA8NtuR39GktWrx1gUt6K5LomoQJw6GjzA",
  "key37": "5RxpErppXPrAyjTmYPYPeaU4BZ73gB67kWnFnV2AsKQi7Si8sfwxFiiihcRKe1jvijDDAtSAMr1YzL88BqjDxiq1",
  "key38": "YVygnZqBvxzdQ1aN5hAEpvi719ii7VutSsnA9jY1xshss1DCcFK3mVBBJYWnscNT3Rm9pdLzS8rcUyn5jveuMN6",
  "key39": "Kt7vGsbWyD9Yr4XDet859UQWDKrLi2a8xBabBjcFPC45Y9659WYH6Jy5WKbMhRiFjHhYw8PFVaYpbYEFhpUpKhL",
  "key40": "4wK3BkQgt6UwonczFGGkGJeaMKNCWhp3jF5TfveqhQLCzYGD2hjoAorfuDttoLB33EFzSRKczgM85shjXLrYwCgR",
  "key41": "4HpjycCDnhKGpiJg7VxZTAy6iRBoQCECbaCiaXemuHxYryduN13wu5mdKMeKWFBN7RrnuyrJRF8iGMUuDmuXaZ5S",
  "key42": "4jZ3oHLdMzLbpdLUDcGLgt6xjA348vN4xvQogwvV3NjWLnNMhWNXwrjK3Lau55WW89G3yCGug3XcpWnPPLx9XTzb",
  "key43": "3LS4aYMnFY8Fm2BhaG2ukWpvZjeLFgnqsH8FAnGJK6oY7BfxhpfxyG1zYzpcr5HXLa3CEhLhP8uUD4oxRqMWC8Ej",
  "key44": "3ASUmdFez9tpZumWzAkubjdF2rpACWqHBAcNZTFpRbsj3pzEgAc961YVa2TvxTFdFXogyg8g6X8jb3LRCD3tfqMu",
  "key45": "5yko6vHi4VLBcipkwTmqthJzZb6mXKmQx2iLdwtRS2tjN1U3rt1MSQJFBQ6CvCKXFpqtwDXFwVCA8tKLiWshT7VN",
  "key46": "5YszLxEdUcTZj3cHx8nu7pnYeaU4JR7SLAL1gUUUcE9iUTuSJQ8x8HemdbgCrvzif3jdyupHQUrgjKpBHSRJwHMn"
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
