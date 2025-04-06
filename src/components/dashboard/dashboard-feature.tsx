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
    "2fJC4Admwqk8utjk5baMQ7MMRpiA52dNFkPrMWAsBiXJ64LiV7QJAW6KobB81a7AkSA9b466aTFYi57xD4HwKtmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z3dDmk7CadjYbGC8AshvuR3mw6vsnu9ARhVTEh5LgJPygbGr3859SdPa9E41UtPgBNNhrFEyRHuCoUZLr9KU4iE",
  "key1": "3k1o8XsjMdxk6kE9j6wtqxDZw7bgUezYr2dothTDP99rwY8yQ4sGz8bvwHcBvf61dSuyK7Nq2V71ERzzvT5vsw6Y",
  "key2": "JGeoW7fRtzzzWBWPsBGRGLZNdXcd4PqQEQVrT69o7aB7aWn2RKVmsW4Jrxr8JVkrpB4ctwBJb3qqSD4jD982WXf",
  "key3": "3PnK8p4bJUTaTGdRDxdD7K3ypqpy9kFpAJs5jBJKaVsijgiAHBWBFQqimHk2EyvZ3E9NcaTbuRLFSxxeFLq7iFgv",
  "key4": "27EQ4gdynXA9g3JWG3SciJQ6hR3pQMBctZ4p8ptnvWGNoTZVZnVdzSnuWcPQR2T5X9GqjfNem8SaR6LyA2HifGy3",
  "key5": "4dqHgatrokVHv3HgDQbv2DVgrNXWBECKNBt5Aji5LPbeX6uPQa4P4EL3tMmoFLSKzFCgeq65r9nRy41CeSKTWfXm",
  "key6": "4Q3ErUUQXnmSN4PyuBbF3uTNT1nMjY4MAWeEWyxGzQSfqTL1VtZE55rgX8GxcfBw15mcBYuK8mTQTD6b7j2caH8C",
  "key7": "5FeReTV2kE3uimx7YCYZg8Zgh2KCkwEzXdvK8BVBCUkmdD9ShC5aLnAiDc4hJ4RHGd3TGDxYk6v1xtvKHjfPixEw",
  "key8": "4WTpWRP27TrFbuYzKpXkmKi7o9bioMY594snSnv4zQhsDjB5KwfQA9Tg9XBpTemswMRNqtPaL2zk5c8itbifZxmM",
  "key9": "Czg7rQggD3eKdNZT1z6y5YPwK5Wag2pvx3mEn2GxtjKizB1c27s1ctDJUPYswzcgp46ZDjLZ8j69Tp6ctjneSY6",
  "key10": "5MYhChyxUBVtANXbcbS2nwB5kvcA1muYE4J778L3upYcR3yymxGMQWhQjBad6ovECToAjN77euod9aRP85TKYmhg",
  "key11": "2ji7up7y4xD3SxZpxpqYAH4JhHuXaBFFZzafRyp99egcptsH3cKN5GMrWrqSj9DRNb3AR6qSSXSKQKwX4Yjhinzx",
  "key12": "66SA9eHgZjADQLmiLyauvMBEYsQBbZZWZHucms4Vi7nNDA2Ate3WorL45gAe5Tcmb2SRZSBna6qisxpC7SDvgoSs",
  "key13": "Hsgao1Dj2wDSucPhrpgHEJnPKqnDg5LTnnHcKa5PrY9bChNZTsh7ZCx6tj6jgrosRhkB4cpZkHtgSRKXhZsxgwQ",
  "key14": "22GzLzsRih3QdgVVxmfsrww6qxrnUV12xJobexZniDhewijwzi2PUusEKMDFihr9oUcSttqrybKucL7Tj4LTKsrY",
  "key15": "3jmfoP81EAo2Bcz8kzfYVxzakD83NCvvRASMV7Sn1tYbJ9pSg3UYtaLsqttyeKHDYzwYCJWXqRcp5xUDUVb89YfY",
  "key16": "aCpeQZF8pRmYvMvuenHY7rDiAbUtfDz6VHH9Sxj2X49FL82FPfq5QJ1e4pjAqaX2udXgxM3vstew5n7oEwLewuX",
  "key17": "tshqY1rW8gv1KRJ7HjmfrbZ1TVuH3EYziKgG1p51xhoukeSbS1t9U7DEXDgME2hp9gqjpdNvKzYEX8P12RFgjep",
  "key18": "3qa3YVuXP7NV4W1FVgMRYXnxNi4UPq1VdwYLkkgCjUBtDVm89mAZQiae9XwCDhH8AnJBpmt7vSHZu1aDrwKe4NW",
  "key19": "2JpeedVKkoaAProbw2H5jAd2yJafzWtgK7nxGwrVAe1X51CidmpAaPLo93U37VxyKidyP5RHpENrpv9kiuf32PUa",
  "key20": "5HVTCueJCZm7iCgreJsHNrMSspKKeD2z7xvi79cNpugV5UbcDXaVP2ozrnnTVMU1SfZP3cxubT1HWRGCsowfDLGE",
  "key21": "4bRfcsah7iVo8TwGimJpnkdUnXpd2etLTWEptAUjMLchAD79QKxiCkfDd2654dSveyrRMBpKrqapmgtwamP5fiG6",
  "key22": "3Z4udjsCkEnMhRsxNgGAv4okus2ED13MbMQ6ap7peeSTHymt2e3iozQNBcS6baoq15sdEnqDcS6ba5npzzB3UGVY",
  "key23": "5bb4L6NPUnApmXhuJnQgjbCZ8FCbhd5dEAz4LRRcQCQYFVGfG69mmhEq2byvBVKwDd9U941YaAweoy77jfk6maZi",
  "key24": "4HZKzt8GH5RHbpPE26c3ogZiF7iFi9wUdmjKsBsGT9CiK8VKwToQ5grvQ6FEEpbb5PEfgavnuNtJCjPcmcG6xDgB",
  "key25": "XGi1JbspF2S6iM6XSAxo6U68xLqLfhAYJ8XzJWquisVR6KJ5WKQnVEveHTVq7JYwQUGzXK4HyAVj49WcTbcBZJf",
  "key26": "rBnmF9LYgnWZw6dSdwQ7s65ukwa2rMN4LhhVXePS1ALM63LBdDn4ze9bd1eFAMudggK9iAm8dU4Jz2ytPArmAYY",
  "key27": "2oQ5KRN6ziYsnodjHPb6qEqUoZ8zPhvJYMtjNiBCULVPZ7vtxc2pVL651zmSfTbmRvUbZSgBoE6PjdKFCGVg7sY",
  "key28": "3t1NH8DHYvnpVyJGswd2rbbNQQkgoELEJ2am7x2avhbPUXjcwwUFZA2mFqAwKCqJoDNQHbGouFYT5wSYcBfRrxuq",
  "key29": "2Qh12cbqGWLrM6hqVDA1RXxxMa1YdRVCyrmcnuAXNFgyYbWfii8qaoRNG4DxMp5fjcz5duzAhLzrmqWducBto9vQ",
  "key30": "4GsAYLvu7jsgjhuhpjPxyzsN7UPQjJuFwrWwVYw2cj7rFRpQFCZks8PJHfAZQ8xDbMsJBPXwp4nTt7B1PAiBgBT7",
  "key31": "4QTePmKD24pCPhbsV4BjLbpaCswpbtxL76UvrY3i1HQTMU9ZxrgqTq31qinf1W1esfKz2VvnPscd9xEVvLugC6Gn",
  "key32": "3mA3tQbLVLsZYrci7XGETNJBd3xzA5Nkhz3yDYUqK5SinsJuNzwGckE8M7ABY16gcddMmHMGsGVBxmxPYKq1XkG1",
  "key33": "3j7x6noKCm1s3F6MmwkChLmhL7kUMfQsMMVGmVmL6JrhoLEQiC4VP21X3CodBgre3dKoaEFbdPA3podjF6fGVHrg",
  "key34": "6wt2A8rAJU5qGdWnxAhoidb1zJt9ZHmYLuSmo5TTz3hVrjejQWPzLhpG1hcGkPN5icAuok1TGjPvbj1R94bCSdv",
  "key35": "5BrBgspwUr618ZDZgbophjGsmBsdH2qNsCHJmxuDbV9mRbEG3twBVUKmDkQpThid8PQFtFksr8Xk3UUWSLVQ5GGb",
  "key36": "3Xkc9rgAb8esZsepfqr7MgbKRqoiYZxh8sQXDrFKHuiqqxBTeXW9jHjaHtfqZghbiT9nrXLmbX9JJycg1Cqwb2zp",
  "key37": "4CyCbz1zSmGDt7A3r42CTkssUzaBLhLnfhcoF3zBi6h56Stkw66hT4BVWU5BivCDWSvdbYdAMrqAT69N8BxMY8Y3",
  "key38": "Rj1SvdG2o62cbNmTwdVVdgGcKpYF77GwnWfyiHZdCppPALKq9kcKSWDrqB4AmLULkA3Bkgxj9zoZxvvv7Jfc3xj",
  "key39": "24asiQanMmsiLQvtW3jZPbLWg7hZJ5tRSRdhT8T5y6No97t4gSpsk4ze1tcYuQKdcXgUUTK4CZUUvhAMkZcB9Mof",
  "key40": "42equGnBMZiVmknyzmsem2mqfMic35N8UCxWtZ36s4A5aPBcws1gDRwy6GkkhFNsTm6G8Qd1Ub4CY6gNVe7YZade",
  "key41": "5bEwSjzpXU7byDxGobV3HEVeY6fAp3sD8rim36kkehWjYJM4UrfrcPjftNNKL14d5rSTokM4gtS66VGu3Ayvhh53",
  "key42": "5aC2NGSpMKKkZnjHxX56n97LxYkTafS76bUKY45EtMfgbfvHrJoVh8SoD6tiM1eke2CDs2x9dHo44DoWqHDXY9Tu",
  "key43": "4XYwQ8tX6VxdUeSrW1jPwf85PCCm2GixUr7bfRduC15YbqpdybQtYQxQDzrLwNz15wxbFcEgrukWz4d77qAVLxmw",
  "key44": "4yKUhPL25w6qY4fRoaW93FppK35LJFH24A15vdmiBZfEMz8kpv6L5nGZjhuQFZraYArHsdjiDyu6p2Qr29fCZEmy",
  "key45": "tH7HLrUbt2i8nBKcjtsFmbToa9TWYyDfGQ2jgHcbdmbj4G5TyMRiwZwLhs5P72N2rz6MM15DicijAqx7fQrkf6i",
  "key46": "3NfPfqLSqbsTnGb9H3tJgnX2YhC8x1Kt4XAi3iDSdJqXqsXpJfHLuQnYaK1sRkoT8Be1csiAdrGKn3m4aCrKjnr9"
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
