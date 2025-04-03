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
    "5oSJbRXMbAXiFMwNyJnPKyMqeVWoGKeBXvCdJP7zeYhfGUu3WDKDmn4covQiA9hvouqvtUaURYvD7MPyCcfhSrHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43nbsehECCiKUuv8QWBQXJZm3potZs3xth3fwnPanRwCLqWptB1wFefqgeEt9UeCzqE9ainJxJ4sDknfCxYAXqZv",
  "key1": "Eknvv7RjTrnKdvmhCFKv8ZpYGrU9QdKsXQR5BgqSSY2KJ4wYtWPzxQDpMf69XPrLog4GWPaAuP3Xmo6Zo3WMi24",
  "key2": "4HXzDegigm8egZG5Zq1ALcbkFseiQsWj6KDve7ykuJdxf1KHwfRN1tGxxF9QMH1BUztdTsxaW8D1Msr7AN7MFngQ",
  "key3": "5uDq5SKPJC7uMGg8AwbTRLZYpQYGRCGYYWjC1VepoPTpasEzGBVDXV4afyGxdY2C4jK2aRXx2jWDri4Fh2FJPH7b",
  "key4": "5xm7NHcvro235UDfPHQg4EHdG7kKfwQPVFEyYY45Lix7KXnrNMZEPSTEBihNm627KWEycBnpUB1iUR1GuteM42Lk",
  "key5": "4JxmfXTsJgcVVg4UwjU2xGFS3ojwGXEJ7TUawZAm7AXEgThMwPr3gxPhCFRJpQLWe4GzH1Jnm7sqUQwbQ2uepPWt",
  "key6": "27GeDsbyjDaARfkumTVMS5qMNfg3WRUJ22EgYgSn9KzW7ZdAKpMP2oPvsPUUivVPyLGuDioSBHVAJxuZdh7yyX6k",
  "key7": "3sZN2surfd6g5gbitipXnDcu7vdHAp58XHdqEGtXfGn7eFjdfuZHhUKUVpeCsT1oubaBjaXx4N9yKvyWsW9vYYja",
  "key8": "fUynKbLLRQH4cASVW4ZHMWHo4JyHzw8KTX6uYHWsb68vJCn9qGZnFHMxBbUkzJTh2rLP1A5DPKEoN97vwx6NdXg",
  "key9": "2sa3YrVuWZoG8xQH75tQGUmh5nqbNSryydLf7LW3CutsDd73FRiq8Uft29irWzGxLXLrNFfFHJhJxrfVBrVK1kxF",
  "key10": "2zEacZpaNvV4Tw4sPxjhDtaWcXnjJdJip5tn9YWjHwmPEjuDszLZF9kkghfLijdLfuYUaXA3K2PqDB6nTyeFpURz",
  "key11": "BxbpRkHB5FWPg17DXpaPYbqAFuYWNz25YBdfatZEYKCLaqFLvvuBZWVxZqpECe6s7QNLmxU47B2HeozRscj9DBc",
  "key12": "41ys31RwHzzuJAbTG7kQVbESgBDPwEiNZPAPnL2QFicsPPpyu3RqBX7aBCTw4a3XSWwGMXXjb2Cb7LB4o35DGZVe",
  "key13": "4HdpKXYoq87Cdwh5TTvcGzcD9w1FWTBbvAE6rod9jRTiLzB5Bkkh58V6v9ebEMZ75gmDTyQqUCSSyx59qEJeuYbh",
  "key14": "5g9PQdbqqC4msW6EUhUduzeNW4E8qu98gtkGm5cktx2BzQAjtBazeyA2kSGgVYBQpDpsGxGfhiWkBPoWHKHZzntA",
  "key15": "4jehtjb2fVZ6wNsKmpM6T2d8aeLvDVGnmvsSkTWpZVD1vUgQHA6gWJfxxHfs4CfsBnmRAcax5dtvf49WHeEN1x41",
  "key16": "4YJpT9VaaX7NvL5mDFvfMuBwxFS4CYzLTBLxmNPW99bgQVBsFZsBRtGd5c5iDTrnHtrjKPxivsu5uiwS9qJdNNW2",
  "key17": "67M5QdDzKPstU1KSo1GaLaCmNmKDgvRsG1UTuDqUS9FzXc5scA8gAuatVoJSFk1jXF9WEU4Hd44t2626TbY7Sxgg",
  "key18": "3s5ci8zyaBYidi5xNLw8z9tDM6oCqGEd7ZLCKfaJ6cBQdUzFBq2Q6vigdUM64nGDNK5uLqGsrvdweVe9qzcXcVPs",
  "key19": "2EorYEduq6bGarHQCUBhYvNk3JPtYeLzjFxPR7pyFSJP29YUtusHbCzdJ9HRsWy2V4bzchn44eFwaxXvgFm9jkiP",
  "key20": "2jyZCcYbKuBAq1fRKtzUXvVghoRHWo9NHnpf8MQWUAnNj5Vwcs27g5sn8k5UBm5WKXmsAUZfYKFDDjpCPGS44CtF",
  "key21": "5mTgasZFAMwQcNRmrMGA8SFDmovbp2rFNqPm6gJxetxH7UQRCygqNF2qp9Cnr2tHfjcwhE8cqYqyD8eFz9xYWTQi",
  "key22": "3rbXekmuF6kMbb1CQd5Uk2utJuSEMaioUEBrZnMqgnZ3SsjE9wmYrqG2qeLVbDo3Pvfc258ziFn2eqUcThyuVKsF",
  "key23": "5iiSog41umw3oRaXakbv83A7C1KwJvdZZFgteHxCe81jbQpdJ682PMSoqqnJnWvfMcd7oad5qpTMb5xBvMjGVfZY",
  "key24": "4ten5yQDjavzU8K92hcmcVJbYdb9WemKjYx6MkMsYydJmjymXmoD7uXKf8cDGWzrQnfDoCBwY5mAkAXR8uZooPay",
  "key25": "4tTFqPgc3soLdRXwXXWk7ZK214eb8cB1DF6NFhvinYhfvg9YCrNv4V7V3HqzrVDK7gHcPY85b9mk8wLuRbLvgUaH",
  "key26": "4o53wJ4UqZUa6nWqy41sABU2LV9BBDCKB8n8xrD8zVviWViVwYJJU93thwHrREfc1SvDyAVLSidrHsXRRGq8kb8",
  "key27": "62mp1B5vy2pe6ch4gjWshVd852jKgbNyE3H2obLA82dpfp3rF9VW1v9RfobGzj1f9754bW9Xcfm8sTEsY8aLpU3r",
  "key28": "2js27thJcKtQ55BESNdxCxCQdcCpxcpWqbAQkj544o88iZLNbxcPoUNVrez9gB3JnLmPDvLcmR2nQLP3h859G2S9",
  "key29": "KsHoGorRuN2mdqqfvjysVgEvYKswJgB6KGVDeyXYtJtfkAVXzkq3oBwVTdeiFNBbEgj4A5uACQ8tjRQwuxXStYu",
  "key30": "4WKojVMQga5r26DHSMHKxYnFGADzhcujf4BFCgapAK66xqtL7zHZueBR3ZHTw87Bi4cnSu8H3Y8tzVwYYMGpLNkj",
  "key31": "2zQqbycMdBmdpdvj1w7X5oC86X7tsHcpKox6QVXuQ41cB6gA68iK4w37US6dXpwqCF5oruKJ9BvEZtcrdaKhTYXf",
  "key32": "28oaaHB8B16fiVhGFKqR1C6E5ByVzohRYuBcHEH9cYPPW4LPMmHeHdAUygVbEuCrd5xMQjsd1PTASM3kid39MW3Z",
  "key33": "2zJ3VffaScPAudoMpMr3SjA7MHMAaiJMTTHpd2z2B2GCut2qCKffB9rjQEXQYcP3euTXooGpHUZ21wiJs6xoKtWB",
  "key34": "WXEvEww6vL4Jds1yprpKjqRVCs7SdjKUGqcq74hCqYHkf1fxb9evf9jssPPCMG4iMHRQncGfvzZnhnFxu6mwUKD"
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
