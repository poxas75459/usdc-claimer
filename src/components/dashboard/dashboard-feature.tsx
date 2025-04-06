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
    "2ji6bCfxU3K2VKoiWb6wmQ9vZFevjobE6YNcp8H3uLrRYypRG3RsQDwD6GXVMUEMZNDwwUy3ctWD2cHXTghqPQdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V5vaESFKmZxbaV1gq7nEzwcE5riATcNgJksFPX1HqnPLgq7HDXNSh3roF53HepeVC3m463obJ9CXxDiKNz24S4F",
  "key1": "4GAgDPAm9UpADAEG3XEtYqJj9G91fBYj6bmgRDnQE3sm6ULxK3zo97zhF62CczW77LeLps34U1qbk2SY7nBiagQM",
  "key2": "3aS9VU4PRVhfVjGtJcjFGfjJWiJtogJHRXEPQszhc2kWWSSur1P1MX4Urp4DJh24gnn2icjx2G2R4zGZ3L5Hr63q",
  "key3": "592deJLY7ijQaL5oqye2rcRCLEesjN6oHXwwKFC1efNSm8JCfEd9B4nQW1mW6VtSo1FeVMkVBrHreP9gK99tjbf5",
  "key4": "1zarYamZ2XxfF2aekduMbRw1AaMyoUo66CKzfPDNY9eVSXZAz7fdNi9pVYEkTLzaB4mhTc5kegrRYZ3hu7RdVPw",
  "key5": "5TuxjYPvfrFeU8utmXoFEevDJK1ZxZmyeExHkw7nXanUzAJrawrRhENyiRB5Gz3Zffengxv54ZVWMUg15hDPfoYe",
  "key6": "5aoMTBThV6P2Li7HKZcr3xKMWaiuxjNxJxAw4GfyxgB9fcA7GvCFuie7oGzk6HHtU76P4rU8BQYwekLPaijGEuHz",
  "key7": "ZK2S2hBgQ4HzkrkJpSozUACQhgwj3JbBy4QhVBZ4DN6cNn39KTieWXWGCbPRwAif7Vw3aEJ1FTv8DntYTKNq4Qw",
  "key8": "KS7hMju1ytXmb218D2miLJD6VLjTdADPJkZyxz8k9YLoPTHR3B74bXKd9tTqc49xutT5qKkoJQ9ZYgFYsTQsny8",
  "key9": "4gw63LSy2KNo6dAY7jE7bwJZSpqceA3Ugin6qB5UvZeqNwten9pbfKA9CBHFqPMbASXHbSu8J88eMudeepePVdnr",
  "key10": "65wUfxcQza3ScbY94f2NXCc8WfzdfmLb4cHc4arxq8k6TrYtWTTChZrVkDwm2eCD3p3WxFor4SmxZAu8J5Evzqa9",
  "key11": "4UTozAfoUxNqN4yre19aZnNESZGCJA8A8J1ohVmm8xzHysJGxFFBse7F3BjALfyi96tJniwNi27NozafH6ML3MiL",
  "key12": "DRHwLn8SS4JT9VLT72sijJMe8r1SCzn72Bj7YxAGJqniTrScDC3GE4voVJ9rWRpmGEg6xtxg5xa9ggYjEqfyEdD",
  "key13": "4deFH4JBgC7s5r4mHjpZDgEYynSVQzjqGBsqxzWuPLsVrxZ7hiAHG76vYjTr7zr8wUJn5QbnGjbcXvc63uGGEqAp",
  "key14": "3UHB8gFihJiWikMRavx9vyVBhqRAwA319QQwYbV5L55mQxzZnM3beiZYcnPGUWQhSvUSDkxdD6bXWnL2AZXVbsxZ",
  "key15": "CWqTza64ZfWxduTrTDjxCfPGo9Dt8ND21odXodKTkg2xq2RqUDp77F6yGKcSKd43GQ6Mck3b95rAroqaW7qTUiB",
  "key16": "4y7eEpEsaUjZvTifT9tuVfSMzQLoJAuNJzbEUCjUha1KDTj2Rc4z866kFtM8bWhaZ7AuPAhaUgNE75oogaFzmwiZ",
  "key17": "48N9f62L9KevzdDg6vydWKoyF9kHLc37ZykqyMYzhuW2anytEZXTWGnAcUkTjm6wmtxS4HssCy8wkuQXaiJBShBw",
  "key18": "3m9PpkJGFV8t2nbHDkv4bmrkSow52bwkJypUAK78P4Hz1VT5aue5yGgosADfEhth8dAeZRUGgHstVkVqebxeXLap",
  "key19": "2GeugpKKkeccQMA9cwBEfDgRwVFHiQe6Xzj2fWrLJWLhasQDakVB3WVyfoPGpgqetLkoPzrj6zskNqTZKvB2Xidr",
  "key20": "2cwtPBTNBcEDJ5mzfkBM7uESwDbWssEnLuAQMWM5VSTMNHmgTARTbEwPCCDSY8XKUECPD9WdeSEpNqGUM2RvtMjX",
  "key21": "4LLum45PLW57uPSBjedWW2qcnhqbutxwyTjqJwb1vdDhqeXEAovvwunNkX63ViwxjMHBbinXAHUKMcyE6iXuhkSB",
  "key22": "2suxMKzDGKrDBvdSV2UqJqdbveUt5tLjUgjUBnFCE5NZz5i1ZocyFmFBrNhMSjWJJLgCuR6hB7pA3ngyBZmYp8UZ",
  "key23": "LkBLnN5tyMatpEoKQuvDgvvR14CRhMZUKnehwtxBY1yC4ZU12SunUMTbMn3GkbG7FsQBwK6QdFr1sFvadyynMyP",
  "key24": "3EfN9gU8YYpiGon5iXWQHeXcHgUL8szNqjKzrDeeCqb8ihDMBcQaDktcJYdhh7xsJ392FUTtKwpVfbTh2eLDcKzL",
  "key25": "2pwaKsMGw6XkVqN2gfjGNf8E6fZhEp9yqc5xaDzhMj25BN3ysSfeoGegbnyovXgR18YuHCCCnt2vnXgyb3q2x9ti",
  "key26": "3taYqedcjGTo84P7YuAnw4R3xedb3sRMJ1K4DMjjC9HnhYHuTLfCJXK2wd2d4G3QCXfBevHqYmxuGJHrz27UbfrX",
  "key27": "2cDXBcx34B6JyguUo84P9LcLfSvqwB2h5k5w5oWJXuxT5E29RChrZBTnffLPtSFvjPGKPfvAihR4hvjg4wD1beqr",
  "key28": "2j1fWsH5SRwhyXMdRTyBJUVghtmWPeeze1kEBK3Jsev4U9CNucZ4kEP1vCpYYrU5BKutfWE5BnSBAAyDAMD5kKNz",
  "key29": "23xvRskd4JnDtuCWUi8WBN28kGyAN48iGiqYax9TfAn2ML5QEtL4z1vpBcJuKsBnSib4HNTUvEPtMpX3n2hZyyQa",
  "key30": "58pzy4mmtEridW3Yn75AW7RNRheuhUY68Qyod59Qb39UW43QoiZAHX9xNrxKDLcJimEZyZeLngijxcc9FMo1Ak3h",
  "key31": "4fq6wQFjKVLgxwEtPYeEAhkm1ocrR17zDmboh697ZyeNGMshMiQer9pho4qrFzsHsKCKVSD1NmgTQCuZKwYqJCB8",
  "key32": "NnaJFV9xWRpiEFsqEmWyjiv68jFPXK8o6VJnLXdFR1HX5qhKMdJWRAS4U5mCAkZpuGg79GmDihuaUtcp36Ajx7m",
  "key33": "2SazgETHUhJKjKxCQxynoifQqF6S5NDuqCHRG6Rdy17H6P6mmbYnm86Ua8Jmxahjr6wtex314HK9PrLk2KTfyna3",
  "key34": "4xykmVuiNmDEQkvjPNf9VVKLsVqz5U5j87tdsdCxqwg9Ht2WTNoNjoRv9Rcjm3rqXp6MhHUZmL8ciemQ7F9JzKYh",
  "key35": "3Y46q4YsmkQ51XVUyKfKbG26riMAjNycFH8Xf2FxGQ5WNATbK3xzkgn8otV7BzKQom9aTJN3ivy99HLbAU7TDn5T",
  "key36": "5CUmXtuuvWAtCWxCqnnugQZ1GpojKrAZN33aT3B5ChvCUCEiPxowm9gNYXBn4Y5fnYLiG3dmM3T3qxYB3zRkuzQ8",
  "key37": "5qJL7hoN7m88GhfX1BGWMQs9AUn8pPR1K7RTUUcXZdnokzEa5rnxHQuMWYjYX1EnaVUgAq9qHb2MXkLpfHnXQd81",
  "key38": "GG66kDXxYw3PGJhrvTyYHaCwK2rYg2KNGyNYv5PBtp8AA7UQVvLX8TVZzTZTbFdQrhkjNJmZMujJgb55Xw6VRy6",
  "key39": "3B3eSXHn3zC3WYpRfn3FCDh7m2kooz9tpwcBZDfgyP6vz96S4iJqNvnHfhr2EGVG4YkKGJ6fcH4D4DNxkvD5QGkL",
  "key40": "nPrQufbZ2vojbPh5htAAuFxKwPbwxnWnj6DzLuVMX3Xw4fJNZwFLBtCEv8JJZX6xwLpkHJX2DNLE5LNKc9igagJ",
  "key41": "4PzVT2rWEDjHQzEEMgGgj4whtD7FRiFWj2ZbEGy63XXcNtnpWiKM24EWNNGiQEYGAcbYVV3mRBZUDQfaw5nxzvHf",
  "key42": "4Da41yLdhWtMcHNWo5bMwHhmL9bVcvobSwzqxZQnrU3PLYmBUAerc8VK39sufiGEDrR1zrfs3CeBj8ZUfKsrHAih",
  "key43": "sPWo2vP6jD3xYk1WAC8GL5hguSmsNQgMJ3NEjSYDeosd5PwaTNjAX6g6bnxdEormcQRRBTagAVFxvWAhQUYx8PZ",
  "key44": "5Lp7mDgELoAK5fhZDSGL2EmpE3Dy6iUtRXe1Vvm9vSnASXPCCewaa7PQeNL4QETM27ERgJoXdpE91RvYp8zh9WaU",
  "key45": "4YhoATSdPiUVsCVkLcJ7Ce4ebks3XtRh6eKCJgNbuyzo6NYMFtVRE7pXbKo1SYgVGSS2JU4ZwHfToCVUL4GgJ2QS"
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
