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
    "3oykF8UksXsyz4bgMPrWMtG21vvfLT41BDRNBRkxDA9mSMG5s6S2iKyuxhmsNG8w991ErJg1u6Q9zK326izWRrtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BmNTK2FS24t6qAYKYFiW7SiATTjGM8xQNsGnhbaeKRXeEXPwrmqkxQJxX1MkCWxPdtftDJztCAe5Mjgu4esWfAR",
  "key1": "4FrjnZ1u5Yxwhi99aRd5VMu1gdJFpeBKLL51KjR3kytBiPHsPGqDXfji8e99jMFYHiJ8RXL1oZxUv15V3nHSf2vj",
  "key2": "4UJ5zFHBpXHi9sJtdbAmuUhaBuF5itJPsiAyFwT1HTkmxGgd9Sr4Kw7pqkuwqdGtQcNZChT4Y9WQXTT7GEjenZRQ",
  "key3": "5hbgkyxF1FZfFCH1ox1uhr4AAdyYuYbT2GKUvgRYT5idUqnpfBeNfhULxn4XYWjkBEBrHNMPCLAnTc5ubZoBYjpN",
  "key4": "3U2JK6Uq2ZXRncDdMJMwnNXvymtQ2vDu4WyQ2mEuP2aaJ6y43A6EoSRnDAQbaScGvxMF9cRwTqrysRY99P5Kqvvq",
  "key5": "4RNqAGcDFmCM2LE4iawsAPM3tNUcv3m9nHBzb23dykZpi8trvLk6CXETKwTt9zyuzCoggtFjsqCCAji2D8xW4mMP",
  "key6": "4ghPvpM4zBcpq4o6GoWaEpWGyT5NbzkFWbVjiuz6P9L1pgBd7uhrknbxVcMQWkZcZyDa2CSewMv19Y71LLBSJfVK",
  "key7": "4yLnHi1qaoYiYwTfsTXsV6H4AEaTsVrfswS97k2WJ33QJvNpPcKGgSvMic6NgQVx7GERXUiwMQjByX3r7VYNM9CX",
  "key8": "F3snmqBbfkYjezDWVREojDwSeSh6LLrvUrfj18eyKSrwtco25Qv9g4bpbWfudCVhc9cn9GCUEyQh4bJqXs5qfaM",
  "key9": "39CybmQnUBe6ScjV2wwTjBXeiSFJB4yhZEJLqpycuduchutLRt8ud1pFWVJsivzeSK3DeNSXtG6gBeBpVtBRuHrA",
  "key10": "55pDvg1JHpvGhz7WmdQtkjaG5ep2qZTgfoXDwH3XYzKEuUvNqTDPbLPBFmxz2UvfeA2VpmUyaPReAm6M8RzF3MDQ",
  "key11": "4qu9hGiHEhcPAWKw9rNJqyrL29tYUQJba5ooUfKkYHAsYyEdrAqef7F5bdaXuttRvE25bgJXxx3CCZoqFkugHxmj",
  "key12": "255H6iPbYamTjF8GrnKx83zNsTrvZo81xHGTeJd9RvgPCorjBzAp2osEUsQomeqTb889eqMjvm4gKLaFFdwHXP9m",
  "key13": "5iF2YTQbyQyHP45zedRCuSSq5hLQFTuVV9KJVjA4M1heHvmC5Lh4pnWdmwGohi2BYQxRnE2NaiUaysCMq4A2fdek",
  "key14": "4nV8HinKHPu3usAe6RsGWLh3FMihZZSszUtHdHMgyZNgZ3yymJwruTfdmXNZEHgxZ4gPW1XDyrXutKXER5RP7p4E",
  "key15": "5U2912pT4vCKiYQvEM7b1ZEstzV1FqsY1FMbKSj8PsJDWx78xayKrWZgJwNPRAjsmcWWZiVxVeyDh6VoiVmQCUFV",
  "key16": "4BdKBFDvQPHMgARcAcfSE4HYy7oEVrgydK3LwQBGnnffz95VHwiTjMqDeXRbyyM7kqHkKECX5izrA2SGrzQp21PD",
  "key17": "4cLwZhP9fDEbsBJFrmPgMBV5HXRwt5aZUqnSmFGZeodKDuedBGMVeiNfbMoeaNZ3qyu7rqmcbgJUknahsa8foYEs",
  "key18": "4SMMzcszHF5E4xqyPX4WrDM6B5aheL7j69Lcn74CfjjvSZqDvAXBaws17D3cxb7jnkyQHgErzHYHKvC6nuwtND1H",
  "key19": "n57j5CUTvTndGBrgp2VogNh6GRdd6GmbRtYfsYRhNNh3tVE6QUWQKUAtNgSZtP8h1JqeV3FuNumPiERxwQan9dm",
  "key20": "32oFgTPs41gRamXx7T7YNixfM1Y6cd6Ee93WRCeD5yZZZ31wpuT6tmBxtwnv1x9zMj5kbB7nnd7ZNtmb2r7oaUvg",
  "key21": "QqQk3iWoQqmw9vTMnkaayCGbaVaPsx4fS3iq6RUQ8SkQNUEt3jNyeTbpeBsrzvQubnrQFvqEUaJXWv1uRmc6N38",
  "key22": "4Qb3y9hnzr1jFfbE4JcdNgKX3DMSQkwwasPxoeJHwHkwW2fthtsz1kocwe4PqJz9H3thkoTDoAp3vGCr5WkppdZF",
  "key23": "47VA5vSYAsNm5eJx3U5kqz9s3GsWgYM4f6yE5yc25DqmdTGTkC4buuPQYADoTcpq5gNGZh2Apdwn6rkyzVo1EeBp",
  "key24": "4hKMBcHMvKKn2gvtU8AvaJddXSpPQbDuK84vzpzw5BFdaKxH1jRXFNam7q6Mbrr4gxogy7LraVUeoWsLzd5MvMck",
  "key25": "8Dw6vmbH8utK1azpEbTwJFNX24cQt9sTtC7DM5sfu5YR8gSoQ6Seu9fz2E4EvKJB1hZ4kWLyVZZbEDdEqMMVs6J",
  "key26": "55tkQHXNQHD2GarJo6qe86rZ9hyNtVU6TaHrfjQj8Ex4QmgAPohDq2CW4itVrgEpNgGqBEjHDmVkeuaP3Wp4gR6Z",
  "key27": "3et7VGmkJbkYnDb8X7mPRxpFvpDZZkdLXfSoxuAXvkod7R2W3B5FPZXFRuMfiQET6a1kXjDNYR6p1JiGdkdJtDF1",
  "key28": "5cZWD6BwnPnQXe4XyCHTVPcCrdVFtgH4qG7F88BXRHTwS7NNcFe11MuhBvZ5Y2sUfmvSX5n4XsGYB3RJ3cZRupB2",
  "key29": "5Mz4C5YaZ2MxzA25ZfyBgiMrzz7jNH2qWkUY2AWqk7YF2fLHdHsiMxJPenZgf3Bau7wU9QXSJm3xmcmdE6eKnCek",
  "key30": "5J3nrSQChKBwdnGAoBhysWUfVRddzZ1Wg11Zmi8V2qh3JCCatHe155rMEWmJNABLC9Sw9fNWebeB11EkXVMEu2oB",
  "key31": "4BpbGjrBXtTk5ZFG8YaPCiSmW13gX5B48zhWtrAjBJC8D2frkCy2p7ZHH53BGk5Szh7SsJKd9jnHeXDTHDoo6Hb5",
  "key32": "4aLN8irp1rdSUC1q5BjbsFDKjFqN3kSJgRW5d67YAeEhkEjvQ8VWdWje4tDdNrjxPcbgZSVQByk4vwqF72T4iLLs",
  "key33": "4Y8wzEa9Y1R9drETef9JWbetUeJyx4CscJDi1nAZquEJiP2rwFtozRETzgkGL6XFakzuKyCHcXdhgaMk4ABTyUjV",
  "key34": "5gJxKxGoKsop25ExGEWXGQwB8acncx5Lx8GQQQxAstazsjsfPWprYPGunFhNPD8bvFW3PXZfuKTAUAu8xMBDy8Lx",
  "key35": "2w96KRa7E97mPN3LCChZHXa4EmwhzTvGntoAwoRsxfArz4SqL5dQHDsGTUYGDGrfYMMiLgJ2btE4j7upb6344YHZ",
  "key36": "2TdV6LjYbHapP7LxDGd5yVzZ3KozHU9qecwzfGLxE4yJafBywFmqMXCdKKLG3BDEJZQCqGWhW87C4YN62q9ebHNY",
  "key37": "2i9ESrrbusVsEK9jNETJqcYnh2Qy2TEUQe8q2EqfyYTFJrxn9PqfqpCJftwwTpGZ6bAArHvVHARpR5nKsQBvmwVZ",
  "key38": "2X6k31nQeru8CFw3yQHpT42hheZ6BS79h3vfe7fcT7gHuwFg2AV7oyERKPBsCwtSehMq5GqHToa9vm6nS3r8r2Jr",
  "key39": "2bD6DffkiLV7Znd27DPJ1XBMbJGbSmqc8iuxbhtBbZxJ2fEaUShhV8rfgsg4zcY7V7KUYDpQX15Y2qFQKjpTYT7v",
  "key40": "2obBarRYByjeavJUcJjy6MHAjDZr5sQ5RibHCHK8gFaVRoj3RqkYhuo67A83kR1cNREgvdyrLqBWs8n1L6uuEWJe"
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
