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
    "KirrY3HwgafKAPpRUPbfWrqRgHKAexy21jPHra8o7JeN1iY1GLDFCTfEfhMFuZJNL5TtKMGujv9E1kT9YnQ2xau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s9adoR5xxAgoZFxR8n3qE8xTiUcSbFfZVNPaHd94D8mAnURqrcqyWS5RZNMRWXJRKhbfCZkXsLW3mXeRu99vhLw",
  "key1": "3wgad7gdpq7jbcDyGDN3UXSYvEwKnwqr4dwSKf5UPKTjVbGPmxZcKTRSyEvEK8q5A3rJtMbGp7MSx3drwRv9WEWD",
  "key2": "5z8eTftMH1LovHXvzwXahanaT3sgWDHcYQCfWcfeP6jrMwmdfKjwruNsKGWyUjGW3AYFW62mEXEK4MEkuNTSiXWp",
  "key3": "5sujiEVeFm9uJzQ9TboEwDsq9eE3ZnXLdPMk5tRZZRA8qc54GWHpr7JfPLsFzYuPX6YFoREmDYFdXdPAQK3EfCRG",
  "key4": "2vMmPrQgStPBqGGcUKCMnwqzh8UiLn1uSDx9TW6XwESLjFyEH2iqcZpn36R5YN2oUEEYNvnobBkv24L2syscXofD",
  "key5": "4wNsUfhUc62GUXqm2DcJJy9tyDjuXDRXqnHhY78pmbLX1uEDdhmtYimsS4RJw7vyp7MxKbmKpMdJHpAgkuGq59Xj",
  "key6": "5MAWDsXMrLP8rBt8k8YBc1GnmgDyth1yrWKkS4n7SeAwtt36NKTMoCk5UPU66Mk4gntphU8bTRDEBNp8pdrpXHq8",
  "key7": "5zq9EX1XxLFLCJgfYosbFVTRjWi9CzkWwpPGCHD2ygVQAfoewt5FarQZWGji35HJM4xUhKziBoLZMC6i6bU3kNEm",
  "key8": "5kajmEfZaK9zNLfCoFCfd6Q8JtVNw7shyMDTwB9LiyZ1tKmQQ1Ha4np87E3CpbDc63SGCXG3ER8VLp7tU9iGeYKC",
  "key9": "4qbHotW4qR7emwfRfX8GPCYLfzPCfX6q3zvqdF39F81CNB3WFg6hkNnKKkQEyHEAELHNiZe9fX5SXZcaFSGPzAky",
  "key10": "2JrCNi5sZVsLRrKZ3hkzFTcEjPHWP8fPQsGPRw53Wy4kJGZvpko1KcqsTbbWG7JzwXRPxgNpAiBEuj9dF9dgudcw",
  "key11": "m4adQcZbMZLvBa5qJTS1gpwmLHYYioybcwCCBVxkDEcdbGs4CTd9YVi51zC7PAopW1fYpLFP3AF528PmsfHGNXP",
  "key12": "5DgegiroDeWgnm4YieNPz1SkyEPAG3FFBusyDaJtE6FW23qddUdwX6ad7WJiyZY8TjExabDTrS2p8Fmyd1PptVpZ",
  "key13": "2UP2oYNg3irmSuCBj8Zk7MGZGGzwWnuSePwMuZhqAHDPWRQBEzA29jDKVDXGAU6qXgu8rnHzcuyg4EvQCX5MLVCQ",
  "key14": "5GhqdzV74Z3V2xUMGQPQdoUTLQq4idzQh544zAwrYTdTAZrD8HzYeWSGZjHrXYRpCwvncV2sKnW6pbDyqW8xXaAp",
  "key15": "47ZA1ajQs4gZrijUMyd8ojZzWDVZg7aQEEoRhWETQEBg3CH82jTBr8BeNC85AUJQLBazAPLDWkk4KM9h22htKZMV",
  "key16": "3nFatwN72gX2vCQuEE8KvDAwk2ckKxxouhdeN9zJabuzxYr5JNgR5yDF6JG3sPib4C6Qx7yirhog5H5muyU263Ve",
  "key17": "44kX5cQkbbcK6E7N62hPTtCZwoQ52dMg2uv5bDuHLyAjZ3oGq8X2BxrqR1P6bU3aW89p5ypfa2VzqhQRTyLfSYdc",
  "key18": "5wj3Uotyox8CGBAHzF4jfSpfe83WHsbescwcFTzEVuCHHfxFvuQabPXruP75257Lw6cXEwVSFaVikCAKpJKhXeNa",
  "key19": "3et2g8WM2MyBL67ejBS3kXJYjohanY7CK4EMPxTA6Lgt2KgxFEoDcMt65PFjuwRMs57xRcB89mtc2fKdKiniqsv",
  "key20": "4vbg7PSYh1H6h4eSKDYpkMrnkZxxNcqt4iMzdJqe4cg4ue93rx1HoYSuS11aAdDCwvBYKX4uveWeUqhtkjVHttNF",
  "key21": "3dzyrjaq9YRKfG6HJozrKnMeoQMJP5YtXAiWzqTcwMsTNyzPNhjDhjvLkFrAsMcuhxcrHPw3vzGsDDzSvU2xjzuh",
  "key22": "GVdsbMuU1BMGMJjwjDL2Fwcj5cYoVWFgUn54YqRoY1dcRsbphqZRKgd12N8evsfa3Sb5DwxuTrTBFzNShvrnvMF",
  "key23": "35bjBJAxiwgwWqb5i9Lp7MfqQnvP3vhquVnXkX9QehSb2ebc2mM4VwMqe74LrVFs531vaazJgjQhLfy38ZrXJ6sy",
  "key24": "4ESahjjvnVnTjRv4NzNtPaZDk7ajk1t64QCufiyUnCFkaPKH2W35ysdjPmoCsdLYPF3hiGkLDhxK9ccJG2CfxUGP",
  "key25": "3gfXXQ5FqCxU3fdtsQhGd4JMiZSxAKHHfqBiS7nZHiGGQYdgwwZmPDRtfSqcYojQNMdA9KfU5FLuteCqJS2LuwgN",
  "key26": "4sSkLUGTycdzFBEEJ8cpke766BT7RcJptgYaGg2VYxf44rA6LArK4c96aNLXJzd9PT9Mit6WLhE7Np36horE3hkb",
  "key27": "48m8R1H6MY5sW5RZV9BHhLjGsZBV3vAwxkmCyVopX8JtvCmVUtGFKum8hvvc2MVaXQF8J2pofAUguR4ducUSBWav",
  "key28": "2m9ptv6uwgobj66tgCH8uhTba1ytncH2PB2sA8KPuzGAJ7BQpsDtfauwNqrCQ8iDnzM7uDEGbYb1Jjk9WNU1BgfS",
  "key29": "z2H4R9EG42nw6GuZwyWqtYH3WxLjjMKnrZN8XDcaKbfqG9tA8rXzq9rKVWggrPV82RGNa8FayTC1BTJ54jQ8kNz",
  "key30": "4sbCWp1r3oJqYvtAKLGCsV6WNHKJFdtmaksyRNXXfmhbfjP7WeYYVPGUtqtXyyDgsG2hRa59BtcUQYFNqbVgwBFQ",
  "key31": "3FENWVPUWbyrFRwPh9VwdVfyHfqXxa1BvjsZrDxrYf6KFEaXUeEhDDs9qRds4RTVFhwns53hCsUaWC7bRd27ZcA4",
  "key32": "3yzKA3bwHr2HX2siHdMCLV7dFuCauJMtYeLFakTG58kfGtyvvsaPzdnj1Rhm1mKgCxMmZ2VPNSp9c9g9vmCL71CQ",
  "key33": "4T3LcfpsDuLGVH23YJG3VNi9v6HSGHHdRX8QetjUZCxg4EcVJPCqwc8u1y25PT4P8ko93JGxk1XFKb7EHnJAEBUH",
  "key34": "211mB6gY5AJb4FvSWbHgKoxwY6Cq5uVNiCWig1oEygn2UaJuEntirfczRo2SCyoPGyX8rKJzDLKFTu1nBn4Th2sK",
  "key35": "5FmxYHca6wrNRtCRCgr1veqJNLibRE7cjLeKzHTVDgN6tTMr5mfcTqMaTUfuFkFckv7qqQcNCz6V7z3ybDzxMXVb",
  "key36": "5xTBgGVp6a4H8Kjwnv4Z5ApP8PXpJzhSD3CVyW55MGdWCYNgFsyR8tN5RmSwHcEgYdTGSVKvhxUuH7v7erSHVUkR",
  "key37": "5dPwFFctjwTANnw9Vhpy7DjGmuPwdJ5vmVT1HVSQ2qKtg6vCgCXUiMv5nHhjRxNpzJap7pXmdvDNJRhDsLEY8DCD",
  "key38": "4fRrxsJAWtNQSHt4J72YhonSh3FKQ97jLVwwCmaiiQ66Kk3xJGh5D6MLno2nf8j8GbUMnd7CakbhvdUTLW5Xnyji",
  "key39": "3Dz7BXsRA4N6HhbEFzAyqabJtbpmHsXx1nfN7G9dxgKKz3PMCmXffuQCFBGXjGVTxXvmc9MNYrzvZHLPzMSp45u9",
  "key40": "4sj7egfCzc4LK6C8BPfSdhTGpMw2meTLF5a9j2tM7AnWHBzs1447GdKPPtBurL2sf72j8VNiaBgayGVJeUz2zPov",
  "key41": "3iEPQSFzcVk4VXRa91eVAqKca993emU6m7GD8SmjrqZmxcML5WUWpQoxFMYin9PPvL1WTwpmDv3cZQmqNThG8vtK",
  "key42": "4HmJhhgJHwzDejfp2tTHVG2RmgbQdLbPXTcKmt1xoMzhWwTsJZKdyiNMhitrCvibGdtQ7CJzmJJk8QEYLNvnPLXJ",
  "key43": "4saucC9YPXbXTSEJ1Lts9HvwHec6dLFAKz98F6TAGUvKmnXdo8F5C1ubyhfRRTPE5UXcF6jD7FKka2NdHr4RZFiT",
  "key44": "AFEWiZvG5bXJxw8KjsNUSqWXkfFQGCPwRDGSMZyx78S88MtWbV4iTMjTvqiWeg9V7UW4SD4MmegQu4mRAfrDK6f",
  "key45": "3CUxCBSRpUYJ4N3LPE1TkD2nHtzjLoibmhiZLLdFj5E44ad4qwqpTSjBp4aEzp7EBdrXGudV2RqcBbdLAs7Sfq7J"
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
