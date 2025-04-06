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
    "4NzAgCWBF5tHm7Bznpi5S4PQ6PjEQqHDkn329wZ4bMhwMRywWaroBq1K5vrb8MBwgKjsy7YGSJqon7qgdwYL2heR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sHbS2KSWF8ExGuL4ceJ5jLF5ZFTm2UpzGGzT9ZfPSTLy1fajjWnrmqHwDmfMdcHNeqY5YPsVF7pV6LFzF3CbbJN",
  "key1": "2x2sQPcKRDer3uZQTNsSPXtR8R4gobU5hyqyniVXyYR6PosSGq6kFNvVEYiUrCtVAYjW25woTLBB1W4VPmYUSNvH",
  "key2": "2PYJMz8sUamvEPtxfsH9P5TYEqdPX44ok52zusEeMgyx5Lr8URogiEjF3YFtJfqZmxSkXMBRRjn5o6ozVXw7p7Gg",
  "key3": "4x8fKqobniUHhjpfHzkaMEiMFhg2uZhnKfivJjWGboVYVvt3og8usJYiti2LCxKJ9YyNrTFt1e2smAczA6DoBYaP",
  "key4": "4tZvJaZpAsgDXGYvcmejAXCuF6aVxNuemNfkqxgx5XsUE8Xg1SW3y87TvpqWsnzhZQb6NyQucMC8NPEMazepVEwn",
  "key5": "3N6GPmPj7QSGEBH1JqeGYquTxSYVu7CUkHuGCyo3qbQ6Ns5oqjGWiKXBTuU9S8nfjW8VodGzPEJvpWqyyXcZszVL",
  "key6": "3VSb4Mt3XCux1VxoHSX8WkFCQqJ7Dihe1UWjAGKu2XQP9qGd2CjFX6jDTjhWfUDNr1RyyEaihqSu6i8xLtFBptqw",
  "key7": "4EVx3imxcuw91q168p3RsaSGxqezpFX4wUMmhrHvFjCHxHrQusnacPHQdeEWd2oR9gGK3sYTs1ZpG59TwSzvTLGJ",
  "key8": "2JMjNcNUynWhFNCVDsdvTgAw3rpvp56Gb4C8YGyjqsibESUEd2QXGiSYD5xX4u2XCAZLP33H3ixFETbuGXBRj2MD",
  "key9": "4wJSoqP7KRNx36R1zVKgUbrBBmx2xCcfkWcbMvQt7JWWdLJ3kP4Rqi354FVpyz2RTyVz4jkTzWc3ShkxswtNhJ71",
  "key10": "5v3otWFCK3KuvktaAE5gem5rfbUJ35JboxGpYFG1kuUp1WyYHxVRc9MnoHLM9nUepaEKBNEcWi5vRqQoJejV9smG",
  "key11": "3K5ptAugzM3o56bzbajSBcorzTMDeFKA21aXm2U22YpZ38nokkNxzJhzN3VZRYGPkntULKq6dzxiogeJr36bXHs",
  "key12": "4gXatwhkaCW1aVeiibVT2NjccGbpTt2cKs8b7uWFfgSHckKPJtVaCeCoYX9QAGveo6GqW5ZkQUgNgQ5rsZCfW7Kr",
  "key13": "5UnuUmEfXF793pZM8TNJngsLq8j3b4a4DXBvtCmPTdoBFC2oZSJU24XauW6LKgCr7HhbEaJc5j18NzzHc4h7qLpb",
  "key14": "3ossCNS66C7MjWUNiWFVv4uNFWe1wJwpur7xKdswhnxsQ7qEng8VBcTF6pVCGqFVmaH5nRgkvatYSUWUwZqWZqUn",
  "key15": "4S72JyQyGc94ZobgVdsoTPnEWJjd7o2YMRSQeY4CDbZE1Vn8PocAyBLiYcexWUNFAuoi725DukLn4xkWqA7r9F2M",
  "key16": "xgwbaypAM71EGKBoWpGHpwHEc4zTrcAKLRCBxj65peP7nkxxsNpXTSa5G8nqVTaiKcx4619R6FF4yBNtFfy6mKC",
  "key17": "4JRahgsc5edb22Ppm4cZ9MNs8UWg8xBnLcjiX32sVLaa5GAf9vKDZe73AMwE92ondhqeCa5JrZMbkuXc3YRQpk77",
  "key18": "33kSS44RTRiUhbAC9XpMsMUTQvzfcaUeXKQu26ee5ftVsXCmZa5gnKdvJds2cBN46juwuqSHPtQJu8MFCKNQPcFo",
  "key19": "4mAK8QcUhswZKQbMFNoE3HNQWs4PoxKFvt8ivxfkkHmvaSb6DyxzkdLLdrJD7rqHGsxJcwHWDF9ZpqxgoKpmv3CR",
  "key20": "3hrVsaMj8CuKSLbHHqJkL9RTyY1RuPTGtaYDMxyts5SgevgfdEdcZ4yt27AQLy9Xcu9Z6vQeTk1rCWktG78MuX4F",
  "key21": "AAxiVXCpv9KVBE23FXU7LdNGTjTCnU53ifwGx1wMJ2rk2q7BbbkC6VPC5QAjGF4ZPpvDYrT3n6qxEFFes4WDEpD",
  "key22": "5dEkrKX2jqmvrV9xGs8vzZCuGShudSsNr62bD1z5GJDnUoz5aR15PRkEdG5oiAkAdJnhr9ovwBPC3X2sM12x1QEu",
  "key23": "47WAcA3MRurKuziDCNRQ65W2BiPg2GStaumCg8AXKp58Gcoku8KzWDW8Kh8uLSqv9rRquJuNp9gxGHDcbokuK6ZW",
  "key24": "LQToraqLrrb34XnnY9ShwntTcpgkf2Xtk1VSPTUi1GhJXcfHVRtxq4cjDt7JygyheeC5w91qDMxaSrpVUL6LRj2",
  "key25": "4aFaUfyRbjtcYUd4Sfp2HchMKFwzx1c7rKVqPv8SMnSMJDGW91nTZ1RyAYzQHBn88LxNt7fc4cL1AccR5ZHvcXjA",
  "key26": "5VbYKsmzQCeLHyVNvjmgV7eBEcV9QJHJneZpYypRY4N8s38dxS7QeFgU4wwTTc1ViUDPJomgBkUQt5B53dJzgwWi",
  "key27": "3L8Uii6JPNg1dt2mH4QcHc5WyQJNuvtCXcgR2vwyyZDaD9VhBDVKwPUEus7DG9SUGR5ctD5zorwUu6uVPjVi5KZB",
  "key28": "37a8nXtQuWUeovB126vYxAgNQXWqn9Az2XuXpSZQKnj5Vdwhhc3zL2RTHHYoqShBBgXKXGFD4XQZkAzi6TMtKmxm",
  "key29": "2n9DosKsqDnTaETykLnYV5TFqMh53K7XHSVYaXUpkz3m4G32wXY8AjwXaS5GBUzdVfYE5py7vdCfLBqBu6Lg9FjY",
  "key30": "5udSNnyCLFvYjKmaPMEYm7rx6wZiqV2bVD5TRo5tmQEDv4V9mh92tJpZK9Bt3sTHdPJNG9kW2E3n3BeXWGGP9xbe"
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
