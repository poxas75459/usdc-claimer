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
    "2c3VoPxGHf6XkQnhnBsJUHGahmuMFbwsSWUUwTg52iYfze7CJsuuqmeb6Ld4nkWCY7au5Fm6fYDXnA8w2dfN1ycn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ReTNF2U9aJdyyqnyY41VSB4dS3y4pZTcauh2VPXXGmwxn8TDNzRo2ubPhLFwaGw7DKAk56jd66uNCNQapjt41ni",
  "key1": "5HnWMx2P5uX3ESTi15o7Fv1bGERT5hEZuEoFJsVsi9H6aR4gFCteaL1PCGqp7RTCtccLHvf638kSwPY1wervzWH9",
  "key2": "EoxJPKmjnrjin7HCBxxdEjcpggDwmAvzAneSBJSWgY4WG7ST1NbZJEeT2d3qtNeffYTXcKFLV2yKi5beAc7KUr4",
  "key3": "ic9sgfa8rm1kn8QvXr2hAdVzZotUueY65WjNq3xm32onnNx1T6B34nzfXeAEtz4inNwWkgmUuVqnEeL1ncoNDpW",
  "key4": "uBCfWJN3szKtTT3vXvr5G3QZ8T5t7nxsdVVLvoETwqSY1MZRRmppk8HwcjmGtMNXRf4q26FAG7DxcNxKhUgAM63",
  "key5": "7CYEmkZEXzhB76NcURfGCZGBNuCQRnDMnvKHLTQfnkwkYdMDJtch5tvKoe8iDbLmhv7FUPtyd9VWCSpbWuhSmhP",
  "key6": "joXaqcvKtWSVi89LWZoKnEf3wKdXn5KXuYRoYSHQT88KPtXa7fKodf6Z5vHLFbDHEgLwwtBs96eHj2oZeggp1Na",
  "key7": "2uTXAu6nrBsU8G3jSJdbYhLJH7f6jKixcvSwkskDrbxLyqN8UmKkuRgEw4byYZhszm2MqsSvetKAXHWE3rpPT1gG",
  "key8": "4L5MbcvKi78tzcrJvbcGHbx8JbuiRY5QSeTtjeBmRefSYpgQnjMwDSFHT2oXZ1KxA9cAeKByvY6ynLr3EEdeYMtB",
  "key9": "5TpoigdWcTF3bE19SnwcV158N6MexhFmgrMk64TCuqaFTzrj9gfQHt9V9ZRALVhpcfKTPdjEErw7wNMnuN1VuCAM",
  "key10": "4ZYs2pzujpitrjkrV88b4fHqa4LDoLNBWNzRG9QgWZR6hqCEieY7CYhrmTc8ahFAXctLpfvG2zAeixX5HFveAaJV",
  "key11": "tWSsRxgG61MWvY1ZT58ptEHLKw9FFFeVRXBqky9YLH5fRN1tpwKknCkpPT5ZUCHaU4XX3ueQLGTsebzjecq9JxK",
  "key12": "5bDG4yk6HhR42mSkJDLJZfShVkCncrt8DsTxksH8NRgwUyY6YdEMLDqJXWk8AC81WjMzJeybpFgAgJiam571x1BY",
  "key13": "2ZaH9tQoYz1hZbjQ2FvDjT9P4AMTPxJQ6f8EnRXoNhuMQscJTwc8yfKTK87simT54t8USYm4juxweUheKoU7vZvb",
  "key14": "47Z3GpszLd8P5dV2DsSP6rVmRFqqds27SYCsNCpnjmGmGKjrTdnr7hqQqyfq6gbsHyCSAh2XD4d6uPzTfkvomvTo",
  "key15": "5LH7ZG7QYoYA2eQsFyNNp4SQYkbUMAUZ42fc1pcC7auZxFmhX4LMiohnzzoKWwhJ7rSqBmnFh7BfWtVpB8x4i22o",
  "key16": "2KZQbpNkcRqGaYkXXcCdhSacgQuvV9Hovm33M8ZyyRJbJJZqkHqftpUxvmT4qP1R5Z7BYDZ8FQGhLfTgkYPEyPf3",
  "key17": "4k9vrogTvtqrXihoBpWJDS97VWWqufD9nRhtzQ3DqPzKJcswwQMm1cmZ3sGwfJRgr8LHRK9KshaVvNxtWjrgz3on",
  "key18": "4cgoKH8yESSs5HUcrsxmUeVcK24ERSvw78QaeH676ZvXdaTpAnjrL1N86AhhUZeN19BFBnVVfUkdo5wA4pTByeWn",
  "key19": "3dNZw49GHzyNWknu8fix7243g6gi1WzehiLpBBkA5oHmqxfqiQLNzpq9u8pLkoGqyysXk8sJfsGTzh1gAa6ZYHV",
  "key20": "41ZyeRCJwPEBn7orz68edhGSF42ujQrZbZynBRVYEsTWn5PDM9AKXabaTDLKphiRanR37DNEZ9c4hi1SBarHjLJt",
  "key21": "44G2qa53gXH1iEDdY5mqW1Knr7sjrGvmX8N4DbhRMiEfkkABHPLtKnQHrbnDn8fWAMK1TnUycgbYuiVmRxwg5Ep9",
  "key22": "5poHCCPpNc3nmdo4yqDV2HmMdiYSC3W3ffLHSFviNipypQa9pxpJpeMxvKDMAhbGytB5UzNhpNhqyWx3JYrcsEe4",
  "key23": "k3LYJxcVXx1xCFGDR4bHNLdU8oNMT32Js5jkU2QqyHcsBhXEkXyFdb3DaQPi7DtDRbyxEGeGNJ5U7Pc1b7f2aU6",
  "key24": "4TaQH9HNoBfbihaT74NSrNHiXeMQfRTXSR1Wen6F2qXmUgfyL1cPNGzHNXxw5okKF9o4RRg1ajbLfEv8QJowHXF6",
  "key25": "3EeQXJMMLCELWMjNfkgHeECgoA1ujK39vUVUQGcpTSD9Yr4Sz1SqHcuTFDtZj9ToR5ubWzpMPMh3yt7Lh5fsGakv",
  "key26": "3nRzg3uDQ8uU43XMePzfBmcTh3tJx1nn2dzNjUkZTrjwKyZ4mFbsVVThhdjLzJwoSHbKkfD9xKyhVgMus6iMXV9A",
  "key27": "5R9UEBeFfNiMxdcYss1iSVwEYrSf4VhzUbAUEbs5DNaSRgLpSt178u1SvzjE7hJ4QXS8LX8Ge6ia2AQjw93EGfFb",
  "key28": "5MDbTrL6H5D6zruD9y8GZYNCgrnNWxJ2T8SFiu8qpDQ3vmoxWQWQtH2kGc6XbcVJjfDSAfyq6hT8ALvPqAdFB9cu",
  "key29": "4SXqy2NGQRK61p9vXa2VyHVbdQnB4Te2btGAy2d6Ezrm1RSiZG6XRQ2NpJwa5THR8XxdLheqSCW6icb852f6j2U1",
  "key30": "Avcs4J1Qj6KS1u3kJQkcbVXKUgef3kfbWvCkrzmBDqomrceacgTFxM2BywxwePSSvfpYJjxk4cfSB79Fs9g8XAf",
  "key31": "2YaYJSmc8YwMh8Bz2B5rVB6EMMrtVDemckMLBUJM45M94QNVvZkXWp3apBAEJ26C6FwUN4sGcgvvNwzQknsxz7bM",
  "key32": "55SJBGXbgJXMz9jk3Ky3us6XFPtYJUEpjszHUBCwHzVRvT6d8WLL1BesKiiqiMM9qUHZSw4DtRURnKXYDWvoHxrU",
  "key33": "3sJsag5EcXCjAaDyVnVdzMYomGnM7YDFoVVEks3u462QzvXSMa5WmhdVqFjD3jw4rK97zJ3x8cNXvu69hxtB7kjV",
  "key34": "4zz9DNgmqcxuLKx2pZM7zA4tE3zmwoz12ph9inhm16y9jvnSP2FJkqkQbZPtHLN3MzNuYJJc6YwNfFF7NZgQVmGs",
  "key35": "3tcPnK6rG8cNsE3uhj96mbwi2Ntphfgag1ZqrQhcEZbk8VftZcksSHMM5q18n8tReQLDb3enRJzyRYMMf28MBPr9",
  "key36": "4ngq2V8YyyGc5hY7Qb33NJdy386ojcguqZBsZy48Dyt5xHAnkbqN8zFhLsgH5f3nACsdCddbJBEwn1zdjAAdzHSB",
  "key37": "3Gt1ewLtJXciJzCdqLe8iV9EetFj4wNg5ZxpbvPw3Xd55ERvttBsNJUNZnxKA2qpEURFXkoGymuNbdW7FJXwQPVi",
  "key38": "2SA2aNbvtneAWkntpWDnZSaDWgYkE5CYDhE8RKvfxV9xXZUhRPrQ6RPtBA93bdiKiSCNER8M7v4SbybLUwHLcCxP",
  "key39": "5UerzJhBHQeg4QLRnJ5U7JSeFqS9sEL4gDn36BiSEuG72BuXiQHJQXCd9kBDbC6zXSawg1Aaxn5fAwjzxB4NHjQi",
  "key40": "4265hzdPXmJV3g6Htha8rcco6sMkUYQi1CkB7ERvBMgk94Bdm2GojE21XNRoAHYgSqseWrfrbERdWjhcrHSjoB1X",
  "key41": "5ZYfnUm3g18BMs79czCNKLR7FzYskxs8UZeaZDxAbo3oeY1F7m7k9S8GGd1z25mCGRuc7veLvpqSCDPiMAWJTCYd"
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
