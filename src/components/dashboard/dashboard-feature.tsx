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
    "KARsDqXvyB7EwGZ97qsTFGs4YBAyyre2tHtWKQT3DeLGQZKEWH6RLLaRUWMbXEPcR4kgC6UVh5w4H7RSH8KzNfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XNxSK9KBdfXAGWVgwM439uhjbWkpVJjEQJX7weqVG6VWgk5jaCjB1JWucLATK5axUco2WiFwmWjYHBcWo7TE55w",
  "key1": "41r7VQ8SfRj6Jz7D79pDohYym9F4aeP9TV3cLuQE7bU6CKQvKKi1FjpTfvUXsiVXQmHSpcEfaW8KuHWyzXNKmqpn",
  "key2": "S2Em9MPbTUXxoCSBhNG9FGDNSgBEH5qXK47L7fATPDL5CneQexSAoEPDEEtVULN2ctCGUMqm31yyU2Qfpp38sbx",
  "key3": "CQAS1Dvbyv4W9NFsgBcsRTqhcX6CeJkECNzHmk9EmKd9ipjMmC4kgnXptokhQf5DEG9RNcAsfgYvKbnPxnJMGLN",
  "key4": "5iKawf2w4nHpY7JYWJ11pmdBHbSE2UyuWLhHzRG6pxqRBH26uJv4Bowe3XdEb7jvkh14eAKTRQCpuHAZnpw7vC5",
  "key5": "5wkt8knzfus8jNMduGYUGEfEtjJALFLbWSBs1mMwN1QFpUCTRUQnCxYKDGpzv5SY5oKeZBhZ6mN8V4qLJ5V3u2wd",
  "key6": "Z67LkjgAGRFPFaizbtyAhMZuo2pauHVvNGf7mM5yQqRmB1pcjdeCyajRjnwHLDuQQ7doMsbJU5Twbm99GJMSRdc",
  "key7": "bwgdTRoB3EXA5F9nnf5Bed7GGFzB4HcmPbFP2Cy1B95KS7xhuFuyNBD3iTZGAeeEcGKinBBGVZZVXxANxgUeog7",
  "key8": "3zQi8kXqr539jgspstRpshD4o7YwRno1ViEz3STwhgn1ToKc8FTvztZCJuwX7gxmZf9gEg5wpaTs2UySvyLeyRJv",
  "key9": "3mGEMT5398cF4uLiBVxt8rNbUhCHE1QMSmsMfrrLPgJRao3JKXnS25c2K3DwJ5Jv74FdDjsXM97ba6Sdn5UyY9d5",
  "key10": "49ryejzMPJ42wWpgXCdpCTRKzM21VaQwyiSatzXSeZJ41pHM6UcTv7DiaAMpYxyBdZWFCouukfWe2UMQxrA1htG3",
  "key11": "2CNAmE2prXTKnuabCsfy1oSvmC6Wz44QBiZ6BFCx5vBav5jFGNejpMqjL4R2E7vHYQPuYyncY1VwhfBaRVz5SFDu",
  "key12": "2PWeHkDNLaVeo6G8FWVwm5FW1NCsQ5PtU1EYtdUd4dyKvjWhBUhCjN4XDuuf8XuYzCLQiQoMkvGZtdcWqt9ZY4GR",
  "key13": "38hbwdqMdz7kp16Zq9BUxL4wMtdXK3RgvGovegur2ovW3XN7aSf9csBFBQ6KgreQTtCrm4X8AUhbdWmJmZFpYg6X",
  "key14": "4xoeHyz4SvFa8vW8V2hD35a6MeRLkw6k2H1biSXZAdWirZvUWC1S9JeU7jAyDmpSRmwE2JCwVmmCVBahdtZBZays",
  "key15": "28AYoaBu7Qpfx9sLzVtcYhUVFBepZxM2RAH64yzPYxMzGZd9HgRi1QRKqYYziVBCRyB8K4gy41Exd5E46BLvXZ1q",
  "key16": "3L8PnbgYTmxo1MCSws89EDabdYm4Rcvd816QfZk8n4hiBh4sMfvsafjijBzGfyYCsyWqVqhAFXZMBN2PuwVMoWg3",
  "key17": "5A93C6KUS24dKtQQEWzuXrUPF5DEArUcp3nzZNrdD2q7HJtt26vfUzVR75gdquKzd1nMeQ8S6VxGX4TZJ4Atp8na",
  "key18": "3xmS2bCafVqFmn2bwSLvDc56RyVJpup51VmvtGxdLiEvqiJuwmUadxD2k4XNDRDa2dhuoLWA5usekYFCEJAyLB6K",
  "key19": "28w2c1d5fGHZngyzWNUzYGMvsZF8EQJ5koUeXbbuu3NNPbAx5rsuCdHhp7EaazS6vW46Rnc65yz96BPUi17UQggS",
  "key20": "zDLEVrQQxByQP4GfeZDcotUpf4nwgwVxUAjSfPBshQo2XVwzo74DdCES2GQjWxwWnkfofhgbRpGcbDF48ZL3v1L",
  "key21": "5ZFy277L9HFTK9JsvCeU8h5krEvjCQDVTVrxjPq6vWDp1P27FDVgVTkhCHtbLCf8j5ieZeGaDW8MTe4cHwiffVJk",
  "key22": "2aeY5hTEjb1q9seMNTgNZmUojjyQq1FNhZurD3BHgKJxo1XSaBkhT9Jb7iNMQq3UNisqyRQK9oqgKdz1JfsgHGJX",
  "key23": "2rZ4aV89zKh3j3gr9GvSHvHBatGeVT5yyPb4MUr68qxVnYWkYYNiqM5FGzmxTFweHoEWDe2vwqVDmw9sDyEWyki5",
  "key24": "65xTq6ntdJ4QcaqEDr5YYrJyc57XA2hrWAKBeXKU2J6L5pikZGDstxDxaURBtx5vGjQHj2PwtzGcj5roCRNf9gGr",
  "key25": "5HLoS17G6sttQubimP51jECKHb3Zmb7MnHgr5kZw8ABcnyzhrFBpXo1ntp889u8Pt2C9L13hMgLHhHbGKq7wsJDD",
  "key26": "3MGovv82jfPfBsnCejKSbhYbbqPmL7zmd7637NFXdKCcwXzawMwzW55C6neyV1WEtX4Pb7xP2vph9UiQXKXFJaJR",
  "key27": "3RCWApu2DYHyfNi2irBNkG3CWH6gSs6uDaLmQqTC7e4nVydEkuLaUM3fBJR4Rj9CFnAWxzDfiLzDrU8uSpiAS985",
  "key28": "37BpnnkLcXKabGuziHiVqY8XnUDpCBXFYPvPB1rWcrtmtmRq5CWoJksYardKHvihVkRqKVsYM5y7nJeswTw5AUeE",
  "key29": "MGJXZ71CEaRRzvYgSuPgVfdWNb8xysZBtpjp9fejWKQYTM8ZJkK3wPVgrPHEFFMCuKhAhF5HzgfN7SaDe5WTUxU",
  "key30": "49Qb5caEnzw1rJGDPhwiBRNhDq2s1F15tNatUJCfUhHYjQRxwZqVAmoywLYDsahnivieov5Ntb7rAkuwDspZu5Mz",
  "key31": "SUFyez6bZEcXbmoF5ArZUvHt9vSJdztMkmdiy5LMteg4ao5pSNxCksrMDKsJDhP7n1BiS6vxK9fBZTacdWmVUbL",
  "key32": "3ind5k3PFYQKtmJptFZnjmcyJFmxkvVDGkaV5ckXx3VzosMv4iYFQynaYQE8oS9SyB8DqTrZ6itQxviVhVPj9n37",
  "key33": "46LGS7WRTB7tjsGxeH7bvaJUL46xHNYSGhETdDMjawmSL7N9AL8tFVKPpMmSsgtrprqeGFDpR9Z13by32L2vMDUz",
  "key34": "448wJkYnswJv1yok49UhLbKp8SuxCcU25SG4b8wRvAqarSVTGdbqDmAHztCWiqbjhFM5XBYPpX5d4dCW6ofdFe1s",
  "key35": "3NS5zWMhgYLVZu2toXfAZKYkskMaGpeLx4wkDfVJgRiyWPHafcxxmJtxq4dLLz4WZjQQauoDRjFeATa1KL76Sf2n",
  "key36": "4jazqdp5BXTeBF2DozgfESZkrAhRUk6bSKm4DWXskhrCSheA6UUzJJ2MLntsKg68cc9XGGB4JJX5Xt5ZDDpex3BX",
  "key37": "EX9ZwKByoGnkrPYtmQiziPuSZ4tgZBHRKgWj8Z8sfsYStPJnPnumP7ZFr6eqTynuES8bzLjvFpQ6eLvuzbQsPHA",
  "key38": "5dcJarYUhhW1fpTt8UsZ9eFpjBCvpPJBmHKRoks8aqUgNLdMXRjiGmMxwANDuKj1vzcx1uSPz6VXgbA86xf3Bgsd",
  "key39": "4KwCU24YTCrsW6EXfC7r48sGhQcBLtgHKhfrpu8FhjA3StqNNxpWdi5xnqBiKioBWEZ4RcPnsjEJE3v8z9Ravmrq",
  "key40": "aQXMqL6N3DxGtZ6Gm44uko4opyTNjpu6V8sQrkhoTWRcykABQ581ALds3mqx6Y5vWDWx1HroUQ9MdxfWFx4kQJt",
  "key41": "29yJbM1Pn6U1QPrYBJLvGU7jLMYZjXA9MKiy1xgbDEuXWkEPf64KcLGBquzy2CxoTuDEgTLmPzM3p5axh7vQqzTp",
  "key42": "2EsnsWcEo8V2nPN6qfijvaF9aGtdiViabqdxFZU3APMYEX9Bsibfv4ngweyethWPg87gXxebck25bR8LiiAc96CK",
  "key43": "3vBTGkRBnB79X8PfbB3cUUzPXPFGo5bbUSyM4sWiokTSbYVsP2kybz4kCt1JNZCEoV6ZgTZ8rDrQZTZw67nNaig3",
  "key44": "4vtsCQ3X41BLoUGgrGxmmWKRbDJEG1VYqNpfBhKDfuBbVkRpu3gfwEfSmG87pKevLWB3SLRoAZe4LmU33nAjr56q",
  "key45": "41amCkWgUTKTYU7Jn9xBo1WhVSfWHbbWkJWTfcN3SsiHiXVLTRLjtdFj2pyg73qHJH2QXmAkimgcRDmqftGgvoF5",
  "key46": "5PSW1xkCteVBJQ3oxHAX7oibc81bspodtcgadbzS7cjfHh1Tw7PEfNFL5T5DzoAZ78pUx6Q855Vx5YmyurLKe3GY",
  "key47": "4A4XcWdYT4mwdKuwjErnf8o3rtqKH5Ae3jUsTPK8jcB8hchCu7ANe53dMdCWWpvGHNFbzTgqaEHYK9MvtEWVhZcw"
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
