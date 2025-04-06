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
    "2PVXm61Wsa2PEE29rhYgnae5Dgoyu4neq8KsTFHdPJN59at7sK2w1v2UcrLsBL14AkdV8EtQvJx91486fm2qp1t8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BFj8KDCg41YaRH5epnxTLvzdECMWhSM6fUyi39v2eoNc8pc2ZRKdBjjhMyCPQ7a7hVwDAx2Yr4kDihK5fy2avYG",
  "key1": "2sewJHnczJMNmuhhzEwGYNUVy22wNbbjBdofoiWNK4CpUdoLZYLA5JZ9qcbyejwnZo87hCfqq78hMPrDQuFo7Pa4",
  "key2": "5BEy6BUm21VXEyjfd1nB9d9GKHzegnpqbiEUfe5LrvVeAjSG2FB9fJ5KETmYtqziiBZSvghK6JDpc468MKHtKznU",
  "key3": "4LAYikAMHsLFJfVnQJYSSQT2TRyX4NUs4h8feJargBTquRmMDs8PxEiFELG6FDhT14Gibyt7uj4G5SbbjVYtHfF1",
  "key4": "5w2b2CASxTCvE1NcNGuEg3YyxjXLQG9fXko7vTz9D7dGhWKED7jrjcqHQH9QPea5RFKFZWCWPw3tMNGtemgSMNKP",
  "key5": "3zJDY4E4rb15L7rvNVETHgS5at8GeVPNZgQFjf5GzSJKAVGNLfnMKYMvnot146diTbKV7vYoqfuuFRd7E5Lr9VTk",
  "key6": "3mYpsuUN5UyRjTrBDUQZRDJbFkFPhwFrPt3nCwf8qiimeu3qPrKXLnqrc8rcJz7raD7uL7rAQ6kSZ1WJ7fRd8h5G",
  "key7": "3mjEYMPZiah1ZvKjJmfzmSfuVnLmaxGQcRWevSruJxpVHPUDe648iYXruwaxgSFsHm8We8vnX2wsDdF7WGgXHudR",
  "key8": "3mz2ts5i8VnAH6yTS4DvG5Cr1ER3TADorvgNuaHxnHVPwL9y8xaygu1GpvH9FZrDpcFoHXzSMsvdis8ZLegbn6Mm",
  "key9": "5Ls53tUdY1zxZwV3zzyfAZRWV6cx5nt7yCL7undj5k32PBwhiUrdM4tn9sryFFFy5iygJnT6WiTqQ1iuyD96Lza",
  "key10": "5fc3kKe4RanTPLmdvtFgEbM3JNu1kxEQB2qdzadBkdBHsRykgvJkr9BbRK1ww76dca5gz5dCdHzQQKHxsfuHJqwc",
  "key11": "3oqhuQgb6BA9JQ83fqwmFu1VmbFfncArE1SLT2KBRVe2vTkmjtyKdikYYJpKxFHKwqXpeaEpGzeAPzrBm2QoyfH1",
  "key12": "3D55mAGCsH6iBn2sessdfGHM5idoNDQPX6kNmDHtuqcZ3T62di8qHsqsatMoeFPQb71FFdKjFdSYRLb1fjU34aFz",
  "key13": "3rrT1juNriNnL5qbtCQL1NW9GCyPFWt9Fvt4dGZnx6zNe7SW4ayW4UCJNwX5xoprh4Lf95b8gjo3vdBnMzinTsiV",
  "key14": "JougLR4ZPn5La6w3VPUTkexcKvnmNW6fsP3A4ws9sxMPuSoxakyAYjQSPmgF1JDzw8wXTPESDFb2dZCQFwQdAeo",
  "key15": "34hJkUuyLvaK4F4JywLhYv5WPPXyp3u9y8vXaonWtkJfuhSdzSRqSk622c2u8pWiAerWNRn4hqkcseFwoZ2WPpwX",
  "key16": "3Xn84ALukFZibGqWhhp2L7PGZKuunwri1iGa1CUPcfYdt68GYUiMqDW9nqaBEMPyxVmxQJNRNapLpohKswfsp4uP",
  "key17": "23j1vb4YJ1zRZi9jih9Da3NNKmeMTCrTRKBuJ8ypTLJf6zAp8wSsdcjqQdeiHDvbmEQC9urWmfQ3GMZH4waEaCMS",
  "key18": "4TFCSd5Czm9YFUVtGPbVNDxb9Cc6Tjs37FemLt4KGmKq1Xuwgd4UJXuXN8DiMN1TRQG3H5KtKfNJ8SjnS1ptHg4H",
  "key19": "5gZRynS53UfH5NvkLNMfFSGGtXqUKoM5woV81KCoVt1fFsrLXySCWfcuVzd9uuTcos94VYP7UkFvwS2YEE9mx2Rv",
  "key20": "5YkTQ8RATbydGTCV8Uwd9JF5fbARvoDBPuNnUGq7yJu8DNiAMg4DvxikKKDTRdWVK7Y3G5yY4L2maZLz8rW7wbWJ",
  "key21": "2FnRxAR5XUrXfLnviLbHsdxa6w5pggYBct6fK38BH6k9WXon2wfhUTqg9ZMosFajyE4kxP1WNUuU3uhyBjXN5KfV",
  "key22": "gCBzyTcDVC9XK6LfDnarxshv5RERfPTb52EdFhiPbkfJVzNiX2k6hnicnfcwbBciHsMfVqXJA3jm2MSSjLjtWjC",
  "key23": "62yfnhRYjbjsPLERvGSkK88EwBLz3ATNkQSD8tMJXjU8W7WBzdqswJB7R2yhVxhNpAYmrBXmdq6wMk8U3Znbazh2",
  "key24": "4oRAhfyvh2Rd4EbNf9EH8zY1KZB9926Q1QQYnvh1crQzr1vnx3LuwQoZDqVoCYX4B1oQqfDg2JD53DDHx6vx8BTa",
  "key25": "3U4xiiouTsqTnD8zi9wXGJkTiv34FGEU35iDyaxwmdvh9UyBSVJGzgfnpErV17H6eBL28VSbbXj6a87GiKFabAnW",
  "key26": "51gvuboYrCBP4oEbfkq5Fthe5E5pFZrCMCMzR7VPTmwJqgAyHv1ExHNEkLTAsdRWXZ3pAJVo3FKA7kMAVT9iMVbi"
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
