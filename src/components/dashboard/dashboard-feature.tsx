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
    "41t3o82QFujSXS6rqh4dTziPPdXnXeDmueiuJi5FtKeEUZ5p9gud6uPgKLAnPJ4H6R2HgNaVcXjGJJ7uSN6qK9Wb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AW3mq6ZqoJMR2yKjn4byezA699NzNVehGhDHZu1mnubyQUetmw7nviQnvqw3UMLJKPU8ms2sFXM9Lpg5dJdUqKT",
  "key1": "3X7vmK84LCkgeaoyRxPstscQjXg5M2CZ17tjVt3gqW9igK5uPT9y6VZdMRDMHFQAgEJTQuGN5x5j5QKRiU5QS3G6",
  "key2": "kNMXv5WJ4aSy7ZxeQiJY4N9yhLPCwKgE6CuyfsS5SPwJzwR6fR4yyZ8CP4cyVBSKDUeCP8C9yZS8z82eaf9cWPZ",
  "key3": "2bFuJgbdEu2F6TWAuPtxgBB4UWfVhE1hxDfvNMzqAFNDtxGP4rAzZcJvCHexv2GUUWpZpz35nFTL8BB13QrpC3XH",
  "key4": "4EPgV4omDHqLTcaKNBtPDWSKVSTCcMZSWCGKCL5JArdPDy8UDrzD5MhCruaMSPcFeWLu74UjqMTiL7JioF1YZPVG",
  "key5": "4172HBZpkv7evnJCMY8UPZ9dVutBG1L6p4NmWWLGqaWa6JhUdM3QGwxnH2XTpMFHGCfjEESuFVr2bcA7T5EMZDm1",
  "key6": "3reum9AdHrXnL8KyYjpSiduqyV5KZ2hjTuUaGTpRcoNoZmGDG9SPgZWgNtoQoaJy3n2AsHLCpoUphzZmnk8Lnn6j",
  "key7": "3RKwPyt3YZ4vB8HgbpFP1cKxq49ZYM1UcC4bh2vqkztvH7zPej86bABLVD8DK9Jwpnfe1oK4Cc59TYeHArahwXKy",
  "key8": "3ncc3MgvY5Smmwsa8YnSQkZaVUkk3tXQmBxgz4SXHSHc9AM1P1fnLKE4H5gHTb4AErAUGzSMTuf5vjsWAeFN6ZLU",
  "key9": "gHKgwgEYEE9kzQUMBmy4ZV5H9cqS9sSCNrCYAQHPsWx8zWGXgwvhzTgyTaern8ZUS7iEWhAKfNakCKNb7jsGxAX",
  "key10": "4VAf3RPcJ7nTjmH46FALd5SgBLUvCvFqDL9fTGmJGFm4iWST6dajHpxvniZ1ghitsCgTjioHheHjecNm4uuuoJw3",
  "key11": "3w5S14xuVsC15GE15n4isKERZSS6dJVT37xgExbzdDh1cFEBrHPEGnsTRS1V95stAZDNp9ZnpnGDdNDmppecuGHM",
  "key12": "XMp91iZdGtKuwdibLMbEmKGD6LDh5egkCJFzXszCbLgU1gKSBnbC7QYGP9xN3aZ2U7rHChef75Cjb8gqHwGDFv5",
  "key13": "C66fHnybiMwt4JW67fM7DMc56o4QdcfRfeFmHwHzUcc6dZCUpMmQHaZPjxdmqTbM98C54NTcerQDkb4N8V7bB4e",
  "key14": "5QGKPGZoE7DQnpLHVLwZqCKWBubPRuidyD43rvEyCBzAYd6P7Tz7XmB5qpK1waQmHWVhSqYwDswfXxeTvkKL2xvV",
  "key15": "2x1BcbEoKa1pNPs8r8FXC3ifswepjoTwwQt3qn7yzVya3rqxzbrosYgWWxfbEg3oVdQnti6PxfcNCXGTzGtzv8D9",
  "key16": "559DLWorzfw1FQ7uGnQVkviSc9B3grWQTzSbCGp2xbSSsnaB4eC8KHmNvTCagB9xNc1E44rm5CfxvLaahMjd9w2n",
  "key17": "4R7WpvUjWxp9aaMQjKrMUcDBzGzXGf5eA3vXaomfhDabMK2KWXsAJiLXyLHJC1vCmK5u1RZ8ETuWayzXHuFYENah",
  "key18": "5A5fbmk1TcCTVt7wsqPVxUg4KE2EQSnXjpfG3aMDLJi9aFobiTWf9y62qRGg5GQgMz6QZeQoE17RMLSrJ55KTZjR",
  "key19": "2AqDphFbMoK7JQ15udTEFEcbnnVbdXo3KxeCygepoHKwcfXJ9e3Ja4zPRDoJhBdH1Gicz6No8otjVF3CuBnj9WFz",
  "key20": "ATJJutmU4NtW1JspUBr3UneXo4HBEJwN93xjEBLTdosgfZBEcgrVudhFYyRJc2S4Xenv3bXH7JH2es2Sb62WFVU",
  "key21": "p6B4UtfoqnJSqP3TH6RdDjNXLfdkZZDfbYrRjGxoySdspno8pshZXW6bYeevdrCXBS1HZs6XgCuTtwaZjVx7U2n",
  "key22": "2awK9VGxVRaRfgNApKqvuAn2Rq5oHdQ9TwXc2sBnbrD6S3y3PQEcZH1ou6fyszY6SWpC76aawvsDqbhNihnYoMKv",
  "key23": "2n3obZ4PyLwLM5m1T9jyroreWNdMrchjFP2HD6mLrkuCxRv9N7KfeRnQrjAB9mp9865FzqfPGzfkHx2eF9CQUyRK",
  "key24": "g8uqAu4fknqmHB9VznMHdpBV7AKc6PxDedaWGGgiqDdGRS6L8xnBuNd8UK4VvsmtjP8R6aQRywf4PF871GVYpHZ",
  "key25": "2hmBEeVqXxRAjeyN1KYcHQk7onHbJGQ7fsEuN7wJ51beKNgEUJzYu7qbyNGByjU3qHrp1Z8ESxgs98bsB7sfSZLR",
  "key26": "4dAEK3UMqC9SfMHDoMfyq8b3NeHGbuBCMM6xfssNxgHTuZvsnzLmR896uvQFJ2uYh9BSDUEKPJoCVRs35LvvU2SZ",
  "key27": "3HbS8ZgwNNEbvAZ6pkwmVu1ZQY6iEytcTEiA2DBMGc1P3sx8wAXtVrCbp888AqAbqSrLnbvDzchM25VpJiKtNdrw",
  "key28": "2DhmdJ9GYspdND4Lwv9wo4ArZiVQf8E3rddytPz5SH18rRczCwPvfgtT8vmmXWMhRyUquYxCu4dhkzBPSQPC38jL",
  "key29": "QZ98cknqug6xUp2NDHoFRmhm659QMA16z6iEM5R4Pg88DxX6JrW9kTkFS9t8RuaYCWcmH4wCmGcLnipy3gzcpgD",
  "key30": "2Tp2jpE29z1whkqNEAAr587mW2kLGPdQjWmqQa9cEn5KbbTLws5K9mtmhBkTZMYnVXntn6jb4EUVgBfufp1x8hUd",
  "key31": "2AJEac5woXCDqJsRC5vXHEnsW3qNkwFscATZoMgjP1KpN5HGWYG637YyxUUPWgG5P72juzWSgUXgghoooob56Co3",
  "key32": "SgyJz1rGyHb2F67266WRzNs2Q41YDeXhBreA33my5rQJTzA1TTV4W3gz9qgN4jMAGnKts2EiyYQoNp3FwcvhCwv",
  "key33": "2z4rncpnKqjuFk7J1U6LFe554VA23eL7PX3MPyPbKq1PzqQHyzBjNdgMyx7YGc7n1on7bh8Pmso1zVMbiWX6SQqE",
  "key34": "3qgjcnaHYQ9yWn5V31uqx142o9SKLzEKRgWSRCv7d2dzvmSRdk8gQv5qJHdYxnmyiorf7WbFRyu6ynYcLRNmFFsT",
  "key35": "27FE2zrNv1R6GjUyaki2ntuBhDEdyoEEjTkXqFhFTEvbVdtLQ2JRPmY2sum3WNQzM5Sanz1XpPKiL4or2PfGt6A1",
  "key36": "4DsvTMHcqExznBupdZvCCiJtGrdyPHrCCp7ohXDt5opQWQFycsPKY9hL3j4yN695FFr4wk74uC7bpj8gHWZL9FWM",
  "key37": "4KBHX7MdS4DgiiYMze47Tho8z1NNz8m8K6HyVvx2CM7TxYpJ4Rj4VPL4bpqosft21ZxV8y1dNp9UnaBFhnW7Wbuh",
  "key38": "4MmJakuFiZqoxh5izWBZ8nGtzNXf8K3U9bBkSweZWJw3yUeSTwpfSveis6qXcjN9g16Hd8yhVe75jDfchap8faCV",
  "key39": "2iMvoWhUoVsgFJokCrrz24yWgtT8XnGWwdytQ2FszTHb1GZkgbF6RmEJCrNhx3mWCQ5Wkn3TGKytZA2fK2c1Kgd6",
  "key40": "NaUXusNyCUqAFYV2kPCYD7yX9q91Veu4q8cQEe1ER4znrgnpdHS2NcjaxjJGpbCQkBKgspoCh4rAVoTpdoUHiST",
  "key41": "3t9SfUxjF3b4iFH4UM3dTG1i5rEwLdmDg9gwPy4uBVUyP4v1Fh3876uacSSVwRGHLVmNez3o5Fq4JL7RrXu4YBJL",
  "key42": "uBty35HnBSRGjtuyyqtyxeRd5gyD9j58UgWbwaQEbLVLcBLYBkazWLj9sEU9bd59yCtbs46ooYtjomgfZS54AKJ",
  "key43": "2eNkGGsJ478NfDKh1TKZEhUoPzu9Cndcc4s7f8GXcTW2pJdiTxMoivnWZCB9ecX4FD9RvFgZFGPws7qMyCKznmsW",
  "key44": "4RZaG4GRfxue39jvDFNsenDjyXfrNv9sBYP76ndYkNu8LqkFkWV4X72gMDFYuvADsRS8foZRMxG29KaTppYvmmhK",
  "key45": "2yEj9ypvKnHF4jWWiQfuoNHK6iWaMKM6msmye1xoPBTWe8wcE5Pr2p2vM3V5rV8DHXMmbhSxN1q3mN5ZHvZbBFn9",
  "key46": "53a1V6NCeeyhV6LiHvFWNqPrsoGK9xno8r4aS4X5Qk1MZb5V3spJkEJ9HtVpxd8cgeHbjXWrtibuRWA4jSvtLgi2",
  "key47": "2vW5V4q4U5BW1wGeARS7H9iDzYRtypMKCAB6v8GjiyMCxXpFwsybnp4uvrxBumwb8tZpUM6HoE9ye2iQFFds19ZW"
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
