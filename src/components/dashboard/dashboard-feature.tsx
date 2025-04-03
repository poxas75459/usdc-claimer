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
    "2zWbY7pHMjFxYviKRhvYoVtUBJ8jNF5WshRRXEPhKrfKMzhfxdD8xVLmTLuHUvCf5bYwSZLSroM34UqbRTAtzMeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CpY8NKDHtrSGkpAkPnfijQU9xLvgw1DV85cbXGU9fcZFSkAHQKjXNhNvoK9ridgJCXBhE1H7a4DZURJc7kD1udi",
  "key1": "2sjWqNsC1KaSpjguAupyJiuCydce7NnrPRaCdvLnBCmdy3yH9sC6mMwXGdwyWJkowVvrFC2iFwgGhVEGXknNZrvS",
  "key2": "2jqedgzDPsgGzkEvkh3ANoBr3Azp1PHAEJsk6mV39LJfyn7nAieBJkknNCmQV7sdcPqBXRiEsgtzSLuy2VfSLmiB",
  "key3": "5F9FB5wnE12fhQTyKhptH9zAMMbAb9SprYQGFhhsEgNLo7rCg78SaAP17FzQJvwXUvqjNKtH9453825WAd8EaPDd",
  "key4": "2NYK8hs44MwNp2rsPMGiMxqsbQ8BDxR8vEe3t3xGiQFHtFu4hHz1r5xBXJDEJx3WUVmixjoXgVEFyyFfcPm9nxkN",
  "key5": "2eQSjr2RwgyhAbehvcgb6DLRKVRLRV7UG8ssgYKxXwwKrPr4jbUkMYDG6NKbkSQaGEd2Yw9jmhci75H4ZLqgURQ1",
  "key6": "TgN8Fkg4PN27nqeS3oXhUCpW69chhxhZAq7MjcweDW3x78YvEd9nFx9cSyG4B7Eumu8N4iY9EBSMwJQQgi2iRHD",
  "key7": "5nwksfXyUK8dCk4xsCqaJ1n7g6EvD8JSQUPyZKfg5h2NawtKbyTDouegsnApHLPZf6SLasfoDdixh3CvvMu8g5UA",
  "key8": "5gE5zgdZkDAmBPKtYDfWVYKzqjxS81kGkqjCTi36ir8n1YtHixZFetkVDxCyuPpMu8696eYJKMs1FbUAwu78PBxB",
  "key9": "4aZ7qmPMLmRkvYfEN1xM19K6Jr62YonhQLmUzt992VgAoozeJjjSwgBUZWKexFyAuvUK4edc4TgMvEyRddTtAb9E",
  "key10": "T5JrntWS8VXXrHDLKmu5EdsSLATWG57J2S3SPUDVXYk8zuWwucgf5QiThTBU94VNpP5WkN8sfYMBdPh8TmPkXAL",
  "key11": "4nz5TE1GCHAsif6XzTgq759ZwYJgrVNHKFT7Be4Z3RXmeGauEJqqJosryCpsYAbE2wTbcTLLp2eM6o7Qu6SrfqBB",
  "key12": "fWRGbuBTzVkJvnscgexW79bKntETCXWXJTfyanEBdJBhG5oRvvjBPbDd52Y2mHkTDB4zd6aFiitZUNcXZFNSxuL",
  "key13": "2egtPBtYWLEU7j438qb7cVmYLrn6v872BeeHNoYWWKG5Ai6PuTDxnzjTAZnSmoi1ZcqzbTDd8dT4Vs7MbZR8g5jx",
  "key14": "UJ2jrEHkyduxCACK9qypT8Xi2sB8yvzUWETFgWAkLe9nSy1gymr3wrBe8c8XhVYAoLrb1XB3mLo3iJXfx7zX1sM",
  "key15": "3FqQew2szLAv65tpr61LrxXE549riHBQPqVBX62BJUSPMzsPKGuGKpVmYWDb7y6dSSjLBrUvUauxZzPPXhcdfZP1",
  "key16": "41fbyXVQCCdisChpite5nrXtWpYifsThagmLpY1jP6yYgmvGnNao58nAqD6wftVg6R3k4zDUTWydfroaUV7LYKA4",
  "key17": "5E9x7Cbsqy6EWiVAasThQQSZN5kDBEvgCoKe4bypf482wWcVbJMPy4cRf2axtELN9icqC5NBdQcUaidQobt8bPdw",
  "key18": "2e6zjip68QhcTijUAQG4u5QEsZHYFv5nPPDy2ueby5J73kBLkLkSfMSQdUrZXZq4YhiNzsLe6e6j2DDVfS2EfGmF",
  "key19": "4zuJBcxUnTzbjG48sD3igdnZo9EvR3AYcU1YUxoQtEztjqnEZNK1vwEgNykM6dszV2rzMj1zV5A8xec1hfF1itCy",
  "key20": "2iTYTMvbNfoB2tQjB34DHDzmWMWRQ8ekLXTNW85vfhreqQKsKrPrTyfR9LvRLxhVa2Rd3EVt3Nf24PrsDUYqYfQq",
  "key21": "27hjkeNAQmqpCGHHVKTouKTwjBL7BY7Et3apENUK7pw5mH9pKqufdPJWPUz9CHRegGUgPaZVXW2s1d8vMs3HHFcd",
  "key22": "4B9zVkheJaZcQzf5PEjVKmYcxgAz9NJRg8RxNKjiPkMiyUDChkqFJHCAAgvwgS5e9J4pK5kziYUCAGw3gvDBABzw",
  "key23": "3A2PHneD39NEHNtNwKPDaiNv9Y8PNy1R45T6ZVQYZkmiVCJBhmUGuQrVJJQzB3j8wmaBDf9UmGTcP3AmwWDC2pxJ",
  "key24": "42STLRpAJBQ8EtX2xBvV4JsLoBCxQzsiwLm6oiTH3vLu6ktqEh1oUE54TedSuENhfJ4Eet7BLEunNUQbbC3RcScQ",
  "key25": "4ffmRoj5osSHqqwmufL8f1TGLfEp6pDvwewcWDXLStqiaAcgiZgZbViffc31ameAcGHNLsqx8RppwuwEhVjSjsfE",
  "key26": "KkYiPAcraZbq1BDF4dHUpXHnxenGAqe4n7hoZKrKzKqmfF6j6ENhyEfwDCZQDfZRfzMomLRvmdD7PxWh8GQzLvE",
  "key27": "49SQrRqBNmtuvyQsCK5nfSn3WxLHRbGEvhgnsvnGxnt2n8ropB2aocTb6KQzr7G1ZE1NRikoqJ7hiSFqRphCgXqM",
  "key28": "3cQdkBameNHdHSNAjGtMaeJwT8hAbAp27qydxSLmdybQbax3eo15CjXXTNfRhyQHofQF5Aiz4xi9YqWTcEJoS5t5",
  "key29": "36aF2v3kgsg6xe7aced1qrFa4MJ1VtKaffwjV8UuM6ZMTnmMtmMtqFLhLCyx7qLafHQbPNn4Pn6g4FxY5sd2g6aS",
  "key30": "5X3ErBa3FTqyGrqZQmezJNaAyecpqgDzmSXeftm4QLoJnCUtebNextZ6i6inDSHJDqVLkqzqeVAeYXZ3MKRTAUCz",
  "key31": "5WimJHdD19v1FqDmc5R2fjf5F3VdVxygtzwK1rtMPDqxC7YUjnDYgB8gsF6rPj97to9YNGnVcB3HNEsDNAcnY9M3",
  "key32": "HepNbgtpSXRoHhHmhgc2fd4QAifWpwLzuqYuYRWXs2P16RyxrboDqH3aKGviCaKtAsvcTGn3DL9BbvNgPApMZDY",
  "key33": "2rXLnx1QpAuCKt4siAVsA2DxBLmExiZm7vUFegxFd8yFLDB1EK6vmkbw1uFXzK3EnBDSbmASJMd6Ytcd6CR9WZ7x",
  "key34": "2MiJoUCbTTe3tT2tRx9bQG8BNRr5NXDYXFN17CkTvayuS3d58GpXjmZgXcyVUTPPDsx9UzExWuZF6skd8sPbsJdB",
  "key35": "4TxEadVogmLSQHYVmzwuWYEfhdBnjY1cwUcWghggH9vNxgs7rBpCnVYvrbU9n7c2ABysqUV3YoqTVs87S5VdMqb8"
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
