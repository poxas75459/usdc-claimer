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
    "2bEHZx2jWy13jsGFBSQDv19yf7FpiSqHHLWhMvfhppqzGp1FvPqCGcGtMHe1RGGtDvTvRCAfj38eggZGVpejVmkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gq3RpufJjGp6LKKyzoG5ihdJQqj51VWkZHB7vCbG2sqGuBnoiqmXVUsZphUo69LHiwiPbmm5o5MPd6MEGsJUapm",
  "key1": "4Ub2TcT1Q8RqWnuxCLb69s2XypMsaemtGUBHnYLt1TAqjeMi29HiEhLwBBjrnURhzDp73WQT9bUgdjfCw1fMPedz",
  "key2": "51nBc28cD9bJT88FQR7BdgHRexL1WevVzncaRqXVcH2JmtYg7M1AbHXwDb3KuRaK2owgXoiB57HJeKWChJ8RAD3N",
  "key3": "5ePBTdhhQkbvd9YFFGzYGinPQLXguUXsGDnSZTFq3HiGu48Kzd3bHEA3ghroRTWhxCX5DcQN5pHAaDTPUseaTTQw",
  "key4": "36cgHdNPjPX8jS6YNMcxBX8qSSw1MKUimmRnEwc9L8kxssPWxSJKhMkBGJcxFPBEucaXkjXQBUy11bSHRcwM2oae",
  "key5": "4y5xrMFH5eA4JKzNst44WZPQ4MUaZ9ixJQNNSXSuwmo3R91Sy7jpoUFfoenirjiBLbCbruZKhF5o9sx9JiSk9EKy",
  "key6": "55BqoXZjxphorUrmYM2m9UBNmPFY3usUJkoU2kHkkceaK8UEVBmMUoyPfv9LgsRNLxTVw7Lo3MRbvzssiEiYvivx",
  "key7": "Ncy5gCUcfHGiZy5koJY34w8W5q9a218GLMQ2KkcKF1dSTt5mvcPPvjiwAoig8bFRyqTgZU1TVUxHkhMdM5kHrkf",
  "key8": "5tk6Vs711syjqbaVkJw9U7bi1wocfHZGhSMrxvLHtqzBKni9EWbyj1x1SfAztJ9AJ6ETgUoyB3qNQ6bAMgGU8uGk",
  "key9": "CKqgvqZvEUvu6fPKQACo8isC63xBy4VFHFKsVLgjo16AuXmptMfbGvTbLbfJ9GwUwv9MqgFKCe1PebS8CokEP4f",
  "key10": "2bA3aDJ92s7Jtj43iEi3scFyH1afTxyvoxBfC2Ruy8nA2xonxeWpJGCvsF5VmXJTjHhWLm1ix2yHuHfzPFY8x3u5",
  "key11": "AvJfAmUV4dzGYMbMDW1n9mESJ9dWYnvPjB6f3pXacWuNCdwLTupRr38eEMkkckCBchxAkp2YVo5YMVjf8ptabKp",
  "key12": "2ehs6bJq4gWB6Fsc5uoTpng2vNnqvqHp45wStDcU4ChBEwpvyMvUPRTknCeDFWbHdm7LWWhfJ7B4Jpuqz6K1iZEb",
  "key13": "3btDGgC6uKeLajHAewuGivh6QsKTrdvEyv9szjCvEqeQ2ChhWv6euF739b9cWNoX9edYYieR1GYXedDyxsPfA3xe",
  "key14": "2v4TK2ZPiGZj8YovV1jBXh4SWGcrxEX7eFiJzUFPhZoMaiMKQb2f1ECU5MLYk8ZY37uZDfLPC1gec5iupJAR3pJ7",
  "key15": "q42cSyjHyQEUzvsVUqxWZC1pDVouocTobaN2nnCJagBhEp9GL7F4S1fRVji8WGKxqCNVB9JeTS72FichwZ8nP8r",
  "key16": "3pNW4Rs2bC9hzXiLzeJEydgyUtC9NiDRxXQw7biEZD6WQn7JVygerqYe4em8tDMjy6xpV1jVRGwoczoiAEuNvBCU",
  "key17": "e1g8H7zi1sVZTcB1Zn5bE9YwqRdvDaYMMRGYZ3SBtJ68bJoW6fijXFQTgP9nDrEoVY4QZLjYtCinFxeLMZQwGLJ",
  "key18": "58j2a8QVbLmK2rPAhv57GU9rjXi675gJPYU15EkaMaddjBSY7dvKzDXCebRLZTZ11wxWiKQ7XMmsjCbyCqKWXhpi",
  "key19": "452zDrNN16JSMaBMp9PX6dPbs2yKTE8o8nd1gEHdonPJn1Ni6Zg17aQ1Pq1PJWG9UZ8NZvKFjzE7C7F2yH5iCr3o",
  "key20": "4gx3HBVunDMaiwAaG2Hp8y7MTcpw5d95SPXm6tJFSLzohsWYcafZgxNSsFQ2D6Y41cVG9U2YqnmsSxKLsZMNcyou",
  "key21": "XCy52togBUpv85SfFDHRo7Lhra3J78ar3gvbfrg1HTbwB8oXw7C3mJuyic1zN9nDi7vwmFm1hKx7Pjdy7UCBwx6",
  "key22": "BVDQXvahc7xa8iWnpUN7Y7KvjZL43LJd54cp68WwgKTwUbvvBWdPM8WmmYHarBLWS8joCAKTCjXf6WMbwVLyACj",
  "key23": "GiweLcGb5inaGsptFkxVx6fUoahw9RJ4uVi2QBmJNARvV5GwqdrWgMhLs792Uwr8rwgzZhb5McBsASkUSNWZfJk",
  "key24": "3wS7PAvZGAzX6qhizVfCMTNwpSepinL44RPjuKGEYZtBMbZhYt7jkrVdXiR2U7FDAxDsc9L97fQUjDKARWyCVMZ7",
  "key25": "2rkb2Ji5dhEy9cQEcwSqNWqST4vs4EpNg4wvwpxPGq2Vzd6EZrmRLeCy4F78HSqxHjNMD2V1wYVLWU5z3CnYDRRe",
  "key26": "2o8SB2T9gYfN49NCLWoFZiDGzD8kU7FKWbANS74HqJEDJ5ZMi9Yn8QY6uhQcdktVc1n3o9LWaXmiYFevti7qhmpm",
  "key27": "4xx6euzo3ijcmDFkDBY6tWcH65UfrSv6arG2QAtmiqpwTxyfZTo2uAMJqJiJhnPCjMtN8jDFRW4zSP7eH9znyEzp",
  "key28": "4MLLSo22ntZGj6jTaD7StTHvyuj3vZBtmazk5XAG4XyQToMHbAaxQEuP8hpGAiaVfuzpm9qq6m9UNXqmGxS43nsk",
  "key29": "2Wg293obvjcV9Ntjrj6GWxPZaoosdKiv6uvVVtRAzXk514adeU7M72yvdV54uabCzDv24vXn7BKCabqeFLCizTso",
  "key30": "3GwmGJyFw7WPQBKupE4ZH9PfF3n4ZkHd6JSCMJUEg7LEHWGByVNFJrPxGQQQoHLbHA8RdJrN6zJKv8WD4yzmxBHC",
  "key31": "4AD7WyDX1WtjPzhuybkdsNDXEXJqbku9zv3gFpkDrvwLvBW65EEs3QfopXjzFc8fGvWGfMX8SqQ3EJenjaX9zcj8",
  "key32": "4jEQoDwniruPLUdUXBczwyM1RHU6iZqEpJjDTqwN7YCvtJVnUYrBCoVcAwRmRr5cszjNbhkRphEiNEDnkz5xh5NF"
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
