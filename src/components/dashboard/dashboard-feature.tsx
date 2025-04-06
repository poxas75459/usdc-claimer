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
    "4zkKauCZF4chJbA2K6PpuKo5z2MLb8uC9zbn6vM32MQtMSG3UKqkhSF8VLxwvJuVH8MFwNb39j6ApXWtJqPfJRRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34z6Y9zph1wYg458WsU56hVFardsNAQu1c5CagJ4L8upTzzxc8UXBhLKjntcJJmpvYhARQ1x3dG6mTUXDMUWsrY1",
  "key1": "FqSPtpmbvj9N25mk6og58pkSmgXom6tPPe2cMu9vwojnzwxy5ShwYyjJ9huQ7UjRXdayaage9DKsPGoXLwg4519",
  "key2": "29Wo3DiE3Yba5Gg1unLdV4qPSpph5u3jHnGkfD3t5mas8CrKfCVnBvHVaHTrwkfnD1DSvJifZieoeTSvmo3qA7py",
  "key3": "4V2KdL11VFHCneNuED8sY13KYKhTadEAQCdLQhcwj5NaPhqx7cCRjVD7Gyz3n6HW6dYUCvT8gtLBt6wexrvQveQt",
  "key4": "3zC2LNoqzuzRaoLw6Q3xHoUf2zdKvHXmveCwzKXbjb6gkewaYj62m7NWmh2NwbNDXyhnrWniG89iiDsh5oCvsPU4",
  "key5": "abFAh1iT5QCBo1BxcUwkRdxtcQfoZtrvrQdAASPRJt9MSS1HzzyFQAjZFRfXK56nXxbJ7zvBrtw8ouVgBxeV6Kh",
  "key6": "4w52VSFtSeRuN8KGfqAywFtSGqWvKJXY8bCPET7cDgrD1yUNNQBQbqy22EGfnAzP5tf8GmL7LZncjhcTgpsmAzhF",
  "key7": "2T9vavkgyJegiXTyLzSnMkAKmXqZ4SWzDJZwd7d1qQAAMNNMJdsoE5L9y7EwUBJTxJh4aLZYw3VSN832JLCAZa44",
  "key8": "4o4eR3jmDnxEnqQQNDKMY3kwkjbZwXqF9nELQP3Du5hqxg8RTkbMFPG3fSqEL6YYdmowXsGG46ybTJgFkY4ci285",
  "key9": "4xevjQfV1hNtifHL3ecCxWLNuoaLKiZKb9wfdYXfEW2qXaSSCwagWxv5NpnhHk1eVnD3XfmVK66JCnf4SLXewgJ1",
  "key10": "284LXZv4rgKfStnWfkJQMTo8AW9J1GwUjxdwNef9U7DDSXPzBiDDQAASrzvuJgJVQBYP2gbvsUKHadE9zVsowAMu",
  "key11": "2oxDXD5Sc3rzhdC1Hr3qtiQELwNSy5H1c9GfdYh1wufgRs4uq9paQzipsc3iEkRbaKmKWWc8iZTUNScmGEFhQsta",
  "key12": "4eiYpYLpgAoWCs1dA5F1aG6sT77si4WpCp7Hnv3L4St8abnBp4LJeZGXNJZjmK5jRrmU12cyGdWWphD7WcgfZJNc",
  "key13": "3wqCMQiiqjcByNXS8hz9Knspiw5gJLNt5wGCa9spFdNULDQurfyDnuhwWA4i9qGiKRtf8snm2Ly3WmxbS9R2bQS2",
  "key14": "4cwsVM2jXFcsKGj5vh73ZnFHDGKzkzzxChmr877p9ojcag7SpKvgLiXSSkGKP3mrLESsEL3niMQZeRy36HGeW6RU",
  "key15": "3PxZGVysA24JnTNEyCx7bvhG3PAiCLQtxrFpTj5L5n9C24jigEifFDsydm6Uis4KYLm7YJ6kFmTh8Q2sVKsTDC6V",
  "key16": "2JBLDpEbzcqnH2RAuYKxA7JrUMcEDZHcBFWesBdthFownLYKA6TP3j3k9hWGTBGjRZcHvDeqCEhSGpYpssMbx6iz",
  "key17": "5czDLZaxnqSHPyZw2s3o8q6gBafHdJn4jwrSETuiPom1FfNYmpVb5ngZNZ2u6Ja2wZC41YSHsGAyFrk1CYeuPupL",
  "key18": "3VJ5q9GXUrb3gLVCZmptUF5GD8JX8av76NXq8SjEsN1QTgRSxx6xSedSy2kdaTLC3Eu2GjHzUPHn3Rnmz8ZdV9m1",
  "key19": "3YB4FfiwjuuJYjYt69iCUk53iii8L2oXqVEsoXnfS1ZhmdGVYedzgQYWbj3FoYTMEbai5ZGCQsek3gtyqM3cVjhw",
  "key20": "4vxcVEYBakAZnPckcXRmcyjLUNzuRWBpmyXVJzAZtNdsTVfDFP3SaSPgjWC2W3CBYU9bxB2GL3V5rsD4erqLdjsi",
  "key21": "53JeZuBet24x9pjJB7TWD8yV4NYsDdXnvTSAAGX45VagvLJFNPxRShcbjheXMirE6fP7W5MhoX6RrqV9QKxiAoVq",
  "key22": "4CPci5LiDVDrNz6YJ1WsHKM4WH4dQuvZvFSF9b8R4GpDSsBz9iLWh9sMkV64RSgVzEvruk5wF9WCoVeqKyCGBxAS",
  "key23": "3gjHhdJPAzTPQr4Ty48XeuVp97f8MYbDAxzuJNDmAneCnh3NHcVDF1Fonx6aVRqgZ23g5i9hmzht1PTzRYjV6Fm5",
  "key24": "2mbVQkLRAbv3NQv1etr95exSUpoTs6BPWJcumRwYoadPy63Hue2QmBfGjYZkuCJVoKf7YsMm7HkkdYambREwqmop",
  "key25": "Rr3GSm5nP1k3ewy4j49wnVsKrHUfzqQRChaLnrRXGrq6HYgwr3biZ6jNWinZqB2Szso1d99CFysEpj3AzMsNEWk",
  "key26": "9jFuMVGbXDc84nK4tm5botecUCeKirzwaXSGQ955wN78ejANRAEq44YtDt66KakDDJygCED7DFeUCGbDSdmK7Dp",
  "key27": "426zPrbeJfUWfx6HJfMj8kKMCjQXhcmgPhepktwHyihedzCrHyFe24mgwEp8DoXMM3L82bDEB2eyZ4pk4CsuLf9",
  "key28": "5PYL7aTve2ykRxqmVNBRdKXxFUP7ZDvY6mUNDFDJ9YeLaJSWeSPoiRD3QsW7peBbp3VN1r2LmXTXAieAdKZA6a9Q",
  "key29": "4cXMjpeXbceaEYPghS76V3YYSiARoRxEhgEfCKYPqcKSsYDcQ11aHDC3t8iSzzKMS3rYqeUrkywRzam1eqxGa7A6",
  "key30": "2QjNTerWD9bjoEf3LkoQp3xmfToVALyuDXBjkUGGJ3zPXqtF8eB7GdsvpxhGNDsuQ37FceTgeJMapLSgj2aNmRWw",
  "key31": "4rHB9NYVDpxDUu3um6mZg9JvEjsnNkW6PyFku4HwiGYjzo1sKv4e9rch1XhgkDDBUp13eKSVSYkxSwBFvgf24EB",
  "key32": "JTxj9GewHwU2KRFnHgUS1CJjj63PFUWbPopqzqVtPSd3G7NCGcqaJnotgtAio6jRSUat3kAKZA4BSSc6koaXE87",
  "key33": "4adJ84r2V9AmNFNGfmjHnznNT3GqTvSjtAxb7a3pXmHusoW9XTB2gAEFWbEbq5b3XNTJXpFzZAdsHkyPJE2bMAto",
  "key34": "2XZpFYc26zXRqayjNe6EULkytmHhgNHTQmmVzrqa4gxRPdx7Yi47BFmjy39UwcJV4ZbZe78X96KuaL7jTjcqDqJ1",
  "key35": "3UnZxbb46BdFurRHpL1RHdzqpktPiaiQmhK43DpwjVEJTYSXSj5YX9y9Xuk78RWKNTEZwxFWo9eH4XqjyZoZs9Xa",
  "key36": "5LAVoqAKn5U6cgms8FyejxjuVLdeDkcyQkNcA2rBQqEVp8WyZsdDEcwuYodamq3tmQJCukEMQH77zYruvti9yo3g",
  "key37": "3nVWz5KGuiBp2mq4CHgoAv6KQ3NhafrW3cL1E6feeoRtxJnjTWbetep8rC3ZyBZb1i8h1FJu9SD7XN4kEUvo9RMZ",
  "key38": "3oDsREjc1u4CBHVQKTsUdCrJgHEaGsRAup7D3Mbhae9wfNRDgamyxQNwcx55ZcFqb3TJciofWpTZ2u8z6FSpTsGB",
  "key39": "aXfjxxyNV8HcjjP9fmYSSBfoebNDnWSQj6ZcjMKcJi5BTTWABGE4mZR5Gq9LeKEtnLMzoUmFvngTW1VTJE9xYj6",
  "key40": "5LGitg1zz1NTr59ZF4UgegporWPR2Uiq1qRAQToWmdTMchUYokaFYiwecwJWcgUDYHDEJzb2vLHBBdUFihKs6Www",
  "key41": "fjSUZ6mySh2YH5zN9RGgPyApE5YSre64rAfcJbDqb6AD6S32JzwgyrYKjSAA6qLcEgHQWJkgEyy5CbjZTgtWKm9",
  "key42": "2tjfRfMygPVe2DveqZbUdQRzYTgWAubVYYNWKgpPjamCMWqbnwMeLnyXF4CTRY7H5YftciXzSPMWA23SYbipeA4g"
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
