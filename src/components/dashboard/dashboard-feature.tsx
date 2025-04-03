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
    "621TNZwy92Rrnk5Kfk7ZghNVCSFXvaKPWYHN3DuFRguCRQSuWYsVeWMhjdtTXeEghiU7RGUPpsbMhfDRoqbpXvVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zCADrfqXZvj53d7NWTFqDk5VLWt8DFLeQdWuiTBVefVca1VndVD9GvKPqR9RLerv9gqkaA2815GGrWgCoBxECX9",
  "key1": "L2451Dn2VXHoH8FWV7GVdjkTjBCzSpksYTnMHxgUPDnoMSRTP7gtWMNdCKEDGvZxi3F3RxKsxShe5uMfq8Yd99t",
  "key2": "3zwCoDHTYUYJcZXwNqw1oMZ5WH8PyxEy4ZYVB3TB8pgdH1KjpFV6hnLfhFZRm1gk1cpn12vQLwocWJRBsH56HE8U",
  "key3": "4rQfUUB5t7TvHj5Jss6Y28NzrHfETP7vS58rkXNRMFPjpUZBdDcgSLonMNZikTCM6g13cor3jaxWqHM5nMLU46UG",
  "key4": "56HPYRKXj3YSo49vL3wxENLsDMHVzjXaZdpxZK7oWjf5tdbjYzFQu5aSeQuq85qarAVDYSLLdyFwANjh2SneH1MG",
  "key5": "5Rcy55J7UEZZgxfhGK1GTdETSPTzjbGikpLeHTUvxzDTdr37ADvKAcWgdLMBH6cK463MTRNU8GufqkRfsJt4PYdo",
  "key6": "5uuanSXTLHEAKTb4FPBRRKYubQ6KR4MTWe7XWpJi9A6jxJQTmky1KERV6SbfgtBBZmSvVeStFfagHQgeAKHv5fbi",
  "key7": "4P2z4HyZffEAsTQzKC3SQXX6u6rmNHMjSjPL1QnGf61XVFQHCA8NeJ776ozq3sNo9GgiNe1ersZL1i67n5pjoN2g",
  "key8": "h5kkBwJekpGtVYfGhNH8p2mXFuCiGVHQpTgdRDFfX9G54KzNPfJZpXmpftifquorstwEZYNCjrkHcEjr14Y2FPv",
  "key9": "bAjS7KVVYo7FuqSLL8hBFPkwjCDe8r2t9cnnhVvd7WQFpu9NR6sNVEisEi8Eq4AHLdx1wj4qmM63kYt3iw8guk1",
  "key10": "5YtCLC3iJScvy5ZoZY1rmxY2HaC1e785FCDT1ARSXu6xnrUBtLnTDCgrNaJiwM34uDAnir5m7ZnfMiyeJpey6iZv",
  "key11": "38gf8Ypc97dKxqEnWwkCr8FHrkASQSKZe574q5E12qeniKgP3KA79Pv49t28xzg2ZEYzbqhCrqZSjrr6Cu6Q8JHP",
  "key12": "3FUfJ6yV2i1EoNWPi5M4dC1bJavK56v5pKLLZ422TGnh65kLYiikEt7CL8nGorbydVJitEjwmMaheq9raaPsVYK",
  "key13": "28bvG6YttBWbob66SmWyRFpqfY6fLKNiPrbnJkiDRx43LbXYDo8R4zuTdSZiBoGLRRAGMT6VD25oMgF839Zepxyi",
  "key14": "46BZNQmewN16kLzVpA41qxS9vMxCYZFAWt8wsutYMYreBheo7J7nqZNqMptrhMxdjTpmx7e1vNHkCPZVWJ4UTgu7",
  "key15": "2Zi1WeD2PHW2cQY6Mo8vWYgbfaaWuF5JS5isT3jHbSUtUQTkLKQGEndWqGQSf1PQpGdzFqzZMZE8eQ2NECSi75eu",
  "key16": "64mKeKptEHCqrhktHvFYVsspxtevhFJnzTub9bwLjGmhpP2a8eZnFdx3RyeBoprWPaMZbwXtu1qD2SBFdozt5iKZ",
  "key17": "8f1jCLcmn6fQe5wpgVsLedpREPNmHSZmSXZfzz5CDpWT9BvLaXVsoE7uScBdxtcojXrjtWwcXn34ChfcqvKYSiy",
  "key18": "48jMHgeBXjXwTH8gfxH21SoVA3tbRVy8JghSKGKq5mUbjVxoYxpwXKWJ3xerToDrVVkCrMBchZN7Zo8DWh1X1KwM",
  "key19": "34N59YSEJ617LiCE84xE5LvEe4fPRqnZDhYAdMoUMqUYk1oyXqNJtSQkedvA3QCR8LHvbGXpPk9psRUHfDRHqxai",
  "key20": "5Jp29G2BqYyiuAj1S9GF6Aik3y4jP9dH7gHRUARi87mwgmtyCP7khbKy4a3Uhtj6nAN1HuJ9ePJf8Dn1Y7xgQVc7",
  "key21": "3PwV8AXgmTmC8cYjeaqZnpqDVC6SGSCuWPqQCZQGhZBEZFgBVQ7AbPqRDXi2HdtvZpDChcAiaVZgZ5K99LUKRNfR",
  "key22": "274LqSQ7FJQRq4ZcrDZwP2RJKeviRifjnXe7UVzXBtdtWDGZgFQth1hVXAQbwP34prE9qHPfDi9L8GtwPsVt6Lip",
  "key23": "5GZKym4aB5wnJ3wZqFn4Bh2T3355k3xwTKHUirprrBxgY4MFH3FvkEG79auZNAABNFWsL7eg9gir7kzMpnfESaKG",
  "key24": "22cxpLYpgiL3nnHuLZdkK5XFvsTNL2B1ANrP57RMh8XG1aqQRDr9V8Qi2XYfiXiqiUrMuGZeNmqDPEmPSH3kEduq",
  "key25": "2E9PrEkFhFvevNu5UYNkj9MWuWAQa4n6zQTHfScbvH7Hs47fHThp26FSE47813kEZ3o29a2juktHdgfaaSnumGaR",
  "key26": "4D8YDvMNQ12eWDXRHUz3LeNtcWScLnypbcxtkC3GoPhGFpxyQindrPkQe8ZtfefLiG5jr4kRqreb5P9kMwPUoThs",
  "key27": "2UTXuPqVMLorZMyBdKmBosP7S7xY4FjLkiteg1VvAguqqzjH1ephYKr7MPpMUwhv5qS8nwgGybDG3ZjANeedm3PF",
  "key28": "5F6XYomtqS67ujAPs48aCUhCD85ZTsuUvzZMqHXxZcfB3DFteVvektderviEEDwxTc6x6dWfaekS8pPaBR8MGtSs"
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
