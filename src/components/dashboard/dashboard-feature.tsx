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
    "437AfwHcSeiwZpZLj2Qs7hMJDNgdCo556ssNaFvPoHRWxuZeekcC4B5KzhxjSWcmvJyoLFmhcTSgzFNPPpRGdXzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lp8ru7npyuZqWet8U4z6nT9jXrAReaSxmgahfsepzk9YSH1FPtVzAVmQyeyW3WjKACcAdBxFkVpFqdaZCVWhi5i",
  "key1": "4CWFLNQs4wNHgDDeZEe3EjBRzuTRdrJQxBZDPTxSkc19RDLjNAXYwL71haGQfZXh5svrZxRrvToFR2RKfAVY5J5c",
  "key2": "uqz5F5T23AAtAMVAPC29eupLhNS4GPUnqHjmA9iaxyz6DsiPAZSsJrF4oeY75P4khXWdqHCodxxMAtDYAjMuUtX",
  "key3": "3F2s9v76uSSE6VqHDCddRDMFr1bnrmkMEChLfKT2cLdyUKc396mZyKB65z9dWm4s25qKTtrfbtJkZTr53DyWfEYu",
  "key4": "2DJp3rkyxG9cBoPEqjCy3pSVMUA8ae8VPUfWdYQT2WdhyzX3Uh3xQGd1B8D54rwnYtddXhUdGE8y6QwuaFp3jXUV",
  "key5": "4jAKqQvz8XWuBcxu4YewLKB57dy8i1efq2sJKzigmsY17B1sy8heLWEqYxm3KheWRJWYapTtHrBop5eQgELACXhD",
  "key6": "U1X8L4VvSiHfeX4xhcz2ypyVWngtp1J7VYuEQaXQnGCtzGwg7D8uC3Y4J2S3UNtjVi8RrLbgzHiBzxo8xzFoqg9",
  "key7": "55RotfHmo2CqbGio9pxL5sLwvrfWnaFmm7H7xhhXGFjatvGAgQvKq5KYmratNoC5uJfgvE2Tpje4C82HM2FL1nT9",
  "key8": "2bkrk3Pkrs321GBe2nVihFtbEd9ogCXXR455vexCV8w8b1w6aAFcsqKiGq9gnsNaZqgK98RjysJd8k2SMsPyKj1J",
  "key9": "4DUzu5xq4waojUjCSbRpZCxjBFPrb6VkY81NXWcuuxwLppcLbyCWZi6pNDv71LoVSUNxG75mXfa9tVxyEL3UmgZJ",
  "key10": "2FqGwwDi3w84yzCKTgkMbfqvkKUENEwGhpsiEe14x8d3ar62MHBwBvqmk5k4GNn8YAexif6TftB44HGNSdiTLm5M",
  "key11": "4UUqDtTr3ztjMbnmx8P7BuFNK5sWeg1fYxm2FpF5wdHi55QdfDS6jrzhzUbZNFw1ifgZz19vzvwHMVfYLzwj1tPV",
  "key12": "4LPxUgkQAR42j7N2KwqkxCyED2usfHySn2xUycSfhaAimtLGhsfs6z2nTvNTf84nZpbmpiRWDXw2bspTZXZKHtJ6",
  "key13": "2pZKezGQ7Yv7Q3VEDFkzz5RJMHES5zzBKVV3ep1ENt7XYnhMHR2Ca3AUaVFUDUC7KiyCqfbsechhciJWXWqqK8aB",
  "key14": "5pd1oNhetf4cVmCXimoMrHzBF9w4Hbpyw474EZGiJSCNAEbNKL7TEaZuSvUpAqMwnjwsaurFZ6N8jxabaUrRGoeQ",
  "key15": "3h8PdWogxMcFYJJXJkJ5bM13vVLcessvzZApFfjGMnDbU9wU73oT51kxPjdDf725XdvjriG9mhovNJvzhAgCsLZ",
  "key16": "5ZsCYCiQQLxUwvtuqCvoSZeesh7g5ox5bEHYNC2zcijKu1HuLLy4X4ivb5uVeHcqLEEiHXJz4TiZhWWYBKn26T1Q",
  "key17": "2XgSUSWzkKtuiupcNxfM1bk4LueRpafrmiK2qjo3rzxrtv1ahJmDTfJNQ71ind4fAbr3qAfVeRmG5oxm31sra1HA",
  "key18": "2kJwq5R8r9EYLfZGgmpXphVkBCAWTQe3bF9nVQPtrzagdwkhQ64cmoPWjEtRkFNeFAegxA9japV5fiRRcHsapXX5",
  "key19": "DCgi8cSqwdHAsmj3DpU3QU5fnSgNmBbfgS2ynzR4fX88vEXXPS5kyRewir75MfwYi6ZUcLVsoKJ63njLUUnYWZN",
  "key20": "3xuY2DutgKa3BV1sLvAADw62x5HsGxjZgtWk8c5Tmj9ZZzRfdgMxLQqbU7j2brEZH1QPacurk8EjvsLkqAwbWnmq",
  "key21": "61uSY3vJguQTseU6rTz9NtDCXJk9UfkNnBJQn3jG8XrVUZChmZ4wyWvuxtXp4tcQ3EAwFNv7dvqfPPssy9X1orZZ",
  "key22": "3BervfEV6qYSuKTMcDX7beBZxF2ckWzykA7PJrNJbtynTYV5CkWWiUDZnrZDjhFNUqagSdS4qNbeweRsFvZhU3Xj",
  "key23": "8P4CqKDT9geg926iRrtWQzDxKH3jbmhqFaXwu7W7gbva3mzTsbuRkZaTuQX9UKUojymTdvXuMuR52jF9VnNpywf",
  "key24": "3UWqcUF2zUZUYB5EG67E97i3N8LyaxMQbY2RV6tonbhdg6NAZP3uSterMnt3TJE9NDX77gejRnNUTeddHEXUnXYH",
  "key25": "NkjsqfbufmF2jxFB4bsr9MMyHpumt43AhTATzFDRFuBrvtpPVrferaZJj3mPsLLC9pbMwHkENSvMeRyxREGGrx9",
  "key26": "58XZnjq1X9JN7UqLv6BYrq3AUVgHaCwymuYgJJqJE9wJuS8Ag2zHRRNau1Cxw3D6rHmzppJ6V4F2qhAQe8TSodHH",
  "key27": "5a1muYkejqFViZ2PJZHXZXnE7ixpgpjKE2cByu7wcvBNKDqrJ1fCCSVT1uz37xt5PX7QKJTFaVFP4gx4RAjfobm5",
  "key28": "5pjGZBz5ELuXakTjiwjMtMLoFw1B68wurqy7KMUkhQpZKnXAaaZeNMbFANiJvftSYwrhPs7RehCvtCsBQ7cBvbWV",
  "key29": "3fQBmJywLHQVJFnbNCfPmN58aWJpJGffLN32U41kX7nKhAkWC88ne5LFK4m9FnTgYjimYVkVxn5NyQ8FoqMRy4NA",
  "key30": "37adxzb3dn6sErsziQtb2wJ3E5TzY6dP58m442dsntSg8b7boqWuV3LMofkngs5AksjY2Dtpgg5goLTFn1RZndWL",
  "key31": "28nA32mh7eVz2Rpk1eLo2h7eJtnLFDimvFpw97QfSQrVRUrewQfHriDnxBGytaxb2DrgtznvHv2xZgVYhVD4tuEX",
  "key32": "2Z91WwSYhy3s8etmyymQMzoXt19L2AK8UG7ybWgvSipbjiTTmUhci3kYNWbEjGwyLosBNQqRXnEbv6u8rJgfqfQA",
  "key33": "3r6cmyekZD8mCZ2puqKDbXyTz4rxyQhwxvuAYzNA2EDDYCUEt4LURz91hLnRb44966ur6AHQxeMybdtUqFPUxX6B",
  "key34": "26i5jQKPWPSK9iesukwSFdikx3ku3JrVMgsMqmJSNgbCYtg9D3suTXUyBKdUH7eyLkwrLXpkPpNLe1LZvfn2Dovj",
  "key35": "ycJZpGQzkoJzj1bWffynY9S8djfVyMq2DmovJf3RSpCHDorRz19tQimEqg2s7d8sCbd7u9qV6awKk1XZR3w4aRj",
  "key36": "DMG6usD1bcL7xJQLBkFed6LJux6MaA8W6W9PJDFRuPFLoV68XnHCtC3tx1Uyz9GFWjcVr6hcphyHBn8oTy8eY3b",
  "key37": "2TLdi46AnWe6x9BpLV7fJb1Mkiu5fU7g5yxt48ghiCuVzfE1y1reeJfd8dXUdf6URFzNcyjNSGFrNSxacCqFhKBc",
  "key38": "4vyMBnsX79xN86D7Be9znP86GCCr4oYNtJ8Dg8HVcvaajigqwo9wa5bbMcNgxDe4LCd4Kh1wuXCaB5CpJSbVnF1V",
  "key39": "WuULBvhy99ssfqNbemg6KVxYrQmB8jXVbctdTqS7FLuxmAwdE34qRXwAn87Sgj4UsfS5cTPjDMu76FrcV512rLe",
  "key40": "3DjS9adgCZ3owBXoMZxPPgZE8KwfPmsjUQ6GYbGqrrnYmqcK12HJcvHKALdpdML6tYivBmCj7X99LRf1sxVXcYSL",
  "key41": "VyQMM7ZCrpfubuUFTmQzkyXg6DmDZE7t2TiZLPaUPnzMnqvRJfq7XB6mkexbAgrT46WYrgcsDgQurDGZGGwvoMt"
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
