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
    "43YnaqSN7mMvftgyZdmMszxchDC4etiAWsczpoDEzFvvyArG4LbJ33LK67GYhCa2JDaAdbffs1NvCouT32rfYwRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tCmgESdpV4MSM7ZU89XHqVEhzLGEo2Z3LqgD7ZspiTA4KZEEcUSq4duX1eqCTgUtgkfK9M8FQRmx81L7FdFdQqJ",
  "key1": "2k8zrQcEFqhfpW74ad3jfmL2vDYwxYFmbG7KvDdhbsVq2rLPVvScCeLPiH1RkA2HmzhjKpcUHEvYCYeRw33NKZKD",
  "key2": "4rUNV5dPuYD8zxebH7a23zS849pQBkY4PuFjvUEPWkdop6t5SKme4qqKARpGWQ4qmCtGj4vngNqmd4Wa7s5uppkf",
  "key3": "4iPg5GJ8gCAkjGEvk3NUd3rDKRCeDXFP3J76zJsD3nZRJ6nKQUEGmPGoUAh5LpjsXWojqrUArjDBh2gqyGijzgQR",
  "key4": "21BjDRoJsepAFKf3NHhB3oPqHyhrJCRFRq23miUUHYNPvSriKBFqQsGvLiHYfBq31UTPpkWwuQ4KvQ984nwi5Tw3",
  "key5": "3G4pavWJH8dNQ7d6cXfxwkHZwVFMZyErSEqz6gukfgzN84xnQxZagHHPF68JiNphc7upH9msbiMRWy4Arfoe7rPy",
  "key6": "5MF695s2xcPhPNbabatB7vcFZ6gZnRs3dmsTaxygr64yJfnY7fySU2C48DYDqTUYzbPrkit7U4yoDmLVkEmFTPkL",
  "key7": "67f8Trvd3XRKKZQAdVp5vovdoyGBdkTddFxJdvLoi4xwCuYFR2TC3dLv5xJU1v5uzUBrGi9HXgkZ5EjoT7yBmUH9",
  "key8": "3eYaouvFswaMvEWjzLpuZbeTMNiv3NV7jgsND1fwkyVpRhFQoALZKSVvBGzYBFpHhS3MTBV7Uiq8z3JaV6vy89p6",
  "key9": "zKEreCYVme7oN2spketE1w3QKrzayJp9r9aoMpWMVWenMVyeSrxn6zhoEKLFXX8crQGaKHZbZngXBp5jrBsqLwP",
  "key10": "3BZRLdr3xk8cdQ1bZn8JqH5tg36PxbbpWA8hzwcjuHUYEZmQgRDzts5pvco9Rxaj1GnsjseM9g5zAMN5i69LfK86",
  "key11": "5ZiGKUXrWrvyMgZzWpHLH8LZcCmBPDEB68bGgriDytxgZVWv5E9XuXoGFGvKBEX9eLkmq2MpG2GEa8txnYKm1yNo",
  "key12": "jV8tdHS66nnYSvesHYuurH63k3LxR6iaE4AW3kpPqbGyJqtQDGraLvv9AzFVDzTfaQaZaocj6jNj4L1yRV7cyFK",
  "key13": "31YkFLegpoahsBHDj4z6aUjU6H8zk4X7xuLyoUD9cw7FDtJXjT8qghK7xTpZ44sB2s5ABZPzzkHEUurvcrxEELrh",
  "key14": "4F9EUBENzZ3W6JRz9LQ4UbhXpxNhMvwBs1tHcqvagDPn7248aNHAgCRqxjio3eo6kSxBZXjbuxxKrkvY6dK2JEN3",
  "key15": "4Bm8Ddp7w2YYo1T1dG1Q1coxrpgNM5emC3UkSnaggTS2NzU7fM2ZyxUn6cJCroPx2ZoTuGvQWPijBkdH4EevftLB",
  "key16": "53qE3UEsemczif9Kh8ww3eby8T5F5SYXrG9Ji8FvmLVsnrUipmh9DvFyC6WzRouJLB13UWZcpsBDGPr3fYBqxjXJ",
  "key17": "4xeArMeq8eNDygGvY57TQgPNCZdFxAwfqiRZzDBCcP9Hkav27RkwoPT5aJEJQpLyL5WUcmMyC5VmoPTSLzFEFXqS",
  "key18": "3UKUH8GCaGaTCyJ4ro5CJCgx8mD3xBp7vskASuF1mk2F6bVsyRn6RUYLBas8mCaRQ36ovdWxVFHj6UVfsUCkYgTz",
  "key19": "wF2QacB1P71eq5vo18V4UqLNtY2cuPKKJEqsEf6pgzpv7CY7JLWg8DvwbBn3ChMVZ2gRCYTuhWNk3CSPtcfuAMg",
  "key20": "3PBJTdSTiCpEtqu357R4V6m4A8aamjJctXNRtn9xS8zVd5xHHj7wu5iA4w7WpjN8w3UatqXnLiTnoGzQ3gbJXMgV",
  "key21": "5r65gpx4YBymyPcqghGbdRvVBUesfSuqaFGJgn8i1JYvKo8fkctMMYdeGkc79Wma6m1DNgk55XMjVR45cWL8RJou",
  "key22": "51htUNz8YGkGQysDAFovYjBwxJr514GffyoxSr3taz31krnSkhmACwgpMiz2PuaPQzairrpF8S6gyBBxqT958YHc",
  "key23": "4K5cZcArKrfQPJZoqUedaqwvhYqfPuBRfK55V1ZrfVXxdwtVPNbTXV2PVLJvJJ1K2X8L3HMj5xxzzLMKoE7SJqqX",
  "key24": "62zF97t9KFPDQ8agav9kMrsaeQTpPAAejU5815afsR7cpaGfNEiFv2LKFzh9CV4EaPx6vyFQoFnVZhd75xB5tDZh",
  "key25": "JHkj6w4y2t7F2kPEEWwwUVdE16Df8uqA7zadhXJgnREA8PMxywCvSmLdEgmrur54Hiu13HWo1QCZYskP7PDUECs",
  "key26": "3R6wLY15K9BBR66WJffsyXyetM97pF6c45W6Fa5k6KE1nTw4SDfoHRgs7cBZvPMEau78jn3QTX3ftBpbcFnFx6VN",
  "key27": "cavWdjaGcNmTKHYToQGgNTS1ThcJjzc4LqdswK6WXzt6SsJbKuaKmrowrEqgrwBvszA7HMBUfCa7RReHTPEdjyd",
  "key28": "5ZxkyAgFskeBEgJgd9hrECTBYe6rhLMTbHJd8WhNywwWNDSSGMeYxcTcNYKtFaNXTJDmqGCKj72FzUzVcZz9KdQo",
  "key29": "5f7KJ4u3nGKUzowPRPaRCjd8qqMeqG86S6HrjErspTzegBMn9rbjbRsguvEMCRU4kyYUqtoK56HpX4kmSgLsB3xG",
  "key30": "3XMRrf2n7WEsB81U9zLtKB4iw5xuzNz6rLN668LrRXVx4kEZrTAeDwHGaB1oeRBqb8AMazHtmfqrgvdcVt21ZVsH",
  "key31": "ePxwBoEzL61TeaZkofmHsvHi43ahfbmFeHYA4sbKkBcJ1TEXxABLQbv6jDuG7w3iQ2SzXQMiAu84RSg6a6ruYUj",
  "key32": "5iAeFaXNRPCftzoxsnMZTw7iXDXTNkki7SiXE9xUeoqZ4gZsRvYY2XiwmizkZmeZk4e37nC31EXKtmuG9qn3gxkJ",
  "key33": "5Knc7rZWfWweUWTjPN3FskjmNwo8R7wDhhXyb35LFuBvk7TtMZYABZbrujybdwutKYsm1AWuDpxbprpNUGW2LUap",
  "key34": "4stWW9ycH56QoEdYBLgGLNQuAGPDJgA2TktNPDboL17VMQsNycRtVxVaDE1ZQmPsFsQuC3UXRVm5yc4THFfYVyLY",
  "key35": "2LSzyX6PFw3sgfWgaBLypx4ztXoq6f8aZDwWhgH4FqhgKMgPeh2MZddKotT35NG7DoNYpNAAc9sN3Cnie3C43uEb",
  "key36": "5CqHqownbnGcvwE8FhhCJCnvhHu83DnfSSWgPof8UZDpG6CvSnTxB2xvrSW7ngX91kcAkUeVtffBDe9BHWPD9d3A",
  "key37": "4FS7qVhBxDnnsWvnCatTf3dT583ibvuZobGRe5H1PcAcTkixQ2ZDpxc3mDtRAFydfHD3x1VZTsfziFDk3HsUFqrg",
  "key38": "3cB3Pi1ACwcBQyAbbdjhxNrC9GdPyrrjtFQXQLJMaqU4E9XvE9vgpt2kY7GLUDD58yA8RyZoVBLg2rDtfZ3V9yVT",
  "key39": "2KoNtVb8XyvRoDtHxemoghUmss1Qp19ZfqhbbHT9RNRowM3BGh8s3T4siqqgkjmWag1iFvYuVvSfkn4Z9kYJJCsy",
  "key40": "3CQqrMVg7poUGwsYwETcGnBe3FRUpQGW8LQN383FtqkF1hjPoK9rUKokgLefyCEd8KvDeuLHSUtuEhTFnfbj45Fe",
  "key41": "zu9SCPDT7APsgySRmwVEwCEXaoMdkhhM5WFucnCT3jany78ot285UJ3i2PcixKCaniDPKaa3NZXaM2rUyspfkeX",
  "key42": "4u6ZUZizgE5qd9qg92NJNJkFFS7WPmH9Gi9xLPPUHgG5BnqSCPFQ4dWXsjkfKtpmXqhPFeeSgAC3Pd5ATpdR8TwQ"
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
