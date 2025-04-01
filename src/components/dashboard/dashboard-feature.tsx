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
    "5FCTj29vLMvfZM7FTAmjDuVv9wRYtx59ChFfZJNXXoLuzwqUEiaS6wVrpJM78ryiWA8K2Dr2Yutne4kQPjSY9xmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hHE7m4GP1vuKUuikvg13biLmjVfPirTNWEP1dBzBYz1vUd1B4Ap9BvtiCGqPFn5eXoEJRcgwKCjemv19Xr12FWf",
  "key1": "2uTQrak5yidDk4LMgHEzKrkhM4ikp8YAFSS7NenEWSffpKuXD14NtAKUheK2nair8EXvJpFRa7djfGMst6jfzgQ",
  "key2": "5dUtYuxSLCCSu3wFVtr6p9ycaxenxD6R6q4B4SQunJ8FU43pDYwVur8d2deFh9ZZeg5fqoKd4dEzPYJKicnDkzJP",
  "key3": "w5oNajtHfSjkinJB6Cj3efkL9CCupksQRwQy8xx2k2vpJiZropWEKUe9TT6vniQbxNRn3rXD9ydBQG5C47ArSBr",
  "key4": "nzujsGLdre8Ymau8jm1St5REJmx31i4St9ZTTW7LzyRH3wPBH7X8b8rq9SvK4F7jWyjZbp8DJWRmbcvLLUPjZXx",
  "key5": "2TAKn3NvF6aZFJeUvybuh4ncaejgoNtLxyT7J6QujYstT9iZHnzFnoWyZQfEFXECZTwG1BsegLN7TpR5b2wisF8s",
  "key6": "YWH8Re5Sddohf8ViSEyzuQU9DBoTMW9WoTXdk225jQT377ohV5rHZC3vF1uaqvo7rs719yQsrqWgx4kvLUogEzU",
  "key7": "2Wa1bwjcUfPByAzsTmaYv7C9MDEVSfRLqR1F5wmjCY9nf2mgrQppZxJVjHdkmCc4TCfBophHAb9nUr9CbtqZ4Bmv",
  "key8": "RMjsdZiiCpiuM4jzSqWMt7dmEMCyWxeVg7z4bX49ht6295jARrWvQEcfsftSNRVNAa2d1HdDL74yj7wNvMgb8hr",
  "key9": "5BTDVz7wnNk3GqN4hLcB1cmNHTsoJrmyADeXpsHNyx9AuEBh3tAquRr6WCPsHMqkiPoW7afd2JjU7tZzooyWSFTJ",
  "key10": "wKLeEjAHjneTpRoiviFcHNV5kRx9RxWgH1AjqLMLXjbUCf5nSPVL23zrZh24Gr9Lz9fZsfSKo9Y6PVzYSkRqCHA",
  "key11": "63LfxeYfdEwWx1BV9eosmkfoeY7vema7pJgAVSdfbRvKXszpbQ3vW7nTPYkuTQkDduzg5PjoFnHjP9EgESUbCJmh",
  "key12": "cyX3eTezVqtQLjrcCVPWnQ4d4SsL8zsvLaejfQwwyap1FdPS5DcaYW4rt54Xg1uZWCVHMQ6mTPdWNTDLHBpUReH",
  "key13": "UbADumxzADrvbciDVDoVfwiGvkPGPHneopQU38K6K6qRhCC9yCNwf7e5uxgZ5TRrYZQVtbZRWZP1pnUFUML3y6i",
  "key14": "5G9ZUPUZ35xdm5iNgzTsv9zYdkUDjdL8jnA4dzeXFrMNYYgQQR67xwoj3D1C4Q35NmAYuSzXkPeYg64VBzspTxqb",
  "key15": "BpWpgGDwrJh2hXxKDviMFCqqRs8bgR6j8x2oDt5Fv5jAtZ3uniTvWBgfp3tTLPMDELyJubcMR1mcjqXbsTXz45A",
  "key16": "2r4RmTm4TsZkk2XZRpPyTJgVhpSHmFgcxXAEjRdKNoNgKuMp4vKJpB5BL9ejF194Q9CCMqb664k9z2UBeJwR5MwX",
  "key17": "3w1wa25kcyXzRzWiZJpjMzuHB1Ntuxq5i19Qj33CssnNrp2JYAaZsTRaKozCAQvnC97NHmfRZ6Dz1MczrRBZmFUd",
  "key18": "4dy3u2Wd8UJNZYygFgaYxydVjnw3JrcR3Yq9ZeQw3uGY83wrQM3ECBMgBWiANPETLKC7XTeSXGLAgRK3JUry7NhZ",
  "key19": "3zoomnuYgeSqPfWroFeNVDPdtwiMLRcMJ4qhYqyBRkf5zyoNryxneubHWkcwJJQZVBKXBK4MbT8syWvFxMBMZqit",
  "key20": "374hTsVF2nY2fTFGV5xHEwFH48aaQqLoWYsnbtNsTYbJs6xdE9tr3FYBZHGH5C4uqgHsq2QbPa5c5A3XjT5o9eNm",
  "key21": "GyeJhRdYsfiXweFyK5rmu7E9gbJ3wMPnciDHnKDssC8m4gYVXbAUjUaq1LoUtVkGLdR7sKnabz3Sa4xZ4sPj83b",
  "key22": "2kXwdxKsu6pc7WSdY3F3bUpWkUArR4MDHJEaz35Nhwcu5X6rx1CZytbEn4ecJmtP4JVhcdWpU2yC73aWFQjmGcM2",
  "key23": "61zSHhc9Mu2WBEy8HPdPhh41L8SsQNvjH8e2ANzw8JxCc6qHXRgq7AaAjB58rzWrxYKF1reWSW5wW1F9ch2DBzsK",
  "key24": "Sx76CzYC4mzbLDXAoL6GqHqERmbBjDNFW5R48RA9yN8y5RS3ssPDx27bJdg2zDQVSb7LNqYApAQjSr96MN5fASs",
  "key25": "5AMWnp72asRqEDjeTEqDK7DboG6Qyic7Jfa6DL8k31R6wbjJHkusoAe4HZHTvqAARLZx9tPRaAkGWGcx7cbZdbzn",
  "key26": "5WD7WTZy1kC8niumiWyRMZPtVr2vwvMxSqVRNAH2nP4oxHTVTxBgtV2b9zbgnGFiGNq1AW2ih5ax87U8jH7bm2AL",
  "key27": "3btspRwCjjKDwkqwwfoRLwyGZWLRPLNpeQNuvbcaZLw6fGRyq7oTn8MzZpb3ZWbH1oFo6aeLAwb1hmCUaM1sDEiZ",
  "key28": "Dd8NRSaiZJmcTqXcnML5sXpvAwhc8vuJ4nMq4Rtq1XNzEQu5o5x4mppxFHSApejBGJBFEhq7NTCNtk8w1btzfLX",
  "key29": "5s5vL8n6UgLR2pmGQfTLJdhrhfX32mk4WKuPMqU5oC3VXD2wXhXRa9pweL1heh3p9ZgkK5jQpMjHj4mja2FoHDr9",
  "key30": "4JcZQa4vjSUppJ9e9AJSKMkxLy3286qJoRbPYpXzSJ33rnCgKZELYeAd8sFGW4qGyGZ1rU3wFnUjkK4xFw4Y3nuN"
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
