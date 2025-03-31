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
    "2Adrexw5oJnDAMbMAHwrC65zRGuY3hAe7xR6TRBDgUhnZXb18xyvamxGFARpqb5AZBCjBvvUP2mzxjzokFPRoiwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GHLNkMVJehnYooVTfNRyXFkhMUELeYjt54t9TjftWFDGUJ1ST2ENC9d7eVsDJtRyr9QLtB6xgGCjqn6Kh6WeZeq",
  "key1": "2w6ZQK2ttHhZsN4UURN7GxCkrPBYH1Q9bP4S84vq2uk1VzDAo4MLLoLDbqsoS6onYoYVdmNBtQ13p71uEPBDJdCq",
  "key2": "4HzdGYShky8JUvGW4eECQ88YZDCYsbN3JDdNSqfoDUnG5pbNekaUkrcZGK5U99YnMnVavV8HCgGaj6x77KqpcnW7",
  "key3": "5Ef9mwj57nmonr42EskNwA5SSxfsxJQU1dNDev2zMFnEu56cN17dMgMwrqHph3sg9CjUGNzVvVHYCAohUGLwXYMw",
  "key4": "3MqyygGufqCkkTcLiZn8kLV5qSkKxMrX22RzaZ8z1VJHMCx8SRbra1f6BKxNcwP73fZmeFP8VxmcSFJEVqeR51qn",
  "key5": "5XffVEabpT8wT2MUJanFNbBVDkRQa5SrSVLpnhRaKmkjZSbG3Z5zKmZnm1ARg3Xw3Mgr5quUeJaoVZQ8bZ6k3c2V",
  "key6": "mvjfiA5Rn3m8cAbKdAXtpbkdzc2VnEe1vqbR2b4bMoByKUYmi3osYELPSuczAtEx594UaRUcmgG1SCrgxAVrfZ6",
  "key7": "4FUBfc2LuGGXudk1gDHLYPtxEgBzjfpCLuqCm3iEuw3MRBZ3JX8K7QWc9WgZwP4ysLQbnR24JpDJMUpHtMVPRckP",
  "key8": "4u5ErR1LzoNh86vn6UakTt97v6SwocfugLNbQdSR69KNcPUczZuUNuqwCoRMcgdy9bAYVSFL1NJgddBh2VFHNHfv",
  "key9": "5w6hZH4nPDSzLHoKncSp7vWLXuAaj13f9zew58wxN4JVd1BrdEBZ37KkDu3X2BXpt1fvwmrhHaq8CoUE8uGS1G3Y",
  "key10": "hrYetXUoQdyHzgMwqJpbC5NaeBuXiYWzLKd7ua7Ssgas6TMqfHnaYHEjMdWN3d6Tc21iH9JpgTTqUgWkeW8AUzN",
  "key11": "5ecHA3PSQFaj6a57Yactodf37Kbkm7QF5j83ag6KJ6fMWacfX8BeZYpx45rfy63xfNCu2UjzwQuroqx1qji5rQ9A",
  "key12": "5A3gmvJ8iTDDc1nnDkb1XkpeeXJreyQFD9sBAoj42gV1srGJ7juoh8YyNb4rKy5wXmgPWYdAahkZDjnEauU1yivG",
  "key13": "5hgwPJitn12yVmr1hZnKFDe19hobvkiNAQ6NWi4JvDbF8Pjkmxd6GwHVDiTe5XWK74MRyWC9VpeeZ9KE9UHhwMCd",
  "key14": "HjUWTgiqiz1Mwsg4zyfuPHqjNuV9DgxutJcHDpFT7vreV8dFWBrs1Log4xq7AFPTm1y1Kakpw7swycdRpE9QGHp",
  "key15": "3WcA2b3h3ezKb7EbftnFA6wunhec9ZK4QuCDXCgQe7pgroPnmG23too84fjCg5LsqAgpEgYjDYFFeLfrNHqxbf28",
  "key16": "2SufNEcJaDvuwGwUmippoefSWrELzdFiP6NTcjA77Yqbih2CQaYNCEkBu3FTpW4E9pAJttndDpv9L18RbkGB3GNQ",
  "key17": "66vRUQ8Th72McXJgnHp4FRXQtoYnWEBT2iFCY2zdZqGq9p617jRXJSixJzmchDJNyeNKExV5y8ytb8YriEUKcSCE",
  "key18": "x48ffYjTJCN3TvxftMFuLF7aZCA3KfcgyezzXQ96CALrtoTY65eB9EhNhJjmAscbqG97YhN79WFf3PsX3quMVXp",
  "key19": "5uomrT6T4UDycRGsbG1DgS8Wyx8rLpqk6zuqw2z446ZPgVySewejvoGvpFCpkyH7CPcj3q7tpoofbDWDGKCPDs8f",
  "key20": "5XFmzHHWnpxqbgzfxVTunvPzg8kYAox6Y5x3gBRYazPYbh8wq4mfg8tWSM9zq7GvWZWRNb2vfC6LruZHDVxJTNLw",
  "key21": "4T689o8CHuEYUfDN3mZc6obH3xsSo2gHT6zNTSvibV4rTuhVx3tDg6PGtuJhSxrF4iaWZW4yRhncocczbeEb35tk",
  "key22": "3XyJqk2gUDkmhYiNBebqwmyxB2JiesnTSBrMAt2B3Wgv69HvJbnbKDex38u7WzwpK7eCGmZ1oQ4JqrnyPvTyDd6m",
  "key23": "EmdTX4K5YaMSRFQrMvGw9JTffrF4sEMcWFcxHEDN7y37xVtpcGpWEUMMNGcaTHAjqTYK5JS7ZUjDSubaahUkPHb",
  "key24": "Xr8nLgKiaJCvgqKBbvKfKacc3qCnd82RzBFwpASjdtSnodbpVsgBCaUvuURp31s9pAKBVWjWDpmoeubRC53Sgt1",
  "key25": "4wW2N6KLT97E97CWoDjtxaL9G2dL5XRX5y8UQNsgDy4Yd5UbYqZg5g9LAMCYrRQpThXVD29hPh8XYZQFAazJErpm",
  "key26": "gEsD7kTQVsd4s644FPycUmvQMrPjZuvjMfvjq5SD4w97p1JSmrYVfMYdPg1cYMntzAWR9ouVJmsbaGdYBCTmoW4",
  "key27": "3VAFJvxNEnSe681Y2PHpgTsKGaNn1aSCJ7L9ieHr5oYHnX3uzTHcka6z5uenLx5DcxS5hRiDg46EUdc1RWh9dD9c",
  "key28": "5vMq24uvVNGAfwkCJDA7VJWMEgwJ1cNQc8DyLG72VypQ1dpJuY3eJYQXCgfc8UbVTuyqcr1TQiny5CNngFUveUmE",
  "key29": "5hTo56YAhx5aHaqB51CfRbo3DyP7yJSZZpL5pqP3P8gtVxRRQWg7X5YS234h5CycuTPNQps2bfT9dHLTx6niZgcp",
  "key30": "2FRf4m68SjDCuDyLTGWgsFPQdc5NX7jieR4rZu81MaFphnKhg7yEMTWZcQ6T95NS28Dhtgifpx53xxFpTVFJQPPN",
  "key31": "32GyEmrQZP8iquxTWQuSiqwNPJua7qbFm5ZeyN7dbSxDm3rmiAJtRpwLgxvziH5WXkm2FHdQhHtRyNoB9ZqrKCZG",
  "key32": "KBrhbxPGcWsgFvcfm5bKS4VutKDnfsNwAcaf41ELayYEGrVyF7eanZ8mgeuWVc55JUAXKuDHNvkPjBAYfErm2Fk",
  "key33": "3KtyYAMfgH2BR87CJ6QMzch6TEheM4c4KkBeQofR49UkKje9q4vawiMAWpAfZxRqYLkj45QZErWWZ9HhVM9dnHb",
  "key34": "3jD91V2CvaHRfzwYGrf83SKpGikv8qTukMRxqDCLt5QvK9SmWHyL3kUtqJQvotQR9a2EZPQRBpjGDYGLFAmxvwY7",
  "key35": "UWHAmbdisegWaLqdJn5hxeL7zxP8iaugkYuEibUT7ELdy9FWN2ZtvS5NYyyCrPNq9m8BRzwJHkbyRKDWjtPW6Va",
  "key36": "mKKCFMbaunNvhnd2fiaugtzQpNFNzdgerYSsnkzVRxyuieEzUY6Y5ipwSDfVSujsXqN7Ts8icfygDzK19p8VBWr",
  "key37": "5JrfBvReirLFhU2XLTeGthRSXF4vuMxqs36gfDbstx4knn4bC8vt89axncYK5AqriCEPbgjY9F4jyEctwupZaCZX",
  "key38": "2rQ9jGzvWCu89XryamYUBGV5wyhzPkQn6CuxPMQxeN37fGLrPsqvF4ZcAJdjokzo93GWEDTedCqa1TJAVJ9zrN2R",
  "key39": "4DFyZxaUGHT3srQeLqYQcS4fcfWFtFmY8ZzX94agQusVgGXLmHnY2fx5n1AxUrfDatxUyAuBNumQLcAmqupnRuWs"
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
