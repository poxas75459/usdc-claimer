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
    "KzrVVydz8XySwYKbRFhuXnLE7DLFLuYsqk97nduBshGdi2oTJmToL3GcoEMvq8vW3L1Q5UM4GZCQyRrxaeJukCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5917Pg3bLQFsvJm5Neun3g2ZvFzu4yM16WonvLtM3Hawrhf8dj6GCT6f76QbbhcGRScoBhAPcPPdW9fnpE5HhY82",
  "key1": "67itqZtUrDeDTwptyFqYwtJQGRwRo2yBqUuuZxTnJ1HMRZqh7swsGcxzmmeJC5kRo4M9FuzpSGY46rHTmsnfG1Ac",
  "key2": "2sNTrs4yq9DW8XKQTzmQa8m49i5SASA1u4eymHQNbEo48CvPF7rQ8oBdy9tawSAxGgn485FT7ynoE9DCQP7k7hCV",
  "key3": "25rDcvBeSZFSf7vVrh4VJWno7KsWEyoNk61jxzKdsw84zBa1jcWGSUu6UBpnGsEh7cgJiYmuicUKxcnod6NJhvs8",
  "key4": "26UuHBDvwXkFDp7rzkDGLb99qX9ao1ZAfP3oqu3XDpBwXbFW9PgMHAkBsUWm5GGNpFtaa9AAo1r3gRfNhA29Yc77",
  "key5": "5F21pmvXc2rMKuPPuJgQWa1mfYSBJqN7wofFcQxtBJdaVxcSAYipBjN5YCrPGZG9tDV1SpBUCff67v8Xv1Yq8iQ2",
  "key6": "WiMapsvFhYJSSWbLVf7L2S74FqcNZkSo3bMidrjfqG4tMzFaEX4ZpdgvyDF6J3hJKPRtShAFaah5Qo6HGidMQDo",
  "key7": "5Qo4h1PyRq1cEnbEPbu8dWvWb2iNV9ZBc3fRnfitqGLt2LGu4275WBTcLZdV8AY1jbuaqZM37faVsA6w7p6bzvyW",
  "key8": "5vx77GGTekbBwWznXh4QYG9dpAqj7LSkJSnfmqrkDQ2bFuABAyZQnzpdT5YWvUdAmiwJa9kzTNKfgkErq9XwCVvd",
  "key9": "3W92TN7YQrc4xdiLqFPjgeZ4Zzq9eUPCqYrhJjUg6mxkgcFVcKvyiZPQgAcvxotnXRNxSirqiDQ3yCfLcKvTPEkd",
  "key10": "5Zq4tYaNXeAyPQb9sPSUCjUgqth9SCMYABUoBPdbRQnjGQwLkksYUHSTzaZMs3qkvvahFb7NTY38fwNxBvN64hh7",
  "key11": "5Sgm74gsSTXHDZ1D8f5P3zHh8NBtVL6wowFd9sG6KCHMsPRWsAreLvfLU1tMZxeQsu2sTkS13rgnJTVpFq7G9Qpn",
  "key12": "41UiwzQymf7q4QmeGqzX5qWcwXosc9DP3gBovSyJxY7raKVdkagNAb1CYzabikdhzsXeKFKsRQYrz9V3jn9Jkz3J",
  "key13": "2kJJghwzo1KMCknjE8dHUhA4Mp35SwmQGrWh5ZMErUKAucWnA7E2Hg8bT19759eSs853zFXsbiHMkpnouSkVMba8",
  "key14": "3WwBUA46Yqd8poh6T13i3uy1uFjY89Ua3vE2C1iCLTeqQZvEtPsyR3PLQbPxzW6uvd1svCb2VqBFt7VxVJSHPEkm",
  "key15": "2L3BT3p4qAq7TWFxQ2e4kTiu6Nq4CA1aHwUJqH3pc35n2i6sHvuHb4vaPZxzL2eF376z8tu1Tn8Dx1LyuGoUbc4V",
  "key16": "2XkqSEAL49WUSH6kdA8NVvv8qpLPAa41XLw4WWMdfUD8TKhD5Us8g8X7xsjwzse3AS2WpQ4DLQpaQheZ1xxr6vN4",
  "key17": "LEaR4J4YEG2xVCgfc8W7wxcmCHYc4LgWNY64HCuM1Ts7NmKAaeu8DfG8VceKGUw1eRythAU8sBWyLqt2V1m638o",
  "key18": "35SaGfR6cmkeR1HdbugooEQt2c5QV26SAKbAQUStZEYKn5WmbjS2YKJH6PGX6449sNDQYXjYz6qano8kTYgV4Y1w",
  "key19": "2wnm3YEw7oHFZDphtEaM9FCzSF1Dwt57dMumddCuh5VB9X1injs8Frt7FhAFLg99LCrcBB8j9MLwrxe9GyJqg6QR",
  "key20": "5zQrcC6CoTNGBNK9mQxJfj6ZUnXFmW7mgYwvaGBSB9EmR31iD5YdHYzfLSS2mPdJvpqowAJeJdkfbU7PgjpmvRFL",
  "key21": "2YXHHqQWnYdKZXWSw3qL2naL6appNSJGZFv2oK1LX2PynPsChe3VpZv6LC3gePyygonNqfmSntYUdTgMDTyDmLUh",
  "key22": "34oQZzw5snhMkkz7tHHQk5xWBkWGKdSQFxJ8kLu5471ndVwghPYRY8d8i2WSvGNE6sbZm6MzPGZq5oXBqqogM9Ak",
  "key23": "quAauKqAipLSyaYCkmjVniyjAT2qzGWgRWEGPHdu3tMhoMjX9VBqyp9nwVFow2uRbdxwGVYV1Lxvqa1XABdHPRs",
  "key24": "41MXQa55n2oR6wDbGHeDACRCx9NssJQJyCCFybtNVMkYYFGDbiuJvfYu2gGHwPYb7YgotvmtqRWE7soa3vStnQt8",
  "key25": "4wTjzAQEZ1gCQuoBbXrToyJhZdR1G9VMapDnRQpSKeuEPf1YX24XcKhpp7c5458zQDe5qu2BErFQ67WA1PtWiEP4",
  "key26": "5tkcEaY6QMKPcw73BX8DvL1kVvJmMMJcMaE4AV4E9co8JSnfxHdms521iqsNQh1vK3UqnNeZMKhmX8Wx3rZKseLU",
  "key27": "5RLv6FmUSm6aC2pgu8QHLD15DjnimZF89E39L2RpmaLC4hs2cyyp2ahM6bk2UrvAL9ifjhwoLUavGfgxJGsQt6L7",
  "key28": "124m7Ee5JXxZALPKzAQL8oaKwg5DMYLM6h2YUSUMVAQd1p4eqE1BNN6iV6mAzagiU3MCZNomhvm17VW358mTGcnw"
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
