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
    "474V5Le7QBjeu1SKvXu6uf8PFVRVdU1DPYXfKmhASK7Nbpffqf64Fp2KKJQtHqB8KDDBpvybvWCXYqb53LEo3Dk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fq355KbizLhgffCqbaL8P4LeyS2348k6rosZPUFpaRkopJGp6UMxGrNpZon8hKcijr1t7gGisX4d7bKwiU8Jgmv",
  "key1": "KRqfH8bSVDjP7hcLwLE4cLP8R5e2UbAXZirq3Bv6b6LvQow3RG7rsosPdcv7FShAnPMLnVzytnX6AoqojcL8deq",
  "key2": "62wCvadnLzqurNgZ5f8uTde9BTo1ffBX6fq15H5aPxsHjd9KWnq6cVPxP6sLie6j81st1btt7gwjhQA8ide1Xd1c",
  "key3": "59S169ytWotYqfEFRZdAN6U9s76gu1s6ocspStE37wL63SEbkbBxjJM84LwpNLGf1iPuu2hVZ3sqKch86iXGuncb",
  "key4": "3t6mPwvMqKQKZ1yjvhEc35SbUNhmijWLsWgkusKuVpbNPFDKUq9kq52PyWpWz5ztgmwGQaBpHPk2yCzGPg9hK2CL",
  "key5": "5aujiGNSrH3F5HGCut524GRHHTAW6voDsLHecqGb8T8FMZb3Pvczu3TCYf58wmdKaFoLh2CqVLMXZWQtx2C3Yxpa",
  "key6": "3BPQ9UBmpNSvQsvSwvGG6WebTBjRAw7K6XPUSasjV3H7UWKLtXHwAc8BmEqZgFrDnU1wLXGUM2WGtHzYrphgrwhA",
  "key7": "oLEBcf4dFmERipyKzLCrF23mJeVAincvXc91qg6S7r98cH3NFahy4nBnFLZVKZNQJP7QKnUt53exYPXrFTfDerj",
  "key8": "P8DrUhh3AFs5QkvH28gJDmDD7pEXeF1g8MLceHyMozZka6QoEev9AF3S27H4tWv2w451hz7FtM2mkfJUbQFU2Ju",
  "key9": "FWf8TPjWMX7PL1peeWW1hLjJRtosUAnDf6W3Vn3inxCaTCdfHt5dcPWt7w7Zx7xNncnidqqzdVv23wSXsuRbh1V",
  "key10": "46Uv2JmBvtTuZ7PAzw7shwjquktfhmgdL2GXbyWWeCwYJje8WgpJwMWBocyJ223BaifqGRs9Env2EWDcytY999cz",
  "key11": "4YEN17B7x9JEWr1Axiq7gGLCrjxb6HbWiFwFQHRXj2RqFZVPsrJEGbb3tE4aLwyScFpKgz2vgimuCHLNpanHXoKM",
  "key12": "3rRHTkAL4KrnfmP9iVSp9miLSYRQ9XQEyEUjpX3PHW3znL9UiiyY7PsuQdtNa8L2kcvgCCeAuH7kEfgSyKecHMoj",
  "key13": "5upMRFhzNHAjrDc5k4DfryTqFGwdTdp4GPHe4GJGxBtny3c5LxJLK7cwcSuiNPtzBBYSAu2RS8bPPdmxWm7J4JSJ",
  "key14": "1uy7UMtonYTNKVhce7uaVgYoktmfieE4kj89bdPbt5HGSGvvWVtfH2ToxbecNyPm5Swhz2sJxRM2qWHHWv92Hxf",
  "key15": "4yhHxv51XXzTZPTbv2N7h2FAZ8Ls6xqY4KNMEXGWGocdpo2J1CLWMoZDXTKFZAcmnTkidRhCSMPNYLihTMmAm5LR",
  "key16": "5ceXYBwjENukHmXpzRnxvkTnzk5drHaQqjHYmkxJ68wDwXhf8wy28Xo1kXtLCiiBoFKqYkmf86Vg1VYm8uRxptey",
  "key17": "3KMKb6pjPm5gi5DSH76epGKmRvR7qWiDprxDAk2rWU9eiRcSGdE35NY1uozbTzDsi7Zck9Ur5gvdD8kQaRG4WhZe",
  "key18": "4LtSqrSNfhXKcgvtCZQAqnw2xBK3JnpvjnHJDqAzoyMAEbx2dLiNtVXdxyG6LjsgQnn8V48nryZbazsTFWAy89sj",
  "key19": "e4F4JFSvWCmaE4yYPe9sP4SHtEpy4AT2uCx2KNfeyVrQoogw62KgVbJYbJLmyz1MUw9LBJJvL6gDRYGprBXvJA8",
  "key20": "5Q6M46tyPBoDVt2X6Z3hequZf1GvsSebM65d2b9zY45rHyKjCQZZmYiACwmdDnTmsdJREoLWrW66wMeyZuRwXd6n",
  "key21": "3eygpS72xYQyYNGHiVyoMjtbM4cDtkWi6PkSbzZ7mvEem64XVEfd8aoTa73XaYkaBb8YCQYWNDahG6FmBBWkNjow",
  "key22": "3LetSgdSezDnRkRmFSXNTv1HkhXsvvenxMiCr5Lyv2NQXmxyBUjxq13ocH4QimZT8CnQdC4aH5zZnpC4uctBKm3P",
  "key23": "2AQuZfhpfraEspgHVU5RYssN5b7Cn1tJHZzVvGAEoyfFSUAceuBjBF7ecMxtwGwvXLyu5GSic1L5rioibtBaBnti",
  "key24": "5Q1qMDwnjEfrrmWTN7PbQUWuJPYqTJBoqQhNJNrj27UZF1VjY5E8tNnaWTrCnEQTgXqQuSa8CSj7xrktSAPucrPD",
  "key25": "5huR8Qz6UeFcz8G9QTd5KmdotVBcLWgdtC3LEtPwaGBoWycHVExmYBfpRtf9S4VKdrJugJVNCU5kytVTxfczYfge",
  "key26": "3WRVKEbctgwHXmTaRYBZT39n7PTcXT36nPwnxCUcFYesdnXQyTDDJV3YXRRKvfY5zCbgSavwggYK7Q8J3BT8Tyh7",
  "key27": "4CbbSSfCbukFSew6mZTsWEBgggigSXpAkrxy3iHKBJPxr6fygEFJMprpd6BnKhSXXihuVgfLxUwGd2zwZmJUcBSm",
  "key28": "4sf7bJyZD8qC1ugG4zG1XFxFAoSJQtdrYGatHpwEC5EXLprKtGCSR6NgL1EHGFHxxYud1tNCaGHJ11Jc3Q2QobyQ",
  "key29": "4EmgSEVUUQAWFAVFabbHhAcdCbkmAjRt9annS2RmfqYcchvSnvHtMu9dM2qZdyoHEDFU81DTbK5ZxHtboJD6j64r",
  "key30": "283fezmB6BupZFLgx9MdxBG34f4g49QDbP13MnDT31kpoyLQK7J5oEQ6tHHc9yLGD2ZYE44UqHEQKg48Sc4Zc7Sp",
  "key31": "BiriYausqmjqZy7d28mChiGngSKTsJepygzCzsdhUT66mxg8wcDBZLAYoLhg5h6DcW7bzrhuGudfiHmCoC4cRGk",
  "key32": "4H39pDxeTrLJ21gQNXdmQSDLpwYH1w4x7oxavxwCVf1ekZ5MRyWKMRfaGzjaeBmfQwxHaraZogYTjydsvafHjGEC",
  "key33": "2rnEjkzMK66PCgXovafX4PLxGbmEpzbj9VB4yfZvMci68W3StGV8nzuWQCQfCtgJkckDBSwRA1yey4q8QbPvgR7Q",
  "key34": "36SbDfPCmspAUS2jg3K5ar6uoUj7bpqVUxQJ1KCLAQMbywUXSgC3MtFXXUmNnSPEiMqdno8ktFNZhdaTd7Tr6rJm",
  "key35": "5DPtNR7GigBii6814sVzna3xvQN8BiozNU5xzRuEdgxQdmwqmJWMHYNt1NZPcFtNRUiGz2FioRca4TGS1Bm92Dsr",
  "key36": "2rMXpztnjU14tYdBrs82LjQtHS3oNs2fRYr26Ut7gjXNhsiFfe83szNLkqqNbt9yseoxbrCeoAzNcZ3vboUr1K3L",
  "key37": "3YzmiDqEQixQ43UpLPgr4zLjDXUGTMC8bA6B8QD2fScQS59UoEUk14g3q7ZXBUNKttxgaGStnsPiP3Cw95sAvdps",
  "key38": "gWJ1pC8mzst1SXyjXoLEyVjmnM1QQXWqjfxcQ8ib3RvNZHjojSb6JUvS5kXBmTScE9pJreAkSMLJs46WaJuGaVp",
  "key39": "36griYPV8gsA9ihamvYvMsPRG3sQxwmj3cj4FKJaKmNJHC1FXzGvWtTWBUwqmRqGf3w2z6SezEiqeYmXZWiMgpC9",
  "key40": "594K5VSNHpj6Ngcq8Fp8YUm8jXShrFgx4JjP2hS774BucGvy61tbCWthMwAmMpMJmHNt47JMGnyPYqnJv8jMBfjX",
  "key41": "3Z81ReQbCPCojgUD5Zmp6yvCuvAsSJGwRdkaLWwXQXSCgfbrx3pqu5kh4SvhBsPPmP55dKUYUSSDTXGTJWmT42cN",
  "key42": "yGNuL6dYH3A1gexgDMWYz6fCcUkNzLomUtkFFur4fLGXrkBVJ5tnLi7bwz9q97BbBz9BvcuBbKN3mvnXW7PbVQ7",
  "key43": "3kGPqwNTYKz3yFe5NRLrrsV3m4p73hPVcxEk8mXw6c9sMyAjwm5rQK9XYM8jHYQrrLSuAf4Y9jfZ3GPiEjpeP6Ls",
  "key44": "wyhbwqLGWHfqkCKNDe5MLNEppKhsSohQ9oUkk2cd3aWttyijuHMr4F8EVfx6m16bF26JmfBxTpDuLxYmZJkUJGS",
  "key45": "3ZtYsicWBJuqqruh5y9X7GzuFKcuSnGc7X2kzEBfGSeezXAo9ykewx39z7BK6AE4y82JSMPygNmEdq2H2SpNq21g"
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
