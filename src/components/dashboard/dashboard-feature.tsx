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
    "2xnScVgDa7aj8weLqqyM6kmrYtYUESuLbJzmE2WCbfA51XQC1aWDqaASDASbqRQ1VWgAT2x2VDzwguEhZrqhg6xL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WfyR4USrh8tjETAzsq4zktncEo6hR85Tktpp4GSgsemczJR7FBVHzmTtA264j5emVnyKLHdgKSwEdukUGY5tzma",
  "key1": "4Ao4euxMr1hANeNwiBvmW6Tyq8fUuw4GAmX5mwQqH7uFyPUtRwV4qCtataYtMUX99kdFuMzRBwW7ECiKB56HMwDr",
  "key2": "GwaVdibF3oKqHzeErxSdhbbjw1aogYVb8R9kzuWuAdXqr3TNY7uWr3m4Wn1P1Uvhq5koDEBUTQ2pxduD5EqN2sh",
  "key3": "g8zAbdLfhRx8rhEvBQmy3kdcEgsTJpZgR986irRhjWn6V2DACXpWPJjkUtJqLkVffNYDscKabaFt9t1JNSx6Zcc",
  "key4": "2i7iKNNnEJN1g2EchTqsaCPQZX6EBj3q8HtfgMAgNShq81Eb18vYdUjSeWUzp6ZwcWGdCr4egM7KQv5CAJ7aJsqs",
  "key5": "2kt6bNF1LcNvPX7q9gLLoWjwpvRNn3KTEwR4MAXTKce151CCCAhN5wi794WpmWGs1pkJuV12CguUakAhzUkrXJ84",
  "key6": "59oFrFiaJDvgt67W4sGuNr4VVmduGrFmAp75NgtT7L4xKkEtcLpyWsDb4TmscPLpaMva4ukPoyHTZJjzJF7u7Te2",
  "key7": "2FLGxfSsAKVL17cmaLqkA3G16EDK9poxS5BGWs1e65vNGYhSW4wQwDGn5hccawQ9Z6HyTfvvS8nhMAocDZwmUcN3",
  "key8": "3H238EcmwSHHfhq63E1ampWA769xfSSUEoMn7KcD2KaYWarr8QHy29wmT2t5yC85JscwxDauBnAuR32yzZiinPeW",
  "key9": "5EGThmqdcxk5VV4k5kfukgAVdVArgAAR6TXrL2ktVNPaeEyfREJkfFzpKSPRzDNrcPpTkFCfCaSxoXhmcgFq5Zht",
  "key10": "gvxMHgQNG4BKimXVx8M5SVnJmqLUZ6SiFwXiVZYbo3mmBiHdfmzU5ZygnhsMEmSy21dPyHMfUuMuzGhUEEU5Z5Z",
  "key11": "2fXYBsu3XVRB7MT7gaGCf1DQP42Jg528oiBNXBJJ6DHEe7JwCSBTvCxVoPPTCAUMw7m6CmvrZtE5v84dz16HGmsX",
  "key12": "5ZxeqP2mUmbrt31s1TwygxgQazALQaDXGyT9oFo2WE7tz6i4TnygXuXE46Hm72ivP4ShBVi3gJ8NV2uBjZJXhHwp",
  "key13": "4NVPy7K1Ab9VuwMNU1yLbZ2Z2zSCMWpZ68bcnRXZcdkAkWyDg6iViQ8cbHKEguy6QFP5gqaCDncnpniMaj5Jbqhx",
  "key14": "5iXehyEkm2FRJEEH7USbbfqsbGEmMK6wNypS11SdUt53H74R4yhN4jMgeNjKXzHNdy95abPUQP31cMqhHz6sqjHm",
  "key15": "5vCR95AXnRR9uPrJhELV6oMAyMcfqAcXZmuuoza7mtLnxehKDs1yVzgvMUbFd8Ja8nhPVaKGLQcahtPTQdTBQikp",
  "key16": "5AYzwsPNQ3uyDerkyEJ7yhDWscMYTvj65zTKEeBdunNmwQ38sW1BZdSsWHwk2pfkvGD4XE36NQf2mhpVvuDCrKS7",
  "key17": "4Yzub542aymd5BzLecHquHA5gsWkNAZQ98uJPv6w7AD3RZCkziFhUVhHgmFcHQBM4bJQWMWHbt9ct2ogtfGdHk8Z",
  "key18": "1cd9HTph8fr9WmbdsW5hkcEBbjRDBWYBBECE7mrxxRLUhBLBTm7SPfKkXTPsWt73BJc7GLpgZwER4tf9LDXPW6A",
  "key19": "3qvGArS11qZGTBg87tGXVWM6tzvBCKXTA3U5LtLjRaL1dAoYM1eG19sW8Jz4gsRSNztYzhfUm3NcpU3EyxFNYezB",
  "key20": "4hD3URNjgBQ1tWfxiGMwaEh9TsCXUKRnwDEhS1vqr9foiZrXNM15hnhWBp943qTTiYVoAPU5i4M5n37zghtJj7f8",
  "key21": "2qox66UPYR71N71rPRW9nCaqnhrShAJxy6wW9GxjQTP8RDbPNtYmci43FkvdPMKg88GMp2b7ASMZojZSwD5eubfD",
  "key22": "3WuoCjBjHiKXBbLkxEpUZXuqpPuhdrsxGQXXMLoGHYu5jGK8bZFE6Dt1KiMqyCfrGpVu1FBvQHudU2y1dgEGzVgf",
  "key23": "51h9LHV3YJhCoBSfJYgoM3EncaX3XvdkUTubyKJND9GEpHMbijCv3v9zW3oawcFJnftyYDYTVwsxg9tKVQ31e2XL",
  "key24": "5MmC7fgB4kPLtkGqGe21qaa8mmJk14CBEwg4JDXzKABC8KmWT7xgeB7wUYv3MByR5ZZVAqGRukqhxAXrwv3dKyNp",
  "key25": "ksBLa1vu8bGjikptAR4hzm46XiTexiJ7PMTtVBvbJYQweiACXaiYF4sr7VsbPGhMc4YcX8NCCf8kEczdqhuECqr",
  "key26": "2c4GpR7pBRPV4EvCvebg2z6hNshUvv2UHAcFwGUFxqrvxU9G76JSkezmCHbW4LMseGczqZRZVA4AEhXvEyBiPyn1",
  "key27": "2zSFBG89XtCcJRAfHzYqjsdSoV75kSzp9dmh5HaSFxEoqbLgk1x4HKzNacFjT3HHUKFYegrgXujjCT3ZxJhth2pi",
  "key28": "pzqPn5bjSj9dXN7YP6krytdANWvLcaQx8qmKZ6XMYNSbTBPAvXpuK4kdTJ8UN2pcMaofJU2NWaqqanEyjW9BmzC",
  "key29": "3G9iPxW8kVskX4ktAcA1u7RJ1jVC8UsfRS4eVTkVR1E4r87rGJLsYp5GUuwjy3bRZUhhmBDd1FhEoHD3HTDefB83",
  "key30": "5BKo4nwjT94hoac6bkjTEYGjJeaUJk8fGBzLh4mWuEzBZHCVV9Lh7j8zN4ZPS9z53BsX8B8neMB2PdQmbT8We5fs",
  "key31": "3wugS6jNgDztz21Fve7eDpewVMQBvehRMBtTGFAgQhjdyZvVTqjEPy6bYBYtY6CkhSSjiwMJtEVJGGMj2QBVDHBm",
  "key32": "3wXce6Dj2KpQbibrZEYkgsMuDnPY93ZtnY7scAaQHMQyyqfyBjB6ojgJe2Cj77jZhvgKoKrudXPoJbUSedaanSzN",
  "key33": "5Ckk2BYf3r9YAjMmvwYZyxVooj5iZT9BRiMJVSd8CBBiFUubok5Jg5DEewQg7nr4ULf6BjDC7vsNYdthcZWxQ5NH",
  "key34": "FAHUbcNvSjRNJ77hbZbXi3p7ximapKHCHWuUiSEsEQRvGgSjK4js8fdvoagM6KB2RCeMaFsTxSHNi3Zn1NxN2W5",
  "key35": "2htqPh57irJJdPmEfVx4GGsbQetnRF4VTC3GvQYNW579qaSfFVCnZuStsDeBW99F5Ev9UkWWQc2wtJY4iCGLs7kd",
  "key36": "2VDc5xcMWkPtTSe3PPMURbTeXoWz896gp8mQUWUiQn5KTEuTgMsiFKP2E3BkoB4yceywBVZUnG8kTFyzW9hUNhSh"
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
