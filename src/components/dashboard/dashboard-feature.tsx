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
    "2B8P8NhXywaVz3rvhEcaP9NJU7udbE2DK9Z5iEKc4PzVCSFdMf4xFRgHUdQEJg1vvVVL8Nb6r8Mv9dFisNTBcG3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v6v2rS1kMGWhaSjJcFzGBhhBGF37JhcpDee8iCX4Q3sSM6ZZYqaduCWwVASRLaNA3omxDTmxiPFtFt7JgX5KKqB",
  "key1": "4hhABpThvSuaMH5fKN8VzWtpjH3AQV1TfhgbBX2GjrXsP85p7bfK24zu18arB7QVTrUkNT9CkYiQjTaTVEMuDjBH",
  "key2": "6KJk4ktJoxHY3ySyJYSFRNvhxmgzqyrFyEFUL1mxC2aKFnUF23gCDtrEfkXKrihwfyjerHRZFsUmY752oRUiJv5",
  "key3": "3D343Xr8vhcKJWy14K51NcxsD1ZfuF9S9Ej8pjni4PGFdM2RuDVaxufvEgX4NBWiFHJ5mRguCZ4Z87mkJGoENuju",
  "key4": "4WMt1KHhgLVtppEPjZcWgWfdCsfQKL8Hh3xuqSru9YhAiJZQvxKqLn88ed24XUha4r11uFK8pz8922DP5U5gTuRJ",
  "key5": "3ACKnGjF4YHagrTUtWMWpPxbRdX6gyUm7L4DAaLfZjXzXubhEoEGcwwdXFu6NYdU9cfHsiDWZPKa7chSEUBFsh5D",
  "key6": "G3YtLwtsVEW2ktGbdiiVQsYnZCCEDjM4x1s4s9FTccF2ZdXpUNcTT8WoYsBKZDU87yTPtZmG5e3jtR2H3tUryam",
  "key7": "4TJmX4CYY5YSggD6Pwq8ZojmbEYGARMnxQMbCxZXKoHzBLGDLhg8oPLWoBiY8AA84xxeSQ6dfpaQmTk8WXzki8iz",
  "key8": "2Dr7UwUXiQya5cyAWnLXKv3f6fGYpuPw3myhkJcvF1ycPEEZDXauQ41hWA8i214T15zD1bZBLLsNbr5jGUZkeDWD",
  "key9": "38uF1u67nkzhtvCm3DNMcZYj6TxSWQP1rfzzCLnkDZPz6WGrd5HhnJFSesGnCDHht1SyYDbUeo1i9HbCYj4qgWAd",
  "key10": "sbQSN5EpVB4MYDzMTcks1z9CqdPzQv3iYQqGndvhSxtyHYFEP98bHSHVuCwzeAYkZPBn3pcSa3aba9R9HmU7W7F",
  "key11": "4DwPhHJxv5aM5E1sEn7xyWngvp9KV2SfK12dXjz9y1ZxZDy9pESARZNK9GqtqyjNxniY3of5ewKnbHvDidJsMJGj",
  "key12": "YgC1XrVD8PAFs2EF6nTbkzvnuEpJvh6J7FmLfj2kVX6VNJvamhBUzk1mCKdjkLc8iLPnNcpsJXSfhMUbU9dqyKF",
  "key13": "5uhHaVzzf4Rriye7pDEzhGkY8Rm36PomrTLPtr7xHmuNVxVYFCFpSJoguhjSjnRFxakc87QgmKaqoqrjDzBNAddJ",
  "key14": "5hWcQdeaxQNq2GeqTQToZXvWyEtNTQZWz1fDh8TswdD69iWfCiJgJkeEDdP9MkFAL1WK3A5c3YV2wkwo86bAyWyZ",
  "key15": "kMHZxCXRRJG6KSbg1MbqRqDhVzZ5iVJKJTYyx4nVRR9FTfLZgV1SrCyiZEWKt2ep22q6qsFP8yBqsnvH6zY7UUP",
  "key16": "4xXhoenwDaenu2DHRuxhCG1izCp6PTi8epAkNc115y7hNg4QsbXKMfoUJtk4oLxKmyLNr2Annuw2EoQwZEiMnhS5",
  "key17": "4Z89Km1MvzvjjBqMMoeMD75F1mGEpare5ZtyZ7uHJF2CEVSJcsXj3MGD7K11rJjGYCCVUQ5GcYvaT8buBgN4MqG1",
  "key18": "3ZVxfQStt7jJq82wKuPeG3EHvZoE2fdh3fenbMfu9wVYRzEPiNghAWot7zTq2zEPXCiZ6ua2A8q9YaMST1pqXEaS",
  "key19": "5KuQFWToJ4J4JvZd4iGMkuBXh8Lf4p8MiE4jzYTrrjuHm3t2qYKP4L2GQsVdRyBd79gE4C21GhEHtUVq1rb3wTWs",
  "key20": "4XR8HBpGq4bZh2nfGf9siLY7VMFgvpUdxCQBQfux5iN3iCZr4TowN6n3aHUr9c8DgixVBDu8Y1ZCRcXLinZ6kc3N",
  "key21": "4x9LaT7NkPbYMF4rJSCqNp3Y9EvssDb8wi7gCdSDYptHUf9f7t6FDtioo1gXe6iXtoB7QZP3buaQVsXo39zJyZQc",
  "key22": "3akb9uPfXTYnWwCZFdLbkXquAyku58QQ2PYmd6m1Kg17cpogDet1KV1Ck9hJ8jtdBjfhP8vH4sSECG5kREEsqhqP",
  "key23": "4FuDGyPw6Zb4Pz4AgriNBXQVAXmKH7fnN7ss3yM8v2jSez9B6PdnV91Cir3gx8SzGky2uc1ZhgkMfGt5tZwkrqQJ",
  "key24": "ViueuUamFky6Gpq1Vz7gyKPtWAqGwEhjwML2vtp3yeGMuhWr4gaqHm3pkJYeSRdq7njHRdiM14XhBYUnRMNKHLf",
  "key25": "4kZkH6hVQKrEzs4GAZLgE1gASAKpS3jQ6xQmAg6aGxXs916ryz7Amrn8TEsoxGY4ek2395ybusYR3QsxUNsK2oVn",
  "key26": "2pALvYLryy3tM3gHhb4sgkyACboSS1w1CVQpDiEYuYBHJgVfoLKsA79y747yQ48C4LKptBy9hBsQ7nhWzacgHf2Q",
  "key27": "3moRiDPSawZuktQnKpSi2nbJhSu22DeyBt5J7FVqvwDG2EuXbVB2QUGZUk2RXPKhMtV6WzDWd1kvTsrop8a9JYCb",
  "key28": "3ofQMaXdE6R5Q6gp4Cg6wXGLD6Xrco8TgbP1AqsDBCXLtqGnpxWiGXxap5ZsKZXX5FwXeXCYcbUXyrdSTZmeKwVU",
  "key29": "4QXMnJbFL54NbfGf4vjWmpqC3CciH3fbpsstCEWTRHbYZfSM439yK1viGk8a38hu4uLt3j81HM8cHYZqe6L1coHG",
  "key30": "57j2FsoRW9Hu8PKz9pFCJepApyk92M8EaPcuarQPLv6pVXD3HYnZmtqnRa8RVqG4fVDGKWZGcarGGtVj9ax6qns",
  "key31": "28UUzxTTewcHLQtc5BiiBDqp6ovZ8H8VU1fKVDGCgxgmYeUEZLwBGzKtnL8Yv4zgxhakgAFzoSKfXbpAJmjuzV9Q",
  "key32": "38LtZ4ANBy2d8nTnK1JFQixQrjSYpUo81EKjaGk37gCn1CarcE8dK1ud4JEYNf37a4dT2metjKDNYZqxvdtwcqfR",
  "key33": "4miud9HdtpMzb116Y3mFffbQJJfEkps41SJq92eEAzfqmccqs6UZ4uprHoojd6RcjpPC5QGGd2btQPEpxjcMsAxo",
  "key34": "4dyvg4JmsWcs2NHV6Yrcuw5DB5V5XQemC9r23ibz4aJGnnnkH53hUsTJZqE2PHS7iBGyXENxnhyGetC1NKUQQJsP",
  "key35": "2ucBcnrStjsJakCsiYRcks5Q1TWWoazySU7SaVFvraYHYnMKvfv8BZgCJN3uFBRgyv5opLnX7RHJu7zF5ZdeibmT",
  "key36": "3d1vJUSZKKCV79EbQgXqnTimZp2pxGzv5xSXdA2hX2gsXRnNviGie3rRPcXoKWffTSN9wczQFTWGEgxepbDZjns7",
  "key37": "2QLhC4C3dWcijDm9tx7cX58b494vp4xGK5Nx2f45UrYE7jre467KcYpzFbr2FyMZfszS2L1edBRYz6J7GWbn3pdP",
  "key38": "37HLXgwDFu2xzm16Ji4Mo2TeJUTMNCw6uQmwVdM87MtQcWZBQUAgAZC1VwWNTWBbUHy5ffrpqCgmPEkNi7kWreWe",
  "key39": "5djCXx2Wux8Qw5ZW1bsHEPWPifDwdD3DAEWuiQf6EZ5jezJSE62tHazRyEcuRVvA4VYkXUtNeMVnxpPs8zxwQmUz",
  "key40": "66M9Xczq6LwU56RuVxt9F4SXzfKyWtiwdzZ1iyVaMUKg4Euay6sd8xdHgXNiX94NchQYVbYkZ8xSf4g5x5Zbjfiv",
  "key41": "1rykDqkoMKx2ogCiTN9vu311aqkGo9Gxkvg4mEhmCmh5WeCk3fvJXPLKPkDxoNh77QCpDh3geghXgNaGpixF6kB",
  "key42": "48WvFhPMH1HchZQRtzmwiT1KMs8zPtgnqdk34ho4qvfrE8tB1FuexJh1XMhZ2W6zxuno6u8HdkTqJey47qeEGgBf",
  "key43": "2a4fUwPvxQFgxfTHreSu7uQFTMTu7yAnymGQmWnbE336FLRJ1Rzr84KqFCxsJTxypYEJ8bG1dqyh5329nscjAE8E",
  "key44": "4vZK8FPGi2zmCd3jjomTp3mLahGD8toaGAtZQn4CbzSuTBeWCQ86gxFfepRxButaULuJK52MqoQZxZ3qpgzrrULn",
  "key45": "4YxWGEbzhKmCw1SGxvE1hUy2hj5c7LCSiB2fxEyo5dEiEnutgU1njMU8BTMk2aqRH76BXoYJQXWgdpSTo1mj1gDv",
  "key46": "2mztQ7rb4LjQ65WFKqe374iUbTnNqEhoLxd1vz75ZUG1Bw49Jr2o79n4W53X74B9KMqF6JwJT7kG7f7QAxLxxiLn",
  "key47": "3vUxquBnTXQDvLDhFV354kaKZKFKVNKCfJBXVejacuaQyxNVYJiaT5dcyRGsWakdCst1owghgVtcQJFjEkEyqTiq",
  "key48": "4aP6gkbyu4Yt7SDb7GeQZdte3drLRnoHHh4n8jvuyscxAJV6Zzan3AZw2XTTvZb7uj828PkvMEspCqJ6Zs6aN2XK"
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
