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
    "3NQPBqFp3Yq2uptWxrvBZmGDmf34p2QwYm7ntsafRmFqvLdCHwypcWcm5P13E9JR9CC6eimrE7XXnRG8mcSJwUEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S5nzs9uWn7ZqD2YZ9f5fJWvu8scmFYZWo7wMzntyPdUvPCa5uVVK4bo8gaZazPFj2wVbUxVR2N5q3azUp95RPfn",
  "key1": "38a9eB5rULW1d3FaGpxSgvrZa35sdZQG7MbR3p154PprLL5VqUL7ueKdCzqk4xrGwUuCRWasfYXyxAZTE9gGLhWF",
  "key2": "21xAWx4ppDMtKQ1ZSFLWuoK22Cp9pZZbuBMajmLanvvZ34VWaWBVTxCx2g8SGeRSvvBoAC1e9aCLLX3sz1tYoUSn",
  "key3": "4iT6YxSUsbfsthaVZwaZveBVhQqkt6WdXeSizeoWYhAPNn97hp7Wh42USrwz4AUfHCCN7NuYMwjK8UpUsXhNeebh",
  "key4": "3HH4GYN27uegbK28rzPb7obYjHKxB5XJDy2HkdyvfsQDVjRtypDDV4sR45EnjokegKc4vGUQMvYrbtnjzhk2EmDi",
  "key5": "4t6h27SnrN3Wb2FAsRHZ15rpHtavhkvJG4vgrjSADv76P3NMJGdYk3i3m9D2iw8qJSCc8bZSCWrh5jV9xfcmFJwE",
  "key6": "CZ5FxA5WHYYvjDVibGoU3vtX3xx1uevnVaHu2wjGLZiQhpumAnrXER7RVCdczBvBvoPHdLTuF1GQjeDDBXifZ6k",
  "key7": "3tvoaexx8tpqNS888snhTQ9FVe39DMb5xxx8zjx9BC9Ajp4frZR69p2hedC44QQQxMLCK77kubojtuQsbAhwkgMa",
  "key8": "2ajwF9HfwPMGcLDVxgCwB6J4hLUSwJTShjqA2gq2XNGj3pt2V2TgmJQHSxmpv8UasgMxbf1VtdZ5G2zEtoQbgojr",
  "key9": "43AyyLt9gksKQEpuThzBg7ouBUV48uo2kvUpGzR8LFvofw95ykoSG26RnN2Rn9qCfCv2wqEqgZCYx9Yhg7HWRcrQ",
  "key10": "2PegF4U3U4Eo7qbjSs5N2JqLe3cusY6Xi5hZUdWWjZKMEyPQgRMJzSPbwYP3Vow6qmBSCPAbojXNVxQfZJ7yJaCN",
  "key11": "4wXN7znKi31cF6zUaTz6y369ZdRS3QHTpeWZSXSUCBB93ZNrSA8F5MRbA81ew9HmRidJc9ymBZQ5NzXFZQpYrigv",
  "key12": "4wJusaPdJzppQJUrHqtJSZUVyPD8v9cGy3zPphwBWKaBguZAhFkDTr1mHhMB9T7qWCHoggv9s2tWk4fm6Uq4cXWf",
  "key13": "62zmMATaccNQU1NQSCVLmzTQNVRyV9UdUNLvsu4Q15d3iLCH4YsQrtR9SQft6a9D3nQs5L474Dt7Q5TY4LbWRaee",
  "key14": "DNehgxXNugKQE3kzNnfAd5iBkvv5jR3CxMPcvSMR3yE7Vmimd8eDckWm6vm7uTD6mvfbmKm3XjKUz35Nwq4KDsb",
  "key15": "4WvSDpJehoY1j8Vb32KX14LmrUNJcP9ymRqU8Zyz9r7Agi18WtiFLVtm4bo5LkChQ7WmUyVwS1xxs4fQaXoucAEi",
  "key16": "F2kXZiAuDSCn21MYWNczBGAJXNSEkJ2R5N8KtxXunLoT2YDSNQH3wah8PXPxri9VGPwGi9dHLKrB1cgDtr5cDUF",
  "key17": "2m6ipag463pdz4XdY2NWYRYfnsfLXFAjg16uZTWBuWXoyfunTfZ78Hc1JQRYdoCBr217vRKKXvvEbEpGHxBVQWTA",
  "key18": "2bwp3zSZ2CJUsSQR1iw66AWWq16FRKvdtNtGZyyFnHSFapu7xweuawz5TUqdsMk3DjnoVtSK7y8zMtncMYv3wwtK",
  "key19": "5NXT6JFA4a8KdJnG3EAwQt2SV9ZqSrKntxze5FrkkEUSd8V14Gv4wPg8RnJfJEvA2nVUcKmWFf2idHpogy1JAvhv",
  "key20": "2sFRFMWreNE6qkqRZW3bxS7gqhXX7dqkhaAn4R5JapQ93Gpryk43w57vzV4yfDDrq5okYTts6FZYNhNZJ4bnxsH4",
  "key21": "2TyrY9pbLnGbKvF2PkqdPejxZNuKuE5t4DXV55S2rsioWDXjocUYKoABMccjZJzVK17zQtKtfaaeV7U2xXrLmgkN",
  "key22": "3sMyT7WmJjy4h5Dix1MH8RqjKuccof3HNhoxSYtxzsnHEUSzc3qdausqTkNvDRdpRHPQMy71fQpq6vu4ugUihC27",
  "key23": "3QcdFJF2PGUQSQMRLSuKZacWxhYvpZ7vCQu85Ct8h1zz4YJPS1dtLF9Q73XeWjB5773EiCu6FCVfELiF9bvUbae",
  "key24": "4Y7hPxiqKi6xyrqwrTvpr7d4TZuncupx7hvuvnQeA2JKw1Ws8LTpJccYrDb3hT9S7gPU725eNVGv7aq51kYox2TD",
  "key25": "4RudZAWavZJJEAGqY6nAfNWxUub16sS72gzLzx9jzqifSTFzvnDP25HyCmkq8KakkYitaPomKDh9uwfXaJ6LBQwk",
  "key26": "32ZkfBPMWbyrspwB5EyDcXNwKrz5n8REzZB1SpR1AyF4gMPp9bFSNsBA9R19PGH9rGgTH1sVdCcgmjdis1EtWw2V",
  "key27": "57FgK9v7tAjrYDKZtE5wzexzd5BETBEghJyMfyK91eGXsP3hyFB7nx8QMJUQTFnKmZP8mzCNtcEPxjSbtEY2q4ED"
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
