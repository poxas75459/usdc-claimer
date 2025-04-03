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
    "3tE9u7zmEfeQKC88kewfF7Nr3gC1gQN8KoWKizWWTsRe938w9M1o5NrbMHcvVvK4tM5qy3TqLsPvkr3AM6ecapz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tT9fBABpHY6TYcLLXQ9QWko6bBkAA2PYssa6qoiw6qUkWxThLbfshWmqDqbuRr7SFww333J7AyDSLH5jq4kwLW9",
  "key1": "fEKTL6vEoh9WtuhaNcDCzo9JyBFNW5ZHZKgwqnZBhEvRKwNTeZKE7AjQaPpXkGb1ejErFnZbtKSbtGqfVscPtzr",
  "key2": "736u2NvejNp3WtFV92zySuELkbc4CjDbdsViDvJ1DGRertESuyo3Y4JsYL21f9eafjDJUWByhrRYW5F2PcUXRWb",
  "key3": "3rQwoYcnRrFTmmoXVyHWCNRacFqnG18bLAv4ia8d74ero2DnoPsQrGSTqtUPc69j4WVtsbVDBbMaq8Y8yW8XqTkp",
  "key4": "3tcm4jM2nY385ZC9Rbi3fWJ96U9ffGPq1bydELUQLrpcUQ8Pir46rRWA62X6uoCGt4wYPbpTAeDKgJdqTRtTqU4C",
  "key5": "UNWriR6CtsgJbiqzcdpqbhYE3xoH1KXCmm5kwypwYNSLxpjzjdx5h6b1Tr4i2CxoDpLMg4xBorp1iivxevX9gs7",
  "key6": "5aH9za9FFb8UEDmBGKcQqAQR57v7HYWbPJwckSmjdRQE4pSMpiUV1aMm2b4pQ7b1cbvA4otCqYa7vvSh9pa9V1r1",
  "key7": "3hwgDRjQsdef4jmQddhN2DBGw1o7p6dzGc8wA2DRaDKVdE7rz5JF9vydjrTLNXprPHdR2GwjqLpyH1V94hVWmFnX",
  "key8": "3auENqTX776ggjMZcK5x9DTGsvUeE1zZk3nHoRbGSGzyzDupygVgLZ2KLFaBLdY3GhX1AW9UBNiVHvcARGcctXoK",
  "key9": "PEAGTGirE2ywJtfkndpvWCw195nuRtyuGNVa21cGNxTpCqgD1HKo9QyGmETKyD65w7zrw2jD8B3nr4kTJi69Bdz",
  "key10": "5BjGx9QWK36gNjwUqNqnVh6bHwyE8WncykRssWKvhTraQH7KKJPkKpNoxEkw6dhqcBqHHhPtidTfPci2Tzqjptda",
  "key11": "5KkJSuSYWSknGnpZVgbJa43KanmKwgEfTbmQUuWmtThFHYzmtfXM49jVdA3hLot6cQZ3rdj1KpsJ97QxKt4oqEWy",
  "key12": "5yXGC6mSJ91Xzec3qj6yK3dg33GZM64c6StSXuooyj2M4acm5srKBkktnd961n3vyovKVmg2eBJjaj5LFBDJK5Nx",
  "key13": "36kzuv71Q4e7JsTLxNGNFdagGHxyb5Jdhey8YAkvoS2Q9R5AN13HdKrQqGEkZEBNEKo39ZryQnXpJtDrtC5mebLF",
  "key14": "5PPD9GCXR3UxdJhbCv3XTmuRG9auVij8Bvkxef7gZ5z3SWb9xCzUok7AMLJGVCuB2fVEBaekHGfWRtnxj93yAAGg",
  "key15": "3NuNtvSpBeFviL98zJ5nKrsTm7FzmoZo6wfZehP9qbyZfvYd8E5T1deXswK864LN8LTuGLymFX4MC2qwf4jnsZhk",
  "key16": "4Nttb5TH2qRhypWM6qg7ALf4mmZvwviCYBEQxWArP6y9RVDj5RD9W1M29ZjZW9V9nhEaU4gg9bFtheKCw95Yh5ud",
  "key17": "2ffsEX8DZ1QCUurk4321vrDddV1b5Cx3jQEsYyryVMP5sVHdxMwEaWnzpQrdabsxanbqvq4dvDsZuk7WyVka7jZU",
  "key18": "2TDugMD8fdBD4CYBLtAeG17RokfkB44MaXhityjtDXGvYVEYE91q3w7jnAr47viq8jAr4CdQYUyJZVvD649i5ykC",
  "key19": "4ERTD2ikXAgCrbbJk5mhB7A28cktRPiMuZC6Mif2uzT9JE4R56yaFVcXQQse2M2XEqBQ5Y7ub3L2KfEwsVZwe742",
  "key20": "2hmiWiy6ZCVfyTetwa8rVbsWn8Zu2LUX3bdjqE2C2bUHL7PBM25P9j9iZL6xaHLi1g5nHkNC1U444NfN3UJLfwxG",
  "key21": "MKEWkrq199J9FpaipBJrdf5eegJHi5ANJStuoBdaL1HKAy51TytzbGBBhZUjbKpEy8VL5ioBMPASiBVcuNg9uya",
  "key22": "vppFKfSM6p5HwEpJ1kGrurDnuqrs3e7zk9rKWTBMYuXPEFf1YQNjNQXYQ5JXWPCViQauPzRee9rPBd9oDf3vvrW",
  "key23": "5byFnqo9VZCCG4wwwmzNg5koek4ufZV8fdBxHHZRBe59bUcrHsXDuW1G1rKvF36DoKzsxM7ZHzKswTxJSTCgXZWu",
  "key24": "2iCyaGznwAUjHzKiC5Wp4CsftfpvwgjFGKKP6bhycor1NPaUVxRDVobtDGjW6mZ7AkdZaKinNAzhNQkGNXxnSCxi",
  "key25": "5rdoDqqV9UsCnxRireKebVcy4NVHujVq7EM9SZFMJ7r8F7vMyTDSQQP463BjZym8bjGi29QTN8zfWiTsGZ5v3nqT"
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
