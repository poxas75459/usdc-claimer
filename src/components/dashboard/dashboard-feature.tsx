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
    "3LV316R3Uj2WngoevpG7Jy9hGhxjjj4MyY5eVXMsKtv3HDxNSQDAtfJZv7JvzkNHJc8H5rsboHoykzn7kmeMNuRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pWRE67TiDpbCYhgTEDKxkHsb8geHzGf9mj9oXskCDSKpymxAUijgGnH4oei9tgpgV63NmBsaPecp7BFMDxzuNJe",
  "key1": "4KgMk3AhMZMup9VFb3puBJzA4TRXy4ZMYQJWakPXPL7mjkCrcYDFLyPpcpiFXQEiBw1JiXtiPMEtSXLEQuZuJ53A",
  "key2": "bHEDQfdeEvydkD83AurL5GNGjShxuZr7ARCjbuCri4y2iBCjJC1gCMK8iv4LZdsjASLV8HdSGstV5Fudmwit4Gp",
  "key3": "x7mEvqPckFk7QndM8tEo3YtuQgfGf6MaeX2UitfAkHwD4tqW7TGp4rq6z8F7pL9W5wS7o1pWEe54hxHWgq58RVw",
  "key4": "4dG4kRxT9EFJfDHbRGGYSMwCVJTutcoiWusUx116mrKkGFKaP14Q7XA9m5vKYP9dzuBion1Gp5eWcd5kYSWkiBhE",
  "key5": "4VAdX78poSvNBUdbCdiFvFj62bfeARzsUzwRuw1AKgNDCC7SUKsqNDzhS3AdMZgrpA6JzPob4T1pU2eZWjzQLK73",
  "key6": "5dfKWaQpLDLdufCUKa99EPK4wWsxHtTo6h4NMZYiAsVebhHqcApq4cBgewmTKBxCY5JMVPJgQtFSmBuxvjdb9BGj",
  "key7": "5uTe6xg5kPw5ZVr5GrjUtahEn8SKtfEVxTX9fgVh9GQPduppXJmDkLn2ts7sgZbZx5BUQn3L7njbSrXaFE7xgzqL",
  "key8": "FQuS9gkriwyQRgQwtTUK2iGmezAxMrscKpRrM32LfgxXMkhzKq3YBN4qW8A3REU5AcGZrDvNmPfdqESV4XifoVa",
  "key9": "2ffv9eFSu9YpvFmMk66crtkxo7zCKo78mY23MxPPqUBFkwitdd4cCfu9vxTGviVyEjD1uposZoeEYTLvsPCsA7we",
  "key10": "4zxfizJZHWNYSA1cyyzUeB8vMJgwEYUYNVvWBiSHYdoS1CqdSbGY5xchLEuKyXagJBQ3r4brGUc3JS72xKxmCzH4",
  "key11": "3o2dbeC6ty2bhvbqr71Uc8uN72WvNauhgMqp1wZk6kEdVtAWLBDtyg41aT746dSX5aNR3kK9wDcLEJKpqAdXhu9N",
  "key12": "3H9jJrps8FCUScZLP9LWHGqCvHixJr2Ded4xDu2PYywXPto5HEMmuyEHDnf3A2whvEC4ZTAuS5yq7m99KeZLbRYw",
  "key13": "5EznTZu8fZDSxwamd98UH88oksitf8o5tDkM3fGL8FdHCZUHRb8BwMa1DMe39VMaCZu1VwcoZXsKN29SFV3YN8BA",
  "key14": "5tXqQtbu5FBTiw5wxmbPVZwdk3BBws9Lboy3FzbnSSmSWrEB3npA895cRiiJyShf1dTYEAmg9mHD9YaCv8fComky",
  "key15": "23mULbHtHtzpcw6QXVdqqJqqmvWMHUHu2b4B6s5UCUjLQeZynFcFofFGFtu1ciVU2yPgSzX491GTDeXbw524ziCL",
  "key16": "3WtdPNhavnWiRG9XKG8kQbzBnMosx6zWtEZzkJ43roDGkCNXvdwxgGbLCPoJv128RU1hvPpA364jVPkntXfG3hF8",
  "key17": "2GbDBzNBAbi3WmgVEibFnMfBDpr1H7CCuuxfogAZYuVsj8mpj3VfvG6nxPqsUKXCoRff5fFuqEhdr2USG8cupEsu",
  "key18": "2decQFnGsNW2UWCG5edvqpdXKZ1VqYrWWJSESgbruH4cKpaMh6EMQYv7LLPcCY4faBari1R9q6doY5q5qrUjPJiC",
  "key19": "57F1V9nMftFLxaj8KprXhT4cXaJJkawZjnTR2J1ycimNW23371mpKprzQF9exB8vGGbetdnVF2fQVU78L5CecvkE",
  "key20": "2uFhhBBfbV8deeUAVzD4eZKZE9WgkFVrXNQhEqjSYmzwYfmzgUbSGyBtyCVkivJkeb2ioYT86Emq5Nb43czTZQtZ",
  "key21": "592PzYNZH8sVUSAJWrSrybACPhMq6j1F8uHnqbE5w6ia3m6VzGZbBnn9pdfVpEspM7zhTQEbEohRTNxdvSQXnRLY",
  "key22": "3Q6HNEYiJjq96mmwARRXkUTJPmjM3skgzALpF94UxpJUzdFLH4WUczsPt8vLyZk6jdJxNaXnLCQPb5X9ZxoBMuTT",
  "key23": "Sqgqu8ma5XWDaQxJdTTS8oaK5GzH4Wv8a5EZ5PNNxYiZuKVSpvMMR641hSXFUVMfoisWZgESigXtLt1x9end8EV",
  "key24": "5b8mzXBi161JPmZMwRmPwTc1MxKtgR4rG6LbKPuooM1CbbsSGgSn9x7VrguyGSEc3c4B5w5FAYLkbKNF55uLaKJG",
  "key25": "2fzV1FHcWyBezet4vB9oq4TjmmHLZ4hewc4MH23DtKqCb5zP8i7Yx1y1Y3Ejm4JiKYipkaB5woqmd13Guah9kQWz",
  "key26": "3NnXT23g5GQRXYzmPz9U9k63EMSTJDyy9DXE7iN8NWQP7mq8r29XdTziGwEVM8kwxo2heWYPcoxXuXdDM65Y7VUq"
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
