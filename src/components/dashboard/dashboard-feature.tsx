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
    "26XncET86xEd6ewiwbJigHoRhbahjjGRUiQAkj3CBj1zzyRUdFTFqTtQAJZNZRgU5fT9kjuJfw2dU6XRybuSEyie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YMCrbvXUpkCKFJ4jGHQ4CLB2VBUs5sEUpsZR6TwHyuE6j1YsB58GD3BUsnwiGYpg7kh8ppNkzNMT7H9uvDVN8LR",
  "key1": "42NtF6MTH8BdZEVgAQsM23duYQpFc3YLNWpdVRR9618VH4wVPo8bUNkRmvWaEJr4CwFbHjJuR5P3bUbNNoa7rs8t",
  "key2": "2wtdfdKh9MvrmBKckmQbRDvrqRJ58qNeextHZw8jUh8g9vZUo6mkFJSVhUJEUzf8TmzqXbdHU7YxZFvEW6EtF5M5",
  "key3": "4y5zKVUeCNwp1RnjPCiqqkMtHy7JjfFBskBEtvUAjsF9w7GLs6GhjR1kUvoG2hZJg4WpNZw8yUem7R7GDcvg8Jfz",
  "key4": "4mLRvHYXuyKkfRcQ5MWAKyHa1Vd8gmMAZrv1BAh4ymKDawSfXPVCeTGmUwov2HgS4eKaSRSTu6a5pHsdJYw7SE7d",
  "key5": "639s9H1AY7jzTw5WcDq3fDnekLgyQdim7dpLvaJG4gaMS5bmXmb8NrVq2UikJQagoD1sH8BeVi1iNcr54FoADaVU",
  "key6": "2TyBEuR3dHrv7WaAunUYhz1P81HYok33qPVSiYCUifxMwGsw2EQbDpbf3nVjaVWGzfx9nun2sQKBLcBj5NZsVzQq",
  "key7": "Ley259Qrxdicb87Xew7PUDJ6RLvatnPsBn8bevoBbTxnkH2JjGwcLbvH6zAQEJJ2Z2jggdY4NQwwWzj3ztXKB46",
  "key8": "5JGBr868LiKv9K925U9h1MAZVPKReky6QNFJtA2ixexMwXHuSCwRjmzQaW1ZfBpw9meAEwJwcHmxAQXZATTYJqXA",
  "key9": "5QSshFDrm87DJW6Hj8ryd74PMbUPL2irUtNupWqmE51jhSY36dx1gijDZTPYygkKtyvsZvvRcqTzekjq2n7UD7oP",
  "key10": "MuMYsP31GN1MEVDPB93oVq5GRf7W39MXwVbVPWN2wucfwPyhu3UpG6f68M4CzvD9BPFcxXqoMy6wbfSAL2w6a4f",
  "key11": "4s8ETiQXsLvfQgXEmY7h2oNj2HEJonVx4bnkDEgqSu2mPGCaeEtaXLprPwAjxCXsQfvoSGwC9zP7WqfyYD5vBFar",
  "key12": "3VhepcVtWs73GBSrQnyfUHH4dd6sUxUwMe5BD5G7rausm8yqNRyv7fyf8MdbDe9njFbV7PQ94g4rwhcoKrpdQ93T",
  "key13": "4zZgkKy2F6brBCAVSmYje3QbGbhtA9R7LZoog7VyT8s2P24gwq7qbFy167vTMe4zfJ5PeR4ggZY7LHWBUQHYeUTX",
  "key14": "3Zmp8kL9myUhmuZpKuAdqYkUwxJ2S3PPFDmZNaAxS7ZjT3pw2A4cPb3NhBMiz9yH9jPLJuVEGgW8rYY9qK8aqWBU",
  "key15": "RW5KHJfDfCWN6mGjwLqCmh5v9hiTEabagmzmHAQuQa9GSPYxgkzfGVeExLdeaADDbx629YsaPjzxxf4v1xMnbM9",
  "key16": "4b9esG3bLNg2fWA31gRux7BLNa1uSXzYcbsFS9UzZXQARjdfvkg5cVAKtgRoA5ZzgXzbZbL9hJXLZ9ERvPJytnfC",
  "key17": "3Mx3Mq4wtPv8P1y69mpdNMDQKnxp3vKq7PPgnJeBEAMDkdkHqVc6C98njhAKMQYexYsAj4NEH5shy21WfpHJsxpi",
  "key18": "26pouWsoraXfZNSWKkW9EPW4xtfMAg6PhfWJkTKsfrimmgbt4wpoWz4qG1SvtLoBpDPQMTTba7X9pccUKsKthQui",
  "key19": "xKqmWu4WwHeeazchbALrQpyRyHVaeaF9q3YAjTWAq9hJDcSoRhE8cJHDixMaZWpcx2hV2gy3yuePNQaFTpVWzWf",
  "key20": "4JPvinF4HU4J16pS1LfGmid3xkkA8sNMPYZGCMTb5o3o7BwuiAYPmJmPugapLp5UhJMRBtRGJADXmKphgQSxcxNB",
  "key21": "5noWXbfSmArD4VTDpctxKVvEBKRu7DBh4RpJkJcrX1BpjGw5M2J9GaggQRum6SXqH8ZcGjEM6Xj95Am6m1cAz6Ao",
  "key22": "MpPkVzHKG2biZJmwiXof6hn2MMx1KCFDJRHWy2mtxZWtwmKUHicFLSRXVNW8CbngdBoRPB1CkC1rL8mHbZvsU34",
  "key23": "63gdbG561VMzhtL1JWxmzunbisfY6vTBRNvqDGmSoKtHMMgpmerJEkNnWzCPFmqRm6AonZd4ZjXFsbmn8yT9higg",
  "key24": "4y5zmywVqB3u3qW8jbvEz8Mu4vMYNyLatSpdFmeVatLjuG4dUA6rAg9fRw13rUnSC3LkbHThWjzB3S1zdAGDqo8q",
  "key25": "T52KYZykpu4k2WcQi4VxsbKTKMoR3TpsKb9uaLw84jQrai8UT8eQ4aHg41zk1G1rqJsEX1hxaPpsDBUiYMGNf5t",
  "key26": "2RESJQsNhid5D8nvaBbactGsx95gbEwtcNav1mpEpr8MK9vXaau5NpSi4LEJTJYbUHtvRxgSCrA4nnSPgWcDbLUa",
  "key27": "4yYtY1Wv51s4sPfavqFNSbZRcJ4d6i3wa8bnajECnwc6WHSS9ZxuAv81BxjX8rZVUZ9koAwQPkGp8LV6iUBduGVM",
  "key28": "4zgpzhgGUh2A33oLLYQw4iHHwLjPEzcyGuwxKsgXUVFAC6MFLCVqTkBaHZpkJuiTbJZrXj4YVHpPUrMdG4jMowQn",
  "key29": "4mNnqrA5Jn7EcjchsHs1ku7KcRnaek87B75iNoScu8J5JqLoVZhcTArMeUFhLgsUNcB4BaUZ91Lss53yQPzqjFr6",
  "key30": "5snvJqvkfLApfXXdXCQxHVfVXeBQBtaTJKawcYrohV7mJgd5nMNg6DMMAYqDXRMk82PNc8cWytXCe4w7UiK7anvz",
  "key31": "2QcdvC83UXhT6qgZW8xRFrtxU3JKHdx4oHD547N3eZcsrYr2MfnXF5Yx9vgk6VQXwQEmMcvZaRMVSXFXUQ9NtVKE",
  "key32": "f2Tkaw8NmSkcDdfFpFKYav4EX3Y9V2ZrPAemi8hjmT8kBe7j7VZ7uDTtqVAw2TQqT27iooK5qneuvkyadAp1kim",
  "key33": "gKeuUodKBWaDv7sMe36DG6tzQYy6ci4YjPZyJ6xMrzexk7P8TRrLjM4uXRVuwhrrYo6goyQYguDFwVLm5XD1GwD",
  "key34": "2tvPt49J4sX5E8tFAnG6fjnWnNSiWiXDbGbnu27GxBp3hNtHoL3EpbAbXSmZA3xs1PYbDoozQvbjezUnvJJVtssS",
  "key35": "4chNkexCobmrkn5jbCmoPy9Hp2MFqK6Qohbi8HpJ9CLcFt7TBVyB2NjwHoVimTA3pquqKsH1XXtMtAEgVDVAmumJ",
  "key36": "3aTu9GgbbV8AMWXhk2hC5HFX7Cx6xiorAMecy4fk4DT8d2Ey1mTyTuc6E9fHkVk4xZoWTzsVGXi9XXotBWBNjNg5",
  "key37": "sdLvK6mT3NPWvyvkCnaW5iAtBahFZ1jVxzQLbfohbLCSDtdg5ZooYSXqKRLiMYDXXMZk31gXBpCAT74wWi6uWFL",
  "key38": "4BcefuWZ24NEhXJCF2xxqTnKXRVJyjGkUngSyzKuizFDqKXtPNPty1BwH1s5iu8TayCjzhQU87sK7NXQS4yQxK2e",
  "key39": "57jjoY3dVwhq5pwhnTQoNemaojKwHqbg2jtgoGkCWKLh7oE5g1DbXLcnuBTsnWaz9oiv16LAKMXSaNri1tyxT9jZ",
  "key40": "3C1hmnEN37xsvdrvmRWfMXX2WkkCi8FuUPzADbmhJC6xdPayyi7Z9UHsxYV8YPpkvyixyrNGg2XXHZgkT2Puo71i"
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
