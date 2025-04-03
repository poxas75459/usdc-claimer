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
    "Ctnm9ConGAG21c252ETfjWhcn7h2B8p9BixA12oqEA7ejuDohGGfxApekkUeApw9Q7yTiedcscepMThAV8Tw5Fh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LE72rA6e8rbmGLiTdKkHKSQED3mdkTJ82gBdvTvJQj6okgpGzv5uq9Ac6GwUCtYFK1HReMzNJ1H85pHZ92wQr7A",
  "key1": "5NAQMSFqHr7SSN9ihkkwYqr5Mj2VfD3FxcHnscCJsa15zb9xdXxzsATZrUWJ7m96npvacLpyKn4gKRpK9rXx2qUW",
  "key2": "356xts1mQygU4b8z8DwfZBFEH6LoE2BHvUGCiqtTDuWAGsrpyFWNd6DLak7VABhdfE7wCmNtgehPqev4VYx3kwg5",
  "key3": "5PcJNrSt8wUqu9c7BGkM8arX1NoVRWiVp8oW5NkkCYY38yj2x4suNwW5DHJFcXMBWLT3ASikWp4bVitGwDMPsJMN",
  "key4": "37bDitTgvfSN8HfvASbcJgB882joss3HE1E95vS2ZQ1vrmKnkAU3XxyTDBvcPUDBFqAr9Rr1onVTDLNaV5z6JAEc",
  "key5": "3LJdRPvW6uBWfwrVcNcTVdUHneG9kMVqT6n7hy1UJ3chskW5rGkJZPP6YBGwRBJ7V7DRY3ZRha8jgiMaApRv88c8",
  "key6": "4ZgtU2zXs5DyeLwXkHebdMbBJs29GtJSAGAjHfR1Rx6kNkkYw9NcKRtGk5kiUXkjuGQw2yB4goorTjRHZNC9w752",
  "key7": "Sjp4YAFxfqUZWB9e8tL7fMSo7Xx9UbiMfrV6DXniifpGbmh5gok4Yu98tf6T6catQ1griwTbhS4J4RQ5jC4zUYT",
  "key8": "eWQhk4dBa4WNTgzvwpYyj6wirKXKj9MXonem71puaFkKDCp8ZofzbQgkiBopr1PcFPryVerZhQztX2phR7Wf4wY",
  "key9": "48dYub5vi1ryuk2g5FoDM2vRjtR6LwG2xo1bt7HzfSnFkwnf6C4uvbErRiBLd5BUcfSJoM3W14fb46w7fspRBRJz",
  "key10": "oY7nwgdb2bHFEerAv47Jp6QSjC6v1mmoaUfGSBoLjJqcfZDhfycbXDojGtFTb4YFcZqWYXxhSZgNxeaPzcUjFZD",
  "key11": "uUZzEnMqdDyZSwoh23Trm83VipbFs9KXS1fPoh7mi2AmQp9ovqFYh4C61CY2WZyoqYQfRUG39LSQMYX3q18cX2F",
  "key12": "ENtednzvSwKt4p9pHWkivSyFPN2f4G3HH72p35GUbPiQ7mZ61xHMnWGWBqqNUj53TF1SwCB7oGS28D238Gd7PwM",
  "key13": "2tBUaFjvL56kxNNd7Y6zMp5PTpuQj8fdmaxPBWUjKzhnn2MLEN1owgF9qFccof9SsShxMy4L2xgqMQWdXRxx9yJg",
  "key14": "2RUuBNWHwceQEsqkwvSv7hg1SJkYTg6JdQ7b7A2c6LmX4SRE8nvDdYYdnVsb6G3X4wjDgwCxstuTNmJ8BrRTUdfm",
  "key15": "zRxhmBEF9JpPU19qsvBsHxnEbvAjxfcF6GFF7LE1cS7AYbvH6BASdMi89qntCHf8mMiJrvdL5iwPtLzvv1wrBep",
  "key16": "CAgXQinRY8ZEjHeQR9gW8zCFkFjW79pSSoTXq1PRF4qhdsoZv6Fz1cx97b7iCz8SYe8NyMhTUTpRHvsZtS3FQRf",
  "key17": "28LQzwMybENxBY4uA6wbazGubU2ii9wJj8sZV45ySqsbKNZmnxTkK1VGf6QSkba7zAs1WbkAA7LQJLQjDL5m1hL1",
  "key18": "cYvxH2bXLB3gZDhF8SuMLPzEnFmJnj5GANi4mTaxkZiro8vnp2KudHPpKVajGrHsGoww8uMPy8Js71UksDe7Sjh",
  "key19": "5YK7sNqF7Q2g94MrSW9vFZtmL9u11voep1jQawp5rhBmwZV2HTs2i54JQ3o787eGo4AnY9KmDu3msVrbUc6M676a",
  "key20": "2aBcTTRs4ZjXcfPHouktMBs82XteqWTGiudkFnH5qsWkDw2XdScCxg2yqJemxZ6BrbsNFziKu5CALy5dYYGf5obE",
  "key21": "2VUnw6RVQf2oBc8WTWTfuqDHzcCrGcxbZ1GLEBt14am9KWP8tMVcSMbTKFeadQRsKWNFEJQhA4aUcD5ro8EDNW3D",
  "key22": "3v1TU59kht3Zmtq5mUaptBhF9kjT9W8dGj45vLDPrJoJfckZu98HfuHDtpuHYNzLPuugXdSo6Lba9boZ4EVAgEtN",
  "key23": "5YzZfcUfCMMwnjkk3RA3k2tcuHBFqToazZtxPbCpcXuweByEQibYaKats6tDTJcV2gV3reVvnBcgQ4bDptRm56JH",
  "key24": "3G9RGdrrkfa7Vq8tfn3p42Mc1qQNmxneMkKXzZuswCGCxCc6und2e37wn2vAq1Kz4BHGL6MGUQc2mkiBkKTzwBK8",
  "key25": "3tLN1sK99oVaGqphv4UeauXLw1djjxY7wffcGJPLW7AEDfxAg4zACDjYddY9VxGdEsRX7CaSJFaDfJBPZHV3xbkw",
  "key26": "6yzTtipHq3K1gXAQnaBY4Zh9QnDC9UUHwnNNR6tcSMS7UcJUwX7nDJkFQQ7Euu1vdTBUzBG7LR3wmT4TSa3zbJN",
  "key27": "4grLLsZXeey3961Vn6jdbp5tbETtsYR1FrAeJoW9z2QUR6zD5rgt1PteEbe1yXzjZusVUSWV6qFFRsJM1T4WtJb6",
  "key28": "3QyXyyCdUuxYzCcZtUriDvAPK4JX9uVj7PYw9umDxmJS2367k1hav5dq4aoJaA45iNRwT8Y7LJuLES6jZdX5z2ED",
  "key29": "3C4sekrMRxTTAftLTX6eNripCc2EnqDZjwTytE3ADiRSoFKMA9Znp1c6ncuqz7WFaPMEa2rsmEjbF1xwZMR2MZiS",
  "key30": "2fTrDkUHRrrcy4b3m9Je7GrUBZS1FvjKGTXx2sz1pwiFtdXTbCLkUeRo96rBLD769xoXooFnm6cC7sR8FposbsCy",
  "key31": "GGvdEcJVMPDW4FvaiZXKLPiFrgtucyD7drWvLQCR6YYb4zFhUWeg3XrZo4pvuDKbYFPqEkh9qhGtJ1tbVrQeoRe",
  "key32": "5LNyVy4fnr9dBs1e3pHXBqbfQMXVX2zgR9QexBn9r42Gp3mxdUKJa7quaTKv7HucXS9kgdjS7tfmgah8trWwyZTx",
  "key33": "5BdQ3Qrwk68NZKkmJR1P1fzy6xa11HN2Y6SaQt35C7KWT2vXNqpXUG24orfxFYQRCVHVdbpCV3EGe7Z4hwfvxoJU"
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
