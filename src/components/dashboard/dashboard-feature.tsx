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
    "2TBUCJksiEJ12ZE9fEgi1ZkmbbSuGAWsUDMW9WbCG4k2MiV1ZFhoEcT1n2kevmPEsVTca9QmF4sCjvjWxckoa7bd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zMibwDFAcApuGJvWJD7jVe4CoGYJDidNcz7JVc19Mz7NWT5SgGybV14rpS4f9UHcZeeD5d6DWZ36a32QagCw2i7",
  "key1": "4tU6zMBD6uW6y6Sb89E83jFhwmRkSQfQHGdmowQx4wSWtmzmzqdaFnuMxcdj9cw2N6UeGkSjUz2gUy6JUMSfpXqa",
  "key2": "1dyk2NZpuzqohUrm3JokcfkKxzZPY8yys2Fg9RtQpC1nRdRLjWGTQ53jQjjM8tSHWBQRD6JqhSkBxm2kY6dSo72",
  "key3": "3am62pL3KaQB3Wzd4BFFhSqnT7ZhPJdghkWp11QhLyBQX4TgSe7yADz6sfNPPu9bzQyGHHZ2wK659vEd4Rfzgq3r",
  "key4": "49EUKDDSBRisNHbt5xBjdDgJTLTNuUGUnPDUHa48GmnHSTeBxNfjsy2KGaZJPX5y9Nws3PxzUsEgTPGBfTNBdxfE",
  "key5": "58BAp4xk8vKGM4wt3K2ExhNdiH2c9snEotTqFQjkdgBDZssx3CeAEAuiLbnVR2TeYdFPsW7L5HdkMXWrTns2FfDH",
  "key6": "4tKs69Eq7E5iM7rQQbijmy6oPrmgiiRN62NemQitW4gdi5NhV2Z1p9Zepg1Jjg8qV32uZjbb8N5ErVwrSh67pBy8",
  "key7": "4Xm7C1Wi8BEVf3cgAeisET5ENZZ78AfctwjZ4RPa8ShUNuFDYywFYzd8jLWM8itXLgQsc3YwmSJpSFAYKCW9X8Vz",
  "key8": "4xwhp9tE9oGtqvvJ1WsnoJUXwfoZyAHm2f3MV7EonPN3J3AyL5FpfcoLutLmbdKZ54HdgDCctYC7yknH1TfWUFsA",
  "key9": "zQFbzqgxfcLGGEF47B8y5kDFUGCvJ5DBfbF1oW6jCsdo1UVk9tnfsXe6NGWhi65rcaJNFZ7pvUrbLp4PTZuFyFQ",
  "key10": "3eJ1R8LGPiq1qqQjY8vQNxZQUUQi2ieQ6NiB4tiSWkyYbAvdUuXSam8XkpBvjAviGm5J16oe7p2XJsEcci6ajfPv",
  "key11": "43PxZQZV1vV1pAaQ7TpXiriGMGrCV3TvWGstm9ab75CV22X9cDc4zAi7PUrA88yCis4UBeTE2zoYN6LDpoawUbz3",
  "key12": "3VGShGZGQYjtK45xzU1tSn61RZGfPcYVY9Pv3vKWqBPz2NCeGceKA1rjjEMyBd7EMuYacojRaE4mzReTMzgdY9S7",
  "key13": "4LG4LLmYmhtAYzCdrkMDu96SiFqUXcuaRM5hmF98UekL19rLYfMLV94Vn16mSt1vye43BrWCYoX6LYTNuL9de4yW",
  "key14": "2rvcRFvziwAnRHEDuMJGL8F4BrJtgB1xhvXxbLAm3CbZoGVA6J7YbysmuLUEM5yPHfF3BgiZo56n1D6XQXagsKsv",
  "key15": "2fyPCxEN2apaZtQ44NTETauEqzFzoMPYsJh7H7PLE3oudyYGCBV6RsSa3pWvBeTRak3aVMDGQtLcM2Kx1zQEsfnd",
  "key16": "3FPV29CvuRwLznwgfwL9PFkpHk7xrV1rMWgSQxTSALTapR9o8iSvSKhPVZL6vnp917VfYh2KwwBxAmgW1aYtabqt",
  "key17": "3xZCt14PZbcHJ7mjCk2uvtCXSVP98Fr7aXrx6RahfVivpzZZRHwocq4jqAfzi7m5GBi5LF6wtNsDeK48jZanN3ut",
  "key18": "5KU6zVx9Vk5RzMUQXhEHDnMiA1iti6yaKCGNLYFYBQ8GTEaJw2NWmdWctJPj1jFnoUYNgeV6Q62v85ADuzeREeXF",
  "key19": "XU94xDdWvaKHwPzeWW9Uv824FNTTTtZBb4DBxGrd6QY4Ec3nLtCz1VNAKdQpua8D6suKCQ29ivBG2XZAyjz2vDT",
  "key20": "27DoURwgfGVTtk3KJGCH67Bfn4bScASstQnYHCGa5Ba3oWrKkWK8vaMt1XASXczj6FdxcB6oHTgdWr4S747V18RR",
  "key21": "5iDwnuzSJuEvo8E5ezDZtBYGEuKiYTvcxYpjdciewxC2ENxwUx4BQChKcs664GyiJ5Px4NEBc5q8yhXL1BJ3Uruv",
  "key22": "RLBTKLiQRQco6aNMA1KLArywoR2XUdbVB3h7Dr4poYAi89g1Bi8ZzV98BzbPt53HNa3WXhSxDhZwSNhtPm93TSK",
  "key23": "hfXbyNKEDayD9Qbqheb7jRBjdaX2hq4vZZz8GHDFJ5jBraAKWCzFVjKiMWRGr1g38NKRPTNK63gQQ8ikffHe9Dv",
  "key24": "5jVd45gRSU4wuT1tgxkdWXha72PiiaNNJhhknnefu45G999LWfcM9bGozaDTfEpgSTwGkVsfPtN69bSfApXPmkEU",
  "key25": "2SuSVfWX4ZQgXTsxUwkvMR3CuGoEK9T5YZyA4xdnhgpNiN9Tcw3APR8u4E9bw6itQMmqMvt391CqAtFh5d6NVckB",
  "key26": "1EVmKoHNUmn62qmnphF6ciAGeUn5cQo1WJaGvPZSDcDb97K9aiRaHNL7xKC7Xcnn1LvuNmCnsWZgEkAUPgcKbkA"
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
