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
    "4ZiJEyqVxo3FU7kvM6KZVYmFxWi3ForQQXN1UkBEWJGEV2PJRvAX3P2TCZ7ZTosuw5uXzCk4L6BXgNfVBK6VNbSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mGGW3beHKypMdrmu7tbAV4GyYxkeknuiGDzMAT4aWykEW4ov4S1oK8sgUBbD7XNQ9WQfpGECLBXcCReYH29Em6X",
  "key1": "y8r429GSwPbX4bb3x16orJoG8ZQQNtYp13HzF6Nn8rkjjgPP4FGWVdYNRvx4udXCt6aPTk6mutn1fExgmd5an5s",
  "key2": "3pUyB5hbRg7hsq4m78yAmGC3NPc8wkesJyWraCpyfBt5TtxsobtdzpCbxbmTd4hNEtsNwGVubKyoKMcsgDR6gXyf",
  "key3": "5bAedThHmdqpmNPC5rk6hDPJpKq8GhRPzfWVsbfhpQy7qPvLZ1miG81aLC4wt8J6XYofhGphpJx6BmnEj5U9FV7L",
  "key4": "4aBJG8wDCe4FGkEJqNEjjLQrpL99By3V6EnQ75a6MD8We91MqhMS6LniE4eTZwZCMPonqGWeKvqJzHR4bXtmej9L",
  "key5": "4R2pioRZi1cjNn3B5wajkWd7tQGEWBZvi6xTyNPQmL8hsHkYRBuUfKMdw63Whrx3vvmUvQNcFGNcEJsu7d4U8aiG",
  "key6": "63P4c9bPktgSG9oA5CYTVaJRw7hJKGbZyvvAxuyMqJmp9eCufY4zK5eUDEsXdzGP6UxdJ783j4CYNBrsVNafMCm3",
  "key7": "5S1EcFjxqoT7Gwb9pnKg4tscvAHMqEpFYqMWPaRfDqafmPY13G5WDQEZEE8t6RhYqm6SKJjzhtWTXdDcr2Zjhkn6",
  "key8": "123ZXA2e3JE4N7434CBG1d4USs39otNuPS6zXjGufwH8ANq6g5wKDozmiPPMJ2GhqSqMfpGsJ9Xxh7ZtUzvXHj68",
  "key9": "51yShpxg439es33sq6U6QiSf3urzgDrq4PkfstKPxDuJa6Q2R76uWDTGdFzRfd8pJZMeiUBQze26T2wiEG6dz7Xg",
  "key10": "mLHRC4YQmtRXdGRHs7dyaD39FBVekJTLuVFcmyDYHnfy9nAkUbVGmBjRXu2L9cxWo8Xe7Wphq84QXaZrQ5DY1HW",
  "key11": "4yFou7TnHp53vjwAs5Buu4hEeQrx2JSMevtMFp6NrXF3TZMD9nuHbAXaxme2Yub9KWbxyMM4ugZtjUWndUx8v9ns",
  "key12": "5LWpfbH1rkb3oCWVbiR8G4sTrCKVDLq1DMbEuGMDxxPER7PG1ikaPWB2exYQDU72VE1uAm38nkR3odHdZdmYHLMQ",
  "key13": "39YwCxxm7spwkP6ezJsnicCgFfWERRRg2L5viMSzLbYmuTPY6Smi4pcpdCuEmN4s8X5fmsByyWM98oy2v5w8wZ7P",
  "key14": "3MsA3mUeL2ns7FonWX5FTgSY8HfSH2kQqiJAqKdU37JmZSYrembPGPhtF5w1LsL5r8ptmJnHf9FuEj5c3TyLRbFG",
  "key15": "2px4FrcjUr7978TCqT3QcGCyJg8LhASfdGgSxpkMwKVoFPdeGV4f546NQjCmouf7ioULaAeuGbTYybimXQVJ9syp",
  "key16": "4dApWf4FY6TJtXzdXgZCFL2m6Ryz7HVZW1n3RzgxbM5pWeeKcjMVggWUQHAGGvFBtrR3FSprZqJ7qGsZHL2bCRDu",
  "key17": "5QWrmcENQ6Le4ZhtmE2zriyghWbvtKeMAgxjdAB2vhum6Tgq9B8hVpbftzFDGL7sFsjHSH2Yhz5pnvKDYah3W3tL",
  "key18": "49f3YLr4eC9iKYMGCiC1CPZZoc9ccnxeKRRyDx5BHVYqVruar7uRNqkcFYXVxNmeV4A9KjBeJWQLUtjS8vzenh64",
  "key19": "5g5gmbFP5phQ8zbqdFmrwPhsXzpHqLqXA8yY3cTQUHZMHWBQ8KAPzHuP3fkYXxw8moX2o81yspt994Ly2ujcGKBM",
  "key20": "NsBruD3ZnYnAT8iJzanWcN2ucuXNRDakCvMJhzwtJbfpeWJ4ecUkkMCZN1KCwz6CEJvrHS2yAwUXqnUp6DZCnAj",
  "key21": "5XLhVDnggrcuniiYAbYjoa6gtb2HhPgYs6RU2WmvLnHEfK4JiFU5jzZNzwPAQHrzLyPWwd7ZJJ8v4qRE8iSgL4wM",
  "key22": "5oSeUKDXQ6Su6gkCMzYtSYASy7tAhFt37bFaViFWtEniRaJE7DcTcyGTDDzyD4izoqqXNS1fdcgSbsEW97NySPQB",
  "key23": "5DPD1bHDjiUxcmHP3JDxrrZQ3GDhiMArMCVcBMDQXydKT5ReLYbUyMuaD5X2845qo4Yodti8xx78VcmamNQrEFee",
  "key24": "5KmH3crQqbG6aVbGw417gGLGfocXSm8vzBtV16sXjjCZ2Q3C4JmLQ54VRuAkPDSjgu3jfHzh94d1mAALSjDmxFFE",
  "key25": "5egQ65yCBtEtk9ZchAz3P3qmPA8nkMUkk5PWqeDQ7pcKPvm31CdbKJFYNJi1iwB4eoa6r7hDBhmC2XGR7SfMMqCu",
  "key26": "4QBje7azhQMuENAq7Uk6mB1vYdSZPWJ3MXbQCwDTt5NMtQ8G8uZRCtibdhdXVJRn15Je9QnuvBpjrPgkxBsrc8c8",
  "key27": "u2neYAqifanpMxvKFTM7We7RhwvSvtJziHqTThUB2DF4hN3ht41uNmQxc2oxWEzLvJ8iwfFx3he4LMXzDuZetEi",
  "key28": "63RWeYeJvCAvmy8Q76nWxTeWLYwT1bsR7qNpwzWWLhHmxT1vTJ8hfUvVM2n7S4tgEWz3gsBdRGMFYFda37GR3Mz7",
  "key29": "3YTJfnts27nMaBQ7LfCSeijZndi1hz1UvNbgtkCqKXzZwPEdNCVSV4fUMHZv8JCvEq38nur3SSeM9UGiAJ8eqKje",
  "key30": "3x9Fomq6roUyTDzyG9i4282dJ3k78eiCj7rTsXVBGea2URz9thKRSYGZJXRwbaaup3az9bC3gnF4o7jxst2VbZ79",
  "key31": "2Ch16odZmW1PSPS6TfNXEg4rNXnKvtuCbvGGn6Q8GL47Fw6xMg34mtTg9CsrALLWQnSKi7LLtLKKp8cBwhkoJhVU",
  "key32": "2y6ThV5QNf72jjqc5xMTXV5G4kdn3hTsu7ysvtkXKKFX9rLCrtL2HMg7Nc11hAuCFU53nMbKXZdATqNQCKyAeSjK",
  "key33": "imyo8ersamcyRDZaWxGDkkTPV9RuLRiPdPm4Wf72M1gznKkeUAc4iwBr3RNw2oSuzeFonjpJoQUBc2FxPnGmrQD",
  "key34": "4aMyMugHYYKc7Rvy5wYjb3qEiL1sQ9Tfuyt68dFMgTHkFKhrJVVUcVq6SA9cTXw57K41CdUeB1HLe9bYTRmcwiRB",
  "key35": "3GauaTorgKK1u8ExLSCUQF1387D4jL8AainqaHJp6SgyuU4kykDoG6UD3RjFgM5Vcch82darYZ2V8gKbpKnmwVne",
  "key36": "62fLPohWcLc7SG3e1qtz8pJ3N8E9njSYhcRVdEoz7Up57ibH4GKhMp6shCQ9FYCv2sMrfbwWV2hJEvNeLWPQK6GD",
  "key37": "4VmYMjmmaTkAiRxmvY6YhyPLEffgL8LnWi2SHiNEFpu6bR5cmnZGKeVq3SgR7MfYmedAVC9bHRjmoMkEj7YbCmbY",
  "key38": "4hAnr78FJfyDsU3gdLWCivFp28iZJXkFn6cQztJuxDTQuzuvW1n9RW9erMTsmXNtthueUuS2E7zaGjh93cW7muaU",
  "key39": "3cjuygEim2daXW1qekNM2qtCN56mPLbzZLacREaytmBozdLiQoZZBfobf9E5jv24NKM18CUFqc8Mc4HuXytYmWBu",
  "key40": "5uAyD7U1jYH1rfWTr5dNQFEfpW22jC6Yj5S6VndHfwB8bt1pnEVC2cG68goavhE5r7qVbzMbDx51aabubqfTWGFn",
  "key41": "5mijkMiPii4mMaKv5MaD47Tcz8mvggx1AEzS5tqhZAVdhaGRfgFvvuQyWYDdCGU1973Fu2T7Jej7dQB8VHejN4C4"
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
