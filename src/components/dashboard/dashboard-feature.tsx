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
    "3XX3dGSHHviSdhdexTTWqVrw4H4C6SUepeSnEeweRq278pNgSX7s8zkjkBZGX2MKCT1XckYxhCex2zcaY336ykpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P4sFk1FR8Y7i3QJmy4rCi9iiLXpJXwjGL1YnjU3S3jyq9sgyNFYCHx76nMifdCfWK5tuqUQVFWNLaSVnkWKTRfp",
  "key1": "xp7Legqj8xbmKLHHQA8pNh6pjG7SjFjdxNwXHX6B9PXuZYeAe56f51HovCq6ivqmE4a8Ynq5iBuJfL98v7Zu1Mu",
  "key2": "qgrqXutaJ7SNoVCRAoLvz3GVBJiv7kVq39WKqf5arDnsXzkxcMN8qYmjFeP97wYQEG5R8roTjQs1LCBMVYbYSAo",
  "key3": "wPpDoM8dMC8xTa8uoLKko8aCyEzxXKUfRkbEqdy1xLMqBX4hRGpJMZZ9cFet71nohAVChCg3299XQ9jeZPzqYe3",
  "key4": "59jfomhMkqMM3zXmHU3ppdFpm2wru8GXhsPJWcF8WccmEw1tbMNJ5mBLXP6HSJTproVMSDMVcs5jqJqY1XoEEdCG",
  "key5": "64EPNJkBukuedVS2AZQeq5r487Z7aYKWJ2eRJSzL2VYbMhJuAvaM3x4pP6GhLy34GRNwgynacuFrnvpc6UaU52dp",
  "key6": "22qxmVFeHfM95Nd7V2pgo81iQcBzSVGxEAEY6SVpCpeScXrNxUfwSFMFNjG4rj7c8cNrfZH7zio45ac3Fo9w9W75",
  "key7": "tPghKRjcq8ogJtaK32XjupJiRQWb1BHDC9qk948SsvYwFX8PjBonJETs6ZfXe9KJ561SjS4JRwXP8tqi4kLZ7No",
  "key8": "3mSj9kHPs8xpf88xBQwAyfYt5UDVSgrNmnbGK4CNhhEV9c3Hx1RiqDTJ5YM8RjsAvsUv5Q5oeHJaVoSakE6JaVyC",
  "key9": "3AChpCatDvgHxJxbDsm4R9QH5ZEzLbqV42HgVfmBWKDWnMmnqqy7yfGjGCJZdzvhToXcymhegMQPMtPm2YVjKDzU",
  "key10": "4nEGk9mmgMyHg6igFWT9WwvH7AG4XGu9FqGyw9k3vx3jmURmQXVnQbPkTJ5qnmWSjydkPpN2chPAr5fN24LnSxFN",
  "key11": "4fK77RqiFPsQtrkNrcaJtkq4C6Gh3Fop93xXZ8YVd7tWodahWPWkKXpDSYtYgebmSHsLeaT6JoM8GdmibJHycA7N",
  "key12": "5vLJedXrtEjhE98hVnsMnhfby5JeLFs6rQpaGdDotU2ZArcVwGM4aPsj6XTA2f7TYE4BcAHEtiYzmwxD8pr2j6R1",
  "key13": "2aw8g6VeE9Wzq192ahurGUYKrytfcJc6wgYs6XKef4DYm2qc2FGXoWWDbN6JWiS4rDEUi3XReeJ7qHG5h6kezhMn",
  "key14": "4h5ZpX37jNXXS4N5FTbRfLGAHCcfQ1q4uLNTZmv2efgpC1a5mNK7FWkBQBLnPQEb1LTXW9Ec3fUVbn8vSSaxJZvo",
  "key15": "GBfy3kCLvKNP5XcmSLnoC3MPM5B6AiZ7ECM1KmwBRWeD9yeQBQ1HsfCaLCucyaLyprRCReBLaS7PZtE3dRVAPQN",
  "key16": "4dvva9PCke29MQgoCvTotkwbyHTtjBkfZxvMkDvwd6Zhx3suniT9BymYYErau1oQ33YKpV1jn8G7ELVEinPSV2JT",
  "key17": "4ieZeAD8pif4gDQrcu5iEWaZB3AnpDZMj7hNFmeoNqU2XTiSaxMEyKTZqnbsLzVmqsRqstQhgZa1qcUEYdTnmy9Z",
  "key18": "4N4mfRQiGh5igD8s3qgw35PiJ93r388m8W7yUtPrNfWKvzvQ6RbLFZ9VATPkULoGEFt2NLeSh3BFzRCNSgF2qdrw",
  "key19": "7WK9ug43ZwWT2ZhL5WjcQh2gDZv31fvq7VpJkfkmUYR6ABa5jDewvgTZLeYoDg6yqtHse1Hu1mCRSMHXhVUi5bB",
  "key20": "2dWDhM9qv3Ka2oQozEtwSNde6ea8tC7QzypNuto5wrvV1mpBUvr1XR5rGJanvuNa9CsYohTqxoURhUj4KopiSHir",
  "key21": "4FgMVGFzur2c41dAgPZa4yaHJVi5RetqyYcU78CgZ6mHY8BQZJA8MYUhM4zosZZAspSHAopvXeLfxB65TBGQWeZK",
  "key22": "4ji7gFQyrQoNoXNetJhz6VdokC5YRB69Z4SdC6rGxTXTGZygySYqSfzqoXfhCK1i3eiJdsdku9UL7r31aRAGNzc2",
  "key23": "47iBPTQWD6Ggffy5FxA4KLqSLWo2hYjMMbtSQjmWQRswaXcDeZZQf7FtAmH3ESaMbSViCeazfKZyoWmzpRYKJSSP",
  "key24": "wHjEey6sFNeRUxYv3jq6Zfa3uAH4xJwbwiRabZV2i3PMDa7M37a9zGeRUyHZnkGyoX7nVfdj8fRM7vpSzZWMiEH",
  "key25": "39b6Z8jL8cQE8NMsWjL7Rmw8U8UffKwrCLqnVwGwHpiVqAW1Bt5KBGMBvsuMTBqYBczx1Jiw9DUqiTwfBJs6aheb",
  "key26": "5XEJmDyotQTnQ7oSsp3PQZxU9vvNRY4qkxTj7LRqFzH1R8EPpWuN8MAQsi5v5RqRTFupmqWy56zrhX5Vg3u5GW1V",
  "key27": "2WKjmheRaH13yWGGUMYEs9ZHmK2NSJB83tkG5cvue7bX4HpoQMxmnUsUanJmkcaPKayNK4Kig7mYv81V3GWufvGR",
  "key28": "4kmNwHa1UHxidvpPEB9LgFDj3GApEfrYqmCRBueKsWWMws51ZxSuUtVpTiQoZybagVojvsqjhvc3BgvjjpGMsNYG",
  "key29": "648h8y7Z3tJgzEkTrqU4mjNvYsb2SuHzUPzfKSP4y7usXjkWDMdis1E972sYfC6SgixoH29LLxYBzZTD7krsN734",
  "key30": "3QA54BR81f2AWb7kmSv4aKM4mSDQY9zvf4eMr69VHB1VBTgS8vTok3MqgJc8Hszi4HydzWMn9x9VG2QHjjyGkMM1",
  "key31": "5Ew2KvU4CH2F9QfaHZoc9wQyHf34mwKPasrhgWt2ZukGMi915WtKqExzzPxrTiQWLGJWBXXHzpvyqqKUQTCmzpXP",
  "key32": "5jkntU1jZ1HR7xKMt9KPMWyrbTxnVgYdZgcVE7wnscudYnRfmfhBVpcAWdbKS3w23KmUPgdcrWuqfWPGfH2eCvDN",
  "key33": "62TvjdHYm2jWdCZg8Y3fktPPBFBpgbnMKRzwjBnXy2EA65FcQHh73p8ZG8TREvQoZuUoGsCgpbKi5h8xt4zQg7wp",
  "key34": "4odx1TQEsagwfBXDF5Fc44KNwpuoEKN59rHzUK6dU4F8iyZmT158oLPugjZG8x6jYYwvg67SZACHdZXvksp3aHx8",
  "key35": "5Cyy43mX9G7pWSpjdgdDK8uyvZdnfXouJKd44J87CwctBZi6GtA8a3gPAnAGRA2vGanZougNKWUxaCC5u9dj9NMh",
  "key36": "3u6Z1WJ9rTs7cY9uKAMDcmSCEpw3YJof8rn82fwaXEcttpsPuMYn8D29g5F8JBoqgHLzoeZEitx7iQfdxC8jxa7Z",
  "key37": "5AGc13Q1WYSYQo85ydAkRoCdRu4iAAZdnYUSTmhvT39dSRb3pqv7QFQUZr4PGL7SsqdkZUJ2HS664H9LU1DdygnU",
  "key38": "3TCHbAH7pkv48PHt3dQwq7RszmumjYCFUS4ZjWFofDHQzZQjLKWtrf2kjULcR4ovbXSYt3gfqvMZ9xwxukKbeV6h",
  "key39": "2aFPgXtrARmC5dFeuNF3mPySupKRnQekzhHK6NgKnF9msqC6CmDkKxXQeZZkKTuZmmmEq8tV9PdACjtVoXogEMTY",
  "key40": "2cpJctukKoHwVQh9NZDWnnUJj5LwkfynAi32yEfjWDQRoJuPpewaZaSRSANaChs5GR6WVebBbY5hUhaFZNN42kwt",
  "key41": "WKcYtLaZaPFRxNYgbP2ikpFs4KU2iCTJHHt3UwZaTieRbeKjPmFmjUGSCFQZKLptUnTRo3zsSEiLENdkDu17Q8u",
  "key42": "52Aa19SXFHs4jyC6RSYa4Jv9Y6dKNfeo6HYK9koSyRVy3BhVfGxNPS5XsQ4pJapPVHmhYAvfxttpnFu7bfJV1YmT",
  "key43": "XDZULc1Fstx8sR782MhN9wqiecexvk6vmnNZTqjDEEbFfUTznjM5u83JtE5bpY8pWis1pGVGsWMhAmXDtiptmhM",
  "key44": "5BqJpycpWH6EfgKzgmKCv4PqTY4Ra9jbjqSvxoZMdVmfKn65o3Y78z264327QJt1dK4JdxrEcbiKrA3ehxXPnrkQ",
  "key45": "4Acv9M1FT1VAc31qF8249SEfMGfnL1ZWrdoBg1PYPmtH1T8H9rQVaq51pjfYXD3kNSaKmNaFX26M21c8FdQqC5QD"
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
