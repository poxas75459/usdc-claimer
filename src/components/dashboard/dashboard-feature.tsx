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
    "MHC6XN1Mvwjz8VzNkEWhiaGQXzW17MHtki9Zsyd4SFYe55xs1qmUxKzHXVgGvZcWfG1qmWnvEBukqFKTi5Dxkmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BZaJmNXc8hnZbDySGePReNpyMVnpg1Q6TQ9NSFnMYPP3U8CmT45YnfhG211qM6xPy6PonqMXNgm1Tevosox2q1c",
  "key1": "3wkZZqVgDoKrnGHZcYtQoyT1WQKigAhzgFiqA9Nkr2oUaSoBGGNrqEy15TbdZ5jstyfXDgE5tGwuc7mYmQ2k5d7w",
  "key2": "31d2vn2DmzwNBDvb3UajRu2a8ARUFnmmz9yNvB8SxYB6eeHvWiGbyou2MzyNBP44heMmMrgzzfi6d6D61PCPXmvi",
  "key3": "2KjhNRwWmn5ZZta8ScC6d7pgJaqV6M392BoT9eBzKcDdmsnwAVYiJPJUt46J5egSUYRUoQQabjcijLeaBSx5RALK",
  "key4": "2Au6uRojUMgsFpGLYiCdxRAHJNvqWXSshTdpWMzoSTyuLETwLVjWy4R98TgEVAdWjsB8gnDb3etrJNqA4kj99izF",
  "key5": "5zkm7HkamZR9LcnF8UnxLkrAJgL8kna7sMkuVvGLybHwwHyvmL9GccDD1YTuJJT1Z9GNFBGAY8xw9UrBZiG9e6hu",
  "key6": "4sB7xV4q54NifYnWK7y6VfVg4jhLuqQCaWgTGZs4koaNhEi2kyrvXzq2ARecF4uc4quz2tXnWYVsYj1tB8FVoC8p",
  "key7": "268euLhE97o2wRdzsBYZCBtvQXqRqkLDtbtAanMGXpiQCoruQFF7rSFb6UGHC8qKoFQmJtZ2xsHWi5JkFQuP9MKX",
  "key8": "2f6ifmZw6YFEy7bCYkx8a5LCqSZoBZ7mUa8KJUDk9MSdp2WaLt8qUHoxjpCHaAmWaY79RkLU3UV5Z7oroemPR1np",
  "key9": "5auctAJwHkPp3yZ2L4Krss3WGtMs6nFWTVEkVHTRoAqQDivTBf2rhnV52646cGScGtjnFRCD7mKsNk81pyQnFXiR",
  "key10": "5pn16UXwYu9QoNoAriZoQSKspUAF7Ht4nwKNejCQdRXrhfSqdp1Ej1rLYZ2oyXE3o3TnwSMa3pDaNP2ncxnxamCh",
  "key11": "xH995nDkapqTdW56KCvFiHYyoeh93KthP7VQyEj7MERGQnAMriAoWFkXVMqMU74RsmVDqB7Bh64GA6RLoRv5Csj",
  "key12": "3pRVRW7cQcscyceY7p5pRbPE5eGt1kVGhrr3reBkrjAVmocDQKSy5CdZGK7ZmLNhKRTkrt6m8uRFGahT17XBmzKq",
  "key13": "2jQzJRU3M9amQ9JZ9EaviGZgaAdiQTpQaJYtKEJ4qhbqyBGHgzeMyxbVG6qfybYrdvgPqCViSVTE9fKNG5dLRZFA",
  "key14": "2wUrvRGuY5ok1tWTGQYkgzuPGipdW4pVsYQTNrZ68CYwex2VRoN2s2Xj6RSZPLPnEbu1mix6XtEUdmGBR1eDUtHN",
  "key15": "wscj1krcxzg63sut3otu6qGrDEhg7sN8JZdM2jwYcaGEk9wZ9cNEJL85h7cD9saiq96UAcUevFifW6nLh5v7fz6",
  "key16": "7UuTDyB3MopTnhku2FMinSMUYYTz5opwMkXjitqhYhY4jJNr9NcEmdfyi6AYL98JyJMHdZ7wXrwS3A8GCPjyLNt",
  "key17": "3HTmuu7bYaghorjMkpHzoY9KDF69J2oMRmD2eHwT7VRQQQJ2uLBNNyivfcfQLUxD8SDP9WZNuQZiyd3hWy1vcpLE",
  "key18": "4J5Tf1pMbhbEp6p6nedotXUJJANGn378vNGPTEaX9izEFXtNtrMb8pd9JCR1mKmdaJ1n1ZffDGfQgrxujLRdb3hG",
  "key19": "2QeNUPo3XugRPJVBwwNHCt8THTjiP76iyjdmtDTSaF5bdudjJHcgb6mRPY2UDh4eCGVN7uSaSmdB9jpsJwuCpByq",
  "key20": "3FSmsuSJNC5GmUADuxk1bgtGaVpfrSqehNPmWjxKuj1Yzzn8E9MqkQJwfYoyLPCtZrsqKe73sY4yxaTFY9CKChhG",
  "key21": "2kEw8pEeNCxHrhGdZfUVdncsQYx1X6BgVmgueCZZpfmcWdab3V9bmA2df5ogUsVJkaTreUhwoHbCo7J6SPSgvVUF",
  "key22": "4av1cx5C9MjnG2HtWTkgY9j2fzft3hCpAye9JvfpmZw7sVJRY8k4JLqRXmtvBnkQmN7Kqpyd1pRdTTQEqqzaxp8z",
  "key23": "w7A3eZ9oiYGpQFycZPPDsD1A7m4JFjPQWLBhpwcLQH281jPK7asEyGDSKTtee2kv8tDbexDWeQB8P7TS48LPRVw",
  "key24": "3mvQ6q6ph6iTpUMDjEvNoS1VRSzHqxg6XW8uTAMfJ4H5R4UxsGp5GTJi3Tx1ipa2FjpuCvU3UxTSTdwJwVHh9uDA",
  "key25": "4cFq7GPkqdoWNEsj3G5nmeWk6QY33DzAYfTx3qZn8gCPdnnj6HUgytseGvSeyx6Nn3vN8AwtBjhsJ4QwXpRaPN4k",
  "key26": "4Sr9okYt9C3M6mfxp9qB6WQq6w4wcjhjnaRuAyhTKxwRGe4Uj6g36bi7tUNQAjgK8q8XuRj7xJX5prpPizGTf13a",
  "key27": "p6qeZUWdGGKqz2GF1tc4g4StxDcKaDdVABcpSRkycGnLpCjSfi7qRKLvkhvjQys8vk6VmxsiNbGfDfu7oSCGVTR",
  "key28": "34d6PVfageQBJBHxURzBDZaNjkRgiGNZxLiZyLxfe8qnDuy7qQRVNVs1CJMptf19KsKUDNzHHTPSHh3m2foaA5X5",
  "key29": "2m3poN2bjGowcoG7drGPkPfDpvK59xfryXq31NEnUgVRzXRxDUGoAn7B2mWJzGuUr3gw9LCpeAakDj9MkMHncEjV",
  "key30": "5zuwvz9w9NEdEzv6b4yjbXtQTWdkkE3wVpFQnqygx7uo9qN8oYEeScya9PsohtRiATubj9Yrgfnq1uN9qXfinULD",
  "key31": "38dkFxXX8ceDydcXm3QdL1zdbWWekuahkNLLiLN1qx6a5uHrf5J9mqiymBUXQXtGrQAdeetBvSiyDuNMhFV5tvz3",
  "key32": "5ajw9FbDZ6MWEawJ53Pcv9LCrhPQ7p3dP434ZGW3iNgCBuF7mPY4eb6T89t7z91DLZbXXJm9xWD2hNSn2PDp37n5",
  "key33": "5VqAQNyfK4Z2JjWthwDK1nqQV6sr3cC7q83y95FWqJJpWp3uLwctQgcvBCDgke9PtkgnsbQsRdKcEk23mDMyvze7",
  "key34": "3P4a5FDAaWCC2DARFf2R8UH9KnMEgp8py9ro63S2SKJFmSgnbdC6K1hRbaNcMAsWDFoMrtnqe7BBkH92hmwLQMB7",
  "key35": "2NvH1sCQNGVyMwfwixgyMpRjV5AipmCB89AiYSyfys1BB7Vy73RM2diPEpXzSjHB2wJhM8ceL9KV1cg3eXtFv7H4",
  "key36": "Gs42MqSfUxqpVUSZUD1MBB8uYQojejYSuzPeYDfxjZgpSDWdKS6nxHys2t1R4RmQqA2i1hqPm291xpMM9NwvMR7",
  "key37": "4W5Wjo63tpxwmVL8T7eoZyVYdn6UWhNmKeGXW2W2qpNnEEw1Q9RfzHci8Ud6Yi2U5j1AryG515iM9ESBjijsubmL"
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
