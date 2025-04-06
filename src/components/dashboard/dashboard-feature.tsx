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
    "5Ayy44FRGkLagvVrkLSBEqP8zrMmUWrj5iSdqvMsGweK75hHrCPpxNAJ5ysBKUs8kEtB6NpnSKpe6m2EvSc58LH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ptAs8Qxr7vHygkDGHWpu37GZ3rDzRGC6aLMgn6o1PSuPHQyodJ3cVEepnMjGPYpvEhBQh6SaGHwW3ZF5usvzKdX",
  "key1": "32LUbLAT82f76zKPRZrmXQBgf8A1pSa2BckBU682ofy1n2QNLRxJGUYsYqwyqmFiSNPeuiqoPUaCCMnE2CzV36N4",
  "key2": "3vZn7zBcivwGW6iccMHSd171vohGrhzKM9xxJW6o5LuNDY46XGvcSj2FG1ankdrVhRbE2SFR5bGTD8okmfbwv4Pu",
  "key3": "2Gwo2MNG2sCxLeFhQpzdQF2RX1TuPrQTrzzdyggsm6L6vfXSx4o6zMoEAbikZ7btqXaymBkUbahmcuhB4DZYQkpV",
  "key4": "3cH3cDdFCXViSTRgJTHq5prcyyNq1xbthfnnCu15kAjAdT1sbXLQRj7ijf4RkrFGe6d3DWSV3zdk5vSCib7xVo4p",
  "key5": "5i4AWqXxPbbYraiMtzuVVynR5QELqiQhn7f8hr28NB2GzqxPQcqtRCZb8vqis3oY627nGNxSn8X3HgWQBqSpSMAx",
  "key6": "Egjf4QQLzc96zFjCbiEoh2iHmwHE2v7bTzjqZX5eS18rupwEXHGpt8qv6f3aHKxedgsWA2FJqWEqrsumkMxw14D",
  "key7": "5RL5d7T1vayqk46PoT1MUkzGWGyB4V4mexVG7Fgyu2n3psMeb4tzUT7iZjSetzijcgr1ufJiVf9ZsJXtKCKk5nN7",
  "key8": "4oRJ5PBGU8cY9QVEmrMoScgLpfgPmye566sDkGQ5zH3KGMtMYjvzfKnhyzdCFSELVEPQUFYaSfTXPwWpNcF2MDPE",
  "key9": "5j96Dv7SQLgTick3F8FXCY3L7kSddc63XeQNHQiU7irRDrEJ6Y66P93M87Cf9SfS2er52kJQmaWhReraxjQqFPT4",
  "key10": "3hT2EBS9xaVprxaF1PLFUHZMQKYHb6tap7McCdzEmCDxfqNBGBxfr16y15xD1d2xwYQ5bsV2HYonsiVjZmH8CYUB",
  "key11": "5hkKJfob1aszapiQRbrBzhgpeMsbqJakdKtan7rjv5LM2geoRF4HJJT2KirR1KDvFGVKzFyfYb6s8VTPSNWzXevu",
  "key12": "4Me5JEHRNmc7CoSLeKTWUiXRNz7w5XmkSr8VqzAvWdhWU9JDTmsMLjpfxssxgAYqoNh6R3Wr3N22BU8ym8yGR8jN",
  "key13": "8H3CfYsUxrRUqwj6V7oVHevAfUiWDjnJTVVpk6ztCT9Lgjobt4dX1Pi6H785hn3t3o8wtVPRvgzD8Kr6di32Uqp",
  "key14": "3W5WhJDoHybVmotUAuZSkJUC8XDMYv4oG3dMrAXGheV89wTxtbWoCf2suwSQ3pjuwHLdwamCuC1EDibPBgvTCTy2",
  "key15": "5ZA9yZpPqgU6z4mhYLSQBx48ini3SNiNdH4VmEPLQPjp5AtdbBKQz3gCrA55ZvNTrWMcPmHUQawzTQqvvLGo5mBA",
  "key16": "4mMHPVokxE9t17XfT8ju3WWodwuh9C2Ds6EwRVP6daRCLhWcvLuwQouVaDb6G2SrG8WCuAfcpbQKDNCWUCJgZora",
  "key17": "UBxt3aocjauycqMTwEdq4hJEWLR2YihwoSKbxusm1PKLDFjc3afFAiVRBNR5JdPrY9K51jvbyF7E24zWuuPP131",
  "key18": "PCEDcaBpdsWEHkQSFhiw1K3N6FVHyod4v3Uw2EF2hFZw3oeFWwZqF5xZB3csJXRZjVFPZdmYDQCLYJegkMB5uiQ",
  "key19": "31i7XfuamnRcmtNdR24boi6dTAu3wXCrgkZWu2dbZmkooKxjNQJKwAH2dhhnAoCGJhWwLBZBM5442R6NFDYneJPd",
  "key20": "2yrMTZEMYEcdJucUJsLZJCuVszpWJas3JS6GtH3sjecCDjswLttwrkAyBRwRPzibbaBofdDgs6g9pxXMtW4cs8Fn",
  "key21": "2qhQLVEbUDZiZ5nx8QL9wXEJ261vHXqd5ori5JzvpxWFmGQPmtPsCPfUpNNzA4yej13TgSvGfqf269Q1iE5Q2rpR",
  "key22": "3BZqQj2HttUAX8sSjUX5tGR2LAH7gTVH8hhFWGsEAWRK2Nq1Pt2mqRRmoeVHruWHiXyGfmWbNNjY1YYqN6hugw5i",
  "key23": "2b3aWjwW2jv143mJ91xuA9T1sBuzijReZdAqfezPfYc2wG1xPJb8ggVWKbssaFuJ9ovM45FYhn83mQr2wG1GJwMv",
  "key24": "34DGeGTVPvQfpsa7Q12yEdfGU3XM3H8WXQaFPMddduZThzr7a6Ng2Gbp7rvsD7GgqK5vhoJ5UvQneZKbE5wHvd4q",
  "key25": "22SQZEZxyvEnH3TNN6MaqB7bMrLqh1gB9S5gAwQ7exraNSpTiMYcmjXnoCLzsNfpwY3HnahsHE66FiiLPh3SxboY",
  "key26": "4oZxArodMbx4DUYX2kRzvETXg39yhk4tfzuLTbXwpthxeQb1CJf7tzQx6jM5PCSe2CdtMVR7sazLUujHnLKoD3X5",
  "key27": "2q67LG5XMb5NSxxuX9QvMAbEaFRK4VN6hLkVxfLQqndgY2nZoM5qDkQ2Kzb4NcFYxd7L26fi58X1o7TULgssCi2V",
  "key28": "5Bmuunz14f1TNUg2bKCXCbHWtxzTiGbv5pwCH4zjAag48kFBN9mocQDFad7r1qfs2fu5y4L7hZaocof18E9BVqoH",
  "key29": "21Ay3aewFELMdgMyzHu5HAy9d4mojebknrDhkWxm28esaqbcjB3NafsCTwzqYVPatuDqFV3qT8ZTZPofJakLmQBL",
  "key30": "2QDtounY4wyYv69eQDJzVqJGQ4c9QwzSGRGcpwgdgZ5q17FDGXyL6B9RRedAeWCUCkFdDddWQWzh64xX2tW4uRMS",
  "key31": "sVyAtTX3aURNZKgm6i87YVP3pbNgvpkrZGAYcGXKbRw9Vy5jdFNetKdDqptMrm2HsJYTr1sci4zhxuxQADdSkB8",
  "key32": "47aW3xZT6rq2WHsYFkwPSGxbeByNjETiGKFAKkc1F8E8V829tydRFZ9fsvSzKFwRs3Be3UGaxQrP3MKuTeyU1K37",
  "key33": "3vSTSi8ALMscRJjrgXWCy5AQK8msDwXDwb2jpAcdgWLawQpJRmc1iroHw948ruLkVhBzhZnHwcLoByykJYcFLEca",
  "key34": "2Bcaprr9d6sYZ73zetgmZY4vqF8epdxVYdr7Pin7DEVknqaiuiauw6hxXhgqpL5pv56UV2J6QaYbKGp3DnSK6brs",
  "key35": "2QQHZ2hJiWTxEGEu18XiFjFFuax5DJGGUKH4GaoQRMsF3SXF46f7tL8wC8ucGCHEJun8ptRAEtQihEAVsapngy7t",
  "key36": "34Mm9yN1qdvYVANwjNPbNRe5n7R8HdRpTbJtRnabxtnmS5XiCpq9ZrUt7JuQ8mHYFKf3bSrSQivgemX7visyswBq",
  "key37": "57WgqzVdbT17y6kKxsbg1iWTUx3Gbs9Up2TrVs5ozC8KyZD2TPiBQbygeqvNKZr52hKhC77mXof5gv8GcnYWChPg",
  "key38": "67nng2rNsg5E7n7GPR89TY8STHvWD9JjBaPsSRCFfaDqsxD2popicviPS5yDNPiR5WtNWcu8FcCiSZCFQpNRHR4j",
  "key39": "2VXLbr3QsNSSyKNn65yg4Zdy8w66GE4UWK2Heo9f7QvqxY3L41tSZqvi5gurhPEmEBscnxvGWojoJdS1jUqc88f6",
  "key40": "3KdrJmVzNmydrdm2gYuQmGcSYErdskRVt5NTLwjZ8hmVCDKrJYjwA9LsQnDp9URzSnQ7pcfKEEg9wiFE3bWWrzds",
  "key41": "4fhtKnkJMgy8y6aMhzE94836UjkiDBwiw34CaU62UChurRGUuby7UVyJYc76An8rYu5XzW3NdZWtEuKRmcUJGtqD",
  "key42": "64ZuQB9ieC6oDndArYdVagq9xm7ETKnK9gjyDfy1HDVt632QZLKkXcF46NtvUGPNPZtshL33kNEAJmaE3KwNnZ4h",
  "key43": "4PQCUB849EwAXgcwc2bP8CxbaKpwt37H87jnSYdP7sNuvQVsi979qftHArM3x1Q98YKJzeX4vMyfxuSv1b5ypxkL"
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
