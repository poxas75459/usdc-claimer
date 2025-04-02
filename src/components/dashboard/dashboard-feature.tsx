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
    "39v8J7TDMAiS13A3HCoqkUd3Z26QN8bNXx8ofaaNNjEw514NRcpxPWZBRv6kT6njf4urCYvcaidjr7iVUXve46zJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kq3nNUKi4tdGxRZSyWCXCmD7ogHtMoZqYx8SVVAX7CpcETbhpki1h9aXR4Auo9728u9eYbK12uSQWfMy33jZLwF",
  "key1": "598ZHvh3DTJe7XV8pmRb516R3B9ZEPobubGp4zEPky5kAiDerNSowvZeRDZS3S5MXwsGgXcKxjmCNM1jfpuCi7Dv",
  "key2": "zdmQ3KrwuhNoRWacXZhYxNr1QGaamnKgXioanj6S22zEkisC3LmvYQfvjfSNeNdtEPNxvffc4EXA1LcjKvLgFVc",
  "key3": "5hFHbe2KHyLYFn7T6sENNEPpot1JPUjXCppdDw7JmoZkdXa1SmnsmXYjdjwP6GTTnVVRZT4ZZrRnEwvtiaPyb9i2",
  "key4": "3GMHZszTR5W1dNnT96R1d2583ivvHhGnazyxYoWoZ4UtGCzJTSJoZYPonKVCyc7cvmzLoeXTSB56KmPWMxNsXnQk",
  "key5": "4MkpeYe1k17R66kvMFZhJ43A71ePBMozVWNgb9YPW2WpwKmCLkqvwJRnbjNJqN8L7UkpPXYY8tSqyyb3pB42XAdA",
  "key6": "32vtBGUjk4RXAYXpP8fYp2HnmNMK8Qf4VbfSuhPqDVkPe9H3kaHo1wxQUt2xsNHEJeeKF3u2nnJVpw4R7aKVae8Q",
  "key7": "3CWCx4dgwd1nKzeCKAzzgBq9RKSppnhpK6f5cSiuKzjfqCUApbaVeyBF7TPgYjgTUdnD1YzNHVMM2XCTRFU2XYTZ",
  "key8": "3m1ziWgc1frV5ZA5Zt5L4dUqwiMMiTdy14fCoC7865vbfUoUD6otEAbzBhYyP1AB7GhdtLiG5keAgPuKr1P4M6Ni",
  "key9": "3FgNY7DDD48tww7BuMPTTny9shfHWrkVDkgvahgJZBqN9dzUXsmXdq836Ct4TXPGaASjMYMyT9hJ6sKNtWnVSKXS",
  "key10": "5XXZsvZxosAVjS96APz2tgCLmPc5SQpZqoeUunH3bbqXumj43us58Ho3mcJNaK5hdYDj7BvQYYeVj8XdZ1qGm7Q1",
  "key11": "4fGgfhPVhgLdBzUz8LcmRfYmuSQZ2zBij3WLL86HLUH1TMCwfK7Se69m8yRGistYapwHVUyUYXFjjFU62yxjmCAx",
  "key12": "5U4dPG6cn2GtYcU1c1uC2mZBR6yzTcgQRs4sUJPxwaBjEPnD6m3eCWRR5Z7TzJUCpvsogsoAmyboTdZSPnSPNjCH",
  "key13": "2apTvURwHotb9TiE8CoNM8ciiV9BahBGqrrkqZj4kUwREUZJyUhH7aJbRxQmhGuLkv6pxbGmaZcwopa8WxeqN6Ek",
  "key14": "2kXoMZmTZh74PaV37VZ5E3gSXtrUXjVczwpn5PZCDg6WeCXTxXzPALfUjjXVD3qExAspMGFB5s4MroUqwfQyN4zo",
  "key15": "2KigBu1DftfnZUUN5nd8P8f5n2TG3U1e3pvWr1d4qyPFQQ4s1fydg5NBHhpntvxnzfvPP9GudgPm9yFebYgkQgtt",
  "key16": "5mzX8ahboVcCiDDM3T4c1SXAJRL5TALcE2ogka5oEyU8mXk7x7En2pGaBbh5fSM9inke4HKS2U9jYk3Mf31rhDYA",
  "key17": "yHyAQw3RB2o2MLnx2A2rukBUxNT7Uf4wn6iJsUpN57Ycc2zm3qdHtkQ9BHdhrmnjV1sqKMYGiPZaooF6ZwLVhAW",
  "key18": "4TjrM3L8vcror1DSotpctru6zhyiZf5FfDZW3nwX3755cjMdtdDKQmDwX5hZLxCLe2DxDdUzQ4F4Zgnjv59Bnpsn",
  "key19": "4D9HsKNtP7F4uhBkof1d3BJLLqAd3sv5X8cEtiEopYmX7fK7ZmU7VFjTWL3yRJgbAKhMttU82Pr4kSERQtWynfmt",
  "key20": "5Mcf1DcK1bXJrfoXjfn1hYj7qze4Qw72topPetmq9tzc9xxk9sA5wkDyK2Y4XAmnN4mxdb5EKGfvZcJ2vUFRSVwR",
  "key21": "5n4PYHBZKdv9itdte9bi8mm1AZuuj5UxTawBH8MkhMUuJSfuDnjDfBSvLCy9ZNYNRUBoi75RNfT7pyz5NYdTBRdT",
  "key22": "CZhfMq8EkxQaGVf6XL5rLjHUbN7toSUhv4UZGhMioiSFAP9yz6XEvrjoYUC2LdLFgjAgsUThZDumPRjLxVnRgy1",
  "key23": "1n2N2EvRmiWT6t2td24wNwutyyYW5Zf4WHWb8t32gK2eMpgYWQWAScAg8iQg5wbTNPWTXKxHYEuzcdJaWnWe2XZ",
  "key24": "4WGsbs91CmrLfHqbuYzNdXuGbCjz92ksk9jfBDGmdAbZCTtNBdXNHxPUmiaAyJMLm3TN3Cd1ZhsqWDiQq7RD6tfp",
  "key25": "29tnHSEBpq6LBermuDghJEv639oMpzaeDwm4FfA4jfHaU1iqGqfKQRtdGUPVyGEzrrJskqsgDQcsEKn6A3GeNnUH",
  "key26": "3rNxsTJHjsxfwz86uYC3d2x1XX87vAic6s5wUyLMSTn9eU4S6NHmYK8F52V43gbKXKHDLsnA5uWrVhAUkQA8cJy2",
  "key27": "387z8rqEcAA5oYtDfKT4sDs698n3vwjZm8fRD16cBEi87mCjN599xAW6Ai5UAgiwj4BWwryXapDnSzoaGmhUqbnk",
  "key28": "SXfJnw8xpG4VARrdbPZKbEbm4ipJHrYTqAVnUEt8cHwpophWPMGoZg8ZjhvHREh4ESm21CLf44keYPrCAE968dL",
  "key29": "2qLXZKHmEZo9ctPP4U8cW4o5ekiB4rAtZo1reAcGJYnrQcpqvoToidLkU2G2H3CDdfW4UwtTVGcPRPPWEx4BVJ3B",
  "key30": "4n9LNKPY65gLic1vrx6NRhqMRJdVpHBo6VmYx4VPh6yjAHYKmdvDS5W3f6hhfZy1rZzioDGoxmo8QXvvuVHuXQdF",
  "key31": "DYLco9r6MNJoMZMdbob9cbM2zAnac3bGVosr1TBkVowsxAznyoL2FKJD1zKXMuj9N9gsGQahEqMKNtY2u9sosQG",
  "key32": "5iDfC9KZrL48gsYySajTrhSDtWVeCthhk9gQAZNogiM9X8639Gd6PVdfYiMvRacowTuGu63UC5hSeZpL5GSiBRKy",
  "key33": "64KE3gPcB7wH7wmDyEK4eHsbQZS52ZTLVPf6yRcxstQXokP6iGZdzrm15RRBNFk6uRtMdMw9uTChHCMGWPCowp8S",
  "key34": "2ssBQQfSUFo4NaRqbzusSDBA4Bz82PiRRNYBX12H6Ue9BebZLCasNJChJhS5d248TeK3i64KDymEkVJrM5rXrnGx",
  "key35": "2uXn2ttZZFUyRfPueqYT4NmvZGLunZvKw9Njm21xt6rQ1qnzteEpVnLe8Jwrfq17HjSPKn1CBf1UWPjuCw5U9N2a",
  "key36": "5nYYuaPmeFKUobXNAySaVy3RcYcZCdUQBtFFZ3bgKx5jrgxdQKF9LwntsQ6CiKq1Jg4rZdLTYDQxPorGkjon4yzr",
  "key37": "arv5waGyZrLxrXZMMTVQqdgC96i6BpU5x1j5atDwj65cSLg1sDFCLjFwKpCk5iMGXwLfZ51BF59Z9ehjc2dB6di",
  "key38": "4PHNzQZpfsUSsB1ibBRo1rX1qmtrzLLQ6p5J7ptukq2WPNbgc21xy14vcdjGT8dHkNGQsjx3Zg48jwrxnAKiQeo5",
  "key39": "4MCP2GveGA5gz6MyzNWQJC2S5BHW3m6mWhxbNnryvdvmPrpQNGAGm24xsZYF4GDdyoK5xLUmtfgXHUfrELKNDvtK",
  "key40": "5rcixAuHCsU2JdCHu7agmCVXmBgmfm7npKo96J5TpWG2p6d5F7vVcTudLNkBMXvVS9GzzXXX3DFhjpgbKBtVLWYe",
  "key41": "3Gx743hoH9i3L3wrxkNcdGA3ZvG8JquPM5K9TweVw85afhXDfbiDKPouiEaUHoTRZTdymP3PAAwZRsZrkugTRDQf"
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
