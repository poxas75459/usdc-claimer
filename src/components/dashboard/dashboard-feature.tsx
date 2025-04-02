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
    "56VRm8eR31ckXB2QL1TLcnUhfFqhPRhbMcDiRpuo7nT7sGV9d1KBfVtcGxMFgzTPFDCr5197G5E26URP1kZsaAuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oosQsnJXBD686LTok11h2vQby4xxCmUGr2Z2Rya4FEdp93YzPPHiaGyLat4KrSWZ7rAQTEvAiCnBC72kdhLmB1h",
  "key1": "MhGRxdZH8h6mfXtoZejZ1ffL8jZyJJQUBYHhRU4FSTFbournr944b47gKboZcqDb8i3eUq11koHcHbweffeEbTy",
  "key2": "5nSYw9FvnkyH8CAg74aC4duCyP3xfYs6hWWvSjP3giX9czGYGHbznWF2rAixbv7At4KDa8VqzBmJ28h5dx83mhKQ",
  "key3": "2nSgEZPdGBk69AhHyjifuUsvavPUEpzrohXqh8N9QKVHWZ2sRKEzB9Mk2YL6QvM7r5h41Xy46gJh5gb93uSJ6ojZ",
  "key4": "2bfPjU2ckwWbFvZq5XPoFAMtGvxmDdyXDU5mS6qgRLBqrUNYF13pZh2Z1LH3CaoCnwTQmfs158mdKDBt9wdSj5Dd",
  "key5": "3US3ttnFqSba5a5FYDn5RkE7ES3nLVetJ4UNnj7EW3dr7cUXM6ErXRXLMLnWyRH5kfZoA8jsBTbfcvFCkJYzsLYa",
  "key6": "4C9SU39UzC81WEK3V8ZBZtXPRhg2isnKsMeeFtaBXwKr4Yk7zvxGDELBfYVLFfbYXjMcrSjcSQggu4JFPYVgGajW",
  "key7": "4CHYSN2uV2dw6WSCdn8JKqwV9pqrXzKQTXMn8tvzCc4EczdztQgvB3GMQQeHsb3Hrcwg29RgNu4Y9LEK89A3cHSa",
  "key8": "5papdvbTbn2pTTaLSKjt6TU1VHhCgcv8VvTGeuApAW35A2kCvNbE4F8X5avvKCqxzwvAs2ccasqgJkzQ1837XKyD",
  "key9": "3AA47Y51dxVgptajKwyYwaKGWcNF4ACdonNkbyyiv6YnjFZ8bv8Zr5p8sXSUQPViNPPJPGDzo27etJGEUemEVuDH",
  "key10": "2FYWFN83w14Ps1E5RcN35igrfHkij3F1GsQKKVW5Ub5STED5Qk7NPu5u1o7viXxcBe1kk5UGfNmXq2Bo6acZEx5W",
  "key11": "4khUA35PhCK9aY2MQxzo55RpKCsVrGW86qy52rjAA1Lc7APWBoKpEY62Sk4dz3tpfyBzmk8AreKkE6mkHof9N7uv",
  "key12": "3K56TisjAqGyDCRFfmWRMTpHrgHHV9A979BWN855K4Qje4WimwsSX9KbSrVmfLqgULaAjB6yPJY26qp9zakzAphh",
  "key13": "3TdntQyVi1a3kP414rfmynD3aUt7Xdmicnr64ehSs1RdrjkpgfveBBv1AsdyTp1MpLyTmoBTfP8UFc5BrxJ297Tk",
  "key14": "5Vo5V1Q2sqMKWXJb3dkVfEfjzbNNVHK9XaKZ3syxEkngd47WCaLyF1UfdodmEaGJj9TpDiH5hC5YdyiKk4JMSB1D",
  "key15": "2GuEz8SGQF8WJKzK2AhKaeNcGWo6iLirPKripVfSGNZGTy5ATUmPaQKTkYfxzXfqJRJVjLzUCab6mMTNPxbXpEVW",
  "key16": "2ETXCTJ16Q3tWzRQTgihxXrQK2KUZ4ukXB6tSQ86NBjNTAqKcUv16M3dNdyhoA8aabBVAeVnVYVvWpTAJJUAy6VD",
  "key17": "uDSr9g8ufYuMLHeRPYZAbTco8spymFXtnEGh4NjbG6if7KAcTAaLgpJZh5VYH485KVpvjdH1CV21cFgk81HNZkU",
  "key18": "3s4Vm8TCSDN7xhYkjtjuGCLynZ2TRYSfgDqPRtYS7KZewrX1U9T7CypbpsueBbjuyKcPUWYo8XyCkv6YcQU7keWz",
  "key19": "3dCWhAncGJ8JCVz8nPCvYQoKK2FAYHmUxRbar5qPTVN47PtDw79zwpZvHLFxXcx2NpL3nsFVkN13ZWuCwjTyW6Mm",
  "key20": "2JE3M7gmzk9ReFLdsG1UwoPkFrBVmLR2PohWNXQGrT7xiSY5oqMrog9F4AScJXR3KP8y6hoZURviQe1ZRgAxHcXS",
  "key21": "2VEErWhujJBDXd9T7rpG7u1WnABJGfFAnb18kLev1CvY5AdBGxwUDR3FeGmQcnR3EcrkiuhuJ8tdCAtSbrNWA5tQ",
  "key22": "7oe5pLnKkhewHTtrvAjoZBXQSF4kNHZJFqHhmkMZCsNQxMVGcCcuzhaMX1CCTk2ajGuSTrMDkwdLntQY6sabdGB",
  "key23": "4rmrscHjn2f7MZTPYXhDX43WgMoL8iQnFksZxvLcRuX212Y9S3hVisZcF4T8mDzdbpcYTDpsVhQmyvKgaHXx3Dqf",
  "key24": "6trm6yVsohg6QPZ1Ve5HHqo1criXivQn1sNX6h5Q8TczGS28wKcr3HQvHnog6NFpVLr8i8AxrqCYcgh6WZfefGM",
  "key25": "3h72n6UyfdMtonnKRqTWbHCSKc32RH5uMC3PTsaX4XmUcZysipGUGKyMdf5cFTeuReVz87h3JKavh8RW4gbmhXze",
  "key26": "3nzXbHyr3YScm1jKZERzb5pkX86T3oGAhuNmTcQkhAMJYRY59VknAZ6Y7WZzR1Njoy69ARz73SxfLCjYbHgKrR4K",
  "key27": "SEQXERFG1gowgrzxAatyrdw5BwS5HfWrLwEX8z4bGqCHFm5Sk1Q4ZRJtoMGUT6CwxTaGiwdkJfyYCNxvk6yHSPL",
  "key28": "3ptmxC4uCrsusSTPV9p6zwNPHwsdDjzorVvVNhtRDeirumoDp7UYxYwGTdBruB1qz9QkcjQPCdunKSPn1X175XWr",
  "key29": "56FDAUPviEMNGfM1xVLxYLAnTT55zqziBGmcyRLm5p8MF5QiVQSJjDVDvqYEwxxKVEaZ25VEpNeShcrYePDGh7D4",
  "key30": "5N6csEEpUPdovL9CaNQBzCiAujwxnDatAH9fohExTaqxuzQ5xsDWDiEUZFTnU1vdR8y9ugqzqJ8HAMsPr5cmGUrP",
  "key31": "4mkgS34hzi2DWj93M3CRWboCdugDgK7UuDiTnLBxwBrZgG6fePYWbN4Z8avZ2a5qrpC588AjMJup1RCJA5jvnxCR",
  "key32": "5sRz2g2CPSgv6sAGAXFRkRDL4G6KcdZUmxD2qBjNupnSpr1sM1hjT6HvPUe55HvuDRf8TBVZ41KJE6q1etB62sWy",
  "key33": "2ChSJLd7jEJPcmRouNticbNNrQbeMw3LbSXkbQSRV4Jfcfna3fA2WaBaRLN2jg27ipwkCCKaaYHNxDw8KjjG6KtL",
  "key34": "64XoW5fH1XNfzwE8xdbxUAcQjBCrzKVXvMWwbEwG9C7affDsv8UCDjX4F32BskK1s53QihwErLqgA8fcBKJpw33z",
  "key35": "2WRutB6XmJPETexMNBj4ziCg1QzB4WUqiAxDLQXRYF9oJFrAssX2CRDDPPaeGqmEs9TJr9Ahu8ypgUJjv5MXPoMg",
  "key36": "3it4S9Q45LnMU2NtkdAhhA14ZFmw8cch9JjeyKnqxGci9MvPzDXZUc1dJjnbe2fAVW3KucdWZk87pqmpt2tShrBz",
  "key37": "5G9EqXonZ6bpL3FcxayUA2E1f4Vs9WyNWop9nQwihJWUqWauZbnZNkCY5R6N5s4zVM9FKj614qXZfRMPmC9RKsLk",
  "key38": "5mZJ17yVS1gKzZ722or94E7cMiGKBd6dXwpKwNs5rCoLmxh9eXLXjzZRhEcfpReXbnsupY3UVU2sJMwKQXZWKG6G"
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
