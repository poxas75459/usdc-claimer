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
    "4Q8nWWnH3Gpa9GjNtKg7iRyZBoRMjsLeneCzQi4PYAeqCvT76K98m5PcH4VsyH9iMnd1hPqbFJxRfZNBVGJYSria"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HYF3411jkuyA6phayXj4N4X6cFb5AUeusVX2VttT2hqmoafyHYs3HkHPNTXsNZmPgrqTb6YALfhieBGDq9XmfJk",
  "key1": "5tthX3QRbL3SbdRF2oPrjaJjG8G8seNwZS8kBepAq3X83aXdA3migjrQj2YmUZaRUmKadhmZs5ZvmBDisGXYfJUd",
  "key2": "5bUir6qE39LLZqEtJJQFReA96tkfZghA9wZW5tz1xRqVivzUt1CmVQgLCFaqn2Da2NaxiuijUHCpCkZS5yxLg75k",
  "key3": "4fYtMQUngSs4uXJSiXHBzCdNSSzYdoyppfaGLvXHBiBvwJptsTtgScopUAaqdivAVkvK78ZKgMZprSWd1qY65j2n",
  "key4": "MA2TrAYvcA2eHuo7ebq3Wu1aK5bmAnrAmek8wVV8maGiRLJcnGLBEaH1Xg9bCtLqns6wFDT9LK9b5tqdVXR2TFQ",
  "key5": "4NZhi11VTBtcMF79RjKdRCNbbQcDGw52CRgi1xG7snV2BYL8H99gfT3e23peiW4QvQpLzmGA7ffqQ2ugrjUGQNm5",
  "key6": "3VDMZdQN7LS4Fxfq46i4CaYVp8QVBu18grokd6yicbP1vUU2Cwk8biPYsQ9mPGksRdA9dv3qxmFBjzd5s2tp4vCP",
  "key7": "3qmjpVcgXgAJ8NBp9SmP2sCGP8y1wiNKPo5nKVn9w1DcgegaHEyGmo9kSYTVBR36333Vz8Exf842JGMEb8Hf4Ygf",
  "key8": "58nFPEAKL8EJ7nbfM5UxCCfXSTsfaLzuANL8YFEvipquunQDpAxn44MNRmHTKAvUL1ntTjZhFXB9VskHBfjKzYdw",
  "key9": "2hDfApjajkk6rqCo1qHz1H4RA14opQjx9HtmN2FudgLLgGsUGQFCnes9zC9qZTgnUopKyoJFBXsoDCFABX9Jo2om",
  "key10": "5ufwymF1rKqrXRztFGje1jZf4sjEnH9PZU8FvUexKVuvq3ZdCzdVD4nGV8bWZ58trQK79meK1kRmDjQcjVNbziN8",
  "key11": "5XRJyKqSFYN7WZ3cVXJj2E5XFicXw7L3jQtVqjYoMoarjBPniooMkKtTvT4c8Dh6UMTFL762KgdMGT3PQQJg9twq",
  "key12": "4XTcy9k8x2tA7GLofar3QSpZZJXxhXyGUg1u4pzYaQqupAjnAbvNqU12JDo2WYW77fbkifZvztttw3PtZva5y7K2",
  "key13": "3JcYikKv96KyJcd4ooNx1sNZ24hA6o3chgv8yTbPuAw2L67ChqjJAoTofkbLZa5h7r5opY24RodhN81TvqyxS7sV",
  "key14": "5zFezxbThWxqtMnfkt9RK4aHnc47992vwAQYizNwdjFPmr5sJLuk4UvJQxHxYny6kr13RnroNZQMMrtwBNwF672q",
  "key15": "5jvxgBmuxXHBpiyChjYhnc2qRvNigtAQGfkjW3hhbpvezqBzx8QPnbk5fYtqRPSfymZvhKbJJA9TKtxWPa1Gy556",
  "key16": "3Wn9YicCW4PrkPoQGwtWnYbS3YTCrCzMcGCpRcu5tXeCFSgDE99SNREiniF4EhR9U73bXgRdjgbAiVovTfPXmX7K",
  "key17": "2wMceFXsCAfVN2gC4WeBnNF7n1NKTzdRws5LhrpQ5nSxxubLmaXQkCyW6es4RRc8gdYdpkJFHBLwJjTyVgAe3EKA",
  "key18": "5GKCLUoMmvw4m3L6KZenGNPefqdC39nc1smcnC7NhiUdRDySAXDKTB9773aZVdiRRawQ7pVWXeqQGXNCT6dMXWPH",
  "key19": "5F5TQpDnha5TrkUKDiZRVcGgBqZ4yZDqyo8YXQ6tMRi8cfGTAeBn4qy56GH41AHYDaarwtBb5YQxuCcixVAHqSyf",
  "key20": "67GVqNHfFAcvpBb2ocb2pDXgaF8HaRTuYNycbtsbNkxvGg69tafBgejKBePYn9mHxpGxFFzVdx3tgkV7Pf68vvVc",
  "key21": "4yU9bPL5Po4p74icG8tRT93ydcZjpSFuEJ66miULRuRGZyX3gkVSdD4rihQCmpspxFgYRDF4HrWtkYL4t1Qgk58b",
  "key22": "5VAriXb22Q3zevUDnxybvs6xshV1QkttiQHSvbXy3rNkCmi9YrdaXXuaZpuHmzsmXsKJuDaXA3QCKv2uYwoGSojf",
  "key23": "3pv5uzFFynrsjZEeMM1fBb1Dd8cDg2WM8oUEdZ91n46JvVy8H8zrH6F3KFbYxU5JGDkNbEXg9FCAQZDNnp2RJutm",
  "key24": "3KHhmR8rfRwP5RyXbSFW7UYs93s1Fw3Wdh9MJwe2YjLAAPfKNA3foBWaqxmFFs4ysGrGEpWTESLyq52ajJKvEM15",
  "key25": "2CZvQYTNXdsCoEbwsJgvPkqkJnJsb3uf2eqjaXSRUcNk9RBoBpQfKUbSnTfvLGT5CbkUuUuBj2DgQFaaQXj8jnC6",
  "key26": "4FEmdsqvB8A7DTF7cDYUr5NYVxKoZFYdzJh3psoHjucAWryJ6GnrWUbgxaMG3hJHJPcsNBajxMHT3vBGM6UiGSZa",
  "key27": "2eUugQLQPjksTo5chb9A7sxLMkfVYGy5ZrvH8Qf898nNMDdeoD1LEC2Zhj7JXtW81M1QLEyD253rCZjAoHXXsd3Q",
  "key28": "FibmzD3FrpqEwnJyPspUGYSCYcEVZt4QZbx8kCnfM4yV8tUEg1QpJq4JJqr4JvJ8XBfcUe8PAZwLqSDAdiRLHVZ",
  "key29": "5ZDe6QQzZnczkTot2DtZDsXHcRQHeav2AXrsL5U8D8TNzNX7uusV7o7chW1ya9pDZxtg9pRsr1EcARiz9wB996UV",
  "key30": "3pyZtzA8iYyFeudZbBJrZxt7sCPdiyn5Vh5bbgsSwcPE2ZcPekHPwAp3FQa5yiYX3KCz2vuNrYZ6ug4PyoaW638Z",
  "key31": "43dwxxvn2PNGV9qqpw2SY8QyMM8DFFreAFnE6dnVyCr2DTtnUFow6jCNDu3AhJXUmbRByFAYTeyyGqoeAXCMNqza",
  "key32": "22F7juepp6YD7HMUWmCGoMgUKG4UzvUwmopVfmFfkdGeF6TWSfx2SxkrVfkzsEppDTeBbVTdKhY3YtwjC6RMx4Sv",
  "key33": "37wppfPtDG1npfCsdJRrejVG2SM5o9A92TSmb2EEuW9dTCEo3AZqqLarg5PtF6LKw8rFGwMbLkUf4JHtwpUT7gyj",
  "key34": "3ken83FCeBAonQKuwmoDa2MkFZQWp7DBmWFJvrjPGrwCURvBMAQvJLnJAoMwsFRjRAn2i9v9WSWLMzLbFFH3Sj42",
  "key35": "624UXakpK6fC5y6kWT8pRVzDynjif7Sw18e1GSWuybVSmbVKhRgmTBDjkRGjRpL8hV8HwTpyCpCWZ8geEMxa7mPm",
  "key36": "3DMucuzmgbR53XG15ypnQWHTafkeb8VVgSHppsc15kJMsDs8Apwzrzz8zQhMx7NMvhdR18fyAUdKkxuAg8PSfGgH",
  "key37": "3xcu4nEFdANAJy2wikwkzgqNnsU4pdhfuELDkqDcNi6LgevBVSqL2gMTQAZvNnyBs2HrW89gwsnWVfMCQa5Qm9qp",
  "key38": "3oEapBhEPdZEbtwyq7GLQmrNh7htYqyrFmyaARS5j9xXazEEqcWeaXi825Cy4jQ4ackvr6D9AzRdVMhoNp3Pwjw1"
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
