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
    "2Qb6z5m1A5QEurVqxHDbWwqZcvYFLu8CLXyNbskYvjZ4kTSQkmbnEPuq7bGJW4FQ3mHr3MYHubKgM2adGt3oRfhH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4udRRYQN8esuPYMXL3DsbRDjnPC7fDJDoDHNK5dee4rBSAdBrNEd46eCKFiXxQdcFzVuK8NREDE3YhHXthKKQAPb",
  "key1": "35Piu6XcXnYKEQn5Bt22VHJdZ4xQLMC5ktFiCaEWeLy7EsmHnohqv5qYV9y8pKZMAN7gyRfzXnKTziJ6jjw12TS3",
  "key2": "jCazURhgmA2Qr8tUfUdZ1c4SdrPnaVXQv91r1tENLCaAcgGrcNk1MsX1eKaAzM8zi7fcphQbvXzJRNBtX33yr9m",
  "key3": "5MWRiW8PkAxV4P9LX3TF3Jz6s7GA42pGYCz9pYj3UyVeEXCK6PiQ8VeVd8KLYXPtMyCRj6MX4NmsMyuhU8SEFq2y",
  "key4": "2RP59518ftNnYdQbKCe4pSFD7DNapPhnuwMonwQAGkoh87mQ8UN33VJmv3RvbU5hq48a1n6dgBxuzihbJuc3EvjQ",
  "key5": "5Xi3hPkDwRss9tJqZDY3ARNyssfG5NSQVGFa8bVd7r2Ei5x5o9QDvsHDqjZGoA3hbtx9yjzqokTNzqn6EP7p5vPp",
  "key6": "5ZEf1K2vXRXiK8PL9SywAKkDASZwQWjKpetyZJ5kvo8d9Xd8NpCJzBDeQk4P8BwP6kV7Qw2XMtJpsa4cDbJBjwMK",
  "key7": "2SMrJjw4GaP5gEqB5tnqW8X99pXxzAXPqos2rN8FXwqUZuAdgWuisrN3uX2vaHgQghUQ34dLFELUEWDqjdipK4gc",
  "key8": "2ZXGb7ZAEg9NTcG6HP8hcUXZYgnTvcEQdEynmPByQPZQBzYJTAHDuTuRj4bUVu5NacVFJVmdjto5rmnd7Yqg5NfH",
  "key9": "CrXEucAxUE3wZsF2jRTXWiTCERnWy1K6RsFb5MPxDnDRNiqH84Gjc31Zpaqq49H5zPx9aTmLkT1Jstivq8LkVQC",
  "key10": "67d6kBBRmKoLmpcDshpKDaBKhbjw78aSpvswnfVQu7pGxHn838KFHgzLrPA4hgAf2ZFQDa5bUWQ85gQGVVh8EgRN",
  "key11": "2GkaZhY2pdPGFJTTFTtR696rK4s6uap3p8i4HyrPLKqnziFfEoNxYe8qcVazGQZs55pi2oSEj2q39LQvyWHn5yQE",
  "key12": "45TGv2Mi97LAjCrn5EyUmVaXBUigruF87wgmgdi1mqK14Lz9CoPX3x8FrWFsK6HUqpXRxXYocMgDXq2deg77Vq4W",
  "key13": "4TToidNrcVLamhScAecqGFCggzgK3D3rduiRSJyZPGqdB7MuPLG6bsej5d64qXYhPERnfQ8WdX1pYpiLQVhinyR7",
  "key14": "2Deu3tzBj5JTgeZxi2vsA5xJGuoGkk7kGYmYXnouD8Lc2zpQsBksN19tp7vqEWHMJ6aCtwytUNgzqwUZ97TprBJ6",
  "key15": "5BQpEdrjnUQNNCixt9gWV2nCEZiMRqM8GWhGWKrNFxZUaVh7Whooh8qSDQ3jptNTiftsxxjPk2Tp7JSFUzFRnTXT",
  "key16": "3gEiyznCLmmRQaYhSea6gNbFy2pscrdrg5iNQ8gNCsb5z3T9pLifssVfjiHEEQRz8y4Cewi5qZXJZyVPmjw4v5hQ",
  "key17": "Fg9yMY7YyJGFBvgpctFKb2GRnnsfXm8mA8MVx59YF5LrTjBTDpqYJA4Zu6q7Cc6wQdsJuVqB29ev1M25EfLcdyv",
  "key18": "29tN8efrvYTzR5VeAtszQLwacHzExht91Qpf2mBLQaKPF5S46Uu88E9Hh7T54jWfLsbUiNZqsuNfDN9oK3SLbPTZ",
  "key19": "xPM34AcodiPC7rXnWSegd4GnZuWjrCHeZa6zDiLWRUJGJZps2pStiXWyHpYpPPn8YDKmGtLt9yLoupFNwy46pXw",
  "key20": "3K8vuJBWh4kfV9UcyLNdBtPYjrUc1usTkcR8ZucA9GEkRTgjebQPtJQr8Czv3j1KaXXtDxSANtnUg6sVKkmaafnq",
  "key21": "2ws4byqxXytzLJE3x1cB9n4Qh6TANViqC8AqQSQi9ZC5HsRnTgbD5E7xu4nZH7onotz3uPt8ERATj8ZV7iLp2Jrn",
  "key22": "26vGu2zRWV1wAh8FJaoWviKrbJYJmfi5wQVxtT9eH7kHRtxAJ9rH3sAG45J47Ai6QTJD33Fnsa8TfijjxENeuLPJ",
  "key23": "hcLw1HGN2GuSRKCceZodZUD3AL7YcnzoViNqaJfcfDc24XaMvNHJ8ykKNAqjRTankHsrNgwKmsDjMgubAGr8NF4",
  "key24": "54v42LqrfEcZEFaHi2UHmS4a3LaH7tcg2TdcJAqvYRhn9eDmgyaPPom9SWnd3oLa6AsUh48DYAnQmw8d4Hk9GYtX",
  "key25": "3aAXxce8cw7tJyoTu5jBAZU377L5NnGSd1xHt24RZg6j87DJETMoUWJiCHtnNWdZrW1AMyGuFFgASsE9vq4DNVz9",
  "key26": "2EGiJejH9iedre1HwAwTFpXmpLsujgw3BdfAk1FHR21cYEgSkFJipHDS5V8eoikbykYmGmS3H8yA6seH4aXaZaxd",
  "key27": "51X9QsD9cbi3xWHR6SMa4i3vKCoi1XLxcyXwaefevcfLpRbBW2ZJPen2PfkwBXyit5GKPERHeXu2Z69XS8ocrDgf",
  "key28": "5mdYHvrcrqRX6PLAwiAunEoVVQ2QXPDWPkNutR4GToWBsChLXyWMyaDuoPAaevbjnkhY2XfGf7eDEDKDDzRVLfAo",
  "key29": "3e3VyEwCVmYxfwjtxJef4vy6LkrbQd65KyjZSUy9D7pTY46M18hNkfQqsisRiodvqaVdepPGcHM4kWV5BCX5D8P2",
  "key30": "wFvwCehWpegfuURrERagiE6kCDTibFB3spd1XVTDBnrrj98e8P1ZL13TGh1kHpSArayCg1mV6beyhrDaPaDN22w",
  "key31": "5PBroQyq5MBLqVAyKgK1LwGydJv7BJHq7YgSoN311cs3qEU32rijKYkLmpPYXGZXKkDnBzYwYgWq15f7kjKPMwwB",
  "key32": "3mjnesNmscRPovbqFFwmeFsqMr7eWoby56YZcFm3tCiF4wP34VuGwB3gvFhUQYm2Zdh8j8BYV2wCxso9wx5MD9zD",
  "key33": "rbeYmJsK2YjfcFW98d9MjuMojD9AsEcjVkfBGxU8XDyV9UL62aw2f6V6Y2gzoRRheMmH5ZxjELHXFNzXe4pFojf",
  "key34": "671xb4BUvLYf1EA7mSh9MX2RrPQid1ryCDu8T6uwXpH4jVBCrGiuy2x5zqq1c5DchkFh8LJTfZ4EkTmv1PPNwiUJ"
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
