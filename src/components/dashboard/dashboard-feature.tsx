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
    "j5nMBp2LD3G9BUr9LDDti8XWGckmnYayGB2o9UdPCLB6VLTs3vpieAhnaGKCDQxdA5zCgKrxZwWyWbtSX3UeQXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XEjDFrddmkLoKVZ6CKNUsJVNMfjETFvV9M1tusgh6aakMaREeNfFYQmkVWNiABBUov2pVxhifYiaD4nmhigqmdn",
  "key1": "5NiHhKPx7fPV5EWxB85L61Zu4ZmbFYa42kKSMDLYRPqJkPUAH8EDugbrGx44PKoHEkT7uYreigYo6GCNJAhQEoTd",
  "key2": "33hPKYNRweHBAztuqA2jBzeC4V35oZk3T8hK9GYdCCEiSDmREo6SoXKzDFPzFZz9b2gna4feZRiDi1S3HTSRTARz",
  "key3": "4oACmAxwNywhZ6kHd1wfCfxLzovK6P3budnwWLhrRLFetTvEE6gfoTwTwoH9z65r6hqyd3a9F8nS9JCEsVnjSnRK",
  "key4": "3anbknpSo95vgMexfNsRku44t1n8FZFePtEEo95W4HNa8Z7nwH2AU4eLikW2ALyVs75bMLRpWBnQwqk3QFYf87Re",
  "key5": "3G7n7VxZ9vLcsq9sSVgNch96NEZvFNZUQeNgpgG1jY95RuQ2LYuDQeacRmLaiXcimvsTNvmB9eBqHF8Q3pVLwmof",
  "key6": "2P3wF5aYLe9jRN4rQUC2ADLCvhFkT3VvF7QziKCqGm4SWNVps8sRrYfYvWLdKgV2gLQ1t5N3XxnpXrzK5zo9oB4b",
  "key7": "2GCpq4gwmWeX6K9mcuMK51Nz6RjjA9K6vxuUmKTj4njMmeopKuUz9FLr8ZPrzwAD1dBYz1izZS5C8TG7vKwNNn6b",
  "key8": "5MxkY8czpawzPYfvAWFQdgNnHZbyXHz88FuppMWZTVtjDyR66tzs4PSKshAMRigTNRdJGA2rV8ShD95pn7Dm5wRX",
  "key9": "5sjpWXritWMrdzRrcmSMCHvR3xLKRhCNHBeM5JGwbRQ7nyirFdJEkvJEzhZWeE4BrkDRPv9jmV5AGwUE5DZTvnBd",
  "key10": "3fegyoWRECgBbMRzP8idtGugBWdUBSkkmWqN7rFv4nHA9ZYPmNHRuX5MDwWRvCQEahX8RPxtB3sWLjcPNKEp7cKh",
  "key11": "2HMHdxiNbArFaLM12jJAuwXdtMjRU5BU9TdkCSuh6TmbRZf1vAB79uhZdu56oF3p7PDfgyQ8aNkr3H12a7fAiyrC",
  "key12": "PS5TdCYW4wS8D2iPehW5acoXWCHMbfnaQawuBxZAF2K8RybrG8ysxDdcYb5DCpiUEDd3xNXdqXdDBAud3Mh8hK1",
  "key13": "2WRF54VfZq5m7wCjPGEQpvYRpLdP1vsm8gqNuk9HCmk8hEHFkoYsYezEqoCgNjvQX4bgFCfUiTetAN7F1afwzWzY",
  "key14": "4GKJARouE8chMQRcU6byDuSU6xzcFtdKQqAbkskmnW2v4iXLrU4VBPA4EtKgEGt8Z1FUSLu12H6iRUZkBCVQaLXZ",
  "key15": "4h1kuVWcyzdZXp4spVi3aYQxYr7ubvuAbeCrZ1nRLcdGzuV6DDfsKvAbfwnLcB9rqpByA4vigwXAny1199LKR4Cq",
  "key16": "5mEd2SedanH9YZvfLAvPxXKT6SMvRUZRdBpxHUTy57z9JvDAYN9nTaHrN81su5A5bHqzUtGfhoMg8ApCp9dxHLXd",
  "key17": "3ng6NUVfsAWU5DYtWkavEg875tQwwSsR1eFpHFVBGGTfuotxGEiMFpGLiFpi7TL7kpc6ct4N2VfTrumkNuPiH87u",
  "key18": "5Yt5okAva1mX888s3J1Xa5FAZiu4zKrw2q8ndnWP7mVWUiGqBJxsQzn6TFbS5dwCg9QoxG58XqY2gYJdUFPFdDoy",
  "key19": "4gXCRKcC94Q5vd55Wj4V3ukChEu8ZmQ6YAHovoG49qyNcyEpw48STg2x2hP8fovJvgLQZ4g7CHopjS8QsGe8vGJ9",
  "key20": "3gtsz2tZ8LYVGUV8CBuNYKktbDC9uJGzZLUJhtowHHg5442VqZZ7sGpi74XFWxpcWe4BcbEszof9uaaqEXXvjCGc",
  "key21": "3Syqkrn8AGQbvAXS3tZEaiT2nSHSarC111S1Ru38dn9J2MDqFa43U7K23oNh7xL7tV2GmU2wm8qTx5gLrvcGA56X",
  "key22": "653JFcAWtHiiuj4nwaESb2dc5ffsA1twfGEMyLNepE54ybLuF4tQRmbVr52vUq18Sdodpr8F176pXpgswZRUhffv",
  "key23": "26PWt7nmTXTsMnnABMEicwxCozzYbAkX3rp1EFxoEEVey7pwHTDsPRU39nGkKmCr2J4Yma7udVAf7Fv6VAbsUb2m",
  "key24": "2P8KAyj75QfDneuUEgxG1x9Kn3Fv1cPbrqhJMKY2RzNU9DX3guE9XhYkSf2e3dHPipLKd5a2wMaV2f4mJSTDMVbi",
  "key25": "27NCz8smscTHsBxw2XKgNKEjzX2CJYPiHKiqUdE22m44hW8EkVx9HTgvDocf8yok8BBZ8ChpR7cBZ8k7x2ghK8u9",
  "key26": "DD7UaeYNaRBFfPtgDguG7dw3fFFySYY18yqs9tirokDmXPDCaJ3qKBgpMynvFgsWPEBGSga1jb8wtw3vHhkKDiF",
  "key27": "Kab8iBoqjkZqtHx11AaUhJp1pp3hL6j8GdfCTKmAY32DXEGvueJAKih1LhxzFktJ8Lpgbeowwvtg93C56HgeVFW",
  "key28": "35EwLAj58QwbNSbQkkMeEhpTVNNf23qvp6dRRy59PURnJRsdcRM9PHDMcUCzWmjGPfVGS8Gzb9xKvcFRNH9VdU2f",
  "key29": "3h9cNRLpSXkwm8kWYoYvQd887yQp9K1jggKH5rRw3nPNswE9eZ6Thq9FgzN2SihPFtu32sad1LKQUHTxie7R1fLP",
  "key30": "63Y4HqBGGKpB6u74JoAEFhGBFyay42qeof7mgiGp1AQuzx8LrQmkuCaq4VD1rdnT9hz6ei4ZqKV5B18maYo6eWN",
  "key31": "64TWjUkY9YLuyssb7M7eaUJLPd43XPJRzF2cGL2Nj6z8devmUKLxpiCWzpfGZgt3PMZqZfq5i7KgAYLgBJmrNHQW",
  "key32": "ZPn2WWKV6q3Dfou4vyBBB2qPJoVmtYFJD1VKn8uBbZ3uWoLpvi4VVVrvGPembAr2yeaNGzMXNJidueGsWXsBCab",
  "key33": "4xtY7Yadd4WSuEVSxLk4UsY56EeVEy3eABcjG8wRKMN2bqKMUnzKPJdrPYToJSzu7AGDNF1S2kaUdR91FohRtWnY",
  "key34": "YQP3meQJE3RDB2AUkzJYRLCN6tsD94rkkRL6KV3GW9mEHAv7SwTji7eNVix3drsRvQ7sQy2RMvvr8CEhPZNETwK",
  "key35": "2A3vtuP9esdmUspWHwf7zaAhhPDUx8AgZUb5nRYD3FEzqzvmvdGayNgDXfppJXy18nHzBTFtyBxRbm66in1PUSDY",
  "key36": "4xVzr2GmW4yH8LLZgRX666SWrfjtVB4Q4u79DCCBU8igtd824kiL8JrTRSHtP4LQkWHkBbMygoxq7MYLFevHenQj",
  "key37": "5YaFcZ8MZxmgJvCzYW1jRgvyAEas21y3ysWicm2Nip52Zj92AVAepKmMw9qcDMC3iWjNECdzDbEKLW36qDfa23o1",
  "key38": "3gQC3awbkTcWYxqobXC8JsuDc8nE71ZawSnEWy2sZjcyM39ueoZW81npbhSG1V3B88VBtVNzq84DvBw43mFBGPD6",
  "key39": "2qJ5h4QU7SQxMfNAWbUZjkqncJNF3zJLZpCx1QnDqAB2X5VKAZS6RnnKUpQUfEW3FPLLyDvafqtgD8bQqEahuacn",
  "key40": "4k1KHPacib9cfjADVynKnhHC3aoDZHrqdtbXpnPER8DZvd5zjgdEwE7iz3ybqWtr3bMUZrmC5LarLyScxiskXrVx",
  "key41": "5RGLU2DK2PhgktCW4J1WwEd6Sj9MX2J88i8tnxdTFTcXpFF94AQK6Qm6pM4MmUGedm7dyCnBCaEZd7kcE6bons5d",
  "key42": "5pUaJUMCYyXxvSGPHSkK7dTJk7FEHNTZz8SWQuBdEDAn5YZcYLiaJ9qAc9jKLFQxNGacrbzxxLrVdFansJZTNQR5",
  "key43": "2piCCsjFSzDQaVyyVqWRrD5ecKokwmAHhKRRAEE8vLSyEFHsUGYwLPByvER2orfpEwcZb69K3aGShPjYTapVEmSE",
  "key44": "4TByT7jpaLHPeXiyFEppkXLWzujj3qt7MGcAXUCLUiVkGnYvkcd6uaXWk17USi3cXR3hPCLnzvP7XZAtTSFcnJea",
  "key45": "39SYyoCxdW9BM9bom7G8ePpAz5qzBBwtv4qpFTnviXVNnosEfn5MAKq4EAvv5RxJdeXiWTkTosqwyDY1yTEAsQFb",
  "key46": "2pTvy2x49h6td4muUzeUvN7Vzc8Htj1Py1KUzQ25LvSk7UarSn2Gt5cHqunMx6ab1GgFAvaWa8CzDpdPLLXcnTaf",
  "key47": "615wHKFhaQYPEidDBxsH94HJCjwU7irs9arBZtyofsxRkSp9cVnR4cDehWD98TX9CEwkEqDjJc2NJiAosmRXCrPB",
  "key48": "45UtREnC6UkK6L7MAeUbMEGs1NRtJKmaCyuQEno1ps8DY7mBvygzS8AH9bCpMkGsXfU7X3jz37GUcppaAsKHjeZs"
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
