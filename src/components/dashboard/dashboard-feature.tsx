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
    "4JwJd9mav2kmcBjSAugeq8jH7J2j3CTbgFN1HEomVzYLsJ1NbpTLGTe99gHUjDNKZbKfM4525Sji9cWTz5r93rrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q2Rw7Jx24jGVQbYhYaZmJ4cPTmax6umEYJR9Q16qpn9hALr6YCTMVZ7NxADjdK6NZNcK4CisTRtBpgkTxxrzLud",
  "key1": "SVqHQ6HppRyDUNgZipx2ivqJrCsd8EmdVq16ABQrrywJ7gV78f376AMk2FyPG2NmZKeJEh3yiexSCCx5u1u8paV",
  "key2": "3oFwZj9Y6EaM8b3ZRLXbV4tWp4nM5hZXNK3BXCLGSs6XUYPBmJGLnWahEMDMfKPm5aZCsS4GXF7T2xeidEZMbP75",
  "key3": "5LUScx4MSsYoRZyKuiuT89UaQxcwuX4hgb24aC88dRfg7fuCTAcKWgguSUrRUFviaYJt1RJLs94eNtWPQb3DCvaF",
  "key4": "5ZU9Q95Ghf3W1ia3NovfDWedEQXrPrQBU2V5h4UURxEZKq57PgWPzuK96pKWCxXaY2o1VeEMCFKi76WPFPwuw35a",
  "key5": "3QYa4HqB5uv6v2jo8JxxLGUc4c6AtwCPKgPiezTLwJpBtV58ywY9FgikvGgDYAg9Vg1x6sNkMj6sxPNBkxtxieKH",
  "key6": "3VhVfcwXnicd9m1WaJW9XBt4ZAd1gZTRFc16B2y9GsfU7pc85VhSv1mZKwH722i1c4wQ4yYhqA7CTQ5CptT1H7sT",
  "key7": "3T8TqoseJAA39Br7ZjfR946g9ZfUvdfvbcvDfkXSA326ZtS5bbQnkTCkEyx26BitWbqXoLwBYGuRx5eAkSyHDrkD",
  "key8": "51cpVWhHgaxQ58MwE3fSkW8gFJqH2oaunP27jR8Fjt93T21NKnwdd4Vw6EyxxaDeA2kdLuJ6bR2xdSgXMybzpoKx",
  "key9": "FbLvrZjsJsnETCjKk7KDarCBZdthXJ8ZCM7FB6NgAWezN4wekPPuxSYoarHN9dX7drFh4A71YCHzZm3RagWpo48",
  "key10": "3knZc7h5Fuvabnf9r8637QL9KJTojfwYDm9kbpb3WR5T5bdpje8yCduCbTSs9fuo6mcSBM67Tf11sMbcjagBN3vo",
  "key11": "284AqpMUZvoSTR9NTARzbCK2KNL44MaSJjgEheRsZu4umRYXhpabnuFfzpJ2YWjzunrr72vKFNwiWxbsqkmKEfQS",
  "key12": "61Rcmy8iXPTajcZbZ9MtAk7FE9HR7hLZfVNTfT9V7yn9fchr2xX2EZAsFHmu1N9WMvnbWss8FbyQPPRuvTXrgRtY",
  "key13": "48Qk7kteRRLhQKVxggFwUJ3wZgXk2sN8stSxBc419Uowctf9UHddPTjvmYhAKv6G9fQAJNA8v1CrLZw5NWz7uiSr",
  "key14": "4NEbCe48x6DbRLuYS96LMy2H5M573UgBAR84PAwwaZmK2P3M1T9bhNd9SaJcxx7JYPkZogrhUDW6HajdkswRCzJi",
  "key15": "4p8ucdDZG2ngzxBSgthusRuQNrgN1Ykc6z8NKRW4rmjPBwAPXzE56ZcgTidWVeJx4iz8mfoQjJ7oWesx4UDUem9V",
  "key16": "QKDmQbu5xGfpYyhrJ4u3RrPBuNkigqwDbsdv4RrxuVXY5CPibqRUJ1kJ8raSEapGqZJwSkcBDa2kqx1VUzPCPZ9",
  "key17": "4h2PJbf6Gxovh17mGSZYUs9BLXQKKdCa3h99WspN3PXQRc46j8cnNAbpL7Vb8EkuWthrZY5Ve58Pu8JJJqAWvJ4p",
  "key18": "4tdqh7h6sCD9HgbjNcuTipyaWmFN51xX7pRF2gHo5hqGFSekp8VhJ3YPtSTSskkAFtmV16JxfdPGrvBjoNPYzDUX",
  "key19": "qqkLF3KD8AYuAiWpE7wpmVRNBpJPhfAnvZR5E5FUF4UrucsGMrxjvnr21YLdizgNLYPFGhCM7MQN6oWs6thkGQr",
  "key20": "3DCgewBmKZ5UdzJKGGuDyfWvrpu3j8zwik4jo7ByaoUhEeKJ9uVLRxD1ATK3ZWy3JrK67DQY3kKRm41b21e2q6hC",
  "key21": "5RmPsZugRUits8Yn7ynL41w4sW91wmNk8EAKgvQ3ad95F8BAoApRgfhqdvsBpHVcPxtBgYtmr6oo9XYEHcJeVG6L",
  "key22": "2tKgMHFuB1sQvVSk5KDmC7F2GtmyLdJse3ABBaLHT67m1Gei75JEJXq87ik1G7VNUDSjHBnbJUwtBm24m4Scw4mo",
  "key23": "63WgiB34ZQdT3EsYMn6uYkBM9A4kSJz1qpMr67trjsWmzWqds7ZT78Rwmo5NnA9AsstxHTo8X1TVzjU5Lbxm3i3a",
  "key24": "4LCVLp2e9p7ZK4usG528c9A9hdNKUA2rM5wD9UPyapueMCUUjtw2kSM883wCFPoLEKSbuaakKoYqy69EMAFkLfRX",
  "key25": "AkoeLJ73qKMmT8xGHCSxEmY4xbuGAjX5GqiTNiaTqmVBH5vou9DfogcPFWxJMYCNjx5kkfKAE1kbkTLwQrX8X6t",
  "key26": "DmuxD8tsBBiFrwYN1sZ3eVovMLpDgiBHfQQ2eYksVMPYFXxT2vbCnhcbR3o4nGieSi1TPvsY7T1eTd1oS4wzHW2",
  "key27": "26YrBrrCx4fxBThSz8hcLtXfgrKi5crmhVyRbzy9e4L9drAjkDr7SSMZNw2dcoA5RmFs5Jnmjj2qe6JRrKkuRgqp",
  "key28": "5VmfSUxgz7QjVcPoWqrP2P5GmKsam2jnPBW7SqiKmWdZcD66i9iwHmXUUSbmrKd5Pnrb3iv8pBW5wZpuWFaGZt9G",
  "key29": "M6V43fv1rYh7GZFKCvTyjdAQyVXxf8CbFyAsTo1rQdLFn3kcgM1MceBjAJptVDADwkM9Ed5UU4dAarN9bWnXwCj",
  "key30": "2k63V9bJAW6puniZh5gTuv5BuEAtVyrep1j5XFGQH6h2MkK6ELQ3Qe1eqrRF7NudizwMiT6NyWMgGaoGcdq3xMik",
  "key31": "3NLNxpzsRxtFgWqSHm6u1T6yUWkbSGh4M3uBUyqnj3ToZfQbgi6dKvMvRXBD4y8UdMm6ES6e1WPfWekNv4TQvSkP",
  "key32": "5THZegsJt5zGLCuatkfKnrmdG84HnNaFyDyVSxXEzR7toindcEw9HWHu3LzUydGevfBPmAGMtDxwwcAymf1am6G1",
  "key33": "62Wrqb9MwsVpcqwtFMQ37E5THXxCSR2aAJw4ZwKNo6qwmBbWuyfCteumexatQAti7tWMnEMXpVKsYGR2n3SU6VVB",
  "key34": "2qX9eYXEthk8dKFVw8PjUhiisRMVT4UjURZrERb5LjY4HtndZ7nJyMXdi3dVFMDSbSy8FYbhctcJrZcfDRJJFC4X",
  "key35": "49gLC8ATxQqhzcYGZEd3QzMQ23EbSjieEBZXxrFmKAbSMLajJiGLRWXRTYTwVaxMUqTzc8Z3ZZsAtCokcTGTD4pc",
  "key36": "33GXQa3fzhCZSRmkonU1TLH9D3pjVaUfb916EP8kCDPxb9hcVkL7JDP6r3VfuH3QN1v1ambrJhp3iYK8T69oAHBd",
  "key37": "4ractAy2YqEEEgU3dsJpoEkfhgt4PhSsnyeFwqQqYXNwt2uSPdzDspWS4tkgcGUcMx3XDpioXToSWbQKf7H9nKwA",
  "key38": "4nL5Dgs8TPwQ67tzje5GKRSyny5wZS7mnaNM5e8UFLWRJnbyF2ynpLohkNsUiACYszNnYze1Mc4WGEzvLQWLF1Zt",
  "key39": "4BziTBDHNf5nqF8WiTKAoMMn2aQdTibNQmNxWsjGZcjbc2RnwLozm9rn1Bq84c3GjH8Zc9myge9jzijoXRBs6jHp",
  "key40": "gYuxdBYxxU9QwG1VST7chNsitQN58iZELB5X8rm8tPU8L99HCqQTEYnWhGuXCDndyfiihUTeJRy7dqYhxHRJyZD",
  "key41": "4czpy9Acf8i3PMKBfXNRpwc3SHtUbToSuqfDsr1eLNXQhyz6PaJAoyY2gXMJtYmvUv7fmK6NGeYBcLZFCrNRscKk",
  "key42": "4k2xZB3AZasQgpVANeM3DBngu3zCdMZMwwXWeq42CR19EXyXF7dxfYGr3Ay3pR1UJjMKLXHZRWfY8mbiwvjP6nb1",
  "key43": "4EwKNM9JFvK3vBeu7NeQ8dCmsMXoyy4aKBiBU3SE5oYmudgM2FPJYhb8Ay8mdTQ6xQyNxY4rTa4tUa9enuCc6Wkb",
  "key44": "5bEPASzKRAi8ZAkjMqcpZ9xZxtw6ErWbbfGHKat2toYQy9EUWNrNcy6Hr5kKi4d6VLpD8wDLFc4EiFEExYFw1BuH",
  "key45": "5b7wsYFV4ZFAocduDgBpyWLixSevEgu6ZAA6NmqGDSvjyds1SXPXEoBssarxKPcp6fz3FszLfxyQWG67VJyfgPjr",
  "key46": "FTUivEdxTFej8G3bKd1KvDqyP3LApKrdoZ419bZH2AsVMEjYRQm4xVAWXSA34Lc77Lx6khDW3KEAbmpPagqDg6E",
  "key47": "4dhh6EPRz2X3New81oGfYbSLZUqnmwemDmgCcedt3BmdrpCNt4M54mcsBMLfPrUTs8VqQ4HXPdVBkeAc1g11k1a1",
  "key48": "5DXyTS7uxg64JpXo2MBW8Cx5FUsTvRRAFgLPaZF9VhEQa3kfZQuKSbKWNphhHMw5PjJVQJyKrJBiBGiC9PtJ83uZ"
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
