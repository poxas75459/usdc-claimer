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
    "23posee6Ktwk76PJmzKrvcXhbY2SqLsw1eXtZvuh8VRem98o1yJqS8SwUafvc7MchfkUvCpRTAq8wLZVK1EK1Rtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y2qGqzyAdTRFzdaCfD5A7G8NK4Z8PxwUgFpWnpKGG9qbYrrqbxoc4FxzjBkeYtww8Y9NxB5BZyQ2X1zznTRJmMx",
  "key1": "rRDbuzpNybfuRs6ANdD5m6gu7Vo7TC4NEyJNjnEBmfNZ3QJ67bJBcHCNkqwARSozNr7T1TGquj9px8DQ5trncyq",
  "key2": "5Gs9r1n4DS3FjNuWdDkc6vEss2jzDBDP8PL6dHqRV28ZcnCVs8ErD5o6M5FRBYNUqWfqeqc5LXPyrzjLDHjaweEm",
  "key3": "3oJ97dQwtDncSmRGiwVpMnRbJ54KmDvavAh4vrJHseuS9uqGuDX6TCnrYYtbkUNeCc9LdFtbttq9XxxEvh6fcQ6o",
  "key4": "3WiffHZYYnRBE6yfvNN2DMZ9H7LzXvhZzNcpykVZz4uuvTXNmUNJtQNyRFDZEXmve7frCzCRemUTk3dDWGYEdsQM",
  "key5": "5ERobqB9dnEPoMjAoRzZHhLzawoRqXYeN1v5RQCg2EQ78RRxpdPdREkAHzpAKamRGEeUXYCqP8mkSrmaS1Lw7Yay",
  "key6": "3vxpY4R8s44NWd8gY9u2nmHuC8Vho6SaBAFRq9M4KKUx6BnkSPZQXQGjPv4KnsqPEFcBHnM8fcZrYtKumdhQzuLa",
  "key7": "2SChma77b6phhhEfxK8mA2UXs2Pv7qzcYonXGnEyv9AK3QxkN7ctrTNtqBT5xvGpscU4oX3kkZDTeQeNAEeridrB",
  "key8": "5EZ6vhHtrgM5aNX7iR1Kgk79gNiy1QJf3TNMGEfYfD6wejdUAUB5URuU8PPhVUjAP5Ejv7w6ewrdt4vW3XijSTtx",
  "key9": "321xaej181zAMWpg6hEBcJHu8cUpuUem5zeNgUWDybrykCjgJJCcEXbF868n1JaGp4m2hECRu5cP2ZE18knx6BjL",
  "key10": "5J8SQbD9CDF2ukWoiHECPMgAzg4q7MnaqC8BsiAouEjLn18Nn1dDp7PxqQB9BtZeNFDEP5Qm2Nb1s9bhVUZCuYJb",
  "key11": "4fnTqxKYjWRfyrobMztkUiCyK5sZhzikfwVNGZ3KeJrLN2TruDsVhHnV3AQ52jz2MxcXZnJBepWKFGJwKagWu797",
  "key12": "2VRpz39u6eSRS9Z7ehVnpuLei5dkvCrqJkEmp2eTC4bxvqdK1zCJmxnRF3BRTsk8tpa8pibQhyBvuz9waScadVR5",
  "key13": "4ht7UhQ5gMqY6vrXNbUzEXBXXQ8BPEAdzHmpgigv8SR4M2xKzSfkx4XAGU83UDACamkuJeiajNEKU35dDp6vxNaN",
  "key14": "QmdciBr1SynXDAZK4sKJiqPn6EECzJWNh5mM8nnjnhRmn3erv6QKu8U4coNubs2FcNEpC3ewMUtZGjxPgEWu6J2",
  "key15": "4aAgAy3MbdpdvxutwGkKQ8pFxzZsgJwdAfvdXujA51XAytxyZpbanU7srV6uQUCZcE75zL5AsxrC2sh1v4ffZ9EG",
  "key16": "5uNZfS1r5FTm9r4A4xV7W35rrVTgQwMoQyJcdmBP4xeCp2ppmp1CwW5Lm4RhD2ouvUBSf4UCPoraE17dhscyiag7",
  "key17": "4yVUeNKRQBNqZpdfi1zihQv6tFhJAWSdo8L9Ge3P2zboiNxSWwvT4HcMJefL5XLv3dNVWcNVwYAVpCGEvnsCzUZQ",
  "key18": "3k35WcUeMWQAScTve2T6Gycy2KtTQ4dmY7p13jHidwQgB7KSzUpR5skuSZPxjoLtbUCGUHJmvaLVnZvGHih6QTus",
  "key19": "23HR3tnhumhgUKYFoTdsw98Vu2swbaYMQ7K6FvajsiixEnyNQoaxi1Xo4MQ6336AbLBfsSnwL9RJ8sF8gNCJYMeA",
  "key20": "3F2cRAb12cALzTZpjJXyZXDQo5CTU91CUjSKp95crXeNFu1rQRjBN9sQSHWUt6uymKFk8Gbz9YuGyKkCHKgH8ZVU",
  "key21": "zEuHRdbfVzukGmKbSPC6mEezPgeqwnpD6aFiiHo2KoYcpDtwdPvfYi1W1Q58dPKETjD1KzfwNHMuA8VQ5mDBLH4",
  "key22": "4dsj4X7MxQXsJfUb8ZexYupm76wy7XVXNg23Ng7Bxoszsi3NDGEG2QRAQSuRPfzuo2LFwgAeFAsgpzZbWyFZhmq3",
  "key23": "5UYVKaDB9NnPAbCGA9AB9hTGCsaMVJJhKDe3foG6j7CQUbRBuep7BgU35S4HiUPv3yCC7Cj4Go644FuAPYMRMDBm",
  "key24": "4xBpKSumFdRpJgSBEhAjArU7tSjn2UxkV2r2M2D5rZLcF6Xw1xAUAe81PTWPpkgqA3FKUT3rg5Gca8RNSMbf96cT",
  "key25": "62sh5Gx49XhP9FfmxasjHjY4njWPZM8Y6bs2FCdKb6BYF1KLmK2Qir4cFcnQ8DCVG7LLQfwr8r3PBaUnjvVdGCVE",
  "key26": "5H7yh2bzVg9C4bYa7UZwM46r7PCTh1CdFpoG4yxcCBtieUgZpMVWM5EQ5M8wnveh64MsKYd9B18UaFDbLhMyC3GP",
  "key27": "46hLxdJrkeNoBffczoDmTDJev2X9cgTPy36VjXPVC9KdDqGgmU8Jns2qYyZo8FAmDvP4hBw6cTAxLQpkG4FaQZbW",
  "key28": "52vJX6zki32V4ackoGu9YNLAy8Uwv8E6E24LVazfqmNsc8s1Sv7t6RE4vn3LXqYNeyuTLJaQRhxwygKLGbDF8pkr",
  "key29": "5edHb5NoP4Dy9zqjnCjR8v3daesgCSbawEzWFPe73kxNmdrDKWyLW8ccbCmberkLVrFW24jnxwfNNTF6x74kED7i",
  "key30": "3hiBPsPkZsCg8CTkRt8R1FbhCqPRFTx4Fq3cRaGdPqkWa7PW4qtNWArXLKyMwSJJx21iwzxGfauygbgcfzov1h6g",
  "key31": "533bCNcXRkPRTGiBKnchTfYzBYHZgv4H22Gqaw25yLmJK3R9Pf2NG48t6oRnQtudPsSB2Gue4YwAFxuKLqDhPBoR",
  "key32": "4kGCdWZsT4oVgD7qUmHPKjLAvAw2dLc6eagVJPwvDMsx84ZfHehUxFtz1BKnoNxWgyhCByR8GXc4QQ9affCvREaN",
  "key33": "4yaLZ5NEd4nJSbqMTSrD8hydMNNGwej785MzczDi1Cdu6mrepwfpuZ8a8nBrTE2z7kVhSFyQHBLZVDt1J3yBWAQW",
  "key34": "43cCcXpAUzDdqZ9gnU4Jf6QXGgiGgZSEw3CC3ioMxgkDTpYMbqq4PSsoRcrusAkkcAQdjVnAmJfwQMgKDmebnNNq",
  "key35": "2rrJwYNDz79q1k9dyMMowVNye4erUh2v6uALNpLji3Z4FKpRGEcW3NfnbUjintcNobVr2pkGvesqniNuKXB1NSFV",
  "key36": "59PduEYkGTUTDkS4M4DtpGtakUFNxMUasr7dS86bgJAKP9iWmuREBpNXk17B8gwHWCWM3YyUDFqXZfZZzUxfSTR8",
  "key37": "5LT1f5sFcntRcvgScGzacNoU2oviQjdMWv7gMFQnZ5cwzqXGEe6Fwi25udxq2k4DgNouYxmZc7PcviWxsLdRnKBZ",
  "key38": "4fnqYCRB5H911Ry8YiwibqTsjAM7kWqmHX4Njbbjw2QFToQNYdfDueCFa3jeCvQAcYLNn4aY3ZGE9SdUzV8pmkfN",
  "key39": "5YAc8krPufGPvCRkYJF6YaxNmZN1SLuSz596Jn2vTWb8FovCmuBCD1uRhvZkLLnN3LqgBmesVUZLjyGKJ3nbC2q3",
  "key40": "3o6aHvqvQAVU95KcDWEYGNMAjVR2Pff6aUABeQ8EM9h5UgYm1DWmU3XVqhgLD1GDU9T1xFrm8smq3ZCCZtCHtVbq",
  "key41": "4RnjcbTfVaKTouYpPv4LQCPWGAu3FfXux2amLPBbdAjZQoTaPqYaomHx5qAMU4BonN6xDS1GVfMG3FgqRBLD191F",
  "key42": "3HGMzHmrzifiRNaRT1Lm3AQJtfED3KN6P8dTEqnquBRc2zDfwv8U8xz8x4FSzLzpXW3f4K2NsPwkGBTXqQm1HqXp",
  "key43": "FLjr7AYHBjDZU3RBm7aPv64hphyu9zVuaXK4xcaa9TmzDAGsgoM3W1FbCbt3s5N68VGMihtEQMe3oZFJRSuD72f",
  "key44": "5FqTf5CXP5aAS6Uy716NPjwhawj1e8upBXpdocMmCp2t1ae5pSeqrVkFmSLVWZxcm4DVUe62jJ8eXk315Y2iMgzu",
  "key45": "4bsLB18EzARrQphDXvkZfQStpjrzkGuyxSim9LGEexghEkHpP69wboYywKrZZzrBvPZ7zvLugzdTAFUrAFJ7xFiq",
  "key46": "3g3Ru5mmFtdzoaBd57UbgjzhNaYYxtvViWJ9d87bFFDZifdSEFLQscYDgxR4dPFAraTwjcdCVEVoKx84Y7GgHj5d"
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
