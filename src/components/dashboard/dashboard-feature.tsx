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
    "25C3g7Jo8rb9Mm4H7e3rzx8nuamwK6R1boxY7ufdwMd8i5X4Xed6TBWMqZu8qKniCY3hXjAYdpPQ6rUYqCPpR4H9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WydDSWjduKBnphiuEP9dmZMMAPLea15k3RhdzdRSvXhBPMAmvBGp9Uj9LGMt5DfF9KJyaserVT3h9ADqDLWMtsh",
  "key1": "LoVESVB56Fm6mUeMaUG8TTY9dUrzV4Ah2nYGGoW9E5wUvWQ7uCrPpZcAPpMtNSfND3zYzuNknz75MGSv3RmyXZc",
  "key2": "4MSdYLUys8pysHE2pD1uVzk6B7ndSYDXgSgDG8U3Y6nTTPm97tZS9kQsQu5DsYBzHjpKyiHJiuufVG7veakxcSxs",
  "key3": "2bjv5ha6ETXJbREaBYmnueq5qeks1TAtuYZNpUWkXy2qTA9K1B41CVx9VZ3MDmFA6vGogZGY2vYkrA6ChnkCaBmZ",
  "key4": "26AviZdU8FBVUCcdiCeGi1MmLkicLaJJKhssArU4QFTLJy1wRnyA3ddXyR8AXh66zyEweLedXsa9NLaEHKhgKXGg",
  "key5": "6MPWn3tK87HXnTjCHV9Lr2Ge8Bv9jpUXdrHFJTuxQornmHvRxM1mDmxuDJQpZfG7y52SBXFmJqQrdemJPBPF7Et",
  "key6": "41fQNMqjEhDC6jf9vDDBZrzqrV5nYZubkCMTmDfq3NEc1pa5Fdw7pUDVer27ogyC9isf4jpEN8nqjFqSVnjNonpC",
  "key7": "4srEdLQbpKTbGiym2U3kKU8KWZ5RB2qeDnN2rSWt1huyi3Gy2LH3MjcBTGWZMpsJDUTxtwogTgcdTakAXo55X5Qi",
  "key8": "3BGQdwxEgQmidcYBaD19i4WVbyHwzfbeuJf4FpvTPN1yxksEsxVpJpzjT4ZxSQ6SroCGBxiUiQyJk7oX8fT6oaAd",
  "key9": "5AytaY1mJLXm9D2nmiRAH6ck98onK4uu8vYQFzXLFKJNXRUr7skHUnM4z9u1G9iVDQCaQno6FAtZQm1MJGmLP81y",
  "key10": "63v4dRYVqja9haEsJUXqkTMaND1hf6tZZtjQRe48x6U9vytiMsSWKkRMFWExya5FjpyQNTNaTyHzqfPGuvnQksHi",
  "key11": "3EfVcLPQxuuaCobnxgAtPNvkxW7pDZHaUpm24pAqmcyAZAUbVcqriX16N4VWmzaa74CVtckCbS6vqD4w94MYBWc7",
  "key12": "eVa6AMpnif93JNsH1fmzztmZtun6NHEDaXPgpiq3bZHvXc7upDoSeenkcjjPcQMeYsjsmBgNJ4giid2RDdfndMz",
  "key13": "3eXMUGughFUUXEH7GEGtEXR3woSpR35EweGMPZzNM4Zp3BujyJ8K3TQE6wnLNNM5DsEyVLNrgjaqRtC1DFVJdwqh",
  "key14": "4rMWZf2TQEt9BzSu7e6i1hPVa6umJKb7V9Yg88cVefJM2M6oJJMnVeAy2yFLt9VETNuQMkfKDf75aXUAqLH4zaUT",
  "key15": "4DmeZh6DR6kXMneZ2WuxpeJYs1Gc4Loz5XiarB18hMqCN3vFgWXxEYkiFmY17zvMnGVNvtZmrM3M9uGpPq2oHEiG",
  "key16": "4tjDafqbxt8phTZMqWu8yDzw7JTJAQWwhinSn6ZzXEueWTUEacMgix9byqosdYX1DKcgaKVk384XbHLRnVhkqkFt",
  "key17": "4GCLxmcfoJKfV2mKmQQ7owf8D2hxjJe237Kv6Ct7DeZCwAcMKqQWgKgAUREoYa6xDKLgDGvNjodGVFRK8iVZqJod",
  "key18": "3vtkywcWpdGyQy6JjEQDzNVXNT8MHP7AjP7DdvchHMtKBvYH4SR8msPvYUofM5M7oy297RbZ3wmA2v4vZuyEs6xT",
  "key19": "NLXHTKveXKRzrGfG8ZU6djuNAAt9ccJ9WuZVeAG6ZmcuhKLjcQwYhCCVavYHepWiJiJsMa8XWm7GNByYs8RFhUT",
  "key20": "H55CcRnysdLxFQoTqTqEfT2zHY31hnYBgH4jeQoYVWwbZHVDMwJnwWbZttwCohR1pcrefKguj9TNgdiuqLN6m3y",
  "key21": "5hytLqxj735KJpZ7KadyWfMhWYJBgcA5oR6wNsgw5NWA9dEGvKsqvZ3LMEemRxymnAXyw28zPg42tdd6kNir3Qwi",
  "key22": "4XK9p75MW4xPMKY3nLoZJ7T2gCBDWCUxoy7WG8EGQkzjpaKLDH5J6JJYw77FxxEJyAyC6kN4TaceTPbw33Wz3vrf",
  "key23": "3FNa8djYgZvV52PfQU89k2TVXptSYeLnrk1iV4wT8Xrjsi8pRSw7MgXnT9TaZXgkdByf69uC7KhrnAmrpZXpZYBB",
  "key24": "635vgbLAZJZ4M4wwY8zw1s7BFJYbDfX4bFvmQdoqCEjsdPmRKbDLURxPGpDVEKNwzhdFPtC7kRoLy8cRMmZbhoNs",
  "key25": "5HW2nt7TU58GoXq976bihtU5CHZJc3nbPptUo2o4QmQukmVzKNwHonwC1ErDGKTj8vxPWZUVTQeRDuy4nKLF1o3w",
  "key26": "5FKKrPgcsche6TsRDLjYGqMYgKYrgUrFtN3i6hDB3amguoxDkPyhQ7kpsMasuCf18KcNW3KadJNU226WP3Qf8d3L",
  "key27": "2H2ipYmywjoe9Mdjidk24b69itSrtFN8zHtMSgWjdawu3gCwuCLEavBY6UTFKEpU7rx39qFCfxtbHabu7d5ELxd6",
  "key28": "5BVMChjitPA1a3xZKuMhhgA99J34dutkAkMoy5CSxijcW7muLQRxj3Fhi1DgbymUZijqNri3sZ8wKs6qWj1m7pjx",
  "key29": "4CS3Sa1AcpkgLcejRNeUhCDCq2hGMsPwrARH91tvnQLKMzwgVimQ3PkuZePPcXPrC7ZjQZvLTH9RD6sP4YfAHcCz",
  "key30": "3tPqboLePPrBfAXWKkU9J6PwwiXkPQT8EMfamPvtxuYYF4ofUcaLDM5cc3HHD4L9nDfXxZrhS2Z6HEMQi6eLTN2T",
  "key31": "3jSBX5otk2Zgaao5ftwtKWhBQe1uQSPBgpV4GWUZcTmMoNR4YWpEw2gk1cAx4Jc5UihSLa3u86A5BGrZgf9E1fvY"
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
