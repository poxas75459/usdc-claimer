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
    "5T7mq612D1Xtb8eY83tu7p4KNtZ88zie75qm1Qgdjqb3BQCiaR7m8cuQwsgwDEnq7zcuvhumHug9x8iwb6N1rMEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ufXkh5jtXCr8QCZJMivHNYtMaZ6tbyC6t6JhqS2e8TcH3mQJTvQhpKg12t2SAvtUyJcPeBVnmiVNH8NeJaRctNj",
  "key1": "2ueBDRreHZBRqh6Hc6BFGMqoNGvn4YRQ2R5zvXEeVFaSG7KqWMJwEp6iFF9uJ7kDNqMrkpyuCDFY6sq9JAbcxpEv",
  "key2": "rvvzDgnTKYCY2BeV3QjfPi5EaSRtjp5vBYikaPXesFbPhdZSeTywXfYDi1fPpRuqV1FM9TwwHgfCeYC87kaw9Js",
  "key3": "39xqCqYvQ3eUMzV3fQ2n5xW2wFpwtCZa9HHdSJfJfiNrn92E5wx1rt6ovJ2aZCcn4A6Kgs5jQkKF1CSbLz9gDs6r",
  "key4": "5n1fGP2z3CnAoBJim87gRG8N7UgJdb1eDcsCao1ULUPBsM7fg9aGztB8TsQK3UJLi3wx4NSrgkdKY4WUiMeakh1c",
  "key5": "4YY2MdyFiWnbFs8D3tkHiRX8UCHBgeKmt6wqzFb43gM3kS73G5HAWwHftguzRsX6dtKpuQ2jwsZHxbqFkuJ6rJ2h",
  "key6": "SuzvJcqvWGsN31BvQi4hyRwP4MDfG8K1HJPNwrDMCE1NaavSopjsRaKbTCpPKEmaQss4YVMRySLS5hqtHBafzwA",
  "key7": "jXenEn5EptxWdsAtZMgvU17WfT35aUNSABRQKT1t14ZfhnNorXeoSfHrvz5B28yBQrXwk1t8phwLFRU4mtX8ohJ",
  "key8": "2DfeWBw6FV7wURTPJfwctw8GsN98MmogqRMaAE334vDPac5D19DkZq7XTtV5B7ZftzcLM7H3zTjJN6A8445LkJL4",
  "key9": "fnbvYKiuXZdXCH1KYXLBq5eiMyeZXhxzH9QsWKRfZqdrN56VsMcSfbShKbmFTFbG8PYdSk2SNMd7kC1a1dQiGTz",
  "key10": "3YEaK3SQfVrNbT9ZCiYPP83ugzqtkwG6NGjfxLBEiiZZMNV7mXBLKydynjzXjYTQA4fjkaok6YwP27QdFReuRDih",
  "key11": "57Cc8UcZaqsswvkoqgbooQRaKE9Evd8EZGeSi4q7QnrLUMmFWFWHRX1uAejHLmeKrWbJiRgMyZQuegkTXoCjvoow",
  "key12": "3GfePxsoBtCrEnTc7t1ZERLFez2GVPkyUskQi1KB5kNrhVG8okUJXySkVJsUifWXZkAcMkoF69g96KiniNfdJkMk",
  "key13": "2Av5Ue1teYJmtkNEuzewjohzfjq3u8ZuGEKd2XfsQuCgsboK8UETdCzVXKzaLfauo1gdwzLCbFEUBmmQhfEaRaw3",
  "key14": "5duT5ZwNXS7aG5ubgCFiu6Nd1seexnQTbktxSX7oDYyWS93o3ML5pAJSeUZRyC4LjvrjhTWmrbDw1rMXe6hC1kiN",
  "key15": "2zoX6j3uK58NHP9hUF8VpeRYSSiwNodM8nEQHAd7dKJqX7kzLAKihvqGvHCrmFHCXopfu2ktzYFSNk66get9VvZ",
  "key16": "2LqmtHBSwghf9f4ZX7ZdN8CiBQDXSQvs2RTYbxsizthvikZXHNh6ZU1ea2TnsaEB5UUWR6czyTi3aEwBGbPcNu5P",
  "key17": "3ddzWfNkmFUoQyFTxhg76EGDEBZJZiiZrXJqZXQVK1XXtXRr2DNsnwPWb2RR5FF8SnAfcq2XW5AfteMAT5VY12Jm",
  "key18": "5ZF9U4p29LYQmpdnBSh1Xc3hWKgFQvF3bYA4kfGix8MibeiRwH3QRWWRaM8bemC1u6EtZZQ5aDvuKvhy2bskNVpm",
  "key19": "3FfD8srFjpXbgfxH64UAHYP1DPVGcL1GF1aZeoxMK3Hmzn5otCkmhEeimS4UixvRfpvyfUZwtqJWi8ixBwMHtrV1",
  "key20": "ZtPAjiYHxj32Qxsd6v3tg5CE82Cre6Qyyv9B7kQGXqNLacXPmaQzmpwzBHY89k2qcPKWdo2Lbufrof55n9WLpYB",
  "key21": "4bYpgnRctbR4ySazvqYnSq3APFhLNYtWTMYsTtHuGpTDbjaTdWfpjhCCRxVbmcJakQnT8p6ZwDGdyahJAPoxorWe",
  "key22": "4BQ7SeDVkptbQ4pTU2Ev6qnnqXwNyzPmgRgeQ5gdLiN9WLoRyReCENjDc5geAqqM5MJTvvpmDgJYxiEBtsALxAfQ",
  "key23": "5UtVjCRHg74pbhDedqAvvxXgccjf7nAGzjRWsYtj3muvZ9zmRpCRt2y5qgSnErzykfpEUnLJabTz5E8uuXH3C7A9",
  "key24": "41SavDfn36i9uFAvhyVpPD199aCoD3WWBM31EL7nrDAoxpQBFuU2pz4mnT4ux9U5mqa1xThAFckV4FKeMRdWoGAi",
  "key25": "5T2kwbJy67EaWG2m1sCVNvpQ2ocXNQiR4qni4eAFb91iFw9EWJwa5h4w4986WuVuye9ZpDekpreuyH7qorpHN8ac",
  "key26": "3VzvLrCgiuegjmQK8piUuxMPq4hnKHFmtAMmBV1JqR4LpVP7nWz9VxHNoToHfSemheGAyccr2jhYHF784qGQmcw4",
  "key27": "4TZaotBcGVac45Y8AW3WthYfvXiFShVeV3jnkxGuj5hCzqfyopg6cW2sRuZ4vxPikTyMN1WGT8Dwf9Vkd9EiQoN3",
  "key28": "4UsC3tKRUXUiKpTA65JViaFeLqCj5ZFiK9x6nqixBeGZPVSjUMWz3tzMRdC7yRzMYtfWJ8QZzxbFsfy6Te3PG2bE",
  "key29": "3wRVzhG1fguXZFRnbggZrMps6jthV9RG5rhHoyipcQsDPYaurX4obQgRq2fxjdgHoychoGirJztxBjCK5fAG96Cw",
  "key30": "4xPwUtYcM238FPC2n5FyyErrsqWLwCY8b5hsr3DUqSvt1MjJJeDJqk8vcXEScT4Q7ibg1eQvV5q9MJcGy4ceGam7",
  "key31": "4vfBHdRoezc8reZoV9LfieyViyShV4u6RSLkm6Xudja2dgqANzgAJ4EQadjJpvkSzddrjmbcoeYDS1gb8kR637N6",
  "key32": "4SbTFnoYH6s6wyqv5KPUVVoinVrGRuhhDMM5FnKpZxboJYKQHDnEAbDnqfaJVaeRJbJxdfcj9ciQVV8veGnkWd8b",
  "key33": "NiKKWr1UoZfmAuA9nQbWbjjPbYwJK3HhyPwzhwjFt9DE86DUEsCEQSzNqgpxj5RpUdRxNZi1bdcmxyWqsqft7Rs",
  "key34": "2cSBmvjAYqfSRBNRWszLJh1AZtivn6TxPb7irnZRoiAUCs7BMizcP8gSFqYmsmDxiPy71XUD9r7SnJz3m9J43CLj",
  "key35": "26EdwDedojEkkGxp47dmrNsw79YK8vqH8cPG1AHtq9vYxwVCAZ6NLF1wUpFozWMjD3c5G9K3yoAQYeV2GEJ21dAf",
  "key36": "3WgdgnMFaUMRq6xTnCosZzTLQHZbZQ27y2MpocaTMBnVeDsZuBQaAb7ewpzUpmMYY73KMukLho2XxDF8cJtffhUC",
  "key37": "5UZmEbxoqVyjr1ihaZxLsQkp6WRCPByZ5rNYMPyW5psZBfgq3GebC3xtry9VTeDrSvUuEYUACkZ3u7DEb5CdbbH7",
  "key38": "4Vfy6kmDVjYDE4PZiewKbXi9hBeQuNVKF3iyjmr8g2uyXcA3xW8CzH98qPevEauVSdgS5g9WB9K6PmiCiveU9jhp",
  "key39": "vY7FCPBKf5CbihFYhxL953EZmicXnHso3KDQ2tmAhFagKL62DkNx5dbUYpzMJ5gxsfKHGjbUtL7Q27515ZcA8J1",
  "key40": "tbMFvx5egdsJ7vgKgycJJgEkngVzCyysTp3diugfHkvADnYR4e5KG1UkYdCYnvafruHLgCqpBRQDU2HZ7U4o44e",
  "key41": "5eJXUGwh7SFwJn5aHJbDPs1YkNpMEQkKYTGVx8Z9dtvLmsstg1x2whQzs913p8UQ6SwqtmGuNuuXSRMzSC8yzJma"
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
