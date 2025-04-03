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
    "2kWhnL5kSaTEZqVFyNrNjf1BFKBdzFafS3249FfC2Bca3ToK3J7a1rJ3sCxHx9CNjC8vurDAeoRRLpPADq4Tjz94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iY96NLafMNSVrc3TB1taq39qSzXmVAwLkWQ3J58fpDbGJTKFW1UiZV2vwmHAenfH8kZ1vTHKnDnK2yFWtXzBWoB",
  "key1": "fMK62e9cmhGuJEs76c3MDfWTaUwBWHuEPdr5TErnFyFVoyPqVnSWJWSjnoie1HMdCmC8FKJCDNRpgz4fDXvdAt9",
  "key2": "4Q26QC2i31GXZKWHPdjV32hM5gc3S8CCTatzZ8mHzu78tynTr6uVmqzgk7tkVKTLJH7uQf4SRkUSPgt3zo88ZUEN",
  "key3": "3nAbQj9ji9pgQdpyayUEcQvmz1BEZaQqgoBZ73odjsnzyZnMYDtQ73Y6B3nJiB2FKXYfajRx8XpXmATxCG6WDeKL",
  "key4": "5hDctS48zBtngmzLpefUZ8Enpxzkft2Jiqi3BATYGPsYMQ8TtGNhEtBL6D71xwabzAqG8stnBCkEeJiNqgJbZSnG",
  "key5": "44AxzXZkmKBRLiGWjXzVwfLZnhJdRnJs59iRKqsSNxUQ2VAieN9ddKbF7ryrS656uqTR5i5TGmyC7E68EQpUr89N",
  "key6": "5zXe9pk7mL2J6wpBnpVBvSS1tUti7ngr3bMek937qCweNxYXAR4nCenY6XQwH3Bs4fG8ifX56VNyfUp9cM321mN",
  "key7": "4fvhLrd2HCU8vmKuSSYX1yhLCpKDWbMCsfaDjBcCfac2CZwx5KUcc9rSfKyWqZ5izx2vfhCzPf3CcEjQj5eSWKFA",
  "key8": "UPmaqnx81bWiYmkJWLfv5Gk6e1VnEpmVigi2RrXJ7mmDL86kzCHz6WPuKJAGapW28QckHq5xApeR52LrAWdYDnj",
  "key9": "5j9dPHbU9ftEWa71FaCRX6tZ9644GAyb4XrrHwc6PbwfcEbdWQ1NXcrh6SAzgRXceNYpcqpeHUhwoJHzNZfT45hX",
  "key10": "4Wmmd2h6W4d2sGvf6ktxntKWzTBtj9WoFabpuKErmVS5k4hjvbVfoNH3tbtHfyH5nqHWQLbGXguFVkUie9AEhamx",
  "key11": "3hq8sZz8ELQ7db6akAyeCyw5And1PBHwox36Azxwr39cx9p3eEMbs37AKiihEb4763gbpYMDJHJ41TfahLQhpj3q",
  "key12": "517CwFBmSdS2ux5SWbGpirgqHaZPZqj6KGqNq2pXXsKjujur5AvVoRhh6uehDJcQ8rDqhQraUC9dbfMx46szecqK",
  "key13": "3ahXM1J1kiW2FHycJqm3Zv8CEQA8GTtpTnzyp6NxwejydT765CDiw6Dg1Sobk1iX7cAWsZ3FokK92KnkZCVYET92",
  "key14": "2KDkV4EYdL9crcogjsLtPmWwZZ9oYTaMbyppXtqqkVrKioDadYaC9m2KiXvksyfnwwEPGWriRmohKSrkBeWSJcSf",
  "key15": "4LJDjVF5BzLGvutQaSfKyQ9yivX8ov87d7kKjnysy7JT7TRwTqU4Hjf1NgcoLncoScnT436ra6JsjEbyd5VQKo9a",
  "key16": "5JfohhLee6K5AMFkmSHVUXhYcGgqkyhfjJ9VkycfgcnXJPqVed9nwSeaesXvarj7di4eTQ9RKcMcYmnrS2qxqDQY",
  "key17": "2uBqbZBsqtxuu4Y8CH6T9DS5ezAxkJDY1R2pVpfPpmygmtgYeZb8z6BNT4d62B9RYwuo3armFSwfprC4gHoZxpYJ",
  "key18": "3NBZ53kaozTLUeuwEUnUngUQ5ESq7TeJ2G7QBxf7ZPNTRoMvjY8DY9QsmArkDzkouGkBNH8q6KW3HSJeFqSXYpqm",
  "key19": "5wk33TjDqSx2FpQ1VtdwLxcPDdf7LQFtmvZ2DVpm267KSgSbTVnCmCPUyPhexLCftUZG5xUPQrEUUKy4PbCP2G56",
  "key20": "5dqKgdK1g1jhBvCqmsbMrDcoKAEWzS6EuQHxgMkEYKGwWEthjm7cKsGCBTxYdGeuMW7dhyxjRYbW5Uc4Hy1QLk3X",
  "key21": "2P8ta8E2mKE642HrexigC1GtkHxvVdfZeAis38t6xfpWPYCGNg736xtCaW5YzWZPCV5Rr1qZ7APsc5Bm1emro51G",
  "key22": "KxmCXL7bGxz8Xy4n3Y78bNrFLsVk6kSqpbsUAqcW4R9inCM7su1o1fSHANVUDxnQmipPNDFaCRa7QtanTB9hp3z",
  "key23": "62G84p4HJyJv89TxVGA8MA7Fz8zYaBgbugp85u6bNn3zdYJBrQY7fgAYwPmRYtAMUs1WBESgTxRXQt9tZ4SCMJNk",
  "key24": "3inUffuDjCz4fXWhvP3r48zVrX3tBC61hYy6HcaV5USqvobULPM1yg2bYzPXpAbcpWuKp7f5ycakhSYjPzk1QP5m",
  "key25": "3WU4nanUW4CuhpSA4Xw2aqw75USY44CX76npAb9tYF52cGxQZJ88SQucZc6RK4kBZ5hABuDn6E8L82dENqpc3Tko",
  "key26": "3Q8qtPDaX8JUgczXCLxb7z8dLX5YGBZhpAaqSfJkVAvnmEhWYu4J2oPMFkY7Stk6u7L5EPs42um2J3NtramP3VXJ",
  "key27": "DiGkoYQrDdkSWnC1fR9g5MosBSKxttQ2eDze8sbW22bNLzp6SDxSZigGD991WgYKqbbbfemqtsbxnChg9Kg5Gjj",
  "key28": "67ZFP2ZynmupYFLdY51a8kP4w2Vv4FCDuKghWB2XTQSyvvsNp2SbcWBiAKTzR5tjS6LKWhRr3QaQpA9KucRh32TY",
  "key29": "3zrMQp2Eocs5hR4xstSAWvQ26mi1gfTZrknLYXibqebBXgYMspoVhd6fJbAghDNVWiEVCJ1yxB9WQYXQKiXcywaR",
  "key30": "uKndt5qcLHknZ43tBnHfBctcotJar1iCQDqV2F9PJUkfSnreVc8fyqtvidiauXbHUKxZCjWZnbueeKB2mz3FiP3",
  "key31": "3ZeGHZoGp6VWpZBAUhQP8RDD4StY4BQ5tkPUyYFwaBPja4BBgdQu3HGYCa2F8RwGXkWFcac5SxrYot8LCS7YFGEU",
  "key32": "2m9DCScLdZwahS3Sn9ySGBrqF7rjC8ChFFkBjUDDufA87F9TmtLhru3qA59xUoGa93o5FTYW4vJQJ3Fhuz6Uwz3b",
  "key33": "3gnNTfPweNfoxVZ265RZGT4CAnZRDG984KfzfYAEoovkgvV1eiGSfKa9BkcKqgmJ2BLXpNHx6htRsbq1LUzGKzwP",
  "key34": "543pTby7TFEWXTX9F9Raz5hkuUFnPgtA8VhFYVj4w1znDcEWkw7F9vnWbk4tM54A7CHirGAQyY4jqwQowR2m97Xj",
  "key35": "2JTjtTQHYZCt5QR7rFM118TP9wezm5sgdJX7oV6t1MCYuAYPshLNp6mrmgi37QjwmyZ5Q65VgkLEa2PKyCQtwPrg",
  "key36": "3FFpmVCL7bpqp1osTwSA9H5LfPTrk87NGGWgj7DPcDzrPoXgj6eqas7zzH4K3eaaomL1tt5rJqDJUyZ8i56UGEne",
  "key37": "EsPucVh88eZ8BSGgZiCrw8vYeFVRyvRPBT4mPQ3RfNdz7ZTuSWWh4oS4uqA7Df3kEwXwotZ95kqM74Y7Tvdappg",
  "key38": "8Na8DkUjW4DZdUSjmzb9uDwoUqRDGxbfQ488Ty9LSvCgBhd8EvHmFuPRd34qYTiJz5fL5jX7XVXqzLbncDAXo7x",
  "key39": "o72H862zAxoSjvMfCwZT1BVGFfpPG1Eh8VZc6JX1gHLVuosgCcgt3RRPsoA7Uj3Rwe2ovz3rgBJAvVpcXGeEoFW"
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
