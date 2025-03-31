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
    "26iHjzrK1cgvxCxPg6xGDGfrX5Nc7nkBbBcpREju9HtZpZi5KY1F5JKRDsQkD6DE4FJtAzGoDyHAKByVYRV1kvoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34unSqqUkDfVgepoF7TmtUdU8MJ986c9Zpo4RRBWkVKYGDCYPJDWG5LQ7PNGhgf8ZHfSJu4QMYtqpLEXFPjFa63W",
  "key1": "4GyifgLef8Hz1fSxca9FBuGXEjTm5dwFpfZfEikF4JZLxM4T9xgnXyjpSqZPFQaQ47ZZ1szuiEWRcZSPQtYenQwi",
  "key2": "3ah8m4cRRwYGmRrq53mjNR3uFiLtUcL2PWzSKFisELyHxDn5DYFYms57DjfpvtAM76HofsZpHNY1hK8d1HJ7E8HB",
  "key3": "EDwrBb4ZoKrGmWstMs9RwJfLWhwZGDdqhHnFYBk6PFkwS3v1qkFH76xA6ye2c5CgH7KqeuujnmQkWZs9cKJ6JUY",
  "key4": "2TyPHaLD4WRSPo7nP9AGy7Aakk8kotn3FohFaXx5HKkpHawm4Y6jrft4LYmVqLfj3V6FvGHFH7xifFJ5xbGBEvmB",
  "key5": "29RXtWNMvx3L52aGWy1inDQv2mLkmdXaSsdBgYzmkAg1XQ8w9dM1ppxz5Fk4UXegbuW23DcJFJHJKuBYR1nAF9Q3",
  "key6": "2hJ95taDhjVVp93DHPyUuG1xvPrktwD5PLjdaXc3kmLwt7icQ3aRNpHCqco6McSjpxd31q33bSwUdVBnxptPDhDk",
  "key7": "uoaF3ZCqNnrTHFSVvczTeroeFRKafRDJ8QLhjJ2MitpuAzxstTjWjYCwhnodANqzNn4hiPWxhcwJtMZaZCzscNv",
  "key8": "wTjUAhJj5Ux9B2kc7c41b7uQ2wnEFfN5FczKgaXcFYECxkVawr5h5hgAu52gFEZqiQiiCjcGYYZxem6ZtDt1QVB",
  "key9": "4j5uCi5cQL11naQUdf4TyWu8r3wWVdtz3HJfHqtMg5x7oB2mju7naEdggftGn4tnoAvejdLJ2bJWzgyEY9h7yoR9",
  "key10": "5u8JGsxNqDzq3GR1AJsUPPR2P3FwW9297E3ZatSuyc2c1dAyk4WoCPoyBjKxeypbKVApVhzsz6QEKRDSXCzuZrat",
  "key11": "4JvM2SJfNde7NeHaJVCVQGdTcPbmJAqFjT1cjEnjdxpRJCLoPYbtyc1DX3s4wNgCJmMCYs5qRdouFGW7Y8iELouz",
  "key12": "hMrRprmQy4ivFbubpkqSevL2vGfUNKynnb3Ev9RBgU4VuUWSUzCvpx1RBoUheWc4pEJENDebpxtAtAFyviRov29",
  "key13": "4ENS9QoAy3N3WVTVE4MeJXfHuhmeK9fUVNAbqQfXB8HXLucbCsg5Qu5bXWAdXjLhSCCnF5FKBKUbqTJsimFohAxt",
  "key14": "4o63iPE4TeJpF35M7MT5bChwsSdMbwNti1ATat2a1CLmUoX2Adx3T6xFYbZ9u5JUjDtDSCUc1s6UqWYsJHSsVfXR",
  "key15": "aaTuJCxhX9nR5CHeSeXx1DX1KhtVShHY84ynVommvYqEkgZ6NPXSBWsmcMKogscHJsNt9HvKCb8QT2FmjwyydF4",
  "key16": "44K6gfHa6dfkPKEzXx5pVJch9imbKXu89EWa1nUfuCM7mLU62LKKmnEQCf9cXKF5VfZT6kMpXXckVKWxr4Juok5M",
  "key17": "3dzXE2MD1Fcr52f5ABpbA5qZVshTw7jcua8TyuGUxAKWTMJavJDqW1MQRgQstTQ7nHUoUzsyV63dJZo3cCaCFHeD",
  "key18": "21SdiMXDayKDw4ngLrof4f8DwdcVfdpMuES5Kx3mW3oaxTQZYv7kQsjtWWL1P8L91CSYJe9Zpis7538RmHQifbfz",
  "key19": "FyHPKKYxkGxcnZDAJSfHUVYA6tYxWBvwujJn51GWmYFXFh9mXL5h19pq8zBVyQzeABd389u6wiSCFUD5xhBjanF",
  "key20": "2dRfhNDwBo84sSCSTuRVf3BTqM4HDesyAzdhRJBVSn3zuZg3zcv5QtXML12YnhpCVMkoXjkeoRuXxB5iXSA5G2dP",
  "key21": "3CgrLugZWwGEHce6mMNshA2c9Nc9SeMnoCmM32LQrsEf13K6KX1J9iFs2mUBSPynszCnkUuZwXGqYVBFnFUPAAUi",
  "key22": "64NZRXZVXxdMjEGWuhSYhoJy8KfUntXR2wGmVJEWh8kUbd5rW7jzWniswDCn3wfotxDs6xNDpRsywiKFrswQfLMW",
  "key23": "2Fw9dvKekWGWk1zYKVpknSjXMRxiUSEL1wq4jtHXPpdJrRBvpoRdLiT2CpX2Q55JWS7E4xkcp2xpaofRvDVXdgnh",
  "key24": "4Jr3943csWnLVdSbJv5dgJaVdarHuggnHVyrcQnxyYBmCBMytiRupDeM2phXaCCfCqKXUpuDSLzwGeoj7JDjZA4F",
  "key25": "4Zgmn3vU6VYjHvKw2z763K8ro7JFgMdneZjy4DwWnsmnoXh5kzFLHLXoM2zX3EEs3oVaj1SYx4Ewwkvokk3onqJc",
  "key26": "HuWAzkAHQEZmiddDJE35BJtRzEMze9mDcobvvk7pG8wwktMKjBpsrWwRY7ca2Mw6pQR7Qad8Dq6wuwKsYWidT1n",
  "key27": "3uCMbVrKQ1oTpEo6wCa3vGsXBeC9xpexYfhU7mjyVfFwmjpMVs2vwUbTwbaU3t4rBMCFNsEDGiftSGyfkGw2Fa8o",
  "key28": "2MAAfJtHJesKzZ9ZNAbFsm4EGebFx8Y1F86KCKYYh3AdZYBU4iFoEf1ghD6sTrb5NGDaGor4ptnCjg22RrjrWCFD",
  "key29": "22r7GTwv7cwc62yAt5NGbPTbqJK857KoabeHg13LPMKZYSGaeswrdSMjZrigNc7uHhviA7QL3V7FyGRkcxjSR5Vc",
  "key30": "27gKgR87c4yFTumLm5sjhdnyjot6oDJuW5pcmSHx6EyCTb2rJhhfPwfzRYVQEcghWiTesHjYAaPARrCrQwn1Lay3",
  "key31": "4UcEDc43k4baghuB8drCzDun7ywnBXa4uqeZ9Yxp2XLYCQM9Jp9kxSVmwXcreAov2A5EUvo8cgzsqy8SAAGgHkB2",
  "key32": "fQewi9hr6aHWcAwyfgw7WPaofG2mDa5wh8hup9gKfCEGLbhcBXhotZwEzddmgBWirN42fuoRnyutyYrgBnCsARf",
  "key33": "2fNxCGJ3P4QJd5Uavmr2N7nG4PM13nRNwpeAd1ib1t4ATw4kY1Dp3smvAeKfzj8Jx6QRTTGCCjtiVoP3kpYf1QXY",
  "key34": "5PdnUZQEKiHt9WKQauYFvW6imXqe8gftoaywAwdy4XHwQjvTAc7Esvx5WbXLbG5SLcb76RkiV9YMYAofLBHEtPdr",
  "key35": "2sS9msk1XJqEiHwh76WTMZingBdHctj7XyWuiV6rJzcaDsFCpKqwVBSGkjmkhy1eaChoxVAuQnmCyzMCokLbdhJN",
  "key36": "64qGFas3Vj8uU493cWZiR9Rm6xFRcUTe5oKPU55eQCpEkopsocr5dxvqRuMv14rM5Q3rSwJEWLVuCB3uxCqsPLFU",
  "key37": "kqcTcEAyVVt8Yd2LHUae9DAFXVJ9TtpCoLhQJvxo7Kw6hw8v73W2BPzAwL4cf1grqbRnM5r4JXSBf2ta7koQqef",
  "key38": "8cMFH5Jj9RKWj9NxUxho6LqnWQcMrJzUcNyWjkwRn35fQbtbQiFW4y2324hmjaFHWxv63soBwquKFu4yZkz9vfU",
  "key39": "KaGK8EhnH3Zc77xU81eJUudNBBRgDTmPDWqFEcwJ2z5jbKYivusw2mmHviCHT2gNfF1hS5UdKjFcK5pbSqpKgg7",
  "key40": "4edahqZDw4fF57iV7XVXbyfmd6bpm19p1uCmy4oq13BKDrUk1LNr47QrFcrAaZK9bpKjFXHB42mDtvtp61TcVNtk",
  "key41": "tdeSrEMzuAZZL2Co16czfGsLYU9Lbusmh78mtK5myXgjQqH3tdwdPs1PjCKXZtHMEBy7xi3ZGwBRfdh6rGMAXN7",
  "key42": "4we464TRw76rq4e1goYJiM87noVwoDoBiEbhMVEFDD4Aj8QuguwvkrC2m1BG8GCNYWVJ9bE9dQTaN6SP6Wt2ob1r"
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
