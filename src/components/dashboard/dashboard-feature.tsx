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
    "216RpfxhdQTMTvNAcn69JRpuxzPcHbeMQbNTJRnC2drupL8QnJormGC3MkhpLiLpcD3mMzG4bEohL264qmGRou85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gC7FzHTVY9n5AcVivbNxkrrFBbtDU3SMuUCG5JxhAZXsHdfBw7dgoJde3YTTz1pNyvJVfqEk639Nz8BmrA8tusA",
  "key1": "2sEMfyhrAjCdzgAkPCQTqe14nS1n8cXqw7CdzyXpE5ioFQ14rkXkdyo8Vy7ZN8FVC76WRtb5oiE7QNWLxbJ46M2Q",
  "key2": "3huVkQ3r7aDy6CYvPNPsdsT2GB8kUG72Fa6b1zX1bySMAjZzcDVgkw4JHMoamjckGGuA5WWvvADMwddE8TX8ozxs",
  "key3": "2v3rKb7KLU4y5G2Mmd2QAJvAG9MTfQy4ZXMjzTPeLmbjXkuuMPBwiwPjHKsb1dW2pPxyzFQt4XPyZm3Ng7TYrKYL",
  "key4": "3UVUbe1WyQ8kX7aDWXgWL3KyvCTsk6TXYZ5ztaFwh5nHrDzHwSD81HcT6ige6MiGWtV9iY1QCxuTZw22tzQP3ryx",
  "key5": "41zspjJRPG23o46Z9U8ZMQM5uFxx16icp77viktK6ECAm8ujwdGfpv32hEzABqVnE6DkmhEvg3i8CJcwZ2iz96Wv",
  "key6": "5HnfttyjZ9CyBMuFS8KbbW1FkFA9UNY51jnNEd5TLjGTvG5ztASq3dbi9fWiVr2q4DkwmHcvfyDJ97SQBftafDk7",
  "key7": "5DpxgCDuEpoXyV6k4f9Xqn8Mq8XfiMyNvEbc1UYKmbr8opNEnxML4NJtjFAdoyU5KRq4HGP2tXKquomSD6MuMScC",
  "key8": "2DTzkzEPKtgPkxTS8grRC4XBVYiTgytSEF8kirbxih1VJSHEztqDUQCgZtx4ogiUEzHGBaff2WxZGedsA1b9xR9D",
  "key9": "aAUWNknDwv45CNYnuEFhVnWa8UUd1vdsucpgptz2W1UfPsxqvdLgW4nqd9hYNRvCxhPh4UdQxtLFRTmeyq6cXxS",
  "key10": "2sZBUgyUW6Kd525BkhFbczdsQa29AUvFkTPnjr19jF5zZp7mSxy23fkbNy2tTFkyQpDza2bpMeuhmhnLeTCZPEac",
  "key11": "22GqmmPZtjHvsDpCC9cSgx7gYAbmfwtx5DwmUPbhCVbnaJocbi97zetcsrgLsJ1PsiZjRWj5Fc6NQmXQuAteicVY",
  "key12": "4YHVdn68SFuMtkMt1v1HyzJLMpdQhNbSambEsX1eywAdXykDKpc4t71459GA3uTZE7uTk77QHzvJx89vjf3M6DTK",
  "key13": "4NrF5Fi3dBr4WQtrJvM7q71xf8hNH7AbEbCwQBp4NDMvfHZDhQ287UnfqrnND6jNtUxEpdefTN7N6EsoWdASsjJG",
  "key14": "5qpQiPAeLNno1dDabug71QSbgfQi4GWqi2NLkcBeD2ZLk65AwWgvgFWBE6YLqEVVrAKpxV3SsXqHsPKcwNimxqFF",
  "key15": "51GeCZQMJSYBJpUyUk3Bkfu85QqVYd9RBX37u1TZz4EHuVeDfF64pjC3MgyeHKHkfNX66c1JA1LmPu5L8j31F7Z5",
  "key16": "5R71MSnpt7UpnwSEMrXLmXa1KNQfifCErNfHQfgEpPJ2hJimF8LjFsycWiGfwyrWWoRUoYcscB9kRiGBDBoL1RwN",
  "key17": "5t4KYHdydQz1RJ5quEsjp7YU7vJUcMR6YnXygEgstFSme7NVsToYt6P1wLHV1uwjK6dzLPkbCkX5p1K2FnFauu6d",
  "key18": "2M1T5FXK3pBpRfeJoTssdidMvNmc9g3wYvDXzFc8WZazE2NeN4NwTcf6w23HEoJmJfL7bdoNPzgKLoG4Su5A7udD",
  "key19": "LLd5SNUwiptuMd5PbZ44Bhtjf653NvZVuMqX8xxXRyKfePeNyGoDB8FmakKVXrTr4A4MCcuH1oGk816zUNEY1aE",
  "key20": "5HSJnMVKZ7AmvXKkARRHyrf19D3uojW3qbrzpFzBQjTfAKXYd3Fg6FWhGx1mr4Mub4h37deomd2sR4ssUwweqYdD",
  "key21": "4Y6NSzgCKdjm8o81eGLjWwTQDNVegfW7XdTRcxhivdjBo61qkkfBnevTykxddCMUHfso8jrF37mrUsNDbTPmy5Xa",
  "key22": "jsLyq3fpbpoM6msPpS2YbcTC6L31U3JHEwJxi8mMfqsaSEDefhxwA8MJM8tPGF6gdDy1ThbuMrZvFMpS8Reurzt",
  "key23": "JYYWNqT1n6yonv56pPTQ6RVYwGSkoWe8YFSJWUzCYwPFsNJE7JpjSaa53F1XJ1pWanBUFaxzvUyqG34bxXWQzxz",
  "key24": "53ZRVDWHvdfq8MEUPqWmpPV6jhTrGWHLWZH5JqReYAyBmME6ZH5yvekg5ravHGEi4dagWu9Y2xHFConTyPH4vfXt",
  "key25": "2G6rYMx622DcLEvfERLZE5wAKiFh3BSN5dT3joqG3smTUMqp3Yq8AcmssA8uLapJrPh7PVgmd57wPcGx8jFMVJuX",
  "key26": "35ngYMzRmzBVfAJ3tHbhF4LVKFFMyMoCY2jVBJihUDgSS6Y6uKUD5pWLMeVsTjpHiLQyZLmeZF6qefSPuyryADzS",
  "key27": "5UkWreH9yEz5CjtJnZ3vYjRPDhf6JDZShejERbzoeJ6VUimPpEjUeWZPMN5muGgyvVqqciPqR7QpZY7FNaW2L45X",
  "key28": "cAWXTJYn8HJoT7YwPcBXgW3no5uhaJdm93KZ79uPQzHgCBXZLy7ce3mggwFqtBzD3Eguwzy8aw4gGZnB5mmuZcE"
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
