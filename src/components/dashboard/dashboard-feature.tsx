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
    "4a6QCLBaSTD1VQkmvSwpSRzdCP2Shie1c24ArVq7rsFzEDupjT5W2XAcRQ7r5CDnm1CiapsSgnu3jQKno4956Y9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zFNsYLmijwjtgrhrqaqup9hYnJoDQy3z7pjU9NVdL5oUmkGF8EMEMXxtDwHc6mBQSM58FyQS23tk5KNAxKfQYuT",
  "key1": "586zn392tb5Ttogp3Cbnk22stR2BpafzkYSpztJ1tV7eHWUsZ31QdGqbsC5uaHzsPJzmraapPyxG7zmx4PU55FSg",
  "key2": "3MyNzAVjW6avgEcH8yLjiGPWawd3iij8mDhG3r8Ep5AtrReqWnoevwp8C1knYDHrd3zQTfYiuQvwwnTbtmy34GhL",
  "key3": "3ZTAGofYEQSjm4AmuNcbPWoNRqJiN6ufAZvoq4vdCxUTvWCjXRfqCu65gVXFETWem6Bpeg7vaRv234PXZ5e3prMC",
  "key4": "4Rew9KCmJ2Hybj5VXBL3jP5mXwBR84GV2c1hX1dwuEWSoyqTwiT1n7WLMRHfT5UYz34dhcbWub6BAZgURVryzKHD",
  "key5": "4F6z2tbSqJLfNpJH9LVMx2v81c4w8QHEaiPGoJ2TRxaMkTAKmnR4h66pgLgni9KSDE9MVFUaMdhueGtVcbaDevTn",
  "key6": "3CL9mAWAmyoXjoAaYMXtJoBfxaRrUgKZ2Vx3Tuo2LyhKoRZyRtSL5hYWC1U69hSX6hB5LYCiFiqwkUXpo7TQy1Jn",
  "key7": "3eBitofYTTbxscVTJHtHP2YY5DCaZm419GFEv6ywbcjqfw6agaLP45ioAVbf25t5q9D8T66LCaJAnjekM41hyLTY",
  "key8": "uZKc56pN4rftNyMFc8Y8FN7Y2YbysPXVL8hUwyUbnta1vvixp3832d8iMym3G9nGuaRGQrtJKCdhY83XoJu7V6H",
  "key9": "3QemWSJ9C9dvXLyMjz7NGKEmDjv2FtEiwSG4WrpNJrSG4KM2X7vEgzS3qyjmbgTgenxptp6c6dhN58bm7QF4jASR",
  "key10": "2FGnufgZqqEgN6nxMndzPsqwkyvGMy5HnzGeUd4mBjs9iSV4PWoa64jvdduhV3sCQkdnXxwquqa16oz6N5RwzsTT",
  "key11": "A17Zi4tBpNeNCUxB8q6HueEepapobZmLrVdw4DdjpFCCedG2sCHVoThrb4na8jLh8JXqmKyU4DthxxXXgD4R3YN",
  "key12": "3iBjXyuQtWFGGWCMhneFjGgG3mtS4T8zzcG8TV53fQgh5Kxvk9FuozDjAL2GrYgSrY8VoRiwTiHq9em18avsW7Qt",
  "key13": "3gtsaxQp5jamfSb5C6NjV2k9WvcVZruXpw8DvNm3hzv9mrAHTSNYNnR67p5uaMAx6EHPcKKtc7GfUKTmVnpEi21K",
  "key14": "4vr4ES9qJUMr8wxsoifKMW6LEJKQuKUDvMqA2rfetBGo2eqoXB3j8XBsm56cBtbBjc8GbowL118svqPnvD5oYvie",
  "key15": "3YfE1L1qEDTHa6kbeo3uqanZdihqovPEpo1nM8ezQhEbErPktkd5WzMbyFRCojCQNVviEYWKA5is3d6Hwx4F6Gdc",
  "key16": "zdYWKh4B1XC93sNvQaJABeCsYu1Yp5Wm5rQ2EfJiAbUbBPhiZUa8Tt3PSgjJSt7QtRD8fzMkkCmFqL2qmJaPYPh",
  "key17": "4BD5GpWsTBsveWtn5eGUhRvCatB8ENjMQcMyhccXpjvuqyZZQ1BTqgKhLqmWxoZytMY1wBUirpqE88zFkBm1xQ8P",
  "key18": "3DV2RDc32hvssbBPMMz3UQu3bxrdmBeNdVCk4oWaWNDjbkTze56WRDjxpZXKytwVmSZaDsHDnUt14CSuRfkEjz9C",
  "key19": "2VSuizWw8NyF78765xFd53hDwu75fzS15JWfSU72gWEmyTWYsEg12jM3u4M7eQA2kdicUtpeD9wnxMPuPnNPFVUn",
  "key20": "4NjQ4mJ1gzPraota4a5s7y4jJzeGgQjpqbtGkuYXLS1P9k9hCyLZiVtn8ag87uPVp59fTDGh2jAjH3ShWykCe7x8",
  "key21": "2ojKQERx981our3z7wBnZRQdejQ2G2zTMWBU2w2dd3TURQTaAdAoDD1TCAAgA6XjMZYH4A1u9WgidA2sHmMxv1Lm",
  "key22": "588Y2aZUehx5D7tfgh85m3aR3NTt1BxStAtQroZJQ4cG3E4NEHmB93ibm9xdwWTmTkmyrwYSeLfemUxzKpKpMyzP",
  "key23": "3TsHdhP2yjAtRvxei5aW372wwh9XYirgj57aDBGVNDB3sHmvzppBEs9qGwyMmvGg9SwDLDCDiT36Tgu8sXYeJ4JA",
  "key24": "hvf8KyyBbqCxrHdf8g7UdV6dHkf9ZqCsS9Xx3KAyDJyp7i4poCazaEaiZpp2669o7esN5pk8gbNrap56rNJaTy1",
  "key25": "678bfWHsG4i5jMyJCK5yHjE3HGGEKN4sA6tzu541GTcFiFoca5Gri5sahpRSmPKrn4s4so1q71Dj5k4EQXHJn2Z5",
  "key26": "37knNAb3yxty71YjBcduKQmzDBXY4bY3BSTYYG6QXefrD68Nk9t9V2SUZC2cPyjk6utwuZevWGvL9mA4XGjo9yto",
  "key27": "536SfynFunwY1hmoYHowDrzwz4pYTuRMSDVQAYrftc21RnEiU32rMMrJgmj9Vnqy7zMdomV6oKnMigF3twEsfWAD",
  "key28": "5x6sBU2wj9x8HTUQRPXSctPysxqMfnkQvEMxiBQNYYX7nmthWPf8YUwHkBhN2aGdSwMQJAKYtBabTMrbgV7sEUXg",
  "key29": "5EVUayUobDNMB5udKLdkEBUCNwxwLhC5hNLaBpsCYVdU3JwTLTPf73bUpt5uVFKr5cbydxVRibJi245yD9y4Utmt",
  "key30": "nKUqHNBYgkrb6C2FSdqTggKtJKeMBdWTwrCtGchrHWnciMYQbty4FJ5rnryyBX3cyqs8bPPA9x4by2bZvzr89Yy",
  "key31": "MPpRhCiGmyCnoc3NmmuvGqsRUynWPbg9HZBrGveJNSTrHAPc4h7V9AoGbRfh4iw32vMty6KrN7Jymmccy5caHdy",
  "key32": "4WvSfZg6yNBNuxGtGUMUTmtgdDGErU2u8FaRQ2QCZ1euwZ5o7pyjU21SzA6vqwFbv7VLMfr1pjm9HFtxdygpCwu2",
  "key33": "BxdqDZtwfTUdreqnM883yV8fYuzf2oP76anKWHBqR9bHFYTUgJYQYc5shQNjUPvvvcKkc3TW7UM1ic6k2UiFhMJ",
  "key34": "gPrinkW23F9dzVoB3eF1RGkEgTKEGKrFKWikmGYg9hdCD7QDx463nFBD7VMeBLeNWywVFt8nQMrtsTdbr4jc4Qm",
  "key35": "27FDKg8uRPaX25mpiTJwQoFFB7M3huDheTt7bna43QuV9q2G2nNz7iBpZf74NxCEXYiJZB5CUXKyfDR154N9M2o1",
  "key36": "3fkxmvfoCN18jovJAh6QieNVgCzcbNLDTmzyn86zVCFcb5wJxwuUyHrbhxozRLxron6GkT6u86VEHGfb2VL15ESm",
  "key37": "248LhJ5Ks3wy6YMp7zguXikUP5ynLWa8bvUSiMnqoNazazMuk3qgGg8cp4o7GTyorojoize3rxptN1QbMMCHTSGY",
  "key38": "3URHxZLUsi6jFwfRbPxyjMdsPAobpDsLHJwk3FeQpZhxXmSMybGeLd4FUUXJA5yCAw7omrgQwkmyZ2zfG7yTNKAN",
  "key39": "Yab1jFxVE3GQSZbrC8fN3zuaPxseHgt52ScxSp19XiuW5dgWPAEPYMKz8Dnek4jC7RaAcNRZqYXuyfoWxZm4k8t",
  "key40": "3g34rYbXmSkTG7g1ZkmGmSjf7un3YLAKEskcWsXgLBRW1eHZjXgJBUTxGR69WSDhtUkq2fXZZfn2F24c3cPooYdk",
  "key41": "2oBFXGb14My22KmDf9c2Q8k5gkx4DVr8qpqZRnDF3suQrr8PzMyqbnNyopdfgvqDJAxxtSqcktR6EjiqCkQorpiN",
  "key42": "3vazFHxSF7EMqT8mmidgHfnd5gcYZr3z9rrsiTGW4h17fiVagEFbwFNQgRkdcRh71sSRUJscwiDDtwc81CZz8LL4",
  "key43": "5msEPbTX2qNg6oabha151gg7wxT7xKfh3DPt8wDJ1LGMDW8DxLS87hyeYBPesxDip5czHbuH4LpBSbrMSnbcZAE1"
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
