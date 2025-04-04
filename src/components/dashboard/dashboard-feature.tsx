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
    "4ura48TfmvHMHKu1GMsmBVAmyVuM1wk2YAU4u4hzPzGbzBaqmGTLBsDvKgEAmMF5FuFrNYStki521wRiZzKBV2tb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23fMFZ2WytBamm9oZQsKhUsYGNSa4Qf2bLchKPefPqR9U1Vujqv21KBt5WpTEnj5Kb1u2DbbPM2gmqq2MnBrtZmB",
  "key1": "2rnFmPxuR89EwW5UMB2cUfG7qccLL4Tyj4ZX7AjpYD4yC535wj8GfKdLhxA6xJZSTcwzcaSccCTTipej66DvNzUi",
  "key2": "JRwKv6sZjW7PBsZ73MpM73ihYgHuK65igQyCeEZqGve9t1wKX3hBF1WMCNk3AtGmCncddDtpg6w7LEbzRLyTeus",
  "key3": "2pBJniKF24X5xZww3zbLP6poYEJ77TwsnvPkZWgMDdQ6CTYqPHpBfn71CrgTrL4GPo6qSj8jDzyHXAGd4YezXjMQ",
  "key4": "4tPLM7NiSKAPvBAxxvNNibixSkEkQdib7Ap3PaaZ8WdjNZK3ghCPtCtqNqTCxhf3FYB3ihkcfb6Dsd9Y4fnkKqB8",
  "key5": "2hmmhU7kX3V4JyiwVffoxYgi9zosQzmfFbcSbqc6tHyQNFk3s2ReKfR6V1cJXo4dJKnjVEChfwniNRcS7fHKu2dP",
  "key6": "58kddsfb4aXQnX5Xk5dPZHr6iuKbxdys58G6J6WtdJofWZ7QsSxHK92A1of9FwMfTtyFN9cGybj9RL1ULsV95dwu",
  "key7": "41yY1qF1acenTstyh8dqr69NGLDjhFGGiida5sJwpG1isvgFTyaeqJLqnmqJB3fvsKCCv2PQW18aNoPzSeQM2vyY",
  "key8": "4XwECiesJJ3NYLaqrmpXv84aMazt7gqNyUC7z2pTdSq4xYQU9bL5gU7hcLygH3JpSZ6wnYXVZpwKoCg8zwon6TJ3",
  "key9": "3g3tsjcEuw7RDqD9hVjQSg7DurnZVU5kqYJbHLTKmrL6Xmnuhmfopv61kqfPWBjQozYVaGRjxRLpBzpCQawaJjgU",
  "key10": "33g2jQF2gig9VqCF6iGtpEQFPu4moZw3AJ2FB2p4nUcY6pn83L2VCxDF2TLLwNgueQL2cS95yxJcqzFePX56r1N1",
  "key11": "mYgDx7CivpB6PXo1GJwRbfEzj51GCPK2JtQVYUuqUkf18JJA2VR4t5YmZPsgGnvmxrcHs4MgVisu1JSkK7Rdk9D",
  "key12": "itkUitbmLKwWqNg4mzEpAYHSATdZTJvd5PqK7BjuyCHt3HG6BGgMDfhPGwYZU2mvRxQYipLuMVCqj5vjQmApduq",
  "key13": "3ENrJo7EUhAe477uGqc3XegxMjYqcjm1XCLJ2P827E8RDrY16SDsR8G34FNbRbDP3QTj71KpKygmYzs7cwRhLLep",
  "key14": "5iNwLWJ5AuJf3jeaLPpcwjYwwsJSLFDS2nmYizJH5foC5wxhiqWu87LuoDpzXUHEzPamtiGFoqS2T68aDsStHkBR",
  "key15": "cpVWqfuJ6cYgz21zuzmi3pswyCZZy8tZAKcipx9f9DEXJrrUY8GedztBxGyaeFmwy2MXoQbsrFCCJvj98TygT4d",
  "key16": "2a3gspNW5y1N7RoFeSsxtS2Mj6nr5PBjkeZEBkSwbpfTLcmoPXYE1hbjaLn2KVrFBrqDNDHYwn9aZPoCzE3SjE6w",
  "key17": "2rebABeVfRnVFWYTcKwbzmovmvzoakKoK86NnQiAJE37jLfVHykUjPg2RsiyTwEqMBHYssweaY23HD6Ay6VK7eLo",
  "key18": "61CCW17KNnA5sgLmuhZrowvxtSBvaAQ3U1MTeJMo6DPDRCjbvjXgskxuXFAbNQAcvTmbXE5MmgG4cbELH6XVwtkJ",
  "key19": "3HcCbHEb1VZwsS81MQ3gA1jdQGgayvZezwiGJwPMVyXp1D54NC3UYmxmkDLS6Uu4V8pGeZ3mmCPQDykmz23DyRKh",
  "key20": "2tYvqP8amti4kiNVzdTSepKuyMcpRZrgtBPwqKwghgzHnsxR3gcMUuM7v5UT5HuJ1ArkdTeen2wHqXurepUL5dLu",
  "key21": "5jdwcz4hV2h9PPDVN1SvqAApxu4PRWPAueYCskffEayPnB9yaZ2vnz9cQSoNrJPm8bW5VqXiiZKCXGymoQwys8wB",
  "key22": "2EyZsSYmtBxK9AytFaUeXyCgNkXxEHRBG1LAeEP7TvmSsttSTWxtXXNt23FYPkTk2fdyQ5SKPdCEwxF2dxahTC2W",
  "key23": "4sHtUtUuxsMf156xUH9rckaCyMdErkGKMznBDE5U3VHtMLLbTPS7RDfBQxiM83Paafgzst5HmknnuYvY2BWQsESw",
  "key24": "2f4k8Sni2PM9PaVUDwtXy6tyKKLueGMvkski3jgKfP2v6i6KUKALewW22dDaPoAfjSN5JbkYywB9Yj1kanQDp766",
  "key25": "2c8xuRiTNqpoMQrzFt7gfWAcWdatajtZcHXLNdnF13wiyi6w443Dqh5SMDQTsEWvxdcLSCMHVfyR8jB3Afj8dJta",
  "key26": "46fk3WKygWR98FddHvtSbyvbGMrnyhFm895ARJPgfrzTNsjrkzgSxFoHwSsEoKHBvWP5n4eTWNSm1cJgmX4nJMQL",
  "key27": "3SrUqYWDrrJqSDRHCet3oKSaoN3dJw9VXfKCecbqvBbc9mJkMoh4z4KvUPs8WMsP8zFecKjoKjanXDvtQZoswinH",
  "key28": "3vzMMyfYp7WhiQvPWMYnu6CJhb9B1W9T98fpdTSphNfNptMDLgWnfUdfbWgqRKV1VdcZM1UkQxoMyCvBFyaS8azL",
  "key29": "2bLtexTGnj33Mw5heecs4CMzZsxsZr7v4dDRX1kGu4LyyKbykBvpp3GEziktCw7YxnCMxJDzdbT6bnGzjCdwQdZk",
  "key30": "4pQc1gKDvJSBhUeUHVYo4nTNhTRsd6ynfwipzuUNgmMDKKrfevKRjK7qL1YtGiLt5EtorNyqaoJLEFqo4QqCsqW6",
  "key31": "87EzB4zvMNbEjmKvP6KdxF3kco5ozRJjGcBXkRgSZ26N6nFUZEWXPEayFjiBsGrYmFF19xigfSZVfJvKdNQDGQq",
  "key32": "4oJTS56pwZ6EipMoAPTS6JY6Qd1r2rZwpL7BwuLh9GaZNGW7MSHz9tVtKvSVmWnea4jce72CyLJH4eBYRQ1Emh2w",
  "key33": "sqe15AepWDZAnSWSDxT4RcoDnYmZ9vSZbb8nLqgiVfWmrCVxZp2xvFdTqwVPhQFChL5owr5sBSDp6aaeL94nExh",
  "key34": "MXnsHniKugh7rGwUz37y7sXdqr8MdKkvF2APdfqSunWnzDpVk1NhHQ59j639PQVytW5k1WCht3NkkBRBPUGheAm",
  "key35": "4R2Y4t9L7WxqKAQnNDv3fJkovz38jDkXn1uU4y3Tq6umyVTM5eZTNhgxZw3VSVcBmYvnhw5U6xygfSAUCc5nCgyY",
  "key36": "PaCMMqPzUZSERUUQp71qJioXtfgMffCB7DGRsifmpC2P3j1kjDRNuVKmYSvFazkH7USgYFKwB1McGPyrdYH4Pie",
  "key37": "WiLVo5jZVqbBdNnEhNsEu2D7trqJxGRXmbTSm18DepAAZLWP4ktnKxQNrci9FXZUBzE2isjUisfqcNULbysQHjw",
  "key38": "4u1XLNgJdz35wkNYFM8uTsddUCjDEphExPrP1FNWfRzdULGxxkHSgAZECfLpR6cpLcx7bMhoWeoqKpiPJGhSLGfG",
  "key39": "63evvsdzvwyJRuEQHKRrxLmq1m2NTsaxMhgw19cMwfhnn5jF77yt29QG13cQbcApQirj9WkhqB2bFND4vWefRP7m",
  "key40": "1243N2ya6ftHmTsYhvd5DjSBWG9rGPFP3qU6q2AjyeT2wpne8iKgYmbdqGSVLz2vxWzURZhcS2sgJsfpLvsEecob",
  "key41": "5MoAnjCYvthTbdL5NChUy5VjrHsYTRg1AQjVfqRVB3AjTKCEqomJKjyVD1pLYTpnsHRAUdNMZzsV1STp8bqGFem5",
  "key42": "DfpKPHtLU48qG1A3UDPScdg1B5iDp5GjxLRwkM2neRroWR4TxhiWe5XfaLWQJ6hfufNq6MqLNXjuwzGyBTN7VhB",
  "key43": "JufLcQtbbaoSmcTDxyFdu436DE56cdwmRmi19d5qQVRFJtqbKnDJygC31bEhZJVUbUn2vtHCSgXy4wvLFuJYXvb"
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
