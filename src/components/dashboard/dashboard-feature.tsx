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
    "23hWzVqWPCjxxraoBeiLbm5goFgqb91WDpfVMx1tCWynT6GufqsS17SnCBRjvG6a6FKXqGGtRr25ksnGUByhdRwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gcp79g3cjdTTF8o99yhKXUvgzJkGYnhN5DACCmdSpWtAvzvbfafMpU4ueHkM27gYikDnjQK28F8aHbnD5KoTUnE",
  "key1": "25rTakYDrAF8QSYpbuM7RubGqWJJFxmJDuSvaiVSEyw8iVeGif9yKJLgiV5QJPu8N52NhiiRujA8jchSzhC98qaJ",
  "key2": "3giDeUR3hH69aRN8wGGE9VywMiL8YAKnV7qRC62sW2gnD95CqaJK2YZsmJGNKhx1QXZgeXBfF5ACaS37eKdeyPtr",
  "key3": "2QsksQw8WA4uTbvfzTTBjVPWWzvHcanrCKtrSc7DkHznnLjaFPJiadBcfMuAaxgxY6gmxG67gZnknYWAMY68R1sy",
  "key4": "2woYjqqrZh4YPGXhzLiYFVhYBec2o4pRzNw2JVv62HMvscUFV21Gew3iTrXDh2JUa4hLb9xqt8tYjP38Rz1egHt4",
  "key5": "5BaFTxLi7rSo8TgkSWN6jg6fNSt7jTz5y5ChrRitbtH8WsEiZ8Yy2m9kyHa8Q11Uvir3EtDsPYJ2fEj87ffJy7km",
  "key6": "uQejBA7c1H8AhqbLi2HRKAcnknmjWLgt6Ro1gjJBHUuwh2AuN83JacaUdqGojcjnrXJv9rHiGJMWH33GgbvE5hQ",
  "key7": "4dDDa7ogr97tFGTf7ADRFHazFaPwyTtKPTsXJyhqDKbtGEM4KNHf6QPg4ArQJ5pY9XME7cfJDedhZ9ReQv4TiC6W",
  "key8": "56auhxKx5LTJs92wytutziaa5fXPp7FRHCv8PQF9BZyPVHsGVFcxVYqLAdsrSRyD3EKWrC6RDXUAiRKzWAmoMYQs",
  "key9": "4ZsAzQqcsRAV9A2VbvauSDbGT3JKLUMEvfvYudH2RE623riyhtRN1BE8QvHq4RtEygbEsbeHeYymkzFPuPkuze9M",
  "key10": "49MWbJ5yW1GcpqRDJ3uFLakQn7YJvAwsKVudPttSBugPZUjThHmyXHfhnSB3gJ5nHUfi98hHYiTyeLUZvkk2zym2",
  "key11": "37f5QjTePNP1wCy4gH2hayjd7sQgwyToW1E5mEAHXzJtprWa23gK6j3rAKDbTdzeoEDKSxo16cKCH7n18ySoYwGj",
  "key12": "J5oVVzTCMEtyhEe5kFixxKnSdSRiwYSeLRod4N7CLpqPSU6KDh5k3AjhMiCicdebmozWCwrYfwgwWT432ab1wUR",
  "key13": "5aRSvUUGzJYPXYog5TumDRRNHagv5LzivMKaXqbYhZGXF34ELKRqBnLHoiFkCd7E7nYNQ8aWBhGNN9EFzYNz3wnK",
  "key14": "4368Lh8TapGdifv5AAk2m8YpZzZYbGnRkQTWRKTdNnmjND3YU7PQLabqXAB3DrsE3UdceUaMPDbfPK8AoNQpMAaE",
  "key15": "cdWvsxSDDV42PoMPBoBTonufoCgYUwgB97d64xSfEvSbGUx4phgV1szreBAVHKBdMxHVGtDJR5ycxW7SC6daqYJ",
  "key16": "5ZW3TxKZM1zqBLuLhXQrpEdRsp7NY38Guyc7JE9UWn5hPmLkmB6sdY1GiBmejmeVbBXxroZuZxRUPBeyGKLcRFnp",
  "key17": "mf2BhHFJ5BYYTeYJxi9hi2YqzgmGgTNyDzk4Djyya4mDoBr4ZQZBCAjUW4xnUHLM2yDU2pd8cwnA6b3F5F3rExU",
  "key18": "2tPNuwonAgxnVgZ2ERZq5daoiDkBdyKh2Tcs7nJgXeBGtvK5nkGa16eB63M6ZVXqK8tnigm3vxvh6UQZUj1ZEikN",
  "key19": "5Dm6gTVZdFxs82NagcewSKSYdEG46sEnXQ7ax7pjHVLS2Ahtb7VkKHRZmvKKuNHJwfLEqm1ivogML1VfCdUFZjXS",
  "key20": "5S3NXTaCW7CRf8WGeaoEyyawXpVhqkCwc5ZvMEB4kytTmpdHwjAptXPPVCfvy3pg6rU36FNgfuNYQ7ztAA2nK8Ve",
  "key21": "5ezqw5P71m6X8coxg6gYzTxw1Y67xbtngZTxtaBtR1YqNc823itVPnKZVXSQwZXAKV5CB6369JUbKTtkexAgavDj",
  "key22": "5DTeFcAeDoQ1bAY73ggV8gd3SndnmvJYDNQvzu6x7RNVDGzM91b5rvngjsZTqHRE1HPtZ5JsagsmKs5QqR8uHFQG",
  "key23": "2hec1LNzBQowrADrJ1Nik8TTCZa4PzHN9ZRYmQvJHQi5rd13Fj8eZaMt6cEh4NVhkenyKWPRwb5Ji2XDiVnL7hib",
  "key24": "3Wm8d8wdtnfcFALqSHovrBQ4QCVtnKc6CgLoyAX1h5uqZ7JP14YyUg9c9imvZbCnj4TwQD8M64qB9b1Sixd2gHye"
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
