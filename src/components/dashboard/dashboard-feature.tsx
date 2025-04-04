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
    "3iBMzggR1EefUn4gGCd2UkvGWaR15m86n7fvJ1XpXBRkHsqueQ8gK4nhBp29YrYSY5kaAGx5UMNsYmqsHw794kNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yk8SuvQEwwx2cRUgbq2Kmj6idiSyALbT43NRoWpDzCAdF7JL6VJ6XY35oiKLG5BDxK1bUmhtuhEzU8Md3Lsejti",
  "key1": "3z5dr4r959rwvcyM5odWPT7NnsWTShfzeB3wqmaUjbCBPSCu76UMoJVuVgMPevVSCeJdsFxUDJ7vUvmK7GF6YAG3",
  "key2": "3PTdzX6WuetPUyvmyKZnqyPqE824ZnMqnMVDvy6s9neuGejaGA8hyMdQFRzbFASKrvhnmr3KFKebteb6fLFtd1Ps",
  "key3": "PajE7UxtPp7PZdAT9pTANyaGvWmaNXvPcR8mxp4M5hvtevqC236sS5xqmhMxVsTweEu4m8Dcck8AnNQ7Y7UUs3L",
  "key4": "4pSDiRaNjH9Qd9wfTNoBcsWXRaR4zA7K2sSFYveMnzveHGoVkATcU8m3RxJZsW9VV24pFv4gCvWG1L35ENhpm1TH",
  "key5": "uUWTC19EvituMyLy68xqXVx9EMqLb2nNUQEPCWsid4BU6Mpb1mcmZPkTGTxTTAd8D68LpyaSYaBJJq7e9jdWbDt",
  "key6": "2Aiv8Ne9FsVBmFMkqr7PPpCpMHjz1YBYj8f51deAgVBwgjMPqdXzT6FU1T991gnaRhqcM8U2bU6KkUHPnbpXeiKd",
  "key7": "2bJAEnqYPFBHmizVDXTCjkdhZEvwMvWHWSzKNgSeAztmEVWfrnUPiGsQPDrVvper5RCrKErGBKS9fR2e6TKoMztg",
  "key8": "5gyXh1mcHnmAvejbjYcC2PgFAhEoBwBk3QgDHmuJAuXXfULYQgKtwDmGnYm4YTMF82BA2ur8nQMkn7ahGDmgKato",
  "key9": "27a2BPJkE4bsKgoYzErtAbJArJeV4ja7pCBGoutJSDUZTj1qcVwLsYbfJbiHYv6DxRTPHXY5LRJC2WoQx9rnspcF",
  "key10": "2DViCjCYE7uLtayMxMZU9YC9mAmn7owGu8bpUSkZJqMVHr9WyV7NxRscHtSH2gnMfMV1t5bwSLLg1YG6DDuF9Nws",
  "key11": "3HhtmAfNmQPqFwmL7RJScJ2HY8HwjVwxQi24i5QRqGzKT2EzZXZcAm5BKmBVh3x3aJMsD51ofXC1sp4fLxr9DENy",
  "key12": "4Yx697cF97oUjrxZhTcKnnfad5yAoQUeFGTusqFe5iySqnu34RL1sTP4wETcpfS6UV8CGa2T8aGk6ApvccHJc468",
  "key13": "QSaRDTFL53xYeh145cJsP4YgDQJWh4yvZfHVoX9Wuicv64nettNBnCG3X1GbB3g6XhrUjn7d1HupQiAW53ZYH14",
  "key14": "4YR7si6yinwZwCx8gbZ5UQZBrbzqLQGdp6Kr1vQv6JfV7JxzWaQtM5X3QuTkD5JgpBdNwfgAkEQ8jw3RvKX2cn9a",
  "key15": "5wsNnBr1mNwRMdhPFUEHPqMJT8qnxUPYYGctzxC5cqVErVckZLmQWLL8Si9f8kz8H3FiWMsF9yJJFPQ3N6eW2vU4",
  "key16": "31Jt913UFcu6hjZtqhH29xWBRZ6qhYea8iSG25SQ52B4DyXLTmH5ao6QSTL7BJd1xD5qMh2DfBkKMwdrEpKiaucx",
  "key17": "5K8oYLHyyJPnX87UFRGBAGDYc7G6TxZMmPcvXcuNsseY2xDnjpTgRSSsxz4jj5jgA2D4Y1o1BNfw9GCXogaLXzSP",
  "key18": "47WBotK7w6vT2NV1ypLmujuuAuUrLTTN16LpD3VSpc61GKDcuuPfKiMhn4Vfn9y1gtHEb7NrreMma7WuqxXokTHQ",
  "key19": "4A5eyy4uGeuy2XztedhFBT8JdYdermWJbskUsHwujjvRCSVtj3Jkq4JrVhAZ87i1DRw2KPNvMaqq37PnjvA4L7DJ",
  "key20": "2mwzGGpCAavtR9CQ5uRBQ9iz49HbWoekdxvgAmMq1GWtowjCdp1GVP6gQqJNVdgwWdHeEnmSJcPhDALNM1zZXYV6",
  "key21": "5qX5VKTngL7pP1QDVn8oJ9pR3eGfM7PQgMiNPxR3qWZBWSM7qmp8VUEYb2kSHH5ZEkMkkXErsjX9bYZ8mWpXyopY",
  "key22": "4ZDGJPc8cWA99jnrZCiieTskxPSnqyS8MPokCLVhrZzBFFyh887f2Jve2AqiZf5vsSNmcGzKqAQNjUxbipSWjfnL",
  "key23": "5kvXbRuXbqwxYH9FTuWwLG1kvwfKSZ76qtSv4uJVCaQmHpRpymL3dUMgMk6iqTNZ4ihYr7msNrRoihWsvdFkWXAm",
  "key24": "4FVHnwckLANTcowfMGSLjV7qcccjuU1rVWFL3RfhqS3CXxjw2PZZJMZXXAaUtBz2ndw9pfVtZ38VFnG2B8FDgGiW",
  "key25": "3rtT2Pc5epAR127i1PZzhpjivjWs6vyjUhcWdDQBDqsLT9TdDFiEgZwnZbzWVMFi3g9suWjSukvAGHtW1S3pnG81",
  "key26": "3CPrBDxs3bXPyvAvuYGoeeNL5hHdP47JSNSbE4aZsBDJhATFakLWCMaPzpScxhMnw31QMmdoZQHKAV1i8oEQ6NvF",
  "key27": "2Kic47ZzqDCV6ogtWc3ovDLwSGxJPwqr8EXwojW52mLxXQHLZiAWkQ6jLaQ59p6vgYxzqzWn5HhYufpuE5nME87x",
  "key28": "ewgky9xnvvSeQmXT1rvkffiZTYyzA5n7UP3FjHiejPJkqVMWqZrGSEhbEsJq8LxAcVGPKzwkMLxp1kdBVNn2Cn3",
  "key29": "4Yct412TXrashWFAxxwFxGm5UHFdHzuqA1NJLdoLCB73zfukxAX9TuQEMmB8sQc1FEpmYh2w6cnVPtWMMq93zJUb",
  "key30": "5C3jugkMvhDKneB6ChDAsL811xPm9Mz4pZSTocNw7wHFXL93HNjrwF7aeTb8bs8vfUw2yPcrPqMQ8EaseH4e6apX",
  "key31": "2qYX4x8aoSxF3NR71va3xG83dYtyheBgifeBzUBZzFDMH6M7edxGamQoFv1Eeorsnv2X8avtqrjYCNqwq4rYg1s5",
  "key32": "SCVzLdptjVJ2V19ozWwBx9WpXZYsTC39nJV9NpPcSn6r8ER4UGx84o6t84QzKYu3HJaYmDW7LcKj8Cya7coZuhQ"
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
