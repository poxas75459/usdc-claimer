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
    "5VVtEHiZ1JFLNUjsPj6D1Z3UD2DReEejoQYCg9YbmDzSep9kyaa75u9QVLGkF7P6g8eo4D5rqusSR4a7b5ZrpDNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kMmUeVCQmNNp7GNyXiC4nXm2RwB9KUX7P7HXCDMcLFvKTTGVyQU8G3g2U5MWATQuiBrQKpc5yQEQeSqLNH7exvv",
  "key1": "3nke1LVUFMfmp8BDjWsMQeKhtuRi49wmowSipcJ8hPYXydxfhc2WHewVtDKzb4wvFxwvnLvpvGpD1FbSfyrVmUb4",
  "key2": "9rYjkmHm259RkjmjJFk2oZ7qeKVa85P71HnxwTHtA8ur5o3Zs8VwQRfgC6s6uFEGB4eyZEr36pYU8MPtKA5d6m9",
  "key3": "56bpbMHWCN3TKrPW2DtWeovX2WYGZ3R43AKLDV7cJ1zJQFGxGjH6WFTkMuw1cCsakJ36eZtzDoKbT3AatBcFQkKu",
  "key4": "2giDZLWyk1NHFG3ZA8twH54EyCwuwES1MLacc8JyRXVAE7mMSwW5rp3fEjRhxU9p4Ntyp6KQkKA2TPmgFqxuUmK2",
  "key5": "687vvajbBVBrMU5VnkqAq5yeDVdihZbr4ZqDq3s6NNJWdCXJ1rMYcoDuSrE9cfVU6x6V8YhASBv7gfZ55CtEiD5",
  "key6": "5t4xrqostGYciaDAWSaEUD31vzNcEgrgv9Aw2pn2onJ4BURjhG8wk7EuG5RcAULcHxUigm2bbkCHgocaDhkEmY3N",
  "key7": "2edXB5TDmq1C2rN95FyZetdkFpK1hnyuN7hjNy3eYnSbZhdRqgw35VGmC183mQQAtAdRZFXrsoG2LzPrZ51WbvE8",
  "key8": "524AyG5stNqfYSe4SkEvrEK7auHbwwDfSoKcqcNBaeBA4AQGbpa6JBToTT5XbskC9wQ2aDpFLjYJAwsXhDCzDVba",
  "key9": "HXCKqSPr8a6fYTTKP1icg2ksmZpaeRm12tcLRF25LqZ2PKsQVrjAMSN2SDYVWhLb1xdfxzApzZjbHzjMYfeNT9z",
  "key10": "3KUijsaEBumnXdzcm1bkdTtbth6tBitEFr2oRcfBqQ5zcbehWAediJFBGNRpRXdpPxfAG4wgU9RDRNwSEBDgj5PK",
  "key11": "4xZ9nYLiXBG1jf9BiiRyGtoa6G7eZSFwUdf1KYPbAhad7daXVLWrQmo7PpxfMSvZgAifTRyeGA2NLAtUd249RcG1",
  "key12": "9EUBRkxkHWNpy6ydcQk9QSXqzsVEb9QTrbPz8kUH7RM479MWoY6fe25dTu2DFBev3WKm78sGkNYLRkfANnrvYZh",
  "key13": "67ZwmD47zvsYNKRXuf143xXWyanL7mnhmxgjonjMfpUnvJ8FqGnBwjCFvKtfL7iajs3h9ToNozaCb8uPZo4m1Lnq",
  "key14": "4s5Hq4m3eKEwhaWdBEWWnVSmLYz8hN9rCyjr8pDH3YjG9gqS8omN83LVedPaxr2r5iQUv37gMmZZbDv57FKL26BD",
  "key15": "2GiUdFu9GcaRMeD2Qc14k4UKGdQdeK7BGxXB5ng1gbKZUfdMENUrAxMFM48PifBArVHdveWPWtTJTvfR218GAJeR",
  "key16": "2y7CxTT2nRX1GTdtJCSJqrxNBvX1jcVE67H9FXGrjZ14dAuthDc2enB9zfrGL5bZkdNsj15eEA2wrmZW878nq7Tv",
  "key17": "3Bs4A8sQR141Tu2USrqhk5K5RLFo3qFi6AY8yvmMXYmBn7PgA3NJWJwfPp1RaQBXiPLJE4kK7LHbe7VzDHdxqnmK",
  "key18": "5iY8UPgt6rbbE4eyTV6WVDe8wXD8PBFxzvqknn7RZgwVhYXEJKV63JRXG8ZEL9rYZtVSudFrZuzj1iuJcafrY199",
  "key19": "dfhRkec1FeEdEdqM2FghYqgKBaQY4EqXEX5uZDZvPM1qeiDu63EtPVmk16aZdP7HaEf2JvAx1C6c3HGQXMZZdLZ",
  "key20": "3vsUWnXmu9oGoGvuwXwE735ho8czWsMy2MD5jE1kF9uZdj2CmhgxhoZskc5WfL6Z3F5jLq8A3jpSFJVx2gyenjMY",
  "key21": "5RuSYyRmggz5fGe7xkWQJGGYpKPT1R7VydZSgzrWhyJg7VgfbqY9r1ahH66GACGfLdf8yPrbzXwMDJzJE8Xhh2tq",
  "key22": "5WPM7NtErnfXvspN8pJxuszfzyAov9zj3jDChkZ9uGraRv4VM3id326ZxEx9G4Q5mRqKE9PgN29HRMDvLMq9kvEt",
  "key23": "ryVdSQrXgEhe7s4fVKCSkAX2WEa6xBKgUcwc8SaBtQwhSi5XZufhVRnairWeaogR3xoyBZq9xUizt8bzDbckck7",
  "key24": "5KPBGi6ja47ydyX3Re7SsQ1HnzTjkUvkpfAB1xrZj91tVq3v9MbfKsH2gEacEiVHc5eHNc6ei2rhzBd6stPV5xhz",
  "key25": "3D5vQMerZjdrg3CkjkQwr131bjbRsCg79ccg6YZ8ehUmJB8qPKQgv3uGYQLb97FxxvEVoz8a5AUKnpsQAYcZmvcy",
  "key26": "5k3EnCeGFvH7XhFP1tZQX8GvXDCeFfBUNK4G6k8yUbqYtC6mp8hKuN2f34emhUgNJaDjLQMA1SZUTmTQqgrBfV3P",
  "key27": "3M2FwmAaJ6ewkaWb3CEPg1URQ9F7vTXkGAwjQU5aAGUeuT3qbm28Gk8ygTdpXVAZa8STFyuSigAumsBF8mFRv56V",
  "key28": "4jXfvSFazr8hpbzjdajhmvffyPCrTqHAou8mcie5ZrQpJgKc1dceUCBpt8TVX9wMDTFUpR8MMWamrxZLamKV6CJe",
  "key29": "5eBu7Qf97uimFFVPMTmCp7E9VFXRLgEoNuCwm8wuX8RqFBFgbYagAgTEfzCof7jjfkYs2UqyWuoaTMehcwLccWjR",
  "key30": "5jG6d4q7d4iR13AJYpB4K8UtZgrSL1LKk7de8YCYa5o3rBbiYy2NqcTMaBW8Z7A5AfAg6p7KAwgD4MwncP2zK6sp",
  "key31": "nDPWyPMq4fj8VHVGwXiQ6dhuhdMVqrsWRcjHciUpxatFvMsuF6SeWkZWLb9su5ZCMbcu1Bsikw178m9dneQnUwY",
  "key32": "3QYS3kBror9ZnHMYV4cEwys7BNLmo9YT8C4s9zzfog35HtALEJ3Z2xeEZ44FJ7Q9B9vvSDQT3jUQocuyMcQgchmu",
  "key33": "4uCP9dPAHaTMmXfevHyYRTZthXEbzuNVKXBXJihZ5BADSnu6tuhRGNoX1M449Aib6tm7c4bmegzXvBQYMU5ZqFFE",
  "key34": "2qT2mNgkFV5YrYiexoPBDMWSdPqN3WK52YQP3m7fh4gBwngp3MMyQEjwEQG9Cjes7ZmhoHdmw59ofGDc7RCHRdEt",
  "key35": "sn5iEjthtwqUrLBz793FwjpC5ncBuT9fwfyawGwk3njV9h18yoGjZttpfdEAtjNr1V5etEDqNCnb1wJnB6qNa77",
  "key36": "2tDUcsGPZJu6o6cspGyKfCdZA35e3MR8YjqM3TTrePSArVH3bk8vYCoeEYAkpLs4QMNJVYBbnbsry9zr3UiwstAz",
  "key37": "4qJyKLiyJC28YBkST4BFqPbQgz1bsD7RCxwPpRpV4HjVHDusaHQh7YigLxBUw2ZrdYBEdMrrYL7BCxqTi6Pq4iG1",
  "key38": "2sR2mTsWJ9YTKRyYQB6zU4zCyN7FrjV6TnVoZ1NHfBQugvLUcnYEG3ffhDTRBhKMcvRajX5HWM3Wic38Po9xE1wb",
  "key39": "2NAgwuUc1RscLHJWGnPvCqeHBha8CzMzX7CMXm2ibSrofssRcJCQrnwgk3FSg5zvGngefRCKaep9P4yFbpx2b1k5",
  "key40": "3DmLjpu8pAbBkmAAqFJZhuALnKyA6D1KPaPmGbwB89FZH2noUy2SrRnaSeqY5Xdgyj9GHqZqpoi6SxMHbYgf3CF5",
  "key41": "4Lg2sgRH8yTUDafsUMuy4GzteTB9BhTPUvufoKvqmTqg2Q2pZRAne4HsyL6Pfm2cgcXiBzVtyhurUJ7gb56zW3rp",
  "key42": "4R16PPAFf4Piue2CuuT9B3NhfkPxUS4H316ANRRtubojkH9cviBzTQzRwHE4eR8psXSEsEMvx2A9w7qhpUJq7jx8",
  "key43": "4sern63SWfagjR8zzZP31Ts2ZVNbo32mdUiCtr8h2mXjEnc7p9nxaV2qznQTfX73ic9S2xGupHHQDKwzKV5L1j8D",
  "key44": "2QUUqdEFqeszgeHBRD8JZWaV4VsgxYiaVX7UT3EAmMcKFGuLyhM2L6SFGbBoz2sHJhRQbVb5J9M6aUY6d5aRFyQc",
  "key45": "5B93uK8N2jMvwM28SnKeH3NR5ywgd1FJbryv1bNhDzX5TMiWXNRXMx9p1SoxXnW5TiHELPVxHPvMsz85axpmvWvL",
  "key46": "3wMuXxGizMb3GJSJnaSdgAUpakoizUHobfwNBToA4TYiJTN5hpmE6BmVCsW6W8v6qZ3WuC9zTSvkQgK2eJAYmoDc"
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
