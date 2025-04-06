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
    "4i9q4MFMhSo43FfGiCuNaTjf36YP4spSmDEtWadXrnE8MoEz89SZgPz8xmrXo87o8u8V6HmQU8jcvVU2t98ZJEVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r8e25zs3BE7refi9xBNM9ezqjZm3i4JKJkjMEyXBG7CvkJPkBm9UQsnKf4n36vnfyYMyH46tUT4NPhqjtGKmZzr",
  "key1": "394qUPE9yCNKHuZocby2RrgUyMa9Y3MNrFZRdySfzteDH1gxxTfxVVDMEvYQaiqZm1kHtTGPrqAegF8BJd31bR48",
  "key2": "5AeRRYwtFQyZJCpuKSFJYbHdfAfubuTf3TN4RzQVCx8XnUmERjorYuuQXtTH9ZZ3duKwnTX8mwPwi7t1xcrRwLwa",
  "key3": "5gCgZjJbYGBZD5rHusGkeoAs4wBo7s1jcmMWVAGHnQzvPU5SQ57W2pettSi523HkB5tQXdLewgJzsHvcRsfTLcvt",
  "key4": "4B9iNynZ3TQZ6n3mRVHXRwkGhTiddm4cJsJPLdpF5xjv2q7NbeTyftU8c4fgxMeRu1EVKx2UwRkBe7BRDYcHf6yr",
  "key5": "ER1erNuGeJLJ9R7nRZg1tLhkmNqPX61LumMuBpNqsPjcyt11yT7E3z3jtthMCzitGPTWPCu5RWnbdTgHg6GiXyt",
  "key6": "MvGeFjk7rVhtinBafCVC6yYn4BFrYApsybh5NP5LHwaYmLAywd7cbTybvT2CwbjU9jbz3g3LxgN8df36j6Y6b2k",
  "key7": "5ohS2HKH2fG8M9FprqwrMA9317TtEpjiHi2zcMHp2jk9NXcHKnKfHsKZZJz2x9pUgvuzQoq6WVgitEtL7yyZDwEM",
  "key8": "4jzDTprDk86T5wNe71MixPrpDHzmLCVVg2h6Tdi8aohXdYVwdqrRV5q1fce5erLMzH4nXc3edmNC6aRSEJQvD86A",
  "key9": "43ZR3WdGhC2G3c7rYf2MsGsi8Px1j8tbvgyc4WRNRp9sMat4bsPCkLZFX555C9TfmX5FFGRp1ysFXJvjFXuBudeY",
  "key10": "zKMX3KkBExRupm9Y4CdpLJeRstvAzieML4NULNVp9bCpfSJptpjyrdmFbE7APK95vW5W1SfLgR8XAzBCxS698ro",
  "key11": "5HMCRWPfwPnnpq7TVXnfDTx3rWs2Y8CbHMmvJ7ZAXYj7DrSKBF3c6gTJLzV6cDDcZ43EcgSPSqKno9Zecrro5Jns",
  "key12": "qDPGuoMUDPkJdKVjtuDQup7ry6s4XpRUDxnMNdHLuok1hfnHmC3sJMTy9axc5cxTZanfBmdobAWwKRS6YAYTXHy",
  "key13": "nB9XdRxqpAGt5Do6NUVeDDNYAa85nf7pkgi2EaTfEX7GV8cbXdraSEaPpBBCqwzDfp9WdgdGvCH4GeHTnAjfwPz",
  "key14": "2Umqg6yryMNANWBR3TjtmAgGZrWmTGdGMAXazkyB1jCXb7avF5VNRMEcU26bzYoK5yWJetk5areWmHU4oEs1KTDX",
  "key15": "3zobcxShiHhRbc6HbxXEQ6L4kk34K1fbeCPeUfKdcW6wmPrBSE7rU3pGzmEKLGcRL63us4npABdfEdYAF6cabBqM",
  "key16": "24gsD7vxqgSSQ3YjCBQLFFYBux9wgpdZmHibQNq1a5UawtdUkJkbRYkm8mZeexFmmUC9VQAqHkKbtfCDN9LVgXbe",
  "key17": "3FAJgnt74ir89i1BjPjb88MMEXreGtjoKTr1m4gvVTsRxjUa9ADfTzo5DJzwwrkgSXfChuEKC3kRPvPCVwC8YGnn",
  "key18": "KM1qxTi36B5B7kyoz9ngsEfSZnHLjPYwzN6Yfaz58QVDzor9CgtEYgowjhZ5iqCr2czQRMG6WV7joWefa37AGpu",
  "key19": "3jcCnFsLnNZUnkgjPHfy7aDU2NCfmNXHMd8NecTZZYstSJan6ab8k8tgEPvRctbyH3aNqNPZokHUMm7yQaczyMrP",
  "key20": "oa951ihN7jFy51WPafdgStzrdycF1jmCgvmwbG6mm5ysYdfoNZeZcTiszM8RNzuWfq45yffgBmg1Efhz3Spuowa",
  "key21": "5fPYioxQ1G8p4AfYJg1H9sd81kC6p7zhkF3G5HuifYW2Buf5oS4TYpntYPiLjoTYT7NiBA9nvy1iVAezYRWPXWTQ",
  "key22": "39ztAxu386uvcqS17JqghsBVNGbiMpGZGfiveMEiBwhGeWouNJnDWuk2un3dXBGTi5LvvNqw3gggbHWchE9XYtx2",
  "key23": "2mB1KigHPMy6R8ztgngizGNYScSypcRtCFPqUgucbaRg99SchrSm7SVTLWLdDcXb9zv333Ha1imy8JGgxHd6y5zZ",
  "key24": "4eueQSGded4bnRCPhTTUPFssHGC64pns4gwLY6rsf9eD2Tii5bR9Dr6Nrfi59nbFikjsX9RvCsrr8vfgsJFUJBxh",
  "key25": "3JP9gBgxv9Gz9cYCg3ayH6kSy4rkPe8opk1NoNgaY45fi81yiWrgBuoNuyjfgsKmW6omPcTfPmrRhkuHjJS9Lksw",
  "key26": "573tvuqyb7eL23NasVVkvqxTL3F8Pt7JVcaU52mx7wMSe6wWghdfixSVF1WzqTHPCPPr62i3sQFcMtYhxw4TqEmA",
  "key27": "2WUvJokj7pCusfdH3FuvUGddbj6k1oWfW7XkfDn4HtHfrKKyyg7bdCUgc6KkY7PDn7zCwPJBdzPxzVcqLr7sq9uc",
  "key28": "4TtFvApg5SxhqExkowTAGdGgcLHaxHwwwxJ6ExQUGJAdEw28Kqv4QQRMH6HsqGVmtuSTV4FkbfWz3cjSreeAGVTr",
  "key29": "2KTNGk8FRiLoyt3FYo9npPTyDEyA6e5pfJUzBib3oE2uYSys9h7VXMCCa3T9YDnf23a4Q9ikD71mb4LGe6RyJcXr",
  "key30": "3FimSnhMskEAdtstysXtxahwoFXaicjKpUz5AnwfjU8mrm5vvZmTgrwLGD4Qu9QZc9CEHh3UoYJ75HMHho1TzAZy",
  "key31": "4Qb8B7D1eYHzp27HemFLh5wf8i3Cdyxp1bXrJcCiUJZp1xxGPLQHJZ3wMrUykUWfoeHnxHdAjJXp5vXocBDR7LhP",
  "key32": "2D5j5iCQNBp4k4dtpPYELgfyBqfKTKQ8A2xQmysHg75WboPLcn7JSgsC4T1GPE7tNdkoASjFUqTobPEsbbdwSP14",
  "key33": "E4sT64qZxmKcpVvhmtyHqGBUYaToPmF6yrP2DgGyTv4EWupmwZ5XLZiT2zKevaxRCer5deZWfzziyM26oHBW9W7",
  "key34": "55aGnYjD3SR73Ktke59paYgy5LwaeHF2uSDfAtyKQsu5AoUCFg3qKN1UrupdNY6izZfDrAvNXqANtsxqEAcJ5cDj",
  "key35": "42UCpvZSnohfDSB6AVbLyeazbGmLtm6EvwiuW5tErhhqKihAEfxwGqAEVwHChzgdmj9eEgVJYFhy7kzPut3Aif6A",
  "key36": "4p1ook3MQu8z9KSLm21ngFqt22qwg1v9QKGkHJnqsvWawuo84LsMAnGYRPYLpZHWzEqbp77et34KefqrPgLf5PoV",
  "key37": "4JDPcCTeBbtkQMFFKXRLMqQvHf5J74yuroshJHhu3HMjxZcv4ybmyAknQ66VqTTkJjNLB4W3Rr2jxXpVcjtnN6u7",
  "key38": "2a1Gh2itBevPXBFEtvf3x4SiZfU2qa3eWtRfW6jH2XDRLkGrRFbBRd49GnjW24eNVmdc9xeBxi1M6zRZRpAPV6UD",
  "key39": "2dnc8WZ4nE1f4rj2VTGMz8srZxvcHpoLKFjfhpXZdDtWACy63tpHuHbYfPuAZWRtEJUVUxmu72D3TU8kDwvBqJ3i",
  "key40": "3ZSUv281UYy17U2xyTXxU5o2neD7jCcHUtojkF2EeAzYURK3Rw9ob5zTSC23yWHx17mATSqTvY3DPVRBsR5z4VmW"
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
