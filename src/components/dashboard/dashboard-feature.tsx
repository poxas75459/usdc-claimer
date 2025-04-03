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
    "5BGgj8Tsvf2qrXLoLoeUGsKo59xUftGfbX1w9jEVwT1LXiaEYUfkRpb99DkxtRPUX15EkUaXDrkqboBigpT1BuiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wBWsCetu6XUdci2b2GfneC8x566eZa4R6TNx2RB9LETgjEL4yjqPNVDkYuFMv41ZJ7qyu557UH8pTZycqCxvXDm",
  "key1": "4EpYg3rnwZdnenKWQyzJm74AA6qPrM3h6VLLp6Lfx4eztwmA3u1xXhBR85tWt1qRoRRiztpDb3WLJvr8avXaYytT",
  "key2": "3egpZNQpNSjfvZuhCuFi7rCnHaWa6gvipJSrqjbHyZ3NAzCpGG9yLroXVK6MChPKJWKhBQwWLRqLGxJmrGj9HMWq",
  "key3": "2rMFxvbszXsthdmvxrca8gP6Z53pS7gfNqS18sJg1sPhoFtyc6wcaN9fQCUfybCPYfBLpFAcQSnVY7WrshMu5ZTJ",
  "key4": "2V4gWEdRgpmmofBW2tzZMmVAKVD6xsfRsxgrq7VMhNyQ5dY5J7mSKsXN45Ygyq9WayYr7DTYYrrTp9sdLyXYhaLa",
  "key5": "4wDttLrfes44RYUn49zE2GSXvUrAxFxzPMksQ9yf9EP2mDcqGfZJVe6PTymhSvtUGcztPtwTEMzUJVxrxSJdrUHj",
  "key6": "3CyuRUmAr7ZbwSHweCuB7sDGAz5eXPZ5X3UaQDNYfoYKT9M7Z3oJskjGQ7DcPFNKHFxuCuVgJnrGPU7yaWHyUQ1Q",
  "key7": "3rmFD7zBADQzPBBkvy6sWowwgczE9LdfqTFmpgG5xSjzQMucc73gwQcerAixeKZkgm5dM82QS88rsR7pExPyQ8hP",
  "key8": "3BaRf1sNrhbbjqRphD8myMkukvsYWZg8vyS479LwXX4tqHSL5soMHAEXQWWrNFVEzLTgaJpDG3db7CthUXRJaaau",
  "key9": "6fyytuwXtuuvyk7S7Bm2M2EoZk6pqmnXHtAp3QZNS9j74RzzNyztZWConPPYWnUuRwjCWXqHWgQBPGLcCdBUcYn",
  "key10": "5nApJsc1ChS3tQ1DR8LYQbv4MbHrZtckFNWdVtpfEJrAedgE8LEDn4Lgg7oMWYU3uaPLxccwv1GNNfxFkGZjizRK",
  "key11": "WUL3RzH6niwB7u8CrHhKrsw5wxESqXYwH9CkXiFxEBrQpDBFzFAatS2o18kriqUB6cEEVo4W26biRu4nHZQfo1f",
  "key12": "3wXhdwwuyE732Bkfmw74qfCxSgMH87LaZwmK6GTFBAc57NgKYhGPj6BgpYoJApYdsGicYjUhzyLD33ttPBjUJaPq",
  "key13": "3vZ5VcsaK28DV1L6EEsDN5sXMwTvXjhZXAyDngrEhe3B2dGfteTS4Mhh12SJdBR6ho274DdycVA6sYygWECRfaCx",
  "key14": "2r28eCkEEqaYSa6dgv7b1KaviGgv5E7fjZqTBopJRBWJroobZJY3QjZGXfHb54yPnGLyzgpvxyyiU3TT9ZsdyHWo",
  "key15": "4SRd79aSwXnWdQzHWsetABFNinJ6rmyf2Ay3sph9b9rKL6mjy9CPzY8PJNj3mm7x1RSbk8vNzCDTpLHW9zY7F4P3",
  "key16": "2yRQxZpok5u3nbsAjzetJT967UX8uxsPWfruUaGYRY6ytACdyz28MLedrN7sZwPkDTXTYcKEqUGdi23L5E5b7Ba1",
  "key17": "4BK7Yfz8VSrmGKZmpH4WmCBWx9eD721AWryCGTWEveS5evyAXoYpZP4C3ZffSc1ka4vQTvtGq96xFXSL7z7kkb5D",
  "key18": "2gNndQ4qTmKKtdnHCp6epLuR488uMhH3GqFpRfi68VcDuJD5tN6216gx16fy2sm1tFnLSJH1wnD8VpJZSVn3ZFwi",
  "key19": "27fp5wW12LV9nuPyysdYAjuA8DztrxP23Jqo5YPoPVNAKm9KvNGLjFx1PyyByhqtCbdJkfu6VE3XYpyeuayZt9sp",
  "key20": "2rvViJEWYDMhBZNLVGxw1xEm7QYQcSdGH7UvkjhCarAATTCWXwZJUgEB2nHp25g6HPEjMUB9geiPrzFwom5h1N7x",
  "key21": "5wgD6HgQTHY9dRTEs77sBWXZLn67YchxF9AFALiksFztZWbTeKkG4N2guQMt3QzWPwTEWb2FmbDSYm4yzRQeAhVX",
  "key22": "3F1faiZ44VwHBToMRv2ZMr1q2mVbCF3AR2Qg9NUUKxETcdbdyKUTt99FXN5HPSrRR1tmjK3wRZu7hCUj2W5wQS18",
  "key23": "2meWXpHi3WQtkNZq8YvBB28KDYrac3QruMAAPZksmb6pBFnpQgkqdv4XHXtcq26v6D3ydxfUneU9tpsFWMXF6PLc",
  "key24": "4rvi2dhdB5MRXBZ635erfm7jfZAjNxcPEPpRVRdkvWr8S73FpH1xMj5ybWaM73ZcZGb2R3s7us8CJHJPdLBEb7ZQ",
  "key25": "4MgC4aD69pNe7VgWjptYfATMonffBuSd58gUnrQiQGqRtKZh4XCHmKgqAdo6H5eA9KbBnyc8GhoiUoajEJ8W7MBt",
  "key26": "3oUsAQvyguhRHdNh1xeyerQa1AARqWzeVWtHHrqrANrnussmePyM88PQq6GZq3635UegGbnf46JXpLxF6kYvfyBD",
  "key27": "4wm4jWDjmmSn3KaavgRvaPiX2VCyxBrZarm4eCEXQ8E9AW8Ah7Y8rxu7ZNFUMSbGZ2jjgKc7LgKQLqtNSwvAtUNB",
  "key28": "5oUqkFVy6mz8AHGauqQaC8GtRM4ScMWee5uVE51FXevdCan71czxFCoop8CYPPpLGvguQ1WszrZ6Xj6zyYd9t7en",
  "key29": "q26fX9cmMF5kb8MJ3P1SPZxVWewBYu7dsh7HixccLEYmSs9ux397SsQnwjfBWTQkXosQD7VbjraQxmKgf336iQR",
  "key30": "3VidqwgbMB1Th5bJDLzhp2qgKxLNsJz144NCUKhrCbrvxCXUVFxnDUcj7YZqiw6ZY5xEzAUGdjJ1s4GAFLJ43ZGM",
  "key31": "3RgcjBk3wPjR1LSDT1UrUJoGhQdsKaLw5it9hCcFyZY9XJeC5BmUUhbAfezF5i9aFGihYeo35oBziFyZr4dLRVSw",
  "key32": "4dK8avLtwcvt3Rqqse82G5NxeL6dGWn48QiiMi86ue7LAHQie9W3coELwui4C2LvgZf2Nymb1yrGLQRCHqjeRdmE",
  "key33": "4vw6hH2Hqhjp5S6XAgGPDCFVXZa1GvQ194PSpYDZE8Df1BQ2D8giewYVbnxJuxLNbMVPM79oTyLKUvBtk9UmbfaT",
  "key34": "4fzQy6fb78rpY1bcQURCvGX2Vibn8zA8Yit4DjSBdxBACB6gKR36NxQjh4K97LhMybY6obU7HghNy6azbqZbW68y",
  "key35": "UM4z1xWFDd82kR1NX4abvM5CyPbNrhU4iSoe9giyonEETvAd9X4ohUWfxtCPzPduYUYRPUECcT5DeYBKPsM1E19",
  "key36": "62DvzZPtASgPu2vYaYSdxfw3mUJAouzTHBt994AAihHpbcQvTHrH4PYbi4o1EuZQqvrPAhD5yK1jP6rYof6Dt7qe",
  "key37": "2cvVKAhsUeQkrVGfV3RKknchNzpYSCRz5xw3fU968qZmSpU1cEqm16XpxDHSEwfL2eJ8BDB6wsCa9qWB2B2u14Dm"
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
