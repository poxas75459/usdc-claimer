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
    "3MtqtTosD31N1dyEHsYqgBjkkczSbEf6xRG1Zhn2BRi6SLMVUn84T9QSYmofPFrvDR28c6W9RqTLFYXZHxCTSQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zhjLRnXZsG1gp8c6J8S2b57yBQzu8PS9JQmJysM1ezJVzCtzaz7ctPwDD7GNpSpoBXQHNf7rgYQvFP4rkiWab5y",
  "key1": "4n8rRJwRPVw1LK3QUYzygNdYHqBJHUp4Ej7cogDQ9xiwhURznAhTmTwRA94mVS4uhka1WUpQ2THzHg7vb5pBEdoU",
  "key2": "gcTCpquAJdB9CVdFCWVZ8wfA3Bojh1yswdWkPwXqZuWqDERdEBgxxNij7V3ADx9zkp77vRKi1W2FKCNTTdKLDBN",
  "key3": "2ic7zrbpKkVSqYZ8VPrUBRVNUqSpYiLu84jWFBuYd9d9bnLirCvGPBtUTH9AzxKCEQFum3Hs2wuz76enzebEqoLy",
  "key4": "2jochRUNSFRRfWcAjSGbdkhNorYXREGWpcK18c4BMvDY9LC8Hxamj7ovij1cpmM5j8qCBeKv4zCXq9p7LXbMHiVn",
  "key5": "GCLFXiGVhiTdDQaNj6uD9FuKVirt7EpfYVp3WkhvcfcUZFGnCyoeEbHvh4FPR9imc3EMhPs6FG9kHPwETQKrHRg",
  "key6": "3iGqR4AwxyGNkySv7TTkzRDfPmaFDducZATFR4qpxTvaWhV3v6CyPA3q2tsFLrQth4HjjmpjBdD7cnoeLb4WUMns",
  "key7": "4mELZJk7jMJLyQUeoRu6Nfs9ceCHjg7TJkCZAnMrYo9E8XEnKpk1GuvtLuqtQgu22ZaVjN89LzPJmkzj7xGfcB8F",
  "key8": "3fwtyKTRD9cYuuAKFymRjjwzUNWXmLUf5qxBzfbcbfxDRJLYHuGAA39TuDTjT7CxiT4Dyf4zw44WZujCKPPjW4X8",
  "key9": "34iP5vaNAhVBaeezrms5z94rZ7qftExmAnUzjeSg67NXspf7GkJGK8tWpaRpmPLGsGKwSxt7iXDvp4vUg4ZJGK3B",
  "key10": "2ZE6Y8qA4tB2v5xZcS3oGh5QnK9ExyiVP3JpNtH1YrvcD28g21pii9FT8P43QUL2Trp2U8uxV47jCyeWLDd8gdp8",
  "key11": "5GiBbN4EiJA3gc128dXC9A2BKXTShHHBpocZnrEfZQujc22zq8QVx9jSKVHbuEe9pVR8Z5fs7DpTrxY4WPy5jPmu",
  "key12": "36wpDqoXys12DL2e8o2ihvyxsaHeBeLRYtVqBLDouvPyXhsVnXSgwR4MCWfqHAsc4r7mWffpDPsuBBVGZCEE3pZW",
  "key13": "rG62siudhd3cNMSH3ZrB5e5kQRazV7MpfzV5YVWn8JBVd6LNqW8W9AbsNzwysiKndRkgZEu3SPmx2B3KmCAQfvw",
  "key14": "3UFTAUbVNvwXAm6wE9U8TGc6BufoQFsLF5L68Gy4KpvEZTKVuB2Ekq8GwhkPNMZxH9o1or4x6WGGndocn3FaSQkP",
  "key15": "3NpQz6NpPS7CiiuF24965jochnxdFyzbBzgZ4a6PYahttTngfnTresyQZYvM9GpwgLhUiZfdb9FKpUD1x7BtwhPq",
  "key16": "5rAmVpPgTKvFUW6KX7eUBt8NT16rfUbmgEb7gtGBWEhJH2mGyPTYEDUD3bULMv4LtkFgdH4p8oKmfP7sGnfTDX79",
  "key17": "3udDxjDavqPriGYdsvRddA3NYX5Td2YxR4TV2URxqT344nMN8axxukTBWvtwk8RgTyFJZtBAwehyXpmhWxWij5Nu",
  "key18": "4hPJUGcZgxMsEkQzUzNosdoMbPNQrMapw79Pt2JhCqNJyChjgV9ewuPmB4AgRmdTLSSz354QfZpAWix73CFySkDW",
  "key19": "3dmsWJQprnVY4wa8EBUMqy5aDmqfM4xuh89uRqVCqFCsirxdJCoZAaUpvHfPtBgLTmLRac59NsnLxyCBEtFdkas5",
  "key20": "4UuP7HcAH63hJ9NVnPyT6oAtw7kmG4okUhsGorYZ5jjdWweCfNQ5LbfGwCgrccExYh2oA1fsRAFwCTPupU5BgQgc",
  "key21": "4mTRQamyrap16DvzHX4HpxkV7YYWGfATRras2Qi6ak6Jy63zFuTHDkjCrGKLGBYMfboazYj3gK98ZpX6eGMiwWcg",
  "key22": "4RG4ib481a6qLzVvWnD2iRsCkHBTGVzQzpKmLKVpLJgWhfQNAukowejKa1yVgvXZJjx5cDsp4aWBy8gvkwSR23U7",
  "key23": "3yRoYBkp2KiQMvmbdcsBipDwfd5GDFC68K9jxeUWoUjhQph3TXXkMZvPiX1XB3bz9VpPmx163mdq5myKTwUqRzNK",
  "key24": "4x3o6oDAGMsN3VTPt6mfqeixH8nZeQT4cUVd2qHmGyLdzVCh2J9KHwRA4RarGCsGouqbg8GThoN1V67GdY8RpNhh",
  "key25": "3ohdVCUFA4HTPUuy88mUgpSFKqVJ91jzHpcjmeXdhUygpThTMt9QLqU7zKW3uTZ8Fd3NTxJ8qXiXZUDrwdZUdAHH",
  "key26": "5Ai93eXPcRxx5pynrTg6qPG1FnBqmnwtmx8mfaMeyiJznVi5NRbR4NtX1sUv8tCwR7v1zJ8EL36ijTheXZhzBP9v",
  "key27": "5oBn9fzHpvhTMCEVcZ7t2wcEQMGENKjaU5U81W9dMYhJ1AsLNQyBwCPW93kCWTbuYiw3onCQ1dXjhcAEGtTMEA44",
  "key28": "3U4cW8BRFF2hZAHqR7Tw8G9rkBnmtawY3qYp7Vo9qBNXb9EP3QgaY8zq8RJfkTZGpxGfZKcPeSLpmk5ufZMbipUd",
  "key29": "4Cjt4jrF4wyJj4bpQ3kaKVjsh6BtAPD8HCDXJjddUpk4JKtBXzbSLYYw1qFLjeqiV11kxqtfsgxWd3hNeyDen3Cs",
  "key30": "ExUBtB4oW9xzuR2Tzob9X9SUE3fqmtLZ4eYTJ3w1xEFWM9zPxsS5Gjwt1RYDFD5oY5LeoaNXdTgc2FMVriEu5Nx",
  "key31": "2VuRq3ifuJdiCPqDdDYw3qKbH54pSCSihNFiHptWEmGYTZEWb88bdGPpntSLDbcc3jBHb6R2o6BhdZ3b75oHW8HQ",
  "key32": "2mzKv8wcPNBhBnqoPgeWQRzJVt1oqJAcrFCBNEMj2FYcuHALceMMUZWrmBWp68bPQGnE37WCU28jPuoYQQ2tAqFu",
  "key33": "5WXVNRqttUwn2rq1MWpVGqX32BQxwGnYJVHRGzWRawzPqYha48BJR9WB9t1H7Z3vdZUBcMxwJSqSnEtfC7aLwiB5",
  "key34": "LvuEmJMFW8jiR3U5643GNEfCPmodT7vpp2QJqUVskcMie2KScekFEpbkQ98kdFYPvzXS2WydeHTvWaPWzEpGsQr",
  "key35": "5wk398eFcATcttNk2io7SvfkSiWetMXHRweQ4iWSC8r3Fv4d7vAAqJFW8dkQMLfM8xRQepAfd8yA6o8335GYreZw",
  "key36": "67AKshtpbA5GjBjPthQafoMPxqkGbg2LNsvcm5xaJ9Wkzw8x1mwB3yEzgHP8wH5t1X3uTSgTFdzzpRd859mHAQmj",
  "key37": "3JhwxHdkVLUjvV8BZNsB7ccavG21SSrasYAWT9Ms6qgEhTu4x7Xqib54Q3jm9ZxeFzK1kmyWuouGfcjwMDRytLyr",
  "key38": "3QFoiPqWMStSSUncxLicDQCBvUAVQsyy6UVphMb6i6WJKEk1KDwzMzEGZKoKSkBQkaJrK5iB7ChzEZVvEySxK6R7"
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
