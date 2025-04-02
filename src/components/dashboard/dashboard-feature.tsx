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
    "3HbMQefr9jEo1npw8GwXxE9LyJBGMnhzJkGnXF3SWUCYKP57qD2vUqffCujYiRfNaang5usBGNsrhMVwWrbPRB4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i8bUa87jUy5BshxaX9fsgtMBfzCHjnFakKsRJVwdg2GuyDQoz9CUgQL4UTAYj2aXJ8vdKKNXSCApKFuBBXZAp4r",
  "key1": "uxXFLKk123xaqwbMqB1SWjCcLmMRyLQ4cyWux1UJHE2jdSTmehfCstzvP5ZXWosPnzprT2qs3wwAAGny4P6aeaN",
  "key2": "yz224SKJNudgkgJzubfThuu8Yguj4GNsZNMviYXMW5zVD8iQSM67ZxfxbypyyUDvwRJSP35BUtW9ZV1QMDj9bjc",
  "key3": "2rcdMXHaXQD5kxcEKeVTNUHDMKytJGQSi9VWBbjAM7JDwk4Cz8P4VWK1dNdvVuKy14qHWivAXrvH346tUN669yw8",
  "key4": "391ofBt8yVLxqxZeyc8GJVmZjZR7BuUsh7iAvLogVgYAfq1HQUA59ZM1hBxC5agDwYSXZobLHix2ogFBqZ3tskUX",
  "key5": "2fdxrfAgaBV3BnjYbaErUvn8hRSVjHdgJnKU6G12CirzMQyTjmmtCTpfMP25tYae1bZpgiy9uwdQt9rNw37FuETP",
  "key6": "5PkGiWXvgqLsruCNqZPLoMUJJZsHiLHR4C7NdRH8bAQu6rH9YcPYxorQPDmoem71hC1RbtbkfaiSC8k81ifTirgn",
  "key7": "qmjYeJ5LKyoo4qUpajjJA38B8XFcwkWpVtMraZxPTUuJB5hTrdajjAWR2nUVc7yLEwSwk9vHgf2LjB9PzR8UTvM",
  "key8": "5Q7SXpqoVat9HAYaWxs7FAmvqfM7oZZVeM4sqMAg7CCZmFgxrjxBp92N7GXmKvJEtoRDBzz9HimoPREovdTJcMHV",
  "key9": "4kRDkbCksrxw12kysEaQR7r3xrLk5kvp8AqjSETAHyEhxUfiqpux5NJXYxJR9NcoiWDTVp5v8epZj7fGKwVKvCX8",
  "key10": "2ZKjtNkBiq91ey2x3dTbS5kt8iFMcKvbCN4wwxMywDfg6zm2ouE38HQVwKRV5uVQaMPEKYyeqojuwxSdx61dLKV5",
  "key11": "4Zr9RvjnvnhLMMez4FWbR1FG3ecn63bcav4CP4dKPuUfbnKLPbYJaTxWWL3q9eo4rZuoHqppz5KDfaVELomoka2T",
  "key12": "4zyciTxfwcBFzAxcLc2Bx1Rh3sMWPWWgQpQTTn7EXPQdSMijbxcH4aNUuN3KxfBeKhgodjLkYGSUduRiVzHGxvF4",
  "key13": "35xZzrrLf38UpxyKftrnQzQXX885i8LtWbfq9Gv1TakPihZekZhz1X89os9iyJyX1Pq3XwdFsDHrsqR1Bvybe4Vm",
  "key14": "R6WrEkBEK2QLBQJWrbDgCJnsQCXdiA7JvqzVd3TS97nEpgT2j7NYDGfpeazHjDQ51fhhoJ8uEjbn7VhQmcD9gEv",
  "key15": "3GYDs8fYtx2wkw3d7BqmComhkW6xReNtyK2ZZtnV3v5FWh2Le3AWmixjm19r2gfGZ5qfAGNTwutDjrm3yzbzcRri",
  "key16": "35reMcwaGsZoQth11FwmKe8cUsQQ5m9qpfi6PcwEe6zKmx7qDLW3f1Xzot28LJendo1by9412C7EPa4pxHGq4KQU",
  "key17": "5xYaSSPMgzKLGSpwYTc888nBNEZxx9VWyg6sCoBchByrPjviaAZiEcro8dwphhTkzgRnbCSTs8gSvEURamSnZgQN",
  "key18": "4xzZLY6ubo1PDxUrR9QKr35aXEugfVDTqHbfS5CQLugs1ohTWb8fSzPmsQdCxfCdJLKh7M9GV6T5vnSKpq2kgs3U",
  "key19": "5jWLaCfQ92h44ijuzmeEGde25NivRaZbunDjAfWx3ZT6ahE7tYCGqKw1BiXSDxtmTyPziGxgmB8X3F4yMDNmcGK3",
  "key20": "66vNjQdhY4pvKVWZDysP5pm6QuqDttRtH67JJV48DjbWzNx6BYUa4cfx2dDnUynTnxGZ9y4c7AFxHwkwbeaYUtgw",
  "key21": "rDLcgjah6ZQWL9WYZANjzJsVbPP17PB1ZgMfEgds7eqFYiC7RSwq8pN465t6BVZZYLWLyNgvptY7v6crSNDpjp2",
  "key22": "4cu3PkJAs26vtxdN7Ecwhk5JepWy45nnobAVtvBKwkRMUWotHNeZ6tLbPhBAhbz6VkKZNRqtNgA19iQzF8xey2kJ",
  "key23": "ay9jbJ2CXy3hb2xnh1myJWtiEdQwWuQAo4ZYWpGa2rcnqSgVe3civMTYMaNjCCgW4w8zDBNgYhSgGLtuXpumH29",
  "key24": "56Nu53QWku8Er6LvcyqieS3eVxEQoH48wfCE5W2ReRKvso7JTskussNjUiT7451eCLURderTiAgDGKnmq3tygQxk",
  "key25": "2AkLu9sAhoe62tsTqWirgwqyTxUcKnLFteevscPDqVABtjySVjUak9RtfKy7j9gEemq86bEcsuK5pX5behpAppnn",
  "key26": "3jUQbDcfF4DfA6amHh9LcavqykqkGeRvLdtURLALC98mx5ZHLHziP1GH28cKPhLswaoNCUdzzriPNKLgJArCQPyV",
  "key27": "wXB17SjzJ3pCRiVuLuByQAkdHecqMoq9AgQccT8T3A5uv9EuY9b8UALqANHquEaeMZW1FT51NTixP9xFZRrKXV5",
  "key28": "56w1dGnxfkgRVZfmS6p79rFT7C4xgbGs5dp2EEbZTvo9gdkLCkVwzWJYqCe4mLrCFF3oz62T26pWNNLTR29ij2Gi",
  "key29": "4NTKzyQaKCDBVdQAD3YTScbjUiEyYk33BvRoK9TTxWRq1BRwKhRXdMU5PygLAPDz1Vt2WASuiFcGiCboKd1cXSGi",
  "key30": "3SbUJF48MRXqhL1zS1GpjMsRpQPuPThdfrNpSr4fqX3A47gK3HiTZ8WBsJMtfasy3GBeMwoE4rRm77spRUZrmLJw",
  "key31": "eBrzjVZRyKH8X775HAExYu2QxXsCiddfeEUgWfFidzY4psowUe4FmPL6UvgnuBacWbAFFvaTqdCjUnMR8PKmWYY",
  "key32": "3PCp9JXpoVefjrCxG32BDXDsHCV1ua1UqcoA2WGkZiguhuEj5mo77RNZ6ixHMrXHsuC9s6zhWJ8jytUYwgm1JCNA",
  "key33": "3axrsvm9iq6WXg5kDRxWj7mLjq9MKSKNa7buXMdipFgVUZmCPZoMeNEBsr2SXeQmduD2jgpW8ECkd4YHsTuLpQN2",
  "key34": "5FjyZAz1pT6PJbNLR5ubVCej8DdoV5mtpKzpRnae61nviE2JfYYy9khS6hLrFdrXjmzHcR1xELcYNGz3K8j6n859",
  "key35": "34h2txwMaHBGYX2Hc2t6EDjMCVMRnWD8mzNHncNj6J5MNiWzCpyKvfPXDE1dMbUvKPMFE4WKKyXoXGPgNtNBxK97",
  "key36": "jJvLHUFNPN1vV1zHM8tzcZciiRj9cJ6A5hRaFHoVGgiTZ8TqerXKPcpvNeDcRyuFH7AUKGTjucY8xSebYPSs77v",
  "key37": "62kSD8Y8NmZj1cbiKWicSH7AAPFuxeTFZzfSRdX1JPLtP3Ec6F8k8rg9B89wcsRsgSX5echM8tE7Ymf8SjLZUv5K",
  "key38": "4K46xqZTtfj56y3voi53JSpaRtSTkwF69nD5eCUZJgPCeCcCVhxieiSM28P1JP88C9iVoV9d8jasAPSFyy38yrsV",
  "key39": "3Yjg6RaqyoKBA4PBXVsvM7xzXrQrSex65suTUo8q7NaJnjVo9LhV7RVhcAcmmxc2UjazW2qWqpUzk87sS62ArTXx"
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
