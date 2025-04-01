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
    "12RTAU26VyH5gfksbhjQsqPt4zRr3e4VAnvH7Q9TdG4Dg9Tc9FaFSc7u9URunisL56rHS15aK95xFCxciiXYTnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UZ1Dh3jAYA7Q6PzEqYUrcsdtxHiK4gFGxdaVDf3eXpdwexRDp9peareFC1MCL7xdDNciaC6Tx4XnqhnCqbXY6op",
  "key1": "JkBWBqzX61uyAsqcX1uM4LF66Kr6DNFTuLTzXQpjEvPS4Rzn8yttzpeqmBzdiVCzTzxNkFYBLFuPRc4kcUZ41cW",
  "key2": "3LKHwqM2AJmPQ7fM2jDtbu4nVEZgwd1EW4peQ1wg3NoZqXQ3kN9yb24BwtsBjv152Hh6iP2RfVi9scup1f3STMZv",
  "key3": "4ryNzAVLoSzB5tWn7RBtRf9wQ6giv4YEot1CrfnUM17KX7bESMMcTcqy7dmWdbiZP441nFYwVxBLbajngGcvnpaq",
  "key4": "5xGWuWAPKrqegK3tK2tBZYGF1Cf5eTZMBNqNgXQBYaq9GXCQ3TPmqv3jHZqEWw91mJLWqY4AzzZWBoN5QMUFXiRg",
  "key5": "Q8dxg24wss2v662K3UkDRSYpYEKXtFTDCqrwVF6Dq2EkUvp1B383SKjBZu8Ve6z7pgT2NBPkiSVXrLWvjiaDb31",
  "key6": "5djJrsjXh5jn8xtEb86B4n9tTddhT9ns4HqSjgogdrgkRhkej9pjRNKr3UMtE7cJyCDF9bUJWB2Xzs4rjFhYa2re",
  "key7": "3iUJrDNiEFCrAVcuMsBXcpsv4BPL9y21bFHBNZu3cGRuPZx4Wuba7F3yPx5eCUG3jAmfB5KZyJWxVMka2bGgPeXA",
  "key8": "2Yg93gZKRtSt1zEviQkQQuJaxfK4biM9kYw8ksZjBhvKZyoQGXKci8oq8ZFV3LYBhj7ELUpWHvv9X35V4GRWg21N",
  "key9": "2xt1nJ12WyxdRj2YBwhNPQJ9UhwSf3m3eKecZALaq7kf1UBtFcknFnZvLzwWFNPq4ELjS9nbCX1beYumnTJ1UXcb",
  "key10": "66svDaHUF9pQV5V4rBiTdYJpreG2VggFMo3DyyPKAYb9sKq5qxvFWfgby4F5eNVRD8ezdLk35p1CYurpfjRfsgUR",
  "key11": "2EdnBURKeQrJGtrRa3j9CzBaUMvzkfxeU7GmNWBFkDCz3xfRT4QohqV9rbrX6Y61qapGtXpwBXk65kM2LRq5qo7c",
  "key12": "5giGN3ZQVQYoVkeWUe1BJtquPz3ogVHtLiWJ2NE46Xwh2qhPP4xkWkFHMHhFFq7e3hUzFvJmGyL6DSNrFjzqjvRC",
  "key13": "fZ15cYhjqs3aUVq3wdHnBZBGaJzDFF3bce6gq5FrLYt2Hyvj9iDm9WxQjBBfoGHeqCQhrEri2txJZDgRHSEuwsG",
  "key14": "2PpHN3dV4AykTVGeS8M473G7Ki2PbakyrVJPki2qHM1ABQwaVPL8NeQ5hVpfVderPW2RGCZyvBuGqiAVMtBBBuHP",
  "key15": "2JXeaZWh3MkkKG53RVgq83vt3ax6xnyuKpFxCM6WL99Q6yEDvQUGHKnp2zMe8WKL373cSm9KSpHiF1utVjvHMbEM",
  "key16": "2GokbdB7LVXNrRCfFLvMvHM44ejGudPHaiefMbkwGD9ZHpiPMxewgxSqagZ37GcHQKKzxmB21Y97cbpeduypCJvw",
  "key17": "N6qu6qAY339EJ3hBw3KoL1UJ7xxZETYdfxXBcfcVtrsGWgzxBRg1mR3gg5DFU3xKA1duu6eGJJ1ppYL8UZ5m34G",
  "key18": "4BBaT37UnQ9VnunavXQ8zkzfrB2D8FZ3RJBgJQ9TxouDREKspnsFQ7u62TsAprKrqmAW353UZ4qNvitrtBqVTp58",
  "key19": "XCwqZi3usbQKJoaLaRx5jrkdss792cBZ4YMkSb6fVbmdf3d66BhjdVkhBEmCZ6H7HZsaCxk3wFAp6v8JQsKBCRd",
  "key20": "4VRMVjkfFWRKKMBVTR19ZXinKxSSdrLsVefuigFfwg5XaL4xHDJe3QYhju9R3vqCS5tzAGoSsdkCrFUPL5zivG74",
  "key21": "4eNx558aX3t73DkojD99um3mgV9FWmVhF5GSKfsWriszsziMqvmxeqpJhyRPyM6HdvC3YCUV9YUQS29YmSHCPWpP",
  "key22": "5pQcUev6GmFGFMbFjhBuWmmBkPUEVRDSdyk5JZ5VtswdTZodiv15PydQsrFTHaxV6dT2dusHQh742nGhn3iCG9SQ",
  "key23": "DssFEn2xnNZFcVZTkBsLyvRGagBhyVStMmhQk5QSu2vGsauyD4YDR6qpkCKf9nHRuzEg7QGYPjjhTcnwbsXDj4n",
  "key24": "2kSJusHzxmhGiMVAj6G3Zo9uqmPjoDU12Por3M8KEmK5Uv3GkSDUL4fQHedZaukBy66znC7PdhucksoAfkwWEVaH",
  "key25": "2HJthKtYDyiLfNkNFjfz7VsFPW8ptyH7CHe5xwgaU59X9QxLRfvxDnwbPR2WRiTcRuhFfHK17ZadXSoQeCp4heBc",
  "key26": "2sWL2R8fXnsmy3iTjMTYRZfieUBH7sjKQJi6AkGprXdUk1MoskRRuJCtyLBBinytKMqnCdeYbmGafBfuwErjgdfh",
  "key27": "5zRg1fM9Sqd5ouwp3YW4Aj8UtEax4yVTvi3BBYwXSBNTirKbhx9TwGfcgsMTnntDP9EpT3HijWTk9ikrdWjC5e1Z",
  "key28": "5WoNrA9AXCksqdrmCA6TMVkhwAsdTo5ryK9YkkVPXAyuCi8HJLpjh9jqGqDDzSdjgTLQyRH3TnpmsjNq7Pv6svhs",
  "key29": "Np5mnqTKZovwf7m1z8V7DTZhBoMetbtu1jkBwdLsx2hJyQ9WwgvtkkDg6FsPbMa1LBc9kNF3qkG2pyk4TafJsaL",
  "key30": "TFU5z8MNuaCHfX6p59iCTQmae2PWstguS2Rhaukhu35n7E4h5Q8GgNfrgpjfhQExqVKfT9snRVmN1AQCCXt9hTW",
  "key31": "4GbdvVZTAWPXSYoL7QF81YV6iXweRwhnQ7y66rvkwx1Wk8FnUEhXEsApc2DYPfhQknnT24EcUAWkXuBsdFHHFEc2",
  "key32": "2WMU79Xnnei9hckzKQfsyhfFkDAvobhCwzcjbXJMHm6RSSa4cKbsjxDXFXTk6qm3SZ48pMTxqWuXYBinpY8ZA5PQ",
  "key33": "4ViHMEiictNykh7iDcqErkhgt7CjP8zpwda6LRXNt9j9nwh6haKvAsnYemFsRWwbEAmosqFH3hTBHui8o2EB62Wp",
  "key34": "3mWVnzmKdaegV6fUdFB2794B3zDZaw31pZJNwcVKKeH2KLbyLg1stcbZVchvKwt4THc6rCgwTrVdg56ipCeNxsak",
  "key35": "wVfDRQrrk2Zr2gkQuCAYgTqbBG3pPFpS3rJuVgNc3rwg24gXxy4cTWzsFJoon2Qyurbo1j8k1GbTKSMCxydPfS3",
  "key36": "3ooMk9Nmw38iATE1e1TLVDwUjiWyhkh4K76WzYtzKinjc45wP868Ymzny8TnPkbSvth8AJ8M5YmM27JuoZdwnMne",
  "key37": "5MhRmSYTzHq9vZ1Bhmp8pF7FAuZvR72aYwnRsz95u9GkXx5GTLFRDUe6pQiXmj3K8KQe2UhaY3M8vy32TWFK9mDS",
  "key38": "5aJgMPTPQhVCNH6uGNWo869QX1YPfeqX83QT13nm3wAMkc4aR9Ba9MdcZNFpDr9GBz8AYKY1GZpBj3h16mE5Ffx9",
  "key39": "561KAg7jG5YPQsyMrgCX7er1Ne1vCnPfaMCM49DvTwuciDuXqXv9KN7FWp67K4VkXb7EBk9b7ap5PH5WAFLzMNHE",
  "key40": "2KHuka5RJBDpb8KPwamePoyRFx6ad8j4WLGgcMgXJVPhsx17YAQcM5JU7houL3eVtWjVzTZsFafFLkbwtGsViBaC",
  "key41": "3hnFzjZ4De9fkSFkinJ3t7F385re4rqVqL7k2pk3sK91zs6xNJtHqeZdUKdMwNQXXGymUkLcQAC8Y5vAMvZZuYqj",
  "key42": "25J8JfEgXxY3gMvDoYGQUSWj8rPrRjbP4ze6iiSn8GtcCk1ppT7mYfmNRQonXBidg4RwDbTvkA2aLu75Q6z8nx76",
  "key43": "3SEmV2bdqZp5R3RSwNYoQHwq9E8VzEKtaB358bfZPsMjpuHXJcpeA1Nb8DHpSCafiaXBy27iLNepRZH8amMHrhLt",
  "key44": "5db9Qfx8KndPXrUuRjtDFXug1u9Re4TXTAo2qU1Dxds4VMq45S2oWUM61k2QfHydirLkVDST2ZnTmNuRTSZdfBwM",
  "key45": "2KT9oDVV1PrU6ztFCfFr2WQzY4PFXdHV7FrN32tM5s3Kc2k9qUCkbEXeyBJRj6NGVRywsDxBvhQZELCWRP9isUoe",
  "key46": "4YkN6VnK67pE9GmzssXYFaAVUCepnugEUH85JjMPh4pw16LmLbD9N4vCQm4CA5bavaqiEEs4AEpkywcACt4dAjtP",
  "key47": "2VqDJWNC7JtJDCnG7fZVEpx8RkAQMxQ9ZFsehLJHuHjhL8uPcoqrV6UTtEpcHHTQs9nKV5z6N3BAXhcDozkJtGD2"
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
