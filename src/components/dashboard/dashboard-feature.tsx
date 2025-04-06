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
    "4nxSnKTGEKkzDWEZLDYbm14tAYipVte2zxUztbgpBxN9h5txWa48LEviexEFxg2tAwXJckHAbowp3txmrtqfK41o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CWZwQZ2L1tMvsd41aRe2qB6F6D1m2Lkr154TLcubBpEgUUxp237Ez1aa8so9uUToVYSkpmJ65VcTDYNjDV8nzEP",
  "key1": "2QmwFH4j2rRAuRGQaPAXvVeSQRngMdFTBJwD5Km6JFZSU7XwfRdVT7nS5U8CDTyQMMMCuQXydcVQksVdRayutp8m",
  "key2": "Syx7r2gUZTMvYQy6oW5DB833w3eViz2duvYhKoT7bPYCsgxd22vhdBkWMZjJU9TpodkRox4KCobMcNmr9DRjLs2",
  "key3": "3X6wWmHuZPPNpj3uw1MJzHkNCww2rjrEzX5ptM213GUmT2kR8t377rsiYwqkF6azYr1jfLdQUtXvJrWck7WjXnAk",
  "key4": "Q8DjSDUDQxK1TaH2hxG4Dc2TqjPRBno8BSdiz3qawypDgRzV4iKY2LqcqbQgyV9ksHpj7HXZMbNBcvmyoqd4H1h",
  "key5": "3zmccLk7b1As2Nu4rG2HGF5Mep7s8ctyU4Bkagpr2WhBPde4JrYd5aY9oFkjFcXZyYboHhxSmxLmcYMPU28wwvbj",
  "key6": "2YmvmBbqzZuKM297hky4TE4UsFeEow5abSYb3fQhSk2x6s78krBQ6Y8PY4MtkvmpqVuJPywuTgwgf4sUo7w4Kfwz",
  "key7": "4Akid9Vgq2p2Z6TwU95sm1igSUpNihXYan6vMmn7bCZqcazQ85PR8HyUBzpxxP3FJGYZDmCiACffNQMjnZqzt6v8",
  "key8": "4EdJa3JrizsWriAw3AB2G7LjTD7GJKi2ejBAZqgCYK9b5JoRJDKfQGmd8WFoeM5skVQx8qvrqMc8ZK3ds6RK8SiY",
  "key9": "666TVFkP6uLNX7EW8eTDbS8TAq3QjJLhxXbWgtZ8oyksA6To9xJ9UdvsmL75QWFu3imbGSMnE5T9itovbGWNsYt4",
  "key10": "5tc4AEGt4qzALcJpkPgLDV8dh85G9Zz4MW9PjkqaqGWcBXaRmykcRHG5MfWmx5S7UG9vy9xLj1W4z5Y6RFZt8bkd",
  "key11": "2fs93tqdhFDGnPBWvVkq31bqZtkSDva5Bs8pWUKCtg7bZQhKK6LSCSbWERXGFAKSZ27mMVob6hENqnkk2tzJsEuh",
  "key12": "3e8FWxFf1wfxZQyYEEEyVBvTJYKNsQAkEdgQyAVQa6gr2swb7XF65poCSeoCVW5ENex522cfVqBkEPG36boCdqW5",
  "key13": "35TWJ7Nw2MRCF3XEhQ2KqwVMkz4exqSmgYuEAiQC8aniUVYeT3emw7jkpnZWTEtdscgFBcYDvzQyRjWCYvum1sz8",
  "key14": "495rfXc6zXNsFvggoHNJWzGNNy7dDyGdMuRfmVmCg6XriMZx3g1p7vgUPy44qX8yLmw1yspFs3iwZ5UqRXo4hPVt",
  "key15": "5rYurM8DfruwfKWJoEbrtnupBzuSSr3FdsYK2UDoMsdc3eaidfgw1vttZ2y9Ee6YqVpHqwRUzVnf55wa3VeWWr9c",
  "key16": "5k4v2BGuf6TMtJ4XKKVUgBjcJ4sxQkqr8yRaboBXFHHFgLErsbZVjo15H3fqX2vwMT35oFUGnRsKCQJN8MywBqH9",
  "key17": "NF3Fi5W1mMeqH9mPx9sjKb4U91cjsEpEX7Hzdcprq6XiMimrT6C7R76gDdNfEms9xr53KaxCKqJqYMmCCQP8Ps1",
  "key18": "47YYDP4TQV7yToPq5jHw9g4ZXnx3G3s9t9X8mCGXDaB6edYr8heG1t9MteuUAm63axXQ1zXM1g72YUdVEEZx2bWa",
  "key19": "5MhmUdfSyqZxMVKJp1gg3J3SWmzXgWFrSxT8x2f9P8jwPmvGt9H5FvkCQRvMb3oNiGuQ9tWvyeL6giJgQ4vKzvj3",
  "key20": "5fhKnDEEA5a5WWcXakBGgVXf2GkBtRUgCWGaiG1Jxni8oiUrVky7ycUkxrpXY8A9zV2gqRBRjqpgzepXQ55vMX5n",
  "key21": "2GYStofXFBGDX8MCmrvXw2RjNL2txFdm3CWxNHvabQ9SYy5gwAdCpjMyZTTs6NwxEaVC2FNgzm37xsaSLLCsf1V1",
  "key22": "2DKqgKSVEtqcesLHudWHGkuSjHtu1VR6qtpBpmbD9ZaZARJkPzJQctBZkeiPozy6PgFN4EnRPMsMt8B5kGuuCnAh",
  "key23": "3ZJPf7zmGwdRysMCuZgYZ92tv69kszyAkFxFCjmWtosXjrZoQ4JnzopiD1L4Ay3YiZqBz8zEhneeLrfPz63D63Ab",
  "key24": "oK7mtJZJWck99UQuNuVM5T8VDCwHhqWdrcQJJUo8Wsq4FpGEe6zQMdBDFNF6EM59swvHBTyocQGrSkhqVCKMLvW",
  "key25": "2Gt5XsYu9LUMCiyNcnLU6uApPgp6LdKpXnAZ71kzErrLwqaJL2JyU6TByNsXnKRi4FoQCNwW1qqcguAWZ9Q3g5qd",
  "key26": "3hte3kQnqfHvGKy6Sj8zVxonSM2xqyUjRpkWyEhaQhk4EtXzwne4yBDtoy3vdizgkhr4ErAv2mPCRmRmTof6WHKx",
  "key27": "3hcr4oNYb5eazTDhuHD4HCWntKpBz9tW9uJUrZtgZkshx49Rj2HvYLNE9bMyzmXC1MpHxGFaTzSj1m6JQX95vdt9",
  "key28": "5VHhtGD5sB83MH4hGuptsVekCUMgvLpMYCg1XXzp4xmQawDdFcnPn8f5ZMyMFWBZvASBvLkA7392GzDZ7P39WdUy",
  "key29": "5aQDbwETVvG6imU1m98uRvPPkkJmbj51a4hAVY6JKc9r5eWsPANn3zkxis97HnEZice56i4G7BKk32dohREhjsyb",
  "key30": "3mTSrjvx1BYMetkYMdi8WvK5iY9jDR3Z8SB16qWZKpzzD2jtXNMwxwPLitNiWKxFi35NdJJ7u7MLaqs1jUHWpdqv",
  "key31": "43wqkEexJCZAtL6ab9Mtj8tuMG9LYxJBLyY2Yu6w4pWXu7py9ZAjfgTRDdz2iKuTQBYME2XCsV5JUh6QWs9JYdo4",
  "key32": "9pppi6nqGFjjhHP7f81TBHSRwrpf1RCsf221jqqTi3CS6qQG4NMnripWbEDtRn57GLKsSVfFPZWX9DuF9ebq5oU",
  "key33": "45MLkdfy7ABXFhqAMkj73hMhQo7JmX4i99aJMmxWhEEwPGo7WHQdEVoARGt7jh7umx1MiESGCXG4uGJAMcVYvnRm",
  "key34": "5FFj8tEc4NgSaxNxb96jzUzKMonmiiE6K6vQLFHDE213WoEA4P7JUPwAcfoHYSLca2i6nNwpiCFuEjBcdJ66QBPW",
  "key35": "G7x6J8VYB7dXR7PUpouVs7wf7V9qyXnv3n8ZugwhT67g8fzBk7PySGjT697nLgjemMXT4ySRKiLPKAEFKgYPQHU",
  "key36": "4zkAAPE26vCozXncgYWkDsQtj774z7N2xZk9T2otNnKDcWzuEnJuDdVbu92MRxRhf14Kk8otgThUEbmJkqm8L3Qo",
  "key37": "3HssD4V8as8TEya1jJEdrao8f4UfT5V9cf6EHLNzxBLr5npkWD7to6P9p8DHqKRhyjPSXbcrVBk6p4S61NCVV7X3",
  "key38": "2usUAHnDb2dkUk7eihq9nhccXeqvz1wv8QPWwGPe9tdthG6Wv7uU4TpbaQYqACoHvxXaTCLMLSetaj48pfczz7AT",
  "key39": "28wwyUjg5EagzGy9Lfqpia3CAUJTru1JZCV9RJPMUh8YNg1sf34grm4RPfd3TtRQBR2wHrw73NfDpFwS26hMYwZX",
  "key40": "61c4GKuVCzc8WXxtuRHjEGbzmjg2RLaCEHzdDnZbccFtKKTARLeGv4otSqteUDVV8U8fq8NVUYvFS9uWyuQjxPCk",
  "key41": "2UN4HL68VyxM2m4ZJJUG5MdD6NTZMAGi2XcnQKPtiqbmadMKewhPTBKfGNgPRnnGpRruPrDmJUom4YkRCWrwfjGV",
  "key42": "4f5AgdJ1pzCzoCAAi8pNEWReDuuTGYsBZT4f4TEeKqn2PtwKdXYntt7PXLDmpCscKe9kAQP5fUzHnkWFbjrvdq8n",
  "key43": "8PyVZAQRcWkCURu8Pj1LFD53Rj65YaKeg4GFLR3wzBkvqMwfB5QvemPT9735k44eTcFa4DhuFWLuDx6LVPcWCFS",
  "key44": "4xEcuMkge4vWzug2R5dJ6SXwYZfKukDTMFnPdjg7MTTCgKczcQ6kYx9sPAVCuiaScYPFxNTGcp6jsBLZabz4jUvK",
  "key45": "4rLr69zNUvQ9uzL369Eqs7UChnoAb9mzQGQ2BgRpUwLyphEnjwEAAt5pPzextRzKXF9mVxuFMuVfZbfhQdX4gUsG",
  "key46": "oHHJaSEFr7ThK4ChKbKEHhyTobxB39XpiBD6ZqMVJquKsuEhUcV74oPMkb2s2C8ZqHsvScFhXZcaJGv3EoiV9en",
  "key47": "3jNYAS6v2fyNHgm8iQLKXhCfKr5y7hkVf8hvhn1nwWcoxe4AEUPu1wJy6gozRaDXxmqyimdXk7AwBVHPKidHAEsC",
  "key48": "542vPL2m3YdwFVxbCKgCge5MVwGfQ5unScK3Sft2RzJnNNSMzhjuQLmHsMPJjjPNSYVbqVEYkQeQzgUcoY6gLxSY",
  "key49": "4tYpYKvZtLEWfMMRBeBGWQiNvtqX9tjKvdfZ2wESYGtitbDxqK746kDhDQccRKiAkeVrUeYCod312zUeYLaKFLqK"
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
