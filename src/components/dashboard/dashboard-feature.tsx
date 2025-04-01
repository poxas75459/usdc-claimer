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
    "4RR8A98Qhv724xX8BwBP8GiqTL5KVQf7VVwery6rHmrYGpFrY6zSzbWEuoFLBvN64TFRhq1ppGpT4gxDpAs5AmJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "497zNdxTkL7oa6Ewpw2rwqhGDgzswzezrJYJJrN7SHDfTTUGMqRp2kLgNdPvKTWC1EnAnYCKv2vHVdMYWQ1VtRjX",
  "key1": "36gejds8YLCUuEuoDwtvaWwVxP41JgjPGpsXjtnEXnf4897msVqXWp432VM5nEnoNom4gF72GXahyYYyvirkd24s",
  "key2": "4iMVNqvCRLZDGJbzRpygyGTuruDB2TnfNZgshwBEPjDbXnTfD2FhrdXm5RxPC9uVwHmX5gRDHoe6UAZsojfJjMQ6",
  "key3": "3txdjMQtC1Tw2QTZXvQGGRev2cudS9agFTQMxK7YaSmVFCGXQaWG93neUQpAFk4USTefreYfULm6q5YjxoCpnqNK",
  "key4": "dXUHwPXzsEf6oZyC88ti3sy5i6RoSi13e16X3FL7ufo6CubY4i7zdvMZardtNfJz23cNX6yn4GreKx8nyizqvoL",
  "key5": "5XytKcBx2T5PUAUX1UgoRuBEbVzgTgAGwoYzae9Bq9awH6f2Rvmuyf1KriuXFrQteXZPq8QSixEoaPmyGWdr1Fnq",
  "key6": "3cEAXE6fZFbU48Q59x3MkXAuzJthfZdK8pt4SkbUfUZHFp6aTt5VsHUWP2e8KkpWdBYaJJny4uYzL2aqNsAodF8m",
  "key7": "RcpCuVa8FpX7zH3KhS7rSANnbBKShgv1jxRL6QLCUMmPRpDNrHB4b5PKKRQ8RRipXv2ZpWZBm9LesdKeWsELtYF",
  "key8": "54TZGQgAARKvxuDFUXGFH8kN3GMNUkP8GMFS1W3RrrYLUsv52uKHA7sNKD5J6tEvnL9TYCKmyx1RFXuUtx164Xhf",
  "key9": "5jL8x5tQeWV1Wkzh4NNfZnFNYca6bDQSFvdHt9vjQjFHv6Jw84KWSrqSEPoK3kBcLJZkKisJS2NfK5FPDiJcA8Sq",
  "key10": "3SQiD57gywgYPgmkz3RHwWGwtntTipAnSgseFVaNGTpiCtaq5kLv5GwMFv1uMBoYUf8AQK1EhiZfzZoip5zDKv8m",
  "key11": "4GzjFMTe2u7FWzH78yL1E1Gu1fWhfjWNzSAWjAyAk4XZqjDYbwaNcK9dYntZ7XfRpPuHjo74egcfxLak8jCDWa92",
  "key12": "3A3JXmcaFaYwEfzMbC4XD95tik8pzZCDwPWpg3R7Cw3AWAu2aFBtVncdK38QfdgfGT1qe5wAm6ttWU2otFFCkueP",
  "key13": "5CxgyqBhP7aFrnKnRmCkhap2HJbQrs1DEccDkN87aHarAXknqG21NHczfsyxERiDan6xzsJRDQ6n96Un9PLruXM7",
  "key14": "xdLnZGnSUog5stDfkbFTuqB23MWZGThcNjUb6rakNAvN8StU2hKJ7jH2PXjRLdAVpwe7XXuMZce44h38BUNwEoU",
  "key15": "3RVfeE8NqZwcywYdreWZdFomiUeQ9LtwbBDAGzptvdAPseHsPnt9S2zTPYk6Mp9rmrgdeunsCEefqxkcEVft7Hw2",
  "key16": "rzMuUAbq7XX3Hm5AoLnhjXH1QhmtKwWnQar8bAKwivmaLS71Aygot1u4ZgybaSxdRLLrfz7MqnHi8PkHjeindce",
  "key17": "3qqmq8VXyoKYGYV7etLd3f4VSnZhbFmxe1BnVgprGTK6DQnpfxTVhPmZ2PE9BcRken1J3o3HkZBEiUTjBjpY2Eym",
  "key18": "5Dnb3jLQjgLvZtwJYMxkWsPzLAWJmdj63xHUkTdJNeUShNcL3Yr8hWPwGHqKwkx6MjM2khFBue3gu5TXp2fJnZD5",
  "key19": "2tc2gNHQa1yzqoSjprDm1fX4ofZRDYdkXsVNdv4vSuWXjsenaWA8azko53SxtLDqhWh8FymEVP6owTUDNSwkTBMY",
  "key20": "4ANosEgzvV1iSVhK6viviR1UemSmXXggQh3CcL7PVg4JBcTKCCMQchHKKMthKM2WTqPMBzJc1WLy3sKxoxwkk14E",
  "key21": "2CyoEzx6EjHPdZyZDpUWaR7ePo7PKRi5vQ24pGxLck9mYG8GfkaA4mRmEGGqgNr3L6EmzDyncnwfizGdhcPM7fbo",
  "key22": "3LGZNj8oD4axu3WRXBtH2quboBBqvh5HU141J4wX7RaDQoe8cPbLx8RdH8MPjoo6cjW98pHiYrL5J7aLHaeerwgp",
  "key23": "2Q9VNRZKvdAUkKiwgWhnErHMYYvwPywmCAdTAJioPBFPW78JQbiqBBhDLSkUqsiNoSGtg9ERB5ZN1m3hi8RgYxDP",
  "key24": "zKPbKWczJuRyFz6mKnyNVaCwpRkNxZB9XonvBf6NZa2Cqh7z2EtHe5tv7P9uSff3HKv1UTmPhVdDvTyo957fMK6",
  "key25": "21Ew5AKKLqDGQ3Fu3PoUsMBeT9tox5BeowLmDnimKcAiKjhzKeUWJDp8aXqWtxe7C67f8vvEWwE5FYj31u6Yzkdm",
  "key26": "S85g8HpCcfWErr2W9c7Ka3hG1WeR9KzAGnzWkc7gc6ZJFFSQVnrdu3uWouA3Pzsayp7CVUQQS7yWtSjc5VZgrMd",
  "key27": "4PQH3KVDKSBL6JXsHyjY9ZuQCqnC8WYYQ6gaaRERKxDug1iqc5GHmeUGizNPs9ahn3Zui5ykSVRqjpgK6mz7N2c1",
  "key28": "27qJCyz5zsk1eHGFiV2dNQw7c4TUggvAAhReL195fxjUwQBykQLHeXrRKU3LuXuKN1X1AoCRy8M6PXEQxpriTtsW",
  "key29": "3ynsGw5LMLikRgGARDYzvPBZQWS4jHpyPePvDz7XnBdg3Xi2tVNM2QTzQz2Upj8c58a812JEYbvMvuVx95LHARBQ",
  "key30": "47PEhxfBnxiXu2ahiyUpiVZ2rr9uiSzwgUzhZMZR8U9mJ57nTPVfWF75ZKp5tAxwTAV2LYRGY5L5rJHKAE7SXe6y",
  "key31": "2juKzkSLRFMtVh4a1KFK1keFjcTLy3VQtVEgrQTDyyDQR1ug6Qg5YzoGkvKNtufAncGhnJfijQFsuSExGesnHiJh",
  "key32": "2DqwfNSB971XaeW1uHtDVyF1wKAtU5ifYoUjZVi8M3rdKhbKqFXFxXcGMe9ak2YXg2ecBUGEfQucNh7jnHtPd3RV"
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
