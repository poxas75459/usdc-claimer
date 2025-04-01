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
    "2U3cvXp1dKTc1u1Q4ftUB3atpG9Dej4qU8gpmEYLNt9wsJEVc6xuCyMUaDN4hnFV9c6MWFu1SBq5iQErcdnwuzjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DHJV5SJdU6qk4kSG9xuZxMrqxN7TcKsEhbHNDL34pwvRJWBrGCcXP1A1n2FAdJYYSjwWKNScwdBQwkbpaQaQH7t",
  "key1": "7qR8zTVAKyxBYwGK8WwspcXnRUTrK4bgGfJvnNJDWoVgGMBYRAjJZoTq5daF2FxzyXj4jq2zGjEuj7Zcd7pbunN",
  "key2": "5gYAJPoP5SfpQ9fmK9YGDhBueTNRg5QJzSecsimUvGr59VEwgsmRMFDiB3RqGAx8353fsKMQiyf49BhWV55MuS4E",
  "key3": "3WaqsdamVmeP1BSFPKrALZERSJeGnFk7tH6ZWnUqqKe7PMSjPMonHzjCJsV61Gkh1ZAGcUUpxEqwJXnuNdAeUFSw",
  "key4": "6Fec29hFCkZQQ1dQWoyvN53x8P9W3sTSMAbd5nhj5JjsA36P9Dv1yfiFHgHaXHMrpNKhdLVp2Lzuk7NDnVgaKTY",
  "key5": "cnhVcxCWWdB59UmqebVheMoSTJMnBcuj2NK6HYiJuHBrRn3TuZ2ssomov7PnGvMSfw5hFMdBLet276GZoGF6P2V",
  "key6": "4W4eyhJLxo9NbzHLywpKXoD1xTtRfVTZGukzcdVBLBjHTmxEVXYn1WNfUKHmzqFGwgWnHUfdeW8zmyRU3bpT15n",
  "key7": "4hxgPw1ihviPjG1UEaBtva2icS2ygyjGzDV3FVK58oXx72ivkzhaM31aGYud1uU3F3odgtwov2qnjnjnTijQQ6RE",
  "key8": "3X7HhCpC1uFx4bj3mUsahvJ7RUkN3bqC5e9HJPzGymZjcxKkswbVqFjjHcEDiYwtETsW5DFHyuFueujs9ewXSxi8",
  "key9": "3e8Hir5QeVYCeyt96Yz1jxiNdiYStBjL5rTRgk6Fz4AkVi13mSssD8iGoQNzMGUix3MDcAU4b2HBwH8z12JUhHjs",
  "key10": "5Eq4tzG3Me4XMd3SmS4bhVNHi89tiemE3WDUbGn93dd49jHvHD7DVspSfff7coHUtD9WqBEBWKg332wGVJeP7JRe",
  "key11": "54rKKgSURnST95dhWrJqV8xyfakRxHPTdUi2sR4kJSZXrX3ynVkLJsdsZmW14hTMbv7XbGMkZzvRrFecANkNmiYp",
  "key12": "3hbDDKQJi8XsiHXzB2caoM6T8LaU2Rm4cMSXjFpUktn4G9aEMnKuuQvF6SK5k6YpumwwV5Z7xm6LYe5kHUY2t74C",
  "key13": "5P6dYrZ3VMpqtJ7K41m9XJeiP3dVQ5biA4hbLbDCUoJLK8bP4W1rydPjckxuBdAMZ5L8EoJMv6qbYVmW1s1CgVkG",
  "key14": "2DVTkjQZvdpXPf1YDVBHCnn35CynuuTgVLAUmABzhSLAKPFfSfJ9429eByGHy65y7qdkME3m1qC3J8cVH6cWBiZQ",
  "key15": "puYPpAZdd4oaCDXnNngUSeuAEcZpqQUafe5dSGgPmpycyXUWGmM78rSRdfSahpzGfRMmgnGKhmNwRdeWUK8HeHA",
  "key16": "3tZNSU8AnLPMxgGFMu2KpkydadSWrFbkDL8wZ1GJdTBgjWnHSv7ngNLxcp9VnCozCzqjymjPvKLEsSiNCzwFV6EZ",
  "key17": "2CMTYfNKBJVFFSACTEmCcE6NjCpyAZbtTH3mgpcdpsiGcUvQGkTZcsTUJu12ByrP7Foe35358iXe2FquLa7MPZeS",
  "key18": "4c2BRM4QnUAZ6HS4NajtWQokLex32Ghi8iRafuqxaTMYrd7bxcKpWbVYtUcwc2YYA4RMcBA42pNiUyJwNUuFwjh1",
  "key19": "rJuqF3WoTh2WbKJiKPdeKWPFS6THHwtvVJcgP8v5QApPhDXJQCxBjoMpP5G5MRNfjxnumooYzQrgPWYcvMuyB9v",
  "key20": "4V9Wwv1PAu5uVLgqEqQYgchuBY6oB8fFSujgYjqYP3gAmrEeBxn2gmT7TP2vPoMPCM4diQiCzkKv2zoJHy2aQkNW",
  "key21": "5d8dHisLKHBGJtz2kCSFWiMaDqz4JBjKeVFjQgHQQFrFNyADE2eva7bfAPqAycV998KT5soRaKCudjMLp3jkzGjD",
  "key22": "4wng7KFuBNis5T4GgseEg1ryBN2ss6W2eKpNsNFosan4J81K8Zdk6S3MDmNWojSGKhCoAmmuNGLBi4C6TgGyi4JZ",
  "key23": "2xWz5h4k2SrTdMFcoGFcWAUPx3FVzgVjTuVKhbKRFuPSaMwD5WUHvyK2Mc8kZib8j6wCBqHmNWcruAK5HtLZdXSL",
  "key24": "58ztGumoSWkw7TzPmJ6MFRSPZL5GfSkxAj7ArUmXJXZS6FtsJobn1Ga4EWDkPo9s48ytTBkrJgMqHCFNQGW2gQDj",
  "key25": "2zwe4A4XKJaGHksv6k4LYLD2uSuFFFoTCrYGVsfZsZ46C58X1PNyCXwsvdJPoL4YQM6vkCx4JqeurMpuN3nYKnSp",
  "key26": "gxXdrZx4ECXMBN859aoAnzana8q571SMNcT5PDXSCNukSSwom2aXWY5RtvLXeovAQVpsVLthLpj9HaRiW9Kcphm",
  "key27": "2LmfZK35H7k5JRwp9kVtRui67LwEsnNNpdK94uATtsJ2D9XU1gk97SaV4z2by5Yh42Yx784Zxj75GFLtpVLHKTp3",
  "key28": "2JKdv1gZSGw2LyJrxhSwxtPKkxQKs1bx7joZVhDAsZX9p459s55DDGrV2fM6UCcphZJM8wCNpGC9maZT3zD2Z1BE",
  "key29": "5J4uvhnZkZEZ6eiTDXMEgc23iDLEZ4iKw9Bh8ghPK8coRfhTnC7xxwHvdBY6Z3FRw4bRp6zxtuda6uxmSsgkYERL",
  "key30": "5MrYrfGoE2HSFKkKhkLPb11SxxrKqNzCjPWHrz2TP3AJDHcMAe89nmMAmWWAXh2j6QX2tABMcJ7QDdAik7Jj8xKe",
  "key31": "5uDmCq1BnD1hhKPeEwBHiUcuYy4zvJRGsVnTj7yYLiQgwQaJ5UQEAoLzD65hp3P4LF9FRku8dDwq2TYDoxuonRpL",
  "key32": "4WkTheqso16zik9DWAtmzV53uNCT8hXEVuSTfbPsphtmaRJv3yhsrVBR9gQ1fPXKeDpVyYHhPtVEt6eP2L1GKugR",
  "key33": "d9sfBJvS11QgLeZKJPE39wknJmDcSJCN2imjs5jghsW1jU19tXihuQZ6ZNAyqA9h7YiNz5w9J9LGkVuacismDh8",
  "key34": "5gBqrtoWgoK1KPbiXM8XoiqUhP6HTBDEWKqR76uiMBULuWn6pqiUU26DYaSsQT4R22nkjtVZXQnNBXVn4N1ZdCup",
  "key35": "5NWyGC65RVjxzh6jiLGxbiTULmkGuCnUmE7jbXEmwDjoBLARTCVopUuv1VnRu25RushL8tWjCKmDBxvMdQzY3BiJ",
  "key36": "27Pw1t5ZnQwVu3sramL5ko8haWP3Xp3mGVDiQbwPhZMZuLvHdVB5vuNB8otjjYDLjRGMt7MRJ7roUYZmLWU7xLfr",
  "key37": "2ep8vytuVEw2xX6sLRKe8Mmtg1xEFRfooz7hFGgBu6SbXWYeBiwXP71qsMF74Php15CiQzZt4qhYpjgnt523DKDU",
  "key38": "41oCWzkqw7jDEzr8zx7ULHwaKisJgnqvkyZktmnVJMhdrsVu64d6iAyy5Vf32ZTBud2EE5X8TymfWUYudzu7qcXs",
  "key39": "3txz2MXqUnXr1pbotsZTmvQpb8NrcBYNfM4sFzpgKuAMAnb5fnn44h8rTaZDPkVAG8DnPbVj92EVeZoUf63eX6dg",
  "key40": "2ZnFfhEmzKoM4jnNoCwChQynRWF5vWqMSCTG2HcT58n4ZTt3KvCnxDr3WiqKmb5oH9cAwccSZ5YPVZASU9spsYLN",
  "key41": "8HoC1s3rwyX4etTa7bSh7nue5YAqFVwV7mhYbVbtxfTEmTMyoLVWQrq6dJTYXWWQTbaRHiDNzr8sYqvZMU8MWvG",
  "key42": "t8BSFHBm5Qmoqzk8CgE33gHGppAx3x5pnbwrFMEePrbistca5FoLqQejYS5vULmLgrXKpQCTHefNEqkvvZTesw8",
  "key43": "pzYpZtbuhxFgVw6Q9zWYa3MXxQmnycX4efbe6NL9VUwsovmTjpkbkUS5PuF5a89pewWUdAUfNdeDiR1GUcB16Fb",
  "key44": "5SZ2QiBnweZSP6DU9qVMAdyixuUnAKckoGJ5t4PzFYwBeYCNWupZKz8SuvtKrWEXsjJ6kQop2awd4dwfb8FeHETS"
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
