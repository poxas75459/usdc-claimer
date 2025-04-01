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
    "3GMZoXM3i4hfH2gE2oiNVdb2kBCJV96iMyiqfB8FsWnzY2DJFh7sG7NXBXifMwDqLfDQeRsrDSQJ6bpDJFyFgJ44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39iAry8dCZsGPXVhQy6VSYAEp9gpkSudCcedFndEUjbLUbfLcTPRHwRaxKSU7srmYhGskzJzCJ5HeogcW5L7p37z",
  "key1": "2cHWUtx58dok88S33neJSgHhfVY2WLXWhHFQjfUpLjhiNqsEgVShMJ6orQHxcWg3sL1xUNBCtroQDnb4G6D5W8yz",
  "key2": "yNGxZqqw2MAbCKSPmYupey8jUuqfeRqyD4roeBR9W33q4b9xeomTuuUFu2cGPfFUq3jcf56ChHCoqAYAoFv9AQ6",
  "key3": "5tE4AbhdhHoZCWie9FRP7yffk3AoKe7PkLggjMdvneamv6BGavP3jw39UeaAFAamdjH2ZB1zy4VB9LiRWKVP1Fxk",
  "key4": "5JpBidc8JiLRwDAYMAW5qzoumDqbv9VnfJuY35Gtjj6294ZagCYz9k2qUA77E1TVTnPJ8oQvt6AzYoQXuHB8e8yo",
  "key5": "2K7sPremqgmT7idK7o2nPHLJmJTZMaUzQdf81P8CjQaVVVs1DhdS2v3FLShCPhnCa5Xv2QtszJbW2BcX2bpFQQR3",
  "key6": "374DiHkUf6MXFKHCF89PEcjeAHbwxXvMGVUjFqj2K6A78MYetN44ySYeLnBc4qDmNtgTs7U5jE4Sw1my8jU9Czzy",
  "key7": "44zRhjSRkLLdLwKbSbMVmcHakvT5nPxueVVfjEV5P8cvFvzrTMYmxgLWTG2hkiY6Qxvjv37bSyC53D6V9h2gQuvf",
  "key8": "5WdDTzvjwfJVSTSiDuMLgBV7wJNHTPytcPQAzQbM9HdHqGgrkKwozdkWt7kwVSVQkeiUTVavqZUw9dLPeM9oXiCA",
  "key9": "2Z9Anb1gtRPMH2nW8omDZVpHVFZ5o8hVsND33nCjcLQe7cAFizNh35KJYwxyEiHFHkUuCupkiBeuF7uUn2v5iyFb",
  "key10": "2GY3xW41c1X1ccRtsXMFbELvyfGcn6wnQxKWRX37PezjL332DJYUbW595haBEmtpS9KtRDqEM7Qao6b2xHboazYf",
  "key11": "2H1W9GFg9c1FTtQdHLi8upmvQgYGUZC5rdkpQjJCJCnqquRpi4CYLdaJvM6yRQJLUSWmGxK47rV3R7GxdspByfBn",
  "key12": "27c8cinYciYbj3aVAckgQj27KCkmJtynHZtFxFKLXtmqhfUWStrzBgXkULSFpu8aqGypnvT5Djc2ZDXWMSZJgET3",
  "key13": "367b6Q8ckorqc8dBGKBN2kw3hqkeUrv8vkQD29jqjGq43Q3P6GpRCX4MTMtdm8JiS42b9VQBqouacCGxGcpuhobk",
  "key14": "5sCSvnNH7GidLjfqY95sReX7g11gSWDYwn8rcax61QzenQYJbX78tcsWs4aNBvLWeRDoG4377cUqTjernKpk55dt",
  "key15": "4oUgcnyLF4UMEjy3UX6xkfuT62U87oXLT2ZEE981sLiZAEexb9QF3gm1x5rJGJTF3ztJBMgHRop1JEd53dFrE788",
  "key16": "3JqB6FXURzsjA5XuJaxMoTAWLPRtNpcinhGDTDUukAEd69uSBBb5XUXQw8hKKcED6LrhLT6Jp7Pg9YCDU2zgbqSa",
  "key17": "4iMBqTyiu6Y7jxHW8YBSgDerjP44SEMxNctBMScp4JfiW2aZkGwbkBiazYnsGSqM8bo7HcCwvQbedXD9rWrAMBH1",
  "key18": "Qwu4fjTEULph1HQPrijAXBGsJw6wDxcn5pfbAT7qA6bsYaLv2PF5GUjwLiwT3i4VnrjNNpwUSg47XbTTJgSprPx",
  "key19": "3rTfWsByWRxK3XvrHth3BewPnKF9mBawjwJTfSC5kuQeRz8DpxiYhDTnZjovUqXupUoiEmAoF7sRsHCTzXTFu6k7",
  "key20": "4tyMeoTtz4Hd2hfpPvCpmECvmjdU31nPS1dHshPRccKz2GGyKahdFU4ZQ98EHyeMXjdwsVCRMWM2Z7sL3Yy3BryD",
  "key21": "4kP6HCWntFjMMMsFw5hWmBZexdkoL45aXpYPKBGV8ZC6XubZXD3SoYHG9FwwNJdXsqCkevR38gJEJdkFpnEcWZxJ",
  "key22": "afB8nEHp5awEZKa8HorowLNzT5oXs7XCzsLpDzFqyxNM2WZaJxQC9gEL2eh7TgTmF98WtFePQrR4ZHcRRDeUeHD",
  "key23": "3RSB3ov5UaHEyJgoTPoHbmQpT7pnDLoCMtRZobGB3BoXmSLRvQmHKoTFKodttXJQw3Gd3HDQyebwjrFMa7TZvYLN",
  "key24": "356gYPAvDXon6Tco72vCWPCb9v55D5rkKY6Sr5kNTQiZ6eJnwR986NZWUnreQQQwjZ4m1KpiLtsQwMSU9QFUwyPz",
  "key25": "42GRnZ5ztFTN5qYpB9wCbFP2dcQ7pg38aYcs6aMzYCcD89LdDHY5Cwpvrzzd8GVCLWu5yimzEnsA7LaVtXhoeyhW",
  "key26": "664kRi94uHmCwbNqrXqQp5pTQLXXAeJQSHXUbUB3WoW93qq36JVgfYLhTfMP4YNtebk8gQi4H2SgZ6LRe4ao1KmN",
  "key27": "29sVQWQytHwGxLhRvubiiXa9yTcVpFLWu6shk2fNM9acY7fWGuwMHoP4UhEQz25rm44PfK24eGrr1aGHyX7TJmXi",
  "key28": "2ujpNuyKM1UgkWLbDj6MurcYrdNn8kR71pFnUbJxC1UQVG9eXN2YBPxc9ZFeLWGP7pDX8GZXWEFajSZqRpZohVUp",
  "key29": "aVWKzanwu2BMUmTuu1zMhuGR3zm7Bd8aAciwvw1mZVf98MxACsjjPM1zh89d7f6D5WgZoyymvthLSDSJvUxNLDK",
  "key30": "4UbXVrPbUtAEEnvFBK3mphjLs779ouwAu3ntuuHMw1Lc87ai3b39GHGWvox7UFBs2tkubikcaZaRdV4qN6XGqgks",
  "key31": "2SnZJbBvCVsHTm4uJg3SHzausVWGy3kJtNAqYJJ8K6dLQ3L3JcXpgx2w9BSPN6V7fHfSZKZTNdfa4ARByaFzobQp",
  "key32": "5GszxksZ2uX2B21sTHTgWDZhqEeGqxu8xyWkdJpBPdi4Ap4LWiMzE2pmTzXbnD49rKD34YqusvLoAMJAADuYPWiX",
  "key33": "28jwKPJymfCowzmnXKB96HzdjBe5QAWQLDSuNpVTjVFYkZF9zxeF8ccA72J3trGZVnsuCyJeBY7buKkqo1VBi3xe",
  "key34": "34Fs3V4kDvjaATbh5hqzdjYTtJdgd91TeE2tCpqofQkkLQiZHNtmVbY3po5NtDXTqpFdLCDZ9XEjWeVMLVg7NLgn",
  "key35": "2BzWaQH6KFZjvv5h78fBy4i5Wu1dDiDRAveZ4ubTnedj5aSw7CC3jeWXArMD4UCUh1qvveQPggU2WVouc83JiKET",
  "key36": "4YZc12EGGbB2vgbE4mAHevBteNZq4oNB5q1MrjWsonW3pnCZFkHBm83LSJsp5tWUBXtuSsUjU1nwDc9mSfqMacAY",
  "key37": "5MwXSKBUdszHavTXLw51d3RXVifiTXwgnHxEb36oESY6qMPz47E2SBUVRgTvcFJuSB39b5u6ecMwwW1ui4kadbss",
  "key38": "5vSmm36PBDCeQmJbMtjWk91rMJSc6ejy3NB6Vj9ccbvAGuwM6D1voRCqaybiFU9YG79T1wth5vBUyTnNNsMxpo6t",
  "key39": "yPrCUXdgXPkGbrfUyAbKwBKWk7uzeogNXbYKZ3Xrry9LRNxhzoNqnNYQQeDZmKLF1Q9p2pD2GJ1D6FxQBsCoAuk",
  "key40": "5uTwiT2NLaXM6PEgPbqYCJHEzYqPLbxYbV57MsVsTEja5y5j86bDonpioJP8ZhRvDVBK6HZk4zkX6j5YRzHPGeVu",
  "key41": "654j28sjXwRG4gf6yAGiVSsD6gkzQvsiRZExbZWsKwPUg9L25ptuFms8vDzKG3tBzF5ybpJRdsVF1xSd6kx8DHHY"
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
