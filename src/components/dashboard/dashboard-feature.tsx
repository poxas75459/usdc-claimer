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
    "Zfo2cbqYMViN5sWhYDcFFtDPJbYNoDv3rQfxcWkNcDdDgiotwsaXLN6SzvVYDPcUjjkukjTod1SFz49KHnHRxDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29qFqeRdXihFrF8jJSmMnizxEgztQpBN35L3z54YPnDmzuhLyY3u2Vhm6GcZuXR4s1ybYfthqDz1gyhyUM9wuQjq",
  "key1": "3Yc5MaHWm6gMcMNcWZc94CVWfA5urt5gvKV97N9FjKKcJThtoraPtQHF23swedrV1MvoXFqZT6xev4vCb6wRV9XU",
  "key2": "3Gh6UKvXC9GAz3HzSBSRHop4WFuscu3edEiyr1HYruTsqtVRr1jKEMWBtb94w82kWnVycKJyBWA7Ar8rPyHrZofA",
  "key3": "5uSPHtX6EJR16UHZmeecoktArswzWL4XuGxoXPXNoBrkNouGnZyVAnTdVDGkRhREEVXe3tWMdQPQdyPj28suBo6E",
  "key4": "4EYcQ7AzeFiFHwW1G5Ebc8CP9mhotHJaYLwFFjrPLX7P7YXyuhvWQzpVpy4m1esty6ZVzMvGGuzDkBx2R6BkPLJ7",
  "key5": "2sQBLGfRpJMDQnb74SS1zV1178Wvk7QY7tkCgzK6PkuGt9CB48gbTHw5qbP2usGQVJx2zaY2sbHLihrk88i5H3t4",
  "key6": "52g9uWX5itiJgzg8Vev28fR1bauYJ9KcYgQCfqpE11zcaGU6v9xuwDWBJG2A48RMTP9cEMvBmnzJqjA8zp6TKaoZ",
  "key7": "diJKfDCpn3AegnhnVRdHraiAbQZVGXCrEQ8FdYxVVGbqpfkZfHo9fx8FExGKtxtB9hHnHK7YVW7wR7gYgebHRQf",
  "key8": "5ECDBAEeysnvM1PjTqHEuCvJTctUSajpzCsg6iR57mNRwjdh6zuCgVtpL6fsmDhME5i9CuAL7pURhSgM7dWRXxrr",
  "key9": "KAFdyWJrHwfofixDtucXmNGAyHWPNkEnZk5jdM4RgYpNbvBbf1EvHCmdMprsC4W6tNpxuddKnyuwwtyiacCjz48",
  "key10": "336cNnpc61swsRwUtS2DsYS7gUUTsM13pdPwQqwcrY21STP2jtJ5tkxPCuZvG5LHdNnSmDLs1fNf7PNJQvfkCN1R",
  "key11": "2kd3Qy93o9CkXpprcmkBewbc4satbs4jgjEWBdYArTGW7pr1FZcxZ5wkcTVPW2kCwT5vjL6ECSXbSEi58zhHwSje",
  "key12": "3miecRgUxKZnS7AmcQUYD2UYL3X43cGcK2bFWMS8irBH8rTvpotHCVnCTAE8tyfgvJFzWe2vY5MhvcPLz3jxhv75",
  "key13": "H3V9Vw2RM76YJcPwK4vCDHTdKGd6XQcPDW3ikoRwfh4WtG4Jj5f7cJq9dGr9W6hHV7JwiTKcdfq6EWPccyfTwqC",
  "key14": "3LmdXpquAaPNrTMKcBVZk9B3MvgmUqnqi44ogQNvPGT9prRBg3nMw9yQkk68aHV2XhufwzgCiC23GeiBR64gZv5K",
  "key15": "s3kwLSfJWNKMe3t5utUgmn3LLbLpxxBnVPExJMPRHJ4csUQqFwpT4Db3xUmt7R7VcJ4EKsqY3qegAssbu5KdMQD",
  "key16": "4Acc7iHdv9SiUUkMTLGUwKmoPBUqmT89KNqMKi46iK2m87noZAP8ooqsAV3MNTaoAPfcn4SfJkCEiwbRgXx582R8",
  "key17": "4TR3UApRmgjzscXCrqUrosjyG8sXKWB2XRLxb6bKs1eS2vqqaYhZQcoAsQti63EeJa1k1WFxKKAstwHtmSXhp26b",
  "key18": "3s75gSQoe9Pmdr9wxRh2HHEMbotAnQuw9sy6Chvn4VxcV3HmeMBwMDedymKrWZQXAy8XNgMZGPAsF7iNNbSBjtr2",
  "key19": "2xoWbRERL9tMwZWkreX63dDso6gHiSeZZ2gDpzDYB21oPYKeiAnCLeJnT8aSTHttyGC15aextCf1t2agBL2HKHEr",
  "key20": "3MEdfFxXdjtgZoQHoLHC1Yfes9dzuVWqDdhLSKVtwg53Ez4nm7fDpg1ha4WBu9CcKbnnq9qtZoZ5eYS11DW7eyQ7",
  "key21": "4bYGWFWGyp1aJ4tiBcAXnGt9dkZqsm2atG9npFDxtx2f1eo9Us8dURTucnUjggZBt4hFHXSQDsBqt9p3SPLotZ1M",
  "key22": "3AJaRMV83DWW4x1vpbYVpPT7zsZxDeuVUSscpYYu8tHa1JF8WagrAXRSysFuR1ZwS1Axs4Drvxk4urcnwmhneALR",
  "key23": "mEZpHUKdtLVdF57gknMSuMvkfnakcdrsGks8kBts2dVLNE7JbCukqss1JNfMinwdUNtu4YwW3z19scaktYojDHW",
  "key24": "Kg92JsjfX7AZDsjp9bV45mPkDVkoFDYBMQLFwHv5gHN29V8uokziKH2wPfMdCWVXxxPGQE9bvJFYDntpLD1znho",
  "key25": "2A6txAYG9MCSJYid7AMnq23xRctD72MiqjAoWPTHY4M1pePft3uR8B9QzPMxn2KA3iMSoLrVsAL9ucDLTVJMPYCC",
  "key26": "36EhxUhQaGdL2AgKvNGRegusu5bozGnJjea3bR63ceJxRaygLuVWYPHZcHkovmXxfidUE6S6oZhPUpMTj34CtRpv",
  "key27": "3oMG1132T9RkWwTJMfwr67z92vTcBVuaRi1efe7F1mujzNKjwgeQspj6k4dZj1eW4ipSSrhXX1ou4QPZmFgPGJEJ"
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
