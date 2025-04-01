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
    "31X9YCysHGEysDekTUXtbDK7HJZNzUXyrky6HSvkRdte6Qs2gYFmBsHS6toBnFyYUxDbTiQzqq8LRnjbyUt3SHCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SCAfRW63AwCrV4ww1rFusAN5ZbvA8ApKXoakgsLfSRfMaTmkHAyGtP4mPZTqw7hasmX8Fhbcgu7sP7KVQDfZsNm",
  "key1": "5hrPkxnBnafZwEHiU672PTdaWBoEB53Pq9p9sGS5EvdHEM9XhnDWifkMjY3tb4wFSD6mPuTcqsnAqFErAdFwSdra",
  "key2": "2QXzT3ETqyQC8qTdRN3u9E4gByDkEbCmpGJD2PxCtmB34nKubKh2e4kLYm2chEygkFpW5hdHmkRQvRC92ioa4rbL",
  "key3": "2iup75EQuEF3yL6E8fJiTmCk5sswrx8ZDoceX5NCFQYCUmSeTUMkjqqXLps5CTTRUPxEaaEeCuX4SP79boVU993d",
  "key4": "77n5tkkpqFicRCMRYbvnYr57uyTAmbij6wd45jZmCbYRMtMFgjeokzfeMYgvxzF17uQbwoSqbrummGKMnYEBeJt",
  "key5": "3Ni6D2xdN5ExUWfAjtfrTf74SHXWy5N95HctZgsgJnVsnpwwkXD9TPZ8EQMZyc95tjs9s4uEje9CGYBF6jrH8aGi",
  "key6": "3AKJEFndtEnqYDZ2Xn69u4qP6XinZxtuveZvw6UrxrzyyfUoUyBPfLFSbtSczvjijFyzE7cqMG2zBrGezMtnVPrN",
  "key7": "5RByQGB4NmZkoaSEumxsinEKyGjJi1HuKQPX1DAoZQMAKC8GcWXmaMVh2fRA4WAFR7QMiJGUZrnRscAJrgBiar1T",
  "key8": "2HBr32YGiL75qEzsMjGemPEKNLkHBmFCQ2ZP2kf9TnizCFbHFFwNEo1Sv7ahL7kazW2RZVVMAE9HAH34YLTYVDjb",
  "key9": "2s2EFMZJR5F2dfH3gauBXoaFQFM1gsVCnCcv3nmdwntbZ6vvmwFS95xpiDbPt3EKFaHYq15ggyoCGfWxivM4e3YL",
  "key10": "4fQGSEy6eNDsfUpfi3sGM21QN58sGiybjs8pmVFpeMWKdZvKHUbKo6ecB9i9MM1NBToS4X39t4e3MUyppVeDXthU",
  "key11": "2y8fGs4EqwutB4gfD2FVLQUx3nxSCBktjFYQwe8ufa17kaj4NgXnx5AAhDA5KNcGPcZ2gyszSY3zWNL8aAx5T12V",
  "key12": "3YK2XfqCN4WH17G8iehUuqSZrkBJRXxpkQhSNLnZryjx1EtVFd3CWUbPrLQxTbkZQaD22pCnQFatvTUTAP7jjTak",
  "key13": "3oxUe3T61f3JaPYtcorSiK2Vso6FuM12f9JDQRwiYBeHFrsRpcxyLtzuMUBmeNr48ZnWCdd7297ZNPJmtpss3v1Y",
  "key14": "4kY7rLphVLjEySFbbRih7s95d4oKYAc69dkCrYrsxKX4X5LGBzzyutVsT8dTvEytVAQtsZLsixxB4PBDjTtaGT1B",
  "key15": "H6V75naEQAFM3xLK84LGLBgihGBpF4MVWg1L25tVDQV5LWZ8DHBsutNHwpY8d8135m6MUVvx2FXWmmTmP7i4DTP",
  "key16": "5HjGPCBWg9ggtZ6qcqAbjeUGZ1rFPmq3ZaXSxnqc9ysYduW5VVeuT8C9HrHCMuqbfPeSEi6QxhXZ8vJVEhbJYTvs",
  "key17": "5PXB8Fmyu69hhXgLBCfV2jKQUeRC7aMbZ72BCvFLCtLr3Fj1zJM4irZvR1EuuKSuFkyKoAN6TqCSVVTHaU6qpfiy",
  "key18": "2tNAMVg4wRgWWi7FUzZt8H5GXgjt888kJArK9qEH2jngBjByUDEffkMXAMRCqCkpwdfbb3kEAZVZoLpAixq4vnYe",
  "key19": "4WmzEnDr92A5aEL4f6sdGtRYrFoYKSrih5bL2EWwVtU6XetiYwXQMrpANzA25EDEDWK4KX8oATpWaWHBhu3pVSXV",
  "key20": "2CBRFY7obY2xaB7CCPYLsA93kaZ537tb1YkN8sutuAvueLWW4YjQSbzrwL3FmY9XJssw2mS3SUncw4e43rWAAudj",
  "key21": "hRM77MYaEUYcH9ehSLAusa1WqrQ6nRTe3KpohQUcKho7z9aYc4d7JJ4EJ3XLHN9fVMnss7pPLSk69Sv1QL27VJ8",
  "key22": "3NwMj1d9mFLmUwUaGurE6s8oKpXUkr16gY8qTaDu1aoHAmUSAVqAj38TLZyG2LcU3jkFpqHPAcwbGVPsK5X2U56E",
  "key23": "2cfcv5PyGhC1uoswHpD6wqGb8BqQ93LyySCK5DeTcBDn31iQ392vcpSKKLdEf5nXgZfLF8Sd6aUQKfXXaviD31Ms",
  "key24": "4b6rG2kfC7gYAmBGYsSYLfHHkrMR5BpmXqMG1nzXAjUWRoQJZXoEmuu8nSbksgeb2ovNABSiwxKUoTTg6ZUfmMN4",
  "key25": "4BeveFM7pYwbLSDL2vgR6xwgh3TwcD2JcnfShNtgGaduXJaAnmNsvUNfkvbrCuHgZQjWat9d6BAt2JKekAT2mnXz",
  "key26": "4sDrbBdv218ahrkk31jUKxeevbdZf3WDgfdNPr5cHtoyaM97eJ37Spomu5SXyF1sa9sfwgHnaxjrZMKAYDApDFog",
  "key27": "2kasX4UC1pbTKCGtieA2MYGr3L5a1jQVoYABHtSaoXP8aKLezf6TvRgzNUQoLJCWyWeg3kW8bg4iWSbqzp2yZ2Mq",
  "key28": "3AY7xLs3y9wWecj3vJ7P8992V75e3amyARuEsgxqKDDEaSA3By4pdiPtVWX1w98muxnfobXzCSHFhAyebYGYJCfA",
  "key29": "4teqY6LcpfvGwsQvTZqqBeZ9sVMkQ1YVNmZvkUJfpD6cZBkQMbq1EvF1AEY7m7sy6eV3jEMzEiros3erMmDHfTJ1",
  "key30": "4WLZFzPCRzubTHYajMwdF8L5rZwjz3fkG92b1yLkfSA32AwieRPn6t9xmwEejDy9kGApzcGbrQe5CGKwWW4J5zdN",
  "key31": "2KomZfpygDsGaz1oXqVzS13gbPHZfkBw3F2wQ27KUmrsd91RoE2Ev95TERkgWGaDGUGpKWDTb7VPoTPAj9sL6Ey2",
  "key32": "3XBUuY1MsruAyvYaPSg7zFtQA7TB5r2Zg6RpB1WqfcUs2Q2eTj9CFv9cxhT8yctyNUboNUwF8LHgPprJt5QcFdXY",
  "key33": "2wcnVak53hmc4ytRp1WtkJm3eRQnA2dA4aJc9KfhSr3upTUymGBEoAiFrAfEYHLjC6uCSUSxzGCs56ui5v1S9NNe",
  "key34": "4gxRN7Txf5XP1GaPCZXxBv1SJY9xMpYZxbpnYoVbR2KDL4hoYvFzTGY1kev9Ea5N8ss5EsaGgCWhyDhfU5P819rL",
  "key35": "46JxhhkymPqTNW2D2fKUqQDRDcfGQowRcHsHtLjQppSJVdBgymdW8CzHkr4WYCxGVM83EkTy3Ktqzd7mHSPXskfU",
  "key36": "2kyafiMw5skBDwQCnrojp4sEqkJepHTttVVaKzwqBiy3YnujNdHcsDnnUYwHm9Cu3qdFVs6cSG3qxKYFCVL45UuZ",
  "key37": "2hmAhcCLzgpvQWFqmK8Y8XuKerRJChEdtuT3PjSSpSE7dKPdLJKekR3Tiq95XXGpZfEBxoeEjqhwawATUEFbo6pS",
  "key38": "2GhjML4EwFvkZFkgb87JnRK3wVzrVprAccEcmMbwSRa2KtQmSXG38ovFaCBHKanu7cXv9fLpGP3eGxPdXF9BiNoe",
  "key39": "JdEspgh4vD9efsCLHcNFnkrkiD8owK7Q5GhgUTc8WLzUoEmwV4GFKNT3MM9tv4h6ZzpR1ZyQDmZL6FaCDYaDDsV",
  "key40": "EHu624aMR4243krMHb6XqXu6kajnnbvjKH9fUCYyTJrw9xzqeF3hpkvCV7Vb8q4nJYn5a4Qw53i2a7ADfysnLXu",
  "key41": "76c2ZeZieGQhDsUDZyZgEw1ASWASBDsA23D7aBk2zgtqiCsah6xhMXPzwqpHkFaFdhvJf1JDskXH8SkSNHpaJKH",
  "key42": "2whXZUpEXHZWqLreWG7YD89A2Cr4z5JXuqASYPWXJwqVPYviS4PbfWvJMvR4xkfyter4MNbGVhi9YAEgja1GtYcB",
  "key43": "5dJnZjZHLEZLPrbNRiJDYBZ7AGjkLrNnPJMXmQrJGRUMZwmU6eHkSRZQRCknDGJz4JVZRBb2qw1KBYyPev3au8xv",
  "key44": "aMzVR6vqvKQaGTt1JxEY4AfYCLseHFm5za3gDcwKfTMkvtLVaw8X8xqHjvwRWfNWxhtmws4MSWXuLfHKfYor5ii",
  "key45": "2C7SpX6fEdKTAHis7jHfMnaXnsBdfNtqSzK6sdVoZfB3dXgo1iyPkHMYdSMXSQ35626M2ovfdHm93kobYXXhsGQ1",
  "key46": "4RLVYM2xrB8L1PrneDhPaxd5AQL9T8RcemLTJyeAta2H8ywDaGR9ZvJPyGSv9amjowGUB1vmiwGzGXRHD3t2xsk",
  "key47": "3KDdm8QpAtP4utSZ1zqvoNY49kPUDr1eJTktytz97hXUdaEkaMZgDtqp3JJMS1StE5WSRD85TozXztkphCSvhhQU"
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
