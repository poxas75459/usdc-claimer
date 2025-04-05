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
    "24JQxUuSH1vZHRoSLUSv6uaYYtdGpJzoaciWgku6E2zQHhVkvkMYQu7DuAJCB2vAuaeH9BYgrVFVhmSMpM6e6pKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sB2nw6GgMhQcNFD6YFPBYBBggsLG3VZQoKGCSTTPCmjbU7ZysVvxDGS9PCtqyRTz595hHo9LGW8v6ajzHDxoGeV",
  "key1": "5EE35Jg9PbXh8QFqif7HQCo4DdfBF8MbitydQLijPP4UDGZ965NwGxLtXY689nLPmqo1BunwaTcy7ASsnTxCqecH",
  "key2": "35xyWCiRGBwi2N2Hb443r9vMV4BiAjniERF6bG9VSaUqu5sU9jwSorpmVR8k6qCq8zfd2BwvFsML7e5hPBWTXJu1",
  "key3": "3JxoS15TDvKBPMT8ynsrSB2dncmpVADnbj8K1cNL336E483z4VSrb6gAo5H2t8DbwGcqwdXppCC6BqZXiDDraps6",
  "key4": "5jYNHnYnek3Q4jFoqjWmVjqKJapzmBQTBJLpsL1eevb7dG5JWcnAt1j8hXL4o1dJvBrkNEYC1eLpU5QEtpXgJhFd",
  "key5": "3qDeGoG5hXSjmNwwqmbhtwNXoREYr1zmHr4Bb21QZjYZbWQv6NNH66iURos6NTE2dwXWfsgD2hg3RQanU9XJs6wm",
  "key6": "JWRBPqJCLHiJ96QLZFmd7zJ7Akqt4zHvBNGiGPNqzaDAbCN8UbXr3f5FQFHKBifab5UPLb1aBfWvzdMdoDDXJSa",
  "key7": "5MeQ5H4unS6NcstmWfKbqbRJVYh48N4DuQt24yrb5n3B4psziLgVAXv3JCduaBTmRV42PvjwA2DSgJ2cbGjS7F2h",
  "key8": "2QJwzggvFKmuBXH8mSYf2cZn5U6jm7iq5ScVzmFXTdT54oD3SCTaJj8nWK1QjEYKdKqGVLGwW26hPKrConWAFWJS",
  "key9": "2QmVNY72YCB7yY7uX34TrAzdzGv8DgpxD5yUH28VjTdHSUczfmVaBdZ4PGbD1iKKkyxEFnsntJByzyyvYA2EmBZo",
  "key10": "38VLKuvtC9sdqMEzuhqqPJTgzxCB76BZYkiTVQKfiu7FmEgXiGVwHVoRTieZmv8KCDudSpN8N1ArGWVtoJ47QTF4",
  "key11": "3rNfAF7Rx5v3gZTs1tDDvbwiRwDD88i9Hxme5k1CYRxJHyB66WPhm5wnN96zyWWeX6qpVhxPNoXRBKwobxJSHKTE",
  "key12": "YKm8UmTjSPD8mEYREmLRcAruRX2pPYLjFj8LREh7rGgsu4yNDYL94Swgvhtrj2vac4qEp9hQKsqAnUtLPfHPmHm",
  "key13": "8b47vZz1JzfhgKPnvPuUESmWius3tjaEdRsCE8fvxsjbsVHxZ7ZqzGBQWJCtNr6gfVvbwrfWrqxrcMKNeZp1Yoj",
  "key14": "BKT4hE1VQm7fqyHJK6ncBJe8sbP7xsRGSrAUWcihCBvjddYD4skoJusvL6jBUVrHgNs6UgFjVgF5pujHfPbeC2A",
  "key15": "3Lt4M57S3MnexeEUS1298p6URRsSysPZGia1nYweM852344JQmNXEMkhL2XcneZ7iEvTak3nNcoqNWxRFqGM1ksy",
  "key16": "g94bkk8LrBSeYxVfZtSFoTtvEtxSBALJ3dHvrpD7Eyzv9ss8HUJUSH2ufLnkZbyZrdQ7wBnN9fDatgXVGswtwf8",
  "key17": "3cjtaMBgT5LtVy6rKJ9i7j5jVNrgpfDhwhtNuBLjSdBkg1AqbkZ4UUkNMnPngYXQZH7GS8Kai8uJLDjsdk3ed4m2",
  "key18": "3qdFqBM5k1vGVWGfSdvLarak8gDqUStiTBxz7ripU1Amxw3RCiit4HSecAK4Eqk1xSFjFAskdbWZtafMY8wrtyuH",
  "key19": "2L3hrjePeHMmHkoozu3TE3FKmGVeQjKHPFAiQDVHyn1EXaZu4yNzF2p5yYVWZazNePjpENnFiE9HNA39AALcvGmy",
  "key20": "gf5FFZs8R7eM2Eq9o4AEFvHXf4rsZnHZx5q3xqanQoboxmsc6D1oBqxWcm6NMqmgSvvGyaQPnbmUyvezBH7HZq1",
  "key21": "3phdrsRmQee1YZPvRuJarrzwq27vHsbr4z1CTswQWRiUfhfc3KAymk635VNsUQpS4iCTb6ueJfsLSaYCFmLqza3P",
  "key22": "4SoyB1KU4NX1VzKrV9A7zCV1kKRcukWJDG6q8t13141T6fCA7392MMK2t9EuAWebnKkmwGtyNMwR5VUUFuQKppK2",
  "key23": "2nWNKwjT8XyWUTZ3QGbuySvAnhtQzZ9MDwNqnkq3h3Tr7pzQfqevnTpr2wYgsdb6g92JPMoqAgkFus3hrPSVQUUP",
  "key24": "2zkFn5CiBT1HruWsE54UHVYes3jB8vLscqFYA1DKkTYf6XiWgvQXx3EEYBXQWpN9EojzJAgmwhWz8SNsfudKVrFB",
  "key25": "5oyuiyEEAtoJCksj641dVny1JZA6aPoVynk2oNyL2MxWFiAN42gcaJHUvE4fMB7xydrDNBVNLz9yCdpUsVHjobAu",
  "key26": "3MKjQQMtFQ4ncEidp7UG4Q2F6XHmp4EXhZ65hiZuMcA8as7CEENAynBEZi9ZjWeMg8UN9cGNMJBP4ULZZWSeaeWr",
  "key27": "y1CPxdi9NzKeC2RaA4twsv2GJXrzog15qeiLYUHDGVBGDVexXE61jajKYuZ2WC2QiBuN3Ysah5Kw5UNTc5GK8zB",
  "key28": "zNe9ZbJQpARtmxm36zcCSifhRzJJuWh7Y3tC1PeWjuE2DMwqbgbi16fZogBS4xg5ihQjpi3VC8DhXznf9y3Fi5b",
  "key29": "3ibP77xr3RrpHAwVUaKPBuPMwbARQkob9sHTX9M6WoQwmpNbo5JViZtnarUjWYmzrm7RTL3GoBhAHoXVtDcVNvvy",
  "key30": "zdvGWzzAJEnJeeaztohUjgER1n9SZSUxNejjDte3vBJJiTuAe2wMHn9hgtMQsjn1khMdNLfEG83JHPzdKvYAVUs",
  "key31": "4KrgL6UyD1Eb1CQpFc3yrBzW1kHdNi8Xc5VsoAgt33GoznUKMU7dXKnXUetB8gZY6KaRLYAmjziiRdVwXVfRHA1V",
  "key32": "2RmnNmzgyGJGsbZePLp8J4rUi1VGYjt2asdH9ZE7BBHFhY5YTraXHtjgXZCD6C1X51kq6WN79nd6pfRAzH6qwBmn",
  "key33": "5ZaBSdN44n3bRs5qR8dyfekvroPmf2WftBWE2cFQhfpZt26cvpt9S4S4Zgx1Va4guTxLG7ZuoAbngCXXaMM2kbxR",
  "key34": "2dbkVggrrcyPn2QhXrDdvPRoLMC3ecxo271rSBeQZy7F4eQw9DHLpkXFemgtcAQwjSDJqceFPoaZBUtCGUNRHjzG",
  "key35": "5fLw56CCqQV5ts97wpKE3Dvf9Mneq4oAAthJbvAPLqYvLctqB3e7x5dCihtDsHw7EZFrhBh3x9NFgT7mW7b8XYux",
  "key36": "2yy4X3QVeUE5VCm6v85oZJ7MkhnMw1wXJc5FYHLeVKEe3hMXT5JodwZQKTyRDxJBKGvBWFEEgEte5QhQT3WCqdr6"
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
