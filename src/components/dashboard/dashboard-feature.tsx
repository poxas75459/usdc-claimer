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
    "5SSkwJZeFk8zGGgSCD3fMtYCmzC8YsvFNQWYSNFLbURakvJ56ZuazVXut5gXCqHyhVvAyD5eZLnLxZJwQMvGmaDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g1qYWoy7dUygfDBnimBummhMZyBgWEUDQsTX5HdQJoWXBtJjkde4z5ddfFMpU4nUvDJcS6pLpQrishsiFgozpM8",
  "key1": "4depwZpCwkyDzMa5Kw2YBMsF2zuWTsLoy36mi7NUEe27rZZVxyBJvRh97XeqZWH7cn2Ns7wD6vLHaoL2aMamhz4r",
  "key2": "PdaHijVQN3AHtaLDaQ4LRUNNLtnfp25jWzZqLzuK6S9to7ZfY6mE7R7JXH3QtCpPr8rnKx3Vmn5mFrg56BvPoBf",
  "key3": "3LL1igtJXLKChTqFohctewVVEju6TBjiw8WVUxtcDFgdNPdiaz9W19ZnxWknDkBBLtaLaSyQdT9EPnydC4PbSv6Q",
  "key4": "38MHxsg3LrPvzR71fdwr6MvoPteCnTz2DN5wHXmEEDe5mMxmwsprrBxUjejX6dUB3W8S2hArQzqtZ8892nnEqMps",
  "key5": "2N2S7Xx1u8LsvwK2xK4nkdedwK9XG6nX2FTR4VGmrYeb47QPRJTC5szwWMvznrh4k69aejXcJzte1Mm7hP2qSgn",
  "key6": "3xFzGVYnQokQ3v2fasNcTrV3Wiy2aGiLuffu159cKwRWDMhGrHGjJ1sx6YqBBfxJu6HGnqeoqDREJp8XK8oRi7fs",
  "key7": "2ECfu3h7iKTnFFYpEFideRfUTSGgoNNukxgpXRm4T8Tv8AWSafFVE2dopEMWcDpBfzfuhFJEnm6PSbpEqUayMHgp",
  "key8": "4FNyC2gbM7g682qHU4Cyd1GgpxgiCb4UsWYWpVNyyyTQgVnoypTa6grWwdJKTRZX1pQGDgSgQ931wsYk4pxUq5FU",
  "key9": "2yX8GbnMMuVLYSsWMrMZ3qQDRTbXtvy9gvtyeEK6qrJFxtYj4QALzos22pTwSUxzGKpJpH93QGkjtdPJdKaGg6cB",
  "key10": "26djTZ3zrLeCThUznq1be9SnKcSWiNjayHFntaZmkfaXX9SfLDa6WYx3nKYEL2Tdg3W6upWcZmm2xbDcsBBfEaeN",
  "key11": "6462stCyUnpV6EgNvCqetRWvr25S9hgkeQvR6CNXSy9PvhbqhnZMvBkeP8iZEmHx7UwBP1twCWX1tmhwxXxubc5m",
  "key12": "5W93JAhxKYNPpwyCDAEtQTspHqEPG5A5AEcBEdAup4WfwfnPQdkRGaJcNSA619Rrm44LZCmZLzSnaiHmPGJk4kav",
  "key13": "2adfeQJoekKR1vsUcnucebYT4QL8KGq67xxHPZkAVXYfjBFFQSo9H2PgdxZDG6pt1d4SsrvJUo8CXaSGS7g9wWoj",
  "key14": "2DMsLSQoxEW36Db3Ti4oEnt1tGdp42MwgvtuQR6uJytrydQoryDRpp4UjdDhgtjLfN2ZNtyAhHWpaY7whyQ7GSuu",
  "key15": "dkVZcuKCXukSmUVhPKEbmgdgFmsUHrzHhsDAH1iJhZmREQJXhnbG68Zg3JFJuQJMMyKGo8FkCz2YRmnZZfwHBkt",
  "key16": "3jKd5a1Rj3nN3mCYep31jRqhgqZM8177GjQ83BCXW5VjQ7SQxdwtbe5E2n16m7XcgEJmRqojjyqVh5cpzb67Nuxg",
  "key17": "4MAXPzPnNkdeHwyKAXvkQsgKCQjLeRjXSypmq7aN587yi76XpXg8vbYNC7b4wyfUmYCSXS3C1C8hBRYRaJwne7vz",
  "key18": "QCogkviSDExyyTDQDL7owh7MAriKH3QYS4trBaM7xG7zdmLKRwLEy2S8MPrTK1iWs1xAS5MAbjisx8C5dPPgzFT",
  "key19": "3vhppVdSxXKXVU4SPihBkpkBz5oDffc8KkuYaRxiBBsn33zVAMBZmdtqu7MFQiNNWCcPSVGqHt1SAcdSGdZYUwFe",
  "key20": "WWjXbcgMVQhc1AMR1CQQH5vrMcb4HZ4rfxDexphUmxPzq8MKhdZUGwWHZS8gDmQAc5xwr6ChpkiG92FokVmz5G2",
  "key21": "3oWL14UUxW6rtyhsbYStRZvELNofN3k7G1EQ81GfgmNvTYeoHya2MoQEh1UMbpUGNbmJsbsRkdikYdNwVUreyXtQ",
  "key22": "2HxrGJsWdjZzYBYrhAzwiuMbVCJPNaoqfNVAjnFFwzbTHRVEXKsC3rWKiWoZo3KkQ53Vgkm41ixa2jUa8TqbCKE6",
  "key23": "2KLSRm9EQerNenXW1n7ZBw62Q6uJibNJ6BNo4uK8dyZtLr9hcH73ZUKok2F3wVwevzwuDubsS9xb31uZ5kfVr87y",
  "key24": "5UFDH496jzbHZ1MHTSCKTuqGzU7F3FXEGAH9hbDgwTij8YjmiXtuMPkvgz8HvhmWiZ3AXBWsjR329tn8V69z6Ypw",
  "key25": "28Qsxh9H5A8sK1QfqyfjgsPJNUt32nxrE2LJ7B4mozj3PY5q2f1eT75fuqXE2ZuBBH46mkSFC7TRdvyVJYDsDaGU",
  "key26": "5bNocjVBMRcWJJ7Ekiq833R1QP5HWn6QaZF1Vf4nc255EmvMPKJ7Jd4tkV1jKqMz61miqL7JnQCJUzgiK6iDRJPt",
  "key27": "aZBUW9awCfYQ2MNrAFNuMxReNtm4XUXsoShexo6bP1BTkGpwPMwpQLwQJa5B1oEr3tCo7zrwS74PZz5TiRVmN1z",
  "key28": "64MUJRamr3f179RgAdUHebu6U4bJTit1c1kgWgHPP9h4K613ULPR7iC9PmGCBxUyWWatZghHajMEBsktryWEy2dP",
  "key29": "2iJKYSUWurEmxkprKzkdRwPf3nHHdXHjsBsEhhwCaEcR5MjrG7Ao69pAsy2qhWD5rn7VEerqZGGNkuzrekcYBPtG",
  "key30": "oZ19k6ELoypRwP6c2CGGtsKAYr8vhsbZ2wjm2JwGAhnyJ78Gn6TJKEjThHC3Sq6RfQUqRsgp6vx6BFG3xv2Zkhu",
  "key31": "5SL8VE8NKBax8koj1VkT1eAHRDxBVCJzJi1pqqR9NDAugvDDYQHSwvX8JY7dUumE8davE3Eq53oDwdAvHxHExtjG",
  "key32": "3obrivwUcUyryaqGRcctqpwvZr2SxnaE4hSBd7EFrmaAvhUm6TH7V5RZ4kMKUu9dbLgSc4ibAmggZbGRhEDYZ1ar",
  "key33": "3YRkMdZgut3wrWZKHgQ6gJv1CNVvtNR4W6UKAcXhG1RyjmVbDqY4GPgC2d7Y9itFbwEKBBWNxaCvfzivhf4yUnN4",
  "key34": "q8XwSZQ2y6v5erE5kbhM9V7TCc1QFCuSLo735pjMHzFv9cdaXXzA74NXpiQytjiH9RYAPBicjvdzsUKuiS6Dmz9",
  "key35": "3YXa1RBQHDc5ZjdbvYS8HoEaf6prmYm6qweitCcWiKqwrcqFkZ2TLSdcYP15PB7a59EJS2VaNFQy3rNjTeG9Mx3n",
  "key36": "3kU2s3J8PXvPyVm7mHnTyjd4iMBGrD7MLxumqLet4VSrjBFeWZHBbZw6gXVmAa86Uf8vnptRG4qibApWb4jaad2Z",
  "key37": "neFQcQMroAr83y2Rxzu4MiLNvtAQqGW5bidHDKpVwCaKfeuNUSGLY88JEVfTBaS1bsfrHNFiAW3611MaPxCnt8C",
  "key38": "2LLqEawiXkMhr5EimeokZ1k7vHAZArBQ4W9PBAfLjC7uvTZWHmJGEmVtAqZRErKzZf99uTiKVBP4c93hDmqTuzmF"
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
