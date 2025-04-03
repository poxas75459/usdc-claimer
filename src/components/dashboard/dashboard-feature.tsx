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
    "26BeSEB2ZMdVDtvkP9ikYsNSikS8YF8Ky7Qb3euEqAXEy7QbgrUWSFtnVVek7FUQM71npVchn4KpaQjmiBnHwnDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rmXeTis1ycqZ3Rsbpbe1NjvMxmTQfeDkxPEgJYsRKfwPwPWrFp8s9L7LGFJwRVgMZBdyKkrxENWbRV9FXNZzZr1",
  "key1": "5GiGvvC7qPQxtEHjCqC5zVXoyArFXv2hGr2EX5Ms52bJi26cD7pb4LAwcejQG83MLNUnx8fUpyfYGiWVX9reTxMn",
  "key2": "485TFwPzq8Gev4dQ33efiPDBmzX4rraWA7kRLosrpnBDycf5nJqiEmgWw9Vz7VvUzXFMh9SvhdDnADZ4eCtKh7FX",
  "key3": "iSG6s75HWM1qwW8dsdo6mLND8C8cQCwibyP136qW2NpNgokLg8AHpfnwn3va6zEMAttzneiNBF7AkF9rUqVxwe5",
  "key4": "iAjzLtmfDuKgL38xtcYDM4BJHwLjHAjb1vLJ9b4CgnEjmR1CFy4rAd9JyH74BLygYTXthivbqCCenteoiBYLMWn",
  "key5": "5yzEHybtv2YAiTDJTTQvBgantzKotFsUTmVGabLMnQPEVoE9Ueq2ADPbyuZULYTeJwLnZPJb2uH91jJDLQzBoxK1",
  "key6": "5DNPciss9LdXb6At837ZZWZCnxjxDVeMUPhr1T8yTGfsYpGfYqRocxTKHxLvGms6hmvc4c9fVUZDC9ngPBLMBmVR",
  "key7": "65WTZ8abPunXEs38LzcPwGPUA3rvTVJhMybE6tHdMvLHNG3sKy9ZMUSETTG2hpwLFVBR5ywkNn8a3MmM1a3cZu6D",
  "key8": "5b2W6UxKUsFjVsGtL3gRmyQT36vmpPYCn6iYJM22UEiN3nF2gEahHTzGMACRFEnjNb9c84FHC7JadLNhh8ycco35",
  "key9": "3J9Syd9paJfrv6YKbFvwy2RWLxbxDy1FDX1JvPFRxeRL6VymzrynH5i8SMYzZZhoZp75DsysANhKMFjpABK8xRJK",
  "key10": "zPjgoPAVfvWSf41peLHaS5Ab2NvNPirnpXMs6cc4ieF3dHBBwAFiNtzysTdFN9UXT2NsP5CbaAFHc6PhdxxSw19",
  "key11": "vfQGYtfqUw1RwY9byWPRQDt5JGYfMWDBPWyipFrs21nQgw4wviFwe5VBoN57NwJWPRNJKoc3XG8q2CGeonMoK2E",
  "key12": "5sKMJX4m2Cjud83uYL8JJ4pioZi2iS6wVx7JxGmQ26sBqY86aipJEXhYcJCZaxHZBUUMt1gLKkA3iMwSsCrb1h9P",
  "key13": "3e82yHNJSBa74VLF3Umi64qaGg6sgX2Vv7GuYqLBfcbRcUwEguCb7NM4dzkzBP6YmRegRLEo3TTz9UUWsEDyAUyt",
  "key14": "49Gb9i8Q4vCxXZwHYEvuVN4aKdvR9Zs2QWJ1cttYN2bnFnzmUKduXBWNkMPQ4wfwtAa3kA2dm4Mo9eij8NHQhNhE",
  "key15": "2hbWK7PPX4qZgVqEX7m7UFCsJzrq7PeC5hbMo4AKbGM95tyqnSR6txJPqz1hdVmTKxhU9QN9pKzp6AbehT8HohA9",
  "key16": "3zSzj5tiyAzLkVRCWpm1K1y7TskkWxKcBnyj4gue3ebsoRb1h1DaNhNLp6ScNHjoGHYC8RMUefivr4u1tdkEB8wx",
  "key17": "ZoDrRut7Yb65ndwnLvYcb4f6PSWb5JP1b48Nx1Jq4b6mkELmBF2RccuE955BbDn4wrEkRha635Dez2wxLBhQcAJ",
  "key18": "2NtASmBB7EmYG3nsEMXdHbn91aaXpNYBMuENWEzBxyfnTNUvGvFKAZM9DtemohbQUN67UF7BFMW4cieCDKoHY4sx",
  "key19": "5dgUdB3fej9ASr4mATf3uvaNhSW48dkLaQzy7YYmF2Np6hVUvR8SWe7yWvpfAEGVHvokyrL1bCn7w8Fx3mL9WozA",
  "key20": "cW3wDWKrWirMhRrQEKNm2QMXZKNZ1BUoYMrrS7TTFsbQ3TXTBXhiGqQpTQrjHJBdeDEoxuFM3h7td2ezC9UZyzH",
  "key21": "3vdz1RzWsatNS7bLfUpsvyX8hSJWMLk4Rp7vv8WHni6xkW4X1i6HYxHoo8c5JwYMDqALCJ5eAKKxNQSxvoTAPndb",
  "key22": "5KnPkpRzLD5r6jY4zmnHAK64F8WcC5QumE3WH4Ks4CG92gT2ZjN8S4VhWnA9BjZzTNNv37H4wFenq8G5DUqKQV7H",
  "key23": "5nyNdEMbMCeAibJ3gjvx5ko2U1u6cp36aVEmW84StwZbBnGZygC9dDy6KWbRLP1hhRaH399ps4BPyNyrdZN4EThA",
  "key24": "4ftu4pFKLNHkjMzDhn4qnasEwmdB5ChnzHUF2N2BPFdRM5BRZPcsG92UygPeg8Y4i8K9kgLBX6MG3AjeQCPUab3h",
  "key25": "2JmUphnsGsivEFViy1m3yhW3F1mExgGxPwuKV6XxUimZhGnBeN4aTt5ZdY3cJU8vzDxfEkqjVp7yFrs6553DbqKq",
  "key26": "5k9zX1DML3CJvp15sjLw8s2bGugDu2KcgxRam2z2jbNeYiRp3Apr9i4V62okwL9dbchGsVRD5Y9eSgEKHfavqAag",
  "key27": "4Bs7xMuu7ciqBvH9CetGdWBdutRQVG3Ww7yP7BoN3VmczB5jW2zhSiAppVVAGrtfHvuUQMSnS7PV98F6jeUZk1cg",
  "key28": "4GYFnZXRpWNydz4DB43btVe1ABrMKogABfznduBWKkMrazkCkK9UMo8b5ZXeu3RNVVqtadrt5gPuYv6fF3BFmCsG",
  "key29": "27js6vdzq932YjbThQ9d29s9vtbuNGWmMbuSrLLdZkaRFKq64CVHPQCahUH22nZ39DU2m7KAqSNanuLiyHHgXGmj",
  "key30": "2rsfu4tdwhpTmPu85Z67jZjJkqs2jecPdWc5S5Cvg8YTZUQofCu2oiHPQVGq8DhGUFYhKBHYYuTKEG1wQJUgABq8"
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
