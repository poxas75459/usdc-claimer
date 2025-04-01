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
    "3CcZHpdaek6iCxKX1xF1uNr6AnKU3FbRXpLjDLRwxWeENxK32bmdGLhtp2WLYq7fCNJnqS6JHhooZG2RiALeeWVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DBLQZwx7ocQM4c9gmzNvgSCo7QHJkGRnFgcVjWJX7yz11wskBNTXif4PWXKdrdAiRW34EamoQYp8tJoD3MQuef1",
  "key1": "TBZX2sYb1tp73KpcyNJwrNMqhVc3DSZZxxtvjYRDC7w5kox8z7dxLC78ZoZ6D3Xx6nmFeBrfVKjCpbBwiZAGa6h",
  "key2": "UpKjkkLqayeYCDgoWZa6J74PrwEKRiDcL3i72MfmgKC1kEgCxVdQw9M6kg3pNn5As7qsAuppeQj9p2kBu36ieno",
  "key3": "ZKjDk3HioAiZeTjbrjYDMuLyqFGKyBrAB9cXrSFxyMvRpr5Ew1D5SEae1kXJpzqHbko3kGHyivzZWTEGvVgjfVg",
  "key4": "q7E3vCo6HCGPNG9EfLmZCfdJuHEYEbwGdbTrsg6i3QyNzDrVb8cG7EjkdmWVArEDt4T3645PTcPWn6mY3rjirwf",
  "key5": "4GE3BfTr9QGUtXG1v1DZ1yrvPscu6yvXWZ51CHaaUw4VRFNfz3pbZRYBg61VQSKxaNdtGyqmWnxsHnAxuVKg64cj",
  "key6": "5L5g4phaykmFz5aKdnu8zKt5YNVFDBnMtDwAWn9emtgJSG5kBHvbHK7rnU8CwMbHpTbbUm3JsufrcNM234W5jUDK",
  "key7": "3sPxfqA18i85sxh1R8X8cpu3vsj9mao4QTyDnWmeVbLYxtSZiSKmKorKkjyWGvxTa3PKhxsRMkv9qmzuXD1cibVb",
  "key8": "3y5Q74FSEuGUqsKscxaab7Tr61oxnQS5dXVk29VEV2NGw3XKpW3uLRPi5gotnAqkXuhWkXxMXpuyW56CKS9qCDsB",
  "key9": "54kyRJtv2zNVhfDNDk8GR1yf5eR3i2o3XxhezVhSjxH8QT589rCdwCJMY9eaEf63rq7cHBAmqVG99ZnBr6aqKqeJ",
  "key10": "2GPc1C8CRG6oh6cLAihgV2cm7UbaN6Vf7ariU1KoMcw93kiR3EuCyUMsY4d2pV5oRASvE6LwghuRD2WQnppFgmyS",
  "key11": "3XkwWgpkC6gUdtt91Nram4jRbBHoH8CtKUycEQRGaTnKs4kp9SkpNx9Kv23i4xLDzkTtkrfSdvSj6qwERE3ahWut",
  "key12": "2mq42Wmp3obJNWFrA77ziRMJqtDovEmwKmdVDFy2CCuCCbejqHE9NqqErY7dcFqUQAk23NYRnSCH39n1PkaE12TS",
  "key13": "2P9nBu3pce427gfeb2sJcfZ3uWqrD7ucdG6TkgQsRZq3BwQ2wu5txPtKXPawC6DzvC9cz4dGAiqi1wj7YW1wB2ae",
  "key14": "2srDj2gZauW8qm4ozSWqSe2B7FDzTKipgr5Xvfcy2ZZf6VZkfEpSPmJPHYav9rdPgjqB9oopBcpCi1NAa3qeFBUM",
  "key15": "66DHEGZgnFuPv7fjBu5yRYnwADZDL7ko8pBL7YykXz9eF6L5t2hMoBjz6zx16cQaxgCCpfWCrh8D5Wasq2fNBsU2",
  "key16": "5gCsMrhK92yDNK9zZiAYCFvqjNZvZa3NFLVPfcAWCSjZvChdxSmh7XYUcTMc9LXj4k9zKznK1TMqqMyhqF6fnXf4",
  "key17": "6r3VNCgWAj684TYcXFWW4Gc5y4u1Agzz8K8rfoBBxDwQ3pkBofWJwXUX5jyiY373dyqBTKa6uSX4Tz2yDQQR3dJ",
  "key18": "46KcgTBrNVJCwCTvm4x4XotZG2jzT3QqVq4FV1jTkmQkoPEMwUaEo6TgpjymS9fmWuGSgPbrcBvKqRbkCqATC6U3",
  "key19": "p2E5NthhVuR4ruyYqDUuVVytzAKVUreemdYL7LSMgdbCig7UbF7WvQCksAAwhcju2NdugniFELpmywJg8oxpytV",
  "key20": "GnpAFTghs2MLrGmRtjqrhq7vexhuqUqm9SWKi1USuQpe439Pcukrq37oExz1bftoNxVyu6jfGyJMq9a8EWfL222",
  "key21": "5j43G8RphLv2ZfU8RUJxBffeqVVVX6qX9zzpbfHchPHSx9ctfsJfm7X8fERUUK82Dd3AZ3WXzSAj3Mgj4iBYxEa6",
  "key22": "52LbhFgyVVB9e5686RxPxEwN3TbFXFCsLWe5mM9PU3xyUGD3e9HM15dkYvEKnkHu3VmbywzuCYpx1FN4n4HjGXxT",
  "key23": "329dfW92jJRJ3spwoe3usTQsw788gVrow1K9d1JrEeGj5BBWv1aPcbtrz9CXdx55toGeLWe451j1juuiE13uLg1n",
  "key24": "3BoYdUS6qYdKKK6zrn1QNMedSHmwS62vvqnhGmpXF93NaQbjuxW4RxJSQUoChoMbSZkjNccERzrCw2XpYDS6shpn",
  "key25": "3Px4cRVczdnr48MnfEVsA5JAUwRUfQbXja88wn7F1AU8fBwjKvRiN8s11tTnVG8JdqC8t9BqgqBFHB4pybVxx6HL",
  "key26": "28XFcjPf92GMYCVSxkmA6WsTfH2K4SBFKffyJyazbFfekaxt57gL16scEHha5Wzw2bdNpTRSATEGXycyTuuhBWNz",
  "key27": "5kDnD7d4R5dZ4Xss8dLuHoydjpCqYyPvyimPVevDxopMD2d5gqvbfx5FAvMHVSG4tRWpChAaA77PkkQV4U6zzYjQ",
  "key28": "4cJUC8sViNc2k4yb2f7MgqwFg8mHJxBZfHBc3cCmYsT79ZPu7AgjNfUUaNfLg4JpLXSugixhS22iWspXG2hCJJ9d",
  "key29": "5g9AnGavGo37zwhc6M6arLYeTyVyKKNNPgTcumSeUxHB7Vp4sPour4KWY3tNRPQF7Vnv8yD814fT2Jx7mQPXSpv5",
  "key30": "3ikrGWFzGktG6BSJQHGNFFvF54Br8cbvFWb5S77c2ukRynQ1ZauzemNKEChjT5WmaVE78xTc8G56SEdbGtbXqgYG",
  "key31": "56jPwcYapW21bg2KNCnojKQMdACogL6aJPJxsfswa5oAKx9jsrMFf8A5jMQqhPVEvKKJMLbcGSR7hHHDuvV1ui3W",
  "key32": "C1ZMKuL15MWJU9LEfg9rmjpGebN1XJPB84qZWdtH9uvdi2jVMoxdEeQVykEBGWgRYaVYPDccUjnpwW7wuCT7VY1",
  "key33": "xT2Y8baVxLPhKiVF7niQ1TfiHDFsHP3trQwKoEymiE7VnvUeqBU3Ufmh4Rd6HfPXqr4dDp8oJnuAhe4KrjRwLmJ",
  "key34": "5B8n16omhsPYwoYiniWexxhfKBa4EmvLBNsN7aVx2188J1raYPXj5jBFeYM7N7i3RS2h7Y5A1VkmnU35LodFHRx",
  "key35": "3FuLN3VBWQknax9yNqaCKjQ73rJryZotPHDA243SW9mtGrnPQDaDYBuYtC6mBg6zhvfqKzvUCQ4Z2WoDu4vMJusE",
  "key36": "2eFcJsmMrLXaMGiSLnKcxAHHPrXaMWPET5CjNv9T3UPszcACVkahWYcQuWttHze8HQhbx2NB2zWWxwxyuQWab3Tp",
  "key37": "5eBHjc62mnMiP8DFJHR275AjTK7WTK1RxJbUgZfhDCCzB7qMFGTwQgxdnXUP86DT8EMNokBkDYWEA5r5o218dYuk",
  "key38": "4u7Bp4VfSwsteHwZJZr8Gc2chbyJ2J78K8dqxZQ3S2uDL9c55sCSnpgPdWfK6158ykXzZn7XzSkPxb5Qf1BJ2FWb",
  "key39": "3d3YxLpgNZQ7UeqFiKkThwLPy6D2hfL1r2npyPagxwZ3VzPRoaUHf4yE3BSdUMAZ3GAvBhA76Nw2Upe1YHWYjpDC"
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
