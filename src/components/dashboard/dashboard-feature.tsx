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
    "zauCnaELjVC6Pgnn5TfMgwyZRAxhDmA7vqKNJEe4U8N4bDmbhbf3f5n1hPp6HA4eFFoiPrdKkrrPaKN97cDmMy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wqFKL2rUdiFGxHp3pwSrKQJZimb67QKRUZFaxgu9AMtkisiKu4miAx199JyFbvbqRDeUWgu5btUuw5Xh16FADrL",
  "key1": "43ta7rKs9EVNENduuoY1Fcy7Vbk4Q9qX4WFQANU4dka7dshc4L3V7AcXnK5LAjC1BFDxrKUMBFL99U6jFSvmAmVm",
  "key2": "2tzTRemkM6FR6m9BUw9u4yA1cVRodQ4opawXrQheXPNbMowEKnNZy1HoRUMtbAPhDJYJVgEKyaTEhvKgqbZugkbz",
  "key3": "2W4Qch6qjgfEGGpRdphWweAxGqBot4rwgBhsynGVaLVu58WDAK3jfqTZ11qmL7Nvpt4Gc6VAEtRoosVmFkvaTVVE",
  "key4": "2QFtr7P5UV1YxinpRUou1fjUxbENFvatUyBVCVyKyox4NnhCM4SbYJCK3DGB7WZ8H4jrGkKkth4bBxR9nGgYTDwC",
  "key5": "43t5yKG6PnLfxMLRtEGJHMo28sXjagNrtYg9AYBwrpjXuSv9GvPvb2cUiKSxV52XzfgEzfT9FhXiddrpJGx4Xqb3",
  "key6": "4pH8V9ipHEaDyX7q7ibmYxZ4hmi2CA8gUDFdWWXj9RrxBvLiKjjtNg2PBiQReuc1sqNfCZgeWY1cBAFjbiiCUZdB",
  "key7": "vH5LEhhR8UoNzgJXqiqawvb4RW38tcnZmSZW99A23tREyfDvKBpHn6jvZRVWEjrkPtJ1Dj3zrZ5YHS8PW5ZmnrK",
  "key8": "4PvJpK4oVzGMEsAWqVV4JpKF4Lm5pPT4udBPmej1QMi4VqKaK41pUxLaxTP6U4Xuf1DdDfu2CFjKGFHK3isVjqpG",
  "key9": "24xyBZgnChLR3mYqW7crPABpKLxXKjMPgxhVq2kBTBZ84KKuPi4ZCK4XgNnLxCnzsqci5CC6AcAgq4VjtaFh6dmE",
  "key10": "4yc3HNSn8rEtrrkCEx4YBG8ga9fTHXKpRJd8ttm17RBkAWArxv1Ru5V9xZZr5mk1zgqYZiqZcXA4wusTW3oTBKt7",
  "key11": "2Fxe23E5Kri6Qx1JJXjR84SrUdnRKuE9DQYzdXWg8PhUvHDTCCqqFpfdSekS2zYmriS4Bo6Z4951A4ZZrq2XTJfT",
  "key12": "3gCCntPCa5CVoovbHRfwwJY7HSsHGr59q4pB5DPyXWHiYcJdF4mxfHwLMpku4xHccimVPpa66wguW2qKEee1Wy9z",
  "key13": "2inv1QmzNY1peCJLgcMYk22yhUeY7DxPW5wokkF7LYQkAwrXhJLNsoPQijL73cY7Sd1Qv5Uk136Y25ZXjLs4cPNh",
  "key14": "iu44UMUFa6HYhUb5DCkrX35tRXsuVUPaviz1YUBTe4J7ejsMxzfc47YUopqgPCdATRmVgB8W4FY7BxZgNzASSEn",
  "key15": "4NT5tfUm946hxVVnUGR4ciZSNW41Ab7ZSRNEKY1VMhyeEcBH76LcAYSPscSLd1UC2VdDwwPoKYjRPVuMaV9NpsHU",
  "key16": "3ZG6PjTBhgALRzoUy9E2L3aERwp5t2MTWjr6N2G4CKkqPhwd2xq4LbtecuU9n8hwRJ8FpNew9ACAivwAzEooGtdP",
  "key17": "5VtKn9KDRZs1TxtdL9x8duzcCtuF2sCfQCg2HGtuNELAaWeM9p51EKJWYJUuZVqLT3HUEve9Qqoqoi6MkwsNCuKM",
  "key18": "3dhSM79P8L9BetmEEhCNuLnk6eAqPmfpM8B7Yg1qgV2RKbPsV4R6Mj4Ex2fvP5E43xNfmxXu5ZELEnNF6NC5hKQH",
  "key19": "51eUGqGGk5oqKokM4TSzZGaMPp2gePConTFS5zZw2qgjEWRHUicd6MbNCkyyUpiRJNtbY83itG11C1AQHBBqBpAx",
  "key20": "4kwnvynFPG9w2qK757FkCoXoJNgahaXJYmMbKVFBph8XqHDaZ2nbvB8feKPQjcCs2wDE1h7LmJsKAgeZhV41JVaU",
  "key21": "5J9wVGygyue7ayesmbBfv99ohH2LgVHLkybNwYKR4BYTYCjrrJS59ivpaHVYegfCajkiSJsFW77hP75MscjAAhUu",
  "key22": "jPZWeigfTNbs44YuonXwU5c6HrvsPr6yHzgfzZnixoahf6EpyxjaRzoewtcV4j3EGrDRRNyCBgrmeQdDzRMy4Bi",
  "key23": "2NioDW2j8n3GFz5jQrrXxg5zyxE7HFGWMQP15NPmaBGgMRC8ezDdiqydqaUiMUR59kGK5apZ1brHADub2xGGBhxZ",
  "key24": "3Btkjiz4qFC6Zt3wXvTFfuu6B7zTvLqVpBRbqP9mMwnMwQmfWgp9gmkNHnNQiXqGMoVMYza2LEPZ3kg8bN3isqJA",
  "key25": "3Ysa442c3X7PWxAsKb5JXEWLtypZo5jkHu6iUKQpEb8vWbTV4iCECFBidiHEa5EuzrhQKWLFAzXMkwoo1VGmqNnn",
  "key26": "3mnv9TRSA7fhggwV1FPzsDr5BX7pykE8DUpWh1nPxQsinHwHRqf7r1U8tCb5Zd4t5PrB7auyrSDzmCvrv8WZCXCV",
  "key27": "3D2eJsHgkYHReKHyy5KDBPmg7Ty6mkohKSnoqHJaN6nuL4bKMik9xK1ceGkUav1vZFaz5STgp7dYuZH4fRevwFaF",
  "key28": "24G3XH8VqrFuU5CV4Sx1GTTFBCDci1Fb8bSa1bu2iMmGFqehhVdKKhReex2q3uUg1JRkEMhtoGvZtVioS2gv6fWh",
  "key29": "3SJLb8j1ek7neesaqgD4fNJ4c9inZfcxVqKZ8EwMDbEoEacnkUeGEts7d5JVK3S7Y1drkphuLDoc8ooRSip68sSr",
  "key30": "4d3wSQK2WZ4J6bwgKhsDtCabdzPseELMccvY2nKhrEzR8dx4SdR8xDG7cxjgFjncCiuYDYeRtWWV7obqg1fS7ist",
  "key31": "1mj3EBUN94nCLu9jeoCjruwziFs6afi6a1JFqJC7Jbjo5w74YVpa7L6sxDzFZLei9UVPK8fra7k3FYxE2ADZtWW"
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
