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
    "5XLsWDEiNLrDGQry5SmBUXbfeqJVz4Zxp1YKYgMo3CGyG1KUR8nhXQ7Ra3S9JimNQymCiDVimZivHihNHh8Fvf7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tHKVzEb8peevYdx5hafvtTPoJgucEF5hKf5KrXV7vPqomViVmMWmBddAJVf4tavWXXSR2XnDQMdJmbHWag821Zp",
  "key1": "22BjTCPA7ocnhQcFczfEjQ6GtCsXvJXr1Tx4WX8qPZesvNe3N5WmHacXCBiLQQx668aCFpfBueNmswP8AE2yWNbq",
  "key2": "2quSuGhSiPzzBJwcTZUFpDVydpnwG42qmFvR3WR6X3usbTKRnsuwhBgKE5UdbzQtFoB6CwDpLcsGtyzP5FLgARh4",
  "key3": "2AXm6DnTiNsJgBVnKewvLUCi2Ng5oDVepAU2jAfAxj1snTX8sh5hmmdKaya6qSBnoGVk2LRQcXZrcJ4tPvt2qk5c",
  "key4": "5WaVnvFSxU4CTaB1H6KrVUFgqta3vH2nfLNSvwaEBA5PdhLXKYUbbfKAxsMXDeqrT1rFjJx8wq9duhwJcGvJ5kEi",
  "key5": "2bA5pbYWYaMrX9oRf7ph5S1Y1UeqoHg8y7r82HjfcBsbP3D8bzMcxQCdmbHTtqpRoXmCjQVXjJWrqCYKrQ3r2dCA",
  "key6": "3gHvdgf8gZmLUrif6ex9jebq6w6kwrjDpeN4kB9eeJ4MPpxh5oF4cVWVDRJJx7h6X1TLvBUCBk76g7P9aNUJr5Th",
  "key7": "3qGtqhUgJw28kqXSA9Vb8rrey5nJo6w25SFQeTBuUBWfppz7d7wWxNSnHHa7Js5uTFBcfyucBHZ4HZiS3RPYqXWf",
  "key8": "RkPBLTWkujo7bfWmkwfwNk1JvmFuhkcnjAsZ1VGsHgULJfFT1BpSQF1N1jo564HeaFNW836sU9y8vAmqyNqfzsx",
  "key9": "YHP4AeHSMb3VoQoC9ZKk9RU6LGfvaPDjAjPSsLLUFjFhXH9U7arqEoXi7qpj79QfoSCaSsPwJEoUYv4yJkHJuSi",
  "key10": "ra48buW3SygwSpECpzQbEQko1sjCajyGB6VE6QfN391RnyJqjDr8hS5iSxdxp5rg4TkEyHqBDtCRTMx2njhL1Lp",
  "key11": "2FAhKK46YLHLcJK4x2yu9VyaGV686XHTSp8yfHu6yuhJkzRNLySsTf3BnHAo4hAJnkAzK4smuQhRZeEskVDDg4U4",
  "key12": "2oqhYCzF71YoekLN2jhQ22F8cJN6nnxh9JctSPw84HKTkxhAuypRTcSmhrL9HXdDzmTMXk1upJjhY1KhKTnomfQY",
  "key13": "5mhewu531XpsPPTLMSjbKGbakbnJMWLGXSTKSa9m2ZKV51XHub8vFj2zarMc7ipSt4Tm9ZrLpySnWBXmSwEn7GqK",
  "key14": "4ZhtZvSish27RZkqMAwkxyW4U5wWHtBQH29fVXqKYhWkmZAzbLgXiC4JKb4ZuNX9VU7HFoATaZG11XBEg819snJ1",
  "key15": "WtCN2QySaNja9GgFL4pTXfzNHb5v52NQP6Su57NUaeZhwHCiaHDosRPWaX9dWVK5JHKV1rURjFJhWvcQ8pFyEvr",
  "key16": "3YnScFgKJToaiLgjJdHqFqAeGDivvRJNUHfo1MKWcBQQhQwvheX4pAA2Sa6DmWyfFsdjmV7BZbDnk9iDXF8HcMPY",
  "key17": "3WMDGuSv69z8iGUTHKm2mKUPAbU9VxAnCjnhiarRVon29xrsrSKT7DMGz6kqN396ENLEZukC5bBLNwJHcujWx5sq",
  "key18": "53Bd2Ys8DHeCk6DFHno8MY86yxgAbRSpso3kQnVHmCbKcQSSg3UeyPyKzJxsPgjdCqvMvhF8w27qkCKkDFkFcGkX",
  "key19": "2aHhm2ZkiRsyctZ1gAsKqw9bDvYxH8LG1Q4FtKtmo7ZbFzvYbyjEUHPcBkpLfBqtSg2S3VFBFayfajsznbUd2qwF",
  "key20": "41m4VCc79bqDmDrQp6guQmyAtQWtxgFEz4xfhva8iFk69VdMawEmr2JuHg5qjrwpkQ8txApxjXzbGhPAp6aBPcHf",
  "key21": "4jkmebGY4vR4bCNvHcxqgpBpKiqvmFiowzRRYA6AFR7bZ9Mk5HRriQQXt6rvacYmabgCj2xbeK9VRLYbZXDFzJu2",
  "key22": "2jpfDS57T2XhkjbZDuPJ33M9CUVsZ52QgoEezpWyWqK1CLygBHVtX5McwuZi5mzEVGRovtKsrVUimDfhsxZbavYR",
  "key23": "25ncCFn6RbgsPH542HSwJLLKgCvVAW6WZHZ7PC75pmbVeMXXMZHRxb48pYky99qzETp8semLScdhTwKuMr6QEbtb",
  "key24": "2u6WvYQBybTqmxr4sDqNGB99yFV4ZFUcUY6anp3Ump5mLup9XAAtx3JXPJk1poMNndtuaott6mRd8D24oMb6uWVg",
  "key25": "BP5bGzmjds9w2fJj8dk4fg8NM7L88UreY2iLFSh67krVdCtC6y32FnBfmFGTMCQnniF7jRDUAbXiQm6sw8vZn1P",
  "key26": "4C88ox11117Pxga74HfL5WTMvZWFDk6ND5jpJtjNMzST76TWnru6SiKgiAWsaPj6MhxwHe1fDVWzSDMv5nZA9awv",
  "key27": "2xPPaKYyks7WhWDZ38LXeQZ9qvknLTXxY7SmVetgyKACvMtA3FFPsdwL9Dt34eeF2iN6uthezhaab9QvJnaSvmEj",
  "key28": "5pXtWoFVfyTUh4UeSsk3DKthBoSoHNA9265W8AedFtvPvFmukkP2K4ZiJnEozso8r1hFjyu25MXQUeFvemsaK8Cy",
  "key29": "2cbLmnBc7zSXtPhtRdTVMxySESx4LaJVsAJLQxejyfGHvi3jTB2GSdAzSNuWhevrzC7BBY9anZmahYUrc6CE4wTW",
  "key30": "qfYUWMnuQpwW5FXQpArXhKs1F3r6DSsKQDib96Gg4fSz48Nz3ZXqBVwakog7AyUrhe4PZmDsaZio1ipmmqUrHHL",
  "key31": "4kNBJfBQWSWNL5tL6y2zSXGpgrxPduzpaW43C332ToY4Jqswpzz5AtjWV3BoDW1qz3PLXL9tfRvtJYnzdKtqMjBA",
  "key32": "4Ak5yYz6mhKbzPTF617G2LA8i5ySxJKCLnbRscDNrCeJ5WHvsyEe5xH2VFRHNnBPq7nnmXnRB2YsPkYRC22z9fZo",
  "key33": "3K7ePxkxSq69r86B3z6Pz32t2UJw34u5CLikLSj9VJhuUkNa6dTZiMVi8Xv4BzqKvNGEjNsy2bdzKjmmtpgBsG2L",
  "key34": "556dLVDuCCfGs385XsXmMXMPgSCzhk6L1UuajYY5eii1PywVQEq7ugPCMwk2oJTkg26vCwqvsbjUeTMWCLxZ6GHX",
  "key35": "2xayHFm7PFQhJPwKXseGnwNpCR6JruKCeSSANZqjKYJrdSrDr2JybiuyHpXmoLbDveRPCWmuJUMzVAq5xAPoY2hr",
  "key36": "2yPknpAuFkWdt5CKaLw9qBSfC2FUF7iiEDgQCUyPWK8boRqAsXSFAneYEYUMgvGemsJpBVeFxRDYP1euib7UYxwf",
  "key37": "49fHDJUpc39RLw4G64ouXnR15Ks629b5ST9CmZbnfBbJXt4bsiZbNRXFVFgNxhBYkd98ybUu41h6u7UGMpFWueMh",
  "key38": "56VKHeAEv3ujjFhZHJBcbqh97hbBeAuK27FiSRguJWDVxwjxvCcLPoGSW4rPU1vVq7km7Z4zShT8VEiKkmnAas1P",
  "key39": "GQ2Zj8Fcoe1CqvtRp6ZHuqzkM2PMLNnUisSkF9Fz7ffv7vyAhP7bYs28YJk6muL3sNt8M1eW1TVGJNdrcwQaaVJ"
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
