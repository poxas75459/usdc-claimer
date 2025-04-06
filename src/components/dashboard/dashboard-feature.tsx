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
    "5KaEEgSmaxznzBArrBhseFsxZZLJp5NRuPykBtEvXu9iyAN9o8izmJa7grL3EcXBJ18m8oCThjdufJY43Kv5RqiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gx2tMEpBCbm83zCasHndP76BgLDoc5qzBj2ELoLr6ayLyaagJj18aWDTZpVxqyeMcpVPW2nzAMkNrwu2jQXKi1i",
  "key1": "3Kk3pX18ekENUNVqtYHwxLcHiBtiMsc74Ao4wknEYVDJzJsaX1ee5DZRtd2UDBf4PQSaGgUinmQeWdeS6V31CswL",
  "key2": "2wgj5xGS6VrQTnNxHvWtPvFkQwrEKTRTMTeXc17JWDpX5psYG9tYkwi53n6vBsFTYrTFGMg9DishEJihG7858nmQ",
  "key3": "3rpNgM3koJPjNUFjS42MzEjL9tPDLMq7BiUCAqHpqKmA9Yag73priTKRU2jiJGXjQNLjRvYMZHBEhBSDbc64xMLu",
  "key4": "55Uv57Hs2jgLUKHZdcekKVyzFWpR1Y1TKL1Gq44bMBrQWfF8mofNwAfHNSAXfpKNpQqSdVob2ExkPjUSWE6NzRSb",
  "key5": "5NBk6rWnv714Zh8VnoWQmzgPHZ8ExUkRS7X2VzRywPravZuoCjQpraLBrrGzUM4hcfsuW8zLomoPqPEYwuAJeGuR",
  "key6": "48Xn1CEbRK72fhpfTqxEJNgiiauuATfUoqLQYU8db2rc39cw7p1FhwaP42s32g2hZkFVvWqFRxHRWYRe5tx9a341",
  "key7": "3H8jBQMSJk5XFpK4qjhEw7g6MPSiRbuRVfVLEmJf8QNtHmuFScvNr3ZydkiFDTmkFDPwhCHtX4wMAZNxcuYFFxPw",
  "key8": "Gc2PmEusDZ6Rc3aScQtAy1HhSxcLhf8Tg5Nh1VDT7NvgH3mYHdyfuhcgLWPeq4VwCRH5F4fmuFcstGNHQwGenei",
  "key9": "P9ydZVabYtmHUVjvKiP7CntyYLTRiF1WTKwedmZQ6KpE4RGsDENjVVMjhsStcV6NCSHfSdiQs5aFbMfvoU1kT3z",
  "key10": "5adrS8WUQCk2MEsQUeYbsXt9S42is1LKEeNHxw53GD4Wqa1dB91p7rGcAAjjaNbgrdnMBQTiGFWMJtfhsXhttfbS",
  "key11": "mtKFv8jYssd8hBELTTrg74AvhcKmRrkoFwVSYJEgdaebquqY5jDHceUtZmQsokbwUCQxUptHu7xWQwY4dVbuTY6",
  "key12": "3ooHhFRpBQtyMt3k1thFp5wYczuX5ynv6rdNRs71gFLjDofD9Z7KzeqBmhMifFrNRsm6n18HSFCNBVhzVZNRLAyn",
  "key13": "41N9bU264BzP6aeBwzVN2iQXzD4fEbt5VM1WMeBkpNvkVJuM5Avt7hUShafAwYJcSxLinKp2YDvZ1TG1wtfdwX7M",
  "key14": "52s74gMUedU3at8LbACobtSMzNC4EnSg8c4MqK52E294qMoaSZ5WxWLRqgogLmD5kr4a1dDnvkQ8xokeQof2uciy",
  "key15": "5nYPCqcXeHPHLuwACZoAsTcki2LgF4S23RTZUytnN8TBDbV9yYstHD8sLBsNgFmGNr3W28cHe4zM8wSzLG4yAWtV",
  "key16": "5Z1j6sfo9WVuT5tRyXWqnYQZeTWhPnw1Lf245ypfWRWiCNvVYMqUYNfVATY43uyodcL1RhuH6zQHW18xhbaSzVuo",
  "key17": "4PAMd9ZS6p3TTDmHH6KAEFdB1oS389xFjNTL8z3QsKruvAYY9ig3aeP2GTCNLm9Lvgag5JsMbST8mPYm9z3b8q2T",
  "key18": "2TKoyb8MAy1p2oSJ5bpWAF1rAfHArhDvbnorJMER1VX2UyZJDPAiWPySZwZVgssu51mAPTAhETbV2q9onffDTriM",
  "key19": "5FzyE1HfWJUCJX4Dww47Lmg6c2N3DMta1hwnRhjAhkCsDNYtg8QSd1Tw4yCHXRe3XetD7oSfsTpbqVk2Sd4Ljejr",
  "key20": "3fARgJtzXRXRCzaKcRRqTtk48yefqxLZMLjW1NiYkfKm8rqCBkrMDDCA3K4voXpGDkFqErib7wXSaKZP5oJdpcJV",
  "key21": "5CUbs5ehzBFSzdRJvYM2NvTrzMA5sRDr4M41KZaaiCPaWByjAPDs7VGnA2ssGcq5UKjohEcTGfByKZ3G1DVvtFkk",
  "key22": "53fs2DCa7YiRuA9fbLko1MJnhLnxdZF4xzz33e3yGoCSAs9Xq5sk9guSF4QKw7SWQe5L5m96kDNTyrZLpLAbJxyU",
  "key23": "3XAk1yC6Ez79RXVzHsakUaYUTMEVdnxSZek8V8BGoNof1pBwQnMUvugY5vJUvGk285cBAJ7ScXgNpBbyF52AbDnU",
  "key24": "2WpsRtqcerCdNzShHwZM75XnRQxfEduiS5zJcwkAMSXZceLPLh2c4qXeXrNu9rPJaj72ggugyUHXYipLnu3U4K6A",
  "key25": "4TD9ejLSkM9K98TvysfEzGnii2ukjdBwibUKpXyU3HeVX9W4MkpbsmcYb9jmPCtd51DktTNghyz2itPw1GVojCze",
  "key26": "3wciNuGCcLWo6xV8DeDJzm5RktVaoJ8F3crg7Gu7ihumGTTESzdKAhpb3MZnM3c2pC6UiVuHyDa6Cx42CSuvkZLj",
  "key27": "3NcLwc1RKJh6kUW4ukZcSjXrSeVcz3d525TaHR7qprp2imfqk73vxbYeW3qrNftMk1cN2R7kkUVEd5Nww4hTSTcx",
  "key28": "2SzgMqZeajVgW9vP2mDhbYXTR5yTayH9M7upnhLnMaY5hXsL4gLLUXHBsNd1F5fEYUp5DgF4HVhxQqQ24TLM3YUx",
  "key29": "2ivnHYFFTyjsY2cyhwgqbFkcQTxkwwcFawfagnve7SLVo7J63FTWekueF4PdQ6mX4LcQiSowi3ExzcwyztQiM9sX",
  "key30": "35kLy7FQUPZ5673CWmuEuk4b8dh3RR4wZPRgAjHJWmrpqw6YAf3PqHtyAY3tehxcraAbF1iRC2QcdDJWe4N5Snug",
  "key31": "56BBeviL3ks4FSMs2vsfyzTmpgSdJUcWK8CG43dspjdyumkLewVzMUsukvAPHCn8xdd3sqEX24rynLgNZhXVbJiF",
  "key32": "5BLgTPfFqok2CeihAG6qkmFv2EFBevqFCrzxkvbjsmc8dynSh3e15RutwMT7pLfqE17FP4hiVi7AvYbWou8zQ53b",
  "key33": "5D3TQABtyZE4sZYYndQu3nQAYysoFG51x61UcwsTLYyy2DLWFoQwZgLJ5YtRuGeCPF6RPZxPaNuq4yEzwnENNEy2",
  "key34": "48N1XbgYLTZ1xYA5nxqgfePhGxevJH2YWMSpWqVbQwXpbPvGvr1Ci6ZfnEPbHmJkKvyhMrpUJvZa7UWCVraSpKE",
  "key35": "4r59eCNZkrGjCG52iMiibz9VHARL5hXT21cxQmewuBuNvJ8rmRs9o9sQvtC4ejysaVs2jLg7tzaQnfew6fYsEqiT"
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
