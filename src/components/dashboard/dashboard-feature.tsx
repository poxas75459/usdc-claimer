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
    "bJnKwWxuWgbh8eWxr9LDGxckArUg3ukKfabTwfusx8TVDc1FXdsw3hZg4qjKVnmEKDXTEe5x36ZYGDvm6sFTDdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sDgZLrCekJKeKK3vJ11Uhgj6e8K8KQymsfWCczSLrWhgejta6V2e56LtAkjFBbrUd5yRwK62G2TgoGsuB9Ga1Nx",
  "key1": "5wModu8RcYQjSiHxCfPHK1N7jkkZorJ25H8r6uiRcKS3gK48CRWgkFnug8pjm23eCUnx9xoFSX3fkvKwfy35y7eb",
  "key2": "2fBnQJ4FC8PVAoRZDnnMBsrKsUy9Kd6mg9jPZhbxuYzgHS5vV5iqJbyZjNxC4Ukci5XrKdCyffNMb96HgiJmyrqj",
  "key3": "3bJbTK5AesmnbxNEWc39yW1Y2FefMvrsji8kPDgbaLdXyesYyHDZH3ZxMiz8QXdt49LWawkVCAWox2BtWCqP3n4",
  "key4": "554TgVUmC3MQKLxuZVFjUWnSuoei64WKvMr8LT9o65SAzoDthBHMfJZS5imDRoY5ZjBJtQEhcY7cjww2mDykXkDk",
  "key5": "3cMdm2m7yrBafQm2pHygiiM7B1qQJxoPooN2N8RLZtLKrD5tzuHpoqxvcAmCaWw1sNfjZAnWQT5ibxj5awY2mzKL",
  "key6": "4SJHKbuM71NbSbpBj7VWWFwufNfmx2zTo2EQu3uepaAQzUgCeVWoNq18F5ZeLpu2o5LuDoCqSvJxaBMzyo9FADKk",
  "key7": "3ChTjwzRfyvk1nmN7BXUXkMFjtY2wfrhg9k3Y9cczM1EtRQY7XVAqUvtJzPCVCRvBCfLtkkCTwa8FVUz16qFXevQ",
  "key8": "281iGR4TqdpWdYnRQiX3vCEUjT9xJgC4T4Hm8qvpuwSo2VP2sY8rFa8zpJ7s1heoV1bT4DWkC3VYkWZz7KYGKkcv",
  "key9": "3muaRgVS7BLXoBERTk8vCNUL3Kc7CvNJQtChRvzWAbea8cJFPTyAmYU4JFx3QaTCrnLJCuTWKzAaZZwRfeMH1wig",
  "key10": "5sRcsqh2tKQHFXeQzpf76urpRnHp5PG9JDnKFyY32oehYLHxDa8sNygdSZm55t3yYafJcQayy5tzWyTi67kBb5t5",
  "key11": "5EAQETajEszkJ3hAYWSHufWsfw5UAunY43CMPtzkiYaVkafSxJ1RkiBZ7dcBq2uQ8q9eyVeuCtcqDLYLLNo8RwVL",
  "key12": "3DpinfwGWEYYv5aUfGg7qsirppVCVcumDSQHyyCEUrVTV5vu36rpr9q4woaLDtXQ8D9mQ9EQmVcZSRoXc33s4JLz",
  "key13": "21jPe1uDi4qvSZXoa8AMHoUYqYBeyRzEU45ZjSAjFojffcow3RSgamXngsAuL4e2tX1FkaZR7c4EQXwVMygfJP96",
  "key14": "2kjzXLUjuGbxX9RUVo5THS3Pf8TX8xD7jAzqsmZBntg6NVjNGkxRz5NPdU25NPnrFqLxgFRV1naWZkhXA2dBAkf5",
  "key15": "4wNjxHTg459sgiVT8BGm2ddxjGxsXcW22LrXutQQfAzEFM5BPTDf9hxXJSyttZ5sACa5UGc7eggHFLWDkzjThwCT",
  "key16": "CMDiqLW2dktXxKBV2A6Uy24rZb2RTAwJ26iE4rhnjnk211CKJSh4ejKtL1KbgCZ54hredhSqUfrdqSt57k65Aqp",
  "key17": "4A54qC8B6Tbs7QyKKfm6ERgzGGSNM2TmDkoFyXgHHVC99pZe5QPfuu18rh68hnhCMdriKe9QDoJCj9FBFNjZtmCc",
  "key18": "k28XVdUPhBizEbh8RHbAXyCXBargPMCauGPoHEdzrqtH4JLLDsQDnJ42M8tYqHuPc3i1JBdPm9Qz2Ud8gjH1iZG",
  "key19": "4ETERUxdpMNG2dAnkc1RjgSdGN3i7MfjCshnWSNFBycxyM4s5Jn8je3xgMpLwtqBucTvEg4VxE6iHHGEsCu9iC3",
  "key20": "44MEEZvfok9kgf91RpGi1GY11ethq9SfLa4VRtZwVsRKUPoUgKvYBry88D7VRMda6dxoudHQQuoxBch1M3jG5mtS",
  "key21": "2YAqhCXHEXmTWMEejchAd8UUZ2KnVEhAuPVhFrvpyC8QeRmBUfEi1YnMVSDbHAC39NzaypqiCfiuvD3UMcoVYPpz",
  "key22": "3DW1VNd4zWfSx7FLHcXFq5hQE4CU8qU5eyRxWMzbQWU85Xk6evEKVGwRKPTG9u3xdPeKHnxUHChnU5KBusuAfHkT",
  "key23": "48NFofYLAewajByMShJFTtDsWrHVczSqTdgwXqisZpfT8NDev1km7irFzfhgo4v25gpg4JdESQ2zQiBcTeZHCVpJ",
  "key24": "34UpfZjGeixT5Ppna3WXi4SBtv2rcurd1JDsW6gh7RkR7hFqGX6UjnDFeaaVeLYUywf1ey71GrNBmmLthVUCZSR4",
  "key25": "3AcBzz4WC48cM9Z1EW4XkL3hTG3UBfRSCEZXSWgTywjw9CDjGfCdYFkueYaFXuE885ZfXB7K1A1A8zYeixfj2yWL",
  "key26": "67CMiwmQX3WtzEQdunFFYcxT2rW951K7AuvzBdz3BuqwiHYMD24bzGMdyh8vnseCBsmsoD8DUARRpJaGjUG9cBxb",
  "key27": "31Dtcc2Lrzp6gCw6VtmzcxSxrWtK2TpjjUfpNrrqPhou1RHBmoELFpjVs1VrY4bkomB4i631hSkNYbNkXgnMRd2u",
  "key28": "4T1arnETrjXit6t2aErrVxN5d4RFQsiySEyVwoFLSqss7A2Vi4eQg3YQt47s1Kcjh9DetKfMU6Tpyf3RDYPnfqSn",
  "key29": "4GEVQjSg2eoRtXETxmeCGoNACEUem913MHAfVVRZHUbjtBYkJExj31XPNMZPddvbNqqwf6pHtssmQGxMno3UX3QV",
  "key30": "4nevuSseSNTRNkumLDZCiHCsiQ9JLyToXuhtTDH9R8vfzPsMaSGvHrmfpwDgPx4YZkpsvxKEYbD9h4cxUpazdEqZ",
  "key31": "4vweZDvoWcf1E8zsW8rxHPjCF8YnZ2MiuSK551uhNC3Go6KNhA3GhkQtFAuYKJHFdk4aJtXYR6F1mBQkvghjTPeE",
  "key32": "2HfAy4MVoKsKUggyoZiMEFkZpkyP1vmLsxa1VR8R8S11MfxYDg5Hwgp1p7TMTAZj3Q7GVXPfamTLo2Q2NJ7BB9iQ",
  "key33": "TwKEzuXi8pTbbRPfHur4fJLgnKL4sM7Tip5WrZjwEsKkQt6awenfxdVSBaWsrAEF47Zsi8pKMnWpZi8FjPqSmsR",
  "key34": "2ZHdUiU1taonCwbnWosTg9DGKkAomqG7kXj3EpteGpftwsxunEycgA2CZGLbYFq2bSJYT57tUhJzc6QzAxo21a5P",
  "key35": "NWCvArrPAdUZGAdekKs7WNpxLM2FeZsai4ssz89ECfhKDafUrzhibR6rtoTdMgZ2JfWCaUJGq56zffoZVRBE5jE",
  "key36": "2tjQBNDTaectoEu6rPPEniwfmjbyaLx739HBsBXh8RyR13NQ1eBEoaDFQsSxsRkCoPgmZrc7up9uJ63qxwNj58E6",
  "key37": "64ZG8VNKiGFu6CC7y1emLqDuCc9FHWcgnrQ7gMMzkcxjLoNDfndNWrAnpiBx5wHepqu4y1UwqrZhgm77Px3ebLN7"
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
