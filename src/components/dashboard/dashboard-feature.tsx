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
    "2sotsxca9mdoBwGvQ3TDKR2z9tM2ZFpykxSMyAv87kExpisXFnS8S1MVavotxdTxYXYfNN3TtS9UA1fmJUHAw6ou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K1cACpjtUSKZKStA6QwV2Cc9PTNTDFUCv8x6gr6SiRnxYgtk7iVCXV8gS9FMRSFUWYYNVHH1fCpqTjM9rXYmypg",
  "key1": "4eka8e6yTW74gijaKoHeULF1Mq9Yg31Pp6WPVtESvL6NkojTfaAVBPR8zGhPzNdPVMzTW8bp4i7DfFLzf6cMmoEC",
  "key2": "2K8LPWsr9P8NtHeTutGRTnVnoxsRdFKSP1CFQTCA8ugem7QBcUw93zDdkLmcvzcBVY6DtDGw1BhfKgkwV6MQFNJB",
  "key3": "3Gy9GocEoSV4f53WDnEocGgDUjPvPZoesggwmNnnF5cmETYQrcmpRcmxFfpXrmuGuguNXiTc1yTb5UvdjihFLehF",
  "key4": "4hE3RqLGt5Qfanp2jxwcNxF9afKk8LNKr65eo5Pw6VVPBpn8fZeV5hwnvdpMsSLTYx1UpsarujSSibmgFmStYzEM",
  "key5": "2Q7hURVBZ7XBb9sc5fbK9k27pw36H3qy3pR8Hx5g2jXifzxfoaWujyiEpmwwXSPhharW1PUpfrkSk83YmesnT8BZ",
  "key6": "XWCiqhk4Hx9af35xTLousT3XrJoRDRTEszYY1W6GuQKSgNGuPUq8j2WKCQdMbcGKaKfmLHK3FZcKGfPfh5K8MN4",
  "key7": "5a8VKXmNsWBpi1yRsMqD3Ejwyz2PzX5HSEhbhoSGMmyLpjv7gDcvrqaRDQpmPM17dnv3VvDRKNgfq5kDZk4gx7us",
  "key8": "62o2GGtYj31xP1NfqzBguCXgaB281gpfgPCfasejgNEHQKcrZhxgvQ169SdjENkR5sSyQC5RwTR6MnDhvWdb7DEX",
  "key9": "3xNbMx5Q4zKuf8oWuZppGkaVnMecbP5pt6Yb7xwHhBQANV2cEgcKYLMNUHfwFyhUrtCBeDKrpYgLFnFA3jk22ofL",
  "key10": "2sHnjeSJkDMqyHWDRvUzb7EWbBBzyWJrXWaFPT9WAyaejoQ4D4Mm4hUu1smxo9stGfCcRuJsvXYq7Ag815bD77pM",
  "key11": "F9BNRV29x6yfMr8dB53dtrU4tP8e2ViB7a5E2bQ1uwNJrdLpatUke5s8snzdGWPccrhE1Mb8ibTBLywiKsXcJh5",
  "key12": "2CV4n1Q1CaTbQHZ57jfdxSEb2okSXEsZXKUHdcspKJyTwqD6u6G8epbzHBw9uwba5vgitEoWB4ZitiXMQviJ1xZo",
  "key13": "3qeZwo1LCuuMfpjcp7MAofNB2rJunk1LP19UQhPv4VBaPuA4ZhYbSBfktBdQRwnX4TnADLgWUnkQJfMpFyNqYk8e",
  "key14": "2FJi2J7e9Uuzm5ckN8snmg4Rmpsxxait8oehzhMW3bMbswAQXCpAzcFi9rwkEyMVGQjb1WrQUHyMT5rmgx6rKT6a",
  "key15": "4yySg5uD9W7FPCShLWk3eDMXFqDi2eXoM9Ujbx8ae3dMY2PGa1JDPk8vRA2p7BzfJKX2FRL8KGCvWnGq4VDxqNFN",
  "key16": "63LkgaGizKxpvqNxgb5hQg2941TVHWk8uBhmXgbjphaa6tcAh3mfR7RDfQFdmojDJNF3Du5vek5poQ89aZP2hdXv",
  "key17": "ZC8AyzAvqWdxfi2Hxen5qTJhLcR6mT4Wi8LnBUWHFVRoDLLjnQLjWa5KYW8mvivguLaUShL3dhsL5ifafJx9NQH",
  "key18": "4JTYAe4rgAxXai2xFx4HhHYWcG46bfvkaBCKYY1KUfSZ5YJRxjLD2U8i7yqNXExAckjfSr2WEQD7XNgnRDNViamo",
  "key19": "aMhNyNP4y5bf7pt6dot4GHyD2sUWZXXWn6cMRFiHuc5PkWfXN5Jhrcaj8JHXEv2oZMHnjeFR9LBDiNFpjRUitVi",
  "key20": "5kdRVXHBGnExhnfBFYHi7f6V1hSEW4K6iybc8FxouZVSrSCsQ7VE7yc1aTjdBkyJvAt2XUxyZB5px4SVuSk25Kg7",
  "key21": "42cyM5CBTdY2KnBvzUzFpErw71RmzrqURvcWM1VjTXf3iP7L6PtAAT58Uc1LQZSq81Uig5NEmfMQfAHnrToD5ugo",
  "key22": "4Sx7sKh2aPaxJaoNrzYNsvxAyFsPJFv4S5X8qfgta5y2jFcjzkjqgTjiBWFjrdnj3TZHdxKL8NMG3bsm3WMmsGhr",
  "key23": "wT91TyzX5JK1X1ESrQbd3iDWw5rjMNro9yhr7Jfcp93J9S2B2FSXZf9djJsiXrDN8ksGAacj5PcYj6MQwDMW6jW",
  "key24": "4q87BcG7trXVxzqDZ51JV1Shhoms6VDQexmgUCFKrd2R8LQ6ZZxvsWShWo7CUZccK8PJTo1RfsPrRGjDq2HRwhvn",
  "key25": "661qv42CjQ83fFtBaRcHTKeYyWLPveXth7q6REAKPjXBBtUveKRxDwtCRvDKfQh1LBqK3kcjjhYVFMMpbqD2EQj",
  "key26": "A6Z7YjbdYZi9FmWp4vFSQoSw87ZywvkMwYHfZFHS1BzbD6HpEfvktw6qV6u3wzFDogw64GERx9rfVw7o2jB9hp1",
  "key27": "LKFY8u4nFuBNHyHCYqaZiuMefu2ZYXJd3xUyQL7bHfWQqt7MJVjK9c9THTNZYRmyWUaUsNQU9Tsgmrv8sdtK15B",
  "key28": "3E1HqJKb6nXxiWcjqH1xbbXWX4mFV7XYr1SFF1wHDG7FVap6H4zv6j4kTmYXendzZBa5BkNUWSi9LbAmwG63NkbA"
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
