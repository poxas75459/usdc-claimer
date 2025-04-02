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
    "2isBmkupspPvbcb6x3dhtxP4Qf6T9keGW2MWtcbT7VDP9WjinX77m5cRytuH59j35ebcUj2CTBPTonQhPYgjLnTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jvo9QXsZYdwX6C6KtKWuGXBNGP5xBVMdQHHxMbewPHXH8w7Ma2Shr8dCjGS9uHLQCHajTWsrpdLP4EgrdygZGX8",
  "key1": "582AKfqX4VLCfQnLFSiLyzHHAVyLYMBm8tBP5fS8HRyijt3yspnP2YRfSWn4M2kSEGDUFRM13zDYAHKYqiWiJHMK",
  "key2": "3QTJBqvvFonsmRTDCeRK1G91Rp2pDh3VMU8EYNVrw916SJoMHZt9tmDPL84gpi1yx3AydDHqeiPBnsLToXVaE6s4",
  "key3": "4WCxowBHiC5ZZuAPu76gWbArfY8u7sSH7EaqGSQx5BQqH5sMLM9imSbmSQUcqdGj8VY2wRtzEeayCFejYNheMoVd",
  "key4": "41Z8vSDwjsHhcKJi6WWkSMnaFvLF9z7uSLYSE2ktPqkWFqD51sFdG2qptZPoACkHTp5MP6jUEQAYtAcFfAtHnBah",
  "key5": "29FGNZzy9AcJnC54bCL2Dd3Xv43P7pndbqohnb89zC4W5Nwp85ZafwtHEPv7QCuFDZCD3M8aMf9uJ8e4RTQV9BcE",
  "key6": "3mYGrKsLzMRJSJsYviDUM96F9U9SQVKwKVF7gEinLbo3XrLPuiSxv8ZcDzu3bmE6Uj1rPc1bWLcxuR4mgNez2yFG",
  "key7": "2HHkd7jBYNkmXwQdSRa72GyUM7JrsiUfwG7XzDU76vnbPcVjEzvGZc1jEosfoGzZTHz4rpp56PqQkD3PFp6M4huq",
  "key8": "5FZqnBmxn3E91YBxey6fNjX7rAwApzyfvKMAvTowcrDLNE9cPLQzApBjRWuRTqzvkATm2WaAaD3eh3GkTVH8uuYN",
  "key9": "5KyPhMJcZgCnpS6UPLzrJWMwmR9KvVJDBqxawdKPmfbM4rnWHSS54kmYx5inDycThZEYDwJ4dhTDsVwEHJ3Qgcig",
  "key10": "2bNmmdFgdN6GmXHCZBfz9qFBuhSRnCxNYqkvYJJ6UPVVZh8mCDgHTn2M8q19afQpcuxHdrUyhQwNezTYT59Mm1Jq",
  "key11": "2wSH12sVbb9AxjahGtQNucYF4oADNV1Zbqg9KLjut2o4kJHW3EZBf7tUWZNCetTC6q6n3BDGWPv6hjey2bi9srgn",
  "key12": "5bJ6M2X6ovWhQAYep63XiQHUgtnJp6kc6XHnXmJeaxVV4PawauXHTe2XFMzPrJSEvfXrwRuTfGLzicDyM86s4rA5",
  "key13": "5J4yWGtdYSLCnUjdY3YoDANFq9nkwPtbcU6nh4gtRYZq8AzUTyLSLfLEeqeaeCLDnxwXbnjcs7dkZRSHJ32oXUko",
  "key14": "2c7oj7t54yGP1oXr15fnUEpRvRTJUpJLuxG4LsvabpTDdbGwCY7Egx3L8RcDZd5qfWLrfUakD1xJYc6xy5zkQmAt",
  "key15": "5K7G8h14AFgnpuQ5H9dZ5qzQRA7TGnLYXnp2cittxoqKojjTdzmtGtDpXnxk31UAGa5jY4PiqHZn7xWhJ3Vm6SBw",
  "key16": "3V28zk6dfsbok6xx6FwkcGD6eP1xjFkJCwXT9GhZHeUTXeqEk8K32eq58291HK8xRqMSwtGWja7E4j6bbJRQhsdw",
  "key17": "3umGrtDmm3cGGhxke8oUmYV6uGMGeDhzYSHjet6L6oenW6TCt1ukEUJREdkQdb8HfDM5FhDwhThrgv2hGPSXApr2",
  "key18": "3vPi4c3dHHtdzKiKBDw88RJVnZph6MnvjC979gpanfEy94mwVkAi5LoD8NzupV12V7U1ZpCR1XjgSJLZcnBHEva5",
  "key19": "t9crnvSLDm2xibDEn6KvQWejxT9BAKjJTdjQXGSz2CW7GwUoyoTo2vupsckQQiMu1u3Gj4mR4mwV26NLYXRsdj5",
  "key20": "2sH2UpDpXkDwBzRdfjZAbmta2MYxuKsoLam5M1szemckkXpr1SpNQeoDfK85CZCeGQr9VedGdXsEfUiaSukzkoEu",
  "key21": "2sYmgJTSx4GUpVimNGU4yFvgxAVei9EHKnNECmSt6T6Toj1QiMz3WGmbhaV4ZrbmgGoYrveXZEfG5HuvfK39gnzQ",
  "key22": "3iZCvjry1ZcPDnsEk4aRTLHsG8VR8y1RHCfkkX4uj1s24FYV9GzBMWkLCF5RHqsxo8cffihxVutN2NaJKNgHXaLW",
  "key23": "2ssLZwiHQ7tU1XMiPvUnfYhPF8DMBFPP54NvVeeE875KfMjxENGjtRLLxeeBeHRF77jD3j8JbvHJXL3t31vhdJHP",
  "key24": "3g6sNw76p2U8z8wHvvFJAABz4CzVCuhM795bu8sEAydawVsDQBCmZsEKz9YQDLoRM47UrkxnEa3S4JvcGc2cax36",
  "key25": "5GUEzvspo73FAwfaAGfxnE91d6YZSx1yi7Pirby9ecL3ZyYzyKTiwMrz1f3YACCrXBAcaQQCDj89Cq9Cwt6UrzFT",
  "key26": "yRAdMQEn8mjhaJoA8ZcUDfuS7NqQgocsSX4AwVCeUPuZeiztr6UaNLcVTs6iUkAhiFLMeoGHqUHfJcrNBtrzT1e",
  "key27": "33eB5Zcrw7n8ohbvqwkZvXYjcx5ANdWyfY5tbijJRLKvdnNzgsMU3Pxu5Dh8Mhe3KqtMC1ka15aJY695xyQVQiw2",
  "key28": "65Rm46PrDHHVsnVCSiTVumbg66Jae1UATDHmawEoXT7e5rM1BKC9krKnSccyYLrRVnBdVGEXbRzgbExmbtEkN9gM",
  "key29": "FWbWNZXS9k3WqykjWprDbhic7LcSMpAGcjzuW5Sm4HLSYWFPymDQXDdT3KFzWTu9Q167yzqtFtfVfUdRJuhSp6M"
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
