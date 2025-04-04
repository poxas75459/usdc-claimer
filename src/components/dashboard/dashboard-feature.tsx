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
    "5GLWsgC5yfqFspHz4D9vJjjuAmJvbh8HUYqsSpwWqRx4yNe37Mka8stETWjuw2Lbp7KqqXDJy3mmJC2MLBRLRoFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K9C9LvLdMHvgWd3iZs6ZENUkxUYp3YAnEmbCeGEMQDc4YTWs1U737AhABiG9osL3wqDTkMsDwxSittZzdyRNLQt",
  "key1": "ysNx9ubHzUJcVTKAhZPa7Nj4MoMZYDBmdJ85pY3LLnpLps7HryVVdcp9MJ27QNgKbpY4npsmjdmjy5pvRi5JJ6P",
  "key2": "tnaHErMnFSTRpMSEw3szDtP5hCVkGK11P6FwtyTXW4yqYQRggJsJz5bAs1tqjgnKyJVdoQtn8GL7Zjt29yUSdDB",
  "key3": "5T6rzZ2xLA9PmK1n2gmMqVoycNSM4ELxcftXMgNH6HKPj1JQxDWys1M1n8vf8c5ht7P5Ccy2eCyJhVCEao85cNi5",
  "key4": "7tHYRdREHRY9ZpdMU8z5wWfBnXrqezd4AcuPpFyyPeaYZkqiwP7wMJJBL3sanHpEj7Kf3zuZnC16R5LP4rCudMj",
  "key5": "38TzRWMxYdkbaZrmAbGFiMmXifbfghbiKpxPiLYpMKnNrxHCD1kFLER1CaSdzBUyCzRQJgwcAjZa7VyvRZdcXsjN",
  "key6": "2qkT9MoyYVYTMjtQHQbQbwx4ampXN2UcskDmHdQTwJwph8zRXvVyT523FSWbNgYghTxB1zTE7wNGx9ohtkFCR4mV",
  "key7": "4a5VbKnhtNLWxVyk7tDpT2REM6jsLE4y7CP44pp7CeqbACBsvbXF3TN875RmyUrWiS37hR1fxcDnWrZ1Bi31jf2R",
  "key8": "2x8rvtHmW7VUY6G2xgtYv4wRnZctKnAizqWHAfoYv8meknaxbLtdcfX9FYUvhJRzbTWPvDGM7n2CiuyQSCMJFstQ",
  "key9": "5hhUhKDprt5SEz1qe8B3Xj6m3GJDWcE8xmwMTYKFv76xFvwWz3AegXtLq4BgRgUvh3G6Aas3wnkKU486LjdrfEut",
  "key10": "pPhAJhbfXCGaoX4LCJGm9Kp4KA91cqdBbnkFQkrPcH1rRkEVGARWJB1oEgFWf4eHfk626pmAS4b6zgtShXmSAuG",
  "key11": "5vs8WEdXM6bZcGZDQNxQSzmPKxadHKXkFVcPpLBVJ1xcMUctUfHGN8etJQPKBChTFbbPmG5gJCEX775y44CLsCLv",
  "key12": "3SvDmT5KzSA5UiQV9UnFZQ1K6KchwrYmSPNP8xkip2Ui8YAYVA9ScKvARYGbvxagUXV5GwGMqcYAnh37xZhZxs8b",
  "key13": "2NZcbpUdryTirhQNX5wMfvD1LLT317HYhFjSNrWtqq5DXRpWgQ9f6b7zhpMxJyAed4rbCuQU5mrH2i7A3Cgsfunp",
  "key14": "2P9Q8jHZxFnk8tnZdnowdcNvuPys7vmjArDrph61wvZN1uztSSQhZRZmVkTbEf224vBCU7cws7Qq6cBLXS85NyEY",
  "key15": "2v8Awrx9WaWcqTREMfi7mDQBve3czGofn3Z8qetw7CBRPbjhFMDK7vpsqUQtp3rNaVeJLengPEmwv6s3fNh3ZTtp",
  "key16": "gkmx7b7CkWCA6AHaPzPorNwWgDWpXiqW1saAevisgWkcjDGmpHEvi4AwCDy2TfPiZN3C93zPpAEFhZTUVMFqS6t",
  "key17": "2VQB6yzcLfqeLaW28ACKcQC37itMNAnKJRAbviPeBiqyFXZx3vCDBncUS2Qf5jRfNLNAd4E9rVTyfheovrjmD2KM",
  "key18": "2Wpbk6nEfetQUEDkBgFMgAUqNB3oyyAVaJQw4DBABVCJisReTKdLktr4KqTBtidiZ2RLdRyW18db6mDgDhXnv1iN",
  "key19": "SX5FxVa1rin8vupHdLHAYT2ok39Zw6kxFrBhzFzu1WmG7LVVSFbXQwL7H6TvM7TKMNyXw1cBETiWzdJZXSKpb1n",
  "key20": "TBM33ybD62PiboD7KKAcQzJLfqYFsXxGtsBD72JdjJvBDjR98ca5ZrAJgv1vyq8bSm73WdFLZmEgExuK62pptKs",
  "key21": "3EHEpZcBJoeqUxPhuwswiUkVdvD45n2usjRQPFXGUHcjXrg9eUhiDD5dPEueS2Q1d8qpnVR6h9NNJEVnEwcAvmjv",
  "key22": "5Hfytb8htRcyieDBV4cBmBNuGGUTF2j2NaGzxYcKRfC2wTrhajE65G3HucKUnog8x3MBqJq7YfwRNrTcBdYfPvDK",
  "key23": "2j4qVrrQsF3Ce3AwphpoBdqZM5iNqki98yZdVE8c1X267x6iS6Nszrn5JkRkp92auEfCYtxQHZ9iY2JUuvVQEz4P",
  "key24": "4kM2K5sNfftai4c8chVMm4NNvQmwR5njAmMrMcci1DxQ8nM83NDdZMvHAadmkgD1zTMx7RpZ45SjsnMSGL7jFHKQ",
  "key25": "4byB3MrPRWqNg381tD1hSdUFjFRvbapxuHNmXzQwWPbWHcMWX6N9s3WFTuHkmvpdsViUfUEjqt7Sj15f71xQ2p4U",
  "key26": "5HF48VPAnE3sn4hoR1eEyEE5reWG8dmSmBeZBwajn29Ja2vAQrWRNEq3R4jtnAjCsVhxfJ3KwbV9sujavfxw8dAa",
  "key27": "61KGwhi3baY6sLnMh8id3vLM3N4uRZS46gHZVWJuSSuFvwd9F8QfFQp9PF5fwg8bLtkQQri6jifWSHjtGBSD4qWu",
  "key28": "s11Jm6JxGLcayLzoaEsCqrgkHPF9MJRw1ep5hvS4AMpDoe1D1ULbMCJyGzBVfS84cwDaosJgVJM2CZkWch7GWd2",
  "key29": "rcroVHwxUqSFxHp1vjNX7yg3RXNUUsmHT9KLCsKbcUoW6Emk22XAMnfh28SSUqhMEYo7PFreiXGrK9SdN3wVvJb",
  "key30": "5AG71EpiVzSQqAYpsqF9MwfM1W6NYoPbQMWbv6TdqyfBXPe8xpzEdMGMC53wsvATu24xGEoYQFdPWEpu1RePCcaz",
  "key31": "2rTuzrkGbSVBTVZbMmJdSFu25CruC4Db3YV3FwxyhoNuP9R8P1K9yeQ1uS6q4Bs2yqJfuzAXQq4BpvBkzSQd6cy6",
  "key32": "2nfaFUk2FqnWBRhrprs6KV13PYSD5ijw5qreC9qSEL8wPa9ynLuQW1xstxJpiMtiArXL1CiRd2mVpE1VEsPAjYr6",
  "key33": "4pa5E99hfx5E2SiK8CdxPwn4n3kKNyWhbhLXsz2gZNazDYnGtRwi4iCVNKu8fVE7w75fBoY4LueKA3DE8cKA43qw",
  "key34": "44CCP2dD1aXAEN25QQ63SvbEBxEa3gfJ1xE4wxEMAEyBrEeNXfy7WSaBjSHwtFA2yM7KKTuBYLhDapeQxjaZPUfd",
  "key35": "33B8krbmLDPj2VWw8AKqxChfiQziJM6UdRcGV9SpQSH7JqD2Ni2LE4nEtfNMHj7mCoh9Dffz4b1G278fq9SrJkbA",
  "key36": "3pgZAU4EK9fWuQ9mxe6BNCjiELWWkwNDkyxnEVuEuooxQ76NcfabYZrFuRxKLhhoE3wA8LP5Y73sndXb6WnR6Mbs",
  "key37": "4dHHL2nnyYJ63hTDGzacftoyNFqGpQ5ZShxKxERYhs4JBFs6N1RUrfxmjEWXUyToN9R57QTpzaKLxvHNWeN8WDJj",
  "key38": "WbgW2CkpQksoB8G9NUfhpAVxmG4cQeLVQXPEuQcr6HngLbkbbkKDaeikqNsoQa6vSRvSwKasMcUxDHqiyY6HUuW",
  "key39": "3BLg3HkrX1dAddG7Ez1AofSbtvodc6KNa2jXjRkzvizUYrEJxkFUpDicR6NE5fbV6GgHeVbgK7awJ4ujLPYqSaT5",
  "key40": "5pwo9esCRKE5MhunR94GJRg4N6tgPM2t6fMDirrmy9EaaysrAGbrsQh2eL3qC5w63VBz4As4arWcEnam9MvaruWD",
  "key41": "5gvf3rgj4zZnigSQvhWAKSbSJWWVSHzhQEtaAySx6am9QHJtiYhoTFeSAkKa1EWAscPhieNxGXFevxwkCYwM73Uj",
  "key42": "5agsfrtrSUEaFkF1Bq6tM7q8YRnAdEGMmxNED7BgbYtwcGARa7CwwnnKAnHvY26MBJFt363rYDRPBpUJrrMqhXfp",
  "key43": "5YB6DtT5a8Psp4tKMi5rbw8D6BPrTihWHHAUS4zFy5vrmaSATqiGo6BG7wzPjb3G3iAJamPfmgNuwY3tUFfV1HKF",
  "key44": "4iQ3xBKZNYA9mqrMeuU1Y5LUk4kRSDtRcZhcgn9DYvRrpkRubqifnWwnnDKViDkk8Yyrxrdpk4c5PKhLiHEaiho1",
  "key45": "ZhRo6KLYKawPne7sA9qzkNb17MN3BMfZQjzWcoTrB4tK4c3HY6JgK4wwBXijAKaomkyUvDer4RMTMp2cPvi5KkB",
  "key46": "37GqZMMgqjRem1tq199FcS387y4kn1g6AsfzvFenyydt9YiLPeJLxdMEULv7Jya4anTw7K55LmWNBBNcLYnVtJJg"
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
