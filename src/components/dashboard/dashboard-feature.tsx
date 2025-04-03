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
    "3RnmynLVF6FxYKM12ze4j6uWMNp9bXz2AQCqc9m4DU1rPF4u6LwfeiwqoukRvHcgamWxU5PMrPfBLm2Z2wzzL22Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DGgxPQZ7YixNeDseo6QtehG4W7KahyUdUn6kygcK5bKDzXor1b5pYohhTd7gwWdRgZvFZuEx7PPKTVA9znhbpuA",
  "key1": "2FmYeeVDrfz3Qmj7E2tEBm6e4MCkmQzQbqB7WnhzVQpNenbpf5qqyXxEhffwSkKaoyeTguqfqwxzbZF5q2jvNZQt",
  "key2": "2ASb1q9fjj3q5svEF2R2uGV4PWF6tzBkhbY2TqUJf3bYPsmp212diMnz13nZosAP227k9YQJ5FhRAPp6DvN43ofW",
  "key3": "2oKWCjQ81sMPKyor6E2wCepBt8F8BzkZhsgSNfuevvZKk7RY5ugKZMknT2bDeyVUWayMH3Cxzzinq3svkHTUriFo",
  "key4": "i6W55My3CnPUHfWuXd6dPwTtL6zhCzjpvx9hQq5MACovyRdnUMP43KdwRhQBdmxezYmWkgZywvVXPQJjK6uBtKJ",
  "key5": "Wh6fcq7zWDmzsUeLFZ29x2XhQcTUXWrDkuBvyp226LcoaUpFRAMCkrTDfQW4Fb8mFz5uQmKanPPce79DseFXVc4",
  "key6": "43MuaNvsvwtrAZSEohHd7oakodVN6vadcZes2kGvhjktZzsmBaCWhh5vi5etYuuDPmukDuTAztnjbHbEbqDUpLkX",
  "key7": "4w5RQdGJ7pxL4jN8qWZFbYCj3c2zwnhrACJkWpLAU5sogTE76vYtLxKU6Sj2wwrV9DJepCkRuWC46NRgTwYDQrZ4",
  "key8": "2GmjCijUXBcY2QGVD1mvjif4R82Ht8fuFJqigrfhKJ8vKSC7LGY3U3B5129MzSVhAeKVbnQrt9iHrZnpKt6rwWmW",
  "key9": "aBR7QkmD8AmVrXtdgVY5XRgPW5gamk6fRu4WeuBvTikt5XcYcTt2G3RRRniH2y7naB7v4wYFdVoY7vSQW7yWWLD",
  "key10": "4JZuhSern5R3uxCHcZWJdEt2QTQhsij8Ahs7CFWXQ39CJx7rr21D4GETMs4yXnVTco4g2kDD27FMohxxFGvU7sC7",
  "key11": "4d8F7WrSECih58mYTmSWSij6jugGwqUie6zhUVNXtGMyxdq3oUC9i5FKf4cYqmrBqtw7JJ1KvrZBRvAXCKy1GL9V",
  "key12": "5q9JFzDvqCm7Udxcvy4em8PxYu5r8nySM8Q4bwpYDXWCgMYY8xdLoLGCMGqwuPvMgKotXhFKadcg2DjNq4JkLN4Z",
  "key13": "2f9uT3BNqJHrZoNnZaFoJTnj1WBQ85PDmr8sDsfzMGzWFTPZH4QGNxMtK5EQsqftT1NFD4PWMUQfAEUtBUGrrKW6",
  "key14": "4jdLHY9waymMancJ1Cm7RrvYask7rvoDbXpq8EJpQnNZbmTabZvHmDPR4GrKocG3gRM7xhB3UfdPLCPx6CoRV8hm",
  "key15": "RUNagD942KVhan1VPqebHFnmBoRswogMRpDY3YwFRa4VzuDGu9ndCRQgAFgGPZxegSqiHzyqPoGC2dfGKDqnh9g",
  "key16": "2ZANWGHsixnz3UfrMJwLdoBLgqsmzoTqfAJ7fVuDXvWXJ9j3p9QqbBp7jEQCAH2FVB2tuS4STdbNKu7GxQXimNub",
  "key17": "67YoVfj1WRyuwjuDHWoPeKuPCVU8oWq2rf3B9nekKRvH2erWYq63BBop2vyu2gTHWuZ6XTeDNiPF4aZ69kUJLxUU",
  "key18": "4UVmU6DbhSZcLWiCveTDxRs6DJQ4FWXvaUWn8JtxPYy1dn7dUVLbe1dhBcSJNKL1qvAhN1Fqx86uoqQWmTVUfe1n",
  "key19": "5htHb6XGp5PhN3De2NzToiwYrstGQ2aM3x2WhTyAKxgfbewvzS9offymAHto2qnHj2DAxuw95gzFA4dbszGHPjbY",
  "key20": "3qqNabVbSUvykPe52A4AkbaBEN8U1FWfXzspMc1LkdeSGb6pGnLmD46cRAxVr1sNaitRrsLUw24j9fi78xBp4Eb8",
  "key21": "3q2mr64HkhbVLBnvjDTR8FUi9zyufU7C4NeoJfv2ot63XAnPGr7hgPvdqB9W5YpLhy2eexPKhrub5cX13d5CGrmS",
  "key22": "F6opeTomYCKX1YeaLcHUVfdda35gC5T8RbZRAhqices8aYA6KpxbZobyUfPifadP9vLtr4tfAt1Y39zryhjm9tu",
  "key23": "wSBKPd612oW2hw4C28bZPw2y7ivTJzwCUJ7XxPH4Mxjminks5MHao1wLz5Nn8F5BN6BcK8ophYwmYFbMovmoJPs",
  "key24": "2tDWNp4azr6Q8VsMDXuLdVfV5HQd7oKsqxpQwnjhDSEWc3pFCcPWz91b55Vhia4PNzdxjpNBe1L8KE1CCjLB3UN9",
  "key25": "2YTuTG4dVnEQpvqqLaSdv8i2UKfPzPgA9KT6y9kdDLV7jvw3ttqrFExDLu6xFRepktSRb5kJs4djQmib985eaYiH"
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
