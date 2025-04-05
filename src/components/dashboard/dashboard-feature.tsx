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
    "QbBGhggdX3KajMkxSuVH2ao6No96wU2JDQ5CRZfCuiTsPGAbzrQt72sWbLXHTwyCwt7KgrmketxmncYVqPPsEPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "frtYZ22btDa1FFsNn6jQZ3BtnRkkstdquY4pE8mPDtA5dEFb4CxTDUauv5QavDYngdak7iB4iTSZ4zLGgFJv9ag",
  "key1": "2rKXSz8cXHETQZw8xuYd9DbMmu27RF9PDwmm3Pv1mqZPjK2TNyvm7625JGszM2KCBpPQEJhh6n54DVbjXq4zpL44",
  "key2": "65fmf9yZVT2BsUsc3fEQqttYtRNpLHCnKvDafQyiKJA1G3idPGn3rc2rh32TNP8S1Zntq6hrz5Mftv65ibqbJubA",
  "key3": "484H9gYyqocCN1bgqns2MJLN9s1qbZPKMjNF1msn6i7vkr7nzJYsfBGn7PNsMgEbgP9nJZRzAVRXqw6bdSz32KeK",
  "key4": "du3HSHLk8QrVixC8GwsYpxxp36DcvEsiGao5yMbASN528WhkuX2Dee5pJ3ohmgWnin5cNmQNsDePgFsQyJyh93i",
  "key5": "2TKVcDXCdvnK3Ua24nkcyRbRborFFFwfswiGgUuco8PRnS3HCZFYvrPPc2k2BXCVNa2kUDQr58fyAdeppXkQmPGq",
  "key6": "5QzMDgrh5K3Qwa946oAvCvfeTxxzSntwYs46NsykRQFU6wtRB7fKpSwbsSQjqYarXa3VmdMGSYqG8UNUe73yCj6y",
  "key7": "TRtmmmwFpbre3GcQ4pDvCknWhvEo1ti7JfM5NCEvnF5nkpteWgdBWw792fHsjyvjykYQ7LuKbm9nWjvy2XFWtwe",
  "key8": "4eD1Xmsz1LqSqfc438UZNKaPTiq3NW4FJBgSr8fiN7GUHYE4jc9XXWfE5PhwvnxVQpuBgDWEUKz5GxdEDHaCZTm1",
  "key9": "5aaTyA4UJ8m8iUti3hCDp5gVxQJmuY5MSgvRURZLvxHFrrcFi74SFaz6XyiNDPTxF45h6Sf5XyQHBrBmLmEB9B1c",
  "key10": "4UDQ4wivRSpvp9chwGK8gNGpayVVsxiR6nuDWD6iexat5pmPqRqYR8sw4mo93PZ23fbVkb7N7t8ykAohvSnBLeTe",
  "key11": "4mo7ynkaxuEvKRK8p3RQA7iByvW2pphK2VyQknnexBMtbuy2WqwPfYenaLJJMMRMDnEp6oHNj3sBb3nyQeFRmkoZ",
  "key12": "Ua3Q8m9B6Xek3Hwkf7DoeLbgnjAsGDkdQDb38giRatKQQsQwhmk8gXXCyg5c82ti1Vc96tB3rJNsSnGj5XVsS7H",
  "key13": "5L9MTqVrsxsQ2AsL3gr3U5uJQtbNVsbtakm6rdzAPvKSZrEMuBv8wfciWGfQ9hJGV8h4VUPVsPcewBwT5c4yTM1T",
  "key14": "54CpsVcdQprTTBWWftC2fKtVQzxS4TbkYRn7ZP9v968WTvjoUvLTJZBPieRGhhA1JHniFKFU2x2RQoMvwT6eBhga",
  "key15": "3S7ZSFt7KikaWqGUGDXhhxdu8Cmzfo9u9EMJr4ZCw8pwYfNG9A6bfhkBRfrTyTMB4EUJ8VLZRnt7iL95e52TniWm",
  "key16": "GHFHbqj2prnSqE6Xn4DHEyUvbnEQa4zMsRgokvXoapp6iKZmHADfREnKj5hmhV4fktXWuEpfE2P1ejZEjpCCLyM",
  "key17": "5EtszbBX6iwfDkedCLSDHjwjZgS225xMaxCmMHvJH8HmmCXoyjLLrMV5H2cVSFP3K7m312fJmbnM7h7htGHne3n",
  "key18": "3QBpQFpMr36BRkg3GLuHPNnFXfiGvqz6zAxSsa514sFZuXP2gdDN3Pz7aNP5xV4SQ1rgK1Wruo6TCY88VrdEL3Yu",
  "key19": "5NFvSYhmi1H6XqogD5D1mxUS99JDLUXQwWxXRa4fCMVSvP54EQVXBydu1uvZTgqZLpDgmy6gxv4rGUQVnsDrZPVc",
  "key20": "3vmqVstnCKHgXuv8yWrVCJRHFpNevXSAYPzwxHj5FR2JQt7Xp1harnfQq4WqTTbRfFXK4xY2mhaKTp4Qy8R9HNm5",
  "key21": "4M9TsDQH9PF6Y6BQDgEKVnoLZq4QkXGQJvyX3YHBX1Ss3AfF9RRFbYw5rw736Yc5qQNCLwQ9Zvw8S4LbepZfgcFK",
  "key22": "4cJroMoA9dLLQQLZDFVeWqREWU735FoCWgKgoqrGaETvcisFKpcWe2D9aRfehU9M3dWPwarph5qnor3yarUoq6ex",
  "key23": "4hepCwpRvsteyvuabEEkTuU7HHYhMrfDqgqJMpTTGMwtadqAoSESLwuCieCK3WGBvj2DzgmPf9ZDiBnAo5KV3Rm5",
  "key24": "4STRRJ3dVe9CNQRWJu8t6hxwUiW4mmtHSBUTeTxJ2dqqgUgJGH1KgAKzAmhBKmE8UnHJYJCcwKuvMERTW5hqHm2F",
  "key25": "4ERdMuM8Px6bGA29Lspqx4uef7DikrRWvggAhuKAuyNvhTazeCN34x9ZmucSkoftwBzvskxw4m3nvpHW8oaPj89r",
  "key26": "HhjByL6rkgmqpxHZox64N1H5sSa2pN7ySwxshHKbgtuqowGha8qxjcaDJ5rZFXezvCXs5ZzAZ2VgndnJuwnUh4z",
  "key27": "4VZs6wA3vDntnanjSUgwJGAu6tAzDUuefwvTaPt2kZUDNqyvdvjBeum81zFfFDc7Ex6BcF1EJCUsYUCnmNFU3nYs",
  "key28": "378qFJ5qtxoEHjwn8E5meszKmev16XLB1qq9Sq7jdBvSLMFThgzbvLcoH3TLUi3Nfh7ULLQiRVWfiqs8BSLsRvXU",
  "key29": "2pwQYPpEvm6iY8p5XdxfxJBDToHUSHK9cz9n7BMUwY7tL13QkY55AWrNTYXyjiJ41bGUMkTD6Jyr9df53WnQjh78",
  "key30": "3miMgsprgZvTVWnQP5ozzjZfx7YNoen1HbvaJLHquyUJZzUddAwfYw4R5xoJm4i9s2u7PNQPQkAsWVhLF7Jpp9Y3",
  "key31": "3cEZS9yd3YMS6zdfPVuDQG6xJK5iVWJknyK9yRZXtPAxZRZMcBDLsDR7d8gmA4vhgmWbg8F8UzTmp36dnujF9Dqm",
  "key32": "2W6XYXhYoxYoetAcCTwWiVcTKhicnimNHCUtzB9tV5gk6s5PTYEYqXhNbN4UnhMHaUkrsFA2oNdokAd6mXd9Qk5e",
  "key33": "2m56FaC8Ju841uCJxXhZ6akv6DsAUcMWCLo8b5ZmH711Jzg36xLJ9bjSQiEPiGji4sbyH6XQA7F56NGVg3h2XN26",
  "key34": "4b2EGLfLKYwnQEWLTYJsG61k8VVxeaxBESpJPjB7fvDKvyg6pYFYsCArjn6suGb44dRds65TTB5Y8dbLfhwNktb9",
  "key35": "4THRkK57oKMn3mznt1jeDnNTkRbcE1NLXumeFUgnsnU1doEBvFQRcQadrmZmxRhKNQjgiAY6snZv125kA8LD2Pgf",
  "key36": "4QPqSzWH7xBDQQfxC2Rrf4wpTE8h93jCaoq24rwEgvVfXQJf8chZ98u81LL3C6uWYxHXFwU2XPmhi8vxESVkaaT5",
  "key37": "3kdMUtZbTMs3BuoKevAJujqkCr98mY1Z28prCo3ikimK24DUoJ59qsaWjsBL3j2LE52WXmN1W6P4mzHpjiHQsZve",
  "key38": "3tN8z5w5EX4PXr7Cjp9S26eZhRu1ejKfiUPRFwxSzgCXSsEGS6rhhExn3QAceSGUL5hc22EXiyG1gw9upuSQxPF5",
  "key39": "5VG8PxdS1Ghew6uM7YWNUvD7m5SSNBzTzffLgZEXeEinaK51NK5muLrdAUaLpYE1uaFR2LL7pqZMJg4f9zYrKAL6"
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
