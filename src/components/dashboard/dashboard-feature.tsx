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
    "AzzkFac7AM3uP4jBARYBj8xKp2qwED147Yf7wXNeLJnpA24XHLuDXKDxZuH5kb16wiMoTxFqYgb584ZNQfGawdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rxeqBntUnKrzYHL466Tr4yZXF7UnHKLk1vWikmru5pi5hz2kmytpAuPNVFeiRizoAcmdQC5eeqYKVtWW8JL78N6",
  "key1": "2QnZGyEVudBKVxgEexEgF4xhj531qQ2TUM6DLWWNtCJMzZ7dABUcjJec9di6sSawsqofdhWDF75SC5Lcx1f9CsVZ",
  "key2": "5vyTDdPPDT528JF9ukZCyfPpsVbGyvRFUHHx2mhGpFiLBYmb5tAkR9nLvnckPYJTiyF3tXTnMsSkzh8vvDpjy3s2",
  "key3": "4W5ULGYV4pERWkVB5T6Qf5BYaHjHV7bY8nqwpfcaaquxGs7R6UrRfETRmAhMnQagKRgdkLBYmcd44sGdFXXDhy7r",
  "key4": "4bRxDZMseciM7aVqxbUfhdCnHSt8gGBng1nQn88aSSxWUVgbSysKWDDFHMJ5nWiffMQQNaVCVY8FQztXyvHomrrf",
  "key5": "4G3pZ1sLgmGDgEnVcJZh81iD4GQimB8QwsA1jPkDxwkMK4nfQBes5eaej7FSeauSVqYaXp1WkNL64azXRYx4Kt3S",
  "key6": "4RDwfjYr3cJVZ5UcY58GFW7DVS8ecjXrqTGCNBbb9hqfaK7DyBy3yWhJCWho5J3phMSW2vtvtm6RKYTYXfwEWViC",
  "key7": "4mmXrpVqKrjLMJ41WL3PxD3UeKjRUypzdNQY5KX8YxTnH2YqLoK17x6wP6fDm5DAt4DYG2wRKkKJQSYcFwv5Bk8b",
  "key8": "4WCtqjdapyfaxRqdXYA8GeVV7SMQsvdXnycY9gW4ZLCi2qpeCrwzU3N6B3Sx7tHU79SK2ynT1Lp96VEMf7kdoh8X",
  "key9": "497mXbj2Vg2KzRAuteAiJ2mJQaQbddn6hKjrTP9zn23tE4QosTb5dnwrYbub8js4Reav6aBZxPQaXQaKiDDUb4Xw",
  "key10": "5fWMTTVQeF5d9ZbZVHUnXE1zAFj1vmEcADUn7XJrKcmn4vM6gQhLfUBnwbRtsa9Wefwfc4KY49gJph9WUP4CKnuc",
  "key11": "2TFD7bJfQyiiv5WHmjr2WZwkv4Eh8rWRAqwWrW4uiNFupGyyif1X1SfXLm88FszGKMRVTWxeNPCp7PuPdiM2njyT",
  "key12": "5yM3TZC7PZBjjC4t1e6qUqv9HwzK8rbUPuY2qGsJon5aUPtb9sdphmVngN3XE6r83GPoUVk2vtcxztBRYDjPSCkv",
  "key13": "62stDB6zPDjBBDFMNhXGNsZK2jvHXd5ashE9QfqPy7iKMffUhnXBFPX1PuedzWF8s4ibqUzgAiaLV1ZLZvcXvfXA",
  "key14": "51uJ8f7NPkED1Qjfun4waqvUWxLc7vyqcr69GYYgdtY9zMiK5C4W9mCd6MjPGsFCw5JdrxKzREYQEe6jL1WtTnS8",
  "key15": "ca1We1by79NatNJwLkNmfa7aPimXA5a5SvncJGhZpkDfXPu5P7p7kxuPmECCBNrdzSf9zS7SPzKRt763CmCzgvj",
  "key16": "g9ekFXtKWZwUcmUYPLkud2A6VAhV1HUdjSLtm8Rsbepg65jpydpeptxcMwDSZ5fAxPLkpr5BXdK8njNT2pHp56W",
  "key17": "ixi66wTerm6HtRFykn6n2PxVAL4sUJj4MxzQh1k8GDZQ8rSYrUQL6UosZNdJUWbbCdDDDLPuLUDQrtcQNNGohdQ",
  "key18": "3KWnjQkM8CUeqd7YnDYdE2zTJaw7oLzGv3ibcJf9XPtPwyTDaJLpWABQkUgV8A7XShLj9PRm54QacHgpfpzgi5iD",
  "key19": "xA5Hpc7zT4dC8rt5zBfFW7ujXRryNpyVwFG4Lqn9ot4LM7CPUtpssWLv7S1DnN9kA3FFxRRWBfHfR2QQZk9PmQj",
  "key20": "3TGDTQfuCM8Fsv23wPRFtN1xHynYxFFepB9BGbrd7mKPpbQtwQvUfWwro9QxKwmVRoVYphEUwxaQTf7GovGj2Axb",
  "key21": "b6yWm9ZCurUSxqsGma1BJzWAupoBq1ovdiBg1HDTcSwJMwJnNwt5aeDsmqXdHkqZBGpKTzvFM5yELBmdQWLxZVv",
  "key22": "61GKGLSjSKnwus1wdz76tgaCKAvAzNemvUCsqCXhDNx2SABBUjgacXDcPoKRSePWHw9ehKZBW5NEx7bULTgyk5Zb",
  "key23": "2dLSezdWENrCUJxwTBw5sPc6nFVhVgwCB8Ari8R8BQSqUxzPXgZL3nhdbxD2aJfyXR97aZQYQPHN2fqVJWjpKAGN",
  "key24": "2fLRiLS14WwtCqKDjMDYrPMEvHQFy3Gem3sAjdD5AGDCnvWMNkvqgoR6TBT2PJ9kJebyNJhAPHvokj9oBJ2YoF1n",
  "key25": "4Jkn64dvg86g5GXXD9W48nvsVSnnnQmrZiCvDcP6szKo7mhKPviAB9YaeT7c5RsXiA7ghtxzepz2S1sBXVbi8TDy",
  "key26": "eazfTpmuqhC4LQNp2v2rfpFgRAW6hNzXvTvYRSVbfCVaKXxtXiX7kQ3z2qvB78xFvR9sGBUYsR1fPCxpWManoQM",
  "key27": "324L8qyN1HyMy2HkvGSdZ9JqdX6XWj62Ewn44F4NYLyPzZfzE5FgNcfxchgV9m7TLAnoGhVx1Nv1tCJ6vaMLeqdj",
  "key28": "2Zd5Jyv9SyHg81VUWn9dkfsJQiQM72JyjuSPY33KfB2NzdxPK9fpGzpAA7P5AgHSuhhYKmA4YvvYHVc68SUaQA1s",
  "key29": "35m8UvjJqtpgXiyPA4czThvbKdeSqnan3YyH1oeUNYYfPg8kEtsSGEz6wgN2e5PkL6aR44h2PSSa5sPgw4Wne5JU",
  "key30": "3R4AmxBXdZMYv4u8ArAcdQTumWCNyojEjUT93oLvskR6u4PRL5J8qhC1SmyRWrubzYxwLLg3btPqeJVoYcMzLyMh",
  "key31": "22hiFuNhx9GiDtVBUp3uiYrZZoJ7bAtHN2rkhmnsrChoXa8dkPGoJBnaHn1uhJLN7Pmf7V9J8fmeFLjZSwz28Ube"
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
