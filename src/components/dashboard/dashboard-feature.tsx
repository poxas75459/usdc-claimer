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
    "4F6zW7wHh43XmbabzviwScT6zQZWACJPbHDQSWLYRUSKYBHr24drZX878HGLwWsAfRWRgdbJsct3wEK2jRXVqV49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jxtdsYWzb1tAQ398ye5deiKaRw8yF4XPpEDn8P1CRqXpfNbcHfDg6tyDJQerLMrhuuyhatuBUg4DoJdBrvfkvSv",
  "key1": "2RSyhfcUWXXsK8zjVXKgLj7SdgMoanNGA1ohYYUaVLMyVUzHWY2U8QRB5NER85K9cQ5QjkL9Xs2QnL9iqTSNEZug",
  "key2": "3H38Vv42g1uqtwaXtVtpZqCAh19WNjyrfYx6ZN9UgPjv5t11FhJXmfpn8PrchLeqAyW6fdzdbD9rWwueeNKEtWMk",
  "key3": "3KkEx8rdzzkBNbfcTpZjnWvikiWZ8wHB42xXWo24B3yuHNmXCHT4rt4muGM1XnoADicnJywxtzD22Hx52zV7zjJz",
  "key4": "4nMwG57WH4oEJdijkPX4WDnLCgd9rNBTrHLpCG7tcVFj3E65QGRvpQGw2ezAZ1mQQvKy8g4cjGFM8JKgunyRvJZL",
  "key5": "3aQf4Az33eXxouBCYSiPtVMvNAPvuymqnd8qe6wvfnFNTyKXcme9GktjVTjwiJf6Noce7BeYukXskTeH7mU1Wkmw",
  "key6": "4FU1QZoM53sPfnzwkJZmfhDJwQn5otBrybfZd4seWtWJvCrJoNjNBG3W1gYYeNffnq2gUZ7MotmjNAyGEpCTjAdo",
  "key7": "2D3T7fUKf5CWdvWqcHokGaKHgwENKR6vmu3iCjTPPR2fSRSQe1CsSNhfg5kXWgoKCC9Ac3aHmTmoyWPkd1FgeTjp",
  "key8": "5MUEAd8cCYVAs5aqkiKiJYfQ6RGBjNynRHMJNHYucWvdxA6PaGTsqLymVzxTra8LnwwpAjZjMLMDeEfxTyiD5mh4",
  "key9": "4aVQZkTBQj3CtubByvvBn59GiQQJWVmKDQtRbr536jPtUS4ABvdmN3qbAwwqKWCHXVHHCgxhjsqNpWpa9X2NqWaA",
  "key10": "vuG2UhFgoAPmrmuVcRz8Pux8oLD3jx6D6TBJESNWEHxgd15k5pFfr5zyXMuUDv8AUHQn3xwkiPWKrEA5xHgK2Sm",
  "key11": "mM5o38PXXiBTGd3RVxmrR2zuwVgHMvUupmBU9knPoYQh8QAijyXaojLZfnZPSSghXrHy87VLbioZJB3kZ6nLR2m",
  "key12": "cQHm2tCumKPTY19agRSfh6RSqrYPXaFxL96XdtfshYska8jA2P4SmTRmDhmyVwvBWo9GqAjX7kQnyMji7fYut11",
  "key13": "3N9peuqtuX3FnfBBDxhTtH6rEBVc6VE6ibcQeshSbGvvf8yhawAUvuLmKeV1SHPYiGWNJYqFz35gHqT3FyVCPP3p",
  "key14": "xnKhT4Tt4mkUy8fPkykijdg7pUEY8i3ksC6GFQYi4Nh4T6fUAZPAsnn6DChDG6C5U1KqMNPRtUapyW5hwtUYqeh",
  "key15": "2TJ1Jtc6pWBpHemRiHpwcUU5G633foAPCcKN1n5Lh52m2QjSdctYy5sbDtQF1PQoi1L8jFEHkMqq4iVGabyeRnVj",
  "key16": "5PmfMCKvgqwg5oy7Xk82KRF2MzuqgBcmp8xrBfkmLG39N6u2cSgRzZY49sczKY8gG7yrmoZoMW16o8Vz71dCr5XK",
  "key17": "3tS95fFnnwfcJCS1ELhY4UESjJEp6vKnCTR1VzF9ZU64JL6paAaGa8boXbTDDyR5pPzVtXPCi7w42Hpuk9ua6LKi",
  "key18": "2XZLpCA7CAXbj9QsL2a28mZeTu9DENPcjk9v1WgSURNpUWU3VvdvFVifaV7rqe43qdRtyeJQLXT7eZdGJ6Myttwo",
  "key19": "Xv2BgY5eoVsYRCc3jabBUWqvysbk4vLUoCtT5KHj94n6v6S4NxCDie2UAnYsVk49xMKxJCQWg119nGRQYficFWr",
  "key20": "5mh8t7yVh6cLU6mCaPAs4VPEDUZhuKCHaWRConUiW6mdFwUi5WADGwhsNRp8Nry6Y6UMfzWhZ7NcYXMkgBDVYmsY",
  "key21": "5PfrTT3pxjuY97fEozW1szbtBw946eYqDLbjbaYFtmKCGLegWSSHMpkyE1J2spRLB1uAbz5snwM8MxkZccMrfpYy",
  "key22": "4unYRdSg85WFsUuuP5xXD3jvHB2JmLUBArEahJAMoEcf31p6LEDMSbFoMqGVbUaW9KSLybzwgu7CNjyzdgJbqdup",
  "key23": "5xGeuBXeCudU8n3N93MgCftKDky67wcnatjUR3ftZHAaXnu9CkVBvABuQqLgHH4T4tE5ZnnTVyz2hEXaKy7udStU",
  "key24": "4p7499X9WBvcoNcGXJGngbiyGQVPqc95FqAKhZQuP8LhJWqSPCeUh4qnZNYHRV5zq6XgpBnnFG2TSNihS6ynMgeY",
  "key25": "4xG27h9Z1YtqMK7xmwbdek2iSJ4QXWnxEa2ixbVDdGptgaDTXPiKFW2Sj3nDh2eziJbXa979y2nr1neBfZF8X5Jf",
  "key26": "vRcB7Gj4BKnY8Z1PT6muy7U1mz8itNYytM8SHc9ccbcS9NCfVqt1nHtcrUG9kdUBbaQsmf84eSKjhqarQG8H2f6",
  "key27": "53nPctPUjTEGX89mrRdTrB3hwwgGWuKdt7hVQjC9jKqWX3hKxBQofuW1Y9ECPCb2qpBmgMdZwioyEkT7F4FYqrpe",
  "key28": "ySkGUEA3zDQbxk4cxxqafg5qUX4m9mbGuzCyXzzeVCCJVkMJB9kcHyd3fbGj99ysaBPYD1VpvWAMVZk7McW6mQt",
  "key29": "KbBk5o11V34N6CLYetxZ33o8RM4UfJRGGyJatpm74vn8HG25GyKE2NtYWTwpuT5tvCDeM8fHBn6NeYHGpJqS2Bw",
  "key30": "5vAH5DGHe7wST4d3eThVna43QkSzbaJFcE1viYRxy7yjjDX4VDaPujfqkNTZZSHgxsqMbPLxuhwhYGJG6vBJPLHk",
  "key31": "3w6HAMBimE3yLCigGS64w3w3yjSC9XsBmsthxzyv9CpRzmqCaYPDftXTSmD7EJdemDuaEHpWgmsfcMxFW4TFSuvy",
  "key32": "5Bii26svbbXWmZs46z473jRyn1mfbdgHNfuuZBpjhbhjwUatbrq2s6mHpaA53GvLsPa6sdpQuoEu1nfjYq8WCgTn",
  "key33": "zYEHfJY6JnGnV31M7WvCVnxbZKcQAsVsqksHQuHznC7tE9KJBBNEknu9Dch1BqFhZ4JmiQwpT9TDPfGK4yF72PC",
  "key34": "4o2iY6CkzQaDiJL1o2ZtTrtvypv833Dij8k8VCX3LEW1PtHFN2umXkvTWNbKKHLvYWpsqgJdK9zvaaWPj8RPqZEv",
  "key35": "39Bkkyhg6e2tu61VLSCeqYZEUyHhrnbYTHNbBYLeQJGdjKRVxd3q67MruxYEpWHijdBU79hGW2tEE7pGuwKHaawn",
  "key36": "42XUTQq98nvGwzJioGa3JwLDoU4i5JwfsXh7NCP6EtnGNGn5a7Ym8TgUuU9gMb1ZQkNpwXvvER4rZH9x2M7FmYGK",
  "key37": "52PHvpQmeccbRSiG7ZTjEbr2PXNzutQyugrAzH35CF2zn3kvjnRRCDnptStXcWbnXtiuoDvvH78aNGeHLnJUFpJk",
  "key38": "zydQUeY9ffoZxUAk895FCo9bG2vsh7jd9eg2s9ce2QMrD7atjaYSp8onURqeTdXyGURib5YRaeGiE8941HdJtd2",
  "key39": "5koF64RTWu91K9MvRKTJcs7bxt1qSkgFH84hKBviWpBJVbRnHA8H7iNsKEuv2WghKuqCbx2Fw16mSmHQVuJ3LY73",
  "key40": "34VUAiYWQMDUd365kjh1yVPcoop7gN7SHYC3mfnSUSwRr7APwMmYRY6bEryaLvRnp2RjNjkbrNHKPMmCzJLUKk1R",
  "key41": "5Szj9vAZNb8jmLvmJ6ngJvqMyKYa7CWCvTF6G1uMoJERpkiLVsNmDuMKutAddKhs9u6PJTTMg5diYcF4n6sfdrwc",
  "key42": "3pYpiKeRtyU1xa3fsQYVa8TwrAG7eAABZEwM4psccUZ2zs4sd4fvmJVtWgrd9yxS1TydHzi6cRNEoG7tNv6QZNm9",
  "key43": "3Nhq5DcpZNNWfLUrmbYcHbcnVp4uoBBSngzsCejiFiSGTpQ2VYPQGKBgswNVqjo81KMhT2kSCXeTWMQJXeddF7Sk",
  "key44": "B2VDcPKYYBrcKsAynmikFHDoLU7qNLECxt1u395xVACFP1a7J7VKFaTZwRMPkjWGziG82i4PJVirjK2cJMBsiqx",
  "key45": "58XnWYjemaNHW7FWFSC3MqfQeLskxWukQ56LWEvRExMEX4GuoYtjay6MFbdpeXyMRNRpv9MSSY2jyPMkfj29uDtc",
  "key46": "54awubGL7vwwvEDpiQpLt2WLxidZbHTh6fiZQPwa8CBnxGP1CvajELNQT2uhaEUEacrF97mpKx7aJQ6rCfZA2tob",
  "key47": "2DeKiVpxnwL1v8FRKYkH9X8TStGRhrBaWtZbjxLVsfqVrLsXoemoeD3EiJyQGm5qFGVCLzt2xdE84yQBMHbnEWbT"
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
