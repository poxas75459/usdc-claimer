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
    "2vWCeaibANK1C9kdAq6RkJKb3uKUCYwwWfSsxZcf5BnbNWgHf1JPcjphS5ftHbD8iDz9714KV5QEsUVV8Q3e8vBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m5SQmArzkPYdoYYc8Y3mYUWS2jaX1WVx1kkWuiGmndDipLAebX9z1Y7qLFKbyNoADBNyx7dqdcyp7KcpDoy4VFG",
  "key1": "34mXGPbuqTY5SbtB9WQxzu71HCdAWdi8jAEPz9rGF3St91onqi4kjzQQhtxw5x6jM6rsztkrhUVygji996vHPyke",
  "key2": "3zqTGQz6UEAjPHqVRVwtaq6W1nAGJ6BdZNh8B5H3PT5c62TqCcS4XBJMnSxYgoT9Dk4fkD2aXDv2teWJXvQLAhob",
  "key3": "66gJGokcjuFT2oXksGpxTHUBFeghtnUdxgWdFFWu1jczw29EUzisLnsx6aGahYEXDSGeyL5prhU9aBVQri5HuRHg",
  "key4": "npMdcDEf3TkhC2L4qr8ZFwfCsfrgV8ganwhPeYnfJmqbbnpLKwfgGA29rviEqBKwTAZc4biVtaY7EoCWs9vEGc1",
  "key5": "S7ZwS1Qg9Q5xoYASMioW7oxB6n1yGmNk65w4b37GDVNWP8iAhk84uoz1fBBKYVaSTowu4gHh3MHiscT7dgg65jP",
  "key6": "2Cs2o4zTMuv8f8eTJ3Mbu5ZweJp3PwvKDTEbWvCZyQj5yTUpCQSL6the6xV6xvfSq8tCzyvdkuFnFvca749pJcwG",
  "key7": "4HRAdbcJyAKzM67RHZkkjVJJvGYdZhdcDLrwq92ydYe7Zi1mQVbeauZ82gDLT9u8rt831Z2UbTJMQmb7b8mJsoYK",
  "key8": "3Ah1hV4TA3FR5NCMoj4kxVmeddgYC8AeZFXudySYWs3ALXPB9arkWEEQzE3tHjRh7KGpBRzaAf7dqJsB2LeFsTCx",
  "key9": "41aqZNFWomKL84jfNEcdZq6JMbEDVVxQc5tHP7676SF1e87h5zwtcwHMVCg2ctKXqdo4nfpMzsdYbjjg2HxnfbTP",
  "key10": "3nejGGHAfnqmQQgXkijksfcGknYceuu5kttF2xoMmPKhnUqAt7ZXCFtqJNgniQuuscYRv5EetmeUKdRJSVsnY5T7",
  "key11": "LBMrcJB3oHKPT8aan8BrL8vamRDTv6fhL2U9Zt25axMB9nh9utK6BRvYZEXH7vGyDrXSRXSeCDVU5iQbwG17xvf",
  "key12": "2wyzWbWZ1XYVy3bajaJ8yHckTsJDvtqM1mdrwuuX2yqGzySSS89JGu5iYx3yoaSQYPeyfQbCLHGtTPiRuvYqiTWr",
  "key13": "5v5uGxzUKW5kS3hD9V1eATNuDRV292WPk356Bcn1J6U4UvZgennzey3juXL8tnThf28SWkPuQ7JRUQ1bqggYMypr",
  "key14": "4QW6B4LTZ5M4VGVh3uSmjFUHvRGFo7cS79JVkjHAJY9Fsw79o3pvDP1sW8P5nVAwj8bkVfndmKhSgNjW34X5NmfH",
  "key15": "3L4M4ETrHgdxgA2mkKaMcov6S3JqECTBLQirkhy2ok6qMbPmFiCk2tJDA3g7e86ydiTSmbMDLkdQrKow5n3GBExo",
  "key16": "dAc9k9UtTSnHuQbYN2SbgzwkpersizYPkjCk8n2KqRQSc6e9S49vQLHY5aZQUY1nwoE1RuSyyJtdQN9BqXwGMtF",
  "key17": "3QEumNY9qmW5PCBsk7G1SrPXh26ukBmXvqzj1wRqcWtAf3tFTkNwCm1suP5JorgAP9WpMmLJECE8AbZxFFDTf5XE",
  "key18": "5XjaeXurgahiHUsTZw5WJiojKxJXSvbjU6CdASYd9PHbkYbCdLsSs47EsgCRrBfYpgrXih2kh72ZfDbxhw8HKo47",
  "key19": "59jDqzkCAzWPjkwmfj22krSwj8fEsQpqa1SwDdZVeZLKCDxhir9ADCYqtU5ksqvCwioSb3AZgPf1pTpThDaNTUTL",
  "key20": "4TW1YWE2faitcaRUGoS1V6C6LF4QgVnuTqKKdQeqVAAe4s3ajM6RArZKiuAFbx8STX7CcgBngMR2wMPzpWwB5CCG",
  "key21": "28k4eF2RHuUq1qqvprqwkx8DbicV5kVaZiBRxvomm9VeMwNUoEXkBaL47t3NgyYNF52i8eBML9e9Ub7uzF7tEZE3",
  "key22": "45ZUkEzkV1rzhKcRs2mj3QSKh2VvFbFUFDZ9qRkZ956x4odg6fznZMt2pcYEau9EuxGseHhXgRCHruEjUuPaEFCw",
  "key23": "2yaNu5FBndAi8yHGJp7ZosQLtXVHnyfC6wBKrntcehPoeJnLheCJv4RJto8iVqRcwE7KUqRiBeMRoJ3qyCMpHJMp",
  "key24": "4HYKgzEo56sBUpxbn1DyUhz5S1brLjgHXt8mySLfaXTUYydUUPswQXSTQdnB2Fcw2WZKJBiHCvz7cwm4VrRSXZbZ",
  "key25": "qe12Jm91LXwBU6SJcwGSfTRrHQx71Ti8WR971DYBpcpfSorDCM7zFSdhQNdAodWDZpjvvaX47gHXaP6Yz8Gj6rq",
  "key26": "3XhqE47ARZHxXmyYhEUSjTB5dQMe4BLAFDPGV958oCL6wnSpHHWwmS7yeoNDxLetUT6JHYV7sjBFCGn1SLpMA2LV",
  "key27": "5SwjZ46L96CAMW71FL2FTL3QhoKno5P8ttD7T3vUWwPDkFMZW6MiG2nAEpjtPm7hrkRPDZQfrXZZXmUApR9bUoEL",
  "key28": "5aowhyxb3D3vpY4ULjxSFGLZgQvABXDBg8HbXDQD6ZkPk19QvE2irK8vDV58yFwB3tsefFNtDbH1mqr5QPTzg4rg",
  "key29": "5oLrqoAqmWQ71Kzef3tt2FAohJ82PKzAYM7T3J9zG4g5ysFwvpU8BoHLXi533fNBjCdzrdn5UBf2Z8f1mNqr7irs",
  "key30": "HstGfuaEBUbsYESzwqiMMgASPmrqPo3iBZvJjyp4B3mcVk3pcqZ3SYSShuiATwDfZw1CqAVEX2iegSuRVD7LYnE",
  "key31": "4vEcCE73XTpguyAWHmqMH9ig49Sb6mXFpPp7cEWMb9r9f7js9zy2GBr7wJjrELWV4357AfsvAE7aRjckhFHyd7Ln",
  "key32": "2Tyeg8pDvh6R9ah531yeLMaASFCNpgkTYUYbBvEPS8NeuEtvNUxXLm1i6LZyqqZD8hzWmKjLJaqNnFmp8cNVuNM8",
  "key33": "qUpThAc2Tq2CEZn2BZW2FBkfH6kDfSYArKMcukEecE5gHMfxaXxq13GbBeDzYyrD2VKyWZedLEgc11VwnTV4iQC",
  "key34": "3DkMixh5rChLZPXvMqqmvUUSg8GQGkzSL8ZkxAmcpYPmyTT1waLpj4AiR2xLobedTKU8oi7Qoit5TkjB8HFpeX1W",
  "key35": "4H84TRN6Tx9GK2pfNQkLvA5pXkvUcFKfZZqcDEJJXBzUEB5uyy6hW9886FBB2sXTzBkJrbw6qHfiSD3hL3GHHVmr",
  "key36": "2pDamMsG4i8RNHodS9utZieVqFpDW4n4seTVccjuVt3M4A32uNFVWsRypvhdc6Hy9AxKZUREr5TtY4aKKRQsnMN2",
  "key37": "Nba6zkhSLVdVqe8zamwj7VK1qgkdnjDWtRrcpoqvmGqeFtyXBwA8cmbAyGrsZfM4vHumJxYVRHKh323pEiwp4Yj",
  "key38": "oSayJ9iXxg7zvmrdB6KUhmy3JDRjXkENrqkJCLYuDUQ9shUzzSB16D6q8XafwCbo7CYcDJ9anSQ5Rf5S1GFBAbR",
  "key39": "562a4m94D12T62QJeBh85etX112bP86Kv95a9xRXv3WQKq7cxSpJHa9TzUQSKeSH813bCNRJHEpPUjYVy4W5MbAF",
  "key40": "4KXQxpjWQGxwQmJzVjjVyAdus9nxhPhP6a1xMVKa4KaX7YjJAeQYjyfB5QZmWp31AZAZpdXmZxMkbR5c4cncPpRZ",
  "key41": "5ryvL3Gu3Pmppdbxu8XVtFia39aiRvSddMtXV6MUQZomsLxCxY1dtW9DAFJEa2Ubts4aPR3W3GkcELpNB5hwApnR",
  "key42": "RVEZECaqhgqjBcAkAJ1Yh6hgWEfeZRaDjPvq9qxPA7oMEf5eJ52G5t83yfuXaNmZttP7WcAJiZ3vQ5goFV6LMiG",
  "key43": "2kBqSKhi2k6KsS1MvHyNJS5cvdGBWAwMijyrmjF2Y2vmdPLxiVvkcrv4wKFFwsQY8RkmjfabxSgokXNEBQqCrJxM",
  "key44": "2QhySxYzVZB8VN5o2XhGAZEbrcSuiTS9uYJu4QuCvThgQM9Yy65CMdz3xYHnvuKMCQ8JU4cvR32GD5oekVFwyNi",
  "key45": "2PnmCdSYomFYyVnQw7WNjD6YGCSpSb1t1DXNfXjoqn9Ae3rj1G5MrkhxkE5K1aL52J9KemhQoE2n2FsEyEcJZPEs"
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
