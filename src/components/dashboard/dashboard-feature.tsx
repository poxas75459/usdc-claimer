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
    "4wj4RUny5jn2u2mM6RpWeACEGCFghAK7e3EcPv1arFZZfu44rswez1JaHKpWpkGjtcgWmeqBNWtsoG6oJComWGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qn1vXcq1MDVJibo44tzdhRQFv3kAHVgDLakoEvBb8RNeQfXGF3SS5KaC8divF2Tsmj3izTGWaAz5rke4ppmFGh5",
  "key1": "4teucK5m1SguNPLJRd1rrgBh3gKSaNMjDJKqcaaCBiYFWtTUgUctbCCz34iqLfm3fsUBinykkfcroKKiV95t8GvJ",
  "key2": "2WceXQa3JtMsiEeVytEbFeoX5UUAWxQEgzUk5tjyBho9AMMFcCPNZZcu2pLqU6dx66BMne2pvRmujErSqaVhRVS2",
  "key3": "4QKYeXwJ4njWBFaigGVipeQXNwggnfaDWudZjFpme8PBXim4tXDM9ZXoR4Lemxt4T5Fd5ADMhEPZX4S8ZCrKjqvc",
  "key4": "5HHYDZowLJ1DBvkKtm35Vzw4hgXXgNcXaP7W9TuzqsxtXvstyR3qPLiFJCVxnHwU6EE53SCmL3vhE3QSDntyPqVi",
  "key5": "4v11Q8Xyk8Hhm7zgQbPSdwMLVttBgfowtji8a44Fz5HV9b9AwYEMmqGYDiLpdV9nMvCcdVNu8Km8DdG9t7e6yPDf",
  "key6": "3ATVXDYqm5DJLqGtJuQZkhQxRU2kgt5LexhhmewkEGfqGGQoy2vkzR6RuuGGNQ34LFFcJ2H8CB7ga6NSfTr1VhWa",
  "key7": "XMTuBKrcYACCKaMPZKkzrBJZXYsfcJ7gFRaWiyzdogiiqvPtsAh6vnmfUrsQGZX1DyUceAK8vNL8soBgxNsaSfd",
  "key8": "2NUoi4nzuAF1LAu8H4WVYiRgtzrpSR2cwj4iV4EyhiPs8C6RVn4BgaM4xYniUfe2CvRfFFfT1vkcAGTRvWxHHBun",
  "key9": "3xaAVACRH2UED7vnWoogScsMmKaPbTN7Z68bNLiy7HSt1qxpUQeAKM9K5DoGvhREKdQ2SbFCJoc1CBxBRkriTjfb",
  "key10": "36EsaiB6nyQ7eq6srRfUjyyQDWLKTheF3R9Q2nH4mmkYxZMRb8SBrJ7LpYtRVes3HGKAo8w5y6qGkjJszTP7Z1q2",
  "key11": "25WZL6nbe1EDpuwejxY2J9hksXnbK5biLKckXypUCB14415frTcfq7nwGWhimPnpqvM7xXmqXmrJPDrkKzwC22vr",
  "key12": "2Fpykub16DegH9TJxxR5zssVtUdXH6LoozkADucADQzvvvdF8vkFcM3ToShGWCCr3wNqCb56syfTEfhwna1Ah57L",
  "key13": "3EaoPS2rcmXP5ewD8bZGjAwHeuMuULzpH5E6BWBogdER4cKg6ZE8baghMRBAGjNyDu8BsW7mzcBTJxTELZ7VUeMc",
  "key14": "26z744AE1emcfXf3Mh4MK9twwuxAQktnRdLWTE8sPmwTERciCPB8GLpb1JTeWYymJhmryPm8kwTqc5YPMoQwFEzM",
  "key15": "VXWUrskak9YdPB372JXJVTuvSpuXVxNqPPXEvDab1Z8GiJCcNYByzXisnE6vjyYE3vtsmd4ydLVWJs8hEz5ZCQ4",
  "key16": "3LfHcQg7oHhbpzoZPcV9tR4PbdL78VshebQJYrJhbCReHibAjfC2ZXdykAe7PBZ2x6ZgJpMARVQ72z68VcrsSug3",
  "key17": "21etQLfe1eAAAaGe8314xctwMejgHNwp2uGyCuN6xHsGSyyNzUhjuzAgjkt2JdNT7tkL98bHbv9pzSwMfhLDuoVe",
  "key18": "4xvnYxFHgV6wByJm3AXqpzUn1YPGCiFS9T9JpU7E2AUcZjix6RjFkLSqfsp8rY7G4Ue3vnzri1WuYDcKXqqvC198",
  "key19": "4v2qmpjkwireCMET3WPpSLYqL1fMqTSxDXmztpDppnyPyYbeXPUynLxKotNyRxaAKoJ97DtPaC8vpSiqvZCYF4Aj",
  "key20": "2GP8tUrpqaZSKUTp3kjzBGt7Rb9PunUW64X9SVbR7BmhvSpkTARHF167VnUF2rbThrp85TEpHwnBMfrepaTYnEay",
  "key21": "3q5ysBuGfcXjh1PkHSeJUrxcbWAqQBLNQAUccUdSTr1A4TLVq9QU1FNYWozhcWvrjTcwxedHqdhaC6Qh9pE1Jyzx",
  "key22": "4WyrSyp4RQ1E7fTMQbAMWf61S1gLsJ1LFu9zcJFwaai8hkgVRHKHS6CkGdnHFooj4WShqWdcUUWWv43M2aKJ4Det",
  "key23": "G5qswvLmFXhPMdbTg8jNfz3efrwJYkunoz2QaTaw5oADi2mq3rHdayag659nfDFzYS4UHo5CzKRnNyA1whyZ249",
  "key24": "3briZEgcgDTkqYTKwphP7Lsj9KzYeD1g2RGHYVkv6a4rYLGD23rYKWVKLDsWZXV9hiUoMjb9XQmFo9QeBhP6jryd",
  "key25": "5wFNUmqhEs8y6egZrH34K9A3FokB6tiwnaZy3x3aVPRUm6zxFA1quP6Zx9hALMWokvjRGf4JhiaXcLXJY2W4eqnf",
  "key26": "4wboedwZh6tkLkGkvoFQUY7P2KNw7zrjvWvrzKRcmxF4FUuhzBdGN4Jfz8DJgPrnxpxGimkRtgkmY4vxEYLFah1T",
  "key27": "21cwTnh9r2NMSghAsQ2YuwDfTBx34br57ABJc2aWQ3NZYYDSzndtDHJwo94UAFKwqE8q85tq2q4aR846b8WnZFsG",
  "key28": "LxpLHUnfXxLRcQvR9QXL2G8SE3nZxVG9z4qaAF36N2SKHrCyDoEXaZPU8PH12E98X3rLwJesuBkSdcrikSxVpxV",
  "key29": "65UFa49T5NQuEDwct61DU8kzVE3U6FTKimyXRkX4L248STKq5xHvSq6RoGhZsF8Z2RWDgAn2QeBGy9RsiSARGv8c",
  "key30": "2mFfyuLbCe3dM44Log55hwzTxjFbss3zwwf1diytLU4Jwb8uNCda6pAS3DweGxmrgj8WFsabhRijGULtb2M1FkL6",
  "key31": "4kVE3sW6unfT7uyJcEbp2sYB7w5aS9yt9Y2mmbX8rqpz7GjuboE9o8RFtmVS5J2qWueu2vGDuLQcCC5q3HRS7ZvG"
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
