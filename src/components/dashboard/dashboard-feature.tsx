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
    "ESboFoguKDgxjWMiKAYfCSf4ctJ554qNC1Zvj9zZ5KE6JhudphSdMPN5P7eLQyhmjG2Gh19oq914GnkZyqicy3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nE8887VvCVWfYcFSF3AbRxVktwEgbp9CVPSXvqg9F9gm2mbFBkFARE7BhkDXxm6HLtxG275UnUL3qTVa95DG2x6",
  "key1": "JpvhrpGecV4YExZNyYUahXuCZw2FqvUShY5hzaWp212N41weNGLm2USoHEiDcZavRuY2cGrECH8141kasuF23SW",
  "key2": "ruTXdrW9KW5muM6ushpkPuwBs5RrPsdk7KUi37ZCCYWSYet9viowB22RokUcwTT4N2mjEzZq8hSzzTXQx2968hf",
  "key3": "2Rk7PiF5AKgbMzagLGgkR9d9sCL2Ub5ppWEQQz8E5KEcXSz4QwSaAhBw5PKHFh5RPUmeKsU2HPTW7AouL7pM92Ew",
  "key4": "5zMUfaufK8bxYK79frv5e5mEFq351zMpMi9i7TugiT7NudtuLgSSnriw6tdJmqHeEm6fg9CqoUaHxTMeKtsrg1NE",
  "key5": "w6sguKiQNJsWdfDzeLdfJN7waNH4cvFPd9gV38dheYAoRCTe6UBZrTfJzvEe8L3RMPNcwf8VpCcbAp66MDhpULM",
  "key6": "2NAbzSZX7QvNSKu5MuNMXJ5qCj3bsDrc98Uzhesjij2A9PRzHTj2o18hhReqTrxdKNqm6R4cNrHC5R876zLPcrBj",
  "key7": "37oho8Xwt4UbKBUPcwPiVmhYq83do432Rx23L6J2Wmo3R2ypyPvDXMq1xWkRhNBBJqD1SZn7a6aa3UiVe9eXFmTc",
  "key8": "pBZrZm9v7Hk5qLfEqypXAo4mHiMapdentnk9myVgnicQKgaFYMbpAFWTGuLsg6rqESBCvz2RhPAiDG4Ct7AQpys",
  "key9": "5v1u9cHdNZ1xkK9mmyugshJLepguANQsczqn1jGjP8vBQBq4ucAvPSru1DBBj815HRM3P7jH3n9aZqDUguPrWnrE",
  "key10": "5ManX6ybXoFoWQRaTRszZVshoSDox4E9ESv28yWamNmuMEJcR9sx7kKcWUUQMsoWbqNFBHxWjVzaJ1hwUUvYfvxv",
  "key11": "4abEe51FbJ6jWTzbFb7Lw7xiSUfsZzQYiH274ybE82pXY25owH9xZqLkK5DDiJLB4d1qVKpoZbpVUbdZAzP3dAbe",
  "key12": "59tZnmjcifV5AqdGy3viyx8mmcMkHoHT2S1CT5ciKwmqfsPqTpHz9xyoSamCRrLcreNu2cS5TRd8779bWbzftHgX",
  "key13": "2NxGtntEXoZu8NDT5ku2AGbaiYhHD2iok14fYeB1jy2gXeHgAb6YcgZ41ZV3UU1mDRJ7agRwGQ9eH1E6me5r5wKS",
  "key14": "2EhKqRNGWmaK8E7s7Tqfu8C69Qv3r4Mqu489aFMs25t1EaMRjdBtLxdgDShv3z5coVgUWLxA4yvvpLJ1n45vHY7u",
  "key15": "SMwTcq357nzApoBywE2sgQoi4eLHMoSZkVaNJaKyS6Z43JDcs4pKA7UMwkSt7spQX6QDAetLRMbVCrtNT6GEjQ9",
  "key16": "5GzitMVkgEZXRaA6tFM2QBKSXceBodvEKm1g2T8GVRoEWVSE7k48h3VxGfF4RrqnwGkxCdTphMrpy7DD3Ff61nmf",
  "key17": "3qR3N5w989VEmeKanxnEABT1NK2fzjjf1wRLrwrNFzbWj8ByJogeS7xWwM9HKoPsQq8Nqt24GEDCNGPrk3KezfLu",
  "key18": "4CyzEJ1jd58ZL4iJDFAyQ6zaWs65BJD1YCdFNUYeMkTS5A1g35XZAbXSNtnc1LHCy8uYeUyRDfx7b39ZGWdZYZdp",
  "key19": "4NXbm4mmfhNmJqZHp1mbuQLhHuWn2RnULJvKx7GieDxpvc2twNXQDfgPN7b7YM5XLxGAdUMSuK8UA9K1yD14i7bN",
  "key20": "4AwqsGDTX395c7YAtk6pSNiC9SiBCHVMKkWjaVa4mYNu99XX33EL6oCt5Tvr4w9rH3wvPZDvkYbvJwYHBZNoTzwu",
  "key21": "5AB1VX4BfMP2Qn5gvuPmonvLwpF8qD8WpoPFkqgzjEXtVB9sxcZ5mJw3MatWFDdyKze1TaKJqDNqXGTdSq8HupH9",
  "key22": "4P2aVwu6s1dgKFxogSeRAERsv5jVwkZAgeKQeEpD8QeQgowTEXHVVwwzXejTk6mgetQdnjKk2Q5YHmGMDHxGAchA",
  "key23": "4Nf1z46YEUjptauxEL3do4yYDTYbsoWKUWuziawwZjweJKTpVxDfokSXLNYMbNPZHH5ZyafrXga5sxf22aZcrCJJ",
  "key24": "3NZE4d3fZfYUJCZU6vRzbuBuJpDZrRqSQ5AixGGzZmWZdYoKDsjatdtUpxyzgxcYwBs8aNM8gihCBhkeC7VBmkxK"
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
