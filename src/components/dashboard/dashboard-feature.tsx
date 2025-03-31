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
    "2j9mq9JbHdMRwAXZS31ZbKs5ucaWoxM2YG4szsvsV4G7tD4btyUWS2w7RaERHZs6xQeG8zsMGLUc79egUQefTqPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yDdXBpKJAogr4hkfYZbVpNY8hssrZUfJG7zeJbXSUwvVmU75x2fewvDFESZ6FVHavwMMMK3NtHWZEfHYoej7LZx",
  "key1": "4N4p1qjVinwFbCMpNTma4kethqtKvMqdEFN21Gfss7vsqC6J8a2sYEu78eg5VNWzjAmRhjRhvTeHHvEDmUrhokY1",
  "key2": "2Toa9jwJVfSAiE1gsHPPaQuiShBJGBUBS1b2A8XWV21jEE7JSbFL7BW9nmWmgsnfLSb9kwfDe98nDubk1kaWAmcm",
  "key3": "3zXwwAgDfmXaHKETfHbv6c9rmFXSxeMXbJAiKdERw3o5qCZyW5JaPzCyQikf1rmVVW2eSiZ8VZvWvKXpCc2qgzXV",
  "key4": "3amzDhKyDtADehAbTTKkEe2MUQhzPmUX36UEAuAnoDdWHsKHgNWUfSwFczYbSpQHwZ4MHynpiE2BNTo89QcbaUct",
  "key5": "5F4DxwRVdmUnK9y5T9DeBELo1NrPMiKNrRBDKjPHh5XNgU5dY4YXKsHdephPDXFbzjw2pqfQ9wMwXSiVuVn6N7K5",
  "key6": "3dsZ3DvreA6WFbkwwvWjMPGPYT9b1vAbhN9XRkhu9rEeS5hKeBBMPqT9k26Cb6tChsDX1ewi5sEDVuQDHmef7zAh",
  "key7": "29Q3UMRtZu9VgXcFJg8dFPueUhKteqvkAiJKrN1CNvhKWcKkAba2kVgtRJEinPvfKyHXzC6bsN293r8cKGiCxRfV",
  "key8": "4rSPmqY36KXpd5Kax7uk5a14LcYEC2xBZypcqW4Z37vhAg7mi9h7HYKCGAaeCFwRFkQtbx4qHqy9e7MZNHck9Q26",
  "key9": "2QE21RQkG5xaF4M7TuA93zZmdiKusRcW61yxvJWDYU2AYfG3dUhyMDNMa4DqK7hi8ffUzH2R1D9s3pC2Wu3hupyW",
  "key10": "W7vE5nFnmtrYvdhAEoBUVRAGHzcJtPii4yLgSKLvPMUczZVjTg2QySNA3iYa87hxz6JFmSY47hh5oL35EfZskX4",
  "key11": "35cz4VHjtmpFgpSZTNNiTVHBPyFXkQynqbZj3F6iWbxePrPSvX6BwRMs2Pa4gJbSxpCtVh376YzcSmBQWuL47wjP",
  "key12": "5ej6Ay3UJ9Qc9RqQWG6iU29rkF3Kdvs6fpMBVtf1LbcbgdepPmZncn2Eo6mvCiUYH8wNKMUqLazRgMxzi5DucjNQ",
  "key13": "26v8hgAZC2XYjXjUUJFUDaZR7QLSfZg7ZPtT2sCjyvd9Hs6hMQiNgUD5GVgjc22nFP2LWNLMRjUMfrcnf3T2qLuz",
  "key14": "5HQTSMQBEtjuLoxSL3NtLLhvXwxueqADTok4Kgj16LQBGEWcHkWZv8PLnT1sXCoGR7tFuwMYmSfFp1zbpmgTPQDz",
  "key15": "3btfa4todrrr37PVGcPpNhBXe9nhen9zKgwWgGQi1KGvAUmZxLwmTS39GoRBHsgbh6CRBTLdzhwba3WNJMCPCyDH",
  "key16": "4cKUVR7GvSbAExgvb5ch153dNUBh4a6NSsMcDXrcB4QXaNss4uVB8HwWRpkE8Xqa9iBJiWj8NcfJ7cNcZB4cgcZa",
  "key17": "5ikNxJGkrrP6ZyKhH1wTfiLeRJtzedYyYAs3qefsrciPaBZoxWQ8GEBiRDr83X4kaiQMdqvX1b7Wte3ERim7MCva",
  "key18": "5NjmU89wWGU4411NtJKYYoeBgFLkU9ovAvuatFcPe1LSAcexxA9DM2Jg9fD3GW6ig512cxvon3DFWw4FXiB8nAZ9",
  "key19": "48piYoCaTLfY8RWi1YwRBrDz5dXU1i2bKr3uNY1g3KMrfwVZwaeBjvAHUtKaDaEVYW95fx1GAdL8e98wFARVFQLe",
  "key20": "5ctG6hZAY7xaNTx43ULXmwJZJjtZdohUcZExMwo6PXYABaR7zZidxwRtyrRstDA3MPVDcYginkNh86JiRTxtdmAW",
  "key21": "4jKomCbDVJiHniqf1nA1mbrGePh2HrvhyBuFMoNFPCqGgpaKAtYc91zr72o5cXsSMjSLF7d3aV5EPr8eLc69GvoT",
  "key22": "3RnMDms4u32gUMcd7XMeMnvqWXDKSKMxHqicngYEzzQ38EAGXLw3umcVozrwQ7fDa9NLbcz7EncDGLt8uWJbu3MY",
  "key23": "5F6Rhx1JMpqfzTYP8ymavUZXJTSXiuty8YWjfQs558nY2iCFiLS5H1rV4QuCKg6yhMccEuEvpM4B13v3NtnaMMMa",
  "key24": "2stwhbYot2CwHBNK3opfmgDVzv4Gu8W8tE8nG3SCCU9RhLC1FQsDPBksHTgDQuBnwfYBTBvVW92X2W4xbwBRjcxn",
  "key25": "3XL67nQgM7PZUfKvqYn3FWNDv1EhqpEhmJgNRkiYC61VddEvygcGAzF591ym3PEYviQ5k293BUeKFMs3ZZGf3HbL",
  "key26": "4vrCijfpqWrJngS1W9eaR5z8BoV2Jzi3fbQLgVfoSEuQ3U9ETDkQpsXHzYqLcTLYf3gVTQzAGPUqeU4tMBeSisX",
  "key27": "CjViZ3MzYkdr21y3p9iB39eAFTY63aX6NtFvqeqqv2RLwYCCXApb2tX82tsu5NLtFnCF8yG6xa7y4pYFaKiNpaE",
  "key28": "5qweP74xk5BNu5iuHMnehEkrP5J5rXYihNteL6t34oLDDD7gRrJGH9666DSB7hZuWS38QFmNp4E9K5ESK2RBHZC1"
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
