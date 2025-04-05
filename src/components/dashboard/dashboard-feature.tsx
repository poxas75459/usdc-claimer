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
    "4ZTkkur2VbqhdH8ditQZTgpixSapMaKy2H1NV5KUSqDzP3PUYC36JBwGeRkP3qNSgU829SinRY2YtaAdZ7Hma5xn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55J6jsHbvfvyDAdiytpBHVnBkqUPDGotAa9ydE4VPeo1rUo41Sy4CNhLcXMrpZkEbbtZ9jh4htzbUPEAGsDoYvuL",
  "key1": "4TbkDtMVvimgXCAEuTnURoVihYRj15GbbVK9tvMDvaQSGsbsR1ETxTQk7vZ8KT1ke5NangsRjbXrqUxGYXUAZA2g",
  "key2": "4chTe6b1cCrgAV44L2T7t7JDxYeJG5Rr4vEUXQKPorkTvW28ocfdwNTAQFXsDsv7ffUG76fabBT6RVAgR27ccM86",
  "key3": "5hM4t1VGYFwbkg2Fzqf64nXSLyNnNfcBYd3NUiJwyiKFrHkzm6mRW2FnYMyhs5CZmX6KLDEwRo9WNy2xKKAxGtYQ",
  "key4": "2TPsLtLcEn3MZ6JjNTNZGQBBKy8pqfT5r8WrjuJVzKtX5yWB83Wi2gQUmqCkEMrt98tY5CkoW8Di9PmGJLPTpmP",
  "key5": "3sijFCDi19bLvsb7XarXcHtUo7TdWZGnVCsziQ4SYFrE87e1N1thKqvP6jjATN2XfCntKxjbgKVC2BSmQKDEinAv",
  "key6": "4xF6G217fCBm9TGfNcBLAMFyA1yU7PgyskfvGudohSdMdjuuPPbuyxGZ7aBjhPsCSsM6Q5QKVxa97jnp6Sb1Xgu2",
  "key7": "4zvCfeKz2MyGuSAALvdgiRjEFrTXKTqeTXjGmfd9qmJN1QyBJVvkbiEwEuXgj6XkvHWK4Dr9q5gwfX5dFcceYoaF",
  "key8": "Jt81dYDkwyUAHcmCFshuaKKSfBD5pSwCr5dTxN7c9t4eaNhGUtXq9ubexT6xHyxTZGu4bWhtfKo9Mw4Pfh55aNP",
  "key9": "kw4SE5SFD2RBwihgC3v9tnjctrSwMyioS4Gj5kbjX8jbXdxzLuQZd6jQPGHq996qPCMtTvNKkAs8XgwfVokSqpP",
  "key10": "5KqRWVUfrSb1kzYrh8sU68yq6ULrg8sDdkGW452vmXV8SazJK7TPydMddBRQcot24fdJ3WqtfWzTKvw62vZW2ZpZ",
  "key11": "542mUvGeUNxspLCJ39HiboZkKhWHSZ4xXLAdfAs8Z56FPT2Zu93aK8YXjvBp2wgypgE3V1DitmnqDZZK4i3jSMSd",
  "key12": "5sLo3ZBZ6J2MTqDVQ6uUHVEHNZiD4XZusMVuonHeHF9EGNWtK4MDVNQZq7T4tpxykSNcQLmXRqT4LVBUfwj4ikSC",
  "key13": "5fiqSgMJzko9GtgrgosQAjJ82FKmyRCuAWTV2aXG5wiMocoosHjpUwFE28n4jcQAv1n1EPQv24sVEoV5ZGnjWPFL",
  "key14": "5E4rnUVg7QVLz5pE61gaCEw4JepVP8HYMDMAt6LM215vfCnsdmzM7K5rEQmnVRwzniUZ6VoZUPXZQXmZm3j94Cpj",
  "key15": "2xYrcdZu9fAyn1R8Sn4pj4u4PrFCve2wCzu5sXHRh7SycK3PadnnKRaE2zvjCUiEkWNuPgJL8YGhKpjCH64Y7Su8",
  "key16": "3Wyvqr11684jQLGa3vS2KrNASrVzy3SoR4dKZ8ZbdqHyiDU9yegyDVFy7T4paaZVXqvoT3WKcXyvEXYo1bHxxHXc",
  "key17": "5jwR3EEMSVdkz9cWasdtpNjFTbYjxiwxWgha8s3DJ1r6A2ygrpKFoX3EcweuUzngpC2KM6cxkEGxr8eX9SZaLX4x",
  "key18": "3ZxGn67Pru5QgFAZzbjrRTYMWPYmH6Xbp5AmNgg3qWh16kQf2eGJphw7U41K6iAcGgjgo7r3dbT8XcSWSdRC15fs",
  "key19": "xWtYM5Nofts56jpKk5EzxBvBjehebHEFhjuJZFv2N2MrnjRx2y6reMpXq1e2JVLaonMdJmbdxWzG2yFRNxjrZGF",
  "key20": "4kbxfc6Vem6zqWmRARKeUHtf7EL7gYeccuLViM5ZCZGvkiNBhaAUK3GNohyTrFoh3qmcJYyWShvBQ4qkcJVmwSwb",
  "key21": "2KpNE4B6LuVcEFkX6GT8AJVRsriaQptqVhE43dyQ3gn5MXRRb9cpoCFEEzEyY2JH61aXsLr4XGF31Wtjm3Vh1YGv",
  "key22": "s8NoX9X7Yrv3WZFzL6CZzNoYPzuAzdLVSRv539eHibYq15twwsdv7mzaxdp8egQPq6uThFxbEhZjDKacsMM18qi",
  "key23": "br9Hwcy7YwAuZdzszyM54kphVxUwqyxzFibeYb4YskUiWb5gqEvwrERLyAGZBqPkXPzmgX7ShCZHimnmeQZdVod",
  "key24": "5RjC1vk8CELtYNd1VhcfMzqf3qvVpL8zVKRz6TYFDVsRHkbJ7J2ixEXBJ85SoaP1zLkD6DwJoGSYxjijkr7MoF13",
  "key25": "2X2pWGjWGW9ajA277pwbh6sGbE7Jnkjer91NW4ypqYnajxb1EJxmZDBs31AVzMnkEstEkY4XF8SCFsiAckebd1vK",
  "key26": "4hMKkbTXX8UbPZ7HD5SgZu9N8LZm9XvjJuWqB755b7qXvXkt1QkX9aimR3oMaTRg7keX7G45md8LsfX249nuAfyp",
  "key27": "24tnYKZi7AKbaL7krWNp3MGKnQ4utvi3GRBsLw1xdfaU7jWTHXVroYm3Q8tXMXzMWN2j42JrQKeuvmjN7oQqDSox",
  "key28": "4Va6bxwMBgkYojhH7jdPs7iCcuBMQ4g3UEbFBzEkamnUQX6qQTKCDqtKMcKDp5rMZ3484qhprSv9yaMYmir274Yc",
  "key29": "4byod5XVYyDXQenCh9Vdo7JcmrPxzbR4xxuHjCP2h8n5bgy8JJZ9kw5Cxk5RW1MmTs42VfutK3KRQJE6jATLSJcn",
  "key30": "HnNL2kXuMPUef8HUvNKaLJnU9mEJN5H8JuHL2qg68o6Ac3HJoBo85XMSENp8mcrk9eo85jfDraGnrTfFFPvZ7Eq",
  "key31": "5ChBRaYsTLT7SauSFkdsozqR8CRFCaxargqxmwDzd5S9DnkAUdw4PJub6aC5RvD7G8wHaiSSM7ZjcV2TPWhqerDE",
  "key32": "D1D7rZSu4whbVArfTU5GM1fVfnhzfoKNapZKt9tSAbXfBxBEtbkRrhUbhZ4x453Xfzs5Cvxfjk7Y9xCm6nfXLmW",
  "key33": "4kybAHC2poctpFWSBrbnXQ4sYh7yrGXCbkLx2qum1rNAJ6PASbAz93XMj63FnHYeByWv3rbS2r3kEXftVBcnSKCn",
  "key34": "38qXDe6tmha7gWM4jNWYFMy27eYG5CG51jeSDyGfWn4cVzECmY9xGpnkXYcLuYS6iNFcXxKGToBbXY1TcMYT5o3k",
  "key35": "Mi6tgJoJYQ2xJ5PW4oTjVz95jXoyQuuVsFcGvyCefSZmZPZysSWxE26iCZMrmYPPWgZCeq4mqJy99DSxApznMbb",
  "key36": "5Sx7N63CLKuwb99B8DrefPm3M39Yiwb1Lz31pK3ZNqAoNKUNt5hA1eJAgdrAYQYVxoB2gQ92dz6BEr2JJxxbn9Lt",
  "key37": "3FqhAh52M2fKdq17PMcsa5ySqVmdn8P82gnDWBvpDR1nj5guKLZSCthbN6pq6t2TumxpreLFKmvrVbQQjKaQszS4",
  "key38": "5k3AM71aq8SAqQskyDM5SYkmuftiAxjHbEBwd9vgewUBBWoaK5DaxxPWwis3AMMz22uyNU1ZvGB2NXEqbqrieXW7",
  "key39": "4BDLsvY6A6tNSZCN5tn1JERk37BPFw2KAPDJzfxTczZosMpJuc16pusM76JjinShhrryRrBY2NJ1FNq7tDSwpz7q",
  "key40": "2NKfPkxFVTLiGZccoU4r3f2uQqUqNf3sPnYhCuT4G1VYQ5UD4cXHnrGw9DMXE9xncJDX4rirPWfaSuT3rthavqhg",
  "key41": "35d3vDYEWkoYYE9MtSZmrJco8uAFDbe3azjbvsZ5k6wanhg7nsLkM7SmUCT5hPEwX9qzgSead7TBDZBtRvt7jDKV",
  "key42": "4AnYTViuPspFTcgpXKMgNUXKcNk7p6UboXJ9bDwxGUpqoCpnaMWrF5WWeVNeQMmEVdyehRKv2tGRvkszSYQ8q3qq",
  "key43": "5wEGJhz7Y2b73T2iaNhDy2sWWExf4WHjjH87pP5TiYwf93Ki6Cq7mTWDiT6V9JiyHRQ3TXWVFtu1Cp9ksudcu1b4",
  "key44": "3BhPfboNha1CejkjrbNJNCsWcfUoJawpHRykrwuex7aV2h7vdMNtR3DnuUKPb3EZQ1yXRDWSU34kpD9swy7uZbAf",
  "key45": "3Sipbw6fAJjd2HnnyAtDkbK1H7PUw68HFbJErdkG8tkjviRnCiNxgRvHdpXKs8fGbbFE5roDCccL7iGsZYpG2Tf6",
  "key46": "596WGaR4AduLiDSwAnhXYuQgzgci5YUueESp97cN1xwiouXCSLYdF8SCXu4FRCCyZhGZrdbDwVKTq7ditrsfFHNG",
  "key47": "Sqc69pw3gy9nDdDc7K8SrdJKDUjh9qFaB3HrtvCDhF999yVT69rMHi9g6T88m7hfRwxMBcV7VjGrKSTj5fpeLwL"
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
