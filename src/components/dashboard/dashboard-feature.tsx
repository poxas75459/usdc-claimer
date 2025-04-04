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
    "3eezNDa28C8FgjBHit1mfGow7ig2sp3GZybR6SEyjxoVSAnpNzdNRUX1GNVTZz7UhXswUh6FGdWjk5t5NajmkToj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hDqeXvYdmZUyJLVqdD5AMTwDdaL5No4sLZ5vQQgWeoyUVMWvAcqW3mVyBD29e8Rocakhs2rKcgjpimXZjDhzz6E",
  "key1": "3uBmHTiGFWVcPoMb24x9MWJHdgGwf2kaAG9fGZfxFoeA3XRouESmte4xEfcYj25YUoZS1bgnhWepfmmS1wzgKhUN",
  "key2": "2Zis2svNueTdZgvG64vpU7eW9nxRsTpvBYMeup8HX18C5djktkxN3JNGufhVFmgotbUh4ReqvRgEnAGNHLdZXb8U",
  "key3": "5aRinSSrfAGdHCwuRVYnhxAsuAikBwaaSBgU5d5Hfnkip8v6hdCumSLgCssVfG5ahC9nzQTsxTjE3v5iURopA4oS",
  "key4": "5q98vRjk8DEemwpJtE198jcWrBFfCS52TCXVC44wEyE9i7DwLQpPidnAEG9pR5dBZArJW8CSCmSboaNA7uraWynf",
  "key5": "5kxSLd1Dae4NEXKfjSEzNVioRNoXQJJat82NV1Yycpuwwx7xSZgB1FaovH8pSeuyywCWkgJHH8KraYZ3U2x1MxNW",
  "key6": "5XHTxxN8zH2zVWdmHX3e4h8jg8FRbDaz4apZoRQu5wrteMLMnpGwBT43YqP1JZxwMcmAH7NxcB1pGEQb5CD2eM9J",
  "key7": "3tisENqejx96e5FFNhEtrHXHmidPKDa6kgTktDfwTymnoLJ9fCSscSd3uLCa8zX1Ysd3BLhKtQZRMDfcsTG9ckve",
  "key8": "stqfGFzwpSjhsEuJVV4rJ8stXY7VXyBurR5V9RD54VjvTX7LcxbSWe8TaBToyCEaASuB7wWZyBncYDXHauTVfCF",
  "key9": "3Zyt7TzAHK1P2tvQQbpxkEHfkS2gdPBv11BE85gu9t7WqmP782j4KiX43yfsv4p5GEwqSS2N45UR1S3jDp3eQnF4",
  "key10": "3mDkztrY9Jq6WrPkH3grBt9BacrqQ9nQjAddzFzJ7Dhvt7KAL35Kyn1XVYj2ydt9j17TEpurcbwghfBnBv1YXLJo",
  "key11": "3Tdi3FjwVWq1FAayuU9h1HMvCrj863n6Sn7jKfiRyJj86AshAEXgwko7Bcnn44feij1tWQRqFTYczYw3mj2kuJXi",
  "key12": "91pjsn2hiEXyQQe5nxVgA4WJdagwcjhCHR6UM1sVKBfESQS7ZWM5uHAWi9Bg6pZGgrfHwXwAMvSsQqi8DBC4Arw",
  "key13": "3touK3nWexx57pRxnGXLv44WRzzN85pMbCxLxKkswVkRiFc45aJezLUw64cqEPzVf3XdV7jpbjFbQ7Nrj17cyMJb",
  "key14": "4xBQRfzGj4gLYEMfysU8rP2CcGyiqJ656WiW19rWCmnbkTPyqHV7U5nTr8CJQiXRfoLitHFje3acBnQdftY7y6y2",
  "key15": "4uwPBGd73GoYhCQJrcamenMzXXMkS3keHhNvuBquSsqbv2gogsw1b3AqVK1fVXtm8Rdvc4YxhApWt5q82AQCBxXC",
  "key16": "2987hByesG4uH58co8dmqcTZrLD3HECJh7gYbTRDf3YLGqumUMWfns3B17Z6GYw4JZUByPVqBGUXUfs9tYEHjkLQ",
  "key17": "5hyrJgnqg81aYRdH5QtWmf6K4sYRmQfqPB64FbcwURki1XX7JuNEhTKPpazsRW2PWf1DukpJ3AmRNE1nPBoAr8Fq",
  "key18": "34SmpJpFHAgXzXFge6nrmK3Dm5vnbeRDYj2xB5pkvTRwg2thv11VqKpn5umfns3TywnCPUNmNXcZTRHz9PuHvypG",
  "key19": "25M1Y8Xm8xtDoEHQu7upUCM63BGRGL9T5RBctMs3wJ567mkgFHcPiVrqP6RCMdwQ7S4Aw9eoQXMMPhAs1Lf6SDHA",
  "key20": "2BxrQNqwnUbcJqwq8ezqeNQtezcV12eWMBC1mGkyD4FaA8CkmAH6gxwJLVrJpn2dxcYVXi1vwmSuaMc2d4vizqTP",
  "key21": "Vsxd3VJ7E8DihcfPY1ndzHyv4QFtrGs1rfrKNNqwra5JwmKj1tbtRegW6oe3dFjmmYJ5yQ36t9Hk4HjVY39Yd6F",
  "key22": "41JNge6q2F2SGgG5ktTLf5pDrsYeJjtL89rrVXidhAu95a6oWGsRSDJNWgYL6342fPhvGkYgtemWAUd7zCRaXiW6",
  "key23": "2VZthoxEZhksB2Wfmf4GNykxhYrMY8rk74bQnxg25CdFb1TgCLmz6Sv5Ti8x5XeSLDHRHCz5xtx5iBx4YTACpNqc",
  "key24": "5TcqHPvhbTF3of1b9MtcKk83NpwobGmx27faFZvi5J9CmWNbGR28VtmVH2kFYQJAyEd6K8SHNVbrfN6rUVyhYTdV",
  "key25": "3itZnVQMsUrfhqNCxkNRqQ8yZXVHpH5gDKLJbUvTzt5zSDicckGz7WmXQJ1eDp7seuAWrBS7JqqsJ5JE2bQuR9uF",
  "key26": "kDczdwT2oxw9uEJAdoKo1SW6v4bxEMedakTNPUV1RmfizSF7Q7xYRbujm3Sg653jKtiRxPvLLt1aipkBUuZ1PNU",
  "key27": "4VuPz6r83W7TnxNVUt8S9ZtCMvc2jtiJ1YRPcNfR1VtA9xejSMfMu7LLg1jki2jQSC6uzwuGTphgyxFzAaUfB5mU",
  "key28": "3uWdHjgEsCTxJsiU6L4gnAAiQywruEHzQHSMuNnmVXuNS7yDNKdasjvmaFG8CJ4y1ki37UTifJJ19EWA7ywbxgUY",
  "key29": "4WVdjUAoq8Gc6Vb8eorCb92wsboLoEJUEFMz71mTP8Tk66i8487oJqZEuZkWSjWckk5PeZuuAd8BPWC2u5tgFT3W",
  "key30": "5SdziHSjwPrYo5homuT3LPpW9xoqUrHEt9CBcGdLpjbbTvbaveALfXA5kYzyoMj9qpFhwsVJuDNxk6a9RpuXYBUe",
  "key31": "21udTbEMZmZHsiHvPRsr489PfZgUzAyrYFAATB1weRFrwZ3xnoDEoFatTG3UpGyCw6aZNx9KTyRe7DSseKQEFnP9",
  "key32": "662kN5NZmsqXJFtXeZCfA8LkHQCZxj7zFxr2o67yB1k6Sr372gsS9gdbaVnGhhdiAcn8JUzywJXMndnaHEru4v5r",
  "key33": "38zW1xLc8sBGp8jF2LWHKRfrGxQvThMpLqAFi62KFnaMjUqEXkNso1tHPiheiFNtDziDQ81VSESns1nzNmKAxv6L",
  "key34": "4FQCduHM3BpKwuwgVJBse9E5WS4rAYCYCks68QsEPVfU4yNSYyDxcfXK28ZiBbFvKvZ5jYcQSBqDXu57kFDHhbSy",
  "key35": "34CgoSZVzL7119QPudUJ2UPbMKQEug9t23KdrATh1YKASpBQcwZXpd6PKyR6S6jedDxKoDkjo2wEwNPBEABCktSV",
  "key36": "M4V8MCxRnrpx37AkqUnz8aPzUMNmAiXhMmPWrk11ibS3mMsCF4vvNjHTDS5f2ZfonPYpjJ9RKXFWmGpmWkvTwev",
  "key37": "3F4ZvwqfPpBVhTmpboSoMQ5UShZmGkoWWaxXiJu2mgfKuDh74sJfWwMtZDnEnDpkAPwanzJb4PpBmQEGyddBEsLa",
  "key38": "3AETPhF4BrM3d1XskuyV778uxdL5qKB8ajjsMauYVHtppjZCFX8SAFsHHS3jvP3jTYhJbHiK2myrdmG6rCNbpAaf",
  "key39": "N4AJ4YJLGSQ2dCr1ysW1Di2XqknJg5nqXPCNzigJTVDxsgrJD5pnvfUY8eAE6yFpUQZNekguf6rHgMU3LQo4qqv",
  "key40": "LjSXYZRp2T1PAUj3mn5vWhcNbtRWTRTdoSo1t6PdTZqipYWLKKA7jR4N3Qj7AgmE1PoUNwfACyd5NK2wTu3eTPC"
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
