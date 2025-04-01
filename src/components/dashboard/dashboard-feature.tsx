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
    "2SQs4LCce8dFADcsk9mLF1rMvvdRop3adJMBs6E5Wjm1e2Gup8xTvCZ9ADB3euzYc6jrYLcQ6WafUG118mPuhCpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xTimTExTsVBQsQ68EALQiuJeGgbFYXytmodwUwJHZSb8EL7nhbQd4uUR6jYHJYUtaX94B3dRkKY7pP2EqjRb8cX",
  "key1": "2LVcPEjg8LVM3FVXuYCyzbmATguqC6Y1v5eLVRGbm5ZEGHg7wRPLhuezP4PhXDZRp8GdoNEhAQTZ3ahzUnrWpdAc",
  "key2": "3eCCRtDoi2wmdztXn6wYr6Dp2yKGXLbt7Htmy1PG3q4bUnkVyekyknvzV12SPKeVfEGEMaVRdxxepGQsXoFPZV6t",
  "key3": "4g8ov28KdPAZmjqpDRcbKmEUbTQT9vYya5qfPhkfDNYBQApRqusfBYWab9qcAr9HruJC6jf8cXydXE98up11Qz3N",
  "key4": "Hn7Ad5G8WsRD5vsAqUocq6Ng9MuERrPyhfvK3D3UMkms9TCYRY8mco95Cz686Y8qTNjhxPstHmh6UgZXK18X4sa",
  "key5": "44z38QNyhkSwSGgdPTjj4p6qYmvVvyhCFsn9dPgj2FCKLnwYR9ZQkKPVyTdo3M7kx3qSWUycgmCUsFTHcHCFiU6e",
  "key6": "35B5pqkcfjKoZSdRabe9iQAdWcqrwv3UgrxzzaXrxrnnU7CJGPHB8K8Y4BRLcyUNEzTuxDbtkDvfqgu5SGwhpVX6",
  "key7": "2aidfWSR3ycgrNxbt6DVCQ4maKoUjcwR4zRXHYxaZ7jMm11Ys5bqr5YGYzFYdi8PBVDtpVo2teF864jGRXiqVvLB",
  "key8": "bcwcAtRh3SmvHhv57KuUnNuJp36rKg2GADwsdPtKRdsJQwWJS4naTBMUAHYzHQQSjLAXkJKfNvYmAVKiWy6yNP1",
  "key9": "4fgwjTuJ3vhCyqdHSdbwmVBb6C6pXNnXLE9DQU9pV9pAMrvpTevwZ5z3TZcptcEpQyDRvWiCsLoJKEpu6gxipT6P",
  "key10": "3Mt2qfsixAq4hkV5TBSzzK6DYb6tJUcUFudinencLbN3W4tTvTayhtWvEu2CGg28Np69ZajFS6dbe4DXkwZ72PfH",
  "key11": "3QFW2ACvwfEqCm97FbRaVeANKzjfm31xWALr7NkK2QMoSGS1N9jjfQRvg6zhtN9Y7V233TXg1voWGuThyrtNPxGd",
  "key12": "4oagdvnrBhv94pfLPFNc4kBDsfABXWvA1UwUxJ2cYz4AsRMbsaHZ1NZxVkm4LkrFPP3ebeZjijewHRj2ChxGmMzu",
  "key13": "2zq6h4hvzF6mrkAgKAX8mCTkqqn9XdzPhKLPU74XYP6G9Gt7d4ZNNx1s95opchpqEVkeijLUntNwkSyu44E8eqvN",
  "key14": "66fQ1QZhP62CVi2RFR5mi2Qci5826fqm2gmcRnRM75cyRNMhfvoxqGuPrgRyV3bHDySAi3T6gsXGFuUUmHPLCmbp",
  "key15": "3k9VjHa5UtcSn4DUn9nYMmEJRNihArhftysDMrUPjZGP1FcNV83gHKj4C8jZsb2dm6KBUzUrhXqxGZYtTqTaMw8u",
  "key16": "SaHBF6mmNJdrdeKSJvfmdwabuxuUrdPFT3v1VCauMc9FVtSd2f1NyMJLzAV4jGjrYUVNV24JDN9d44pAuRfYfxj",
  "key17": "4QoqgvoUkhKa8kUA1hQvLZVMqVrhtvAV4Zpftx6wZYkp6zMTs3xKE6jHLrbo3DLoKNGPXUJ7ZVnDR2VrNddYpod4",
  "key18": "5LE1H9qgFCcK24v9N4Zz48AZG82kFq4DQqBwjM787pwvudP5xfzy9rrVih9n37omvEeqzZvbUzzo9ejD8p7yudXQ",
  "key19": "ZzbNDQafjmZpwYvx1u4pFaSmirLnFeP8Qdv24g5gqDRv2TkRTzhVpkiCLpkxeamz1DTidoFiVgiyWXD5Bm79kr9",
  "key20": "5rjNxeXPiuK13Hc83qsjAW9MtzCxkMbNezMBk5mpLinDvbYgTdQxRevczYoS6PxnbJxzvvGry24NKEP7EtrJkfRi",
  "key21": "hRkchJMyCA4nCqXWwEhxQqKioUgo3ixpSfqqKTA5aAzGTn6b4Co9QoeJGUZBQeZCThL26V3aGeaFh6xyqrLmvPP",
  "key22": "4ELa8YA48mMfdMy5MZeXtCeYvqJQCbwGTj18kYzG886N1dg3JhUbByUmRdbhNQTFjvxPoifNq1oA3jwJBCdvWsC8",
  "key23": "5MTcgVmJxEDGoYaN1pdSm5m2ewMMr1YH1S51uMRv1SqdaNW78rRGpKb1JMtTtTQYZpDNr7gfxoCHaSx2R33ZpUD",
  "key24": "2ZKdqP7mAVGxu6SCoZtd2KRfgf5ATUGrmfK4dcVuUKJTvzoPpD2mZFr6iqY1sEzGWKhCDke4mC6HtJRstYUHLbU5",
  "key25": "CZzfKBbtrW8fcLKHuniYGPxC6s4L5MZeUM4rbYDMEPhhMUvbU9xv6ALmG31XfHNUzN9vvgUUbD9iXLZdRL7ezN9",
  "key26": "Ecw6LSJ8AnMxSQ97zXqijZz4rEhQC7ALKDr7LeH2YjbdDbYKawshygdmQWdajGr4GRxTp9c5oANSdvsybSTXfR3",
  "key27": "3GjZk1CmP3mVAcDiLan3mnzjEvxXp83Hgmg53AJ38uBgwjzFJBAgzDy43MrnQ9LmyFfXThZP5S3ZroiEFrgJCdc4",
  "key28": "28MZJBCcGGx22RUNGZxs9PpauU3Bugyp8e11NfKRxxiqbM8RPSo82vhc5S1PV3Y6oDpFrptXKdox2JnDxvhn4CQn",
  "key29": "47eMsBB264xaRHLktaAaqNmhTm5wmrReyFW85bSHjJqdjGNMkrcKEE8aoQtBzfhq7QchezT5z273KBu2fiRdiA1G",
  "key30": "29MDYao16bXEygqFcKJT24jYV15C5WH3Ch5xcDnpura5PdDyLMhoYNTadF148mEdYbsSgbfwzAmTMVtCGzZYc89r",
  "key31": "4YVmmTwsHdMXHja7heFwPNM5cs55Y3qzFKJ9L6wwptA8JpBG29b4zSpB3dbWmqdMKU6oFAhUCHQjHw2p3VSF8Cfo",
  "key32": "3BPeG9u4sMKjnqG3zehZejnk1aM3zUxkNZXEXa5gzbMuKcW3RbnaB4peShTtG4YM52MU3FHYTigVRKkGs1LwBppb",
  "key33": "3rGVam7qiJphhzM9RKGCqWwZeGhjEVf29bQVr3Rw58GatbESG3TGjJ5mEFQeAkwBztUDWurWYDuzQabmtTv3AP8L",
  "key34": "5C96jCcABijLTBuCN4C1uZXAZZY7WM43ijqC6HuhKU8AFZ8HSfedNPJy3zSKQXEqv2ZpAVVtHoXDVgnpGFroUVnA",
  "key35": "5MSYYinJv56GEB16s4GHtfPVPdmpPp243igPYWy5XTDdiSZhSorvFiLNNdBxrNMeYC5uCaKou3ykaEg4wDbKJZK2",
  "key36": "5iWVHA2mV64S59M55fiMeGjhmgmpEzR16DfVbhvk7vU5SjgfR2bAEEHqWqcjssPWC4AzA3d4U8BAr58tPEKAMruc",
  "key37": "3xtu85swaiBA7DUq1ZAxGitzUijbKQF8KitaBeo9Fcz9cqLY5naZSCaNWLEKbsoqHzADMNfkNExWuoRZNpn9yVPU",
  "key38": "5fJZcbU7R5dwqVt7UzU3hoZq2ihBWEGkZ85dDNnp2kJdgdEW4MLF6aVd4vNgca86pyUFpW5qoGdbmjHTegCztUhU",
  "key39": "4hxdCwsQ6ch1jQuwroHMMpyTYy8tPDiSHHK2jB2sTffnVtufMobqeaYU2aXErq1AC7ANwMXXfqVtmF7aXFKiKram",
  "key40": "28w7xerNuzuXg2jVeQZy9YkMLR7fnRfEDVZ7yby48J9vSTXidvbaT3KcUXVUc2HZq14sxpwgDrLoC2Lh5yWvJHKk",
  "key41": "3CnQJNGszmrLB1GPZmmMfFBHiNjzwWMLgDheKrnQoYmidg4RaTLjrCQNAH89Di6kBWjP9UyAvHYQj1EEZ1VioTew",
  "key42": "54JCLetQRBgyJFj64DSakRPG5S5Xeh3pTHiBBf3z4E5uHWGAjX2S4SPNWUbU7nwJ4XtUjVwYWHehxKqreeKEKq9L"
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
