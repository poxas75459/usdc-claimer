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
    "5V2UyUApYrNb47MgkCBiKa2VGj2UQxsg61PVSzffNbUm7SZmHXQMisyKMjFQ4V7XpGjBeG1Pa4V9AtUp9KZv2xrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pWKAQG7c9vuJao1mzKk7KEJ151ffo81QYQJ3VbpUt8Z4YHo35kGPwkHEgkLcCfj4XCueXgKRGEqZnzS1DKXmarq",
  "key1": "N94higZPSCYxaot8HvmSsm3Q4nVXshYG3FF71wndQe51hLP96iaviLxY2PFQLwtbUuYKQPMFebMnSrnVRQ82oSW",
  "key2": "5frmuT1oEzgGGzDkVSqoZfHH6EP92y5dhv5hLSWtYufFDmoLF569Gb8FvM6tB347opfVyvm9A3ztDLsiAGtSiAgQ",
  "key3": "5zfqagm5JaEVz3o5cYVzU2CkRF6s7ekHm8xbYsoWqaGfYQJ3mbUqt3gAiisVGgL98Q5iuq42gG1qU6TM2iaP6tH8",
  "key4": "3sCyyAmNK6Z6SdcBLdokJ4Rrq5bsRZyMBiRaVq5BQWdPGQrCQkpoQ4N6HUQJ5PrBbY6FzpDmnatCSMkKQPhz3MYM",
  "key5": "39Mpuv8Hcs51z4PhgEVe2nC1o58tRarT6i4i1RaADMcPr3w3gaCFSn5Cx9BhcsHw5Gqp7ZAhuWji3Yr2hHuCtseM",
  "key6": "5s79yeRevMZ1UGZkLaHu6aDjRc9RLAadmk6jEZoVjTChS5LC59NTWUHpxRKuxLghcV1CpT82LTxEqbfJ7Hw4UuEz",
  "key7": "5mGnhGSqwJGZfvyQSBKofXM7ZhHnijCR6NfZdVYZcH2LHwLmoWZRnvy1oZp1GrANdr5c1VaKHu14nwoqiPnvHcWZ",
  "key8": "2NFwiAHDE15Re6dVvDgJUvV3AkKpKFJRdYTVz5iFt5Ywivf6RMf4sXuKN682aSgVZ1J8YvY7BKBd82L5sc1fd91o",
  "key9": "pS6RfW3Fhgr2UuipvXFb6ifpdJZ7RhzUZVSWez81u8xep1HKzHTjx9Y4H3rKN52HrUZTxh8jb1zkyzjRDaABwv1",
  "key10": "2G9EAN4s7QHkTihz2EQppY6iYEjLNBQvE5yBL6KPJoFUr5W9eA1gxLHYEqevyufXX9NXPCmb3VM2XsXSL9ZfyUhQ",
  "key11": "45CpiGoYUHwq2rmrKTxqrCq5eAX471VgCNbiETW5QDkoCbWvoEqjXrKPTEzKCezhAwwWC3oCKSoBkmWDqaMDKqNZ",
  "key12": "2JAw571iHaNYcHJKbHoa1mUaC7ogoydHbYa52CmQwYP2pkcE5DkxShCuRW3HjPSkTxNsDQrFQwL6Kyg1pPem3CMG",
  "key13": "5Xrdgo7GcMJKAPtu7YgcKBFWTRqQaTzBqDkLBc9pjr53wiffW8EBGybdmeaC8esSn7VDUAKVDnam2FHfqwbsxpns",
  "key14": "3ZgMRVfRG8LUyZNV8nH4vJ5cmivKwYNmXUdE3NsAF9LUWvrpRUi8qonBWb8V9XJC3Tq1i2XZKE6BVvp5NfhZY4PN",
  "key15": "2z5NreBRRZNGQUsyR4PGrjnQtBSdipWLPnUiWVQTewS4yvVmm7Wm8QCiewtUeRv7i2qUYzxGVpnCeQuJW8GXi1sf",
  "key16": "JHD7tXRCVeTsL52U9zZqp93Ksf34iMsxowMPxTGAwkr7ybmS6DP5YHDT6HQdhBQfQK65dVuqAETG1tWwsCKYovZ",
  "key17": "5e11TJK3EVTjSS1nxMR1AGqP5fYiMuir4j75D198SV8bVMCeTSYrJu3GiSu7tpEPLxK5ca8ieGu6yhbLRKebAitm",
  "key18": "4aFXxU2HtXng1bnGknCKe8d1GRH1w6www1rouvqtG17mtam8zJaTbY47tvs3VxurvHeggbxWtm9FHb16mGYJ9Z21",
  "key19": "2pVV2cq25D1tHAEJNucpQfvowg8DB7ku9wEihNBv2yqqm9vmY7HZkh8teJNR9mvtqKsPzCfFEB5kXVdA1VijXmYF",
  "key20": "5dsyEQUwFrvQ5tZwXqvHRfeQom3GrZZT9t6AL8ETXqYJ6ojbf32vhW9YVW1bLmvJp5LDqjzRyvcSTaScsWq45Y4p",
  "key21": "57krJDLgKDMuqcLwjVv1Tu3pTdq3B19eUrF6GQw9Y1F2BmdFXPWmKakG2ue1eRiHme2YbvX8oSnH4e38QU5AEhvS",
  "key22": "AGjTebHy6wdRmqz7wm57VhnnigfFCnBVDsC1n42ppumbgpXB7LrHfFhsF5V6fDCGQY8AHtXL6icBvZtRJiwytep",
  "key23": "5mnEDSFhFLg1V4wiYE5BkmrqmMfsHAkK1d4Snw4esm8aB6CSUNagetSy5wgf1fmbtndoLKPznEkLesVQVHfrkKke",
  "key24": "4nKowTscfFuMP9APnEioxqewqFnn2yJCM21arUbcmjLYAQdyQVve6gvzB4ptnPZgQ9A5gBiUL1nbwnADPY3HyH17",
  "key25": "3RstzBWvbrKkcrQpyugSPCqahnEWax7qyhevY72bPBiUnBWLWiSQryrGetyriGVXk6fXWtEBvVJjVbBUCcodDwVP",
  "key26": "3kBjwKERSav9Tcr6YLtaVPK9wuX4S5fvk4YjtJeoLP9ATZQK8tFwrJqMYGvVfy3ntzDQ8mXLCj1BjyJE2dsLJiFx",
  "key27": "5b5S1BRginXqb3PzuhBPmPyg3Nd5scU3jMrcJveMDfcBDjxs6PvZpop2Xs46fso7czM4SVUa6Wq13NVLxLKutaox",
  "key28": "4Yad6p7Y7EVLv1vh9fS3wXZcv3P2qELxdoToZyhqFc5Jf8J3ZtV6R9mfK8HCQbJG5FUzLh65MWdDmAQJ9e8nHMsx",
  "key29": "63JbMvWvWM8hvKsLoSqoNiEbMTMXpvsYS1X6zhvQBggHBAyK8M4jvycr59PtWJREXhUvMbKn7vRk8FJg3ixVcfFc",
  "key30": "3hkpKS9uktWaWgZsiQs5X71a3iAm8TaMBhbmMKF5yvquTd791Th2b8PYpD5HJCPKUZamdTBEM2u5BEhtmQsbsSyT",
  "key31": "3btCqTjidzgEVtVSvoFmaejuPAyrhNbzdrBuywdFhkGT9EVSYhTYSYsvYbC8F6HmrTjyQ49zc4Z9aRud92Uk3VjP",
  "key32": "7JwKqWbLwmnte3zF9pkb76REhraMTDB3EhhMG5cU7YRNGYJUbMwqJox7A6FfJozvwTV2mFhLn5cEpLLEGJbzXES",
  "key33": "4zdCJacAEaES8KgxxzX5At7VpR9BSWLFzkCUqZFUf4zPic9YrXeVBSqLcf7idtsJ4frBGUgpBSRpm3kGZUYguPNp",
  "key34": "3uu4rFtxCYjHkD9oZbJJYKzTF8dRW2uT9Rg84YnKyftDZvd55cpY3pVCL9oar631K6ij5bg3AQoRuYfd7pRUhTi9"
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
