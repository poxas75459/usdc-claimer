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
    "4cebTwUHVsFi3KgoVMLELoTMafxPmsiPi54QV9eqYktLEo22taGkoQG115Cy5b8kt6QT2fFN6yDXBkxMQFm79NSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cCLnzWi8vEusAyi9z83RwSB2JeGYmQmKe3MSkQ7f2sYsBMjHt4yZXwoshgZ1k8sfDT7JVxf5wBYwzTPZaPfcLf9",
  "key1": "2iCF7tBQHjoD2qNvDkkUJNWGcCbs6KqbwH1jHx74kv7BefR9mr26duWWJaCsESuN1vC7jaMWfXSJpHN8qQ1KjLVD",
  "key2": "4ufSAfrFNfVGH1EfgZPsSB3vZDGv4VoZSdKrA649c8DnRbUqBApbJ7CQRNMEHuXgjrdD4Mc7jLoAWgWSdSkEeXv9",
  "key3": "R5evdERySrMF3WP6toxU1oQLdwPFHrPriDhPNiBo7vDdAxZDnJ2grcJo8oLaX2bVgjpXHfhyZGThj8CRy2PHC2N",
  "key4": "4rvi1b9ezt5yswbRZP7mZDPuxXMgRRSDBqWzG2EvZb17UpVkGDFEonQhkwEKBfmVVjRd7N96YsHaQjWg8LwVue32",
  "key5": "3df2xt1PxPe1EkorSzZsX87we3UBTayFhS19cAzjQR7QfgYyZ9hHak2FD9bJc56ntnxVBtchZzeK4qvaGnVt9HNa",
  "key6": "2JW9XBe2LvDJeivaGYp2wiRijhyHnMqrcZxS1PZkRxZqRCVDRheYeb1THkJhKQiQ7sfCf29DCWbshGLwnDc1aNi6",
  "key7": "3Xby9gpQteehXAuFQt3PMfz64uKDKVjXbjEVsS7Dsqxiu5kRo8eaWMMz1rd4NjqxSJy2tzseraXNbEBNDte3wdiV",
  "key8": "2ddfYpd5M7VtHoGwzTRBv2s27bVZRFCTVDyVyKB21Wa9RR5atyypMCc2KrD7fXxerq7cUfCyUuEpjsgcWgfJNEYi",
  "key9": "4JR939T9PGyr2ABAyCX8FDA5maH75myVEzWnvkg6quMLLR13k4cE66nxjV69zRwogs1RY1orXu7a5Mavz659MfMF",
  "key10": "5MBbxhQHzPqiquJ7cCv5kQdiwYRqV69cGgzMQgPviZXSDvvL6CrpPcnqwbz8HeyJR9dTKHDgrYJKcjUn37zzoP8m",
  "key11": "4i33R1gftAHBguD8yj8UfDWh8YwoqD9vHtqTaKyU5YFBo2nivjdYd7RH1mNJ3MtjF3ZV9g6AZiXgaRQErDrMbmnF",
  "key12": "tyHWSKQbfajQoSCCZxwuFRaeE7muvg77FSKtTYBMdy7TmJMX9RdvCjeq24nrDRgvsQC4YNE71nftzaLRrXoXHbf",
  "key13": "37nkHoLeKbE1hqft54Syj71gFGZhijRzemLLgNArPxg2GzZhbKmj6cF9XMvw4C3NxVHM7pfRqzSpZ7DqxHZuqDjg",
  "key14": "2SH1kzr3HytMg5SP1pjitzZnsncoZxeZYZ4ETpV89urhe7zspLReYTEnwiwqnuxGrX2ftrK5bYifvyuFCCWx2Qxe",
  "key15": "3vbw9LYRLhThf1BkoGC2d3ehh8GbKGpXYRc1J76E7DMYQYW1mFujhHf4fKnb33bbK1XTKo8eYV8yH2HPaPd2wJgc",
  "key16": "5jFkMRwcFaEyvAVzXHRSEY34iveVJAcpL5dg7TyK4yuhZHejcrmWARxKB9vypLHUo16hfrNyVHGpLfChY2aeCjSJ",
  "key17": "5CsVRZsYp8z4LA2ZNKbzX3ndtMWUr2XTNSgKayBru1Y8zAnvD1kPcjMWTXFFwRPjgXSiXHrZPL8RMfyhhYHQFHqS",
  "key18": "KKh2V53qLDQm4i7eo8HAqCKWxALoyztugj4j2zZN6FkhnwXVVPg2bd8MinUMNZQGJD2TtgK2kdAUGEdYpUyYmkt",
  "key19": "2tjCmRfwL9MJj9p7FZXAmYi5bGdGQB5BpRGYtssSgEN9t4vwDXLkiizrPe6roP4JdbnJxWybwg9hHwYSvhXBsHcR",
  "key20": "5mAz2aTwnwJdgeDQHYQafwioZxCGfhTQGnCB353M4rftdjWe584GXq9kD39Vx5qrwQPsNAtrv2NH4Qhbsw2n9yka",
  "key21": "56215wtowf4VCZZcqEPG5KKcCXzpL5aPJ1XZo8RTfX6uck44E3hXHqhhDnBb6beodbLajxgyySCT3dkFQBmAGCB6",
  "key22": "FSn1NQWT1ic7d62n4TrVhCyHc1VgGd9TJissqdf5M2gQCHWNt9N1hL7q2XQYUdrewHsps8eRoQmkegg3Qub6p6a",
  "key23": "4UXryVvKsjz9yT9R2ohR76dWbk29Zhg4m12KpgPQebV8LKhMgQM8qHLLSKtCdyGshCeuqc1m7XeFvi8Kkc6XUXU8",
  "key24": "63Mb7F13kE9yMMSn5WgBtffAs8MmbHHSgThrQhT8n9kaugSEWmDdpQCHsn9mFjPdsPL1XnGj7w1wXJoDtYHab5Xq",
  "key25": "3NZdomfBVkgpYqUvwn2JgynQ9oyajoCw4vJhX4UkKSqFavm6BYaJhUuQvLKtS55fUeoZBStDaaEGUAfDGR7xQWvQ",
  "key26": "22UdHMBidkBAh6E7YtNXg3JegdwGZq1hZbJHohPEF6NzKZNM8t4FckBnX2eZgh7nQA2z9FYTxUSedy4X2FR2uYwY",
  "key27": "4qvB7FBUfB15iCunqRqwpNoGEsURAL1asgRMpmfhVB4PWNDqLQkh55gdbCRk7mZCu246RNzZ7Bj3vE4GiY9nQVEr",
  "key28": "2mCNcGNEYn4o51QkCchX37extfytyHtFzWB4TgHbJtT8NYhmHAXF1caTsg8mdYGgoLCP91V1hvQHvmwwWtAXLYbi",
  "key29": "5FzfAcfBcY9XVDLfGSymJkt8B8J2EeYRBxg2zxPGuQ4WcuCGnwDR1gV2jioHrivu6HNsNSrU2psmPngXn9ogKoeF",
  "key30": "5BWHLNHZw2udALufCQ8p413u6E1dABjVkUAFgXwBYJDCbUoDv7YMF5t5EpknD9XyoS6MwJJ3bSbBaAVXs5LtVv63",
  "key31": "4yjxwgtqbtexKng9MeRrKXJTKhhhoXdZhmivHGJ7TrTrooojC6YWnwHxdhHkHVehPynShCPJwpvNULdpVfyH6vWK",
  "key32": "2fhsmt2b7eCcNMEK9uZJk9bL3wzwcnRmS8QeRK2NwNXxVSqEZsbUwyhKSHE4NKPWRxC7rbwoYhyYvJrDwXEx7Tun",
  "key33": "Vtd8FF7GUr6h77XW1LxzjBZmsGKmTj9YWVEBfRU6gfekBajBwqNbmLjVmBXAHZ99ELXs1paYSqxoyuHyBcZBv2T",
  "key34": "4vEkPdgK98yDbjwgUS5zntNikCoZdnYA2kAPKVLvLW2ca1rH3e1Jesy1XqGhtzAvWq7oNZLEgbigJC4T3JUSGzB2",
  "key35": "4WVXBsYQniQ53L91hZJMiXabapGNbfiqobwdiX2ymLLhYxKQLeo9bUbP3v6AxCP6UY7c4tnhkTQbLxAJgdWwnvLb",
  "key36": "M3RywWy5oozpw1B8SvsKHw1xf3cMgfKXgU82HXAYVn7dntvtZA9TB9jjJcqX8YeGDVmmtnNCe3wUrTr7r98BffJ",
  "key37": "3GbdrRLc1mbxH6SFGWwbNB1HXo4YWszRPVAuwj72LJKFyD8BdrRbQibD11qF3XGQFf489HtzHNKEjE3KWNaRxaSK",
  "key38": "5nCSd7widLZRanbR5VVa3pbkthPHV4upinz3TTTF61APNViGqH7fXVo7FNk83cVwKcCfMEdJCbxxriwW974TUthk",
  "key39": "3EGrxgCD6ALy4YhiXJefHWEJBnoQZbTByaF8ZsL6r61kXkujehmfNvvycdPhA5kPzexAwNTYEGLsWUho9ygQseHu",
  "key40": "2AHMUwkrsWkQcHZS458VvsMQRLz6JsD4Wp7gd3qSUp9AGPj8bzbZbw8nJ739SmVm53qoKQTmgrKGhUFX77ohnca2"
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
