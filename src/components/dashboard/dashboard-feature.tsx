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
    "2xK1QYXmFyxytAqWkBoGqxEpHLgozirH39m7ouqBvQaxd7QWr5Nj3SsHc2nGwMJmSM8Jp2m7tiKWJETAy7E3pYwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Exsp7c4kYy4G4faKR9SbMTidrTmFB6hmu8LgTDr4hw4uHJvqH2fiUAGY2pqy86ZHPSAfxz7wttqWCnXWgiwkUgG",
  "key1": "4WXzBFQJQqz5BrvxgioQPSTgY4k6v5ayVy1WxXN293rB5ngiPGkXKNB5HPmrDjGc82aDwxd4UWPrPGWekwg9RtRj",
  "key2": "3htq6TMDYtgqgARKhGa9tQc36ZQktmM9rV7LeSoJYnYTxNdBr4HV8kc51vaoupNtuMSyuvMZy5ipQCEALNWaaVWc",
  "key3": "5jWh62MGFUagXmpb7ua9u3kDWrKqXcqiRQa33N3KZjtwF3j65v8GkPvJ8hjLWM2VxbBcxvNFjoXehWnbvxX8EfNu",
  "key4": "52Puqpje8vmtMqwyhwSLaWcLyBUDuJ2KYh8EJp5LpAUAwbniFKpo3NnX56LnhN51nzoagox44uAtciqN285C3hev",
  "key5": "43BiofcJUvXZLEG2Wh765K7MJg3nuLa6CCoxtrPHWr1QxgeEawnvd8Zq8tuqxgRYnTVX3EYDGRaFWacbQMFNS6Zs",
  "key6": "4i35m7347BfKkmTYHLwhJWqAE426dwxbfEzokGbBxzpviLmHcHMFFHUuVUb3SAse7BKbwzthPooF4AR5DwiDMFTF",
  "key7": "3bTAoJmtngoQy1LYqWwoikTdcajeunMjvv2NjC3mMSD8ZmXkFdMthagzm95mfetoL3ktpd6ALYWh52GwQW1Co9MN",
  "key8": "QiYB7erEknbjasGsmaZx3bqxEsNLRnmAD8MEdpjgbQKsQADmdbUt3bRF4fEuuVMUBJtWF6RoU1KshLNPX6iVmyT",
  "key9": "2HbxJ5nepbFaU1v26i2quuJaruvVN9eEL1My4AxNZmkHyz5ozewFwnyiWXqFXndVwRy8i2n5YzSXyoV13D4voYvk",
  "key10": "56eDC2XrtUCvt6AywhcEoHasc16YPtXRbZjdLM4GMCXwHj3FfphWSMgti2zQdt7qsdtW3ZoRPA5mHgWNrD8UyoRV",
  "key11": "348uCwoitpTinCc6AWrcBBLPVwoGvLtPDLKNg6taezVAhqL4TnQ11qrMZcoWewXCqY4LGRqSJzMXSQZWQDi5xiMV",
  "key12": "2mvoz1HmuqPpTWXR1mF57qgbSNbBFw1VvTmJLnXsNqtwpAHFNZj2ws7kn2dvVXfo9tVRRJyeSjYjfp98uDQXsxjo",
  "key13": "vPNFadMyJzV6euAE9eTpdrLb4QhHMTHZmfUbpqTp2Fnf9xMR7Gdo9fDywucz8miFi9iQYXkDbc4uk6G6FHJMSWG",
  "key14": "623VCK1JgRVFYE3YzHjVdv2yp5RMUxyuUMwAPBEjDAief19zUuRDDGA7V6ck6Vx5eZCSuyJ3649DxHM1TiKdNCu1",
  "key15": "5gnTxwNv6Hyd3n8YT2gYf98NzbVLh7atpRoBMACTchfU6XUiV4PwcB1qXaYUVFBD1wabh5WjvZi8UM6ppcq3SRhT",
  "key16": "5xknMeR4YDXwTPo7SgqXFLiHgn34xTfNb6uMzh9s7oqh7d96452RhSEwJFtdr9ydti99YuuVSEXViifrTkhRUPbr",
  "key17": "3apXVZbvdzyCt4Rmqsqzi2wXBkJkxWh6eV5hnxSKC7Z63uCfPGPPqPcrhguPwbDtDkA77Guz1EXg1Nq55GCvvSmU",
  "key18": "2f9GyYR78J8RQ6nwt6uaqKLx6cjmSze4q13gZC5V1JF2U4ZWrf7UTwpf4djSA8qSJTQdiFdb8HQKziV3WkEN27zS",
  "key19": "5hQas53oUrNeCLeN6oHq2A4DMg8uPCeeugbaQe8V4ZWW2U2EgzrtD9ysoet9FE2r5uoj4G3eLgASCuMrYdixz4Pd",
  "key20": "4ocvnKE9KvYyu3i48Bqu1hJzfx3LMyrjQA2xCSsVKkJFU3757CFP7NdrZXXJpbWee5WgKuq2EMYfs3UHaRAx1UHE",
  "key21": "wg2ub5WY78KhHDc4GzmLJYpk1qMR7gtbYWABpeUs7MHYtvxP7FNU5bQQVyij9Kp7QYC5E2QQ5MTzdEBw29XGauR",
  "key22": "2hwhU5vFXG9iGzup9pX1p7zUgKd4rVNRH83EdNCLot3Nyuz8UoB7BuEsBacpmGnzaVM2BKp2r5wTyfb2UZ3kLvDE",
  "key23": "ntoDhTEDgvpzojNb8o8egA5HyDg9eeSTHU6rg43kbhJiod4sW8AbQtbp1n92SCeBuLkBqcuq6tatwAAD5MTSe4E",
  "key24": "3syGoeyYT86Ead78STu16ddwy5i5BT2wAdBh35wu6umefZewjrQV8m84t64yskkoEvXr2Qqa7EQMG9RKcde9Yrxj",
  "key25": "35vVUBxcs7advL5teNy19n3tymycBYAQyXmKDcfDEsaU3n95MAwZnKADpQYtMLyBa4Bs7hhJwCUaz3Sf7apmfs66",
  "key26": "22VVphPrHA6wB7nE1mQ4qVt3CacAihb2QfsbT7pa8D4oMLJ2oADpbNXbJt7sFZRR1ZhMezScSNH4oQBiTgE3U5dJ",
  "key27": "2rHv3s7R9UabQQMeVr6cmB2XyFefF7ZVAPuc7V65ZCqiobjE6K31qvMqfg1882mBifwC4EAkEPqJ3Wm8vPSKpd6F",
  "key28": "4WnJQ8a8voXRvhjwzzC2cQNJRcuDTkqQ7g5TQwfN978rWPKBZeUQgqHNMb4A897TRzDb7QAUeW1vVEbRsYibSqva",
  "key29": "3TyGdv12ZPgMon5bzGrb423FydFqWAACaW7ugtWPo5M7c28cUrJdXhtVjBV3NEUetbRVfsu677fmJFGQAXtd4SHr",
  "key30": "4nfQuqUZUqYMt69njYbRt9vncXJc5C1Ld6UyMFt9c7XkQAAyhvFQ3zHBWixLKWE7gSZcWpoCYnzg9SoikFjf2j16",
  "key31": "5Z6EUD4dsJQhjDeSm8981WXaY6KK4iqpxmfyY9xHnSCBrYJZUWXNvQCLDpquAQMbYbx6zkDVLsW7yuVtm8qNrqP3"
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
