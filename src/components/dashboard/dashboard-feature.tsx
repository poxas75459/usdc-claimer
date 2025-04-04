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
    "2qjY9LfvfVEvr3AQLUF7W1mP6QTbcDPGTdqpbXNDBS6hWrsX7DUaART55qoqvdE6y43nLU2o91YqYDjykenpFiZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VDo8N2ktiJ91h5XTwcY9rkbLGhzCK4Jg6Wq379nfYUrN6Tz4bohJHT225U8MvMYRyMx9iMNbzdJbQUk41Q56T7G",
  "key1": "253ePMEaxAwAB4FgCXL3jaraENLJc6ocuEZ4CrWUw789thduo5KouUyDTDAPJFHy6QhiTYxnxZuFpAbGQqDuuGxr",
  "key2": "34f465k1zBfDiJe7fwTXQvhR1Gpo1cAc5VauW4bJPMC7ocb4dbW6Q3pn4ViEvYk4sjpbd4LiUkKg4VYGyBHMedXe",
  "key3": "2qwUg3rGtPNqB7WJFNjzvNraWeThfB4peso2HrNWp1nQfQm5nmCqoQKg4J76nMawBtScEnwhQ8au98Ab6iptqfX5",
  "key4": "55U1xULYdPSbTzqtCrhTSEa3in9kTsou5dkQru7pbrkbkkbBYoZw8RfHun11xPqKYEzyRSbhaqbgpv36qHQ1ThHB",
  "key5": "385e14GRnjmCrajzHpN4Dke5o2aykf8eBkzHCMFFfdVyLEHDk4Pnv68EQuiRW8pWfFrDXRjkCBXnTSGy66JNugS4",
  "key6": "3qSGZV9oaQTq6aSMmrJV8VvBQ7LESQko8fevQdgVcE5sUjzuAaXA3rFNujSNttXMjKLLbRyzDtcEsX3tFvGqsieu",
  "key7": "3jddwRZXgbyACAWURbUF64nnhHuzstSaKJByPLZfV8b4CoT6szuSGGe4LezRFi6mFP2FitQmC39yW7yfmbt5WhUQ",
  "key8": "65LcEBEavugZJThn3YNQgZZHL7Wzw2idHfbDAf7ihYf3775xhNwWinXhmJLkPnYJwyeY2hAPiY7VQPTksmEQWKgD",
  "key9": "45mwCqKmvSN2VgpAaFJXjjrgi3DAatFYMGx9ADBMK6tHtSK4f5wfdeZmEKP21st2vmurPzdBNjytkPivVM8NJPN1",
  "key10": "ajjYgbhcDxG7QUzB1pYriRX9YADbG7KXg5oUVFA6oNhJYvana2eYGEWbPJAmogChH9WWv435ULsUTKfmQHRrKyh",
  "key11": "32KvYowCFaBMy61223xGukvwUFqMamhXraBAUry75YYoBpExwTs18FzCZBqy6DSfxR14MKCa11NxcRSpSCggzCvZ",
  "key12": "35vW1pMdUVrGyuJmVkMfFuof2iLnXMmXtPX6ZwYNhKKZj4pGjWus2K3NNUGEFCm6C7jMRu1YbzjNZCHRkJo5G2uk",
  "key13": "4uRCvwjGyVUYDqvr6mgzaLfXzKWX4d5b54TzdbocgXdwQ49WSEyV1io3CCDQb511DDTbtXheXMrfg7jFjNQ8mCvZ",
  "key14": "3iG9LTc1jfQx4nFxs5nJ4k5Z9y9ZNBatxBK5eiEss4eZNiLtYJnY6LJqtLMqbmCbA6rr4Sd57Lax2d13EKphdUoi",
  "key15": "3DsGG9PzxgdfXxTyfQgrfAoEuHYUoaVGMdCsng2SkvbaQ4S3kjkho1GLtWXW5XoBWeomrRALCxU8TXXQ68y4NHWN",
  "key16": "4r4tGCT6sgSc9jE65QJRKJLaYPkQSu2hpopLVhMMx9JNtYgEcpwwm7e287fXxr9vqJHVA554NMukzQ5R6Qyu7AmU",
  "key17": "5HLY2SCHxKevmBbFFfpDJ75ZKuSRm5rXj1z1zxBPra96T56VsZoxwAXCJQoCV12cF2TFvMhu1jHAwuLCqzQ4xExU",
  "key18": "4Y5y5B9Dxs57vKzmbqkqJtM19veR6UumAXvNWeukHNdx2tVy4kELnRuJV3fECf4WoC4CGwuGqWEFFuSDxacHPtfR",
  "key19": "32eq1BbNK1bb7D9wZeTjune6gRqkDx2Zt3pKHvrmzPVwGDJGdTvYtjk8rm65FtcngEGQ6odx1D5jaJJcjLxTXiWD",
  "key20": "5andLpUuU4hqMhzKLe7k3rvZ5C7G1qPAsDXdtcqJbT1zL3hCVuB6WtbXneMbdUPqTjCUXH5emBrdGswkAHFXmZwh",
  "key21": "i6paZnAi6sTJy1kx279dw6VfzYLmQJMd3KscM5cLT2D6M6bNGgA6872TbJFRsmQZYoyNxw6bUnBG911PL41WA7x",
  "key22": "4sYb5PYgjsVCEJJbcqZjZYmnQ3mQuEEH3rqLUobf2nfDPzEFDvKamDrLr2Re3VseZ2daMK6Vbt8PYAniyR8ZjCWh",
  "key23": "3fES8UdCJaLxUSpYKteQdrqFyrjQqBf5XJnfdaymJ4DdXVV7DdrezKkxqyGdnVKn9SvrXEQXVW1fWHE6rwypPqJn",
  "key24": "2Sjj4WoJLBBJjJf83GTgXbRuu9ugUfzo2rtwqspdRgfWtGqCEHE4poBCTpscm36WugpdKasdSXugB19CopmZdmCF"
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
