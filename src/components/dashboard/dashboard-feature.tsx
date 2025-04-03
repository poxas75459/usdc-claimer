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
    "2EkBtFeUfvsVLHRMxQ4zkeQLycz2vseVT9ao5zshbwTTNgx2uTrquhgA6tGPFG2ey8YCkB86hhkKL6y532G37cS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AjeMPDVP3QJXkTDHnPCXsVAN86qtTDCQBpr7wK5hnzcGLnj3hufzL4rfjocwP3ZVKAb8ENtXmwKkPSbYGZWxty6",
  "key1": "3jCEGD9h7jhuxLZWBHDCoXbh63AxZhu2xCnV4XJDEoPbERqiPXibMFJ4CQDyp9xqdRJnyKcpKwD3PcoK6kCNcY3U",
  "key2": "4NHxUfZHFpMdo6CE7FtnNc44LQmHGTRtXsEbTcBAzpVb8TpgnxXMybUYhwR6X4NSrn4jydHYTj3dc4uEpLFsGoBt",
  "key3": "4bFLGLMdAfyZ2sGqHgV3EotY92hpwRB7kYYSDpYQnCgFhuAoRJdaK9ra4k7yH4n9NfbkGrnh3v7FZUSNKt1q78jz",
  "key4": "4ZBwzbGvRhLP22rgh8XiaoiCtiijFzQ4VvWh1rppA1qbHW8rK34oFnEaSpvSk4Z7vm2HwSeG1os1xaC3LTyHDBKx",
  "key5": "65QQXiYtHXMuQ43id8R6x4XDDEsG7Yh9dahFUeSUHQHRGP6kcTcpjWx5M1WKCLgRSCzxo4Vb5g1WioyL95xGGEnT",
  "key6": "aTYUm2MnDYQ9tGEQCz3UpUkmjG5BrUXvQfpa1YJcYgsioeGqxx7iL5xT7XffFEDc1V8YwENJaSA7BtaaN8zcZTC",
  "key7": "A5FDerdeFLibYN3bJViPYCogUByXZrUYPpwrEKYcFytRTDeSGuBuqag9iuUKVy4dGGkkga9qDRgvoPYpJpUEJks",
  "key8": "3c9gCVxYtkn9vY1xbc13u1Zn2dbABc3kTu18qMpdYW37fBABHmhBqAxJUivYZ8k2D6SyvS61W6ZsLNHzJEcdutjF",
  "key9": "59vwMiMLsHmJFwmEJUSxL551oBUypg1ttDNPj46bc2ATvy7CwEScTM5c7YavEKX1UhLeAKkZBzd7CLsJMQNK4Bbz",
  "key10": "LrWgDoAmmgmF8gUAaHyvUkmAGqYGGBZMAnDhmrscFsVes8rjcL5WRDiVK3iiraiAQfGLodCaREbmmV5vDf5G5DY",
  "key11": "4BoVAhQT4ZWKJ8x8whzqByxD6NKsuateookASzzqEoRqKKa6YRMF3wV7N1mydXQYYZSR6w9nmqD782xWnw7MdCdy",
  "key12": "51GcbLJQLWreHshRvXxPxPSPnb8GF1UmZRN7VUGWHQaVerBTkdb4UZGcE1knVikGKCcKNbWHgyrBc4jFoVX8USWN",
  "key13": "3cpBBgzD9BQBZcwuCYJTEau9UfhRtsdK4e6WKKKb3YehxMLniffLo9vymUoK45QTrujc4q8nPGGjCYvazryAYTyT",
  "key14": "3z7j7Ccj8fCySUBMEkGscJLQr5Uv4b1ss94Ba9yXnmSmFiJKRb3p9cwTw84z7bFqB7uFkuRGBXxvkfwkXkcgUpmj",
  "key15": "zHNXo64oTyvEsiQAY15DdxAsZG6myuhqVT6AhgYjjjAAYWDUrPKR8aawmY5GqqZYkSAwQscbCq4t37AhVDTEEAT",
  "key16": "2SzXnKpz9AxoPx52Y6Z9CcKvvJXsbzW1AcyweYpnyhngqe28N2cuHcnsCzgFabwEUzwSU3NLaBAn8cWBK5hiQkuM",
  "key17": "HbEQvZDJUQG7fw69bjyoNQAos422KZodSEEQyKz1w4Js1qo4pKmcgP4BwLfic6cB13pN1qqY9aVSjp6RAdNAMF5",
  "key18": "27UnJmaejAfTHFvtv7jbmAsat8h8p3x1Y4VXGTh67kbvbyWVGdAf6Xz5FcZjhtQLeMftDrMme3Ee9CULYPufGsMo",
  "key19": "38XJBNR6wzePm8Zmk4Z2C9KbwcBs5wrgYd6MKY55WUCu3WoGWUkfc7JqVrTScHBU2SH46HEQ3cDhg1UHDhar2GBV",
  "key20": "2h9A4deUaYuP23DoctRbpS5Ne18n8ix8beRKDr3frqGe1trZ3uFSrZaXB391dyoGGHirzjF1qFzVx7N85PVDCb6m",
  "key21": "43ZxP2ZZPe1b2zvm5CQBeFJxwYsHejHLkyTjxDYG2nzjQrpUtWhtY4XX83FvAampCRLhbrtVaqTVFCG1Q927mJLH",
  "key22": "CDVLzWT4TsNYNXHUj1JeHyMPYHppzu9dzeStQ3hEJWuNNGhJfEBYkEgc56BFcNb7pwLA33XW2vTTYjTXQwZJg3A",
  "key23": "886iaDZAvniqZY71TtSGs3iUiXJSaESmS9H99FPEnTxByPzL9uH6ntL3hiRhtrrmjidiDfhLtGyK7Jig3K5G7X3",
  "key24": "2oFPFzCKqgNMQoMsznK5MKYcpv36L7LUHCRPzR2q9o77pyT1WswUoB7NasPLqFRci5cy6PA8Cz6brzJK4auhTsjk",
  "key25": "3JZzPNFuEfyfZRmoDq3rAZXkotgBCeidsPAg1WyyiFmtYuCHWrfXMTugqfbdwtL8JK2BYSY8oudwerWSUVT5xtjk",
  "key26": "4Gd3ruzAXnbVdMNETE7RWnZAPUzZG2QbnKwYskum1Jdb15AFxG4zGewEMSAGECXwa2gKt7QTR1gpnG6oG72WXNdT",
  "key27": "3qL96UChcd7FSz8vzStYfLZSAw4WAXigd33RhJeVeor36vhGZiKP9gA3coLTyk33RhStzHpEeq86eQm8wpbFvraM",
  "key28": "sZfQyEXPS92jX5QMUQHacsQwbAYSZQZs4sQgPaQdeRMC2vsdhHCLW8ZgvJhypAKd9Lwsm7zEEXFHkdbuLiTZvCq",
  "key29": "4wKvyEVRa2ZhMgzhi2i9uJDf8RKXrHxQ3tMDKU61KYoapZJHhQnXatBoYTtM8CUbesqhPdqxJgcHw13iYez9qCLR",
  "key30": "2FvH6M7zHUsuW1v5DfZB7cSj1qtgq7LBYZ2j8aDD82yLmWkweBnpynQuVBNiD4z8E58ApJ4YqXQb1haprtZBP3ri",
  "key31": "2M2nDredCfeLfjt6eGW7mPJWbJgZrSHYZMobYysoNQZUzwA5hZnEXdHzn4HftEtFjV5WY8MH3QTZgyJZpqSscfRR"
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
