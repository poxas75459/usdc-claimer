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
    "3QQaXEjrM8LVVgVD57cxWdJ2y4q2isp3DTyEh4ZNYieYMcyYdziU9ftpG2PyQvSca3K9Y4oLdAC1mFk85sUaLuJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R67LsthVfFWxSgg5JdQtvYFSuu5bsrcge72Xf3f8ATfLfNXwwvyhSdeLQUFZviJGPh6QdbEi5tVWJaMy8wLXC2j",
  "key1": "z3c5uGwsViPbEo13m4FMtjv3LPKryog23q1HHqNoMd3ji79WS8U4gKzdCxbFVd7QqicWN5qCdjywWjBBMqu6XR7",
  "key2": "jSoo3HDGBW9W7C4yWzCRwZ4ceQEvvHbx5qSSCAwWYYJcShJur73MXc5GxV1rFPEfLMsGPTAwmQhtmGSCX2nWAVb",
  "key3": "3ydYvFyiGqLZGMQcSYD2txAi3eVpfhXn9CL8k49z7yDdkGteeBaP82awPxJmYix6cwN3kBg4dLTowMn6wmoxjNvQ",
  "key4": "49yaVuWJkYABLWLhRHNbWsbAgcYHBJbNMNbfXrxjqFJNbSh29M2kGUBAiizYwdVQUBNZdb9R1VCQnRvHTCaaYBSY",
  "key5": "FqAtbiSBFRCFnnVmb4ggv6jdZzAhJjjM81SfJM4d3RWZgKwPdC4rZSvYaZF4qWJfMR48CfWxc5f9CwMMZRGHm1k",
  "key6": "2PDxwQoWaSQXS6q9iJ978QbLZQDWa2rSWLMvW7kn6T3gXhLfbwxxtmjvhg1oo79MeuQVuR1ZWKYPUcM2jRWRdcPy",
  "key7": "8sWQmmHsnTfNwLjMDSfC7xmZRvVL6ogZWXtF8rYDorENL98e3ViRjYWF6aT73YeMfXAvNFveLFEfRAzmHPhvnw9",
  "key8": "4dsnnLybiNWh5kQG4A1k6ucLqVqqEtLWYi9M2ZppToWMpp37xZznMuEbFXyELDxjyvyMZ4E4NqpDhifeXMshLZJZ",
  "key9": "5Cs46P3anC8e1BT8nu6rwydUs7bXSDC9towzEArbdanmQG5QgYXqC8fAwZ7rvDTjdYp7ri2gf9QXQLWagiGKFduK",
  "key10": "4JzVbaKeEqrfeTgSxboCTq7udJKATxkCL7wvdhGxsf63uyS9CgdK4cg2muPutYN7akh2N5XkkD4H2DS9BfYQGEvN",
  "key11": "4bv3h3aFScMyaKjQGpkd9oUh4XeSHg1hyvR4fhSwBimugvSV1YjNkUzFsCp93aeRwdoFRjPJ4FRVTFfJm4PrCFJG",
  "key12": "3QE9xpKJEVUjZ2qm6Aq4a1dN2KfCvcfupWR3sy1B8gFdqhs7ZA5Yw5TqVcJ9ACyGajsw1CasHbVcMF6rZpCFmsjL",
  "key13": "5KR2xyPehoLdA45iPxPSuqSbfLppWkA8wKRcu1wsYvNUDiVx9qkSBy33ZNFn3aSEE2XF6PT9SGSim4tdv83F5bWL",
  "key14": "21cHgk1YqiGtvxr7y1vHJRm5mybxnHbb1R1ZmjpdS5wLFWHxd2KR4gHF5dcjSpQFCCWLKP4ohoCxEXzf7m2GQWcp",
  "key15": "5anjVuAyFpM4yKAwXj2RW6JgB8DhGgMsddNprd61Gcyuv8KxyUvzCrrEagmPYfBbr4RjP2xzf8GAZJ869VtbynCJ",
  "key16": "2Qg5R94Ni4Aykjia5ZjnGywMmzYuHk9QZjZ5zBvvaB9D874w1EhCzLoDAGhtBjxQXoiyPTFGDbTqLQ58VoJgqsNm",
  "key17": "4vQ11GwqfokhCa6Rs2RU3hnZ7rTqxDCbu1umYqBneTa1acouZGp2FzaTXAoUpQzBkpBR1gaNKB263A3DQR7fu4za",
  "key18": "3SBnAFyPA9P9pVKq5h17tkTsZ2cZeCK93rgCeYXjCgfyfwVZSgB2mwmQd7fF3amUusExhSdDr2gMLAqM46HP7G1L",
  "key19": "b6btSjQVUBw5ACZoC1E2ajRsBZf14JwtzZUgmQXRkjJyCQNrYcH2V8MRG9aeepDe4UP2a4ierN7BUGEaXNVv5gL",
  "key20": "5qpCyKrGWSiuSPgDy8435FrXXJUQ1BMETa1swRAZQotDXRRmMsGcxUaXsycmaD9DhBifqQBzLeSTymsmBLZ3BPvb",
  "key21": "MGFzA1fXya8mZdgX6ef3GBvuyN2mf6PQoLm14Ay2z1iohJt3q1hMwpoZCJxnFriUcSFUpPqnYuTqqKJYtvhcdTT",
  "key22": "5mt4pJRG31q3VFaYrFZPQS1kPvAuHrj89asMb6DkJs2CuJDsF5kBWEuXxkTVQQLxysVdct7QqG5vePzbotccBoxB",
  "key23": "4xW1QVodpYqfNuXAeWpexyoM9mHbeDuiq1xrrj5DgXfq4cRaykbFonHfhng5apeFxTELpKGidFH3cSujspoz6sRq",
  "key24": "4e6DiiooxPv9fJXMdUURbhfajggejn5JQJ8HsvFow2jVg9jD96sHCddTGXn3fLc2SC6gztTnDDUbSuqYWtuodSUt",
  "key25": "3aGhJSznsXwufdpbfA2hPVgkV2fZ76m887q1u5Hred23CFXF9jumb3STc2xkHeuNqgzx8Qd9RgQsopoQ2chBDnKu",
  "key26": "2U4EKmK82LUcmdXG2a9DrieDPxj2kU1iT1wK8kj7QMJrAcBqDhsCQfibThFBKKaKhYuE8hjpXdVfUXm2gazd9xrW",
  "key27": "674WwrbsLEcdMCVM8T6B8p4S9J7P4HA5gtksmG9XbppH46iJzTCJtUVBSbuPJVvfqUjhpLyWtPdLddMJzhr8P6Ww",
  "key28": "4i6kDWEDDzYCLr6zz8WtiEQZTDSaoCFhiHuTvZK5d3HdDQsgzcEM14vqAhY3iW7Q6nDtToVCVTeH4JBsqE1hgSUU",
  "key29": "ZY8NPAFiaJN6B7uzeEu2UDRtLRxJDd1x2AFriJSZJAwmAVxym6jCMzTmcnpZCafSWZNzrZf95Mrg7sgX4LYKbMz",
  "key30": "4cZwSyWQNCW1NJx84eiPvnnJTXq4ae2AVnTmMQoK4ijBMyMbNFmeTBC7hJUF79pKPGRqwyd6RKqHNkoEoEw4LRd2",
  "key31": "3x4HYj6JYPtLgyM4z2c7ndP3CTyCkRJH9Gt3eF1Yvn2X6YFGSJSGqk57EL1yoUujfXNYwb6zCWRn6aSUyM1hgsVc",
  "key32": "2hZuBmuCFeKTwbpeqJ5VmPm3Gn7t378xUQZuCctJ8CkMRookBxvA4GcaUnDZhrYB5kBqWG8FNK8NK1UBhVAV4Bbu",
  "key33": "5a3LCShcJynRsjnf8cWxMzHxp91QY2b6iviz4DVL3L8rrRc8JgXDJWbSVedZ4vXPTJMjwMyLnnnHZheCngNw3aSz",
  "key34": "3T4tparXSykcfxJWmHsnoSUL4JF2Y8KpHrDStUXCE8DaAXV6gReAiDaJRShKoGuiqUXZ22FZfnhrw8ipAyRCpZtU",
  "key35": "3y7ep5qYZwjcypV7gAkatu9JKD6DG51SJjnX9KjQ7GSHUnunWF2BAKKumeK12K3KGY8BtRRTo5DWZNeuhWYcjpTB",
  "key36": "5sJiFP4pXP5Md1H8jKLQNHijXyGHaQpnqMpuUow1adpRjaiBhPg5Zpqku3Z41BKxD4JehtgbxE2tzw7mhW7XM1jG",
  "key37": "54oxCmpXtBkh8PouEx31ZXRihGzfcgFoMB3o5e32SJcsoLLnUp8dkR5Gjwq8tJ3dHWsb5yFwQm8u62h37YDgTvzo",
  "key38": "5z2GinbKoU2VHzzWzXJqW5KnYjobVL5HVjHRipFpCLXu6uzZ3qGArTgvxUMbgUo29EkuGEoqyVEPpTEMVPZuiN9v",
  "key39": "kZcyLPwZnQ1ePB7cn6Tcuies4dfhdNwEdtn13enGMbp5mZmqZs9E5qyDRKxFPMUEuo8frdTKJnn3phHfk8UCHWs",
  "key40": "34bA4WgRTnKBbyDVptFkVnF9qqffNGNdJcwbPZSPywd2hA9zE59qk5JkDYVkJ6nY1xvP6k6eaWUUaFiFeP69hjfc",
  "key41": "3jyeQXYtzhNa9j5PYyhQdTjLw2QFdGLveuUF26hF81XAMQgz6uqxB3idCrq584fXFT2aXw8yC1UPtYcBpRvnHxNb",
  "key42": "3KNsk5Ryai2KbhyrapWwqRf8ZxvjkzxsxtWtsunNt8WrxF8vCTP2QDBY4AJkTKFy6Q11qw8o7MHbDmbg9DQZSDgE",
  "key43": "4zseyVw6AnoTewpyYdJCWSpBVYoHYvN77G3Cqs45q2TxG19pxq1kgiEgVQGqLf6qF5oEyyAKyR8ZwhFzqSeJ3qcF",
  "key44": "5aSE3WfbFoyVqqwLag4a9JBJJ92aBz56cmre1dSyJUwKCk8tKRAsNRERozKVvHyWBKLNJs8sWMPYB9ndx74A3FES"
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
