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
    "65f1WTdaL9CMxGtNbSZDiK8L2zdkT5Frzv6RW1BSoFhHAPAgxyUq7uS8Q18LYFJFJbWHUqK5qAqycKSMXCajbiRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VEJrvpZFePCrdxsGRSjVxs6uPWW5aSevZdiXdgmNU4Uqn2xKKUyDKM3gistCGSSpxfLejp4fwCGyDTrnamQR8Xz",
  "key1": "3rXuxAcD7hgyLFEfnyRWnW6zpFychwjtfAUexdJhFJvfbP4LWVhNdu42k3nVwq6BHnTeAjbq54dksjvDgUrXtrai",
  "key2": "3HsT1crVRXYbmcLcr8tHEUeaJi4VAkTn8qgbsVByXXbj9GWSnc3g2gpguuLyg2ERHkFGdBnkgopBDmSxLGrAiXiz",
  "key3": "5ybDZVzbpomdT7DvxHAsY4k2ZqKa45xQMSxE5jn73RWA49pWxnMj8jWS5yxkwWxKSZuBa2rCmm1qtEkKLiXtjQzK",
  "key4": "2ionaH9FHVmDy4tstuuNoPxKPM3VD2XYm1wc2Fq6ZC6ayZ6V7rD7tDWzKYtVFCTwERte34kRzmUzH18WUhQb5dUE",
  "key5": "adAQu63MbAcxVU5NsrxEeGsdDMVrp4CCcoPcCkMTDkUAc71nNZm6r2HKaoDrc2mE4h8CxmkvRszQDgy1cZwA4St",
  "key6": "5cvTAswa3taqZPNspF34B1oMaxtL8RJpwxNZM3b8bwz1HHvtEWFg3NHvHQhTkVhGiCTs82GJCPgzqpMisQdZwd69",
  "key7": "LN9WnZjNax7F1TGuwkNzQLn9e99sdpW7DKRmtBhSXVpvApgRt6doXBhPE2Y4trG8EA6uE9pyE95LE7rtfTVUo9q",
  "key8": "5pmrffsaZ45axi6m7csV4Q6Mho4Z23LEndLsWX3qwyGpBc6b4tYbAg3YuewvdC6K2R7wujiP513qPYHG9pkF8rku",
  "key9": "5oMVpZdQiWNq9uEZKptBV1aUnjssQfheTiuCaq8ncskzvpVaRYum2Hv1dCrFKd4BytUbK5dppakknBXBAoDi2TH1",
  "key10": "49UGWUyHPtH37jgydQ3PVyz7oF5RNgrQ1gdxt3Rg6eXG5GeGKAjwJwHkPmesAn8mqJGCa4xjduXx1xJ6R2xpkZG",
  "key11": "2AZSviebdTsBsviruLKKUFsbaCegyjDM3WmxqYDzhViWVrDcFw4ng1L3YjaAMDndEM4ueFjECA5HtR7QiT6vxZGZ",
  "key12": "5GKr9chYs7W1VwWBnsS9cMWckUE9oW1CTnScDsdQL4fEA9z9WyTaKFYBVe9CZ8yqcSifUbWkkHmAzivaQVztCtyd",
  "key13": "5rMLZUjhoK8kocf3csX1rhcZuQnqYcK931EDHwe1RM7HbgDgxfnCciBaZeeavUA74UVKU9k5efckC6RCPvRJAj1u",
  "key14": "2CN9nP9Ntq1VDKYnwf3omKLe3Jk2rGo5LouZdiisvNtToZVJW4sFMdVE5uoqfkLDpPPw3CXH8e6qK1pwu7AU2ydR",
  "key15": "5c8Qx5Eic65dpt9zXQrQpk1GxrmAuK5o1VHD413WW64tZbg2wS5cEnNmAhKgdFk9mSokMLRGSNCxaVT4UBP4CYAE",
  "key16": "3Q7kxFHKTeBoBYC8DLitprBUKzUMCUmyo9uPcWerb9ZbPNrsUQJoMoRivs8fpdLtkremN7p9ZKTtGZfNNz644qki",
  "key17": "5LQJBxQF1oEmpM5KkG14h3dsiakduzWzPB4wix5vkXCXsZGuAXugGKwfKy3j5yoJfcvviRtbeKeyTPDuzztL8v3o",
  "key18": "2ouS7YEA79MZLNVfGFusfk8SvLUbm24zujT8izasx2ZED8D2QxG5aiosfdRSpJCn23gLesJjzHZ8HfvUHM3hojZm",
  "key19": "3383rKjXLdvHU23DvFujL8DN9G1Z2SpGLwS6XQVUPMeWNYM7Vre5pVecLkuEoYLoGGJ1GRhytWy35MUHpt4TvuPw",
  "key20": "2zdFR23PqwgTpojNAjjZRx9n4dP9z73kTzoiN4KhuVU92YHHEBZh3C2CyfVBoiLatBQ6fT5AaMunVYVvdBAcrTRR",
  "key21": "2BoQ2AF1127zg4inQ8bRZFjYVy6KDtEJsYmwzmcoAbCf2HHzU2fu7m3Sko3JfhvRTGB2caXNbqsrHNspKzbeSiy1",
  "key22": "2F3Pi26teJErDQ7QNLargFQgo6ZzYgpag2H4wtdUuHBooxCZAs1YYs83daWNTXewU4ZGR56LVUbE26867o1KELfH",
  "key23": "5XREf2H7agZ75AV1NxUVgJmqVQct6Z25yWKuFd2Qm9WeQMyL2cFbJ8ECLRXoheUaykCkHMhWaDEVuq4c4n2EPcVg",
  "key24": "2GojAPApcsme9UXPaDsccmQW6seEoM1nkhavFS9pz44tbje2JAbYozQRGZqmqvDVwHVDyGcvyw6QVjnT6bQMPB3K",
  "key25": "2aMNpQgZtNW7fe6wmFy9GKPGSiKD1o6Ms61Jn9zEkhPMBCUPvaMzKsPpRue2SBFGpKgiyVj5BRHZD9pvoG4bH6Jm",
  "key26": "1CSEuRjbTU7bUw4Gpo8n9wjNrScnB95vAVHj9wcSQSFjFR2YxV3YFYuHYvEFbnMaVFs2M1re1CHFku2zStKRuo5",
  "key27": "5sEBi9ovewny526zsVmMR25xQXu6mFCP9SS2uZsNtziyNieLWny3FSFrhW6GvS7RfS1PiAxzzy1LRbZ7W4ogHqaQ",
  "key28": "5gf6jC1J29vS1tp9WvGVydwNK61TCuN2Ctxa3n9CVWXMVFWeZXmsqmtoxGHtXjyH4MF8J927pA9L58yEJgEGNmrY",
  "key29": "5XFE5xDvUsahVaTPxCeFrGfyVki8uk8uMcTVmo36t6Cveak36EUr82pCHsz7W7FXpiuAQvtuJ1pEb9gQw2v9oi82",
  "key30": "3qmYq8i5p7HzWVPt5JKW6wK5f3mjy4NY1YmMv2yZtQ3yuZx2F2o81WBYcgDMKcpRcivUFQ5PRUSXvvfUtUJRcyv3",
  "key31": "3j9nk5ebNhcZFcrB13e5c8sR8MYFYYzXnvDWpQYN9ZncEoxKj1n5LVMWYiTDEKhQBZ3hhSnhFdQbvkVXo4CKoM8A",
  "key32": "3SWE42KebvCvy2vfGaJSJp9WJAs63kTQ1392YEzKHYYVjcAEyRWuxgZZRUjrHbzku7RQwZbDpmWuizUNSKd53y7X",
  "key33": "2dodiR43dtRnET3WdjVvVaRNgeyFpVDmjXRn6eYheBodUtxxEZsP3WUaDZ6mB5cXH3rjm5tKYywpW5WqdykgkuVL",
  "key34": "3D1KTEmditVLgs9wBX8MRfj7ZisX5MHcMrx5HfAR6XUdW9KGQuDiiv13c81WN4XUgXo6JZPwnFHhCqHatR1XdRE8",
  "key35": "4drkf5t8v8vyh5S5rSibsHrSW1hUB8ttvNFVsGMRR5UyJaG97XDTPur9togizqKU7zwhWqJQA3qA1MwpCVtxo6ZS",
  "key36": "5vumCxyQaW8fF3VcmDU6D6WBVdVNkAHYoEZcdJzhU7rhRYtxVN6X2Gr9HWanHmap5jbTFn5SvxGsmdUR6Srbh3xP",
  "key37": "2Rjy7vaDVcbKe1QNeee6DabrqLFgBq8jr6YtcGyFa8WkN8ABdmp7wkdtQdN3Sobg7FFN6qVsnBkfQkei1zKsvsu1",
  "key38": "5dveQET9uzd3G5CihsP8keaVihcwqHhrx52ygu4yYzAvfQtiPtSaB1wQGMgJgjh56gqVRh4nAWmxLT8waJjPQpAp",
  "key39": "f7ycMgM1pwzBKjnBfzp5TxhRx4hcKAutrVoxMx97zhPom1ChPLBxwu8nYMvA9oZukKsuGNrhYdo7mmtkJDSio9D",
  "key40": "63EubkJqNqFb6XmHmtNV9tV34u35ppbLMW4VAbgEj9w3LTJap9KajpmHXLccuo6yU6mUpNoRFx1hi6DqV3Uwy2YV",
  "key41": "aCK3s49zLXoetguNZS21e3dnG6YfHGiW5zVhBwfs7mEsnF1ePGLx7oYvmB8mfKsFMb3696qN7KUvrHCnT2eyKHa",
  "key42": "gdqTc6Lp1JFAix3VCoCwUvAcoGVAd9XVp9Dyd5dfii5UPhoHUsH5GbxwjERTPdm9ub1ggG5Wz1amvNB3W8LHoz9"
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
