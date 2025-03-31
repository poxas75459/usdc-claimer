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
    "5q3naroCNPSinuVdvrDG9vQGFGMqPSoMBHLYLQ1XY3Le1rswc9XqBGoqHMZKh7Wdoktfo3v5Rxupcsa8tN5J1xwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XWtWnk5YZumc5tDxqxGXdYh1i9H5GUog7BhNGgCxwS2UqkKXWHySUyEP2zVjhSiPaq6ex7KtXvffnscjgATTRtD",
  "key1": "59Yj6j7G7xaQeabLVy6ahEm8Xz47tvpfSsygUX66TxSEeGrDFpfBKxbF87SygBxsxn3s4uxZ7ahBx88SRUS59dgq",
  "key2": "Ar5fKMkPHX37KekmhejFhJe9TGm5ZBJ9EZdiAEi9cyfxdJyV2NZuKSAMymvtQiLUrsMCALKy7bPFJ94pCcCXWi7",
  "key3": "5F4P4mfXzrB67qf13qXfH4arpJEEpYFmBYZQJy2APTAASNNZTt1jsX61ShoTLji6kQC57QttkwSrqLLvw6FCCpQs",
  "key4": "2q3WdLVoQUYyDfPvZRXuV3nnpqsZbm2QiBQcrQkKJCW7yVp4FtrzfmvvJeCbsS1qzVxxZMG71xa2rypBA7C83xH4",
  "key5": "63QHjhCS1YR7FEhEmb3qMU5uBBXEoWn43sCeaGEEtb3ZJxjByZ7y6rUpDCGXpv35nmR6seSC7AH3qR3dZcq3YDrA",
  "key6": "A9aaLJmbLb2Yf2FkGT52kZDhaQY4T91yiUg14UzFVRSUjhgShLeqo66ibLjzssk3VCEqZgPWGzSMrwm1o6TjM57",
  "key7": "2kENFffxjJAG1Eo9rmSmLXcHhxpfoyAgL8d2oxttzqrcoLGSxTPp2ffQcZkredgicBkFXdAJRvS4X3g2j9oqSLm3",
  "key8": "5XErUrBxGeF8hSsd51AwKAecRU5TcNjWwJPBHmjvJUh1RqKTixZVrTuQwYju8UsqwERkKXvJKALct2aiKduMrh2v",
  "key9": "5SukMPckDdkaZr2YqTLM5bTcSSyBPfe1xQUepDQ4eE6DhVC2iVFJSHqDeNkbXKqpcQ9M1RVQ7vbbZjxjUhrdcLa7",
  "key10": "4r3WJLcr4kJd1gpx3pA5hhZmiSEjypMYWRWtfkbB1TuBvNX48cGDKhgHhM9rF4k6n7YDiCPi5QvPzyY2CemRWgHF",
  "key11": "44qfUmb6zUd2ZJucxPK6LxJivdT9eTx2v6YnqvFJnr7F6EWKjavPh3UFumrV2sigtGEwNYXUtJkb8daRb88SormM",
  "key12": "4TqKNKw5CZaBFAErr4wZWakpzA3ESH2wKcD3WYH9euvxzK8pRpZKTNwGneczsqKx8zUDJLKUEFBrQpfUhPmt4UzS",
  "key13": "5r9ySWHfGxcD3vkTuNN9ubja1dQNBfTPJyWuS3kSND9Lhu3CAuVMjUy4dmgaTVkk2bZ33iKmBdRsSkmQBr43ch8p",
  "key14": "4PgVB8eB6eFVf9VdiV1mMW4Gkc3RUdWEFYKP7kaHE97DLJLwDZWS8fNzEF1sVVWVxhtPSAfkn2hS5wNP2B9xXnYE",
  "key15": "2Bkn2DNMKipw8cpCACdYdkTvrh2GFC1kyq1mYikX2RBCvkzSzpyx5RcFWNV4wje7Jrxy2wzNcfD6T2P6mmbaHvGT",
  "key16": "2TVtrosHFYJR9G4UuZ8RchcY5B6Jr9fVMhic4urrjYWKNvdL9vg1FehiWbMhMvfLRX56moGTxueyGf567dZULHf9",
  "key17": "2AAE9YytAXfHxXquUy5f23tywXPxPEL5p1CVDSuuwwpwD5aVNHsuZcDp6Mc8QGksvTNqAjEBWRhuE1BVKYd3snmH",
  "key18": "6BB1D3s4AXvN8x3e1uK1uAH93Wmt9QcN91Tq26UHnJJ37Pe84DNeyZnhDwearNAJHMsazFajo8C7Qp4F67iAgBm",
  "key19": "2W9T6D3DtbZspWcVzio5U5CQVCXVHMRPi8c7na1nqWJApJAzGMNjDvr3qq6pX9vPJcEreY3NABTp6Mg1NUqybhgF",
  "key20": "2a71zc3TdZrmiLy35ocGuYc96t4SHm8g1fHbBZqxy9rbg9VRvgGrxXLyvEtVEiTKLp18LxxHdvYPmkaFp89VgSe4",
  "key21": "2SZgtVVorsvf6B85QN6YaHXe5F5kmF1ggB28JaU5NBbjrsZwqvsMU9GM3tskzLoZuS38r9ZP3m1N7atxKKaV8oaM",
  "key22": "ik9LAXPQVmq7awVTYqkfvdjn6VWBNTNA1B22FBhGkjhwS7tVwpVvUodFaUTFdZ7tjD5qZrriJV83srsiBTPtA7P",
  "key23": "4qXdVzgtSew2okfbgLzax2RARTiBKmzGaGZZABfcFqyv645r3znuTGZnxKX5CZGsbeKZZqX2tjexP3gZhEpoRHLB",
  "key24": "2MAry4RN5QoRXM2VeX4FxpfgKVt1dWF9XB8Srrtgvvtz9YMqQs53WZ6oJ7gQW7Uw9GcnN83WtaJQAkFGLDR1aUWR",
  "key25": "4h8Jkuoj8HGCsMcyoedn2Vo2f929zyLj1Jc1HX352mVzEJMByZ8KgAvp11E79M9DbWVY2qkVBckXzvxmBPjX1kVa",
  "key26": "d4GcfUq2A9miHvD1nXeniYUZp8WQgWXV1b37X1UiuE3gxzF56J9p9FUPpY3JSsdGBG9bkULp95NrZAMfrRqCAE1",
  "key27": "5AbaXRosssR2yQ3VJUbHVqpksxgUYbTRUNa9tmzzY8iLn4MxVxdsuKgQb6fLRCfLP7osFsNhSeZshUinjsxuzaK5"
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
