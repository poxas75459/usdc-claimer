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
    "2L2vYjejzBa37bWjj9uXAd7HXUGooqHvXBeSErB7eUkP9aFqz8qewbHWUJrzjHzhPCAHzx65F91822KaJsrZ8uxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uUz1LCY76FnABZMkEfSZtLKt2MreBUsMbu4urZCxaBcmhBoDsgtzJH6NJ13L4anNkRvZ9z4yVziPMUCJPJzswbr",
  "key1": "5jHAo5BzZxAXxNQMtvwQsVbwyuJE82cQmHy6gk5YQrFj2hpJbi5Enj4NVJCe6zwZxL2s5aRTFht8Vhs2XXgLebqt",
  "key2": "3FkV4XYmWRR5zqoCBUvZhNCMZoN7h8WME48XduYFbPRAHBkG9PnYvdE8DDUGbH12a5aN2JtM13DZvVj8E69ZXbfo",
  "key3": "4bsbur1yxRxTGsABE7eY9tdoM4KaAoKNt8atzwBKjWmdaWiNWi348rf1JD67Zy1WF1sMXFTfnA7UQcmFUvnJQLP1",
  "key4": "4bVrhYWQ7ecePXJ6hbg6Kju2Gq7NzJ9rLqqABS8Yo4AKXwSx8ygYwGKehXTF6N28LkU7JgXygS3HkY7JPivkuCMa",
  "key5": "3jMxtBecST3JXjB71tRkh95s1QcNN71ZF3XpCNw88zuDJMcxnsz45x8kpLo58qNQ3n2ShtyscWypd3scpPwGpSx3",
  "key6": "zdnxaJHnKnNn5UXpNxSAX76BmVWFmza9jeQBNV4WxwAtD6XNFje7yLfC7X8cVDgsw2K62mo9FYaATVN56bKYvLy",
  "key7": "5SrD8WHKLYZuHuDU6LpsV2iQwvEzaAuvfccCYmvpvyXkZ8MdNUuAtLE5QfevmtQtPATZ7ExF3wYWUs2Cpu7MrbgF",
  "key8": "5gEjTpwX1iSUkDXg9iw2pz6Hoy5cRYKngWQUCo4ndeJjcCnFB3F1ddq9MsVy4zKK5dkmEAvxwtB9QPLFM5jGSfUV",
  "key9": "5Lenz7w5bNKh7b7WP1fiT78B1uwxNd33UijjGYxJdgerXZpqHKgYoEyth4Ut4Fn5zfDsWZCwCADCTpnRSrUduGaE",
  "key10": "222ffC4EYpgF2KFiDzYyGXQJA5rWpADiivHQi5CC5kJNu6B3Dc6vsDnutk4xjY2bgeWL1uwXxqMtBYbPJwWAhiuZ",
  "key11": "54BjV3opoQQ6jNmD6SahZM6DyGxrqsZyw9TeoTNiZe8GRNCi65VzxfSWaebevt5myCMvBDo89niNXHggAp2vKz2E",
  "key12": "2gWDAeAEBm8qqcTdC7Di56HDyfbPwfA9qk1tmuHjpnp2zpi4VRPM4huqkS7gpgLXUGdnQEEoBszWhRjibwhaE3VH",
  "key13": "66EUJRw4TUkS56g8KfMLJnT6wvr2HSQtQDqQCSHmerkeRQ1SCHCAfVuwi6WCMyHkbjuN766DHFamtnv6vB8URc2m",
  "key14": "PJoaWxM4Wy7bK4Y2snDMmtG1huamjAy7LbB2pWSvjN5KTo7LpmHvCfMGgnDEyrbnjC4GvMXGd6rHL8hRB2awDkY",
  "key15": "3CgDMx7kZXKBZ56GiG4Vfd7RZvHjCxp4YEiSpi5JjBXp86hhRWUkyNyUZjwNGScih4ksueFhiBSZsRsrposhJP7V",
  "key16": "51nBuZLtAPdDVntuKApnZ3Ae1zrt3VeZmmFFsZk8zsvGgm3XMVo5wfRbiYekXEDcoHCPBq1BJaAMZtCh8Zf46Cf8",
  "key17": "2CM5rBknu1T9npupXv7iQSeVhzLSrQUeqWkR1qTHWyM1sYZVg3PRx8zAwzmeyVoUcdE9BgtaRrMkVAtWhCzxjTGZ",
  "key18": "35SRJhS2HiCPTpPhZyyiaBhGmPBAmg1zUnHrGjTFV2nrLPMAA32m9XNZcEJcAQrWizH8cdaaUU5pqGfDSDajaSPm",
  "key19": "5FR5NpK8JFU7iYuWwLEibVDMd5wEWYuys95T62yGc1kq5jPvu5c99nzWR8ta3WQTWamLC7ssZ8eqWn1eRfT2cEXo",
  "key20": "EsR4m4PZTGSzdf9rQfYcZbyfsEWhbHsM7Dzf11iQXnHTEcRBsKrqrXBLoqEN4YVkdiLTdVehRhH1ACu9xA44yGH",
  "key21": "Cnnuh4C19Swpo6RP7uiUXeuzoWYFon61bQLHqxSQV2iSiua1CAcWToT31JdMVLWngDfm4eZCoMmhEiE8n2tx9aL",
  "key22": "2q2j4ftaz14VEGqdbUxD7C57WugpzcFiy3riGrbLinHtCe8gaYZ6Qo1uJYkBusCN1ieM2BjqfkHjU4f6hdUTo5gP",
  "key23": "2AGWtT291ZjbVa43m4HKUWhZdZ8SRxejNaZ4QNkwwWVQab8iCfj1pi93f1MV3eFHrpHadgpMbzVump9gWV2mPXwh",
  "key24": "2B4dR9KHX89Wu4Xe56FrqMLKiEwgGpWoSjZDsjdWTSVjPVmSuMeHv2i6SbdzwridLux6xf5ceaTgEH5dUktpYBAd",
  "key25": "3ync3tdFEQP3Nnxf6hKfRtqjnYyMSc2jLwo2A8R9EWcv8BE4S83fTNbX1xRNHsxY1zcazyrTiCq8cSgUtFGGLbbh",
  "key26": "3DBTJrjENf98fAkmPCCiKmy3pntDE1jvHbg3rkPXdo93xUxxNj7vkRJCdv6jiZ6iPpFXppJTL1NUMBAoZzyuD6Eu",
  "key27": "3CoqRj9LFTME4Qx2A6xexKcdxrTyUamseF1zcPK6DfnGhURv16Kj12Bh4nAnQmf5wJ3c7im6aVVqxLY23jaxtv5r",
  "key28": "v8fGiKTpL8K81a1o8mq4Y8GoqrLp6eHz4ZhMeRrBQ6YvXfJr8J6CHMa5sWiHgfujJch9CE7M9M8aYdNvEJx6LJ4",
  "key29": "3Mnsb6ZUo5KLCEFfTCWjAHJZFY6x3LUT592mHCXH9kxvA3ULqNnX2dpbMyqcePdxCU488WjbJLFsptKm1jRMvV3y",
  "key30": "2SNpbXqZHT6DTpBMkm9zpL5pqZgdA11bHENm9hjRUmJpD6fdM3hQQdfgBUav3GZfytaPtiZhHwcG8fEK6HYf3WLe",
  "key31": "3bS4UVJaArxQkc8JcQTGb1Lf6ahJKtXquPTNjvqSNDbe3gn4iqhrXmUt2HdYVKKCB1MuJGzbui5BGCGBVsNaswk6",
  "key32": "ns7wqQju8PSGHEfekaZ1nneyYu2WPKQ8SGkdfZ4X1WLYRcxbLmQ6BuV4BKgSb46MGVvCowRCjqPSse6XEYTL478",
  "key33": "3eSY9vynHnbf8YYxmpj7WRQ4DxyZfWCidVn6htA8g9YUzWRPFWKvsKcA8eJ75ucJaXUz66twyyt4ZEMAXKwH4viM",
  "key34": "4K9M4eQ4hXzcRJbNbFXTF6XPvfh86BbMpXefcYmoigrsceYZN5gsALiNs3omGRXFU1gRaJCdTX173TCzYjGKXaiN",
  "key35": "5GiMtmB9XwJrwdy8Vst2qVi6BNSaHStvAxhM7FjrfJtm4omQjDkQB5qnPuMNxrAi5VVJtqUogZqAJcaT6EhMWLb5",
  "key36": "5JWn8hi1hsfnCyycqiw5MBFvNeLkswr8CjLsEdarte4SygbSee6mrpxzkL4wVRcMDct8XR8RuPkemfQDT73uvDeF",
  "key37": "4kc1QAUdiXiYq5TT8twZpp5Rw89ioAu7dMQvtUXawmHbFizBePjFc4nFWwcYLJUskxmbqesbVU3K1SWcUu2xcyAE",
  "key38": "3FAYV59Vgc5LfmuJwrLDNaRoovUe84WQQEEhx5gChbzzDcxaUU7qSWP686kQLGZgQL5t9RurV9g5svvzDCgqJXEy",
  "key39": "XRfHECEEcUK6hKkFaf4F8R1bd6KoyKviUcEytCj9kVFCEvWfsDGpDwZCcWwzLNAt4H9qs8A925BnLiJrCbvKnEd",
  "key40": "2cdmAQSK6KoYXW1uBBcynWaszdkoZtgDFcYRLG8W5uDWhaVzMAfKrTaqzN4doREW9jYJPyURqU67JYxUsPz9Re7s",
  "key41": "5fiTEeUpNuBY8jjMrMZbQh7Xic8YRDvHbBwc29JazciGKQ3tpLWRS6D7fv5tcJJoDG7jepNTEsYgxVsYChDFpaN5",
  "key42": "2Z6c9isrR1J7pkFA17DWADsZgs3qhuDYVYK6272dmtMwJcmu5Td7ZUfxEtL4dmFMtu56rocRFs9jXxM8JRGKKXM6",
  "key43": "4XN7DEk8Jxy9WH8gsqMtx3fUpXcoqDABEc62UBGGJ8vFvTNgqnT2CG3QhFNriBXcwxbrC2CH9wNsSk15kbam8gUa",
  "key44": "4Ge5h3CmE87AHDNycDDKABixX6A1hZvtFHxhifrcrnjTjaRtUtipig2jifGBam32oBSAmT5LnQXFPSCsyhkqizrZ"
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
