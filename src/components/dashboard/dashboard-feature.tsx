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
    "48CiZwjb9Ah9rA7taQMyjCHGrwm7VhvyK4wkWwEcwTVAfy4CYXZghhY3r3BHDAi1i1QBxuBiTNxb8GCSw2ZrrJYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sXiHknburnCbi4fRSZC1n9zuZE3QQqT5kPHrSpQR8hpEoZHW4Yt7PZDwpaUBGgEa22qLfZYVekB5GSy3gjYa2ir",
  "key1": "33nBZUCH83w4BtjCEVYc5xMLT6k5ViCBDAp42QWzx7PEd1ESkLbkmPccQq4wFXzTd7ogvEhj3Q7pLcFrZ2RBZ3jM",
  "key2": "2rJR26mNiARZVrzrRSMgumrTU9A5K8EJjFvqLkACJbmiT7xjBDtCAbuFM4PX8QR8p6wbBfLQ9WnqjJrn2vnFd2Tf",
  "key3": "Ptjf8FJx9RDWH9NsyEnFnHwRxdLBuo93jUG41QnGvYvpQ1swDE31yig9MimgLEaT2newoXszyKFxA6jxDUib8tX",
  "key4": "2PaizwiJsTAmaatVxhMcfWJ8tjaFLyoyqdk9HeJbPzLW1QrceuFMLga9Cz96DvKVGzYbc1ycrnHqVGWmdKnMsBED",
  "key5": "3zqSnzf181BFDiekMnDe2F3AmNyphKCVzMuapko7bk7crvU2Zyxj9i6CwbmDAD5pk6qZ7HTfKE5FwwhW1u7QqnZW",
  "key6": "23EeaQP8XuUjAEmz7HKRtpjr43kJhyANGVwtvToAgTg3hAiWAspJzfA6JCT5D4fVUXtY5mfRMk96ntN8LKQojepA",
  "key7": "PviZuzBe3AVWeLaYyezCZNwfvAREbdHmQ6UXnxeEn4v83tikf97K63uqPFHPhKRMETeSPZK91ZRxyS5qt7f1jb7",
  "key8": "5zVGESZ7sNV1fXDVx7QgCugTGRjsK3vXfkdkzACg9S1eFgsNbw1eKDCiizwyWCqooQMykqCJeFeurBKgsj2Vc6ys",
  "key9": "3Z5gZ2LMrUzirzHTBjjnvgCZT96SqUY1AG8BXTV1RwZhjvTVVgBVGtqupx1pnokbNXsrYMURvfibcHEFWPBJaBYa",
  "key10": "2mGXSyJiimBZf3oBkPDTuSZ4SxwVgvPAqb3uLHDD7RTBfAaD5QDUPytFWZWCNU9dAAUMjnASYfc3Sm8DrDjFwnmD",
  "key11": "4w7g47tAhc284wijSF1bP63a8fFdJVmkZ7KAgoPeJUgfL3r85fXGmKL5c4jqtTWgjZUxtgRPv8YJ8ULBHgkLgega",
  "key12": "4GarG2DprvscEjvxVSo7rgFzLfdmxkwtstttQjMKb6t878sDTxsW86pVhv2S9ns77N9CEsDWmaLNKYQmNChyDWfE",
  "key13": "4Wex6AjdFMiZXLBiGPDCr4WyqCiyL9y4ZMq64sZrcTRwYAUgw4KdLYiTee8kqPnWpksmvP14yBFFN8B9w7iDsZWc",
  "key14": "36jEbSL214v7e1x42gUrzby5k3trFjh9ceTb4DqWgVvb2EJveaahBHyTTgaNENx8EA97xNvWscgGHoN7j6hGbpXJ",
  "key15": "Yk7tj93WotC7bagCnhUpwbFqe3Pkfc8Ezo9ob9NBg1Kykn3pAhSZXWgGbhoh2v4Kc3kjqH8rv9zyRab9T3EAMPL",
  "key16": "4aYVdxiHUfSzbm6TEr3yurNrEQtjvPjKmiM1Qf6WiDmr1EdX7azty1WTxdYtrVF3cMmjGcubTqSvLv25z9ABV1Tk",
  "key17": "tTytYp85xDL758MkvhGHSwZJBCc7iMtkaVG1iqi2fR7mSyBoA8YSzu5otRt5N14en7ZKDRACDZm93x7QJTfvby2",
  "key18": "5wE2cVTHXqKpmYhLRT69qLVXWvsccSL9q42EdfyzBKff9wreP4rBBsd1bRJJpUmXxhbtEDaNsNwnD9yDctjxnbt8",
  "key19": "27xmCpqBNujiS67UCrLoJxCWNugU44TB5r6JWPTFYqKCz2vdEmiQQ4httEzwpcWvhb6SFgTPni6giLqEdxT7QLn1",
  "key20": "2RnULjDwHm9WSXLBeYbdHhn9k9XCXAWbLDJfYrzUMTT3m4vfu6v226P2MxWbyv5W9CL3erWZEVTnRSrPxnctU5xE",
  "key21": "5CLvBuonJimdMjrfHJPq9gDVYDeu8MSdJbQSZAQz2sBW73iN6UUP2erEYMECGfpxu47XpY6ZrXFPDDtdXpap5g6x",
  "key22": "e1WaJai3kn5WonB9mBm285CS9vtWkCsShR7NbFfT5xdY3WVM5WQxjApK3E3pFv6ni74dQ2U1ZdNdJhZdfzX8VKD",
  "key23": "4yG4WRbL2nDSpLiQhS6jmN9TSHFPhy7tEw8jUKebX1tM5yMggnQLcjcSEixeJELCsGKr3BPNLymKDvueFubwG3vT",
  "key24": "5xLFtLPuKFnzAUP3YgJmwhfPGHNqG9EcAGY9YgJUre88yQxuR3LNaq9eqGajDmfRF7Le3CMvvkcsU5WEtCAxaCs5",
  "key25": "4tJ7UtsC25s7fZTDbWaamFXpNMuoArf8eMhYyEgAaD8umtBL6Y5YoHXJoDEN7VWvKwrTdqfpXfoVbsQxsXicUD1q",
  "key26": "5yvgRA6PA9jaQhtwEfBQjGwEpwYbW72ytXaSzpzhQMCVDcJpwZHa34oTb87y9u7iufzoF9hCTRCCJQnUGgBoacq2",
  "key27": "3YZdiWnFxkhbaLQ2FJ5HFQKDSuGqnqmu3aTaT6SUkVqnH6n36hUrmoevFzhKunVop8c3XAowFagVhUGQVvWWze6b",
  "key28": "4E9rGoS2MD6SFMEXLWz1ZTYPkWueCy5WDKFB7VKsuxoatS5ucf5GrfCWfV6iMvcZbeCT9R97yxoGqBhYU9XBiaCg",
  "key29": "5ShhFsSrgKYyFaGHpLoWG4iiLZZ6oZGA6f11w1i94p4MeCZT3RujqMULQTTaFsZYb2bY15t76LCBv18d5tkLn1H1",
  "key30": "4oUBpaxuQHg4AQyAvMfwMqqc6v7LE1j8UxN4QUoBUCUfw5Pjq6gcxNMTQ9PkZNQwngXFqD2mQMGPmQMBxPD9Gt87"
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
