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
    "3XwF2ug9cdmrHjDHgNTniaWk3sERLwdtUCYu356ryW7jrxaa3B55j86o1MoYafSZYs3Rwh1cXPeiJGhFpP3RHQks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eoFdduM8DoMpRhqpuk6tBoit92xU1JMUgJqKCYJek7R1GN5CQkPWKtDmkMSztYLKfTtMooQYyBKwfqDEcQfXaRS",
  "key1": "3bBzDbJVCEKB4YxRC76367YyMLRAzTB9hW1McCeNH3VuqjRtRkFAnhW3tTspcrVCzD2DzNUFf8UbKAmipyRmhA1n",
  "key2": "5qMwVKS3TvEpk3cj2ktk9gWKsb6KtywQonoZCya9KLZfZhSnCK7ri1sp51bTW2MGMfdDbqA48hWeNtLUbmoWNFpx",
  "key3": "33EHjV65F1Pyxj2Za1V35VvDHJMWh7QDpJ4dTB6vF99x9Eb33zy1V4EMGz7AMfT4vrxkfYGYj68Mxio7qAyHhzQt",
  "key4": "syDgShDhhJD4ddBe1PqPNvxUxzb1cUgFYgFZxPuacAWPYJQPV3dLJ3jNFv2DdxNkW7fC3JKG4Eh31DRXq4FxLi3",
  "key5": "4LnBd9GQmAZegdWNZqYsmU6Gbb4um9RfNBVMzNFePhEv7o5ReficFAvBRgrtMrNhvHE85VfJwc7pyV49yyDQPNC2",
  "key6": "5KUNftGC36A5yFPwnyHiAtZMeSApdE5s5dPmAEVpa2XuZpZ21QMbExR7tveJRkCWqh1fhA7bxzwAvBncmZTstcx4",
  "key7": "2jbAthNwitutyWwij8jSPMoWAmbeEJ6Zb4LDF7XjDVWrSfHWzuPnAuLrW4ikp933MLX2qMLuNPCgXM1tvxnansiT",
  "key8": "59EEpwPmonpbN3dWZvLv1tSTC1ES8469BDVYUL8txnUm1SVXPNgjvTxBTkFYa82ALLS3JLKKTg6hAEjGCB9UeBcN",
  "key9": "4QHbsq9T76wgKxZscRCmyRngwQ7HtESVyDzBWQ2uPd6YXN4Xhw1BjToDcjrBjgA2Xd77ecoxiwJtF53oU41PbkkK",
  "key10": "3Fxs4iE6qog6jVCnNxX9q49LKKuz42uaHqG49zFdQ491LyCnYYrkcsNwcEYRmQXun4u78D6JeakXzjejHsqi2GDD",
  "key11": "jdvWqgavCSRJstL4qdLyDu6xfUjH6TCMZqNiURG9WbfTogUuooA8SQAEv3XE22y19eLQcrAQHeTmfQYPEVJ57Eo",
  "key12": "5q8tgMYjKj5YUfkns8CRSm1Q78nM1S7Hd87XDrUu4zWDaENgW3MoYFUc6JYudSgM9BEtL53KQ4MYBKasWs8Eyk2S",
  "key13": "7GwkTu1RVLeN8WnJMGrXJ5Apdin5UXmcvFrcQtaa7RDMHjCKEULeCwSdcjCoAw7VgdrMpvWAPPZQ8hsQcdkmggU",
  "key14": "5HRMaNqkKtKQD7VzwwjGWD1H4ZiKEXFSfg42vL4atkjCrWLno7xuv2RazM6zjkBhWpL6iCeU6MohGwE4eLUN8Joc",
  "key15": "rrS7zrrb2nPRzvwDR5tE4hwYsrkrBW1REGmNGUUQvzbftN8ZCDCfVeqqc5A5usGfyERjcQUxyVBtKyoGU8XscHK",
  "key16": "5v5hryuRW6vYhsFojUZCJ9dXqYqRpFekr43pAbwXXn1PRoMKJJC4MHzeRwt7iUW1F1TmE642pheALwZLXHp2VVDR",
  "key17": "3qNkxSdK27sPn6EEKWeY7VyA9ykLZNj9Qh6nQNbow6eiwt5zAUPAJE2CaeD8vi7aaVhMsY5KMeyp4831rjZ66uKp",
  "key18": "469TXjaE6W5mVSwyEajaavWxwNTPJ4AA74FSaTEt88op1U2bmvyhhWuntxH7JFZ5KoEuM7To4VGTX8zqhdQuZzPe",
  "key19": "2YeoxeFUoLBkwN1TJ4cy4A8ykv7jd8KyQhpVbLLn93imWowPdhu1sWWQ1FD9rLMVyejuXTQKQKJhB1R9TcvkJGGf",
  "key20": "5iei6j2BfMS5DzxcqB9BPfb66bdhuy6umtZGUuBK8EiqR9HK5YZhaBubJbsNkuLx7fBYGpxR1RzWU55gxtvQQHbz",
  "key21": "61gHBo7CU8iBYVJQksweU1FGmvaireuf38yFxGybktX6JPunFaX7DDLRoPmmuX8fiGs556mirKWYVHba8GQChtHD",
  "key22": "am6ebA6QTpNU8K4EX7nzSLLCf1GoBdQRQKHvnZSV6aQX31nGicbK9jFs63nbvZKWKcdUXRd1VLrMFgqxg9rjZyN",
  "key23": "j8PGwFWf5qwcfkR2DChNeTZrjjTHxxpZdCQm4TgwUsDa4e7FYSBw68c2ESoBokzvqPbuSQ5eqGT9c5fMuJAZ3Di",
  "key24": "3s7fb3X5VfiF95YX6XKNKNvv21BqJ85dibyZP67uMkE9RxmTrLxz721dwVNiRewAKhKHLrEwpRuAPXvn9LnSq3af",
  "key25": "2EXwx82nGcGEabCF7v9jdCMywVQ6MNbFg3Cy3p76UuGMWRXTTVrhqjLTCL1CGKerYzUMr3BUeDpR3RFqZXiUT7Aq",
  "key26": "35VRLuUFJh2kyhmwiAHF1oYyZijKJpTCUCZ34reg46nCNVPANL7SGh3D1K6bwWGgfRqTPgtBgDuKiCVby6bqoMUk",
  "key27": "2cQ2Ao7VY33C1eepHJpaf5Fdhz9TeGT1QJnqaGe9o7iSu7p8SKHHavbeXPc1rEGHYQfTJzg7vchRu854ZvjemPgd",
  "key28": "5Vz1ejDkP5YawJoruCV6MA2vpz5SCTW6XVqMqkYYXPGkZAbXL7MRZcisTKa9VzT4aV3cq3HXQqWUeP4GXoccVPgd",
  "key29": "3PjsCUTY4boKv871t6JNniEn5XfamKQ2kWVmLfMM4GhxLzs22tTrNL6wTX1HGTm2rJq6dbj1Tv5YSnCNihb6UMdU",
  "key30": "5XNwrXCY33bQHsDqNRzPzwnVcuMSRUuoLJXudRxrKYmfa1HDa8Kacbot7TiN7XREm4HsxchAHPPavTsPNaBRrYVa",
  "key31": "2RSGwXkCGrginiRVYTH45rv1frbBVFHeZuWVKjpKvB9hfmKcVuY29htjAEMARhCurYsT16j2CDRxcvRge3htihgU",
  "key32": "2ZemBjYkESuocwBxLsw5XqRwBhGrtsAuvmFcq91oE67CkLWS1ijdDyxVqzaEThh2mY9ZAo28cVoYUkPp1XWLrjBT",
  "key33": "52PFNLsK3MW2Wu1azjkN6Z8Ssc42nvrK1G7h8W8QPqhN7rQ5oz73jJSpVwJUvD9PSrQLTk5z9csu4Rsb4jY7LhXs",
  "key34": "51DMzbqvN4JgbzSPEkFkMM3royP73XwDEE3MLVFL7Ag9kBEQwefFBwaLTchsRY9aUo9DsWptTKRGeL8T5exYCm1i",
  "key35": "5XgvenMg9BPLmRTZJXQn8C33xw1pPAby4aHLKzGrVw3WFL6GRW2zBHB4jtnpiSxzWPjoXyCunq9XyJynekvMj9YD",
  "key36": "kjhJXEiLb9oLbQMd8xCVVT8kwz5GLwGtZgeumHv2ASrHkB4MqhkPJ1UfyJjSBg5C9oWvB4hGragmMjusaZSbz4d",
  "key37": "5oWANrZJprj2tpcUGM8Kb6zy37Yy64iR4MUkv6MhqVzznf5qQaScKXz76sjgdkujS98nNQrFVUDZUzjNeSVPZxAV",
  "key38": "4nCxRBPuWrYyTG7QLsrUKEo4qHMSCq1Xn12s1cW2a15mEVPLxJ8my2c8f4fmJA3An4e7Z3XcPmD73DBSNYctH3Fo",
  "key39": "usP5VWqRAa4jB2sCnDKc7ER9CYZNc1bz5sTqaQkyvsVgCA9t9gMtM5aLdmzNqR5vTURB8gxUFmq3ZhDXDZpFWyi",
  "key40": "4S6x9EZ1FBVHNaX8e7gv5cdr9veAk3saeUKeUoFTU6C62mbF7wB1SHrLZJ3CezyS1ePhevxyS7F2GPMJatcj4Dy3",
  "key41": "31kcmjsnUfrpNw1JELgYU1omi194bdLg5we29iwmnQeUPWidY3c2QDWwARVeG8VhEkNZCbjNioLMDGxMTU84vQh4",
  "key42": "2nqMtv8YR5rxd1HX4UCA651Rcm9s6xYCikNBkddbbMFPkA1vjugUHM1TvSspjgxkUWAVY3rjLYoSM8eCHFJ3rUWT",
  "key43": "4Bod3eQdNX2hM92X6hVCQmWXPcMHj1EZmNfYtCkvQysN6sx22ow5PsgS4KcLQKit9sz8MKHRFa96KCq8Mxr1YPLZ",
  "key44": "2Db4mZg6BSHyXYyoprWZffQBNuC4y5qfQnhnwgjizrLCNit9djtVTv9Zgv9yyzjk5ECzhNLfLQ7tu6guNL3UXhSx",
  "key45": "4QPJ71aYzHztyoRYN4syyCQBDZEKXFjJeG72ZQUeUvMhQ65yvYDzgqbP2EeN2RGK8zztAyeiU4MW47kfR3XMXjJ9",
  "key46": "33TmD6WFWHopQ4EgxVj4XM2s3dyGDPYS2ShfEULuKTCiMVmgnjdSYgzqZyktgKn4jgghMCG64pyBUEUpMxQfjs3A"
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
