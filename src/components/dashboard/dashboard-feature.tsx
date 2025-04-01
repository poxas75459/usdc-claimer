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
    "2PPNanLHzZy2xiCHJUY5tZfV7JNtFfZJGe6s8BR2iEKwHhzoS3zqZAkWdfXWhZXzz8DjkKMCBghY4aSguYSArPpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LvUcf2shqrzyxZx4QxbJ84cCWT7f7eDm6ziySiUX9eD6wunmLM2ZHjoinzAJbmTjRLnsWkZSo2kccp5FU5FNB9E",
  "key1": "2EZWi21B6pmiCAX928RshrZiDXSXL1EQLgJKkhX5uDJrKj7dxjNJUCbN1ixVJrQPGrzPiLvr8g2JmgbmGT94yWxm",
  "key2": "BUYh3bgZMhqvhBfYWwgvkA7VNUwvVtcG3ZopoMdTXJdNipBWKj2ZFijphGgXdmSCo8BAk94Gz5pDDE8wPYRJyUJ",
  "key3": "5Qi1YtUJBnxqpyvSVDT4r51A1WaZM8rCFt72wpjSRNnKJHMaujmXJjXbiVpyenxtDqTEAJomafHWssBzYM5FUDWX",
  "key4": "3rSNwbrmPfYX4oi2iy8R8hq8soaWUrEFHLb1Pb13pxpcxSBXiRB5LUSMx52c1X7qZvvShzsi4PuJokTb3Fng4Xtz",
  "key5": "293wmcz9qYJ9fXJtuhnJpC1699zF7Qxz2Fue9eCaKB1itjdD7Vj6WWpL242eSafxVtyCFjo13kkia3VGhDJDR8Qb",
  "key6": "2dPgC7skKsJiBSBceb5juDJPpGTprXY5rt9ux8AkGJigC4HYzNXKukDAM5Yn35odyNyWMi4i2mXvKWBgcjoC8Yoz",
  "key7": "2RUEa7owhkhwWDDmEX5ThX7tSSqvjFqeVcSvYuVVWJHbHPfRQ3uT4Lr1Nkh1iN5FsqnLrGbsKUp2NQW6fn2sdHL8",
  "key8": "4jVAmXNtdf5iC3dCkh4x2PSCEe6aGPyK7Dz2e52hHfWh1JoU7MRQDcG4dTwP8cYAtBNwLD5TdGWkipFnQ4Z2AHnv",
  "key9": "3KttUzcHky332zX1t8gsny18qmpvGJ9fWjxyTW89UpzCuZuXcRtoUdWtKd1WLprgwx4vcRmxTSKrejsHQZM9nNvF",
  "key10": "2dihgd4kmWGPmQMvfbFvi3KgiRLF3o2Vwv1MBZQAHKjy8rBcJFhhHwKvHyqhyoQYAKwFHVekak9GvXEW6UruuUd6",
  "key11": "4A96Kbjn8HiaAdeAGSZSkd8nYx6n2VYGoAcvfd2AXiyQoXtYteK2UiH4pPoQ4oVBu5aytXVNVDEPoj4X4tbipcL",
  "key12": "4Qw5gtKtEbV29y8tpZHeoaPCGKaYNottgBdRgvJiBFLZXfgp5u7GYJAXTvoL6gVTd6gJjRnCfjWf85ortNThW6Rd",
  "key13": "a1mzaEdk41drtguHYz6Xtpe7FyiM3KNg5jhDFFLU8FzMCUnfy3Q5DuaB8KfrZk7sk4szpAQbfTj5JSqtq9Fomoa",
  "key14": "d7EjkQhbG28DoM4eheyiMppAuCwkCcygvZ5YoAW5nK8fySEABHP5foaY8E9Hmu3c4MAUbQrNWuPQMUGW2rc9SNZ",
  "key15": "QvbWEsW2FzQgcjTnziwxEUEKUsusJ9rgPswNSuGc1cmtnvT5f6wyGvovgJjDmB47UfnoLkwzsw8KhjNKY4ALkHG",
  "key16": "44LmQcjF8bSKhSAaQ7qkWKJK68fKpYyqnKX8R7rfA16nZB2roWM55zry82SVjkfx89UtB1HG7nmr7phHMftbJPoF",
  "key17": "2E8RgZqpZ15v854tb1Zrzw8GaCzof5UbmCuwymGRyDfjsg9mtho6M7PToCoSheyAf3ELUNz7qxJwbyJxTNDZC4NC",
  "key18": "5tFxwKHXz6pgaMyVvtPchDwP21ruXMBJqTgkGT1qs2Wu4qkp4CCofFa97nmfemH2DntpC4tCtaxERcMawerKQ8ad",
  "key19": "4QCEGt7UZ1DCzudrxXGTzfGbXT5oQJvRteLjUc7is3gvaHWATQBaqEae9YRjGkqcZjc6Jj6UtDaL51sLsyYS56wh",
  "key20": "2jo3xNh5pEUpnQxyEGyhRYpwLbd6HLnL2ReUVETqQ8sfmNghjqBU2j3rZUnYSZPyit8SHMVE2RLqLGSDveWuaK4W",
  "key21": "3scyHcnrFaZFY9XR8gbDcR35UdHpkGZspEJa8BLd3Sj9kVo6v71ecX65dJP6cy7Zvkwd6Bsr1nE1LCFuMvSEGn4R",
  "key22": "gfbk4K5Yz781Hoc4bxaBRNLVBx2R8WSRsDwCjYWzKxwCk3XYqjuekv9MyabhqF297nLnkc8GPdFFYPsgb3PRjMq",
  "key23": "4TUDFzrtdU4iuFQVmreNxJVrT9ztuW1rhgu2d2YmQ25TJXh1ngkFNiY5LmBEnGMFsD1oJoYK5wTspYPtyEhrSTJ4",
  "key24": "4mQX2LeU37aK6VsPqbgCo3NnNRsfB5vQRRjnb9wfTwmyA8pSZSQWGATP8dw9E9BcUrwb6x8NAMt4cW3Fg8cFHYsR",
  "key25": "4aEfizjmKAb8eSu8aNFgC3f9gjTjbQx8FMB1fLkVvq5sGrjMJdSpdMkYe6CnE37Ey7UYSLy411hxPeN2wSS99oiY",
  "key26": "4A5gjTgz6jRtwLhFUQkUvEmXrrv1od6CGQM5vUAwDuXGypKzE4KKT8uhbbEucaWKxLYEHC3F8VZUT87FW7vrCqGt",
  "key27": "Jg6LTEVoXfAvQ4NfFWpRAxFJaA8pBdPuc4JbUzApc6r3Ncdks96eMmDh1cMFQ4VUYLjcHfEZFchWFgF2bQ8FDfR",
  "key28": "XYnN43ytG39SMjpqPSEK63SXaxzndMeB94n6Wm8wSdhsAkbfx1VSxWCYYJ9HopgBKNMZLnaxMC6Ctgzj6Ca7fSs",
  "key29": "2AhEmWkby95kFKv6PyaWKJ867wb4Tnhjx8ajnGWqey95jWkNgVRVmnPQK9rpJs8RosBdbPKuurqfsKLnbt2MLrVw",
  "key30": "5XEqo1G7haV27vWC615TFDTvY8DJXnjn5mUReesmcEfYeSEeUZU7eqYDLXfGcUTQivrb8Ky9iA9dy8kNmS9hbFcF",
  "key31": "5H84uFu63F9MRtToaNHhyLT3tXVqqJ5uGMTRRhNfrcMWH5dcK7ZuVBG7AcYYwGzJtHYWQWizqNWskrA38uppVbHH",
  "key32": "5ZXnsnuodgNNVp97FPi9HfAfFNVVJDKsL6ixR91EHaJGSGTbbsWkUe3vpcfaFE4BoVTrVBnzmHhV12WeRzVmBSpi",
  "key33": "49M23Xawk9kZbsAYAhDsiAxkrC8TvrNF3944V4pWdy6145g2a2PVmVfYdBo5LhbwykX1uaEUDiDC1ruM3J6aHaPo",
  "key34": "3gXQ2FoCffhkTcqDt99hVsK1dWBsP6FdF4CAH4QtgtQ8ukHaDo79msZipTXYAkmEoodE49Vmc2GaxgM5epvZW2Wa",
  "key35": "gC3PzAmGwWRhQvbEygFc7xfcG1LMHk5KehGbbhHhkVBktfBwuzhF4MP2WAhtvbY6YmH8VxHxYh6n5XM6SbGSwzt",
  "key36": "Mw6xqEzaC4vMbQ1vMaR6piCn9JGVtUSioeBqrPdA9vWfHP7WpGc5G8e9y83CeET9odSZ7xik3TQVcxCxteu4oLw",
  "key37": "5Ga2LrJEDHSrYd6fTWvRWrN7nfDVQ73GHbE3XrobssG3Sv4H2eJda2uXRoA5gcTYYwQKTr4L5K4EtJ6GXbNyvSrS",
  "key38": "5aMknDFBqqrX2j6XqkkygW1Uo8aBm7KSbgqfdJueiLEwHYD5SA9Hbcr7sUXi1JXkLi9Xy42haiwfpLof3pFoz6us",
  "key39": "5ZEdeZAyLC1xAWiTNwBN6GkMJUD5De1ZRz9vB8diwcAZ6PBuYTB7Z5HnBhQEf6Ha3kNUa8MpcFkAPzTpw3yWS2QR",
  "key40": "2WS5h21qbLFfXyzWYqU4jDxzrXjZxoMhm5325vXwcj2hNeszuDHfifxspxzC6csP9VoraCMjyvga6ZudpXoDzpU4",
  "key41": "tRresZsuwM1DoEMKHr47fek8nobD6R88SHUSH1SFhiCwa3yVFFGPXhdbFXh1UUiM5SxsfUHGHi7x9MbTkKLHgLA",
  "key42": "5pLYRa1VEdBXG11UT4yJECYdnuBbe1F1W42R4ApCNHbXpK7faAU4x6BpfnDFT9oUnFkZfgvYrFVVL9RwhGEYskLH",
  "key43": "3yURFbM2MVLPyjydSZHP8ST8uKyibPBGxHKwZmMiSapCCMQJ5HQHdccJYL3CDy9Fig53QCWvNZbeC2LznpbuxmT4",
  "key44": "2xc8RXBj8bUMtxT26R6AVbbx67bAuoKPeytbB5x67bXG9ieFgU2DGNshC6nVNFn1agiKydH6ih9hipHyCbUVz75h",
  "key45": "3Cy9bHi5GDPgtvC3PUCkDzmFJxuhunYG5SDPd9hJAKzzkYLpHyf6WG6pLzN2KHczmqRJGvxqCCtSMXopqitiN2Ed",
  "key46": "4tqVmHUjsyRk1QZbXJMrzt9im2NXYoBaFeZd5ctPmZ2K4DXoysXGedGVxtCuuKhwxFDskdXBXDEvRBrJkf5BttQw",
  "key47": "4a45rNj1cwVVbafrK5VQg1EUJF34qiS7E7vFqb5zWdSrVhMwsYLWv9XMZrTgWuvJs6Ms831p2Ug6zVgoxH4yDFVK"
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
