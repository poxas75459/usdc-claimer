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
    "h9j8XunTYgJgaycdXmZJpSBDoFHGPzC4F7vpr2bwLBEUjBnJ3AEE9ZZaqJv2bbMjxggkHbyZrGZRtM5XwVbD5rU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r3iswwbTWYViyjo2rP4vWquG7yVAy8MYSJbP2RXQK4K7tSohgnQVjwHpuAre2W9XTskwQLqA4XsLAzKoGuaBfhj",
  "key1": "2Yw6bQQyYkux2oXjUjUUkpGWzAp9EEZokpPNhZGzUbq8BdSWkYzak4WYvZa9L5u4E3XRgHM2qEG6oWtCs7UjMpg",
  "key2": "2KM3a6sThh8Q1ZXCuwRbwgeJiRmo2d7SAD2SRbEsjSVapDZTQog7DrudASAtnTGqC6YBcJiGZGLqotTtxQpzkA39",
  "key3": "PP2d86GHkJ3SNo7Cpr79pjQG7kbvDfpf5AC5mSNBbMkBW8yybjJGhGavvn4PiXSyczxdMgvEsr1FwPSz3cyof6r",
  "key4": "5HrvWDn66hWmJsZMaxEJfT8M2sm9mcVDwqxvmBdik7W5hqeqWNW4dBpZA4Ghx1RyrUycsx9erq5o22EqCcQHrCYj",
  "key5": "3RbuehCYrCPckgcduBT2RdntckRMmz4AEz4uW4VnbKTAkG3xt2Tf82hFJ4122dSHjC2xBgJ76Pz3qWUu3ZoTuf1q",
  "key6": "5WUCQSkyRGcQ4P49roxGRR92d2kHPSUdYHBCxzjMYJoHXP3J9uFqsuBbFMkAtVNTwX9ejdhr6cajh57t1Tc9io65",
  "key7": "2GzEzmoZL78N3zLZYg2UxdzG8pj49DTG9H7c16R69K3onPnH9x65c1QPMSz56X8L4yyMH9fovDjkG36C1XpJf3ga",
  "key8": "AvNkyS6dEaQSQyTtNUgGKA6JCVjxKS6SLMmFNvV5q2hdy4EdteCpV1YyXfiAtsYzBTU7UMWbQVabiDsLYQYz9Uu",
  "key9": "5suCmccBbJ1uby1wdodj1YFpx6Vza6ZPAk7gRjJ6GmvwaM8eS5fqmsQ6RXuw8J4BqyKwP2LPRrQxE5bQsZPJsR6n",
  "key10": "gErRQeyg7Kj3hyrew9dRHibrTknY6MriWDKMhT38yiXqEq8Tt2mW813nsp1Xn2MrrdsDacHXPNnm9djPd5fTNkx",
  "key11": "5iZBYnBaBmXrsE4Gr4gGGERF9huLFgmVaxxc8QSiK35Dvp16m8eLNSRoR2xkNDyr3FVE82qkRnnrKQ2ZtmgRAGS5",
  "key12": "624kbY157MAcFHiZDtf5aMTy6dXD14TNktd68Z6JKXRwLST26k9nwJNDv3jV3bSti9A82cw5ZXEqPE8UrYdHZP4z",
  "key13": "2qRzN3epKHxA1fhUriarqhgaaR9NN2yiK8BqQNzrHsbrGasFFxofHKf5zKtyHsgJDQwDa49YrGrsLvsB2ex7rqvS",
  "key14": "5ckxrma3Q1fLSWHK2w4La3M3oVvCM7k3jkHrEU4PLvkx4jGfcXaidu5UPg47p6J3QAsdJ6dV6VojaAcFqgNkVoLA",
  "key15": "5Z9qLz7ksVGB6Ah64atuvmaFZRLuodGtFGq2tYxa7pducbQ576yjQHSzx1XwCvbUJjQk2c86p94Hf6E2iYJKHrpv",
  "key16": "GK9PssTMi6inh9m7UNpGuCm7ZjN4TiB2m2HkQ3geyFFhTfQNsyH3mbKaEgMMRvEX9Ka5i34KbbFDmWAWm9ZPZzJ",
  "key17": "2QevsEnTEouL3tz43NWVbCkaR7hwPEd58GqfjQE6DqUAE1qaSCqbd9NJSua9R6R3P1xzNVD7pWgrcHiu5NbK238f",
  "key18": "4GVuxQ4WaiKkX6pfh2fieBadkyncYA8gcywvuqk9zd9o3tam8JpSYnUZyHGdJbxzLHrsYo9nC7XasWpJ8hDcXU8J",
  "key19": "2HAttrQaaWQXqdYjsU5V3keF8Q82QzyiQk4mJtmNMVqAqJvoJ24tWt5ygaKkF7hNUHPFFSVYdNhYnXwmsBd4Kmwn",
  "key20": "5Ft9Qzzpw6MtgDQABat4sRY2SoQWVb8XPfy9kgRdRnYHm2dnKBGQMBqMAhTohiLi8eC6x2UbHChDUL7bbWfN9jRm",
  "key21": "3mz5aQqXkntP6JacCrnf5e69UbJaYShPuhwp14ZYfKs2c2YMgW3BDfMuksaDb6uKdShzRriWr2THtijBKb415YPf",
  "key22": "266KyqSBDMKqJqrAHwyUTq1j5kSXC5imDJqEgwqSmAcZLrTLPT16A4N15tLqKFJUXz7drkd29oG3asB6nTxVaaFJ",
  "key23": "RJmLTEbVmy538Ndupcma2WAjvqJSmSWzBFQVVn47sqd3bcM57EuacWh15Yb8mkaBeXCgCUoM3aRRUjUKNG93LYP",
  "key24": "3GvXbcknKMEmqP2YxsbzS8tRBevTgEXvVDk4JzcGWFZPuigtNPSbbDCVmSaZMS4NJxDQZaKvwfCTGBz6Zay6Gc7S",
  "key25": "4Sv63QDj24EmLswyBSnkWgFC4Pk2JZeibjEtTJrNgjaRTiSYGf9CHiMbnUCVeBahvsCnnVhsZwT49Effk7GPL1eL",
  "key26": "3ME5ehv2KF3NV1yJGqdN6HjWjnrmg5Vjckw9n9W23NjPytLqu4EvsLHjVefzeJnnM9vpnobcf6Fgg342hkJfA5N3",
  "key27": "64b3TRu4F2LfKntKMBmGmGhZ2KeMJkE6KtJwVtCCE2fbMPkAmwD51iiNf1YFawcyaJi6iMrdibDWHz45ay6xX5Zv",
  "key28": "2C5SLi6pmk1m6kFVhYCdEJbjGX4jpJnSUtA2dfGfWq5DMaN5CV3dkka4qMN3fLthtuyKkwGjU38DPDdcjVYLmDeZ",
  "key29": "3GmVmS5YTgqr9pcxeXJikktrKW9K6qd9TTqJvpL2pPPXSMCq6X5Dfw6hZEGkuVNNSmRJR9zgW6LndNPdh7DE5sAU",
  "key30": "2hEMkSoHcuc9ZmjJXKcfioy1bJkQoHzNFB6ba3YNGY68gqND8dL18aUHbSW46Bt4YKxWPy7j56mFtv9UPKRQAJ3p",
  "key31": "3nLZhqtGd2rWeNYaNVVmNed3WF1iQZpDQMZPb8HzpekgpL3cZbMewUEHxQ3pXzMtRUhUmi8EniqW6J58B6nEhhDr",
  "key32": "2AXFQPrnipUPqkrx2RPr4uJ1XuNRty2HfTyeAg8CEime6M8VBU5wVJ19AnJ7PC35KAM1fNZKtewRTeqNwi8Bhscb",
  "key33": "3YmTxHvrXpsBt3aqFa1Zgs36AYGAm1hvWz9tygm2UUxTy2ZpysWELzGHaNp6NJmbKUo5wMLLh3ku8xWfoSGEpiob",
  "key34": "4qFNgABzbXUSnQ1kLEYCEURncmPjez6Q5botKLPTs4wUQpcsZHy3CY7yb5jxVQXXb9SeswDfVuarHQfMECUjSEoi",
  "key35": "5rAZaHzSu3BnL4hgdpehywoYMwAVGdHAUV2GAAVNdXJGJG8nTQS8N8jb2SwmsAZwSdgcN85HDCMmJ1ojffL8wNrp",
  "key36": "25y9pqdtTH8BHf6GUxZeZo5GxewGgT2ynyHXZZF85tG8mdTa7UizdF33oP4omgvs1UEmTxfqnnSmREfeVsMPfp8d",
  "key37": "4knU7SR48D5QR3s6zz8f4xS6oyuPauJX2h6fmQXVce8RSwyRtqemrspD7tyqDq9ngnTV8BeMAhWxH63rsNd4HdmN",
  "key38": "29kMkKzRKqos4sDQhEDQRCRoWxQPm8d9M2YAKMsVsWv7tC5cGJHpmWukHCaBti3EtvNQYueso4seF1n1qgVrpSVt"
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
