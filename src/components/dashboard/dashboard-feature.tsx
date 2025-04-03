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
    "2kkUZ3WBpd87yeSB7ULUmX4KHVq1STWFXnxn2Ys1o9ZxskqRU8ZzpFGJpfzzGKAjmMcoPpZq4aBbHh5oUhuSCdX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qvwBRfoNaUXM73io6rWXQ9bLcTb6GR6VR8rWpNRHNKoPfjoUvrDKk6zKaujHxRSVPYQexMQQ3uUHZtbZEzD2EDQ",
  "key1": "5WGuYVs7btpjwqupeRLcg4h6vCaVdmswffSugeTzrJPgL1gRqwEUdzUs3JNAjaJxdAiTNwTJR7ZrVMosBKHS7hHv",
  "key2": "4RQJuP8MBdzmZRsWA679HNcc8dK1e3oi6oCWZMvqgxPXJKB5QLdko92xc9Ki1kUiEfNbEhPKPg4bR2LHHgrgsevX",
  "key3": "cfUWyZ75x27mETwU13fwjpscm8J7qZUqhmaeMEyt7y1HbKvuHTcnFcmc8PFtJZynJkRG9jfyosytgdb8CVDjGDh",
  "key4": "496F81ATVFVLtBPdkMCqmA554c5cwCYLhMDg992JpKgWPp5FKhAvgmo41KffKooExKT3Jjg6fiQRTV2uuHMoccLM",
  "key5": "19DGri3wDhat9vWAnTeRQScQL3NxA4cJWZc1gj7RnfdCkfLKE5tDTckyj3nTvdB7t9WvFQgiBhzArhkh643oreb",
  "key6": "3hqQYRNtcnrTPLtA8T7hRh5A92D1stRmk3nz8bLuJzrc7CNM5ApQaUmzUmYkoCxYb4PZzkRZ6HBztBzMve2st7FG",
  "key7": "4wGtkL2vRv7yV6goTbiLmJW2SmnS1hBi2bwkfoT5bP3JY28yEdhDSZGeTyVv37wCx3AWHoaHXxfxo26KGDGhhYwK",
  "key8": "3GkhzHNgCUaxhFhRsUbUgGs1Mrda7eKBBim4KUNtJW4SqPqWZgaxxcMGqGR8GqbXTTtLRXYyrsNnLQXcVD4ewsWv",
  "key9": "32AM71FDT78W59n22AXkhv9JKULqp3EwCWmsMEjPk2eP5YbbrNXgqdP6oyHyRtVqJxqfUccGFrCDg5USaD8VYMpW",
  "key10": "ivkwCCGP8TwuQLqo1DryKU1p2yxf6Lach9pmThwk2A17Bc9vFQTYQmvqHrh8a7ip6624u7kUB4VXNGLbJLZ7cGY",
  "key11": "5fcPJvb6kkysAbSZJYHLEcSu5X4jYqXEKPqkKaaYSyPuYS8nzMPPJGes9915N54C289kTMTwnxWP4tF37j1XoS8c",
  "key12": "342bjCNmebNzNS1rKGizPDj22kAyyNH8DrCJv2rLkWXSd3P8PFavwyFnqRj1iKVXJmqVycZ6BfSCEZnsaD16zLAy",
  "key13": "hapjwH2Gvz8ACxJoigcxqeiuQgywQCfwcvqhgFgbe3u2mJzDevYzZDBk5AW2WVimNXXEwnh38FocgeNhrprkCQV",
  "key14": "4TSfmvA3Avcu3REBqbs44pVfsqVeNqGQegdpaQeJJgiF8KEm2KQGZw6rh7kGQG8gfWJqqB7ounHKHuKXAzgyrdJf",
  "key15": "ARS3mfNEsUx2dbYc9KB6n2H2G3UZgq9aoEVN6pMW1GyxJj1Pr9pFektR9ZcCNF2v8tGNpzUfcBRSuKJCnK1Thzb",
  "key16": "4bkfz584zatnYqPsbdEzTGmQKy9tfG69eKYhbzrX3f6eapMwXZQb1nHBMVf2sMFnx7LAcx1kj5jzE2LmH78skiUx",
  "key17": "MmKVPGCzjKvCSFVMBqAw7e4sWwmeebjsHWW3JinPae2iWSusLF8o6SZeEE7AWKQBfjebMCbvgydPd1Cvry6vcFW",
  "key18": "4QfF49b9DA378pCTry4WQgm23zfeTxpaY2NcsqUxfa5ZbWU7zmHMiXTbdT8qSPGtqVTS2RtLRNyjFfwgHQFwPQtX",
  "key19": "2JBifFYgroB57WZKg2h5BPXG1pjCqKvshbx52PeRT5J9xvgTQH47Gy5w2thsEiHLo5z3VZPSi7WsX8vNiXrxr4DN",
  "key20": "5L8Fhim9Zj9xpdMkTpQ3xyph4W52e5uSZF4m2nvsNLpFcw4xNkbFxCSHNusF8c8S1Q2mGsvrKETcebcHxr6dkzfx",
  "key21": "vwan3WNkXtYom5bYfGiQ14MQg8nX2xXtZxBud7Wt2HYxfo4rPddXg6tAuoC7mHFWj9haTNEQcGu6DtAygMCkSN5",
  "key22": "ugGz1hF1VBnN896qmS7HpQzXYLCz8GKBdsJPwEytVFXMzk8etHWLocibEwYGcTPuWNCLHVWzxn5cBBsfqNrQVVx",
  "key23": "JppBiuT9ie6cHXLrEGgBdsEHduR9jC7G1EbCjEcvaSGhu4Z8otooBnqGtdHang3mMz9hHdX4og66UJH9evTpqL3",
  "key24": "52LDRaSSAem4YUQBFCdYfsva1hMpQ1bDe5wyo59WHt9k69wZxDvFq2ATH21WjZJrNQPnkxVaCALNXF2yQmjBPsBq",
  "key25": "fzB1dYmmebspKs96QdeHgT8Mv96UiysZBee5EMWGTuAvBfS4rcXCBC3kCcujzB2xVzZomd8mU3fk88w6MqDjVma",
  "key26": "2aXUVeGiwv6mKhuYZFmG6rZKJKK3xbGujSJdcCi25LAJtuW1vgJ2JKkGHc4ut1g7dagtdi8qR1tHe3UeXSPUgveH",
  "key27": "5ogdc6zY8Mbw8jgZn2kAas4r2f19HiBduceta9iKSbvMFsa9WT5UkbTFqtucikeapDafNV24MfxU2PoH78biLg9N",
  "key28": "2bswWLjZJzQzwh477HXbt1iiTXcEdrHdsiMCpxFL23hRrLbL4gRVJzLLhkwKLaEz1Po7uuCpHwg5PntL2j16z75i",
  "key29": "4Dt6aVNPnRjbQ6efJxVvD9fdvTZkjTyfzZxMvvaz1oRzxiAL3ED4JYB3rfrurSWSQNmtMoGhoN3GitRxKeYjCnN8",
  "key30": "VxdXxnjAd4PibNqksfxEJX9TCE8bEp9toeHUBejUoSY5zXJNbKqBAfQFH4ZvHNHTFJRKtSW2qpq4cWwbTWxT3jo",
  "key31": "2SozfVhPdkXdgjDHuCsFudXPDDe7Ez46RDVb2tTP1AabsACBseRcqihqb8mTSkhGPibfpATJTfBc48PTbhpHd1gf",
  "key32": "5d8Wgpu1FBwkb2SkoWdTg2vT6gMy9v7UVBLmKcbWDxnRYFLNqSAxC4qG2pu6vGRrKGSmfYW3k4jiG3Yswrw6cHhf",
  "key33": "4g82Rw3LPdMHtZmCT7eqHYLW531fwk7SMBYBsew8Tr2NDiN23ptYmjgmCKQ788Q9obvpoqzin86NzN8Yyb86K79h",
  "key34": "4byp1GyiEeewLiCbXp45UWAsKoeWyDibFqrqEmq2nsX7LGddxoNDdQAwozHGbvWbzLFGjsvj7xNALHtJLv3y3bu6",
  "key35": "2W3tpfrLst2peRNWiW99oKegrjGMTgRNa8zws54eYPxX5nb8rMaDB2sdsXExYNFTbWPSGcja32qgTSja2UWKHBPQ",
  "key36": "33i64sMfcJvhTJmGLjzXNvCLBEPXyLErVJwgDBsT1sFboGWTzBXhG4RrbgUyPAyeCmxw5YDd213AB9mFhrwwFxDQ",
  "key37": "5qcz7dPGdwWE4PK9zdgRBj7Y7mEbMBMaaidR5oDPL5iXbYMkuqdM7oEyPf2SexP1kMfjGMGqRBorbLmsu4bY7Syz",
  "key38": "3BcqigdUcQVKWBXtU6KvL3uguWox6NDxN6vQoKdtPGU1gsmDKAy5ZFUbm9vfZWbQBrVZc3dyH7qst97XiCceof2i",
  "key39": "4N3u747q2HNymsekNFthKYHJVHZ4GJDgQJeDV7PXDDq5BCFYEUJBLfMo4jcSNUMx3kNFEW8QJnZrZC7o2B6JCQs2",
  "key40": "5QFvi7J3AGCJBaj1itvTGZMwjSFCZKyReykCh2wpct84Q2RXPRjFbBSqgPWnbhYgQiuMrqtBfNB5QiwdwvojcAxj",
  "key41": "5zWywtbS3ucXuRBwMrfdjh3UYGJK4FRJEgWJa77C9XvYTUmiqq3eXYCewDP9tfUy1KL7VfzAhojGHVftKNo2pjAu",
  "key42": "3Fhru5HFnsbvUdEVYfXjZYSVwtqjk4Fj31VY3CCSh3ccgLc73Y5oESPntTnUPJkr8H1S51VDvbrqpRy42aJ89xHT",
  "key43": "65kzTQ7nDReckqtFEUeCX912KdfFAro7fgbpx5KP5xw7dbZu7kmobA38UnjKyhBo25yQm93DqSqZv2TQW7iAa5uc",
  "key44": "PVG3PuNBtJrZzp1znBEH8NksosKaQEUUmrP6LHhRX869bVXJThSCqi7VHgE4nfuw8PFfyiamJAyQDCzsWTgN8Gc",
  "key45": "3GjWDc6pacfmQWoiz5NCHySYeiydUEdy1azE1Zg7raFyUDQpQVFYpF93bLhVzCNQH86DY5eKZSTUriq9TxzJio3M"
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
