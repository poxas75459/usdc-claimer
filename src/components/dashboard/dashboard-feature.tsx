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
    "4sMxtVhjviSRrYxWRwMWJdP7xHpEKeshfcV19EYeucubCfwU7fvBRagZAkTudMsctXoMaCqC7SsQ4LtxbZXQagtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jhpFfPDLuV3x9RrbSh19qRsDHKkv2oWaLpq9PuD6qZB2QfzjQZUsbvZGVMZVkq6b3jLHKXUdnzbUww6iGXhqy7b",
  "key1": "587ACy6ZaDxyLGEUETgWtZix7Nm6yZVieNqewTgzgGt7q9P5YhKsaC4ZNLU1iEKrxoS47i2DknRy8JSm78mLRFbH",
  "key2": "2KhGQani9s7mf1tBEDhHr8KkxpUK5uyozYApav3B8KwHtDGVzrmeTDumnfN7GXsRZYMrhk9VDyHQS8YZtsVdY5T8",
  "key3": "5jiRZiFiNDkmWJZwCTAnzDxNBhVSuyPxdbwcmWbbYTNiR3RM6XxATynXq7ZdX6qdzBX1xb6Wa9NaewPLwvKsWQQ2",
  "key4": "3digj1ZV6ZWXgpMn2xqN7MjZP9on9zSwePkUsb8611oum2RdhtaPNRktXHBdBGJVmxkUsmN5ESs6f46ELLSUBMw1",
  "key5": "2jZjorXcWE4kyW4pf5PUzYAcYJzgu7h1RPhigS6VdLnU3hrvw8u7rcsygE4joHSD8QyFQZVCZQFvZH51JzrFePRo",
  "key6": "3NepnU6DST8zcePU1yvPdAz3EnMkJLFQEsbtApGiBHwjdTxZDLSosoARu7Mfjw78WR6maUUZZAZWQ6ogHVUP89L2",
  "key7": "64YP1A51bNC3bkouqhRzpp8fSLxVEK1wYzkiLX7bhRB1iikLLkmCeVsmyxTYvNqMcq1FU3XJHGYdqPMq16QNhWHo",
  "key8": "4Vfa3TaEZonZf34RXwFWaghws7VTq8t3r2fZ72Mih1us7hpW4otVvFCchNa2S5DqHMFJCQmMpo52r7B93UQny7V5",
  "key9": "3wRyLXrFfYTyCu6SkznVYMUTnE1UFAHScpyTUUsbECFoxsNB5SZsj3TnTxDcT22ZqoVX4qFuX4VP8Vf5yRZsPf6J",
  "key10": "4CCTUcKamVkcf6VRxRhjL77Tm2CgJMKvyAzuXN3KLPvQKmRAU3woGEci6JT9nSJYADJhdgBWxyXS6Gh3Y6LqWnum",
  "key11": "3QYb7r2ymqJGcdDmZLBoeLZRv2yF8w6i8p1WveyNV3Nm3MfGY1mF5cPQhmUeUQQTDspEcp9LoiZtpcZo1J3oUbFj",
  "key12": "28oZfdCnsnwjehwngvrnjNkvVNXe7NYBpxd7WdxBNSwWTVQ18n6KUjykGhTRztomWLaLEuyMmTZSoyQ44ww6VyQD",
  "key13": "egFLZmZqZM52mNbEJ1DMmQazEHHq9u4X9KWtLmsKNAwCXw8AKWJgkQ6QHndaygcaQH7nXvDJ6cXAWJcGPr2PXPA",
  "key14": "4QhzLf4esb6rKH9CatWT6KZnM1eFk2E9y47UrmDunr81bWzRThz6RZJLeSURafbVdoDv6UgvX8tHHJ6RBSkhW7wo",
  "key15": "2xD8wJBDxKNma2EmkJJYn2ZR4V8b9Usdtm4UFmM5T5B7kmpGH2akidcAEzat4qGokj1XVrhhLKVxxeHh95JPJFw5",
  "key16": "eFPjKAqgvRR8vronjQocpGNmJ24BkdMQC2pYF4cSnWob1EXu9Xg4xxbRym8rN4eDVa1e5h5geF8hKaeqkjZ1XQ2",
  "key17": "44VzftwPHyohSuYoxjaYBTg8TxhyKbKJgy6i8CsemWeUmAJiJcSibgFDHWNY5JXS74V35kk3osSa7Jy7QuvA4zQw",
  "key18": "2FjJhb4rW4sRr8bpteH9keJbtmJrQ2pnqYvCLWfrzNVTwoqcKAonCzSnNEnM7nRw7Udr9r4uqDromrgUiyDesbDQ",
  "key19": "5LMWPMDMRvWyERxN8zNNJyN4n332BncFsAvr96JxDdWcSTnxxEFKNZu52MZbSRyRSW8oxeC6K8hE19ZJdSLtBvUo",
  "key20": "5LPWnH1ET6a3puW84Qamemh3EhZLM8n4HWNDVecdGTdU5cZaurvbffxGRxwDHqBKggx9tYiK5q98AmGK6KGX3KRe",
  "key21": "26cbj9rzPF5qKuRt3xkNL9nizqxwUiYZyBW1Y85WsWu475FxedGNDG8byzZXfCPEfA437Ag7jyChngiAw8BjButc",
  "key22": "PJcbegQsCGgVKGrUvxy7w3jitQt84idD4PXCexSAPcwecTBWqsSz3LPMGFz5d8ED6ANshre9htcz3Wwhc6pDmde",
  "key23": "45CjNLjfEfekR1virKJ1yQrVNiuRiLouzubcREbyJoGBHVP73TD6GYqjsruGrhv1BeopKifeHzbxqhR5Br32b6NN",
  "key24": "2CgkW8nvd3omHhNKHviGkKoQaKtofAVkHYsiwoWR9BGEEn9XZibWAKnakA3jWek7wNNgQJ33hcZvCsVwXawNMe4S",
  "key25": "5QHRptjBjST22QnQWrA2X1J9UEDhMLhy5bp2GHJnGGXdaquxrCtoSBNvzv1fhSzK1aJ7WB9jEGDu3CvL7QzKsXWp",
  "key26": "2waTkuRhaVjYebu7qXsFuM6dXvWKLRnRZxVJ4Fjo9RRfThDAMEcYCJ7fWPi6KdNJKqRd4hm8MXEes2YA2LqsZuvx",
  "key27": "4inbmeEXVkEqkPdXv5VNbNFB6D8fihbhfDfpt5ruWLMfwxwqFvV3Cs2s1GeKYWfndKSwptAwcPh9cUmCrwv9NT4V",
  "key28": "4KggNDKA4R2YbJoSsr7iwahsdscxyCR3Mckezfy6WjB7KHCxMob8TzvjNe4F7aTjntDTrevu7GVQFqBvw9XjQC9H",
  "key29": "5RQMLZJx8Zsi7yeVDRmjgYWBN1RzgwPsif17jZHoLRzrz9oYj2F3rWF1ifqyNGaGfV6gztsdDXbABTaY4NnVJGte",
  "key30": "3dqig39Ltf8nhqfkptbSxEnZQFpSuzr2GgB2HBKyM1jjmME89Wo1vLyfMxG5qbTLiBCV3yo7KeJgbTjkAtjLbvgF",
  "key31": "5U84p6grmufLu1LTFFnF4u9RQWXP5UkAtgUvAEP3WHZyfuQHQMEmwUfQYqKNfTJXEXvwkJ4fxH6Eb6apMPffQRS9",
  "key32": "2KiH5nGoKqF8qZ1wdY4vYfjKDA13bY2Tmqomfv5oxAnq2pUUvM3QUwFyNjbRWHQubvuy3pARnXRUQPMe8TVJ2Mrp",
  "key33": "3cFyDYRHHM3q6dgVnre63b8bbg3PA7LQCzez3Cjdv6jt8M5espHGFBwxsfYNPVcK18jD7n8j7EWSYPvVvNrEtGvv",
  "key34": "5HBUHbtJy7UVQYCwsqAYDU7yPBKrvde5kA1VSYUr863a1xDXranLEdA6U1k477isht53HCSMGRuiQ2JAV4pDxyYo",
  "key35": "5c3eUBn7fLY2ePGdBdPs99ZJeW6BiZ3GMJaCxNwDSWtBCoaN4YyYjs742CpT8Dgs4137iifZa6GoRRS8SEk9rLnx",
  "key36": "DYbojLV24SRM1zLLCFc6NzabjKoRX7hGasubQvGHLiaHHXwdj74rSAGEnrgBLgzVG4V8JrVzZ56hRpN8nJooVJb",
  "key37": "2qDzdtoCbA93KJhjhgecH37icDReHkt56hW3wgte9yBMMoa4SG7ve5CBPedjSm5wEJe13TYQhc9Cr5q75D2EiW3F",
  "key38": "31gWNpGhcBcBhfYcwp3SCQk7ewx1TKQP5pK9CDVAodJsdCuXvCK9R2YcLGWYo5pAcZ3EkYZqo8DSs4sHGQBj96w2",
  "key39": "5PYJE6amWEosJC5dhvVsGeh4Jv8zVjmy7R17VqKEQfcAeazdiAfD7L1tq6kjmpZwWQaECT2YhYGurf1qkAh8LU1s",
  "key40": "UbmRexXvXUE1GmBhKu5qMGVFSTGwoYFMmdhS5iymqGamTrUgktwrGrFaBaSSemjLeC43NeBHh9wo2njQsGNCp1Z",
  "key41": "3XpF9Y6VpB4ofRr2hHRXZb8EjwC36BtQX627ky7ypnv52z9BQP2pt89obafg5ufXRcwsrd7mLxzSvFdJe7nK1waB",
  "key42": "QXCwpZn64LEP4bivML4DiRW9hJg1XiMg1SnWB67538YdNaF3AW5kHGwYZzbt7bm5qZn2Vst9RWEhLwoAGvBuyFB",
  "key43": "4XSXfDZqURpZ2FxvP7KMVQPnPcUSfWLNMCRHDxpP5J3K7zLcDV5mYzLmYUCe6KMtg78JTBqaeNjxMriR6crHucP8",
  "key44": "5349TsfRF7UVAdbMuG6g94wqa5AHbWqorPQsx6y8gVxhbNyHE7BB3N9CdGQP8c7QeAD6WbFjkFMQVvszkCv4aVCE",
  "key45": "5We4hjeGEYU2gyufDDpSgJB2g9ebWqKWwPEuavte1fHF8FXw4a6FfkyQYDJQNBcDxDWq9q4XwRovyiUb3Fxy2FNt",
  "key46": "eHiKrL35bXDCenpsaGTVR6PMckkLtAbYPnUgMZLZQrBaYzP7ZurSqbgcrtHg656cnXnjWbHR9FR7EDY7DRGY1wk"
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
