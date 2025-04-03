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
    "5HzhPi1CuRz7BA8tw4H61tBj6gWqZaFSQLhiNYHpCuhqTs6cue82ejiNbowrcYcLv6oiqW6xRjB2oQjuUz764TUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SGfcJ6ynFbyvo6W1CLc66SNYpTCDyo8NvMbwmNHeXXkMdrAHWA9D75pxeoPMd7YEMJrLr2KsAogz5BV9rjcstRu",
  "key1": "4eCvYiBdxGhEigqDFUyMqZ9gN382KjSkZdMP9uLi7CfMt796hU85YCcBNE1EWJ9U1Ta1RNSBG2JnFakpdB9tQzNa",
  "key2": "5Mw2ZWyMncSHyhPKpe5FPF6GHbPfGstfmh2eBmNw3sQxtTTKxCxEqxBoLreAAqTv2kgR6FKYussJha3eLjEF1M7N",
  "key3": "39BXvVpe5U1b2JH4WahbWEDdpbv6Hia9pBbgGP1NzaWCEJeTH7EHzfsjXbtYpa3wdUC56syWQf7rujLhpHdxLN9J",
  "key4": "4crqmxfMjsLGncZkTqFMYhnPCvyZvc1CoEEwP6RmRy7gfCKJFPWFZnxeAkJHBJeAuBcbYjDgUPGc33Mfp9SYUFvX",
  "key5": "494BWskCHxaVza6MpvN11qwV8i6hpMuLxsSeTi5geat7S7pc39qk4ppPvHFNrfbLzZT39QrJoHH8CPydYEPiDphM",
  "key6": "3VGJyQzxXtjhbD8JWcacLVpsNpjncjveHEjURERVr8B9pVdVCpZ2JVCNmeu96ve7Z76qkpnTpvTMjHGSBuCeVL4V",
  "key7": "CAyfW5UChXKffcjAdFejpH6xES4PL4yg9KBczVFGaMJDBBAsu4e3CMx5bu2Cvv85syJ29GMW4b31A7mqV3YwLvz",
  "key8": "56qLdoeHMAr2Kb1edSY8ZHXMVuaFNDLvHNHJbKZZGXeCXsdjuupDaoRXJugFJf6eMB4D7iN6Jv7TQtMwhPkgR91Z",
  "key9": "4NWbhPx7PaYaFWmNqZzXAa3ygWoniDiakaEozch54KamcJY7VCHXDS1WpTAQKyjnktfzRMqQLx2prutMhm6inUN9",
  "key10": "4cdSt7HFfQU68RhnUMPMYkMzYz1iqAkQMYAeFX51J5xbFSTKJgnyPnfBQ3MGfnE1m75fTZ9otN4uxmSh1zQzt3xq",
  "key11": "3hk1qcruz7rtuWATp3mAHaBH5ooTFfaNL6JWWtfHyjB4Rp8rb7oHWjdPURcN3oYimAqA7eTfXmUZ9oF9LC4kj7pF",
  "key12": "4Z8QDGFmeHk2nmWuVBpsNVgmxjMxRRh5TTTQDfSBHuTq8whbWt1Q9JWUV31qLWZGabDK5RdC1jxJuHRffwSnuNPJ",
  "key13": "xgGYy6kdVQFhBSpZdHx7gfMarzcuzRCJCBsMFEEBNW9RcAvC4GWTJvFTjcwMu1MFygqQhBqYCtKnYMofT55XJ3n",
  "key14": "3amKTDks13HERWHnH1ZcZXNNqMKYX15scp1zFZFCcMFwfSThQErsB9wCwVVcCZJd2bDkdZVSb4mEQG7pcV3JtoCA",
  "key15": "4QWchKiKXjyRDf2CRtDJaHqc7TtwFHDr11YovegK4y4nxwvv6euFZG7MxfMMFeywWcbub8z9WoidqtjDa9BTZ6Wh",
  "key16": "4YFFawMbYJ4Ravj6oArygev2f1mMjoUhi2FyuMLnbbXHwqcYaXwiCyvTgcv5hUknBQcLNUs9ZgvdVruo6oBaFKXC",
  "key17": "2eGfD2dJZhJqsTHsRFhLU5KxPA1VbAig5mszSE7Zx4ffRePdhT8xVGEYaU9FA25zCDaJbbAMRorqVY1gBib3zrXF",
  "key18": "4wrqM6GUt8oM2To7HuZLcfdAkWiZLNrrfGLbBvFj193Z6Mg33hGCpLidT8V8CAW9KxiVQUc5w59mzvuwEtNqBkT6",
  "key19": "2d57v48uv4YhpZuTJUmF2RTesSHRffbeH5pG3hFkWTmvHYCEBVqXyCCEU6zBGTSW361gJSV9ujTq4bJTMHpvjt2M",
  "key20": "3iKdFd565vyiMt1ZTRGpRtJp4MSNKhx3WZqpgumFNsf1hXBTGFtd39qKGRjAcbK6ccP8DGEmBLYmzhAeU9GP1f5q",
  "key21": "33kmetJXnejxtmHZt8PVJS4gpAsoebiQDY2Ev21VfaGuNtFFjPGAASUn82qq8j3wqd9J1K53Fu81xMjwuMEcUmRb",
  "key22": "4ELPW2FA1VXhHDzm26J8YvSuB8Yn5dcMSu5HXAkbghZrwPPSDuxobNpQm2b8iqpgZh1Bh9DsXhf54kqDjXHjfPT1",
  "key23": "4RKcYsQU8DLWu9Q9fb2gbcHHAsgaFCeiKDTJFsSEbSHHHh3JpdxsFjhidwawH82HdsS6iZK8HyJH8ydNwVhBZsGF",
  "key24": "3StbTsADXfAjZZnxhzR9H38w8decrujRvbCMGnoP6WABTQN9Dem17VqiTWogSP1oTNMm5pXQ8GuS9cHsRJ9CwaKC",
  "key25": "2u2eWhB5D6j6UgfmhtG3xMANwAurSQ5qQj8GFiVBDVsXWmUTHSpYbCQCmywkxrJdF9FLMHZBCRML9yEyB9ntNUnK",
  "key26": "5dC8nQMUzcXp4Aw17aKVrmuwYjahDxj8YBLQbjgpQMsKdUM2Mw9LznMopyHk7F5rne4td8k3E7u2C5EgJrWabVDS",
  "key27": "5tNSfGN9Bc4EGKMH2dcmWYShGuPVJZRgnuFvy3tJM3wzjN3wwKw8t4s7gzs4uSJT7V3RfmCLuHxmSsvLjhNh39vn",
  "key28": "2qn3tYt5ZjhemqmwxDwz5EvUZfT2YeY5jSzaxHRGR5wsUnuLNZRbcDfEW9JDzWiArhsZMARXoojxrL6HciJL7LVY",
  "key29": "473F5tuCFa9Eb6zNT7NnbjP2mmrqwjPkRaw3adjew5u31w6fWFq1GeU27mkoeBWWynCYEq8i9YEF2Ax2sHyEMHm8",
  "key30": "5PRsP5RgpUgLV9etTGp4pYpFKvE7hg4UiEqFL6RH8qfYScHn5YprZH9nDCn2tjZQko46JnaTrEVTuRaF6JBi964G",
  "key31": "3uYX4JP92UYw4c2zQiXf7V3TyAKQEsUeGfMZGMurQPKDtkUPTSpS2WrsQJQMwAzAAyoS6DgzUNL6sCAubHgQMYLU",
  "key32": "3yWzaAEyCdMXQm1at48dv2tsqmeYotu758cQMXsWbNqQZSSJTWLPsi1Dm4pCVwZsnY6eVGPf7EpF5RtTvzWyLnzu",
  "key33": "2q63zC3HqD1VM36s53xgbbzf3RU91qfyqAsdRC2deYdPBgK6btboZUSpbJARLch8BBK5nWgPW9T9b1oqJ8SrTqEL",
  "key34": "4mb2swzCSPKGiWqFh5Y1gBHwcFjzYE9f6WQXg39sJdVFAjL4BV5Tdz7kiyknbJa8LXdsRiopYT8jhAqviEDwAFcG",
  "key35": "t1qbzFqeXsCj8MQWEU1d1M3kJa545CaEhQHXF6z1efNRYZpBanKPTMY8QQ6sVrciaj8kUCaZdKo8r3agF4yzH4y",
  "key36": "34k5xZbgrHC2F4LwNcYJJWRLpChR4G9Bdpckro7Eq3S3fEmdcf9EpehCWPBFH7ajecvxqy3pEwsPGWwRMy1FuNcn",
  "key37": "Boyfa82rJYXo998LGoh97NSeq68SY8d7U3219FhruLTKGXjxMoUiJb2FvvbcfnHnwDXFXBR3svBeteirFNqW5FM",
  "key38": "339mBwy6z55W2N9E9kFnXuz9CixEtRSvuFPDa2WzFUiHkyc77od4iBgMBvY2h6JqBxqTvFba5958mEyzYhJ55A74",
  "key39": "5SkQaJaBiFnCvPPL1aKWztWrduwdko6Ur1tHjgYwvtNGBdDSin1fzmopWCRCvTcL4efzvN2GUCv3VKVXS88sYEnC",
  "key40": "3JuFWQjoiD82JvQ5eSnXico2BwmmAxeGLwcHm4F2EguH8ETmLpezswuoQXmyYAG6StMC4yqFU5uPRmiuUAkdjc4L",
  "key41": "5D9gz1SwYSZZsWeZcWyg5qJ7Udzy31U8uqQAu1SscqWrCaETajzfAniFAMBd7RSnhgxwvxmLzYZmrt615C9bL9VR",
  "key42": "5t6nDyiUbi8HyhGJLsbmaR9qMQuL14A2E7mQpeeizi7Kn44YqYLeykoQAgF2oriscdYyw8KKsCbzJRNvPHK8Vjmz",
  "key43": "6Jd4pqdsXf8eTE3dfusKBsRyqfJcE62KeYStM83PwAKhTJhKXuTnms4DJPtdaeY7NiCXKft634tm19SVFLTHC2Z"
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
