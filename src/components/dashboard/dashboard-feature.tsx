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
    "2ANmsGqa6vVKaUu4eWnHAJqhNzj2frL33ntGKtubPMxov79S7DE5nx747ev1XX64g21NQvPRZfUUsvaG66CJjmZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44wFJkfpSd9TSXntdMRZ8RkyuQdJe3K3LH5Dv7ygNrtK2hPyW5Zt1sDjwoWztS23Y2sbDmeG6V8ZU2HPFzS5pbzX",
  "key1": "5iSC17UZEaQoEvNxfcfJMz2qzHsgbkukDGWdMsyCAP7qKMgXteiN9cCveDqoSGJZVm4M88Hax1kZfPAqSzE8FUL8",
  "key2": "3wgmtzFJQtDVubhZ2mMEJdqAzHhPPSiUAaj3VgMuQmyy9tAVJ5xc8ggVVqhbmMrwKburUnvqSLd24NqdWh5SBWnd",
  "key3": "3nQedWEDVNJBhSdaoRVFrBrUStsuckw18UpyPoffcFZN4Lmf18pdFzJgrLNEzt7Zwnjus2k3S2TJUp11wE5wZHsM",
  "key4": "wnS7omcacqjzfB3vEwQFqjFBJoKGjZGoe7wwPu3J58uUAJQ6wV5Ad9Xe9xWfTKeUCh5deB8PzTmrfEC8auo41yf",
  "key5": "2qavG6gdN5erHRZrykkxe8W8FqtR1J7JyAaBzjroGM9HvDpBXgBmiAL3ETtL62c86a7zkdZhYYGhKbBu15RnnREW",
  "key6": "4SAaxr6eu8vovHCAwejt1MoxsBuhZh4J8Suo8DsQpLqWYNF15kKcR5qwBATEobzzwdu8wzT311qBpKAQieaaQJFy",
  "key7": "384UdtRrxoLwyzjBYfQXtYdJDXhu2ZR4TCxZ2GZC1Y73Avpkw9eH3ynbdTcsjMBX5ADjWsMz7gGoyNWRrZgxPkEW",
  "key8": "5xeYqcPkWrmxZrYn8oCFBRn73J9z7LCUvgTJA7tvFAG8JaZpXtvLpZP6xRcYCKSKuMwuEjKjiBguy3zkMbiRwT8y",
  "key9": "3SuzyKDVYoAstkxyjSZghdGK69Dx7txv6iX5GNkYKdeH2MZiKGz34QtaJisWE97f6dm6mSdN5Nah5k5mnnBP9vw4",
  "key10": "5u7TqWAG3N2UJo2v6yV2Sq5NLNKxKWfsfBoWK2aWw7mNYtYzPby56jzYuXDKY6pjmUWFtPY3EDcJ8SZRXXxZDtjC",
  "key11": "2v1MCwHCTRuo9RRUmGBVvVMTkHB1G3o7CpsrRyr5DRuyVgZG7saSW776uCgemGK7TyBi7F2s77TYkYcmy35UfEnf",
  "key12": "4SJaJeakAcytS4MDHbZSXSsM7tKSsHWYWX5ptMM1CsZtb4qhUY7RuqhwE8wR2ZQ6Q5nM7EYf5d3vgQ5Q4VfdoxQH",
  "key13": "3796wmdxPAAkiXujjbDJTccXEWr3xygrLN2h8rPfL2ZLGd2frkuZL5kagQUQPJ9R5EDjw5jGFFkdfCrA7p6Sn2av",
  "key14": "3oWtGjMoRwRC5HqdfdniXk35o5GiT84qFwhAojzvHZWgmLevMo3LmUmwRieDsx3uVcXyQZu1C4caMpAXeLjSFr9q",
  "key15": "2yvxyL74qpeRR5P4SkZKkpS6z3dhyL8YxaNMag5hL4P3b66nrA7t13kqdNySAxj8hJGwWZ1PYC7P2gmqLVGB7p6B",
  "key16": "2qAPG6QZn5ZJagVvFcK6saRxaTu44FEiZDExbvUuWwjtSCQJKQmTShAxLD8xAfN9LYS1ynJ5rGKz5jYMqBdvnjAM",
  "key17": "4DGBMMiu91869FAzZxQSDdqeHxwEJRfKK8hgXKTWjdMcy5Lh5oGRmJacZjMMCNRRpQBLETc1Y8EbDKiUqT94PPKD",
  "key18": "BzfzhfutsdFUeGNBR8kTSwosXSV46ban2cqUxusuyVtGfpJ2PgJadd8TgZXxfRv7mM46TjMkmU7NCjsSJzssSRA",
  "key19": "QJu6tg7BTvSxLugprebMxrPhNT9JCKG5TjcZ5CeYhAnb5WYsVDZLNzDXeMfJnMgmoyHHWwzAyuw3Rw3nEemjGG5",
  "key20": "3DKBqvgdaUgAupR94mJuk5MUmR4bX9Y2c2HpJZ2pZhoyfhjNiopArXSCzW1z55fLeQu868WomWwR2sAHv9Yf4hVK",
  "key21": "5eAprwy2s3y7wFbuiJpm3cqjRZqten1M3KyBtaV3uDvTBZ4x34wX9LoJxXV6bRGKcGTL848k4qbhTg2b9nb6DQT1",
  "key22": "6sjzhyj27Sa8XpERxKr4vrZoznjXT7MToJUVvQcxuJrd6Hi6TT2GKTq98TmWwjY9CLwEfFWcZC6GbvMPMTWJ8gq",
  "key23": "26snjLuWF8wi2w7GHHzf7CweGzxhPQsuEacDnY35GAScUqbxVzVvYJoTuo5VbrTGRMPwt7YKZqHD2dVsBd2c87FY",
  "key24": "64h5Q5FbJ5ZNtVSYzm7HBKijgMYqcU6nxswKwQoWUQJNiTN5fNkas9TCPu7u14SNqxai3QWMLnYpLDh2QmDeVCsJ",
  "key25": "3vGdAWPoUqtb3FepzUc9z3UQPDfunV7St8JH4BKokeGet7U6mH95gzgTGPBehEncQbiKtiw6Tnf79cFpiEtpbPrn",
  "key26": "5UKb2nytpWnt1zMGKEi2CKd2KQNgB1JkTtMFkCEuZA4Vk67QGBTY6A5JxbEJn2hzxNvUC5tUs9YT7nZ11fQ2CH3d",
  "key27": "ey2DEpihnmD5NUyhwfZdGVRxSc1JsbTLMSKkwtNSeU8FV4kavRTdDbanBUJYEh6kfmHYT4QK755nhovmJSP8n6j",
  "key28": "24kpAM99RJ72XkpY9UeTkqzS8LFm3MhSSHW9bEAZdofGxucN54R6jioiDEPLyoXDvsw8dBGnQmXFsmSGuSkdN59c",
  "key29": "P3qvvkpgFJRjqaMxFcNuuA6Bb7h3Sp2QV7EX8iTsa2SpdYsF83mtdwcDD5ow7ZgPsrgCHHuqAwVaWtbWuVei988",
  "key30": "3hmkcsf6E8KjSPf8Vpooi66yCm5g5J6YpyjhLdt1e7JLhRhANRHUvKG368nofexkJrMsEWLKKBtvdwxUi8k2DVGX",
  "key31": "5JVHDhkmJinRi87NgM94wn6EhXW7ecMgv4WbBFubqTB1mwvh8GyCVVHU8o9U3K5yLEdTwF6EUdNrDagoYqcuAr8K"
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
