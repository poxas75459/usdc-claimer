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
    "A7StAdfJTz6JUizdqwfMQU8nawYmLzGPsM3D5WWSN3vFb7f3zc1feveYkY12iD8dwRu4MK3LL5yzRZf1AnfYbMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aoeNy66FdmBv8VkwzjXUCDkEJ8R5YsTvZ6B28d1ByxJ1ywTXar4b6zWg8zRgSqnzWboBqEhQuZGseaFksWJfcoe",
  "key1": "5FTAwoKWmBYipnRfzB5JejZHVg6njrxamrySkeVi2a8oQAWDQHA6quNS85N9UKeTHXXhWZCb8QYfAME6VAvd5TAA",
  "key2": "2aNiUAeFnxMYdGggGzL1BghMkQR16K6HNjDfwyVioR9ZV5SWSGqvKZ8wdBvF8TYosDYF3jVf7PBZeZsa74fm6JDm",
  "key3": "5maTUE1YVKyYaX3y3HwALP4bD8FeBANarJFTirkU6eq4BjQEn6hPWhrvitYtHrQwKsp4TawbVicFmVcNnj7soxjX",
  "key4": "3HabRiPkjZxwvqy3DxqgESD9AQpMCXgPnBxTN9W9fx9aNrwTVQ8nJXZ5W7XQbpnDji4BGT2b5pycR9A7wsRhKi1H",
  "key5": "3f89VR1zwFeScMwxKUifQx9UvjWKBh63DUFy3pqLgGCPrfh3YnUdQVoRTz3P8ridhCpCKHsfyGMddkSoXmS6KNic",
  "key6": "EjK2MBDovRn6RCX9ZgGujDq6kMriEP4tRixpfapBru3Nt1JkigAUbRs33townbDbXa753NRyv471eqtgxuuPNbC",
  "key7": "5zkeFDpKjH8tvE3y9uuSP8vjePHTQEsLiSVmLGNe7UCP5WLr99f8V4QH8q1X52CB4E3UWFmLkZbBBVh4aFGPuGyK",
  "key8": "A4dZx33tKKRT3Fin3d6qupNTBuVSFqnuA3UR7m1JeUxTgH8ZmexfoqhvhbyP1K4ZQZmw9SnjHS5RCJ4D6mw27G6",
  "key9": "5Xj8j44j6WS8oYxGej2TEahrfukAEzDPd2UpRGEYZkH88feNwPbRPzsLwsVi8D7rsxvm9fUAvsZxfn8WsEQKpHrF",
  "key10": "5QZwaCXwdHfra8ZdKeSmoQBWUza2Q59Lc3fSrKX6WFVoSkPht6X1Atkk2qwnTbDC3WV4WVbKD6esUs724MGVUx9L",
  "key11": "xPVnQXoUWisVZW359hnztjAxwrAXpCSyoag2J6pDfHobWZZZpXjCnSi5DzZjWp1ZH9uizxAsWSeiDEnZZ3c6LiS",
  "key12": "2L2u1yhdrS9T8CZpn1wtkj6TuZPJ8ZNqQQ8qr1MVxyKThiSdXPbyGMqzB3ydTV1gnBiwvNzcTc2YSzDgUDLLmZ7U",
  "key13": "9i5a9ACUEnFRVzsPLoBsnaYLCZhaSYZPKnZprunu2yiJ4BcoVBfP1KezCUcLuSEryTcVhhWrK2fCzqvizdFcAFm",
  "key14": "3MDCYCu8VsAwLEQAA81y1PMQJZNSCPaaBGjPWXeUsRqpfxLdckPb8bo3p4uGPQHhdGTdiP4zDYUL8PhkY8Nyq5rE",
  "key15": "2D68dWBCagyK8cKRFwuU8DVinRD1kRjbn786nooodmyTueJcSG6eUQ6XQXy5L7QnRppYRqVEjWhcNr29jNFf6k99",
  "key16": "5HJH4tWABFQvCdT4y3wW1ZvfA9JajqMMxyR1Fjh3xiPLcmT4E4UpH5SCp7SYGeNDCxL86jcog8MHRSPYe95fjg4Z",
  "key17": "p8PRKCQtvDFxDKrQH6ZLUMGbLkoU4P1cEYckyY5HfXgDN6oGgXfeBiArjNFUEbX68oSC4B4tFE1rQtCwGSYo9EP",
  "key18": "2q8u6rNzNFPambTCwtRKZ5PoSdooRipwXLSJXMcidQtvZ9SVDnhNA8hrZddBcrg1zupqAPRQcpbqDYMit3fxtTXR",
  "key19": "5CPqMwPEL8C278BfYgwCbBNWjkUknPza9SS7SZftvJHZQPwqjaeMXXrwLNMcDzkThfvCyvDUmBFtEtH8CZg73742",
  "key20": "3ng5y5iZpukB4EDw9exZFuePMQvJN9HVfcRTvPbtVHumxRQ4oZe7cmKTj4Yu9T3fHpQrhQ8E4x1gxAJjFZRFi7Bi",
  "key21": "5PuTSdKB7865XBUf8NqGcRGCmxsjZQxJ3FpfQ4CjNPWyQwsviyGQWMn4ceqCopDQ8bMp7JkohEE6QsU1rtYBiK4Y",
  "key22": "4H95XkPuQhYUecSZfcJD8Z1iGWpkRNpaba7XDVwKJFrAPCFM69KACdsb1GbUb8NeWWKLMXWUGcLzJBUaPL8B5v4B",
  "key23": "wHt7tmYwyjqprBVncUWAgokAJi4ssX24Hj8dZptSFSH5hiuxH8t1AUo2aZeVmtF9inG5hu5gr9tyNc2qNHBqNwE",
  "key24": "5iwgCbdsLMccnScxmPxHWa14Sn7GKsfhVCdVU1cgFfzsaKZNVzNAyw2di7SCh4YWh2KcQtwv1aqMriRG6muUGAVF",
  "key25": "2DxJP34JKfcSFAuM5VRzJZp2f8wu91nRpUPc2bfpcVxSJW9sVYqJ5oSu8bYm9w43hLs8awvHvXf44SpQGiHMkuak",
  "key26": "3w5WkcUiwkZEJoy1TLkJKXSzqF7KUki7KoEBQdMjUXJjfYTUrZzgRp9UbtDB995seNrDqvoLLdqwdLXbLBXwmhso",
  "key27": "5dKkH2tkCqcxVi1u98sQXBXiovqjGoWvSLP27pxKmUbPuC6fKNqqGySKKUzoTCe7HasPQywEtnVt3k83eUik2wLq",
  "key28": "652ReeYsLyRa348L2oKJMxTgwPV5frcwY9tQ47sj9xxwx5SMLn2rfpzdtmm64uQwJ6jFMYWf1yS1mqFfEKPt6yR8",
  "key29": "szVZUJKCS9QZT8wsNKWRqsHE9hPYxyk8WvxxZXSXtozajjXBnXtaB6pfesC1arfUhWYPkumZxnFmwKurS2ZCsjB",
  "key30": "c2V167a3vqegoFwMkBJPzthWhddidmhnveZXHBgC45BbFdPhhBT1jgk41vhrWMu5d5wJm9G4GNekAiEkCDavb8f",
  "key31": "4BX1fJvcVdeu8bwPiHxU2BEmkKMJZqSGpkxyVcPSftNJhzhAd9JaoxfiLSmebBsyxoqVaSGu1Ge5H8dMrnjk3rqu",
  "key32": "4361XbREGHeE9dyZdm8eZXUZtvBjJ86cz9u5VuRwD1HZe18a3jjNkiX75LFUkE6jdbdxtvX3Q1m4BgBhT3ENRhVL",
  "key33": "2tKpaQF7o1p3EnaBs5LsFve2jna2DbRFbniX1qhginKuXuznAKgLKEEx2es3RGHHJ7A7PVBFzD3Go8xiNNEB7wB2",
  "key34": "GUqV8fYmPCsXQLVR7ZHSaQaT8Hy3TRviDukYUTrwZ9FmG4PdxnNNqHW96Rv7mZhPAc5QdJfcBPxEYo91FGcBGYp",
  "key35": "4FDSSY93sPHTzb1yF34HuyWTNhLdS3MbtVgG4tUbsyMMoVeUJisc1huCYRmhst3GA96Qx7z9JKeMSkYsHmkoTm4j",
  "key36": "ih9nAo9BgmPh8PnpzLDpwyQWFoFoyR9mHhu5NsM33RnByccdpJ11hG9xG4zkWEArp8qKNEHpjdopED7ZvBTFA8w",
  "key37": "5NLDoEzijZuXfuWXxbkYVAeS4eyktdZzp3coXr4GgchXNbCNUkZELEaVCHmkj5vSjhAjBzd6u8kvxA9tMvk6Vz3j",
  "key38": "3ew6tDNX5Cv1tfRd8b5QSfxJsm1kUnuuNuF47JM3PXj1LxGNGJPZoMEPtS8XdghHZk5zubh7MMjsV2nQeyhsZ6gz",
  "key39": "3wJDGRC37nj841i48KPiHht4NUqmL4M9hpaAM7DvgZKv2gPD91bRtB85cnGfWfyhCvrXeckqxnRWFryoebGucWcm",
  "key40": "3XhupHwXEk16FXzYsmvdPV5gh4tQcDdC1vD4PZCCA8TmCfkrrBj8wXqab7fNNaFEimrZ36ZPd5YxeFobBeX5GVGy",
  "key41": "pGpFVjCDUcmgEwDedRaNyPadxohDsxuuijHbWK2dfjnraLov9VVPJHk9uBm8h4giLUgXZurwH4Q7azoKaakLLuZ",
  "key42": "3B344ePAizmJ6U6rDReKFTLkZkqocnAbvV5cfzrdbL88prdA1ds2UXVhAvckbRRnJuQLCgRAtxvCe1GXNAE6WzrB",
  "key43": "4yvGS2cLKcSMF7jYGXX2D2dqTJdGLrFu3UjUsxmmhYaa4QNteVPgYwzSUZFWukkxGRKbQARspgZytoq6yzEdx6mS"
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
