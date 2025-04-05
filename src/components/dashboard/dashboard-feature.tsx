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
    "5UKtQB8WWHQVfcbWLPWCS71VaKnUqFpRMTjfwPUo8iwivAhRGr1NeMeBjPucJ7xtoiHXpRkfdC6kSUfpzEpBfzBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jXFaMVs8TbRQsKcsBvLQ7Qb4h8BbbatZngafMrLwQVZ19Z4N7fsSSCrtvZk8SJadBQmniXE4o3hQunKjRu9N6b9",
  "key1": "2q1Czqg21yf9sBM4ZdxXfmKVQCK7Hs6EYQsQoonKv9Z6Xnz6p6oD96NWjqVjRvmvQLdb7HUHmV2nJDU7UdMrktgT",
  "key2": "5NfgGSg3uWTdVhPnPivJm7AsUPKrhaKsAwPYnPNCmr6ZY2zyRGpUSwMibBY7v5QEZ5YLW9n7k4PH2S51skqXtNzP",
  "key3": "5pPeTHrf8E2jgC4ohjNBWghhP7sjHMCZRwfGwiQXCz8MDbFqg955C3VK71Rs4DaLV7KZJHXmSr4jBxFDZGT7aw8D",
  "key4": "2F6ePqAdt41dgGZ7h4oETgruaLRmz5AMXZ7v81BXh9JDNNJ6qcs9rNazYA56DVaCuDoXFmDNBMbkSqGpg74rig3F",
  "key5": "ocTjuK1cv4vLrLu5PD4JJfixd3i9RcE4eiSoPvJmsacafByUi3MXKdtJLyfa2W55Sdofu4t9iydWMVPeGHsBjyt",
  "key6": "X8FWZMfGQyJomemojGGkQkeNxPKMPn9vMWerrkwzNXE7cgYAqYS54dFMuYHf4Ya1PddAYVSUYDraPU9zQP9tiyn",
  "key7": "5HhCPndj3oFnRSmibqE41PwWGDo2MrRVp915Psuk1WTLTVzVjE8etYmmkPFMAHUiDBPKQEXkJFFCPrm4mmKyUvSi",
  "key8": "3wBfy2vsYRsDKLuSTiD3VHyUXLo7PjeZ4FPCJGumNizUENoMv8hVcqj6Yuy6FqEFrwANZ9hgvXCbEeUuawY2Gp9X",
  "key9": "52KKM4new2ds1Nihmr9TSs5yEUWMAJad2ayFzTC5WjSKtcYbYvfRi9irjv6w2zzi1zuqa4u129x4Kwuzp35VBfWV",
  "key10": "3nFbj4Gf8VRYRZn1eUY4Uzik8H82AaWBvgQGUt2G6CAMpDda5DbL9NQxTEVXNz7qU4UqRpHek62ssNmthTgYFnku",
  "key11": "5sF7py2iS7zhygwesfrzAtDzusH63NszCX42VaGRdUPfwBEvR6Ky9DXengANDKqLnTqS2kybTnR63kbRDMmqU8iX",
  "key12": "5rBLBU5MZTH5a7RpoEFqWVg1wnqQhGdds588VGaP7g8122mSTu1xP9hMTjivjcFEstz8zyZyQ29RkAbjXdBXXTq2",
  "key13": "5Fd886Ggo3BJtfwPm9jAFfsC1WG36gxXyfe6rNpp5pNKFa5TyPqP7TunY6mUFRW2MHd1Mhy4XM7kgji4FzHUkaYe",
  "key14": "2HxJnzMe6GZPAfqmaRGgtzrpqstt3SEqUxiXAGLBsrquemCMv7EKNmKAWuXqMpFF9tgTcBT2fXLuzFnXKE84wbS5",
  "key15": "33bzjqgVQPxRwnMF2Ny3nuAWDJjgJ5R5TELgjM5esT4FktPzkKjucbPPD62CZnUEjH8GPsfWurGdZzKDKfdyfiko",
  "key16": "3NRpy28sWZ4qwUiPDd8gkawkmHEfugRDmg6tcgxYsMrnLWcdCo73NH1Vos8JQ4akdgPAWtvLXNHNszXv2nAT1Ujt",
  "key17": "cCNCqaxmAdCV3vRNoaCqD4TpTVsKwqNiUtctH6HUeDbwA3auBdS3XnGNaivVxfQmfcwrx1TjcnbGBR1LiRRrrVy",
  "key18": "5CkLHHMR3WvKpuqd7d41FthLo68ewXuLzEmPiQWquTYFQLgLFJ8jMtZPxCkJd3Bph5RYftdsHmc5wiEpRNrdEf1R",
  "key19": "3AT8NPTKffsm4u9qVRDE7mLNq1Rhbjf66vQYHN6xvMxJskSm3FuEBfniQYV4g3xAXedLsmWva3y7smerM1iRLNL1",
  "key20": "3QHPUbD84FSSRYJQRAWqugb18ET9HbzQWEUyKfQpncrCsg9XwXWPcik1DdSmyCjn8SB6K3WGjFcjH7JoXUZ4syVW",
  "key21": "HWBTz6nSsRcgjWfaEgJL1hfg9LRrjQHnHdzHXEt9R2Jznv8xXXAW5e4khyZvzQyqEzascgmBCuCsyjpEhHYMCGC",
  "key22": "5R3whRshcLBrgkscQbLdPw8ptwcv66QdbtR5v6vMM83fCXWDnsF9AK7xw6ZEeUnPV6x123JX1obm7KeBta4tAecH",
  "key23": "2jesR5MmygCXk9hz8fr4JRgtMtReM7ABfjHt2H7uixiouhtd4DMvce5X5sCGcMQpNBgr5on22ydkutypoqAiYQBT",
  "key24": "UP4Pehp2CgWhnbQsKqgPYixB1HzU1WELiRaK82Ka2GGUj3oH3iQpsxdKmZahxacjvq6GiVfStJSZEfM8DbaFRNY",
  "key25": "2jeG2bWQBBNsYShYgPdyd5KewySt2So8eYvfYRCa68TbviREY2Rb6XxgJqMho1HnSBEeJM5MjG2JkMMffdFmFx9Q",
  "key26": "4du1FvuLv16JUFsJ3BhM25ojFevWLCECexPVyufJbF88334pYn2JDhNEANjRe97DXAZhitUEJ5bMAWLFNsAysJod",
  "key27": "4PAsUjjfT8ynyQiLfmLqfbShMKPWJzRBD1atvAEbqxb4aiCq5uunYDp3wmwij16tv5FdDFaGEqUKd5uFUaTfx7LA",
  "key28": "vWQ7nV5LcLsXeS9B82M5KQm8yWZGkUuESvpMt9L9SY8jTvHW5aUwfPwbmLup5JRJpUwxDqtNwWZT1qe1DmpbYtm",
  "key29": "3WrFynMVpd37BDhEy5EPje9bezzSS8X94wBpxn6SeP61Ke4URHKS3k6VM2CHXpWh2CWmBiyk5f3K7WAuX539c9WY",
  "key30": "2NZMDuUSxCYU74oPzHHW3dhp3zyBWQhBBgvLQko4u3LCw9L2VPAA85eFmzjnVN2UqQPYZEHczzeoHc49f9fNyCH9",
  "key31": "5xRtnHiPUF7EMZe3jFHvt5LSXeF95riWzGQqzLrqcasJTmX7euE1ZL31ddJMd6s5iqcc345vqNg64AYsVunhRtuA",
  "key32": "4QBmp19kcdPLuqja9juSjMfZ759ajkUfJDiNENg1XDyXUvbTqhzPKrrZVdfxPMmxxjRwj76MRGz8WPzCXM169KHC",
  "key33": "5FUmGCng8heymzQqBLokEf5WuU8mpFwxWfRQxQE67MxDjESAabHAajzeggc1o5Kaa6Wdyv4E69r54xLbbLVK7a8Q",
  "key34": "2G6zwUBZBMZxgdcJeYFbmSMPrRQv493jDAoE3ANDnjMJZ37wXSPcBuwzAmWF7uDCk4B91oHtST6ie3d3yiJKLP1n",
  "key35": "RBW7ADThbaep8DcofgMw58VXvUqZG8STbqrFQQ6nHZuV1E1PBKGyfFR43YbnPL5deFhNCQ7nEgTTssRRzsQ1f45",
  "key36": "5gREe2hLU6P7sGzZXZ5zeHPxqX419yyKCCyYLWwXhziSSjwnw3QQApuhxdRPfSPpUkafVPNYcEXB3FXykeD3wPqe",
  "key37": "28NP5cXRwQQ57pXk5wxNn3Zbk8naxxsEFY23f6PhqNYnDKDRFvek9fJuky7q8tjZD4bd57s7jjeryj2wwr7RDvf2"
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
