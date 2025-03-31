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
    "4waPcEXqpkticfvjfETBoLvcuJpFTaXTYS2QGrVEFTUg4rrZLiQdjUA39QXMxe8FrMU8m4A4iSaXPwpUiXyiUsLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PqquVmQwgowRm4NHKwzMS7CuT87ADbtJB3GB3V2TNGAiZyKx4mLRHXbsy1HXqF97FGLjb9BYsSzK6ns6zsxvxKv",
  "key1": "2B4wCXvaDTt65ERNsBdGereXvTxVPD1HjWNHAHo4qsFq7SFQeEVGTKhhTFFM7ZMXdbYhXgFcsN7Eu7RoJNRwqyde",
  "key2": "4qWyhGtv5WM2k5L1LJFAwxgssCcWhRXKMKaB9qND6WfPP4xivY8jF2UJULJFCxbv2PogfT2ZvHoZCthiVGKh3mnw",
  "key3": "5XojeyrjALQWhj9LfrB1xRBrmn71tKPWKQUbs4Q1G88PDZEVgiorcm39reSkhQSHDFx2nzGAfmZbQuQLXmxZCrBE",
  "key4": "4Upz5KTxG5LMcHJstJAJdULu94DeGxpDZFBGXYpzgaJfoL4hNVQmncEhQmZG5peD6rvqq5rNNpVNcyHgpgWZipjD",
  "key5": "5V5nUr1ucKsyFsBRbYzF5gPBqMAKwTqo4wmbGVKD5Eubm6RFGemZJKHkZPKLcAevNzmD1aRoXiTbC3Js7WaCSGiP",
  "key6": "5EH4uXEXxRwsBnTeejHmkzrT7FnR5XXenjz8m6aXHHX9ANkberVxYPDeasV3n43z6Mw3mMxLvkmZxtPaRtUuActW",
  "key7": "5eyAf46deyXizV6osZ26oqTpS6e5XPHxGhUuRyZCPDCrwNtPehkjLpFTuzTFTzeWBGv8KAmWj9R2dPgX3xgd9Zmo",
  "key8": "3BpM5dY6i2Eu6jCbzD4bhVPeXZePixSgQT2pVpEU26VRfZ54wcyKmVyuC9edeWTwb2KPboWPNDHRdVTTAAn6XE56",
  "key9": "5cY9RWzUhECEQJSpVEnud3vwLwbp5Hn675fdy7xcCovS6aCcjzXFsq6j4rGD4M2wKomQNEpnJXnPXufa3Km3Kv2D",
  "key10": "3f2o9QwPLaM9fTypt5YaypFP1DizYftWXv2BwK6WHZitKoFynKg8LBq4uXstVoi4XcgLXzRECxMQVfp5zwpzHNfN",
  "key11": "33DKJZqYLT424VYceKzVKR7qShXzGTGCZxeuKrgKBpX6SLcSwXn52ocnQX2V1cH89NeMdo4yy1iM71bEKVmvumgZ",
  "key12": "4iACvoFNnMeJeDwQJUCgxVnyG1UHB9MF5g7P2FHZ2HGLZ2qgACVnEaNwjNBEHe1un1iBvVwzCwBAWhFNK7m8iMVn",
  "key13": "PJ5GTCezg9gSaG4dcXRFHx4bB9YmBL3Sy2BGa1Pfz1yHpe7YARvZsMDQftupGgxPadEERPSzCvvdcDsN6aLq1mM",
  "key14": "3dbrPBPuPojBBxnFJqYpC2vuyArprX7t6TKLv4qQk7Kb4kLUPaJjwYSzGMtat5YVxdJbPZpUM33a1MWtxoWBx5EU",
  "key15": "2biYCLgr9m49xgU16xse9BQrMDAfi777tEMeb2TPScGiHHUf8D4u6SJnZcmMZ4K95eEMCMvQZYYKDs22h9exsMcA",
  "key16": "227HygcsSptuaZZC7rq5bPKdvKyPPfuLuYoEWqTmPrCatoFPRypG5kdNdRtgBK9fnuBU46d3QsYv1UNwGhoMZzDv",
  "key17": "3A2efaG1on3ua2Mm9S3HtCse73pvdTdtmgzMnoatdHajQ1ocyvGYa7eQTkHH5of7N27dgdmX6mn3QprNweY8ypih",
  "key18": "2EFbUv46PczJbfTziqxTmkuY8ffPBvyT9AKx1dTuJ5LTwxVEjpoFMBrrVCzLqecqNV2UcGnnviN1hifg21jn22Kp",
  "key19": "3SZbMV4f2JzujbBodWuCYMUbFsVTSnrxiYHDGJmiS5AKjoDBwaCaxNtc1eq1u1wmtLPrV9ANiCRAktx8zDJHSeez",
  "key20": "4YqVub9cR7YGKpkPNeuHezmpdo4dujC3HB4fhymoTvhbjnfjqNQTJ1XPTW5JRVmK3ChUozMdY3EnBFqeRD3dhigd",
  "key21": "23aqL2B6jhamTEwa2iAYB4twSEkUxRESBFLrQ8WXtc4xxgusovyzNoZ2Rpn68PmtjCYqZ43t9gvWGdxCb3oU6fiv",
  "key22": "2JPr5ckaRfykjGBdwBaLYxmhJvCAPU8iURMaBDKG4CjpugYaxm7EVLpyTWzNNCPUPHKYkooyvtg3FbrGUvScat9E",
  "key23": "4piyX9qqdzRhue5gduyVuGwJdMpDj5qcD1zKrga6mSx6uTyUzpq7h6YLuLSxYPDxKVs9eBMtS6JzvYsPoWwQsLdH",
  "key24": "5dGsUYfAXef9Jn8GQr98VpYJQsuSjsKzgNsEL5e1nUkZaFngeuM8iWbQFdhtgt9pZMEENc4CvDBWUuAKbw8hBFkK"
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
