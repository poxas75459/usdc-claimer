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
    "YCGpeDrDVmDLJEm8d13owLmMJgfDseGk6vNCpJ8tWCiGpwjBJpQ4iEzcrce3uk6uQSH4X5ivXn7RVyC2hj7dS65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58C95hqnnEXQT8RC9324ykkZKjQMXBzmpDp7FUxkCC3127L8r52VB65xHLaYGTgR7pSvpCQLxuxR6KxHQLjTxPWC",
  "key1": "5bQ5Vjv279pzTYXZ4aJbnVWKyNdq7jRrZfSy8JgUaG3SmT9uYnJvi1eAwnv8CxQevfa1wESNzjiz2yGEBBdLLCba",
  "key2": "2eePSiTnXRFbDDMggL86K55g35oQpM4k5XLBavyeiDheM8ZuBcAgCtRxBxg8WniLz4cTh6Y76WbW2JWtLCxhvnZ9",
  "key3": "e68deqi1DziZ6a4JHxN2qU5NacjW5JVoj3GBq8jzD9BF5PTif58c371gfDb5a7TUY2rTkFmwt5C72x5U8x6zTYL",
  "key4": "2yGuD8K31MRzwckB8YrVzmwUNGoepNjdLeRjQ9fqPYoyrinhWAJsCSqiqiqx319X5Rqct5zAkdtm2CFq8bHnQaqZ",
  "key5": "289HywfCdF3v8Tk3VEJbT3dTDsZ4LhuvJHUEXzap7jmNbjC7NLQnzgiz95RZapX6oUxjaGTu7ZcxpD2kAd9V7JYF",
  "key6": "K69TUUEUrJmSqTSn6QbxUqxvawJxsSrf3wEiaH6ZPMyhsNujiwfnx4vL9zNLmqtPCw8g3CTsbvgkKnHrwfiy3a4",
  "key7": "4E6aXoQLhx5PcxJaWRyLYtF7eTUAuP849JrcMaSQ9snp4FtxT8BWZPcMVq6uqitPgy7mfn1gihEBxY4iXw6qWMaP",
  "key8": "LrrevbujQ4ScJvXmBTbqGbvqqit4zC8aV4EP2QvmXmbrxBBjBgm2Sj8seCDWH2pSEQJ9D8e8boAYknfAwfMvPXK",
  "key9": "R2L6wAAQzr8KdRBeRowUKZLAsji3HzSBk4gnXJRkMe4fDkeAfKwzPLDyGCHxxz17Uo9pWc5gtraXBmyXqobwRHL",
  "key10": "5adnXveVAzNk4DFhSHSwrD4MdepNwTLXectTzHxkuc1kQrYtQ52aXyjFcFXPt17DQc4DX1iz9oEZYMDpreCQCtVK",
  "key11": "2GDcioYTg6r8dhE6zDEQcN983taQQ6w7grw6oPAEqRcj6QjLyosMbTZRzjSJYwU1p92TZALFKfVkzqznVGTiMuuh",
  "key12": "5G6n5WZXzJMBEvCKep2QS6V9mvS46is2w5uhtL9kMZYhfBzFqj3GBqAwupgDNUj9r9RCouK8tRbq7DfQJ6zNXa6c",
  "key13": "AXa9Aavu5VJdJFzvMmen7XXi6nqPMg1AveesgKjS3hqx9q45yRJD98tW3PVMKHkVYz86XDVXSfEFKDycZeZGEkJ",
  "key14": "2F11RBWJVF7fKEEE7d545U5ngaNySxqG8F8yzVMzycyDXjdWeg4KPEZ2NiN5e8gKV3MoFYnR9BH4h4nB5pdGsxH2",
  "key15": "5PcN2n7VjyK716VcwDJMpbLj6mVFToa6GocUgpM3EDpjqiwPwhFNqosHzB1x97YxAYoUA4TgxDdoh6nBgTs96zdP",
  "key16": "5d2n7YHwN5p2fac1sC41spGqZJrBiqhd2Jekq6tpHQEKPrg93f5iJn42naceEu7bHujR2Sk1KbuEyfXSQUYVW4sZ",
  "key17": "2fxb8sH2ecKeuCtTUW6K4zECfz7CenXSX9SqsGF1fq2qMYWKEwvmRcnCVU37KiJBLwYHxVUFgcRSfYBxBPUXpD1U",
  "key18": "2aeQwpApFcm7N4vK9JupSLozAMiJmsYmaFJ6SZTqY8Sk1L8GqFkynhrAZ81w5xjxPuZX2tkXUuqoAdBgtGsY6nDj",
  "key19": "2y52XcYPDyUfMb7TDFJjrmajMfnkBpyhPrBSnuWodKXdb5G8MkLJsCMyHgPxGKg3NY8tLEbuy7ArVwjg7Z4HVuMz",
  "key20": "5tFUVyVz83xJfqoVtfHZRnSAmhr4J14WD4MM9n386XD7qSe2Kmz3Eb9hC78cSx1tj1sY7BDmAjxtKhzv4QEUAY3w",
  "key21": "4hrZWqpHasnL48VyPzK9Ktfm77bD2wKBUr2eHfvV6YWKxQE6R3vLAx5zLW1LPDsUgqHfWd5WFFbzhByEvDzUGC8r",
  "key22": "4jW5Ms7du7h72GBiCpS8kenUTMH3Rk3nouN4WG9NDsDNWA2bovjMNt25zE1TKiYWYCd4QD4kpsjbhKuZJ7aRwTGy",
  "key23": "3ebrudDVvwHPSBaa1PCKBjGM1uxzSmDhymBqzxQvq8ET9r7oVjjEJo9sbp9od58UrADog9Q42cpDVAf1b9RY6zPL",
  "key24": "4cSoWow8py525nbUgqEUUWvw7xQ9svYGZVkKQPjFmMDj2SBjvXWygGgXtF3rgiuh96jGjZGe8yG4pv1vBasNWC8z",
  "key25": "3r6tNC9FZgVFGvYh4dznLY1LK9eBdYmfKiaXHpQDEMQYYoPrNGTrSXwVyq9PQwA7AySeYrtJ37pffPMxyDxoBoKC",
  "key26": "23CXWmqr5SvFbtSSm2aRZgxpA4Semvrf67c4VphaZuc72NhPLkNQvGJWr5LtYqnBUsxs7Ysq4JkQfFvDiCbxU4tf",
  "key27": "4LzCtHPW58wR1vNNrmrnQTr2Dyevam8icxgUSx1eEdu5b5uHQqp51CVPDBecBjwMVqJxDFMyKqecAMfPyGENDkhG",
  "key28": "54F8BcVv7Tw7zb97BpkUJAZZCDNYYWF2ncUXXjuJLbEiTU758PibMP61acF9puWZxR75uHDVgVQxvviaRTXpNh6R",
  "key29": "651jkiBkq9g9vMA49BNKBW1PiUYVBt6LWeb8Pw8BWufGePCFntSrA4fEGTKdUpYQbmFJnP3af4tUrS4YpQspHef9",
  "key30": "1VFzuBwYiMNpEG51WRpt3eYVQiPxiLnzZkpXkDW79uLdqtGGUDNwVfYJVTHtkEqazjzcjW2z5ZnecsZAAYSYVCK",
  "key31": "3PJySXyRTh4SVbXMo7yhUi5rogRu33M5SDNt8kwnXFC75apVdHbU4gHvHenjxggKkaH3Xbmi3Ywc3fRoaCXcX4Xm",
  "key32": "3q3qRzuG89yHiA2Cbp8bG1YeBmqYHJ8iZ7irDYhL76uJzowzh7aDv9Tytun6F7diYDqZN2BcxXdhmget3AQVWyuH",
  "key33": "4GHEg9d4sbSgsDTVXzcJ7i7QpjrppfmPoRb427e9VQ5p6KteDzS7NTbpZ8ANjpD5vCbH1Zho7HcyKoSUHPG67xuM",
  "key34": "4sqpGYveTRtnJPc1byiqJyxpRRTvxt9Y8ytnbeRunYPjNB1888MoDJxA4zxYRBMoQPXDVURG8MPcSdVYn2rxyuqJ",
  "key35": "3nCVpTvaq99VEgZRfZuJke5fqi3MXTWDXqprDmbggUHFgp4FDvqDGVkRdHJ3nXnN2NEijQk7Wz76LwLqQNa6okTd",
  "key36": "31YkhGqf4r7fVcTMXTygRBATKVfWa26BKizTNwiEbHLsLv4UDZYcwsKuKU8xfgEhc3eXd9M4sTHRjSkRutxV7h2f",
  "key37": "2oe5v6x14Q553MbMVj2vEdtoyRocTZwnxRfVMHB4HensLR6nFSwuZHowHsUhaRWRFCSaE7g7qXX246pBeC2fYo1M",
  "key38": "qq4k4k511yFSFKTPPpwuHydh1NJEXb6MU1LygH1CXv3WK8YbJ5TG2bPpGxDtKGuJD9vKtcZ4yMmHAn5WcxUkL8J",
  "key39": "XhZECryULT6CLPwdJNTbRnmPBg5VgEx9vijcXiGEtUy9WdDcZm6SVW9Ew8F54q7wg2cCjYg6J7BBsjr74qaSkxw",
  "key40": "3GUsMDjv5XiA56ZTznBfTVUumKMabuz9kXKT2JFjGdcrke5oqdFJ6Fv7iW3Ym8cCNX4PuiyvdPor4P1Rsq8A35xe",
  "key41": "5upLToLCLy563BATiUYzinC8FWK2EhEodnsckasCZ5CNod6KCxMmDuaLHQsvSQpR6XfzFTiKMeNHzU2L3jW2mb1W",
  "key42": "64UKzAP4HccAJjXVv63NhZravaksVVgteSSga4nRrurbmP2SWaq1KFK7pXPxst9SQz9JKwRCHJzeG7ghV8B25bwS"
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
