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
    "34kY3WEkpjThsoyKxvGZRCsm7xacmt12XQq4x1hh58GmGRzAdRy69f8qKGumCrSY4NyUtNCcMWH2zJDKMfSkhTta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26BRkLwhe1T9ziDPirVXMV3t76ZuJ1pCzAaganZP9ZaYkMNoERVHFYQRax7hxr9ZAMP8FPw6eBK8SRedsc2eSXtH",
  "key1": "4x5TZbAzY5r4FvQBvxRfdipGyFoqea6vBy3FfwJRqXsz3gHpUKku5iwYWR26pwYuwXh3GK5VXa5ZmsN49aFKTCrj",
  "key2": "3vmTmzQLzd1cSpdjYQ8dPbWv8qEuLtbm3pLoFfv6kSTcWAumSeVPxn8FjwRcXA8EHEroQNCMDvo3v1T2Kng8xvbY",
  "key3": "iGX2hJs1hVVLVHxSu9L5EKMoSMxSW3bxUbVyk56MdFTqGwgaZykbf1pSJtocRjh3pgbLXcZFrP2ZuXnQDfX3qdq",
  "key4": "33NGnuFv1DmyvyEo26HJXwWvZELwkCXSAnbV9fMZeytScVbBUGC9y6JUgjSN31dd2anDQELy6JS4jQEySzEREjMB",
  "key5": "4em4qRhmWmPbjeK8WbU1abMPhRbY3dGBqZcz6j9ixdqeZeWeAuV1Gpr89FEn34N1ZQxikhthnBKiHte4ADKwDMUz",
  "key6": "5t3Ui4MeKyxd6rA5XM7o9oZyDCn1swujgxX6RKz696xuWVXqFer32fbHmWxwSZ8Uq1pgUSzyrMvqb9D2jboBbuLp",
  "key7": "5V1cwaDRwVEune8fqesWn19RMqRTNZXa1DJiQoNio2JikJhxKLCrZwZ5ihFyaPzv4sR4WHSf8DWDhom1rLMryC8c",
  "key8": "pAUHrzMsY2tZ9kCUSYWgdqi1L8tz2SzZd8a5pz6P8m2PwYbLxUetW57mUr8phX3tcBLWGWk28FzJKr5X3yae4vU",
  "key9": "3De7fQZaToXGQ2iwL7bTN5VkpnctBQFPK6pRdajZKtm7GQ8ZFJxuqEYHaSp9nymnNfjDwUbVBr7X4Ctx5enVbfqq",
  "key10": "3aHo2BHJu3DfYE5HkMCfPxKHdt52zxFb8N6xqtBdJjsQ5MFRDTMLUgJ9Kju2XWXQxzBkZNLTc1yUHujMsNRDnSrB",
  "key11": "2YYkcVqnWmVRjgU4W7f5rP9fDCxMCE7p2epyihEqq6HKKNRNGUYLfxNUCC4ztA881kEmvDj9LNLPYN33puXyLhdj",
  "key12": "4yNNx5FKwf6A55cAeWUroxZHzrYCCfjsM2w1GveVtjsgYqPJUwwj8YUR33FyG9XvyZNMfqokPkwQgSn3nqzkjPJf",
  "key13": "2Z8TxCFYQN5kPVnXH1749zre8HbjE6o9n4huSWugYvpHKWE7VdHUApj7qqcTdcA7PTPRTiewUxojtJ4AahtPDsrm",
  "key14": "3D14jUvvbPjTBEhhZjhGCJdcjZiWLEzAXpLcgSP1Y2Qe5a6KMpr9zGenR86xruszuJCVrKYuVnRH4dLemxRPScZu",
  "key15": "4DzxZHmLWiAKDwMyMV5z5cvWQ9GcJr8AbNUwogt5EJDCmYPz1iABqkwhDukbkgciDgs73Cd2kP4Q2B5w8pxgSB9X",
  "key16": "3SpYtyNmWR7LeQsNfRD13wGZXFsTybnX5194HYHeVfxRPAgiQ4cCyHVQhyvovZogQQKLdVTGZT8gJ3Fteuj6bfcS",
  "key17": "3gWpn41wTdqF6Rv8ZKv7qD85Hx2FvXVj7eaxqnar7hN7vvg5PdYMCc1oezUjyyzg989wpqnEEtj6HbnLCtnZpsWr",
  "key18": "4kBca5s4cNAEPT8jB4UB8rzKNnqN2yjTjkYPbXa8nGYU285dM1MGmFcjgYEmqyzTvxVDHFkGeoGRe7ZK8YhPhEZJ",
  "key19": "C7kr9xxn5x7bYWPyBHcX8NPouDp9DUMB2mVMbSnTEReE7oSJ1qAW1hARKGfqdwN38dggyJP9V8QYScHAgTw986r",
  "key20": "crHEg3XPShkmmXkvRfY7EDanyeKhm7De75SM2UfwEtWDngpNxMk5ywTNtDTfHrLBuYyYCCfE725XGdV7tRqZFf5",
  "key21": "3rQcp1qUxrkdBYezwabUmVkAdMLetunQNUGS2phuzd4FtW7fU36pcECQNsL2Z7TGYwZnfp6VdyA9jVDsStWz1NeJ",
  "key22": "4GUMLCTfAFCDaBekrSrE3AzWmWQED4CtSpddaP2NCtdchhptZw6ii2mFURxb6WccnJq7jHz2KaCiDz8UxapVL7pe",
  "key23": "5s76ppPDaHeUXiev6bQSWahazTRFjTiFvGr9eQGk2B38BwxMMY9LQu7jnJgj8bn9kVkvkx5wA9E1PJjjpbGpTbC6",
  "key24": "43LV7TuBKhovu4XwCgxGhWqwATtSiRb613w92DRUkfuwBTF1oXs14RpKbiiMmT1gHX5jUS5TPfDJi9m6UMXZdd4v",
  "key25": "63UT6vPLVq5zKUpfXaC83PiwXiHzZyaGZdayPXVZH3m6icjEohtgozBsvMaHcimwRPJ6N3C7Fk4o1MsAvsUru6GV",
  "key26": "2PUoj6GBSGJu3kQciuws9QHbcHkHvgysX7HBhnbY3SHmqThjxSYL3LP9sHRuogv8GvLomog3P21fSpnV6LXTJn9e",
  "key27": "4FaEaoxocCZ3EsX34w1XT7dLc9AU8yCcPVPDXTtbvCXx1Jz4UHvrLfsXzdXRuLYyAkda67zRfkyAahDFwz37XqrU",
  "key28": "69dDqXgu8evhJn3eaLebK7A7BdYrLqQZ4z9FtPF9XaWXg6jJWqjD7Zp7XzCAfEi85rxcj2E2aGWvoD3surTXXVA",
  "key29": "2V6d9BPy3WqfeaCKjjg63zJyArVP74FUQvEcUf8jjfUCw1sG2YXKTPdoiX5pQBcB1PwFG7pfFkzpAVuDeBFPQfxw",
  "key30": "5YK9WLdFF8WaZqqFbwk1Rp1mWQFKFMkVtJKHm5RgNMMDw7FpsfLBU68WsRPEJTMroqJNdfuijp8qrvYJdfKkA6uB",
  "key31": "3qvtM9Be3iiSpiKY7QxRbhMZhdH9RDmuSdcyXK1hujtqaohNtYbZX3CA4Y9dgRNnMF9aqs1baoimLdqafytDyCcT",
  "key32": "2ki8mj7E9M9dwhE3qYVowEJdimT1wWyzX1fTHNe346Yaxwpag7fV3Kth4h43CHYC5zbRQ854YnNoB4oTeNXGok1A",
  "key33": "66u7HsosBYTEn69JsVnSAzYN1cR9CkRRNLNe6TXcHAWK1hXcs6VdhKctov9jU8yWs5VqboFw9ZtZeS8gNY481fSA"
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
