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
    "v62GJh4nfSq92kic16tFTA3QqPMt6pSS1J7E5c96KMzRvtts6hXvvd7B78JV2XFDa6c2EPrEQ6fGYSWxjeFy7tU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MTh5YWk35d2kNsLiXn3RuN7P3VseGFXY3Gv2JfP5qRCwWm2R4qcHmHjRNfi1iUUEMicTB9cc8Ni9BAtVRBfrWak",
  "key1": "3pBo3NkN9imv2qT9jzVXQcKGgn8Rs8Wq2zUuSFi9SE89nnGG1E7CKuBo8mSr1c6jT3rnLuCDkpcjySBC8mHuu17z",
  "key2": "i9r25Nkgk7EiSw7ric1Wm9VTWfsxswzoTz3CuhfmtCHZTJpQb64QLTeaD3gT5BLDQDUgrTAN2UKSn1enJioAnqg",
  "key3": "2NVJXXXhm319sVQo1tNU4yMt6oPKQ7N9zkMrwpywXhkbTevxKzieQPUJJ6axz2xaEE9irQWm2KQMq8KTh8TJJ96k",
  "key4": "4E3MSJY9FMNn8myemuzrL3W46DtJJ8ehDqpcnhBBREGMPqsZGxGsHuV1d6Agn86cKEuYzPkcezoJi1Ld58qM1rRK",
  "key5": "2XMkxnF1ubLc1nN8CiH4qSZYJSnrguWYtahSWYM6nQeRJne1vPvxC9pFbWr8euJCsXHQQw5bmbbEn4bGsaa9mcKg",
  "key6": "5Dw5wuUvyB6X4bCUjtd9RFRwkmT3vWbuku4Bgu3RuLvjc2Vp3P7NuR8wBb9n5A4WeyuBcoxEcEGXQnvxfuwJofna",
  "key7": "4dMsBbj6f8zoXveraJwK8XSrzGicWMgGwBCwtzVSWbW4NswLPLt21VUJwFmMtYVGWRWZcA5Y1v3Rguh4FTvxEPPU",
  "key8": "66RFmWmg4GCLyFk2bAgRg4E9wjHLRrb4dkpcPFHP6tXEqsdkUrFPcEC5ALtYRtDqabpEfqgESUU2VYrku94Sd9Zc",
  "key9": "daEAnskLNpV6KHdTEY9pMRG3Y9KkmVwtuY29L7SGPWGtbJM6GHuNGmF31XvBX2cCEJqaqU4bRpQfvhKWLkt6LWZ",
  "key10": "3d9cQ7WE7nZgGm7ieCGHjC7NQ1YvVHKQtdBorDRA4WrjScDi5VgJQR31LBcogESd6XsLmdy1pD1D3qj87QWGMdww",
  "key11": "5F7DUqVkhVgMMLDh8zKHChy6jZNAsActxbKKwYbxUUqnc9q9j4qF51E7kupRnUtccaWgfJoBmWH2u4aWTMGta4n3",
  "key12": "3SKuXDjjGZ9vw18rwTwshoQYDZ8vRKe1ETSsyxbxwtTPf27zboAn6uJoNNW7YbiiKdXbKqPDTytH9juvKjh8vaWd",
  "key13": "3qYBxntPCCbFFSEB4H7Y6dV82tFyBuV2Mqa9b1iJ8fhcSKaUQokNUHPzbvZm9hWvpaVioBNTzXPWdvudm9hT8Yde",
  "key14": "2dCQ63GAHJRvNnxvocSuwXgEyNynhyXc6rAh5nVxWcZZGhVaTeHALSAQ7g3TsmukWWE6AT6Fm5Aw9gZb9V3R1iwv",
  "key15": "3EEhCMSZJiSs98wcTHjHyQbDF3cPDj9i4AZMdMSHUAu5DmDXFG7LNuaY1FAKqEWGDaa1wsD2R6HPHRXVY4ZTSHVF",
  "key16": "51CfAmn79wDCozeSff3MU6g4ap4EV6zFeSy1ShvhLdJXtLAiSFhKdnEL2kJ6jyxHV7oxjxjqdxsksFbUFsH2GYQQ",
  "key17": "FhWpDHiD53rdPmkGigFFCtnpxrvzrgR8uU8F1eMunzQXRn7P45f6Hd5L5qXkrbmuueX7hREDNfBhc8WWGMDbrjU",
  "key18": "tkWbWceRvHCqXBzd8MT387NZ6qJo5RDQcgZjcpTERAPAz1aTqx2N8qfAH1GrQH8zRYwvswMNEhbjjcuygMgozJz",
  "key19": "34AT7RghYkW8NpGZUz6gCCkjdCVGyXJHuzzmCh2oSczNuSN8wyWhse6EgTJ9WoPz4C9H6eRdwbZFqWZqbsvonWMP",
  "key20": "4HzubzrZayt3EqszVJX1kVHY36rC2n9Pvx2VpSz2obd1KP8gV3bbKqQN4D7FP9NinVkwgzwawHwMWMTQwYsQGy78",
  "key21": "3ze2i2Rgb7n84CnHQJy9662ZnHPDWns5QBYCMggtNZ8C5N7ZFnPQxXpJBwLwLFL85SFuXSJP7Si62GGiUBXomi3r",
  "key22": "2y4fdaEiF46Knz4ZmoCfa4V1VgiF8BbYTUZeuFfTt7E1XQqxW82qG6gLXa5NBtZyC6PhHhdJ3LJFfc8QApnwLPWq",
  "key23": "2c7NWms9sTEd5cbbicopyHb5ZFj1MpUb84sNdfiQEDXPqVNHmjabgLk3xDwV4mbCJcVE77fPb3k9H5osTPDjEqKz",
  "key24": "uuyd9Eg4Afe93wx4sTNmPULT8qucYqzCh9hCbNbdeNGGQcNQZhyeKVUzSEURqTgqLogqrrNsuUK8wPGfENgRm9k",
  "key25": "8VyX5zWE958yALV8EA3wM8uw3PmYi45384JLS2R68xzR5cyhWuyrEMSSDRH7uaBZUbKnufYtYkvEtMrW8VT6jrS",
  "key26": "337viEjvFTgRKhgqr2u2ZJhxmvW3ABw4GY6NRZQqbHg7SLjP8RALcoSkk1qBJLkLKYgZEkkqsKHTgyq8aQjzx8dB",
  "key27": "TFy2DyiTrFTrVVx7GAgfxiCedMqpqBwLVh6UboEtWc7etuJfZGGKqFbsp9k2bCg5NjcPyo7W12Lhe7tWCc1kwTv",
  "key28": "57s9niq6MMfSaywwHgZvchgmdQt1WtpdWsqdEFrXuHequEF1hdxxx6wD76YNSyWBGuVh5WfNtWBMbcMTrjTfqBs3",
  "key29": "3yUG1TExipR5rBPz3R4meEmjGDtoY7JX25rNihKi3QFAW5Xe4Tk8J2mq3P5HXXCznAQbzw8ozZqdi8aJBN6fHZkP"
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
