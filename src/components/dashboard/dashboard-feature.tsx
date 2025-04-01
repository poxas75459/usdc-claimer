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
    "2nM56CG92q7jGft5UPBcBPeGaafYGTr6E1P1zC9wCXNttrDXmupcLLCGwzPTPaJkM7vim2CWP7h2bmg7HjRCvFfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qVypQWVuqy922NCGdoBHdqiAS7xFThgUva1ezju8G6fWVqEazjWPwDwufL49YZdDuR2p8vARCqbvUfJDwThbzDR",
  "key1": "5cV8wvQiZmB9c9BhBfeq9LD6xapTwcwixSZEAERtcdurp8LdX5zkKn9KrAPE75u3kpQNnLmLEHVLcA9AUeiup2My",
  "key2": "3xVrsz1v6uZgJWiXFKZ7XhCiVxwxpx4ccEun5RXAbSFHCcWQMJzsBPRn6d2cCKzCZHyqAvW8PKk37ZbCDTP6pGtF",
  "key3": "3FFzWiphnMz7nS92Drr9dwv7BuT9XUXdHNUsMnZFAu6Jq72XJHiYBxDjku4sY6wUZ7meKRxZ17ogXLNxQgcrDDH1",
  "key4": "39AKqYY5ReLUYDyRKJkn2AMyQ2U8tzdxmHz5nRQo3NoWgCWkuC9AQvR7KHFtBZo7L7CaqZxH7okvWSnmoNie7QSv",
  "key5": "3rkbgRsmf2uceqUY8rnV8ddjeKpvZwvDrabxM82EBrRwghJRVTotM13zZkfTh5PtsoYWUDn2Gn72UVmFJfcFe3AK",
  "key6": "5FS6Vz7SXZczVe7G35ghTaC2oXAmAwTt6Yb79b1wwjvQyWGJbw3xfXKj1xkKwPvRs3zvg6iAhJghSkZwjaST1DYf",
  "key7": "3Ly73HPJVvLRt6ay8j5nP7BtgpRLS7FRP77cMcgSpr6nopKs2ug3rAp85oz45z4mfp2EjQLzbTixD6bncHBUxhdS",
  "key8": "4UHkhNGLQyyrNG2xjmwNi11LuihdzkmDdYE2NJhd9dehBq6p1DNqurffMKjuaSc6MvzYBkpYtLLUSkAGnTMZyYLB",
  "key9": "65yqiXzGtTCssvUvSQEdaQo2FrZGkJ3kUJLm88LAFt3yLRo8B3V7UyiQ52jWfMibp2cHf4JgfmphnoeAgUyRH9Rz",
  "key10": "2yzGVyAJKDwFzqvcV6WAz8CvkTS9ftWCdHob6tPhF915LYSvoCsnuW1SdiTkqWM91WDgJpq79D89LG2QTfqnTFi8",
  "key11": "3FsVfjmFBt8o4N6EjiJBG8fmbfbq9zPibuVdzUHynUBBixPqJxN8R421VUSwXdbAyRK2xhwczmKyoCAKjBMAdr33",
  "key12": "hiZExjAoifjvAZ23yu8FigSgFrNjp7h4zfbTUe8QKe9dsuQLUCrFoNRiThFKviHPFTLCHwSoJaPgPGmjfccq8c6",
  "key13": "3kgRNyCB3oMMQ5RvED7Q2aLXmFT12f7FeLzpqFuCsikNNvURbdbaLvJnMxXCiMSpZbMJ8dumW5pNcWzzn9nuFx5q",
  "key14": "42UfmT37cFMMend5Q1vFKtJjwDRUtAVfpckjaDe7vLhUdXY2vYdg1eYjjATrqJZCoN7gEEZpr5VR5XyXp8h2cLaK",
  "key15": "5eC1mStqaTGjQSY42wXHLw445tb13TrrekVYZRcYgDhCYe2qb2pqknoJc5ytFaVF449QDLXTXoXtymXYnetixkhG",
  "key16": "4GbVFTMArWLRhe1Qq9jMBQXB2n7FFUnePXrzkCJC693Ur8Yr2DKXnS8Xia5cjwGAfEZ1nAd9EBQNEv6cjYumyugM",
  "key17": "2B1i61qJFawkQKGJBNkAG1pyXuQg736J4PvgNyoPkAfvqeWRTgPzUVgvE3TdCJiRsCi2MDKFpW7SV1ac8dEVLS2E",
  "key18": "3szxvA28KV2uhVsAgAnqqYRkeXbiVA9tor5vNzLSvPkd9HcMpeoXXgdJ8N4peNze1vcNFbfFcPxajUXLyauWspYS",
  "key19": "3dtTSRgpGfm3jVwTbk1vcyTtZhNHyRnkices92Mhm66a9swrPe2i3Fd2P6CmodDMRzxQ3kFMzjGSFdx3yCbE5rXh",
  "key20": "2a8grvtsaBr4eJTk5nNFSMF8eVS8fzUaXCggd4vKVe7wfP5f81kH5p4UBKh4yzNHkmtz8hZB2SSz14rajTiV511Z",
  "key21": "ibKVkEQf7r4tpT5Y5LSR32m2GhewuEtFxTtWV6tZkg3nKansdqyzb2HHVAAEWm5Qq459fTHqGWGVJYYmRYUjiDb",
  "key22": "4EZF27AfeSbTuqn5UzQFtwggJz2JCE1ynHZaK2vtbvbWuzn8ST7gvmpJom5YXsjCs6nduBGKLCR9t4acbCuDCaMf",
  "key23": "3aQRgX2V7xKcEU9HaRFszXCUKybgTcpv5TVb3Nqefd2uEus7UajgzaszQQwNMogeEWGCGBov2rSAUUwzWnFqf6AF",
  "key24": "5yMvLchyirhc7YjF89wSvpYoGfSNx9jQSauqyVvju1Y1GEG83dTW5fq2AETGP8ub9m8bAz77Hnt1odjzmwLAVWwE",
  "key25": "sn9R2pAqXqmikCZDUwBzCdk4K64QDQa8DamN3xF3ZKhrcZoGtkFM6sWKtmQW3Lruih6NiKfEHz3KbfZwELRe8UU"
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
