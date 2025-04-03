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
    "TKh5n5Vy3k4qWAM1N7cNTb54xEshAmZJeZMGuQvhs6X5isXt8R5FJCB1kiGT31cz3vVSXnzxnL615vnumLRHRYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mp5iT1DfrW1g68D8y6P3s6v5Zg4Nibf9wgM57a8UhDqW4Aiz3E4Y3t5C632fm68CtpNysiYZvemThsTauZm97Nr",
  "key1": "qUMYPCbqBYGR15Q354aLkUpfHQcxo1TAZ2xQPruh2YaYVJCgXxkoyNEYKwvcVx6csqMiT3smdGR5bMEHFsCdWg5",
  "key2": "5HRLEzK53XQxpNDLZvrq5tnsWGA36rMmG5hK1EAJRFSgeG3Ey1ynpyCKAdGViYDJGk32uLSEYuFgQ3ntL9sd6dEk",
  "key3": "2ZzVYJiGE4tdEMCUwtoBmqyNPvF3fBheuj525snyiMagEqe41JiBLMTNBBeYBZxNYPWpdkrsCsZc9r8wbttCbwLB",
  "key4": "3sdJKZ6yn72vbmHFhSiZ7zzkHopyVfgAYy9MGZSANr4gFDrMbMbPNeb9td2vhxZYeEEbb9VnVRVZXQ4xAfeebq2i",
  "key5": "M8xtVontT5XJmAA5mc8aEoj751KU9ow9hnMYnys5WgB31FNuBv5TtCiEP6dZV52qi98KXDKn7aqx3PnyABk26b4",
  "key6": "diyPv1F4k81UvyMHQ6DA3gSQrzLCVriLytjnj4PuM5bsPJbX4bAvPcvxYaxShFNbpXZf21LjyWCesGoVg2jHgui",
  "key7": "678FLUM7bJoKyR7hzLEKYVbukBGFCkLC2jN6wSZ5tkNL9reG9dxgvUUndUWmoyXXR9mix4wGBEahZz5oLrKbLamp",
  "key8": "3EVrNMTN61nK8GBuWRjXiXR5Sn1N4bSMtwWoHo5uHqHHc9BPCLtNiyubtsyKvaCmpj5dBd5J1MTbTVEjRLtTjD8A",
  "key9": "2aFE5xLAzKLY3V4sN9vo8MpJxAXiK6R4Zkz9s58toWqZzPM9gp9ZmwpyVEvBL6hNKdjypSZ5snsnGQbrp81b6GGA",
  "key10": "3DdAtZkMNg76QdNfSQqY71sXLrfsYjqv9qYEFdQPXEuguKtoBqcJbfKCD95BLg6coLDuE4VMpZtVpbWXT43Ad2R2",
  "key11": "5tpnYeXNpK6pjbN71rsLwxDVKmEcWC5WgR9N9vKpKdyNpqva28TMphjNan531LFBCzaeXgSNspsgDWFVtvCTcCDE",
  "key12": "5v2r4segfBeu8aisRjjiAJQ9DjyDTSmQjwfYkFaPJmDrrWNRbbsvu3aDtzv6nKkVmaz2ssnMmZJf4wsuBqA51iaS",
  "key13": "667XCUj7Li4uEkbJVcMiayDiNKVRbWWpQzA8H1pkmdmQg799QbnZ74rEYYDthmMAxxpt1FtjQq7JhKyGDY5Gdxro",
  "key14": "3X4g4cUHuMb8rDFe1GFUhsxZUQ6p3fmgbwyMApr6K9qKaVH126NDR3LuyfdPF1BY8daM74Brd8UKidrw3XhAcJdg",
  "key15": "5bkNAjN2pbWrDgAg37PHuKDhG4BJQu3Rwscb9ys9yUBEp7ihZLvNU9dVvn5sdnJZJRUQVVCjs8Q3rADjYBRj1WYR",
  "key16": "veheSBocixLupYg1fx2doGT8wpUkqUn13YkFsDfs7644jGkZjWirtWtkHPpS6i9h5JMdJT7Y9HTSkhdxjCdGWBx",
  "key17": "2JapZgrSHKcx5qYPG2wRqE7AALa2RUx1jAB1yLVSN8oMBN6pMVUPhN4pdf7tYeKbHq2KFQudzWwxBbdgjbH4Paav",
  "key18": "pXLunLdQy6srGySgHpmFTJiG2rCw8nhd82SsSKurUK8dXxdaDwd6kuPeXqbzWU5JFBYAucoTyKpmVgz5Z94ngn2",
  "key19": "6RRP4m6jywPFDbo1DRGFx4MmejHc6s2zf7S6YJw6NibdbMRc1smraYoUwvuGEVhL3B7VgGYHMkMWpynLZF7YyDK",
  "key20": "4YCwPZpjJaD1x3UMbGMtHgvCXVMUNhU2g2amLo1yKBxD19fmb9WsqT4488VotYFDH47djo7PGiFRyL8zS3qg4x3",
  "key21": "4wF6mH3XwtcfUEDGJwu483eYSRhz6xEpDq8crSPrHXZXbfUXRQSPGrmpH6SESEpacVYnap9PhC7ZbhrVYsVyX4xr",
  "key22": "4FKqwi12WCSQsuVyS9AdyNqCpP5CTp4Tw4sUSZepsWLQtw3qDrFJgnwXt6vMend9Hrx2c2zLUMknf5jFrNFniYSW",
  "key23": "KzrLVqmwEb9RTUHT8vSgbn9QY9zgi8FY7T4wQ738rkAuSdSmaXp1n5vJjYLzJLeFkCxoieAFep1kqWGZLbDBPhG",
  "key24": "4qBhPVu3vfXx2d3SxwD4Zfyn9PZsfxRDDmz1KBwi198ppqSun94Xw9JE9m47cBFPFEEa9DyWZaHDC3C128hPgAuj",
  "key25": "66w92c4c7XjqhqK5qFdZJBHWj76GBfiSZrVmcbGGrZHbvmZDyJNZEaLPwQ9DpnHZD1Qxi8g8oNfREyExPB1fFx3o",
  "key26": "YuKRhkhiDtTNW3N4F4BPeG5ax6NZhtxnEG3BN5HRjuuQHRUfnJV1qGEJm4M6nUrySrwTQJBPzxfpbzFWuBXvgB9",
  "key27": "4jnDK7TZnoJQmB6wNP2rfthKQKwWpyYEtpZmv3kjUGKVccNnyoz3Zbs3hXUvrFA3bjZRPBs6iAH39mYuirt1YwDw",
  "key28": "5LP3NHxJmgfCJ7oXRqJgjsboFWrRGc7wwktJksCGmg5Pkd5d8QnKtbBQ7bJJzCn3Q9xUpHmLkivNudrfM4pq8MiD",
  "key29": "1HUAmfufD8xSi8D5dzqgxrvvKtvttewy9ocTLSTkdCVH1ULtCKjgDvfDzBdaszPSym8xreFogT1v8v5yjgmmPtr",
  "key30": "64wvSNT9syw7nVKpUZehEoBeezigUKmDCfJGmGNgeVZesSLCzxF8B9NjrJJuN5hM7R4p6hEbXzXiJrnqdQmTcb1b",
  "key31": "3ZL5YKKkfgu1BbC7Wt2w86Fp1v9AF6pBaEtdEe25hvD5UhkzvLKWBba2XtVUT8966rCr7oiHUBbAhwZZuYgWvdBK",
  "key32": "23GcpqR3jLCjr9bP8Pbo9MbfmW5A1LNZQV43U8wB9Z5BEsCbrkvGKvdwkhXRUqGHLZk5seA2EwQ5AxtYHAxoSChV",
  "key33": "2T9eSrtuMCKmXWg7zu7hqmVYNuFRooSC2xWAXhEAQXFzrLyCdfKbfBkwiP943SousH4X6XReH5yLfYgDJ32kdJYY",
  "key34": "2J9Q9nMx6UmREXvYXDifeEdh2TbHyYQtKSbjXmxYM8Quo8Qq5NcdhHicxXQvgCFEeJQKkNYb5hfUAbfFszx7gaMQ",
  "key35": "5uH2XUVNTNTHLBsMzYx5mgvJBgp4cyF8BEbZShw3ZqDivMZHoEtFzQxY8gN9tJWABgzoCvnysWkp1gzDERbrvSXJ",
  "key36": "3aHCEEscidNdk7GQBv2Djanb6XPoEZiXPjNmB7T51LcQqYRityAdk1ADGRxpmdpfb4TSYb4yQt6Ap77Yfio7GfjK",
  "key37": "4xRWDpL5BAxCsTY4dwfhwq2uqEPAy3LzAvcDzRf2GutXzYeSzvFFXLQ8tFELSkbimawLD3VRM7bAy8b9ftPKzM7R",
  "key38": "4qmswZVGCpxdMMpZwGw3j3Eq4Jr5j2Cf9zz5onM6wy3GTm5JEnBmZPzwLF7Ts1vXKWqvpWAQj1v4NzrNe1AU4TJt",
  "key39": "RYPXfLJTVaV1aV7ShVJpGQyqBwGkbxQRu7Ji8VDtKkoQkiUu9m7Baev6C8EAs1o53sLJHT3E8vFcNdVboc1Gjbd",
  "key40": "4xLZzczrRoNWGsMvkFQDvrFiVzwM185ePBQgdLCjo1P7GANykQ6WSAHt6sUJxsKPMg3kJHEQwCvr8G8iz8gQjbbk",
  "key41": "UvxgrpPZsiiDNF5pMsjyFfrxLLyDEyaFwZFamhdM35UuZmimoKaeSVwpsB2W1Wy5B61EaRr6Es2EsePyVVn2Jm3",
  "key42": "tSGJC1F4XQVeqrW8gSKp6ziFnBwWcjqBQK5gbJbcVkrmwBTbozfokRhbCp8FDFzURgTAmNfs82fSYQKuUPaKKGU",
  "key43": "5zhtcqPY4KKqEwMzpBzhrKZP4q2APREEy3arZroCh13Kh8XPzVw2HKKBABHBB4E643LUdnz1dKuuADq97NmKXDrF",
  "key44": "2tM4HmcHKDSTJ7rLFLYA2sk2iUrEuwMCzSw94qzwfgLaMduqMheyQrZQLi4XTfJgJBXreE7t9KR4zGiMxAkftH2o"
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
