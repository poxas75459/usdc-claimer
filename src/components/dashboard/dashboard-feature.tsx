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
    "36uSrim8C6VjMfKaZ3QRUHkZXB1MhM4HqnMX91vysaJaWVF7nNQGyji7C7fDvJY6cUEXweFnH786VMZZLz9opMGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L7zdyJarNTTBV1bFWTSVwZ8hsGG5YSGjAXez5asVq6dLyuC2XFiC8QjTZTHStSfWBq5z4XnrFCmbZYdTuVdaLWU",
  "key1": "3qDP6DeM79mD6HjcVVzmXS1fNSH1tYoLwUxRLKvC8wBoVetbtffgUhvp3tmAioPbmUShG8bKtkcWxRNGAtAha8NG",
  "key2": "4kcvZEBTVbT44eh1mThpQryGdj6W4ZKFioS2ZQgepKNwdpseBsdJwLSXJa7JE5DTEBmMa8Rmi2AWpjqKuAV7z3jx",
  "key3": "uZs8CQFR4vKqpBe3WsNrM6TxxERfLvERf35vupJeixRjMaYPwwVYdHqSXtXBGVAgomw5XsSHcFocci3BmYtKn5H",
  "key4": "zyjWikk1MVpymCdx22tZDszAgNtv7oGMyU1LM9EDKFAM1RByH6avQBXXez5boVPyVwdgWtmihXwaCZoVFmiitYV",
  "key5": "4ecBXmrrVi3UdQjLsZwH94YzDMK5KzL3TdHg9DP5QnFGJb5ZGPu7UJvX8ScHFU6vYrPYoWStmwurG6c1DQyKPhAB",
  "key6": "4gCcqG8nzHGGXNWZibqCHZ6snjP79d77CcScMJQ3D6kpPQbEhZ1sMeuib1Wsh5TEJMKtNo3D7v7WyNwddhpVf5yJ",
  "key7": "5aGAw8PktwxeExczHjhsPBo57X5oe5R1BUqKrWkuqTppt8nSUApNyd9aRD4ZvuNhNmCtK9mooAixUq6iygGnExmH",
  "key8": "2MLMK4s1MhuDTBQ2k5FJiC1YCHn39Jk3kEo6ELxSXN8yL39arFUkhEGnoyqezPMrVHxwrUNcx4fHkrPBhCb3pFPS",
  "key9": "2U6fLG6vqUsDTQcr3qCg9Lg5JCjm8njQrsJnnfhjJYw53yNAcHAuXvPaeyApYDwbbkGmCUhpFE49exE37wuPyTfn",
  "key10": "GbNN5UPQhuPg6vEThkYcn6upx5LZhEsyZi8ENuHdqeWkekzUenWVWmF4XicMJdnYfrDSEMbmSGz9p1WtVDrYRWX",
  "key11": "8PnttPEion2VjeMcVV4WYr6YrgRBpwoaMi1yWSKYRiB5knboPS2EUtNf6KkjNj82uyvG6DhD19Avtr3s2hCtV3G",
  "key12": "2XYHug81p5sQu7CVp9r5jpyZdeaQtMmho3zSx3wNojjVdS38BUopr5VqLpD12RuPTf13bFBWP9JcetXEGWokBsvw",
  "key13": "4DwbNgMskBc4m1TfNY35h3LMzJH3LgmexDicwnXycgXKVQFEHBPrdp29eDaZRJNwaiipzesjjgjAJ4CSXTac17j2",
  "key14": "64b2x8MQiVAhLcPCQCmuYce898t3LTsYUaxE4y86pzVuCypJ7D9KZiysdrbcBfFaSzmdEKYxo7jYck4CLiuBMF4p",
  "key15": "291iwbvo2RUzLt33WE7cfoMfQPCiys7hmqv69Z6yYMT9Pago6hEogw3wx688owQwNkPYSHYZAQ3PYRpP8AibDPrj",
  "key16": "2PhbsMdT24MJ3aKWtZEfKsCjzaDwS6boxwpYteFzrq3DT3efSvvjxrFJLJC6wHXs5vzypwvyL2pSbwvU5CLMeVx1",
  "key17": "3abUWzSy3jRyMEDCPWQvXkokBCirisHuS6FaN5EzBpnUoV5hh3VGxsEEncQZoEFzTSNHu28MiXSfPnut2poYBTW1",
  "key18": "oExhFgFRaeHeQx7fPzxEE8v1gHGBa6Cc3GKoMEhhu8o2qZjpRZJWzGWGxGPxZneGi6Tv6H5ZHyR598kXszfW5v6",
  "key19": "63JzSjQaVLXnD8yHxWwp4tQT6Xgq6H7YLFV2wQi49yuiFViVmKqLPLYM4jMJJtVwHb4y3M5GqcMyxCdgZqjMbrdq",
  "key20": "oyxMay6uHzmEGPhdZhLbMPLJsAZuBW9io4M2EMYUBazxAqEGTurosR1wPKR9WVZ8tYP33LeJTVatAYM7dM9cFy1",
  "key21": "2Eub86Y5tisewt9gekwhkb7wRK7weGKRnHXVdJ49r5GmN3dvzicbRS9U3hRnHkHz5kyfuvG5vv1a3rouCRFicbDf",
  "key22": "3qvw2MvUP96Mmob9cRGzDaxzZUdqxiZ9C7jeeBniE8Wtcd6ptYvGztJXbjQsbucMjL4hAMf4PzTbAN2RNbGoeBno",
  "key23": "4RRwZkzyVkNYzxcygEb1soyXBhnU5kMeWJrk8TE7JjCXmor27SgX5QSk8oReEb8c4y6sMXxzY73WZz27vGoXWXVq",
  "key24": "2wVzBHaorPPMuWyp1Qcq7C2PnxJPy2g5dLNmtEkoZtByc8AADYtkTa7hNxVX7oRduwTNWbYaKxSuWJzEqRRB1tef",
  "key25": "3zWP2EMQBhjXLE5TVLB1ht3vqJ5hWVcr3QXAKVC8SEXAvxcQBZhteLDsLNKjKELLRWuFKia8wKBQUnmy7JWCZfxg",
  "key26": "EAHoqfVqTwYidAEdW7k13RAXtkx694HzPkMi1aXk5k6FWnXZzHYJM4rzigutyjwhzCoNJshQYDCSj9SPy8qknV8",
  "key27": "3zGwrU5abwW7JmzbZXuTYYrftunNf1cNYeT7tHfgEBW8ynQeHWjrbBHAn3UNbbpQPN5B6tBNefgZBchFs5sj1uSJ",
  "key28": "4yX7X12sStJJCiwpqojtEbn8bDET6pedAfWZSEi49Ths7eWi4aEQBqtvYoHGHD38zWjspCiEh5M12fUjq4kkXXVV",
  "key29": "4Yu4aWuWx9FV52zyeqdZzqAWy73oFg93v71FQWAybauZ7CqGzWQ3JQASnp3b3j7DZz8DkPtGmQx1hyL3najTvHPq",
  "key30": "2BRfmJmqY8uW21gERsJ6KwWmjZmC9cVEVir8YimNtrpj1tB3GcDNUj7vTGkdDXQGsVm3kaBGQQL7dkfAJenpUZ3A",
  "key31": "4hk6Yk49sdUvJEeJxHZvqvwTFmJ9GcVFCKtsu5we3bSHaS2kndmVYxzuKcfYBUVyFkwQMqT7T9XvLRr54Px3raUy",
  "key32": "FBr1C4K8KT6f3269bJX151c8QC5g3qcdMjZVLwpL6nZwd5SJUB6F1v9kQa75NEmfE1MbxcV4x9v472x7Qy2SFHv",
  "key33": "3ZdXWHKPmaEPBiMZVWeJWDCA1htXg91Fb3hvkLWmVdN5joqS8Gi66mMz4V2iNLr8kBAzCSRpuGJeAktYv1T56FRS"
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
