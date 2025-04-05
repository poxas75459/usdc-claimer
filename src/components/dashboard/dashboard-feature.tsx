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
    "2WQSDYK8y6aCRthG5Ka9YnMqXWvCjqnbsomvayxa11MmkSLtCS7EHrM1Z1sFBgSz5P6QF7stfRbBzmzi4SVGbCf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hAm9ytLDTKQbvc1GFNZDVgWqWMuT1uvufzofLbF7fqNqQg8NpwmyXLDYsUkh4YC4323WRFNee7r5wZpKWv3tbkc",
  "key1": "3GBqX8kmbz8Rw9abFkYjBDCUcjcyQ8dj8YuvRDNNGuqdwtfW9T37Fh41frf47arVkiUwC3EKkSDHntS6CrsxSiMT",
  "key2": "2oSJZyGvQwAs9qYz5W1D2mejC75HTn5ncP9yaJaMkXbz44nYDs5aiJhPte6FkSJaHPQmDpHXPMmqDj5snw9tEzyY",
  "key3": "4FzZdYwzLdSyYaKiTZYosQKpkBctwhcDmuujsMbf3aGotkEWQkQSUPVMhPK4KQwPAZ96WfLiWi8UQ47b6AtKUwKb",
  "key4": "8WhVFNZE4qtNzJFcPLHHw6hU6MEQJrJZAAnFZe2zEmcUZd7UKWmUkTS36hJRwNrTUNMsN6umaXswTxoN6uukSPd",
  "key5": "3PQzKt1vL1xav9CdMPQoF6dT9wJrizMZ2J3zCGQ6t7VHEH8m8Z9nd84sPJbGCLyEHJGiySGjSimbYvWqCKeAivGj",
  "key6": "4WX3SxYCombeKapvMaGLS4CX5nW3rRNfdqRZi7LsUkXPYznhA76JmCcmyaNq3K8Y3yt2GdNF9ykPW7dVLZxX25Yx",
  "key7": "3SpAHTh4o61MafY2Qwpkom8QijUy1Xi3PyF9SxMh9CHtyNeDDTTyvf8R8m5PqJNujGXL6ExAcobtY4MobJsQqfsa",
  "key8": "4LgS7EYWU7QQKUcNPpDP25w41L7b6dGNwiFahMTmXUqmxpxeBEy9d8buxPtoefMd6X7xPx42zTExVqx9coVZ6tCD",
  "key9": "4ECTQGb1uXetTXEoM62gmRURbvpJoDa6Gzj6xAsHYSXZUVr1t1hQY5Wn6FAoGkXA8naKMbw5SzsiHqZLuYw7GDT",
  "key10": "5gDPQAuA59J466tV7KwzWtP7Z5jUZ9T7AtERGFn6iWRDHJdmyNMcYLUMsUKNpby7471BkVbnAqNtPwtq5UYpryib",
  "key11": "3JPppFMN3w9FpgCe5uw3Z2pxe2As968AH9LoPFUzHQRwxGXEwAe6rgsUt4LA7pKg9chbKdjcYA3p4oPTZQ22rC6S",
  "key12": "5BhX3TpNc77LWMtiXiiM1j1E7AJrXrPXXG8BC39wNX7291kAhEaiEtVEJabpMq5GDaV6D8Q3XwhDmLNS83ABgJ3m",
  "key13": "LMx7d4Pw8Tw7NduUEjjzuok3Ed2z7QtnQs96mnavcHBGDBxbs5NK546bAcdKArYJ1rpdP2zoJrfRC3JdfoFNrEq",
  "key14": "2N2GNUqZncncWZWk9LPWeBgvmQ2v6AT5rDNL878n8wRc3AigTp31PPUEFcNLYmQ4S6Lvp7Z5kew1ahuXb5gQK8ac",
  "key15": "5qBNEYb8DUNJMx8JHJEG9zF9gi5Acghd3zZDcYbSYb17EhVjsT6xDCZBbi4kzoFnbyRBUaxHDvR7Udq6WYhhMZYz",
  "key16": "5DubEA6SgAFtJUp5eYSuda3yZi2A1DgtX8dXNZajRmZYY4cZBCb6QN3upfaSqvPQPiM9ijfqgAsxmPuNr72q6EwV",
  "key17": "2P8tnyk3DtBKqS7p8oqEAZz28jwJpKiAXicogvCJxgPZ3CEvFTNprvxBFzWJhspS893SECVNMWrmeW6ivCFvNys5",
  "key18": "237CsT2PGsc9fACyK4JMY3dPC6DRyWQbUMeZaVjvTEbmVbFGihBEruT2uVLfFmWAiYXSc8KomiSyNmdxXfFSdxy3",
  "key19": "2RyRtkve1U22BGJigsvgZtNfTEg5ahv2FCmLafcqb1fR3auDBQvcKkMbGnHACiGEESCJoyCfu73URuYVXutfbYDF",
  "key20": "37WDtxz4Xevoi6xRDjXWxYb5Wam5LgZPyguzw7ArYYy5qrM5YPDr2p8g9EL9b7d53T9kifs3SbsY5k4PVe8ZWgQG",
  "key21": "5meCX5aRqhh9zXhzaJZszqtA6zZZJZpEFtJWmbSA3XzrGdtizuUtSv7eJuor2ASEoL1JtEDSDVqm2WK6wB424DVm",
  "key22": "2neZbW4YLRqFszeda8vfLdPH3dHURLAJjHUiTVxaBRxT7ajgMEhqfSsHdR3amVLsccEV1zdt3VV6FnEtWuzke2Ph",
  "key23": "2kujBBW1EqiwyR9ZPYMKvCeZZDuBRusv5dV6RG3mjEqNUz4kACpGf1rvf6yhR42uyPdnrbKuvMYRvWewyPi4C5fZ",
  "key24": "2EgRRf3Uh4kwLqPR54EPDznmpWkHP7yhwn4fH29P5CJRXYNSC7VRDxgNW4XrMDyFBVf2q5HuTRYyJ8rS8Abi9UpB",
  "key25": "2yX81iT6NXYdAc8TgyGz8YavpFTn9VQcLtKrvB3u7MoukJAvEGcZFPcme4wzUJcSRAqKNek9mqAXPCZcdzFj8VgK",
  "key26": "4xjn9MEzc1wGoAmj4rJmy638PzJRsLLCqo4EntjEGBrzeCFinxyqwY55WUMFkz84jJxzrzp1wFpvBzZmaLqwbRac",
  "key27": "2k9GGrwdHXiwVKauBe3saoU1VjPkCMUNowTf63M8y9QJ2V1sc99QU9S1U6beLuLEh6Sobh1Mf5rPJF5EKEnsGqzi",
  "key28": "62kPMg1UrD4695WnRD1dYatBP7raVoVzhMU8fpkuEAMrB5B5pgu8sy6XkBDWCf7rrn6eR5NfCeXYAcaGnQ6iybg1",
  "key29": "4MmASSG9HMDYvVY3nELZ4yTLjE6AN2ZenE9AABiKA2XTHgpSRCzr9jEgP4bvrayQhXjegBh4w5wJEF4M7VSTfn3m",
  "key30": "2kM2zYoeDvnWSob3WetUDaGgQkKdH2z7fdUZ3SJDe7CMdP5VtfVfqpvL62V8TWxVpBHrFP7EHMzTaeyVrEgdqys7"
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
