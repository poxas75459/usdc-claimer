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
    "64QNdUEkNCA9mUcgRpUVyEFHQg3dBNYad9UrzRnjq1qf4pYYaMdCSNuE4FmHoSv6Qs2xyrtnrgv2vhTk1JFRMLYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J9Mgr4X5m5sTPxrmXFtfdJpA9U9QGVMyobZGiRC1wo5RJgGuoEnP2QE7FPQXskd1nu7PEfLZ3C4ZTs8xJLpkP1V",
  "key1": "57idoa7XeYofqNoPeqpaE3gottKzTznoTGuT13iGxoHmjPAeKNv6GcGQpppaxgbNLtyXb4bhCANLxr7nQnNzedcV",
  "key2": "7AJQGifx1sKvrtg3qFfMZrJ6TmG2vn4nHMxySZxnBdb5x6CHemVkz1XY7g2UWzhnbihhZRwY6MVQURq1E4Hce2x",
  "key3": "5ZGsKPeuJycyiFLw9HM7L4y6jeijT972zyg83dkvVUzovVDqJJskZ7sw7TJLmPsiith9hHaNyRLHTpnfHBrR1cpy",
  "key4": "3xxUGoqjBQadwqHUo4ELMKFnxEpE7RbtzeJrT1RD4cZEwunPbMRXsaxE4ZqV2Y5bZK41FHZdEL4mhiDbSXVi1BQK",
  "key5": "WeSK8roxGA7gMiaQBz6j3xXkXdMP7EsF65qnTbDx9vo4stSRo9iBYNsYd54iiPPS5kiMbTadTscCZ4haqX8Ydri",
  "key6": "55zhUmzxkfiaGSK4pffJazrU2eWPbcLuCWhexDgqySE972RsyCFc2Mp18GVpjAnXf5eCk7Dnxm9AJW629RPXwqvW",
  "key7": "WBFDL3ADnpePZ4yjnUbdyUuP75mFTsn5XMXi4EDFRUgmmn13ekPmQKNvgCVdmiN8ik7gGrxTciXZpSyDiErjcCx",
  "key8": "EuEtZTVYtSEA4FghAP9kUpFk5HfwB5rTRwBqxHqoHpULRQREziHgAjXST1UMSWyxumWbxTLg5L9Ahaw23ZtQ2vd",
  "key9": "4xMxrShUkkTzfmxEwTviBrwCJjdBrNd2pjRbwbjW14H79AAUH6qe92Xw8gdveHXwaa2AGdbqs11CzmH4qyw28zSv",
  "key10": "4ZM77ARg6pK8DCUi9ZA5p3inxAwER4jwCjpAVdNiggtQDVi1dh25j5B6YvDnwZhjnC8AeSECXvrwNKWYYu49mDL8",
  "key11": "5UqBNJUmPkeEHipJ8oXkTYqYKw9ZrrdSAPN8fQfWxZDDLdt9BSkLTJ6B3o4DtE35xiu2baTK66kfA3mjzj9KYMhk",
  "key12": "8S2GFyPRM34HWqY3ra8fvJezYPMmchz9ANepkwZ3iGmnGzzA8a45wPrG2F1HDTAyUWUPj9gkcHqQA5zW91LgQV3",
  "key13": "2JomdCBk45nfSDEA9dcvRQCUanEfRDhWQHVvrPtCy4w2UJHPEZiog8NokBdj7vSAznkuYaeeGCTuajKXz3cpNfEj",
  "key14": "QHm9x3pzsGbEeRzEXnudZuPRhicn34c9jRzLHFVn3Xkgdhz8qd2twW7S5Qk1YQ75gTrJiVK3Qer37njntYrGKMy",
  "key15": "4HJpPf2aykqMTCXA4QQXAtGKE4qTVAWsyGKGuqp1a5seKhCH6ojSexbVQbgg2saJ3Zshfm8MbhnPQqeYd3zh5kGn",
  "key16": "3PyCh2oV184FVMdzuiu4rpAPdeKP734cfxgjoc55xdgw3RZ3S6hCRFCEp2MCNrxmneczhTWypXLMnLoxT8bZUTpG",
  "key17": "B8iejmXaFVxudXgFV83J59sUiWtX8tButHtnAV1bdPBgruJxaJuFc42ibiRq13HwcqWHHHNMULhV3h91Y7mJ8SZ",
  "key18": "4Hqu7DkJZ7W3zqvud9UzY2Aeq914iRdomjk7ta5NpPy2mYGQsaA86MAWV7PiznoDRzFU8ht7HZp5TRqczjmXsw92",
  "key19": "5d78kNs75LCgsLqgNNd8WXZsDy5QttDLGJjFa3hppjZt6emwca5dpzDHUu41JHuwHyzYSKzRtMJxde5FtfhFWSCu",
  "key20": "5YhjqDJzuo3pNBBevLNY2xZ8wAxPLnAtwAyWfdY8uVxeifXmqDNDuaHiXU61zMa9qE2BeGo3gvgJShRLpS3BtHiL",
  "key21": "4DqF1ZDyRsY9Jdh5WkX1NnMunZ1ggP7je9XeXN3KB5gigV6Ypb7PTFFdKR6oektvHKx5wN7eD2AgXPWbAQ1GF6GP",
  "key22": "3bxenqrFfiVtpebFQ1gSeBeB3WUcgiXbKZ8tdBKdF4CrWJyMCQGKRBdF2cGhwq5sV13WmVJKvKHQNn1rgBD6Dii4",
  "key23": "RLCsJ5DcrnjuDmtDGhx7pL5wq3PVV4JTBhD1UevpD4tzV7MUoGgcsGuSabHnWudm4mZ8hSW7c7SH2TE8BA538zL",
  "key24": "5jDFXg64tXC9XBRZAJwA1Y8ttTxjBP9RGmUN42THPZ3hRYVxETBWG4d8qmgc2TNg6LgoDuMrvCKToDaqP37thpGZ",
  "key25": "3hzuokcAkzpvdpD6nhHqsDTikmzBvfsZb1BNoFHwaYTTyJurk2x6UL391voWrcm2K9GDn21w1Mf3wSGc8MyS9Gy3",
  "key26": "51tooArMNBU5paPe4WtrZyvj5B76XK2WE7wgZywR23QeLYw2WvjYXd75S5afyShQnaweEKGjqUvuwPLwPjmC2z4j",
  "key27": "4N6q5KPjm2n74oAeRRtajTKKS2vGxr3crzjWV6doJrqnS5RP4UtuPjnT1rejVzn3ydtaVg3ans53RawntxXBmGHV",
  "key28": "2nBAnqWv4DFBaZZhiEjWZFY9qEKsxhUYLnDubp1f43uDNMxoyANDeAui1DYozRU8nC1gnAs9fCQzyau461dYkTRK",
  "key29": "JyXoYSWrtKVcgFeGxLTzgQhqpCYCQ4Qxed7BuzPFP415WtYTuwDG5hmFD6zcn6erUrhuaRHCvMy6t4TxSBppEqb",
  "key30": "25DG2JiZBL4jN7dqBsJQ4YjvzJKcxhC47Nhw3R6jqDQbggyAUamSYu37HPzeRZd2k9PiZMA3ve2gDXtcStE5jUF7",
  "key31": "4WUfPZM7gvTEWntFiUUwaMroDq8g8WtWg3xE2KXjKKtaRDnvj5GFo27jjSMhqdhzrW4V4zxVKyNSEafYhxBzdqxf",
  "key32": "3Sx1DfaAM2pcYWYFrEBkDm947d4hxWFv6ph4PJb9NnpNcaGwhbCg1qhUG16nhhnZ1gkML8MovFNrRkdeg8S57zd2",
  "key33": "2a8vwGPPuD9BavM5o7f56Z2vbGyveu5d652CS4Ve9YBPqbARmD9ZVbaMfkwLdVKbAtrkrTtvHepMgE3idUiMFr46",
  "key34": "5PUrwPbTehgYLk4yAa9oFtPaPHPZPABUp4tqG4gx9uNkExbk6ZmNXvknVZFnHLFU26xcmraYw1YoS45EaZ6e1vY5",
  "key35": "5JLA3JEmA5TD8e5MvNq6ppvbaD7PMA4cwHFLrSZMf31MsxSEXu5Pi9QMGH62M5sdYAaa9rU8LxNxnSqZDx8jKsej",
  "key36": "agHMZa2UHdyFHxb6gRws7cVyfPLFCsRgjmsnWjzknXdpYrXDw2X4q2sSJXfiZ84PmZLLCQi47CC11wfUJKFgtw5",
  "key37": "aMGUPB7NAZHbiBNfnvDjdbbjwpCHSA5ymeZRESJVqVEauhzYVqNs29yANPGcG3n93s27FgDdo6UWYASoUxgqWxZ",
  "key38": "5AZ7fCBMx6ebqLSgK4CvC2w5CJJDbnHLH4GU78c6kPFGS55w8q6ucKEsNE3i7pvu6JKv1NUggKvcUdH3AJv4LgpC",
  "key39": "3hn65iJzV6NFehScp7BweFvLtcTCQxLUFVt58VVV4EwmVhfq9o8gE8ooJf3LTtJh1ZZbjRbS39SNxv1wwo4LegK4",
  "key40": "PEnxeQLZaySHQ5P7Gxdha8EPJ11Df6tsqpbX9kBysRZqDY6LK8RNQpaWVVVPrMLDCqx8UtNTF9zwjv4PctvTq3a",
  "key41": "28bxXd7J6M6dW4jbEb6nAecxfnTYXBEVHte2BbhCdeoAmCCEeikXCbWaZo9qdvxnZEvaUb29spBMNdMu3sen1uHV"
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
