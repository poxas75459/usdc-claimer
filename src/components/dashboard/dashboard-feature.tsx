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
    "2Y7h6wchu6LRhQSBa9QKfVuvofsMxkLd8Ug8HQtrDxwCHKGepH5rFbsY1C2s89UFERLwtQtXiWiWjjWNBTSDqhey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56gMuTWbTcp2QJoBsAP7ygGAStpofpgYbuPFZHqLqgDjDDXDvrDSKmnkS4NMDhnxrTBmEMnTQ8R1qbBqdp9VcAXR",
  "key1": "265fNLahKnjMxuQNK7zkm2bCjhsjcw1kSE9e1xngNXJrdY2SJcbZfhbjB3oNa7tAewsg5hSnX1rXnVy4bAh3EtwF",
  "key2": "CWjGiHY5vsmLaWNjkzUUjRerujKM3oynkhXdS3XYFVRAmCFRk8PPt12ugExfMw3v67TjFmM1HPxF4AZ315PKnKe",
  "key3": "48PYp3ZRJUwXWyiRhHehgVgT5e968BQRvCbHN1pfAsVty27Upgqx6KfXUUsypDCNXAT3bFZ1YWG5VUSsbsacPncD",
  "key4": "2mhhRog8FiMrLfg89hr4sHobKuntQkM6JX2W89J6C93wrRE1eDmY3u2rwzRGrgsunPVi6MfYpz1vyLYPxJCJoASJ",
  "key5": "KWjVCn6hSXpDB7mz2xtZzveGdsaKefmq6Bt8kP5rT1SG4F5fWpVTG1Z8aKg19EuAAmyyd6zVgjgTgxhAVAwUBxm",
  "key6": "4ibsU9CF65KdCqpyFGczN4QCacqojqZjVYd7nFop3T9bYAXUXCp3inaK84QUbmkuN3nETCbZnzLvBtoJkHcU84CL",
  "key7": "oCQv5oToLzXUTJYicMg2SPttFV6cyouaWj6FKniRkSZftfBECXn21rWDmzzXS3jqXAEostuzJJYJCXKGSJBF4um",
  "key8": "599d1yzaSAunY2GoWbyapA5koDt1cV2u459RnPV1aXZBLEJG1cCB7thSeyWgcTAV2NnzD9ntgTxC5Y5UTQ2dCpYP",
  "key9": "5tbo1Z3sXHGwGyY7cnAVwUiFAr4mZEpNNJog2Ry8HNG1X3fXXeHfuojWKydg5Qzd5EVQ4opEGHAqS7Yxcy3mMJ9s",
  "key10": "4YSp4CcukNMsKqqiZHhYHgjip4KZMQAFBYjA2EgcDEHLWQd7wydhPaMPVT4JLGfDxkujFAxxLpgofLWYajHQALYE",
  "key11": "33oqD25YJTkmodsdi3uZf94cV96zhTnAzWbmUFB7zd9Y8x5cTzw4LypuoDrM5rPBkzoJBBMzpGsEfB8kDjMgX37t",
  "key12": "392u2vdBMueGSDogWbZrfiLVGLdxLSKDarmj4tJjbBcJrLvGDA3fR78Wrvj9MuCRvyCo9kqVCuiARLErPq4Z8a3a",
  "key13": "4LT1LDZLzD6nU7d6MAqg3XGiL7Ea7SZ3qRMgqLPPCmWXspeYcP6Q36gBhbhBLzjmbAM4oJ9mdTe8gjY6nJePrtoa",
  "key14": "39aLCEL2Ggp1YCRCWYHwcw26ofQahzfYW5FhJN1ekodnMRmKD2jnVSKfW6wAQNzgmHZyvqvgCE2b7s9sGAqpQNP",
  "key15": "4WDQRcfHEfQ4neENdQzseS4Yao44MEb5DFNMuz1fA8uShHgnkbgu6GkW1VPqrA2V6MUwXAdB6CcGpa8t6K9azb8",
  "key16": "3S9yH7fVJArbvL9cNd86f54Yy32FLhv39Mr3dj8hPxDdLwkbcCTWHRZNsxjMhWAHUxMJJUX1xo3guWuHmzcXkUWo",
  "key17": "54Db8gs1BPM57DSsgpJBMA1PKhhyoRbJQewKGfsXQGbvZmSh9f32Mk71TkT61mcNK7dfCF5GoLNwdA6Vv2UDs73V",
  "key18": "36d9wcUHjJdQeGR9e1ussCt2s6vXEdAcjeR1R91aRwu3kE4XRiAYNHs5XB9aDASDVh2RL8kWbS3bVJeLZ8hGMmHQ",
  "key19": "63WyU8V1NyTtRSPAPmK8iMN4qu6FU9RjQkJ1wwauEq3u1kxhrdW5FYqRLPP7JaCTmyvEcHyiiZYh38hcVRyx4gag",
  "key20": "5DcBuYqtq5NgbfWfEt79JCGx6LWL8iekAwdkoFiWWkXUB6X3RS2pyqDNNuDqwNHJjtYJKByXhcUk51A6eN8kvD1U",
  "key21": "3DtjoCRcB1CJxg7WcmKJev76vd5nCZ1HzrGVrcfxCTcqn8LTqg6nbJPHfp7f3TPZGfHtTKmopigvzA5TT12Yr2Ts",
  "key22": "4XgxXADaH3m59PBL5DwH1FqbdEKvvnrfcgPQDMeyh1MfecHLySD4FSYSJjou7LgrTewp3BWN6kMBKfskEEmYaFGw",
  "key23": "67mxdd5vDgbVM6SvZUAsTXmHFS6LuLsJ9oto2GvKxLTY9ZPWQYaay9vfmTsfKMzcEGJ8oz8qUC84HiD6nr16GDdU",
  "key24": "3admW5H76k8YpnPwW7YJ5UGhckQnPsgSJ3Dh41NMJsmgNjC1axX3YXNfg4crivNY48RgDN2Ez7o2os7Q2dsWfze5",
  "key25": "RE51fBoGCFm71ECDuR37hRZwkJpVZmmnaYeeXipEyfk4cMBxGtZrgvmVYsndPRFS1nD3c476ympqfS2ZZHMtrfZ",
  "key26": "kBz9f4WPHwPHLtzhLacBBB4WLyFhMJHuxaeAhoMTUUumSrAg5wwMrFmYVrYHTsBD4VpHGzdbVSMNJmm2zsxSnVw",
  "key27": "4t6Y3RHgGyYcr4QCjUgVEEKzXfNC3iKZQKNi2QJ7msFium3jhbj4HPgGteNZsTSAYFVitVJqDhd4N7MKAxQkFpC",
  "key28": "2PpTrd7v4ktb34uw5j8AGVGebKZgtuh7sF8vBuEMf3GqoPT9Z7sQAQghqDn7jbwPXX7TSppnHPsTBhcnVp2W8fBS",
  "key29": "35u9T1kN6qd6qdrDFBTmkcyzt3HDp7NetEbMXd2wNT8nwVsM54b76W95LP5fhNe6hModuRSKZXSo68gAkEgPLE3X",
  "key30": "3hurno1as7UfFemfCyit5fSigAUs8pYWdcu8BaSeyxKLsMWX8CSy61tzUdVuNygvv1HH2TKWCHeTh9rKWCrKUj2Z",
  "key31": "yNeNBrXqfCtg9miwC3yXdinuR1KT8Vh8rs1tTELDTkBQLvPLdrEEG2qqBWk2siRhVkvn4Q5RjE7kAUp9Lu9pzSL",
  "key32": "2JjxhrRMthyb24AvzfRy8WpN4YDP9j8t4hvNC5eAkc18XYmvhbTDf8boJYuDsJrNNw9MWNGWrTqjf9us2u2QdkkP",
  "key33": "5Dqcvq5Acv6To3vqyN9u9XTn8oMgp92GL3Caad6XtKm3XafBnQXyiyhLnhVD6qbV4Yx7m2VWpWrYT2T1c6Z7WjJU",
  "key34": "5k8vznYvhjt38ztmQm4ujgG8qZBFQfnZFQVY8siYvxhBpRVcmWp9VjNDtxkeqAtEgF5n9Vq3hs94cdedoj4RLUiK",
  "key35": "2HuwScPTgKXUbM4idr8bYCxKReanitHNgAs1fatHjeiojViSmMA6kWuvSQopbjdjuhAAkk91DxHrkPzgedFBmSqM",
  "key36": "4VRwcY4wDTz4ufYPkdfo9A2atNUDELLJJv9jZyrECCPBwTaeuiAMKUKyUBvK7kPE4a8fwKN8hmpkiZbGiVasvQZV",
  "key37": "36TzGx5J8LXHVP72bTjcadM5XA1GNWrg9ASJCPUatLqJ2PYbg4p6jw18ESvY7b2vqkXk1czC5GRFUHNq6fhiMspS",
  "key38": "5SYyaBUJ1q7vdiuSBktkzMQdnKpX5HJotJDmXngBo1r7kbaDq81x3JbLmKfnBUNVDt9TjTtCnzb88EKmhAYuxXGZ",
  "key39": "5ZZcMT5JSiuPKp3Ug9LUkVThyWvhf8DKAVEyY9eELdaAugVssJe9YbkJBUiMsn7qmSiBDjzwxvweW7oSDCRdSmBA",
  "key40": "5qAbyC4z1Y4vY38QoLS4g7wWkWtrKDVE4ndjBmF21f56sARSLVp2bsryKka8PrT4MLUHhzKb97DtiAcr51iwaStc",
  "key41": "y8mrbyZPov6vkRc9f5RLVGqZjjxWYXiVa4JscF9K8S8hsbkmzP1CmGCjy92Mcpo86TgQA9m1rW68rSG5y737nW7"
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
