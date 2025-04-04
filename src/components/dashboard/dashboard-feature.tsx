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
    "5HJhcfaFiUZszrSoQGXLPHYBwVbVJ8zXg9uqZhB48fTYefPL6uuH7PTqLqYXipxutiUrsHtb3tVnntHnADxAbJav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ejrz1342DAhaiy42LZqsC7yLgHDHXycTD5yu6EnEvaMGb8nXCq1k56VPit8tBEEsdccLARL7c2Nao5vBKPi3iaP",
  "key1": "3vE5LCgijG4moR9gNnf5nH9pqpfo6MKaVsehzZNC6BS4h3qAtnp1uwFTbVabaZtmcptZAcXHkCrriVjjUCeEsM8Q",
  "key2": "iPfiUvZiC8jLSoJnE72BRZxLd6QL1ikCJYj4xudG5Lb8Z12wUfT632deci7ZXaZ8PSDyN5ejcysxKXyENZBd9Ab",
  "key3": "4KuEWM46ZmTtEJHv5DuWZ9mK9UAwKGYdynEeg57AURCcPLtt8qEesJRT6LzAPmeSutksnaEayVwhUz3s982CdBR1",
  "key4": "5uRnYMcHvUuHpoGubpPFN1VGNtWTn2BP5ad7dLvjdaogem7K3CgoicZTs93FjFE8zjtLoYePc9c4qH2VaQgCSNSt",
  "key5": "ox9XGgbqAhTGyRMdRJKRCdh12kytgwKE5U9BNmvtL6KpnLyPrYBNXFKTMjWVMHfvNQUjnBpPRSTw6mpsf1WcUrH",
  "key6": "4rDi6WaK2EC8GrJMJNaoHjXiCt5q6BZ7zVeWhUB8wHBtVJkb35zqhdsYd7UYFBzJK5m8eRbuyfEm1Rks7XmQdGub",
  "key7": "22UMmF4CUqgQSm9FTtUn9Z3sEmCyLbkGdXq8mWa9A4KLQiLJoi83JYHkSQoiLg2CbTfsLs9XWddRMomJKVtbeWiz",
  "key8": "515ph4MY41VsKwu8dHDrhMymjytpAyLqeQ33Zuj4wHu9ebegUZJv2TW91VBgmyXDkQrDqYRRWt8yQKPMaXnXkK2z",
  "key9": "3o4nsFz4xhm1jrRV3zfa6NA55QRZjMsuxrLVbyBL6s82Wi5Kassv4MyEZQAKvLpYCVwPdmaxfUscoZ8fKe8oE3zN",
  "key10": "5caseUvUYJw3tDzv9Yu9bUGmoag9sH5CEjDA6RGYgNitFHo7ztdhcoktzjjBWL3Tk8VZC8co6nbGNFgWbS1xcq7k",
  "key11": "3eCW2PFv7M1rJCU5NpJco4L52fm38yvxGSZLorV5WsoAK8dY9x7DFmKYFhooskfhbBzfQAVkTCNXJnunkmnv3gB6",
  "key12": "5MBoUFppZRQHak7m73ZVuMVwUNWxrbTeu2NBnGUh7BcqVRKGkmSCYsMKHjzj3ytow9UkWkCts6N611ym3pq56x4v",
  "key13": "46SVVBHDgwiogE8rNuoaHyjhsEG74C9gvVhVe3p2oFz9VyVyn9bCyyTahzBcJEuccNSSF72CbL94nzWXPCpNtrSa",
  "key14": "3j948gfPmL4vzZGgTHjiPuRkeJGuCcwipAGLxhBvbPouYnrTyotgbo3h8yZHYa3YE4byLUAA3DGPC57tj7TVEPQh",
  "key15": "4NkLQ74xJxytwtpwRj5t7cvwGE97gjyPZq9g67QbtEAdSwL5c8i1rwFjDEFZtCiR67MXLAD3fnm5rGoqHwqBnePM",
  "key16": "mxcsMpARMHMbtR2XK3ipQjGkSDc6wdAftssJnujU6USzuu89V2N9zVVpFXBBLNk6DG9r74DrMxuJXcXF8QjRywc",
  "key17": "62Ehi45wqN5AHvFbeMzmtjeYfmyfvWjxyvvmvzFPuWfhXtWisUPDvq7RLtEYN6z4HNjCsCgpwuH86NFgMxo22x4k",
  "key18": "5eKjyX9ZNq7kGQ7wy5bLb3t6n4F7aAPmszfviCS762uCBWrgs6yNojRU7jq7bdYhpBjbTVQzT39hr7jZocJjkMAp",
  "key19": "2aaYvoxrVsASGhze7f4UXeDPHWgEV9CApoGpQcCchhHXzppRUjUgQM4CJh8ztSSbcEarfyd5ykX2248RAkHheXdD",
  "key20": "kKwjhiYD8PmynpSTpbECbVAZsyTMLcVjBacypyFJWLA7Tqihs6Ue2pBmPGQd4WZLGFEm3n8MZnXESo8of1Zu3FJ",
  "key21": "2Xcv4TFuutwEwiKQdDyhL3YARmMEWfYV227MxAPSRYYdcE8HGaJ22Q2CmwpUtZ2Kyo2hAVsgrkVX6yep166ZM6Z9",
  "key22": "qUN3GJgRomu4bNhuTPKNUx229cwEMK82AB4No6WiQfBcvsLCRdUiFCQGvEdFBfokWqQEmzPmKoRmLp1HAWJMmrP",
  "key23": "FcZNvx8WhM6vHqvgbPTCLPj9MmdxftiYuDehXrcPpEyfuoZZeMccyK7WWBhjZ7pWb82fsSLciqFKBtTKo2amhuW",
  "key24": "44vWihf5twM3XrJdSdbnTxyMbcJY6KVc1KZHXwShEVVoaCWoi4mEBkXLjr6ZFY6tmoyw9jXCVSpQsPQM3acCRQzL",
  "key25": "3Cgjbza8Cq14p2nrkfh4pHT25wVso7qhHo6is43PGiGaoaMCPQXHeQgozhXoJhXMg42HKtnwFu5MnGSQjAiT9iYE",
  "key26": "2JfpogUoquaM2wBzWD5JjMo9UKdXatnFT1Wu4NXbFRU798ZZgW8RsLQqaJsoc9PzE9fYrQtFSXzjK7QsQtF1oCne",
  "key27": "vq7RSXQkySWPJsGyNafrxXFRf3vubosdrmYcSQdEE6u8AEvUvYECUKRpR8BUsPRXCGQJj1uvaWzTbvfKGAoVBdP",
  "key28": "3nNUwVnMwm5K8BN3ojVt8ckdj7D5MCr5EkhPEQ9RY44rM3FCVBzGsSDzZ9FeudjKp7y6H5yScxwcoSf1jbwUMVxb",
  "key29": "4TkxNqHGGcHPQoqAPQjMBLHWGBH1JjysjphUyPfYc1Qgsinhbc6Jh3FUcrJTRi9m8dqQPBZtuqW7BefbnsvbZjPL",
  "key30": "4Z38ev1iaquFCMQfM4ext6f6aZ3v8cntCUrRK6QvqkZSeKuCv9Ywf6gCvd3o1HjF4vyw6t4sDiH68Guy9UfzVND2",
  "key31": "3yd4Nw1fbV2ifaUGPRnsarmkZyGWyms3GFrVY4RuPrm5hut6HEo5peuCkLP2BnmsHpSdd3TEg3Tna673aMLe4Bzz",
  "key32": "67CeKZknC78FnXeXiczw4Lx2eEL6NnSd7TSG6ZakTKY9cCo1qPpSsWssZwkT1Gk2EcqVSs6BYCoEfMbjzSR89ze",
  "key33": "2g1p2Yq3CoN6V7KwNyUaRGDooZQwaPBz1eWzKcWPRnNXHBYM7BQQe48DmrRYpMbkucjCTbWpHAE9GNoGZqtSKEw4",
  "key34": "58GUetiL977ouBn6cnkiwCnsDxZiPkrnsK9dFjHmFGeHL6iUJocjLtCqLCZB7CF8Jr62RzKnNo8z812QK4m3zWTc",
  "key35": "5uJcEKycY4EPW9z4M2wDs5Krb49JMgrX47s1uZtuw8sLKbwnLNj7ho1dUeZNnfqyU7wCjsTNQdBxthmzLAkX6mw7",
  "key36": "2e3cfT1d36kxzSFysvkr9rnRUJEakNNGEZfxah1UBhTZkXT7EjbwwQmWQYKJAJiDo2mnBo733VLZd4wsjDNq22Rk",
  "key37": "zCfwiMGzPg4CSXmxRWvbNazg2cZdB7wVPckbKP9Dxbgdv2iJMv1r4K5oynki3bpwRqe6AwmotWP8v5EQ5h3vzwX",
  "key38": "4jH5jdXseQXVu9iy6fLATXc9fMjBqSezPKazEgjH7nEDUCg4EcDneHwWfKNc4xLQQ83Xrm45ZjQx387NPwvUBBqg",
  "key39": "5PdpiVWV2PwrqFEfvTBNhVURmvqYYi2BUpZkGMsk511wHJHAuSrJeohwTWbH86maQwuGJ2DMxLAQDKN1QPdJE1Cv",
  "key40": "3XPfRHkQg4tNWU2LkWCtvt6oUZWQKpjBnXSVYrbrsFkEvVWUduLvPQmkAX4sQ8UD7s1fMPriLYehGs56s8khkps7",
  "key41": "2SiYchVCp7uCkh4ftYyrAVjdDAy4BCqvyUSArwmt3KuizRXV1Qn4sf5x8CLjQQveYHadifFvDK3KG2qgTE895Yvn",
  "key42": "Wb3314gzCpjtjzSQmkZRQr6KKJBHQRC9xvxtZcMTbxqngRXXSZqBpmpUL9bZPAJNoCHs4V4E2WpDEE4cGTktYaV",
  "key43": "5inD3btoB2MHE7KLMHHm2WjydBb62NmRnk4m7bm8M93sgZ77SUPsEhcAmUS3n7tJhvFFVQ2gFf29a9ZBKBMAML87",
  "key44": "8mJspJsB1xW6viQokT59gG1Ciq7C13A6YAb9NCtU6bmzqnMx8j68dFAmmzBHtnJko3XbEss4wApz76quyyXVjcV",
  "key45": "4fakrWQ6rRm5BTs9SgHFJChccpGhSsBPmUMb3KHMMs5kAT8bKJAdGWmX4iy51miBu3DDkUXguRfK9CeXzNj87hkm"
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
