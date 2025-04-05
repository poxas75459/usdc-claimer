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
    "2Dck32MGsC65McLziVs1tCULXEwzTJzWJ1LtLb4jqmX1UpcpWjgA7nYWW4rMkifMRBSMJDfdNDBZDvZNcFgrYnKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kZHrXv8MBew7ggSinp3bgeW3btka2Uz43CyUe7eea9viLpxLmPZ9XF1NLZ5Qs4PBGECLvuRXFwDTH4Z7Fgr5W57",
  "key1": "5gBa3tMehXu47jbiuDrSHctsiVsNPcTAZA3Ed4BbpkUaVF166wWSNXW6WvKFB7UwHjJd6FZmQ52wGagftx6g7vgE",
  "key2": "54htwciJJRMiMPQXY7id6k84mEUHhdwvbLYCeUsNUG9H4T34JYzxWnErJoF4jGRcmer83CjC7JVqim1kPvqVRyAf",
  "key3": "2iPtx4sAjPR1LRhtrTj4kTDJrLb1TUEgZZY4LsbDZtgarwayHDvyB914gFVgyoC1hQczsCbLPP8xbUbSVb7Y7jH",
  "key4": "2ohKw9yh7nmHK3d6ZXprZ8PKx2MyuvsgfgUKUjBQc32au8wMyCY3YajDRw167H9DnxD1Ub767NvgGhUacFSVfa7V",
  "key5": "fiQatK87ZV1jA4VsG51Ko3heWuZV6wE1GQqVpBdxJsey984qrFJc73PbLPC6yimPdMRx97wpVFiKR8Wg5SL3HZa",
  "key6": "5zXYopmkktM68mx1c5VxoXyY1ofrsRHWTo2imDnZHz2oUwnCvDs9MNmMvSDnKKftYsw4r8ue4x4uGUUjgsptUM2",
  "key7": "2y76WXxMqwf79aHbdwa121qtWz4r7QTKGxYtzw6VQC2SnsdXEnK1BFk1zpptbJdCGq4auPyBoTMkx7sUY2X7oTGq",
  "key8": "5LFn3juDD5K2KSJpXPYBuoFXB81sXt89VQ7yPUNYXXzh1eKKWzpGChgTiBnCQGZ3VZrnkuz6eXsYFbpRudStxD9R",
  "key9": "mExgnUYz1vaKL1LpVgAXVbJNC3d9H6LPhnfbMv5KogJxBjDzZiue8E5n4sHzJm4NLgX9mqzAjhtEGvhhFjH9NYZ",
  "key10": "4KXsLvA92XkAwACxHrvJKHSHjMRHWnTTXRwkHNuYvZPbgyzpLook473x58hWeGmiVgAjQHHBxpymcCztyremPv3W",
  "key11": "5jzjAhKgpQjTnnkEuHo7XDBrTE6bcakSM2VG3x69a3LPPFvxoF7xNCh2k6LBNw9Sz4opguudFauWmdh3aVv5xj12",
  "key12": "3VtrjhFeyvw2UBHbKeYZr1uvawdSw6Wx6yrrbnUQTPxn8wyz2iz8d3t8TwYNoUJA1evLJXKpxhLR2XCuaydCa5Vb",
  "key13": "3iGED6SE4yzhJXiGWBDdg3GcWtQYUtk1Db9a6fRWLYCqr4Xb2xxmVZMUeegdk32ujTJNimTFdyRgTpzvd5NQrmwM",
  "key14": "57jLTYAAdRPs5CnbTN1ZvtngafB6i38ps27M47QYEDheW2A7hw5qarYBuLpCujUxFkVfrtXPNogZtcvMaMH5K6Md",
  "key15": "4KYpDiJXd3Rync7jZn7hmif4JRevrTR7Cy5jdKA1ZugbLXoxq4sbxDx1SrZkamVUajqHZiYu5nbWsiadmejrA7ko",
  "key16": "3Zs3phoTiFVWLtCK5vSi1KKaACX6Y1MmVvWtZnUVL1FKQ2dtK2TM43ngZdCJA4Pz8geTFFynbRZVEwpkE3RBMj2h",
  "key17": "7Nx9jzZWmaaJH29b86KjUPbgjCoG42RDaifVieXBH8eizTGK8unWaWepMLg9LrhDckVsiWgcjGGSUgteFwX6xuR",
  "key18": "3cwiajgShkJMoxSBNR4UKNX3WcaggjL1YDu7fHWT1WZmb2AuH2yFEqRx4z2PJyXz29P9Qm1XeLKqW8Ugxfyb3vRp",
  "key19": "5kNUb15CuVeR136eVQyyCamZ4SFqpLEGi82vRuABChEBUq33XDoPt7icYUN1TeBp4EYuVHGj5D73nbW82XSgwio4",
  "key20": "qPPjKS5UeUu4xxBkPwUEAexm5PBryJJ79AwLNvHApkLprFn1SAWybKAykwsCDeiCp7wWudiPo9DJ9QsvJ2Lsovv",
  "key21": "5drXWeSpxxJZ6VWXDTiNyGaec11jSgPahmCpFUm4zK9iPPmUmpRnW6vwuBXSyKobqGrgy7AnD1KZZmZbwdmRBN29",
  "key22": "2gGSeQJk2zLqaseRZqyi9PPMKH9X6oUjw5o6QeDmAnT4GVxrHNKkdmEKG25G6gcgSiumcNaJGB55cfzVJvDSixML",
  "key23": "5AUUMxX3PFvcyQ2z1MZsQJEbsFSV6HSnmkrR3s6g2iCSckBt8Zg4md25hXMJ9iUXUXt7oEhYxS8PLh6t7qF5BDgq",
  "key24": "4UiknHrn6rtZ259CcyFscXHNTovZmdzK4dpTvRvEYL3mi69GMYzky3WiZNknJFLLWMXJLeXWs43Xevh8mefLJfj9",
  "key25": "5sqqm1vQLDtdZNxjGSAXtVt6VqPzgX4R1BWPsWjMn8g849nmbPDms8jFSuL5MChzf5FNFKzyyZnvknH3CUY5c5sW",
  "key26": "2xauQDgJMhtAr4HnFHHT1eNbEsssju5VwWN3LP7FhxTdaU8AqqA7d1mmBKbD37avtB3h6wJikFHsGHQ6sfhqWCPG",
  "key27": "3Yug3fVsTuxbZuBaDJxhkLSt6R9pLGYffj36tzzApGiRBBVCa5wmEmaZYPXv5bKW3v3n4X5XREyJGNYfYE5TtxJF",
  "key28": "2om21xseXNAiUjqRPhh4J3gcBuwSc6uibyhHrhS6RMYZdTtjG9iA31uqaeSqYjmZ36GfbG7TfnAQSiZFdgHse5Md",
  "key29": "4JkbibcML4d7DGKehy3QKqUs46mzW4CPj5WdNJQZ7caYcsMieehV2UyfqpA7w2jj5JS9c9pi5q5c48yLV4SmLUZo",
  "key30": "4MHHVGsTXbR59YGM9TZZLjVFKJS7WzDKnL6zppiyKksSQFM9fkZWnzorrYwQ9DKmgXv7GjKi7dfz2pHtJWkdtwk2",
  "key31": "2Pk7AnSbnasegvYGK2ueaxoxtE2J5WCgStD496XE1pNacKkjv82Vr3mZAbW46adLHvyC72e1Judkk5C451X89x2a",
  "key32": "H7H9hC8bCCkmswUEgJjkNyNwDRiRUCyo9kJx3tSbyP2cNuoCcYsHTPXzGQZARmXVewXh2eWKzNDqqkqjP9sUv1q",
  "key33": "59m41Py5DtJmNE1H6ZCBHgHE2N2tAHWt516fXBRvfee3fhuYqNcoeXseMJkFMMuJLVKf4z3x4TQ33k4ZoCMSJCxQ",
  "key34": "5iPKRLxENfdu6WJVfjm18feCgeVNhoYQtuRxBf41BR65bSyfAePUvGkGF2K8WnTnETVy4FvCLdECkcUam4dmg7E",
  "key35": "y4A4LXAf8CjbYcQLM1dzkyCbdH3n6oj8shi2nfFCeyALbKqDBrH9DuDN9tcN3pakRrBBCneaejo3iKDtFbhDjTJ"
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
