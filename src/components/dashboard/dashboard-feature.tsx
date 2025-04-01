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
    "5CyYBsvBdnhLqWZeY9HRrY29sPHwRNXo1wgpx69KRMW12zKK8EFE1T6Xh3bkSf3jMQAQxxibgz6XfgBRCCJg8kug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FJ5ADhajKwrJPg2iH1DM8RkvZuRk9pCkabDsHAv2cUCkEeS6RG818x7Qk1QtLRVWnKeZCDxEECurqd81ZvFWyiQ",
  "key1": "5RLpCU8vZNLgRwucdeD6y9o23d6jKWpC4NhpXWSpnMaiBEhLgHBWiNGFTJkhuxfKV2jZmUN3Dpys675R3xkNjUN3",
  "key2": "nuWPBwt6CtZYTcbp58k2LSzDrwXTfgpwPfAMZcivYrvWysRLZhdhM18fBhXwePHUWiAtqstHnK8QBcBeVtagjJR",
  "key3": "383encSvyhgJoSXhuSE7bnt5oNSTsRzCTKP5KCyi7jYm9CbEzq2mRYYS8aP9xEdVoZgbrZ8yLY3ZmTRLkA9o1DB4",
  "key4": "G8YFAgre8e3v6zuCFhpce52UAW2bmNN57W2hVwrJc8NQDov79o7i2AcKBtPZ2GtxZZqwKhVbdXvP3kczoMzVuzi",
  "key5": "ypA8XYjiyxsrTttW4u2F5YLQBaL3h4RaZkTES786Pz4Mpa4t7nEZ8wMB6mVUHQYS7TZLGN5yzy9iWfzntQse1NC",
  "key6": "7aQ3GNkJ7xtuhgmxThEvz7yhYLnzexdErFCCfJBzGijL22zBLcZBrA1vfpYJhadS6thoJDWj2sJzHv8behqMFLm",
  "key7": "4yyfCerncGj6PzgPXmn2cfwm3pJV3gEDWQjEDix5BQ6XPCEmNSkiNvaQVrNNYsVbqrcsidZizf477e4akHMPRP7A",
  "key8": "3nUv96szmWPNSvV9P8N95eci7iC9NRfuE2FB329h8YnAbUaDUe7DLJaEFdKU1x5bVLBpobwbEz7eEppJSc6hMZWC",
  "key9": "5agZpV1ZGqj73rpcpnAS2bsFKnxpf87r4Vyged7N93tDfY588LaHGmNA4gdqBQzF2Hc2YKxhKCj51kqoS1Ff6HFA",
  "key10": "4CUhwjE6tbT4tr43YyLHXSmWadKWFMpbc5hLLm1FpRE1KSybMEQZ2btHWJjUmZ8ouka23gWPL7edxTzcPLgX3cqs",
  "key11": "62Qyer9vmu4GuCauBQGpcmw9ueTD53cDeLtBbWJLrR2nJcEV5pyK3e5PbpTHme1aFxJ9QUWBT9TG4XHdLwQ83Keq",
  "key12": "4xyPU3D4PYZo7kekkaVcNnGjyLnE5LgRsXkY8SQM3dWiiX9jS2EFJ222D25Lzy1q4ypFskvKJwXrBkrXgYuRr58p",
  "key13": "3BFoGwcn8tqwuZyNCCyoEJsd1e341mjpELNwQDfKWgR343wrDT3iMmu97BfsoTBUSQCVb75MJQNVR1xXjED8NTCQ",
  "key14": "4ZXLGw9UJfiqpMFW4Ax7pFtfVqF4dfgx1jgoqKusNpRqtoB2Z8Jz2AhDEu8mkUeAjwdUqTwW1sx7zc9t4NQvhYZ7",
  "key15": "2RbpYDWwUrvwsPnvniUAszeMPKhNavqRAWe5DZWtJZ5unPfxYpp7Bj9S35sXDNi9VT5fqpFkSQNUtx812141GEMK",
  "key16": "4QP5zmyPXgp95q1UfyBvih4bWHcs7XFdHhWhYcWDagnGMGY4KHVuL8DmACp3SEGghSTWHYgcpcAm86nks4rSffEW",
  "key17": "4NRxwZuAto1bFz5BpmGxEMHtAVTXNdiSxVMwVtFpwVegVwfMwqoK5wXRk7iBdp9FBtURPAPX7Q6R9jNVX5DZMstf",
  "key18": "3nFgh4arscCsgH6kfQHxDXY4gS4m3qwbdcFgjbwBKtNbo5gz9BtDT3TuZRFAn6feyH7YsWULupoipHDt1wTw232H",
  "key19": "5EzSxcRqxJtxs6Hx5Uh2a8gXps8MvF4iMstjZmzJuJH7jLygdQctYHWqJ8KgG9PmSz1Ynft1sokwNpqLEMFFhuQp",
  "key20": "3sFnwqFdzckW4GcoW3bEt9X1uV9ftoVWZ3yq5dsf217oZuFyjMWrpgFBhsjpsAQvjAUDvnmJTnbxfGwjSopyMWUq",
  "key21": "5Nvutjjhbto5ZAvx1yZH2CkDoimR4hrEcMAGDixCcY1C4jYviwHTRWZbDaeawg2YhWULyUbSXek1wHqg34pdXTnf",
  "key22": "2e9SSBiazETvqH97mfmDgBb4JprhJUJWzykBzQyxrAcojfaUdUu6F7ZibHKf6XL1ZpdBeSDLsYuX1Cg9FpuCLt76",
  "key23": "2zrFLfDfgFaSD2b1Qg7BsBJtJJuosHKZfWDEutdwpAdKY9GX4iTz3PYbftL4qwyPCfggaVZwomgCPTdeRibEFjpD",
  "key24": "49gD1XGRHAJJk9wVLD6RDY1kGQieVstf8X7Umqt5CM7HkULjqn4fzAoTSu9v39v5hggR1SX9JCyzpynS2piR4jw1",
  "key25": "3LpxjRfyQAvmP64jJxiQa9MEiqHNMYqhR98evNcskqv4F7gR4dQtQ8a1ivm5kZuB1euGVJm9CL48cB8zt5eUos39",
  "key26": "RoDWz6Nfa6pxkxQgV2KV1mMbQFJdY7ESEaUAZc9GpiJArUopsX7Yu7ax65vSDGpRtWU8S2UV4nXfub3zj9NrVTw",
  "key27": "4U92jw1bT2eHqvPFJcde3DpA6aDB3LbnTS24DSiXTUf78BPEo8hiFdq5MimudHV54nse9TSm5k6TjhY3TfCJDK7v",
  "key28": "3yKpYG6nCJsHN43azaGivLRXzsDq3t2xYBWpZgbKneknVKeWMPbC1icU3CvB78rh1BJZBLFSMyGA4vCWeibR61uB",
  "key29": "3XA2iLfdzPGCLUtfucsUpd7KJcWmV1GF1qsxu7qFYTyTBKJTJMD5D658acK8YJQQwoiG5umfUWoVmzmxKJsxxMAa",
  "key30": "2L7gSZLA51VfEm9CecKExBzWrYaaeLEXNXqaDVBS5zwvhonoRGCSpRMkd1Anf1pYkLX3eeXxVScnEWiyW8nJiaTU",
  "key31": "3q7PipAqF3vNUpmkdgC9XiRCF4SLwA7dai1isYTe8iiktbqVt2H69cz83e8F1kUAsWea9wBvpeCjNaG1yheJECLv",
  "key32": "4oUMNAc2VEfNr6kPWTFsY2JjQqUZKQaAEsbLArzzutDn8ot7vu7y2vurSkTMby7b4GvFR4KuqsNRWgsTpKKJSifs",
  "key33": "5Zq4QAWZBzuvV4W4mAq2EvJdsio2fZTxBpEXakrNREUYmgfhTDZJmcXCm6mJ1QEgs4jh6KUU8Y6UvRiJrwZtM8JL",
  "key34": "DZKXFbtNCTTCtifi5cq9XX1hiJjxppUvKRurJV5LLhxMZZfHPVFRin4jCWTH6wi6G4GWd9zCMvwJEqBNVHs6qnM",
  "key35": "4nAB8zxgj8MPF7fBF8m4mcSPPvrkqFGy6gbZRfKMaBkcjfLGM44bKBomHDMQHxnDqPjZsEF79cCcriEmdYtZtLhD",
  "key36": "4sWMfrgpMJ6aZ4pU6NJgyG3DvHU5dzkjAitFtSE5692mzoXDPCDHkZmeX6P9YeAvvuDA9sGjopFnYYZKDypr8YqP",
  "key37": "5QDn56xTrRKB5BEMw21XHT27mmGFGtRULWNJxVwxFecHW6M3RyEgpVcLDbi33qjwH3XhjoqNBcRXHqUeCkc7kRMm",
  "key38": "2bowcXeBgyJYDEoCvueYS7kskJM4AtnQMZAinAiUK372QjDqHmTRXBmGCaLHQ8xb8NENJZVKLqzP6GuUwUbsEEfD",
  "key39": "3BZN2EGwb5hDi8sFiq4P7xGaAxhc9e9pDk9qYUWN7F4b47f8hmEXzYcbQDV7uQp298bCZvK5GbH2jfWKwoCD8vHn",
  "key40": "5vooihxAAgntw7ToXpZj6gBMUPuwY49fwi5opEPh863CpnN7nFPBjmgqApwCmqvT7UNfbid72EpRNSaj1K31cw45",
  "key41": "syBHevAdfkjZnbd5Shfkp88SbCAXwqw4fru7S9f2zUKnrdyr6yYGTvMeBGmhRJMKp9Ah4aihE1Nsh8BWg9moVUE",
  "key42": "4wNYsMETGtPLDsXHLNFzvNDXMrJjNCbQcXc3rmM1WywaXZv4LGpJ2fpbgT6BbRuKh2orUTWoX5sdG6hYe9BEuieU",
  "key43": "4AVD7VLtC6PziBkJNNyJq4yQDMk2mqFqbEDettetVNiG3p6VVxV9xDyaRZGNFTpfF1SRcJA9TKCtExmhPLf9zC7T",
  "key44": "2mFDW6UskPKuvByD3iJYV7gcWq8RdFxGsgxq55wttBVTTK4Hz7PyimPBM41nCcpBioh25rrah7cQAeVT1pG4dn7b",
  "key45": "5DTRuWay3ReBLq3JU5N8vzvWstEG2WsFJr3w3mXgcNkBSJBAwfvA3LixTYTQDRY9o7RJFGhMnUBAxX9Efin3p2ZE"
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
