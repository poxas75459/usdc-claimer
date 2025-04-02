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
    "5CCVAebgVYcuZt41xdhfsGA2JL5fW2NYUaHFZrr33MoLQQ9pCwgFcFo2xzc7TDuFPQGZDuTDXEn64XzyVktXnB4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yE8myzMYzLHterG3kSErhkJLrfSLRBhNCVpuKM1QVowLDHphqjNGoh1BpjrefpMjsi9RjxicSjhggssytuzKm3D",
  "key1": "4QVVsga17tDNCKcAtMBrmjLNfnYYRvimghUsKERF7L8MeGrqTjQdj4JN1MH16LuwSG1T3gLFUFtvsvFmhgeZMYMr",
  "key2": "2FvLmfTyyvRJXHxffXuFMX8VKmgMYfVzNrhBKo6DSCPer2QnrFaa9kYbd8B2Pouqxyk7RfEgD9jQU8LEBLTJw5Jm",
  "key3": "65Z6LwpHLbEetUwwnbzE2CfvbLdE8oXpUj3F5AVGa2YsBZcnSLFU1KNSvaPSEjqy4iDGzdb8pUDbU6SpMEc4e6mR",
  "key4": "2Ru53jA571XqybgbKcAavUpAB3nGeiTjJAqhGhXVpnF12Tn4H6NiYyr6EnLsGgBdpQp2sL9DWkgQ2RPLQXsHE6q8",
  "key5": "37Mm37ZWapSwaPy7pADG7MJj6gt8iXCp7q7teZoagXfHCXPLuuCQ9HLz5zKZot23CxskQ5ppspT9QK8qzcUbqdKT",
  "key6": "5PuDQZuPq7a8fz8MFVqj1MALExbviTeYCrbf3RjRbvSwCHXywNCpY6o6QBz72qoK1LuA1vPzr1mD8bTtz6hoCbBc",
  "key7": "5Qyd69Fqj4F4g1wfqo921MJpuVfjeryG4vcy7gBRpSW8ZDJWrbyUPAYwnDbiXD4MdE2jfeJtWgHcaQW1BCFeDKFF",
  "key8": "3emea6d8QBEWk8mLhgFcfBhFH3mz4pgP48sogdViDaJiy3QfEjxMhPc32rHjMJEEBJUSwPxZjHQ2T9D1N8oUead5",
  "key9": "4zwt5xXic2nkgffbRYxEPEsCNDznNBrPo7dynziazn6XhsxKqV9xuHt2bv6Ue5VbVv3aWoUgFTJ9hrVYoQJKWjqr",
  "key10": "2W7RrUwaHtdEHfhaSTnXftxoGvfkwvNp73vjKVNnC9rwmdWCZP9PpciY9gbphCjuLwcoPxVcYH5BUy8y7dxLKDEp",
  "key11": "243QYfB7sLrt3gMJ8GCosYZQ6waixb3aWDajauP8vsejNXaYbWxDLCWmjkwUWoSRb8r6gnsHfwmyb6cA7BSeCuLv",
  "key12": "261UbBCD9FNwrMQ9991DJj1Ws4k85uMgAChiBpJ26q7YXoNvZ5tGZ9Px6eSe5veQMmg3fF8Wkcz9wBoumoefpDyr",
  "key13": "t8wW3WH5vEjU7KNU2yQzok3rUDfp2gxaZDuLUKAw6Zp1SiyC4pMB5fhesBihcEWZ6Y3ZGREhqKvPkRggGmJ95az",
  "key14": "4KtQCrggh91ngBYiixvYmW4gWbrBcars1pThy4LDvYH6MxrBiZabk58Let6p3n4ZyctCFo31x71wUw9cymwLUR1U",
  "key15": "27u9oPRHsKARF8L383rt5AsxZA8BLugdRv117wZHzhGrjvr1c5QY3NLei1AyJhHAYR1SNWGRHvZcsKmob5y4rHG9",
  "key16": "47jFP5VjHAkZj83snR7bsHuCeBSnCKR1cXXRFBaqKkAr54u4rr9LLw9w6CkSnptuH6LqWKJ1XogTyFFDWfLJ8Qv7",
  "key17": "2fwHwsJZrWLN8ddoNz18qisdak45e5V4YpPjtcrNAyDC9buiNjLkJDM2SwmfExses3S7oZSP3EHXenfPEambQT3e",
  "key18": "2EGpgKtE96zgbiaeaNCiatsKXfzuKcYjRjN6LBH3gxu6mtzu9ZBQjPBsmDCVSfAR1yfbXbMWWhCTwxiunYjwBhMK",
  "key19": "4aP6YrEqPY9AypjFY99L9te7bhB4S7GcrxDZdosyjpiCfoUGoHoYLMM5sLT4Pn7GwC9RFyMmydcYAFJYX7vE6Thz",
  "key20": "28ddZDTa3ijPwdZCmG5Ez3fibfAULodWTP94TcTQTYFfyaYkozr3bdcecqqwhzbcCeP2vyaz1N83MYjCf5bUoYpM",
  "key21": "2PAsfcYSfGiNL5vSbvKWUMwb8zGgnixiRwiXzREbqSwg5AJsZAa9j6YrJFGCZvVvWnbKivtRJD1V2XcyAq1DknHY",
  "key22": "4vpvrnBkwne4pt3KYtsjmyKbrAz5ZBE9zUr2yv9tjjHScnswowUQc4UMAHJVPCYqsmMLfgJS7D9dH3LSLVsLNHEQ",
  "key23": "571iDn6tiXuTz8AQ46c216QHKW2v9oeS6tve84WaYuwHquQ5bHNuc6Ybr9ethYVczm36Hn3JT1vg42kht8iXKYKi",
  "key24": "F6T5xmF5bJ9ES5BumYTW4S3miQSWRGF3yY6Nk9GVxKsNSiXPAAqpW4zgcv3ZvARYanbiMVycjH4mSqqDHh1MLfN",
  "key25": "2X3YcJ4yszbTXyuEWiLoYgztr2jQ9C5LbLqpZBzigkQBUPVTnVwD3U4dfNmMgGoRFRcJcce8jSPN4FxZgEyBgMZT",
  "key26": "4nANzV2vtGe6n8jtUPVVKQf2qdod7TKtbVEaMVue9ihuaNHmLLv19mvEk3xJvThaP54JEARuh9niwvjqLDZNgwjD",
  "key27": "5sAmaUero3YJU973Ljz56pduwjt7jiK7yQzgqBWD2vnv3CKowmQXsxdkM6RMKDP1qkWM2bK3v5seEpxEPxEtfVqF",
  "key28": "3k8nERXHvCMj2dnBChN2pj5Sh6msAakbndM2nBZ3N2oi7HDXfcwwEjwcqvpRhfJGEm9q5b1YV1j4PYAfUFXRdcJn",
  "key29": "Hb7CVr3tPPLaTLLPgd3JBHNAktkpprm3i39QavxTYmSy6HKuBncmoGyTKNe2GUwDDMo2bWXGhMjgGsiM4iwLpTC",
  "key30": "BhkNwZbU7TCC4d4jfGK4dHjpBwXdb538n5WZj81aMhdaNePFCcBf6jj77gTkx2UbyZ5D7Dc5hXxXGC2WN7iCJQG",
  "key31": "62km9ruhVN8F42GeiBvZ4Bh4LpdZ46FXptDTPTESwr8w9g7aqn73xfqhe9cEpT5VoD4WwBKxhdNkjC2RN1Y8UePS",
  "key32": "4XEQm4M98fcoDVmkkk8BFiEsq8yEr7EKJBqYefksufQVE8JWAviM5tiMXP4cL8Q9fVk1bJmsBbi9u3bTKdwZBpjy",
  "key33": "5x1LmAuDrmK2bv9bhnKLSP2zTLc48hyK9x7Nz5ozEofuEVdwBgAVCXAtEGijwF54GVcJAXUB6aFWyqPg9d6m488d",
  "key34": "66cMnRE2ufqG2AXZVmo2NWCdfDHn6ZDw6EYxNpbFc1yDLEHuVK7vki8hujmsA36TzsM95dW251AxMdpwymwPXG15",
  "key35": "57oSeKpYR25dbqjZCactDcyH1LUNku3vtLTtbwLNLhjBzAHAzGMUrWFiiYSEMjNGqZRXcLuvAraiZd4eWPC4McTB"
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
