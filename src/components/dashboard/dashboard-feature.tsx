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
    "2L5w39XRC3cTdADKQ3LrfaYYe4opcnJSugeB542gY9vywXM9MxU2fctT35jJJ4xA1dSjcFvtnVzE4iy2HtgVu23u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36x5WNpRzrhkgHV11KcNRVp5v2Zj945PKX1HTUSgTviZCf1o7x3zo8ykqaTon7L5eBNefmwDfoWaLw9JVHWyh3zE",
  "key1": "4MhuKdSSsEJ8X98kvPQnBYLYMc5SiuJaU9ndAuFFN4iKzi9bJbLVvCdqixUuBtYjZBkCobh832y2CithCt8sp17z",
  "key2": "3nsqjxGv5gXSoT7ht7wYcD5GnR5HYYYHdWECyfx6iVmQ5z8t43xKmfd7dDUAxwcveBGc2Jvtkj11SCs2DdP32yRc",
  "key3": "ohxqXsq6rZWWqPPRFmZb9qot4v5kj9MMkNz2jbnJJw9cdQiNo956uFjeCFV4n54Uu2B8N96zriQFUbEZ8uonryG",
  "key4": "4thRgMka5e6GLryfgH22n12muzLkMy6vgBLHmGwGUuFJQfNqDEkbnq3sMpdNTCoS5dDREUJfhP8UspJFs1qEKyna",
  "key5": "5y9TRSRnnhFgun6c6W28LufVxCJhPExn9nZbbZRWAQJsutWVpjFFfZiqY17VCKu8PJuM1QunvhgyrtGNvNh9cgDk",
  "key6": "5sNmNAMx871cbgnNnZQ5aHawVX8BDePaVhYojtarYeDWyFTvX9fQh3eKo5LG3KDXfNTLYcGPMcsunpoimt4q1FJz",
  "key7": "5gMNTfM8Vef7q6HZnXggwCWpkMUG1gQgHPDE94CFTSLEDt8W7k3gVDfT25YbjLdC5ccu8sx5dNCaMS8Ee8rjG7U8",
  "key8": "KbNue7DJVTM923YAMAgFzqx5aBgV6ejDS2GJwqb2y1mCPRKhsHDhu1QgUny31oRYogq2Tz1UVYNhtYUPpVZRM6Z",
  "key9": "22Cww5u37u7Qge44hvfLJcmAUqpX5sadRu6zZ1cMyV1oZNpALxU4Xevnw29nhbzaMGtjC9ubdiQsumtDL5szYHLT",
  "key10": "4WAek3nWKRx9QzXK321AzZvY51eb1cXosztuSfcrr7EqqUeXrSXL8kEg5Z2LKE3X8svzQ2mkxzeDgMjP6ZQWv2PK",
  "key11": "4LygNAd8k52ZhFXRvHpKzyPiVX8DDbw9yWdTZU4RDZT8gQ6h42XX3GmGxWowqHvWBa29Lq3SkqB2wngisUkJZHWF",
  "key12": "423XfnAysADMUAW6xYVZrDSsaoxZ4CkE5PAKxqeW4jhGzs7G8KorFE6ftw9j85WKfqKzK6ekFFADCcSdvCiw623F",
  "key13": "2p19aJ4ZUQfrURaZUL3e8VaC297HArv9fUERhER7hgEtd9PKixdGLUPkKfRwDDvBpa8t5XiBVo9SPRGRtRHYbrFi",
  "key14": "4MrWwJXmfESqeA4UC5DBgUFDBZQviwwrgNfJtC2okRvBXsRgsxxn4AcFJdcWu7iZindjX7DzRwYV6B33va3jzmGe",
  "key15": "5MvAzGGYRx3DTKf27WniUm7MoKFQ7yyjhfH8yxE2dKwGrEgHgu7E4zebR3mZnZNVMP8dixuFKpgGEKj1SpzaABbj",
  "key16": "4C8bxzYeKU7bsxhS3LQrQEHZmAyq9EiCGkXeJrmjWzCcQSwqjC8UH3qseotPPn5W5jbByRFooEKxui46BeUd9x2b",
  "key17": "5nFxJE4G19dALL3NfnXqowxBooTuxjhcb59quNeVmTas4T4P9mEvidjJNzUdKuh4TTsYYYGrYjvBL13b4medcTgY",
  "key18": "3c5eXunSkM2ePpUcj8dN2wyDSUhYSe8PjS2pPCy3QhmBbHB3nFasWb5ia6tE8bWnJDXj17Ryz8YqeywLmPXuJPfy",
  "key19": "uewjRTwUvWwRe6Ynyg7RG9uYy4qn5oGyGTjNikSm9MhLAEzT1PPJnYZJwwPFyhAKSyycf4F3m8tk41ukMPXqfrK",
  "key20": "2FWo1SqSik5TJiJkP7W2aYhWVbVVdPyPVwiwEaViwBc2eBZ4D6EkJWhMrdXhBtCAd8AUCP5uuRTqkaCYErfPSkKk",
  "key21": "3Nmiwtw7bUPNMFEBb9fD339figjFQkNDiVB5wLuoKo4y2kaw7WsxrDrVyvKXuDnFnPPHSJsUVjx3AWm58F6Fcbxm",
  "key22": "ZaCtFwRJZxsXG2gbSBT9mVpm1JeYajvj3LdA8Yz9ZotCddmievvwEbvBQ4E1DQ1Pexs8n6DStMW4nCjjSXEk4jt",
  "key23": "5oHJsDUpXqrLctZzrUroCaE7vXKYqCB8ABwKYaYAWLRbbDLZPckyCvPJaUFyvQXavQdyMw4RVa3n88J2cLHDCuGH",
  "key24": "qrSKkvoPYVgeZUNjZDGVFVxbDpdSZp3ZpHfp5rb4rxTRNTVX9GLs67akGrF6xN8SyAhxZCJZGFkSm6nVBTsN5Kh",
  "key25": "2dTcRrHG1q5i22d8jEsjprtgmpp1CdKVz2ihVyqqQ7nKhcmPcfC3Q4725EAqMi5Hrs5jFromzG7LbQquJPgdncmy",
  "key26": "5usaB5Jbx4SqzsrCR989LK1QvDcCu7Vby9CdSQqWtZiFR2Fqo1fGJnTV8RLFU8dHWfupnwjCy3KWVVWo9nehWBWK",
  "key27": "2T44iUBLvagWjzNEtfQRRPSxxiFh8EoGsAtDygUnicDJNTWRBMGG7Uq2wD65RcCpFo4pq9Ztwy3ypvoAkH2iEy5L"
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
