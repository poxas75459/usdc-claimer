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
    "4D4wHJQKVjxDZG25urUuCRoWezkftWoEHLirV4bZ1QyUGsTEfKy8BpyyF4oUpVbMchjF44TqSHMRzYaVmZEjKF3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Es7khDaJ9YbhULpHzR8uiQnd7N6xr3nU5HkbPwxnbEAjdiRLVdH3J1bdMUaiFjZ9u51HCp7XfXNNsKPwgKB5bAS",
  "key1": "38pwfEpMsa9fJ85Bty15UYGoSnmSKuojmwbg3ENGbcCBZ2m95s3DNzTVVkNbVe52eMxEyLQ2dseTTzVML5ZeK78z",
  "key2": "5HnELdEGNzBGGnfLQd35dqNqXPdGVsXDtxYqWenFwUhbs4Z1SAuBfbx32zBMZywwmQVVSfjfbX2V72vdaT2qSWou",
  "key3": "2pZFpfg1uKvAaD4AvNTiiXtPysPR9AQ4b915KJ7uS9mViBpW355MvNkAG3R4AEawxxEhHtYJsEDbEZPi3qYCybMM",
  "key4": "26HmKvPSJ3mP6znAPNX67MRbXcReEKSpxQWgzNjq6aowN7rFaYfJZvL6umiSBcCja2C9mMHW7br2ce4XbEGbuvpT",
  "key5": "4hHYJQP3Foc8cw1EQRUqDgsZVosWzDot3W7yFNtSPGNesuntZvUT3zLPnwef6DcKqbu1Hd8rSwPrWEQ3hCEeC6SP",
  "key6": "5cWnUmc3ZbQyJgwjvYsMjkvHPJNYiyNQbDRnAbvFoW54VXnCiy6KrAnhoQesp8VJ6ce4nt5n1PzWNZMNjivoFarh",
  "key7": "5mXidkatpE3jcU64KoCfhuYJHNW6uZ16mrumwuuqsCa4z2WNdK41az8KTrSGNYzfbk3Mzj439rMmmDJgxqNZGuy1",
  "key8": "3jk54LxwEt3n5iSeArbCyectsEKAEXbWqr6mUw3GDxFWFNujPLzkD1y7BZvyvGnLHEYbgLKSizUTfZLDRuAYULZs",
  "key9": "4R8cLBPGnmo5QQ7koJ9HtRRCHMfikiKmK35VBFxoPm4RmU9W1L7vXLWDWLJfBq5bxpqrYkvd2HV2GZ9QpKQHuQGT",
  "key10": "4tjAxvRyxzTQBeLUQucLaxuA34LmyZnaCAPMD2dpG2tCfqa8bn21jKwXzrS823v11QQjLg12fDp8JLtTPmxAmozG",
  "key11": "5GK26jnp9u2NfGhLR6TizgmpZzFt9bRoUQTynPBKvyoGKW8Xt8P7ZuLB1g5YWX3Mgds4n4zhCwk38CP29ukfXXJv",
  "key12": "32mhVMa99nFcYKr2cUHzBShrVodmPCpivCFh3ZG9DxZXTmXkWKVgxeByh3CeYK34DiuBAgxG9HZ4gNGHcnvBQ4zA",
  "key13": "2jo4TmjB7PWiKPufsmoWWwux4tHjktcKnxsisnmubh2QPwBMhe3BJS9iSGPdbypMcXZUesgfkMY2yfLnrMWkxmFJ",
  "key14": "S888EnaBLLaurbSsECAiV4sDkY5T6KCN9EkgNgeTyTRM7zTFPTFRt6Wh3fxuJ25puJNBZosz8xLReb7gfjgjVDr",
  "key15": "3YfEtCMUneRPLRPPjG6VynH3M3RUcrS7C3eFkhkbV8VkHhrSt4GCLCkxBMYcXAstHFvWY4QVTKx86jLorsvuKCx4",
  "key16": "3s2HQFT56tYFTxipewGDXkq1kmdr3yxUjMbyVv4RBMfh2o9DRcbcQRsj9vX1Cc6W2UAG5fq6NwWrsT64A8bGpktf",
  "key17": "32CQFL9LTRz5Cpq3dRHVGGAcWZ3LgVCfM7b6xAiPDpuwUAnyB8B1wSAF5dBWB1tDwvTABxwQLubVtzH9sUf5iAiv",
  "key18": "54P7SjJNgsYsEUCeFak9pEsvyeqP8kNBQaBpDx2GHS5XPgTY5Be4CUoAWUR2rdzEYpXZESzGKNHQtJUHXrn4W84o",
  "key19": "26XysCBtXMeajZU1Pzo4CSkeZmpGyF3Qh2SDG1vjkG33enku5xcy6t9hPHqmKi7tYyT1cjbqUA8sW8f38wU39CJM",
  "key20": "3Zi4PvbtJa2qdBhDrAEg7mnuKVpELkDp2YzzeZGXNAVHMunpuw4VJm2nYY5poY2tr6XA4gy93dqN7g7MJTB2CbBr",
  "key21": "TGJSbpxRj8DHFzZrehswoSatiXhRHKYfoepen3YnVqcYBCD1qcWBesCyp86nsd8xd9j5VqDgmMLN7egXF9ZybES",
  "key22": "owqrs6skX5gVZxDKqxQnYkynMHbaHDfj1rkBMgkguRChthQiEqAWAPNskcRfkf51HPf4Fb5WT7rAVDhoMoSeZt3",
  "key23": "35RRxLnVM7KeQjrhZ1D4XMbcRFrYohdGTczVMVBi692s2wtsgh9dbykgEygKVp5jFrpcpPe76eGRpcjQFBVGdVWZ",
  "key24": "5BioVBKTJsLBbUoHzYPMKAyDL67RCwuLqp7mGZYGoPxArf98BKEwRhVhEtcveQkhs9fS8fxpbeYKfqnXKLPZm2f5",
  "key25": "5hqKwzoKbPYmqnU5hkrD4uhAjaWGLGekqcyWBMUMvMLmNqjuWPYLcMs7isXy8g9noJQwwfsrGVXEvJdsorCthuCw",
  "key26": "D9PCqqf8SarTHUZ5XU2v1f8632733hdeAkxNvb4yP97ZBqF1SmJ5vVYZzWxKREMFR6irNUwJL39CBRncP3X95CB",
  "key27": "46VB18DcWFzxq2BR8nNLHAN6L4ykj4Jk8a3cfksEQ6YfJK2Fx7Q7tKwQgrPseQfPuNLy89Ac456KDbukGdgYMean",
  "key28": "4uMouXwM1fJe2nFHKN4qKyvDmB7eps7ZWjbLEtrjgTFdYEmRh2rsy3KAVXD6doP44m6JW3aDpSRreRNesRspmvxA",
  "key29": "21GFJssFcW9NBm4YmR68U1gDmRTNaX4iaMd9pEkmMyeodAMo1ZfaWQf16JByB8xs3x6RbYGxAy7VVM9176bbKkyy",
  "key30": "2yXnh6FieAyTUTeG5ncRKtWoWDoRvNixRDTK6ByjKVp6NC9YLh3b2eFXxifrQ5enY7gxGadu4VcqbVkMBjJnKG6T",
  "key31": "5jRgynHiktW7DKmDfurSrxtw7LKaaNQn7dy9JLmN22WRakaAENb4s1tCghxpuJVdbjZVGKEZACJ1T1MReqdoqwGP",
  "key32": "2ACxpXbJtaMwnwGUTkSZF6RKxeWgawsbgC8qmCqwoAb3jUDjHhga48ksfYf183LYGHWLdsieE6sFQfL1Kh1Z8pq7",
  "key33": "GxHVFgVwxuP6SuN9q11uSFcqwTizDyzFZtXnFysXyZcuFBPfuLvNx2Ea3Jm5TiVAQQqMPc3517A9nEHL7SNheX8",
  "key34": "419BAS5uABa2ce5XfJBfYjboF5JGbxdR6Ftb7UGgV4nRvB2nPP9GfKJh9pnRprn6sZb1BZyjTQhiXtJR2eRiJqjw",
  "key35": "bzuiQFMQwbRHUyyzWMbTV71k8R1ijghHhpYmoLotueHEzAaq1ii84S43ezNduHR8c4485T5xteXJs5KnqJX5NUf",
  "key36": "29usmo5kZqmLEpgrZh7fUQUzPfmLgLajuwdPQC32kd7G3KpzCH7uJMAA4btzjsi9mBXtu7ezMnupYVzB1xzfF94C",
  "key37": "4AckB4vhi65HYBM4QuDFGV6ERZxyqmroG4GNKTYiZi7GYveumxs17qX2xN53xY2n51an5zoNSc9BqaGJSgPafSE8",
  "key38": "oKTcHR1cbcDSQj9rtFrjcyu5bibe6Krdv55zp6Bz6rx2FhmUVWiU9sxmGGa96kdCp5sHw2ZReFu2vPzQZLGUfCw",
  "key39": "5RYpZC1hptogPCoffd3HjUg9i4NAecSYSfShJxsR1CRT3URq3kTFVwE1AphEM92mRk38yXf3zRf9S63qZfKb1iPo",
  "key40": "5eBaUHFq3T3eYV67vwXy3N4iV5HMBiyMGBVKeusz6WR4zKUKDGze1ux7WMKsEmKXw2HrsLG2JA956gUvhDPoNtpy",
  "key41": "5S1JCUg9erSLfmXwxbSQtn9TSScqLe2sEodPQNfrdFeuk78ra63MBqzaLmfvKcjML5Ff53jYCUPzZFAgxGjZDGDy",
  "key42": "rRetgf3bnVsmdMu2uNE8BnP49yGc8Knm2PziigQa5wsEymdEEV8UU6opAPP6eaaSbWVTfGMRfZdE985kgsKdG8r",
  "key43": "3KXVYdqQYa7tvtAHSdxddpKvugUSXX4GPi9mmn6VMrSbrLi8ZkRKJgJdbBdC3KLfi3pC5SL6TqahLULAZm4KPiK1",
  "key44": "3Y11k4hBS5w8SyD1c2hjPMnS3o8CBPiZkpyMR79N5EB2pzAoeqQk4ts8CzUDw9h89LnViFHdHi3MLM45Dky9eN66",
  "key45": "5kFNXvUpmhZMnsXM2mvnmxrzd5qAyBhK7xSxWKuJKadcPny2ybS6zUq1jsjdieBGxwzanwkvSrYuRSwa3GrKcadn"
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
