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
    "YocjSocEDT8ui6TBXaRxSxMM54wyGVX742pDM4LPiZdjbzfvi68vwsnrcq5rh4TfQ3UBNeTwZat6ia8CSvUQVoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UPStfocZPjtxvne2fK6FTFYbZy1jKLCLEDiThXCcPSAUAafP4daTFkgDE2bevszsv3fyEGSccB1JEZP2u3oeDFe",
  "key1": "kzL9McYBtz7Cbapjzff2P3MsQ9MMDUwubVvURRxVtJ2xLkistm2KNfpJnt3aqi9b7yksjf6wJL9UsrjCeraypte",
  "key2": "3brAHpCgtV8eGVv8wcEfidYBS3ghSAKXpkHsWcqZYaqxrAcBXjT6KNW1QC3FQGdbTP52o5tqHmTfSzDSzEmqBTEj",
  "key3": "5BLpqevHcErsQs9GoshCTM2LUQBNLvfUHoShY1xbM2AiV3E4JEhDTjX4YzdUr31VLjG9AQo3FDH7i2UjyCDLHYVZ",
  "key4": "5x5k2ac7sQMU7pidMtYmHwTv2T1ukzqcScX2wuhBsmSrpeQmtv5VTy1HiM1xzYSsmGP6wmb4LR7RrdNCaCXWe3q8",
  "key5": "64mRHxWKKJv4cPq1PnHTtQK21Zeyjqbk1iNmuf9keCJXJuVeQUdp2oLERVsXUqCEg52k19gTpSUfkoohEfhpMXNb",
  "key6": "4YN2DWeBJqvTtCiY4LJsX8Uo4g3Nzq9KAHS2Uh8jP4W8GqmqEaJUYut967kyj3Z73Lg4mJiw4XfkUBVqNF8HFqbF",
  "key7": "2CFiStxShdrMCP7ZLDbPhyxyDpucugvBBracL3K8CHgLS3Dzzkvhvbtu2Q1EPduPt3SvT2Yx6xW5geLp3M1YNBPL",
  "key8": "2JA98oEW6tBC4m8K9bnveoAuzBrFGXyjwWQ7GYyN1mwKqfM63mVG4pJ8uBygGgYpRDxLx3zwLrnEgDjfp7gY8tJ4",
  "key9": "3A3MRtjcQypksyQzNZERAHj7BCYfqkJsCfbT4uxWhSWA35ajob8pWz1u3HZbBjcHRJ9U9BZNaq4s1QS2LVAdeMnx",
  "key10": "3vhscTcoCm4q9kYDXoaUsQDrUVEUPRWXG7eUDXWf2iL34a74sJYiJ7v7Yh3Gxk9nSzfBJncuwzzNLHusBrMxdQxJ",
  "key11": "2AX3bX1W5enR4hzw3eWEGwd9b7j28UqC9jo8DUTJYkDnr8yGsXn1MdDTLPiMkNpVrvkQ7B1PdWP55vHtKBUCSEFv",
  "key12": "46S1S3DpPeFQKGHjvQUJex89d67BVNAnRBt5kLMY2nerP81jebJSvAuSQQwiMMMDpevQ52b7ewAPtfALgYK581gb",
  "key13": "G59wzKAhHDfXhQ24K8P8fxTYdvaxeDamX4Nu1QGXbbE9DEv1pbdpXDGp6jpqPAnobNfUVdXGLrPWS2VYFTH4cnp",
  "key14": "4wggrMMDaQBW3a1x1bwyXVa2XrnVoHgNTKdDUeQaK1ptGZ2xH4DiGKkbubQwdaTufLp2k8Ve6VnXuGmTS28zccRD",
  "key15": "iPQJaNDYKueVRV2zVXnUsP7rgpXdBcR5Fqhi1SiTEKpnG6oSNk3Jnm5W4e3r6Ucqc6Hiu1SmatctGYETvNUgfao",
  "key16": "ty33BFgrDQ4XxgeBf2yAaM9LW4ggNE9xJk7CsC1HLYY8ZCHEgehJMaLpVzYKpQWfHCQPj8Z1CuSegZ4mjMpYorW",
  "key17": "wbEwgj31ibBx4yh8TQBij5Eb2m6NrEfw3riXwatKCPh3sJL7PyqCiibhqKwZAq3BTHMoeC51nWteE4KxSo8Y67o",
  "key18": "26CqVK7PkewutJa8sTkw3YnPVTMpcZK2tyFQicCKFLBiNZfSwr7X9VG9qcsYp9KhMFWXfReRvR9fUjWPAgtBbGa3",
  "key19": "4ZRUzZpj1JhzkBp824XK4z8cd71W7xwVWG36h32V13SyZ9Ey57FiK8MRP1eyK5JDTF8UYMgwYVZUeJsPtyrzAQAg",
  "key20": "2MusrZNdA22or2NqjvY881S1cXfMV2Sx4QavpucmZ5oRCBYy9h2AtuRBt6UcruiYJyrESRhz8CgxtprKqQn2XfkQ",
  "key21": "3XXBuqxXejZwyn2BkV6BUY2dggCD5SF9v78fBCncamKBj8VWSWsawjEbbGoa4qaF85joW2ez3BM5mZzuKCT2RAgd",
  "key22": "23BAGJQj6rJz75MSJk5UMo4z8VfGYgFyeS1T4CUaLtDjf11rxrDNJb8nna42nuXZ1FQcF34m6XccQrydAZsNHsQP",
  "key23": "4j3H7qdb2iWyKi39XfveC5a5nMTk7jnv9doiG5g57hfaou9YgAkr3ZRrcZpmUMui3A2wyZKjCw9Q9XLqEcB24qZ7",
  "key24": "625MM2ZxaXw15TRmGSrkd4FbY1QaNr4u2Bmsti1HYX9pPQcKcNaerzBtsyDYtdZKs3QpLNsYVdiBUHgrQHXtuRLd",
  "key25": "4urYdyMev3rPVFwfKUhGVtPncog85voNZT4qQzbCHSBDz64P5wSXVUb7fThMACm5usLqFiyKEKUkbGQqdAigVVCs",
  "key26": "ZEGqhztLJfe8iecC7Wj6npWxYpZWPsx6V7BXFycyFyvWa5TAv7eBEBrs9XimkBJjc2BF3bxjwNY5138pZsuToGS",
  "key27": "vuHqK2NWHo2yGHgu3Yi1sfMdpBKxs7Bp92H5bQwVaPVfHphqWEERUkGVfwatP3nxPbx93Mh3YKw7Wk7ZFyn7hK5",
  "key28": "5SiqbkFYcktwCBkfAz3Tr5ziytP1zFpLNDhkFZHbq5WfWpw16Z6x1i9r4FrFi9e2u96GEiPhxSSp3usEYBKX6f3Z",
  "key29": "wb5TpVFfy1rnGD1RUbLNVQaWX9GMvU1BF3eruPriR2VrEhAqv7xeVuS9ftP79j2sq9G1Ct1D9vkTs4zRgY7Kpmq",
  "key30": "26fnPSwqkghBQHwEPSFc2sbHsvCEeLDcy8BUJTzN9mm4Qcar9z6CzcqzswT4GYwsNxgUk6PjcKwYSdi8N4FAax1f",
  "key31": "2zzEp3kJcpA9VqxVENTWp5pCdBa2DhdBEXqP683X9zajyAbQbKs61QwJfJ6XKoTFwLE5bG49Qfu4zbgk8LJTkH21",
  "key32": "4RFC462VTuLuffLQEwTYGp7Q1iXAmCKjG8uigN9Cz1b3QuqweFfZDo7zptUak5Sgn36AJh54Y6mQnrF3hH6Scvn2",
  "key33": "qFRnZ5oqimujgkxb1cpSKEyNz5RcRDQfCZQFfnMd4of2bfK5Gco4RejJMoiAB1Qgt7c7fALVCjcM3nZ5jK9Yhc8",
  "key34": "mgxjpt5qydeDKtfn4SqZNktPyLhCkb3Di62wHmxeg2QVq2JLaiX5dE5e8NMdSFoEHKjGLY4uQA872nNLhV6yYuS"
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
