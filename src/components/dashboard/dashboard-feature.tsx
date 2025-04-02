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
    "2hr76yDnndxYK6vmCRpB28M415LGMpEJ1sb1MGbrxZt7BYV5mRTEpPzMe2ewZgSdxsYvAg2ZQ6GqXAUVpMBMiQkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uEosGChgz8FSuQtnaDkPeKPG5SVy5onpTCoZoaEN5Ecuyzh2zfi976MYo5z4GZ8W8gWVEj4KZLB5da9n7UY9dkZ",
  "key1": "3w6dEatz3Rskk6RFk3ozkyrAnFqGkHbaiUZKLdzbDBfbvAT9UawTGW1gdqmyqA6NEdUwRNHc4jNhRTE3DuB7nCa8",
  "key2": "2fb1ULSau3K7vBJj4WWyDLPRVcmpL9yTZ3sKfmcP1N9mXwXKL6vh5iDBeqeMYGiKLysW4uZAGZwehqWmWTXWYLhF",
  "key3": "29AAYu363h53KXvRFkfxmKG78aDETkwTwbjdLtRBEGJtd4rVY6ZExgsDrkqYWA9sSFhfgtjeDAghvULTysnsH1Jp",
  "key4": "5gNUz8wfQZC8uEzL944S5Cnb1X8n1ZxDLG6WzX9yX2PMVJ7ADAtAVUn8ZwJbGToYy7U4u4kLdXR8VkdK7TEHzBn",
  "key5": "4EncwQVPuMvPnDxJgBsKtWys4YZFwaVqXKrqRVmdiWhmN3qvP7jfUnqY6Qk9L3Wg3ZajRSjMfYiq1dycsnDe5jmT",
  "key6": "3S8ZNw9moQunkxHHPsw8QP1Ujub3SHU1bDFs8Fm3GRPnsmaSnTPvRC4n9JPM53iRqALgtRhz9SiNzDamLvCfgWPN",
  "key7": "2hjnvDzs3pTsaXW62nJw9eZEyw9dvy6ZhXRLi4w4gkyG59sV6CYhz2AAekwpVPnGQiZYpozZZBcVCQLne8NjiZeH",
  "key8": "2hg5A1w6NVjaZhAAPhBYUCxe4AhG2T9XvTLCvAsVQZYi8e3MK2gt3wQHrx3WDSpqKZGto2LYYE3PLTykC8WCCR7f",
  "key9": "4JMVqqC2ywppqc8q5eatfhF3KjkjGi1WJ4G4W5NswHUREh6pbqAMc73NHc5ukFshG7sr9Ct5r9e1amPLxfUeNAFe",
  "key10": "4tdGa3oXkBC76vPJsxaxTv9hUbTCFkxiknquuDviPBugDLrF3x3aJEMsi6SWPaXPzUp9eLo85ahRy5g6YqRtysWA",
  "key11": "pD6tr9Bw2Rq5jyx3bAkbS5hvAupBbSUwz9xDuLgCEAqcPU4DxMNTQqg1WLegCm9Y2Yi2A8ziL2zDiA5fqbhaPqd",
  "key12": "2Y1wbyCvYVwkLakZeFCumGLinxJtx3zXJ8NzNzRzURTHiJTeA68eaUnzKDTgnf74jfdb7Efs6dey9VVaRcxeXsEs",
  "key13": "2rEUgyRp21y7kVydKFaLdTMbtfetpuokNgcvZ3hQ2d97MWKDkuVJGFp9hF3jnmWnfMufKKWtEr4TzvTqUWY44y7n",
  "key14": "2bajXUqKPw4AaUvB1aLXHewejsbXKCpZptNcagqzSJi9x5gzykNcqcYwrjgpunZ3NBFPaxTc3LrySYwnNMV9ATd8",
  "key15": "3r2N5a6amY9m7vX9UTatPKcpQrjUQjc6GbF9WKhczZXdimbsyRDwrWtgtWV863RENS9VrhUNiqt224SQaKuezzZ4",
  "key16": "5VC6b1uRw9dSxsNmBYnquzLjPuGpDdDCumGocrGYgQe3QyPfDy24hP9DAs9W2SBC65SnzRocRDCx6NhvVbct9ai7",
  "key17": "3pdLqDbiXhi5iC3isbXJFQHdzw6vg4ixEEteeDv5yxgrkebCiRTzLxAudWok7NpG4vV5F6CtXwFnTHjkZCyyMKX1",
  "key18": "PKPF9HWQg8nw4SmBXiUfsQwCZMK2Lq6Lrzu5xYn5f5p8tn3QD1F46ZznJ5sNe3V1UnVK2hxTqiD3QovRDhxKiR7",
  "key19": "2b6EpY7x6j6mFjrY1ycYfRzZWxKb5QdLJjTeD3nNckx3mBLCjBmaQa86HQjqWLpAoUiiBiGxfzVZqT1jZNGBwuXH",
  "key20": "2gHh2VaoVTn4GwDTf43nrWx9L2xk2VAw3Qmsr6bTWfhjoit5MBgvg3jsXcTbAvDz6YgCuVZWuJAGZGFQYmx67xMn",
  "key21": "2du5JKQQ67VKiehKPQ281K9KNdFxNqrKoXNELJDscNhWEnFiCCuBqv4Y6SCdmjxYigmQd8WJb4NxXGmctjsFpyQv",
  "key22": "24rsCS7BZeQCKNAQnZJixcKv8HpVtfDeDKHDs7bp1ajr8QnwB9cTHboNGJfvUFs12JExedcXAsEhUu6SZ1rdoF3H",
  "key23": "sBWgL8ncfVG4MM47WewdwqtJtpwKx17zYQdHyRDHwuQaSoAiRWpvr4qfQsgQqRP4xJZCzRHGZVLJstiN2WzrvBC",
  "key24": "2VRkh4P7V1WPT93reYWVw4fkTwQ78LRsuYH8FgTPyjrt2VM7La3Az1zQ7vCHquuxzruvrkodR961X6SUJ2fHbsc6",
  "key25": "2DntgwayVfoMipAen6URoig2wFBpQNBSNzgLacQLi8GDgCSA6sKm1KuYHkAqeBgwZAo9YWZdQhVPJzesmmPxFT7i",
  "key26": "4Mh2QQPj8igMsW5u5W2K3RJiQdP4CVNZp3ewVyghKi93BQLz5Z4V851ZKGgBbGy1snuLmAuSyhg67jWpoTiVTR4J",
  "key27": "4T65GxKTD2uCVrq8WRwKE2sk2P9ko9YGxyeQ6Qont1z43EV4uaHLMUKXPfoVoPXeAddKJRsuqhSZcWeQEJr9E11o",
  "key28": "MN24qZGUdJvPz2TGcUtV8jdZ1YhUVKdnQ45qrSSzvPNgEmKZbVPbyP4d76tQu7mkPmgZzXJdb4GU4SogQHbK3fQ",
  "key29": "5Pc37KyKqBd9xuYhBwio7CJn3zmVomP3uut5oGVGiUEKEE1sdZkZXsuCJeDQxS5R1rGUMp4s2PAGU9cuZobeD4td"
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
