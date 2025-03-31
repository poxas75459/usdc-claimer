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
    "3BEtdVnuooKEBwVGSpA5Tq2iAabsdRA811gBKmCUAJsZDptUX2sEXaF5Zx2v6JZr8tvuFafiHAgbSKXDeT5zyXeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4APsE9t8X5cmxVD8mptUpusE2dW83Qgt31PbFdCBm1LU3Emk4LXhiVuC2FfnB7HGn2DNUXNLfXK8mgC4j3u95E9M",
  "key1": "3JVR2TYo881Wp2xFp5meRe3v4kkkvQWz6pgYyNVYQJL5VwNCX6uubwn3Hc8QWYcrUHhAe7QxxQVRFhPM8sjKWTnG",
  "key2": "5Mfj5FX68mRczw2qQtJTnHhLZgQjwnYQef8DF2nHzRUrpbP8psrX7fm6LqYvVmFiUhHfyHjfeqvm5HkX3tosGbQc",
  "key3": "kCmwiRxASNR9XWLVArCpshigQZu2mvU2K2Uo1ARAFr2xkJ5syXoYt8MJXJa7WLhxNPwhe8XLdPrKWnj15xaKJYR",
  "key4": "5mKhBw2vBLvqpvd9evCdK9BdvvbsvfrSAExiPd4ggZH91SPfHsYmVmD3zDqsep3Zu4666zAPBJDHdAWwUu1oerqF",
  "key5": "VW64Rps7LQmWCdU8EeVbHxMTqxZGZmoH4LL2yXLbGRKDhn1LgGbWjUSoaQwgHhpBfznrn2cmr7rEyqF2phiHSRU",
  "key6": "MiN59RjweDVap7AJ3pnMxTPXEYMbG5L41bKUqzJDsArAEgyyJViwkMjfmy1zSSYG1WWed1aNzuejP2xBiqMasWq",
  "key7": "36vkukkGQAU5PxMR4WfZJB7QFW5sV3Y4r53bFiv6RninR725c4frXTs4SXwxdSPSwqrMci2jB2X5ZYYn3bjNYPdq",
  "key8": "2QAjwyA9mM7Hgj4JTmHrQasQXnyRJvQAMoMVKRWPoRd2DLEzrUXs9fJU7sDu4RKGHgC42PVsJpUa1uz4dgspShDi",
  "key9": "4nqKFhoWGdKaCs1ArYUJgACDLWXPAJPJyPVdCm8h6CkoxrRBs6kAucBfxoTR1u7oLxTQStaFS6ZVs5Tgz9Ak5Eva",
  "key10": "4s98HKGpVFE2k1Twfh3yPUtVvhwCitEBYhYF4R9qfBdRYfjGAJJ2Bznq4q9iSXPDw1keFSrYwTzfyGzEpnrm9nMp",
  "key11": "jq1wHPwPaPaEWdTSkp53f1ZXKsB9E4B2x8MjH8Y6y72gPAcr5rZCKP6gHUAF7m8o95UrDzp2imVzhySW685v8m9",
  "key12": "E9My7wDg12D4Kjg72WLZwAqbsfyfuMa5HNs4vqXVh9fpveRNxS5UH3gNJzmzovuex4zS86QfqHzpoiaawA25gpp",
  "key13": "3TV5ihjuu9xByiyZmc7odqVvEypdeErVrnd2ZG2PiHM6Mpf3G4DGFdQig6KfpLoMo6pS7Vf5hCEGEWSemCCZhe8V",
  "key14": "h6xSzFUcwYfJZh9dWoDADFtstMizWMWemoccEsLYo5LSCvUmTpcU8k7qgM3LN9sHeHhX9zB5ddxymHvoywVTYsv",
  "key15": "2deUmBci132nzvED7kakD4f2YrNdtXfEsjXpEvf6rTRNpnS7S56Fwmjf6xMpnaRF4gubmteqGiVC3R44Hp3DrET5",
  "key16": "671gWE8JPadAmCtFRpnyxhWGNfGZGs1mfqAAwd1yfMNSyR8EqfaK6kLWAz3b4UvhiZn95j7vLyQWTBNEay3Wi5ci",
  "key17": "5U1GK4afj3zBvHLWxHCDnRQJSw9fsfUbYQqRai5Nd8DskMM47mhdcmuhMRYHKKTVJRNucnj4VZqwv3XoAWh66Pvz",
  "key18": "2NbTkf1zZy6deJE4CjBtzpWXEpUa2ZgPVvEM38GCsBsm2n6VdT6FKbDygi8N5WnsefXAmCNs2hZYLW6pXMUpHPks",
  "key19": "5k12Pzrz2zbJU3wEcucME4G5ob84y62CZsEj3dRcUxtFJJocfCzUKpkk3nj4aKtLdYBX6TZoUWcGepqzzHLpG9LT",
  "key20": "5m6guWreF7XkHEqZDG1X5vJmiWMBFoh3xMh2MabwuqCbQAyRVreQapCj85bk6rCQ9XugAYZQEiRRx55CiRTAfgv4",
  "key21": "Qjia9CwHD9n31Per6nz3tEEyE7xYSD62ZcXuNZjR2Hwrga7F9dw9He6wXyL4Q2QyaFzDhbkLzqq36nAjb2E6FHC",
  "key22": "3yUBj9v6q8vauH1Pz4iWc7KPadKwM4poQ2XHweNEmsF7DZX8k4dzPCzhZnCSGAXG1WcZCHhfw2YpY3Yj2QaoUMz1",
  "key23": "5r1YDFKNjnoVc3we7ERu7BkqBiuFoLBcDovhKtxpHnesYdUmBEgUbRPto45xqr2aSDUzopKsktufv7WMqBD3iABr",
  "key24": "124KPsQXsKukPua9j1eRmuNz4i8NkPUpkb3VPaHgesFcAnbPmC1F652VV3e88xQbwVpQoXDqy5R72SAdYXzEqcsN",
  "key25": "3JZKqzuYfodydDW8uDPYCUUVstxzvGautQ313VCMDLZnshA6rfdhpJKDujoDJ53symkmtqs1cSoN4rakCX7Y4P4D",
  "key26": "3Yybdbr4GnV56WyPX4oU2HRHLWsc57GodV2gX1viHLCx7dNGwitjWubToLThB7zfASMoaqqDRfsRbkq8eYPim5ug",
  "key27": "eonLTqHEV1XKu2geiYdjNDDqwQiSKC6N3761MC52ZvCo8CVdwbUUt4cy5Heaik2P11ziZfojFpYSRsLSyE9F53k",
  "key28": "3uUTMbuXgt4niduwxFbpAzvbCShL22mstzfXzdYWRjWnr2RBDJ2PV75kXR9BcPh1cFbPj28szNqnGW1kV4rszSKV",
  "key29": "39QBaULo18Xbm6v5KhFjy2LtT3MyvjrCUoL2mWKKxgEzRmj6ek47v91XswKsLZr7AX4FptNcrtQTN6CUERUrhofa",
  "key30": "dDDq2qMdm2SkgudVgTPnRTZaLsqhdcgmSA1qMMHzYEEA4XeLPm88j6918evfkADfuYJXFVdz1JP69iSUaUrhvBX",
  "key31": "2UtNNwLS6iYzbhtKrToAvstUcihE9TUJAoM3kpDas5z3PfRjmv9ggG3XW1ZddkZttfigov3YW5Qed5Fsz2F9KGwo",
  "key32": "s52yHEirRV81HsxHSB2ZpAq8PxsphLg5FMwNtrs81ratKwBVgjn5ftXe6yHMmod8LkuiCxarghaWa63NJwFEe5e",
  "key33": "tVJ8LVmHZiY8NwpXuQArjoZo6EEkyGxkYB36UAWS9DKKuSkyuqDpDxcHqxj4v19rt4u1VaxWNK69GzXbUv5GGNK",
  "key34": "3C9Dcpu5J7up2RJudndTm9wjN5o9ik7P6PWKoEjV86tQ6PNrexwf4c3sdvW2rmqEy4aoPW1aZsJtVnxpC2Yr4FZG",
  "key35": "51VEdDM57zvxvU1FSu9qjSs3uCXiZJfMx5Hu1htn25edAHtQktvruH6oZC3X59wmek9mrmsEeL3i56PAX4t2ufi8"
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
