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
    "33ZSeBGmxgJwe68Fg1DJGiKkmtwed3bYWNpbbQXAC6ALYN5QLt5ohGsr5nt9Em6Fsco5oQEJjrazJACB47s8HscT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mzLiauCe2ri7vDeSjV8kmuXU5AnzjS3RC8nsdQxfSuPixCeSd7GCTHHCZrUFAtQ17pnoPgDo3gEBZSXEhfiTdc1",
  "key1": "2f6ZRENzQ3nS3HbKcykb1HSBM8DSQMZbBpWA6RNoPthX9WqN7xFWV8xgGRD9oHwPTbuu1w67oBV1w3iWyFverpYs",
  "key2": "xyr46t3SLTC6UfUkVH4xTAVg5WiPkYLra7pYgarLFobfGvBhmsPHYQmFVF4wfDPEZrAqLLKTSNkAiDinzcKBd5P",
  "key3": "4eKV4xnBgiWqrTw35BstBUQwdbq9xnDBnLNM9c8u6UMHtZNdt9sTNY2u1MQg5PFcraESAMFfmd23MVcKj4QZBd2",
  "key4": "3UBuo9rR9YES8gHLpiCW4523rUELmiqUuM8w9n18HB6ys5eh4TL47VFYpvAwFxnodt9ECUasgxkDRUMQ5QQsLxk3",
  "key5": "3pMiNBMhrYSRPCn5kVF1LdhCdp6GmNdYNAiMfJ8fjJ15CqDuCMjRNTDrDP9pcjXMpfG8FnhgfG8cKgehnxyiPpnx",
  "key6": "CXHqAzZFCaAm7nrTn5VUyYXbvT7f8JXRsBitzN5qFQH457iriptAwBPckV3d7evaZKoehoGNHs7iu7taYz6baRA",
  "key7": "35LCHgwMC3qdpUrC5YfUAPT3SDf4o7TacMC7m5qEF4AjdhzvCiYPhCx4rR2mvANdfhvz84FD3o3YW72NX13WQbCR",
  "key8": "2kU5HsqSksvbYntEFM9g6RSUYxGwGa8Dm2FPxNFzF9N3JgMyYaSCPZVbovzbSNn7u2n8yvaFDbrDDSPpsGARarco",
  "key9": "4KWVFMHAstax8JgFwzgR1xJuYmEZ7PQiuVbpMoufEmq4zh4LSvmyQwmaziM8wxKTX2k6wjKX9gqbPPAwoMeEy9ug",
  "key10": "4hcyc7mtdo1xFsLhouJWauNCQ2XEqZ5F3EiPRNcAih6FsLEs98JKDDW6KaKy9tiZds3qozv7nRmDKQ973SLq6nZk",
  "key11": "2p4b5CbdxbeVV5aofioWQ9mTSYaW7kL3ruCgdT4b6yjNTxG8RbvmYf1ayNXwcinryHpuitbQWGKSFiuULRw6LXHe",
  "key12": "4RRqm6Do6FXVbfPzGY7cBDUgf42oUJsaa2vSKPvYJn75kuCurKGyQB6reDD75Vg9AYCJTecyxymc1UAzC9DGVGUL",
  "key13": "1Fe4p1sCVYELZkNPaf9Rocsa8vS34u9KagBgpRH13VktrxZMVqijonUebawxbgqy9qSAgtBdNMcNcMnQEfjNiW3",
  "key14": "7n9AK5oB4YWxQ9yJHroQFrkv3zvFEDHctztZ3D6JBcDkSGhJB7EdRKWPsrBMYuyqEN7JFMuUd48FZyS2qX8HuRc",
  "key15": "5xpn3YPmeTqLVHrBwD1kCyU4LcTqY7T9VhSehcxp8nQBSYqe1etP7p22LWi3WJLXPGGDEmkkoRqtkizgLfFbss5P",
  "key16": "329vRanqcfWWPxHUogxg4JnKm6focZLziuC9HDnjyd6FFPvhnVdsoVAQUNiP4Vk8LezDC4giu5qtQGXSD4VhaHH9",
  "key17": "33vDpa1oXs3urkRgkSqiLpWCRYTTPB1c6TbPRwL77Dvhc4SvWLBea4s7iaFrhXMfTC8MqqmfkNvjbddCrGdsorGm",
  "key18": "1gosePAhSGmJZ37WETKyMrr62QWmFsmH3HYt7UgbXodihYcNjEXm5aieXSUwUAZQH2NSFSmqXzMNxqhYChZj2GY",
  "key19": "EcWAriPeGR1arxA1Z1xWGXeRcrisuqzD8eV8cGpFvxy5TeVNP3KBFJ6jjctqoJ8p3GKrpgqzRse21Eozpkyupj2",
  "key20": "5aSHoiZ6SJbqTQmYukRkNMVCjkweqjtYytGBp7LuysvswMFmkTYvinozT8Qe1fTfAi2ZKZ1yk46XycfDanhQERaz",
  "key21": "4SYKaTfE428YfEbBVyzTDh2cEiYG5Q44Qi7xEdzWDLjtZJWHuBMDNhoy8nN48zRvLJ5k2aw5PDnPT9i2GLDKVBYr",
  "key22": "42Pdtn4biV29nyFWvpbrk1xzs39frXHwenWtWB96V3L7ihimvy6RFHGqSfVMeS8QuevxY6XzKVjt2gFs6RZ8XYQw",
  "key23": "2PptJmsYJNLjYXx8xJmoYeW6uhJHii2dHHY8gKv4h2E9YsiVzhRVEsy2iruQoE6hx9FMVG9Z3izShMS7V8EdpnQs",
  "key24": "3h6U1ZM6J5FSqXgt7qhkQwecHYdksWXBBmhuPhxUrCr7VFZX8LQZQE2d6QTXagTCPo9By11X38dYXL912KWHmscq",
  "key25": "3DW4Jnw3mY4dcC5KZXeTJ2dN29UvrHAybQqsz1gL8usm5cjKFRpJdwkyKoz9KrvuD7dwMXrsxsYuxTxj3Mcpjepy",
  "key26": "4p71wkPx9A74dztW2cyWrioMsRCZrbpSmEfpo7F3dgqqSpue16hEWNd1m4yPprGaawH1aKGACv3gZncPPU8ZpLVc",
  "key27": "5yB6wpVjgnY1XJ7KMhd4BS3ZoWPSXLduxd6NWhqqGj3ihf7PnbwRR53as8dp7t8U1LePpvaecNEnhWTr6pXd826d",
  "key28": "r7WVhqnYkfwUysr7M2jk7gH2bAoe3Z1Mk1eTHWPcQiBC9DiMvtFZZAbmbRw1vzKMbDo59QWovrZJZhFZoSuDdL7",
  "key29": "5n7iYy6SgPZ1tDn8QHj86ygfPVr1JakrHTnp1J5QZXfUZD3UPjKVcLaC7LVarWf7vfjJz47sy1GFofF4UiRRuX8f",
  "key30": "5HS2JXj2NM6VovEmq8yPGnwmhVVFMpfmT4rKg1oh7Zax6BuNT5uZhf16RipRbvfemVKHKY2Njp7PW4WJzRREoX7r",
  "key31": "2izPTJTT9SsrsSf4SmxRMaYQhqGEzRczAr6SjEKmTP6rRJYoUwHgD4i9dtTMD228Li2ZXDMap4NeGUXGzMUuo4Xs",
  "key32": "2TWhS1X7hLAeqRRxD87RMHgbgss1pDvvPqKSrRNvs4JcH5DZvDcX2Pm9ADqEzeUetfaxHGREvMewZVC7rRXcjcnC",
  "key33": "UegxtH2J6MdUa2vdWRNVUFZiAfitnJdJ9YkYNR13nyZQT48c2VWtgJJdpHkxFdLc73ZrE2q33fzP6QPWpr7KrA5",
  "key34": "2fmjkHHDaWtUmR339rzUD8u7AuYgcEUv8iEn4YXVWeryTa62wE2qsjsdLWLyHryj3xtSJuvdYVd4Tm1bvk2X1v8w",
  "key35": "25hHXPo3vk6Sxcu8fwi67SiTkLz47UqQKg6CW2LuX8aA9XnBXqeXWtR35XvnjFi2PuYpdAAq7ieSVEyp4GK4b4SB",
  "key36": "3f2srcgyGyFtbNCGeh2jKi8YnZ6YwrCLg3pjKLBQJgjWeqGp9h3G7AFWU4VQ6txSW8pXGqQJU1HvvKriCxjQFeXe",
  "key37": "3EaGJCJbFtrPiEbufYyusxdqZi5zUfpaKpUq7ftJE8rcqSAgFAkGx1oqEa497z8DLCP5xs3PDhSpaFmHb7Zn3e6D",
  "key38": "3GBuieaWAiCHBXVYVAPky5yBnpVFGK6t4pZzhowCXMHJ6V5Q8wGHmwzxaNHLf8oHT4MtwAVPY833uWgjEjtERnvq",
  "key39": "4J4wLaswhiNiCjTVrfLtkecyAXgbQxebef8DTaP6j7y3rfhkXF5TATok2urCuuBeMjpu7M9JGpf4BFVrbEcFvMcT",
  "key40": "4pkHkRZcLEjnFdaB9y3JbrPRRke6bf1hjXmRzTvt1A8SZL2dhBrqWdjbfdXTAagUMAwsfEFj1wfjLz6DU7hhBKPw",
  "key41": "4i7r54PMQAZ4JgVXXmdPc3F2MC5oHZy63WBikUenpNZ161iQxqLXy2Kysi2tauMRhkuNYjdAr89fhhE9SmihVdy3",
  "key42": "NWag1g7sfDWvX3qyJFinttsmQzRr1JnMiZykzFgGzQoZv3UtPYcXPToq8XNgRGk831eRK97pBT3KjHcpwswT3AZ",
  "key43": "2Dw5gk3U21ciAQV2gsRKU1Mdu3QABozmeSFkQAbiy3w8Ntd73ZFjSYAMeiba5T5gbV6rDipWdeGbLhwQt96ZYNGb",
  "key44": "4oCenPqc91kcLp9NygJVitKGhTD1ctaCaFz5Wvnuqy2ANcn7wmY1ntmBqzdCnmmZ6Ju7kBYAWzu152dvcmHWFKWc",
  "key45": "4yenoW75mgYZHU5oxkzVPCGtCwH3jzzZbFKJ7BSbsL6ryjP22GTtK1wyGsZbuG958gxXk5c4mzj9RKmxSbpv7Vnf"
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
