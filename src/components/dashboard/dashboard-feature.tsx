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
    "nuEDCUPZEZyC9fuj9CViFnqCaQZuJXyDYehV65KJqYnx5H6mYv4rDur5xCeBtZ8hVkKCEUtEWWnezGXMPAgqqp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vr7NKBvG9zrRf2wuzGnDRuw8UKC2pkiTbzSM5rpA3oi7jKM5M3XSv2YMZUi5z3zCfAc4gRtCnAKyAxWzvY6Gn3K",
  "key1": "33osYiUDJG2ThknZiok6juWYutqeVhSRBdChJokuZnWaeGY2xjEvD92x4EYPVzHPQe3RnykpBfvgSzJakx4csbB8",
  "key2": "61JL1oEJwrrgEcJkHgZLxDDuU22GKANXKvNKwpm2uuQd3SDJBTW1JC9TyU1kHTch78PfdxtCRi4eED5TDAYjYNZ",
  "key3": "GdvoKgCtWLMtGaK5pzDEgt4wSyhJCtuKRFhB3kteofMSKgxpYSWdEHJ9oQoyAtgEghsEfQvcaMJ1F14wEYaTaWZ",
  "key4": "3Y2yXfT5tUeqUSjW7UM5cqXpTdAoBTWmvwVVT5cH7PRB9tnN1EVQ6gargdF9gwPsyDznTAJUqRVRNQ6kCUMRdPtk",
  "key5": "3Nv7M9jnF26yCotc9aMpvDwGXcUibQhSi9MDuatTNGpC1tKZaC2H772WjyoQkDCmuHTqDj3NZ1t96wpwnp8gK9Jv",
  "key6": "58Ptjry3L1pAkdrYo9iukeMborEY8TMwMeyz56YmfMXGJ2HbXeWnLZmFBzw76dqCHXQKqUdKQPuMsXinBVpBEcUc",
  "key7": "4F6oCqUYSUKTSpmjSNL11NKqYf4r4x4dECWHomF6YhrDovCH8mz5ZWLpG1iiELTgKgBTXv6MQWYp87DmYaUwbspu",
  "key8": "3srugWTLBy3Ncjzg5xKavmSmjbvRNx31GBRfEfX3LY1QdzPQvmQ2G4LqSh6q1UmS1aKYvGqQuwxunhFCipUquLxa",
  "key9": "2HFf7zvdZtWGw3gfN5KVNGVj9981azp5E7a2HhAv6hpbDfqJDhSyQf1gu61ckpWNhg5yeJGq8VTKsYjnAzcruREF",
  "key10": "5GzAdpKEPCTUm8VFy9vrrvMt4nED4MHzk9Adk8D1K8G1q3bquXPGSptjhAQTvHLGYJvQtiixrZTz53WPnt3KBUSr",
  "key11": "5KaZzhDDCM2mg8yypxxsY1LgWJtBzQStqEoDK78h6rQTVEvBtM6p5KbQ86QzXSFycAygzTdhQpTw6RNzhz1XxhNM",
  "key12": "9JSxNzyas5psLfsc7epMezXW7UWDSTELLjcjGYZu5ERJCY3WRD2zVFKeYNSdXQAFg47R5uSod1mZ3xD61KgLmvr",
  "key13": "3h23Nx2nVE1W7ZSPdxftzC8ivdieRr7AHwcEzn25thmDNxp8eNsbLYyCLBKpAv5RoC5v4PZV156vSbLpW8nYNe3G",
  "key14": "5pFSnUcMeFxPXG84gqbTDEHRgpzEDiwp9Kx2kcptYS8BWo3dNR4NKFQ8KyfQ7s7EV9W1mksuqHK9zMGjMeGXamA3",
  "key15": "CJLDLGx3QmSmeWKbRBNo6YzzJdJ8AESuW3AXrwYxV3LKrAm5ZaNZRVKkb239MHynkPYpUKfTZmYTDh1CJmT4rVE",
  "key16": "2hZXGxKzbegpgGayGPar7rNXyD8tVPBHzA53vzbu7tNaFwJUDXtAyNpeNPAy9cVpnCFWfX7khgfLfJpxEAd7QQgr",
  "key17": "3EmLn1NpCuFBf9QvGDmqvunx898G5x7L4V2uSPUXwkhfeXvYixk8PCKJK1nnQp7zV3PPYbFgqCauDiTnteHc55S",
  "key18": "4n57dqVfp6vXA9ih1mtRvkVMWt7btqt9SBbHZR17AdYzCVyAamZ8SNs9mvnvdmTaHWhxMaHbxDvGVN7QnrMrWrvJ",
  "key19": "FQw3cfNvSThmGr2p7DHeyc1yHoKRKEbx4D8a19keLBUEAoV1oEDEodQjYGJDJ6bz1RRVHmB6edzVnEgYy4omzBD",
  "key20": "3ea8KJP9hsE995yvdGZU5wuEUxJWng6yqKRZgunZkry19YNJzkxJNSzbV8uBhuVvN2oRiL3uKSFNNJGGUQ9avWaQ",
  "key21": "FSNmDMrGLXeMK2v6H1LUG9VnxDcXGzY8522hJiUKk9GNBxtxMduQVxy4raUKCiBnF4GdaHwfivtXvz8Tu8TMj9A",
  "key22": "TuZHNP9giUit4kqiVWATYroXzYAVAsVCf6i2xbASRxvag2YQEgX9vp5R6TTL58AP6aTfi8Sk4YNs9APR1JFTbQg",
  "key23": "2dRrwBY59fZNU8PjTkizv88XLHV8dWG4WUw7Di8pKCQzcMj91uksfUhU3drWYf71x5jiofRkkE66nPzUpFjr81wG",
  "key24": "4JG14sAm43CvznPaqqi92rM5edgnoECdE2YMes6zB9gtVwLGGRkx9TxMKEg4y9hr7oJf91pf6t4kmvBesGcU19wt",
  "key25": "3NpnQC1M7ujCwA9HoTENX6ukdLVqBMyxi2WcRHDmuiNWWpBWw7xUkGaVBpeVpveapNiZVov6AWeBr5qq6ertxM9U",
  "key26": "2iXH7wBrRJcUTAZ8FimDedcUgpp6eExiihdSxaygkZjCmudRxeFEBKJa8JZdQtMaUaxBvjd2QKRopuKgCRnqKFvr",
  "key27": "mLhkjdsunfgJ7Gsd3RHbMyYpj8GxCxczgXUUwDPctWoXDi3PrZGszbDHokgXL4mxiAdmt1HGLcawN9eCwqd4vLj",
  "key28": "3SgNjFYVS3dsKcbrDBf6yQkQfgM1neRRGR2H7xd15jAqjQ5sZSE8dFHcZUeC8aQFB49Ktw6oUpm9a25HnGhx7M7B",
  "key29": "4qZM9t1Ff8w5yxjCzV2yu9mTPCnbKesKt1AV72W9wSE4hh6wc3oFBNeCjpJzndt1shxTjHq4JFd5ruEV1zfKBbsB"
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
