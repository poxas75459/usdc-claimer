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
    "v2WUraZUwLKuSUxebVPydx84837qMX3miAKbHYpY19C4mWEgeit4B7MPApzPStJnRQayMu94yGejcYyqT7TrGaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JmVZpvum7MhccFL2pENYw66wsEyrWAn6ajbYiFoxrVzLvLb1HLeRroFdRTTrfnpZ2EUC6HS5vPr3CNkBpANSgg4",
  "key1": "3G6qAyh8qsJMLyS2pSy7WHV4DPXF2UnaiichJtV3zAm68UbeWNbXsik1Wb7NZnvCcSN86WGcgNQw9wWKuXfTFTbm",
  "key2": "oUuBkAfkaRETXjnrJ2nZ9ojTQbA84aVcXEJuDT7nDwgUXbEB228qsTkq8uWX47kqXbkGS8ifmhq5ipcjUsTx55j",
  "key3": "5P7UpCaj9mokFxrz4MXk7MpugnYKFaGGi1Xo3pFbbCDUTvwuya7x4xvn2TqPggT4KAM5fNWe6H7ypSiYpcxiKxbs",
  "key4": "4drVZby2gvBnQyCdQ2aCv8pmGssic11CaxxpfMVjm9VtYY5DJ1Byi6QGPUT8SgztarsrWrHvkcmR4QeMzb1JtLLM",
  "key5": "3wH6NqpBy1384nhKihTJWLxXet2unEzPwWn2Eau8sTDWEtwAo6yo53gQiXEZ4VxfAJ56CX2URsDii2NCFJaRu9rh",
  "key6": "RoXZcedTkqaCxgjpMcd6vpwbFHRxwiSXkhuU4dcokTwQdPCohPTNLvM7ZRnE24YF7msS3GVd8NVz8LA4snS5vgm",
  "key7": "5smqyipKyNJ72J7tQxUKN6E5vjQpLH57w78scTzMSHsHtJ8g3aKtuKK6sgyh7qRB2NrJNurR2psR9Pp7uVgjQrLs",
  "key8": "24ifW9MmHAXRCyQPsSSwNKQ7q3pYXAEHS9NaLq6PvxM4diYSzqSw5Jncr2opaJiEo7XSyb5qKMmZDkbzYKgUpYDz",
  "key9": "5oFBWrSFzsvZyTV9atpsBEyqMJaBgW5n9J32Ye9qAi2WqGMxBKxxPvGBHsdVsu2vBiHAWfiBEHbL8GVNxpzLS3tu",
  "key10": "HPvEwP5s81CsH1DZXndJLQrLRzjph2AVb1qEsUQeXmRgcmVL5BXk2WKmn2E8VF8BxQkcprMZjxpSrFCzQuejLHX",
  "key11": "4irM75fApjAELuTohnh8e71tkPqrPEw4VPP5XBZnPqjtbW4AEiDXbWXW9TX1ECbfBbFm5ct61qYwCYxsaPCkGLcP",
  "key12": "GiEKTEsYArzCSEuFU8SWZbLHoyUiiBH7zgh4M32ffoYB6rnAb29g27V2nvANyqzqymZxnHs1trgnuHhAbNouVnc",
  "key13": "2mKNBD9AkNQaujMwbF7W8nzreEnoEa3vvrcm2hermPddtxyfEoYsF9jMZnwg1w4DrnpqWjasvYktWjGeumQ1t1RM",
  "key14": "3xduzAuTkEjfKLBbbVxavKsxPCznWC54E3mbwmqRdfVGV1tkf7TvBiHYccfEgWp4uNHvwhDQFRfC1AV587tnWF5P",
  "key15": "5Ea6KWiMrbyRPKXq9FZee9rLN9DRdeCHKhvGN96juKYp9SnWLVJdqJBsdLVMsLYGo18yxPnXqe4sY4wZzfga6oNe",
  "key16": "4b4uTi5izjnarpGpLDabgAscbARXUkFuZVYV35Ng1ZYUAXVd8DajXMW8cF1x9VYBS9jjucuzCXbKTqRSYB7szoQj",
  "key17": "346MsbubZA327p4YFAUj7rP4Um3eEJVEin5kWbJDurMWTZnzHcGSvBw9wxCfKCg9VSGGnwoLcaFTAxRyWufempAG",
  "key18": "3LMhtK259MCMz1g2XRGjHLJaSjhYfnbvStzcMhZ4mdUwwqF6T51xGSg1rbfCr5BFgbmSJrXU2B1EeYxbhLQjWanA",
  "key19": "5jteXsSECt1LTMnSdx7FTXrxqJ7MPeKgmgtaxyP25m2jyVYGNdy2gp77rHtfXSEHverP6Hzi326j4egrQonDLD6a",
  "key20": "3fLmKN5GTQ5bPMJGixbfQn6A1kDmULNqD4CELc4bJB42LChENamN4w59P8AJb8KcrKT6jqfkaMVoKQXEf8eb4K6u",
  "key21": "2NCkY9xBBuqZUcwSnJ7kvr5Y1zzuaHXqriEqFbWKTwyAvQhdZsjgwd48PNZq9w6C4vPMnwhPTCrLBuxhNNA5aFzZ",
  "key22": "4itAcQFwQ3odjTjb4pS5UG3yo7DznyYWBDKM6YWse7x6FM7Gt6fHu9oZdzH4PXb9yHUuTbFiU4PJEUDP7DEvYMQX",
  "key23": "zbVphbyYaDfizEjmDr5xq3U3YgS2s9BtJFECJjxwej34Zz36XMAQGpVzvioepby4HWv7vMrKC2e54u2Wqh4ZcgM",
  "key24": "5JA5Un5Xw2nSthmCC2SZM27ir4qMRS3PcE68cA9FyTUitu322scNiLdDEMEobZqBFQQBsxFrEAGifS15NgBUKw6S",
  "key25": "2qLCX98XfbppPPSy8qeSKdT4QLnRLuCuKsQRzVpD7xXwY2zFtZa7jA9DfHzXxHuw9xcjnWoTiqVeg2sSbRSrSKB1",
  "key26": "2jqJNQNviFzpKmbbw9gYrB5up3puUwVwBebvZYjgzJ2KQeFvJxWbG36FxKE8vCbfGCEAzzCfeS1SfeeyUvQ7KSME",
  "key27": "dbDjAhajzp9hKkwtzcAQLMm5uMciMjhSbZoG5XM5HSTJeN5FButMRECYesvp3tnWFXNbnRHbLfSCrv4zr69hbBU",
  "key28": "yDtV3tKz8CjbmsEBnQCTPZsLSXM4N6c1AEpS8FrS7t1mELmR8mzoeRq93EAAfqRuUF5hqYv6h2UVMjTceMFWakk",
  "key29": "5CKgk4wgkFhfQAZ1vxXP2gbQ96579yKEscQg5HWBCfpTTbp2zo9QZmvdYu1S1uHPJ7EyK9621qzZmbwLXo6VekvL",
  "key30": "3fXY7ZmGDnn7B5MFeLnSz4YLz6pEXMuykmvgAuV8KAmcNE61Gpr7c59jHeJuNVouD5qXPnpZrFXpM3hLc4yqqaQS",
  "key31": "1dq1qhNvBxfzvsAofG79QP5BbWqZX9duMrywgQTuRyWwynxwjpgM2Z8scoAVXme9Q7rSCyzSLGTEchbTXLQLzN7",
  "key32": "3j44xErV3SAyWTQFeh88xTKb4ZM8SjChpFxcagAjEnHjyf351aQe7aJjZjLjoPqjV6qxZWKmfHX47cVrWKYjaxbf",
  "key33": "2RzzTZoCtPVFS9Ud56MikPeGqcfEviwz4RbbDzUrnhSx1eapK76ApZYQjEtXTBTp9HDNMqnF5aRqYXdpnd9DQaHx",
  "key34": "CYTTs2d68j1NWDe6TyzLcMvnpFKWsTMq2nBzfVK9PsZ5C9NzgXqtBQz8Ss8EfpPsvV4nL8NChTCM3S19gBUXbGL",
  "key35": "3WJWBo3ZEuFPX9Tr3X9VjaFkBcGFdskGJPBrALCrGwY4YWmEF8mY7KspgpyDy5CXbjYPX6t9DRD6vMTssjx6LQMQ",
  "key36": "24X3MgDV35xjXrVRqp5JUJ4R9WPD7W6nuHrvXH3QHLh3uq1VJfsFBNnYta9rq6fV2aRsKALNYqfKuRYN9QH3KF2v",
  "key37": "2B6eotTXbz6HRiLJ2x1V24FVTu9nEtjK1MMM1aYGG3AHxQtD4Jiikd9LgkcPsRLwkoYJro1uvFMHiY84Js1SpHJ6",
  "key38": "24MjTk1BwpPxyRq1jVvNe1kTUaUWgRK7ozPZrZjaNKwRg5jNikNEZCi6ASsGvDRCzrC3vb8s4JVrBSXThCm6HvZ3",
  "key39": "63ecuWbWULJ29FMaVmNeuksC38NgBam5F169CAVwobcaMq5CiKhDebPGsohK2EgP1hh4UMZvYe9Quf6VQXoTuVP3",
  "key40": "3upbyXJuysc9JcpYP3xVM8DPX6FPNxiYfSqz7MaL6etQfZULartKeLybE8FU5BrBU2DCXoaB53DkL1zqA8SnbSJe",
  "key41": "4ZyyXh3R9CFT9AKwER9FyBNnDX1XDHNJZBJKCikcfHa1ZHfXxShj9fWmXzagrsugypTj9CphwMUL9BwKQAbPHqQX",
  "key42": "2Hj9qaP7Dg146k5ZpGjtThjZHmWDzQYRJse3nvoT9gK6spfZjWHvpQqidVcZUDAY5Ga4JWDKzzhqJQNND7f5UVdF",
  "key43": "5Bth1QC19MHyCnt3dDBEpd48FahpaWyakEjpBtwUCxbj6ZbMqnHnNkScACnwmcZ6A9rP9nKb4GfwcZUP18gvPa2w",
  "key44": "48YDmHZCdHzxmnAgxMTRCcTXFwnw56Xx7ojqm7oJkUnV79UxJY1odGSMfRtqGeQTDoNdiCAQwwDhpCh2qZUkQMBC"
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
