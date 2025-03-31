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
    "4fTY3Y5sS3wamfoxpvMSySBiiYuPU99gQ1MtYCSxqcRTSvHBfEsa4NQr4LDhKQZi3tUtNm9mCNb5NfBnMzMMxdND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jpyZpYrfv6T2FUXTukXpKwztGGrv577UUjmYTzmxM6ZAK8ZYfZkPtQL5QNmcXvRnP2Bttj8Y3DqUEDx6HWop96s",
  "key1": "4NJmvqKCMx94FoU5DsRaqh7kc9abrFEo2xvSfKTYYu6nRrKFjmdMZ9PReikVJHNcbeLGCMtXgMW7Zq9P24K4d6XX",
  "key2": "4M5zCZ1Go1Eeyr3cJcy8Swvv9CgS9rE1igm9xXLtJE5bNNpi7fp9wRi5aUH9st6dpqCdRADTFggRU9tn8Ns7Skgh",
  "key3": "4cvUWcqL1uKKKzr2FwM3uY8uSnZ5KCKDXdc4Rh9FdpnzWHVZeQUnuJN9UJN2C34PTFvyfhwjyrepzR69UV46szcj",
  "key4": "JKu1zJX7NxTPnuVciCT7WVumcrDfkqaZXhRfGV4y9GsPSfw7vZnH82dyb1eQH1TVzu7Gf9WgqqWWkgJH998HXNH",
  "key5": "5BvPnC2fk7dorZqXo8TFD6azE385YFW7K8krZ31jp1hUweNoLn4RukcoWqaYkd4RoQNvsjtDEoBPBwFaRjneNm9a",
  "key6": "2uQ4VPj3ht2HQxsy4MjY9Xr6gnfSrQtiogCiVB4Tr5s3X1kJVytWcmBTxHZfr6kqzz15T1HFyww5fXr1JGTeCh16",
  "key7": "9aoaQg9D4CHtjhquqdWchbNFe9m3p4j4yuzFn27jNSVKDg2rTT72Zb2HdZPBbXmxQvLVKWtHUN48T8yBvSZEMYG",
  "key8": "7Lfe4EYrQXh1fLbHSoBQ6rmNYELGwNeq4VBayG3ZuLeVjV6BWVhbvBZPoWNRsr4f3u1BbMqXeDceTVSu2hQ6S7R",
  "key9": "33AVoYwaBo23ZMugejf9mWGV7KAa5HP9ATH6wUset8YmKTyVNbw6woJvBwAcCa8P1xjHPuLkov5XdJmYv2jKMzsP",
  "key10": "5Dj6xkWNfVMvecsa98Rc6SVQ2JJ3D9erhfKWBPbEKa4aUyazA9ZwXBgvTMtJp5yqkpu5jieMAPiPbb2FCEuF3hTb",
  "key11": "3KxVz891JkAgZxqp8uUNnvtjfHBaxyWFZHvZX6bcv8xQEkRAfdgrz19egAxz95nHc4UsXDTB3WdxqFUWrBpNJdT5",
  "key12": "2Dv1cWw6qQTaYo8YmMjM7jPXRLHCgucwPPb2qCJgNdJU26qpQuqzot4yAM3f4Lq186Cc8Q9BBYDTgvCkPoBwR9wS",
  "key13": "3wNK8UH9APr18Wj2svbyQY1hk9rPrPrcRmJ3ARLutQ4oaUaGngjLuxRHCNysbfNYSprrw3acxiv5vwhG8gV57njd",
  "key14": "3msXmKkMmBcPXRQmjFFaAQuP7v5ydYZSCK9EHY1FbeFd2wbpDVTugndNBHNEGsFFpfsjK1G6gXNa8de3ciYDy683",
  "key15": "CBxL9ALF8XV4Teh3csA85LRJCPXmUwxbGdFdv5hYx1aQqKEdGwFAiQdY4iyG83hTPEJtBhBbcKYWxMBp2conugD",
  "key16": "3WUt8o2gXhpcMSzbngCe9WjuC1crT7EEHQ3QhEpXac2x3vVQHcSCPKFAg36XUg3gob1LzKthnKgYb3chaL81jvUf",
  "key17": "3tFGJGGqnPurw73AuVA4btG1A4TWGn5V4ZQZmRWasixx3CfL8AwR8SsxsQZoL1nv5z8fMC7FHwFWR7sqTHPmBp4v",
  "key18": "26nQAnP1YTHW6ozRKyb7M1nz2RTdguZFBn6A3G6oFWQVk1Z4RiBhCpNTHJ92rx94fCJySnbaGV9SBUfU96zJQtU6",
  "key19": "586aBLs4eFSzNJqLizX35KUNHfjUgPEvgFog4ik4qR6f3iWXGyYSLVbvQqhUJCUrbhVCan8FtAf4bEDYbjTvKcqL",
  "key20": "5v6eKZnTnnLLkTYbjpzMteSwofftr5chN1VFeR7717UBz8qNtwdwFhHEL7b5kvjtiCs78vKgDzB4jkKdqxNeYJYi",
  "key21": "24oheAbQh3yFKfg8DrkMJb7NnKpNBvMyB7ZwQaMBwFriWMd1sXRnqXzvdoop18mtcs69BVs7rGnwhja6yzfcFMkx",
  "key22": "4X6g9ZDAuSfBCPJkymQtyLMnri5b9Ht2pgq4rwt2f75x74qepis7YrzT3y8pvFH5G51XmWjZK62UvyFxGWq42Yc9",
  "key23": "2zFFyQTs3rX9bGxPFYqqBNN2U2PTAzQBj6SQGicmZt4FnTGGLKeDcL7KtAxKxoBzs5nprGjGp5HWAi4jRH4cEYTW",
  "key24": "2w5ds3jpCd7Jp9gfBJvbRRU7fSkLEneeRU8zmmhyfmyq8VL884FwsaRrwSrtQvASf434iumWWMGntviiU2HcJKjk",
  "key25": "2n9zJkavTCwKzzJGeyPxgWz1B5QNbKejQuNp1MRQ6bG4f2DD56MG9Y7rjWiw13MaKU7iSx5C2iDDVYg6y8XMhqKN",
  "key26": "5REAnDzhNjp1suwyeDn3jyBfhazN9vKSa3afPNTMsbAN6VkBTCVAKZV7poAgg6xrmEPnbxceSJT8HvaMRSzDsS8g",
  "key27": "2rusYLVH9okBiTDcz5YwbZdpzzGnVrUrTkw9kMXjMKm8exzvKn8STy9y3XWSn8X9R6eFF5bLZJe653gKz63DUzQV",
  "key28": "2t4N8qUNXy7Q38EH7qup7c3zTuHy5eQ34EYnRv7YMpcp3pqrYcjSKzhUq5kWXrSMxp4u1W24XNxDbWnp8Kuzk4bQ",
  "key29": "ZczLBUt9RsstRSmFoYqQfJ9VCCjDNRx6usdczVDTyyLv9y4KXpfMRzkZLcwppnx5gEEJsxxdJwjCLUCCDzXvYRb",
  "key30": "4EXFunMsN5UvmRJuYtQdTnX5qNiEVPp1rq19enhS7Rd7SSKRQ5SuMnagYAKzb2VkZA1XZFdwJJFnArnRbbNUbPPz",
  "key31": "55kDPqqWWYdetAtuXseAqHBKK7ZvpAPPFiYiQkPhhcWNoYgdQDy3Bsh1o185ENnU1M6QUtShzmpewJuk1JTT2oGx",
  "key32": "S1YZMRiHvQejMiHwJ8Ju6a54DB2Yv6f445DZfEZEUF5PBTrDFNzHP7q7iLWkV7cuD36ZWZixYzYyB8vmRkwNe7c",
  "key33": "5fzCQ8VSQpZuwZ3bC24zyGm2gwfj8X8pkepw6LB3EctuL5C2x8a4afZMSe3ZGwJQERtA6Ey6yv2x7yccwbX1aXe",
  "key34": "Abp8UptBMmuNfi1LTkn3khsDFUD64hfqSf92fRWw3D4beX8PXSgfoqfjDjJwy8b1k4rQB9VUXotsqhUuDEqv8VQ",
  "key35": "5pVTWFhDyVmDNBMAdDW63ufYh59DMz5XZA6CHTUq1npDj2X4z5MYLQfHE76fRXDBNyYhVTAsRSHt4zBq59zPQtDP",
  "key36": "MTvnNL6qgxNpMcspwqVKtGfsjWwDYxJF5QUuN2iqoEC2ci4x6SzpPQV7YgLo53849aofYTapWVq4P71SF9zzoA7",
  "key37": "5njdkoBZhzSZirAUyrMQGsBctawwsXeREKQXsm3ykH1A3DiJwd1PTBjNZFcFFJ5Kb2uWPzmsZB6WtZzxQDjcRYq2",
  "key38": "5xR1ziGN6utYFCTvUgjDN1DG7X6jxJ5Ky2J8UndDT2iivWW6r8WDkvtXeCNrRN7FTHM7Z2UcGEpNgJHgP3ykr4gk",
  "key39": "V11m4VEhXXQDsraFhatisBd4R4LMTjYe5HEzfDyTBs2znpmAkBhnpUenjz3SxLTpTyxFu6e9vkRqMGQuF5AeYSW",
  "key40": "5ReGEeXZQqmk2HZH8XuJYS1VhxPVBeTsL7HbLwHAPum2CxxD8R545bXFKdTv12z629kvPM2eTCuMzeKePx5AXQkg",
  "key41": "4eQwWNJmSbXRX1earfx7xb4xRFnQFPu9NxpeQphWYvTN9HHBRM1GW4rPHEYQxsngZinAAa28nzMMUoaETXbQHwXi",
  "key42": "tfVZmwgQ3p8QZPw75fmNZHhzQLaegigmcRgvTcMUPsiTAcQNHyzCBP6FpAJXg2oVt9LrCF3gcSSexT4r4AyzC93",
  "key43": "8347tdR9Sg9SChZyEYq8ZNmWkTHQmPeRR7h6Y2Yy5CMTMSqJLJ2uYeh9k2RtYXWUs9yPyBGZNpASKBDqicb2tpN",
  "key44": "3rn5zavX9sEBkZXaC1GhrYseuvJqvQKNXnf9dssRqEDjvBHN5BhuiL4nBVwqN9mgjzHNtJTbqrgwLsmbPQTbuMsr",
  "key45": "3vaiVnbsMp4DbaFi8nh4Tz2d87ZG3FkoKrgCRf3KHp7YxMhjHNGPScGiZbHMnT78LxjatA7zLNH7K2sKyH1gMvPY",
  "key46": "4Atp5LSf9ny5vbJJWprbCJTiunXUs8PV7fPYnTxEFQDST6SMWGvEU6aVDnwMBJBusuAzs63hZezmMTL1N5zaYkFE"
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
