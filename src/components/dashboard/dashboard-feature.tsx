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
    "527R1gUbqe7SrKHGdtXFkTrrCZJvk6YAqkLkMzAcCC7pxvmhi3HBYHkjGpP4kDxQCMVFaZBYqufzZqSdb2CPbErV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wscuH9GtXTUemzLazFRfrqRYgE8f1AJhpqJqgMWGCqx6npTdHqEBeRjwpLE1aJ79auqEAxhW9uSZJvdCZbR1cZ6",
  "key1": "5YSfPUaDjViTr3cLKnDs4NiSuAzFWhJRHw2HXmXBVPu2Dt6V4VMbRsimrxnU6drGxs4XUSJmw32NkQp2oCdA2wjm",
  "key2": "NAywBFvE51UWtHyfsMG5xvca3JHZMvHSvtJdEaQ1TbstEvYZ81WroYrbuJL36uuEsCz5sn9m8xz8SYiDeUkVucR",
  "key3": "5FUvEbjeVNf9p8uR1o1dYsRLKD7dseH4dVaC5mQQ86PUMjeBKCSUzg6bQR16akos4sKjSYzwgaX5RDSnz92jPkRL",
  "key4": "61x3quptwoouRbB88kx9gAGapTA1prRsj4TYXfvWbxUBu1MRMeJePbqitkBZUbVVQkz9PfL5gKyXAHZeFFN7Yr7x",
  "key5": "5MT22h1mKRhXVvdwTvq3Mv5gVpGxjiey89rTkpA8jT6A3yMEzde4szq28zo1yH2zBksJM83p7Bn5saN32CYj1A2K",
  "key6": "4bN22xyKPJ51hmLWRjMt6E2MD3bUea7tNFXnSM8dVcQfKf4xK5Fdj5o1oZ8Qmb6UJuHsQbfJZW2P8GaS5wRMGs6u",
  "key7": "35Jk33QVG1ggAr2H5wyJfWKaidujFRUkGQ6xrsfiXpGAcMC7Db2oHRK1EFZN5ZqEF2oQ8BZdVN9xCzNCM1bvgMHb",
  "key8": "3c4ekegss8p3VHo1vqxebBotkCJXSuxSfWE2mgekEZqoVPstq7GSgDU1xABixbvVchSDQbNCF761enDvXGnaZYSj",
  "key9": "sCZm3PZkAekXvS9QPNeoLtCSXboGKQPG2SPWFPoo6ruyddks6YY1hmdwaPqKiqAdXxqmUkjUKt6jygPSudsmeKy",
  "key10": "34WaLSkLX7ZHKdPGoomjzSszDBbTLb4UciPYcUQebu2RMSZU72CeMcztR8zKFWwDuFbJCMfYajxJuLnaqs5PB5CH",
  "key11": "UeRYwz9Yat4KNn2kDg3RwjpG3ejp6yxq46NAwH4xvDgk5mDAa61vScKML7KseUpSdScrkK6sJAhBhmvr9f8uzCd",
  "key12": "65BhdzKALCqQNfTjFPjgQtCAbRqn8ZLiCM8RyTN7LLJ7tVvJnnPVKxym8RKXigLj4A6AUrKRu5Wfmqfnsq6fvqgH",
  "key13": "5F179darM74VKqdxEDrZzP4DhXS8Nt9EsnmDsWsgXxZ2mrNYJbUrP1jU1wa9ZtmbWW84cYaJHxxcop5QnVNVi9ZM",
  "key14": "9BzAMDs2fgw2GFwcAy3o61uW8pxFM16nL5nkhMfnqY3RgEV9LUjecs4Pu6Fi6QQkTy6ZztWa7E5NPhZ7SZv1HCr",
  "key15": "56ftj3Pu6fDyyqJivUcDrGzjopKzmYqNKwEDZhaw1Tdk8FkXLSUKH3kekCF3y1Zx7H9Khp3KR7DfneBgyU6ngz7C",
  "key16": "5hVapC1bjBvUSMSv8rQfpwEaa9HSirnmfd6QtASgjwv3QLnhLkwQ4M8Ru4VmosMFLVpveKxGGkSkXutzWc5wcVix",
  "key17": "2CyUBoywf6QNMf3WqkiMNSddc2fHxzQ1knpsxLsPGNRaX6mNBB89QKwFvBvRbiXGVFsNwWEKvAjXDDcspejnGVEB",
  "key18": "3vYMos31CZtUS6DwEjmAqUfdwGWzBMdTrMB48jnk7sWvJozgVsiejGh85HQir6xYYtTb6feywJCnrB4dS9K4kPkQ",
  "key19": "1ACME6ArC6nUbzckhph5V12WUjy1FWfvtamvyr1b1NS6uqCuvVuKtrU7ejmH6kGx3rHps2Exr4iMkFxZ1DJJm97",
  "key20": "5jRBLCoAtJ3XpfN5tXP3gwgpnNfEtv8UmVPo5S43iSj5to9R3rxqvwq54tngWp1GjjEqgDYTUBe9H5HAtAfgmtd9",
  "key21": "5WzS3JMRpM4Fy2M9swpu82dRMhyu9Qyn4ewKbwdLPABbUZdrrJj8fAd67htgDBDPjvtfQqvBx4BKiAKTGMfRuPbQ",
  "key22": "574PF1DJUWQ5Y8Fmz25y5hAx5FPE3wrFv4CHZ4PXYaBWKapd22DBpbNFd3v3uG7TMT3qNezXBRi6qqAn2daVfLzV",
  "key23": "2wZP8gKpB6ghyUmY9hTcDomZFM4ohweqeuEG83xNGE9yvZEUU5sArSnpcC5fDdvMaJnCrm4Wr7yN7GpsJipGrjJ5",
  "key24": "6ynV8t71P4ZYNQf2xjs3WDgchMaz6rnzptiqc1K4X9BfHnZ6PGBWHc4bXxzEXDseTzYyoyHBrCKELw6X6q1pfCo",
  "key25": "KTsuF3Vt7G1uPChymMGyY1rtFBYqpDqPbZ4gyWQDiaGajska1YCw6kf9MJT2dp6f2QkWcCRmmrXWwgjJqw1QVCH",
  "key26": "3AjcHkFStB9vij5Vj7EBF35cjAPY9AJEWHsVJ4y7wn7ZpizcCYMEmahA9Z8TKhAYuwR6KzSYhzHgLiq8P7dtayAi",
  "key27": "2rTNopiM5VA9QewwBRm9i2nxTJCAxwiCKH1Gc5aUTxngVip16u7YYn7ZcDbzREeS8UKMhchRyKRcPaF2GB4cLCVn",
  "key28": "5uSvicnEvDY7dXZgDwsHMya3E56yL8SFmebojYPZJneUxB1i9PKCVLtUYDyJBetdho7VN86R9GXCLHQuM7WuBpME",
  "key29": "4hB9nFgCtcPDJcY7PnCx29WDb24HR2x7a3FHsgFE2V1jmzgMtHTPG455JasetTLpMkfeyBXSC8LgextPo9TQfYWy",
  "key30": "4sKc7qMGfThjE9rSEPUsGmNGA45GQ6gr7qgxhXdkzfptTQRSx9JWWP5TVs4gbo5Xb9aH4vTBjNBPteEcTGyh1cUR",
  "key31": "3HEH2mRXPkPtSsKMrdUe7dT1CFr7JxDRgQ1yA2t3VjnD6kZLRuQBEFddUxbxevVcybj3YzijpWNeo2DCcoWAYcU3",
  "key32": "3Pjucb7hzJNSjbyT1zsx8BkgVN91nKERYz4k9qNnQKAeEGXHqFxgMBzSjzBMhpBMnvCizPwnrDNZMcdAGuPLqiK1",
  "key33": "5btjq6yUgssLSYxPFxE7u4tcpE3tQL3oSZngbZCcBxAvUEFkdPS8iEH7wKSxMc1oE4zdmQbL4Fbarkw35jPaFr2r",
  "key34": "5wkVGXhTtELYtbhGREpQTE4eTtMxnm2xwJTqCPeTUHkVceumYGAVBkhkC3PGnpEzcsJXUQyNo3SRBaZg6prHQabY",
  "key35": "436f21TNdVVqjzbjk5KYGJd8Q9Rrbu5Z5mfARrR7wRSuqZMZWyU9Rjk5pp773kLoyCLRKLwyouezgKQpGyhocJen",
  "key36": "5ZSqUmG9iosVQinmwmrussuSdEHXhgUHuAHnksKVkKPbeHmeddVMrGKPvLFtuXxu2mbXLEyUUj8R1dyk8FB3anSx",
  "key37": "54Dv6fL53EWLxcv3ZCiTFWovWVMD8f3CZQeLZPhCFyEa1H2oJXQ8ge7TNASLYcAydV7mbBh2vskkDdR5TCU1PSiN",
  "key38": "5vpqVJVicg3DNGkw6EicVYbphZwezKrRCShYuZVMUHz7FCPxFu2d8txQPd5xJXDyzD3bb9fsr1Eb6aTFJqMCZ54d",
  "key39": "28FXb9kBfFkPmPa46zbHVtCaGhpB4BuYkQzw6APanMV8SMiAUTrNXf65QvUEbffa85TvgFBbb4kbL8BBDqBP7EDY",
  "key40": "2q4ePuHuDFaXeJ5UJdQqqkvMkm9SYdmr7fQy5WzAxeMrVh6n9h1SQ9HQCD31LkM6sS7hZztFgGAgWSgNYw5kqn6u",
  "key41": "5vJdPpMDPVFRkQZDqcAkCpG32SwWnVcW6jeXR1LpMpPKE3yKCmrLU7FALqbusmC2V9dQbpP2SNSUP9o7dbNvDrFe",
  "key42": "3C5ZNcMuTfksGLZVzY2EgV2P8Z6oM6QeoERRwfkfke9VUSBoAdz13VcWeVgXGGD23KcwEMFDe4bkJSEVK7mparNW",
  "key43": "ZRPxskyA2nYFbqY1cugCHTHPAv1QhkYm6FzWPNfhHwkeqfVAwjPwkxDRQLyJHDEMuvgKHP4VS5pPt76X9xJoaHR"
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
