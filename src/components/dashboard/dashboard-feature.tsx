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
    "2R2cUubhLtapr2SzAX5mZWvvsJ71A4hKz9tPzVyjng1CT8HgaZ2DpGS9ezrBGxzxTSPrM41mjpxKMooMxHJDDNKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4apQ6Jy4XGaG5BVP7mFd8bNCYgV1uDKskySPsrEKhTZTgpPNVxNwspK4XBzxZsqBpUAQS4go9HgvwLSx65H9kt67",
  "key1": "3agXYY5A3iV6mEKpL6CnepPRbhvAkybVEfdb2BjuXynAnSWEWopX85qVyC8VtHKxbGXMpR4FPdKfNoV5qRWDPdxp",
  "key2": "4G723m3Rit2C6snbrMdye6tFamYAGecAZ71sb9cQbDUd9fj5TCNcivW3ht17KsozeM3WHT8oeD5w9oB5vDWozYf7",
  "key3": "4SbLqFXhyXk2nSUKqWPos5DKUicpxDa3Q7Mnad6SUgtMG6zcdqPec6P1UwAsHa44uzRgLDwnbEkqFzuTQJQrXcJ5",
  "key4": "5rngZLNvkXpwQRAKUj89auG8u4AvZRRsHwxmqJCZC7F9ebGFj1bezxDWjZ3usHEaNs1p8VV5AWS5jvCSz6NJtB5d",
  "key5": "5B3PJtDXMcLwSMHQCcJR3BQnzcNvP7JbAkLW6n1aAaDk81u3XhgTmVQwPVFu5UwxpAZjs37XzyCjfgXCLJfNftdS",
  "key6": "61FgRjx1FwbaNKCcxmWAujAK7WYVGeJp5mHT4NEPmFcr8SHidbDTMhkbksPoz2R6LnLFMDL4zFqqqxwsMMy1TvX5",
  "key7": "5YxTe37D2LBg7g2ePCMYuzL14X8oyMccNWXibRMwr3n2npWRbRv6xTBb5w5NhYZjzA1qmHVQrvXPpU8WmyECzNjY",
  "key8": "2YJ81PnW7HdKMvwpHRjgqpj8TngipoLfHmS1F53mkdV5QkHgDXHmeR2wHMTuD8AAevuvb3A7eENwCeBi52mcC4jn",
  "key9": "4pdJ6Gzkd8c2pqzAdrm74fHnfw4ryPenECfgjcNiquw4AUj28x1AMvzxrDMG2scQCvsACr6TsTaQshDKGgu3oxud",
  "key10": "3Yuzt6j2n3VJUsXKoEmCjB497UjKZmEiuvWxLPtH9iiYFFaYXtN7NjVkyBNU7PRmhikhsULFgJBkfSgoAqFWTJ2B",
  "key11": "5owrRBBroBKG9NA87dmdvcC3epFnWb4s2LS6781HTj5NvuoqDgFKy5u6iPZAkWYiTdyYBFxHnqFNzr5tXE656kK8",
  "key12": "4CEgg4hgyDf6P29a3AW25GvXdxtV21jYSVsFWhKJAk1X8jtbDAkFznSirpa5SDEoWsHxdgE6yWPYGUwgutaH9e85",
  "key13": "2MogrdhacFMsr7WS61WVHQo9vjDNojBxhNiBazSuWGQMHhXXrWr3MHeUkJQC7n6kJQzJom81Byrkj1EjHMBdJZdq",
  "key14": "3zrhL3c7EGPhFqQzHiXQUemuVkhGZUMqyWtA4gRCz6H4qJQhznk4H4X83YoPTFacdduSFsGLYoJhXkqXz83Tns4d",
  "key15": "5mL45z8j7Y8ER2JYjrimArctakySBD9HjZn45ajeQmqybVA8HP6cWG38SKRM7DHaQ2BNWF9dNKkizjWy7n4RW8bC",
  "key16": "2jRWc8kueZnFbYeozzjvBxqGvTWew74tjQL8zNmwNacoLgHr9GYRqKHPzoBeyDaFn1FiypqKNAGx4ZYbLSHnJeEZ",
  "key17": "3hNeVw8fRbdxndFm5Ny9tPAFBMzqsrArf89Q2M5AqzotjqjeCuNZfsmZF8juEL2aKJAt7cwLbzExFbRC8qyrtZDA",
  "key18": "3YisigvAPsEjmA8LeJtb8HsjPdRRWCejEKtq1mc1Mrbd22ixz5YNVJfgZA9iJCh6AYoZDd5MPmQu3F37VwAT8rrh",
  "key19": "23CCCsQPbSurwgEhKBRVQb4D4EeXqLMhGVmFeZLLXqWqz2DVi1iHusyzD6nJnxVw4afGcEh4BV97SfdYXHwfajhB",
  "key20": "3JvDTBzwS1LE7baE58sLdHRtUW4ferXm5CHueWZz2YDyd1ri4YidUEeT9sz4T6r7uGhduSGoGKFekFX57NGCUuNw",
  "key21": "2j9aVquXTqbB8swg2dCoKNdYcPVBN3ZzpGxwT5GfMWk4Gq6Nz9cQ6Fa5xPA3CK1JdunXDkfbH8ZqHHdrMpPGApqP",
  "key22": "54iQ1PxfHQmn4NsZP5iS3QmUcP4X7cesPxem5Eb6hZ9AvTdwMy1cowcAcUk14FMWWBBiXnTdZ9roNsQtQhwGappa",
  "key23": "2n4uq6FQt8LDg8xjMGk26mkCJbftPbwqLRkoTiFkKwRRBuEA7KHBBk3rsqJykLwTQP3bUWrJPWf7DJyboBCCqwr8",
  "key24": "4HWWKqdRyXjBQ7heyRWuaJz6RgirFTzMMvvuJBE3MMysk2TpxCfKQat7PHpNMa8SbKYiEGg1Zj7bijDK7CvvkZQG",
  "key25": "2L1MTz5Xo6aeY6Aj5kkw5fGDbV8trqHZMPwFYES8KD1wifBsPjmcaL2bzJoJLoesLPQ87Q6g1mnqUSudGStX22wf",
  "key26": "Ci3UjsKNhbyhshMRNYHYzurDm2DWjeozdSTixtynguN6E57rQEz6pc1TyPzziSy6PQKWU1rsemoXrSgTc4BjhBJ",
  "key27": "5fJRFhs9Du3Cx1NRv3KnS2qcqogx59yztB2qavt6q1EMsA7yXkbb369MvTSTDLYvMxLA441k2gh8gWp9zMKVhmiP",
  "key28": "q7Vfx7oTBsvg2tNRYdgci9itUB97neN1JkvhACmNvMfNmUouikKKTBwTWuQrp6eRaNj7aFdr3jRRLmj67jLYdq7",
  "key29": "4VP2ymxZ63gM4BsfwRwNCWPT8eSALjpxpRNH2s1swc1Xny3NABXythoEV4HkTjTpj1qGACYid3TEDu4fNipRHctH",
  "key30": "2yc5sXbeEFqY2B5XnHoAgQvXyF5cMcjgKAJnYZF2MJ1tLZYpTdUF1a92gA9VCAT2a6MegejaMRxKqtCJcv3yYZXC",
  "key31": "5XS7qWsvbZR2okMbnbBwm4PJ9RP1LbtMF8EZh19p3i2xYuRZmCungWNaxUKsvzN7i3HbspVigZcNC189Zg1SnNXs"
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
