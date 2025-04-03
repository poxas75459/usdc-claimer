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
    "4W8m2TRYSgFZ37v847SeNMMWTifMPm3a1jhpDVMEeCTrQf8X16zosgBAeALQEs1KC6e4kPqqm6oUCJgVDKPMX81W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "291zpMzkJ9a823UaiJiMBP1YWhar11e6GQUdZ5RVTXPMdAE4Sw5Qv5cjU8zGD5DUfhHmtc3TTXwHY5FmkckLv6GY",
  "key1": "3FycvYzZwKiERTrtfrJJzzqaDzpKUAzvrQimC4EstujVSkoTSManbMVEc4xLwxMxAfqsLUzBaaVGdMFWW7ycy219",
  "key2": "2Riy4SbZcec7e9VSyHo2bYRLNFBUUMpiW9xig98GvxC3vXu6TgviZBsezepXNQZPotk9H6vDy4piTd9ES83Niev8",
  "key3": "4x88oiJKaXT2221NdawtHfyxwGeN88CmbeCu1aRmogVPrRANeQvysfrU8pY93MtAxxWW1Yzvydzcmdn2xc9iTFoU",
  "key4": "3kHPiJ7he6WGxrmMEkZFFRh2z96k5DwkZGi44wo358z3NhqBiSJaaHKMErNRRtyhT5TGVAMXPU8kgRXbYsR3wR7N",
  "key5": "5PyXwc5EYEGcP4gxyvmnN9LyHL6DE9ykuAEwNyvWN31ZngfWeXVArPCCGrdTvtRNAFxKeknBhWgDBQMigPWQQJHj",
  "key6": "669NotoXtKBYjnDhgDbJThYqAVsvEwBUXUkUrJ8xohAWsWCsNqXUbBCYJanE32qrGn42aCJxTUtYv9MVH1r4kLTs",
  "key7": "i9PNmanBQe5fjd2TjJrRSb4VP9mviPS3tsmwtvpunRn9uASjRgJNsnQw9WdkDmqEPEEzo3wE1gM3uZ77ZEV8PEy",
  "key8": "2RvTE9r8c4AnKX3RhfrxicoEcv9FZ23CgYagJTdqoaU5kQREEG4t9WjSf3rw4WiD3kMEK8vbusmF6isydevTpb6",
  "key9": "NebnnVLkgpQC99hXxfkaJjqL8Mvf8bmv3xJrr5yXNE9VhintjSXXPCFrRLyBbJpwwkP4cbftfL1YuQCVFphPpaF",
  "key10": "2vSWJz6BBRF67Fcao3Kqp3YhCLU9Zv6BAkgGcNSoYzy6waiixLc6H8L43AtJgLSWacFvUa4yB5XGV132EHZQe2hc",
  "key11": "YFZ5MAGioWgHKuyvBSZB3PRJirr7CSkomW13zyMXJKUmd7e9HuyFseNKBaMzD2rMZE9qE1w4pHqHQCTa9XvmYfi",
  "key12": "5EXJzmZu5jZyUfG7x7JN5LYb2nGfXqzNN6xqA6wvL8uxjqtA2ghrsavvsTE3nVewDnZ482LhhTsN6d7SBNoBwjN9",
  "key13": "Y38tZ8hY2kmqBWXGN9EHfSJ2cGMXjXrAK72v5wdshTERN5qFXD5kK1pW3sTkEWubZJJzfj4nRUft7WYLBkWHikG",
  "key14": "5vaRdfF352yZufecyY2skvGCP7ke2kTMVU4yYoitsLNFnjqvAxzvZS31DVjvpo6nDjdbx8ZNeL9kdNXiroMABttr",
  "key15": "36hFiAmvBZJnVtnUEjdgCoRhjnC98UefFspuvWZM1gN5bbKovfnW9wgTN9kHL3yy7ny6Bk3usMBhdyoNu16HUkf8",
  "key16": "2GsEAGcN8AGo71RNzyCSUZUJKFw3ygPKc1GdQ9eX7sRZ3yRH3wGModBCUTvLrC3yKVG2EDNzV6G86Uk1ufxfGayL",
  "key17": "3nNLjarEytr6TpcFXB8gakhYAtBRwTWmSctKdkRK8BDDmNQbEPBzQ8Smkudzsk9oCELQ7baqnQbeXR1TCKBDxp4z",
  "key18": "2FdCLHra6WisdwRK6HPHfUmwABnKDXPdAhfa3BB8AoCcpNKwUjYpEfcjvKQxvKZSaoHqhtVC21okopz8imroYeZq",
  "key19": "2xSiWoYKGBhv1SH2nYVWK84MMc1oyu2tX18hks2fXZFjtE73kRPns1Q6dgns1jtAyShhPW2Bk6ZXx28PYcdAuTi7",
  "key20": "5te9E8dy5viDRBbeiLWDJsZziL9aBduoBG56zws2vDnKbhARZQXSRj7hv4eKpwQTN4QhvCFGGicVMxRBPc41f8dG",
  "key21": "4scp5v5txTvdnhcPb7HMrzw1WjhbQnJ78uHma16mnCsq4cPcdVML7WqkdFNvqqA5F5VfAyam7zNvaVoJ9gXfFvEK",
  "key22": "2z9P4wLgRJNKiFhexShrNsQ7TNw7uBELNsDd4z5pSjbHQ7NCsu7SbieAH9pS88JeL7Kwe9KQab2znUJvH8P9wmis",
  "key23": "3xWuRXsA3KXew5s4kaxtVjPbFxZrFSzyysNRHwfifeJ3NVcS3zVm28qtMY6ba4fKNKPsYj2vQxPuzuSPd1LMK53A",
  "key24": "2Sd67QVroH4VRH9jbQ1SGp4cb6Jyj2nBRT8BZSPfUki8DqUy13FsXh36QcwnUSyxNb7CJG6bL9idGWgDeJQAGfPv",
  "key25": "5V2u88uFUaiVTeUs6Acop2b4gJuQ37HVWbecButqvvgwBBKwmF5VFczpJfsFDKU3YSQ5UyRejNA1K5hmC3WWN3j3",
  "key26": "dp6MTwqe6tUgjh18gJUdAkSXSD2sPyEP3ysNgyPq5iiZv9QDXRGCkjNtEd4r2eGrciZFBZu1KX8Vt4XYAzFyHj6",
  "key27": "2Rb8ynugER5i51QB9J2sVknsWUnvZATYubggeQ7fmYkqVMhMJbk5xvGfgU1oLjzV1TzXftxAS96m7J8AWqBiv14y",
  "key28": "nFDtNdMXgVzhxH2FgwcckosaVZG3T4bQaTGgM3RS2VzQGZVLCJdyf3vfRXjZqVYhMWLeeVRLCCCPELE48Qq7kUM",
  "key29": "4Caa9uGvHmZ5d3goFMUXQ8Q9JjimmZHjbkScgf4s8xv9F7Q3mKJyjKLPS9kVsCa4QNxSjAB7k9mbTjJH9opHXpTv",
  "key30": "4Btnf8UKdLmRR3MuFKMn7ThSseZ5fVfhRXHToFTzt353YfzaBDmtsygXnK7FeP6bLjCcyizkfJ5h73a6M3KewyVZ",
  "key31": "2wykxWYpzBAsjBUrkmzEBtKdgKvdVzL5GuNPvo9yBQfdpngrhQq42GsWKWSVJTeRGSiZBjuF2A6xNTsQhfF2gnDw",
  "key32": "4uUXtGhxSnfaFwJ6phW1HS2LFHoWhS8T3D8MpPwk22PSsjJCpypLQ3Faf4P6Lo35aeR1iGHQc5BQbJ9NnScJF9aZ",
  "key33": "52YbqFQz2QLrULx5J9KJT1W4R9eEnCXWZHzVyUYrSkdWQUDJm35cig8YWQU8iithNvE8NY8bByCoMcR6W1z1zG27",
  "key34": "3jbpvt4EgB1BKy1hQVHjUj8bqWH8XSLfzVhY6vpa2hzPgspNdnTmRJvxQCEnCwJcaKGYqMbBZSrDAK3g75zLeVjy",
  "key35": "3dF7UUNmPxLqi51Me7nKg2GxZSM3uTJJVGpfMHM8T3jv6CFkVKziKscLYXDrCDKvrUFQ38tTS2WCHEgtn5eVrsDZ",
  "key36": "24MPt32vynKUiB98xFhaJWbCPWp8JLVfkz9MFHGUsR9QqZiFui3m4DC1tzw2pzuaofswBoytaM9QisYNXM4xDini"
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
