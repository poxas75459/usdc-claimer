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
    "4XHC8w8qrh2aXQQ97tZbwwu7w7H62urbKwFEff3QuxxVCLbYKST83DeH9jTTyYCegfnGLiYCHXHJDh85SX3NLWHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kKC7absVchmq3mwKWfNX8L81d7fhxTEcXnHnzRJDgdtJgV4tEAiBNXkDhNwonHWFjonEE495LaMyY1UorSbFT9v",
  "key1": "3LBJD3xHi4Dc9P5hgGMY2Fwwk1XyJErcub9Z2tjs45e9kfnUoGvKHcAbg4uAZc9BeNtYtj5MSDFGPq9pJ548endx",
  "key2": "2P5f1gtJM9sSUGyC6RDMkQCsgjBoo9qSAUS45poQ5bM97AAzmGTMzhM5U4yRmfpLDx1HMiSWQfWVuhJCBtaxxXh5",
  "key3": "4hpKrcZ2vXVZE84nBQLQzF8gVjK6Khq7wMoqiAnKUT6BQtAwrkEWSDr5HBe4vFQrUMs8wNcuixf1vyoa86S8w1Ff",
  "key4": "3Ju8EuGruDWtufF8hrz8G8dma6ddauQUG1kQXrfC3iz65a94q64h4EfWa4wTgGuUeZy3juWs6WMzogsqWbgAG8Cy",
  "key5": "3mfAiFtzd6Vr51Pvow2YgGos5HXjq3MjMq37JuRfM7SBTXKje41LCW95JPe6wHwtdGCjC4KWoT6ejSirJCtjDK7Q",
  "key6": "5HVGezJFk4yeb6zoQ6T4eUNBm1EEF3fRufXjcE8rteTFtXo9ffiXRhn9QDGj55mA5HXwe2v8gx4wuQ3dQrz4ViQU",
  "key7": "2CDjm2zeVGY37G4UCCn4bhpjyv9LA6Ka8SXM9odFz1EFfaVVE1mFVQVg8uiNeHhfwYLA6rg5D4pxC9s9nHJenUQW",
  "key8": "5YJb4zXiZ3cjUBQnkzXTythqSPqh3hwiN1e7unyioCed29gSFJTEUypRAMqS3n8s1SLsLQ8fbVsS8qCZSRxcyzec",
  "key9": "2m8n327VFRDjHx3BFNoTudozuV6XFSe9u2YneZKjVa3YtQhBjtWX34j1MJ4ZGfn7SaKDSfoseFkM37HUJrZEKdHH",
  "key10": "3AwqfCyQfWDS3n3P8jdsEgrCv4mV2mSaF2qQrnZAQcdQY4UwqM9PCRSW9CPyuxEG4CbQY6ALCcjscC8bFarnuyhu",
  "key11": "2evjAkNW84PsVUDtpH2SHJ7FhrwCEYFdrYkQAm6yeomtnmc5WrrvX98mMakuxu1d4zZAPcEfrzZQL5Vvp8U4auKs",
  "key12": "P8NKDes27t4D953qgQNEL9Ro4UJZzWPks9Q9jUaDeQdVQTG5i24GtHM7yUkj45G21Z5aRt3YoV6yhkfFMQ4Mss2",
  "key13": "487FgcdBmvd4erYcbLUZF85GMd5GMFUt2eLGTEJwjEbwKSD3oDUyPNnuVfxsbb8Y5gtSCXGFqFA3yjfBWD95RqCc",
  "key14": "655J8kYPFaskWx29bLXmnDipMj8YhodmVR8AxdRRXgBLFqRt72bXUM9tcr7QsWxbcYAP3B8wFip77aVig3zGVvCR",
  "key15": "5YG5nZcsR6xxehT84b2m96gpSRoGGUMLQLiePcS7kzvRrvCFxFygE9zeUCnYU8gqzQdc8fhiZDp1Zqw1xzQpjbPM",
  "key16": "NLNBgVnK1evqPBrKqDLkGAbuzQ3Vy5gjHXG3QcToVdFwc1tJmeaRaaz8qTMrANUT7WLZQV7DYjtzKGL7xw8iGyn",
  "key17": "3NpN9s6JvuDFRvYJvKXzebYB84AjrYHRNZCZ133nLha1HW5eSZAXMJWgQHteBrKJwmDCnSjXRZT6jkB84fUD5DaU",
  "key18": "5EdCPiNzVWdXCZVrr7xRDMeAtbc2sgF1WgWm2z6ukeiMS8QcyKQ6tQzmpmE8nz7FZ9oKD3UrZP989ZZsFXnSu3Yp",
  "key19": "3S1xb5pexwUYyfLvTumnpRccBRgxWnnR23PKX4gqsMNzgdSt5RXN8naaEc6PC4KuzNdWT7zf6quFSGDqbhVrLLSK",
  "key20": "3r4WhuYZCdw9q2Ju1wT74r6jEuQAcsduLCRboAgJ8qXzScBjKnMzQaV244LD4zGCxmLQmSENWnQifmuL5a8ESRLr",
  "key21": "4Kp4PuF3BCoWjRhxMaZVRn6FbDNCzFc5rhyMRHGsjXHWHmrX99coVo3ZkT1sXWcRcSUj3F3EZsHVQGYMv8NAnFrk",
  "key22": "2HKRZqf77kQDEr1bPut7L7PpFRqxfVEqCmUHBKPKJucBSdng2d6c7a9tM3HRAthDLXt9YoHWxLnqouMzb7ShXeuM",
  "key23": "5sBypioTLAvN25dkPJp9D4JQA7vqbnfY1aLwVTFnNaFAMr1nyVXApMQbxxWj1vfKN2rCEEYHAPKdKZcRQvACW6op",
  "key24": "2UWJFMLN9BKtwLsuPtGAR7J9QoFvsu8Y1HXYiQrog9ivgNXps5qsiznmAdX9DAomxbFFo6LSFvcaq7wAKkkefmwc",
  "key25": "4C7nEx4PyQWenZ2AGfuaTRDbTASMFFdohhhQEb12qWK5Ud4C2HLya5i62pXJwiquRcwbUg9zWawZXzGRuEsrQYLm",
  "key26": "2FGdzKXwhgke3uhoeUdvXzfDmaJqtaqttRq6LQrHQYyY5H38ApEhPHJqoNnJnymwG91GaHzQrbHaKHD2RF6qvWEy",
  "key27": "58f2uRg74kT76ZLdEpn9i1ueAeLXxUxLhZGCMhhwWF5mwHci2hFMmw4qDCNA6pJ8otWSJH9HgtgFXGNw9mVQtfqh",
  "key28": "5NdYeeLsurj3Y7pUhfFxz9jx6CXESvrCSDbDzNW4854NegoP2T6ZXJgG5DhvdehnP4vWs8ADUATHM43wAsdWDF1j",
  "key29": "2KnbtqkiCY2LR5hPYTmPH9APHfJL6WXD3fwHZE3gUjXBvPc92xzd6BEsQQS3bBifxsVPHPd6d6XtDFWo9F8BxZ5J",
  "key30": "5MPxG9F9qoDRQ1G7EomRiUK4jVNYhEdwTya3MiDzKpxdSFwaDFRWkDp6WiPnrRE8eF1SCyreEoM63G1xaZVjCh9Q",
  "key31": "2KfXn2F3ek9S9tGeUGt6fBjhujDpjpxcy2iqrsSWVskD23tR82gANwBc1S9sxzcLdbiVKzsyphKYV8gZSJMjkock",
  "key32": "3meZFnRkfxPq4mhYkxaQC4iBjdYsHEQA6QUScyKKfq3v7snnowggz8Gxj4h456oeE59MvBaudEMsZwh7s1TeXG4b"
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
