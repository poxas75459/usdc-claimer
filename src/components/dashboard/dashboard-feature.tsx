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
    "486KRnEyeKjA1SHaDeZsqzvMBmMoGtqwd7HugyN9C1wgpeTce33ZJ5vobVYT3B9rsULP4Lp1p8RMnCppT1nGsr6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ABV4A82VnmG8TMCVv1ZjuBHNbY2D7dRxXY8EgUvWim5gq2puuvPEXZu8tDA46iySd9xiYYLdpu8yuyRxS1YhSRX",
  "key1": "5PTnQBz1THssDEHeuX7sn5qCKb4FMbHW5hCThLpSBFH46W5NheAGVXpiGKxVHMCPo8aJqwYmUC6mVQnTcNsAg1qn",
  "key2": "48JBPPiZq2oazUdJNM3Y7NvyAP4bZmWMT3sJ8NVMnL2GaqCAxrg4ittizy9xBSqTcQpYS8WevNzqCRJLr68uXVLb",
  "key3": "4BKVifHwHiUMtpKmUnPZoJegzxszNN3Eb2Czoo3bThC9DFyZ6ConcDDyUebymmFqvLn4NrwT39dLFuDhVWm97WWp",
  "key4": "53FdDk9njdLb6McELrs54nTcVFeMc72Jrf8wNgYLbhYN5xVDcHsiQJWWzGTNwBma6AaJad6B4qjfk69YDknMHDNm",
  "key5": "Sz1qCHQq5X91eFfQPRDtYEgPuZPua4S1uDHrZbX6gdiyawPF6rreeeTKTUKRbqpcwxBigA1m1zrbHft6TYK4sFa",
  "key6": "37LzZGqkb8e6ErbKntyNfcMfycT9cPrm2dNFgFPfNaCDtSSAN2gXfPTLcSTFQ58KwQwigQU4UFtuzGXL2muXsgPC",
  "key7": "37TQCK1jhDMkBG4WFgByaRy9kmtdTHTkb3hkVxP2tNYeC6FhMudu7hmEUzaFaxyPnSDuJFsxGAxgi17yLUcyxcNE",
  "key8": "24JSLYPPtAmGrQ5GB276xMtiGgXLBvbWqdfHVB1MXSEPBZeXcgMR4LivCu79z2u7H5imUo3DWzEMN7Eesz4anL5N",
  "key9": "GQ2Hc6ypjhe8gTX5pGymkyru5XA2SzF2oQ5bZLiDZXkrFTkGXGq9Cpj83kqEFfrMhL2Xp8uBYqYs9uiaU4zM4aR",
  "key10": "4aL7kQvhCv1wnN9hRyvPACyJheW6hagBRYFrWR2zv3oYkSyLEMaa9DYJvfYNqmBe1EmPUtkvVNmEmSDmVYRKw64d",
  "key11": "5wgvJ4rnt6KaMh81sUn5Tcu54MZrvLE8dojTarTyYXD1gqj1iuHKFQWEeKYKXxsEC8KVP98XKgYRBGowuqNiBDzr",
  "key12": "3duKhybfecg6xsW5c43UJ1R2Dxvhex5btmNfEBtrW4XuNNgVrWMxNpHHfifr6Xn8ipvfttaT9yrUAtc7jVWAAViV",
  "key13": "4czxKj3dAzs8QJnmD48MwWfWyp3x5y56rnUrAL2kVvpffbrQWvwApxYDJ1wTF5vHyRTqhYVhnhUnVRJNUTS69xzV",
  "key14": "Jy9Y3STvu2ktYbCn4t74BqqTRBhzrPXNToFAF9tQhnoCQmVG8MfRKmtzQP5ok9VKAd8mhCyZuYrk3SyX7ZZtkZs",
  "key15": "5ArrdwhHr74unfMzisoL32389wsqTQHEHpC77h9CNYRatnbKfUZLEGbUgXJ1jvackXm1MowWjEexFS8NVSVZH58i",
  "key16": "47eEuurkSnRCX9KpMRB5Dq8vSfsecJsqq37tajqPBDwEEBwABaciDSEhndHSE5cbZgWDc1V4DCmt88DfhxtZhmu4",
  "key17": "4C9WY7j9M9pMQewmdcZYqrejmayrZfPwdhskqCJKex9nPKAujyaFt6FLDateA96Mg8JyvZcZSSy2BEen3qRpAf1v",
  "key18": "4nvptLGpNEmzAuBCaQuWC3WkF3M6WyvpsY7rfJENc6b8MTZJLZtbRvY5xJwzKKb2V6GDMT63LDw25tCbot2DUUt9",
  "key19": "zesrjASZro29b9g1ufdtHVMb2KbDpuY3KwEbXPg9rEonJTgyxLRkKwUwpK6u56ECiBfYQ6VdTK4QfJjCSP8JTWD",
  "key20": "492KccW8oBgrA27bURiFaBdyAHFuNggp5Zaftz1Lgvg6DZmkbEMRpXkGFBZBx1YKf9nJYBFm85GMeR8YmJC7g6NH",
  "key21": "5ZmiwK7Aa1SuHGFyFaAee5jc7gUXkoDQ2BM3HDLdKW8YxAPLjvHBEfLvugybG4KyP21J5AXj9gCSQSeK2M2km39h",
  "key22": "5owG4Upqopeh9C9Zi2x1JLcHpQfWgudMMrQJJHuSnzNjhACveAfLjWdA4GLLW7FyspSVA2CjWtFC4KkmVYSGsXFT",
  "key23": "ujZFNo6RtYBwA1EahTF8oHfZwcETMFKTKHd1JmhgdYZMhTEveX35MX2KMydN6eir58PTKmhiJPFoTuUMwS3UtjB",
  "key24": "2VJPmzGnowRM5QBeYDrWgzCVxySJyJEBozKVAsToyPHm7t39nfvFdtFN2pLWaVPtqakt6wov62993rvPAtBGJhuf",
  "key25": "5yp9LFeDthsajaAn3yhKcKPJg7pKMT5FSLct7pZurMs6ZabVqA9w959Ab3SBAcPR1oHfGVKhtmVMTZsMXU7o7Au7",
  "key26": "2eaCHhwNfJ77tzyyhH65o7DNRT2gcudsRdYx2v7aY67XLbBByPimiW4Tykb1fW5CxC1H1dQDWw4FKRvBhpdEahDt",
  "key27": "27UtM9VqWmvWK33h4s3FPW1Cmchz4dtnYEVCjqAuEc5nV9zq4df1J6kN635JKiezDgeR2kXbLzKQxdgHnYpcgvd6",
  "key28": "aeFUqknibMeQB6jZhEmmCDHv2MZiVGYU41xXWBaL9TLo3suxRpzm7WE2xzBvBJgsQYJHGi5zsuE5YSr1kXLKqDJ",
  "key29": "3ycvFraqxnHQtSpA8oQtiN2W3hK15TZhWXmNVe1FhKTyVJxRyxcCz4XGU37dfM9DbwRSSxgxVV2pobshmD3n9JJR",
  "key30": "tJwQfosmh4zaSNSkuKvJQZcsmFFDiQ8sS5JdoXLGgAHQE7eb44WtURazYkvkWwfNyYzYuAQuUZyB1bDn1499E1h",
  "key31": "2sTi3mDYBGQuqxXMnGYJy7D3mukYHDNEJS8xnjFEWJPcLHz9jAVzHMeUCeb959L8YBcpGDdP94wUb4uWmm146Gbi",
  "key32": "5bCjZ4QUYzmXFJ1ZxJb2WLxFxC6i7R3UdTZRSRRvDzQ2fYHREuQucqrqGKif3D5u1tCyzWD1dK8jjA3yX9K5Z9Lw",
  "key33": "2oz3DzdXCvxT2QvVnCtuJ5V8Gz5cGmHnHdEYpHXhTT36jFBDKMZSWXhsF1EEG7QLS6NPpv47Yrc4XNJn1bFV5Esf",
  "key34": "5hUSP4WQhDk5SBXLLCU8wUz5VbWhxUbMNp8NmdhrdY24Uhwca88H57sZxkbZYicxwUUUzMSgXRKEPnCUizfaGvpu",
  "key35": "4pypHKvs7aP57vorYxFPEkP6R1nq4Hz6X6i6hofAnKPnVQjnMcpEz7wiw9iMZMsq84fu2L1n8jzr26yQoz5Ufkye",
  "key36": "YQnup4LKEKB1GZHT74VMPsnTipU2t7JHvGG2tzwPirkU8XEALtWnqkCjEQznBb8quS811TaETFX4DFCKcLwRxrS",
  "key37": "YPZSh3Fq6KS2RqF8HMQN1j7DJr3kaFuw2SRxRCfpe4VM8CxzbT3S7Vw3eZWLo8KFaR5e3q3Xh3bJB8ykcCqQ1hr",
  "key38": "fVHLzaxmzeu4YyxUJacZhcxdpC6ksoZSejCixL1X4Y8rhSnPwQrP3zF2Uc3qH8tmfyUnfGYAvsjbaWCH9aiegNL",
  "key39": "4vnoBgGJcmrD845dfW7cVhY1ZN2iVU5QtQW7xF7RsptWhsq78oM5TaQQCSqkK2UHQ8qgzLNRAEcKK11C9GUXdSuA",
  "key40": "5u1NpmSX5mezgNbhbRXHtjiJjFTSJhfbDPjR8fiJYR9LxrwNyYuXCYVLpZYqYoFYu2f6LAqC22frErEYiQda39dV",
  "key41": "56eLwxvDn71P1FByUUpRdhn62NjVTru3iPLFXkqGmuTxFuwyxjsutCWg8wrNmMHXTCWHMU1ZD646KLJUwuis4jjd",
  "key42": "3SEQfXvwPFa3n2GtppHS2yynACDyetekdQUWEauBFVmwBp3tJrzJQ3GMwxWYNQg5wrGiJarrbZoTZy6UZs1KcDgC",
  "key43": "5LMqxwj9zrasRcLzTEvAMrdvpod26gVCxcw1SspcUZdp88CMqvJw1U1xg4v2BsNpbtiH1pbfMg43fdmrikfdmSkK",
  "key44": "27v9d5uaUZuJ5ep1HUZWXcF3VzHJF6kodqiVY3ZgEvNz1TRpt4UQbbwsijR45HWKWexfwLLiiXnHBpPwCn9g5Poo",
  "key45": "4VyHakdQmZ4ySK11YYsrZ6vJv5KCLL1d17riwwqbd2sWAeBrG7wGbdwTJTcpToAHv7CMtA2iPotHodXdwF3GXUHH",
  "key46": "2Xbof4LJnggyPGX7LHrPC8TtD59mXtKYmZ1dXEc6GE652UxoN2FCdeu2z4i7AePT9XmbccezvPpu7koS47DwyLfC"
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
