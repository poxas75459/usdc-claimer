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
    "3Vg5bkf1K1PFVyDN8hr1vZiyLVGWvdzYCLg3jPga7CpQq9gF1s7y3gHDvRPX1rgBisfkAZSDs9Nn7dP8gZx1Qs5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U7oZsmiKcQhXZTuLgT2GbaGVmAWeFUmtsRNwc13DHB7jEew7xPep27AeFVQUn6YnP8RdqCqp4UDiLqKdvY8GBdA",
  "key1": "39LjEKyiqirLs8CJ1dVzWwbWyT4Ji2GgYoPfdgaUfbrTGWq6389w3S2FyYDrJssfPaUBEFx1P9xJncQHhmuLYBbQ",
  "key2": "528ufKvnsHnrcEuzVkyGXf9uZLfw8ret5yrfviSPK55ftY6p3E5DRzHkRuMTYLW8dBevcFZ1FgWDnzNBydEKByrM",
  "key3": "4zR84MMyTp9ga8xekxppcVfAymqDYRTGCVL1QpREm5gipHaTBCdqCdhL4XgxW4Jt34djt17Tqzra8PPXqz9SXSxe",
  "key4": "4Z44mXXvVwrSmNQnT73Nxa8Q2kJTaiFMVhhcxCSGyfinfKAoa8CyKocreCPKjQF8b88D8KXdtfq91GtpF49c17Te",
  "key5": "2d2TtqoQ5Jf28iC7ujooz2trXvt4Z43XKXtvcS7u8WM1rMMHVFoVzHV9RjyRMqSaaBvYGexX9bq5wz1iopgoMFqi",
  "key6": "4wmHKvhU5f7ZhLihgt3HHdFUXfngkhp6DhVQveVmpLXryszLU7h5LEGCJN5EAHnRKrnTZjqmrqJm2E5FhpCVcgCP",
  "key7": "4iWigxV5s29ui3swL3kc4rqMe27hjWSFTWboafyQTM1jStHY7zic1Mk4scCtGmxXGab81hed5UWwpsCnw2TaaYv5",
  "key8": "3LR7TFQqPYtbB8uQz4kdG3JyLQDixMPJQf3jk6FGB7A11L3UX5GWxNGRF82hvoz8n4jkAZb93z7Jr3oj1rojkRhV",
  "key9": "486H7N9thN6mwXNASMmbnQdoPfR2dMC1DsPJNkKQAnX6bXFpmUHmMj35jctTSifEHrd6Qdm2k76nZwgM2uzjcsvg",
  "key10": "2YcPD6uaTyWxPhEWVM5T9u95QZaL2vSKiH5ev9B829NbrmE7ocEfuKj9r5c6QLR6kjVc5JMUmL72j3RKLQFcwAfJ",
  "key11": "4r8xS8jjz1LmwJ8sPJJsqy1JGg5ewN23mQdo7NqUHYt5NG3R6ymYyJ5NoHbMiLHvxJYfVMKHqsSu5P5GRnT4fgFk",
  "key12": "51d9UyAqafgZjkHFcstZRBLk4NA3RxzrLQ13vzkAA6P9PVkiHHoLQqmCvZfNck1ZaUCHthqmDT9F6hSiRWjPtvG5",
  "key13": "39NJs5SNiXuSkofkHsxTUpJfWsjqzNs8rnwhux6erLk7mQzmD5YdUcQPTCQkz2cJrDdLT2sH6Pb3JVSMwGZ1LC2K",
  "key14": "4sEm3UNs8481DjqssG19XTtGwMZSL9abaSTVgTaHpFBE5APLuMy9cfiPrAyaiWVyAPqL6A3o3rBCq6BrJXFBZpu",
  "key15": "exSsJd4YgHPjh2uURQi3DTRh9115gi881Ryg6dwaztCi9pmVxybGDzSPSLF4iBRaQynmoegYxiUpXtc6JxNkUcm",
  "key16": "3Me7dwKArgAyTvrARQ4scG3fxT28Y6m1imu7hg2zeZoF7eU6pHw9XUyXPg1zEzPjANfPLUGGRS2YZng7uGozbfG6",
  "key17": "2WXPY5pD4zEvb4cpEjnp1gbQSXy3yH5bESxJRH9k9XubXQQkFM3oDi51jhDN8LA7tC51CYogArYzhwkF2jQa8zbZ",
  "key18": "sjPxqFpqynZ2P4oPYU225tQfcfpy28gRyAnqAgzvuk36bgWhVjTzfxYaykc3VAfwwsHNkitwxJ3ptetCm3VB9cL",
  "key19": "3JQUxbkdSqjE6m4X3AkRskVv49eJGqFYZYkvTQUcEEd7QKRj3izTXbFBFtHG7ZFSVzgyG9uGCGQtLvEhXCikV3XN",
  "key20": "RKQ2nwdMNiyDwumpziuozHSFfkY1EEiifFowSfCrapkPJyu5bBauR3MVBLWqKk2nLNskCXYx8SMLZTBYneZ3YFi",
  "key21": "2vVJqpEchRVYtLrQ7FN8EeVsosauuLetMVXRfojJzCTFzNmX2kuNHeKsw7hwr1gHUoUw57uQe9u1UAnyHgbhq7No",
  "key22": "5nxb5Teq5hzMgwokBKDbtoehZGhMLDDgDaLWNj8YDCkFinsaAzkE4ygsKuErL5fDa4KjqxJJUaF524cJB6mvLG6h",
  "key23": "3jNKqbWLNnppGRrVR3F12FoCUSi9HgBGyaxwWKSNKyg3Nbv48weaqxjbGxr6LnoHyLDyFojrP2E7qxN2tGdVxX7g",
  "key24": "26XhViNEesYTqvFVP1Zr2fTDma9ZwUzqeB4Q8ESecau1njGtuwPBT2YPcA7E1UynwgWAVgpFeikeb7owoC6fSbxd",
  "key25": "5YYixrWoCrTFJ7a6YREyPDDCqYrWdRP58gnVoyeQUSvDbVxxX9HfMNpdvU1jySs4tLQg9grZNMZuziSEvE5MVsxz",
  "key26": "2jPX3WXZvHV3WxKrLggDUVY7L8MUfE6H2k1ooQp6NaV5KMjYAyLZRzg5FjZpXex8ktjibDUPiKSDAk4jRXz8AV3S",
  "key27": "2T5HHSfkjiu1jJfnn1ua3saS5Zu2ZZpGfirE156fGPsYqfnGC2q5u3oqu1zrD8cyLJ9dtVYVgoKe4gUaaGNQ4b6U",
  "key28": "3RpHAhbg3QJMrnUs3Sk1oX4mKihoStJTsec9eR7DWfLzndq8mXZE1Dp8LDTNuafbhRgKgDJXHicDhQp4A1YgvSdj",
  "key29": "5SdDSuJL4WYsX4REZjj99vfmrqXpbVMFcPiLf4tnrNwy4HZCPrqPodeMztnLJmpxhzr13mbZbLKdzhxAfMQ8ssYY",
  "key30": "4H6PP1yVy5wm9SAe2hbLwz5TUqdNt8isxcsLWS1P78QNg7ERg8vmxTjRg7KvqwYAwZfPFJmK7AtFxsXgX72C2SPY",
  "key31": "5KjHhCy4zLbPwGXAKX9jLYkuPdnqTAwRfGLXmioHsjtHnuEUsYbeQBdHnwKX89pnGzztkpoHp5NpprTvX9np4QX2",
  "key32": "5ySyvxB3wwAmNxQuBCiaAeYuqYRhdnKR8vX73Qpy1DA8SLBgC8Kzitar64rpJrwiZmxS859AyW1g2nnU7FaqM9aJ",
  "key33": "54EAy6GyCooeYy8MukozT2PamjYPrmNNmGgrrCcnpo8Reeg7bq9F1youLKZpDUsobLJHZritgFPzM2oKr7bXihC",
  "key34": "2Ce1M7gRCzZc3MbZkBgjTqqQQGh8Zc5QFz6nWh1TUYmM8VBmCMy3ZGH5u1MgrfyKKZHjpQfA8qaFq9zUWY8AeCyz",
  "key35": "2KW13AfLxH52n8uimBpcRK4AznFA7d73KvFqESidsj9qsDnGyapqg1jZbga9ukjKxVdDd5XjGs2WtdTQ88ZSm1cm",
  "key36": "9szjfNomTmjheyQnEj5e35E9LEDQAH7VkKsoafsGJp1im8bMo3Te5tNE4FrEFpEntERhfsXwo3Aor1AkiSEUMVF",
  "key37": "3bagjq4ob399zaHszrKnE6VakEv5Csue6zzgaHXQFv8ZrHD6Gbc5No46w9vE4NztMkj4GFCnmkYnYehRpJfqsPhd",
  "key38": "5hDk2MSgaN4utboP1JE1xCw23mn2QMgV88JKvnixEo5o4Cxem3SbkiWu3shTgqLDh3jeHjNYLiM2zHxBUche8pvq",
  "key39": "3EvQU5tz2Y9kkpjTYsnhcN5PeqZkPMZXYMk91Xg6wJy3EFYh8WMRe3vZoo9iyx3ApPzBeamyaH9syUxie6LbzEJJ",
  "key40": "2crU1P81bMiquSrLPBUMyUwLcidJNUHcUD5wUrxMoCGhogcxopqYxWzVgjehbYV7o8dmTf8QtvCRQoh3aBntak5y",
  "key41": "34rRE6rrwiU3PEKobVSwc4dDhuAXiBLwACq3fNS6pdGodurK8v7DFPuQ8FDFCM5RpU2aJkV676Ga8qXNxr2Y4cj6",
  "key42": "UmbzAPiguYPKQqFhh1w74wkdwHEM2psFsNHC2AGHirqezjAdF5swHqU5BiwVpnbueZbDAAW6KJXxoPih1Sof1gE",
  "key43": "5HhTmsX5pGjYERN3tgBREQjiWH7JuJjrUWsFA9aBnb9bwedUw1QQRfM6RnGYwwg9cJQgHXV59AQUQ9mKu4SX2jjf",
  "key44": "5bkvzdkgv1Tj2V6AZcQJiSVekuM4ociAPCVUqu2hqgGagwskAmTUoXQZxMkCHuNr7Vh3HSJannd44HqJ8uKcQrSY",
  "key45": "2KBZ5uJeooAAESMRcdUz1nAm61XQgjNccF5xXB8ym5Frt4hjRTJoA1hjQ1Je42hWJtLH19U95wUmV4p35kJNfJg2",
  "key46": "4xa4e2PNRZvoHv82dGnd1pfTDry8UJvpEzkQUf7FsMshX36i3494CC46L7rUUC5UHNp3BaYez15SxjWHdCMV2eRy",
  "key47": "iZG9PU926wzmpxG5xSTT92TKjfFC2ivWcE2Lj7HFUyXhgDtZz3mL22wh3efx3h6LhuopmCifg1dfs13WKTt5BkG",
  "key48": "3QDzwYPqzJhustRJVYPBdjViQcx3Pk6jTW1Y2LtGBVcGfp1TACa1VUxFebG8jJdg8GN9FcwSRfNRWgRXZd9tNXPu"
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
