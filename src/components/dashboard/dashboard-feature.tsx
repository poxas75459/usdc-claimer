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
    "L6tYaLmQPxJXJ9buUJZT6ZoQpbB4j9yDZMvD36u7XmuQRapy394a3EuTHpjgX86ikA2rQwrShaWXdJsGytDCGxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29iCvL5NjyNGyAHgDJRtTiPWdLRn9yRbTEtjRsV9VYPzipGtHMko4TntpAKF6ycfz3E4kv1fhHUzbxPN3oD4q7mK",
  "key1": "4kZw3poZmxxqPthsLmzsQ36gZ3gBbYqiGYG2MAsFrzHUqdVznjzLuWwtGKytyHPz1fJGp4cVC2KCct9gtGHeB4JD",
  "key2": "5UfZQNyTujKd3aHouyqKTYymer9rSmZhfittqHNS3e1nnN9cWW7tmXQn6X1LUHcsPCLeNkWyjPNuRczb5Gm62ZQo",
  "key3": "5DtoQUr369WykRXe2ivCTsSDSM8NwsRupnc65XK7Daocd1MuYoupYQFMFLZxDmH2dNdZUsnvQbKMdD7hKrexu9bv",
  "key4": "byAUBPireXwW3VRgMMGLSgQZPRhjRSyNSZHo9ZgzE78bBpp4L9M1HeyHfkU9FTiGegd1eZ6QMN5JCczNvq9xWM8",
  "key5": "4mcydjTx3FeVF5CkQM7bQPFc74dHGekEWuYW9uEE1eq22BAEzKAJfbduoQ3Y45rxdrM3CYb9xc3YUxMruEgvpYud",
  "key6": "3ZDwL49xBiT8RfH1P9VeDCLat9NoqcZS5kHjyMobJDVUST2s1hFAKXBwJF3tU6kD9rDF7i91EiJaCUXw3eq7GmFA",
  "key7": "5LbCLQPsgwX5aB9k3ad9448fVpsBVzPH7TCKv9sq2uL2B6b3WapF5Bs4BTjFUQ1rp8m8ngDn77TW39CGaPwUZhfe",
  "key8": "4VUh7t7tsKMqrEkx7A8DPsTHUMDSNXFZ2K7ZPsP5S7pgZtSJCNpm8ykysVgTpjGp67X5mKHa2gTPxAknzdNftY1e",
  "key9": "2fjmg4PvgRSK44BJDbmLwxEszxQ1pmEg9QpLAb7Z5iQsohmtfXkt7tRytkBZxSVZPTMQEUUtJjWcbFFRrz9DGZ11",
  "key10": "59KzcSjKf5EaCbCQqR4DvNf5fEgbsTXdRgsDU72axj1VtmCcbVu5wtV15ivoVPSA5yhrw3eeN2MsvVSxyNneUBpU",
  "key11": "62xGPAcX6L8R5zpKbfHnDm3JpqJFa89SjXDXwWx5bnaUQawBiR6rbAE1YuyfkRQ26KpzqrMydQnPKZXq5ripRTLN",
  "key12": "4xErfdayPaYiBbggHo53c1c8KWCExAuDWMUdw2hNSHWopWH2evTMXCAv3cZLqURS2Hj576SAoiXYpS6qhbqoY2ss",
  "key13": "3AfuN3Cn3DVSSYhHZ8AU5WmDrpArK3tqwTVR85shFRVaZE61oE8CraKSDeM3eMNyQXGKsXJv6HsxHxG6oW27LV5M",
  "key14": "455C6hyd5nzPuPEeCk6UAeSwwKwk3MRKsUtbnGCJ1aqGr97emj3Ad8UWV7aHiXE1VMR44QsDZQU2oCvvx5jqFaJ9",
  "key15": "42PhtH9feTVCHgrN4VHiz5xb2r4WYnW1yf5c2nUUkTDP3zsDrq4GLaBose4TmcVtgtomQNGkRbazir57LwFBgTEL",
  "key16": "48u8DWH31HWs7XWFiGn3XcWz7ANacB34T2rx9BqUkd6pEu8uFnsBmMqhUbHUwgKh7kGn2t8kMkdBfQeEqb61Ptv3",
  "key17": "4J1hdgaCLYGvf4hQkZXftU2pTNkaPJgwwoUDFwfwZPhZVmdRHUkS4aE8QjoJhkwdTA5MgbwLsUjTGrqacUbSVEnk",
  "key18": "494w8DsVvPLhEy8fCk97H2Z8xYbjJBRjqFTzK3eFPaeB9Dsik9qLHv9Nw66iQcgBmok9fhqAdH6ww5a9dsCW9Atk",
  "key19": "5bcG1uMD5XrXB9EzybBb6sEV4ZVirz5vAGgLq86tpNKvtzXGGXQa5Qzpo7SEupyyoXEYKtxzeVgF1NaRMzFLsviu",
  "key20": "5PvvKqACHh3Go6a37fgC1ygCwM45K27oeFSninhpbp33HGkDvBXhBzpyfZHc8GQerjAJ3aAK4FVxPZ5vZiqX44tR",
  "key21": "gUc9Jjb95ioBH4a5GhS3vhenNte5Xyb9RtjBLjdQB2SLsZ18wWtCF4GaTucp7MDbigjn8Vpyrb65RsH75q5Dx4M",
  "key22": "2d1NASCfFU289MT3pmVSBonJnmvfuXCEnwwmNaHSMLHHDp9QVvbo6aP3MJi3x2XGcZ9YPPejLtUyybEPL1XFzxKP",
  "key23": "51EmWhvxXFD3k8G1E9hbvVwVjEHshL5FTGotnbpgAiuXgXosBoByqqzFVEtUCMmyJaEXBKw1WXBmAeReu8ni1mF7",
  "key24": "2fUrWpqkMa67AKtBM6PyhZcvdgTzJquuumy1j3DTePPbKScFCQH91dvkUPv1QENSY7pXsQzLHsEsUGUqE7L58D4i",
  "key25": "2W5tJ3AgQD1gL2Xwdxi7x9vYS7vC1Hj6LYEgdB4YzFb5gKQXHB1PYjqSLRKUTA3kDAoJPYkVemri8vn17ZE7WSge",
  "key26": "oXkSHb1kora3mVvUhkxMnwPaCtXQdE7Zc8rGgLX1yzvsjFcTAGk5eBaFoeR4Y3b56wjFfWQXJFLWpgBUKy6Gc58",
  "key27": "3uKqzxFQNyiYS1m6Hi5j3azn9izMw1Yf6wTWE9bubQBhz4MfzNXtdceggQm5QVY8RjTGqbCo1J98HwLZshnGbvWe",
  "key28": "2ViBGZXErEqs3hBKDRkMMwLGFSdn6n5kUfCbnXJULbEntWYnXtJ11VgYaFTV4nEKUu4YF7iXhLK7r5yWQrjFeNDH",
  "key29": "3eXPG7GofdhbxQUyku5VQmD8buMo8T1fyBJF8B6MjsTAhUM78iXPjHtJrpDatA5HhfVp8c7MoR6xvqyNjwdx1okM",
  "key30": "3JduqFLU7ArC35xS8cQ1UygJ57zTJ9Lnq1XHNGPFDmuo6477ZG8CrJqcTkd5mRPGHrmaLDryJGoj2d5iJL5VgKsj",
  "key31": "5GDSpZ2hnUXtavNJtqMhhKRbmU4dHvp4jABz9AM9hCtnM5RhprbMtVAuYHfPLDwX8NhMxHD3HZUmgaFFzxNJQNLh",
  "key32": "2yDfpyx3FNVpF1SRNUdXEwPJ9VuPXi8siaH8fcCFoawW9kHDdbWenWEiWsmL2AWtA7LwvoEo54wpR4SbJJhaxwX6",
  "key33": "3c2zAUuenou6PA9WC5ZajB1cmHVgnU5kDfZMJxn7bmQ8x6zYqggZ69WfoTgjgyGMSGmf5EVNTjDzCJnm5FZGnTae",
  "key34": "3PXvVthA56AEtNWGJMJYTm1HKTQyFaT2a6hoxjnYAwLm2AVEAXivig39mcXKL4mWDkEsEVPyzwX6CpUM8nKtf7Xm",
  "key35": "2mtD6whNYXf8aEXSeNyEiuWU8kPezNshDW7VCJAebt9zEKz5iLvP5JnoTgb9SxY827Wa2eTyKujdPPb1vyc8gLYr",
  "key36": "5c3F8kJtpifitDgUnicEn1FzRfbWj8EPNwFskKuT2EoJr883RtSz2XvjwsZGovwnbvrFPsgLCmrkQNxy8JNY3WgV"
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
