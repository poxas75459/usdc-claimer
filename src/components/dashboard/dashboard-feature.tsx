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
    "3Yo4wJxYLSb7dwFbLspz4n4J6XaSGHteCKMazc1wbNbzUsSnEiFiWdzrkyzH2owPwpxiJEQ1tmtDwQ4swaRg3FpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MVNK2ASe6RW1A8aGpwFq9ms59HdxmQhnAfKo8Jacke1itFM6QJfyxM58AW4jnWBmuiRCpavZMm67QPLAwSDpKBY",
  "key1": "2EpqsupHYRvnV4MvvHQK6he6ACn9uBCiKbhjCgiHt46J6m6ztEC6g6UD3NBe2Aa34xpZmcvBEQKJS56mSkv6DqpA",
  "key2": "4XK1B1pzb57tGKCwUqZqtoFaxpwCniyqPf6vcwugYySu1ewnSoif4NpMTd7Y48mGvx5hrGyxzA1bhLit2K22CbAJ",
  "key3": "CXKg9fHXEmH9uruV8N3DaYXoLrH9vWpMwLfPte5LnLWj9VWPDrnfDt9VKpUzaqiraPBzncvtJamh8o7z1SJzfg2",
  "key4": "2hB5rUD5CCj4mjygLiLExemCBSCAZQ6yJudByvM1ksojPWtMfTvvD3M5JahoCoFKNUxULcq8dtS5jugvrr6KkwrD",
  "key5": "4MVnp84XqqKXJ5K2FLPdWhZnSqciMNrbkY97GEoK7Pm6Ny7GuY9W7AV3az3V3N2AbksjW3uADvCArNhs7cxvEkDC",
  "key6": "2jc6ZaRsYu9JW8FwzJ8EXv5i9eDW9RerZvYjsPw8x38XX8xcVXdG3id5AR8YkDNnZPpvxMhevDpgv7UVJtfbtpUm",
  "key7": "3daKtFYv8evvwRwR98ypXi4m5Urk2tBTN6EmYfGHeZ98ptXivbVyzBhwWMs7ntuF2Gzxn4c7F2HyatR51fsav38Z",
  "key8": "55VofRmCmPQoF4iYUYQg6vh3CPaj6PRoAgiyYkduiki6hAWfQrMK9seNZq36w7zhMjP6dhqL7wVzRpxjf6P1hmgh",
  "key9": "31sJSAbR5FEmM1C2wmrXSP5H6qEsvfYBrBccybxAb46jdBCaMSijR1J7253WqQTo8yozgoDuJo7TmVsGShUNC2cP",
  "key10": "4L6HpL1qV7tJvQAPKU6ymJ23EFEMCgTHEupsZpHRz5AYg4X2JoaB1G4Me4iNdsaq72fao513QhELewffBDQUeSRH",
  "key11": "3DenA2ud1m1nVKUxtLkPmz4YtHmxyUzAEraxX1eDMxgQvB2SMBNh7KnnterEjpriyxqj4qcNEY5BjfbfUX6Lp81X",
  "key12": "3E31xzhtVrRpUSLL6wT7vjM5a6i3AbkxGPRTYmPGnTLURdNtJaewDVHHi6vRzDaLXwRt4tU9FKyDU5q7tpnK3Xew",
  "key13": "3fpqYJmDUGVgnzRF851mdUzQrHkcajvZeJ8HTaSfbz8vRT8nJPMwnywQTs9uSnF3eeFr8Ug6Zy1zMPZETC6rMWDd",
  "key14": "gtvVZcRzqVuTogYPdoDrDur8Xiy5nK138KieTbxa9AodnZFEx98cpCnFU3dA84u6YaQtkttxZr3S4Mqb3KwxpFb",
  "key15": "21SgBUZCLMEiswrgpd9sAyTf3LKB2xUWQoxWhoowbnk7BKUxWnsDX1W6t61eFNEUsdzxPKkTrDpmXEjuHyjDtuxT",
  "key16": "5dEPRZS2T7WPr947LaquUjWfMXLga5W7K1YhQaDgqSUVKFkdn5eC7koGjYq42UZJaqtSNH1ZChHQXREyGLvChgiy",
  "key17": "5c24sdCmsvTgyfehN77rkkP5FcvVidn2PE62TaqyCRMU7VHZS29YR4acoywfFxghPgRGPimuf9c2zq4nECsnQ4yF",
  "key18": "76asKiUXdL3rbdjYwJujXWAtJLqDbkPpjvpJf8FUE6T41k3B8Y2pjUDNDJ8PpA5t2vtmAQ7HXPsWYMCAtmc3YX6",
  "key19": "2GVaxp5Q6V1W94wXxXb4XpYCpENWzwe87VjU5NxuNs6bD1djAy4G3JYC8hQXoVDKZ7kePAL7VRmeVV9m6btLLNzW",
  "key20": "mYNoMDTyDTyoAHnaL6wEuHvDSeeoLDMY1Bu7QTgfJdDD9uSowZr6ttHNJhUnVrFRi2UP3VZ8v4KcYN617NHFRam",
  "key21": "4qmrfoxNyRghekLGjsPmZ4u7xCX8fJhgBhm5ioVLerQvkas1u3a4WMZQ1a1kKKDMJ4Eq2NwrEKKKEQmcTwQqEx3n",
  "key22": "4EZikzMab83QmHB1UQeZiy6aQdnFp7s2CEXV8WKsJx8aWmCjV9ymucJxc686kdN1dDfcM9nvK8YGwv8L2RkCiqD7",
  "key23": "3ybS8m5BW14dncH5nzTZ2cjn2bJ8hG9RE8EdMyrZpBsdNdVQ3TcusGSbWRzzFAFFrwUmkGyAbLqcrTrLbTq57PWq",
  "key24": "2sx34FHdtq2qijrgR4ZnxZ9P3St79eHkpMn2NpF5N2QHZ3ofTAmDMuEKG9X8EhRK7atfKXtpw3WS6hDgYdUqpQB6",
  "key25": "2mz28Jphn4d4hU46dTNxje2ETu8LY9RtcX1JVy2ZjpBMKPVVGeftNWBdFRk9SkGLfFGyCFwoPhChaoec9evChfnt",
  "key26": "XpDPLT7FvKp3z4aXNpopf7kJdBJosW9a2EPEQKZ6DTqaA9etSRmo9Eqhwk6sGovZF9KnboPHWd53p415cCXGDA4",
  "key27": "4jKAfM8GmhWyewbjvamNSkDvb2hXcb2B9xioAWSV3KhqFXGpTGQCXQLCpwvAUxAC2Ad6K2BhBmTHyPj6oQxVtVd",
  "key28": "573DhrdD9TLH3xAPvQEsocaWxoZmtysi3Fkf9DxbrEeL5NcU1Mo2Wok3WriC3W5reuoBjyKeYMgQBasLXnvDvqtV",
  "key29": "5HNw7erUkgcEUUQyxTwtnF76JKgW312iPm3T7WwcSLqTx2Gskh3St2UCdQYtK2TYYtEgDfHezKXUxB2T8HLE47S1",
  "key30": "2iZqABSAgiSTXwSBSVbgFag9AbA5EBWiU8yiauvPGKzBrKzePNoopgSLSyi4nn5UcJSy2pEASBXKjkHbdWqGg2ot",
  "key31": "54tmxTkJDo9dGHFNu4M8wKzkHfspMyMbAiJzBVXR8HBoGhzKs7DTJZYYEDVpSFuZRNijqbTjPL2jTJ9mfw4kmCEf",
  "key32": "VMgaS63urw9vZ3WKaX9RzHUWmizaNCJkvXejqeFDrArwPxiRSNRdz5SVXibphQkgWGAwz5LQVyeZKxxzedz5VDf",
  "key33": "MxLk5LJdUFx3V1Fhtqxm7ZD4BgWSsQ3eJUpUvTtpePBMEpBywp5KJSTejRWQr2Z2g4tSXwbRB1TxJ1xoDbNddqA",
  "key34": "7hhevR6MjqQ8LVxoVXuisvLz9wWVtTBRLy5zqUQ7hTAECYj7ZvNTq9CtzSU6tV5uVZpFgc9nCJEFrNgjaAQxPpa",
  "key35": "2mqy2VaQmS9dWYDxHsM4kYKhmgExhs5cjQXh99FLnYcjxjRstUpMuNx3pmriLoA2fkrT2FSPKYaN7noqG6K7SyCc",
  "key36": "5r9SE1iuDMVJSD4iKN2L5bqUZQgTgBp3pmnULLuzwKgr4DYwtvpAcs1mvUpCvfysJgXHyKHsBKsHHYjKAP4S7A7F",
  "key37": "2d6egTxbs9JGuW5UEDpwAu88mapj4zFGA1Y39WwTG8ngF83JTvQ3xAHqivwxxiqRZrj1Puuwg5ZFSGowCaMZ3xkj",
  "key38": "3j6V3iUzwh7ZDuWMbgwATESbJqBfjPn6rHDpRWSMHXnjmQt41AhKmXM6QM5x2eD78Gtu67mHfWyGm4fPjiVXsXyt",
  "key39": "2YaKGZKrUfSEx2TALggT9Gw9v44EtKBB1iaJNMngggAv8W6TyTZLDZsGBL41p3GoMUjQsbkagvBi1axRU8SCW1s1",
  "key40": "29duogAt16NGTfaE5paW22Av7UrBeQJt4mAgkMoh1DK9oaekbvbvDo2dg7r4EQ3GJiURPMtNk6vwk7Vk91UwGksy",
  "key41": "2hRoRfz9F8kXwsd714Bx7V7fueWYZdFmor1aGzQdHpw9YdgnSxtHysCy6pckZofLJrvxfPVoGPjyi5KCDWmGwHRk"
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
