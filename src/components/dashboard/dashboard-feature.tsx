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
    "3iDsCu9QEMUNLuQTGkQ8iLSkU9TNM5snPVPgD64qKzfnwTqmVkrHNsyQTKKPE7CwERWzvSmogEV3h71XHeqYmKiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WZ3FN417piY47Xe2uMtdas4j7tAnYNKywetPKgn4wZLNtPfTqenns5FDf3UBdnSXmy1xwCSgg695Vr6R4yZX4cb",
  "key1": "3EPQiVTo92dkhi8ii1QFymgc5Ymb3jcjJnqKH8WbGQSHcjErqX85HjSawXJzyGS2sPP4pniL4wjXKXQ3WfPTkjCd",
  "key2": "24tXfc1B8knCAjRUhgTyL1hRyHk8P3oJQz7v6GSNqXuhgkX5tTsLRbYejNnXRNw2poDPebtf2Nb4NkUc27s9ZLkJ",
  "key3": "3JtNQRQTpKZVG2NqWGqyeisFtAs9DHUr7qXnKCBUxgtgBPHci2LPnSsQSrP3rtkEXZFeLoMS4jWvFhMDBK9evP2H",
  "key4": "4xR5KSGS3Z9b4UudgBBTuR32jXo2a2Hh9ueU5jooJZioZDiR2JGWuP2eND7Q6Uk6pQcsoGgGkZEMoN955xwrsc1o",
  "key5": "4AUPUnZB4TY7RNTACeBtk22oqUDdB7z1eEdH4RNpH4WhfcifmmLcmkEFkfhgjKTtGYHUK71PzyNR277VB1XJ8J31",
  "key6": "4G1czJcvhe82KS3PDoCKN97wcvcdkpmi4PuHwoc59oKCvjXPv1Jbq1ukFWT6AMgfr8oHQU7dYKweU1g6qrLeLY1i",
  "key7": "5oTpTviUGTF6jNjHMUvvtuX5RejsBZw52K5TixuX1eHtSKe1kaimBMneqP5D8jNnJj49jFy51NFyK9SA5wDCXdSX",
  "key8": "52KFH6YFinymcquKMhsVhx28MTz36FvXRbmgseSWoyC9XYnjAkszVALYeyG8PArDdCLkxocuXCg8FbZMMDCJxbfd",
  "key9": "64txanMoRQbrjvDN45JjnBq29j2CQp7tsfKBdZoMYfWPRWVhSxc2LTZgKdnggTvb3NjZT6TTWW16JdgbYBM2TrQJ",
  "key10": "21hMNrk4n2ywLoDkkW65fJzCSrTsWDfNJvmPgwNegqoxYMMxRt7V2FRKPve6ezKFtTta2V9g353gx3sB8ywjRmHG",
  "key11": "5bAjB8V7whgimCVYqEu4neo2h2xMUD68oUiLHwrZSNkSrUJeWxxnA3so6Ywt4yARKBFZcgyjJTYQicZgBdjRYVqN",
  "key12": "47QKC8iK1okt1t9tFgsDCyrWpqGgnNYYcvufDvgVYDJJXVQW1eNhdbThKwD4rTV75fTrj4NwVMAcBVP4rLj7avfm",
  "key13": "4RNTUjuV97KFC7WYp7pHUDfkNdfoEKkTcVKUVpgHPdhouawRwx3MRC6ZBzWS4pTFs7JmfqVdVYZ7JCgks9pWdVtw",
  "key14": "4DvoE9CiCS5LpUM8MQnRFuwGFUsH1UepSxeQJwaZq2RKcNz9tVmcyPcYRnbcNeHANerHu9SYyK2pSMTosjUL1Mkz",
  "key15": "4heeAgkpJo53ddiFq6a82bsafmx8yPW7XNpjCEs2gH3bmG1iHNN5LYaVFWMPcaspm97oPcNniPZdBfrohRE9tFKv",
  "key16": "rJAT2ZLyZFA1xCG9GCCogwt5zfeE32CPBGmRkQJxaUauqPYRdNi2gnPvzZM13oTCVVCokhoE4dgR3W4QnQZojBG",
  "key17": "4QEBvDQv2QbiNUpgvd9Bo8dZUJyhBi4s8Jjbm1u479o6Rs3rnYgatiQrpCvXqmmCRVz3vvT6Jr4EreRs8dSpk3x",
  "key18": "4tUsra7mwPJ9pdwugf6wMygCJ6uoth5a8zKAECLX9ChobmdVZKNxUwqEDbJeWe8kfoVTtnut8Cnq7TF8Pp5eM66a",
  "key19": "25zeVVmRwYK69j62PPeparuucKiA5h8uKZBDGE7Lii3qx5Zv2FBJVtqPhj8DApkkhHcPW6V5DEv2XW6oFMPE8K1M",
  "key20": "5FRUY8AJ1bUegUSsjUvryT7qnF2BuCgSYrnwfUbMTSmRGY6bVzeCB95KG631r2byWU4bnxXzP29cT2Wm7Ve4SQpP",
  "key21": "32YEtPxy4c7PM4XsQx1CJU5WMaau5FZ2s3BBKsibVbdxEzAqgAcFMAg8zXCDupewPPrDummbzp67HNtB1qR2rM5V",
  "key22": "4S1eX56rLs2MzTxQyRZDuCWbZdauqso99oDaeSgH7eEBQgLMR9D8Bv3rqofvRt2pV8nhir4dxGS5z1dpiT9wCSGn",
  "key23": "2jQEY9RYrcuQj6XZqqXB7JetDCWorU6ktoqA3NWryTdnVXL9rVqMrkBwWYKrpRirL4KNHYBTgqzSGt48CjM3rgYg",
  "key24": "5NmscuYy2pQx1ZcZfjWq47jRMyqZpiRXv4tY4cQRKkfg2S7gaoAs9CLjHuNYe1VN9opaipHCBh5PNT5FC7cqkmzX",
  "key25": "2CggGtib1cvqmYDcFKu5pDCdUnHEH7A145vUBswG7TZycda86EvozvzKUuHMVSZHFS1yPJv4yg4AZ5zgFvBbW2vj",
  "key26": "2fFRUivHpz3hUMajS8wFJ9oeFNzcKBciCyFh8HC1tuM88JVqUf9qmJxe39EgSe4DwffKeKNFSHBd4WqcyFyVG31L",
  "key27": "53dqyK36GA38vuPdxo4mG4EFUnjvmFDw1LDSb4dyg7fN4vh9WFU1LcJovRZodcoX9j9Jtk4UrNqpmXW4JkCTA8LR",
  "key28": "5ikAPCcnuSDa7cSni81nnHBGEmTkVD9jNw1fyuWbZ8xSe6JDCSxzCaiY2jX2Q9Wr1XPrvxmZu48gs1cDPSkCUoPf",
  "key29": "4AM4BmbPqPspRQqM7ieuzxtH7WRZkzrenWwRpPrcKTGBaRzd4RVZYdFbs5wLKoSP6rx7jem6rxdDsmG6M9MFSQzW",
  "key30": "4a4bsVvpj9s74oBjRWYXd1JYdoeDPsLxVKeWKb6B8eCmw4Vb5GM85jTcsgLcxFmQnH8msdHYZHosMgcdiuWNL6MK",
  "key31": "2x1EKS4SDJREXrB3ZPjatngnDmDDrnqqBvhZtMgGEtDTbq4vcvMiTmzUCRpzy9J23YrBGZ6PPiczTk8RkWrX1ZyT",
  "key32": "3rmRrBw9PZU8As8Bxu54KqcHnD8WgtHyoKXWrWXv7EiK7TMN29nhJhYkjm6R2U1cvqGEWGZPKaCViDUdXrPoPg6p",
  "key33": "4tMep5WLyAojMZJ8gtFpQjkagPYitAXqgGa4ui49Fg9YQyTpNRcaJQfg4WmoVSWNqxq76YqwWnuzWtdVJ5cqVUgw",
  "key34": "2zQi18Hi1ZjmM51HptyvMYqgMVLsYgzN98QyTxgne2LK2pg9TpeiMcPHS8zEeKBJegPKuDk3cLiq58Kn1GggACVA",
  "key35": "5WfsUoWoSNf2Hn4hweWca9BSqY4sK9YwRVrrEM6YxHaTgXVFJW7HRSKHAptqZsaihPL2p4P1FwN9Pqcg1FNPLDw",
  "key36": "PvW79EAuJXL6mYW5nuFogRdHWZnyXJmrH2rp6hgXwBYB6HoAYkoPuAsZR11EN4Fon69P24TUsn3yG4GD8opKCFv",
  "key37": "3udkWXE1F8iYCiSs5Vgga41x4joFbnd7et4mBYiv3n36qkrPjkXjybq1T9eZXvZ49oeTjZt6vPQpNSXb1La2PHi5",
  "key38": "3GNg7ZJz2zi7MX3549yKgHQtyo3DEjBm7VJNwVBWR3718uS1C2ET8gS7xy5iPuxtEWhMV8M9B8rjUpEha36zTDxc",
  "key39": "5JaK4xFRPMDzC1FQGiHMUhphUETy6XQEQGtwUwiHW59UKQuqrA35Ay5LihLU8s1SL6c4rR2YSkh19r5pYzmv253o",
  "key40": "2Kt4NjYtQ9shtzGPWqBmNtGwTScTV2zTupHjsthSj7kujhfP7SXMeAe3jWid59uTE7dNwbdGeUVtH5jFCAHzRPu6",
  "key41": "4zmbj3Aep2NnR4mPiNDHrfAjGtp2ttD8V8ZNbwFeoGoJR91QYaWh85N3P5qoB1ZfTCk2xQ5W55DbpkFfSZN5Kqwn",
  "key42": "3eZxJEUQRoTQ1iwK5BTsoBmMT35vW6VRuY6JVyF9DvPPUwr1qrbsM7KzLgQ1xHmit9S91Qe3zdg8RzXq3AFkxjmP",
  "key43": "4vZJq1T4ELDxB5crPLtHYbsC1gStJYairbcui9ruD5k3bPujtkMeoa9cYRUyU8EobRTExJD4yb29e5vejJtFH36a"
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
