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
    "5K5dAFmijuAbjsuDXmEm7VBBEBYrWXf9su6e8t6RWL2TYUf5iC39K31oz3j1cHgrjhrzZcLfdAgUyXUWTpnmc6MZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jCswiha75tC5KSWiNSnHjFq8NHn1obN21SYJJHpXFTCWPcVFg5RFtkjB1XkEmd4aCgAcN8uxDhdoFdSHofRj9Xy",
  "key1": "62kvFRehCZ3FTScRSenQM9ZtZwwmoisJr3qTzss9NkeMgFAECoPiW6QQdGM57uQ7vj8cU96g5Bt5JsMgNwamNzUv",
  "key2": "5wjdSQFy9N5dRhmPJj29TsDzMP2Gn32x7W5o8xAH3vj514BKtxrdaNXzGXyGmujVc4GRRj3Brok7pZyheN18vvkk",
  "key3": "3oUneLaqBWTAmzPy4RBCP2kWJynhn1bhxi4PTuuVoocxFoMx9VJMiBmFvQCd2Wj9ptawH8KUJCKjAsce4ifXT53e",
  "key4": "5GgAS7SnErCo567fHLkdqmP7HRe8bgRatyx8brMxyFcyGSMWewizuB3a3rv65su6jA89TAuHhHG9vHfBHjWELwki",
  "key5": "4xKqXCkHSGwcbYgZUZmbezfCoLs3ezZAjN1rA9jY3gu8rpqRgtzgb9ib83WRSLZKwCVv7kPCGTKJ3Tz3WAveogh9",
  "key6": "55c1JfHkP3heDxS6hRcZbxiXj5TZFLoRPHh76LrbBiDzNfEC7EJJksXekAgLzgsykHuFj4Cnme8UcREnV6qu1DnV",
  "key7": "4ECqZ1FDMGkoJK12LguK4gF3ej4p7c7aPQGq5xhRWPeq1pCi93WLzK7z1iAz6WicUaF6bweiJ6FEoWHBbd45U42L",
  "key8": "26KeXebDZtixWTVKZVp4eNa1iLGVxD3yFEGRF5ooQtZtm1DiER6Q4WhKAosArg6M7aEn7u7yYcQMvvvA3xZQHCY4",
  "key9": "LhW2yUhngLwVR1eTPQX9sv9XqkJPLH38vwdwwb8C1QjDpaEPLxs6dEkVctv7frXqqRx1ABX1oju3qvieWtX3PEx",
  "key10": "5XHp4oXptNCrihNnKeBUgZ8hwEA7YdFJRCXRToRuJz474992JntmFYG5ZkpRcQgmaZJswQMCraUQZWFGm9M38Ryt",
  "key11": "5XBfhtrKjuTbTGrNabhBSkTA6dw4Rqe4d4q9mYptoBQnsAdwaButbS6mbuuyegmpgvhhwetPiSVugkqe629LW9W3",
  "key12": "65p4Tw2uJYv1eMwfyRqTwyzpVJe5qQiBCLBpo4e5RbMBzsNJAb4SWiWcX5FWiY18K3DLwmwZumrdJxjqtU8ZSydK",
  "key13": "3ybzTnJESiYrvqumytEdhGCBvbJyPZFJKAQPGjDq5EuqMmMxd2WwTjsJnCzSjyLcyCfkocuU8xv4Jpuov7S3EBU3",
  "key14": "5Xqnq2G2t7CfQzePD6u2dcUnuPZMAHGipYwh3Tsx8Wj1PGbC47nhQsCfE1b6mvXnV9N1Q2dNJ6iP8n5utGz7xtFE",
  "key15": "3FDk49Wf5oqBcme4UEQqgeYjQuF9BAUbZyAcwJg3MX8pCZbB9AvFkej9y3BEHMT3yoqqAJvrMmgCFevFAHcU35cM",
  "key16": "4V54cLn2dCkF1arLVAC34gVsvRXHfXntoAEBVFFoEcZeYJcxuM8gpjUHTayJCpPRKU3vi3AwX3UW1cmTfwi6VgQ1",
  "key17": "2WCSPYPkBNsDBSdmbRxXkacSdLVsKKSiLsJnYT6F6vNzYHTWYWMF6ZvdeZ17xeZ1btDiu4cvZuYQwPsFTRRi9qfk",
  "key18": "2ML5Bpo8v4c2a52WSk4boMSNceeATeHn6cUKhSSYdQYEdeeps6SoDVee5fAtJvFGTScpQ5KscyEghSw3gUJc3Li8",
  "key19": "58xG9ATnmxCcKQmFq5hbNsLDbrLcGBWz3Kg5G6jpqYdKQQzjeuc8C29GX5j9UvoCFgYD3Db6fLF2qXa5vCTGy53v",
  "key20": "2WUZgdQVSeraQkScYExAJCDpDxG5rxY5RMBJkPdWPAgmUoLS4Z9EmTN9bSj5Dz4dt2yeCkjG7XxMJsQCgAYTFK4W",
  "key21": "ZNy4t3p5zcGJRK6foGUQey5F1iM8teyeVfHfPsL8C3LjuWzBmnx7DrJ3Z9Ee2SMdh9ZMPmmEkCvyNb6QZEsSsDL",
  "key22": "yHex8bbcPYLP2SdUaLno36J3K1V62EdwB4VJDG5R5ywCmR5gsxE2aTPS44EkdqLHUJiyR66mCz7HEndHB5VHyjw",
  "key23": "2uTNtF9xkwDVtjAqsEAr5sxdamXryxb3jPNeqjKDjSJ4L3mxhRECP9sjghg7PamLEnWP5FDjeFkBwe9V85F9Q6rr",
  "key24": "YGviJKnsNVP19oFR3kp5a56dENMPHFiHGgMds2Fm1hvmgMjdSKTcpo2FmxMz3qWJeu9dLgqrdLiy9nxXcqzje2q",
  "key25": "5Wi5EBY8ja7X8UepTXC2YJCgxVMb8pCdLwuDno54vaKiuZdjS7GDkNLEzpFm9ZLCZwzAALcb6WaSiXcQkuB4tq67",
  "key26": "3PdELQvtstuJJg9RCx7bx4RedAusmXsBzHYA1obSi7fEB3KmiojdpeMyS6DBnXhSFD7YN8ZHWLPMLnnVV95qUPCx",
  "key27": "37a7VbPyzvzCYycEkXStBmE9jWJeJHhjZyqz3Pbccsh8xfPbgwoNGzHgXAqrbLZ1teDsRHAvn2FeNcoP7fYbvZj",
  "key28": "hMzvcQMwgFt7wWxse6yLreKPEcUftn2D7tcHASHMKTWU8ToYHjs3AJjdzdSiHjAB7xAmk7tLLc9GqWwZjDcvT8s",
  "key29": "2r9dzFiYQWLM9QVPtQe66yHkmFdz5Y5d7bMEqa13YpYbrDyoQQo5mz3wqFtTFbsbSY67HpQhKvnBTa8XK9QzijCN",
  "key30": "3mubqZD81zkMUbeGsnTK8ygoytvKkQG5z1nMEGHFKmQfx1SFpez1ZFfQ8hQE5ggLR6BMMgsXdYZcNb95i7Hq775M",
  "key31": "cyQNT9TLRUYqQPeHJtCbEbZrDMFPkLgio51GYWrNMkiwx5FPfgXbsc2DWcuHqpwPPSS1gJtaj5fZvm4Ymk6cnxb",
  "key32": "2tANH7JZPzjzv5NJgSLXjPHJgU1gVNnyMeRYsHoUFFxvoiJLe9vezihUcPovHVqxduxgZRSoRew2YaWqciQ4eCjE"
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
