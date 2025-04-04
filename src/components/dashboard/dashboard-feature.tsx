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
    "4kA3JrnAEk4YD6qzGzWPSzCkwxQqditvJUMVqPyFYdtriYoSR1jdefjM2ikztZAzMBhnTjhc4abL7CGAEsT95ZAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MZ4DuyJppbChksn8cDdjW3dfAcCB58zsdwkpXZiaZU4KRhGNNJXmvAY8kL9QSMiQAKkFw9tMGuQKoJKc5UT7gYY",
  "key1": "pQd8fAmBenwBMXJE5WEbTmBU6E6D1oFjnGioLpR7Bjpt8hrNCRXA7Qdn83hFjaaBthGqdMp1znEmnPs6z1YhDWA",
  "key2": "aAqcd9enPeZRAB1wBxKw7187ZAfLJPTUGtXk1WmKBmr2vPRuWTzTFzEkHMGTX6oGdsG1bLkNXqBT29iGrPegHkv",
  "key3": "ogA7oWZS6FPmXRDQvgcNyJpbDvCDmnTCM1TQAQeNThxmXqRPYKDxHhbcMMgBkv4qN98UAvrfJ3iEnbgzTeX5b6q",
  "key4": "5UppBEUvr3Pb13MiF3FRafKQJDdcQyscRLbjuXKqSkDzuBKfGfWnTcs3TKzc8R4LMH5LkSB8WfkaDRWGwsZbVucF",
  "key5": "24HWsPdzhHS8zM6xSxk2mLw4E8LiLkjupZLFysY1gMXy7srjzYp3xgtCh4tJGX9o65vboW9Yf7W6RkXzjZ8m64wD",
  "key6": "ePSjsf9C9xxCNCWzFUHUVhCxyc49SU6G7UzFT1qaYaENVstmUR4szCcsiTj35Jve9LRYYkfqZ3cb3BmEtp5UQvP",
  "key7": "3QMY87GnesZtRWrc22VD5EpbiAZxvsMxfSB7yGrp1tFvsmvT4zi4bpUTLShobxGcLvB66KqtDPfV8yG1T4AaaLjM",
  "key8": "5qsgTzuNEDd1gBCbEHuSrrYxJxpG6Q9xe4y9Moi8bcS9JCSdFncSkTjYsb7GyM7yjoqs5DeNxrHUPnzXFqWRgor2",
  "key9": "44XCU9ePf1uKSCbx4y9x3bpAfaFxuCfcWsHoGdYwABTDi5Z9iYAzci1wfhoodbPHWuWHgRE8a9BYirYY4im9sMBm",
  "key10": "C482fRbrHHUQsop8YiUV8oKXEB2h5KATamTEkWjCKmPUQWiEAfnLFkpyB1Hwkm5TxfokS4XWxEHfDPwE9nt6GSK",
  "key11": "28xZW4SSbu2XGqEnbQu25ZaGiuE9MpgFueZAWpuFdHQQrgmJE545igmQ6KrqEKaoiwhCbJUC3acXGiuoWhaGdKYz",
  "key12": "52m3umSEJYm7xsbjTZodVCziizVWX3xWvq97iH86VDyACe4zXaWwnQR42RGbEBqbmtQUHVEgYZzUpPxyaAW72in",
  "key13": "5KaSbMdjAyHguPUUSYk7L8Gfjvpu4rSpa8FHpXMGgHXGKT7i3eNhqLdz3ySuU8Ugy19mJ36Li5ASFHsRUMbdktkb",
  "key14": "4rZ4DaNFJ8iYJ8ctwgS6Kiu82jtmQWLynX6RNGCWSN7Ayz1g1qkv3c3tspAwQsLRKLsVxpbi4QdzFsWXPK8k3Q3o",
  "key15": "51vYr1bYribkpW8GqFrDTQcJxXafFgzyFrAKSEkS6YAGB1fjReShZsVhG1fAyjAt38waMnQNCEGEKTciNGeBh95b",
  "key16": "MpBmn42vVPm4tdVbRqndEpBzFv2okNuoaNPjYcLYBopQbsfHY9ut8FER3vA9yYUoqZ4SbDk51auoRP8f2vEdxwN",
  "key17": "3nnNabUXCAzwpmqqN3RzV7CGLz6AGsKK4TCnKjaukkPGtGuRuadZZxjxvPYEvNtupHEDb1eeRxWVnagEMFFgyYb3",
  "key18": "8wv7G2ojTPjNvMrSXP5jXoZLRShxgoMEs3XmoxFw2JgC5xAgndGkSxM3Ksbo9cqvR9BBUBARKgTq87Ljq1Vwhq6",
  "key19": "3fYeFDC9QPtE6Bngn4T6GhHYgZJ7AxU2qXcefEpRSHia7WsZuvxagF3k7Tnwv2RqAHJ6N2rRenFBYk7Tq9tYnwoe",
  "key20": "4zmTu4UPctviF9ZMRX8C92ava59YyGLZTL8n3QboF1xGFzUg7HmaKaRy2ybVAKvWrtmRfoek37csX4eWHrtSkuG5",
  "key21": "2Htnt4phVZz4BusavdjLMyWiVmrz7u4fe7xkqEyVy25AsVTWxUaaUZDpM2RZq6yR9eomvHW3V7vk3NhrqGfWCKB1",
  "key22": "3eFgwaxfmsY1XREmtDbF2FedKe5qvZ6KNdtdcVxUXXBqyXGiL6Lc6mCmVfrqXyCLsNEZzAGzVvvotmw3s1vdHTFG",
  "key23": "2xVBroKrQgNPuMQC1tKtvTAp8sxrne9CNCwRuuFucYwyiKgB8s69oyqueVH697uvDKA2N77gsBEpbotR114hhJwe",
  "key24": "5WhPjB5uAHKAa9fMBHCW8iwfFLHwrNS2nPhxLtzVC3kvxvSV7uMmmpeQtxngcVJiSt2Do6Ppk1F6JmtfJ6y87y3v",
  "key25": "DZgBtsK2Ggjrkp2pDUTn4wotJyCSDmcvPLiNeiPWRatTdaza8QMBj5aAhJeTFTp3feKQPU1RAvi6JNzVr1geQHp",
  "key26": "5RjWeYu6dSkwtbJRouK7cTM5XFTaRvQNFckjUyByufXNdGJbTA3wgDTbtun724cNyRXtnAS7BMYmPSfq34UdMWBk",
  "key27": "RrjX8bUB3jA5hsLD54vzDp87HxEDFS1DL8VJFYP7CZYzcuWcZCTFFz3nwLJDtS3Udh3peeaXSAS6gcobRXqKqq1",
  "key28": "2dRvKWMekfeiifdDDTzzx8Mm6ZNr79UwiZg2Tyh43TevyNzH2Ar8eXTHF5PsV5TUJypJpt4wZ2UQ9myLN1gZ7xwU",
  "key29": "5zFi1n3xWfHYvYebhSp2XtZXXhqb1ScZ2BJkHre35qyeQuRg1Rvh2xn7hy44ETE7Wss5un1tMuBTiBndE4khWyq",
  "key30": "3u5TuEdRv1RYqVzuF9p6iHvGWVjsnvoAvwSw11JntfwfEsUewkPmJnTh1DzRAtJBjKQ7BrQyXjSrHRbTNDWjghFG",
  "key31": "3BsHDtof22Y7JL637apbasiska1xGxX7QoXg98FpqDXdKBEny4MDMdFmtL4ZJRRjZvtaZ9hAJSW6QXVaq4ZGqF3Q",
  "key32": "4wJj9iaR4ybbJ4kpPGrTZdRL9Zy5v3RpPV2dkYtvkmtNbpviKuUgHFMXDPCuBxkF6xuME3ny5bmT1VvPgz6FjyXK",
  "key33": "2dHdK1pbDE99nAmBvyMswhfCbaD5P6hozcfDC5eabCC8yBRAfTevY1KQqkTpp1PAgDqbZEGRwKEiYvzddgmNd2FL",
  "key34": "2DBTQpSPWULVs8mCrjgqYbPPZ1RQaUDn2a4jCrbbDS1qmaQSQtc8FGTXDMmZvRjXunVaHC7EbJbH2tMSnsP8qGTD",
  "key35": "WAobVnxVWdJjmrBwfz2CHj8RDFzgdo4SvddWcymVoaP5m1XcCvVq6s3JFBG3RxSQaagnrd9RuLskNnzze7Y4Wcu",
  "key36": "48k1QG8gZ8QJ6g69b5JhnKM1yC1T8zwgCy6iG993xTSoiTAErocH9Jj6Q6gdmeWEbUzLsreJFTX7x7C2X3Wttf5V",
  "key37": "XraJvWgFm4nHK67XgrFA9kXMMTzt9xB9vtkTQbd1fWYTa2hL4rhfRxbHa6X2mwNfTevSy8MShoPnhyLMkFs1xRX",
  "key38": "2oUf75MLKKKJ3AQxGpFjbFddapsnBf7oyNGc7wihj9ZQqj7tXXkAME5hSpuUZ5KcEDSv6cr5g5iweZb9aryZMnUY",
  "key39": "5ghpmFarsmxDqdcSNGLgAknhAVBZG7G5paa7Z97M2HBSnpwsDecrChKAsAMixyRkBHy9ZuQMh2NJDzDZyqt9bzoW",
  "key40": "49ywqG52XT6ry2gDtWQbR8E6yZi6Xg1PLVfjtAx2FxfaTN2213eq1s7uyem7fn2H9vN8HABzuBcqUiHPfzxtvYDv",
  "key41": "5CgUNMNk5CE14Wmt6Qqw6nYQyqvU7m4aB7GR2r1M2pWyahgrm8Smonpo7DLGRMA64rUdAETzWwnAJErtzkcgiMSo",
  "key42": "UcMoJ7zDGCF4Bc1AwUgFm5rPuPLSA5GY7cmJjFojMqCrFmmFqMxf1nEkXxKESPF2PUb2hVN7PxyCn2vM3zmMNaH",
  "key43": "R8cHUuzBCpjWXbzkhVjoWorKDKCRRFfeEwZUF9ip7NK9Grw7TmSPBzZUCWHzcDEGs6jZiWopDBKVwGJdfPiRPkh",
  "key44": "nRkJ1M1teD5p8xCH3Ut61BhcDUS98xDJDjkWESjrediKoKDHCVLNEQwR5FXsBDarckqvHC7ExGakmXrdVfPz2Pk",
  "key45": "5wGern9UMZ974khEHVUSt3NgRNboNgBemMDG45Ta5DRyaBYo6QZNiG91zRZU6CEcjXh6RdUf2s7x8pKv1oLFnyS8",
  "key46": "2ZpXQzA17BjT5TphsHieEV7L7zxGcmcb7f6czPgCfp2akCowoSTD34pScJohZYrY9GhbQwZ7amjyAsJE6G3bbwmJ",
  "key47": "rxQfFuAomfUgEMBJxzq8E1hiFTJ8gM37puiVTMCKe8HpTt2tu9tVdbBxyfmuqmnFr88Lo8NbaN6ZMzjCq7hBXx3"
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
