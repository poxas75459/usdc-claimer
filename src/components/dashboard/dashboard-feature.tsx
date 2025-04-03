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
    "61FyahfKb9768AaKZK8GGdy81ZNMNddB6KhiMxqHGE4fmDw1tCRhnUCjqT44PU5ec1YSfbgZAhxR9rkX2jguS4Mr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QHNf5taCM72e9LnyupVLnNdKkBywe6XDd7g3TcYLtGmfAo42q6HMsgfzkzwzoavciAHHzhYbbSHBrjHUdCeudjv",
  "key1": "52PZUKt6wcnJXnCZj26Rf5K4bcvnoossEK2933Qwj8BAFu98FJnKcw7eeeKKFNkznYobTC2jxRC61wH8MdiYQsg7",
  "key2": "4s7oVbrR8BbjkDhTWzetSThrc73vJ81e1HGYWFHAtMcrFCqXsVAuDfpdE2X95z3HgoGVzW9GFWewFLMAcRmAKBCa",
  "key3": "4uT1xMsT1EBe5AesmT93Y2QvWfhCzmDuqDmHkdnVV7X445nGgeWU3taU2KwdC5qB5kDxWFmCu9M8CxeWwLXagqXY",
  "key4": "E3vviEBFXMxgTCj5SFmuZGfs1GgLEAmAPcB5PLbJtwcqYprEYBKqUg8yqtbdPdHSRNZU5GBCDHBpo43YThQ2awy",
  "key5": "4g2kBQyZSs5qcZjay3f9w1xeZSazz4DJpUZBtzAEWXgcT3BUnvvGTgBNLScyWkRjkbzE2NNr5hF8MSUhA8egYjYF",
  "key6": "3XPjcuYyxMS9Xeg2sxs4xjCfaJ86hCiHrR58k4mYbLRCRFjLn9HkoM8Y1g27yvYwDo5NPY2Ba2YW89UCqKda2jpe",
  "key7": "48L7CC7Zo1ukQv4tZnJ1HtDeU5SYUy2LCnFbM3Xst966p1nVgGrSoi5ofnSGyuC94by4msRkV4XGftKNGC7qRZ6G",
  "key8": "4Eiqau1mhaZYhVqBraPk6AzvUAoXUysJREuUJVgoZq4zGav3Dt4zhjc7pTa5XTeTdZqwJUCeYzCMntVtcvBCMJYP",
  "key9": "3xpGDVWCEZuXAb4mSLUkWuuSarusqtSwhfpQrdBHqCcdhJ6MP4sSYBeFriNCr18gYdBMVbankmgyDARCsA9vU3ws",
  "key10": "3TXFCA8h2JENFxwCosk1ccE4VqtVzZjvAQXv8j9eZ2iHCJUjeULdyoS2iu2YnJn5ch5vYyseYae1mwav3WNxm397",
  "key11": "5R3zpbTAB6ZAAsRQ3qMHf3UGF5KKsX4LrJkxzVtn8pvdnYnyrhi2vb2NkCTVMMwbuQ2YLhoudNMVXMzvVGxgzqCX",
  "key12": "33xiBZz4Sbd4LHGHXDDmL1YJtfB2BEktiDwxgXxJr6k9BqWtNP53mnp1RqpRa5P7huAQG9advAAbnUVrFAR9TvpP",
  "key13": "4GNainesdQD1zVJd6pP3rbgbGY1BnzGZNwsDEdAa1JnhbFiqe1mtdr3RUDEXVQrVGjsbZp2Dob1n8yeeKb4ZuGbd",
  "key14": "4gzwSVn72hA2pW7LmktYniTQnRnPsjKKyS3LdkmeMhEWaL2B2hzjCdtD8bdo8oeJGXm3oGYsRH2Hn3mvHLqLfCWX",
  "key15": "5LnX3TEuihhDN3VLzEEpyftQbrXnuUqzzuyZ8jC9UrtTqhGxAvCtRMdDoNbVci6uBDmbXcx659n9GP8b3iSNQLb",
  "key16": "LmFuprJ8YK84Gtt2T2a8MtbuDZdgaUXWMAdcobqpE5WmBdSjNAtwAPGcagmWx41Vs5sLJGEWUU4uBjYQSQ5PkBF",
  "key17": "529LHmXyZWtD2v8sTekXtCzcwV85Yk6SsztnEkBKYXCvc3DopwKR9yehuDaJK58pYvx8q7U7QCdtccDW9FvssLF6",
  "key18": "3QzDiVeg64EPDxM6AB5nvY3XfjeXUYSCoZyyJAHeFxxGivaKK45RShexGepPiMajfuJQYEbTL1QgNgaCDhFGRgie",
  "key19": "8UGpJmhz2tEfV5unaxGSgz3eBGm5ZnsyDMGKJ6ianuR6mBZvHSYaEzvx6EUU61FAP2adB5rzcgbgdTzXQZF7ZLe",
  "key20": "2XGuR5YNoYCmsCwK6k9grKwyuMihfCiDyPBnBztrFv5TmfmEXS8r7dfuM6XrDXQNjxHDegG7kwTNqXbJkbRyP96H",
  "key21": "299grmTc2wMF7dFh4vBxDBc6exjC1DpiZUMTMKg8ZoFUPv4LKXYG9Z6vupfz1BnxV26fe9Zj5qR8akiqw13rbLD4",
  "key22": "5UgkHP3YvBfuVctu9iZrGtYmCFWHMmxLqsRWvChgAEpfkmxkgfzRrgAXxpuo43N3zM2y36EYHBFYx9RbQxLYHbRE",
  "key23": "3eogwLdxEUy3esS6vNjKCuFNbbwRvscJRhos98Cn8AnkUu8SZbcGhAAd3mbBpD53hdc2gPTxjh81GLFVEcvrst56",
  "key24": "5wgo9hPJmPfGuTmDURj9Xinyhynfbk6sK9aBjzhdy97R86bLCdEJBqRN9SewrxCFdYU2Q5cWmNwiSaJqJbqABK3z",
  "key25": "3xYFZXPo3ux2xNdfKaQXKZjnUCLqakDiZEFLxydFzi2nuUm1GRjMohjN3Cv5rXnzx6fW7jpkpa7u5idGGULpTmCK",
  "key26": "3PyVmKBqkBTuABMXsBPiAWbaEZFM89rqgViMCBtxcXpf19y4kLbXc5NQCdQLE16iqvqrqG7JRQLTuSSULsuGEX1C",
  "key27": "4TRN2Vc4Qw2tLLUeWvdGanfbt3CayNB2mKMMmhsDGsutojN5wqsWnBTpqzyfqLH3USjQ9MVM9uw2DSyWmXAwHM9c",
  "key28": "3cBv3b2tC2iAoeGtjFwU8D2nbv1bnSPhqmkdkxhLaVDf5qVd4b6CVfE4VdMV9dhK6575Usum5kwZUBypUXQv8mdg"
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
