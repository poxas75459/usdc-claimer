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
    "5WZXdfurcmCae7JbLoCHJJ7WYMhCkJ8BqAo7cGhVPFJN3M7APnLggHY46EcQv7rKAKEVXpmGUSvPg8BzFQDKETPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gx42xkzjKApQQqzf7zaBt3igUUc8G7uQ4ExzFB2xj43zJZXdLMouEPSaGWaBtfsg56tCRPvfg3BXA83YKfaKPco",
  "key1": "4ipziMCGGv763gZqsuWNGCXrJ7RbrwPeTYUVmjRTvboo4yQPCZKXF4ByDxS3r8T9dFLnUAU812Rcuy8g8Uf7PejK",
  "key2": "3pS9sJPyBfPQwWAfpLaLhKb9Ymk64phodzAr7L7foS6Hv39mhd8SS17VSgvVmk7wx89GtfVMbgeNySiNer39d4gw",
  "key3": "t75rfgofrV2FiqdxQKSUtEGfg1RBFFM1zT4wscg2qiTfXnZCVc2VQt84ibxtY4ZNXyicQfgNCRPiy979QQ1fzUD",
  "key4": "3msSUSrwPmSToor1x8qeLEHcStYFMHFPz8DvaZrfz74qkfB7QKwoxBMtFYSui2ESgi7R5VRU87WN5nbjDF1SLS83",
  "key5": "isj1TQoxyPgHxc2B4NZUJwhPhQcc4nKqE9647EjyfFtiZGMGWAMbW4dDSefPqq1iiCkq8qZTLi8t7GGVZsitmbk",
  "key6": "4TmNvq4NPxozFspx2qqUdb415euDSEh4ctqAqK85c52c6AatE5xbsgCiBHHuFEJ7Aj1nLCG4MGYz2foyfCDn8unf",
  "key7": "bztXjxMg913AnVyobNi7ZBY7ZicDGpuNTg9YYyKgtrubAnYdx9je51qMwp5mH1wcsAj2rBeqUNWKmtHNWCrKW6F",
  "key8": "46S2Z8E7SnivrUsxtXF7tpGCDX8kjH1DCEwkkMEesTeYnQ7jybai1urgV6gfrbTMDaf8Ro8jaXZG4jU8MBExWWbc",
  "key9": "nx5Sy6JJJeM5gLi9KFi71DZEg9o67QHd4WvYjcbthL8DP3BwA3wzcVnSdis5Mu1JJVDcsrxGQjxQCTEzPy1muac",
  "key10": "yrguHWayn8xXbxmA5JKw63CqYzbFi6Krruzurps3oMUtpxCCrfXirTC22iDrgfyK79ajDVaFDwNThmuzyxt8A1p",
  "key11": "4yrDG3Qct14AWZ5PS93rU7mWtxGw4oQGJUSjgDCNTC5YMXSmzTLU83yBvNNLu25QobUF6BTBVvh4h3KhRRovGGZe",
  "key12": "3sUeKWW9t3e2Dv3xChHTMe4PWiDRxEJocMh2hUqYzqdWhn4Gq8mL4XFiHCsExnCmcrHzJEpjP93kQuTusWzM95at",
  "key13": "3jTXwBXgidpH6ZgVAUjZFxbg6DMawmgaNE2G7ShrtJF3x1CTAesobMfuV5ztF3mwkpuMeQxRH6PiSULv74CSmeyv",
  "key14": "26d6edXksRYAWQMF8soEZms38s57d7LkpGpwGHtJukq6Ymc1aTqy8C9ngfhaTRhuJWaM2JXz595Ro6CVJZQMW6C7",
  "key15": "4Zxn8JrNi5Ep5dSk2jicxSWTL8sR1inJD3cpAd8pjXqN31SR27gHV26uMU4MLiZnAQxFPhSopYFq3DfrVrdr1d5Q",
  "key16": "2VDXVK8xtSf3qnm7oykUGBjJXPTyYxf52kGWcP3GRFBaTSYaYqLJLvq4ZTCsTcredJYNaNs6uaBwy9FLgJQJ4Nqq",
  "key17": "5jWuQmq2xNMJXAp1qdbgvKitrcJfEBhsDF5avg1VE8dBk23TuN5X9qPUCYhzjYQLbwxqm38dWL5kUPfYpyJTi2cZ",
  "key18": "3DcgjoDtvEoJQVFGgGQo2MnvhiQbjAVPoiQp1EK5Fb8UN2gYNW5KbETZPXjukJk2cEH1LDHwkTqVMcb6TUyvYxQU",
  "key19": "2d8ga9QH1RoJmfnJdhsvE6DHy1DwN7UCHmKL4mNLMcHcK2TMUBSmLXiYehj5yPvgMLsoTyV2Dw6qbfJw9k9H23Mx",
  "key20": "25ptxvR6X8iaM7v6JUswgF5Txpasvyo3ZGqA6hiuFNKfjyhRKGh6ama11T2mNxa2MSgKXiEYnPEK4bybPCcmznje",
  "key21": "52udmtmv3yq7EgYKUBcwMo6xuG5MKF9XXRr8RVojVNzRzayuMsUjdk5iv32CDhRh4zsE5vwgbubASrBodGSpYiC8",
  "key22": "46Sd1rLNWJk5gEhbKgbJfUJ9QdVMBsGgbVz15TbmvSVcYcHLBMUqPDT9aoTVz2FjbGrC8Lht9Vfb3gmKzZfoa6fr",
  "key23": "3w924BvUe847dAqEneyhCEmV5spQ2aR1HBgo1KqDQWGWt8jXgc3Wo7hcKLdDKrJX5dFXVrYMRpDQavHEYezqHGvA",
  "key24": "PwbjiZhjLYh1DRLKUc8ErW8WLmZ57L8z5aunwBSMCfRM5Nw7GmJtdS4cu57GgmDJWmt2PKK4CEdUQVb92FEiKXs",
  "key25": "29NgV7gN4EsrBPbAgpVaqm5HdUjHvvgR71iQgKfxr25SGARMsomKVUVki6PDNSBVrM9rWqJUzErLLVxnw3updgDT",
  "key26": "B9pZZgtZDgMJVzD4DPNm9DAtLro7nqhuRucHVudHj4KEKerHwfKwoUP8pXf4mK2K1vSw8mZqyPUk8JMjc7TJs8b",
  "key27": "4WeMamc7kwHCPX7gQHbHHjJhKnjaZitQsUR6bRtcTD7yXQeJo9E4qTuuKzpPp7g7b6VGHMc7AA3gDzcwWF3pcErt",
  "key28": "6TsMJxCqYL1zXFqE9msTbnnT86qiPmP8jQkpuzBWJM45boxrAUhqFNirqipcYeF96U9NqRZLCM1irRfo34frGyT",
  "key29": "2dJFPY7bHrfzqUCr2bNabhnPtJW9EqLBN2hbDQD4hgsTjKNN5sD7FUGFRhBUi3Yt93S84hCPcfe1baf4pB3SfUb3",
  "key30": "4eYxv8CFKRnCU4S8dNjQYSWG4xYN1v6JAoMgd5HvWL7WL7Dn3a8jn3w32KPpjfYiNJyMSJtoWK9hjNLK4c4HezjW",
  "key31": "ehVpUdccvWaSi8UbaV96o6jRgTMrFfR77VHtt757ihwsFpSuwAZG5x3iTFdYq57hmQLqqnfnm7vpFwG3Wi7J9Pp",
  "key32": "TvKnpwd6YzJA9LBj1AcywE5VGdsuJNmSwVfWuue52YmfhudiD7mdxugtjNNEABNiRYS2cCZD5mrbLPimogoSVUQ",
  "key33": "4GEfH9aCwa5sQCqSmGiRu3faj2A3UdezcsX3uT8qMFGUKMa1CsC4CDJjzo2o5nUaGinYpbafVQdXyqohn9e6rEV7"
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
