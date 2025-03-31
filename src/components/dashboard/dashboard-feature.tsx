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
    "5xoxuNLPVNyeoBdw6gTcDKZgUzz2k8WQJJfjTFNbq2Yigy1QWDZaY9AKiWWD2R9H5NecJFmomxtVTEvMrrX36qRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "333HUs1Hai6R2dM3tXDjLu1oXHwPrpuLAyyCpqtSJtNdZw71EuSmbcdyg3hqZzCHeUacXZLkehLANnw2aJ5ct24Z",
  "key1": "4KDuidoRPJ6Y6oiMbDaxZ2Nz8DJhuG7DMLF8s4APcNhbasXZjDtuUEohusbxJb66Kt7MtPVzZuQ68SbvAnDsPB1",
  "key2": "3rBj8QeaGLsmsw4Gyc1zaZybbstNDSEyZKLk2gpCmyxKWjcjHrwQdKRtWz9eZJGuF2KuMZbszqm1oSgBTP1T7VoU",
  "key3": "hXznDtFy4wqG9MRaGmSLYY8WPysA1rx1UQRRUCAriNN3DFsauentr1eYLi7Rzpbc6h6uhVGQ7bMbFsAyjvghPpj",
  "key4": "4RuHKpBQWUboaWGQR7ZCihEyZay8am5tFMgVtNdFugV7cpPkExKA3GsCfMMHwuiZnSozzw9et2RMD94erFkSs9ox",
  "key5": "3NtJFFoGv91Qr5X3XJpJiE8q8nCsy5SysAPcxEWyAtUtDjsGWJjDGEdZHzzuJWNEfDXQ9sc2YBPCsGW5CCgRx8HX",
  "key6": "4XgYzVJKBWfy1XDnJ6dDUR9Yob7HX5ddGHw2ReyzHygtKiddmKpQdSKhtbCTPzzcESPjMKFKS4grrCjokqnvJmxb",
  "key7": "59rPbGYhDYFnP4jNJK89LUbTGXo7ZhVqCqe8oWP3ixFJ53Zp2fdt47N7vbE1UED2BrpQicGJD54x4W4jiHMNxkoR",
  "key8": "2evggrPbnW2uSE2KGWtY8oDVmerHvvDUP3YqMbBEvz9JQ5sLM2QsxmhcPen9qFf1uRqraAR8fNqE7DojceK6qcVh",
  "key9": "3tU2byrV4QvpBS8W8sbnWEn589AiUuMHfZqR57nqzx2RLbLmPUxNWHM54D5szVSZX5sncDVTrQn7L4huqaKj2wTb",
  "key10": "bfBKZ2TUbSsLrCFQugiJVtpDdTqzut8cj8aYfgoFbGkbZddC2WNB9kGAZJo9FBKfmW6RZCdcH5f5tL48ohEtCqD",
  "key11": "53b5RSJdyDGa4KaB7hCR5U8v2HQWaWfbSfBZyMJ8XQyn9WJNwA42xdgTNXDmhVnPDnwtNPwwLtSZyyVCyBy13Gax",
  "key12": "4idsP3Nmf2D5vMydHbb67yto17UEwPs6JBax5KLPP1vX2z9Yntt5Tt795wFfduFK43DTtEKjm4RZ9TqZXTkvV89Z",
  "key13": "364degsaqs4PxpQsGNghXGRBKTKQjcdxHfHcPSZPJQbAX4cQaYozMYXS2rsCMCZs16HRiv7NChAeeCwqYsDy7sfU",
  "key14": "2a9VCz1KK1p73F7Fx4e7YsEwfcY7XkMhRTc1xmCGounFEdGM5Fwxky5tfNpyMtKu611ASSNp47aKdPDUsrrKs8FS",
  "key15": "53MwhcNwfi7MvZYHo2KaxADkb4rmXhNC7ut2xwKNFUcpVq2pYfpD9KukC2VSHPVYsJFjR4eb7C233Me53aUDGseE",
  "key16": "4UrFA4B2hLdq5r2iJg6mvBiCooKg4u9sEr2bUfNkao6amXdcaDY9eU5eQHsHEX5g3hPiXikH6RQprmjZn1u2x5mS",
  "key17": "4C8WhHAy2x1quyA5MA4mRTw13BZRiYDnq6Krd2W4zEjbbwAqR63Zxe8jJ8mXksTJaV51zSdGcQ7mvMDg7bxLEBpP",
  "key18": "3B59oWX5TirRNXQs8QLVmyKer6h1xmawMLymuks9dCB91uPjFUREzVpRZwVxj1VD2juSQsjeLrJXrUhdYLj2UqsM",
  "key19": "5JneYaEpGQP4syfXdjbHviz6LqeQFra3igDXDhjYAyg6jws9He4b59ZeeffctuWMkitw2HggCMyRas1biRFP2fw5",
  "key20": "44knQfrjos63oDa2YHFDLzaApmXHFXQVoMH91TSrzx83omau1gFoQj5aaMju4pUukXpMwxKks3kK5j4yj9hgZZ2Z",
  "key21": "5gTety8DdUvbMp5zDajsgJwQymiaVQVrN4crjpigUgt4h5bF7akp41wr8bMrncwb6MLBu46TUPRbzgsZWgiXy2dA",
  "key22": "od9kKowjd9kh6YCDobVmUuHNUDC9XfzTzoJMF6KZCN4G7GEDHveS9NjvT8uUfSUuWEbpDjPmf7Yuky9Y1KuxP24",
  "key23": "2wVMjc85XUxLwT5GT5gL88D1zxV6k88GXB7nyv6au619Sv61hwU6xPPNdMNg7UkwKoNqB84FoEUjoCBAQ56oUJWv",
  "key24": "5pspgUmE1VTv9bokQSwrpqX43E2HuY64uW4mdzgtPTvBCEo3Khnxv3c9BXURzhQjH7ev4eaKKb1A4D4e4o99qMoC",
  "key25": "4xVLxR3fLjhYTNGAPZwbhzUScaNuJd4m5Uxkuepu2L8udBDXooh9QUSock9PmBm2GNSwHVKVM8ts4okJNLzmMSq3",
  "key26": "ZsRzAfaz2FqWnhj6hDtbCkhgNeVmPTKbmCuHh86YSVCwabubwuWxKC3gtRCaFRDNRCeG5TwKzSqHXb47zz1SbA3",
  "key27": "3Lt3nhbzwyStgkRZQ6yq9YGZekzY6biSgyTJ4QGpiVwWwpHadRxQRbirF7Vjo3EGEx1wxngFDNfgNkoYBpndxE4X",
  "key28": "249ME6nUTRYnmTLf4Sw7atFUPf8xYyKEZfyFjyp6HAASF3e9CCXwJQvqb6oRpXmd2EA1ZfEuazu7qPLbk3LHggwU",
  "key29": "2R6pJAHCNSMZAFTVHNPmou3E3gycJi8c4kDSC5YwDqQzwz8kjL86kJMGyXAuVMg7f1EXjE2zAneLvhizyFT1Mxpf",
  "key30": "4XWmzpmwLSePPpctaYbxNBxBtyMZVGwgvmh1Fsn3Bf5iz5ogFzEXW7P1JdjrdYDCbJL9yFiEGxg2E3KMhP56A19",
  "key31": "248bn6QrkY7ZxZ9m1NbpcqHkDvrVvH2i8ob8wxQgTJSaNzBaqCUTDprUDhVGB4nmMv5be1yqBGnRgUeJnKvjmXWL",
  "key32": "3xZnq11iy6XoXvWgAZUYpHWQDHJ5ARG2MBoK57PQK9epLb9utBAu1BDuL1zcdepqXPsQcnQCATpprw3Ng8vp9gwk",
  "key33": "234uhi8FifnqUxHtGvUWsBUJScxH3RKw34eUs8inYfeaWF2TwcW77KiKDdd9EK9uWZRSqVD8eqQCZR55713fKH2e",
  "key34": "KN9UqTyKKAQ98gAkutHZbpEPEg4Z9Q6tXCXdS9UXoWHTBMNTEAKLF5KQjFgKXxN5gjhpbpPgkpUCEPnmQpsgNEL",
  "key35": "2h4AacbDj4CUiohe6fiVjqyS8emg837NMW5RPSZMrxDM9NdAgjrnQ2eHZX7DqVmqsqS9CiC4fC65nRUKJKXfxRS8",
  "key36": "3KuehsukdXkky2QURLCSVNMPAHkqUGxswzneQk6dvBJpePGcNCKBVvguimydpNG6vAW3oeL3F4h6B8xcvFMgcXVE",
  "key37": "EfPw5oHzxpKauhFQ5U5vec4ZLdZygyLJG6R8omkuFCMPo7Hov5DCBprwYLWYCSuJ5nCQ4RXJ7jfoUuvjyRkiqgr",
  "key38": "3J9AX58jKGnCpaCAvLre9UWaUpPTvWrRsPDWbQGCpA3KLM6eTbwpLHkbxMwNVJcBKduLzPs9TLLyJJps1S4ep2Nz",
  "key39": "VgzPmLYLdTGhr2rPodfvN7C9qjWmxoJEif965fbksBaSZ7nnhunACYsu64a6bZuR4PwWFm7pSujXNdyRrCQgWHh",
  "key40": "4wPZyXmtULZBsn4DKGJWApF4p52zYRbXBy7TvBcm4T5sau8Nr3DRWUHYgSfFkqQ5ufgyky84xQiEvPjBsyDERRDq",
  "key41": "ddGmtz268d7xc9F7mcGb1tGCdfSGKVqoeYmRNLZs7oG7MFXx2yuFcdUBmzJGvGdFXTs9wCPJrK76pjq2gzsusvi",
  "key42": "5XJPBkS5TcBGNFG6U9Le93BD22otmuQLNJRg2oqj4169HUte2QtwjV8G99EkCVMVod6oUPErHqCNtjDFpP5bYMpq",
  "key43": "5yACbVAYXU1NCbTTCba4Hke88Ub2VMxUuGcb9adQrib4fpioXbn8sckBhVff5yFn9QNNY5VUCFxQzZ5iCDih2qpC",
  "key44": "2VzQMzBJevmR5EwgKGvYgNobeNRnNQjmrM6BxArMVpEHAjgipk4V2vURtZSGHXeWgEHany5qx2sPiu2x7DDHdUoJ",
  "key45": "3FvfoxkNmgXWbHxV2U4oZBduCVg8NyLfq2mrmRZJASo41khJB3AYN77na48Xzi4EVnHtB83uxeP7Pr1viDpPWq7w",
  "key46": "RcNnaSyh4KM8pMX85EmHoAsoKbZrxiCppjuK3tFR7W7RStfQtcyzZpyRXGUgWYrF3Z1PT7Z1QtyohLAYtj8ahkA",
  "key47": "4L5cCtYmizHKCMPkoitQV5TZXFuzEURXKLqQTR2fSBGjbJYYT27nrUWrSxzpQWDBwcDCNy3fyDsJgQEDJxLbYuBU"
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
