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
    "5q3cxTYsaqSuZHaPKx6aUpqftaEYpHhC4Tmw38WpCYZLwpDRXZLkLxqKYLos7vLBqM1McPPVgwMPwxofQWABQ3U1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HPtu6EuMAk7Z8xCP1vi7WscuPcJ9Q2596cBiEgTvHpydPxFAdP1cXK8imBDt7uWzbC5NiPRBqmUUYHhyfJqq3Yj",
  "key1": "4RwpyUHBA5U3tqFCPmwtN1cBbe9BaY47KkzhEECn2Xopve8j3U6dAaPvTkDqkFgzqFAVfwrXU8gSjT1SbVmwFXte",
  "key2": "4stAoXdFxztoWGP9Emu72wa76kMpVi6oEnERfmSpWSNi9HPZaw1GAPDahbfZyfpxwcMvpN8Zjhph8s6Woy6B5V8s",
  "key3": "2Md1PHFfkBGu51udHE1LipEQvWJtXpcAehWzyRWxFyhoSMZnoWyBTHodSaicEbbNY8ptg2KiocDgCRWDjQocsPdn",
  "key4": "2GDs5BD6vKfTALM6vs3FFjoi42gXnkX6YTKAofNALiDF6qQ7CpCdc46sMnTuKgEfKmrbgRp3ahWEaGCw1BzFMJ3C",
  "key5": "2BthtkYY3N3uxRfLmJ96fd6xrBmViCGSS2ctL7vin36WyYXbJ7bpZkA8J148e3ACyhHQMBibQWYBJnfy2FthCNCh",
  "key6": "3k1u6N682bgrvMTR3bt1JuHhiVBRfSmxy9hjSmT4E2tuq8X7rQXPMvPpKdpVjFQZFft2Z2BVLaYVXs4LmNNydK4v",
  "key7": "45ARe7689HyZKFfidgNC9twubjanJ8vHXYqoKKou2iQjkPmD7FvnHCf6vL18wt4zXRXCKVY8K6x8FYgM9VBxgzHp",
  "key8": "5NpK9a1MB6fRnw4CY9z1nENCaGUThHPXhoVhzXatAfuifFvGZNbK2qQ4R4pLfusTKJxEcKYKeA7h4yjoxXcFbnUX",
  "key9": "5cWiCmkKdzA3dT3cnCYiXdVcoW5qki5jKuWPz5qjQ9a7bACVwEMMav9T8gGionSbgrbnxxBHoVH8sBAPE5i9jSje",
  "key10": "2dWbvkxCmX5zX7XAg6J66fUsjZn893pM5jhsq1viwcR2zMPcpjQ3L4cPkHttpUY46ho1f9PaNpUmeiieafgunuRN",
  "key11": "5zXvPo6GyHoN25Vj4JUXiNkMsDhGqr668ifjcVByHRBKtUmrR2wvAq38CyWLsseU8XZTXCkMYkifR4m369yagxxs",
  "key12": "3tEGgQDWxP2hSWLQfLWoCu5UZELKBvizgopo1E2Qa1sLAR5E4mQVNPKX2xVratPKVsU8Ze3uT1BNgddCtzXiRvPY",
  "key13": "3Lh7N7Ev6dF4CQcJktx57nEUu2VSBD5fHQzPgGunLFPXgj4t2BanCZw8ha2ypymQazayCPJxtkzrrFmJJVTYaLDG",
  "key14": "UZAA1R8VyWujKW1Mr4zwTKsvmLmZzUALAHKAzTspT5WTqgYkCwy9m9j2PD2ruqK2t8Q8Nw6n6CNv4LXmafPjoyS",
  "key15": "Bof5QkUEbCUs6Yviabp249AP2KuEAuR3aQhXDKdJxT4bBsCsoHojuTQ1VLLnmBmdGHs4EBXtd9GGWokMHqdZjYU",
  "key16": "3VYVQ9PajPwPtBtRKszQapgWFUrWGZZ9zpRNKe6ewZPaQ1X5XGyXL1sN3vurCVpmL5DRWH1eFAojt6F2q9D6YKvL",
  "key17": "9PpN3qthx1JSyHD3KDx5HJtdYtQzxdi18pTR1oHRFVxYfASMoT2tkbqVhDGgWMsVKUfpiEZUPPALJcoZej6RLsv",
  "key18": "5dRT2Vm1rAfYDnP73ioEFD3W3Srcadpx6kTVURvkesv3gbPVBX3kA7CCZkyA1gnngNuUMArvoMhGCASNy4kGhaJj",
  "key19": "2RqBUSJPKE1Bun3HcWtqg3cZWXiUsEspdwyN36RJdj78qbCix5QieR32TN56oZSDop35Xa8Lvw5kYUyD5osan33S",
  "key20": "3CaeD2bxG6yEKndkE2UzxRYpPr37toYhTwBDZ5s56qVtLCL35K9ArbpYuYA7ipisGUi8DGugR7ibsYJjzheUZTkL",
  "key21": "3VD3zFh8StRG5o2BG9Qy2C34iQYXZPhkqhGjf9oRFj63aG7RkGt9Wigv5ybkcHHJmFZUSuGGRuD6GemAtcQZqSiS",
  "key22": "5NsFSGNqSSvnqGy1PidEyxc6THAqMjcmCgcMFgFaXuaofPzCegXadXvspAMUBwE27zCkThjUymPurwzztDWprVDX",
  "key23": "4bR2ZRygW5gY9ADE41Z6dcoMmCXjmaWLD8KiQYFXGuoYQFcP7BP6XnDwSSYjen44AswyVcY3Vy8bzjzLdPUA9W7g",
  "key24": "3ymWHz25sFTY4HNw1UAfeaXSaer3Uve1f1dWjU3ZQTEF6cHZFjYpbaiLXMBX7aoWtF97cLNpNbgpu7nguhFXVGgE",
  "key25": "46NQnLe2KTVHpua9NPvaFREUYCBu2v61fgoXQeZkZVrr9ZhkbKhgbgoyMiSiphq7Fdkgtq41Br9bsmDfX23Bn4WK",
  "key26": "3aAYrFwPqXfzK9fo3CTmvpcPgHRxL9iAjhrYzdDuBJVnmpshTWmBA8ycqyeNAmbVtrKvKGbzVM9KEUdq4jzmgRTb",
  "key27": "rZVVGsFvJenxwwYyjGRNWJTX9exF6rfmnGt8ihwQ4YW1Eg7QfVeg3Deo18FPb69AvSZgkFKQQbsX5wJzfQrqpdb",
  "key28": "4RQgfzEE3QRPUQY1rTh3FuMW8AWcs8f2NaJwQRDQvqiDdd1GdxLdQGVLNPsooN9PjyMtS34FW2a8iAMM6NhW7j3C",
  "key29": "5H1F9kRSKq8UmsHcFm9KwGy7x2NCLJvRqHJHyZyWXMxfbBHvuFodsRfWAHcxnjbo91mKPAoZX2EMmgxYWS6qjPX1",
  "key30": "2D5kULVcdmeuphnPsosfCF7mTnERjHQBedcratuJprHLcN284US5KFpcC38rJt2DpkmtemkRay24S6spddLNavqg",
  "key31": "CaPJqWSHyA3zGNqRr1rQ4yA25qT6TEpoBdiSUrkxdkQv6YLNxyNfoXXRZHtGibDg7VwwKFatQ6VM5WKe5gwUYhc",
  "key32": "4pnfX4ghgv9ae7R8WyzsnTovV4Cke9EFNae8FDw4ospzGVTysRhTCFSwq5d5nMN6SL4tYGJq4hGGdReh6krt8XZj",
  "key33": "3TC6kKfFZeaFeamdjmDTnrTJd1qFm4Yve8nGLgLPhtarMSa5Pnj6wQrQg4sHVwA4kY3xhpdhRbzTn8Cxu72UiN4a",
  "key34": "RwXXJEzJ2FxWDDEydpSEL8AGM5kcjeJ3dKsyJCCtE1Woa6M4cs4g6UXTADpZf2ZQQSeKH66ndy6y8znF5qCQGHq",
  "key35": "4KsxJdWbpUpSkKSVnYSuVDg1kHAYNmkAUcibussZdu64cBBxqmYfVdvNxfmW7F3xDaHuRHGof4CXN9XvNRc6LR7e",
  "key36": "21Xh1B16put6Hs1hNjwgkWpeJ4ubFSEjttvGTpDBYYFRJJWvnrUYdSPaacWtmLBJdL7dtFzxG2CzT7sL3kNhsU1a",
  "key37": "5syDA8pGjeW7zGcRr6d9S7WKX6VGv8uw6HAqVHDCzE95W9PReYkCdFvFB86fQZw9AhWMwDYSQCcifuBPGYoxNJZB",
  "key38": "4fkSfvXSNbHHiHWvby1fXGvtZrraHJbJSnWy7SJvQaoNSSSHRfigi6bDKm3XivLLYNKfSiZnG9QASg4NnQKqzfSk",
  "key39": "2JxstELTk11oYACtvkXZjMnjMMxFXkCtYzU3U5pzdQncAkgLiaSD9BqrXtTz4unVgnn3romZB7Awi6C9NA7rsLeg",
  "key40": "3zdEsioGrxUpw6ERkYb9HS5Hpurx6ruaGdnayJDf1uuv3gYMgkLai8yAAkVcgLmVS8hBtDD26MKzHYHWFW6ZXaue",
  "key41": "5cdk8aGBufNhpRpmsXhW1Ez6pVpWS6zVw24UjuHoxFAKHskEcnjxmF6N12zYCeWFg32LdM4dVYAQD48Qg3Fgmr3m",
  "key42": "9ZdLdTqJEzSYjbkqHeiTt8n42pTHudzH46YN16sm1jzhch3H3vFVH6ocRsT6pStgp25EHQPz2v2UVFAojjMEh4F",
  "key43": "2fuf5j4LivHfxqoU99hq1Ca8crPJaeG6P1C6Vvm5U5wUEWJxnppoddRf7GGxnoroo2sLQ9khi4Nu6cgv3TKxqoHJ"
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
