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
    "5yNp2hszmhqC9bHn6qqQk4KDZN4RqHhn2DzyBc4SXtgWeKDZVKV2gqzu3xow9AtjFHrcBe57waKXDN6YLjcC4fad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UoSxJyWhdyWgVW9vc5Xe84DkXvDxL8AhVLHz7556znssWU11X329m5EAUcTXbE5L1w6LiJ66fs3Xcvwvfcr6RxW",
  "key1": "3SyYiQkhEiDJo6jtuuXmoPWDYwwaz8ADEZReoGa8HL9mjGfAykTpsYjiNLnJa5vGMDa1r49fiBSwau4P5khP2ECg",
  "key2": "CnS6fNz6QxVnaHk1ejeQBjg9UdFwe9g4hBYCkVRB2Gb7jwUbA7XoZ3L2tyggUt3X3su9TkZJdgZTp9BQM2hWq79",
  "key3": "5nqXjYqn38zVp5b2CvgKLLdmtUFwgdcKu9yffBGbhjUSuArZTgJ8SQ3ZsnxaYem2v4H5GJKKuArrAwD2SAnrEHNc",
  "key4": "35zCNbiSb7LYpdNGztxgHanZP5YBF9FG4MsddTiZ8AFbeGyJ6U9yFAJaC2v7LVs6CwfJ3VZqGLzNQwyyiesqWWEX",
  "key5": "5o74F4wgvf3QvpNHMpq9xuHz34WPmAnA9LVhEiTGtJxYgJwF9gjKzZUvhHrfjnbdRcQmkbtsQ1c24r9azmaArWcg",
  "key6": "5Bjq619y4LLRyaiWSUiGqmFpB5PvRBg9c93CPtwdD5DBDFL9cJktEkndo2cVBnTX3ownGFUex9QZJRjwxTNx6sya",
  "key7": "3iVrc1mwC7G3bSNYKSwEuC7Fx7Tyjdgs3vEjZeumcycBSL4iiCggbU1TfeAa97LuxAysQJd9wkXyUbpbhNmPFY8L",
  "key8": "41sfM4uEBBwCQUSNbms9RZSj6gdttFjnbMueCJY2et4QPMNAouBkJ7psbBTtz4YhHY3Fr8GFP6r7EfbFyeDQzaTM",
  "key9": "5h619RyDtcwZz3YBKqGkjryjcsGmEoExNUVKYBUXKoMGudcCR1BswZHuB6ykSuhAcU7SPdTJPK13jtKxXg86YgFs",
  "key10": "53HVEomyerAsVpr4LhNdqxRoXUJ4LDXc85T5m4xnemZQ1fPYSNosobNeoMvidQ5iySWKKauhoDBDa6Gkq5yFjbZg",
  "key11": "tHazi51cNKneekkxWuKLpFeZDAqdMLDQJrGdednjZdmmCkuUE7BpfPcRumgGuYQNCQAdRXPbgsjHWeHueZ6oTaz",
  "key12": "397eRe8XbxsQ7VTk5rgAasfg7YD8D81Kbovyw6gmFFz7qwyvzZ8v5yaaWnJntsH7rvbyC9Bia9sa7Qm65cjTjB9k",
  "key13": "4Crj3WkN2MhLKeZBnNzNKJbtiJERkgCcn8dLMC5tLb755HhZnR9ZmiLn4zEuaZqQEeNNEsWn9cXrVng7VSR9iqSz",
  "key14": "5zU9ygAkUk6vJJ4uqDcwSZyn8nNuK5tUQiTq9rLEQ36t5GaGdFsAWmheoCN1bmeKFzozZYyXWe9XQKRWEgLYvSQy",
  "key15": "45iX1NMtrte566QSgMTex7XDZPcFT5kfBNs4FiJosDxTpRcsbn4BXdGWARrPBkcK1nKVruL1Exxa1Am6xG2Qet2M",
  "key16": "MWA1MFjVgNwLfLGSMahwqgeV9ucTN1hE7qZHrVfJ5jnZxGoMhckmCBHbwitLEeTSSxGA3MLmZyX2Mrhf5GjJfiB",
  "key17": "28RzsMrrjadpZvHVtLymwmXBDtHzinhPwbZwdhqH539zmSAsQp6QW8umsz9JtzAUUYqVpxgdwMaNKhcBeyNiu5VV",
  "key18": "5Laf9S7jfjDToaFH8XdCREsJUXLpokBvP7n961n8a5M1MwguaUKWJsA3aUh2s1hLvepxzp7jvFANYi7yYR9YvY8X",
  "key19": "2BJPwEhuJ682dTNan6XHbaPeeivH7Q6gpToUr384Buf5JaLYd3oNWx1nXCW73vsDGxc9EzLGdV5xEupgzwELdwT6",
  "key20": "2C7gNjBJ5dhaSU1Ca7pHAsFpPihDYmfMyrAUDmG4ys4drJN76xbw65P9i95JMEK8Pkj6Jv9xhnDXUb1hs1H5TGPR",
  "key21": "2ZB243njMXsN98KWSUpRRhxthFee32daSrwMVSEGRo5QTEkvYfoTUREhq8cyo3pCqMyHrnUXyNbZYijMxeKueBdB",
  "key22": "qeLZR8EX3LvZ28iqhSxHDx4j5YJKqiGQ379zTo8kJwpTwvT34S3V586odU2yCMMEj8KGJtS3AaviHwci8dfrxUM",
  "key23": "2tYo9565wRGH54AkYACXVVNiFL2oQY8tCWvs6ZY1PTS4DetL6HTVJ2thmYfSmQi6jwbtcC4iGzZVdHJA6md4Ae1Z",
  "key24": "2g67nBVzAkkgBLfPMbgovQPmWivsWbMzUgtKuEN6sxX2PXp5WbL6qZyKQxKkdm6iFR3yV1KatpFzf6Jxq1M4nTDo",
  "key25": "3Vh1jHTWqLXyCX2aCjWLZ8UvZ4GGUJ8HZGASrNRPGk16rY6dV2v9KxoxY7PiHUCvLVHWUaSpVjdWX9TE8G15nZ8x",
  "key26": "4QbiSWdtyJEqR738jWYaYMLoTNgWmHaEYVoeGbfdupugMww44U2R6ZwLVC3p2HU6jz7fZdDK2Dzk4fAaAc8PVR3o",
  "key27": "5mm7RiKSjvpUn6LAxikgM28RzvQJom6hMtAQ94YTBBNyu4guoHo4Kdjdme6kMCTYHGBNd7TRUAgVork8SNjuSumr",
  "key28": "4u64znz5ag2Wzu2EY3jebmCmNcDifBEc1V4NNHSsg9jkXmPRcB83pDus6xz8GpRoCtXVj8q5QX7xjXyfbFNdeByR",
  "key29": "5KuZ5yNoZS8ZPUKgszNJF9WMjpvCX8V5723ZXHPhNwn1AzqpxKy57jMqedKZYSX7PvxGcu6k32Ln4HaTrcHA7Qkz",
  "key30": "4UKehSgCVqwrx7F1TV7xqEXfwbaHtvNtdgKjbKnPzThkvzi9Tbhynep1fvjBDwwUW19JvE2z5EUxjsQGi7rVdWhu",
  "key31": "33rE2adK4RqChRybyKzRgvbEpZfqj1DFqhdSXZ4pV5Y3jya8b5ffFDsqGMYydo45ZPtQFjYEgvbb9UeyVD8v1cKS",
  "key32": "2tzPXBegAsRcKzAxKJLAFAoRPrYPKzWtj2MZTG7jjgQHXnx6QzcKvcrr1MShyLwpxcdX5yohhdWmYHRbH9mw1reM",
  "key33": "A1QQuaK2tEzLaVhR4ms12r59MeksPnDYs3srALdLhsfhrpjL7U2VYsCruA4tjMdCAZxZE3qBKCcgBgbxpLv9HYf",
  "key34": "59ipud3EAmh1r4TpVgPk9gdhqU56yEo6ePewPwLKSCa912dAJVsfF7WSxYhsTCQynDomdyRWKM4NdqVo7vYfAskQ",
  "key35": "2XwR8S2yUCosrKuwXMM1h8ga83iuxc9p542dEM3Fh5RtNBAaeBqg1XcqCv8jRixGcx6Gg38BpW3hWcFcF3QfNtJL",
  "key36": "3omDqWLU6KwdkCqkKcEgjHqgtJZeTPmu9Ss4i98aHrA5ZN8GeDQxgjpDaBQo26nLN8gbwHrpW24P74dNTnkeyDCB",
  "key37": "3neQvaJyfgMLccuYXQ5Yz7BXHQ5sNjNxwWuXxdr3WJLy3KaKC6nTybHD1ho9YwcN2BUxpg9wJmFHj3xs914Q2diq"
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
