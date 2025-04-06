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
    "2Qvmhn2JK8nVe4aQegApMSvkafQofCGCZfRpJQJWPatTkhtgCM87NVcdjr4inMBWwVvyW9N71PdeSaj1nwRfbTRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yGwCjUiMi8WPwRjcQfG1kEwEUCv2qxtK4GKDsYUvPikYCXHoBpAQAGh66gcFbFTstrar5U6jpJuWtiLFHzg4SEh",
  "key1": "2CAyyb8mXvoaJpN3LYm37QPAgs2NsNzrbf12ZZFRZiaVNTUyEkwKmpSK2Cer67AzLuJ84eCk8AcB5RmUHxrznGT7",
  "key2": "u7Xrr6o6pM1hbUhwk5Gu4UEG4rwPca4JpPimwGLGZEwoEVnR3XNSjwgRE7wWgtszvhcNWhQfetMCGHmLZaDepL7",
  "key3": "6zRnMqTQGjkAGwQfBNNrq4V5ZaJ59LopffnjJsKE6kNYZQbw4hMsz8SxW2zo8o2Ek1GuhAvneu2bp3v1s2XV6vg",
  "key4": "Pdh3sL9f2Un2HxQf1vQA9TCDD5aCniH9KJHv6skDGf5yoAsCSzhWYH8EoVnwUAwvTXiMgPW95JkHN4hceRGU6GT",
  "key5": "4UEfzrNcA48PjvfnJgjrZEKLu4qqe6w1i2fPuG6WQ1j9hGGhLB2Qr3T5cKR1yTZy4gTjzfUGsND3cbzdLnhyWLsx",
  "key6": "4ueMnRLuPcVCnoWx3WBdY3Z3RW46FTMa9MeTV3PGExz2dd7RqpgryBxFyAQJRk5N5wpQtQfoT5Fmcjfr6xY7gKNV",
  "key7": "33N8s4NE3ispYSDsaGoYM8nwayML9ZeCoLgjeLAwxY7s1HF6yTj1LZH39aVsLDHi2N1Wpq6mh8M9bywA5YfUF5Yr",
  "key8": "5rSUwFckzgEFLs6Xm9rYhLpv92YKJWo4UL3qmKPGrLnuADF4yPzsqaMuyfqoCBZAggEAtFMQo8Z4piVxaUgQDsmD",
  "key9": "SJNUdVRg2P8aeHXokvEKuVR76xP1SDXsQ7nwZPYES23cQYWsAPutTqoQTXRmAKqpBVaXkUXizRH3VHDhTBiwNjV",
  "key10": "4TNigXieFUjwcc3E4ptdfm1iR6G3Tv2qiKEvy7WcbyhErsJV1ZrfeyMr6T37bSJj45JNtEWLc11LQNAs4Tmss7aP",
  "key11": "4dH7XcfZmnyqAU8zGbvQAAGZ1mmfWoBAieJatT2PaRjCzqyY6nmYdN7AkUjgcsQFBk1Cc91ssVHmiAbPaWkQPTBh",
  "key12": "5i88aJUPfa2oQ6ykYiiWadbL53xCdYe6C4JzAzdzrDqxRmLWpooRpA5G4WqRFrmCqTEMnnaCQEBSemeZaQkgCDtP",
  "key13": "QPXnrZefd32ficXcTMNGp2abd8ZP5xAi3CCw2rgcVSAHbrELsKWd34pTp9zThf15BejXD6jtdC9qSsCqoYwcNc8",
  "key14": "4No6jzGBgyrz4923p5Khpqqyh33Pfc6VABf1PsuAcaNveAvVdzkQEWCEPdZcQR6GgMVcJc3VCEEq2Vv5FixJwHRJ",
  "key15": "3cpUo2CzgQgmWf68n9ugghfrD1QA2WkQPgq4RR191Dp8crXgV3hGNAAuJiZhGTrGW12faScipM2ZaV9zxt31GWRK",
  "key16": "2X4YmW62jeoBAcDP6KkiqwNs7hgbaT81fcoUrgvsci3GHgn3eS1UeBRGxsYxah11amDhzsLzLPweuGeEgYHQpTeC",
  "key17": "EbEPxwQbwhKP6j94NcD3Xr15NP9c1FdA2KUKRA4vTzGqMfde2yco4YiDAMFuzftXvdrht8HJM7JZhpeP3rCRFNs",
  "key18": "5bBe3TNEFLdbAQ3aHtbFwAa4rR8Nokt8vPWL4KDoVAJCJVcxxC6D3aqQ116u9DfbxddFnuwpRUjEEvWhxgdji3FR",
  "key19": "ysSSK3PczTfqMyHSFZnuvVJNqvnyDHJnEQLDxQNesYxAX1amJQHVTfF73HshQBRz1NaHpMt2Z6CwhZSVqHzXaQ5",
  "key20": "5A8H8cottijDXJEmnALNFRPDi4PZxQGt6t6NX6wFqZJkH2idWB9JS6MtvEBEnoGXhxQNhkrvWec4bthjhPeDEHjb",
  "key21": "55GDfhhE9SxfSfpqBYDfMb7hLqCmKVxTpkYLtid7RuwnPQFqANgrfM5Bu6QyWerCqgm6iE5yw6S71yejeFZgn2DQ",
  "key22": "2s2yuvBiy1iHh3xvRsB2mCANxXKtwYZ9rKJX1wMET4KHc9AFQ1FxrMYSF94VieGzdwsyDX5XFF6gCycDRPjYViUW",
  "key23": "4qnXER4MZHU6zGB33PvxVaq3mtVw3R1YbGpMiqVYULkPvUqBE9AqVBMXrEhVrmGFGM1X1234LvfUgX7A3CSQeZnc",
  "key24": "22seA7rERwNESbjm9Bfessa2G96YJZYgu8jchQdBfw2RxsWNva6cpGGyyuc6QDuoCPv1a5gP7CMpxwy3ohGagmxg",
  "key25": "48oheZoxVZKZH6NsJATsYN2Ay7UNxCD2BZ4h55gQsbHLfSvMXsm3DAZC6KWjkMbeiHvUctfT6vaaLnMpEjXcDT9G",
  "key26": "uR1dBu7RVfADgBPYzpwBXbyi5LajLJiDCK37q6TbDE5cT7XLyQqqZW8Wigsizum4VwJn9yVojawATkSMsk1dzjY",
  "key27": "5qwgzGgDD2qC97NuREjPD5AmrXxGuBr2wPozy3ZUmoAje36iiN1QKSqxba3mbX6SjBUJs6MLnodndTYYVYSPpFjj",
  "key28": "4UQ6MVY6Sh2LkUJy92yHf91DLTW8Ym7QaYDuNyBP1Tc1pGFYzMHJe3Uor34317JzNVWywBemFygpsTRYGjSF6wU6",
  "key29": "3CVPzF9MmYVtpzDbjNH48RA5UkVV4AfUgbTeR4uMts6ikg8StX2HFA61rAd3GSmYY9gYrYwDDQXeL6qRuHyWNGWA",
  "key30": "3N2xdhCbXPyF8EwReLRDi61djVL4cVniMqsxfJ48ohsLtQaVwjQGRsAQqfRtyrRbBGP8HKPtAbpsao9D82uwNdms",
  "key31": "2XKBfMf2ChiWYgJ2W6AeuSFv7Yiede3YKKnvePr4XBMTL6xP55Qy4xNMEqBPPm7a3kzq9zq5wPdwkEzRpBvi118S",
  "key32": "3CZiGiV9wXpEmhsJys8tSzUvLfwwGZF4TjdfkF1SiYyRxtoAqwCz6QYAzh1Jse6RehaVozvPKBJAMaxnX8xw81RL",
  "key33": "5XMdGe1maDNVKDMWwh6RmAtpvtB4rvcNH9zTU9itvqQPPHhbLMdcHAzy45R6eVGynq15CzAABKnHnWJiDKW2MgV6",
  "key34": "4DZGuxQ25mcUtvcV84o6TxvAYzsYspmZmo5ohNHfssMcwBaxC4QdQti8vfC6AHM6Nvt5zUg7o6QTvcUyBUMXnXFT",
  "key35": "4iY47vj6c6UMCbCVq6piJrU8Xo2ot4EwXMQqg7SKn4esewwfzb1mvMZmfC9kJqPHDQJ8Bw3ii3wwTK7BbKSLwfzZ",
  "key36": "5KP963yEnrfC8XfXEwHsGcB3td64yL9EZZGM5FrWvTF5gAyGRjrsPp4ehUWZLvgHcRN2Euu5DaD2P5FJUXRBB1HZ",
  "key37": "3XU4JguMz7oiRm9WCnhkKc7FjncrCZ1D3ufYvTvUoFDkTUZku7phMu9N6Zf7wYpwiQJkG11f95rYVv6HveT5eGxN",
  "key38": "riG7k6PtKufpfQuzmEitay9G7NDJFXudMCDowWwM2tQ5vosTuixZ83AVqXKdF9hDHMuFLC4p4CiPz4oPMJpfMri",
  "key39": "5eWNJTKQtA9uzqK44di5aPGZU5nxSkyNykWYxXg95LbJ8ACg2KRFLoC5SuKUK9HEADAqsuGFNTUGEg8f7KfxBVEy",
  "key40": "53jErMmELAbrhjd9VxGVnbAGn2SwH63FRptjSBJhUUqEqSioxm1iNCcwGMzjNTWYbL7pisxdc3iNnphp88jVVaXG"
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
