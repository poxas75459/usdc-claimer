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
    "3sMGre9DxDv65gKo4TnYzjsJQqERnf1pY6tHUBuUn5cG3GRuK49Mno2qVCFNRCXqPh2JgwJUVJ9YxMwbzffCF5vX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zwAVuDhFB2tXcfyBf92TJ3FDDJBdwmsmwm61h5nVmYSc6agX2u5YnowxXQRdpwx6b29DBtWX2yCWYgcLDDVML3D",
  "key1": "5usjCo9YdL2khdioZ7PJ2kjYj4hbaTVDx2rAGdsGcRWz77HTYPYfYbnUpaZh7r9acLmyKpw3rSWAfBMEPjRdSTyy",
  "key2": "3N8Yg6EGBBB68hLTPoxED7c5FcMEoyQwihHr8hm3w3b6cre3XeJZZWJq5noCgZE6zdadMgfJX598nv7KFKSGpyp",
  "key3": "cfJ52w4GSBsVRZZedHF3Se5a86Uzo1EiP8wnEg2NHERm4nk25FukNgKwhgN74ZpSyYJv6BR33fZLzaVxa5qFchT",
  "key4": "zJz9ZLRtM45aifNQDnM21hNfsyg52EjJxF4hsY1bD23B1BQtd64QVWyxRWk9kDtHRfF5QWTFR2f1HjRYPC9bzGR",
  "key5": "3E11nSMqmWbjCQU9mb2j6zaS7AC1DkUg9YuSRvybheE6xZ8k5ankXYQ89m52LtgXzq4pz1TX7EnP9TXdUtmC9XWs",
  "key6": "4uQ26reJnYwmq9Hdo4ceHpyzXARmmeLevXiQZrQLb6ntaHsJaQjvRPm4huS3E9eGWimmmA5pAPTNggydBHpWszt3",
  "key7": "4XZUZHi4hx1rRWowfHxybCQPVxWoezjVT1y1YgcxxWBTMsCFvfz9u5P9nBjX6R9taGcsrFs6Q1VQdga86bkjaxnk",
  "key8": "5VEda4yE9Pzg5yjL1iE7Cg3Q6vzVNn7hNa5htEPqkHV1hsdgFHNPnDqwstgW78T2jZm8coEsZV4brDaM6gRbCC1V",
  "key9": "5PBfrPumMANGGsrZY2aooE6RuQsTP5DjeUA22LKdxDnyEE1FRxyGDHDFTiuXNuA31yKwQYwes6rE8uSmBHRcTJdZ",
  "key10": "4dQ7ZJBg2TWqQo7jCxj3SJgdN2PU3Wo3MTXWumqCwcpiPD98mGuYo3F4wK8iQD4b9JgBc2NV9owyJpj1CSxqgfbf",
  "key11": "5fGFegyHRnF85yYZqfXYsRj1SPFnbExYBK2RodD6NjSWu8M6Eoeaqx6BYhF6CaJEpkQq2yAfopkZ8TVRC1JDcHRw",
  "key12": "3EcATSvZMLsNt6Cpb7dDNN6sN8LZvbYaXW6fK7aLivAewJVFmArA9dFmwokzti9kXShUDsDXoiK2JgMe235MNt74",
  "key13": "3Nbr8rpvBPHQSji31jquHhnUhpgkzqGapDtoZdS3MPDQvhmfnvqjE8te2MANNA8darNmj7JszsZNP9sndMNCCXis",
  "key14": "23EeSsG64WdSX6jZKSvkT3SDsiSUR4WiExpUikRhYbmuReE7tC1HMc23NUhSwNKTwwKGLmAmzXpeQ3T4pSyqrk4S",
  "key15": "4Bf3qLusHsG6rKse7mJNFZr3GTxQbqkMWigpv2QZ2Ak42s4trc9iavd2t8LBqkpQY5xUdCtzzpLMwWgYTR2wimjQ",
  "key16": "DvDCDs2eAzgc3eTxosdwR9gHrcA6y1vb1KaobDzMBdRh9q3a9hzoMRyxmaJbX8RFG3HBFD2jLormEzfqHD5pTWW",
  "key17": "4BVFaDyFi9WfNXiVXCxW5oC7UqZtE7Fkb6i6gU2PdENpoT2tVYt8bSAzym3X2AKMoGP91WxguUQ9cS1GPc5yscqC",
  "key18": "ajCzoKssB4tNs5oXg9L2pXh5sfwaGzvNnd7upsRwyYGmBfZwio9TG7pgVmQGVY39ZgDftMjjfJ47V3uCKVCde73",
  "key19": "26ZR76MJzpoTomkW6tyWH8ZK6L3BZHd7rZN5oJSPHQLcu1AGgVdYC9A2nn9AebhMJ4VNMrnJ3PwH7KhUSeK2cDre",
  "key20": "3HDya7TiLRYmxp1CPe378RbNYsJpGMzYVY84UU9Zu9aFn3X4H9XusmzEhHFT45iyYeC8og7WbQcoPNjJG29SvypV",
  "key21": "zQYEvpSs6998cNtt93eDRbTy6wComfQxa7UbQeCyCyzXjkccMMpfKGBEWy2hQ394rVhWXQ3hXKcHG19Qpof4MF9",
  "key22": "oitZKTQr4G7ypGho7oieqBNLz6S3Q22rTcMLMdigK8X71BVBDLoZW3Y66sitNeT1UU3HLpiS3625PZaASmeiBBr",
  "key23": "58hcXPog2zRsZJ2JMNXqP7wPVgAzNaK32Wub837pmJU9bpdEc7YNrxgyRhCWHESgxb8W6ydXtf1FtZwuao6HVVQL",
  "key24": "5LxgVDjgtQMhFWugHw2bBP4c7m7Cyc1Dg9pLMc7uPw4wpj6P9tfYPYjRJJjToNPWx8VoDyHCdLpoQ7cFpyvD2mHB",
  "key25": "28seW2MCmwuF9woCuaF8kVphMvd331y13RRKiFdYj4YjnsZNKz4eMPNfYXWxMrfFj4S5fSibZh5ZV8kVamuJvi6m",
  "key26": "C2m6ivSgDq74V2ZHtrUHsqS8aVPkGdMpB4ycR22kar9DgmgnM3spnvY2KQ12FrbaUourrbRRtu7jRayFbQteogw",
  "key27": "2UEG51tgGitqraEFttXYaFCrXUWPmuDsWf9KvwdAfs5DV2XEpomRjkvoUcPMq3BXsYT7LX46ULFK37a4GtsPGudf",
  "key28": "uGbAZpkdgMmmdzxHEHJ2s4iqHvfY5ntqsP9abrJJAtb6a93S2jv9NVUftu5YTnNKCqzi5J8GEHZrEVi2tkA9fdK",
  "key29": "5LW9WQRm8yCpZUe1AKVS2DRo3KnWqan1D7iY93CMqCRLXcnQXGitSEPForeCYJgXnB4hUPCfsmP29wdjvv2Q5g8B",
  "key30": "41RzJyFCqLpEbi9G4QBuetPjjHNVtiACyLs1QkAmHHB36g8FvNui8KWqHDnekcE2YiMPX5anQKwf3CbEWtipfqcs",
  "key31": "n8VQQCSKiPx1R67ppDmyAFjfUeZNJr7SrXWtkNtovaMVthsHTuWMw8WN79VNxvHTp2uEYXTPTF8YQLrLzxExvN8",
  "key32": "DGi5gCbaMDiC9NgnGr26UabRKehmjyf2E93yzC3VFETgxkG7dzcDbzZ3QRqg5w2Qh4SCjoRDqNQe3KKCjY7qLg2",
  "key33": "2oz3Nzb8V3PjFYa39zdH6oB2JoUCvxR6B1DQ4V5GVymtme6FA9VpU8nvzaSHN8fvYZHV1cNmr4qHt7qUAFBESqjR",
  "key34": "4sQKd377at8tQc4eoKbpeCEPXo3qFDBL9NVrjQKHfr98Wh5rgaJxytgV8a5L1oKkWLKaoPcfeg3BFSkMhWvrF24M",
  "key35": "29VzSFA31jFzUmBYxAWGBN2Vrm4AmgdgJFECCADVfJaQQoxKiPCyYSTezsQWa8QW1MPzYnTHxaRBAAmgyZMHvEsM",
  "key36": "tbb42rxDsXoyMWwZpk953JoKLFSzR9zrHWduzhoHKkBMncZ9ijMruSPjm2nk6CitPveAu1YAhAwi6w6VTZ1SVKQ",
  "key37": "5X2RwDap6KDQs4PPXgS5J1ACnnrqLEmgogacQGb4cjAhjW7U271pkFMzmEKkN4vmBnWhdAcLwo38ngi9UrTDakdH",
  "key38": "2SbgmodRxNGv8SAurQC74oDAXNm7ZwtMAtvuSPjWfz6XG3rw3Ay6ibPKnbQ9jUpqTwLmFDnCYxKokDTdRZj9FXum",
  "key39": "4suHt4k2nCkz5VmVtNGL57nqppzWAoWALnfu1q1NdBAMX98wfXsG2RaB8znNzQ74znYEeChjifbpUixu1ZiCHNJv",
  "key40": "5iaQEJTnLdp7pHYvrX94FVR6x6wiyD1jpk47rMrEpsC2LsQwBV49cX9NunadfG8zNLvtboMJ4A8eyGRsB719ur3T",
  "key41": "246VqeqjZt3TDZmvjHXcx5EbobPg3qd7RBtPQSUm65DgQww3rMn2dzYJVKuXmQxddyDNikmQEuiUo8YfKUx7z5xk",
  "key42": "5NnzgrRBnZE6vMtPQ42Dijkr5jtYrmJPnihpJJzBgprHWtvPnsWeX4gunXkdwMdPrPxs1bj6nF7dtaxKyFMjSvCv",
  "key43": "tceCfW8voyHUxoibDyYGXK6nTcuKNXEVzTnYA1TdqrxiTS4KVvGDZi6JxoyoBhMLgN9sscPo7BZ7oeoHdJ2jpk1"
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
