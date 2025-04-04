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
    "22QFWbuJwqQGV8cFocUkBx7FGDU23zhmSXUGXmNBFDhDJPWHVw81Dw8Uuo2yTiWCvfyaAmoNHgfMRTSz2GKQWD2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aCGNnw3CkPbLhTJSpFbVojuNKrFwn9uXE1USmqqgrSRZKAjbCZoK2ndWtgcCpq41MM5uibXfzzczx9ExL2W3Gdy",
  "key1": "3jP7eTqyd1fQBHffjqccoiGBGHzBvuDiw3CJMKsJQYsHRi2aTexoppNvhc8oW8Xs7ivAu7fGK92TG8H9M4GqCvTR",
  "key2": "54NMBh8uSP1HiFeNLKTaMAaXnxKjxEZaFLvyfh86D45FiGhyPijarAbM9vAaph7YLeoHkJKrFHJKT8Z2mg2X15MF",
  "key3": "3PwQphD5xoGTL7ezYzBQLZgexuE4nSHfaZTUqFW7YMo2ZTujDki6xaiiJ1PdEdxJmouQ1rBQGKDoPDe4y2r8L6UA",
  "key4": "3RmH8WACUN89fN8fkFdkbuiQN3HcyvmT6qwyCvFdfsWwoU439RqNqZstC61Wh5jEPJsbmapgBf4fABYhKVu8T6Rx",
  "key5": "4jiLwZ7D7HrYo1c24aMjCXcL14r3HrTJ5zrcBe8Wrm1TL5iDVhYuEnCS44dRtASGX9NyWXaDYEm22JDZLYsCgSPz",
  "key6": "P2effnff162curP9sNhwZiwdXmtDeXcPrv9KhxNfHvRTLWxq7FHbYU15b7YQxK4tRXyAf5edbQoZVYqeYhZyDLJ",
  "key7": "49DHtTFxbH44eU2kDbXpuEWSvME5xhHY1UuJuBfHm8w7fVrJYxKqBJ6GGhWrExGMf2Eua1BXZNMqpqR49kz1mwUz",
  "key8": "P2Ae3CtkjR5fSZguD2D5k12nvCSDkv5pkVDm5x1revQ9QuB4jhAGuwGnMQcCK9XAGcHZ1tQmTmfDZ4GuLsSL4xC",
  "key9": "N4Pi9jXAcMBgRRnENDxY5VKdbdZuhf9pJCHH7kcM8xyRrqWQcxjePnAFdEvfr6VdH8FPgGa9UeFWYwKEL9JqPqa",
  "key10": "2DqnpweQeAH4aBDrnMkVUp5TgUBoiEkuNsxS9VDhKjxgTuoNRbCrm9yKS5qHnip58BhyKLiefW4hxt5g4TPXD7Lb",
  "key11": "uyjBMAa626UbV1fZ1xredt3geWmdYFJzKBNVoJJuEGYWUu2kmEhhhGfS8Gyhi7Z1DWXt71oFMB7UySwzUPUHfrp",
  "key12": "SxrWJcxBrnGv9kha8k74eTnCvHKW8rHt8q4vvfA4jPfSnN6MUxeo2uZa7MxBJqoKGfytcMpFnpDbwaKVkb15rHd",
  "key13": "2YZscKbibhMY5akk6934nAf244iVqe1RyjrEwrLcSri4UkP3WcQCpcxpTHS6J7dX9vNiz33EH2j2yDXxx5cyV8Zk",
  "key14": "3m8LrHdASXo4M2J1YuwUKuC1edPU4vxNn5AwtnY47dW3NMGhEm9JR4ibTJeAtJRL3mJTMFVmaxD1vaPk6mUWeCY5",
  "key15": "4qSYNHQiKtE5HedctmkZHQPpQfWjPH36UWcsVRiaBKPGx7HSwKvNNmwUUxMWqscrWpPe78jBuXSfzEqvy58uLWa6",
  "key16": "38nMZepDeiczDNg35gog8juWvFiVmo2a3uGb43GTboUym9vvwvNzLr7fTTUh3NpSVKrn4zuLBminS6a7JTrSw9fT",
  "key17": "2eakdW19cUjPgdq888GVJgaAmhGemRVapjBBCHWwX1Zte4LyA66Gfm9B6GS7EhGGeVJZ2B2p2PNcxwZML8k5J53z",
  "key18": "as9QKNrCoNLBRrwvandinv8g9fePfACx9JM93pByoQqoAuPw9mUhwrFqYfM2YVia271afUYmjkfr8A3HkYUPs1P",
  "key19": "5tvwredJeCpxND9WUHZz1ANkw62Coptnvjs6SYQwp6ka7QPwWA6wptrL9YHUQzAyPgAJ1z896R9G6ztwjdozHpfE",
  "key20": "wmZqVBWbxTapdPsRhoWzdoiZ54wXMgNESK1NDSGCZqbDXBcQYhjwzG62VdBbwTPYBtsdtQH6ytKyLzAm45A3gfh",
  "key21": "2EpN212FA35yvm9FuqZ3DjL8sJrPE5u9DKGtcL1Qmx1fd5i4CWjcgoCUZFbz23cn2uik8SDdTCZxvDfWeeHSKe2t",
  "key22": "3TJQqgvTmeQtQgbHujVGqyZ9Gaf5J1S1MKA1Kdz3EuXtFkCqUXUePxQVTkFMCd4XBUPGR2eutKFEmeYwxXPuo2Qx",
  "key23": "5jyyRVvbLDRva4puHzmJqrEJqK7nYjCn17xHsc6iFU44uwskrbGBqV1b6YkmZmWjFZWc1KejEyFbHrHFbCeeXPxx",
  "key24": "4q8Fk2m7DHuJDvRmhcgrNHSffznj6nnkyxXsm8f7gcv6CVFpJLurqDzyEHoeN6vHSMqP7iRNhptwYJi7zVSVjw9v",
  "key25": "Veu9nh2ERvGHArZUGsZL1AD3Csqo3irCkH1oLccR4tbWY37Aqr3cBWFU2JHthW9kSXnSYgqdmDog9Xz5VGPdKPk",
  "key26": "5yN59KSackPf5UqX5dG8zV49Q9Kq5jYfeu2RFj8ikViL2chErFn2TfjBF1bk66pBpZzxAfEtLUf3rkDyTiKx3kju",
  "key27": "4zJxZ7mu4nGBHNdq46yFQ5r7QNG5tXtVJLJoCPLth8Vkajo5QeYgxTuFDmEg7hW5oaZwdbCNKaDs1nHrvDEeoRQA",
  "key28": "5hKdz93czWDypFL9CMfNKEerMBdRniwyNJJBbRScWx1W5Gx5wdjCu1tQ1KcPRqnkmtWEB4E78tKx7QUdoLTqzf8p"
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
