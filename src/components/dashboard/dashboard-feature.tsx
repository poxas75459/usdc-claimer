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
    "QvMutxRkQVj63foLeSNBnkL9P34JL7U2gVfijM6LdUgmutoHiDbFDsfN9Vea4nCGRxygQjQtcDqmV8BwyNnQCpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DFm9GGZg5gksuRGHnwe44eN1Z3nge7aZ7DJWZiNPpMKuMB5M1NDVG8vWs9peFSrzAVgiWiV9rhDJJGzCF51HzxE",
  "key1": "3ZCAKgcvYfwmUfCnNRGgiwVq5H5RzdoxXX679GTVWhFs662crDo2ejskuJXSMRcgnRmygcGibDRxvWZSWJYwweHD",
  "key2": "3x42M1cT7dZM1KW152wtNfVmLM3GMjDeMW9P8hfit3Ld4Pyh6RQdrC3ax7TZrHT5mHupjX5JwXXfF3rk1QuLENQe",
  "key3": "5yCSGj9trwfFa9tmE8ucsmRvctR2cxMNFguT6FYDwxoUeUJt26btGufrWkUTjX6yevdfG2n91Xe4FFnsNjQzwnzj",
  "key4": "2AxTvzC74hDbGUBRAKpuzdyQ8RTGqFaacspmSKgSN6FMdKyxfuQUrQUEzLVtMGd942kCx7gHPri6Nhi7dWHEhpZy",
  "key5": "2Qg4dhy6VJDQZU6bgTFdnDYB3kPM6rALKkUKdDwD58a1QfKVvnZab5ub7TX3oBkQq1FYK7BiNQg9yXJVDuCayYNY",
  "key6": "2CzU3MrrsqhAqxxMFPMj2vdMMqbqTjQA6UGkLLt62oYc83ysMeCuNtm91wxjMymQssmjNChsbDFfwztJxEySCTx8",
  "key7": "55BKMHLaXnQzMU25DHUcXazNd67C7PLWBAoUP8ZAKgrokiSPZbQdvHaZDckHiYdMMsjLiTxhmxeXUvpD7gE46Dp4",
  "key8": "2QuucWTHLTvrv8NHKSCSUqtCAJ7AZ3A6BEUZpDakxUEEzLcBEj9saowZ5zq9qj53qFcMc35eVutpuZnXS5KAzjnb",
  "key9": "2TiZbKXnPSzbBWVuQnBXEDYDiJ6PM5kTWeVDRUmuzVKstRYh9HyxEFvFNNTfUqEaUQnKXwUW8kuao3exUJeqEYtf",
  "key10": "217yDuq2JAAZqZbWCyMR5bxc9o5goT65cdDE6j96pq1gHtRxdWbx3eZxnkhTsFuTYFMPSVsmahzUY9rD5CuP27tS",
  "key11": "4SVE7CJS5NrdcAj9TmRzezRWsd98EKr67GTpeHat3AnfWFmgKo5F2jJ5yz54RyBRKUC6RM4RFxzzJRxxasdJcirs",
  "key12": "58HLJfwmNoGHHhXZCpY3oR7P4SBZ2Jb4MwfcLXW5ixMtn3VVtZQfuD5inEZduqWorKY8YEuvU3jtWsueby1WkaRo",
  "key13": "5UE9FyPy5qZEAbXjdqvjxN3VnU3CxbVqs4B1n7xqPXReFSAwx8RX7rvHwa6ZXwDWT27sWz1beGe9e8exDmUE5W3Q",
  "key14": "2R5yR5pBs8us9TvHHySiEaGFwJE3hpUo25NScW8zxGtAgfgexb1Dbnd535s3mBFVKeyuTximKRfZmGWtxcHTo96V",
  "key15": "4u7dEUQyvFpzr24VpvJqykSY5Hz9daEoK5XEAm2aRAqwWMQpJYLcUnaYHdQBM7Tmmn1nC8G6em8LjrBMw8Lghdo",
  "key16": "4g3y8vUdURRErGh32hgsRA4YRAGSohcwFPqyb1d1iJVUKiNV66Wog5CCjLDZLfQG9kwjbQ4vUq9qvScH8Wmt8Yqo",
  "key17": "38wgSXqBQQjwfuf7ddcUyESi4sCc9J2nhbyNMbDL3gUGQWJpc4LozdFkjGwLFieRm2RqN6KbjUGzCBPFvtHQZX92",
  "key18": "3abVZbztiG6XoEWkdnL31HJYDyTtUezraeE4pirCsx24zXc18wVFR6t3cg4BmXrC2akUPBuBV1dzUs9S4x3Q8xgP",
  "key19": "4p91P9dPa2DJZq8prpXfbLUb6LP27R557uiQF6URtNe95WUitXmAnUSwiiahJZGmAa9n4qxDHZQBcfiNYnfeiBsm",
  "key20": "4ZLDkqwaodZ3zBCADZsJcQG9bSEtdQcneatuCmj3W2SvMeQq669K1NTHYGfZyLvWm5pEkaH7Un5CsV7iVPaH7eBi",
  "key21": "4BpJvnL8ijZHEA6tB2kJL6dbA4dDCqkzNd8h6SC3quF7USyvsUsbj4dSBKtnaRxVDY4GvJsYrKdAu6Kvsxdc8Kq9",
  "key22": "29m4WHLWPCcdQwgiWM4k2y1Pz95ACaBZdhBYQCn26cqTnc5kTJcJ1eTZbC9KeFynw74eCWKC2djhghfEE5Cddhnz",
  "key23": "233SWY1ub8UKdg51j66pW1yf6diPVhEco2uRkPWHyhCT63r1rPA3TMLNNRRmCqTK7L7vZEQqdGpSHSJFSUE4Usav",
  "key24": "2nrGMGwj1v6qiUcNkzpHgMPPipQW9QMEJFRpEHXfDa47ddBKFiiTrDJX3s8B2x2nnXJEJnaehra6Er2cFYeGZrh",
  "key25": "mDXLL9eWLYwtLwuc4RpwaYaP44ZvtDNwV4n7SPsTSHDF2NwQnTPM8jLty52uLStw3CVHDJPEoHhNEEtFTcNx77Y",
  "key26": "3MvpzATWwdx3MAySL7uHLUc31iAhv44FH7eU69wj3amXqZkSoFGruBGz2W47WT3LeZhkinfMncHMBDSZzxfg9SZN",
  "key27": "2cUrRSwo2SPJyZgzZvJyvHPN8XBJakZjHKwfDLazK7uvUZcMysYLTuQuF6TjFx2jZDJC1ePnbnUdHpqgGzLHhbQ2",
  "key28": "3tKwkiDPy8QpkYMScCm5Dz23Mbt9THdxxDv99UxYp3bszpRBdvJKHVGdxq7qvMQhhM5HazeDHRrjEujieM71dCuB",
  "key29": "5yHpQkm36ujDZW5R6Ek8gEGdQiWW7E3Pt6SNEeCbdpZfAYqF9EuMF139Qo3VbZqTTwB4XRrGm5LvGjmtEmcXoR89",
  "key30": "2iQezs769fvKrmREsEfBjWdUiiaA4Fh9ehv6GDevXeY8c85zxax5UdE8TuPgdpPTheogqLxMjYxaEAAVGvhRnHdy",
  "key31": "3hUgpAXNUzVjVyCnW69MF9Hgse7XajemQdWLxJP3i3uwnFcuJgZMz7nfGyi4nEJGYuo5mPdi6zdKqajcMq75x9m5",
  "key32": "Nbxi6k3BVYubLdc7Netb9VydjQkJgsfkCcrsCtdc1yfFFThWqEKioevzUQRNPaUge8GVAb9a7KebZQLAns7H24h",
  "key33": "4tN7Qowx4NEQEFa7HMDRaDDXatF9KKrfTm3h8yEyooizgpP877ArTS9iQfPDmnAy5cXSRctajo1HY7cRw2HrFdAV",
  "key34": "43AoGhPtrmJiTuVkiHpXxToqRsfbjTVik9Ggm49Nivu4S4NJKfqDF6t1cXVtnVTpu1tyzLWCVMu2ozRr6CuzKFM",
  "key35": "NBULDfApvp7EyCTacpqUk7RiUYNjJcbjGX9K2bzPe2uwFKzcJ7qzrYty8nkAjb2hxXSseu1jmPjzbRXhuVYJDHi",
  "key36": "3vMzqXeZ5zysAgsuKtxudXeg7fWVJC1tf8k9BNzNMps7J2QWKDqyE8nbopHVRGpYaGcEG4JbUQHdXpLy2ZhWY3ch",
  "key37": "2m3spLy6GonvYvyzayNn2uTtPeMSm9i8LJ4M878f6mWiKf2W86x5V62wRD2xkysH5FaJiwRsTC3NKFBnSZbX8aN9",
  "key38": "3rkCN91XhgtNCzGDQBqzrQQcZsSpWXhRE5R2exZQQGaw3gkxHLkxqSNX4J85rBwCh5zj8kn6YxmkwGWqSBgxicWy",
  "key39": "3TRR8mP1SkXaakZrTw2E4yXJQncuEWx8qRTMJCJq7KwNLqxRWa1uzW7jQE67kuhZXwmWQWYaZo7r434rv1KG8pYC",
  "key40": "3HTLt1fzc618QX9Cz53XH13PL3QrBEsb22N6tMUMgrwZwwtZqmQD4DrCD7vRNm5g2TS5UQkfRUrfDgnHVsZyL2sQ",
  "key41": "2dFCzp5CntMLgp1AET2gBg5xccz6VmxeG5fLHiaazi4ALGhJjp2xmgHk6BgLtbVeixusn2ixx9h9JDTKS5TG9eue",
  "key42": "6QQpagNk4pJXJnNijxioG3KytcfGp6s9AbceiTp7V1CsUeKshidiobGuLwkNiSPHQNeJyRykAqLvy6w2FsMrb3t",
  "key43": "32m51ZsUigrysuwz4yKRvWhnbzoPiwh7Gs2YivveKF1GcMoA8GRt1UirgcRHBHiVPYSiRvLhi8j5mngobWN255Vv"
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
