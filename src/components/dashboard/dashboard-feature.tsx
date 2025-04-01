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
    "2vNAp2oJ5iXFZMAxd3UEYfP41o2SCXr4tJ1t4NsWFJsgXJwiTEds7xbSnSND5kgsrAgDdzU4vJrSs9UwjpWDdARz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FFs837ezvTFygGU5PcTeeUq3YVTY9DF2fBs4oZBASPgMNyiJoiNjrxiWvjidw1WhvLMR4Lj8Kq1ShxfxBSU2UhN",
  "key1": "3zLeDgjc462RNaYXYqiyHkDe7WGGQYRQ6okbMUnnv5wopLA6LLM5S9wr5TdSSWcQwgzRynCiPc4RNC4U55wp8rFP",
  "key2": "3gK1KVY5WrS9bovE4Rc5YHimrMCg6orjkaqefyavyiFPRGmFfxAwfc3pkc2Khfh2aLUcoHPGtB7eSq9SRPK3Cr8M",
  "key3": "3PeaKQbmcfi8GbXPKsR3JPwcVTM3uxQoaG5wF2fsbVRM8qgLhkv1aPupESqDLSSnZva5P3KLPqRokaTHkKJgJHcK",
  "key4": "4M4ASPjcqBLMeqsfqHXHUx7jyKE4v2muRTgXyZtM1ZXCr3Yjwo2xApUuZJ24gfyLpWyA2CEo1hLqwZsq5KM3eiVx",
  "key5": "5t6wEskFzwiZH5GH2ArGcefpqJ9BYxmm8vUfEE81G3XoNJJRMY8YQb3rNWVLz4ghEC3a7CpjHoCKWjPdykSWLXdU",
  "key6": "4VeN62A1x1uZP9PNgMATKoPdixveH4TthZz9s3cJeMCKfxkHxsGrGJVbbpZW39b1zLAib8xNo2Z4hTA7YA2rx7q2",
  "key7": "5SHi9YZSxBeDYcyF31hJxZtFc9EKphemHjJXfok9gkEiiiNbPBnbe3zAsZyV14cL2cwMeNmzUEhmg7ZKQDQyELCH",
  "key8": "En3cnDRqQAwHgtKfV5YNmxYGEjoVKWHQRCrcytc5KvotYSMyuXB6LcwW47pPQuoeguMbmwkVrr34trQ4cnsmRoY",
  "key9": "jw8zsZ72vXcFpxaGySQBKfHA8mSJmUGiQxj5uGkuqPPik3F93duWvn6XbZfBcYKuy7Duxr78PvRW2nkcT69jLvT",
  "key10": "4xAaQKVYaERTmmqn3LRpMCEgAsiVhtAzvsZyVFarSGWBi1NQtWQ5MwqzorAmAXNA9p6vSqeuKz5PHYEF8zC9Fg8T",
  "key11": "4yKzUuUG38U5mN24NhMYWPGjw9hCXym8AG8jjcJtA6XHoSZus82rUx5Lcqsau5hC61eVNE3wxVYVsAa3Y6uz7uf2",
  "key12": "2dsAYGKDkcyTi5b2ejAXPeRK6n4EX7mdoPsQ7dQe13LRaVGx1FBr4mLU3q1NDTjC9gbQLkXceYrewEhgXLLzhuD4",
  "key13": "5VTaSKn7vW7pbzbVyTs2Fx1tpLtYuMQgcrUk5oFrSwcmqsfFLfDBTju592GfBfFYFmhgHfZRSEM171DFmnN3tXgH",
  "key14": "4DPkQn8qzFEd11pp2GW9ecPk71G9TVzAJ2tpabCUcd4oorsoX8Zn9hRekF5h9x2qthuvqmvw7kyvbGX6fiF4DS5n",
  "key15": "3Gg6DfD2ZqqAFE46r4BuSPfL25hGVrXZwEY5QNvP7imkPVDbetJicTjbBhh2w7NLbD1aTX7FEd7YEFjueTef1cc6",
  "key16": "5GGjn3b9jGE81gxydJhaHNYJPGFVBrVoB6b4XLefJ5tLHe9u8ULNoBXvmoHnmrLTmSU1xYG9eJGnA3wJKp2ybi8W",
  "key17": "5Lx56aUJHG8PYb5wmmgbe4mzuZQ2ZJb61mpYQYnCFUGp9NvbVamUWZwvDCCz8ropuHoCbKNnhS4tTeRdMftWB8qA",
  "key18": "23eHPiUmtvDmcq3kpMWDYZLY29diGPV6wD1qnNxNMheUXo1yYq1J8uTfAA5m1vVyMpU4nJrC8JE4BKp7eGbMyPC7",
  "key19": "YNQqHfC2bveqtr5C3SiaMpcEN1T66yx7QQTmEkub2gxrzWM7enYGhcit3M1bs8MPVxyZ994XkBTJ3p73ENqswEY",
  "key20": "2WN9jhdrcH8SDKftQNsrTRRmvJSwEdcquCXKHGDqHU2fp4ZEMMSk5NM7ze42Tp74wiAdbbu1jvHkLiruNKkTdHQX",
  "key21": "5VryNgPKckuEURGmxYAEt5BeabEK3b35zXWT7dT6f51tdtFXZgRk1v7cka1SidMMzm6DMK9KoFb2qiVD9sWLmQmR",
  "key22": "2eS2UXFwbEQdQ4Kx4xLQa4jL3VYCqvWZEr3Nztr42fSsP5LCr1PL7fLCDRJaaQpnfqjZFRs5wAcSYqMmtTLW5QB1",
  "key23": "3HoLzC3nYPKdqjdidEyQT7HzyYAxe7JSX4pZZwX4mjLftLRQWMHxfdUedZV4ZV45LJ8UC4WoMfZ3V2ADeSrYDrj4",
  "key24": "2SUgo5d19ys8S9aR5jWcaTa3NyMxGKwbx5hHJGQcZsavVUqQu9Uq3Tho6T1jBSkWiPhDkN4f8JF3LPkbD3vbWcfN",
  "key25": "2FUN5tpvfiBWCEjhjz2iShwYhhRX9dPAoauFqyp9SgqstbYLKEfJhP1AavrcA3waN3ZSA5pXgodFH9jPvsrJXbTc",
  "key26": "2YcPownHK5W5JinbuAav8FXVUXbJUv6FwWFmPskDW3razArXdJf1zwHPnALPwK5G4vrUJZ7xBJZQh8KgFiJsKKxQ",
  "key27": "3LZUvNST52wvAJARaWuoncAKh9j9CaNKPmvqZUoi63vUeYtkxWCKLx8eq2Yj2Kx476Z356jaCsfNBuSWXZL2EeYp",
  "key28": "44JeYGNUa7K522CbQ1t6hyHqA1qw3BvUZ2m5DwFxyBNf6pUqkpHzBdtTVRe22Z1Hoq3v9PRPEMYQ9ahQ5JYxCSNL",
  "key29": "46Q4ewknARwuS66RBdCZY4iD781B5281NkeGaSKWUQQe8CgJzn92EPHffDs8bZcrBGvFC9BH89MdHYFtWJ3CqbEp",
  "key30": "ZhA5k3jdzxc7EaCCim8TW3PRWQy76DUXuPR9xCJBAy7PgcGGwiAAGWzZfQhSXJ5nbRRcX4huZBUj3SwEVKYaTjm",
  "key31": "3UsXbj5ikR1bM9eWAHbt1UheE2c7apbnGHy41zWxZvmyNAJ1XHvNzHM2ygy7s8crkdTNBSZvEr6fmduqsEgeMKZY",
  "key32": "4grm2w5xenjHwKraXg92tSi7z67hajfQ9nE5yWqdR3xkwrhQABSuj6vEJKgFemCxoCsZ9J84N6Azhq8RrU4cSokv",
  "key33": "51Pn355fKkjXVggVeY9Uw535BTeZmfuqoWdzDMFf9YurZzEjsZhPGhmt6Rggt1zkNt1RXhkWt2gcqJszJSYP3KJy",
  "key34": "5aQYp5T8fXzwEJFdGgsjy1prWQxiekAAWo83ckg2f8xHQowVMvoo47h1fwRMSjWsdnAYaSiiJ1gSkdSe4Yhe3VAk",
  "key35": "5xWZzVkPfHSLVHhgzGNgi3F23bnu3yfVHZt4sZqG7KeVRgwdVNimsPF7zCy1gYcszPjNCquqyGfBnMR3AjTMfnXp",
  "key36": "5mhftVWNKsMNKcWrjWenZ9cGWmhmRhwZquWks6pEG1mSZa2c2CRi7E5NBjFVMzYfkB2tiBfHL3HFrcmWiFmy4pNU",
  "key37": "JMTgsRMhw2Ltq1HvX5FtqyZTK8Bgz7nHsRPcY66cDCDubt9Skxp7pHcvwVYPRq7LwN6iaCaGqjnYdEAie19adkx",
  "key38": "roHyt5hd8b65DGAkwLQtzBwRGpyDrmNExSjcciHh6iAbyf5HHBvRw8oZMvFucfCp4Lrhqqu7wnwidgEKWNuM553",
  "key39": "thQ7KNaSwyKCwDiNCLWSFWVEvkxqCds92PqfUqvYnw3YhMsQsovB1fWoctrU1XK1b1hwFmx64f2J5HKjkyAwpTW",
  "key40": "2WN4Gk6ELqxVWZkfS82QFUMYQmiWPx1aSP8Kv6MGPBTZc58fnigcycSyAtf2F4USq75ZvzV6XXwBNh2QcFyVbdMR",
  "key41": "4Tq81MRMbvNmahu2eMMVajt8eDnicvnqdCruNDizfUWbti4VKo4kji1kXV8KzjKT72w8d6tUqTyxnFfgEVpFCRGf",
  "key42": "3w9FPFTj1A1AZ5uz1BTw6JaCpdWyjPe3ChVSX7BW4GFCcQaRnnC8EtoQdHMU9Rfn5Nv4vkL7Q3xzEwgSoXQTG8P5",
  "key43": "2b4Nrdv77hKm1PxJ54AN1iKGuAZAYpa5gqP9eSkHRwUh9RF156km2XpQWzBnGxmoJuQzEuAJc6CovxMXoP3UDK9p",
  "key44": "zBVpWbiysZkM9UqQP84og7ccACMBdXk62NZhzSeQPEgXWjLx8yV5xKtp5DJ1PFcot41Amt5pU5bcvhRLTtNG4ca",
  "key45": "PjPBXZnMa9m39Jqz7ArHmJJZmf8pWvqgD6nFwts5ao3qtpjnsWtR5NrzPtzaw5CSPG3YeRW7ueJFCnFq4hryDKZ",
  "key46": "gHcruAqn4HjdxjdCFHGxXxBBurHaA4VzsYnmWgpTnK6pWu4ERyVgAwhLgeeXWb6rjfYpN4yf9QAADmqBnZzVWfU",
  "key47": "4GM47dKNLi9oSa9Ug4Ud8qpXtLcFMBiFxnHAAzkPR8BuXTV7hhUSeL194CJe9P67A9Gi2mh6iDsPvs81mRAbZCco"
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
