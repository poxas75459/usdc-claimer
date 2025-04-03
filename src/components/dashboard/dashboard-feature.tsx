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
    "3h8BASPqmTwNHnmBVnNdDSAF5mm66xqhMdgyDXX2zZP6GoB1xhnnHwmkrgfwnF8DBhzv4UvPf6M9PMYQ89XpdcWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3syADkVoty4H4Yoxqr8AokJveBEqX4TzwUhVSodDjd1YC8PA3o1tuxNZWfjntKtT45ATcy4nqBzyj4mvtMvKEw3A",
  "key1": "3g5kfDf97jVsg8mgyomct9MheMeZsZh4cuw5TPiCT51tL3vsWnNwHeZEP76GrGR4bf5F2F9FXbpykctGpFPFiUZa",
  "key2": "2rEQgWakVhptuhzQUTKb8RLkKcTidd3oznjXnWchD3z8jsLHrmKis4XW4fC1pNREwPELtBSPyR9FydZFemGrovg4",
  "key3": "4Y9JbGkb9ERZf9GrZgtUfNK1UZthjBzKgQ4PtjK2A37d8JiW4exCXjyWquhfHi6FmUD7uzgEoGM7zNDc6qmFG9nb",
  "key4": "vCDcU2kA5z1vHpy4ULMCcU2phz7zQsY1p96NaPhU4SKyfzo9t7TixkifmsnQ17oHspLV8nDoNfewuDNLHPs8fdi",
  "key5": "48vaq34uJ8FpA7Zxk1ezqKok8SZtg8bLaoyorZftHnXW3CaqJaVSJryrdeGEN4aMC1KiCrjDhv1vYA34fexiAkQ3",
  "key6": "4ALdonYG88hnujN8sNrX8QLLM5c5qyPZ791YhB6SmqB9bgwAQ2Y9ViWeWXraU93tDRftKjgpsGi98Ff7wKhWB57H",
  "key7": "DK9GpNAr98e9nffotxchDN8SWbdaXrvjH1u6LG9xsjR49QNS7wEGXKCATYKkmuKuFwc6PzBW5z5UFw2K54Kkdhw",
  "key8": "5aFybdDwnsyj234NYJfZzz1DhMKNhoNZQB7AZChguwEqxfBy5oSyUFm9BC2Q6VyS9vnyRLCDPWEUegcZuhqnWnCy",
  "key9": "5fwouvv45N27if3CunnqdQqESbLfHMd4vx7Lqw1NTSn4UUXcrMfoq3jMPy86nhnGAKQ9pYyjui1CZxv1cxR95KC6",
  "key10": "3hCiyPicn2e9ESycZympKptaBb59FJ45V9PaJC2FvarYn6EG7LS6mUsdRdhTmZURfRZQhVnjX1KA9yfoUuxg9aVQ",
  "key11": "5PmA1dfdeNThkmL2uZSAdfeNDnvQa1vmACa6RPqhVMqLP9f6DhokqaJvtahaJT5VzGSeuW4RU9Dt9wEnqiNkXAnZ",
  "key12": "5kJp6JGbbbfgkBYFHHZNdUjnQrcUBMWBDBeFD9UaKH6jBu2WSsLDDDxtd7xCM4saoanL8cWEugJSYsjY96fN67VD",
  "key13": "5xPgYrCS8aTxNBB6rE65BMPLocNHxr5C3SETWyShmWFt3SNejn6vXL8auJEXEH1JD1GsjJaaH69W1GPoYt7KRFZP",
  "key14": "2qz21szcxwndFYwpLNpwVfQ5vJFPdj48se2Fsh9cEDNPdEmHFpf7BZ49GvwJX6iogN4vYdJFGerPe5VzgovaYZ57",
  "key15": "ujZr5FzrwD1DQRCtt64GWoAGYts8NnVwkWHUjzX9cGaoACv3SEsPn2qBomquFLEKSpHWV7QCAdr6MaKomsVFP42",
  "key16": "3H3ARTa99yqA9qHDtrvJwR8okVCEB5rkd7Bfd32M5xNaaDxmCqhBEfizPdNh6gN7tdVKzGynqkLjYWhhDJ8jHjGH",
  "key17": "2pNfV1dshmF25c8Fx9L2Y7Lrz5ShPneanP3LeQbqh6raiLk2dHChFjkES2qQzfVPEG2BtDVAnY64jAa4F4tdgraV",
  "key18": "4dx82FhKXH3CCuZG8gNP6cDSAoXd5L2XGskM9HXyqt1c5Gk1og57KoHkCsGjzoM5B6KqtGpy221ZNgbNN6UY4Ukk",
  "key19": "2EuukZGvtBFqNFgLyxuJR6gH2AgMvngvWwYd7H48NoAZSVDLXVEtvb8ecRi47QU8YFL5C8E31RmSx5rrbbpRKQT",
  "key20": "2jx2LsUvBwrUxPtvHZfYSjYbpjYqcFBiBLj9EXHytAD9ZGWrDXQhz2gicTJZJKYJ7v12fKbkD86VVk1HBnRZJgfz",
  "key21": "4UGMjxgBL3xzgRaG21umerLxZDMwqheJGCvzNMKmuAVZR8QuzXDYNiRPzoEJ2vc8GQhbGHGP2SLC3eNwndPqevcR",
  "key22": "66mS1sCCtNp1A6s7VdknZFEW2RFGJzpoaKSagbv2uQ4sjBDVZjVfkgXhJEmowgcbZr3vM4GM6TxruBGeuRoicRYZ",
  "key23": "4U3W9y1QLVRSBMQeMrwMG1TXDCjx9TmWAv5FBhCvBGFmjYiF9JEvsnyoCgLGj5kfkJeAgmZRoXWNWBzoecEkuqCL",
  "key24": "3YFJuDiRf3h18sQ8d976NsVjF6twfuXgyixV1n8hCoYRULmEtb5D9DVR63V8Tqf1n3xd63t7rhvTCPeCRQ1crz3w",
  "key25": "4cS4Mb6yqBTNEjKFhv1cL3ft3xKJnze6kawFLZorGmgKTMiRKF4wKVXM9iLvLPHdpazDgx6mNNdLmv7XFngcsaUi",
  "key26": "2VpjZv3yJneNVszL3Qq5jeYvxvNcfUf21d1YjHouvCJa7MSgJb5BqVs7K6X5mEhva24Dih6AtKYaXjANXqcW84pf",
  "key27": "5HFEZtEdTP6eJ7zKXZdWgGiSV74DCWLC5cyYD42yMZyoJKwEp4TgiFKD2rc31W9oGJA1KrFGmm2MbvapJVJwp5HA",
  "key28": "4WjnteGT2vBJMbhT21LHTTsnxpVtXMuZxn2WLuSScnyUBTjTA3SmiLBg8Hgbj8NofSmQtz3fyyPFDWX7CitgTKVP",
  "key29": "4yVWGhBBVp5drhSwAH3qKKFiTSrdBu7bfgoEczSePEwnzTZS6gGtiq2ZbGWasrxHUCtgJkvGnQbehEeuADKU8AiM"
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
