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
    "3RKetHnKsHHmH3bF3ygZRuwjG61uBq4m9YM5iL4NKHNnLsVW7G2N5phFt7uh1WBpdsg33nScxfyh2L38wawKWbhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hhRTsoTeQ6Kzcn7Pj7cStty2JwSFv2b7wqPcUz4iJuoPwwCkhEeiCQRMqEsMPFixMuGmL4Kg9243JSEKYpzZALZ",
  "key1": "4MmFM1mnaB6CXGbKYnRkXKLws83d4nkf8j3srdDiSnYJN1r7qJ58b9Y3TG5aNSVoYLxwZ6a9hXBVV1CaUbCDYzLo",
  "key2": "dHtdPwKyDpFTuoAQrhk8mqhbiaUd5rok2huXwy5BjhMDrP4sr2wrSbuoE33fNkRsCqNUbfdZJgRdbz1jD6Kg3RU",
  "key3": "4VmJDS3pFzB7j1JS8kuHf5GmTdk4mAgUrLTbimFr8dAVG3So6FZzB1mGtn5WZ3sEdJrwSydK1vjuJPKSJTaCWvmA",
  "key4": "4vCZjr1w7mwU4wXNmmnPb4GbjsKhvet1HUH4WJ98YioxLSSy6sLxs4a6G7LQTDns1oDQUqWPLkCABNrrm5AM8YUU",
  "key5": "3339S5i2m9WP5JNjcvY8uFPzFvREBr5RyDjRNjRVcdyYWjWmwFjHnKLfbb1389dzXRa3KoYhDVzEj9AcKpVgNuGq",
  "key6": "62Nde8Lp8i4m62GTbuhP4yBd4dFSbGiyUAJ4wzVZeZ6BmFZty4x3KHURMPRAKkZhnXcerNVf8Qc14Wb91khche5C",
  "key7": "4GAL1RnJyGCHXvgCVEGtxV3r6MqT1svd5HCuVCJKFgJEKmaNYVvPUPDFCEewGZQD8aXoTct4WZRMJbMnQ2HQphT2",
  "key8": "DQzjTuBDjP9q3j6vFffZBKb8jv9AbviepLa6vUjjqHjYfnpUqwdDyR5M5nrudUs9pGC46TVpAT5iLusss7UGGwt",
  "key9": "32Svg3zjLoFNubMygL8ipq64VpS3QsSyVL773DaqqRHLq3f2Te1LGPYXkSmcoYQVCWB9VpcupFH49vzaAhDYjnEf",
  "key10": "5o5ito63wzpcRXpyfzwyt3SbQDW8LLtV7qeajJ3P4B14Dkz7ZAS623kWN4k5eCRksMhyCSNtskhFTSqkj7t27F7Y",
  "key11": "KvUgS38TQUjkYfZtdTVgdVgR82cpfAXUYxD8dJGG8iyyTZp6g2XiddD11nBFjEvA9DWz6T1NsDkL2Nkyjysymdg",
  "key12": "3igTCSno1hZYYjuG5wUUcsm6mrt3zQRSACYwMQtXus7gbhXeP61mH6rcG9WM68ZQedMY9m2Tm5NZWVobq11pHUs2",
  "key13": "5mxCngemiJ2EhHNi6huEmAgBXjT23ESzTA4jUQirLPDwqkX5yWoU8QG1sqbjmKaukfaPWqd2dUcCcwAABDM56pE4",
  "key14": "5Mu2ahziL44vKBVkZG7kxWRhVktxWiTBvmSQ7bZBTfkwaeLTL5NC9xVbGETG5wosuwTfDvECtVT2hbmQza61dqp",
  "key15": "2ocnqwsuqcXDBhArv15KTFkLXLGyns8VZZZ8ZGLLpjZbAgMYi3JX9iZBoLb1U9czRF6Tx4G3MZ4XkJnBgkpTHLCj",
  "key16": "XJ73HEFzafRmBXD7UvfJaSfXM1UYV2Rgkuq7GQZiWPiGU5s1pedY2Wi1rp4rah8V4EB8k5xcUcJabgYwgWeHLwp",
  "key17": "5Jp7w6TJLUgRxuZ3eGhkaJedLVkB8CotBq28hUUMmhdceXSQQPTwE8TPXtShh5TdjT4i4QuW7cREeciciddi9qVK",
  "key18": "4rdExNoL8G4ekbYEm3HJbunS6vNBjS6ZaGouAQkRwDzJX5HQHSfVh3WiJuPzYei37kFF1t5XTSgj3pxoJi8SacZ1",
  "key19": "agSZHyVCsmAvG7HUgHz4eSehcxF4HrpC58U3YsYLR69YRSVphwGFihisXkdUbEuAEkN8vNijtc5USWnjT44J15U",
  "key20": "2SHVPvRyBRN88JuDoico6xVHcgGT5RJLbJLHj8kpbwHxyU5UcTtEPA7mGpn5yYWfQfrBVerKj2yvNnLVEfCSx24P",
  "key21": "3GS1M5Ep7u2r5rbk5axVgcCniswfofeo6itSykvjqNBtKAUp249o9zDwvR6CLpkiLuaTFLSip7oH2EwWFi3A7rc6",
  "key22": "2gFux1Ba2hV9jiTFZkij8X4zqGHvkxLjRpNpg4WNaUxLXvQknPS1qcWZqqrVcWixijgUXoac4KQZH2GU5MzfcrfR",
  "key23": "q3NRgmEvRinEEeAVYwcHgYwYvfyCpz8jrGJujikJvBuPDtb4XsAxw9vEmhkhfy1rvvPdo3vZ53tiTchnUEtbJUM",
  "key24": "4NKMfpgMaUv1ULUSvLpoqLGDYETKh9Bc8fxAZTH3E9BwhVboRDUDXovPrUYWt9sJB9aEEnGJiBYCEiZ7roxVkKi6",
  "key25": "3KxWKwQamQtZdb6WTN5WGpSGLZJzBfrrjQEcRtRxALCJByc2JXxLgnSicKwwbDoYarY57Wr6xpUU7CTcMvBZLnvZ",
  "key26": "5pA7kTRLwbkTQTqosms9k6pponNr5csLoooftL5Cpbrm22s7Z7EiJdkxchbVjDMUwLzusQFT71d9jzxUXNB7NqoL",
  "key27": "647zmJLSjkjVNNsjggMwyGfmUf7xNXdRWs7SbKqGwupKXCFC3P2bLNUo3grwL6MWCdsRDcdkQPXjiKdDpGp1DmE1",
  "key28": "4Ld9EfZ8dvrxJorD7K7aiW72XNz4rDAkQSUdRCria31nntjFftVHDAq7e19i9q6saExcqq1B1uQoE927smPacVPo",
  "key29": "3Z2xDBHe8razQ2f6XnieiYfeQoT85Pjw6Hswvp7uhoLXaNUjU3UpKHzeKVneMQbR1QxrEZPNQGaAaz6SG5BtZgH",
  "key30": "4NDRnJXAfhxx4UfZg4tMrviwSTPxYE23iHbTJdaQKJJZBEy5T5Z3htz4SW5yG2PtaAEQy2oy41jge5mUkWnmv5PQ",
  "key31": "61a3uiUrefQFrg7m42zRphpvvnut4kSYFGMUfUNzNkLfnYnnGTT1MFrDYzcRb9MTUZR3wTd1guXFsHQk4eutDnrm",
  "key32": "44vNfwabd2zfgZxKsA9CqLeJQYxHzPp2GVmDSnmjZTKowSuEuy9wuc98Z2CiAR1J7FqqfZ18sWupNgzCW4AjKtMi",
  "key33": "4z9DTVL1doNriXbWgqtpX75Edfbi6b4XtHx23TJ2XBQjQQZRM8LfCCTPtzYTP41hmf9pnExm7vae93dt9PWjFvTk",
  "key34": "5RhsDcqtA32wLkB8WySk2Sv7T62nE91GFJj6n3ktGieT67ruJbksG7NhRuGEMMm4yXCjxQJffzx4y6CfENpbBHwH",
  "key35": "3tRRiDXgxBtHbsPfN85vBP4BrrYwQkJao3WY5A8xNXWxqLtt2EYhgYcdnso14SSPHQTNwE7QKqHZNqnNxJo8bRHc",
  "key36": "5SPYLKD7hQRcPua7rvPbop1GWhA7vJWJwPLp8ThYaqcSa3rqKB4Lyb5qLQ4wtymusGiaCrSZ8hhAbeX7D1PYYHm1",
  "key37": "264S8AbHW8azafNMbHkHb57FUFA6kiUu53uBzfu8H9LaeiturVLjQqYUw5VQJNP5PtMbSdRw53byrK4JZTBBjnvV",
  "key38": "hV4HnDZPJh6evXdNQX9EgyffZXq6vswUWXGQRTFduwXxsDJgpnjEjDm8vNQ16a59x8Jt5chSH3zVKNfBuXEhxxt"
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
