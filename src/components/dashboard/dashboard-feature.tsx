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
    "5YtGXFuZavDzLyu8Nva7RK1BxyC3rq8FA97mKLNT6jZWb8LoBKPj8HvV5j7RqmxD5gf1GLVVnQdEqdfEB3HPCHFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rDfnipNLJPDtG1SSrVKR9MpRVL7qYkU89cFs1SpzLG27QcVEoMJsv8nH86KjuvsRSeguNjdzcfwJK8CNXQi6ZA7",
  "key1": "3mQFTN6tAVghKEvdd81iVSntWPkBnaqCh2jVLcZoYPiymki2fJ5J5ZAeKWbb9Y6bQyippYUX9nvDHjmy635dSKhi",
  "key2": "2ryuVpaNqMcY2PfD3qKnw7fFt4es6pKZEYCDttGTNmKrXTqXZKefNYwrsjFxBHr3vc3CHbiMQthA1DczUNAgMX3J",
  "key3": "37d99MyUjxkFhREiNwvNSJqiv3hHXAySAsLvXrcwoSE2EaKu6n4o1zovvDGEebWg6NmUPFSfQirkWRzwH3wgBmgr",
  "key4": "4CzKvLGuRinmaNucdkRu7DQbzSVKh4mLoiiSecXdY6kqJbVWmJG4xVRboXBPuF7Q99DrPAEegnpB6X75dW2i34Wf",
  "key5": "okm2JA2ri5v61GLeVhDeNBJCy8EE1DhTk3C4v3AHPhQgQsVeE2cxFjc14MzeWF7t2B5XxZVQ4dX9gPifJy1GxXZ",
  "key6": "2Ku6gQj8rMcpWoATvLKwf2MezrMycdyW3ygtAaLfee6GwLYg9tWprqJhaQKZyHfyKSPwroG4drXj3vuM7kXgo7DU",
  "key7": "5xThVp3C4M9WzdiThH59VqQuqpTGaPcnSCauWNYeZcxWiwjP5XHxA9AD4FDBFH4zJfJzEdhkcaX1bmVnuuJHgcqi",
  "key8": "2HhsmzJnH4Q7obJy87131F6hXqAsSFRXnpM9QxEnja5HoBAYBDEi12rtnxMhUy8C9VWgGgumeaBevZyfXmNR4B8L",
  "key9": "3BSbZLt82CSwQ3Re2Fs9Ze8bhQJJHvq7ovAUKGg4iVSStZcfoW8aiwhrvbv8Ep7jN4Mri1jvDeyDUPEeMqq81VZi",
  "key10": "sB9HavrgifaQBWychdnZs1ZeChgsA9FxdVZopLQFKgTK5xqBwJdmAiVm4xJCXnMUBQkHVMRq2h1LanvCWT7SG3L",
  "key11": "22hypLriHXEXcUE37E8UF5XJJeZMHk3Wb5rEumRf56LM26EXSXGsLyVVpvAn1hxiZVQtt84cttNN4EdfL7ccDthG",
  "key12": "5LhSdJwhrBbWaTC6p3XLDHA659YQmryDqE5UkgTwrHTWvzYBTWJucjwLeFafwaphGFFpfKo49w1WDMfzFiJYWuCT",
  "key13": "hyJBFUF2YezYcb87aizTa73APH23cHaTacSxxmwGJCV7rDDSsBQjBRSuagoL2tqxqwk9u8pMLwgLf6y1nxfttA8",
  "key14": "5RqFT3M5rVdAvnhznR62DBNNisbxWaVdTrG2xZw4qdufqQ7SRWZWGa6MrqUF2YUiVRvRTvUsgTsJZiZDsNb2i38h",
  "key15": "m335UyfpRrtERMNo5tRAFE3nDyRDb87PmpizmgbXAGYiWFBuYScjuGktZFvQmJquwtF6BWt2bbVXPqF5i9EQSgw",
  "key16": "3cvMeYH5ryk6Kn6sR7WeBPmUDiA9af2nUX6kHsrcYUzsGB8kseBK1AxbbZNNfKcTy2JfXcqtxHn1FuxY43TybHhX",
  "key17": "35xYzAeP2JmfwcGzGN6Dq22ejtQbuXTJtvqszd9pTjAkWq4PDGd2UZHzVAEkyu5BTXkK1WCEpTXDvWDRypX6J1tz",
  "key18": "5YsnhUakvGWEMevsUtexJJm1VNHvhJiuZcCzFdoKtQQo9gDV3zY44HpABdjZz5DsSC8rJArejpuBRS9yC77eivDM",
  "key19": "3BEjt4wmu8RzuZ1BZLBzRbjoKf5hbZtmmyJQC45EVQGig6vwbeyU5iTf4Pd76gRHju2xTipFMmpbEHQbpFsUuHiA",
  "key20": "227CdoXaZy4Afx4ro9kCEZae1QEReQorWcToP7Biw9ZSfprE993FCPo6G2bxnYxTyGENXrwRETK2AxFcKJB5a9J3",
  "key21": "3sXCppXf81pdjrEdDcC2tHZ6PYkAiX2ebNSxw9YpUi7vFy1hBg5zGPX81oACxx5XWy8AuPd9xuqtfWQU2fQbzGvJ",
  "key22": "33zpwGc1jZWtTT41sA5wqbYayAZeKKBQnm6G5Tkhsg7QTMPyBSGHpNmo8tEjEc5q8hEquH1qSHtf34nueE71odLt",
  "key23": "3kdoi9hQXtRn3UteiiFsoj1CrajV8Rm9p5kPx5Lo5QqsSbXeTwHRAfWZmT32fKUtoGPQ52BMtDMP6PrU3oyQVUXX",
  "key24": "5Z39mp7JC857QjgKeEPQCE81qCvqw674LFFxcn3skgoSBmETDLH6nSY7e99y59J6UtqpRUTAK6Z3JwbN1NDxatC",
  "key25": "2RvdQHm9ZGtP4e1vkdsBjhrgw4Ee4czrTw1dd5BdNhESBG4sbG8skT591UgBNMHB6biPp6n31h7ECt4FzigpuMPR",
  "key26": "245yVro4AbkYx12PrAeFWnG6teeA1TYvMd43DG6Y5M61SiiSnPzTqxSc5gTiDUTQwjxPWHtbqtrGGGJpc6ZeGKxC",
  "key27": "rRBzgEde1C62P2DzBnn5Wwo62zZ8n1NdfPhWrqy4cVsn65yxfxmMNdH2mjy2ghBDU2vtxHtE2kcw6bNkPwg1h1D",
  "key28": "ZA2XkatXUTqYBZ2dVkJk6M9HczUd2cX3JFaGL7bxeTY7pTU9R2dFdnmV21ovasBTdV8YoLukuuHdePxeToHrtjH",
  "key29": "4FZj1XuqWhQi8DMXqKm4CHCJ3AhHoB6wptFAKT4Lh4TSUNPP75vCzvXfhVcRALBqrmkxRQ75XKVaACTLaDzhLSma",
  "key30": "Qyaw14waDUxzrt4NE1564QaPYCV3VD6tDn7nt9NRRnLj7zfATmTakw8RhpbYi5At7A2jvo8ijw6ooEJmhxwUL55",
  "key31": "4VEuAG2LwsKUKgHaMGaSkSEGrXX2UkVtQ87adkGCLfEJqbXJjQ77fRaqN25MWKPh7M1wYahJzaz9kiw8WiqtcvUf",
  "key32": "2kXidZVZ3zj4TynSNXmx1CcNELd6D4qKLipzT3H1acCY7D14sGxhXK4Kqisx16vQ9E93KR7vERs72zjhvVsxEcD2",
  "key33": "2mJPeMYZRBTQLysGTk9dJYgk73TPZzAEFPSvfLNzwcpwQqk1kN55w1nuF2YsQMiheCNs6xS1d4RuHsJmU5W8hTaD",
  "key34": "4SfJTr3Eq1iszh1ZqG4nHvAiGbUaMiJWTZ4Sxo4j1sfVcu2ot6LnGtWXaJjh21QpLi1gExziHDyQr92xpfugGuDH",
  "key35": "3RFdn3mXGW587SF6awWkSykXzcdAyBsoe9kykdXdYDVksDQXs3eXoYnWhuY7oN42ZvtQkqwXFsCMBWgA9eMtwrKf",
  "key36": "3eefiX55Qe3sCst7xCo5XN2tM7pioErSxxHKZF94jm2zNZDnHFKRgM6oqRkw14nvVxm1oifSLuTGn7Pbw8JJAWmM",
  "key37": "auG9UFjgQqH2c5pvtuTFEukvqYYUBa6Qa4KuD7aMP1hg5Fngn688xKt71Nn4oiVNcJs8TWFPsoXgrBLzWiPSpkK",
  "key38": "5ZMjCvnWU3vacW9ssjm3AwyRE9rCnoGi6QTryZ2sV9T9B4sSxbvWwXRtaChXiN2yM4izo68M1kiKvYCHLNW8nDtT",
  "key39": "53remvUN8b38onxnFYmaf27M6ZPLBUu91PGgYtHSyskBLtWwbkxmmS3j7YEdqC2tJeH3UY3wEPFva1CtMzwKE2iM",
  "key40": "3shxqn4z1RbBuqeop1cEKD7ATfXwmUXTyA7NAhTHAnKuzga6JyKrxTLoZakcPRML2bvxHiFvEK4SrosqiHK66ERC",
  "key41": "5Ewvhdz72kbtREBzLyhgDWqi8TWoGQrsbT6C7Q7mGzRfZ6Bwvju7k6dXNandakHJcUWmna2WHsnBiNri6dBJe4mF",
  "key42": "ErfB9ETTpX5ePUkHnUPPBP4Xi5KoCrZXfHWwq22pdir9tBHA2nvTGrRbyVV7uctb6dWpe2kvKVJN15d4ACPpAVB",
  "key43": "2U9cXcirctz9AunmLfTC2fUJyiTnmC2GfqCgpAWjMNng5LGyptdxz9UjT8rwRFsxNCgr9drXyqj9YbPDd7th35qo",
  "key44": "pxpS4A9weN72aFXFQcftneWoA1qeHX9GFDTretBnTVRp7b2t9oT7k89qvZ4fLzKgSijWjNwY1s6BervpJzjr4Md"
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
