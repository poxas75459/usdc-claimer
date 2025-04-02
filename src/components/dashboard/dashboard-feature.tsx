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
    "4RC2rsmib6wfFnsEHc7ytsYeqNZgnS7ksPWAYRvVyrmiFwgZJLvqf2ajm32wYpWzWav7gg5y8T5Br1iHsYwAkY7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R11TGdM7N22KwRYwiB1zWRCm8yCbeP8hnDkPZWhd1kzxnRu56P63GrpHNoBmWkJG1fptpBDmXn3kiubH3ke5n6G",
  "key1": "5kfxFbyzfsY5yHC1dMZ1yE5pJnvtjdmeHJmrVb9FiqTfSPyQ8YnZkxVvX5qvLa9K4whMguRmFmKXPYT4Z1mmoerT",
  "key2": "3fPiBf1uZvZqERSHFi9Tc1F2Ar6UrSQkxXctzR6QvCptF9XHg2uSdg2WJKwpukK4GeRHBHSgsfPYnKu8QF2mF4hm",
  "key3": "4o5KDwDqfvVz3zmFX3CNDSj2oJivioZuHVjsfTdtfigvoBoiRgnsMbNMAo9ywSJbTGFP6Xan5UyEGGECp3ZnGzKx",
  "key4": "5H31d3dDhdX673KPk9aUiWKHfKgsGBQw4eVmnhF6WHgp2j7pX4jDig8Bbvqk8wxEBPjd118EbKfjUfbdE8LDWEQ4",
  "key5": "b5sLpQerMbuuSVQn9Khimj3Qo52CoBnxs4vYC7sidXAwfHAa9CiKpJp2XmZ1haueN2nkNbpRMCSmK3aaF8Uz4pe",
  "key6": "41VwWumv3Kdiap7n3ct1ndaPvVhJzq3fAMseuaUhCJrMu4cdMut14S9XTuRK3y6ycFGDsDwtWW1QAKQWYo6HKs7R",
  "key7": "4hk2F2YEpJrmvLefmtSadDsnJHvYMdu9S3G2F6dPmDbB6q9U6LiGTjKJNKx333TUkoAyMjTQoTb1EtvPLYnvH5t5",
  "key8": "3Epmp3aSR9nyqUkHys2u2UrJd1Dfn9FMDRrrVLXbcLT6HvHeNADkCLXJynt5Hjnb6xPrUsk9jJj7ZDDJFRi9qG9i",
  "key9": "YptQc1hVCy1iUP4KbydMdxDV36niPYYSESrGuyyNCpZ1tV9X8hJDPvv7fPhKsNT87p9QpNiQQk6j78zNoesroHW",
  "key10": "f8VxzDSAHgXCqyMBcYAvjBTHHMoApBokGMA5WNoCasM3SqrrHpMJ8aUPtDn1iimBwKJzRxBemVJPhvfPHopS5vx",
  "key11": "3VrLdu5k4UZtQej1fpsJciXtdn47odA7qLeGjeULqKoshA7Krhv1CZT4EGAeEcfm4VHbiATmZgjown3oFqCsJk1U",
  "key12": "5TXcVDde5YFwFdL5JcfyJAc7HVD6Y85itFZf4f2vyfrGRWFRyRfi6nhPwWrxWZCUvADsUkJomt9Q5fwyFrSmH7PR",
  "key13": "4vsCJkVHJqZQtwFY8r5KNErKkiPYef8QxnTxzFfe8BoZmuCCWJ27cfnkxUNFdpgDkzjavMgHnDdnDJ4XeYqyFLUx",
  "key14": "AqUjNLm5LXwdq84xEzPYixywAj46aPvs5pgyTFiGiVxDvj77LPGcVKoZszWmdxjqzgo9MCMYfLbS5bYZKjM26Rk",
  "key15": "3mjHpFqErtTT3gfVB4gP7FvMKHSfeudCVr7Bd95bNDDC5JZ8TiRe2z7brS6P1HhzrSqEv7xEzwD7RBeeqKfgW3Yf",
  "key16": "4J9QcLZGPme2vVyYvFZ9iYRUVUJrrvcahf5NyrEgyFqruf3NaZmHRT9c1SyeutSopGZW7kaW15pfNrudhg3rt37P",
  "key17": "gX3Rdj1nNSpinYZi6CKSQ6YTKpeT5DwEk3RoWSEzR9McFubTwbuSWFhj4FxAo9vzrUaNJWZZQsRZEZZwoKeGcC6",
  "key18": "2NNubyw8pzQespZjF9THpypm9wEGj93DMbgpy9PdpYWz2ioTPMSbcFoLsbokHsxZG8WeLeUf5PhVBwwTUB7RL7Rf",
  "key19": "64vbgqPcChJ9FU1Tfp3mRoqWhYr9X6FJzQ87FnyYGBFjgdkCLQu8MQTtXR7TWyCQMyy9U5VrqihC2JBfgcmKgKeB",
  "key20": "4Cgp8NSfPKZweKypBNfiDNbAgZdDCN5sjXQLWqHTcJsyRJcM89eXxF2mqDo3EZQen28NrjouT4mMpYVGZprowHPU",
  "key21": "2X5C81mzkmtc5EppK3YwaZtiJ6zyKfw73rwGiqTeis9S6xenyZ6h8e2ZMrpRkCx8o8e6r91GPVq7EeARTt3QRbju",
  "key22": "2gu7rAtyZeA4aYHPqWWk4qnZRu3gktvXSTRKzHpwiG5xPF3haJ4N36TueZEALjKb99qc5M7CiGEdpkodHxdFvqp1",
  "key23": "3VwKKSherrbqV62JjfPPiFcrXP9zahxq4CLW4m4nLmDxV5X2LFhPdUCXRVZkxSPBzJGGdBRn7t9L1zu3Jk2ao7fL",
  "key24": "337A6FaDxqb8Mgrp5FWeTVFxDkN1StQYcZ5AyF9a2R2w9vJ4SkiBBVuk19o8bSXnQxHm2LrzcMEVYWSjZ3ATPUzM",
  "key25": "4aKuXcmBG1Y7pLJpaZ2sG3Ma3GASiLa8BSnhhp5ZrWyoCWwgqPYNMiGA7MhV85QJ7EGsS3x1PpU6Cwsz8ZNe3eaM",
  "key26": "54ar3GhLp5W75HNt7AC4Czdmt1LuJkGnGCvVEfW5zgtzgrgMgVUhvRaEyYSQbW2XvZrvZkmSL4YZy4o8Uz4ttExL",
  "key27": "1nePskxB6DPzeEyggobMF7Xaz6XrpTxav6KWWiJpwbuhhW7SRnNCVUf7j9qduXFC8H3RzivfeXtRytap5Dj5L25",
  "key28": "4YNgNToB2G2okp7Njyjr8oEpussGrLdFYrxWHgRFqthYbZj4erWpc7J7Gpx6UPHVcNUBmRt97y1sTUvMZEGNUPJn",
  "key29": "2s6VBddunVmySzMFotawybuTm2eJbYNhq2pNcVSH1SxMMUsB5diaeyTpmbrpqskpsqNr7HgrYPd2jVJkvXSytWQk",
  "key30": "vYy7mysDTn8tuSatqvRHHJcjkgRmfGXDonCZkf2kpKWSkePq9nCjSzKUiMYQriXaZJgKrmYWuezr1Bs6UqzFJg5",
  "key31": "2yipD31h33b4ycnCWD8CEBQrskTjREjpoSKnTb5B1RWqLCceVMmPqXSytqj7NxCz2XxSks55FZqj4bmY2pgWXDAT",
  "key32": "3ZMMptfkhrj3cYRKGUSkcxcanabPSzTme92jgnmqsJwi7DPpXzYsA2ALrCrXU7smFU9DcuuFUy4zXCL8a3Jnf24y",
  "key33": "5QdRQWa48K1UGt1FL8ZeZttBuJo4tgT1qoDZMXLMwNc1oU52yZhVDFkjifvDQWybzuB6a1Ug1Um6sW3r6ThMXt7G",
  "key34": "5ovSyDt76HyCr4ggrAC3dMLXkqEwocdqQy9M4B7n5nXTfZx268Ftqmq5yPGXSnLvsZnrkNhJLDYJ9RhN7BrN8tSw",
  "key35": "5YEcnioiRXxWVmt1H997kwD7rUvVLNh8t93gQBB43xRyRdnMtfChBAZWhyUgGeYarx2Nc9qg1SJY6Wjt5opaRW5T",
  "key36": "3fYZ8ASpf4bzzaAdxDxXRMSTbnxjqHiRejhW1KvZe3ECXjuvGronephtE3H1stHbHr56xFgJSet5a1TzPaQ6gX52",
  "key37": "29N4F3DGAK9JK3zaBuacdWpbPLWgkSNvXwHAyfscx7ocHwzhQMYu1Uso4c1z11FmWrCDVoZbms78qZ9tTx7xJo5x",
  "key38": "4jgaXg7S9r3EtyFZNf2Aod9K5gLYRYSyfia9sTFjZpTezJVmXQCmsci3r5nMnuNhjkcroGVdEsfPfSkTrZNr25eF",
  "key39": "2eiLJXK3QwFevt4f5qJGhqAgViugF8JccqgUnFNspC87312WSqohZPaet9EtAQYepse1FX3zTjKFhkeMBmmNLzoc",
  "key40": "HHArcwgzDhw9PJZEtUKFQfSMBvHKNvD6fPgyCaPRrPBU7Y5wkZyyrewv61FLZm4pmqxRgmzra6U85iiUkBm1m8z",
  "key41": "3A7M7Xok6gmD6VCcJkCiKKNHrdiQVVXJTXpYt8Gw6iiTKrtfUXNCucmRk6w3uQDwYDjUFg6fG1kNL1QeEcetVU5R",
  "key42": "27cJiuCbZHa6DFKfhwza5YQ22zVLMkKwJKRWAo8xwbFZyh8pUxW8uMnbTZZm5Fz77yxkJmMefFdrchDLZKuwyR9Y",
  "key43": "4U9joZNPmtGPZUnbZGX1YmZ6nFNE2Pvx8TS2x4pK1UosWYWDHiLHaLmnwKbkzXBygBew1NH32jw1KvYNAGNqYxxZ",
  "key44": "56ynLPM7cYYRPvH24X8hiRnBvQke6bvbzbRY4VpVCLaMy3QP8AfeYctF75V6UAkq437B44gVA2mdZ9LsQ7BArFcc",
  "key45": "2LVoPkQ3FmKLw1JpY3icAiuzyEnjGy9Hk5hg5c27pY7goaxYtMQmTiratv3Nue6KLCEzKwNTaVsXq377718zHQJT",
  "key46": "5BYWgtK9CtkCcCbBtCpsVkSewxRc6Dvo3mvox28fgBg68Nw2YcZ7vLNEUnYDscWinzX8ECKBtUVwJQWLGivSocLe"
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
