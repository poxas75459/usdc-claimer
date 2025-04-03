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
    "3rd4u9qYvVyiRPia3Z9YzLyPEs8KFr6puNiyDX4Mb9coNVvfjYjP5tD6rPzv6G5z4aqRsHcyAq1FYJg98S9dtGsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QCd4QSb7Z2nsvkM38ZyC67q7uSoh9ELVJynDm6XgRh1HgTysnkSD7GyGfQns7RbhANcGcDLnb2CaDk2pKuKVm9X",
  "key1": "4At46PEPz6LySDVg8SZ59AkpTL8fP3W1VAmopM7BEwojaA9rKmnBmh9mMzA9uaVhLwHXRiZRtK8XX7AwPtUQ5KNP",
  "key2": "S2SpfPfgAwCNN8jQ31H3UNSN8eVZCPL5ydLHhKGv7HyiJzrbYFp8DMHAdqmAbtrZVBicFi7gVJ6dHgQ3hfDMtTa",
  "key3": "22bFnEbmpjwiRfgu2jHRWwx9fBwkyNKbR9E3HbyPjXccuj4xGScBfE5W8bWdpNyANDq5W3kVXBa5475qbsjNey1m",
  "key4": "2VLdGkPQqKAoktpPMzGHct1dNLtYoxrgRrVL95eCoNM98HrBdx2kiAUfaKUAkEWwBWZoJDdxoUY7kdH9gJFPfGZ2",
  "key5": "HSvAzW7QbjekgawrG78p6sMWrzFdhKgHFnyWEhbCoRJX8t12oKgW3pvVoPbQvAZyYVYvTnViNpw6adYmVAdUknj",
  "key6": "y5hGc7QcR6f8TKUYrvyeUfzxjZYXvWVtwv58vbtvEgBJwnW3rYEUAwGAiVguwASr6JfWNQuMF2Bk6cphFRv7jaK",
  "key7": "1rzxc1JL4ZXevWfQGQK7Xs8FEwZVMnHhNb7bMygDJmuRaVTAaZHwbcj6NiZi1v6SpRx2sWDF3M5Gtnv8yHSbWWw",
  "key8": "5fudz9NBzKkJcgvuu3skrnhFxBi7Co7HRT7MXi8wJKdmZby81CknN2rVWHcDywKtXJZ6nVd1uGCft6S4PxC1qb5p",
  "key9": "3VViE15MHCFcL56dmvWJsXFZeuNCyHnFoWDFL12EWx3NT1NPt7G4EFQZtRqiBmbYqxmpzq3Q9cH9SjAWMii5N3LR",
  "key10": "2naKQSsCKXzYKYJsbFxH8TRuZLFJ1t68Uazdoan9SMFoez6MwdRDwwUGDsBjz5sHyKWgnuyBnmALHDf6RQxZYeod",
  "key11": "UDUS6N1tC4D7JHps9ZP69aMzikepm267Q3CMxcep8eMtZ3sfCJKnv5qh6LT1QLaZuGgYNnYftgYmU1Qo2XQud5Y",
  "key12": "4xeAQXxdNywvAHvvF6j8Dgq3RYvqGibnwqcK3ax9psyD4F6DD51Z8Ra1Cw1LtpkzEN7ftZi9DkkCVaNiPUz17m4r",
  "key13": "bSEKtXGf6xKeLLXMJXa3HiAksUjk5MfkAjRNRhyTbeKGM8L7YiUMWjUcuXzReBaq948drVPJEG34P5UMegHmUNU",
  "key14": "4UNZvtEbNyEadgHimt78LrVYQ8LShrkzdpWq7yQpfBjzK7xWpQHpQCuoZFCVe6tQLaSnAv2gnNb7vtmuqxuaDkjx",
  "key15": "3KTq9vUmBGemN12DBAJduHDgeHm2mGc19L8sNM6rGcJmNf7uCPBdLCCZDa7q7Hd8skNAUzE7co8E18S6BscFeBA9",
  "key16": "4UzZFYbx3x4uxfqVxmeFWByAYTu8ajYhJYY1LuTJJW6w99EMs7RDhC83Hd1qdooDwH4R4LwiEppMFy5F3g5pFtGH",
  "key17": "5Fbw531S9ZFhDiEPjjJXKLqHnMB7H2L3S3tL7odre6gj9Zvf2uZdJJHQz71TGvDMaDsTToVQYGhT8CBcAo3Xi9f3",
  "key18": "3HP2pTkXQSoLT2mPww2rT4FyYQE7rmNKNZR6Ko2oxuKH9gLyr6Ti1HdACFStmuPvTTHDKggUiag7NdJQWWDAgamN",
  "key19": "5es1xDXS2Ejg7cVgYSNDQzRjEpmnZr3xRLanKHfX2NfzDjMUyx6R818hfGQcJEYJAe62LTdpHT4ViGZpR6NCPNae",
  "key20": "2mwMqizwmzJQXaMySRt68nVBTVbNGN4xqMa9LNTG8qteeCpdAbzJ2nNmPztPCCg6YkDFYoBKdace1mkDumKXrH9S",
  "key21": "5oJjCU2SaRbfVbbZpnqHzW31iMbDCqGw2ox8i2jQrVKFXAMcfToLVwusiuuKfZZ9XnfYJPkrzojQ2HmEv7jewxin",
  "key22": "2xXoVvQ1RDrDJLMnFJeN4WodRjicykF3jMP73dHittkFfPzmvBcZCQfyeb8WaiUsqEzjsxUXN5Gqj7Fa33yUu249",
  "key23": "28rDEpbZxVKcZ11V7rWbGYEsjKDRpPRgcPdYN4cMuPuHnJLtPYhDrPcpGnpMQQ4xWjrpFn7axfvvyPqZ2Rs1H67Q",
  "key24": "4zeZZJY7ouF9pqzAaXpPqnxrRQwByHi97EdhXnPgD2kskEGr7qHKGnNgYuZfMBRvGuuQ2bXJAivB8WuM8DLmfjWo",
  "key25": "4TrtAtFYXyKCr7uRgyG5xkzuauevbphf9jkq1S1WNNEWGNbX14aGBNHwsBrdGzpRjvGxpTdHG4dQmJ6XD4CFMP7Z",
  "key26": "4TE47Gicvya3PrZtprLTUqRADePeYEDQQ36xtijsdga1wyoZKGbGnWN3mJzDpBwUx4Yufw7pwgxCjiHo52StqmSz",
  "key27": "TtdbrXuqYwuUqD3eFFLvye7nX3kkiE2v6bNvRCZx2tGR6KDrVirkirzNWgPxZEQedKtDbzwjagaRo1FvKDNK4Nz",
  "key28": "G72KDKpKXKokFF14qzAcanVWe7XUnZcsyXhTPLNugeR8YvdWvSB5Jpt88TFVnfUTdrs6wfH373mmddG2AQovxTX",
  "key29": "5FFvuPoMsANbTYQZWiwbPyXZNW6CVgs6hWcoAz6uRHRxCFkfNR9ripCuZj2QizU98FTAtrsWYMTFbicCrpEHTnMU",
  "key30": "2MVTPnE3m3MgJx2caj4k6JJ36F9nHes8HFjqL83SkzShBJjanLQTMfGwUWPKPmT5wgaxFngQSYocZinf3xwYhm3U",
  "key31": "5gdhSj2d9uPDmAawz5HPsdzhKPMTDoi4rxFZbkhLaxsyDEJ86eh8WGjTqBUsy67NFFVb3jAc2DkGK5Wtb6XmdCdh",
  "key32": "2sm8prs7QZisfCHAwJHubDeDpmjvVh8TPWFoDyPi8jzXYSivnqhQszUJZhPZzTupMFi4uLnDu5vCTMiGwkxNdogx",
  "key33": "2XY8ajUbSAyDAZqMKxpGYpv7Ewrd6B4W1fWcx9WLZoKQJ9iTeNo2ZkfNwFXFxWuXcemLZvkfHZ38iXxRBtiZDhDn",
  "key34": "5H5Xzho9jtpfjEbPBi336EL4cGygiC5GHEHfykUEhrieJqyCwViqCH87FyjziZqa8zFtDitqXBV9YHPxzCX4aa4C",
  "key35": "3vzmXrPs3Ai8RzZ9Fq2MQ8qVKvgU1m8HK5hfbTPbGDEPk2jjnB1Af7bombqEdZ2MdhxAC4gCtyuwuB4m1Fgd6DyQ",
  "key36": "2QAAhBQEMkjgrmBVwQqLMYEPQD49bf8YEp5s7qrHnj1SJ2DztEbykN3tAGv6C3Ct8xYNGahkxVMu6BsmaFFE8X24",
  "key37": "5LimkSmCoobz5MGkkFGdFZgu3CkDMoD7zt7xArNTGPs8ZCoHzYV1BiQ11ovK3VCrntLTp6vRARqGQj7ak1Gn6HE9",
  "key38": "3qRZPfXZ13WWErTSGtuwxwC6X1QgcJqaMkLYwZ5unAJVy16JnfNgBCjYyKJ4Nu1GinDZ1P6Ua1Xr7Brv7pKDsgET",
  "key39": "xJAjG7QSjP6QsGy4H575kVFQosuaTCP66tffA3yZBdCBR7asmZCsbG4XK9xzgxzu9VrX4nwPnzjvGTZhwjGiVqc",
  "key40": "5FnhkN4H6N8JVyU6Em4xyv2Xw3x5pA3iDWVc3R2DtzLNCxBmGbyLpLF5oQuaWhZSmdidSXPC1xMCjgS737MsdPTQ"
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
