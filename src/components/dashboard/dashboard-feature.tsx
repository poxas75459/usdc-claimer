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
    "5roJApNDgiN64swxD1pG8nU9zFCPkGsKRU87WW8bhWsJnvjANDheMATAVQXk6wCeHULyDKfwtc26Nq8xCTmKkhCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KmzaXZhxEDFbD4uPkorAjb9CBCBARDDhs1u9jsJusGnP5B9PrXLVdNfXyX3nxyaqT9BTWRdMKf2MRoimw6YHaYj",
  "key1": "4LzCtWy49j7oY13afeuYP1MnLz9mMfHjCPTzMGjcAdcCEE5TSB8Pcp8g43zyKmLwwDnT5RbV7UwPfZxFKz6KWwox",
  "key2": "RYV7PjRagJmq1vCQ9Ma2t6mpYHEiEcGcaToiYLBRPb1BFmfWnUn8xUtWi4Pt1brd1bPKySKxxqV84DCvxfmbimG",
  "key3": "2R6mfebbiU2PhwEBjgusREzvkDmAsHgTq1CCw95faPt8s7yYC3tw97qVb57nPUBzWbhMpvh1qkVBFtk7eWdcYpZr",
  "key4": "J5qqGkpX6ZwyfygTyDoADhCxaWjwsbzwNRpNV9ibXo8iSNkuejg6xYA4GeLNwoBqHJVyzqzfMqTVptEVKDpbtPY",
  "key5": "3xkXB3W46evd7UMX5Btrbq6rZ8KhMbm4bxinEjMfC8t1d2fuepvANXvj79J6uBohjAwpAVM5ycwztCmQGffvuz9o",
  "key6": "5eL3jQvWwUMDmSBwwWyL8VJDEjDtBC1Sm5d6kdjy65LKQB5bSQfKAhefJLG8WwspCXwwRKiwBHjvL79F65m8mSD",
  "key7": "3Ly89WbEUyQYdzWNH5hk1A1JYFkK45cuUxjjva8NHGxsFbqHgh7S43oY66sFWeCUgdLEhAPYiy9qaYCbnwoh8VSx",
  "key8": "2RUZzkhnyNqMWDERF7S1VeBsmGZPDLnQQpnpkVqHVUe5pgP7BaUdpmdcgvbUqwz9f3Pkop6PPmHWvoQQfjjNqG8",
  "key9": "4BwYVrvvLLnsaFEXH2GcbRYgpCXXem1TrdiPfWWhcrY91n7o34ZMaNVuHTbveXjsEnEdczx49MwyRdAZ7aY23Rgs",
  "key10": "2kVfyPhytXaoMndKH3VZPKKmXjNFcP4tqSzG38zudNhx8dWJqRDobMAzC8gg7HszPmGDrsLdanPkXHFyL4z1bU8Y",
  "key11": "42eoRATgsaKpkiD96WvRNqwPiiUzFtH9ZERfKyEf4pESUpcrv6YLXczNBgHUmKKU9Xnmz2GCnt1mPU6bLQ2T5CK7",
  "key12": "ycDjuVMmDns2cvBcyqPnWwLcFuC5kGP9V7TKZQmDXm7ryFhtvpEzbHYRpFBREtfA8faqWSFgaBThc1iHnCvC7JK",
  "key13": "4HpDT2NVP3R5V5zLD9pqsLzpe8k3yhNLcF26c1RTs3qUZaYUgqiaFNnpud9MWFvRxYT8WXt8F98dMh7hepCRcAk4",
  "key14": "2HG7GLxj5mKAZuWfVeWTuGa7nD5KsFyxpmdJ44JY848Ghq19KrswxHbHPMCQuukpj32fMGfwpSnM9fNymYXckSZP",
  "key15": "3HXVwTJ3wML44mPGjo1JCAidVzjiSBtjTsg2LpbHnWehYT7A4oMSNqanS7WWC1hooaR6cr3U8pi3WS6vo7QYLGQP",
  "key16": "59fmJR76AKrijbCdiGdg9L4ecejmWd6BnkPGZehMG1Zjnx7L5JaGwSurLRsDmszvrqZqZmzKu3MuETsMJRpQTYoC",
  "key17": "5FjuNULSB366zkxftGWpNA2gaawi68GX4HZV811iZqVAvStGZFTXYc89NWN36zersvAZwJwMNqq1DpMVmwVJgkZR",
  "key18": "4EexphU7VGcQ4jZcjyNRPzrpTRPJoRp4dGuseo2TxtCmBsQTRrJvPRaUN3RNJqpfyXodaudiwAwtmeZvhSuhhH6D",
  "key19": "2oAkjdH8Z944becapF5wdaMdhpmxSNPyo4iouMCsXPYq1UtWdASCUWZGwtPd5V7h2YmrvHcLbtdBTHxccyeVhbd2",
  "key20": "Qt7cEeY7tbjcZ8Lz8B9yUmURnojSrUKZHjEiSLsXcd2skfUGWcvxV1UCctuLaENKwyS3Xpv92TaER7JjCmS8KTS",
  "key21": "5enSb8wG3Kx4Kge1MXr6c96Cgt2k24CjYcjYKyzn85tZ9XhzbPjpRyEPB6ZpSF2cLH5JegsjWhfxFgdBxTjpUxts",
  "key22": "4tf1LJjHUAoHyRr58DCoHoUD873WR5W1zeqyqvovEHVP1Ey5Nzf7Mm6CvJTFNVK8vMV8ybZm8BAq8JjyXQJA6H9f",
  "key23": "5TJsPowbfKPxyNP2ExK4LCwXVWn6QXT4vroNbR2ox8XnMdgZfNKUGFYDiBYwmSmqV9dPJ5JrY6NsogjGXThVKGFY",
  "key24": "33SV8SHYKSLj76av6NryV7x66QEAkV655dKHm4uhsrMBaR7uPbKwgNNRcoSK971WhKGRL85wg33nqWtP9Qmgsje2",
  "key25": "4VPmPomwJ1TJdc2oavAQtxQPK6SzecRmhjWK6ikuEywE82XTxLmCbzc7aH5Loux9uNfSpMsCUGX6YWPfuPzABdWZ",
  "key26": "2CLATVRgaM9cWZ6YQ29bigxJnX2SDAjZAy7taELR9VHCeXTA5EeNNPUd54kKEqXmAP2QiSqa6Cd6Sf9ChsnmrpQ4",
  "key27": "3iz5poyYL8QeBjTVEWQe138j8Hu6Emar6WNP46YqnZ3dCMVeQFW4o6TLup3djUvRgRiad3go36AjcLD456RRnzR3",
  "key28": "2hYcpry3kemgYfbreGJx5KVFXbEbpuC95zwkMaPBMYEJLkZwRjNNvVe2iyPocuWL4EnbDbLm6uAcbZF64reeHPPT",
  "key29": "33gL2pgRMcsAg1ykmD8dDeK4NxXg3VqJmiz2UGBbsQJKv88Gjb7NgMqVGjiBc1zGVCvDTPuKCUqutkcNbfT4tZFY",
  "key30": "2Ew43SLnC3x1bk3jNiZqZ436sgcZvQokvpjtW3NZkY4nuXBj2P3SbVi6yWAX3tHhw7EAWDBuNvjyso5Qe8sYRKq7",
  "key31": "5SspAFepAHBecDBboQufDJputpdyHXbgqEsNkJj55UQxhqbWu5iQZxr6hDhUXESkiSrjndrUoN4vwv4DjkkjLghP",
  "key32": "32ScHf9jwqqmw32BWrSbRmSCPv9mchsbnNvrfrSTp1b4TBFHnJaxzFRuxFuBWguEDFJe2P5BJ2PMs14FD1sHPyRY",
  "key33": "PMgdPFF3fN9RNtH5whtiUWAFVaKrHA4N8X2yXSHos8rurdiGe4wg6PXtAiAMsov2h76R8TZwGmyLKvkczHoBAmn",
  "key34": "2fbFDbPz7mfMZsZoP9spf2X98z9cJuZrqZggRqZocftCWJFh7J1V8sumP7ZdTDQktEgt64VFb6u1HUBNRr2aJBpa",
  "key35": "5zSEsnpxvdGfCaDumks7WXbXuepkAX6gZ9uzTk6XKJeZQxkRJSErr18bnuTKv5hWRPuksDCq1GQw9HoS9ZqEA4iM",
  "key36": "3rbrVct9Z3zjz15RDK9YmXmUep6rHTkVL3fV5UFbCBB1NG2PbrPabY2uyoHSU9ZVxCGW9Rg2KsttzQMspupmwpt9",
  "key37": "XAGErKpJXCR6FJe1ZpYVMgNaqYr5Gt8eM2T5pACCReQjSVZjZUnjSzUoPizqn9BG577LdFixyFV8AFmuN96rKeX",
  "key38": "4t1JxB66PstEWJt9zWWbz82KXXmfVRbZR46VB8fgxhqCtfvJZYhydhoZkzf1jNwfszq4ToF82HYszQzS9ewgSsM2",
  "key39": "3JUHSNkdDzZ4Gbv9scNdiwQJVhjPfcji7xcEQZFKkjnAENZWogHCykdw4AxxD6FhWUJiX1mSkKr7M4uSnuHLtTxt",
  "key40": "48AUmGcSudAiBwGm5D1r7TsA9EE9zdKxcaQ66C7UT3hwW8EsuhRorkB11b5g2pKp9Ype6CrzPeAFuGiyYrGyi5fE",
  "key41": "4jR3ASBjYLvM2udQaZiZbFG8ugpsRzfnoY8qjJDhA4ydvNRmxZhFJkhmKq7PLzBeM9QuDK252t7JKM38MjY99op2",
  "key42": "taL9n8v4qVuq52zZNyKX7CVoUaHXDYkx377QuwmaHSfmRZo47LBxpFjkqDBZThKbc5VZnRfMnT3TkwoNjH51XwN",
  "key43": "3DVZwV7sg59fgZf73vVqZhQhxx2SzB1TuiRChgmqbB6sc7pNiNenjUnwkCfDLz7EkvgnoRbfHUpoQsiKi1tLa7hN",
  "key44": "5mYrz9FgFQNnd16dM1KX89XpNDY8Vv1LGbgnDfd33XM9VNxx9cC3QioyPPeTcc78ErEEt93D9RT4N8bykB56nEQ2",
  "key45": "2hXVaT6cqUYRccngYmEe6rkXbe9APhiJBWVFuWTi3yZbevWnazaoaceZrBa1k7hoM4DUUfD7dN5MSkDmSXVn9ry5",
  "key46": "2sveXjfuRPEVw7pg5gAxXmgRPtkP3ecaUuiELv3vmBdbd7SsPPzyycuknJM3DQz9rJh1JEBGFoisGdqaBzgksHdM",
  "key47": "61g3fsCcQwwyrp4juLpTRBvPEUYR5GGnwpRgX12V8bWHA1QcuafhFfpCRDurBZZPoKeUnH1z7Szoz31TNjXh6JAU",
  "key48": "3uJyD1gYttnw13XqK3eWYUJjYDPFGvaAKpUoacoJPBWP5WX7he8PmAg493Jn5pHD2sKJ9pmgXSYTi964knZmUBLW"
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
