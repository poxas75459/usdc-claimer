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
    "3EFMDwdPszczwxhtbXkiufEZucJgWPAFBZHjFbqAuUe3e7XE7PFkhf5jsTTf6K9T6EQZEjRXLatFsdajhepr3c9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NmEQPRbNEdV2Ayc8aQzaE8A6PFUTeCcEAfhtgbi4yH1vRv6QpPbNg2dET6gyX5ig7xn7ZNo3tcng6gezjCkAR19",
  "key1": "5QcLC2Spt8LUHgXdEVjjYxTPSHSgekAs35SbbCP1QByhwECBVkruupRGQTGiYHqJzMG5LzY5JaBo4eULkvyJvK8Y",
  "key2": "5KbZPGXBXvyDmSFPMAuW8hk6RS6UobMDKV23SvfocW43MmmVeC34cYKqa24uWBxy3m144DK9ir5ZNBjc1YLWVUcU",
  "key3": "4PWdFEzNnqGiwRKjdsmjcvwBJ5x56644m3KmZD7u9XRrV75gJvkVmk27xu1Qi88C2QtMwpq38ivRcjxgha33GcM6",
  "key4": "2RBHkb9Gh641d4tEnSKzmPZbrpJZp8uo2uU8JdUZ2Xa58jQnt29Mu57xSJYXYroS5qWJ1SSawws46oifeZgkrX7a",
  "key5": "56RqMBchTpi65hwSYVkVdarGbheZWEEjrvzajWrKQcmcU681fpyweufSpLUwerd7J9fpZMSmWcrkNAgoNL8Ai6G2",
  "key6": "2gKEDi7dhTQYJccPec4X2kqXQtZP3BL4Amw2i4Uj3zmE1Y7qKkvo1MrSDWVNqg98XCjYvrHyT84je6fjcF6WsioC",
  "key7": "EDSxKqtrLA8hh92cj8CVAKWDuSLnAt8x7Ei1KvPrFKmQQzQ1EzV5rW11pSbdUATAgsSn3jzdCqD216GBp2UawcX",
  "key8": "4YzhCiywGYQFDHKPejx4viYgiUGXd9dQ5mDY83t1Y27tMfWQCKVgrjq1i1JMFevfEhhKXFBqCiqLSotgfFN66rvb",
  "key9": "eDmsMsYkaa7w6mQJxmbXrjiURRNdu5mLS7fTD5VVxGv35omreeWKvmoAebhe2Ux362tti6W6tkdW5GZLztAH4qW",
  "key10": "4G6SjoXSFvtcMnpiZgAus1wqzbn6iSQyp41jBwZ8kSeAuMs2KTvxfY9kV5LCt1im2kwYduHdXAP6x24BY9GXg9D8",
  "key11": "EVMkjd9mfECuQYsSmMa44UjPg5bvnF5dxju9Vunrzyg8nDNSd1RppM6gjwPDypMsE3PJupW7PNBtscA9BnHrLiG",
  "key12": "5be8hnAxDvhAhg12X4zVqsFWR5niXRZywc5qWaNHxTS4ncb4mpUotTAaZLijRReYtDqeTjh7xnRktdiEqdUG5Lgc",
  "key13": "4j7BnwVJx4rCjjwbvMptBnGMydAkedPvcQzzFtZBfxSrJYR5ZaF5qYQFEYwMVAsLUMsUETzfc3hTyBevd8BAds9Q",
  "key14": "5rTSroVJVRFsM3ig97aM7V8pD4RLkiSqXVSoz1J7xcGJTXstpgEFQ4abwQWxGjesykhAGui59hfFFe83qcob5kA",
  "key15": "NggiEPynw8cqEjJ3TweKgKdUgK422WH4ZEna5neefjYzQPhoBoait6REg9buQvwa49DoTdKk6KxhHYK7JYC1s88",
  "key16": "2VtjqhznFBoyzc6adtAfXoVepb5vSZcMr5RkDsQYdrzLjin432aJBaEB6dgd1uN53iBSBJgkpKeZugyoxBCZ1AFQ",
  "key17": "62AAE2qAVwZNLoRvCoDs28aQz3xuEniLhCfvGLHeqQG5NJpD8m3M97D5bfM2YKyYYQmPwTUbuuFMazX2bhuRibTc",
  "key18": "3KHUBmD8yX23fMtS3V73UxrGd6YwSVgh6hrrGF23L1NrxZYaz5TcpB5ZFbrN6LnLARCVmRe4K23TCeWXNPRjtzzP",
  "key19": "4Tsec8gKn27DMQnXpS5TerfPF45x7kDW28PGVfzt44zNoaBwQFhak3bU3EEpjjFNxCtmMJwXTq9mLTSCtamQWuwd",
  "key20": "4154jBDPwvuznSsdTijubFeDWr77GjSCjZFPYPb1yvvAVEJaiqdHdrxqi1bPC924gchVWt39f9LdAAnUpmYquQKL",
  "key21": "2HuDcXdu3sG89LnF1GbkoQDBzrzCKWZqrWHmdZS6VUEZxxXYWdWTF2j6fafZnxeST4qejpTYoKdA3MYqu51C7Pon",
  "key22": "2pYxvRLUN9Hzy2Dyw36CAS3sAERrymZAYw5rGdvpMSBLM8EtY2VrK7VwYhiGckZ8zcAA3btR3Qb6GwYkxEfzBXaR",
  "key23": "5k6CpLM4N3U1Ep4ibLJ6gEQPv9MahXqqKunLoFB7GhivKbLop1Y4pErTxMQzsRuVcAnxqdjFdEC563z4VQkkE2HV",
  "key24": "CYbAPXZHk6L9tvt4b1A6gQ8A7MkwDcTHjETKFwm87GTUecygL6PfyVFULpdnBXMeV6AfXoVhba1hMmogvx2GZ8z",
  "key25": "3hXx8JJxTub5Y2zyiTyJS6Fd3NQ9a5ZRvAZUYt2rAJBcNxJN7xoZnsFkzc4bTehCVErBggZGaP8UYiubVUN21cCb",
  "key26": "64Vt9afpGJMWEB1aFixnQoLKvBwVvFoUoW9aVegJUeRKLpAnvvtMzXxcZa92p1rAMkNRmEEnLcUz2QDDrsdyEdte",
  "key27": "3DVdHJ5Y59omrmQbrpDJHDSbTLhbQgBX3g6HEyyzzdVRNqFw9oHxfRecLBDMuJa5QA8NCY2QX5LvVkdfa2FiXdez",
  "key28": "56XpXypnrLYXHKu74hNsNze5wQ8mP3MtqQCyUw1Fd1weeDbLR62Ky4ssySEaRmwofffqB4Dt8XPxBiYQwUrnX9hc",
  "key29": "2EdyWQ6VtsjAXKiVZkEg6usR8snDGeoFG71hNZbSNeGByuM1ZzbPZdGSerFhRdsUZay9yP8V4KY7zbcAWeUPGvNx",
  "key30": "56m1n5CW2iC7wcZoAemecqfMx8FgE6wkirmrkqn9Aomd6JY71SZrHG3ArUS3oeSSDK4aSAxqjmkpSTGmqhjpXnGE",
  "key31": "5bRLpmnbyidSMWkNzzGcUaVnvqXeP6oWAbZqX9VFP58y2LYu4WciVEYZVXvdiCJQkuP4VnLz7YgfmqV5HBZv8RKz",
  "key32": "Ng2QzqzSE1EoF8jxSFzbNhfp19jxPDLu75G7KDw8TQ23c3BQaTcjHg89B9eTA4PqJQeEjnJc92jmvajMy1ztLyx",
  "key33": "43zZXacqUzgKF9YRhFKPiEzvcXVFLcwAVKwELYuXNZ5HV27FQ86TRcpRsevqPmtCMe9h3n8y9maaDPMokLMrxEoF",
  "key34": "44hSycD8T2KtrNiZq9GGiP7VhkWvMoWBaN6gTSdwYMEo2v6E6xJ4fkWvyU6q6pw6rCUKe81tTW3oRqsFLeEuAMJW"
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
