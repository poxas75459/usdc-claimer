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
    "3vM78VpAweLfY9x3dhvZLS8zJeTSagyEqa4ULEBu3U9wboCBUMYrvKxFbje1uq4hjxhSvcRmC8fhyb7YxK1hmHXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PnZajCB1ygTyrRPoeMzJ5SVvHeTbS6z7ayx4xLWPfc9CAiYiLe8KYzEaTPz4Viebr7sS5jaCVq6NQmN68rEvdvi",
  "key1": "4NdBkNsdXHPjRz2L7iqbHixKQ95ZEPcx3KWicQrGp2qLsy5R1a5qCqp6rjAr4L2AsDAXn8aXX7vqEhxx84yv5VmW",
  "key2": "59wkCAiKq1EFVsAmqmHv1RFqFygqN8LvXbJ4iLz9FrUcUAELv4NT12oW9HT2ndksAK8gjnV1xVXYisguSBAf9kEt",
  "key3": "34cy2sTUBgwmBciiXpUNTAzqjRvpQy9RajtjguJffvWAfsB333qkW76aWLWN4HfUrfitsJgvzWxTTKxKm7ihhCAv",
  "key4": "63FxQMG2xkjyRtUFMaVdBXLUNVLoDHB3MUvoUqbGQkNvQzai6VjRJFgNTvFWJy4VdV342d9MkHxM5MLAQcNXp3qK",
  "key5": "pAxr2tiKc1QUrYd1vPtPyYQrJ9Xh5RbxUu4YjkFPXa6ba61XtAahi9YMb6qNgj66iYQFbc5qZFkUJJLSe5QGiup",
  "key6": "AZ7EQ4vcFkNfgGmB3H2bgW4JqaiQkw8DHjw2TRe8FTNgSirCvQwPvW2djYqM7h6ombnqZmD2Ywvz1emAMwFRqHz",
  "key7": "93TsspesLpUNs7G3KU9tEDmdkjfhKmagXzP3oxksgxX59AE4AzMTSF1g3VkNmUuUngoH5kQaanCgHSqrC2Jw6xZ",
  "key8": "5hJKV7j4WBvEATo8Q4HCNFgvXZe6W8RQiTTubYsbMY2Yi5L15PwYW7wMtkEeyQCwS8AQWXPhXxTLCRSdoxM6fZ82",
  "key9": "65Nf9YNPiwmzUSzugjUSBBjdoLWcZVhJje8cpL4s58iM8F7Hrc4eDTqoVw2sZwd31hwUzKUjPUaP2DCrJBihxsS1",
  "key10": "31XQN7qFLba9RtH7RRodMxhcDGtNF96n7ARJAG13SzQieQUUiqfKstV5PN6GBrP1UEYzVEwRYhHiNNJVQScKwp6c",
  "key11": "4Pez9guNLqWZPDrmHgpTpGVqWm9A9wa7z8Rn8g4xVpKbQzXFASrmebnyqtUop6gFYKLovnDkzYm1RKcGgotjPgJu",
  "key12": "4E4qi6hBpAmj7mb3ooucN3az1dC7DJGLYwYceeR2DPZaCcaxHsfKVw1YD1s92UwsADPktwDQnoM34JmKDNUdovR9",
  "key13": "5L8x5s1n16Tg2wAtEK2HrxmatHbm3s89QZyZ9WXJhJa3oWffKHktJ7zGsw7f54Y78crwC2PUJC5purmFabyuSQEs",
  "key14": "5DojHxvLY5QgUVBEFMfnWiMhL4zj1xqNmV8eGKBW9mZXybnKjwVdpbX6S4v6axA6An4y4bWfGakvHGxz8ob1CiyL",
  "key15": "3VisFQuCFEzPNBgZ8Yr3LrDYoSC3BCmpuyTmwsJxbseDhiaxguaK9rNEDfVDxvXnccCDziXwZn3iz9GgP4Mq5sgd",
  "key16": "5KF2XyieZJcnyf5xeagxFsLH5h9q1hQEanGMk5t5226JewAWJXB5si6Da7S1be1huTgq8VjCJgJ8yzmXBYMubnrK",
  "key17": "2K8w3ZLBpUfEKkumrP4mM3naBouGbmZQGZhdC8KpK6AwbVKKb9R3NeeoQEzgfp4Uj1D3fSqLAWWTi5ft3TPsrVXJ",
  "key18": "4rKq7m9Zx5zFMzEazz5YLHKb78bFsF6H7Tj2bBWQWTxsK96RPQiyrggCTaLUubHRfdJMRQHnvXFF61wgbcFe48bv",
  "key19": "4BC71FZdR71471iXes614irBAVxuHaT7MrbweJjs4q5pcfiDNiwHUZFXwZtmmBNVCg4GpZuYkRRZv28FhtvB2ktM",
  "key20": "5MDHmtghaaVWzkAeyNZo3goTYvzNCFr1U3971iKzQRjFgaFLxaA5f9ZGLUzDC4vssPY9x9CotUbqXt5r4wTnSQbX",
  "key21": "4RqLsdDtRXscek4MXsRdEKfQAgqanU2Z5n9fRVJwSAc5zwtFeHjEGTTC1yoxJbJUESqdSBxbrqwLEQiJVSkARNkz",
  "key22": "35wJmuaTVHxpc7n1tpmpHa5cDCHh72gYjSsccbP4KsnhAfANsA5nzZaSvmpqNKWu7EAhfjuGh3729tWV3L7QCqE1",
  "key23": "4S9sw7uVqvSFFGS9bhjqfdD5KNJGGkZxVaQRa5phAerKUCxPYebt7v1MDwTo5tovb3ahaXi5K5aoS6NQhi6F4nMg",
  "key24": "4zr4UbXC4k2F2QAvBcCTXWwd4qPNpjvdsvYBKo3pbu7ipUUQ3oGwPYrtRxvzqz9X7aTtE7HtcpHQqsgaDdRHSoVs",
  "key25": "SsWp9yn7Aab9U5PuQ79W7XVF9hUZ4qSXvATo2GmYsBEFWAdFHU8W5oQTevWRiX9S3UKXYcmvzUPoBAckrJAhyin",
  "key26": "3aaQ9vMfJ5D3mBfP5LSgF319Sk2X5sHg7BejShQAR6jS9bm2NPyg7Tsr7bMdhpbgooVMDL8a6nntvP3Ph8NCh8pi",
  "key27": "2Ya6iFrShVCy1CbFffwoWGerkuPX62xwX7Xqd1HUXH9jjkSfS3aeQ4rTvs6qPS1ZWzj8gMebGp7b5dV1cWKhDDiw",
  "key28": "3TqFxKfzjSxpgoUYrpEsneuR6TE2vSMQB9hge9h9HGSkjxPaJmMmPSFhqzzqqxfXN1SuU3b9SVGbdxVTBhUHwXvs",
  "key29": "3GMP3yxGwkt4AqbXN3hRRNGJPmiXnx1G748MHB1EsVYAMmZsmQ3YR7WRbq4HhTqtxeJQtg5gi9wWiSkRoCV82Mva",
  "key30": "4s2Pe95k1WrMTDFZAsLPVWep6fADtuhEhrun6BhHpCEcg72P9L22bvboptFYAvowVUJfUUH5hMSRdMbnQJhQycQ5",
  "key31": "3dhH7H4CFeBNdVU6PxQZsEhLAsW7ZjCBWZow4EtwCEJSMLim2vfJuMWvFfnZGYmF3pmqG8octac5g6FA35Db3aei",
  "key32": "2LTn9aB44zprMojyhaYzJbbDa1VyFp9Sn7ioqYNS3DZ4Rn9zvy4BJJTfmjwygvTck5pXCBp6mqYTBcLpg19wP3nP",
  "key33": "2WE1iFZvJutAhunZuiWSLP9YhCsNHPNcYp6RnZaJLw9PnoKEF1qDhfS1FBXqBRVa5e1babh38mnZXRQ6pGyCH3r7",
  "key34": "3QLgnJdXnBYvmTwfcfNRqBujRVStw5PYBsnG835i5uvqqFv4uPh3dsvAwaueycWZNgimuG6yEz5QHPjUzKPqx8TS",
  "key35": "542RbXPsWJaDSd1uvh8X37ys3GHV72daw9rXnx5bA1QEq1dn6yr24BxSb4BLDXYNdFshaM4M7RVpxXisW7yta2Ja",
  "key36": "2c6tcUkpPd3jFmWeYD3ADA9ugh188zbPZSYD5hkiWZtU985DLcaiMz3GuTeJbPr9Rzk3KvMEJpwHP73WCT6K6co4",
  "key37": "4sjgwtvn3P9YZib7vMEcYt3F9pAbqo4Ha5DGvNnaiv6KjARhwZEWa8hn8e9e3hVJPqEtpKTJ9pgMFf7upx9fbSeG",
  "key38": "5SHDx4hC8NHZRsejjHZsaGQXyCZ64D653mYCsXNJCXte6jpcNrSP8rCaVfDuGHZrxBaAddDCPP3vkk13DG79iGKt",
  "key39": "2dQEUeMHSDFxZ3b6DzETDwqFTpDWwRYkJp9foS4jVv4hoU68qSwDc2JM18nroL2c7GNoAFrSWDVx5tzgYfr3cmBN",
  "key40": "4A636JSEWsezNLnAZM3So2E3shTEsMXTLTrrBrQ8MmaaEYptrerCiVr8jV1VidxGeW6pp8XeSRLxhwMTK1QtM2X8",
  "key41": "4TwqsuC8KKGZfMkdiF8cnywEK28SLmYrcLt8QkufHUvWPbyKVVwVrbXF35RvU84QV2rjwvjPijzPRjyZNysS2PAu",
  "key42": "3fZnrzChoet5KCoHvgAYwd95CWAJXB79Xd9PbEG7AixdkBjzKJzZS99tm2YdqhKXXHLh2HZeZFLMcmVSNzctrZvT"
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
