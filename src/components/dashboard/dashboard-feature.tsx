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
    "2B1dMucCKs9Msyzo5X3Tww2P7PQkfj4UdN2CNiDqccQ5yUpn4BzNSaHMeHZYWYhdSfXGBuFxw3rmhGhqcAZt5QNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ajyZqKv6e38syuLY6Xumbyrir7TFDWdVp4Zfr37M6gSiVkZh1awosA26NyFsuF9whP57tMb19p1W4NfyroiR85b",
  "key1": "49JkyoKHqQt16CBuvkSeRxCfBWky6wXzdXN6JU3Ax6cfPg7yat8DDhNeEhXAoRKy9SbAAwu3nWREbYzS6rCk4YxN",
  "key2": "3EQe5a15oWuvMyMReQYxkdtRHv66HmtD9sgBoyLfgKb5GTyAn8Esh7jmZsDFefPNSaprtMHXjZKzm2zbxvrUmzjX",
  "key3": "pYjU3oyppMwsC1YtN9HFreuXMUJ2m738StXTQ4sFtkzYgMKTaqr6TpRMcjn74U1BsS3YtQXnNjViFAeG5GKhsWx",
  "key4": "62UXp9WTjfassMcVSuHisQCnKSLATcYBrJPixaJyGAR2F9KKocfTTjqiYJPkTWQr4Zp7xNuPzn8SHtp1jXpSu6W",
  "key5": "4m6SYHBy1isR3YXzsZHZaYK8W4X2y7EzaAeVBsdfkrnXsFTMMwqkE61JSfvUqFhSxK6E7juEqFJdciaCSoR1yiHB",
  "key6": "SWFtHDw5ubCCygKCE1MpdqdyjGDttju9btyt4w4kVaxxiBx6JbbWSnWRLqeLimyaAXTbue3rK3KRmjcK6M1jSi4",
  "key7": "3njvz9Nx2mPtrt9QHqeiiFFJjhKMk1VovCAXgo6Nfkv9wLwm4PXkKsDERVtzWtU3SfKXqonh4QSbNy3XzCR9C5xT",
  "key8": "z3JuWUUrmS76k5L7zmPXcqsh4793efoRwdj1gxgtRgkDauvTKo7iuxJnMfchBfxXv6HFSroAstboHyCPpL9w7zY",
  "key9": "5NnMq11x4CUG4hww2Tq5vdjUMf5zXF5gcCNSxgqDtyqD7YnQgxMhr7559MwBK6voYoiciPfpNfeU4QeUKsj5hSzU",
  "key10": "4b1KjLVzhFZd9PDbRPjrPWpYXeBRwzTciGAccmHa3EUt97wvHeJdgjfG7FBMeM6FnR5EWsvh6QjR6MMucQrhSb57",
  "key11": "PLUkHs9PDSAsUTaA5ZMjUQjd9x8DhEp4ARN4J8LdwU6Co1HxaoT4Ab2y2qKgLKYALQjp4uWso3KsQ5H1Qp6ZxWB",
  "key12": "5qa3DSEZUoVDExWYPytGkbqxtSL8gwqNkxXEiUCBmpdw75yBkDbwXTfwHvVga1oXjagzrorSWAQCAcqihHbNC88g",
  "key13": "4VDUxwEU5rjZkpZ8ctpcLNr8j8SdYqW9y4BBdkMHJM15UujvmCuBV1FJnAbqLUgvyKMuwgifgiX4pK7fhDiZgPrC",
  "key14": "4Cbw8xtammDicRbNK2rqUvwAq3dKr8Nvh2YPcA3LU4484FwaaC2v2sYh3DUQskUj7GatvjVVw8ZTsLTxBPoRqNP2",
  "key15": "5xZh6bBZYdH9pBZTqGfpfxpuZVqCqK6S4kfqcAUsU7Vkdb8anggRo2fRNgU2BWhqdj1vhgEj51z1pcjMEpcxAtJV",
  "key16": "5jBn8RaxCDjB7JJHVnSLQxEJjDm8ahDAPpQJESVx2biiHHQKeuezj5Uf2KmqK21u6HHHVeesQ396pMNSFocfQ4Hs",
  "key17": "3EQiERVoMLuJHugJ8rT768yppvcjgukcBv9AJpwAjocgAx9VbhUuKLpwC2TVdDuiXavuFxmhrMHgaqgZW6NG6Ytd",
  "key18": "4JT7RkgJgL4mN9Vwq1jGSGrhzGALxQ4Xu1FDwDCmP4ndwxCPixhJC3NqMAVN5EUCVy9ETg5E2RgjovsfBxR4oRmu",
  "key19": "59ShrLwP8d8BBw98CsyeSoFBP3DeLR4DrhiZwXAiX6YbWhn7vp2Z4o3vMmvEKQ7EjnqoAboX4uLE2udFFeJhFqTY",
  "key20": "2PQqPXy7v6ihhwLEPuKV4E9GPigpMbVe7YP1m37uwETTBhHxtDquaasCUN5Mk5GsKGJavPAegCDfLVXcAJ76pcNw",
  "key21": "5tfrmLdn8drVasNN9VeJFxfmgTBEnKKaJAnTrXesx2afxdGfQnZk5bJEP9Z4z7innQ4spPQwbLbA5tJpkpsiCYJY",
  "key22": "3XcbF5VKNUamj7B4Qf2eQfk6VfZcrmaHQBvBV9tEfrMGr6pue4GpSZCFNGRAcr21fGGzjAis5JxCRnELGPSmw98L",
  "key23": "3Fznwu5HuQNdMAC4mRNto9SWeKmcvh2FiEUovPKDtddscz8XHZV4voPegnDLBHwesCaSWqSNjAG1dx5yFP9o3ZUb",
  "key24": "3rTGAUqyd5wP73JaA6YsJSPTY3NvvDb9J4EEXweLZg8GJtRbFxxQGnwNoNHcrdnJBuyhGtQWasqQzXHNzUjbN6ki",
  "key25": "4uL1QN6Cr7ipmLewk4UVHGF2ZucdMT2u7t6w2HJvgbMAuzjJVNm8jz28mgciWC569Mm9rVtat4KQ82aHgZKzXu1k",
  "key26": "3SvHYpARFcpb7dMDPFcB915K49VLSDrVUZDA1wwyt9cCdWMPVnSjYXktEQKPiagSt5BjeGp5hgk74yAJY7TvwF3g",
  "key27": "r7DWYsJAjhTXDgWaCVGMKkWrP47G6W2HY4SxqZEx2m2vyYRVAvGxcUPgkSfT8JBtEskz7WhN3Bus32QSiWteQ4G",
  "key28": "5YN38niNHfvCFhce9o21WxAXNrtrgRSzdiaCfaHGEowgqrsFBLzzE8NciSRLTzu8nDCFjeaCqXtKSs2MFLXTyRJn",
  "key29": "4ZqKUc8TtE9EqKABbytQ1qMtRrmgpaPrjMWEBMfqjujoStk31jCnGaahZZXpwojqkCRLaoVu2eQT9kogDGi587kj",
  "key30": "3W7VTWru15QZ8V5zRoS5nFoo59xLhsuoqGhNwWP8TumLEE3Y65Cg9gRMUpDkGfS9WX2UQwGmXmKMQZxNvaqy2snJ",
  "key31": "3RcWFyzVjU92u76JyhrNQn458FWzhHc85Qfejti3S2TEtVEND62dgWv8eVzmUvCbHbghrGFL3A4jjr5M1nss47Cj",
  "key32": "j3zastSjrWuz5KhuyFBBWxgtt5EPmLuhLFDYcqZy7gBcgPdoEkqdhdu7tDJMCx7VqfqQGPJ4EnqJVCFvd6qPGJ3",
  "key33": "S1UxeS6PjTJad9tAKbmMdjhT8AkG34g6AczfrkwcgvjaNoorirvDXn42KXaWeMt36w1mkoEh1guBcbvNF3iK6FC",
  "key34": "5DdSTvtEVN4FkhAQn4zvHTN5PGfjF72k6LBT6nbbov356qFiyuZNbLx8c6E6CoEg7KUSaisEg4sTLQsFiwj5yKPD",
  "key35": "2L1Q18NkSMLsPhbmAh3ZGHjtxr77Bmb2FyQehk9RVLx2narx3AyjuWeoo1mF7LD8Gz5S4seBwuqA5rRoTq4Hjt2x",
  "key36": "YweDyus6wTnKcJFipUu3gknFrgPNhBkYYMTaffWofUJ6p3eApAJeoujwLKnywaeDvqfMe59oa2EW9tK7Cmr8yXu",
  "key37": "2DEDBm3Y653tgS6K3cXenuo5PwqkaT1sA7uXrRBqdmcj959c7WGswVExLoTa1GQXURiyV7GcbHfmqs3GTc99LRa8",
  "key38": "4spKf9zgC5tec9uWYLbbp5663EoWBTkb65aGBGmJ1xHD4uqQp1CvWvLLRvF89yEazUbtSAHnmkCn9DhwUeht7dhB",
  "key39": "4zh7nbpwTiAtnrgh89uWqNfnr5WALzkPNMBUD4oi4qc9tqtjKk59PP86a9brMfvUNhpbfoRP329CpiLeH4AvxNe9",
  "key40": "4xQfNaNgRcgzJDdXb2hSDa9kUYMtKD6Z3XFnivZeix2bNgoy56BtNRHzQS2D7Zwv3cZNoNUyi3Qcdq51kWtst8s7",
  "key41": "33wmDPRWLNtFEGap6xDTriLA4UveeW2jxQtWFd4qaDWzm71B8YUcGq5PsqLF1L1aUPp9wNN5YCj2dou3EuNKhqxt"
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
