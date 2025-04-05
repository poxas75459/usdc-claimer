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
    "Jauns3Rc1vry8qiwaGRLQyvEWrdbntoJbHkexXuETe9n7yuLTN8TCysQ98nzcRUk1AnphbBQot2hH4bBhq93hrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d6rx54VpXRwaUgwgN4z7VsF2GxkbnAsUdgo3FXGC5FN5Gb8hUpvjaF5buvGTUbfLx9RqxCnv1VDAWDbB4BtreD8",
  "key1": "nfwSnDcrzzKVTnXKGN65xXa59iw8Ja8nToLqj7s6PEHRNgaMoeQbz6mW3NBN1CFcvEgLxUjTthFfpJGaJEuUJgY",
  "key2": "3476h5qxesRUnvbW311BQy6NEdaoDtezfGCdN25AUM2pW5F3xECkqKV3vkC2yiMoFU1tt9aQ1wBfHzCjefAHN6zk",
  "key3": "3mdvbRsn1hyzcHQvmoe3b9Qdxbu7Jitb3VqvQCbRTpnyv1P4B1RoYcGfYytEKTo6A6gwo9LnNUJmv6T76FAgzoEF",
  "key4": "4732eJnKr7FmYLB2jUadqZnBLhhoxLXh6A33jPc4T8APTdmVEbZaWP84yz7h5HJKghJjsP4zf34Q24e2zgaS4dYT",
  "key5": "228yWipN5QF9UZay7zoPNgdcaNzfZcopQH91myngpvWZwUyRCQnQxBbxTGKP8yDiWGU9Jtbtxt58oQdG3P8x28hD",
  "key6": "8rMcMHbBPXEzERKNaJuC4iM4STh3nRMFwqJAUsqu2qndAWyrXP6K5BQ5aLMEfKP52ZMeNRJ3UuFvV8Kw94KyCV2",
  "key7": "5H5jcsYrbGtuDjQsUW4Kj2WFBPbnQU4oJ98wonvxEuxqpEVH9GYrTSCLSYXWmdpU7btbGKR8kzT81d9SRM9JcVFq",
  "key8": "TroyNz4df3NjWq9i2io2SjyMzrG2aqrHAZgJ5Ga5p1HANTcYn4z4DCjy3nUBwVQzxEfZpDh5gd1HMm7GGmDNJUk",
  "key9": "4GL985Sjx785jzwxYbyhf3WELeM4WmMvcFdrcbKeNfCw6PYCWfnSdz9TyTxYTnMUVAYQeKzwQXWa7F52jpdf8zXN",
  "key10": "5VASsirbn8ZoEfUCF4uUnnUGto5Lqi4yY9U26uX84QN6pTcaj8hEYuY5yHWFnmZtMbFVxZ5FbaHCPLRhESaSBn65",
  "key11": "Ez7cyiYqx9BEtWLiEP91R4gLgjj4FhdGWdC94KZX89Fo5T9U1HRyp9wXBbCQbUBfKQTX2fnzvh4SC1JQVy9AizX",
  "key12": "22UHxZbRDM9BBcAsKhj4jKmxCbJ6zMzcZzwWwpFzvhd9u9EB1hym1xG5mpMr9qpUjKHBKUxddupk5ekodykcSxn8",
  "key13": "5myXVRkxwFBJj6r472S8WCxoGZdL9PLf61AMdy6aZRGAdnP2tAYXiUoHrhQTEXqCBtLNPcCDxXk4VdAf6oc3Zc9r",
  "key14": "4FiYZ9P6mTDBpDC3kX82PSJtvndnwt5pHfnJy9e7znpBXQRbaV5TCN1nf2H995scVxTWwed2RrRahspF6hLfkAjR",
  "key15": "5LCWELQ9jLAbhYbGpRFKEMZCZx3RBYHa86wBBac75aKfZPSijy1dwttLavAbeSLkcS9jqf2hWFknC23mycwbDQ9C",
  "key16": "3RfLa2HtBZjQToTi1RSaxScKjkBRwVYhavhahRyaMZvJPRsq2g33se7K9sW7YytsKi7WLqihuzZ4BU1QgBY4MFQz",
  "key17": "3F2iJ2nYRhjBs1YyvgiNT6zA62D5Q884rJ6xxkpX63DS7HroHjnmpFNVjYonQMK9Ro6jNucbATDkYn3DHVqhSUFH",
  "key18": "hxG9p8vQ3LwxzSP9CToGwkgC5MH47VZYoJT9He4DgBhs1Ncx88MpgsxZLC13MEwKTz1ZRqwAP7X82jReZzkJ68Q",
  "key19": "Nofa4VYANtRdKBxKa6KtHX1cNvK99JWes5eL2nBBWbfwnvZsP4JySsY79XuepPCsp2stFDcWB3C99WxrpZGx3Ji",
  "key20": "2UCavBUHvkYVPR3TjSGZUXojKP8w5GRDn3JN5nikTWvsn5dpo6tXktdgdjb5jT8sr4Eo3jxpaVmR3qBoAFKzpZ5v",
  "key21": "28m9jZ5MFEDHqgkiG5trSm12DGB7kmZE3JmHJdt8DMqCRHNurwUMDjuxdQH7fmf3RDkokKSTXDBCRp198AZHXBPT",
  "key22": "2wi98Nt8Azenj5YKvSbkYfPrKr4CTqnnjsEKSByexBBQZZptZk1R37fNkh1ppQg7VP9yTPpFGCpq4iNRyBToH7LT",
  "key23": "5W9X7x5PPmsmiHawN5Ad995rRrmS1L7Mqczn7iUKkGwxPyq4p7SAcuQB3fqmb1KnUT8oE8QmyH83KAm4oMDHbQMn",
  "key24": "2gcEyLyrXeG3buLcbRQ4WTHiqBqZftSvThyjZxT7dh2BYo1PyP6A8cMCjbSknL9bXyML6c1sX89fsQKFaximfHyZ",
  "key25": "2XCHggFhupfCvsAxRugGWqvK1kPB283QsnpL1ciTnSr6CbVZa2MLtpjUvsFMAxPcGH88e2vDAruT6A9yUCUt55DM",
  "key26": "8KoSUjqwH7UKJ66FSdV27gvpriYqmcKFGvX7xanE9wLPL3nCCUqiiSNBXwad3XuQSLicaqJvvsQ9ur1w5p9zg26",
  "key27": "5GzxNqMkriz1gRcA4zFmGDD4T6iFFQC9GV9YycXDpHU4kMSWvZ1RCMiiWML2bDPtTNLjb7XNFRzarK6CUqfxZnGV",
  "key28": "3fDnnYMSj7eGTqYgPChpPuao3aXuseBCkKejfPQytnRsDPXFZWDM2biqoYhggcVjrhUbtTDcvginMF8GeZPcD2LJ",
  "key29": "5ikcxnHJWML1UHFhJvzsYtPQEVdt6y9L4qfQxuqa97DxCy1sFm7NqcNaeFrfMPtBYNdyVoRftbQJaAf4tPoB9ccZ",
  "key30": "VshFxaxKen4gyUiwJwMnpt3pRAwWt2jE4YDQo89R27XzsGdaE2SKVomRLsaBWxGcYtxBepamH11VLaB5W4gETuk",
  "key31": "5NYDJqtPt1fSpZTwcq2ftfMoNqnaxtxRVSaNqnDdwGYh52qzojXZpENEghaEaNmAgBdbrUPykXqsr7z5nNod5QfV",
  "key32": "4R9Qxa9Z2L27JhBHzB6m86fDEpHeYh5sFmt2kv3qRfwm2CHkZJRsdoDEYrAc6Whv1FjmqPgu8jAGY3qotwXYAMZM",
  "key33": "2PcKJUCvcdfAiRvdJn9kYjPWEoXMBzs16VRGX34bJkgDpZ77YAg75NwzezVUPrhQRbJTysTy4tAwgemSP79wuNzc",
  "key34": "2kQ2tBhGkvwbZwZ33KAQyuGptdokXjtnpa1hewUBeFdhNmiJo3pvVCpYn9JnQdJc6RU7iSFvJ96jK1P9BUV8zpue",
  "key35": "2JBGHn6vxGC1hvZjUve678ZW2Kv1geAzke5NFXsa4j2s8vWeqhETZypU9yywFtJENWh5N6GoDsw8oc91V8TTnUTA",
  "key36": "3Qzy7b1WfAouhqZqNJzePiDvujDh8fFYQs9c4Nh4o8EPFAgmGzcb15LbCsYLaXwdgG75bBWREFfbbezHTSdmSdeG",
  "key37": "2nJ9QrPJjf1yer6AqB3WaGtUYLYu9wFHsuC3ckKHDokQwVMjzGskChVzeYgJ9BuKgkMdp9VhCsXkP9AS9Li95N6V",
  "key38": "3faJ2CKD5Bvar1uECjpxDyuXA6E43GdbXwmASob7nQ4jb9QQ2RnW8WVHnZNxkN16JMQYXNsAVnWpHEQfhxGbxyaN",
  "key39": "49ixzyXVe25XcC1gUEGaqF6jgs8yGTP9oPtoybbQqqTyNoKZrP47L63YSwAx7tpqFQZG52yLFnNMyjZJzd72JF6q",
  "key40": "4CaRUSsYY2AcYWgcmprZxQ9k66UDamHCRWZweDHw67S6ETNjJbQRTZugKkrvEwSXFrcBHVYdM8NdnmNbGWEqVmdA",
  "key41": "jV5tJHRgVXnu3RL1ae3mhNitYwyVYWDCQfvQZtFJW5JwLoKegj7HwFm8X6q5ZJ5DvXMXupXa6Ub6Pbknf8EMMpm",
  "key42": "q4zkMdWX88HML13fdTyj9PPV4Gi8Y6ENGRsmWUM2nv9hseDsGMYrBByyHwEwBScwJLWtBsRAJhxokmwztZRitfW",
  "key43": "2Jjj4qh2tsSkSmTPN2qhP29uFxhCvbJDhhUzp3yUf9edTG9N6echxwADDP1aEhWq73aE5Whziekzx6LUHqVxm72r"
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
