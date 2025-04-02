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
    "5LRXktt9CkFAiFNduPDy2F6RWHM4zKfrGAd29SUevpQhyx4K6DjK4mdFxqEwL3boaY41VkNF2rd5mFzHZcXkLFpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uKSnPQxUXmHv2gQY3Vuh49P4ChKJs72pCuN66rGoUbP2FAqgveVL99r6qb4rH7bA43DRrWysKf9y4GWMKRhmmEY",
  "key1": "4d9kX2ApPVgTMEhvjgkDDgMgbKfd8CZtoZhXHQ9BLuKHr7MC4j9DxaesHsHfGQrL3S6zzsHtvgoyzadLAjw8xT8J",
  "key2": "4UddGtYRnppsLrqJpek9vXBELnZ4BSiCZrJxwCE2NUq7dfTz8CeX3yi5EXqdkuzzfNhVnP4XBev9qtr86MQtnuAf",
  "key3": "2oy3Yj6gd63HBHJLsU2zzhrBUc4kGVifxQ18h1YDd5RYTnoCx1DWq83MQyNtQBoZgCDKaWqQys6crUtzd9CNPzzq",
  "key4": "1DBjQpvrxjPLbQbm3wiVsCVpfVUcrjr3gZKg9y57doWsq3XwGpJPqsQgTNyM5sdrxyH8GtADNADQwfk6LcayWSt",
  "key5": "24g91ACGYnEHoPvyz9bgtvE8SxpKN6dH5JhcBQwuTC2qLeMY61iBwW9uqvEJ7PXmaxpS6TSdBK463b1bySrt24AF",
  "key6": "5sw3wBvSm9eEG9UfX97i2irut1s1L9iJu13ZpSYfimnM1tXLiousk5SShLX4WTTs7vQfkSN1gnZX1HYUVwhmmc6i",
  "key7": "4zUWJuPvmLx5NWTA8243hJ7fzMs1kVHmPBF11Tc7pTZEStGnG1VSoYEmAGrYE9Th6mfLMsKZKcctfXpaTjRCfT7X",
  "key8": "57yPdNUCNu7Ufxo82Sy4gog9qgndsFWgc4eV5mfZXUXE1aU3uQFizSpkYvEKn5gDpunYQjt41XUWfQBLrgC76KBo",
  "key9": "2xvcDs2d6KxNijp4gUZyoyjybmqigCF9RtURs2wuP45F8sDf2nXk3ZPcadtZU8EypBMQL6ttmef7LfqCQP8qaqQf",
  "key10": "5MWJCFxFK9RTqexgqeBUpX6wSKDQ7wJmqhGZnWtC24WDByvsnvYjQHTF6VUTMfKcaDnDLpfNDJzNXEJtw8dsoMi9",
  "key11": "51Q2Ppnv22PH7xHwT2Pi4w1xaFe3NXxXk7umYXYgMvF93XcJjKnRP6eyopq8p6cuAHWzXQzb7ntv6cAL1VUZJ1jQ",
  "key12": "3vdhCW6BCAc2LZj1oJejsdqY7ZPEChWscRh51hSdpjx8xnohtuTvHFJFiZgT5tHQpaMMmjnyk1zJWZpRtsmY1p1i",
  "key13": "5B4ueZs9mhac5VrHgVAtq3uPZbjByJ8eBs1Gbbf91gy8gfYzmBrLHiSv2VK2Z3nTJj3gncueotg8aQNWA4c3c9xv",
  "key14": "vH4SUJcjpJCiv4oNhejxqTKyUtyKXHfGNDaExzefoyVucAPeZc2njHrBKJc9nkRpVQo2QKxDr12GzXvfdbCSkQR",
  "key15": "wkgyb2qj1EvrX2cjwRQ8m15Y7YJeqjCLvWP5KaL5MJg2qJN8uobFPE7DASR7jMnqt1n1C9r7rPx1zmhzZAxdq1u",
  "key16": "5NSXhqzQjE2XypMH9gA4GK2KRxpXKLFoMT85bQoZxug2TXTW6M4JZmTxFT891cBkWftBDgTLBu9QK1QcTwGxU2Wr",
  "key17": "2YNa2GcXKK66v6cGrC3B6gGsK3Q7vnCaxaewPwvfPKBSLMirxbUHyn3X2X1KpxGo2qGegnAYqjeiEt7cwqy6Jkym",
  "key18": "3U2Tas5iHBJFQmPB9Fx2UCHcAfHfVdUjo57TSeDauvQwbyBXfR1mfhPgHKLoqnS7wupoPRy5WLrMRQzfcPHKgvmJ",
  "key19": "39cZBstVDnrmVSgeMioWMiGDdfyK6oa6ovQbW3HzjngNbWSYFipHQU44kFLeEWocSXbboa2RAaGRUSjtPxRdhmi2",
  "key20": "3LuCErqRWHnMWx4sKQCnhJoUBRvvYGyJ5nb8Uu7VPCcQRWJLWYQwDigqEENCCeXsYRxBd3U1xknpmUfzX7MDBFea",
  "key21": "3pdugsB8w3ELerMf3bwRaLZo5sHdbAcyCGCnec8QtkrZyK2hT11aFkmjryRiVGe5haE2Go5dFirX3r36xgMmpL1s",
  "key22": "63KLLFtbQRLeDwuhdGxKfg2iVjnHRy6vyadqVM97hWp5sLUv9sQtpeta2RZ8zH2U1gCZGALGWWFJniBqbbWsXBLk",
  "key23": "bi8GzbkFH8NEH7uody5KgseRZwvdKr1pzs7gMdcs3Lw2u9i9EvnuhbGTJvQoJcc7UyXsPAyDa3aXg6f2AxgDfff",
  "key24": "4FbA5wpwbgy7iEHo2Lio7tL3h64yivQWt5gS5diGQWbfJgbLoRrdpk4Fn1mwYEKa3XDqUBPnDpgfEA1wMK7Vff35",
  "key25": "49rPfPzEKyUiezNfehXPc35gkrX1HT1nXtQ4HLPaG7jSzTusvRBiDCVBvUC3iKUmoryxhkXnn5YESWP3pJLsD2zE",
  "key26": "5TaUhXL1rUvnjrt1NoHSZ1kafA78m5TnyWtcovLjtqAfRzYq9FX9MA952sW8R576oDGCvjTT8AAYKGTkboDDMZMm",
  "key27": "3b7YHnsBL2SewZJapvdUi1Cy3oTZAQajc1nQoo1bAJXrSRNomCkzPJA4JeBc5GN1aNiNg4XQ3d6GmKNgc1PqhwGc",
  "key28": "5k1imw8qizoJW9BEc3dyMNjHxWbL656YJR6thWwk8x1T6cg9gmfdq4Hs8LcyFEhJAQQUUPkwmVm2EDU4HbsCVvVx",
  "key29": "58xrU16sMgtQEXvdyuXAL4Koi91Zymfw39nxFpmMSs4oNgEA8aE9Qhy49s54JpNEAhjbjmLxC1N7oPCVa6tcBNjf",
  "key30": "3CvvxPgdWLKjPyCJ8vyutaa9p54iZxnAfnARiAE2cQU9TtKDbrN3K1rshw15VHCTgyadMGXKJX9Y1MYrpSyXg8Qv",
  "key31": "32mN3ULBPxF3FTpmaJYFk17PiFDSr9qoCiLh3GoY8mrhHtZHAoNPx4kVajgodY3u7ByqpQGJJai9CqtbTgVhWK4m",
  "key32": "29Yr1QaMcmMz5yMQcGi5nyGHGVfmazPhMiqZPsG9TPb3FLL2QVniwwPRefBvSazBwpcD8d4ag3Xovps6QoULifLn",
  "key33": "3BnXgrwYsvbBDFViTCz53xbH1Vr7mfQham84bQdKksp7PZJMZxsbkhmr7Bxqnz5gnKDP5bqZ62EwzRXp1gEv4bVR",
  "key34": "br9P5RCQpMjojmtz4wcpnbmh5qfWLy61hSerpqUNUpaSbWLsbB4Y3nkPe8GKpvbPZtaaes1KvbgxbbjcYpRRowq",
  "key35": "2c7WeeTM4p4YSkRzaKSfXdYeKCUMNCXxHvQjD48sbV2o8rqM6PpeTaCiFDui1uGt1DzpQrveMMJ1WkhKwRoMnBXa",
  "key36": "SaKAnCtB1F8SYyBzgEM6wWdmb7JSU3V2qHo6jtxuowK48xn4AuKL6rdq9jjaBrK47EiC6ADidGbLKhYDxaKPGq7",
  "key37": "4FNMyzT78TN88PsqEj8QJtJXpbBAoLzMX8AL67aJkSmeSdiSbGDz5BjqjrsXkcYr3ieWQnoRsSdEqVwXu6ucx6NH",
  "key38": "3oJ3eYufKTRpAVDGGky5eyjUTKUH5MEgD7LVZBrkPJCgTdC5B2xQRHYdY7K54yzvHYiZZqLvxvaw817Tjehfbxv9",
  "key39": "3WH5oxeH46SdFSBjRh9Mp3n2bSof9MK92SW94JcXguuMiTuLMiuxreTRf6kSuR5HryS5qHcBp5M48Vs7zcHkCSCZ",
  "key40": "3Njhq422kjaWY834Y5GdQ1advoLdzoPmeaZDH8d94RGCM5NG55w4wJ5in1Mc8c7S2yCQXgAMuXswQppezMjtg9vi",
  "key41": "3PMu1UEV5PMNFUVSLdRPihTAE6BsnDVhZozdxn7yU6methin7S3Aig7qtm7WU5KV6anPpt6i6AngF6EqLLWt5DVd",
  "key42": "4JiLuuxTSvMFhk1D3gzveyBGkebyZPpvav5FVGKJhKVuSTqoedexsMPJYLCQJKJVxLvEo8L9v1obTptA9m95UA86"
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
