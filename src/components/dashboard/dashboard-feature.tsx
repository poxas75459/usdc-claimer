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
    "5fxR6mzihbkHwUydijRE63MWpAgGWTjNc2ZQJKsDc4ECJSCqRoiGTs8wBPx8GKGtNYyNw2kxkX3uZdmDuoHDcddM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i4BdCRWNZZDWN7HKsQvjxu1u31XuZHJXehCpSKrGgMsjjG5eftebcVys2Dopachi7f7nCi2zyFUKSNAsKoL5PQi",
  "key1": "25gJqbTE1TF3Y1px6cXofzTAQrEzu8hrTH2DkwTXVChNLkdMj9GCRrFkxLwgqU7CCycHM291eCawLSgodweaoq4v",
  "key2": "5cmuETZcMYux3Z2J888Jd54Z1zg1VBUtLLiZJvXAvnGiuCec8KybRV17zU42AGSEmgc9cpMKD7VB1qwjrS8cY5wt",
  "key3": "rAH31qmzExNNeXr8veUAoaywc86HztSJ9UwAfL3FE9NPVWC4SSaRrgmYNbwaW13oANS4CAJJDEjjEMFdstaVSnC",
  "key4": "2rwiCeauyPGTfRqeKvfuXaFqVZCk3Go8oHT7bdRAZj6z79WPXj8NgNgzXF3m3cf5iwetG6WZPyEjPM5d2Ppt6E92",
  "key5": "59AritKVvr1TmYuac1g7Y6UZPhbgES4poYfQ6Je7cCnH8gNTEcGabVJMBJrFnVqFREBzGGKp5wj1DoCvxSCGjFuh",
  "key6": "VpuL4R2a9BazujQgf3iD3AeojqFJ17v7KiJQALCVMqLGxcbCfAPvjTZLkQP94QaWdqPrHeVTGjhHW1kSqnqg6bj",
  "key7": "umA2sYevm4z83nyuGdXtDS3sEus2o7xGrBiFuJvMTUkCDfgoAaPXV84ecD8BFQi6run5q6HTkaELpe37SRZywT6",
  "key8": "3eio3Lp6sCbSQz7crPM1gWqHgVpBwD3rXgLVyujDUVAvmQ9mHVHNrvyCRZfuVTWXowGC44hoEZxtcgTu8cKwKduN",
  "key9": "2kgEw3bjfoKuCKxp763qSD1ToYGqGEUkrcbVcF4MvjwPWKcw143z4ryLkvqrWRf1WyYoXugpVKCe8W86y7GkLJVL",
  "key10": "5PGZQ8VGs4B8UbaYwkdgZKmrmq7W3Gjzt5CaXqWJ8dr24HZ3cE2r3sJDy1aj8UqLv6mpaVSSDoHnakoJqedYxBrx",
  "key11": "3P34G4wu5um6fQSYYuUhWBXWXkTEDVHtLFy6Tqwjd3vW9azbCG8GuwWPn7YwCYE1cUZWcSUPMNwQ7EoFnaFS8B2Z",
  "key12": "5DGHxRygkYZDMGUxxXaoEijv5ihQTdD1zeQpRSpfw8MaUrUnmNTLpCa2zGXW9gE6PN8yYaYQZj3UefrYgs3fouNG",
  "key13": "5xJGd317rQFkr91CVoJe8UeHHVrgDAh4uU2W3qyc1KQGwz5E2R2BDX9nPmAs94f9JadMUgfLK8gGZ2ebTp8NApFT",
  "key14": "o5EzbViVUaw54JkaAH3jsiuYUVX5FjVwSMLXAuk36HBuGJufHq4Hm9bhgFo8ZesafEDMDmTZrg7un7wmNF2me31",
  "key15": "2B1YiVqcMGrfTmP21BvbVPkj8GPGMyLyFx9xv4vRsZr5Lu1hr4421zsmKjcRmZjLd3KUht9W3qiaotJBSgZnpggH",
  "key16": "qTzxabZtvSBLrMYrJJfU3j4oop6exdQT1h2CpbKY9z7t3pcm7H56MG3xugZ1PGjLUsjm12aoRYcCtDyB1PMdiGQ",
  "key17": "3VUKU5WCmLMhvqY3xktc83QPA7aXyEmSfb3TbSNnu1nmDX2y9zsELDkgWZ8TEDB9XwetdH8eJZLgiXkRt2ngEH3h",
  "key18": "3KE2htWfvUodBL9xT3w7JmtKRv9XV4qJb4r9hsRuJYxcu8QmPLQ4WDCZPk9DHmGFFBtS9hHRieo3sSqp6wsw5oJq",
  "key19": "K4CXLm9MVXMZ3SG7ZHDkDpKt1zQVwk4tzAet6zaSy5i2MbLF45hjQYyQmDgcfFLiyerebaTznCWf4UfVfgcWuUt",
  "key20": "4Noet8wTi9nudzqfUWjMfpWy5CVBWgKbDcSMBn82hubLUbzoPuzQXMiXrq65jLJtxAHHiW93xJ1fWbwSQkcJZwnN",
  "key21": "67Dv9wZwMVtGz9pwqa1fcD5gqXAxGCpXyWJmpxkEtHTEnsjSRKjZJ4hks5HqPrd69nhF2o2137pPuqXPXDzo5vFn",
  "key22": "52yRarcQKvMYmbBExcBQATkTDDcKfK5TjvezrW4pYFVku5BxwLZH2MB1TRsFPUMPJWfBSJCcJFzkq5F8gH3MHMpp",
  "key23": "RqmQuoebxoTSA7RWnMG3XybxgqfkUdSfsMmtYpwieejitzSJudm1RguhA6sfbz316G9vNmtE2gQcSoCEuqwez9H",
  "key24": "2gesoHYAminjirAAeBdN8QLGusKZojUJq7bhinUyRvvCxEAr1SC6NwQGv9YZgDWtPWULjqzgDfVoWhrhPnCLJTX7",
  "key25": "2tmRm2wbwmNaYPNi8b92qJbZ3ura525WafdVMUniY7FueRCZsXfRKtPd18i9e7FXeiRwUBzVbjzdj4b4b1ALSVEW",
  "key26": "4N2DCaxa88nja1vtNuFZmwubhJzWdpwJcUeSZWGQYL81WL69nqRRagpes75WLrmqTJYGu436EYJ5kmzx3TdMmP9T",
  "key27": "5SvbULgEEVCxWjYBzgfbHk4wDxCpwpbB1C17KgJYyqaWXoqbKrW7WKgQQdUsvkbqeVcAnkq5TjNGMYESKmEwuWA7",
  "key28": "2fP3kbA4fkQxzAMpxV8GmbRPH7khGoFYPCABH2oToMUAwkbuXgva7d9ZkkH34nw16EHSSR61PV1TWd1ZVCLTZtwe",
  "key29": "3HkGLvTy2cEKSHkWDg2cBHirdX7HVumosw1KZg22iTkkwYse6tBW43xHG9cCSpZgFeXw4jgTU3szqVbHv7S3ugmr",
  "key30": "2jcfdZ5E85MXQSSUxUkgM81ygjaRFKioN2PTqcAPkcJq9e91pqE3ygtChJisdJtgX6PPVXR7Yo9yWne7iZ2zsGgf",
  "key31": "3ZXTyKFntwatewadWFY3K6aCnAK3R1Lr3XtBP9LCz63xkqg8mFhuUoYKwZQxBea5MgjYouF1sVZSMWCRzZbtcKQP",
  "key32": "3diWfW8kq3st2sbkfoRTg7MjUX512ezx77bXgcao4XuJXpWB9o5AucM12AQkng7iHphQmNtj3bHnhYSwrxFnAeCj",
  "key33": "4jpqruZ47V9kJvbSp7Sd2DZKXPmekah9EnzzQck4xiDdaaKzrJ52vbeAiWrDQ5wEjxNdXM5c6tEsuoQtFPPLnhbh",
  "key34": "4GrwHPRn5kJPvzc4JRe1bktvXQ5fh8o4s5g8nnMJE9WQv6tRtrbfoQNFs18osND7ABZotyaJT7FVpgejPDkZmSun",
  "key35": "G1MJaXkAmstA9TJxjTzkKc25umdGJpSyP3bSCZoqeqzzcy4gRL7crz1fnHzYdsZfLkYAsd7bz8v34F6wXSn7tpw",
  "key36": "PdwxJ5YCVpQUyRq7EV4KFgE4kwpXJBCTLZ4G3bkyCNhTqQ7yqWKWS331sSav3b5KNsaVoRKqjpkL9gNpjJTV3Z8",
  "key37": "3Yr9jvkBovPA5bRGzSUJksVPTbyyiqgiFLJGBbcWJJHeqzu3sNYuER4HaBs4FYhofeiPMrv3khj69ugZTv2bX6Zk",
  "key38": "36xa5XtFW47TTvyd7RShMCbu7BCXpHtMcvChkVB4a7FHJWn6UGgRju8PWZePXFHsr8vD3eaoyrNvkaQ56dvJvJNu",
  "key39": "5ZaP8P2qsQ3LbPSFWpSf9dG6jZRZsnTiSzv6cTx9CyM7Az21iZvpDzagAphUeyGTDhFBVBtJ7MDJgBDzoJU4NKd1",
  "key40": "5fHeXewLZYpFhihevzW962ph4cWWDHjTme4CXcRFQNkTTMehcr37Xrq6hbi2s8pfv73f8iKHzpK7ZL9G4DsT84P6",
  "key41": "51MeYuMEy5J6KTnpsmqJkdPAUfqHrZ4VV6THjrD7EzyKA5o7wK2ebVqHHWEHyuU7W6PqjzVJeURyKfo4zUW4skPY",
  "key42": "31PLY6dL4mj2NsNg4ifMKgkSWPGXWrTfcVD2xtT6JAZpNRzBUfra41FUesY5sJgbtrCoZ9CdWDe4JkfduWbxDDdW"
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
