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
    "2yvLEYnNeaLN3EgzQXXWxMrvRVLBcPRiLZpR44LcBNfKbTZdwaLphyz9X6DtJ7grJLXvcMd5QTmatruhWtfzdJAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PqyS1AKnMeS4TBB4CMZpxjBSG8jCDcEg8bjsaMjwoYWwGPmBV4wz5WKrMdg3fQiqHdtQ3ywHpfKgY6t9hNtK3X7",
  "key1": "2NztC9q2ULXRNKDPgzkCF1xUqLtgoASTfRaDy5VE2EpK7dw6nkmsctuBbcLVSG26BRV5eEwDsbmB4QmjTC9n1igh",
  "key2": "PSFJeKak1zQijQKcSnF9BLtBbsXePgVuW2YHoFY17LpSJPjuE6iZcrR8cVHAeZJK8qrhtum1U92zKR2SGPMwz7T",
  "key3": "4FPCqs5y9rwnYCJsEbwm9mp1kUgcyM1W8VPRV6k7xKX7KRk6JJo4wbfcysEeU8PXKAToSCjdSqXGzEMPzHxrxuhT",
  "key4": "2WKUB8sCWCNncYy1MKhaR8xTXtgQhSKqERdMbPNKDh4A4jGCLdYtb2QuB9Wf28Rt7tmTuftPPpDSuN6nk5CLUA7b",
  "key5": "2eEeLUTmJ2RCFqRiHYYHzXyCyHRkPg9oHnKzTU1dsPGwrBWVcfs9nQRx8kFr2ofeXsULum2b9HutNipNMKPq4Pew",
  "key6": "5aoXmTQZTiG8GWXfQ6wcBnShcWQon9xfThQoNCAEqmjTgXZWhtDiwv84KjbaTpqwFDUTBrVbqjDemQTqr2BFz35M",
  "key7": "3JLEQ2P2zmeUDLKxdGqQcYBsRxEoburroZzBj6hvkGUz4SQMpoiwdU536Wkh3eQtQmKdMkVcHRSPMEPyhce4eANg",
  "key8": "3HQZ6kjxJHd5TzxCn88j1y499tMTLqbZsXf7sbZDtUXpCigH8UcaATnmRqVQ9mC6xkVGhLLsyKwedCqd35uuCrxL",
  "key9": "5gd4pANzGNhD5LvNPr9oN5GkVtAPLHES8zKfHFqBYmbk8A641xaWu1bYKKHuKyVFnRjvAEErX8L23E3s9NTbGyZe",
  "key10": "4QEwfrwCwkWxwkaLZYHoJT4To4FU3AwS9Am8CBCGf7HiFosP5VhjaCaaeFM1HJ1RPEkF3PncyosghE8yDJ4vASyF",
  "key11": "DUX8LiFQQsP9zBoMH3vTFJqaq7Ebu5h5dfVJP5htF6dUqCxB8TFPNZJ2YovtvzCEMHupW1P6ATys1drwW8gjDXn",
  "key12": "3sBGhssLWh26V562xY15FLaTpNNXnek3d7fh9rGFdQhwmMuMwAdjDYC7Y5kDSE3Q5w2S32SWCxgqc7SrsBKwzWvQ",
  "key13": "3ynQYdmrofjazMPbURAeL3kzr8u9aLVTN9yf7J9zik3dmjALrsz5oht6xwC7LtyDtNoM1PeufuFhkPHDbfyvhfRg",
  "key14": "3cY5PG4NRiiic6Kn5Cd2zx51ERwMVB11FDHs35PJnpxF17tyPkK2B7VmS61EAe2E39GLDVUc64t2c1CJEdqGJksE",
  "key15": "3bC4KJHnYnnpCbvmTmcw8mCnnUk3ZSuvaiArgEvChNE9NtVDkpUiPMxvS7YnouPEziasTLDBnrYxq2NjowJFYPoh",
  "key16": "3y9KNYvjsPXJf39xNF8Np8stxwYBNrENtcRQoYb9D6Lo8yB48BnHiovp8nF6XCt9GdKyR3dgrut79hxUVVAwyBXY",
  "key17": "3LySLcerQsDuKDqJBknLpZPEEpZQ7rmDxr7ixyXMamGurvQddGmoaq7opi6X5tjWRFmTVdtQEGCFAjdBwpR2Tfaf",
  "key18": "3Nr162EwKrLsR7Um65vVodKYY9hkiPRvcbZr3TVecdcevFvKnsFmS9JYSV5tRqok4H5wZFckHZrTXH3LJx8V19tb",
  "key19": "2xVEhDwuYGUxyPKudD8CZ73T9q9HkegBefy8mQPvHrXv6pknXGUqkA9f1nRE8L6RKaj1BBnisLKfc9kCKH1zxWfg",
  "key20": "2AMrJNkuxcQp9r3iJxuoJ9yGovg63zeK9UoYguV1uPBFuiuzj4bKeGZk9qazHmCXfGbPknoSSxyBw9mzKJvsFS8Y",
  "key21": "2phjfvQnUVmWu5gJEAfpD7jbq4xJqt2ecuGYW3K4MaEEGwmnUWZQ6JwdkMwNEAQ4LL2VNZRF8tUEzEBb8kyCturP",
  "key22": "5X5GWQf3RLeAzTcDxHFAxifSAH5asnrcQh19fCXAjmeWvKeDwoo2JrZqi1UPUvJbCE92co1yHmmz8fW5vBjKXnXp",
  "key23": "GRgEYkZY3w944MFfWTWCUqwJpCohKnhiobGqtwh73knXdfeszdK5ykQSmmpMRfUA8dce8pNhtExPSQxdW3D3BYc",
  "key24": "3284ZtyeusT2QBHTL8vR6myhjJHGn2jNxj2bRn7ua2FLwZbNQAHDqVHsHfLsWr7BQuwAvhynErfDFLUgzzpKxyU8",
  "key25": "4DXqvTQE41XWCQnE9nkuLdFXmRg77kVi9iybxiKTLrLMHUpek6nyvVwv6LJ6YNjNmxZTLuvb3XJEDYGotA5nHCcG",
  "key26": "JXsK74X9e2qYr7NscVsktoic3gEeMPKaW5aB4nk2N97MxTJfgnS2KttZnLBfuihtGtB76W8TSUhjsgQA8ywp8zm",
  "key27": "e9Zug6Hxwa7C3wuyGhTvG648ACYTGhmVy7pEoxZkXSQyjYS5ePLiRLR9MKPTbHa9yyz64Mt7iPL5XqZFxk16CNe",
  "key28": "58u2ZfKtvf73rX3UQaTAvUPwdsu1fK8rvBgEkyBvTLzRWuiyroa1tFZR6uq3pkkKfXhJ1aNRjgiG4E3vuyHfTCsG",
  "key29": "4m5AvBucys3gGequ5KPkbGq79FHmMsCnN1wkQS1hMRbW3CezDMAmWV4RV8shE8YYNvj9NUYuv75GR5g5DBr3qYz6",
  "key30": "5catMGZDccLV9Qusa2dnPeEuVwzVHRzNhXVBZ3a2bkvKtfSFaMt7JDvuvU2v4cDsRUFPaMaonZ6kEMSYJEyJ1QSf",
  "key31": "2vrJsznJcV7J9C9jCCZh6JapbeWjffrUKJ7T86S7VJNshm9izkYMGMgrFwf6iaFidRSeHU8Q2kiGMFQcpEsTYuuH",
  "key32": "5bhHd91CGSyB5aAUE4tAiDdssN1ghx52B5SphRkJgxPLXbHURVZjscMPJZby63gU62gMiaooWbABWxwNz2PhZT1v",
  "key33": "g7FN74hYCWt4P7QY7jgNrTvyiJnTDg5ncQGyWZi7BPuCPpF3ETiWNUg7V7GRS411oFx5CPTbihSVbs2PB2xWzsW",
  "key34": "5HWuzwVJ85u3gYKbDqp2PhwUQNLVxgH2SVRGWcVbnsfwfADh8MFEGLVHe6KcTXToGgtXES5jgnDVtiUKa5si8oNj",
  "key35": "4qHkDc7mmoy5nCL79eU6txnn9EUG567uQ96pnMzhuHch2Td5GfdyK9PQKDmAqgjQUZVtPsxiVVzcZ4MMcmSmKb1E",
  "key36": "5q1xNh4i4UPXHZMyADTAUa1Ts7im1d1VFWt14HCC25R4b6AjAdzRLB2MTvGdJmwxRrpS4W5jwpGEEeGAPXHZ6sxA",
  "key37": "3ovYn6Lx4v6B8kf7EugtZSfizRKWmdMC2qCCFZwnKoQZQPJkvsMKGmE2rjipMs5s2nuKbPuu5JZ2AtAhXdPRbxi9",
  "key38": "3GXPzLTU8P4Qun25JibFyTJotT3CDiv7Qpjzte8sVYd58c9vPdhj7JiXzUsHJwPg739yydwRQmA7u4dggocuADpC",
  "key39": "Pd33hNGTTd58Ymqg83FYMvkcEyWTHXjiLAQz4cJ8BAoCBtzWDV39urCr6FuvSoh7xMTN54PDmwVW5HJqbjjWhnS",
  "key40": "5HJtXzaDq1bxFwbJ9MNQsCEB1nXhVSJsC9aq4is7LQyJYZdUJw5Bkc5Mbd3P9gj5xBmVTFUKs2hJfpj4BBBQ387W"
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
