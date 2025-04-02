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
    "5k7vL4NZkbe8GQZwuPqqR1vnFEScg33VjYHBv7oka8ZTuTc6TqjofcuUEbRvj9C5BaM2Jm3CJytFjvqKw28B2dbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22HzsPXUjoLHw8iSmrUpUpaVdV6PFrx5uZdQdTiyfpL15m7ijmKm4Z54ptRB6gADtbnzXDtWfqxMqJuGVcPQMWoJ",
  "key1": "3Ueskpz6cQpsqY39RArSaYsz9mZe7VvNiK93ixYvS3LDk4Eo6WBiXTiMrAFwXcT1kmAHq6wv9wUkRbaxjK3f494L",
  "key2": "4ox2wd8xeaR8DQ2NvtKjohgGbAEYZMHQ8GYnLrCmeJizsNPciM96oKWoCoifeRTLQJhDYeTDPTucQDj6inzoiXui",
  "key3": "2ZqmLfh7Tdkz8jrHAXjDZhhVi2Xwzbuemtq3a7Pbh6mEjhzUBGA1vbaqAJkBEyhza6Yvh9kEiTvvci33ZCN3MaQe",
  "key4": "52Q88w2KZ1o3qspaUUcv4j3zQdXbTwQji3PhQBuVGNvZqFru1cXFntchkjSkXLbXcQkA2o5c4wfZfHsAcTiYZ14T",
  "key5": "5Cy86XTEXhmvRbywY1WALHeyfFuG5L6tnAPZ6xt5Lh14ek6QbRDu9JwmNVeD3g8AsyTCvNeoj7nzGUZ8Fpq2SVpc",
  "key6": "51YzfhXZK8P4DE2N3VNUbtb4C7fbyCuFM3SzWfCP2FURtkEk7gp4kCzikA2cntdzA85QKFuWMVq5m2kiBb3vEbcB",
  "key7": "22x6oF7QETBJaC6hS7jko9naraVfvuUZrcLx7bfuRShUUGeEiqAQVjYoMRzDpojDxo2f3vXg8CUHGeig9UbwHAFK",
  "key8": "26eXeY3LShDPg6daSjApkgMiieMjNXxMKt2cVAyqDYxVyxRE7y81YTmqJomm1coLH577v4iRhaQorRoUmSAFq6F7",
  "key9": "5TUpc2s5qbahbUz2v4bqSTdxrs1XpnPZzpVST2U7X5jw71J1rUQtxGAphwWj6PHxNJq81T56kPfGUVMZ7pJSsKx",
  "key10": "4R9RU3sujfiZdSkSVepxVZJbEkmd8L9Urto5LaXTReoCVqrwdGVHx8GBdavB1uJZ4D9LXdkFdS5czod1KmF1oBtE",
  "key11": "5AZH6PpSWwn8Wge3q5rbcw25PwyEiHfzaCYJXqaue7bHVLCXRCSsaLYN7wJHGZCy5LW6icMtaSw9F7wyfg3Whgos",
  "key12": "sB9b4SDTYSxQvyuxHuXEuRJt3BRNieiQicwLKo5JQTgy1EFdas4E9N1GkEUVEt41nJiahRV76KLY2rpS4SqEa2j",
  "key13": "5oCeUx7caPGjf52NXgNUQXFXrCzuP4Fg8BpqDn2Yz86H52DwRrqZaX4cQJ7VwWwkLbYBJXgKrpUxPAaHfjJwib6Q",
  "key14": "43xUu2NbxTQKzvEkgStwyHCgY86Tzs8FhhGZ2WhghMVS4h8erCDLpb2oRhWBT1ZXUqGNs5eD47YY7FHrHVJ6kFfX",
  "key15": "2q9Fqeh2TvPxZqx95cuYNDEQFU3RJKbQaqfe3DGD4rhLjoT29kGdkWGQn81pYYxHYLAZpjXAwbswo5PY8KQweCQb",
  "key16": "5VHH3KqQbSHTmWP5F6gwJWazcQQX9T1CTWjS8vyPrxHq2zhAhLzh6EcPYG9iJpNvvdvq3peFiMp29W7aTCu91JnZ",
  "key17": "kCj4tMiF5nGzJ1MF34G8wDEHosXqAWN7Sctkixk5JpT8F6eFZe9iCLcKRf3cum1LjzVQDLA46zKptk2whbswikh",
  "key18": "49sR1tKopPsyh1A8ot53jSMc4eaKWrnwVVUKRtfiBpud3U8ZkgdDMkBcmyAjDPDz1az5h9WAagCDdvfahG9bk6Wj",
  "key19": "VNEh87kEku2BQ21SfFsL3NqceXmCWywpz3aDnNihhf8KrUuBGMEZwZVv3g1FS7xf8VLeT3p6EoyE3WrYNJxAjPX",
  "key20": "DLndHNgbBpeLajMpHuHBr4QDpfAG1hZshBwM5vrFwJKWNp79DCWN7LENi5mSFqEepQGM7D3HZFGC8YTfgX4d5Fh",
  "key21": "3NgXUqAAL1Kej622X2W1X9SUYKFFTVYsrgavGydKM9C2dYk6FohU1znD8GwxqpLuCtjZemBfUzXTYXGG3s6tAcm5",
  "key22": "489pUyaBKsSJxgHFxrfjuy4yuYd8AybGiy9PfExrgaPWmkqf2NU2SBCf9ySD33RjoxgLjg2tVCvFG283cbK8bJnz",
  "key23": "3H24aFuUiQpZ5MaaLWi8sv16APUDXfgWYzvdtfzyfSqKwCMTfEVP4epx49J9DstGb3v8sVsw7mpr2qQrGD1eU23W",
  "key24": "3ZyVJJ7uKVjkhYRARV9tEdsXHimo8uZijE6ydk1ZGpds8P8Ua9odqpEefqPtSdMMBcaGw6pjS8kGxC4HfrTRtw9r",
  "key25": "5ZJeRa5tRmnNVcNUFrmApxWizBqLVyzANbRyr6KM2D5ogDvccECxKj4kzf64a9nEqiSLEUizP92RzQiNVdD5VMEh",
  "key26": "3Mhz98wvF1RNiMsbiSa9jYByGrQn4hkyS3vEevG3SGG947f5NFfsyH956vBcGkKcZwL6VgcMbU6LJ2WsAVBEnhQe",
  "key27": "37B4YZXf19hLPxuG7KMvoLxKdtk1x7pYXzL3HCqvBR4a5GQFSLV8yHPKXZCYzwDGYiY4m5nFCNDoJuK1ZTYxS3WV",
  "key28": "4id5ErSV7S9AbjzVG5Bjo6zgqTdRMTQyQXZyU8jVP7RFFd6mjormnVRV7BYdRMT1EJcgiqGz5hAV6Q61dFwEpaeR",
  "key29": "4ZZygRETRQ1SwA6SwXFPN9wbVjZGwgZvDKKki11YjYuxK8qrR34yTQK6dscZvwYjr8NdDrty6C5y9gsJcYqZq3w1",
  "key30": "4xfn3jMBgVfRsGGs5KYnBfCGtwsHzkUHbnphzbqyunPMUPgK6x4N3ftuXwSDLAGQGC9MBt1dQzHZYhNXXxmCSqJM",
  "key31": "5vC64t6DogDjCaF4ziDaNjzHy9Atyig9sjLWjRC1s55xnQzc3FwkXhsAT3KRnSKMtmVpSrZTqddYxsgnHand81PY"
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
