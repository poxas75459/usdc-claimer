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
    "34JCS9A1x8DWJd3Z9pbQYRKxGVi66XSa5RmYF4EfwbBueoc6W4VRDkbMRYuUQUJmGR4jg2obprux1d87yBio66MQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WjEi1dQvZEubDdtTwg2PKKhfttqZFnGWsaEdenCqG5ze1W3EpsMtpT4g8CG6P71cj7mCuTJT7JEYjFUSEhy9Jv7",
  "key1": "5msDPNpH7TNhaGw76vF3iPPpJqLPBib5RBvyjN9Potid1HrCVqA1no1ZtqbB5iRbfGwYtqq7w9e7aC2noW9oZj64",
  "key2": "5RfvuvcYLVEykojRTxXwxWquqPRtuRYiCsnZnd2WcncLHi4D5kfBykwdieV1RoDj7TwYS3r5P1n9c8KNgZx31qg9",
  "key3": "2fmQG1VUxYX82idi55Hs68w8Q7HLpP4Ku5RABmesb1LzxYKCbeUc45feTrnWmwHxZeKh87CSJiYuEWTpMbiLXjYf",
  "key4": "5BV1ejgWCkLEbB5siLjdUAR4Vc4R8CcVj5ccbN1MHrKA3gEA1zv7futCncBQ8uYXeGXRnUhrRfoNMvedeXLRVYQM",
  "key5": "5XTcev953TjcuuNtQCQwtposDtvy6nemkeGeJWwYtVkRSxDGQZqpEY1AP3Y4vBuzywhD5Q7MKZSwziEnhK4ZJaVJ",
  "key6": "7vegZXRBvk9bFe9jybQiJHQ1dW78Uiu1xWaBtvD8GmP16QFSLRbkZiT4RxQiJZTyeP3F5A4V3GQMfyfx7cwiy78",
  "key7": "1KoULurQWMpEmtroyVsPhbgcZsNrwgKtt2EgEuG2L9noRop4p2kkSGLhhHjmRKCuSMc3cad9FHQZGuxbT65BDwK",
  "key8": "3GgmertMSsfdNXJ2tzF1Syjud7JPhdTJG5dzVuACqdWp9Zm71Kp5eWBwBTEYNiEuSvgoSKCxRHzunXe8mc85oiRn",
  "key9": "4YmA9nkqCSPrmNkadJsfkx1XkFdXXTUSQgdqZNDTDiSFt64raAz2TQNGusBqLxfvDE9kDbuntWYpaMTACr9WMh4x",
  "key10": "bSkLXHUzfjGYYuNNU7DKXzy4HhnFTz3Kj7dtCGLW4q9ktxhzUX65hZbti2Cxm5jKKXvCuo8AiDTkHNhTubQt1Rz",
  "key11": "32KJJqx5jJ5RcdFw3Lo2xZZbaM7DnizP6Nb1x2fuuEDXHw2bSRyLwgWtBCs57bVH2fiyRSPXk1avxFjReA8Q3Yqn",
  "key12": "4aq9cR6Z8zCA2mdG8ctQUSYNXDpVWkpChAi3qkLVpyFpHytfzrjwqD3MNZHMUsh7TvwnHmuw15aGVU9YyqizL3oa",
  "key13": "5Lhjt9uVgL7UZy8gueqq2Fso7um8QpStG97K5JoWs4jD3kjhTRQii2v9R8ZRzMnzbo5AmR8rZcC3FEhxfrMehisS",
  "key14": "3e8okYeuXSCaZ6fvhEhVYJwDKE2TqUsgFrb5n4V4CJ8L3WeKH1apBjMChHiWxERrrUsWP2TC5tUTSTXJNPHMBffD",
  "key15": "3yGqm9egNG6sFeoGb9Ut14ng6r8jXimzfHztgxkRxPV6ugTri3mTc4CSSeTSJnkTgodRopccNnKLt94c6iENmAcF",
  "key16": "5KvAWm5kfbZ3zs4DNvYyfzWqRywzZXVtrtrzQUJBbmDo3B1hXQFo3kN97uCi3A99A8ZGAfVgEkG7DJsjN94gNVpN",
  "key17": "3nFdu1DqageiNoPEA87W3E2yqR1nkcVis1fNmt5FbzjerhsKCypjGsw4URZbWmrzDGgBzeAdCAAEWBo1RyLPY3zJ",
  "key18": "NoYxciDciSjSZv6TwFp7tR28jKpVp7yAjVMWtciCycSbpStfx6cneNS6dWshfcczYSH4jRpgAcdsmw1p6skexUU",
  "key19": "4hkfx2crgsCept3WLvEjqEWpVKgzWBmNVdkHZCpu98oFh26xMqprTWqYU1jJhKfcNCxGbf9EfD9TapQQTT2DPik4",
  "key20": "5bGaJFtBSDSYqwmR5K1YZsJLBxZU61yfkvpX66oRVuE3hEJotn7rwoo4PJgN5JQm3AshBvC1aRf6FpEuBu8MnRRw",
  "key21": "3aJPDugEEPRUyncfuKgjKSc8qe2AH2ZjKR2FRhGvqeYoYTbX9Drdray3epBn8R8PRsYY6NJYj3UMstDkuzhghw6D",
  "key22": "4LVDxGH2gx3B5GUeCc3cxwugHLBebosXBxadTqVnUYr1GhGMehBoGV1iMRii2aBSdktrWqbwcspL1gyiVw45VUnC",
  "key23": "3gvxDJKYHDQdFfTyQMxvKwATvfpSJPaUv3JydicTv6V4QaoM84iVmPYosqopoiuLGzg45Q5GKK21SwZxHnPp8TX1",
  "key24": "4t51Zqak9u66GYMLmxVsXDiTLKZcPhbSZAHU8xfc5Kv8JGaD4rG2wkkBEd8FJG4HL2fY9oRnj59GvDhn41Mx4VaJ",
  "key25": "4cgFoF3Ch2mtWMGYUtb6mygTM77SCZhsbut9ECmhu8FcNpJmqcKaaDNXLjvVdXWpAPW7v4JKqXKS5ViTnnVppeD5",
  "key26": "62nQ9J4ThdTrZhvVUAJGnL3qnmaouqchW24yS9kXzT2rwqYkaPwmvFYg11NvNsTTEt6VoMUp5K6r8iLfQurbyyAe",
  "key27": "3Lcnps9uDrV2DhiTX4VGH1RN54tHWADy9Qj1fh1yXVkmQzJpAyw8orzswHPQKgusrRqBmLN8kuUr1gmbiahXg6gC",
  "key28": "R9KcUTbzHEZGAkdSMz9LRV6eEMY11KRiXLKW4HjJhQ7qtk45W81rw5c1GYhpVwVdJes4YFdep5snRTD8X5LXMq9",
  "key29": "5Puf4npio3r7s1FoC6YrYfUvjUsh55mj2EYLdZQabWzP2p9zdJbgDFJ7khphXWsihm4neyzAvg3nJgWyesBjyJLf",
  "key30": "5aRFQwhhcQgnnHRzTQNn1YNpxkHyP1zubsFET7dHYY2JHUHPZuhUhH5vt6rHFk4WRnXCfL9wHjSUSaCTsMVkyyLx",
  "key31": "GMd4YgywfS3jrzYFzUMEd2nLmufsfH55v8ZRefg7UqZV24Xik5vjY2wpMz2xXCQgYaPEqYz259DCDQGDemxsgfx",
  "key32": "2nkNVKW7wWA3LLPLXWHgo3Xq3WxfNE7KUUyMFrLJdR4VpRJRkysSkueCiyiQQUSXy9AD5X7XtX2oYGXAJUvjWye7"
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
