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
    "4TVR4smaSGgyWJ6AiN3pHeKMyFdgEr5JJ2zrHLyxWd533zAo1b5KuuJbgXvXwcNzfanXrU5cY8ZojPv8tR1C6kYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GjbSw1RKPocQxjHXrAvi5s3V4fBVrsKKgosXdwxu2kTpn7a56WY5WCTtdUKHfC8M7ZL1CHP9MoYaem81V9oCn6D",
  "key1": "4D5HUKYmBfh9eRJ3H916Yn5oTSa81Nu3aXY48eyAcaVt31fq3GgqmgACFFk7VPm9CZgeng92ZSPw4TjzkyMLAo14",
  "key2": "3gzRD6gxaXoY5RmNyiHS9ZpCXUFNnqKbQxoTesgRs1Y1gUVNaFDZH3DND9LpYr8UetFMooyva41VwTME4og56TQ1",
  "key3": "53nsqmA1d6t7cZFAr6ok4iQxtD38f6PbhnzY6XLnqtiv767Ctvx2WAE43qDh7fWbUac5hBt4zjehn3rX8V6oF5D4",
  "key4": "5ScBiCXd8wWZt48CXJN72adEAJVWRsWzR5uTiZehpk6BjfcN6AFvUGvxxpt5uuAsms4kcSazxB5bAmKsxN2njT75",
  "key5": "3wbCtZLQGpiwjkgmTwrKGJEU3bWktu5h1SUhPyXacXkkmstZHrhCqYHPVXrqduGD166GZHUBBX2cUMqczb6DHoxG",
  "key6": "5Jfyf2gszqhj5h7M3frvTHd1nPhuUvprVW4F4CqWCggqsdxVYuTuLYvbw8pmCFu69SvnQJEYTgNGhHdUVrJQAU7v",
  "key7": "zVYJaYkg4kP3umZ3tG7ia4mTQeLCB5Tt8gm6irwRgTYZEw7qzfmjg1a9jLmSpCgeYaJnRufydSCCq5pxkm31sUW",
  "key8": "oZFkFG7wkuhXYEo7zaJFvKPa1kCQWhhv6dPMyivd3o2RvSWPUstkSFFZa22Y57WcBmguPeFavmQBzYqiHfRijqK",
  "key9": "2UckKg7RkjHTt16f6vDz8MpoxjxcJtnMJZGbMJpHbQ4PUAJdd4dGTrxpAHp3bJ65bkByAuweeH9436FY8TaxmakX",
  "key10": "56foqWewyrJY3CxQ4CqCwzp9U3wWdMRtGDME8PEw458TVoKJ1omwCibmyyJXvp1CPv8rJTtqjywJwXMLkcrc3DST",
  "key11": "56oiMe92cgjWS7TSyS4Jv42CxaEcdsX5t3tBeefgyS2UGnKGkguUi6KGB6fJ3bkt7qF4h4FwMoqJD8dhzvJ6781S",
  "key12": "ADnBQU8J4hewAdYF2X4JRbWiWNyKcLfVNMuUF1zJ9VhFhPhUQAPV4S7n6Axc1frb345R6QRnPevxm5xs5W12wDf",
  "key13": "2JHECZz6oj5G3CL9Ed9xUguQvHvPawnsxft9sFtgemA3rYGCoJXEP7y25SYsubrHpRggev5aiZVd4J9oBaFbpS5Z",
  "key14": "49hNUxsi1y2ktihknwAusJnPPnquZaRuVy4Ub2y8uUKMfe6k9uzeocN19zJfjczyopR5sPztqy1UcirJJf3UJeVi",
  "key15": "66KcC5frmfh9mQG9kRfuA6RApdMn5wumNrWDgDDgNJSApBTUnzMMYp2k1By12Y6e2GEvso8C7ABNAtTayudSrgH1",
  "key16": "4c5iAc5m9ZuM2hMnNwEUR5y3ohdavZSQzXXTeERsoVPTPiENciGrQuFJT1cSZgjLqdm5k7gssHAzVs7KPkvNrKYq",
  "key17": "3DdgA1Tk7uHWLALxVfgoM6wTUdQxrRJ6AcxAFiqyFY4mh1ohf4MWJ4PdkPxEYr22g3JhEEdEHdUFLJrEV9bbyT5s",
  "key18": "4qfwvWQ1Bfs3xiNeTELJp6XnmYtx3aMk4SrKMnzpigz6RLGuh8JWrcK4Cd8X3PJDokthUkdZ61bF4SuLJJXBG9So",
  "key19": "85MX4QJDat4QsVSYyT4u3Tpt8ZhyjYq8zHke3Nb7AEmzX1CaWyVx1CxE9N35kucXSYJ6rP23vAUkm2y7rdRFCpN",
  "key20": "3gCR6v6ezHjdxrC9AzsWVjiiG9yTRMTS3EHXTGw6aczt17mhX1Nr2mPrqTpcXuqhiNyzdrWbKXHTTAGC6Q16cYvr",
  "key21": "26UsKXxhzddRvh6KNVQ5xrKFNAAqS5KXuTW6Q6wEoCxTMM2JbHnWGoj1qGqzQdwz7Vqrd4fGKaeaXRPEbYs81DEP",
  "key22": "4kAbrjBuUwXtD2YkziAG5MbNmTuf7jChmkUe52QP2TxdLCHnBHM83fgoBenaSSaDXRGGyzWLirptBcekjhHng2YG",
  "key23": "3FkkwSgxZWbwWhwE6cDrn5kU8bqsjBrME7ZYQXJQrjw7Kz5xDo4q1Q9JiA4bxdpXFnjefJNyofwFQDvYVjgA74gs",
  "key24": "2onBkuhpzpsdsdKo7v6tJfoXAPtHsV6ukHA831gv9UgwCuEMAwnGqmwgWhdH8Q8Fa5KcsRsvSfcWNjQVLsF7VdNr",
  "key25": "25zPT5jScj1pfPu7nppbmF1dMKpqkJvM3Rn4WPcNjxScgFdWWJtqjSv4pTRwLfrWay4AL5F3iUS3rrcftv21pRcb",
  "key26": "3ckdJHiXWebRV6Y9LxP3Un1PZhHjpAtkoWZHf3WeNXdXECR2nJpE7MZf7KXdC6zChhkQuGRLZQPKiyZCCFj544Ro",
  "key27": "5vcdQ1hjVnCkyFcMAHaMtmvRvQ7MbK5zD2LyLj4bHrvw2dFuDPMJSeT5cWecLPjx1nFyRnghJbBQzQriayUMLFUe",
  "key28": "5wX1knzBdGWZQBbMsb5TVMmde4bSbviXt8xNphzpXXuSGgRTNq8WzSvXwugeRv53aeNrHTKMKVkeDC3kTkCc26Q8",
  "key29": "3BG6JXwVEFWFjGabyGaLXUtjuC2iqgoTMmuXQZ3gtrTTf3HFhhCsotWeqm1oR95gvTGaDazaV1xB2iSyAEAXV6d4",
  "key30": "27YCvoWQMTTdz2weACsBw29WC7wjuMWq99hZvNBeTWbTog9C7brLa3YUsMD7nxwGsChA9jJiiTMRjjUUvWNT9kuM",
  "key31": "3tgnYV4paa1QjxtQZGBqtRoi8fWZv297hFqma77wgSitadgzvMPFyARddGTHhFfA7KpQW6SXRdvu5Y5KtwwyyRz",
  "key32": "5WSWUymVWi8gGngU23LudgWbRdtXmGVHVwYFRGA5xhcbd2pGUG8Gi6qLA83XystREMs9TMzUNj5QFeLDJSMsw9ji",
  "key33": "MZpbouVoCtCz4vbcgAvKQ9KtNr8XXLpz1PiEpz8voSSHakZXseWUrSpphkSCHDRFCXZ2NrYausJgBEjUMTWbrgb",
  "key34": "5TZ63yrDbAcNVPn99ozPQY2Fi3GgcK1K7a1881FQQG6a2qhMGib5BmeMNLMQBqqNsCWMTxXne3h5JqPbgQsWTGYZ"
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
