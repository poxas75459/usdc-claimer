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
    "46sz4zHdUmhWgxc63YRFkaxqzA31sKWpCXWd277gQXzuNoxsGPxDWWb5Ve9MYNJnRo2PBzE6gqwD59z6wsULs9Aj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JWKBRVZobALZg5XD4Ryjv7QLkbWT1F5YZebNzHEpCWDnpB5Y3paYMfZE9bpuJ45xteLmrHtmwLq5gi2TDhyzDXV",
  "key1": "frxdCmEjDKespN5Q11nfsVQRqrnFvKEFtyZXtiyhZNsNypiPxQt6f7hWWUVXUkC4RMMNzpTSccygs3KwvwYqoSY",
  "key2": "3SUpfDy4js4JF2CCkMApXxz6Etub5Rh4i2zodTEQtEN8rvdwX2xG7RwAxvxYGwyx3wumAkHtSSjWEUoo2XXZ27YG",
  "key3": "21Lx4wG2YCnPHwd3rnr9eaP3M7rFZZTqsTfFX36cWMo1CrSb9FA8frn9DHAYkSoCCL8jQH1A75Y1VTq9ySpEhqC3",
  "key4": "5CgWDsaFKvK4vNKuQUmzcpBwrGcfQhP28b36CTkqWkmHFrRSuMxZqEK7R11zgwvV5pFkh9oSfz1FTQCpGQPZaSG3",
  "key5": "4UP7y98gU67ebufj1Nrq4Sqhm6nkUG9oZjC6SzktxsMb8u92kf3z5zA96aQKUScjWKyqFgL2ZwkAG1DzuZbuwGYP",
  "key6": "2X7oTNPbvT38rgagUtEZBTsy13td9TvharWBhdQZHP5rrUCMy2cnT7oxVxyDM16gwQjDXFB4jXT7wGkZSnSg9xsh",
  "key7": "2AxAzuBfyfafQGVyEfmFMQxUiiARaLdmVnzfmzUq33FMPkFyXnL4fUMJSp4nHPuJTaWkfLRGM9eDB6vvPMPviLhM",
  "key8": "5d14hcwdxnLasXxquQ4cWWitEn9XANvXMKRey1vCGd3mgWu5utBAPr7QpHiicb9gQNW7fqwb33QzgFW1poiHEZ4a",
  "key9": "2BMJpnHami4m7K5c1XC234kf4MJFuaVc2Huv9a2Skuz8TCXzT4QKC3gNwR6a5S74bSeYMSJkqubBiZCrpM4tQGpR",
  "key10": "2FMksZh4xJzG7qZRi8WVAUNmFBJeTDEsioszq5TeUYt77tFa2mmGpH6iYuPGNHQpcDmPzKeFNVTCLPKng8ySRAi8",
  "key11": "64JWBMssZBE6c1Kz8ZEKbrseMTtDGGRDN5ESvcFDDFfELtVf2LeBAAEkiLE5kebjYFniAmh3QFdw4wTKh9bQeMkr",
  "key12": "27DMUuSCxRiGU5KZaoFN7xrS5Xm4mP2nQnnVya7q1Ge7i98YXtw6zBSQgeSjN9STNpuLKWn9Y8ErE7xgqioyEDGK",
  "key13": "2QpbhHWNCy1sFpMXDyJwvRtXxB9CrEwxogjWEspfm89k9jBgfo3ftvuyV3h1Y1g6L8N3PfWo1zAvsepqohcyz3Dw",
  "key14": "2oeSL6Q7gbMHfXTupK3h3mbF7QsUsMT7KnXMWqvzhBaE9PTfhGdUVVx26QzbSPs1bN2yi6MrfviQRyWsD7rpEer1",
  "key15": "rAEib1kTf4w6s1dTyFR7QQmrLEfwPzF793o9urURWyp4Q1fnuQgFNwhuZmXaGxVGYEf1gXzvhrLu4rcoTeLocT2",
  "key16": "t86UHLKbyz23x4BVS3Dbu5kWrvXFA9J1awpHEvGZjq16mWYszuxSqHq49Eg5ssrs2erCbnyNTsYxPTaLvf7oJ2i",
  "key17": "9h5Uua1QYieCJ4RGZL8bM5gru6Non1u95fj48M4jSzs48Hr1x3G153HDaWgne6JdezWhiScw5WrH6JVGazoW8q9",
  "key18": "3b8NXkiJhGbhkgBsj5bGgskG9LPgni4Ry65s7YLZviQokh1na1Rm3Hdf13JbboGqTu249mVi6KUjKzgayYuAfwfh",
  "key19": "4TSnKAkES3Eyr8kxB3AcatZTE8MP2sMzvcF4w2jVCjANd2RmSSCMBiPU3Moey9xS1J3Kjh5h6jx1NceTkAruRDhZ",
  "key20": "3gy2f4vEJMq5YQPAvXrVD4pq9FNBfJZBxEaKsQkjQJ2o8deNfHHL2HiYHEeSDqhpYycVRYRLPB1ogrxsckrS4Ecj",
  "key21": "3QtbpxVPscp7WiiSeT4sbibdbYZG7ugNQN6apdmXjbEanp25EZgDrfKLbnTGctt2s3uTJAZXiTgW9iKN3jZWy1mm",
  "key22": "et32SZdp5JMkrzRJXncyiTgTBUrwKysqyNxXRn6wGWhJtLw8BqtMB35ESw2NYRdfwszQXFSePQBafaYP4GCgWFU",
  "key23": "3UKzvecsTzRiH8hag4CmRf6oLV3pVWPyxcb3drgejzedNTzx4itY65Tq9CE2Yf711SLdDZJCJN2eN8JThguNKFHQ",
  "key24": "5Cqf8Xdaw5epwmVFQX5xQQp2iTyBpg4ma2nzgWtEZpjJhKooMmmbtjsyLASyYL1v6wPgc4zbt4HvnQnL4fUJA942"
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
