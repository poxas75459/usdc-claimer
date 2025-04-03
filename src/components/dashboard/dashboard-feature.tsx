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
    "2zTq2kAtXWnRQG14MG6uBk5nqABZNfsPUhKfwNtnknoCEWHA2rFM916fkfqs4Yhg5y8cMv2fVBEigHSvNpncAgdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w4MYC39RA6zkeBq5sVS6dQGd9qxuHqFrGJEuCJzRxZcw9eHbfZRartLoCWbAww5WoNxedeAkQw4tEEpLBwQ7z9f",
  "key1": "39GZ7E3F6LiZbLLnG6Y6oDGQV7o116Mv4bo4HqNRcTrN4g6mNZ41WGURRVeJDSgvEn54mjdPPyehZxrtdNzFzg7i",
  "key2": "3tSB8jzEfKaCDiKNAGHHsFijPhYuGYJa16ne2XZFDm6uFVcNZiCDRJ7fu6kL2F5oufvJUT586p6JdFE8SCAiZCfr",
  "key3": "2Ww6F4Wo8YCG9NmAvG8sWW7MNF4dyqWNGMw2N1zbrXX52YtJbshFvj2YtGThUkKDehoGMsd3iKQYPX4duEkKLm55",
  "key4": "4uxZzg66yTu5iUYRaVygv4dMBmB2YPfeLT4HzZ5FFuYW8CfyciZn9gCWQqWB6UwwhAFDJLxXw8PmkUecFK2FeeSr",
  "key5": "38gD4f9LCB9pE8gPLQVFNGZts7JL1h2954TD6t1dG3gmSRbn8D6gfvawMLyBBP98T9sxGxsibGpg8GkGEr9T2U2i",
  "key6": "3kQ7fCsQdr3Sf1jVWz4hpdgWuAPYofWUhn3L85hd4pVpX1cdXXSErDw2p8pNVKsnsNBYvzBTUkCMFdrQAgpaUhdv",
  "key7": "PjFkWPDmj8WDF2GorN95zJoDUyvWoPumqAtfv6fgLz6bUaasyVVxxjMgDdFLTYQ95MDucQNHTw2AY4A2spa6PBs",
  "key8": "2jtpNsqwcy2VFMFnTPWoArWpYGzccVK8Q2ef7hPSiEkxkC7naHYD8MaHqbhWf7y5iUAb6H3ipzwU1ekpJi2ng8Ky",
  "key9": "53P88fdt4FUjzkFZpwEEYNV4kVALs7KAY7oZb7q3SfuGmJEj3AFZegkC6J3uuy1yWaTyBD8WzftWBK37adbBKGyH",
  "key10": "345w8TSDepB1pzPDdqqPjxrd1eRAgkGzF8viBvH2d7ZFUsf83jozYPJKRg3QfNA6PTtnBdn4BMyecz176zQarUKZ",
  "key11": "4jQhPniBE7hU7PYBQ1qTLtCn5b6Pz5Q5KiB9x4zrsV4zMXsPkPGwrX5auLwuDaj2y56tKyoLRhq6PBXKRedqJyir",
  "key12": "49qYsH9nUnqGeNjTUBoM1ghsCgcdr6Bk6pzVNRXQ6a2EuDcZk2KRANaSdYy9f3ZUnotSBaPxcuJvPpfnWXvZPB8t",
  "key13": "GU7smgzzV7uvH6YjYTbJZLoPdkwZ9M1MPDko5p8VL2uEZ9Mvrd2mimzDLJKocQZdTQQEFSc2oBsPc1gi3hDifyx",
  "key14": "59H74UAS3m9nsJtc5XmUiW6qhn8HKAmbRFjoPPkiSQzEK3fSCtaD78mPDrh4RuQgaaBTSVWFPzXB7taKvvRfyApA",
  "key15": "372EJezVYSsMeZwMcXSxp5ZDkBRm9QKCJkcT768bTBMCpwQxCPWQ7fny2Mu7AkDe2nsVt8Hgmr6a17roUQJJK1XR",
  "key16": "5CCKqUnurchmHsx9YdqkHzc1LyhBX7sueXb93Sf5GHyYLe58WLrZNVNp2Ec9bQsDNu3PUVBX24eS88f97KCFKsRd",
  "key17": "4mz48F8Q1Zus47TouCRvnbjxKWGAvETVgRQShr2SkgNfUXk8Azeoaw2j73Urb4EkPSP95yYaSYqQps9mutmS9jT8",
  "key18": "5LEbo2V7WntJDxJpMEXhzBW4NCGn3E4JXzHf2X6ci8yjU9PsgzMTYeez9NC8YpHWmjWBLyfUPYPgMBoGwPxS1K6c",
  "key19": "5ZPeaeABfaGXf9Azzm6zrDaSwLJtRFBpTeCv4nFJBcgSnnkMNsAQqRpzx5SUSkD8sAWV5iEYeaT1PVkKtjngSFo",
  "key20": "Cw3xFvFxJFLpJVBwkkwL5mf27B7wandakqPcHiCNDU5s2fATophsHZPdt4xWL7qfPLzmgRKwdSrBMKzRMmypSm7",
  "key21": "4Mkoor7LqCVNVNfiUk2x7Wh8raoNQ46JHXvUzbQ9nknGFazZDQ8e577gSb5NromrvYy1AkkRdC7e9mN4AdSiDn5H",
  "key22": "oCq3wSczt7j8BqgtYfZDbPJrVvFun6DmWUvJtELziAeeMj3wkUm8ziAbELNV8hzQVoT7z2MiiSYJdofRwLZcpGc",
  "key23": "392UPhHKJLE57LW6Zp4YaXJGgv3S3cpYqVDYj3X5YSj95sfAFkZyxosfYgSbySXssy5fxSp1TW5RLMR9cQxwcLtX",
  "key24": "2ukAuhLoTe9cHauJxSqPngAL9RiSYTimWunmksFPS7StwTgM1hJ7ZMUbMEsADV924TarbCdViCEKuUvYGbZ9LZnK",
  "key25": "2xnyE9Fur1c8jzQc1NMSt6r87vs5GDapjSKra27MiNMs5VFxBDj3K6qt3n1v6YnJu7K1kEYiCmnTv1iAf7LnbVUh"
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
