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
    "2B2RMowxURP5CS2zxcZsMbQt2qY7kv7sTuk6MNQpR182inGkjPyifUZFWdUKH3jLA6au8nw2pZ74TpPfE5LcVCdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GBht5Y1K2MBAJWB9WTCkMXRtRSTkzCDzHhDJV7obMmQFuCmVUxyfMPfPvwottzPjKSQ6aF5wFLNqAudWQaR7Wao",
  "key1": "4eiRwaEFx3CrAcs33eQxecZ1T7osW8Mdm1CYaTiuctqs95V9La12yhnuswDiUDi1edQ1jf7J8PpqTWLs1xa2UEei",
  "key2": "5jPJykrNUiLFhubTLknRDsgKr3N8Cqpdnf8VXHHwCz3F86GKVdwLTiK4qCMggFKB3DWRC3YwJ7kWUx7vZT8QK4eb",
  "key3": "36H6SWsJ68J4tBGc3mqmvAAsTdbVTxADF5NDfqCkGM4mqkxeUnURnehhzLym44DT42ABLSXAR7EQPANXW3ABvzX4",
  "key4": "4GFwAzQZMHMsF3NWL1sNPUJ4ezU3BxckVAJguNihaw6ZWDDA2WMRmPy9NkBrqDGf5CvNEfL2cjDUdnGefaL8oBvH",
  "key5": "4rouycgEcjdRq2cnPS1L5vgAEJu9NiNEEDo8nzszyXaD9QV3EEMku8KFrB7xV16XUHZJa4q2yhAJGgKnvR9VT1na",
  "key6": "3fJjPJA48z2RUFuG6vnm9MQ4zoScWAPWuupX2gaFRi9kD69pvZe13K7HjsRvk5tu653GwrEdmgrnx89phDGqTFDJ",
  "key7": "2WthHEpfE8yyhhUPgpeX4YKHjP6fTRxAWzehLxe9r6wZHvZKd1upGqYtZEFhULUWSSsSTec2sNhLPUUHddcCALTP",
  "key8": "3Evcx8JV1fNJcx4NvTSsycCfvL7JPRqRAJ9rLuNVUi6AvhBoVpVXZyjdggJAdGCfuPNTZH53zggPNg6aJJkG7AsY",
  "key9": "4hZzVVW3fDwKSPrb3P9CBrhUBpisZib4X7zitrmvUoNkL2GTE7pLNw3GJ17kk7UrZxgwd2QUi8hZZB5ecyiAoqo2",
  "key10": "22iEmSLJFMaKAyQXFEkCD2XjdV5ZSGYE3MeWUWpDcCL6nprneSYrYZteYmWm9Y1WT9g2ZUCzQ2KcmSZoLjhZvRNN",
  "key11": "47exngGrPVj8o2HzKFFCT5AKB8ExdmjqSnrh3RkHeShsmRjMsfku8GrNWDvSk4y5wixJcbgiM2d5ddBY4fLJbxbo",
  "key12": "3HBQz1pMpE37pSC5NqUeLr965Ys9ZTUuS26gqCqtmUKkj5LU9qrGG3KVF9Vmkajm7ESEu9GEtCWQXFnRZisNcRP7",
  "key13": "63hqCx9eAQ49y7nyCju9zKdszqjjn6fggGNGWjj5s19fBSEKH73JmhKkeLWrQibfX5C3CZaincGiHt8RVK2L6VsG",
  "key14": "4rMJyTkLewafyeHUswtouqvkgxs8bMuKMQ4eqrZQu7XyBQKe7HZB4ATFpHmWZZRtLepsogH4HTeYUxtM77khhjQ8",
  "key15": "5BughmPyKAndZBr2GdZg2zKrfnq5SKCL7ht5CQYDbuCMWv8FcZATjTW4epuYYVi4zb1SYALLYCyzTyRZKysJJCDu",
  "key16": "fZcaB7ZRK1PqpJSfSaQzQoG4Kr6UmETMDNd5fVEyMWKzkLcqScjb6p3U5UWunLhHR4Ah9TZs7briyJXuS8YDt1E",
  "key17": "5LMva5sqhz7Gz2FFepEmLjFsTSRsNbk7XvV4ctTzBcriwHUzX7bLq3T6BBTuVFH7V27imQRtGWmvBZxwMu85eFr3",
  "key18": "5veKf2vLEMiMPcfzjuPRef9yWZtDNuFSgA5YeUNf2r8Hg4ZWpgD7kJcvhEu4GfXVapUCur2BrXRBReFTcjLdGPXj",
  "key19": "3686WwXbMEj9mxGjMhWfyaov7QgF4vCMRTna2DhUtZHp2rhYP4TeHmQYfNvqLsrgycgSUPz7Gt9yhLq4zV6wA67L",
  "key20": "1KSJHuUVQQHvojmPTetQ7aoJurAXo728gHAAsVM7rtGJQgWDWhBDH4ieDGc93Xr72vfMKS8DXbykRMsg2HZkzyJ",
  "key21": "DUsuK66w3vVWs4FBLmHBahrvW1nHQuPRvN6vEDXpBfVArHfg3tbhiqAAUBz5CM9xw2cZAuKtfB3Pu7VA2DJiJw4",
  "key22": "5WPfR8wx4EU687qVfegnyxKUcTorHkGXK5daRKAi2eCLzan6JR5JjvSqa6XQrymAq62bEw8kZwTXmYR2CiSebWKr",
  "key23": "2vgvkwHqkwJCaxLg7DabJHmT5UrqELQx6wvpEiKPW53z5cME2Hw9uCCurns8ELG9ZEN9k7YQhiFQvdzBvPWiE3bo",
  "key24": "CWV24uh7EWH4ap5oLiwsdRQ3WYVupdZaGknDbYJbuyTsC2U2ZBP7Wb4FAiEUXfTofR6hNFtGu22BWCkcyDnBPKR",
  "key25": "ecejd3NC2vFEzDzN8VRHFrXmctzpyZ3rSsphBoiugrhmVVkCUWjoCZ9x71T98CXA4zwnkTSThtB3Y8qcPvJsFut",
  "key26": "FqKi4Nf3F9phtpW2BMY8vnVSgnsfdemxfqhLetx7jLuJSvW6Y3dzESBnRmZrrWsQJGzwXSYerWZeFAM54TwUBk7",
  "key27": "2u4LGrN41R9fdtbri6WCUarSvGmY5BdAK2uk4KMzoeGNeQ8SQvWkL1GjpzwfsjPh9zYfKzDEH1DVD2gYrGBCYiVV",
  "key28": "2xy93XY3JcHVUGQoZr5URiDwddU3srs1XB2AuR1D1RHQ8rFagJtRpb5QttnMMnSpEp4Jdv6UPkJoWBwQLQZUpFKh",
  "key29": "5cVtkU68YvudTR8uHQ7SPm8YhozAtrQ6ytJ1xUai2xYwBNf2Xsbq2XAxmSLaQGy6sRoUQCzzLH4P3LhtyHF4njxu",
  "key30": "oDseyRbnxnuNwxYk4yUFuD5NUUSinnyCRpCdqUhVeSxEpGHaoyuxXe9DiPYShwDqtVeG7NofdB3N3yYCK3XjuL6",
  "key31": "3TtcxpyqthnfK1zb679Hyf8posQASuud4CVf7fdn2owKXSfDYR8AK1pcKYRB7X38JZmgUpuJcGMAjXewSV3i1FrY",
  "key32": "4asjsE5GELdgJ5tTaJJV8ZVXuMY1XA1Dn4TyQzwYcFjEQKaa1Cv5Sqi5U3NcWFxHuhBv7zDPyV4vyGkiZpHy7k8T",
  "key33": "5d1svHu1brd4H7fCNYxhH8T26EPPmsJim2nNLwjYMCuVpM5uy5GCha1BWSUpPy4zz2oRWp81pxgzpbXMPRgdmFvN",
  "key34": "ajazthH63CRdo1UFtQRFG8GEzp2mYaYvRBAWatviR1GsdUJSNo3JTWt11ZJnwNUVPmS4cYTTb1fLKRHXAry58XY",
  "key35": "3MfZZjMuzxYd1rEBLCvvWJ1gkMwuU4qoax5nr4oQjLdAM65EVf4YvcQWacTijeTG1rmSLKnADQFRYWgTvotGhDT4"
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
