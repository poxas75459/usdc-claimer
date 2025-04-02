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
    "5BS1zMFZycpFTvPG2epQNutYMWAKkF7FeRvfgBw9R8JmXiHRHiStmF2Q53daVwABm8y3kEzgs94JbeFoibHoYqZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SUwUGtAeU6rvu2h588PeseJy1SAnJYT69HYJRwtpLpLVQtB5pmbGNYnqp3ZDdoHx8tasB7vrJQB1M2HR2n9nkpa",
  "key1": "4P4LNcEnfowscrQNhSv6LiyWgqbRtiDMBRKkz4aHkwkYWGiCtZxigrLt2Rzq5ZiqHvbctZ9gvwkfcqsaSR4Z2tNR",
  "key2": "PWNdQx8v5cMn5z87qeRHR4nMvhdQVD6RgBxBUtUECysQFbdgsNs4txXr5z9NszXtP839ksx4Aj6jCUYqpxBtftn",
  "key3": "3wXZa5tFgmV3cSeD2ZynXZTJXZGLgiXsBU4zmPU67WCw3bgAoLuSBkt3vmpkVadpF8D8rTrTWfDhwCqqzFrF8GLk",
  "key4": "23G81M6ie1jZEXWvGTsJFaxN1A8aBhzkovP1yFKXSjgPBRg9AJsX6dnkWcppyUmxPX3E59ug1gfnosGKvCZGzd41",
  "key5": "55afz2MaSXtnsC9FDQPjbmFwT1GJMv8C66vwPzbak2Rz9TBGfwjSYBbJvbMNAq9iUTJBxJSpjGQdQJc9HBQB6Pqo",
  "key6": "4ceshzJejuWk2pykZvG2d5nvpaugqjGvtD8M1zLRjQfEqhGRCcWp41CFeAdpJf4ddnx6vW5UAYyMeFNUazwtmX6c",
  "key7": "3VA5zCPCkhavtm9wEWzdj6kvuYDLj334FfQHsi6S6NJfqYw1X6dnMbmhcocee5RmsXxEe8SHmoo1yjxjkZsAhVnX",
  "key8": "3PUMJga5cq4otC7ZbmKKS8A7eLW1iqX6dSZcnE96RkimsVYmkHoavQWfuncHhccN7SnopqhKAtqKYySEeF897PcZ",
  "key9": "6357vGcK2zzoWWKGj7T821EaJ4gkPjRsfMyy179AZ7EmuuDxAdVKM3Mhe4YjxUUNTKLFR4r4vTRXwmRqnGNrnmio",
  "key10": "5p7BDdh7RcFydUcyieCRN9p7wZhGz62cvNJA5gnxKcVFvtjz7Zm7J3huo75FvAyDWeXGKm3bWmi9oPUYAQjEZ9vL",
  "key11": "4VUVKZUt5MFH4QU8g77xKa88db54xkdgPFRjioVBnZU1mYR21k3jWMikpZgBAH6nJwhLZ4cPaNwgjeW1LTvFJjpU",
  "key12": "sRvfeutazSzhZxPs7WJc25YNAuhTgAPMXR2qQHVJPZrfz4Qs8vJHgr2NcgnZa9UiFNtQdSth8oRTZ98FPWhzkJp",
  "key13": "4YqSj5LjxGNQFhVkVvxiFeS5ANvD3Fuz51Sn4aYUeiw4zm2R4QCiEz1FheTXkQwP2A3VJb5m75waYePcEyuPB2Uf",
  "key14": "riAFtNuDgrFBi7anYaeDgbnaoAbUeQd7fhtZSubDnNzkpo31EDfnJ3L2vCePmeXQkTFTHELbKbyiVGGK11xPh5M",
  "key15": "3CPSBQkQEiMQTnPGWPP6AuCVmE4aVgEez6WQ6fVEcKLxVcrFPK9FhhxDPp87o9BLms18sQPQC8FhCMJMM8AEnYQj",
  "key16": "aF9JZHNtvvkQ8ZEp4saufQaPqnQht8QUG7BN2feuaf7nMeGvdvkgxvHyPACqZuyogMegKG7aErWBQUzVuEj84Wm",
  "key17": "3THrQANzhBQ7WuXbUsrafeaE6rPAShdieGqs7H4tZ8P2YMtPfJgx3YUAFH88RQJc7horqjikaiDqUpUABAfvX1y3",
  "key18": "4cQtNqWScMCBDdVJCkqskHtnbZzSGTAdAsBfcxwYf92SaZajsRY5UEhp6pyoZE5Qzdi8NYUcwWDEN2uBww8roF1C",
  "key19": "ANi2yswjmbCHCtHQPqUVTMx33XxbrjtKxzp9mpQAr7MshFy3dq38k4MyZ3AcaaiTqSvzBpC3Mr16umCnFXB6QsG",
  "key20": "sUpnDFvCRZE7K7MQMYMadFUWpVrFmhYCz1XdCjpVmAvqR1HJKBM3Beq8WfpTbg9DST6awyCE147ZpcF4mqr1pmc",
  "key21": "2FJQv9qomQuvHmgRsAj93s6NWcKQ79kizcBkKaHTZLqLrMJpSLN1UU7RBUUGpMYpC36Pjra8bDub6JwWfuJstDxu",
  "key22": "3mu3yNny7Z7raVvv27ARELDBq6xhFVjBPErogAs3Wms9v5ZNn149rTYC2EzAHyeJcFdsM6GnXNsKSHm8gmjSiWUr",
  "key23": "5mDYbNvSmo5dwSaAUpH7VUgjB9MPspYP7Yco1aAAonniwRXw16bCrjRhm81TefxshwprFupAnh57nGJJzmdqmqJA",
  "key24": "5sBWJvfb8L7Hfce5hKcbuSa8dhxzpRq4j6ib1AuL9cJ58wV9HKdbEUoNL2H8anQ4tMt9TTShTDcYaz7c6rfSrkPX",
  "key25": "3uvoFjFtMsbfaCzeY21Ap1DDs2S8rj9rsS3FmgZxkVenMusTnXpiEvMEbSXHTnev1ii3roDEphEiyC2NqnYh2NF4",
  "key26": "4KmM23Qwbf9VWxnYP8jj6SGprLkTxZwyKEMjNcJoV1xvGtZY3G4Q28Nd7iRbKVs7hMuCC59kSc1joiLXDRt3kKBD",
  "key27": "5MCKwUfLpddKQCejXGRAtRnxzd7g1taE4mWHYmkEJ7Uf3knWrtPMqrMgbZLQ5XhYFDN4jGwHCpFWqwAFhG9Um8hj",
  "key28": "3QoRuz8uLgLp4r2dbUeaYjwdgHYAQPHr8yj5XTuZhwxzm7LFLCgRMwKC6Wiz5fRNxPLNmpK5Hf7SdM6WP2qGuV6D",
  "key29": "3aXxEjzTBMH9wPwuyMgXBT4XifPzHrW2syaTtY288f8eWgsJGYk49SFjP6emv4spQ3xPFz3MnWYDksXtnTG3zWsP",
  "key30": "55C1izcUusYD4kjPgX62UhmfcBrHJm7Pa5GLLf5RYEwwk1qshDJU2bHiR5KPG7dRRBk2mfyqXkdK5F3bVdVZeFQd",
  "key31": "Vu3mtgnBfoDMevGUowphJsR9MC1UuVUHAVguVHKQDHZYMMrnDyp62pVRdJgbjEvmtgL9X4Kdd6rG8x3sVbkQkrq",
  "key32": "4x3AeXZEiwLtGAVtvzc436APy97wqADXLmgFudKByE4JpxWKSBTsE2fWhGHirCKbSYvj1yqyeoY3976Ax4croLQK",
  "key33": "3t2N5sZ1vn6GB5DQDu9bzwxSMcniANkqxpSPvM3eMJpQJjSnm4wbEZ1gkKgBLerwAh8hppivuUhctWKPhU9iRitD",
  "key34": "2zK1i8y7qgTFV6hg9HthRr59iYp4RtscxQ1Kk5NCbssRgAWpZLM5Hv6Gm69MU4NYUHrf5mxno6wKz4iqaKzXS4qZ",
  "key35": "mYRoJ55vmESzGTLV72prATxwCbohwJ7dCTgofNPhGjfLuYAgUZGKAYgCkVv1VJd6wf4yoHNzoiQtPD1i5HaJvhU",
  "key36": "MSYrhyFeQkW22cmoGcTr766fVVetb8PShKwjN8v5UXRE5yAhamBxf6WeysVQXcFAAUdA88T8Xy7WRechzU3ZJV1",
  "key37": "4t29CtbzhcT8JU39eKyMDh7NVxGtsUhi4PtRiMKLxF5CqCDqiLkvwzYzyjU818vNCpe4RM1SMMxD2Tmk6QfbWkeb",
  "key38": "4zmueD6Yfk8eudn34FkbuWXgHB9TDLSCSFE9Y4xa6g6u9ei7WuwuuYqJTH16EkNeZqSZxstDKaBixmCGBapnD7ne",
  "key39": "WJPWLV9DhqdVFtWwhc9wd9sgKn2am5xuN4H9erbseMavN7AftVhW4arY5Lvvv783VMk1JE1fAPjQzJJRKKhDtB3",
  "key40": "4eshUuqFG8CjxvcZxkLvs3dnHXrsErMqjrDzkruz12iBG38PhHV18yxmGLQjvrKEKQFUTuH4sQCjh2s343tWPzZa",
  "key41": "Wcwxu3s1UXYg8NAjiQ9Fkxt1yQjyBi495jSyrrtmB8bvmj8JqDxuV1TB91EivEnZFCVfcrAHTMbjipxFcCkgHLc",
  "key42": "5nAn5qNX9SZ1FuQLduJ9uJ2YnQh4iZKkxn11bEQcsyiFko6CMMPF8T5NWCznWMPXqEL6pNjr3oYR4DuztvXqYXu",
  "key43": "zovgkeStLcvE5Tp7LMXTdf3V7S8yRR9Vh7BEWBF64tgBEACEESwGrmhy7e3oYznyPLKsKWi4eHKsveavWKjBQDw"
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
