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
    "2ig2iiwkGcDdATEJTU9rMHVnKKNkmv6q5X4V3Rwq4sUsgojNx6aU8y6VhBbkY7hiTd8BJTjZVcKbXqnUkpBGoBDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UE75u9siaQD5i9kw4cmDQ8yKTTKcepAYEA7VbTbzypZd3KTKLxAGPmcvF8Y3P42819MMVr5irj9fouvkEPQino5",
  "key1": "2EEW6WFcv5hDYkVesy3VSKsLyceShbNk41aTuxLJtwdGYKbcPRcLxyip77T5ULtmqEoU3oXZAcPcZ3fi1avFHeHM",
  "key2": "Gf3rSswMzSfcAQHeFQ1WxChJantuEceCkZDqRoyAj5XhGm3L5cBAUbSUuJaajkEAescWPQAmGWrb35zBwDaoqxz",
  "key3": "rw5dSjfyH2Vhk9AhjnGu6W5ttTA9ZsNbbwb5k9f7oHrDqsg9B3KFjX1vDSUCykNQgCkt9HNoMsYY8Nqf4iRVe7H",
  "key4": "2GZaN3XyWh9YhatpA8Eka6Zd1JC6pDzePLo2XGcoT5rSd5ks6go1UWCZV6KjjZpukH3jiPGZpJF6JraZjUPMpoL1",
  "key5": "XwCeEQ9XDnuXchbhnwRBMUcXQy2HnsNhKb3SPh5SbwpF93sXSimPCZUznR1J5mA71yJGncYmEiszNHDtysYcipD",
  "key6": "2xKgHwqYqGWrcCxFJHMPHPKYzKrRrtQKG4L7UFPKqwKVHh3pH314NyCCtgFkgifEYkZCwmersTn3dAjtrtMBK5Lq",
  "key7": "3YHZoA4WqWKWvAJRHtxYNtq7fVwfq3Q5h2TSpAb3PGXqsPyapmFGy7axmB8Pf7a5bsiCesjZjyEXqjSZ9WXJ2NWe",
  "key8": "JwBgRprLFLMGHmEgYxArw2UTyrq2C6mkaBmN7hwN4vwZfo4GgHQF8PuBab6469FBPafwhXP6vQBnd8Cb6cSL5Bx",
  "key9": "2eU7XQ9sknQedZca1FkZSNNxKBr6vtyRTLfmsQ5v3EiyW62bmUsgPHsAQemWpaQvrmZHmAjhWQg5wGywdvkmejKv",
  "key10": "eYKSSViWBQxYUnpuBPrjXeYAqtYQvYQXvqeCkvT8ZfvqoofVXqgcgoE6pCXGEzNpXkMczQGUm7Jc97QZLBWpaVr",
  "key11": "5m5jyvgvJE6L5G3taVmxiuZfCeW4nh6pbRWBKzvLRpLyQ4iuBNpEGsJrVF7TpfuBAFxBT8ZQ6ygCMJ7ZB98vb8Du",
  "key12": "65SgZBqE77TvX332rveU5bTJbZnoJJBjXuCJwa7SSsvi84a98fSe21gbmoyjJKZvQJFtJG8Hxo4Ddq6VxxPFDXRe",
  "key13": "5GoosJpsM13aDD2UYUp9dsnCfiHZFZgrhdMu4f18Wu1pDQZkh2z3hggEniTsfQ2Wx9LDmqN6NupBEymFHWL7JgtX",
  "key14": "2BMRLGtBZ9UjNDaeDi2yHhfFaWemJy5gRsgx1dGnC3xQG6aAWS89tpoJh62TSCRandxsDL5eDNbQvxuCmGW5msdK",
  "key15": "jn74KrdoiKswVUiaseHJeUSsoWiG53Ws1jeTfgqgpMDrDFtTq1mXgAzJcEuT4SduZM8yexaFU7mdyVHPTwuZbhi",
  "key16": "228utHFwLwxHskiguJkCNU7WCv3k2XJ1kNJgcySW5mL62VK4WoJUfHLfWvv3EFEEAAnXxM4AcB1jxFFtMbkbPLCe",
  "key17": "4AqyLVtRRMG4XU5E8YKieuqAKX1HnzqpmZNhdqHE76ZsxzwP1n41KMZjEQAdPgKDqy1MLsgeSLkybzhpCxQujrcb",
  "key18": "4nVboxdPSLxe4YG9HAbFFE2dC3iCRVUzVVJpjcpfcAoEGD7UnDqVpkFJit9bNEmePAx4ntmczwML3Jj3Mt18UR6C",
  "key19": "5skCgXTRmXiUFoJviUCaJE3zi7iAnVo2Z1F97MX8sRJXUp323RGu3wS6ngE93GRboocRYVjwbsjtcYxQee2qcns4",
  "key20": "FBVBqcfu7pcuxDXsF5hQP5RJfhpN6VDwU3idW7iBKF5xP1UkosZm5sMqgdcp7Ejew51uAekn55eF4prqQcKQD6U",
  "key21": "2UfEpE4vKiQhLfPex1urN135ACqEuojEAgUuLpYH2CypQC2Pbh3yzsJ47y9vn3gVUGomFwiQe5CW8FwXbvrSXqpr",
  "key22": "qTEjbnZbRsgRz3qx8YBQ2DBdB8BvyjSpGXksigq8gdwBuE6rLdgHLD8JNMVYo7kAXTR8zaGpiD9Vw4CHvfUUkR7",
  "key23": "5s81KzQBzzzdbQVY4TV3YLu6UaqbyDvDiFSPpTdiTwhNHRJRfCBv3CwLvUgeAbiqTJjogeaszDCSWTWRMRaJFudE",
  "key24": "5XJfXj7B6jVQAb2YMx52iPycgyEuG6JuYFebjoY12zEuqvJPp9GeeBDZi2XnVnUkjouatLn2R1Qadsgnixi8eodX",
  "key25": "5zqNKhNrYhJBCPJSarHbgVJ9JLm7NeheP2B3tq7v6AWWmXNCos6DmVQwkXF2KnLRdcbyW9AUNsxTqfwDXpNQu14S",
  "key26": "2QPaeqLCkS5kjkPQFRsZarxA4qx3ycmBGJ5bnofTnetG5qGk7ByR5GDzpzYwwoSorsCZhTamepszcXZRscda4fCS",
  "key27": "2zvA3oXkAYMuGP6AuvezunRj8VpgPzsUXuX6LspaiXuTrM7G9TGWE1NBBiHTUxm4wCrkfg6TTyJ4cmZWYoYQwEMS",
  "key28": "5pA3rvms5fkTTGxCFGz5BTrmr7GT8KfBySJQvCLxY6TnsWoTQyUvuEAxEjatvfNdassXMib1b3bt3CCoECe3EDn5",
  "key29": "3zn2LvBnCbAi9eDyk7WynJRn2PJjzk1LvADjhgSb3jWNn6aNebV9Adh4nVxjQoQmGPYzJAcKAPAWb9nhTux45TjW",
  "key30": "s9JK725Mi1Gxuyg2DpzBVWPWMrPkpvGwE98TRg6xdqdKSRHMrGL884fHpgQQ5YEjsbHgd9Kz3y2hLvv15iRVdFW",
  "key31": "MxjKa48rGqDQSLVmsPbNJi1ijHAeqnDu3WWXNH485F5k9jyo6EMxhYuqTvSBHkDgvarYWUhLGkqyvUw4XBAgSjn",
  "key32": "49F16GSamcfJsrooSuh3C2JUJD7bw8QZGU24yivfywaMZCQqXA9sWSLXwXc6FQ6Zwb5Bs4ubGGAz8KnxtDPJaqGS",
  "key33": "2Z7RLW6DvjtY2zczN9cCbC5U5YVvgbXsiTRUmBazz85N8RKTPPkX78ictpa8zK6StTMwAvDetTLYdVP9sazp2doE",
  "key34": "M4w6zrjDGUY7nTfkE5pkXnYgUK2u9JVn26eyLDWKWBpqJjK2tNbwma3yMhityg6VWQnAdUzkxcU7XQkNiZjjRqf"
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
