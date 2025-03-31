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
    "5pw2t3ABWW4ogEg81cUr3h93jFNM8Gkf6iTA3oeEAhghRPrU6cTxqncg5hb5LoX58AaNi5jLuYcazXTFScmNyV9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JNzEbrsQwSV2xGWCUJQWaPoZnhmhoaikkXu8qCCu4tx2PSoE5HVNh77gkeAmfEmBwiPNphd3iWJrYUqc2TFFDyF",
  "key1": "cZxVY4U7JVtVKGJWt6cNiB6riXeFGRy7jqzYabZ8B8xWATuWR8kNsN5CU5RquHxj1UJZtNEL7kZTQFz2EHLTogn",
  "key2": "2ff2kcqryGmW9FqqameCQSAzdynd1rdpfRCXXobcBrkjpKrwB8ExCWQgjvV7PdUHLYVCx4YAntpGU7GkSoCFJRz7",
  "key3": "htujiV3aB6UuWU9qYJwPy6rQ7HxkvqxzrYHjxYFSjonTdyS5krnuQ3hofWFPGbNFitJCiegWWgzbV9Yanppo6jS",
  "key4": "iu5uaHoLp2tQjAfGG5eHbtSnLQ788vfwPQ2swe6483eysRLnKbEgsBiw99ucDMpZWQRrNeK1c5GPSQ7ryvCwypn",
  "key5": "5nU7FceGSQ1JGddJWvAE6hU4GoHzsqPpzo7yoaX1s4bwfhsyta6SMJeQQG5azr6mgE3Xc8h83m8gjjjrweuci8j1",
  "key6": "4QVajd9i3v4xR4RJuSyjuuf8edqr9pNMXnqFnw1s1wi6im6Jmz1W985cLPWCjkKm2DFKBhX1wD5tVzcKZfp6KiFi",
  "key7": "3rtu98g74Ti5o4UV82cEiQct94Fhv9LFXaaZ6boi7ZEaSWiUuvtqqxA5ZYTAUxowAj2raXncudsRiqThXngtLYkw",
  "key8": "GFdEG8Y1P8Cqy6isBt5HESg19XUB2TYG9mpEzxF3TVnM392jQGe98uAKKTYWu2Yg58AULFnL2bByqTJ2qrpWjEp",
  "key9": "5fbq1bWJDrqdwi8TBb8m8DdGbMB2SqrNwaVSFx47Bw5WMYSXegji3BpRwwuvCVKTpBCXww1qMukiDeiaqHsETpJP",
  "key10": "3gUzD7FV17NNvWat3HZ2yGrjxzFwEjVEkh166q9VmfeQniAH6vRv3d7bXyAbPYgnQyUfrKPBJ8gJ3bAXVvD21hqP",
  "key11": "2apLncFJRrHbCfK4oXZsSkucb9yNPMZnQshzPBxznfqSwMi339sXk5wC1SrcgiXbMy23mFSNbVghxkSD8jKFHdNb",
  "key12": "3q34ZesVigdoCyi2txN7guZW8AFUZuiCMPp2ruBBDuiAXbR17FgACSquAaJfuZH5VHhm42GTP2z6N9CsCnM1FW9W",
  "key13": "2fyDor65xPtixeySpTPzkcWpC1GckK8GfcWazhCAkmT81Mh3fMU6P1hQtJiVF3mAKxE74k8EgYdEuXZJF3NC37g3",
  "key14": "MpCfu5vxvuU7XVB3FuHck1Te3fxS3H6okD3mhPsy1MqCYEURW18afoDw9v3McFft6KFSm4kRZW5M9EKDUzf7un8",
  "key15": "47MiLcQXfewhKxLVqdvS8Swb76NDo74YLVcGw24DKzVD4yv9QXyFtJD9J3hT2SiTc1SS7qht1T1hjiZ3apr5CaKi",
  "key16": "hmPr3PE6wBVk9wPWRxHNBjffoBQVE4DGByyWwf4r11LnPPmvArtNxbMURuAhY6GeSSB51UzftNCbTUxumTZXMcV",
  "key17": "3vZk8Fsjmzi6uVTwVvZUAtt1tfhsQ4hML7h3TjHBH8au34jfwi5vPQyrGP1jE79JA43x4ZzZjpctJoZjrF4eH5vw",
  "key18": "4mwyDi5jXgKHGaLKrXfApJqS61KXMGipMXMNN6xyro4qUidHMsHQiZP8eDXDUyTUFtCoVDjVpunPneoMRMzFquTr",
  "key19": "5UGGhsQNDxmCcqMxU28kCDJxCbeBkQh8LxNhMXyaM6uevvT5XYNwUC6DtxoqspU6XWr8NmF3H9vXvMRW4ZW9mbJk",
  "key20": "5BwkbS6zVP2T1nwX7xaqB7Kyh3vQdgx7iysFtTspmndy8JrqFcS8MeMXjGXNN2fLKM9PvZyg41RXWbZoMAgRBLKq",
  "key21": "5Ko5E1LWzZxAGjCi9LARo3V6JpDr5Tak3BQJPLG5BrvZQUQJ7HfxYVs2H66ajTUsVcd7zNr8UmxEFi2q8V3pRgDn",
  "key22": "66wNKdi1jGS2uC7dWmGfYV2cBe5UXq9Mp9NGwYetDZx5y3gNRzpjzEM2RNTNfhrCftCANaiCfuBHHL4B3TCV2Vyo",
  "key23": "2S5TkUjafMGFoB3WDH9zVr7LAcMoJBemF85nSMSP8WWFFjeu5yoCbhpNWsDuGTv24pNveBPJM6VyBSzTHTSitYgJ",
  "key24": "2z9qETfPX3rs1ciEb1hyomef5NFRTjzHyHvDMKE8cQwvsFDwucDNWRYaXYJ6JZxC4Kr5x5L8mNRFgzvnn6rmSL9q",
  "key25": "2JDo3Rvwo56DPhW5pFJy8wNALjoaN5d29xtBryy3KY2SFp1EZhQ8vkYQGSRtS1TCunvMgNC1ApHbcXygMAwGDrXr",
  "key26": "4zpNKyEEzVjd4TDr4sSYszSBMt1yoVvcb7Qjvd9t7kaiGYYhzVFni21YqyZT2fBwco6qNY9XTPVahBTPuUdi7GcB",
  "key27": "2dQGgehYGGfB7b5sMWPo2Xc4xNH1kc3KZ5WC5HxMnnHb92bEt1iYYFriMYabC7uh3hzhM1FrPKRTXUwfmXXMHNuX",
  "key28": "512XkdKsZrh7SWDfZB7YsatpKaLTtRe5yE612E18sTcsht2uVZb1hU3DqeX5ag5yuea7BYuyZUEuLvPu83Mjugx1",
  "key29": "26kkZicX8698W2jiQiPXdMRKcLz2A5UihNFtzoFwfSF2444TNomuHd2JLuasZqSqkXjJE9a696V1vGVq3RZvax9Z",
  "key30": "3qnXrQ2txncaXnjpkWuGdNASMisrTtWxu1Pi8CxrTxPstdCBs6365wf2aVdjJfNze66zt8tcuBFkiNhEg4EWjz1v",
  "key31": "61StnoJppADzrC2J1PgFEPZWTNHa7qxQwWMPMjKMahsDYb9bB5UAB1Zi3LFQuYu7YNshwv8j49E6LwVNJiyp27fy",
  "key32": "3yrXsaASRRbm8RDK2bM9Bakb2VbkDTRz3NkTrWT7EU7c4h31p4C7KxiYTZCnBHWSxVh3p37m9pZYL6X82nDtJhMT",
  "key33": "5Le6eKZdJyDJy4R3JCxFv2jQKsUifNByKtmSbm98Ze9qyhpbUPSqwY6HuUkWYYpih6KBTu9dXKUSqJv6kTS522fz",
  "key34": "4X2jxJ2sLaN7R3XjSM7g9RQJCGw964a3LH1G6Lh8t948V4Zm1Je2e7VXP1kUYhh2b5kz5uDGMrAKry7WzJS5hWtq",
  "key35": "26jxcd4eS7utAERycwka4bdAYtzyF1yZV2ZZzJJS3JUZmSWtw5wab9KdW6jMeDxns9rDxy18CctUChz9jWLSS2nf",
  "key36": "3VY3RWBERGDsiYw8zy2yn28w1EhiW9cXFNshMVoTz1URpuf3oYaANCHhTmm8hBYPDkhzL786kJF6W5uVQgB9rGvU",
  "key37": "FQJKqvB3BMw3ArHWN3uNzrzEyoeFBo2PcbZNnHLAwZLAyeLGxhbkfCxyFpjy6JPC9ACzW7CcnDc9mx8557mTR85",
  "key38": "2y6PhQXFeJkV4h5NyiPPgpP1XU4JAwEJqq8wqBfAoiXBBFTcvCj7AhQm5qzW1cHnposWZjuHARb7jE7pSL26vE5",
  "key39": "2Qjv98j2CTdzT3V6EHGTQm4U7uyB5ZMtYMzT1YsfBf6SbdLhUkteDHqjMGi4UJs1jHJ7uy3iuroU4Cm953Xpakv2",
  "key40": "42BvKB6x22Wg7d8qRRbNNjc7BJeLRkDhHEv9zRXuLXsXs4J2Tc7QaPvu2gsgXq56YNDnfuFafKa2GBdp3H5p44yd",
  "key41": "4q6H1TWeGAMNFF82cTopk8vihww7DLRRoGprVqLQvwC15miXmNeqegBcBJBPBREpJubi7ccWfYjEmEfLG9MfK3tr",
  "key42": "5UoBEPqQRZoV9Gae6i352bXgycVMmCnL6K3Rr4x5UjyfEbqsvQXHzPNrcJnZ5fFSNFobr3hN7zdSSRmeQRTXgXgh",
  "key43": "2PRR61Sb3cdUGeFQ3hwpStYAM3UeRsepMpgeC6X8D4D71Af3Qp2NKQXwMikpRF3yqW8BZ6nd55UiyzrimiKynMbd",
  "key44": "2pBVTkzFCV3Mf5SDGkoS3M6aUJGAsKTQadK8xB4VA7qz7WFcVKiznCJdLay9qdrq1aF6WFe7MZULC2RBASdbBEvP",
  "key45": "4ShsiFAD8LD33wLaxpbKU4Kyfy83b3zK6yT6T867Q5V8EcrMivokhvnqSn8635VJN1tPcUUBGPBM1Fdvuc3AfNCy",
  "key46": "2KWj1E5TqxB6TvcnrjYprtPSqcjcsZNb6hGYXDMLKw1qxkD78Vver2ok6WC9Wk5MP1JSmw8HN9rVKbJQuoC4cC1a",
  "key47": "3njynERNERxubmcDpmjUyQeMgutyGRDLwkhWgmeXjCGoKmdJVpGpNUkzko6KUQaZbC88v88fejZuQVKHjh158xFB",
  "key48": "3rR3CpeZcpWoEcvpKZMCYbwyUgwrzMCEYPKyPeVQuxTFYyes94HW3GoP3ArHa31gWUnRgoyKKt8D4zyLPKNQiTmL",
  "key49": "3V5Ww8jfS7AEfBwCt7rfqkXsqCBhPge2ZQfvxcGLAb1kXrqhLxvdT4ECxM1CbTPE5Jd6t6ybUj6QSbe9aPHsDfF1"
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
