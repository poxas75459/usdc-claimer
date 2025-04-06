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
    "4Y6NaC7iL4QBfh6qfakHwSXtUZFRXRZyTBi9K7qToxbVHARenH6aNEW5FPtazJqepjonoEMXFzHz9ejrjry1YQHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SSPhqtMK1UDdHTrzBD8yMSE2yx2hzKEKjBzkot72qpWc7paeRgjyrvoYTKhC1F5wPRXq1doKtr7XGmerFYfRG7c",
  "key1": "5g9BsLNCYhPZv9VB6Utx4XWNsabkwq8YFzSq9eei4Mxgn8bYUXMCQJwan1gnJmfKW7fWX9z9o9D2LbkZPUeB2wuj",
  "key2": "66X5dV6gLRW2inffbyZNpjvFBuysCYPY9DBWwycqozyBkPo5uZ8qoXwp7gTkTMpvZbBBpkHd6NQGickEZ3jzPKg4",
  "key3": "5FYcpjsyfebtjqVGoTRW6qEKMMpztaKY9NhkLGiU74ev9GeUHSMV8Pw6XACLkwY9JSBE65wXAo3geTA4tqK85SB8",
  "key4": "4gRJUpHGbSiq9J6WT4pevnJCohA2yHvHuFScvnwDq6cZf9QXmWztam1QoLV5afCBWgwPJnR5gV7BnJ9yLYbWxLYx",
  "key5": "5RPZw9zgo9Kv9Aky1P8WBma5i7vZYfNCTUbymQz2kfpfq5WHdmsTdkoJR7G5pfmMR4QE1Ewnw8KZwp3hkJ94niZr",
  "key6": "2nhu23yre2V8rYVJoKXXC6KoME9Jdia5r3Ssgx1HFNZYEgW6q54Lc4vXzZBhysgXiwF5nL6WUfd48zsec3Ej6Fxv",
  "key7": "owmMMij1aFKP9sF7MShCCcC9EqTusxR6NVXQESV6mT6z6RjPXnfqjeuHSnWfNyy7FuuTEgn9PLxXxpv5JKH85Bo",
  "key8": "ix7NdYyS2QwQTinzP3NJPSqpkM2W48GktVW2pV48zDzZNk9B7rNHt1cMC8yDFRN2g2j9hkExB6UEStFwaZk8AGD",
  "key9": "4CGxbCVx9hHMwuets3xPS26dW3Vu8AkDBQfFMrqouco2NmnzypBPpQYi8YnbF4db2puVork1qqcPFfWHPhMAhbAy",
  "key10": "4SajgRJ5Zgeiui9e8u1XmmcQdmVtzA3X1vhU46UsjPuxhdjdoqQkywdXBKAcMF2Cq2K8YidY5amBq4CLrwjwSQMZ",
  "key11": "5fcQh1bZsfw4k7tgCtbGxaT42uKh8Zhp9CANExUbZxFc6kNQQ7GxLnW3psJekoNArtYLFg5RbxTUZEVW3sSfhCdp",
  "key12": "3Te5B2YCmmeFnMcQL1RWCE2xdoReZAcM3LxhPAA1yitLvHEPD6n1CC2Kw3PuxkzFSBod8tyjnVRj18ZXf7tDqK86",
  "key13": "3M3pQzP9TWnGYhNfLkwcpk5zDxFZ3jQQGxPcceBUbTSGRwuQjSGEzrDS59KJZTVDXeiq9MKVsv8HmRoVVqJbCRzv",
  "key14": "2YDNZuNGRD4uT5XyPsgRwTQDBSqA4mACRLyuQfwU4PLT5bCVeuqxWKm7XTo4jsMXhWdth6WU6eoYh8YFzXvqBG5T",
  "key15": "52EHXQpzgkHe8RnGJzTizooo9z82VpwsLHWhdwwEJZZN9SrTwNgxUvRrXpk4kD9NjEta63mRjEpkkC7mw92ThMvm",
  "key16": "5phFmigLFPyU8Km8JJZjMxEpvviBuQkET95J86okb4CYDztc68UEhkkJ967sunpjatVN6ty9fmUHRQXwYEyJQxsp",
  "key17": "3dkPWqQ8YN5aaa9YtUSZnp4sMd4HWU8DGMCVQ7fMWfZnrShRtKBu1H4BLbJQ1JGw2p19VVufR8Lbe43RCH5TZY4",
  "key18": "FayFjGxjxiqBPHgqgTTR5pnndQ9xo2LzsYXEFunuQQLVPmopDPF3nZrAa7n9LwgM5qipWLRsE5wNTpTSv6ehDKz",
  "key19": "FW83vYgLV2XTHcAB27wWeQjALJ4mwC3riJsutkJn1jeDa1gdtH91HUuf2UzDUx3CErUwxpj7yU521fZnDfkxrA9",
  "key20": "2BUvhGBoWdvXmDVTmh8wLrmTgcnUjvr7TgAnsoH1jEHfnXBURd7RKWNidQHVmdQiE3cBcLW27Zz1HRknFHdWLbeN",
  "key21": "kdMzKuPsGoG3smqeYJ5zQEXy7PNRE2WRR13SH3wedVMN3GhEYU18oJGsugyY9WiDjZ2akXsuu61JdzTtPVQj5iL",
  "key22": "63KNcfJgUwCzPc4QWYm9D2dRc89tsRBxHef8TgJWgX9CMXEAfUesV8HuWuFWjTs9ewbRvin9mqDhDS8hkFFuWgR4",
  "key23": "2oHRJoZMFN78sBLz3Vz2WN5F58LZV4Mrx6hi48tSpNkEtpEpFjQwpABuos2ab2FbcL6WekWK6ArBC5ByRpSP1irH",
  "key24": "3WLxzz7VLvFZpKhbn96JND878ZpB6egdZ85WGmJbP9iVJtb8AN3jvGeobia3s68CWHZ3iExaJqABKynu7ywzyde",
  "key25": "66ff9jhmqq4RsH6eMmUNBWvrfZUnZFCdMNsfCGAW3yf9T5Zk6sWL2MayygQJy3srwSQuA2ZnuEenNMrhNdLdUpYR",
  "key26": "5xJNrJwMqgiRWyPz1xvF5rDT4jLZgoGkT6MhSRXws82bzgTeXz6WrxjseS4AqvLvRDCzRuc3DLLE9VZZWhuTQksh",
  "key27": "5N2AupEZtCt8Gb5i5Q44y65LVkvb7gCZVtYR3CVmQ2eDKfrHNaWeq9zUwGksQUTZxcJvfwe2v4t8Stx2RpdAjcAF",
  "key28": "5in7J8Ty8JUJrSWt4EiiMCwPiR1uFcEyWEZH2YVsqkM4iG2wJXUkN2HiBGa2Z6BnyYFbbC7reaEGZLxpR9eAjifJ",
  "key29": "2Vo6FBWnw52pYAsqjTmpk3NeyJmStBRxhcgtZGRddZvPw82Cuz9YjbcRjhGBuMWeRTnpTARPeN3sP2ULdgG31vpT",
  "key30": "4A991tDzNgwFBtReeDLcZxWfskB49sSd4VFkFb9Du3rKVDU8ZvoQKWQXWVurxnmcKQ5FoCSeyjemb5yJiHnHdqza",
  "key31": "3utVAoWbc2ozYoqVT8mCXDYGg47EcopnJeWVj5pQrhitJ1DNaJoyxGe2Y36D7AXhgj23VqkxcqpcKFiTinfGhV97",
  "key32": "4yKoRPJ7q1MW9k58dA5y1J34MRDv3oo6bJPM24Bkqyz7g8qBfqfByrswHNK6ASXECwhznkqaY3519jYm2iuDWKJ3",
  "key33": "5J3m99gESXwXpT6oBN7qnFAFcPEn92ihi8ZhfDp78fnLcV7JGquen5qvxkhfXxE8tz24bVH4UAmjD5AXrpvFG4ja",
  "key34": "4FjsD9hgg3Phf3rNuzCbLgFQn7Q9b1zEm871UhSTKGdWGQ8SQx7ERkuFgCn3srHPn5fbKx8coP9uwGgkoFtLP74c",
  "key35": "37p7T1fo2LZifVuXkDwMfNAY7mYmAmXD8rNzuHfTk3moDotdusY8LEgiFNWAS2L8snBYBhBdBG9v9yGoNVh22Ljj",
  "key36": "5k5dZYUvirbgdiV7zNBLVEcRqzHGG1s8WHj7tBdBxT2C4e3MNjeNkikydpRrm4et341SSd9K8gV7XLVyVpU3EPRM",
  "key37": "3hh4tatgge8KQJR8NHdNNeQKk9xqG6JMntPenaGwSL3YiyHD9F3FMYVB22TiCtnLqRdrzx8W31HqetHeu8JT2vHa",
  "key38": "2kq2XqLsN52iAgpHbAJXQKFoKDTcLRR3AjJG8GSRNoHr6oXu6Ss3bhfevpjXrCe3GCfvSHckavuHiZuFPG96o6Qp"
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
