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
    "3u2cdYA9hFhXGEovvB5dXgaqT8qWPpQ8koexFbqxaTWBU3G7ffXdKEwmoPUHFbTeHZMDf1n4bSjjFDTmSHstzNPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xEBQLAKRLvaVdJLfHLriEttcjMF5VYEgrkyVKzcBG9cG9YqugrRhK9D1bw7ZC7pHnqKCHhstwqVoFQx1m82Euyc",
  "key1": "2Gp3HcSbazcad4ANuoBNTB6oPPe2YvCTooLspJ1QUDFpBWYzVmX2ieMX76Z7oZ9m6vYVaJqH7g5sK8pNxJErYji3",
  "key2": "RJJgfou1tRvT8qWiMDv5rp894cRtMqqV25GGSQYG2kB2vyNiiYHgsqFTzvBPRfyzZDVNuDs11AuVrAwnXkZxKxx",
  "key3": "2vTrZ8gLx68Cb8caGp3vfDKjTpYm7dBneRZnjd26UZFqmKyCBHwZQ4tcuTkaX4rcd3JiMrRLwrTJZKLC3WC3HBk4",
  "key4": "AsmZXsbrUZYuhT7yKBcAK8FjnqeCEhbru9AhpVSSKHgPg5qMqg7BrL4wCVt5peAi4ncdRkHHGVAhTKUTQi4mifK",
  "key5": "64aHRkfhLhB192SGpqAracP8MWDKPBD9vtF3u9XumXK8EeTKXsKeD9782dKJxfhJoYUjRRjpGMm5JYsEuSALXpAq",
  "key6": "5HtgWutgo7P9oGyhfe8YkwuWCjVoLy5FoQmh3VJYTnqQZufUPENAR637i5RhfqBsi3BYASCuSdu8m9Uy8FoK3P6k",
  "key7": "4B2Rp4JBaZKYoFJWmV1auANh1sxw76t5edth81FbLHQfr7T2xpMC2cBzSmAUXd9MteWaBuq7pNDToz2K5DaZQg4P",
  "key8": "2MD29xXy2yonFMfG4Vi74GKzg8vszSimjpmq1efJx137UfMNvUvh7i8kY4yVwzMqzCZaC57Jjt1mvJUF5M3oFDL6",
  "key9": "2Q3HFxztaDDDWm4UPFHyUVeQfR4PDkW5zBuz1Sh1WS6U3JDZhyzZVQZNxGpjLU1cERfNrqZ7Gfwf29A7XAitCLuD",
  "key10": "SKSuTMwMK6ykLnQz23cGmFEzSXii9EjqooTYSwnctnKBcoWGbzUrGkiyb3Wp37FCf6JGGu39str6WCB4grXZ8py",
  "key11": "54YYY8dJ28nyTCNd5NKibvo2QTSsPda39HcvDNCUBsGuGZmD58gbX5gjtAehEoj3NYMkRansQubnyzWY61kd2ho6",
  "key12": "3o5vSjqSu3SAsGDRFFqLkvR31oN92vkrWugRxYJaYw2ByhFTXj5Y2hFiv9ReUjKJ2X7oWumGNRxiknN8zae1YqsM",
  "key13": "5zXcjBbFXELaBDF19S9oBp65AuMvyi414tuvCHRdQX2CazayJQasc8JRVH3CYJheJJRf2GZaFejBNLid8L4eiL42",
  "key14": "NSihQrn36TZksbCTAmt8qE79JrgJUKQyGadrMMH2inKu2z3cbP5V2LLssK32BHr8GKQPQi9VdKaXpYtDC9zaEqy",
  "key15": "3GcXUEvrtTzZkLKxeQiPRxvzb7YZVpJU5VjfyMpFGom2yUzswyMw3K9q5ep2FmuuBZeTCs1WM7tU3yw7wYojJUBH",
  "key16": "3VydwTAAiQ23RrN4y9saCzxVH927Lg4Jtz4NMVecUGqhCs4A5UkpvM1mhfqrde3QiTTRAjGeq6z67gf7G6LD3jt7",
  "key17": "5usiGSY7LcqtW46sUFDYXXiJhqmJ5nnTHAwgj97SNf63Dmp31Jbk3LL7HGhSDhgVwkmKK9wV4guyAw7uqtYn13eK",
  "key18": "3NHUTbVihQWPBachgd7tSvBMTXMASyeLY33ipZkwcxyQM5zVYmXYwZS1kFF5GHBDy7ie2ohWUf1EfJLVkZvAr4z1",
  "key19": "C9BKmjg4TDfTfBfKFXkRfShk8inP9YhbVvrrqMTdj63m44xKNVhEw1iZEHAD1N7vVH8AvHZHJf3YZZ3iEyDt5Zz",
  "key20": "3ZCSj5bd3FnRhjoPPkgbZQojecT5YtFKncL7B2YJp54GZptje7shSnuDvGh5ypSseBAs7c3cEW62NSXZwRMGorxL",
  "key21": "3mSpGrNHtkxRcJ7pChEEY3hFakKXfP3zqKMU7GDqjYRyrSsWEhsnA2GWQxtaUohHraxeaAeiBxSKEp21RYz1NPQL",
  "key22": "5XTQBjM7pcB9DCRVJv4kPzxMNtCqyQ8pnVCyxcY6Lpt6cScptA6zQt8YAAixPPnT8NcHzaBYPrLe8oF3ty7K67z4",
  "key23": "2HHp4EkNrBWXkcDUhkWA2C7HU5uYWv3f29eb3px3YcuPMTeSguV72vfMeP9ifTf6e4o3wDD51942VGvCkcJXYQFA",
  "key24": "31RR5eKe1YkFwQAUMDpEsKp8ogD3raWjRaQpEKVtxwgSYwCDUuTaXBNVPt1HpG4JjvyVRqz1XmcJXiMP6TF3YY3c",
  "key25": "4NLSoAr1SSSs5bTdjB4gfoQmZBGZLm5s2LR9tPvXUSXTEmsKSfRxAY3xZxfbZ39XXyx7opNiLuJ1FCuvoyfzNYdC",
  "key26": "HuV1vBYroYiVB1jgdLsBdoGio3BocWhV2Q2Bnz5jEotU4sYJZCM7SNR5pktvUHMJaH7Wdg1Z3WCcTFK2CYRX7dB",
  "key27": "32HqLMZNzHs5sqHAehNHa64diMueG7bMXKFSGvp4LnXxTcVewagmxXmb4iTDvJaExvyFxk3PsrGknbytPkSuMpA2",
  "key28": "2VPrqW5XoTArFc1FRjVKPDuEB2NeminevKLerHpDCZm9UjPrUCbViQRUeS1CGkxLZG6P3DwsxCfkAtMNmprDmmPV",
  "key29": "2EbUZuqVEyvihahVveUjFUmm5n7JkHtZyyhT5naE7ffeVRCaBcPfnqmz9ok6fdCQCorzmP3cLkd4a2tsRceYnrNz",
  "key30": "52NYbCPsobuvyRsjTi95dvgkTtMbLSnESTnS3DARQZMB6PUQhcZ4AVbu8C379ZVhBhiWCMwyq8MNPP8SKzjydmB9",
  "key31": "2jeHtvZdKzbdyyMFdg2fnWehGj1yJXNuZkeQ8tKG4T3ghzxB5jfLoLjhVNSMYbRtZVqGBMhnzbqSfkk5z9yLyQCX"
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
