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
    "62KLvhAm1y2k4unAcw4sDKW3PrBsxFfoqSrVPMsNYDEn5f2KM2F9hpfouree9DxEw6mE1cAoq97T54FsTcNc3Mn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nHmrx7xxS79eJi5peHSX2yLu6WBpxQi4R2y438vSE4LbXZfdd1Z4KXTk3jJWpzj7FhmqDgReV67FSmMg3pXU1Lp",
  "key1": "5y1N4fXFE8y8Nhc66F2R2RgKKEy3ops8e29NUfXgsueS1xTbRzWjxoVQ1p2kP6KPEhQVHJscUEA3crUF2YT67owA",
  "key2": "2H6y6HcUbEpU9h3jyP394htyhmtYHAECshTHRvG2VvDrpzqTq7gtHSGGKT8KKBqRQPojBqgh37W3uM8x3THw8zxh",
  "key3": "3WrgP1GefwBcNGT8VpGneqer7c9Vk1bNg9xSsrmP9wqUo4TRKZfpiMm9SRnHsQuWTu5CAb8BvvyyKyidxFKLo5eA",
  "key4": "2KuTTFGjsAZ6GCew5WZJjqe2PwMNWdC6eshSA5FqvZUBMGZj8KmUpT8sXeSCa6sghUp7DFEnDHPPdCC8dewSvFdP",
  "key5": "3HUJpsxdrFxdcGjLGmL2KRNWe1NKm1YGBvq7wrqoS5RgNmA8e2f91jf1VeE3WU7shTtraHdguxcEynNN6UibnpVx",
  "key6": "45MHh8yBBKqDyBHW6vP3NEb4WnyXUBZxL58HsUrTXXbwnKUhAuCKky9JeDtjYAde4L4SZ4Zk7dA6y3ZK7GdLhXNi",
  "key7": "5gTqKUBuwVhwvMz47mbqABRs83nrR2X1uQbrXfWp3ZmEg4siS9BLrupMQ7kgumdJkiUyTdcSddhLG2VTC2Jt5w28",
  "key8": "4pyaXgcFoeSBQuXgqjpt8KfhizLfDXLGFkqUyabVrFxhzyKNm6wnpSMk474NFexFy1fUcLLw9X26m68gKnsKMzjc",
  "key9": "2DFETq1oam39H1QVZ9vhM4J4zn1VE68TniLKG9B99VgpDFPSj9gurs41ewyGHr9doTTryLys2fqkWWy8JKqmxMaj",
  "key10": "2XgLyDhh4aWv3Jw16k55FpMZPrRAT3iHiufGVbvTCjQ3BS7vJvqzty2xKUS23F9zPtHmc6kikJFD7XzgQcMZvTUp",
  "key11": "4uDtehKGvv6kEtReiZ78Ee2oWsDD4VpAi6uEGmNgA7naoYXeMNdBSivY6kJx1VL2UsH2gpiCkzTVckc2hsUasXLN",
  "key12": "4gKcbhMcuaRywMnnE4HF1RMSi2D2DoGgz9hv4fKjx3U1zcZUn5dJGEsdo4fBtn2YkA4MJNsg45ND7ptWF5SSeLAH",
  "key13": "xdDF1NYvBHzXB7kh2XFbq1bcHACKXtP8Hyc5iey2EhhpXQvvh16VcYQBRnGMevmUJWD7RM8LES22uS1xy8M2vVe",
  "key14": "4gMmao7x38efPTzajsG7DsE9XtfHTCCKRKyxY1vUJMN6BC4QYcCF2grDRpWkqwdABkSaAC3FpPEyRsoxw7J6to1G",
  "key15": "3cBMbNT1AfWmMyq7PGhtrEJTLPPNNZXRYPtyPj766Jd9s7AD3NNZJwPBrEQmXqCV8tTw49fj8DQoQ7WNGagsZJhi",
  "key16": "53eQKC6kwJhDsgVCbCPzxAVRfLQUJQzT5k98mtE2Y8uA5PvgteuzcvcoEt6zRV7EtY3Y2G7YH4d8FLw6Q9nYHi8m",
  "key17": "4r6EwTtu8HHVxqc7RnW5xmscK5R2hQE4f2v7LFd15ouVzgGq1KE1gVu2UFMbrGvDc3mGLZE52zBPvK5QCFXrZMSM",
  "key18": "2WAmsrVKd1uK7kA6Vi1JZg1abBiwTnbjb56rY2jcFkKxHnP8Nbt8h5j7CiH5SYoPCMdxNk6MJwq4eKaDF8SW6Y5V",
  "key19": "28DEA4YhvKZjHWaBVqSxit2MZLnmMcvd8yyqaRCoc3a9A2mP9BU5m7VFa4m56YJzgrcMn7Hx6SVqevLGoYCRABgc",
  "key20": "37irUY81tazsjTTd98RA2EU7S7YZQEGFWUons49RVAMxst5At8xjk6vmZKMCQPqHN2NxeDYTLb5cPzvnaxkufSYZ",
  "key21": "2Nyg27qLqSzKqG7zTTh3UCc8AGbrt5RXbE37iU16ZLd6LBLmVkpimzvKWComzzPkTp94dssi4euxXzYcN9QfbGiL",
  "key22": "4tdFk5PvzbVu2prXQvhQy1iHT9S7BCdMfRKkpcjyRA44ieTcAcn48sQKDg8UswCJUSfubpfRcXY4oUA1Q9Wm2GMG",
  "key23": "2AS3u4C7HCyrSi1fpA6RRFYK4vCbcWKPqunmoF9yyDta2aBfRNMqpu3TwzxZes7pqoC7wY6HQkLrfRK9B7UsPio4",
  "key24": "5QP9AfKc2cZFrbvBsn9DimiJmwNqHF94AKgr1VyeEhoFnpRX7roRgdEoGbTRwYGHjtpyNE2kyk6yE6ZQPMxyFe9N",
  "key25": "32Ed7tqoQtrkRB27rcbpbtCowUx4qKHjQVrfV4hciNz8YBogVsfpzeYfa4ZK7NV1Fqbd9bc2GERxyL5vXx2queLt",
  "key26": "BJEGQALRcd8FkK4N4LRU1iAMEyhuEBpTCKfhYTYq33gnB5uJ1rN5A162xFQ94rniejkZfLvTM2vY4NDETuBAhXo",
  "key27": "3tWXbSv7CE5Mib96DNUxLoTqAXmPeQZBoP14WGxe4LfB2mQKaDX3HNUKzvNoKrsBFk1KRQhafNvLfKQACsVobB77",
  "key28": "2gB1qvLWrS2zS3pthcZWyYYQ3EnneBoWe5raku81n3u5NBUCVTcypbv19Ey6SrC5JneMJeUnn72vxJskrj9axSKE",
  "key29": "REDjNuNpv8K3zzXm2kjxjo4U5Z5M7DcGZAW4vgURuSZFuxquBSezCuirUfNtUYhygyc5qsh5zupBtzqeBpZf9fi",
  "key30": "3JDCaWWB2wZiSSVbqYeoZcDNNKz6yQpEZk8nnnb1yTxcBdKdeHQTGcYX71t8m6BWwTrPjGNVtmoFpSt1fCjG6H7",
  "key31": "4NDx8T2EhoERkyWNJDTEtAy4EekUPkMKVX6fqsvkmzrGBfej3aCfibVjtEUhSA5wApxNKbTsgZxgmVWkmyFosDGT",
  "key32": "idARWmg6PZoe2skpNchyMr9g1PUpEK7A4hvm8Yyp8sFnvcfyTnq3Bc4wJ8U5nKXLPMrEtfnYfSJaHf7XjdtMsve",
  "key33": "31U55zSsKRr39rHTyPA5AVsKvWs69Af6TULHDmS2DcAPLMGccJT8jHhTUoWmvWcs1FrAJJAm3NYm9Poo7NwRAru6",
  "key34": "4zRAGPGhM2zMQpnNqA4op5jxJPoAMuT51N6gxiyBvjmDkYTJgZ8fmFQ4GMBe1XgY411LqZ6M63GQet8Vso4Hr54G",
  "key35": "4viFxAJDjT1BbQsvSYtmtdpGCoBBdWrsWAi3qdDYz7xEn89BhdsQFujZS7Py9zQkrLqyZGLWvwhQh4ej5SF678i3",
  "key36": "2LcXkd8giGXj2SMHQSXPtFUR6Z5vgXnqqcVNnHCm2NNUG1WhzHuuezpB9euEBntwzbiENgfXty3PXq94KJN1KX1x",
  "key37": "2ruq5sq6izqm2kXxPYWnsaon7oV1gH9AGfvrQw6coZxrg9iSdzNi3ZFytiNMrr3yVNot3GM5WVR4JgDrTiwPb35L",
  "key38": "4QJECW7yek5VGQzUB4jGJT6ET4R2Rxyv3wANWUcpSWiVAojrxyUqjHKyYt5hZgUUrGfNWaT3rMXiLHR2ERQVwseM",
  "key39": "6433Cj7S3PrSvrxf5rC1Tx3GkUKjQ9J7heQYoWQbcxWByhvwxB5e52n6vJ5bThVbapn8yZJdqA5hb4Rim7kZNfMw",
  "key40": "2vV42p2GFAWn99AqSSM3aYF9z4cPeh53sRvMcRX5B4KsnheAaWuzqm2qvzogT6ZD6pcWp7iN4B8zFwH6PG7wfeyg",
  "key41": "2Y3QUK67VoFVmg4MFwbER2ZXmPXsTZp6ENyYpFevLLroYDv1LeBFKBRE7wvHumGwsCAKQpMYeEE3vDDUZ5mJ4VvR",
  "key42": "omxmGXwTCj37nYHHUAtFDutELPAssUuzCeZWWy5PDQ54z6Abfeg2aGJgH4gi5icmcGTkojHCH25G9TToEBd5zDz",
  "key43": "m8TCYKGetHCwyuCrHogXmjCkvX7jTHVGZNX9synMsjUJpM6feEqb1JYSiDVZVbFF3Lp4xSHD7nTtnESuu9qeFbL",
  "key44": "27m9MGUavftPMxfnh1Xux9w6bnTV1cyUYcii1oTo6GkrBYzSX3PFWZL8orMFHFTxDCEERsFP1J23QycmkW2jUYDe",
  "key45": "5L4RFpkGoVFcboJPynpomf42dagGSnVFEL2yAF8eK3H6FhPozYhE7Y8LmJXsLxPM9JdoYXQcTCXoqViJVjE95YaS",
  "key46": "37iryNPcorSGyjcZ7u5hjRUAUtc2jDSaZgpGtNnCUSPmaCKgB4qDhgXpTHTbPt86Whs7gbbVxTWZ5U7QuKjgagCW",
  "key47": "3wssNkvpN3ftmZH71pNXrpvMJyqtrxHv6pmYnjUpSPiQG5GHFYWC2QCT4FDR8EiLiiaZrzLgW3naNWowUnydQDrL"
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
