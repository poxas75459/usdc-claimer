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
    "3VDMFrxnTYZ2M9XodjsHy5CFKpXv4cjKr2rQdeU5eA97L9T2mYfrpsPoqVarP762FvGwFfWxRBueXyiCuUyt2RP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GZjwnbMrKpMBcm1W49P11mgNxsnmTGfzHYJTtwDjVMa3LZrMGpuE3hTGqjCLPwTtdoNL8j4hueu1cRdb31XZkcy",
  "key1": "5yYHnboT3VeJpChdCo44mPH3uEGa4WRB3wo7FtDNjBodHruXudaJDvR976xCdiLdTAkCTj7BMnZmup1iBbK5PbqT",
  "key2": "xjZ8fVnAsi1gVUZS4kXWvWWywdEqD32SLigsPbdP6npLkH7gcMGQw5E33m2awAZaE3uUxqsbU8aTRgBYiScqmkM",
  "key3": "X3pmxfFcT3xBeBsqZgAsxzHoi1pMChwoHKeGcGzAVP3iyuAZk1T6sgEFxoRTq3hzaU1hZTZukCb2y7d4LJSess8",
  "key4": "hqU7JffkvW7Pk8FApqxg8bPJq23nkAZ2q6Nmc3nHuy3p6X8io1SwmaYxoLS9kb77FBe4HJESZbgs79FbwamytdT",
  "key5": "4g8vJWX7aoyfGv824ZMhE7tgeMMCkcc2Ldb9j6KYfXKDmYBcxx7cfxUKsViTxwpNvGfWzuyPGCo9MruWDBcyg2Ka",
  "key6": "2C7K762pzwnKXH873LsBKWsGnpLkBzZGUAWeFdKGiRB8q9aPxKSSkdn3ZN4CPNfMKxRKxUf7dnWSCMbNhH7sSUkz",
  "key7": "59jHQJ16dDNJKBcWfh2C9cGXnHxkgSeAgcYqZjJzb3mabSdrSozt2AxsrcAUAyp5zaPZgwxE12JVU7P7RNih13M7",
  "key8": "rNBgv7aWvcNWffThHuXcvt2eYqyBC2U8KbT7DveLLsGedMcvHky4zqg2fCYwZbSggjS9kJtoW9FH2CwpPcPfgHs",
  "key9": "3NsBFVzyQukYyAPFsMnT2kmDm9W5EY13sQZqbDFSkX9FMBuwbwQ3vCdqxm8QWgEeUgauG4BRdUQ8HcZP9ZssJzcM",
  "key10": "5vD7RguNKaNtEgbjYfWydBcMWb4TQ8vAH3ZWuvGqZwFn1ckyXVV8Kck1jS7nLZxGUeDDzyYMGMaHwG8Y6BAms3H3",
  "key11": "2yARrqEYmxXKu7D9AYNHAStchh1ufoE9tB2C9WaEtj683s9JSZeyUzCk7gt2nbJimsQKo6nLxq8aaftK4Xzjb2Xn",
  "key12": "2wmyL59xSSjA1C6vMJYxxKsrBnBR2ccdv7e71pTyionBA7X4ADPrr3LDyAEv9wmUKRR5p8GwL1GBVHyswP75Anu6",
  "key13": "VsMoiyrMv7j3rJVT3yDZxm3mt5sRb5WuTJhzcVgDt1tATLvdYJFphkkrx63cxBkjCdnLayJ9Y2KKdZTdTkS9Udw",
  "key14": "2CPuGwFqxKu6gEHfk9Fquq7ByqorMZNUD1TnyUxQaP17aV3i991XKJxyvhT7iyqoeTuvBjT2vmLA9G9CQ4vTuF1x",
  "key15": "it5nTnBfk7uDu5vdQisYMZvLcCeaX4926qe7MbZUi4HzAuxosLK5nXSAWgK8M3VbQaNzTEqQ7h1atgZbjKDTjhb",
  "key16": "vfM81LL7vT5u5PCEh6L61KKkV8wT9aA1Z7L6yewdCPLohHMPk4JrewWwM5sBGqv2cWAL3RdTd7jcMGHPZJ1nPku",
  "key17": "53rgC9imPXgQwVrboNwmxULggswRGSPZqmGZgUbnnY1ZXZmR54kT8BtuGqnsPu456B72j96TVv5yJSUHkrxw4nxU",
  "key18": "5qm7TAAN5iwuf1D6baj9NrQMCP32HvdpyPDS5ehaQ4AqjfSkpooATC9CNckTMJWrsV3hRX9WJne9GHjeiLEQmqiF",
  "key19": "2smbSentJZyDLzUnZpKcQ93TAwNyVf3KaPcEH3sGDAKD1V2VgdBmcNaWCoJUdcmVh54GMzyLi1eRGecXTTMEuCKT",
  "key20": "2oRNdPMoQfNjnrwTZgHRCw7k7A253usDdzuSk9UhBWVTFJAvFkoic6dNLcXAxeQg9pQXcqAGiC56ZMfQzs1nXafH",
  "key21": "5vLeMwg25uGvkPfaj6wsfHqm3rTp7qHZWZjm2mXRTnmDQZEcFZRoJ7bg4SFbwiL1VqjcnRbR1BE3nUhMHiT5sH3y",
  "key22": "ZqSUSXVJCiYBqN4B8qxsJLiBnsZ3cxhoKRWpHHDeJ3EYzmFBZRFMY62gSnLv37LxBkHKBrgeqcRqe5Toyo2uBX9",
  "key23": "crxEfDxNn7SSSVzgZCeTwmyKqfLRez1G1Q2SABvVY2XZPVjzNY65UskcZCfgwKca5EfeKkSfghkPyRdcjf7kGd7",
  "key24": "4zLxeH5duY8egTiVFrb2qEQuhYZ254q1HViF4HuCSddH2KHyhRmM1MCWqPnvftFvBq5Xexp9rmwXU9nUn8unWLEn",
  "key25": "46icKukPQg2GzWzc2eAfzfPHLpAFshCqLg3takKKtcFoW8fiCG5nguyiigeXmexXbjad5QF83NjXJqwbpWccnD1c",
  "key26": "3HNhy46i54s2rsJLVYLcVgvMn2VtiKy2MMdPG8KsTDQJbqksou32SiCm1raEuMRdWQGgj4PFeNbP9ETSqas1HehZ",
  "key27": "5TXKbEmh6sCcCFg2GurpXPjFSBSZQDfHVmhtWpAR28RdXY7PLQWE3Z8xQ1QcDSgNdUfUSweadTc1ZJnCzvBHnBU7",
  "key28": "2JqJMxkxAmZasVNiN23f1r4RCAZvu6JfCur7vQD1B8856PyJeH2EznAsPo3UzDf9CjVGA5w4UDhdJeyb9R9sNGYV"
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
