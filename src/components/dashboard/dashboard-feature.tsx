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
    "2dpcusdANkc8qtAt2chiD28RnE8ZXmEcsL9hSEY6rR1FYxrM9xVyoFX9pEDhQeNNKKUWaeaw7PpxfMH2FUvJVAzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hv12h1potkqDukVHr4N6F8wFrk6Rz2rVxQWJzcmMZXw1581RTUHkmwDv4cHzY4iapVFzBb89WnaABgPeLnqbdfq",
  "key1": "yfeTg6xYv62JsNMBx4LeBSnPeebJR8MVmrz4Hcw5vEPx9MX7KXJwAUw6Bb92E1vDGMSBwwPm8hXYErDvTPuLMQC",
  "key2": "3PAah9dgxm7FB98hs6rrmME9RfyAeA2enV5UWX94nfw4dqRThjsKmqP9sjnU62akuZvLNFwXFXBbUTBd2k93BbGX",
  "key3": "48oZRREdM4sW5AnpzN1HHTeDYyFuL5wT4ZcvU4wqptJwLxf9s5vE4MP5WJKrKL8RfPias8sGXCTVzwKvVRXDc9hQ",
  "key4": "5gbAiuDp8Bt428GRiAiy26NLbByr1549z9fptWaSA746X95tWo89viA8kpaZP71AttV7rBFMQqGMgVK95FPuyMgK",
  "key5": "3vjRpwcYMacycBf1dVd924x9HN1X9vFPgx6Q6NWfNH143NCEVY3esRoM7BCdcqLU6gE5sLV5W3eTN9JWuRXoT6xK",
  "key6": "2AGYfCqmMjmiSY5xsExEH9B4BWG1Fm5zJjqGyMhxdS7qSQzU1JP1SYfwfhqDLGyY82wrCE2Na5NV1hKcZ7JNcPLH",
  "key7": "2WbsLt8Bj4ARoXYdwFBbBA6DWMJFK3xAoq8qq2AQR1TELs96uwu8D99Fiz6SDQz3a8wseG4e8PymnWJXYWScuB2L",
  "key8": "5ifWPnGffCFeWEKV7P7p74NHJPsUjma5wTXNKovCDbYRDcJFfbc6HwpvPsT7WDqJwuEUJyCGLdn3KJtzgdgjnB9E",
  "key9": "4477NEdskt8yfB1oEs2dk7Qhy6H1vqmemnxD1wqZZWaWbrS62yJ3b6M4KotEXRLZPZHXn2XjcR62epHPStLH3d3e",
  "key10": "2x1q1s3Y4ebiKgWTM2y5h2A3yZg1jxWt8zCdGq1egvscuspih2FY8EF3wT4ey2T1JZ7g2xXLmG2nvjRmSzzNoMBr",
  "key11": "4iDczFmeahhYzfuKQ1auTAsv5vEeyGhuVY3HNhpDaWF19Rghw1dromdekUsLdeCP795ANAyqWvAWiKHGphvEA9Jy",
  "key12": "2Z7AsY1RbNfq4MrH4eco7dv2zJcMVgCsXfDBGPwMxuhVvo16PMb4UPRnoHptwtoozsu9hVbqku4mn1wQN2PtRNYZ",
  "key13": "4oGbMuXg78b3V5BQ7SdFAht337SoKMYfFd3gfpKsc6oddeLzsEwC9vgKpmCMXeBbFZF7ByHKqUowrJX9sVZ6uJph",
  "key14": "4M4AQZeVHWHkMNJx9fABzaD8a5Sq7istByk8VaqZEf66SvrbZzJCZ3vXZvp1ZSa8jmhRKQ511aB1n57EE3rZavkh",
  "key15": "4ZytxS2FgM9J9Y1SvxuQEE5H1GXbPPQ2nHDfvSJsA4se8vWJQd4UnfaaiQW6PAoNnUxWrrv5JiHAojgHtE2o4Pf5",
  "key16": "4JHCvSNGV88453Vqocqc13WQrZMtyc9b5wt9Cyvrcdr4Zfq4HdWJ4FQy4bCzAGFr2gEJQ2XS65T4YaZ82ViwYp6B",
  "key17": "r4niyTguXPwJQ9LwryHbiSDXw7eHyPo2FtF31VrVPgyGkH56i6VUppc6u2syEa6gDMDtfLXYCBQouj8UXvwoUR5",
  "key18": "2rqQsNsE3bHwAMLJBuT8ScYpvxmspAvLD5hEEgDNDhk67iVxdY7BbhPy2JACMmQMsJFG81eTzgGDi3KfXCYY8chQ",
  "key19": "5adQtNDBcjapAvXDMi3FSwdP6wNXeYEWNCr9qS55jGUMcFgU1TeKDu7e51CMuFgMSgeUJXEP8dza6PSZVsmuodtV",
  "key20": "bh1QBcvxe3GbkYiLLz1ESY9U6Pdq8n9SuVW1XZTYyJGcCe9gMxgnCni4PpCzDZRjutfSNAffptgseYjpZkic4tm",
  "key21": "2DM2z2isvBoUHRg9uYkD13dwSFvTxNEYwYYivR8VBBpQVMrueE4b4eXtGsgGNTC5JrDhagy6Yo3FpuSsxuytZpER",
  "key22": "5PGvT26HrAnhUp95WgwaxYndV8GY4ZCbFZhvNNGFnpeA2BdSUtE3XWrFqGWju5p4hhT7QqAy3JyFMsergv3FVqV7",
  "key23": "4gkNkBikcDFqt9eDKYfajaY3kXxJwwLAyc9ozHSfDCoV9LQ3U29wFgbZ82VgdyurqeiTtAvHHeWwjzYe6V7VfztA",
  "key24": "asASrRqGYbFR6XHc2M8VcnTsrQ31kuBMbhrcu3LdSuZDAiAXzGNDWkUtEuWSifWd5p6vbPuv77T1sxtHpFkSmxf",
  "key25": "33M3FMkentrnRuzBqAg8oGVtKrzd6tgptraGq1GwxJsd2Y2VwHG8GG74RHMjWReKx9YsNQx6EMbfSqB2kPedqyW3",
  "key26": "67PzmKQgV6K3BzEtq2tgGb58syWqhBzDxu5EQiqPKcEX9JkmP3sznJXCUmhLybPftysmQC8jMLztRtxUE5GtwbvY",
  "key27": "nAqKSnTXJiB8DhdE29oiwS63AZsCnfsxAdNfobthhwDWCnUMXFc4S5JCrFPZpirvrBNrEU2MyzN35JfSNwmp24B",
  "key28": "58Tu6gCgfATFfeek2ZgbuKFUrXkgMMDQBXpd7Vk9f38u9FAcaQEF5RFawUA9m57gVriEg1tr5pgFPGHvCsSPAZQN",
  "key29": "2a3C3BxCRZeH6d2D4bezLAfm1TdxxNaAhHHdT6aZG32Ki1vFiw4RCs4ockfxne5DJePywz9txETSopwKxCXthxeD",
  "key30": "4zEmNpmG98tdkBnnTHc86ibsz3UiGWMRBsY8zwwa3Ltfa4Jd1wRVRsswCUqvAJFyymHa2AwwoKmSwptLMuvFuGHv",
  "key31": "2xW2FwHmbjtQ8ntcgviQ5AZ3QU8gd8v9kmCEt13NTc3isxuJddesKDmKvCxncc54wXFxUACKLPGwN9UyQhwreKxk",
  "key32": "3z6DJQDMyqPqV9qeubjZWqgwaCJ6348bdN8wcohTMDv1BBYSYKyunEND4fGPqiEC9Yi2L19LuPZYXrUoVZco1o4n",
  "key33": "5UDBHbdJ73s1hGDX9hezK4BrdEY9fgzvNFsxjifxrLYeEYYk8hNGUZW3uF6jZsisRzyD4RUEBJppN1j7W9ypXn3h"
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
