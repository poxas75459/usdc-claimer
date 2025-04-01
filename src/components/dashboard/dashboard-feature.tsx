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
    "2Z3bcnbtb8p7X994eh78TjN5R7mgzeeHV9aefUoY6rReBscZVf8cb332EhfqsRF75FGLFAmFqwxVhXi6XMgwXjxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34nJddAKtGhCKLqgbRysvcw1y9VdiaTNMKd8h6AtC4GBoF7Wzf4Y9C3YK6pUbjYC9PAr5o3EueLRKQDtjNtFmP6t",
  "key1": "3ARo9rsrZKGtiX9RQgWVUJJBCt8e4DJytJazDeC1bYWjnWKYo3zDhYzaSJoKgmEJg2G5q3PntCS5TokUg3EwkKAX",
  "key2": "4cDbuqzDVbD5HWApeeWBsCGDNK6zKybQzDMWLEWiCaoDs5yxMyDXofdBscqTf87FuH2vggfYDcCHkFuaDE7AVLJR",
  "key3": "66JTkzaH5kreHxx4nCvFtC8GVCXsxFrcigq1Wsw3J9bvU3HsK2Q4RprHw6cvq3SckExkV5qKyz2LWMJoNrYNqPSV",
  "key4": "e6RGK81daEU1R344NoyFRMvYNBSJaaDrkVYE54Rkn6P2zf3MnbmUiZUZJv1HyppbnJDeWTKJqxcPmo331fqp1i1",
  "key5": "7Du7Kx23UF3sjMEACUfpU5hnRriQvmuCovsqHGBNXkweLtH9aomHV83pCxBoz3yuoauavxacrJ5JkJwNRrjjeox",
  "key6": "5b6V2zkGX2HJxJwojuEGNR84f3McHXwpMK68QVJvTBxxDkpYYQL3FjCp4pzfX27yw3HYKUg79aCNm24omcmCtyos",
  "key7": "22AK3n4MzHZXpnzpzrFd5cK5JqF7BoSsPdbikar3tjKmxao9MYiwLK5XzgJFj6bL4xfpq2J5ehvQpCjsbnamy8Yw",
  "key8": "3uocn4uZ4dV62TUjTC53Hcgt3SFqs6tGS2VwiaSv7gUMW2mjJA6h1Akz6jFdBW1mJrq7viq6TdHdDkoFnPTsGPVX",
  "key9": "28bJCKkbokTvzuQ1ZThDNt7w5yMk35LQGUHjbe2a2yJxRfX4sXgaSq3fZdrSyKcJ5JTpyc5gbefxmH3V8ZaZ5aQU",
  "key10": "3WDcxwU1MbVrqYGxxzZarK2CPqhrna1TgEjhe3XLNAokvNeftfesc1ErHLjYNvuqxK46qn7pmVTqQKxQUoKAsASB",
  "key11": "5RDk4PsxSdnwesnaCpmiqNJ2y2aWyTMW6T1kA2hQ6zF779YbuSUiiS7hETWRYe7CXP95DMyfpjMGcbd53rpmZRJY",
  "key12": "5s7kKg7KgHP5NZk81cwonivN2cJD18fYWD3qTpB2MmykX8dkRdYTvUfBDxdyFqJ1UExmYKG4umMD47KqmJ5LKnSV",
  "key13": "3EkeEhWpQB1YP4FowKLjTtAqDH8nn6NiFckZXjPwRo2m5vEosbLRKR9ARzFFUPoPXprvfd2dZUqqFsPjRpy8x5Wx",
  "key14": "5P7BvahEog6WYXQ9d1wHCumQgpBXJd9G6wiCbZYcrvPV3i6aUbumeqzWPeUhjdW8azm8BgvHrZxsuUtzgM3kNqji",
  "key15": "4gEU47xr2vgTpk15XP3Bu1aBaUfsLa385bvn8HyMMnK1uEHWYxpnaVB8HV11gfhofTbuLtiNWvtrx4GCSy6Joo3A",
  "key16": "636f8RcZgM7yPhYDGtVHyCpzmoStt2QoUo1KbcmfwKwhSV7hC1jLS1QQHq7t1oSwHJezc8hnAiHXLd7mn2F4UNPC",
  "key17": "2UMxZvu4KHDR9bfzuGg86txqaTSYDrp2UCrtZMa7tYzWkZycauxSvv4NUhq8vzuCGSqHemiJ6hPtcmdFB7jz6Crg",
  "key18": "5m4a3sMPNSXgVvg94ehAsZUJx5UVt6xx38gy2Ut9SW4v5MSdJVRrPjocsaKfX61rnoGF8wmNndU58VAqeSnN1wgF",
  "key19": "5CZdb9iNh74uFREAxSmjkA68KCQyrCBX5QyVEDXJMteGMnGz5oEpqoD8NJ7DpLGMysrSEzWuU27imgfcETe6JsDb",
  "key20": "5xjEMwM9tMse8vsPF4V1mmX2ehan9AXXQpwMWJcFxHdYrWcNQpxK18nHGhUki2rbZwhxYoBMd4LUv1M42EHQqqzG",
  "key21": "eZfS6ok6JN5m7yNrE4Uk9sarSEcqhZt83PV8gGczTdAfFuurNNc4tnYKhMAip4y8NzcekuDKbMXE7Jo3dTdmvjG",
  "key22": "3A94ippHKiR13FWQKQWN4M93rMLBcT3xquNBF8sGKwMzpMcdmXtZDCFE8hCpGEYjyg5pYpSGixYyStMQrbT98ijf",
  "key23": "2S3hWBvSgHuuzD18iivsUYxeSqGUEq2BKXWnmrJVHu2YWB6nWAa5wtYLgtvoh8GAukE61Wu2pnXVzEHYDXNfYvvg",
  "key24": "5cwePZ2jLkhUVGv9GjdkfQRM7wrEimK6ZbHUcidVvnEA7Cu5wHmL88ZUXGhGZR2nZ3DZfmCGBbnnnYoB2Q6owhfh",
  "key25": "46G4xVE4sh83YtaU3cVaSpizFwte8YJwaCc5Ydbv3wD4v49UApTyBtQ3qBNqRH5Q9Dpmz2NCY2R3KbCQece4cLF4",
  "key26": "5nbTF9cTzondGUPvRfeo1hEgY1ARr1A96AZDgXt8Evv6grXxQG6bnFVq7YD5J29GtUhQZGpzf9wyCKdKygtB3VNc",
  "key27": "qNNqgVWtut52zZfYSgiKi9TPqFBDqytzdmBNRS4aXQYcDxUHWBd6B8eEwkUHDFX8VZVJAiefkhzaghXe6ETxQDF",
  "key28": "4QsPSWcJpLMZzYLHhmYVGoEvZ6pkbL3wG8hwsoPcnTLH7LarMjzFsnn4ZfeiobyffKqAWPvkcwqpAGj1qzTvAjNZ",
  "key29": "h8xxu6Ttshu658x9idPqTmQEj42xEEs4D7ByvwddHPJCpnLrUYzMrrdxNqAob1BvfubrQ5dks2QN3FEE557nftX",
  "key30": "2eSpb5mTNJfAHmDMnp4yd1qDyAgaXro14otNnXXqAbsNnrossxKtUzEhuDfvVNcW2jVjHAgpEUcY8hCWpAjuj51a",
  "key31": "3dwfVse1fVxULxMYa6fwqpsiebHgCRXe599hCdaCkkASvjfw4GLvTm7trm9eXhpTCujnq4f2rW1uK2uGN9vxiYz2",
  "key32": "5sXX3xyZ4B6yez1EDoD6B4WWnJH78v3zFqgaKW4XkuFpE7dZYoRUakHmMk1Rj6GiWRYWvQLDP36xd9BNgSjqoaGg",
  "key33": "4XCXvYCXg2CpQnYoMAbha7f1fXiyFuoZNxi3EWnugnp18gNF1YdGScFW7XVDgbnVRuPCiMKwsS3bK7RBDLKU5mQk",
  "key34": "974h1VgEVS4TXM9iAyXykodQY3NgM7EoCrEgGM7umtLkVEjWkgRVU3wMoiJmTwSr3xzfif2PXLKWTyS6kp43a6u"
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
