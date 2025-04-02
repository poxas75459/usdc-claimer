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
    "46n8UerxAfCn39kri3SMagbPXdyT4rfTRuxX9EjRifAXRLbKYDC4tjRDyjHM1hKMbEBEC56qRFyB5GdUFBtZbvod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4prWesUEq7nN6h997awBcp4Fp3MhbZzoZvCFsGnF2Air9r1pqgb6gdJVMLdzfSaHLF1DXXiDsdTMK8QFYdVKY9Sw",
  "key1": "4gF6NXKhLxKo2uPDBxcnQ6iMFoyFXtnHHSnZksR9m5bH4DLeyq8kbAB6i2yY6DTae57QjCzbJCyRy8SAiC4UmAJB",
  "key2": "2pfH3LKXL7GZBP4K6DbELG5ZG3mBnVJ9gqMnUhKoyY4Dhywmoaispjnq5SRCiM84tujXgTQLFGi5rKHJomCuNjRY",
  "key3": "28JeqeumhiXHKAZGV5xzqXSWAx2GAKjjbWX2vi1BxbMQckhBN9HRNNLkHa4veTRMDSct97uoykZUmiqSDeipMxMe",
  "key4": "3P2cB8VaktYtsebn6AmSfSBuQqeFNiZGfCcmFf68Cxh1tXNhtsSLSWpyUPVQYYCBJdYFeQCeU5YvtYTxpTB8EYgX",
  "key5": "3a1TtoPUjkfwWdWeGftgenVRxCTJSR2S7mKxiLjBAUjwtPMQmUpJUJ7XLV2i9WUjSHAR8J1QV9q9bdKZWGuXVs51",
  "key6": "5h5QLmw5oR1YC1xPVh4oJxhC2PTxwcFddv8X9PrVJ6MRhvRW67As6CAbFTWT2uiznLiHHqJ2HFhts43WSaxpFmeW",
  "key7": "2dxG61tvxnt8WXgFQ47y2LreA5Mf6yJgxicYNZJbNe7XjL4ET26nnCyjZc9jSXQFuXUgrcMcby1CpcfyMMht4hAp",
  "key8": "WqL7QvazjVPFpye3UWJWCoL8U3MV7Dx1xaorZz9tVGsEjDvfMY94qPneRqVab68BiVCwPGNfq7L5odRUyPFbHmX",
  "key9": "57wCX8cqn5AMv6tyfFrZabSbhE6RXcEFbFzs3239VcfbrVesQqy8EnnhFCw9XwzBJM7AnZMsPCYEqNTeKxehja5U",
  "key10": "4aipUA8qNsuWGNFwNYmdCp5GsMmRakwzyUUtu31UCk9MnbuhKPH3bgQqL9SvvYKnt6mCyJfFnHgTg8kCYhdZwTeu",
  "key11": "5S1U2VrbMZgFo8xaYvWQMnSo1ZLVs5xkXNrYQ6piDGPKB9fCjaUSgEFvSVCfpxZt78YbjBUXf8LnUs8FS44odf12",
  "key12": "3VAXnaC68KqEFgPVDGUU6MPzbr8pBNyuZ1GBMLhfBE47uW98c1wg2K4CwHQ6UCFFJLt96A2iSx4gUmdzGVo4NUpC",
  "key13": "5gKZ41UwigcHNNRvxXJg8BfGGMU5uuGfmLs4G7MyzHiaz62VjXTzHU57J9zVf9K7VBcckaQ9oajabXxgUNyXwSe9",
  "key14": "66GBp6RivTS9pBwF6uS2i5QFPaQY9KDMLwfYtpNGBJxShi9KZn1MqzLQjZDEutnN9i3YbmymbSGKRgEh52V7uRVD",
  "key15": "5UVB9z5ium2wRLgsrKvRq1vY41pU8W9tKK7X8Swar7qcrs9KwiihK2goPWwq7cSsV23crgAsyKnRkwN4g2NapURi",
  "key16": "5u2ma9TP52b73gCG4RtdB4Tdh4YrCTVFLqUJ5xB6sVe9aoPKNfzx7fd8jbBR9Bu7XgyUjF2viPPbcsjjmusTbUGt",
  "key17": "3E7jXS2YyA8YiH8XcasqCuZ3veaBToeLNnSzdAyUJyBCxXLigWEpyUgyjY4suZi1agvYb7gKLeASMxnZAhDkakeZ",
  "key18": "4m4Epjs92h11xwJxP1JRtjC9b9mBqQAgJXaHfdSYavSHtVBZqHaNWvSMWPSt62iwpHL7UkVLL7SkjtpVndYCsynU",
  "key19": "3wyXE82bDAAtcvKC5EVGWYbdxgzjEayiPWYNzVZDcZFYox3PQNQxQiWdNHLbPPUa4NRMrVorUZ3F7ENFPWj9S7ES",
  "key20": "HVm2V4KTdWmS2XxesW9J4QSirzzDjrmKUJkw8GqRzE4Ykx1s11euK8Nm7BW6h2KJgo8Rm3q66XJDjovTtepQNDZ",
  "key21": "CnNacvnnCpySvcvr9Fh7PBszkxH9kyXSsw76qsrZ16WkK7JvsKHTRh4Xqa2EyTPdDpsT6iPFR5gjwocpAkKwhcJ",
  "key22": "45xqPBjovwNEmfccNYfwXfbUpbVYVp5uQFhyqTiHyg5BXpvycRgsk8R717CAEKpdjG96jh8jHKneomwJP5WBxZtn",
  "key23": "oGknStTQxqXJvtNtLcDp8M52YxsFwHAvLdtqpJZssEgb8DHJRfg8G31tWgkLbm5BktgjdLys9ZbKtcF7srGbCT1",
  "key24": "5waEQXrTZJsUonHzqwXuep2yH5beFekHPXwnXPsQ7fc5PTiAfnEyvFizzRraSH6xqGttPZo7x579Wf68sJ6ZQTMP",
  "key25": "5ThG1DTmGzD86TzvQ98G6T3BSmkhXbmhRrKgsMv3gcukjnCcjHmGut2hpH3ZYtj7XzNUd31YPERp6SES9zMD1LVi",
  "key26": "2L1dZu6ng6PQxYSF5SAfQsvjWga8MSwW2DpUUzE15CiD7YCqYX8hR9BSnpAEPZWjGqy17YM7xv7QhqkvNQkuDBQt",
  "key27": "47XHgfTvDHYvo9Z8xerfY1nnskkUAQMGei3rUSkDLrLzRPuDFaXxHsYYQQEYPtx3UtmwPVfJHegvxtsc1oU7aQZR",
  "key28": "4mbvQdwX66crnsaacnqSbfAuNM7s9VJqKtG2rmFPUH8T1b48yrHRgPht7rHeq4kp6Sc4XuXvhQDg3JJhzoBSWtD",
  "key29": "4JqmcAWeHRDYf3ZDYxVg4fp9aFSKoQqPVZVJi14StnQPX5xQJ5qgLoqQzUgefF6dMrmZLDKxxpnJwG9Lt3yokz68",
  "key30": "2pbxjz2NBqk7tS4KNa1TvdFnibiyNHF5g4nvWESbzu7fB2KRbhsAfikTLd4YeeZiRwsrBvbUwVA1uB253dr5RkFT",
  "key31": "2rWHECdsXEuffp6o5RxWdAojBV5XKkHHyT2Hk1vWXT8MNt4F8zMQbMaWgV6LHsQ5cEed4U7nhjF2EsVhYuBneEL4",
  "key32": "5uS9mQCXxEhLmLURmf3YbYyk8zM5JWvzRGY7ZRz5VLXBx6VizBuqykfqGrD7fLpJq5uojeZBCAx2HiEQJx315cJf",
  "key33": "5BqmYhbVK37zXVQogTR3WidPxeoipxRjtnTwQRysqL9MCRDnYfMDy8x7wQDJQnXAX1Rb4SgV9RnFq6Ts5Z7JYosW",
  "key34": "4h3LZBDZTc4nKrfmWruWasTpotAvMddyAg4ow5Yqr4hoYs6NGW1zDp2kLeRtKiWqpJbuNyQDYm7zpW3zXYBfjdBn",
  "key35": "3GaLMC7e5aVpDgm1Xq7dkSW8UMsZkfQVU1qC497aU6MtnqbRiMqh2TqgibYs3yB3G4ez9sGckTPtup4TqGQJqJjr",
  "key36": "zBEWNh1AiPitTiZmptBwApFZsgWJfaYnXW5wpqURRESDFWqW2d5zhc96RsF29KAbQY7kVDqaEbXUgyuooozGBbP",
  "key37": "5zdbtigzPAdzr4CZWvKCrQk4YV2fnGF8bfKNaXQRUSWn8SgLn1HUYuw1Hnp1w9ouvX9ezb4JWzyi2eUssxvtiFmD",
  "key38": "2YpEQSbUrLnnqYphDB4q5Q1UycBFW6ZbWPK1Rcz1MZY5NCdx1U3uMPGHP6ScUitfbavzwyT5ZjmYhQ7qRgntLpro",
  "key39": "4raA3RXNKtxqPheqTb16gqtYX6B2u8emez9U1DTyhJA11baFWACThVfdbS84FvmVW5Rg8a4gUTNDaFf45S2Gtetg",
  "key40": "3VoKoQGLvvUSK6ctdQDgMzpto9MBPLx7RaUYyDhiux6Fp2TJKf87TpNbRn5VFeN8V1stHohhi3EJjMrDn8EzzV2n",
  "key41": "LoBbdWReMCU1c223qbDRYayxDvzLqYaxunYviojGFQcQFR1f4npgToPm1wcVLjPzTYVteHnXtvAcCuNgeStpDCQ",
  "key42": "8oj8GAnb3EFocVsqD4gjVFfNsu2aJKd64KC5ZktBYEKPhNgYUDsqXx7i8pvdpG9Zv1nGTpDUyYiC1NmD3eSEbbu",
  "key43": "YQwQDcVJtf1PhZFbi6gUjxjSpN3SiJtAzGSADnUQFQDko4eDwH2LtBN4p1UyFHiDYwkm63G4CVRFNrBnriB2vrp",
  "key44": "414M1ZrG3knB42xZ64fqpUdrNGiDj6xRWsWrzbvBKVTavL83aqtq3dEtTrxc5fPzHsXuavpfCpH4xJSCmviw6Gmd",
  "key45": "5mBxv5yRKYUqHvgLP7u44CNdFcDSoaqNf2W7NVT8ANr9XxCxt8aVrWqbmN3mEMKnbCWGjtzvVdqh3n1jLANsQeg5",
  "key46": "5XpxjSfyvZQC6kcZqX3Dtr4ihdPTCrYPkSnagwskaUyZGzpCfXsZ2ZQvgJKQynYnpSwQjwh4mQzzzvuB9nDrbp6k",
  "key47": "618gR5pw5BBGQNM15J2rEn91NEFTSsLvREAuQGjVJ9d5XdWoVm7Be7wZAUXx4h9zj4C3utnghsDxUeBQqzKEeiFN",
  "key48": "a4yhs75BNS7r9CFkKKMtPMgndLBzRugkVGFqvAfwJMbQcNEMhWqpPmEj1AmKNqQVpYm5quZB8VMRJqENiTf1zKY",
  "key49": "4rmYzSwNQa4LW5VYFAS7JRshqKMDPu2o8ZM2eDeWdrrp9iH4VmALeENMqkorShqucqTPhDAiLa1DdDxhzm8FPkTK"
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
