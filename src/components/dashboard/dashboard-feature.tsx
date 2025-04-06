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
    "4sVCYDjCuffXE1XCorys8PQL6ZEnwpfw73ezBGdWuhCSJ9pDduez162MnL3jBP4bs45vYPMiYLKMoj9gQXxhVHnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wri4e3htySwpsvpwK7oERbcFMYgtmB9sPCzCc52g5suac48HQAGxS3ThjmpMJCNfe3oKVVqQ4ccfm6QSsuWuM3P",
  "key1": "3fjpkcGLiCCpCF2tMc5vHED2CFpMNhNMB4V2ngCGevyjRMYHkF7jT6X1VAthHNd1mM7DfHwigoXsWBD9edCZSC9U",
  "key2": "2i21bLnzzouw843J7F7iyFVWK9HxxX5H38jwA7wnGcUzyF6EBj9KvEJg6cUENUKdqqu71ByP2qjW6A7fq1jZ7yQf",
  "key3": "4xbgKFvuCK9Xfup2EySmNzMaz3TKrgLvEV1X2gxMhRbS1BAu8pDdNP6VQGBrQCFC2Ks9cuxs5jBksF6Rq4jxxq9T",
  "key4": "62pYdhFCcho6tcL6UkAAgvga1UaKZiuZZoTFk3XgPxZSy2uSDnVefgha4BCMnUBCU2Pk3Q3HkSGeFijzZBnGUMkN",
  "key5": "o4zpnNjLi44u4MMLny1MHxjsBrURfy51oT8agFv7VnS8ZmDFSVxerNLPR17jfSwgdT45M784YdSZyGCf49MJj7u",
  "key6": "2aVSHKqDg8W7ehi424wCmzXZCbFaRw9ejA6bPphU3urYxdERYr7or2DZmxTqUY7wRCi3Qobkwqe77ZVjGEg9Vx3C",
  "key7": "2cphEnybMj7GY5AZxwqZXjuzTCf5BxMUdQVamJYogj31MfYGdVXjteNX3ZbqPA1bNktFyRzaYmfHxtU2U1kzUWm7",
  "key8": "5Sc3w3wc4G7gcWiuo2KtUwDeiqNC8rjAfDS28HxEk87HDDaytFYmKJh36pJd9sNc3p3Hiv4cjhv2prAodGdhGEB9",
  "key9": "osCBzErvMyMLHNrSbZWkhCABEyoELQu2yq8B8hdJvgYmFxNym39pyJr9FEvbXDSauhy1E7BVVbMxXNVb18gshzQ",
  "key10": "RcpNhTwT6tJ2G4dNePVpjbCnodTaRT8YoHje9kN9D3ku3pZM1CWy6sFgQbt7PVpWUQp5rQj9JkKAEno933jWGbd",
  "key11": "2pcKVxW4NycHR5PM89Lth4sA29nDMVUtKe8aNy3GKtXDrGsz5xt2ZcShTHVmRKxzoAPpf51fq9LG5Z9sukRX5XMa",
  "key12": "26iDUBHQsWy55epnq3NcHY2j7dMpKVNAsxEK24brvskeJfJHc33EWur7sbutJr3RCzSuj8Gc8VQZ9FDwSjFwvmn9",
  "key13": "3goNys8sADGXTVJfj1u383JyvPRpeBeLz8jgm4NXeoN3zwVqnmGzWDMPaUp9ENXCZKdN5oe57p99nXErWfgggwyU",
  "key14": "4u8QC8nfSm1TUet5HSr3SK2wk8cKGrVVDhVhdnS6r6S6fMBewhjEunzaQRNTooLeQoxVv3NSBvXF1pXh1Hqa34Qn",
  "key15": "2Y2EPXDPu4GGo27RdpFNHryo2MMJTwQruZmem7kdcd7VQK4WeHi1TmU42bzW4Nuexbcipm8YNncD5YFirdQT1aE8",
  "key16": "2RFnJGhT4tx7yYkX3q4qvorMmQbH5ipuP4geYQS4Pqjf7MnXrAygA1YpiL5Fb643TVJYuSpCqRqJEd2vSGDYE7K3",
  "key17": "5m66t36tY3twsrE789CD1rkXhjbDvdor3ntUHbw6aHpptw435kcqB9LrJoGuE9ghBpx8HFsF4NittGNBykCuQZEj",
  "key18": "4ferDzG2Upzzf6UAMMWAdyN95uTjd4NT9Ci7taq6aS4fbmKHaPFQowz7pbKxescVtwCvw5un7baE9dFA2vr8GRmZ",
  "key19": "pg5M9m6XNG3fJavxQoBBojFgMzrmWGvhEGhxzJ1nfAWfd5BESS2hsZAUGhU3QsF8ZgF626aa6NJgftN9QAnNXUV",
  "key20": "34QYeP5MqxgNKwnQ8eUCjjGbt4SJJkkxaYgX9d2yufQaf7Y3wBfgBLFHzL17upWJy5NTtBZDt2f8E12zKmgCbbqa",
  "key21": "5woa2HpfnNxkZrrUQTrbuGRxCiM7aBmVrVtwtAYCpNrLnx7tUAJiBtw3zanBYWGqp87onHHsa87CRXhU2YzURsgZ",
  "key22": "Kk1Ps2gL4E1edyQXLfhE8UwwZLsALJSGVDz39c3eXp2MUsPhuVBQBuJz9Aosm31VmyYMxu2o6NCdPovmCH6L48n",
  "key23": "zyY2nbRQG2FEzCKwTg3YpBxigJ2vRS89oBZoXEeuQ13RFqiFi1RUQp3GC5KwgDrAgnLUDUFfEJtP4s2P2oX5LJn",
  "key24": "hvwJn7mZxsA5rd2GjcXm85uQ7sL4XfgKr6mPDN7nAk7U4VR8k99PSwPx72rLrfDBGbdEhoYMhDfNc4DcttGSDga",
  "key25": "2kvucR5hMkdmSSjywPF1r9w5hBzZ7mRWQfAMKMdja3HYtmhjt51Yns4psFECqzvq7JXh1z9SZJ8BNHQ4Av5sX11Z",
  "key26": "qnuiekuzma5FjPX4UJHAttnqfSXGpVbNq5p4padiJ8XbARFvGQF6bN5iAMgDUpBLSRiyCvaTsKSKnEiYFhiAcCX",
  "key27": "3g24tDuADBXsPf5rmVYwie8K9dN2UWrYsnUZv8jT2m1EQjBKRtqEJ4QyiJSYtEEV5PVnzsMJSuRDk3xhbS7Gi5Ln",
  "key28": "2anpL1fphXM67zQANmRQorXPdRAve3WCF3gsRPB7wUFNmr5y3pRaeD6V9LELxjvUXnHT1C1o4fQtraAuTCQKVNhz",
  "key29": "4duCfoCixNC7e3xKKAgQ6V1PKWAcKeTF1xobwEHsPyVyzdHGe1N6GgAGhjnUfVb2AcxxMFJhjRhNS25ErUH93nLa",
  "key30": "j3qGuzcjoX9DZPyc1oQe9hbJ81tXkSTTjFQtskWr26ZbrmnBQAC2DkkAc5aq3EWnSh3UC84gZnCNdEce73hntjT",
  "key31": "5BcTT2Mp2DWgTC3f2KwVpcHiCbBzKrrvZngAxYevxBVwnUH67MLSvCePuMVfSD5XdRsyRepzUY72XrKeuPs5Xh8V",
  "key32": "5S9pvguLcH2FVCehYpMaBCThdcT8u6V2werrYWVa3YeEBRvA8aLFmsAAAm4QKSDnK7WwsxQYqZEEET9DEEeBpSTr"
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
