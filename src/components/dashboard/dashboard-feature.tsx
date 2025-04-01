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
    "2ZtoRnSrL5uda9ZYVatZhAYvfY1gE1gsjS1ZTAkNMsLzBgEh4nmHhwfXBx6ojzgXCMVHfMgR4NcqcEDVEmYgWHDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vmPj9cEC3n67fvnb7FRqriSszja7dSEFKvdg2S741YTfiUvmoQdifaW4GFNMqGzX4WeDR7zSXmLjTYRUBvC7kFm",
  "key1": "4MGbyLya8Du5uN2zAJbJWHS4bGzjz6GACtABduTmLncvGkrVkWL5JCPEoyuf5HfKQuZpJjwqxwPNvDFjbsk8m1NP",
  "key2": "r9QSv5s6XqfTGYuc5RKdWgMCwBCfKNYukxwZBtgEGVioTZt2nN3nyJk8Ewn5xzYMkrv45cQKzC2nArn4KJEUH6W",
  "key3": "4DmKGM78WgYDD8RvCNw93ypiK2Xk4DJjamK1HaU1TkvwQ5KbLGamMG66VSJibDD4kLSkRTEsff1uD1vwnx1U1V4f",
  "key4": "3ScETHDWgRwGLKkhbEqxhzTdaviCSZjT7vRpGxgpypphVtkRuDXZ6UKm1YPuiiTbHA59hHTMKDzdA8eU42tkE7xH",
  "key5": "3jpfUk9qfEyW8ms1YmVb4DN2PNz4T8EnUEj8dZn2WQawAwAe4q85xKJpqSogKsTV4ZWYw5dUov5AkLc8bzpuhKEV",
  "key6": "3TtUapRuykv7FwVth4o4ZT5ByQsYdccnUSNpngBY8qBMjQUozegpwdqVTUFP2LukjrHvpsn3stjXtd8Ch7UshhZa",
  "key7": "24qVxx5tnMUh5gcse2zTp2dW4cfvC6CPtDVXUWuwMWneDFTkmYPfaPPVqPeYcJpsiSvJQnvvFnMabJkcffzdhiae",
  "key8": "2GBK7LX5PTqXmVpHYqzfgeb4ZtqtXBQFz3J7K7r4HZxL3WLh49n8n22RkfqxbxVDDvjiBmBabRg3k2jxHWWAv1US",
  "key9": "5mr9Fo3ybJbrwbDpbv2xPHpFbrwtT898PFdUYrhdZMfkEQw1KgspNTfVSKsAKH5ui94mKGfqndewSUhubXcAgTMi",
  "key10": "4L86SRq44qzz4GM6UNmXDgoqSb7NLGgGxYXYtgj1PZB8oKBnUHy82SZQVbVic4vgBo2G92MoojvUajarqoZUuQkb",
  "key11": "2bg3SdAYHGTyFKE2nG8CgSZRoRSJqGg3YmQ9MbU62y6pvmmGDvDZXnH4ScS4gVnsBhDc6Qavtf2EMexD7ZaVSuqG",
  "key12": "3s4tFEyCZMWWfnE1WRTPa6NtXVj5W9A5yG7sMNXKG7LkNkTnVuuPWcEwjV5QbKKtZXBF6uL3YJzTedFNoM7w1URW",
  "key13": "3SR4CqMGvXGSZbXtbFEaLNVjibbbrhvJsiwznjhB7JDiX6hQ34qpghCgVAcv15uoLHMT3GFTtRVqfLqjGkGEfjKf",
  "key14": "2F3TnPvcvFANeaM335b3FkAMqL9iGbVbvpKS4W968EboYBxUvtqvu9czduV1ihtfXJeShXhg1cxCm75NX21UN3Cp",
  "key15": "5cqzoYzdwcRSfCX4JcyE9bAm8HzkvQJsQPRqmYJLRiT5qujWhuuHL9UUp4ew5xpXnrjZUqBCg1AdK1nxmuebvp3",
  "key16": "2qMu7KezCF5dB4qTY54ZiWD8X9iTvPr76izXzhJDSp6Bpf2WyAaUz4KenNiPiShAf1aAPRq8WxfyncajcqrmzoY3",
  "key17": "4nZBTChbNG7PPTbehTyYQMq7zfot8vYDp6hfEMq5sWWv99BK27AUuXGAZxkG1Ap4o1r5Tv3KHSFpVVFVoo2Ky8HV",
  "key18": "4pzuTaCTncf1N4KuLnSWtP6qiWHgy1wZigq7H2me96a7a9hdyXvEtvUzPc5YudB7ZD9Phgg35ZG9o14WnwFbXezy",
  "key19": "4zGX9g2weu8XZYynFbzg8x7aMu7H9W8Y2w2q9aWW4BM21kwBEodxEn2tMAof3o9SLGhy4epctTmPcDG1gbaEaeJw",
  "key20": "F1KJmgo9MgtQSgMh7XHzcm9zbmo9yQgHmpnou9ZPPkYxydaxcs7SzYM9guK5F89EMov18vQg3wzsbLqko6J4WJw",
  "key21": "48LUjF4Ys4r1Zhkzy6qiPX1yspr1Pe8LRLshuGWxGbEduaRsMbg1WioPKsdxEF9BgiaiHCiQr9LhkdjoPf5aWxvn",
  "key22": "4mmAM9oZKBdHPzy1ffcMTyzzhMrhrG4sUGBv2QXuA4Mzrkv3KtD4HfRqqP8ofioG3EiT1Ca2ifbYNM9sCRyVoBb1",
  "key23": "4SDzgKoJYrzQf1CfYCyx1yjaz2VBNYLzeCJzTgimTxchm8RW889GHRPPibjdDoa6tZUky6JA2XofaqBKUczcsNp",
  "key24": "5N27NbxWBSND24wWTC16F6kSAcxxRohFeuUY2DKQJBBJzoj5uCvQugrrm3YZ1q9vMDxhnBsTRsRDdbgcjtfTJ3yy",
  "key25": "46tX7TsXzp23zLn8KnFkQFRbcX5tra5RTVnjAFfvTzkskfPbpncCgpN2nwjA2bq6un8pgxXXGuSqQNeEvRxssYST",
  "key26": "v8XioF6CM8mm7d8c9KiLaUE52XNti38414sGUJS7Da3vyXqNrdWnGuKmVTdRc2dXsq8dQNPSuUUJK2VhepySB4v"
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
