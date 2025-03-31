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
    "2c3Su4m2r3iuE9DmTTQbQW2WtoYjtF3mzksRmRkNt81KnZetc37xGv49rxgsWdeUVeDBoYrxEyFSQe1wLtXtv6QD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iC8uyU2uS9dmYBEUW98wL27ZnqVHYaVpXLsZaJhSjSrkkEfXvoxydUnzCEFttKndj5DD9R4zxA1VNzqcCYrt5FZ",
  "key1": "4LFRqBrVtgzrS4htoK2K1bqSRm8dsPikVhR9dTZgoVpECXtNdLVTtxn9PFP8nf4c7Q2vRpj26hUxQUNz1fjcbN1D",
  "key2": "4g9muSZ59MCfx3o8xNZU49GCnZSVLU9XAH8g8u4bfA3Xx7QG5WYmnV459UmML13dGaEgtKUrwNHcQeVhmZf46o3K",
  "key3": "4vCxSmig9mh8v6z9XtTJa4rKVtCn1BEG2WagKUv274Z2h1HtcXvEooubFvxWEmmmrSpn3HQDNECVDZ7VaCG6qVyH",
  "key4": "2r4477yvVjjZTaVpeNPhREoK1d5Wd5EFRik7hvDe2ZWQ93WhcaSG8zYmZnPpou9wDz5QHw5f6KzGZEHpY1WoB9oz",
  "key5": "3cWvvN7ihafQVvW9UkAnGeDBicUSr74nyxsMQ1nrzSdxAVJrdkAqVfCeyBtkqMuhPgZoxp9TQsvu7cqfDYDi4c9g",
  "key6": "WnDzyVTU4cas3fYgT5B7khvcknEmnVFWHnJYWyqzg6QNHUxgSUChEs9FBKLvyLMhNtmscxkbCCRttnCYmhQcTeN",
  "key7": "2aC4gY2PvRw5HaEeinXq1TvC2svbtk7GEHBP1dHxfwfeEZiU97miLLMGbp1MStHWDFfTfMHiuQnSTVQ77fjaHWhL",
  "key8": "3qgaQ9KYBjRfRgnPZt8Kk7JzD27QKCqz47mXxGX6sFov5NXytgyJwXo5cPBUAgWuMw2uTYtuAd2E8S6rcTUNXc1W",
  "key9": "2pzx94uXhY8qPuB2GzMAvA8bybFX6zJuctFdSee213Cn2QhmUMp6UahQ9s5EWy4rNAJkYLYpfUF8Th1Pb9dVLQpD",
  "key10": "3u5Kg7FDSTkXMZxTwi2fKByRmNxmrBgHUvZGcFLPSQ2E3pPUJWuaSPDCeANsVoRuqEoR9EDWf3kC5pjjekaTfh8y",
  "key11": "5ADoZEtZTExCbsxPViEY2JZ2rTHH9ds2fYVuT4w2hsqJyUFZX2TieEutFcpuJcbUCGZBRbdeN9hNQdAobCJCsPEG",
  "key12": "2TntQmBhZcMKENehzKRutf4KTVdVwFPar9AjNjeheZKWcgP21mmYn7KBCeYVyvKShzHiZ8Kc1UKJmFemQqX9K5ht",
  "key13": "4VFuc2YU1jHVp8bTQc11WpcomGABRc9gSxWjf4dyvdigtsiozk1L1BFW1mGZNGiSouFw2h3rkWGieCdcqxjxybup",
  "key14": "5FTMHrnZHfWQD8BSacRBbWxBixvdPG9QXCSvDKrZw45sTigZLxWU6A7rLtfQ94Reyjfe428Te5ax6kcb1ZeATX8N",
  "key15": "5p3bysQK9YCzZAVe5ShrCHsygSbU5SpyEr2Pg29VAiEY82dpvvNGBcVbbUYCSNMpFCZwEXmrkJD9Zj2A1yxF8ANR",
  "key16": "2AfLAAsbj6SroaXxEpbDy5yNebR3Ny84FSoEsKEPDhLN6Xv6AeovCGgvch6rACBaLTSLR3Lr1DQ9TwA2oPQ5bQB3",
  "key17": "3dw5M1pQPgeLRJ48ZZarLqCcTvWAHAS3hNGfkwuyc6PA7SUJPgTYTNrsJo2YPMv3dJ7Qf4QMogVRgbsgLC3W6JKz",
  "key18": "3CCrjz6VRkfoe45nnZ9fe6K2iWWfp6mrXBXH1fBNHzMM8moV88dVBYd5meWpfegHwVLoutr86vP89XKUUspJLGJh",
  "key19": "3fdNBBqjawKYS3WcgKwGKixAdptB6rQwvmHsyiNhVsMYLQDRuovzrRMAz8Ha8CRZkAwBLHMkmWqGt67z5VsXJiGk",
  "key20": "2XwNpFwRTDAQ9fiMS2SCorKcbbNPHvHrye2QfauZBPurVb2fJZa6iBMEK4Rpqo76zdjKVCLr5mqFAYfJTpLQJaSp",
  "key21": "2GtjLr5bzLB5vACGB4KRrAKdSy9zzR3datsqsCverswAAioAejovdoZJM8NeHoNfVTt7zkcgMv9ppyFzUnDg195d",
  "key22": "5FGbkoB1o5r3jK5fV17oJ71u1RWUAjyeRYUyAdBSSaWuHAkrWRB8UW6gK2MBiFCZMPh1g6He7v9PkmB9JkhTsKfv",
  "key23": "3QQ5Xu6nQNzMEkbyvb7qALC24B797ht2AckLvZmWHVfE6Hv1fQg7Vb5aGMMyuVAQFrESbydA1hZQMGo4g1bWV1Tx",
  "key24": "5m8DWiTJ9VfLPnfNRTsaKStM9wZ4KHe12F1HJhLeNSSryNRfQ13LTuy6jonV3uspzGwsCqisM7rK6FcQ8zudr8xE",
  "key25": "5NtuhfH2MKtqZiJGSiuE3KqZtMnRMvNRgFWvdiFrkXZA3bQnQ8DcCcakGJYZtmh29YN16Y7U71FPngGgVJ3RY5Xa",
  "key26": "3tecZJo76G32TiAZMjCXLuBWBYsmwwTxAgqojfrAwegarcd7BvLRSaoxaoNrE4rCh4iRQLmGCJoyGKEj974EZjx8",
  "key27": "UWefMYcVeoWyEco2ejhTqGV9e7c3Htsvm1SiYCT9nz8C5H54wPfXDLDrvDdHfMgnZwo3Zp6DScQGYeA8NwD8Spa",
  "key28": "2Nk3JfEgJv5hUNerAw9JN6HRTzn7cMaT73Sd1W5eP3VZPiNQH3PSB6qDvWvTNzNSjMRRns6L9fNr3Y6qDEVCt8PY",
  "key29": "8joSS1de84513QR4WGUHwoDzJCuXWYEgmHCq9NTxspVQ8G43kFpzDdqioGKTh7XEWFiawN42SN56baEaxJ2YtV2",
  "key30": "2yCLB89tnMh7RFhtnBbwbPkC4N1BUPgDEJ9XNpyWFXzjTqTQdNouV8AouA9x4wHxAkzuTKH3vTqB59JNjP3TLbc3",
  "key31": "349nEDrHLUxeNSVjDvsGeBBMWhffVe8NAXnR1rVsfwphv3D7S9QwMmhCu6s7JZrb65h6gS6ziUDJEzYQUzg75fsY",
  "key32": "4bHpVpEzKN1gTkHYaDwYFppzgKTSEtSfokpFyZTjY7PG6JDwmRcbf6j3qTuvzM2wc7vC2b6yLf4MuYTWU1fhHK7x",
  "key33": "5PFMf4y6fUzR5T5HMVRAwVYfaFif4oDCjFsRrAQA5WrosFunJibS3Bjgk4jv7w534SaUF3arV8BdMv7YRYFHy6ff",
  "key34": "3x5yYDRaHVV2TncaAivVFr2KZkRS7xXFroP4VxfJaQ13WsMcnZNfTm9hrPHJabRrbekLqYUyUV8XgboZ2xq62Fn9"
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
