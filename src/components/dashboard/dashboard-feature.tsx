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
    "3xtZVSCcsgKQTzB3ahgdZaZfN8pmCtcZ2Ae3Bf7MtEh47egnNdeBt7q31w5BBs5tKbnCwxtDcq3uv3KeTWWiQdmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ovHvK8zeK7XQzPpVwVvjnvTLETDMRtFk1En5GDYg5xyhHqK7zXEizWmhbGyhtNH7d22PiaHb4s47pXjwbscMxrr",
  "key1": "QM6Rcxwb7q5UFnJSmebJUziLQsdD644KtvjaTYE29CjHUFZRv36LqremWBjHarMYUqRAPo6keLec6whETBeeeMs",
  "key2": "wdZtnXXbpunMyEbLVoWsbDdog32xyJnD4hNKirseAtDSxsyjy4TTBCAiaD5ijnaaN5NkEyF6HFpmQ17QcAS2pxx",
  "key3": "5YGD3EFgMsJ9QtsZrWYNd1NVnwpf2jEfBJ9TsQ65ax9T62WDuiHufkRQhcEhRSFA9a147JC4YbMQQk9TqzwVTmrg",
  "key4": "wuDJJ99W4pi6jpQdLrC1dLMDEiMYG25zoZ32h8qBSSrVjGofdgUFAHVB2bthNhM3pMDhS11HGsqUGBeLGwwvV8J",
  "key5": "2jmf1KAwZPP7RPmpKXwLmqB7g9NA59sUXsXk47nWXMw4GBNuvjoK1C1zdAtwL3oxfaA9Acv8zdfM585vyoNytPKE",
  "key6": "5DFefpPCWxzqafDG75JMuP5DimZVwag747TBD7fMVcrHE2caEe4b5ak1kWnW5JLM8t7CbNBpYZxQnaxV5eXR7uLm",
  "key7": "2C43w5QnzxHnrjPpybyHYPBFrzW14HzPgp6Z6tZjNPwhp1hDhFPdPeyswaskwNGL6VZzGwE9NbVNUwndRxUdLwxr",
  "key8": "3hpWAGs4gdVkxerC6SjRJWVuxSNwqbmurD3a4ds8qAo8otxTg13xbCSSpTgQCMPyqK83gsmAvdbmjqUDfn4u8oZ3",
  "key9": "5HNgtBsjh8Z7WBT9ZXZaXA4xmkBAHQ8pPpScqWGfWEVbaqQtLP1GhdmixmR7XZGVKZ75qF8DJjxVyy25C6oS1VVL",
  "key10": "2nowxBFmKQ1yLFMQdi7sXjw1Nxt9p6HFjhvhjL9DGREvtWFf4eDfJMXgNdEcwASxMZVLWfvmAMYWqECMSbGqKoK4",
  "key11": "2eQFL1VLCMM1WHA6jhnkMpKy5iEzB8hkZWymrgKtkGKH4iteo88EcXyVzogsjt5bnsDRiC1dFMch5STP7mRqN9j7",
  "key12": "2gNh85Lip2xUNQog5HFvN3XQvcCkRNggKXQSoBLw7xpGi3pXeyqSbhVsP7Ha4RoCCtwmV3HDYVUSCdQzE77bLYaR",
  "key13": "3Yma2LkVrp66ouo1kS8kKBmPBsVhx5JEagNPYm82U9qcCq4zagvupu6hEy7aubHWHZD4jxVhoasD6i2HgTacUsN4",
  "key14": "5TZ2FSbChGXrH3uUj4hd9s6K5Wva5dAyCv8Qrb6M8rpjDwsfFkfoA6Adqk33nk4vDTd7ujid1Xtc5D89bSdTtmEa",
  "key15": "66B1wQmCXpe4cyN2bDu7vPcmL5pwkMVkCdnZC9WHMySUCwhUi7LeEcXAtHuxeN8XKuBafLwxdhJmGKs1EgcRsybf",
  "key16": "47qhPkZaQUJuVgjny2bqgkJW8qYnYjTN73RUhBNGW7abxR7FyeKijvQLNEUrjEyz9fmFCYdT4z4e55yNtAssB8qd",
  "key17": "2SEvorXChzaUtBXmQoYmMqJEMYpB2eV2uiU7hABi3bqnnMR82aacQms4BJrZ7K9gbywaw5FRNgVwSXTo6XPLtnhd",
  "key18": "46K2Fh6UZbMwdhuVZ9PGLVfG7hkwZF91VgXNDoo4XiYzF76BGrkSCfLsnGCpAV2Duuv6RQ3u6s1HCbofmXczwAR8",
  "key19": "QbaERPHfpKBsqJZAUtBu7w9faznEcKYPnQmnc98hHRN21XVs15woY6ukzSNXn781hu73R9EBQABuVq4ihGBWDZ5",
  "key20": "2jjtHYMvmvgUczJgihsCMCy9RE4dpFDHKNT4Pzvm9HWRHz8xQT7z8urKVurfNGcQHz9RcEBx4NbmbGZVrj5fxcPQ",
  "key21": "63PNQqcZsAWogg1qYHHWxyYbm1yu41W82ghbZScvpEsMMtxTXXMQ8fkJXKNWoe1gv7c9GWVM4FxJXdadjBRXP9nZ",
  "key22": "3ZJJq73UoD7GSJkvAPtc2qBua7Fc3vhDkDdNLaFSH3pRc4YAb4FnJaZvTJJiiidVYGB8apVcQ2RtsUWf9yqoXPeE",
  "key23": "jYhP2VMwkMAUvTWdGu1pJzBFtvFRz7dP2f6PzcPwC5E74f9rtvvbNcAUQZi1mtbJhzUmzefrBUSidHHo9kg4hHt",
  "key24": "3QquP3fwSSJypZt8zb9Z7gdDwxDx3UimgaUbUBBrBcA4M86FmAKJB2ETGBzbqCYqhtZQ7HsTgpHQgAHiH4TQqgj6",
  "key25": "53Zs6CYaJt4ZcA7cC9TPGNSaejoWGVWJHzSMncyRuGrRapse87HxG3cLnQwcDhurLqADJGry2Xq2rv6o4xbSMw6",
  "key26": "37rhysjwvrPPTstJTgYHWrYg42dK12EZmNRczBcLNZSJcAVpVvVsKmgCftqgLC7URdccr9a84MyHTsfbqLXuSs9c",
  "key27": "23RNsmS9Jiv9tiZoi32jvuCChi1gwLakpozp4ieDwqCSobBdhLd24GLr9ABc3Xrjzg3AqQzM6DrYnQte4kfo3NG5",
  "key28": "mTF44YkVediQcjRv8EapRWBFhBHtHybXRE8igg4ZERyUJizvJ9MPE7kofsHngCPShzGe4YftSyVS9w66VVN3Ugf",
  "key29": "3kjNALdt1BuxGUJGSibX9tYubpMBY6Z5p9HdREKhFjftaDrVbU1h5CSqSkJk2VSe6Sb72JcEdkLwnZuFYBxvzYN2"
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
