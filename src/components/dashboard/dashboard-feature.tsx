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
    "S5zi5XnGJFXfMBk1GxbojJ2C5mdGyedGmU4egCZZTfRDo7LQyyWr6rFkLTsh9pqgFcvLdhjVy6ZuRPQwKb59U3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ntfebUEHb5Er2oAcE1fnZowy16ho9Dw93Yp5Z3LDzMEFP2sCTUZBBNYNEgxcRoMwYPjuqTSFZsEGs5XCywFjCsG",
  "key1": "2STmdYC8zKKgYjMU6ub8JazM8AFt5BzBuTz9LVQnqZcFVb4castrQvs3aFCMjiAoCsZm2fnQwMd557DKoCjqBorV",
  "key2": "5vPDuXugf85NkTpWoieQJwaaW3bNUaqpi98FCvTrYtS21GUHYq6LT2KFyaAHnbYDqpv77DC7osUNux4qeSiVKepN",
  "key3": "vBV5rbaNi2WnHPxd41PQ64nmmBZGYwF67v2f4FAXNx1iyLeruFxpjDfAKxvyVnDQjAtpZCHpknqn5S4fxPYeqPs",
  "key4": "29rJFYYbvxPLuycBvVBzFQ28qx6PYtXP83dqHivoD1RiFSzustpkzcFGkkUUZNwHMHjRWEiXL4img6SZ4Cjzm2Q8",
  "key5": "4WMjMnbX5MQ2d3w7uqhTTg3uaQcKXSUogaaa3mxspgAjnSQ3bdsAHkGJieevzfWBpHP8u4ZjwtqQH1s4o5zfRfp1",
  "key6": "3eSsEHTqh8TY7MyaEhXETsZXzY9iBUFNSVC4vc36CfRhWxjRFycSfskoo2rYHZJfbU6evpKf9UwmzGgSDbqrkBdT",
  "key7": "2LqUrwzh2rGseipcXCqHc1nNs6dgz8YTFhQDSUgvHNXNFLQgHWDhbTd5iULuQX7vXSLPgfsSLE7cKoP7CZTCxxM9",
  "key8": "4hraYXij8xs1fLSaFom7QvGfp6Uk2Su1hBSfD6Tz5sLX3Dnp1CHS389WdtpwWV6NUee96iPAo69UY7KVnp2qqkjK",
  "key9": "62AmxJFLHXRRjdNLBS8iSAh2E1XnkHmhephjzUQ51LXfVSjQahg5A5k9bmT3YcbSoVdLhpsFYu1v2Gm6Vzdfu9Wn",
  "key10": "3hTyYxN6fcdcSTvRQKe3WR4Rfq4jHpuCZyMatrUHQ5RuHg9XLYm2LJjH12Z8GeYk7SudoMTtDrqjz4Gy8V5a67vF",
  "key11": "thLx7JUchyaYeYWS3HY1pVaYQrWN3ADkDbzu453btvTr9W5zQjR9faG91SbDsjJowKMfuYC8NKjMZMksio52M51",
  "key12": "5qNktSk2MWxU49jwHKNjncTLcFtJK86DrvfkYCos4yRH1jR6ZNJ3BMSZZUtp4v2SY2eqjmbVcWnCzKqhA5JrZKpQ",
  "key13": "246Zzvq5h2pUoBddZrUv56Tm7BJUxYykeBRAYYjvF4kF5XKnWsgptZ63DFXtUCtLjQK7bcrjj29who2M5e2sRC4M",
  "key14": "4o352gxvZrwUnSpLiy8Qh2NwfEdADYTTgezsYYcm4kqQCSqCkqB2Z75U4QTCSgJfkgc69Q4SFcE634EeMnQ5Jmyq",
  "key15": "53yCvjJ9ahuGby4JVcsVPfmH2K83658BYBVbAf7B62p1N8ciSBsSYeTY9fRqGv2TNS7UPpHwt2ydCTudSpAjs6VL",
  "key16": "23DGhdeHiERiBGUiwjKwkH8LAA1diZXtgm7SRycxZpM7kafL9KSYm58tencWUzJTgCjBm171VM2tH1GBybg6givh",
  "key17": "w1Xiy5h6AgLQWLL1n8w6J7w34FJgEGHTbK9zsnK3d6hKsRefAC8SUKrSawme8TJbvKug8LwVQx7o6W3MfquB6Se",
  "key18": "54hg86z4RhcuVxFgAJBVp5yH5AMQxsGQzegi6oRbqBDv4mSBC1fBjEYXooBB8feRvYCSNuW7Z7u1ucPMLkG6ZrpT",
  "key19": "28TdxMk5rrPThnsWLbySLSC12yoRoR91TLacjtTSPxNDe1FD3ajPoiRSFDscbBXqTb5CeCsQ43Yn9q4xovjRUtvq",
  "key20": "4mDkzQa39xRgxm1HaTSHZ8MU4RumKtaV1JsN5cKAe8Zpe2sGaVCTDHv41mbktMpr7Gcy7XkLuLWd5VYeTvfT9C5N",
  "key21": "2A9KnX5YAU2iG1B4yyqXWrHWWvLp42cYtMqGV4x25k1njbyft3vkwQb9cQbJxQWKKupAZ2GmHhLfwWfGwgixFJXq",
  "key22": "4xwRdX2i6Z4XUxjEjfmUobvNdSd7v34V9soR3tX8Dt1mRiZSc6RmD2zoaLtCrM9kxKVtbWAoLMYDva1Y9yvdSmSv",
  "key23": "3juqUJNEJPxAuZ1qJ8xGU2WyFcYnrEdmxtYm7nBTFY9bpbePj9iedVYSLsn65TfneMJyotXUWXVthSJPXfcvGEjL",
  "key24": "2Xau2NybdrtfvyNybmKcgdbY4vXnY4aqgxHy7FXreAEF7qHhVmTH43B4msmz78hkYtfghs9wUDgrhqgNvtNHmnPs",
  "key25": "2C82iuFFrkhWk7dDTQBeqp72WxStuj77ap6mj5oVpdFCRNSu6ZYuhFY5ZCHdabS6umKtQXdykyfmeCPfLKFZWLH1",
  "key26": "2H57yyUSfqo7MWh1hPQWmpZFvJYwd2XfRjsFx9XDeqZUdsg9GraJfWtZJ14CszQYWxdBUoVCPEugdJcYUMuzQbA8",
  "key27": "5HiLmPk5hKMtDZTzpKCFTyL7QgqJC6cjuadWV1azkVzJABQ75y59qppHJ7UEgQxFnVYDvn9ZBGub7ZuRghRRigJe",
  "key28": "5hC4AcaB4fBeNm3mC5tgwpTbD9DA7YAwSkBjmkxBe2Br52yAS5GpjSkXXNK98qqQ9sjvCe67iUvVyiEShDfhSQsY",
  "key29": "52h5mebyZvh6RU5SgYuZA52kECqG9mTmhmN58Lj9cQ17V8Cmdjg6VvXxXN5SrBEzyAsoZoRNRc86rnEuXXQyiqtD",
  "key30": "5Zm2u8J4rPnrjSGZxMqEeGUNVrVvRRNuZXdSrnytZtYRCmZWNAWkDoRnket8b2Ur28Cu5s5nWQZvdWUK5gwHiKo3",
  "key31": "4gcUJbeyFQ1HzLX6ec8sFHwofpUNmXWoTJVcFHxNKfZ9XcdEiWMY8iyfbnFocpsAbpmiRDfbt81zK4zxyCJbzLnS",
  "key32": "buEfoYu4eJxQfF8A128rBLKjSTdCka6ShDVCf91hk4K2BX5YW4xWunMtiZHXSgEFgLN3SHQwFzp1BFHDrEqHYnb",
  "key33": "2BRXuUG6ErwVxHoytPMeAEPXR3hvGSvLhvnYsiGC9H4qjmpsBe7fAjKB6JyBSrZv9HCjW126iEYT9SisstuPhqxY",
  "key34": "4irY9AP2wBEuWMCL6sbZ6b7uj4Dg58qM4EvBpvfgP5wy8tsWwz3PRZu8kTx9FqQBqWCgUXUz1tEZnqF31gN7hrUY",
  "key35": "2bSnF3BTcSKXkm7KmbFTGsTbGzmhCaJAJdpC3EYSWqyHWBL3QrtWyF9aPHHLpynsNf5MMYjmds2Yf9vZpyApYtvQ",
  "key36": "5Wihp86Dhkoa8nQTwdQRwJXVseuRiJi7RqmWpKAZf9EwY3CHeTMj1TSrQjWQtUP24pbU58RnjSvG39Cwgomhg4q",
  "key37": "3VE85e8w3dLRS9KBo8kyPp2kZuiskzywsT4hhytMNr9uand5wWrJUHoVecGD6dVzSDgSKTFMeRjwHhiVsqEtHTmA",
  "key38": "4eyBXeLixD7PeDEogUU29z1QDxtoyrdMV1XPF7T2ohxrufXvRyWhYoNdqsuKyDzBAE9MdBbtf79UpiEGqH9oJeFy",
  "key39": "mjEYbcYAW79aQEhYgARkGasCQYxL72puh1iCZHo5iTp8xumZiwWaxL7DR9RJb82oHvEn6x4P1t7pSJag6XHGBdo",
  "key40": "2MSFeKo32E7WBFCfwj7S4SzvDdN9NMptDY3zd95yRcSCb7KupPtqvQj7FQENRcCjaWMnXdSPbo6GBsGoVpDE5qhj",
  "key41": "5RpEBGpzmprgDBY9qnPnHmpVdsQMbKc4wk6iF74s9QL7BuCFCTJaVx618zA5aLvw1VxsSqy27ZGfxm17MUV1W4mZ",
  "key42": "3jzKeLTLe8d5M5L8x3rDnhcaJa66ZEpYRjBDfZSh4SESeUPw8c7NML7XG4e6y7oNUi3xxPnaMQnikp2ZLRjakt1W",
  "key43": "5fFZnEEPTdYfJG8DuJ1fJsumdWCKauXpRoDuCX6XLPh2qg2VL5Q3GoELaxcKf9MxydnNB5u77c1B1S2itDNyPk8D",
  "key44": "x2ostB8Ueau2ASMNYi8MLAn8MoHuENHeHZtJPKbRxVvQTfpo5bvzweFqWhxnQPM7ZvL5RBNreqSGSubdeWeQJbu",
  "key45": "4vJNcT7LViK4DgNAQ2f3m1rccW7YZo4M3kttqK5saETVt9YL1LETs1keeNVjb1NudvuNogiH242whQTo3fAUhZMH",
  "key46": "5TtxdC97VBg83MrQD9j42gk6HnBxez4CUdjBmTPzMDEXRDsNg7Kq1JqjB8K2TSEDfX6gJj9euzyMh8tnAzBx6Ra5",
  "key47": "2uoqxoaEGFQjJr8LDeU2kR8AoSEPbf9WADtsdosEJfCmigwZ2zngTKDGZoPPqC38hMf3ckh5iJmegkvGAhn3yZxa",
  "key48": "2qEwfYePdha7e8Uhn1tVK5y7kS2W2uvJBvYSwjzWYNB81DUMjFV4T7E57XAD3YLSnXcDVi5bVwJMBNFcWLDGvqiW",
  "key49": "2B8HBqWb15jAMjrD8zWU4y5r7MZNAU2XoVYFiW2YZCu3mdHBS7sWJieTZNadSjyNwFkzR1HbcQzLZi3zvFgc5X3Z"
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
