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
    "4EVdzQHg9XbMKDo4SEYNKrNu3mSQApDJ1f4unHLSTDNebj1fq2N8XbgGS5rMVuEhPTbe6tUXFFvefBq4TvVCvPoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L3HqaipWx19B1XxUMcUmkPbLhStFrczi7Vw99fMEgxrNBvKtiJo6pVLEyPLs5rAX8T7diTRAi28uQMkysqDvrFr",
  "key1": "o2QtFpXfGqfQrXRBdNjpuTTMs3yZdAeFFj9CYmyMWW2cVtCD6REcp2uUZTrED6s7eefw5ViRxCLqePwKjySMenT",
  "key2": "5ujKtLDws7s9WQNCE2Ziwu1k4gJYN92eehpA4P4L9TY3iGV2yg8gHT8TAkts8bh9cxtXo6n9s5QWZ9a2jLa5vWPv",
  "key3": "2iY4oKZrn6KKjNCwfmWiU6gfKfTAPHtCunxmiNN4fF2HaYYz1HVQ2e8B4KPREtjRfHHYSZXVAAn9igEQdCgZJVHQ",
  "key4": "2gz9X9hZBYPPdWeo2BKuAV8EbpSZug4jbmiUrv3Coa3SMMxH9CWkmUTK4xhJ1eSZxcfr4tBQDoBJHjqw2apA1tgp",
  "key5": "4kbwRs875ZPdZfXSpqkU7gJgMcaxL2PKPKhrqGKQnxUoDKijvJkxYZDSy9VNUsNk3qmN2aQ5sZwKqfiTfosMgyqr",
  "key6": "xhh2ds2zJA8tbmruNQSC8xKbTknds5LnayBXAiwfF4jFpUrhqhfoQ5MLCG1MtGuMf2cK8pLn6xfUdVMW1PGJHtX",
  "key7": "NgP9qxtJBGbZeHfrcnvTpafBeAMA7ybo9rscgfN1eAc7QcGAeHJ5SfyorghYQbHTHp9Trv26tJpfSSiNQaQ7ZaW",
  "key8": "3BXnsgh5wGh2DZjoRiGPHdikwPU52JjKm74HYu7Bq1dwd6DvdDpUFdRmb56GVxfWhBimbQ3r9XCsCa7kt1i8B4y6",
  "key9": "3aYHpFUSEHjDFsKNK1tnuPKpr7BiHE2SsvvvkxvMQnCagBU2zfdw42te9jALcnEYzx9H736zp7Qhk2SBGoVxKeTf",
  "key10": "4ATdMWpXs2qLW5yaGSrjHd7bEeYVw7WyyvbyHYkqnot2BXRpRdgNaTP4f4dFdaWdisLzHcLVhQPT4ojKhJV43S45",
  "key11": "2XwCzbHB6Kui3h8feNZVJUuGrq82CN6p5Qku5eyBps6f71cQMqLpc17xJGL5SRZFNU4es6XnVqU7579Zpe69nZQv",
  "key12": "m1ti8GXgeYiMfCj1kbNva5q9KjBLnwJYCWdTBMzPRu4i1ZuLRi8Yhf9DieCWYHKTJANw29yshokXqcwRyJ65c7L",
  "key13": "4JjrQ5nycWrZUB3NY6r9WMMSvFJNym58GgFw7Y91RzYussSTaomnWenHKm65raQZqpXtZhbFdDf6fSGvnBLWzrgE",
  "key14": "4J2JtJg8iAb83PaiAmZ4UDpBhj3i8t4RDUb5tKS9iHYCpAZwGP1RE7ceC6RTAb4tJdDdSqTJd4sjXSqUgU4RzwxX",
  "key15": "29Ch6ciqC92oJsitcSh7KnfZ8J4mgTHwA45qZ3qBVFumDA6i7udp1hDuqom65acQSiM8tYqSSpKywkUFw3bFwghT",
  "key16": "4v4aptt3mJ6dBx4tDBA1LrQM9aRDJnMo4Apde5abRLGVkvWehFUpbTige4RwbkF4SpRX1pTqEXQ8hoezE3qP4SZw",
  "key17": "2LtjvPDeXWLRhtkMSr8RNYm9vfvk2epXpGWHD3VGzWRBxGXaaqccVMkMexvzunf5KCn8DWs1K28VuV93DLAEwMFz",
  "key18": "2sxVECVnyfVCSYMRquX5ZqSFfYVApdQJ2gyhnupxFjZus8hrNDcEnipqWyezc3sDFkYFb5fFhoFyxU1ZQZct2NAi",
  "key19": "3ti482TxkDVCVLvpub8p2VREQw8vphX9L5yqYCouZ7ax6RgXF8zm1c6MLD8XsKPkUT5wMiuUGvvaEQxDNy2iTayM",
  "key20": "5SbKMY8gYtNCbFfLv6ovCU2pMW4N2aLTUmQytpaSJoVnnvTW53coQXvPJXCjGK3ddYqELGfRdNFrRpCBVnFMgy2i",
  "key21": "5ZyVe2eNY8GWn6ZZfTjALndk1Mw8eGnDxvmV8VY7AjeP42nF46Gj2NiR26nH7fYNtdVXFgZASc4Xr6otzXtnhmWb",
  "key22": "48ntDY9KbLK7uHJMF93w2YNE8mPr3Uss2yaoPfZzzkPqJf4RqxexK1sVnQF5pTQ99BkoipvSQqvq5rTFG3fgnUdd",
  "key23": "3ykgpjfiyswk2GhNwGMRXGCoijYCp45atvEMe6DYqxnNJMiUCZzXdPCL8bNkC243qQ11HGZHJSPwesjVBqiqoRJe",
  "key24": "mZoQmGqpUr6rdFcYYCPkrCmDpq9dfSVUMR1cuw1SR9fT5HUw47vUmoU8i1hTpHj8vbi6qzhWQHUqeCPsBVh8Ymp",
  "key25": "21Txo1FArcPGr36tR9cneErdcXmF4NG3kVzUvon2BPM7FssopyJQerVEkrCYeyRDc6RLn18bZtH1qbCWu6TrWjo7",
  "key26": "QtZUnQ7yoyzn7MtJSUHvoPKTNmWPtFH8toDEAStNvCHLiHBY85vqRvrJtEWachKh6AhAf2iTTCg2TNnAz4mYEZa",
  "key27": "3gVboYJckvFENJX4EVHPLYypWdRgAbRtu9JohmaRyDJRVWxz8MxPCezdhZSRhMrm9tasNeMWB4sLu4WzCkCsHuon",
  "key28": "31Mp1JGQrkXM48c7qnyc1H8mo5SXHefad6nYWNWQKoMzHYfwn6W4m3D5UgshHRLThTfhkgf5rw5j3iEF4ZtSgmbN",
  "key29": "3TtWQ4XuGK8Vm5DSn4bv3gfXp5TokBi1emQSVxXVMjUmHby5ajwEtsLMoPCND6CvSwiHhw3TFYSbizgAHWTcndEd",
  "key30": "3XVn3E4jJ8exD7ao4zPa2cUficLz96Ww2C51j2ttAuEqK38LGC3Ns4XsFbigChL5FyqC39Yj8GcoCjY45js5mt78",
  "key31": "2pY1DMdz8xC6S2EovPc48mtivBQyUq9o3GTBRY2RP9dv2gAtemHSmj997nr8zH8EXozDegt57uiGPuNfnWqecktZ",
  "key32": "4WwC1LfoqwLsjm9KbMUEqAkgbwyTEXbJ1p1R79FxgM7JCvS28TrEAgF4tMCogQZdpL8urhXRRxaXbZXd5rA9LAS3"
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
