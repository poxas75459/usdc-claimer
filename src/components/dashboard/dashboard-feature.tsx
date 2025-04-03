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
    "66XnNkaJkDMGhkrMxATHVhc5p52U7MvM4ZyXqXvLWLPBfHbR96Hh9KJt4ZtVydvFb96w3EqEXwiMzSmaF42FC4ZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YHzePtuZR69vXLzEr4RtSsS9uHF5PQYVoJi8VT7mCroNfMnonRWpty9xUgzPsjR1d4e8LwLBXPzgtZEBb25BA8E",
  "key1": "2UUZvyeHcKSvDr9ij6fRbHmeRcvtPggmpTyhXLNXyfRYHXim8kJYmyLbCWqSjNDKeVu9EVLHWTFYgVBwphgGXjw3",
  "key2": "5NDJaycDWo5LQv3FyhCG5B1kajQfpH92KksEJF7L7ih5wQHCf7PSCq8vt4WvEM421fbTxgtGRYSf3fuUgQDUtBWQ",
  "key3": "4kdtkMXPG51LJ3NbdyHR82k1Zr6xBMTXQSM7sbQgqLTsdESxdU8uDEDC1MBTDrYdmHYv4K4H7HMsrq5YKGdNpSDS",
  "key4": "57stkfGXBJvitxAtCvPrTUH5H8oSLAGZnavijTHAocQs7VTVGbTFYvW8dQa9D1GLVjbrEASH7sb4KzmjHBbnNLHM",
  "key5": "2YcjbfvmvGBpZ1ZegF3Sh1vWpAzErP484GszZwm21yx4GG4iTmYosAyzq7SXRnJNAnuucbNbsjGS5wstx2VJrgZP",
  "key6": "2qNkeAXKSRFo52FyFUibsBcMi7xtMPJZBEr5HoYWbsyzGBBGLDrnrmSzfh6TPT4n6ZpdZW8MR6cXUCWGUtMZZN9C",
  "key7": "iaHqQvLk592Smk6k6E3fH3zUWbvSHcxT38csPWqycoGPUnAEVD4uvYES2DL7vCepSA7iMfgx5woQVXWiGfcpc9K",
  "key8": "Gi6XL3gCFrHrbh9kZMbVgEhpo5ejJNjmMVt6hf76tQarPAcqhcXX6NXorJFoXaq1XRvtZpmJdPkBaUTr5q3JK8e",
  "key9": "2uXNtfXZ6cgabh8ihyaLPs9B9aZCS9UAJggM9cVoSQF4k9mC9iyGarrLLcEwPDiWSJ3KJAdsKWdpUBGcjuwaCwFt",
  "key10": "6WwZTsn9nLCZfRmZrSCPwCEUHefPNQTcR7DF8LzYxYTPNeZxUXYJ5pGtG1yF5bZaK3GSjBARH31YbJk3RAF9TJa",
  "key11": "377df9wjxmZxjr59N4vjMWVvkJkZdanaJvwppZGxbxPb4WGt8uPkoJ59C7kfRj4MgScEgZC9zMpFiWiiZvxzjDZ",
  "key12": "2PSmvwfaV8b9hqN6bfRHpkMdkWzw4GaunyAUJA9mnA42vEmXQAMHNqWLG7qy9yHko8HFGtoyPCiHUWb4ESyQtbnT",
  "key13": "436WAWsatgEM3obeKaoz2zyqSFChhtyz1MsApGv8XYfKZXE2onHGvoA5akLjLvoAjzygN5XZHbqKyAJhV6abxaaJ",
  "key14": "2NZHJf7tv3xK5kNN86sz51FodFBVL6oCzQVDmDusT28EbZMCZFxNZrBgw15EuxSPFbDfAeVe5utTYUUbsVgW4k9U",
  "key15": "ic8i9r1JWjnJhiYomqqCisUpUAy7ZHMKEJi371cXfpZYAegxnYZYhx16CjD9AtTtZpqcojhzYYkEFBAcWqKGy5i",
  "key16": "2Po88DDv87srqTzLTASqT8rWwjCyXUbkaJnxk6b752hxuGHa9wNQdMuwwaFcVkSARpRUmQWeR4PE9YPJ7Db4Jhed",
  "key17": "2q45kgAkVxo5Tez7DFLZeiBhcoWSmdCu8jVtNcy1eVk4H5qSG6LP4M5XEtzNvvchqWfC4FUWkFmjaUKHa5dWo2Cp",
  "key18": "3WeravfAaBW2C3mZQ7FRDtvNPFVh5CWpqNBSx1tn5iTMWrt68Sg3Pr4hGJdEnq52fHcGjonigJaAuzEJusBnBwJS",
  "key19": "5eBq7o9beGMrM7V6kPp3MoF2wCyAm9wPjzUYjuvYJfwtfLK7AQHQrVkJAci7MP9gCGssCFGrcPdYuhMtC2uQvbAf",
  "key20": "4Rr8M1eptmVkUqfZKBNf8uTMX9iRvVua9KttBAc6r6z9GrESgCqBzRgLomFUdrYST1pVM2wEyHrpiFw5gjCEgutx",
  "key21": "FA9xbKqUtP5CrkRePtMcgoXXtZ4dQDvGGf7Mn5HFovb5i9DELbDAUFaPdyvJLDrLyvKzBJCM9w3Kvkrc8LbLztw",
  "key22": "YTL4cnyUH8xYEMAQqBnGhF2a8mhwQXMDA4FSS6xMh51EeXaUvBdJtUgt21quwx5cKHdHhApq2C5Rw3Z4PaMkYbz",
  "key23": "2qePVw1qduFLMUxzuhFMhHx5PB4aXHGdrVHDyjJdGRxdq9q71xyJe3tC62ckoBmFLjxMtsDbGNk3KM9HStYjRu6k",
  "key24": "3Ho6kzHmAX6axNQn8CBbzzfKpx4qWXtrTt9wiyeEVcFR9b4jPFu7aH2QDsK56jHz8ig7g6M6G7vovAfztVh2LfRt",
  "key25": "5xoV3BZzHjA7XZ38bVe62d5F2zx2vNzAfbCqVgiRto5jspjiWcbbjZtMbxoPw5RQaWZXXuWLfKWht48bMq2UFW5H",
  "key26": "2Hw3x4WBVN6EZkv89X4TrQdCBkYSnXsKuZW4Nv6EQVZhYaajY82AScbDvQaaGnsbk8iTP1eqsMnTcSrJDeKRJvM1",
  "key27": "2ZKjN52S3TVzpbi6gZLjWEKMYjRfY344n42DSppSBxG5rMxHLri6EMzbPpeUVjhUfCSDNVKfJiQ8TJqgh34S9RVe",
  "key28": "2wFGufgi3rJi1REUEMjSzjucovibkAaC1hgH4k64vRbfhyjSY28xhtvWwWTqsQXEtK9kqf1Z9WhNtVZFPKsyBJ9r",
  "key29": "VPyGCneFs8ZNknDpkokD49Wo3waS3GFaBjd5Y9kzUzsf6dP7upbqtRKHMx1cjj3pzM43paiZj1tZSopy3BXQ3yg",
  "key30": "2vAEG98BQKYXt82qh9TuNojd8gXKQ65GdVhioA3LRqv9fadxg1xpqjFi5hzPe5nDyb9V7bTqXyFoLnp4ekPRxute",
  "key31": "3yiiyZGx4GB7SzsV1t6uaqQrsnyyaroV38WoZeUhYVUxmAL7PiZqzcmW3hsggFkkCjgAy4RbfaBRu7LK6tVtBErF",
  "key32": "56FZkjiTfPqEkTMM7FvoEbc2FmB2VhtBthLxw3VbvT5LnobsTigGqeEHNHqBvB5FFzPjPb4YNz9vvVpdtiH1bcGx",
  "key33": "54rJLi7UPcdQUEr66bsqvGsri2qMCDMyyEwuiM2CcQLQo1Lbgyb2dW5kGwWqBFkUpCYBYQq3AELJLeXpgm4XTQoT",
  "key34": "4CyFKfbRmwQk94fX26FzqcLxydaTyLMMC4MRMyNHY9rfJ6VtyQdFqygPdT5CRSq5B7ANia6bfDGS1gRAgPWNLuLY",
  "key35": "3hSf1jpibMTmuJRpnTTmtEz4Pkqde8vHJUyqVLexcfR97bjETWEAm4ZJJG7b4ucZZCQ5PXfuMEixa2MeRwPem2sD",
  "key36": "2noosCcnkRGcMSJiLtv6u9Gd6jKg1spkaC9DCs2hTTGavZt6v5kHLfTXarxVmwxDPN5UQr2VDtBGusU1RrsNB8q8",
  "key37": "3vDWW8uP3NoVaRgWdZ7ME1FYWuVEAyCoWxF6M5joY11imN7c4xqfqfUq9Hd9F3e3KnUCTNxutM3Qzn2s8uTW2bgy",
  "key38": "EiBroxyRvVm7EPZj81Rs5KPz59TLyGuHVPeZJWx4zsJb7ynywGKdwHGtu24KCi774uAu7iHJNk7R4Vr5WLKZ4DL",
  "key39": "2xvCcSi3gsHgyT5DmFNwgkyUUneDmz9Rq9hc81kVDsf7QtnvXbXpvmqE9fZBE4WfYdNrbMAUQtgRvuLcLXqxVY3j",
  "key40": "51M22dv6AAh5AqPbRrfMH55cn93ZPqAjJAZhvCXzhSmW4mDyrZgXs4UNcrLeykhcPFzUEC7yPUTCKiSrfWfz6Fp9",
  "key41": "N9GPiJmc6oDKuxpKidPrhH1CvGJvSXvMgf91H13Loz9zFTcjc1wFFskqFKhrrpcygHX36sKQnHsFSU7Z4H2TxXb",
  "key42": "5akf8hJdMNDsAZv1FuJN56UTiAZNRb4L8CRmuWCKMcSG4zoeHT8AsmQVWCYBD3qPH8gL6Z4CjiMkeiRvRn1oZSdp",
  "key43": "2KD89yPWCcVDpZ9dpAJDuyB6Lsaz33NNKjoiaGyJZuggSXXA39nQLc2rqJGuTF4TYTVoL8aoNBLLc6FTDsDVPvST"
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
