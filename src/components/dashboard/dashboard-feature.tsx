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
    "8gAeJu2NQmbJpSeVpB4ehUBaDULvxKQEStanKWtVuLpzE2BzFvVCXEjWqvszPLChCQrbYjXxQKzPkQ21FSLZ7Ps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "68c9NQ1pGBUD4kXgA47NFagE9T1pSEJorJsrjWALR8SvpK5KbtsJXWkZCeNZKWqdRNaJok6u73iQM8NX3iChEmU",
  "key1": "4SbpWmcHuPoADmwiVtQaVPyp53KgtatKMvyVLuiEWj48mg2xRWdaTUXmL27ww7eiAfeUuv3FgYb8SbTLt2dmNBmm",
  "key2": "4mUDSqJVZZTzo4JYaYbjtVsaSGngPuwTuyEHAgtV4viXap4gVRGtnLaEbNJEsbZcDuN3z9bX8D7zeTM9u5fs5pT7",
  "key3": "ud49bGVz6tnnNRvyR3bA2sns1AVuvmxyRBHAjDdizkSr6dwseE2z3JpoCckc9byuRXXrJunwtygW9rC8pBGFyXu",
  "key4": "5TYKLAUxDPNX3AQAd36ndshdLi8iWWtq1ENfTuath7i5dxsndUSSSXcC1xYZjhfCib93BcgoCXJ6Lgg48cbu9KQ8",
  "key5": "62KfJQQA34LTdgQtdDVFb31asMZohn8Y9eWzCfF5T68UJqSACsHA7JVfzbzP9KkuQG2ycEeTVCc6ZGk5zspAQG3Z",
  "key6": "3tWAaumK3vYMrcRhtrMznmKB1f3J7xmSEwiQ3xjqBRCo7ept4VUrwybdPYHyMQdnPTB1T9TZitNZ35kBjrSXwoQY",
  "key7": "2ZYyheiUNmeSgBX98dEtqgbYLi2kVkoXAr9UJnMSQ6JbWSt64EMLaBqWtUQRvSwETi38kjHLXj2z9qDpjeP8QmYD",
  "key8": "2ijE3ktQpu5JyYrBtD4NtcaV6ReRPV6gJhzrvxPJdHLtop4n9KCdVudU2hPXCFHfkyP4TSMCYSvNQwbKbpkkdgav",
  "key9": "o8WKHvYDYU2TwTcVPDEmHanhKkKiwukAQvqF3NpXDHYtYcZmded859ZFaHWRD2p5JYC97bbqDnFXVTz2jSmp8G3",
  "key10": "3rgKtQNhDXPcSqrjoECPQ7WRz2oKNDF2nrpNuM2k4gUj7K8fg68tD8vfYZ95DysoC89n5soLwLYY6MYX9D57qqEi",
  "key11": "3QHxG5HoVztZbFe5wCBUpQtVwACo5iG9seJxKQy5GgCpHdWZNqqssXJerqM7PeAFPw38pcT4c6eNrjuQwJWpCNWU",
  "key12": "2yc9D1bxe8pKsRyUfp3MBCQUvyWqTD6jYp8CuGZxsFgzwWH5qmSB6sanTh2yxkyLdkLAmmNX9Q4zAudMnpr7driy",
  "key13": "4Wh9fDTaJCaYtw5hQHy5ZoMHYG4H8TDLfmBoeDmRWtsrFnk3deLeg9TiFqzkPhiioMTi5sv9ekN16YZJDSgoK27u",
  "key14": "22xJipqSByj57uJCBkPzLDLT1Mx3JwP7WFBHzd7B2hLUwVwNBugU7TdBqwZ3SqKvZjUuvVo1G1BiV2kKdApVemyd",
  "key15": "4ukjzBjJtpHAse7kWmTXDeL3SR9CdHYufbNH9kpBVuGFWYWqj3SDpVmZ85qKjv9W8UTLFazBMeoWzvWqfJynW7P9",
  "key16": "2QTZRVmL3kwDKEnU3bmBmKKWfHty1r3ZYsSb1JvHghH6aUMzUH5j3YqZV1ZhvT8De4ptnBB9NTnUo5ctZpuMhwdy",
  "key17": "3yF5HpwXL1aqQiZ5LRKLbcRqNEjtkYVFmQDZ38ejrYTvbNnx4gWpc8mp4TRUVSHGMJm1m1Lhdv7eMdtqqXUttjNb",
  "key18": "3wT7aVcriXGd9gf7NMJiromoWWUgpx969bQRZUd3gSKN9DVoT5mEkzhNzkXDoENLFCpG7m92r5BfSNbhk1fQZNop",
  "key19": "2wyCLLABQpPSbdn8M9LDDaVXpd7P9KghUa4txSj4Bz3W3pcSRxMTp3T8uu2WAo8FhRwjQmqWNv8qDkbrrUP371cK",
  "key20": "EXkCiKKuVxpsiGKF5BSY1fPuctA51kMqZS1SScM5HjAjpWvUQv6YBZHNXSWYnEuF2Ht2EAyhJR8K6y2FPDN3JeC",
  "key21": "548dai9g7fsNTuWGHWo8y3K6nLnacG2p1VeKRbgAzh5KwLfv3J3hKbbL1Nmh2rSA6YJi68K1Wn8rgztNfjyXkaF5",
  "key22": "2GLjP3qa24mQoC9dnzuzTtGuwkCWV724BU76D5g2P16LUryve8EEekEiKd3HgHvCBw49xcy8dJN5Qi6w7XnKvWEV",
  "key23": "2av1HSuJAkJhDW8Se5QuC6QzicoNG3jiz5Ui98WJ7qz58LJq6FTXvn7Rghs6M9UW2pWnaA2TdepwDBtv9Fh6UaV4",
  "key24": "4SY7KcnYkaEp3V6czVbS4BAof2Qn1ccwTZnUkyxrPa9vnyjaZf4atknoXMv1Nsp4mAfshntBEdpUnWV6ANZhWRG3",
  "key25": "43cAtnQ1V562seycr7Ed9fR6YJpvBqWwrsMPfyFnmxZPxx9jkNK8v7FoMcudVzeVKidrjzaUPQm9kXHEjveuxgiZ",
  "key26": "5eV84Y6ThZ4dHs7FGndYpa17RkNi2yHFRBbv7EfkZsUguK2rYy8xMnmWcrNBw1YZ9rY7AD35XQdrL4FqFxUQWKUy"
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
