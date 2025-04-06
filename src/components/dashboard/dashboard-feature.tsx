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
    "5m4Qx8sgYH11VFf4MQBxf4C7KwmpMCJMeB21RfdHJFHbZmyv6MmLb2sJ7YBueaitUdzxkW8Bzkz9nM92x65rrC7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gaSy4BbNPK4inzf5n2XdUiDwgwExnUnC8isQYuTZDSVcdaUB871W3Bg8BA2Lz8TQQS41phN2SWyStZ5BK8zLaXP",
  "key1": "5R3sAy6LohnRLsuqUTJMoT7kJEDP14yx3zxi9FdddnTA8Q14bLNR1zNe9yab2efBrwv1T4puSBJyBBcTkkFXKyvu",
  "key2": "3un7jsYQcGcmr9FoK1ykbfcp1MikPTjniJ4FAn6jm3KHJ7ZA7c6yUK7997vFgWKHcg8FbgsBJtMrKrLH5u4VSpRZ",
  "key3": "3t6WjfhirC1Xe4vmbpvpufjAXTdJpDXf21tPVad9EdknJw8TNkQpr9mzX9MG5g8D7rhABfAauKJ97jKRHWNQSBi7",
  "key4": "2Gerkaw6Vwtjx8KrQtLFCAyaYYE6sxQ4QpwmkQf92oqi3hVBfcn2X37swcJuJTgjVMo3kXkJXa7nAjGcajZBQ8J5",
  "key5": "512bdryYgku4DmiURbRcSncyQGsZndxHH6Pu7DFzySTsNNGXr4TBLD4nfJvdoPHbo4Z3iYJQLPtD227v1xEmewqv",
  "key6": "56G2V9mh8kArvPyAoppa1qkdhyNBVyABndDt15cTKcEzA87fH3icw2uKJFjUJGKQ7HwFf6awwo7MiqGZr2Pjpgex",
  "key7": "57Qgr9FRpnoyBubFrpXJRK62jTNs1QbbaNJ3CLn41uNkcQ1jENRVkKnfWbYEeYWeiVADQYUwxxYMAXxD6BXYA3zT",
  "key8": "c1L1mWbWfCRprGtqeb9nCP1GZTMu7jAEsQHV8oW5FpaLYWzHof987ZTZKhrWfSu5v3RBKtZR48ERBQAVWja3LzS",
  "key9": "5MLzxHwKrG84aLEtPQECWo4xX4hkjpJ7iqgp5mTtdsC8FCvfTQSuhAviG92ttnkj2E5oqhkRHpRQPktGg5pBge6V",
  "key10": "37qdpVi5E7GSHhx2AGHDn5dDjt2WDRc4nQyB1TqTMpNf18vhwivEswtLYv5pc1eYBAYCnHEqD4EkogNdVcKsokYS",
  "key11": "4HUrUcPhU2FkWUnEaqpTNaBDJDf9WyLLqTusiaQB3PVFsGmVNVA1Nw9vJzTq53D6cJfkKHKfNTPXLNZTu64B5KLg",
  "key12": "3QcRS7ddKNfhHGPKpHR9mUwAX8Ki2bGxncPRwWxUkAWAbVNNPai2edLAuoN8zdhZSx2oCgvNBGV55aGEK3CUEjvF",
  "key13": "5YdtbtddgRfiEZEBCWm4vDJRZ6dPsrDwSqZJqcxgegBiWAMocRihkYJoRJVFCKxRBm8kErmfVdemsvVku6mTypYK",
  "key14": "52TEiHcdUrpVb1oKCiTTzyXnePEzp15JtvXAWmt16iNTGTX7oUP97sgDXMJmxUYXNhNAbgHeB8RAu3aJWQYDB8EP",
  "key15": "4YKMpJsoGfAaN7oSy1suqqgYx2LoQ36exLMRA9Jb46o51zt2cgUjehKb2AVDzQDxrSn4pEcGY6vdaTBYbJCEpP5r",
  "key16": "nVyM4jkGGbYFHa6jaK8jJMPMZotCB5Va5aLgY71u94sLLgRqEmGu35GpMNZHqA8HGkJWP9Ngi7CBxDvAs3g4qmB",
  "key17": "kwxY39Cx1uoD35452TAAKoaEeZdRrtUe5qmcnqhuvLSgLnrKd7N3qHRgVnR4CL76i2SNEuDiU7JcNSnjfhHaveA",
  "key18": "px9hzrsk6xCNuRugXDYz4fWNMkcHtdiCGr6HtGGsZBXbQDSZ8pgy6dNaLyXTJzQvMvo23WBsks91oL7LTT8Pjpn",
  "key19": "yKkVew6Pp7LSaQFiAr3vD1JHknfu8NTxR39wxPKJqS4yaNJu7pDqtWTSjhNb6VRUoDg4hC6Xq7s7syWgD81vqpf",
  "key20": "22JvPfs8vKyt2GEGUEvvhXVoyQnKL7S1TEqHoLeKMst5PEXZpz2cBSHZJTruUPPVWcf5GehvLpFjqmWcxZ1qLjeD",
  "key21": "2AzNDciUqcRhKofx1CbZtFAi7Creo7j5FQH4EdWk1dHPiw8FKp59ZPGa1xjtot4VktTg3oFoZ6CFGaNv7S4UQSVi",
  "key22": "4SzLAbrikbEUURWGEwnsguRjwnVSAmFtqdfLb9gDgvMSwiThHm7mwnYTZHrD6jPb6jf4p78QU8nT6eZmFQ9GfFXz",
  "key23": "3fwEN7cm94Zrf73cc6KDjE7cbCaCHfiuLkYwu6aGkSpSXQ3TGfgAYSgHgEifDFMBt24zwYxjkozb5JvUjGXLDdM2",
  "key24": "KCh3mhJLMeFcPBhVZkMCw4rh7vWERd8ew2DWYJfK42jTG11dhVAPKvRNusWuYCV8ufWJdL8jvS741DnJquyGX5x",
  "key25": "2x8Sm372goSpNHcvP6M4eu3QP3xEQZVr5pxjQamqBTc8ScRR8M3y7dJ2qJJwdrhokaWxZa24qtJDKVoSkYo4oGKB",
  "key26": "3SS5Qmy11rZQ9UdReC1zwrX3r8nztm174tRyybqwEQzk2SkeiUh2x5ZckX63jWWN3GCYjy9W8kWHyKfxHShqsxLM",
  "key27": "5Rw7yypjdwwwfU1kMgugCdvNHTEvgCtaf8ZZMxP58dXzsWPgb1ARhbvuou2NqBcSxQehpbjxMR1ygirVe3CRxuPT",
  "key28": "3dvtzsuJciuetM7LHEddYH2DNMST1XZnsLv8yaEqGFvqvLxXFMTYPFKitqex3EiA1qPwTRSqGbD8v6DbLRmxgkeK",
  "key29": "4SdRtQiqpCuZ4itQRYRMP2zJ9A8UGStrxJY4Jx48uyjj33BA7jSRDCiR2c6pNdZjXxnGGrD8Y3SsEPwmUYCNdZ7e",
  "key30": "3s6e23eiky7gfx6R4pVBA3vqKKgWmPZXHFt7EKdwuCkKNbuz67eKFPjFph1KDMnGVjGwwdXsBqrmQH1hW1zDoNoH",
  "key31": "Hh5wUsmAcnbYER8NKB5xYx51Ri5vJPqkeqoENgR64C2uyciubQ8N7bWYhzQTMwdYk3jYN6eEvKGv3Y9wwqMsUAB",
  "key32": "4RXBgHzFyf8pjuj18CAmKuxQR7zHWnQhBKxkZjFpqkxEzY38jUM6EHgqQbxwdDGaqoUYBRFUPAifvLxGR6JYfRyv",
  "key33": "5ctC4gWM8q2D1qzvnUNExF8CErZ99M9pBHUVkJ1YrR7gpHbFMB1DPeDzAPgK2QhAxA1HvoaSjJrbwn8dd5aWwozr",
  "key34": "4wBUi1TbwfPEHX29hkXg3eokgEwZECDWD4a6PTp9qN6AdxX3QD6T1RWdWaamVNtSnTiVrs6p74bXK468WQivCnnU",
  "key35": "4caXsZs9zLtLwAv9EvZUBaSsFLENP3abDgyuEJwDHVQErw13SNmDc5RwxKc97ftjQo5HbKNrSRasLxMcV3vqA6Kn",
  "key36": "DwUKEyVfEGqFYJmxy1AhMFZqLN6Rm2uvkzJvwr15c5tMk9QyR31e2dueAT5pGpfTu9mJzNhoju3oAA1p1vxu7iy",
  "key37": "Aa35v4dfmCdjzxLoknCiJQ5NoPfF1QfoFmWuAXVpgJUdshdPaXUd2E5X2cjro85Gn1pKf6XtJjpqFPu17rLe812",
  "key38": "7GqjoV4YzHKDX15tpR3Gtf1nMSP8HPfwPvkJsWYLPUW3pWFWmwPCv8mstYHL7mN5UbY3n3KRW68NQS8jGcY6Z7U",
  "key39": "2yzKqXC13pPs18ijftWH9TZGv8TgdXhFPSPNw7ydyttJ2JxybdsRTnizV76JRwGPs198C3j4VrHLni2qhzaiBBEm",
  "key40": "4RnLhnJs6DbpzmNiQd2edGAAbHbuHdqVrVVUR6zPJT2tTHjUcnABXXCo13i1JL8XonN7ZiHJFmWuq1p7f3s669gJ",
  "key41": "2eha95c69tVQ9v8YZQgWc8rmJGVLrExGgseM3NfRdZ9uG6BzLYeUuJHGKDQgutfguuEubmZ5dpEiBNY1TY56mkGx",
  "key42": "1MhwyNKKZ89dTMVPfQfDkkjtqYPcs89ibpdyUyXB7oC5LHV1VV1y1CsvJeumscxW7zz1YYFqmSZqq1fuaBxprMd",
  "key43": "QyW1dqX8RyeSWhkKqErEQUEtUDv3ZziHWaQdsStgaFLKTWinsp1w9RFCbgHLsr5ZqaNn689NeCCTRDDtUmgPc9F",
  "key44": "Uyu4qpwCM5wBF14twX9nCpyxCNwnJDPrJJshdEJHsHEBFHkEnL2ih5q2hJqBfP9FM6tziAftDZ1smJ93zeBQ1FF",
  "key45": "3T1jzzgSWnCNyiAtqCy9SbUZZqXmzC5ph8cTLmz4Qwuxtkua6sYWuk14X4DC3FkD7LYj7MrDT1HQ6kp4JpkWEyF8",
  "key46": "3vfEio9avHtT8YtEx3M5zDcd1JjVemcf8SG1ZiyaoFyavMzbhV7vWHTYyMf1k92Sd6PHsHyyTzdczKPzLQGXzkQJ",
  "key47": "5V4HLMHN4ywjNqT88kRUbTD2dpACsTnsWbScvqpSVBuZ4DLKDqgeip1qdEgstHDJZGbUNZv6m3vVvo7nZpRYGLJK"
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
