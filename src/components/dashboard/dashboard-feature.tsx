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
    "4UnroRSq8qrT2dQ2dBQmNrWJToGcgSnQQ8EFGA2hnGxNPA52iMyvnFVMVZwbR3S1wNyXPtZqeTJ3sqY7yYqoz9r6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CFdYZxE4rAkwbuZL1Wz1brdu3Tm81AatJhTZgYZJAcx7JDKX9Fc7KLmkawKv2dXiZiLpSFJrduqDz4khAvPbEvN",
  "key1": "3dyfTUeHBWVKe3MYt13Nxw6FJ6iuQNavWjBdhdFCZWF4vDGhFHsvhtfAdxR2Vkg6aEY2pMQL2pyKvaF492aFA48d",
  "key2": "27uyPYKwWUAyENKCH6dcjiMbU2G9f1V5z1N3isTw3Nui6PmHak8BAfkREv4XJfLJL5y8jek3mD4SPCm4hvw4MWP2",
  "key3": "siX8D9opnYYHp6XuPJ5Yt1wciEentNv3Pc2vFuBFk9vkjFVvgyrfCujoa8EJaV8oVtsftiEztW4u9fJvd3znGtY",
  "key4": "5BJ4eFP8E1LmFhZPhHCcoW7S4FCb5oTpth8LrAPWaMVGCaQ4ri9cDHRt4SYEUhfNRfXLip5Wq54BgtwVfvQhUPM",
  "key5": "5rLqmF49P3FbzzREHsfzng5Dqod5s65hHk2fUHkLskHXsZiszH2wHMY2bNPYHFuE8PCg6TRod4oMFyNfVkD5yU2g",
  "key6": "4uuUaWuM8gbq9npag1iiUAKXdG95XiTL7BvLbvgw1y9E53Xt6Lh5WUB2HzHeZmKbVhieyMmawHUTFwoSZqmQVqLZ",
  "key7": "5gTcP8bHmJ6EJg4EZ3sfikn2cS3j6Mzjvbj5YcWu9188p7R4oBYFmg65J9PqGwg6CHSEDktByPAgrqj78Ri8MFmf",
  "key8": "Ng4SC5JpCNYhKtuxaZZNWMB8HHDTSksqKCSVbRJhoBjB2Pn7TaDKTnT83AaCfb59ckHqnY7Rss5ngwgVJqHFHUB",
  "key9": "4Fs3QMHiNrgdNnSa9u3ogVjA7td9mcQPnPcHUWSbwxhepbYyDTZ77tsg1ZLMKcw3WugnotNDreJwJ1C1fmNmTVtS",
  "key10": "2WR8aY8UuRYEGeGMMVwRjPPpsNfRhbFYzDxvwk3vJJND43agUR2Y6Bm56B1HcfvsbyuZXnmC2rpnNwpGfGdqZ2aq",
  "key11": "4awbBWhGXQgEzAG8Ufyh3bD3k973Bji9MikvQTw7F4Qxgjaj3Qf1NdDCvMJ4Lzu8d5L4NER5fYcaEzyc7TBMnMdK",
  "key12": "3nLFvmfcm34UF2xTHdTenV8JrsFPowsA28aqyQNm7Kywyvoy1RounNbMz6Yk2YzZ9A97xYVDvajeus6N4Y8Hn1Uv",
  "key13": "55tRDYZkHEBAD4thdmo6CytsdMA5HoseWq4AkZFVD9ejwMx56GznmxBKvwFiyupyn8k9hc7Hr2YzrQ8kraP7hZnR",
  "key14": "4z4SyLSXbpqb1fVxE45joSzW8q83evyfToNR4wR3eicGD4seMN5XEtpMDTreH3TvuyKft5FjEMC8wpc7FJvCqSDf",
  "key15": "4PSsJzdWA2mBfjPFdTN3NixtEzR6cw4hw33KxKbe8Jbqges2iedzsXzDJ7SsXph7NVWFptPtUc3ssNj57gdypSga",
  "key16": "5bDZSW8zYqkXZdtQoJciBBA3eMfu6MCHnkd4F5mkK8MKUjhbJnxeYApeBV5RkPkq8TTVg5RP6Nz5wKzo3tuMwsER",
  "key17": "4BK6s7YtnXNvznPezi6qKKEcz4yDWzEvqVSiivnp7JsMsG8e3m1EnT96HZd1AZ85bjecmKmBmAHkbSS2dT1mVTHv",
  "key18": "46Ea7rgY5HeLgbcnw8a1ZTDco1X3XVgzGmhDey1EtpX6tVaMMSKwGcPK7vzK9X257ommmkBV1ifpnekqher2zFaa",
  "key19": "38raaa9ttG1sKXKWUvsr2WupUgHLym6nupoRpYjBJadiELuMbPeMpoRHmgDwij9jXjT6sZqayuxFdaF4RujierhL",
  "key20": "3a5PHiG8ueSB4oc7hsXnrCKgepmMEEHCjaSxpk5eydhiaLfTDhDdBZ8MvKzDfLDpgmwo1tGGjCCeTTmT67itJAF8",
  "key21": "biV4TqK4spfp1cuhtevNcmTciPQejQ6rhbmZRxHG6nLeKrWEjezxFQ3DT9KXafvYczSEduM2nwf3e5ZrG9bacAS",
  "key22": "3srf8rtwKFBuzk9SFEB9NjTrDd1dvZXkLQmGATSU5NQykBBJB3aKmCBf6ntxFBJdiKqsyjVsuc5StUHnc5EYYpDg",
  "key23": "3UerRF9FRYiPCTabx97NrUFvPaWxV75bhGtjjCAHkd3C6fuwMg4S4KqgAp72VErf6X6RLLnnRidVP1ZUb5fAybrh",
  "key24": "65M259pQJu8PKabsnFvBFkrar2bzq2iVMSdXfmtm9a1E6auN1uM7GDB8iVTLaV9f7HKpSeBcGVicP1vovyQ1THLd",
  "key25": "4kRcHo68ipqGg5TvP8JTAPFXRw5wbznQDXsAkY6FxzbaeoNAe7NyhddLrsTFJosijnUetKD3mLDnwvkZo578fCRX",
  "key26": "5BobKxEKdpSehU9HJBQuWMNxcMTQeEUsQNe2FnopgTvoGJcPPJZ6KBYyKtGqyfPx5UXgLkNAA4Sydr5NXaF7sgY5",
  "key27": "39MzeQA4suti7PwxgVdX3RPvcqztnbNMXW7hg7bSRsWTKTCg5DZSN8ZMkrLGBDt1nQhJQpnE3tBsZhH7sumQrVRN",
  "key28": "64VFkXgr4h9EZ6KZs7JzghNavkBMBHi3B8ZK9cXy9mjUPK4RMnisUWi7s7TCQo76vEHwK9gzy1MKc1xzpp2fm31Q",
  "key29": "3MCNM6nJRwCf1GucJabxD1Ghz7Xwp6LCmKvEXLrWH2kiDvtSNmQJ1t165MxyUefrQs6g4W1J1Q3qoeYKgi2THzZF",
  "key30": "3zrqbsceHcH4KSfZ1z72P7YYLCgfSMpqpWk7PKK4S98qEqDjsPkhjC1rQYz3Gikci5osSk3yLbNGAyrq8KnVEoSx",
  "key31": "5jpFwC6rZ3vDrTV75egcLiqYCsqcszqpgnomBuYLkiaoYxMU2wv1UMNpSW7GBBGAoLMjFBnDzWhSkYhm9aQeGVf",
  "key32": "3e2D2BHzh9RZAbEVk2neW9W6xysA4QxRQ6YXaFxGrVNNaA431jci69SzBdYGt6nURQvAy8dYs6rNkafress3hvNw",
  "key33": "5hshLufR3UbTkQxRULiAmhdoEu1cdhH8boW43DZ1As1ZdDD6yxopNtdiTRVmA3YLzD6VJfprUiW54jBoVbFbcnLR",
  "key34": "5MtLHX4XDHHKG1sT5UJuoUgwDv8KU8Z2x1ZLuHVcgmMDbFTY9h6yHXx9nNW8p5sbQrMyUZ2UsM3MxWHLMo4VtAkp",
  "key35": "3trbvadwHe2K31ZQ5cDa2JXuPD4VPsQRwiiqyFjBxXkwUqnp9FNC726pRXJMDUHtDZdZG5sJQsS33JeD6YFCieib",
  "key36": "58yzMCAfWpfqrhwK3MGkpq1wrw9dkfxqzhqqdRL1tfxxdCEAt3HZMGRn4g8N3WENBTDWpVnnRjJuSWNDmrtyBxtz"
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
