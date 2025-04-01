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
    "2Zh4npHjyrykxRByNyG48rEhJfrvMpVVop9uHQauW9PYTSDN9jR5uWRqjc3JEcVgbWw1ZoGBtEGnS1fTKTv3MDBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45frEpYR5XYW1eya1tpUrXUrY7iWwoAVAQ1WP9U2bPBcS4mdc1Dt2ifSYFCMPu4mVkPGAH6ivWyZrUxf1MfiED1V",
  "key1": "BGoNEtZiAF4gqz26seVnhyn9nnxmfyY3ry4cy7wz6YYtFvgEjjsxMHyPM8BVEyzzss9i8QDSeDmvp5YCaj3K84g",
  "key2": "MpQGQEXxXQ7kDyKeZt4tmeCEvcwvSjgeEuwKqRHYTFgtkxkLcczWkYdwcJzXLRndHGaAtm6N7axxEvX6v2u7AnA",
  "key3": "2T253mWPL7iNps1fLg4Vpo1Ze64xkbSdxXi26vWSdp58PrFTLLArR44nDYX9qHkG9wf2quhDM5CHZdjdBSfRLeCS",
  "key4": "3kvJ3hgdaPjsNsY8UebhajEjZMYTea1geevXaqkMvZZtKcs23GKaFeMZWCV7Vi6cc2RndxSQspAqevMtxCuoTUyM",
  "key5": "4MXU5pESyCd3LByanN7K1Km6XbLnfuKRVLKDpDyjkiQK268ctAmivcM7erTpVwpzqxBQD9aCHo7fNpizfbojSkSU",
  "key6": "5irNdf7RHQxiiH98B6ehSum3AX8a5rkZsdsMfW8mFqwL4YTh9QNN8D2aAjeX8W9kZMTLFxBr2j6UeUGBuoscmmWH",
  "key7": "5Fz7mT6SrUuJwyEq193pVktX84UhFHv79eWS111AiTkYkopUtoy7mjt1ojQ1ACXcdSZMH7rX69pEYGXKJ3rae81u",
  "key8": "3F6YnBht7HE7z6ixjq713SopS2GYNRK6zkHWbWb3hvNzDNYbQ9svEZmjg1kNzBD451p9Cx7UCCT6DRCDgRWYfNCB",
  "key9": "5g4GSRLMFgGHiavGEp9E56SFMLT1TzodrGofvBqFvaKXQfBDmYS2wpWuj5LWEjG64ZG74TuqyXiKqtUagQab15QL",
  "key10": "5kBo9ayjo8ECvuHbWPY1iojAGeXbXyBNcxyrfrEip1s8sS4Tv99oparjUSKjdh3ZgvfuWpQ6ciysTHnLWL1dDR2D",
  "key11": "5Zn5Az4Sc4qh6Kwz5NxYA1hhv8vm18tLqyFpgWMfRNj7rCpKMB6stopP91TggbsFPZyd1tBvtFVss4AUBTSTqg45",
  "key12": "4rnPAuufX5U1HneFAWYF7YofRQG7ZtAGz7cDjByFa1v5iJCCfvk8wm62KFUJmH5M3CedU2yUG3Pu2LcXyVQFFQ5p",
  "key13": "2ST3Q9pCpKZ8L1Uv28ysQ5rz7MaE8Ypr7cTqKSpn9KH6FyT1sQfMSY9sXhrvF6LvWZxEJwEpqkw2AoAstj4ukeWd",
  "key14": "5uzR86DzyK3cwCdsNEsYFzJwnGnWwVqroHXN7UD5sr69QtH6SRrdVKBUABN1PwtXhHZNLypxmhboMJtLYQesbXtD",
  "key15": "4XS6k518g3qui6u7hMPQ5mQyuZBLhHgXJRB1xSYGZMx3nNi3sJxQ8ixgknkmkdeLgcvdnjqMtyR6yqYp4fad16uz",
  "key16": "4jBQKVhJFshdz9FXiSifNQTVAc8vS67VJQCGgBG7fjJvj46a4LL5p6n8JSD9sHcbA6f8PhWVoAjSpzw1BP5q28iK",
  "key17": "4iX3hH5uC42Djzm5kexVuRkyVx2UxGgeYdbEQmqtf9QMWaGZ1NvNeeohpCWUgSqW2bXDYiBZ7F8N9tpPPHDZH9ej",
  "key18": "3F5aoLZhqNwvZyg8p1tKemnmGKZ8kweATSHoiRgM4Q6znPZHApqFuKvdNpG9zTZHaRsom4Fv6YPHJXXaL3Le4Rk1",
  "key19": "5xwDy9jAUEPgTNQmdK9fwej8zm9UrihBFW2xxHVqH2rydJbVSoQxPvyc6LseajjnvTeyRPmriodaf9eGAdLq17eJ",
  "key20": "5jB7VAcL6okSFRsZwJy7deo92SAUd9viNoCmeiJ3KkV6vuaiFWAYYQU8FSQeYpz3LWDKpBDBuzTMbn6odbC4ayjP",
  "key21": "qqNBVZtnJMeQRUYN71iGaVaTnuGnaAZsJj7PEsA3Dem2XLXVp8c8TNEPMK9s83HJTJMwsENkyq7vHCEGEzXvZSu",
  "key22": "x3oKB6jFgcTcziEWM4sfpE5kjiVAjcKVzQBXYACko7Lp5XsxtCmeyX6poRBdbZf3mDFpy3pLko4dA9s5Ndpxso3",
  "key23": "39QYqKbMQ2Tb59KwZnS1a46up8D1nKPkbQGTLsvrnraxUbMu1pY1hSnJawvAkoqcZRDsFHRvsiU82i7X9yyhJCUG",
  "key24": "5GLYwfi8fjqbPsmutb99NtLNBmVLWYv5BTU7wW7tD1eTpES3vBGFCwdzpE34ic3xtmL97NsRTJUYD9f6cxQb1bPh",
  "key25": "3d65dLbLQ8cGzhupzNpJDRqoocfZukvYi8DbRXn4ifvQaZFSXi9H9EHXQm4PFQjNWgcmMHS7KP34P8LfZFdtaHNL",
  "key26": "rbP3J3xBCYmUAAQ8t7XXobQ7AoSjxFV7uV3esCrysfS1Sem7zARiRFXUh2JXjSQZ1zXwD1WzqW2Uh5XLaUhBJ41",
  "key27": "3ysRnwhjuPgRKcftkbPnCnSAzwy3W5mDSaNVEePhAWKJFVZRhFnnktdTkiXjsruh8XoHjwPw3pSkhHXeH6RNNG6E",
  "key28": "xpT9NQFRAW516fPqi31ki71gZBhDWgv1c6pL1Wr51bYqqGHa3GHEiQcE7jeatkL1PeDZLFDQBXwevdqrKU1LVD6",
  "key29": "V4S4A9QNSE3hcm4arn3FFjkeTqZvv6GqQry7wuzExtNAUSEchi6vH6qiBe42RH98uyDca5FT65Nd1AgVyoFWWcN",
  "key30": "ZgaEXN4L6QyyoRUBuEcDBEA7ZPmrDDccKDVMv9LUeRCYUU7vPHPotUBSfvCfKFe3AjU75ATBExQnuxoqAnkPTBg",
  "key31": "614Hde85kAX7KA2XjF9bxGTJWnQf4nCu5GB4GysDbDuYy3bQYTWSDhkGwR3v5jm8RAYjN7QMCZ6B7vaTES7MBVP5",
  "key32": "4uzTk6dP9nWze42wuw2o2iNmeS6pPYjb1t75i5v5omeWmoExvMiug6yhiNcCqLzcvazrEUPXJEjrQg3c3P5CPhG",
  "key33": "3yqcdZL3KSH7wp1iTDtZZaqXP1kS2Pgycfw2MsAHVN2s4F85cBJstg4wbyzinr1EkJVEF4YA5vCr4HFmLfHXWq9n",
  "key34": "5hgsMgvZp8bz1ekHkHFHX3cPr5XeHwUbUGw1DPSL42XpbfnUH4VprVAxciNRfrPHbGoGh1nLr4AD9LaMMAGQuvDX",
  "key35": "L9BQNeCpexNU8dfaesNotyMHweLxttYT4JF9ut7qJuXLzp2UD57iKAX32b58vPnGgN1CJQooHRzZS7jpFixEz6x",
  "key36": "2RbAqvJHn9nC4Xp3DkppYSCsUHBF52hDVEYbTJw6U7dxLpRA8WFSRSDHK8uohNg5zj8VnK7tWRESoP3nbNRdnrxD",
  "key37": "2EDTXcZz9sZAkoRHuhJT9VZ73ksjiJ2JWqftriiLtJ6BZG6ws7BZyDMFMtnzVf5MqrTooPtgbGSZ3crmvTyvvTpD",
  "key38": "5ZX3wqVZfjRmUdvrKdvakbLrGGZ5vrnbs1EE8y2EpsPXb8TFTcpFUM5GBKVTHqTdy8EQLgM3w7bGz4kbehpcMhuc",
  "key39": "5vVgUr9eeUrTQsgLxKfLRrPmr1Tux685dfFXPywoq4Hq5MHxfQgNCbvVKfj1SVuJ447Ps3o6sdHzmmUKMqz6q4Dp",
  "key40": "7GiyBzpSXbtkte4pE97xsXLEh16pUBCPbcWX8W5Pp8iNBURLvmGGcUq9drRV1RQ3mza6xpUf9fMcC1e1himdiZt",
  "key41": "2SboxfyQjvZdgQFft7Ar7iFxkgUJ2PpVUh8ygHxHhXcP3sDEMoAAouVMBwnyqhLD8BSxsi5iSB8tE9wzyqFCDL3v",
  "key42": "4biQE9BaKgB6p73ALtRDxRNnDj1PcKFdxUqjaRJWnXchDRT2Tb74aynCQXRaKKGA9HHZgi1dCHhbp9SpibhtJ9xV",
  "key43": "i57GBgUEmC1Tkpbjh6skepxZ8wTLWNSqkjtGjzCQ8vpjQmMAk4VSwDmfwjPS39oEwFsdKeC1zLBMjaKBoa69TZh",
  "key44": "2iJgQzprKuW12pz93fNNPiSsxhs6sGWLnj3HS4hfzoVghNMibgMpEwSXvezhBp6MEe1zTTEiicFT9UXmSfoAdPHo"
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
