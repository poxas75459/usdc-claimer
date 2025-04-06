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
    "4W2X9GGkK1G1Qgr4PukaVrxigNwADVZGGL5BHTyfvq87ieCwbq5CpZjK4hgSWTBvUTmDkpbgt57Uyh12o9iMZTUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35RRgSS6yE123YwNc8vdrvW9cLTc1pc1arz1ZwSHikE45X4dAePGCRn6KcyeprHKHkqMnooVTJvjkHHCtsQQUU4E",
  "key1": "2fzAp339zbkAMQJLsXG8myPByqVKaNBaf9gLWeL4qbYQL9VjVAYgn1zNEoYB57jKEJEdbpTeW7vAsnwAKZVrurZ",
  "key2": "3KyrUGPhGz9gHvbcKDFSMDvtCa2ie9aXoTse6jnRfEJKu8YhJ3AiFuHBppSgg2U6ssiRaGcHr6xfZuUf8UouoxTW",
  "key3": "636ym6EvVREdZ7oxNGdwQXgmA3j2S83Y2eUHyPebvcNKBDL47BKWnbAT6DyF5asU6DefbCZxnQorAaFKBAQC3s2a",
  "key4": "282gdJUg7mix29ZPbN1EmrXWZiNB4nrhpJ2Grzvc9ezVnsAWsqGBTStDEudJurBUWoSpY3i4M936E7ckRbNWWWfj",
  "key5": "4cYeu64esbxKjPaMJr285A9wLNdKEYohDoYeKvi1zSP7gDqzH5gq8TuVrUJx7K2hHNh5GQ4RVeXTiqEY538GufE2",
  "key6": "4upYCrdHkQgxw77ZXNcM3C3HgUPd9G6jWKFgtrxNyiL9EN5sy9E9VAT1Wn9QXoVPHNNpjr79JeDTL8d9eWRpxwj1",
  "key7": "TFvXJvnWkys5DxMcYGm2xnyaPrdEFFPMTBFnAX31GzkwczX1KwzZAhXsJhLaeZxy6gpZXiY18V3y4a4fYv8qMxh",
  "key8": "wq85jy4YjVVon7stuGb3AxANxJhpHFeWonVpYRzCia1Y5A5PdqzZwsuxKTszba6v9E6Y6pGmnaghkss5gGHYCZP",
  "key9": "4BYMC61ruMsUe9ne2YYwtX1noajBTmmcrC1PS2APs5SrcsppKr6giX95RSnT473fJSEewhbUMBTSNZQa9xZpVXT1",
  "key10": "2LmHbs7iDsPe9K1CRuDnP6cjAbRXU7kX5oHQftRUPBWmSkYKkZhezTr4ruZAWkUZpUDfdLh1FyPbB8dDYebbQ9Gr",
  "key11": "41CHLPPqaUBe64PSvezSLJgsMNcTbJQf1DNMUFWxgJDcuCUTvQ6Eb556jdgkaReQfDpXcW5mdtq6JQQSZjU6wdNa",
  "key12": "5WVVSSuKAWucahT1fPkkVoNuzFhrmBby34kuYkdTVNd9So7bJ2Xsfn95CJW1nLd2fZZikE3sE8NrCKTLoiJmuCe2",
  "key13": "3WpYFYFa91HLxHPjyhiNCsBJZJpX2AdmXM5AhiWM6UqhyjWkwfywVWzkJ3PqhtWejz2x8hbSnrPyziBME9PLu8Gr",
  "key14": "35pdWuyCm8anUvWfCyGQ2wfdFHHAESwaivw9fFTsETG8KMGLjoQCsakQCSWkG9Uy9SUna1TNZ2egtv1t5hKyNwQX",
  "key15": "2ejVhfdqY6rDCMcxRnC9Q6oJmPrk43RhXFMdPCzTa43qM23FQBH26zpKoBjUvMXiXX3NSpNEF8d2Y3Tv9yYhg1mW",
  "key16": "Wy1LBXtH97vSzy6mAxvBc68pbckt8zWbACmBc42EfYKxw8b7G8P729uhY48MRVifmGNxuuQvkptn8AbhramHbHU",
  "key17": "ppos3L6vgkDkTNaeWyrKe6T2ELwf78U5C3g541jUyxM6c6XsDwQu8EHBdRqnQLJSW1NeBcagNvSysAcdusjz5eC",
  "key18": "2hnYWP9qwPoCvayKBomXn1UpLBrGUdtgj4ihZBpD7RLoKQNhdkh2v1kmiRS2JfN2F6Eej4EpTi35ttLfARfmzKm",
  "key19": "4xxb574szAnq1J4WwgNCNoeGAUXwHUvxVT8DWm2LgADHk6jn9hP9Gtv2uLt1mfwnvSvmoHxYtFPJd52vcBVHgAmL",
  "key20": "5qgs6iZUTX8L7B5YN75j8Rw3kSBynAKzAYxRc3CpiDVdXXFsUffF1RHMN4u8AoU4CGaLBqAukVLQD1y5qdYp9Mwk",
  "key21": "5gwu3KJSDcPz2LfDACwHWhJDboLtf1sBGMfQDDqo7wYAFHc5VzrJMpDD1ZpHnW7DUYRWC8GFnx8zNvo2w4is5XnB",
  "key22": "4QctP4XEZ8UjRnK5Qgh5CvPFumsXuSDQAbNFJVeQDwC7YwrQbJRJmJQWaXnWmQLrudYv8ru6aqBaSYeS3HEUVS5G",
  "key23": "2sdRWP5hPzkfEqXaTY8vDyv48qnP2BJuk1ZtCVGGGBKxYFarwsgyvQHyrcumhJVaaRHgbgL3i63HhQT3Hc7onZnP",
  "key24": "3NoTKn3Q3M8Y8XnRcrRD1fLunYQq257WrN91jFGRQH5XmGC9Pw8fVxN3t9cx6UmjKSxgFX6aBzFJEdVsUYsFggGL",
  "key25": "qxkoLXqbBEKdFHUWGPKSn7zoc7nhxfC3hmo3WoZRpPdnZiFKEpcA41XYPu5qST3wHtvLQkuk6RAusmEmr67U1dP",
  "key26": "53K47k9jqgkZnFm5nQkhAhCTUXdspCt4AvNfmvgBQkjH7bPp8LPVtnDxncfgHDiJw8sisJbzqjp8fEiDJeAyogod",
  "key27": "2aCL6wqkC3HW8E33AB5qC9fqwSdqZwkM3BbgqBJ2ZBojKaPoqQBD4HNbvfjnWAFrYoLJTCAys2cA68nj1SQc7ZBE",
  "key28": "5ssQh3f1a58ZyX6of3yjYvkTe9LARz4UxWb4bWy793adCoNByTtmrq78GqMFKXt16ro3BvpkyPZCyvfAK8D18LA",
  "key29": "2AvUUu9Rms3s7CyvmGMEqajtzk5aPVzKFLLEh9HiNpHfmxCEfMHpKK7zaSW7obKSvnoCvJ7VtdSz1bPsprzLa8Jg",
  "key30": "3mXE3782Bxy3VcjtcEvbswUvXEUau43ERbLQYeNYBBX3qjPYWXU3VSQK5v72PDTZbqf52WWfriPNTfxR4ag1VqBP",
  "key31": "29pzCRfvM1ykC7rKK4RG5Kv2MqBSeLLX8vn2Ms7Z5QKqdJLw8udTmWup94XRwdtRE9rrSQQyfKfpqfP1XjzBpTjy",
  "key32": "4CgnGnRo7L2mrbLyrAvtFzWsCv46kj4U1u2dS9DNvrcRieUJ6X2UdhjJo81MazYiqc9AFfMFCExmLirmcAZYwwbX",
  "key33": "5ee4seDo4U2zBKoye1uZRDh5en6UoxknuXRz4kAKPvM4NP6ueu2YXAe7JJwNVMFyeyy3zJV769EVaFa9Ds8rV4Rq",
  "key34": "pDkbx256vAABpFDZTdirdqdJH7VU99qrkzTXjZQkC3fqHRmbVon2FdTXhEtWHsC7Zg2Rt5Qgv8Ah2HyYyBLVa9t",
  "key35": "KGRAh4ELcHSCdw5nSmskfbCfKkGcBchZ2QQTHUSZC2ZQHaYujjuSi3C3uDu68EoQ8Rpvu89nvHJzaB5k6sEWX5s",
  "key36": "3zuTDBQ7hgxTmT7psQbjdpUEjZeSxFcSeKYabUZS1b4Wd89M1mm6DfvkBtwKwkogeg7fGRqzHVF6L18yEzY9rRHX",
  "key37": "yWc4BgR4BvjNqRiq7tWMA2YecsKH7K3gAU5TAErdFiMRBnHfEdxVcPxDPrLFeDyGFXyMxqbaFb9meybqt3xzhck",
  "key38": "2GpcWtf6bxFZChtnfvcA4HtqfHpvW15nCsU8c3A3GnGrUdc2Z5Fp4yZue9qJSCnVFak4N5HXn8fLdr7pjieyH9k8",
  "key39": "QUp1bsR57CMqi4PTxUbpNvRzjrq7R6Ps38ca7evsc9ofQWhUyFEL4LbfLizHDhPeCeRFtAb1Fqqogr2MGSgSoAz"
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
