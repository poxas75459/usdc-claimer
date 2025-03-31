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
    "rf6jsW1BNBsZnfhVtDEPWNxeEifTbcEtbjkoQpKSfmhE7mPVTChSqJUq2VUkUVqcCFpHq7qGpvygF8mhH1j3bYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WzJ7mtZB668jrGcLvMkQ5WJPDXu24egwQcL3KyrppQSiAwc9wagdXfopaMPD3TaYRHqVrpnfPKN5YmgxoKZnJWP",
  "key1": "3fWPzTf3T6ZrsYqm8En8GGwLzp4At44kzvkqavqjFSyhjzKM2U2wpAPyj4TnGU2oAbBA24XBWdDJSsMYmQtY3gaW",
  "key2": "2fNMAr24r2ECs9MKAAVu7qNUf44rUhzwXiExa8jM1D7rTRVkia4eopHyoPNYoMwo3RxDyH67b3iUL926esbvv3Xg",
  "key3": "5rmY8RZTCgJwFm1v22bHxR7Z7q4qp4FdWdGfAjm5sKS8XPnGq2moNiaMx7zuCMNMhzRYJNoZbBtKUsadggCP9LZB",
  "key4": "Kfo8XLnvmY2pgwh5nfkNUA2j6NTYoZN9tH6tVFbW18XfYjaQrgwBb837vURuiVUsdQarwsh3THRqDp6gF7hrR6o",
  "key5": "5t3U2usWEHPS6c7HKtBELz3dzbCGXKjvS5dPPW7534VqoLEHdiTMQrGwG4o48PmsxXPs1tVP6T2tf6JZiQaGLVr7",
  "key6": "5kBFsEs4Y746RaJbiM5o8MY3Jbce12RgTa5FyZgSVuY6BLJr4buAgsZWiRwMSecq1Uq3et3dkF6zWvraqdM2oaGw",
  "key7": "YH8AMqt7JfauKj3Z8hDQapHibsXRAECKMkiWYV8n8Ni1JtHajDd2GMYcJiEDSCxcxQnEjVDN57sh4oAgJuWqWPn",
  "key8": "3pJDFeyEi5yvT3r3MeybeMafNQSd9v84a1KoQDTaXDXd7BCkDP9o8BYYAyZWNnLxUyA8XZLT3XRWqtkbDbZ1NPpc",
  "key9": "4RU5ESVxCxcXndr9LttBvkFPc8Bk5DvpRf6hLXHPSDuHtJScrKCDfCpNAjSkZgA2PQBTQCP1qwkjsx1bdzPQogiN",
  "key10": "5K3N963xiQBHVwwd8ydGHDxBquf6JuFzqCSyqGRBnrWU5kLVRsq6TGZxH5qxYdmrS39kykefFBKTfQmxvRkw6Ffq",
  "key11": "2DDcBjK87SbN2q17NZxUoSYoDZAkQbG2RP8mednUMMJPiDSmf3NPwZuv5D88WwSgznEevRdnQgbZKLJRGf493uYi",
  "key12": "4c3n6NNNNGQ2Ek8Nto3BMK8CS7bpFrSL8pjidpBd5aN2xw8W2ZDHv1wa1KwPcPvA1Aeq3JckJRJJLrnfgXdP7DmR",
  "key13": "4Tua14WqiLYrHdMyDPRukq5eAsiHybbWYLCrkVHJ5GHZT7JYFSc7krMLxAz9TNMkkz4FGpp2kQWsPDajQW6kiwp7",
  "key14": "5rxodvCb97cfxAkrERJshmH6DEKKbvGB4uZHoJiSVZD5D4MoNQZoStLLHzdCj9YTE7AJ1aLNyMts1sLNZfWJxneE",
  "key15": "2YtJqisnWKxB3xcAi94uJrDiP3x4nsmM9fFpH5eGerH2uL2nBJ7H5HN39uYV1FqcgcYvprk5vwLH1kENzqX6HpUu",
  "key16": "2iAHrjiT8PsX7KDgx1wfEwUKWEoxSqqwU8CymTsCFciVg9X5buiV8Tr5tT5kVyLhcFBmaDFxHfKoiQPaPgHTqUMT",
  "key17": "3nrHivQBxb9CuwJSpEA3oD9eSGzcVnUSA2Ntbv3mSkGUsioHJKKKFM5ZaVtDYxZtHY4QG4ciL4JrYDrwZMM6zgFb",
  "key18": "62scmj8No9nCSWpLZUkAarh8GGcmcm7xgcGThKRtqiY4Wcy9CJc7n2ft9TLhZ53vTJk8vMzVwC5qrE8RfKVJ8VnS",
  "key19": "4VvtEwybyvqg1SJak9a87uBghb2casrkCAivRfqVM8Ewf9WS5gh7myrFzkRAqhQgfWQjsj6LdSC1S2dWbboZ1uwi",
  "key20": "3DQ34YjzrBjqFdTk7Wh7J4GkneHMGhYVtUya66yQxFV5fhFU4XfoW86ub6JpT4uqjcdRP5GBoH9HNRpNTmMFbNCn",
  "key21": "5BLX8y5jGwvduWG9mkMC6UarrmTaZ18RastaS9U5x9TG4jpFHvWDPn7JF5m8Wvszk1P5MPoE1RyYw8o1BNSRxdDc",
  "key22": "2KcHpD66Vv5TmktR2yaSJ5nozK2MJUbByRkjDMMC6jFKACdkW9jR4JFAjNsm5Moe3iQfPYhBNTZDuLyPJriZYYUs",
  "key23": "55qAmQgair4zUKnrA4rmPht3PtTo8b9TmhaCLxwB2iteu4nGjibrZdbckmy2tdy7JZYJXU5VMYMrGUvMpTNcoKD9",
  "key24": "4LjNGbnqSqiPcXd9oqqvkJMBGmgr4voT5j8MAcFmnB1BQJB34x6uod4oUbgZboBD7J7Wxu1qKTM28rqHniuXrdyy",
  "key25": "4uWDqPjNsZngc2X5h9XJcdJpBFA6HuWrV96G3Q7pTVa6Nj2iqQZA4H3GivnRB5DorYavd6w4QssS3oekNFyF4fLQ",
  "key26": "eNqvkv16D3haX8XfGn3tLCxA5tQiPPm73hkrozm9RGkXhLzS23stn8ZFTSGgdEUpTKFHQtTxuccB5HCKWKjq2F5",
  "key27": "5k67ENuHmkQoBYN3YtgEWY7uHenpY6B4c4qDi6Fe9qKLhatq4jVNzPGGzy8seYvWH6UZrNtnZfjosTfaSGVzrHEh"
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
