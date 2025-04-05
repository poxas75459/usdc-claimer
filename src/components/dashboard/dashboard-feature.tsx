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
    "2NBuyYGpVCvo7HzK3r3LbEb7GPPXVXBdAniU7beMSZ8Y6WEWhjuGA8jPzkDEwGgJLtohpfSFZB44qpC7MksuKXqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nyacqjQDzStWMH6KYpexsr4mCPEhFsNGABLNyw5x2kudJupVxFRbPLvf41uUvcvg9V8E7XNvHFpvLhPQrwn3gAe",
  "key1": "5jFx2HRa9CtwiGXV6Xa4mFFg9gsFYTAAoYu1jfiPmoPnovDAmXw1aDvoyR97uq7UM6PAGyurJQJ5YTPsxnB4Tqdy",
  "key2": "TptQD1vUr1yk9U4HNPeHntWL1V7pvU1CPvgNMQ5yRao8coLPCLeo6swrmcrJjWxb45ZwiAfqcX6vDP6cagnPoed",
  "key3": "2DAw1rudjVsue4RxMK862VwFsGbsXUyENeVysfPax9RWoPPFNmJXJVVjKenTcudvdPEfVH1otgoPduvjD5A9WbWc",
  "key4": "pnxgNaNcnA1qPimwBeD7HyEgKCNK7kWV1LBkxEraAR2JT5JHhjLCLbimqSPCdQ4goYCK9pMZqmgFp3ak2pQLrnR",
  "key5": "3yCyXUDKNvHTVcqZuGtFG9CCvWM1o7EP6nXjvYDUBsYjVctWnDanQhZav6QtikZL5uqu2hAe932Rxzh1rT6JSi6x",
  "key6": "5sCtoHK7Nhx8Vu7Hdnzvzop8gazY8ogvc8uhm6uhgeoKb9hZ94DRDrfo2cU3dCsTtHGjMBP8miYCConr8Yzf1JJ7",
  "key7": "5Xyresk2Sw2oP8LSwjYHnEUk1Y4pswksCppW5rEgZuEcSnDy6Zt4Qo3V2Tb8pNbr4dJXfqEPaDbgYMEEG5Mu4N4L",
  "key8": "4DrRQLMePSDWDpXGYhgC9S7B3MxC2fBPgJpZ6AfctVxv4DrRnVizhAjn9kjVEYgMxjCi7cQrcYjYGQZ9VM4TcFv7",
  "key9": "22aAi46nJyM6DTVYvjsoaQZE2x279YFb5aL1TJVi4Q2cVSSb7g5r6hFK9kvphFuJko9S26vGtDXEXSajJbv1LeZw",
  "key10": "5oFDKyzPwDMAN5unWyyVSNFcHftMA6nfiJULiaFV618W49xkVhpQ9VNW7UYHKBRXM6Bzs87aZtfXhmAbdJCdumfT",
  "key11": "mWT6o1xfsJuE8AsZWkvvxPLWM3WbbF7qP8m2s8Nh2DUBWjrkxGdqPY1khvcvxxAGpEdoqvYgC2xAuPLP6erXjiw",
  "key12": "2quW6HgjqraXhBE71T1u2VTLQqgYZRwDUCXYP1X4cwUjzr4x1ZsQZYGe86GxXPh2fnnyBCSQjVzJeptxt7P7vbfu",
  "key13": "2bJiH6ZYQ8PM8z5BuAhUiAZb5qknn3Tbvucm9kWqjAGJD8cUiLiwvJVRi2b3kZAAsnuqFVbettNAwkFfcSrVSYN4",
  "key14": "4EceqtcAP35x5FpjwiLcWHcUGmRzLj9vpeY1eWUV8joYFo7CAvHzWXvvP8KT77wDAR8ZQuyNnDSEtwYLMz56e4HE",
  "key15": "5ddXuRf9Fk6LRy3qs5RhzGHwxkT3ofN2oJcaLm46HyLsqrTAjNBAQFzfg7XippornbAMbejQMTLY4MHq4MycpxtN",
  "key16": "3aHVVbfYt2Aeip89My7vQiHLRXikCuFDfPgoMxyoA1TL7kGb3vAJ5joyp5Gq9NvQRoWMvKEkArhzJvgLZCV3LhyC",
  "key17": "2F68fHiVheE6iGMhFnouBgXPLxLEzeToPJbjcgJkUZuhmoXsq52hYRe2NLXg2CSFXDZo47dBF9GTP9CcTf3xuukP",
  "key18": "5L4KcqZQHMWLa1MR56AXRcVBViNGhy37Tp5kBhKk7qFJkGvjdLqFXrP1cWRyweJhWzwihd5S1PZ9NyQuxhyNk1uG",
  "key19": "3Hvk1zUZsvyN89VumbBtF8sXKJ2PQYrqXdPKR4rMSEhwCZ9utenRqF6ahTVKWKrrd7MU8nXDfHpn8xtgVv67eYsZ",
  "key20": "4PH9qNCWsXhp78YN4exqQK8P5UjahMmFqEamnLmNRFiscXtuJt1wD2wt6eavjADrNQ6U6pxRrFYf1gXxx5wqt99L",
  "key21": "wQFM52XddNUwnkQYbiWQsfHkD1UEBjhKPnWxUFwexHWJBLX5R3jUyiz8zJ6PdvxcYsvzvvWKqA9tmpkk5CufDbS",
  "key22": "EPFd93QXrfhxfwAnyRmUYhSdPY5phKxhqQJnmfG8ExgXkcSWDoSYQ2gyZFh4invBTpRp96aNuCsCsKfgp3RSit8",
  "key23": "2mw2F9L421NVeydcMhwKwjGrdUZft2yQmrTeqPTCCicPTPJt3B81PF7JUUhZFePGMS2cfgG6CbPa8t6JzrQSstvd",
  "key24": "53CXTjshro7dpYJauTGSPgMF4pgupnsWeApfqoC1JvXhY7qVt7fpWAgSkHjFKWhFmgeTnx8w632uZzAcbadNqSAm",
  "key25": "2Mi4BVukVu1mg1wHybXZ6e7jCu9eLwDZq8nGhVfjbvroUENSr7nVvQixBwzmh1gy269K3vGp6xrczHqm8ewKsT5B",
  "key26": "2yb7qcHmYMeUgBWvkj1sNV87TfRxSXgLkESru2V1YAzYeYXc7LZRg6pYUpRv71rDxqY8WRDerFD7i89Ey1Ny5jbb",
  "key27": "fpFMmXwQarQ5zjqkf9FJJd2uerhw9ivSqWfiQdLoWkY3asMNUENZRe8JG9bpZQwXafyqhzhxztLuiYK7MXii5gu",
  "key28": "TEVm9LsnpdjZixnDLYwvjfkwZKaGxijU4Gy9aAc2z9Etwp6ZUvPDrafPt7g7H2MmyAfbnwV6hvFHBCSyrxDYZRX",
  "key29": "49da5C9GpAHfwozZZ2EZpUVMGzq2gpodLoEuUgNKsVuy5xwHYfFz779vxswhrrjwx7mQkqZifG7WdP5ZpYd69LVJ",
  "key30": "3DczXwJ7TDv3ckvThsSv3pb6BEq15xF5uz2EegEbGKR1r3GUmNLWk9fYw2bqHEGMm9jpZ89gKunubv2kyRGVEHDe",
  "key31": "4McyPNGAiDGJhcLMGeD2SsJ2rb3K3asNxm8pNUBF8HMmytVXeer1tW3GJxrPz6mgpfVDQzoRWtLWmtRgv9n5jUng",
  "key32": "2t7UB3sYSN4tRrscWve7ZwLLGVKsG2SbHbptirDrouD6WBLwgnwKUuuNmJizaZuhuiyRufw4dDZweUGyqZdjCU18",
  "key33": "6CSxhxjWzceDktmMkZWMYpyjipdsURizhGLnz8DgN3nreEUJVWKBeWxx7ymK6GDtjhus1s4w5VPq3B7UxsnpkDK",
  "key34": "5Fy6JDbsRcMizuwQAWmeS4FbkJVpx5cuUfTAWMQB5HU1nVe1TzdkMS8gYnLYaHzTdK2q2MXKEXwamwVuWW2DxSX3",
  "key35": "5fZUnuK8gPueCnWcTJfGhE6HPwD9Jh57GXix54rf8xJSVMDjnFquAJm9hhjg4Uv7iZwZVbTfbjVJygY6JM5jRPB7",
  "key36": "4adsXYctuFs7cBB8ah4U7pwdq5Q93jkVtghpayGoZ8oRrSAmxiwtXrtYjwZaFQhebtgUHAMaCuKdjDv95UBzkzdP",
  "key37": "2FgYPsfvZQkN5PdoCX6HNoHsyXbhnudR6EmPxJXp81nFjhTnfsWPdZewdSgZxCHiPvgzAg6VHo3Dszz3AmamK2vV",
  "key38": "4RAwP3Hjg9rrfauhiRWsWMsofH25pJhYtLLjrT2vt49DiN8RYiwwuo8H2rHfBkg8mhhvTZVK4exAdtfK3KNix3CA",
  "key39": "62JdXmVRi6hyPExL3kE7dp46rHGBSZA4pXy9NioW9TiTjfrCVwj6KeENL9mEhV1ErDQAFoCo3KtGYoeuXJL4MKHp",
  "key40": "2Rtx93jf6dxuSZgkRmhPS9E7cs4pTJyCBePikgV4PSZmomdeRoGqjFQ3X7J8ia58cqA9QwJqxzkHVNHntCn1j8im",
  "key41": "2ZiRc1ZnUZvLTwaKJ4yaYj5ZUWS38zcKRYk3SVKGiSX5kK1x6HCwAGJQk8QymAyff5oXtCEdLMKcRyKeLmdc1sZ",
  "key42": "5sfYM9ssDGPtM3PLc3E6AmvvtWFZ7oY8D6YK97mDrmTjUMqgshSXNWWUNcuTpfiFpUPisTw3BBei4dG9VXaHNG5j",
  "key43": "5pKGC8jQY6uGUbbHUgRGrWTZWjxUMT3yGjcpfZP22yFFfefdSqqqez1KhqAkfSLn4vwQP8ZpqKXKKnuew69TTDuA",
  "key44": "Hi4XAhsw1uZ9LXG4v8xtBYzxd8oufjHnfJcYLvXJg1peoF8u5tq3xNMzbfBCGUXKjJjiqWNRXBC4vCK1cm3PZw4",
  "key45": "5e58c7Jp62n4WwZ4buJoJUgbLxq2YiYSLu4HhpoLoVLZsYJrPYkrH9YpHYXbvWjjU3UZiFGThsnY6y9Uy1QgRgUT",
  "key46": "4xnFyNdgubFCFCHDbmiWGMzg2qrqP46d3hrH912QXzKvHkVyWLY8xEockE48znHZhKM7wkReaKoHCwGV9oF1omA9",
  "key47": "2bsbkqGQyjDyJJzQAggRiNmeDsFHLC8wspRnV9Ms8GxTBTc4NXKxdrKjHujNHWMUW3GBuUD5UjtXHRkKgHVaQ47c",
  "key48": "4sAUbsud3HeXHinm3F2vR2dWn2e2azQKL7QfggVS6f1XzKa4MQBFCWv2JzPLitaU6mWKrSz4Hv8SZSNi4Vwr4ap9",
  "key49": "3BtanNGpG1t61FbrtWFJ45fkYq8SADFMGzLPHLpXfkUqNjeEwBhhNTwgC2hF9AHWiVNuVYknZJQMRcsFyNTZryan"
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
