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
    "4vkhr55APEETixLEFPRyq8sECDzB339JsLVcj1jFwN94Gtz3SQk9q4isgjCwGKuqAUVSrXFmW9vp8vL7XfRZbhfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y9ksAXp6Kz2M8nQUBJH1QNELmBAMcEmdFgLNFBiVi26oSEWJAT717iCPtsmHrkCkfBjqyKwHeFzLpmMqicDE59s",
  "key1": "LBinL7n4H5Fwnp1jo2ujWhJQuMbqKGHEtk3zU1aQV3MTRMV1tkSNbMTZMsQ5CUJTZzASgshzJjR9uV9EJGPSTwF",
  "key2": "qpjRrHhPHhDosUckM5b8KpYZRwGhC1A7jwpryGE1zBQdbfW4rRJXqxZpgnQe5PLaR3UUifCDSYk3oNiVEbpQiqw",
  "key3": "2dkuPoDVMra8JdakRCnjYY5Qhu3BucfrFS47gX9dfH6d8e1gmrHRTpdXH53NyYtyzf9a75z5FUmxKnd8XrKiHNwA",
  "key4": "MbdcbhzThsB8KM2MZPbp87sM5jvZfb4fD6u7d82U7E6h6hwn3JonAjeqBVoKYuyeQpzrjE4brfFxUzec7WXVmte",
  "key5": "4o8pJ4gG7Loi4rFbz1gUniigRgFEs8PP8rze43gErdsQPEuWCNFjtKBBKjm7ENkxNhhfnMdgnWqt44LoLY43L7dw",
  "key6": "2smRA3K6YNmjVw2NXdT3Yc94BoiwM9wjHqepuY6GdKh4EWTP9sbDNf76AbM6REGW1EPJfp9kngjaj9KCL51YWziu",
  "key7": "3db5BEWpKR1eP2AreHyjcfvgCjVbRKQX4JSRPFh4oXN9xPETJFzWDu2ZEDuK2k4RHGaapu1oprneFCkPJzsZF625",
  "key8": "AWLhGi2sDhnD4ppf36E8z45qbrwnZPeddqaKKgQ7VC3mjLChY8rG2GFZzBCkffPQYFmbyapDfpvrmZKgbTukoib",
  "key9": "h2mQBdGQY6kuTLbdSoPoSUEdHH7RLYEECWVwoFkqfiQ7zUQr3Wc2hp3Xer2iYt6mHmKhFiEwYQKXdxbjTaDHBpP",
  "key10": "2Jzoe8QokVuwdeDHaRCowNnaxkDGRBca7ChkLYYEoCTzQ7uP3PRtZwRVA1Ds3WtU9tXeiVddS412vZ1rscn9VYSs",
  "key11": "678Nixnmad7esKF98TcGQqYcjsBHcKvgmmbksrwEv7oKDF7qknwbf8AhpKd9dpNmoECRccXcuaus5AEx5WKswPi2",
  "key12": "3K4fRcomJEifbx1KK68fES6PQxByV22UC7M9UyeMnRRU3bynYn7juNQR6V9zKYozByjT9mMCBqGoxzgvvdQsXTke",
  "key13": "4BWajPjYyv26hiFPjJRH5iG19SZgiiBgEMUq4Y7G2ZnvEMvohpgmhZR2MDxc4gFd2ufnBZsModgTu59oJsRf8U6J",
  "key14": "2xHefWzMPd2jmf9bkKTXM2AgG8sYpsQ1m2J6yBF6YfW5VrGLCYTFaPXcRRG5HzCJKAcuX9YN3aVFAfFnVgHf5ecn",
  "key15": "5vJS4rNwzmR6ZLUDi3PY9Qcty28Jsyjh77CZxu4FzCLYPHV7z3QxHgLpZZ8RpqbFH9vp9KWC6T585FQRyJzcPRCf",
  "key16": "2z79Dmq5RqYgPpcCDTCs917FNMxVCdCkYZMqm19StkcYTn3h9ao3FsHGaWjJwSBLxB7PKDZnMfHPPkjDDJTXA2EK",
  "key17": "Vx4v4whS6KFu5cyyjZNCEZ8UqDF9Afkzgj7U3BoHfdVzVK1HtWJ96sjdip5jqc37aL1P9mXbzth7HGXJhkb6EGj",
  "key18": "4A7398VR4PpAapfeYycapMei1GMQLzPiTc1J3obKZzV4K7dkFQcwGqyZ6SAdNNWs7ujqJQfmwuUub7cYWiwv8rDr",
  "key19": "43zC59SNxrcG4aBe4MCCaoHbdHxYqEZbrW3rUionGfkmUahv5FV9axYPNXzeQxjmydWx6o61JF2wUuyeQzY3cMUp",
  "key20": "4eDdnMTnyRnDS9Lv8vSAvHm9gkDZ6zY3opVy9cXEJdgC5Kraxnnjwu2kerpopWpeFBXeZ6NdkWQCoxwV2AMa1wAM",
  "key21": "51SVqpfrQwV9hKrJEptsvXbd58CydyQn2Koiz7NMpM3NwiZ6QtxPyPJbtpfw8rgGmKXPjnXVUWPg5Hd56aXDDByW",
  "key22": "4R9XwQvT89ZndFdxGgtM25QsgVUKLsoxQBcQnUfAwyEwiBqEHuRKpuLjAJZqv6UyAZBPumBYRKLxMhBdd8foiN47",
  "key23": "4ty7nE4BNs84bsHXtbkAHMbYroVEa4R9jyF7wGkpS9ZxTMi4vQv3sFvpFwzbyT9X1eXzjjv4814JCPEtc4LWJe4a",
  "key24": "26Ctb667uH6WKXVMJNYu1PDgW5RCeePztnySgEsaAhG4G1XCCZGE8SBAxoo1LswjHf8kQKHRLVdDP1vLYQnngNYH",
  "key25": "4Z44iD1zb3hH9mtyx8aPHrDfYGeASAUikzguuhhg62yxYct8W1WPTbvbHQpbyUdPH9WEFigmWk9iFiWix7U8NddT",
  "key26": "4kjr6skLyAL49ZGmNPzkvubVRPcu2YrLUZAhcfQNtykeCYGu3ohdHwNpQdjrkN5EwbiAf7tNHCJEz9KUSzHo144u",
  "key27": "3vqaZFpCGCScNi8gGVnszEVwhooGarDQdHQQjDR6UuUmr285HgRWgCKn8RYbFFeVaDk7AMTCLAGShtPte13haJnS",
  "key28": "3QLxkXTMbX9rC5tjp7FgtY3cvSrqXqod9152JPzd4vnjPbicT3vNU7YuSRkcDXu4oeJDMZbr1pQJACVLfysNZLZb",
  "key29": "5f8Duyk5VJW6FCLNdjzozXiKDBZVaabBpRwY4zWP7oHKG1dQbPq5RcMecJDvZcW839aeGVW82LwmkAbk7SxwEG1g",
  "key30": "44vWW3tRF6qtdqKeHiLs3YLeJSkv8GJEo9LVYrvXLmh43uR7PRbu3haVE9MQL9dN3fYxnEnhi9d94BLgTyquNmxu",
  "key31": "3HHTZjnztPVSJewVGTUesf5uhZkMmcNjMfr8i2w8sc6sFaYVv6Z3zuYnEEEQyFendEe1KQDdLVy2ANBZYoihR5Gz",
  "key32": "2WPHTE3tgZENf8kHnYDoE7jYqUUGZkNM4yHgrSRNwfJYwfJ6qiHrgwPvKaEiTrDQurcsj5PRXrbY1GEpCBqZv576",
  "key33": "XRKaaw1i9QMR4RgSwmqd4nxmGgcugCbrTMat8g9Dn58HbV5hV6dVsHPFP1RK7b68JJ6kfxdBXw5ZkcXso3x59Xg",
  "key34": "36qb3BnhDx9t4s5qoajWwnjKgCTKEcYoD6cDC7ZdhLYQgFP5tWSymvkcQXwRWkeDh4eSuQVYDzCy37EhZixPcnXQ",
  "key35": "3NDR2WASXCyUpKNSwHSZ51maH9Y7TyTpAPkAeUxENKxVktkZy2qhzGvsWcQE85PujivashVPk2yoKGwFYrhK8KtJ",
  "key36": "4eYHKbPrSsg3aPHiwgj2X6Tvvvexqp7bKCoRZUM1EsjkPxTug2hcpFBA8hpjHB32FTBUA5seW66gghbRRuw92wTq",
  "key37": "2RatNxjaY6Fx6X9CKbfj5SCVz8Zmcw5wvpQ3GbRbjpifE1E3Z5pg5FkHVtGM4CoqJik3viwxonBnrt56Kb2zv4j7",
  "key38": "4X3tjaWPceRQJqdjv4eVxffuVyYZMKtdxjziQF5vm35Nt1CaX37zpcvft5itf9yCBZVSYQGGmh1DusSZd1z9t7NN",
  "key39": "3mtziU9kmgKNxVDCuLFARYs6UGbyCutevQhU1voCgRqv4EKXNWCCdywQMyL4csCuEiH28GjxsshFZQoGZFfDsf7t",
  "key40": "2ENBuRgtYXF8DEEV9gxQt7PBYJsVpczsAUaR5KAt6wDXEPjJHxHuRFFd8Xs8jVAmh9hAMsENB5gr784VNjnT5B4c",
  "key41": "5gGjYUWc7CgkKanbiVF5jtxPwMfeJYYoXtjsi7nNCXSkp8Nm4Lip44BiLPHXsmFPwLg7GqzDKdhjen5QyBXvaCca",
  "key42": "2h99p7BVGsz7c4ijqu4EP8pa3F2LyEBbD9k1RKTQHfV3d3GvokngbNBNwd9kgzX5UwBNFm6tq4FPqyn7bVfYQTvn",
  "key43": "cGvBDqpSL5ixGNi6MLnKPRnJ9U3wMRnpGN71a1Tj1yWouWyrr9EtsQYsHXz7apjAnV62U93DCN41EqBRzocG1wf",
  "key44": "3c2KNdSiXwLvNfzMSTYJde13JeTGnStNaUjkJBDhm2XRvvTCeqtJyaxJasbGn58TD2pb6ThScJ4PzHvQfVdgtfWE",
  "key45": "3ntDAgAandfiDbaqq451f7zY2hTpwdiuqbZEUsiBNxHf18nA4smX4FXqe2EC2au4LGyy8LUwcxqhg7xLVeuzkveB",
  "key46": "CukbxjzY7CQLvu6YTjQnFUPL9opNExAqKHJMyr9ycc9L3eZg94bpobEz4kgLaBj9E1DF4pzDTgmbXJv1JYaRtLb",
  "key47": "2DHcYCSZ4JHQoaDKfCeF5yKsK6ECKLH5dUfG3sXmQLmHdLVZZ1fJ6sHyxoo7JisFvGG5n8g7kUmXRVTZJHhAYoRs",
  "key48": "5RZk5NkkFbZ6VXzLXKoNDA3Q6uis2LVyZAe1LPwLDewLLvgEbJPHw63LsLptJ51yhPiuVMJn8a2xqqSD4cBou2Bw"
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
