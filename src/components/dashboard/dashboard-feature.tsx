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
    "5chNd3BVw65p18zcnHjK4sYnpggsEFwtvEeLWzpXqqsfqU4EydEhMDdkCzt6nHmbo8omejnPovMYYHGPBDEta3je"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w8iRnAMxFxWJVmFLRMcxwQuLEN7sv4DMQ25jDHEoozEde6rqkg5553dq9bVmvWtN9P178TLXz4uBxjbNu55ApBH",
  "key1": "4wXpwqC9Gs6yD1KYGq2KQTSjNx8gioSj2MidG4xQpcCQmB1PPcMo8hnL7sKbonb9hYksAGNyFJAJ6aexjxKbVx6f",
  "key2": "46ysBorvyWy3wYNTf6T9NETvkuPsVJCyZPj4d3nh8sgM1XcGHfDUhHi2qcprjvcLTqm9p3cHefj4zkPvzy7U1zrD",
  "key3": "3QsERa4xdjFmDWa3xaK1bAp3Neh8b2vhb4qggRXLK7qfoennrjQ3FcbGYNFoHbo37EvHBTNc9iYANQYsd3GCHe5k",
  "key4": "gsLrxF2UciGCfdYzs6et2imUkfMDvurJeQGVEQ8BQ4u6oqGE12dKBDFGCgDfTPbwisUM4a8R5sxVtvY4NTB66vm",
  "key5": "2kGgSs9dCQ4LZynpajNQBBPmVnRWZWjs8FD9TUxM8tZCbso62Mha7R7pK5yGFaXT4iigK9hdNZ6VfLUkU8BABwVE",
  "key6": "5TgKxW6VTHmng2rmNxoHGKyt65oPe2J9rYCJ4aME348dTd5yCMg152GLvGUsUj3ToDqMhp43wKf1PKNpWBGcoW6H",
  "key7": "3BKvh8D4W5QrA59s9NaDdE72XJ6E262P9o2TfNDzFeE5tv1YKacAe51Jzis3cntJXcVQbZymKQveNzGK4z8Pc8pE",
  "key8": "5etLyGfvYWXW99EqF6xFAEJ2v5pPnX5mtFmi3s5kxKWKrh9JHjwLCL2t5P6BVQcJhTNYpLSMiz5vTmPNiCVrxb3Y",
  "key9": "2A3SaxnE6U3XJgM5Hs4FRnV7RNVQcpTakkfWB7kN5SxyQPmZBesmMY4PSnbVFFfC18yiobVLisaEbSRi1NF3WPgm",
  "key10": "5oDBgP3sQAjW292guQZB5c7UdYypvjUyHcqkcYvBzNY12pBr1tJupTvtGvNCvAVbE2nV4VoaoTgKZqDawM7hGXaK",
  "key11": "2nBdx2fL7PTsGeH7PevuN7KhEyw6gQe55DX6kgJeb9jnYy7W1NpGydrp2J5LswpfZqoRMBtcg8cKn96nP5q9ngW5",
  "key12": "5FG6K8eiabqescxojwevq51H2vYvrx1kGGZx5YpRraYaehBwxyqWmXHz6tYVQ3aPs1iEDzj4oYXhjtC42xhAS2e4",
  "key13": "5CXw4L4gtM2TsJF2YydcdkrTxxdEt78Lvn8EFm27hJCUmV8JzLjuHJw6eV31ru5iAJRxu5eMnbMvBXDZL13HCZye",
  "key14": "3CPDpLC62LWahF3fJZC1FxpCMqz2DtLEZN8EV767SdT1AsvcoumzvtXj7zwH6HnYWxY9z72ShdYaZvfa3EDvdKF9",
  "key15": "2bNLWq5KQWuYHARFLx1ioFDX4bWcuL7Xr5USTUqK8svLWusDDPFrdSaxcPLBaDYxCeQwSjh4a2y1T5eALTbHo6XL",
  "key16": "4tBxCTQAG3KQByxs3cjT3yjfGgCy2h52ks4xyaSoKasa4cKvuBCgBknBGo73LCK45s3A3zbLXuNw8KRch4RHp1ak",
  "key17": "Syy73YXDDRPXRawtYg3miCz9dX4XqCJuRdN6Rskwtzdqv6UKeEynfDpW9rPhPPgUNtaGq61nrsKSHsV62M7S22m",
  "key18": "dKRrBQzgNUcCUR8s25cjzXUVppEqbFTpWMQxXHMDtvLnn7MRjdahFtQTPfxwUMuWFRcaZ9qa6mSQQ4Vkx4cS7Ea",
  "key19": "XdT3AA29Cm41cTDvJgwaoRS6kSTPfLSZPz4gKSskxMRdruk514hA1RXPUbytPUjURoWTFheP48iz5cMoSLG9gS1",
  "key20": "Q9mdwb481hQCAwUcNtikELb8tRf1Rjzx5zdYqhG8jLhH7KSYKfe6juniCmCDYNiaXRhfGhAicWtqsr2kbcCbQrZ",
  "key21": "K2DgcnNj14Qfnwp7Gi7rzoekZ3XypfZYe3mkSozPFPyL8jtPS8RV42otgxJBXLuxw9ax2gSRMSyGGoVtsZ6TKP1",
  "key22": "ry81Mv9pMUAU3oBAXZygcWEjFVeUw7xfj5qv4qvgGosxi2piotbY5SDNSCT1S2JsdSfBtYN6RcuULEmcqesYJvx",
  "key23": "4qSUFZjuWm9NN3jVqpY3vMBpaRLWvVfsg9HdTwGsHxLCCRoX8SxB7UuCavUimRBgXhayZL8eD6ZGSS96ttjKiTBs",
  "key24": "5Re5jJ54gCpX2eJ5oajR3UyETNLJkDDRMgvookDMd89VbkDBWxc6ZpZS2rxrRzyBRtoA4rEPJBRgDGcU3XEm3N4R",
  "key25": "CDHqmFpuLcNQPrLcWFzE6DePfvtWVs9CbWp3rgWcpSHQA8eQFRqLxC2wKXaiWz8F4TW1zxwzNmRFqacWiUB4oEr",
  "key26": "Bxf5tzzATQWhNLcqpuJTzXgDPv5LvGwjEKmR6VqkVqsxC4de3LR3LzBdkxXSqWA79gWgZuH4sCYWGEyLBsq7uxV",
  "key27": "5TABxS17MfFT1cmY9hzSGQvFB2886P7dKy7QYYMoLhxQanzbYnNnP6JHtiKmtS8DbRThjuEibwVdo6ekbp8kCPiN",
  "key28": "2DppbgJTeB7oNh7TMdYGoWhLf5nfY6N42oNk5UyKzPkBQ38HsPhiiCfQUe5nFLrbAp6anuBAkeRLu9sZ3HnxnUAW",
  "key29": "52r6nojJ4tNy8vP1hJsRPmoenEUN5nxAKTL7nqxh2aEpffdZdAQ9kxVkrv6Q8fqz3LBYFkNsJdAyFiLheeVtbyd2",
  "key30": "fjGGhuxexN9HLYiMsp3x19d5NX6xrfHmpF3mu7oRnKqyo1zhpS9Ks65XX3zoU2kR5Dk2V4eWaoDMSJ4pW3EeGA8",
  "key31": "2AdvPRjbY15wWvi3hfGjZQGJTpk2piqEVCDWe3tNExkGG2sGMbhuWSuAjB7xJrHs2Mtnntxm1vosW4gBkDF2WupH",
  "key32": "3dkLE6DNY6K8uNKpBagrg7AVrfe4hdvoPNd4xQMbAwSkkYLwKbs9yb12AombuviVUrsgjCLM7rvcJzDFD5qKjZgQ",
  "key33": "5Ns25RKqRRJZuxh73fk9xDK8C7ubFfhp5dYRwXrRoAbnJM7CJJ3jSAtfJDf67XnDB5NqikWx6zgR8yboXVmE2EqD",
  "key34": "6173xD9rekC3Chc6g6b9WEKuZ63GAiFJgTj9L5MDPynzmJcukDkN6HxnHDGXGSrezue1LHSxv6tXicWtyoA1mHpA",
  "key35": "5UmCH48tTpmwAVGwJWTDuZUoV59wshG2NKhtHMTCFv7vX7S5aQ52Kf2R4pKzuqZXyPenD5Nop7NfDHrSxptKj3K8",
  "key36": "dAqSa1j7NjeX48Ls3izvthMuAfp6jPQeQGn9AnjoMEstPYtyEtLGqSoXN5F6bS2Gchg28Wd5ap1W1muurToJPQh",
  "key37": "3YrVS67rm3ZpGtESoC3nrBqRUg1v4kaFSXnpAz9VP84jjEoxyDtGSCxzFqTsbJdnGk5vjb4f9z17pZ74N82AnZiU",
  "key38": "28MGGNYyRL94DToSzw493cXWmtuFQXJ95gRJGNXmDnhigTGQFp2U6mds3x3QY65CdbamfpJJapUPXcjhfustvBdq",
  "key39": "5x8Hyy6id6GQyszEFMPLv4UjqKy2J79oTmCuSWQkem39Lh1wBn6LZ3UNUrk4wbMkbwm3pxGZ1xdjnDBhLPB2Yjbk",
  "key40": "5mqzjJ3NjpEL7nMzPq8j5r3DHBMGJLomhHG2aqjyrADQRrAVDfmw298CgDGCheHpGLV1Jecmf9owUJW1P1HbJeC1",
  "key41": "4wy2snkUYcP1aRoUg4QPAAvRxHFLePwJWRTJ7XfRBbeCwcV3L8rdffB3LB4GtfG8tt13Kx2LBBbmGiVmgYr44RmA",
  "key42": "2Ho6aSSEibpC4sMPLZes4ke7yzPzb6vhy3zkDU8y5wq3b8eRjrGqq9Sw8toGZ3vu42JAo4FBLH5VtMS2n1GhRmbN",
  "key43": "4MnMDcuKFaXP9yiBja2XkMTMiYFzCjdLBbQSUYt8nP1oLsYSXc2QcmVHViLBn7SF8rfg3e3HddAi6qpYvn2y8tij",
  "key44": "rJAA2vxbunzrWisNPJEkzDP9FW3AHEZrofqVTCbSWv1PVaYJQ9qPABjfWg6UKZnBhrVYwDhkJBoSSZSxj5sTyFi",
  "key45": "2inCLyf2fQGQ7CcAFLeAiCoKymD4YEWsimpytEZCFrpohHnEV9STZEeax44oYk3gg3RtqKUSP75EGGBqTRpPjGKY",
  "key46": "GyaX47qFDqybmLBUesuTL1Eta9RHLyXAshhUYgTuT1PKhN4tRZyrNz988jLdxtbMxfY2asqNCDnHgCNnEytnK7r",
  "key47": "67WAxkq94uyincNHYbLcM9dGaLzxXBWcSaxkH3uxEguyPnsEC6uUaUK1ztPSdWYaMyUMZQi8vqnCdtxYQzgJYiVc",
  "key48": "5BPxBa17cevxMzVoxDkfWMq4vdGiJFfktimpo9ew19mb3QmjmzYgBU3c77cKoHhzPwdwH8jacCr64ubEJuDUdLLB",
  "key49": "463FnbvT1LL1p8gBNfHA3rPW9ma9iYR1PF2Ty8HA6wUBUkUfduCHaowDhbVmPvsmNZ5tbbBHGqTnYZ7cbauHPAb2"
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
