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
    "2xFBoonjpTqJuQtkBFbSyEN6ZwQ5E8HGEJQM8dtiXuGBj1T5abdLGRZrNTzzQDh24tXSmEhnGY2PWRsE4kwRQ9ys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZuWdV4Efq9D3BEuPYE3DqWzfTDKJBGKt4VR7vHq33ULaenWK8Z9JeTarjeDaLeoZub5ErQu2z23Ru2EWJKHWhtc",
  "key1": "5L9uo86zdkkvjCSbZr24d8qxhMxvvbWr9nMKCuqyV1HmDGt8zBWNMtbH3wdHETs42Ph34waefuaVtgLvgecZX31i",
  "key2": "q89FdeVh9H5kvMfbSF8epUpZsfQnRRaLVAQk7ydAzdviutJ8xFyDAPzSeUwg55JaCWqj3zjkjAHPkA4AW4EydBB",
  "key3": "3Y6HZ2uTPWwZNU1ZAkKUuXPbAeGd9FetMJchuDWZDFizv1feh2abvGHhhL5UXfSVHgg5iaq5jU7u23xavbvM2gcB",
  "key4": "3F4N2NmBXMVt7wr1aFAJc9D5wSe8RArmzfbGZzk33HckggwfPmKVPhWe696pdjdGYp9J12PWdjnu3mTXvbBxXM5f",
  "key5": "5CL2RVVrxhqB6NiWf5HHBRNRVnQcofizj9YSxwXybqz65Su8imHhL6HssbdRCW1BqqosX849M9VidpAYsehTrSFr",
  "key6": "4WWMikfP3Yc35nuwG6t1AvikPEWvNpDWHFhMZMvhzGj6nvEMYGmwNXGoZs2ytUp65Eu8m1TKERR1zZ7EkRdPFyXe",
  "key7": "3X8w1N2CoihV8oGNfDR9tv4vQdM8T25faXwGcZTfrHZp9vbxV3nFZUzStu2tCRjRYFDD7ARZTkhMAnN3unDnGfmE",
  "key8": "3xdxyLfQKZ5j3btfVySMY8ged2CQKgqbsZANgDumkCwySr8XCkCnWYhmsM27kt4iieYEPveL7kQYHNV9uAmLExjt",
  "key9": "3azqdHeHhvTt4H62cYPpNCMzheJLc2QKsGWqPdreS3egT6FoGgPTjeDx8pAQJT2cJbet3kM8Jrsfz5Tg7hQE2GHL",
  "key10": "37fUyWsqCSBCs5ZJGhaW1VrEoDcme9qdB18wrqGWf1myt6BqQyPQoomDiPVH8C8a7wzoWgrcDmjEzurzVVyz2CHQ",
  "key11": "tsmnbfMYDExmsrTZUEpY2p3GZXr3oErnPzJ7CWL29JWsLaVDWwX63oU8cDKqXh1ETTAyMRaGV3U1Gz3VX7Kw64u",
  "key12": "4BFb5hE9PyvPCsiux2cHBgevnLdYJAaZZJmjhv84ASB6FWMUz7rdWQnTtyAp3CAvVp6dYpyLeLAoCLbburnqKRcj",
  "key13": "5pPNzwkP9mySnxCfSL5qUYNuqGyNLcoViPxnPHZtSBdKDnAPPcvW7em5JXWXTAxzVVeRWprKfG8Uof2ECTe6T7sG",
  "key14": "5x7p4XVjGmXWaQMicrjB6WAdJQja2oYzYiMXyDoS9U2Cz3zLGK4U88XRJYoxPz9XBVMJjBMPqPLY2R9AKifS5Gu8",
  "key15": "3X8hbek2AnFeeaqTshsG5xZUo8LipsHDZZyWjyt727rCMbFvwiAnTwhqbtpvuYTBCTzo4u9n3f8L4UYERiX7ARNt",
  "key16": "24y3fRP8PjQxeFvDZa5XEhBMRhWkuXH5p42dpEzEM5T6JBWJNJ55Jcou5STBDRkS9J4P6Egc6y42zXkb4T32zfok",
  "key17": "56AwjrJiN7vX7FqGaNDP93sdxV5W2nr5AUhYzSFXiBvYDqDWJcAvBdXEr4NwZTjxtTs7PyAMjLBb7Gj2BxbLrXoc",
  "key18": "2U1sti4Mfe91TAk5S6Ym69TDGiyt2Xigjktw7k8JfoAQWzTJyfzjUPMuJAVaj63o425vXzVYTuEx49sGuvKm13jh",
  "key19": "3e3VF1wrStDsRWEpCHZafV78ajGDRjZhudBpa8DZw9Ah9p3FS3r5dJr2gNCrYfUTg7Yo6ceqJddWCPWo8NmV8NTC",
  "key20": "2wYx1k7iVoDWwXYJmdVp44o7EQmSzcp54adNGDLCnr4DVjmod1gJ7JNLmpuYU1XRXU85t5KsMrGHQ7q4obxLrtuH",
  "key21": "2RBrcBhza9kPkxbaZYYe5YZ1zAvNPd2eVsKrsBiQhMWY1VCYLMZfvpY95YjNkfexNsMbyZ5aA55czAmwdZxAUk3o",
  "key22": "3bpHTY3cbu2zgusDzCVgzNsg9RJUVaPfzr6NamCPd3MjbvETqWwMYPMjuQaUNDuXokRMMriQcq4sPtDC3mV3tTpv",
  "key23": "XWYPYAxFvVc2ob8weC3TmQ3LAdMwuoW5EmaCJ1cWgdBfrsVKo3CaNDzo5pax5AE8TwNmNqxv5M1KbHm6u7GGcpn",
  "key24": "5QrrciKUHrduwmYxUi9E55Mx33eLenMhmDBFKJFSbzVhptcbnL938JJjH36SsBNsqmHayvyaV2LzFPTA3vigkueD",
  "key25": "2nP2xh6KJ14mQB8kuZFkCb43oYyy1n9XAAEQtW2SjpupVV2to2YHMA2T3bwBaEqZRsprNwZ3pH5dUC6vo5UdQBTv",
  "key26": "2u3pfMs3MMnn4dvx4MmW6Lk97UwC4BFVxk56cKYWST7UtyXTNRnGXUsvrsRdjbv9msFGNeth4Wr2T5auzot3wzCY",
  "key27": "riNUaLJBHCfpjY9P68fpCwD4PSMMDg8nb4E19JQqjDFmbTZK3rZ4YBidNNvAjLBSAtSVfrWxzvSn5d3B7MaeGx3",
  "key28": "2igD4qaeLgNK3VNQ3spWq42PScEc8mkLFz5VW9WiSYhyNqNgWhKrVbwZEBfYqgfWRd28Z4uD4ftDwJbPY6xy7fTv",
  "key29": "qfjrJq7bRjmEuCtXkLmY2BfEJXPrRjiVGKo2W1FhDepL1BMe9UAqDWy7nB75P3edKWPiANwzHrQwWqApMQ8fs3R",
  "key30": "m34Mw3ckBYsgbiRvJ7wpfA2eYPc1Lvkm5Bk8GE5kRYqWgYprVj2EnxuKyistiJkJVNt1LcTVgr5XDgJewMvu183",
  "key31": "3ZGng3Vsq9VMihUhpbqvcxqu4RKxYhMMjqMZY3eCHSSyZt8BP7dQji4ayEHufSpkTGgmXGo862H5xRY9RGs4s6HP",
  "key32": "wKUeuA9uZ6PA6ZLvQNia4TwaSJghQSjdBrEgNP1fNVcSEKcxqGajsWsyce5yusRYjoAWTbYnYV5dABL6tGink6y",
  "key33": "5mN6RmReLjeV3uYRbfEKfdSCzF64YGXbAs1DB3YWV2fPyZ4vT23q6XTCwcUWrJFRgV6oLCRkgJV8N9enoRL9stCx",
  "key34": "3yotq6RcApjffn9uKVWWrA7YvcgvuePdh2uKSXXiZs1kdzNwzpZJiVFTXKCJL6eTYzFFanRBkbcvnWTFpP9LA5dM",
  "key35": "3WZyhUKTBL96oijhyzxi1JNf3txQ4XzVofyZEmQZ3Q7uPdM2cepwR9gz1HXcAb5eeNRXJpmxHDQfAbWDfN6boxGS",
  "key36": "4nGkAXUZVW8t7t5VdsNGtMXLY3A2ViC7oNvGRVU9vnWMGYj3rZL4KQKMsywzG148UK1HGPeyXYhPE8GxEuXFXx2q",
  "key37": "61hbMvTmwi3C9Li3S8MiiNNthgAXXkopuMYSUXVtQWKaZFozZo7R263TkhPtT42P8PVW44EWTxt2qYuhr6hNQEmG",
  "key38": "2A1xAW7Mwx3tuUqXQYpgg7PqqWMZeB7LpUEzJuoqszbgKgLVaUYpNDbcMFau4MoPQeCvJ9jZXk87UB7tMvDsgeKZ",
  "key39": "2gtUiVfWqsPQwcFZkq4rC92CwpfPbABYkiWDQupb4kqC7ffqH2qVdQy5Hq1r8pZA55m7carwBwMxBF75vtrLrg47"
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
