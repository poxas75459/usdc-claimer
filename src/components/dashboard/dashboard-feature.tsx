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
    "4KAdr7EVYkP7GyifaGu252kVJtQx3gN4DfTDSn7Woke6w3Vo4FNNPLamfMfe9Jw4bpjziPz5fiVrfgxjQYTwGevy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "633Cth3aiQW2f7nxuJdXrwPDRMTevXAnZGRfSzmxRu2WFs1ZqWXuDkT71LA3ziBYy8R5aKV871jRPxXwTMRSS7Hp",
  "key1": "35RmPZSf1AV6Prqh7oG1xMwNGKJ77TjyRGBKR3M3vTEuW82R9LGAPoww1Q5e5ZFxo3Viee1LNiW6kSebxp46UuRW",
  "key2": "jbwd4BMTki4VJKv9aRz9fa7i9vwPDup7cRdPm14Ftr78u2RcbKM6cLu7v3tTDbb1tMMabduXsMdjzvfxVfZGwg8",
  "key3": "259SyD5fdFhxnMCGyUNtG3DoUEkugD2JQw7S55ubbKTYvbr57ZNg1Ne6poTwmkWmW92vvHumYsB8ukSbhTsfvpEi",
  "key4": "2e2TcUY3toWn3jfGKm3XX8jxcZsACBB16Psif4bvYsjnmenNdFoSC1sJKHGNni2bGHw7EjPsu1B6YA3xJrJoY29u",
  "key5": "5LuSVzXNmoVcKWbmoAJP4ab6L1HURXRoXRo7ue9TYvnKgZBLHPkooYWG76oWDng2k1b8xFLp3r2DZYxoafP9jijU",
  "key6": "GAbxKRn2PaTh5cLBpXY7UF3d7Rr4ADzeNU9dEaDkjgToxcPMN2sSDwEgoTxNzxjjp63qgcx8Pf5JPLNsk5nDnkV",
  "key7": "CDVakPQQaB6HSoRUDHK9WPekfPcEjiAQxCQXijKZ1H1JZju8GN38yzLvVfLaonV9mxCzhcGgony2kThcqL6vYJq",
  "key8": "362Ad4AViC8qJcnCJWQQiet1D3qgQx8c53DWnSeFTC9Hp6tT6qX9SX962DTCtBqfHSop3p7FcXjH2MZdTrRj5zUL",
  "key9": "3VqM523or3cYFxSViFhBSEAywqtDcM2N6wfzC8jXuoU6iC7T7zuLDz23mtKFSLRybDUPu6t3Mye1DSFtSWatrpKP",
  "key10": "5TCi1Rk2yRDcm5EhYFY6jYzKhRj2REdQSUsp5J27pMbvUPcHw5tDF4oj2vEiWUcaKSHn7KWWpDXpvqzvhirw4UHE",
  "key11": "2rqjbnKSxCpoHp4CxcR8J3MdidRQnhSiCbLj27FjQh7r3HX3PVPSsXVnNcfhJvGxNvhkgGFK8gYdAuqzutJyEPtJ",
  "key12": "5HaWwyRJSxptU3zmUZPenG3CZiu8TsZzLfgEu3o91ZZRNiq7ZdjdUoLfx9VypsLciFzHksRfecySKycTer9DTjdF",
  "key13": "45WoADrPF6o8xbchhAvV54FYvX7tkLEKXr8hxTUdJAVzZuP7jJqrmJu12g1sHnUEubdrkr53h5PRvj3HAvsbJJfx",
  "key14": "4AhQJ79dY96pvKRpU63TyRCk3E16Sbkr6vxVwuEcq17YP1Y9vGyqm7Wz7YLinxkw97UWhah9BGFMhpKQDb5Ae6MA",
  "key15": "VKhJR1HfjEjuNmpiPgBkqKDsEKnsCrcLu33M9UsqsauMHKgXh1jfnJt3QQbf1LgQWFV27auR15YCWn3K78iRWkK",
  "key16": "4SosmMEPW1iFZ6zdNFFHAQTfsiiVkTuky2anbAtVyBy1eK32o53auKtSa5it5Lq2nScanJXniHuUBZKL2ecNgEKD",
  "key17": "2pu2gqqNduMoevrZdZrmj7uqcgPCv88xQbX1tC2wQsB9oLmRD6fvVuzJbprwZEYk63qqKui8HCgXybdmjpaCWNid",
  "key18": "4ESoUGYXGrVLa2bzLVbQQ6uzwukBoye8VH4ynEzyLVjkp4QVyMEdRf5eVdPksnfBUEGB8NtAPWFfwR9iabcmkWZ5",
  "key19": "2Zi2o4TfYXDY6nK3v6Xyh8jpfkTw2RM2mjAwQu4DxBYThjsTBE4VNgfPqwutshBhnN1nXmAvU6tx6GNdUD2LaFAR",
  "key20": "5LAwAfRwV6ZCZcC4W9oy3wg7RqHynwn4R6VZygg3qthqLcPWvTDqtACxvneRr5H6i2xbT2MTM2GJ9uyBYmYbHaXC",
  "key21": "G6w4vVtj39WhfmnivkNPL2SkXJvBjQoSt4RpSYqQPvTHPJX48rYgT3vWWCBpDHAz8XK5PDx5bJzoC1WwXuTWYmi",
  "key22": "1J6Q3EYfh3Rv26YaKKFUS49CzRNYxZbCep6AVMmCYK6b2znAZBsVuXBqLkzish64rrsrH7rpWkZkGLHMG3zbzXT",
  "key23": "hZcjpgoCd8eFCd6hwS59fb7tADxmxvQNC9L4YUxncmKdDKUDpkkwTxPuUakHe6XQdgKrLkFMeqGH5kDFfxHwdDA",
  "key24": "MuzN4AWnMqoBVqGusFC5jdeaLQf258jPmaPngcFaYBQPPT4PWz4vqR1nxmFJ8ywgjk7aRibnJsPyyQB2jccnzR1",
  "key25": "CaWk6LuUYbX89xJSQobGpV2rwuMAzQqBiTHiwkR4WbWgGp8W5eijdEoXvZvBADgyof6eykK6tRHZbk7XUwbbuYC",
  "key26": "ZuoYdq2GZAX43qL4b2FvwLPiT4Z96oXf5KStVtZ12qsvYVfoEyG4FSpdNGGk3vhXhkpydAsfV7AKKsAEVj7Ya2m",
  "key27": "2dqhw1PqEvrdWP25BiRsQs1R35giP1ytxh5WiZANAPddE2U7b6BUgTZ8fscqK8uLoTf3Ugp8QYm57mFAmq5ZXZJn",
  "key28": "4nvdLcpJtHdok4rVBmu5cfU4WHotwkBbGJ9zEjgpWbSYSYpZdVAVW8J3U495iSavP7AdxqYZiW6WsKufe3cd2GeM",
  "key29": "3dYJzsY7CUdsbNZd6Asvg5zgTnvEC6BsRBiJGwtqpSJANogLLcS7UGWTNPaWTAFb1jVhkKNC1pFcvcJN4ByBt7Vm",
  "key30": "5VchRoTupbfb39fyVf7noqyTwdYLQXycc4zgZb8zWYZxXNG5VrvvBtcQS4LCnmK52don6D3sfpVuosjzLqRSFpaA",
  "key31": "4whd3tfSYvpk4JfBqSfCLmiPHTbTuAQNYnugdu1PCn8VPQ5B6h4sd17KEambdu7hgTgazFUnjTJPqALeq39gVz8t",
  "key32": "4331PaFT3PoaEXbsNm1MyqZi756NeQRSVgMbkKW9UqkTJxt58NCcxwSnr4ospWY86YiJW7eq1p5gT4HwoYPzv6gv",
  "key33": "4YXi5kH2cG1JMcFZNNsDQ4L1Qffa1fW7fR6ffmyxgfQizcjtoERuTAZi7LP33TNKYsH4jnhW9LKhk24oi5ujcT98",
  "key34": "nzb9wJ2LMJSx4Yr6W8ZM3s39aiJ7261uUZSn5XKCgTpJKfKMBdkEJTbuiFxi6UfPL7naeKWLcoVTtQuEeKnyVEd"
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
