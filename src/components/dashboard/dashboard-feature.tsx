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
    "2c9LnuCYrqMbr5nsZ6jBNE6GQqhMbipPPGtcfHwRcHqAeGzDkahxwX8XK1dF1knm7uQ1ECHeMTgA8b1C7i7A3yuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8diYJiUwTkL3ESegmPDqFPMTc796L9dQhPSjBZrv9MoatEk1FLJpmVcKs4N8mTAA39xLwCYxtTk37CVR1ZRGu9B",
  "key1": "2znxNGWqhPk2Xx7Sp7GpF2RdRF1wq4mWzhE4xsDBga7vSM7KfMMtQUL6w4VqMuMm9a5arx5oMGDLcgAU7PAY882X",
  "key2": "2nGzHDkZpMuKfaR7GSrwVtKMazkFuQq9NG7DyCz3sQeocjpU7UCB8U8LDxRTi6zgHHs8FgCXovCfZ4Uxwp5p8UoJ",
  "key3": "Eg1RaohV2ntW7WZRbg8PCbiJvRAFELor6oRdp22nLoaeQha4EZkq4t19sA1Hzqb7LjDnsCrhFCQVew8BepAmjQy",
  "key4": "57Mu4T1pdicDaVZuvXdnxrPnCyhKyWNt9aiHKtD5nCvRDgRmMuy5tMTCW96vtr4jXH74uozZPrNhzKm5CWRE8vFz",
  "key5": "4P373Y4UswsJs3hfLMgyt1bUaL2WTXzpLcS3bXsvHrnJJ8NM5UJPtUginB9z3Us3qsPeGTt7BUrKfZbLJLEizepr",
  "key6": "3Y4GpcCRTLebbYNqUxS95dr5vc6TYwVenjSP7C13782Wxr1QtMUm5wmAMu9jdNcXNMR55syAhBYhu7cFYRDUkPoT",
  "key7": "3PzFZecmv4xbSUZo3f1vSvyMCFhfu6cSNTvunKdFxMaxKtsjntUx4Hhr2YBtFK29cgvLwqLzDMNBzi8AEkA9micD",
  "key8": "2E4aM57hNLJcwsp5tTwH7q93MvAJ6o8SUYpR1vm7nJHjCJ7TeyWGxX5CuJyXWs2J9YsHX9PLNtJrMJoaus2PzAnB",
  "key9": "wU8s3fBTJtPNJy9YSknXS7QShvUkarYQZe6RbNH6FCYK2ABf4Eac5m5KzAaUKkfW8crijLoADtmaR4PE7JL5NDq",
  "key10": "Zw6Ke8VTCDHbHYjgZ5zSwLvk8rBfmTB44VvhaY8Snj4XukBQKfMbA2k9S4h7LedkXtGoahRAbKV5VSbAWrRv74w",
  "key11": "4e6brSjpemGMN2JFet5khdDzJPiLBiLcMRG6GqqiwcA32vTKBbSCSLnkvuGg7ZXQ28k7npEamx7D2bdL5yAt3sLy",
  "key12": "474xJA6CV6UKyaj8FCi5akJhbNPMD1AiqWkSGqSqB3aNhG4aWKY5dz7YWguHg6w3eWU1AM739V6TyQwFLoU32ARJ",
  "key13": "2LUVhuBoWc7G5MfBLorQ6AXW9XLeSTVueNsjyQag6C3B6nvS2YPcXSm8GLQ2R87cYkvyYsKZM3wN59T2FK76jd7N",
  "key14": "Njq8AzgJonBYDPVanRnVkUE8xMNJqs7cAzyCFa3ZNoBbPQHvm8HWBH2WFEMPa9ynPnmA4H6j33p7n6g53NKeoqW",
  "key15": "4MwYfxGHgYxj7mK4Dn13Ew3z4uGNJqwW1SWc2dYsTjxRSACnJQSHpU19woGwUTeFxXGQXLVxaim29AgvYWAPRMWa",
  "key16": "ya73hfQ25tiukmB3drcAr8jGum8kyGd9st7DK1mey6LdZeLZQR6P4kFr6BXK697SkVsjtTVtPL2rnNhNH1d2N6y",
  "key17": "37CrScB1486kzKWNoySUnPyToPEE92o4jz8aYhdtyKAYoGMisg5qRKHiX6KNEyvzcqit4hAf8n1DwaaviySHPWeW",
  "key18": "2He2VPZNrvy5Yaa55AsRFosu2utUkt8LgzNiTq3WUJt3aPhYAhuAaFQTRfHETpsUziv6TJqtsEqnUyoi5kcWPA7F",
  "key19": "RhKgPhyKBxTJ6pSUZb32MVRBY1dqbRGeXVuALysy3ZaytTFHkHfMbSiu6xh8CLqnZGb9g97fgR3vBB4yM2KLURi",
  "key20": "612aDPqggCCGuRLcxBkqCQNQ2FyWRYt1dUwiRk821E7R5hYkmge9eLGJJTKyD9PQiyba8Fdtf1SZugVzG1mrTbor",
  "key21": "4HR9UZQfarzfvs2HJdTyYogYrCeaboSg3SjmdbU3BBef1Ah5yJi8pxqU7hHVvqXncCwJ5Xwzhucw7Lj8TW2fjDnU",
  "key22": "3uppUR5HNJq25B1KLDRrkcWszpZdz7irErJR3MuukLsf4wAdvY1p768XPTEYDFkRBhU9saamapLNZycwJxA4RNhq",
  "key23": "3TjcUBSPKWM2Y4grWKuch3egCx4Wk9FWgjAamyeqXpAu26baUUqECEYX4Fxjqf8QomDiYa5kuUvXhptHoFCjCV7h",
  "key24": "3PKhr4jZdoGmeABFh3WfbHUBhDaXxorJeFYdC7WXaGzRviB2SKF6uHMHDNbcHHDtZVCmMMcGdSq2JvbDDTyGwjDT",
  "key25": "oUvemjWUJg4W49ydFgWtoaRQbPjVaPff81vZ6iFAUnG5j2G7eKuWTU29jH9Dxb6DSgQSBTPryeQy9bE22t1GFMt",
  "key26": "4ADrhxt2ov7ZxdsxSoWksf4h9pmvYUzcznkX4o992PrrYCjUZbnKQXc69hL5GmhwnDju4LAWh2dt3SJ4eL43eGEq",
  "key27": "5ffejCrEsxdLW4uBsEmCMhAam5Wgb9R5VGXhx4v8Jeq5rsuWBz1Y313kQQdinn6y4gSrcgW6nCP8ea8X3orrMZLZ",
  "key28": "4otXTduWLdgfTXA8ZPVWmweTEEP95QfdUyPytbyqAp3jvxfcd7JrTZcNM7QWT84K7muJJs4gdzqbXsjUUZ1jzmvJ",
  "key29": "5JW1FtXFca7pov2EiQoBwrjrWQBYtT1sqW4oA2bmpJTXDoL69SK11Xk9rrjUVh9A16vWLca2gEX5yK5kPStGsGsD"
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
