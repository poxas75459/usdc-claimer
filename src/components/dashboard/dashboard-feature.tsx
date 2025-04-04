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
    "2MvdnEJbX8twd11teNzscLzoK5LyGtoyUKgKNnWb4ZzkqFNDizqV1XHkgXsCdipiDepELjuk42cRCH4Np7cgo39c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3arFXGYEhLHkotfjJdLAP98RBj6CzYGBXSgpLhy71EjLQxMZFbqpV3mHExHKeteBFGzgnt5tDEmAKN7teHf4Nwua",
  "key1": "2xRWmvLDVCjitoZpBJEVK4vdTNP42YGvzBnrxV94Ss7sJXA5ZZ5Y4L526YftxwASXzivrKhbUVk5ZBTcoB3FnGM2",
  "key2": "4eWNSivpkCv5kgJESXvA69mYEKS7thzfvwCYSWBMvPY8Wuzmu2LFPjbCRJEA86VGFFD32SPiU3KPuoMgSNo2FZJW",
  "key3": "418WJsSNxRFYCe7o3ZyN2z3YRc6ERwEU18RgHk4zMCjQdXTxLF1xtnhhqsRGG5FSsDgAGifoBSz4dXynqGXU8epg",
  "key4": "2dKLzoV4zS9Fzw8f2TnsdNW8YNRoCvZhM5Xo5brBSkATSMTrYrwFW9CGRU57JtSq5NreBa5vJsUsJ2jS7afgJJYx",
  "key5": "41Z4QqnQPh6SE8HhjqbXjS1JdKMbgJgLUvJZTVvNqQLoSiyV6pPVA48RvVFyXdETYMckGQpxZVf8u7JshJvuiNZR",
  "key6": "mX91AQBAazRRm4vRBpKdK7r3M33hAtBNM1CyJtUA6KSR2HjZw7PDASUeW4uY7MFy84ctQDC4EM3hySsu4q7xB4Q",
  "key7": "4vjyqcRpTFThHy7d54TuUaNAvBbMXfJ4irZ8QhVeMkBE6sUxpDP8V4ddKQYwxDQgp8MPiz1K1HNs34u5GqHJg8xV",
  "key8": "3nZoFrUoYn91k6rejg4ntpAdLveVmEnqeVZm8gqgZajy125vzALYzLjPcwfQmKLDJEcMFjra1TTzU9uQUMwuysfq",
  "key9": "3BhHmAunZvRT1aXK4mdw96CVGp2gPy2VArg86AQNfd41amnDecsfpfvzd2YMftwu9immeS5cG2maSpW7LQ6Y195B",
  "key10": "5duMqAdpGo1ohvuFiquG33o4S4ZTVupW8Wsh6WBTk14JPW9XHK7gh6u2Kzk8YQEK6HpeZSYiLzZr691GVYdtxcVL",
  "key11": "2Ta4GUCe8XqCSKtj3tyzcBUPSVkoTcDXw9xgCVJMxe26fdNXfJ6f56vBKhnzuKUcg6yiqSDGPuDbcCQMbND7ipnJ",
  "key12": "5TS6AehGoF5gDDBkBE6zuKWLBhdeVRyvRm6x2hNKHxxxifNGgSQrw4nP5UK7oXDu5UPzFfM8epfaCsQ1sycvzJxq",
  "key13": "2BUddxjfjpYRhYkPsxKxRM5tAHUeNJ63p1kneEQuo8prqVkBwikxSXJKoPzTRjbB3k95LDM62skAhmBDKNeXeLfP",
  "key14": "4Zr32h5tisZCVLiFDLYms9CkDRoZg5Gi8Bg2BQgyNZYdKsE6hB6wRmFwUVzX3JNoyUtWAu6a6EBzEnJNGeYGoWKf",
  "key15": "FjLQ4qJkw9MWAcTupseqHPwsXQvrPCW2v7Wj6TfVS7EKL18tMTJth7bpeVjmUva7erddhW93TbGHzTxPZvpz4oZ",
  "key16": "1jpgqYR7qses6fQaWXL2bBzjWaUmzMKLbAPyXbzLuBUorUXR92mPbDAMnDuo9mZgUok4ri7dDRG2aheYM7ngoRr",
  "key17": "5WXeqWFAng9eqgMXYyZPTLvFQG9vkPtwHHfKWNrEzEvSgKTjvVq8HEoF833xAEx2DaVVpdfvziZzhr7BdvPQ7YTz",
  "key18": "3ERj9qAxx66tR9iJpXCuitWj7Cx8j2JWipUVAbY8wAWX5T3EEYyYvGGQZmg8C4akXEYcYDyXQq91bjAfjHQLiggz",
  "key19": "CSNpzVGty1JBfaNbyDfsjkDK1qSi18kLELCBV9UuhUF2BcXYfGYTMJaFiVHjYMpDdSJxJoa1g6c63ytrPNU5WYu",
  "key20": "3SCCZg8GEsdedYCSZFv5cnALpWE24t4PHUSnJcdGiBBxYYRQ9dheWuEcUoaRE9F9s4RjpdyiDkWZ24koroa83trW",
  "key21": "24S2d7eyQXGFJiJhik5PZnhWpq8wNMUybnQysxmYspah3CCV9PNV5DrbhgByC4C2E4g1NC75DfdYicVYVaPH1vEE",
  "key22": "4dbS3kcWJqzbPK4CPzNEumKS7cege8yrRdRV6RzV5HgxQqyyRMwkAQjEsUVxrhLxGttxzEDJveUFsA4dAAsbsTLP",
  "key23": "3kgMjoux1juNBhvbgXDa1SGLhXpitpXWpHYEZz27Nv63oCn9QN5UZAUvRCte4dtqrRtQcGCh97asz56ezjE9TMUY",
  "key24": "eD5WVovuuGzdwiihcVeoR5UPDSSU4TB9SzYmBr4kQ4P46QeWAt98Xa2EVksCLWtFrbXjjdJiVc24eqiJko8S4xx",
  "key25": "4ZVWc5WGkXqCzNFomTnW1JqxZ4XXkjoqDbdVr29ZJGuhjaq1Y5C9Lxp7PBRSxuCR1s6m4hp8Gsa4Mw4fy5FTHZdm",
  "key26": "ueCnXWgPkPkjEpmhXjS3tUKFYEoPtqAmo8U1Ch6hHPJEteo8zLfexbsdKo5hqtKzUgBgbYt8dhveAHu9k5p4WZJ",
  "key27": "22yaP7sGZfxE8NfRXze9PvTnzqirsxTQjig7Y2bMmYrNMMJGbMkCg1q3n2gPKmdDdLkNMRMZWyrV55dRgnXfJ94P",
  "key28": "2uhfkypfft95FKxhSFQvEfDos9BZbVNZummbFLb6YyHdgPaDPsNfdF4xVTtKYTaEMd9QMgLeaKoEF2TKze6W9K1T",
  "key29": "2smR7v2hvHAHMSc33obGPdTL63ZcwXucTFygCuN49sFQNueoxogGsgAVJZutNyQB1ahvvZGnrbXmzXwGLU41gUg",
  "key30": "2CNV7C26G7UFNhmmkydNr5hcxe4qeG8Z7MXhLuzq3NHTBSCFYZs86ejh5Zh17EYdGeGDMDFjYapUat7c1ahvNrvk",
  "key31": "3opZkmyzHZqNd5pHZq8RfTWm833Y4D9UyMBfYQY9mVX9wYDhrZT4xMyAtdkkueP3DqxrakmVqGacxZmbL9WsACEJ",
  "key32": "2jAd5rNg2vRL2gyafrjsB3C81ktPTdMLdtvJevv7mTNQSTvCrv1QcLoXcSpmomW1M665CoMkGTC4J4VbyGBVjz29",
  "key33": "3npQH863XWBTvxxxPYWj7hU67A52uAw88L315zNNEsvLyRdJNcP25ZTZoAmabwc1WRSJNr2o3rrioZS2g5P989vH",
  "key34": "5gki9m85TXUYzksTE1n47eh4WX5KQbmaVSkoT3mQyZGUZ6ewikHyowh8YUZfw4Skm7FhWYpLrWFXzFm6Yqt8Y7Vi",
  "key35": "5DQMbcVoz7XP4nFAqqj4Dp1anfXxWcw1PicjKPNw7V2S5ZJpLokbt1C9SgEsMKXZeP1rb9e8sibJNpraN6F71ZwQ",
  "key36": "5qpKXm4nye2ogejVGZs8PRc1KYBVhy4GYQcnXxHgCjPUMj94EeAMNNdDvEhMMQXGwNvdbjzr3vXhZ2oS3pSP9JSu",
  "key37": "5gtnQZ5bx3swpHUncA5vKX2iWYQH1awMF3VhnnZHCM2QDpwKhBanCNC2DpCSPSysrmRcYQqPcXvx9Eo87LPKm1s7",
  "key38": "4Jw1qrZJ3dw4j52jhW4LHcUK7sCh7E4EsN58sipj5cxhAAjbwKH7PqwfwPC1RM8G6w3BgGhHjCkHvLV8Hv15PaNf",
  "key39": "2icw4hMdmjmRN56Utdeusz2DAYHyNPYh9rLDjoCbdkFwb8kFiPVbG9aUXoS8tk9anWYe5oMBVxNXt83YSCcFFcYn",
  "key40": "4uUrugBuEJAoKoSR21J6UK9RnWAU84ZdTXeDvxwCkUSz9NWNXKqF4r5rZT6BsS3wrpoLYVf3S5PtrB8FgVWJjXiU",
  "key41": "52Vsvm4FPK4gQTVKdNHKs7LQ7sxWY6FRWi64yp3Z25MEYpdrwJeMzQrsjbrzwQEaQv7B15R5vH168VK57KLyDURc",
  "key42": "4nE2FHYqkqQVTmtMUji7H76xLMTh5YsmWG5UQu7BJJhowdXKzVmoFaSwXnAcLrpPigfqxobdJ8y6AfmYvb1q6tNL",
  "key43": "4esZz7776VnXF8UWWFmVjbmVBfcCvEjWMgHwFmNNJ6v1WzsTSvZxws7WJ429ENzep7BG7Pugc1Dh5pvRFvLsywkP",
  "key44": "3MZ3fqdVbSqEChcUczezcco4GTF8Qrk4CD1ym7D5QPVWhAj8qjksvnthu1GnupHyjvrqRpxfyQeUc4Q4kyS3TuR8",
  "key45": "4hMhx4tgypXCUuJvG7EJypT6BujCH3rrTiQrPQqzgFYm3tErv9Jnk5o6Kd6LGQAvVQMq8G9haW5j3Pq5yJ6XZ2bh",
  "key46": "49WhfmqhsTcnTn9aWTovV2L7s184oAs73EwwFHXjMHm4TRHoHTRkD5MdRySj2yYKzD7bsESeHsmvLqapgBoUXQmC",
  "key47": "48zsDtAkz2Acev9YpJMWup6CCn8ji4XQJ3aZ3hPi7ekLkU6cZqY4eqHG4EUiFiWEnBSu8yvVbujHD6nJ6jGqq9HQ"
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
