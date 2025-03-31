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
    "4WNjUMCwuZ7dcFnAtyYgEr5sbzu5r7EvA9b7DTBEA9EjxzJUmB57FwU4DdddM5fjGWgvjRv13TasPFVVphvu8pnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oPo7zt8fRG54rPNqybA11LYtjcX3SQ6p4QvZRU2J8yn9AKp3zUESn55yC9f8D7cgLGYR2yjVg26px7AqYaLaQza",
  "key1": "21Yk2znnv1SdXc7Ldzc4rbH9TCe5Pga6hwpKqsGGWCJvuWjw7vw9Nfg1szwJhrkHDmLrMwsKgR82e3ZPnFCia7c6",
  "key2": "3D5jHZJvH5UWuxoJSYVrAcMe87SXqdurNjv7bSete5qv7BMZZdfgwnpMEWwNBFdw9hYF4PnxF6cMsBQDWhViaDVt",
  "key3": "2AkeX1zPe2RVrAQagUbmUF2RUWKdQ1emARNhmu5ZnGyUPM9RM27qccSXk7GBdf8qst2753EAFRRN8z3pwju1HUjH",
  "key4": "vBFTJfeegar73Xi3pQqs72xdMEBFsqdqtYXRKtN8Tfj9DZ4LxvhMf5KEmXHPWAcR8sfiddRBJfNTMUonzpGRGZ9",
  "key5": "2vX5ZszsCP6E3DCvzVJ4mj5cdRwqff6ymz7CQrPux85ruEsXp6vbZ3YRLE5cAB5hr1BpZA9e3mGfeceCaSTZnjZ7",
  "key6": "3SvPjGiuqPLdGPbcV7KujPbi139hRh6UwaUdn44SYiyku9uQUXJnxrASp9ouk2m1SpYvx7cwogq8DoNN81e3RDH1",
  "key7": "5cMbRT4uSGEs8VenSxb5PcDgiyu8PPnzXEWx4bk6sUXNNVmWKLR9f89SCBwYyYZ47BdtiyFTXz4oeQV5BpmiE14y",
  "key8": "2wPmdScVE4ZjDjFW2Kuh3abLvpa67MMrhyYdVjoQ8kHab1fyhc2EBJX6EiyaruTnea5sW61p3FcWSVc7SvkfMTg9",
  "key9": "3Cs2pyHwa8WoVgvipHkd5A2uj1tBDs8921JSKihoRodsDzkL6XwaMWr4cWETQFoUa4jZWhcmtGmjJ1Xsmo1JShwR",
  "key10": "5ivVfk3tBwz34gqeGPY8gU7gV36C6cgAJpDtJKRsmuDCwm3xCzED3A2UcRUvxkYCWk98EQAh5HxJDHCJvkm1zgtV",
  "key11": "3SBCUxPc2Wbc269mBcvZvSTpB3qJnh4wv2G4L7ef4oRoW9ee6PhYhSZvxrQivrzDn5D5EvfXvfB41XSEpSz6VGZd",
  "key12": "4Kpwq8FqSc9TdbfXG8Wq8AWFYJnQ4Hz2TdGpxtvV7gnRyUf6oDYTM8CsNxfftdrfTZX1pQ8N4iHMjhn4xpRP5Sgn",
  "key13": "E7sskBpZ2h5pDg96x2UeWaomUrUgauvE6MpQXBxmVdrJP1Uzp9L7vms19REim1wKHnR9mD7kwfZMRZE8rryN8AL",
  "key14": "56NktBooLNiteTHoqKCHzSgphVFytySa7mxqDXHcW2FXZzRRqhfMUF2WpzBmHYRjJSuHNrXMV7WtjkkAVGtZTSAW",
  "key15": "usCjovTVnCDfkBjnAXYGZzJEWDVVqkuBeAwKjz8Ehs8ocB6VUwAA1sSuNDwZZyq2iNo1K2tjhwkqy1D4EEDKDCV",
  "key16": "2mDgTVkrEPDfp8sfPfBMsz1TJhDuQWbuSodAXWtTRc7fYMgenHKu7iDpGdabU8ygz5pYhJ2wQXhUkXs8UGe7WDYq",
  "key17": "241P9QAkY5jirTEFVr8cVYpcpdQa89FpodPxZGwmiSwmkEiZPP8PF5CBqGpA6bgsRgX7mUjQ4iqtC8PZxGLpidPw",
  "key18": "5BtKtzgDXiirFtKfZ8ZD8oUgfUKW3NApPA7H919fapwvp9bsq2x5X6FnPjwixQibbXYcjVfpd9HRK4vzgQnxoJiV",
  "key19": "2FxC8QZGbheSBkPwoxvVwU2HgE3QQQ23vJ1UBW8muFxB8MA7a9Hka6Hpqq6Si6eW5SAhiTPxPYq7dQ2BuQcHEWxJ",
  "key20": "346jJ62EvqqKQ47jvE9zD6KLAMV5XEMvaoJACHcn8UxAWQ6WqCEYq5ycHY5pt9XXWK4hmJunYegYRnbanRm8DQhY",
  "key21": "3eE5gxoPYYPye7fZXCajEeN7An2wn4FfSh4mxPGdi7HzPRCYNXUonW8vdMFjRfGX7wzdPUzYTxuAweDJVjMzaXiU",
  "key22": "2rZzG3SdbnWYMvJPywo2RnyfvStPiihoEbwFdN86Lftzy5ncshqqatGeqj5syLZigasUJH4Cefmwh1TJR1ctyztx",
  "key23": "4Sa4C69BHh2vRt66Y8GyXLpQKfHx1vp4HLunTofrHSgrqLxdkuKNdRvMHk5WbHmQSimgtoyottDJQ6HJ4pyawxux",
  "key24": "3k3JJ8vUuqjbU5hGw3RCXFfsy9TY7wAjWX5VXxfxD2f9HYAeDUjMexz6bmqe5TniDDYvwd5Ur8dggxs5wXA8jGmn",
  "key25": "2j3zwg9ETVKuVmNpjqxSe4XYHwCikpr6Ep9xSQh8sATDAAEEWLTqPMwahW5fyHSvFHzozSD67L8muDB9HCK7pAZx",
  "key26": "3Xa4Nx58AKZLzwVcpmpasfpEis7FLkqXffyKKohvWC8hQBpWUtYd3CqXQzLWLtL5tZnZtHvxo11xXRdKpSWgrsy7",
  "key27": "2rdXu7R2wXDQenZNWiJZk4xa4qeMUafX2gK9KPzN7SpKLNETAKD9uNkueKX769V7MQ3ziGZnnxHuy7zyPQ7z6Wor",
  "key28": "5dVTxwS5M5TPvhCCbQw65SKrm4fGNvFT6rfsEYvgSXhgQm8vXCPGpxcYEngzhFxHSWM8LVV3mhiDPAjiUrFke5YQ"
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
