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
    "4S8zxzPeumtTuY2KyMAH5WspLVsvRufGxikDJXQC9njJED6vcXvSta3M8Fp4vcTWUe8oPa1tnzAKdYBADf2cZtY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uJWeQGZn7ugbWh1x9jt2xZoJ3EadtvSCWfUkMrwyCGJDM2V37Y4UGbKthEJfSEjtBea4h313f7dt4W8RNEienjZ",
  "key1": "4p3iVyKra3Zf4SiKjPeCRZkefk4k3KgkwRpArZMeLss5f39AiFFqBQAPdPqCZUe2pk9BSStVYWSkrwysHnB9zSPn",
  "key2": "3VxgpiW4hN9LJHoWT5dhrgkd3Kt6fuA9uHVRBnJpmDL59537o9BQX9istKLUzsjqHMmV8Etc4nZPAAGpz1nb9APc",
  "key3": "3rEior8LjLPVF8qAZgjsixJs898wb7KgqMqGY2Husrsn9J3pWozZvAM5YEpJZ7kpipv8tmKVCUe9c41XNam7yVsS",
  "key4": "mG2oMtxubDiiCJt1PLi3smaonF6dQdrQJtjDrdqEAzAVYD9Btr4MTvjpSUnqvPDUVo9BHTQeJ4Z827BNh8Cw4Gi",
  "key5": "4KejvjBkdGZHRAzHbQMPMXZd4kE6jkawECHQSdigR73Ca7maZxdLUvVZC7VLvUHKgbNimBmWZAUgdWJHZhwKYict",
  "key6": "5ovEZhWHY1AUezdeVwWTSYnbC91Jdrm1vbyvz1UnUbVGaRfqRqJQ4z5PPL9xYJtyXYeN5oJdthWkJqPb1GwKintj",
  "key7": "3yKdV9JWupAojVMnk7Ju4rSve2CPMJn6hNk6VSaTFJwd3o8zZxsfAPhEoz3TujAQqMzqX12cSTd8t75pYnn2Z6Ad",
  "key8": "2BtXpz913nVa1Kfux6Bi495DXzRpmFAS1NSn1PKvZWspcupUJfyFhu9nhEzKcq9mSQNLKZQb5TFay57UaGKvAUfK",
  "key9": "4X5z656UAq6RthNUE8riz8V9BUSZUiGoyxqgUh4SDukdgPRmoqwKCewnuu2UUU4A7ePkRh7DWCNH78vKS191DcaE",
  "key10": "Mhf6TPXKBaredq8kXtyVHUQyDncKfSoTEJB9W72GPuWZoeV79Arc9cH3TwTj7Z9PVsicXsBbVXsvoE2s4C9tbGE",
  "key11": "4rTpYAaY6cYsFphQWMAU1S26XFAqzJAvmHvqXcUJRx7Huarg1N7tHonhx5W965oyPaovjK1dvC1Nrn8uLazgotc5",
  "key12": "4JLC6hYSHhhVs9Ys1SvhhGWSs6NYVKLiSP4c8swUUFDmR6smLAzDhy5vSa1vLFPcTa9SGCsgsDpnkwoTD4RtqY1p",
  "key13": "3myKpftfTMVdiptDbDqYovp7SLmyLMho2f1rjWqDoDahKytsEjmPoyjoBppmAsqapVBfLiKCsXAb35BcAMVDQcF",
  "key14": "2zrJomcmfdfuTSSCcbcadCaMbLXwPoztHTgwVKR6dBgVoBJpDPtt7o1VyrbfEP1zAuGgGQepoLgCyU72vDXAusNJ",
  "key15": "4Vmyywu8N3TCQWSzeWXvKZJXeMWy5NoJh4waZdwUJTCMajBEDnCvfeqizyZimqiuqrvgPzM3UBMHzbikjWrTAhsq",
  "key16": "4jCMvwvkDF2NxMeLKocCD5BeEt8uHdMZwG4PvRjXWLpkaCpjrWQzxxMbzpQGyFGxZ4YNuK7yiyMyZNvfMSNgdpQ1",
  "key17": "UzNYDw7XZtriZ2c5AYsbj3pNABNxTwsozSu6HzTqQNkkJJLsixG87hhHqnHZNHidx2nmerX97ppK5eCJMTAK5SK",
  "key18": "55AN7aEbnPbYBJTV1oQx5eMyctZAM1NTt5SR36sccXDgqCmN9dDsiM22KzcbQVnVsgjQ4ujTj4ukisJ8jDkt35zF",
  "key19": "3JHxXMkkUUwDbR8U3HdrJSArqAZxXnqqes7Vjx9JrVBRua7T4QK7NkbyuwLPeZtqh7Hoki9L6Fv5Frps29cLhhnn",
  "key20": "2XrS66v1euP8QXvfU3mHEWH6C4dJL7XBzJXBpLB4EvGrbQpMaX3i4NM3CJEQmnkMBTeYPBdM7z2aD22y1VnPuNtb",
  "key21": "44vS8Zi2C3Qau8WBK7DNrngvJWxscQBgYZKhv7w36p4pv54EVxvHQwyWn6x3MxCnBcUyyFrfvYVq7pedLaZsTvwN",
  "key22": "5EK6G8wzNVhysZYZHn3GMcXYjxzSMwuFaJbsfoxBQxbpsk4kAPeuvHJoaqetmKLhpzLUv5nyRQWr2K6Q8LXpNLuP",
  "key23": "2GTo3P4sY4ZNhSJwaDCSFMogk4AAP9RDxNyiMy3dRpioRPsU9oipmQnNLEB4y8NAeMQeBVP93nS9w7m8mo3Xcuow",
  "key24": "4HhwttFXGrXyVRkf3uczL8BeaiVVXiFrCn8Gnj22EUDz93khxKvBuNp8jcr5dVMBD6RaKLEyaaDedCRsaLKzKbDa",
  "key25": "3Mtm8aLWHKJttEMCFLVkhsNRaaPgfoePUdxK59R8TDVXZ4v72JPrJL1WZGGE7wLF2H8nDNYCAfVkgPs8k7R9S8W1",
  "key26": "65cCDD7Z6QnjQJYEgV3BRbKYBogaqZgnKVFdbN8h7FD5xZyiM9mHzweuR5UXSBkvbGMrHiP3JW9sd3gck7QCcvhZ",
  "key27": "8HwgwTDawAUYE3KwVJuZQL9mF4JLHKuHgxzopFAQohwQ55E57YfqtVC1SNswEyaa3Lw9rcZV73SZ1qeNkQD6D6M"
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
