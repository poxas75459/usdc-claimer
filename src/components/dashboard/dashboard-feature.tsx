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
    "5n18KiAsUDrAAoUEgFgW7WwXMwTtBwnw4siZRQ5u7WzFQpuyXWbgkLfQ9sPV4nN3ibTbRbusmfRBT1aRp2Gk9eTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YWdNPjxpSgxWQ4jecY16QTLvfwZuH7BsnFbC5mxD3mhj25ZgbcJmFhYAtEp9MqcRZSizNcPw9Q7oKeygnHpsDNy",
  "key1": "4jzjaQC8iJyVrnx8R4pUYsxWeUiG7R2uvGu5AMqxCbvQhXzixphbPJt5QkxwTobFqjCqoZ6qMnStVX2RPtSZpPRd",
  "key2": "5qSjbgCZcr7BM6Gfmukg3RdPvNHo75g2cqqK23QcZ9BqH1M9et6uuYZYC5chhYQhAq8S1GZACXWyXfN6qaeDJ3JD",
  "key3": "2XKTP4hK5yJCU6cg78zUW6cWeCHF49XAoSfH4EVpwgASx4WssyNmNNUvaVEfkDpPZLgfJPvxTxP4izmF1bARiBMd",
  "key4": "cwdkDSWbEsrZm6VeXyA6cdvDfBi9V9TNPKpa6B8axkzvnDpX9MEostX8E319Tx2WbRz2BPAqa7n8c9CntThGjUy",
  "key5": "3RLNm2mpuV3hCS6FQVQps5EB4JK7jrsAxpEAAFic8pZwN8jSZz5BaHaUroyov2f9PSXi5QNjvHZ3oYeHBgW1YfSp",
  "key6": "64eHeg6q27sUBHKMPqBTP6Mq1QNwMmJSgDRC7KntHYqzVfJryqMCKpKHFaVaTb4j5x7EoJgtfWPSFisKSVaHN8vw",
  "key7": "3M8n299JsRFdaFJ37Vme7pKSLUALck1STZ7VCGxMN3Sj3LnSiqwK2cv9PpEZDNw5wrEMkcrXCTccacmVCe8cZs62",
  "key8": "qVjE5HFtQSpVMoBa1d4ZHSnZGy3ZCuDQym3fJM48pwUM9uXSmnV1BUsx4BGKTs2B7jB6Wirb3Jgex3GP3RnaESA",
  "key9": "236HdmsrJwBx3qPkzmZaDCf6ysFGxurpPcoEA9NHW2t8bSpkr6qYat79xkGfs8Mv11JyXbTwqeF6nedxEoav3hRo",
  "key10": "2LztryX8Q9X8rYfvZptTFtyixCVQ5FyyioZk12qVwNX8TUZhY9p8Jp2iDn6xxPJTXW32wywMxvJbBtvXiiSUeoJU",
  "key11": "4PJpumsVrA7j41oTnscKTWBjiesg9zf1RRwUq27VGYMAnQdDA8wbEyWSFhceSU7pbohvvGXJV8uWAQYYxK3fhDbg",
  "key12": "4PLgNJmV6FUFyBAWBtNyafeuPPoxj6Z4qjFRtrJknB5FA9GvW9QJd2yKWNnoWBw88o5r2fSKG7wBVWtkgvvoEQuv",
  "key13": "enFRD64BNmBnQ4sCz6GkVdUDSGP9WpNtjnLLpsbjssBbmzHfHw9nLgFXRrVQRcfFutGsxAWbMseSprzXPxnRvq2",
  "key14": "3zzXrUDodGMQ4emLKvyTcuoh5nBAGaw7paDbgSkboA2fB9tPrSoXxFv5XTVN8NuZVHTeKPESzjRcJnRgTbQRAv1b",
  "key15": "4neDpT558ETVaPevj5wSs1drnjouwSGArD6SXmVjHUFBEjDeRzr3muywozg51QWa2FFuUBG455Q3icNw23tLkeG2",
  "key16": "5LiGeRvo5zmgfLSwn27yfaduZjKY8o24MSquCDf49NbLQJ458fx7rafk7DA3ViLic83u8SwmHi5UNs5ojaGEh96K",
  "key17": "5QTBKozRn4zFD1qRCAm3qrYi9iUp88detc4xDtChyDHCb5zrr2qcdiXptZGFdj7ewGXdY4SZh2F6UWvqKPpNt28t",
  "key18": "2VJ1DHAPhx3WfVie4SRTA7Lf7eKpvrGCzfN9N8ouB7ZhAv16obEKszH9swYg7HCL7zq8vWL14PV1pAMmTktt984L",
  "key19": "2QG7CZa3VnZpqeSvtaW1kM8pT8fyG39CqFDPmRLwNriSByH5GD5BdtggziYik3toFn2EWVzT4LCk6KF5AhtCM8rU",
  "key20": "3fBdkYSoRry2KJQtLwJiVMPo518sPtPi2DYdpw3aDLVaeLmia31obaUALvRAB3Beoeir8UTE88mKG1C2CUHKMt9d",
  "key21": "5Xkr6NNjvJjrQA5Cwq64vNn8KrW3uMSy4XtL1XPFusc39DEsiQK54rcMMcDicvE898JbxbvfbD2yJLzsWkgY6w28",
  "key22": "2K7C9egEXBuBSu6wruxAY7GcLcFfpG84ZWc834UmDafChFvnFQdwgwFgtC2HxdVqmWE9SyVg5FKQaSe5qjJ9mKLq",
  "key23": "3avTq37BAaNX3BVjYNyYrhY6wCrGtjcMNaGfgaEufKL1FB4Qh7WRzGw31UDy7qr7cFuCYoCEzk9SFsDeofDMzaVA",
  "key24": "67NpyvqLfA2BgGFrQe1ADALEync8fXm1m8jKRVjTVmriXxBF4uHx7y3QD92fQekzw6npcwMXZ2eUVuepbLYzFEAW",
  "key25": "3ve6Z5hegRZBBrkvycEzAh8Wwpz6R932xGd41U6dwML4oca3stySjGJCMZByn6bQZWmJo6GfUEZoXPFv3KBXEUgE",
  "key26": "nrHy9FtExStzf7pMrEvEEZUsXB9vFt9XUDWUkq9JHsRvNdLt2P3eCNCzNurW5CvDnKsEHPDTgU4qisNwHaAsiDe",
  "key27": "239CaVXnhscjCNL6Uif5wf49w4SwvsBRMi1yeABUE4ndsJDUddZK4GKSjobEZd2F2sKebL2qeFz1cp4SWMVWXE1C",
  "key28": "4YqBNpVRoTWEVSCYcBXUA8jS1iepKPED5KVCaQsXyWeiFgrmjBwRmXYYKz2t2Pxo1D7q9KzJjC5UCWQVHc8HtaZt",
  "key29": "2CQtFw4wr4zhWnzmEZPGXptADkfM4HbjmmVx9HYZ5S769xXPycvTkjagXwRDtEm7fXScm7NNBGfoA1RGX72jkXnn",
  "key30": "5FJpj4Fhwqi3orGVFHK3sK1GNfi1fYbjcBWycHCyk7msTC1DSyxpiEqpyCEpNvT84ZVJfAamDCHLzLnvMiuzDzh4",
  "key31": "2rnQzGZ7VZSqzmd9GvoxGxgP8NFSDWpF45iDfSAejRo7ncH8dZUX3npsy7TcR4EUxUNWVfpEj9jzLrutKoiNkWf7",
  "key32": "3H86HWVxfYha34ugv3aCnVDP15KocJsdCBze5YfxStBFHrvQyWKngsd7MLyYkfcYhSCJ6yXAmzYC13tXdh98tQcv",
  "key33": "5KWcNPMjsgmbmChR7bowB8rLoUjd8FeFEDjKB7hrun3MwhEctonfaP3f9Zmgfepb5zMTrmzaZLeRiKBL5DrTZbnH",
  "key34": "5ixeZkduA4gSfK4CBFQRe5N9kWyZUCVLqDgxr9tMGjeRh9Tp2GxZCjPoRC4cMGQ9xjrD1BbgD3S56xtpeneuxcNp",
  "key35": "5YuzKX1pcWKAicUF84xhBSiadEfKH7wPNLBnhKK4Sm99bXeZ7nLZdbDoSDqtyhJy9eF6EZB4YFXPv8GwWbBCpnDC",
  "key36": "58yU1cgAWcAJyEL6EEYAcZevvrJKyj8uw7iDkMoXcG8ruTTgkpTJdjjncKXoHVq5xHbBKJAVCCdeqccwVWHbVxGa",
  "key37": "3AgkVAc6iiXNHYWzCF2AFmDJSbva2tXq3dEnJzr1dSxeb8X3ckS3HuqUfAb1gDSFhKgSUXNXZwe5Rajqkhy8tRbx",
  "key38": "4hTYWSxziDuttgEuwzed3RTigXsAD9fdv2LMwhRrCAcBdqsSGy5iib7HioFkdv86fJ2DM4Xhvaibr9o4wyfcfXbp",
  "key39": "fvA9cLmkrVcZxSW71iuPYnWuGQhp9zJKGvJccs7Vir9dXUUV73ex5kJBDMeCf4Ho9p5VgYNHbH19Qe8DaUeufV2",
  "key40": "26Y8ZqGMyTX6HqrsPzhj1GH5JWTaX8kfWG3PKJvJnMdWa4JuzN2V9MYGkzNNheD6bkWaVwnnA2Fo6NJBnTeMFdkF",
  "key41": "4z8n53BkGN6q7bEv3GX3AJLztve2E6RgjJmsj1A1MyuCVn2cZdkrZVaupZCBD7rJNBCfNkuUuoG1bjATeAkaSBDN",
  "key42": "4ESns3saETB78mdTyRw79pnYR1YMwf4WRE9eCiVjgiwkZHhzXXWh6LKJWwn1e5eD14vqFAawBWh5yYQygKogn2PL",
  "key43": "JBUbBdd5HFrCWyj5wHYdVfCMt9ouynGphE2TRxGMPNfWiHPuK3n1Q1yu4gnZHLw8uEBwV36Zk12P2Woy7Pr9YZi",
  "key44": "3NH7toF2235ysm5ahXP37NERfd2PSthQM3sELjqCxfwEMEQ8ATsKrkV5wpLAxVzcQzYCMMCPH6BoWRrn9XA3eC29",
  "key45": "49WHaSVMVCT5Lb7ubyMTYeYj1jyPeH1FmiEHwHxJkpo1iUpgxvzymo4i6wnR8qCn8AWmV8XueD5GL1DZTcTKdJSo",
  "key46": "ngkGFFw2YzYWwevVoGZuLjeerBMuhRTu16NgMaNkVrdaqALrt4T4XcEqMX397B8wBvowYwkjMPPmdg5UxZEX35y"
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
