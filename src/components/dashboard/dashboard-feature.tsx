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
    "MBVnRNbJrajVjqkBxtJCgK68cvmk7HUquvj2micWz7csjRDEb3i4hLw5PNbNZT7tjxZh6Nc8vQG4YnfZwtDBCgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LBNBwRBg8cm5vZ4bYxyYc8oe7QhvKFULu8xZbK7tugone9kZYW9t7iZkUkpmNRM9ZGfaNjztQT4hx7Buvz2peLK",
  "key1": "3CcmKSfQZvSwkFzizdQm8qHHiMSfsAWesizBReBHtpFFiha3sAiYFLwsi4YY1RHhyJVZYhatGxCNMUWABeHyP7kd",
  "key2": "4jGvZJYBJUv1nUSiAfnnbjxiPXkHztE8zLp7hYmX4g2pYQARuuYViz2zHaLJzn1QBthokBJbF7fJvMr5RHk9z6u2",
  "key3": "iYVxmMJemfm2RXsbGHsei4r98Xh4kcpLtfjaLwz5kbyej2K44A697PPrJMKVv4tPuKPwPQZVJ9nw7wVo9GDmEv3",
  "key4": "YEpMarANQofqouB5RksTiu6tWy2bq7hM7U9TPQgXUDFt9D3kCBxY2JrFyn7KDqPoyENPJciUH9kQRQg86MU2UnL",
  "key5": "LEYtWxW5YeKt3ZTPQiqA94ZuiTFCM3Ntff2yMfx4EhzFHSWN89ekqP4QDuoWLQ7dE9qQccDDjQbPAAjxaEcS5kC",
  "key6": "d5tHHVacdeVP8VYZHESQBCTD2Ta5vyWiwHaNFcm3xf6abNmnUBHATzEeegeyh9gj72hbcfcEycYko9Ff7r6VQcW",
  "key7": "4YKMQcHJUN8BXLv1cFNMxmZhcY4JaHM3ivNsooyyMyjupb1QNtJMgUC64jni1dS8e2nZqUUyssUydbLx2j6ehHQm",
  "key8": "4YzPbQmUdWT1BmwEa2HjRronB5phKSX6JcE8emcNeST7RQKv8UqQBwbEniQWGAEb9gmUB9a2oeYx9U1uNeNQhnHC",
  "key9": "8Dkmcy7mvp6hKxFtBsJLd6RFQMuuPVVJMh2rBerWCLNfxD98ZcyLiYJrdkoyNbx6Crm9NhvhYMF95y7d2bvqtS7",
  "key10": "yTRSt1DNEhKofjTDifsLpJZnDWMyZGj19h99MJht7GTFK2ma2bNLuWdHDdDjg1mfmXsbR9od6EtX8n5UYGqGKvu",
  "key11": "2hQ5uGiMYN9nDQJVBS87FyVmaL1MJ2d6t3uX2hCnb9qkpqrRdmukEckB3jVahqefsbNigaUi14xPFYQadeLkrYtg",
  "key12": "6XNgnet5qPveEPp9jnGWrDF3hqDsqDJGixkaWQJ4X2h27jUXef5wzNEM5YCYgvCrW5iFy9dSSX5KfR7RZpMpDtn",
  "key13": "4sodycr1edqGSATff4UqmeKHV4bi4grsC5aNhMQZWXBMdsTSgqjethubTeoLo91zpbQnMHY8YfGGGfwAUiAAucrd",
  "key14": "4gDXxhD1TqaMprRvYLqUXAMzufvfnztKsfoae4HjgVnXLrXp28oYmzzG1PkofZRAnuQsczvprPhSPwysKSsd9r4o",
  "key15": "4Dz7W6mQT9B4U3zZ9ZKhtUzc7pXMbkHiDdje3U22Ny9Ed8t7tL4xP15fuhMMdqD5GxUUMvLjxS1Ni55FYVM73jzn",
  "key16": "3rqeyUn9wYvHSuJGBBE5YALyeSAG34sWYdE7GSsDNBCxBgJVDa2qHcU3Kkg6Rsgic17KMPtN15kCSqXqjA2jm23U",
  "key17": "65qMGcxebs7RD81giv6nqQhdbT59Atpoh8G3Po5RVBcy7DSy5o3tNHNCg68wvU5jsBdDHVGQvPCYo1mRqTLS4cjh",
  "key18": "3VCTvM2yqzLKD3fK9KiLALxzaB6TxzQgENtuTFzdkW1QxoKWaj6An8SYnxMZxUYf77zio3jmmhBJMpCip7MoH1JG",
  "key19": "2ivgucbmUYEEpjZ574VR91VqmL5dBjPB8L8gWRuYiGkoBZ7DMDrXmUm22DYadwnj38zy79ijQAxjwiQF3PxFwTmg",
  "key20": "2VPQeYHu97aTMnrnR37t3yoDYam8iHJfmQZExswN3n96p4LyQ2DHbUN1R1q39zrDFktKGwPeCz7swwHCwf4pXyok",
  "key21": "3sWQZUSA545khHLumw96NQuP2LFDppfvwiBPUoD2NBV2ZmVYyerDg27viWvVb9qhYdmuP66WLTf7eRccTi6PkvTs",
  "key22": "5sfcfATHBv85j5aNdRo4mE3XeMNWqpAbBpZJN8C8nG2tvFBn8c3Rqb5vpvucbvxAUHwt4qsZjGH16ywa6komJYtv",
  "key23": "5TSnktsgmNnRpZu5N6jpWVHXXBKGzGkqyjMFX37odwiJSHSWgokzkDctPJwppHY2PfueSBLhePjSC2gqQRihLR2X",
  "key24": "4VNzB6YhGWs1Dae7mEYWnrG5adon975rGCVJ3oMLCfcCwpDHyLyfmms8vrLLfHxXm3h45TYwoq1qvDkpgbnCMF3D",
  "key25": "3h2v4UBSqQUTSE9GDg664TRoZhZkVvdiEsrnkqb4cSYeGYdyrTmskMCKACgEK781E3AcGBm7dUQ8boBTZ756SNeN",
  "key26": "3Jt1A8tV8qxbAYKeAb666NyUFusgcoD25d331cFKXDxQ5GuMKniJgd2XVQ7f2ML8nr1jWBE5TeHAcecPaPmVuDEU",
  "key27": "5ApsENqRrcMJAwZhcseSCkoDYGVr9BrDsrGJ9zzcjTvZUWyxhMQ14MhgK7bfuv5i9RAWnT2PHtXHpScbKzZu3d2N",
  "key28": "36QxnfrU9hSnddzzD4jDRzwN7Zi3TAQeE38Wsqrh2RRGTwFA3Nh91WHvUrXxBtRvCSjoKfQn7mhWAKF9fPoGbxxR",
  "key29": "3krXTtvtfGMBt7SA9stcfXQSGed5WVGhjgQJTaWXmw2SnzgbhtMwjC2dwx1tQgW4ty3BsmCGSWv7BmM1Dpi7ACGT",
  "key30": "22VjZMiCcyp3rLGuu8p8eeK58yrMLz5TpwUA1CNvstTKp6NpCNkxVeJrFNmFnViRKnKpyQ71cvjSsgQmCXCxq4RW",
  "key31": "2NM7EtGkNPbS3quxDcsseBHXWL2gKrH45ubiwNWrV2WvK5QMhTKk8Y7qRyhTHBDJkw5rEyNYbBKnMN3qRW7BMa9h"
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
