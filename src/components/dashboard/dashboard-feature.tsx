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
    "4PJHbLoRKj5Bv8GVtAKhBJkt4P8Mn77bRntaGWSDDLBVw5cB2UrYhKcq4kTxskwALALjRqRDAgELuUWN5t6AJoP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qam4gzCiez8MwntTBi9buNLg2tBLJSitW5r86pA8jRmoWFzXVVeKUAXk3Zsbx3hwgihoGqX3bxNFdFQifUpepqs",
  "key1": "4QKZsgTH8zTDKxmXgQbkaPQXCdTsRgSXBGbxBmAVs89Y9su5Uehfz3CsBQkexFPa7i7whWSDf6BT4VCJkjDyaqzt",
  "key2": "5iyuidYjDV8xpzMpdHvBk9on1Mg3sSUgJCDvEUxTgTbqwB4JKVRRZWkCc8ScwBn3Uuzxnns5YAnx5UJkFHUhNCev",
  "key3": "4NNipqNcz7CqDJMXW3c6giY3NyFEtCeY3kBdu31HLsZjWXhsanLRpL1LCdfc6jFq3pCbJs7kxfmDgKftkttmWidx",
  "key4": "NRYrJFQVJX3MnqJSm1KKsJmXSfSYnGW46mvqey1sHth2hnPmZcUD7etJoGy3Rus5ZMprLiVLUiq7nszktUwc3Dg",
  "key5": "3ivqb6AXEEkySaLxkr2UywS5P5FJpSV3QuDs7LxoR63NAUJai67UWJ9TeCmoescEqee1qww9cvVNdjdWPio7eemT",
  "key6": "3gLArbGsr7hYEBy8tMKtVQFCjkXJ6SRBkKYJGJRXWQcmpVs7uJGMgAo6SaTpM9refz1GZnEUGsUJ1oWLbpWStkCX",
  "key7": "3BnyKR4TLcaCSqaAjkhdvJMY4u4sfvRMdkRiqWFdFUcWoMcgA4rYvj4JofwrswoGbtX3BjsKXucFDfrtJzqdiSys",
  "key8": "kdNWqmDgXKayMCqxKursnEtSpyfpdjvL1ZYArrSVUZSZdgguK8MFfdGgC2ST8ah4y2qWEUTPGxaffTvMnw52Egx",
  "key9": "2d6ngruZyMUby3FACFTb25bpayUV5UoHmqU14movNjYdhikyQVDWa4ChmDh2Vb3pUDoo6NxBE1ccmLikpTWW1iAw",
  "key10": "X8DJnPbRwRw2k49FEWtv6kK1JbrcTqqBTnewymoCx814VwMgmjRw4tmoeMUoB2eACyMPoGvkdeEnqd5pJSpf2JE",
  "key11": "66G7TpLkCs9xwzDVmhvxGegUFU8CeE9cqot9txAJMbVaNt3DgGqvi4f9fhmaHKFp9CeRywVrD9EyC8R92B33bMZr",
  "key12": "3qmLZnZeyRczzpEeUT6UBB919vXjGFpaaZtVfYDZWV3HPkGTY6d12FWxTYszNLSCjJk7y2b1btNF7hyomuzFaNvz",
  "key13": "3FWniBdfGGpz4gfW8BJbLQ8pAaKBW8py46g6p2zt9tPqedp97aTNtZsgQGmFEnnSKgzZ2VHS2Nc2pb3ke8b9mnH3",
  "key14": "5dCBsmVzA49QNJX8mtBhEFvCB4n7A91cHKaxr7gDwnFF2JTZqfmuf9sdfLsNwJ9qV1W8do9b8SivXJaLCVuEUePB",
  "key15": "5f4ehSX9gUPhKhrwK45D2qN2P69L5UD5gtEfmhQetfmiQb4WPV49gLX5VVPXNeuCFSVGyjqhXpTeDEKmp575MqLT",
  "key16": "2qP6VY6tJmsfm2wBKswsv92siSwFJ8MruzqEpCmbq6gAAHSNEziM4naMEEoXc6zbqJgHiub47GzfwvRrLYbjFg2P",
  "key17": "5i6atcHbkHiUYbgUazc77SRRsSjy37Aod7mMyJ9Z11g5AuDBUG6QBuEAAcXQLV6KW5RFcbbjH8XoYUZrrraipeRL",
  "key18": "2uHgM6f9EW8JbULLmH4gXTHKWHDy4pxJY9XXBBNCbGjq1j2Ksz7ywt4HcMR7gbxuRpWTeF3A6LKUhUGedDPH51kQ",
  "key19": "63E2THsNu6Ac8FdhNRANM4mT5p4nHMzQ4Rh6kNLaFpE5B7qdxLw2XoxVvHsuo95JMBmvhY3DYCBCGNxGP6s2kVoW",
  "key20": "5uBhFx7HFXWX6jPqRUBj9fn3rkMcugr8yUrNiZ671ej25PQrfAvaXhZ3t4hZnftxUWXK2WUGvgvSZW2b46gvGVEe",
  "key21": "3KZmm6QnnTA7H9wnehmz5UDnL8LtqKMLmAdnQ8op3CNSDNbP9UXrAXt6bjfSVqFuAPCMPKMBRcZhucdd7vGuaJdc",
  "key22": "5yrPc7q7XEozxAfRKL7ni1vaWa7dgckr8QuZLuk6sjUJfivqNve4UZr3uAr7gWRsAgufsCZbp8b6k1tAMtwWbCAA",
  "key23": "3HE4YyC2TLLnmVQwAEmeBRjfrccpYcZ6TwQLFd1jPaTgJsu6cChFjntYaW7cDJexjKJi8VGgUufV9vCNRteWM36j",
  "key24": "4WQZNjUdzvX4ZKfsn4N22KNHVbKNnfhHbwaU4MB5CGhKF9AfbQgGzk3i9CRdJ6ZYtq7nPA1qHCz5rgVCCNrRNyeP",
  "key25": "4TzADxcytyMjGohatxPkdfBquQ58aLWHxsAsQ2XhRgCTF1iXz1Mk3mD5gXSJouTVdQfMb3EVRgonXGjGFq1WZmQx",
  "key26": "ne7ubyKWnct1dAn1R6JjuXfDNnTzjMR5qmcV2YE9MUXNUdkxaBqCKb3rXH3NrFeXYMhBY8yERjjmML3MoQ7K67Z"
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
