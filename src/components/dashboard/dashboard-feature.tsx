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
    "5XPt1veVbtG7cPwoGWFZFFgZumGzABGGLQBNespko9S98kgcFYw3iUYNGd5y1cNbWadDX3yULVwWTpW5xSTkFXKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pGugM5a7rU8adLPoGgcSxU14AefF1omx3fbye6F6b4UM6RjCEJyE6q1MKWW1F4yyMQoCxJv4mfGox2b91DReKbR",
  "key1": "5N3UppsMRB9uwMv8t6mPWetgFZPGY4MMNub1jf5V5TAyuEF55zvDSCA9epTCTuwfdouoJ2MZUA8ZHMeWBs6JwJXE",
  "key2": "2h7Tm8hAUnMdXaQZfikwFSmQZFvKLLdsEiLJZkG6T5PhQt7qAAtK1bUGG13UcECHN1Wf2H6P8UCvEH9zCii86Xwb",
  "key3": "4gXaA2Zt4o2cFrjkgx73qwPizHb4GFx9EnshbJHx4UwxxK6vfb57Mzp6fznhx9Ex7sXCLHLTA8WYrv6izYWeXKBT",
  "key4": "54dbbDcmmMpvgqWWyRKbb5JEf9Utb43oSLEE6bRu4J5z26rkAsr4eCYDGKNDws8FwUYpJs3P6jpkx9cW8e2auvzJ",
  "key5": "4F3QvLbfG1aYMwoZLaNPnoZwApVdumhnrp1duBhSn86WuHkVBRzRbo8TUiJZDTRjxpHXi4nCeuqtjkzNazy2zkVJ",
  "key6": "4Uj42oDbw3pz2o2XsciRLk85JRSKFzARQfD3zLGWwkyfk6K5EyiH6vPQobdGnroYgqYohKMaZ8PUYQdkFNsWqPbf",
  "key7": "2gSb2gncbq9NRxf62WJiP2xt4DKG8qC2waZFkcsgwFsZk4wuR1Dk9de5gRHz7edoPSAQpTYscPfVdSogEBZxH9cs",
  "key8": "5G32yamn6RL9q71zj7Z4cBDJR7f6ncibKFb1q55GYcW4dWEyrFqWxX41SDVg3FaNDW9HjuhjNR4kom2JU9XCmJaF",
  "key9": "3RKUh6cqUFJEyhbdSRytnzAxw2j95nUczDdWfFR5DFBEPRcQVJrFv3utrufzTj8U5Mq7hoQYQFzKZSHKeQMKsKmU",
  "key10": "35sH1LE2EwSbvU39vQYa8Kr7ZV3aqpK36dGfBjJM7TaJvqerbsrPi7HJ1Bvvkp59BfTnQ6EN1rAMxLxcvwWyZkko",
  "key11": "Lpgx4qYnmn9tQahoEFPy3STw5vyzkXcTxeZgGdn2iwBynLgVmq8HUj5ha4n9siDm9AnE9DT1FYfnHxJ8n8iPWMc",
  "key12": "iHP948FHLc7uAAZsx5tt3aZWyhN35VSksrcRLaWZgEgyHJGY1oQzVXFCNCCtWGcYCBxPnHgrpamTyf3TmvnGGdQ",
  "key13": "2SpxDfvjv3HL9w3gSRJy8ZEy2Xj3HJoXSG5a7RhYAF4xNon8TbdhydpYVfwMW1guJpBrQ8vPcQAVDesUn5nvJkpc",
  "key14": "5f6oWWkdiKHGksNq9VnZth1mJqAx5M6Mj9gRbdntMWFe3Nc8zh57SynuKQrGxg3YyoBdUfdtLSnvKHLE7Cv6fzc9",
  "key15": "WGLcE1E3N5zeebhgpu8LprUzhEFfVsze7jQVRkgmruEEbmSYc8foUFHj3vPtW6dewq2PgnZH2Wc6BCUmweEAKCL",
  "key16": "3osctpRzmuGSFG6tardM5mJqsbCFkyi2c8enjkrtMY9AbXm91UkhDXXeuKtrvZEWDQPc3GGLjaWg4n9HgqEFDrHe",
  "key17": "2Nugezxf8HWorGTLRKpPwz4Z2iJKyTWLsdRcBHngNh8BB4U1h1Awhwn2r4Qyg1NRqKsLTyKCBB6N9dmnmL78qqm7",
  "key18": "5VVHbhozh1jW7VYoCb8NVD3MHwV7mqS2fgAxkeRLpsD4Gx1eUbYArb2xo5PKWVWK635cGag1YJaNqcxSmiscm16Q",
  "key19": "2aTfNDYfiZ3xPyJupbaLwkShcKBcsk3Usoi17iXUwDqjHYCzPvoLybLQiADMra5riu5Z919if37Q8Yj9sVMbXuup",
  "key20": "4YoJLbYnrt8Ln3Qm4aDxBwBR7d5LFr6Tr1HZkSMV3mHSRDgeaSAnqMsfLfwUCUkBmEE4mciLMWztFCny8syFULWR",
  "key21": "5FTVrs3Wg73RBeA6SVv9XccrH9nG9x5SnJrfEdRWdZZ1RBwJweaYuKCz2T21v5Uzc7QMucbXnRs7ySQpxXMGnWYX",
  "key22": "3UYoJZJF1qTSm1Y5qQype3p1uWmfR6NRuUSMhbYoYMVS4op3DsbC16PA4JcFH73AAVzscG8CW5Cash1qgSuSdyQ2",
  "key23": "tTGyC4kdcnfVXoNimtv7Hr4bT7FxrA8GTyvmBaDNshJQwKpoAkKTc1pxdSghKihuZfNEpT5EpHXrp1LMFLUXVXR",
  "key24": "4CNeCGsM9h7ZHjacfpKCJNDpGe56PMZQmaJgeHkdSF8nWjsCw1GJTXjiJD2tmcmuxUgiv2YZGQjenJxuA6hsqpct",
  "key25": "3FihjkmKD4oZ4ZJ32kxULi6PV64ksS6SbeCg7jtPsPnjQPNoHEqFBGGt8vmaTi9kmMSybjfgndFoHSWxBdQrvkzz",
  "key26": "2z4kf2X9tP5DridNnfTn3q29HHj6UYXfxnjaj2uUMxPtG3gpHP5DiV5EWjxugEq9JCEimYBgyDP7tSGEZuRCBbrY",
  "key27": "633TEGQzsQcqxGF6aVv1FYcrVy97pstHWwiQ3tmcwkQZuQXFxr1coBjgY5xhBwVTh6Xks5GMJnuPQYWhbcE52gwE",
  "key28": "4mjJCWs8SrC6djaKjUQP28iJTB2NjTSJdtAUn3aD1tRVDixq4fYJkCV7rSX6EYDFEBmvoqL7qZ4PxBB7kVWib9GY",
  "key29": "2cW4BoYSyBzGGGN3Ttot7wGpHAjszJTDaeE36LTVyXx4QN7ubxVLVvdnoGaNHiEi9UA57ozK2YPqBMqr65Z8fEHT",
  "key30": "4kjM6abqdTuF1LHVB5iAcqecA85MAyHs5qHvEfuNBa6RfovSxoBrViMMFWbXVKCnmNiVsnVnLF7fNnnco7sGiwjY",
  "key31": "2s7dsmKRYyrGYBvADmUWMPqDT6ZxvMzLrBtzr6yjWs1gRn4eXY5WPMUNoq3ZQ1PmRCgLCS9zjduqgs4UEeisV796",
  "key32": "4sK8x59q9fpffj7qDjad9jnzxjq6ryTkGL43GaQEAzRuwXudDQ8rVmTxr3CbczPMDorTpT6x5pkCKhzgxVpd3qeN",
  "key33": "2NNhu4aWPZZ1MLyct2vL6aLXitSBjuW1B1MQDzWxuAu1DUb6R97UHoXtNkgC6oXqNxFdxEkSoKongVV2w2tSJ7f",
  "key34": "2umP481ojDZBF7yp4PqjPbAmzdHpdkWQXgFdeNNiUyyZawzT7wdJ1bdaZ9BeaEwpJJ1CYZVD1NNNYKgoHV46aLsJ",
  "key35": "2tv1CuVXmyvD7sff9LaRer3RyEbyfgFDFg58wE4wVwin2aEkTw9BpnNR1PLE2e5ypLLGaUUn8xdQHjiQxgHANdE4",
  "key36": "3x5DsSoAGbo88uECFz5fKwP1QHgTD5aQjVqKHygvai8qsU1wj6q2AbtqH61iySJBn9SSuz51Zb2JhcCcsHz8c22R",
  "key37": "2yQSMCWQkwLPN8gHfsCE8Ej5zhRiKdGCiUdQQRiYxSdREDMNw92nQfkeTYeQAaxGrt2w2YAFDcm2KxgmC1RvtdR7",
  "key38": "jbEVe98EczCEwBt5yJukMpCcZpeg27Ks2jg49X6tgWF8tVvUz62KXLq5r3TJrqSdaWZMsCWgWtp1zFCJnNSYmRZ",
  "key39": "3fV6cBU9gwHPwwPaquCxJLb9iiyrqV1CyxqYW8QSb9g1n8Mr6byQacqy87Z9h617D3SfEA3Dgq5rXxwwCpXwZUXi",
  "key40": "2WoPmf3EWbphA9muTwjpqCpnq6qNLiHvamkh3KMbk5q37UqZnomXvzZnsbGakjdHwVVDsEPHFHgifdsc3L2kkT7G",
  "key41": "2s5bsBuMdoPVimkictidCw22yztSbtySTpjwfsPTKnCgRptGqUBcLtTd35ntRB7uXX5BBocGHGX2T5ZLqsMgceme"
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
