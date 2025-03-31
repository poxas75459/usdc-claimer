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
    "5VqEH1HBTCpUeDetdRKsKmrFaaxP7Q16x2nXeF8GSkqw2tuFnJ7mfB6G11UKwjh2LjCZP4ZcFZJGPxgR73da2ppz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CgNtLz6bMfdEQETt15TRSC7SFvKSsQMdoghpbG28FEpfbQBQVKAqpV5S1z3Zf54dfxhmCUUpp2mSbC7o8Lnj82L",
  "key1": "4MTiJUwQ97aJBjdscX7EbqmuKBDDnc6xz1UAZRkPJzXCLqdGBguUJipfBUNgdTzhr1JhjYo8fdkZmnx7A564bAqF",
  "key2": "29MnQUpGCK5SuqYXxigwkBz4fFs8ELXnSopctvdYPbuLApRsngVEjndEC8eMx39gfEKUQEa1EUh1vDax1ehK66Hq",
  "key3": "3mXL7xLF9HmDfLCN3L9fgyPhnAkz7ffbCN18A9XUkeH23GoMj4unLekmvnA5hgXgXNC4hpAsMtGZ7UCqAg5KLjej",
  "key4": "4BkBu4PCg9252JvcZ64TJucPXKAyo2RjXMyNMN8bx36hP4RMvV8mDP53MxLDLu6GyHzP6XH5fSDkRJNBqHre4gCo",
  "key5": "386aAAsCCT9f9UvMT2svTCZQ2z8kkY8p8R3zSGk6By941xCYTZjBP7e6s7NK4sHeJn7MVPqHpgJBKtHoScHBgxTh",
  "key6": "4EQVinnymPiR4EmZYGfzKhbKmWWzPqTdsMUv9rpeTHDRbcvxKdUdAWhb65v9128yADAebX1jiosHGMYA7DaoM7tH",
  "key7": "5H5u3vtVDByi9HfRXvQ7gjfh3eftXuESZWF8mPSCY1QwzPb1ErguL2ZFYYREc4sFxQHTk4JkTsQswed9ffVRp82n",
  "key8": "3rbS4sBxdyeBzBZ2gv2MEXbSVx7DQeNHmi8YNBuL1Wb6jFAZ7DM6xgZ3MtLaNxuLozRQC9SJHdeVXXzPScMDEiae",
  "key9": "22E242NAsatdUkNrjosBV5mKjLxtmqS9RJLspAWSwFxBEoKsNvFf8TH2PV9WXUvsW6ygxUMXc9XMb78ZStQZoPZy",
  "key10": "3SsWQVGQv7AD6ZoCxhg8B8uHe7ZZjSCr2ELbzPX8b8LL66Bq3i8bWUZ9iCUK39XzJrJMECZ5iac7CzKCGbSSm4vJ",
  "key11": "3XsojUdDkxRTtxR69314S6X1fm4NtSKfnDmacJoMsun8rbrSQLcy6ohXAAsuwz57cRfuBMNLGbvQiyDPd4NdYXYq",
  "key12": "4Syg4eSYDFcuV7ArgfhcqSjnEmzbFfUucdLsPZAk4vZZ755SQwdAsRDXEgwXYo2BrcjxwxzXiUFH9UCbavuC27nY",
  "key13": "33KUPbgUGDQYrnE2nb74VDrrXkPVtnZrP38DAt6oo32uVHr65wgA4921BscfTPuX2HdLuCDJjYK8mnNcriCuYGcs",
  "key14": "3uUFUi7RPui1KfX1oSkdPDtWr26qV6NqPypsjgsyjxXcpHYDTg65kGYyZwW2xK9yJ5enWWsHj7wRGq9a6YrpHRzZ",
  "key15": "2SQ5oUG6RhRQsC2YeRXacDLm2WFWCJFPTbGo32Sdbm4JYEczBbTw5rQeS73VMcjkxvDBL4NpBzaXuAJn5K3mcbNg",
  "key16": "3JF886KE5u1VMVJhHHq4NTY3Zd2YQWqWtQvd6WJDZGBKa99LGra69skJ2cwvJgusd5mHviitKuQnJ43EzyE4hdPb",
  "key17": "5iXvx8Bre3ELgYozaHgUCwsdDERagMtVytZm2cerV3ncwqLkfQ73FyEmDVKtPng7r8FYjNCTpvKqqTEdsnvEDCtx",
  "key18": "4aGZj2psMxXGuvzYinTpByXNQuosCEPUzRjQc3VSzJcoD1iGcsohcSJQoVQKNHPJFj8YpfsfYShygVPQFQXrLZZj",
  "key19": "49UBn75dvgjzNt24JvQfw2iHRDbz9T98YTjmXDrMsy3QFoCDqABdb6FQxqwdFchFAHmCEZEwnHsn33VJWowfNfTn",
  "key20": "2Sa8fy47AdkBRjPuT18PnKn4V4ftioXfXuGWUbHE16T2QZy5EvrghePCPVsXjGcDA1RzkTh2wuU2zy6XdaGWtHuu",
  "key21": "2ga4i7G63TjFGmqMysofkfaXbaB6JpQsWya96fRYAofDU9qAPZBYEvDfz4u6NVMavPmpJ2j2FBjXd6ThgA8JtexT",
  "key22": "4qRZBQrUHamjVJYpPjWWQ4zgtPUxvQJwYFij6W2FbnN8APD4QvFbBHU2P5SLMFMgUaPBvFdGMN1sa2L6MKpmRSGi",
  "key23": "FDETUivLKu4pzZMhG86pZpu8Kkw5NBkYkNKtT9a4VfY7xoujSq1tu7UJ64hvkgM9mmBsftUbBMm7jqgaQLfeT5A",
  "key24": "muhgN286dgd5FuXnbBuXTkRceravzVtwo6THM5QKLAhScG4k3NLkDcgJv9P6HiMjZ9ceWCxY4LTa8jY1wYAFdij",
  "key25": "AagwJ7fJngzvgFYcSUv35Muv1GBiqcjcDmXjHrCCa2KUKxscmM3sKmqPEPqo2bosCEFggeV6vfunj98M68MfhYc",
  "key26": "71we9Dv3WQxBPiRQhGCXBUKSS2xUrAPQ2TKSM4CknboZaHYF8CXPc9x2eFL7jt5CpzHMyMSuN77kzR1SQ4A9WA7",
  "key27": "65Vowm19ke5gYyRtEtKCpzVrxX3T7Q1Fy1WcYrLN8N5MN9sPKZrzusnHeVsnTvLhELC6YTRuM746eKSyDsug6uVM",
  "key28": "YGmibE6oG4Rz4ohkif6V11kefmTcVQP2r6iGjBRW2y3MMVXqwUPAMbx9empfb9V1Xak2pABWnsGUgbdT48183wD",
  "key29": "3dDU8Qs8ghp8T1hEk16tkygpfg3kHB567ECtxVPFZy8ra46oDgwpKXMnaCY3XvR2unwgpsmi3j6TLJhUBc3gQT5M",
  "key30": "nbE7F9g784qPjGvaYYJbha8UhDymCJkCWWiQfhDHeNu6GgSTGsdABHMCF9HeFHcj6YbiSh5seeGsD1fKhvT5T8h",
  "key31": "5YDiC1ApSM28FjKvKMnTL6Wt5tzVsKuAhbuAfjbtyXYVhbT54Hqcw18kiWVgR3KmBjwc8qgvr6ovibSRvpEyZBDx",
  "key32": "47wLitCbQgDWwM2E7msUNfzhfVWD4sJcfMkh8jaCzXr6Yfz3iiUyZGekr23PqAJ48iwWPNYbpe8Z3Jt4rPmpYBK4",
  "key33": "53v36MfC3iAuW8cJvDsjQrbGU1PbBwFccFrCZnDmSJSHK4PzyBdvcAQ599YEbMdCZg3xoePQGZcZjAFEeXh72RE7",
  "key34": "5cNrR4LbxHrqy3JTRgTqB7JjhcCi7Gak4zf9p8y5dX1MRyQZwMWsmY4QJCwHUvSD6mQoNKSfyyvKpxHHQns2mWkL",
  "key35": "3sY6u2icwczoEDPFBv2xfUUfeDsYiFsHCCd1GiuaYYejrFkVxHj1eUufPSZABXD4FeQs8Kpt5z7BbACKT376P1pT",
  "key36": "5p8kLGpS9zRLEF6bUEziiQiCZqdabk484gMtN7awg7N42hEbTxuymFEdeRWkGJyXyRjzaiNuRg5yTE6wDNfNTv2s",
  "key37": "5LyYDdg1vQSmm9RnuiGbu2cRomwjwsKrXJ7xmjFMnGY8yph3Zo1r3DBT31LBPAJCTnjvbB1U8wobZ1SAGE4rxvL6",
  "key38": "5Koq9GRT3zUZfGuEVNSpe7XFdVsmyyUeT45Vd9cQxYnZCEKSPfLHhLHAxpoVVdNwqBAAixi7C4VALzGUDtqHvRHz",
  "key39": "4mELwgVHawtYgqVYNuHBkZMGhHB3HgLM9bHW2pqtwwj5NUwggYpW44rqwKEjZ3HybVedRfTTprSdBuR2RFq7jjpL",
  "key40": "5rYbVE3uqZ6BnkqN53JZvVaE6MpAjn49AM8xGBGbds2JA16FnMYtSkoSqtoLKnLC3nw1qcMzZQyVzFZaohz2TkZD",
  "key41": "bTYxLjUmCB82GEiTV8tRcsCjD3d7MaMAdVFr9exRhJLcc6gwgq3rCNNESzZg5vorEzkdLyvxG9fKedfPgzm4xEA",
  "key42": "W2sTHSgVMLwqpPE8y4oxxXqfdfnSigg9nD2QrfXNg68x1LYqV7CJFSgsu4AxjMDKMXSap9HXiTk5FW4g7VyfyJj",
  "key43": "2kCZguUSSB7WwmTCi561ZcDQqJa7DX6KsxL9pkqS9wixqWS34EkvQ16GcxXTWzrMBwkLZhsY9oLMWTQcDimoavLA"
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
