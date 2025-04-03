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
    "2oSi9UrCC4nUM7zKxsj7nqiHhV5KMgCMSEuxiZucSV5XHNz2XjbKzMnjLgrc591N6g7c4HPsFQJkVCzPRHJfu1wC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wqdxd2UPz7XGBCVPmKKYCqVWHNXWM7DhsQeoUU8g2ru9eYAFoEkcNGvK8Eecz3LAPejVoFcEtiYWXJjkEtNiCYX",
  "key1": "4Q7VwMzDqd9ic5Q27TRby9S3jeMwhX9FmadDwpNZmzK6PJmGNMQqdjtwfC79BhhvoZPFPnesXU1FZ7xVHFx9ubjs",
  "key2": "Sh7TkiLqkpfHRVzn1HuetDjMD67T6P3fQmJR3dRBMdVws2L3ttG2qnVDvuFEJCGTNhAQnGHisYBf2GTk9woTmMg",
  "key3": "nJqbcBb33UKfZZAVnsikrM6CZKRPFAGrqjCKwrs9rDs7UTL3HUq4JQGsgZewMngGuk2yfbVEyTZVMwnsm2Pxytp",
  "key4": "4BRQdovQiN7sxjr15h9ZhEfT199aSmroKevkVrQSACYYfv2G17qiH45fuLMCmbRQCmMZTZgegQuTmM6bLC3oVFAv",
  "key5": "4vUkCkQaQ1ZHEvTC7QnmMrSZfQ23oz3E4AERpas1BW3k7RyGm5XX3dutsiVq2eZQiYJn8ANKq2xxkevdkEZuRMkg",
  "key6": "26pQqAPfDyeYi5o2nCF5YLn8aRrcZ1Uif3oTExjKZaoVXtnATniJUzzzmReQ8kEECBU1tubQP6R1kQsghBQ56CoP",
  "key7": "44F4wNaD3ZwjVcJHmZF5oxzGBk3JBRDtMtABmdhFAbsqp59Jsf7bNJVebqQ5CMfaLBYdroLad8wUuzUL3KGkyjhV",
  "key8": "51wXam6PisGLcvY6jJx8pBBktsP5f1JcHu3kN8Fh66JCSu53jEEbU3USMBmAaSqWVjJBepD1k5m6QFzk6qcLwRK9",
  "key9": "2qQo5v4fGsdoNKmBtsLA4RSY3ShnNL5KpULpu5f6PU6bGBKQ2dQLRScpdyqgSQH1u9WowMZ5VJKVMkH5nuyKY9v1",
  "key10": "3VdGjmMNJFzB8uxcNKNFNsfoMrsis2gvtH2RdvmTq3HiDs9AHSq13GqRqHCQC952XKy8Vw8DGZV6jKFiknH6t84b",
  "key11": "fuYcHp25QiJcxFHm4avZV9VKhXn1DFj5Fv1aSZGFcwUJmRWLLgugJ1CKbL5jRMJoCq1uGMZ1ZBbrDZRJSMZhbXn",
  "key12": "3xXBPSkqF6d5UaqCqAUmP5WQa3p39rV94X74vLYKieCZcDvKmoVj5QU8BDw5JPWdkPMsenwWzU2cQCrWCsM9drdC",
  "key13": "3X1TsC9whyg22nQeyj2pE2vGWgFw8MsQKQzBS1d9Rh4puSqdA5PjoYAPhjVUHt6AJqZvSDobr7RpxDVLCH6pu54J",
  "key14": "3PmQCQ7SGM32LPvGXraarqoEV6ejmh6h4iP5RN1DfyZhw9NFoynguvJ5c7ZazQQLH1rRFQaCoHR4RoQbQBLZkKG6",
  "key15": "4HkbAyKXzHFjvzVYrGJpkniz2de4ixpCkcLc2EmqXokuUfRs3W4xUq3Q7whfQGXsgkrnadEy7ZUhxHrv5JoXCwhs",
  "key16": "3h1rJoyr4j7Bt6aLKwbFQ3zBVAnfCy7ZLhrGr7GLZt4xXkVP6mnnjvN6wgSz5HxTw6RZzMfrGp5cp7o6JfvBSXwD",
  "key17": "5UdTZpWihvpg8x8fJdR85EyFk31VPCoYPheensWk9ePiivz1WcE5pf5N4hM4St9erWvo6A8JY5oF3wtcpTpDGt8E",
  "key18": "M9NHmourDMf237dp2K42vC7XmbrVKh6Rrmokrz16Sof2Wfbete7XeBdooYzY4xHuRFqh7EfjmRvY762kntmxuvC",
  "key19": "4MvK2oVWjLusQcczs2a1zXCjRxeH5nnpmSKnqErGfP1mea7qvu3FZcipgZokQqa4SGARzxx1VJjTiXRLXUoSqTgE",
  "key20": "r8tFUHQJi29aUuBKLCoY1DuKL1nJXC4RbALwRQU5qecquQr1GVmfTV77Cr3taTmSoFFvCXw91s6esxrNjqMZ4Tx",
  "key21": "48S3UKFPvSUcW6VAw6rCANs9ko519YDSB9aqqA3DWmYv9NVmLoqbfk2SaKckWoLDwmQF38kN5xvuuBBBLW8GbDwA",
  "key22": "4VFugNGMoZ1rC6GwC4peDcjf6NVLKTJa2A6sGwYdAomxgAbHKBPaeV6sXe83LyF5ytbEJUYesW2k7g997ie2zA5c",
  "key23": "2Mzj9KWLzcCmBx8W43mg4RnE8vKXFswf31opTQio3qpESrL1USxBMXCsgCRLKZsCcWzbhuE6kNr5nTLJvtQnfTe1",
  "key24": "3PK9oAzGkEqkQoiF9Zazgy5nieMnVYMpiLyocK4zX27weEadP79NV5PiJ43Kk49mTLtEkg8utaofZVYH4hLdPPV4",
  "key25": "5kfKjXTDnPGTVtsb8dEiRu6bqyK85rdi5WEpY2zgcUkn5UsKqRomU2Ys3rGpkaB9s5SwbCLNjjr9chwtci1QgMHH",
  "key26": "4NycTTnKRGQXPUAM4KHoSeRhxAcLaH8DjavPsLRZQbg5b1RGsswddaAkgeD8nNnxSytNBBeiS5BnBVFAENMP2AAD",
  "key27": "LpEhQ44o3JajZuAZXnfWEBEgnzTodL7UD4ah4kXrRQiZHDnbTMc8pK4Qc3keBZsAEVQ9pZfCLghV5cCGLMFs6iE",
  "key28": "3UYrVpX7VEdmK3ta277XQHp5Bf8eJpv24Q7HHLFTSjtqSm5HpwLT4hSKkJU2zpf6DBadoFuyLwyu3sScoiK1Nta3",
  "key29": "2kPEpmCwTCET7gZhzRAnvEtyL4B2gANa5eH9RGBwdonrMqYeszXaikv7vwrKA76mzCSxSMjKSeUTSmuqerkrUodu",
  "key30": "2y9hEN4wwCyUG1AVGapAEodG94N8zQDvTWAoevcTNhCCEX9X8FVBUn9XvmXBrVr444ddQjxpD4waSprDZ4jTNNrN",
  "key31": "3PaoPAtYe9PoSmxH3KRu34W5h2x4RurPFSKvNDzP3zRfDgMEKA9f9NmFNBH54VBPQCFYSVZour6DDH7QVW9FyXAo",
  "key32": "65TdhHCmXkXZWqinCbtfg9hYiSApMPgLYhvodZYhnPmyY4M7bVAKHaCHjvLWBjoNmtXe38btquRrQKambY7Lfp9r",
  "key33": "2dfosZchE1XoyZfHrEmX2zZCzgdEFgczGg2K6uZ1972UPc8mWbw8MyaPhozn58Y83kW5teFRmd9PDiJ99wBWndCx",
  "key34": "5K7QU8bjXN7s85pX4zc3jCitaqvtdRes9ChEDBWk6gDz2LgAm5iwG4TfKbWwS5b1WC2Rfva485vv9Nirqh2KEh3A",
  "key35": "5HRuHximdd7vjNyzcopWDo4FDrnNrjp1yLJ9v7vDA2y1iDnzLsaoY6ZigP8UTeX7iXduDaxGEPvxwLf21fokZDx3",
  "key36": "56eGKHUApoeHUKxSq2EaL1xMkX1jcnEUzQDP85kraiTPD3zVF6mZBBAjLU3cJHueNuKRjAxb2X6GJXuiEpWpR16D",
  "key37": "3xd2aDfYJ9nTSVNqkgTQ82CvUGZJ9p4mK9UMd5Rcng5vobUhfC9sMdXVNWE4E4LNbZ5tHzKeVwDNJTfPZciDSP8s",
  "key38": "445ZZc4d4k3oNJrnFrFozuGhgQjqdkSi6shaje8CTSvDUwkRPceoqMxMbjcHgGLhSyXNY8FcKypjsUMU4WrgcJ4i",
  "key39": "Kjt4fu2jEARUYQKPFr5DemwL2yxHDNYLhBzRfGwzzSzfEPg21G87b6sW4SsN8m6ufCAGYHq4tiwnGyv3oUNiABH",
  "key40": "4kH13gxGNecpm1TwNJQozxZoSY9pcbuqpWrEP4eQ5DTcNarEAqs7eACJmVGxgG5Q4r25qonYNeVukapyd8UwoaoZ",
  "key41": "67Lw3Tg1xuxLFbXNUWQdSWjhKBdLTYacmJNiGzBjP8ZX7pZVavFHWCL4UoQ6rXuJjrkjttyqtECF7cGAKvZJ2EUB",
  "key42": "5xsvRLd8QArfMex54b29qJuGvrAj1Hpami6Gv4NMs9rx7GDrnoiwEinvVVafxCa2PTHuBVH9EKAV3XsGrWdjHaTk",
  "key43": "4Qzev27hydovXqchhYQzGgVYW4oSRdVurdsQJgVfQWQzyp2ackr9ec8W5895wj73Cux86BnRqe2EfTSWi22zouCN",
  "key44": "3idYv84o7qg32ac5Hx2UR7wB3CNfCKCBfHSXouoUPjpU8WRmwQB3Cq4RYUaDDWycRY6vvdub1AEVg8UnA4Gm63vR",
  "key45": "2zdLZupR6JTn42T3PxAyM6pAkcPPqrAme7onvtvqAVqMbzvaqaSudjyf5Bm1JPFPfv62sA1ts4oZJectPBxeMxYW",
  "key46": "svzeKfxZcd5YQ9BBXFcXkb7KvJCTdsA3jQoPHtKdtRgP5Ss6zCVRLVP8iSJBUksRR1PkX4zJRejHLuanKWdgTPL"
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
