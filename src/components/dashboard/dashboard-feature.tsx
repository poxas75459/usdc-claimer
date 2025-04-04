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
    "5FDgUo7stpm5xacfeVkEbxUUL9KqVkxpBJiKwZdLRsPKQbfEqWkWPYr71NMxjKCV3p5bFY9dsqrLvrVBSASCrrmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gpMmLHfCjGy6RXWxAwVWC8PVgJDzitLGmGCBirE5bNJoNa6f1QgUPRLBSNH88GZW8JXfz6nAMrE5egFBmmhZstb",
  "key1": "33dhq6M848QvGSbQCUZBgKABPLKVHbEsy7T9UmZPTVd4kjJdq4KiUCMomunGnBpxcy5CTHjRcDjkUZrDxCBcVwPg",
  "key2": "3XaeXoF297PdYxQqpRS9mRaWaUzGYSWYEfmDa5hFcF8ah3iMB2rFRMqC3zSGY3TXKnYqENZ41E2KqtzqVZoo6H7X",
  "key3": "2Zq5eo4Q6w37bMNHxA8ndA9TGQYexjx91mc7k91bCw1CPiYS48ptTAC9rahq1jXGrSmCQ63SwSFRYTTiRC5MwFpj",
  "key4": "3brYgQYD46P5C1E8bo7oJAqLwgGuvqsHHmV47yEWNVCVSSyEJpJrwpy5cnQhH8TeUFq2RUPMFwGbE8wEsFeVNLj8",
  "key5": "ZvRAMeAWLDjMrKygGJZBXPsbUPS4B3w2XZ3EaW86hPAd7E342re5eARbMX9dfiDCjsHFuNrK9xcWAU1dKVrj917",
  "key6": "Z6vNqjBCu7uMSMpkccGry9JpxgGAdLxQCf5hw4Ts6PVQ4bbKEYsQEep1et3AmvsR5vdMsA3wpQiP6Uz73yCbASd",
  "key7": "F6CewTaqgbrxfAKdyW91FayQTX7tKyXzTvqPdAVYdCMANAkuHiHJ8o2iLwWz8UhGPgS1TBJEY6tFRPSZqRczhQt",
  "key8": "34rDdTSjJW4LyHTjA2SeP8euaYgenpmbQZ7x8bcrPbo1QAMCR86uZFzc9dpijis19Wdtp2G9dXkevyKGhPKWYPn3",
  "key9": "4CDeK1EcJNmDLZD1trpEZtGAAtcn439Ja32skaqWSVduhUuz4Pn2fYbGTUN86MR7VuMdXhPRyCWpxWGF6CbKYf39",
  "key10": "2xVQArzMeWnjfyFYUiDQrdJwGuv8J54Kcbz9zwmWCEQeAGS9Z5TnJ8xEp9Ug6Auzs8KRc1ciJKYemRgCgEdJmb6o",
  "key11": "3uJcNGnrNJK16wJA2JdRZrfzv1vBUZPAPwyAVgMkWoDARzpJfPZzXsM6Ti88EPivtS5shmwxor63duPDk65P3Fk",
  "key12": "3s8WqTp6fUsBhr7VftcSHDGUczn2cCMLqozPNnHNeepu1SoPb4Hm9XkT6CbxfKEMk85QRgdvkZFX2TcJ73qXnS5G",
  "key13": "51NRzvJdGP3ZeeV4guBmAuPw4ddwNFAQA3GDfWk7r4ULZe4EcgeS5aPfVX6zmwQ13Ztyix9YsB4jWFFsj95AC4iQ",
  "key14": "5CUACtfezaBB9q5fpqvRsv4HujBPoYxJ2gCQw1A4dwpFTB7rSVMn1VCoBYBQzPNb2bhxFXNhmivxznywCqvuc3df",
  "key15": "4DvA7BMxVkrP5Z4raHdQuw8YF1XgeiUMESd6X41SoahCGdzZiwypVFdVAvzgPi58pvc7kU4dyv7niDAMnoimcXvD",
  "key16": "4AqW9aoqzJsBKAcreqGTMFZhvSvpe1rjEe252NtAwXeWHuPUPEuHdBDzApiPHdpy93vpNUHBXqxyMaPzzo7fbEoP",
  "key17": "4XpLAFjKisdbGUKhWxVakspAvM8k4NpjTmQSntmks7d63W6WDsKFaasvVVncUKwDeNyr7pRbsMBsVJigBJwESFWy",
  "key18": "JfAZ2vsgTvk27Ykt2cgH4N2kmVz5jFnofTMteMEFR1xQwzsdMYNvfuKbjDum8xgYz7DyQtPuuaFsyse65TeWMsp",
  "key19": "4CvDhFZygpkAMiRXPbAn1CM1qqaTmc3dPEaBDhq2FNYusB74RiTgXZJtdSumyTZ2Rqni1FQptfJe6QgpNGAzAADE",
  "key20": "4fC2gA7T1BDhB7YYdTEh1MryoWww5wZRPgF6nZY1H54uBdo4NRhBpP1r1sgscir8Cj8VNrhSXCciuts2h7CXPPEB",
  "key21": "5yJrQpAkJFYBBQNXe6WJ7gx2MKEzVH7oHPvp1SE8B3bnWTJCdbkvU8vMC12BtwPQQrJKo7EfG71f6FyAEEgEWJnA",
  "key22": "4yT2tWPsjvbZoteJDNJ5Bgs2nU5cD6dmd1oyLgXGTZvKbo2vaqSSSdGTpNjinFPDofBvbTdpnM6jaL6TbhPnBYjx",
  "key23": "2pBXqSUbkjVPy5E6t5bSDJh9CDreFcTZrdtXRbWYZZer2xEZGfb69AB21UTr1XVWZta4p6CvYU3kZobgm6DxyHCN",
  "key24": "2veKg3mKYkcybCCJCGgTKx4fQWng9uUs9s1pA8Gp6ZjVhiHxqAN5q77WXzRxbk9m3zThWmHVNqrNQcJzmFstchGh",
  "key25": "2qdkg59TudruoSEZoT38r8cC5vePKmorWf5DpeTc9FCUFj7KCBNch9S7Y88v1eHB7vKwrAiqesJ6JKozenDDWAjB",
  "key26": "4pWBVwUa5KqJ7efNDCx9EX9tYEq64SDMTs7yTN1mHLf5BxsAQrbEUZyhuPEhSkhn1gZemA4hWBKu2ev1DeGVxbEx",
  "key27": "5EEB3vmLYhUUvC2ZukKt2pURCKxtm6bJHseTiA3H5QabtLtoFHuKfLeAGDpDi9btAjPx27MK1RvXcdoKCNVrFakV",
  "key28": "5kxQBnUoU1wKGAQR7sEjxvmKf161isnnTAAy3SxGQKTVJS46kFnYMibTZfhD1i7JhpVs5xK37VD9MdJ2MuESdeos",
  "key29": "2MdaxteiZSV6VkqNdEMDSRochSu13PrqMHQ3vJ4rDyB44pkXxBUajsUH4qvZPoBV3cmKXLEzHVrGA7dq58XYSoFu",
  "key30": "58jvvx7uTchig3EMsnth3MQPM1zuAtjh1V6aYvceUX1NyQs9f3geP8v3h33tGmeNM1WUPiLLrKUiW2WwEoEVUYvv",
  "key31": "3rSXoMssuYH2fCcGrpirdVaWbLpGHVfLMUGEz4zQ1VuWjCBGW7am3dJvirixFNnXQcPNsd3VdJiHxAzDcbS9XFNm",
  "key32": "27G6wKQH1F1ekG6bXE2WfssZvomchyZK93vCn9FWjHKAdYMJ8ew35RuE3weH3N4D98QWA2tyCUv98JqKdbNG5UES",
  "key33": "2JSKtEPkkugw35JbS4s9resQfyP8nxDDYEoup3e31ZY9CjDqKrYdC2TVc19RafDSBzvEKdQa9igDCKmUAfhyygFx"
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
