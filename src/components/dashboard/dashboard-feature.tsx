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
    "4XDRbh7Z1VnGQ6BemLvoowTTmoBBZzSKnWR2VVvshfvrcVDsA7JeNyyd7KRx3ygemAqEH1yc2ouEVrnJuEKbPjfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hmY2woMQfd16jurZMd11KoyojoDirQADwPE96aFPbCat9QUvqcRj6gTJwNLGe1SZbtuqfokvccR74XJB4hHzU8L",
  "key1": "LRZQ1XPimoHnHkPGq41YcX2v9Vksead2pKVkjawAra918AN73GrAKcLgz9hLEc2DnCXDJZbmM4Miu7otzGuDcsk",
  "key2": "3DjyiyqmSUucxGhBatmdSHUs1eBDiq27qUDdK27Q48bTUGg4sNhRS7foZ4CfMLRhpZfW8hZweJZCceT3HYNRAc2y",
  "key3": "4fpnR9yCMZnnhHmopEkCTCQsMJjr9NNZYZyf4czC6oonCLgTdQgbMnvzEot16kbdjqtbZMB5KRS1HTMcrrYGRgbQ",
  "key4": "62p3DMxp7VbpRKFcA2UXKiftYV9LS9azbDFLBrmZat3TsxtQGprKURQawUN9kzP7huWau9UoYZgzoUHGK6ifV7X4",
  "key5": "rb4AQDjGRRuSyof89sy3UjBixYqs5rtFSZX2bvMWvuc9B4HRnhcmcEXvCh6FJbYFnRLk1Uy7LYtLeD53WHy2d4h",
  "key6": "31yH8WgRzU9K2PprKAjvqK1mohDj7XtXqz8NGq1aSy5uT7eGDh5mTXmPTGXue2aJsmhQQdTNni1SeA1YzrJZo7Zd",
  "key7": "3JvMEbAr1QZbrMJQ4rUbvDTNv5w8KT8PTGuY2q2EMDwovKo9Yy8CrdLv4YfbbNMyfys6HQjmWrPbeEX2AqNGvd5N",
  "key8": "BsmwWeUfXMwV9FdLWnWqk2wreCLiv8Nsj8mLBkoNDWJ4wWKkP4Huw3dhpmvZiYF4NbRrrDaaBoSwAKYsPHdC44u",
  "key9": "7BaqM7xX3wnvoKkLgz6vzEoshr9BFybCjJhFB6KsRZzRhuLndSTa7Y8ozzk4yfyJnMN9nkVx1XLYWbBA7b1RQX7",
  "key10": "2B4rhCrAKaLtfjPPkbeWsEWX3dLB8sqm126BB5WdgVABfFaB6ohxhuM6w1srHuxvtPdcAUZDJkgEbj3EA3AgcfFQ",
  "key11": "2DJhiT7c3BhJM5osMfCEzHwQiYT2FUzqwvux2garJqEt1yRxGJp4ZyfMkXXov2CYUrGfncMDouCPH9kVRWNebnAN",
  "key12": "4ZfXeqyPjTHCmvMhndXmxCP7LQvEPB3KtYPzK1mZTBVYDZnymumUbCdDBMKw5WRDgmFwKdCvMrNYGALyXoPvkdmv",
  "key13": "ZWiX24wZ3w6Eh6aB49hg5pg21YGzp8SkWvTbR5hvBLutFasNWANkVzMVRHniBp1HVwxGtsnaAZDsb1oHoUXSBgo",
  "key14": "2CZ4FTYxha7UcaiMyUmonkRxEEuQd8NrzSvEMmyUkBy5DDZAhyHoksgNj46xf4pNSsbsT2ka9fyVyn3bpcXBK6n3",
  "key15": "2Dg6xbhZgYhDcoQhTUTNQSr2qWE19iNXT4UJvwi39tNd1ArTzgwp3P5YTzwpoeoATt8jw5gzAytnVuUhy2XvuF4V",
  "key16": "5QrsJVT2X8XwLncCGVp6fZmkNvnm1Y3F32zgsdyzx6wQv8dJSy3jRKe8Hhy4ZcHRgAnpQaRfPAF4wiVFfQYZN25C",
  "key17": "5UBRk6w48g3hSEPqa8SDQ4pN1X7DSLXBnaSnoQSurdLADUoUw8HyM1UCfG1WQXec9evWgDQ47YXhwCq93vgeRZvS",
  "key18": "33rkkXmzJrdkQ9i2NKfnBUtCA2r52uBsG2kxUzwbGm4bhwYb1D7FLaEhaYQpwKLxoenaBsJ19kRVKR5c7AARHPLJ",
  "key19": "JQCCSk4fhyzp154NJrY8wBpLSVsdnwJ2xPqgBGpejPUJhZ3DGZcrGfwtte9mL1RZNUJywoNrumFuaYU1Lr9PwCs",
  "key20": "3jJXsVYyvhcHLRbSLD4FvSKYmDwWpJDYqdiK884NEky1HrHoNT8GtdzJjMzqU3BxEPw9K3GtqcGsun96uENF5ANh",
  "key21": "3mABjNtNEw6fDXZuvCBFxVioG4pmh9LE8w9TLDmKuezFnGLqQiUKr3C1974JDHTdHCJF2Je77CStW8B4JMAASjBV",
  "key22": "2eBbHouj5N4B8DYyGnEP11bkdLkyNBSPcGmzjGDHYmKKSaFvfk7gxVu5pFc84hqZT6MxbRSy497xjn87uCRzWCuH",
  "key23": "47PzUqyo33FTyhDT6Tepbcqrxi9AqPEwuwjHGPN52jrJtkBB8wg5omKuiAcsRqntgtQ77NR5DwGzFeWxDptrBaap",
  "key24": "2D7DKLsHUWxEyLWNRVwGRsaWaZu77WEtWA9cJdHomicdZgUYMtqp3or6tg76uKgBQg8GZ5tfR7niLkAvgfwzFJK8",
  "key25": "5QgmZ982DJ24UfqGsasHWV1L4jVrouBp9nfKrvZKNfLehVphMBZXwRnhgpm5csnYNPLwwhZw2ZGGvokTeGfmeRHo",
  "key26": "3beaY81y765AZtdqeP3GdVcVpdmMZHJkKBFnygmwaM8xm6CbHRoQNTxdHJP1fWc4Cobxs3HBjrasJWqA14hu8RK3",
  "key27": "5Hc6scZtyxidc7M4c7nZL9s75TshihQu1V12typkfPPjxmgFThr18t7UwnHvPamDUbv3BGxMRLMmXFXSd3b7aHJ5",
  "key28": "5tz56VWSvNy8vrN3zbFyKsEopFXUoTCVyW19oU21C8DfU7vamiGkfgLpdghfyZT8Qz6En1FcH5DJMABtfAo5vN4d",
  "key29": "5e2ThBm6oYH7h2Ubg8Sw8BpwY7uWTtmeSFNgnFZ8eW5GJRGmwUV5ZvjkH2Hs8vSxnD9zybn9exQY6gVku2TFppWQ",
  "key30": "41MVKtN2bcU9vW9eF1u3SyA6JmwCnPZ45EbM587ioikaPixuH2HYAbvNMwtqGpEvBs8hwVUGk64An1gnY2naegZV",
  "key31": "GpZibGhYykivBporyJjjBcnTN35zffQdmJrcEYqGBH2PuGMJR1HGpzTaJDSFvLSEFDGnVCBBNWSaQ6HNVRqnSLc",
  "key32": "4e7KVBTAJ96gcf98qugePrmfWVyU6h54JqT27FsU5xXaNqv1CR3BoBbGWJz655suRh8hsumE9pBiLHiC4ToCJE8V",
  "key33": "2gSHZ7KKhXtju8TfWARgMpfqtJEdk1ndXoiVXqzPCvYpWBwgwDuc4yHbCnBHVKUSYrdZ2CZAk8k8NJSK2FMdmovh",
  "key34": "5jzZpZjBcBAebagKiS3oc5dzcvG7aoEEmYW5LwxT2kjM8vUf91uEsxmPQ3icsh9ySCWpyaWE3MnCtZpNsWGQwy9L",
  "key35": "4k7czhypACoY2iDAfHPouPkeF8FHvN4cVJS39YdUbGfymRpJXjJAwK3SLLFHpW2VFMfBYPm7qCAMa59KTXCAPMyx",
  "key36": "zhPcnZujT8MkvMguFQ9r7jZzs8jEyf57gLvDYtyfSzvYVMdJi5qzpisqiTGBYSSz79UxYc8etQUhMyUDhth7uxH",
  "key37": "4BoVuQJtmHssVhaTkjNzPiFiavyyqhKcdrGyLSZWLGNBqC6SbQiSB3CekAh1gxu6ciehNNBbeWKkcoTwg5TyvuVz",
  "key38": "3JdSi7UJLbH8KcPTocNKU8kNB99Naa8zptteuH5nMdEPyS6ndwbS5psZgFvgotgskHMYBFeL96rkk9Yfc7BCjAVD",
  "key39": "495BCvFZENwVKweDKouhDfXjgEpsrWw5XeVvHjVuBwCXQQhTdbkCTqHY9ka5kvaa7bqxjs9Z45p9NnmKvpJDVcRz",
  "key40": "4f2tfHQsT4T9sMWoaMHjfb2GCZtMi9itYw11SKZSD67497XWbt9stqLZiP2XmZuREkXNiLn5tQLzCFxZXE1RpJnn",
  "key41": "4vZTNjXDXT7SV9ECUax8KQiWpaNfkuym3VsfBJWehdV4aUm5a5B9cH6nmEHjvq9GMFRhAQPQ7SDVZ2GcR1YpYADr",
  "key42": "32zwqjTppU2onhryYYKj3dxuMShVwXiZzTFtk3ozZozhEfgnfWgHkFJtsCwGFuRnyZT5GrjKZzHDYgte3eTFprnP",
  "key43": "3BLgTFPatSBh6QJm7bXUTghG8cnyywxRkemzSEK9hVW9CL3zGi5e5xiL1n3TstriantKzL4DXZzNDLhGsuLEimKG",
  "key44": "2eUxJNN3eokRa1FYUniwf9AZdYBdQ34fTrQri83TdpYQ9u3J6gQByVd99AgKgbf6DkxaZQfVeJFKHrn78tgCVcVZ",
  "key45": "p3iryvpBaHumzZboUpxURsrBsPwKNU6HnpSmJgTWb3LNtynYyZUSWrM6iHrWPKpNDH83XviyN9NpTAdmbRVRDGo",
  "key46": "4Em5io1e9aVV7sbak2BuarVfQtMrRPsj6gzsEggmfoL9egtP9EiLANGk5VBMWAzPt8Ugst1mCQjACryajgJFD6r",
  "key47": "2m5ce431FJ29WRRryna5zTmyTmPEswwkvHxFTY9revRS1nB2U1WvWNQGGPtAQYnK7pT859gGCFfvJQukUoB4K2NG",
  "key48": "5513ddtGwnKmfLiKJpU2FxkqdxnNEcGR7b2B7KTVokgx5KrhUYb21r9fK5W5tvy3jkMymwUu1VbKqqcWVzJRSFh7",
  "key49": "Tn9sAYq7LZmu6S6F6RggCPVmWpMMhtUYDANPpPZjY1GqhwdwN968sB9djWKAaizhMCt4Xfjcsov6fdxEwD3dsvC"
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
