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
    "2tFANzZxvMbmVmsoR6Ndquc8iHZ93Rm1PWu1pn2koJ5g1DRSxrdc5fTmAopzqu7FXDttzCKTE1SyYxiLp7Yroh6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RvS8YpsCXuZFDvsV1umea8eyy2nhx4W1bswDqLTC7KyHTcifjd4cSY7if1JHozwWHAVQtcztEXoUw4Jie77R5NC",
  "key1": "4e3N7Lhwx56b94xpZi8sZaYYoxAdZp3aWxUT5xyX3jhR2QWB45uyxN3fLzy1cQyr6i2CiBYKeuVfyyzenancscfW",
  "key2": "3EyE9kmWe5T4zs3Hxk1Ck5ykQ9WMf8CSqxUkyUk2Vizz3R6XEqEZyc4ZTCmmheadgvncMDwuPWYaXcvfCPw6Nycb",
  "key3": "2VnSFwrEJTXKnwbVY5GBgsrsVHtgX6yc3nHzo2pduG4znBad5HMikpfqPtC1qWQdqGRdrGsFcANZMmH5qXMQGYP7",
  "key4": "4p5cPuYNRgzLGLCRA9YM24HbkfpWiii9PDPaixyuYYK5Amy3Vm2v7s3971kpbR1z1StExyBsobKTtDNrwEVR7Nhu",
  "key5": "4ZcxFLzwx7zunm8B6Ayxi2Vx1Lx3VNox4PArAesg3yqk9dsHjbxpHLAjr79xYVbnpZFPy2y5grhH49DP1b41ZcUh",
  "key6": "4BhRLbe5Mz7bitrmCcbNp2QDNZAzzFy4NxUb6eYGHXHPz8EyEaWbH6FePrT5Bv4uXTMb91Ty8w1RmLMVy2ZS4AGb",
  "key7": "3RH7dqfSU6b8JFkvmpW2i5zcpG2wy4NeR2pGx5sinCJfq6QFCj1kC8xzTjNbzMtZjfM3qKeUhRAYuQevvEApAvTW",
  "key8": "4Axbo4JFU2pS1T3sMACYAs64aF58BQ57BLyty9E2Rh6qyWvujk84w8iUgpmpALucjbpuFv4YYUfcHFysrgmMX1hi",
  "key9": "P8vxJ1Qe7fKsKTMRBKSKp8zqZtaYMDvixuXLzuMkmrctN74oxAMr8K2HmgS9rU9sdjiUE8Vq87ztMFUhXaKaZiH",
  "key10": "R5sqii7VPZ6fgz1wrrF6upoWBSA1dQzoqTsjgdYMk9UErcg7ypCAN9pph6MM9rb8mBAZs6Hpy4FQGDTDjvRkPDF",
  "key11": "h76yM1zoGGbY7dYGKrjhQ3j8uqCG2assPDjdT8nA2qrBKQrxkN4eZY3JW2DeF3cM2g43Af8FPbXPnuKsuwGthaC",
  "key12": "GeEPUEQi8Q45qnLJijm1ZU6AuRLb6XqogNJ1PRRK5tUdjNF7rBxR2iRjXA8GXtZzieyQ5kagFExHU2SQnnGwDnx",
  "key13": "5PRP2USTNYbsv7TNpFsi7tkUdRas4FJ52GHWndsodU4ABBvijPJYExSXsmuhby8WACQFCqGot5eYwH9GCz4DyxuA",
  "key14": "4Jq86THRmm6CTCsvssK3vgpsVwwqFgkydTrqC3beuKbF5HFvcb6oBAFrajYaz1LzSqcRGhHcxUgXWxPNvBYSKkSz",
  "key15": "5f6y3Eh3oAnjG34jjkTN9H1YpttQxMCRTzDKsomBA6VEkn9EFdEeNfVGH6qFvdRLzgWWTS9xrBpTvkL1Ykm1LAq9",
  "key16": "2ZxCCEZHHfjLoQN8tuyuDnmjrTwrYWydUKdwyDkPumCnZtqJJ4NwXme1TBCWCU4UbAg14tMuhzSubGA36dKh3hdK",
  "key17": "5KBdKKP9pdTsXyS8qZj7pxCSrTyCgCftPjdviBS3if7jZKKXCXwCMNSuAhddj8VGWC3GLFsHr8i4ZK5wSM7XMiWw",
  "key18": "2uZJWeV8PHE82sGxfwEYDRv3vNfQYAGt5ELBsgtS3PoTmnJe5NwPCSoezrBfW3Zybub6t3undYWZ8y6pgwd7C9Ak",
  "key19": "3AbLj3P3sfU3gAikHHtCp3b4RefHtfsm74qynvtrnw66TK9WgM6gKhX7BtsaXK4uRZ1PwM6HxgpJzUGVYBm9jKFk",
  "key20": "VShZH5srhSFT6hqaRkkNuyb6ePATFPmNQEfjhx2jomVD8vpaG3CtedB6na8HgLyukWus6SnGQatxvNw5DfyXSiS",
  "key21": "3mL2NtVYCKUVh1DDBsyWvrSZnre7qLoXLKfWiE4Ft7tUq82UZ6H5nomQNqx9CGTQDzdkJUdpVZT1JgscBReSNnwY",
  "key22": "2LsXCPQhTZ6mVLd9pR9UUULwcp1GVNovPqRfV2z1agtu829cjyvPFnGJkatBJ5ecGhgW51prrJGdEDfqpW7u99zW",
  "key23": "4M8dt7KcZkfHHEjVMcd8m5PV7FPNCwcNGpCKypiBdB6gXcYm5qNJf5QZFpNizJjF84sExHFj1rttUd39bkNLUKGw",
  "key24": "2FFE8ZWBPRatT6gak1oquwtDTGRub52ba9PoM9d8ytS3KDnV6dr8aaEpeDiWihMG974fDvhhRvoiWuAvH2mu9iRo",
  "key25": "4wEcy9nK1Zi82yzQEzZoxXZNvPg3cq97zxBJ7pN6f3V9VpAWqTnxKM8siJqcU8Wbgdxc24bnm71UuquTFJGXY94v",
  "key26": "5ZJocjCq9FTGSJiRt5PBMDs8sP8DSVBh3fLxqKEPepee39vQn765KEqZWumP78RB2yiKyjPprdcG8HwnfoKoiaEY",
  "key27": "51kkhHUcqA2v9SSqDehCdJFuvhTHoXqiQzkDRk8SXJehDdFgvpipgN7k7LQRXBjzrkUcRDojGPx8QEiJMJfDq5R6",
  "key28": "HJaM3dBhJHsF4wJrepuyVWH44Px1suy6CUEuo46owiLWhgCzAdTXoSABwFrk6izV7hBnMdTSHmwcKsCXCS9bhH3",
  "key29": "4rHjHZ1Re3MdTDCvf3UNAXA9boWjTRqq32ktnnFT9e6UHvQMQcAmxbPPJ8P3cxwqpFbqwHx87AECrG13qvCkaRpg",
  "key30": "4qAepJvud67rQFuaMygmhJNMhbeAL6aRHdi1KDkgL6xN2ayxSS5g5UHMJhGCx35r944LRmdPWFfZvLPFhJDPVCic",
  "key31": "2jx6TzwNoST1f669NHHM6WiS9zJBex5nWVnfFyU6uQkW9NqXNqePK9N8yZwPmW99E8Anmdz5fKBWNxEk3i8P8CZs",
  "key32": "RLrdNQd1pnRSgybSdGf1B9ta7vKSdRATSfzeoooTiqVQUkam2gQLF9kqBCBPaW3ETB5toZFtis7cLNBXLar4qFm",
  "key33": "4FYHsuHEoMcVRyV3KEsTVTFA3zGAZan1RgWWUDjVoUTDUF4GQQHKzb5eR7p2KtwkRuE1sFEDfNvdom1DpHwGqtYu",
  "key34": "5Yd5y59tgazkbPZo6gDp119p87NB2xbYSr9R1jD6RY2TT2QrRiiJQZnNmHDxKKghGVkKjmhh168EaSCBogtFBRhZ"
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
