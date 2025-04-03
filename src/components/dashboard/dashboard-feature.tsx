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
    "UhNBy2SsLsiSD2HznR9bB7q27RPWc51895ptz71LUDpJscUFA9BTa59CBWcRLkmnfRQNGV8yKxFjtdreRHt8JVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ETXyBmZ6woucXtTviXChr5PH4n32gAVfk84HoKN49PnRPd4mVJWtTDoVztehEbJVDybGWn2GWu1jG4EmWAwgD2c",
  "key1": "2ncbA3oBfqjLHcVKmid9PGVWvibnwY22gcRBLEtsLMFsi2CppoDwHgqVGFrZE3F82i42dYvBZrRc7XB35kPFgm6W",
  "key2": "2B1SiGykVjHNedf61XnZfdwyhKUUS2bUnbd8cKwSdLne7yBVHoMyyKFzXj3UVLMY35KhSUkiV9NkFRSL74bkC1xM",
  "key3": "5nokrZNQuM6D4T9K4berf2vekf1RkSbVBbKKrmhKS5pYawkvMA1eWsLXRy4o8ohX8MoXBDa66Si7dyAtgjBoJzNn",
  "key4": "67aX6MNqiQz89v3v2inwMEDHKN2DmK1Q8VT8xnGXYAPXjvq29pqLpSrDSLDk6DCPdTeB8xznt3y6beBaD6P61SU8",
  "key5": "2ECyARnZoJYMLUDxum1QYpT1SwqwbuJzoNDVvcRtbbPFH2CzqkMBZkGfjcAMmbPcQKdxZUwQhXSyzFQFK8Ce8ZXh",
  "key6": "5XERVxrfDHxZhVPggcQuQqmV3NiJLtbR55nY4qV7aeNHjyGKmtRUF4enX95FGwGwZqZDNJ5LNpkUDk8bTUqMvRAv",
  "key7": "5FHi3TfhD7Lf8GxZVypyGAcippFCaEbMah3fDcEmUqY9PiK3zs1pm1fKiUHdUVxhVk5rh2DMbfUyJp76bmN4L7jr",
  "key8": "3HD1m5BMuWJEoCcHCGQ7SCuLkcnbbrAyYLgmTTbcPaFfgMTxw7Z4V2CYV8PtyugBSbUKxZY3i8yGrUWc2GUnkwTF",
  "key9": "3kNhQgHXWKhS65ghfnGw39U1mi99o7cUe7EjnYkqVMVpzXCJz6AV8j2GZJAA5t97xGVkcJB8mdsRme9Tsz3yq1Zv",
  "key10": "2xSBfkLsYAf1zEBxjAnU8Cd2L3ZjGdnUBS48jSeWZKTjCabQmifi5VKeY92gt6DNta2FG8Jcrs747AB6j7J2t1Fr",
  "key11": "31qhXHecDDzhmdJEXrsCKhZ17D9WXNKkokHVvXJas9nfZG3urUDEHEmsDMTn1pjYBwLe6QwC12YtVTUf8pYb6NP5",
  "key12": "3NqWmxHVKhpZP1XiiB4RigwyvJoEzuhV3TkxB6HLxBTmdoyTbWxQBsaK36GBRSZavRxJUfctatPoq2CyyunozE12",
  "key13": "5D7bSKXqXbi6Y6KbLFogJxMQm2f14ic31ZeaZVv9v9X7MEE64fqag2D1jpNBZWtzNhTCTpT2edGtFPN5P7y5n9xw",
  "key14": "2XggPyUtSaXEcVqwX77LmKFfCGXC718C5nXr4KEsaGzRG5QHz9JXx7FEdYX7TZrSQn2E3Es4t3REiR8B3CP2QfRA",
  "key15": "dXMcWcDRHjwVEsEmQziaNZ9aHt6cZdBugCRNDawQpvMCoGvNvooE1pyiRkzFSrt3ZwLWCM4S1Z8gmd4YNFB27cZ",
  "key16": "5S6xncM7zNKhWJukeLgSgfWaoWntBWdvoyDim8pnRujATtdV8xaMSHFRGGtsSTAriXgi6LcFP9mg1HqBGyYTfKvy",
  "key17": "3GD43gNxVM6LJhGkSPnVD7n1PMfUMwjZhGsN9nF1iMKoRLXUDexqFjEkwWFsJ1TrnsLoJUUesSWbQHh6UQbCnc1y",
  "key18": "2xSxCURkbo4NDCcGyQFkKwEYxEeybDrdfETc7t2UVJqMGny8gASUnFSNwBYDDn2cc5kCVC7K55CfuTbfYmaSRXMs",
  "key19": "zzXTBujh9wYfa3LKU91UBhu3ZqRp4KrWo8q68Z5xP45ArMYvnH4NkYGYYLXx7ZqGHff8To4bG6g95ekuWy5iGHe",
  "key20": "4Ha6G2Kkh17otBJBWzFLyZfCerr4Jn6eBju22V4QGDpzoLxbjmvWjJNX5Nm73Ng1r2vM17d1dUQFWvZnthWpHQX3",
  "key21": "3y5YsbYPBorBNYAXhfiMGbGK6vcaxN1d3JLrHaWz66eT4qtW8HqW6Kz6AKfN7KDCB6eEZJvL1wLwE4wneTkZe4vY",
  "key22": "2vVEwNnXwUpPuPrwagdtaaJFejGRXTUSkQNVT26T362BLt9xY2rUE6A1stEEz48pjMMEhgMyeesnA8Jyh4bJuucz",
  "key23": "5FzpH9sYH9ERFqkeuLfbjviScDUHZDS8L5YNwrimqwWKd54HJzWdcNJimYaZ5ARygcKmi9yD7jQBmEZ98zUkYeGR",
  "key24": "2K77aTqfuAjMew4TejoRHrXao4aLE6Kvg5sVxhEZRftJ7kqCE9SK21nyiBcxZvyQoaE1wM6u6Gn13aWTkg8JSnPF",
  "key25": "516fECsjF8v6XQuQPBrAshZ4AVpzcHhMM2j5W9qwoHycGoqb6mP6QBFzNfXnoHVCxzFSzEDLkCA9AnGVvAzqKvjp",
  "key26": "2UgkUKqiYcDPQ5MyacnhRpbos8bEVHgmfysv3Ct1ddTYJvYuSabc2B8TA9FGK8r1KnLg1XyKrqYAcP8feKXXPLFo"
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
