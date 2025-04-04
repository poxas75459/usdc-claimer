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
    "552FHTddAWhWtHu2pXoA5yH52Csia5aY2gGBqWzELUKfCdn6gdWBP8djxt3R5jLq5k69mkdZDTxANGKqdBzBG7Ud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WznvQNdVUKpt4Su1EkuDioNLzCE2YxDMSCSrEJmMdxG9Um3pNvuoeLfkWJTt9HMv6Q6b2ThDUHxL8itvUnFRNob",
  "key1": "EviFTkqVAsKMHHzsCNX2MgHS93AjuWhJwaMc25pjMTmGEUf5VXN8mzZsHvThY8616SFRWPpuxy284v1HcxV5LmZ",
  "key2": "2ckLh2aDWMQAhDHKv3UukN8Kq93rCYFCteUPbzKbyE4YWyHGuvmCTRRfG3oAxwmtVx1ax3uTyzh2Jtf5t1Fp4xxQ",
  "key3": "27raXzmniw3F4MCowPnpfaySWJw45xRRDAn7qmDziqWkjRuCAkW6EPMCbpB9bWvJPDtqRLzqpuQhqnytG9T9EgwE",
  "key4": "5Af4f92DvTonxkmu8w1RVTiW2YF7TuYizgzyHnPxUpJVehDQMrpBFhwFsws5iLxvXDzsNjVCij9uNzuDY6Hz3QSv",
  "key5": "UgNYZesr67sY6cJR1kb9ikez29JxQMBes9L9u2dJJ7WvVvSByuT8iHoqyLqhGeiFvZuprnLePSPLYiFKpDRvGjn",
  "key6": "5Bw5ea6fu3PqpX8RpSmJvcYRnMWCKren88mmSJtTAZzh1RfpYkmQG6pW8dzvs2t9uihPznT9rJnomuB6y6DLUhPj",
  "key7": "4wytKgtQxxzfv34xqqB6BHdsvAsU8wGqKvwpbpJEdxgWv4D2oiBkqkZ2caJ523NqvCYmBW5JzoXEVAKJKVDZPVUq",
  "key8": "5WeVBinVYsLPeMnQiPZwmUXPSrZmAXyy65P8Co9aEajKZ1XvS2Mi3E1QRfvqmQ24i7dSDsPMqBSUsyrrLo8E8TfX",
  "key9": "5qUyQWXWBeejdYi1EExfaX7nsYgs889h4fitGzUyzHqhjczDdza5WBiZ3gjWSKjJEhbN2wPq7LNbGaFruJrtpUoh",
  "key10": "j2oUWC5serUfnaLNMyHiEH4my2rZb4XTs8sUCTzqgHF6aGHaHLQ8vtUnXthJGADoabmBx46iPaKvfLz8hoYsFz9",
  "key11": "3pPRKZXVobAmJUPrz5TXTeS9KwGfCJzo7N56LgLPkfyjqyh7SyJVMiXXUENpX7X7T2wr7BpRX9QJJhyVfT982HKZ",
  "key12": "32fSwyDpSc6ArMiKbz5Rs1BU4m78zVKXghExwavCNzCTptEbAeDijVwnQzDtVqpVGDLYvzCTF23Zzpscp9bKCyZ5",
  "key13": "faWLPUkPVxVHSGvdqZXhXk6hUJKeaH6EAUhGderxqrLV7maFbFioMttBuFeyA5SxuAiePUdLKMca6M4G73ropXB",
  "key14": "24kYuB5ECfhRjF2uWbsMXjGVupUnUEYBrdhruAfbb3afy7KfGRWTecFUTe8CmxP7vzaG6xuLKrcNR46tqWUYd3gD",
  "key15": "38Sg2DWHrvnJVtUuuuZ2A27xZ7bTXoYEuaibYZTBAhdgXGGnoRSPkeP8KgNzhKxDbAFqtfDAc3cyDn6YKGdY4MxS",
  "key16": "2c83VYYrFBPtrLUY6PxS543HFryq2YgKPzDERYAzzawUhiv1oL5bwMrmL4XNCUCZbRBBvpgPZWGNaRViqTJ6TK33",
  "key17": "M19nJJ5tYbjUqvPppcRi22dv2uxL5ExRgdWDbke6CYysYEbRZx71bxyihABSo1a1VRts1TkUZ82jnSQSLuqtroa",
  "key18": "4L1hyYVp7A58bHKjJGYwKUo1dPZuKujJpECbztkR94i2ni1j8rnkePpoNpYUzcoor28FzdHgQDZb2RSYf91pRgMM",
  "key19": "4ANwPi76BQA4vECs6gbwLCSBP1ZGWZ1VCef4MXCh5Fncvj6fFNgSmNPEzX7U15ZEfvHeh9Dm23cE8TTMHbPPs5hM",
  "key20": "aAvTYxeZCsCWEtVLV3D8n9C9kyYamS31L8YfWiZyYiBJu1WjZpy6pyFbnu48npAeiCY23EzCAoYyXF2uTXH4fKh",
  "key21": "5Cpv2BbiGwJqKK1hkg2zNKHqfZT8dFsJX92S1sZym5TEUWiqtbLbiqjEFauaXFVT9P2JjkuXaehLtBpceSWm9L2c",
  "key22": "hYoWzUbv36P85TPq5KQPXRTV7XEHMiUF8dsZSRjzaedhy8F3x69wpA2ppQUmZP5yTb3VKj9drzcVxnbjC3aaped",
  "key23": "3YL7mdduureQwSJbjdvTDeZ3fhv5LHNLtQfn4kA5ivjQDZXLSrhSmAguMuWFHQ541tWTWgo52XgpTJTY3zoDLTwo",
  "key24": "237xUpDYZpR3xfVAcs4dUJWETC1ZHZEwpeC8pmTVh18XFJNGwN69jNKY2vkSjQkSFdePjGsrq7hvRaCJhatgJPc3",
  "key25": "4t2DAFqC3kjD3K1vBVAHdVUBKjiu1DcCTcojGmSouAG6upFwNpgcDfLt4ir1abkmAf4GFwqKXx9VSbLMFQ41aPeU",
  "key26": "3E6QKgnz5oTX6vs8B41eG35SecmARxiv8GzKDSYr1zhyK8iukJt6XwtFWKFmGgmvD7sNrAdKUQiFZYMF13mM1XAZ",
  "key27": "2G97YsB9mQvRUZtAJd9ViWPuEvdG5rM3JMfS7dbaH3kUxYn27WCAu66s4ExdNwwWm6NdxobEf13FsH4NeG4UjiAW",
  "key28": "5hoYVnP5NTyhaQ8HYvt43D9zmE3Xyj1tM25Sg2pAXFdyPgECPK5d84dYN84zorzpVokcEJsRt4rbzzghhrpfBnQ6",
  "key29": "LE6RxhCRw33chYZG417ftSQiqhA5EZYtPagtSBHu79HpvN5uKwS9pRzr3XV4uretoztB51p9MWrYdA1DEgG5bZm",
  "key30": "Qqg4BxBnGCE7bmdgazr3mQcEJaVtdW8wLCmPoR5jU6pFa8uGkd2QZ47ZrjPixbfjGfvZxpXeHRiAk59H9N2QxrT",
  "key31": "4pLNSCfErt2kBhvES2KSPphxvv2G5wWRt3pUqdznULoxamZXrdbpKVahSBeGm7WR4NtsMCzaxENz6X8m9Q6pPyA",
  "key32": "3X9bqP4E1rXSTRYttbkcXobs5sK4C8AXK7coLiJ8s2b9RgGutrzZteMTi8aev9ik8uATMBRCKtf8MyreT62XTAmN",
  "key33": "PqLpjaWxUHaeFM3NViD1xCVC7Df2q1gzFYRFdRqyDzcqSPqKvVsD3ZQ9ubk8ySdiWRFqQJPbXzyfa7DaFtHvz2G",
  "key34": "Yboz2yqTac7Nv97TCaq6jqxzF3afQpoCGYWKrpeg5LNo5bkkgy6UGFEHxDdpbocd1FU4fpr7hA14Sd2thMpkx1J",
  "key35": "3q19f45AhsxaFt7X9dCPvk4oWubtR3YCJPtonkNu7r4xPAQBzvxVHnHsaSULuu5n93CTHqHRuLHMpbGBK2M4MfYh",
  "key36": "5Yo4ywWDwu5tEJycRiDEhufmyrFFfn3xxjyKLg75aJtCg7N6YUYwzmH65hXcHiP1FkchDgo4N3Z9v7yDARjba8Fe",
  "key37": "2VtLDVzyJWJmea7kMw9cvtJeR1P2KAoMNZD4HtdwJACgC3dDxvwrcXABifikynXkpJ8nbey6wwK9QcuptcptXCud",
  "key38": "3ePFCsbCzn59skcuUViet61nhAUA9xvAQXpyzrbk1PSyKBALSfPRRKUrNsmpLY7HXBoqKXJVW7UR5hsugjQG14W3",
  "key39": "3yFjgwXW95Ec9X4LRPHz6q7N4mEFFWspWMqWaREUM9tBt4fhSEDh277TVXDuX5PBtmKcSudEyfJwPcnQn2ZHz8GM",
  "key40": "JQtis7KTDdAf7cGfPMSP3n3oqwyjbHupMnmWYCtC2Ccihui94D3ofWyW85A696xvMjwUHXYtzmL4qgyyFNhpJXF",
  "key41": "5y7vdjjkYmPqoiocMuwEArBoHnhTp9J3Vuc3Ne4JUnvut1uS9YNJAdUykusZjGQivzC1QiWHyUkdfbkw3PTfnPgb",
  "key42": "3fo1CYtVUYtXhwjn9s39EtfBFuBa2Dvhy4SGDrmUBbEviPjW6jUt1KDF3fnyWsxutntBa7Y2rcsp41uZj5EEiP5U",
  "key43": "232z2fnCkBnsZPUZLs4GZJT3a5c6vdMpshhicqts3hUcP8rzbcbrPXNTRfLJDtQow77KmFhL7TQYrJcXJDfMfe3g",
  "key44": "vqQHrjQgs3RE7n2kJGAnKX7ve4o2pUKhhYvkDrUbXpaLKqKVULEcy2mPF1zdftpb8gZ23kR57DDeKYVKYo1MUhf",
  "key45": "57pLbW7f4jsFJbtqdoohRStFyoLKhN3bTyTLKHfkKmyop3pwBarJ4YCxKEEhTfSMJahLN61jzgPr8R9HjQeXiNqc",
  "key46": "2afiWGKPHj6tzpTGYzBrV6W5gF8vTfvfUdnBdEMN3DsRwzFVAGv7sEBGSwySnASCK9BurAhei988RZXTDDMhqjnF",
  "key47": "5MnCCSK2W2ey8QEYhgPPkrWvLWSFUiHJdYCov1Wj3hAbGweNumJgoXcYcu1BthNR7PZ45mPvKhVHLKPe7vbBTRwv",
  "key48": "5o3UjsFtZWQhLmaQhhZZvxGcVgJvZRNmPdpstn2SJ4FxrUPu13dJJqrQ6Nz32XPPexx4SvTCfLpK7RTzSmL6e3Ja",
  "key49": "3izQKpRuRFWFy9op4VharSH1nB3AxxfNPcB3eHtsEAwnZUdSgkzVm4dQUWpY23djLW24H6ojSadV9gFpUyaxcQTH"
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
