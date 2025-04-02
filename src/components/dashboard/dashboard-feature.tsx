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
    "Zjb56Z62BkD3JwYp3mLCY5tKiFKQLyKVioZvUotZieyq3Jrg6kakqX5TYVv97mTie8iwf1Bti98Q2QB949yD27p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SAAGUKp28cvBH9HWUM9bzQoSPuCi9jg5KfwWdLTWRFRj7BK65n14qhJUQhLJKvasWJaEjjYUFp9SBXeykZdA5Ba",
  "key1": "4xvm8eHVRmfmxm96uQ5LXJWcu4LDFYrVjVqbPciTkpRCY3EG3qqEgDZnZAXcuMpN6DTY6NsUERbDEzQ6NrNvByVd",
  "key2": "3SjUk5fJetd2gsHvrG8syU3oTUzPweirGZSG7pK5WqzFy32A9mCNqYaYZirocCcEZpLgFmCWYcuwkbZ6jRxvHFPG",
  "key3": "3MUwutrnMjAgZC6PKTQnbHgMxmSTWY8ZTrgDtosPhdCT8kaeC6fPaqex7vhA9H9XTuMy8STqVQ2VXmkNAKh3MGmw",
  "key4": "4JdEbqM9iP8pvn5zs48Q2PtWRSnpr6kKwCDqrN84wohFRC6Lv3PXbaEoaBjUdguqu6tGqqieyiNUrCnSB66W1sWf",
  "key5": "66vPCpqM5Rrk87CiHgXHKfbyK5Azw9yxGvcG4FqzdQdQtt2ZSEqv3ryj64nTDWspVf9aWJjjNWJnukKGqqJvsoeH",
  "key6": "444WHXEtmUEYKejttnCmstw2s5ypFgDLwqd7F7FUyETrUjT1o31jUhbcihQ4VTTvEYbjYnnwxgeKBCbYKSQSLMf8",
  "key7": "3sS3icEi7XmufRyExLoVUqKniP1DmRfAktK1bhsEZbYC5nsSpcn2NVt5RwDYrLHwbddgxQmivZ4ya4PMkjZ6JvuQ",
  "key8": "65E8LDqbnH3vmPy4Cfu4PfqYo2SQ8LUiCUwZoBRHhTxyDdSHcortfQDZM3hnaPQRkBa59sMdPhaPnY46X58hwbkV",
  "key9": "4QkWS5GgM78xHQi5Yp3Dx8bohcvxUzbAdZHVtV3bRgVpkNmVxCCzZw2p41Xoavz26E1UdDf6M9z89NdWNq3VzfvR",
  "key10": "2xBk9ib4UvwSSMjjNPdydbmgfTjdkYRuiLE4tMG4xXc281MGV8ys5FY6NskdB81AmVWkCxsrhdZDa2Ct8bDRkZWE",
  "key11": "twteYYdivbQe9Z9FsRbrf6kmDQEguiwsiMSUMPvFWbdkj1JSWgwLSz1SqvxiBVwsqgP2j6cXCERFpwNbWBamPCX",
  "key12": "MRiRagTyChHPjHNF39xSChj45ha75cCxYZePbQX2eDEWRMHRrHCa4AA7v24NwgWSWyVnRyEu7LM1vUpxmsJcpf7",
  "key13": "4FkTANDrwJtG5VGBQmhDshXLn2BkuBonqCwVvYNCnJUbie5vwcpYGKiW2DzK65b7RbudL4qitsYxCP4Pc6cpAoEX",
  "key14": "hYvWkJauvyy93XB2CrJyBhwsMRFurxqwn2LQDD3byEJHBJ1Xp5fKFTQ3DFrVxzVgsjkZCj1FBuCjruxivvuCNd9",
  "key15": "2oqSsV6FPjWGcJ8kAby4VUFgK87xHVoYEHXH9gQEVPsrkQxEofcBuGypzDaW3JvfXHkV4xgSXHTrTgoof2SWBTaq",
  "key16": "UnNnacWwQFvNcDTDK1emTkNiKUeuQBSNNSBeNGusMxVj8GC91DtB6RzkjmL1pjGfMWsBu3Yp7m3sWDGAkmUSnKq",
  "key17": "2qQB37GxNUkeab92sZ6kW6UBZbnSEAdPEozbonZKhK6CWTSX93r9ccCJtcLTq9RGiK4AdutxePCQzUaCF55XuBYp",
  "key18": "5THurt7E7ykcJJFEvyGxefu9K7fq37BTbiJcQV74e61gvK4CUEHhWszLor3EacbNieYYuEm9hAzBjzuWzJNKh49n",
  "key19": "22T2U3e2emFVNuvArRZsv5J56UqRA98T4LoS9xW1AuP6VntNC3wfqgJgoi8E4Drw7Mq2ohVr2YHgojQ5wk8qQi56",
  "key20": "5HJpCNMKM6xDNd4b5FKo5YpXkyNQdA1KwRufbNmtvT7LRyQJdqytCiD8M86kqFkGdXDtQEZtnhHudjZ1KCtsPujz",
  "key21": "4hsCRZTewy13ARyhsfzUny9uqxmbRVFdvN1NZMHqVUzCotyZB5vgQWE8yBj1GjKCSYRUd7sEAfn2ngwVZwi4JMqv",
  "key22": "5sugfz5rZKjodVrinkswPjsHSApBYfWQNaf41ahrpNP2C21FCYVsJPscCBYDGhnWh15RffBuzoEhUv2sYb3p6mFE",
  "key23": "3nkQDSv1g5wcTDohAedpXyRP5bA4Dhr9e3QwnJ9MPjbGktGRWbjL1caLxCCjf8PUHsVbmiKZjo9cLJpVZm1QkM6Y",
  "key24": "4cfbH6j9h6sXZwFPY77CHZWcj7RdYtvSqJb2bS75h7FhotHFVhkSooo6RVJGwnWX9Jfw4DhSnbUBkAui8njS2tte"
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
