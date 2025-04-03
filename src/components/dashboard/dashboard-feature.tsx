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
    "3raQtELjxsPJTGqtwNxFn8RfmXWewKKFMxzAz55tn6ymD3LVzxUmDWHL3MCEzqwjfqj4Zy8BuvccjMS27bwZnKEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kTLfKBNFWWPi92xLWJFWwaoV8L1Ww4JtsRMUHocVh477JDuGVwUVHLWwMjFQ7humuQMo2YgqFwkquhim4iNTLwd",
  "key1": "62vwTgxoiLhy4W4MCrgwK8qmZctKfndbrgVxTMRg8kM44U1dgswe1MLTEZQesTT62UCZKnDr1ygUkKEgsWgMnqxg",
  "key2": "43gJ468xYyeGA67Vx8zvE7v7mogCzCcQnPQbkgJq4bqc5hRYhc6VUgkFrxNVKYN2Uc94PXHiPbj1PYoKvTnRRCUo",
  "key3": "2gToC5kz58yUMxD8GJMHXkKSVwuJ5fMu8kHnCprGArxCd5D1rk7RaYEYUDjwewq3JSgAmXioa1BotB53qWa5KDjd",
  "key4": "RR11iBKKz5dyR28NeKc2cMYxAAn9PAyaopUG5gFrL7KmoFKUHp63QTfuaPQKcxu7wNFj68W2nicJqjoUdmSbmAF",
  "key5": "4keYZDoZC8usUi9cGrDZUoDknYL86pp7UT4KjeyPQ1PXbDcS79Lya1WmmsaEwBwCmrtfubxE86jrZNQncxnASVXg",
  "key6": "5waVL9mJjkE4r575bkJCf9TBqYBqqzYkaecUj1X8kY8R7pzVrJeFBsm6DUQ2CiMR1CHUk6RAk4wWYHoxS3N4Fhi4",
  "key7": "3acAaBfgwmPjcKbJxMyWWqSNGaF9P3ETtC2rrrnPwSFChXy5mFdoN8iindVbNDA8tg9qYtqB3yuUmJs7UpKdMxQJ",
  "key8": "5mXU59ThTKnhmyqYoM4JyzA2dxmZmPAYM4JiDXxk394MEB8fCeyrSfqfCrU4sEN2Ss6gpevFVZ5ySjpCAwLV12og",
  "key9": "4DSgQKxBG77i2z8NVLFK31uGkN1U9EYBjoQQjqpcDnGCr5QZ7FP6HYmDAFnnJhV1gvJh3beJwqcrHJEEurN6cpPn",
  "key10": "5ckx7DUrnyjBnUka1hAtjvBw8uY7RFLCdymW2EJWpBbshAXL2bG1RDRhg8uk7n4npJFi1oiHQRhthz8mZgcoZh4f",
  "key11": "52wnfpah6rKkj4kABXXF9bmm55dcJWVQzvPMuxBqqz6iMPBhFQ5nDrpbdK6yduvcg7pYfcqe4YUTwGCWBvcdNE3r",
  "key12": "442yXsQohXBb4TXSKt8ALVtiCRy4hXhoF8ca4fAcfLjKyDD2WuUoxFhs8d4g6Q7yErfW9Vu1By26d3NkwQqVgJAw",
  "key13": "4Zc2mQBquxaaytW94fTY6PCche9s8AaXgcwFSCmzyHhZkxoPEa67rYEXinkYaHFcC62UdU2C7ihX22nQtT1tsjvN",
  "key14": "4R1bfRDXuvTBzT13H5PaCv8n3rV5cnGxwi13Kj1BTXmyNfKfdEoHSMxUz7fQK4KWq6ZmSuh9hXLyWb8t7TCkWSq",
  "key15": "52MCsQ9jxYAJjj1MEjruM5j7ckci5bGGzfKLpc8oNHGxtKS1anc8SXd9xqAdFTiJvig7Z9EEUAzJziouFaoZohAq",
  "key16": "16qGMhSgitV2cZwuaGSncSxnyZmrExMHCvSZzRnxZdWTAwdwi9YiGTXsNK4jDvZ6Ch4hXyrwBgw1jEzmw5tsn9S",
  "key17": "RcfxWyJpFSmuimZPz7FqrnUAeLAi1xVrvNSbbMdYE5sUaUsZAK4qq3LpfhADGcHFWP2h6S1VKmkFPh5134Jg4Yj",
  "key18": "USeAYNcAFWTsuCvUTK1EruiZ3h3JGpEEiPGHdAKwFuYfQmbRWe89C4fmEt9ZkFCjCrEF6k6gd6vc8CGvVU1yxs5",
  "key19": "5G8VYqteGG7uDNGGbovYSBLUtqtj2Cop49LW11MhZp3jcCiWoquENtQtxkMkh8ZtWkR1ziYcNfsVySycVaJDFejY",
  "key20": "4VMF5puhhHyW3NcSuitgY3apz4gwPaQgC2ViSZDroY8GMYGGwsnAqgXPn58sFz2JQy5xuCadiZ9YwnCAmejyjrtH",
  "key21": "xpQfdDMWhxUQNmDxtf3rfVVJonsF2oepxQ3W4kmnTDHRwRyWXkrCZLjq5UjsFzFFvXjevvcH66pdy6f8qoV2B6y",
  "key22": "4VPRc4GvsH3s7zJTAhJmh3JusR4o3h6Ta72s3K63obN28H4Ukxp841Muo6mM1pcWhPnyhADVPvVYPbBe2sK6dJxn",
  "key23": "XRprm4PnLGwJjnywuCRZQCRNdVsg2cK4DwcR91otDCszjQKkoZQexUChpHKzf5iBiAqLcByxGGYgJBDka6oTowi",
  "key24": "3GnjYV7AFdhH9Dt86sq4guudUGgSJeLjbYWdLGCdWwARTdczj8uyy26NfaTQ87fe7rGd31n8K2je4BYmujX5uUrQ",
  "key25": "2JDTH3jcwnExLbasNxiz8c9JFBuND8oqGh7h5RnkLAQnqQKKsFwJ9wPPuMJgKdqkk12HhG5WU1kZSdacnJJUWaGY",
  "key26": "3LzAAqyZYV5wSLLrzeocZDZTFKvn8H8QqHReui1CaNQZpSeU2m55FwyMDSFBG33b6MmAivEFVCLpg8DsfFFogapu",
  "key27": "maui3S6zdB5FeLSf4hzoANnxWKNq9gFywEk8EVkofhVnad8G8dtG8ZbP3JjJNYCAVJZ8HY4DYD9rux7x3QyCxzx"
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
