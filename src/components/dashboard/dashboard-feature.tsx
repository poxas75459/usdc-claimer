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
    "3SBBb5cBBrd9kvd66Fc5im4KMjcyxruPH2Dq4KokY4gwmQDoTQ15D8LgpCxrzrMvxbrjDRxZNzGpjxHjBgHvAmaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JS3pD9vSzeZbM3vQrg7ND4hYSBbBfaA1UwVBTL4iMwhwkjKysC1Lw5q78kCpHwmBgaD4sbHzf2asfrVjTkRx2jB",
  "key1": "5LUhbUtQSjBvFSioZiUNH1nzXtHa39NyQ5x6TBb7RFXrCSHzn88ichHc7VWgC7nf6kDJ3uEQfWyvA9AV3CpjSjqz",
  "key2": "Hqk65pUaj5dF32Htr8oyc7KMAM3Pa6fVa3VJCGEo6y1KwZVJszhd5Yj2yxyciBJkgk7YdSgMcHUQ2pmcsuYRKRT",
  "key3": "31ZbpSuxcRsDPwFnU6XG8vCNj9zUPtdfmHERMNgiiydf5rCCRUw6FqUfiLuyzKUJ9RQGzsf7Hg4SM8zDoE7WgT8c",
  "key4": "4GAB3KnPb9yBvGPrS4E3rbA6eFHtkizhL4psicebyvt2Bag7xkwsmbQdsodLNXPGqKiCQSPmP7CAPiVZQWndPh7c",
  "key5": "3H37xJkxewo2c9Jcd9KgQM1jnqJq92qcBfovu84ncbpAjgQrUJhzxRgc1x7XrT3HPPAJbZd1jR9ip6kGSiN2n4A",
  "key6": "rU9KM4vJ8T7bXbyzWjmYrVSB29UUnVAxYP8XxeDPrqdMABqdiRi66cwLkdJbec3YQpSCtPsYYazkBZ2AKH9KMit",
  "key7": "2YGk1dm2NwmEfMPAvsrPjCbgi1RKUjcKVCZsXv2WckuZbTtCTVMcndqfw4BQqxmHNEL8Y78AYmQK4hHHDmE9mk47",
  "key8": "35ueUgCRwFc21qQqdtGDj2BMMx5VqANALqF7pV98B85FeaQG7obMRu8fBQWzNgJ3KPKjpgrjAPbMAyeQxSuC414r",
  "key9": "3iasUQ858JxfcUEAayh8GQzvePq8uQ2gJosPZuKRHNvgueLYxeRKFQ92rAn6mMvbjy5Pcukj3Umm66wK1G4PJe59",
  "key10": "5ZnLGut1hhKz54ZBMmWp1wo89i2yfVorftEPtr3JdvQXP3P3Mxhi4z5VgZBSFoP3tptgsPjG5Km2dNeRsLA5ANUJ",
  "key11": "2ng4A1CvzV4NufP1cqSJEQmGdiMQ646iiSgyZdKHFDuPTiNGZdrYwb6muEK94hvY8mzGNqasYuhp41AFj4jjs7Vr",
  "key12": "4L8F9CPwsnYbBezUegqEmA6oQbuiasc4HGmEvxNK2mGKqBxnkMq9jc4m9GCRViYRTavFfsbfF2Z1X267b7RomCaF",
  "key13": "qpX5u6BnKSUJc7rKWb8HvjD74Zh2Y6qR2biLMiPqTkztmr5NDq55BwcFBksdt3yL3R4ejyhBKGMYCSZF2yjaEbM",
  "key14": "5WSdKFT9J5fogY3A3X7Tnb3bCtQk4juabidQaCJa7f8GXhNAMWGdmNmuBVR8sMCWKBqyHDM2dqMjZdJrwgqRKHHX",
  "key15": "3P4NAYh76Cw287S9UhLSrT8H3trmm6op4VWGFymqN3LDxcTSm1rfaW52SRxpENy7iQHrRCHLXKN1YyQ61Xm3gJHW",
  "key16": "1puv7FBN4LcUMPBD6qtDxERg6bR9HadZDTVPhy8VMqeM1eonHSxmxgVDTL5JdYmDU41VeJsqz1baJDGPznGrAA3",
  "key17": "4PKccxxhFs97bXe1CQSfrKWYFGhfWLtpoBSe6pKjqjdPshHQA2TDRwfg1Gp1nKJFBRnf1cZcWiXfkgPTPBS69JPp",
  "key18": "4bXLsCJ6C61URwh7fnvVFZ9aZDceL3CG5uTSa9bFN5VYS2zqBoQUNRhUVHQ6jABSVB5xsw6fTR6FCeA44H6uYUVa",
  "key19": "3qtYz4mvBheZZuNe34e37UGrBhkkxcgKaESMJxxorzhxkmW7y1xXBeStocQTac8Lf75okn9pShoniojMRzvkWpKH",
  "key20": "5JgJitbrYpQZZpWAWv5wVV1EBC4vPVhFiCePpFEyc2qvHAd8DC6qVzRaTRRXTBf5iQJ6PPfeG1myHW2gGpK8hNBL",
  "key21": "5F8w3JVFM2ZcaVnYgVYU8uh8y2R7sgtu9ARENwFo2gjanFRfwLBvahcdbf9xurZVCMxHwiiQT8zYbdoBFmF6LN55",
  "key22": "2CUiDH7TZM6T15wFQbKJTWHgXi95dYMaiEEo1WTq1wu1LYoowUHe6KMESTGtuJaqvha58p5KEwLvmthLMTnXEUA4",
  "key23": "35nmPowtHGitJ4RiXS4KxQzgw1D55PiQyorFPwugD12c7DduSMLyaJinVCTkkMKnHCpsCPFZqsKgqsv7WFEu1gSr",
  "key24": "5eNMFBbaZqHSqJ7fsy9x4scivXaidGuXyxWnwfNZqWG9wUTKp19Y7VHoij1DqG8Uv4Rh8DJmhbPofoxz7WVoV2UA",
  "key25": "2CbrxTsKq3pMiQjoqGtCsbN1kiRd4XVBfDpfxmNuY1vc1hT133ffqTU86VqNh5xqsybPVS4J345LDEgvsDqgFAty",
  "key26": "L9TG3rwCLgqfuoJR1dgjXvZg7PDRQd8LFecVHHkDX7xgf9mZ4UoMrRDDQxsYzrB2LwQNXFM5wUWAycXce4vBXWP",
  "key27": "28kAJPJjdA2REq37THQkAerARBUJXxwfCUsCkTGrthcYHQAeDbWEEqa67ddTu7D6hjPnpmVKzxbPLzZYo6CB9ZAB",
  "key28": "3xXeopiJ1VmR9eDSq2Mn5E5txwFKsGNcLd5aYhHjp7BLG7nPssMziFN3ZnQzx3iwaXi3NHq6rYX2tEPpRovJagna",
  "key29": "3sMr1cNa9pMHmrAjLuRh4KM3rcMc2ZghX1ChdvYhPFkHeNzMw8g4gKyQwdJXHmabCDs5i3hXjgGBh9tegKX43Zdm",
  "key30": "iqVBH6qAh8kAJAtvCCbdpabACvM6uWtSfm2Mc7ACwMRVGPXDqfRJwU3YczYp5qoLLHtTrtVw4zLAt86wHKuGpef",
  "key31": "3YXB1YkWjToBSQrzs9XFk8K9mHKqcSrJPzzXYR5YDznrgQAjzT3gi7j1rtUDqhmcPmiY9M1hTvJ1iUJBTZbGmenL",
  "key32": "goXvTo3GaP25Q4qYxZ9fyUmjARh3FaYJ2ApZFjX6ceuU5ANPFz2odUcCZybpHVGuqHzrn3xsDDiF4iVQZvYBtCE",
  "key33": "4rojPZh1N7VzVTZgazAsifriJLqqH8JTD5UZzjPckLUhgAk5ke3z8PiqDtYfrVdH9vseHPXxNJnyHMp63zvfdUQi",
  "key34": "NMdYLSrk7M8xL19q77FVe3HzaX6rZJpzJWC7QxioGypGYnq18eQjMfdpbuKnaKZCuNEJAfnPQfXWGsQ9tdtpWcY",
  "key35": "kZksUjUuEQ54EwEieqB78RhwcL9vDaZCcHVK3pn3SBsEWwiixzzG7pzYZgCs17fVvosj8A8V4seRoWaLCmKwVb6",
  "key36": "4yDm23pe2vxxohVeKNrWZVBhRcSGAr1eHbd177turXG1jDyZScbxZ21yGdKPinhspFzmuFJt3fLY7abtksM4TDvG",
  "key37": "4bBEQ26v9d4V7c1FQ1xE2jc29vybCJcXBF9Q7mWsePcrKNREvZ4a16BYKZaT8NyZUzTeryaswDR6MW4Sp7DB7AVX"
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
