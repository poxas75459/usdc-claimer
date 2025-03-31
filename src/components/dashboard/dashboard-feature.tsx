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
    "3FN3GQ2z74UL1KKhr1SFMxgqrFEKSiTm6MS5LEL3ydu2by56fq7jwdTEc5hbDHXVz7XkJ6zNWoLGzEsW5GbdhUTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gSXAjKAer3wHNcuhMSdyWdhXY7AkQ1v2bGZkwVkK98YNcpDL759T5PYnNHHFvpGcy3nTY8mVVPe8jRyG3Nep1Zb",
  "key1": "42fZdSzQALawi6JkW3kZitaEtR9TiMHKD7jxCmME8cEvPTEU4wXySZ5fGZ5U4HNCk66u4sw9MoffcXrg3Tp6Qpp9",
  "key2": "4KyEfRKSiwe84Tg6ohntxxYEknLTe6xBXDcJeTMPqnF8AuFGrK1TmKPz5DcbCCXAedF1Payv5izMyhGB8cR87n1A",
  "key3": "4xJ894jJcrr7uPFrfsipqNTwD3GbwTfXkrbAH7P7JZwoqJdYTXokrW4ks54uhcLaq7Xbmh7dBDyX54SroeDjZxP5",
  "key4": "21Zi8FcwKq9FzNFsGURP5hhdjZ1JurpU746CTvnGUGppy2QvDCyKFsYFh35MGGwgMde7KnM3rxL1icBYouE6RebT",
  "key5": "34kxBGJiztMmGP4Jn4awZq8VuXRKr6L8BEW9nghtH7TqPRYSDzWkHPtWtchYMnfXRN8bmVXD3yXXCYo5RV57AGwv",
  "key6": "4oTkueM8siJjPZa4B4iPW84cuSxfuRvFr4XkJRcduhyRa4roe1fDHeqtfZMsZg9dU6S4dpxgXK75Zo8k3kWsbkuR",
  "key7": "5m5ymrYFvC21TFZsAHq2j6zEcQefCpHSzrjDMtmc8JuPYqNzbZPqNkD4cVTqoaLNpSakXRa4X9i3dpiCs8rHAN4z",
  "key8": "5Ga5FSMDRZHLF6N9vs7joMwoYWccGgEdbgp337XFZoft1tPJdppLCBVt4PTupHbgCxWMHS2GBQmdc4dCYF4jCGe4",
  "key9": "2YdfqKW9xe33fWQ4SCxtVwjFYSP3RYLzLXEtPWQpLCqoELHJHpQy1iUkcjuxFbyXKXqo4LQfYG1MLxygCSBJsmRo",
  "key10": "5vtFUhRBARpFp2SXZx8b9EoGjeqJmKQgFxzgcLKXatats1qwyxERoE6uzzTFz3rs52wzsnQAFxZrUvctYjbB5S8V",
  "key11": "53matEUe6ddwvSXFCqTgAroqwXKw9cLSsfmVip1yWTsCVZegGwUSTmjqYwRN7nWhmV1RHnf8L8qWcM3bsvEe9MMQ",
  "key12": "3QJsGrNF7U6n4L24wtGGEL5eBGQNQ93e5imm1EoNKhBw3HdrWD1FyYThZjq8JLXwd65bm7Y6wdZtA4mAAmv8xUeN",
  "key13": "3FJnjAdeVkNRhYoNpB6ZFBxZe2orf2jQFJ5NRLWsSBsG1QP2psW5Uq5Dvx4risC5FbyXVUsR5Cii7PxTrbJueJZ1",
  "key14": "2rtYf5Y7QtGB8PrDwbc3bdmQTL8nDca2WUkXJ7pgUFs2SytWzyrnyGVY6JYJGW1crwHo4jUFcG6FUpR8LewmkMDW",
  "key15": "29ZGjBPMutgZD2LrR8C2N8qc6YwVbxRStGchHCTdHcALF7jFjBujB9s7PCfJ4bk3NKnpzicmuGh1jX7BFsh3WtYU",
  "key16": "5bjgvBgH4y8bkHTupGNgZP67fFiXMX57V2jzoBazmtTVsc6DDGU2NMZNYjBAfgf1fJmwgu55oBiaeaezdWPwTWRn",
  "key17": "2ZHNMBwxM62sfkr4trpVQ5X4Mp6FPq9HPXEj1r1JddxbWPCusgLirQGt6L3MEX9MRTuqbi4Tt8GXPXyPWtx4EPZq",
  "key18": "5T9XHkd9tTMyegDPaFmwrUxQ8Uk3sDPvo9Gowtj4jnyHMTjGgMKrsPM8bghHNzTJUZGH58FJWtqPpnmyKEFAn1Mu",
  "key19": "ZDhaqwoKDHagBKo646No1CV12iCrKphFTr42qHnvyDdmw2rppBxsSo4AjuZD6SNjgoAnP8c9AM9PyfNuZhmv9T7",
  "key20": "dkdC4cYPhr41MQ9814hTDdgCxuiDF8KZJPyfbM4hMi26k2qjxH1i2yHBMRXqDqU7a92ibcEYBwWSbq5QpM3tgp3",
  "key21": "cGRvMCKELe8ijEMWFc2RMHwHPAA7ZSzqp7bWt1Xo9D3thrjkqwXDEa9bswp8yx1YMm8DFZFqzyiSuCQsVa6RpGS",
  "key22": "49yxLMLknrZqBeYkmmL6Qk954vqEaWSPiX8KCTUDfVY9Z2278vRZpedGgSMJv2vdr2XX1AvFW1soVs3XuYDAnqCx",
  "key23": "2qVLb4cgRkLhzbvLDcwET4LrHxRDEJw31kdeSXrK88HknYpRYBxyBMhQVUbxKD8uP4FazHC7g4ctyuUKUWjWvAM3",
  "key24": "4VHfvuUEV2rXj77DD8bYEyJjetWFnnyCpRj7x28sfhxN9KK7UXsokmCEA4wNo8tyEEmG7r4oeknvvi5SYvqxbjTm",
  "key25": "5BPzfvUcmEDaP2N4jzgw6PiWQ1JE5YEdGeGz8jShj5xcvkNhM8NuTeCddBrEMsHdLsPQhoGW2mQaqs1BLBRtj5eb",
  "key26": "28dbHKhpq1pA7esZkbxqZTb46yMMg84nRDN3aij9qnTSWw5QXsv4XJHJfr3qb1WVC5snGsYBEAkPbsE8CwUrxMLE",
  "key27": "5hZt5hnYFJwKCazipKDyBfmhMaLnj9NDT2GPqMZKK89kjZNUEsy9DeKh7xXuKu5vmMhCbnCqX6a7igJYmKopSmhx",
  "key28": "5PsQQLi2c2VwfbWYSfiZKpHFZGiVhUXpW3dgAAgtrofAM1t4eWHgqTs655EogS8aBg184pQYzqUgk4Qi1kp6Zf5W",
  "key29": "4KM3mWyn2xkrjTGEz8wjHE9HrGXYJkWAYva5oiEDQ9W88HbytjvxCM6VUkbtPpf2pxMbPgaesUawNuhr3Ch5kiKH",
  "key30": "NTE2VYBYxSXtjntpNXHBYsiJZ1mj3q5hDrVbDsn5o5MWZNRRSGCPteAJjM9XjTPZXxomZRNJcAaSUAyBTS54xX6",
  "key31": "5zuKf15MEE8CLoHPbYTuS9dzHPDVCi9z9WPChmodaMfQEfKXW8MPktMzaLMbXTN1PfCdp2JYwESAcEa7zyded26z",
  "key32": "Y1eUUNehyagygNrDmuUNGxmB1BxbL7Z1gtMpvHNn6tCy8C5U7xwnxbUbmMcbFRUC5NtFEfpg4jKWDzgg6ffksi4",
  "key33": "2KeQ73ZXbwfPSpuj7mwXFzss8dfVTPbjNxfxvayFsHn361EwTzMcvgREKx1Wh6e4snr7hCLpHJTJCgwEWsMMcs4U",
  "key34": "4XqoNy1CV5hMit25RaZCmP5YEL5BkG533UiPGuEsqpT1FR5KjiDE672guAczXrUkveB9FbCzAPyoqvn4ipipDhH7",
  "key35": "3wT2SGcCYCmJo1VeYqPmHtKy6U3jqg2FjRvHmBQfjRKmtwEVXTf5pfzKCv7Gjr68C1xTaHfj7n3hoBF33UiKWhc1",
  "key36": "52JNJcEoLpKWsJWmJKkdns4G6J95mFCrvysr9ZWc2FFz8ScVgqKqqpMeM1XcCuGrANturNFTVzRg1dtukdmFGiYg"
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
