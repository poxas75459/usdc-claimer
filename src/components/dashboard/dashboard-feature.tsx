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
    "63p7X2Ndx1TPpxZQjuVYoFFMRKKEQevzVE13jAx3rpDPCg2B6PeoHwYp7evHeaENc7ZUCdQgrH9MhvGtJo1baKkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tuWtV6Wz4CNSuY1TJPQWnqEDhUhwcWLtdpWUBSUEzBWWignyyWknUSGmc7rZgqWUcJFnWEkvjKQU3HAGh8cyzh1",
  "key1": "5dhtnWQMSodLGhK6TX6FTs61S2QdyxAfuj1RxGP8dxBpFeRtetoGh9EXaiXef7Cs4hd9UGssgPdDnVUPWkV1A9ma",
  "key2": "4Rs8xKa1wJvyDcRuPQ3U4dfxWaAHYf5498MKMpGw8Tt7RGme33kbAqCJmLQN2g84CjYAKnFzYiXEbqP2AfFviUYd",
  "key3": "5D3sfw7uKYGTmRhoVu1JKExUZ8xtkgJqAmwhNtZopZdSb7TvfgLPHqUyxAgGs5qkgSuL3Astvu32DvXVC1ypKjWh",
  "key4": "4W2rpCiCqoTYX5QSSXQ5An3ZhytS5zGWMgMsRSaKSHTcoDayPuEKSDdK4ttmfSb7kVY6y74GpdxFP3fej7T53kg",
  "key5": "4KnTXiNDUpPd3wkDNzyGLRDi4V9QeLPk44r4TeBtaY7wd8L52ksYcXtnQeiZzvSRLvSmBAUZgoWrZJR6PVDu7Pkf",
  "key6": "53wNWKNbp979QKhfUW7WvWwzAwBK7W9TRSuBh6eT7qX3G4xRKShVUHVjCJwQSPkSZy9fmiVhBFnDFBrYHtpvXHm9",
  "key7": "HTEtNgdLJqDoLRH5E5WXLzzQP9WRiit3m7ocy92Xez5SA2mpJSHMG12LyfA9ZK6jJbqaGcpd9EnkJrpcFBMHBJR",
  "key8": "5PcKMas8xB5hJuds7TsX8EiXwvynGo5ui8ntyfBxJYTwpmEeh9T3QJsJooWKD4MaG5CJ7cJXgYhpm4Amk139ArX4",
  "key9": "gqP9N4A1SrwNRKcoJJqWasTPdjvS6GtxLEJSQp9dizjNkv7mYmjKYydMFtULyEUQGzx9LBo16qFmQXxByoobggS",
  "key10": "4B96v27G8ZkzHzLL3Zw93m9XdJw1GU8i7k9YBYTxv7e82SPikNTvhfybP6FtoR1QWXTBddBzS1yy6EDXhePsrNey",
  "key11": "2iXKCYWn3xhYEtMYhKHwEzdoXBCoE8W31HPTZxpT7WRRrYp5kVMhpUbEYCsCYxAASsuz3o1GHAm7cSezHmWaehUk",
  "key12": "4rrZY6X2mC7a8D6WyzYZid8Lqd8mMpqRb6p2AYCxvhvuUKYv2DdVgUAbwf6WA8tx3AnDWzbBEA3GJcRsnhD1kZuK",
  "key13": "iuBahXvtR61M5QP9TPV2xUNtbhd1ir5gu8UKjqZHVfa8wxLDwAxUyHiDZ6pzARA9KK7PVo8vi17Ld7CVQtEZ6U8",
  "key14": "4yfJFAk2RGK173uvrhm8p9oq9q55qvAsnEfXmEwdeCM3zuCe4QCYHbyePTEtD9RkydAkCweAp52i1ip2LiAvjTgq",
  "key15": "5jk9V81i47BQdFfgkEn3XtqoK7QzmdCXvNkBUkfLiXAokRRRbqH8NxYfhpyVZTdRpYdVyVu1RVwLABSAMhagZRrC",
  "key16": "2kpiGKLX38U1iURguMstqjr7rRXZJQR69NZ51xtwDKe63PCyagjYkyehj2qzKo2fqD5h3vEehbjGyJiRkGi1jW3U",
  "key17": "5wAeBpb1KoBq1JZPQM3vJZnUQUgyXdmYaujHgDBZyZATkfJMGTk8scaSX2ZxVr5BtTaWRpGV4kqcJRfUWEZsMjAs",
  "key18": "eGy7qJJvRUAezQDbdKbFCQdibpujYof4gSu568FEuephuMPn21W6Zu6Lur7TG25FxyY8g2jrEnZ1c9XPXJq3Pv5",
  "key19": "21jkwXT9tgVSG3QvRvyyT6wqn58qAFr4fkefc9akLGo4AAJTESpwE7AUp6WKNPsYqNsJfnM9X3QPanLSTbNF2sYQ",
  "key20": "4Q88vaa9aBu2Kkq8x1GXbhE97X7j4XxhSQf7HnG5Uz7Z7MEbJ7EcWyXWYwHsU8Qxeod7K4Pn3BcNMPvKTGQJmJwi",
  "key21": "49YwFUYL1boVAgMckhXeCpzxD1qK7oeTUCRh7Kb2oKWuEk9aWND65rUjYRFHCESQQHyctPPyKJ9QfvteynAcEQUC",
  "key22": "4obZY5fY7nYuBxP9kdoaQEGyUbVyKEKu9kxhvnHKbYN26XjiDgFs11pX8kmHfRx5Pnp4GjyCY4rvME9jRbiygiHB",
  "key23": "48jiHmjxU1AxGu2LQ7Nvh8NyTTp2H5shpK1So3kF1kFgbAX8xaVdbzBVMC6AFjQ3ahELnTXJzS7112wrd5rSEPGZ",
  "key24": "5bPTkUzgnHGTgULMiMdFjo3xW1FsEXQTkCFk93wHrsK6tCGBTFUauhMc85LYLRhVSQ3PvWPCCA7jAsETas3mecBK",
  "key25": "HYf715yoyQh6UqxhgSB4qGEv1zy2tomd2881CKgaAddZW7oHjexVZFLRbywMHrP95dy9mGnRxK6YjPqC2XvtvFj",
  "key26": "5BN1Rhm4qZFr3PpSqXpFpRs3EfJ1qgLYknWeFgesbJqy5DrFxbifsjENGjpUcarNF8pfiZre9Np1rj43KCW6peBD",
  "key27": "2QWKJYCySKrwrNrGD2tgELdKisZnU6mL1DCibVdrbzD6diAUChZcxuv9sd4DrQRA81hYmvEMqq1Nq3g3DzJgc8kZ",
  "key28": "4i69chH72ainAjVYQ2sq7wSwUL6GKop3qKNySXwLXQ1LV9itmQwWMz4NKNMvhnTRsF2CYGRQ5GYPWAhw3QBypFoy",
  "key29": "4WEwnQWjvy4FeYd9VjvfEtW9XCWBSBZwWDxUWSBjM7VkfHXz3vDEm4etdWTn3QdYgQxgreyTXEiaj6edmgqueRmK",
  "key30": "4qqoXZXe2eoLJyFv5bLfTSFa91uebsNBfVR6QHHzcPkXq5kRvhsQQrPb93gMCy6skwSyYesW8i7sgq4NrDCkMwjS",
  "key31": "2KyTyiMjeJCxvt9o157jeMwSH6L7PKDWSqpk5taGu67F8qorKzUA1mLvkJBmofw8gKfD7UfrbHvQwrfHBMDB1FBy",
  "key32": "25GvybibVyGcdw5Pi5duGSMkGCxo5rwGReCv3b9kB7u6ecYRU1ntu4CRwyr342figkdpDoukWuVqJudL29zDbj6J",
  "key33": "DcKwbp4XHQqW6kFs6Dk9wSc7Xh8niLmtsYFVgQpV5Rzb8e3CNvowD918RuM6SQkCJbLvP6Jx2wqxPzNZafrSL5Y",
  "key34": "4gdQPqjaqHg7qBw78wjEBWi3SyR2TKZkGUjhymordswx3AVuchrHUFCU38cAuKG78QRMqWhSJ7tJ9wvCwxcjzxSf",
  "key35": "7mFsiwhC6TH7f1PZbL7fmAFNNjBuVWPryVKy18owk7B4jPnpMzXSkvKisa4TMSWhqZxTuPrw3LmpA21oEYf2shM",
  "key36": "rjCMid96X7pC4KCzeJYGJRWM454k3pPS7rqFP32ewc2aPtegduGYxsv8DmnLdjYtkSMAEBEedPir3LjYWZXG6FF",
  "key37": "1f3X7PmjsJQ9BQoiLVGD4SuztZbd9QbHDETmcBUurbm2LVscfoPBkxPea7AAN4aKPScPMeJYjxtgZnVgH2vYKUn",
  "key38": "4DBv55Cx7ExQpfWYUBmuNp4CASfC6CjtjxCU5bLd8ipvdQ1iBcSzyoP1qsnSw6NjiMNhd5bUnV259o9bceBXKjRx",
  "key39": "4KwEduxMR44mgNpnCih5LqRK1rgEAHzTWTBHgjsAdD6QK5wQxihYBgUjFdHTrCM1HcjPqGeHjmPvfXvdezHABx5r",
  "key40": "2PWBuQ2MRNfER2bGgSmckzPdWH49wSh3xaEsbHNPas6XiUn7A2G339vhw64hPKFLy198Q1EG8b3XV7b99FtGLHcC",
  "key41": "49nFHZm4jZJZ3HxMJSCzfKiYEbqLGsgyN4JaGhWiiY5av3egMZFV8Brz93aK7wx8VwBoHEx3H1i35Jyje5b1AUBM",
  "key42": "64pUpssvtD6KeW9wdJ6ER4WNLThF6s43B2Yeq2gqWMZpBTZaahV2DTYBJwwKp1AP82Gmarw3HoQLg5dR2pWSK94P",
  "key43": "2t3TnJ2qjms3YzUWahBqVgAh1JmTRMqEwhgSKVpFJ9JZvHZo6QnK9vi8bjMQ3wUYyQnpqcMnD1R584jwGXfhrhJ",
  "key44": "3JRnLKh9w1wAjM4RTmgeuUij4F8CxGoFHUtaWXYfjsfi39kVv8v6fzW9oCtuZ2ZLSrSqsH9DpyvwCR8ZDYaJ8EK8",
  "key45": "DaCvjC25ERUMnpyZNbv6Y935NC6hJMHXHART2CZ2hczBm57cEX4kArHXmpEVR2wCrfC8gL97zq8rXhztHYZnF3e"
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
