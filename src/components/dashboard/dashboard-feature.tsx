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
    "4YGUoMxTTo5MqPPyi2rh1QBBaWbEmNskUCaNgDtiiDDKgH6AuQ5TZvMneTZfwqukKEgWwnPLQ4C4eDg91BjXHeEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JS7TNmMZe4eGHnE8TF4FitaiqsKE13pN32qxs4Jkx5vhTzGEHe97mJUXyNSvrVgu5L1cbSLX9r6AwL4jS7wXjx9",
  "key1": "5TzwwX2nuxUrKARbZTrfe6mttPNczyDTqngUN86HQXvtyuG9U674FXEhuC4ELArQYMmHc26vskLDtLJtFTs8vEEV",
  "key2": "5ULcJtvNg5nbLf7dyFm3p8Dpk7VX1y4aqmEiuCWBwCj2oMLTTQkWBuG9t5iEZE1S4iMrkepYJhqyv1QwYe6heaHS",
  "key3": "4xtsd9p38HZmRm1fTgABjSsgVFifebzhyX9N7cbVxRvfFmevzFsEkGQMWfHyyTVHBKQALiDGKdinQptCRhr6BnSE",
  "key4": "5AD7f2gPrWE5GvYQEdD5a7rvVfckxz4j2jqAYHYiX1kzq8dduTUZaPk9fFmfxVBwPLHBUy8o2W5nPF3WzGhmmUtm",
  "key5": "3rLU2gs3XNPPZEKvcLmHJkn4tqTTsJKK7GsjJckFUX737Ef3j6SwmfvCRcn1K2x47Zx4Jt2CJKsvKQxUTeFQRAF9",
  "key6": "4x76EkGstFZSXsDRkSgkqc5q9ffPe3YAVV2mp4BUyo8XAHjKFnfcpQVvBKRZ7v6PjYwkHVQkheaSLfPjhSYsgqq1",
  "key7": "3DXwvoZBj6FtW7UgTWQM1YGcQajzbvXeTXRLHaoyF9cMCCCpTexCBRXosmr2ZrYodY8FaStABhwF9DUnqcJRteG9",
  "key8": "65ppcKnoZmzG2vF5AkLf5Lhc3KiyH8CAWGcz2HYJLQydJgaeBs1iTXm4XmZJ35gEPLixE9LCo4o1brJftcsMLWjD",
  "key9": "4AzFDKj1aGJvmVXgYB5GiFFjHaJ9QauoWUCTePjV8qyDDVX1swedP4DQwmGGg36iohG19yrEsbe71CUDgqwwHjoo",
  "key10": "4BVgysfhCoK99BQWtFdeu5SAtgCGXLuTtySxewrtWDqQCwfpo7LfHdKk79HWdyJEbDwtouUHQ6LJgvaVhnGZ4wq",
  "key11": "45i8h1yuE6QGyL1HkVTmi2X2LvLbR8oDViFCxSpUbkJVWEpchMMqw9jW187pKHoPVqgfEumkyLyrU6pv4cyXuFAp",
  "key12": "4qzXPoKp8DY8RbfvYnAPJxKNCMqKAQ3m6pG1zt1QJCKLaR3Ng6aPrswjxmCBgRBLK4SR9ZyMS5B8TdTn4khva6Ta",
  "key13": "2T2Dnttm5UKS17y4sGi6YTs4nc7AHHasUUeowQb9VjnnWUksSqiAwsZg8T6Qs87f4iYRv99SCbdzGLBrdsbNCmQQ",
  "key14": "4MHJxpGMysLnhaGnZ3mX5FMN1DTYeUsrZwoQ5nqw2Z94eigjhpD3sBunB5Xkj1WqQaTozTAVN8kY49FWCgxyAGL",
  "key15": "3k36vtzMtrU8LjXVsPvqzCZnbuuzhQKPFHa7LSax8kSd4jJHH86U2reE5bHLMwABbs4EunRFJTTzz8WCAfM9P2Ye",
  "key16": "8hT8nCDiuVe2XJmgLBXPzD2PqvLeFnEvSSZA6mGsCrGqjDewmWGJ9CdwHjfSHKWgqNrhxow8L1oeVpXGVnjjgCp",
  "key17": "57DskkaGWTwxB9X8tVF6LPDtVLK4J6VLriLy5mq5LZfwAw9hf8UPFLaBxRjDyfjgqWG3NJ9nQk4rXdcgdkCZR9e3",
  "key18": "3TUTwDdG9qQ1ktv8jDYqpQe3Bp3nMNRLsDevJtuTUjXMGLzUcApqwWTZ1YR9B9LzCUPHCxsQE33fyoA2f8oWAc5H",
  "key19": "35CDG9BVxg6EJFY219abBFZ92kEBMzZRZVSWZ8jUh5gsWSsjhopfsbihfbGS1JMuao3UujKX6xJ9LVg35FRaQhK5",
  "key20": "E4CUdrqbebK2vUx1DRDFk5Jq5bhQW3DFXjaMPrBsuYCLAtKy62ifKLeSDu6SH9QEEAZF493CfaXjvDLmzByVMhS",
  "key21": "3aGE3CZjV2C3AvrYxTAy7fj7twDxgwHzqbppjs2utM258iXQYyg1TcQwEfBkF7HRD66rkWw2PSnHNBtfLbXxRg4N",
  "key22": "1R5eP4tFGQZctyv5K9TkoYhSkGYhren6QXWUe8ijoqdcvZAGFbqn3sGYZKzLkWgLFoPVE3tZgrqTTBD8Q8o3zRN",
  "key23": "t5MXJec73zBzgQAni2riTn9c8Rzu5xTB9fY41wkis8bBNMDEpdme86zo4bkjGHwrjtnvbQeHPx15iywsXcdr2kC",
  "key24": "3XhmEKYWv7jkxiAFW3KapU6BPnJMUAuqdiGBqW2SAf7kbdpjc386KtfUsojDKWMxh56JVWJvEsCxBAvmGRGKwLEW",
  "key25": "4eyctvJnE8i9sBtsY7BymhasRpvRTympD5wHaBrcfDC16PfzJCKviV2nn4yda5C7gDAUGaWthavtULaS7oV8BwXs",
  "key26": "4DBNawYnKix8N3YX3NhwkKkk81AZdpAaECR1YBSVRoAhtZqns8jHPog2dRZi4TkpMSzD85DJ7pAuG8NUBewywxW4",
  "key27": "4b2ntiCKebkCdpbHXJNZQ6DqUP89VUgmyJPXgLEP5cowXM1rDqQMRKSEcPR51a9grHUusR5Gn5veKY98C9KqjDw4",
  "key28": "329gNKGE7rVwLYKSt4dgnZs5zNmdheJnoCtPWLbpnefJ6yv8XSUDTsPHf5FdiieKhXesJH4fPXef3h9gGZrm4f5e",
  "key29": "4BndHjGM9madGCmvd8MLT8kz5DsXGj6CdcNwYuV96CHXPTgKe89rxbzZn4duxJ3bxZGuiqJGchZxSAJycLdbLhjt",
  "key30": "5dxx4GKhambeyQdwp2m5e2jJdRECtVvU2hzvhvo2GvbEUBstsVSj4qgV6gggAfU9zFCrZZxAZVau2xXSoZr82Vq9",
  "key31": "4qTNwDiQXUR8WWeiAQGxM3XiXNMthn5iWyaAAmHoVm9or9aDYApayhcnNj9ZvBM6ZUPrZACjf3KMrUm1aeEpFufJ",
  "key32": "3ZQx16nPLT5bwnhp9ttyx6QNabHkTS1hyKm3VY9xkeXgsd4dQWCTDfRjXRa46c5LrsdTRdxyNaWRNimdiK6ZfLE",
  "key33": "2osnPJkJyc1YjKT7BfRYdXmgmXBocVw39CS7EHQrsV6o3R67mxRvgQZm9h1GE6WnyKAMW9LijP8GaHw5AGsAVAYt",
  "key34": "5YzNFZzJKrzED2hsWqG4SmqvjjojbNDKtaJgUKMfxM4b8Kc2PJMqhZA7n7sdMonUjFMXHxN7knywNj5fxXtQSBrZ",
  "key35": "gbVzKSW3eV5XXXuxEE3JwiWfS8ebgzJRJKcpynwCMEmgcszfRtsWwcexXh6pnuy7RfjSfLaiZs1o5ts9QuUV88Y",
  "key36": "2u7qNqCLm9ym8di9jZFvcwRTCLR2ko2Khtne9JQD7nag8sV73kXAgLUdGJRuMXCLQy7ehGQEFLjUmZDMhJ821MpM",
  "key37": "3neRBChkgjgAUL1BHX88rhEuQuGCb8PDDB792Cd5FqFJGEeByoM1i4JsM9jBccpp2n2k5Z7WFS2FFkTPvWMF4Brd",
  "key38": "3SFyA5xD3vcBf2TbWskuJNd92EtuWDxuBdP8ydPCJnNpPHrXijNFyA4t4RuednC7gqjaJaZFrf2xSRgu2sdxwNA2",
  "key39": "5bniNg5tqEjXyKALoVSpn25kxeuxPV4MhEnTfWEvznmDCrVTMYhyTdqgDtrgJiGGcFpjfCT7TV2LHqx3yD4LFrk",
  "key40": "4xEYpStSuttvuisUzoR7K7NVERPKHF7gg8NDCakwdkYUsWkfQAfzWhiEeb7oj48h2Ux25dMLDFo4VejmuV4FSJzN",
  "key41": "3HTnGR9VwwP41aoBfwWR4mcKZ9YgDpoFx6UD7URHrEbVsVpoXNvbvMEc3RhCBkNDYLbcopZbBbwmNuCDxXXd1DWF",
  "key42": "2fcxnk27f6CCHZYLFLtcJh5qc9ep7iPvv5J9musGBuNpzHxwMYCtVrdzM8VFM7xtC8h8DBTk4rCFrHaRd6KWTtxp",
  "key43": "66Cuk8DTza7JffYvALU2umYnYS8RhkyE462JgyExiEmTqzPoY5LYuQnv2eN36DnVUUpeLMMFisCxY5qpDPa97E8A",
  "key44": "3vNg9QnZofAxKuqTWHQ4cx5VPqB1zC8dztKXzkNufQJWFttEqfdo1BMsA6XRXBEg4LJZLKJ3bv4ZkynQzuUec8Qy",
  "key45": "5k8A69FdWbkpgvLf5LW1Fv9TJf8WzPHrrQYiNjN6k8Rtwy1TQn2vq5EKf5ZaF8wy4sAUyES366papmQ2euvuzhW2",
  "key46": "3TasnbuqfZNaeaf8VbK3jNVexNsZEBG4DT63n4ZmVF7FnExdQ6t8xp2kA1SMtxUwoj1G1b7a5pRaFznw8gFLR6BD",
  "key47": "5i13DYwzFP1uQkkuEZgv3vWxPn8vVGYLR4a6o3sF9fifJjDi79uCQRd42PQ74EhmegzCKBakyupbK5KAwMwj17J9",
  "key48": "3ByBXrWuwGhgjnFMDX4GgJgB2pAram9a2S98oZtBo998RRh7rX5QEupo5uNc8VeeqyZEdscME41gnuoqb8yfhkVR"
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
