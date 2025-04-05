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
    "5MWj3uAN4Wap8DAfjccVCh4XWoc1xW2mSx4m3UrYzgJjsxUqvEBUWXg9jG4uP8yJWZ2kB8tbFPMRbbyAc4oSsjDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vPzDGy6K37SAxNaLk58b3RCqApvLFnuPj75hJFCjZLPNpvVU6CTFcBre9A5rvzVsQEf2g7dXCEy7JEqxNVnC4v2",
  "key1": "4a6tYZQRt8x2VLmWpqFRnrcCVKvsr2RiNraPRXuP4F6uEGkhjUjUFXs5m5HMM2tqprLvB4rF4q6ym1i5qAqubCnM",
  "key2": "ydf96wZ6wQkUz2Xy7BhYKziHGYNrTKrfiSA66DzFKdx9b3JGqfvpawxVmzUbysmWtbDE6DLFURj2p6LAq5w6PVF",
  "key3": "31UnLSy7Pnibvb7dvh3256wFmrcdjTZVrQcxDZLWjXfBZqJdgAR8wS5Cu1q8m4gxy77Udq91vK5RyQySCEyayxEZ",
  "key4": "3jy9HoWKSanUrHejoJ3rys5rqvd3fKNaVRtbkwZRw9RrCKbPSSSSZg4uTc5ch9DVXu28cbv2vCF27t6phtDtpJ3L",
  "key5": "3hwgjEKX3xVhqwVgxKAxuwtYRJHhGmXU14XGjggNVuwYHU5oqcdNnqCpDdxLoVN7CpYhkz4GPipSB3d4qfpTrNsw",
  "key6": "5QftyzyTijqWChurtuNDBEwQxn7PzVoA6Jkf7KwY2aRmnuTgbSMpq7Aj4CQz1kd9ZVe7WBY5KUSMxDaJwfnWo6JA",
  "key7": "4HyscsJEq2sF8uHHmcnPFNbbXyQ4Jb89Moapzhoez7Z32NaXZy9nFsJEbSHGcFzF5nzXjWk81kMnwXaBpw9rAYPo",
  "key8": "5aWW9858ThwCKooLRZP1Qhn4bz7jaPmsQRUnvMAmik7wytEWqcbrsGd8S4FqYYJpzA3iVh9XJ7LwdWUit5F1KakU",
  "key9": "VMHTqhaZMvxzSFnCZap2NhnvHobYS7aJBAaqg4cMXV2WTEzjXamYWjFc6hQERVNAo8ng4sjG8PvPGsdEzXH7UyP",
  "key10": "5tPTSk31v7zCL9wNYEeVqq4ynPQoYafN2QpHTBRyShdDPpDbs8EhpaU9t7JYXdKvu9Tm6HRfWbiv42wgbh2rGfYR",
  "key11": "5t8UVFZwkrcr6tF4WMt92oYGC2mDeWrc2rU6aMVt75WkB3s7VdC7xNmfCMi6CKKYAdKVAmyLGoc1zXwXaL9t48c4",
  "key12": "3URxxqWkozR9C1WZA5yd58Yjb9uqPDWbRPALxahypAEBgf3vP53cYFzgYT5MTXiVXm3m41d1KG85DLEEen48NhFM",
  "key13": "4fXox86MztGjCN8p9fQrvAGMCn76BEg3KMiRBJa3aJyQ1N3uVrJcYiExx9gL1wC3aqiLQMBea9rD3K59V7LGxigu",
  "key14": "4hqtL7PbsbzcBqPT6vjaysPAtDZDmeS3jpXUPtpr3Pyw3ubKWe2jqcN7Cta3emwxnGsu4oL7q469F5A7Bp1FimQ2",
  "key15": "42MhZrHTpB8WjwHBd5YenmntJTDu255BfA5pJmrdvCDjHtBjcnYmvuZtD5qDfiHbjNoUExSshoxFn8LwztYZhK36",
  "key16": "3TWjBXsHnw6JpGNBcQaU2jg4GPQ1M98y4qDXw6MYBLk5q1FXq3o53VeUwpx67mswgDzreSGYK1TAbZBwShSzUxAW",
  "key17": "CwCJ4sDFL5GKY2v1GcJ43vpJAQvoKVRGmGY6qzi4VoFvEGDhLVPwA3Q7Ko9mNo94c4qK2CYbsmaVjMY5K15vSvk",
  "key18": "2okFhq7Bb3j1aMNkzPwaMR5QpEospgyBBWaDDSDWw7W1G18Rc27b1EvC38HsE4nHVwgxD8rgTJ5BBFRqo1y1Fnxi",
  "key19": "5dbqx14MbBmV2Z8EXW4HkaEw9Rd8WQmR5sHkafDuRSeMAMRTxG1mFR3EfrtN4oAKcpvKYKKG3TGqYRimTUQP3dFw",
  "key20": "5B5X3g81GDpY2zeJWFiJUDiJA2MyJfr9LPvkv72bVW4LcV4gKaiufSYEJx1AK5AiwmuRQcEsnaqS7enfVX36SMAr",
  "key21": "3aSGg5oy5mKuP6Z8MitLUvomupx8hFUVMKgdRbrW8Wdjp21nHNFCimRpLNFkuU4v27S1PmuctDzFTsV9PW9tQreW",
  "key22": "2a7R33tr7gWUB1EPP3YEfSjaEirtKMhgahmccbR8ZCwvPkg84nPrMmpWL9yz4kRGXXjrbcBVJ4hJ5XVzvHZjPj2s",
  "key23": "T9X8wc4YwASzLBbbVSv6irqqvhybF74VLs1PZv7yJRaoNNNpj99dEUTFp4cXXNg5mQYF7ExfZXapbRb63sS888R",
  "key24": "FmDsxji3ZnrubFssEhT7nGvDQ6tRCaZEVR2HtFCin7prmHL7zHDt8xr3a2St2WUrXsnV7YKTQR9ayzn19WgAreD",
  "key25": "59Pk8hCqLyYoekiEcvyoBBCjSVP97fZeSo4qC8w75eyko7183MWTEaKMnF4Bv21e69UhnK6FzVfsS43PWaaekE4y",
  "key26": "2EnCieq441BZWthWKMgojd7m565nUaCD7W6GZPbAbtWtzygPAhJA7MmhXVPifHpSbesx3dZqoCUjAn7dVB6QFSXZ",
  "key27": "3jn4WvWAq3ge9Q3N7fz8jvoKx3rearTgtnzSnQbL7FRGydNPykcnPZueYV4SibkLzsqMW45M7QpeSzAAdU41bPs4",
  "key28": "53bP19joE7UEvKHRrfEcWrv68iULASvGrAKZvGWyXdbt1PzhGRp3LTb3zedTeNYykdt9LzfTTdzkwe1rnz5rgXzy",
  "key29": "3bqQ3TGBZoVZCPzyZ1ADtGbUSaP1hxtNUNKhcJ2pf67d1HCx4evF9C8k68pR8pqAXHZ6WEwhuQSkgXd5gJjMfmkL",
  "key30": "5jsEWNzzL6suXHNwcvsUgSAyUtk2AJPQViViLrAaRqDxT1XKMisjaPDauFkkrCgWniMY58Lch8HKzxWDR2QzNF4Q",
  "key31": "RBUWSLS7oaLqet6xo8FjadaLHSLif4ziAeRr37BFWE5YRFThB8GBXsMmsQnkGCmVncL96dpVBfGCCc3B8FykCzM",
  "key32": "3uQEBdNLnjMVHT7xvxu2g6XFAhRmZfcrD2amEEJwy4jDXhtyGQm7H5ARsYbeTaF8G6t9J7iL9kqBVpw1BNQgP6Wg",
  "key33": "67HihiC3G2u2R7174fe1txMQhhMPgohXwxZqajxJ63vLhi59c4YUuYYv6QGiaex35ZVtVhy1CyWxD3k3gpTpyJ1i",
  "key34": "3gPUqkfmhAxVoqhN2t8XDnRBhbpdrhhajKZMy94NQEXHVxpzg5piJ6zVtVpZndJEfho6TyPvgceSvwaAajxuWWpf",
  "key35": "5ymMGEuTJqXoUsU8ZzyXDUvAUEvQGeEJHjPrvQMnrVU65BBrVswJQg1tDeRK7TKpv2UebXdcQFybsUhpjnsUtw7P",
  "key36": "3HEno2bY6dSUoNaDTpcGvR5SJvbfF7UxaSy7zoM7CpCdvNJD8u77pKVvYhpgZHubF7xDJjDtcRK4xs2ZoDfhf5rZ",
  "key37": "5WCLm33nuHYxEFsHBiTdy4T4ZktHN8VqCCyrnjPZixxtg1VnmSnMDQoyo4xCevMVdmBJTPvSE4R9qbJp5gRPDNzo"
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
