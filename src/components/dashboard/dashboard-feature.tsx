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
    "4QykCnVxUcQ6MGu2dubFzXNrAv4iewTvUNCDWYWzjFkukmSAWsNFf7zAaPwLdKW8gaEPSydSFGLRnrieF3uP4pKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65cgCNMhVYCfVxe4kPrg7zdEuf65HMA69k77XdZRxHMJriiDz6MyP24BJjPQzLDMF41MCX3jac9jdURTTxJoGnYF",
  "key1": "3RwxaJFJ44mWB8uecxedbBtmuDYtKjXsmWBehwiueuvwn25CXZjSubuSWSMMv1DGxQYDkw3cmhGrkAop6UhmQ1aN",
  "key2": "2ggaYmBW5S7AQHfKFNipUGg6cNEX4e5Hwc2f9rJ7ynQm32vdhGhyi6i1EYZbfLg2GWom9kZfjmGhX4chJtCd2jge",
  "key3": "5ppxfwfo8SrgPrTTrVE85e3Mb3y6eN4nsMrnGKjxBfUCMKLqKKutW8PBuGVePQvMNKzNVa5J5hw3Ljo3ZS198bMi",
  "key4": "58ZZu3jKJzcRzVLGoTkFpp1QS6uqKbaKewd5CbzzQn6FJoSJFtixEofnNUmnrVFWUdQNfWX8SzwUBJK6U1ovtPkw",
  "key5": "2CoZ78Wi4oCGUmAkGFN6dsjuQy7cLXfNh78hiQHtTtB4FT4SjCnanziK8tYVq6seuGuYbKgo13MwidABzerfQq3R",
  "key6": "4SpEnSQHeCpWyDEFQ4KSRpV8VVsgHeZQLj2KWm2nzUQj1SpCrCDiHSHTHHNWKoAJzuT1u8UoXMvDyhoC9hchmkdq",
  "key7": "3JwZHaA6x326vyvM2Pe5tZVSaD1iGuh7Mw21jswQsWdA4t1nKkXRsUmR3kdsC3ctxmFw15c5Bg54QvXe2NGMrZi4",
  "key8": "2juwhbHyyM1KbVGcX1D4mpyFM4BsMbGv6CSYQRi9PLaq6yKbeQSye7eDXSPAqabuBFCPhGeFXKdhpB3v2G4fomej",
  "key9": "Kg1toY38rfZMDZ6wQDUpwkaqk8Ln5KBzShv3ZT7SjZzc7ChjhjUcB9U9akKcBmPG3QHhi49NfvAJUf3cQdX57Bg",
  "key10": "6c7L7wdJZJADZQkhMTb1WmjHPkizY6QuMGfxmwPf62V5gFEHBXt3BxvbYwrXys8bwudvYMgMEKM58kwVQzrFhCG",
  "key11": "5H2yd7d98AAyovoppt8xbCeZxvWbAwZfAmiuYyuRH8kREa8vttKAAv4UcoHNAy6L43i6hUjA7AywktuLKhhMXC85",
  "key12": "2cA2F1855PZYAS3heMCC2HqChqGgrwa9U1d3R8EodqNrhDBygxvAQJoeoQAU9j4FZRgJiYrmCrGoiia7JDnPrpi7",
  "key13": "wFmzxc7f2UYFAtrja3MRhRCUVi9p3f8i67Fg132J2TahmJ5QCxESUx3kDZJzg2vsGCirUSvKDNz4eGNzAvNX3tf",
  "key14": "2MzwDR2kpc6iuLySNKJcgZTCEvtW4oK6kd4cTcCs7bUKFBjDDM2Qhu62ZBTCdVoDLvU3DSUzBtUKuDZKWmpzBzzg",
  "key15": "65ZKFZPYiq2t58oP5a42XjuDgjfmDKenegQdpfGwaJwWycmFYDtvWhGBGU7emqingNhoHz39kAGSB5mPwse2EBf",
  "key16": "61Y5kLzZuaY2d6vPQzdbhAnMXXgxex35grXUr5JbeBsahzw5Fpn9A4k4CCkE5hrcjHk6rzsm9GvyzzZrRYsS17gc",
  "key17": "4vto3tDCJ6G5UbEwJ1nK6A2mZw2cjtoop2nrPZrgjmiLuZyyaHrNAzcYXaU9dRHq7JHgjrUsYaTqxeq4XTFi2p45",
  "key18": "33eTyp7wedkcruj9c87mn54CuqoEjT8nmaMuAXeNhXxHiiC2RYjeNPdRQUz5nExWQ1pGAJadGhLYtSRAzDrPrZTV",
  "key19": "5Yxu3Xh4ArcvVpxfR8UsxzxT8perADtJJ452eaQ4C9yMNAkLvxxAfUY9hoXANJRyPJCibPEth24N5gk3yi6qsKsV",
  "key20": "5KogGzdg5oJ6x6U7YY7FC6cVHBrYfnpHxaLUY6eD7FMcsAGWuEGQPvxjELTJSCoFGjzHv3myJccjiaov9wquJhNp",
  "key21": "45g2rMmv9UhYxMkFWju8ueGRczDKC3PQR5Fog2rQWpZA1ZWFUKd4mwqvZy8neu91tAbg3kBtmubKcqspResmL7o1",
  "key22": "4nzKjtcPQDoEbRXqGMq3ChwJ5PgCsxeEBhPPUnhYrhKkfhkTU2nHaBdVPf6fThp2ugoebZAb26JQWfqPWiuFW9ZA",
  "key23": "NPK97vYsmtZAj2tTNQByxdbUmY5CW1FgBecEpp3i4pnRdBtWBg2bu3K7jJgha43LDBh5LCyq8R2pDTrs4uy9Aph",
  "key24": "2z1J6e7PYy56xFSaxyvLWhxokfb8x9ZogdRfB8TDV6Lwdt9PuTXLvQqARQxbrz7YsAmNYibXFjB4GNi4FQtN7eSx",
  "key25": "5haKJo7VR9TQ7vrmoPispvXXURYfDKw1famaWKa4AkrPvdMdPnqpuBk7e1KT8n5hwSySTNPhoMwaxfDh5TeRscrs",
  "key26": "4bYCd4v8DjU7qEK6v4jLsWiy6iDX2MTjG1pfbcwH5Spi8ypJZpXcKAvjB8CsjUP1QN6V1ygYiHgEg1cZzJh8H343",
  "key27": "4kjTxSN65AsXDgEa9LanxcmqeKmh9vXivNZQb6ft4H39cZuQkQxyLahnTsAKtqq3q3K4g6sbr4y99Ze4DR2J8Xmw",
  "key28": "5Ft3aaGDFsvvf8yrgSxi5EgUHvuWmvSXudLrVUnE6GbGr18BZa1i13ngSSd6w7JNqiMrG3gLYFCZ7MMeEFKPidMF",
  "key29": "3gtR464dLpjwUEYmst2PZ47Q8iDm26XLEbn1N7RDFJVVPrCMCh1QTNoBoPhuxMQZgW4rwZZuu2Jwiw2nPJFkZonZ",
  "key30": "yxxf5k6nsET5h189UeTwQ4fS89YLB34CTBTCQ1W28ZLPienfsvZ4TXMaiaGBdJpsmcPckMehYUe7HL1dc9YmzFN",
  "key31": "4HmNpKJ3iVz1G5wu9DJ3D5BjLvfmz3DdnXDxwhVWSZnxLpYbuCNsrYZTLdWiVb1i7ndvxyfER55CJnjsMhfyFqY",
  "key32": "XxQiHGFKkETCTjN99aLa39Rk7E1b9KKs6DRxUwKfnsTZxGtzYYbs8V96Ra3zZLfRN2S7p6NyhWVqy8iVj97E2ui",
  "key33": "2z6Np5hDSUyGSsTMXoPrBhSsWtyR9vr5p51qET6KrJfLWquCScLGcvwpXdcqEDvx6XtphMLkffS1tBJy795nHgHK",
  "key34": "fSTKbk6WafPL9bcXJ64tiByoUXMxhCNmXaAiKz8XXjC6NrKJoBsLdH39HufQGCLmsZTFe74AnvaNn97ZA6WJfxc",
  "key35": "5C5J1M1ffdgu1Ghk3neoWfNwHDAZKdfa4K4hgfiiTVZL24g5mbUxAJjtctDa9PmhdDc2W9cyfYaoSY5rZsypETTw",
  "key36": "5DwYXZtZWtNiB96QPJ5kzAJZ4Tf4gY2PfTjopznCHMG5rbLgyb2KBeCnyvat1tusHioCBjo3ZCLmumGfuVmQy2Yp",
  "key37": "vL58Vznu3pqigrEDz1E6VguV3z8WyYUKFUmWS9r3smqETjDxk5W2umwC2gKCD5Pff4AGgx9AC7ko58mXr6FnLXE"
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
