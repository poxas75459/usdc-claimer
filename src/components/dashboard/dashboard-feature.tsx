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
    "2yX3jUsCWyDBJU1pZj6u748eQTbzqnHaaRdSodbVe2C9iYWyxmHv85G8r4D8diksGH5g2t55sPUXXRTYNJFo3pHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "357vqCMzbQGRgCkjYyvUtyJJezFxecfK4mUxU9s592iWbDo3nNG8GbfWz5AqBYVzxnP7PM6HHNKW5JHMQkM8Lm7x",
  "key1": "26Bc4aJG6wCjTVgCX4mrnyJAoiXV5Q9THg9mFfcKVVGAbaVKq9duLZFu3bSCTBrjLEU7XwRqBHm4ZR44L2sAPXiR",
  "key2": "zdTTWwRS7XVYK8892A4NNvkLo38x3CFxubRTa9pBjcBzmd3bVKiH4YVmBcSnmpSDU1eoXXZQkickAsjpNZZT5Lf",
  "key3": "qmoKCWXTjewkUgzHqjbt9WWxa6WmxchMzWVd6zVhwXfmfUBZrXFHNb3QZpmD1BuFd48G4siCMfb6yBuEZvHj2oq",
  "key4": "5K1tmZGqwAtopaTeEVuitoRC2daXYHgcF1PsoyJeUQcmaTdcsDhMJ2T2hD9Xpa2Vv9fevSn7BFUvYN9khuSw6auG",
  "key5": "5M7aanLWZqmeWkyBaD5iGMhse6k2AJEGdqEc6vHYq1sVrgLQ4cMHhdhSNmh4Myj1QEibyL3KHnJaigPekD7JNow4",
  "key6": "c9pPbnLPsUpTa8Vn3V6N48AxDqHAUESwHJYGU2TPeE2M8GXVrduevLMCCcyqm2FHPuxN1g9rATEQ8f1qgjQ188S",
  "key7": "54zJSZwCHsJ1Rn5Ubud5DcovHh4uiNsfvkxkgAMqqFwpGH3SzWEFj1YtTP7GT28FJenVqDGvNror9n4417WHRh2Y",
  "key8": "5Mhn2kkqZZ1ESvFbDqhwQYapQZepATEDoevViKZE8fjybKaP47dpygstnHHDG3RpFVj2TNvqyGrS722rEU45ZYYK",
  "key9": "2Quw1uE8oFYPbNyKm2CBynGLusMoiDGFFEcEbYEbCeGc4xWMz8ZFujgSgJrq35RTecezqaUjvghKD7CxvNN7MwuV",
  "key10": "JBtYCX5SEhLYAhcC54z2zHzYpDSr2hqpNPMGb6ZKCZMThqu1H9UobLmnoeN94G2taU3UodBAGSs56nRsg2B3Aad",
  "key11": "4fUS2ANH1b1nbhmXitSpLoQwUJw7RWRRVn2VVJSaKQFmDzK4GLoD87zQsHLWYL1a1pc5bXxAGC8rmsWYMtoHS2kL",
  "key12": "5QBoyUmRoAjeYarJi2NtpgCtNSKdss4Tkz9gQqNX63ZAemXHSzLs995PGWXZRLjeVEyL3zgdcdw3vhK8ytfEqcxN",
  "key13": "2nsGBvBXidysmxPfPtA3JppB91oWbtvfhyVPquMawxaXJvx7NinFEko7oQMqMNzZnCQtVdftmMjq5vQxNVzZiU3i",
  "key14": "4USZKPu3cKAjQJimjTPGB2Y5hFn313z6efUdn6hS3rtzHnvQLxztJzZb9ae1DR4Z1oKYPbU8ePW3TfpaJt6CBM9h",
  "key15": "4EEpQKKMxZunSLSSmoFKBhaVyZ7BEpApsYyRYxot8ptiF7roLruZQr9k3CM8eeYveKBNjWMnFjT4mEMSqxyDNjb",
  "key16": "4xsfsxtLm7NY95EyCaCehZGQgMPhP3aL2Wn2a9uhYbXjE4hFM9BYDWMqUcakoUzc7o3DSgyMmk6iSVn2yt53vLB5",
  "key17": "4Xo4Gq1u2A7PkiVqosiQ7aMa5CrWXA92Wu8finfebN7gGSJpa9azoWzrgSpZGZvJRwMwAFjNMyGK25snaBK8BPUA",
  "key18": "8ZcFAwGf9CoHnTTCoLbSb3pSwsEJNhrZFTL1tNz2tHgQPyQKL7vRwAPsR5mVpjzM5Kvrjy8GdbaAt8q8QqqYYbs",
  "key19": "3R1UM9v3b6NKPhezfn1tu1t3aGNaQaMKm9pyUDLu65f28G8Z2eMs8h38P9uLgdGgFoS49rpfSjBxXgEg8F1uBQsG",
  "key20": "44Xpmm5TR2mFdrGcMUAjPKqECHRWdkVXnAJwZ6E24KAyQ4fvi4VokVj3qmYqdkHuFdKXRxxZwyFdUd56jMt4qdCi",
  "key21": "2uys3LBVeEcJqVo7rNumVGRuEMjv3azhAf4no6QJUyHmnVG1wE4zECVL3grAZWd1pn6wAw5biKHGqGGbRgx43Bm",
  "key22": "558fQDgZK3mHBk5aRvfhpcRvmbu1ikpp77kp1XYa55jnthyz5aCW3gNDHhthLqK7tsK51y5jsmyNGtjUPirwedMv",
  "key23": "4GucDpYcw39PQQpyHsZZYxrSCAHnWHHD58VDtnPMT9Lgb5kNqpb6qjYvSd11WmBnbADYtUQxjEBRYzy8mFcjnJab",
  "key24": "4FMBiR5AW3EyvQWmH55egokXaSx49GH4AVdgL6QzrQ68RHuRxmz3s4CrVKKY8HSnraBrdxhZZ6d6sUn4h3JCtCU9",
  "key25": "3KGXvYTPrhXvc3NbLJMxUTxKvUBeQMbvWj4svFfu1DzDGNTgVby1wTGCgWDkgBgk1NSZzz8pUbm8wzU275u3qcco",
  "key26": "4PbVZUQBbo3osQDSAngrgr1y2JYZsco7CQizFaMsnx6hfg4466vsxRcukLQJTZrn6MjeHKCJkdAHEPaoE7DABAEa",
  "key27": "5gmhUipmogzv1Kqz6QE6521BZ4JvBFj6D1dSCLnThHyvooJQpaJn6V5F1UmgQgxr1aVD2gQpNoX9dBK1Yg3XkXJv",
  "key28": "3M8DqQuxAKVQYbKY19bL4aBjeXZZbjiDzepHzcLLWAXBrpF8oemDKEJxqzGLNYXUkYx1zK9MMaWT7u9ky3oyk2rP",
  "key29": "5uJiUbNvb8FsWypL4r1zLqMRSHPK6w9rfLGcbhzpRp6k9B2gJMbkd2szxbCjJ1hwGrASbU4AyCjkzWduYU9S4rjq",
  "key30": "W5trZJFmp8r1GXpGCmte2hESUUAbiagcBaLYMohdt13w1G1jmuM3LutAqTHudkwVwTK7waDvPjGXcKNEL7SgDXK",
  "key31": "2DkFqtGD1sjfS6MFZEPLihyvq56AuhH89GontpZSc9Vq6iWjxyQ8K8xBKuP4444PC8wf4hb4v56K98o2z5mbJCRz",
  "key32": "4ByoGBN4S489B6ftKNwB9j4u3jpsK4nB7NdF96cWshvaLubiWQbH4gh45ZUEhuj49PuvoMHBFRbtowoKoBgMHvqz",
  "key33": "3FDESikRKkVsniXzBTJfyeVoBGmvCZVzXN2RcbsYriCyCfPpwFq4BVfe3nJDKg3jeT5kxhv4TZCCRkDdpXwr8jvZ"
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
