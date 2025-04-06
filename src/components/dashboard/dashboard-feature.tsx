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
    "SMHn8jFGp7NvJ9oLRgR1LRkwFVfLrntYgZ1TuuFUs3axGvmLsTT19TvSCuhYHRNbDoCGsHK3uRDaFk6tDi9irsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46z8eCZAY9Smn89ymFDT7WEy3dMzEnbZHQY2DHGwdEBAQvPB1wLvKxzJguzHTzcuEYsGcqvigaipUEi5RbJLUTL1",
  "key1": "5mQP7J8i7vsKuM8FXTApfjvG6cjfq8wUTupEXMUCwRbuVWRa5dtK2yhLJLVD72JaU2iBmvsEvzuhEKza9f8j1BvM",
  "key2": "59gzgJsSUMvxtfPBWUi5YNxBVyADYzUidNJz6DdW7xXxiKPyxZ3AygR9CTQuNQkrxJpsskrXiavzP2ryCPDxKrre",
  "key3": "3oGfweQVVfZqJ3yBHwqhTvWrWB3Pw14bNfn4FE2up9jSKpnVjhgDTVCCjnrARUYYp23dDW7WyuchFha6vjxDfDFS",
  "key4": "4bjwdwaBdsTKWrMdyMJJXt11t1Yzoc1Jg1RMz2o5j3VVXHwA5STPeNz6VVjvw2Cpi2LA23sf8BcCxSf6PaJDKJ8q",
  "key5": "3chwq7MPRD3crdvpMZtgDvMX1ww2wbLBB37d2ZaiPAeRQZso6Y6qjhNzheXTUwYgF2to9cz76yShB42nTU1iLjdM",
  "key6": "32TzcXkK3vz4JmTvrD2a2tacvEcWVqMiYWyJYP4WtGb5u1BWiW984x7FDQpuW77u58L4YpyaQqphaSqfPU3gj8Uq",
  "key7": "5ZaUJVqBVbCUBdqyPXNLxEUv51cQsBSVE9g3s6srt4J8FDcUbUqgJPxGJZ5SKqsuy7CEpvkDgG4NxbTwy6ixABr1",
  "key8": "2hnKHFnqC2TxVwRDaa2dzyQ9FCuuE58tkUDFjfUc5QJxyhmmCksgz1KaVa1cNKT2TU8zydBvJ8VcoDovCPguwMcg",
  "key9": "56aD5f5ZHhZ8xAKiLHM64VJ1TdtBChGxna34Pcwadpi7jUQRiCPzsCrd8prMoxb2K1mhhkyCJsNV1Kie9oQgi9Jj",
  "key10": "63STXvS5s6JjuYkTv7H3zEZXFzeDuF762mmqr1VWBacSMToGatBHGiJehcJCJ9phpeG6iYwuBvu1xjcSe89bgPwo",
  "key11": "4uN7nqc8ufD8RhcdV1hKEy2K6rcBwgoKyZPfV8oCMbT7bKqLGH35mPcTMkVFDeTZF5AwdtVCQYmELqDoeHhpNiPw",
  "key12": "48RvYyuSJrA4ZDHrmSxBo5xJwpm9beXFMHDiic86WpxPoDwuPYdw2DFbiCv8DNQEmiz9x1HmsqXVvK2wqKPCPvJ9",
  "key13": "3ES7DeqEayEPvpHqLt9vnejPSj7RjWvCmFCqnYJrNjTmqfUEBAouWt6iCizF6CYsLgFz9JnpPK9CEAWG4ccc8Coo",
  "key14": "5Xnv81GZ2sURZhyCuyDc3GjtwcTJNJeV4Rt2WHTbFJ3YF18dVZdyfRCtBn6bcmkLNGBfJBK9AhPuJbiniw5Yp3aW",
  "key15": "4dNivTY19UwBLTFueuDPLHLHM7mnGQVpMXTuybtrrzJSpxnkydfby8thPuDU41mZV3GQdtk7qbmt6cDpFBNYL3iL",
  "key16": "4QAWgJ8hq9DtPW2a1zwwBwVeAJj442noWPyisWhYv5otbgWCo1rX1ugPDF8jDXXZvYa6iQGQxoJdKNksDKayAe44",
  "key17": "5NnFzu2Sn2mkPmpbZxPNxpmsQC8vsC4sFndg1firqHRETBwR7u44pjhrps3Hq9x4NqadZcW4TBaMg2zSjGsfB7us",
  "key18": "31zU6wxhPtbZQKSpzcVpBCdeCcfdnZBQZRJjFUL62Gdm9YNJ3BM8xUShffJZqks6sudLcAdkrQs5vFeZ6YVCtkTS",
  "key19": "5MHkopxA6gDvQjdmVENaKDmGvU9cJ1p76XEcuMmtKdu3tKzfmF5HxicfFyfFziwskzWBCziXwcLVHZ6f3JCSbScb",
  "key20": "4PJ5bgEFYgK9onZ9y4eeDJJZMdm3gLUEwbQZtbGcWQh7Whz3FYxBqiqExbDCyZtTBQF2wU7ekNzMwtCdhKwmVmcq",
  "key21": "2AGAG9GYWQt7L9gAetakVJh3duLBHADcE8zuwYssecLCZ5fXLFD8EM9ofPh2rPd8Nz6Wk1gyZaTPumEkBLXS3Gkt",
  "key22": "5Ed2xHifpKHhSPLwdhXsxExDaUkBwC3w2qTmKEvcLJWxNhj9n2e3uBGG5GQAegPfdqpdmXQdDJFit24qrXVSqAJP",
  "key23": "4ZCoShwGTWzT6CVWjkiYd2Mm5LaMpM17JT4T1B2BuBQmgtTM7smJ3dpaFV4TGz5q3wap1G7K3yfV7VebZFdrCZN5",
  "key24": "2U6BLjn3YXXq6ayJSfL741iUSZwdcJbpTp5PKUhfFG8NbmGTScAjjc4ZjciYYGUpJiF5bgXGMRRt8M3RRAn8yvJi",
  "key25": "2BugPcAXggVDHNmsyEcvL784T5CN863CednFHUsSZBaCUGfq2ZD8xANypoSar7GbAJfEdCAt2DChJBEKU98u5Kuo",
  "key26": "22ZNjfrbb7rn5Yz6pZq3rSSg8fu1iXqBeRXPFRhAPzHP6jEZyXjLweLsw9MVDTK8o5hFsi77AbqQqq15ykcqaAqN",
  "key27": "3uBnhd6AB6C9Qu113wyeq1S7mgavwra5kNguPe1SngiuKv3FA4qdxsiC9fw2e1QmkWjBKuvjLzMM4ddeH9LXZwh1",
  "key28": "YZDXmPbZf67Qgt6NcbWacTc5ztjFoXftewQU5TXpoQcQXbqt6dzY8bRwUhVc9CwAT6jsY28fEcMwqvak3VkFXtr",
  "key29": "2JPK1h3qAjuCwd7YWWEcCm4y4jySh5Yvs6m5unxiC7KhjShqjrLhWr458KejGkqAZLxADHqjzS25UGpATozsctYz",
  "key30": "3abCLEdo5NFgp2eHLNvr55DxgX3xtNViSctwwEsDKGqtoCcYJT1USgBDyAfH5jsbM8wu484FxFK92AywVDZUFJ4q",
  "key31": "66xWgQETzWdCPZWa91LGLNnpxkttBbN9oQ1zyrWFhU34peELmEzbEFnzLmaZMpaaAfaYN2Aap9QqRNN7qny7T134",
  "key32": "61fX7nWa7Vm1rrSADc7AS7Z4C3yPJPLx3JvX4AgPUUXhEFuAwixbWnosi98ekYnBsDeBN6oDUmrUgCRYf8R8BfJe",
  "key33": "4pB95WWvnj6AQe4fSXDXbDzj1wH9fJW6kz914ptiJtQdeHQ4FwofiUAFhimD5HHEWb2iSA8hzKjoa6Rpg5kPCCNg",
  "key34": "2s4q1aP9NMN4EwnBnNV3FRqQq79H94aQSADCN5hhozrXknRuULd5gDQVZix9L1LzadQzwRqfkiupzzycfeLDdnaD",
  "key35": "4Uop4Ttt1WpCZ3rDaymJR17aLCT9X3EfnurkRPy2QHp23wwt4qJqzQ7jKuBvgdzrtGNwzRgx9y8o4wVKqFuEZ5pH",
  "key36": "2VUWQzdDD36UwHNRshwCZYGQgunQLJ9NJwW51EEHQWewRX5kkLxkNkd52Kwuo1wenaekRYHm2fprwmxp5M5yvVaQ"
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
