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
    "2peLUHCNM5VLSZoDgGeyeJHiaJhRrUi7gvTAcoDTxaMiuSa3RgfG6Xtj4rAYj7wfof9UADQxNvyTP72E96AJxvV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dN5VokbAy6jDbYuFGAXahuA8H7tG2G82mtF1iASx2md1azjaFh8a5M1eGrpe7GVKDrCdacaWQD2HirHdaih6UH6",
  "key1": "62QM19UmS8BiWprXUHid9ZGPMvTpzkP1dsWe9TtAu8kcXCiVToUb9groYTF3DSb8BbX5ACUWA5P6d7UqdvbXNhBb",
  "key2": "8LLuB8nAh3q6h7Wzons3RfEW3yhmoxjJVv8X9vBoR1rVRzMmBQSpMGkGwXLGnTB5HgbvhRKGEm5EJt3NKtM2Tb8",
  "key3": "4X4GxpSiVTUrgMQBvG5zCJuHRrNAN2GXumUHdmDeHFW93T9VVdkwu8uYTPTuxyvv8hbgnjuxtswwAJv1HkSa9sDm",
  "key4": "Hdjdid2xwoTs2b4LSHQGZwYQrhtEGKS1bM2L9bzf8L9cQwiRD5Hp5ZjUpYnsDMJDQNuZxjgGEQctC7hDfn67G9t",
  "key5": "4y6hTLeujdK4Bo1sMSaSohSK6KnmnrqwGf8CpDv2uTVQ9bF9B8A1Ygi757PC9fyKDwV6QWL3cHa3tN3nhE9CRCts",
  "key6": "4vWwTbu7MrPqaf9pm3cecPczZtWb3qbrA41QAuiHG2QzGprSk5cbtaXCLfNTWPKquCNnMJAJcysimHinAJFbUoP2",
  "key7": "pnU9coT4euASj1kp3ERUBgSk7wnV7sHGqWjGBP7gf5NQKX7k35Yg2T6QzAvJXXeNN8w2oXUdXjCDCD3sSoDrmn6",
  "key8": "5e7TBELm2u5Y5v55NvnwH3o4VFBizHc4K2DFAq48k6hZ3b2Q635dDcgevvqUpo2CQsYjtNTL4JpyGUfYmahj2ox6",
  "key9": "5paoHHkMDGa3qD8ER4Bwa2pxeLDCN73AxHx7VEBxAinQ5nQjmTnGuc4x1it2VRoMBYmcT1vVGw2VHopgo4DAoCBB",
  "key10": "47XD8QfENwbm9JjZcZVXhmXsFZZcaMuMkAty3ma2bBNF5UEsZBcWVpPzqYbmCH8sG2tmLe1qRjeTCyHReuUdWzr3",
  "key11": "TRjVPF3VqfF2b2MD8trfMuDNxhZjhZWAsYQ5j2Zbn9CiKErq17eTdPc9mUEAsZAiUJWUadrVGLeDG9RZ3PhFgWu",
  "key12": "b9gLZfRFUrPu9hDkktXqEYF3NF69i7i7uhJ7NNBKcsSs4ba8azVs3ntg2yHVGf98ZCo7uuRUYvKGjvDsvk3FTex",
  "key13": "2mLLTbJQ1QJ8NSiXFWSJ63faBBbwV3baxmmduNyWRtNDddQ8jY5nm2BfiqPPKoAw7QyxyvkWJvHkWR6YeVeiPd8q",
  "key14": "55Bn3BX5P2sXzb3ryGZKpJvwamjqLRScYJWmDi9pn6M7r6KKt7iaAjiYzKZMZh9GGsxcrBfVm3oZz7NwBz6yCcwM",
  "key15": "sDTmwwfJ9DDRBdMtfXwPtZQRzPZQLdrxcCTddDVhcC3Fo5Rgu4W3whEwTA3NjtWynfSZesGqnwUhuWMwsms8ksr",
  "key16": "5jDw5fPtsXE2xAaMD5DT3Qnfzs1zoVLbWSksEXa4ujUoSwEEuaxNzeabk3PDbtSQgxhPvgR13T1SW9joXdrcgsZ1",
  "key17": "3rB7znBuUeBAaZguYKeyC6yW3FPojCqQsVgz4e7UHvD7TWJhEFXPXH81MTHi3cGx5Ha5brRKc8ZbA61GMLervJkd",
  "key18": "5kkpzkPaRv85hT6EJAiBxvJx7szJ2TjMwbwX8s6CSpfMqovzkiLkeWjJTdb3xMzLp2r6QERrfp23Za8m1WTK146p",
  "key19": "3UDiKrj6zFNT64DgC9bRKmY1DuZKtFf6598oW9aYdPARqx8X17yqNyheQVdxMnb5AeBUzCgpsVm3pVc5W7tfpfbD",
  "key20": "3c2azJMgWXYhXhcHYpuU9zY7MPGZ4mveEEoswTb1FDBdeqqmB4myp1bPwUff2YipQ1F33nctPnoi41Cq49kMvxHy",
  "key21": "4Zvd7JGGVWJ8eFgQHBgBrnvnn38ag2YvadJmHzGSML3BfCgxHKTthD1rMssByTuqK7NRkZrTP1iLTyiG4cRnTvtJ",
  "key22": "5JAs8PPPiNUACkVYEshwhxGbKJLFKiRA5bCso4m1iesSnH4RGTBKtEoN8SL6dMsZHcntMzYL8JoLpR3CuB4SBV4B",
  "key23": "3uzkivNxtxSiv5hJj5ZWwwCfVnbcKPeTBhXXUfYEYyuga7YsjSKXQh1CjWmt91R4cvAH7Yg8DntaKRAQcUFhrMLr",
  "key24": "Ez9xzsEpt9mzZtAxrJNU3BwvxYtZFnt1WHnC56yE1YEaVMJJhFmhgGMLSRSMGXhb3MUEfF3eieXh1s92cSRgvF1",
  "key25": "TvGUY4kVtq4d3wUvwujEsSseHxeRT2rRVoz3RpwJpUw77XF7K5CXXqTpeeH56N2MHjrtLFWQGzXZsdE1PSsXt6U",
  "key26": "5rNHWCyEyjNvqYtL7XVdkN8VbisTzXdQuSu6VqLwcnoU1ZQY2CN7h9r4QN4tZ5ZibsidqAic322LcNEMkbkWjiFk",
  "key27": "3GXSDaGfLam6QoRikmV4prCDZet27Hsa7DKQojS3q7oARV3G1TtMsemhn9HQAKMfRbwjouHDRLTrzTVgnGhmg4EJ",
  "key28": "2moj5jh8TBt8j7BpQGvCemLZosSDyewDiiQXyXcrMc5j7Gzd76XH8oKrBGeosSxxPg5iTeHhgwhR55SWUTWpwxAZ",
  "key29": "3iK9GUMExN3a4XM5ZhPHcTo89GAFiDcMQnnpJA67S1u8VCKdS8oJ8DbtukFGALSFWCW8hirmRxJELAqgGsNHRdSm",
  "key30": "45hZUnngk8v6ieVMmX57PoTYZWouv5P8bdsRB87cDsEXHyZHUEs4n8VevZsq4oidzjYjgt5Agr8HVZEcRQ3Pjf1V",
  "key31": "5wHJ8d3FUthPqCbh66qzV6VXfaWCbNNqR2chenej3yoVuWDkumSi11Rrorrz77Kbgc99HCsewmQ1L8dKfmwa9fAh",
  "key32": "5WSpi1ANdXUN76w9K165rPQMSz1nDH3is9TDYT9QWx91B2eCqbPgYiSHQMwgzkdPCXcN2YA4Ncr5km8EF1cYnoBu",
  "key33": "6mTjBaiFvqAddx3q1ZfbAR4tFkadeVDoWHiZdKxEtQ72RfRTaVV1x4wjiuKDYJ6Ev4e85qkcai32JFVUHbo9qX1",
  "key34": "2mb6fCha3qEkNKBGnvNAnXLfp1RmSnvSBRY9xPzP8U6wP86zUCVoKbUpkcJnVfhxHBQQkARzBS7VJWSPRTsQLuMk",
  "key35": "5HryQ7DHJBKZvwXfymYSEtu6qTuTLwZ6kx1eKnyiJD8Yv47TDN8ZcCppAqdujitfhb5VoogG2VjWHVLvirAeHUHP",
  "key36": "3iKvAyVdFc3x3ywtbD8aYcCY8eXhq6YyvQCWvnBURg78UubH35BT4BcUKMwtedWFnAGUMPV69UqD7xLi1aauug76",
  "key37": "2h2LG8QTaTo6yjhJM11Lu75ETF3zwXUSqZfcpyGtN4H9AUj2xh7XfqTkyKFASV1CPFF6NJMt3Ehx56ZoK2mU9M1F",
  "key38": "45rAwiZjoq36iosi9rvQ45bo13hsXGhgUKhyR8uJVtC88tDgw12HHUCaW3pvEKvokDjah2h3FiYdTgG9oc7xMmDu",
  "key39": "4Tz6fzxpZzXLSKSvgQwdUygfr2k8M3VRaCHtiSWJ1Rvu5bcbpLPU9D4i82aQYu6C3g5bLEY5CmMjLWTPmjGzDREU",
  "key40": "5KAAKt2TqVCXjzn7sDE2z4S4bubcaJobCiu39vdzAWELvBYKiutXnjroQF6VvqATRTxRYFpsNUStavSrybRHapcW",
  "key41": "N1cBBRgvSuHrydRUfbBuNjaTNcD8mNQK6hnH1JoovpGcJ5sSKzFDS5RmdXNvGDaVs81AFHV2mkTC5D7BfAjPRfS",
  "key42": "222QdRVUwADK4CqL77Xbyur914UK33kLsbBs5wFrrS4ob4EupBcSZNxPr3dCxTfGQ3BsR6zSSq9RcL5FucCVZD6m",
  "key43": "4BEULLNVrocsspesBe7Jf93fZPPZ4t2o3hdUPnXL57FKjkEAnFrmHG2YS1SY4JkVCFVqwAeEoeJW1SgLFDfKbGqG",
  "key44": "5dVe9UzNXrjz5YQgEJ7WKJ3ghQwWfTnLW2ZrGbvFo1SNYv7njFib7hqjJD2NoHewuVyakVk2259RTUrLGShoqwQJ"
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
