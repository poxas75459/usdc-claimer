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
    "5wdLh1nj5FkPyZUnTLrWXdY5dfUsH8c1quiJwFmsjtgQTiPyigEkiz7mVUaRLbYYowbnX3fUW4YtcvVsM3uumMsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PQrq1jt7626d3pbP8Uz6xMnfS8jzJGJoApoSh1sT73x12BLDePPUbsLHWTDH2ycgQZSewnSaJz4jYDEcVnH5vPG",
  "key1": "4as4ghYJh554b9gKcTETsAPxq2wvBibB2A7EjTsieRMZkpyXCXNHA3MYky3HQE3gS8knoU8cnMNbBDAQ8ia6ca6J",
  "key2": "yUV6nbN9e2iCukYjUh2X7jmbwnvAidUZq3sWSWUEv3Hr6KKiL2X2KzFHRigWCRrKTfi7ve9yLXjFMJZHQEYCT3Y",
  "key3": "21SaMVu57no9tYeo2bezuD88wDvMUXbVKxCdwTkPbAGxCLDcq1VtdeNeB3qWFKeEGayMPeMDh2dvhzALwo3LMPQF",
  "key4": "31Zqh5wXo2XaZDTvLh58or3xk74BmWnGEfqLmoL1HCbpp5AmXREdQLwMhGu57jPCiAiqRaZa5gau7M4fLZqnmaGQ",
  "key5": "48x2Vf6qKzG6u9zGqoABRTQgkf6HZTRfPHmmu1LnAyEqzY5g5XBKhyKapGajGvZSZfyrz5Lffef2mVd7GYtr8Wma",
  "key6": "379adkJA8JJw7qQ4mDn5AwYx8hKNb4vJxTqE4A3pS9dgVVUiWPyVaD2bYVkzVHDKcSP14JqavoKfpDnszvyNMvwt",
  "key7": "5pwaQj311prTsb7qaTXJHB3exEuWyuvHmJBjLTsVcLFH7WnbkDfh4i5BUfz6Hye95hAQe3HutkQcdxbnGrS7sVt7",
  "key8": "7Q5dH2YeYLMex8LLHvFZ1syQE2BDCguHoQteDmeamJZ5uXwHGCizPFwmvMpwFYWLH3UbRdETFggqtc6K32HuvaW",
  "key9": "36ehzxo9bLr4agZWVVBguPPz6DAMLWVavTnFVTJ5NGubKDvT5LREEytfNDBegSRnisLxQx82Yv84GRgiUW7fSEu3",
  "key10": "iV9ey6Dejba65LjvwiTWT2G5zNPF3966CvZeDUcdJzrQR1oxk51FPtSWbp8F9R6pW6Wz2mZZXTppstu2pqMrjxF",
  "key11": "51uNUfcZt39EpYfTMEV1GscdYbkV27mgYiASdnaHopQNYtmvq6auBiyhwb3ELmsa1fQMn3qCnaPSpEY3fkFxp8zp",
  "key12": "4YqU4wkFra8cK7PA4quEirm4DNHCM3NwipkY6cLCD72eAM5aEgRaeQdQX243WBwSqePAXsMCMvAN1Vt759Xiw9iY",
  "key13": "3EaBUzGvVCaykm7pUGSSU3qWQy3G14dXjRUbtGBkc66m76fGxGjBkvwECfpoFZYrPRJwsby8pix9wicZHTtcoXLH",
  "key14": "42vnY33bXTMhkVgCfpUD3DBVXqk9ofuLPmBw5iVcVALGo2JDRfD7F91HxtiwQUvyus23pJRQD6wcPjzddZvuYgbE",
  "key15": "zwPkLUtqXtrJ9HTHenvbH8b4BVNWdJpVnKwyHtcou18Gc5FGUhC7DBGVKo5D2Q57ndsEwosRY7PB29Wuhu6DAoe",
  "key16": "kmvDAx7i44RjsTdm9sNZgWTwW1wEEY44syatWAr7gKTBmLp3k11XM2bftTTp2WEkZKhteNFDNBnxUrezxU1CTEB",
  "key17": "3VB7xXJpPK1QXcYXMSXfNQNM1LTzeAPrDB8QPApcRen6kMGEJifWMEhgVQwqezJPgsdx16BCxHMA3ERkpUHoXYkL",
  "key18": "5UrfRwBeeaR645KjL7BYMpaN9CndvWYGCjUeqyia8TWFK3ZEi5gRRR87hQDKFEjrGLGeG9qkETUuHXQJgMhipkJJ",
  "key19": "WwA1Q8qGo18Q4NXf3jwSG2zs4o9kkVdgPbcnkKAFvbWvBx1LEiNMGtW13WunhvBiWNt2QdhgvWRGiXHLE73MjZN",
  "key20": "3wxdLUihPRXGSE7jsUuNmQd3QkzSdwPnK94qY8T3dbD9zCgrWzRkuZE5CgiGx9K5U8gdiBkNfzKK8mALCXeEGpzF",
  "key21": "SRC4JQycNc7MptsKP3WnsoGbyFx99H1iVTmrho2kPodUWTzhS21KHdpn54HLeQBZhdvmp4J9LWYXPTPHVSMjFqN",
  "key22": "5eD5zQbga3H5o7kJY246zxaT47VcLC924hAbB5NKrKaZgceBmekUaiGtSMU1cg8AjNtSecF1zcNMMFr5Ea4jZXoG",
  "key23": "3XRd6hCTunAQnuFj5xMpT3sURxF6B8UdnFGGjhMUFeeWNLDTjorRNwb4FsN7xqc5aWkDCDmpWEfobmPnPCsjy6PR",
  "key24": "4TkKyfmakfUp99ss8JDN6H4g5gunDyLdnGfUED5A3xTRaspp1mjMFYhbNEdDf4cKFfE5q9qtEajrJrPm58WkTMM5",
  "key25": "4ksynUEQcCe1LtgrMWJtQAsivWFmGk6op9Gk7u3CGQXQboyduLuxgs4w3Tdt2kucGffThxvhPLPdAtnFZ34LgUaH",
  "key26": "37PSePumzmR5bBQEdpAPjJdosc73qicHSrLYAC1W4xiQ6a6LFLbQmjvhSJMzv2PATLdgAHh3L6V9Wu9NLvCka7Gv",
  "key27": "5wTLEXb1SM4BspzH3Z6orLs1EWsfh1VLszeH44psPaTidjNwwSc9Akm5PKsQgYzXxFTTSMdXNh1yAAFs8J5dv8P4",
  "key28": "7ck9kfyQEGLHqKhYWTtzuvoaQKBt8Py8QXV8pex8wkaxWfnegXQvJAPYAHsPNEX3HLLyY6hDFzcvJQakNx3wXu1",
  "key29": "2edyACd8MgvddHKSaPdiY35yUtGV1yaz82kykPJZ881Y2eXKz2SXXRuLoA7Y78WMutcLMsKeLdCoYWdC92SuiLuu",
  "key30": "2cA1nivkejFy7uiqPznMEYhgRmvvPKbsvDKjBvT6exg37jgSuFdSNPQJPfn1Crosrdr4ov6kUhuzRNUWq4v7CtWi",
  "key31": "2XHhctckvqPoH52Hxv7oejBXhM9hdpzYXSoPrgua2wmykxJSDiHWd9qSSFURSy9oTy8nXpkLSF1WEdEyyYWFk4KC",
  "key32": "3Yp5bgrLsva6mBSyyPSXRjDBxxZid1YLuo9QspfwjZWnCBLZ3rhtsdHnEyL7vrQspX9xYjj9waxiDKzgEj6dH6kv",
  "key33": "2osDvRMGcaAsi2RBa2byvvFEs6bS5zAJRjYsTrrFDzZ7xghgyvoyuaPvHdNHer518NFAXL7rLwRgXWvN9UtMVqj",
  "key34": "3sVAoW66ZTAHNZ6zswNCKf6ZGxst52ZaXBkJrnsXwzjhirerBCYx97uWHjket4nf47oKaoyXy9GXA9pM1XykJuj2",
  "key35": "k4VABNiBS5md9MAZj65n1GgWGTBmjx1JdSUsT5wXv7Hm58BF4ERCp1V24WvHkuWJxBGh7ZNX5jGKprLMT5bWbR2",
  "key36": "4a7KqURkfZa5xZLXZCoyrppeftKT2ifHo9coTB98u8B6Y7yvQB13iQoaKV8kv1WqUrcEwcEnZ31qF8zJmrZRzqo6",
  "key37": "3kf78iJ54NGtYvwPWYXTxnyWZLQTiQwVCEtdoKgpQV5ZTvs1prpf1pZuoEucNNZuJrwPpRZ9YDXysKNRi5sC2z2i",
  "key38": "5UxNPf7ei9uKXJitCzCSe8MspyPC1sPhBwuBZUcRcVxwdeRNQCKbHFauLDWEV2WjWdmHiUdRVCKCXFHas29tcPKi",
  "key39": "21KQMJmSGSCefL1puTL9SFLtVdsnM7Mc7A5soYEVVvPnpCVLQRDTeaoA8qob4JbrXyZKMmg5M2nZZTRkaNvCkkSj",
  "key40": "3qQwG9guKtqkdwWQV4SUq7FQjt8keoazX18rAjkYMiYWTS4vxTiRpFznCifGsjmLjoRCJh48KarBsvB5uRa5REMy",
  "key41": "nJY3CnUUPymNJ9HRUyFSist4cpAoYnGRYYxr43xEbPwXMh4i6AUtvQuLEBfQq5cDiD2xxa36b7Pmh2CPGfqU2YF",
  "key42": "2TAye4q8jzmMfmgi7Phg732PZS9LkW1RkakK2Mm4PADJPuSeZsYLCUpeAQa7ji9xHQCf4CRWmPeaDMVwjwuCgTFa",
  "key43": "GgEPkBZZi2kefLodj46ZEUxWCCgN7J4rwaZKWH8Zvyu7H72GKwaZTwaYszj9hyXdZzuntw3deVfkPXg4YYWqKvC",
  "key44": "5psP5BqASg4ZM5gDmsnarvgTha7HcPmUtDeL75wgvJ2ANiDMxtsDokZFdbtupy643ovHDHWpa8dEPHLkdfb6Xq9x",
  "key45": "TQH69k6A2mAjvdhrVzJKmZXeaPbNEtxTe8qUAcrtzdsACRh9jc2Ri97xVNS1W8vvqfYsXK2E5QdbsfXvqHPwVfE",
  "key46": "4Tza9eycou7bhSeY4pK6Qa6vkJGQzCCLh8FRqtUnGg3yAwHznt6AZP49CPK3F5HBfSC51wVu1phzN99P1zzpmZvt"
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
