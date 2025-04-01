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
    "5gfQxyxm9tpUvEJcPhhDD4tCJwamj8KaRi5JabQZt56myrR8jEiuE96jbsaGBvass2QGimeXnz6hJzGPc8iVtBs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cjLbgcaRsHxfREBucc5aysGqRgvyaR7pz4V39mn2tGjyhuyLkz1oqeG1bCzeUPg49CL5eheeTAgN8HVoT6HyxDr",
  "key1": "3yYRqPNv6uiAh1hi99ffXtazC9JwBtGfMntNCmLpwN3EUVN2UCv16oKEbP884yrKeFuGxv4fJFXBAJK1hr5GHDpr",
  "key2": "68Mex57MquCoyQQGd38qthzhgkSoMKFZKh7kTJZR2Sijz7JfVUsgFt1fxmaXZmCdPXGDLPTfyq1BkC5apNt6Y6T",
  "key3": "58pw4uXXL92DV9Rh8bXbCjFgPU6RfJNU9S2p2yVh3pXNUBwMJtGRTNdt5HS8Uc1esnTiLhHs9kJ9NtHzZT96mF5B",
  "key4": "4jjZyQvPikzyWwHJUp6ybzBdNiJtMvKm8kLuTQcWYXG2xKMGCDaRpSKwtmVR8zNJ3nPek677gwtc6xD3HuZ8YU3Z",
  "key5": "26dFSPpRQWZNFE9RFnbUm4Qu5vfuAv1q3nZLBde627dAkxbvEC8jHGLtza6urjCosicARUc8fUtXXXvxbt9dvF5W",
  "key6": "SeWcNeVjrWmP94w9nzLn9ix5mKRjkjSj3DwihWMLduNFAbjF4qnn8gkEJmJrtSmL5aKamEnUJNerVw6yTXBx2wR",
  "key7": "61GVPX2zhz7HN3hvHq9RAUP1TWDLeFF6bkDVazN1U24aLxHEA9bUWMTQ2Lw2HStBhjuGYxSXj8PG1ykuKJvuc7HN",
  "key8": "2g1DRuf2CfiD6kDQojoudsg8frcz1Jb3WAK1yNjDHqNWNrG9aBhG3KQq3GHgZfvVq2Lepb9pisewHGiXmioxMnpN",
  "key9": "5vpsFSQWrN1UWz1DXxmvTw9Wg3uGiZd54iydkDgrUUoFc17HaQ5GnzU15A9foHnk8drxQQQXM1E36KQo6wyHuyUB",
  "key10": "5Bjfnx7rThApZ9YPFDWvdesGEjpt9VPDw8YMdVL3euP4Es2iYuyMitEsxnndYubEhxwz3dRG8cZ8N6Jc6U5wP9R6",
  "key11": "g3vjekJW6K8jdFHxPLw3YQf5Cv3KAoeLiQHfAWQDBM2KUyR93x2X7MkTjwfzzdyvPM9QCLkwfi9d146eP14DSwT",
  "key12": "63yu5BBA1QphX4RrLkQ3DtgUCFwNEaALRgPQwxU3Hi6Ea6stsDFjqLAjM7SXo5jpEyhrJ8AAjxXMu1Fk7zUa4uCY",
  "key13": "4FqHaTwnXRzWeQF2Yuj14rANU5ijb1ywvHL44nnWrrUw31C2xVj6LJdhG8PJyH5B8K74jgjree836W693bRFUhvz",
  "key14": "336pCBruBfnU81mYruGHbnFbqdxP6zKSUUZS2Uvwpzw9Kn4gc4Ee1xwx4DfYbQGR7kJXAvaSMy82rcR8XD5Qigk",
  "key15": "4gbeXURM3duoJAoxW6bukLb54maDmdEoGw2TpLqg6HvY7xNvmuVNAV2hoMUrmHig6TdMTMHjj6MgCkzi4KbaXawx",
  "key16": "44Zdj5jxhjkHXG6Kdp6T8EF4ptSwEk3qsPePkRGfSTwdqeLWwyLxZ78LQ9exHsYoCwTN2JY2pJ4jcjytcoPoasQd",
  "key17": "312GPQnytYMS9kMyLN9gBd7CRwkSh5QW5S4fMpbyRKq4LFxE6nyGWZzQNSWfVfZt1Q25M1yERAuoqkWNeSkgRDJY",
  "key18": "q3j7wPT2fSTqVAewgi2q5u4xHzBAPBgUSVCKHzBphVhqpyB67UgpRPCxcRXVpRmiqgDb68TPEngNEUWX5pd8S9N",
  "key19": "2djvfYdmAhyRgYa3WUoWfefvD6WuRsVayhZDPt9VT7msUz3x9eNTdfv1xgqQ6LrpZzz2GE28bVCaLHLTF2cxmPfJ",
  "key20": "3Ur9YFPLiLrrFNKwCBDL7z4uug5WFdW7EhcdvCXpoUNiAvhp6gkGftKPaP4vGj35cZSBtN1VvPkk5g1RA6cAutTg",
  "key21": "23PfWhfN9R2T5e4TcSXxbm6AecDw3gQyqQLiviQauZ3ZY3yZ4yR3nmf4TrRtaY3eHUJ1GZ6jow8VfQbRjCx3v48a",
  "key22": "4ydKsnxZVZCDqLkcUqAd83cDbmaYkH8kTEjGAuo94ydAkN5sYW3sQydNY7Henq1cqVbCSAMS1UiiYNdy1zZGKGi3",
  "key23": "5W6pzwQW9vM2BLJUscZs5SXCPZgPaNQC9GFJycsdT5iqUv17TJzCcd2ZkSvrsLUqaXFu3gXY97W8GV37sVBPrDu7",
  "key24": "3of3H4ynfFMT6UnHFcrUhvsoGs9WHTFf8Bhp9SZL9zpUTrA3HjcFq4rCBmQwW5SdSM8a8gA8b9AxrcipH8kNAwfj",
  "key25": "3PTUV4zvzeVV1Ci5AFFoC59KZ1dHoag2piYpKbhNUBsZrVK2bifJveaQ1cyBkLvhB5doTzWCA2EvK6s2TrqgDzcC",
  "key26": "3pHDwcbkEY3edBdVmoiafMNwGAvn8wZzk5e2feC5xMDk4KiwYD9heU9v2aZrRPfTsis8LXMSdjF9DtsqsuEJrp3L",
  "key27": "2MqbSztXBFFLUy8CnzNQnGdgQgBLp2Z9ohnnzHTNPE5gtQsBTGucGAq5sm3Xmx3KjAzjHt495Gwa2jwtf8LGoZrm",
  "key28": "4dXh5ZZpyjbFt3ZFcKNT4KukNWn4wX6Wj1e2rSw9NsoLYJExi2Xo493T1B1VnqWWDxZGXwft4pAjrwqKDsjr6rqS",
  "key29": "4UEvt38n3KyK7thF8JtJrkqW2Q7i9QpzLTfoCUqu3hVpqAV9ceSTZZ51CPqevJetyeD6MkK6VRugzhFrXitcBdKJ",
  "key30": "4qdY4T2PzF21TzR6yjBHYAA6Zg63KDPrfQHri23aeB5jGUH9bXC4Ks3paWJz6zbzezzQqkh1V4QLMf7424XMLJDu",
  "key31": "4N8d9U1dqSr3pByskQ5wGhDVxeqEUJ6RXbG7QM4A2g9RBeJ5zBJA4nj2ajKUEKZ4fL55eQ4LeTHiVSAp6eN1ifzB",
  "key32": "5nrRSBaSHWHcw8bnz6bARroUWHUEYDXvjK4FA5SBGvMmsQure3Yh2WPd3R9NWfQkLTdwJEJyQq6uA9WCpjWo8rR4",
  "key33": "352DJ7wEjzMaDBqAjeC92ezQL1YmHCx6L9rQPcMpcquRv6soKM8yEAp7UJyT74CuUC1Uvu4r9DaWu8pX7jgbYLWm",
  "key34": "L4dnvPJmRXvPm63VyN3Cy32QcQpmBrnLonTWaE1tpWantpX7SgPu7e77LvxFUtuMWTPMWmjht2XcUS7NZTUsUSo",
  "key35": "2f3goE5PfXEcxiZfK6LxKV8RZWfy2wKdzAKGDfv5ojSuTDdwPG2Pw9dU34UkECL61bPstXKQmaSX6L31JxZmh35k",
  "key36": "2edB1jvQFEAku67AdXtYkNUonLxWYL1tFybWMUC6rkSvS64tUdBKRhh63EWz9MFtKxZp7HsJXGRUkoDQoMfEPGpu",
  "key37": "2gvbc25cCZgQeMBEn5khHZzfUBFuGrhUf6PTcQf71c6DcCqSFpwpGL6PPW2HbyaznPRrUVtuzwKoe8WYLv8bRUsB",
  "key38": "2zV3RPJhfAKboT81DrdLHP1QSbfwSsuzvUTRWNErGbtKdiEWDzAfx7b5Q93T97xnHcsnHWApHRXJwEbUvhcxeK2",
  "key39": "XutGCcmQM6pL91A1zdCYs8AgDkAFiw6mXo7Tq5tTzA1VXXhdoasvADRZR8q3AS7ZsMo2q6e5DvypfLPkRuJH5ob",
  "key40": "55hQN8L4GwYLkzmC8UwjpZS5GiMGH6AkyDTkQW1m4odAB79FUaBvYkVnKcnfBN3EGJmkfox38rQFjGFb92Q6cx52",
  "key41": "5xkfQLa9HdSJe6NoiyyWHdtweToHHYq4ienuTnbUpCmTauTTVbFPK31NbeEUbUkr3xFNzeZwxZodSyRNB2omwLm8",
  "key42": "YA8oPeEQfoh82pVLAS9PCuk2tDnq6bZ5aDdZWzn2smzXxFmPyNnVn9LQiiLvPEpCLu7fLgombXhUxiKawdQvpbV",
  "key43": "4Y4GP1pzbZi69BsnxuBkRGyLrZUXxSME9Ta93UDB4LDFEYrxPRfJv43DFSxMxvJrkYaLS1erdAuE4PcL5RtFdQKm",
  "key44": "3BQiEWt3VwSsm5fCPArpMDW4j18bj3RkT5vuJfUwiaFHk4mTrvk3Y5SCUYfUoHGZYLtG8cSFibP689NiopfeeTzq"
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
