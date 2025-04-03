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
    "3Kn3x2o9gViQpipYtUF9WWeAhcRio33EYjSyAVGTqcqfDtyMDq9qRhwMToSaZqq61kkK9BMWytA9z3kHrDxwNRvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7FmobtspHFCqGJRNBi57psmKuR3KVwcUjz6658rYTXhbngSYxjPFELzmq94qQfywzpjF5wqfMLwjh7o5tx1kxXc",
  "key1": "2Y37smE2g8ffwVK7EKujquqjVLRxwNeb6rm2ohbxXD1H9uS3CE4GntfehMp99XeqVoxisVcYhvUUSkfFc9URft6F",
  "key2": "3RWeKZCMszSxwmSVCh4wYt4oRZVuYSnwcNfMKqfWCKmRGdFKMZdcy3qdffBpr76npNQnFXgfWiFJTj4M5YmGnUVb",
  "key3": "4zqEszjrPoZdvDMkKofgFJgWeoSKEmqys3u3MBcpf1qtikSjf65WHve2f71Sxpz6P5nrjKBn2fXQB2ywoTGTgWEd",
  "key4": "7eos4sGZ1knD6X7y3pUSWPrq1TJttWX1xoJ38oLg8ezMQYpGHJUtZixqXCrUirzp1TM3aYuADjEuj6HidkbZq8z",
  "key5": "4P6T78d6MUNHrKy3dN4kvMCCP5NuzvwiME7Br3oWxormdJGGassqCS7sj7LYibFPieM3Dykn76Kgc52ZsEvpDCxC",
  "key6": "4aWhqbUEUV5qpmbRaHra7yWwGyCbdonhtpQDV6MTREP5jVBAC96TWGfUZtPXaFFPgmzV89cSLYSfXBGEG4xBaxKz",
  "key7": "4hZcsQeo9SYxfyKXeC4pVUhHPs4235Pt6zpoZVW1nRRQSWZXL2sPyQX4jSoosdMpSjiDoM97bq4SqEKnz7ZpWxXJ",
  "key8": "5BiVQPP7ibho51cRviYhHUKB6yiQZ1F5LCi1BMWffTonQaHZhfh6ScHk598ioNSVZLzHqHr3YYk8B4EyXBmTPPb2",
  "key9": "4AqC3WF42UyVURcDGZH2a8hRKyxjwQdWNVifYYcnMFKEFzbSjzFAgJHjKe9HE3jo6BnoAJ4f9oNuoa5DET7VKfw5",
  "key10": "3wjrixEwz8RKoyop2suzkzccwwUToCwjp3Bfr2zaboBDt96eYo66DB7H2hWpEEUcLUn5vZ5xZSmHVKw5axon8fwT",
  "key11": "5EzqWCbDKhxnGp48xWDUdUrj3gQej3nr8T3awt1yXbNG6vbdCpcnkHhfSbc8D1NyGgeMRQquQnsmyhTiRF1qBDUw",
  "key12": "49CBpCn5KqNy6PVActrPrJodavvJWPtN7w5ntgyBWcUHJnnR8Etwc7h732agmGKmE1GrkHFyhb5WQ7LVgmudvEcx",
  "key13": "3YzSqGAZTsdGDHFftcz9MpUfpPHgFRJS5YXx92Xw6b5cMJDzazk78SgaQ3yAbp5M1k2tf8ESUh8BZqrH1DcG3Vxf",
  "key14": "5mgXm1B9WE1ExugsWaG9Qp53ktNECcAqcQSmfVJCvVvhRvXDjkEJGKjZ4co8EBKikdYaCnpfBBysSs5rRSSYPBZq",
  "key15": "4i28CBGbNrWewPoHHmWg3BDceuD19TB4LysUWWTcE9RvihMcdmaXeJyTJS26AmMHRxmgi8vzKKe7dq1RxJ8Rz6Sd",
  "key16": "5ZUEG97k8jd9Hv7tBryU1smG8osFF6gqeVRM7GRP3hnhLZRENSWKZbsJqJe84AYNj4gDLGAaFsk3JdYcTK2spQJZ",
  "key17": "2FFFFZL2Q4t4ncyZdo8xGowsJiQjVQHsqXwgER4cJkG3chKnZ5mx9ZadipfNX6UqhN7hUzXx2f494NcrA4rD8vWW",
  "key18": "xxEdaYdxudEg2p6hDuJ3Tjzsj6A7ZY1Gqm5VMAXabh2arfgyCd4z3pBLT8WPMVKGRui7vRTeuv6TDpkaSbzjzqY",
  "key19": "aeoTf5sumi7vefuUZGvoYoFMxgmsh3YjR4JpqDZPhGrqAsr8hjZg3mcDMummcXBwNzKhw9RDMmiRoN3WvTtSb7q",
  "key20": "3cHihWbxZbpBFtwM8AcpvN7ecLo44ukt74CFkcopuM8otHatjGwAN5bcxhGqge7sYCvjwYXQZMDS7FmeQMgqXD7x",
  "key21": "PmEKtU8WaTYKJRZG9JcYhk6ppp7q1SWeVs4Zz6cGAfDLLyfJefjXb2Lm4dYEuSMxR8k4ivvEVwic3eeFGuPtn7C",
  "key22": "3WqzukPbMSn2dFdxgtkWtsFCtwcHAkFVr9xSSQ9yajaUqKPx81tWP3dTcJt6XmnPc8DPwZo4RZkp1N4iatK9hrWp",
  "key23": "3x5NNTHqNS8K38i35X9vtVAxnVwGzDRtrAK61YGJ7ESzWWztEvDnSbm5hhcEV4ZEwwJ4RNbNUQ9ursuM7vcLoV6D",
  "key24": "2fcbEfhr5EdTRJfS428vB9RMoistqM79mjVesnqxeW8eo3dmiKcgEzLMX8aUuV4LcJg9ZvdYydt5SZU6FxD4TsiC",
  "key25": "2oj92wPAdwLKuYf8eS4DwGjrgeDfQ3a8dpWTsbqfnu12dPkshDQhVkcaS5nEdqGkQNn4itNoHE3n45HvpvAZci99",
  "key26": "2N592yAP5VfFbFB7KrG86jMKjVeXFKT13aUchByRun37TsaMpzPF7s3QRyZhyEs6ibQvCKdR3eTiSPzXVFKfWAP4",
  "key27": "4Bvi7jZE4H6qtJ1vUCVXrwdorDKQUkTnNmPJ9Qik1zw3PnL5ChUVWHwZdiJbNZcfp757Zko2VLQTkZGCUNDG2s66",
  "key28": "5HgjThhE2GJtp2Uck9mrgwDQcpSeYpiUAYR6L4VEdrUDmQTu9FWdTdC7QLQzCShEjMkobzxqMoaoapPU7h6X1D5K",
  "key29": "2HrveaVz2gtfH9D8PTGozxRrGRbn2dgwiJEQiQ2S8bwhiYGMeXp2ntK4ycqAkNVTe66cLLzJpihqAhhBP7WDJ6ZX",
  "key30": "2vQrg8W4joDG83A6jVVPahHPi8atyhkrMTqs8SHA1gsrS9cVqirEQFLZNFaqyW77Gs6au2fJBMTEtpHbWpRYRqeb",
  "key31": "5h5rbSa8apgrxr7p8dgRaAudBYQ5hNngByoQzwZ6VPkedwHtffbUUJmLJmvE3EmRQTYxr9n7FJRX9ATNuv4iif9P",
  "key32": "yVuhQnxVsA1KvqsxGqm99gyFmwGYCm96GS4cCx485uz9jth9rZLkL5dPWP6XDPQP3PbJrrJB4cKwxeCJAgZc5FH",
  "key33": "5XrqDhY2KSNMuwQEPUCarx6tpppeRQeVaTvqNPhNe4cbGv6JCNMc59yJDEho3Dp9G7bdn8FhmdBshs97zxJvknnp",
  "key34": "3v4Wi88pD8oGy54uM6awTGSAFiZt61PVP8cRZMvrw9by3rBuUk4Cn39Bywzt8SNWtcAuyPgZHnNVBX2KFXhBbXt2",
  "key35": "2HCLMczzUu6yoALTvMHdGnpq3Qk2utmQKBFmyjahV6Y7WBieERQYBzuDfWf3yNAJzRhzKiiRTMyqjxZ9bbxJpcAt",
  "key36": "ThrSazJPUkfeBXTiBcaJSSscccdGoQK5aVK6kVAgdaEPVepKkk92dooCxSpNBxj1KgywdUQMZoDp4XgAV5Y74zv",
  "key37": "3QK4i2r8tkuNJM3oL1ieBJkrjJfmMJ5qTtas9DgZ2mRCAvZpEd7LXd9Fa8tftdyMhB1LQMahL4821DezRaQcuURq",
  "key38": "59D8oYqJWVabdmtPJjoBrPmt9tF4uEaaCamwjezJ43FZPj6zWFa4HGJYqwNmvSh7Qtm1eURjHq8D2VLqTwBrMHRU",
  "key39": "52kccqGUjnj1GPgPfAQKC9amY5PYKXRDMyb8wZqfumAkgLfJUmSxLQrk6yCtyVAxgDfdbTNsdNkUeR8hz6BQcsgv",
  "key40": "FxHKVkrpm6QY2mb1kpkcdyVApcqiPAdqbXqPkPBWbuqtBbSYyosQKoeZEK9N8uzxjMmzWz6reNw3i6EB4kGzp9L",
  "key41": "EMsJvh6Te4ySHN6VxV2undQ1NAXiFDdDGkaEZ7Lg9XLFhRAX6PW1xbwNkJJrmjnhksb1BKUpeh2nLnVJ7XpSXgq"
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
