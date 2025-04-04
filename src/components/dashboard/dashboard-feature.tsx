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
    "4Mu342jbuW23gqF2Yebdw9T4Rj5KECmbnA9GR2ykagh4y1Vowt37DxgRJsrgG2PbfWBN2s7SmsjVSg1fVbhG3ta6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fM4yjDLrFekVMFdXa7k5ya8ZkQz1rbG1dbC9K2tpoKFypJeN2k8rpawrAir9NALhLDaapq8wwTxpv19tpSfCZZD",
  "key1": "25QFfTMJyy3KjwSiNUWxhhpb6aHdP7hvsgPmVM2BEJgdiZVxi2Q91FSyLSpXRqhkDPjVvLE3eyE4TsXxcnJixRKK",
  "key2": "4NXtmW2kiRCPaF2bXFauhyu6Cujk7zp69uoWqSL6yL3qgfSGkfeW6rKJ7WtWRYbiaCEMmZstd7T2RQxpc5zonD1C",
  "key3": "4VTHVsrrFs8Q86mFuotaARQg7vc1sK6XFFhQg4Fe1UPkFD6RZoeCTXcMF7MVyFAu5WbnT3EYdhRqD9bw85NGVoa1",
  "key4": "39G1FFRXtoAHAsh9AF85XPdUuAjcsBLWiVyuLZVShZAWoq3bkPngrE1h6Qvkf81tZoQxVCHQrSaMJn1PZJzNCZFS",
  "key5": "3JbiiYUk8Fbtp6NTgsn3kogWrsMiEuGYWC2P2zamqry64askzgVeVnpsP8Kd1m97TNLNZ84A1MQFnwuvURHgHKcx",
  "key6": "AKhmzc8Da9dky5mtjDMxhmTTPqSwtQnWioq5HUR6P9JpkL5UKEaZ4rPWiutfgu4gCVhzvtb47j6eTLbGAycwsnN",
  "key7": "3B2cHdKN9nGqzhn7yXwu9hAxikfoQw1JAiDy56YvN7viVMKx5MmDd8bfD2ccMQCHXniMAPdfigeaa5KahSPSLCWK",
  "key8": "58Bp7JEVcmRt7qA1gEQUVtNz32giPsi3BC1hwtAFNeQd6oHry6DDRCx8djjRqaYXf8rFdfedQnhqa8SiNjESnrVu",
  "key9": "gcreMn7BmNUnzJhNvhBx2UtfawcemF9RCEZePzP9unp9gB6tVieNpHuMgKHsZCQb4BhC6sqEZfkuKW1uVcATJ9e",
  "key10": "4kYiCxxS2CuXFWHd93XWCZkcd7niqv7ANmcZDwLmJSW9jNpMJ2TPTmUmehLah2QDHznuHpD3KMLbBgcAQrgRVjdZ",
  "key11": "63iEwpoet8UkMqFZZBUg5ZkpnoN2U87eHQdVxAWycrf2Nzw9vrn1F92g9Tcbqh3BHM9ZB1DLDtTEkf8VTitEZp71",
  "key12": "48gq93uyEbm3MX1mYq3rxFnJtyVPZWRZqKZYiZx7Zfhb3oX8M8Dm6Q5APtUcmktPR9AKy5Y8Y71a7GoLEM46SiFm",
  "key13": "FwLwSnNi8EPMx5d9okvjMsc1XifpzLfWfWkfJKpA7AFZjW7GWqNJFo5RUDB7acBSFfuaGoPiTgLDGF2UstFZDtD",
  "key14": "67ot5NvJRd5x5qPspGpkch8KFzVrY2CqvUJSdbsXjukJcqsxCP91miVjpEUCPqrYCr52oR4hdfgPQQqob1EAHkNv",
  "key15": "2oBpHY87NyUCP7RNowzoTuytYF1mz9ipqD6EmEo9pvcYtkTY7p3CmYifWw64r69pMCeuGto7WddGUYeQKQQAWuPX",
  "key16": "2kSiw1BYQTboJ3K3WP91naRBNw8fEt53AHMJofUyr91ECPymQdeqCds7CnYJRWcJ725f3cbenh6b1CAYGphNYss1",
  "key17": "3cfk31RxXLUmpTgBiXVUXARgq2B5cgjhoq6rvCci1VWGmX5zeSU5BcGJgtf2xtL2yQ87Lk3iDcFyUuZ1qnfJ4tN4",
  "key18": "2XyCeYdvZSKYfaXesaHB1G5YruaaYzAETe3whUWWWHtGYZMzdCo4Ndi6ikcUtfhaxWwjWLHXrrTG9pDZp5kPgjVT",
  "key19": "57UT4YRSugrRP89zZELv3EYzrfqzNKc9pQ7hosrZmB5BpNCA6wSWYTcMtmyTvthWMvwgrgyWgEe57iA7zcrXpc3H",
  "key20": "3WuBCjHr4JPm5fjVaZstfQerU6BE7uUAm4gScwA1e2nPgZYTh5tPdX9p4QfxdP7VWYqFnYgJG9MFUmsw88V3er9m",
  "key21": "2QLeEUdca7oi5MHkMv92krDe5rkJvBXn34F9xt8xiQktGFpCQnPAy5fbR7t6wx3aMGBaoyTAp75apM6HH1vZ8rUm",
  "key22": "4q6vzKpeuSwh4mXzspapJKaRSZ9tT9R98NyKKicsXdi9Wo98Uc1ojAFaKi9oZeDRWDzyQmPgJjTk14Z6NMhhgAx2",
  "key23": "rrhZSv36gvEzJNJpRR2YRqfrNt2ebXkBNiun78c3XPvSzvfatTPTWZDiVpqfu5ovYtTj1r4rS9XacZTRjHXg6WQ",
  "key24": "3GJFVSU1xDmWU4Wmidvd3uTw9qZCeefmiYw93Us2VRA5gXq2fuUSmo1iFkTPJEtZrQzL2GrWvmtndrMheUz8yr7x",
  "key25": "2LQbAxziNYCnYpeXwJ9CmqmqUnSGZC15n2y3QpF1YxrkNt8RkjwgszUPepYEX6rUGZrDC2dq2TuamzGEgMcYJQj1",
  "key26": "9fiaKfQe9P4DRexmy72M1723B9qARzWJB4yV46xDVCALWMrgVWbE5vXK2SniUtVLrwPyLQGypKkzwAT3eTCPBGQ",
  "key27": "5o76itN4ddWJREXwbHMQVq1vbbLsbruj1zPfD454ouQhGiCNhCVkNSneteaFgvcqcozvnKyVhE4zUv3ymazVoaXy",
  "key28": "2kXnwjPvsYdCd5pH5XqtCKkrByuxD2w8AS2s1oAfLVWgQpqz9Sfiz2PT8GRTKf6MGbqsBtyfyHZfxCpge9MfDENV",
  "key29": "diSLTaq7s6PaggvYXRcF6NN8ZqXxZ4xrPYHrXubVoorgtBBB8PAX3YRxmVa3MuULg7pNcvsx4QQKRmdWW8vgqsY",
  "key30": "2jbeR6wbAD96jSbedpxqZKAk81dw7Gp5fyFgpU1x7pDqiiUkF6tNW7Tjdwrofwn4DYACgDUxk29uGi2gxJm6JFHP",
  "key31": "5yqm8zBX1wGo8zZTVpGxtJ6osGDTWy21ByStZsEoNwtB2YWw13AtUCGaksqjVpTkuCxJaV2Z6Bt35fYKHFPwenFL",
  "key32": "4aKxWPsgUMeqMp6MjtcTH6LKbNEsBBzNfVAiAhzZhWz9LMW97LUtgT8jYmXGwJDxhhaMufcC1ei1aZRqvciMRAUh",
  "key33": "4eNJUR5ddjms8EE875maFirFQLqDLd7BjeDfDBk5pdQGW4W3xyeqtZQMkrq1C6EmJXqjj6tCBqotLTaq9VzG2heN",
  "key34": "2jS1USafYZkhZN1UCs7uvRVCFnnKG8ZsRYighpcFdNkr5JFaBVqXNgXwVd6SwPmJBLej5k241mfVg7eo2YE9hFe3",
  "key35": "3UFbNiZT5dXLwFYT5oN9gnLnhoujsmA2FyBcDbp1EghMRumTqZwgR7eyLuUD3ZifN181vMVkuiUn2wdV2DxZ2FVw",
  "key36": "3FwhwGCW1xpWBBkBwH8iwMu5HXD9d32pJCEXRfUBBTovBNxQnb4w5EfFo8nMMTAAUvGkGkGqRww16TncC5g3Lqvb",
  "key37": "P9Zuk4A4wGWEYUbQKcYXR4YL9Mip7Tb5jx4UKFzrdo7WybvFikLMJeYXi3bFVqo7E7m1QzqEAv5zFvg13m82mU6",
  "key38": "2Abgfp7smWUxhZyR8RiNyCvrtg46h7iVhVdZWsgDfod7Fzo4PwsmRo2wQjZ4yvd3seCP5s9kGw3NrogMwqiCgHfC",
  "key39": "5dWDZUWWqa77BCn4V2JiRj27BzyyGQueKDVRoYDfKuXMUdMGTuzRXJZ2zYYCR4NDjG2RBe6z4hBe1HFCv4iZzzxZ",
  "key40": "3KEzmJoZ6sxAVzyj48L4KNtY6ZBZVuSQDb4gUxRcTRAY1j6HCoa48Ktg2rBUff4rdey28Vmpc4teGBSrCp4GYy75",
  "key41": "5pzyGwy6Lv81qLfHgVAvLs1WkS2Makmeag3rM6hjJK61TYqv7v4SR5fKc1Dh1WEK5yD2WEfoAZ4uhTgvcLZV9uSD",
  "key42": "cEZNsy7iwdNujPLZFtdvjtCmQCx6gjGdxa8dURyg3djYjh31c7LXw4kH8KReZ7kxwgMhoieNjheeAFsJ9mMMetb",
  "key43": "5tHEoBG7mADaaxNo1GNYsDndSoFbQndL656REVepWXxFrFmacjVSNd2SEQYsVCGH6gmAgp5okwTBVYPXBLXqQQDF",
  "key44": "2Z81jbp1aZRuQSKAQvk1aXrpMypxvKKWnfiALgodXCKAyX28FYVbRGm8PNe8exAKjcQr5yN7pYYCxZeTmH13tPWm",
  "key45": "5Wcd8YDiixfSxbHfsrKvEQUicKCcfTrjWaiKaVyTPH86LoUJpXPjn9uRXjc8NSqWKCwBMBES4pHrBpFWG5MSn1K",
  "key46": "2GpJV3cizWARCYFv25sXPGXkPDHWiJZUXKpqXDcSLpcDQDbZcfYn7xixSuP6GMaJ6mJjj2noC7BzZwPGWmTFVtJG",
  "key47": "3sq3U3cXk13EkErjoD6RXJyFK8482ykfnfLxfDsW2YffTXhMTiHsC6wuNwb9DvYJocAx8p2JTqvbHjaEqWPoUJN3",
  "key48": "rfs5anuFzqAbGt9a4TP3uMtrA2XTSSV67LYGCKKHkwWcv8b9X4D6pbc91FoKFYGzb9JEw39whTCG9mDsxnXbZRe"
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
