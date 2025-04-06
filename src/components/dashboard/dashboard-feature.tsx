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
    "612d2AE3MNuCPCnuuoE4a5rjT5iBtqCaToQBnpDiWU8DxJiy4i9a3Kkai2sNEdCNPxmd4c7aoUU8VFqPbpnnPRA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65gdzaCbV96hNak96VfEwuGoGJ2W8STgJj1fiQPzSW2YHc9Q4HGgyNbAhrMud9NgFJKWMWcUGsUoe7HFJ1jGx4f8",
  "key1": "NCmPzUqHyLq7eQJLCxC4TQn2kr4K6gQiYQxpH2KrgC2L8H7fmWmZjuKdLdisgtTzeBkfskKP9iZ2VJW19sya9dh",
  "key2": "LMxvw9BXQLc7JD68DyTC7r8KEVZy3NfqdiqGyVzaZYcKbKYRhUc6dVa7t5TcuZxcKLJUJqzuMAtDsqgQVUcpZaq",
  "key3": "2HCygKM98nRMPVCjupsxNzT1BkwrmMTdcnZpSamTdsvi5b35ujegdC9pk4kS34KurdD2JJw88ykCyzjmHCYs8t6v",
  "key4": "2Fkq5bA46bK4rDexsrhioTD6PPHbYTZTqZTWWuhwcNGFF2TYdjjBazdd1XN7mzJw3MeBhWcArE3MPc7UwD5hEFD5",
  "key5": "4NEcmS6CumcDkYbLBaCy3rZ11iBSb1rXMbwRFShCnWLS7VBfqw1GJZ4MXtLoUPmvxaADAC23N4fYRSFrVGXAdXqi",
  "key6": "UyYrGUw5cNW4DWiisLLoCrEjeQkvJar7RecG9ZBhYkK6Gqiy1XcziGG7ctXGE9nxJDVoaATCBWvhtnLrScAZ8Fi",
  "key7": "4R2Xazm9wMWn3EJULQjMW6nEZ1iNBEaWZDThS3Z129KTj8LrSjfQXP6jHxW3XFU4CUskUPcbDmCpU5Jyqwwm9iRC",
  "key8": "4455XHnrwTVt3tBY26Cmf1LnQYRv6JB7x35iwBW4RqW3wL644mPbdsCVXYgU2m3f8msv9PGqC6svXsGfCZ7zLLxj",
  "key9": "2rRTbM5ms1N1dL9sQk5h3XGDGH1a9b1v1KnTjMc14RaYMcdxfaCyTwheA8FW8EZZ9zmMRHGKjB5S75GugSJD8uNo",
  "key10": "3HpA2cWeDhWsruFqSbxWLTskRwVBSn9nBVYaWiPF7HJNRBprReN14u3F8gEURzdGmXVE8TtC2KVBBuKZSQFKdNvu",
  "key11": "3Nxyibcs2rx7y4a45pYuRhzFNcB3wiRxHRs2dYkRKMbZDJJtuR99363a7XuWT4RMGzR5uvJK8omK5NFCF1Xexic7",
  "key12": "ibM1j691VMvZzKRa3qstBbjuLfuyG5J9ZyStwRGUFrPNDrpXQrvAvrdTQrhL3qvLsx9YqgkpojVHY4EH8a5ocVw",
  "key13": "3VnkDwN1oMXcjQacfWsjug87EFP3R6Ve7bf6juCLmWrmR15MsBSdaj2gB8ts93t3BXipMVTnKSWtJzpDtm9XoYTS",
  "key14": "28FNeYNQQ4hcmZwTCa3jwx32Qi8cEqH6dczbD3K8YxhcV6DqUwdrKVNYxdqKhiLWd2ypaKjULSmj5mpVkW9mYoDB",
  "key15": "2afzMPx62Qvz1FzZnFFLj1XB3rJ35gs4AoXMvvqcDTC2kT87sLMLTsUu8nP4JbZAGskAo1CZRYYonaExb8bhGJdk",
  "key16": "4C4cYGfmLMQbQdzwa7kifXujS5rZGA9WkMiUC99cndraReKLdk2SybjPjVba9PD51iLuFLWAD115NkDRHJdcQTDB",
  "key17": "RLHGXeBJXWyJE26yPtENsLfZfuZ8sA8B54ANWbzhpdhcxj1K4XXHACTozg5UHUzBQZ854dzhR3GFXVeJBzKB9Wm",
  "key18": "ZZJTxS3P53Xzgn3km7w6YGw48uhiWjouAN7h6FRm7dmCjarok94EFftPBdbobVrANeGkbEGgxHXgfn7PAWEwVcU",
  "key19": "2J7yACgkg2JAMky4uQ9nSaz8YQ1nc1der94jLsWhyx819E1DyQtBcCcuKqnfbm5pcxyJej79ok54vf5MVZwFEwni",
  "key20": "3gABo1cfE4LucDZJVhuubWPgH4hY8oEZzzNYg7SFccjywa5AgGW3qJPHeZuTSRtqyoMdQwbN39rj9DXpzAws5GRd",
  "key21": "5RF3G6NbN51os56mPo6f56FANgQuJBRqL1caxeERxGBqthwJwn1z396eHpPHr4QACMgUDZLuv5FgXdSRfJPUNyCZ",
  "key22": "2HJQsTGYNGna1eT3tPaqYQEQS3vA1iDZqtLwVhvnR52GvBbfWw5FFZK2otCUeaCYbu6zVcCxSsWEQcFzKgh88AU1",
  "key23": "1s4P9yj7VvKvXwftNqZiMm7vMJQr5uD8Z5BQRCdNCXKtgPYk4BaQM5MBnJKPNQCMba7vhZCntbdXbJPP6e2vqwQ",
  "key24": "aMPngikWZsf4g2jvyuNra4W3Fb7kHYuriwwwEL3qnUNPhT8thxTMW7BxVYqaM2q6UzqCmPcVb1XxTj2dwCRknbi",
  "key25": "5FiBdWcdofHG5tRBvR8MWBte8b6rKwSN29bDSJZ9qj8NF6UYddpv42zwHjRDdsbumtJeq8zAs1DjtJtTKcxLFCg5",
  "key26": "3LSFrTh4dxiP4SiJxLHtxWUgMRppk8UzVXLTHjdoBYfpawmymMjHesZS6bunrQCCQZd7XwhJD26Eq4qu4v5Ct29F",
  "key27": "18gnCgMDLspPvW1UnvMtsdDkvvXEEx6gb8PQRPgvMPj7131h59WSo8m2SKuJYYU4U76kj5jzjG9UvhHKhhpnPbb",
  "key28": "4vQ8M6Z5mAW8X3xHVCm8ck7VteywctFNmtwoDNyEVwrxBXr4MSNp7Ckmg8cWnU4xobaqcGh73PbfrTw4UxujGPfa",
  "key29": "4AZ22yZisiWDScFDSJ8ozAPj6x79MANwpRMecMpdgMcEEBPoBRveUKPYJFhDsmt21pUuqWpEWKkL9Jounz3QJCiE",
  "key30": "5TBKByxZid5AgFsjDnqwjLw7tDR46S7E2bEww1Va5LwwykY4CciHCjDqiYBekL4wmYjuKwSdZFib5xuuQ6XafhYW",
  "key31": "2N1KuGqD4SZWEArnZaFJtUmUnpDyMQfKCiWrmVCF1aPJzyJk1FDbeHY7btH2bk8F8w9pqj4TSgqGKUGpfeWDz3Dz",
  "key32": "5nwop5WsEXECEm4tJMDyQSN39he48Hce7UYHteX1YgLcV3haU2grze3sDTuT3nLWtN9D6kxjgtHkze4PmDYkGBaG",
  "key33": "5ZzMbhyqAMoarN2JNH8U5fYt5Ea5uJNzMSjRKRrZ2cw2zjKHZFVnFeFZyM7LnfccbXh85t7TRtzE1RWH6Xt7Kmhn",
  "key34": "3RZH9VExXtPczkMpbqaS3YuhuziWF3a1X4C4cfr9v6Mc1HGdtj2e6yGsU3NmBfzAKVDwYComrEEMUBJbKecqENDY",
  "key35": "67NhbfBfxpuHsfGhwNoE7QdB1dL3g9GSKG2LB5RUKGpEcNRQpZBi9UM3EAxZ99nbQ36pWuTNwxDoVGb9QDSfQLSp",
  "key36": "2LYrKKX865RwnZUMCkQMEbWcSHyfxufJKQx7nqifTCxsjoiuqPGUiWja5TDAWWK4RVQQJXYSNu5a8Zs3T5PQrezF",
  "key37": "4Pv5tCoAHcaCgAboFpk4e8Q9tuujXDZje8AXRHyP4SgSAfwfw19JEzHTkj9Em33oyrmW1EdRdRmq54rtB1TyCMv6",
  "key38": "3x8QXzxZHrcDyGqe1KGvuzw2dtxWkZH8SUckmc3k6MkioMrshcQo6WdMvn7erDeSTVUqDk45TURRtqST8rvFaCNS",
  "key39": "4JUsfL4Nc1gjyy8vADSpdJUoWbo94in1p8rygkpdcrQYiGA3ru389DBmGNuQcUxpLFfRUStiU8bHtcHXpGzVoLMy",
  "key40": "3WQhtp6jzqh8NPRWL5qng6kT1DmkHKMLWdTSS2jcMMbKLyF6gjJf18jeaxEKiWCH7J9anuoXqB3L4G9NbYLTAhcC",
  "key41": "4HY9BA3TYwkbvJwA3GsQGhKw85vkc9f2WSY7KM18KUF1Q1HtpkzSUrvoTHDYBxjSvbJUhdoWABN7333zMfWTM28N"
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
