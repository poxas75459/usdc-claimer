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
    "2d4Sg7pnVUva6knhmiXhyMG6u13jmbz87x49ky1BEQcxFMgMtRpjCYUXujizCi49qWLesozLibT2xDw6BbZYLhKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LxaQZRBt6RmESNKuJWNCqgfzS5uQimwtdZ3CCpz1uoNLo26kkpRWSUWi3XZYp2kdaKnCGPaU8MDNegB2so6kD3c",
  "key1": "3cYQGKec4BC5emGxtMMbbTSC7xLsxhM9gkUyo92ef6REcNwwcmwNXftkim1xQHENz2m4knGj1jYE1bPiLA6tgfTq",
  "key2": "33o7QxnYg9sCD6RgdptALqzAaRWYrArrEKVrBnLnChk1Detv3hwdXRYtJVnEo6Co27v7QYmjSyJ1sovceyThXtnh",
  "key3": "2zkhSbFhAuWL3s7rLSa2GesszoqFhLAmVNjwvZebBGE7JEVLUHZdmm7MJgJhCqRYmuHNYA4KFFBw79dUjt7jp7A",
  "key4": "5ucoxmqqrPW4daBToF4MNdrX1itFnNdk71dNHRg9f9FgPsovVXSht6R8JrcWbYzcnmvLHz7S3sWa7iErAw4f6N9W",
  "key5": "eCGQF2umL9MJQpMd7pEHfktJt3th7JZ2RG4Z8bJbWmX7pHQEaViGLAxpQXAhESv6K8QJhdejenVcgjwBaEzHnmP",
  "key6": "2TjvPFYMYWzdJDrWV4yFYmanP4xn9jJeeB2HP6yqpQA3vEX7snLCwAsdJHejvYPxp4LNSueEP9KSFKBQB72HWfG8",
  "key7": "HTaPStKAjonSQ9FF2nAYVjERdrXXmZjb1awXP14fUDUFTNDEESsHTfUJjF7Lgi6mKaAnt14NBpMijpmax7xDQ19",
  "key8": "8cwKhrEGkyb3ncBtTUs5Evuuz9TqprM4pAZu7yvNQf3DP3ynK38m53AehkitTGyvMmFD41JGv7e9HdswUTF5tmU",
  "key9": "2SsGD4fYA2ZrbDk2ZBHR1t7Bx9mXfzMdffD4iZRmiKqY2KJUkRMNjeCUoh2EzcBWheePrQuSU5CeF4JSaBhsfGSS",
  "key10": "4QSeEsstc9FtPgf8o3yDAFKQ6sAZEkNwhzzwhDnK27bi32dnYaMm6UKUijtJ65ta5MSpgLmjS2RZH2uxS6hB9jpz",
  "key11": "xdYcjCmhmV2FK6x5V88DsEcypKvLfRWXh4yg2RVpv9eJYV3fTURn9rJEd1thEmG4X4aG1G5vwhrnRB4PGeJwnzf",
  "key12": "5kmkfAdiWpxDVigmfTDSTvgNNcJ78Pzzthyk8Bs2LdYQ9fg7tjmUYngzF2QeujdiEBTARdZTQe9LLFc4TQCjz9WZ",
  "key13": "2kRJ54WoapNeB2ppe8eJXmcP2PqdhB8PdHb3Ei5MjGuc5Vopo6xAiHkQ1ZZDDmxMjsheXSpvAVhvfgHAbAoicZaA",
  "key14": "4oKf4hckvNyizEe49emkANSPYkzw9WE26yWvie5X1b1313mVndQ2ETrJSLChh5fK67RSRcWExQHFhMHDtqDyKRep",
  "key15": "3PQxdqCzx85YXyqRsV1NjRoszKrRAabgiiViMCQatZ4hM1vbfhoahoes2GwSp61qkDq7FrNvshJ98YnGRW4d5WE2",
  "key16": "RbHQBSRZ6PTRjeMvatb11Y7gYPdh6si78Nrx1cXTqEdzGRMJyUyLQb41DFvZofcWdDJUw7NgYoRaR8zv2RsXdgL",
  "key17": "AzwF6Va74oRtjbkcneJe5yqPigb6dn7Bd5cuXfJ8yxW3qQAGhKvDkJ69BVAUfFBrhUJd4umUPveVTG5g1ZQBmTD",
  "key18": "2uEZTAjCBCwgFNZYMgnFgTG3HwzM7nfp8V7s7HbLK2wZP5A7SW3PdcLwKtipSHNZYUfhGXyn8KK4JsTCNkrjaypt",
  "key19": "4Dq1QNeBocCwNtd5SqgYrJMLjMoHqgZaak5wyKega5P9oCmCqmnVxywL84ifJkXHduCsyfp7nZjYiD7fuGdPRYUE",
  "key20": "3dzi6v3rzUUzHi3bqspNgS9thgnxe6Xmcu42uF54Jj3bimiSfRudy9jC8aJoSiRgYmBHtGfZvwCw9B2qYMN51WcD",
  "key21": "3n4vyvGRJzKJAJnozvDRPAqdFoHTFVsNcWmu9TwsZ6R7LAkwsSeEthMQhEBVUroN92LRt7UhPWWWvAYT64Xy3kD5",
  "key22": "2QDF1NoWndHn635TtnioPEwbdLvopQKaH9DwzZN65jMRsTEN7fXY3w87rDkECcpMzTuts8GQ1CbcWWbsXavNoGe3",
  "key23": "3YixaCRd2t2rKrG1V3vYq5ygSqN62ZysfLYujy5XMMeEFWHxjWwh6Pkzq2pHwpH8uL4VE6Tti29DE4Qke1WCxKsY",
  "key24": "5iPgxtpQTtAVHzFVnokrZqzQevWkFbLgyYEsu2sUpbNEqTGYAXDB4mFBHtZVg8JXUa5hRyk8fsCBVTdjXfXpz8Q3",
  "key25": "3vEzGd4XFz8Cm7WXJyoN75V3e2HnF5Jx3sse8AYnxrniamYP9AQnxWnLeEuxJAc7hQKGeitYiKg5cgkJ3TKTv2K8",
  "key26": "N4nGpWzEigZ5KFsG8AEmKfbxmUt9GRCAq87AZQSikRTgKZM396zkB1A6XHD2z78eSFMiV91Vwa5HR8G3vx7tSCN",
  "key27": "5VJHKYfWwvjTSGpuvJLZaLSM5FKgibmQw7NuULTtQjNHU3U2wiEGVHVnHZQPS8nV2CFjtU938gqGmb7WWXvw8dzM",
  "key28": "kgQgou8FBLrdXHwZCZE4TtDDyK6QebvZFWuRzjxy2w8cXEarm5Tyst9Fhmmvpj2zuS1myo2rPCx7X2oSCYzznvZ",
  "key29": "4a3p7EShErCUxVJCkkrUQ5W4icvsT9B9itSsLqkH9rJAU8v9JeiHZyQYZ2TRWmNBn5YGvsYZGySePacxv1oEaFZG",
  "key30": "3xMqso3eVwgMGxtNGHE3X8hhhooMQyGg5sZyo9M5gnjE6mtfDkwHZ9nmn33abH3tsUc1ofntALi67yvs4d6Gw7hM",
  "key31": "44oPKB2xsdo14ymopJ99jExjeYn1HdiqcPTzoV4qvSt9ByMbY7umZKUekbPG7dvVctjQQNzZNUD3eCusJqtkJaWd",
  "key32": "2nhSkSTXFQiXgCkjHx6ou3S9sHPhJ61TeWodrC9V1b2wDJhj8EKE6f3SVbHKmywaCrq8e6S1bh4RJpJN6WahPmhp",
  "key33": "5YhH1bBb1jx5Vik6cPZqQsZoQZPWiEjSSV26sspTm7uHgBVfRLhzZGFMu3i2teDbkTs1XLirtdMV8VJWtM4R6jgs",
  "key34": "2QyXjJEpon5TU2XAyBANSrFzEPMcqtY568uajdSXv6MVwf3h7JLAWwAH33YXKcCkYt1gNgTZQE9XSGNYfZSciadm",
  "key35": "NfgJnkPhWwkkbbyCQdYfcEfVRcaTCtzmG3pynvVmuv55ZWMqiZCh8ncpdaLS2fFzYemWnQFWJ9sHDQYdckP2Qr3",
  "key36": "2CCTkntP74168q86BTregR19tjoRa9JVwQzV8r5dkGQAM6Pw2MD1sQkFygtpJHoa6EurHnghomXPXsfCXQpcHiW1",
  "key37": "4eCiLyCVXtjSPf5CXSz64k9UpUkr1v6soS5PZbVonmkQ12vKR56G1tQeHa997Dyy6LENgbvNjxhW3gRHv9PTFCsR",
  "key38": "3Y9r48yx93oP7ojxK5NwMuUD2EKCGn6KVwGexZ96g3J3CK3ni7NozufAy8DCF8bs3uTFDpCjJFkceR5ZitP32qAh",
  "key39": "4qjTCwzHatEsrSFk9YZBVhrPFTide99hoUGq5NpXUuM5jDCQY8XMQakR54xQwDRNJY9mG56wvpGCACBqxdvLYL2Z",
  "key40": "3reqRn63z45wGemyfBQqQAUpWMCRK15Xjj79PfS7pTjE3m4gfrUMLs8cznVdTk2m9fJM8hpZSweRUn18DLTowCpz",
  "key41": "KwQsQyzYrcaxUhTu879HxPNnJkzAmCg1GMxrc6KCfsxjT6SPk8zHEDvnLmZiv9VHkqS2UjeaorhzKqfJsB3vaqr",
  "key42": "5UUBeGEQeXBZzMA5BuasVPCkKpTzdUhdUodGExEinRWNpQhMNLsVe1MLG3e4c2hUAK7HMVnFtdj3Zz7FzBCsZ2AK",
  "key43": "UiY52LecuJoV8Mn6wcY5uCiXpDUZgnyUoaoyXFhsRnKLvKeXnrCMsrGcUJQftxqDB9vHG4QwhTGyoBX4x8DCrxU",
  "key44": "4ExK9Adu7YJnYZbseUbPywx3D4Xhn86EXqBmNKH6a5NG53eM7BChfB3DPwvpcc5bT1KViUu9LoEvVd7or46wiQs8",
  "key45": "4SrcVF5ptBqGMXaQrxR5FkQezi9YoLkA97HE7k94eqLZcQ5MBjxNKWbmK7Taw6gVYSd7PnJoCDnY1uGaXLMRuHLX",
  "key46": "2kLpkJQS7tNxwQPufnCfxan2ikwrko8wkNtyYRj4gHAC2iwzdoMBrjac71oL8y6BgA8Q6GWVBtSjtaUgQxAeC1WY"
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
