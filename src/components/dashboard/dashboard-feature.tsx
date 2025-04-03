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
    "2BVjAUXS9jRZUfsynFBHP217csk39WctdTALa3ekUCQ8u3sGbWMykeKTAExNtqhqJtgvg6Uy23sHPzfFKxbGjzXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hpA5axCRRum8dEauRHqLxqmTUXCJbe2basfmh5GHmCsFBqtycWkjgUNc2E58BgRZm7kwubEEMDEfS3VC3QAcT41",
  "key1": "2Hpsh6F1JKqiPHs6rHFXEc7VSd5CMNub11hNcBDh3BfSwh1CX86jeMSK9QrJixAB8iekatpFd8A2w9w3bbSFCb8s",
  "key2": "37YbNAdSr442rv4TG592w65NrweRwX4ab5fVB38Vk5xUwkWLbkokMYMKSWBvqbu1jPD38XyshuZiV6fwR67hruHJ",
  "key3": "5ra3m5hG6icMizXP1U75fZF18SpFrpD9dvvJTfyxmkXFyLXu3cnDfVFXwePG6zyCdeZF19MSNHWWufSZmFDA2kJH",
  "key4": "56bKfFgmzwibQ6sei9Yczv8zZCbk3kqiSbRNCBnahdnMetZyF5dnpPbAhSFUGsbSe2PE5zVUgXxbmF5WJUqBR35s",
  "key5": "45eKrCCW6vW9EZHtxT7CBRCRVwj2LTkH841vDbBCocWh6yVD9yJLJhqkN7dV8V7KUy1ShvgmesEbE5QtqwsFoTQp",
  "key6": "Cd9GS7MR3egAAjWAwZBBDgQrySoCkzqe5U2ecRPwDAqvtaE7JBc3JWrvqQePwFks289NbFPdihUbZjHxcLubdfm",
  "key7": "4QPJSLamdFG5h6pMVW2BfRbtg5G2mGDEtUKGKzS7f2vSgXnZppMwdswjVLQUcazkaA5iQ49PjNj9XT1mbV6fxuKM",
  "key8": "35kerG599fyh59k5nj3nD8pXy6mfTUh2gpZ4YJPcPpSoYeSYzapuDLsSFccUmJwwcMh84hBvYs53MKHCLQJWEKEi",
  "key9": "26J6hA3EwgL71sHGKiTvczxftSt4yYDbhR6hrWhF4JAVpv2odWpNny7DAFugobjuCbse6S8zgC4mtJSMeEf6KvuQ",
  "key10": "8boohysNJMaKq5KEidVro8bLBd5Qdp9owLqNb7KJqcKv6DAEbpJ4jnbtJFsCpQ96cbBVyL7Q89W8SR4av2KwURZ",
  "key11": "8Nb59HHVK6e1y2SSKVYZoMNTWA2cGrFzSHSqfztf6YSJkdfK9KYSgHAQRRxdLTU3nDHEAsFXFaMKLvNjhpMYdDT",
  "key12": "4KQbQ3P4rWZFmGXMuXKWtjZYwvwpcAZFh9RUCqFRV6YbKciFzeMgytbrerZ5jJarcWrkh2AB9EYA41XNnuC9E5bB",
  "key13": "4QBWre3rW7QgRFhTG7CwacUX7aynJNNCBd16kvMu3vSe3JTcnQ7TgdBkSpW4x31wJwcAxakJrHdj2GeGrjvKNk7m",
  "key14": "2koLvHBZkHMCoxbQPdQg8PhtfFrApJLAL28jF6evCcxqzdByWkXsvuyyMNaKSRZeSDZbZJfSK3DtkipYAnMo6AXo",
  "key15": "4C1UMgNwge73obG9WSqkXb19ccYUW5G6HZiX9LKRHgubNkCyZu8rLZ3BtyC3SYmd6d9cLDbQNhfKrnhRRdNeHdw",
  "key16": "5CXcCPfHg6mtGphJKkCVN1xiqGKXtT2c8e162vXrBTjNGApYJxJAQcvYJNgzeKkoJSZkEpzHRHKtLEjbC5yLLRxX",
  "key17": "67a6jAao4AMvTPE4ucAwWLRxVFhhm42XqWHxVrLpkTzjSGrZ9QzKKvrahDbNXXnb6Hmk6W4qheYrgYP57gYJR9gP",
  "key18": "4KznsRLb5dDh6Bmtvv4hkyvs5AimuiXX4MEFy1SwJXD7wvqchTkADAGirCoatURuHAA3K4F8rn2aUBT86mvjdVFT",
  "key19": "aQLj6hsFKJxGDRbYtBVeiPhd4mvxvgH8mC5w7z9CJrAnUiEzxjBaTFDMjJRWVMnEqNBURzcpfZs9ehzWTjcgmtD",
  "key20": "zdFEo4pHaCwDBGwmSdxcrfudUnR6ZuEd1pnkLdhp29b8rFzpsoeVHYtdcNtmReAzDRoCuqxJNhVUCKwZbLizYdz",
  "key21": "3gkWtRNVFNPSEQLuFbPGsWxYUSC5qgTAG4taxQzqUoVVtqbPRzHnLkLYrB776nk9Zx3U2gGfd4wt7n7VKKYU42Nt",
  "key22": "4LRg6X8mAMn1D2S7bxSjKhiAgVgKr5BnAnR3ybLKaJ9mhpYyfhzY7bC8rTFRWc8K1hztkKnpeHjrdEZzAnostNig",
  "key23": "2zpQG2PjjK2kx2eseesNKeZLqTiZL6QQ6wWcqpkZp4S1W3reiHo34uUxhCJEF5yEeZPNg6u3Hz3fzntyzed9kYrt",
  "key24": "7QQonmPCiTBpkX6ekNJ28BEf82AR675xiqQqDiBXVZ7XLujecwUafLaw1gbrnkQvaRMmWmB9tkECxswqdLpe1R7"
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
