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
    "3EjmVnnoqP4HgmH6SGV5y7kWBpVdFGa4FGos7F7kVhWcHYSP8dUhpn5m3iYVm1A6WwDJAReJQXTYabXszP2Sbt9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WQVXaNRYrV1J5dv75W69WZJNWCFuoX47j7PeS59M55SWpftZSgcrxTfUy3umdDzFy9nvWu7gsnFctVaB8ZNwJyi",
  "key1": "3n5abPVZzqozxdUb3Px7JrnsLPzw7tb71gSCbEis7pWKrXL1QuFRyMHsujyUMJ4R3GvHPCKC5La12HMnqeyDPD6e",
  "key2": "4A7AsbR3nR1NoYDLFzyL6AvA5iPe97nwJTLChxF6meXK1RNsq1isLot55qXj3D8nNw9sGVaxj35MUvoPSvvd5GsL",
  "key3": "2GC39hZk2xeFihBzatQSucEqWWvoMym7hEt1rFNeWfH9eAtrvra4zzhBmkSbPdamNv2txHGSaLHHjo4HQoPXT9Rw",
  "key4": "3cZdG1HMnk5y588b1h93ofjQmHCu5nJyh5KESZBRJUpJ3mn7eDZvJeMXgKgepB82X3mVoo8uDHE4Y36LLXoBCqQ9",
  "key5": "3yR159jMHJ15ojBDAvFnAFihCY3HrqLRmVUPYZL6WQ2RvT4MGuBZCfRVpDvaabxNip4Wv3m3hvuwz2h1zQBoLQmV",
  "key6": "4SqJTMvo7TVH3a5MHUaQdm4N56LFHGfpv2H2piA1DUbHmC5KtWmWHFwHHwKWzfoUCLjDZKcmstLR6nhWwWB61TcP",
  "key7": "3jwawaa2mstmLnXj77zyUeGmuqo266DcmofrjsAtq9yb9btqZN85UaWz5FMsygeYdxgemeSv6nMUQpXJ1zy98LMp",
  "key8": "51MZxifbdgcTmJ2MDF2DpV6frKBfCKjH4boYU3Np7XU6vH3SU8Sfeu9b6ftNGvHiDvaUZSpzNRXbcKhHW7Fbn59e",
  "key9": "4CMMv5GsQnwr2WKuk4pGwnCSrWedrrVzqsz1eQK5R17fNLQTS19fiQaRjoNSXAXvzAR5VqSmLoLBbJW4pmXHzWEJ",
  "key10": "t2ZFdSf1mtjjJZbsoXnDMRfHTFMwAbN6wz1NhST8JkPFVNs6YtPSVe4Yb23DxnR7i1tzZxJA9xGqdbhWJKHG3Gj",
  "key11": "7CkccuNQ7VVNyk8nFujrAnsz1WW7QCqZTYULtaG2kDQCQvMH4SxpXLuuM64k1cqgPSpdAA6JgEWL5FTTGpBw2jg",
  "key12": "393DQ1QGvZzy2KKZh86ALJfeoJYd7Ddr1raJkpzPux4Mp8HtNPwybgTZG1WrADfEqeiBLcuT2gwEf2QMrnDpqpDF",
  "key13": "5WM1ZNpi4m1o3ZXnQJgcigsbc8wyJQE6hnP6Xa3gfHEp4P4KJxaiddoebnr2YrEd5zJhYJW7k1hU8nCEN81BSusm",
  "key14": "GQxkNEG6UYmw9u4EuLR6zHaU1pmonTWdw1jcugish2abymJFPoGFBqoc8wiTK6YmywwFfA1cxcshrfczAqfu5iw",
  "key15": "pYsRvojYAcP8qdm66WqVRgBtWTYVGsy1E8UTu7Wj1fjiDMPvQ2M29SZXvbf35ju2M1dhTz1hoDPAP92AiBYng4L",
  "key16": "5bm2HYqFkPk4WJ9pYiTFqaTWUimzwpGaG2eqtRZiZ6FTp7XEe7Lmxy7NymYRgC7KpU8DUnkqbbr5crJBc3rzjNLz",
  "key17": "5Bnqq1WSJgiGNUHwzBKqMBGBBnaFTmtk3RQUmWo54ypQc4JvdZ6Nm1HTJMGmJUa2pGfQHD3whq86n6BRdZfWrKz6",
  "key18": "4JTGYbWCRN4wdk8LJw9YdAxB8RmxkBB6VChmr5drz2Nz37fYEXYMGBAWk3JfyacN3yg9bcyU8Hk5b4R2j37DDfPE",
  "key19": "4QWKAsSo8WybQxtam7arNHGtpVt1hu7ihmCytVdhBW9iUAULWKyNdsfKicRzK6QiZu8hipSKFQwYugsBoLkEZ248",
  "key20": "41Pj6babEs8EQoCQ5sLRPFe3zqYxNgzXaMLmkH8PzFEu8AaSXFWNwTPNcxiDeskVbJY7n9oKxLM61f6nF6rDqMhQ",
  "key21": "4UZSLBA1eLcxm8KW8QngoZXZ2iyCbyJd1osBposjFSv7AEUejyunAmXsK6Kw3UndJCBFxdDnFY9fuQJKSBAGtdZM",
  "key22": "37mhcuDkHN8tZuf9t6xu8hgxridLQbSxo1PT62dSTXdKLWsfgzfzMzm68UfNrTCJMgN8pxe8k1SZvxwq1CwyPAxP",
  "key23": "2Lks6VWFBSdCLvXkvPAT6mmqA6nuBcM7Z2dUvuW9PhoTq6AxNS5KFs7riGfLdX74QfcD94XysHReK2WVYLBFuKo5",
  "key24": "GFuqR4WpNQrmVqEmWPKKH5ACmJ5dQQizov6WcaHWd8XoFSpFw7FPSuxiKkE6ZQvdDeHimavCZvSGN3dmSD7ZZEr",
  "key25": "3CJr9EK5eUH4GZn2vWjXeRpaAoBjF8LqAX8D8ECLhLUzrvGnTQ7DFcEWn5ARap7xV12PDvEd4VmWLqNhcA1ZQxKi",
  "key26": "2CEkq2ML51TrkkFNTKnxbZFDzDb1S6mKSJCDKv1ggWSnAr9uhzJAYeCAHayt8fiDBvUH9toKT7pXiy82McGVizCx",
  "key27": "3L6JXQ66tnkKNgMZiTp6yzQW4DmsbXMtQeTnB883tNx1KE4FiVNukcgc6nMB7o6PrtZjNC8cN45c4mhQGv4vFRyx",
  "key28": "3S3ZXz9FNyFTHMZzBndXoow9EjjNHitW7UESQfpxaRSi7u1yptjE6kUAHz6ELScG3PTtuo557zuxCAyVej2jrboG",
  "key29": "3BH6YyLHHA5F5yVREhvDpTbyT1JcnhbAq62UTTCCsNFy2emkrg89QMAA1BoTV1NoW7xKwjVmGtBiY2VwTUoxE41q",
  "key30": "zDMVxryZecR6LMAzYMXxrpVWUwFEZN4V1DtRmybaEEQpRmnwxssTyGFHgLQodo3vQoim8KgHingJxgXbbWp7kRs",
  "key31": "34DFJo4aH7nfEr2AZWVmuv7Wu2jAGWb15gBPAQtuLo4RQDqGbTL3R1xfhTNgVWnioPkS9E3JGjz8mxyj2biFYwrK",
  "key32": "53pHZ7WnTYDKep9nNTPfnKHJAaowwgKXwm9b2YtZV8QTZRCnZTuqxT8UFC4VRW9TfsnaqwCRBcV8swnAZJRrZvqG",
  "key33": "3RKomBtip7fSBojUwKgzTvoYcagXwWCJFUxqHPADCDrnidv3HvzuEEcigjd4oPnqYPidz1wVJ8nsVXwYcsLXcP27",
  "key34": "C86JevEZ3JR2TAtxzVhUJnGbQMDsZm1YuchZD4WsWXYVtnm1nUS2TmWJwHf6vQrBXBXrVzNvSMjWWz5aUHuqFzm",
  "key35": "4Rf4KB3Jcd5XqAk4eLUQQdX9CSZUK6VC4bmLSNFB1kei2vvqw2ii4a1D9buK8QAU1jSJ9aqULFAwnDkXT2MCfe3",
  "key36": "2Ms6k9pMqLs5KozwjnNrLFRuRQ3CnrFZotM2YUupW4wFEX2DVNgTR188txEAEY85nVT9fonTn9Q9Rog2fP21ft5W",
  "key37": "4YMKEbgwsU4gV2MLUxeXwjruPLKfoF98knbbBJgS5SmowMNDqH2agggH7L7mGfZgxWd8ByL5nDo2sgatAKKqZiGY",
  "key38": "4okN1zKnmyNb5HrcmnCANRN9nZKhFfSnMFjBWTuxNqTnUveJZcQmRQ9QFSmbfUV95UgyWDViTdYyqw6ChEGgwhLh",
  "key39": "41RfBMPzTjqxVSbcQmXY82TgQSt9bWXAYykk7spJCmkkkCQMVtLpzceEu4MTkyNcCb3Q4in41iQFwsNVnWCotyHM"
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
