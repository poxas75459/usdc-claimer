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
    "29hbToLFiZQkzkJw2WRRFBCHbZ2ZQ3Jz8mSdv2yw1f6wLdr4uq7r2tTwGnbouDWqNoo5ys4EbehqUgYb6JayQPci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ELtpeWDo1WJ7trMabopmuinEL5y1H8rkNYfrhg8y93dRswZad9MEtXYCFm4Kw3GjspjGezJV6FP25cpH7Nok4cU",
  "key1": "vPbV2WeLsM3SmDx5GTJKnLv6KZAzpwcgJ6PnkcRkk4etVFbJzbTYVDMzSTvsKh9wkCFpbvSGBXxMzoiCw1G3Eev",
  "key2": "3tBzni7bo3eiGKGUw3BBCMPoabQb4agF9tZYumiaGWM1Q1c2oDRi3rv36dmyCiiU4sxhBFp6FYEeDuGGjtTPFqhh",
  "key3": "5oskxeFDWs8EFhEMzgmbc1bPZSiNvhMyaCwvMaxGXPW8edQj8AxMocszR5wDVvKdgqfLXEc4JWugrZZca4vN5ZVn",
  "key4": "2N9mRCaCMnyo9ZqNT9T3UdD5j4bqTTVVuHX7m2iJKFpwiqUgWcgcuUrxctGcoua8ckZ6ybxfBhZCT1TrVSiN3Tx8",
  "key5": "4i88yuTEgrXQVDQrnCBoxFr6cBJks5mTjEBUHXqfB6HsEs6gAaH55BLonnHeGp7w7fjiD5CH4jYDQFZMxvnAc3nj",
  "key6": "39rfwb4HUxwkjxwiVUb12Hub4XxJJYxP1jHorxRbphc9Qt34qrjoTm6ExT4mQUFjrpLETE5qNUY2N6mBXuRehVqC",
  "key7": "2BMUgBVipoPPHVDWBtanDtwZUps7eqtUaiFcobTHxirFq6fwe2XmPHesNVuYhkq4kdyxZ4fHuNZRxKmuZiJ1QhTk",
  "key8": "586tX5UXBebNT66weNYacTF6HZZt8zPLou3eGiDzpaH6j8QD9Weig1SdmeKjX13UerpSDhabCUbdb8TjcivLqxVH",
  "key9": "5t5BJKsRwDPgrwAHTh6gHhu4pgDuvVL5UKokXZyKvNnwE6Zs2g3SKEXsnQfiGAeNDgCosdoKwP3sDtQqKvjGRMZY",
  "key10": "4e66LZ7ryS2WsKHZTVoTkGwqbA1tCWeosXqmz3gyeCtZEaM7h3Dx4esfnzDgi2hBYaftLHVZEUtBD4o4Y68mjLMR",
  "key11": "4udovSFfL1u2DpyyaK7DiCmJvpw3nwp6zyZfPcyQvo5TmYfFSDifBq8LktMf4ZqyR7uXufH9FHSgECCazwRjqCj",
  "key12": "5rAHbvrzNCJmysK8RW27uZwoPQBDEfnSmEBGVMm9RfDtpVtvYY8jjJiQrVtEVM6rN4637usBKsoeBca1TKejMxq2",
  "key13": "Jj2eNdmsKdPqtbfRNj2niBp6wD1KHiDijFnQtc8dXbfjQEQEDyRUVFd9queGmYDdpZqSQckBFr8qAeECNScd7Sg",
  "key14": "2RrxfCqHEAoYhJS6Uw3YS8fkgFL5mhXkMXXQhYwBGAegySEsdKQa5iuD8SkXS1fp8fHAqvLZpR9cXGERYtXGx79h",
  "key15": "3ktjajER5E2i66rnNK9d6iK1jtgCst7HutnwBaD5xjXZcFFmmBp2ne7RCu44eP5VuJBi5RxRKe4dibiutnyrmh9y",
  "key16": "2j6DF2qHEE9icYT9dm2js1vzt2Zzs6WWNageC4ouncmh7FHk1JFW5fkaPE1BVG5GepUJW1FH5VDQWH5HFKKyHKiX",
  "key17": "4jr5KxDzYfdAyHK2bstm6JbZyrP7p8h6sSFBRiUDoSu4uq8SEJPWnfSLWr8aRbpKNRBk4JCSxdwstPxgSjG5YsBR",
  "key18": "56HwaVLX6XNxF7dJrDrhM7h3gSsrYnmpnwKrYVQseRyctikFzPaCBEHQTnzgmoFUSQsyQ2WUK7ADUX9Qx9pDRoFz",
  "key19": "4gv3bVHt35cxFStrFGanSHXXG4BzRTdyPkaLoPyYCE37Hsve6iJcLkwUoJFhLJ6hbcfADtFwgX3jUxnQ3rTDCKvX",
  "key20": "4b5CXhbpnL9S5rEmXRvs4xugA1tLRn8VZB3wTDQZbr1jTsB2H32woQkksFheXRwjzQhTCa7axxUuxSS9ezc7aHGC",
  "key21": "3pcEGXsC6e2zYU2DfQbgfgSEMGEMRVTVjx2nUrHbEqa9ZbwbXixdLW3hBXTqPnDazFz6fptRxnK1EkUsj8BAh443",
  "key22": "2fTxQHRqjTuwBX4WgguPYSkaDPoz83mppDjxAUVKgYogogzgKqBcCFttpFsRyTzzpwU85xq5S9zCDr3qnV7T3gFn",
  "key23": "r4LPBc44nqRpLQs1pa1mPDLNtHJUXNnvLqpY1qxqXqaKV1tsSXGqF46gQAdk14QWMXhdW6gGPqUGo9c7Yk13f6D",
  "key24": "5h9dcSEtmpEN6PitMHstuH1VCpXmJeYgs3D4FMhtKnVbMFNy3eEhLBxGaPqDXBHXdUkCe7rN2nQiHWJJYimctmCX",
  "key25": "2hzchaFeYNxZKM2QFUf1uttnCSXBBYsJSwZCicBFGMnWH1W7jQAGuqUPt4FUe5AY8eeNnNYxFQ7adeA7TzMocX5k",
  "key26": "8bLup5cEKKBZFqcXC7HC1BGHcExC6dKuJSx38pwPB1ZW6zPLmNdRsB56er122sySusVTjcLCZysGMDufzMXsaeY"
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
