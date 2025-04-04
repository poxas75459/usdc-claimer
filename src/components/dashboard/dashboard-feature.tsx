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
    "2US6Z5sSxn6Esue2B41hAsfvisgTqKehgM98nUHoRDWJUsFWMNcLkC5mFVmGMpGCYGwFWPSETNon8JcSaieMAKF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GgaBTQy4Ww8wMrR6eaqG5Q6WLhvKTFkeZ2wYxiJbM2P5ySNf7V8CygA28LimzT6wJqzZUU5iHqcxSreLHM5x31H",
  "key1": "5XGqCQfYN2muy4EqPCxmLKZtFMdGMWnxCW9PMYnRZeRNBsUQabhKyrciNn7G2ySUVksFY7g4WWsGvc9itqRvvNWU",
  "key2": "4p6ZMK8qFtpzBabNLc4tDxDW9XEgjm5nEpNjWSoxetDN1Mja5jFMh2SFLHXDjRyGTqDhtwoqYHzJZ9XRqZibNP2o",
  "key3": "CgfycEFgZUsbxqZ4GwhHzDNDwyRASgY4GkRWywAAwTuHieGruSwEXJAa4H2NZXD6yS1uBKVaXjSuzeWijGLubiT",
  "key4": "422ih4eEXB8ajUMe9TvhmNhJkLT5V6Q4NND9Gg1ft6G9xn9sLfGmmjxqemYMoBQx2Vc48RFD1SBkcfxKVNLu4Gi6",
  "key5": "5jnBfWoaXiLowiDy4PTmi3XvnpKN5veNQy4W1d3SqL9ZL1BJWSbym9uLFsMHLFfJGcm3ZZLS9KRrsTeuMF5ucx6i",
  "key6": "5qoR47rHsS5nYvHfTWDy8zGWTrmQRkNrhZU4njT11gQWo1J5RxPmjPvozHwjRUYXbJVfGwqh3LTGHRpp9AAV7Cmb",
  "key7": "56Hh8LK2v22nr9LUu11Uo6WnTZ7J6DubeK61iN5vW99S15wujQDEqu5x5huVe3mPJLKkvdi7uq1dJEjLz6nQCtxr",
  "key8": "3X7xcJyg4ZtqWuLJVWQddF5sNZA6WTXW5FGY7ZxLxr46sGnkRGDErg3u1FiUXH1fd3hT4jQWxmi54LWTUG3ajyAj",
  "key9": "2VwUgYGVoSBvrgby6HT1FJ98cVccRV2bkWRno4rdwewt8EcUGjjJbC18r3n6iu2xfRAZoReXxXFe2pVpsbbYpqaD",
  "key10": "3LwemT1fnAJoVaxkuXv8qBgUBSDkQsn4hc1qMEjzpPqHY39hKk8WwswPrDDTpSNPZMZzBgWtCYkKivtYCJuenEC8",
  "key11": "M3MdNJcEVjrreLsqZMa4o4NrDdmvHWyEpJQNkmGfREzPDvWTaDTxgCRTKdkPY4t123hwzopig27y7uqeY4BrMvh",
  "key12": "5EGn9fb12cCMwXzJMMBkCApW5saA1VGrzbCc5H7KEmp1Vptrw3vPKsuqdd7gTc32pPu8XfxtNxezGHTourN7MwLX",
  "key13": "2svUYDA6hnWXbcF16nVVR9P4XeP63QtgK5CxZ7hkj6Wv5fuL6iogAMtR9vkkqEix58qJn4DSMzV6zcm4Yj6jk2P3",
  "key14": "4EZuAHPf9Mr281mDJG63S17oSF1RPnTEfLy15QpAoysh7d8d5WMRewQocfTck7vkbVELrh8F5AKU8RceV9Nf6kGg",
  "key15": "2UqqjZB7sncFumiRDxFmbVLUAogGfNH3swJjcg5n76km2Qa91MyVUmZkZ6p7HeuPooJh8TJJ7iS51DrHBVmbvYJK",
  "key16": "4v54QrMMve6zmjvsDR4kcU8EtUTtrrbGFY8HsYHQqYbvwzhrMGnKYK3j7P8mDpkW7FWq1mkxLAXUcE32E6xZvEN4",
  "key17": "3cfrs3UoHsG9R3hrMhv7zJgxUibJApc762T8nRQCHZD3p8DHqbe6RVY3ztkeiU37JZMw88A9XCD3V2Kv68HAcvJS",
  "key18": "WeY4foAVyq4uPRMmVZpk5pf3GRyu99QK4QtUCZb45uMfuB9c9z2HhLRuwwjeUeS2TgGkpNuE3cWuUeWYKN6gD1g",
  "key19": "5Z3F9ZuJVur5qQdNQExhX6Q1RjQQVbkmW578wGivt1Xwf5YqUbQqNbXzpWtyDk8cqdoSgQBfJorZMbWuT11EgR9m",
  "key20": "5D6RVGkwTcDwNt2FSHLDzhfjSsM311MPyHbPZKTRvS52QDBvT8JMLKAFmavNYfqesEmwf3QyKLZfFZ7andKuvjvW",
  "key21": "x6m47sSqHw3eadTZRnVkQKNXKmw5bBc8fsaMXE9cJvKVerY8GNADrRC1aUfJXx2jWC4iL2PYsNS3txFsaA7eUmR",
  "key22": "2LUrQm6oFt5aXGrcYTdkFvKJMj4PpZdSxkXLRWPe39btcb1JjtKhDGrTmyKvKGSkkZGwXywTwJSh55bFopQQVL8p",
  "key23": "2ntSsPrHtFq9DX9vvbnjaadNSnjgp5V8Aj1WP5UUr2wZ32HXrVXtPNo63PNjwHfyGnLKgmdVJAFN4bpdCmEc2ihC",
  "key24": "bWpdppSyvVxP4QQEQDN7wGuxmB3RC3jDfRiB4jKJkoj7wqsyEjQvwyz4iWJkbNoBvAtJPwpLHWjDymHurTvbuKN",
  "key25": "4LsJruVZrj3cd7gnJXfj5yxmn77sp6t3irvvZjiVy5BWZhqP48othQUqCK1hgXiVnA7Q4jt1x8dP7zVk1yYCU9jS",
  "key26": "3BU8pfYqutRGsXzcJ1zW999kBhmBVfXK7ktxZCQW5T7oTuCFewnWMGzitJvjcqV2duCo8QSPfTXCxBJ3eu8sh8Pg",
  "key27": "myKGcNe4BhTbuKkvtqwKzvKY5V5QjojbuM9rjNvxATgB9eiCbuc867MUqqa5ZTEijii4qJnKSxZ5hbRsu3Lbjbv",
  "key28": "3bQHLKQAnFw5Ev8W2YCdLZeF4RG6J8TeV376NJHu4YQhfjCELPmArf2rxowYmSkjexsq6emzyjxBLc2SJrQS3VKJ",
  "key29": "3wH9M79kHtLbBkpFijoo5Ti6RQYoGuKkSwoEiV4p5zMBymuFMmJt2xKD9ppHd6jcK2nmAC9Z9N7hVnDXd9VFq7Uu",
  "key30": "54VT3MRvvxKRz34TFAwA6YnPmEfUq7jn5qkxKCfQwn5FFsaYyvgXu4fowypGqn6WamyzUgo6dq2dMxCXBd4bWW4G",
  "key31": "3gc88Myso8oTS1vUaDFS7UF52tBExPp7s7GxEcnMqSBxbjbgXru6DF6Wf7QgNqv4VZiqyd2MZqEyQ5JuToPKtRfQ",
  "key32": "jWS3i2HuuwAaJx2T4pxHuC9iwzqbVGti1kpZA3pKeWJSCnYSxBBADoU9eJU8nQLuSKBnrty7bk38Q7yL6EcEJuZ",
  "key33": "3PnMPjjsefTQtBKYM7CJ3UMs1XvqLc9yDNTf54bkQvTGxC5Ujc6X9Rjz9hf8nkRh5QGXHzD3yu7paVxZoKLDeKAr",
  "key34": "4FXVfG26PPsByYY8JVZZSaUH72q75pZddTSTGsd8TBFZcGRwe7gwu6uj6697cXxwp1VW1PyFETMCTkAQo7P4FyYp",
  "key35": "dHPZKFaVvL2abZzfAhQjTp5cVjY99qVCUWp86nu7eno9wpkkgDbeAcjqwr3cR213ZNWqp3cCdVUyx2puJErPSoj",
  "key36": "5cFv8GTxbGzXEQBeMwf7FAh9LZyB7Wx4B23XAfwC98eRKRoKvJM3JygvHzGknGSGkjhTsMwnGK3c4Kg3Egddt7CQ",
  "key37": "3NXHiq4EywGhja2mEs7VdP7qfEqhRZZv8hFZ8DLxv93JsJ7YuK4UJJcvvwjNYZLVfzZn4K5BLDS3NadBAFNqudYC",
  "key38": "4yepTx7ScgXV7LQQTvZqzj3ymEztFPbomsNdgumT5RXEq1xVnAkrzcm2arqmAyP2LChH3zskxRFZMckgpMGYswKd"
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
