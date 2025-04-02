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
    "3GcpFSRNe5xV54dS6TSPfHFjJVFXuX2YqtGEvxLhYFU1fEREudtKMJGpZ2pxsNBZ2sMVKKrBKhh53nSJK4J5xdTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c2XkB2vuQrckD3eNdd9R4PLxjePK1DuXt3XamJxxFt4mt9vnFosMH4m89fSL7vYoAxBzUTSJhNdefvDNrK98A3V",
  "key1": "2oXN4qsZiRQsPguY6z9t7a3EnvpbVgv3xaJnyYDvdD5YzFdvD9LD7t6Hp22wBjazXorqi3yzRUA9Vt5t4n6uT3go",
  "key2": "5vjeBihKBrhX5EN7QfKUfVsLtewh4KEKQLVW4JzguaFTWUKtQff1YADzZUsNB9rfJ7UQTZGoF2NB12z98HoeNKvK",
  "key3": "2ppXm67Gyi4AeDhEtd2A49VZVTcqBdPY2jP3jsTLf25aiTd8SgJ1J6f7tpsDPhjsJX94uat7QPBELNK9ip7vt37Z",
  "key4": "4dKdBC3pHmmBA77ypvmJCXrmKgenJuzt4iLGCRSXDCKiP8WbU8awhhydNZbAfrvhFb5Qx4U1SoYkjE7ZYBfM7JXH",
  "key5": "4wgGtik1veuDQfMNE6PPTNvpB9ASUx1JHieUE75qaTQ4GpLKx1GGrLFJW53Tqrmoh5j1J7eeDx2Sz2aRJXkPJ7At",
  "key6": "5HCB4Udg1ckFBR4S99V8WQzZiHKxLd3oBFoXrmw9FsexJYjVVyPjRxhH8JeHcwTpatrZXUm1DWUX1H2nkkQMcuBZ",
  "key7": "WBMiq5nu3Q5onhtieomJ6TxUntx4L675pp4JaNu1naLSvtKB6P1BAFQXrmZw4LTK8j9t2u9siXQTtF8F9VVp53f",
  "key8": "328ArFzjaBJ9Vcnix4rkYyX6xn9wQFQi5nKoZVej2ZCz1NTbfn5irmHkqNGCJvyj2U9CEf4hTCc3ag8THqrGEz1F",
  "key9": "e5Mvy3fHo2QaZ6SmcMC4Afz5PCerPFsezgR9xPBJ7drAyfoQJUgTBvV5vsPXAbDFZNZ1KsmcNd3kvErnFDK99o8",
  "key10": "3c3oJ3q8wY5u8qkxNqtgi9fs1cTXiovha9eVR56UrVeUzzSYqsewQK7jcJdoko3tGXyzJoRjgSoWgxtB3fXiV7PC",
  "key11": "57BYbAZThhroobJzH39yYKZ3A81JLBxsttxf4NfnVhhxVx9jyhLNK34F6FVevziyRw97VsFjRpafF5KvNb2gNy5z",
  "key12": "37or5zytes6RMaqfSZQHsWKYqfPLMQXte9oYhYXZ39NwExRsswaQu5jtFHeD9b4xK9jr1VeUHB4Y4pViYeWNxZQ6",
  "key13": "4wZS5KY4U7wMbwHvPfRjgVoRXAeDAGjxSyevQVYguRm5AFiauPxdskYQ8fHpDTru4LX3uj8tUH2Nci3dK9gzt2Yt",
  "key14": "4MqozkKGmzAwFEaKrW1gmy9AkpiwQS9ju76NHkzyagShfwqg5e4BhKHC41CpizQdHK51mBzwhG27fzSWYLNKvrhQ",
  "key15": "3kbazZXdKKUnWKcAcFucPLNHMEKF4aimUg46xdTr5gu4pX23dxRbLQZHodkqUdGjhK2FHTwzpkoVMxqZUEMbnG3W",
  "key16": "5DwTTVubzgtfpTkTowXgX7VDKbnJemttJUwbgj1EUDzZiZviGDfVRwjfGfRFnqTePTrXzGaZREjf6ATNYrzLnsrc",
  "key17": "5os3KgQgam9XoVtBpWmKCBk9P2TnAm1xoHccnBtMgSyDvdkLnWgzEhTiBhZzM6yxLi7gKR8Bh133yqkpHamAH5gK",
  "key18": "2AJq1KrMegbx8xZ5TVWFhZvqttcJtd4XSfBMWz4mxBVDzHqTDYeC514FnrZ5jAzj3mpFsjZe4QDrspXQGVshf9Pj",
  "key19": "2r94FwL18MawUGHCjWC8fHrhmPeqxAt59oLDyUnhhpbxMYRVzxLMjZB8jpaEHCJum1qykgvcaKgMKyDD386rfpww",
  "key20": "2tQBDwbQvUMhhPyZ2RRCV6vhrVvh6Dy3JKyq2Y9Bg5BDn6Cw1GiU32zb5nBLcBp5yj7UdBRemCeVUJ8p8Jmh5z83",
  "key21": "4EubMY9vCtmqb3nq4TxFdy5UE4mzptbdj2qZRNyuLHs4sgQMeSmxJijkUDk3sUgKd11CLztWzmTKCLkJSYpWYf3i",
  "key22": "3F2XojLiidQw3XYinLSqV3EVxwkNHH5sDbiyvU1sjVs57NSKgaA4jyyQRzdb6GtmPqTnvSLhUfMZN1UTovjh79wV",
  "key23": "5LNhfvqbnqFggDTpuBsCimALMetRXhrpep21wHbJ2uiMc5hLrQYzY7gRjBjrgYRgrd6J3tbJPgKYUVScUUW7ps7",
  "key24": "aDJtmR2CeRqWs58vtSMVkzckfgmfxfdW7U7vesSEY7qq6jAcGRfAdZD8vBWoKaHXLa93uC74A5ZwDTdqLShsXfY",
  "key25": "41Mbm3hf5sMbeSYUWGJN4eN1G9Z5kz7gz5Bf3CfhD43b87EARg94aSMG9vUCCf6pe68uuDvPXuLKy6ZQir5fodP6",
  "key26": "4H1ZzqSW86eEGLp3i2xozcg4XXzzHDek4TckSZc8JvrF1sMbJ9iNR5rvzqSAv51KJAZtN2sHiihzWKjrzwNu51YN",
  "key27": "vuMco6zoDR68yECcJGEpPyP1Wk2a2bfgFRKdwYRrfhRhMZxo8E5wGTYQmDqPvAP7ruoJPtFjnSqZriiwYFBQ1zN",
  "key28": "24RPgrmhFVAtjHcbeFwc35fowjg4aTKBk3ciGJvjAJhC779rZ5fqipNmxg9UdaF2XBJ6upsYHtUFVgRgscJRgg9o",
  "key29": "4pij8pG6dMdHhkPTRPqUZCwnLb2pfzNBzyni5qfgQ9aQaRG5sQ7VuQJiyLPgwrG6W5Bg5Z3dzHUkkdaMGwDD9Dse",
  "key30": "2sC7ifutkjdtxDyFrXiFxZRgZyJNdtjH1waUcRksHEGXzsZ6U9sWHWAYpkFmxGvmcMV5PC6K4x9rfwcwaNrTXhH",
  "key31": "UKK6fM9AQAzVp7TGptXoVVyiccxciyQ82oKqJhtMPvkkvsu2gmB8ugbkHLYUBnYRgTdPQintvRjch1aN74ea4NW",
  "key32": "2xW6MCVTsbRpj2tboGEoSBVviaaxV3ppdKMTqGVNwpLyAyUzJ6vQfQH7a2XLroAiuKGpm11nYCxPP2z1N7zVBUKN",
  "key33": "4iAGy7uHZ9jBUUXf8D8mCCqAJAszX2Y41k8QG1zLaegvvUgRtpojDtSKLyAzB9S5f3SQRCS5skrednXfmgQrDkcM",
  "key34": "cz5KiecjhvBcpSRd1XoKDEZ3Y5W57zVLQXSzqzhNSyRNPhPdYTtjQy65CnqA32s1ZJwzkX3oZZneV8CoqQFREfT",
  "key35": "amGPARQQgVXV1SRxcSbquhsD9mnueab8sJiFqva5DHrLunqJ4Dyvj4QJAVeZttBcyu5Jc8aHH3VL16edFHi4dJw",
  "key36": "4jTNZnErDZXHiJ5qWXeAJ6Qjm8i5d1qB94JMeotwmtnYHXgisqTEhBaKpBHzeDL8dRC9WxWHdcQ6jWsWEqRHEFdz",
  "key37": "5ZgoBvuKUgDXv6KGEvVh6zihVCTF9wpwmsyTisodSzK8wJfNbDWbDErcCKxBNUAGWoDoLcwVT6f7bAHUJBRQQYUq",
  "key38": "3A2EUkTnNK6oQU545eaevgExXwaLNsGjJxEuSbsvb84WYPGxkxVnrshqEKLnZ91SRU9eRcrVc3SzTcf3Vc1qyQBr",
  "key39": "eGECo9T9MoMLuEhVNij7ss8skwFKkUNrAcwENRva4zR5gpao1vLm2uhb3XaWHHQhiE3U4fxYWzZo37AFGFrEWYc",
  "key40": "4FCCQ6JZfuX8uNdzvcxNyTnm5XKRT8axv8ePe4BHRN5DTFHSiQhAUWNsMvZh8oEcS3249T9W5uvcUGdno5chJnPP",
  "key41": "2FzXoERu9Vi13vAn6QGKMarvLrrnAYnidgRMXcaeSSTkBYXwLdxaMYK1884gUexKKNeAQVvJnwmVCMeL1TNSZxF2",
  "key42": "e8VYCenLE8b47TXP5LQ8GH3PyhKioFzD3KDMTdpoxRnxEE2EYc2KdzSUuECWakmfNBHB9U3vDoiNGyPBaaom35Q",
  "key43": "g3aTZmDpQZYf7HrkLiJ7yPzK14s8LRoxaQzyTfveSNDT7e2EcC3TU7wHyHET5iKbvTb6TVJPmoY7GyXbCNbU6q3",
  "key44": "27E5qCZ3wuLykgHWYSQ7jihZ7pho37zntqNBqjwR7J8LMqPmEqRr2p46QT1W8XxGPk5sEN1CN3rk6aR9dxXBKFTd",
  "key45": "2oPgSRKuXobEzfVWn8Edma7omHbobzWRcjbMEuwVT8JzCht3RiQYoScGBe3wUMAi9SAS32pSeNSWNVEkUhmqzrJ9",
  "key46": "NrLEatpxE87Lt2VtA6sj8hKohjru6tw862x4ph5ZSH7sAVdtYLzWHUJ5s8NtQHczHiafALD8QiC4XsC7YRYpbey",
  "key47": "4ssRa4gLRcLV3EjYTL2e4UQ6tUcuscp19nfbFkhgcv6rGPgEkaUCN5bFsnoRa9FjWXDoG8P9Zub8ZJwL49vL2P7n",
  "key48": "5hJhgSjWQMcR9wWTpHG2PQq5zRcJK85NeanC7nL4FfmRGH7P6LD3RWAmf9B4FcwJMzCSTzPTNAxTd3AeTn43FTrD"
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
