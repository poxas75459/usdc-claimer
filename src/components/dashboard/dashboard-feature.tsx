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
    "4hMifVg4WZPUjX2cBsPj5TqZm46bZohr26ffAVa498KdYGYvar8DLAFYW6UxGTtr2BM95jesax8PvUx5LtMEAy3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X8ounNBDj7JtPg9bDygW5ZCDDbFwGX4HfW7QzCk3ruVx4i28XbVoRAAFcncG8DdXVHoZCZmfa3749f4pCXkYGtp",
  "key1": "4nug4TY444g9JZBQisUxJUsKmNftUR3oRigvncr92Gz4aBSPy4j5LVK6TTwqPGbgTatsyzBBMa5HDaFhsqhu68pe",
  "key2": "KjeYnv9nJPbRHj1YpMb8SUSRF56P4zGN742DcqqP5PFAHYpKPRoYdCXtgxG5BR12niP5fLqoTBHyTkae5SDaM8W",
  "key3": "22pWyqDTeUvx4PxoVdvi6Zkc7ehsGCVZryTF7RKnB8hSQkcq2xjjyQBBxnEf6nWjBoYbP7mznaxNAMMskcp2ZyZb",
  "key4": "4cNQFgZYSbTRRpno2Su3ks3FNYL97xgLJYsjSLmn2ZWdgnehRLQQcvwJVvSx6X1xknybw2QoZb31cFPXKgpe8Qtb",
  "key5": "SnT767L4SNq3akaGBWMJrjVPe3hXpCW26CPpR6LdvxXGtkCPcv4qZ5PiTMqtKVR3sgKVXVQeBCFMEXJQ3MTBw4t",
  "key6": "5jrMCqj3jcw1ZAyd9BUxA8PxUtyyVK6evgtVBX7Uw1DsDqEx4GwWNRrFHYg6qpRRdcMXy6z93FPf5S71jCBe5zcj",
  "key7": "4w8die29YkXpRDieQXoK9zjzuRw37zo5ciYi9xmg46zXsgyqu645VbY2BAcYwkTpyGViNgpmQpptt2mUkE6dvtYe",
  "key8": "4esSYWvd7AcZFBHdQQK9fwWSxKPzTPYSQJ9VcTAaWKHQq7NgnHgdWfbgoUmnPEtNzL3sqQnAxS2CgzVsTdYT5LEX",
  "key9": "33BbMJDA7MZvPVUY7S5RSJsACo2xoUPD6fGPAXfGBd1twU7AwtDNZTUF1ZfVDZLLPJb2rwyyvB33sLxamSMaqiQ1",
  "key10": "2NuwPJZpdrsFTNz1g7MQLjfEbSH7a2MwHc8MrczfYDcRBSrbD9n9GmmRJQxj2csuB6HckAepQqcNc6xfQCsepXXo",
  "key11": "3jo36GPr2J5GtscVVrKvs8s6kdoSvMNeujye9hV9o2uGBCxfJUzUQxrx1nXyCHXMYNdCwXLuhZyPV2pQybE1Qxfr",
  "key12": "2UKzBRUwv1pYD2yfD8TBQUahDy14LGHdf4rbZSzi4hp3JTDv3oYWzocRfCuXkwUtQv7eiSi8bDcVGS3QRwH2pkxt",
  "key13": "4EX68b1gSCwXq81V5HmMeVXLj9aFTiApNA6XeVYLBE5ZBNsFCnfDce1uMp5eFQkuAApX7X9BUDhUH3BVhcHhHjTs",
  "key14": "5D7iGDGb1pDm42SdgJ6p5WsQH9EWU6YzBznJh56XrujnGY3cZiMnTkGksiBQXTUQkJVEYFdmfACiLDH7K5JeDY7Z",
  "key15": "mvZCZxP84nBAsLtYpcg4ZaUxFzTyz3QqQtatxDwY5Bi8E248unv4e8gG6sKtY9v6KKQmpbMCCVrLoYiJWDi5Uab",
  "key16": "2kJs8RcqwFA2iGDfrHejuFCvyPj4Bght6sWGENNoVuixyca5TiydKXnY6ypwzdM7WTeGuGgDbT7cTdRZ4TgNCsRT",
  "key17": "3kff9RSG2WMm3ZpPaRfgHPPGND9ubqZ8y9D7U7uddKVsKrSR9ynaf5ynhMTsgstR9uKwAUxMaVLmqUgPcHDtfWww",
  "key18": "2pD5UqBUed3xVzbWPMbLerU3ybrJnTAWx4bsXFn5vEqnNLs1ox9DQ4J2DT8LQ91HUHy25eGee5JYAwCdVVTGkZyK",
  "key19": "4DzcEudi2oiPJCyKXLMvqui5Rd1DpwhDSHzcVvQNF9EZanbcyPEuqspXmcKc1FE3jdK2aXoXTyf1jbGNFtGqRKAW",
  "key20": "4k2kZoi9ajkZxSk2gHkyZpuadQGJvAb1QA18rwYgkR91cb3v7yd5Uc1E3viWS3v233kq4GGBXkCMGB3FMQCoFmaH",
  "key21": "61UjWszNUVVcokq5Wf1MMPXR2WWrsc63wngF4mVCaZmLKrn26FELp8T8LezQZ2NsEMgVH64Fx6AQ9Vr4t5k6sXzN",
  "key22": "4cHRmR4g3VSvPXbvM58SyH1VZnnwPWrxFwsGJ83Bn7Jpd1RKegD4kDpir7jBaJXA12DNViXEE968KXq3cTi34Ysn",
  "key23": "479fUM8ceuqur1KpKJWUJ3E2jkEJA7r4PkKEUcMFfcgWKEvaoHy6ntP4FxRAdUHUXZ4PJNr7Vf6vqdjuh2T3aZTn",
  "key24": "4FMsnjiLsFC4nxnEsJAjnWauoWaCxGaCWkW2yjztdeX2i7L914X3RtMe2SQfSQHj5shZfaSq3GejB81PNurLUTpw",
  "key25": "5T6PDjUVeGdCT4JZmZFTVnWmheCYeJrbZxPhpVqbB73gVCEeC1zFXmdemvBL97V8creEcETk4iz6BFh1s6PbfLqL",
  "key26": "3omSKWu6TCUc4Q7PmfdV6hEwuc85CMV3j83LJQtuCfiPXMAESt7uwfizXkcyJpuBdYuCAYSE7TWtktXdvQTVTV9N",
  "key27": "3UNUHzt7ppDj8w82UyeKW1AJdHWr48zSqsvQfChfwRCX8DNsT2cYWifoshqPtgadWDDCD8Hr47iEqpxgJDmCW4X8",
  "key28": "hhSiG6vHvL26AVpxWxtwn91wzk1fo2LodBK5tYqAV6QW8UW6s53Qz4XbrzkCNc7NrAd1UkiquLjCmQdw1K4qtJV",
  "key29": "jk1YJWKiQRt1jSUmY7n9FTy9Rpzv7xJVGJeTHSCnH4HpGzTEFfFDHLBzNA7w2v7W6AggecPWyg12m9Bg8TLMB2P",
  "key30": "2dezzryEu1MxnDJiyHAKCFmwxy2y2MuK1nQL6hUCcPZp22UKKJXo2qMta9R8TwHJdvK3DPf5fFZ7Ye2CH46U6PL5",
  "key31": "5TCPJhMAzyHaUAtubbdg1yBPuj68zdSJjo81R9d4Zi6mfGUYivrWErekiQpCR4qqDggpMnj8nUiaorVPdzJM5udh",
  "key32": "3zyD1hqYPY3Dih7bjLqU67zVYPkh2mnd3nTLHZovCKiCb7Fp8ECEbdEz9wDFU3faeRE7PWFRFmkJPzZLc7HSMSB4",
  "key33": "4rgFDzyew9Ka1so8YF3ZZwXhbutZAC8EMmuMs7ZwSyhZBVXmcZfiH4aF2fprXKPN7jLxZwE7u12CN33XAiTKETYz",
  "key34": "nJEhwKLUtSJecpqNJK2Go8JvAQ1xnmEGHbTqVfoC161PGBYxFycUvVeD2PtN8pxJ9hkUzZcgGHYZqs8XqK62bj7",
  "key35": "5wFez6WdAhoqij5RjWx9ggLjRC2HPmpPoYPPF7pLswbTs6tGCSum35zavCahh3tK3cXF4WpxJGk7r8HiwFLFZGaP",
  "key36": "46VLcWVrdaZLE861Zj2JVjssHKu3sGEo2CohX6s5eaFqrHT9PeUsYetQKycjmzJecYVFqyvpGVop4o4pAUGTHxqS",
  "key37": "een5GHGty5VAYD239nXMYL3AagzzaHPxsi4DNwrMgoGmkt8obNRLCvBwWC5gqo262XqhxE1FAWuVbBpH1nrGGQ3",
  "key38": "5dGbuSqAZGGcZWwG5G8N6qMiMm4hAGvYcZCUPUvZwNmrKb1LczdMHNuVAydMwdENb5XB8kGC43SeFVeCyHvDadLz",
  "key39": "36jKCegsLtapDfx9j2rshUM4QDeoWAUVWGxRSmY8FNpjASZ7YUFQ21scfMeSRZhiP7KgcQ22VEReYBW6oH7tTfDR",
  "key40": "2sZKfHxmVnG6276mPPjMwLYWbYYv23gm96moPWjWNh4FGjkmcmBHqdff7XZqZdWwhYnEzv1uQoqKdH8PQoJMK41S",
  "key41": "5MQnjPUvASgTRbXxXFV491yPZPga6CySPi3inHfh6d3i2y2y8gdXY3kB4zveb6MJSW5Xy6ERTdSBzv2TXCirtfgo"
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
