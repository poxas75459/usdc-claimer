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
    "2qfNr1hmtTEW6oyWrR1Myntfsh48gDZqhkpXxetfwz8w2DXbrd1j6SQKQLJpTzBB2HNkuFa3MarVQ4JdQdUUKxgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tvfP6C5gY8tGfEwoi9yPrDiUTuFjQeTRbA3FektLCfqwKTv8e7t7ypmLoiXj4uTLUwitkwCiaP43SgbDrRoBAE5",
  "key1": "43vqcYJM3NWN57d6JBMvDDcmpJDU5ZEeR7xjraM97imwzH92WuDVwqSL3NoUV7yXFShVFtoySdEwzSVCfr6shtSa",
  "key2": "35KBEcL1gvdNkQUqSybDDuQBKU432yc98MMAJ6DZJQMKdLuP8wDL2PFUusioZNFEbvzmaQTWCkTVzTAWy12CaLMb",
  "key3": "3ezkygZGsoGQ7KPpPmkLK1M9GkTPotPg8WeQvuGys8E7es2axUqv4UAVDF5SCByNFhYqnhYeuANPEi174UqDLaPC",
  "key4": "4gHjd4YR7g6q5jH4kKrvfreFph6ggcS2AJvzCESsYLPkJWHN3ax9NLuxQ4dcDfVfYDRNYHhv3MtjV8H7fjhiVZ5J",
  "key5": "AaGqNHCLLF52UvsuUZzF3FegnFGCoZuJXwwFqP6KgDMwzTKh18yR2vsZASjskQZuBD2kz1z6uQnzuQRatVJAn8u",
  "key6": "2C6DwfthTs3MG7KKCvYvdLwqnSTkQDVT19xDftdHbQA4s8ek9X4k9HDMLDWybRb4ufdZZBZXB2sqno7TsucScXwz",
  "key7": "2tN7Y3zjF2HV7hb73gK2YJ6ybYHjSK6d6GhhefakJYw387nds66tpmko3PC528wZsLxDqKaxQBAhPxCcfyniDUiE",
  "key8": "fzhBsNaQZwzWDMCWCdZDx9JUHfkBzAK4npKC5dLNArELY515bocaSvfB6NHWncHXLXNUjs3sQgH5TyVvpJhab4d",
  "key9": "5cRTATep5ib9z1uRjM62yRz82G8RNCHcdkogT8nD8djev8dFJcdQq8Hhxw2CL9x65WBaqkBWrePNCa9u4dMcEWKg",
  "key10": "32hqYYm79ZNVbuc52JJ5n2LQXLBf6waFwueEwpqTpSmW4s33dFG9cTHnYggfotwnCnHa8DtmhvkPwq4jJnSww3ja",
  "key11": "3W8ZHwUuv14r4Yadkud5VuQuWnq88zvzpZ1Tus7eXdYDF1Gmq6z2zdW3vcMsriz8hzm9TRB66sQMHRd7Xrs9y7hH",
  "key12": "2k2tyqSCWAKqYzKH1XWgiEmDfg3W1fST5HZ2V3Ai42DKLNeQytcM5p92x9VuLyGfPoLBnpr4m1Erhhyef3EteUCo",
  "key13": "5W6Y1coAG4sWsLvv7jVavPHsdNsWbWRCw6CBmWkLvHzMRKxZf9zUfHVG6DowkvnFKxDcdVSP8wv5ob39Xtv75WPo",
  "key14": "5SHNM3ts676WDtMSRnEAcU9qNXVpAsR1QPqzGtZJ5ApGdN5rjvBUdjiXfxCS89nwPbtmYjmHtnGHmpRmfCrSterq",
  "key15": "UauruUQo76mQ7x1aXaEXrUZgubKPZeWGpPPqHwA8XYXryyne4zCtpkmLKuR9VUSLpSkR7VTWaQqzSW8V88vqRRZ",
  "key16": "3KLtUbzQsxKKe39dkfHMpGDfzGUz8cDfSt5p3jsCymgSYxf1UGFvmTaHysPw79CfgicpkKQuiBjE8ydi6fgDgMLW",
  "key17": "Jwt5MjqKhNVoeMNsaTiG6mEcD8GoCKRm61e4Ejxv7GN2BTx6u5AdKU7Kzxhh7pybDd767nMgia749xu17mzXCQb",
  "key18": "35JFSzzr1PxGto4D6MvtEJ4C47VgcVj9bNBxm4a4c7Tj2sHCfSLHH6PUeQpWZmJQRp63KADYYyvBRprd1Jie5P2h",
  "key19": "5z6pnmZT7szsfer1bJmMepV1c7ovD48wcS42LffiLFUWg8VRqESLNGHmR1NWR7GRzNMr9hDow1aMwxhZCaaHS2gk",
  "key20": "5uPxsfYQnMsnY5psmMQDR2yBNRysEwqWaEFtaUpPi1eaW7eBbfbZWCMFtMHB5NN9G2eAwapn3LRYECZR1n5iirmu",
  "key21": "boEfmbdXURyQzk3BoSMFD4G4ToQb4UGUMJToyX952e8EyZT9P69Gw2Ai7vfs9cqw5NuVjKiNi8GNe69EuMs2i8w",
  "key22": "5DnnLMCHWfrjdDhauQz5MKuRex93q1uXEisxTztEFFLmpWfTikuDEinZeBLzGh2bnXma1XDpCJF7wgS5UtK5rmX6",
  "key23": "nTBDShB4VjZxhVSd9PLHSWEk3eVyDbBuE1iiuMX9UyQjTdQsakrcfaffW6UxznfuXwcXmk6X4mSBg8pW81YpmcZ",
  "key24": "5o2UWhQzJwtE2rvSh9Xjqesd9cyj1fc4UuCZ8J2pEUm1At3RJQVSmofGXcNAEkxQhs7YWq8pofjhVM6bMBDtPegg",
  "key25": "pzPrcBsNoDWGu9mM9Sd61giUb4fsaeADdQb4333ioKAcxR5UHTS3DMytEEpnPeKCRdGGi2jHCwBmoctFV3L2RhR",
  "key26": "4kmxduUzjPLxBKWaYKwx8oATfnvRaFKixQLgwXowpreMyyf4nSHq2tp1ZALFSvt2UJb6sJgpvXzEzPY8jfuRWKdx",
  "key27": "4xUCeFdqcjYxhD8p9kN9b8s4J2TG1jQUsBCQNqEY9KRsoqPmVpfMN3k5j1d4aCUEUrcgPZt5B66DFpqXF6i4ot1S",
  "key28": "38Xf7VDedzpWBiHeKS4ndWGY1e5zvSbimrmhtCCJpwf99Rr8XMGwjw6iYQZaudxb9eQbNWpDCnc3zqDbgrt1XQPB",
  "key29": "3SxpNWWZqd3oTPCZ7KoXe26gUKmBeB48RYJA7ue94uATPCveqYpqKxs919E9yT8k2Q2W8wKVjLn6G6ZfxMNprBTz",
  "key30": "4ijXCdmeZw5Wdjh8DrTW6XpVhuF6gE1unGs1yBEhmVdPvxYUGoc8nntVZgiAeKsgneSuUw38UaBTvvhXMUzwGMV9",
  "key31": "4NHRM8x6RffL4rdiP17zK7SWio8DM1jVnEk3HCdKPWYnFmXt6c9Np4MQ5iiETgrJatjPPtzbMPEQ6xCkkAQJN2x9",
  "key32": "2ivNiFVWDeA7myBKREmUhuPksyBbmYtfucP9nPHe3DkakQFNodfKFJSzBgE1WY19gtY7SDeG2hnqH3oe3jEfyAr8",
  "key33": "e5j3o3kjHkJSgk4dMi7CnR2juoNZTMk3vA4x6Rq5GJ7t3M1d8MVkfNYkP5JGbop7GtLsbsxuZUWghBzpKnYjKTf",
  "key34": "ND27JeUiveQkmxcAQmSHhT5DurBsYFPnTTRwFJjmqmS9ySkaNhMipLrkQCTwtDtagBNyA9i9Si5f8nb7x1fHfHy",
  "key35": "3rXd5FZCvr67WZEueDi1z73ZYuuisUJVNCdiQgMjJdrX5EJ6WaEdZTYt6LYuNNX5kMMZJbtbQxdxcaj6MurWgzFh",
  "key36": "63ZAKxAgErb2Lx8pUQ3cbGbmxg6YCoEf4MSWWCkFXke4v6nv3k8fMN8Qygv8tv97yuQEGMbe4FbnxdCaWWzjUVac",
  "key37": "49LHdLWoR5HNxKkXu8w2ke1eTCH3ktVtZQ73Wjn1ffUVJ82MYG1EixtNS4GpkQ6x68kSXuSqbqmmv1s3u6cetQLt",
  "key38": "53sM8GhjQbz6PNvDYVdXid7swucxAcANpguBX5T5eabfoHpbqHHrGSgJd4Xs8id1g7NFqNQBSRgQL6Lm1ru5DZRW",
  "key39": "2Tqc81FwaFv8GYLdm7V9c4BMBhnieGPEy7EWkLNECcTSrng8hnNFkySerKdS3VEaPzB84A4gA7rcppVvaBWch4Bd",
  "key40": "53whDpVYqNwFQ9xBnDFPhtkxdrgCXz2yttNJC24aA5wBsdAMeyCKBSjKK4KKSiwQ2Jea3WWvankxjg15L7G1wwiU",
  "key41": "2HyfTKcFQh5ZDp8rVegFk9JF26rorMLzfZWPUyAQsbPHCFpeVQwXECWGQD6gLByhwzcuteQ23zucfbv6UdibVVz1",
  "key42": "5xwhWmzLHoJVfCnQdqprkGj9qZ72ULbysf3nRptD1eJuSkSTLwrmeJ549cZyzk5XLNnXFE2weioYyBJiVizYKGUk",
  "key43": "5i7qLV1umtyd5bz5cjCG14QE3Ebu9xAZhM7QMCjcrQ94UiPithkNiCzghJ1fuc7EarNRLe6BzwW6FAYTVw4ZdyCT",
  "key44": "4prxedN4omveTSetNtP7rAA6josBwAs6VCBTAx9HqaHAw6Z63sw9G1LKr3wv2DajoZV8RfF7Y6brdCVEdjMDhfNf",
  "key45": "WxFM7xBfQYooR8iy27P84ukprDwXdNqQTTLdDCK2YpxXafqWB1RRnUSMCRXa73gmhxZ7m5vjeymR6kUGq6Zpqpp",
  "key46": "2N5QdazkRs5JQR6vS7GL5uHGYXfCS5xbAx4qdtHLUqydSjrs8svvKw8oVm36vZq3gYL4osYSCXFS8aHZ3i8ouxBA",
  "key47": "4ufYU9pUwefn52tQFCNLtzqXd8onGGv4K5HwUiyLtz2J3p3TRPWcz9BcKNawX4r2md9P1GN9qTSXtWha4sSbqTm5",
  "key48": "283haydJzPn82sUJdDXBe8or7wNi6J6szLML9VwYkNp9xFUNUZHt7wKnnni3225bBg5xvzzrjLRnUx4jCUpAdhnA",
  "key49": "ACNxKrB7dtuq1R6HyyZasuwgAYvSUtcMauFjFvedRthXnQmZ4dYBhPSpXSHgDyATfAbzci6gFLQVUhCRZQrMEuK"
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
