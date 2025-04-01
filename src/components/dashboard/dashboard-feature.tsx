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
    "R57i8kmivhWZwdBNBceFaXXHeqLcCwm2xprkdyBJ8ZojyrTYi1RE3n5DrEwsxu5B2H8MswcJNZj1wU48Lmk7Dpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zfcP8jjKZwmnoAW3gZ6Q6qTDAsLerCUE2sjf7bpDbNCTxYg42Ayp6cbKbd63qRvVJVEWBqUiyAB3x9spQDfUnki",
  "key1": "2JhkSYgKyLivCwyB1kbVYovw6FLXcSR3AeSCgRWJXmKBRZmwVrQanxPTb4zFYK4w9tor6vGFu1GcjTbfwhyTvZJM",
  "key2": "2yhSzoqoHFQGTHkbMqWi4cwy7bqoNxdf5Q712EJN6veevGP1WvVsZWwJDZRRxvdWaB7XKNRN7NiadACaSzsXaMbk",
  "key3": "26Po9CXM4JPrh1KhfbKSyy4AbBtEb6MrZHj1v5udddVneyXwrqDTE5WqsRPhneaga9cuHJQC6M92fsWU8unxvooC",
  "key4": "4yduBAcogr281ocYh8kzwX1oXUMpd7rPe1HTwqiuZMRaMPer1QZWWCBaTrDUNMYqwKFPnBvJN2eA1UgatQENu6Ey",
  "key5": "3bS74yMrJu44mx2g9GduNn1DtWG2kazjkYn1iFCEtkNPcmWRdecPQEZLYd7hVejKohHWEZ44kaFzWqwCNMXSFpmu",
  "key6": "3AXkpgFpqJpxf38HbZpdPJSug1RXK7SXxd9bbWrT7x3JEKPBiM2CHcEqJRuBHxK7KXujLFNJxVyQH4uPAWdBjL9q",
  "key7": "5wAnrQ13v7mYeccasUhPWWQBkThcGuXy8mUhGVUp14Jk3z8BSP3qfYrSD6qdJWRbJaE4vziB5WGELerq4n4BYQXY",
  "key8": "3o3UV8Cf8socGfqfHHYZLhA9GKvkqaKvTzCPwJyyV84vEKSCsQBDo1j76Gyh5j7yBtBJs6arNt9EGnQuGX5UoJNd",
  "key9": "42w3bhT2WgZVUiJVempDAEP7h6PPzpYcjJC4KsTjhh1RHFoXHSydJ9F9zrxMnFqJLQ5bkPmW3sT7Wj8sdJ4kEY1W",
  "key10": "2JAudoU5mr2AFg5MzLZ5EogKfqnvPimy2vxiGwmYr5E9LZ9HGREyu5eQG6BZyMMJ9jJyi9iM3os33dDVsZ1GuRQ2",
  "key11": "5e6PFvooG92VfTiGSPKZuLUuxczRjcgmMTpZEvemH21XkEeXX1yjj71N2QyMvZMVJkgJybxVJP1TsjDbjHhMcj1b",
  "key12": "2vMiV1LC6oXAF3QDg1333seeZZdgRXwZ8wXW6cFrw95bPRouFx9DWWvpV8fnvGAxDbEXsWfDhyaoDKgEZodg3eEo",
  "key13": "4nxcnrZLjCrcDXJ6KQHDgqB2R9nYfMtbmsR8rcZpAc2qvSzpdYasPFcgE9hi21F7kPfAZqs3S4KcLFjEZEpCzvLx",
  "key14": "3NZfz4vHimMvnG5qh2Sg76RTpZYKtA8rfPJr7VLQWMfUDqHAsGbsD75aY9tj73T4U5SiZaWf93bgAYUoBw5TT1FZ",
  "key15": "2mVH6434oyy6empQtPXZukv1PJphd3grFtUVLb9U44yWexSRb6ZVffqadVNs4BBbxuxoeE899ptHXYt6GuFJBVsW",
  "key16": "3ABrytZmYbrsRSQErHvVMozKQaUvjfuu6vu1iSWLhYyAWhuK7Ccg6haNYMgabuhN7yvG5R9qY9XoBxb2dptnHKfZ",
  "key17": "5zwwDK16PbumkFLWoWTjJM81JULFEbo3bNWUPuaNjjetdZ3f8KGoC5F4THuJ1m3fa2doHBEAzmSho2xcCEiqQ8ES",
  "key18": "2pUUhsmsPVPS7FYfsn27FqZypEMc9PcgWPrfJ5ALoWfVtsVkeECFhk7nW3PvGrfXHMZ6ViTzJm2W1s7rKWrrBcG3",
  "key19": "pT8SF2deBdb6YPMFcyTh1vCwG9UjGsqSCobXEEBoKUWUJr6obLPzkgvhKBGmDeURdALTuUYBAZPDCtrPJARJmWY",
  "key20": "rphCHBsj3YXS9FAujbhuMZ7LuDAE9g7nre1Jw5twsduhuAfXq5Hx97N5CA3qnLMceoQMptU5Ui55C7yupf6LCr4",
  "key21": "3LN1RCKg2GhPpwy2x4kwkBG1cdpBi8FAoNZFwB9xUfoSgMDdQoq16ugQx6uCGf18FyTKq5BWYkGe1JSAdyT5GAkn",
  "key22": "3VWqLwvAuHicVv7cGrcdwxsxBiPaAVRnwcfh49enUFfYmyV1MrpKBStiK1CzWW64b85ufJAVNKLNEXGCbp46c8AG",
  "key23": "3equCDjkr7TicjVGSP6vmjBpqjpzXKP5PhQSpxxamgngi8d8rwaqW6uzQpUW8sDSCLdMeNapz2Ze7kip42MUjxT6",
  "key24": "4JxujcWMdhrRHoVsBxjKhy91oBkyGhtsW1ohUfV15s6JVMZxFcmBKwcqhZB7z91gGpfj9iFMqYThRvrSQmoDCrd5",
  "key25": "8aqSx5ZDSkbyh7FubzgbwBomYGU3A61yCytbddFsdt6So2e8z14dU5kRvDMnaKqD3Aj1NttU3FinriFYPC63SDa",
  "key26": "61PZiYrmWDgb4yzRwdjDkZPmYS5UsGbiAEwXE1TUwHbhAdsipmRN5aEsBjZdR2rgDUy7yLSviVVxesJGwBoS98Na",
  "key27": "454NDVsdFDdyUvLDNDZuWDLtPL5DrnirNKzka8C5VWHniCsAp3fsJm41eJ5JKhwwMMf8JPZSt7hKTQzY44D3H4K5",
  "key28": "4a5hBuKwRh2c57scrhsSbAKd2KpMCawvf19WMRJNp5HN1KMs6jWsKGiXMtrRfRdWPJoxTrZD3TPeieRudhmxRS63",
  "key29": "5viWwSTy5YwxFNfWqoyZHGhGC1hPtnjhYqWNbGGzDZWGjGFrNHL4Zai3TaocvuoS5baGhdpXDZasQiJpQu92dMCu",
  "key30": "5qPMm863sPs2azxGpKQZ4Mewfv3ykWpqdPwdF59eiMx4USdqStyZeGUPWgcUAziFWzMb7wtVKFKC8fkH7sE8FK5Z"
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
