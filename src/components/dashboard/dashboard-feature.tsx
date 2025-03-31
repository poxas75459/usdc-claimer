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
    "Zb3w5q7uvCQzNFKALoVgKiHsf54kH5LBTWCaYZc3UR89DA55s7hQ6RrhdFX22rkAFLB3WX3EtepZgqiDpUveFVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3axcqRmiyuGgTexWF7kYE124onSX9bMH8LoSRVCdNGb3nfiQWfKvc6Yh8Qp7DadohQhhfY7S4E4HYup223Yfagt4",
  "key1": "2qCTXSuUFNCKFbgeMJK4m2x993vXKNRPL3QbcrottEz12m1B7yUZEJBHkjZ5e7LBByVQPQJKsokFaALHWPByuLE5",
  "key2": "3BQtRV3M9RtuVhVHxC79fNTwLGuEAG7rz2CDXdtJztEoPNdxPYwyek1PqXx4q4rXfQ4REuCHfjgQYHXxHhCyNV3Y",
  "key3": "2WgGJ2qFtSM9LzfJstkGpmLeQbbF4e8f45frnXwS7Ptnj1oYTefoKAqKhfAufHyt5X6fHf5kfLLfPtMEyVB8rDUE",
  "key4": "DN7Ev74TAx2e4zsb1CKmA49gYCQKk7Yz5iQ1Amnju4VLuMM1nLRfCoUXX7pMiagLASp4FnJc3CRGmWFw9XWKvvT",
  "key5": "3Qk44YZv3Zwhv91xbQ3MhEwTtZsNdqogdU72EGqhzvCdDq5aKwGD6EHomHGjyfedqgyADATvNftuDj3Z4qztgRhk",
  "key6": "5EQvHWjB8UDaCqL8wRHZv4ui2fhjFf9RigXpceBqxzHU6PaKYdGpFsnKY7Tz4hA7DAZGavs4ugXNnNNHbDz4h4fU",
  "key7": "1XeyRorZy65RMtsiCR6xNyokFp1rwtmsFKjvXNnLvhpmn4fTKiqdyTUssDYabox4SmCXxYN7o7g4Uf27K6hM4pr",
  "key8": "4u7g4xdpxtcAU7xf6PLrp673scNoUMgJnJ2XRdEbPjUxJn5AnDz4ctacdkzvqVBTVFRfv4rkT1Z3JGDkdfHm1qFZ",
  "key9": "5tZ6trqBFa8XhDeewq9t6CchkjQYyr8LUdUB19XuKtesadqTnHWmSvBQkNosZ8QqbMvZo6x9KUvK7Nz2PWtSmxE8",
  "key10": "5cpHiaDBKYdnrTJ2q8Z9Ki28qqb4bxWyUJRxZ7ZQaZZf6i87YKcCqqcUUDibWnA4wUC8pBighH1kt74G5EYve99x",
  "key11": "YtU6Kfn6M6Zs855zYWaNRciBDt1M5xrrDcfAXwKDQnBGHbmVmCfXsmkgsoHYyHJHv7BgM9df9ta7EygABm92yx9",
  "key12": "35uo5k2otkun7QApjHwTCPU5mP9M8zhd1rVR8gAJ57BUhkAhTCCn7z18CQXFCQJj3pb96HLkCp4qCwmTDxjyenVv",
  "key13": "4n3FsYnMpoxd292yEg2sfZ2MW8sZP1tPJqkA2mrBgLFxjWutkjpbB8PFaycXQu2Jv4kXiE2vNr1oUS5ZvWR7YhiV",
  "key14": "5jpAaRvaWMvvpfKoxV92f7M32VLkPtxxCAFJ4vCsm3giqwm1hLBHNMQRfuzhupb78qZ26ASRsMAEwfCzQUv17xhQ",
  "key15": "2H9bCGaS2t2K7nj7idRWYJ3TeeTTTbq7GGxcVRJmFbbbL2VkBXWkmjSKCqGU7QmhUhDgYxrf3XT7WyJ7Aw9Qo6br",
  "key16": "2me73pmoud6CxHv9cJwvQeWjvFmf7HcHL8uihKitz6uYKP86aiAgYyJSL4HYuMzyS4dMztTU1pAr6GCHqqLZm1Xn",
  "key17": "4kEbRfDAaPAFKHgLz9g4XQxF5PsgogY67ZNDBo8C2iAsATzNPNJrsq2wb6gvnnWZm9KymmSgjHHWjhb3iRwcw7Ec",
  "key18": "4vZRQjkmrG4M8MmoNFh6MJ3aWyVFg8vAZYUFoWBYTyBy6Vh3P96KrYs5PNGfe6Fnvo4sDKLhSUGGbyEg3vhH7gWG",
  "key19": "opUTQHw8tWcPzaFY8odUSVFtfTuENNbkwYKZMx8uZYvr7F8Bs2CcQfRHUd2LBpi6nE5Zu85svf1Cg8DBuiAbFYd",
  "key20": "4EseLW2M2nGFNZDLsw8MRvmXBSH52CD6m4w1E4PQTbzryUDxxtkbZADwh5kcd6mPCUGqCEpjHfqT2SazEMDK8Ws4",
  "key21": "42w8TX6x9T2QmZLYXMGVARCroCWHpx9CttH8k2cGLVyK215VCFRU9S2DWo8As3AUTJUW2EK9JRSXHowFQGL4sL1k",
  "key22": "2aA98y8dHp2LyD3fL4hoz2vV2BrczkFCkyyWqjV735v8qf9P7D4XM42nL1ohPX6Ez8e3arnPrvCU7RUMXckKKTXY",
  "key23": "XKXEsFRLknsuG5SCMgYfSiKXaLTxrFR9xoAvqoB8BrygU9K83XfVLDGszP6b97wq3X6DuqVneWw3F5mt53imSrM",
  "key24": "bDHneNARtESHS7KLdRZPy56MEAF1CgJHpXy9BQqYGNom2RnhSRwKaTZSVpsmhp4tLpG4uTCxpQN3wsqEn6nLSKv",
  "key25": "3khaeKxFws6d9wMndrdnfJiTD3pLnffKFCGMKjKQx8cGPw6VEUTX2xyuWMcuBnvvAR4HY3kR7tov18AFJkuvGW5v",
  "key26": "5hhCMco27qLHAr5nCWRh1gk9zyr8kDoBEMRwZUdfZLgMemCqVi9AQfAbLiAyW42Vs7gXkCUCVPgLNNp1xDbZWh6k",
  "key27": "4yYpp6NeKMQDhEDpdpGT7VvAEhRFUCo8REo9vP2sLeWKf1LgwxKZpYxD4VoN5F8LM43kHK931x3UFpvndukeuo8a",
  "key28": "eaMwLACr8z1Jzy3L8BbvcQMTeGCHddG2BjXPqeE4aE2bwC1sJG2VasKW68NLW3b8SFQTyGWEd7XxpaopzZutw9x",
  "key29": "4kptq6rJwrsGR69UaintcB87ffuPq6HB678VCkRZvizsPwCB2AmKXApzZE9LiVBo5SWt5zCN9EgMd3EUzWRCMRgE",
  "key30": "56ivunn5mZSveWSEVXwrcy5FoPg3Fnk9m6Jyp4GiHZa52qf2yDkUsGwjnud5XiCEJS9drG1z5ML8FF1p1cWGbLPT",
  "key31": "zsUMzr9nkDARfsUpYbouiH9Wnq4Mm8fDUyqWd1SSGuRjvahoaT8yCA6fHXRNLnhnYYJgJK9M3aGoxmXJjhNrdEe",
  "key32": "4VvEhmtQyEnGpN1ZP4h1cFsqLc1zZv5i18RVaqbks2yfEKuAHBKbwnTVxTBZ7tGjCZXfnEJXn1NSXBFtY8n8QP6T",
  "key33": "LSAaJDfYz7RfzWVgtqnkVyUX7bMZXftbNU5GD3xutv1h53zpnk3FbncSEWhKPfr4KGD5PCRUYQMYgAwKnZiGLbf",
  "key34": "29VqWEnaiYVSkme5RoudWNNtjxr34kzmWyWsWvdVWCHLbaXz1hs7Locyds5YThoHBrZ7AgETvUwh3CHEQZYn5dzY",
  "key35": "3GCvdVCftdSggZAdCL7PjbzmqQMQY6KUVNfUxMSiFNyXGq1jYumJNWxHsbfyj8zEAKjyQqvAEuu8keSye8JTkxWq"
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
