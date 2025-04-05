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
    "t8a2hTFPQPufdMjoJnLuUJHiUV4tHVBqp872cTCNMTybC6usecwdiBppT8SKvGwyhUHeZ6HJXhLLzeCSVxVh25y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bj16SknVZFqjkQFarfyrfNNH5vG43N6hb2xf1yaoWmoruPtiTJzoJvQT4MVCtiMgZjZhfiLYpJaC5wUU6d7XYc9",
  "key1": "3iT4pa8L2Q2QzvepuAY3ykHTtPYuqPj96Xvsuy45W3HKpKiCctYrkuQt881C75ZAmiVSSJYqjDwQYvStKX8oae3p",
  "key2": "Jc38QspJTChhSHf9k32pwFfw68RNDmgBiV9xU1nbQzoPBvJ1NrumZV1hYPyHRxFB5NTX99EsHza8SxWUYpXpTh1",
  "key3": "2riZtAR6YyXPCu2YFpDEdqRa86w4qreJtNBWM2Mg4WSLD8KzLRhnhrUoGbNMH4VHLzMrjDtdUXn4QGiA9C4BCEUh",
  "key4": "56rfC1zFjDqJn1y6TbCGicWWqott3RQytGR9FpAYmTWWsVe1Z2UZeS2FCDxr3P6yXWjc7hsEzgkmEdWu4oSWdax1",
  "key5": "5WBmnUvzsfm3GBNfaHZoFd8dd21JvZcut4w75SChuRGR7d57jnC5ACGb1pfpi58z1PByZWzxGmPGJHB6WpkigqGq",
  "key6": "2bSooDksiiu4J9ZNJPRJh73p6jf8KvFfzs6rgXTJRgnuFHt1tn8vQZqfubH2anB4ELmBvfWshzZ52xCAyDpH77Dx",
  "key7": "3B7re4HuFYfNgYHE4jS47GF7aEYiSBvXFUHaXJ8dMNoEt3NPFQzu6zipcRUFY794xNqCuY3exeoEimdNZKCxPkno",
  "key8": "6qvknyvJ3kFf2BJjzSrvhbFEVdiJSXEAjANpgpbGtaXGtJAvd5orjkkQBTimwEdsh64YTe5rCR5y6QQBnHXmi8x",
  "key9": "4iN4EVuR78vFA5JGuFsR2EZDpiKd2PRzkcq3qqrYJapxZFHZ7hS6ig2kkEuduYwMEbgbqELicoe5EcSwpgmCtEhx",
  "key10": "5foRxkycvqj23ff23vxoHpcNwhrhGLEbAVbaURhmpDrqEviKtkpyq7tmB3B7w9GXzTVKrcxADZGBYpw6KnU3sfbN",
  "key11": "4oCAJZNK7e7M7VzYZ4npXk2Rax2UenSLL5P5kY9f2Rb8KaKi9vGFswnSsHNgURvLcUtuuwxNmqcY1ePXYMhZmATq",
  "key12": "2WYaEmRufR51n2oKtgTusk5EaoDZdeVJjECWiPtjeyjPJdHjvmvXuxoxGEGFQkYH5dNyhR2zi2kctpQDHF1jsaRN",
  "key13": "3atbVDxSaMqx3nThQpDCkdD3TwMNic64XEX26H5gqgzqF4A2AQxX2o2MKqCJGEKjPpoGGVi4JAZ3g7oP14fnWF9o",
  "key14": "2TYCSNvsBUsSWEHZurGn9VRNov53ZyPnKC7YKRnFeN7GzT4xkPjnpzPeVJzKhU1J1mZAJomwMuVjh7AYquPuyB2c",
  "key15": "2joGxyghFFNRNBS4yvuNM32L8d7tNArinbBqfUMx8ggzp3pu5yajCHQidqRbrVmisqExfULLL2BMsA3MLmDCzSSu",
  "key16": "4LfTeNWxDjCc3ATmbsCDYmCJrQkdh1He4sQMrMmcZzxmSNdcU6fQLvYndhMBteGCNpy6XgonHWLdGjz6P5aPGoWM",
  "key17": "5ZR4qyVjPpKkjysM42j4WhMXsA7jF5aAYWD4ncTKSFHNq8xQpEhX3QqMUCk72RvXW7tHgeTWRRYwoXUVu7qxSAL",
  "key18": "2GpZjniUpKBq1L5Rg372AkN5iA3AZahFjNMobLne3xdsfbfdk2FvUh3uib1Es8WtAJyBTe6Xn1ddDGEHBxgdTssW",
  "key19": "3eyKwNqfD7Sy3xuJCQNTTLovuEmjuVY4SjbEZ22F4Zaepm1REq6Ykb86KM2Y6vpZRDcpkhxGBtuQqfqvynB88Nkh",
  "key20": "Ukx3JgHFuTYHjDUXJNVf5NKuD3C1xkcUpDJ3w9btKWDMNdZ6kRFBakm7ESv1vvyvgnxdwHpeSBbyqkMkNJ1qE1F",
  "key21": "5ggHDZ66vhBMSm7q4sdjVfrCByDt8XwATZW4VnhiufcXN4jZGqVQKNCmcsEocHx6Tdz3Kp8a2KB1tiYDkaZKdM7Z",
  "key22": "3jnzraCuJXvLfw8TyN2KztLkHxU1GkRqFtjsGKoA2ssfFyYnntPRYDxW9xu3CaPJBxrL1FAnnSVh54i8QYS9S9PV",
  "key23": "5mcxuQR9dRqnJvGakWhZDoRUw7xJ68zpzdsrH4MfrxT16eVzatqCak3gS5YkEM5YDzaJ2PGudNzncvTcxEmdX9b2",
  "key24": "5yAoxJPyaGTzxYcAKVpRPTaxpCmdqgakbS4mjRKMjnnD927QkKYR95oVqLhunogwdsaJraH6yVCsHZe97zWW26Wg",
  "key25": "5o3BdyhGNqchCZQ77jRLHhSGHtBRka4qDssjvzz48uRaX33c8rcD1eVuv3isPfzwhzJYdDg2U51UjYa84fFNiE71",
  "key26": "5LdQ8Dh3toWarQxCYsE3CPpGUKCg6skospaAssjbAdjDrXAftybDYvob68KvWJtMnhENgj3mGmHjcD2wtrSqw194",
  "key27": "3Hz7DHDWJZ1YPA215n9SW2tkUwnMc5cZjH66jjVYnZr9DVFtyPmHjBp3f3Wgdk1WE31GXbaNP93vVVqpikaniqxV",
  "key28": "29gxH4dNsUnJdMn1xWHYyLbJjSD7i2hGzmePexxU6dAKjX7YBzqqw6kBL4yd963JANDLHxzEZExj5rhvveogmWxo",
  "key29": "1A8ui3EzdfEsW6gob4KoNAbpVmYVbBjHRg1c8JTMHHvmqGBWGKKL2WnpwaxNvQahHqndnhYTVibH2B6LqfZkDAE",
  "key30": "48LDDkd4ymLvy8sWqoqK9Q5CwMZgvYKb2UEnapvZNMndfGBjVpYpQTqBpnpHhAP1X8QJAb73pfD89e1Dk42nAogw",
  "key31": "FYdCnNZWXSHDuMorFp8cVvCVxTAM41nQrSsBR4R7Ygy85db7qHeXboJ27XUy6MWF9NNGagQKrwNrXTyHDTphSLA",
  "key32": "4Z1bfmqnvtPNk2Grj1W9fuCr4Fs8XVUB9FHXFssvdChYHxJvE66m28wQd8vHYJSXAYwGPBeHFVeBDv2et6YMn1kj",
  "key33": "5dKmH2XQ11c3kBitSqCg5WGBLjTUT5ApvZoQWrr1utftuPDs5mfUVsVMVz7yahcyY8noh8PKRcNjLctHN15sh7yv",
  "key34": "5W4uEUtdXkupFRkVfJ5n71teRgD9Wo39EB8N9SJWf5VfV6Bp9fYM469WivxaqPxmHus3G1FjM69mk1hEB9Wedo1U",
  "key35": "3ngzM4fBTxNpG5KJsfsRkAFQLgxEVTt6ubxR2QjVacpQY2uqwFincfAvDXqduWEHwGWyfmRTxfQeMWXkuar7oELP"
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
