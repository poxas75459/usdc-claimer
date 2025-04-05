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
    "2UzULF9MiF5E5wEP2fqFf5RBf6A4SvHtHFVdSv87jaeEtoYZBQBiV9perMdYpCzXcF8cTTFk59DkJGLvP2u1Mz1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "itTk7ExKYkYffQ3yb2ZmvYgUNtHwGdF3oP4ANS1sVanRQ3s6SQLEKNxF916AUqtPN3oX4T4CsatDMtNHViEtnyL",
  "key1": "Bz6zFozJygWUCZHedRfbDRPyP1h5KuwkdgXqmaPfamZBFBbSJCMyx3nWn3fHNdFT9Km9uN1KQy67yu9Vwo1vxhA",
  "key2": "33nPvqd2AFeNLjNNePUwxh5s8Tjws8u5oZ3Z38G2F4PPsPRe6rHrCXeM7p1vPXGycLSRCC8pGSVR4zMmxT5tGrcc",
  "key3": "2SgcnwSYTRxgbDAk36PY28H8RVNyLPzKCc1fVJ3khZA2LAQc5NrMPTsfTPDysN3pwWH1XbJagocVpoxw7Bw43yZo",
  "key4": "3Vy7neZD5xeTBj5Eq8HqNR4PCFKmXmGyKSCuVDYr4bBaku89MfKDwDmbbb3buqn7gf9cqxD74rdFBNVEzSuP5yqA",
  "key5": "61kqSrti2bp6Lv82v97TC5tfgFoyb8BMXC7WWdRuXhweVnqDJjySCKSCGfEGjrzE3Bj9LQoHuxBXiK9FgXphBuH2",
  "key6": "2MkAJd6WXhjsh8EnVaoL2cAnYMP7cHBWw77SJqHs2BfKZcgEZhUMnmtQ4A3PsT6LGvEhMu2R7Tprs2vXzkHk2KTq",
  "key7": "4Lk8SCcZLHmdfVH124tPmy86o9DBypHwtiY8pnoN8Ajb9RD6fd1PJi2TBbTgydm7aqxPwgcdxHCNrzxtX6rq6QH1",
  "key8": "2iJMtcpx9UDV1szaGdqbaAmvNcSMh1gf3UdJho1UbhRfc9GEq9rEjrqVB3cVjk8iVTVEHXQzFpRenpLFJVJU8DHJ",
  "key9": "FLjuM1NSG3q4byhxhnWiVGqXmnEoiV5MbmpzNf8sLetkjg4UrGG6VKoK1sEuoMCnzJbDVhXKs82gPgzFayqCALT",
  "key10": "LJ5PvhmN5Mk4Z6mCj4zqL6A4FdGD7aqHyaAS1R6wg6Dnc8EExJ9bQdZb4g7sTUZJXYSvs6ggDpyEnbyd8u7F9p7",
  "key11": "3hTX1VruHcBDYQZCgRwFQtgC23dq6CEuEiXHZVWndhK36y2aUNz9VUnQjB89YvMAQqf5Tt1GkkEaK3EyB3RMYxno",
  "key12": "5Nk9XUywM2zc9Rk9385ZGZKdZq8wWA5meKmZFUr2P9kMDEGaPQBLQN3f9TdvnVdBe1JWh7zCoUdDLKggn71BkqsE",
  "key13": "wDrVqQpNqCgxMAHux1tWt6Mj7fzxtt7TxJA7nFfXXERZ8fSepEv2u5gTSV6WSLYZmnAbHeYdUAYJHRXRD6djkPp",
  "key14": "43FupxHQuiof2Twj8kDe3JfXV8mS33Pigdw96a5KznUmX2MiRB3xnKuu6DjzWTfoSyfLXVTSVzCyaF84UGTCphM1",
  "key15": "mRpiyc1EMzFxnb9jFzHh17iJoj5PJnKjbQS2YUNVGTczgVh7asAuGPZyspXyXTG1kHqxgoxAvi97WNLH6KcPUNE",
  "key16": "4hEMdk74MDWtqCr3gTpFSBZVKAutu4yfct6X2ubL8m5VhwvHBV3HywQ1L9o9Rq1rYRAtGeKFXQRV4j8KC6d6bGdT",
  "key17": "3BKdDTRPDWv3GwcAMNCLLmZmSWCVFjmKQCanKB3FKLheLtdeEpNcYFQ7yAvS2eQbr5kTrPoQEUTXm3YuUuJp1aV",
  "key18": "CmkDY31ZRR5boRVUqRhBEwsUbjaDqJhPiwVBhb2xTtgjwZbmwB88KAeDZ2X8JCd9T6LXhaNFHe66vkhUFhYurXK",
  "key19": "2yXdQasDFtZYXewE2VkA6PcaGJTurT7r3JcWUt7Q9qfWPHuU2Q4eBfyHW2HwSSBXzzYFbXZ4SsXvwpPhcWcvioDA",
  "key20": "4Qgv8PNm3RrdRWL28PYJ7yDn7buY4TWsvVHzvsyeYkJ5HFPnAxe8yGdcbL7UGnn9HMQdBur681J62vjUdgaubGTi",
  "key21": "3ZFmXHDJVVQyThZxY87ZTNXgxJLHubxpzwqnFo4Rg4X3Ajda1UjBaX92KSQEFJoXv582naFi2okeuhwJSP9AQsSY",
  "key22": "FfZwQCVQis4Z4JQ5Pw3Vw7uFJcAdLP3T9JbbVf3dSBxRQNY4Yj7xSeVeDJyoTXV93dCvsQxjpbCtpMLoGCbj88E",
  "key23": "xQqec8kGpwSS8cQ6h2rRVQwCqfVzZiBMtHWHkFnuJdZ1Syp4PmENhupuN7j1WHS2Zfp6s1vwvu6STuELGRWtijr",
  "key24": "4Mpopbj8Rcvh1QAjH4L2mroAoP46DHETEmngDz3SJ91i8wMhvzK1Soh34jWAfUaezDrxMReszhvgqx9sC7iM2e8F"
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
