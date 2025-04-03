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
    "JkqvpBMLRG9dHg3CkamwG7kxKXx8kzfT5uAmGznyVykciH4LG8tn7w4zDbJLsmaZtjpdQd8HxjVVYi694hXpUjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oKJUGeqf6dgzfHLAKSv6r7yDiNE8NFm4NwLu8WYsMidkb8Tww2mjEm6XHuwYZEB4tXi9JmuKnTJQjhPqxQSm9vC",
  "key1": "3Spd9eAv5Le24M9N6Jwps4aR71BidUzYUzxNAhn8GLuDxeQ2FP8BJE4sYxQvc4SGxtJPrrS4GEhHd2oNaiv5hR4T",
  "key2": "4MAmiCRZmBVE8mkzUUaaptuLuiotgf86KRNdpt4Bjpi1xpDjXdQFcmnuTBQrxbRdN2tHduhordJtHKov8T75Cyzb",
  "key3": "5LzUVQcsvgAbw65Uq77VKAThLRPZ3Kbv1XKWLsRMkPKTQ24tJpYxgxvRTtBFaJv4Dk98gmvEDUQYV8w9tbcC6U7a",
  "key4": "4YmPYy5ZFxonn1uT2MMvshGXZEFC1WUMhzLEDuRyGFjG2j2EMVJ2wKoZCnRuF9vPGLiUXFy4FCnnVmgBDWc3C1oH",
  "key5": "3DvRH9UekzZFn4ZnynHTTnnCSvJiPxLjbzvPCyfhNBF92EnYia2NzVgyxwgmBH5ZToVL29oRRBibbjYo6U1516Wm",
  "key6": "5E5Sc4ACYQ7X9arbQNK5sDfTWhDv8jDZoTkw5JgYX2H5GbvW3sTZGd3vXnjYQ6FZiUhe7FHDJorjeAjMQ9HQy6dC",
  "key7": "5THVFdA8JzaK5PgHkCC9ntWH5wADyw5xDH6k5TPhRivnqyHF5aCNJTwXs2yFmpsW3BnKvuzEixmWVLyVLxZegS9u",
  "key8": "4crGE91HAUJcCLQCHrJMyxkzcuBtH32dfp1exmHW9gJPnMW7xXgx8922gyZqswLRqR1roqhWpiEmMgqTK19cphoW",
  "key9": "quTQ3RsVyKPLkpGn2hVKkoja9HS1ewDPTd5MbsosUZ5RNU8GEK6GNZcjP7jGVZ8DZ9p5QbnPM7TLYV55gGb2LiQ",
  "key10": "4w1nv5p4CnYrv4wbybpiPByCx7rzrxJAwzzKQq6PHZRYBWmnZ7gs9sWJHeCqbNZFgBUDLLGLUNrzhGCkWGsCabpX",
  "key11": "5vjwyYg8QDWibzDBMgPyqH38aXGtdEJiHbkddhFyvGei9ZpMvpAiYCupj3EuZfk3qEc4GJF742H5BqmBAVbuvUs5",
  "key12": "2p78rXLY57YM6V1xWmYGkdM8dEJrJdJUT64Wkp7aUomLGGMKHA1ToE8KRT65THBjnQzv6ucymiZvrWakoZRBr9PL",
  "key13": "4M4ZtN1U7LrFopia87zSwq7Jj5KLJdiVJ93jFV1eWzAfqPMKb4NRwxm7j5qBU6qcAiZC61CKUuBi6bQ2b86WUfS7",
  "key14": "3HmasXkuXSmJhziUUdNm1FUUAv2zuatdkbdhkXEWneM6GcSBoJdMpQ1H5ezimDQyvYBB9m6DBaTC8p8soWBHF9gp",
  "key15": "3VGB1j3VbHtFw1WvLL7Rh4xo1tyULMX2sYpU9CBTBFaqs6tSJE48cEzpuVZd2hp94wjwLmWVrK8VbaXGHped5CNd",
  "key16": "2q9eZDB3p6Uov7426tvSRenksX9yx2kPgzVHrALgsmQsyxv114dqyY2yLxQ7rutMPpkPGJYSHuGa2KP4QYMoHo7u",
  "key17": "5azRpkrQ3EGK7YnLhv3WkiTz19v5dwXan6sas7Nzz6hTVyasX9FtqFKUEZJRiiz9vEQjgxZ9V4g5ZamNnkk1EFvW",
  "key18": "2UfDECdv1PDnL8QXEg9KeP1c8doooHmCzL3tkuY4h2XaH9YH3p9FZHKzJQMWML61wNgHH18Wrxk1LKUnaQp5zBL9",
  "key19": "294z8rr42bezB54zx6Y8SH6wPbhZeWMRRmVDSwp2AddcC2bFEqAFFeS481nvKuNgXoxDQB5kNF5qAvHoRznLE4vk",
  "key20": "3xLSZxfHL3hUqDKwPcF3ozCQJ3TJUErt24EmbVA6GuNHAng1poBGehiwmk4N43Dr4MP1oCMxduUNUeDE3NMvHjnc",
  "key21": "3mTgvLbYEPQCoQTVq6P3uvATGCqcYcFV5mwJmcN8QnJ2M9EvtK1wsTpheSQ6yXwmhu27XMMGZwQ6oyFZx6Pv71Xs",
  "key22": "2jWRjQjeHBouYp4fr1ymQBrVx2HwaSmjmE1A79Y3GSf2wyJTW5kKpyCpEmtpva9HGJKfKME3zCDh1z4dw6xjE6e2",
  "key23": "4Gg98rF3AWXzGEZtTvXUbS3LEqwyEvfMEaH4DSWp4gHxBENGWDjhcYLT9WrNrjsB9X72QPMDWmZzMZkeDXznwP9e",
  "key24": "8dMfE7cfoUvPPW48BPVNR6EXijESFvATi7jv3FgwvyysLrw9ZkB9c1ywTqv7G7ZqMrGLBRG7TiPwT5vAnGEGndV",
  "key25": "5KTn7FbA6PHQHjvdXEzQCH7uJ8B5iC2JjzG1hezbPvRp7Ez9tCVAk77C54mSpE6s7kbCRXjHuB2aGoCdmw74EA2U",
  "key26": "269uNvFTYert722QUNJ8dLnEPHSuinA7CQXFCSWzPS4Wd8iakJr6KVvfoRX2sNUbBt5k3zkqXo7i6d2D87DjL1nR",
  "key27": "5rJJCQsJgXJhN3LD3oX2FquP6WV8hH3QNhqYwEY34py8zHaS8J3u4pVWFKSPqLFL36poxhEWm9NKpPHfNF9GSfRS",
  "key28": "hkd39Df93kxbwX8yHsey9StcveMNfhtdui9o4qy2Ls86zS79gL9uSDpad793hsknUbyzrTCziJc63Dvr8DvDUjL",
  "key29": "4G8iYDvrpBxNE87HcJRLyyanAcVH9Qf9X7uHRZkRQcqveaWch7euFXbSDV8jmGQohppzSH5ATQdMLhF8UUfSXzhu",
  "key30": "5URXcAPYu4sxXCidPcgQxJ2eaX9LAopHbSD3cNTPV1QvyhckwKnJUkiRCiDpsmxQCCjiXTTLFyC3Ve7VPbHE96Dq",
  "key31": "3Z4hYP511u9nQs4Dk8XykxZmUTUuQrPYk816fYEBLjSe1xWWSFk58myKWAAoKK4RgPXs2Pza8pAgLdhDCZXRXy4T",
  "key32": "4YU3YVbJewXfrCoN8NJH3QdhU2JF1sdecdMs6j4QtSKErJcVvuhgj5YZtn2rs1NyR2CZz2fB6xK2nTCXC7DwF7vB",
  "key33": "5YgiFeZrnJSvoX7YoDDbXi75fxLJ7fFR6rn8tgbVhj3VKLmfFuX3AnCXabjAxc7a7DKZdjM8GDgG7ZiFCMXr738J",
  "key34": "2VTLFDZN5s7x2Wj3viwgy2poTdGgQBdFHV7jqEmzPKkGyFawwFqfdydZ1CFyZqRFPMqWY89U2rtKi67cSbME1KG7",
  "key35": "4Dnxjk9bbiVLHKrx85oBGePX6NRNb3WRW5pVDgXcQ3FMLLvtA2ADuV5tRwGqgvfQJ1L6DdfQJrpUX9dS7AMp3MpG",
  "key36": "3LVRKzorDSFuDQPpyRPu7f6FKFVAdo2oGCyzdxKNh7uyFgdHRwWNMntkW54FyhkZ9ntXeXktdYKJ1nBtbT3jySKU",
  "key37": "4PC4gCjDFA55L9ZuSghZfjp3RAZ1EdkygvsLfzeieDveDo31LnA6CS3V22f6FCQwvhPzFZgNMXmHnLtXddaVUG4y",
  "key38": "ZmXgZTEgqs47992hLEpJRvFB2Ctg9GmxrY5UTdB6H2f4RPpoarnbhFcJW8i6Ke5B3ntUropUBYpnYkPZzQhN9ue",
  "key39": "4s99piNNTk5h7jW5QXvPUuzLnzqdAkE76esUSLmUz498gspqDAqBNp6Y1XsmZB9Cxd9dyy5CKZ61Z6odL3Wh4XqX",
  "key40": "4sJFnjGvqwnjARFZg4KB9XbFhbzwE1Jwb1s1qx4D9kLnU1Gr9LrBeDytuEhrGzoWoJgPErJc2mQUsv7HMdmRhBMY",
  "key41": "4LCKCWznTDynpB1ERrAyWzidJ1nxknDQxjKzkNSRwXPqRgZmF6uZwvZ9rCWwVrwoaxH6Ai66sea7KDbyPK8HVSiL",
  "key42": "3tzAC92Gqsgwh32ZdooThEMxuvHpQv3YzHJ1s7BWPNvgcE3yYQ6ascSNGyKXYDtupaSc9CotrkDoxZqgjiq1j9VW"
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
