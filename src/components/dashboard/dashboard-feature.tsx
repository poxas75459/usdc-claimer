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
    "2ZsFyvCwRr3MKyRita3UbTNjnSb9LXQdgVvw3Cz3vZtP8bgQyXYv9xjnwFzLfH644wavNXmyTnveNXEqg7LQu2iA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aS6bhVcdzT19oA6ASbyPqbDqg54mnXjk17MWnyLqSLfQEBw8A8Dn2Sb8mhq4Zk7XFmwxb3mPH1mSkAjUaQRmB5j",
  "key1": "3VFHfuUmDss4rCnZLaUvQtVTZp2zZqMS6k39QsXtUP7smVAcCJJCQBtpCZr23271hEUt8qsUGhMTSjb6Xa2v7eYc",
  "key2": "5ccN8VDRZbUDpFeEiJoY7hUNNhToYQAfskzCR6mW66A6WwfQgD3VwaRGHFMe9m3agQffSWw4sVx1A4sUMRSM3oUP",
  "key3": "5yuqC3TgihGag5zHwycDHV2YWPEALjeapr5RKHyqXXoddZzvDMxujLRsJ4ePN2EpjAjEx6fPM3888WknPTnCnrx8",
  "key4": "3f7LV7Ef6gkTRUNKE173bC35Wn7iar67sTD68uuGnqZy7C73uohPvXhub5G7ufgysNBjSsmmkA9uGVKQqSbJSPZ3",
  "key5": "39Kg7fS2Qr6N4AiCB7h2uS3bn12GADhpfNBdXS28N1LQ4xnNmq1xNtfYJapvWducsdM9BJW8QJ1zibntAnBSDn12",
  "key6": "5H15kaAMohNfgP6BZj3DTqQKtXXM7CYsmzSo6Nzuk2qEWJuuu7wFcXBr1FchHTo25254uZK1Xi4C47jxqQgfHv3m",
  "key7": "2AYqBf8xjxwUMEBdsreWPuFXsMP83vUDNcVZS4qFPrdrLLVKGYKU2yP9RDiQEcaMw6wxwcviWEFmDK1GA2PaSabU",
  "key8": "2A6RAVsPHy7uBQnKrGT6BA69nK9okZrPa9apXbEd4aKSJ1FpqsAFj6at2FzCxNhfpJbEEsHrqrno3XNFFMTaa45x",
  "key9": "5vdT66bg6ruiMbVvdUiSrSJ8MjvriT7EvtBFZQRauxXkd3ghexZtHNxGY3q28RmGzJqT4bYa1EW8gu1Kp1mQ4FP5",
  "key10": "4TwJBTWunrpiGnvqR9V9oqipsLs4zkux1QfwRwRtRGxCnueeybpG9xMLHWqUJveuT85YRSx56SejP577G422U9Yq",
  "key11": "4k7GEz7BA9eMhZy9urE3aLYP4c1b3WhWzfhnsbUaAHfGMJWLyCEsAKwKuytw5hQ9kWcfcQAHrTXboXoGD8H83qyi",
  "key12": "994piYnuwHgFNG6Xo3Dhtk3F57ahcs24xSAmDHSYAgVqzfJ9TzhL8D51iKeQWWRiGZKXDuB42Af7weKQ1TEVoDt",
  "key13": "4KzEFRydybXg3r3yhUqngno59AXh39Vnw65LJkipwGTmNczU7PBXckRoWRiQN2yYzApbGaHBkZCtLZoUYxfhgqyH",
  "key14": "3Z9xRHjeGc41KsmRauaWork3QMdb6DdxHW3VmiLjisWXChgHJwpaAQ2jpH31u79fgiKJWnmEzZJ148HeCXCXFqMS",
  "key15": "4NS9y4SGcrt7umE5xzrWxAjT1CSWWniirof6NCCV3mBhG1VERJvEvfG3UD2eUeg78txkQCXTmUC4JUn577pxxkTX",
  "key16": "3x3kAGdoFzeCNe2SSDmH5wPwyVbSJquzHosddjMLj76sGAp73Aqeqk8nFbcbbEEEGizp4Vf9xV1ChxuYmUsdxVVs",
  "key17": "64sU2qqpQM8NCDYJsC3RMgP3re1xLQFPpoZEf3QWD468b8QwysLq5vH3KmjqW3aYgcS95q1ShEKVUtpuFuxzMGbc",
  "key18": "3cHi6rHorkZCgY1wwVByPgtNKdtn5pLi4XTZFyQx4oapFjGiRFhyVKF69WUixfjkXqkwJn9MZ4rGtJPp6RJ4TLFd",
  "key19": "5crTLbPokoFpUTu7n1cAHwmUQVexD1dCBmCZzazGNhc2BG11J4WE2mNZ3V9XpGwJN7r4A9u6FKxsFo3xwQ4WSYLc",
  "key20": "Uqzaowk1AGzXjxkSjtEboiRbkRjUi1VzhipnMs9qvyZSHaANHeqTFt3ADi3Q8WLurxpmham9jMFMqxrYcTMGBsW",
  "key21": "5xMTuZTbcaKGANSzhQB7K8YqQG1smwMcDe3fNcrxLhQv9PxC4EwrTgofWnHMSH4Hej98psfVRLaSPyMGPzXbrvf9",
  "key22": "pHH6fg6fFHe43kN1rVHS6c67Pv1WUceXpAkWEAyCg46oE8B9zWxq55i5J2u9oF3ZSsPWhUbS3kHYMb6duyLfoLY",
  "key23": "5W1887PE2BAxxh856Y6miuQbykbpc1Ksv1XANj4X87Fh1uTM32vznz963QDG6T7bDztktrEJjRoerbSKTDFjf5KE",
  "key24": "3fgQ2mxtb1fTedUwg4KKyiXsswMHxtE1DLRLmXoab37aRudUUefTQP34REhi6oaw4ZSqKisZAuhJktwdG2sgt9Dq",
  "key25": "2kTpWDERxQjzbmoNwHGM3b8v3N9LQMmTMhgRVuz3rQr3mfkcisjpEY7Dq6i8c6SKrT9Snh7LTjcGc1VcfCJsWyhf",
  "key26": "3DczwYdD2ZRzgU1ozmmVYe89mwwHeXZtNjLk1waWv7Mcr2dW4i6qbA8wmWff68TT7gS3ATzjsyvBHe7oDPyhqd51",
  "key27": "5thdwwAquHB6ETnLbCBsTgDXjb73Zf2Y5nUhjpghf59Xt1eMbMKTuysPU88pnYKDHaKsd891s7S6oag553Tmscrt",
  "key28": "afV3xV9iHLzjihNaseyGhEcLrHGWS2RnnZ6gcrwYmceQAvZBFtXsRqRJiN8UimoAWQtPLtWxFGq5wJu4riBCxMF",
  "key29": "4zru2Q8vZM6g32X7PubzVQhcyW3zkErHai2aks8LMxhfXRhx5PACpVqH1Xs2kCnkBcsp79GCW1gZjg9Ry4drpWHD",
  "key30": "4FAWBAjm6jxvtDoVdVZhRhMyDhiCAW7rpnSbTnEvzuA7XMqi9jffAQHiX5mVbUc7r9J3k1Sj1cXh3HKpDVyujYLA",
  "key31": "4La3DmhNGLfWQDRufZypzxxJqMP8rQaMCMuE379mn2UDKrmCVLej8T97qqcbczF5BbpSF6JMcCGRNLrXrndAvz22",
  "key32": "4HbpgSDR9ssamXPZpQwkctqEvCJVYQYAvTZwwUfFQLXDD3W9prefL49XBYcJxKcB7Jf9Sw6zzK9VjBHLWys1UVLB",
  "key33": "5jYpj3yr3oYCWUghbjLEMkWtGYcJkeurFXbdLCQ4szBRmTkUvbjbwRSKt5y7QDZ3yV6gAXegU5D56ac23JdnDGWa",
  "key34": "2WAQrYHzuv8vvQnz8mEfzeE9ZDCs255FYq2HYdQ3u1q29tDmb7vbc7Rjf1HNE9icYeCrQgRVpwWTm8ADAwNVnmtJ",
  "key35": "31taQGbJbJdbV1ChLDMHcBKH6Bqs8NedLLeX4ys9BvoU21KGzXzYcDXzwGirNPowyTVjb9rw3SQcfeZYD8Gx8NR",
  "key36": "7Ys1jpjBT5TzsZRRtbSdxkRZHF3pB7ZQDPxKuUXAEDmJ7iYzNUv6GAVMWKGRSS4wGBY7ZeGSQWShdXxrpeGhDND",
  "key37": "3BJDKPjBZFXYbAyCobJNVieQ8TTya6twtwUtoKzuSywshtjVAt6dwaUjZnZGg9aRZoE3EHSzXptAePEiR6BzkCyK",
  "key38": "8Kunf4kMMeTRo8yuT4rAN4D8z2z6dpoZT6xXdn7bYdL7MSd3Kun27nouJHz1t9JjmJM7svVZr3Qb9Lp12iVoYsh",
  "key39": "4AJfBb14fR3gUtMWqf8guKKxqTZVUv7mwaA1L8TMS5ZhXQMjaRcktXpb3QrVJFqSmDdp4qmbmhdfohutRffqTfq3",
  "key40": "5NXYctZwa53x9MMgPMpKRPJsspoaMCYhyykxSxsMmTr2Eoh38Z8FUSGcTe5oKUwTsfaWtk5CXrChNe2wGQixernZ",
  "key41": "5sRxamrS9zKq9y4BR59yL6x2m679RCJyxbXp2513hRYkgc95amB2oizarLWEs8WvpabkGE8fZ5a6eewGXzUJcj5m",
  "key42": "3aNkBUkvR8BEzZ7mwLF2rTyW1iLns3LNdH7S7k5nhMnUGb5pak47ocNKuCCb5YthdW9LZtGP9B7YS7yKFS3hfA2F",
  "key43": "2tmay6N7ap54uSbLFFjJUZByNeZKPPpYN2Rf4zt6fHtrqmGPrpu6wq3NBFwvMKBm3F7sAtUCs3FuppafkxH9G5EM",
  "key44": "4wMzQGCrHVbMNn21bceLYwWjaDqwJnmHyKenvFEx3ay1D7obu2XTqa8ePiWWzhnvjVP3tMthubMbqPWUfCmWDHqe",
  "key45": "2yoKe6gG9T7998GqcQFxPzyJ9UYq7TdsK8Apoz9sN8b9qLqUQ2XkvUPY4Qat9cKp8Q52542RfAGuj6x3GoVa1kkP",
  "key46": "4ZAW4EvNY1nj9ZSYeqeb6T1TPLWVY9nTCpAXAq9TDTDtN9Qiwq6FedMUssxh1tRtMKJj5v8SonuyP9YzDMpJ5Acd",
  "key47": "3gXTpHtEKgL7fMrPmeN6bD7PoX68s1SQNS5eQPBQx3W3gnmfLZwC51voLCWgnnh3UN9G8R5zmvsnvG5EecSbtpBe",
  "key48": "2me1G7FMXXwNZfEcQTUgNnruv4g9S9XEmHh8zrb49Qja6wsTgYK1FUuP53qZhYWJmNgqfGy5j7UdRTH9wekn23w6"
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
