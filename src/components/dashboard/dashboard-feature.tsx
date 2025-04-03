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
    "4LTVPaARgyEEULh9N42Nfy4uuGwzUKWXP4y54FEugSjiDzGHKi2eRLdqpuJeXx78kjfq2vs7rPTHEb5usHWop6A1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QEua5XfjCro9wBKaR8zsu51fWVeetDA86uLhUF5jVW2y5X4uVGya4njCuMKoEPYc77fE7b1TypNqnMdEoEj2dwz",
  "key1": "4cU6oDSCA7GCKoRTtHfHbNu8zweMAonRhk3624b919xxg2mJoGkiT2BpVK9gNy22KbnAykW3fhzqy7sC2Rms2eGP",
  "key2": "5jEBdSU3PRwBvvRp8VLMoefHNrjgWvaw3gxUugLpk8xjgeW25TQSuALwxfYSTpqAvXGxHHfLwgQLVuMeMKrVCcmU",
  "key3": "2vMW4AH6zLDLT3bnX6PWRZAiWBgt8Sa9TiZG8MNGa4qrWUBJEExEQrvQL4iMbdndQ9bdTUbdjLZSowULdKdGnCwi",
  "key4": "4bdxep11BycmMbMrwEsrXLSf7vhrY9r1pzK2oCadUAvgqQNfM5YsLD6yAFVKT8zU5EUsyyaMyex4zVak7y8Ghc64",
  "key5": "2unkjAHsMyrEXGsTDWdeeTfaDxgWXC6x8cF8sSf8U2WH9CTwNHcHxAggUkjvh6KVXA1FxsJeTn9bJ4M5RdnCnGvc",
  "key6": "3T8sMgEbtvDEnMGyQNw1iCdtJKayAJJ1yDoimDqcKLGDHHMgLGSpiF5SLuHv6MCZnWtqCPwbnZG5uXoLx2ea9Acs",
  "key7": "42WSEj6oZVHGe6v13UkZhY956ypmXAdNS5Mc9Q6tTqhzjBwomx66mGHjNDM7v9Tg3vQbPBqeAD2BsYr3jZCZ3Est",
  "key8": "2qwtJa5HoVKZuWe5KXHTVjuE5ScPgnvGKcL2wD79ESsmsq8b8xrRYFkfFbE6YfHDxjvsFMQWk5i9kg7G3tok98vm",
  "key9": "58JaAA1qrRLBieL1P7bKN25ecyjeKpA3p4jEhPvBnnguvkTwMidBTkV2nyKRS19fxotmxeazKQ1x3kfBu4dfkgXX",
  "key10": "47Kq9EegJrRYDAeXyK7teoFPFhaeyHx25SfmMPGneg5sNHxhSj7dcsq9iEwYj6zxmfYQoVNCvfLTYEbtR8WgHEM4",
  "key11": "5KexLBDB2iKe64HLzk95rQzXBthBuNPappMgegCKRk1YhR4b21aGAc2smD3hvVc47BQLVBTBmVRVnfUM6ybBy11z",
  "key12": "5EhG9XJfaN2ypfSn4jH7shaApKQk9ZLFUfaJqd7iAgcBenbgAri5EZK7v7RYFAmdBNvvq9Lr8UgGbrCTbBQPni7W",
  "key13": "2aFgxDbBCo2uLhRgE8m2TMTXtyyXyv2zwzVxRbahxUWoh7ayCEeH9fTHcmCcXP8L2X3Qkf5ovt149PgMrTiBLZq",
  "key14": "TmLARw1zNrfb3oQX54Lm57PseXnRULxtpqwFft7TFmgZ2SXiozGfJPHhrPU8ZkZxE7F4fEKGqTU1ChXxDbv67GU",
  "key15": "3cZ5rLLNWbd3vj3FJfiACdMVYBEHewVjgjYFsvmBGNTZ81ki6q5xPEUJAMgokTUH3c5PD1XpD2g8Q1rXq29TyTKJ",
  "key16": "21z5tKLp3riRww1ytanpqm5zsSK8MdSwAU1MTc7oPFFEdUPyxPL8EXZbbyVS8fCptgU4Z3b9NdyWxRrqhV9QR1tG",
  "key17": "r2MARycXuDYoYi6c9iyGFrRPFUSNBehpxPMKK7FmyJtcUZzsNBB7L3B7y1wX9nNcRQimeviV5bnTrW3fJKfScDo",
  "key18": "4uF6xAG8vMBC5HnGJDptiYKmJ4pFExXr12WcnvkrLob1TcjZZtbT4cf119CdRaftwM1fiB2mhwuBmG6DLNsxrKs2",
  "key19": "49gaQupK3H3ik1c8KcZBpY7yXB7Ccdvfy9ZF5amVUFDgVjTrQocXbajvNkkhkpo3DKN2QU1KkEwNo2hKbH9rApnJ",
  "key20": "kGkrMRypakZRwps4RPyAYcRbDGAUWKj5qgHBhjfBv8XeWRv927TRXiPiu4jtGU3og1mu8bGFRneQs4QGV44yfiX",
  "key21": "V2T3Drp4GETEyrNBfTpWkpp6zi8pJuWucKEWY94XUzdF81V9gMAVfS6w9dxhKFfnNceWPexyXHD1N1CAQh8qg2C",
  "key22": "5fzkrBmqDpsDBSrfhrqMJgD5RgKcDFiLb7yQ2xQWurWHUBw2XsoQ6JdHF2VKNgmTcrM89e7aHFACUHgYvh4XXCr7",
  "key23": "2K66M2NHoJY1vfRLbSp7mMqrNzoiXuUJn3pqnBEot1G1WJ337AtEzJT3CeFwxTHDk12bPG1e9VSHftf8uSBvuvCR",
  "key24": "5rpa1JYB5jxj6nUW2LMaTzEcNW8ooQDaF8Q6TDS7qQQH9Q6nEsmec17dgRSL1DbgQDs7K5k9v6S77iMYhNrmdfrU",
  "key25": "2pcHSuQ724vH9WXHtek8nb8iruTySpqGZrM2WQLNaySFqcn4V5m5KmPr8LDSm3nEMKBnQuRppy2dkiECKLuwTvQ9",
  "key26": "5qim8puG2dCPi13gcqYoZKk8evhDyRNUTHdaMHaPBAjUTziwfoegvYMch3remDAKfMEREbMm8mYakd5YJKGEfvvb",
  "key27": "3j9ktEvmGg8AugNEeFLP7dUHbj4tp2zkBqMH74USGcMVXDwnzaBCVBrvRDangbTfmQDCYQtvvPYv6xboA13JxfWm",
  "key28": "5KajrFCub6cX5SpX7E4pNkxLMAUcFi1Szbe2CUDawt3Fdi8E3te1PoKgDZxgamoxK1bdmbeXUnaQhRTuHsY9J9Fk",
  "key29": "2rwSRKyaqAygSbXo3rt7pAiLU1d4oYwRLRXqYzTT433DeY4wGpPHTLqi7rDWG4JZjVFHn8Tmw1GE6dfeNYudXT3u",
  "key30": "4gWrUbHYtn3B5ti2nmy4UzEopAWeXaccJnaP6cui9u9i6UEhV7qcYJ6D7jA5dZF3eGRywfrTUPeaunP66UL8xASF",
  "key31": "4V1bA95ErCxzXgah8MzfRobUrXPJR9QtSV8BPwfiEZw44y6WryiCtohuX5bvYuLLRshxTtGoHFWqG8pTTmdWDqrz",
  "key32": "5tdWE8VNaX39MvKsEBs1SQTqDKeDH59xdt42xadGS8xbkaCA1G8tR2YpoLE5TQsry5UAxfs5yTQBtd9DusnudV9D",
  "key33": "2FnsqNjTifa2pE5NcLJi12HXgZXZNpKVEgE1v15T14wuavbCNwuBazH3FUo4Rwa8R51aL57DGxnQWYhCAwFQvmMH",
  "key34": "66S5sYRDCB65APSF6CmXQWRtSX3ng9f2r6WeEuWqKRKeN9pd6FuUKm4YGVHbmasmXCViqhnQRizC7FZAos3rHzre",
  "key35": "4fwSwn3eHuWMwAJttqoARMGvNWUazMkqCUfhChgcFKWP12Pp14VJiBjTzAAyU5fiMWWU8qRzcZtkv7tNgWVVyTgX",
  "key36": "59JLntGLSsNgoHD7F3hc4ksQS7kqb52Wb5zV8viUc2vFbGFwzJPuLQuBRZjHxU5LpsPeaFGGvFyPruizwENkk23z",
  "key37": "5nQZGenfdeU8hrjFUwK7YToTjTVDGY5dLoX7toYdNiZEo84c8FKkQ4oYJBSmK6HGKsp7fmHK3ZarAdPN8ZrMJGkc",
  "key38": "2zN3tTA82Yxj6dx56P9YB3qFDV7vRN4sQUEFYUgpHyKsTK9LWoaQjnoG7TaogtofNn3xFxSnW5msi92LLJ5Bew2o"
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
