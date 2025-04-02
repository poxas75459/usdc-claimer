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
    "pVepgkRvQyrLLDuxn8SjG8bT1NT8aBzQsA41kpR6GZHkCKKXia34wFF8XW8gaHKu28xik5up6zRW4YVmoDHk3wz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XmtF4zk62cVzhUTzw824V6gog6yuPTTdiVGpLXArACqbKZA57duUpn1iwH8rDC62YSVoouFdpEwMf228DqeZMbp",
  "key1": "8TNY3xCYR1JSB84XCstjbRa8pYicVqbmhGxkYJJbCaGsmLJC5apBKcrQvYvfKZktPNJpoE8u2xo6RBxtWi6jEgT",
  "key2": "2TzxqxfeVVRUh5TeFy4vDEKE5KAG3AqV4Mg5fBUFGMLHN5DBhhq87rzVDUtW78EFt4yYdyukfJNAgKhwWqHQnkhx",
  "key3": "5ADm1Yp5EBzL6xLaKUcYorhAbpdCxFVAkRzRhpasQM3v4ih6MD7wjdhhhQVPXtyFAxzttz9Q4aoYRyysX15d3Hs",
  "key4": "qWN1AxK5VjLyLj2stsT1bFcezKtU5T649JxhToS2GXh1XDq8ALbwB5RQXgaTgU8Wre7buNeQJNeg9oF8CBqmY9f",
  "key5": "5xRH5jWUwdqZANAs6m4ZZQNMkjXaUUUiYCQP7fG5f9hWd8uTF8B3yUatzM6sghvm16FEnXaGKPbU3ZKg2DMdUrMV",
  "key6": "2faytnqBuW57iMex6XW68vX2fET8VbsxwJ75ZuNZ5NJ4QfVDAPVpqfATj1D3499qRxq8qXhLPXDQbpaZhwia6cok",
  "key7": "5cJHXvsNc3auetwnM1DqNrZ7cfEk6EsXm9t9bEw8cC2F5aUrXukCzQcNWsJAwXUA8qhG9y92g1xsdu1UpS4VGdvc",
  "key8": "4x26WncdhQ5u7ynXfwDY7ZJVhfFW5jWYRzAxqne4dDVbvkCCWUgBYsdVVsN5t4JQYsYxX2yFF8u2w6mNSoM1D9eC",
  "key9": "e6rbpaBiurURCTQckXbUbUxC8sL9sLtB1NEm3fB6VyR8GHmSadqM6TtDWUKYoNPd49GaYW8hsHyt85obfmGAUFC",
  "key10": "33Bb91s6bWBcyQAaU8Zmfk8hmh6Rv1RCfH3GF9G12oVEhKUSJXGU2hLtbH6jTKwRXp8YnTxzQRJZVddmyg3dmCJ9",
  "key11": "3ohqKChSh8zKZuduQ6Xsoc1cbN3BqtzjJMxZQmXsp5VoPKPye6NfwD6reE2ez7WzfkMS3dwoQav6miYeRX58agH6",
  "key12": "5T5g3XwZUMcdwKmRHdBj8CPtsGSReMhrdn2iXFnahrMkbMdjUGS4gx7cThbLpY7CyGiXohKWn3Z1UQ8b42qQnrfs",
  "key13": "4D9jBRWYYRPx9FAvKjh8rvfPKTMrWp8xqzMw5dDCwp588Yx1NiHCQuwxXYGnQVj6mkbWTrhpce2V9cHR2jtfdNXN",
  "key14": "5Pf3mHrJcgCkoXuBvPeSNFMgjNFKAf7uNEQWmEiaKkgzHZuhPdaingdoDFeKL9cxc96ridB6oUjPx7SRLE1mKWap",
  "key15": "YczxRhBaLv9v5ob1Lcid24mtgLWqYL4BNdCRQts9tPqP922bSY3bmL8VtNgi8B8bZKg3rqmwgAN65qd2gNeWCCC",
  "key16": "24VXt1oJ2vV72XtoizZcBhrLkKpVApHzwYNV3r8w9JAnH1s6Qc9mrWTrdsVHHrtXYusTtVM7gGE2BSP8gvREbkTN",
  "key17": "65aeCvVWEmJx7GVG2yAvto3uuAG4BbbNruwcxJ19qUxtphjU7pPyDkHRbvmnjF9xeymLEok3s6DApUY7dZzCppR6",
  "key18": "65JaaeVWuhQrXBbSahXppefJsXf7CMbz4ArFx2DCkuEMRuo42E9utVzsKrrJ6YzPQurp3b6E1Z2Ftv1UUYMrHFqX",
  "key19": "4agS24HS2onGbcrq4jvFJmLKpq1qDn4hErBUEywEuNgxJ5rP3bF746bt22EBSDntPLx9CJx8bzEiSVGhUxHqjyat",
  "key20": "3si4t72Vqy5B8xYBcobKwuGt9zycT2s3xZGtAWDbRz6ZDXHasTsvdgmpsoZnJXHN7gpkAxmnunMgjuuR1oU4hUf8",
  "key21": "GV3DZAwrTQSf8WdtB8To5QLLYH1oP4XMFXzSe3WymKnd3bM3fTYhkUALUrmjxsdMs5JMxvvXHXpJQoXuqGyxonT",
  "key22": "586Xu8WV6bMyqFf9VHzzwTWasM2nBfS6MAQcpDCAL92SmdbDoKvEcuCgPvcBYQVWf2id4vF3h3wfzbYCjqszFTht",
  "key23": "xxGfAisJaMX7uQ94wfi5mE5XmXGkR3iybLyYtt5qNgqj9F684P2Va65ELnGQvmsh78x73izZCAhtgpoE48oYWrx",
  "key24": "3egFNYFvJ1xZTCXwSrguXCry2yKKuqpydAL5r5Z3WaFxgZMtv5zo2q5PMxSm8Uw1XCMcU2qPaBqaj3hZPA2cNovs",
  "key25": "5W5i2Tb3qBoKTgdsXY9PQpDHaHRyGzNSZg4bNqiexi1Yaz4DmLQnyUQ1sSSMKPni5WFfnk2qTE6tv3NRFkgcqZwx",
  "key26": "2aG7a5zsDSWex7vei6EcQosBgR46wZNjGV1xatkdSeWteuGr2nytyy8PMetN1EZcKyaqQWRsYpJivKUcCp7hMexo",
  "key27": "5Uqb7KA5dzRv7d7kuRddDC34PC69WZ5u16W2d7mjf7uzput841VogP4MbL2ZyqBdUw26ugXjJgrHNvpMBHQYwhA3",
  "key28": "5xahhxD3ZcceP6KPQMnGSmHnRyLso2eR86n9oXa2mG2kabuqoNMJJJ4rT9XprVxehZxQervRuB8n3TnZXuKDwngh",
  "key29": "4RzCPTKXyb3KbDBdHfDTmaAEQqNHFKQrF8r565cr8EDw4YB1jnaUuVG8nL1C5Vgm6HpibsuxwQhkF8oYx6izaamE",
  "key30": "4ca42iVozs5mZyKcEY9xrTyaU6TqH1pMPf17zAdf3XyF9UbDtcazEXLT34uGNryF5F4zwrGxdX8vhxHcFSbY2NQx",
  "key31": "4RoBR5EZDbxCB5JZR625ruri5Eo61nWd7stkurWHHyzaizmR1mkYBqj2osnjJn36zrzDjUYvMSAUsWoJ4SPzUj3K",
  "key32": "5EYsBKm1ZxRJ94WT1J7vvx2cGAmNBtV3zAkhSXsC6qqYREXvV6dJfo3bF3h1VCAEyANCtqr3n6R72UkU8NaR5SGK",
  "key33": "dZatMaGSPiaxLZG4rcCpSxa7Pbp89KLZRV3tqqsBhk3Y4qE8gAqjbHRuCvvMwCqwcB3WVVRXmmCBzJmF1Emfdp1",
  "key34": "4vrWCbiFSCvNctKAJvcboxG9USPZC7QXdNqzY9tN4veVzEpEJHz4r77QGEHkBTcyeEP9K8pHkzzhJwC35F8pVMNC",
  "key35": "3R1QNNWhjFPkD6AMsR45pBquhDaaurmh6oKRdBQFwSnWRM67CVgKfFb8oKcndXbmuv2xcyn26wP7VoX4FwnxAtuD",
  "key36": "Lba1mNxbuvVEUghqGLL6o1PJFiujb4cUSionZf1vdrXcE5vdhLYyXPkBoc4NnW2abBHyd6m5kAK9BFxcNt2PEis",
  "key37": "4AYXrvRqZxvvS8GF292YgNeXX2WfH38wfCYLcoGiDc7ooFWcrGo1dAL7uhF8RLHWDX61NXfdkJ1QLP5XVjMvZWCQ",
  "key38": "44JY62i3ARU2sAFF2gtnQbzqAYuM74Gqd7ysqyqDX3N549ukBGv3dEyDojxavmi6M8QpvXXEYhkJXCwRwT12v8Tf",
  "key39": "5MunY3TYmPmDFMkErACNNRuqPNBmE8zPSpJmFnXuLgRGTooPuQAg7vF2TLgi3xSXdD2grVvxvcD9pASAvjP3bsK6",
  "key40": "56cD2W6xvKGnA3Xc9ukNbbWRondZQtdWceCJ2U54fQaoYn9ExK6rXxWcxKBCPX1yZdR4F2Ti1o44Uhx1g7TRdvaP",
  "key41": "3pNB8uma8cpYudFo44pyq6crhNMJmvYvuQ2uCwSQvr74WUrhKdLpKT4ZKiyZ9vurJkypgC5zzfFmWjAQkYYmFzy2"
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
