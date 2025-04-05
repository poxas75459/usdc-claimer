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
    "5KRpZRGjFad2Pagjv9XuLukaWJC2zyXiHK4GSSWuAnHDeMs39MT8PdTnKBGQ2LECg14Gpif2UhmYq8UKpLuj116v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WSvtSPbwbiK6SZ2CqyfdcazoUEAeKk4YzAXmoDdxxKph194xKJdVxsmrWMTx5f1ZYrjfdFtCv1NQd42QSTrhecM",
  "key1": "56xSyXADgEmg5QFtfxEmxbQkZfbP1mSP34VHoLpU2BoYyuY9ELkEUx36tn6a7cvPPCbBJeutFcmsfkkjj3mmStiD",
  "key2": "3M5mBqwwMHd5UM82xX7QcbnnW9icQd9eKR9zMcty2RnDvvKz9fuApm3V1DNCNUvcMMHg37wZoXK9EW8FeKM5HRuR",
  "key3": "4AHpXDjXkUbkZReeAQBHwPaiPyS4Y4m7oteQhBvPRb8KgqEMEbBzgXcrDbb5WNgjasJ5V6JqBJW9BTTMy1yQkxRB",
  "key4": "559zkUUUFgaPM9ezK1TjPGA8yG8ywsS8thxj8V1QBvUxMrbAdV4QPBBE6KK6uKip46jMC3nQpMu3imxXUpxiKFHt",
  "key5": "z3ryE229yF9B34M9FLHJqC3K39stF5MYMW8YeWNtUBNibn6HUs5o3FWmR1nS3PaYr4m1BGBJ4AmWyrWwf2VZqNS",
  "key6": "2gCTon9ev5uuWinzFzE17rSUa3CSjfAAugXgWMj3MgCccEkfKH2mMteDm8MJGJ48AZSGtrgn1DkH3WwihXQuJjZp",
  "key7": "4et2TY5STzfpEiE6x3oW23KFKLBJMAPqHTdtgfcKtUmmdY5e596Bw7rKMsgUHLJhbYJAnyrawBUJmAZ9LhaBUhiC",
  "key8": "Z2jmDE6XoXEbSBGcCZMCeaYL9UXwCQDQJPPg81UBowV5GeWZaZFgBodFh1MziCsJ2jc62vbzm9SqMN1vp8iaC6P",
  "key9": "5ZyjJeawvPbstxhsHdPCQGMmVSSWQk3QRwN2qkizN3YYQfqm8kShRxm9KxQfNaQixX53RSG2JAAVFF3ZvUrU1Muc",
  "key10": "RWHeuuYf7NgfvYfXsUoDrGXgUdg6XszJCsT5NZXhNn4CPaaNFrWZP3QJXmYxY1qenPzA5oeZCmCyGhtjz7zYGTs",
  "key11": "3SkxzKExunLP4X83ZRrkCP1AHG5i2ecrjjzsWFPgSHNyvQweVmaeWEWPr5igg8BJsUs9H5q4RjHrKpoqZyxeqinb",
  "key12": "EVBjD3n9S9NLv4YNuVxdnKPEGUepBEYZynrM74eRtNSTMaNQRdPRsii5qdKf6pEwbwjG71Kr4BxQ1SDBXd4oyRU",
  "key13": "3XKZ8nicc7ZC4crpjWPQrmvkcqEhew8fCtAKpEBUmJSk1h2SDsQVuHbnv8LUAiZfgiuNuesyTEsLGWvYPCbY9z6q",
  "key14": "2g6u6BTyhZcFbrfyPrCE7vDfQ2Wx6qD7LuzjxA4rs9HgpynWXPMyTJy7bLqRprjLezj5Er9PnihFRdRRGAD9SBo4",
  "key15": "2pcaDfSR1J9nAWivaq3hHxFLa3puzYDCUuam6Y9N1YshWWPao5n71uBsy9VvibLqQjxWNJ4JMTaU6bBaTyrF6Jpi",
  "key16": "3DE1zvqsCVgCMvm8kakf22ATUs2EsESBJKhhSVAQUeW3rdPEGAcJskBWSHmepAX7u9SfivrKJqL16eDZViCYqHLZ",
  "key17": "pAUN7NkaWEeaYUEfDFgPjrrTiJwnEAozYW5K1GvSG8LSJehLYHBSeVH5mVtnnR27gMq22VuRSFNBssxZ7x9E9mX",
  "key18": "2sPTt9xSJ1wGhnsrJKRUS3KxPQbmuntjMjdykT3cdHrAed42j6gkbs9HuYeqcL9v8SWkuveLaijXmW9fvrzbb7bV",
  "key19": "4X8XRomRMRGhi64btpkuE6NYZn1rHC8yU8tRoZny92xHn3TGfCefrKxbamg8mEsUKTT5qr25qunTQskVpQNT9k3z",
  "key20": "4xCtvATGZ4otDFXmZo7bh9c9abxdZogKtbeQhWzbr7NVTifVpv57FLSn2BNMGcaoKC7dpbnwgGi1NWugPPndYzmG",
  "key21": "65quWHi5yFJq65gQF2VsXtDtsAyhnRo47hYTqFosU3f4m4TUNbcApdrdqAHjuz1vBu7kU3g8M2WBoZ98cwyxcEUX",
  "key22": "58FmUG3drYgrBX7jgB9bfJpVQWUjtDAfvNPNq3XVsBiobR1DYPETHK55bBXheEDNt5g59pfEJKUJU6eHiAbXDrPx",
  "key23": "ns9ckoA5PC961GTc9tm49Zg9CDrHrbGTx3LA1DsLCxw4VfwHraU1uZHc93jyNM86Sy2KUoPo2sPV4irUfT1kn19",
  "key24": "4Gj1trzurDCS7bqM6wTN93B3v3K2hLFadLFcFH6etjARE8gYYvwUUEvnxvcxpygpQc4HLWypd9b5LeuqK3j6njS1",
  "key25": "5qHQj3hwnP4eDnZ7bWxV19X2xbrXLdQj3Etu1H6yZheHu3wghxvtvPoa5EANtJPAorxvKEoRCxf55y6z3jBRqCwB",
  "key26": "4CVzotKdqQN3zN5GDm9XdNxztk8547MPSibUNxVLQyLB4oV25QEqckLX52JJ1FtL7MhccxBTB9F69V1begszJZ4C",
  "key27": "2fXVkWKfXUoR2YdGnuAi8KL58Xysu3cf1nPnsyUoExcFxkwmnw4C8YoiU4p8t6BhFAHYfJ4t5TqWnAj53MDdDjWr",
  "key28": "4fs6NVF1LQ58wXNNbnyejnqorM69s2bgEerk2VK5KEWufHynYe4dud2j7fz2YGfvPfuDP7gDz1QbahUoA1n8vYwr",
  "key29": "5au6iW5hKvqH6k4sLqSTdcFCxLY1niS1jT9H4Wg3ExUFfhU1cozqnrK92D9Fwimr2mHdEwVRbkfi6bZkzDQN1y2o",
  "key30": "4su7af27FxozcSpuM6StLn7iZtq1JFw4NsDGTewZmuuJ6LN44m2WMAuxg5nE2aQ1SJi5DB4jyFxCJDtnL1y87gYm",
  "key31": "2WBy3ZMQSVvgAb2PF4T4Ht3R4qJReB2afFqfEZc6sxxJcmJ8nRKk4ysQfvqcAKMHwasCNW3jfFettfBfwxYHky7Y",
  "key32": "3CEtmidNrimMY8RrbbWjVSJEc8bwBXG7YSJHnkSc3ERG52UvhbLFZwdrtFSU8io46qrDJm3kPknYvxeEG3pzzQFN",
  "key33": "27hYkYeP61SLiTi9pEotNMPAtckZWJqf6hfEUViPRc4doXbixD71SoERPFvBTi4UW3V9XU6i9NZtJtPparGyzV3k",
  "key34": "QmBXBXbHtRyYmkaVzpVVAxvRbttb8MwkXcQ9baq6q4RESQS3YcPLgfzfGgw1Vn4dnEJMbbkqmmPAW6SeXk1eRhP",
  "key35": "2TQhH5RMiXmneAEHmabc1K1cStDoz2S6Ax4u1EVGfg9pdRo1ZQEXjDF5euuAQadtnvtxdoDAyw7TDK1j7vybb7EU",
  "key36": "4a6J4uWioZHaXfnLzJAtxUYU2KXFzEKntk6Tj4Af9NdYmT454hURToyMG4c4bYyGFfpgd5iWhxJ6cDKWseYKUcm3",
  "key37": "4bisNENTm9qxAqrkvLGkhUuHAWqgy6AyVuyEe6S4g6nybV7xpG8ssbwyuMtM9LSjyZcydG4BuNh9SSkc4hHbsZSj",
  "key38": "3Sw9dVz39XGVUNoYSkhao9HkZetps47cTr6kDJWXCdzb1A6i8eq1p7yvmhtKqkuKmHqLuwrkxKk6UiNLZy4bdydz",
  "key39": "vDZZFkGcQ9Pb9BSosbRLRZgkDcmvpSXKLqHw7KNSLWUHUCtLwZXfaSKRcoyAARaWLJtLf7NSDiDmLzJg9FnfjoP",
  "key40": "4BKckEmGxVGnnMTVZS6uEJs1RTSC13rWCvFoVXmid3sx1k3DaLpLHRrzJC4H2moMSp2GgALuB7Ldqq99JgSFiRxY",
  "key41": "UcavCcd5epQNU7AFNbm2RNym9CoPnjKjiJcGfPcvYLDwMh6q1GT5WCoenv5U3NUpHiTaiXEUbzPXfRCzM4rjAK7",
  "key42": "2KyCf4quLfR8DydzLW3wRm73XYMBiyYz7udUrfTNofSV5KiKXTiFUuYSArj4BzDdvgpx8wiKc5A6LFaKMmsC3RAD",
  "key43": "aqNKWtNwTucCH8h5UynhLM795bmAE8mncSSMWsN7cwEPBVwJbSxADoQqoL8jVaXuHP185NFv4tkpDVq6yT2nKSu",
  "key44": "3N7F31FLuD7ZzsYQs5qA64YxT7ehTbXZF83HcKR4uEcudWy4mZj42KzJEgKNALhWuxFqekvm5DTD4erwtVSA16bB",
  "key45": "2rhMJdCPYnmJnuwgTPMYV1EeBqn3fVR913tTk7b85X22LhBSViCHG254Vad5ndgSk1Lw9AwrCzkDhCnGeBQraxWM",
  "key46": "3HUz4GNyznxch6VmvQDjEnhYt8hqC7txSxuJwnMtRw1KKkXiH8RW33LCgE5DgyDk1tizbajfCnadgW18yixH1ftT",
  "key47": "DkCmGrkKGQefhavs3Ewt9kNwW6DwqByW1vWBaauCFXnKiAHZjDvpsiSGiZseJgErG4e6PJweQcDDS2e6VA3S52T",
  "key48": "48tjP9JRSxUHxFM5LxHz8cvobEGiHofiUSuFWDry9RhHnuCBYt1kFA3hmYCYiYTnakemkH8X6EpuSHA7QZkPEWPs"
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
