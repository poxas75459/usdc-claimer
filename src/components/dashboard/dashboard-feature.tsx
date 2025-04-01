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
    "23AT5tcAoa86VMCV41794s9kKqkpEjCANjkocYywnZnxGMpYJyR7pQAKebxkQJ7x5Xyw3yPDnx8q3xdxqBtSgcCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aj8vyxBuHefbPKNFe46gxHtgdcZ9jFgJ5VeUQ8BDmNwiwr7TUpzbcbH3k6i5TKZLVVyaBtYVBSVPWjTKk7hx55V",
  "key1": "2XDtP11Rjg7CcauyUhDi2trPMTjnSzhj4Uv19jdwxS8ALJrMMcRXRNtvBLxzJwStJ9d7SeubquywX7ttZWHNk2mV",
  "key2": "2JPdBebcFNR5HS19e5iwxyxunf4FJjEY3T5CQFFkEPPjqMG6LmgytBJVGZhMrEPV2K5rrzoL2UQo8q8kExSUj8Rm",
  "key3": "3vJwi6cRQxLAU5P6cdf3Gxf1CnRTK6Bi6X8m2rtayvPGcFS9cBhpNNBKRyf3PTk2B637FyoU4koLv8xxRLiYhFUm",
  "key4": "3HXaTGNdXdRUTJCYZZ7D5zEwiM7oYQsmGMd2Gu8PtbnciDmMmjVQ9Gt3QzzXULVn5yJDP3A5SUZLHA2yCcfT3ceV",
  "key5": "2wWTqvZdYKA2g89zfgTYxJyGpsjy38YHgMLVUZHBZeo9fqVPkktbB7QTdoasBi2X3uULvUstbrQ3bs4kRsWjyxhX",
  "key6": "2qEuvknB9YTu2585MWP4FZAiu972mB9WzZWGTHBqdHRqt3GuYheTYhgmvacoE8HQdfSecyHSeMoecV1LcK99rU5f",
  "key7": "34XZ61erhBXLoNkiYdqpwyqkC6WsoLcbcfL7QNPdLM5D6ub8CTtJjfUfpVn8RvZ1fsU7PbUGujEeLqrh4RHTC4Bk",
  "key8": "4remywoSGiAKzGa2jKr3Cg1sLTbScpPWni33L6qNsjR6Gj69RWTHQPbUe9ikcSBTvHLmtRka5xCpj4DzfBFyYUy9",
  "key9": "2oFDBAkuZN64TYCTTPbpvWfwGzKLWfN6benmmn5TFM9y8TrKaCBk7wJJTEKjtZvxqTfM8kJSxLR5CyhATbaiV17r",
  "key10": "2t8en7pywDp35EYRvQL9NwvuuFaGJMVR3yBBRXZtttGZUNMiYB642dFPtDkcpcVJoaPWhEBAraB4mvr8zkUjqX8S",
  "key11": "EtYBZpkp7yP86hkRBsQrbGCfv32YwZt6uzKSJXZueJbFG3gPxa3cD6VnwatWAnUYzgin4fVc4F47BsCaanzDHLV",
  "key12": "4zAZQL5gqdyvYKHFajZpgPAmByG76wEF2ftNrK2EyzF5PnAxrpJs6me856W3vV94EdxRdfjhPzwrsbFQEEPYvvDa",
  "key13": "4omjYkng5tpQcb3qKQuEQNFNd7rkMYPW7iiVAjja6VMqCFpFdVspD7313FkM7UKLrdr5jDorkesjAUKzKfbQoBN6",
  "key14": "3JXGczyz4gEZasMeWkTx1ryHCFCzJnHskrVcWNgD3RDtrCKYMz88YvjSwNFqXzWbf8eH1eHf8exUdkfExEAgP3Vh",
  "key15": "42jafSszUNDhFx2zzCZjyrvbrbh1TCNzwq3K38xje6xDSUaicapWR8FRv2MsviJp9Ah76yyd9gb5jyhjPdisxpmv",
  "key16": "4afPNhDfnV1z3Lcu6BN5j6UB6BVcrrdtwo7xWsYoJ9GRo4qPcRo1EWswtbsttmnGDDEkYrLidHCEWQ28QNCJCwEq",
  "key17": "bZ4xFCUp5oi8YJDPrUj9bCuJTnSAAFKpDX2GWCQ1nfFcRCiT2BqPzDYbFFWSf1wHFpaaPSrjo2dhUGjGLdaxNT6",
  "key18": "J5ST5WFjHj2KQkpysqgP2K8NTJZi6QYijqon7ih2ikVCwrMtQCGcwhQzAxnqrzBnjv7tHeew8ddt1SJkfaJLaur",
  "key19": "SLUPE8osZpgcifWGVBgjcjYXEaT9czqmxh3p2hPeHi4aV8Btphf1pvQZUXKWkwoGx1igwbRGFc1q1eQMh6EiYRb",
  "key20": "mj839iyVRgZVoHgjnodWibc9yyAoeqFhbzqG8KQVd4C4m9PT2kHGyvMjSrTRjqVCKfcwc989SCTuZxRUVYDY8SV",
  "key21": "2nr4PyyshJF5xUQsLXEWjNunFbAisNCbMLfu7V2mUzzxBjzCgJyjhgc2AYLiT1kAD1i6tfYhJwHZwyrwHmQtfXQR",
  "key22": "4En1sW2ADtnr4bYZ4bVv8NXZgdcgN5feCC6GwU4bMnfhuaXrbFVmsRAihamQuP6dSTv6rcdPZtA1PVbGteFuWRjT",
  "key23": "iPXZfVKzyGie4V9EMDHA8jZzT1vWkNnfyQb8aXyvy9GnpqJ48PhuA41jLV3xZDzGNtVX7aHHm62sfrp1r1SjjmZ",
  "key24": "6sxND81xV1X1f81jqB5pC6Acpp7AtNi3DfVKeGfxPKCQARJW1F5Z2ByKB6Mm79ARJ6y1qQ1adV7SRsD28HPyrR6",
  "key25": "2RusQC8GbR6r9LNckvJKpzH9akgttmxBEXZyaDnyTrGmCEg5uGvvL1kkcHzf8aS4BH6sFpKUzqEc3Kt7NvFGfh5t",
  "key26": "2TJLJgfgpqUJRgf5PSeY1Z27t6yx3E7VLb5VAuNtQotiZZCW4L8poBfLA3n9z4dGz73aycm57WFoDo1W1doGFHJy",
  "key27": "2srSt9j2vUVBythQe4KoFEknQESbSac1jFiVR5LwXjw8NeNyAPVcJaHzUJkuq87xyjtZaGC2NGTyKfQ6VdgMNmNe",
  "key28": "6uUTaCuq6MzBtMarMeW3VxAL9TAZBnSqTANyygRfRzeUYbr6hFexy8v46MjRYyWXNBumZzB88fDkJCLNZeYfaFg",
  "key29": "2Bce31NjAUV9rf3SLMGDdq8SNMJwG1o1ipPgKpPBEhU6gZkWzyZjJRGwrpmTxvwV77dL9s56s6Za5zEdnDBDNMCb",
  "key30": "NZj1XruRvEex662WGfnnYrDczMxzven4uXJWRG7fQAihBTRRB1NVgcVuCBhLpNfomNnFvJyERwX38yrCsDtRQYg",
  "key31": "27yxWyjNKbxnkudumMsDji71ELHFJmEN3YhNTaiHWMd6MjTTJ6cgkLBocEQHwwHfJXvdYTgZAfPdEC3JTD7uxdFq",
  "key32": "3JoCPkWUag3ssjqA4LWPK5hwFa7ogXL5SqsKtA8CasmxMu6DJzDXSxwssBfZcq1kY1ZtWUCvnAfu1AaFdxNfd8EH",
  "key33": "35nJ1ykisQvkVBm74pZCbgcQfey4hDGZjnzW4meMkooYC2z3kVJBCx138FZZnK77ZTLbZkomqZqDJhh5XNif99Dw",
  "key34": "2HN8oxsZPHAa3cbD3yzAQdfWz26zUjmyGLEmqvNpuD3HZApnoSTWudwv5WX9SmJ6KW9tG1jw9WB5rrbHotfNtjpJ",
  "key35": "3PGGoitLvJTZjJVX5Tpd1CkXNNymF4zYWjaeQJgSSZ4KShQ28BoSxjRrVApc9u6C4efHheCjjhdobz9DsbkvY6RF",
  "key36": "2jiYZeERwhUjcadLHo4SKrBfZcmFXhZNL7AGZJRt3qSWHa4yQkVLByVPjoCfxeF5JM3mtAYKpZReFov5x4DuRWP9",
  "key37": "2URvbqQevZ8imEjzhdajURi4ovb4ndttGmbDUqPdN7fbxZmryMoQTd8aEkgbQdouSzveyLBoPsRFygys6m63QkCc",
  "key38": "315xpp9MvEXoNtCUBpdmbb1rjZFhWCegv934gUdUM5rWQ4b4XUVWxz4QWaFVXdYFuXzNmyCx1HfpZPZDQWsbbbgg",
  "key39": "5PKCrPi4qzbQYK6aaVTDERCjxxoDuGYd5XSZsjmWBXkJ3yvZcEGasE796Z3tsY1TYA4XsjGxqADTgKcYGGs74Jrd",
  "key40": "59tAoPsFC4mjhZ2yBVnZDgYwS9Ju9jgXKv8GbERJWFa1DsbgCBqLPcZcRJUvjK1DZf1ttnr4p69Xg1dpwrLHiHi9",
  "key41": "2gHoquv6ZSctXgMoqCs3cHdBQ32V15oUDeWEj8DY447BYvoc3kVVDrPSBS6m7NkKM9SkJQEsa5rzB7hpj4kaHdi9",
  "key42": "4SeY7ZXsf6vBv5pBzzbTJkTnHFR2mjruoxeoemCuq6RCWGvWhZhFLNHp9FMfC6KH6gqtjuPYX3jpxQEXUeFrCf1v",
  "key43": "nXhsFMCzz5npE1Bw1Pzd534NnnezkB8xDtEP42p6s7vDeaoWC4fPXnLUmLaC1a4kcf8d5eXHdGpVL1haQqYztVx",
  "key44": "JjEq3LgQograe98aYFnvomH9pTUcLovuosWfhx8havtBwgpH9b5AEDVmqaoYhQLA7QgoVBkc1FUaBbxe1jUjTYJ",
  "key45": "4NBwjTpeJMjfTM3Ub2eHzNTagybiCzjJmo19E4nvWsHgmg75iJDNSU5P2H7MKuQvn215vYouDj6iNpHfRf8HyoDH",
  "key46": "KXKcNNbhKPm8NVBnZeZ25aJDVqoVaKu9gxLpBeqzbNVJdK54wEwX8cDXRNV5H6rMZGbm7rr9hcjfHZpob72yzim"
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
