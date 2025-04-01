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
    "r3mzrGhwktgSKrJHZvXvo6Dr3zLdwZyqvZkHtkzNBPAihSYz3F7c4togENFV2FC1TnVve1fAXE6jR1oqEYntTdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VbYN2zzYxq6GEk56rYe96FYwSc74PfX3e25gX1GVRQHyow3qDToMEY4EYrSpdZoqQjynyoMfyQNkJdgDws1Ez8H",
  "key1": "5DFe8AmQKcejaxspKvtaKmMprpZ5dvDE9NJiauwtcCzkSqR958GbLp3qqAYx65CxKxos92cGWXM13LN7PsF5Gknb",
  "key2": "h7SSmQtjmMSs6EaQUt9CeDeVRctNX1WvXnH5j9e1E1jGYkcWNHxHidif5nWAQJGp3VUvzWMHH2DqJfmEwF2P49A",
  "key3": "5uhFcSKYuW93T9VR6yok45igMrqMsm1LDbFJzRMEb93fto3aFRpRoQkMkc8sE1VRUmF7DeEDV9xTamCu3uFvjmg5",
  "key4": "5oi1prR3TLT8LeRYVLCLrEUvMY8wbMFkkscK9zpuEp1KsVoNYLVBFpbK9zkmeRek9mG9ztQ24co2R9BXfLsLUGKG",
  "key5": "bLmCmzxUsCHbGa6HHU4FdGbW1p157wfh8yfTRo1mpT8KzbQ9qdaGgNMotH1B13enKZ19ouqQGtpoqxXb3TYSjgQ",
  "key6": "52GtPbGtsYs1gHZdYZtVNUywFaTwxtm9DAW9p5dtTiMGnMyqgQAXDtTE6j26JXC6ShFpCSDHpCH47hrpCKLuhKZY",
  "key7": "toacZWofA9vXZBUuvLPo3uxz1pqYkWoYbxhtRzAGUG1K8dnfSJvbXdYCKh5Qc7fZhWn12nmRUVN21LgZ9TFcTwJ",
  "key8": "4UbGsZ4BMYNTUcyVYwhZGiJUP1yFWWj1dkpMSYM7jtZaAxfd1sHricKfyNrPBcqCfugV42toHZ8suGcuzHVFHGF1",
  "key9": "5NKPzTrwCPxJCxC55exBpHWSDJAPKhDotw3LkCAT9suHcQ3Md1RdmP9XxoPcSzrx1dsiAZse5H5UBjbxiaqMCdQe",
  "key10": "58ZU3AYrnGK5yj2CzCKuDPrNZDJqG3qDCjdzeXxxZGzfkJVQvDzUfy4fh1dHy7RCmCFBgDpu3tFgyfCJsXYr1bxD",
  "key11": "5UdY51cd7vmWc7XyaWDW3HgkTrNY8VxN2Z9TkLQh7zEEbdr4HwXMf44N7XeAwsbkULSptW9MvUGj8Ft5Sk8SyrEe",
  "key12": "ZYpDFULPDSWXM4AQudgZAQ4zRHbkUmmVHCHuNC9fLzUQJUY5G6G9hVAidHpmeRvLTLWDgXNtHGkuDPPT4m325Xq",
  "key13": "3om5HJxexj2hUCfBU5PumYqadd3QV1o3pgJGyYMyxjKPDWNh4k16bq1bq7s5UJCs86sdEhstCGE1JN81LUJFTfi6",
  "key14": "53zpY6AjW8axkceNesu3i2QW2mHu9ngF8uwkmrMDcAAzWhnuFYtofnSEN8BednccaGVJUqHkQaBN89UrZwhdAS4A",
  "key15": "3P9zpot2hqXTMvyqRcgVR5cXiQW6xoYrko9s3yskYnTqYkHqS8QPgwZq7Yr7HEkGi8LS79Xk5NMFShyFZd2HkVEA",
  "key16": "4WDQnbrqJmAzwGpG1xVGE8qeT8xuBXA1H5MGVhJZCzJnoj4KqamwrhZopFLP1USKFSB1buhdT4VXrRD9YHVAfaRB",
  "key17": "2RbkpETAiVNRNcqfYNkF9AsUJQaKoipssvv49omDtagQFWTdYC16JF8NkaDvBkWnpsE9dZ3p4YYe9br68TTm2SXa",
  "key18": "2n5nRDC7xPvFZktDkgD3C24WYyRg69ZAnH4AUUaewcj6zLANxBJg6qTt1obNrMXZbrmqYnr7Rze5k8STRee1qQVK",
  "key19": "4poG6ezFH5EWbrYVU7DniZpiUTfrBUJ7ssF2cgg81FwhngfmFVGuswGGEJBvLBJkhtzfzBb23rN7cpGtyy6sJ1ku",
  "key20": "3MjBkgSc8kN7VE74e96Kxz6PCDhHX7oj5zj6jRNzndKv94URFepFYkQX7jSshRo59mveqvSwCUXDt2VvsRkmW25x",
  "key21": "3TUd4CwT4aetCXarLgbhMeJVdaCQjyRns1FozbhgNzRjmASUQNgogytNrBBB9JyiFyG7XFdCpbDfvRzh2qL7K81Y",
  "key22": "4E8z3Qu98Cfq9P966HjSfTMcpdhgto5Pp1opVzmqoMtwSNEkDmbVAXLN7D9fgVyn3cyJbDKT9HqtVcJyHNzC4ixd",
  "key23": "ngu7bNS2dbuzhyq6q72F1gbDr9nsykmnHXoYTpexYpWmtVz6FJpP3NA6xj3455pc3wKSLpNJRLy9H5aADcey9HS",
  "key24": "3rmhnuxykhZrZD8zqn8NDZMBVtzkRj8HWurSGH45XBnTgeqyUKvxQKVCim2b7MDMcB3L2hp6cKhYEtWaBPccvmMY",
  "key25": "2oAYeA8FueUZgZoSYNWGmLWc6iKZnCAhkNsPucKCYWZSW3qaAkj2upBZdZZysXaZECsGaC44CnHTpkMLt1CRjHUm",
  "key26": "5qQgvLrR2cvTExgAaeZTLvVTnsDC5KaH4a1Rk3NwCTqGmkjB8i6hXT685YQTBuibRPZXDYdQwguNDxavu5XMqgtD",
  "key27": "2ihNeBnMMES28yf4sYzWLWhdFHwhSeZVh9ogLwzXSXata2N99JsrRzq3tssatCFngSJPQSA8B8oH2pnZ7yTDwWZ",
  "key28": "36X8GYWnrpFF5ouQPEzmF4pEhMWFPsH5ryo2T2waiioqBL9AWFhHj7P6ZhizmM7Dtx78vBGRdKCrehguJDkE6Tki",
  "key29": "SJBW9k9yS28hZSW7eGgHgZRt1yV5T538PyfADUHL7GWrKNyfMN61GaCUHZeKt3wq8tdv3bwN7AxWkkDocsH9pgm",
  "key30": "5Dkqrz7YytC6J6nCuPznMKAmDC71JuZjqV2vHsKLELxGE2xPbzKo1dnufm7osY3LA9FcDcm7RjXexAFFC99t17T6",
  "key31": "61iWcnCtvU2UMai1jsohBc5RaUC6fWDJmmYQnV2sf4EQ21FA5vFr15Hd1Bm1ZSFrPCbA3CNkoFjvYex2ca76BNd4",
  "key32": "3TxK3qtahdM8Z3FEngKswf9PL4dCPa9S85qAzZhVwu8EaXoBxh6izcs4U5nsiauHvvfxkoexT3JNdZ4t4PhsuwKf",
  "key33": "Y5wvMURfB6R4aU7YL7LaXjUYUYjFXb2kk2Ps18Df1H6RhD8VJEvM81yRtJ4rEa9Kki1Pph3gteBsp7EhggDEMqM",
  "key34": "SQs6yAnUtnnfvZMKSDsbsx5wpAREBmQ8EUQ4xDhwUu9HdADGgz5Rvvwj42499uSyVnLx2DRfrup2EV7CuAU6kTj",
  "key35": "2HVbY8nn4guQnhA3L2oaYcBzFSGffyarCHtiSYi7gMrzH2kuwqLGTWU5BQ2wNP5wZUBDvRrFHF6xCceAG1JB45AM",
  "key36": "2HTpf5Zx5FVZ8ncteTGWjWxZPavkWUMCJxPtypjiMj3vDN1eWxgVZwzXJTSSyj1CZcsYNjaDSr1mGHx6JeMW2v5L",
  "key37": "BJhngPrp3CBxAepCe7m7qjZwv848nfcuMmvJx8f2NXfFMsbaBvazDSQWH47NvFy6Yjweop7eCjNwHE2Dp8m4tkF",
  "key38": "5oUhqvCcUPXTBGcZztkgQmJoh2ARNED2Hm4BwqrV69NCD19usDZfEtBVCVuZUt9jxhLyMio3WGddm7DJLuw1ZoxM",
  "key39": "wDAQehwk5NGuDKhoaH5UE892zZCzvLS1xu2oS3CWgVr5ctknm9XnPoUxsSZtLhRPc4iQnpHwKnH4WBRg5p2XRTP",
  "key40": "YZFjzuBpYtu97yXfaHdrVxE1z4yk1Vz6nMKdAFhRZj367LTLKq2N16hNvdcP4zRK99X9wrTzBbSF2oPmrHn4Aza",
  "key41": "3NnoMzhuzXXqWijrBgzZZVp5FBRf6bnhv4ohLquGaMMmZ6usGu9uzpqug93mbkwiPbTEveRJgMuSLzSggCR3WSbL",
  "key42": "AHLoodrfa8A7mn7RRnr8uWM3hFWUeEdVTpMmukhQkvPwtgmx3Coa4VRbm6nAvUQsgNv6tcFQeimLugZQ61isBLB",
  "key43": "3ddZpPYAGzzLWER3MUyYkr5tkRoAHbnYASFxQyZ4CMizze8AjUehU6x7QdbR2evgVtgmK2dWKSgC3hdgpKLjfFfh",
  "key44": "cHXaQespcXzrGkxPiPEaXXzB5Wra2CavrQjrczSa1AeoeuaDa1QtSj3gEnRb2sqMKdrtm6Ho5b6Qi1g37NxgfV5"
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
