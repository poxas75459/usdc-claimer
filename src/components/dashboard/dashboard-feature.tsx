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
    "2NUzdPDcHNTtrSBY2fqrYynkMH66CJervUKE5bT9YBGqhZF7Jyn1eCCwDFSgfqgXNoZAXE7UB9BFr7YgK6jNpZbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H9bH4FVFipdNVPXkYv6jf6a9settfcJBvjpFZ9acnrpGQiPMb8NmY4jiQzqhHD7u99YaWnU8bu8qh1zQPBVYZ4k",
  "key1": "2jJ5W49b2EK2hg3eZVwffWnEBVL5ne9ndUriyCk2moFAAFEnf4u6kis8bgvswxPXKnPmMpGsiHangTbvx2MTBzDC",
  "key2": "63Y5eYQxgL5DPF4nJex7byeAGnzjF8s1ZBTqJ63g8WM97GcDvF4YCMo1QMsygojqwC4iPtQHDVZNpGFGJVDacDXN",
  "key3": "5TDd1PTsnxSeKB2nLcVjsgod4wT3o87pz1Cx8E5ruKDejDee7un54sqXpftYZxVCKC9CQHFLofbav3BRFP6ArgfX",
  "key4": "4o7C7q3Y5DdPztJeZhTPCv3YW8rV6Rb8ru8s1ib87Rgvxm1qmPGJ8inax3cmufyRqMeS5XuDPxd9tpwJNP16j2ey",
  "key5": "2ytdtSZe47MMDEPb7qKMvFq3PtNZYZ4sStpJagiYm63XVjCGxZGKcashKb5Buy8MTHBwciH5qsiBzjMzngBevgps",
  "key6": "3KC6KwGQKBqp2ZAv1zhpg4Qxoordq8Aky5R1nBp9xS1orgFK3MUVsyGEVMNq16Degso6aLA9WD7WU7A6m5ujQXjf",
  "key7": "466t9RRh9jWD9PxmSv9UzCPXfcTXyftKr3uYayXwrRahCHHdPah9xh8vzDBQZ4FgX7U4PmuV7map4YVaS73akwnF",
  "key8": "5BSzAVFQmi53xjcJt32eDu5efDbKnDZz9mEjSjioZArcVHgZJo4R8PDV1qqwDebuAn593zWk6fWnC8PUmXmSjaeR",
  "key9": "A4bydAidRhvxwhtNzuqShjxQGcuN5tA6vmKFYs7nkkfWB3z7cdCoKJ1NtC2T5uqkK1uEMfVyuEDw8j3bT64SfZU",
  "key10": "2rMLQ5XrhWsJmnK6ScZvXvG2A2WbjPYqxSeVq6ofkde1qnZ3hyahjHoFtZfFg6gq26GGfAcodNSHWydgkKrGSSCo",
  "key11": "4yuSrVjMzU2aB1HrvjqusgMbu2UgFv3AGHDcncnRCBhiwPS83QpEJrLwcMdrodp1YdcdVY2mH1KJ2weRDLRv4sRG",
  "key12": "zthJ2dq3H3gxKwZPwpBQN1HR9ywtdURQjsJvMReqf2K35vJVoF86P3AVPEjs9gUgDFNJoJpFvPNhxtZzzjXzbMf",
  "key13": "4xp1VhTSEzoMfCRZUMCshVrKU9gRCY1vDr4ycqfX1R5cTKJXQ7JrAvagzR14bt15mLPXevX4ucxqw6yPXNxDcs4B",
  "key14": "2fR8MKvqR7JComUSkW9UyfAb3SgjjyHRktZ8Za3C5BMDzZiK5sPXHi12MhQMRKHh4ErngQuSzeTxfQ6vAzZNmw1a",
  "key15": "2V6yxhfTamcscvpu4VUEyoNrLTTdXNm4prXXGgxVcZBZ77nXfUGwrKbjs3VKmXD88zHkWjfu7zW43tKP4GVMW4tP",
  "key16": "bm5kcCoN181GKUohN9qudJ54LTyPXnMDDyommJXgnPhe4ZJGGt2QQ7sW7z3Pk7A3Dik2THEgti8jEYEQDpnQ1Hb",
  "key17": "54MH21uURMKxTm15XmgXjZskx6sLM761Aehug5oesPjr8ReXieNxPsfZeFicjWpb1JeZq3N328dCpGCg1n7vaZqs",
  "key18": "4iSZesB4dQHiXvnqJxhtTNWzqi2AySWrc2CdHN1r5bHhAoBES7cKhn5sqte4fsPy5VPkur5dPqwxEVKEtU5sxtjk",
  "key19": "3YopAuuh4CfVBB6nhXhWTYZZDRyL2BdyHWv5yi5wuRR5gyjaG4U6iSDyDxkcXLchNYvLERQukZTudVTgggo7tFd5",
  "key20": "3hrM6799VJ2MKJM5QDKScsD5EvaQB1H62nF65c9LXBvph8SMvteK4vwNGogcrUjZPQgNj1yqoNaHj2LAa1Fnj86j",
  "key21": "4HMBf78ZZFYY9WtLo1isP4dGbDrKTT3ghmkFVjUPWm3NNKmt8ZXqzVxoDv8bqMnqPsdVLo1DyoVzXoFGk2rytVCm",
  "key22": "81WoaEmNwdNzhwnroeXd2d9iNLUi25P7A92ofNHRTp9i3pZBLMw4bD6oad5g6r52gYKRKQMyicWzorLhNxEMMMz",
  "key23": "39dsXCo8kpYGfa41mjndBxhUULPsipCR4ixM4FrDMQiW9zz8ywifi1YHxz3ZUXi7nJpNPWZ1AFP8rEtWgNnGTKWg",
  "key24": "26267PpYaWWBFFqkGTzYMa2ghLgEXCVWhZDCKKHEsz1ZKZQnZZn2gKgykmAeceG4wP9qY1kocDEQ2RdHcp5dow2E",
  "key25": "5aVMCyQ22KHf7bFjiGxgv7gimPtwnSAs9z3uyNvvtbJzz4aQ7D6dmU5Kwj7WP7CvbwRbcJSukZAxhJQDBVDsKvuf",
  "key26": "2NdG1zzA5h6vWsJt64JjvE3rfdt9wAtHT9G6ye8qWhEX5w4BCuRKyUduQaoxjJc832aPKoDQPuiWEMMUxSdNe6Lc",
  "key27": "2n35h2FELdyHEy8k7Fmw7CDMCX6tLTfX9wydk4j3fyovgDPZi91V9BFuvpXuAP7iMuEL4TfriBuv6jurNdd5uGT4",
  "key28": "5VWk8BhCPApNbrVakuqVJ2wjZpbsjpdoiPESmSHgPiXpVKzVP4vFBqc2h3ExxxaUS8hQa8tikfkThq8gN6LXpSgt",
  "key29": "4z3hwsgDW6MahkkHDkRcDmAsKxiRLPjbRSH5TkFwMWar9DGJJUbnLN6KRESo6TQtuzn8s1yHZz9YK3FhzAwGJnF8",
  "key30": "DdjxwJR6MVfug4bAvczQfGMCLHTyhucNdRncV1Swmra7rqRFz2Q2AaKE7j4xYTU25g4mGvCpQqH3tgPVPEpzSC4",
  "key31": "3FSMYiJhzmEsBWEi8auEnAW8b1ZkbuH3JRjba49KZ2kWteNveto7ycCQym694tN2KRSLrmn8fMEho8LGUTUeEu2u",
  "key32": "37MsU6igxuSChrdmucShZ2x1DJtRigFC1TU3oxrQPWydX3ZXmDz6K2UjfQxG9BMuiHBmsgVtexLqanCapX3YPsYQ",
  "key33": "btwB76fYCpXvuHir91Z2G877jWxz63KdysgGNUHRRpMpw2xvUhuQvX6nSUMb3BMrbf1PNRTQKmrBiKyhkQNdE3Z"
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
