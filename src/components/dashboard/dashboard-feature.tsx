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
    "3o7irfw58E8KxkfVbEwjbA6tWDji3wJTg1AS8hoJGxjiHrqaATPRRmfZB3Rtv7gJmjTXaN4UrH4gs33LD1XfN6zt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t3QXFCboQquZRT2wTYCxKJ3iJNNvH4Fgm7LwdNwmwoNXt3kTUnyLqa7sU4xCtCWpM29wFNXvyAifSPjG42sNhkZ",
  "key1": "2ynjwi4eRngSYkWXLdNASLxs6JNgJrP3jGeGos7JsBB2vg69xRYVCCSYmAqX3iC2RxR1HNAqXV7S5Z6QAjRdXBNu",
  "key2": "dtUAPR4cNTBs7ucRVdizmrc2HjMG132WiW2EPtwPANav1rPLbpZ3CzVuURJkYkkivvdhs9WTqwSW1aCjx3LeViL",
  "key3": "2R5NkFtmkREvLrdXP4LunK9z3uKHDcGL1xuU3cwtzPR4CP2KAYA9caxbfDyW7dD9WwEhmTi1cXWaBYRuLs4zLrFo",
  "key4": "2ZrH94QMjYcxXTy4Pm6ytUkwBnJ5MEpbA1bCjzTmxhe59U4crnuSJ1ozMUHRqYJgMpkg6JcWx1ApiVCkm6RgWBW8",
  "key5": "Yz1Xr8nKtUCWT4D4vBNJ89K3ZWuNjVeoiqW4EC11hoHoYJjo5uBpL5tJfzbTFbpKdYEXkPzPScCdqH7Gm3avshB",
  "key6": "xYyMvZn1Y5CzTnXn4M7ZFMnLzeQ541QptNqS1z4Fn1ujUsvGBpMJ6MFHVHGxg1TBnPncHFWzXHRfZ18P71oTwwX",
  "key7": "2U8owj49z459YGkvN5aoHXmA9qPDwgJqPTbedvwMeEBCMURpmDZdtpfU1vM1TAMQ1ZL9s1tWL1zAm29v5yaWDTpT",
  "key8": "2VQchnowFjUNJJTGSP32dGkb6z5soDFgaL2R8FKqe6C6zqMVS97hndeu266itAkfRHgZSSinDiZTYGFSxYQf4FiX",
  "key9": "2D1wBfLUhvggjssj9gLgUEDLZX7BPeHb3vhgMfh7CwrejZtLp1msURmkB6BA2qsNzz2Q13dcFRaPbPPw5U2uLvHw",
  "key10": "5PHSjDtC2tQTNTWdp2sXcPU7Bz62eg8qXhnePAGWfr26sFQZR7Q8s93bsYSP59jJtbLCqfL5iHDsuFhCcacfCLif",
  "key11": "4ZTg21GBqpZPzbY7ZbruP2QtXR2JVq9VrXXk1Z32WNGkSXBy5dcy2tWgRmDfPrLxGrvNUJkaeh8cF5fD3o9bSDXF",
  "key12": "2iCpi4sCgQvtVxrHgvPRu1Rb7MVdJLXMzuLAgDMzjmLJEGM7K25LBHX5pGTvPzEFhZk75NkHxoJahzioV1pUvGxD",
  "key13": "6c7YxgL7TrmDzMBtYqTM8aqsDzeXYW4QtQL42Q5oyKKgaHHFvEBT5JTtmw8A8WHjrSYMSEqgQHmdW6hrLbAihqu",
  "key14": "53gXnVngxLhkPNPLLCNTuTQJQrJf7PTjpk4DftCnLikUDxeTTUSKz1EKvDVHwR7uRzgfnbWBtsS8SjzjpQbDe4vb",
  "key15": "3dkyo9FRAcMiSuw6fekvTiEzsWwWX6Tm6LUURdfXUc2QekB6dFRVTZBJRa15FijLxVt1iEV13Bk2S1xCgXSCkqJt",
  "key16": "vKHve5WvUAQ1vhxErnVjsa7dVZznpQwfc28KXS2CCmUcdSQiVrUci2bEyLMz9T8BkNDJXdRfU2vE89xycf9CRgz",
  "key17": "2E13ooUJXDq4itiABioz3hGhRSnguWUZ6PKivUzZ5ULmS2gZNMxC8QicC3NZfysorvZUrhoYPURwWCWi52CprpK3",
  "key18": "4v4EDvsF3hA4R8inhM9LRkA9bwph545iQ3QDsNUKh56rSQWCryGSBcPZjY1LmY5c3Hc8qU32nM9tzqXvxjuLCqAR",
  "key19": "2GrKTRxB2tKQNpGuuJGEqGCcw7QTxW2JV2wgqvfrMHwxneGUBYUt7f68S4seJfktH4umvJpM1ZDXSUx4UEG8MxGp",
  "key20": "2f9TdrCg8JBSnJmwokd9Pyx4vWNap8HFmWQLW2UxYKJshja5jpbVoPGQEsiiAmaMifHJBEjt4ipWxXt9HRhmZAYK",
  "key21": "5Uf8CnJs4YDo78rQeaTorKmugVDg2ztvMKsTuVK9a9JY4gGHAnH7JvGefyjuC3Rn1Yohj1mCQRHFrQCZmaHM9frK",
  "key22": "5JEphtYwQXwZ6Y4eHs3J3iabjV6hmZfsheExae9gy6Nw1GbNCB7bZahp7Nxhoe9uUeWgSkY8x5JufukWVtFotA65",
  "key23": "3k6TMPV9ZuijuWZ7aF6CqZdfP9yrxHW6Jaz1YugxaPmEF4ZfLX4b22sqqBd6yRvjfn46mXWthfu3diD6qBkecqaF",
  "key24": "hVz2kMZhQNaQ4GJ6LqKFS3nfmSBLcrVUo1Q1kFpXvhAyNEJgLCbUBGM4AwRPpZPQQNyyYrYeJYaSXst9s2gwtwB",
  "key25": "UchBxiYYSPiJqGhQ63TDVQy3MK7J2m4yYNCVLV7CY2FdVqp4iMx7SMtYKh4NmvwdvGM7EkLCk73UGvHbTUkZR3U",
  "key26": "p3VCjZutCXQcsJ9uB77zSbDGLJJbGexFYi9dsejL7FY4x5Ra3JCtE92tiHXJq9mpmWv7PS4x4qF2eab35pJaVgX",
  "key27": "5kLu9tJWEo6M5PFrSYpehJ3ohyBZyBcmLuMw8gXu8CEaAF8xKgitwSYSjCbvcLgfk4E9MmTqximG8WcRwwiUHv4q",
  "key28": "oNRPthsqJzacBmerWapvze25pSpnA35HHjyWkcaf6FaDvasWVgY2KWz5ZrWUPSD7Jkp1913KMuabxQ2ito1AuLw",
  "key29": "rJJPU4ve8qV1XSQJWbfbSohwQqzQhP6k3vmN7GtDNBKrvPcPvJegRQ6QfEhKq2vKKaaeFVCZ9BorsNZGHy5h6wq",
  "key30": "2pJxr3edSRh4i6s61foUZnQ72CDBE1LEMZQRN2kyBdMKuTxGyHzYGA4sLWrPRqYFDo7fszMpvjAi3vWE2YNktrnU"
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
