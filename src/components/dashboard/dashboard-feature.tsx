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
    "55de1sQbmjP8kA6MtiYyHw3tAHBvxW8LG36xe5doXUgVnnRd5M5smSptFyE5Ct7A5xDw8FjqBY6siQvchxt7r7Jb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H3Zyv7VmbdMiZMazrDFxEBcS3nNJXLvnE8nnMd18XTJ5CghgurcivM1QmWLN8kTYuoxy5XKh94ryvVvdv9AqKjD",
  "key1": "oxnaszurevXHwbLpGXZefWCJFVSxzF3MRSV2hHMT3P1h3AvpCNZiW4XVSVeCfdVjN1qKBzUPVYKrg63PabMw7tQ",
  "key2": "4avEKfUhxH8tWQLZ1Hy7VkiEPePSDPvCEGxW92CK8tk9cCM2fUz9CG9wqiU3RvvNCwwWSSQ45APXHnMYAPNoxno",
  "key3": "N8ZTMFhvVwGYE6PzhgNat4GfWmeFZec2A3sfWg7XLiL8petddnjEuPFmr824NQUKwkVJh7CfWk1MyYpm6KjyUnE",
  "key4": "39dVUJRwdpqgb2s89abcr2fNGBeseYdA2tDiTJAxZdFqNUxXwbSckfyDxN3NWPCZg8pwVfMetbPwiD3Yhm1LE3tF",
  "key5": "4v8M2jhDnHpps9Z8Fups8w9e63yKujqatjqw7KM5Mha9z4R41Pwu4LVkzXdNvCY5fR2CGNLbp6by2M2sFx1s4age",
  "key6": "3ZqKYKYGM6zAV2C2XViK7iV86JQkt3gqGH9xCJQAo7WZ3V6WbfgWm8PHgvbfLfiNEUEz7Yzo5rwbE1aXJk7CszPs",
  "key7": "2mi3oWjzGZgRmAtJxNyUkAUReikNU3HbZGCWYuw8A41EcPcHFa94vV544cZWXMd5WEvVUqhdosvcrJty66ncyTsR",
  "key8": "3H2TQxvnHJ98FxrTKdKP4LH2hwzaD9FDpk7Yp3xpQFk6JUSALvCmqYbJ6xgPhxDHK4rXR2utxKgKHKoNtpsWN6Ar",
  "key9": "4zxhtAip8vpK8y6vgsCh2S4ruLPeRsAgpws1MbuCCzzxwQS9u5UhH8FS7S1vuGuEAQk2JS45LYyENj482dZGz9JH",
  "key10": "4FxPuCoU2LDcULzo6X8GcPpzpf44jPt9yaD2q67Va29bn3etmGjxp4Dg3Q7EjUyx5zPoQc7qWc577VM9GXhL4boY",
  "key11": "2mhuZhXPK5MN9f2DMFF9bTVrX8z4ZQPEV7ZSmP4QtJaVsS2du3ZKpHcyaYgW6AV8uvWjrRBNuuAHYKddoWZEd3iD",
  "key12": "wWeYrJtKnbiXSPWN77ZFRP6wCj7LYvTosgwQZdE6ANSvkQvcWv27epJQ7LXLm9jMTLAP8s3owJDkxcgdZNodrCu",
  "key13": "581Mmvux4vWziiEjCAzcKHCzfA5gmthXT7mpZfrfbdb6hubHuPCmwhhGd4N3hfrokp1PuaLVkEuhTEMgSHGuHt1S",
  "key14": "2ZGJCRW1BRWr9matZwWKjd8TKSR9icDnaBx4h14dmoEi3ZB1RUaBDYCdcvg2ArshtvX5ASPsWFZH4se9c36vyNHm",
  "key15": "3q7nJVL4ovqqqYLGWPQRCbNvPRLEZRaXhFAQ2zqL5q2Qh1VWi1gUuncc9HRqEWZA5RCpjGm8jfXSbnQUzWJd1yeu",
  "key16": "4Z3tfP7nD3BxowGcxYy9CDVDyBLKoCXbYYK3uyToyMtcBT6ewMS5phup9EbkeWXZyNV8FcEkN8XBCtjbEwucBt8i",
  "key17": "5bFXtPiwAd3uuZgxLWS5zMwwchbr6LzD8fcKbAymcidg8Y3oWJRt6Wza3gj9A4oAnU1gVJibW1BZnJRjXv7g1zXr",
  "key18": "2UPKYyFUyTVH2FGTV2hsJQzsStMfqanXi7GXqfz2reen2Yaoh5c9fXgDMXBU6dNiXr5B6oiZp6MtQXnPvuoeFrVo",
  "key19": "yzga1iwua2f97Lbxku7QJuwoDDP9rTTzXPG39MyXys7cBerMxhCfnbvBcrSN3KZA2bbzqQCMgpVSB8FqD6Dqi2m",
  "key20": "4FAxqEq3W8DCKuK9Qaf3anQvjpKYkVQxPMVS3LPuXCxwowTjAcrwEWQWKtWpxazTJQm9xQWnfjwCJ4tCmE1jrnAA",
  "key21": "NBfutRYBTU7artLWhHVGuW8VkzMjEHxikAu39nTLFNgmNHasfPMt2CXWYr1QJTTbsATqH3RyUmR4DBGeKWo8epm",
  "key22": "23wMhBygrsiKwJRCkEGnjo1BTZ29XQ67LipFAmQS5EMkzgA6pRfYkjpwEbPnXyFXScSfP2gz3K2m4LqT5GmK6dhD",
  "key23": "Z6Qsd6TDNcY1fm6mUYXfqvjBG1pmVdotMYjGji1Yu3SGUHqNHbgdRsy7svaAUjoQvANe29ptfxzgTiu93H2682K",
  "key24": "2EXfUjUauzZDPbLuTwCYfZa8AJejaVJesgsZKLXpMxTRjUs7zAYBKjDb1CBoEysBdSPRjKmFft3bygsahorYt6Gc",
  "key25": "3km7J56EydMqP1ELCLCpnpozhuLQEC4RMgVDqDBhiMUXjpXsHvj9GWuLzoowPQ56yiyMkzz41bNxnAvgv1RVVRoP",
  "key26": "4QnWwNLJEJQGmDPBbpGkFgFAYZRQ4NFTiYG9p9Rfp5MsaD4CQEqb6Npc2psieSgG4hnrpBbhNoHhohytgkB1nA2g",
  "key27": "2YcPvfgPXcyiM9LkSTpj84Ursoas4Z1B4jyMrzzL1GZytFAdG9pqG52Tf11qLpWMWvTgDjb5oZ9Y7Fs6vNPVZFyR",
  "key28": "46LpYyPvcdSQn1uEVVgNVsUse5cTLCuHmHmkjY5CRzVg18rf294YDoxPWb3E9JVZ6rCVDNueNrPyEnWFXLWQ8K5f",
  "key29": "vMhBs3fMUpW7g5fnhw3ErEj2E5zgkivQaK3Bw3oKAWdjDN2waQPKPtNB1VhLHAsaD3HnV8KsKRLGxALNudPVWa6",
  "key30": "23dUC2Rnkfqpr7ZnA5HAbouupiNqx7hf35sYX7moeWhoW1HTkqGTKr52zsrAE2bZ5FkrJoM71DuGhJYmYKmLby3f",
  "key31": "25yLhCUwe5v1dx4GhhQYn2shvT4njnzSNCHRvuWMNo79MiLe9U2jE3YE65VmksVKEeHwUmhan8u1WPvgGmatCANV",
  "key32": "bH57wkEKeoxwFzRuG8L1tSSowArFj9nuCeECF1LdRJF7drjkEWQwkZvTxZxzKFR9cBZZA6otoSmG9RpKcTVGUHQ",
  "key33": "3a8PnYWMxWxcUyR4uFPcLYActJ2D2ouxsJgTTiRJV4Htw8M6mwuK1H8Ai8SbTaNsSjq2eQT6UxpZkFoZbRXJdEv7",
  "key34": "5Kn1HEDzJmTKTts1QTuu292Qi19ozCEw37p3jjSaBed4UAnS7zxbCCjEo4mBVcbKaZASvHNsY3AJhQP57FWFEjXG",
  "key35": "5z2xAtSgNzeBFALjdYpyCMJSHQnVDFoK7juqqUrEcvFtSfbUcNBuTLZXL9s34g2c8b6c3sc3TSHfZfkauyMUehtg",
  "key36": "RuYNdoQxpTvyqrpUDW55y3xWA79bxbHc996bFyQuRxyPqjt7yYRPP6eFYbzoFcStq7Jc3Bj87wEgVKsn19HnVkE",
  "key37": "48CsrDt4ttj9umf1gdjRMVzC1zWnHCJWGwuqZA8Z6kNSEMzt1KdghTiCmfjP8M7TPvoMuRZpATKghnacL6ZBPdor",
  "key38": "4j4vQvkdLRYvfbN6YHRi7pw9kfbU9yrqNaf5RyXy6vdFyDfGHuGwNZhbkuxmfafDkH2DJTTb5iiygyURLcuJgK3P",
  "key39": "2jzzpzZJnwQ8rASUeNYQL33SZK71cR28dRLXg8yhgMYzjz5okMjQ2zbrREo5xBV3nqmggGZntsjSpbxyzPXFjQDn",
  "key40": "47uJ5o5kMxbFU4Dvsa7Y3Q8mzY8SSwRFmRZ7idQ6SDR3d6kKSjuqNRRwizp73GJQazxb3WzYEGkktd65wathBjDK",
  "key41": "552CzGxCgN6CD7Ugzp4MqauWoeYMCgTByqMqogcZ8dZJpLoNxhDEA6bfh2zVJknzaWespZTYBXwHMnpxRP39ibQ",
  "key42": "4HVAu4BZDTwuZFhykm1JPk2nnqQbVaVWq3kaxh9UgtFnGtMRH7mW5ZLeUP3392ahovCcWREXaPQy2tnRNHvhzw6L",
  "key43": "4QqKsPadW4HCCVTynJckkNTNys7f1s2iJSLbop2apckE3RC3YgQVMZ2wfS9ouimQ4NyM9sW4w26bLqYNYZd48hNU",
  "key44": "rvKjquGJXXrgVAhVrWHPNdZ9uA5M1zAGX3ynsNr9huKVxeg3muieBLmci9Z5h84CeBjSHtckjUWcJcZTvWbvs9T"
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
