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
    "48Kpdy79NpZhXgHP6Y6Tar5FXGhGCVbMYMCTEjqryWPhZwBX53xo5zoCwyXEC17c3PXiNbfeYqjP6SwD7pXiLfMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JxBSNLZncFfFJVXC6ovdKZNSWmcd58dmc6QurT1WcRNNvoAtG5Py6VCbKuSJ7SLCHBDyQykraEJRAsft5hXFnGe",
  "key1": "3KQFuWqPvqL6VoRmBpxVPAT37uMvrvERK4xDw9QpVrSLQR2LiuAVHFxdtvozzmhg693B9KoFiFVtL9mQaj2UwXvd",
  "key2": "35YGkFNpBKE9VbPBHJ8YQ1fWsXm3jRoBGs1aiLsy2gTJ2Z2kyArYZNmTMbsHvgMH5LMoPs7EQcBN5VHy9x2Muokx",
  "key3": "3iU1265yknm8NLcWdBXfCt9mNNWMShdtineftHWtYR4UXccmJKVRnWF5i3R4Zr3MWGD3nAbi8Mm9hUHUy9Kc9bGd",
  "key4": "3582dTHt5uaG11FyahpT8XHqbUNoHXjCLFd6Lv4Q6t3bq1u2MDGhvL8PyGL9vTBSLisrd3hMaMCRvyscKtLUs4sm",
  "key5": "2begaLdNF2mNEmKr45ZrYDtZL8XyXVkZRWt9QadBzDcrGKrixcuUTmCyvfEYtLJLyR76jRf2XCKLdkftWT2fakWs",
  "key6": "5HCuNvgYiz2EG5Bk5NtP2xJRjAmJvDWZpymrH3uSyApQEc3Eq1f3MfNirm34M31arvDS3R7mXhitXkbv5d3RFnpi",
  "key7": "5qLx9AtVMQCZh1gLVhM7H11zF26YKTLVvSU78UWdSffnEthSDwE3EpqmGP5bo26fJtwEp4Fx5Hp42u2KMsa4VXgW",
  "key8": "29mCJZNtnfBafRQLnWTXJmAQiVmYtsrVBAJ91jaT4UgWViV1794F61hdaQZxm89VAoMpBcwumVXtxoMNFSWCxjdC",
  "key9": "2E7GDD8N1YjcsCnwpCAkQqRV44ehfhcZCqME9JnCvJwAHoh9UvqvCEQxVUUdDbjcBQ9DS5GBxuZCEPdH4HkGMisC",
  "key10": "4i2xtquxDPPpZNQ649MZGgG9HLrccPR9QoJoxZbpUCuie7fziR2FviZXZ4aSs8BDe4mc2ni9yYPBur4eeX3BXSkn",
  "key11": "3d82wd427GwKXT8GRssCyr1KgW1zwtKjKsMkP4YYnjmGAj2i3DGDgpNdUznBPMnLJVVteahpDu4vAt55f8rUarzY",
  "key12": "3jjvJ2D3Uz4VBHh9mNv2cWtnJYh8hhehRnk5LXv85PB1eBrNNcWxDCJTL2uFarM6R1Kcg8MH45jbfAQdjgiK12hP",
  "key13": "3Dd5zwTLNo3DvaTfkDVVpQpmMQuzmSH4dHosYmvS4n9y9AWCHU3fdWsK3AXZwGArdsAd4da8wPhmVYPVDh2hnR4R",
  "key14": "5FTKjKYphP2A3JH9KBAFLV3qbtLnz9btUvQYb3oJv8JCdbTSQCBDhnwQ4R3vm1W4b4vkhAx21taaQYaPSiD3ox1y",
  "key15": "2V2sjiBYtxq73ENBwL2PrU5bTBxQKJZWwnZuBqepHdZpTszVDjwbuFUV8DNX5Wz3yy1KzwpVTozTdk5yyjDfRLap",
  "key16": "3JTwn99fxtHN618hrfgoWHsfR18QUvg5eNvUU7iCb2DTzbr4nai3Et6pvH6jLsdyh3pBwXT1p9wLGQKt8dcoBCqb",
  "key17": "43RrH2pFNXa256hfJ38Vs53cZzHqvjaTp2XHpjXEqRcuFu2Gg56yYzhk2UvwhboSPyVHdUkwXQNe6kHVzo3LEcP1",
  "key18": "5buCSdAJFY2eSk4mdMDvkznnUJ3vgFu5LynEssdV7qhhmgRwyYrJirurS76Qcr1taH5a2WwZopdJMNJYvDig9vra",
  "key19": "37U1GP1QB2uAcAQPGWQcFkVdrGsc21wR1dnFFJUeZJXcUkWC8eVQ3t3VxgimmgwPae6A4TjwAyzTmy7CHPE9AEwj",
  "key20": "3XT3wgQCKJjDpUzvxDjaiWbZMBuqw2LYEUhk3RA5mLPs5u5aetJWUhZLQUdg99G7oGQiPBMSozT5QKJXjNBahaAr",
  "key21": "2eGakHbx1o5gVYjL6HA3gu3UggrpYBWxmR4k2wA3KXUubuqsTF6BYynBXXLQhU5F3vpyDED5UZvyKzhzdrY23rfN",
  "key22": "2YN3Psdf5btwsv2oxx4B1pkM7QWT2KYLWdexG917YUWeZdKPJDMFGEzTHBivtniF9vrk3YBz6N55pebXDodvzbii",
  "key23": "2VnqHor5ASRDVg68WEJCJ8twguZHoKAF5SHSWxVuZehvo4ZUy7HSs7vyE9aFxqaLZVWHWdPArCUpsq1AGN6s57tw",
  "key24": "3rzUzVu4kvqWX5sHWXsjTHgTaCga6VLoeayEP7H4G292vezo9aBYjsscGVBQH1qbArzgWRnTFJwjL1rqfkAKNNKc",
  "key25": "2y4evwRmeEXwkZT5UGEMLMYUWtb5s96NQvVK1f3SCysfmyUcbkzCgj3Gp5b7WaheGZ5eabQJh1fBfCeTecbK4Hzy",
  "key26": "3Z6cDoypnjGWskw1fFYt2C4fYWUjL2JdL1HrTr2pXUTv5bp9JfZz2gXgK1FXSt9XMVKAxi7ym2vzarggvkhryCo2",
  "key27": "4JYE5VMbenkm67tuKkiTAJHMXnhxz6NoYEAhJJkzDiTzUgCpPUou9RF7hrDrviFgGXiPPoB9kDyCVBYLDgfx6gse",
  "key28": "a7P473VKHo1bfUN896wHFKsjvrGnzb3z7VyzHLBJN2eYDn6ZHhotvBkEZ9TKNSRRT3B2uGeNHeRGcADPXzR3PNM",
  "key29": "4fFUhbR4UnxvvoLEEndChpujvPvkGEbxtBSkEUmkVWeGH6qzUvYXBvht45RANJAWHPLe9NYrNW9oK8UTx3KZBNeP",
  "key30": "3HKKSA7oExJWfRC9P6yEkyZ5vgFtJpys43Mq1785395nc4vVx48GKdH6iRWePXRMi98CA2xrXvfzLQ7JwhUyn2cR",
  "key31": "2AyqKz6w4dp72YGKJCCAc7CAvLszsqJufjm65ZhWdVrvJ2MzUcnXJZcaDRL3ZT4sAcH5J65ny1oq1uzWh1uNeoSP",
  "key32": "2bUq3Pni4kzXW5qwcwSnBbgCv9VStsMu8NA7qTcmpyU1ReWkD4xKjrVh67K6qdS6uyfXHxhdBjw26BWFtNsyiupH",
  "key33": "3GMUKDWHARiozvwd12SQx9Y662d1wRgMtqdz1REwyhwXXEgZktEFhXSUvP1Ae2RSvCyPs7VSo7aBmgHKJ513hQ1Z",
  "key34": "4jAJSLcSd8e5fwJ6BwmqmeVC3Lp3abH6aGzah4tJVT2ixgUKLdHMx2vQT1cjWJx9Ui3x3HA5tsfMgaKrTMSkJo3v",
  "key35": "5TZZJpmpf4timytGBSbDvVcmmmiXmWea9TrV3uFYoJ6bUwja1jTHh6N5wEDkZ719zACU9ihkNpV5XJvq7sLWfR2k",
  "key36": "2GVYuayuaBsKGRyeBAdayPGxJsEbKFJu2qPCtDZqKs98xThA2bUvcuYELbkuyi9pPqKzh3r9bZAyoCxTtQ2Cu1aX",
  "key37": "2ir5Mg7ZY3sQaeiWvBpo1386EFRgpLmp3NfGTC2F361dshTGXwNpX8uRaxD4is7dQRNGoM68baDQWpyqzhvJqu5B",
  "key38": "RetFRnDGd1wgW1tNxHakxt7R5FWm8GyD1mHhB5Fw4T66sKTx8GyUGvXi67LZBPAoNY8QZn8PNWTZumQ4iS5F9gF",
  "key39": "3Tp6qqdBpAeozNmpyY7p5mG8QVcfeUcZus9N7vVKJ2yx85Y9i9dxxfcz9FVkrhdA4FxRnZrbmA29q9ZaLFTFgNe",
  "key40": "2zeXDKFZh34AH4EJ3yziJt6rnqCXGfk4LEuJjjU94wy7gSJVCEgxMqDt43jkBX6kZGCwDB4zMaPzkwvFVp4fmiu7",
  "key41": "2h6AG7PFP1o9eJaxYH3uSmwGHDmr1b4b3P6eKpVM8N4wELSnLYok7u8tpVHCcTmgVHS36acrWHWwHfLvewxr1QZK",
  "key42": "41svBVqMHugHxsigk7bCpvbuhvK2Vvy5PvnYvKAa4JTB6yHPwVLhTqShnH5gueA2STCoqjZ73JZX7fRwkx6mtGpU"
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
