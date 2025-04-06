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
    "2AjZud4h1SaneLubeGHqfsc91rjZiPztDJLHtvCNfoMrjoLmwMmSvVkJ7dFCzGFpQqVMtaqaEcBfTTaSrG4KM1Yz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VWZfMjjVLL9rL4gmRu6CASHqTGtghFH8rqQ16CaCvpNNzniDerrrFzxqhHjz7fCtKW7wQK7eAd6CqygMHERiAAU",
  "key1": "3XAsDBqGD295EdMiw1vVsHm5tSi1eTuGQC846nyqx8ZgQje2Gtt5XNzEUt82xHS4uo2kQptS3tNiz2LPfemCxRzS",
  "key2": "2NEszHq64Ax7JrbtmUE6XzMvo9g9nYDMQLXajdugu133mBujpPmm81dNAASUUPqGebbyF9PhCKz7831u561JBQ6Z",
  "key3": "5ETL6KXGqNqoyKK6Z9Easd2tD1j72c8GNEZwByjvibsTV4yfvVz2aVpTrAPmpQvLb7BmsCXUBATCihxaiGMjhDzc",
  "key4": "2pQ3iGWgKdoJmAxhPDWGcQxv3WKiYRkwuYL6ydRpSKiAAGYz4HswpdLsisgqEd6oxznKuGMdyDpkVFG3XmVjPR4f",
  "key5": "qtWRkdTLr1KQ3v1ppaVck2nXUGzeRQ98XQa2eRBBmXza6z3KRXvy6Xr39nELdMD8sPnKpCKxjceHMH6DQjh4zot",
  "key6": "5uwQbVDbEwKi2SrUqYSwC55zjXVFaZ3mNo6wwUsioRx7Sqg3jkkm2WokZC1Qgn57FGsgSgjDEdJvuyRjd373Qbxe",
  "key7": "3Mz4hAxNShwpmn9aWmGe5kG43kSn9jSU8DdePtoKWXD9x4g5XG9VJ4xjB7BdTCUfqZonNe1doJrRupa3gjopPpnE",
  "key8": "2Ar4HZojhiGSWy8dAvaYi19HmqDQH774iVuKqRKG3KYSNCnPFh3kGUT4ZoTB5GYjZJZcPHevd1HXqUnLX18m9nqY",
  "key9": "5Sf5TFGqMEdPk94FA753CEz313erGPhXp9NUAvceyPrPovberYQ8krVYVsywZay33mxrXGSqY3eSSu4dvDCpMEDY",
  "key10": "48VXkdkWegXJviEraqGeWW8E4FEzDdb2B5ndJcEFGFGYd3Ktxj881N844L5zcYQSsWPSjBVUkosTJQXn2kVWFEec",
  "key11": "YUpR5z8uAoVNU4Ak5YLu4xjkdFenFgHKH6FV3nz7Ym3eQsKqGEpTtviJTvs8L3vNQjGXdC14EJVY4fEwXvDEiLZ",
  "key12": "5i452u8aNYovrCk3tiaSmjXAZcQotJfiSpr64wLS3uY8hjec1NTu89Rr3EbptbRvPV5PdmU61Qtv9wEUWKqNMRCs",
  "key13": "3i9PiqtEHtJsJga4BBLdjdq5HHYynjL4r6S3U26zBHpo3xnbB7Eo7FPgyDS2mXCCxpg9gRgL8Xgc16d1ZZjB8cCN",
  "key14": "5AsEGQMfQQb9yxz7dzHywQHB2Pf2r1X3JEkLwcZQxGYmfiXk6WszqmRmVeZDzu4WwUPuZFWrCZdtj2sLofa8spNX",
  "key15": "3Q23WCagQ3oWFfotBhwX2cQQuuiAFiSACt9EbpeoYcReUGCDVnMB2aLP9w4p6J7R33LPgvmGAmE73NAagcdu4HYA",
  "key16": "kZj8mVaYCZg9sSztnexhtbyyU9KxVPsbXQBwKYfuTWFi6cjMvFUtxRu1uVZQSvNPphbNjFLkvNqVmg4H5ttrPFG",
  "key17": "57fXZqyL9ujhKNPGCe1vmxxqr8EmoMEYueRcaXxRzHHnXvj5XPSbeJ2eJTbbuT2Bc3GDSj37KjwTtLN73Yp4Snct",
  "key18": "3S5EwsPNaG8P2mqXmzJ1nLCGYyCSCFyxDhKRS5PwC7n2CWckQ1em1TEN7x3ndriVXan83n4VDoYs8xvCAJG5y8eC",
  "key19": "rKmuPePNR1YzLeceoE7cQJFcbT8tkoBj1Z5NgY1n5EEst9vdc5i7TWxd5NMfHBcVHKX2MJDe4FFVYivUe2LnQSr",
  "key20": "3iCfTY5eYGYvLUdWrgh77PCgkYzXeYjwrHUEuEfxTLwUF6wAhsgwivXFQRLM9XHqgVBVMZ1384pZvoXY8hfGhfDR",
  "key21": "35sU1rexzZJGdzc4ZR6tUhDg7D5Zf3r3HJrQYKQdPzeMTsvSRR2gc4FbJYaANaF3UnecqriXLApAsNNGJ45vj16h",
  "key22": "4j3vqtSoVMoBqSukd4q72tvnXbJmah3XreiAg39VKAJA9wcQQCDUptPsZYdNVTyjoHFPixh2s2hk87V2qjhEpTaJ",
  "key23": "4xmA5kHtjFA8obaMeJuikmTP58E2RTyycuiL2vqgWC3PXotNMQvSZBrbJZ1fgtKCNHmezQTrYgC2UkNx9jUSdP5f",
  "key24": "3RzbjpYEjsb7jG3zuHjdTv3fi6egqwRCxT8Mj3i81tHUXjR8m8qU9no3x4ULHbiLKuEE4kW67dGRedYsex3VJ7ex",
  "key25": "5NueibJeZ7YmkADaPJPn9H2MU2JgW9xd2LHmSQxugJgofmnWGV7ze9Ejxe7NRbwQFT6m1TtZYJbrS7SrrYbQFDhc",
  "key26": "DB5gkfv3k41fQsfHpAyriuuma2mGcvFLdp8MKZSYkhWsPWhGmKEFAf8oJ2o8ixd9M6gaHvK9Udnve2w1Afa9GJC",
  "key27": "3jRRsr2p77EkgRkCD4qK5FhrSzc1iJgjM5z37aJtbAvMM8xigAHWegnzsV8xK2NyECsZv5vZDwE4PQ9q8Cnus9En",
  "key28": "5DVP4duz8hJBHqNFrCJn6xV9kjP2eZX8KkNqucPZcRdS9xVddJJSmJvYKQrgqE3KbXe5YgHhnPCLPuQ1XtUEnKGV",
  "key29": "RFbxk7iemnTpQgjG9ydD2Jjn3q8dnicgfjwxikT8oQTaGkQtw3s7p5VDQjvacXbGvcLS59zpZnvthf6J8mYjnKk",
  "key30": "4PCtEHE5x98gon4xJ2JTmmL2p2ng8L3xdttA97BuVcVzVUu11vuSiP4WqTrgjWWkBJSjYyMc2GncTUidEHH4yYZu",
  "key31": "52Soqw364gamVSxCx51VuvqTaqbMEfKiNqR6zcWx8BmDXW9CTiPaecc8ddpVbZXCkYaDvVQ4oi6MKGFxE73ebBBC",
  "key32": "4EiSKoa2AxGQaXKoPJcMmqEiKxM9ywQNaWeBfmmiyV5eoPspqAS1ag83NCkaBfGwRWALY7gcusFV1aVGpCi8FP3y",
  "key33": "vePNXhqzfX5DZpxpwjNCydaaoGmBeSyKt3bUttRmHd5KiA9WM3zVXi8nnCVPqZoZCJoQzat9YFFik3KQn2fNztV",
  "key34": "hfPBNyuf8UiK6oe8qjd4GGdpg43FbV2CgMyAgoLP21enqR5iytX9pzoZPSXt5XdannUUTnwK3Dh2Z9yS62yrDx6",
  "key35": "41hQ7wkbZ43TpdGgyX74NLiBeLFVWUFi2YHtFRKuyKp4SprWsttgxL8zkxe6k5FN8wAnofPk1WM9wxGbcANvJ1yD",
  "key36": "2qCXdiFqwM9jQN4cFdDC8sZrNxSYTJ2nDLsvVatDHhxhiHPxSV7APerg1Hv4ELNVACZ9kRWeEc2kbzrxzZcuhkUs",
  "key37": "4sA3WaqzCBLqD62dz7gZqx8aUGXyzgUaEjWj76qfNAdmFuazpuWuRYREoatZhNExW4V5s6T2v5pZU6UmsL4YEC7k",
  "key38": "5X51Ja4obwFmLzFq32eFmpv5uWFVcAjp2Ac4ykPoj3sms4wKxoTnjEfbvh2VvnLDm31ANceWzxxcReXVxxppgCoa",
  "key39": "3z8qp4ghFfbdSh4fXDzWWq8GKu8LWVA8BbgkHZj2Q9eqdJMFDGLQR93ujALKLdhmXCW56VY7padhxfLJdFonzU2S",
  "key40": "4VCD1C2k3ht7Byh79Rn7yZVpKtgGtTZYEhx6KJoFZfUBuGW162GY3WGg7fw7Yc95M1GdHk9p8jiepzVffjjwawzz"
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
