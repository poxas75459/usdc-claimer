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
    "2jjr4u39YHLJu9Z73jbWbpvaTCrgZRTikUxD7s782sZN7Ew5yKKru8htpxigVj1vvXeNe8xDyx5uef7UQLS61K4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2To26bWnsrKvVtV5aJ5EXNnEc4LmoCn6Lm9SPgVgScPfoHR4bq1A1ZyyvtHgrcfkfHUhJ8iw4d1X6gzxhhCxrKoi",
  "key1": "55TUD1tJxoqRCfj8zRD3TFBLe2f3yF28yJZVbjNe4huRYEBpZzMgyYjpmyH1HHcd5o85enb5bJFtFSSXX8crP7D1",
  "key2": "5v1LHkuNHantb425xYv9Lboq4MxetvSDHpcuzNctwtPMt4sXvfAAZKT9UTESPWKXWGaXTUEtBk3N3SZ6YbuGHKCQ",
  "key3": "3qBUjdAC1EutwZEAyBQ6YAP8mE3Aguu3JgtvzJSZvEVwjot2s9jUr53s88gSkt4YrEiphf8pqRTMtJewrRtF721h",
  "key4": "4G9XanJurcwFYnst5vYQgXb3kJr7SSnQpmHYwERbRDApMJDop3G5CMb6iiqeWeFYJt6zP6SLKjW95QE3H4Q6fspt",
  "key5": "5TMsPf5ucERMVbTy4aJWkXfmuC3MS5Lcj5CtG35tqfrnuK3zeg79NCDuJ28YsG2H3YGdQk2qVdtAHyC6HB13EnKc",
  "key6": "9PvymrdRSxfVwv4zc5n1JGhaWPDmSEGWF2RyMLyJ3RTvHG5iZBtdhEfFb7XY66nSTMzXP4R21K3EJvqUoDvR8Fo",
  "key7": "2aGejcQmM45DjLf6G5zXgP1riEvR7jH6XEuHn5N2vSUFheUVbiT7hdxqfBnknRiqQCQgbK5bvtsP3N9gY4KWcUtY",
  "key8": "2Ku7xCp9Hz9uD75fV2uWY5W3cv8rZ662jet3aPoV3aRWREa13kw52o8RcXwTro318qjefcJe83CsE4r8feCjKyZd",
  "key9": "3sT9HtX3w1X3A3GsZDoZQbkD6qK8o7TDkXkhKhLfhZL17foFxRqGeMtx9CBvwb8W6NfTFNqNw4HS2X5P4CSdEik6",
  "key10": "pmJqtyxuPJhv2cxipMPTiodhptV3ZKGtcAmLghscSAJVwHwdBZzUoBoQwUJPhNheHMQc7vptgscV5eBrruKjYye",
  "key11": "5GqJ1umifxzUiFEK58ZAPsU6tDhewwi6AtN7YUYQywciKbhjvWPVHtKdYsHpHVkEYiswjb7yeytFpxEsqZccbUCA",
  "key12": "5zGuUCKiVnRpzyHDHgSvTJqR6dUeG3vMay74h8nEZGPLsMi3g6bvsKdxh9dq2VB1x9d4gAdTt5ZdMYkPPwGJYBkT",
  "key13": "3owUytvaQ6mTbwQwyUEENFY2TCp2S6fE8j3J6Fxc8Pybgjxp6L2pUNKMQ9595AsziRpBweELjJjcDfbdhs97vvpX",
  "key14": "3USfVzjR6MGf1M7vtxSA8ZG68psLRwqiyjGz4SZgWMkqBjPcDKuEMQi5HeEUpZQijUMCYtEFJVduUzVR1LrNGamh",
  "key15": "2c8FusjGGJQUQvAiWHTtF1RNLJ1CRfDQpscnLVCb88UScuic2teKvwXwVquACzs1VEAfJP1vNYWr16zmRDFtYsSq",
  "key16": "5Wxt3qeYaKngg6SaqvfAcu7QLn4gQPQXZwmAFXt1SdUEkmp6U8CS2kRkF1dA47xCu3eSc1UVmWhejXVXD75MARsw",
  "key17": "3Yesx9cQ32H2coPB6V36ZGf2TMTmDSFKAfXQjGdt3mLgrJ78QGMDRSmJj7gkwnK85pkzixLFqcy9AZYBi9jdFfji",
  "key18": "ubQcvggx38mYUrWCw9NMtRzQuKqoCe68XfYghfksiXT7x2cGscv4Ppf8uWxBgBjdqzg4Wm2rxd3iFDX9VnBJHAi",
  "key19": "36m1LvjnYaZErCn55BJdBfGmodBWKEWnhf8sfaeCRx9CxgEbxEGcJSA5jkZ69wQnYZoUCT7mP8ZjrybkkMJt4vGj",
  "key20": "ooLpBEZR4rAM9JLfJv2mBceCoAqSDckugFC7eAi8qQGWpz7r1a1wwLz1MECQecKqdAostK2FJ4zMDkMK5i7hXD2",
  "key21": "5hCNh7tegJPU4gUmV6ANd4goDt5KoA8tuZtwwjN8Nz1F5DkeWqwfZQaJkfVrj3bgwvkRXmAwJugxZQqAgtVTn4Vq",
  "key22": "4ZhQ5Aa2j2SuoHyUHWoiFLeCLAUATtbtAdVYYtdRaVgCXVNCYFUwDW7CL6i9gMSdiP7CTKz9BTcTkfDk83ZMvSV8",
  "key23": "2UAHg85wJLUhGYmsj154Td7k1ckBdziVnTaLzmaWrLgLjCZUggJeWbcf9wQEkFitsTKWzx7naL3Zn6te8uwATfi",
  "key24": "5aYC9wvs7esXqJEai5Mjxf6bbk58FGEANGAFgRxo9neEHoM12EwexDgbj7EpMPsyBHLAMpuDDFDstwy3ZHw3AjHB",
  "key25": "2HtGCpk8h8FzHEUs3AmiDXGzW61iqJi7SFEZ9TCUve4zkyFvoVfhqxzU1rncFwQDJPrTCigz3qThkfEAPBQisEsS",
  "key26": "3fD8ZQqgZUNWGkUhyEwQAKFMQNqzvhEvadRscqb3rRonxU6JHK7U1xKjMWPRtYtydzRbDUpJkMy15LQsRBuyWEA",
  "key27": "53FSsFjh4Vvi95T4jJjrPqWtvoxuvNEExLq5V36puPrqhV8PXa6bApiju3pgvFPM55b4qyq5ppiCnbn9z98HBouV",
  "key28": "34ZXCd3mdhk3CpFG4Du7tnsNEwwAm2cnC7vdYGhdbWMHYfvNYtZWJPdV9p83V9VUsfLfbvdhbiFUwG7jWercxxeR",
  "key29": "4kPqhBBK4wRfAcWHvm4HKXqvBTuqWjSee8vabESMLWUNyG2Td5ZEdMxC1f4Tr5wpgDvELkMcwuVopmu47fZezkYz",
  "key30": "4qQVfTMyVYcxTr1AvA2cRW3z6qqrpdEuiBWPMyTDRH6GmvkNKcochJT1sA8veurwURYnCZ57YedaCzGa8gAqXFyx",
  "key31": "3DPjnPo3MEg5TxdSQD3TExVCsDy3NJjwF8GGfK2frwpfxeLX4qhzGo5pzDutx9HvkzGkVyiCHXQv49SXwEJZ4HNk",
  "key32": "2yL7mg4ZJ4DeR3JNP7xXbVod7Kh6R3SLMYWcJE5QR498B2CtRWHi3mq9jzE7sxMewy1XkGzD53dwgXsGKvVXSnyT",
  "key33": "5Xeh3MQiZNUnJ94pWRNaD6Tz2jakGGWrTAPmgQdorfM6PJC4zRaph3ETSGmnwY4HUftmSUQh7gghwnVLxGTRvFPH",
  "key34": "5kTFSnzsHqDNk3QZJfNwBU7WJGBexhDy6YWURQtG4PpFWo4TwYaaPi627LCULsavzWLYG9SRKXnDX6eyKYRbr3sq",
  "key35": "5ZSz8uQtNL3qkGhoqz5SkMhi7LcyEMaGhm7uoU4vNd8SciXggrjYfSqc9jt8EVhuJ8pPrrtpXCHEBxdaUD2nWQiV",
  "key36": "mAMspoLkhjRvUdeXU6bewtocmuMs1CgGpSqM3iu6TZ7iPBuX24yRtwf8y2Wn3PAbvBVZjJWLiTFoH1APGwTxcbi",
  "key37": "3fGeaSLqmu8XQgLvdzsYV3khHk8EvEd29Kec6prqRvGKfU5Tw3g6tuhezGa4Kr5wwxZ3Sbi7ZiJCM6gXBpGdpCbA",
  "key38": "3U2oZymjphftA8mPc8AAipUdrY26cMBGjPzou7RSpc9S5M9mPHvPBkh8idTLmDWeRBaBp5hHKM9EhJ2HheTkcPZJ"
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
