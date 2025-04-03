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
    "VQ6SKFtrbhSuBuBgW4AFq4ngrUAEn8aZAwpqWZZQattuD7tXoL1do9AyiM7eLh96115nRNWRr3mw4cvUKRNGgYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yg7a4KKyomy24shPKhsz5mVndupzL39YECLVVZ8PnazcCU5ZFYsoYvMga7uvrtcAiSL7FvidhjTLCUoD7SL8Cce",
  "key1": "2eiypega61Y87KFbhSqwMpXqNZgHK2wWYHSyWYZe75E64jEaX4WPwcXoYieG8gF3Fx5Dp8cdHeDd26kHRE6ZhaZ8",
  "key2": "KU4L9j4ccWQ6CFhVhZb3gPMRpTLqM4NYoRcDXigvjLtDeRt3mVjtz2A5r4SfndTnmvnnRzHsrAhP8KkSGR4YZTq",
  "key3": "3rpKTKNW4QoGjg29PuveioQ6Nhfa7kV1XQNktsByvY9BcyYGStsYP2zE4qPqMMUhvPAZFQ43LdR8DCcfsAPHPdwk",
  "key4": "yeoC5idFhr2PsdALtTnwYqMuG5vL7eLpzA7nXwKVdLv8vWxbUvDtRQgNSg8F586sAdoffomZ7q26RRDwxwCXsKe",
  "key5": "5x8QNRczWJAZYk6coEnTk4LAcVXcAFpCLgXPw8q7CZuJbxu1cUniXNvpdPjDEHYFwA3Dds3C7TUG1z8kUBscBmTA",
  "key6": "66SuCV3xtUvFBg44vzisArJYftu5qXQxhF1rYSDak6DTKfBzDchZgMWnFWJY6FPAKHZtHJiXN2MKoupDH7uLZmke",
  "key7": "2RYR44c59Aj7ab6wZDq2iLXWLrBNrf3csebgnWnw6ssqZSoy773Ahv7R9tAyXxWZAWYsmr1UBNaqyLxS5gkiYHbk",
  "key8": "MQ21ufGPZvjhg3LTkXGbk1MJVfeQGx8mPgiJT6LZHA2PuypqeeeoFiLPy84bsvsD3NGDtHKsmA8xF8unfuLndt2",
  "key9": "2sCufUpFA6B1L34udmTG9xnEseSvPhrkzxo6QAnuGqxpWtT7yu268w42HiU9BVfpWKjNfJsiy2pyvsXRkaHBRkAB",
  "key10": "7T2MCWjjaqEj59KzWogbv3xhhDyxLhE6pH1RMnj9URurUMv3tShGrWdFn1BJzTA6T3M9Am328qCJWyB7WXKKSuN",
  "key11": "5NjQnfLbwMBxENuQDpegiXin7emSCTKCsdd2Y14u7eDhcFxy2RG3XTgUBexyp8wE3NSKsVkZv2E5ouZ6yoEcszJp",
  "key12": "jMwQPAEsnjgrxqY63rmuedRvAJnWD5nyzoEaQRLo1SGrTYZJ3j9AfTRoecZH1Lh2G1hQFahEkDRJibEbpmiuQSS",
  "key13": "Lv7147jT7BjKW6WjdQ3eZnGNmtUL1HsZ2QsCFJfr17gm33gJ8FqbnYgcPDEhcxg3qZRBr6ej9FRY92BUnZsAM8G",
  "key14": "3vkHLwaGMZnFXRWbGQG5ngDNoaupG63YaMcFKbtpwj7SHMQJTYMArvKTKcaunnih33UbJWrX3KpeWB4KzQ1yCHD3",
  "key15": "4iWHnPQjywvF2QvZBmdo3iHefen7KwGxUAtpy7hXZgNAcgkXumvYFfAJMFzm8U5d7ncWUmssKA3AodSGZ4GQ488B",
  "key16": "5FCmjTEFD58YtbeBxUbfHk5nj3D2SbuUdrm3GVjnHpSLVvdvob4GKxERAgr4vPRG9ebwq22ydjdu7ApddWQxGxZo",
  "key17": "5aHUq8RF7P8YgEHiNXfXAAYsazcYiqxJbAHNCjc9H24FbcmfXCi7nj8GfiiGTign4h1buYe49XFyZ4adMq278KCB",
  "key18": "WfRGX8jq1aQgbaA2kVwjfs7XUmVas11AxregGJsrojjaXzZUgLgnQGgbownXvnd2QV3QnfxGbxKmJKasXrrquTT",
  "key19": "5erpMoEPMXeEkDDiTjxaZebEFpPUKvvYoyr35h4uGhTAVuxNX6d8LCwzwp6p6MwdHpnUVUn6JbFcHmGJEWq87AyU",
  "key20": "3jrBUo6FVmRrkYNaPSMu7w1JMWQZhJqTaJJ24Z9zgxjAqk91KCZrALjvAYcPfYMFFz8X7z7fYt3o4KEBaPuSh4bM",
  "key21": "5qo5pZB3cjbihb8PPzM5StuYSKbbJ6gzXWFFNd5No8NsoKM7mJ5g9HDPg9Phscr2sfRZTAFNFw7r6NGovBYVbVjM",
  "key22": "PPpK9Xy1EBU8SdeNPhcF2F22nux3FZkBAdP6ZGvnu9SgTKs9eCfvbxtYDwPesbucPp4kMR5by2G1rA9buS1JFJk",
  "key23": "55KQTa5r53KnbErgqd9d4g21Vv5HpVXzguTnLp6FxwWwLvNTY93yfGoW77eJhjDoZSmnEFU6Sfzip1ebSy3hs4Yj",
  "key24": "45DJ3jtqC8W4fQwMwjHMjDiSmhhAWHDzw4vynogjmvqc23WtCzf3g1uhkw3GmC5rcTHbfuUqWvK5Gzz936C36MLE",
  "key25": "sxTUbDutVjcin7LAPTyU2rxz9utyRrBgdtwyS9vccw65TdfUdCEKjGdBbjJyUkdB8MnZawXeh5gXVMqSqKTdtnw",
  "key26": "15vd88ujz9e6QTKEBaJ1mXEUQXzWN8abU3y9Pz7SKwBda4Mryf35susRh8zGxSngVYHhM7LgWC8dPT3R8FbN9mw",
  "key27": "gcc6xTCLPeSuU3Eky4m4axgwA7wji7u6JFaWJLcKxQd2UDdpNuuP5PBnxybmCgGebvZ28n3UZEHRNxCzSAMCtWq",
  "key28": "3WbS7j2hFwBi9SeiYyaC7E5oYLFBsv1W1q9JmxgxCXzY5utyNjDVhmaBfHvqtHy6NpYebK8cquWf4JXhSwbQEdQQ",
  "key29": "2w6fQEaHZQLWPKEJki6tSTpk6Nx65b3ByXLGoZDzwBYprGTX2QHUn6XqM8eUhQjD2RwAh7NearvcRkRtrQ23sym6",
  "key30": "4rwCJ9KWKu93vdiXXK9jbaQymiyg5E3y7Qzabzz7usYj2mdDS7xxqWSpeLtP4nHPMMzNun7EZxKiNy7KN3rsb7An",
  "key31": "TB5AhHcRXt3t3mWjP8FYCNt3nFzUp7xLhXbZg4MCCtv8F8RxmKquQhr6U1aBptaKtHwBWDcsmawHM9B8ga1rpqR",
  "key32": "Rq65omo3NugHpAXfe1Lj9GmyLrniafHweVdZ9nnzG6V69v97n6rNztqtutJUXpeLKmgVBm4UGrEwpaQLjR5BEUJ",
  "key33": "DTYHct62sxBMrpAznrtFTdW3zcdmw6BQZ1vYMxtKmfZHBGZ5mv8gDs3pZGjzBUZ3oZCwytwvAycv2QVgAvwsuZU",
  "key34": "5WbAUE1ekNt3FNnPSrRoGkxDAx9CKnqeVnUPxj4BMV7iS1XFC5xtHgGDD9TjJ43TkRuVCBK8JmAM3wbWWgrvM2aq",
  "key35": "2ZRf79V9C1QHL55xC3fRLDUqbz9uuQeYkHgDJw6HAt9aRSQfRdNPRrbAzhChwfuYYrmwYSHFPD8gKkGRJY5iLhNo",
  "key36": "3okG6t5pTmBXbQTeLwLremsCHrWjyPrpNaKzZansAcGwUbV3859KrtJ8fhJzAueuszAQ77TDU9rCEi4E8xYHsL29",
  "key37": "5AJhgi2CZxfXXLccdC8eHxiqUBEMQ1FhpUNAidc6xM3JLhg8u4hJ1Q4bSEbJsW2XdtFpySCy6m47mn3Hxy3fttHz",
  "key38": "4XrdSBmLcgmoRUjCWs5NYd6EnwtKYecsoqNar18Mcbq3Cw6VUAyYMeWFzCsZQY2Xcub8iXjpcotEQzsPcNkUEHas",
  "key39": "5xenoGm9JjKcpfeVE3LQoZJXiv5DsbQ7Xwe9Kapc4NvruynATPwaoKis9wVhfUGWatvmLNHPu6JD8sx1hiKpAJZG",
  "key40": "q2hB7mzEjfQzRhxLchpYrUQtSYeZaVr1wEHm9zf9uHarq9iLjXYceT3Lmm4PENwAZgEVDL1eykXSanqcHsr21G7",
  "key41": "4iP1hrUhqCnhXY5ZjUvYrKMpr4KUVZDfybrN6eVf1jvdjAaNtpjtxyuHQ2FC9N2GZwRGJ2vFmuZuJ6zExUyhDRD",
  "key42": "PyrUpBJwMxAABZANZ2wF8ukm4KzK5Mk7FmyyEv82ayEz2g7VhZ7HuehSyaTHgWQBZ4W6NBpRRWaKMufU6vE6JdX",
  "key43": "2E2ZTm7SY98Sr5g44uqJD5yqM9fB36Y6JbJNQ8fFAjfrCU9gfzp2HUM9V31wgeUFV13HGkWgACgSkMx9EKTARBSZ",
  "key44": "67gFc5QF9TM86BWbCDDNYvg8vZq15bB3D9Qgup6V1L3SVD6hurYxCPrsJCW1hmPSKqXWKjUMdKws6r8dkbHJYk9b",
  "key45": "38U4yuKeZg55xFWvFBZJRTXxYQfZv3oPKo6ytW9kx6synW1VwzmANCZpaWdHuChd7H476Sg6qWuuiY2a79M9D9op",
  "key46": "V1AfgD73bJngHq87cUiFxq5F6J2kv2wjTWhwZmjk9rW9vKTU3GMnYHoeLF3gUpasYhVmbgztXjKAMFpHSJomxaj",
  "key47": "4TsYM9o95Ebxq82K8Byd45fR24kJiFRHAWR6nX5jkh5wpPJkamyYEKeFpszdR5w9WTSDXjDxUMB1LMxGDmoe8Ru2",
  "key48": "4k9NoLz3jWjh4zJz54xpocX5nCq3PqC6AQ8p9cGwbjcnP9t4TAJUo2ade3mTj8whDQyovdaSeneB6ZaNdNnB1nff"
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
