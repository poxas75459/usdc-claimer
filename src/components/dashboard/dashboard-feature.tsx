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
    "wf5TZjAvbrA5w7DhSWeerNWyS6xUyUcFbYRHmhstkxqYXPzvXUujfHUDY4qEyjnY5oPymuA4vHArCopQQADXw4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gPppVA1dWEmtnKvDRT9hjRGpHqqPdWjh2QJxTAWktf31cxWyAXSPUDJ6YaaHLtE7FfcsS7DWVL4rCrYNRuEHSf1",
  "key1": "4mmfhNtDjEgjKnk1FtMuQKVSpysWT8y3MWQg6oKtfq6dEtWaAGrcfcaAZD2YM4TsXrewq5LgPG3axcrKHchdHuQc",
  "key2": "4y1TzbvJ4Y2aQgicRkUtQUP3xaHjNQXKwgRCQ5NbFAAsGq58UDyhn4qBxozTNgnSqqpoM44BkL9VV8ECJHNBzVX5",
  "key3": "3xicCNPuHVRs6FSn5qFi9egK6d1D6oUviMieLjDCoxPy4YkYWeHrzdti1HFhhVMf1PHGCcD9VyNwDSFgRUXpkqRh",
  "key4": "5k6nmzp3C8TgFCVLga84mp97NLjEiuW8RZZz3jdeQw9tENW84GTSKRPCQ12jmn1sSNYAqW6xG8KbRh1x3LWo4p22",
  "key5": "yLvMvqmi2aL3XiMu9ByFFu7CAr8xzMzH21sRVEYDfEi4aReZ96FBoet7tG3ByV5trddhbCJUiiCFxnWRgV4gYk5",
  "key6": "mCPemiZvCFYDmuvhGBNRGrtqAoJj5NQtywmYskfedum8Xdmt9yjrZ19AuGPwmWb5URE9dLDY55TzZiJqFgNiQA8",
  "key7": "5oykuiBdvXM87BWfHboAc2JqFUK4Z2tWD7R1M7NM2P7dnP8wKDC2eYxhuaYiLBmUqiDUJ1sCxwkUzV9RFiMB4Bn4",
  "key8": "2F5ng7BuSXwsM1JUL4LPdhgpNG1GYKk94bfEvQmNW4xdHzgYDN2x82BFunrvHXbtw49ftbmu7HiHC8EaA4PArccz",
  "key9": "5Sp2zzzPci77Nh6xixkM9t1NuQCzb6GfnL2r3ixd4tNiNR1fwhPMDuptzd6YVqjy23PfG5zTcUhDFFX6DAhSKhFE",
  "key10": "4tf35KqxAkEdPbRwyXJxSvykcc1ZKx5Xs1M7L9sKDXuQBSZpXGGTodJ8VKR6avMuJ3gt9hj4jmcfeAkoyiFxnpz4",
  "key11": "264rrJzEuLVze5LQMiB9izRgTPE3VnW25zNL2KQiXSqxEeQA6o5KXTVX4dLk5CfxF2ab9jkmx97usjDnH2LKKxRg",
  "key12": "2ekNUayFSfXBLDh7hj6uwd9YCWPB1JXT887xr1biSA7KHCYQ2mAWRhqPV6XqNveaHjsd5yHB2U9v5cREkvzuSR1F",
  "key13": "22MwSN48ztbfB18ZzTJN5xw7fRzt1Mgvtxanm4YfW1watzJp4yukxjxuWCCymxeEhrQ9wJvha5s4LHZ5H2fc9Jho",
  "key14": "4dFnpisFbUA4wrf22kgCnENgmAPhNJm6DbyWYrStVcHd4VUPv53u9wbhMU2cVD39YciKovvLhKSEuCzqUsJjtrF5",
  "key15": "2SP3mSD2o5WKnXxCTp2d4dzXewSq7VUREHtogMFWbUW2cAmpahmaVbU53YozL2VXvE7SW4jpsxTt4mojRxnTWkiL",
  "key16": "5xuU7qyBJBtmAgcLFYANGxsH23W6Xa9vs9NuS3bnvBSs5YcG7AnVWD8gJrekq5HE8cp93X1sxVqXd5GoMMVgkabR",
  "key17": "66SrpDbuH6ur7LWbujjJ6ZVdoLhbUiQ7Xe9Y8aY9ndcgUCMNTKEQYSe1wbcpwFaezrpqH7M8M8gYjvreLsVuynkw",
  "key18": "5BB4hDymHkWsNs1RR3wfDhpRHoTqSSmyNPPjDFTTjxvQFvaDxvrGtEPdbZHW89tt5AXMTycCPhj6tDLYwYFbyPNB",
  "key19": "34x3JDGXxdUGiwHMqr3XHeFnNYjECBGvjNmcn4wbAvf1VaNua8y3ccJR6i1o5RspDSeF8yu7QiVWhwQXwWJorRVH",
  "key20": "41GTRFRb2ia8rLHoeKfav2KCKUezNNa9yCYQQRCAMhXya49geQao6EbhwRRpuxSpR4qUGgha4ipYKhvDpxqoFK3C",
  "key21": "WqF6YcnwuSVoCHsQ3tGUwteTnWjonePb5U8hTtbdVn12VsYAjZbPTxgwbXc44Lnz9ASbTPb2YjxTucBfi4ZSpUA",
  "key22": "3FCLfBhqRWuRyR2LMPwVr7RArqic5YoJwwGaon1Sx82ytn6VoGbf3NFtwGKknx7xrJsRPLkJNtd561qp8WVZvsRT",
  "key23": "2dTHYM18KnYqbUMjyDY2MMcSPsiWHpNonEaXqaaRKXfUHWsv7U9kp9tFidsVMwMTZDaNRmphLRHr8V6W5CU3Gzt7",
  "key24": "625RLxSyPd9bmRiTRNXdpFkj7t5dBjxCiB9kGLhpG7YUGyiEACS3dRPDymd2zuZuk6FwvY3cr6WsgY7MUNfXPofT",
  "key25": "4y1Teeo8JPPzwJLsPQziGMEsvAsLStuovSthWAKLGjyrC4NZzYDnGjXpBWpTvxoKeVv68PyzbcGg6NK4Kvs8RQpM",
  "key26": "5fHJ7jJVtCdog3KWaRhTVdNCREXJ1Q9xiNuzqfWBCDxD3mZGVZEVG73GGe8MGFTnFN3uQtqeRupYuR5H8ZMrvxnr",
  "key27": "dtdZWBDTvDJ3SQNcYBeY69RKGHXfdpQXiL3vSmvEfNfC2k6RdomdN1o4khA6apnpRkK94GVbGFPTxHptrivsWve",
  "key28": "QxZqgMCRd7GLNS8MPx1aZGHxnoYa9HcN1suTeoJpD4SqWdADiA6vsZWckM7ay99dVXHsko5GSKSnoHNfkptGjHE",
  "key29": "PvRvkoABccLnde4FCqXTKNnMnAFUEryntwsLzzBaEpL4jFEfQf7SqAw3Uch9hD4AnAhBYphCtaNep8Gr3PWzMYc",
  "key30": "23BVTSib7m6xLGxyURxMgeCLSpFsXrtBSSPMKNAba2m5wMNENcVEf1iqQE1hiBrF2qhrtmgeoNo8DQQWozteTyXC",
  "key31": "3xuG3fpJ7JRA9bFuTyyfDjUTDXukJor2NLzUYPLMsi3WsX8Mbaa3YivK5EkNPHwJvwxWCTURsmY5Sfz6uvMivyM3",
  "key32": "Fwi9SN6VLt9tv1B4ziHY7Ah1hUw3BCxaNDqHme7rW1EBfqjXLHLF4rvVfit6uvJ13pE7KXSVEYYuSaU9Xhskwj8",
  "key33": "2UEiUosfm17dmiF13GvpS1TbGTrrX4qfBRhLA8Ey5NSFLLS82H2ajkwqHFJU1PQCN6p4NXiFG2rVLssqFN8qwGBC",
  "key34": "5NCUYEgtXXhQoGQZTtqHx33qsP61SoHBayYUcXjKgs2A2aJK63ketQcH3WzbcaMKvBkbV8RArmFgA1WoNrvhcJvq",
  "key35": "268mvkUGZaCQCBYg4HTaLSd8mrpN6E5QvUHpK4zoAYFoZNfDaRszwkvAKF9jbkvQvDqwFqtYtf4LQ9vM5jQfv8xV",
  "key36": "5qmU8pD4PYhoWQwkYpG7RX5oMcmcuLpE5s8e8eQikKMGdDud5jRckqTRrv33yXHHBD4FRqdTRDkTGcNrnATEB8LN",
  "key37": "5QzsMXw9HUFLrdAQyhHbJ9P3ZMnWR9YJaX6r4QKjRvwiAC2sDoeB3ZEM34bUueWX45vpCGJwFq4aLzNcSdiQ5tiz",
  "key38": "GoJTS8Gk8L2rL98YxWMU46gdAqTh3ZEQvcNaqKwv5ctADh8U2xo8p1hzPNiASTJejBEx5vtu3nYNFgs8DdPTLn4",
  "key39": "57LdFebKWMDRKXuVXeVRCNZT4LXLbfsJ8Q3aHHdg3CPWzAA3Xwt9GdSRhgjiURHej4enJL4WVT7hnNiAjn2kpMpz",
  "key40": "7epjVNbJDBxwAsddtFVSy9g3G29JfhN4zBmVsyVk4LM4hmdJeZxF7BmRw6pzu3V4iU3LC1thR7pPnQjvVPpGxMH",
  "key41": "66kT27WJpJCQQyBawATZuBepgBSwSp18jXbMwdva6wEsfxYnNgBKtWTcd44wRKVKVaSLyxouQeXrU7ch4j8GRf5j",
  "key42": "5q96TPTgJ47pJeX2F88nhcJGH5kQa5hwCh7QGE4294dy5Cz8mswZwaf2d2qgUHEvkDiQ4AinspT3ZcGBWJvxV12k",
  "key43": "4nVBov4Jkt69ZUKc7KaBpWN1VQ1zc1mhbfdUpdjFzNRBoxQvyjs7K73ZEdtkFgiD88evFk93ER4AauxxapYjZ6sm",
  "key44": "fAjaxF6ronAgzoUEfyKeFxkTQZNwZCFdzkgQzXeY4tEF9NAqA8bp1DvFZy3opKPW31j53CtC8J4jMCdY3vqPAnp"
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
