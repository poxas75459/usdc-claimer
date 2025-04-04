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
    "2DLZ94yyQzrSMY3igUDsgA91icXZbdQDAQJNGTrbzGpgn4oaN9Y2r2fW3XWxaM31x4PD6bKEa4HoM3jZbW9DZUAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gk8uKPdV7uWSzPDbELZHDmaoWniEN4y41GUuQW3UkpK5Xoi3f1Psr2r6iuM8gmr8SEUEXMeMnSdoe8Rqe53rTCt",
  "key1": "2YskbyA2p2BhjCrpDvANDysicWd4wV9DRt35nnfR6QZsBJzW9DC3a9NhGGGy7Ntnu4Mq5Juf17YzxonyhL1brJLc",
  "key2": "pSG4GiPrHMzY3Q93dsZ4vmkiLyQU11DzCvxjWMFnZLrwu2NeLr1ZSV9sA9aEWvPtz5wwUQhEq2fY1nj7H1bBckc",
  "key3": "2jKcB7C3rKcmiEZ9ZGqVcKu8YgeuJHApcGfSMXHLyXbBcPssYEPBNidJUWGaFzyE2oMsZzEFbMLtYQBWvKNV6jmL",
  "key4": "DSgUQFXu9hQHZmGc8UxF7iXU5yPWnTJQVSjzT2rZJoQDMD3jhJ2vNnPmzaQMKyYe78ymmit5tKH5uAMHKqNwb7p",
  "key5": "5R3ahazPwoXU3kjipWoUCrqoKvX8ahFwnK28sxZKJWaYnRegEyUjgek8onxy6SGyMkVR6xD3YPAaLpZs6Hy3mwwP",
  "key6": "5HynnSPA2YDn8ZPGT4pjERFKaL8nw6i8AfcT3DiNNhLY6Ln7haSkJpwobBw634eCY9uMbo1fZtE76QWZf7f2KgnN",
  "key7": "2KNaTanC7EY4o2kUusJpjss2Qt6SM5pm7ya1r4Q3d3JRid57vBd4cXHkystNL2gFTmpmuyDBBeuZhBn3ryJFmosU",
  "key8": "5MjBHWtUAVypfPH9bGfvJmqE5nCJ2SNtQsrK5xyG5NCZPMCY3MxAYZRM2fWAQeDLngM1rETYAhmHBGdH8BwHFYET",
  "key9": "M76jN6R2dvRCEfaAjCZutsNYd855eXUDBaSUVCBBRC4TvYuun4EcFL8vBzRgCkqjS2KKao7wPB1eeycRcdxFZre",
  "key10": "5VLeyVZjroETcD8rKz4mq7tEM3LooPCqzu1NDUBKZcGCwzFbcEE7NKX2dAxf5yg1M6GtQDJihpsjVPJanhUAFbc4",
  "key11": "36DYvpFZZfDSYP3LSfHtwKa5DNJDCe4jwjFMJ4Unwpv2HYUFN1jbv2iQBi4LCHLroP5JoeN9Wv1aVy9VRdW6AgK",
  "key12": "2nd9qGYUqurN9G5RTvZDZfxD49K4UtkGrN5erAWiYK8pdtrVMvA9pvRj8qp5xLSPhTpkgwiK48SAFftxTnCiJJn",
  "key13": "4kVgbinNyMzTJa8fkQLXQq7i2PnaUrtkUiLNGjUAf4oJEsPiNanFMuh4soqmWgGaKXY76JrkFXqArtUxUSgA5V52",
  "key14": "3aNaKwrXqyaAgPCDPBsCM45SyutD5cQWfj9ryJdtdqhzHDERyYmBoHWjPcYHwtq8FVvusBJw5NwEsQGQw3Yythve",
  "key15": "5e7VKFRtnSyTyupNxAZkQCpPvizwJWFYd9FQfVuLfmNiuyRyGdMD3cMWostE5KT32yg2t4Bptqubza8z5oUNLFhC",
  "key16": "4Nvy8VAJWJtVX6tVJndwCp5yqnUDuxRnjNdf9Xnf6ghQHodYiGxxdLxWyx7q5ZpfKkm4Gfnd7Dk9DSsyxNzH3S61",
  "key17": "46HBU5rkob9TyDuKcx3qiq6QjsR9xicQ2uXTmE9EvEnb7dt6WhY6RNfhFmxUFetEc7UGa8t95HbDJnwZ5JEGjMfr",
  "key18": "2j9P4HDLnoVCNLKqB2EK9WqsH9e7QrryEJT4o5vEPjFcp6Vuyz8jeoPFWGPApV5RcFMiBLuFfp7gWyY2UE1aeoij",
  "key19": "2PVibrCPDxjZrurssqgkCMnBL3P39mJYz4re1irLSekhCARFzoKRscftAb1s8jYkYN8WEuBnQEmeQoMXcZnrppuy",
  "key20": "gQ6wDLrMqrFyY886p8JnSZm3xRi4FXUzpCX2JPqmUrn19JsTNseMpAziCRrkhUqxpe36ESYCGv5e9i43DL9KTC2",
  "key21": "2PSHrZCcEquqP38SFoeuwocgZPKv4ZadqXUUQeUn4Muw34YDYwKdiv3wJJnTCY1Z3WqamrAPechLRwyG2gCaMJx9",
  "key22": "3nEH12Yr54QYdabreadcsuB1gjZC78zwvERMT9V8LjYCdGxu3mXZtRZPet81XZfdDySbCdXMkExRXQ4Embds9HQv",
  "key23": "62jGuhFUHeZBCEuAZY5N8UGXAvGvVNfVoF4WJ6diPSswM3QFMFRwq6ZY4Urr8A4Kr4Yb7Qg8FRzG8MPpb26XLguq",
  "key24": "5xpRNz6RWu5XKyPSfWGS8w1pAtSheoHakG7cgedLNw92bTip2cBWhHvwCngGZDQcPXF1jyLe9Y1wTPZkgLhGrYNk",
  "key25": "38fVqZVrzyS8xdtL7vmfYFb76wxjapddT479wkWU5bHY8yQ5sQctyF9mEiNY63U7Y3F8fpPDiHurn63ViG1hogzz",
  "key26": "U4pXp2inb9QS8FsMx8W3Rc4xSgpn87CKoc2qRd37vrsEfdNkstRi2fQGosDAM3QQCiYEjGC7KwTAiJ4MSzFz6RZ",
  "key27": "4WdhRVXg1qqTVK9pd5aVyfGacK9yQrMBFuBkdE5VPGK63tY4SBzyVxjdrqGc3zFcTjpNFEMEK6xmsKtp4s1Z7t9c",
  "key28": "3JUDn6MZX2TADmoHeavpbqfUSkb9NnnFzp2cQ1RVb5AwqQTogMNonceJ4G8NhuBJgjKVhC1XbodY5ggu43Qcke1p",
  "key29": "313NQre1Gu2rmhdrhFdmadAnKRZ7cNaYh6NgBzMczP1XQ72g7KrxYMWmJSbzGSu5ERHvqPjS1HZdKFB61LtCYtvL",
  "key30": "e5oAbyuNhYwXTPgSYiAM5xmdWMnsjiKMNrS3SNdH13TceAvkuhDjKL8LLu8inBDxSc1Q6LFkTbLY9es1wWpfFYL",
  "key31": "2D8hG5XR19DxtfCHovHLeeXgrGfAe9hqec4wKYibrc9aRK6d1Ln6BXWySPbT9Kx9eBu79t7tZXaYWGjH5NArqS87",
  "key32": "ERZ8EStfBKhNsSADMj5TqX63zMQcvtJxKv7UnoETWkpXkMFLHuTxRcpoWDwAy9uNs6tzAaRTVdeokLKHdw8hoJt",
  "key33": "5Xm11QVNRAnbe7ThYoTky55qQSLWLL2HcuLcMUwaikXG716D2iSE2omQvGkb5QoAFDhZXTR3hf8PEQ7WJwfkEKvb",
  "key34": "4Q8131ebHTfDyJDqTvzhCukWF8tPCvd1yb5HHUgza2aySda8MVcfJPJdTDDsiPXvQXCH99ZUbNr3dwgyxVGhkDbd",
  "key35": "5iXvmwEVwP4zrcx7yBtc7AUH6NWB2SmnGe4h1v2BcCbWBZzd1eogQoJStCyHMWFaK6ETQh57jprznqty1kempwjW",
  "key36": "5CEpjx1tQwjXEm4sH5W38Y2J3WgAcF2KgRXmBbs5T7EhbrsQaKVUGevEd5oKkZi6zqqWpfywzUuQb6Qx3nDY3f47",
  "key37": "3T6f2HSjjeUX694yXs5LTWQyjQB1ok1GoF7CgbVkPD2HJiYU2WFo2uzKhmqCS6gQCmdXjsgMEYEgZYPBNyc3fSo5",
  "key38": "5iTd3tfSoEkMoekQ2AMgY8zAoBFsJZqAH9F7pWaMPTXHtUaPpa8FjNSqQGHd2DrFoWjv7262xwvuyPpEszdSRAcM",
  "key39": "4ZKCNPQiudGXgSkzz99AzV2bgZCgzfgaweMMRz5SfLV3qYwhu4G78raDu86u9CFJdazt4pbE8DxkEVCh5sJLLyz8",
  "key40": "cNNWG9SB3ATdSSwgimWjUu1XWj8Xb2jffcdUBTV7Y4AT5NUVaEWDPz3hy76asXjqhYZdvkKnWmx6xXVpfuHQkse",
  "key41": "3uwp7UQ6hN5irtCAEB5uXg7iY2JXpsVxr6TsAxz5sRa64vFVG1p1JmtEKcV25UZT3hY7iu8cNrJzKUc5EQ5sosx9",
  "key42": "65gJNBgz8W3z859cQN3GvWorvdXL9G976ujbGhGdpWGd6hrVfdaaHGSHLTBMDb4bQmLSFx6gGYqP6dNDPdkNcQMR",
  "key43": "22uWoZ1DfLKp5XYs3CPyyiKyqppGScwJA3zyzVRXEXMoyzUdn3qogkCuTo7K7B3j7AEmPbjiCv4aNzDiikx2q3RA",
  "key44": "WJFKuQ4qfhyMkfFfqATAxoAE5FvbMqPr7B2fNjVRyqPPL8kCvgTGah4otaonx8QxF38pXx6pcoWWh1YpJ1nQqxh",
  "key45": "4s74518QhXsMZxmNxrs33yWzc2tszksCDscToECBAPoRe3Vk6mC4JjSAsefLdGckgakxoH2dNuWiE1e6mwCwVbwe",
  "key46": "5jVhPSvemRQmasqaSx1sFuUztyLZgUJgXWZLD9k2vmwUi8WQdLM4c8mZCupmeVVe4hXiShNGmPJbkfYdyDNKm57a",
  "key47": "21SD11BpTT4gSncPkFWrbdHep8hkkQHEn73LNjA72yQRajcNi3648j5ocwk9yocGqsKuBrLYyoVurb7Mp7KsDL4Z"
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
