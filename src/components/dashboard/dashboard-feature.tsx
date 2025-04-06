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
    "ZcBybuSSFnUuFMWcXSCPaMeHR6dhtykiHAQbs7fscsxUBFZtCcSVi8ucsq14aCfLW8k7bsotuGMxnvNG7nSGsFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RAzoZfdEy3VJTz3CEtJADZVgSpZzbQFRkDTs3G9pCwv1h4qMXXGcZ5JTzGMf1B5mDLrUjSB95fUA7pJef3Dp7x1",
  "key1": "2ZkCWMSP6Q7TK5c2Y6cjFXURxxJPVVaMJ5XRSpAkWkWhzs2N3rey9pPWr15GWK11RTTBf712hEMKQnNPkiuVY9NU",
  "key2": "2F14iyrsNj1wxtFgDDLVSeMdgyC7myGvyJuki2a2ntarMzS2w1mdCgN5w8qnp7X1a7Am6zefQBWrfHhpz2XjPZRs",
  "key3": "4PotaG1Xnsuisra1Wsvg7zFsT3fm9QvvuYmmrV1uxsroYsTJNcV94hDm7kQ9ZmHcUx9VrvT8R1hkA8HKAdFc2KRk",
  "key4": "2h3wE8E4HyRGxkN7Wq5ejQWHU4tPFkNB3y3rEStLddzk9THzks1gk1tetzvpjLS4B7pCCASa7jLUMiTmycVP3mQj",
  "key5": "MBCGkUDcawDdNztc2WsujJKvCY2f3DB9kjK1W7UN5L6fKk9DyENpihQBNHriKpwmJV1PChtXF1i4ojP4bVAPx2d",
  "key6": "5uhR62YsHrwMvWXLbuQaKeM4YvFe4jeRSR9JhaNs8aDfEACi9eBEMx3fBT9NwQtZnFmu4zK8S3K2VvkySaSgmKaA",
  "key7": "472u1qET24JZU9oiKZ6ygQ11u8AnS3W8yUwooMT4qmtQj4w3B4MuYv1xP5emVSzSuq9bVyLnbCXgve8Fs6tNDZrx",
  "key8": "246Ssaqp7zqqLwVf7XCkSwF3bHxU94b1k5ERBY9PeboV7BVXRbrjYGquRx7oim1GCu2cPz3dFTkdDTsRt7VigFFD",
  "key9": "3jSD8nbCeo8HHJJ5bncatdWwDC3e6UtD7coRJZitLLTbvjwHkzPqkfwGoPQuWDUySs5bKA3BqDemCJp3YA6xuc5T",
  "key10": "4rJ9taYv1R8Yk8HuxhRNQq2wDMN94jcYKDSw9SuF5iZNRRyJcjsDJYxr8yFgdXhpgZuqq6dVD8JCodd7fNauXQi4",
  "key11": "2Y5xQGBAFrFjjtg4VwZhCPpT9jMP53Hyb7SgTwkcBFuBcNRcoe8AdCtNQuM87PbKbx6BBciBpnSQDwFvJVrRUUxz",
  "key12": "4GfTfmTCQudVXe1aYF4WqJvJrVn8sDKXQDvT5Nx95gXoWkwq4o1KSVQSbWS4fsvgkfobYvXo6PMdA2BXgssc1Nyf",
  "key13": "4LPWrXx1CkX5THh6D8EjRhxSbsUU6gLX9Li3uHkjBcav5vRtdkgimqZdP6YQGx9q3VVBhCRsnNpTjjodfvUthjcD",
  "key14": "4p2kQ9rynyDMYFzvpmoshEMSMZddRUn2TJ5xGNKSRy6VRi5335fqycaGdonHwaakD3h1Urx1d1DukTTuBoLaQSN9",
  "key15": "3kPVzoUxQd3Pe1zSBVsjYq7Jke8tYvzeYdSmimk9hTH12ZCrYZK2bcNdXxpJTcRVZm8AfTk6mf5uSvDpvwshFwmh",
  "key16": "25RMXKwUA3fUfax1LmEwAN8fmfWnARu99yjjUKJipj351Qmobs9aS8cH1SGNcHHpQSNDD5ZNpY2G9xxXrvS5eX73",
  "key17": "3chu4gD84oEk1U9e6C78E1Gd7zTHD9v6XFinEpzD8z8LtnxBj2UJgdRM3ZrC9SkHXx2yhu4Xm7SBSr7WHdBovDxN",
  "key18": "3iyR5vBUog6FPZPnFpeb42RSPg8jgHSPzCNXPLTx2amZsgMdUqRd8Ltw8BpNJJS2s284AtGg3Q34jmuGjvDM8sGH",
  "key19": "4Gt2Lgatz1oeVXjQ26ZxyCENwUCp7njRB5yt3S3b2zvJq3UxaQC33vvDdzVu1qWJivXgo5J5NeCvSMbJQHCm8E7c",
  "key20": "5PmS8cNVp2ycaTsmfeExtrnyGaeMKZ9YjGQRcZFt6aQQaBaa5TQvCaj8ma9euEVbkbZzQdU6dECWjKkkh6y5aLxx",
  "key21": "4uv49PyqzofgwJJANgjAgfnY3jkReMoMdFJxNj6opv11cEcz8xqVj8R8Ecxx8bPNx7ywd7tqkZRyLWpwRe1X58aH",
  "key22": "Gv2tJpEtrKU6cy3FWfGfJp7xBGAy69jG9FAJG7Y1ehMbk24pKAv1Q9HWW8EbYwW3qRQ3mhtAA4ZUQdwELNxS3bp",
  "key23": "5i5PeZTjCivb6wJyFskibyHuxiR9twFov55NvipX3GXt73MNnP2EDBWV1iTzh87LKoZknVUfQtQ3HwVF8FBkfFkm",
  "key24": "3yFMF9mUTRctVnvJsNs4X5tPVKYT8BWkfK8dk2Q1MYeN8QfcscsxbA3UpshZ3g44aJfeQKSmnpKa52nBWW43KX5n"
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
