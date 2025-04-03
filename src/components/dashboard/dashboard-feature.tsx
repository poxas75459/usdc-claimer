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
    "ADUCNSgaogyGLtEXTZvVdf2weo6HW3rpfzcNunoY7udE4mzMHEQdGoiuwibX2SSxNunhA6MBgvET5FZKaKGq9pm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dd6kqzveLZmCiJwSMBLwq4w6YEc4dQZVZh6sz9khUCLvj61VvNwCwxrYzNQozDtiph1PmcLcxfCppr6deJP86S8",
  "key1": "4He5ieZtmKhBhedrBuFzYEfd9WbXhCLSHWiQrDcjcMbZnXitEC2fX8gzWmRPW3tmtHrbUTtUM8PYC7B1TaxB4wYy",
  "key2": "55PPdP39EXELqvmVgSZy8VCbUQX1tWc1LxWqpLmpXcMBYyxMqsFAFmvuGYaR5tgU7RTEmLo15MbqXiYXAweiR4to",
  "key3": "21VNE2tNWSp7Z1be41e2h4WPxq8DgC5w6npHJSefmJ7F64n9qwUMkjYdCg7CYpDiaEvqqujaX8G4SqNhuZuUmUf5",
  "key4": "gcncuGTPaQhARMao6wKfzC3hVA3NQeBhU14TzMdifqtdziSaktCuJycPWYdrh8ffC5KbKut9gW8v2AzBNBpoc2e",
  "key5": "3et4QM6AnFWqeftRnrSau2PcecTf6c7a1xRbkxnjiXPoCqsekJCwH2twr5juXrwfCSfJ8XpRUAfZ73k8scg8oRqM",
  "key6": "2WGMvHoJu6mUnSnEbnFibdTZx3BDN2234g4KQpeDiLhf91jyjUSSeET1JDKkgYnei2HbmGwX34xViq7Xp6nxLyZq",
  "key7": "2UvBR9uTkmEbK1qpRGedN9LtfD1He8zwhPpc22mkhXdGxXyBHPwK7w45S9duC7nqPguH99YQSbgptmv3tynKcoRL",
  "key8": "3VwJ2om49zmAsa3ArGX8icNuh1fbHrPcD97HdGbMLSn56mBfF3m5Yx5QxTH58kfmthNspksi4JRruuqd2KiPgiQ1",
  "key9": "45gJAcvUC8aMMBnyeLggcGtN7ouWQvvrrHm6W2PN8GSa1JnkCd46aXkCq4XEM63PU39H3qqBhpYhJWqCwQ2sJjT7",
  "key10": "3q9obiWDAK46FfkeHNjVKvcnVktovyfndCMQeGcS6qYCKiwkCgigutB8CvbfFqJWAh6JYapDBPYLzCXQ8fBxfXmc",
  "key11": "2JfizL8hj9J3kPCpLEs9j49uxvmZTkXLyWkgNV9SxjEazc8BTR5WH3XZrrPZK84R84fN5MzTkA5A5okP18KYR8Ut",
  "key12": "2B1rD5VxK5wkfN5ScJPJC3PxiYkCTVUakyk7zUcizd8PF6Rb8fC1XTJU1LnLHMurb7usPJrDbi3Dhz71QkHHrfsb",
  "key13": "2AqPprD2C128Hdr89jp5ZpUe5duEQ2V45mFHCsCqZmNymWJJgYVjZV9Cof1B1P6ASc2EbKTE7RUWHMudKnTpBESE",
  "key14": "581h67TwXR8MeXoGJLfJVWknKkPiM22tn9QMjhRH5HGAihMMceXZ2wY27sNWWohtyLbd2ApZ8QrZKLeuEZt9RAfE",
  "key15": "3AEwScKB1urun2V3vi7uq8at7neEZoGpcPDcZHeTnhC4but7pDpRa5mZQtLQJAEoSQv5zoNFzo1LB4u5xLuZPddC",
  "key16": "63wVPPHZSyvwZhV9fVaYzx6hYYWfgnxHo6i34F6eBArDqB8s35ZkUhzscdokYXYB5EGBN89uxHXkV4Y4br7w8kss",
  "key17": "6heaFK9cXXvCqsr7oqckJoPP9oQei2PDctuBZg3Ct8R4eDMQiw75PyQ6ekkxGjELjceMKghD7xTpnjh8jKxStw7",
  "key18": "5zNDm1sPsTj9mneD5HnQemNjALszbt1jezSuK3tpnkf5ebruaYBzRjWCKv2mFWuzD7sqi7aHzaLMFT9fupozCCG6",
  "key19": "iCSZfXTjJEAJ2NmftwDs8ecGL72YAL4NprXJAg9iue1HdbCM64b7ZNkzYXARAkGtNCPgfrWjuf2bRV67fj6CrtM",
  "key20": "4kv3NzxTedbZYui465EAyv8pwbSHZgFdEhHKFiPHsHMPAVwwfxM9bhXpcqK5TbBTkQYi4pyKGchDYBTkB2kBhAAk",
  "key21": "5M72T3YJv2U88QMz5SwbNfbFqnkgNUhN8jnCgvZ5aiao6QYRUzESf8wTH5TercGSibWAC9VE2kophq4b7NGybxXY",
  "key22": "5Ztzrr8D7TDXbgsbKKcfB5VsqEKepUp9j2X6WsUsecrAWR3AJpnPJYeBGgHviQg8Xa8fy5BqFEGKT7WzfejAjCiz",
  "key23": "2VHy6ieynkrSWmF28M1ML3BuBL3GdaHNjd4K2xDpQNr1PJnS85LxNZc6VyVcGBkGwcphoF3MEFa9pvub3NG6o5W3",
  "key24": "4zmvw9S5WJ8FfJqNXKhZVnhS5DhkBw5QzbmybdLHEUAQoPnQJJQYavXBaKgDSLemTPah8jVLJ9Uc6sRwQqXARb1p",
  "key25": "27KyL7QFjcyJmz3tE99xGjP6v5SeT6CAj4wnB84bz61tuqk8s6LQycnLRD4GLJ2VfLNMSkTxPLV9q2fufk93uyRr",
  "key26": "2VzMiYg5VGSamV8xiqKjPAQnSrpbni3ADtuoGBdRYxpkR55W6GuxTtciomYe4EY6N3XaEiTf2b6Lk8mnvS2c7PZU",
  "key27": "23qzUFadhHEcVWxwFKMEDrrAJLr6sPCr6kZF4ThLXWisLgiHLkquJG1XYcZ4NRghCGVXHTk2ibAPnWe6YRV3eg7Q",
  "key28": "4pzde1j3TH8X9Tx66LtGwyZdnKYUBVNTg4cyuCX5R6r7ssLdECQUrb2YZXRWAicb3KrYF8ffEr6fvUcNmMryyuqS",
  "key29": "4XAsCmhw2DmnjMG1ytzzMczkCBrZWky4yuUDewLzSR2p887KgqQUAtohr13S4BtdUeYaQZWPvCx4cBtRMWPamYJF",
  "key30": "5B6AWEN2GzxyypkZmnWUA7ioTvZ3VPA64JGCJKXMZtkuLtQ82Q3ewkMp8KFYkkf5oSVLJ8QnJS4Xi6KypCsHDKHS",
  "key31": "3YoHxxkcchXr2Dqym1RXL6pwL9Wy2L5Q65MKaPQxafZi854DxhnefHAJqcqUSdQF7b4UXGP8ht2iirUwCxUqLKgG",
  "key32": "zW6PC32dXbjmA5HmXdnGpPwnbb73PS3aL36gNJRSUFXRTGs4xn9Bj4AK3DCdRQTGdokhWCCunseddSZewH8V1M2",
  "key33": "3VHWJN86spLCHdKxUbCgTyBJMcxraP6NdmvZh79uaw683QtfWeLXCUn6wSQwArgnpVVVJRLxYPQtoV7wveddRNJM",
  "key34": "3gLSJMAnaGxTGe8x4v8Kr1LNFYx3W5gynkRU1XgR4Mj2vW4MiU4QdVKGsUdwug6ygyVx3rrUvTZKbs4tc17o3sCp",
  "key35": "hT4w4yDhNT6Abg3WwwELg3a7rBjosYVp26XYEzD2ADWv87JXEL61Cvz815tttcSZmubsNzoDTwhbjN6pj6rp1Jn",
  "key36": "293CugumrkiQTV6DQ7iChpGy7BQ7mtc8jFMQEEJGYy2nKHt3fqG9wpHusp7Syo6nxhKQZAFqGPDUKtCjiKTjMKrt",
  "key37": "4sTguwjcKy5m9RwC4eDEVHJhHMKJYwxqcgkjKjyuzgjqo2MHZPoUH13Bq9WDGP3wdLqbCEMPcQB1DZmmACAkT2Ld",
  "key38": "mXPKqAmo99A9Y263H1uSn82ydt1HELT9sfXLPMkChyL9W4AUWvxaAmJPxnL2gc3SG3UYMFv6aAS8uJtUvDd9N8m",
  "key39": "3CMBikrkrJMqmLwS31781sBBHBKg77g8mwMsCYz2J5DoVroL5RaS639aTHMSnZJXpDgdPJrCxvwiDL3fvGbCEqnW",
  "key40": "55bY5bM4GngH7d5EwqeasSrsGu6U7NfJXr6DiySjybcRfMg9coXvLUtBByRD7yzb6BoLDgTHx9sNk7Ur47nw7Lzy",
  "key41": "4Di2ohnZ5Bnu6RLnGZ5U9Z2yPNiomr3SMPAkVq7mNzcs6zXz2F3Ro6e47qHoBxFRMcTVgqFTAKzBAXTweGuQK3Yz",
  "key42": "5t3FajaQkKHmLdB3itDD3pAEVX4DBqxqV68pCqycLk7Kvt2Q71h92sH4miFHmLmosnYXACYe9xxvXzxtpYv8sK5o",
  "key43": "x4LMuqFXM6KRHT93d6wuCwX839mSuUQdcCMVAnBdLJRnt6WhwgXhvEDzQbKpSSNhTuee1cfi3Pq484iysGRokAp"
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
