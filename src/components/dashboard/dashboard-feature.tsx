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
    "4QmMWsqN3ejAKoYT1uQQNzENgkYQkHzmVrFsRVT1mhGAWtExzqdNF9JCM7BNrkq2e13btENQ7VZbSmmeu9iPNbEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JgSozdvw3J8tYS4hMs6VrNrpGaTRn364sQneZ8XgxaXuftTm8DDwVHbEfU8fmqUFJQFAAaWMEcPRFCx95hJu7Vn",
  "key1": "4B2jvP7AoNaqz5bd3B15sMXdTPGEZf82LCKq3Mg7Y86TKSiFnL7PTWKeLetERXvHvw3Av2DaMMTv6idnHxcR1Ye5",
  "key2": "58BevPCpgGXQsjkWgMmxrfsCTjS4mgTqtmvVbBfHuBNbEbLBx9sfFkXUac3X6A3v1UEyZmC9dmDdwWBQtDYhHb2h",
  "key3": "2xtmg2iWZpSaGwvmbQDQKGHnirYEkF9AztAvWiNLJw15gtbd7r5au454af35ktvRvcxjaTKfUSiijcw3YGzcrg3h",
  "key4": "KUkDB9sTXQFft9noM8PquogSWpKAq53Bq3q55XDaNmvQMWGBppsLfqNkcsQyT7HCm7D2bMfTuuAYjXCPQQM1Kxs",
  "key5": "2R813PNEKAB96GzHYaB5GgccpAL6opqbX2ZRwKaqvDmZzsww9bMcmZrzL8Y66Up9kfdHobS52G7couAQCH8eRauC",
  "key6": "Z5BVpMLUCus8hBXdNcYboLLtYcxiZS6Mos1X6j1Nf3jTnHtsGCKixeXSewNRUfm2XxnuVpwhj2yuGxPFjNoaEia",
  "key7": "4Gc4FSk7MfwmXjN5su7MVcWeafK8XDUJ7n6P4pUCWDcxu62PM8TYecnMhBG4QdNqYRCVhWCjDpHZq6AFPgn9C6QY",
  "key8": "5ucHhabp9v25wbf8MSFfuV5TSDrcDB5pB1YzhSqQCJNVAJYtUjtjb2TMtdGZsiigfdgEXcRVUctJCyHDjnKV4LS4",
  "key9": "Y5aTPyVXsV17vtYG4JTxwSNJvwUfHVPyCfXa2iYATfUmuAy1zSnUYcryvXDFdJKyKB2ZUFi4HnrDqsmixZfQELG",
  "key10": "3sBD5uv81HqWDh3tNT7hJwCtJAdUN31iQqpqp78tEHrhdpw24E1THsG2u5ZH2wUidvWMvK3e6moDodQKrAGfiMtz",
  "key11": "3R8v2YfcUAANPNaX2ViGUDydgF1VEYzUgnWU9weiVFmYjN1rYohMU98yJo9Vay78dzpxnxMyS4RNGcSjY4eZ7bLb",
  "key12": "22hbnFiVhuxxnzbgw8j986EUDpqxmm3YKehbSwAMekXEj9YmwFDDH9c6RbmwFcP6eSP1NV7faKpXmWtNyjDpEHFZ",
  "key13": "5R946Sau7hwHzerq3x9BbMxWcsvdK9Y1PEzase3WV6yzjYb29o8VVsyB2D7Ao4C9ptsiyZExFQr7KLarzfHaFsaa",
  "key14": "4MpZA9wwwiJP5gCm7iDhbduWDuJyKLTGCx47q5owezAQoXjQGJoJAGbHxpS4e1QiotUUw1ZX6p3nAESihgHKYQgF",
  "key15": "3M1vPjFDSutHh142FFwQJ3miSTbEhBpqCajNahCEu5ecjNpWyvXtayjtRSsFgH7FusUr79obsxZHFG4xS8ijFaJ7",
  "key16": "EwzAAZLTekTJrQMVR2VHxgB7tqhbeSbbfZY87uam4UdnjzjzCDYUfcUJWGBAQurZdqUp8gvqoCs5nX52ADeT7UF",
  "key17": "2ztBNwjC5wBFg5wUfY5ZUfQZUZxroR4iGspFDkXpnpB5ZSe5ZxFaionKqopzbA3vvD3tvk4Y45Yeiz9fjHTPqeTJ",
  "key18": "4jfXovKFK5eKQYY7B38Qh99D5ueS5UhgAH9BcXfVndwVfANLa7JkTuchNf6PAyNwRGfJWTMKHEbfv1rdgjYP3e8H",
  "key19": "3Utw8DJihcJpVjCYzjno68DY8vxAX6Xv6inhwzArRCQDds25GrCZA8vYm2PwPsG9aLUxkKdquPDejK6umJs7t89P",
  "key20": "3FR79aAJnJnQFYGj4jbJL3rMAeFkVEVztATw76Se3fzxpz6aY8rGR1Cc8vzJuQNbPEqiYVR8yoErhQaAj1NGpS5G",
  "key21": "4VCYoKoqQF6gJL2zjqnRuKmRM1TXUAEWnhFqod6SDmiBn4sx8aRrjcNf4FYhF54Keqbha1wKciYPmoekSArZS4Do",
  "key22": "qdi1a6KtjQReQiLqiTWMGMYf7jrhCKd6fSXnVxYufEj3QScLNEF9XBpsBVWBdbB2j6UXH16vvSDCxQvpZxGXAgP",
  "key23": "42cCdH1mnYEAfvEfGnbhkdCp2xHgPrLY67u8eoNBWEkeTyiGajQiwMSBiVCnjUqHePGwddgexx2zeLvBNfhc8TpW",
  "key24": "2tabS92rjiepFqXcRfeWtpuEYfWXf4umNmJR3cUWD6beQWojfdheMkjZjtXVFqSP4Ukh6VXSRJ8Lp6JyKkBwZpWF",
  "key25": "3BQEzHAxjzcBvA6WFLsMLgFx7Qnb4TiUDEpgHcjoU5ZRf1GewP3sgrpMjemdnFubmiezppuu7qoHPRruTpUU4y7X",
  "key26": "4jG4hzrTDeYni3G1NoXGt5SvxBmcFdjC89zumWVYh2y2mQ4mJr1coMAJAd94bfAGCaxXE9NErtJN99xMBtEmAsXZ",
  "key27": "42GCkUdVGRBsaxUiC55YNCWQjJbLtuAzvPwQreSaR5gyHbYZT3oY1S9pEAphBBREB5caAet8aGBznj6N2QuFP3kr",
  "key28": "2tM548Y8MZanA6D2NB4pQp7W1orrVbaV26ig9dhGu7sWWkHCbUBksyKpT2MoUKWuixW8wscVY2fVYLQCUjqyAgdJ",
  "key29": "55YaGwDgfEH4cLWFhaHyuYeAquEkS7uAKYVM7L9uXUv9Q9aJefjFF3oEk3DXuEMcwQFu1kM58Uxqv8mWrX6MfULm",
  "key30": "3hrvhYh9dGSmGh45ofrYT6YZ7kKyaaHvJeL6yriiLUNNFivJ8wvD8qb1a1nBEnPkk9GKWEY2k5pcNX5xdjjn4gYS",
  "key31": "5LLsmWhagNSvH1i1jhFFFUm8FSokt62t2P23VBXcGqDq3UZa1tjdjS3HVEWzugJgqLdoigpFF2EHxJQ82T6vrNoP",
  "key32": "3G4tnKRC8RJNYp7fnGn8ahSMqETPB4ANcD4NhC2kYskMdxuv9XaUzL5QumVSfP2Tsayuf77n1tSEHMgna64W14t4",
  "key33": "ZHFyY9XNcV6ocNiyNp7aMEjvS51bxhCAbQFGjNEh2tZnpMyiAVih9BhNa87rPd2PMeHvmfPV2jV2XxLf8GR9atR",
  "key34": "CVMTDuK7GsWTnkNHZaXbQdeUAPQDFN5cY6DqKFBSA5QoSi9hpCiFk4s8bboW3NNEoXr5ibdYiCAkFdcHz62EVNG",
  "key35": "4XErcpGN3NYkPoyvyim2xkQKCermpkBuDwLuHzgHUjLcHV46ukSbrCwqnXNYPbxZW1hLGhPy4NTfRdhvpjzTPi9D",
  "key36": "2hJMqomVfVP8K8EVacmVE8ZVc9EU2fxji71GSk9S4LhLnprttRXwevAg64BxXFp9CdiNEbvwtSUSTWpKfHYHCC4B",
  "key37": "54YrLhnwoW8tjF1LiQPnQdzEqotyMgyGptRg666w1oxNFzV2Js3RYEnW7gGPdTPEfwHBETg7XzCMSBNdw2ZovQYD",
  "key38": "44h67duAUJR3AvZFpmqbpxMqeKxxzyeiSWH1DyeCKWpCaW2DZUh8FbWVxWbPDuTbmzHnDMxbd5R1BKCZD5bD58sZ",
  "key39": "ciaUmBn7vvrhrmZqnis8wTtFHQwtXwgRheg4xMuBxS3sWiFwZLNsAYqeVCVV5ztFDV6iJTUM6Zjroy2Lf6RnXxL",
  "key40": "4Ns8Ah22GfRnaMAE9MasQBmDaHDZ62qEZD6JbfkbVzJyjqTcowNj5PKaeg3PY9PoRqLsvK2uy5AJbrGKqSvJEcMd",
  "key41": "3uhWrN54HidRoAd9AcrsWEbG1orVDHC2BPgqoyF35RWKGbx37aKVsA84pt9vZmJvobc2CdikzdssEjdpjN8duerx",
  "key42": "2wsV3xewhQc7MQc64jcHkkhxJaS2sg16qDSj7zRN4wPeG8ckamee7YHLo5iSuQkqNrkYBDp1KJWv2KhAPmnxTtMB"
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
