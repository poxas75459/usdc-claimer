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
    "BHQxtEUNotEh1325fNaFZqcsQNh9baaC98MHL283kkeVrwwUt5PeP3fp1aS9NPzVwZEfZns3jx199CwLihKAk3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eDLRDUvqfYoeXqGPBWGpHj2BnQVG9D1W8TZD2AGbV29TCqFJ5aoBtnjghrxUY2qHEAfWbhydvor43eKywbpRRfQ",
  "key1": "4Rh8A5dY4s6L6suyxSu2DywYuLGCyhbUHxd6qee1BDWZGTjxZ54Cmsk2KxfXXQrFAAWqQGf3w2hdusaUTejivdnG",
  "key2": "5ypBpUAXjJDceYi6xiM8oTaQq8f9MivNSSSJDZz34MMmeZPm5YNXiJ3jn1vYGuNY1Dedc3U92zTY4J4V6fikeKQJ",
  "key3": "4tFCUpGMKjNcMAh8yEQpiKD9YvN7w84b9usKjEFu9eAh4uJGHrY9gWNgTagF9kwQmL1tRDXavKHHxmfaz6ifhR2D",
  "key4": "TKAPZ5mBY6c9JN46SqCBeAPK8qeyNLrjpzYN8WPgFkkqHmSPfVDkMEPoHrDbMhzXsDbNkUBAJNtEf6fEuDapPFH",
  "key5": "5MGkREBjAGrkRPdc84PPVqhjCHf9R6MdbkoHLTFXvncqA3vYgycMackZcvECTWwGHJJ3toJzuya77mNFnj6dmE86",
  "key6": "Y423bY9kVvMMT77D6bKpP6yCyQf9xKDJkwXgTSZRuP6iVCFsQgU7Xp3PVVEXaG8TRMMtEhbMNSxTe68Gt7EMY67",
  "key7": "DgyEgDK7EmxATVSmzvGvRoNuFdxC2VkCnEPJCXxpGufJpC1tjQbGZ9reR7LEnjqa1VR1JiDt1952mDZxEdhkcwP",
  "key8": "5d1FTiTEgj916FPcEXL4tzbFSwVH5BFFi7NwFdXHbsM6PGRsqPtb3BL8drt3wmrYBZPborCkSFiNjkwmgpsZbnwy",
  "key9": "2Jb3fZR6mVyii9zVA8Jcv1ZSFvfiZ65wSwrk6tAeKrK7yMFmNiEd6hLagRmtthbbCS99L2aPSdwtWGrXRj1dG4gC",
  "key10": "5crRE3UAojQkazDfjqixw9wvV7CU4U5PHgveNYnGfE2g1YuysrBeoNbRNxaXCFRgtY5B6pU14Jn3hNoVMUETiCRh",
  "key11": "3fkMuSYrYeqpWgAiDo3xihwZbMDndAurJivAQfETLkKyqL1EVdmfqJmeeT1z8NRRV136hkSrhSUF3mLxyhTE4PJC",
  "key12": "2Ezpe2dQRVpSEtqiXqBkHFnyP1LEE6PeuJHik5BxifPQ9zaJh1sXPLHJ5iMyLmiu5wAAvApw3fb55Daivy7wJp7Y",
  "key13": "DxGBsESLaMi9hhJvQ44WhevxFF7Y1jVvi1bEu817GrWFeKy3hpAeAE3yLzNbJwxHhciZeccxCe1zL7fYympa4k1",
  "key14": "RLyZ3nCS56oKxueMnZCvD7srNrTVRLJhzNgotd4n6ojmXW4QtErzEMtKKUtdDBU3frBL8sn55wtM6bDC26KD9w5",
  "key15": "aZvrZMrdM4Tj9NCP8KoFTYYLfcfSANaesRrJBcRfRtLFDvYVKph8UZC9ZoeqWpNjiJrnJoPCYco91MLQ8kkVcvX",
  "key16": "4QG8nRmnuHKyC4AAkzdjeBtG9VmtX6ZKRZrKPyPLNAchkUQPHPufDMsF9Sz8gj4Vkh8CTce8aniSWcFxw5ZoKkH7",
  "key17": "4bZyQwmqP7Xb5cHTDJYDVwjRqj7p6wKWhcSxLxsAoDuCU5LEmgW2C1n23nWUr5i1gXZrkSQsdFhzPxymy62Xb5fa",
  "key18": "3cFHc3FSxAdCGsSmd6EKkkhS8DmTj2uLrgbGFYmrwjQwyxnF38juXPiGkj57rHJUFeUWMZ8fMBmcxb8X5dZtpanW",
  "key19": "4b4fnHGBfDKNkBBpY1AcPQXtt8R4PobTk5dKfiZZVXB2rxRAoM8KG3gWDL8US1SLazTpHCNSWercaN3eacQ9XKwK",
  "key20": "3BfGXSLzT4frBMCnHipkL8jtKk83Aqse2N3psdc3evMeXDeLnMH4oEKUwSeoQcEoREFhRRexbaDfTapKX8LCgxG7",
  "key21": "2fqrBskcPExT7wxg94PBJ1jLhGnmifZiq7sxPxyDU1hPnH1kfGGhE2ux9FMEuf8hGGLHmVscWzstqDVLZ2NWyJZz",
  "key22": "3tkiwRQtNxCTQFumAmZQrDyRfaDtDk8z5jSfx1BFgLoc6dLHf1183rezC9Q41iVxLEasfHB5sMtTTztg9nE9312D",
  "key23": "4G8bfhC8UwJx4JgpBiwcpBR2EhrngredAe7C1Nhp8kPUpG4Ub2qy4ZT93h4CjTExXMFXmVfHb6nmwUWLzRByDDnR",
  "key24": "2d4z4KKAUaSoL4Jrxk3aipTyUSAPE5ayXCFyXRatCzKRywTe3ZRo6W3E1bmE3i7oD6eFKP4ffZFKSw3opimMiUxi",
  "key25": "122jKW2JPdk2bJnumcrg2cTigTJhLJbqWMfSnhT9GHkQKBscswfQ8HTc1CJowaym6xjGAte9uAzZXjRrYjyQ4a11",
  "key26": "4Sw2Bpjrny7UK31biNRjXeV5UqfCt3qDNuAQ35Vr2atWWT9AaXGqYbLkwM31BA2aNwZ154Li1e536FZHxmNz571K",
  "key27": "2NtSLhpvZ1wpj5NJhJyD5DnPNyfM7p3kyGt9Utrkdejr1bYZkEDj5qiPhxP8MPZScgPZfJ4ZLxxZXLCum1eA6E8z",
  "key28": "4V9t1xpFsQjQpAixvS554q8apcwDDePuXELYYBrJMbH9SvqeiNnKUvk1fQYuGDgq8zKVqxrdhcZYmkBn3EwwhdfR"
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
