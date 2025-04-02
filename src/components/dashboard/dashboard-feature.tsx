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
    "2S2Aui6rbzyZfhr7EKJM1N2zM8WfKQUg3DStW1uN9CEhehyuP4tMM76hCTqMsJpWvGLDkSYpKAPeotagzG7bxc2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wj1Sytg1eAjjK6P98zPenEeB6LDTcAx8Y1xVRKE2JLNjMkPwt5kftXKj5qwNpztZE63qkbSJD869UsvRbhvjgva",
  "key1": "4cQ2PS1WND6MLw26oT8GS7FubYWfGcTLvYsGZCY633o5rWtiHLYa7LZreQL7Nq9qqdpDhSVJ18FHFo9cswY5powM",
  "key2": "2EykrsmxudJFYjKTCxqPshcCKwcycj3VtJU6cxEVJJH1pYAxoUgZdJpH7nEyU3RTF9hLg6g6bVnSuLa6FrbcSpfM",
  "key3": "V5kjUuVYuJyfMVwXLM2qqjAD45ctCSzj6CDMG3KDXGY7kS4R1Lp9QVUFktb7tb3VuZR7hr25qQUWQWDG7c4budY",
  "key4": "4TuPeA61doNEu36KZrGnJhwwsoDTUUjBBgeUazyVFgmtmTQKFZyjYXHqL4iwYiNuU4zNj9H2v5EXcVkiK5Nyjg5J",
  "key5": "413CL5EYLVX66z35aCtaEtNMG63potThfjBES3DbtRQVwtxDGNTiczVvU63msDzV4r4g2wj4iKGfu7hQpfZY43ci",
  "key6": "Va6Bd44D9SXXq8VLwrbQmPqvukHcTJ4j8eywBR6DUcSum7TmYicdJWcu8BPqZN21ioUShLFmso5NzUCoUy2vsC6",
  "key7": "4beTv5j5JEyFQ7VfRVtDZJA6wk9EtKrkaruAdVrmch1NQWrEKEwqsnGrkM4gzsxexzjRsbUCQCCwUXeurVxVB9Pw",
  "key8": "2WFH9xW6EfGjgKXe4Y95a5f33PXxUVCfjbHEJyb8KNquby6AqcJY3EfTAapbzoMzfvACt4jYiCc8kafLu9zK9etk",
  "key9": "RmYzqtk8AWT77eZatUGN9DfMtvVbZRosUb9LkFQ7eZcrdQm6gcsa7efTQqaapLZ4JxJcDCwg3zFD5w8a7ZCXvb2",
  "key10": "4n3FWD48BVWFyNpad5cL13RDNeKFVM8BvXXo3RVnhjfs4BCd9s7tFBJT9LwRHiNfNfv96KkxnoQJSn1BZi2DQ85G",
  "key11": "5YKRxh3rQhTjUth6zcejBiy7SJDLsr4VSpYN8KbsTzy5dEkqDRYgXhvhCButkMozDfDE6EGFyNBEWt8Nt6kVWmif",
  "key12": "3UK2qkAqKAFZmE5YdzoxniK7FDnAXstctXevMSnarRA1cbeTd3jKQsxtHn8E6FxNdvKyUvdWescZ43Kev3RBgpGC",
  "key13": "2XZ8rAqZDWEfUViL9yRMDvEZYGGU6eRsghAVPKx33N6xuhNSM5y4Np8frRYxmEZPT5THJJhvVsTCvuWr2RpzzgCa",
  "key14": "4t7oTiq4SAvTyMidfmAEXxiPT73MTk5RCRHNAiAKo37BCkwJQpZcj3SjCnfjQSRrTEqsmg2V1dLexoxn6fADNXF9",
  "key15": "5frjqi4y3Dg2tmRcx8pttQotZ27muyF7mAyMzgzyRoEwNPgNekv7jAay21aVNhmmNExHzrSDppq2H9XBePvcNgmB",
  "key16": "46PmQw2GGs4wA7P73UH58JjhNvktVzeZutUCR3RAgBA9Jk4hsikTpwpupupPEj7ja1BviD14cQrNRuQL8aEEykCd",
  "key17": "66Ru8hLtodNnRBZBQepsYer4onqetvxhdNryZGNt49jTN6RfixXwnTAZbUzWrSfWb14spu5kNfcE4MaLgFtTB4L9",
  "key18": "A483AT2zmhgd4KoQiRaYehrsbACcKGG8BezVjH5uf1oWyJGA7jRGNK9TkyfqNnBGh6xRScKrAPwuLaNbZ5quei9",
  "key19": "AohUBVc4ztWfGFgxBGniouvxcEsMfhUAbnnDBgTYufqETkSAcFYWYq6eSLUH1JZ1At37aw2SNdnQrJtUUosQjF4",
  "key20": "2Dezufh5fn6GfU2s3PRSmHijYadP4vdFa8yd2xu86jG7vFJshLChsRqSbgWEkVCtKPZGCmpg2SJGcuWMWCmYBEqg",
  "key21": "4z8Q8X71oK5cMrXAqHSNnvLeVsqtz9arGpm74kgPENFzmHhNN9WdVmSUbweNtcnXGKafhSDfKFhHQFTvUtbgMmN4",
  "key22": "5Scpc5SGqtRXFxLL4ZMA411XUtrRSt5sbn1o4Ajio1H4yYEkZoZzH4xWSeBAbhnDd5J9vCxnFQtAJ2wNv7MuSFei",
  "key23": "4U1Mm4aqkw3qy27jgGx6BNGLHTKbM1dFs6uSnkR8jNSSzhesguW7hgXnNBoLm766na96FmER5Wi9awC4yR6eeEsD",
  "key24": "5CmzxJm5EpdjqmFLsaSQWp3wR7vxdA6Phge9DV2LJ7uo3Mo6N9HSauzGQGCjYoEFc7ZiKKVyZHthFFeyJ5uMs5tr",
  "key25": "3Twk8fcENJpQffm3bRAZmH5CPqy2wcktHiF1DWy6qJJaChvGPP86isXDY5a4nAbbmNFx2QnDG5oBjXtm1d3QXDvA",
  "key26": "4WjdCZC3GTZqrv7cRFy7up9USpusPGihPgkMACA9u6aYPF2ZEvyAsASWqwkYtPQ2JSSw8UgT4gjraTCRehh1UNMW",
  "key27": "4AT8sfwf7UgYNxY1KmMXqgMYbPWZFWiFZ7DpfrttZdZSrmUhbwp5NA8sj2Zq5Vimva7zwhMiS2ZbMXRhYsY9E1SQ",
  "key28": "46tJkcM9MGJLrJTuVrPLmBRo8tcATxJRrkZ13Z7XbZDj3cLD29FuLDz7tfRxbsc1mNSNTmMmWPQVgqZQu7Vhhghz",
  "key29": "5hqzAyYPrxfNK7i84vSH8dTPVY8XLV9yuYUahMhWqYVofbuP3mTMS5XWLYTPaK4y1kVVNKupjX5Y4Zbv65eEbXfs",
  "key30": "4fM24XLm3ccw4Jukr2HstUWshi6L8Ls2U5Bv4WgQ3HkQu3NqkqV3ujjWSMnQZePTJvqhKo7jhbAaKAk5BafPLAz2"
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
