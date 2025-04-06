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
    "3KgSJRS3YJ6Kwqd1yNWp1eMAgj41HD9STx2ENNsYvSiJak7b9JwWDu2Jvvs1Sk2Ux1q9jvRWPDGqyKFMP3ZhYMpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cNU1Fyf1eAHDGJcjVCdAFaY8ZwqqEUvFsuQZo1oo7h1aCcm5efGZ9zGp4YVxmDcJvuoee9BsujUQ98a8ioDCHFN",
  "key1": "zSGj8px9akBnwkT5gAre2NyX6RgQEM8HzctYYk4TNUubkyzodLt6fEyM9sCWWBkgotq6AmFfej8ZFocjPetTzdf",
  "key2": "29TDcSuT3hXWxwM5vXz6tMsGFE67KeHzZ62LWWEbQMEmJVZbi1FwVUkd6yqxwxaTZdhZdeaQ2eLotqtKb9cuaSJg",
  "key3": "5b9dtXg9pPEHPi2xN54dgSe6vzSsnuSGPiRqQwPysdsKTESArQ4GEq67NgbUdz3JSkoRagLu9wk19LMQhLsXynbg",
  "key4": "4ta8owT3gEM1tsNiZQAkT9QWuKqd65Y91yfWvMm8vrgFbTW6vn5priydDBSBsxoJMhsVYB3aVEUnRnQ5ggU3Dbf4",
  "key5": "2obzwRLTKtNNXBQ8T15KrNVAmkz6zzg21FqaEKUBqouXAF9GMxVJxD6aXcQ5dWNNSPEu33Wh7rCiBPrQzbfYffMd",
  "key6": "5F4AxRUyvqApbjkBsqcjSmG1wiWfMGn1Zbewa3JuHbfziGo26FAD7WqA1gUWp9h4UhgCNo9DYYEm7G4DTa9jEK7a",
  "key7": "4w5xs9METtJu5UJT9WescgZDUTyhYtuGuA9RuKzRJ4MfjcUQvAfM47RVFh5MEEVy3SF4qYtuJJ2mJfpNq4gQPG33",
  "key8": "AQubVwEQuh3KE2MwtCn6hG9pbYf2CnhC15gjv8V9Q9GFawAe5tEazGCTkhZotHWQwjYiS6nyBW4UQHDpg6AYAhx",
  "key9": "bbwnkRQVQr8kzmqXi8dVXU5CtzPcnrT5ffk2pdHA1x1zDWMjgvnSzvwtHkKYTXoKTsNU25VE833f5mnUAf571sN",
  "key10": "4UUcf4ou3hgXW2WiPCnCzxTrQqy9gUAcwJ2WAyaZuKTktdb54BtJY3JGBpVYH3RfoM3hYMPEEEaWbBmxpXZJzxWf",
  "key11": "2njoLSoZ26Lkow6FYus851A9fGvYq4MpyaLUBCFJ3seppt2pUswLVM2DFpY7EBEz6uPrYEpRzCVAnDBJqGyU2PBs",
  "key12": "2w8ykCEwTX5M3JeWQNQKbRJoxxEvom5qjcE8DJsh5btKgzssPumxT9pbUGk6kW2ZarcoDoho1a6MpxVyjhE4vCLN",
  "key13": "4bHryMNkEs7RYWzVCrKQR4gS1QEEKb37YvWHZq3ihVqMmmur9Gv6xss2hSahzBAAYHfAKxGNYZtq8Rw5ZcuyZ1eh",
  "key14": "3PL8PQDwPkShEnFZVaLZYQYk8V7YQChTHdAxcjYYrrMyMm5hQVJ6wrZ7g7ZwFTFhfxQyuHnUq1Jq76i28Dj1qzJT",
  "key15": "3TFAVPkniVn6Pg4yCKgZR5n6KWnAybT5wbz3aoYdDvdwrSKNPSQ5D3gUfVwns9UtiEgzt3jZAJyPsjkJjnNjT8Ep",
  "key16": "4Znii8SBrj5LYxuCfKodyU31zoFboCvS5upSVVGPML2esTGXtm3vwJXm4X8c5ARsxFNBzNguhqYwsYcGrnU4Du9t",
  "key17": "3fZKRJcu69LAWqeditKVLHbyYDDCQBGudLDRMNqNLvB7wRrzq4MN92fbmqWxa3JdCtTFoxWinNXHSTQA6KwJdjkV",
  "key18": "61T4WfDXfhRcBq1w8QsgQKnxiX7tGgpEDBS7cEUje8Qa9Avi1xFCFKjard7WZC1R6nrvNZWByGuBasS2djM5sL7C",
  "key19": "3oZbdY3t5Wn19UKM6cRrDbeLv74i9xz2EeQLxUjg68BZbmJ9eAEeWVLABDi4UnfgxzYNwMUKysao5HUcCFAAu8hs",
  "key20": "2ymP8ipsusecsXCnpwWa5oxgmcPMRYraUqRqjVLJ5ehGJSxXw7mLTELwLNtD3DDJihZMhWsS1i7vR4jkUnyLk1iB",
  "key21": "5hH9M7NN8qZLLs6JPM81PLD8PCFZNQKopAXhmNUcNAadDSeZZMzZpvYLjs3XxFaqL2g7hc9dKv13Y2xSikmrSBgX",
  "key22": "5niuxJ4GSqg9429C8ZMfQAhfDs9L5hXiMBhFxfWktxTzrqD7uYsa5vGXrg6xNbU3KHMEVZ2yQMvg64cgk3XjVMvG",
  "key23": "672zu8ipNbPoGsJFHHtVxkqWKWbVX27yXJTK3tkW2kkjQffysGCqTFZKxDYFHWeQeE8w3JFx6Qkqr5wC7sKdsVzP",
  "key24": "5RDPETYqSdw3ySifaq7AkoBthex95bBKgCDq11zRMCaVVwgpY5eXTzop55VqWH4o9tPEqFFbkT4aEANJosyYsG3b",
  "key25": "3EgQHftKKCyR4wPLDVarvqBEHsfSzuPr9tUMQJ92neC2fNyanMQ4fgRWk7ACRMFnF4pxx2e8CSChcpDrPMq8x3TL",
  "key26": "2M3ySuUQ2hFkypekaX2dzRkCidgP6GfLCjYJGjLhQUGiKvMQpvAxnxWg8Hs4ywmCvfqk3SPSx8A6bhiiNuC9efZk",
  "key27": "2bzepXPc4kDr5YJMZtDjPCA96vxYvJK3r7jYPdRAQDPFxd1QyRVv1x67GFRc1wRGKoxnWXc2YRin4BpQSKogHN5S",
  "key28": "4rMJVgj8Cq2R4oyrtFR4jJhSfhgBzdtcxozRwpHQ1r5EtzKVPz7NcRrKnj3p3pBkRM814VGZoF7Zwv8zv3UjZuYk",
  "key29": "5s14RacrJVKwphrqYaFSiah76QQy848MDF1gchQjmpV6RnnzCd12D5dFuNsaP19QnUfRJHv1Ajmhq2nqgsstqjw1",
  "key30": "26ppj6QUkZ9WYZGM6hTcnX1mRfqbJpYieuyANo88AnhaypPU36GVA98uZZmzpbYtnLKvNtRBGqaPPUZx484PFyWu",
  "key31": "4CWGvKN9WjX7CymhojfTVunm9C2CeR6KLKfmh3cBXo2tZze98r9qXZ8Cz17veYgYW1wdA2BZwvQgmQp5PpZw5ukR",
  "key32": "2hqNMadKBt8asJejPo9hhyDkvdV3dEUz6wy6cUYyJUj6WxHfa5J3Ndz6aHZFEsx6G9c7PMHgBvDgyAweb2sb1yAk",
  "key33": "xEbLsBrNkHNS4UZex6SFqwHJi6zKD6TiSi72RuZKUpUiQG3NHo5ra4iqnnVPSJk775pLRszpFetJZhyPcvnyxpH",
  "key34": "5b2y2u8ogsjk7FFsUNTkmw1UY8k22gFAn8LsPtuzU9zJKRCoEkcCxAtbN7bnzSQQyVfZzSFhKy7MDx2ov7yriYAd",
  "key35": "47L3Mak77JYZb2Y9YZd8cDGoAdw5sBPper7AZPvq7hDmM45RjPYxbf8jKjfHbtrSkrVEbnyiHun4YqsVv7k6JHWR",
  "key36": "2kDcup9K5yi5sJ2qANiPgGKQm1BptiSQtmYNuVvpMmNrFkAPyxPk6wC2XB3YHNaUtcZd2wGqDc6ran3JTTPyoBEq",
  "key37": "2PmtCc8UkxfoCHq5CAsCcXTDriMjjX1GtECxvXeWKzXixJeWuVMgpV4aihMPTBZjXXAkUkb3rhpvw48AHACpoAoi",
  "key38": "YfHu8jxKeJADihXJ7QXriSvZ8gaiK5DZxbMzeSxUoS7hToSsmRhRGAgBcnyDJJETVCwbwrXXRm6xvbnzve5jTm4",
  "key39": "28VmjuwePDYo7Ra98ewQdBPL66NojNiP1iQ441MVwfXJNHWrxPVdawATXVNarjniUz6s71dvk5ojFvEHTtZ1V85P",
  "key40": "4WEdfHpaR5vmH5DdpWcaQ91mKxbcsw2WS9ENBqLD6amszWyGxwHyRnGG6oEp82YdZCAneLjebTZBc7UtRFW1kgHA",
  "key41": "4epxidTvFuvsCXFgHHHRcY3hcqHQavVozXMxDE5AEEdY59UPGPLMjNFQMoTihseVHMo9JtC56jnwyuohqkS81imw",
  "key42": "P3dAcWmtmhg8qWryC6RQ7Q4yU71Utezg2T8xQ3p6DTXtixH4SXs8d7EX7xQNbSPg7SKdA6UGynj9on3wNShzk9S",
  "key43": "5UWcNotNGyKNuBNyMryoHq4YuHyCqVpWKrBkFvWPVSA8RsWeYVQuwryXt5ZHTFoEmKvFwuHsjpSdhb7XmipvYSiL",
  "key44": "5RBKkois69zcgxKJZnUMWe3XrHZRnaTYjNXXWRPjDzFJ2rtyXAmuz5ZTeSvuto1HNAtvkhTnq4a1WcuVrspydEuG",
  "key45": "5skgGpaEaHaefQx8cgB7oWqQN5ZSCogkKSyPpCoxXyfA2HANWBFCngEV3gLse6f1YCoVtjrJrVDhEFHSB4dkagxr",
  "key46": "4NBbzsE628A9YbRwfrhSQjszg6hpKBoob2UxtR1fkXPRXggtkZwNRAeuGcvoX6iaQLvWmTL7s1ujmCPn5ENrQj7z"
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
