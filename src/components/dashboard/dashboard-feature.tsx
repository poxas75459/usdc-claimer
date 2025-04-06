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
    "36dttREzKRw72juuXVWnoxxMh3din4by27fV4kzGfY2wAG44H4RK1stwk5MTFPDymZoWTh5hiYi5S5kRTbXjb2Mr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XFMmSNMZFYMZAvovpqqayb1AUtvT8AxASzCSsPiNKHuFd3WmvQJ5iT6Fmhr3xMGSYVoQA87srC6F6DTAyg5j2x2",
  "key1": "vaLnZJ62wAFeptowzXCfkx6E56pEMCHtAEK1dyNDhyszvctCYjFLZ566hVNnSnCNMQ5fU4ND4AtteVyuuRvMZBg",
  "key2": "2uqcBc1uvpXUAU3SNQMmCYeGBX9cUeB3kF6VdDXCy6cNHH38cQcTgoVXhybzdFWXQbYJGyGpBK4aMj4zEw4aM8ap",
  "key3": "57SNb1ascY4Bzx1Byw68cr3kXBtQUkd6eKyyaxupTZtf1pQSzdzuH1j5udaBjD5ssH3Jb5vqucnCpZEhYmknhCsE",
  "key4": "2Xbi13s5e6AU21BX9BxXrS9ytCHxMz6d3ztQ7xpFuXRnN5Z2Xxn1UAG9q4Tie99wACtJiGA9pprhXdN8TbM6WkDp",
  "key5": "58Xt8TXYs35C2FNT7osTSmr4U95Pm7XTaAvJizScJxeLfz9c4uy9KnXCH8TesSf5TzPbZMoJpo6p3gqi3BaDhUoh",
  "key6": "3eAedWvisH8EthYgPhXp9wMDGUc6YmQgdXowq5r6mdD4wwTpCDuYi92dnCPLKWz2MgXxiasCNAB3HNtUSn16GBW8",
  "key7": "2m4Sp1uD33ZAfUyyvpQ8gv9dw1SNGdwwVtdeJ8z4PvEpjdTpxiEuh7p96jJR7e6aSR1CLUAESpEJscmNJPc7RB1V",
  "key8": "5qc1tjb1f6fAFMrL9wWR9VNnAZQbMw8JmSM6tyDNsB2YX7bRVKdi75nQoiDr2RBX3PJzRf3c1sLGbyQ75LThkeqV",
  "key9": "4LGJS6kEuuSEavzdRUsNiZdbjxZbENNCcMCPA2QFHAcYCDDLA7hM1xzpsZ2prwyqrZ1uFRjwLriUEBFXTyM77tzc",
  "key10": "5xmxBHDecVhubCzr9hRhzUqLJfvK9ya9ALSeranWe2sqVWbtF2djgSPndge25REsrxBmyrtP1xrjaYb8kmFNgzAb",
  "key11": "1RfSptZ29vvRqv8VtKYCBGwEE3wUMU5aAs42Pc6LzyKkZXfyKYffyisy6q5RiCSAh5iN4iDgoU2Hj3hW3cvZpmD",
  "key12": "5T6yG4P6nE7XK2g1NLiR6rCcW7B7P5WBc3vuXMbyArUmDd7vMioRzDK9xzzYk6QNFHAZuFT8GX6PDQDCCuoRVsW",
  "key13": "44MsPZdfzTeA5Dkg38o4i9XidfDA6Ecj9SB12krckmiQNtxdqt4YVz29hoDMaaLFKMjc6s2abUedGAwVPgDigBXA",
  "key14": "2mQNC2kxGU8EQdFtPAEa9SGn5T5ENhWqo1siZXhaRmtumdV7VrnJv1THUR58j6gTkK9EUDY7MvxLKWFyPrHCGvYZ",
  "key15": "Uto6YBnv7jJakeT1Pygo1yE8kr1gnpsJNA1D7Bb9cuJ8n5ALSSJ7BKnoSSNbw1WTZPFfties2GuCv6LFwxZQh9x",
  "key16": "2NCgDzEKWxqek3siYfVZpdk5MyrdSryZvYBdz5zmrrZpD83sz8eU6D1h7B7xYCCVMFzJf1ATRGYGLSRDnkempUhe",
  "key17": "26SsU7w54AA66pNpBokQYHbe3ne4vGj8YcaoLuZPVqDM6WNFx7bgb1yU3dAwWZztJ8xBkrdpBVmQxAGnK3qUwdom",
  "key18": "3AgwAkhrCraJJN3JNdDR2oUX2ESv5cy5LEnoBe3H81VmjLGWvU3XfgR8NA3nmdrziPYBrcyDSMkhUWJu8pGVfAd9",
  "key19": "65Ug7qg3i534SEwNYxV6uuS8bdDuCK6kMFpvDSrT6xuWB9DTvUnGujZ7N2JcZ7CASvkEEtLTVuLfKmVvzw7r3tPQ",
  "key20": "2STSDY6QebTMWHk1ozbq65M5sSdaDY1wZkm2jCceeMQaGvpWjwKvuvMuPezQfUCEcJKcj5J9vXWuMnkqtb7cwjwe",
  "key21": "Wf4XM3TmsK2xBPREJt7hFjpx1qH7sK75QR4qpgRMrWZz7zQrrbfKoA9fBgh16WpLf3R9wLwQ9yjWYYnRsD1c4u7",
  "key22": "3KKrFAwaoASdXN6WbytKDatEnwaXYkVtt2jxqSbS1SbxPWjzZ1Amw1wfeweEktkQCTiPqayfs9RRcwieK28bahu2",
  "key23": "5osNutZscbyGBDhYmhv4KUemNXHmNRkttUxjY1xxXo9fFdB6NKfHESkFighW5jymAf9VFHtVHr7zNx5kTL5TM3Ca",
  "key24": "3sjnN7vE4aLHecVkbpWE2NbuthAm3YsEFfeGca2RpTongzcjCELvD8GmU2v4yvYqEvedxeMHDFKdG4nYi3iCMc5p",
  "key25": "4BsFwAjWJKd63J6swv5RFkisCWtfW8dnxKKQJhk1vkVwmRSwrfHj6Zo9oRBm9TdzVYg5zfF9491Dv58ByBuoMaLQ",
  "key26": "51nyqkhkovciQYj6TcK7ynwGNrj1wKYuon4yrbjxGrWYzpxvZT4ZMj24vnzjkEoDSqfLEUaq7ao3fkAb5SK23nba",
  "key27": "4jMqM9BXdLCM2EmEu85wV17TmzHn89ctQ9ed6oybH86CSbBVvpVnBsYneK6a8z5btZmxfaxUfyY9hbR1YyvY5PD",
  "key28": "37iUzj9WuKcgGUi6bYVXdtazGtGynqAuCWZRDaRKtwdG1YCiTRHJ2dEpMypAV5DM65aFzYQbPukvRRcHrds5uCNR",
  "key29": "523AgFRe8oqkwgM2DWSUTuvs3Ggp9FF9JmRVoedzhdptJPr2DN5znC1PUjb2pbQGaEpg12cNT6bUQ9SmudocEyhY",
  "key30": "21PfaY3ZVHcbqCk3n8k4uG4NH1RDfJDsoRGrgWode4EwA5nKe4vEKJoP67FataUVB7mf4psj6Jn6vPFawmVyRS58",
  "key31": "3wW15bv7eqcvHFT9CmuS6xv7cHjcAq4MbKVgn5YMCAxoKwEJqwX1gKHBbg5gDGaequYqv5MKB4HRYQzj1xtZVfkU",
  "key32": "5HkCx1cGzSTVbTP8vXh9jKZvyptK313oEUvjHK1GAXBp63hVd7hEhD5kXrQchYu5fcrdUkVnHD67EV6ijpjtKv1G",
  "key33": "4rUqG5bPEUt6L5nURWbVURzbQhBSSr3f29kuMJyVkmQG4RWXLvnCjGJt7ZmMN1jBXicqJqrfiUAq5Gw25Fc4JzmA",
  "key34": "2BJFyhMvgxiU3kUaetB1AjNHKCEDFrnLvEgyBbiK3wj7MbTVVy6A4Jyzb78KFLR6w8AiyJthS5kKw5UxRdRpHrat",
  "key35": "2TT5pSpC7nhEvH4C3WTTpeM7T9ifDCV49P23udLeZb7Bod8rj6hUpUXP8iPp4icEVtr5qTFqCdR4XTADig3iEaSB",
  "key36": "4McVtBJ18gkXX3Rxy8WiB5mXHF4E1QTtsgY8HtWrxAQk8JZciPFFPiBUAQ7DedP3kGNzPFoRTssdpMLq4g2HLwH7",
  "key37": "3Cq1WA9AQAZoDWmuxfNKr7VZzufrfdbktqHV9RAHvS8oFXhb4StZ7MJ7vQWgFM8U8cMKaNDhnqanc1k5djUPpbQx",
  "key38": "yKBmUdV6AX1HoME5bvVGxTV9hrTAzqNwwPHk87MPjU2ZxRimLGCwBZSNp1k1viNm1U3hhZpy3kjKucq6wVvjodY",
  "key39": "3DYyjmKWRwsz9y9W48WoTSewQV7fEKp9ZQQah8xNtdqUUC7kpqzqzizjUdVsd1sjvGLHm7NXuzt9NLiPbvZome1o",
  "key40": "4UsvbPvKHRkyRh8Rq6QLJH7tK2vFktoMGXuHoNvf1fh3HvwmLcPVnm8oR4EW7zRZa2v8TzVustNwDPB8pVVgopfn",
  "key41": "4qZtSisx5zqgX1RTvQjuFB4noiFAVkuNe3jgwLQoe85utgST9HbhTxaSfabZh6TuuqDoLpH8yZrFB97nfS1TgrNc",
  "key42": "527pbdB46NPU5etQvpTDBfYQG8aBu49bR9yRC3kifoDNTdUVGCFRTpCL6xca25zvDbYJ6SxXuaXymAJgtnL3jiRV",
  "key43": "JGwtgovtohx9qXNjFpuDsCXfC6vNqBSsRYBvZLmHJPARV95HdaU6t3dL9is4YQvkEythLWXG9uWgFNhz3cvwAJz",
  "key44": "3HbDC3DgBaUBigpUxRvikf3VyrDDQA8rUcYUti3fRmRPUxXTq1iYVYNgGd9q691U9TC2XDTjUFxzf9xa7YbjtiK",
  "key45": "3Aa9foanwaAXgvtMoohperUJjzNjvhoepNB4YdczSnPJJhTgovVe8aGSmoFi9SWRJLot2jTnGHAFPx25dxyPZ6Mr",
  "key46": "2YBRNv6Sv7NTyS1k1XFqWNnfH7RYLZSfutgU2iMFUo1R97Er7wEh5kFeFoHux4Z9nB6htibkAYae58ahAS6tM8Dq"
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
