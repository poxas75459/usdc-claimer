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
    "3mFrmt6DRPL2kDGjoUbaSmnxxgL5Sfqq9QUnXSvgctsuyVqXxR3cTozKC4E1XbgzTniPkDeEQv6jA6c7pFN9Cg3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AeL4kAEJVBCW8Z8oZ5DddsB4eefaVZ8znbSC4YNsQv4WTnXYkzWZbwAqyHtHpvCwz9r1EXJcdARnF7rGSr3e3Ku",
  "key1": "2BQRSswNec1wUDU2g13gGt3DhbeXea1cpXAQL2geN5aNL391Je6VMpTwg45W5FP7xpoPXuwEjFbv7kDajD69nNq5",
  "key2": "5pGab8sfspQcXwunv9tuJ1wUL7zTX4HPMEytjYS53VMHLa1HaF1E4nBLCKravk6vBfjuPTrkzhRWi29A7u64vXxe",
  "key3": "5iawHcRXaTtKGkgC7jej8r3tpiyQSHTcCLzfYXCBCLAFqtYjhQnVYyYbfjs3F5dAFQrWEaEUVXp2PjdfZ6F71zzB",
  "key4": "4RA4GJu3APs2ewvFt2fDiSqo7ncsMnVSQr1x4WJzADthmTwXUADt2TufoGRXz35ohwSCMXeJRKDUhV8Eoh1SUV14",
  "key5": "5Qzrhz5BfaTCFZEQ9p2eQEoYcQNLrsPYx9qUkCSBrsaP1teu5T9ivmaxj3jHPTJNRhFoPfdC7cNEfVic51v9UaoG",
  "key6": "5sg2brLdzhfcSNvcyCRwtHzLHtuj7t73ws4KsX5JDSjcDvpR5UrmWDDygZSFj9Uv1jMqw139dcXpGgtb6MUQmvgN",
  "key7": "PhNEu31RVZ3MiJY8YKuhTCSj4KCDcHSkmTNygkcLYudm217XUtHS28MVbAfvNeErcPp2139dHDNULou7pjETvxY",
  "key8": "4B48csQ2k74hVH7QWDPWkod9KkZB2fHAA7CzbEz4PEuohkHse2JPhnsL6m2mEWTcpUBDSVCCSPE2egriiK4Xnbym",
  "key9": "3i1dRfsy9jr7N5Tac98bwFWz5QW6Eq4SCwM7kcKAsWLvvN2yCzNF4Pue3gnQJNAEjqkAHbS4M4odXSEggmAcvK6o",
  "key10": "5KnapRjsUtLyUS47C34qpCNWh5gkL5h7BFLMgXePdoaKoN1YCSk8bo6J78KQYA1WZuK8TTeyfapVXujvtAHvvTGJ",
  "key11": "4frQaKe7Ggx2WaHgdmErBP3bhRm9AHHSph2r6jC9NVtRwpsW9bCHa793J2sphX52QZf96fE4jymqpVLeq536n4At",
  "key12": "3Jah3xMeT8A2gDuft2jU2TXYdTNiXc1W8HVHWedHDY2RhhqNMNH8oxnVMrKyzTDjePk3BkNtb3mDs5mifgae3F9R",
  "key13": "5SpyzYmwzrc4mgpQcYuUntzM4j1w5dJgC1Gag3sJsMdhn1RkH4iQCSyWzomyznQKbfpZBXNoMUPwkwUogVohkKyg",
  "key14": "58LovjD4qcvbSWTbCHDgCL44cAsUcEnBXa3Ar4zkpTfzWGt4x5BcoHQZpbpAmSWBV8yvoJSc1m5JGb5Nk4nZojRM",
  "key15": "4bqiZodCE5SrTUgVx7jLyWD5pH3f3b5USJ2dd8DaAfaqRAxKhgCXdeFVcx6k1gzVoGpswThPfpvW4UCQUh4XMjqh",
  "key16": "4zihKXcxBqwvkBjMPaFsvjJr7PN9vS4EWkx8N1RwuLSXVjUVQ57cZAJWyRs5yKNJ3rR4ty6GsKC4baYaFhH16LqN",
  "key17": "4t4zSkTebAFg27Nrwcz8mVd81uLabjyHgN3Na2HPSnfsDyWqLxYakUojsh1hMVKccJGTSoQDQXCvxPppPVMe5kYb",
  "key18": "3EicneWc15P2yxbR83tnhz38gZXTiKKkWSfpJYWgs9jC4QPxQw3qnsSMdqaS8KjL7pRaWTjSZU2Gw6ZCDKsVdiJm",
  "key19": "cJfnAjzNnHC9C7uRFouCpdYpN3S9f7RK8sQfo2JV2VWXPaiWRobQkcxpdmbvo7yee47BCNhSfksDEtwWBd1nJtZ",
  "key20": "35vY35svcL66PyGGBezEBSZ5Q6TTtivYUbp1nMaP9WSQrir5s2BybPCZXBzEXUZ5QiewLtmc8Y4GxRn6vuF6VyXK",
  "key21": "3YYAEgaNDh9pBduKdJ6VuFrVhTfy1t4cxB2vPJJfNeeRMJcXsnmnwf6gPxzFToVvnU7JsUcxpzGi7E8Ay3gXeqym",
  "key22": "5TfUirKtRc7yJo8RiUzjuo3WER7r4hNa41uHbV7LLg3a9pjpTeezoWWuPt45b2Z51nSz2u39n6xwgU3TLam6SmNb",
  "key23": "N7dBQyuqEZFSGDK36szhz79QpwhyzDKYj9m4XKd7kAHKNqBdhL9bV2fMsEzPGoPpKj1YpwbUDdKtSw1Z3KCZu47",
  "key24": "34pnoy4HNc9jNA89vUsfBEQ8G3DXj4pPvW1pzaEhiYdBUozm4LTWxxKpe8ULWaVbKg8dpVqPuF8HFTFmQiDAjYRA",
  "key25": "65mNMx2WgToDngmGidQxHHnyAKrN2774j24aoiK7n3mXiQ9id9L4ALamg92ffdP15LekMR1VuyKNCeY7angmR6iL",
  "key26": "5ghkvc76AyqKhF6dTvDMZcyRE7WUgCLZNLXyRV1Esj7ewiKAG4BTDjAtm5VMpV1HZisAumTFV3rh2jBjuRC1BnNM",
  "key27": "456hGRMWs9wSCh4CFXfGnJ95DLmngAPFsUQqzL3MmWcXPx2r14MQ2MyPvkWwuuYuaM1CFy224QYyR4deCHSeRt7L",
  "key28": "AKXg89LWFYNNgzSVM2Zfb7TaVoKrz5NkviUqKgLnMAQNp1xw4FYjzL5RdiohXYyL4R7ZY4KdoEfnAgj9Uwe4pTo",
  "key29": "3f86mEmKMi7oGG6s5Z4gneAbrQyFroLXm8DPmJWNoJ2CypXiLcvNNnrPVdvkLJP4W4a5H5ja7mhqqMtv4vDKgASV",
  "key30": "M4rXmknfzuhHRtnTN3KMRnHDBRe9p2FuJsJYwZZYUbpVBpXEcDKQiWLhem36w4e5hK3j7NKDFeH22QuACTJrpSb",
  "key31": "64SH4xU9GD85DQpkCkavTaH4AkZNL3ZuvbQoWMz48oGF9stRZnCQCdoyagZYZzkYGjKQH7wAv5zJUqkdEtbYV8J8",
  "key32": "24DXkYsSzJvG1MsTb8qDTBM1UFhqXo33WuB125YSq4M7VNRhfhiivkmKgifGpRdfF4CiavyuvhJ3SKAQPrqmVBUV",
  "key33": "5bKshTmjWBw1FCsLcfXcEU4qjkdEisD425WpH5vJJmEJitiJaeaURnZpG1TnswEQdXNWtVkDk8Sp9zPPtxvWhKw1",
  "key34": "y7e7ZZ3oAsfH7iUSysKrhPfiVkeXEqfTUxTLXVdRQWEAwABsGPLwdWcKXwxDjNCd8Kw9fPzSQf4NidNXHnaH9Yb",
  "key35": "36PztDKVqkP24oijWfb21fC7e1oRv1osiaMbWa5hJYQfxEyN7qsc5Js1kgMorhm6qd1UUCuKBxkTrPQdjS8VRfYC",
  "key36": "2ACFHWSR88iJ8pGPyYemx5XjU8uQH19Y24Wi9VBBFdn3VDBeApWmNR3eHRAspKhfrThrNMLn7rJE2YR783WqS7VH",
  "key37": "4RwfsxK4Nn5PrpbYonZhG5x2VQQTTDNxRDwjBqDo3gR63pw9QSCG1yvRcLVaFcjigZ2PT5qwKQv6YyBU74v8BPLm",
  "key38": "4e3KH7xGEd7EK2Tn5cdbCRzLY3AvdEnWYXNgAjDYbjyKMAzLuvVfETy4EHcyhEfubuYTSEv5PdFMsSiZM9svhXwB",
  "key39": "57HcpA5Vic7PXScfM6vWaDEk2L9bBqUjVvP6zmgfEGnXh28X8zHKTdfXL6ANnKbHyEWpKchyLanQ9vcboUbohBB1",
  "key40": "idLd8Zf634cmrQQb2dv8E4TP2SpyMsZLbcT6tU8MVYUY9gFQwZGcPeoTQo3YdQEXzEBg4QkNmMJvaHNNu54ocUN",
  "key41": "2qvoyHRZXmWXQH2zam4NtckVnUUSZdzYZtda4XAxEiDdmG6kthDeU8rjmF2zRgxrWt6AfA5T6FxQpYJDqkBYxSD2",
  "key42": "2ovPrdW7pXoKVfuZZxP1VcMqv6gpddqPKHo5NUxqodfMmNnA3Xb3fjHTJm19pGr4BKZ7Fd1kSek23kCEZbfs1jyc",
  "key43": "ALs5ev4F2rJntr6g88wgF6DFNRCZmKka4jaB8dDhzN24QPyjqQZBpCjBKexxRXxW9ChVhFHJrUt28vzbLLoMXC8",
  "key44": "2h8H2gJ3fr7QMpUUh2SowSVXbRFa6LxK8jn25fzRgNkVZbofrF9S2kgWqp45JL976omCP69UnMNCwJzY456xWBHK",
  "key45": "56TPkSjWua7rYtVaVXBHzE5c5gakj4cWMP2sHb7DWEdoQ4erN8AA53eJL8WwiB1KYqGniDgy9BNpPnECRr9hRR49",
  "key46": "5Q7qCpVJxhpR3A5DuzBig7PP8xW1Af98Wj8zm1ApRxDiiz6DnnBmuU5CwZzNv2Kha4Jb7pvNx4QBTusdRSuMiWqF",
  "key47": "3NTm4aNXSVsBqbaHV12ojMenwfwBQLK1JWNEVewEsR52i6grxber3zSJJoeUrwGHsHFSQWRK5P5s9Swz5ZC5tMp"
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
