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
    "5LEi3wCRADN94U2Lzyro1PpGyyNXDh5m3eeRaBZzfzm6JyiQJewmmQ3WW7rhVNZCde3dXrPtvg1rdkrWyJn5x8Mg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FevQ4BYdKp8wLeYEKPHY6FkQtumcVL3ty8kCJUmgWon21ytUKQ9sNxFrTcY6M9VTnK6xBxFWcrZgzUh1cDLiFz1",
  "key1": "4JyXwdKppqaPRuqbdKyV3bAVSVRBQwQwWbZRivzwtWybmQMveWaQRxpcAk78DzH2BgLrVN7dXL3r46DkcFMyGG82",
  "key2": "3B6L6tivTKEJvFx5Ft5iFYfMwsJXQH9bYdwAm9EFdLSPQi57szNfthDHHHe6yLZQdaFksKGUsYNZXVcNdzNh2YjA",
  "key3": "5mt4hGZ8cA1sUi4c4rW1XKvoKMS7MTmYvuBsqmX71Rjyz26T82tB5BXXQXQjbwmicvBa2DeW1rWAkgcLF9s1HSdD",
  "key4": "5ZRqn7uDMGziAmCKND8Rc6obftzTXSHUokWjYGg33s6ojdrFfbVyYA4kcXVHc8menNorre69UsmDdAAp5oU3Lrd7",
  "key5": "WGHwbFBfYELjBqrQtFzyaz1ayMkVobiH9ueHvjfqgVGCjneh1GoXwgVqsZMJSJuzVP6wdv317awP8HNhQw4i7yJ",
  "key6": "9sSHygb82jzNSzhJn56UaVBb9S3s3Ptdf3p5xaJ7gPViiSxoRzC5BHFzxbjaTNLzicNByGXKgjjXoeQjM2VfQpK",
  "key7": "5UHLVM1TzgrwF1gWiRuHChKH2SewoTR5QhcdhTwjQzRbgcnczKcLpakBMWvLimvj2awWu9dcnYscEq6zGR9vecQ2",
  "key8": "41FWVMoaXWq8A3NgaogWHbwM7JiFJsBiSx8HUxnMR3pKFnQsBzMH2dhHyYAoh81NJDrSBrdPUwyCfagvp3nz2uXL",
  "key9": "5VZNrYfZW6o7jhojApL64vEfRVBfejg4nKpMjA8DtCgTd822xsNAUhutqNpRL3QM1asgF8oAE2jocn3EXbjy23oH",
  "key10": "2wr25zTVLmmpXwGKFD2UDQUtbWQCVw77ZE9hkqvbjd3TsevhnU3XokSmb46PtCpiUwTzA6UaaU5dcvaAwC8KiPNv",
  "key11": "3TcAYGPRu4Vn5HkuFuAEHLs9FMpC3maudLrx9aYtKWS2HtbhsXoeH1kAqsGV15mM9Rs3y9Kwge9EuDx6Zj4gjwxH",
  "key12": "4eYpryvLviiyZpPxSLwpehnrQhFNbv9FhWwXpHmRBWhfZCLNTQJvKd8MTwuzdtMA8SvCEP2rsyJcCvaf6ajJKBSd",
  "key13": "3Spk3gcz58oXMzA9yecm1wGVzRT51UiA7RbM54teGZ8jTZ7jGaVHLnp6dJ21wU6QmkDwDvyuh2SieSvj1woj7xnV",
  "key14": "2caZEUEfLGLrmvojfxoxuKWxCGq7wmudy2bHhtpv2zhoL5Q5wrB5Mgcx2uvsvWcnH2SqXvZxDjHZpu6R833Vwfsm",
  "key15": "c4ZqPg2UrG7NL25CY6qzF1uHu7uyrXtV89uKbAL3BrECeUrxYXEnwEHTT1KCKn9JroD8EHjGNyEEcTHb9UnvwWo",
  "key16": "5fKXiMNMirDfT2S4gFN31eN2Yzu9nyxNS7k5UBrV51VRvBaMxQLKDtjVyP7qbs6tQJtdRdrAdWcSacZdB1bvCupn",
  "key17": "f2NhQWxf86jhAFAKJjRT2cRkDp9JwvfedvMKQS2Bmmw388kiQdWpnh1AH8aFZWwR4V6Vr5ZKmaaMzk6QYeszwBr",
  "key18": "5eHZgfkRRs4tPNSCNT6YgCP2JSSbgFzi18pJAX6aqBQUF6jsY3RCK9M65m4vPDWyBewtH6FuURCNUew5m4prvvMz",
  "key19": "2Mv3bR8UDYPhDXz79TWWK8eXff7wMPEycify7AaCWqH9gJ4TwunbmfQ1ab6aU7GvqsQvU5HBWTC5oKAyUNQKzejx",
  "key20": "57sedSPTxaboB8F7Tx9NvUDTnPDxsjrcDeu3xgdccQ2a3zs99V82TuuvRBiZM1tJ3wwEXvvDuq6DKNJc5i3ezc28",
  "key21": "3U2yJi2xV2To3SyBkzNFd7FHv8ZeRQztFNA1cZXSQkc75Kv75Y5CPxaV4hzK1j6DAGKjCpWo56vVaFmaVvsXRtEh",
  "key22": "n5iP8igJwxsXgg5iJHZnX7M9AMSbFMfebu6U6A2JqmhshLbVGf4jo834woCiw8d1FikXY8SvBAscAsB15bbWZ7M",
  "key23": "4CuL8QVcAgCiHNJJfNEdefm8Est44thmRR5W7WrT7qqtz8Y3emTXgeJ15CRBuJQPVNUsvwjDsWJNcJDtWJjLeSBi",
  "key24": "5Kxp5YdR3iZBNTcUpjqpwd3XyhXpR4S42kBDVQqnHkY7uBuyF3EZv9J2Uv3ewmt8yibYW5EgFfiaDuZoGJfL8Dr9",
  "key25": "5hXx6LXZBLW61iDvfPE2m8LkaFRTSic4oexBwc2vdu3FQuDVjj29htRBQHUwEtgzhG1EoQRUvvSebpJpm89kuktg",
  "key26": "4vddRnHjoLS4kU1Q5Rjbb6mL1jAxFJ6nQQnbtoLpRTigMgSKVzcpAL816W8YYDVoqkv2qMpGZjxS8XPtaSgpQZur",
  "key27": "2ZwtnpmJEyBV92rWbVam3iBW7NgMJ7qXHGapheursCpN2BymbfG7H8CB7DjVmbF2K4fP6rEbizcbm9qx74DY7imF",
  "key28": "3YanrC8L8jkkUd8zzcN8E2Fg9U3KPzv7p44j9jKJr8KHJfqxg86dVcdT98e3B4kxCSW2jaSJNdXzGBhn9hdXBjxC",
  "key29": "bXuukp3JZ39rvvV3EfpPUEEPyEQ2pJytS7jnU6FgVSnxP7vzFx2LZNoFa6yDwQLfkXqppwVaHDSkvyja6RwxGA3",
  "key30": "svimccMEPeYvJb5yPaijxWwVznZXNsWdHQswgYfGDCWSAQDgqgjQ8LadzqJtpZmSzubUoVM9JgmjAQc5aHpc7U6",
  "key31": "24AD5yTAZqD3Cjpq3txNTkAcPCAU7H6uUPFaZDyzZFVUH6MLizFeRbp8wGvt8FQLdTS7RtoiSzH96uzfQnu55TAp",
  "key32": "64cx7XjzrrhfS2V7zh1r349vsAADh2SmPurPWoqDNeNqs4itRyjtFadaDm1NQvEF3iSMxL3vPtbKtiKxSjvSdyCV",
  "key33": "3HeSmAudH1KHGXAuzVHL1ntX668YN5t4eRjxFnBGreUypxKcuqJUafEgQ5HwDG32ykUPJE1Lv4T9S4N81KAsQQhf",
  "key34": "4yBvEMgAPKsS3SMs6gWvWSLiu8bTNnheP6XHFidAyBQvLJzYdEWV7C2SCEKBeiDJx7NFZwbnedNpsNFx8GH2R28L",
  "key35": "5a2nLa2S6EitWZotLp7dy6P4Q4zwpVa9r4Z1xE8w8Fj9p8rDJUiGRbvbUo8yeM2MPCAFSCs8CxJEk92A1yyQTZjn",
  "key36": "3Ce3kTHCvD8dxDTc9VLERsBFbgXXdZfUkq2rUT8BJX1fJ5S98ZzAUtE3ELEDcjJFCRhsJVJCFtS17exxcGrW6sUG",
  "key37": "32fAjdZjuYNTKWXV6YxgC7sMzH9svwzgT2FQ5o1eKwmX8i9SQw7hiEqBQnmzuCHCMpLM92Eq2vMgQ6Vo9Z71EszF",
  "key38": "4PyrcvnC7AgUD2TBYKoeYDwv2PacGDyoRh3B4KdJQM7qAwTJcMVxwBVCGfLcCjvx3TWHAqFgtMaaE97vAzzQ7q9A",
  "key39": "2ysD4qkehru8iULL9pKfsLhspW4JEueBiXvwePTG1HwL48StDX16x9T8xB1YhtKRDSYoVxXsCcr5frtuZUtsR8Vx",
  "key40": "BUHdArFqppW9UN2T8a4bj24qRPf8GxXadqkLddyFyv95cKWeMKbfjy3Y15JNKp26b15su1dJq5h9UrErf7ELMtT"
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
