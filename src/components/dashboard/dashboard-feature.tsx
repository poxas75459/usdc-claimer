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
    "4FLPnGiQQPY1Ke5Ht9UEJehrUnuh7Le6mQrFaKMyuPbJv73L28vHYwDizgf5UjBU41u72trnUG6jYofjv9R5oQhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zrC8c9FpdGPqpxLC6UYLJJWQYM3evds3aBEAvrosWMRQGWVEEbFxPbyVDacTqYFCScZaj5FMUF4QgKWqKYiFbT8",
  "key1": "3p1QYEuhrZSNaYqtjjKivakYbdqCSaQh8zGG7oTrdjnFKpEThMJpfmjvgGqe9wGg1uB3re98SGRW195RoFeqT4nC",
  "key2": "3RztBf6HtAxF1KXRj9LCF1LksgmYUzCHmEhQFRUZVMuC9QQkPvwz2kxe2A7Di87RXfo9BuaTEHd3BbFA9M1D2Vaj",
  "key3": "5YL3RpKn6hdgfA49R6vkrBTkSnJbZUeaTK9GuWyznpNgEAntdXj8M24AF5EGPpXYi6K1fohDAc7kJcBrFXVUHs7F",
  "key4": "3F9tzf4eq6YG9zj2S7AfkYfT13JuYtWSxPZvjz87wBPP5duRnBWji5caDiwvvGB2cUZvNtHhsbM7BY1YHY1mqW78",
  "key5": "2PxpwVUTHXYerPxuKDgLBEBDyG655zZdQwYxi428e2W68DfSApmSMG84CuZQHytrh1Es3NU32hm3vrrcLmRvbwZE",
  "key6": "5FdQaaPjCNmYJYidNnJxTqfyaC8eoerPrAki5yXviFWKQfS2cdTYhKLQ4dD1wJpQe41ammi9dNtofpsPcZ16p8ch",
  "key7": "WTbtES6Jj3ZhJXUJbEqupg5S32FKf4J3cMaeyGS7j4wZRV68YprdQL4P9jBMA9vh8YA51pTpD1p3FsgdcLr2waW",
  "key8": "2nWVaMy2DYjjCanHaCcAA6GzPFuui3UCuviKN6SD5jgAzaHAznVHpTLWcp838e9XgV1rs4dTKfb3Dw1pwUzF6aJD",
  "key9": "2Zw3aSnEsn21c92wiZqoUsyc1VwJBf7nhNMucfQgjayaUoiL3cyJkJrbJF3538CV1t2qGrXy5wJFXpzRw955DS1j",
  "key10": "3SYRT1QZTs4htMPcFmeDwCVxdemRgBz9q6S7ngD7azXJyxj5Sh6R2FipEWsbRvF5GHEk2CLtbeXj3FrxTSsxJRdg",
  "key11": "Hn9pKGjKZDRFBLBK9fX52WeX1eoq787Shm7ZycsFnu6gJeX4hxt4FW8smswCXjFu6EBtVvNow4xSLj9eyFaBomm",
  "key12": "5t3RUgCV8ytUfUa1gYkM54mz7HeLwo6yPXjjbNGD4yV7trWLoo5QHWJ8psASSfauzYyPfWs2baJKLSH5epzvbmKp",
  "key13": "4fVa2UBKb1kgs7gJKdciSt2AajCueM12h9VVmGqVwGpQUHKukFZAcHzNnZo294iX2p7PQjxdV9SZFLwmkJUPLXyB",
  "key14": "4Av3bA8b6fRStopsHVoknnx2Q1W6uEBSdSj2mVm1CQ5eFPBai9VszfqNzxe9i6xwYb2AUSkc1GJUb7HKXBFBbuf9",
  "key15": "2bZ54PxHGgMBRioqBPfgMYRZcGnfiEs4sEDuouzXdZcj7ZPoFhPgbZQSUW5q6avRbSdtf5nxDF79hwhNS4uXzeLy",
  "key16": "23DmaG9yiPqsLwjfhsf9Y7jqmcxxakMCLT1Y17KL2WecGDV95X1NYTQxNeSxgG4h78PfCaqCuaA3M22qtuEG7Rg6",
  "key17": "61JPpj4Ti5ZHmRWaFCxSZsoZdEa2dKtuLmGNsm88LFbbu6E2fKu2ciKsrvJH74ZqGvoR6HbgGRtptXEE9NBioeGk",
  "key18": "5HGAPxkcjTQYmMuGHjyWQGmwsdmB2hasWVNgErdbnVJsdP8RxmMRtoeE7yXQwN2TC7C54eesznPgJRYtjGPixHGH",
  "key19": "4iDv7W3tETAd3twQjAZSEkf6H9LD4PwnDEedWGSK3rc5zeYoYbKs2d22ey5aYWR6zGpX72fWD81CVDJWhg8FR8Fb",
  "key20": "XkDZFEHnf9Q29haCc3TbQryPuFgMVvQdAXyv4u6HTdNw6nM66J3mnNYDibFnafe2VUNibpR1PjgFBm5ehnqtK8F",
  "key21": "2HAiDzya5xXSHyE4B5uEiWQTwgB96wyk4Q5XBRh3FNjLtm4zN8WNEZtjXujoxZzZCDf7kemtbC91USBSiro694c5",
  "key22": "4M9D24K6uWZKKZkmCp1JwviLwrRntQ6kS3i55CE7iqb4N4erRuEUTWEKXcx3P8PNYYKwL6qgaR2VivdtqU9NVoLy",
  "key23": "SuErd6dBLqaDwvWA87eBfT9mrVtACMo3Djpa3u6Ko8SzHKcXnnmAPXSErorFE3UnjReiz4utLAqvLBBF8VwhURv",
  "key24": "4bmAG1mvHaoPg1c5x27Tr2esz9KADFRURgmsEgATXKbd7BwD2XsbQq1VCKCpV4dR61vafyBMXfyYDk3iTLgKVoKY",
  "key25": "yoUXUwJzi8P5LehB4ndemtBiNcU2WZy1VZDEzyAqk4xR3vMskbrtWEiJFtybnzFFTskKD7HcJcPtwFCxGk9sUzP",
  "key26": "4gDpSAKzhcMFGv2fWGXkh643mboRy4yq8hoe1e79xVvXZTnQD1gJS9Fteas2TDA5s1KRrNQAFK2Rnfp6xkQk1V1C",
  "key27": "4hDN6JiukR4Yh5dFL6FJy5p7sYDWhqPKZUxxbZpDyoTW8RyBLDJG7RenfiDZXjuHjnd7oPZ9vYUqSyUXTbHKmMf4",
  "key28": "ZAVKhQTwmCkL5ae3Dewm193bcB79y4boty1f12RC1QLxPdqu6Ptq37zKSVWrRr9cw5wGuP44Revex8vtTt3QpH3",
  "key29": "ZksZYS39KTgS1wk8nTfBExw4CNvpubes5T8XYA2MntjNNp5jvGevM1VNs8hhCdpwwryQjoF9dw6P9S6EYk7Q58d",
  "key30": "246CYCuDZTe1uCJoaBYk1AFJz1FsxmpefczJ8dyQtnjqsy4GYGphNfEkGiHh4Y8egnru3SPDgW1BGhuX9EgpNhtn",
  "key31": "5fMGgJtGYpDmzZs4go1hdyC4V1YPqbMQovcSFDnWg84pXReparqZTNESRH9ooSwBohZQn3p29D9oqbXYSX2hTs4M",
  "key32": "CMeJjY2tNQnZ7j1EHDR1t45c8Y6NbsDuyYdQ2HJvLzRJQ9XPknrSvy5ogRFok4XT7mVEBELWG7tYaXp8UQf7RoY",
  "key33": "5FikbtQW5TJXpHEjdY1ABVk6BueJwqWGxBGnjPh68JFQJ4CcrvgW7dw3tV1MEFWZXfEYFLURSAxLrrgJsQyU1VJQ",
  "key34": "bv91sSmBRXD2KyBdhJAqxRXjPrai3d8hDy3gTTX8DBKW2k68Dgd3xNJ5tcLTgDTwFoS6DjbfcFom1QrjvLjNttX",
  "key35": "5t8rF8d3xseisE5a23ciUVPjMT37emjjozcovskxMnSdhW3xWodnffaCqHDJ681TprCp67wBufLegngqfCfSK3qX",
  "key36": "2hWavQWu9uY4szgw6UUBSNViGmWyn6bbCsi99N3HswvNRgUHQ8oopPxLmjRss9gNsKKbBSCpRTqZXCTueEYcg1rm",
  "key37": "3nJqYZnz7hPGcDn649j4BLPHHu5Jny8fxFThj5vmERPv9zCVGf1CWVT4GD24ZSkEMCcBaDWkav6rLWxm1wewdkwf",
  "key38": "4mbCDyhJjRuAADC6hCAAHuNM4EmcF76EB6EtbGhwi297SWjRoDYqKNdBvtKwMgadrmbYjsNT6bkKy5iBvhLCrMve",
  "key39": "4ufmmBYVD9jdFLYuyrzC6dk1sqaEEhzGudZJZAUkeyvWogWLttk5Wj3B45jkC2dcEMgFEFGy9ML7j1DcfYWoWbfA",
  "key40": "2b8iYcAzswP8HUKxZjRpqGFKJfu4AEcsJdyELUie1Zez3XJhaEohBpo9vBAcMvs1YZwzsh9FggMbkFFyVxv7vccy",
  "key41": "5JhvRd3MxY8otDvfb32Sr5w1HzQMcYrjj6Y4YYmCV4qGXHoJ6TdiqRQnRCEjk2mZhBdc6hsKAhLdSB1CvBqnkDrE"
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
