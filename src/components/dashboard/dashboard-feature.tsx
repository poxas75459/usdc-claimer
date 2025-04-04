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
    "66bNBvBPHBmwJ76hwMorgKu3WaYvBJDXWt2gK73JuParDWM74JotWboYQ4vJ3Gx2RZfnUPSxKaFQccCjPpUoMXuc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bd6Df7EwqAynsYM9MRkdwwAzUZEAGXVnDk5jvQLV2me3hU6FWCTz8kCB2vFCj2YaJh5W3b7HwrZy55bFwYaR73e",
  "key1": "42RkEKw2XMWPwXYMR6J242H6fE5krRexxi8db8dzvV3BCRXsVAWdbo4aMcfFz8PaHMamdqkU7VbUWrjQbpsDvkow",
  "key2": "5QiRf46kBKYBgz2T32kkf4UBqakAXeGzB37MXDrxG9U5Q6iTBj2kq536Bb2DSt3GGcmkHUucs7hk5M5KT9zC7V5J",
  "key3": "49GTn9rV8RtwNWqwX4SfqnfDKACorCKwjWJJggQtabwgj1DYSBEfJV8KdBiH3ExLv184QBtXHcNbrTBhdJeyPBpG",
  "key4": "WBxtbwtDGh8VtwRcyaNXPvCWpcM57cG39jsGWvKdghGw9uR4JuDdMd3yaDFAR38RZuYBzMb61H4ogtGQuCgF7pB",
  "key5": "VCJHZWvwSZ1oqBDNRxGvDpkT3L7VciWn4MRRW4uXuG513rakAWzRdGE7mxuQDQ11SQvUpGFnfo9kzYGnv291zqT",
  "key6": "2dtASe8oAQPucFGRic2BqvL4JsZw23cuW2pmDqnzQgbF3Lp6oofyZPQdFxxNXLyeyddkiknCbFcVP1X3xEtckhLd",
  "key7": "cSdHkXdkMCStDDJ2f6agvVZhN6mfWc6Yc8LQ17pNH2tmDRzY9YQS6S8W3ipX3eVvy943uVVHT3jiGrcS8xjAGi2",
  "key8": "3iNdPryRfJDbQrGShX9cTeA8kdYw2pkrPBnZPyLv6ymu78s5xCYWhBHKxTzREFbJPVUrffYpyqJu8VMwqyLv8Jgd",
  "key9": "WKgJCfcjkhhBvV3g2CECE9Sx3qS7pGQS1LvwVD2vxK19QKZfDsWfNP5Kqxk9t2FMuQN6JTBq62yNLVpAo1BXx22",
  "key10": "3Tz1ivpAETZWfWmYyJ8DpJT1vqH725VSgDmnTfSsTRmBzYB4iHEMEoQ7q9WCyP6zjo3KHZ2ZkVMNSWmvHHpHUuQ7",
  "key11": "4AFZopv2pT8AtuqHDPQ2tRdKopSeBGdmjmazfZhk1mbi5Btn8s3qYNSZNBmYYr5CYgjXN6tb4LD5vxS7aN9Jfntr",
  "key12": "3wLDUnq6VYrdznoWjuox1meX9eZB7E8dMiQWvfMi3sUDrpjzok47Q3yPf8P3YMUn3aUQ68yvjH3D87jw8Vh4JM1x",
  "key13": "4rET9LGCPZXM2jqsACD1seZPByQw2EN5129kpWjr88AteF8PCtY4PJr8kikrb12KArnK8W2uZdvAoxD7wvEbEyAY",
  "key14": "35WV4XK4eARy4Z3FGEZSmMNqfLUcYWJGdroyp18XvmG5uvTnSEsVCkc4qMGSvAAdb8bjjCn5nuMg55t7WbgHVWsq",
  "key15": "3pTM5Ckp9jQXinq36VxaUNJo3fUYXXZpLs2ZYB1xmzHAZBsyq2sRYDk4iVtoWMdGdJZeXc5wWN2qwhXNNphdcMsf",
  "key16": "27Em5C4E1QGh1evvz1ZCXvfYarCUXKtAiitLxtxYJLqKKhDwQryXgMRhwUoLzhLDre87divSJEAaH2LTWAN2YmJX",
  "key17": "4PWSmyGcqaK9rdgPMQQsMA9XS1jaNoagWQPHBtV9LxhDPX5TqJEq6oRnQsQnJtQZAPvnqcKPFyoKC7b5rUyHovdg",
  "key18": "5xKVwbB922gMpM7TbjbKpi7mmXgAa9rpBpVQjPKZ8WMsLFbQ9aSzYg3bo9nTznWn8wSaqTtA5vCFDRdXAa64VKu8",
  "key19": "4ED6mZNXVFhg4DqCRi3y6rMq4Ss2JGa8EE8hzLaYKpqbzsJuKXUJySZQB6A5Z8TCLdz3xhhbggtrmmUyt3aTZTak",
  "key20": "4rmRVX3GbEixWtvpwNopWVHeFGN6s3dWyjzjmwSngKFr8rRhe2oV3Ksc8u4beGbUvKGUz6NR68QXewkDh3DUUCVU",
  "key21": "2kAdVBfsvVh5a82UawsjzAa288wuECCVBf3phB2QPGeEDNLzdzPCsFetvT4p79g5EVQh6XBMP1yFx8s4f8MuxXhn",
  "key22": "7CcPyh4C8gGD9BMbsDSeEiG3jtZ2TtTSWNr4XJvFPcjjWWTYEbim1hUzxCVhJsuz9G3bQUwQgQkP9CEf8dPZTFV",
  "key23": "3u6TCJie2ejSd2hm1HUdyN6BWs7iJyWqs9ZJSyv7o7T8sFzRJzkf48ruWsSp9BvNUDQTjqeBqgETPZNCSw3gutJi",
  "key24": "5LdZ2ERv6DKN2UvqZCS2Ftpf1LYsfVvjw8esNTbB4pJBUn2VxJBR1GczLEBtnm2qJHNaKREHX9hk8qs5ULT7si5q"
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
