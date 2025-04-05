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
    "2aKFReXGYyVBx2JCviaSTHseSW9GoRA7X18mb8ZTuk3UczMiretvyh7mvw82TYtRWmtJaVE1dDimVtDr3RpmtLii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xDsDeC37Dcf3xSn7vHSeghsgx9L7ZAVs38jcyWVk4s2ACU9tj1Q29upqzFaM356kWDnpYfGXWVRwNmMUt5JvzjD",
  "key1": "22qXNHV5bMBaCAEvjpuFe1X4cPjHZUw8ydjTgJskbcxvWfWzXooFNj6xVQW1kwcVMQFwcZxxCpCSySDoHiJtoNDE",
  "key2": "2gp6JmemvkfvxorjppBufQoq9fsGTyYQUvcGEQGzx5WbSMGqdNp2wEnM3vsiToeD1q5bpgMudHQMjRHbXt7ym1wD",
  "key3": "2yHjVUeuhb4Lbtr7i3WAtYsH4LdFnQWMa3woUt5ebH8Q3DwNYcADAdLyUBBv1Bi1dCCFPrgqnKCv51jRbWWtrgEd",
  "key4": "4LZAEEZP7Cn3u3hvCRTcgDUdrybJ8LTo6CHarAY2uo6dERA4RcXD2Jm4eceDYj43ogGNR8GWJFGjkUxbprEjLwhL",
  "key5": "4k2wWnapYjqKZCZZz4rUUxSzGjJmZEQtC8tNsgPDW9eExRp4Fy3vSYXTTV3mFgVCsTgievzkzrtfM2m3TrCBq8SR",
  "key6": "4xHtfViuCoXacXKbsjNdNHChvDDcCeU161JTST4vDHgWhgBw3Bw3EgrEWNKSL1vjHexphfva3QuvJZ28hHemkztQ",
  "key7": "2iH8fZXCo9GZJgcYE1x4optb3YghSepj6cxzKqf66Re5zcgE3JQpYDzGJgZU7v6kmhYbKBh2gc5mGkiK1voseVf3",
  "key8": "23eWaHq4s9ifNm3RNEDtmHTLk1saNacCMy1eqVTQMmMDFu1jZh1DR5sSqM7GCdnmrpc2kyYY1M2ekcMRqMHkPTLi",
  "key9": "53vRHwZ4PgzrMDXtDfGSyt9q3M8MpMESVFSv7e3iThwwNCT1h2rHGWwnSy5tghcKyrJ8DAgb7gbxRC8HPoG7W5mM",
  "key10": "4xsUNjcd96cUE3geL67C6D58vjrLsAm5QFYHo9SPUju81XeysjKyV8kymFpCcPfj3faGRUdzrZGAHoLxwMpgDpti",
  "key11": "31yPqAy9GBcRakVBZAyHTicYKTD3aDtb32pdnjraAmSqEuCakgHjQA97Sq9rqTXeyzZzcAyexGkjjLuDhpq8D9bC",
  "key12": "iSzdcrmo9F1xAfNMB1FZit24qc4Ymysn9uEsK9F2iiWWNKZrUSeqgmXDNoccVsDg44e4TUUwiPYxBEENAEgA2F8",
  "key13": "ekWLevFMKh222juWuBNotMjvNAmwASnFuGNVGydhLmR8pgqHFjz7DwMw6A9HcjFRA3bJntVmdzuE9ywKrCVBDd3",
  "key14": "3xhXq4hG1rvfncsVdw7WM4jAaif5BCQ1tKPFhpGqpr4XBJGaHutk9Ds4Pbsf8GMVgfxqGHBL3AHRKFA7QdPbznfK",
  "key15": "61hisFeR78y7nPZME6nAjAj37uEo81gATxt3D3uzqVei523HazM2YWKc42MvBYmoEsCYhzphKc7H16GUd7giNsP",
  "key16": "3cem4i2HRw8iwMQ3ewYfYpm9fdkczagoHqxWXyVYWC1ERio9sWEGp2JU9vF1KiUZrwNdUqd3ZGWXG914gfX3D442",
  "key17": "227WUymKByVN4RLYKhZdAQnYQ9eThCPD9x9HKJURJ6Sss1PY1KrhrTXgtToCRxGfPNU1bVeHtEb7tTEa184kvDue",
  "key18": "5tS9StvMqqqHQaAp8T5k7NfDDPN7WdVdYUSH8a9vccrdfBrmLMbpNoigrjUacd6ptVgPqHfSEbHcKpiw6fMPFvRc",
  "key19": "3wvnccZhd81YdM845B734Th2ukiDZyGyov1nk8TY34x9EEx4DMLYBs4pqiHnevb6hCR5fa5yVsvzoDBE97FNxQPE",
  "key20": "2EYuXk9k82KH59YKPk3FGT9dt4tq472tSqucf8zYkzqV6fybXF54s8FGgYNTHQ2YW1GZpWAfsiWZ2SyHWVfTnE6R",
  "key21": "T6BM4k1TV3SF32s8DWanbeLd1KuaWnYxUqnVESN41jLDQ1wtdNk1mVPbbUa3F5TWA9j7RXBnkNMghqJUSR1Y5Nv",
  "key22": "2K7vT2gUmttZ747MyaDesKBkSddBVvc7y5EisKEpH2NVj3BYHwM37VtRXbxjCzrd3iYXPVouwnkM7JoFAp3RYcfH",
  "key23": "3za9FT4WxQmP5r8zgok2qhCqPX3kAApRngQT3nDfZuJqCSsctd1wNwhrjymBpEAkQH28sMpTJzdnYDt3kSH9Vkgi",
  "key24": "2KQ2KJE9ZQtaMXuvo8Ywq2xd9u8TV5g9XeVuZgeCV3BAB9gRgvZRYRcbRLh3abGHBPHifRbQraCQY4QzcA6W32ns",
  "key25": "43tkJZjBHcNxnvRSVNCNGiBP7Btn7w2M4R4MSxnVfCf42KLxUCoxzMN1VqGZg5q8cv6cQymzJ7AKH3RNr9qQwMsn",
  "key26": "4WBSrgBkBhh83a5kdPgF9RDcVfzcYLrBCQ7QCrmQbMRuSb3wd65toHfpsGRZNSNoMho9vHLmoTaqAM1v6sqKemNV",
  "key27": "xGDLqFjHwdukXYnXi6S8vik4oagujYTNjWXz8EF2CXvNx3j7F2xavcTHfoZ3ifaXen95S3CD3zCYgn9nzFxFJm6",
  "key28": "2pnMuytR9jdAXvW1NygKhCWNeS5K99Cv3xNQ5M6S73BkTypie8s2ru2JaeagLBcKAoiHUpXUEAyqxx9UCU8Qd9qA",
  "key29": "2CYVNH2UjKGEYi8bFD7khAPu6ReHR8JRQMkLCqLzKWJ9trwQfaMVCQmSB2cW74jaVw3fAcWipaYS1zT8cq2wBNNN",
  "key30": "2wA78MQiDCfcwYyT12UUcNncPQ6XDZhCmNs5Zj3CRAtVaEeWNoPbhJgmzibouPh1q4cwDJc6gd7RSwchn9dGxhGu",
  "key31": "4Pei8Wewwsbqg3WPm1NYhzNREFzbLi4br7o9R1qETc6i78vuz1QCRoqv9t48DaVCTPSv4HKPHi9k5xXB7DjbYqT5",
  "key32": "45nFzmFdKeS8Vxpp6XaF5jdMu7EYURKwW3KJGvXZFjF9eHJYpQ9gbt2HQaKrwnrTCVAQ9FvwLmfTp7bTLB2wKGM",
  "key33": "27pJX9PVYeEMVqTQQAzkZp14rYidPijtJ5QVD9FtvopSHsTMVCqhTFB4As578hGMGNnoFLMRj5FLRftjCCVs8gHy",
  "key34": "FwxuGwaBjxXEA2SuSCDJjU992wZz6uYfV3i57BV9sxMTvPqKx2zdu2jbLQowPPSuNGjHkdsuVDat3HrM2U32Wtx",
  "key35": "mtjQRssNDqRsD6qqNZQS74ZgUHrvhgfwgzvraBfwPsQKxpKn33mhoTTJgtJiJxfZ1jMsF9GDuRKxDPFy14mEs5Z",
  "key36": "3SoejEUjnPrnC2JCW6upHLLdR9kyFe5jteqqQnouqKGvNHmLj95YfekwxRZdHE3SwUs3uW3UVBqFMSLFzXPWx84R",
  "key37": "FCnQZpQEKE7aebcoRz48yMY3LRt592yNBfpKfefogtcj8Ly6SXGD2SVvDkA5B3P3o2HDRxCgAdwdQ9Jr93WcnJF",
  "key38": "cotUV6gR6H38Ns4BZ6KLW2B8Z6eGwVm6hfxoSAh5YHXX1U6CkS3v2K7qfqyiBUmZj1XwwNo6s8tNpLrFMoZtuDj",
  "key39": "2pgKXtsoACXJpcRWTJURcDzSN9Sn7XacSzgBij166AZuoQz5hEoK9SPNuRCrETNywXTfRwmL845MnDV4DFDbYALa",
  "key40": "3KDx8L8mmiaXCTDCL5BFPEYNwaUXg6HUgyT63eaZmWBCmraD5KUjTmSMckB8mFz6o8DcS4BQcNmrE1Cj2PUZ3jdA",
  "key41": "2K2hs7dtFW6YYi76S8VGgdWT5BpxefFnKoeqPKpVYKoH7iyUa333tNnDZkAdxe5SCoBVdakhjV373ABXbTG6hTtz",
  "key42": "4WNpTpC5sJ7ayBGEq27KkfQ5f99TE9UEudW6DKxizUoigxMQJev5y5V66U3HA2mv26FMbzBSAQHzBss8PHnmvC6T",
  "key43": "2JxBwLwpxoDv3csYDfAe3DmiekBqpwWxkdDVeMNJ6TVKbjpfbpBm61mdz9YdkSh5wCFB5Ust6A5ixbgvg63HwFqu",
  "key44": "axG1ed4Zk8bqkFzMe6Bjj2fBqKGRChTyZCzxQZZjM6myhE4uRFuEZ7SuCv2KR3HbmsQ6turGYwLcHqYH63BqAp9",
  "key45": "4r25JZ4Wc6J6ykJrEkoTTii7vHbFhXqCqRYNvbR3wqVgogpRFYZxZUv2Q3YJFA91tB1g3ssgpTDEmzbFL5Js9TJN",
  "key46": "3QQvnNUJbBwrFabAMB7ag8P1i998JwMZiSUVDN5GZozq8dcXaVjHFzhZsBDSV3LCuMVG11xmvjcAVEXLGm5CL86u",
  "key47": "2qdZRRBGpPqgpQrRBU5njnxQkxoYtVTYymE7rKmreZTANhQXrMJuTiriYVSmAziFW8mRYdogBRacJHPhZWHifFY4",
  "key48": "51iUVtwSvjjQfFCFgrFVKSALVKzMNZARidWvHorz8QvWPQvqPBMffMpxa7PUK4q6B7PitoPLkcaE9KRgpRc17fA"
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
