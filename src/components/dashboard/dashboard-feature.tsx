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
    "nHEvXwzK4c1A2J6pk84FLa6HvZBvtU7dK9BeSfLMoAdGFd4zhEY1ypj2zhaTk3Xt93cYroKq2drtFKQm3dwbU7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ARGKcUkgSWPci3AhtPWsAtjHkS4bfKFWYS3wxVoNQ97VJSjM2LoERz2JezAYLLm6WPjmjpvSnsDT9hefHnfX9ij",
  "key1": "4xudFUXXoj776fNgbixt6SgAJjzccN9sPuCRUTaDMhKJrHY1uqgzkpf8eWRnRuPa9T6xw41xSi1GjdALkZpS8FUc",
  "key2": "5p4De3mDdDbuLfCS3Ug1fneGVFqZ52ihVy5FT9HiWUpZPwGumBQ4XZxs3vKRwAd7eFRAGB8ZT5iFuPLsa3y7m4et",
  "key3": "EF2oygn1awqw61ZpvFThhigoPHXeJweMk8Br6UAKaUy7Pq4fxgd91nTdusgc9cFbvcuaDiaKnMDZ2riSMNnGyG1",
  "key4": "3wTJeoXAFgMVrGeDBi7syt3opHPC4gDd9qPiw8EXRYDtANfJg4PGHSGrr8kdAo3vBHNybpXti5m5cQkzXDoq6AaB",
  "key5": "2ejaucSF75Fj5jz9ZfFyGSo5s5JKsVdmwTLHCw3BcxMQmkgSUypsFKRJHsAYDeDtcSpSavQPMn4gKzE2LViHxfWV",
  "key6": "CU1YT2TyBseUczdHZ6BoF2HpFMTwWk6zH2EjAuSbYjNDCnpdmg15fXHpB9oiBGsGr6ZNjDPWmbQn9kKbpozDwrJ",
  "key7": "4gpsG5ipK7rPof7NNYgcxHiDiigfDRKFJFM5ZTG2UMTmRfXPugmwFgvrHZJZQtuTZzy861idNDRnX5FcVCwRwh1u",
  "key8": "5tdTq2jeRJUCYSf8Q1fVuBhiobsH9Zh9C9K1VkD1J9azBzraW3m8CdA2wMXn6uaHj3YRCjpDURNzy1kR2Kgp7JVw",
  "key9": "EwnWavMgE7EWmJUiHEbPvgVZoJnATLS6dGvrAfRxAnoTAWMi15PiLggMgKcPybKhvLF8kktSxwmmjTM3ZBLdYaD",
  "key10": "2KigGzu2De1NjTvszztJseCKwTPuJRFnB8V84ERzwnQCtwvwX6mrUY768rTLWr88tti34PEMCccXRza8XYX2KLGk",
  "key11": "4fqhV4NF7nUv18YFVAAtZSkcb8FCfFpaB51Hpr6nkSDsh3o9KMeMxiuKjufZU5A6QzvHvEBGKwgeHqqoyr7fB3b3",
  "key12": "QrvT9hqMjp1rTEZd2WfLfb2rHGM4QWjnvt2uuQo5PYcNnzikabEdJxjeroTbCC2dTEC5u3oP2QTLmmCYuqthhLS",
  "key13": "3YYpsX8UMfKcuVA8eS5EtKXcdHod52RYZ12JFan4cuv2bQxzhYGCfKzQMNsmKv9nGv83HKXh5qMsqMEHYbRokf2p",
  "key14": "5VTYecWibHGo9YNJeMu9rMuqaEQ4PT3Gb4Jg9fD37HjGtkVGM49Y4zVarAt9Mg1TC6MuMqYUsgh5SPihSi4sevz9",
  "key15": "2yJTy4GRAWQHw1U2T7BZX8U47c5uAKvEjGj62h2aqRcJf7pfkaWyw8VGcHrxXoQB68H2EnotZvFaREYvzckP8Vih",
  "key16": "3yV7tcueCMBV5MVQiAZeeKPJg8GMtbH5vxo9MGr2SYZBSxigZ7yR9Dz9W21eQ7rCieGs9M2qonnXR6MTsUEioz5a",
  "key17": "3nGc4Vpu4rWA44wiSu86TdTgQMH2oRBzrNeQKWU1ZiyjymF8dcVFzXpVte5BP51rJxECEH6H5GNMqq5bCHbG1jQL",
  "key18": "4CphLyCxtzHke5JNgZcVe6b7Qo4mPTEtSLTk7SVs5hgR4fUcBmxp6mQ1hXMTeirP3NVuwXpKBjtH8BqN9vRUvi4B",
  "key19": "EhRKPweKZ431ag3veP58rXBQzJA1qG8qUJ1C8wXFfEYKZyGzcT2S6SLt4KdgjPH8XH6mevARbxHFvGcxg8EC95k",
  "key20": "3SBqkdF1KXxDzqs9qFinfKaRxbBuH32tUU8h3oeMVEBjFJkWsnkuuoPHQ9xb2sDMkZ8svez1644mTDDPr9UPzz6z",
  "key21": "3gkGT6Dxv5S6aTwsajc2ocXZZnxa6Ea9x63LsSMLHsHuJiaT3PmikYtLPcM1uSbAUCcrutwc2gbgFMHx4h44bM6J",
  "key22": "K22tyySvE1cNzGfQeREB23iTPBwpL1PAH8VX6oqiTvtnaaDSsGf4hx8bKrexKcuYFZCxieyA4dQj6S3n2prf8iE",
  "key23": "3cyq3aNCoFNDgEHQ88pKrAN9iCEHDjEWtAwhWYTj9G1uX3Bo6KcLkCcKXwtqc1bTP5MMFnpvyNxJvcQg5tbP4uyL",
  "key24": "3YnEJjcZd9tQMFi6WgiV9ZZBp43CRFAzvSXAUBMZ5MiVKXAn3iisXvBBfzWNoemaxccPnq3d4pVHHfJtnwprarxX",
  "key25": "2n8pUZXinQLk1pzyJqpowyBDLTjxVuxb5stmZhNFvp1aSrtVZ7zAxZTrrtFbJbLZcx2bVP15bbbnERzz4uYSdk1v"
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
