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
    "5PHjmym2upgQH2WPXX7PRXEs7qtVXt38h3oekRcW93YzUpYpHURGbTj1sPMMngt45YuZM8sPzT9P9dMBbK8DBJJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VC1viFxPqrTSLjnqn7muN5Tdubd4ADUhNZSfBcztLNXsc82Crf2kzCT1Bca97iYR1qxWkHukjrZK32yVHsQ4V8T",
  "key1": "4juXu1JZM53YDmvEfsPCaUneBuYEmmbbNsuGTvFEbm166NEzMA6wDJ2baV8CBPzZGPwSmkPA95kTG3U3ANhAvfqz",
  "key2": "4yWUCr2f4a8HRc3aMJDmksBCSAogSkb47G9RAgggpPfVuSV77PXx2fnv7osaUzsZVShM8J3Y6pMj3NWBrkgsiaKd",
  "key3": "zg2XTHUfRfihaURQ4pF4EXuDhaRsmkBjgmkWmfQdkVKxeNS6Xg8RCXEgrYnupKfiSESiVSrjPDuS4BaU4bgoGmx",
  "key4": "cRgY7Rupib7yAyXuKf8Sd6APLttvU3VT8M2XzPLHBgqK5WhUY8Lf45tfFgGGcwECLLMAKgPNsQaVD6TB8BHz7xX",
  "key5": "my9uY9u1oELNtoiYdSwcyBRgrd2NmM18bvLLGEhddax2EJCQFjsaFpz6kL4knaYpzrTbcmHBwUjyhhCKF2tgJHG",
  "key6": "56p3R39R6VYpE9sUv4Vb9PDQBTfsX9QY3yPBb5xfmLiSLTKs5etCtnEGdHstzmm1HAornwcuWBMrCqGgEorKFmvi",
  "key7": "4u46Qe5uBzazwW1zbxc6jaffTBRgUTFJMKwp1niTb2QhKCg8dvhU1Q77Sonz5t98b3xUhXamCErhguHggY7SCHx6",
  "key8": "56UhUazvD36FXBxSXsPGCwrKyKNHsB9D69nQkTgRopj2MPYGYgRS5zSGCGosLgc4BAJaWyrejKikW2Jf6g2HoGiX",
  "key9": "ppi39rWEyEu3qXGe42syDgsXbtsAy79GVXcECmEi5RZharSJ36aDxTas3Gp4q1NSWXgZ63z3Dvip9MX1JxZbGTp",
  "key10": "5vQYuyjfBnjnvLc5gxUZ5hK75VkB2LoXeSscRHYpdeLvnbDayRzsV2iXyKtwfBVPUBA1vTEjtNRbm6c78FrMhuLW",
  "key11": "2Wjo9kiy8vaqJibdBaxnvHkMj5GstCT9btq97WCSbMpXP5oLzxxMomCpXr4UcxPnrsukKVpwDwokdHZUYUcVntd9",
  "key12": "3rJYf2tyD8s9QrQXvEpg95Qwj6mwNUokg5H5dQBCLU79wNrRAkYpQxZ6PpT3mCV6TTyrTjPnymTfVF1n6Mjpr3DF",
  "key13": "54iWFD95LYr8sdQGxQCzLkxDg3LA7H1KPsStdAg3ySRbk4jmkevYdPvooQ6ZZxFsDP1n2tbCPfghCmihMwhQD4C2",
  "key14": "4rVCxTnVAi8s3oa5vAvZU5VTABVKj7twvdmYR4KDCVkstzShvewDFVjFZAkX3cBcWaH6uA439JeHpMoeKe1toFaW",
  "key15": "3wBXPt7UVtwtGkq26Jb7PW1c1sgrkAdDFa8sDNhRZaxQg8RSfBEZt1vB78PtiH5puJnQUj5gNohffCDfTJtMDSGf",
  "key16": "ehmmCRpa96Voodx1uMThG51sWLQAkfzhQFnY2RAaJBDY6DaSpunXzpyW1XjELvgH3rtZXmu8T8X8G1nKcJ5XAPu",
  "key17": "481XHjhmX9ch45k1g2acrv4oTTZqRHNi51YemhMxHYJacLVfaDp4FB2R5Sr5eocqBKAkcPNjM6S2gpxbE3DQZrh1",
  "key18": "pGmFS5hVyViuWzC9hxH5t1wjPD7iwGSCm8NK5ZjbcKBcFZYUnUYqVmyhb58Msnc95Dzo6mQg5pWZTWPg5JVLuvk",
  "key19": "598Yt471ZJbNQFXNEVkFPtvaDZPTXH3YUa8vh96HqU5UieZQo4qn9ZBgJDGSzG6BRHNPnXUZ8KHUNqDmvUJVs3Mn",
  "key20": "53rMuxffkdJo1biutsgGZ2LevgSZ7nirTWdXNyqTig18xzAFFxT3jVyKiyDpPbsvo8kvrimGbuEDUK77zHmxwds5",
  "key21": "4Htrb7yUCGwcTengiZuRag9ve8qWm7hhfAFQZEivgCNR2HJpy3mLwQrMdmDffXvrHe9THSMWcZiHWngRBejc6TUu",
  "key22": "x58DhrwY6p7d9bY23hR6WJNiLigFJbkUyxfTe9MMGb2ZCsfr6oiSzMj77jgEJB2xSvbYPdr4D2pMd69Btq7baWh",
  "key23": "26PPnSauZJFDzL36vEYiXz8QoKJTgNNWNxEdjEBbBiHViVTxrXWrxiYiiBSY3NB7hZ854MbERKqgyKcmjgnGw99P",
  "key24": "3eawJdNeojfZQtcV8LpLpnLmW3GQR5v4ehuSknjCLADjsnMjyGvk5qYvDq5GLRXWnLCxVQsP7jembTH8ny4pP5MF",
  "key25": "4yzWTPzEbRDj6vpSix6ddnF69e9H2QkJSdwuzUt2EuEe4QybgzUmQG1TFGSTURTe2CbFz4wUMozLNyUwmTbr283r",
  "key26": "2F9T2ZEuRpkHpsEvDh6mCy2UrwrEsBdQ4u21tLiaH9PSfUXdW3unVMHDcW3pMQ38EZ9BMuQkr2ChdEwYSkgMLLy7",
  "key27": "61w8sk7ZTNKUanJmoCQinbnHJTuoJY7jWxUgFdXCD7xKtCAjpzbGBQccxFNgqjjsitgZ7pTCjsUPWcVb9GR8XvsR",
  "key28": "5k9Vhrv9AKT14AqgiScBy18uSroNJVKgdSSKwtXMvAaTeSc2d3i637uadFLbELcudp2FdnUGXijRqC9zTEZkQXi3"
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
