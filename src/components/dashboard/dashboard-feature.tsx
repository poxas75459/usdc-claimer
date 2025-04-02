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
    "3XdL8Jp3Vk6m6USCaBntPfvUXNLz5AAtnXxmaTxxrLGnQERJ1CTiBR3xPccDs4cXSBV2v7R5isG6u4wfurF6fULZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5364HaSf1wKYMESPnBboqhJfh7yam81SKU55sokzZSJ7d3s9pbVvuAKtCS3gaHTpt4NkXU4H2cg53QNqqgxMJxEG",
  "key1": "4i6ZvoXYKCQvbYaeTXJR9XSF39u1DfjT2Mqj2S2GCzepSzKVqVfWsVf8rcR4eJT4TmG6UQKTttzpYUkw4sX8Mca",
  "key2": "5PB8KDhBoZXzHkyYoWocuYpdbxVYmrhe5XUBu7fryxr7jHZWo1xo55jvSw5EG5tf65d8iJzJFcDChB2BP4vzZcU3",
  "key3": "5ojLtDPTKMVXkCcyYSUehYj7BZxbUqfS9FNyfCiqTSAZm2vQU1ZDRTPZhMjTp3p7X3VPLhQX6jr2psj8AtwvhrY3",
  "key4": "DJnoJL6gZ4JRyTNFPq4MXxThoH8gAkSppiCwxRTWWovNM4s5mChBVeQbWCz9ULp5HCxcCiDijjutQar3DKGp9LL",
  "key5": "2cDrYKVFx8WWfczTk2rg9J8rcrJaoZL3PnFz6DxvZnUAHZnco5hkp1FPxEqiMnJFtppYmGzHhKBRVN76AUTkZkJm",
  "key6": "3n4bg7fvGJ8sDpKUjvmdZeZJcHA93KNuhc8za2ZvF9R4kSYEvymwSVUDmu5ZaKbRPu81MC2vyzsUnPS3Cb2Nq5F1",
  "key7": "5ULBvswqPiGwVSjHWFKCiX8co96ajL9kXtQ5to9n9mpopEHARr9C7F9FunyUwGdiKGjQ3VLs3GxTTQv6EpYiybjn",
  "key8": "4Kc4hmWdBgWa5nqTNSXqxqRdBue6BM6qMLmb9ZHJDvp5QJXubnEXwbmGAo4riUCqNge18uDCP5KvT38pCoyeoffE",
  "key9": "3HVze9UpjNhTNsFyEkUc9zFG5GQw4EajtbSjQYEmJDSoQevq5yNRuLJB1PqsEDmKAh5PoytxPE6Khq2TuGFgKHFu",
  "key10": "54e63t6jqP58PBP5iHWeVaV7BNnbDsKHZb96PvELkvAK2KocY23N2JRZWKKGsbEkG6pAJBCxftukherZkQY1Teoo",
  "key11": "4atYYyQnSFfmkZGxoQbWWVjgVRq6AtKxS4cu5S2rybLvZCb2MbBS6bj3MTP7Tg4rESSRi7ve3JNPCfb8x2FhnMKp",
  "key12": "5F6ZfNM62L7xTZj9avohsE1DcpmMwCJ96yjSxr5NZhykb2gvY675uU6YX6TNQt7vuWX5zKwjH5xtWXsdgBt8zcsS",
  "key13": "4He7btnLhBxdcAKJPTnuWd4UcibUEKwwUzb7wh7iMzEF8W2pVLJGXp5tPY4umwBB6mYtUyzBr7fVrAbWqVM37hQo",
  "key14": "x37dGCYWMQV2bq4cJWKzXGdah5N1XNZaLwiPfrCFGT9RfVfenx5LYzjxVRCN4uMV3Vrg3chB6fVNpxfUTbWhRCL",
  "key15": "4rgVqaWZcePepWRAJDSRsT9VCnRGwwKCTZXx8eSXqshRKBEhyyjiDWhybccKejGxnyDz9CEsBug4rDVXyinckDc9",
  "key16": "Jy9ySxEjauzinAmEhgVCAzLF4L6y6HCrbRkXhSfF8qzVaAqhsHccgXAxW2EZ4krDwNgMwSEjEGkk9cajxMxCpDt",
  "key17": "5q9YJrb9DqAGSiGg4obYZwUxpJXQV4D1voE2ryTMKxkcEAV39WSFEkEtKT9wVpxCuGWcxxyuYng8fnVE2WhadZDS",
  "key18": "4FgsZBoXtS6PTT6ouswDgfPLQmUbWVDMH9JZVkx4wbs2gV6YtGeBvSMyCTDxBja6G4KPvgUezXhUWtGprmNL3dvq",
  "key19": "4JfHowg9HSjqjyxZEWyCJovAFzHQx9CkBDuT2K3ugqXKmYnYw5sFF4Ch4YHGeuDEZCRdq6AictsUQG7ZwgJ6sBwE",
  "key20": "2fNhCbcP4aZJ3TxR95R1o4vrAMURe31k6khVgS4it1U7KE4uE6EpVasX5mMNg6Ndz4m7hTJMyVUoDW6ZSkFxeGvD",
  "key21": "D1pwygLpqm2QjhFi6WsvEJymYSTgf3gE1QZCFJzZbbF66paZCBJ64i6PR6r2j6xfzdL1vHsrgnxoetnUYSDBSQG",
  "key22": "499NEuYUCzaJ7WkR31kfnsHh2sUre6ys2w6RPjhAX9pK9nn4BKAyc6DRS66RWEgki7zAt13YCE5HbMRt2antaNWJ",
  "key23": "4y5D5yPF6Bopz29iFvEmXmE5yuYLLQHySreJ12viSaYFb93QkMWE77vikPMe9piyLNsztHgfTyRPEfT92235jvLC",
  "key24": "5m1bP28JDFiKcromaD5mFixDGVTyEFU5G4fwozsXgEskbMQPFqdXAU9ykuXTgWUqPM4cKumeA8BSsqyyeBBXotAo",
  "key25": "3b1TvJWkd7YkMFt5o2K9X56XBVXtLbDVF4vzzwVMhPGQ16dCrZX2mTWRXeDaGveqyvb9pXEBSaXtuJiLN76Rbm2r",
  "key26": "UGb6x3XmP9uC2sVcZXDjwWXgbX8qvNb8GMurJ16AQ87ZfRdrgJZySBMfDGrJYNwJiBp4mFz3XokBxLPRhGBQ3yK",
  "key27": "2SQKxGtyc2sNJQhNwTaVKTtwsNGmjM1j6LYFvZRcCeQyZmVkKHtEjmnnaPJRJEa8nRj8NeXH3xFbEuNfewsA3xZ1",
  "key28": "5EARHVac5a5vGBZCkrJLo66qKpXy3LrW2JaBTX8TufyFtvwK7VDjGHZr4SSLfjesjr1sHUkMnD9FaxanoH1vamp6",
  "key29": "62mJwHEWLX4JXURfDLY3mhnxfpzVrzb3mwgx7k9KxePgqVNTzpX9heGgkn8ocMDqwsbkSNTuCDVYCB18LmJNwPyZ"
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
