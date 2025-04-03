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
    "3SAcf8m1PsVoF9uK6fjbkEzwhRFLZvTuaCEBmw7zuagvniRXZb8wnxLQ5MwQjzxamrM1AkVtHE88d6yiaz2yEkAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L1c4Qkcnen1hFF9zMFoizDHFEXd3M7v2XzAratkiiRGi5G1FYss2QqRCkD5uaCuyi5fjqM3o96kLrsPFaHCLEmw",
  "key1": "4ugtwZn2cHCJs3B2KQqrFDw73TwNtnv3GSse9FMVcUfNCA35x6pJLosCzsH69kHhxh6CcqgZAvyuYnLw5BL3VDhV",
  "key2": "Dt4R98nSGq9729er8XivCc49s27J44MYD5GoQsbkUUsoXmFcmgsQVxtA9qy7DtseSPbq3EBnaYaW8YpJ9aDUKbD",
  "key3": "35eubdTPEgqhkBGw5pngzxsuAx3UUR79LWGdAufnvAcXiUojMQZnpvV5hGZUe5wUPRfb1FeznqaiUkeBB8kDSBQt",
  "key4": "5mbvJk5Z9HC6GsMPDY8Bf9LGoXz5AfiS564Q8hVG3CM7U3tbe6vupJB4NU9zP69bZF4coLBqD1FWtf3arzysXVF4",
  "key5": "39ssrsPwNYbEDWGiRKpNr5G9B3R1rJLAeX8LrzFjgEVVLWEaw4gp97ZTj8exT8jJ3AnsyMmgxnFgCdMi8i4kNT9N",
  "key6": "3fzyZ7koHHH6x4GLCtA2qbmvJN3a1wAV9jnmqSWh25Ac3ncth2Mt8iSyTYPCBiaSjHkNzaNJTUgd4abUhMwgsDvu",
  "key7": "4oT9i1CRVCmCp1YoqPph9jj2jFATd9cpwjsGkJ8kDe9L7GyduGMh1mmhKEQ8VYBngbKuT9rizH6nurmqXwysoeZ",
  "key8": "4sqcLLQEs7ixUyDviBDt5d6qz7vyUSjvp5S8Qovxq2qS7WLd6Q1CBJLrdEF1axsyKkyxp1UMm9rZtZ6pk5vrfySk",
  "key9": "42rM98zVTGvbdBdnR8AeX6rgEAc53hQiQcm6gh7QKYamSVbZ44M8FnLDnXxreftUmwRUwG1MAVvAN4jmka6HyPB7",
  "key10": "4zzWRe9evRSYiWfcxchKtouzQcUQnoiMAtJyPK6ndT89XGM14YQnGzfBF1JnEey92VKoonvdpwcGyAcSXUCqU8Ax",
  "key11": "31QyxmavRXNcU6TEUKNoeM5j6wRX9R9jYZvKLK9YYZTCbBYynXRyYFzShgkGPyiY9zkpXhdHEUBb6q63U4bNh53v",
  "key12": "2hiz9FsqVpZCxMVKfZ4N7SebgxKfyLjL4hUNeuyfgfXkRcp4Mvdo8kiLtkqFTU13odc6VcKFGMGfeVF6HMXYfioL",
  "key13": "2JvKRgAydczMDi3kfFDSq5bqCoomtae8GJpduALNKML74LqrwLCtZF4kAcqgNzH2RXbbCzx6mnSRH7fVniUs4xe1",
  "key14": "2bjSfVB3GJNpCLCbZxzquyUyMVXJLWD8epvNkqivDcVQgNUVBiaYfU8UGzJu6xB17kEa1P6Vt2PQ1SYsXnmyUDrW",
  "key15": "4fw4zLDLiApJZd9zJCZdeQmcYiSPwKozk75u8NxxFhG4jzrF3e9P3NkXzFJrEEcf3o64crCBaRYkdoFucBDgnshR",
  "key16": "4uRJyTdmqzJX6JCSdZAWzPn1ck52EZE7Y8D2cyfkmQe7pd6PDHVbETB4AuCzjArKJAVSG2d5FMAnKH27qPNpqf3n",
  "key17": "541WG2hGJ1A4jVakKseE4wT61v8qijngNkaCu4WpVKuD9W2rFcZM5ahGePwNgVAFWc5XSZWQDgSfWQ65xYuThxHD",
  "key18": "35VVDGh5z9afQ7GW6fvjafq5ZwouiFAZsj9W6rhTp9ZeZvciFa6hgeETHFXU2VmzW8BmVsFMn9dpbkhQo2pV4Trh",
  "key19": "3JrbdogWwxLLM73FKPrAgLL4yF9Y9mL29YekxaJxTZH4tk3FqvKUBnK7JpBi3xLC2YCnHEEqSBQEQbarZ5QNh9D6",
  "key20": "qPWXcctpwo47go2rm97UVgLNoSWhggqT4KzQEBoWj7pDhzGYBKUhtJbbPXGjTNBjYud3TUzmnmmowSHS9w7HqMB",
  "key21": "3z9KC2KHBNHUWWscsEoL8UU16hU2Sx7yASoWC5GfLrawL1vdnzeuGYWnfW2B2fR795kfkqLa3fFvFgtsAHXCRMHS",
  "key22": "5gzB3EpD2sAc68TyFvJhAz9LPtP1Rsyzz6FCJ1y2jQvNYMDFrWUQP622GuAVpXqdKd5inX9UpFL7sx6wW6HC4ndY",
  "key23": "2f8HxTDG8KkYWXT1z4oopwXoGB4MnLkp2gjWFXkqds9u8USppxryTxc136sdEcn9gW6RAx2oRsxQgU6FTp8dDLeS",
  "key24": "2sRdbyvUtVjh5FSuCcneudctFEvmMUU322j8nfcDXrbPKR6BNe1rKmHkB1QRzEHKgDu9phamcKqa513kujnwKWfo",
  "key25": "2pdGbUeKSr1HNDVscGUyyr9Mq5FthbjaqZxxPqVCKmKUcHdpK2uGJuGiVTowggRrYMCWvehvqfPHiUkoGgDffZ6M",
  "key26": "2EMK8HNwTAxsQ7CPWhma2WQPwwfik1tRdDCSbEECNzVjpYaYWKQctaxuMUdYarmhBGqnopyjfZQYh1myWJ7aikpm",
  "key27": "3ZVdirSESgmE3HxtCMeo6yQYqj29PkSE6gHbu4J28VBV4YV3qDMHycbZrbAoYAxLQALqpMsoZWoETRXgSGwAVaXQ",
  "key28": "Qfww5QCqgLBwNqz7MFMEe4oBXG6VVPoQxGcNwLbSbN5C1EwaqVSx11Y89RoXTRs29NKfwaRt7JJft48kZMjQhoz",
  "key29": "mwfdKmZR51wBJHXwHF2ubsK6QcK9PKL2gwXoi9aTr4DBJZRQGQeS5YocGpBKBXqCab9ip1zAaDN5oNz6RMXnZW1",
  "key30": "ge5LL3wGMz6SfZ8aXj6VoTD6wBwDedQHk3PEJzHMV9ZmEi7ouHUCqstdub6giTKodjFczm1gZ1HiCuVYCimompw",
  "key31": "3xH45dJ9MT5i1tLGWXEGtAMoLfpADm4M9PiGb8cNRFfALbWGk7WKwrTdk3YzPL8RbhT5xaUWMWs99Gwq6PAM2pP8",
  "key32": "xV57pLM9psU58jUuxUfbKowB37PtYKqBEoi1gJdNfesTANW86ySzd8L4WYdEWy8dvyLMBCHSjJBvzPeyucAAUav",
  "key33": "3KacrT81Jrw7GsTcdpFfyZ9z3hTTad7VwMT76v4EVS4QckrbAKWxQz92E8uK763mbUoyqDAv8kQFLjPz3V7sbCQF",
  "key34": "hoEdMZJA16edj4HEkHoHsJChf7em95A7eGKYKibGThGwhbDY2tdTy93RmiLncxGS5Y8wJJNTuxwfbyQFJrwJeXr",
  "key35": "55GHaBXWqka2NqZsJBizDKGiLZ5DjmUFjCehP5kptLXpJHWGAXsWSEYoWe27H4FXmrP1pHsGkMmZe8sRW9muX9xb",
  "key36": "kDrrz2tN66NNcRi2is3YuKxcjM51kS6X5GWZXp9NgrcLN4hyHo1VoNe8wKXJaQxPToAazS7ukxy9MVZyqDRYN6Z",
  "key37": "3P1qBLjwQTdjHMx5gxeGjG23JYtZk8ZAAiRUVkXVgQFuiYUsRVYz4wSM23in7i5CM1my543XJMCR481CivHggqto",
  "key38": "3S3xpnoeB8JhY6fiu26qQ7QHc4E7jb9eKTNXeoghDuVegNboHk5qEqR15JVZoSWtqdr4Z1Rm8wb3LCYwKFFrNwXC",
  "key39": "5o4yWY7hGiA3yWbscjNEbMqYxKJQ3dLojRJTfSTJARtjFGKG3fjNFj99BMSUBXwAufKyLQZuwNCCtTG8fjYiiQwu",
  "key40": "oyYYBVKFA9kArmmpkFqVvzvuv8VQuVR3kk2KKyoHTLe2XTxPRrccXfuEHXmJ4zpaZj3trgxFQA3Twip3x3XTviz",
  "key41": "47FKGZRVnZSY8kDQLDN3u8jLYEppacDutGK96F4674WEvzNmTM9bud1um1RBy1vQJWRxvJ6QmPoozZuEEAzQxDRK",
  "key42": "4WMjTjfuTWkZjpDzrwSzMC6Fq99F2jj3S8tVPJXhdaUkwZFdweC5qqVG6mn5xBesrHJJUsUJ7Qw2YFhxDsRG6HSD",
  "key43": "3J23Xasz5C84bRrfA2U5YoJEGGzZxDJ2VET4Bpeb118sRCG7UP43xxBSVByhcsGcqUNHjUnLR7LVtMotocYAjKaZ"
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
