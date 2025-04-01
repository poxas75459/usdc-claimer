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
    "4Wco8sQznT1tnKXd1UYVJtQTcj6EB6KT8vyCiBKvGYE1XjtWNt2UWebRc5iWWxdsP63tgt39EYcN3r1ce84HjCVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DzXEiHqnGo57Z6UXGjKr6KB6ujYir6cPt7n5XoPcCFg9NcAA73cGp4DhL5M5by3ZT6dHb73gzXRrh6sSHwmP6zb",
  "key1": "4365t33UThjsdck9SCJbVtP7CyRVvwXmDg6tNh1TkgBtUhwxycoVa35ZZn4DFD8nx4KXpRDJf1mAWoujAkuD14RZ",
  "key2": "2LSnQnQJdVfV78KrB9UFxbHR24Z7d5DpBFgo8fni1VBLt3TeZKCUyqUMxheRM8SQZCGK8uXXJ9mNBSHHCjNt9i4W",
  "key3": "5zRa4cMMZPPhFx97JAWVJQ5wxcM4nGFLEfqouwtDKxcYaBAjXhX2x67Z4dG1YAT1gp6Ca15WeZ9nW4oc3GeSiXj6",
  "key4": "jJXLDGa8A26vSABJmUdHXdDS1CK6TGTRoc6ZyFPycpCqrTRERoG7xtAws3hVPkJAapsva6Arqc7BVHH2Zb995Da",
  "key5": "33bk9sCwrRACPrwLJKPV3RCaqQApn6JJPWZVvfNLJ6Crgz1FL3YmdDqfzDCC2hxs4QzmEXQtxv7vamVKNciT9kn1",
  "key6": "4KX8hJeXLXmi3V4jVZn9s6Du4WVVzYPd7HyqQEu2xn8f7ybDHJBgRAkZeqf4LwZwXv6tFofjToK3R26VvT9QEAph",
  "key7": "S54zW7MEphM7JFFedswytRWBeK3aGnsnQEsQkraUVyUaNNoUE8steS2ot81ExcZFDfT7DSWkSZZUdMfj9B4Bz8u",
  "key8": "VUX6uAnEibFGaSJYf72nNKXBfoxCn5S4x5DrC9ym4Z3HfaqxeE2JEY818XeZFpjRfTBfd4wWRFAN7PW7JtNX7ho",
  "key9": "58wTkSqCv8P8kDeyPzAbmi8UcQqzaHet2jX4qHnP1ZK9ZAEhFChz2DwZQpaLHJQ8nKXSH3onRknzhMqzJi6Mj217",
  "key10": "4yQTpa8Sb4gjSnn3utciejDmc7CKz7PzyzMhkb1mTvk9C331QW6LjPMDBS2rwTwJ8Av8d1STinaBUutnfCaQXRo",
  "key11": "g2zvFwNBAgjXMPL8ceRbUptgZTahMXPbydwBGLtyd5hqce2mGYx6NyDbTSFqBAxLaEvNyETNHa5NafApY4hm6E8",
  "key12": "4Q6ekj9KUgwa6ugTUb7jXJo1koDbEPvLsBoBikwctQugwcx4BSwXqAaQEQaLHz9TmmkAtuxSoAFnQPKqzbVFePA6",
  "key13": "2pEsNh1PA95M3i2Ps5ZwWAbafHCQ3mxaxNJv3Ncm1bnrtx3N8oi5gKgAGzj6i2kurRkwWLG8HfFYEkX3xtARdhb7",
  "key14": "DmxBY39n5UAoauVs5mHGJdog5nEjSDRt1vEfhCQJwewa8QJ1FhCd324EPfqKNLvEnSTaaGyjhji9uM8PkojLut9",
  "key15": "4yHjS5EPucH8goZZvM4gm2YHDCSseLocTTqwJMyiCAB3oLmtjYG8JbEeLhP9dxa4fdM5FasgTkMgzNhpBtDRRCjs",
  "key16": "cuR9tBmK3kMdgk3sNoDRdKqurJ4nTHpkQ6xuifjKoSKJwwDKKK5FyrFwZuEihqLprtKyvHvzQvDyb1kKHBcAu7p",
  "key17": "4Bm9T4dcNcpS3kciRDztadCsmspJ2AYQM41o4rGuFrCqb8ZmYbp8wUZvV78v4TaSHkq44a9mYsKhAewu6bs6eeye",
  "key18": "3xXd5KUDBb3ncvb2UCesNbkBD5THkW22QmS9C1GH7PmFaFabuGZCzVrpQNaWvAgCWjwjckGJ2rJ8Ub25W4cLvqat",
  "key19": "5mCkLk2S5zTCaX6DddxQPHXTG6JJRmdyghbm16QBRVBaWtDk14LFsPa6KzEvy3TtEndnFhKhgKSeVGWDvzqstTjM",
  "key20": "4dsur6xomvX8x5ZoqBUxpsadj2HsgUK8neF6BLjAPz2AJu3ymFpAvwEZ9CLLCG5kdUDwp89J2ARiyqp6q25E1Nb7",
  "key21": "2vpLpuHgtkHg3iaU9RviyWtYq17ub5BF12ftCNGqZYzo8xxVaVECfi5MZKHFF3KDBRxqZU1FjczrUDUqVptYbVNE",
  "key22": "1A6BnVqvjbgVvSY9nRUMrgMwEbPpzxA7zoJSgnmHKEHGW3QZt3w2bYWoE1EkrDDqD6xVGrgvXFB8d99X7fVTpMT",
  "key23": "2GWqU4XonufxeCb3smCme6w6hHm7S7cWSzYV9Xpsvuzq6aaFXK1txaWCgVZzoVYxpzRsKFjj4FQLRAminvVuxPx",
  "key24": "4A3sSaJvXC9pn5eJh2umwQYsGGLPuBJhSNEM9czRqpYBhByUiTEqskLfyUPsTf4nFWAHtdkp6V95ibjUk4n49mg8",
  "key25": "4L6SiUGyNam15tTMWrSqUdeb9x52nbGAojS8Wcrx9YMyk6NH9jrhJZPNSWKJQduRNzPknWMQeNiy8FTiDM2NNaRx",
  "key26": "4UrJQ8KHXSoo2Us9RyhdSJb48wLAFpCXzx8dBMEUf1N6bkjTbnZsGpQFD2n9Dj4hat71j6FHPowsNJ9zvTDb5dzp",
  "key27": "2BusLK1w7M1ZwiRUjqe6oiPXeK1dm2z2a8MpXux3jvgEsxkhj4dzXhPxtDazjhmwF9zx9FYroXN12m1ScjjDWoJm",
  "key28": "viYHYKTdY1Pc54MzGfANLDpXXvmpTsHTHcCVnN5CVi6itwTnvV8Vt5cNgTAsZ3eYxoqsfk6dTdD5Fia4cTLeQtD"
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
