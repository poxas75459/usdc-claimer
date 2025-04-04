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
    "2TihK4nbdtvjpzueUuqb2m1tVipmnymAzDBnBdAjVjS1CKXDgdTzSYsTTH6wSo1V43RXhVNZDT9A74DhdJYvFX8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jRf66f15f458iwdBioudF8vGMT7sMF4PkUDJ9FSktLEJbJWF11HKV684hFVQHkNPfmxG5JHbKvjgoZo9oQyRG3e",
  "key1": "5xxVfFEqaSFwXjpc7BXDfaDoy5NL2We1Sn7iHmiGGbM9zbJkKqJSCPi6WyxLN5JrnEe2L4jrGubBLdZEnqyco917",
  "key2": "5KxVTBFwUWSjiVg3mfbJWgnmE5LqEoiyttaY1ByQC8dUXzidpR4Cqcrsd7HCoTq3tugfNxhSUqydXcPQA3MsNFA2",
  "key3": "3iTLzZVsz6TswrKBzRHoHNNak6HEEVRXq5zUhxNaD9JaE1Y2uCy34xRkWPvGAqUHu9Mx6Yc1WgrLGPmUJPcfNB6L",
  "key4": "3kkqzy4CjbTJRHrP8bVgNqKvVZh94qFwHjRDcpp1XsbdpFKff1uqm4MfFx1EU4zAt4MX2ST8X3u7DiHs4Ht41RBQ",
  "key5": "4agAqK1UQeUPHGgDEpc1EFTmAuKDucrX5K6Er27jYJZj6nCAngaaUPfY2yaWhm9rcuXvo9yckJmKM1vz7XfXh1pt",
  "key6": "5T8UxdPv4XhPMbF1yJME4jhqXmrKPXzaJyD68BjUhTTP2EZLV6kCM4TWtttkN6GfNa2pkdTjLs34r63Uf7x7sdxx",
  "key7": "WkBQz7oUKCQMFVgJbjsLoUwKbWBACbcsCokxWKn6LQbPNGi1naaTsdsza1ZzrqfxRjN7B5ACp5dzmcvwM42r9GD",
  "key8": "3J1E1uNXtrqQGVeE637RepukvHmT128ocgxZCFQwWeodzub6ixoeN8KtcXLKVNBiBHXoFxM2gsVMDK7TtwwJL4b3",
  "key9": "3tXTmAff34FupyftmoqcwukxKTAZX8w7kYYSWmbo14cKzpiyeD1G5jLWdw6CtrPC1tz4mNkJxVT7d7G5Bas9WWp",
  "key10": "3MdtLYoJQjuaaBvxfRFUadqjKSd2TrQweXqMEcZ1gJ863aktHsJrHG2JxPbWZA1JKTFXqD2YMv6aDXSVNyXEEACX",
  "key11": "27MpMQP5H4Qpoyktw2EEkh1zGaxRLmx8vwYExq8jsgvQjSPz4LHnZsf7aNn8vPCUu3MU2oymDrScULsFwZ9LrGLU",
  "key12": "2AJPJXu9ayTkdmxivcwkhkDeE8czugmJk13EZsCSQk8kCZcL7rx5uWiw7WcXE8Y3HLeAERjuboNhxuHUheHE6DnK",
  "key13": "5B78KpmJnKo4pTJPNfgVHh6yqopDisqvojoftVHi4NDDzzfJ4XNmQgALpDrkviuvFxaSGfxPaezWw8vyagyore41",
  "key14": "3iYHEbAAvrT1fL2Xne4jqe8YPWKSsnTVZ21ZUQzh1DNxUVh9ow6HDV8UhaJJM48Ym2mMFzEfCmvWza7ARL4wKXiC",
  "key15": "3WWxyZEzmtLzLRYcyCDzftwBXQBpNHmHoYWtnoKgAEx3CQpkpxJyAwWqzVnahosLhxFzdKRA2x2SNCenzWkvEbvu",
  "key16": "2ZTrzUJiuqLFSgboSWpWbqxiDheyN3BLYdkBo1xNQmAVKd1K6wGKC1nhh2ASghJamYcf3R7fweptuud7FyeBQ69N",
  "key17": "3bobiMrz3vKd5EfZ4wNJGPJL2Kwo4LPEdNciVuDVssUphZKiD1UwqtoKSjbu1kxoa8RwYR59bNHYHTStsz9KWR35",
  "key18": "kNxW1GPbormLU4kpmvKUZfghhBtstLebtymA5XdCZJXPbMo35WRyKwRasQaj8xZ7ad7og3tPCDdD2yiqqVp52Hp",
  "key19": "F4ckqQwYzXU2J7NK2ku7CM2ap9Aaiu6WyGvftAPaWjzZmSb2PgVwtvWg54S4MdhK9iYjDCfLXyBq343riGVtoRP",
  "key20": "36z96z31dn7RVhepFK6dbPHBRj6MFxcxizKinRU2FPrducmySNqZuWH3f2th39QMAAZZDU9Z8p1H2yXXdUrELUdc",
  "key21": "6naQKf3ggYGACEQvfDbe32rrfzM51QKifFEaqqiyuoDcb6XHNRWZ9feXgDPuENZ5cjX7CTq2H4As61M12HY8XgF",
  "key22": "3N7SA7mrLEn8PmSeaTpHmwGSqZby34qvVNQYcjBoc2wvW48VmcHuouYD6pjm2H6jnhYAGkpTBtds2eXjP19D9HEZ",
  "key23": "46HtECXNN3QjUuZQna7JrGLrmFaBvyWjoBexfXte2s6N2eeb3rezxCTwkSs3XGF61FCM5sTP4FZ1iL6xSfNzj565",
  "key24": "2dVLmcjt8Xj2Acsn8prQGM18Hgz2dJEaSygHrYsmDMTg3aa3iWX7N21TVNjATZSbJyJ5R4USuvP148FknJL3G6Zt",
  "key25": "5a1rCo1yNnWzeTFzUzxytK4WhSwe7cGv9tkRnnowuCGY2au9uQfEcY9PKvUXe3FyrrorouNjQuFgZrvrXPfRT9HA",
  "key26": "3RcxyoRPdmyTEnXp6NykN4AUXmc8pdLHkVjL3mYUjh47uHW7RLj7XqtujwNaJhi5U6dyXWJPXPjxpMBivBhpEnT2",
  "key27": "4b8V41sktRiggxoZvfmMUtkTQw6QE2owvHGu4XfkZETgkjWeuFh1MJVN5v6Sc8P7i6UoZtHrS9VoWBXbfEPwQaDp",
  "key28": "Rnk8RVpQZD95vuLoTJMZt6FBBNxqB3bMX8cKG3VRHUkFBdjNSdngJ3JcJFJTgp8NfJcm1Xrs97RKZVy2hDuMcgj",
  "key29": "2Uo5sW5mkUFfAFVVtqXqBFC5czD4juEcNs65GgpxPu3xPWLqBNiAsRtF6GjqHmNNQ8ABfHdmesJ49MB1tnEa2rsg",
  "key30": "3PtB1HejNGbBHhKqKcz7KoH7Wrj3rFHJJtVXNnEtWGqYHckYD3wXBzzbxvpA6byGQ6Gf5icY1t57UpKiYjcaHrdf",
  "key31": "5XVnNGQSbsFeBdUbP3J9ZbgL9tGE7a3xmwi1vXpLQU5sgaJ1Ne5xfsXz8tgJFXM6nzGwgcKT2pzonGWkh2C6T4fB",
  "key32": "5ahNbbJFNh9BwufXjXT2GsfVUHxsye35bwN3n4ygW38V1pLh5cNzuLD6cYEgFW78pkQiFyMQWKEvSQfvfsBgJHBV"
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
