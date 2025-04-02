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
    "2uTwidDsnQXTEFEhXJ6KrKfNMNcsHJFiHLpn94m3DQ9PBgXinfB9JAJyPTbN3BCX19QpPoQZecTAP3gWhdLVKteE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NPSSgVxJh5qMgRrPJ6auLtAPVTX8qfnbAEL2GgPvcaf8nzQAHQG3Gqs7Sz5Zbr5gx8zRCm5ERwGVogGTho9xcKs",
  "key1": "5f2xCmPKU1zbFLorvhGiJtjYLbuVrnKZYP4FyM7tLEQE9RgjxtZghFL7X36Ee9sFe8H5qTE1xUdqwvmJt8cXvH4r",
  "key2": "4TkRkG7JiwFSvZu2SsFy7RKmkm3BAWKCgdcFHrGEQtSDBkaNKjtuAXsZ5t7RwZPrwhY4gHx4uSAujb4pfuuyy5dh",
  "key3": "4YK1F6wuDuavXNgU24fwcfpiy2ZWGdXkQtVgXGJj9F4ZEGCmKKj4TzFTwkbfbBKdpgMzqpPuQqjuBpSe69tYkYv6",
  "key4": "4WkQkCBQGrp4VzYn7nEGkSPXd7B9gdCVPR2bUpKnF1wHMWivW82ypBeUZKCCzfAn7VsV4FMS7nFXNSFiBtKJCU8C",
  "key5": "51cD4RQ9e129iYZ1Nz6Wbw9QyDRuzLLeke55rR5SmLUBdybfUSWPYyikcSPHTXY77F6XDdFWK4BwqpPzAm5UnE83",
  "key6": "58ZvtDS3JZtmVrvaw6dg36nDQiRHnfYcZQCv8KwgeqecHwv2bd4wAYhkvhiexr1x5aZ5EJn5jXQEDo7abrb7NEPp",
  "key7": "3dMXPVoakQqAyjuXE9WLNAKSwWmFTPPo9B3HPETEsGU5fMjdCtP3hbW9WGHMoQ9KyHU8qeovh9hd9vwGvZ33nzmz",
  "key8": "3o6Gw13Y9gpFm8dbqi4Pq4eoXU6RF7iRB4U4EYwcQPDY1ZjkTxqTyP8MvEihQ1tqLnF6UWZeepyhVPi7Nn1Yhe5y",
  "key9": "24xBKM1WjNtxxKfqQwEd56adeMLVstDtGQYZiCFnbq6iTHbCM3cb7hhQCBGTdJReVvCNYsGUAeYZ2v1ogoXg3toF",
  "key10": "25mjjcpWM8vJzhFe2vd14BamKT3jqtuZKaMXjEUcTbqrN7ZWP4bdPK7YkJcDifAE1m6KYR8oPGE7u1JKmw3z5TCS",
  "key11": "5Ru6hGqsNmGFpxKjA2maRjwGak3Abra1Rv2Ea6CW7rBDD8GC2RAu6HVLFtTh9KWGHk5DkZqwkZXkLTs7XpjjwY7n",
  "key12": "4rkfhsC1c9QxJ5vhsaJd9mRnEbDm2fuhQK6WR6WzYaGTTg7A4TqktA7js8eACwX9PQhUksUS3c95AwFQ5Jn4qcWL",
  "key13": "4Gf1to2WkKNQwQqdyC78CVt7xG5T8LektH7HnVB7kjv6rq9tL6PA4am1FKBUmQra7jTYuyQXE8zcaM5dPwp2fMPs",
  "key14": "4zeydhhau3bVhKGeev1wM3Ca6Jb3HNSwppdeDSGNo5CkJBjZ4fq66rkh9ckc3caZpYmXeTHyJm6oANT8g25YRCsg",
  "key15": "4u2h9d9bmLn9a7R7nxgPMvApqHKm3UhNj6xY57cqPjeQ82h459GpMLwWeEVe4Duz9ymrQvTPPoc9ycQW1vfGScXv",
  "key16": "g1wAbTkoSyiXTcupSN4yZMe9RKSv8SDqeT3AtvYCSkLHQ5XVq2QbaXbWAErrLBJrB4eGFQpmdibHCQHE22mCjZ4",
  "key17": "Yzrf8JdFoTJKKvDNq86Z3VRs4Hjf4jPNpCLMssqYzMgcmT2QdviTiHfyPVBxZo8mHqzjPN1FoAUyMM6kb5eVPBN",
  "key18": "4yDMMjwKNsXGGVd8CGApSuSmyKHPaV2zcGEUbJk9tgWZVVFQtMB7c5m5fzyKLqRQjjQZPMe5vvKwxZXq7azh74CQ",
  "key19": "26gU2SsCq3wvsRDunaeBhnSe4c83CDcomPjU2zAf3XoqHrGmqg7aG5nnLyrJArby5S7qXrY7qq41stXZzjTJPutU",
  "key20": "iZSnn7EWRKYNrycWnHjH4p52aaMB5tLGxEz9Bw9pfFErSLxVcMqvUy2GqtZuzsLW486Lt3fubiK5Dp8pLzx5eHc",
  "key21": "yiy2iz4TVsECtE1q6tD7GEASAZZbUemVLLMJQhtQt3NQe99nNB1LoouPFtZex8sLseRtrgAF7w6HVSgBXd7WfvP",
  "key22": "2vmfqyb2YPoNdkZ33ukSbD99Djp6XWNdFNtNcMfFzKZPmy4tMbja87xuzeBsHLaXar4tnM3qpMVVP9rNp1KHSvyH",
  "key23": "4B9x9qVzShupHHr7Rt3CdMGsLc1S9KqHbvHX3t567zX5bLHJYacTVrrQ4uG3qi6b5kmy2czvm7t3XnKshX4hhH6Y",
  "key24": "2cqErXtu11o7hRHWVDgL8nJBDuCdfW4fovUh7f5VTPsxGDBijdPueaytvmEpDdxxKhX1P5XvnHxRfRGXSU9sj5U6",
  "key25": "21pTJSKC1JYjaVuiQB6Dg3Jdd1YLCnxS5kT8PsrD2SvQb873UcHJLUTUeke1Tjbq11fcdRAKmwZBJqfDoEGAGj45",
  "key26": "2maUtmtG94W3UnV9aaaU7rh8BaHpWa2WCXxNPpXr3SuehGRZQDudR68fbY8rGZqAuj5eNaVJ2b6RTnBWnaJTUiNi",
  "key27": "5wsCxNuP1kbTdfNCxTb3bnJRnWSUUqdKN2dqzQNyxgKRAKNBkQAPpqQXGQ1phujV7pXcnBENwqTbAfTh4G4TWD71",
  "key28": "5Dj6ATNGxnyLra5XZecX6E98J63ibWzf9kV3NrWnX3mtqzRLR3rexPAYTk6LQEk1zPVSBvB8YxRfEYN3wYAGbg4e",
  "key29": "51uQwA6DGs4UNxXa26BQiLQvGq8f1zkr68r7C6wPkbyms41pCAaWGQEY2SkwGuRRNqksxZnDZxSSqfeFwhkpZjor",
  "key30": "3yejhMoFx2Hu1B9pHU57k9fZHdNyZxJyEs96cS7u2cgbj8bPpinAJSxZJn6be2Dn9MbtntXaSKUUZHdU89yrbTFj",
  "key31": "4sE8SiA8z6hbLYFii86iobBxat31RzARFGyRyNgfhpXPPomvNkRbyhTPLmN7CN43ZWhH8ACnggRd4NwcaqWccco1",
  "key32": "3DdLa8hdUsEGdHQ2BgKVmXiyG5TJL4jhrvh3LAAf6QMnztN7FbcRkywXW6FAJcjcsktCRDJBvKhGqpnSnSrG166v",
  "key33": "5cbjSve82JFvnnQg44ve6nERVeW81HwKxVEWuwhcdGaJp6NCngYFSXbTFKEhgzS1egDEdWqAFSGjaEXT6fvQmr6g",
  "key34": "5iTHvBpWSR2o3682EnnoREou6ydGXpUcB3AcjHabhigssCBeSTmE9k8iVKWYCwEFgSUCr2tw7VEpAtCuQDNj39P4",
  "key35": "28MfFXpwFzPMhLt9pNLePYEa7Ro7W2rLtQTBpBuucQkK9act6jdhYnXkiVMBKcd8PYi6ab18nFT2Tejti7EYW4GM",
  "key36": "2PLeBzFbSZCJta1DdurDRBZDfkidLHWP1b8gfmiPqPqkhMu4m8Kx32eAgFMx7BZwePP1UTYUBWS78NSjpyF1yHuX",
  "key37": "5bsK8mgWPXnSXhByxXMYxED9buAdcN4YQPd43gPe4mJsy3st3MGTH5CvbUQe49mHzUjuiCuF5kiEi3GkTvX9MPFF",
  "key38": "5yvBiFDAv371tGzAHZw7DUu7x8jyLKZxi1GkyE1PbdJmMxEtXj4eY8KYb6AgkX3HyPJ2VedLUvEdVkaDTV4zU81Z",
  "key39": "3BGaYgUVYbHS2TB5DmENKFz8y2aDoD8iKQNma6NPvhcWuzkwuGAh1piDt2vq66WPKPCK7zKPyyw41yWrXXEqJSt8",
  "key40": "3pdQMq8TNJMcBMXcGSdBZCk8BByqsPLqLpg5ZWD4FayYBmsjWMtKohJSGTwEQFvobaxTHpd6jHDNKxsHQAd4JbWE"
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
