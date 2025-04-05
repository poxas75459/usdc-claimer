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
    "2RuAvW8eJbz9qkf8LtBqWu1ozFoLA1fYaUBu1groooWiaNtX3St3tHPkMBAQ9s9pzv92rVGVJrQeb3V5XcJMer4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PyRoszsEtDmm5mvhztsDQMTEG7tw8scJZnFM8SDHLv7eYxb2yi29QDeetEzKYEjfkzGK57baXDmdX8QT84wPhFT",
  "key1": "dVmq2ja2EX7Fq3XiMVJT37s9TYNC5bRaNtx5Yymh6ZtaduWmH4yQjjLoy3stqwjbZuyxEMEU35sWFLUecd3YgmA",
  "key2": "PXndzSSe2RaGfvLmCiJyiaKnrHGsvTmMD2PiLbNBTvbT8VSA43UcoqNsrHfcBwU6jtb1RtdfopXzNEPZEtRxEjy",
  "key3": "4ZVdqQtd8Up7qvZe7uHdgubUTeARvkG2v4M7LwjoeUcFyYRZMoqwvVpDDFyjcc3uBfVzzAHb1QqAutSWtShGmbhM",
  "key4": "3H8JB4nwJxvejHA5KVaxGJ1zch62phtb7GJv9ZEQo2tV6ZM8qg1rxH4gkePGxPc8mSapVRmEr2eDnTDxUkQGUzEX",
  "key5": "3pVXVPyfDauiBisSUS2ipChBKQzWb4sSDGaZqamHdkJmEGikc9y4JDFgCh4SBU4ww4Ppu2M5K3Thb4a9ya8KHhND",
  "key6": "mEgVuLGpkPkG57iBkBhyemHJ9j8SfHo4m3iERT9qTQqCpdjBfMwVHA1JSfZCPMjGgbMB4nGzZGWftZ6RiyULgnh",
  "key7": "2R6tcpp22j3KmWBTUKAEkJx2jnWaquXKRvszrGmCP1YfvwxcDL9y7yFiHVGuVc6atQWLqxSXRhrf4nk2tNJLPt21",
  "key8": "StwMVDrU9SjTtFiUV2Si7TUE8JGhmKWZMCSLz7vCgttgXW8Qxymiv66LYQo9YXSZuq2PAia9hxzoDRaazAWmJZh",
  "key9": "5QVygzMwhTcQEDmxK2X1CbyxUtRDceBxLQd5wAsQRucJJYbuC8qz7qRof7hxbpbPZYhX91A9qJWmULxriSUKsaCF",
  "key10": "43Q39FiEM1ohLv4fCTWRBfcdaJVZnSTvuunGzuSvEp4JxD2NRk8xt57LqDR4atkjWQBySU5EJSSjbLcBa5xixhhN",
  "key11": "3X7duj2tqmRfS9X4G4w7xVaCJyyP5hb1tBnV87Wd3yi7ktn7xbTT1aoaSjQatVsMXui7ndn8NgMxVrD4qHSfGjyu",
  "key12": "2tpVLEDDED5V4nnMfMqogCU4rGo5XpY2EhzdRD84EkoSm1QDsrdgMd3Ey23tnqTdm5EsfU4dJQF2pC6qZrpSxcTP",
  "key13": "3jBRRZMpTJmXpvXbBuCbYNPJWYfCaTA7xiDGELcLiPVqmhyHNWH2tAginYwR7RHFq1K338vLfK4DK7b1Dj5GnNrB",
  "key14": "4mf1WnLNeDWyBh3FyX2JXgrfGgNTUE6HGYMrHGG1JmaKyuVFENbSpXD3XbTprJvnkBxVpyqLrzYcyoZmwfqof1bk",
  "key15": "3BkaCp35qPnRydFZoihxKiZS5hWZoTZ1mDiqbK93x3XzashsjCtoARGE8aijXRgN2uv6d3yxwhuVTTzVeXhtYFz1",
  "key16": "3epGzpRe1rmdS9kWqjL8UajtYo2Bkw8JfU9WzUY9MD2ZCCFUKVMtEMahqG5zxzGGodxBKXb4i3Yn1mzZuZRzoHsH",
  "key17": "33aXeJVRekAKrzHSZqNz2SfUBqLUtkW7NzX1b4Ny9dCRp9bUnCxExB9J1gJdANpPu6AqkD5e5EW6btq4vt2vjiFR",
  "key18": "NTKD4y6b8YgShwRw4RYmMeBPiqnHZMSubrzyMmHxrCUwdiwEaYzXPkQr1QLiiiPsF4fQj9xEMr4V15CUdbjisPQ",
  "key19": "3BFbQtxpeTVedWKHg5dAX5QgoBeyTQQxGJ7Uegm7NiTKNL2M2iibY4xZwfg41fXcowxuEp3GtGRmzDydgecBQJcq",
  "key20": "4hoCyGDXNPrfPDPySURawVbypisgJURqc8ZgAuuBECUShTm6qAQP7dAeyUadWftnor5S8DXVDCixt5aUDcW3Zjvv",
  "key21": "3145oZVsAjoy8ZvBtFrU3vhh5YfQtGghxbr2bSiZpMwS26L13hk67nsXYy7KBLtSqXouZ2Z7rzKt3jsPwDEthexD",
  "key22": "4RZarYTSaGVUfGdkVWTLSH3qX2PqqQUT1yEYB9cQcxGkvbKERu3KAGWULmQebvMQS8QivWkc1dE6TfyfFRvTrK6R",
  "key23": "2SMWQvwUMgUjYDAeCmDKPFkrL2qbhpBVqXpQ6XtPMykFCrGxKUEqmPMD9GiJqYyakUWjEUqcLxKWHn25kerB7pZk",
  "key24": "3qtuamjDJpmUr6Bfw2LwyP3v35zS86CaZ4LjxxzQnDLuLEnjEg9qVtEvXPgkknxQAp3U6T46pUFwYtsdr6fJrCMq",
  "key25": "e4f72ZaUL4HbACnrZbrSKGHgcomJ9V4C9VxXiFvuWRn85LoyYTQ4L3GbZYuuTUTRS6wxMJKqDuebqQzWoX3dXmL",
  "key26": "fsbayDhPAirGstLzFwnpQXtpHT82vwB4rQJbX3xsH4jGJhm7J3kKX97Rs3ngvQqr6JH3cvB63hkLBut2R4sR356",
  "key27": "ijpJKhbHhnh7xCWczBbaQ2LQwxohrWzCmcZYoehpeQpEn7QsHgnqkp6eyj9KJu4k7sMvHVLLSD5dxtLUte4pT6f",
  "key28": "25a7WpvALYrqaEZZFMsRTfhzhFfDLM8Td9NHJsXe1waYQjaWp2WasWc1JT8PiSai8yiXRwPsoMqdE6kstb23Ce5T",
  "key29": "5WwwkaiJquxj5TrjZnXjBbWk7UEqejm16iSTvnd58QXMxbcpZDJ48MdsRRrn87t8Z9Q8ACpt7NEo4FyM35S7A828",
  "key30": "mvrpH1qn4cuMj58vtadwvMhYjqPr62ZeiFfqojYGHJEzRDPgALqC6eJMzDbMViyPq2xybX1UFrwnHrk84N5AqtC",
  "key31": "34unMja4cp55v45DRtvYNYVp5jscHjs2DBhtMbwZ6w7YytqyANhyj4W4Ry7NdZYeG4bUG9uoAwa12XRXehnXQ6xV",
  "key32": "5U7jSgm1nQDoPZ5yF9bo7KTs9SW9FJnVWCqaP9DkLQn84fNRiqimArZYUhjMahMouJoDEKXoYrEnmUQHqS3QHE3c",
  "key33": "4FGFbefwezS5wscAcQkjhqGdaAwasYCdVSdqybNpsiusmC6KJAZSuvrmf5nTF8hbsaME9CnSxUWV6LHdryVgBNpB",
  "key34": "3fPfvsBnMonhF9ET89XF5g54rCEF8wWwcvE3eGoJiHHcA3DwietNEj28cdN2p8VnWHmqn1Lr7egVnFeKrxXjPUPu",
  "key35": "5CvgbAFhLVRkV96QTbediTFc3UwUvoqrD5KrMoJmRbfBVC35VMU7QuULMB8kj8T1k4rmy4gMCaK9mRYNC6bNzRJw",
  "key36": "419xcvEnySefxG7uh7zQLQBPZAEiymUgPEqrcnQGicyp14JmTF84azkFxZjL1smZJhRhRJ7WdQVX3CLnMeCVtw6Y",
  "key37": "3j9uaQ1M3MGUcwqvkej7crkPou83ND5mK2NW4Rhq2E8U9vmFTMQrnBGWqWu8fXqyXTVpSYYYNbSEg4ZAfDhWYuAk",
  "key38": "2qYRfWgUCyzDsAcjbo9H25xbr9PTkB1c5iFqLHm1YSBYJoNxuyzwJXHoCz59kdQGC1cqa9PfwsGz3bZadiY8bnxT",
  "key39": "3DWeSHaBUKDiHXJ82hg31TKtzFPqpZ8sNRu1KXtSEvf7QX6xxyiDT98ZZq3JCVPhuwbXynU6LZhHnP56VpD7fHRR",
  "key40": "4uJSnhH1inZTeYK9uFe9UhzsPcY4KUBTbYhxAkkGDsJHxF9CbftrfL95cymviEiLdjjt5YaGWVuSs8AHLf3jrCX9",
  "key41": "2HJCBany1M7Sbous2kCAnLGbDD5EjRNaj1imvmuUquv7FUNK7Z9ToLex1Q3VtNvMZptz9Zkddi6Lh6t1DNoWZ4uw",
  "key42": "26khQWvhG1rQ9794R43DfBpJFbLn3DJM15kxas3objZa6g1rGhtisy9sgg8kHzJQPULU7UYMC7JfKkGuN5NRWcyR",
  "key43": "4TcXaJqMgKyZGyw6tEux6timJqjybuCk53u44kTauGhkBYwdzc4DJw5aPbJbqr1Pn1BcnsH2bnT2zYXzAsMZrT8Y",
  "key44": "3Q8AsD3KWDgqFxXCpWViX9uwhBsZFwHnXsyZtKGcfKbyjgKjfijFrNGCSt7rMg9PVkF7VHB6VN4zPrULLg2dtiR2",
  "key45": "tPAAfExv9MkXBYqAh4sqo9BPxtKeBswo6UBzzVrSZMDgnfQ4XBP5gPjRQd4rFqjt1sNx63PxWTAnrqv6MbH1uYT",
  "key46": "35yDRt2NrPaxA6QDiYkYTdkfZxx1XriNnw2oLTVZUfKMtXQcaNdSjHLCYPYWvTQpyVFNidqpbxFY441b2hLFYEpo",
  "key47": "3A89zaqdJi1nNafoAzw2d3jvAKgS3azkqn9FT1MPW9hPVJGtPgWgEpkRNrHNfj2LPAdbznnvcCDMyK5mYrTBk6Vy",
  "key48": "5fm1RpjPWzh9x4Jg72GSkX2VXQy59WvHyuUBvJe3JzyauzRciuzEqXhEo5kbjxNXFDa9dbcFr9DZK5wPTHbi4DRZ",
  "key49": "BQ6qFxL3Yr11uewhZuDkb1Atnf9kaBtXZ7hHRmCqFfsryVRiBwsiDoyhP5MURF5qskAhvHDE7z9XzZiMuAggPW6"
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
