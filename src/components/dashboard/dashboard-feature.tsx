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
    "3djKXgkuVatVDynge82U6pCDhD7rys4rssTuZffwm7YJtPBADPXBEBnddEYBJJEWnx4ouyXa1fBzTvHcYkW2aScu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a1L2XeepsFRsfNzCCjU8je6VUj8VaknoS4Fv71CsYaACmYTxF8nMs9KwNNpxxHbCkEqYYTJaJ6gKB6fTj8oJx4E",
  "key1": "2QAgAcmAwzNtJHvUdkrEivKUHRmaKU1apERBrwP9SuTkBMw7cQxj8QbwPq3T4DDsQ72GmxC6MdYaUZDAZ6dswv15",
  "key2": "5H1FFciZpNjvFEp77jBAV4wJ8oBCLhapp6FpgJBAmynZiTAEK38xvMcn4C3p4ntUtvypCwosWgyiSTuS4fn5SF4d",
  "key3": "2PTFatyBeAqMbhRrWaWVtseYNpMcxF8WWDWgWwa6STzLGz3ycyJwxi3VxZBG8ZgSxgD7p3NDNYSo9q7cpoMp7QpP",
  "key4": "5nmFFsLoY9SCwne2eg9bzatH2jFVyE9yZbNpsRAjt12z13HmRBy7yJT8sqL6j2wkoBwnngFgZShskgGWXaJaG4Mk",
  "key5": "45Le5UfoCF3hen71f1dq9avUnhunGqsj3ku8aCBuAceNjs75inPo6habMAHovbyqYZnzKKFrBK3ed5hw1hAQT1ZY",
  "key6": "2W6uVmPmYyAz8fLaFjZorg3u4BYJe5qt8p3kxiY2L8rykPJHQLPN5TohFUbZKtLaJxEjVYvBrJHCTaKYebpwXC9X",
  "key7": "4ShgxmcWmB8Npf6UQsKwSx75ytzsvftP5FL3JvSgZfAfB5G6wkez8rE3pJgP9ePBgUKZvL8LsQ3SqbEaVjbcjWia",
  "key8": "3YV84xhWNF78qtG6ysf28nQXWCKFrNRaScKcvXKpBfiCjeuuisKQwhBWMKeS7jP5KNx9XrxFHSaUuJqqKPyaA776",
  "key9": "hUKQ6XCNrAxNNCUuLBT3veQvdR2cSMKDvMaQjivi3nf7K14PaUHTA9ZdrTd2gDda9we2agdwT1gmBTiXwgmXTrj",
  "key10": "MHMr5wPDHtVJUDSkqnHbk8ZDEN2jBKYzEQT2X6XVTLg4Z3cvZSpoB7VEek85FVxami5x4cpvQ9FoxkUErerSjF2",
  "key11": "48PTo9BV11TR2aHXyMpUZaaUfxnGpyestkEs7qPVFPBGpDsxE1xqeW6wBHW4443xPW6DDnmR3jbn9GjtPFq9zd6u",
  "key12": "3WhtQyRXD9cCEj1Qvzcpj8rjrhTYrS9JNF2x2JLsUERc5t2RTjy74TPrNyPwH5hy3tsFcW4qwBZJSV95mDvFWnKh",
  "key13": "5b98f9FuErbzFEghtGzaYFdG2XAcVgMiFJnSFmFv69tdYK9TgUPXxVdc1ec5kUNF4Gi5XsvDaqJ2edujRbvDmFJu",
  "key14": "3F5nq7VLTSGiNwWk4konx5Z24QWMMFLAWQubsE8Xtww7W3rkudrdgFGZfADJTdWgmKDiDoWMXyC9e3CJ8cdHmiV8",
  "key15": "3HkB9uS8WYF9LernB4DLRJXdPtQkwuxpndrYLdP97KwiefH2YNZsN75ZPCKP5G3jWsXiKZrDe7sFFCVx4fDSghtr",
  "key16": "YeyQLj4dtEbab4QfszCU6gYaWGuDgfkLNqKPiwfuoPVYFxMYq1bnEuZk6iRZtWR6SW4ZEVvjQdd4FwwzYSUesgc",
  "key17": "52bLcJwZRmUZSaL962PPtKUPHHZKGDaCZPewo2Zhiw9oxhYSKvP3iDmkLyUXqwhHd3WV4JDCD26nx3Gmi2eUeL4U",
  "key18": "3Zaw9GuY8wqRStrp4Fa1ranFUK1X4yx3SojBFELPBHJCKR81jjGECZ7yyrMZv32hyYS4Z2qexA676JmwoC34P9RG",
  "key19": "sE8u7GUXCMAvau7Uy3h8ssrgEfBp4SxUD8dfwrr3nj6y6kGUFw53Nedq6wXuhS9tM7CtuaXLgBG5JfUySgXex7r",
  "key20": "2Ap3MDBtW8AYyipnKKxhU7655G7qb2URQivCwAdxaFe4aqW4bNLyZtTCZtaTYDVifXBU8z9k4FJH2Qd5pnurZzL2",
  "key21": "33qvwbKRdKdrzJx2CL7h2wMDRL5akBxVuDvqmn3pJMH42SSvV1nvStsXAcuLMZYRibWLBqpwtACpWNaaLjjixqm2",
  "key22": "2h6aXVby62PpLetBZFxsEPm4EdWwuDGBXvuWfPTgsVr2b3mbfhn7tuZk5H7EaCbr8ZtdGhufcx4kCW7QY3ZSxDDx",
  "key23": "5GNrZn1PFJK4VUmEFndR1oRVq5pumr9BC9gNBdDfwwg9Cfhj5PaF9GNVPgP1idMdsgivjSB5pj3SPr7MXGQCqqpR",
  "key24": "5SWAXLq8eye5VEdAebEgcyB3bwMm9Z9NVE66Ck9Xz2aRyJgYCAeRTEJpkgU1Gzd4RbZPkZucw4J5iUpYWfpGcJN8",
  "key25": "FtDqNd1fxpDuQWD92CjZSjmgpqAF58w317Ft2FzemLtcxsTM8CHezQ5pKA721BHUSHS2Q7zDA4u1t4qs7mau6AR",
  "key26": "smvXuwrbUT49NTFUQe4P2pGeaCAwFnte38mjKBHYkw4saz1n3CKA2nH1KWdEkfQ2SrjnEeykdwKgp9Tgd1NKg3H",
  "key27": "37ejcNaqJFF1zzx4cpFc8LnxcykW4khmr7BKRYkizez92BZiJLwQG41XUHwzSXDvQY7q1rERCGihRfAe5d5qRNSt",
  "key28": "2mFsqtWRRxRes1f2R9FhTFDzqnHvqZCSN83m9qiqz6nVzWcAGnBQDAK5g5ThQyQPBXpmwG7yqSBakx7uWpWEA6Tf"
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
