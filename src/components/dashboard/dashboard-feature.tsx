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
    "63JHgZm34oU6wk9kYx4PAzTEG1NQK42CXTvB1Pqx5Z3mpc66FZfpB73faTW8P2JibmsSK75igaPcMZCb8SxeZznG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uDWN6TY4shRngbsRTFwhSsAZGYVe9VpDedU6BQoVqyaZfiyDCy4kpJhPsdQdBPA88N8wy58ZVKx4qzoeu7NivF2",
  "key1": "4umZkYtvQHV5feFSYtje9q9kt9unH2QhtjhsooyPypvDq5eHjnVu25f9hE5cpNJzmqyYVEmDG1BeYbTap2u8CAeR",
  "key2": "iMg9hhMchN4pdEhQGvCHzw5FPhZvgvuZbs2T19qL2viJxodj8KDPzJykMjA72WzuzKh7QXJpkBZ26VrVRfsX5h4",
  "key3": "44DBu8RzrcpDiTTLSsuPPPrby2HUQnzCgm1pK9VYncj3WzbvQCnQHLXFu34Sxz6bhvc4CnefBvFV1qhZbxWQ8FKb",
  "key4": "2Q422HEnRHeWuKLpdUXAJyQtV37TAgsybEdQP5tCgcbHWGaNZgtm2mSiZ3yDZpXqW8nFhvEdgFm3BAQ4J6fp38WF",
  "key5": "4uAjcZreaTWKK78PuDCowsH2KA5M4Z7zTWnrbBcPWatVjL3RioqVSSoTH6XiZmzwkPfGJJ9GQfcK7riMsC163qPx",
  "key6": "2KFexRtNzdAH9JhbnGbourQKdLVkvwzbjpGfosa9iEQJftSjr1MaW8ceZq6VYq6m6UKirv1Gp9w2cVG2eFAHZN7t",
  "key7": "2pu4yCKgv7Ywm2u9PXcKSQqYj4YKEB6fMCXqJkp7RJbmyaVw2jvnyNiFkgv4ngizbxT7Uw1CgXgKeZ5dDM7DLjFf",
  "key8": "23XU6fyAgumUeXJLGs1jTgT8vjCnoXWH3k4Ez4vitqM6DJVywVTXysxu1tjZs3JrjrJQCYTTvhCuY4VdUyZrovBH",
  "key9": "5KAYPwGCG3ssrHPU4utBZHsAd9eUusQ2ACuy9KEMYcbmSnFEaDE3G42jWFuyseUdB1yfaUUrqdB7avKKm2awn2RV",
  "key10": "4aTbitmz9WdKVpRCWowYxMoXpeRMWWR647j1W4cbQP9DxJFLimWqwqSMM9axHQev8by3WfkVfiqay8cDpH63NDPH",
  "key11": "qdPHucJLLStLBq9n5NNoR7sU6Ko3GvJpkuBRWKLpegYtDoCSXBycxWTML4YXELHKTanufsF3X2NVFqjg2USTWL3",
  "key12": "5ZUsS5RC3G8vMDneGUwoAgMUdgUJLDCRj6nUQx9TCL8DQ6UXdY89pfihEjK3vkmPYotcqX6kJReEd3q7PDi1YPBb",
  "key13": "3pHMKQVAgVWiF4GbqWbbqQS2MkyghhDg9w5oQsEWLKSjjZ4fvBXJakimmv8YRDkRYwNe1cFkcSCtx5Euz4WiH4Dm",
  "key14": "2NctDyrv58sVRzqH1byT71x24t8Kxj3U9mLiU8r5WWpjedrYWj2v2Txkb5bNP3GmCzQQtxUDbXDFbkyv7pd2NNVV",
  "key15": "2uzaHsTH7q7ZNC1pW2RfxmJfMuDf4bVGXC7j19j7LcPLAn8KuQvUbjVCEBzip8Qxkv9tnzuTQsweCn4fLgTBpcoi",
  "key16": "3s7zWDR3B19pNdVwVgG13XWHMUp1zAcEsZXQNn5oxEymoPC7XXB1x1XUBpVpiRTwUZW7EgqAHWYb6kRK7e2UBhgJ",
  "key17": "3LDFNhPLypya9h7adZdghDASznw6wQr3NTWpN2bD9SxiKqUpuj8cv7wRkRfjUMtpFHmRPkvUqtFgYmUn69TuJP7W",
  "key18": "31r8cKinPz7xoVKegy7MkVf9G5XhWC5v5PadoX8YkyztfmzZ8GNXVSJ6zeo7enL7eABMpL3E6mT22NeL5fMx6W9k",
  "key19": "5aP2wwbYayaYVihs6ZHyKCGbz1xfdbWQHLzaXenMNjWiK9nC1o85wnspP1EVbTiT1X7ebMDLVGjhAXnSKyWy3igB",
  "key20": "3PPibupLuSvRzJAPjAtn2WZ8PgmKPPHZSA1ZpEDaWifBheRutZcHxGDjLC7WiipMk5MFWjiEwGdaGX69yKJMUbs6",
  "key21": "2Z6QCCALSReNikpoPs5ME3FXforxHWyhdDUSn418tGhwLXwmmeLb3shBH8D3yF2keMqu78xvNB3ypovZT5vbucHq",
  "key22": "43eGqwibSvgzMkC4xAhnhSh9ux8zTFv9EbNV2LboULiAqAkf4CqEzKNREzQkc19oPtXbD8GHEX9QLqbjtd9BYeTS",
  "key23": "3NNG6G2Q1D4Pfxb6jJB2TxKutvG4w7wtfLwzb9km41gdsX3ZeJp8edQomSgknzSaftVedB18QydJZ84xQLX3HGMt",
  "key24": "SepanQGcQi3hjhuUWenkesUtzEnRetkxPyeokN7zGfpmgsPJDJiGKUHsNMnjt8NjGWc69jbitipGLiZvm3CEAQe",
  "key25": "5E7aCXcAmircA8rdkcVsQAgzmBL9xm95ZZmpaE3YSk1qeadA7T1x639rPTMdb91vkosfw1EKKRReE9RUTy2axuc6",
  "key26": "4j4uMdqWeE828CyihjHrqhCpPXwK2QsNT8YdLHNtVewpamgQ5g7atNWb3N7yrvTyv6VCUgpV3HKUdunUwoFDaX5Q",
  "key27": "59zHwoo8DKUqNCqjCzHKcS8PTQd5apdez1YuTZN591ENn4GHBF1Sh3qJ8RDVA58EXA5wm8qL2TQjrt5Tvg5hhcEj",
  "key28": "3ULGeuzUG9BSHHM5UGduCLEwTXNk5dxswCTTDhiu3SEUYo2xDNVF5jRMgpSMbQyAVxCkaffdKBs1yYrJJ2FjEaoK",
  "key29": "2dc8YEUaRvTPgTj2hj1q16i92aS9nQqbKBd8iYQji6mcbq8aEPc8r7kKWP6jouE4UB4mCBVPsac2xeWdXG5mp2sP",
  "key30": "4FcqEigZB9TM22Guc2WPdeTThCpcVSMtnuNpnAwiaZGzvxrxBzFqg5fnzfzd7Su9ZsLrFfCSPJZyoHqcdnUxbYDa",
  "key31": "4rfVtgBo5dR3Rpsx6a8MpQuFWzQPPvfLAu6JTy37QVtCXvB27TSti5CfZdfx8hPxjhPzN79r3NLpgumbhGcVRWW7",
  "key32": "2UgfG8djDX5Taa28eTna5fBJr5Hf9n6me499j4c4YHqBEmpAPyMuvXJVMCd759M5wZy7d33RELYfZ2EiUHj5jq3K",
  "key33": "4pypR1TC5NDdGn5bnBg7yTw7i1tXFZ1N5WoiNuBBJTZAYN7aKbdeSmBAjNuhatGpaaPG1ieA89Mazwm2iyKyZJGX",
  "key34": "2XSSx2GYgyyFthPcrSZNzDgF7nzDX9Ec7AWToEKqZ3AbzA6Jy1BYWWiyuJPaDUqdaBMCMCsAktFyB3VRtkHRqN2W",
  "key35": "39y7Jg4fKKcaJpe9xdygGyhfMLnTH7spAsTbbE3QRb6QcPPmgzNJmxWmcLzWgDX8iXFhk4zPwcvYf9HXAkeqJVoX",
  "key36": "49bT7v7H1g8y63Db1wo72qVGGUK1tpPJifqDp589RbTo28uKCDqD15dk1siMjTui5HEk38Z48HerqNojy1pZ9enL",
  "key37": "4H5HWE6AseNNVuMJnmbMFUdj9MJNMSq6v4i6hTHLSXx9khinkMqHK1imu33MvttwDQfrFF9hXeqj9rMcuXBarwMB"
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
