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
    "iZ8U88RbCYkqvp3HvKTMViRiFQZaYADg5PZi28Xhhbu1dreHXi21WhHKhFhawKzfwsLrTX8pPS7QmzEhi9QeAQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iC5JzACL9LhfF5nssPu5imGUqDK3wuFjXm9p8Tpa1h5iTjHosdS1A5wxuYkHfTSSGm6ueGxNNezEPdFTN47EqB2",
  "key1": "312gARrATGkuiAz9RD9kMeZnnqAi9G3NoJbJKzqm8zLWcsXWLcje3GfxuJpHZFDHfLhCvh5PcPNtFXPdaU53Ntpm",
  "key2": "3CmHqXJ6nTBUYhL3Je1ToFY7VY4998oUCf5azDqtiSa7ETU12q3G4rA4ZNHTEjXCQFEfazFUv6JxD5KvnrYzgCBG",
  "key3": "jQ3kQ8tQ7zUv2pxWHhoEk1cMGrWKtoCg4jvA5agnchnZVqfoUDNJq3ELyTcujTVJs5pT8jZbFRuThgS2rtspp2j",
  "key4": "4GFfLoQd7yeoAWPDcuLwUeDqetk6imDLFE1ewvEFWErkeN8ZEP8Bop9CVasvozQ2dE21AvP9hEE5EmdHX4BeMzxz",
  "key5": "5rkaAJYL3HErTxHuKAKJFg8u2aVuALbvaJ3sdeWJwbvV5znst6kyq6TCWDDDR7mk8ayRrCNUgJG1LUVzhMMyCvJc",
  "key6": "5LF1YxL8AhShAzfizNn3NMQqhRRaP3U5rtkfLJzn5LmogLKc1cjTg4Q9Dixwq9EbVnedkTUaB6K18QBN65UwNEw7",
  "key7": "Y64bgDFTsJseDWDxc9q1czJ8Ug2RikAWFRLEzG9Ncoa3uw8UabiUDKq69RcgME4BPqqCjCD4VU26ur9oqghAT6L",
  "key8": "5tkxcJyFXxV5uThMvPuKUhkXRqXpcCcpxPL57Aq4XXnyxUH8aMbk49Eu2QHurxiox5w1oBZM3xgbtiWd64gcJSM9",
  "key9": "4K1bkNfo9nkU3Yj75QmiLnNEtiQmA9PBQiiddasiCpXyFKkwPV8BiGHcezciYZCqeZndb4A6tYsRd4jEcGKC4v43",
  "key10": "3MLi8hEU6LtLHQNqw1EY5xpKcCERJwCsVqMBaPUYXt1b4q2ZkUHxiYKU7iBd6hQ4funrwWj6NQKE6KndJZAvnUbg",
  "key11": "5A6ZtqAmYq53HuN9Gr9Boeb2oW1VCjszkgs5Ng9wfjkveHNYWgYU2y2wUJmdjE3MjttZZpLuVqQCqk2ag7ytjyFa",
  "key12": "5Hi5fZHCvwRcEnGPNnsaDxYeL4jYBgEjHfKKX2BMK87e9sx9W7iKcY5keeLGZi8tLPi8edbbSXJEMxbqdJCuwvZh",
  "key13": "4jmkNT5TPb8kFhCUijqSSzkibFYPod6Un6u28CEQb6R5ZJGHqpUEiCPhSrHHUU5QyM7sGcDWBwSbpjY6yqL5syxi",
  "key14": "5LCrjzbzHkEvYsA8JZGfBVkU4UCx7DXH5aN7hj43RqUqAYKRP4EF6HSZthbvCstiPqpv21cqNggZE3M1hp7z6rqg",
  "key15": "5Ng2QY5nAif51LpPJDNB5m3ziZnSqx7NSKoaco1yZjd2vRAzL8ue93dqzpGSA5VyCfQiLhr524ZwwcxWrR5UjxZA",
  "key16": "3c6XeZG5iP7qGtSjG1Dn1FQsW7drcZF1DjeRqHxxfoqrUHKgCFBFKnj7mpFzLryJ4an1QodpQbH6N3cm3nVjXcKM",
  "key17": "622wxMXuu5t2fHmjdyQD1ybH169NUo2shhhN5b4VTChpCfLKzfezt2h7iGbW9mii86yTjrPbgywpd3S1h5s6g9cb",
  "key18": "2vZPnFeHDbupk6o5SX1ZKjKMjK9kazMBgkaEPvryHyBzBT7r9SYktYCGQFg3pQKT1223HuXsVog3e6osvbwyz8LA",
  "key19": "2XyDeHezdbbPkkgZyzVvTFoRzviLWSKarZmecBuvWYrz7JPBcLm6gmtPDULdYCbcq9KZVxkuny6zrhZ4wxcDXy2k",
  "key20": "3TwJiKneSYfxWCtvKwp7RyBamCxPmje2cXCQkYZWNFG9A4LcbTzpkZPdLwwbS5wiMLdhq6swwYcfbMTUyv9D573s",
  "key21": "4Wpi88RWNkV3TbXdgigUw7tN4sVDeg17ubBmQNcnpaGKJPYnKTaWPWgpVVyigQi4kijqwC68skUZcKAuQ1ZBF2rJ",
  "key22": "5qxBP4j3yNNEjwouUpHQd5BxZQWrzV8UgCFBwrc1MtzdSM9NCFUNCzKNoESLkJ7nE1Zhrjr8ocwZBVESuHNXhuoj",
  "key23": "43fnL33gBkiuQzCTJq8NEdUg3EdSoV7AFv3RVcmyAYj2iy9S3f2SggHbBxYeWDsLQE64ZNZ2CAp6Ne3cMCb4fEb5",
  "key24": "27CvH1KwkvEv5HrG6KdoCY2JzS2nQDZrhhWJDFJrgJjZY5hYDL14x2BpvRtdBiexQ5diWcyQpGnbwYMivXQPv28r",
  "key25": "2wzqkDizME7CnNkafZK23HeEW6MEMKtxUzNVzjpr52RmEMX3isZFmLpiEcB4KmLkXWqs121iDygbdc6sbe9BVu1k",
  "key26": "48P98CAViRjrQNTY9jAX185r4sY8oz5T3G1SEAc4P8bMEyk5gudA8xGYrxyWazmG8GevWVybKkCiNBvYH9jE7aTC",
  "key27": "aA6yym8epwxya5ZaoS1f2LTSsbf7348WNiTVsRMh9NunMrCCvcm7ZfquiLgBAXguq3CK15HY7jWPe2Nx5P1E5kk",
  "key28": "4iiZAJYm1suGJT1dNhy7RzLeeKqHoUNrP5RHAJmGcsgBWbUTqNDZx6TKSjwY9fMx5s2sqWb8Dy7PuQ82yUywQ8s7",
  "key29": "4HbWBJqgMBV38MJMLWTnFZKdmaQiWRZH9jZXYXhZSV4VsirxfEi9PwsfGLu9oxNEMNhZDDR6AMZdhkyR2sdSwua7",
  "key30": "2woKwcYx2VsRUCDZ7uAm45KnG12wgWNUaZcWCd9KJkSUWxF4CnXL23Jkc5f9dAYdUFrKiF7PT3gQvMnKGWSYV82E",
  "key31": "4fctxZtBvpxXZ8NrXCzeXtjihXFBcMGZ4ZCU2xfUMJ3We4dfQjnX18mu7KGKk4yapjMtcgaD2qi4bf5D3hhQGfpx"
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
