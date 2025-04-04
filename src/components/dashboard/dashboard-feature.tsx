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
    "67gbRXau4EcnSH35ZoMkikRB2mmE2K9NZzsBVCCBdE55MtXSAJZ1A36NMkQCet3Myf6P2R6y3vJTXGTum73vDnio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WhVc8jkBnvBUFifY3bnFkqw7k4A9jvfyMSmanHyp2KCRogayiKG5BGzQuFQvXNcVeF5iJ7RRqbHp6zAVksP8Dpn",
  "key1": "5R4cVprJgPoFN9w6JcmsApVbNY17dTE4z6pDdssLUHa9pKQbWhneXM3Z3CFYixMPN2j4jZmmsX1FPNvwbRt5JgzU",
  "key2": "4rqJzRDTFRtZCtCDFBRNyX4WtqT8DdYTkvBpoFZeCgT2C2xRJtk2PSKwjwSQGN3iX12aKxqMdHXa97y8weWDodgF",
  "key3": "49x7cssqwut9iEdNiZGtQLMhn7L5G3iRqVhUqtaRu4RdoQnFg6kfCpEweyeneumGs4QhzBkSbzzWayUgTTAQ1Zp4",
  "key4": "25t42PJWDpPQD7DrrpgzwgmEiFMJye7JuxEzrikAXUzDDQt4PBHWVABBW9DGXxuwnutANZiSNMQMxE1CoETeUgwW",
  "key5": "4oH397Cto4aoYZqvkjwekQb7iusGZF4LnrPhpHkLdhSQp7DgGgHHrhWX4ju4HKcVvm1G76Dd1GkQomTgaAEPaaqj",
  "key6": "35gDoeH6JVXqWDemZxj66hKoKrfgmfYoQ12rHiuM5ArYRBW1XT8iMTYn2zT6Kar9RS4dFLKX94WjyMCWWhGhq3wM",
  "key7": "55U8kndtQEHVpf9JeA46kaw3Nw1GRkAW5Zf7QJtHUy8JNjS4bvUbL1vPeNbZRW9kXksrKggVFMgfB3pTcZY72hEJ",
  "key8": "5LGNMru39PUsD5xSJ8C2XtarY3Ab3sfv39X2NqHvw8zTdjFpyjnDC6Mypejsh4AdnNo6kLbNjto5ZYFDpZnxLQhC",
  "key9": "3QqZb1nmPas9cEpdQ2RebLEDAVwvFu8tfjNb33yj2MtoD94BmDuAveL1GuTg3Sh7f8erEajH8PfWTZNKYD16E5kR",
  "key10": "XtMGsvb9WUL9tjdvT8rfeFQhXGHgYM9kFzLKtxZrFegDQbTPQYoqCZfXaAfsZuNF2yBHrDbx43THviymK7VNfQ8",
  "key11": "2JF8YVgNLSjmtRmSD7W3iEy7jQsmk2Hp9PNQv8fkwkUuTSsgK3NGvUMUsuQMfpqs1Arefmk9V7KD34k95rtcCZ2D",
  "key12": "5SFMjYsvBCgPtBbLrpAf7CWKHjg3FEDWJ2EUp3jzgf6uJmrP4ZBzCm4vsw7SGcktXpq4yzu7bsTETfA1ncNE8A63",
  "key13": "2J1uY32qZgX3ncpbRef8HQkFLzcv8hXgQGhWRqjKqNaojLFTxRcnpEgyU8mDY5t9dN8Dhm7iarpfdjRb2dmhUuf4",
  "key14": "3ZensUehvDmQ36TXaDPPSJYhYaYpcHWF5QMrhZ8p2Kqj1bew4NXcw7uX6WtDmLaqg2NfLkGCADPDHj7RqF87MExB",
  "key15": "RsvNvhQLDjGtG6C1xoVVDZvcNwFQbor3WMjCQ753FNpGNoTWNyahMrBdjdgaGUdjUmaEtvqmr8BWswWqYWdnDcP",
  "key16": "Kx8pdKWUJPoLPcdqH45KAQy13yiinxwgPRhYH3sk8xwHY5Eqhpj3w27YhbDUqNbY1VLmUqD2HJG4eTgK7GmQD9w",
  "key17": "x99Tt3cgVd6hmgu5HtqMkPrdUuF3xdv5NQJPVdgaMw8Sa2aPR98LRDM7VaMhQ8fPgWWHBdrdQKMdKhrgJ5JeF1A",
  "key18": "29F9cBufRryAj8tYtoKU5nbwCmvNs6geTq8yzPtcDtAW2mHrJ6BU11UsXapa312a6QJuTbspWxBinDPZSmTUN9yG",
  "key19": "3SDtqok1Se3ncsyJGP6DyYGcA5UefA3jujLEg8bACDSrbLSZ6zPAA64fwVquso8ssutLZAUMYFjeBsAxhWqv6kCp",
  "key20": "4hRQ154JbKE8PhN1LohXnBdvXeRq1H9pnVTJ7QeSErBMdnERQdYdrDYzKmC7UxxNU71JRHb7eiGvBCvrtb9t7yxe",
  "key21": "5t5Lfk1Dn3uqN38iJ2HmzFj4wKS1vkmd6sBgMXh2PCufWM4HZFmq9jNqRe5ZNdFJDxwFh5FhYhJVPs2brxkCuwa9",
  "key22": "4476yuMSeJSRvsiFthc7iAjDXfEEbacgsw8kJ1rfNfDrtgQe7yi8f94QsWxyzhEomX4UXc1ayxVrVEVdaM7b6tuo",
  "key23": "BhDAaM1NZAdJsatZUGgRZJfuzxcZmbFWpYxHNrE3fGVKCwDkNXkNWptgDaDipHr2q7CnZAGdA7hz3kbXEKWgMbr",
  "key24": "5QFNCBtcK5NNzdwRiZbZ8iLgiSufBAmLHSk42TaEFzzcwAJFisjCFzAeHivcqXafkdYB2ZWMSXoZxXF3zEkTaM66",
  "key25": "3dqEQaYTD5VvN36k6VQugY41E1wTL95ERm7MGDACtS4YyGLd6rAF1npLhpfpmvUJ4QuFovdyB4GRbyZdKU4mS7Zu",
  "key26": "33awbCaSSUTdtfcc6sL9qmGiUiS2DVMed8Mx9WKbqJwyVzqQUtTByUa2Czjw7onzxvNHGGLDjvyH94TYDB3vr1UV",
  "key27": "5gFXBJnHUsd1zHnhL1QX6btCLoiiaFzHvQenngK63BH1Eo4vFZnyqWqZBP4c8RNTqNbNFMrNYu4x8zzAh7YbCkUn",
  "key28": "3TSVzuvnDNNqVRxWBFmWDrwjupASuw7CSM2rBTNT1izKbTiP5qKGfKq6gHK4mBWUHmVNrmicXhjosrsmZqDdWmr3",
  "key29": "5pWr92b5mMSGuzTFhFuzFUyUj9ZcLrsCwPnacjYSxjvmuSuP6z8gMxtZ3nsMsyiNsXPUudEWYsybpjV8Leq7V64c",
  "key30": "3gP5WZZeqB5acVDYeKnRTd13UWcoWSZcibDvY7moWnfwbttGP4kivjFXk12VkYWsqtTmREDsoMwSP2LgyTkzttwU",
  "key31": "2jn5khoknGxawoqY4VGZdQju4XX1bwpweT76HVEsCcmgzxseqvamQwFKNDoAg9WdMzhoWDa9w9GXSyRMuPQjwxBp",
  "key32": "59FYPiiVKC82Pa5M4NxWEnqYokWE7rmX2e7XkBpzpJS5R2UVMkrwU1m19c5D5x9SG8vzA67DDPT2iQmtAdKB1NVM",
  "key33": "LTZdYZDmSQt89UtgdDGd2ZRru1nX35tx6qSWVNJCPeoAdBEcNjEjxxmYGMPNPSfyXPGm21dCSm7oTG8Zya2rBUp",
  "key34": "3mXUcc6uifwe15HyrqpVcANxcc3kVy7aJPSxWMV5pEwvFLpWbKPQqLWEBfoydiCwaPkLJix2oeeQi2aFQJfRYsaD",
  "key35": "2VXtLVgDGtwAkVtAza4ukHkanBnNdSM2KGuRhcyrFSMJshMxoFTr6MZV4j22QV4866vPWcaJN96fa34qBRXSeS2o",
  "key36": "4qDrSz3qKqJm4UCjvYNdRBdU4eRYDGuSFkGpnkt4dFghjgLDkQVQtis1K4Wh3g83G6iBoYgZ2TNws1ograZt8xDD",
  "key37": "5699MFwHwg2Zy2MTzw43NJQM7kFzxvUnQr9MCc4VjfULeYQbv2vX1Vd2n2r479nZLyjpGYU9odqwAPnMCkeHv4Qm",
  "key38": "boMFGC8rRkJ8onvJDH4fHfm2dFUyfqE8ZXi8fAmTFnbjkxajSRB2HriE68k6rtR45ZdzzA6jnCu95qDcPd1xi5x",
  "key39": "3z674st5vMkEvcUkxrhBdef72nio3VQKQpecMPCrczFNECdVP2ajYy8rgG7KTHYvThxqirwFJoT4s3PnuAjHdo4f",
  "key40": "38ajewkiNafsMXyF8jtUGDaKEjUAQohGWBmMrqP2Zdrr1DskDbFJuBxegijJmMHJ1JEBXwgRRsKUHHazEXPigZ4w"
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
