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
    "3QsfdUqwZrJbPZ2iGcVhYRPoyrMK6zfe3eVnoK5ySN46MMFZpMJTAqMtLemU7jUSnfV9FLizZTMAzXJRwCRtAFiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TAisybvhzmnmNsqnJ4FuFMHhfnk61x2mHSL4ymFf3re83XhRZyxn2A95GDn54egMGJk2A3SmsULaBLPS9vR4Zdi",
  "key1": "61UNAfSWiW7FYFmxUXARPG71bqUJhBDwDH6ixvt12eMEnBfzcRjRwE74hiG5StQ6xuL1ouPmBX3DNATNRaYwAeu7",
  "key2": "4uKFsL6kmst6k29HyyfjdA2AB1Gzj726kW9GP5o8u9EBc2dZ9JXwStgDYm3vhqAwc3p1cCVnJNpzZxTJojMCrmPF",
  "key3": "47ZKnQj33as44yJb7jyoS2717k5PpwQkNaDDCCCn27nTF9PcU74mdcvFzf2y8wi4CcE192z6JLWvj9NsB4vyqUXb",
  "key4": "4Lgc7pYRydRtzzeHmM84sYWEgayKKatRvgZEkhz4xG99KA5xykJVxbQ4Zsr6KfSvgRRHWajht1L9nqXu8gfGhBJ4",
  "key5": "4397gzqW7p37en3iT6E66XQNqbivfV8bjhVUDyhcRdY9sdhuaoaaa9yUapU8NmQfV4oBGhNLX8WqXfkDPgVrviF3",
  "key6": "2LU22JcSR5J4qnkg2hkB5h1gafR3yDecbYbyyAs1g5x9b67tQVwTKHRZftbfYJihoduzJFARbPezhc6BTGpj28sm",
  "key7": "2tHvWuQATenPDiw5rBtpJhbMZfVAvDA6V2V7VDSmBkccjY9qSHUWXEexXUXDur5Wcn8ZJDqK4KAU2WmpR53jJuA9",
  "key8": "3LvREAQn6JwskoiLwz79VWdSVkYrTM7cZZqMQjmT2Gra1rkCcQG8Xg132m9hpuKkFzXiRm6N7JPvnvs3qKUbUWjD",
  "key9": "s6crHnx3ivqTEYLLyuaRwiXuddZf3FiAJrCi3xQ12V65fKiBxFBqgarW7aeh6onThwrfn7Trntvx2JLR2h1QdCy",
  "key10": "31UHAJnHEJkjYHekwCtqwjn8R4JmzWJUiRuVmqdxhT4zXcc7aJzcaqJ9higD8TwmnKvFdkdJsTgq8PkfQqBNkyPt",
  "key11": "3iLQmexeuWjDTdY2LuUgVmK8qFoPg5gKLi76457Bf785iVQ3hcdqoaiA4zqEw11F3XzzBb3MKWWkDq5CM8EQYxWY",
  "key12": "65TnuQ8AWxNvW7ej4445K15nsVkBVwfSWg6ZHDQ5Nqndz6v66H95RRBnyiZyat1K9EBc8tPyW2SWQ1FuunJHKNcR",
  "key13": "5eGC5s4LkDneeLSvNu1vc7UPXANwDz29f71AzGVNoNkrixijyPHkyXo6YjHRrPWvwd1U3NNL4BWz2gCALvxNdumr",
  "key14": "46szQLWppEkEVnzWV9ELMSGXMyCic2W1fVXdMXGXqocA255gLNMMrGeozUX6aVzmqAw3viP6G9SBnhe9bX6q2uEf",
  "key15": "WojzxogqnyFyV2qXpkAtMpKFoLE5BXpnPUeB7SuXMsKzfLcjnLpb1wjZcbZATn5ikMbvZnGoL98i9HZzDJRxU7C",
  "key16": "5aQ3HmeyJhqGQmrTNiAjUHFcC1JZ9Wy2ADeHUrBM3NcS9RjNJ3zoPTAgVtZQBMs8vYDNsW5Qh8CoQAXagDa6pQcU",
  "key17": "5W8YAZ7ozW7F9Aab1McyAN7cGsNNNP4fffB8UHqDSDPLEokXVohAEsn1niWzc3h4FnEgA2hvexGjhQi4rmiahu6H",
  "key18": "5G4T9kwceHk4mqbVLcY8HYTvwyw57oW56xGHsZ3PvwMoXSrcvYy2qFwP7bhZWcncUqZSbZabkJcT6UYMd4QKLAjq",
  "key19": "63FdNZp4BMruyVDAPn2yZ25YrMBFHX9GcNdLaQQkd7Jt6J6Zb8gCzaPrEanUqizDcv9Ug2mEpoYxWfTE5okBF24a",
  "key20": "3ZW7j623AmCZdcCpn9RGjU89ny7As7MztJMLjnEtirLjKWfpT7P5NopXW5hHCRsfgTA6kn5pnSYnrMAppdx2Saz6",
  "key21": "53HKd4yRPcntop9yXWPwhbv4uP4vkTEtQdwjS3NaFvqTFG6ixg6JTh1gmqLLPEb6VuGZsKNrn81TZLoCifHQeHCF",
  "key22": "2fbmSs6uNBJ73DPRTTvU7ce5swyFt52efsnmJDLzsSYnaCW7jLnknVzrQrNkorK7uquaRv63veo1vAGUvhTAYDV9",
  "key23": "3QhbCayqn2YV66Fv5jCvQ3a2WJtMU4haoMweMJ7272K7LMVDcKxvq6eYqSB1NdHsqp3V7PBEj8jLJcSwQnZJCc6g",
  "key24": "2kRXiKrVk2L7wmFGtWZX59CaufQzwsXFhuww1UUAVovevTNcqausd9QpPesNQrFGG3fhzX2iaQcn6nka12srNsk",
  "key25": "2ps6HYt4r9rywAT6zcS79ky6DmEDhFcqRvcmahVBBDyGrzxBRivZviBYXoAVa8wUN5LDVb3PzWcD5sVjLVcNvBP5",
  "key26": "3RrrTrwqmgaQeiGeWXnHJTNs96de2eGaBLXXWGsBrKMkpBWwxbBiXVx3tfb5mPf7gVEvDwX5Gh5GYCNyMEmbkr6E",
  "key27": "5YPtao58LtyRWyYFn2bNoT7Pqku9yWuJRtAMV9e5avYNpeiTK5swy7xJmdiJsUYExdJHaapbSj1UV2Sk5wYv7F9P",
  "key28": "2zcf3GdbaVFGJrsJaZpBxcTTwMUGjNJR3ZscvKd1m2WtpkWbsk5oZTjyHNMoPkuLjSbjtdQ1dKtJgbKCvvzpw7K7",
  "key29": "53aKKD8GAmcdBfvG5cEcn17DoXHc6YSZLF4LqrUPAb9vuoaXZjCigSjTdC86oGu1UThFV4oxpemEGWo8iLgmjtZN",
  "key30": "4ZPZHuvDSt3tUX4j5vP9T3CsPXuoPGEjdgn51f9dwFp98zsy4SJbfSo5bsTCG48Yc7fRRnF8a4vnMP36emharVJA",
  "key31": "5fJrhVs51ESKP7cEcruRagCTrkdRThbGB9G67u8zWyscuthGi16g7VYyjQK4dcy2wttnYnuZZ1ba5e3XazDMh7sv",
  "key32": "AFGDqQGqrLgBZbmbJrNy5rdJeKXjpswbUS9NCEkTxocr7Cn6XNragP9WzVMqda5TWc7GRw73dPkD4LqmGkrNCqZ",
  "key33": "5d8oGNQdEQThVWdKyutG8Pm54tBBGuLhJY3n5oLdUEVinrX2m3k24eXqKTBLvPBnS8Kuqhjd9MiEJ2zaiVpFRgux",
  "key34": "4mZSHrVMd8yQfV5ujrEPNY9KiEsSuwKEYF5AbAJv9Ah8XWGLvoCrVHcfhQwgGW1ESsd8qd5uVroCGhT8a1vLM1qb",
  "key35": "ZmVaEgCVLw2yoBM9qEAsXAjwDboU2qgDJkNgZLK5ir7xMdMmio7LFdMqGe2sHFun1Ax6NKG5GVGMb32nGu7sTPq",
  "key36": "4NbZjgsw1KhgbQitLfoZP9vVzFSKkRvdTeuUVmnc2ej9pAZMgzqxxg7pfyswB8SrF7s39KvwXHP9Tq6KdpxSFRri",
  "key37": "3AhZVTsLUoQdUx37mj4VN23mmAc9Z1xFVfLHMKnKG5vdHMmnL11p1QHXLZ1mpQbxZpHqsC9zWmESyzr5U6ZmKDSe",
  "key38": "5Dq1BTZQ6Yk1vLFdEtoTojoMh51ta1j7KjNPD2p8g6cPt3wLrNAECzpMD3NkJis1vuS4VhdPBKv2TyUfvDSiYv6X",
  "key39": "579LCguDVsmPNqPBMBQRccoo3Z74zajbmhKJyqiyRTJ4oioD4WRV4ssBYpcKguo6AqUNymLpzf1pSXn3si3NVhaQ"
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
