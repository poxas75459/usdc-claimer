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
    "2zccy1XdQuPrJ5vfkvT6GQH9JMqQ6bJ4vo7yUz9dA6984xAokGNEBguiwbEMDbjXF9rKU5hxtHasYLvU6pGvva7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AUHyx7PnrBDnqyyosEt3um6oWXRCrg8jzSqYdZDx2GedTbHnrBxPCuRAFuW4Hd47dmtCNj7D7Qw6hKf8WPh6gnC",
  "key1": "4JakvCwsmyyZtFuk7oq3zTpZnYr6S5LT2whu2cTPp6BAqBf3P2ukiJokjCJYomsDx7ktg5EnGjwsEm2TpyPLjypB",
  "key2": "23mSTPwwhL8Am3g48Sm9Qf8zFx6vuYR2B11PTN9N1A1zA8n2A6gHZhYns1bp1MAuVyTbNgt76sMLWJRFKwvX6ubp",
  "key3": "276zgZpf87PA2jJ9XWrMJzKpQ5AneknPGDMQp55DoN2BrPoSFEmA3MzyovQ2ZXUda5N6hTDEBnozw59ZW9MXkUsa",
  "key4": "3EkkiE9Up3BiJ3JhTVXx4nAZfKm2xg74LzjBqBU7uaigHh28on4uR4RqybZ8wVY6tKE4eFQ7ovBhxfa636tgQUAh",
  "key5": "2hDZAE4TYhim6mbWQcKAJ1WhBzwTt5i7SJmWBYtoTox7w4WxqQbT3vVfoonwcExjgeHBhvczcfBQEqTgQBRaH3st",
  "key6": "4vb39JXLENwkhioo13LKJuNMDJBXgtH6aCLkNTnmTp4LEnAcEqj3n7TgRiw3a1QP74pEjZNab9xe95WqCRGZkWcW",
  "key7": "61Zx7FcBqsdeVWe1T9W1MQSBc6z3sEje2wAxvooXa7un21hosNV1duNd7e93rK3PD8cyVTWbdbVDggeb71aGNsC8",
  "key8": "4kSMdTM6wmNcbRP6GEJtQRarYu91oJLDA8MFNnb85AzUnJ9jHqSAoBDspGAJV54PHJCwB2RqPZGwbVJBmErBazWu",
  "key9": "sKyzpjktz9FuQwv1kGJ4yhiKyKREv6XUNDhdbx159ZvDcHKxeqtSx5xqfuyyzbTQHeu6G7v3iD2mZY1DcNergSt",
  "key10": "4yGkMGVnweSKnRtYyR5Un6XRE7ihLaU75YURRu2qve2ZgJ9FTcyxum8NDYnLTnYzjYNbPdhGcA9BmbDUzV7rb8n4",
  "key11": "YTkRiUZsFXvrfnAMa3z5guKhwKdegAmwzUwNMaT9h9B5Aa1HNExz8jVg3qzVbEDT5cLU2zkranYYNS6zLJKXU9p",
  "key12": "3fqUzPPVU3Dw1VekHz24qd1sXwWujgWW6Cf3BzLz9TxGPr2oyHYo626vmBJLbrRh2TXjMbdicwfHjCi2UrTHmRsL",
  "key13": "29jr28AMhBwrH7XbQ7VETgWV3gxV6BjpHFqonmKzcJrTwu7fsNp4MYtzKh7oBq8uaFNDQZGACsb1v1U124Sr2Kma",
  "key14": "5XcBZbhQ8SrFymzNFuPisVT9s4AgVb4NfMxEx5QbHXrzxPcywtj5EuZUwf9b1YEbj9dCdTARK1qCHNEnDYn8eRKh",
  "key15": "xE5QRWcLY4t8XHSw2DGMnNDra1ViT6777mJdkPDZoXWpbNvN5AfCN7Xu1uXHsMTRJ5AASdPXamBTR4y6866PK99",
  "key16": "7hnSHa2PMtnbHxRaAbVMPHu8SYAfRRzEDRYiRGQB9tDiv5iWs6KuQzikXFRFdiQLB9EDiDAN6uZJ2sNxhJAPpbT",
  "key17": "3rAeqfBJhimWtMGem36SrMSwh7Qd546TvfzBFiQU61PXNVCH4tTBrFCLAKJjVpAF4j95UBMirxUXMtM9du22uxDA",
  "key18": "22mx848Abi1tfVCBiYTyKcwciWxynf42UgFC2ZxmurBwrkK8aUqKbL1cQTyhwjw7xP7AaZVg9Kqo4QVKeMKRtz48",
  "key19": "5dKUokSTvWZEHogG25GzfP1XgaHMpq3zm4Nn6YsemrF7Sh7zEqbwtNuMYy6sH8dHHCuHAPZgspBC1wWuZu5XfUqt",
  "key20": "2HAwv8WeJC7fkWk8XiUnjF6KHstGwDEu5Lrqgw9Siy2f2PBQzVzDkCcG5DRV1dTkS6zRNaTfvsHyrNqyYKfUwypk",
  "key21": "5phx4Upm71FCbfqLkwjqEhu5RA2uSXefzMxb118ZU5f89KFemN8LcosBGsC2NczDp7gpHF1GShvn8gZhjH3Ps4HE",
  "key22": "Cbjsn4dW5hhZkYWMqaqvAJYmhFghRqyrcZQQC73fAJ7b7fUKLR6jqnm1mP5xSDQMQLLaq3i7ApvuP8bhVo4jgT7",
  "key23": "4E8a53jUr6SA949DQ4NDaYufLXQtcAmb5zF7HuPWVWAcEFheFQggZq1ZikP2QGuynt2mZsim88R6dWBUU3gfP2Hm",
  "key24": "qp8wM4Mts1eHpEVLZTVaREyEmPto2Grus8dC6i2EsB8uJMBPpdS8V349feKJLnqpX6ywWZRW9U8EmsZwb93PSz5",
  "key25": "3Ap8Ny83AJaLGdR4ydjdLsGyVJGN8Fw2eCytcsMvKpdzDkNWQG2XnKQ7sNwDPojCm5Nm9HH1rn3F5KxBZiz4iTWq",
  "key26": "4pfHVTenJ2ncnX3z5qwToSrKjmfijV17TdjyDqg41emcUUe3U9oTVKP3t2ymWC1UfmeXpYWUgLPac24rNiUcHNuF",
  "key27": "3dSAF1iS8KXM5nALuixPTjdzvg21LZV4auPcum18np3gLHrrhvs9vM3FxrTSoGzN1jPALgysoKmF8cEES4Kgoeap",
  "key28": "fxxhdNnvTHe197Z68dAazikmc5iZVwRsr9gvqYzMCSmZXBDb4Ts7uuESGjUsXCtiSPeF6WED5zA3vPLNnoMRB9i",
  "key29": "2BHhsvD3EEHYv7BwrskKzoL72uByzepiGYf7iFsQaMvTn8wVPQLrhperBatrPk1qrH39EiQaVZ8mQHw8HmKk7bMd",
  "key30": "5Nzjt4gj12e7XSCVTdgYM3jUoPEkThxn6vTCx5m72tCwuLqutkyy7nNPqZZF2L2YPhzqn47SLjN9cCtVQcJSwbWN",
  "key31": "BC5YqwigWYHx1h9o7XyA7saSE6aURnwEHWVqbQptBRsyzA1k5wufeh8Hx8Kj9D5aSVnhoextN7B8sNpe7C48Ajv",
  "key32": "4hb6bGkqBJ7JgVhSe86NCVfcHbHjApBhciQNmJ99hShZvjRGZyyJk7efPwAoqgH35NkMerK7TFDCSy9pnQissi2a",
  "key33": "5ZRFs9CYHh2MfNyjYZPwzSrVk6BcMdh1rZvPKcHPeKmmgYvK5uxCeg9GhBupZjvNekG2jEnjgssmj8SQ32kJxZYK",
  "key34": "2E2M23yu1TyypT3MfCYktwGbhaMdFkgLjd2B9iXHic94oeEYFqsiMGTrK12B4V63JRWraCxf8WBwqaEDHc5BaBXT",
  "key35": "5vovPasWQAWXofSCjaZJRaGDawaaDh5AqdbruXWHC5NXGSPJUTvNcN7Ztt5VDu4jfpF1bnaGikKZA6zUgzN4AuTT",
  "key36": "4bPZw2vafWVmiaRuHFPfyAGJYQXqqXEUdEYijdc6yeg9QVQKx5CPaF5u6jAkNYYc48vVEJLNbUBQDaJeNjEmef54",
  "key37": "RxNDr8YYaZgqfJWzdjyQjbw1ra2NSDCUpZBxyXHpR6ze3GSWtrSUYFDssok2G3axXoAoAMSrKjuqsfNQu3nqBye",
  "key38": "4X374NxoGogLG8bHyH8RRSBbWZ78bc5yEVUqZNQe3KS6PbEJkY4ijrn5tWxnTwRg72Q6RsrfUnP9PRSzGCEAoBTx",
  "key39": "5cZkdHwAgeKmx7TJfUaAjFjyk3JUoHZYj2uwBqdCEwShFKuo9MaN1AT5ys4vvyfEoxps27PFgNNeqHyYCc5LD4q6",
  "key40": "2LBroDoVKaz4wNXhHzc1ND6NoNZBSdZXSxQEuxToH9SaLh6rDEocBwR3dDHDGGHC2VLYdSFFufruTCDrrKGcwR6w",
  "key41": "3ETBkpobrU8GRCdRT8ULv6LQTGpLhxTDiDGzVLmezZcwf1YsXaFgRuYQvVTzd6X5QxJehow7a5SpAmLhHBvXzM9e",
  "key42": "3Mrrnep2kDaK32EgMzWWeYh6S9aA2p6SRG1LVEEBpNYVo6WES4KjxKePak37A5rxtoeFf9RGfPhWdzYJYqSS2Qwm",
  "key43": "3reZGcEkpbEkHJjyaDbHrYf9pK8ipnf2oUwnQ32H68jaLJJhpcbAi7htCgArw8X1GSudHLGHEJZFqkC93ACENzoZ",
  "key44": "55AKYaaEC6FWyJqa2jc5ArqWSXyPwRksAtyedSi3CVirnWs7kJ9TRQkzAkXAfcy9uZrBJDDhD7kP3XADBmsucvSp",
  "key45": "5rYKYAKH8pgnRqGkyaquqBhwAmj5R6VmrsuZgmYLKqKVXMXZ698ND7fv2q8z87rkiiaSgrTdnUJtYVB2ub4y35wx",
  "key46": "2rRA97PsvAp6Bhi2LQzSUnmY6CwjysQKX7EbDYmTfiZ6oMZ3Fi9cxPqu733g1uk9rMNeQSwEge1ckCHxiT6wR1Ht",
  "key47": "65ZdKXSQB7J68daufiBWjVDRuXMHjGnH9KDoRfNW6N3YgwAUHAKe2tSG5kQRYQPmkDZrbC4spU3xF9H73KKpNUFr",
  "key48": "5yrMmJSFJZ1U6rVkdFSJMEwrNxyENah6LyFZU5WcCwA8NFyBZ11keCztTe7MVvuQNWb6Sr28hMqvpWgQbJoiBjSx",
  "key49": "3aoKaDwd1kXf1qEevgPcRkmVSkv9c9TUCm1nTraYaTK5FJn9iV49hSJthknvERfMQwAmAJ4VPJpo6UjeF2tdk2cF"
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
