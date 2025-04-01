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
    "2V8GFmdabtCqgLNQJ8Ky98BfswrkD5QcSPkfZLQakfj78tT8b2x6P8wGPS1WhMWnNtoWGh5JSngcKomm3xKoYFLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wCLwKuBKQge1eHnY8ydFQFprVi49bnN6V3fucYAM5v7R2S9RihHUWmbxHGscSwQEgPBwv1TrsGjX8RLoen255XB",
  "key1": "4ah2tsUEvbjtyUUXB1vuaUt9UGcFPKyJTXQWwG4VKTC7LneAFztYJmp8Lgnn9F5hDppnumixoQc3yaGHYKj9iXQ5",
  "key2": "3BiC8Y6dRjj2SCPuUdPGL3RZMiHz7wvbnmVMTeZRRVNnxMX3UHMqFHSKFifADyMbTTF54gDR2i6xURJ3KsE2yBqB",
  "key3": "4HgFvxEPSMtXDiQUsEqyDh6QTRME8HLiRRLNYn6n1kteCDmgneTPa8JeAZzLrLq6hn4QmTisZfDdWf7fepnHWtNZ",
  "key4": "2iBfryPYx7PzMQZye5twrqdeQorLLCuRSc4ySnt2CAFxDGbZ7HZBXgk3Ya4b4wHe3SpP8qWasyfuGLTcs6BZWeHE",
  "key5": "2nirvf2LeSaySFrpZpYVUdCosqtj5w47pRFFH67cgySM2iAsrK1BK6RRRFpywJ41FcnwJGHJhvGELdLXMHp8c7aA",
  "key6": "2fQkPwQ25N7JrtEuBm6P4XdA8RKLjmWrZjSXfZr7H8onEZFTY1nu7Gxw9UHkLHJDGw1R76Lj9YJbiQeEs2sYoABT",
  "key7": "7R6mPR3D5o68rKTsvk1PSK39Eqp3kfw5v7af1yHWvpJG8Am6CzYaLooLqvJYQoSoASsZDaVB3DJ3vpeJTqKwb8T",
  "key8": "3kbgb4uG1Lqp2DL7ggUKJfWYjcoFJTX2pvfSfzJbaGXausMzikyD1i3YhVE56SEijDLmZWBzbYqXzVzasQ7raxqh",
  "key9": "336MqpZ47hDr8rcu2RVLNdEXq7PUSnzzgFLVNrJWuA1Kzp9syezLUvqaexqorEomSFr2SNNvW6z8XTmAozPSx9Vf",
  "key10": "2xZiqmkyYLPTSB5jmd9w1BnAPArXhsRd5kXR1yTft8BwUiZNoXqzMx2wp7EQRE2PT8M1Zma9EXpGqLJtY1DnRZWE",
  "key11": "3uxoqDdvC5vSDueAWC8cKKPvbofBZmujW48gcW2F2Pf1DBoUfhJTRUZbjEKkVNZVucmLuX7zzo45BUZRV9EuwYMq",
  "key12": "JNekdHaa4vD5mFUDBcRsz2wz83s53SMiZEybof1UyXRLNpia8saRRSUSDzbp91cG4vD2t4k5RzptnAoqcDiendD",
  "key13": "2HzNEXAn2ToecDtwNJdicDH1up6B8QbHXz3W6AsqCZbUbHHzrem253sx2J8vYrndXSH3vbR5rVBzMLd2iyRPpWPF",
  "key14": "91Be1bUcnjXwtPU2XSRcPa9sBKnBhozp2sEcigEqVFAR5pVb2x2sKRwxLc33ib1paWWX7Ny5aqz3YVDQJAhc4B4",
  "key15": "64giGwoohZtHpTSRp79peJPBhDGNE6mgzNKHM5hNt9muCTwSMGPZdHrsuWM35isC7z6m5huWjpJifgkb8HPG2cKF",
  "key16": "2aUFDjhwsiMZBsudNNzfbSX9btfoQQBxhodfCy2ukTR47fn6znuiESXgw1GzLVkUDP2gQBEN1w6dpwRie7b7Dsuj",
  "key17": "5zZMPgvGkUc6CW97aDxrK5vSXrEK3D6RpMGgvwWGAaafsNfPvrw5wMG8Uvk5TuPzrXTsAK5S1U7fgK3kknpHHybc",
  "key18": "5ESwBQSFszjq6g59y6iQQUSD35DkyatkmAYyPgqZHtnfh2rWMgrfCbrFmvYRvyPSn5Z5t9CuZPHg9wvn19sRAcgk",
  "key19": "2d8U2E228eq3ckYeA9Yh8Kc4oTiEfZS3KuesEgBqs38RquSYscmjC4AiLtt3R2Dj7yXBDCb8fZSebpSmW2BDutei",
  "key20": "5bvC51xGDyysWsVFwGwwAGvtUTxUXrEL6mpCKs5WEo7xDoqrxPSuQPqo7N7a8eK639wMLxuYkVbRQsQ5DeCbAuNx",
  "key21": "5vmRdzzmN5psnhVVY8kEtf1VLgwrWcrWwkTQNKLSNm85KUaQNsksPvJqnxqNvEPgPfEzghcmgtDvgMtz5PeAQb4T",
  "key22": "5dec1pRUZSC2w1PeE49NK26MQcJKb66EuQkhAgYS37urJJGRskhMfH533CsKK9djuyfDDpiwif5Lo5GoU3ym35td",
  "key23": "nx9DjrzNpHCvsRrRWZ82zzfadRXc82Qrr5R234T4vb77fxKpMUMKeFSRjvj4Vry7kW7E5CYxUVD96GhEyMKK3wP",
  "key24": "5qsjVswQdr8Aw7rbbDMXBVVr6epzxw76JhETkk52ywzY7V5i3YeDDFwQUdTDoRHcJo6ueNWDiyhAxDiqAzzeHwAt",
  "key25": "4Syx4z5yWjEc8NdH4fLCdQc2g8h3UoeyLJrJHKmLceJrT74mCxk54YJPM6qu2AGi1GgbjHmX1zQ5xxSAHpsd5q8Q",
  "key26": "2HZrCXenqXzvCPpjsXkMRUCqcw5PbuVnDRFPyJprTx1myXxdmCpKPkEiUiL1VKwEH3r4AjiA74wurG4Hg8gjZw2u",
  "key27": "2CedKuUhjLgXEZTYEaZrLTPerEFwRNzefeSXJzLmqvjwP5ekUu5c7Fup7HANLQ3vdyPPbRLXttMbQqZVCW1Jx1G",
  "key28": "mUwySbRWHBRKFLcoMNYBiedqrga5RZDXmfwytU9jASpfP422uNXbWDRLom5rQQN9iec4FewEpoSiQ9DwPMirMGV",
  "key29": "4jQgBf7nyajAPTFG18j6tirPCwdKrXvHUDMQktouNDQwD8HogtWFNxCoprsBCcbU8XtUbc9uyZg835Ckn5jDMN1u",
  "key30": "29LW4NFthqT4Lz5cyCqrMCjwRoxWyUSdeHgpmc7qghisgKTN6e2ZihkiwxbUV3YQqtKDp9azZeQY1oGGXuQqWPde",
  "key31": "4e7JMentfAmX9o8Vai668BRtohFYKWuZvaYtSV3Y4vTxzNzF7Gnv7bvTuXi7MJVQocrEYVR1qroEb2ZAJYEGz2mZ",
  "key32": "5iGbr814QrtSdzxwSKbA1tAZE2sEtGx2TiFsyWNi3p79KVVGW2rHQ3LHnzF3b9NpwMTtGRHDaBvutmJDuMkNMNH3",
  "key33": "v5TCmzamqtLZZJ2w5ik9r2LF6xEx71vwNEfdiPd7UF52kVwXg9RsyCBRZ8G8dfwEmdG9HbVzvYsPKWuxk7gXihx",
  "key34": "5wEQ3V3xunfqFDi2iBLTgqqHy6uKXFdtwTLcpZj3vdePRDh6h5wyUmoQag1L1xjpFCnrCVv23RdiiJrp1RMHQWhi",
  "key35": "4dq6Q5UsyXoBWA1XbKwrFD2UYKVhX66t91ZZrvsLd7HNgXityRCkuS1qLu2w2hQ6ZB9NiNtLSVLe1q5SpHatK189",
  "key36": "5ExdahiVcVhc39Spds9Mw6WRvkbzHz9XM41B5yQLVphzj1RyE8wvP7JN2EUUdWBmySU6uVNdK4YeaZyKSE8Ba4An",
  "key37": "3wBTQrx3AqJJYrnmZxUNcCLUjafmdoVzzanQ8Xn34YaqTteZ7s26Svg9ooifeWnUw5QxbgyXfuLFYQw3sEUSW8Nu",
  "key38": "3huR5P2W5uQ82JgyuCS341is356h83jJG6MpicfBmtpECC8Ezo29GdoYL82cp9niwivXdbo1bqXoXFHVDZkHRFSi",
  "key39": "3LiHGGpqsKFvrcHfBjN6h2q1r6W83YwhYfivfyBkCXybo8DUR8ogWCxAY4Ch6Qky5ki65ERmyqMUC1GW4y56yzYs",
  "key40": "VCwiAwj87wdEVGu6nHD4Q4hYZt4RG1wkuSbTmjzL2Dsu2HVJC1GXF1YXnYHbmpcb9bf8o2sXt6DxRGAsjMAXKB6",
  "key41": "39gm6DTeAFTdCmdSksXtuqVFVHgwrt7UXGkt8gTQPfJhmAvhLzPUTx8AzSWCQ8GtnZwn3MgfCsTNCAwQkXPppzNd",
  "key42": "A5TRnyAXfLhh9esJYMbrHkkPSPu89YgGqBwsDDgbwax9fEA8jAcc8TMZPukYFmj3XC78oRbBLEcmahJMKTk61od",
  "key43": "5xUtdyisdphJFWj44NdPDHkkUe71pqYexm1atdev9WCDabkqubd6dWtwTzrWtKk1jGB2Q8FA9mQcNHnN3gN1akX1",
  "key44": "nskXyq4k6ZcZdoCNzWLf1bAzQG4UgHqq6GWUGMUcYb4Be7WU8SmubqLYwShMixrxEMbwQxrVKfRnR98EFAErt9n",
  "key45": "3doz3wpgM4KLMqxUSLr1KzAXjWyAoyvK9fLBsbmg9QHpu4JxXCZayQSRHvz4gdtKwu7AFeDtvBs4bFAHahzsj3Gj",
  "key46": "5SPLkvwgi8WfzTj99YxXL25cJL2z5gX87536F7JKH71RMUtCjNquBvMqYZhRh8k68sKZYVExqh1rRQU2vHUQB81i"
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
