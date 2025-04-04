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
    "dcMuMR5czASvnXd4taMrzcih8VE8Bj8fQapXtUDmFqQxXv33Rspk6nNJs5iCgTJpuZnVjZUzspJm8uV5wLM7KoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jRPGMkUSzhnWQHqhJeykkmoLSWVtKFSX5fB8dPsmYj5VaCvaQGfADMaRrNnz3H2TPiMLYAWkVKK9gtomPZrK3AW",
  "key1": "z9SjmfxwRVVAv7CZyoETPTnEC2ur2FhWnWDWiQRLaxDuwZ2iY3QZ3FWfvfrAhK8c3q1z9MoASxCi9APY4FxmsA1",
  "key2": "2JLt4UoLNZhytXV2fBe93ccNe9ABfZgn9nxDkjmnJtTZdpiPnGQ7NckvAodehkCSf9Sb9tNPcL7CajeQ4TU4QKYt",
  "key3": "4dZhsMmTAg9kZTLEHgNknvu37pG6r4HgWERqbAp3TMbHtWcVnWYjGM1X8SaofV3xpmBCRTdXZYamNqKUNYUVyaEd",
  "key4": "4RVYTBbVZRXR79XxusHFi8X98dSBbk5CsFZAoPYyPwgeGegK2tvGSZULZTgbtJmfVLPfB23M8Lk1AWybdrBn81bW",
  "key5": "5EEVjhD4a5wBzad2fiKrjnttdbnC78dUMt1uobUcivC6mGYKhY7BMBMoUPKVokqd19FQyuxp1QtoTd1csDM2DGxj",
  "key6": "3wUGRuCRqRJ56eNZnfu4WJTBgQ2iZ718VTCmbWLsgx3YCrQfWipSiBk1LBHhLGyNLUSdT4hiKQsptqydzKpmrk6z",
  "key7": "4oYWcw4fWwZFkdZXnUr82ASHhQ3w2USbxB3WEe2PjEdWXVbEhk5kaafidLAVCknvSr8K6CbW8U8gLi6v5kQAsMHw",
  "key8": "3dhonXzPejdAuz39Ux8YScMSPiw5nkM6KHcPgUphEQM8Dtg3ov9Uo4f5mZKpJ1DGJ3ssTEzx6dWY9CbdQ6VbSPBe",
  "key9": "4WUk8zh7PJfxTEd7jJ99jHbrk3pY5ASJ1toDNDdo8y7jinTj83RnPDW5wim5MwuuQY3zUEnD1TYeczVaA8XQsEPA",
  "key10": "66pcPGwhuZxzj4Kp4K333qV2nZsgHF1bxSuAiZ4JJUiapnWQFgxBt3CBo8dtoUmQMuNJo54Zv78m6MNtsyqRVAgn",
  "key11": "4pX2VNAJwozdgVh6FftGr9zrSrmZtxxssEZVA4G5z3NmGS4ermv7L2BNujGGuY3WBU4BW5c65r593E8GqfG2NiAT",
  "key12": "57jvU13Z2G7dSZNUvEPZuVXqNiaCP8VzoHuiaHaqunFEfJ2DsmpHPQsEnxXn8TrZhw5rweNtnJmCP2osP9S1pw6N",
  "key13": "3xWg48m7vB3dNfzwtvaMafXL3LafxJ2wwMxgwfAkjkGPGCd2jaWtrjBFsgx7PaTeJuvtuk95t3o83XXnDk1MTy1M",
  "key14": "2JJ9w724VphRZ9TkkxVYZKxPUPmhNrKfGBvSebt99vrHsh9tWmJtudrK4e735akhZWhVGCR4E5UgdmF582GJrA5G",
  "key15": "64Y8JLWjCQhbmtFZU32SY288CxUcCvrawxdvxtwfETqqq4ZAKxUBftnKXnGDs16R7GRnAAr1AGN4NtHcdZ6ae8yc",
  "key16": "51s7UUqTKrRPYC7YFJs1SoVFDYnXE5aFS9ycyGkrxsGBGuxqHdESqVZ2LLX8fPjGUh2gan7eKmgBJ4ooKMSGijSe",
  "key17": "2EEYPgWnLqYmNnAN2aqnDNes8AWgBGjUsBSAytzS6U42ovPqZosCvLWmruMKMTxmCsytKUCfPofMoz8LmZkuAsny",
  "key18": "4USFdRb5zeHCSBJhi2B1A1RktBezXdASPJ2WTFj4f5Bb4z2Q7gHmfFENvQaFeRYPy7MP1or7WfuaWihwTuWR3PCt",
  "key19": "3mMa17xgjfaLhrkEPQ9qcY3SZ3QwdEmKNDThcckjGXZ9AFNFeV7nfaZXAKWkx2s3MFzR4toT9dywXbg3HqgsfeC2",
  "key20": "24b5bvDHDMDkkn6UCHU5AgbXuDdnTwNBG2gcNfjMEwgRRxXXy9pdCuH282L3JRrZ1NG2iXcuY4JGtLdSHeVaAdqC",
  "key21": "3LGbuuQdzaDSiNXLguN8PDnmAkySpr22SaJvGWpm4hpW1NYqsLFfFLSATAfR4VP5WKMd9s7xJxDgiiwKBxjnsLx7",
  "key22": "4yAB7g47Hag6uHfgrnJU9uqgFWpjiAqx87nUNYc5zuMDFo4BpT8yh9GAnx4Xirat8KwrtUeM7zii8CinKgSYAmnt",
  "key23": "4JFXVdhDeDhaHknmQ22KCskUovA7yRDurr92FjZq5EbQ2J3qH5v6jHdGQqSHaZ6PG1iNVXKAybrUmfpWNtkEBQpc",
  "key24": "3G4G352soewvLequeqVYBNLPQLw4ZX76Ze5bf5ACwa3VpQcQEZgiAv49dTwLYZMQofFMV1Ht3u3W2mnawoU9pBs9",
  "key25": "bz9uWBhWnw3rRTJYYM3zXcYKQ12DnKoVdyHwBSTNxoZr63zjvFuv9rooZ1JYkDzo73ZzNDfMRCLkWoXrYk9wnCg",
  "key26": "28egYSCdUP5BKHd5umP4k8JypnwGYC9QaddvGhwPsCwWa7pBr5avR9Nx1Yd1KUGWZ75Ka52oVsjsykkZfvsQj97G",
  "key27": "3Go87X53WMzRvCttLmGZoPxHJ8B8oGcFqM2Nhh7fkq3pJNyi6PKvyS8Xxts2Nd1QN13f6mP1svM2pYxYHs7SEHJE",
  "key28": "5L6jcY9enBA8m9mVerai6p5W12LUes7J6DCtCrDDh742JpQ9XUXnNKxExfWVLkq1q92p2WYATH8yv1rvxYovyWiW",
  "key29": "428hytJkeKwsLHFohMA9Lwz5K2mzgWVLM5z1hgzpyy8n45ug41WcmWHWBkKiGYLjNrSQc2r8jNwJMzXqSZam5UDh",
  "key30": "5CAifyVdP5ZGA7ys85YYPiX6ei5z8HrMBJ4qsjUXbYYA9WRqLm8vQVzssJNMh9NGoEawqeqkinhiuUBxswsUcPhb",
  "key31": "2RBxfwmQVY54hh254ZwvwFjKYJxYTuWEfuEYaE8aiH2cPmn2Mpjh27L7hnALTyU4xi6xbmVaba7aD3faWFScvfBn",
  "key32": "47mAbHaaw8AJWySZHg9bjjnvwPKH52QKRWmTxLwNmXapwJkJbtH9ZD5JgW24jCbS6mz8UP3AKUvdk8KDYUatygwa",
  "key33": "4Jaz8MT9GS3hiWzgycA4Ljb4p49s4uR3Up5TTi9rXcbCBBWBpSCzWE3VQKUNLZ2RnEjrytEBXwRXtFGfKg8kv8G3",
  "key34": "6VGyygjG65gbZaaHWP7sd3bFQw5vRUBVPU2RzWKpKERLB4kfZafoytBr8qQ3DmJQb7JYwLvEU6cq9NCJD4DKnBj",
  "key35": "2bA6qvJwALGBS7jPACZT8ayxYdr6wbCvNWuDfaPRQdjtE5u5HUGRSgzMQP35RV5RzkJyY4bFDzaXiazMM2DrxkzS",
  "key36": "3ZX6hqx6DXa3C9x5fXfpGYFSSRQSBzYZPSRgNLuh4s7MoJrVpcBujD97vtjpGsXBJTJ7o4UEmaNMedKooEsYMyAx"
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
