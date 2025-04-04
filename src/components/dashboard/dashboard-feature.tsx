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
    "21ApodYEGqFoxnfXcYPhxB5wEJ3sHuHjhas6eHe3kyML2E55kn1qTCSVZ8eUQJWA9GKRBcpEzEoGPxp5qJ1ucJJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GD8VE7ZDrR1mbKNF5KAArWDPKxQV6JUyXoFpX6chrE1rP9iS2RajMqhBRxaw1ZnXzsrpREDwNG78rwCkxdYei8Y",
  "key1": "2Uy7wSCaeSvVY1xoGkMGqVB72CkY9dg4h7wvmPEw1VKRuJAHFDGrhqv1eA4F3pcx2H1nrWASZLB4u21cuUQ3fR5n",
  "key2": "1wqwoPE3ffLVzeeuAViKfhdtYS1sXit7bLwYmqtrKKMExaJtdBPsEc2KM5ymLrdMSn8Z8V9wZMEvaT46HibC5e1",
  "key3": "3dBxfWivKefpmTqW2TtqLfNQXBmQ3kJuJ6anyRc6YqDEgM6QhAkyAyojU5wN8oh7UsaQS7wf1iCVGCBUWrGaFhuX",
  "key4": "QtRpqRQKYrUbqn4EHKiN4nDdnZyjv3y94L9GczvUeMrPVPfR95eBg8MMsTzZCCFWhfYQhPjt849NDnGpbv2sVKa",
  "key5": "5JpLnnb7M99cigZs8EuH6b4LAQqL7E9o15JexugCPE32yfXTeDQanwKWRHHfn6UfwxLnRzMLAKSg57dE1rpGt9bf",
  "key6": "52DcAtRXBnuaQciEQSfXgUt9XfAnDGV6ztAEBFE5hCgHc3zKPhst2hwCd6ufdcn7Ck3MmsxA4Y2tdLRTBfYTfaRc",
  "key7": "4LBL76No3Sd9RS67iHFA4HfoTYoNr5AwiMxUcvLxiczN7Cawv3m54MeSpxaB13JXWRMwRAwZphheNmrGdoKnhJjM",
  "key8": "5XTfL2EQyEH5oX4Vv5C1dZooDWXGaz2mYYjCVr41g8bHHTi3JL6dc54gnewwCG8wyxACi7vKWZ3UD64tTN5NYmFq",
  "key9": "27si4REnBmFDeSM9zrL9ZKc8bFdPP9WcZoUWybXB9mSyFMtfGoHr6XCGJaSMph2vJirRWpYdQck85pSyz87KhNtd",
  "key10": "5TvpbBE17kXcjJNRGd1AyG7rv4L9vhcghU9QsADW2rP9q9611u4vooZ8WmP8k8XfAQhvzt5WYc8Bwbb6ktRtnNts",
  "key11": "44hrME5VwxMdnwToxE1U5AYjZMHSdsRnA6HEghWJd7s512RH7yDq6uj6aPQJRnnF547GSQmuznyXB6xVgQDoyuWW",
  "key12": "4EVk8fNnt6HvHpEozwBJ69q1AapG2M4ie3tB2VgMbxDBNETStdtBwXjDBJDg4nYp85an3cLWRLvXZL4oT5JYYVbV",
  "key13": "2zFUsycKzsB1z17rRScmPU3V1FDSf1MPutUgP2x53z9VVCLe8LmuWoj4MQ8q7c2Hveo45nU2HnodKJGu7Ni67hxd",
  "key14": "4YjGgvDFnuRd6fQcfS7qXAc5XKv27CzeZDvhaZTgYWPPdBzSKE9TAXteBwaDnMcc5KKFp6zA4i6bqF1Th5gcnawy",
  "key15": "4jr6s4r282FD9jHPQicn23NrfEw8s8s5Q9i7a57AoL2CcNYwqwN16R77oYB2cpgcRwcCCTdwJUJfU2387ka1xdWo",
  "key16": "QTQT6fxyd6rZgqV6gtMUtavcoANCKKMKSHbxnRHesYXecz3VNPkJ9i9RiWzfR2HMdSJ2nM25ykKAeaN7J8WY9cH",
  "key17": "5rHnydaZhoQunK5jVp7omvSGGhnfM3LHdwkTjynyE5EfRNfWkLKhZF3GtYKYmsNMSb9jceqfNtpHrbUJRpraeEYC",
  "key18": "4ZuebR11cRLGqKse7AU5TvF9stAca3KyppJj8mHyYZ3hhHK6Mb9rjpm6dWDWciiQG1QqZ1qWGeNr5eoa9VfP3f3Y",
  "key19": "4KtWVJM77k9PUePhRxbZPXiJMyEg6DN6JanrZuxs72CaFHiDgWvRqo4NU35uxf1bjdiXbTXYZphUc6EbPuKox7r4",
  "key20": "yCk2hoVauKppu3Yzr64LyME5JYy8C59K28VfRrBdVb32YVubmzT3GjhAaPrAi7oXvtzmHvNKMiBZwYXL91YqUtU",
  "key21": "3gTowEAjknjizvBM2FgMyqXEUTebv2Wgq1dmfq2XuyXnSjzVWRwcza2ZdGsNtwVGfpzExjbanGDs7AS38m5hgZvp",
  "key22": "344EtZn23d6QMTRsGbCVJSCPmUE9x92jeCPdcDAMiCZERF78dmjr8qf3cE3RFRgVqkJBPceVUaJ7xVh7yQoxk1mU",
  "key23": "2HQinGZuo1fUNn9EKcWdrvSocJzATg3LCGUYLP3T8pZUudkYP5x52fcZ4KNVrNRxBeZtkEwXWHkdPh2tdVSxWFPb",
  "key24": "4xRdgT4dHujyySJDF63fXg84pxjNS2hCc4MGuMF4KNd1F99P6hFRaQAyk2iEJgS5sYuQNTudeeeaPhoQYCTxpy16",
  "key25": "4Vswsw4JiqDadBz5FxDLvdK6CAgckdRuzR1zFyiCxg9etm3citWNDeggJdkrBnbNV4vn3ZxvQ1hUpDQudGHEbnCW",
  "key26": "3iRU5RjMg7ihQTZB9SkTkVQHpKUfCn3n619xLS7sUKCVdF4abXp1HvnLN51cjx6j2HgWHmdGRzZ5GNQqEUUY3zSV",
  "key27": "sKsaktwYFdG63uHtAN3svLAzF8v9qVgKhmyfgQTh18t8hN8Qfuo8VckUv1MpYjBEYEXCNohRotRLfpnrfEfmUAR",
  "key28": "3y4Kf5gNLgSRxVrtoRJMN7SWvkcQAekJSWZmR26Z3A8HSfV7DpfoQAMVcNKvt1G7TgTw22994P4wSvnKny4Et8BQ",
  "key29": "3pTR2PKDDzhnGjS6HNGHJeZaMcWT3dw6tNvbktsq3a2peJfVrZ9NRHjQFeEWYne9LZ92dhBMfd9fvFhc5cpEB6MY",
  "key30": "3d82s62EMDuGZ3B3WfNdvxvPVas5deKks7NNoMwXbrP2cixXdiQbCkfrz8BYAPCiGXQ5EmpbPQsggKLBBtxQQoF4",
  "key31": "3XUSnZDWnMJm9roiEUqR6AZodPNYcX4uqt1pvEoi5F7ebPEdtTp8nB55JUAq9vVAtjNYvf55uD9Xu7q7XJDkBMKA",
  "key32": "MhXUT3eFCvs7KeBkyKVP57m92VKC9aQakXJKCckfJx42tRyNK4711iYYhowm2E3vffZAjzRHU4GdFqEWtX6nhom",
  "key33": "4vrRRx1dXYoBZqaSeyBbaiMMLXfoJJNdvzMt52vFAiPjSg4zeSzAvXZ9jXmT6j1ioEMV8VbWKPNCNbiXd2dk7f6u",
  "key34": "5BhcGZMQyT2DrqtF8asa8HXHsY2uB1A9mWhQmD1G42FXEK6a72yC76ry8qqR72L2ojbfXGMozmW2UrURh9jzzj9a",
  "key35": "278w7cvTdnsw3Acoa8i9EZvDzY1T2nMgti3hsuL3bLdgRSS54FJ4F7svyQStjQj6Gxw6PCRDVQHgbqG1W459RQy2",
  "key36": "qNRJqt9D2nZzVLjwUVGP7X8gL2jsZTGUduLjAvprye3tx2w8cZC7Z9wZUPahzzEH3tiQCmMJt6U2pZ6Vsi7xMcU",
  "key37": "4YYqDUpGpNLt3pd1535bxWS8mQA7yjxDHM6rVGpSdDH32hTkv8Z1pJqgBfBu39WMxsEDXtX8XkCbLsAGfkY1sXC1",
  "key38": "2pV3mArebTW5MG6QcePajLsZc372Cj6MGjW2Gj1uxLweEUk74h5uPWuECwa39Eh5SJUKE1L6aoSGsnvphFbXBzb9",
  "key39": "2pMPXXTP2Jb1xkCvQA9E3LdHoisyqDPAc78aB2yeeprfxw69tHnFR2NnT4x9utTN7phiohf53G3RHDjzYyCuFQzF",
  "key40": "4nYK5VRrQVbYDboyGL359TokcjTtQkxSNp5Hw5b4EA3tjD9V8k4XLbdBEQtHc198hgAHaLVnBnQufbS11A1qmrxq",
  "key41": "nDZa9cNyZAENEQZyyz6nZhkt1tz1TTicK127cuq3sprjo5uP2BNqKXEDgZuzBubbY9mT3zMDefyA8PaPkLweE4G",
  "key42": "4VWR4ZsT42Upv5H2ppcyzRT7drfhbhrfAvHCT5pPj3pLSfwstFbCZg91XfkgJmNAsNykEXrxdduxMwz4E2RcmBMK"
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
