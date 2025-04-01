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
    "3njsb83zaCwq6WKkkn1GYsU4KCQ7JioiJX3GMbc8eXSN1b5r23dxL3HzLx6zWKF1PiZhNS1KbJiaFKP44G4xQ7zn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PsfbdrDc84pRcAjx7q1X3snCpyVCracXyD3m1ytkDdSxh2nE6R4oSJ6nfTpACY9nYasQheneu74EqVqmQSfrYcU",
  "key1": "4xXs46siLSo9YkvomUzvRXwZLRxujVD3FfPuxyk5RjnayNBtVxZ7guUPipWku5Skym8E84jGQ2P7WzZgFLnJNjYN",
  "key2": "rGeaUn9VkCTh4BogS5X6ko44dQSpW1sWGm4YCdCEFgLE68WXnSSMdvTKXiJGjzLUpCGycAu1ddr4aHEnZj7TJYV",
  "key3": "5v5YWu7rNc8BvndCukyVUHb1gM2unJiTGwScWMMZJmiGLzY3Wzt223gMf97ibaxY6aBUEsXJkVRW9v3YJwipfytv",
  "key4": "3tzz39LHNJ25nyYUnKcny1sY9VyZqSM4VgPSKmrbuXvTa9Jm9PF9EhvNomM3cF25myvTrfegETYCKo3a6fDtS9MT",
  "key5": "3zvXfWedwr9rzkhaoNTkSvM68yf79DVAHxi6PLr3kixW3mp2ZZSyPyTr53AmD6DxihDPJ9fecHeitFNfcWgnfqBw",
  "key6": "4NuABzs3C1odcUnpCBwDxmWos5nsKQc8QkHUXB8CqDwsWreTdDRpj4VuXUXAMRJPMCeVbGEJPvRpE7vcFepwwio4",
  "key7": "XCjXSnKXkdCcvyi47CGxMGNk2NoVtQrDWqnR8jScubfAASzHMqnaxcoe6fo3RXDrvJsYTMuV5cZnsWU3cjXLQtK",
  "key8": "4CV8Vt5VPJwximHt4rgqWv7zcgNYmirbQFAM8RmuoAxkb6m9BCfe8PHHvZnXxCDpKsCYUy9CzYcJnV8DuXvVL1yU",
  "key9": "EZamuJWAYnaHkAAsAJ1S5yResQVDLiJVWJUhf2afaUHh4bwidP1T9c9tvpyDwstQY6G7DdqMDVWAm5WScNdmsQT",
  "key10": "JGFvoNkumugjMu9uG2GGjq49SKVtX9hXW73HM7wva21qtxyjhfhZMntUt4ArtKYTjUWsWjCadvbRUP9kBQonxra",
  "key11": "5RvvpWcCs5sdoXJjXyMGP99EzgrAbdJ7pBAXKQVHK4CMA2kGbkn987GYmD6BuYfNmUh1178TH2FtP9FobP5yrkvF",
  "key12": "tg5T3wgYJ6UAheXKT5NrceK2KsJ291gfd58LfZUdAY93q27Ga3ScDoRs4nhhhzTMzgaTRSaxcvXWbXMQwahhRbq",
  "key13": "TxVaYLgQxQoygBVR7A1Fx8bfHwkByCEHKtXEXHFgYiwVzHwY6Sch1zRi7eiTfBhShqbqgQshsSg5jVuu9t2SRN5",
  "key14": "2rVUbe4PCyjjBzjE1xFxpvGggGjmdnJtZcuHgqhDbvApNYJWVYC36r9KuDT7btYmRu2xbSGfQKuofjxJkPdukmpS",
  "key15": "4nfwHufJNMM1qSMy6q7r9reX9Lv4nZBbqj6ExmFyuPrDj6Z8QJqMsjPSM3R13feNSEexzKgJbUqyn46Ypk4r4XrH",
  "key16": "4JXBXQFJhaqGqaAWFmKWtorQa4hJ8ZXmgeuZwpkbK5HxVqAf3ZzpXvkwFoNZz2msEWSMX1wSVBJZfEvSLDepVogi",
  "key17": "2xjnpvSeRNKiWKmfDtwDbwMw5Rnn6fm1CbayCJq1abdywaUs6jE1Kigij1AkzYNgY1EkAoRckVZ6T4SvwAzzW8SK",
  "key18": "5yH7itSWkVs5xdKx5a1HJVvVfZEtoqMqVjjxeFx7L7fdfQZqZKrV58xSeN92uFPXS5339SRio5JvRa58vHstmQ1g",
  "key19": "3fVNvi1FPzw3krdJsEUTicW4hN3muUuxmXigNKkqhmb7saDx5SXKFhwPmAPLrLdVXgkQt2ZsAyuXo85niV4QLVtY",
  "key20": "zhLq991HQFL9VbgdN41N4Ni5fpBZxFHguNJTaSfEhQPcQMWojrofipczSW3f5rQmkJHs57bN3KG2jJKxY5QiKAu",
  "key21": "tXVEVR8CFxF4vNfbs5gwmVF3JjVXhvvQt4YBYPKfUM28o6kTgcat1GtN6e6jcxk4QCGATu1mnd9s79SVgvhY112",
  "key22": "2Fi6VnYZS3ARHvKEFLdkA1VJcSquxjs49xQnLh36642wBqPL6ciqWAMLezj8Vkw8tP6rcdTsveTaaSyEgiB7s6p4",
  "key23": "NNiJFaM1LmtmZqumQmBe4kAYWsdL7bevdaRp9UteYjsHRA6iP3MmCFRKXGhDaLjzenh1atoEBXDNuN6eak3wrB9",
  "key24": "ZikawdmxFgS5wxXTnxihd3HyBjnEHFKBLw8d8n868h4PeTsSQ858RZXqQVtbcGiqpRFA27DGEj284Z9Ws93odi3",
  "key25": "2GEpMJY6PdP6WLJU29cMFZuyG112PXwjyYxabx4M4A7Qw5AgfPdFPekfiQJd1Zh5oazPAsRatmDcFzv51QJ9Pd9M"
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
