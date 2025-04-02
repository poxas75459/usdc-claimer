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
    "33QQfXKuTSkBBxatGv34yHG8985wZdZQGongB3km6KussiUE7sDAVPkwkoareaaxFH1CVRN36AfQ9M1iAn8wc3sG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hLuF1axpEHp44Qsv9pKA4WsJT2uZnxxCrQsxqR3whymssG2CQHHHHVrP1jZf9b2p82CknWXFvNM2Wg87PMRfS19",
  "key1": "3mjXk2UrE3Hp8Fe7aYE9MykPJUZhry65AazoLtAov1xuMUfhRisCxJ9eHCjCq8zEMv5GdoEeoJHN4u55AguXKE7P",
  "key2": "4e7ghkHYxYVfeDNz3Ea9EfjRYtfBBqFJpMJ54eCAJMZxU3voHYw5wmmhZfRdZKGZzA5Etn8WyBAjRyEzYunk1mQ8",
  "key3": "3vhgGpvDv5iJCZWBuqyP2dEzXVAsAJpMErUdhU6VMmbirBVKukYT2hdvEpD5KddYSR3tAoUwFhBp1xd9iCDyyxMK",
  "key4": "4XN8gqcNMLq7eSa7B6Y9DfkQFQWVHFJ1HYeXVnjqEAYVhvkh3E3MEFPX9ZWpmY22RpDusCedFyVLVxBJsQXusJzw",
  "key5": "TenVH68GavT9AW7CzmfmoYY5bTpisquXSdDGYz83si8T5DP4bgZ295AGQWQmXSecmntp2QmiUrEtiCFdfbMFaPU",
  "key6": "295w4Th7jXTwPEHwd8xdpdEFe5k7RnCBAue2genQj9Tzf6McHQ9TkAbMeh1dXeYWEmGiZdB3iQizhT2Mdgt1HzX2",
  "key7": "2FALsjSRReXDG4uPtFmtUJRoUFyNmo4ph7qkuFLBPbetewTR31Pc47tYK63r5p8N8vLF4f1iVo2Bkvkt3ELC9uwZ",
  "key8": "2newhZeDYMJV2b1yrGVG8ENf7uVYTqfk1iFGFh43KciZwRnzbZe1Wfu5fQotBLDL2PfmRcxZ1jvgPsqiUKv3mw6b",
  "key9": "zuqD7xHABTVFs2Ybq31u9gMCaWqDbDEaBVu1yZhQajTTjXKSrscfqqVLU7s7HGyGAqxDcu2TWmA5zbvM27Y2z77",
  "key10": "3iQg5zMDYdYEjNatfzuypdmmh6MMGdMXL2G1ZwN5p5Q8XgYVhCoPok4nZKE4HX7Jiw2bJ9TEM5v5an72eB2aof3J",
  "key11": "5HVk4kULpic1Lgb8K9E45GcWEyaNHSL2cYUHYkp3BbmSQMT5y543HCbiqBiA4uoxEt76PhaMiUedn96JSFCpBFEH",
  "key12": "4bVsnWvy3gaAfgNa8fhbQM557j8ct2i93tK311P9Arv4xES8viTq4BC4rEqditJpY5SHwdRzPZcAjjwujMrQr2S4",
  "key13": "2cU55KMbJixgN4bZJRRWtLmVpiHvCTqqeBy7o57MH7mVtyxFo8FjvggUYQfEBt4E1he187Eb5Lhz58rWd3bKYYaQ",
  "key14": "3Pve5Te8DtfqJPuj3zT9W13FXgnsNAjXMSVJioXTohJRUcx1GmeVdTBvtQqTjBjC8UmQSnKTm4sCCgYrWGgsZaxk",
  "key15": "Q23gqRKnbLeGM7ANUSJEFmZMnyZHxi6uMk15czCVNVd2qeiKXyGw3hNPLfHhjdPEhEaiBmCGvbkFwkijG1453YE",
  "key16": "3giMYNMNE6PvpiESX55unmfRcw26L1f4Y7YQtiYFfyJh4E3KxVsNxJsmvUYHbmQfG9Mbu4bjRDNtGk4g2kwf5DPw",
  "key17": "3sE7w4eiPiYNCC5vcupDBoP8UeoTNofcXuYv5n55KYWcMewtQgwcmo54GzENdsstjCfHgYJvrpkAS7aEfYrWoEXy",
  "key18": "4Nmm29AuKSt2BGfAGhWFSCriTjoTiFrH6B8iyZnLB5ncmAv6RUR3eSbnZBNWRjcvgcU5BhUgfAggnAawodWuh99T",
  "key19": "4UKEaT6A7f3waSW1sTFgbjpFC6duMrMpf5H89tZZvZamLe23tBVfC1ia46K7nctbW3Kmcc8gqyeswwtTTdyM6gma",
  "key20": "3LndYMc7hBuK5uiVR1jiuc6D7AnhgncSE8nYyiuvgBTz7qTDWQzcLzAJSbNHCDgNEW6aTMREUt6W2Xg7VLYRXT3X",
  "key21": "3ZK5EETM91R1UZzDMpn9bNhPjAGLcdCPWKLL8SrwxoYXFuUq48uNW4aHy3EmGTN2SLeXe5vqJBAK9QQq197PnXnz",
  "key22": "2aX3ZuG5usPvuL3nqywRQKUpdc82u4qRhyZ2KoUTwWuMuMagDBvdPBwJJ6d5jffbRzxjr1c94X1C9ugf6zXiGnEC",
  "key23": "53gKHRYwARLMuWHi2bNMnRG6tMYZdvxaqEjWViiQDGAq9xp1xoZSxayRq7JuXyVMvduupYtSNxUqpTQJUefaKoqf",
  "key24": "4Kjh6yUzFtfwcWMxYNBi29RVpisLCLeHbErwwazmck5j798hnCmFePExPiyy9V2kGxNYK2BvrRDimnWzS14uVyBZ",
  "key25": "2YBFYYGFLvNa6GTEBuH2u45yUvc2sFGAXSTfZLXx6ucTAcXgxMjq9VpP7J6RWbFHaUjsqsVwy8MZkCCdqhtxxHhU",
  "key26": "2i4k3wLjUrUf8dxKAetiXScEWgoDSzJhy9ZDAzxLdo7ZTJfzZWmMVNp78PCVe9CcPmhEgbnVj12BrHGVDius5RL1",
  "key27": "2qLYsj5QfDUTeJqNFDquL9z6P6YUnh46jhKb6Yd5mzsBgzSS8CgtyGWkEfy8utgigFpSLYVE4dA62KRnq1eEws6g",
  "key28": "2XSzbixvzVY2rkZwxuyPsnnHdzQBPocNMHMjVkJnaqkyfVVEncar1E5r1qS7HiHZNH2ayk6ozm1njsVVbKPX6o7J",
  "key29": "2oUt7J5fwM2XCPFyiSqGSHrrptZ8bbxeKgSMmKHN4haygBDQ31DrXLsa7qsY2GbAYp89ncygU3L513jt7vWCRbrD",
  "key30": "fm3A8dp8JvKNqMWe6YY6kgKLSNYx6qNtLG1Mo9UCM8GNw8CyGXwArr9YKmpZJ2qTKwWeJpVmDuLQEjfGbAeHaTE",
  "key31": "47xNsk9KQwc7zvKtwg6aWCUwCe7JdqBDG3Hgo6y8Lu5uTH2NGpgvXki1WMcnFYLLy8vGFEtGBnv73y3vzkwsmxzU",
  "key32": "QjVimYBaQ25QS2KehRD9acMsV7cxdYUmiKFYgy9ht41FbAze99NrDEbitAYVfPMxcWafYD1f8aiAXx2syfLmUmG",
  "key33": "Vy2TzhQ9zavF8Mm1YyjxrKAwsz7v3mJ3fJZJ85HiKyKbuC9qfECXsasz7eU8k2Rq4Cx4vGCfc2Ls1SPLjSUmcqP",
  "key34": "4YtEVCnqCLNdQscRagihy3WwBVzNLKuHaXxqxvXUcx8yHjLsg2mSpfHyYaaNj3tae5ryspTj3UTxZ2hCX1cFK3EF",
  "key35": "5TS2jXJnY9aEYCG2WP5Yb4oN3V6WtiHMunSJo9Qrh1qZQgYvidE8BBLnjE3dsZNMnDhpjcQakKu5YHJou7MrzR5p",
  "key36": "22VYktsyTKgka11jv9N1iV5EZDzpomG93aFNjKLDNyKGt8cYTUNufK7iUHk1BuYZVdxUppYCiGqdQNQDWnyKUU6d",
  "key37": "sQFgTkDABtMKkzyq7uwnTVoEdQbBGR1cvm9mzUhcYtEkDo4fN9gCRAEVuBrYvPEypQGXRxBjfHxNEPHmR1FiUHy",
  "key38": "5GBgA79xPhfLfDt7cBZo5ddxSuLn3i5i2UruHV2SvqyNdPX4CnFRWNewFLwrHY9tGuJAzGhse3PRRHWU1JcnxjXz"
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
