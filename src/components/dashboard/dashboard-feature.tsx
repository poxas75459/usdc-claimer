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
    "4ruNgyxEntx4ekYpon9C2iZEtQD7FHyE9tXQTMpH2PpgyAdgBwBUQsuPtUKBc7k9hW2E7r9kBiRpV5k4xCuRWg8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yYeeP8k3WdJHR67pc1e4G5yH3M4q8bZAZHob5GUr4VT1N3pnZn6d2dPF2rpHBnwwKWQKjoD3UXPBLkXK4YsWkKn",
  "key1": "EAQhnznKZ5bzTM1vTJvfWD9Qk2MYL7Lj2eKueJyXSA5BTjwznSBBduA5t32atMRoQeYTom4243WZ8GQURJ5gGfg",
  "key2": "2BU46wr7uwx5fsW49mZkMHESCakq5LQ3rLWLRybXQbik1EwbxETgjoCQFEWDVKaHjaX2cxDNR6RsG1oqxzHJU8Yx",
  "key3": "4qXTSgx3oRV2fNDoyeX2aheTqLL56sVX2UouNb68KQ1wFhW5YSo5kTYbmWmmiUZ88MkPgHAVNv1RMbtuGGddWwmy",
  "key4": "z4PZDAoVyV1uL8u26LxKgiHWgMUhZ6bypdDcTKmN3RzmhAwDvNxQiAfTEq98xdTWk4tvqLTGCcZaWS6bJT8Fqsm",
  "key5": "5NLzSSWD3LtWwd1vZgwmsdWx5HWdK6YsU4qChThWUrSZsEM2E3YnbE2E9hqU2P2FbvjRgaQirzrtDGVPyjnhrotf",
  "key6": "N3qe6bB8ak5GKopSACEicYDvjAd9j138DK22J7VdjEk8p7yYVWgr52QjDMPBnAmnkrSkPSFvuLA4V5xNDjG68Rg",
  "key7": "5krHMzCVLX5hPXaBqBdKztF6j8gkRLnyyvJKHZFBwgXuC8NSUVMHaZ5JKuKra4VHMyBcVvrwTfFhQhmt1BPAiYLA",
  "key8": "WnFQoymyNksA2Co8BdMsqkCCoGhQbGjQGVMRvDqDGMTeGdf54AXXeqpraN1ijB71wi1c8r9VQvHf2sUKCjScJ7G",
  "key9": "56RbB1xgf8AXVuqXM12J3t5DnUd8cfHeUjE5NtveUZSnCukMqcoHHAxpjuQvMeSjPF6t9JAioWqN7wnAcE3tLYmJ",
  "key10": "4RhMaaSRxTV6hS9xsnoRARmy38zsbRWEXc48QJZV83UzNgPPKAqZGcAUc3s41L1UnhyaYL5JQqMqDBAEGX3qrTow",
  "key11": "5QcoYWN7H9ecNAhAdqzZn8wDBE1Z3kHs1Hpp24MExprEiLkq8RmfGJ8kzw9quFGVyEtZbqnnxG7ERKbdTd3s2TaS",
  "key12": "2Ku7maZGPbjfZ74HLoF2CkErg1tG1f93m1taafj8zSoTK29RwYmZQ4Uw8pseY8eE9x34FmUBZDYpbHCmijYqfiVz",
  "key13": "BqvkT33PNLLoeSURbYrCCjVDxrANvMK4srHBUJ6ek33SHxGdN8wZehBBZZEPN5E6aReMV17zRPAJ41HRJaGG85R",
  "key14": "4Rf4cCSMuiXu51Xm9EXSEMCAaQcsmZU9yhXTFhmvSYULFcUnsQFCro1CLD2uozjms3uTeNMmqkmf65XNmAoQzzmz",
  "key15": "5GJ3U7tQn6FkYg1FgKKWcEJSzkuN9tu2mGDTXTXFoXwXuVVDumkp2ggNEjtgqrJCr2UNLNnoYjz1GTa7CK42aAa9",
  "key16": "29YGjBTGfDE1eawNcgpkCVbavSTNAS66nJ8Q2qp5nU7drdatCgZjnMKcBU26wAaJYCqCqqacneaVKJHcRkiymYCd",
  "key17": "3LTzJenvZDwDmBDyEBK7CPKeYS3M8GQ8QuQjwsL3Yqcxnq1nPkU7oz49bNzaMqFggdNk33khzL8q6LHyrBuEbqnW",
  "key18": "2dCwx9D3DRAHDVGALorMh6vfErrTt4Q5oJ6SHkGAjSk4Gf6ELnPWuVRav8RjaukkUj8BVKbKpvELfw4X7g1U3tQx",
  "key19": "WjpxDf6E1Pasm8gMPYxtzg7L15BgEH5U99UxfLRRiTpSJGkA5B8G9L7gDNh4CMMiuxBeNVQDbLt1aZEYX3Hvbze",
  "key20": "4HZaPHHyKeSsj4oWsTWBenfGu44zQfwMdbNcaHXVumr1JxcTwVKu6z3fdKebTMMqXQ5r74fbCUbJeq5vp6uojPTU",
  "key21": "5bLsGxGMfTe7Sms5qXG9Ym6kbkFY3GKCe8yiSAsgf3BXa6xxpmDtoLjSpkiqMCs8qZxxhB7QBvxzecY4QeRNu71U",
  "key22": "4J5K9UuHHH2b4PLJ2bNm2Zyiu96J5ZGNyvzqs8NjUnmZBHBBzQvC8kvHmqgwAziJdDHmVKguEFJGn1BW6ff4DPYt",
  "key23": "W491MaW94D3L2cYP8SgXw1hwjNJnxAWTEaZGVsE2115JS6f1E9pXHA8YveSLJaNt1gGdeUCPNWP6vmj9Ce4AFRZ",
  "key24": "2sBx1aEgPmQopB3QDiZZiM3Fa7p59XDhY5ifMvsFvgQkHjU9RcxKvxap2YUiLsHhNAZejRpfdy6mDAfXQucccjfg",
  "key25": "2XRJK5Nfu8HMTg4qBcyhF6kBZ5xudZaWvYS1msSPa2ayC18eWzTXUkTkbDtdV6Um1cW51ksRk86NLT1sKNbAbx2i",
  "key26": "2JUyPNMCvTr4RuQC4mFwv7UJ12j7QSpwKVUWovNTFGiJ4T47SJ4xk3ABbiqc5QRVp7KEmyXrG4YmZpKooc2oeYyb",
  "key27": "3mYCmcPnGFmBoTMVo5QdjeDfDpegUmVU7wZc2AJj717pJG2Bk1gdWwkiAzv1FBDXRbegvBKjoxJfrgBMoxcrrFVP",
  "key28": "2wS46tQqwA5dggfQcnaDTWr6ZwyExDQRYm8nCWbrFyZjjPYBwqvikZFGR7ud4ENP2h7DsXhozgB1t481woA3JfrX",
  "key29": "4nTpbZE3SEaBo7gjVtmWM5dZ78N1D2tA8rJPsswMBoxAqmT7ZkHDYdnKtas5FmBHPKvDmRCmAeRCuiQjWqrKLWXJ",
  "key30": "tNm4DdLAX6fRuXzPG5TaHuHNu2jjFq8RZQ5CTB5KseRUy1rAp56fkZ2nRqZ8RaVrL6gqAGWvnzGNwjKnHuLmRGh",
  "key31": "2PJRaF3HrFFJgoymYRp5T6sKoQMzj5GqEWJi29KKoL5J4u4LcqCh8HzdZXyGMj93k63dwZ7j37AjnCnVVB4WVw3Y",
  "key32": "5qzRLHE2J7UKkw5NZ3aD8sKnVoGmcHh78rT35YpoPfMmmGKnCehCRAcFTQpvk3qVs93Et2dibg1rp7RNcuYhGhts",
  "key33": "MiXwucsoWR526zoXg19Feim4BaHMmcoMAPoCtDxPceVpZH33kRNSodHi8uC7NpXGfJmaa4DpXr9wGqWyrBZP1KW",
  "key34": "CKtZP8YjobQFtRa8mMLV84YDSbWG3uT1QvkQMPXS5tiWGoBMGqZCzg55E4nT28uzp8kmC9xwq7XncPMRLEkU99b",
  "key35": "4JYFc814RVJGBLQGktNTLtYb2wsm8u5Nsn8QQJhKPrswWQ9DnHvqwF1D3znvsEooxCyYzKzyXWTMKDiBPPrxchdy",
  "key36": "35jxDrfndZnNn2rgDwyd3sfUKYPzdn3ia2HzTDG3FJwozu8GZLpsRZYzGp8t36cN5qL6xAxLUBCL4NJQyVFpneJV",
  "key37": "3idBTy1qZACvrCKrZttEtQjZvJusHKps3fhLwH5RS4Kvcf5YPJaCzk5sBjQsX8Rp5RjQvgeKic9rPDda3DYbZGne",
  "key38": "5Ya9nyuWoG4PbiTkQ7Sh5BySssfUQUhj1PD8fY8fnSGxbDrZStJMQdVN2oZJeAX9eJiP33ASPsBXW7GW7kPmfE4e",
  "key39": "4Lg9zgGWPRzW8ZvnVtUNNAqRW298eRLB5UbjcHfRidoCqiWPQdzBF4acuh5K4SMw64LVThL9K25X2UHtsx1Mn7rK",
  "key40": "y7qrRJhukJ6TJWtD7b2htsBCHsNZphiysx3n6shVFz9LGfiVZJdys7N2u3c4qbDbBYf5tRVSm6fBC7PUSBTwQ8T",
  "key41": "4tBVr4QhwGnXx7Q729AZaAJozZiXoGbGqSwb5uoftsEiyQHnfms9jxjNMey7WcpCknzhzQd3e1nCqFLyfPt5FZe1",
  "key42": "5pxcEVWSW5PFFpkuZiUmu1baRhjTQgKkYTdGMZKZf65Bzv3LJRkgcTFLFQQRmbnmeNGcpzPmm9cqNue3yg4q321L",
  "key43": "D2vjzPEcTbkC92FJzwhAjVTaGnMdWcRaUAtKcGWXC2E7eosc5eqtVFvCDJ9jZJ9Qb8KRbkBDMZEY6scro3Gibo8"
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
