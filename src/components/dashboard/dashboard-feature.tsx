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
    "Dn5StbCUmPDRK5dZCWtNEfHMCQmWMmNrjY17ad47fnxifotuRec6dGieeeA7AdPVNqfHM1dFZhy6mgQBohduevP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vruKB2GfC6s1A5hSyt2hdPmZu3sdMpcTEa8PUHqFZKzaWYmHE3X4U5YUHkvhZNUGqH74xHCeE6gefHW2Vg2kpjK",
  "key1": "4Q27s5FzuuBLwnUu6z9YWi3opR6mpKaANTzqcouGwmfvEDzNc5GkuTd8R6DQHW4VLnyXH9YGaQ5fKXyY2pbRD3sM",
  "key2": "5ymveLcUrDYLRErcN85D23anSTzUodjxstSmkQx8jZeC3GXpw8X3nGZDKKkF97CVop1yE8FFK5kHXxpZHkhbxYQY",
  "key3": "4GL6iSWnNDTe5opFfpTFP9KadzgiZ78oBB7J2Zca7s5BrWcqe2JL3aQKnx4EQhB6fy6zRQRtMrHRfu7asxAo4ATj",
  "key4": "5F27TEbJaauAuNJXRLFtNMaDnEb96kSTnNfQ73rwFRJCsSivyse6wMwEtsemyAU1PmyFJvL3uZv9GsqByX1qmLmo",
  "key5": "3c1om8RHkC49tYSzx391vKJ6skCvdiB5hYDdGVnZnfkAdxsehLTWCH181Q5SThb4BGMsCWwoAy9JxnFJk6vHSY5e",
  "key6": "2gvoJaDRXHCXjxqpPWpvbAq8iKafXBiZeFF6eUuYkxJARZaWTTCA7xytZzzJE8cUjaqUsgeoaD3gzUKLBLp33ifP",
  "key7": "4CBjsVB6GgUxYJStKnzH86JHzWbkGPCWw1kcXwvqYZ373B6vPVoSAD6bgpwYVH4HSL9k5E5U6DFU1RJk5dXroTtm",
  "key8": "WNXLCcTTpnC8BAbM6m5sEv4keCsvHrdHh7gB33j5GNrSbonB3t1kaiiLZnMCgZkxWUBT2YuzQZntgaqnmQfZ19A",
  "key9": "2bn8iUF2qoTf6nHocBaY9XVHNt4e19tFUQSG3HjeozGQTVdjj4FsqDHP11BXdC7m3iUeAXuJ347n8V88jrfPvjAy",
  "key10": "4JFjHaGtVG4Gm9KGbTio4zgE6qvHeqKFbUaKL1VoKQf1vJqAtVUco1u8viWkPw7MEHmWMswt14bVE2BkyzAUbGq6",
  "key11": "2v5nAoiwfJ8RpffPa4PnC36dcY6DpBjVFubg2HHgYK5aE5nrLkf8xrbdnwZsEmYHkWfKsDGJjU4umorGAydhVFX6",
  "key12": "4abhkfeBNtzW8poLpZjTDYCa5nvgd18LcVQYh3aJDkBAQHxdoXUDSdEEu63p4gwtb3VbLY48YnJGzBBkxWdK4axt",
  "key13": "1BHjfzCEubF2fLmsh9SxUdBNLVtr8125adpkM9hyY9xYFFosA7728nFLqD3TcnmVpspsnbpKDNegr44f1ePYnPf",
  "key14": "42geq37UMjZsiVvPdnAXYvf93bH52QumkV43BwQocMJCVW8cAMbyYJaQwpnnuNJ4r9XeEyRVHdKUBnUDb5kR7Bvd",
  "key15": "3RNa745H7aTVYetiJfH1cefYwaJCbxjQytfePav61aJRCVP6Wp9kMmHsdET1W4uAdME8cnsEZkzQ8mh1f5zWEN5n",
  "key16": "2rkk7UHc3HkFmAJq7M4vBVYVQejh3mWg4WomhuRhvaCDLKY5pnmGA3CygEBLYYX4BpBfRUTEG3yWLB3ijWbXCseB",
  "key17": "ZXZCoF9EbxM4487Aswf1QrppdRUzVnBqmnj5Xnw1Du95SmCfnYvevT1mYLn487VFNt9D3dA5jaeS55vZuSPh4Ys",
  "key18": "56g6vaSdJSeJWg2KSsn4daCZvswYLMyB4cewqm7yffi65sgSjbj8ksdSeJSqAe8CwjC1WFnHWYfTbLihB8uaeae3",
  "key19": "3YNZtJFS8iH8f3ncxQgkrzhzuXfy9SJezVTnqKtT1MS2Csupy6dizb9Y1eHAkc1Yr4Jxut6UoTwsBJ6bRpnzZtua",
  "key20": "5px7uVGYtdPAGZkyxjVqYj4mEo6wBEsfPXWkqG9tqvvvgvhSWjBdrNx6WzChoqxye5wtLGU6Nv5eZhfUwC1kjE45",
  "key21": "37kGrqzDWR4DYRBLYcHP2fsYG3hwdjjGg9gB62iCb1cg6NrV7Xw1iD5wHqiYKeWrz8XrjLHyT6TMj2rej2zU2sQY",
  "key22": "MuguEgUWnZQiDazKyFvJYqWaECwhEJxYsJqAQEzN7ZnccR8RQ69aX1pv2rmrsfQmx2VDDKuiNabZz4osRrAiMF8",
  "key23": "5JitQM19PYoBuzGQPV9hGrYabgQYWqswKWPWvAYa926UmCgNcaeVcchJbfqCo43H62d35H7BzjumZB4ojUQsQiyn",
  "key24": "5AqEjDM2pq9AAK1NoVs2a6mLE4LgUbxWnuXy6bocRsEmxTgQHiRijNrHYY1NqVQBjtov1h8rvVNin7zH4cLN26wD",
  "key25": "mfFFSXZTdsLzH6x3Gzog8koLxtV61TTERxJAgFg1Jhu4h3P2Kxwq733AoqcZxUuEz5nJp495PwjEtx9rtHrEVVN",
  "key26": "4iqJegry4pC1r2n46xiJjsnwxqcTJ7o8ZvBKB3Vepgdfpg8UVPPpYSFR1NW3Vo94TXMUWHGkmiTbLUNEMMcpAQyX",
  "key27": "42Z29JXBJfCHEqqKuRmcW4zqm2eCx7MDpFukE8zSXR7EMumqds9n1XGJcesfzGrMSHCKJ5ZUKfRKfg4NG6mebfCQ",
  "key28": "2SXRjNVJaxQoEumJVicftKGzCKvAG7beeHxpqsEKaV8VvCY8wZzWoYaqLyLxAy3yAwyPZvEBiPyTE5ui1FknuimV",
  "key29": "49rtKATfVJqnt6ChpGS2jLk1AHSdJmGzkFuxs2DrvvpJPamJgfwvWWCZNPzKT2SftThjywNSFrFAjoAn7RdtJkia",
  "key30": "AvGBJ8fjpXp33PzJYHbgCEPQxxy7W4jFK66CryjsxwEHdixJKw9CjehhqPEV8Tbs7VRyAQ691WsUuo7xsETua1A",
  "key31": "4C2mJ5vYbYiH9j9u3fUAwi94ar6A44KPmpQ1DyYuZbCgCh169wPmdWaLvdHJKkMyyvF5widEmfczhCpuzvJbqkYt",
  "key32": "4m38mVpZhaKFZ28u2ySXxU9L8P1d8zcAQRHPqaEX6Gboy6Libjmrjfa43S8P95QtEHhGoLGGicU3Y2KVfsTzLyD3",
  "key33": "2xrRvqDZw3ULbrDbdqjhX7aSS3ngAbQ9nbtPi4BU3bHYWC7yYcraRtGjd6Z5vUH5Z2pDAJHiaChFL77j8xma6wJg",
  "key34": "3nazj2k14S3UMFNKaXEYgxo176YjonkkGmmyU1YXmReDmy67NWPtk761JEwhA2T6Xghs5BHiBmFo7MJgAhaZauDs",
  "key35": "5ucUrt6vTksXrx1chz8p9NXEwyWXSMdBFdiKqnQA9ChWckzXsC2ChxKt9Eg9UgTTsaFfp8f8eRMQezXVTybDcPho",
  "key36": "3Y2nnoE3upnveFwip6HysaZXkKrozkY6ymJ1EmiPbJtiYKriZDzi87oce2ttFbNzivWykUBzC89cQe51PDPzwFf4",
  "key37": "3h5jv3NQrjPq9iMPEDPpa9S88nGduu3WPsWAUS2s2sg9Q6FMn1wSaazEpYzSNYVs5xybUy7YDKyiMt4nbYuXtVAT",
  "key38": "61qkr4dhTdE2VTMyF3pJ6y7rFha7qMRHEQ1zhaJpUaXJJ4zhqP1RSxbvjZxAwjakohbgGEsXsorZJHLnDBMk1fJi",
  "key39": "6R2cPm3odzhx26ADgpCpr6uV3w3DbL9vuyspqPptV9XGDihwCr1wbHko9mMgn4wK4nYuYfRZde4F1Dkfj32rBDe",
  "key40": "36TpKs8trUqNPHprXWX8159DGkVejqVs1WBL86xdvYap4Yfn2EKchV3TF8hPJM3MSaJEsdGXDubqUW69h5ZMRAdF",
  "key41": "5hxqT7VH1ejdEN1GoWbKWwHcbCk7Xf3S8CvfzSBMcqgzgfndfPoA1dLvLSyv6Tn5a4azqHC5rhthptVFxhe6VNST"
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
