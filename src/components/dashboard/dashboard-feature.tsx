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
    "28TpAXmaVTSK82XHnBgb8CoTosNuRGZniD4mnLDea8QJzX8zWRyazEwmbLgN4h4uUr1HoEzabsz85hmkaaK281ua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m9oN8eB5PVkaCVB5rcd8jZK4cqDV8jZPytXWnpN3Js5jEuZUynPMoPaUH3BndS7XtPWaSQGECaAB997B2X4XyAA",
  "key1": "LBBmsGtuYZHXjPTUY1mkgcCntVDHYZh9xWtnSMr2zQRVRUA58nZ7jqYyQzTWzqVuDwKeBEzJrsAZ91Sz5TFG4AR",
  "key2": "4qz11ff9N3RM2yDYmyKfP5v26oTctDx1PGnqrSMub17Ph7UyUdikv8WSikXps3iwxBwpVyqza81Er7EoVD5CUtxY",
  "key3": "f3edJBTGSbNV3uS7VwnqCuD5MAtrUCRmxFHDRENmhu9M7UVmLKw5gkmaL2AwGKEWTBx8gqMnXUtDg2F8cSj7o3k",
  "key4": "2pt7eoLB9mdVqr2RF86PZ5REGufAh99jUMGxRKCRyeb1WtqDzND8NRdBL4TP74fHc87pdvh2NitcQxNP8cbQXmb9",
  "key5": "kqqoQMmHikxmtRsQVTxKAWTdzJZAKLUcMEZDEK3m8vBWCsWi6vL1kT9XbG4bmjHe2GA1bGJRYeic3jVaCRx46vx",
  "key6": "61tX8GV4yagjfngiAtw55j96cQ8Hyf1DET6PJef3BnGvqadTBwXj2bq1VwSAxWoHA8pxDY2kEzM16kz7EzZwWyos",
  "key7": "3crgedDC9dc5SJ5RNttp7qD7sLLXSSLYmjHfU6WJunXGyzvz2MTQavkQfU4t1PygvmX3fUPBvQoXGTuwYYu5vF8",
  "key8": "5u6o16RBHpo4FZCSVaeYQi2wnT5h3F58Aq7NTAXn1U91NxWpmW5XA4escn8gJ3q576YtvXKXJgvXBmL6GPXsNmec",
  "key9": "2si2akTZqnMzxVHvnTpHq7JpEPmkCRivZgbUxggKNV2Tbhe6s4L6NxsqdL4wJdgyZEKyRn6atEkwRAxkJixstPWc",
  "key10": "4wczx854u3k7kGj978PeVjyeyFDuHWbwvudfwUUsRUGFarf9ZZzEtWxW3r1eDP7nkQ5dgPUv5Lqh1iNc8tf4MBru",
  "key11": "4ehTiQg2kzQDihGgApzFRffKvR5RU4Po7wVRawaaucsd5abJoNXBkHiWehrvphdXEKVWJP9uTmJXwg1U573tdLUC",
  "key12": "3CFHYw7q7hbave2uACFGbp5SaeZjaDgnfGFqy9EKcmVY15AHYpMxnfAjvddTDhxW6qhaZrZoxN1ffbeCWKGFC7sX",
  "key13": "21rHeWrDU1gWUN2v3BhN75br5UYCa7CXUhqqsfbJwts8rRMrhfvSyQyqexJ2NDEcUx9qzsMjZS3acmoV2cCgLYNQ",
  "key14": "bFBhHmiSvTJaCwLYDJdnWwgpwHWryuSRmDU9QaBahxwjvQE9x2mQtmoDV8E8cKkj9X385qrYat7WsriHh22Er14",
  "key15": "3Uwm5Y25CvEr4kY16QNAqJ1L5L9KYTWF2xmWGDopCk1QAFQgH3s1wtbG8pqoSy364FSbgT2XRQHqGrigfniR3a1G",
  "key16": "5Q2pwGAy8b7kapNiebi8UgyJfWVmpZnUr2M41QbMARWDNWydxRcRmsiWjZwkizo2DauJfcBrS8hSVFiQx7fgeGcX",
  "key17": "2MsY1YUuPwvew9CXuzLzEWwedGTiW458RyvBWu3uYZtNrkQyEsczHdGC1J5Ak6gCL8HmnADpMXwK9HD9dc6Sy7Zh",
  "key18": "4ppxSD86GNDi1bdttD1ByVf8jQhPoNKKoxZvpbukTpM91CAtb2d4JvwHDkEDLQkKCbHA4erAm6BiDxmM6MWuHC8K",
  "key19": "RQKurRyGBijfQaNgUfFfBHaXBhF5rYYwrwF8CpA3SLZPUHzn8pZ95uun73V8ZjvwJh1SGgu45jhWA7c6emtkdfN",
  "key20": "4NbVtpMXCQ7y2J3nF6PRhNF3YAqSb7WXnCzkRDNLzcAd3TZvGfd6zEESSV5y1QihPPk6f41M93fHw9KrzFg5VWuA",
  "key21": "3pwTGK7hu6zipQRn3VcsKr2EUYRxoyzcKKm8crJ7fkNqEXupWgAThLvAb8JTewnQAdbPJHgytiy4jyWDxWypcBkx",
  "key22": "23hWmcWWVmgcu443CZnbRe1A4jrnSZhw5L2pX8WLJXrU1n2gLubYn1YPzYSjgiTtwYbtd4JyViKpLXHxh947D8VF",
  "key23": "5QkrnSfH3eEEJoPfMxUJVcDKwV6MriTARJjVnRGgG7N7iN2cGNfSSnu8jMt6YJTSkYDwikfTydaYYgHnYWW6JCfi",
  "key24": "3wsMwJ51bZmRMiyve14ZYrVVUAJradwrMTNTXSaEheH5j14gYfHqnsLM83yXDHkz48X2pJQBTAgrLnCjhPJvBYVV",
  "key25": "3jy36egLdQG1dt1hDUFPHv1Q7BbjY5Kcg9XgiUM4CD2HjQEBXu6tqVijq3crXZqMW6BETjoA1iYQKp2n4sD6Sbf8",
  "key26": "rTijxLZDyZEeCfNhzzsAXnxVKrUZmohdTfUpbGLR1iTyz13najARGvtPxezFaWwEkRe4gfTqKpY3YminwHzsJoJ",
  "key27": "3s5s8dqjGyxPZubT5kptU4AyCXBB95DSKuyHtkzhaRKm6Sc87QWEZxRZbXmJTyQdqDn1pVfeqvg9Cbf65YuYfJ48",
  "key28": "2w5eMh8prNqc9oDCuoWoYMKsL1jaPyAXV81aDkCjzU6BJSbCK4nVZ1gWwCG3Fhvhig52aFZrWxJvav9FY8ZFMkvE",
  "key29": "5yCgXswfQVVygokZE2qzB2CwuJpoudCpL2vJbzcdfwbXX4dv4uDjw2YvAs8yvwMbyu5yhLH1rtpSueisBg6DU1FV"
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
