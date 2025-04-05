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
    "5pWy66vRXupoqj1o229LEq2dysmQXPe4cewiLmpcMbQp42xbftYJLGinFkzbfsikthgWkdQT7T3omtdiq8gWrY1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xrTPuL4e8iaG1xBAMLHSwhHNyiETjjEBq9pHHf1uMbrQApdnRw2PvqC1Nr2vNcPqR2VMjUE1KMLWe7oCf2NzLJA",
  "key1": "3R9FhUYCcQ9581wqGy8S4hkTXutsUFqtV8BCPFeP6XfCTqz4B8piXVdDF5YKCZXoVPDT663rFVq7hWbhdDfKGytr",
  "key2": "N5iWYznB1ixv1gV9rpC2B1BdSh4T63wdQbnJHnZsWnGZi15GegVUMQFet4nkYmmcv77c9HJGRY31195RJnxjSp3",
  "key3": "5pbpWvDxkFVSfCa3Swf53nEhLU99uwRMZpqC5f2kyeoketYXM72uue9ZDUMKD7tef7TPdkRdWP88D2AjXTiUe99s",
  "key4": "GQTH1rvkE2TnirXdhUauo6ZY1natwLWTH7T4YeSsZYKBhA4KZbC835jvhbuPW55K4nWdudjMwpUvkCpkJoE6a84",
  "key5": "5LaUKsVcFTuDrcuCtTeVsW6iuScco7cmNUUiXiREb8XTVw24WeEfkR82w9jiGC45nFVFEHzqXChVDYJZ4fTWz6zt",
  "key6": "4BvE5QEMDAA4qZBuug57yLtDFcbnUVoBvWcjcpJSMJvBQZu4Wu14XV9t9rzPJknztHL19GFWr2jcSqsxmnNTB9pa",
  "key7": "3UgFPBQJqZg4pzfso7LV6UoHcK1TUQPK8DJMsbZ7JKit5ihFavgJuWU97Mnqx2koM3wgM8wGFdftZTbMALhax5VS",
  "key8": "buy4VJBbGSW2syr3gPpGRi7AxSeewmxMMz4J9XFURWQdS9eVGqif5dVNtKEzuxC2XSdKKbxAPPzP93M9ZDFz2mC",
  "key9": "wmT1DU9NzE7tWM9wqSxPccQnpP9wz11ZxhVbUncDHijefXbgmJuotBYCZk4cXzGSr4AHuzzVFbFMcN2YnypXsrq",
  "key10": "3rkE7PpiJbrceWukjVAzxdBWLVQct3RHVjM5Z7eFyxAjxNsvMQc6n3NAtLL9NJkhfz3AnPABBQ5yftKPrHuFi4Ha",
  "key11": "3aDg43jVewP4wAaLvRz8z5SAhuLXLbT8BSWMfi2aCFcLWY2hMuNeUGqN7ec1ukSYFWHmnUWkTvtVKxxQf6zqmW4B",
  "key12": "2z27vjNWJyoDwqQt8QZDKR7SoMDVfzEmZQRaSiR6h8RgyKEftgJWynd9pKQZp1JgfqTtV2ZUabCTdrVtRQ5yNjq",
  "key13": "Nfi21hDYLdX8hcsvGoWqNPma5YxdDRNHJ4Pq1eadqQ9ugjwfsSxEZ9WX7gHbLYbiKgARbmYWMTxviF9fxscMboa",
  "key14": "4P5mgrSw7SiauxHEQ14kZPPJJtSp1nZffqANAxodZpZqvTfT5Jjihbx4Zg7WXcUasMDLkfEt3ptFjcG7rZmCpz4Q",
  "key15": "4G7VN2w6zmDbkZ4iz7tnuBDjV5x34NTuaAWExVwzfGHFZrEQakYTXGU94WNxRFsjPMZhDUyeNhEdmoNbh2tQvhG6",
  "key16": "4hxxX9ZX2aJf7cHLzhXpixpbReYc2Pv2DxAJnfyzfMXAwnaUUUcq3cYSbKMwJETvTp29haHcMYDTh3vHrGRmooYe",
  "key17": "3aL7BQKqXA5qo6TxeEFcDFbZLBpMXDdhZ5duEUer6aoJZYHWCM3CFXFRpcCnLrYmaFJB3pPD7Qf2DHpvN3RGn6Ne",
  "key18": "4PWsU2xq1p3uFGWdLnLnrHRiXwkDNwJjNp5taCNP8xo27RxfgpbYj9AgELcSR5YFqokT5KFSi9Vww7PH9ngUk8fi",
  "key19": "33LEazDRC4A1jGLe6vTDoqauVReWQm5tV2cR5cp8m3FvsEKTBV8uBrt3gdpBNS8RkKGeWppJy7f44eN4XJHHpoVT",
  "key20": "5xjdxBrRU3pX8fe72KLjues7J1JyGmGtr4xvUM2ZXFNibop8JQ949HfYYhCKEd3vtGu8Q2DPoju2vkUHkDEq2Wr2",
  "key21": "MkWEnErjKTD5GoRXjLMVTE6bPkBoHEbzuNGxQgZd1Gnvt6G1SBTLY1j5Y4k7T9Ch5FZwsNfDHTCxdUST1fWzgJF",
  "key22": "5YMVmsTN5JxSuh6Lk31nJDG9as1DSWTNZUQraEwAFoMQzMvxCYiD5L2hKehRzzVeEp4DJpbBgmryzpXwhuF2nKTA",
  "key23": "5cYPV1Z2sXNUnvKpbuFjJEHLfRivVMV3zp9LWzERJ2N4criXSxzFL4kkxoYYNGT3wuG4nuu2WP48Yr26WiE8Lp8d",
  "key24": "4z4EUNtiPKSMttaqyyXkRGWLfcUJ2TPft6yuaZ6kvy2Vg6g1U2Kv2k8CcfYRiXsZh5FLWbooAm7nSZrXzvvFcH1W",
  "key25": "348ZGrnZfpwCFwvAtS7ysR4fXvovx42EzBAJS4YgqXwW5KKk96bfMzkNBzXB5oNcyyetmnjiW9torUrj5XoLbd5w",
  "key26": "4VikJTXxndQqzmtEWJ3exFtmnDQYsr9mG8WdNTx6hs3zo2VRrudS9QzSoTpEnLMyNs5mtJYZDe1u3TqHV8Xk4dQD",
  "key27": "4Ufgs5HSnX2kfbLLPAeu5V4fidh1R3opWR6HeB4cawVoZ9GYFt9C48uWzoUqh3hW7U5LvSqrYJhUDm6NcWtrURue",
  "key28": "2Zd4LVGK5dqtM27t8aP9x1P592KzuBfaCkUtAsd9RGY7QGYrKX7kEWqDErM5urpkNUmc1Yb3eb72B3fXtUXWqyir",
  "key29": "5RgxsugMtzNh6JjF8Nu3qpdAy4St1bjWWY5nERnRUpQfz3CunMqpaDMNcDeybYbJekLoFUNRNTLRBou9Um13TGo6",
  "key30": "3z3SWzVzEEB5D4J1W5d2JrjUzgUxjcKCrYbcLGsiKRTXBx7BKTgUfbJTGSuDafx3bzTJRNWqQjBu9G27Hd2JYYBX",
  "key31": "64pwx4FdmnjyrEm9UG3qtzdC77VboAp8iqzfS1CBcBPwvvrYaTUiXgx8EXE4zqdqX3zGzjMofN9aFtLTXWyNgBnC",
  "key32": "4XLCBT2vtmtuNtiVKdxPyVjhp1pEVPJWaYK46rj8Jjp9VXcd19dQu7SxBS1GsX2NRwy7E42ELV4e8ZSCsWhxqoMt",
  "key33": "2Xz7grSZYiCJMndGjjGxMgNpiXQgeHRkpPEhpJ6h9avjgRYxyxXQZd66UbZnfypZAeL5mvy6Nwpxec9GzzuMtEtx",
  "key34": "5tp1G5pBrTEjLQ2UGJBiP4EtqaJsAhDHxujhsY1m6XBkQ6Vanz4i6kAUxSjYzVqj278PpkmBEmJkTTmL9xTAoekM",
  "key35": "67KTLD3B2gBcHB6Rd1yZDK3MR3wC3Pa22kGXMKzZRx8pDiU9FZen8CiK2EM9fMds9UrDz5zjUv8dMD5b5vte3NmV",
  "key36": "45FPUJjtV31Yx3eHWQXnbfB8jZSiiYVCv9aDwmfXv4cdbNs8i3Ao2MeMyWuVRmiSosX3qpanQSUyMCEhZfYTzXja",
  "key37": "3xTZB2vaXTJjJ3SBKKSFZ1TGYaxMbaMhBrAsDP5oTn74EXhbFyYwErFNS7VPFKeVKWZtRLkqKa3GsTcViAPqTene",
  "key38": "2LwVhzbf2SzbAJrcW5gQDbxcMxqKvBkX8qM6mNtyf1fKAs1isdP1EN5JGt52XjBQ4Zq3JLugQVLo3Xh8Y6znFTUT",
  "key39": "KXeG1UcjoDaDApJpn35bXn6E3bsfz2FoyuhwBzRRnmeLe3UUPuWfuo4C72wXy3GqkHKhWTz3baUhYNKo5KM7M3b",
  "key40": "3b5u2nAYvnB3d227QTnz52FJ3JcH8kuBex5mCWpuKKKeLo9iaEhyWSTGFPJW6vxAMPHtFr5bbC64Mgy8zCUJTKMn",
  "key41": "3k8q37ewk8DJ4qXEj2U4KULLQFEPQLcFYXhhMAotD1s4nHaG9SHz8SgQLoURsMs6NX1BSTSUMymkSyk1msfu4vik",
  "key42": "35WtvEL46pw88F4qu43oyiemKFPt1AUi2TMB4qx4nwA4GTNsqUmriXKGWFEqEY8atameRuvuUvgPVpNDmsdGMALA",
  "key43": "5K1oPN1TBGAnM6Bd35g7iHaaykL1Bvnbr5qdh8aihRbCCtJLgvMFHXMEjeZUAwJYCVz61axwUiYkzn2qn5ppq86n",
  "key44": "5u2HgGWKbpjS5mZMHD1vgzbh8QxRbBav9j2hCPsruiASEe1VAEfek41sWTcVAZgkZVVHLYpmkWVDC3WE7WXvSu91",
  "key45": "4QWAZ22CNz24aRTx1nfv6H4KEKDEqBWp9GFaQ77pbsBQ9sULuRfzRRNwC8L2n6KJxnyiS2c7NMfx5qBGeyib8SQX",
  "key46": "52kFf45fVZhC8sGvQ5UbVA4FEG2JYroVyQzuM1VnYfT7GWZajmzbqBakX3okCSXx6gT9pxW3o88yHyG2sdkKt47d",
  "key47": "2XPQ98DVKmKhbq6jHLf7XHoYpzUgaiNXox6XuVEpjs57GxfRZ9w4SJgrmMYFuK7JGYPG5drZ5JSH9rGVZfMFExic"
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
