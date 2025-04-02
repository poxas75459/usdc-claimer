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
    "66kVk89nziZoCnJ7qLJoi6FVxhNf3w9vRS7iw32BFDC7r5Usm3ruzjgZrgbN1D4ZHPvLTbSvEM6kkPdVwMMPWN9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LmHwfhCbsZSmMsa6kVtuwYEFquUJ6RRxHd1DzBmbNviV2n3sF45kQ2u51bNb3voe4g8JZFcHF4Q4UTiZVf5gruG",
  "key1": "dyrikW64rC871e7irABB97wfvWnKT391Nrf6cagZrkcGDzTKHru2FHWZtXrYmDMy4gPv65PbHUp3UQmYZKo7KLC",
  "key2": "gQ6bo89JjY7q3NAQSd7ou7eEkQGMNyBasG2VuPaz6ZZeM38TjE6EJkZkGTbcZPHgMizremU8QNHawjqz2MYvXwh",
  "key3": "28h4K2CZcWBv7YFgXJAHyHTWJqc9HG3cJ1DLTwdABYTYqdEWeVXcp2A3gzWCVAGqhE8drrAMUsqTHLLQHWctZbmD",
  "key4": "5gDukDZsRpaE6uRH5rCpqBVRnTGRTcZETzjGiHktEkaKr2HQUeg68qD5wx1bKcq5Eq61m9tBQQVcjKzpDW15JtGF",
  "key5": "2eL4a8NMtDHwXDYUWrNTypf28MNX5aQskzPvHH8v8jmbnAmuF5U1zbn71uGqcgG5P8uYS9tXHCqh8oD4oFcWhRbv",
  "key6": "3SR9PW7d7d627RXGNpXuHZeQn48VJtbWzmggHES1gw2YsVjiixRQkp8c7z7Y22u7yjcRyTP7DFUwiANt1DGHUETW",
  "key7": "hNwGayYt8bMAZcEQHb7AEs42HDA9jGZd3RPaQf26U7raFj4LspfF6EQrRVAbGq5K4PUTEcLYNnguM269tvFmJVF",
  "key8": "3TAgsqJP9Gsc3UtFESPobVdj2naRsQ3vmLUCtxnzk7uXfZ6tiNpiDB1YySPYAqrdrU52j81snQ3LoQ9KXc7oJiNc",
  "key9": "5XtMKZwSP1R8qch8AQcC7ZcCCj6ZCAkp8PQZAkBBLexJnZzjNmG4udh492JHpKsLAshjEW8v1yGKWrXBeo5dANs7",
  "key10": "2Afk9C1XFEgu26kT1PGFKw1pqHQoT5xAf4mMrZ9m9SbgrHcANReqZPZgMgzDiPpMq6nqS3q8azY3pKeGF3reFBcx",
  "key11": "5wAsUqEr6F4nMzfTqQdwBC4ui9UGKtBcb8p8z5NxkgALRSCxTyGrwtGxNwtKUN6yPjt3V8WCdTq2PAFboHuxbdMF",
  "key12": "5RKPM94TML6GA8ozmkDcaE3Yx3Egr4qrb1SKB9H2mS81chpxu18tuKYA1xz5jDeD5t1VnahM4wt8KJRsm9AvKu8n",
  "key13": "2niD3q5SVhE7f9YL3qGyzMK1bNuCAGCNBNbr6CVn8TGkL11GZxfnGdFNynB8fdJtKkSAH757WvFtugXfMhDkaW6J",
  "key14": "5KSPuH46x5J5Zv9Vx4SQjsAjGxqHGMnWNBddoZ5ZSyJKPMp3MButUtexWeH4q2kY3F11A7CHzDk6YL2HKtUEi22u",
  "key15": "43jGa4YQVNaPdNB9LYeLGgmVaXM1D91bhwUHvtR4QWEM9RRpBF19EcZbzXhr8qCUA28XaPHPvDD35L4cSUhEhbSK",
  "key16": "4p9HYrtix1o3v378MU5PLPj4qH6fYFY1EELPXAikNBLUp4YayQT9CVXFBg6rFAMTLeWGogBsB4TRQAGR52eopFzy",
  "key17": "gbJxzU4bbaGbcyifNW5z8krsH3zbXVoAPoe83hM33MR6i9EDucLcpiVQTiARUsycJP15NzAUy3egZGn6dnNmLbH",
  "key18": "3RTdFvGCZbLGhY5eRTReUs2uSNrmkfLfgaNYg2mFQN7yybtyoVdpXoQA5cDtgkjt9SxqH5kGXWrJxgD3udgEZ5Dh",
  "key19": "5gWUNniaDKRtDMQ7ueQe7zfahbg98trtnf6iMgiJCCEHxTFSVEWdTYfwJcf3ZYNE6oyijFX6mUJDKACFsgJJmwM3",
  "key20": "4neJZbyEwWG7Hog92QFUdw4dTSuLgPyKufNWaMzYxSPvvyY2KBRfo8erWMxDbYLvxdtNDYrqQjKaBEiABUbVKEmZ",
  "key21": "NWfaxxJ4zw1KVkYCkNas6ZnuxBqu383fEQjVCAZrNEQ262NojVjedgx8odEpWgoo4V5kU9PcMKPXhvQrRNCa7zV",
  "key22": "3kf8GiE15Ws7bZYbK5cCRDgA8U1CrDySkNgEJwa2CcB7Z24sv5rH7Qk7HWLK5S7L65mxB8VaX18bUDWcmfaMBA1Y",
  "key23": "SW5i9RyL4xvNHPj4noCrmDBqYEJRXQEbd8EhtN1Pr3YMtEcTi5mcv6YhdNmcb2Be6cQQwXKBbSF1kVuRx4KSamN",
  "key24": "3e5gXYVnhHeRR9b6Pu4mAgR66zp4nnkA8yHD4KEzb6np6bJHG1tVh2bm4dRji75ARVm8pMUXunGHzY8BoHuJEiHA",
  "key25": "45cgC8FnL5hoVsGjAwFTM65xcvyWjzexLeiA5xZqR4F34dvewgPrrD6LhTfKTJPMZ2K1pzJdwbwAwCjZdELZkhmn",
  "key26": "45hr43doQn6AdEUodJbhcXmx71NTDHmoSL47nifjv8uZjH5cBkfLSrZJ4DCshQcVuTEPyt4TvkxqSwfpEBC1i3yN",
  "key27": "3zavLn1n6qLMc3vbEWiNrMexVPfhvWUkNaM8nYYgVXZDF7EcpQFN7Wu1EDJ8pGYd33yENsSBAfHoRptTRP3rYzuN",
  "key28": "4etpShWeLzunS1vQnjeAGYTjhnjk5sF75LfT9SG1qycKR19H4PQ4W9rSWaqfZ6HRhESsA3VfbzLbZxzXqHdtTKG7",
  "key29": "31qRBhK8ZRQEfweY7XbBnTvDhLhMxppyNVa99CBZq9SZu4AD94DX3KqS76m7FbC7i1wqyaaMwmrTd6Ch4chD2QDH",
  "key30": "3SuYn7A58oyV3YZvatLxUwYFtaCsxxgfQRyFkan15sfjS7srqM1ZoPayXDL4uqap4D5JrK5xyL19bhRMVTpvGVMw",
  "key31": "5HVYgDwFztEu12ajXfCMg4Ld2Wm5iAGMyXcHpatfY3VVw4tJA3GjuuKCWWcTNqnApDS4LiLFNVduLbwxqSYamb3i",
  "key32": "2awE756KAmxyGdY3g5bdf1sWmPBt95u6VgWpJTnhErsRuPBuNnJXEbabb5THgDWDhv6dgNmc5gTGk2veg2xcLHN5",
  "key33": "4MdAB1Ef4PnEvisRFGQjgpC7Aqry42aSM34s2JrhQyvhEZXVjKHcgTpqXHBqWWcZp6QMLxhu1hts2RqqKfnq7fgV"
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
