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
    "YdwvK8BLp1H5xFXtsnRMDjBvm18Wj94y1usgTSQAxFXQUjkJAq34AjL6v1TS76Vpg2Mc6K5U4WNjtjnxDtvsABC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rZ7G3MaU7Vu8jZYBE8zhUErpXEc8mqEDDdLpGKbnsGzXkh7bMTpGLa8c2Sixn6XqAKBQR9vfNmL593sKS5T5J5j",
  "key1": "2odkqNqN5yhR8XNZSbtASosDMoPwpdgWMeJRZXtmhKR3JMQ4XJcrijuPbxLc1j1R86fdxSSswQB1RwPTL7WgZ99d",
  "key2": "3rib8teRE79tu2eW3wdGFSJxCdKBfgc4Np5D5HtrrXAyGWuhBm63ZbMj3Bcw1cveMR36KzRQH8pPDYNU4xLnPANN",
  "key3": "3mmARnbnLSShstMyrgD4HKWLgrKvCkK3yvyFutRFprVVWC5ez9w65BiTn8SPSaHf82vJy2tYjEok7SRw8qB4uYgX",
  "key4": "3UL3nh9hLgkvoFhip9ZHXzTScvRt5eRbyfHep7iEnmNXtQvqsmWoe2h1D41s1GAK8tTRvAG4C6bcFZsJhEa96GzB",
  "key5": "5GM9BWDUK8vUY2QFqHp4n96ZktmAXPnxHhyxdoinRe3ru42kPq4pZeyBYJjG8QqiRurDvBtmGGcGriCk5HUe4eSW",
  "key6": "5PhXXHcE9Y7mdWQkUrmn7ekaSRRPcMjzmw3KCp2RrBa4RJy4icQgRXFvGyBnpNwuiTtNLJAvDXkNtyfA69JPMNjF",
  "key7": "rYRfjxWwY3XmjXmmmL5M29b1hKBNE4pYEAJYxSyMBghsmcsDWwiGeB5AwtcjumAGZEUWtyJuX1Ls1S8CC17AYiU",
  "key8": "227W1TWKwmFGe3gFaSSSVuGpgeuCEbmTAvifuMphjYSUdXo7Z6kMMd2ZAFC9cn1ZttTAQVn7LRbvJs37z2Xzx46a",
  "key9": "4uWXkD3ByoxsJYJm36ENwziR5pMSgm2YkHbGetPnQSq4a2mGhPbEPnV6kMa8jCav1AhEaCbC9shkfNExvL448ft7",
  "key10": "5zgH4KHhc6rT6aAJS2Tj9SSe7nF1HEERB3D2eCPJSWKQ3LR9E7CWoczyE1iP2xasqojwysAsneBGoneuEs64Pf3G",
  "key11": "41KTm2uEwfz7WgwYaXDc4ZnCKiQ42jXU4LZ9QMxvFnrqzdLdQsYknvyfJEKhjCPLHm6tUmCgnCA7c1HTs89Cg1H6",
  "key12": "3tvWZKD1tC9m2UVrpL9TnAkPkzqGQJCNU1AW5miFXeB3fHk51CVNboPDDh8AFFNvR1Ee5da4atnvqigDUDHspKTo",
  "key13": "3y8Gw1MfgL2R9Hs951gAvcR8EvnrghSmN5Unvp7TZGPRzfa7X7kbV15cgM9MvMhuAmb7SrpVLRxVGLHAcm3ruUY4",
  "key14": "5thFVh9vrCedypPYcqSK2NNkuVWX6fVW6k9eXXSxw48qSxoWyK1X3THHYBoAssFRHvzMv7STuALFxQ5cKwVPD5LW",
  "key15": "4yL7AYZRwjqkSmv1w5PYaLdjEYt9M86rt53qwdXEPc2DfJw92Vnwn9GzbYtnnbvVSUuxGyUxWZUwcRkixNvrcSg3",
  "key16": "sDiaxq29Cte3wzXGbJk4VFfFtKhcKDiYzyhLkyh5jRUXZJfUsQQjRNZncy7XhUtoufFzw4EbfMKP9QUTrPU9cdf",
  "key17": "1br9DzGV2yo1roE9jxTv9VRdvj4sLvPtR15zLkMXGyeb5XpU1QYQwPGssqSkN9RzjCNvubr7ntr3ppBbYpG6vnY",
  "key18": "xHUTFQqDtJiLMjJzsQAeZgeEPJaTnEKNRkM91owJk9cgZeASYJLdrp4LELSifqKXQdqLQ66RwfNjE1pmaPBxzBT",
  "key19": "3whifZsLD5YA5bN3mrhDM8xeaw88RZCVkVepw56UdSJazF6dojrecF94xTnBqdrfHayyzkRnDvevdZSPBdtb4Exv",
  "key20": "4x3WCnejF9YdES9Xrc5yKhRkYSR6HaU7EgmvpCyoqvkaBuXgbHQCpMgn1djDkfKg791yqrDQasK3wmn31gd7uPNF",
  "key21": "4bnTddUACKcQmConttgJRQtiYayv1y9hevbsE9X66hGYHJEBUQVsjMbm65U7MQcSjemxAw2EbE9NU1kJxgnwYhEt",
  "key22": "4YzNFCHXARxnXXEPEiFTnYuV6kev7uwyvyYGNdLf51CPeKPvBLVcgnB4m6j17a8ktnvTxJVaBcnXFHA6JQmEfeLm",
  "key23": "NiuZnYhSiaehrM2qq2ijLjmTndfcDHLifcsKmg9RUnFcuTRgG151kejgZgAwfHpRRwzXkycMtNqU9UESDncZvg4",
  "key24": "3VR9BY67d6CTAt2f3aiC33DHGL16f5V3cYDVEk1amGxCcpuFYJ4XDcs36Rz48eET9vDNw6DiL9GXp1s2oRkYukG6",
  "key25": "3cX84U6m7fVtpQzc8NPyunZRYHj7bk5cNbfFL2YQMNj2fGgi36A54Ebr8ZqNzWQ5Cp6qPUUm4u3mo1iAvR11u9Gb",
  "key26": "31iKd7YgUiyF4c4sErTUDLNz7PvqeCM71qmtmueCNZDiE3CX37Bfy8Guq42nAeSCFQjWTZWKcnQDcrFFqvZGnjSB",
  "key27": "M7DAuVSjEPDfj53ixVHxoutSTR8BVw1fvqdGe8maSQZn4TP8MUs5VyaTiZKfXgXSJun7oMgnki3GC6euzdGPkMS",
  "key28": "3jjcvyFRxVHsFCe4Exqqe67NmmMzGqR8967VE8P2CdtD3cbPJc93SrfyRTA6KjD3ZHkwAVBH4ZbZYBM9BkikC2dQ",
  "key29": "2NhkXcq8EEHjamECeLbrQTPUiEoLDQmDUDfsDBCkgGZBG4Zt5vdFBSqhBgCpQE5Mi9KBR7D4mViDaAHzsCYaCGkU",
  "key30": "2eJ7zAQmTK5Q9VHPzNve72Eg7EwBjoknGKsSFBFKkEXJxVumQAxAFw7Ep8RgQrDG6p57npmNugfms87zaktYVXXC",
  "key31": "4qcAa1FEeHUMLWYnoLv92fXjgHqkDA3DQi5Kp8n5xnv7D3fiHxzQ95UZoEbCoGr3DejsuHzoMyQEfGuU2x5gqpPV",
  "key32": "3WqRKaX3M48rc1vpJvkDthaBCvqD6evQynYMSr19CwoLk4xaD21aZkqq8hJ7V6DnAzbqdBkfUtd65RPFgLaaaBVF",
  "key33": "4or6gdBgjPiD3MAcpnMD5DjXFqiJ8pcJNTDMQARhUtJ61eKcfFxKVgekdUFu9fdtw6sUV1VErjZoiakKgb7Lx3ZA",
  "key34": "2swN3DWKTmeeJPDMRMScqk1yKVaoFnhgHYHgGvQjQXnRqJtJM6eTMnD45MQx155oepUzPNXxg9AXLkhizxjTJXxC",
  "key35": "2v7qjUdAx3NhDU35H5bz5UjDUSDzgRwuLARVk45dhgusSoebMNSEXBjR3NdNZ8EXb58BqZJeEiRsT4mNvgDsL52T",
  "key36": "32nNBPcwunadb1aHAi9Tje6FKb1vpMDZwbkSA9SQvAPeZAcmZMDuYjcKkYAAX8bB5zYtvrsn9ZZG4ZjrwN7WwuhY",
  "key37": "5KxwBezTnYdYvPVGngG53dHTEjvz6phX6wPkjmaKqAKE1wFzqeLZbUeTDGJ9doHU35fCVm9U4aqwZgS5PrXXBg2R",
  "key38": "57Xco8mNJ4cdCMoVPrDysG8r9PHokeMUKUDLhEgzewgVT71j4F5ZniypC8aBjtbRZqe91eUymMPcRsZNjYtwjPPs",
  "key39": "2eUBbBfhdryCu56Vn7arQe3LA4DxQeznd1aVVo1wW5Ej6bU4EQMDti9PhoLpWZHGHTKM4Pa1uGEbKP7585nHWPhw",
  "key40": "3WxYoaNBcYgB9XuqwmmDsxwquwGh6CaCC99n7cJMjZG8fLosfaURcnqhpxW9EJhQ2Yxqr3wWDKNnnRqMohGDEmgq",
  "key41": "5TtSXuvepsJTzQUvuLmpZyBubD5iveJMwMmaPiGoEfUQanVh5ackrvwx75Vnh1d6Vo6m16SEZJXTLLBLc5xJW5Vr",
  "key42": "2cyvV3fVGqe8AHTgNJa2NajJm7YoVywB1S9vK8zwy84SYJLU83ftrjiKHPDKGbPkD4Fi6E6hm5sHBZAVuw8YY3Jn",
  "key43": "3LYNwBKAqp94DCVWgkdMt2NRFdkSpACoX2ja6SDsSNExprWUczg6Y6M2toNBVtZGjmbt5zto2tUHooVAvEzbbEKB",
  "key44": "44Dr229KqQqi6MphidveBgs5AbK2NtiWfZ1JnYMagXCTqVVw4nVDy5G1oWcF97WadJDxtqBG7KtCw4FwbVqLotfB",
  "key45": "46L6GmLAMMd1heCguD8kGpPwskpGRhp29ZKrapR4VWvi5PhcymwxEkPZMGz5gXbJtxuPoHwV1By4AJwXRxoSi5bn",
  "key46": "jtrzJR9wduB1dCoPaD9bz5JUGWnwByxubRcmVerZH1jg1kBLvTimjVUuxkb9EFmb98GNnd23bHPZ4r3s3Veaqmd"
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
