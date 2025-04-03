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
    "22KRFSr6ParAoaVdTtXNz2azTokW5bFca4JSfqftQk6Tc9EFCmz7ppz8BH6TmrWiLFacYwDPwhXKDwT1b5bAKDw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4csgGLKv1rLr9Xup7Murm7niq9RzqosdjqaGgBEnyjM2SYSAmtMjTWyr4gfJighWn6E9852z2BDaR5DnZzNWvx7G",
  "key1": "c2BXZGLio9waRnTxDWK1Kt2y6setg5wwRGNXy5JXUvE3X5R1PhP6822VrPQxgP12VXownWtmkSES6dtFpkmhCVR",
  "key2": "4DiG1c7yyJh87qzoh8WGSiUse7oAZrrUThyeMzz5gf6NcsJ9fY1iV4yV7xWN3v4NvsKZB4EFeffwG4Mjwv7jyAiK",
  "key3": "637nGqwMjJGwoZgjT3mP2Gh8QAvZkCkpHBhdDwXfX3wkxdFaeaX9PB4WxWikgsv4EhfMLq5yLKLkoK6u7Hwnzx3k",
  "key4": "HiKzU9cUp4oUWUYCEtVGzC6fAqXDxStuGYKn7ZcMZdkn8vMTfsWZnaZZmDXADjvL9Wexh8xHfoSweJPSsY4utWo",
  "key5": "3SY3MXpfAqPPNAsXCrccnCcjy2xCswumZv3voPf5HDH4mmwow4W3umkNq78pZ53K9M6QDbS4usDLQfN6FvYftnKX",
  "key6": "2svPykBA8mYfoxRzuK8kzidwdNWt5jhWkjQyLgve71Cszk6xfZ9z1hm35VCf8phtUQMpZaj82TmgAdxcufGsNrAa",
  "key7": "3H9wsumMX1pZXqK9cNojUccYAqKyNBaJpdyejYXx5a9LvnqLrFoJ5BaVs5gzHUNXCcZ2ZdmUY78WrRFvqGERdSc6",
  "key8": "2YxpA4ttVBrydwJpKuv3rp4aVx8KCKH2wr5GrcotDDCVNsPhAeXzgpzadL1LuB22qdKe6zXzBmwsZ8Wa4ykdKAPj",
  "key9": "5r4QWYqPKiduY7gdt3GSeLQGfWvJsCSWLvvgpvwN6SbAh8qpX71TjJmZNPRS5x8StrHeoYgXMjwP2g45MsJyurhk",
  "key10": "5yDQ3a5Ju5eFN2MLgf8NrSVY5YAAcEB1ERy1PUuieedtHZ3tihU2WJmwYQbbE7wtQFgNyUCfMs6SZi3KauETHyD9",
  "key11": "7LdYkUQr8zzUdMmJ9gzDvzrTRsNUR4aHvG6NMYZchvuFiCSCzjnhJosnHgaSjzr4CeqCVNoQmWRps2cNnGiBegp",
  "key12": "Ubq3G6m2A2ZzgjqbVcV26n2nysRjdsKThTu7k6UFcwnSxWiVxDUrcKaZu1v6nTExgx72VEjjYAEKHKtRAHZ2Dwi",
  "key13": "2MjwPw6gaTcQorhHd2RHJr87yFWi9CwP1xKwftGojTGETJRxAAYD2di4ChDha5b4uhKZxYE37KPGk5zeibjA4Y3c",
  "key14": "5cqtJrGChs4TQYZ9df4aKd3kskNEMbc7pTeb2sUsBgFTGyGMYt8eK5oZFWekin4LmVSxQBbUCLkpz1Z7i9Mdu9SC",
  "key15": "4hmhYtXFySHC7Pk2Zo2ibqAARdRmJhavTqfZitgweQjET8xJJndDreUb3QT1gYoLat8AtqyhkyEKVbhqwUpNi8CA",
  "key16": "3DsXTBDHjW3qhdxu3CQtReWtXyV1DuJ76D8w6jW7XqLd2WU6KSNHKoSKCM3z8DZrJfAiUavNtqj9gox6sUF7HG8T",
  "key17": "P6YdGr5kWCMKZ8rJojAFyDyvqr1aWn6TvVckxNdcAeWD2McQzuL9k8rr7Lknfp9gEkY8hFfibjwYZbCNLhghqyt",
  "key18": "3pc14usqvQzjmuBAdFfLYY2Xxgp2fFv5RCkeNaxdR1dXg2RcMwgzSmbNiizDXdBks4ToVktCRVjaCKgUetxrKvRR",
  "key19": "2269yFrPmu7kDqTMRkVUAyjMsynMhp55cRyuDeaQTSYqMVzanhunaLRy1WX1oc4vN1HXTsuM13tE11ZBCxbsUD4t",
  "key20": "3U5VrUELKVX73EZKFqS7iSDeLBgBon5W8Q6nu4yHMsrpwMH4XgRWTmhndXmzeGCcNbWTsYiRjRdHF9tJuKUzaUq4",
  "key21": "5UNMFwXFGggkFqqryeU255FKvjwTq2M9wEzq53MeCkxHhewvaE5R4po9tBzuwj8gTHcXVmbTzsqvjq9UXVw7oAcY",
  "key22": "2TjKtsKicNNzmJzSmngaR8dzV9ASc1rc1jm5bBsVsCV8RzVeX2FtvVf88oUgWUSfSrJWWj7TAN1rWVfLwhtNaoT6",
  "key23": "29Z7UfwZZ7BmjzEscBzGf1HKyFzW22ZLxmmHAMS6Km93Sz6VcxhGvSoFqLY5xEHAFA1LBxCKxMDUax28pq1eiWYm",
  "key24": "kJe41HFUmd6tsipoybUQAX2KihBd2BwdPKon5ThQ6w6U9Qm3B5HJ7FboYthitAkS65UvfgsrE4unifraDiVv6HW",
  "key25": "2SDx3vbhsmV6bxA7vzz5T5pCBMcYmB6SMDg25K4brJi2myhRonq6QzHFwXmrrNC5TTJSSkma4kuxGuhw4g5CyCp8",
  "key26": "cLNgV5n7AsEGMBfyhZXNGMx7kTAeQY38wYTHmNQ8PL5xbW5dGhHMUBCEgvpa41o4AqTUwBk8ircYcdUjiLCM4JG",
  "key27": "a2WhyWMxLSCV2zQvEWCctHMoJAiUQ1K3wwth7884M1SCutTPKp1h468kKNCEBtFew8bXrsBugUsHNzpUhbtK25d",
  "key28": "3gbCPDQuFU9iAJ8FET6xoN7dEHUeCpNpcFnU3XwDuU9oiqxQWu2MTWbWt28isAVv6Lvj94vwH7HYN89TknDrfpmi",
  "key29": "44ESdxsPFzjtLZeejgEuHQcW2KMzdvbhYw2VYwaLE4H1Zx1ZU7MJkDjjeSTTQgeBHRTeS2ZpLNY32HMfbkaqGwwL",
  "key30": "3KYxeA9uDWrShoVuapsSD5Jp32kp1FVeXMdSQyA5VvafFydxZfVeEngtoHa8PRRs4LeeYDwvnzDYcBSqnshNHz4J",
  "key31": "5ttQRHmQKGDyD6H4NESvZ2VMoEyMa3mgac4f8mEadVbGztPCMRak6rrBBo3VuUsCHe9WDVuwPTxxZbwTq2diZVwC",
  "key32": "3xeBDscNB4CHgBLzeLjwj3AMPFxMn5SxErPhbp6Jqyrx1jHtETAQcexmEWwChuHTppVfyiyRDPo2onJqDGr8VK7A",
  "key33": "4gp8RMU7V1P3wTn5CXaMkzGJkYL3tJWrRQ2o5M3yrF3qHPDTPoCHVVENQTQnRsuVbeKwStBspSh6dX7wQaDDSsYf",
  "key34": "2QALaCq9KvHSEPt2wPZyVaoimkn6f1JJhxBWzMjfiPRaj9Q1k7ownBbS52Men5TyZzH51fA1myJEQ1xQWW7Ai6fq",
  "key35": "HyERirZ6d8g67qJEmACeo1sbgGWMNmveByLoVsTEHLXVnQ1SNfVpGrUeCmmP52JyhDReiKdjw6XszCszSfdid5F",
  "key36": "2kLneXGoVrmwQUifkiznJMg9xdiq4qKprEQdWbEp46v9mCbQX7Ai3N6LfUzKyrHvNLBgk8q4hQUdintVEPdA3pvY",
  "key37": "2wLVv3SKQx33D8FDhkDRmbh9f7snE7vpLuk6E1DotGvMiqGAJFBC8nTP4aTXj76HjPc1EhRRJaQsirhGfCtCRTq7",
  "key38": "4S8uTHAygcxP38MEZwAe8KTJuYdsx2TMj8Kb6YyvyVnMVsRdfCa923mR4Ba1Ketuajv3LJabZauBsFRnCFf3nTKh",
  "key39": "3Ko45KHziLgaTWQGf65xAac1a3aAHs9DyTGp66JkUxvQyACTZk8UzeRZAMEbguSXB9d39zPMt8JSPnRdaLTifBvK"
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
