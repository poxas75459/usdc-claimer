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
    "3vy5VUzehYAZJwpjhz6xfnewTT43LNbjCWAUtFCwzkmykRoEVw82UmUVeeCCyk2HEpkjLwjGVFU3CHKW6fywgkky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47XUdEo9zAxu7zRrxfWjM4NaZ9AptKoyj6hKX1TsFDKW1CnSht8aubKTjQ5ytehMnk3oRQTUxFZMMWmzuLQD8KS3",
  "key1": "44aMTQYmqbnZVUsGhNrrp2p1ikASMm6FFFKeH7xEMuP5X2WCYQRuwhDgDfeiobu6fZaaLiq6DBJrCCAoLsxNkRkW",
  "key2": "3eqazCoE4hy5W4R7H5UaJ4hFZwCBR5ZgP6HhAd5sVdZpeZ8ZapmWi4ckJpAYEbXxUmGnsyJsZnP5XwJ1ZqcYhvbX",
  "key3": "33zxdBc6AGbeLEaapyWQRQ99xqL8xQxepsvavJjcwzhhyV5FNRmaah5BeaF94xG4S1GbE7BjSZs2ehrQirm3Vv88",
  "key4": "5X7yHJcqVhoXriQAYges8uKhnUyDrcxBjmrhhX67zysXB9g7QMXcKMsmWpA5Y8CpogXjopcBpk54K1UDjrg9oTU9",
  "key5": "jSKb73KEsKD7vcEFU9uZesx2o7t5GYLWJvxCV5qGKJEEFSMoRCXrKnqWdqwGVxRLGPEFZREyt7UJgXhnB91Gtae",
  "key6": "3iivLfspUStUpsZAnmQRs2WF9v9bzGyEtLLHmvyJrSWZwprL6gp5iQbS95uZzM11Eq9a3gqCtLLDzvGaNkovJuo6",
  "key7": "2FW4VKhz4882Wn1KnxCdMFgFJRkTBQBfa8awhHUeXacsg4qgc7Rv7LT1KozM23Vy2hQSKQYQBCAUmxyTSpnFdkiH",
  "key8": "3cRpAGQEiAg6ek2eDSVju83WS2LiaJhHLRhwEGxKXwu8K6buumVW2mWmLtL7sTrm6X2ngfDnZyFz5A71NNnDjAnB",
  "key9": "ACfiVK41dr21J1MmrU5Z8P3Pz9ZMTAkDjEkJwjNpG66zk8RdTS1D3JSvnK5efGhVJwH7deQF6MbZpCnkFnBvRCG",
  "key10": "3N13hLyvd7DhD3pMBahxSBHUBp7LZmZzDEhdRbh8ZEN73zWp5eUMsQtT6CYNkbKWqAFJqJUZUCxkj3JqCU35GXk4",
  "key11": "3QrrJfDcjSBp1j6a8Ndv4ExiXJ8oVSziXULFuub3VRpqEX9HPiN8zW1YPrBXisxHgQ9FM2jDsfAhuMgNQyo3A7GN",
  "key12": "2XpyiZpwGxCyzKbnWecNykoyHtUUrEpDxCWgXPocA3rhn75BFooFMbr8fjY3h5Uc4m8bBthMmBfYMsBqjxQcine6",
  "key13": "39zMPWW27VCu7kSZCZxE5ULfBdymHGARSH8NwfQBqjWWGj4kR8ExP3ou658B3s1L49LVsCxnamf19DaR24NNSyGH",
  "key14": "5V57MUjLxxh6NDSqeZyMzwGKWCDXQHAKAtaGcjQBuHaepgCDZ5ftrcKsm2fZC3iz6bQJom8poTDCTNn7hQroTRo6",
  "key15": "4LWBV2XEVQNXz3qkxN4SgyMsSEyt1Ds7Pr7h414PYU3Sxnqiyg7mb7jLAZRSKcBgkEnr4ipLpLmEqP38PM97Cipm",
  "key16": "4kx3NLuTDAx3MxcTFdBAWpxZVvqCBZqXc4ZsQ7x9xXrSQznRYfXCJmFjToso3UfMqshr5STXCSahDpvo3tfzRLH5",
  "key17": "3ANYiA9Nyotb7Nc8YMfWpDkCvwNRnj1VqokEXLxmbYCthGGV9RVs9P944h9SDAGXmp8SvVJtW5ULg3Wdh4G9ga9k",
  "key18": "4bgCUhJUnLpmtbREXkTcZyCizqAqHcbZNoP7EkxUEAertEk8wmKUuzzVp4WYBZGZdGcSRJV2CeBNdTHRcFaLUTqs",
  "key19": "3kqeaPWBVjzApHZbk1EzYfmLaffFJqew8kzt7zYJTtuxdoYZPixdRTFm3t8bVabSGVL8oanSNjeWDfd7UZndD5Ch",
  "key20": "2xTji8vzpsdbXLHHy7dQUbczPgUwdwcFim6vLZwxVmS9rZq8GdyapgoVUGnQuLieeyDj9SSphr5hSQXk9cxbLPwU",
  "key21": "5xdF2pbM8pKcwW9uEkCmAoMBvEztek7pjV8MJgtHCRv1meA6uHjjg241S9TEpk2q7qnDqewrWqsAb4PqUZioYo6j",
  "key22": "4J4RefDrPWUq4yF8ghvEZWsS8Q1xcd3V9G1bEmRtzydNH699vjyKejPnr4WEUTYHb1AmERWcYSbDnG4mWqG8sSKU",
  "key23": "PTwRXRKjSStsMrJsPXF6nDcBG6zK35G6Ck3KXjWcqKbDnu2Gs6xjZqV8x1scFmq3mVghFKpkKEfD2SDfrSzifXp",
  "key24": "p46bA24eivrVFJn6WMPTj19Zp9nvF9V78Khiw46VeJRxwG1wPJYhnZ8peLE7W58vt1mnwmCdR9ELMsBS5EDy36Z",
  "key25": "2z2E9YL6SgSiHFzQZVZ8eTneSijcZ73XidogZumFntGuaqGzdWwZsKRtAkm7GhDe1k8ZVHm4fV1p3Q9nVfmqwwh8",
  "key26": "4LPjHTnkfSMa4ju9YmsnazE8p2sXoQQZmQagSsZhtuUMyuYQa1LTETjAMCEoJDQN3G4Qt5A1WFXuqYCXx7xFBaBB",
  "key27": "5YsxUgqW8NwR5R92ozwmwK3yhk5Coz1D5WkgR4gbgunjQjbj3xy88MZadakPv1huSs8DQKiC1JGwgBnnGGenN16Y",
  "key28": "4xUk5H7mEWZPZ9Gzn1h2YYXJBUG5rxiHkGkyR6kRaiMrEJLncBeDYUWWXeKNYifj2U1wVj4WErDJFEfP18pbpz1Q",
  "key29": "3PG5GYQLaEEtt9b5qF1AdX8Pgf2cXQKDYvP9QE1ShBCQaxBUg7meUYmd4H4qaEDaURBGGeopuL82ptaY7i4CVvPz",
  "key30": "5Qt3sv5jVnC2AXiPtpkV9bnsomZZtcWVwGmRYaSEps7WqiXx3iqP7Au1WX2JYca6zzzNKNQZiKnZwKFM9ajm2Wxk",
  "key31": "5uBxDPEXrb51EskSHHUDkCFeNiqZZ5Nc6p4cACsdwTWjbspKV6EbwzQzMXo3r9ewJykuH5CVCQ9VNW7bNkeC1YS2"
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
