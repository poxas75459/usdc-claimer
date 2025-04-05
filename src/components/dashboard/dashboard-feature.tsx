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
    "5px7YWbUnTu9XRWr1HMaespUdFj2etvtPmGSzLCzMShJgn455RxHyXZiCJEnZFH5PghfpfVZ29RsuUHMyvrkHZvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KDSrvq4C8x8uB89gLfXeMPQkpFt9KNRhrpuPfbfkmKvGMBvX454GPRJf3rLgzk7iWWVqZbYnWzj6168oCWMrB5d",
  "key1": "WhoYt41rCKbSqqJqMDYoxLk1gqNuzF1WfsSRRevvbg2bZhPLmwj2wHpGNCEcjNoErFPDSm8Uwz1Srt8EEdGikNS",
  "key2": "4i11rAp2bC3PggdyLAzg9LdxAvF6em998TQN7EV3KyLomBPxvVzzBPsct4pdU8ve6TJwdvu4fvtZ49G2LdudLG42",
  "key3": "2MGiBiS4WoGEb95TAYDLrVuK4dNdFF7zueJAUDmsa3pPHnYNb516p7f88K4HbMmhM5fNkggvi4ne87TQN8aDJqZ7",
  "key4": "b4mo2joMKCyUVVJ8Sy5B3p4Djf9D4cN1gEiVovtNj3Kxw5YJCrSmcUrsyRNomobbJfxpMFVfoDor8FQggtcpj9K",
  "key5": "4YtuBjW4mdcmSoJwmSJZCdyWAwSp9nExEhnN7aqj5vSAoRkEpYfFmFBXKwt3yeDrndED5fnGDH6QAuaydaiUJyvE",
  "key6": "3BxP5FnawgFv22FhF32ASPZVmhW3yoT2LPE5w4PEkBWq3KmjBrWC9DpLUjXkoANrUG2snppP7q4N5d5TnNTJXwW2",
  "key7": "3pbrpMBQ4NKS6d1sjis1N5CJbDC3mpk8WZrhf5AkVcyRGPchX5w6D3YheR4VL3ix5MkSGtTfhEjgQCD4Jk93UqM8",
  "key8": "42M9W626hMBebmkDpacqZ1Lohg1beoRax3yHJ5FuKHvhFtVqaiwo5E3iJcwTdXUuAKkLnJ3dtZVHKS3ajhqxB1er",
  "key9": "4Rfs4jXAsnigZCwyHrmzPBtXhfLaJsTrhuCSK7KyttR1rKmdvQXsVDRdqXbpXJ978Mg2LzUKFshkzRtX1wrKVTSy",
  "key10": "5PbM7LRJvzKnz5WSmMKspTqVQzumUHv2CttVZfqoG9XhPXxHo3fQZcxdAzejwZsEpzWAPyBxzVvkeDkTzoW194j1",
  "key11": "29Hcq9LX8CQ3rHsSB3s6bmK1V7kEeL5nSRMP1yMpnkJWxPniMDyUNzes1tChZSqsJ8ewfx8ZuhXQwiPGFiVV4Znq",
  "key12": "2ye3YbcxqcLs9T7KiqSfifTkQjEuyjAEkyq8JrQ6LbyT6GAtJbkpn8am6L6vngyKaR9WWTk5HACjJU3poEciaXar",
  "key13": "4xwnZexeQsCrTUsbNqu8afCBYd1e5fk8Pwj9jUkhURRdkE4pSpdPM1G3i2sAAZYudWSRxLowxxhKHaTw1qRgEhJP",
  "key14": "o54g7B16Zd9A4mKJzxTyE989zc1yX7zmvuXJjqLQC6n6z5Cdm7WHuX8JoPvMSii5xezkvaZG5tKyufJrii5DxJP",
  "key15": "38DaLjSTpjz2BHd75XDSkYi9ov7CxSDYVPRMdj529Npep7YJyRAyHgeaqcaNwSnCYJNeJ5iT3jzfeLYzZKGVZArX",
  "key16": "4KyMFeoMTb9NnowYQait6mJwsDbs2Y9WXZtefb9J4GGeLiAsTprTb3FWhrnqHFVtKkdjdF4qnYQRV1W9Bg7PJANN",
  "key17": "4in67dcZJn2vgifPRsbdgogVQjzLQx23uWamtwpeyLrUbDP3zhVowmgDZuRhsnCtWYgv7NygPYGcVKfXtY8Y9anW",
  "key18": "N9aMm2H8DZ9T4DSuETxzsxa6peK1aVQJHg5zF6BcMMPKyQGkaAvXSbGkAx6CZreHz8ViJJY9kvvgnitv3qbhb5G",
  "key19": "4Qbq4hWWkNd8Ti499oWdjxs6KCNj82WKmeCeGge2KMsVUUMEH8Rmmf153ZNJ9kC911MqqnQmB2bH57zNhXKbpYx",
  "key20": "5CcFAMbGc6s3gWWvs498zupwEyZMGV9JqB7nZUnKoooNjP9vXzu3n93b3g9tSwCrUyetxjVwzaugPRbH9ePJDW1T",
  "key21": "HKmDa9AbqcXGUmL8dYHuNYaHvtH3zHfJsUo3Qn9HvSML7PCp7UtANBx7JcW4qaA2sXYGvgdwawgSKPBcm5WhjyQ",
  "key22": "3Cun9PNANYeArfERTRQgzs2eNw69zQnH79y6u7hy1Yt5xJekLxz5t59yHpTYbiMGJojQjP95VAX7WKSAxEmPxCMo",
  "key23": "2DrwDvDjGTSQJFuBDNyZLFGg8TgrPjtjELjpcikmFTYEaGmbX21n6yd3oxirwD4nUYxi9WG3qJ6Eu3fj4AC8nskm",
  "key24": "4EKChaViwAow8EBCgKWqoTwmiR879h3GwQ2w1xzyBEqZuz7myeuq2pNHAgCQULBRaQ5q1GmkBeCyXBNBYidCerSw",
  "key25": "41nZYWergfMwAEr78Man8GFgtDmLo6KymtQHCEk5mC48r9KeNnyzZYuYRkZ7dk4sPqTYjwzNFd6Ss4nrme6xfYxX",
  "key26": "3D8HFmmPeqVsXHNxruW2mcyGqkMNkAdBmrX8XXpr9tKsZFXCuLCZjHFSkjFiUCDugPQf8Xx8mp5NPdLL7UqihCx3",
  "key27": "3tRtSHXMkZaoWMHqorvdke3BXha1UhBQcAHErT2Bfiqko8B6qWLQqxJGbRJXHS8pQVtJsDsiCwn4Ww2T9dtvQN2m",
  "key28": "62ezgYGKphzwkNPX39oha1deUGotCcqTC7fjgzg1vCowznbWwA5YJU83HBLibq9s1tLyPeRjLuiGHkLuC1fDqf2n",
  "key29": "4qYuBWSGsKua6RH7GN84wojgjuhTasMGkDL67urdJ3hqkFHH3sbVzbPdxJBiCWEm8wnYBgNGDQiPCDj8z5yAiaTR",
  "key30": "9Tn5RjMMx3coRTEV8WQPPA4TtLMNiRsYCCk9YALd3WWr56gFgBo5SHJKTQ7TLJwM1Bd592MJENMH3JNsrMBZvaZ",
  "key31": "5dvxKYFWwF6YMnpv3a7GvJs7rsFJdToLwXAPfSzjbpXGERLigwD3F2AbW9wqAUfyYSe4XoiGEbUrjFBNhzHQTWDv",
  "key32": "5vQ2nRJPhvyVrWuzg3Yj99ECGVKsGFVEB9ZMDK5SULXyDJhkV8vYCaSft2XzHFfwtghqo15gfYXqyDectnz4T674",
  "key33": "4B71cB1mQZAYmyz5SKtBRQFR3J4DSgMmw8XZgmktDyQiauJMpmGu2aM5aW2W2V8p6sPTxaeNy8cUb2prbLS1T8qC",
  "key34": "4iWxULPEkr6JxSNyFaqzzG7Q1e1DKU9EDo23zA4mNBRFjjCspKbT2LHRR4dGHANnqXPWJVJD2QzWaYazoY3KJJD2",
  "key35": "2Ysr362GRcgnsgmmLzqkLy52pNPPsfyWLgJ914pXeLXn1nT8a9sijydv8mUiCT1wqJhLoh4ouNSptBtDm16E9poA",
  "key36": "5TvhiL6CU9SqhvyjfS7xRivMbgJAo9sc92upLdz6XgrdDwYmoZSCvhDJJRPRDjUifpSaKgLeTy1jTmTk7nEYgqKq",
  "key37": "3y3soYPhtfV2TcbQsVakkAz4nP5m1gowxfdbdsAW6fsUkTtc3xuNXu1LYKT94goQ7oE5McVnsa27Ldmm6adqB4et",
  "key38": "3WieY5tnZvmMQ2aYR7UNDG5jNa7hwFwHe8AXJDeeeCJRzYWEG14mmWXSn8uiNWw3bFUSqsTAmeTQBwVoFNqe8mK4",
  "key39": "4ChUN6mhTUEcxgn5suBqzqBJAiy4zuSzKwL5pThgxmvSuQRGpW7hxxVrjoLEhNk5tmujbwzJxzoqhK3VDmMTK3V2",
  "key40": "3MroCR3UBDCNqBBjRfiG2x6fbYv2HDWGiNu8XVZbBCZD8m6e94LQZXu1aUtZJFjttgKDaYXbENYbz8cse7fV3bGE",
  "key41": "3VSK34SfxgPCFSti2VWta8ev78b5TQ1sdQBNvPHd3UgfeyV8uxpLeBmocq5C1QRrhzmEaidYrMxx2R2Nx3kBMVJz",
  "key42": "42tYLdtyE9ibiTifZcrtMX2isgaZQteu9Eaa3EHBSFp2JS5M1ugX2JB1LfRgAY74cKR6hNV7iNzuEhMLadWsacnh",
  "key43": "ELuCF4kYPakiV7YyJkwcox9pA1DccZrQoHueST6TeiN6Q7C8feikVz2AZpAM9ZZVYvtDtQ3g6grQXTua6ZMqunj",
  "key44": "2MqEho9DJ7wvzKNQdB4s9BphyTmzeDsdGEF22BZRV6GtFqhY6Q4wUFnpibFnsEEt2pBmcRCjrZJQNMqti9H1ZJVd"
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
