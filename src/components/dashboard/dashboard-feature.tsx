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
    "2RiYHZKzJ7LcZjVa1q1GbEmD9RefXpukAw69T3VeQjx9Co2GRqnjDSfu1hUiRoFvwnQUEZLbwzXRhmFJNJHRhwKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Aa1qXam1tc8K1xeGgHydqrRcBaZd5ojUuGW7WpNbUGqE3HYiR7psDfLVuyNZpaufzH2eEEMBCA57vxePMjxAfdW",
  "key1": "3opGoNUp9mW2zw2zJfUk3CP8fzRoY5UDPzP79UHYbB1pSXeLfNQtkvzcYAkepibWKME3AAwGeGrqD3RwC5bVDaWZ",
  "key2": "3JUj4GzrQx5Pp6JV9qzBkcom8nNLbA4RJmD7BfXp87LyiEHTZaGQH1R6NmZSkamjnuBcPwxwsuL2itMpiRdMJQUQ",
  "key3": "46bcxwWSmdwxti8ynMvjArMbs9HnYt6biwDa5XD2T2iUUT4GW5su14A87ZaRYQmCQMmyPeoqxvqos2Rz55463zes",
  "key4": "5V3FS3pz2GUTzHRjPsZWJrXDdEX7UbFkzpjVRzDEsnY9rG4rRJEUCQ2j6EN4yePUFuuVGD4eGFkFpAZUA73vTM2Y",
  "key5": "2qTu96jBRxexagua18uVeaeznzoEvioSrKYNWRK8tcsyK1P48y9z4umdSof91mihrtNuiVFnVjCUwPUiYY5gr8Mh",
  "key6": "2uYzA6t7s1yr9xbwL73tGekYswvaQiMx8aPSiLUYi9MFqbLdnb9LkUAojdpCXpWwDVJkVibRjXCV6uoUkdnvBxja",
  "key7": "Wwz2PUpmzuKhXLFBrqJWmiNJg1HgrPzotjA2jXPQLiz3Q4CwKkxfXJyxsKDiTJwkShFyHKHa7yjzrcUWcXZePuP",
  "key8": "3dmYR7516ujMzpHG7nWy2tmNPYNdrpY5Hx86FiaGW1CSaaCbfcrfqG82PN3xFKivYWPbk7Spx1L3GBfPhhQhR1FL",
  "key9": "3v9YRpoiAjXpZsjT9cWuS7TWPgDJypT2gwZdjUY5Nn49ghPVB6xUHac8bU43XoDmHL9pdWyhQ2dsoR32Rq641gF6",
  "key10": "3LXKEYRuL1q3FotcwRAyvmzyyN2L9CRs4j7B4GERdqrQZBQKSxmgNu9LGrc8fyXneyTi8RY9VXvtcYmWNyav8ZrH",
  "key11": "3sLGdMca9LvHSj5qaMrr4oWg169bkPSuGho1HAp5xiVkxqbmvXLFpNegPLVM8AgMkx6as5EezogE1SRyi33y8W5a",
  "key12": "42qKsGs8kEXE5cXncb2xpZ6Sy1xh9x2Qo2JwAg5A8gHTdEEaRZjKcPNockioBWywZBq4MicKocrX4cHMpejre5pG",
  "key13": "5LA35AFyeeJHncPeYDaxdDWckQnaUPmqcn9zy1VyJh4quA66mYK2K2orb4cFACBdF3owne8Yz2Hvct6qM3d8PfJg",
  "key14": "3jV6jjheAJGd4RwLKcUKXPYZdSk9NAeTpk6XhiLMFTsnuDcH41Uenfi2gD8EbTJdchLk8TEN4r9QXeDy3QQe3b8Q",
  "key15": "5Qkxw2pC2BY9uGj4JicmzdgAf13smJKqAf9uxSuLPBLNULPbM5rvx5kvRHkvRawN3H4AHGaPMvbHYeQjJ9Lqttfc",
  "key16": "4SXPZuG2eK4WjE6zBPN5bGtioxBGdfoVGnB2cRJFR7LhVrGeWydg7PCsKUmK9VVjjFo8NKgbUqjH426z2ve2USj7",
  "key17": "5GQo6G2Qoioda5u8fE4bSwkXwip1ZuVCbgMj69jMZHygrGSkj3H3wDC8z3Vjr4fvtE9Zvks8P2aonujGgFkua19q",
  "key18": "2s3EzqAEPPPPYASuKRtrzmVhDeihkAdsoC2PadKMvy99mMrgnmErHy7fBr9dLQTtXs6qoh6dAbUojPBUHvNJsmMs",
  "key19": "GatZeRPREMfAkg8uogqcCekzUPP7GcpoE63ruBMnyPnBKsfsboixVZAqsL9A2cMTQ5fEhkGqdAaZXEwED4Va32Y",
  "key20": "3cPnatJxm8sv6N8MGEoXWoVMv83BDxRhh28LTTrDVTjv8W6zLGW3YN2xJPPCuSds3rRkjcm23nKHT5pjobhsKpVD",
  "key21": "pJFdSsiyd9R92DR9HUMD2QyV3mjzUB64NZXBDW9SZXEauHRwEBGDrKwWJnpFUtCPYNfh5mYGkpkQQ5VYFrFriCM",
  "key22": "uE2SihawQBExB8kTKpxMmWE6R9MbqgkKSNnuay3LSfRk8LV8ndXqoRyqa4ENrqe4Pk2BPePXfqRN3xqyrxhSu5r",
  "key23": "45JviHtFu2hvXqmQKHyG1jykxCJY3PkWCnANEPjBUBABBCHKtEWeoFyzAEyCfUfmRGaQB3hyPb25S6boHfoCxE9J",
  "key24": "4QBuwQz8pMPfhTzpNa37V6SwF3TXUX3jMxMNw1SAGPyWL6gTYkryWbcMGJVYqUksKGx1vXjkXMQBSSTaDaxUREwr",
  "key25": "5vTEKSHVQu7BUuFWZ4BY7JWKsmQ3Skrh3Y3eXcDoxQpDcHQAUeu5bFd86pTD5RJTP9ZkfKfJLW4ttCPJqwAD19JZ"
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
