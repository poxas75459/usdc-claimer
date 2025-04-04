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
    "CKS9QNqUw3XKmK9gtpafW6Smx47QWdF3q8N3ZLMByeHWn9rNFmR9ZkrsFRnatMULffaLogk1tDgVA3SdDtErsQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VE92uDxnVjSnswxn43GwpRjypL7aAb3sMwyPTxqYfq5Ex9wvZYSDYmHUPEMZWxPoDgamRRjx3zDYJe3BUuTB3ES",
  "key1": "5e8mqLfFjVW3oUwNM5c2pdthNAmNDmFoQmdGDwRk5fw5d4g6NhvJ5WH3UqyaYtpfYSmGeTiRVAKzSKc3pLzwrtFq",
  "key2": "4qvpHo1kpSFtrd5keAfQDRuwgJ144jRxYiHDFiZXDxQKXTaAYnZYUHXAXo5NBDKGWm5PvaqhsyeE2ytxbWPdfWdc",
  "key3": "ej6j2H8yrUm2z6itUSHeMJa9kkq6q1bCrhdv3PwWMwUAa4pHP3iY6iNrfBq3fcJv95RpFDa3qNYA2mA6g8ZG11H",
  "key4": "5EnTjicnkL1jgA23ZvP9RZRaz3bENVoiNhdCZMVBJEzbt9YzW2RmeozzdBS1Z3dgCj8tFKG7UCtDAepDGRzQLTYs",
  "key5": "2xEsETzhTSgqJ48mWUpN3wFfsPRhWj8a6uJSet8Z5sUMQ2E9b9SjJEdsLwEsYgxFd9k48ag1Q75J2RLDq5YeXS63",
  "key6": "3qw6RMr9eGKwpPTVkZs732Nn5fGLytt5hU3dxb7y1cmAfAcSJ2zMcbS2ukAUfKoe45CA5sWCS3eUDG7p41SHsAkn",
  "key7": "4RwnhTVnVsWeJ2uPV8LAGWvQq4XxSu9vYDXwGNFqZeE77zswsGHmzG6rvJLPDxgwehEimJq7gZyzx7z8zJh2JvH7",
  "key8": "it6e4c5AJZUA71eHMZLxa6JtyndUvhfFW9YqmeSN9xQLTCDqsZQbbc7fEkAowBHJhiuEenV8qy8CawKKhSoKfzs",
  "key9": "2D9BzCQhnDjMxwKYWgXaXdKxutDgaKwsWKwXCVqeYGGVA1xdrHg9nrqgZkwt9S3izimjVqna3gkxCaNPfvjyPCsB",
  "key10": "2TttQXKiGcDgsmEua6yHvBgfdTcegQ9xiZXmQXnnJok6THSpJGkL54vgkPaLMhLyzVCoqKKbxuK92ycmHPdFxJU2",
  "key11": "5WK3Z6is6832iBRuxW6porrCfhyCJmMPPTzSW2PpP8YFnCMHy2P1nkkeFn7nfJYkZAjQYTfBwk9yyEcP9c1u23AQ",
  "key12": "4tcX1P9evaPUPfNvx5TYFPiv6T7iFBRGx1ybny8DkicSbL5tB93EKDjFF8brUec7kaoPyvuSTdxdJr1GUQtj1q7u",
  "key13": "CZsyNFTNWUaG9MTRNeUuZbYhnmf2edKXrMp1ghDbJvbnPGkmoWswrUFKgbSZL2kujhmanJ7uCdi3rWfGaagsY66",
  "key14": "5dAtaqpGBt1S89aRGx2uNhEzNhAPE6R2EiHzTegQYkLdCB5MVANaqirY5b3mAxtMWhidrXLC9ydCtgvsyuhj4kQ9",
  "key15": "GNhRqJSVmjTZGxPfFFrXeAB8eMzTBuBdaotQnFfNEVF5QDBakDESQYrK3WmMvwyQHUjsS5z5XGwXscPtodm7qvh",
  "key16": "5J2raHVSPdVkH9kKWKKTtDn4D8yTGwVPMxWHNwTbcA62e4aqEE1NNLuPaFweA6aGAEoRtnyJuC6f3krgsyCWF62s",
  "key17": "WX2L8itKWt69rFQgqi3mRymoiXigwWnss6wVgVR9pxaiGYnnMzNWCRcTxxSdpkvNxcFLK6LLPBMMKUib5Zd1rD8",
  "key18": "5V4SbLG5PtZBPr6Uz5gB6U613yxehzzNQyk33SidPPdVT6R2asJeVcWdhNvuKJr3AfYVg4sFDtadNY6qgXgE8f8L",
  "key19": "Gw7DPFPTXRUWjnw1USrL3ysD5f7qRRhg7eTJXrN54L2yy8VWJXzmsxHu4fx3djmXTAdHFBwxf8XzvvPEBdUJK5f",
  "key20": "2dPjybArTH6Dzud2NYPnoNrfhzTEPyeojmjMEA8kWZMvs1mx9uS2CN3iTTn3aECP5i9orwyat8AD6hasXM8B1yQq",
  "key21": "65bPgMT3A3VJQUVQjvN4tWLnvgjEvVr5f4KTqZqThFqbNm3qMMn69DUyKoA4qZ1hE1yEM5Yp89R5nPi4uLUtnBRo",
  "key22": "zHDrohR4R3rLmh7oDUZXz3uSERhD9f36r4odGuc7kmVBXYoQVmQREFkjqTgc8uQMwHFQZbGwH3auttCa9XpqJiW",
  "key23": "aXk3DnyMf6H1M7a8WrWBujGquXSxsUvThma7KrVxxzHkYvn7ZXsnCSZmoGt5geTbrm6Nn3trs2r1tpf5Dkyy7Fu",
  "key24": "Dp22TpfkB6A4mU2L9oGTiS4M7xJ5XaZpkVdUZCL48aRC1jygC4DsnW6rr5j6CXAspoqqS8CcDgpPbJer65rEnEQ",
  "key25": "46BubJjtL5KduU61M4NGARJXBimvqz8xXZdeRAANrPdg3EYrk3H9xpwwQpLKbNZqBi28Zt3MpuhsFvvWZJhsd4gE",
  "key26": "5UBYG6tSqvvDhXGB4sgTuF736Wp1612J9KDsZQaU6BE4DAPpddjkZYDR3qEreUFYTZuA7xaVy7725KBGqb37aw3z",
  "key27": "44HEHcHBWRjewJ3i7jW6KqNquLkwuDakNhaPKdNa9fsV1pQGzkKuwpQpukeEx8S7uywTwpkVurqpUKZ9KzJKmEkg",
  "key28": "3NZNCc3p1yjZeUEvBVhFMZN4Jg6nvyRWDRttD1SggPUY9zXhfk3eiqZeY1YNQ68zM93Cr4SmQM5TRzE6MTSYKWNG",
  "key29": "4LePfkiiyhWDVrdMdf1czbFiZFkXz5E4Sh5sNNTXwwFqS7xnEWygN7qQzDHyhByJUdKd2i8RnSkpb7YsBX1A4MhR",
  "key30": "2pK9w8eVyDRSGHPhxpbWrSWjy9g6Ku4WP7pQMUJkaSypk2x7hzu8kQ4ae7gpGHJzCBwukRLEEhjzCG35pS3uAQjg",
  "key31": "511PnG94ocSUmrLR2yGbYeLowiBUsyV5s26c8SkgRCVPnrbQtEjsn1vQRv4J9SCkZvS9qnbB5KqzH9rxedPQGdgE",
  "key32": "E5XPML3pXYPqMHWfGR6ww8CM1aWpRQkPyeCFF84V4WyGpwLZDAnTzHQqsGjEdjPqBN4aBNdLGyqvKu9iJSVRwvU",
  "key33": "2e2GcqbUjPbUYbjLrumvjFzXzn5nzJjePusPbCoNwXsHqZEdC2uNsb92sPCYoyqQPNkcdZ6hnMvTL9WCj6cYm7JV",
  "key34": "4k9YmsEdYbhpdjpweQks6NCg2eHtLrnhQEoPTnqux8AVE8gaGzHjrPbx6iCUUc7dy4V18XmjD5Q8MPJjkycuA6Xw",
  "key35": "32qpNLHA1MGeJ1Q7hPyY8R6A2ADZvkQ35skkXrBFPrFDPU3PBYb4G3ftXBggVxeSzBiNRZ3yevFZa8VrLhcHv29p",
  "key36": "4hMHz3EX2oo1C61kCGaKgKPVEDD4D56rbUpZCYbuBdJb2GmF7yrxu7SY47pt1oMo1J9q87cW8F1RJsjrekpbvXQG",
  "key37": "2mdd1dyN4bYVPWLmWxDStuTMcq1Wowd6EH87pBtLiTiLhY2WRDb98Yi2RWd6FBtEGbeuktqekfj6dtr858R8xXH7",
  "key38": "2nEXQfVZ7NTgvDE5i7zmWzWWmjGVvgvmBu7ZYCofELoHhsWw7aWBuAzsZeuXWqUkdgj9VbQhVFnHUY4EykBCeV4J"
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
