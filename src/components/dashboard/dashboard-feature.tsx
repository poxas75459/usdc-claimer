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
    "5oy7c8Wr145zcwSB8Ht7KbRJpbzwaacjxTRTsxbY9BmaSnwHskVFkm495rMU3TexakLkitU6gHdzvY2yc6U2CFWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QWJ4Leqvwz4LFA4T7rV9cyoiGo4pQoZdfpyqLDaHK4kALZJmps5QbMZqRm5QSqwKt35xUx7haibECJWuNMyD97g",
  "key1": "3zp7dASqsr7JihWF7hHpeHhLqVXmAQ6z1asJi23pNqFeMqRshqp8uanqLQ2txcd2G5vk21CVbwMKByinaQzGxLvJ",
  "key2": "4zgAqi9X4F1scVj6E8ojKzcKHvwTptPPMqm6C7aBrnZHfbJCQUA1G7Uq4cdFJsjALemo23tVq9CssFzscjZ1Z7Uy",
  "key3": "uLeav1ngMJZvuaL6m1wSSojV6ZUkv8DkkN1kuV2VcQMSuYT3RUkhhyR3czJg2sCA1GrqP39EMyH1HogJbp8SaFz",
  "key4": "31NkFHZcW9ErPGFqgqJbUtrARrt6VsQsQNqWqcWLqqKAYbnbhd7y9bgvx5nc46X59iBMvoie2oaoz7zDETt7GZmb",
  "key5": "384ieH8Qt6wGXuLv49yem7xDq74Mu8DFmbjMyRgVFEuuLRaxcKkPyA659qHDwdWsWdwmp6SE7EvHggZNbGfnYGnU",
  "key6": "436cnGRK6iqYi9edKHhnSVMo7mueyHQwornWmR4tC5csBBp6Do7tNGAYMQZ25unUaWvFj9QmQ1DmmjzTKRGHb68h",
  "key7": "2hXzwEeV6wq2pMTqD8FDRmrPcSCBaZjeQ7KDPufqqEpZFDsd6yDZRgnvyJ7DxJLWLSU4R7yZcbmcpgBLPg7wFtjw",
  "key8": "p9bqJRQVe9SgiSVnzo7vCCSS5ksHtFh8RzMPtfgtmvgYwLURVwfx4UJvJUxK53jVg2pnxToCfnGv25GvMEiJ2rR",
  "key9": "F1sFNsjMiZWyyydZCbBUWQRjttwvSUsdQ4tVuR2uVm63VAg8TZBrjCdSFx2V5tkLNUdbYmUCn9D9SfqPFn6EsxA",
  "key10": "3WFZaDBRQdj6nsG8hs4Cy1fNSKoEksi6XVLbpzs2YPAiDFkzTiuLTNzK8fMfpwQoUFJYwxAtjPkzJz19763UNShN",
  "key11": "5wf98g7RLkkZhXB8D9sadjWhxqaoj8V4P2Gp4qMeCQjPcqbDUJKt9YvU8YszfGECipsuFkiZNJNMtDQtd3RfPDWY",
  "key12": "2ShEDutz4yBJabnR7983qwuAaJoAUtGWVyVMt6naih371oat54rbUT6waBKUakc1mgobH9vE1LQfbR4VXZRmRZu2",
  "key13": "53BxcrsaQ91GGRrSkhMUfrxykv1G6JmVtHkemPDhMPQjK5AFbDP1wawRZRfBEbksMt2wKa5a189jySfYL8w1GVA4",
  "key14": "2HwxxqNgUFr4K7WN3SERp6AsSN23jRmDqwYJHLBz5ua9HXApGCZjMVZY4rCWfJjkkVyRuj2zKYvk2s9QcFavcaSV",
  "key15": "8HzKaeKteEwiGKHMyjCec3i45K6mZzBetWKiAp3Kk7j9XiLEZvUg9p5kuhVmRh8oJNeYiW6mjRf7RaxXwH1qyjJ",
  "key16": "5QSboQfzx3ZmXcwoT9SB58AS81nQbqxXYpL5XbyCnSQsKyQFrBZbDepXfJ6NVWwcfMftJ5xAsS5XLCCBSpQinVSN",
  "key17": "2e5poaXaZW66zXxx4KbyrA73Mh4tMSjNRSaJuTuS2TPDRjNBqYk5hDjNCpA1dNg9KjuRiBtZd1nAoAymzm4732j8",
  "key18": "4pgGeoWcRSfWpfxiutKE2JJLCoEYMqqWf1bCy9HjfALjZgbTSdC7V8Y5xtqQZdJYTm2SCBKxUMb7vytXGAHsTm49",
  "key19": "2N97LTQioALLCL34d1KDgv1Dq6ocjqekK5edq4xnGu4uEr7H4VvR3Z9G5m1iCkYYRJVWx1ctAmTtVDG52PDY11C1",
  "key20": "4LEpXYsZrQVKz7TVzgPC95xYwCGA1jDeAoQyQnBWjt3GspTwomMU6ctqWSPri5e3r6qD95twoXvrUMgjsFv9HQrb",
  "key21": "26TRpQMFpJkVGeXKNNasdobgb6wfEKq6GLTLrXxqaDpUycrqnTH5jDdi4WqYoMgXKPaEwcGFFtLxrSQ7K4X8jSL1",
  "key22": "3FBLityCzNT8NU55FY3PaFTwCN1Lkig1DnbYfxcLPRb3zpmRuTyzxhAvGp3noVcLmmbRuZXhhJDLPo4zpVnN3RPS",
  "key23": "4barGbSVM5AhpQAgezmX1sbMJkJJ8SK9cjm7uEqZuQ5cg1YweDFz6RXUi11xHi9YaFBoJqbjU8cA7Qs2Yii9YDRT",
  "key24": "61WEHSY7VPBc4h3EyxeiRc6P8fhEAmhDeZyCPz7LbXuApHrERPpbRFShnMg887T1JLxpwpXvrgWEvt9MEoDyL2sM",
  "key25": "UonizCyhm5hCP2yqGNXrZCC9mpHiQXWDH9CxWmNai1c5yDECfVhYrfqUyFAfGeH6VfwdfRt25DGHNG5HGzShRS7"
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
