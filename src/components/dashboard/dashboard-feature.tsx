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
    "3KaT17ZsCqqU3hk7ApjqVnKkMZdzPaUho1j3vKvCbcHVV5vubQEQwNFUH3t5V2x5SCkfsK1ChQNuJCNmvQN9hBoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fskXvfcQTR87pW7PwRhubGp1ZqEVUqFz7jnRQPW6aSVRs3gBSGFhtVjXvby1b9aWUT6PFH88QWVsARVCv5G44UZ",
  "key1": "2Peer7N4r1MDqT4Pk6mFHhwkHZACKDrUMzz8ocTWbLAm8Enyrx2KA73kf3qp2gJfTGtjk7Jia4cC76Yf4LD68Xg3",
  "key2": "374C1T7NxXp1qxmaXBB6bmafA6rdvvagNCLpxtigANq8Lo6Aa6qf1dWjsPBLYXwedom3E53m7dUaKKF8fmqdHnWA",
  "key3": "64y6WqfmHcGof7ZFSxPvE4tGrjCjKrhQAeBgQVpYUy9xC6x51LYyhU5hoeVDarq4jSCKxghZnVMmbLMcCrUdLXTb",
  "key4": "627mcuzEoL2CVEUeD5yFBGXqz7FHfrp8jdmLNWtkpwah4qEWpEASNeZMi4yD7CH4EtMvY9vfuP5fxmMKPSGj1QJk",
  "key5": "3xRs1Q5Ae4ixbgHnkYGEVtHk4kZQ4Qs3vU3M5jArRB3poHgBXXnXGetQo5Q9wt7S5WWDwKuuB226Z5npEpncb1qr",
  "key6": "43zvnSaXZRMt4WMdp9SfoC4tRUKVrF4Wj1N2nHD1BnNqmVB8mnAid2qWSsevXysp2PVgZ4TZ9QrKRi2JdSWPCh9F",
  "key7": "45K4BKjEbCB6ge2Lp62WiHWkdD6diHxR3JgnM1RRysktgGJDZiuBj2hZDCddpVdBZ3onkL7ZVn7vvBqZWDNtzf4x",
  "key8": "49hUbvNAZEESafMAEfQoyNeS8mTN4iPQC8NtLpt4PSR3eepX4UZrP8A7nsnpXiZYDKim83si7mkwEVA5DTjztwz4",
  "key9": "2G3eZ2tgDDDpZZo58Uw5LQQVDw7cr1xJ2GB9HZ4NbM64LiBKVaXnNTd1zJrb5cyABnhPx8uvRm8yGtWc6oSiddtJ",
  "key10": "5dSoMdWkFewYTdQpexTfZQDnstims1bpRHDBtt4VaV7Ngf5fJyFeUMzZcgGLQ94FCUDtaqhYNhqg2mELT4bgMgdf",
  "key11": "5P6avo1goAzGu9UEmfqts6tRh561EJin55SFbWeBnnuwC3SoLX95yt3nZHxb2CpyFbWREBJ4QQgbQ5MUzi2p97za",
  "key12": "4gP3WG5Q1fRYUqvXwautE32LHwuQDskM4eWSq7huVgjTKQbyy9UoyNBWrddR3wazm2txh13jkjjvBbPcWw4gUKwN",
  "key13": "3WF1UPmdPaFELXzSM927qaNfKTh6MVHhhTNSfEKh6BTbVXs4bVKAGTGg7U1esBjpyFMnxAgcqtSLFmRvVWnCEADG",
  "key14": "PVVXfe6PY7cqGD2urCnHQcBxjFy5AK6MiWsqiBj41NP85nZqM5DTxBie8f2rcUxRNowgqvYDJGDunhkQgb8tTGd",
  "key15": "51hxrpmv6CdT1wGR3umpGPZcRJ6vKfZCpfi6tJnAt7P8jarHDBWy6YWhq2rczyZJqxS1CkSfz7T5wv9dmzMmNTwt",
  "key16": "wfXtyJHELdvyYkujFrxiL5Lca17wL8TSPuDCCr2PXi3rpSrC1bud3vXHATgTGiQ8qJfqSnKMgong6WTxpAY6PDn",
  "key17": "5anzB7nnNYgACSsXexuboXcBLoggsXKy7oehXrahb6WbNkfLVmCP5REvSuaoB5jfeNEamanoHBTKLEdWvw7dewk1",
  "key18": "21ZZsM453HAiij9FKwWcPP5iSuis9VB6idJEhbFcZA5Tdxo4xaY598Sr9vVHD85VxAQxkMCwRbLSihYc4Aj9TANJ",
  "key19": "27sf4MCNqinwxqWLMoP62Py7M5g5SzPgNNRqSzBMzbgFNDp68MqvcSKigU3Z8CTTweZA58Gi5aS7FMYuzqJePTAw",
  "key20": "53z9ThkKPS7aPHH7hPeoVkmBXZm8DHcx7U7WxN7rZY2D2b3yJmXpghv5sxszGhonns5hSHSfHF8UmLVXZUhRHEAh",
  "key21": "eB5HMYky9Gr8RBh9sG2VjC5DBKEir532SLj5AZRM9wMgsx5FX2NHFeCsYkS6nZArrTZ9EQZMRQfeMMLRwiyKoQq",
  "key22": "5p2QiYJb8Gry5Mh3fnzzko6MsFdW9Hamnctd8WatdqHjkfQzD1jPg32xt7N7c6a1zxp6HM1HHVjDqYVt5fMF9T6r",
  "key23": "62nHGUTqkFnN1RduNBPgvZQUrjrcBzvgijES1LaQ1tupCUsA2iWP2su1Vj4aEPJzBMBWYUcb8i644KZETxjmo9qs",
  "key24": "35htn4MgTF4avbvZHzukqgmFSQgPGsiH2qKvcZCtQWkQuJKmUzxGPLp6fR3TUyuu9hvSuKd3cBtBZYZB3dv4pZbX",
  "key25": "55ASpGzuVW5Kc4vDMBLtCPkbVDgYRU8JvdmutJjf3j1MyfPi5tAwxSjeTBbXL8dPr3eGZCXv1e9dQpZj3UuZF4Jh",
  "key26": "5JoJ7cayUDuyXDMwnFJVWWeNDcecNZcupZhBt8JuqXcwyqr9v7ytV7VAstN6NEFrfjMaRwERxJRbAQfNGyNBBZ9H",
  "key27": "2SaFnLY2CvG8TQNi8cG9VPBzBZeaaYKmYaVkRqWHkvrzr4w8JWNB6ghGXG2Gv5XNXPEWeVDaML3jL2eTAwZUKz7b",
  "key28": "5kLvWYSJ8onUuwUshGsvdmgph226ymNnzcyxiMuYKD1Ex2sXi7tnsxKtfZ5wWmaLrmUDoGJRRkpv2JV8UnqK7Mrq",
  "key29": "4Ls5g3HMe7oRRBxHxVgBhwnuX9B6t7RJ9SW3CMjdf2wnfRUzjk2fWCY1khFGVazpKJ1VtETtFmuy2KgdSBJanijM",
  "key30": "e8gWaALjz1nY1iUqLRokxqUsrK2VYrZd5eHu4P2Lm6vRHXdRfcbq4iJpmU4upq2EpzsS2CHSEd1cWd4ydYTjUeP",
  "key31": "3dEVJovArbFogF7Ao3ARgHmDNAhcQUM2Cd2ELaFUr65xP18KKjrXXFGH7hNVUXbeRwL45iUP9sKQ4hzUAGrJBt2M",
  "key32": "5UJV3XqfdvGj9GF6w3Hc3TeMxo1HXiRBcn1QtDjBtRfD3PcUoZur9GFPgouL8dNpPWKiPRKooPvBCVpdf2ifkNdV",
  "key33": "5FSrjnsESZdTNYVn9EdM54fsgZyqYMM97NVLidWpS4iWNoudd4912uhM8JUCASNX4gmTEWZeLVZcgJfkm19cbenP",
  "key34": "5WzSSpZJ2CSxrzppToQNBrWoNj1aCBYNSWvah1zQxFC8rN45beXojqpNAuBrnHxuXLT1CHzWhzfbGBNFjHuSCFZp",
  "key35": "2sPfyMZFbKKz9yRwMjM1NHwfwNMc1dUSN4sRuzk9HN6z5FN1GVhDWvowSZUaUuzktb1q2oSsaWPAM3uCiZfbQVuk",
  "key36": "4CiKKQFYxRuxasiuKMTokjaD8zq89a9WfthcL8iyrufhG4NotQiyp59Yzqpwj9LtWZFJERbKceg9KatCqvRLr8b8",
  "key37": "5TAUH7i129iz4Ba5LkQcWgR7VtTZA3wGXsymUH9udJBNT9Q9fQJQ8W1VktEhGDgCgNLx3qd4ru7ynreQfZhvMzoy",
  "key38": "3bpcu4iVjggpXmCaAHPd8AG8HuGP5G8S588RL9edbHZBxRk9ZwqGcf9ArRKgEoH5n3udaoGFz5yhwFd9Pd6xmoqu"
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
