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
    "4uV9v2p5Ja7JAVc5UgxYemBgV74EdBRGrUHZene5sYw5Vcp958xAiHYsWJFMRFSghi8H5NDP2o5vjtNV3zocBXrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P1CYsQ5uVDmxzpnDkLy9hjgaYwD32R1c5DtAooxBrbhHR1tMi4etyhpffuRiYMzwiZ9Km6DDwWAgjWL4XpZeC4N",
  "key1": "jtQrsyuWAmsWBsmyDdKzxdThLmXKpaQnB3oBbugK8T8bDJpof68Z43ngre8vjbfqWssnqZxMAoWwncN6JGp91R1",
  "key2": "2YBwrFH3irSwm2akThvEqC6KgPGM9Us3TbMyfnRJtJUDqSwsEfxH8uhsS4vTidcAbmg141Cmbc4ERPHg3xvpjXw3",
  "key3": "82ieUvCRPd9xE9pgD4RwLWUsJNtk1mnadYHHYj7fxdpuz3YgtwP7jwT4HmjrgD9qfkQ5NC7Dzhb8yXCdA82Yo28",
  "key4": "2UShhAL17iToQFGJwvt92wwUP32FgGPGVRS9e7xA7CYzR2rCm7LPpaUvzgnzLrMkWMTBXao5hW5KvQxGFsSzAzPT",
  "key5": "4CJBmbTMZZCNMRPMCBLz1MMGqCDDcmL8f4XXbLL1ZbHpM7RuozRqqkGHUiyr2soP74TTHadvqQxa3PFTMvghatcd",
  "key6": "3FEWMxrmXHVpZQzCeRcgh9snCE2Rwihkch1PLM73gvM25GahCsMueRfMH67G9Z4WzpUReLaFAJ9A67epjcUPtCat",
  "key7": "51KwGifjewN15ogT6u6V5RKhH1U2cU2xmXtk8doGuhc2gKjE5tq8zX7NVfwM1XxEEGKXYpKrKoGKDKCz8r69w9t9",
  "key8": "5wG8CDu2RyBhPww7jKMWxS4HefQkmcUj5WgiKf8ddVpNXJDMh3aGbWaN1skWN9ehwSXQ3dwG9Updbj7NUdbAE1Ek",
  "key9": "2xsvyu3M8RpefWjKvXWwSptkMhFhs4HYQugezHwmCWbaerKWS3Tv2BaYLU9TYpeLLuPVpK5rufTLaabtXDkoamWP",
  "key10": "3pYmfjorU2qQeso5dE2aoQq6ZgiJeEwCneamT8aiM4RV9j8zvFLLdrWP1zxJSwVt9P9PGLsR9vcWAzznCM7cE7F1",
  "key11": "yrqveJ7pwYBUVMr7WcPCXLJPeCttnLdAYe8mYCyz8GwWcPompgtfzDCtFLk7oMVPLCxyd15to2jzTrT1tjtMUiu",
  "key12": "3t4aGHf9a8EnWfFUQT9UEjqq6jkein3SKnMGw4FJm7oQ9T6xt7p6PiEvZVFMZVKEQEdMitBmbDWb91R6PLkxbn7m",
  "key13": "5R28z2U89t9jx7EuxYGqExnN6qugEsqVZnvEiWw2BTPrPDvFrUtMuMcHYXq1Hy6vkgfFzrCq49q3wNbovUy3QxvF",
  "key14": "z342kJ6VKJ3RDbetZyL1ngaZog7AryuibfTTvHXfqYnAMhe7Qfg48dzhbHUndPbQW2P2hSP2ubzfwwsAT8ntP8L",
  "key15": "2USDnFGd6kvoG3MYkexovD5ew1TnQkMccfg5FNpS12kyNkYVsz8snZdfw9RXs7CDeCGycd2Bpejd5GPXn4zHnGqi",
  "key16": "jv6SRr4qzKTyrrWmqrhRb3iLUazDJN69PzKyQLEjZRFeFr2PFc6gyeEeS1Fx9uSTXXJKCkfLzHCY5e3cyRg66Qb",
  "key17": "3V8z1Hd6t5uuCq3Kvt8cWTBwh6gD5JtsKAZggUPtGzV4iJzzBAg4wcAfgG81owi92nDtb7DKdhNmtmKb9cNjgAWy",
  "key18": "5BMn3onAh9c3DFcFcRz9Z7V5Wx1K4cNjY7QxrvPgYw1gQ2qmCmyTaWVNi84Y1PN1T4RFYRuSKhFmd7dUTAzXegxg",
  "key19": "3Vk4HpmBEUcsNhWqhw1zpKRKdwPFsNtxAFvRQQwvCCq1e9VF38Q2FD2QR4s8Ut3xtzLY1VqQANMYeoshJLpNEh3Y",
  "key20": "4FPQXdeSXwSH7XGvNX4aAr7ZrAp9zTTzd9QRygwnewxSdA2C3ifoyQoUgygTpsMVENEssmGnpzSGq2UY22YP2Rwy",
  "key21": "65RPdoYvL5EuZHNT9344RHgAGt2LMM2ptiPwS3xTp8U5ZuQJRCqhLs6MMV5T27MkYE5gFqt91eqKtzrQAc7K9Rv5",
  "key22": "5Qh1E8JGrWmLy3AiuJrkNW7CgDiH2nGtLqzQ3FZX59sFR7ppMmyq8Dye5eoAWbrgCC7Ph7sbcidzAfmTvcigvtqk",
  "key23": "3xPB3A7HvTyH3nrwyZ8HCyi59ycZ3UARP5oyNzm1cy22pNyv9ks3Muz7dCys5ariSHEs6ru4f6e5nYoyc6927HxP",
  "key24": "2f32ESg1gWdAUigR9wxigp15gMHNxifcbaQymak7dgYcUTcwbGYuKtNyvMwh6mdHwaErT773deZNJMyLqnv8Nzwd",
  "key25": "5uVL1KoH3bLvXhKQHFdmrtKLw5AXn1Ed5xTiT1MTXJcoorqqx1L1BwtGT17EkqQMtWY8BvnJieD6C6Nv37nJT4Ne",
  "key26": "5AUkid7PuwT3BkL1TgVjUNe3UaWi1sLGyTDkwsge2aZdtmmJAPWvgruFzHDYN5yTg25twsXhXvu2zyizavgQbyN1",
  "key27": "2bgehXzHDMA763Pt6BaWhphZxfoY4nEgVxh2JbsybC6W2vhGJVn2a7YEeAgmBk6iUrJxCWGX7XmDPcdxp9CNVdxU",
  "key28": "4uxUao4c8sSfiGwiidViJ9TWSHN2Bx8NCiq4wtJ9cc9Qusdi9QXZa6TThjS3Gag2sniv2JSz2vQ5XGBeZACViwfZ",
  "key29": "4b2goGXqVX8V8wLapryxLGFNffq9GRdatfc5w8Hmv9WGyWUEPTzvgZfVydirWixWJeQdSaPrxjfraPNDShViP4Gq",
  "key30": "3ZFs2LUWixGsGhdMJc8bm6RKWoPxYuxXyHPyy9eH6cN36RmvUJgURXKDHivdfTscuDnxRNCAaBo4Zjy35D6KMZLn"
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
