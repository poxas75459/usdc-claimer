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
    "5nfkkYoJN7iG2yUFu1gjEmCpKYouCRgMsMsJFYCMTztiScaTfJuzZZsrhe37Kh4aj98aobGbCvUEnDp2rckhtiro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yE8mLgT1SRaezimtg5eJZdjjf2ACEAsJ58XvBjx6Ln5uue1fcjwnX97JX5utMHkjAwCwZHnSkxoH8HcrKAfJ868",
  "key1": "3NazuUZDarDXM1YZoNgQLfBYyjWt3J7msc77N62yZ9cAsXWva4JEc4CDTM99yRywRVF5LxLFYn5n8VuE321j8ArN",
  "key2": "5TGryfCcDmAUoq686EjTXkSV389JwM2XeKrhXu22WtritvmMhhjcujfUygyiXQMAhQeWe8FLJc3TALCXKMmzuEp8",
  "key3": "5e6BUkzy5BPbx4AT2oxiawYkw2wTBtFQdf6D9qmmPKjMDwR3quv2LS4YKmLX4Z1XuA6YWjFhwzL4EyzGxBR3JqG9",
  "key4": "3hvyFG2zynWKm9jnw2Yw8jcnDf3deWh6MvLqnnGTKMTXo2o6d6AReTf1BWXBn5fXWKuQc9aQwry9f5jz2N5n486N",
  "key5": "5aMBZZ6CVnN6KPrs8KkFLDSXhXbU2vJYdcqB1fSp9HAobkj1KzEjkzXqqzcgVCFV9vkX7FKjMAFzeLng3aiqmGZf",
  "key6": "4QHFgHn3ocPS6iEfXjcEczFDqqShKRp9nAiubB9kjXGgNzLHXbo5XBwbAMCbiSkD83edRDoB4DV7ZpKxfNcY6PEP",
  "key7": "3iM54aLpnPy1tWcTwrF3UZgEeWyo8WXvaavi9m2tyDxKVkcd216YwzxtsKKzwDipgXHvmLQpnRwjU1NcskNg3ggC",
  "key8": "r7ugDrMjPgxyNhZQrhCcMDwRZPTFVLrYL11f8AQucWFujkwoXkwWgtyB5Rv8DEXwDAMfx932e3epNPdeeHqskLz",
  "key9": "4yci347fbLXc1Hhgzx8oMYKKRwAtFJxtjJWBhgFm7WAWapainZLZ7XDAUkj1nGmVbodtJ9qCduXFXUKR2EaKgs9D",
  "key10": "2vQuDqjDszBR44rBVWg1vZG2FcDJxpRTjjv6PYUinXGeh4RobGLKD52sK2GAPqTYEop7GkkLi5kP992v5ggZmnyx",
  "key11": "3Qh93Qj7oYn95Ky24mBqMV3AbbTzSdKEf789PE1cbuFG1QvrXo3yQgGACs695GoKkBAxYJhJVdTn7GUwgBYmfJQe",
  "key12": "4vztUJvRT4SUXEgL21qJ9oQFd4QWYVvUwKpzRoWTBsNBfgFi4zwdrR57KmButRe2dNwx6yrKbKqV1ope4JVYV656",
  "key13": "3i8z1KigDcz1V86FsMuqqKwwmuRsGtDDGF5owobRNu7xaY9SdQRrhWt7A28XhAE7WJ4QzRMmibJHgWZUG2io2Cx4",
  "key14": "2G78qRoV9A955629XaKq45631evhn96qrdK4TGjUVkXedcJD6EmHxMaaeuhxfnC6zYquMyyAHuPoCnLpJCEHFpKo",
  "key15": "SGtPY39fwm89xtRm9a826ukoSxe4zRh9DiE3JjkuidrzYitSxvJHLEaCnTN7DhZq7wtt24KSCt1ZA3bcSnVn4qK",
  "key16": "4Z5ZBBFS1efxwtQwMEyaPJGwWyuzAVraLp9qLuTZqki4AjP3oaLgGaGeu525fBcDTDbikb5oX9J4Ls7c8GdNEC6T",
  "key17": "48YTUftgWZfwQ8fsHqDnXjB3SNU7WcNpeWU7hzmunEDmtbAcr2ekWQzynL27kemXyvfbQFjm6Cj8qWioKkbKhK5a",
  "key18": "3SAxgxLECjSoJtPaUBBFg8SsuXB7Qn93ieHmwaca9tibAZ1CQirdfSitnHbx2ePM61dXtnXtSXcWYnvX5WFMaoer",
  "key19": "5nK4bxjejSpvqPbA7N9oL97BNvEDP7BLQEnXDskCSysVf7yoknsVkE9QPNDLA4CBaDiMjKxVUJA3Nj1L46KT52gc",
  "key20": "RAhWJwyQCd3GgZjiPpjEP4PPHJPdk2ZEhtb6GguUsroHzEtrVdvdVgv87Q3ke1D5Jc28giaDRgLBsQgbGbMPdKv",
  "key21": "4BWytT7FNdSRUbEwL5PdhC4ghUcab3fbN9HFV2hKyqhrSMwWR1dLpYmMRVSiaGoLTikLcrX1yrzRc8a549Qx8s7d",
  "key22": "225zEHKCSJMtwZ8fBAU59AzjRGkTktt7PCuVkk2ihmXCM4eQ4UNDoVuNYkZq3mb6mmK3u6i575YwG3rz5QnMhTBx",
  "key23": "29czpvmXTGQAnmxAVuR8NWsFPfRMnHy9Qd1Cy3uUB6NYxG2JA8cgcPLxKo5K3bNKvD72s99BNRWUpKcy6L6hbqjh",
  "key24": "3pzfcZC61HBf8tKFfzktQCeAx8gUHA2hNVSSzXc3DNfG8mFcjXjgNxJMQ7cpoKU5ekYRWYuKK4ZWS571ugSQCzWw",
  "key25": "2VvfSCVGh1x2gJUC7mRGQ7Fb2at74KJy9BQWsQkVRf41g5gGRV5DkoSGSqPCnBxwVoYMspbm43rhaqwk3BbFhhaR",
  "key26": "5Q81jGdz59chGJe6JynU3SLZDtYmXQzEosRwHR3TAutgeoMQddey3FTGTRAGSGXX4xf6XZ2TD8pv7C2BzvH8D6Wf",
  "key27": "4MHjkANcP9bAVxm66BS4Y3aihXsMXkKE8XRvPc84UEzJvXAFV63WNofRKRGfrZSZvq1166YneVtva5GCEgSVJtp6",
  "key28": "5WRkPYMaMpDULqWA9VVAMWViTow7NMprVdnt73mbfypGRdGjh7KasAmGia9kp3YP9LPN8uvncQCkMqtve1Fn3Xch",
  "key29": "2LRsUEDEVDShjwQu8Va4pMgHVc5xsnaVAzubMVBHNmbWNUbL4JzMqYmyKy5B6z86bzZLPyz6t5icViitdsL1zQyz",
  "key30": "3dviief3viTKVRgrdpwSVoiHG9bx3cYv3sAnrhLLraGa2oPgD3CNpjdZtDQBqGEuWUoJHTquxAzpM78PW8u5SCfX",
  "key31": "3WVHK6CQmPdTiGULNiGBdMTwirBmZyHacRQe3GKj8W42e5NXkkAWZrWgWc8ifJJHCz9TLX8xBDJmGPnFuWS9gjv2",
  "key32": "243GCwGD6fgbkovcL5djqg6dB2J6h2da3QXquUMy9E8ozZ8z6P8YSYjFE1tUcp25WUjrCGW6khrNFhR9CXej7VHa",
  "key33": "4Gw3cVbBuM8Pr5ZzRGtgLdz7s3skfx4RDrTZRWnv5YCTD6tBzmGsd4UsTY2AfeeSX47sVjfVEXQX8UoGPN9pxE9p",
  "key34": "53r4tuYKmiTPVzjSLnSCFLxX7SZDXZLZuVjAt8ABV62g5pn6mnTfYWBgF8hz8LundkneJguWPn7NB5obWPSS9BiZ",
  "key35": "3bMyg7ki1nr71WcFnGD1nutd4JEtfVPvajm5LDzhmeyfdrmb5Q3nGeiENCdKM1mdg1K4pejmTatePqYe4Qmjb6DU",
  "key36": "5aRWwosHJwcKk1CQvmLPVKqbasJcMv1C3PMtsBMmjPjRyASDLQYFhnKXFZoH6oMU7L8cBwpkugVcED6mYaXqcjgH",
  "key37": "5qhd4WwEzDbPkx4maLZJAcmZAdXesKhq96bgYYEca7EhEF44ewwetPtPBeGFyrwaKrfvy4kSXT6zkpMbDGxDDy4f",
  "key38": "5ZKJrewDfKp2qL7jTjuDWrfFwNdPaD9PZfDUEW4yYDoxjFZ6omHBLUqJECfNSX9iMnMT69MYTToJvQoJUEtPHPCL",
  "key39": "5HaYuYFo1Ejg2F1ZTwNpswMZBmbg4ZFeQoXoRrZpTCWWG5f4nqmsKwbyYrmqpUHaCd63gSf67LBnvQwtzNVHxBgr",
  "key40": "Y7cTHC3dmoAsUPYYSRdn8JWNba5UFr8w4caBU3wwRM5q9qAuX1sQpW4qtE4MBFueU4HcHki9GW2zx99M6dn4dPi",
  "key41": "2T97SDVJw1CG2Hcyw8ebXtqDVkpMn4WAhFh8VxBEedETkG9YwxK57qkGxRwo2saE7qN86inm8jVVoZD3SqKAXiWF",
  "key42": "2SMFc128X2yL8ggHUtNpNZbpdykpmSFbohm2p6TtGCXAQxxoa2oFFYTAUZF8KKKrmVLu9MFJzvmJBgwTL7DMhsjF",
  "key43": "321E8dnDyYSprhxBWLc4uv31ixBrbHGTCMaTpDtMNGXwUenwVERxb9QjcMati9Sh87RwgaL8psH2AAPyHVCh5kTF",
  "key44": "29tk6W3FvXLqENwZydPciEzXh7UdAnovwJQRfeHaw3nSiVDe2HJvjChSW7yBGNwryyfaD727rahfpi57zeX1u7FR",
  "key45": "5DXm3BuE7dTHcd17oe8PxuMosrV7NKvKhdtmgu58AsKwDepKCazNDsWLX5ApsL685PG53XYCxNZm8WDNDbv3XMgM",
  "key46": "5YJxgGhpWUqhDcPg4Eg1yiX1TLzw9Zm8GHT2sKKnvgfnLeMhTLUvZWkPEParNHixoKjVQP4FRa588ci8BTnDUSna",
  "key47": "C9vBx6dajBCUwPnjzCcgeDH8E7tT8EqXGucqc3YLF5obAxZ6NsqJRnJcy4rtsVAGvjCiQ4Ldd9c9bYKT4arVP4Q",
  "key48": "3FHoyjqmhMix6wJx7Px6DZ1QyXoGpd4b3BhWNKBgg2sJZXnr8tU4gSLJRuiF9yUNF5mts1f8xfbqARGq3EN5YdfH"
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
