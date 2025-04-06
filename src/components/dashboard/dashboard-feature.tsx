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
    "4tCFQXohd7u6DvFt1tPVjSWZbXGHQsZGwJEAYwuL1156wMe29EgBehznsB6whQWdn5feQDyazU2uytKKFjTYZKHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "69mA3Z8H78ZQN9vG94vqzKEqYkwj7ThmyhKcWdQ9brrkmwoWkMzLTWgaacNPZZnKi2pWfnRFjdLLeSaYnW2KjcH",
  "key1": "4AjgRNs1rEVZnLrAy4p8gx96Q8riwCWvJ32Mg6sSCAsARGRhXYw5AmRbR9MM1716bFHBryh3Jc6z4yGzect5QPc8",
  "key2": "2UqUGWre3FB8GbBtwo4tMHfA7nKxvhYG3raPXWC29gqxDomcsJBNVm9vvcP8VSHnbgpaUwBZwdCeQSXHdLeP7egB",
  "key3": "4yHYQzwu37KUNDUA8S6EuRfjVvARdeMpCPVVWJLfto6nfGjtULWeah3yShx3pXTiyh2Uy4FnT67HhADTQ6TmEmi2",
  "key4": "2zMsVhCu3U6hfr3ffjRUL3JujQfWLpXXMAM3zU7CHTtvpeWijn4wdoPWhSuNVWnyQeUUk7TAPZf31fUfiNWttbbQ",
  "key5": "wuMq9QmcR5fCd4QXtTiDyrkCuk8HWRjk6vLXVnHVubfiSVKJqtn87wYWpHpyBGbqcb7srkLPAWsLKo1HiMeH5L7",
  "key6": "AXscsEyk29AgPFVxbAGd4uDLT18UwCPresYYJmgNXFyQWfsoHWDGcBNuGskpDQiJjH5HBs1xT7GFvRcKw8CRvx8",
  "key7": "4ACzccqBr9SFA59dewrbUuMsBTCNcqe36opdJz6ZXdfu8TKXi4TuVcAD4euE7k5f28HdyA6hNga2iFAHgzqrm8D1",
  "key8": "5m5d9JirGCDjmv2C2Y6BFXfu7AgybHFkfmS2UKneD56rTvC7ZbnrurLkALff2Hh4FHY6qJLUDhSGaZDGrcwjVCf4",
  "key9": "2F6dcMDpaECEyiyhcGM4Nsg57UMZxKktwU9PapuGPTUZy6dFANHiVs46pVLqG1C3PgZNWeVtoWzjtp4obvwjsy85",
  "key10": "GujfWpUmXDAVQCNaVAJEG5xXWY9nfgKaYEv248o3wu7jGn39kptZQVyxiZrn29UVtZPGBhY1zpi11RnkDpPdT8y",
  "key11": "2EhpSBEXaMWAZqTnBajrPnPBcugDPNdLS61uYpC39cKd1Jbt3hBLSMykZCtrzAV3njaaEunzfZG4FFGbg7CTCuLz",
  "key12": "4rdqxfPRonNRiNKj32DovnfUGzCygoSui635u9dUjeiBiKVw7yUtSdiKQjJudVhdqS9STTP6LGB2PtJbp5VggHvs",
  "key13": "4dP14R3mXJRK6g9sacjkTfHeWb1nkpBeDDbRhjhR62H7SmeBcSHNtacKuDY7HSikVhRkrkmGZyGdfReGVdXfYQz6",
  "key14": "y4JqcHVk3CNESB1TzLtPjfxh9FUpzDikPY2dQq9KGKY2tzMtso62dioEXz2yD1zxBFdtpjQcymuE1G7NSoK4b2m",
  "key15": "3QoD5fsXEM25uQnfGJdApBHfHc3bi1Q6KKH1kf1dqoFXtX3m5Ebyq1vZXkXurSvUTE2Co5WjYsfwxJPxLVtF8Cua",
  "key16": "59CdpZ1Vf7cnFxPht2DgBVhDR5hWziFXvc5QF3SFkTuz8ZG8Yi6YPGUriFCgkZ3Jj4V1cQ9WZLqxz2ncMhpDdehp",
  "key17": "4P1NEe922dhqSJZEgmsoGoWpPB44njAEPuCqgfL1v67ZwUYJYZ7CXLz8yrBbYdRdtv3zJKSjF8wy3rZ8rc6hkTkh",
  "key18": "2e7o11uLE6TMeuSj53n3sT9z5qmXvDNz5Kdre3oJPJriCVeyXtBaoFNw56kraRMh3y29GrEegKEFeHu3btoLQY7A",
  "key19": "5ugQ96JDS3irNKmoEYoho5bGxWVpnFnQJMHa6KCANPMiAfCZRXMwHFHbcMwRe7H8DyAXP8JxBEd5jS737m3H12Ub",
  "key20": "4R7HuZtevGv1Dne2p8XioKVDRK2own2knabMNz4oVybjafexoY6ecVEjE2XxkA3QaM1k8x7DFBxuGVM4TE75bejV",
  "key21": "33rPMrTQQxvgkNKf5a9Y5FQDyvzCvhyccvoi53F2Mb3LBGGtthQcCAVpEHojQiUipzNrgo4ri4f6Ut39iTNQDnYr",
  "key22": "J23AMRgtSRdJSMarPBFeZ8NxVmqTdXZQdkm1duunxamFbV1Sz975FJjXzRJby6zCfxe43djBc1iPhnzNEAGeXER",
  "key23": "51irhxeu4E23QZas5ztuzmc3fVkMgzHQBXsux4mbEjcJTcSsMCnpt1upb5ajDfUL2yymgdtLpoDqjXTmyj3uavQ8",
  "key24": "4RyFhkE4TRsg9DVRkz2jjZwCdL1euYUWe2YgT3Byzjw31tenmEuvfrPvdee8f8qxhEAW4XikauojxLBp3hT2pN5",
  "key25": "ccnHpNfCbr51KHV1Qjou3ZvN7dn35eELcjUNpJgU3xCchEptjDN3cRtJrYG1PbFomaRhL1tZudUKiWibBhJu4bN",
  "key26": "hw55gmhZpdj7TBdJPQuLbRsUjf5Zx57iTTCncSJvJSV2kRJzoB7Lx9LG6R6BPgMPiz2Ku2Y6E9c2TY79cD1MXVj",
  "key27": "W2m61P6PgRhERApTrnitHqYQHW6NYKRVyfqhvYumtMsSxkjFbW5YgdGbaVqL3xCBCqxFuA2YHM44DEZK7FnjBap",
  "key28": "3VjWFhUvE1VRYuwihdxncxZ1yExuAMmndFk2kPBBHqna9McR2Pd4TAPUHZMDUzXFCwnFG8Ds3etpFDzynHg16Frr",
  "key29": "4tAjtduM6tUygW46jKo2NvZXPsUH55y2i2HNYZBvKBrHMNEzvjWxAwBGWuNUgBzvp3R9y8nm9Kzp9tgFeNgLShJc",
  "key30": "xGYBpNmbRqdAwZunthKWaauQVoBwYjJ9YNMt8egWufUnBmuRy1pG3qFfWdNdPYta39XkhcJiPjxNUzwcpycRhfb",
  "key31": "2qc2DYvVSzdWNTWG5rbaeGkvan6HMxrJYnN1bDYmgLKuj3YeWTNYpH3bqSLkqqVxtZEhxho1Bki7G1LdCkeg4xyj",
  "key32": "5bwNU7HspmE4QAVWScjymBrDZ5sTdfz1yKiVM3QPa9P7tV84b6ZoxgUYRwcvGhxyqGReAD1oBrB7Gd3rF9GRzU65",
  "key33": "3hpZqSgtceNqNnXxXMQmH6qAfAcnqG8pgUrF4BZaVces2p1a8Qr3L4TusQNBNEXWnUMm8qN2RWN6sHMV8DKGaBnd",
  "key34": "4VvTKGGPpXij9q8w6RrwsasjkyjchbQoeJSgspixbNfeJTMeQ7skkeepvJYGzF95jPitJ8ku2f8cGKhR8riDWZzy",
  "key35": "2FZLJv2BjazhJMawsz3Py96q5hmRAsMttyxtjfRx2gQEJAnvxb4MdmxdpvP3tL7f4V7rggwM6KQKSmsjKpDFHCvo",
  "key36": "5nfKukAEHKuygHFngL9WvoB7MDmdUDBE6o9xodhbM1WMXG3F4BjyDVpyJxvdbfa3HSCz28Qwbh6y3cV7yWR2GtJM",
  "key37": "5dBP4UP5KC2aUSweuwEXjM6tmM2FEuafthK9T56kJU67YTCTFGupCVAMbzmLCvLGU68PckvMooNWpkRiNMYho1VL",
  "key38": "YrFjVK14H6Jpg9Mr5pyzGvXJoD1K6NtRWfjbXpCy8YS9bK87LuPEu9F2no74KUCCdoBGNXmDWMoe2Kiy4P1aphs",
  "key39": "2Kz5UE27u89776PYRqDaS9nji7NCkoYueZ6G8nJeR3CsN61tRgAea3vaKRae6nC7xUDjobV2gkjtZ3Y8JW3fkUEw",
  "key40": "4LfKHvveCgiF3jZxoWGqZCWXiw9EaC12hukSeA37PedLqowSayBwpWY23TJumRjNsiDm3FgXxywurwQNrFJKGLg7",
  "key41": "62M6QQM339tsJ3FdQ6GNpWA4pzMww2u7xmeoYcn39pm9C4u9GEPXRa9qemyDtMgTNtWTdbN2jhdYTUURcTCaHcmt",
  "key42": "5uWzsuY6hxF8HXkBrts1eeadYM5mGx19XmDFbcXzMpbAcPDcEZqXcLtkNCmGnrU45TypF7NTzEoA8DPJRW2vXhjE",
  "key43": "45ef3sj23x9TtQRioZvVxScz77USue7RmXhBcaN1919xLTPsqgr2UShb1VpxtPBuraFBG7zQg8kgm2FidH5HNh2k",
  "key44": "5EEhJgE23yWpn1FKeHZWX1P8YXrjRDSvuXCAWGLbYia81aJLAe1kx12cYBses6aQmACHMFESKLdZtpMz3yoVArcm",
  "key45": "5GbW5Ko3mLXNg5cZCbWFvSs3HXMrZd64mLTsqgYUT2tXmVdqcFRXbnoUt3vwuiDat45pLp6ti4Jcni5tBeDhxLFc"
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
