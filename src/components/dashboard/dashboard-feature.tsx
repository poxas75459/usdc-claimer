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
    "3Er5v5VrWfS46Z1TdUdA7K3ggohfUwxGCS2bo3zaVPuCiwcygtMJbzcPsbLk1B1Mbx7uh4HxMhNHwzPt7yrfwbZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tjwdREpSFKrnvzwvnkmFrsWwjDdABS6ydUKc2QHbPzj4bR21aayxAaNCyoRksaTPkv6XrLDQfvL6tcmvmqTqRk8",
  "key1": "2H5t9uKgxx33MicP278yRAZNPBG4DFDm1PDccp8naWBEAe9uEMioqqnqL2W672w7czQM5JjhecyyNpcX6XSt4VcF",
  "key2": "55R4FGKDArDL6XCa3sZdD1X1dAEHJ7vrufgFBCnhfDFxh5gksVTmwj2yfmsspwAgc6zc99r2vamFuZgjiWZMi69F",
  "key3": "3jSLPvpWwfch7b9kccmquZzdesMMZJ7BYZzPSm3LkBnWmMPKVPdLQFG98RARp8mACtVXdZQ8vPXJjwfSn83mPibc",
  "key4": "5X2FywdL3LwuYYhdeeY2K51xgRbSfCZMj9Qs3rtsspCUpxTd7TqUDcbAWTVUzS8wNK1JQQPSb2kXhrATqhf71txm",
  "key5": "5RxuF1Godxbj3iGMve4c3nEEbUCjSWExmMMHqFzLoSqVhEYHds6XpV5J7n46dsCZRn73jCRKc3GTfiDnASHm4szj",
  "key6": "2QtCUcoAzsCQoBVk9BgTh6cNDDh85BjzaDSu6riFk4XpTfNRiEUNs4JKUfStaiyjuHdoAgcuARNkZtByZVnAvNoz",
  "key7": "4XMJNpxTa8fVcXaZrjcCfwtwoNxtjHSNzoGyFvT4Cda7Q7i1JhTxvR4V8jBTywDua2LTx1g6s9q5Aesea4pfYEU",
  "key8": "2UvUAn9gVnNo6jsFfCGuastgYnqGsCQjTH1aVNpaF25RcsWchC16MDGPhcS5yC3iNqeZm7dFxDBzxoW2KJmNxaF9",
  "key9": "5PMMHkEZjcz8DJxckgBgmobyRU2DZ6Szb9um67iGoKsKmBNLzqsL3MQYJ8trSdrzJdVQK7sVxK6wJSpyCajCyr2U",
  "key10": "4czc2nWmWrpw6WpAju1cHn7hdt8MBEeuFv1on5WLGe44U915kZnJWd86kKBz3RvobvNmzp2rUivabhhuGB5gDiSA",
  "key11": "3dk5UGqC7xGwkuP5cM1vy12xEQGA8D5Ns6iMwDBnqL6WmYU8Y1iyf8DcxAXeQnGxKie2Ffk3AD2P9NKWPT6kBqgE",
  "key12": "4nmUPcSSc6JADtuRJpZuquJnGsHTG8fJZM3ss5WJTfs4ySyYkLZpKDQ4JbSb65BmWjPZnLvXDBbR3Rc3i96GH5px",
  "key13": "2EZ9VNtQ73jVGqENrrZ7UkqsukFa7rXdm2fCsTr8gTaJ3cMDtHWTDH8m3WBcn5vihppFuWeEdZzvSEpzrjnAtsbg",
  "key14": "4Qj58ZxcLq9g9E9Py9sy2BxiFxxvrjmd1FHzWukTak73eQJHQoJ91gJTAAHWRCfJ1CTjYwyaoRHK5JCesiXEXtxe",
  "key15": "4Y45GnCuiPvxznSCqU98iaeNscKTYmfvwfSpER8pzk8SUMpis7vxXeDCuYcpxkhnLwKuMhepj4n4YRokpXz9Q7MU",
  "key16": "4L9pcX7Ws9nxqY1JPsizeKka35YpftRwf4mZGxRpaZDbduaRFYJVkAy1dHN7P32BWGvzfRTrQNuaeFNY4UNbvvb7",
  "key17": "BFVh5cpiwYddSSdCYhgcA7B4BKc4AEzEkufbAmx2sHAxbEajkarrBdhVUrQGUkGMRy3Cifdc1NVy3j2iYf1xFvM",
  "key18": "5zDr9h2o9vopXM9KEtmta8Hrd4SUN49Hq6UW5C8WdmJsHR9ug3rJVYB88UQuZ5sR4fShSEvS4MzMfuJQK76SfPqy",
  "key19": "4yBEMnM8uDBLfrGpZS2S8UdTVfv7zYxjEMqemDy6viVeBq8kKXxmKbcmD1nbpQUraLdQFgEWKrMATVWxFeDRtHTv",
  "key20": "4vuVu8Bdc9SLphX7niPR5if1XZHF4GHLTsmcxftkCjMnMbfuXhtmt7dxMdJ8iFZTPYBVrY1Y9r1NG19BpMEfWGaA",
  "key21": "4M37zxjnGKasVUS5qckVy3u6YvEPnA7FwFjzLMaP5yKjsj5jMB47H5EjrLo8kukPMmBQR1wAs5HDTPW6Qo1DKEZz",
  "key22": "4rzVpDyz3czj3N2R2LyKnJcQ83mjjPNMpjLcNceraP98rw1GDx2XTHscm3KMMwTGsrUqnYznA2DdTKy7V7vivGXZ",
  "key23": "emTxLa9oCFv2xZPCCPXw1JE3tqr5xwwe7mStdjrAt8s8hrsXnvwpyZjZBvmUpTweSstXGCBekr8oyxDWb9Z5HPM",
  "key24": "5ZKbp9uEaavMRrcX3qMKV8sFst3AbfDotcfqPtpnFsAZdszkCkk8Xu46YhUahrj6yDaVqhSdeC3S9QhVpHVhrRCd",
  "key25": "3LB3oAXciuebpafz34MgWXxSFPRuDoWJKCmpMMRWkomNf8u5qjs1nU6pNTeXWwwPgp7U1TndAupT2PgmUt5ZY9gg",
  "key26": "5LvW9gbTa9XsjeKmF5ceUFN8mtrYdgm1Wk9ng3XBTXkvoh6fZT1JxKcBFKJK7oAmx7PBtBdZW6LWwiCuWiE6BVqf",
  "key27": "59X7ne6uJhAFMATztxgUn1ASZXWXrBcHedLbJaW7qwvkb1Ty82Erm59mQauM98XtkH98EWSz7QArPiuunwtddd3K",
  "key28": "5ThizTbMqCPupJoSWZwLHy555EcpJkRa7gPn6DGVUft3s4QboRxToPTJmW2ML24omxuLi6MhKdsSNkgJusW6BMXP",
  "key29": "2iRSUQEdsSoSFCc3miT81d65E1FSyzWxtb1pH9Diuvc8XiLTowk1wWjuMxVP1TJNJ3kcP4V944F4M7jQKRwwmRTJ",
  "key30": "3AFy1NodpHg8rY1Em6rwGkCm77BVVXGhC8wHm1W1jWLVb8GZSTPA3h1PRUJ7casrGXd4fH2ZXpJVkR3oTLVDJ1L",
  "key31": "4d8UoJLYyTcoUx98cfrtSvbLzqJyedqyLUgPRDat441477UAEBCorX3ZVXZhz4yQ9HDUnQGkBZHWoYGw8AnvJKEq",
  "key32": "4kkZX4KBYbZL7uNKAxHrD6UBgaGPsiTe5RCZSsHfY5RAw1T8wdqhKyi9qk24aSoF2dRGMRxerszpH5yvYqLi62WT",
  "key33": "36DmayN5PM4uZKcpZjRXe8gvMroDoAN54zR5M91DHJLC1ZaCSmcsjtyvyXNA9Y9aujgHvkbsorUie5tBsZ6Dcjne",
  "key34": "4XrxFDkD78J3KVdw7EAoJEwFVKGtaGanyuLDEp1hgykeXAgEkvgaFWRmJ5QadU1hXtP7GYzbxBSXcaxnTa4isPHi"
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
