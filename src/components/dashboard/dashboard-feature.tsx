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
    "yiUTZvPvXZjNN3P1zPX8eYsaXVaSQ2VY8UisiQEV1QvEsjh9ScqT3PNdLnwomcwupWkBo7x38ST6NT3HPfbRXNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SBPGqsHeKxyjddaYyWa6hywYysVYisT8YYpfFgfkMquCM9iNRLumwxoQkkz9y7TGvGzGT1EHjKptYnAuVRcBoLf",
  "key1": "5fa2fQtKcaDcXJvA8rXYtPrYkTtar8fUcYk63VQLmEwXSN4AgL7xeQgMWahwmmY5VeuZKRgzpWxkU6no89xx2vEQ",
  "key2": "xUwBRrejYXPHssjfWHeupAmqCgKvda1G4sRy77Dp6zD7n2u6tRCaEXhArW2yKog1HyFvSsHreGzCtd1rFmqNhUr",
  "key3": "2fW5zSx4QCyLGdAS4BJuW2kjwAgxPmHPcVxshRnjkuaRukr1cAd9Rs1P6PsAqmGCo7WbCk4TA719TkgdkKrjFdnm",
  "key4": "4QiWYYrmCVovJ8cSQ7MYE7M22fp28rSeZseeCmP9GLUwcXRdHpbNEseEVePitAWaK3PemSMc4SphacLfoeXPq9dd",
  "key5": "299BQ15KKLpKfoJ9UuGUcbauBzgfKeHC43uBhRPUFyLgfbZz11rRxxg2tCEz7LGMF6w7v8TXP45Vjy8ZW5VNSRv5",
  "key6": "5M5HNu9Bn6RpHDKKKNRdHB2DUZhLQ7KvZbQqMCFiuWPmQs1weHfaFdGkejFeRckzHPLgvpEtHrgDPodHpQsJ8FzP",
  "key7": "MrC3hjJpuvoiFZQ2pQYovEk8TLMtU2SbX4XYKmscA1PPBo4Wuo5MZV2Hrh3gK9RBBrRtmXTiY8gsQJ41nnz2K8Z",
  "key8": "4HzVipzTaTHtwCgZrr3cNGWxrFkKhHDxV92yVJr1zTpeJfLB8qZEVsh3b3BKgfcqWWAswx2whomJrEi8AZHuMAhT",
  "key9": "34vuoYGY1UxDekb6vx8nTyg1ihw8S5xgdPf49wLYnudQcj8Ncu6UdjypMfRE5kkFBi2uZQePdSdgf6aCsGrWRJaA",
  "key10": "45wvnx4WBf7kJ19zi4WPcnzCKn3nSd8vgqvKiFdXboyPy1VebMLVfArYAqeavFnjVYgyfRjz6vEccPWN2W4GVPSP",
  "key11": "25ry7LCrWbSTGU1aWyE2PrXgy1AGZhTBr4Xun1tm4pQJ5nq9HPCGAbegEQfC8xa2Fwc9G8zgnP7PUPfuohmMv2ja",
  "key12": "5YFvTGWMMhkVivfB5YLLZVmHEFTyieTJnMXwTC7WnQSKSSpbKVehZBHUDMz6LrijgDhjJxR6tun7QESbzYsa5JW2",
  "key13": "24JxB6tvFUQUMbpbMHsqKTYTD8x1a7iZj7NNY77ve6iu2trfKfiduzu72rNbrcnb3q3zzJ4LRZPSFtqWX2FDW5tE",
  "key14": "gsZfzwKtQtts2tAjDQfRgJtoyvwwJwTgttXuY2vER8RGz3SYo6UXXRDa2ZeyKxkPbN23bM5AdYrhMBaR388dRkX",
  "key15": "2wb2PvbehBVb6n9DhfYCwBK5C8hzqTvftcGapdeHKeqnuc3ACt8geyKVkAgJrT6TmCo8GNjj17wWCQ7j77Kdfuoh",
  "key16": "6145dS6dmC4RZVbDgmncXkQCofj2tmzajWsza59ER3tF7Vm7X6NXC4v6KT57ye8Bs8iXug7Vd8qq24bTtWizTegz",
  "key17": "QQ7vSZXPwSUSAWGEa8Qp16jwRNoK2Qbo2yb2PDF6MxbdxQHcT5CLw3Jh6x26eBx5ptLYLYfLgeYM6vhFKxdZ37g",
  "key18": "617AYqeGGaKNgVUtXMYrncrgXMdhqpEqKAGneMcgoicPBUngV9a8UjBE8WWEVMUEHcSJXinFnNwqjhLYw2PoQtKu",
  "key19": "DdkamoDob1dGZrWWiVsdbZ4xcE9RFrrNVubQzvrDqGUdvFppb4m4Gi2rBM3gq3ti2bJWULTi6DD5bgMX1sX4WSp",
  "key20": "44uf2NVgVxpXT8itLQrjd3Bp7QbuE9GtVfJ7NchFBkPjtWz7WuWGQ5SM3cPQQ4aFQ2FcqfbkF3YfYEU7HPDCZhmY",
  "key21": "4cSumTXBdT7V9Jf5djC5Ks6wZdA62fBt7bvh9dCm6AoHd5RJZQSDb5NDqCLcgtFHsKHQRHwRtdbMJ8w7RaXjVE55",
  "key22": "3jeh24xoBtBuH9jcnWLsiAN415YJZ7qBsryeZNSndYCkRPWVqXutkG3hL3FiGX52UexMc7DvKCSRveKsgDbTeVEe",
  "key23": "557wgEXv88nuqRvgq5thErnMQhJcpq1VJidBvNHwe7RUKE7Wv7fvk1nDZ7Tkc1LZfPBpJXnnX5Lg5ZWf2zjpRfEn",
  "key24": "2FnB9fjHCXGoUqeYnngkKbjECSRgThCuk73VGqzvD9r4TxCwiKv3PoJpFrCwAWZYMm2vTazo37vgs4bcHMt7MX7",
  "key25": "mRsRm5D8odRasEfj3QiUK6zvCT3aeVBDgToEXjsEYU7rMcCkZ4dFrrcLxqaMoumHpZB6vBLRBJKy5etMYp1gC5c",
  "key26": "66yVqQWD9Y3k5bFV3wToaTQtLGwCd88asVWVkahkcBnJKPwgHAkgJpr7ZK6psmFPgYW8a3F2TtMoftXF816tgHmk",
  "key27": "ceG1cjR9uakYJxy5pS2x3CZuc3uqYZpHJbJAJLffZPHn4DaKjjAGpUVLLSADNLFP2KVGfS36AaisAExHm7F2jsM",
  "key28": "4tb6NnVrZ15X5nGA8hPTvK6kw3LVgP4wkiyHSFaDTHUHkUvERqJiTzgLt5PwuDs88X7Mw2ASyReEugNaK6xG1RQT",
  "key29": "v3D3EoB3utGuxTVNvkDAFJS4nJkDZJTa7RDJbqzH86RonugkLxzUVPMvxD1VvV1GbS1BtJvQXYh2gkV9nVbND2u",
  "key30": "g2TLYFDnfaQLVk65SYCGMmzRNJ8tjSrhSTUC7yvz8XKCc2Qg4uku5nBuGA5ij6K4ttQZhMPjdW5f2PpMtSsosGP",
  "key31": "28bmKMC26jVGC5DSjWHpAh6szJLWQGxyqxUYWztKD8DNykYtyxgbKSHaU6HoREfDscnqKCNfeC3B2rZSKwb5Tw3d",
  "key32": "4s7zWHxi5XAfnTrcU5yahmYHLyXWxf3qUHk7CWG9E2mPcP8RwdPcLzey1PgWXF1xA7sL2A3jtAAejjbahSyobbNL",
  "key33": "EM4kxbpVqoVnE6inxE1W3D3KY2vY29kSwTK3PLD3Jk6bAFyQYG3rcyMVbTtZEjcgjbmNqk2M9XZmQcZqRTDCK4K",
  "key34": "4yFA8U9eszry8X9g4HcQHPBDWwqNrrh17B3BeLGibypgJZ35F7GEXeAa4wwDNkK8eLXaJay9kctufb7kSNBBntBP",
  "key35": "99GhrnGHZBVLAyTF6EQ5Vwmo8Svzm85PAmi2ph5wvKWwedWyV9yTq5UdqdKtCJwRLATWJVj6fvFfQhY5EcvA27i",
  "key36": "5bwFeVeH8BFzBaA3k5jN31r6VtTg224PSApjiyy2sPWGwT4Tv1AwecCN9tj1o2v9cHFxZVi8GcXkz6j8bM5mGD95",
  "key37": "3sBuhRsMgNmNhu8ViudHqRosEvWoFrq4QVdrc2jD62A8vxQqYyrTFgvm5PXDCpc2ZQ7kKq8e1ctKKrJCUd7v2Guv",
  "key38": "5HQiQ4V1pt2ppRhLfLH93BTsqG7QQikC1nhHvziMkicAABi3JBpunWoK6cTJf1rjeN26nyPYSwDH9jsCT7mkq3NJ",
  "key39": "2oTcZJK1jHaBqabRgAJBCL8VWfSWpcTiJXcets1Ed5zrDgkfiL4qfWJJvUDFg75TgiLPthiXPGksu4d4DkgVTYKm",
  "key40": "4Qn5p4UXjgmjU3LcS9s4stVBSbfcsNn5RauSRFbYq1SL4UGVy61C1F5MDyW5S5phBu5pfzidyEdayRbpPz9SdrwE"
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
