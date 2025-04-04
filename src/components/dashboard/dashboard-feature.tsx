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
    "5ydRdYsaASfjDGS1LCGHeLXvYnbaRF7QfahTozAQUmudrEkSKFv2hMCwc926Q2nBs1nYQtjzgSjChAxbbj8yawaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35baMSot4mwDoHBEDBrz6zBNLkFKWmVng7QFhYqXvWku3T9x3xfmSp3uUfEvsiLaaNKgVVwtgvomZassF8i8e1eK",
  "key1": "4u7SxRcb3CMgfFS1tPMBHUq9SsZnTehKvo8ytEUdLY46MBhnQ1PnW1kvJa7sZSJVKvpHgGFbpkQ7c796CjMBRUZ6",
  "key2": "3RebfwGhhyTY57L1WsmZofEZvbUUehJb6tgN5hwKyDZTVwnjcFwm5eHrePWmfUgCiMNYhCJKMroTJ6RbJGCGRnmJ",
  "key3": "3xBKor3aXSYjs4xXUnsnxvsRVm8QniNn7swzypKvNgMGm1q9ks1monpKjan9wxw5Z4U1oHJRVsNAydqVU2Use2EQ",
  "key4": "2UAwz6cyQjn2NoR8iWWAauZ37KTBRxJ982vz95KTBxWmYXJ6gGe6q6BE93e8zHhkHUtZ9onpQAF2pxieL69enotE",
  "key5": "31kXEZQP2xcU8DsgkfEwgpSX5vJkuCx8bSuhrgTkxsEdLi9dbnsjydZDdMw6WyqUGotgaR8jBebSQ2MGyPfAmzyb",
  "key6": "5mzsg7sUo9CRmpZprEgwhobqb5H8eb45YWav7FFfQ7Pv8avChMYbsC8BBTQrRhGhSgKEQ3XHFDyo8jRsJRsgJejL",
  "key7": "4FQPsJCEuU4swiVed2xpkV7cbi9DxkRsUiSP6i24JZgqCUjVQCmN1epoJa1GmkzLoQidhSdmkisPZpyhKv4tBB66",
  "key8": "GRAwWqXVKnSidh5mQbgjnbC5Xi1MAXJQh2vxkRddvA2ZHsXpgb6gTwKGJECRR9EySxoH7a3H6pKaqQBhXRMCRro",
  "key9": "T3tbyHjewQZ375vUuvaWRCuuFnoZP7WbausXPQKynDkkfLFCrDLEiPsAAzjXz2UAtufSEVkyWzqdLFP4H8saYbA",
  "key10": "543nvC8NB1ovEet4yoRGbZLqeXawsnaGg4zt6v9bE1MYwEjAAUEzL7qhwfYV2hnQHnHs3svnyDV8fbuuih1f5XJ4",
  "key11": "d4a9Yg6wbwQ8aMP8mdmWR2J6wFisbVBJkiAUTM9fKF44bMHmyuffDBxBiGAFmCk6eFZQyYsndf4oue2KRiKd5ra",
  "key12": "4bsVDHYXLqsnHdANZVtb4vtSZsRhLcyQfkyx3fXu3V6w3hQKC6HDaRTcRRKjX77qh6vzN9Jq9MjxVpZfE2wBZtpP",
  "key13": "2jE5hZcnDnwVBAKA7UBdRE5bMAZLne28koYdoFj3tSphxapeptCv79EBsgrrVbA1oginiG9cJN9D8rvceTmCVsDM",
  "key14": "TXhPKa9YQkznqPS6ScD8DUSwg251Wr1yo3Jj9LTZ7TeJK6QEL6E5tzYmAW3nJNts6VPqbPXbJfrZQ7a41JBeMJS",
  "key15": "4onKyqUe1ywNkWab3LzBCWgpfgcWpCQT5iVxe8GcSyLooo58iQCaVcyr3LR3KvEKhWT3SxyY84bwHguEEvs8iZLz",
  "key16": "cqouE37YENtJPkAVEH2ddeTtzFMVYSYqE3Y1QrdpQN3nkJ2q7SzL9N5Z2KLu2se5K1dssxEv6jaj2MpLXzo5hrq",
  "key17": "9Muz6Xf7DHBTQXf6pTDLBWguqvVhn5MYUsAC18iQPATyZwaBGdgnR3E1XJmhgidryUPr7bACPeB3z3FqTvfEvW1",
  "key18": "kVb5vFe9uWL7ZSyekqxPNMJNwJ91kMEsfFHND5EaZ45PU9eFRTzsoxGbUSNuz7fi9ie57NKKzAnfoxATL2yNDnw",
  "key19": "5LaqyjR23mELb8S3xbS7GLXtjyALuQz1oa3tTd4W8MeihnyLmLbbCdEekWvwEcBYRsYZcs35MYNX8KmjgwRj9mKV",
  "key20": "4Wji2T9s7XpHzDCnn9FQ9d8p256GZHtDUw3RPoKtLGUr24B2XwEy263pxktgeSSxtwCGGKaqsb99YmVdrkbQiHma",
  "key21": "4mSuwt9joNdHYWterk3ZzT97e9Wef9ADA1mZwSfpytUgDhVpxtZsQX3RWVWmakyUSQs2uGBGzHcSQyn4vCH9dpQ4",
  "key22": "62ivBHXNhNnng2F5g4BeSfdA29FotqiJNQmh3jWqvKHWnScya51so7T8vKAk573DvwCvHgP4nxXdN7gnLoVCDN4p",
  "key23": "5iAphq5BgDT9K6Q8ctewVjwrYEL6CCxbWtadEgYbBjXPFHeiMukUHcBQGs6N4q2Rx9QLwniC7SxJViBbhaaW6E6R",
  "key24": "77gY4uCqg9YrEz5HZE9SgmjcgM9J9rvqkq7eCRti6sswsta4qzoXT8qE2iKMxZBjvugT7owscdhPyDeW9HcWw7u",
  "key25": "4bhNAc6fHf2knSyt8Nx2jKEfHjRHdrZFDNS86yxRJU191cUJWmAcifURyNS1ooNY2Rk4Z2cVgwxPdjDHuAsSXGtC",
  "key26": "3F6Re4L9DZzspLeJtKo1YWxQWW8rFKgCtFbKU7SLrfL6Ws15m82asnYpSiQS3gubLPAVUxAsskDcsaUyTXVD6Ac8",
  "key27": "4bCaUkzXmCH5QL7LeFqfN5bWWHrFeTigfNbQ6ZaU6keMhuMRZgex39CXPfoHUHL5CefbvVPo8cwYS62ZQqdFvy4z",
  "key28": "3VyVozv1CmXE6xdZXEvFZPQHZ2hhCwwqgF35GuV5Tm7jKn2rn3DFToB4ayEuP43dPEFTx3PPYS3AdWgMGHKGDZMH",
  "key29": "5gtR1TnGrmmTwM939fHMAhzCurErAV6u95g8xvHfLrrWDpo7YyLiHAsXr87Ywrg2D9ndmTFBTJPRQnpTuxKduV3R",
  "key30": "3vyTHTR2PuzvvTUJvA6fGNya3xUQcGTnqdRXziqSisRX8Q8LaNoEtCLTG4GTHfsefaWgnUfNqEp6iyRVd4YGFiVY",
  "key31": "5ft6mTvDVLiZrPYgSsd8hoCEPyH2hDBPh4ppEzsfpuzVayJqXqSTtpGbXCX3yRQNpi5pZXENxZzm3nC4vnJRyynm",
  "key32": "41Dpnf2fNysgMNiS1YHN1TAdzEnfj12VhTNAefQtgxV4bhWHGc515zK1yw3Tv5EydsfMDpybfkKPBeqB32iebj4G",
  "key33": "47CEvDCMNKQa1NoY9Nde8ZtReuin76y2hxNaHEbhATfUMjDPp1yXrfBn8Rso1vfkrxoEzQseLFTtP6sdXZdYanjz",
  "key34": "42o2MHJ3da3fDDKxaRZah8g1CJY2rG2NGdxUaGepX1p9m8Xf8iai7nJgmgU93Q3uWBgZCGco6Va2Xnq9hpusYjqB",
  "key35": "5QReQf4u4ca5wMvTzxyAPb3TCjh28naAgCy46QZvSAyVzdKTpbRUAN3MisSKpTcexT6FGxg3FFyJibzuiKHjTSZs",
  "key36": "66s4GpMwMZ92g14s7hj321XTj8NWhotBSxwhBBifk8AvyHPZY9KSsWDn73qG93qYf5hsgdw9cum6YSTNwsac5Fe2",
  "key37": "4YhKLzcVbtNdBzFpUWLooMzS3bhzto388k5epnLZcQoDyVMLCssr145vKZLxtK8RzzjUizLFbnjywCoc9tdgnDLf"
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
