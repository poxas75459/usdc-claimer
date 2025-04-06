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
    "36q4tAkrs68DZdnjXAB7yvFSbFEtuuYKyBQWMs4BRsMxiJTWwgD2rKWQJ15wSUijGnV4bejG4TSw7kvga9qxPL7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YdmLDxTvawh1UzpXQdrhTH86423jRN1Mg5Ct1qtwPkJ4dNNwdDFtemKoWsaG5tD1ErvC51aLMRv2FxqecSRHfUp",
  "key1": "4kAy7DoMCoJmkrN7bABDnkJKwccNxm319cY8VbxPf8XPPJZgGbC9RMZNTghk1VSSDRsjfqCYNSn1haQ3SX4zFDyq",
  "key2": "3ecYvRcFgTDwDZPNHjkTyTgTtUvYfiANnY4igHX3jCqrHrfSJkCW14q94fjFLyG7isKC38ka6u8SVsdtCMzCVtv6",
  "key3": "5VWdN7EaPEtJDX2PJX11k5RzM6A2XzNgX3aV5imhGso2GG2mieAFqU8SxUT7eR1B78aegxi28qWfSFSmmtQ1RRqW",
  "key4": "4gy47YNsykS7fBBBNe3X7pae3ydUsJtFEDhfBXKquSGgvgHduDFycfHxczFTwazWYhP2E9agBouXtmTt7oREp56r",
  "key5": "2GoufTqUuHb2mPnSNr4r4kS24RxA9B8fKLCgiKbreNeNogbFRKbmSocVXV4m5u5fKAD25cSuUe5XkuqEo2bfcohe",
  "key6": "7kYPF28ZYgR1bVkucDFfVUEVTw9qMdTEsFcUQRFEma2GSNUaVokoYShavepkxHs4bSX57UUVRs91jU3wecGz9iR",
  "key7": "nnmK9BjbZKXxXAQxobQC7Wc2VQucsTkMrzwQjFBDcbQspwMhLqFZuw4kaNTeS9i6ZHAdLSNU58rTh3AqE6peJ3S",
  "key8": "2Epspj4UhFShYx7oizqDcJtxY3rLRFp3bEZNYzVvX7WuMcMzEodk4FAHGevBgsURXEqKy9oe8RoHtAGyzBMEFK8P",
  "key9": "27SLcx12i5U8WXq6MKg94cXVsceRXgZ5bAVRztA9k4D5MeXBT4UbqMxJ2UjVmsF4BRnZfe9vw7MdKFzj2a91Y4yt",
  "key10": "2n5BBmvw1tb2oxf4KtH1SpdUVXG1QdpBFLQP4Bu6ATLEVqqWi6c8R2vc9VW89AJrHQeW7zAaGdsi2W1R53z3mXMR",
  "key11": "5qSikDA619XRa6m1zd57wKTqnzMgGruW7pyDCR2UQsFNGUZ9TfdY87QhMFnjEZ2mMvtZMjSH1gtpjaykvKPQhXiG",
  "key12": "5bQDX1EZnKaDiFS5sZmM5SdbiCWxa18o2JZE1UC8gry5vwduHdf8YvafUzDsWccx6c1jhdFH9SpFa7uTyNYUVkQp",
  "key13": "4LRuuarNVviLjd8fMUCwocgxhqRormruR9V4aUFTFEFJkpadDxZV6RFyHiRXMBQpBheYKojiV8cNmPpMqD7NZm7e",
  "key14": "21RaJV836gUKLkcnYFKUcKc2zPsi8nCqYEghM7upHHCZxj76tCuFv6C1GV72TZuTL9bd8CMzccZA9X2q1ECM7s1j",
  "key15": "3dWa8sUTPfUBKoGRexxvccNpmmn6neMc79ycmPtwo6LMS9jeoeixSfrLHbwGoQdbCaJsQg8SfDxEb3juWkcZTrAY",
  "key16": "5mdtW7fD6fBFJxEomgmgJVZsyJfSwRURSY2JBWKMbkdLWphXM1KTRqj6SLgBxPTwH2xQ5SMfNL5SkBdajkWdbr7A",
  "key17": "2N4b8VGUFfAAo5b42ruBSFaaySaRVat4QRwAanE9VidQm2GPr7aZ1bosB6fgDKHQRiZiTkEUUXHd3Pe2qUCDP3X2",
  "key18": "5Ji6xzycmKDDL9oi8ukHVchgT6Dsft3rvLcD9iHAc5Zqq6SmTirq4aqP5MVBou651uBN1c5Xx7iWauoTuMoQmgZV",
  "key19": "3hY715PVK2yTuVmk1NrhBSFGXVkvv2pr2YyzRKR9Px55FpEywHRJdonemjZpt4KUuv9DFKertrAM1WwMWCKn9Die",
  "key20": "24TChxuuYeyJBApy9b7VchBKb2UuEncVcHAX4CbQrHLnc1t9ooMJ3aN3Gq9Zk5zohY8g46wZB21QGwz1jy7bQVCr",
  "key21": "4xtVNe3ozh2SR4W4Ns9pwWCxoaGfu9qrxDoscMnv6UaC4s2oa8eUhoZdpBHfVoNhotBeoW73z2WnSQe3S4BuPfsV",
  "key22": "4pcSrUFBAKn65kdhYU6TN6TSxZgPUQv8NgQn2cEHx5LGo2eXMkQBvV8NxNNGXFAcuTkRqrZotr9ECyuGGKyiWz4c",
  "key23": "2H7NtxMDNVB4MrBhhC4ghMjE7UrKd4VH8CUE3HuAVeHCxdaop4eCka9rJ8BXw8Xo7TqR5gR7ywnSm85oqnvecCmA",
  "key24": "5TiT8sWwh9WMb9WVQ1NMUFUgvEJ8js8MwgSdjt56icV52aXftxQfGBuH3dqMFw3MiXLg37zN4cMF6GC1tfz7kjM5",
  "key25": "4uEK6uKz88zhir4R4AqkfwA3CZvYLLMEC13Nz7jAF4PTYN47jC8wtdKKgfRRxDwtZc8wG7CiTp7iMwbipY4wAAhP",
  "key26": "21ADjTGR4BZR8MUyXzV3HEvegVghaznqKnJqtWK5xoa7MKsf6Ec9yACS17tWSL9Tyh2CbCMucSQxPMbCnoHcFvaZ",
  "key27": "2nSnFpbrJ45zFAWgG48FQ6xaz8kiucDkBxTTJykmjib2oQ4ChDm4u2UapJC9frHe6k2v3HC6AA4cLoeS69QYKZKT",
  "key28": "2SsX2ej6WUk1XhCRnecbfw33AuNwXz6bUMvoMND8KFj299xAYUX8qUvYu73qCE31BX9squ8PX2HFv6V13CGrqYn2",
  "key29": "3GEoyhpy8A644Z7nZ4EDETSMm19n72Hz2unzUhKkQraY8oyfBbu9ziWmYBjkrfpfzky5aSyW4KuzpyXpWKmXCzBd",
  "key30": "2payfVDzyYnRaavUJCgN8GfBrFxqQdXs4KhGWi22Cy92qxXcbYEqKnVaqKfLqG3A4rgVw8CDrDNeHUF7VtoLjS8x",
  "key31": "33Sk8aBdvyCMYPxAvRWsqM8VXGPQwWARXNSafcmVYBE6W5YK4Fphb9iTQ6yo3NCjxHEckHQiau2S1b2FDdnpdEXv",
  "key32": "4hVYCK7hewNHdswEoGpV2sA225Uh5T3KHkb1hPQAd6fsTV16eTUeLDQmyG1GcduW8ecf67PbqdJvrZPs9vmUoyZ6",
  "key33": "57CfSxZgCfw54xFzshcoPFRuro87XRDVySX32SjuexjpS1KLZQvMWxNKnEKT5T2CYNvs1Rrr9Hs2jUKB2wfjJHvC",
  "key34": "5dpdMGst9AxKQFuCRsr2g4Dxi6KJLinisHcmpppHzoU7UcucX2nCLyRiGK6B6jjpbn2aF9ttiLxqpPGwntmuzpMd",
  "key35": "zLPsaceCFbX4cVjAJeAr3yY35EA4nvyWPmRfX1d2Hrt1m4mh2JBzzAGnM1kxTWbyqhJ2Ht7p3g7hMKk6qYD6xrC",
  "key36": "3cZzchJk9h5m67JJcTCWobyGvUUv4mJecn4booR8zNgSZM6xKLREUoRQTdak55oGF4agv4Yzxp4SuQSf8EeVnWw3",
  "key37": "21tLZzFc7ckgoX5gzECfDEqpQpEpLMSLFFxi1R86VW5mt5TxnCQfAYmzZoXLdfH1Q8wGZCxix4meBPPEqmKTHXqV",
  "key38": "NBZq4pgpcLGJtPHNRdivv7RJ8zpWXcAtPYfvdRnfqj1egqjcqRMQti5Rj18rag98HjFkYWMXuxPP9D68i6ix39j",
  "key39": "3qMNtmoQCV8PG4RQHBNuzbQ3AEPmhBgnJXYNNReRh7yWeMKMrvHjpbrF7KquuyYQaAivHNReteExGGBcBktnGEey",
  "key40": "A1wMNmTgZutw8wm6GE8zw5aJzy8894zi7fVGasxEXz5dBboPYnhtfrLWxRWDqU8qrZq3qdALqKtpRTbVMSNBZ62",
  "key41": "DkH9TLBAYm7LFEAkmDuiu7z1wMRAqmwesezjDJNUxYHCLG42dZuqnKgTmJ8JEcmiifTRZXo89Ta9qop7moVFo3L",
  "key42": "3v9TaQBjZzDy27gyAWNXsYcu7FRaMwHUmkYbNCtv4Gw6JccqFdeGbfoezH7hj7L1cVYkHzz58Frh7zB8zh1aEAVv",
  "key43": "2Q2pfnvNoGYe4vR9u4q1UoLYQ3J1nDbM6CVFbruMztLmBE1HbgkVbZXhbFvEDRowJRp54tEYU6tZRMu8eV3E37fc",
  "key44": "59ThVS5i2fyiCiMoG4A7vdUHDSXsQqkVxYiDaNBHxcYTxLo2m5Cug6h9U5Y1Bbb8k8B8ZAZMU898L97rK8A8TiRr",
  "key45": "2vzj9KtM3k2mAanAThNS5coFSfPjdisHccMyWNRb6A5K4NUAqFaBABYAuuXRpt3THhkA5YCcpvCLjH1iR631ahyx",
  "key46": "4Rv397qrEgKfnbbFAwL972ti6AYC5if93eVWQjpemK3hgD8Zucq5BPNvr2ZzZ5ojoA4GWw34gjMJWc24m6KTi2u",
  "key47": "5f3JEThE62J56eHstKLUNipnhNgRhp4XGUuv99MD2Vb6oDg3euT5UQwVKcE6gc1NpovCE8BZaEP949rNHqrVXpCS"
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
