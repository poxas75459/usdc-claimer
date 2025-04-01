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
    "2cxb2Ey9Mgb7bvT3nYpniRxgEiKzpCbKdFnATgueRcwsCbMtJKwgKcrzWgz3qPFKpSUHtKMxHMHoGakvtXH3BqAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22FGSWPk61XPaAR36gkriLgsxFXfAAGExhPxXyPMKiyKwu8AUfj6iLEwP5qZkpXUjDsGpu7YndBY8dUej73V1ktw",
  "key1": "2HG1RoJP1tDFuBXJSvdZKXZEFx4iHHkNXWnERYcnUgzBBYUowffeQTYfHtfwZkh8CU8o3oc2Nxqd4EQWT4jUfJ28",
  "key2": "4QnqaykQQw9FwkqVYzeU59Lk9oDiheFKD6nrcnELJag76bdM4nNa6aAnCXC7i7VJHikrExQb2EHzGWAb6PqkAdEU",
  "key3": "5bLWvgttmKeTXKJyLfYMzE6NzhttHLTUvG3sP6jWbEFyw9hbhNEJ13uP3JQ9vLtCLigoZ6sNBDxVznq7YeiL15Hn",
  "key4": "5U8qFgG6vwv5SA6G9Y39JECAafbKYU4kgraAf5EG5A1zwTyUc4Jc7yHFhfmMAfoxe3TNaBnD5CfcjwxfeCmdCpSF",
  "key5": "4q1aKNVZALoF7P582SoFFiKsSYDdUAFNyBvFdYcfUyy4LFFtpBwshS37CsqocJ35PcRaqYPeWpSbTmKFKTYJMiSs",
  "key6": "3pAcNBVzTSvdUxb6vW7DPtykwYJw5tTK2EJNeKZnBoeERGVz2WcWqxvrHz5E7s8sQnmxyo2VBBvvz9cYkucnwEmg",
  "key7": "54chVFV2h4TA7Ju7NNmNUmhoskEJXiVgMRkZoC66gJzaUjJQjxRe2PckgzX42fjXtzn5nMQA9BVPfsVfCrMVocSt",
  "key8": "3Aj6ax5QjA3FXwL4Fh1JE1bo4d8atuWUzVQKTs4T2XVsgftcq7zNptZKysnGN3wa1Sz2TEKm7kXFUsJCG6s6S7Ht",
  "key9": "RU1id9v5Fzt5K3j4H9UDFW5J6XF89hwaRR7sy3rNtztYEmibfgpUcWWVty9K3zcxPjcYKHLrYknkPSYC4XWGUqw",
  "key10": "4eGXvE6o8Hpgf7gd2GeRfam5m7ezHUQbdxYGNToFAC3hbbSNS1FtsU98GFFfYY5ZGvKz3d4jskYhA7WCkZhG8k5A",
  "key11": "46Tc8Ywx7hf4siwAyDHkD1L1C7cvofqu7hM2FPNQHKoGno4Eyj4aVo3dv8UWD1RiazQVaiyh8oSUmxnhhc9Vi6De",
  "key12": "41u52XZFFHSttAojU7HBvyt1FPKayXM87oP3FbLhw95QQH7JuF85Q9yeXLW3pwoz7kJs66yNkFhS7pEMEsPZo2jj",
  "key13": "sdzSCnt5qAA7HFSpxEqanWJMpTcTbpZemrzmXQrt6i3HJF13NTtqKHVpffWSrLa7zWrwSD2RcJvFJAQyaJBs68t",
  "key14": "2tn8hxchzBTKcriFuUviUpuPmgpLhMxzAKmpdQBg91qtTQefpqaZTP3fYLNyzRbZLzCJtnCyZxbZoq9ocPUtt657",
  "key15": "4UJ8uRr7tmRSxhTmCxMwpQMFd82186He897k9HTSsS56gjXYBv4mA4bDoAtQF1KP61qN4aq336UZ7fAy9pqEGujK",
  "key16": "3hUJwNzqR8EVWWnFVfEcWSBbeDdiooxjncXgDY3E13R9EvxWetSmNrV1trS6QBfCJ5R2AAhh8yXb6bjZDwZpCCJ4",
  "key17": "wV5sgXtkRtuUo3MHd3JVEL3C8mnZ8U7X89SXwxKhNcCAuKeAz3VpsWNdxdGNio35DKcwqX8RkGd6k5FdEfjyvee",
  "key18": "4CpmmzmSVRvwFhhFSfuqXscs58b5t8j3CR7xcETE3EBjGzmbbirEL9WuL2rUVKEYsQ6hXY3ujBuJ6ZX9yt5YfANb",
  "key19": "2nEJBvPC1TdZnWd7S5o3C5eb2T7iacNhHw4Ktf9vExZmdJ8Nksus6jvW4QeT6s4BY8pKSoGdSTwnD9SFzTmHReFo",
  "key20": "67nzLKexcQZpinutoJpfBECaThZMJMdMoepY2T2JxrLuCDsJsHTS7tqWupeCQxS8q8gFCGs7JVWYTLvY8BTYVGGi",
  "key21": "3BpE1d8pQgjqj8WFBczprzf4uW6cskZpewTn9uxb5Ry9WA4SDfehJg6WMVf3cSrqFavfhU6ztFxDN7Gqg9r59iaV",
  "key22": "3nqZmtrvcbDQDUYe9V7E89DMshSmB8NZjJEwdxfcDFyEUSBjYm34JSCXzrTzdT8jdEArGGxXc2Bk7jVaAfznFLh7",
  "key23": "4oRLEW5eCYDSE6QSW5dx4zFAgeiCKuwAwDPcWWhs5EKnJE5Zfo15ycTamJYTh9s6xtJbSYH4K61YXeKeYrbMZry1",
  "key24": "KUbyu9w6mkKgAGmZcV9uP3qWk6yrL3RVce3ctSRhFsrUidGkCbs17zdHro72Ao63VcYxXPXUvHWvRSN7sDmjCWU",
  "key25": "3VsNGJRygvXf5VG4wziGLXWnbrRk6ks9WsR3zQs99kZSPskkUXVEXdDCokpU3kSHSijvWQHKQdbHCGmPg7X62QNJ",
  "key26": "4DEgnTHqFPeDRh7c9uqdYCqez9jqbcbGuhXU9BgJ6aziA3bzugJpjyJtUTDcppAsPrnnsb9GL1L95R39PcR7T8hd",
  "key27": "nvs1qMoU9yKoumq4Sv85WPrxyyMmb2zALZQCs18yuPdcRv71bTGNRhnyruHkvJf7sArJZ5FPMfc4PjhkBURf48S",
  "key28": "5aEgDji699KnKrvYDKJMghmewtMmYiQGt2bCey8S7P65t1kpbL1792eJ3MZonuU6euJoTH9RcSi3gFKrJjD5v1wS",
  "key29": "2FXKtcVXxogAqswJmiZLo45t3PqGhwjWfS1AjJQVnefyUr4B5NDusVe58TSo2KtwdzhLPksYptgsE2FwNsTchv78",
  "key30": "2RDACnXfx74rXr8njzgmKCYBtAkeL7Xsg7esstXsivUgYoi18jkTBj8oxwYD6kGsqB5QM8BYZKdzdhoQPT1MvLtU",
  "key31": "2j6zAEsXrQBXFyu7BMmZEye18d9i5ebhZHgLJrRE4gy23HysfQFdzomNn1N9XnAamYAfuGtbaScHCkxpzWAva1zU",
  "key32": "455WZVuX6pqNQ5nVZDjhq2PxP8eNZCNZyu7PYFVpnGJRQZBNgp5S5W1uxtgdw8GWh9wwtJYi44J9fKARrBbmnMhN",
  "key33": "3bvuU4oMgFXYLaDcNBc5dnm3fYKfn8DEGDfNxGpkBc5HpgYW2hfZRB9HfRnxHwbepmZqGD7ynzxFjrNPwpQPsjPy",
  "key34": "2KQv3Spm2eaJar7AdFd1yGaLcPjriqFrRHTguQLxr8X8sgws545KLeKuWDvmMjmc7RqrezZn7649MyZkrFMooeC4",
  "key35": "kD2H2MUBuSsPpoUCnUycCHH8Qq1H5afY7uKV5UwRfgJ3vdidQQjHLiyXpCCNcbHBXwjfqTF32NWqHfjDpe49Ui9",
  "key36": "5HmfjJqW3XQQvrYTj9vtvtcWuRDTjo5JgzqCf3P9oA7QSn4fE74DQJ6AQSTERskoj9U2bQYMqbFknxQt8NDVM19Z",
  "key37": "2aBwZzCALgRZWDuuftnHgLy2QxtDJbAqdHYbLN6pTZxRWsUT8YxzjYVgXp4zrBdt4Gq4EwozJwhKYUQ2TtSUBB6p",
  "key38": "Unz68ka9aSTJMzb3BJx6nxAPzYXGNfSuYqmN5zWtNMJ1dphfuu1YhENbY4cC1Bc9AmQkHZbntrQZxy4bFLhUVaY",
  "key39": "3MkBcSYU9mm1xZBvzPCE3QdgU9BTMyLwePHvN5UJHyucdbZMFBojRysSem5DD4E6wtpPo3RqDaRgY83tcMhQN7q7",
  "key40": "4tHmp8ZAnWH9KeNZMeHY228TmnJHigkb8LWQMJYhomiXPsNyPAqJyWM62jY7EBtytCeakmHsmFz8BY2z8KcXfUCv"
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
