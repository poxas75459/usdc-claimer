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
    "5BB4XWx8mTsDPShtnnkLZvCKp7EG7sQeHCetu5VV47qU3QyvPr3XqTC6Pq6NMdFL2qHDKBbSrVfU9o2UCUZUhFxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "73gPLg4ABv4bLM5NjSQi96TWNpqh4xmK6vdb1wjLqTn6Djt1gEq2PvpaJJxESRYLMg9u4hFfB5p9YwMf4sckN5u",
  "key1": "EtbUYNtMnGksEqXpu7mSVKeYUFYtH6XKh8o6Qbr28W7dewvawKKHWiveTz79G9sY3LEf13iFHcnTFhE1ncG8JcW",
  "key2": "2cTWooCbY2pQJRkYV1yAxyJDCeV2kNByRwrD8uiHCEML2VEFRiR9akqwtZKx1T7xVFFiXKpvHUYhrH6aqcYiBSd8",
  "key3": "3baJLNaqhWSLhngK8eBowPVdpKoWDmkWaFfgghGsuHzUF6keAs34hDKpnFVq6FWi2Dj5RNfRLGxvq5VA6vF1ebaJ",
  "key4": "5e38fJnPNafERWFQiWjaRkv64PF2DYauUUpeRzTx6BZKwJ3uacty9KgvHNosXTTtk4bfLTvAx7M6PQGgDPtWgXtk",
  "key5": "2teNbEEBKipvvPhPTQ7Tc8FhmK8iD33eQ9GLkGPKuTMasrNLzt2SzSk2qPcvpejGF2smrSu6FPgA62ktnk7uvZdr",
  "key6": "5hHMWvB7hZb5tyZBXhTuuCfAwZE7usQwLwhCsj3gKThMGudSHLipENWAzUyrYaisXXCfbt8ycb3H5ptYaZWUByHg",
  "key7": "5oRLV8hZQSAt8h6GYPy951A661pn5Ve251TzzGJ4KTTPdQ1PGwrvSchCCS9Jwymrg2PqgZoTUkcHERKbwZdCvXtW",
  "key8": "5qpAMZ7EdTucXbthgqs88zomRnHZ9NixQ38VrxWiUTt3zjPAdmXVeq1tnomvz3V1nSsqANWbEBJjGWVpQtEZ6SwJ",
  "key9": "4V51i4BqPmvWxAGsSbtMZNmDRBQLFAdqcCrp5xxhUfQhKEEbV4sg4NhWL9GVZx5QHb9yEVqoHrCnziqtbpZWgsWh",
  "key10": "Bhzvdh9GQbBsT5ZzV999kVjKw4vR7b13nmfURMrE4QdChcPZ7978i4myWDa3Ks3EbLCVTnZmVCiyWcmtibxH1nY",
  "key11": "4u212LxYD7Za4zYipn16rgf16zqmijEz3piwvGK5SAFD2mzf6RGFVwG7jMZa5y56pMheE4ZD99mbpRiANGnqUBvq",
  "key12": "54DgsfcSogdffniq65inUTKwXacfThgzaENfgoNT3XjAmiaYFt6wc1pL4aMKPegiPwKdhRXHmqd3tYGdEMFaHUTD",
  "key13": "5sTFukw37BcD9YanErgCjA2Psj4zLziR6srbXSx9mpaSr8W6Yb8bFMznvZ2iGg55NFiaAhemwt5dA1pn9xrkQNqb",
  "key14": "4uYvvpWKyAgk6KYwCrdXYNcYsszo1X7fJ9QJhEB6Atp8FqWZtz2TW5SujMeG1mbTH8ZSy5Yhdc3K3M8GoDzynqfv",
  "key15": "2PxEvj1ja7BY8QuvSustHzALjEUXeeSwZpFNahkPwkjVzyhSN1ozfhZgu7aRfCQwvCrQx8YnEkyutvW3wGE4DqiK",
  "key16": "64ksdanhsRfxFeY94r6trahry6HMfLEFzAFztDru4FiZjdAw45sd1FTd72s2Ava8NH4U32yXDpx6kCY3W4EEcRyM",
  "key17": "4QWYQHAALhXSRiEtD8bkEVWewR9S9x8ZbK479aZP6fr9iQksCYbuqyX3UK9Bea7szWEPsqzxFrXoLXaN9Bd3GSFm",
  "key18": "5zXwnXnJrFrcZE8ojFQo5M3zQgZaGyheTjLGu76JXBVksoqa1AAzcj5qJ8aS4uGFfn4TUSx8t8y4T9Fboj372cRw",
  "key19": "5amxKsWMYnRXuJyJ7JD27K3Hc8Jvo43fVHHE86qTSHc6wBB2d29nfSKf8FiwEjxzVnxtnapmHgNKo2P6ySTcChmD",
  "key20": "Buzjzhv1HShJBX2LdXqY6U8zRJwjE6pwzopNp6Q2kmtGgYH3LMFA3AbvvjT8rbU29pNtXf1f439ReiAz4Wfnxzw",
  "key21": "4wg92HTWg5RLVfuPQ2xmGNSxFs5xFdGrx2CfspEgUWuynnLxF6XynzmojWZzsCCLRNiUMpey9fLFssPf4NGiC52L",
  "key22": "oqnat1izftYAf7DNWTFYsxD8ceTzDGuohJnqxBTvTCnevdf82w9d1FvzMoNqk7uUisCrrJR89aKrhvneZ39VmKi",
  "key23": "6YtZCvDERzntk43pyimL7LoWBy3aZzMDaRx6HQRySwb1GHQJaksSW1NzK8pBrtyyHzLQAYHRBEjxZbccAi5K8Hv",
  "key24": "YhkVegcTdP5EC3KAudq3xEhNU8mwmU2TcfG2TEvdAtC8h94SF9N2ACbzxwRA5PCGCDNk6XJzP7b42ECfFDLAFXp",
  "key25": "Egu7ppTZTMmuMLCXV1uwsPLNUbmhCAG8ah8EbW9RQ6avrF7qxixTULLkvG8JMd3RudXUpBHvrgLsK99Qbv9sd7j",
  "key26": "UT7us2U5H7oSxixYuo8CBrrsH9kXgVnDjQPc7R8N1kVPDgEei8kXa7Wh1SoPCAtXReejNJ6FMHWsfYKgb8u7kKH",
  "key27": "5q8UkcAG5f1xUUTTVAmTmSg4nC75U8YJ28v55BA8auNktXaCuvPcqQEsTBvJKng3bMq6h3a2CquTTdY8p8mMTagJ"
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
