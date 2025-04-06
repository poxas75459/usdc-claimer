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
    "NgjMJkpyuqCtej8qqD81xaMM2orExCVN531YSSsbGHK3xu1hjbeXb5MA1dRp9uwF27Ruyk2bdxx4r6DU9oeMD5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hKADYTEvCPFbgxM84igH3UAt4XRJpNc3eSz1fNxfWwwKHugaP8ob8qda6WMUfRiXdg2JtyXWWZ4ZAYDYioywH3b",
  "key1": "3BirsLm87mBhvXAEa7zMzKGKhZrBrAZSoV4fYt2qkJ8n9VFG2JsE8TRjMTnSnnWHUd71UNuXSvVNvszYZGT3cUEe",
  "key2": "48kQMzYYo91dK4FKKsX2266bFuKKpiy8zXaxtY4FgsZc8ac8hkTWfHMBviPiHy1QtbUkxmYxxmmUXMCJ5xR1SxVr",
  "key3": "55VcsRUKgPnrByqveR86iC8xUCgEz5dn4y2hT7KK43wzfSY4mAxDcsLKkQ9brbnhHm2KU5AL5BQnfkHqWvbMHaRe",
  "key4": "4rgiuMpVr3S4w4dWWRvb2H5TP4hxGj4J9oakW5BKwfdtaXCPv5aZJQCwRE5PipRCMFsjdU8LFZ3U24K6DvJxaoqP",
  "key5": "7jLQha3qNUWo4DjMCoNqgyMxsVrvNzEX2K2CCV1k8Hgnb4m1xGuumn3oxvKLZdhunFxPG7nFJevV4M2ZGsAVvaQ",
  "key6": "4CV17UcrYBvLyxoBX1EzhW7T6R2ZrdbPEUvvgs6xeBL5F3oDzPMNuUmTshephCLq39chkNM7pgi38ny71gctNDtN",
  "key7": "2yHEHr95wJiwdZ8oyRQ9jvNxtQhMhxFJiVpwE3QBNGTHf1Rzxp77HCWHhkg1qyuHi27uA97HqjZcKGMpHV4QH8zo",
  "key8": "42B3vMQs2tMdrdDhbb96kUFAcSz9boYuerPMSvwYhVVZKJSVf4p2Jzs495qtDopdZMrjuCWCB1fDEwQZzjdr47zZ",
  "key9": "2t1kCRos5iftnnodJeFutK7C7jNpPPZvPSRm9ABvyVdKmz1pse8CBavMmsBtstbTgUrL6dYfFWipdqMvE7UzFzEc",
  "key10": "3zSmpiK8zx1SZCUpgj9gJwWbWL7oE5sRVkYHqTKxGRQkRZuPn4GRaXaq8zQm4FUxaGpogA7ZsNkRvMNdijGDNSBs",
  "key11": "5Wte1Kzt7kxAYV9j4YiFAawg2HNFjZygLLpL5iDk6HUKMENc2XvmtAV1cCsUTH51LbE7kQFHiV5chXCAZmaVK3Qh",
  "key12": "5mrAume7cz72M6ECLXZxmKtAe7inDh7QzkDuicHiX2a85T1z3xhALJJgTYCYVzb3qkPwNrLUfhaUU1cFcatZSd1v",
  "key13": "5gpo6641hoVBiHHYpciFW7rh1w4WhP3nwKqFQywrHVirNSW2CihwhKjvQLnUWWrv2vD3QkmtB8CcC5759zPjasdf",
  "key14": "3WvjT2cpMiR3PARWV7RA25JxoWFJ6J8KaRH5NVtqrJJVUFBURykbG2cvv2f1AXL5UJ4sXceURZit1hTmad6sEvR7",
  "key15": "3n6p5LfTsYYBhb3zTo7fRbaUyF6ykEiT2SyqCcseifGgBp9fnEM9SSREDzy6VeyenZ6uC8evoVeAU9XnA47whczg",
  "key16": "3SjD4omn3mbBVVRoexkvjPTbV7jfDDiPw4qAzPAaVH9Gfv5UcExC9p2x8UMQ3hT7dT4Uxcg62ZJyCY5TAds8aLxh",
  "key17": "46tLsprNQBs7ZxTMy2GQ7PtVwFK4BL6quLEyma9MTnoj7iNa7nS3PDeDs85aa1ahz9XAqi4oBMSP4ABUNGwJE13e",
  "key18": "337KPDKqZwJqBgMCpcjjkSBqHg2Qu4RBDgjNkk9oTEaerQrGCeqjPvR3JXJ4uG2tc5CR7RhxPrsgzttPLHsVsS45",
  "key19": "2WskYzqNjYdVWU7g3wKrySNw9duiygPm1edxhUz3HWwLb43Kbvcd3tL1ggg1jECpNjNFnxjAhip2YDx6cg6jyJkK",
  "key20": "3DTxG2qZX8rhj1fHweR1tUW7BuwSS3nn8vvDzs5FvPs8guiLB8VEiaR8AWUyXzhJZEQpoghQe5eAqFZZeVLbXbJf",
  "key21": "8nyrn6MZkzigfjBShPqJgtgPqubop7AAd2Y2yzWr6GrCRPzffddC6e7AVqFQdyvG11pp9eYhVjjZqnRcFkQeCmK",
  "key22": "2efcZ3BjqDJhcC7tYDHzEENkdxaKFuJ9iDbgrrHwgBSkEiuLdMiZKCSUJL71frwjLtE3VQjGj7Lq2QQ4bCqiDMuk",
  "key23": "AKdTXtXDRZCGg6HBehDv6dhyFcv21sPTBc7rMiARaGGx9cYfSdxg6mtXeb95GKUzMFR1HRyHMinDH9V2ZR7Exvp",
  "key24": "4JRbZqoYyEoakxNQe2cTWcj5SRJhrToftSoGLbLTzQQiZ2PeRUyqSxxAefRK91rvw8vRwv8hn2NxrbuEkLg3wuce",
  "key25": "3KZrZDsTBn1zv6XR3rdWR2Q3XhUWkcapLb9xhmzr2euVbqzhMRocGJ3kYsLFsAxn49SCgGYpJnpaRF7X92HMrMne",
  "key26": "5FgSxueEU82w79ZBCEmSYPPjYUgc1UDKwiCJkrWTgaUxcai4ArwDfS7d2GmqULxVuUpEr9c8xf4iDH7Sqhvdoz3d",
  "key27": "2dfK3r6KJnHVghpy2vhKX1gHFPQEKrXECbhQjk2MQXkPsNf87XE1MR92H1WJCuQbBZto1mY4jjW3Fny5hzbWG9tP",
  "key28": "CAHQakzMeCAVoifAcHZyQduetiMwhmcmiybA18hVt1Cig8e9VWeJYRJ8Utu6MWQPmsqBGsCFe75EPzVD85LtHSs",
  "key29": "5wTuRDzWN8nYkupoVHy4aRoDWyETZWVeQvjRUuRWFJqVZdWnu6xfz2a5g8seCncH6hEDHegDvwFTbnvZqKJSmn5U",
  "key30": "4w4w1n68LX2bT1NSZ75gRsBMhKytWcn1RJkVornpmS7XRR8vBoLhgVPDQn8LYjRDQYovhCvG7UbUAZtQ2X8BgFjc",
  "key31": "3EFz7q58f5enkezVth7ngySkFVQUD3RGVUzhM1UVkasMUMWhAQD3G2iY643jFNQ8nbTa8DkB3kJQvh6LeEMbxtes",
  "key32": "4nwr742sTpmERqejyaVMP8ir7mUfWn424Z1HznkHXC8C41JcdqG7HvZ5r4eyrE3LLog95pAH1GdKqP3RWQM1JDzo",
  "key33": "65S8udYKp1jSsEL8JGV2TNS1rrUYCa2DDfvavgnU6ULtJGmohpPiSKR4M8J19drjMXM7v4aPMgejd5jKu1FaQUrg",
  "key34": "2cZsmPHpYp57p8KkBRRxySvTMbegzkurq1d2FpV5C9bSBcuZc1eU8PpewKL9Udzo8ueMhFzJcCEShgLNPXGjWe5F",
  "key35": "465XyEWs2Bs89GZ3xfdvynaFsWuuS8SbxWTtBLhvGLsrmT4pkTq66RngCHkn9w4x1nn3m8xmdpRZd8vXPawjd5Tp",
  "key36": "49s2m6hJDHCQ7qiwWDurpnsV7V8u87DAxdXVSdNZRtNhzhszAim3AuwediKv4Cq2ySK6Shr8cPXHYuFobugyayfA"
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
