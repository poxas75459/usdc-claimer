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
    "4ZA1B5gQArf2CT54b5aKMvmzqbbzY6DcuivLTrBGtcGwP4SfZRnGkNkzQFw4VtCDJJuBD8ikaiM179Kk2ipmatTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VMd73PVbGLK6TchBimkNFTvt1ugLfjTnGYYRqfS51AxuntTrSqo9eCMxCZFE4xLPUf7FiqKetg4dTXyYjuqzkDR",
  "key1": "4c3pRhdn435yj12N8CqQRLZvAbKWABh7EDCUfJBwTtgGof9JfMQfVaxYV7fvRQzuKsxeAx5cEYpLz7b8mhMiLm7J",
  "key2": "44WMwZTFGNMCShybDWsQo9D2Ae5CGxji996zYb4U8yJE3MFZ7YNwXVHA9vJUpCojj88L96fA9LUH6CXy8z4NTSU1",
  "key3": "3gfKVoHSxfUTFQsQ8EGv79YnBR1L5svXvreQFvFH45QQm8fC2ZugEW9DGGbYNmKfbF7fjcsXvWmzB67t8bqc1dNy",
  "key4": "5PtqsjFGUUWNEaEQwzj3CjeWzpDjdaWcE6r35kHt5Eg8LsRgMcXGdvP1816DWnJqjJLUGrGVi93L14iEERubev6r",
  "key5": "2NmW93MiLdX38ZA55eTenohSET56tjNrfQhwFMMPXWmFvMaCEkRWip8D3GHJBug6RLSNE2eM9QEDcwpokRXEHVhX",
  "key6": "34qAZYFaX6EVCTxRhkqzkDz8FE5vTDEPCQ5Q4uCBDfxDnGsvrgHNugy8ixNc87nBKkdZk4V2RXCdrFy5EHoiSDju",
  "key7": "2VrZdkfo964rgtjWy2YVVh1yoqLorQZgVdP5ynC7nWkbQp15E5b6wYXCgY7DhfHxZ3rXc68wTnmKaqNJmPmTsVfW",
  "key8": "4UgffrjgMuNgT5brmPtGVKysdCfVM1J3hGPG3HxA3CSLpt7ZJgUfBDhcbMnZbjZZVY52dQ3ugDiWfq59N9FgB5yS",
  "key9": "5hbgsHreNaMqhZGNxkireTeUXbbLwjchbsQpSQEBtzyBgZhB5CouMZtkmNf3A2twHswHyJgKmLiAgakTFFtQ9H7T",
  "key10": "4TrvnSnygUJ7BBcooxhdoTzPsV4zSdh4wmWsfb2mVyysREZUMjxJ3ChEJFeSR5BrMKq146zw1DLte6mk5fWk4u2N",
  "key11": "kxbHeS8sXPRnbCMawNMUR3dxErvyhwG7q2iBQ4tn7r6rkiBXrxKLUcujHpAj4Xzfu5amxrqf1Uo4TUDbjAqKP2B",
  "key12": "3RktdW3f8jJdYG835ofivu73oEsnNwfm1pZQk73XBn93eMFexD88J5ERp6mWFgvw9GyKft1GYpt3q7cpVLX3LMwz",
  "key13": "2j1pRxq7PdyhCezHYz9frRdXc88EeiXjdT6xgAvY4hUKNHwzii2CWhjToYKvChZft55DFS55rGdNsqwpfUYmHozn",
  "key14": "3X2c6Q3r3T8DEsgZUqZned1snEWnHMthsLrKxg59Yfepnby71UwtXzbB9jfnEip5JdfpuxKfmK8tkEUxciAvg3n9",
  "key15": "36A5wqnnTUixhr4HAEe4htmX4EnxCiUi17fwznX2e5bfj2iiQjcVznVR6fvhrSMzJF6p4A8fuztCepyeVrX16xpw",
  "key16": "4G3SviETXiMnAzZaUPVuFb4eKGgGMP9b2rcAXngzLoRa9vmW79CFJ9HSr25Hiko7hqU8C4d2seTAHXhmSciCCxEq",
  "key17": "FP78TDNMiAk7rjWBSL1m9K9BcfgpBYHGRmV76HPA5SwhzcngFgtwzs8XC5noQraKP9Mjr4K1jKFKY4BriisQRmE",
  "key18": "5WfS4RTcAztqdCSNHGSYkQ5ZGU5A39piGgoj9AkrYeKwXmKt6YNFjmXEiCtUjf5DnSVBssmdMjybh18wco3bsFT",
  "key19": "2uuYTQtDdNSKGgMeATGrQJFr49YV99pPAxGPhp6yJvCnWEG9t45XM5zwWxHmGSEnyErGomq7oTbF9ETxmNoSps6v",
  "key20": "gUJDrD9J7vGSM4wTuuRrHwuJwucmpmXepyLpJrSVWXYRYwvVmJE5rHpPuFdCp1NNUijon6Z4nMigY3NooEBzt7a",
  "key21": "2Q3Fccvb1mnXtNmfpXEn4C8xBe4UU3U2AUeeXnQfPHSd19VR6eunVk481f1VXyLqfzujYHgg8ZRqgVm6UJ3KBSsg",
  "key22": "46VAC1y4i1wuFoG7JqaBJKPJAPHdouqXeHzV3gEBwjVfBswMQJvTqc11vmJJQJGdZQz7zaXZ6JbKnxftVzEhd48j",
  "key23": "3cvJ5QRPWfCgRFfpVtFMbKSWif9z12D2ggTJDnYFwubs5eirXKcgUUNcYsFV1nKbiTVhnSq7ZW31wzrrLePXFVYW",
  "key24": "2METpAD8cYv7Lwv28uuRXG6bPQvDs9xxGX4u8buVJns1oyeiQ9VF2biU9wUSDZm8bEdanrQz9Mxi3D6yaJM4NjPK",
  "key25": "tLGaYuuQoBoVjNkwAYfgmyt8YqGBUPVMALvpprhFxXZ7o8v6yh6A2DjEjVR8qgwJsEVfLiJuNzV5SbkLhWKbsXm",
  "key26": "2Q1k8pn1A7XF1AFLAMooBiU4NXc5a26jLUnkuSWDAQniUczMtdTa79vvG4yyGcb7DU4X9RgRbm5HqqhLKP8Ar3w6",
  "key27": "2F8JdBT8886HnbobCHN4S9JiN2TXfhwtU6F5nTJbLEVk22gG25WfjpDUehqHAVebqAqu22LRnJe78xcBRh8acfjb",
  "key28": "2hDc6WF7KdD6R6mSQdJrZMim87kp2A5MF7eRrnHKZBQyGLvd6ULmu9GvJQc4N3XgiHTrNEqdE6UrB12DvfHuST9y",
  "key29": "3fNjPo1GzAkx9TYhhVUizVziHiCaD2FGws6DA1BgVpCCcPJk5X4GD5gUKADDejqf4CChdhp3BdAz93a6NK92ytgQ",
  "key30": "3Bp6FKTR98hGxSKKPDQ2yV3M2ev32RU9CgLPJkSsrWgiqQin2KbeD1wnd643iqSBVECF4M2Xqn5N6yV99bxexx8F",
  "key31": "3PTtXbeNuT6mswvosik9UpHB7v6PUmVBPPBaPTEHriDYyij49kzqTsmMxpWfjYwHY58HEfbA9svsBsZNNf5DUd96",
  "key32": "463gK3YGaQ5Cs6jy1baqEvE4yuKfwzLsuSofWxEDnUhs2J5KMBPCb8r1cjueRKuzScK97AfzwJ3v8Nbr2KiMm5wr"
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
