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
    "3z9TVr7EdLHDok99K4Vvdd2GCxNm9eUHLkykTdRKYWuHsL1EwHG3GZisagNxaQ746giSowUdgCtKVnCrBt2tj8N1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FJ3DCg7uLKxJJqiC6mrN9apYGwB328Lm82YGA31iuZxAVXyfJTTDBY3MrsgtWpzruvaX1qW3nEoYWFdEYg5C4fw",
  "key1": "5F8YuajN4T9vWkqYYDnt7HJmEejc9SXkyAy9qwfWJr3NgRtGSdzgBbU8YqZqkBxx2k9uZgS6At8fk73Nt2T4ZUT3",
  "key2": "3xTeEbusUamWAcN5BxFm4TmqtYffXVLsYAy8DNPw2mC4c2RbM2Apt2y63kcw8KMKZCxq7T1gLeGkZj46wiCRhVsh",
  "key3": "5vpiVQayq6qPQMqTvXdxcW2hirWB1x2s6ZyqDY1MQpYUWEGSn4ZXJbfzbzWSF9R5ibYaHycacNN6ZR9M7nAXdEvZ",
  "key4": "3Ffm4i8hBe91mj3hFcP5CNtgci9UpRYHo26SDGC1HiWftdDKBzyRn8svNVheqGaLhMmnzT7YMenBZzkbTD4BTM7G",
  "key5": "6kWXWuT49MpXjhkpaMDqWVkudYXUjanLEbJGrSWPH7JveiGGj9HBTrx5m92Lt6oQDBvXxEyRnXuawJkxzuhxrv5",
  "key6": "N5mZ8twbRLPcxMpC8eAWgXL5mNeDxKHzHZ4jkijtKdsjHbvWfi9PxZL8niiSrtALNs5v4qdBM42SAsQdmKmGyC1",
  "key7": "4K5oMQkX87R4ycgeVN3V5eysKCTU6M3RVaT7fcRxiosMopLZKRZsS9DUktqsetmiFCdNszxsJsMotofUBJtpavyJ",
  "key8": "Udc9edC43sSAsyFD8FaHzLXMmRt2SuDVpigzMSzy19XyjFNA9DM48QX8xtneYhaJwr6HwYWUHHzKUx5UjgtakeR",
  "key9": "zsjdUszRfZVdBhLCXF37PUcTw33AdJS5gwiBd7qcX1LfgT7uDtBFFGdcpT3XqfcKnEanTBnMRsfmNiRTLanJ7xB",
  "key10": "v1N6jozJ74AWtZ3JEjKE3xqmYwNLnUJSyFVKZsVrEFQjNDF7MwrhxuSTSdZ1dwA6K6VqNApTWAs1hHvWXWWMY9p",
  "key11": "GL6SugkCh9ojwkMj9grnvNxgL1E6AdQw8ZqrtzjMx6Tb7kGsLjxP9tZrfJbkNtciCLWATNRbURttKhKwHUCJ21Q",
  "key12": "2ubc7Y2YszRASrXc8MQPRHRQQYhYKmimbHZquA1DzMbmAqpcVBgh6QPr7emvpetsFL4zvbEjVyq5WSCiZ1Atb4yz",
  "key13": "4p3RG8vcX8YKrVtmh9wfVFKm4gewtpRjFQoN8tezAQqA7MYnBfqFrBh3b93uz9JAtxKLLVKmW2icxDj5jHm4fw2S",
  "key14": "2YCNLZqknPdXA887QmRPrRrvdHBrBhjQjm34zNoXF7DXoyVEGEQRXVMc22e6PDeWkeRzxi66qWLHFrkXf69HdfK",
  "key15": "2p7H6wetxjgiXKZUzZM5wN9aXDsxgDSSD3YrVoUbVdvkG6cz6rnmLj9rid2X5uhWkt4mfqi6jzruE262XUfWDwji",
  "key16": "2yPppGmoQzk9pRASoLfdcXXSmTKPSAazMAzbZfPPXgj8vwawy2NeqEXqFFrq8nxu11zSokrNyCuJiShNDuS47kZe",
  "key17": "5SRVzN1T2yh1pwhxpHV38tQbkrFHXTLe1Mb6TQuEwX9J2Rt2fBxBGrd4sZKgPGWCZJrKBNjWQ9MGdq6K5rEfwWbT",
  "key18": "415GmvzT3ZrZfDYmkXVSitebPtwh4VH8Qxtz5Se4FMUGZQrhLKQsqPjvZ5UzeotChvuH9chmqX9dhk3dyTYVgu4m",
  "key19": "rfCWtXRcAPyxY37Baodh88hs8c6qkUKNRd11b6CWWJkmZ9KxfakMDCCYcTehBLJ7gf9Gm8urjWURzzyFY93g8Mw",
  "key20": "5UPCpTCXUnAP3uxpXBUxe47ngpQnar9E57a6ExAH3mhUpM42uw85RRyC5mU3PCLXrZZoe7kMoyvhg7ALnuNaVYnQ",
  "key21": "5sEGMVbHMtvtu4CtLznoZFJCRXiqUmmAQieVdWrMo4CD1cLmjGoKCfWRQttYc6PQrCGcgiR4e5MSQQf8FyNoYtGd",
  "key22": "5xwF616tWUaDWVvjryF2rxJCFrzAtuc1uvjGY261rkEYtTiBMGrGL9vjkEAH3wrsk9mSG5S47EnxJofiFNX76ANr",
  "key23": "HCZtnQmEnoyoiTx6oaM2drdZD4EY6wPS3kArgyMhzrqtWJgF6EN2PkoVWrmJRPPKo1SjpQT2sE23EY4hmE6eke6",
  "key24": "2JUMCssKg6wK4GJTMjQkd3kmzEY2DpRFkxVNTCjxxS22qGeR8YBTnWFV9DfppY9pSgfozVGiR6HAdfYDknj2u35",
  "key25": "4Hx5oQXoSgEYGyrB1LuJcqsabSvtaSnTpC6ubVqteh8oyjkSbhwvmhECJEuQdhCDZfVDFBPzqgXmZhnau3NWM6QV",
  "key26": "wPrVC2WHJCS8FePAvVYaJKyrCaUxvrPVpWfmZihvgks5rtZdCUU9KKvK2hV6pXBtuttYEhJgL42ApCXcZTV9jgB",
  "key27": "35es1PDzcsj5xAu9G3r9dhbJvUYkZCoTvD3eUuUwC4gNURGbp7TKfsYqiHbyiYe2U1wMVDCADByhSwMqvd8cMqbx",
  "key28": "2qnrzrfhgzBAmVW7y86EP9Bb6LsDLVJdpMcscnPUdLHJ5Bvn7Lzj2kwXTKA8ogpFhN8H6BafjwW4WLRdWsBnoH1Z",
  "key29": "5z3EyBsQa2g9SNc9CkViRnSRT6bNc2WXNggs13VQSuF8pncf7mmrre5kHDVEfCysCbU2RQKTThKAvzcFtBF8v1Wk",
  "key30": "53JrQmxyzxRVgiWm3GuQHRXEdP4Qau2j7s2dtn4DmT6v7cgXp8kpwhPGe7z3xuX5237mYp8m4jLXDMNderazoJjV",
  "key31": "5zKThkoHZrWF7jjqyBmXMqkYuFA7JJ7SmT2PABoDER6qG7M7zACHxmjT5gPxUbutdMbedgS9z6XYBDXy6RsvuJZc",
  "key32": "2ETvxpWGz2nCF5xgGMQxsoicJbimAJzLAYqAZ91VSxGTyyj67D7dZFuL2Wmwdh6DaEgW13GRtmdPnHxbXkLJzew4",
  "key33": "2YTheCmfpHK2YQPvY6qjRadv8oP8x6BP542gUeQ15i6FZtm8MmfzDgUMj4kTUtKpPDyKnCroBBewwtckPNWBVoF3",
  "key34": "3pK27vrAxE1BXt7FU7YAY6PVFU1XPrXqeHDjAmnJDZ4gyLuFkdZw8F7jejnqp9148XXask1zwLbuaRHA7gF6TXU1",
  "key35": "5PXix2jgiqPxwZL3XB9QzKjTE2wn4DRYydAcLDxgwbNTd7pTjtC8jgp8xHb9igoT7Phs9wRpEueki8PPgJQ62Bny",
  "key36": "438JXBo6SFMqDcbPt2uYCyGrWGc8xPVbL3JETfAwpFWnUitnsE3AYsEHmjRdFjiqSaCVZeUk3jnL5DwG8VNgRdoF",
  "key37": "3x3tcwiKkrngydnxyG9SnKBWSHyctHfrGSkeGEQXMA85SXGT2uTSohmyNQP9GS5Ykp5HpuG4A8WVuaDj2JnxGjo3",
  "key38": "24sywLFdJ5WmRmrn2uJqjfiYTvgjwhcGfEeRBrVQo6wXipZuk7iubag63cU1QB3dhNmKWzL4n8AoUicowDbmMKTs",
  "key39": "5wrBq6aM5YFauomBtZEkU4A5tXxbdhNEDT2N3qnU89kWzwDesTBvf1BN3ZE7uxqKr8vGUffyd6XQXcyq2TQy3kSS"
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
