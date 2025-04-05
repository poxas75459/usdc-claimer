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
    "3QmoebBh98f19YkPm5DZutfyXAcbP4qwtE7eAx4VgbYzmvg1JAojG8xNDsZM5uR8B36Q96GsxoVfUrz2TsxiHrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o4Xb3VhFTEVnb4c8AKXNkMrUqrXmjBZkSnwdkidAyvZsLYDrPve4iiC8r3adeRpUyDaDEkFgRTwYNj3CCHK9Dhg",
  "key1": "57mRdSRN7Qh7zW19VDGMv1NvCcaLMSETEwHEFBghmNm3LAzGb2mDpVHKkM2UzwogvxQ37FZS5FSds7KmQSVAJQk7",
  "key2": "22U2WxyeaU3mE49KuzgDC8v4M1AFe95m5nHGU4yq2mNQg4Nd1dyR9KVn19ZFJGphmgDFuCVCW33WgZNZ1sW7DkBY",
  "key3": "uLyfRabpt5bJP91MDCYwsCwthRe1H2fq2H9CgzcC7QScvW597uSiWEiZdh7EZqZuH8EPzyfximdX5JjynbwiYLD",
  "key4": "4CRVC5wx9QYitcRxBFr2c3sXbH62yWAXHdjPcA4QqnSuYYacPCKDReyqA1wuAYqG3JLT1BnkRdg6NWqD6fnpfpfj",
  "key5": "4QQ8M7SWYY59MeAFfSar94Dq7GyXsV3sFuxLUPfWn4Z1wdp4MnTj6cnj6zoBJvT9ZR16mVBZKjJTrmajBoVNAJqQ",
  "key6": "4c5Derhzv73ZWBLpUddjL8UUhgH4Lnoac1CWBcfHxpi8fqkq6QSZmq381dKBdQRcoRwCJ4VgmWcLULDsJk2Hp7qN",
  "key7": "pLkxJNCtVTHxgtUnQyRrzatcbcaHo5ecrDsy8VTvLiWushiLZh4TQ3z7uowBUVUtRa2TjP83yG52KZnjJUwwzSk",
  "key8": "5nY6KqpMphw94UEedue64egavDAZUTHbGwkZWqMupPH114FceHxHbLphB6XH3BhN2EBMQJsRngWsVcrjUN3UUVUQ",
  "key9": "2VvQgais3L1RVdd84MyGkG6gbaot6aEmgGdeHiAhvEd41r3i751kWCktAVuXaZYPnXMUGoYT7mfa5FzgyTiSaBbN",
  "key10": "5C8qzbsXw6m7MtT8iAjtxd34WaxgV1SgGyKP8vF4GZNJphMqkwNfwCVZqudst6GhGPuakAhNGejMecirvvVZtALw",
  "key11": "2qUGeGwvAxKhhwTZoBFqj1RvhFk9iUipRqwUUiwaXmCZpQkBLMJLzTnoqcWYGbKzBGNy3jwXtzL4aXie7hpe49WY",
  "key12": "37ZKNrauRTzZ1YVfxSNAVhkTZX3jdCvZb5wDXki9LtAdQpj161AxzSzyGacJ94Ur82Z7BSaz5KcrrPSC6eTM75fq",
  "key13": "3Mmby6fLnxYGJiYoQgq2aQb4riu82odCcT62qLV4Pgu2yRfRUv3vxQZvzmqDd4bzNwks6cSpE8PALby6zK1jzNNC",
  "key14": "zLEQd72HXD8bRsNPUqGK5X6GQiCRVY9tP2TXXADWv4cQKfEDVp3MkcMvrZZc2a5t1hEXL6dyHLB6uSVcGvUhdzo",
  "key15": "2UEmbXpoXf9Vf42P2r9tXcYDB4f6CoAWQbwvrTni3H5Kq6iZHs1UzypZKB1JoiTg1KBRSGHDKgFL17RvbUTcyewG",
  "key16": "5e7rGFEuu4HQ5EQiG3nZBMQrRgpYx5F6g7mzbBXntqKRawZgMVL7ZQTqpkGBetqXNqpmFRmwEusNcLJrhry6S2it",
  "key17": "3tVr2XX39EvrmUiSChaJDWQFxR6tkq6NEohzXnL9wRaavDWXAFkFFhAFGgHghMNXWHSDNMB9dCWTxY1UwUSRJ6x",
  "key18": "FxizukyCnPZuFmh1HjKWmdMkfEL7S3sTFgUapymKE2AK98VwdfzSGNzTTeP5CeNZGiypQEEFidxdUE3vEFEutJN",
  "key19": "5hLgn8zLfeHZY3VabS4k6MamEspdtftBfcuXNYjx6J2XaxmTBj5KrKocWoG4BfAX5e5JMG6T46oaZHqEYNXqHKh2",
  "key20": "4hKqBETLtpxK2vLgcrr3hpJ1Ge4UWk9FDfbEcqF1QWuLKSTnV5sGbwUCV2MSTazwY6RfoLGBiegMXmzzjryCe1DW",
  "key21": "2JEyrQtihAM13QT1Tn5caCCKvKMkPxB7eRZL6fniokSBjTP9o5ZpG4W1rrtDu8SNYFB2Pc8UiKV6j1NuZi5NB6UC",
  "key22": "5zdZMma328eJQNyz8iC2Nd41en5t9nZKHDcegNCZzG6sjf5FEHj7tpaugCrBj3gv2NBf1qt3sRzpBaTP1VsVTi2f",
  "key23": "9D9DYxucQQ6q6e2WWvaNuRRDrvtgx9DtFcwBW2TzsXPB61PNGTra4T5Qv4jw5P8CUA8Zk2SAiHcJ8EYH3uZDBe4",
  "key24": "4erF9xZmbodLtJon8Z62oYbEynmpLnX1XMuMUSFWbSB7tuQNmde3HTk6e7wTtLcU7TJaRPhFnv4EfDPjaWZZ4Pe8",
  "key25": "3yKBKQWzheRsmAMK8iqDkKrBcci95cSS2QVHFZSLxGz2WyTo9JoMdWqAEC3d9Df18Zc8m3MzBoQuNPuBxkispEXS",
  "key26": "25uR6Y2U1ovr599HwqBFrztrQCCJG4X1DurbmEpZkL4fcd5cfKbHmViFXeV9gQvLJMg1egyP5RqtknmV5Sas7zAn",
  "key27": "5jkzrgBpJJ2iiHLB7TEFW3YEyXFUVtGAJLQp4Aby458QuRag7ixdkFW8ggpeY9GxBTuVKkTJzBxk2Mi9rrCWCVeA",
  "key28": "4D2Tnwiasb5CipEWyRsnCqGcMXL8yxRUcAEbMuKDFohsXtFQUMgNRNHFAPBbKXSuJK6FAp5WH9emtSaeK23te3vN",
  "key29": "3h6ro8KRaWnHa4LtnLxrroc96jLAHrtnLaTr5WSqsTBX5NKx6aj2rxtiAJbpCP7r3gFik9zU5C25LP6raZP8ukVy",
  "key30": "2z6qBBpoQLSPTkeUBPCeKintPpkhmLBQKbfJyC8JJqehLT9oCwDnKCWVYYoPjMtsnQqG2cmj6ZyfALVntwhcy3uz",
  "key31": "4JezfkJw5QwXudf4YjXa9EYBvudbKQgW7i3hwgf8yu5uGnnpxu2WXowyz1MEq3eCFXNwQH5foERwPo1rVrLLT4t",
  "key32": "HHnTeygDGvHJ339PuytEKNVZkkW7GVS3kFM8i8XkrFFV1HPdBH2GXa2h6rDFksdxHo3w6EBNqz8M5MqWjgGrK1z",
  "key33": "2bxAniMupBvzfY3e65gWYgss9H8JuGdHEv9u1Yhb34oZn7ycWLpAwehRquhGWgFJZ7JkGCiEr26EcLrh3Gc5tm8x",
  "key34": "37PwJyia9JSdxhhXpxW3osenkPA46rqbmcjxLT4MXuuNG4YgG35rMxw1mtfKYDcrv34iwshFbitXaVxzXZMG7rJT",
  "key35": "22LuVEbb8YBz4g73gbpJpijjPhPA6NSBR6K1GZAv6pDKWH3n5ThuFMLYfSMAGJDxBYButcb7pZpjEHBMJMN7Z5E2",
  "key36": "ed47bnDYYYuSkD3V7Mdui4DyH1jYwrPE54aGjMDV7Yo4MefpG6zsSLUWdEKTEVhXesdtYKj6RnrQQpHZqjV1vr1",
  "key37": "38nEYYqGshrGRU3EW6N9oznsSNppJsutKP8P8cin3BQBePJqUAsxYLYb1xpa6kVCU9fK9a7GaNp94FjndJnLQQi3",
  "key38": "2grpgCpdVUEjM85sbC3hZvGo3Evoz9F4RELmwjkKtjERSig2VoSU3Uzksa7HtoYb42itKQW2ChiraGtP92ky4Knj",
  "key39": "oFYtJLoofdrH8EXL4Xt6M4S2AdtQ1unDebStbQEQJVCaqXnnSnPqjds96cTEM2jhZKM4XtfRbPSM7mGjLjyAwYs"
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
