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
    "fb5so954APGoVGWZsnaevvV9v92uRbNfdL4LVxwTnhmPSdmAzejgmL7us4fbiRwZitBwL3d3QKXVDKp52hZhtYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UL6hMavbMiNMMyVXMeBGCZjPk2jraBwapg2FydQCzsDAJvvv2AwKR7uUBoobKa21by46Y5tR2nXYixANBGsXBPX",
  "key1": "2smXRgWGvaMB66jWqyDmyn84k2GMBF2NDRPgMqXJd8u4Qvfiy3zzVVc451fCjZfh6uRorgB35VHB8Z4E46rSHa1F",
  "key2": "3W2T2sZtY2bXtqqhPFo2myNV971jEwyXFZ8TQdm78L2FZh2gTscaqNZm34C4uRYKs6CuhbbHS6YQEM1o8UX5DyJL",
  "key3": "5oN7adh18yLdL4Q6WheCyYgsYBvHSm1cvgBB6TGqTVcntc7bKeqxMfgXo88iX4XFuunzwUQBSedsBjqi4Y1QDZc3",
  "key4": "u73ttqXKuvrNhtSyDtUrnS4tvGYaKkNuYe523xyekKP1hgmP4RmjeihT4fBHHiD16vgoPuTGULnernTw1Z8Gkkg",
  "key5": "5CWUCjfiSa4FNiHGfuHudng45ovciP6upR2KncGP9V9KnVXomyfVWcK3KNKFaAYuYisoB8kSuioU8R3YWTVti2pU",
  "key6": "2AdDrhuxJDLs93K23mPh3jX83ciBYcSHnMyKbyqzCnjxuWrpAEPg4hiDXu6NoeB8LuitzAP83AjmqwVtrh737DRz",
  "key7": "25yCogA13qaqJ1pZKkftj2pRR4p5sEqeU9F8D7Z66XXtV7nDS3K1EeC3TPMouq83N1UGKD4nqVNv3W81Ee7rySeH",
  "key8": "5zSzsAbWscwKE6mLHhTebys8bPLh3TaeTiaPq394Gwe5Ar7T26RSb9bAimFjZAQTiTMULfjeRCquHweR2L9bA1FM",
  "key9": "43bP25kpnAetjpgTvZiXktue2ZPFXDVTs98YqcYi6Cq4UHTvPtLTu1xsxLnBVcAb7pwSxpS91ax8ZoMwx92WS28W",
  "key10": "49aKMznjc9izhj81zSj4REmMJLrHiLiaHxDRxSJBwBjBzXxDn9DvcdvkXvM6A9FXdD7idmakr47CUZRrb1mbT3Zj",
  "key11": "4trM7k7sPvk8nQm4EQ47CkwP4JoJTKmAsFQqujVnmMJ5A68SuQM2T3c3f7T73oPVwS5NBJYLaZXV1Bf96S5KXA6U",
  "key12": "vcBd6UN2XMYmDgonSDuDqsFaza8JzUs3qdtxNo3wNZE4jWM33XraEXCQCkmPXNWdyHDXCMcycAAqv24SWxm5ATt",
  "key13": "5BGViEFhDof3kxxBSPA93P8RossaJRZm9cKqCJRBanC8HVyfg5Y24kWTiPtgXwbVRo55u7UaTRgqebKWd5SAatjC",
  "key14": "7DrSMMwh72wkSpQuEjuhwDLEcbWyTJZdQFawkzCZj8kFoknHwPXtkaJnkuNBrpfjBCkcFjDp2Hj9Wxhufror75f",
  "key15": "4KAW6LZ2eBuYyLRQs2jev6KE2Tu5dMvzSxU58rQe6Yh5bm8zwPeY7Njk8jfDLAL6s33xdyKf335wRkKXBQd5Z6qD",
  "key16": "3Z7g78pkRCN3GXXaQT7iCdXswdvHnUfUFYbvqUDfBr5PBXyyUtRoWMxvRfMHV4m3RaK4DbWvTuq5q6xcK1sujuax",
  "key17": "2N9VkZMpujGN2z32j3zgTjePoeCm5UsJngPiAvtiqcxpw5NkCdTS2KubYVRkvHMRuVPkjvpMiBeaXH64eV9hCC3k",
  "key18": "32xLnNcUnkKVrxp6wmx7Bm3v6ip1y5b1fZLZoieKC5hUwNNVEY74X3ZZUX33WFb7qMBSG3d7gQTAAMnExFccRkz4",
  "key19": "2vvBz77S6S3Bi2kvxsjfk1TVpneKE4snCCcynrqm6LYCvgvEK2rbVwXws4fDh7pVwfqJWGx979Z79o4Zjk3Tr2m4",
  "key20": "XiisT8Dxm2HmRtEErwHLQYmWknFyPH9D1uM8xWPgFumRgAKquidGy5DjLw1qei1tLbBRbYwZriSo91PQpXGihpq",
  "key21": "hXgcETP9ksNiGetnjaH7jP1etcAjM2TQtkpKohcwH8RLKhSq6n6WVTnPMQwwxv7tsCMwi95rtJzuuHbUwn6ggvK",
  "key22": "5VoTGa76dahR8fj9T895Bdf3f1RTRLnp5D3wNeTJvcY5U2gHrSDEVeKA43iwhwbHMXkxzD9ATiow1n6DdPX5XRoF",
  "key23": "3KTF9TJqpghajyQAW1CJVjpNnfChBsbCcvy5d2GK5gumpB8BCNJ4UEKwgHj41gnsdBHjc7EcxKujLcmHETM2Q77u",
  "key24": "5K3j8zkePAdtiRsAnL6FWKzsAom5X47U9pDykEqALKzBgoTG9f9fGUHijVg7fBxgSSvFFAemzx8bht9D87n54Je7",
  "key25": "3UQFDvxPPPG3uynnpaatKQKsH2HXbA1iFb15Vug26u6S3d3tMp27muBuTbfDeqL1kJoey8TCzx81sUh4AR1399KV",
  "key26": "NiiX2wAvwg3xroTGcDLi2uTvC7GiFBisii65yMmrYgNKDbVLioaKEsks3hrv2Qe8HXdEzBnNP7t9rAkSMCCHkMm",
  "key27": "4PNhr7duTvwRRNTyUWVgqpxCiF39TKuJ4qTxfTPE6C8HHzaxDiMtSCVYYqocTRbzbLZ4Z7CY7D5C3sVimkmJWoV9",
  "key28": "429iZB8yAX1gYgXLvH64V6rTeiqh3ek41FhFDQSNrTjP2QteS6kA4MqDj7jKtu8945FsjGAhVFnQhGMEJSEWKCZq",
  "key29": "5x8SnnBueopbkpen6Y2i7Bd72gbBpxzv8tkV9dUSAXAVTK8ZqB2TK879aFFx6XoF7RjYSbhNrujfVDHEe91SqCwa",
  "key30": "Ryj3ppeu2JvnHmGePAdULy4NzBGHYRCoLeehcrdbdd24FeVE3roz6eYGapKiN2uyMc2awi5DxDDuUV8ULtsm6es"
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
