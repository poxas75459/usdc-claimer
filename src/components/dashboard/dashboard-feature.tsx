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
    "5XGkHkQDa3zpHkqDEvm16LGbbVghgWnvLUeM1w7boHTrqSFZSyrqeofcP248Q9iw5Seqhgg24Cn1TWS2jfRfWKSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pDxLzTeFpMtqwSzwyGkAbLsFQmM4CwJNMaYNJcwMFmySSZCUpZAVnorkH5k2tVry1kAA123vLgDJbjjkuvRbGym",
  "key1": "2rMR4iGSP467p21BNdux3SqCWqQaaTYWJb6giz2oxUgJDHkndEhppDoLeVCu918ZiwAdrrL7U67QbwTJnDdijQ3K",
  "key2": "3UwtQkXXmGBmG2yGNB5HjJt9AszbVY7X7tDZuw4ZKFvo4YPhsrAxGQD8sK9G5YftDJPxm9XVPy2MjcAoF1m2oL82",
  "key3": "3kiyGdTmgJRPxx1HN6XU9aioTjGb2f3m3cKU3azoz32nUxGNFd83SpdfPXpxdnEukU8GAhff5wMBqgeLHiXvtn45",
  "key4": "5aoj2o72g9JyJBP7BpRf6UX7LxgxYkLoaxEwvsD36fG313isnAEBQ39QZuv1PDRU4nZYZVR6xJ3snYVijugrfLjm",
  "key5": "49CLuzGBhCgLerJZNiQgkMC1rW8hJ78vpqrLPaSKMobfpjj4aMtHLsZhmmUwTEXtcAKsKmz6FWymu5e8ieSBezE1",
  "key6": "37HuckancqSJZMHBZq4CoHLkDoJDUGo9RbLizpBkivdRXw4rDwfvQVdTrPxqDVHirv1wiFwfA4kSqp5GcaZDF8dk",
  "key7": "5C1nFByyBrqz4N9D46sCsYpLthm7JGvDB1UTwaionPSC9KLEzTG1dfwTYA5B2wLak3mPA4NUTUUKPtqLpm5B2mTJ",
  "key8": "4aK4Fr5n5h4sYBKJDHd4D6ZnpxRMM6yZH7TGSnJY8sjDzYxR81vzLLiYi5isAWRV2GLyfgaRfGHtx94PiXm8eLvG",
  "key9": "5mSfoawc2GNTLc8UiFGmd8b75KyTeuhLZkq8v9YKyd8UgfGjRC6FateJNPNMyZDKBbCsJiEkfd11q1t2NksJJuo6",
  "key10": "4artYjupC7X6U9JigY1nzjPnkHhR8iFbfHx4rpMGz1hnT5AqHZAWQhgRoC5MvvPPorwRjdpxikBSew4oj98ZAzV7",
  "key11": "23g2ybtHdti33bD8C8WXFRMHEFcBhXoJFbfnBv1kAq8eKGJfPcGYJmZKMm2Zow4d1oL5syevJgqS84V7vfc4sj9z",
  "key12": "4QkuSfwfKSHFyNwDiWrmLzzEcLR4WfFeccwReKGPt9QLRGvCEV5vskmShtSZLQaARNzSxK5nRp599qhGgMNXMATJ",
  "key13": "3J9tju2sjPNyVgtuP67MXQAPvxa7s86Yx4CZk4rFPRaG7ccDSmFyD7uPA4ngi6gUat3P6eKtssWZfarYddhcmD8s",
  "key14": "4qA2iqpyeKAFE2Rz7DQLTbrmH7s3YMuhqHA2onccou3oXRUaKam8B7aQrCqNBX8qz5yD7fRTuWtcSYYtG2eP8E5R",
  "key15": "51dcpSQjxP61tAsSmxHAsyKuwSSNNP8dVx1gvpqBg3hQxxHqcHHwrdmMBM3ZroBrzcSSyrDHXEAP2meTauvtpj1E",
  "key16": "59upfcN82CM4v32rSRBrvrhhTbdpBcT1c5ygkjSWYvMg59UpBKVxnSV6NS59z5nLfW8PgUpEixrqJgDNjGWG4dz8",
  "key17": "ma7r1YPn8t7d6rZC6bD65UuwkS7ff43Fk3ZopZ6NcVhzrzTJQ4qXBqHfACrzYqNARLfkxT9pYEnevmtzyWgAotc",
  "key18": "67UX7HbU2kB5VxchJT1LPopoZoh1mXSFqXnQHxDpKQBkdepFCtMDrnZLWM1cfmvYuGBnWS33Qg8SeZN5Pr8KUwBU",
  "key19": "2DmweZStWe3AXLDxGbVNeQDacNt49FATfGSc4SYGdV3eNN9FSqNake9R7E1AkUqhTJ37hPKRCyRuHTne9isyk4wK",
  "key20": "hBPGCJ6TkXHTQbPNQDnA6hDcVQ6N3b3C9HFwNoLKFE3osbw9o7kYw9uuSZcw7nZbHB65XtSC2QeVW46RcCcUUV9",
  "key21": "4h6YTWMxtMUvoBCamxKAXCnaA7vG9NXYJm4DesLPo7kA14RfqrqpMQGsYXypP3qjynMCWxTvVpVcwVz2mGbsWAnP",
  "key22": "5nsRzQv7LS8zwmB4dmd4UpBcJWsLSDvxpG3raYgiL1xH9wwQH567JvATAqD7nh9ascxQigqzivvCzNJBiVG97hQC",
  "key23": "3VjKkweKVLKe3NwPcgLtVW3HMnqeipwL7zm82K2yxSY4bBg1jiTWUFWFBFBdhMoML2EQQwXTf289JLMnXn22SaVC",
  "key24": "4XRmax9VaKoE8rRDBHmzP53AZxyKwzjv62RsnpPwbYwhCU8K59qktyKBDJtqwLfgMbRMQWBAN5hm2WSTPQRAV1hs",
  "key25": "4HUYXXbwwASeKUs6Fy6eiUDMFs1uqSvgy4pBfE5FShLrXYdyDevbLAyQvtmWX3tdBJdPiKVWhME6XWocF2Ka4dkJ",
  "key26": "5d7uy6V4wUtR8AchQJMitUMFXCHAAkabbSCA6Grx16QY76XxsCQ3ezkjRizUN88gNjtMd7qD9KsMyG2PLjHJhUqP",
  "key27": "3XT6aietG9bK7VCXJvDT7Vmv3Fs6xVEbfCo1offecdTDCiwj2UUWFmm5dYociT5QSNhUCgS7GMtU562BmPDiVX7g"
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
