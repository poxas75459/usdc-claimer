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
    "2MC5RBBzAwAuscmGLYTeawbPdsKxude4qGCxZEAwnqD1FvfU5dH2e38sdnthMkd1SXo2zcmi6CcjyvoiWw637438"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CdcKujPyFJfnMYVG2tYu5yKJjxDaCvLtdVZ9yr6WyTyujKPwr1UJ83yauHVgdcBNMkPwEyvmhe3L2EWjqmvjzc8",
  "key1": "4bNY64QQkQXfCfNBT7AHXcn8yGyDAwKmHkNS7HaAY8e7yaRCgJGvvK34e1zWJZpizcxifwLmxUeqB1vMuJhS9KDW",
  "key2": "2MeF7rTNjN4LsLCGawasmDXavZ8wUX16BmYs9bRnRgdWLfZUMHsE3TpfV59cCh86s5fjdWj9TXXtFVxZoWFnCkpq",
  "key3": "3LkdG63io5GBTKx45839DtVqpjXSjLvZqjvxzgv59tF5CUy1CQR165tFjeb7YXXABzC9MjNX8MVGbRwdQ2bhTv9v",
  "key4": "jwQTM2hP316sPyjdqBS5Gyk2gGyucpdtqJ8eJuoDqDmaPPLUyc36ANzcqJDLpekHNnskZWPpLGSz8ghv1vGBL2n",
  "key5": "4V2xUQkyHUr5Gu8rrzij1TgcH68NUWrEtDhNQbdf3s37nk5jWxpXyddPkLRLCLSsc19Djs9gDr4bn1BwNEHcPJ91",
  "key6": "5LPer6NFEWvDbqcZ2CKETzbt5ErzC9vyhBKE8qS8xXSMZdWF4Zq5U8htQDSp7qbRep7fL8kCak5mfEZ5xSbzDz6w",
  "key7": "5owYYKiJAYzVoP1JquWWN5AZy8CfQXu9crpx6WBAoJcGT4S71U7MtApM9qt5kbaEnVy5tHTMKm68Qcr1i2Q7zaWk",
  "key8": "3KLwtLCVYEuW6rGrVbZaM9jCmhv1yuZcRZDL784HXbnjxUiSNVC7Sr7VzQMC783ztXh4QVMhhxjSgC9XxmMw6Wuw",
  "key9": "2MeG5vS8nZRAaZgp7GM9Y56TKFE6mULfRAcciAVortBLboKubmUJeswYDLoNATCBEU5pxBuhUoAtGxjREN7pD1ki",
  "key10": "2m7SNbGHVa9MXrhM2oVh7tSwiBvxMGH2w9gTJymL8rzdQ7rzCtWUSSnjyy3RKntBUYbzXivazMsbu2qMMSZLywos",
  "key11": "3KUZj7LQEQRCYpsntjupuu5TudneVK6jYk3oZ8TSw63UVGEPK6gJa4UGnUoiECbysaqQjHDqT9FR8ToioNh9c8jJ",
  "key12": "4Jqadf2RHCPA37SSQmAb1tfYZrPeRVHH7MqbmKZbNidU4MCPswUs4ZrGojP5qZc48dJm3M64deAjznamU1aAV7mD",
  "key13": "5cvDxQuPboLdNVcDkPvSuYJ7btJXJaeJcfWoskBCPsFRB5Js87nsnEhieyZtYb3y1y2mGXWnBDpbDC2FFN1DSpTk",
  "key14": "5Fs1NqcHAJbMWo9jbnYBiWptoFaxMRcLFaYMeAjFyfDvmMcd3v2TEyYEFCQRG6Bx9XYWUDwzThURx5YLz5sRN362",
  "key15": "5uyQZwrJeTWKfCVMKMm4ySJaT7CGS3tgijQkp7hb8BuDVfLE5PFRfyd9MWyQ5upnWRUwrgswkJuRcXzBQrTPDj12",
  "key16": "57Z7inf6sixEmyqREU9US7zoQVXi8JZUgJup6WRPpqVNia1MNr2tDzXsruBJ2go2YAQt9aVqX9Y8PvaXQzShup8",
  "key17": "Ta2vbgjxmwiwarYBw2GGJzrWZNsQuZ2GDbSkcci2uWkz8xfbH3iQkVvJUnqLUbEfQ9ccEHpahGLQWnFYhj5HnQW",
  "key18": "4SahCJyD2sKgxNasRuhxT4Phed5xpNqEFPBN6EA94u1VcczguM8jYfmNfVPH6r4WRu3t59L1QME1QU9pgy8oPzbR",
  "key19": "39ki8QjGTuvqpngY59qVRwsaGdYNBreoeLDXxC76QVAQKDVXWkvTXnVSF3X3BaBZPjRB7fPWrGdG7Fmq9fEQvQzD",
  "key20": "5n6f5zMAtg838uyz8LbW5g2XhXeVfV7uq8TPM4yRRvQWB1nWHyfCjE8gusdUoFfNMT7MXdLkvuRD4p9kg1jBAy99",
  "key21": "3wzs2rk8gPaenA31ZxxU2nYEy7LXtsMGEiJaDtNezTnhAzrqBJGuhjTDny6Gn1wQN3yCrv6Cd5Q9FmM3tpkgNAzx",
  "key22": "26hmyeDz78Q4Xk6CJtaxZSqBV8NDFZaztEn7EVdvwopGQKVLmAN9ZGBSZ9aDpouwSfAfzM2juKbX1eT2SXs6XWto",
  "key23": "3eVhpQ58NGDeuKjLBDaFofg2BQoyZVaPRUn91FrScDifsksxpfBoNwsyB1R6P1bsnHD741pE76QK9jAJzMeEce6R",
  "key24": "311MQpfFyKw4Ljev8v94FAvgWVgJ4M9nAy8JLkVvUJmPoU7VocVfymSVZproEsPUokPsBr7oEmXutAhTFbsThoAj",
  "key25": "5EqumJWheQmTe7zEqAN4PRquPBai8TdEgJQVsbZAuuXj3KeJcxgTco3HC8eXJCz7L7biuqTTo1JZ6S8f12ggdQGH",
  "key26": "5dEmkVj9Z8ntznUs6rwJ8frP6CACo4vUgwjoXYcZfQWvWGN2mw2BnCSAuQM5QaGjujGXfMhPVHPJqA1QQhM3xFkt",
  "key27": "vVeaupxaFuLrwXypoUtWR65JhUMALfSCvUPr3F55cCKtaCEfzFEXd7Tu94yYe6uRLMM72y2HuTmsp3ATK9QnKwk",
  "key28": "2UV4fbevts57xuUacr62X9yQ3qyhR21fA6Zm7b5QoN3vCntxCVABiAT37zroC7KXRhxGdPgFVqYmBRuKM5nzVSuz",
  "key29": "gAhiYS42EiLtxNMpfhYowgSZkuMsLYxetK32csnw52kMjoQkBTEipqjS6wbdobj4urqsZuBK1mC6gdtE9bxBoA1",
  "key30": "4ENtPf6eEdGvZ2vAdmunqFF1TTH1GK99mHZhv3bfBmjcPkJkRLYPP68AtwzGft8zjg3y5BWQaXebhJEDWJdi896x",
  "key31": "2QkQyfEqn79HKBZ2q1w7v5s6NHUVDARtqfv9uBAAqgRrxpCbVyz4Hveg9NzKjhmxzfvnj9tijnvwA2X215kaqP7w",
  "key32": "5xfiyu8Nbz1L6w6zmCRdT4qMTyYPxfKiogckCrG2d1FKsTLYcmWitKrsRJkUH9xCpTKTmvnD7G4RN6S9BcAq5whA",
  "key33": "3eDKFpQha4yMGwspC5ygHfk9tkonRWYGt1Q3APsKKqrhzRLkCN6QcukMdjBCGzymrmRUiHzVmmjjLowzRHrJmVqg",
  "key34": "2tqyrqsHC3xS82pnJ2vxvHU52TqruyMBJvHuAxkXJBFbfqYsVuQTG4eXZ9pqunHZoZKERwRUmTdBWvED6oJEXu9i",
  "key35": "3arcejSbCzh8QzW15qM4euUrKVevdXCMDSmwGEMBsLC9q2TMDaonbacmc5GqUWWfWnr87wDDUttLxEKw6nFrxBbx",
  "key36": "35qNkgiRPSJY8mvZe3XRSw15E3u48HcFRa7UrSVgsMeR3q2RjkeK4k2vCaK9f4RAJdEadsHi8tTnhsbtK6VJSyic",
  "key37": "2vFpm61gX9aHHDvKXY5FqZ9xMg3cLRueqSfmFgbFiYzMBedcG6wHQ9zten9ZzQMcQkkNVgk2p5chUMWaruHS1eDp",
  "key38": "57qU9QUXr2yQ2YdcYXrvb8m4CvEEpCnJjKwkgzxd1Sg7eVHPWhA2pH8Lvh3JSWfzioKqrdQVxAjEcCBZo89k6M9k",
  "key39": "5dhqS8HxAmtCbRF6DtoamEcbngJMaQLpYc7MaK9iGGHCibg51utsu5VMTUKpGebYgZ5ZUHCWg7wXJoeVHs1V2ZPL",
  "key40": "23z25SS1GYQvioXzM2dWSAx4NRvuQnR9EeQshiTRAuaP1Gt2VgbArfxYo4Uuqp6fMpC4NmnutKL6wM37Kkwqo3cA"
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
