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
    "4AXwunxQ6fPMeEAQ6cZmpqt4huU7Yb7So7JomiozsQbBipJ2MVwqHLUBYw7CbaVr84WQqDuZzunDzEeWkPUvs34b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cGgjpog6JpWYitmX8QWXUTU5b1GPdnqmQCYbjM4kE74DZvCHsx4xPUZ4pqNzK6ZcK79QXsh1CVg9io3nrzRrMPJ",
  "key1": "4t7WMUUVmD9LFpBFqa15ssJWUAyie9uH1Z6tUrhUx6xYZJjm1iwMDxMZDSMKSJqYPj5WvW1xiAarA6dkEB2fHv3M",
  "key2": "38e1P9CNr9adHJhHMRhPFmuZfJJCj5GkPpYDhSt1iXHMvwg9HCQkvo4yBZhSMbAVTdkeGzz1MCt3HQK3NwYiJDCz",
  "key3": "3UaSy9Ubm7v4FrYAEdjyQLKx4MxbWbjWZj99ZPaChe4Mwoustg9YsobnFGoBhDYYhQFeEij2kCiPynuG1A8wSFVU",
  "key4": "5Hm7soZTbR2QJ6cfRcXU7QcBmxyno6JBKERuaFtbcAcjx5muuVjM6YR7BzN8oEGAdmSTXedj9HAQFvtFpjkwr4uJ",
  "key5": "3T3vk1JsgAuCjd4B3Ajfz99S4zUuw1Ru5qoqbHmi3X1vMjvQLWGNmPQnSXNPUa7qhgFnjma5N8NhNETJgb4ppT7X",
  "key6": "36ph8yKs182pJmCzMD6gUJT1KN4QgqiK7J4YZN2n3uF4edKLJhU82LNbZsww1x3xmSm7JDVYMB2qKqapgnEUKzdd",
  "key7": "sA1nVCPUjJhd7VMXfYi2AyeKKwdums9i216AgiPN79zGgsX6X7iFJZtvMxdwq9iVEk9KFAcDsqnzBYSLabREJ2Q",
  "key8": "3BcohLbW8CTtuUdggV9TFbxYxu8e7rvETvcZdhbiYQaZycQWPGUgqqL4V9tHswSuq4JUXRiTXWghKyJk9bjpBDfr",
  "key9": "A32QFBRoSbGvmUR3eUCzUT87UtYXRNEt8zi6KA85bofYEirRFcMG5FBE1b8v8MNmwqJbhD9P1ydhfbX3gqmGgUs",
  "key10": "3hpN5FU7mguLU23vVnkMAK8VsCScypDxqREDoUzMKrMUHv1ihM5ubZmswnB35CBUVV8EGgSJP6yzgoCa3Largx4V",
  "key11": "2UWN8CMyrdS4rbkwPf9yiJxnYofhKTMhsAHxRTiPJm5mMrkvqsVMas1x8cHVGQ4PNRp71BVBosMta9uR25D4hHGz",
  "key12": "23vL3zyqHeMCaZCckLweBBSa68Hwi6uaZopBMSAiktMjiB5f2hcfLXRw5389hbSSMA2dBNo9bV1P9J5QVsGyymsV",
  "key13": "31wtYrxx124bc5kXJgG834KJhXvZU2m2aRXevYSELWjrBL741UUFCZEfpw5YLu3xBPM2Zg27QLLNVxHrgrD9gHrj",
  "key14": "oEJySPQvgrPqSmYaHVtytHycT6nz5en3kLNTnwefCu5LrXRfNwdzT5iDAeJgMQLsBnsTkWQpQjhGepzsHkcth6r",
  "key15": "5L7nRWFnqJExfehBPWpcKBPeWkLbKNn2T6fmT4WL2wHMeoo3UfmUM7sfeMneun2sB24tpcYwbUHNvDhmaGPuNFF1",
  "key16": "2gkAFZ8yi8K5Tm2BqfBSRd69DL3ojWsZ3uQyVwUQf9HnEXjn6MWnizJyvzQxog3fJpVzwGVFQNxjPd1A5f3tgnX",
  "key17": "2Bv3HeU78oGX5b4TViStNxLHTMo1hfFsNM2xBbYd3byvc1cFftgD7UVLs6c5wM2QoyCjEV7rXMudLbpRL3D59dpU",
  "key18": "5SSv86VtCapNtUfV9jGRH5nYCbRqysC9WZBcfAiaKWKN1wtwxVGx2Pjam2HgiBvYBbBgjAdr89E7MNYvypYUbRby",
  "key19": "4E4WewLEAK14c7qfpExbtiDdDoNrLUm6hNLkwPbV2iEhfQReTP9Dr2i8BRQUMox4LD3CrheFc1YN6SpWrK4dKXEy",
  "key20": "4Kdy3tq2GUv4tc3oSApqkiMERLYDMdt5Q61UVZNNq2Q7Qbxpc7vHZuYTVyrZS6tKFyNHaj8A39vN53B1d2Dykoy3",
  "key21": "2ZUCmwpzCuiDHi1CNXjG4EeRnooAX49nDAFZAVNnqhpfvnGxThzam6XnM5acH6bPtys1ckge7hojoY19U2M27BPy",
  "key22": "RdekDRF954BYuxMVN8q7fKdjWdXE8f2veZaL2LZhfhyavdmPmo5qHqqRtZg4MNkFDi4gG4w1Vwmw7napbG2sAfn",
  "key23": "7YS4KDG6vVSMui2eTpLTdx1tM6MCuYXcau5J8xBRw2u2uMhXBpyff2uzu1G96cDtSmP7RMZm75frf34GjFinyaR",
  "key24": "4ak5rvwANKY4jDuCfCr6sr7apv4tnumNRAPwJQB3s1S9vSG73JkZS9CC5krVVqA9SAv3E29QSA76PbpcnzDApkyc",
  "key25": "2jSdfEzp8acbJDSXxiSat6THftAAWBTYnwhFkC3Xp9e9jSSr4oQNPFzYFzG3L4qNhYwZUfuhV551iTToxcaRzEyF",
  "key26": "5uXFh1sVSPRumSZRbw8YxqQoCT5JaMbXK8B33AvmDJeZcrqf3vPC2d9JEScQKnSDLPiUnufYMeyajEhRNx93ghcf",
  "key27": "2RZb8niwjc1B8LM67gtNmW7VbJaZC11xBiUYVQ4riByJo6dFzvFc7h5UpLR1nrwSVL2ubQUYMMtXFSqZj7JVKo2F",
  "key28": "vvWv3gnEs7n6u3kqU4t59YahekyAjUPD8xsHHzrELcX2tHAYvxxbpmp6xxdfuPsiBhDf5tRF9antvtzemLpLt8R",
  "key29": "4nt893hCVtFvnQ8SGe7YnzuZXGUtr6En52sVmMYPgN1kGyiMBbcbPCDk6eUdBRAw2cLJkqN1wFMGk766G5yC8d4H",
  "key30": "VSmrFJFz9hXfpPo68b6yrr6QXb9ELfXcUfpoRfsukf4fkownH1X8qQQVg8Bh9qyXqXWLwEB7VNRkyGKprFEdNUS",
  "key31": "3nETWJkfwWoH5gc8jhsk9n8eZbRQawVEyCDusuBUvpVFwqmT4zMMkhDxrzRj9D9FM2x3pHXyFoDdA6vwW33dUv3p",
  "key32": "5QXAvhEBsYQxxoN5jiVVifr5DFS4pGCjjtNMVXzNni17vEQi57Byt4sdKC6vE7M9ekkRghPFM22pW6H7vpZes1cY",
  "key33": "2Mq85pyCTpfbwPghgBwYYQhk6EEgxCUaeoGCUdpj6UK4F9qxT1crWzSzuvN2pC2Kx2qxS4YVriNfb7JDYtZWanmQ",
  "key34": "4yE3ZQMBoAp8TyQDhHeqT7vmXBMRujG5m5AqT9aPGGoLjDktfLHct5i76Zv5L4PSm9v56wg2zjYkJgKcEzv5CJTo",
  "key35": "2raRssDwiVDkozakxehXtQhtWy94Pc6sGJT1AjieAYcCBygEhVEDVwK3SBa3PKfrcC5AN2SLKdcKpzDDmHc3q55e",
  "key36": "2DmduRqdhQNbB9kECiUucYp7icgtEpBjhb32KBFAQ7dRMbvpkuCAzBS4cSXuw2SxDTJDhJ1DmHDQZF6DB9vsbnSj",
  "key37": "4K8KPVXikfFRdaPrkPKSQK2YtGWY2T3DhGf2kWcKAf4jedoUJqtBVJmyZnMp3km3j8jVxvQjJP9pr4KyuddiiYkj",
  "key38": "4yNctQRac3DKa4weGTKzqutaNtHwZk2PgtAZvjdZuK6dTeCfTBdLSgVnuTnT4M3w5oDwBYQqfSxzw3abrWsd41n7",
  "key39": "3thW1zcreqzgwGALzBHPzcEmCPU2mnyRzERDvwRuX4w7mm7aWm9ZaaX3FaNDYBQVCdTawqApWg7RKva6FgfTnUPH",
  "key40": "3Nc8HEuYSow8hrTRCuFbyPjbg2uw6xop1VLBt7qM4aXpFyV94UD6Ga3bfynZJrKtPuCi7L4RAEBFeNhU7v3mXfEd",
  "key41": "5iyAtYzy8e3GcKbf5BoPFLfeb9QVfpVkrTdZ9rs1h6N6J87z2UW4rQCrmCKSpEnAHpXa3RoFXEtvQye7C1iz1cLH"
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
