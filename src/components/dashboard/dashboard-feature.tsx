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
    "5BEdvxLq4DV4RxuCTBDSMM85dbKnyKVHySpMmHd628v2Zh5oB2RGXHzohrT7C1WZPagNx8k3chGEMa2KKTmsDqAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MHnHPT7citxRqF5niY1ZdzmdVpdbFb8fkeigcpM9MpqY3DUssf3yG26tRie5tk7vbXQTWHqiam3qqRs2oRMNhd6",
  "key1": "2x6qUVFSUerBut7EhTdayAdbvvTiAgUiW2iWqJywBNbmoovpXg11gKupD1YfpyjFCHMbLSwaj6GditTDQDUAFNaU",
  "key2": "2bMFU2gFUpa6uYYHGQZ2o1tAT4vTF7uJrLYwrZu2hX7ry46jfzeAYxSgZxxrVR9t4U4D6BDvXVRj6AkHxggUqrha",
  "key3": "44PJhmLcU6yWGfbWf4mJMkLtBJ8B7YjrnHmzZpRfxXbdVd2Tiq1unhPoYmD1f6amL8uCqohf6FyVdfx4Ja7M7xyC",
  "key4": "47AxrVn683QMi6gJZP98QSZsG4CsLxyj2vQeDiFoz95o8upkN2CfxDaGVSEgrbyqonZvoSNQcpD1YYEft5YmTne9",
  "key5": "3kFKJLEoryu9R97SUwJYc5erMgXcFAoRkECodmCxLCW5w8rebSqwnXGMBtSQbwB3a7iD8mNCTsanrc8hvV9t3D4T",
  "key6": "5dnDUQmy9fSUmii47rNo2g1zYcCo5itw8JRpbN2VCiPThQtykAsXJEPvnM47SFgNLxmWTjhnSVopMzj3a6yP1ajr",
  "key7": "2pkBYnX316rDy5BxA48hCUFXtwPf4i6tauBoV1sfsbgN4zEhhUDpLB8f4ZrHV4UKTCXKz4wy9zCgpsBhx3JU8Xzw",
  "key8": "5PudHYZ1uzVPgVJUKV4gDWkW26LvuzxFYXZpwUuDGhqdFHHCiuFjHigKUT7FLK1dH7zj9nD6fFZCZV3R1wXccuNo",
  "key9": "L5GG3Crx87dCK5KeG3ksz5H6tyrF31Rrsb6nMWPw2YHetGDz6wzsaFN3LUCuRFprRSxTd5hBud9RJFbtvDfGQRf",
  "key10": "QwfdWjuud5bUxLC88WKv6qLh5T1xZ7MzYd6hGn6kyUb4Mxx1Lzx5zEFbERQhkL7y8mJg64FGMgrq8GchLsv7rdm",
  "key11": "yHLbSLFu7LGoZnr93i6X9Nyg45rGqYv998dL7nqrs72E5d9pmrcdpyfxuHsFtCPms9sH6nuz1pgSESosVrgFS4C",
  "key12": "5TJkUh2JowEv9YCJaVYo9T8TbGTLHRLV7sTyZUg4W8sW5ifeHV6Mfkdeo32ubyYVQPgxx2gLG4fBySqp191J3rNC",
  "key13": "hVDqui7drk9G3M6J4UaesFcqmDgTLHmFF2SJ5VSFWouSokfE3LmDPq8w2YWQbhrrc8fXvKx15myqdpWs9mvrtqx",
  "key14": "33psESVfFdP4T9n1x1DySHU1vAJhi5HrwpyVuuZvMdBdiASKsAtBUybCxdxCTpuAQk517vEMjpLBzwJX6z73X3yr",
  "key15": "5LoKf17RyqrFYttJy3nu91TvniHKakYKSC9LEcx82AT2aZY8axPCYQvVd1rTRR48F4ibk8BGNW6bBfKmMffs77DH",
  "key16": "4sGg2xNr9u6vAZD5x1G55NHGgPNXdx7M6pp1pikcXW2BKL5U2ErjMZEaHgM8AruqwPweeiZs2JUoTr4XWwm4zuBo",
  "key17": "39Qq8sRE1Xh2gXLToNc794KaRDhUAbPKCNZ61bT2M8gAzAd5ZEJR74HV275sohubjUfKjcNMN94Mdr4KRnzh8Qh5",
  "key18": "2mCvvNCVcZAgko2HsjKZjAKsU7ju8MTQv8fDUqqi69yWb2r5jr1YvQAYuEmwh1Tpav9HbT4uiT11zdniiSntUGgZ",
  "key19": "9cdgjWMgVs9REiee7xDaZLhwZZYubnA7jN7cRbrF1rCAMLwULW53diHCeiKFreuiFt1jKNL6WjBb2U15Jix2Moo",
  "key20": "2tnjN8rTV8NZUgYfq8h85Tvzjx1ydSKbqBAebKveQd3rjDgofBL42iG8cqknm1g9krYAY6Y2gprLTKCHxHjF4HQA",
  "key21": "3787VVD9ej2pA1UAastjcYPfpEJhh83ZYDoaYernSZ8zscYN2t7cgQpVUFJSSFwAXW5eGzQ1xSxiRSsvGo7iqpSV",
  "key22": "3yXwLeXkgaB6gFa1cS7KDBBbqqbHiajP7AU1Eh7JRNYqtqAKdsMvrLk4CeX1H5nKuqJutE34GcdB6DufaMuQEhMN",
  "key23": "2JFmn1bZxK7Dp9geniFGAcmRiZMEhDjionS3QNbapT5xKkCNuMiG5yzp4Yh3WK7CecpjKZHPVU1jMokg9De3kD9L",
  "key24": "2KTjyQsSYMERfNHNngxiujvgJh1MzUnT7zz8Cjqa1BKT1JP9RMJSvvKzVSGheM8EqQRxQnGv47rLkrZAhcgJXMQr",
  "key25": "2iXFsvZg42ehJxS7CjcKPxuNr2AmzWzVwU7jPs1RF8AwibXfrFQqqA9xL5dk6weQA9temhD7vPAUF9s92oiXcmJw",
  "key26": "5cXvbpSBncVfgFnuqJcQVLpjCNkRSGTvWHn8hmAXhrmVuZ9cuTM8QZd42VY6h3NY8UkzWhnXG9VMX6zK6QmPaPbB",
  "key27": "4QUxBFUgx5xQZk62eh6Gsrs2tYaqTauaCFWMgt7MT4x4xTXdkDHVaw1ddNe4hQbxj9ZeFUNjVhfZqsLmQtQ5xYuv",
  "key28": "4j14AV8eJFciiubQRBquwxvL8qsoB6JBkYXxpKDNdUpsz7MabbFajgc4zjGPW1vHjHg6RdmjtbEpKKkxPcJkynxu",
  "key29": "46HVFSNneb7ewyfr4TUzcoBZscP3JLjD7GoEEcak5rtG68iFA2RCbPhxtTJ3RLSB92YiBiUg5rmRXxFV3sPdMU2E",
  "key30": "jgJNhRasH3eAxMQMMuuqxcR4afwgi6Evx4LfmvWKQpHvhLSftNaTgXsSEcbkRa1QRiMf4yNMFMg3C1m1LZE8mZh",
  "key31": "3nsgYDa6H9KZNhbHLCszSKRCdcyuMQd8KGaMoMStdyj2pSDF41DnxSNVRdmd87kxzRzrS1XoVaLJnq9RugP4q5bd",
  "key32": "3PHuhW6MaF3ZXwnSphbp9ro35ZhCifc54tYhxPGoh441QfD7kiLsDfQbZvoDxB5GaFfpBdphKDKy8LS1VCtzkRNa",
  "key33": "4UVeEaDi3CAJTxGKB2Un78huf7A7UZGL4B4GpKE5AVnbUgPTTPRTJdQvnRnWTVbwzB6F8vdtTigxR6s76VR2Cx1i",
  "key34": "3PjxyYAjBH97es6DUiZjnCjWhV7aE9fEnWruGE3YQVLYKz6nsuZPdK8Md4bW4dC2pdiHikcpzMK4kK5fSTh5QPJ6",
  "key35": "333Tkk1A2PyULoPU6CVwGRJ4RnKNqVexGFFPUQDUhB5wnU3nDvMP6Kx836n2JkiFgiybYF3pdfpsDGssYb6hmq9t",
  "key36": "TdTt4KVTaXcsy2JLRWa7ye68UmgKiiDyEQDDzwyHcG3XmfVWjsLUt4wg4taURiDF1xwxqvz6m8aYdnd3MKTMUJY",
  "key37": "3GHQiDk8k34B55kJ2ZMwqQViXRmcxnUdHuXpdc8U8i1wZgEEDNbgEWPYyAdKrXf1TiJVkfQEQNsyUWfB4DEeffJu",
  "key38": "44V5cREy71RbagtbzjVnE9Jmsj44Deb9ixEPTcr5eW5gHH4Ai8Awj7fQzqdX4aJbPN9nECnM1abm3bkqMLTzVGFF",
  "key39": "3fn9FdmnzuDDwK738PUv379aka8EAWBkBqtSaamiVmnQwwL12t8JRQ79Dhqj5LecSoHj6iorzwdCft51hFKgFfyk",
  "key40": "5nWSMSxqRrzQgarqeWiffLWp2YGqN9RyxRauff2BJNcTtx1vtUTLMkq9iCnVec6vDKtzrwtvrSUcmF7MBY6tSUo3",
  "key41": "4tRPHiFPFoPgTPZb3urjwtW1M6RKu8ApsZ5LVTo2VmWxeS6EEjLrK6uRg2uhoGxZvGV8dhJ3HA9wxJi8ZGW6Tx9u",
  "key42": "5FEdfcaGA8CVsi7rWqKtA5AcGQki9uwUZDFcwv9h4F572fxEKtL8mnQSGVtCcQvCUc1xsn55EXotqh6L8mLbwysq"
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
