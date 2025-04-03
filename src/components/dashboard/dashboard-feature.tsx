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
    "3pk92dc9DTfdfiYF24b4gP5M8228dpugTDzPmmq179upLnwSaojvxKbxtdGS2HZPYRZzf1YEk9rXp4ftU74Loyrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h2pTzWDW8Fsvto74xNBhFtWMrzYtwoDLrmi8CtHau7spU3BEEAZuvmkxSVZXdx47e4Wf4cCqnCvHQne3LDqkvhr",
  "key1": "2TZqYBgfRJ9qBx2DHHRPnn9bv1L9Mio5H7BbrnkYu7oWkhfsGNqC2k19c4b2oqaF7bLifRaThwSkEvopz7UKYgTE",
  "key2": "4QXaxKWXYbaHGD1nufGkv2xpgu4L3hd8rzawfiXDCuRag1hZy1Exbq8n1x4rz69PuurizARuBb3nGvu366nxoDA3",
  "key3": "T9T85gLhviyzzRD86wWY5z6ALdQqpwJCgA15rUK8kSG9bfcxQZA3c2bytRC15D5fDVfs57qJb4ZG54f3H7iTBFe",
  "key4": "2SwCNqd2qWtHLzrvLs5icdRtrcEsSnjKgKnPheMzoX3RWZ1kSgfbV4j8juqPH4B82zsPu4objJyaksXiAN7ZRU7u",
  "key5": "3zZFmRYFu2ynG4JasgyYoFPWruNGaqiPNk7wcTqm5h2iXC1LKNNyABj1eGkxsSnwNtrhAfQYgCwAvGtCNkQFn6ki",
  "key6": "3kYe6PURoVgw67Y8ZXTAz7WgMS5Wybh28vDxFdXRUehsQb2hYcrxvwPp7eDzWRup9sQSKJVRvGXJidZmiEPUXpVV",
  "key7": "2F9cP9kxDxb8dG8oH2fCMVXE9Y9J6JF5dk77ABhgQ5WMDXPwHbZUuytcJ8pjv9dfA2N8GQ8awE7uQALdyfiXzCb6",
  "key8": "3DGW9PxMyTy9fnTxKzb57YqgeFD4PT7rv7BaMreKbTzG8uV49DkELhy7BRy6rBLSmnb9mPW4opBDbo5g1v1zQES3",
  "key9": "veXKuBL1vspBJrpitwgT2vp49EVBPYFN2PHU7978pW1VwVARWi1WkxGDaQoFfRwvxrAEpqNQKc29VpHxT2GKuua",
  "key10": "2HpVJSAMNhgdQKV9S5igyaFQsFiAwrxoW5Jo9mkTMDdG2SotBeiA2R8SudZ5dvTrRPaJJazy2Cj1HJPYTtc8QEWh",
  "key11": "4qRLbvrS7iGrh2WjSn4FZ7jsvnAJkCqyxcy4ALgeAwSuFX8JdeuHmosYxbHAz9sfdnqrFfbXtQgKK5NdmXQE8TsQ",
  "key12": "ALeb78dyfz98mbfHVeiNZYPnAD5syzFsHrFQMqfMuxMVCYQBkSB7ihVeRzdatqn7zHSDbnXxnoZmn8J1aC31QBd",
  "key13": "4j28zNj8FvCBysHu8xbsN5hxA6B8GgNuUheL8XWbPFoqRidz1fSsK8u8y8TtZfaZvnmJKArAoPb9kjCkkTpJ3uAY",
  "key14": "3PTuDntNBnz9WfxnCET8euXhwnkyjKCXdTU2as9jcgxyD4Y7gSpSsVnigheDKH8g3HFUwWzDXMx5nYDXsVuZUTYs",
  "key15": "t9uVMHBNgHQaeAFg1Ugc4JgvahJX69FS7cLW89GP6HnFcgb35jDVddf17hsfeRMUaTbCQqtgFp5zMNXQDYWzMxh",
  "key16": "4XKrRdAKVRRmkJvaX487aoHgSaRJGkQzJtyjMfvwpP6YRxaeq4QjdqTNwy1LExQ3LgUx8zUMBigQaQ1bW19eGKZk",
  "key17": "k46JoUoWA6s2on8WUc9dxHEMTKWQP2bs3KRUUZM6tGpsidAGmwaiyA7Bo5BcwnHoyNP8LPtmRAWQKHrYTYePqDf",
  "key18": "23vWpYnTDxkmynwWfCDDHtM9QtWjicF2tRFJ5xFLnhSS1sK5BfNHYXhxyrHha5HERcG2CMcZEKyZkiqeBfrLn1sU",
  "key19": "3huZg2A3jPunpBVdPqsoDRgUsC7AauP4yw7sdajKpadKVZzeUDXT6Sn5RwGCqnQm2TTcVtNMtovKAm5FGPKn1eDQ",
  "key20": "2PJxpT4zTBEo4peirTTtCcNmCNZTSGjrW6UQTBPrnzKUh8Pnx7z384VPQjgCdDgBnSo1dBD2NsTB5s3oJbopYSgf",
  "key21": "4DZMhbtyXsjqtsqb3jmGyzk886vG7Z2HBrtvPGPzaV141Q1sXPqBSGBK5Xj42RrgpVwh26fN6Bnm44oG311smphu",
  "key22": "59J8KmMyX1AXiFibzu1iF3jb1aVwaH9htdKUBKdqCtsqBcQC5JfccZexXWyU8vj2nW2EuYCRfDWbePEPuoqG8jmV",
  "key23": "3QLNNy2yo8KJ3KjSeKRVrMhXUuYRm2s5XXgPY3nszbALgpdgeic68YZQh4ZgsUDfTVudrQqKxmwWAauA37YmyWDf",
  "key24": "4PZqpXhWxoVyBj41kDFeUWtHoLx9nUy1k1h8yRh1JUZ4LGmqqKeC9ukUUHi3Cc4N8ChyYoX6wAtoPSrEWrg6FwzA",
  "key25": "5ipu83ZaoV3YGsT3hy25Fby61GxvdvmJJGq8Yhuf8HaiSGNkY1ATUbxGDdzrgX53jsDUF8CMkYLokjS3sTsq6E2k",
  "key26": "3PVmXkgqMhJ9iq1utqSHnrSmCy6k9MGy1i5AWZ8tbntSrWKirmcyCNFnYrba5KNXCZGgMferhmA9RfqnG6D8VX4s",
  "key27": "RYStcLaYvo1oDGfL6HMpEun5MWpKpaK2zed5s64fQUb7HKwdENHoT8ajRWJJwWVC4D8jH2SPfoU3AfKsiwtMVKR",
  "key28": "3BEvyj969JfmP66GF88SX3gUezwX8AjxhyxRxZbzENKJqSzDwqDsxYURHhiRrkxAYm2LXo2cbqheUGKFkTqQJ7iG",
  "key29": "4TKexoeHgxLhBG4o9APHfCy1uDaHgah9qqTkzvQsNTs2FVcxbzFdZCFqgb8QKDn9KxCzroDsRM5GwSrTHf6Y5p1S",
  "key30": "3HKNc3RiV7TaQs9W9kCDArDLC15PNBYdkRzaqMyTYDKN5DkGoubaLcxjoo2hBBkzVtuS3iz9mSPihpTbPRSYtLyL"
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
