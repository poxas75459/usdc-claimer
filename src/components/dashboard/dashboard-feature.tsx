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
    "34b25PoYPc7aCrJworxxJFqomxNiG7fMx6bk3GtzNtusnN2C8oZbkMJxgykHdfTRegYqu5UDreY8GKKkzUzBiyrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ibRVf12SLYWCBEb1SeHeDM2t1RVY8Vu7m2XNpAEzruwbUvmiNUMF91RfzgjxTjMaR973NbhVhEpBBt1NKHTw9Dg",
  "key1": "2ESZL4pSFWVoXSbrqtsitYSigirZ3EobyChvTiJiXAghMsZDZKfrYR9RTgDtHwQjP129sYK98oLpApiAAe4aW3bL",
  "key2": "teSN8qVEoqstXJnfkTVZoHJ65PX55CQ8VmmwbcLB1tsTCuqFkZE81ZT9W43QkJupbrBYvv2ommfx2v5zyLA75fD",
  "key3": "2PPGJAgwGmWCGvyUbDH11StwDcwn5jVkVJvH4vLptAjkoQSUSkotpufnydAEV8MFhGY6Lrcf4T6x6N3Qi9j8J6PE",
  "key4": "4mBAM1fWg3gsxXaVDzqCpQV94HKAmwVM5xJKd8BY2QsUNs7nGBmmVnW4TXWeLrD2uCy9FbPVnYCMaBZsTfia6c8C",
  "key5": "3pfGxtZfxA2DvPnaXCG72H2oLm1RBDPwxtxFT54NmBVr46o9EJHuAwQuFu81Pm6qEDGchZ4y6GD2ENdhpVWAXmBB",
  "key6": "3Ab1gqok1dULmEgunQiDhUivxVGMazjTC3N3QC6ZRfN8HwPkPDWYqA4mWYHqJFNyUhZqoXWAwUpnmYDrjaxibZH8",
  "key7": "4ToaXnSv1nNMrqJr3sp2yofM4PiVXvBLsE5nCcgeGr4U7V1WygoNFBj4WPaX5fKQMw1zEX23a1JHiBP6W5N6kfGc",
  "key8": "qZq1VckstjEkx5QjmnPY8DjFwNJhxBcPyYsZuFUqgQS745yL7YKbxPiKkBcf6ez9oetbn3ippbNRXkknnyRNG25",
  "key9": "41memtXcXkFG9kE28PqppwwcxevroxcoX6jKKEBcSpT1K6atcTwX1A2kRUY5XEQUmL93xvaduuMRdp5aDJM1Adxi",
  "key10": "4QGDy37d6xJSJtx8eYiyFHe2nMpHhVdhrhpRxMLvu7pJiLfM6WkZQ6NGScdUQTtLu9cmB5yRximJddW9GQgp6mud",
  "key11": "SMc24R4nfpWwnuyBKqVBjwmyUFUKYXjrZQixZ9X1hAU2ZLXzRBAFm8JpKxPdX5D2xHT1RqtZvDng9qemBgxgakC",
  "key12": "X5itABXJ6VCQCUFdHzM5cXwSydVWUsf7mbpnQmhQTFJud8GHcRgVucvmpFLwt6mAgC9XAfjN1gJYsAfy9vxLqcX",
  "key13": "446WUxN5m2SWdECWh7pPBNPFyMW4Dq5GwpTWEDnvCnoJRraJh7nsNYFDVEdjNbyxCwQGmYHH41wJrhJ3Ywjr2J1H",
  "key14": "4zjA7U9iLUVeq4T1mzykAkpzKRiY8zNK9fR33raBNhbFgzdg2tKppoCvUPnD9Zo2Bzq7ELTSNcmTAhL5xA462Eos",
  "key15": "4L4DYmjjQYGpTAUbqdZtvpGhbmGczDMbuLbPf6Cm4UMkBm6BTpapGMp332dj4rdvRh9qqZsnPfBxokZgZgFeUABS",
  "key16": "327Sjp4aF7LhHXGrfSfjnoxUGxB2sCpEwLYDwq5cru99pNoGBYRUTQmC32M2qZquKrNzaLYBRtgAMohbZ7VtiXmu",
  "key17": "5buYgiWscMrXEx1pQB33kdbGiTqBUNZAghq5N6cHcYwSJPMqDibmubKTAeDSrRwbv1ax2LjFRxmzwk4pY6kFFKQC",
  "key18": "41D3WNKE8wSSuUDspSySHmm345HXhudhPnJS63Uqe79xFZSmVErge93vvfyLpN1wxxnQER872TTRgot5z2H7TZ48",
  "key19": "Cdei8QXydfHVoCQKvbAZaCPDW3y9MqE5yeANED4A3ByBjJ5iyGwxYEL4dVBuYEpi5yxYLa9vHdHsHHSdwWDjJUM",
  "key20": "22grcUgsYNVnhtjztwixtVsUMC4o7iiSScTjrhszH17dpqShphxKHx9MkDq56SYGT4F3ZYXHE35wQTcMB3YTmLid",
  "key21": "5itdP27Bq6Q2iKSB5X5xwMKaHg6Jw5qzMR4ZRTwhqRUUeNUjiGWeGKDMDVBP2v9P5emYpNxwQS3wvctn2vQZ3UdA",
  "key22": "2hVU4nFyd1UThx1LJ6aJpAEiy5qs36FRqsdcCfUYoTfjfMHZJdy1KXQaD6YyJRWgAPzvgnTyQAFH5Wt8m1nPNX29",
  "key23": "5LoKhSgAjK5qtQ7E9mnUDMDudu1o855FKbG4qbZjxdjDJwDuwf8fU9YufC1WiyqzF1pzUuBBQqGjNCHfKaRuJv7c",
  "key24": "iTkdCT1PEXDFjx3bKdL7TjqTeic1r6PsmUYfKt39pbBsgRK3VqWWVqaGtWSTGWdJ43g5hh16ESgMu3w7nW638jA",
  "key25": "2miLut8FLJWqFXFtFwNBbZv2Tr2cctcqAwb6s1ye8sjvSMD44M8LR5VjJaToTuaGoaboRf18wAkSYJ6wLyEusy2h",
  "key26": "2BBRf83Kv1cxzDraNLpXrfjmFM7twyXU11KSR7DSWkefPX5on1frebbHVxg3Rnq3BwGZGW5k3tfDiKxNyPgmEzSD",
  "key27": "28ntWoqSHxcKHv4xHN2HQnS4RMcoAbkZ6HD4Akn7ce2QM9tAFcFZb6QaVeUshHuNdSWtrqp4vKvvSJq3DMmNPDtq",
  "key28": "3aRG8xJjDXjWsbmj7AhGK8Quz9FKfmpNHv2Wi2Rsn9uE9pcUMF5qq5BKV3t51KzHfD1agEvjMTT51FAPc1aQ31Pg"
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
