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
    "5artRn4141Y6DPt3psbqa34to4JURSVN3RV8T9jR1JEN6eMj8jCnjgYb8XD2wLZ36tmimJi16bzQB2cSXcWiP8uU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uTkfYrKio3QT4tZ7Bx2TMU4mVQ5cDdypfbZcUe4iC1LevA8C9uqXXm9kcu2BeTtjfZnWCDtx8tJnfeC1d8bH96X",
  "key1": "5EA17Ve1su1jYJB7zpfUQcpvHG5sMKV7UQxMJfDZ4s5TF4pNNokKwzUEQMUrZ4GZetTriEZH14sJRMuLfK6zsccL",
  "key2": "3znnSMrFkJq8ENuf53oWrBT79n5K2mMPcd1JU8nJ3MoMbNukfjXBdrFryr7ejBGVLPBSwEPDGKuQBcD2n2YR3svh",
  "key3": "37Rh3X5NSjfzMTjrCtpL3uSvtFv7msKdGx5ynT8DwsZKpFg8kJiAVefAHt2Aqb7d2VHDviQLr4WRBfM4fj4f9bnr",
  "key4": "2Yxd227ELu8MwRE5LpxrtbcaZk6hvk5QvCnCT1jNf2TR2UNXxRhdY5G9nXnqaocZg3cCzMXVuVXfvBKVL9WSwsmZ",
  "key5": "3ADJGdqFYQoPu8yqWAypL3syneEs7o7DviQjsk6PDY7BEckART369TipiNNnc2tpYr98Xqf9aL9DfjimWPLg8qKd",
  "key6": "dQjPLemGravpVQ8AxrTWJitybE73XY598qsvgiHxu1h38AyxM1J6LNFQRWGGpdhQLmhUrbvzvzhF48GddNg4cSS",
  "key7": "nrbuMkPqTBctn9BawDhya1SL3uewqT9JKhJXv2cTcdFDVXWyPEJPWvhXdTLKF6bZCuh9qcxvjAwebdsReEpYQWS",
  "key8": "ToQAy3uDXWaRkL7SoL8dqw1vxkAa9Lqw5Jr1YbK5QRqXaHdp2yDaJxKyfxG7TtjqLgHd5BFsX3MabTPQBcYeRis",
  "key9": "24DjodJ994QbfRfbPTbs9Q6bn2fkacatExU3v1msoxeFNFVKBgRC3GdFCYCWXWNvuHhXQwCALGNH1SwFzoSn3pSC",
  "key10": "2p9M9CvH4uJw6kvYSozXbHcmRHRrwHei7YPze1YAH9chbZJ1wtDkPCapaEdu2Eezp4rvd7ehBsy4aePVZin5LxUi",
  "key11": "3N6AeEQSHzomcxQCxysJhtqkVoxneac7F4i4K6Wekj3Bf4AuYXnPPgCMPYdCvutW2F8D3JeMmBBphhEwaa4wCJub",
  "key12": "5WNW7BmmfyCiw4yvzSU775qZMaAb4oMPJSQ84LAuhc53LMbKXDiKDtCoSqfyo4zknLbaa8XysTG48C6hNs33SMQj",
  "key13": "wKTRrmoEhfYavqxuPpLGaaadwAz3ATH3XJ81weCmFgpvujt27C9QBV2sWRrQHPQau528nKAiWGFmA3TxTnVJdMw",
  "key14": "5AR7m7XcnPezv6ZXRcoGN5R9HQTAEMKXZpdNcftZMeUToedP94wSkWkVnS8DYqmrs3XtxbpM4R8edMFjK68R3ZCS",
  "key15": "3NN4wVpaTSkHR2xZULt1Qw1drxsPd7NaTb2PthB4jMtp8tiSs8tjwAEdPg6DSi9Av5XwY9zmtE92kBoYKtkw8hqS",
  "key16": "2K71XLDSsaCTceWicTkLywuA23sZXisN8YRcSLSy1MKHgmhNtDMkwJg4SbuQwb8rTExFM8HyZjjUW6DzTAYYL1AF",
  "key17": "3vbWhsvDwTbYC4BfuyDZfvqkeKpeSiTreq5Sp92TDQ9UHKR7HpzBNjLkX5MzbvYdAYUzYjSckk4sV8Tg71h6xeyP",
  "key18": "2NiMVMumnbmjPPS7Hz9rzjpWdFdJUXo5w1Nbtw9cqdczX5aNMVjPDoxWRVi46EiboX4y656SNPHj4Zhv6MTJrJ92",
  "key19": "2xJ3PZhNpN8rjCVDZu9ShKsbZnyAEgdsVYfJexP8CL53j3DkaHudqk1iMEaQPV2G3gpNSh2bF7yjMhed9YUzFXNK",
  "key20": "4vP1g8kJ6RmqFAz5LMvUsLpoM54vh6JVtFs9Bx3sJB7Erc5dxXm65Ctq9EBPGM2w78rUDyVsBBFkYCDN4HYhnJhJ",
  "key21": "4kGdVJUEvAa8m8Uh6YE8ADHwzPVYFTAikyUPY16WwZpA1EBfXyEUYBPZHy3B8JU1Cs3DVm7XXMm2pgGf3brvfArW",
  "key22": "4dFKLfLHBHEsthbj9XnTCjJjgNASp8ZGCjWJzfN6vvMs31UkXHu9W7Sfj4KJArn2kk6Gs38VnLPiyPne3UkvCyp8",
  "key23": "4ShFJJHBSjJYGe3oWduKZwWT4iopENm8dE6442jBg4KyLiEdQroYEFbNi7GPG8c4h7GppVX5UqGGN8MusByRWxgb",
  "key24": "SehQowpxpHFXH54quf5C9nECLPDy7UV5qGDeGL5GCDWjRnqD45jt9tn4SUqr6c3fz2Dkg23h4nMe8wtLvgH9dkB",
  "key25": "2zxvEs5NQFoAx4J8zauMBa8qzukka2EAUXbU7Q9fZqurrLFscbT42EySDZsru79icVmWwqBCvAHZuodxsPJ9Lz1u",
  "key26": "42ETkom5QzTwdixsVGrnZ7nuPp95XSzwvJmtoMzwf7g2RCMDYakFHRMgBwQ2bdetiP28HrbhEZ8y9rujT6CM6e93",
  "key27": "3YTbessqRM56ASFixHGagPiGA8rjg6HkMPzd7rWHcbyZ3zNu77JEKLmcFHSPhih2MUWrPpcv63AZMFUwrQrgptjn",
  "key28": "4TBY3nCfMXkb4HYSwPSz7p3UNitNffKp97Em8LxzjfwxLjBj379dqsA53PHTW8Jg1Hk5qxGsnrrMXZB4CLBN6R9i",
  "key29": "4Tga8LqNm7pm9DoxjW6TANdgE7igsZ88x71ikqhSyCdGpGjwnAcEEyhAUVpNrmYMhVnkdhxxLoXHMHRE5MRM4UgD",
  "key30": "J9o9RABY7UEJG8C4s3RDxrZ713GLjTkJFADmvrVAkio3hGjVkDehqELxCtPuSkLGp1pPQFLqfPzWawbb5zTRKmf",
  "key31": "2CRJ7yigwpdQggqxeipJgiL3gnFrt8J5W6VUstrqJF1VfsccEwW2fQdEMMrk4Yc4vsD7kJBtbdivgCsrbp6RycUD",
  "key32": "5KS8bEKgHAqPJ7hkXMRs8mi8NDnRGrsBXRriPXDHw4MzoQCbpGiof1xBTFMNa8BbqYiyBNpm1TvWLThuCXLTHhcv",
  "key33": "2iX3WRnZFc2jW1eZg1dEwPVH3xvcfZJQN4X7YRgJbaszPy2DLxfmiTiuc76oHdL2j67DTtGbzuY6A2YTDtermiiw",
  "key34": "LmbLErfMbH2BpuBPXfBWNvX8EL1rqxu75P47vukWuXbpC1jaS96Pk9gHSud9NQ7uC7Fon4fHEFFtkTS72yAVNvP",
  "key35": "2u3MJut8AnqCdWhMxeB7ud81caRiccJoVLvPXPyfM22MaBSLzmeAJdteuaUo7au96DoayJNV7XfDZu6YWbBwUK5x",
  "key36": "3qat5tp3CeHBo4ah3DgoyWbDeh5pgN5m28yRd7nkhYahZuHYbDh7C9jQEPnvRVJ7cU5tP218ZUWNyJ9VmPZ8HGnw",
  "key37": "ZPHkQBjwSxbTVh1L7AkzhcZXQyiMEkqcP5pJ44vxJNSr9jaenWg9CN7gLSQkZPgDQBqyeh8ciZmQTP3prbNG13A"
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
