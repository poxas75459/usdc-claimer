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
    "4spZCLzDGVgL2DXYxGtWkxTZw4FHdP1o27pLJ3wFeHkDRAaqwnhwZHH89L6im2mJLQJiwVtZacAXktQmDU9GtEWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QAFDa4Py35TdkcZ9Ep9KnAXA1dtnxotVT4LLrSxwNKQo5BKFjHJLHJji58z4x4PepAr7zkdhkuCbQaLzXWHcrkV",
  "key1": "35TNN6tYNGrEj8MqT65hy5j2u5h7rkwjwCdmqC4gbF7aF8fWuVHADAKehvZiRStuS5WJTVPvay3ciByjArv2ycvY",
  "key2": "4Nq5WbirgJctPRRKXxwYtji5kGR9fLrxRBvVKEYdAsMr8zM69orLs2HjRpg8Z4Bq8anKBf8fYWRRbjsG5KY9RYjv",
  "key3": "444aXatfh1Qo7ndeuRuyz28dYSWAPYrC5isn2186YjvP88n4Q2mwDPFrGNXwdhjwj18HJ5v7fjNAhaYjcZFpY7f1",
  "key4": "3YxzfZKkYDPLmnoJhug6w1QTbUhMWsDZLjXyNMsmV9VyUY28LTsY3Bowd6STtbKDtuNB5P9sXyEWB5cjP89sheWJ",
  "key5": "4hKqK1YD2p3bY9fBKgzm8bTg98UProBVTZZskkHkgLjxyfwpcjPwKhbzsZD9VvG3JZnuM8y3hdCxTLFMMwUvj6ye",
  "key6": "5B3HN7rAhmXokVaMjgccNonpac98yWySKTeyc56oBpiBAgGe4of2wxxdJxBsBBSAdSDsScmV5Pt8WWnYwQd6WapV",
  "key7": "35UvojrxyHSBJqDarCCvgsYz6KWxmiwsS5thvUaTLhqLaCie9jcrgsaT3GfTnPzW6o2Z8kurffwcCn6x5Swn7Et1",
  "key8": "5ZMf3imQ7hpJPrNTDzryGiCN2PpBqzSEunquDPYcU2pt7rUhNNHB96da58Bg49EceVauP1rjyrtnevUpz9xA88pH",
  "key9": "5qsiYz69jMw6r6aUbkRMxvATRF9uNuaGfBukdyPMZKXjoYQC2Z3guamRqCANLxoEQxDLJ9oM7J5UbyMaVZqq9Rx1",
  "key10": "5iCfjQKJbrknPnyvgJ6uLTdWtQcdQwbRsR4owZ4PsKXLmXSJDemcD1au9dkncbL4VCB5XnUK2EwQRmyrhjcrjSpm",
  "key11": "c8Y4t6VyeF1CjegZmqHYPNozS9GQs7KWan17QGkHwaiXXGHyqqefxy3xkdC9Mdu14gJrvwasVkKjEnjeiZf6ZyC",
  "key12": "2uCgnkdPD4ku6FLbjsGduSRN9fWrqV2BaycC25yM43BLSzdana1pSRBxAnqmaqMgsipBF4QG2ExSH74GK3f1EshQ",
  "key13": "26TQSVptRizxLixfPrePG1d9gq6ePZt8GhNFNv7ynGtcqs35tqHQghYgPiun3AdgtbiiP2rnWV4u4isnSoEC44GA",
  "key14": "2qvJVsF21JXdGKRgLqQddJbs8YVZBvzUskgvcxA6Qtw2AdZ7UcpNx5LSU4H7ujAcHrvuhC5udm3UcrmqM74cb1zR",
  "key15": "3cgULqiNHNRCv1nKG8thfVNvijNin3tBUtnMNip2rHwBhTzCYF5hWSjUxtRP3S9zRJXNzm41KYNaYyRK5B5weYrk",
  "key16": "5hYaxtQnsj7eHoNt1p9qXUBEWpC1a7cXJWS8KA9fzbWQKJ5v4w5MC4Th2Bdj9pX6Y7hohc1Cfrp5rRHUpyfTKEmN",
  "key17": "4q6zYZCU5MTcEm7iq2GQ3Y3XxazS66XRQz2LZJkgGCU6ksaZDvnv2LwSp3gr8mnGM4bpMmEb18KiSe1jdLmkPHim",
  "key18": "21ukHc57uoqbLR9X4XfuU2ze6C3RFH9gxv94MRPW8L1qjZiFW5AzbxUpPt7nzP2mamvTJj6Wrm54cpjNirKoXXrF",
  "key19": "54GcUcXSoAVMrTNqMS92ubKW71dSBCMj9jrBUVJzdecm5qsgZDe6zDdjTZJQHFrPxEcVDeAYEj6zGgV21W5aYz16",
  "key20": "2Pk3zoTTT326CRPRJ6nw2cwufsjTxqStukbaykRAJ7Qn6G6szpFDoi4JTEF6QXMZetCUCTm2AKp8mCuvtPNxJKnq",
  "key21": "3QBqr1ahPHRzV3icsRYprP9rRhSNuGngrgroCoUieX5fXmDwj5Ltm5VQmZyqy97zc7gxypKDxmxhtwvSaUbDLneC",
  "key22": "7DdgqgtCpbeinSUa75RofUtuyJQz88Pfi62SZQh56myJbowfH8KwRgsYoyvkjzmj5sEthYrY9XPz9gB8YKJ2CsA",
  "key23": "2etdb6tdqjwsPKMdHQHEAaPr2CdparnzAjVgF6MvwmDcYVWW3s7CovzQv3g79LLbiNb9TijCETvtrZ8yhprqBh5C",
  "key24": "3VHnKTL7qN1mBUpVUXhhim29ohCQ6Xjcky1r2BjTkHmd7LL4NnGyFWSTnndyw19uHd5rw1mEMaHyBak4Lk3con25",
  "key25": "4Z38j3po5uRmGEWKJDbU55GnLVPQqKbGAU5FHJuf2LBrXmFHPuiCaqB3Kpms7c8mWRKTpECpL41tS519nE7ST49b",
  "key26": "5zfU1khnZSnunTX3sGbzt5c6yzke2BxRBnapreP2jVtMaLEpZTp7ib7R6iamAJmQANg1UyHHkiPRXxEi4dr4wVue"
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
