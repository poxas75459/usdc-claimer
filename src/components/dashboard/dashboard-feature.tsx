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
    "3H1hg6VGGKBmjz4Bvr8Hvm6ar3g67idJbrc9bymZ7GUbNiX4W5Aeh9uZp2p47AUU85zQnskUvhpSEGKjT1EkoMzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41WxaRjNDN4QQonrnokcBu2hiMuhZaNGMd24LS2v1unvnFG5p9vs3gvKsE4QBUDt1Md9Z7evHPwwXoyEhM8z1FQg",
  "key1": "5MCK7w3TaPnNZP65ZxKHhQVAY2fqjHdqpc3hszMEcLCF2fFLaw93V9V8ydE9aVoz9KXaXyTNhA4xYCHqVzxb385z",
  "key2": "3t3jkwxfgrQ5VZA9qP9mcMoc8gGr8EejeUtpgYGpgpTdueaKQzpm9SMMM35A5Yyr8g4Z4p738Fk9KGyXQtpkMGpT",
  "key3": "5NH6Wc4B1jfgJ7srnFDsNv596jTVdZ5sKHeWPfz1b9vZ7W3Dn5CNFAJsX9Yw9xWEMyLLQy9PHGK2NdiSPpYrXJFM",
  "key4": "66QC39tYnAGYkmCAfUbe1yAxjUogyE4spbAeut49hxsKzywDf6bE33pfSSBXH3t4AUFmtwViz2iidr6vTc3B6Ga8",
  "key5": "2MskhXm2QxeJXU2mSKEGfi5B22yvEqfcndKoBNq53VJmkd2cs93kS9chmPwhcD5zivDwAgLhbvzZc75JKQSmBpTk",
  "key6": "3BX7MYC2EQqBTPTrUR4EZgnkCvZo8SAysLGZ9W5g3SSY3HfYajrDtXKZgqwH21erzwQLCgxZ6LTFwrURNsk1Gndg",
  "key7": "2M1fotp8AG59ggUqM5zmVoUerNPJH4aFBHLAF5KyoPPPDdzCuL11zX1c2VQuB5ge6LUBRV38f3L6EZNWG8KjJ5vG",
  "key8": "2wKtDq1L4H6iistqeR7VfxGTVFX6jnUQSkg6Bis5MfZXXAyuKu2JbNJSo8ZgfD2gn5ytTa4K4YTY8E7aYFxu1Uv",
  "key9": "67bZoAhCq1aW7wVH8fDvTSAUUFxiBBU9BRNdUWYb5AnAz3sUYLzUeakJqr8wPhJshKCrpXRoBo2sWhsxdqLWiPcd",
  "key10": "4oW44g2MxhFwYw2LnmPRFVnrDen6Nugnm4t2YdLSRgQ9x5xg5NJ3oKqTAh6CwfWJY2RnKsacAHV2TJ5yMaDxj7G2",
  "key11": "KDxjnGfThgwK2qenVm1y59jfGZYsNKyib5P9V8pwBr4edHWCDZTNERnXizLCsbKTcWxg5zmTE7YRYF94HrPSVuQ",
  "key12": "5gJLXVH2sihCQXUHgTRK2XzqfbyuF8WbwpeevWZxTRho2CNgj26tw2UNaw1XouMVhG8Hztq16hP1YM6Wqv8toSnf",
  "key13": "2NBppZxZQVMmd6UbFe9twYVvRw73hKZBEEhKcrpz8pj9F5xB7qEfYAGi4fgA8HcyN7j1BwpAY6t4kHBepeb27nC2",
  "key14": "2UCCCaSTxJpKF4aLNeZnBQkLvxFdoTjyXCt3KExDFXFBTPixYxzFCGnnrLtJQ5ANHkycAyZMkKK3nDCVY2mbfTgL",
  "key15": "uQ8KXYxuMa8gBFLEduHqaRKd6zKTgY4Utr9QQPM2T3DAGhRWuEoTM2BnGCA8w4EMMPgvfoTdeuJJTd5Fvu2L8NT",
  "key16": "2jFMoyn94khEkJNn6APB2A4qPQMijEaz6FjVYdc25JCuJvMHYiRgZh7Usy6HgBYXjPAzo4wrWxyhzwNjdrBhyuFc",
  "key17": "3LJAkgsK9EtQdvpF8gzFAiVasos3j4Q1WgrjVXNrjvhgEA1YGmD2t1Hz6EHCkc8AAvureah839CtqdFrWAwXyhkb",
  "key18": "49CSsEqFJavqEx7SR2gJ91dxGJpPzZdoLrchQHy9DjAB9uzNrxLqyoELuyFLkJC5EDuZ3JV1hPajHTqaAzmhpDA3",
  "key19": "5nRnyVC7AkP4yrTFAaSPXPz1AKZd981i9G6qt2QMJiBtKtQYpzhmEU6QmKzDwsBVbhrZFZqqho8VSqNLqva9RyDg",
  "key20": "2ZTmJ1DUY8vk4Bbm1fdyoYoPHaQDtGMn96hFCbjJyQY1XZvYJ7w2zmiTm3h2P5XAWej9oqpoUXB3dUDttbdfR85N",
  "key21": "2XSiCdFQXHXbJaDhk9ZoWW8hqzkt71sF1mCDaNNVYjUTwJZb7KS9E9jM9AgG1WkVEeXcPFeYWBhR1zLu29hABFH1",
  "key22": "EP4qi9Jd1wi99QwhJ36yno5ssRiyvQBV4TPsP3dFQjCCvtbqhXJ4inXUeCLJihyyKUALRuJx82mLW9egYiXUWz4",
  "key23": "3hfnmuvkyGTEkZ15aZ7soNoAPzBTdv9KHaDe7jT78Dpqrc4iU6tEVaYhvYERLLyJcbeyCNDHQQgDCUR2J72DabLn",
  "key24": "5SrxhT2zSoqNZcr6ehGEqBxeQyn5Q27aBYRMfpdJ42YHfjh5VKp4nWcFDhAurL1DDjX21wKPmm2cm1jiqyRi8GRG",
  "key25": "48EksFWsJ7nm8oaTW7Pjr3FEaKzpaXGe9ThcxpJrwchfnBDcJm3LJUUFAAk5kFs38hrmBXW4xm42KWT9VrmvT5Nd",
  "key26": "2psxEK1MbRNbj559ukeSKwjuz62RFJe6LgT7PPZfgJNAd5Ht1dogfzamuMXzsSHzJuno8ejaD9zcXn9We1Z8JphQ",
  "key27": "2WfEvqG8MVLWRme3FNnpTurRNNF9ZJi1PYRikc6uH2Zfm7yyjz41KBUeW3MtWzKkCsaYQ9MiT5CurSuw22zVnCLK",
  "key28": "5zU5L2uAGxPJvfDto467pRhLhptmgAjSv35kTxSeDRZQ3w3LH1J1G5CezwRYkAo3rFUpjVQijCmmjK6kr7uDVqrV",
  "key29": "dDsp4EMogLgd69jyavP2MGXnwDHu5EtRBv5LwKF3AvgcgmnfMkx54zVV51fGj41row7KAvEST3ogUkMG1Ecmvnx",
  "key30": "3suRpgaogDufPj7NVVZs6R1SeV1VG84d1Sa5RiGTUNcsHDQSXzQrxWh2vSdHXvSBrwqcJJctHxHapNswNd2rQgyp",
  "key31": "3e1L2RfedFrjkR6Vzf7n8AxgMecn5KAfxHR64iY5aRXqkT8TX6r2uKwKBZ2T4Srp7WqSW6amgomotKTb4iGVq2Ef",
  "key32": "5ZRekqeSAwtBJZvZRNytAwsJW71XNg7qZmdm3DitP9qqoDkfLGSkXYf9kepb4u7LsefdxgoA5EHCGBF8E8ZVLp4U",
  "key33": "2t3imv5WSiSqunmo62oJfXZSdh5FNXAGa6V3RD8tCjzhy257JVFRRBSw1yt7fVwbcmuHvwWEpjEbUZ8MidGjvs2F",
  "key34": "4YEerpbwrcvVzCyLE3cnrzqGiBxKaBhZiUxyUsf2F2BACzJYdGeBhULCFm6wqbXDiFuZsKoNxswFdKM7BfjYKfmy",
  "key35": "56UFLMttH5KXLex6nDkacRQpfQ2XwJRwofCYM66ZUwu1BtSpxTeRENwjxvBHuTSC3NnzhjGT4gURVPfSMCxki7pW",
  "key36": "3xm4sSXd5FnwumpHmmJq5qsAxnpVqEwPc12ab7W7DQgcmfDHYhTZqYV8drzMZVK1WbN6TYvxR8DJLSYM5axQJXTa"
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
