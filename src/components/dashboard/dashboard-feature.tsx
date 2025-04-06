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
    "5bRfGq9BTudZDPDuzsAsufoN8VJfKXjvv5GdW3mPDdsDB6znY92aZbMDCVk4RjkBqQUf1U8vQe9qofx7oimwefvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ukUTLi3kH5UaYdaqgnUqnXKTmgGjmhdkuPWCd1XgerwZeDuaP3yyiCwsDdHvgkQLAywUnAy1eYCB4ZoT2ya7E6o",
  "key1": "q18tPypJ9tKMRdVSRCp268uMDMNNujn2PNRM19mfaWDoZUjnNXKZTaEfyncZv2LheF9Q17m653XRgFVuM3B1RMP",
  "key2": "4QbKw4oXJ5bNJHSXwiCWmGbWWNQE73Y7d6s8Py78i7MC7gtf6SnwJAL1MW1soRdfdXtCm8w4iMDgvwSBgxMfVLKm",
  "key3": "A3P2aArYiJ9qr2v31rMHP8r4wt4XZgv1vKjd1fZ1cpPDuqRU1HYVpYnhupK9t31hNiXpQ187cXiyYxoc7pLFFPJ",
  "key4": "62hXJVx6C69n3h8TYrDDsVdY6u7aLVjgU8WWzDWGvwpNEGJ7ELWxXJqWz8P4j7wPAR9Z573NwosCEzbcB9kSzaiY",
  "key5": "62Gr3buhQC8LASHWnDP6jfDpwBjAAJRmT4wnpN7KkB97thWukn68YQkoGxbNE3bHRAGjY9ui5KvQdd2xfwZ1ryPt",
  "key6": "24DYXRxxQuXdR2P4kZF3wj8qqXGS1MPwDk4y1n2sVYtFBja9eCSLNP6YaQRLAWscq2E45fudf1ayVXJZ5q5ANCNh",
  "key7": "5zPpv6BBpBNYCAMuFRX7XTYR4VMHcKNbVcrsk2hQRnMoAgbRvehMhq5Bnt2iKUxXLqN1uubRC2ggvsjVYbZQLV8m",
  "key8": "2RifJuCf8yXmL9z3mNXQJbN4TGLc4mEK2nVgZAHrMvJ4Gj48b5Xdf7zuq3oXQKmk9a4nLbfoQafaeX1Gfw5J59TX",
  "key9": "3mK87sjZ7ZGa92MzUJspQeyBN3VQwQFB9iJPL4pXDWzbYvHxPKsUHcUS8ae1A139SRcHJxR2pj6gKuTQvoV3EWM6",
  "key10": "2sWms4Y95X6Kqxf5obtSoexfnrzMi6twJyLhhdCcAUHKw9rJLBbCGaM4uSZvkxGfX3fKS3yjv3dusd14SaHVJbZ6",
  "key11": "WFgaj4XEH6Ecwzwu9JPQqUkhZJWXhYz7nv2bmVgRgGStZVsmh3B74RR7meGDvvtpGxk46wmsNyyeoLSKLrJTBN1",
  "key12": "4kEKub1qfZMckbMQgi73z9JmAtjb4a1LhTRSZh5fxCWsu2SqupaoE3zga8pQzmZWUgwsRQQU6ABzkEUm6296zQnP",
  "key13": "4BUVRXWbcjKJozzdBAiLMQQ8s6hLokYXMjCY81EeTRJLyd5C5MaM3Y4pkFCi7qNEM9H7yufeyqbDUts5mWFqinKn",
  "key14": "4tU9vARQEkhjoBawxA6ANEtXHQHr9ttTbbNtqve5XyDHB9UMArywDyMyS8oLp5GVdkPNKpmaRviNRRWDS6bGisC5",
  "key15": "3z5NgavAT8WKoNFkGVsaaWGQZpX7CG5NQvtNm37w3mAEByBozYZqTdFyFuBpQv8wXTh7Vn2wfruGGLb8JL9muY1t",
  "key16": "5CxGR1XrDNAoeiYdQ8rnpSHYeXBS2h9nr9hTjDQyXdT5X6qLE3LRDE6gp2QepgSuBZexsnbpWN9arqBQdCQjywoa",
  "key17": "3kmk2mQQtJ8f73NZXCxKZ8SqL4WQuCNP4pZX3BvGjsN2p1TER36g5bTYq7aRz8GY9wcZJu8BtKgWfvVJPocqUf9k",
  "key18": "3J8xA1FnW8P8NGTEVyQgwZM95kmqDGzFmxvZJKQMvcn66cFFeBFx9A8jCuUaTvuXKqHSRdtKu9Kc3VQY75pxwNH9",
  "key19": "4nXVWP5ybi5itTnxjfD9JYzJYxjBGZgxNRE1aJbt5jDnVsUnPXgCeD29ofcYVbSgj9ShFiLgFdDRxRnRAdvcdyoX",
  "key20": "3R5QEneRtHSJyyhmemEw1g1yDMrAB6mdWms7Nam5UKj8nQADCZtwLZaYaBK2igvtUtmez8gDvbCDQJUF1eJv7H47",
  "key21": "2L9TBQwi5CXJTeZmExJHSLWk8SLMAjU6cpz7H6g6uEDvAhdzB8omXRysKofc5gBseMpXcrEHg8udzaubWo3485kx",
  "key22": "4aMc8MAEfnNYDfwR8C9CSmyaCCyPYTaNYVhUdNR5Deoanxkuee9W5bykrgevxdNmn2RrvGYtFf5QjkzTsSEazgKM",
  "key23": "vfnaCpwNwcSvTqLXon1wRRpcAfoF6cyD3TGHajLcXk6VZrc9b2riQE4TwkqJLgbnacua5mNmtScg6vrxEQjXaVG",
  "key24": "2mx7sKvihvvYHR69seVpCnkoY4MWSoSi5jh3q761pxQbVFh7y1pvoFNkfkWhbH4Q1XH7YoW8avuDWYGg76fM23Ca",
  "key25": "3wK6Nbwdm3RCuc9HMx1r4mygFex4VMCMpGF9p1EAe6QHjteCgUWd6TTSv6eAuD4LKzgnApGQm48GzBP9H5Eg5z8y",
  "key26": "4afTz3DRYiuvw8e28j9VEo1UfKA25vXGJ8HHDCCPSLScU3gvScP7b9hZwmGjiPjppfHLedfJJDtFbfF4HXws7pWE",
  "key27": "43JnN1GevXqEx77oz2XTDUCCgSZ6zoMwdPjWE9XJrE54T8WFJMEsBT1QTR5CnBBgyNpbs6TGjvUhANkr18GnCGUs",
  "key28": "sNjamDHEsE4nj37GSadyyxbpD2VjM8su2AS1EbvccsnnoWAnDAkRHoNs5r7VVfJZo8yGBUCEiyVUoCQVLd2WGQ6",
  "key29": "4VFs7NZ3jN3ySXv6e5bB4LSUCyavVYZcSyAVDbwpDbEwyZZEs1c79GXrZLof82RUhBCmbn5ofhEEPfQQ7uj3kyiN"
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
