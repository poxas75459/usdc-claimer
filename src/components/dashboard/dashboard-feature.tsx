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
    "5f9AAvc9a5YKx6HpPyQDr2Kuda9sKLkhWcV7EpjAimzp7XHKazsACL4LtT62Pp3KRJxM4i9bu4ZNQnbAWnfWqjyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5viMetxBwGoWsMfqdMchAmh41nYeVjHQy6Y7raXprDEUr5RHTzqfYUKbw4d2AfxDzabQ7qGqZyCxKnzvpNyWfgWi",
  "key1": "joJdYfRZTXHMJgcLHqbcCuo8X85YxVgH7d5H8J1FAXjqdKG23rFtAkLPmtVfZ4vCfSmXzUfb6WsPUxANBFmyXnb",
  "key2": "5V1yjHZMmMGZPEAaeMu2CRiktHtzmoHJDT8JpHhEfZGAaUQ5mwuMe3cN9rMPGL8XtspPoQgG7Cm4DqcZZtPHw5eo",
  "key3": "4xmFXtAnzod47tSuAAV8ZNYeh5bLnvEjFqxa8vtqc3s8gymbYGscbvZrg7tExBFiEZPT1CSAVamBYCNd41CkgCK6",
  "key4": "22QUrESWSX1JaLs6Xo9yiZW1Kzg69uTZ1FhJS45NZqzvjtXBkMvrH71Wpw58EDsZtmpqBsoHgggchBhSDVLkGebh",
  "key5": "Tuq49eCpV46GvCEUG4mpaHjoycZV9sGnvFqmXoLEnZGHJhMtU8dmFy4BTxVojYRaKZX2kzZj5VXFLGpJFVJr9bD",
  "key6": "4MHWETbyp2G9z2pmo1zos2r4MfFAUBQkt9PecFkv95myVeUPbDjJfnRDspfcrNWKQZGYA48xdQRU6WM8Ni6zqyeR",
  "key7": "3eGLMiNHQQaMpNbCpp3AtBEzXjTbCTrozBMQ6j8yGEb6wX8kQJUsaKWquzXJFx5eR79HUAitZS2NVvFvqwAkUgVf",
  "key8": "2K1guLCddMNSwZNqd3CTpXJXNjzYJmnvJfEU9QTGjYwFrKpXYi59DAzwvbqRtPjc1phqypuuULJjvJpp3uMzen66",
  "key9": "4Ww6dxo3FYp4MtFQncrBXRpfN7Ve1n2ArfyD6eEQWhuWWg6fZpMJuK7PEvcQznqpYacuCdhYGmx4PZmx1H83CQvw",
  "key10": "XD9kWFy1B6L5q46UP6XjT5VWeHoi2e1yQN6gShwAL6q2Hv19zqzdEUt1XSW5D5RE9PkyE2QoFge5ibLWQYYEoLd",
  "key11": "tTVFcm6McpzERvDrGtJuNsfFTKi2jjY2ZZfNgFUBvCy2Re3qVUc2qtgwiMgAje5i1T4k8Sw5pX5ZYbV39q6ewip",
  "key12": "3o6uGmNGWdLZ3SWS236qbUN3oJcRctFcFNH2GFMwa439PmYotrDgNzBE2KCDt24LeDzvsJGfs1uxt7LLuy2FZ3BQ",
  "key13": "29KPuaK9v6KvkwXQwangxijwN4QsvSA9x6Qkg7q5YrN4Ui25WtazLEqkftLBuhsx7GP8Pd74fDQViw44Vd1TAuaH",
  "key14": "3TV7uvJeTFaKRu8Mt68ujptUd3t8Dxd4cWncFmUqvX4qwNThHQ69CgiLC5me77bpvWbYuzL1kNFNAprF8JycxWtN",
  "key15": "5Xyvo14S2mRfQLGFHJHNrxvrk3nfT1LuacMBeNGXhssYjtmBX9KUsqa1gH7YawnihcrWhCHELn49UNUyfc9MVQQq",
  "key16": "3ANqufTg55WKHKzqSnofJyBCFt9G1ABJJGuVrSA5mwrugfkTsTuWJ1rdih3u6759hnM6cHf78MiNtYbXCq1DgaHz",
  "key17": "DxyYwX5tdsroipqAbMPDp4eBQrtGbKwdWfkYsK4v4kayQ45FJDBYLJrheMre5CmMq5RSQ2xdxnvbqiYoPX8NmNN",
  "key18": "3yQRNfQjogMJ5yYo5ukUvCwAwCFS2i8uDg4nnkbHfBEFZ27iEfJ9Ti8iSYdxHK6edYHp1jkwbcUd6RjR25bZgZTo",
  "key19": "5qLZ5kDdjjMUSox1s8v8DzA2JXjiar8xjwBHqE7EvbaJmaUFYPd3xnpbmBwhvqWzf2M5Wz63LC2KxsPGQ61yoh2N",
  "key20": "5TzAtuyXMyCXSL93BEh5fpbwAC4kvLBdNTSrSY8ePtgvfe4KtY4SQ2YkjgmjAqfTBZeLpt2oEVQjQgYrcPA5BPQm",
  "key21": "vjCiZzQm8p9nK4w4NgZBizZo816qyuFtiE7Q6FUtiamy2iXCojuy59FgysJtUTzXqps3fVYtMWtGtnRvFdoJi4T",
  "key22": "2QE7j4h77ZhxdfjL4mDmiBjH5SZU7CXsYLPcSAES8duX1Tnd3tXyWz4dRw6de1BtaokZaHuGxnokWeFMZzMoJP8c",
  "key23": "65jBk5FynhgNi7m6cyybpW4GDFrGwbnSKtUcrSDGNuqKSRo72H1MZqCFUaNTB7ArXERut6VdxVwp1V3gMUwPxTW6",
  "key24": "4Hsgie3q1XjGaQPfLoBmJhjypp2Aic4NLkLA7SqYz1h5fnWqe1mtfwrUQNrCAATiiCxduT3UggKZ1YQE72KdzReR",
  "key25": "4AdchwojmfHViGeTADi6hakVCS2d62ZgQWhkhhevsbTmQ82qsbNGMLLm4PQ7TByNzzsUdBJJbK45X8dp1sGLDnB1",
  "key26": "43Vkb2WSKXefqWP22YdVn55fpFo5BYcthGJoLs2ApDuvgFvZCAYe3AGLL7VQbuZ9BgqGZc3f1kPoX1jtDAyaLA52"
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
