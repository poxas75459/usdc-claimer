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
    "2JrreJHBQ1Yekqv9tC4JLNcNGUSCHoWkXdYAVroxf1BG8tM4g5adBNBVkSRTrDPwdcDHS8veTtEniuLgWDzrgPtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GpfgNKakmX38xjXoPdRH1x2nXNtU1fbNQG4hJafXpjzWxpiTpkFUx3j7VpeVzhekwYtjzRHaG9DdTLWXmLMUgkE",
  "key1": "TSn1jBVfEL1JCxSmq6F3kB5G4LTbgFQJiNLAyKg4ncSysT932nv6TXxrfEsD8ZksiogQm5tuYwwjTwp7ufJ4J4S",
  "key2": "3Fa1HGyEhfnGKK7fMqJBmssHC3Lxv9oaCPsvZtn4uxNgWU4FnNHPmjhGWFJuXFTwwnqw7B4Xj9UhWMNMP7GR2sk5",
  "key3": "5eyTt6p5rN4oDSY2TNH5KhchQLMBJjpQw3gEnXdtLAeBWeGygpwwKpX5oALsu82GEhpMf6mRQp7j3MgbNey2ZSgX",
  "key4": "23aTXtP9ZdHQY5xBDirXBWZcTeJvGNGSmj35CXZv33EWTD5SGbxk5hfP6T8ZLw9fTy7DcgoirJ6EXDHdZngebZLf",
  "key5": "2sm4u5u6GbXR4AxP7Va6APNzVmJwvLbV53PkVPRmFd7AsNgUtwDUvCbfmgRJn1vv6P1bpjSDfCAL49tU3of8wh1P",
  "key6": "447Zq3pg931NcXtk3RHwsX2t3W2SLiv7Q3eLuy5vVSkwVRLsinbfGkS3nVQAKPMTfv8hNPz7LyDBxRSczapSG7PH",
  "key7": "2m8VWRaH9z7jSDTbjVmggpenZ7LENxTXzYNM1q4cuH6Ff4ZCkbHk666225W2CesrS2rsjqUcBuXrQMBwHMKMVwsp",
  "key8": "22wGT34AzBQhbWYuqEJZBUy6NskKJfWoDBp8et73ze6F151xEWz141DtUibG8Spfrkp3w1Uaj2hK32rv63d9zxac",
  "key9": "4zXryZ5kHqhAbr3JhqmYWGRDcMDf4MDgsu2HZVfVt9SLNxusitrKZxTXTjFzMDjp8VT2cvYtN6gS5sPMh5nxnwTi",
  "key10": "2c29ayc5FEfr661vUodRDEesZoQ9P41XnUdfoyJZ6yhsnRZJuu6cq6BYPYixckZPcRQjVk8Ljhjf4DLtBUVGiYvt",
  "key11": "BYPcAcVKD4r354TKph517Rg75fA9cuPL7vZqYAV3rnyUaYn6wy29bgwRw5Qxx9c4JVA65j27zFHa997Aqya34ij",
  "key12": "oyhie7e5bkWTcHWpns7X9zD335HBF5TQYeMdMaGGNZWfYVnexSNVsCBefWEpLUKb6M94ji7hjAjt91VJ7KbfV6k",
  "key13": "4oAwBCH5B2q4dGHWEVHtEmCrcdikAGKcX5rqvpZxc6rZ5SF9dUWybnaqmqUYZwCzwzs5tuXmTo2nX9kWFofgThpS",
  "key14": "3QGaMiFQWcywwjU3mN5ZJ3VTv9QsfiFfGAh3e2x8oFLoGFNCXsyJzgpCkgiSYmyuQ5hpEq4skeDx1RmyK3pyYjMN",
  "key15": "niLHqrrya8ZkdjKpiC2mRaAYuiWFvHdrJPhWpunj5GxEfi7492XH2HvsW993Cz8Un8qdeeD5JS4UwfYPXsS9hek",
  "key16": "27Md3zhvqVRB5TJx1UDbeZEZgZjuKPrSEFCu6MYQaDxrgjvX1yHf3WULhvcCgxYnfo5HpFYcsqb6QUaBZ6pvnMGE",
  "key17": "3prbTLfe2sdgkNAkHTVx5X36nYPxHiy7VZpE9v2E2cAK8TRZFWcbNoRwG8hGCDzUYAfrhprArbD5L1fLctJCQbYY",
  "key18": "5ivyCzUmQh2SXynGebRzC1WMW8Vgo5Mzq5ttLaobzGk85NJCSzaaH59MKsiC4Ga2gqnHRqWLwuN8nqytzGyevwQC",
  "key19": "3824gXMZ9tdTM4H6VRzZx7axnB28qRBVELhdXUxFLeopbN1kq9VKBmNcjFRp1j4LCtwRv2zUpr7KbJdpQxe2qWaQ",
  "key20": "64rYSn9vCgzczGEPhWBjQKWi9mVccgJBGMZk8GQhVdz3QkFRChgbfQa9qKkCdoaTUUnYyQWs2eWPowA3QpzeHq6c",
  "key21": "2Kr2gp1uCLtQFXDm8GVNak7X1w23iUcr3hx3gK2XLgkxo862KQnK9edStNkqgd7roFqQxrL2MVWftcohviVr8bhf",
  "key22": "5mJGhjeQBskC5xonMLgGT9GwnPmnyuzcjcQDehujsxRjuZ1MzatN28cGKP9BAjmopQ7AyGGVPUpo6fNhjwPNERNM",
  "key23": "5pHs2jQUt2hLouQSmjc8BF7JsvZtMacuptUcwZ6YG2BHWuzUNkLrb2wBgx3ZYNcwjRe9WDqGC7bDWEYU6b8RhEHC",
  "key24": "3aujyNLN9sT6GbuDwBvRGKFXTdeYho9UFnZJCdKYpeVvavbWLyfU65ke1NfApwS2HXYXNWfmWfnS8DjhX9sFZFgw",
  "key25": "qRBoYiKN3692jiTYa4zEDySp6EuJMeff3ASx41TPYmR1cJeKGKx8TfEZG8kCE9b5iuULUCmms5gdL9aoYr53MU9",
  "key26": "3QHgPbLtL6Zp2A2hfSwqpkJ1XECTCWk9XgmshEnHzrsZGx9wH7oMANw3xuzqZx751bur4Lj4sjLFqW4BHZcV5ES8",
  "key27": "3FC5yKRDZcp168y6DEmSyiw82oyHAD8VB1hjDT5nYiw761p7FMZCGbHtJh7AYLVXEZ5rYwdhYZarWcty7gbEB3CU",
  "key28": "4Liv6ACgeb2jm5A14s56NXk4PMgoPrbxx5vVRJUWszd5t3UR7tuzAvVniuqsmBTBjy5iyrsxPT2fS9AoAb1Tdd9L",
  "key29": "5STYyNH2LxE5ZzY782t1cD5LA3VxxGxAhyJ7vqVT6sqYKkePUU8mgJ83L3kWhs8vipmMTJLDgkgqeHG7m251Qejd",
  "key30": "2tk46qsP6ZvkgcbCd6S2BVo58cYM5UiTajKLybBeQdQvHGKsscYDm4jwxXNEfFL6JXPMvTTLjXbG9ogWVYGDjCuH",
  "key31": "3bRMuGmUkx4xnCf1C3dSrPbyr9U43brVyH4XtRyo19C4ty3tE6K6VfmhbtGuzvaGSnXifE41HbV5zzECWG94Dp91",
  "key32": "3vx5tVj9BhySeCTyE76bMZmQHU3HuRCiknxd7rRm5pQRbk44xr9xaveuKY5oZxqD8kPXivqU4mUkYSR8NuxCoxkR",
  "key33": "5UDvQjgyDZMQCBN3ADCAScginhGPsszggsywk5GkC7KVCHkyD6saUfLLxb6BZSQKAhYpYajgnGrdwpRYeFXJmZ8v",
  "key34": "2yG2eLXDXwWyc5afy3RVsEKmKnYomDRFSReJiPCTUjXbf992asxcYrsDxK2u6T1FSkVtLKCntMMxgX7DfXxL8c7N",
  "key35": "uKmN8DK3BY2ACnyT2HBUUQxjr2ByAJhu9TEJm9VerWDLE8B5sREu2MCgCYRzvdMg7TM4jgQDHpjN7UgKjto1jzU",
  "key36": "65NUex38dWLeyoE36H2ujbvbVAEWVJ1fNrQ2TXrPJQMBkVz1HryMxdJDRmimnHaiiH7AZAui2DthQmvvWbiPreVF",
  "key37": "Q327c5MLytLckhi8sWSMjNSvESKmFfwyWCd54Go5dng1adEUFP9k36aGk9MhMxZjToA2bUuSikYXeYchnK6YU18",
  "key38": "2QuXgDn7i18BfBsM2RvHdyUsiwNCTRQiFdDo2ehmy8m4njY1BzFiyHPDEqREHNvpT67bddNAFH419jp25r6Pvxss",
  "key39": "vd25keCuYD7vwd3jTqzFvGUzRHNBAevzBoiy6rf3oKMsYV8kssvKQJmsS6ZZF6DTnztnkztM6GZhQGCoJqhVCZZ",
  "key40": "5Z4hFaccyGxwjgoqE1VRBRuibNCY3mGZgykwsEuCJ18nvBpcRqgYss8cV2KB41xD3hsAEXJcUXBmehKXW5Eofv8c",
  "key41": "3zhZvEpbbiwJyi9GUnHFgzN75zMRgsfTEdtc9BEECbukJAYZnw4X4FUJbbjJPi7G89HAc2tDh4NN9G57LBbgn5VK",
  "key42": "3ogZQaUWMF5XVFKMeMP2ywvV7eedxdf7vFwWW2sF7QzfaWjWQb9yZoQu32zHegmcWWmm1Dz6wA6bvcyy2KE1qJrT",
  "key43": "2U4MxgTzMy4ynoLWhrujDDnu49reutoiCVPktaf7qT8veczt1QRkxvidTkQxpHy6rknMy4ATFMKEwCN6XrdD1Sx7",
  "key44": "j8JvPWNrNE7jY7TAMwWq77ff9w9NSMLo4pXuZ4oxG4UKxad7PhvakuPq458hiMPSVVCXpMu8EUvJkiLpZtD1qVf",
  "key45": "Ev1SQu2XEE6XwnBpCH1YDZoAantZg6gJk7gW4qFRjjXh7do7ScaqTGn5evUm2DPgczZfUmaxB5gsv2yMQCWUByh",
  "key46": "4qngLvfLrrD8zK6uMthxft3zGEssvn7c54qDShjp5cNNFFKtfhWLYLXnUygszCQoY3WBrx3Jd5ckxHLLmjHvXcCD",
  "key47": "44jLUECcwcWiGf1hpv2qFZauf3W1xsSK7Ek3htFv6PoLWCrttQK9cAGQjBLLpypg4SXy7ZmN97cdeJRkerJPABma"
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
