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
    "3tswTxxYiXKevtNkD5YoWuMvCGVd7ipRi77i2cLnWZbQQsgiZWG3yfbxUNP6UBBTW5oCoDJRvNda17bquJxSebrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YDRZW9NSScmTMNhWAL1hZecnyFJ99pFVoHEmpY3QDXVuN8wH7XNAdTLZRgsuJcbQuPgUkNmszzQQwyygDuDLaZL",
  "key1": "4dKAQ7Un57DosERwbEYZnV1yzD6PzLdiSacTRQypkAZhucHqKSa9XD4mMrAbdFuEBTSkBkkod9UvCgGPiwVNdpLe",
  "key2": "43ibAHahsA18fBdp1SuXxb6J24h9hYhVNx7p819nBDTqJnot1iQsVfmesZyQpbaLh578mgFirs7cZE16KyUw3g1C",
  "key3": "2hDWxT2ciuiJKWUXdeb8kZ7hx9DwhTGAG4rES2UBEM35tekLWbegaUadMsxcAmZcCVz97YPexKUGtQu43q5VUd5X",
  "key4": "3CXXDNqWzhWwgrmMAm6YZ87RbNnZiYPQPd1FjDueTxPt3C3jZWeSbX5pRmU74GvcC9Y8Pd3HcGGQxLqCVob68ozi",
  "key5": "5KVz4GyUjHkeLnHTTkWTyGLAgzh4y3JuCrPpvpCR6yPDzWaRiCJBKvHAWtv8ebszK5Ja9zhnxTSwbW8tc83ubuP",
  "key6": "5Ju1a5XWj4JatPvCN8gCRU9Vz3QnYJjgZYtiqMSgUxzHxGwTzwmDeb3BmizaQcDQzw6q8q4tvF9gcTVijvLqRXYk",
  "key7": "42dLP4YvcuyhzgaDqi3ffXB8T4t9XPtgehe9xoak4Zc6wvP6A6FkHps1MJiHUcWSdsaZQ4SWV4jDFRMNsWwqJx5Q",
  "key8": "3hDEMZby8WEgPCdqqfcHAB4SsW3kYJRFZPBL471Zhns6kUASWJqENnwc99zNrTP8K2ETXGrPzvMjXUJ2zApEDnGQ",
  "key9": "5wS6wDKcRsoyYHAWHWcHkib3YA2KS4oKBRW9pGQggob4kzVELFkVx3f4dS98mzd8ce6Yinch1rwGhfTgX4hy32DC",
  "key10": "33X7oNd2RnCmbFqg5zj7kw9B8hDfphckeh1rEtJt9wSAigkiFye3wakon3dqE9fFSrXaaaHbxUuD41UaqW4x5iEg",
  "key11": "2rKrSYwMfequoGB53B1pfMz6JTCngvxKveJAgpsJWjdBvkBNVoA2vqxFt2TqPL6v5eQna5XjL9q9WN2R8yofm4xL",
  "key12": "2dPTcdFyjawTkmLgfdhDK3TRMNeJaFouRBZ29na3bxNg5sngdVQNc3b2pP46vEhhHMUCmbX4NZHgpJimyMCCTSEA",
  "key13": "5oeaVTG4udTekHpog7jptfUExRbJ9FepezGZ17ktvYsxvoK7pLEpeJuoMhHuQCoe1nXTN6fggJcjQDb58crkPWuR",
  "key14": "28oTczweAtpR8fFb4DsqyCe7u4sUVeAaEVThYgw91aUpEyAYAHBQxCPnnAQqSKqwdR3z5w8yvUw1Z3Pb8X4jxsUB",
  "key15": "2cjpzXeyKkTv8xqKL57yn31PeMbRrBDg8dGVhmUT3L6n6Ph9yH6QZwu1BNsgYfE7TJznoc4dvLRcVUb3St7tYJ9R",
  "key16": "5ECfJePRix7c9ZVHa3kDLEgLLgyPoa9bZRKUdRqep69vjscxfHbtUn33xJ9AByPyqWf2SiFXJVtrojZwVnz5qxQR",
  "key17": "4MquGLKfCENwwj1NJz1A6uK6VwNrsgcNPdPRe12ENBvzPbwDhTUqvm34y2NwxD5Am98H69nWKeLaRNjWJuZ75vUX",
  "key18": "ovPa6VwEuW1JnixSs3RNq2xCMkFhmnyh6JTrmh1gGvWqvg6HmrrKQMmwDNgGqpBa3zRmSeNYdexDTJK5iGMnAVp",
  "key19": "2mZEivnb8fPLEcR8rdLmriD7cfnLtoL1vXehcYPoZjnw6z2LgZypKKCG82kfMUJgWxPfgbdQEXDGCSqN7vWZQFsq",
  "key20": "SVTVnHpaHTiLV4WJsxhiXkSmBPorLxkgknmDEGfNdNZ2AERrrHiYj1phvi1DApNRTRwAGTny1QyDnDRgQRwzkNQ",
  "key21": "T4sZcn8n4dTMLHpq5fo3AM5mGwtsVfgcipZfU59WGgYRgwwXxPsRdRQ7qR1nFbucsmqyJX5omokd5WRSHteVFpp",
  "key22": "4NAQhRqCEbibTz3FQsKTgK69k45UAcvHStTYGRwUdxsPgtUvtXh7YaRWUaSAomqGDQhuL6QVGm1WfaRNQhsmgfkK",
  "key23": "K8cALnxmcif3kLwMstcY7tBpqc5NDb4cd9tEBUKebRYhYCwR5ZuHuGTQeAoCPVnZT8ukvTfZ4HyzkvexaUGwNtA",
  "key24": "3PzvMBmnMxkWDynnQwqQq9vof4Chd1rok6AJf4aaTpsSWdwGbSAHw7SFsbFh2oRQDMCVx6kFpVqQ5PWqfM7G568i",
  "key25": "4Y5owoh7gMGiQsnYbo8ExZdDqK8Suym4YM8QPsGdB2wT6noWoH94yBbbMinQNPenrMoWNA7tYoCozwDxCXsgCREq"
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
