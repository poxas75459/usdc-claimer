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
    "4BhCrKfocA3cDHum69yJbc3VJpcjQ8GaV2tijoChZvZ4g1vqn5kXcm5KkbqbuadWW6k1i2kr54msE7pCRSqjrGXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oM3woX2wDy9UMgFieH1kYmAvSEo4VuWqfHAJPDL2GW9RkSMkLgwdP8ZbhjR32RAruriDoM5BEE6VWtAis7B3ap5",
  "key1": "4VzhVuMKT71UkFTHpWm21M5kzsYNMgt92unMMMFi9JHqADFsTzhFvFBr4EVbuc6fGeSrhKtFekQGkge5vYtZoAt7",
  "key2": "479ukn8nMFnXy2MXGHFnpFNvmBCFo5o8tWAV173mmo5YQhfiUnreSuf6awNHPKf7Emep5qjiBet3eAhDqwZty27K",
  "key3": "3tutArnnipF8ps28hDFMbokx7K2m8NdyvPAmVFi2JRCKyBWfaVSjZtj7BTSjBSCqopUVoo3dbnvjcaZviEegMoCV",
  "key4": "5PGVGB6Rip2g5e2KSfhoTMFqBtjXRtC8kRyFRcjrJUdzc2Exkb28btkmaszdzfEYQn19EHbcMiXpstp4e6oEPfhD",
  "key5": "C4apijkDjUdWYAiT91Ntarf6BugNvG1bTZhruRTdEKb13AwoCwkW4c1jnfCSmbmZq12cbFpZ7eUzQhHa6y6LMBK",
  "key6": "3Je73nqUtVTonsraLgr8PcZdcA7GxwJrKNRJjsEWAqiSqJgkMKsWhSzr6qvJ7yVeWuNoTKfunpqtHyJFWGQ3urtG",
  "key7": "3j4efpcBGmbs3eAsW5MPujG8YqjEcq5nqYMqXR4qjTP3qaoRSoJnrpH7Wtgk6VDwLtvTbYgfVLwSxyTk5rLW9nzt",
  "key8": "aSTu5wqKMhfd3Vp4UycZzGz5UzTtu4K9HwrdhzcjFupXnjXn8r856ao66Lunicb3L6HfWNfphiBSVQMEetLp29v",
  "key9": "3Quk25NQxSHLHavBQRH9MuQsYFXJFH9eqE8RjYoUC7NUdFxnbh1XKGcTFyDL9Hn3x7LG36hHrhMWj2jmgrTsaGHQ",
  "key10": "4fF7V5WRwUcNa445RVrAG51MYPnF645NmJ2yFDLa3au8bQWcqjor5RJHiEu3vQ497MHiJp8x817d8ZYHEFGAHNhF",
  "key11": "4iaMCJo7mnVCVnyBp1hu9iXb9uozHQPY88UffAyqtnmfzdPbk23x9UMZ3RhW6hzquUo6X7Tza3tXBokkvRTeHXDW",
  "key12": "2frf8xEU4dwdxArQv8yAKRQ5mpRAHWRtozXKYDyai1wDDqpNguWWaR5M8K8rUZjGYz2v8onpxHy1Q4yh2evnix9n",
  "key13": "2B1BoJdv84mGLnsdDZjKz5gUJeBLqx8Vf3wu1hmgXiQqjw8WtgYwKVwaAScUXhVbXNJRncNWA4BqkyRW1YdEL44x",
  "key14": "5rsrgULMgXyqGJu8raZkk9W1XNJWf77E6tdgeFb44zn8LFXNxi64iJebhW1KmvDG2UpTFSWVV7KZ7Rmmj7F73LD",
  "key15": "5BptFjSCxNKUeYPQXqMKWa89ayM7DEHxPCuhFnD9K4eHU9juYmDjENJNhBb8jJJAozk5eXRD4Ydhxi2tkjXr7NwZ",
  "key16": "VV5HNcxbnUP4RsnPpW8C62hgQRYpbmHPPjWJKQrE4Keud5gQhWuDzBLKMXiCFkpJtQer3NPMkf3oQAXAEwWubjm",
  "key17": "2ZJB7AFUijittg8S6bcumyacVQuswgRMDuvfTRd7ozmzeXE2BpJu1qPbpzVwR1Mu5Xru3VPikYzm69UQUWkF5yw2",
  "key18": "25SHt9jjswiTLkhJn41oxginKgjV5kR5ohjNTHnG2ptGbrP8a8VkDm4EMa6FLhWENTtvua7NtwycWuAijaxGv5Ur",
  "key19": "4xMhbQxkvi4zhgsfxFG57ZGjiLH9T78TKDQbY1Bp1HcA92e7N386pX5JiyYfzm78i1NW5x1z8ciqUTYS9BocVtMn",
  "key20": "5qs6UtZc3jZ9EUbZxeFqjoSBaEHqTFakVeDsBjVMmS9yvGKKPYTZsK1VjjrtGwWa72NgEciL5X4cKBt151J8VfbE",
  "key21": "oQj9pjLcy7yqup36Saz4mLajcjSGYAgKrFERDb3m1ZFdThpWv6Kxtu1R42W79e8eg7WTGmqDfuxEVwqc6dx1efc",
  "key22": "5HBv3MR95rvm6GhvLtYMP86NNppUTpgcViWfvyuoyDN57k2QkVywEWNtYxj6ARWQ6rqAHiYGee87wfX1yFZsBLeX",
  "key23": "3d9sgwWrYrgaQyEFD8uWG1Sed3kb7AZ3ofq1drbHGLeUnQzkVEkuF9QC8NKu77W3vz5QyLBt8QMWf6q7eTMDP5ye",
  "key24": "2FhS6BRiDZvXLFw6y9TpN5VDnLkyoJuZkRA9psg6zabmjVBfL8u366p9BD8MH5MC1bKEQABTovCV48n2s2zUGS9H",
  "key25": "3bbDgPvhLsYfAyzTMRFkefywvaXt895QyVVvA8ymbjh6h3EXcbHSoGvYs5myzTigxteJCVBCmgKmgEJxnfHVkrsX",
  "key26": "3aMEnijjApaeZ5BYx49vkR6fmdqwg6ifhZnqBoAnNQf7guxU27JXEhEf52hisYvVuFqjC7KW7u74uvb4PiXkTUKX",
  "key27": "65mbdKc9qQuoZBwDBWXXDtvcWJPMLrd336nA622rRQCYuXk7tC7qbJL35Ey6QS1qfoZBWMZ1FDT1PgNdSNVAbwN4",
  "key28": "4WWgg8ZqBSYJ2PgWuEsz2V1q57GSWF2Tbw4V4fQqZ8AiiaQPdHq8aFUEt9dN6WcYusHXv7VvAWLcAUH1JnmC7Hhi",
  "key29": "nTvCzZqzCKCDPQ2Pnn4E4z9mj4TbNwRyNBUPZAusD43RzkMdapX3rMAZ4iDbczph39VGUMRhjnnUCwaminEvnbq",
  "key30": "3MizmS622EyD6vduYx9k1eEvRN5NMLWYf6bnRH35PZUuEBHPSSBY1BBdrUierwLwL1HMdwaxkywfLx29Rcw9WVQM",
  "key31": "3d7PPFKHsoyVqUgx78LPoP6HQ2dj6xb2LZgLGUoRtrd3tmBkSkc38WPmQL5CjrMi4tDTZaJkW8pcYvTYKZPR7ueA",
  "key32": "5A27av2d1T7XUfd61nysWeiYNgvxZdmWFLVyo3mibe3cGUony3YnfkGE5ZprgNV9uw8Cr7zq1iegevhGSopbcnFV",
  "key33": "3LNNCtKQk8HHA5tUYs9trojZijcqCt7JJSfpgw5jS1WEw1L4QaKgnKvXftyMnkQkcv8DWHtJeVRf9CxMHahYbaqf",
  "key34": "5nCQ7DK8h6YEufJVGLm8kzEBGevhvTqp1PJQvLVKcBAsyZnbAKH9NCwMTcnpuHn9qCZ4cYFk54PUb28sYyGNK8MN",
  "key35": "TgN15Br66y2h7H1Vmbv8S2hDxv9GdhrMTZctHfpBT3CZPmZCtt3oJ8a9Yvji9kioYso1T8cxXLW8fNZpqBbDaNB",
  "key36": "3NPD6Q4TX7RN5ekLZrhmUEbj9AgFAkKq7q1XYR3YKKRvudpSMnWQGbxqLPWduGX6kTP7Er1R8SBDojDwe1DsWuy6",
  "key37": "59MeSEudByCGg4HJHvzWosaLutCUTE7xBYGZvdViS6zDG5ov4vCjE13WVMb4b2Sepntze6EM3XesoXX3SAA5hg1a",
  "key38": "4PTsVGELZ4fYghxPTdAJ8is3sU2MkMBW9xXTxhqVogXvCAbaPuRw8EQq7q2VjJRvqYdLEokVrAXguKUjFYTE2eG9",
  "key39": "4yfnEVWh4FJ3Bi2BVFQBZSwZfPXvh1qyAUf36iMcriWfGmsEYZVRZ5GAjBfiQafc5PZsp4ihd7HCpWvYxRJTW5Qq",
  "key40": "oh9md8UM1n2XxeABPA2buXLhHPvmkUhD9ejp6AycRcdAyoHKty7VVJmSY97TZFKECa76JnoF7QqkfUFK44g9z1R",
  "key41": "3x8MuUDV5gc5FmYbywR8MZaHRqHqj7n2VNJWsf2RPZeNoLDRMTPiGiGNKaKTPPcv4CnYjm58SVDimwsUPinEh3SY",
  "key42": "4aiaNDbWviSfmrDMW4aMU9AunR3DWsd7VNf2vGpGjUf2DnyQqN3Gsd8fnMdN8d3a5TpZH4YMUu5ziuFqPPkfx7EQ",
  "key43": "4ShCKBKehcnuZSSqtJV3zHQoz1GCaGL3dkPUXhc1XWBQwG1zGri1keTQqR81ffqzsdcKCywxYEvJDLJu3Yr86JrV",
  "key44": "5YqnhVEdmqVrMtKoaSagTUhziL45YD3d44Fpn9dF7GwKZSX9FzPGtLPsKaWx49z4F2W3G6Q5A7rbVarm9f6QgkCk",
  "key45": "5Nan9TkPWps71wCmjtGPDrBNuLD6vdf8whMbnS9RrVhTAkviBgJbDuZXC9oLUFAJaA9eRdpWK6nvj1xB3NiVeedw",
  "key46": "kzfkyyY5kiy4H74bCYWLc8zATAtn5wQfptU2fWgzsi19xynuupYXZ1f9cbwsp8fwswuxSArwcjkqAhmPHi98wk2",
  "key47": "3UVuLAGvytXqe7NCMyYhMFSCigtTaqFGiAosM6JydEsxsn37HV28ShHsx39zKfiDBrizQdfp1gtRoPK2JVrH98T6",
  "key48": "5FdiunSeWiFHeWWVj9q5ZqrsThksjbpLUtQz5uGDSNvVounUrhv8CXBQXAihqHxV5wEfJSQbBfkqQsR3kwwDgzpz"
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
