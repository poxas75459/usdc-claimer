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
    "2GWAkiQJwTWRzJS1J9eyv8zGwPEbxSRgbQSFBXCL7rX6BTiNQxAer3robPAtESHtq4pPF7TG9F2TwXLQaAJNoxzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28YxTiUh2JSHDCgRgXPFQpZTp3m7bsCd6n4dMAAj2RvZ44sFEzUiRTXbnxmXWptiToKTvpeLXNyLzAeobCu3syZE",
  "key1": "76AjUiDA8bAfEPXzFT7rpCjcGsDfgujkDDmfVaMzygz6HWfwzHBsq8kU5y3XcHbDoqbSsjiRHya6REP7TB7s7BU",
  "key2": "2KB212PW4jF1CmtHuWWWJk1P3jWRYiQLYfncM94cyzQdbYz8xeTuMUcW9xGwj7STkYXNADLREXLaHa8c3tUTd6Vi",
  "key3": "LtU4nRSKQZDQyzs7cbLcY9GhffrKnpSXQsMmc4f9WYtcbT83gevcrwyCspNBgB1aShUsCfLaHrv4BMoJVv89UGD",
  "key4": "3wiLTZeD2cxRFHwnC1iNAAirjYdGVqu21h5LJZSkMp9EcDnvfxMrmynrKqcb7NhgK6pF89FohGMvJDrJ6D7dnMvp",
  "key5": "2rtNErkRkJgSYkDC4vN3D4xeXgK9C5QyFyoTRvxtRF3w2mwkUQMxRvBWLGwon9cp9RcRspVC4Ch6Uxsj5GXQm2f9",
  "key6": "5h24R3vUX4z8knY7sLGSHRvA45prwcHEwWBmEi2S4Rjnc2nspxn8eD6wKUS91KjrqeaySwy7mnBS7vWe5hKwDcqD",
  "key7": "2E2ZrVHjFZeCw9rQDqSq84Vq6Wvj6XKovrV2WV2xbeTPNfmKvJ8q6RFaNoHtmonfaqieJC9FtDH7dU2eB3wPbfFJ",
  "key8": "54VP92W7TR9pwfUmsLHaeB5sBFSC1CybR8h7Er84dTVATnbDhY6rUf9172pMNwh2ALpoLDjLodmHCDPMKZPY8rEN",
  "key9": "63PcQcoR3Suqj8M4Qiy5WMun4GnAsCQWRSA39yyN7jZDxqyehecCnLK394FV1tttyFHwHzZPB6HPoctRMxVPdK2m",
  "key10": "4ynDnogTFUujktEGcgHQBaCpP7cq2uLTEfoCVYfZ3dcFngJRcrGdMgYY4cE8z22LBfqYzses4UKA8U1QxfGcRd6b",
  "key11": "5xkivkFXW2uNGnFPVAt874o87AXkUms7FFmh33Q6F2cbMb6bCyzaUHTjzmoC8K7Cc5ytuQQNBek7xY7EF7R79aXx",
  "key12": "3gMR1v75cSiizg86tyPT3vqD6cpAuTL83zvv3zrT8Uao3ThkTVyp4Dmfb6WZkZeYAWB9ABavN5VJBJ1LyaXxT9YL",
  "key13": "37iPY5qQHSXGzx6j7ZHwhHjsGMmiKDpGMSbQsAQAWnM8K4ioBJkCtnwssN4WehiHynUGJzfTbe35niRZjF2mnsJx",
  "key14": "2RAhYD9NyQJGzDmBbrqwCbKMPQdrhPRod6eHoJ5bZtJcSaLNgMLumuygyf8HqFFFhuDNg48YzdYd8RGAr7MTiHRj",
  "key15": "4vNackovt6TJvZYzEwqR5QbYYtEJhS9K4PrMs7eXP4FZKRPpiNr9reYYiGzxnqus6n8SViVGGAq5yZrpCjizEGeE",
  "key16": "3GLaAyUzYfiQaAENYdkswiuyKeSiAtCaeZbUX5u48C769ghNyHN8xCyscGSsLycdVY1PnUhZdFKpxNQTHmD5kwT4",
  "key17": "4PotVwLYCF34Qx8eGnaNyA4xw3PieicNjxNrPSPPhiwbt7zfqEykbMRHGcU2T23bJoo49rGcf2iGyLXXKKV9wnYp",
  "key18": "2beZXA7SZmTupurkvg1xUhPdABwSzJccXAwHnG9y7zWnLzs1sXZ1LFcK63xN2Ey9H1nKi72u2tqcUfF8X7D6fkKa",
  "key19": "QdQBVPZWSo4CnPz663dR13QUhMhPPrkBbDVmUNeJC9s2XMBSMX1uMqGQKb3qS5jF7t2NagUNtVf2yH8dZkK7qi5",
  "key20": "4WDd6pveLEkJyzjSLCvGVHPu9xCqsF3aVrfuhd49Aq5sLpvcmbmSif926ENMLXBbFEaP96LbikHSiUcT8ehD5HCw",
  "key21": "3PUyyinTJgFw221dfnMhKEGiQk7oaEYgoJ8fY847pre2jrLCUxag2DnDW56bNGXzBUDcoRvWN75qAvyhfouCNaYf",
  "key22": "2xpoXaTo7fqT1ZB2ofHNbkss2oui57G5yaFMZhPjLbmEXkq8bhjbwEp4WDRH1edEQk7SfdTakF1LVLX5JNHFKCgt",
  "key23": "4AGPsiehCgLFWKPQmK2xDk1k6VUxApVsQwvSDvYrRvoZqzLn4BiSSbwwzkivMnKx9MBKkp5MjAJKZChuijoVX64p",
  "key24": "56znBWGbrxSfbGq8rzDuXRyoHgcgf5ZU1jgoVjUXxL21AxuLqPU3GZ6ppf7HgZhP8d9BjvnasuasWcVJRJ7482Jq",
  "key25": "5Afca7qxBhnhez6iMT1tkRQ5eVPTpZ2yycE3PoZn3xSPTUf1kmM7LR79EUmKBxFaCD5dZveHuMmiaAtfAvKdJjXT",
  "key26": "2eEYAeBe3t4wJbtcBSx2obzdzDEPm9X69QBoJMmF4BmAtFTqMQX6wcrjJLsBjJn4cyNYhSxKbsGcHVTaofbfMFEg",
  "key27": "3GZuTKLfAKBChdD9uZqj1wNR1wy15AVUpRpgWxMbf55PGbpBh88CGK81DwXX9e1vSPFHH7N83i1uRasB7dy3whWs",
  "key28": "4SamMSD3QpKeweWm4Sb9183XGCNaz6QY3FyL1ExjDX7H4iVezptU7u8YeTSv8Z8CyaAv6hFxKSDskGxeBjRZ2Z7D",
  "key29": "42Ga5FKDVTaqWDpXHZ6mJ5Wnb9gdk8XuYASM3arE86UmU6QmoaZwFTHNVuiBGW31NUBVSZKShgxc3mJiKbvUdsM7",
  "key30": "25pvspdoTkjDnFVwfviCoTHdtNoQfhcJgSUrB7cQL9juN72Mxnb3R9d1iLLcdWFfA2xkC3JC79o27SkskVo26Fqh",
  "key31": "4tBYZEptpaf7meV7QXE1hMc2wctFEbwXoUnEfqiHkxLc4YimzHBTK9AhLgB85SwFJRQP2whgv4XY5aB1n8AxQQbF",
  "key32": "2xryKwopDjXK5Gs2SxKLt7qSqhc53yqCkoXAQbRipvGVzzRbbGUJjcpcEwpZecmtw6XcQSR37AHdnN555mzzRg4k",
  "key33": "38igoqUXyERU8rhwynyiyXuoMjYz1W1U5pZzfDytSYDHaLJDVQ5owzCpLcGcUHHqM3yxYWmWspgCqr7vQR6mv3tB",
  "key34": "GvVoo5BMzmwtwoxrHgMK4FoUGXQ8iKpkkZrG5YsbwjFtndLEutygjPhcQ9vikLXErFvxoaHsfUvb81wWGvuS5vn",
  "key35": "2DPZKiJLjFdnxcUJoN7sSwQu1KepvExL8ySHKmsWrJZoAcYpUKD7UvuzZYi8mBY9o4WxeKuZn9fcBTZdMzPBjZYG",
  "key36": "iFsSJKMQWwu52SQWfuj7KydPesrzB7SawvEvKKdKfpXR82mpczieCFTVAoGYacxXzkVLyqh5qHGC8CxTfWqHgge",
  "key37": "QURPjqu7KEF6hDX8kstG165utMRLug6CFzSJ7K19M9qYuNDSyAkBbdUE64CMZhiQNQGmBUqbZpkBTKD1UvNKMDz",
  "key38": "58aYnvRRWYkXtj2EdL5a22XNCFSyf4t11tQkY3ZefngCbMDNycCbfZtkyMV2RFRmXy9xL4C7BNFc7DqCxFT9Mr1V",
  "key39": "mnBvG49kRG85oTgKCJYYiN2ZhRxGugiWXYem3q4itFrF58DhxVhFnHjnK4u9rNUWDfvkNyxS7mb18GMfbgFGkFJ"
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
