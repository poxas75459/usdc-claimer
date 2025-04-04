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
    "5FwdrwvakULCiHN8SfbYcgDesExNEoPdToaKaUhPiHWyxKeAbW8p9H5fXx78zWYPz6fZmzbEgBeTxxvMPxbUCfV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KmaUeY1JVaqKoC955z588bRdrWKmjtQvg2KwtXtwRmSB7i227vFreSXMKfoqcPJDH9cUVtCY7UFFLiuA9gaayhP",
  "key1": "598GPyJmb1bFZiwa5x3PBhXKJQGRJUN2xapb7Wo7mGvhPwAP3RszpuRazt5MdXnuATW1AfDfPUhaL3MMWkWZU3zC",
  "key2": "gQVKaBF17qQruWGKmpd1r3866izEoBYT8DvnfFjyv6ayDubuB5LVVaFFnwNHBDSNFZpvWQDnuyoBc68axeSvQKp",
  "key3": "Ma2E8ePwNZHrRUEjRG3dSrwPVACkpYaWDdA6dSrYn4bixyErPHcRwNFrB9UMsSxHngJAtyHFohDmTVLM3ABubym",
  "key4": "5XSStpPHKczf6ahvuNF2RsAPvbDh2xYYvZyQ1P7utj4bwWDR4Dfzp1gpqir3spviiMYg2uzZz4yqAfrRQ9rLwXkw",
  "key5": "5EMDqubVtiG1EMCqh9eK2gy9Kr8ica7GzW4KjZLnAzp1xMoVr4Vsni3RjTFit5gDkUU6MeJvADVtdyNqWqsgh5yb",
  "key6": "2YuUQqWJC9RSgCgsUu94EuaZYqz8cu31GtCE8FcsZwoseL5VcBFMte4A33MhMyJo63wU93f4xdx7uHmz3CFvaufH",
  "key7": "3DifFHURbwbTJGW21rrWC1iaSceWh9Y5not8RWeTWvkgqKF1g9ip4vCxndQtqXQa2BucTwxWVWVy8bQSzM5Xm4FX",
  "key8": "4noDuz4QcKXuhUUV325YYXkNFZ6ciKJ6n1f7uNxHasWVahnENyK5SeSZCerRdbKFegNgbMonHoUkCArWZFAqqVNA",
  "key9": "4U2wB5BiRWcwUvbeUmU4X9uu98nDsPJuPkyif15hYZzjKeG7683KtYRjW7v64utoFTYe6wWqvaVHvtk5b5sVC8EF",
  "key10": "5FfdZUqQBfSMqcmVkuLhMUpLfgE5Bf1F9t2SKYo8JXB1zEgCesmirAq344aURyX7NXKNYgJX1ibmpJGccgt4bVd7",
  "key11": "5fTbvXVTmtvN9yYW2ZmHrcRCmX2nvzt38kjDpTsiHfpuAEJjhd9xzdcYyvniirfc6KPKDAoZNrcBkbEvU5T3bbjR",
  "key12": "3ipnFhmAbGVswBr1Q4j4EYttVyQL9gdx9FX647crNa3rycsbo5T7kMTwygcnoSwrCJg3nCZRgiDMVo9CM1tRomMe",
  "key13": "3tuAoTJWQSLVGv11TvZmzepqfXDcJctyNm2mwtHdRYHepm23FhcR4hgY8W6aLGF8Hb1BNFXtHZRWENiXPLYSUYUC",
  "key14": "jG4V1SPCjfB5nYszrYAbSytmQB3ppFMwpEeoXw2k8TZUiHRhQyZB24bXMTxYB97kiJLpvduT1tCy14eXCeoFUYV",
  "key15": "4DjSYhYaStaoWQ9X2eiMfvqF8h1G9iP3mU178JCCki2S1WY9WUQjrgtQfvKEYtcAtDPp6KHchoKs1YcCa57QqLnZ",
  "key16": "5LvSyNNm2THA5HVaZ7Yj4A7zKnxKEN8gV1setFBsNuZhs3AGyqaKVegRViHaBMhhT6NNpSHwxiC7K5aSVAd4q1TH",
  "key17": "4q9UF76dgKQdASKbDiyByMhVAZCoH4LAphXSB6xWu9m7YzC6CknczQMqtyTAKCaeWbFV29u5VaX9hDcnLP2anaSU",
  "key18": "3Z9qhfkDkR39zgaUexnB4BPaFjkJ8rR77KN1ANrQGEPX1Kc5uxfDxUAtfDRFvFVw7YaNEpFCyEu9wt2QXSjA1Pv8",
  "key19": "4UkjTFuxLuGukZfwCjAt1e1LZJTXBccbCMddwSttozBw1BQLxXFR8xUTRXzcjswfzYydbxio6YXwaRV3Z95E1qPt",
  "key20": "2TUYFdJGTeubiN2t8H7m8hhZeisht6W1PgD65giitgLW52yA6SyM3x2vsj7jdMzxFybAbuxyx2uSZrDLJtTBywNy",
  "key21": "1ppstsFVdCi6g7RJ1yE35QJT6aD1G9uxMsLnGBVLrKsHHjatcQ9Th4bCzF5Do8ckw1yVZAuAU2DdGE2wQoNSSmQ",
  "key22": "2zxPrN1HfEf6PpJ1UVDiv9aebq1RNH9otDYVM1sQdkbw63b4dE6mW3oUF74QH3Fj7DUqhDhPV1JkkzY4HjfJL5z4",
  "key23": "wM2ETBFqevbsGcHVJCKHbhuLGdh7StKMiC485sTNz5cYpFeXf35Ho6tfK6ifGb8hguxQRpyUGXPCG4QruAKLtGs",
  "key24": "5NrKXJYyoZDreduNzqq7T7mdozN4PMwV4hbtx52c1KdFfcpxqcAv1BdkJu8CuR6NNNhUkUFDapd3NC449KnEAV4D",
  "key25": "32zrKxgNmGhApnuqF6fCtamiGZT7Q8pFtL2BUSBa9jGFnQu1NEFERpgxDRNTzPn1sXyyorM8WTPEwUCHzHvBHoL1",
  "key26": "3YUpR96pDjBMKkf7sN1ZUUB4W6F2PZU3F6mfDWQG35xEq63TVYhgJEnzJ5ieG3KYcFcnPR4hKTffADxhx8iBqfBR",
  "key27": "1qsxa6Ycp3MqzZ42pJzsBeCrkcqoZaf8bfZZyYN8fvwRmahbPiUyGiLC17oeTFg5BsUeNoADXvnoh5QByKzP5wY",
  "key28": "VXhU3nDAnKtxuQUUpkUeUx1izXpJx8nbtxob4Zms4NyqhaAt5VpAj5zVrBmLNUZS2mrUoXSfFXULjzfCLzLS6LG",
  "key29": "VFxt95Do9Vv9jqfE2gwekKUq6rF1rCuZNofaVwVZp5dvvY5r6hrFmViLptTuy3MseVPHjhLcRWC1bmwWmkEMuCi",
  "key30": "4wMAVzxL2dkUUNCeAFoMt3HvYu4uvHqJJ9QqdQ2Sh1hknmoM9Bf62vEVuoRPZXMmkvgGwHh1pJKBEAse3fFG9qQJ",
  "key31": "yq5TjVC9mqhkta7SZ1pTV6Dbym6nEL3iEvUaaoFkojDrF5AQr3gzGmjc9ageS9CZbwCVWhCUaZGimWoxW4pHv3c"
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
